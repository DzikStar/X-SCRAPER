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
            s.r(t), s.d(t, { DMAddParticipantsScreen: () => j, default: () => q, getItemIsDisabled: () => z });
            s(136728);
            var i = s(371706),
                n = s(202784),
                r = s(325686),
                a = (s(585488), s(351743)),
                o = s.n(a),
                c = s(154003),
                d = s(392237),
                l = s(111677),
                h = s.n(l),
                p = s(625661),
                u = s(980407),
                m = s(597496),
                _ = s(8448),
                E = s(297436),
                g = s(339110),
                v = s(880655),
                S = s(125363),
                f = s(674420),
                C = s(601576),
                y = s(312771),
                I = (s(571372), s(24949)),
                A = s(450681),
                b = s(71620),
                T = s(668214),
                P = s(296196),
                D = s(390387),
                M = s(919022);
            const w = (e, t) => t.match.params.conversationId,
                R = (e, t) => {
                    const s = P.selectConversation(e, w(0, t)),
                        i = s?.data,
                        n = i?.participants;
                    return n;
                },
                O = (e, t) => P.selectConversationFetchStatus(e, w(0, t)),
                x = (0, I.P1)(P.selectConversations, (e) =>
                    (0, A.Z)(
                        Object.keys(e).map((t) => {
                            const s = e[t];
                            if (!s.isDeleted) return s.data;
                        }),
                    ),
                ),
                L = (0, T.Z)()
                    .propsFromState(() => ({ conversationId: w, conversations: x, existingParticipants: R, fetchStatus: O, perspective: D._h, users: M.ZP.selectAll }))
                    .adjustStateProps(({ conversationId: e, conversations: t, existingParticipants: s, fetchStatus: i, perspective: n, users: r }) => {
                        if (!n) throw new Error("logged-in user not found");
                        return { conversationId: e, conversations: t, existingParticipants: s, fetchStatus: i, perspective: n, users: r };
                    })
                    .propsFromActions(() => ({ addToast: C.fz, createLocalApiErrorHandler: (0, b.zr)("DIRECT_MESSAGES_ADD_PARTICIPANTS"), fetchConversationIfNeeded: P.fetchConversationIfNeeded }))
                    .withAnalytics({ page: "messages", section: "add_participants" }),
                G = { addPeopleButtonText: "addPeopleButtonText", nextButton: "nextButton", searchPeople: "searchPeople" },
                U = h().c602600a,
                N = h().d4986f86,
                Z = h().af40a8e0,
                F = h().e1bde73f,
                k = h().e62d3c10,
                B = h().h8403fb6,
                H = h().ja522ed4,
                V = 12,
                W = i.Z;
            function j(e) {
                const t = n.useRef(null),
                    [s, i] = n.useState([]),
                    [a, d] = n.useState(""),
                    { createLocalApiErrorHandler: l, conversationId: h, fetchConversationIfNeeded: I, history: A, fetchStatus: b, conversations: T, existingParticipants: P = [], perspective: D, users: M } = e,
                    w = (0, S.I0)(),
                    [R] = o()(W);
                n.useEffect(() => {
                    I({ conversationId: h }).catch(l((0, _.q)(h)));
                }, [I, h, l]);
                const O = () => n.createElement(r.Z, { style: Y.rightColumn }, n.createElement(c.ZP, { disabled: 0 === s.length || b !== y.ZP.LOADED, onPress: L, size: "small", testID: G.addPeopleButtonText, type: "primaryFilled" }, Z)),
                    x = (e) => {
                        i(s.filter(({ id: t }) => t !== e.id));
                    },
                    L = () => {
                        const e = s.map(({ id: e }) => e);
                        R({
                            variables: { addedParticipants: e, conversationId: h },
                            onCompleted: (e) => {
                                if ("AddParticipantsSuccess" !== e.add_participants?.__typename || e.add_participants?.user_failures?.length) {
                                    if ("AddParticipantsSuccess" === e.add_participants?.__typename && e.add_participants?.user_failures?.length) {
                                        const t = e.add_participants.user_failures[0].value;
                                        if ("SenderIsNotVerifiedForMessageRequests" === t) {
                                            const e = { variant: "DmAddToGroup" };
                                            A.push("/i/verified-get-verified", e);
                                        } else {
                                            const e = "RecipientNotFound" === t ? k : H;
                                            w((0, C.fz)({ text: e }));
                                        }
                                    }
                                } else {
                                    const s = T.find((e) => e.conversation_id === h);
                                    if (s) {
                                        const t = e.add_participants?.added_users || [],
                                            i = [];
                                        t.forEach((e) => {
                                            i.push({ user_id: e });
                                        });
                                        const n = { conversations: {} };
                                        (n.conversations[h] = { ...s, participants: [...s.participants, ...i] }), w((0, f.f)(n, !1));
                                    }
                                    t.current && t.current.goBack();
                                }
                            },
                            onError: (e) => {
                                l({ defaultToast: { text: B }, showToast: !0 })(e);
                            },
                        });
                    },
                    j = n.useMemo(
                        () =>
                            (0, v.i)(
                                a,
                                T.map((e) => (0, E.E5)(e, void 0, M)),
                                D,
                            ).slice(0, V),
                        [a, T, D, M],
                    ),
                    q = P.map(({ user_id: e }) => e);
                return n.createElement(
                    u.Z,
                    { containerStyle: Y.fill, documentTitle: N, renderHeader: () => n.createElement(p.ZP, { backButtonType: "close", backLocation: `/messages/${h}`, history: A, ref: t, rightControl: O(), title: U }) },
                    n.createElement(
                        r.Z,
                        { style: Y.fill },
                        n.createElement(m.fb, {
                            getItemDisabledMessage: (e) => (e.type === g.El.User ? F({ screenName: e.data.screen_name }) : void 0),
                            getItemIsDisabled: z,
                            injections: j,
                            onQueryChange: (e) => {
                                d(e);
                            },
                            onRemove: x,
                            onSelect: (e) => {
                                e.type === g.El.User && (s.find(({ id: t }) => t === e.id) ? x(e) : i([...s, e]));
                            },
                            preselectedUsers: q,
                            selectedUsers: s,
                            source: g._4.ComposeMessage,
                            withCompactPills: !0,
                        }),
                    ),
                );
            }
            const z = (e) => e.type === g.El.User && !(e.data.can_dm || e.data.is_dm_able),
                Y = d.default.create((e) => ({ fill: { flex: 1 }, rightColumn: { flexDirection: "row", flexGrow: 1, justifyContent: "flex-end", alignItems: "center" } })),
                q = L(j);
        },
        496708: (e, t, s) => {
            s.r(t), s.d(t, { DMComposeScreen: () => Ce, Mode: () => fe, default: () => Ie });
            var i = s(807896),
                n = (s(571372), s(136728), s(202784)),
                r = s(325686),
                a = s(731708),
                o = s(745153),
                c = s(154003),
                d = s(952428),
                l = s(386802),
                h = s(392237),
                p = s(111677),
                u = s.n(p),
                m = s(119232),
                _ = s(912021),
                E = s(323265),
                g = s(800173),
                v = s(573839),
                S = s(980407),
                f = s(443781),
                C = s(597496),
                y = s(225351),
                I = s(297436),
                A = s(103335),
                b = s(66242),
                T = s(778729),
                P = s(339110),
                D = s(880655),
                M = s(125363),
                w = s(39623),
                R = s(946181),
                O = s(213386),
                x = s(778787),
                L = s(24949),
                G = s(161821),
                U = s(71620),
                N = s(2430),
                Z = s(668214),
                F = s(296196),
                k = s(798538),
                B = s(550293),
                H = s(390387),
                V = s(601576),
                W = s(919022),
                j = s(593953);
            const z = { page: "messages", section: "compose", component: "dm" },
                Y = "text",
                q = "recipient_id",
                K = (0, N.KT)(Y),
                $ =
                    ((0, N.cI)(q),
                    (e) => {
                        const t = H._h(e);
                        if (!t) throw new Error("logged-in user not found");
                        return t;
                    }),
                Q = (e) => !!H.kD(e),
                X = (0, Z.Z)()
                    .propsFromState(() => ({
                        hasRegisteredCryptoKey: Q,
                        conversations: (0, L.P1)(F.selectConversations, (e) => {
                            const t = [];
                            for (const s of (0, G.Z)(e)) !s.isDeleted && s.data && t.push(s.data);
                            return t;
                        }),
                        initialMessage: K,
                        perspective: $,
                        tweetAttachment: j.Ss,
                        users: W.ZP.selectAll,
                        recipientId: (0, N.cI)(q),
                    }))
                    .propsFromActions(() => ({ fetchConversation: F.fetchConversation, addToast: V.fz, createLocalApiErrorHandler: (0, U.zr)("DIRECT_MESSAGES_COMPOSE"), fetchConversationFromParticipants: F.fetchConversationFromParticipants, fetchInboxIfNeeded: F.fetchInboxIfNeeded, popOutConversation: B.DO, sendMessage: k.bG }))
                    .withAnalytics(z),
                J = "nextButton",
                ee = u().de4669e2,
                te = u().ff599112,
                se = u().c602600a,
                ie = u().f61c4bb0,
                ne = u().cdcebd22,
                re = u().fa2033f6,
                ae = u().aa59bb6a,
                oe = u().f277e94a,
                ce = u().a2ccb2e8,
                de = u().f906f464,
                le = u().i8a99aae,
                he = u().e3275464,
                pe = u().hbbc401c,
                ue = u().c1df579e,
                me = u().e1bde73f,
                _e = u().f7289cd6,
                Ee = u().e6cced4e,
                ge = u().a893d602,
                ve = Object.freeze({ BACK: "back", CLOSE: "close" }),
                Se = Object.freeze({ COMPOSE_ROUTE: "/messages/compose", GROUP_COMPOSE_ROUTE: "/messages/compose/group", MESSAGES_ROUTE: "/messages" }),
                fe = Object.freeze({ COMPOSE_MESSAGE: 0, CREATE_GROUP: 1, SHARE_TWEET_INDIVIDUALLY: 2 });
            class Ce extends n.Component {
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
                            return this.props.location?.state?.isNewGroup ? fe.CREATE_GROUP : t ? fe.SHARE_TWEET_INDIVIDUALLY : fe.COMPOSE_MESSAGE;
                        }),
                        (this._isSharingMode = (e) => e === fe.SHARE_TWEET_INDIVIDUALLY),
                        (this._renderEncryptedMessageSubtitle = () => n.createElement(r.Z, { style: ye.encryptedMessageSubtitleContainer }, n.createElement(a.ZP, null, re), n.createElement(O.X, null))),
                        (this._renderScreen = ({ isModal: e }) => {
                            const { history: t } = this.props,
                                { encryptConversation: s, mode: i, participants: a } = this.state;
                            let c, d;
                            switch (i) {
                                case fe.COMPOSE_MESSAGE:
                                    (c = ne), s && (d = this._renderEncryptedMessageSubtitle());
                                    break;
                                case fe.CREATE_GROUP:
                                    (c = te), (d = se);
                                    break;
                                case fe.SHARE_TWEET_INDIVIDUALLY:
                                    c = a.length > 1 ? ae : ie;
                                    break;
                                default:
                                    c = "";
                            }
                            const l = i === fe.SHARE_TWEET_INDIVIDUALLY;
                            return n.createElement(S.Z, { backButtonType: i === fe.CREATE_GROUP ? ve.BACK : ve.CLOSE, backLocation: i === fe.CREATE_GROUP ? Se.COMPOSE_ROUTE : Se.MESSAGES_ROUTE, containerStyle: ye.fill, documentTitle: c, history: t, onBackClick: i === fe.CREATE_GROUP ? this._handleBackClick : this._handleClose, rightControl: l ? void 0 : this._renderAppBarRightControl(), subtitle: d, title: c }, n.createElement(o.Z.Context.Consumer, null, this._setDisableFocusingPreviousActiveElement), n.createElement(r.Z, { style: ye.fill }, this._renderUserPicker(), l && !e ? n.createElement(r.Z, { style: ye.placeholder }) : null, this._renderComposer(e)));
                        }),
                        (this._setDisableFocusingPreviousActiveElement = ({ disableFocusingPreviousActiveElement: e }) => {
                            this._disableFocusingPreviousActiveElement = e;
                        }),
                        (this._handleEncryptConversationChange = (e) => {
                            this.setState({ encryptConversation: e });
                        }),
                        (this._renderEncryptConversationSwitch = () => {
                            const { encryptConversation: e } = this.state;
                            return n.createElement(r.Z, { style: ye.rightColumn }, n.createElement(R.X, { encrypted: e, onChange: this._handleEncryptConversationChange }));
                        }),
                        (this._renderAppBarRightControl = () => {
                            const { tweetAttachment: e } = this.props,
                                { mode: t } = this.state,
                                s = e ? he : ue;
                            return n.createElement(r.Z, { style: ye.rightColumn }, this._withSecretDM() && t === fe.COMPOSE_MESSAGE ? this._renderEncryptConversationSwitch() : n.createElement(c.ZP, { disabled: 0 === this.state.participants.length, onPress: this._handleConversationRouting, size: "small", style: ye.button, testID: J, type: "primaryFilled" }, s));
                        }),
                        (this._renderComposer = (e) => {
                            const { history: t, initialMessage: s, tweetAttachment: i } = this.props,
                                { isSending: r, mode: a, participants: o } = this.state;
                            o.length;
                            const c = o.map(({ id: e, type: t }) => ({ id: e, type: t }));
                            return a === fe.SHARE_TWEET_INDIVIDUALLY ? n.createElement(x.Z, { canSendEmptyMessage: !!i, conversationId: "DMComposeScreen", disabled: 0 === o.length || r, history: t, isSending: r, isShareViaDM: !0, isUploading: !1, mediaUploadProgress: 0, newConversationParticipants: c, onPrimaryAction: this._handleShareTweet, onSecondaryAction: this._handleShareTweetToGroup, placeholderText: ee, prefillText: s, ref: this._composer, scribeNamespace: z, secondaryActionDisabledPopoverRenderer: this._renderSendToGroupDisabledPopover, secondaryActionLabel: pe, shouldEnableSecondaryActionFunc: this._shouldEnableSendToGroup, shouldShowSecondaryActionFunc: this._shouldShowSendToGroup, style: [ye.shadow, !e && ye.fixToBottom], withEmojiPicker: !1, withGifPicker: !1, withMediaPicker: !1, withVideoTrimmer: this.context.featureSwitches.isTrue("responsive_web_video_trimmer_enabled") }) : null;
                        }),
                        (this._renderEncryptedLock = () => () => {
                            const { encryptConversation: e } = this.state;
                            return this._withSecretDM() && e ? n.createElement(r.Z, { style: ye.lockContainer }, n.createElement(w.Z, null)) : null;
                        }),
                        (this._renderUserPicker = () => {
                            const { conversations: e, perspective: t } = this.props,
                                { encryptConversation: s, mode: i, participants: r, query: a } = this.state,
                                o = this._withSecretDM() && (s || i === fe.CREATE_GROUP);
                            return n.createElement(C.fb, { getItemDisabledMessage: this._getItemDisabledMessage, getItemIsDisabled: this._getItemIsDisabled(this._separateShareLimit), injections: this._getInjections(e, t, a, o), onQueryChange: this._handleQueryChange, onRemove: this._handleRemoveParticipant, onSelect: this._getHandleSuggestionSelected(), renderAvatarDecoration: this._renderEncryptedLock(), renderHeader: this._renderHeader(), renderNoResultsState: this._renderHeader(), selectedUsers: r, shouldAutoFocus: i !== fe.SHARE_TWEET_INDIVIDUALLY || !E.ZP.isIOS(), source: P._4.ComposeMessage, withCompactPills: !0 });
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
                            e.scribe({ element: "create_group", action: "click" }), this.setState({ mode: fe.CREATE_GROUP });
                        }),
                        (this._shouldShowSendToGroup = () => this.state.participants.length > 1),
                        (this._shouldEnableSendToGroup = () => !this._hasAtLeastOneGroupSelected()),
                        (this._renderSendToGroupDisabledPopover = (e) => n.createElement(r.Z, { style: ye.popover }, n.createElement(a.ZP, { size: "headline1", style: ye.popoverElement, weight: "bold" }, _e), n.createElement(a.ZP, { style: ye.popoverElement }, Ee), n.createElement(c.ZP, { onPress: e, style: [ye.popoverElement, ye.popoverButton], type: "primaryFilled" }, ge))),
                        (this._renderHeader = () => () => {
                            const { encryptConversation: e, mode: t, participants: s, query: i } = this.state,
                                { tweetAttachment: r } = this.props;
                            return s.length || i || e || t !== fe.COMPOSE_MESSAGE ? null : n.createElement(d.Z, { link: { pathname: Se.GROUP_COMPOSE_ROUTE, state: { ...this.state, isNewGroup: !0, participants: s, tweetAttachment: r }, anchorless: !0 }, onPress: this._handleCreateGroup, style: ye.container }, n.createElement(c.ZP, { "aria-label": te, hoverLabel: { label: te }, icon: n.createElement(m.default, { style: ye.searchIcon }), onPress: this._handleCreateGroup, size: "small", style: ye.createGroupButton, type: "brandOutlined" }), n.createElement(a.ZP, { color: "link", numberOfLines: 1, weight: "bold" }, te));
                        }),
                        (this._isShareLimitMet = (e) => {
                            const { mode: t, participants: s } = this.state,
                                i = t === fe.SHARE_TWEET_INDIVIDUALLY && this._separateShareLimit && s.length >= this._separateShareLimit,
                                n = s.filter((t) => t.id === e.id).length;
                            return !(!i || n);
                        }),
                        (this._isGroupOptionDisabled = (e) => {
                            const { mode: t, participants: s } = this.state;
                            if (!this._isSelectedGroup(e) && t !== fe.SHARE_TWEET_INDIVIDUALLY && (this._hasAtLeastOneGroupSelected() || (e.type === P.El.DMConversation && (s.length > 0 || t === fe.CREATE_GROUP)))) return !0;
                        }),
                        (this._canDMUser = (e) => {
                            if (e.type === P.El.User) return !(e.data.can_dm || e.data.is_dm_able);
                        }),
                        (this._hasAtLeastOneGroupSelected = () => {
                            for (const e of this.state.participants) if (e.type === P.El.DMConversation) return !0;
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
                        (this._getItemDisabledMessage = (e) => (e.type === P.El.User ? me({ screenName: e.data.screen_name }) : void 0)),
                        (this._getInjections = (0, _.Z)((e, t, s, i) =>
                            (0, D.w)(
                                s,
                                e.map((e) => (0, I.E5)(e, void 0, this.props.users)),
                                t,
                                i,
                            ).slice(0, 12),
                        )),
                        (this._handleQueryChange = (e) => {
                            this.setState({ query: e });
                        }),
                        (this._getHandleSuggestionSelected = () => (e) => {
                            const { mode: t, participants: s } = this.state;
                            if (e.type === P.El.User || e.type === P.El.DMConversation)
                                if (this._withSecretDM() && t === fe.COMPOSE_MESSAGE) {
                                    const t = this._getConversationIdFromTypeahead(e);
                                    this.props
                                        .fetchInboxIfNeeded()
                                        .then(() => this.props.fetchConversation({ conversationId: t }))
                                        .then(() => {
                                            this._goToConversation(t);
                                        });
                                } else if (this._hasAtLeastOneGroupSelected() && t !== fe.SHARE_TWEET_INDIVIDUALLY) e.id === s[0].id && this._handleRemoveParticipant(e);
                                else if (e.type === P.El.DMConversation)
                                    if (t === fe.SHARE_TWEET_INDIVIDUALLY) this._createConversationObjectForSelectionPill(e);
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
                                const t = (0, I.E5)(r, void 0, i),
                                    a = (0, b.ZP)(t, s);
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
                                            e.replace({ pathname: "/messages/group", query: { [Y]: t }, state: { participants: i, tweetAttachment: s, isNewGroupConversation: !0 } });
                                        }),
                                    this._disableFocusingPreviousActiveElement && this._disableFocusingPreviousActiveElement();
                            }
                        }),
                        (this._handleShareTweetToGroup = (e, t) => (this.setState({ mode: fe.CREATE_GROUP, isSending: !0 }), this._handleShareTweet(e, t).then(({ conversationId: e, text: t }) => Promise.resolve(e)))),
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
                                .catch(s(y.RU))
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
                                        if (e.type === P.El.User) return e.data.id_str;
                                    })
                                    .filter(Boolean);
                                c.recipients = e;
                            } else c.conversationId = e;
                            const d = () => {
                                    r.push("/i/verified-get-verified", { variant: "DmRateLimited" });
                                },
                                l = n((0, y.T5)(d)),
                                h = n((0, y.eN)(d)),
                                p = { action: "send_tweet_dm" },
                                u = { action: "share_error" };
                            if (
                                (o === fe.SHARE_TWEET_INDIVIDUALLY &&
                                    t?.length &&
                                    t.forEach(() => {
                                        i.scribe(p);
                                    }),
                                o === fe.SHARE_TWEET_INDIVIDUALLY && t?.length > 1)
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
                                    o === fe.SHARE_TWEET_INDIVIDUALLY && i.scribe(u), this.setState({ isSending: !1 }), l(e);
                                });
                        }),
                        (this._goToConversation = (e) => {
                            const { history: t, initialMessage: s, popOutConversation: i, tweetAttachment: n } = this.props;
                            this._disableFocusingPreviousActiveElement && this._disableFocusingPreviousActiveElement(), e && ("drawer" === t.location?.state?.source ? (i(e), t.goBack()) : t.replace({ pathname: `/messages/${e}`, query: { [Y]: s }, state: { tweetAttachment: n } }));
                        }),
                        (this._displayDMMessageSentSuccessToast = (e) => {
                            const { addToast: t } = this.props;
                            t({ text: e ? (this.state.mode === fe.CREATE_GROUP ? de : ce) : le, action: { link: e ? `/messages/${e}` : "/messages", label: oe } });
                        }),
                        (this._getConversationIdFromTypeahead = (e) => {
                            const { encryptConversation: t } = this.state;
                            if (!Array.isArray(e) && e.type === P.El.DMConversation) return e.data.conversationId;
                            if (!Array.isArray(e) && e.type === P.El.User) {
                                const s = e.data.id_str,
                                    i = this.props.perspective;
                                return this._withSecretDM() && t ? (0, T.Z)(s, i) : (0, A.Z)(s, i);
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
                        const e = (0, A.Z)(r, n);
                        t.replace({ pathname: `/messages/${e}`, query: { ...i, [Y]: s } });
                    } else this.props.fetchInboxIfNeeded().catch(e());
                }
                componentDidUpdate(e, t) {
                    const { participants: s } = this.state;
                    this.state.mode === fe.SHARE_TWEET_INDIVIDUALLY && t.participants.length < s.length && this._composer.current && this._composer.current.focus();
                }
                shouldComponentUpdate(e, t) {
                    return this.state.mode !== t.mode || (!this.state.isSending && !t.isSending);
                }
                render() {
                    const { recipientId: e } = this.props;
                    return e ? null : n.createElement(l.Z.Consumer, null, this._renderScreen);
                }
            }
            Ce.contextType = f.rC;
            const ye = h.default.create((e) => ({ fill: { flex: 1 }, button: { marginStart: e.spaces.space12 }, container: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, flexDirection: "row", alignItems: "center", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, createGroupButton: { padding: e.spaces.space2, marginEnd: e.spaces.space12 }, encryptedMessageSubtitleContainer: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8 }, popover: { padding: e.spaces.space24 }, popoverButton: { paddingVertical: e.spaces.space12 }, popoverElement: { marginVertical: e.spaces.space8 }, searchIcon: { padding: e.spaces.space8 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, rightColumn: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "flex-end" }, shadow: { boxShadow: "0 -1px 3px rgba(0,0,0,0.12)" }, placeholder: { height: 46 }, fixToBottom: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, start: 0, end: 0, paddingBottom: h.default.iPhoneOffsetBottom }, lockContainer: { display: "flex", alignItems: "center", top: e.spacesPx.space32, end: -e.spacesPx.space20 } })),
                Ie = n.forwardRef((e, t) => {
                    const s = (0, M.oR)(),
                        r = n.useMemo(() => n.lazy(() => (0, g.S)(s).then(() => ({ default: X(Ce) }))), [s]);
                    return n.createElement(n.Suspense, { fallback: null }, n.createElement(r, (0, i.Z)({}, e, { ref: t })));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-63cb1cc4.8f56003a.js.map
