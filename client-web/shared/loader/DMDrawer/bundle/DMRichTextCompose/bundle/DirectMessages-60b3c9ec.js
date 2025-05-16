"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-60b3c9ec"],
    {
        615619: (e, t, s) => {
            s.d(t, { Z: () => c });
            var i = s(202784),
                o = s(325686),
                a = s(731708),
                n = s(392237),
                r = s(228245);
            const d = n.default.create((e) => ({ root: { paddingBottom: e.spaces.space20, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", gap: e.spaces.space8 } })),
                c = ({ entry: e, entryType: t, perspective: s }) => {
                    const n = (0, r.FC)(e, t, s);
                    return i.createElement(o.Z, { style: d.root }, i.createElement(a.ZP, { color: "gray700", weight: "bold" }, n), i.createElement(a.ZP, { align: "center", color: "gray700", size: "subtext1" }, (0, r.Mk)(e)));
                };
        },
        587521: (e, t, s) => {
            s.d(t, { Z: () => Se });
            s(136728);
            var i = s(202784),
                o = s(411916),
                a = s.n(o),
                n = s(15038),
                r = s(392237),
                d = s(108362),
                c = s(332920),
                l = s.n(c),
                h = s(2138),
                p = s(908478),
                u = s(417144),
                v = s(323265),
                m = s(615656),
                _ = s(290402),
                f = s(794731),
                g = s(715601),
                C = s(705079),
                y = s(443781),
                S = s(652904),
                T = s(706758),
                w = s(318823),
                P = s(8448),
                I = s(225351),
                R = s(655352),
                D = s(111311),
                M = s(198506),
                x = s(166677),
                b = s(275365),
                E = s(312771),
                N = s(537199),
                A = s(489705),
                U = s(664684),
                Z = s(313758),
                q = s(956783),
                H = s(778787),
                L = s(24949),
                O = s(71620),
                G = s(297436),
                k = s(668214),
                F = s(289405),
                B = s(296196),
                V = s(798538),
                W = s(550293),
                j = s(997174),
                z = s(390387),
                $ = s(38562),
                Q = s(131290),
                K = s(818581),
                X = s(601576),
                Y = s(919022),
                J = s(593953);
            const ee = (e, t) => t.conversationId,
                te = (e, t) => B.selectConversation(e, ee(0, t)),
                se = (0, L.P1)(
                    B.selectFetchStatus,
                    (e, t) => B.selectConversationFetchStatus(e, ee(0, t)),
                    (e, t) => (e === E.ZP.LOADED ? t : e),
                ),
                ie = (0, L.P1)(
                    (e, t) => B.selectEntriesForConversation(e, ee(0, t)),
                    z._h,
                    (e, t) => (t ? (0, J.y9)(e, t) : void 0),
                ),
                oe = (e, t) => V.q9(e, ee(0, t)),
                ae = (e, t) => V.W8(e, ee(0, t)),
                ne = (e, t) => V.Ah(e, ee(0, t)),
                re = (e, t) => V.Tu(e, ee(0, t)),
                de = (e, t) => V.vb(e, ee(0, t)),
                ce = (e, t) => V.qK(e, ee(0, t)),
                le = (e, t) => {
                    const s = ee(0, t);
                    return B.selectInboxTypeByConversation(e, s);
                },
                he = (e) => (t, s) => V.rA(e, t, s),
                pe = (0, k.Z)()
                    .propsFromState(() => ({ cardUrl: ce, conversation: te, dataSaverMode: $.IX, draftText: de, dtabBarInfo: F.U6, entries: B.selectEntries, fetchStatus: se, gifMetadata: re, inboxType: le, recipientCanNotDm: B.selectRecipientCanNotDm, isDmReceiptSettingEnabled: Q.cn, isNewGroupConversation: J.rR, isUploading: oe, media: ae, mediaUploadProgress: ne, newConversationParticipants: J.bZ, perspective: z._h, quickReplyOptions: ie, tweetAttachment: J.Ss, users: Y.ZP.selectAll, userPreferences: K.kQ }))
                    .adjustStateProps(({ cardUrl: e, conversation: t, dataSaverMode: s, draftText: i, dtabBarInfo: o, entries: a, fetchStatus: n, gifMetadata: r, inboxType: d, isDmReceiptSettingEnabled: c, isNewGroupConversation: l, isUploading: h, media: p, mediaUploadProgress: u, newConversationParticipants: v, perspective: m, quickReplyOptions: _, recipientCanNotDm: f, tweetAttachment: g, userPreferences: C, users: y }) => {
                        const S = t?.data;
                        return { conversation: (S && (0, G.lk)(S, a, y)) || void 0, dataSaverMode: s, recipientCanNotDm: f, draftText: i, dtabBarInfo: o, entries: a, fetchStatus: n, gifMetadata: r, inboxType: d, isDmReceiptSettingEnabled: c, cardUrl: e, isNewGroupConversation: l, isUploading: h, media: p, mediaUploadProgress: u, newConversationParticipants: v, perspective: m, quickReplyOptions: _, tweetAttachment: g, userPreferences: C };
                    })
                    .propsFromActions(({ conversationId: e }) => ({ acceptConversation: B.acceptConversation, addMedia: he(e), saveText: V.E4, addToast: X.fz, addWelcomeMessageToConversation: B.addWelcomeMessageToConversation, cancelUpload: (0, J.Ly)(e), createLocalApiErrorHandler: (0, O.zr)("DIRECT_MESSAGES_CONVERSATION"), fetchConversationFuture: B.fetchConversationFuture, fetchConversationHistoricalSnapshot: B.fetchConversationHistoricalSnapshot, fetchConversationHistory: B.fetchConversationHistory, fetchConversationIfNeeded: B.fetchConversationIfNeeded, fetchInboxIfNeeded: B.fetchInboxIfNeeded, fetchUpdatesIfNeeded: B.fetchUpdatesIfNeeded, fetchUserPreferencesIfNeeded: K.xQ, fetchPermissions: B.fetchPermissions, leaveConversation: B.leaveConversation, removeEntry: B.removeEntry, removeMedia: (0, J.Xx)(e), removeText: V.Bw, sendMessage: V.bG, editMessage: V.Hd, updateConversationReadState: B.updateConversationReadState, updateTweetDetailNav: j.NH, removeConversation: B.removeConversation, popOutConversation: W.DO }))
                    .withAnalytics(),
                ue = r.default.create((e) => ({ root: { flexGrow: 1 }, activity: { flexBasis: e.spacesPx.space1, flexGrow: 1, height: "100%" }, dragDrop: { flexGrow: 1 }, scrollView: { flexGrow: 1 }, readOnly: { paddingBottom: e.spaces.space20 } })),
                ve = l().d6b11d9c,
                me = (e, t, s) => {
                    let i;
                    return s ? (i = { tweet: s }) : t ? (t.mediaFile ? (i = { media: t }) : t.externalMediaDetails && e && (i = { media: t, provider: e.provider, gifUrl: e.url })) : (i = null), i;
                },
                _e = (e, t, s, i, o) => {
                    if (e) return "gif";
                    if (t) return "card";
                    if (i) return "tweet";
                    const a = o?.media?.mediaFile;
                    return a ? (a?.isVideo ? "video" : a?.isGif ? "gif" : "photo") : s ? "text" : "unknown";
                },
                fe = (e, t) => !e?.trusted && !t,
                ge = (e) => e && (e.tweet || e.media),
                Ce = l().e18e6a63;
            class ye extends i.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = i.createRef()),
                        (this._justSentAttachment = null),
                        (this._handleLivePipelineUpdate = () => {
                            this._fetchUpdatesIfNeeded(), this._updatePolling && this._updatePolling.restart();
                        }),
                        (this._fetchUpdatesIfNeeded = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchUpdatesIfNeeded: s, isDmReceiptSettingEnabled: i } = this.props;
                            s(i ? { active_conversation_id: e, dm_users: !0 } : {}).catch(t());
                        }),
                        (this._initialFetch = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchInboxIfNeeded: s, fetchUpdatesIfNeeded: i, fetchUserPreferencesIfNeeded: o } = this.props;
                            return (
                                this._checkPermissions(),
                                s()
                                    .then(() => {
                                        if (e) return this._fetchConversation(e).then(() => this._requestWelcomeMessage(e));
                                    })
                                    .then(() => i())
                                    .then(() => o())
                                    .catch(t())
                                    .finally(() => {
                                        this._updatePolling && this._updatePolling.start();
                                    })
                            );
                        }),
                        (this._checkPermissions = () => {
                            const { conversation: e, conversationId: t, fetchPermissions: s, history: i, newConversationParticipants: o, perspective: a } = this.props;
                            this.setState({ isNotAbleToSendMessageRequest: !1 });
                            let n = [];
                            if (o) n = o?.map(({ data: e }) => e.id_str);
                            else if (e?.participants && e?.type !== b.eD.GROUP) n = e?.participants?.map((e) => e.user_id);
                            else if (t && a) {
                                const e = (0, M.R)(t, a);
                                e && (n = [e]);
                            }
                            if (n.length > 0)
                                return s(n).then((e) => {
                                    const t = Object.values(e).find((e) => !e.can_dm);
                                    if (t && t.error_code && t.error_code === m.ZP.DirectMessageSenderIsNotVerifiedForMessageRequests) {
                                        const e = this._getReasonToGetVerified(t.error_code);
                                        i.push("/i/verified-get-verified", e), this.setState({ isNotAbleToSendMessageRequest: !0 });
                                    }
                                });
                        }),
                        (this._acceptConversation = (e) => {
                            const { acceptConversation: t, createLocalApiErrorHandler: s } = this.props;
                            t(e)
                                .then(() => {
                                    v.ZP.isMobileOS() && this._fetchConversation(e);
                                })
                                .catch(s({ showToast: !0 }));
                        }),
                        (this._renderActions = () => {
                            const { conversation: e, conversationId: t, createLocalApiErrorHandler: s, inboxType: o, leaveConversation: a } = this.props;
                            return e && fe(e, this._isNewGroupConversation)
                                ? e.read_only
                                    ? null
                                    : t &&
                                      i.createElement(U.ZP, {
                                          acceptConversation: this._acceptConversation,
                                          conversation: e,
                                          conversationId: t,
                                          inboxType: o,
                                          leaveConversation: () => {
                                              a({ conversationId: t }).catch(s({ showToast: !0 }));
                                          },
                                      })
                                : this._renderComposerBar();
                        }),
                        (this._handleTyping = () => {
                            this._throttleSaveDraftText(), this._throttleUpdateTyping();
                        }),
                        (this._throttleUpdateTyping = (0, h.Z)(
                            () => {
                                const { conversationId: e, typingNotifier: t } = this.props;
                                e && t(e);
                            },
                            2e3,
                            { trailing: !1 },
                        )),
                        (this._throttleSaveDraftText = (0, h.Z)(
                            () => {
                                const { conversationId: e } = this.props;
                                e && this._handleSaveDraftText();
                            },
                            1e3,
                            { leading: !1 },
                        )),
                        (this._handleForwardRequest = () => {
                            const { conversation: e, conversationId: t, createLocalApiErrorHandler: s, fetchConversationFuture: i } = this.props;
                            this.setState({ shouldScrollToCenter: !1 }), e?.max_search_entry_id && i({ conversationId: t }).catch(s());
                        }),
                        (this._handleHistoryRequest = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchConversationHistory: s } = this.props;
                            s({ conversationId: e }).catch(t());
                        }),
                        (this._handleRelativeHistoryRequest = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchConversationHistory: s } = this.props;
                            this.setState({ shouldScrollToCenter: !1 }), s({ conversationId: e, isSearch: !0 }).catch(t());
                        }),
                        (this._willSendMessage = (e, t) => {
                            const { cardUrl: s, conversation: i, gifMetadata: o, tweetAttachment: a } = this.props,
                                { attachment: n } = this.state,
                                r = !(!n || !n.media),
                                d = i?.type === b.eD.GROUP;
                            (this._justSentAttachment = n || null), e.quickReply || r || (this._currentComposer && this._currentComposer.clear(), this._currentComposer && this._currentComposer.focus());
                            const c = _e(o, s, t, a, n);
                            i && (0, q.Q)(this.props.analytics, c, i, d), this.setState({ isSending: !0 });
                        }),
                        (this._didSendMessage = (e, t, s) => {
                            if (this._isNewGroupConversation) {
                                const { cardUrl: t, gifMetadata: i, history: o, tweetAttachment: a } = this.props,
                                    n = _e(i, t, s, a, this._justSentAttachment);
                                (0, q.R)(this.props.analytics, n, e, this.props.newConversationParticipants), this.setState({ attachment: null }), o.replace(`/messages/${e}`);
                            } else {
                                const e = !(!this._justSentAttachment || !this._justSentAttachment.media);
                                !t.quickReply && e && (this._currentComposer && this._currentComposer.clear(), this._currentComposer && this._currentComposer.focus());
                            }
                            this._reset();
                        }),
                        (this._failedToSendMessage = (e) => {
                            const { createLocalApiErrorHandler: t, history: s } = this.props,
                                i = (0, I.T5)(() => s.push("/i/verified-get-verified", this._getReasonToGetVerified(e)));
                            if (this._isNewGroupConversation) {
                                const { addToast: t, createLocalApiErrorHandler: s } = this.props;
                                if ((this._reset(), (0, x.O9)(e) && e.code === u.d.CANCELED)) return;
                                if ((0, x.O9)(e)) {
                                    const s = (0, x.ZP)(e, ve);
                                    s && t(s);
                                } else s(i)(e);
                            } else t(i)(e);
                        }),
                        (this._handleSendMessage = (e, t) => {
                            const { cardUrl: s, conversationId: i, editMessage: o, history: a, location: n, newConversationParticipants: r, perspective: d, sendMessage: c, tweetAttachment: l, userPreferences: h } = this.props;
                            this._isNewGroupConversation = !i;
                            const p = this.context.featureSwitches.isTrue("dm_video_downloads_enabled") && h.allow_video_downloads;
                            if (!i) {
                                return c({ allowVideoDownload: p, senderId: d, recipients: r && r.map(({ data: e }) => e.id_str), text: t, tweetAttachment: l })
                                    .catch(this._failedToSendMessage)
                                    .then(({ conversationId: e = "" } = {}) => Promise.resolve({ conversationId: e, text: t }));
                            }
                            this.state.attachment && !this.state.attachment?.media?.uploading && (this.setState({ attachment: null }), a.replace(n.pathname));
                            const u = this.state.replyTo?.id,
                                v = this.state.editDm?.id;
                            return (
                                u && this.setState({ replyTo: null }),
                                v
                                    ? (this.setState({ editDm: null }),
                                      o({ conversationId: i, messageId: v, text: t })
                                          .catch(this._failedToSendMessage)
                                          .then(({ conversationId: e = "" } = {}) => Promise.resolve({ conversationId: e, text: t })))
                                    : c({ allowVideoDownload: p, senderId: d, cardUrl: s, conversationId: i, replyToDmId: u, text: t, tweetAttachment: l, ...(e && e.quickReply && { quickReply: e.quickReply }) })
                                          .catch(this._failedToSendMessage)
                                          .then(({ conversationId: e = "" } = {}) => Promise.resolve({ conversationId: e, text: t }))
                            );
                        }),
                        (this._handleRetrySendMessage = (e) => {
                            const { conversationId: t, perspective: s, removeEntry: i, sendMessage: o, userPreferences: a } = this.props;
                            o({ allowVideoDownload: this.context.featureSwitches.isTrue("dm_video_downloads_enabled") && a.allow_video_downloads, tweetAttachment: void 0, senderId: s, conversationId: t, text: e.message_data?.text, localMediaId: e.message_data?.localMediaId, replyToDmId: e.message_data?.reply_data?.id }).catch(this._failedToSendMessage), i(t, null, { id: e.id });
                        }),
                        (this._handleSaveDraftText = () => {
                            const { conversationId: e, saveText: t } = this.props;
                            e && this._currentComposer && t(e, this._currentComposer.value());
                        }),
                        (this._reset = () => {
                            this.setState({ isSending: !1 }), (this._justSentAttachment = null), (this._isNewGroupConversation = !1);
                        }),
                        (this._getCannotDMLabel = () => {
                            const { conversation: e, recipientCanNotDm: t } = this.props,
                                { isNotAbleToSendMessageRequest: s } = this.state;
                            return t ? A.Z.recipientNoEncrypted : e?.conversation_status === b.BU.DEVICE_NOT_A_MEMBER ? A.Z.deviceIsNotAMember : s ? (this._isNewGroupConversation ? A.Z.onlyVerifiedCanMessageGroup : A.Z.onlyVerifiedCanMessageUser) : void 0;
                        }),
                        (this._getReasonToGetVerified = (e) => {
                            const { conversation: t, newConversationParticipants: s, perspective: i } = this.props;
                            let o = "DmRateLimited",
                                a = null;
                            if (e === m.ZP.DirectMessageSenderIsNotVerifiedForMessageRequests)
                                if (this._isNewGroupConversation) o = "DmCreateGroup";
                                else {
                                    let e;
                                    if (((o = "DmMessageRequest"), s)) {
                                        const t = s?.find(({ data: e }) => e.id_str !== i);
                                        e = t?.data?.screen_name;
                                    } else if (t?.participants) {
                                        const s = t?.participants?.find((e) => e.user_id !== i);
                                        e = s?.user?.screen_name;
                                    }
                                    e && (a = Ce({ username: e }));
                                }
                            return { variant: o, messageOverride: a };
                        }),
                        (this._render = () => {
                            const { analytics: e, conversation: t, conversationId: s, drawerHeader: o, inboxType: a, isWide: r, location: d, onConversationProfileVisibilityChange: c, perspective: l } = this.props,
                                { attachment: h, composerHeight: p } = this.state,
                                u = this._getCannotDMLabel();
                            return i.createElement(
                                Z.Eg,
                                { key: s },
                                i.createElement(
                                    n.ZP,
                                    {
                                        allowDragDrop: !ge(h),
                                        onFilesAdded: (e) => {
                                            this._currentComposer && this._currentComposer.handleAddMediaFiles(e);
                                        },
                                        style: ue.dragDrop,
                                    },
                                    i.createElement(g.Z, { style: [ue.scrollView, !(0, R.ZP)() && !fe(t, this._isNewGroupConversation) && { paddingBottom: p }] }, u || (l && t && (!d?.state?.entryPoint || this.state.hasLoadedSnapshot) ? i.createElement(N.Z, { conversation: t, drawerHeader: o, inboxType: a, isWide: r, lastReadMessageId: this.state.lastReadMessageId, messageSearchEntryId: d?.state?.entryPoint, onConversationProfileVisibilityChange: c, onEditDm: this._handleOnEditDm, onForwardRequest: this._handleForwardRequest, onHistoryRequest: d?.state?.entryPoint ? this._handleRelativeHistoryRequest : this._handleHistoryRequest, onReplyTo: this._handleOnReplyTo, onRetrySendMessage: this._handleRetrySendMessage, perspective: l, scribeNamespace: e.contextualScribeNamespace, shouldScrollToCenter: this.state.shouldScrollToCenter, style: ue.activity }) : null)),
                                    this._renderActions(),
                                ),
                            );
                        }),
                        (this._handleOnReplyTo = (e) => {
                            this.setState({ replyTo: e });
                        }),
                        (this._handleCancelReplyTo = () => {
                            this.setState({ replyTo: null });
                        }),
                        (this._handleOnEditDm = (e) => {
                            this.setState({ editDm: e });
                        }),
                        (this._handleCancelEditDm = () => {
                            this.setState({ editDm: null });
                        }),
                        (this._isNewGroupConversation = !!e.isNewGroupConversation),
                        (this.state = { replyTo: null, editDm: null, attachment: me(e.gifMetadata, e.media, e.tweetAttachment), composerHeight: r.default.theme.componentDimensions.appBarHeight, hasLoadedSnapshot: !1, isSending: !1, shouldScrollToCenter: !1, lastReadMessageId: e.conversation?.last_read_event_id, isNotAbleToSendMessageRequest: !1 });
                }
                componentDidMount() {
                    return this._initializePolling({ interval: 3e3 }), this._initializeLivePipeline(), this._focusComposerIfNeeded(), this.props.location?.state?.entryPoint && this.setState({ shouldScrollToCenter: !0 }), this._initialFetch();
                }
                _focusComposerIfNeeded() {
                    a()(() =>
                        (0, w.Z)().then(({ KEYBOARD: e, MOUSE: t, detectedType: s }) => {
                            const i = this.props.quickReplyOptions;
                            (s(e) || s(t)) && !i && this._currentComposer && this._currentComposer.focus();
                        }),
                    );
                }
                _initializeLivePipeline() {
                    const { conversationId: e } = this.props;
                    (0, T.ZP)().then(({ LivePipeline: t }) => {
                        e && t.isSupportedAndReady(this.context.featureSwitches) && !this._livePipelineSubscription && ((this._livePipelineSubscription = t.get().subscribeTopic(`/dm_update/${e}`, this._handleLivePipelineUpdate)), this._initializePolling({ interval: 1e4 }));
                    });
                }
                _initializePolling({ interval: e }) {
                    this._updatePolling && this._updatePolling.stop(), (this._updatePolling = new D.Z(this._fetchUpdatesIfNeeded, { interval: e }));
                }
                componentWillUnmount() {
                    const { conversation: e, conversationId: t, removeConversation: s } = this.props,
                        i = e?.entries || [];
                    this._updatePolling && this._updatePolling.stop(), (this._updatePolling = void 0), this._livePipelineSubscription && this._livePipelineSubscription.teardown(), 0 === i.length && s(t), 1 === i.length && "welcome_message_create" === i[0].type && s(t);
                }
                componentDidUpdate(e, t) {
                    const { conversation: s, conversationId: i, fetchStatus: o, isUploading: a, location: n, quickReplyOptions: r, updateConversationReadState: d } = this.props,
                        c = n?.state?.entryPoint,
                        l = e.location?.state?.entryPoint;
                    c !== l && i && this._fetchConversation(i), i !== e.conversationId ? (i && this._fetchConversation(i), this._checkPermissions(), this._focusComposerIfNeeded(), this._livePipelineSubscription && this._livePipelineSubscription.teardown(), this._initializeLivePipeline(), this._handleCancelReplyTo(), this._handleCancelEditDm()) : (s?.sort_event_id !== e.conversation?.sort_event_id && d(i), a || !e.isUploading || r || (this._currentComposer && this._currentComposer.focus()), e.fetchStatus === E.ZP.LOADED && o !== E.ZP.LOADED && i && this._fetchConversation(i), this.state.replyTo && t.replyTo !== this.state.replyTo && this._focusComposerIfNeeded(), this.state.editDm && t.editDm !== this.state.editDm && this._focusComposerIfNeeded());
                }
                UNSAFE_componentWillReceiveProps(e) {
                    const { conversation: t, conversationId: s, media: i } = this.props,
                        { conversation: o, conversationId: a, media: n } = e,
                        { lastReadMessageId: r } = this.state;
                    (0, p.Z)(i, n) || this.setState({ attachment: me(e.gifMetadata, e.media, e.tweetAttachment) }), ((!o || (t && r)) && s === a) || this.setState({ lastReadMessageId: o?.last_read_event_id });
                }
                _renderComposerBar() {
                    const { addMedia: e, analytics: t, cardUrl: s, conversation: o, conversationId: a, dataSaverMode: n, draftText: r, dtabBarInfo: d, history: c, isUploading: l, mediaUploadProgress: h, newConversationParticipants: p, quickReplyOptions: u, recipientCanNotDm: v, removeMedia: m, richTextInputContext: _, typeaheadWrapper: f } = this.props;
                    if (v || o?.conversation_status === b.BU.DEVICE_NOT_A_MEMBER || o?.read_only || this.state.isNotAbleToSendMessageRequest) return null;
                    const { attachment: g, editDm: y, isSending: S, replyTo: T } = this.state,
                        w = this.props.prefillText || r,
                        P = o?.type === b.eD.SECRET_ONE_TO_ONE,
                        I = p && p.map(({ data: e, type: t }) => ({ id: e.id_str, type: t }));
                    return i.createElement(H.Z, {
                        attachment: g,
                        cardUrl: s,
                        conversationId: a,
                        disabled: l,
                        dtabBarInfo: d,
                        editDm: y,
                        history: c,
                        isCardPreviewTombstoned: (0, C.s)(s),
                        isSending: S,
                        isUploading: l,
                        key: a,
                        mediaUploadProgress: h,
                        newConversationParticipants: I,
                        onAddMedia: e,
                        onBlur: this._handleSaveDraftText,
                        onCancelEdit: this._handleCancelEditDm,
                        onCancelReply: this._handleCancelReplyTo,
                        onDidPerformPrimaryAction: this._didSendMessage,
                        onHeightChange: (e) => {
                            this.setState({ composerHeight: `${e}px` });
                        },
                        onPrimaryAction: this._handleSendMessage,
                        onTyping: n ? this._throttleSaveDraftText : this._handleTyping,
                        onWillPerformPrimaryAction: this._willSendMessage,
                        prefillText: "string" == typeof w ? w : void 0,
                        quickReplyOptions: u,
                        ref: this._composer,
                        removeMedia: m,
                        replyTo: T,
                        richTextInputContext: _,
                        scribeNamespace: t.contextualScribeNamespace,
                        typeaheadWrapper: P ? void 0 : f,
                        withVideoTrimmer: this.context.featureSwitches.isTrue("responsive_web_video_trimmer_enabled"),
                    });
                }
                get _currentComposer() {
                    return this._composer.current;
                }
                _fetchConversation(e) {
                    const { createLocalApiErrorHandler: t, fetchConversationHistoricalSnapshot: s, fetchConversationIfNeeded: i, location: o, updateConversationReadState: a } = this.props;
                    return o?.state?.entryPoint
                        ? (this.setState({ hasLoadedSnapshot: !1 }),
                          s({ conversationId: e, entryId: o?.state?.entryPoint })
                              .then((e) => {
                                  let t = !0;
                                  e?.result?.conversation_timeline?.status === b.To.AT_END && (t = !1), this.setState({ hasLoadedSnapshot: !0, shouldScrollToCenter: t });
                              })
                              .catch((e) => (this.setState({ hasLoadedSnapshot: !0 }), t(e))))
                        : i({ conversationId: e })
                              .then(() => a(e))
                              .catch(t((0, P.q)(e)));
                }
                _requestWelcomeMessage(e) {
                    const { addWelcomeMessageToConversation: t, conversation: s, createLocalApiErrorHandler: i, location: o } = this.props,
                        { text: a } = o.query;
                    if (e.startsWith("e")) return Promise.resolve();
                    const n = Array.isArray(o.query.welcome_message_id) ? o.query.welcome_message_id[0] : o.query.welcome_message_id,
                        r = !!this.state.attachment || !(!a || n),
                        d = !s || !s.type || s.type === b.eD.GROUP;
                    return r || d || (s && s?.participants?.length <= 1) ? Promise.resolve() : t(e, n).catch(i({ showToast: !1 }));
                }
                render() {
                    const { fetchStatus: e } = this.props;
                    return i.createElement(
                        S.Z,
                        null,
                        i.createElement(
                            d.Z,
                            { style: ue.root },
                            i.createElement(_.Z, {
                                fetchStatus: e,
                                onRequestRetry: () => {
                                    this._initialFetch();
                                },
                                render: this._render,
                            }),
                        ),
                    );
                }
            }
            (ye.contextType = y.rC), (ye.defaultProps = { typeaheadWrapper: f.Z });
            const Se = pe(ye);
        },
        602920: (e, t, s) => {
            s.d(t, { Z: () => n });
            var i = s(392237),
                o = s(198438),
                a = s(521514);
            const n = i.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, minWidth: a.Z.dmDrawerWidth.min, maxWidth: a.Z.dmDrawerWidth.max }, main: { backgroundColor: e.colors.navigationBackground, borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium }, expandable: { transition: `all ${o.s}ms ease` }, expanded: { maxHeight: a.Z.dmDrawerHeight.expanded, height: "80vh" }, drawerHeaderRadius: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge }, reducedMotion: { transition: "none" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-60b3c9ec.c4a4f3aa.js.map
