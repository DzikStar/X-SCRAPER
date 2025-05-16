"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-63cb1cc4"],
    {
        527826: (e, t, s) => {
            s.r(t), s.d(t, { DMConversationCreator: () => S, default: () => f });
            var i = s(202784),
                n = s(614983),
                r = s.n(n),
                a = s(143778),
                o = s(290402),
                c = s(666670),
                d = s(312771),
                l = s(615027),
                h = s(71620),
                p = s(103335),
                u = s(668214),
                m = s(390387),
                _ = s(919022);
            const E = (e, t) => t.match.params.screenName,
                g = (e, t) => {
                    const s = m._h(e),
                        i = ((e, t) => {
                            const s = E(0, t);
                            return s ? _.ZP.selectIdByScreenName(e, s) : null;
                        })(e, t);
                    return s && i ? (0, p.Z)(s, i) : null;
                },
                v = (0, u.Z)()
                    .propsFromState(() => ({ screenName: E, conversationId: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("CREATE_CONVERSATION"), fetchOneByScreenNameWithExtraFieldsIfNeeded: _.ZP.createFetchOneByScreenNameWithExtraFieldsIfNeeded([_.pL, _.K1]) })),
                S = (e) => {
                    const { conversationId: t, createLocalApiErrorHandler: s, fetchOneByScreenNameWithExtraFieldsIfNeeded: n, history: h, screenName: p } = e;
                    return (
                        i.useEffect(() => {
                            Promise.resolve()
                                .then(() => (r()(!!p, "screenName must be defined"), n(p)))
                                .catch((e) => {
                                    s(c.F)(e), h.replace("/messages");
                                });
                        }, [p, n, s, h]),
                        i.createElement(i.Fragment, null, t && i.createElement(l.Z, { to: `/messages/${t}` }), i.createElement(o.Z, { fetchStatus: d.ZP.LOADING, render: a.Z }))
                    );
                },
                f = v(S);
        },
        694206: (e, t, s) => {
            s.r(t), s.d(t, { DMAddParticipantsScreen: () => z, default: () => K, getItemIsDisabled: () => Y });
            s(136728);
            var i = s(371706),
                n = s(202784),
                r = s(325686),
                a = (s(585488), s(351743)),
                o = s.n(a),
                c = s(154003),
                d = s(392237),
                l = s(674132),
                h = s.n(l),
                p = s(625661),
                u = s(33104),
                m = s(980407),
                _ = s(597496),
                E = s(8448),
                g = s(297436),
                v = s(339110),
                S = s(880655),
                f = s(125363),
                C = s(674420),
                y = s(601576),
                I = s(312771),
                A = (s(571372), s(24949)),
                b = s(450681),
                T = s(71620),
                P = s(668214),
                D = s(296196),
                M = s(390387),
                w = s(919022);
            const R = (e, t) => t.match.params.conversationId,
                O = (e, t) => {
                    const s = D.selectConversation(e, R(0, t)),
                        i = s?.data,
                        n = i?.participants;
                    return n;
                },
                x = (e, t) => D.selectConversationFetchStatus(e, R(0, t)),
                L = (0, A.P1)(D.selectConversations, (e) =>
                    (0, b.Z)(
                        Object.keys(e).map((t) => {
                            const s = e[t];
                            if (!s.isDeleted) return s.data;
                        }),
                    ),
                ),
                G = (0, P.Z)()
                    .propsFromState(() => ({ conversationId: R, conversations: L, existingParticipants: O, fetchStatus: x, perspective: M._h, users: w.ZP.selectAll }))
                    .adjustStateProps(({ conversationId: e, conversations: t, existingParticipants: s, fetchStatus: i, perspective: n, users: r }) => {
                        if (!n) throw new Error("logged-in user not found");
                        return { conversationId: e, conversations: t, existingParticipants: s, fetchStatus: i, perspective: n, users: r };
                    })
                    .propsFromActions(() => ({ addToast: y.fz, createLocalApiErrorHandler: (0, T.zr)("DIRECT_MESSAGES_ADD_PARTICIPANTS"), fetchConversationIfNeeded: D.fetchConversationIfNeeded }))
                    .withAnalytics({ page: "messages", section: "add_participants" }),
                U = { addPeopleButtonText: "addPeopleButtonText", nextButton: "nextButton", searchPeople: "searchPeople" },
                N = h().c602600a,
                Z = h().d4986f86,
                F = h().af40a8e0,
                k = h().e1bde73f,
                B = h().e62d3c10,
                H = h().h8403fb6,
                V = h().ja522ed4,
                W = 12,
                j = i.Z;
            function z(e) {
                const t = n.useRef(null),
                    [s, i] = n.useState([]),
                    [a, d] = n.useState(""),
                    { createLocalApiErrorHandler: l, conversationId: h, fetchConversationIfNeeded: A, history: b, fetchStatus: T, conversations: P, existingParticipants: D = [], perspective: M, users: w } = e,
                    R = (0, f.I0)(),
                    [O] = o()(j);
                n.useEffect(() => {
                    A({ conversationId: h }).catch(l((0, E.q)(h)));
                }, [A, h, l]);
                const x = () => n.createElement(r.Z, { style: q.rightColumn }, n.createElement(c.ZP, { disabled: 0 === s.length || T !== I.ZP.LOADED, onPress: G, size: "small", testID: U.addPeopleButtonText, type: "primaryFilled" }, F)),
                    L = (e) => {
                        i(s.filter(({ id: t }) => t !== e.id));
                    },
                    G = () => {
                        const e = s.map(({ id: e }) => e);
                        O({
                            variables: { addedParticipants: e, conversationId: h },
                            onCompleted: (e) => {
                                if ("AddParticipantsSuccess" !== e.add_participants?.__typename || e.add_participants?.user_failures?.length) {
                                    if ("AddParticipantsSuccess" === e.add_participants?.__typename && e.add_participants?.user_failures?.length) {
                                        const t = e.add_participants.user_failures[0].value;
                                        if ("SenderIsNotVerifiedForMessageRequests" === t) {
                                            const e = { variant: "DmAddToGroup" };
                                            b.push("/i/verified-get-verified", e);
                                        } else {
                                            const e = "RecipientNotFound" === t ? B : V;
                                            R((0, y.fz)({ text: e }));
                                        }
                                    }
                                } else {
                                    const s = P.find((e) => e.conversation_id === h);
                                    if (s) {
                                        const t = e.add_participants?.added_users || [],
                                            i = [];
                                        t.forEach((e) => {
                                            i.push({ user_id: e });
                                        });
                                        const n = { conversations: {} };
                                        (n.conversations[h] = { ...s, participants: [...s.participants, ...i] }), R((0, C.f)(n, !1));
                                    }
                                    t.current && t.current.goBack();
                                }
                            },
                            onError: (e) => {
                                l({ defaultToast: { text: H }, showToast: !0 })(e);
                            },
                        });
                    },
                    z = n.useMemo(
                        () =>
                            (0, S.i)(
                                a,
                                P.map((e) => (0, g.E5)(e, void 0, w)),
                                M,
                            ).slice(0, W),
                        [a, P, M, w],
                    ),
                    K = D.map(({ user_id: e }) => e);
                return n.createElement(
                    m.Z,
                    { containerStyle: q.fill, documentTitle: Z, renderHeader: () => n.createElement(p.ZP, { backButtonType: "close", backLocation: `/messages/${h}`, history: b, ref: t, rightControl: x(), title: N }) },
                    n.createElement(
                        u.Z,
                        { style: q.fill },
                        n.createElement(_.fb, {
                            getItemDisabledMessage: (e) => (e.type === v.El.User ? k({ screenName: e.data.screen_name }) : void 0),
                            getItemIsDisabled: Y,
                            injections: z,
                            onQueryChange: (e) => {
                                d(e);
                            },
                            onRemove: L,
                            onSelect: (e) => {
                                e.type === v.El.User && (s.find(({ id: t }) => t === e.id) ? L(e) : i([...s, e]));
                            },
                            preselectedUsers: K,
                            selectedUsers: s,
                            source: v._4.ComposeMessage,
                            withCompactPills: !0,
                        }),
                    ),
                );
            }
            const Y = (e) => e.type === v.El.User && !(e.data.can_dm || e.data.is_dm_able),
                q = d.default.create((e) => ({ fill: { flex: 1 }, rightColumn: { flexDirection: "row", flexGrow: 1, justifyContent: "flex-end", alignItems: "center" } })),
                K = G(z);
        },
        496708: (e, t, s) => {
            s.r(t), s.d(t, { DMComposeScreen: () => ye, Mode: () => Ce, default: () => Ae });
            var i = s(807896),
                n = (s(571372), s(136728), s(202784)),
                r = s(325686),
                a = s(731708),
                o = s(745153),
                c = s(154003),
                d = s(952428),
                l = s(386802),
                h = s(392237),
                p = s(674132),
                u = s.n(p),
                m = s(119232),
                _ = s(912021),
                E = s(323265),
                g = s(800173),
                v = s(573839),
                S = s(33104),
                f = s(980407),
                C = s(443781),
                y = s(597496),
                I = s(225351),
                A = s(297436),
                b = s(103335),
                T = s(66242),
                P = s(778729),
                D = s(339110),
                M = s(880655),
                w = s(125363),
                R = s(39623),
                O = s(946181),
                x = s(213386),
                L = s(778787),
                G = s(24949),
                U = s(161821),
                N = s(71620),
                Z = s(2430),
                F = s(668214),
                k = s(296196),
                B = s(798538),
                H = s(550293),
                V = s(390387),
                W = s(601576),
                j = s(919022),
                z = s(593953);
            const Y = { page: "messages", section: "compose", component: "dm" },
                q = "text",
                K = "recipient_id",
                $ = (0, Z.KT)(q),
                Q =
                    ((0, Z.cI)(K),
                    (e) => {
                        const t = V._h(e);
                        if (!t) throw new Error("logged-in user not found");
                        return t;
                    }),
                X = (e) => !!V.kD(e),
                J = (0, F.Z)()
                    .propsFromState(() => ({
                        hasRegisteredCryptoKey: X,
                        conversations: (0, G.P1)(k.selectConversations, (e) => {
                            const t = [];
                            for (const s of (0, U.Z)(e)) !s.isDeleted && s.data && t.push(s.data);
                            return t;
                        }),
                        initialMessage: $,
                        perspective: Q,
                        tweetAttachment: z.Ss,
                        users: j.ZP.selectAll,
                        recipientId: (0, Z.cI)(K),
                    }))
                    .propsFromActions(() => ({ fetchConversation: k.fetchConversation, addToast: W.fz, createLocalApiErrorHandler: (0, N.zr)("DIRECT_MESSAGES_COMPOSE"), fetchConversationFromParticipants: k.fetchConversationFromParticipants, fetchInboxIfNeeded: k.fetchInboxIfNeeded, popOutConversation: H.DO, sendMessage: B.bG }))
                    .withAnalytics(Y),
                ee = "nextButton",
                te = u().de4669e2,
                se = u().ff599112,
                ie = u().c602600a,
                ne = u().f61c4bb0,
                re = u().cdcebd22,
                ae = u().fa2033f6,
                oe = u().aa59bb6a,
                ce = u().f277e94a,
                de = u().a2ccb2e8,
                le = u().f906f464,
                he = u().i8a99aae,
                pe = u().e3275464,
                ue = u().hbbc401c,
                me = u().c1df579e,
                _e = u().e1bde73f,
                Ee = u().f7289cd6,
                ge = u().e6cced4e,
                ve = u().a893d602,
                Se = Object.freeze({ BACK: "back", CLOSE: "close" }),
                fe = Object.freeze({ COMPOSE_ROUTE: "/messages/compose", GROUP_COMPOSE_ROUTE: "/messages/compose/group", MESSAGES_ROUTE: "/messages" }),
                Ce = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET_INDIVIDUALLY: 2 });
            class ye extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._composer = n.createRef()),
                        (this._withSecretDM = () => {
                            const { perspective: e, users: t } = this.props,
                                s = t[e];
                            return this.props.hasRegisteredCryptoKey && (0, v.K)(this.context.featureSwitches, this.context.userClaims, s?.is_blue_verified, s?.has_graduated_access, s?.verified_type);
                        }),
                        (this._separateShareLimit = this.context.featureSwitches.getNumberValue("dm_share_sheet_send_individually_max_count")),
                        (this._determineMode = (e) => {
                            const t = e.tweetAttachment || !!e.initialMessage;
                            return this.props.location?.state?.isNewGroup ? Ce.CREATE_GROUP : t ? Ce.SHARE_TWEET_INDIVIDUALLY : Ce.COMPOSE_MESSAGE;
                        }),
                        (this._isSharingMode = (e) => e === Ce.SHARE_TWEET_INDIVIDUALLY),
                        (this._renderEncryptedMessageSubtitle = () => n.createElement(r.Z, { style: Ie.encryptedMessageSubtitleContainer }, n.createElement(a.ZP, null, ae), n.createElement(x.X, null))),
                        (this._renderScreen = ({ isModal: e }) => {
                            const { history: t } = this.props,
                                { encryptConversation: s, mode: i, participants: a } = this.state;
                            let c, d;
                            switch (i) {
                                case Ce.COMPOSE_MESSAGE:
                                    (c = re), s && (d = this._renderEncryptedMessageSubtitle());
                                    break;
                                case Ce.CREATE_GROUP:
                                    (c = se), (d = ie);
                                    break;
                                case Ce.SHARE_TWEET_INDIVIDUALLY:
                                    c = a.length > 1 ? oe : ne;
                                    break;
                                default:
                                    c = "";
                            }
                            const l = i === Ce.SHARE_TWEET_INDIVIDUALLY;
                            return n.createElement(f.Z, { backButtonType: i === Ce.CREATE_GROUP ? Se.BACK : Se.CLOSE, backLocation: i === Ce.CREATE_GROUP ? fe.COMPOSE_ROUTE : fe.MESSAGES_ROUTE, containerStyle: Ie.fill, documentTitle: c, history: t, onBackClick: i === Ce.CREATE_GROUP ? this._handleBackClick : this._handleClose, rightControl: l ? void 0 : this._renderAppBarRightControl(), subtitle: d, title: c }, n.createElement(o.Z.Context.Consumer, null, this._setDisableFocusingPreviousActiveElement), n.createElement(S.Z, { style: Ie.fill }, this._renderUserPicker(), l && !e ? n.createElement(r.Z, { style: Ie.placeholder }) : null, this._renderComposer(e)));
                        }),
                        (this._setDisableFocusingPreviousActiveElement = ({ disableFocusingPreviousActiveElement: e }) => {
                            this._disableFocusingPreviousActiveElement = e;
                        }),
                        (this._handleEncryptConversationChange = (e) => {
                            this.setState({ encryptConversation: e });
                        }),
                        (this._renderEncryptConversationSwitch = () => {
                            const { encryptConversation: e } = this.state;
                            return n.createElement(r.Z, { style: Ie.rightColumn }, n.createElement(O.X, { encrypted: e, onChange: this._handleEncryptConversationChange }));
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { tweetAttachment: e } = this.props,
                                { mode: t } = this.state,
                                s = e ? pe : me;
                            return n.createElement(r.Z, { style: Ie.rightColumn }, this._withSecretDM() && t === Ce.COMPOSE_MESSAGE ? this._renderEncryptConversationSwitch() : n.createElement(c.ZP, { disabled: 0 === this.state.participants.length, onPress: this._handleConversationRouting, size: "small", style: Ie.button, testID: ee, type: "primaryFilled" }, s));
                        }),
                        (this._renderComposer = (e) => {
                            const { history: t, initialMessage: s, tweetAttachment: i } = this.props,
                                { isSending: r, mode: a, participants: o } = this.state;
                            o.length;
                            const c = o.map(({ id: e, type: t }) => ({ id: e, type: t }));
                            return a === Ce.SHARE_TWEET_INDIVIDUALLY ? n.createElement(L.Z, { canSendEmptyMessage: !!i, conversationId: "DMComposeScreen", disabled: 0 === o.length || r, history: t, isSending: r, isShareViaDM: !0, isUploading: !1, mediaUploadProgress: 0, newConversationParticipants: c, onPrimaryAction: this._handleShareTweet, onSecondaryAction: this._handleShareTweetToGroup, placeholderText: te, prefillText: s, ref: this._composer, scribeNamespace: Y, secondaryActionDisabledPopoverRenderer: this._renderSendToGroupDisabledPopover, secondaryActionLabel: ue, shouldEnableSecondaryActionFunc: this._shouldEnableSendToGroup, shouldShowSecondaryActionFunc: this._shouldShowSendToGroup, style: [Ie.shadow, !e && Ie.fixToBottom], withEmojiPicker: !1, withGifPicker: !1, withMediaPicker: !1, withVideoTrimmer: this.context.featureSwitches.isTrue("responsive_web_video_trimmer_enabled") }) : null;
                        }),
                        (this._renderEncryptedLock = () => () => {
                            const { encryptConversation: e } = this.state;
                            return this._withSecretDM() && e ? n.createElement(r.Z, { style: Ie.lockContainer }, n.createElement(R.Z, null)) : null;
                        }),
                        (this._renderUserPicker = () => {
                            const { conversations: e, perspective: t } = this.props,
                                { encryptConversation: s, mode: i, participants: r, query: a } = this.state,
                                o = this._withSecretDM() && (s || i === Ce.CREATE_GROUP);
                            return n.createElement(y.fb, { getItemDisabledMessage: this._getItemDisabledMessage, getItemIsDisabled: this._getItemIsDisabled(this._separateShareLimit), injections: this._getInjections(e, t, a, o), onQueryChange: this._handleQueryChange, onRemove: this._handleRemoveParticipant, onSelect: this._getHandleSuggestionSelected(), renderAvatarDecoration: this._renderEncryptedLock(), renderHeader: this._renderHeader(), renderNoResultsState: this._renderHeader(), selectedUsers: r, shouldAutoFocus: i !== Ce.SHARE_TWEET_INDIVIDUALLY || !E.ZP.isIOS(), source: D._4.ComposeMessage, withCompactPills: !0 });
                        }),
                        (this._handleBackClick = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleClose = () => {
                            const { history: e } = this.props;
                            e.goBackThroughModals();
                        }),
                        (this._handleCreateGroup = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "create_group", action: "click" }), this.setState({ mode: Ce.CREATE_GROUP });
                        }),
                        (this._shouldShowSendToGroup = () => this.state.participants.length > 1),
                        (this._shouldEnableSendToGroup = () => !this._hasAtLeastOneGroupSelected()),
                        (this._renderSendToGroupDisabledPopover = (e) => n.createElement(r.Z, { style: Ie.popover }, n.createElement(a.ZP, { size: "headline1", style: Ie.popoverElement, weight: "bold" }, Ee), n.createElement(a.ZP, { style: Ie.popoverElement }, ge), n.createElement(c.ZP, { onPress: e, style: [Ie.popoverElement, Ie.popoverButton], type: "primaryFilled" }, ve))),
                        (this._renderHeader = () => () => {
                            const { encryptConversation: e, mode: t, participants: s, query: i } = this.state,
                                { tweetAttachment: r } = this.props;
                            return s.length || i || e || t !== Ce.COMPOSE_MESSAGE ? null : n.createElement(d.Z, { link: { pathname: fe.GROUP_COMPOSE_ROUTE, state: { ...this.state, isNewGroup: !0, participants: s, tweetAttachment: r }, anchorless: !0 }, onPress: this._handleCreateGroup, style: Ie.container }, n.createElement(c.ZP, { "aria-label": se, hoverLabel: { label: se }, icon: n.createElement(m.default, { style: Ie.searchIcon }), onPress: this._handleCreateGroup, size: "small", style: Ie.createGroupButton, type: "brandOutlined" }), n.createElement(a.ZP, { color: "link", numberOfLines: 1, weight: "bold" }, se));
                        }),
                        (this._isShareLimitMet = (e) => {
                            const { mode: t, participants: s } = this.state,
                                i = t === Ce.SHARE_TWEET_INDIVIDUALLY && this._separateShareLimit && s.length >= this._separateShareLimit,
                                n = s.filter((t) => t.id === e.id).length;
                            return !(!i || n);
                        }),
                        (this._isGroupOptionDisabled = (e) => {
                            const { mode: t, participants: s } = this.state;
                            if (!this._isSelectedGroup(e) && t !== Ce.SHARE_TWEET_INDIVIDUALLY && (this._hasAtLeastOneGroupSelected() || (e.type === D.El.DMConversation && (s.length > 0 || t === Ce.CREATE_GROUP)))) return !0;
                        }),
                        (this._canDMUser = (e) => {
                            if (e.type === D.El.User) return !(e.data.can_dm || e.data.is_dm_able);
                        }),
                        (this._hasAtLeastOneGroupSelected = () => {
                            for (const e of this.state.participants) if (e.type === D.El.DMConversation) return !0;
                            return !1;
                        }),
                        (this._isSelectedGroup = (e) => {
                            const { participants: t } = this.state;
                            if (this._hasAtLeastOneGroupSelected() && t[0].id === e.id) return !0;
                        }),
                        (this._getItemIsDisabled = (e) => (e) => {
                            const t = this._isShareLimitMet(e),
                                s = this._isGroupOptionDisabled(e),
                                i = this._canDMUser(e);
                            return s || t || i;
                        }),
                        (this._getItemDisabledMessage = (e) => (e.type === D.El.User ? _e({ screenName: e.data.screen_name }) : void 0)),
                        (this._getInjections = (0, _.Z)((e, t, s, i) =>
                            (0, M.w)(
                                s,
                                e.map((e) => (0, A.E5)(e, void 0, this.props.users)),
                                t,
                                i,
                            ).slice(0, 12),
                        )),
                        (this._handleQueryChange = (e) => {
                            this.setState({ query: e });
                        }),
                        (this._getHandleSuggestionSelected = () => (e) => {
                            const { mode: t, participants: s } = this.state;
                            if (e.type === D.El.User || e.type === D.El.DMConversation)
                                if (this._withSecretDM() && t === Ce.COMPOSE_MESSAGE) {
                                    const t = this._getConversationIdFromTypeahead(e);
                                    this.props
                                        .fetchInboxIfNeeded()
                                        .then(() => this.props.fetchConversation({ conversationId: t }))
                                        .then(() => {
                                            this._goToConversation(t);
                                        });
                                } else if (this._hasAtLeastOneGroupSelected() && t !== Ce.SHARE_TWEET_INDIVIDUALLY) e.id === s[0].id && this._handleRemoveParticipant(e);
                                else if (e.type === D.El.DMConversation)
                                    if (t === Ce.SHARE_TWEET_INDIVIDUALLY) this._createConversationObjectForSelectionPill(e);
                                    else {
                                        const t = this._getConversationIdFromTypeahead(e);
                                        this._goToConversation(t);
                                    }
                                else this._handleParticipantToggle(e);
                        }),
                        (this._createConversationObjectForSelectionPill = (e) => {
                            const { conversations: t, perspective: s, users: i } = this.props,
                                { participants: n } = this.state,
                                r = t.find((t) => e.id === t.conversation_id);
                            if (r) {
                                const t = (0, A.E5)(r, void 0, i),
                                    a = (0, T.ZP)(t, s);
                                (e.data = { ...t, conversationId: e.data.conversationId, name: a || "" }), n.find(({ id: t }) => t === e.id) ? this._handleRemoveParticipant(e) : this.setState({ participants: n.concat(e) });
                            }
                        }),
                        (this._handleParticipantToggle = (e) => {
                            const t = this.state.participants;
                            if (t.find(({ id: t }) => t === e.id)) this._handleRemoveParticipant(e);
                            else {
                                const s = t.concat(e);
                                this.setState({ participants: s });
                            }
                        }),
                        (this._handleRemoveParticipant = (e) => {
                            const t = this.state.participants.filter((t) => t.id !== e.id);
                            this.setState({ participants: t });
                        }),
                        (this._handleConversationRouting = () => {
                            const { tweetAttachment: e } = this.props;
                            e ? this._handleShareTweet() : this._handleCreateConversation();
                        }),
                        (this._getExistingGroupConversationFromCache = (e) => {
                            const { conversations: t } = this.props;
                            return t.find((t) => {
                                const s = t.participants.length - 1;
                                return !t.name && s === e.length && e.every((e) => Boolean(t.participants.find((t) => e.id === t.user_id)));
                            });
                        }),
                        (this._getExistingGroupConversationFromApi = (e) => {
                            const t = e.map((e) => e.id).join(",");
                            return this.props.fetchConversationFromParticipants(t);
                        }),
                        (this._getExistingGroupConversation = (e) => {
                            if (e.length <= 1) return Promise.resolve();
                            const t = this._getExistingGroupConversationFromCache(e);
                            return t ? Promise.resolve(t) : this._getExistingGroupConversationFromApi(e);
                        }),
                        (this._handleCreateConversation = () => {
                            const { history: e, initialMessage: t, tweetAttachment: s } = this.props,
                                { participants: i } = this.state;
                            if (1 === i.length) {
                                const e = i[0],
                                    t = this._getConversationIdFromTypeahead(e);
                                this._goToConversation(t);
                            } else {
                                const n = this._getExistingGroupConversation(i);
                                this._disableFocusingPreviousActiveElement && this._disableFocusingPreviousActiveElement(),
                                    n
                                        .then((e) => {
                                            if (!e) throw new Error("No conversation found");
                                            this._goToConversation(e.conversation_id);
                                        })
                                        .catch(() => {
                                            e.replace({ pathname: "/messages/group", query: { [q]: t }, state: { participants: i, tweetAttachment: s, isNewGroupConversation: !0 } });
                                        }),
                                    this._disableFocusingPreviousActiveElement && this._disableFocusingPreviousActiveElement();
                            }
                        }),
                        (this._handleShareTweetToGroup = (e, t) => (this.setState({ mode: Ce.CREATE_GROUP, isSending: !0 }), this._handleShareTweet(e, t).then(({ conversationId: e, text: t }) => Promise.resolve(e)))),
                        (this._handleShareTweet = (e, t) => {
                            const { createLocalApiErrorHandler: s, perspective: i, tweetAttachment: n } = this.props,
                                { participants: r } = this.state,
                                a = 1 === r.length;
                            this.setState({ isSending: !0 });
                            let o = r;
                            a && (o = r[0]);
                            const c = { senderId: i, tweetAttachment: n, text: t },
                                d = this._getConversationIdFromTypeahead(o);
                            if (d) return this._sendMessage(d, r, c).then(({ conversationId: e = "" } = {}) => Promise.resolve({ conversationId: e, text: t || "" }));
                            return this._getExistingGroupConversation(r)
                                .catch(s(I.RU))
                                .then((e) => {
                                    const s = e ? e.conversation_id : null;
                                    return this._sendMessage(s, r, c).then(({ conversationId: e = "" } = {}) => Promise.resolve({ conversationId: e, text: t || "" }));
                                });
                        }),
                        (this._sendMessage = (e, t, s) => {
                            const { analytics: i, createLocalApiErrorHandler: n, history: r, sendMessage: a } = this.props,
                                { mode: o } = this.state,
                                c = { conversationId: void 0, recipients: void 0, ...s };
                            if (!e && Array.isArray(t)) {
                                const e = t
                                    .map((e) => {
                                        if (e.type === D.El.User) return e.data.id_str;
                                    })
                                    .filter(Boolean);
                                c.recipients = e;
                            } else c.conversationId = e;
                            const d = () => {
                                    r.push("/i/verified-get-verified", { variant: "DmRateLimited" });
                                },
                                l = n((0, I.T5)(d)),
                                h = n((0, I.eN)(d)),
                                p = { action: "send_tweet_dm" },
                                u = { action: "share_error" };
                            if (
                                (o === Ce.SHARE_TWEET_INDIVIDUALLY &&
                                    t?.length &&
                                    t.forEach(() => {
                                        i.scribe(p);
                                    }),
                                o === Ce.SHARE_TWEET_INDIVIDUALLY && t?.length > 1)
                            ) {
                                const e = t?.map((e) => {
                                    const t = this._getConversationIdFromTypeahead(e);
                                    return { ...c, conversationId: t, recipients: void 0 };
                                });
                                return Promise.all(e.map((e) => a(e)))
                                    .then(() => {
                                        this._displayDMMessageSentSuccessToast(), this.setState({ isSending: !1 }), r.goBack();
                                    })
                                    .catch((e) => {
                                        i.scribe(u), this.setState({ isSending: !1 }), h(e);
                                    });
                            }
                            return a(c)
                                .then(({ conversationId: e }) => {
                                    this._displayDMMessageSentSuccessToast(e), this.setState({ isSending: !1 }), r.goBackThroughModals();
                                })
                                .catch((e) => {
                                    o === Ce.SHARE_TWEET_INDIVIDUALLY && i.scribe(u), this.setState({ isSending: !1 }), l(e);
                                });
                        }),
                        (this._goToConversation = (e) => {
                            const { history: t, initialMessage: s, popOutConversation: i, tweetAttachment: n } = this.props;
                            this._disableFocusingPreviousActiveElement && this._disableFocusingPreviousActiveElement(), e && ("drawer" === t.location?.state?.source ? (i(e), t.goBack()) : t.replace({ pathname: `/messages/${e}`, query: { [q]: s }, state: { tweetAttachment: n } }));
                        }),
                        (this._displayDMMessageSentSuccessToast = (e) => {
                            const { addToast: t } = this.props;
                            t({ text: e ? (this.state.mode === Ce.CREATE_GROUP ? le : de) : he, action: { link: e ? `/messages/${e}` : "/messages", label: ce } });
                        }),
                        (this._getConversationIdFromTypeahead = (e) => {
                            const { encryptConversation: t } = this.state;
                            if (!Array.isArray(e) && e.type === D.El.DMConversation) return e.data.conversationId;
                            if (!Array.isArray(e) && e.type === D.El.User) {
                                const s = e.data.id_str,
                                    i = this.props.perspective;
                                return this._withSecretDM() && t ? (0, P.Z)(s, i) : (0, b.Z)(s, i);
                            }
                            return null;
                        }),
                        (this.state = { mode: this._determineMode(this.props), participants: [], query: "", isSending: !1, encryptConversation: !1 });
                }
                componentDidMount() {
                    const {
                        createLocalApiErrorHandler: e,
                        history: t,
                        initialMessage: s,
                        location: { query: i },
                        perspective: n,
                        recipientId: r,
                    } = this.props;
                    if (r) {
                        const e = (0, b.Z)(r, n);
                        t.replace({ pathname: `/messages/${e}`, query: { ...i, [q]: s } });
                    } else this.props.fetchInboxIfNeeded().catch(e());
                }
                componentDidUpdate(e, t) {
                    const { participants: s } = this.state;
                    this.state.mode === Ce.SHARE_TWEET_INDIVIDUALLY && t.participants.length < s.length && this._composer.current && this._composer.current.focus();
                }
                shouldComponentUpdate(e, t) {
                    return this.state.mode !== t.mode || (!this.state.isSending && !t.isSending);
                }
                render() {
                    const { recipientId: e } = this.props;
                    return e ? null : n.createElement(l.Z.Consumer, null, this._renderScreen);
                }
            }
            ye.contextType = C.rC;
            const Ie = h.default.create((e) => ({ fill: { flex: 1 }, button: { marginStart: e.spaces.space12 }, container: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, createGroupButton: { padding: e.spaces.space2, marginEnd: e.spaces.space12 }, encryptedMessageSubtitleContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, popover: { padding: e.spaces.space24 }, popoverButton: { paddingVertical: e.spaces.space12 }, popoverElement: { marginVertical: e.spaces.space8 }, searchIcon: { padding: e.spaces.space8 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, rightColumn: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "flex-end" }, shadow: { boxShadow: "0 -1px 3px rgba(0,0,0,0.12)" }, placeholder: { height: 46 }, fixToBottom: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, start: 0, end: 0, paddingBottom: h.default.iPhoneOffsetBottom }, lockContainer: { display: "flex", alignItems: "center", top: e.spacesPx.space32, end: -e.spacesPx.space20 } })),
                Ae = n.forwardRef((e, t) => {
                    const s = (0, w.oR)(),
                        r = n.useMemo(() => n.lazy(() => (0, g.S)(s).then(() => ({ default: J(ye) }))), [s]);
                    return n.createElement(n.Suspense, { fallback: null }, n.createElement(r, (0, i.Z)({}, e, { ref: t })));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-63cb1cc4.92e4609a.js.map
