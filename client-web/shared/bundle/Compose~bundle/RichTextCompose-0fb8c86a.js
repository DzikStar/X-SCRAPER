"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a"],
    {
        547416: (e, t, s) => {
            s.d(t, { Z: () => _ });
            var i = s(202784),
                o = s(325686),
                a = s(626820),
                n = s(392237),
                r = s(674132),
                d = s.n(r),
                l = s(668214),
                h = s(175856);
            const c = (e, t) => (0, h.t5)(e, h.Oe),
                p = (0, l.Z)()
                    .propsFromState(() => ({ shouldShowEducation: c }))
                    .propsFromActions(() => ({ addEducationFlag: () => (0, h.pj)(h.Oe) })),
                m = d().aa65a44a;
            const u = n.default.create((e) => ({ container: { width: "100%" } })),
                _ = p(function ({ addEducationFlag: e, buttonRef: t, shouldShowEducation: s }) {
                    const n = () => {
                        e();
                    };
                    return i.useEffect(() => n, []), s ? i.createElement(o.Z, { style: u.container }, i.createElement(a.Z, { containerRef: t, onClose: n, text: m })) : null;
                });
        },
        472826: (e, t, s) => {
            s.d(t, { Z: () => Rt });
            s(136728);
            var i = s(202784),
                o = s(476984),
                a = s.n(o),
                n = s(928316),
                r = s(325686),
                d = s(190286),
                l = s(731708),
                h = s(425376),
                c = s(782261),
                p = s(822399),
                m = s(392237),
                u = s(345128),
                _ = s(834324),
                w = s(154003),
                g = s(674132),
                T = s.n(g),
                f = s(689107),
                C = s(276259),
                y = s(912021),
                S = s(744531),
                b = s(370751),
                v = s(666536),
                x = s(685780),
                E = s(2138),
                R = s(908478),
                A = s(417144),
                D = s(323265),
                M = s(88656),
                I = s(251076),
                P = s(512561),
                k = s(459660),
                F = s(697702),
                L = s(702001),
                Z = s(758600),
                B = s(638873),
                V = s(670094),
                O = s(880647),
                U = s(47743),
                N = s(646522),
                W = s(481681),
                H = s(429650),
                $ = s(163889),
                j = s(128225),
                q = s(782826),
                K = s(716233),
                G = s(166677),
                Q = s(507824),
                z = s(349745),
                X = s(942893),
                Y = s(725516),
                J = s(601576),
                ee = s(122868),
                te = s(651723),
                se = s(346789),
                ie = s(90511),
                oe = s(443781),
                ae = s(737613),
                ne = s(513313),
                re = s(533128),
                de = s(316732);
            const le = ({ dismiss: e }) => i.createElement(de.Z, { onAction: e, onClose: e, variant: "ReplyBoostPopup" }),
                he = i.memo(le),
                ce = ({ featureSwitches: e, isAnyPremiumSubscriber: t, isInlineComposer: s, isReply: i }) => !(t || !i || !s) && e.isTrue("subscriptions_upsells_reply_boost_popup_enabled");
            var pe = s(976006),
                me = s(175856),
                ue = s(111531),
                _e = s(25704),
                we = s(736063);
            const ge = T().ceb1ad26,
                Te = T().ea97bc08,
                fe = T().j24c37b2;
            function Ce() {
                return i.createElement(we.H, { errorConfig: Se, suspenseFallback: null }, i.createElement(ye, null));
            }
            function ye() {
                return (0, ue.EM)() ? i.createElement(_e.Z, { actionLabel: fe, enableMaskForDismiss: !0, flag: me.TX, headline: ge, subtext: Te, supportUrl: "https://help.twitter.com/using-twitter/twitter-videos", withCloseButton: !0 }) : null;
            }
            const Se = { context: "DownloadVideoEducation" };
            var be = s(900783);
            function ve(e) {
                const { editorStateRaw: t } = e;
                if (t)
                    for (const s of Object.keys(t.entityMap)) {
                        const i = t.entityMap[s];
                        switch (i.type) {
                            case be.Z.INLINE_IMAGE: {
                                const t = i.data;
                                if (!t) {
                                    const e = { level: "warning", extra: { entity: i } };
                                    (0, $.ZP)("inline_image entity missing data", e);
                                    continue;
                                }
                                const s = xe(t.media_id, e),
                                    o = s?.uploadId;
                                if (!o) {
                                    const e = { level: "warning", extra: { entity: i, media: s } };
                                    (0, $.ZP)("inline_image media missing upload id", e);
                                    continue;
                                }
                                t.media_id = o;
                                break;
                            }
                        }
                    }
            }
            function xe(e, t) {
                for (const s of t.media) if (s.id === e) return s;
                return null;
            }
            var Ee = s(632552);
            const Re = "twc-cc-mask",
                Ae = "tweetButton",
                De = "tweetButtonInline",
                Me = Object.freeze({ Original: "original", Reply: "reply", Quote: "quote", Thread: "thread" }),
                Ie = T().d28215f0,
                Pe = T().ec2fc089,
                ke = T().c7152355,
                Fe = T().ffa5562a,
                Le = T().a2d3facd,
                Ze = T().cc6d0a48,
                Be = T().j499fbcb,
                Ve = T().bb8170da,
                Oe = T().h4dd544e,
                Ue = T().ice925ce,
                Ne = T().eae9e604,
                We = T().gcdf3fd6,
                He = T().c7999d10,
                $e = T().b97f5eb2,
                je = T().g08523f0,
                qe = T().fa53f95c,
                Ke = T().a608b1b4,
                Ge = T().j890123a,
                Qe = T().af4d0a80,
                ze = T().bb01231c,
                Xe = T().if69307c,
                Ye = T().d4ab68e2,
                Je = T().d2c271f6,
                et = T().abb90544,
                tt = T().d3bb6f30,
                st = T().i2209530,
                it = T().bf9b89e4,
                ot = { uploading: { headline: T().i63bfbf0, text: T().a6c55352, confirm: T().c3d89aca, cancel: T().d4ab68e2 } },
                at = T().b983f9e0,
                nt = T().ed5c4342,
                rt = T().j24c37b2,
                dt = T().abc4afcc,
                lt = T().a9a471fa,
                ht = T().a3483f1c,
                ct = T().e839db3a,
                pt = T().g4bcc5f4,
                mt = T().g922bf14,
                ut = T().h3701ffe,
                _t = T().f277e94a,
                wt = T().f58b5009,
                gt = T().fa97f508,
                Tt = T().a5d4fda0,
                ft = T().c091760c,
                Ct = T().ib067d6a,
                yt = T().d38504ad,
                St = document.documentElement && "scrollBehavior" in document.documentElement.style,
                bt = { element: "alt_text_prompt" },
                vt = { component: "article_nudge" };
            class xt extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._isBoosting = !1),
                        (this._isMounted = !0),
                        (this._getParentKey = () => {
                            const { isInline: e, parentTweetId: t } = this.props;
                            return t || (e ? ee.x.homeTimeline : ee.x.modal);
                        }),
                        (this._setSingleComposer = (e) => {
                            const t = this._getParentKey();
                            return this.props.setSingleComposer({ data: e, parentKey: t });
                        }),
                        (this._updateSingleComposer = (e, t) => {
                            const s = this._getParentKey();
                            return this.props.updateSingleComposer({ updates: e, index: t, parentKey: s });
                        }),
                        (this._resetDraft = () => {
                            const e = this._getParentKey(),
                                t = this.isPreview;
                            this.props.resetDraft({ parentKey: e, isPreview: t });
                        }),
                        (this._fetchAutotaggedLocationIfNeeded = () => this.props.fetchAutotaggedLocationIfNeeded().catch(this.props.createLocalApiErrorHandler())),
                        (this._fetchTaggedUsersIfNeeded = (e) => {
                            const { createLocalApiErrorHandler: t, fetchUsersIfNeeded: s } = this.props;
                            return s(e.map((e) => e.user_id)).catch(t());
                        }),
                        (this._syncTexts = () => {
                            const { composerEditorContentMap: e } = this.state;
                            this.props.composerData.forEach((t, s) => {
                                const i = e[t.key];
                                i && this._updateSingleComposer(i, s);
                            });
                        }),
                        (this._hasGif = (e) => e.gifMetadata || e.media.some((e) => e.mediaFile && e.mediaFile.isGif)),
                        (this._hasPhoto = (e) => e.media && e.media.some((e) => e.mediaFile && e.mediaFile.isImage)),
                        (this._hasVideo = (e) => e.media && e.media.some((e) => e.mediaFile && e.mediaFile.isVideo && !e.mediaFile.isGif)),
                        (this._hasValidPoll = (e) => e.pollActive && e.pollValid),
                        (this._handleDeletePreviewTweet = () => {
                            const { deletePreviewTweet: e, previewTweetId: t, removeToast: s } = this.props;
                            t && (s(), e(t));
                        }),
                        (this._handleAnimateComplete = () => {
                            const { activeComposerIndex: e, onHandleAppBarHeight: t } = this.props,
                                s = n.findDOMNode(this._composerRefs[e]);
                            if (s instanceof window.Element) {
                                const { bottom: e, top: i } = s.getBoundingClientRect(),
                                    o = Math.max(i, window.scrollY);
                                if (o < window.pageYOffset || e > window.innerHeight) {
                                    const e = t ? o - t() - 14 : o - 14,
                                        s = Math.max(e, 0);
                                    window.requestAnimationFrame(() => {
                                        St ? window.scrollTo({ top: s, left: 0, behavior: "smooth" }) : window.scrollTo(0, s);
                                    });
                                }
                            }
                        }),
                        (this._handleFetchTweetIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchTweetIfNeeded: t, inReplyToStatus: s, inReplyToStatusId: i, quotedStatus: o, quotedStatusId: a } = this.props;
                            !s && i && t(i).catch(e(L.c)), !o && a && t(a).catch(e(L.c));
                        }),
                        (this._blockHistory = (e, t) => {
                            const { audienceControlsValue: s, isInline: i } = this.props,
                                o = Dt.composeTweetRoute.test(this._initialPathname),
                                a = !i && o && Dt.unsentRoutes.test(e.pathname),
                                n = !i && o && !Dt.composeTweetRoute.test(e.pathname);
                            return this.shouldShowDiscardConfirmation && "POP" === t && n ? (this.setState({ showDiscardTweetConfirmation: !0 }), !1) : this._canSaveDraft && a && "PUSH" === t ? (this.shouldShowDiscardConfirmation ? (this.setState({ showDiscardTweetConfirmation: !0, navigatingToOutbox: a }), !1) : (this.state.isAutoSaved || this._resetDraft(), !0)) : this.shouldShowBackgroundSendConfirmation && "POP" === t && n ? (this._cancelAllMediaUploads(), !1) : !("POP" === t && n && this._areComposersEmptyOrUnchanged && !(0, H.Ph)(s)) || (this._resetDraft(), !0);
                        }),
                        (this._getKeyCommandHandlers = () => {
                            const { typeaheadActive: e } = this.state;
                            return e ? this._keyCommandHandlersForActiveTypeahead : this._keyCommandHandlers;
                        }),
                        (this.handleTweetOrRetweet = () => {
                            this.isEdit ? this._scribe({ section: "composition", component: "edit_tweet", element: "update_tweet", action: "click" }) : this._scribe({ section: "composition", element: "send_tweet", action: "click" });
                            return this._areComposersValid() ? (this.shouldShowAltTextPrompt ? (this.setState({ showAltTextPrompt: !0 }), this._scribe({ ...bt, action: "show" }), Promise.resolve()) : (this._handleTweetOrRetweet() ?? Promise.resolve())) : Promise.resolve();
                        }),
                        (this._handleTweetOrRetweetPress = () => {
                            this.handleTweetOrRetweet();
                        }),
                        (this.handleTweetWithBoost = () => (
                            (this._isBoosting = !0),
                            this.handleTweetOrRetweet()
                                .then((e) => e?.[0]?.id_str)
                                .finally(() => {
                                    this._isBoosting = !1;
                                })
                        )),
                        (this._handleTweetOrRetweet = () => (this.isRetweet ? this._handleRetweet() : this._handleTweet())),
                        (this._findDiscardHeadline = () => (this.isThread ? Ge : this.isEdit && this._editTweetCompositionEnabled() ? Qe : Ke)),
                        (this._renderReplyContext = () => {
                            const { activeUser: e, excludedRecipients: t, inReplyToStatus: s, isInline: o, isSelfThreadReply: a, selectedCommunityName: n } = this.props;
                            if (s && this._shouldBeExpanded()) return i.createElement(te.Z, { communityName: n, excludedRecipients: t, inReplyToStatus: s, key: t.join(), onPress: this._handleViewRecipients, shouldDisplayRepliesText: !a, showParentTweet: !o, viewerUser: e });
                        }),
                        (this._renderAltTextPrompt = () => {
                            const { numberOfImages: e } = this._getAltTextMetadata(),
                                t = i.createElement(i.Fragment, null, i.createElement(r.Z, null, Fe), i.createElement(r.Z, { style: Et.altTextPromptParagraph }, Le({ numberOfImages: e })), i.createElement(r.Z, { style: Et.altTextPromptParagraph }, Ze));
                            return i.createElement(d.Z, { Icon: f.default, cancelButtonLabel: Ve, confirmButtonLabel: Be({ numberOfImages: e }), headline: ke({ numberOfImages: e }), onCancel: this._handleIgnoreAltTextPrompt, onConfirm: this._handleAcceptAltTextPrompt, onMaskClick: this._handleCancelAltTextPrompt, text: t });
                        }),
                        (this._handleEditTweetLimitedMarketPromptDismissed = () => {
                            const { setEditTweetLimitedMarketPromptDismissed: e } = this.props;
                            e();
                        }),
                        (this._renderEditTweetLimitedMarketPrompt = () => {
                            const { withEditTweetLimitedMarketPrompt: e } = this.props,
                                t = e && this.isEditingWithTwitterBlue,
                                s = { text: rt, onClick: this._handleEditTweetLimitedMarketPromptDismissed },
                                o = i.createElement(r.Z, { style: Et.editTweetLimitedMarketPrompt }, i.createElement(l.ZP, { weight: "bold" }, nt), i.createElement(l.ZP, null, i.createElement(T().I18NFormatMessage, { $i18n: "d247a0b9" }, i.createElement(l.ZP, { link: "https://help.twitter.com/using-x/edit-tweet" }, T().dd6734c2))));
                            return i.createElement(h.Z, { actionPrimary: s, headline: at, onDismiss: this._handleEditTweetLimitedMarketPromptDismissed, shouldDisplay: t, text: o });
                        }),
                        (this._renderDelegateAlertBanner = () => {
                            const e = this.props.viewerUser?.id_str,
                                t = this.context.loggedInUserId !== e;
                            return e && t ? i.createElement(ae.Z, { isReply: this.isReply, type: "Tweet" }) : null;
                        }),
                        (this._handleAddComposer = () => {
                            const { addComposer: e, copyDataFromInlineComposerToModalComposer: t, isInline: s, parentTweetId: i } = this.props;
                            this.isInlineReply ? t(i) : s && t(ee.x.homeTimeline), e();
                        }),
                        (this._makeAddComposerLink = (0, y.Z)((e, t, s) => (0, Ee.TT)({ isInline: e, isSelfThreadReply: t, parentTweetId: s }))),
                        (this._setRootRef = (e) => {
                            e && (this._root = e);
                        }),
                        (this._handleTweet = () => {
                            if ((this.state.willAutoSave && this._cancelPendingAutoSave(), !this.state.showLastEditConfirmation && this.props.isLastEdit)) return void this.setState({ showLastEditConfirmation: !0 });
                            const { scheduledFor: e } = this.props.composerData[0];
                            if ((this.setState({ errorMessage: void 0 }), !e)) return this._handleSendTweet();
                            (0, z.TO)(e) && this._handleScheduleTweet();
                        }),
                        (this._handleTweetError = (e, t) => (s) => {
                            const { analytics: i, createLocalApiErrorHandler: o } = this.props;
                            if ((0, G.O9)(s) && s.code === A.d.CANCELED) return i.scribeAction(e), Promise.resolve();
                            const a = (0, G.ZP)(s);
                            if (a) return this.setState({ errorMessage: a }), Promise.resolve();
                            o({ ...(t || (0, V.d)(void 0, !1)) })(s);
                            const n = s instanceof M.Z && t?.[s.errors[0]?.code];
                            this.setState({
                                errorMessage: {
                                    text: (() => {
                                        if (n) {
                                            if (n.toast) return n.toast.text;
                                            if (n.customAction) {
                                                const e = n.customAction(s.errors[0]);
                                                if ("string" != typeof e && (0, J.ud)(e)) {
                                                    const t = e.payload?.text;
                                                    if (t) return t;
                                                }
                                            }
                                        }
                                        return this.isEdit ? ft : Tt;
                                    })(),
                                },
                            });
                        }),
                        (this._handleScheduleTweet = () => {
                            const { addToast: e, composerData: t, excludedRecipients: s, inReplyToStatus: i, schedule: o } = this.props,
                                a = t.map((e) => this._getSingleComposerDataWithLatestText(e));
                            a.forEach((e) => {
                                Q.SC(e, this.context) && ve(e);
                            });
                            const n = this.isThreadsEnabledInScheduling ? a : a.slice(0, 1);
                            o({ excludedRecipients: s, inReplyToStatus: i, scheduleData: n })
                                .then((t) => {
                                    this.setState({ tweetsSentOrScheduled: !0 });
                                    const s = (0, z.o3)(n[0].scheduledFor);
                                    if (s) {
                                        const i = (0, z.vh)(s),
                                            o = (0, z.g6)(s),
                                            n = wt({ scheduleDate: i, scheduleTime: o });
                                        e({ text: n, action: { label: _t, link: { pathname: "/compose/post/unsent/scheduled" } } }), this._scribeTweetSent(a[0], { ...t, id_str: t.scheduled_id_str }, { isScheduled: !0 });
                                    }
                                    this._updateConvoCardState(), this._close({ withGraduateAccessCheck: !0 });
                                })
                                .catch(this._handleTweetError("schedule_tweet_cancel", B.Z));
                        }),
                        (this._handleDraftTweet = (e) => {
                            const { addToast: t, draftTweet: s, excludedRecipients: i, inReplyToStatus: o } = this.props,
                                a = this.props.composerData.map((e) => this._getSingleComposerDataWithLatestText(e));
                            a.forEach((e) => {
                                Q.SC(e, this.context) && ve(e);
                            });
                            s({ excludedRecipients: i, inReplyToStatus: o, draftData: this.isThreadsEnabledInDrafting ? a : a.slice(0, 1), isAutoSave: e })
                                .then((s) => {
                                    this.setState({ showDiscardTweetConfirmation: !1 }),
                                        e
                                            ? (this.setState({ isAutoSaved: !0 }, () => {
                                                  this.setState({ willAutoSave: !1 });
                                              }),
                                              this._updateSingleComposer({ draftTweetId: s.draft_id_str }))
                                            : (t({ text: it, action: { label: _t, link: { pathname: "/compose/post/unsent/drafts" } } }), this._scribeTweetSent(a[0], { ...s, id_str: s.draft_id_str }, { isDraftTweet: !0 }), this._updateConvoCardState(), this._close());
                                })
                                .catch(this._handleTweetError("draft_tweet_cancel", B.Z));
                        }),
                        (this._editTweetCompositionEnabled = () => {
                            const { featureSwitches: e, userClaims: t } = this.context;
                            return !!e.isTrue("responsive_web_edit_tweet_composition_enabled") && (t?.isTrueAndEnabled("subscriptions_feature_labs_1004") || e.isTrue("responsive_web_edit_tweet_enabled"));
                        }),
                        (this._getToastMessage = (e) => {
                            const { composerData: t, previousTweetId: s } = this.props,
                                { featureSwitches: i } = this.context,
                                o = !(this.isReply || this.isThread || this.isRetweet || this._hasValidPoll(t[0]) || this.isExclusiveTweet),
                                a = i.isTrue("responsive_web_one_hour_edit_window_enabled"),
                                n = a ? qe : je,
                                r = a ? We : Ne;
                            return this.isPreview ? (o && this._editTweetCompositionEnabled() ? n : $e) : s ? Ue : o && this._editTweetCompositionEnabled() ? r : e;
                        }),
                        (this._getToastVarientConfig = () => {
                            const { featureSwitches: e } = this.context,
                                t = e.isTrue("japan_holidays_is_labor_thanks_giving_day"),
                                s = e.getArrayValue("japan_holidays_labor_thanks_giving_message_trigger"),
                                i = e.getStringValue("japan_holidays_labor_thanks_giving_day_message", "");
                            if (t) return { type: "jp-holiday-labor-thanksgiving", payload: { triggers: s, message: i } };
                        }),
                        (this._handleSendTweet = () => {
                            const { activeUser: e, addToast: t, analytics: s, audienceControlsValue: i, excludedRecipients: o, hasArticleNudge: a, history: n, inReplyToStatus: r, isSelfThreadReply: d, location: l, previousTweetId: h, promotedContent: p, selectedCommunityName: m, send: u } = this.props,
                                { conversationControlsValue: _, exclusivityControlValue: w, trustedFriendsValue: g, trustedFriendsMemberCount: T, broadcast: f, premiumExclusiveControlOptions: C } = i,
                                y = this.isPreview,
                                b = this.props.composerData.map((e) => this._getSingleComposerDataWithLatestText(e)),
                                v = (0, z.o3)(b[0].scheduledFor);
                            if (v) {
                                const e = (0, z.vh)(v),
                                    s = (0, z.g6)(v),
                                    i = wt({ scheduleDate: e, scheduleTime: s });
                                return t({ text: i, action: { label: _t, link: "" } }), void this._close({ withGraduateAccessCheck: !0 });
                            }
                            o.length > 0 && s.scribe({ element: "mentions", action: "edited" }), g && s.scribe({ action: "send_trusted_friends_tweet", data: { trusted_friends_control_details: { list_member_count: T } } });
                            const [x] = b,
                                E = this._getSingleComposerDataWithLatestText(x);
                            if ("community" === _) s.scribe({ action: "send_community_tweet" });
                            else if ("by_invitation" === _) {
                                const e = (0, U.FI)(E.text);
                                s.scribe({ action: e ? "send_mentioned_tweet_with_mentions" : "send_mentioned_tweet_without_mentions" });
                            } else "followers" === _ ? s.scribe({ action: "send_my_followers_tweet" }) : "subscribers" === _ ? s.scribe({ action: "send_my_subscribers_tweet" }) : "verified" === _ && s.scribe({ action: "send_verified_only_tweet" });
                            b.forEach((e) => {
                                Q.SC(e, this.context) && (s.scribe({ element: "note_tweet", action: "send" }), Object.keys(e.editorStateRaw?.entityMap || {}).length > 0 && s.scribe({ element: "note_tweet", action: "send_inline_media" }), ve(e));
                            });
                            const R = r?.community_id_str || i.communityIdValue || void 0,
                                D = [];
                            this.props.composeSemanticCoreId && D.push(this.props.composeSemanticCoreId), R && D.push(`8.31.${R}`);
                            const M = D.join(",");
                            return u({ sendData: b, communityIdValue: R, conversationControlsValue: _, excludedRecipients: o, exclusivityControlValue: w, inReplyToStatus: r, isSelfThreadReply: d, previousTweetId: h, promotedContent: p, composeSemanticCoreId: M, isPreview: y, trustedFriendsValue: g, tweetType: this.tweetType, broadcast: f, disallowedReplyControls: this.state.disallowedReplyControls, premiumExclusiveControlOptions: C })
                                .then((s) => {
                                    !y && this._isMounted && this.setState({ tweetsSentOrScheduled: !0 }), s.map((e, t) => this._scribeTweetSent(b[t], e, { hasArticleNudge: a })), s.length > 1 && this._scribeThreadSent(b, s, "thread_send_success");
                                    let i = s.length > 1 ? He : Oe;
                                    if (R && m) {
                                        const e = m,
                                            t = s.length;
                                        i = Pe({ numOfTweets: t, communityName: e });
                                    }
                                    const o = y && this.isReply,
                                        d = { label: _t, link: void 0, onAction: void 0 };
                                    if (o || !y) {
                                        const t = o ? s[0].in_reply_to_status_id_str : s[0].id_str;
                                        d.link = { pathname: `/${e ? e.screen_name : "i"}/status/${t || ""}` };
                                    } else d.onAction = (0, Ee.Qg)(n, l, R);
                                    const p = this._getToastVarientConfig(),
                                        u = !r && p?.payload.triggers.some((e) => b.some((t) => t.text.includes(e)));
                                    if ((t({ text: this._getToastMessage(i), action: d, variant: u ? p : void 0 }), this.isInlineReply && this._isMounted && this.setState({ focused: !1 }), s[0] && h)) {
                                        const e = c.Z.getOriginalTweet(s[0]);
                                        if (n.getLastNonModalLocationPathname() === `/${e.user.screen_name}/status/${h}`) {
                                            const t = c.Z.getTweetLatestVersionPermalink(e);
                                            n.replace({ pathname: t });
                                        }
                                    }
                                    return this._updateConvoCardState(), this._close({ withGraduateAccessCheck: !0 }), s;
                                })
                                .then(() => {
                                    this.setState({ showReplyBoostUpsell: ce({ isAnyPremiumSubscriber: this.isAnyPremiumSubscriber, isReply: this.isReply, featureSwitches: this.context.featureSwitches, isInlineComposer: this.isInlineReply }) });
                                })
                                .catch((e) => {
                                    const { sentTweets: t = [] } = e,
                                        i = Array.isArray(e.errors) ? e.errors[0]?.code : e.code,
                                        o = e?.url,
                                        r = e?.status,
                                        d = { message: e.type, event_info: i ? `${i}` : void 0, status_code: r, url: o };
                                    throw (t.map((e, t) => this._scribeTweetSent(b[t], e), { hasArticleNudge: a }), ((0, G.O9)(e) && e.code === A.d.CANCELED) || s.scribe({ action: "send_tweet_failure", data: d }), b.length > 1 && this._scribeThreadSent(b, t, "thread_send_failure"), t.length && n.replace({ pathname: l.pathname, state: { ...(0, S.Z)(l.state || {}, "quotedStatus"), inReplyToStatusId: t[t.length - 1].id_str, isSelfThreadReply: !0 } }), e);
                                })
                                .catch(this._handleTweetError("send_tweet_cancel", B.Z));
                        }),
                        (this._setActiveParentKey = () => {
                            const { setActiveParentKey: e } = this.props;
                            e(this._getParentKey());
                        }),
                        (this._scribeSoftNudgeWithQuoteTweet = (e, t, s) => {
                            "soft_nudge_with_quote_tweet" === e?.limited_actions && this._scribe({ action: t }, s);
                        }),
                        (this._scribeTweetSent = (e, t, { hasArticleNudge: s = !1, isDraftTweet: i = !1, isScheduled: o = !1 } = {}) => {
                            const a = e.scheduledTweetId ? "schedule_edit_" : "schedule_",
                                n = e.draftTweetId ? "draft_edit_" : "draft_",
                                r = i ? n : o ? a : "send_",
                                d = { items: [X.Z.getTweetItem(t)] },
                                l = e.media.some((e) => !!e.mediaMetadata?.altText),
                                h = e.mediaTags.length,
                                c = (0, b.Z)(
                                    e.media
                                        .map((e) => {
                                            const t = e.mediaMetadata?.sensitiveMediaWarning;
                                            return t ? Array.from(t) : void 0;
                                        })
                                        .filter(Boolean)
                                        .flat(),
                                ),
                                p = this.props.isInline ? "inline_reply" : "tweet_box_dialog";
                            if ((this._scribe({ action: `${r}tweet` }, d), i || !e.draftTweetId || e.scheduledTweetId || this._scribe({ action: `${r}draft_tweet` }, d), e && this._getSingleComposerDataWithLatestText(e)?.text?.length > 0 && this._scribeSoftNudgeWithQuoteTweet(e.quotedStatus, "soft_nudge_with_qt_retweet_with_comment", d), this.isQuoteTweet && (this._scribe({ action: "retweet_with_comment" }, d), s && this._scribe({ ...vt, element: "result", action: "retweet_with_comment" }, d)), this.isReply && this._scribe({ component: p, action: `${r}reply` }, d), this._hasValidPoll(e) && this._scribe({ action: `${r}poll_tweet` }, d), this._hasPhoto(e) && (this._scribe({ action: `${r}photo_tweet` }, d), l && this._scribe({ action: `${r}photo_tweet_with_alt_text` }, d), h && this._scribe({ action: `${r}photo_tweet_with_tags` }, d)), this._hasVideo(e) && (this._scribe({ action: `${r}video_tweet` }, d), h && this._scribe({ action: `${r}video_tweet_with_tags` }, d)), c.size)) {
                                const t = this._hasPhoto(e) ? "photo" : "video";
                                c.forEach((e) => {
                                    this._scribe({ action: `${r}${t}_tweet_with_${e}_warning` }, d);
                                });
                            }
                            if (e.gifMetadata) {
                                const s = t.id_str && X.Z.getGifSearchItemForTweet(t.id_str, e.gifMetadata);
                                this._scribe({ element: "remote", action: `${r}gif_tweet` }, { items: s ? [s] : [] });
                                const i = e.media.some((e) => !!e.mediaMetadata?.defaultAltText);
                                (l || i) && this._scribe({ element: "remote", action: `${r}gif_tweet_with_alt_text` }, { event_info: l ? "user_entered" : "from_provider", items: s ? [s] : [] }), h && this._scribe({ action: `${r}gif_tweet_with_tags` }, d);
                            } else this._hasGif(e) && (this._scribe({ element: "local", action: `${r}gif_tweet` }, d), l && this._scribe({ element: "local", action: `${r}gif_tweet_with_alt_text` }, d));
                        }),
                        (this._scribeThreadSent = (e, t, s) => {
                            const { inReplyToStatus: i } = this.props,
                                o = { items: [X.Z.getSendThreadItem(e, t.length, !!i)] };
                            this._scribe({ action: s }, o);
                        }),
                        (this._scribeRetweet = (e) => {
                            const { hasArticleNudge: t } = this.props,
                                s = { items: [X.Z.getTweetItem(e)] };
                            this._scribeSoftNudgeWithQuoteTweet(e, "soft_nudge_with_qt_retweet", s), this._scribe({ action: "retweet" }, s), t && this._scribe({ ...vt, element: "result", action: "retweet" }, s);
                        }),
                        (this._handleRetweet = () => {
                            const { composerData: e, createLocalApiErrorHandler: t, retweet: s } = this.props,
                                i = e[0].quotedStatus;
                            i &&
                                (this._scribeRetweet(i),
                                s(i.id_str, {}).then((e) => {
                                    this.setState({ tweetsSentOrScheduled: !0 }), this._close({ withGraduateAccessCheck: !0 });
                                }, t(Z.l)));
                        }),
                        (this.handleDismissComposer = () => {
                            this.shouldShowDiscardConfirmation ? this.setState({ showDiscardTweetConfirmation: !0 }) : this.shouldShowBackgroundSendConfirmation ? this._cancelAllMediaUploads() : this._close();
                        }),
                        (this.handleEditTimeLimitExceeded = () => {
                            this.setState({ showEditTimeLimitExceededConfirmation: !0 });
                        }),
                        (this.setDisallowedReplyControls = (e) => {
                            this.setState({ disallowedReplyControls: e });
                        }),
                        (this._cancelAllMediaUploads = () => {
                            this.props.composerData.forEach((e) => e.media.forEach((e) => e.uploading && e.uploader && e.uploader.cancel()));
                        }),
                        (this._handleConfirmDiscardTweet = () => {
                            const { analytics: e, hasArticleNudge: t } = this.props;
                            this._cancelAllMediaUploads(), this.setState({ showDiscardTweetConfirmation: !1 }), this._close();
                            const s = this._canSaveDraft ? "draft" : "send";
                            e.scribeAction(`${s}_tweet_discard`), t && this._scribe({ ...vt, element: "result", action: "cancel" });
                        }),
                        (this._handleCancelDiscardTweet = () => {
                            this.setState({ showDiscardTweetConfirmation: !1 }, () => {
                                this._restoreFocusToActiveComposer();
                            });
                        }),
                        (this._handleCancelLastEditConfirmation = () => this.setState({ showLastEditConfirmation: !1 })),
                        (this._handleAcceptAltTextPrompt = () => {
                            this.setState({ showAltTextPrompt: !1 });
                            const { history: e } = this.props,
                                { noDescriptionImageIDs: t } = this._getAltTextMetadata();
                            t[0] && (this._scribe({ ...bt, action: "accepted" }), e.push("/compose/post/media", { mediaId: t[0], tab: ne.P.AltText, hideTabs: !0, showAllMedia: !0 }));
                        }),
                        (this._handleIgnoreAltTextPrompt = () => {
                            this._scribe({ ...bt, action: "declined" }), this.setState({ showAltTextPrompt: !1 }), this._handleTweetOrRetweet();
                        }),
                        (this._handleCancelAltTextPrompt = () => {
                            this._scribe({ ...bt, action: "cancel" }),
                                this.setState({ showAltTextPrompt: !1 }, () => {
                                    this._restoreFocusToActiveComposer();
                                });
                        }),
                        (this._restoreFocusToActiveComposer = () => {
                            const { activeComposerIndex: e } = this.props;
                            void 0 !== e && this._composerRefs[e] && this._composerRefs[e].focus();
                        }),
                        (this._close = ({ withGraduateAccessCheck: e } = {}) => {
                            const { history: t, isSending: s, onCloseComposer: i, showGraduatedAccess: o } = this.props,
                                a = e && o && !this.isPreview;
                            s || this._resetDraft(), this.state.navigatingToOutbox ? (this._canSaveDraft ? t.push("/compose/post/unsent/drafts") : t.push("/compose/post/unsent/scheduled")) : a ? t.push({ pathname: "/i/graduated-access", query: { graduatedAccessScribeSrc: "compose" } }) : i && i();
                        }),
                        (this._handleComposerFocus = (e) => {
                            this._composerRefs[e]
                                ? this.props.updateActiveComposerIndex(e)
                                : setTimeout(() => {
                                      this._restoreFocusToActiveComposer();
                                  }, 0);
                        }),
                        (this._handleFocus = () => {
                            const { focused: e } = this.state;
                            e || (this.isInlineReply && this._scribe({ element: "inline_reply", action: "reply" }), this.setState({ focused: !0 }));
                        }),
                        (this._handleTypeaheadStateChange = (e) => {
                            this.setState({ typeaheadActive: e });
                        }),
                        (this._handleRemoveComposer = () => {
                            const { activeComposerIndex: e, composerData: t, history: s, location: i, removeComposer: o } = this.props;
                            0 === e && t[0].quotedStatus && s.replace({ pathname: i.pathname, state: (0, S.Z)(i.state || {}, "quotedStatus") }), o(), setTimeout(this._restoreFocusToActiveComposer);
                        }),
                        (this._handleViewRecipients = () => {
                            const { excludedRecipients: e, history: t, inReplyToStatus: s } = this.props;
                            this._setActiveParentKey(), t.push({ pathname: "/compose/post/recipients", state: { excludedRecipients: e, inReplyToStatus: s } });
                        }),
                        (this._performAutoSave = (0, v.Z)(
                            () => {
                                this.state.showDiscardTweetConfirmation ? this.setState({ willAutoSave: !1 }) : (this._scribe({ section: "composition", component: "autosave", action: "save" }), this._handleDraftTweet(!0));
                            },
                            this.context.featureSwitches.getValue("responsive_web_composer_autosave_debounce_ms") || 4e3,
                        )),
                        (this._maybeAutoSave = () => {
                            if (!this._isAutoSaveEnabled) return;
                            const e = this._getSingleComposerDataWithLatestText(this.props.composerData[0]);
                            let t = !1;
                            Q.at(e, this.context, 50) && ((t = !0), this.setState({ exceededLengthLimitOnce: t }));
                            const s = (0, H._2)(e);
                            (this.state.exceededLengthLimitOnce || t || this.state.isAutoSaved) && this._canSaveDraft && !s && !this.state.showDiscardTweetConfirmation
                                ? this.setState({ willAutoSave: !0 }, () => {
                                      this._performAutoSave();
                                  })
                                : this._cancelPendingAutoSave();
                        }),
                        (this._cancelPendingAutoSave = () => {
                            this._performAutoSave.clear(), this.setState({ willAutoSave: !1 });
                        }),
                        (this._updateEditorContent = (e, t) => {
                            const { activeComposerIndex: s, isInline: i, setValidity: o } = this.props,
                                a = { ...this.state.composerEditorContentMap, [e]: t };
                            if (
                                (this.setState({ composerEditorContentMap: a }, () => {
                                    o && o(this._areComposersValid()), this._maybeAutoSave();
                                }),
                                this.setState({ errorMessage: void 0 }),
                                D.ZP.isIOS())
                            ) {
                                const e = i ? 0 : s;
                                this._updateSingleComposer(t, e);
                            }
                        }),
                        (this._handleTextChange = (e, t) => {
                            const s = this.state.composerEditorContentMap[e];
                            s && ((t.mediaTitle = s.mediaTitle ?? ""), (t.mediaDescription = s.mediaDescription ?? "")), this._updateEditorContent(e, t);
                        }),
                        (this._handleMediaTitleChange = (e, t) => {
                            let s = this.state.composerEditorContentMap[e];
                            s ? (s.mediaTitle = t) : (s = { text: "", mediaDescription: "", mediaTitle: t }), this._updateEditorContent(e, s);
                        }),
                        (this._handleMediaDescriptionChange = (e, t) => {
                            let s = this.state.composerEditorContentMap[e];
                            s ? (s.mediaDescription = t) : (s = { text: "", mediaTitle: "", mediaDescription: t }), this._updateEditorContent(e, s);
                        }),
                        (this._handleTextOnBlur = (0, y.Z)((e, t) => () => {
                            if (!this.props.composerData.some((t) => t.key === e)) return;
                            if (this.state.tweetsSentOrScheduled) return;
                            const s = this.state.composerEditorContentMap[e];
                            "object" == typeof s && this._updateSingleComposer(s, t);
                        })),
                        (this._updateAudienceControlsValue = (e) => {
                            const { updateAudienceControlsValue: t } = this.props,
                                { errorMessage: s } = this.state;
                            if ("community_members" === e._type) {
                                if (!this._isCommunitiesEnabled) return;
                                s?.text === Ie && this.setState({ errorMessage: void 0 });
                            }
                            t(e, this._getParentKey());
                        }),
                        (this._closeReplyBoostUpsell = () => this.setState({ showReplyBoostUpsell: !1 })),
                        (this._renderReplyBoostUpsell = () => i.createElement(he, { dismiss: this._closeReplyBoostUpsell })),
                        (this._renderProgressBar = () => {
                            const { isSending: e, sendingProgress: t } = this.props,
                                s = e ? Math.max(t, 0.02) : 0;
                            return i.createElement(p.Z, { progress: s, style: [Et.progressBar, { visibility: s ? "visible" : "hidden" }] });
                        }),
                        (this._updateConvoCardState = () => {
                            const { convoCardData: e, updateConvoCardState: t } = this.props;
                            if (e) {
                                const { cardId: s, nextState: i } = e;
                                i && s && t(s, { cardState: i });
                            }
                        }),
                        (this._attachExternalMedia =
                            (e) =>
                            (t, s = [], i) =>
                                Promise.all(t.map((e) => (0, j.f)(e))).then((t) => this._handleAddMediaFiles(e)(t, s, i))),
                        (this._handleAddMediaFiles =
                            (e) =>
                            (t, s = [], i = []) => {
                                const { addMedia: o, addToast: a, composerData: n, dataSaverMode: r, processMultipleMedia: d, removeMediaUpload: l, uploadMedia: h } = this.props,
                                    c = n[e],
                                    p = c.pollActive,
                                    m = this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled");
                                p ||
                                    o(t, { location: K.vC.Tweet, uploadIds: s, altTexts: i }).then((t) => {
                                        this._maybeAutoSave();
                                        const s = t.map((e) => e.id);
                                        if ((0, U.X2)([...c.media, ...t], m, this._maxMediaUploads)) {
                                            const i = c.media.map((e) => e.id);
                                            this._updateSingleComposer({ mediaIds: [...(0, b.Z)(i.concat(s))] }, e),
                                                d(t, { onFailure: this._handleMediaRemoveFactory(e) }).then((e) => {
                                                    r ||
                                                        h(
                                                            e.map((e) => e.id),
                                                            { withoutReUpload: this.isEdit },
                                                        );
                                                });
                                        } else {
                                            if (m) {
                                                const e = yt({ maxMediaCap: this._maxMediaUploads });
                                                a({ text: e });
                                            } else a({ text: Ct });
                                            l(s);
                                        }
                                    });
                            }),
                        (this._handleMediaRemoveFactory = (e) => (t) => this._handleMediaRemove(e, t)),
                        (this._handleMediaRemove = (e, t) => {
                            const { composerData: s, removeMediaUpload: i } = this.props,
                                { media: o, mediaTags: a } = s[e],
                                n = o.map((e) => e.id),
                                r = (0, x.Z)(n, t),
                                d = r.length > 0 ? a : [];
                            this._updateSingleComposer({ mediaIds: r, gifMetadata: void 0, mediaTags: d }, e), i(t), this.setState({ errorMessage: void 0 }), this._restoreFocusToActiveComposer();
                        }),
                        (this._setComposerRef = (e) => (t) => {
                            this._composerRefs[e] = t;
                        }),
                        (this._shouldBeExpanded = () => {
                            const { composerData: e, parentTweetId: t } = this.props,
                                { focused: s } = this.state;
                            if (s) return !0;
                            const i = !(0, H._2)(this._getSingleComposerDataWithLatestText(e[0]));
                            return !t || i;
                        }),
                        (this._linksDisabledInReplies = () => {
                            const { activeUser: e, inReplyToStatus: t, rootTweet: s } = this.props;
                            return s?.user?.id_str !== e?.id_str && (t?.disallowedReplyControls?.map((e) => e.control)?.includes(k.m.Links) || !1);
                        }),
                        (this._hasValidUrls = (e) => {
                            if (!this.context.featureSwitches.isTrue("disallowed_reply_controls_callout_enabled")) return !0;
                            if (!this.isReply) return !0;
                            if (!this._linksDisabledInReplies()) return !0;
                            return ((0, ie.dm)(e.text) || []).filter((e) => q.ZP.isExternalUrl(e)).length <= 0;
                        }),
                        (this._areComposersValid = () => {
                            const {
                                    audienceControlsValue: { _type: e },
                                    composerData: t,
                                    prepopulatedText: s,
                                    previousTweetMedia: i,
                                    previousTweetTags: o,
                                } = this.props,
                                a = t[0].quotedStatus,
                                n = a?.community_id_str,
                                r = "community_members" === e,
                                d = "trusted_friends_tweet" === e,
                                l = a && (0, re.$y)(this.context.featureSwitches, a, re.d.Retweet);
                            if (this.isRetweet && !n && !r && !d && !l) return !0;
                            if (
                                !t.every((e) => {
                                    const t = this.isThread,
                                        s = { ...this.context, isThread: t },
                                        i = this._getSingleComposerDataWithLatestText(e);
                                    return (0, H.SP)(i, s) && this._hasValidUrls(i);
                                })
                            )
                                return !1;
                            return !(
                                this.isEdit &&
                                (0, H.SZ)(
                                    this._getSingleComposerDataWithLatestText(t[0]),
                                    this.state.previousTweetText ?? s,
                                    i.map((e) => e.uploadId),
                                    o,
                                )
                            );
                        }),
                        (this._areComposersEmptyOrUnchanged = () => {
                            const { composerData: e, prepopulatedText: t } = this.props;
                            return e.every((e) => (0, H._2)(e) || (0, H.SZ)(this._getSingleComposerDataWithLatestText(e), t));
                        }),
                        (this._getAltTextMetadata = () => {
                            const { composerData: e } = this.props,
                                t = { numberOfDescriptionsMissing: 0, numberOfImages: 0, noDescriptionImageIDs: [] };
                            return (
                                e.forEach((e) => {
                                    const s = (e.media || []).filter(({ externalMediaDetails: e, mediaFile: t }) => t?.isImage || t?.isGif || e?.mediaType === C.Re),
                                        i = s.filter(({ mediaMetadata: e }) => !e?.altText).map((e) => e.id);
                                    (t.numberOfImages += s.length), t.noDescriptionImageIDs.push(...i);
                                }),
                                (t.numberOfDescriptionsMissing = t.noDescriptionImageIDs.length),
                                t
                            );
                        }),
                        (this._getSingleComposerDataWithLatestText = (e) => {
                            const { composerEditorContentMap: t } = this.state,
                                s = t[e.key],
                                i = Object.keys(e.editorStateRaw?.entityMap || {}).length > 0;
                            if ((e && void 0 === e.text && (0, $.ZP)("ComposeContainer: singleComposerData.text is undefined"), s && void 0 === s.text && (0, $.ZP)("ComposeContainer: composerData.text is undefined"), "object" == typeof s)) {
                                const t = { ...e, ...s };
                                return i && (t.lateUpdateEditorStateRaw = e.editorStateRaw), t;
                            }
                            return e;
                        });
                    const s = !!e.location.state?.focusComposer;
                    (this._isAutoSaveEnabled = this.context.featureSwitches.isTrue("responsive_web_composer_autosave_enabled") && this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1014")), (this._maxMediaUploads = this.context.featureSwitches.getNumberValue("rweb_mixed_media_uploads_cap") || W.nO);
                    const [o] = e.composerData;
                    (this.state = { focused: s, showAltTextPrompt: !1, showDiscardTweetConfirmation: !1, showEditTimeLimitExceededConfirmation: !1, showLastEditConfirmation: !1, composerEditorContentMap: {}, tweetsSentOrScheduled: !1, typeaheadActive: !1, isAutoSaved: this._isAutoSaveEnabled && !!o.draftTweetId, willAutoSave: !1, exceededLengthLimitOnce: !1, disallowedReplyControls: [], showReplyBoostUpsell: !1 }), (this._composerRefs = {}), (this._throttledSyncTexts = (0, E.Z)(this._syncTexts, 1e3, { leading: !0, trailing: !1 })), (this._keyCommandHandlers = { [W.NF]: this.handleTweetOrRetweet, [W.Bp]: this.handleDismissComposer }), (this._keyCommandHandlersForActiveTypeahead = { [W.NF]: this.handleTweetOrRetweet }), (this._isAltTextNudgeEnabled = !0 === this.context.featureSwitches.getValueWithoutScribeImpression("responsive_web_alt_text_nudges_enabled")), (this._isCommunitiesEnabled = this.context.featureSwitches.isTrue("c9s_enabled"));
                }
                UNSAFE_componentWillMount() {
                    const { onRef: e } = this.props;
                    e && e(this);
                }
                componentDidMount() {
                    const { composerData: e, convoCardData: t, externalMedia: s, externalMediaFiles: i, fetchAltTextPromptPreferenceIfNeeded: o, history: a, isInline: n, isIntentRoute: r, location: d, prepopulatedText: l, previousTweetMedia: h, setValidity: c } = this.props,
                        p = e[0].media?.length > 0;
                    (this._initialPathname = a.location.pathname),
                        (this._unblockHistory = this.props.history.block(this._blockHistory)),
                        s.length > 0 && this._attachExternalMedia(0)(s),
                        i.length > 0 && this._handleAddMediaFiles(0)(i),
                        this.isEdit &&
                            !p &&
                            h?.length &&
                            (this._attachExternalMedia(0)(
                                h.map(({ url: e }) => e),
                                h.map(({ uploadId: e }) => e),
                                h.map(({ altText: e }) => e),
                            ),
                            h[0].mediaTags?.length && this._fetchTaggedUsersIfNeeded(h[0].mediaTags).then(() => this._attachPreviousTweetTags())),
                        this._handleFetchTweetIfNeeded(),
                        this._handleDeletePreviewTweet(),
                        o();
                    const u = {};
                    l && (u.text = l), t && t.cardUrl && (u.cardUrl = t.cardUrl), Object.keys(u).length && this._setSingleComposer(u);
                    (l || (t && t.cardUrl) || s.length > 0 || i.length > 0) && !r && (this.isEdit && l && this.setState({ previousTweetText: l }), a.replace({ query: (0, N.U)(d.query), search: "", pathname: d.pathname, state: (0, S.Z)((0, N.U)(d.state || {}), ["defaultText", "externalMedia", "externalMediaFiles"]) })),
                        c && c(this._areComposersValid()),
                        n || this._setActiveParentKey(),
                        this.isEdit && this.props.isModal && this._scribe({ section: "composition", component: "edit_tweet", action: "impression" }),
                        this.isInlineReply &&
                            this.state.focused &&
                            (setTimeout(() => {
                                this._root && this._root.scrollIntoView(), window.scrollBy(0, -m.default.theme.componentDimensions.appBarHeightPx);
                            }, 0),
                            this._scribe({ element: "inline_reply", action: "reply" })),
                        this._checkForPollEligibility();
                }
                shouldComponentUpdate(e, t) {
                    const s = ["previousTweetTags"];
                    return !a()((0, S.Z)(this.props, s), (0, S.Z)(e, s)) || !(0, R.Z)(this.props.previousTweetTags, e.previousTweetTags) || !a()(this.state, t);
                }
                componentDidUpdate(e, t) {
                    const { addToast: s, composerData: i, containerWidth: o, copyDataFromInlineComposerToModalComposer: a, externalMedia: n, externalMediaFiles: r, onRef: d, parentTweetId: l, replyPressToggle: h, setValidity: c } = this.props;
                    o !== e.containerWidth && this._throttledSyncTexts(), e.onRef && e.onRef !== d && e.onRef(void 0), d && d !== e.onRef && d(this);
                    const p = this.context.featureSwitches;
                    At(i.length, p) && !At(e.composerData.length, p) && s({ text: gt }), n.length > 0 && n !== e.externalMedia ? this._attachExternalMedia(0)(n) : r.length > 0 && r !== e.externalMediaFiles && this._handleAddMediaFiles(0)(r), c && !(0, R.Z)(i, e.composerData) && c && c(this._areComposersValid()), h !== e.replyPressToggle && a(l);
                }
                componentWillUnmount() {
                    const { onRef: e } = this.props;
                    this._unblockHistory && this._unblockHistory(), e && e(void 0), this._syncTexts(), clearTimeout(this._autoSaveTimeoutId), (this._isMounted = !1);
                }
                get activeComposerData() {
                    const { composerData: e, isInline: t, isModal: s } = this.props,
                        { typeaheadActive: i } = this.state,
                        o = !s && i,
                        a = t ? 0 : this.props.activeComposerIndex;
                    return o || t ? [e[a]] : e;
                }
                get is_uploading() {
                    return this.activeComposerData.some((e) => e.media.some((e) => e.mediaFile?.isVideo && e.uploading && "number" == typeof e.uploadProgress && e.uploadProgress < 1));
                }
                get has_video() {
                    return this.activeComposerData.some((e) => e.media.some((e) => e.mediaFile?.isVideo));
                }
                render() {
                    const { activeUser: e, addToast: t, audienceControlsValue: s, composeHeader: o, composerData: a, containerWidth: n, geoEnabled: l, history: h, inReplyToStatus: c, isAutoSaving: p, isInline: m, isModal: g, isSelfThreadReply: T, isSending: f, isSuperFollowsCreator: C, parentTweetId: y, positionCursorAtBeginning: S, previousTweetMedia: b, scheduledFor: v, userLanguage: x } = this.props,
                        { errorMessage: E, focused: R, isAutoSaved: A, showAltTextPrompt: D, showEditTimeLimitExceededConfirmation: M, showLastEditConfirmation: k, showReplyBoostUpsell: F, typeaheadActive: L } = this.state,
                        Z = m ? 0 : this.props.activeComposerIndex,
                        B = this.activeComposerData,
                        V = this._areComposersValid(),
                        U = m ? r.Z : u.Z,
                        N = m ? {} : { onAnimateComplete: g ? void 0 : this._handleAnimateComplete },
                        W = !V || f || this.isCommunityTweetFromProtectedUser || this.is_uploading,
                        H = "all" === s.conversationControlsValue,
                        $ = m && O.Z.isOneColumnSquishedLayout(n),
                        j = $,
                        q = $ || this.isCommunityTweet || this.isExclusiveTweet,
                        K = c?.trusted_friends_info?.screen_name,
                        G = this.context.featureSwitches.isTrue("responsive_web_one_hour_edit_window_enabled"),
                        Q = this.props.composerData.some((e) => e.pollActive);
                    return i.createElement(
                        r.Z,
                        { ref: this._setRootRef, style: !y && Et.root },
                        this._renderMask(),
                        this._renderEditTweetLimitedMarketPrompt(),
                        m ? this._renderProgressBar() : null,
                        F ? this._renderReplyBoostUpsell() : null,
                        E && i.createElement(r.Z, { style: Et.inlineCallout }, i.createElement(_.Z, { action: E.action?.label && E.action?.link ? { label: E.action.label, link: E.action.link } : void 0, text: E.text, type: "danger" })),
                        i.createElement(
                            r.Z,
                            { onFocus: this._handleFocus, style: [Et.content, y && Et.contentInlineReply, g && Et.contentModal] },
                            this._renderDelegateAlertBanner(),
                            c ? this._renderReplyContext() : null,
                            o,
                            i.createElement(
                                U,
                                N,
                                B.map((o, d) => {
                                    const u = (0, z.TO)(o.scheduledFor),
                                        _ = a.indexOf(o),
                                        E = m || g ? i.createElement(i.Fragment, null, i.createElement(se.Z, { disabled: W, isAudienceAll: H, isComposerValid: V, isEdit: this.isEdit, isModal: g, isQuote: !!this.isQuoteTweet, isReply: !!c, isRetweet: !!this.isRetweet, isScheduled: u, isSelfThreadReply: T, isThread: this.isThread, onTweetWithBoostPress: this.handleTweetWithBoost, shouldShow: g, tweetText: o.text, viewer: e }), i.createElement(w.ZP, { disabled: W, onPress: this._handleTweetOrRetweetPress, size: "medium", style: Et.inlineSendButton, testID: g ? Ae : De, type: "primaryFilled" }, (0, Ee.of)({ inReplyToStatus: !!c, isSelfThreadReply: !!T, isQuoteTweet: !!this.isQuoteTweet, isRetweet: !!this.isRetweet, isScheduled: !!u, isThread: this.isThread, isEdit: !!this.isEdit }))) : null,
                                        D = this._getSingleComposerDataWithLatestText(o),
                                        M = At(a.length, this.context.featureSwitches),
                                        k = this._hasVideo(o),
                                        F = 0 !== d || this._shouldBeExpanded(),
                                        B = _ === Z && (!f || p),
                                        O = !!c || this.isInlineReply;
                                    return i.createElement(
                                        r.Z,
                                        { key: d },
                                        k && i.createElement(Ce, null),
                                        i.createElement(I.Z, { addComposerLink: this._makeAddComposerLink(m, T, y), addToast: t, additionalToolbarContent: E, audienceControlsValue: s, autoFocus: this.isInlineReply && R, containerWidth: n, data: D, disableAddTweet: M, disallowedReplyControls: this.state.disallowedReplyControls, editable: !f && !!e, fetchAutotaggedLocationIfNeeded: this._fetchAutotaggedLocationIfNeeded, geoEnabled: l, hidePoll: j, hideScheduling: q, history: h, index: _, isAccountProtected: e?.protected, isActive: B, isAutoSaved: A, isAutoSaving: p, isCommunityTweetFromProtectedUser: this.isCommunityTweetFromProtectedUser, isEdit: !!this.isEdit, isExpanded: F, isInline: m, isInlineReply: this.isInlineReply, isLast: m || _ === a.length - 1, isPollActiveInThread: Q, isReply: O, isSelfThreadReply: !!T, isSuperFollowsCreator: C, isThread: this.isThread, key: o.key, keyCommandHandlers: this._getKeyCommandHandlers(), linksDisabledInReplies: this._linksDisabledInReplies(), onAddComposer: this._handleAddComposer, onFilesAdded: this._handleAddMediaFiles(_), onFocus: this._handleComposerFocus, onMediaDescriptionChange: this._handleMediaDescriptionChange, onMediaTitleChange: this._handleMediaTitleChange, onRemoveComposer: this._handleRemoveComposer, onRemoveMedia: this._handleMediaRemove, onTextChange: this._handleTextChange, onTextInputBlur: this._handleTextOnBlur(D.key, d), onTypeaheadStateChange: this._handleTypeaheadStateChange, positionCursorAtBeginning: !!S, previousMedia: b, ref: this._setComposerRef(_), scheduledFor: v, setActiveParentKey: this._setActiveParentKey, setDisallowedReplyControls: this.setDisallowedReplyControls, trustedFriendsTweetAuthorScreenName: K, typeaheadActive: L, updateAudienceControlsValue: this._updateAudienceControlsValue, updateSingleComposer: this._updateSingleComposer, userLanguage: x, viewerUser: e, willAutoSave: this.state.willAutoSave }),
                                        i.createElement(P.B, { isActive: B, isExpanded: F, isReply: O, isThread: this.isThread }),
                                    );
                                }),
                            ),
                            this._renderDiscardConfirmation(),
                            M ? i.createElement(d.Z, { confirmButtonLabel: ct, headline: dt, onConfirm: this._handleConfirmDiscardTweet, text: G ? ht : lt, withCancelButton: !1 }) : null,
                            k
                                ? i.createElement(d.Z, {
                                      confirmButtonLabel: ut,
                                      confirmButtonType: "destructiveFilled",
                                      headline: pt,
                                      onCancel: this._handleCancelLastEditConfirmation,
                                      onConfirm: () => {
                                          this._handleTweet();
                                      },
                                      text: mt,
                                      withCancelButton: !0,
                                  })
                                : null,
                            D ? this._renderAltTextPrompt() : null,
                            i.createElement(r.Z, { style: f && !p && Et.mask }),
                        ),
                    );
                }
                _renderMask() {
                    return this.props.isInline || this.props.withoutMask ? null : i.createElement(r.Z, { onClick: this.handleDismissComposer, style: Et.composerMask, testID: Re });
                }
                _renderDiscardConfirmation() {
                    if (!this.state.showDiscardTweetConfirmation) return null;
                    if (this._is_showing_upload_modal || this.is_uploading) {
                        this._is_showing_upload_modal = !0;
                        const e = (e) => () => {
                            (this._is_showing_upload_modal = !1), e();
                        };
                        return i.createElement(d.Z, { cancelButtonLabel: ot.uploading.cancel, confirmButtonLabel: ot.uploading.confirm, headline: ot.uploading.headline, onCancel: e(this._handleConfirmDiscardTweet), onConfirm: e(this._handleCancelDiscardTweet), onMaskClick: e(this._handleCancelDiscardTweet), text: ot.uploading.text });
                    }
                    if (this._canSaveDraft) {
                        let e = et;
                        return this._hasMediaTags && (e += ` ${tt}`), i.createElement(d.Z, { cancelButtonLabel: Ye, confirmButtonLabel: st, headline: Je, onCancel: this._handleConfirmDiscardTweet, onConfirm: () => this._handleDraftTweet(!1), onMaskClick: this._handleCancelDiscardTweet, text: e });
                    }
                    return i.createElement(d.Z, { confirmButtonLabel: Ye, confirmButtonType: "destructiveFilled", headline: this._findDiscardHeadline(), onCancel: this._handleCancelDiscardTweet, onConfirm: this._handleConfirmDiscardTweet, text: this.isEdit && this._editTweetCompositionEnabled() ? Xe : ze });
                }
                _scribe(e, t) {
                    const { analytics: s } = this.props;
                    s.scribe({ ...e, data: t });
                }
                _checkForPollEligibility() {
                    const { activeComposerIndex: e, composerData: t } = this.props,
                        s = t[e];
                    s?.pollActive && !I.w.shouldShowPoll({ composerData: s }) && this._updateSingleComposer({ pollActive: !1 });
                }
                get isEdit() {
                    const { previousTweetId: e } = this.props;
                    return !!e;
                }
                get isEditingWithTwitterBlue() {
                    const { featureSwitches: e } = this.context;
                    return this.isEdit && this._editTweetCompositionEnabled() && !e.isTrue("responsive_web_edit_tweet_enabled");
                }
                get isInlineReply() {
                    const { parentTweetId: e } = this.props;
                    return !!e;
                }
                get isThread() {
                    return this.props.composerData.length > 1;
                }
                get isRetweet() {
                    const { composerData: e } = this.props,
                        t = 0 === e[0].media.length,
                        s = this._getSingleComposerDataWithLatestText(e[0]).text;
                    return !this.isThread && e[0].quotedStatus && "" === s && t;
                }
                get isQuoteTweet() {
                    const { composerData: e } = this.props,
                        t = this._getSingleComposerDataWithLatestText(e[0]).text;
                    return !this.isThread && e[0].quotedStatus && t.length > 0;
                }
                get shouldShowDiscardConfirmation() {
                    const { scheduledTweetId: e } = this.props.composerData[0];
                    return !(!this.state.willAutoSave && !this.props.isAutoSaving) || !(this.props.isSending || this._areComposersEmptyOrUnchanged() || this.state.showDiscardTweetConfirmation || e || this.state.isAutoSaved);
                }
                get shouldShowBackgroundSendConfirmation() {
                    const { composerData: e, isSending: t } = this.props,
                        s = e.some((e) => e.media.some((e) => e.uploading));
                    return t && s;
                }
                get shouldShowAltTextPrompt() {
                    const { altTextNudgeType: e, previousTweetMedia: t } = this.props,
                        { numberOfDescriptionsMissing: s } = this._getAltTextMetadata(),
                        i = (0, H.y8)(
                            this.props.composerData[0].media,
                            t.map((e) => e.uploadId),
                        ),
                        o = !this.context.featureSwitches.isTrue("responsive_web_alt_text_nudges_enabled");
                    return 0 !== s && !o && e === F.f.Prompt && !(this.isEdit && !i);
                }
                get isThreadsEnabledInDrafting() {
                    return this.context.featureSwitches.isTrue("responsive_web_tweet_drafts_threads_enabled");
                }
                get isThreadsEnabledInScheduling() {
                    return this.context.featureSwitches.isTrue("responsive_web_scheduling_threads_enabled");
                }
                get _canSaveDraft() {
                    if (this.props.isInline) return !1;
                    if (this.isThread && !this.isThreadsEnabledInDrafting) return !1;
                    if (this.isExclusiveTweet || this.isCommunityTweet || this.isEdit) return !1;
                    if (this.props.composerData.some((e) => e.pollActive)) return !1;
                    const e = this.context.featureSwitches.isTrue("responsive_web_tweet_drafts_video_enabled");
                    return !(this.has_video && !e);
                }
                get _hasMediaTags() {
                    const [e] = this.props.composerData;
                    return e.mediaTags.length > 0;
                }
                get isCommunityTweet() {
                    const { audienceControlsValue: e, inReplyToStatus: t } = this.props;
                    return !(!t?.community_id_str && "community_members" !== e._type);
                }
                get isCommunityTweetFromProtectedUser() {
                    return !(!this.isCommunityTweet || !this.props.activeUser?.protected);
                }
                get isReply() {
                    return !(!this.props.inReplyToStatus && !this.props.inReplyToStatusId);
                }
                get isExclusiveTweet() {
                    const { audienceControlsValue: e } = this.props;
                    return !!e.exclusivityControlValue;
                }
                get isTrustedFriendsTweet() {
                    const { audienceControlsValue: e } = this.props;
                    return !!e.trustedFriendsValue;
                }
                get tweetType() {
                    return this.isQuoteTweet ? Me.Quote : this.isThread ? Me.Thread : this.isReply ? Me.Reply : Me.Original;
                }
                _undoEnabledForTweetType(e) {
                    const { undoTweetSettings: t } = this.props;
                    return !(!t || void 0 === t[this.tweetType]) && t[e];
                }
                get isAnyPremiumSubscriber() {
                    return this?.context?.userClaims?.isAnyPremiumSubscriber?.();
                }
                get isPreview() {
                    if (this._isBoosting) return !1;
                    const { composerData: e } = this.props,
                        t = this?.context?.userClaims?.isTrueAndEnabled("subscriptions_feature_1003");
                    let s = !1;
                    return (
                        e.forEach((e) => {
                            e.editorStateRaw?.entityMap && Object.keys(e.editorStateRaw?.entityMap).length > 0 && (s = !0);
                        }),
                        !(!t || this.isEdit || s) && (this._hasValidPoll(e[0]) ? this._undoEnabledForTweetType("poll") : this._undoEnabledForTweetType(this.tweetType))
                    );
                }
                _attachPreviousTweetTags() {
                    const { previousTweetTags: e } = this.props;
                    this._updateSingleComposer({ mediaTags: e });
                }
            }
            (xt.defaultProps = { externalMedia: [], externalMediaFiles: [], isSelfThreadReply: !1, isModal: !1, positionCursorAtBeginning: !1, prepopulatedText: "", setValidity: () => {} }), (xt.contextType = oe.rC);
            const Et = m.default.create((e) => ({ root: {}, autoSaveStatus: { marginStart: e.spaces.space16 }, autoSaveStatusText: { color: e.colors.gray700, fontSize: e.fontSizes.subtext1 }, composerMask: { position: "fixed", top: 0, start: 0, width: "100%", height: "100%" }, content: { paddingTop: e.spaces.space4 }, contentModal: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge }, contentInlineReply: { paddingVertical: e.componentDimensions.gutterVertical }, mask: m.default.absoluteFillObject, inlineSendButton: { marginStart: e.spaces.space12 }, progressBar: { position: "absolute", borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, inlineCallout: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, editTweetLimitedMarketPrompt: { gap: e.spaces.space24 }, altTextPromptParagraph: { marginTop: e.spaces.space8 }, hidden: { position: "absolute", visibility: "hidden", width: "100%" } })),
                Rt = (0, Y.Z)((0, pe.ZP)(xt));
            function At(e, t) {
                return e >= t.getNumberValue("longform_notetweets_max_tweet_per_thread", 25);
            }
            const Dt = { composeTweetRoute: /^\/compose\/post\/?$/, unsentRoutes: /^\/compose\/post\/unsent\// };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-0fb8c86a.859daa3a.js.map
