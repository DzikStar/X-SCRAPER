"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-b085b550"],
    {
        916702: (e, t, s) => {
            s.d(t, { ZP: () => v });
            var r = s(202784),
                i = s(325686),
                n = s(731708),
                a = s(688715),
                o = s(530732),
                c = s(823161),
                l = s(392237),
                d = s(908478),
                p = s(443781),
                u = s(275365),
                m = s(503115),
                h = s(342478),
                g = s(513805);
            const y = ({ children: e, link: t, style: s }) => r.createElement(n.ZP, { align: "center", color: "gray700", link: t, size: "subtext1", style: s }, e);
            class _ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContents = () => {
                            const { conversation: e, entry: t, entryType: s, perspective: n, users: a } = this.props,
                                o = (0, g.FC)(t, s, n, a);
                            switch (s) {
                                case u.Cr.CONVERSATION_AVATAR_UPDATE: {
                                    const s = e.avatar_image_https === t.conversation_avatar_image_https;
                                    return r.createElement(r.Fragment, null, this._isValidImageSource(e.avatar_image_https) && s ? r.createElement(i.Z, { style: f.conversationAvatarContainer }, r.createElement(m.Z, { conversation: e, perspective: n })) : null, r.createElement(y, null, o));
                                }
                                case u.Cr.JOIN_CONVERSATION: {
                                    const e = this._getAddedYouMessageWithProfileInfo(o),
                                        t = this._getParticipantsFromEntry(),
                                        s = r.createElement(y, null, this._getParticipantsFromEntryText(t)),
                                        i = this._getJoinConversationDetails(t, s);
                                    return r.createElement(r.Fragment, null, e, i);
                                }
                                default:
                                    return r.createElement(y, null, o);
                            }
                        }),
                        (this._getAddedYouMessageWithProfileInfo = (e) => {
                            const { entry: t, users: s } = this.props,
                                i = t.sender_id ? s[t.sender_id] : void 0,
                                n = i ? { pathname: (0, a.ju)(`https://x.com/${i.screen_name}`) } : void 0;
                            return r.createElement(o.Z, { interactiveStyles: null, link: n, style: f.userAddedYouContainer }, i ? r.createElement(c.default, { "aria-label": i.screen_name, screenName: i.screen_name, size: "medium", uri: i.profile_image_url_https, withHoverCard: !0, withLink: !0 }) : null, r.createElement(y, { link: n, style: f.userAddedYouText }, e));
                        }),
                        (this._getJoinConversationDetails = (e, t) => {
                            const { conversation: s } = this.props;
                            return r.createElement(o.Z, { interactiveStyles: null, link: { pathname: `/messages/${s.conversation_id}/participants` }, style: f.joinConversationDetails }, t);
                        });
                }
                shouldComponentUpdate(e) {
                    return !(0, d.Z)(this.props, e);
                }
                render() {
                    return r.createElement(i.Z, { style: f.root }, this._renderContents());
                }
                _isValidImageSource(e) {
                    return e && "" !== e && e.indexOf("MEDIA_NOT_FOUND") < 0;
                }
                _getParticipantsFromEntry() {
                    const { entry: e, perspective: t, users: s } = this.props;
                    return e.participants
                        ? e.participants
                              .filter(({ user_id: e }) => t !== e)
                              .map(({ user_id: e }) => s[e])
                              .filter(Boolean)
                        : [];
                }
                _getParticipantsFromEntryText(e) {
                    const {
                        conversation: { conversation_id: t },
                    } = this.props;
                    return (0, g.Fn)(e.length, t);
                }
            }
            _.contextType = p.rC;
            const f = l.default.create((e) => ({ root: { paddingBottom: e.spaces.space20 }, conversationAvatarContainer: { alignSelf: "center", height: e.spaces.space64, marginBottom: e.spaces.space12, width: e.spaces.space64 }, userAddedYouContainer: { flexDirection: "row", justifyContent: "center" }, userAddedYouText: { flexShrink: 1, marginStart: e.spaces.space8 }, joinConversationDetails: { marginTop: e.spaces.space12 }, userAvatarList: { marginTop: e.spaces.space4 }, userAvatarFacepile: { marginTop: e.spaces.space4, justifyContent: "center" } })),
                v = (0, h.Z)(_);
        },
        206669: (e, t, s) => {
            s.d(t, { _h: () => g, k2: () => p, ly: () => h });
            var r = s(781054),
                i = s(858883),
                n = s(202784),
                a = (s(585488), s(351743)),
                o = s.n(a),
                c = s(443781),
                l = s(125363),
                d = s(627279);
            const p = { funny: "😂", surprised: "😲", sad: "😢", like: "❤️", excited: "🔥", agree: "👍", disagree: "👎", angry: "😠", mask: "😷" },
                u = i.Z,
                m = r.Z,
                h = () => {
                    const { viewerUserId: e } = n.useContext(c.rC),
                        t = (0, l.I0)(),
                        [s] = o()(u);
                    return (r, i, n) => {
                        s({ variables: { conversationId: r, messageId: i, emojiReactions: [n], reactionTypes: ["Emoji"] }, optimisticUpdater: () => t((0, d.wC)(r, i, e, n)), onError: () => t((0, d.WO)(r, i, e, n)) });
                    };
                },
                g = () => {
                    const { viewerUserId: e } = n.useContext(c.rC),
                        t = (0, l.I0)(),
                        [s] = o()(m);
                    return (r, i, n) => {
                        s({ variables: { conversationId: r, messageId: i, emojiReactions: [n], reactionTypes: ["Emoji"] }, optimisticUpdater: () => t((0, d.WO)(r, i, e, n)), onError: () => t((0, d.wC)(r, i, e, n)) });
                    };
                };
        },
        503196: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = s(392237),
                i = s(912021);
            const n = (0, i.Z)(function (e) {
                const t = r.default.theme.spacesPx.space40;
                return { DMUserAvatarSizeType: "xLarge", DMUserAvatarSizePx: t, DMUserAvatarSpacerPx: t + r.default.theme.spacesPx.space12 };
            });
        },
        957032: (e, t, s) => {
            s.d(t, { ZP: () => As });
            var r = s(202784),
                i = s(325686),
                n = s(384153),
                a = s(840065),
                o = s(530732),
                c = s(224162),
                l = s(392237),
                d = s(908478),
                p = s(443781),
                u = s(725516),
                m = s(40093),
                h = s(616055),
                g = s(313758),
                y = s(386714),
                _ = s(593953),
                f = (s(136728), s(576648)),
                v = s(878052),
                b = s(811176),
                E = s(310452),
                C = s(154003),
                S = s(332920),
                w = s.n(S),
                I = s(800484),
                D = s(885724),
                Z = s(415506),
                x = s(427783),
                A = s(607127),
                R = s(774447),
                M = s(149170),
                P = s(109491),
                k = s(395067),
                F = s(500002),
                T = s(754310),
                B = s(715913),
                j = s(67369),
                U = s(186879),
                z = s(30899),
                H = s(157130),
                N = s(543440),
                L = s(478691),
                V = s(206669),
                O = s(459679),
                W = s(427620),
                G = s(24949),
                $ = s(668214),
                Y = s(627279),
                Q = s(390387);
            const K = [],
                J = (e, t) => (0, Y._d)(e, t.entry.id) || K,
                q = (e) => (0, Y.gm)(e).entries,
                X = (e) => Q._h(e),
                ee = (0, $.Z)().propsFromState(() => ({
                    selectedReactions: (0, G.P1)(q, J, X, (e, t, s) =>
                        t
                            .filter((t) => {
                                const r = e[t] && e[t].data;
                                return r && r.sender_id === s;
                            })
                            .map((t) => e[t].data.emoji_reaction ?? e[t].data.reaction_key),
                    ),
                })),
                te = l.default.create((e) => ({ reactions: { cursor: "pointer", flexDirection: "row", padding: e.spaces.space12 }, reaction: { borderRadius: e.borderRadii.small, padding: e.spaces.space4 }, selectedReaction: { backgroundColor: e.colors.gray50 }, moreIcon: { color: e.colors.gray600 } }));
            var se = s(340130);
            const re = w().ca7a2215,
                ie = w().fc0e94b7,
                ne = (e, t, s, r, i = 0, n) => {
                    e.scribe({ section: "twitter_service", component: "direct_messages", element: t ? "delete_reaction" : "create_reaction", action: "success", data: { conversation_id: r.conversation_id, conversation_participant_count: i, conversation_type: n ? se.NK.GROUP : se.NK.ONE_TO_ONE, message_type: (0, _.Qu)(r), reaction_emotion: s } });
                },
                ae = w().h63a5c3c,
                oe = w().bf2d08ca,
                ce = ["😂", "😲", "😢", "❤️", "🔥", "👍", "👎"];
            const le = ee(function (e) {
                const t = (0, u.z)(),
                    s = (0, V.ly)(),
                    n = (0, V._h)(),
                    [a, o] = r.useState([]);
                r.useEffect(() => {
                    let e = !0;
                    return (
                        L.Z.preload(),
                        U.ZP.get("emojiPicker2").then((t) => {
                            if (t && "object" == typeof t) {
                                const { recentlyUsed: s } = t,
                                    r = Array.isArray(s) ? (0, O.Z)(s, (e) => ("string" == typeof e ? e : void 0)) : [];
                                e && o(r);
                            }
                        }),
                        () => {
                            e = !1;
                        }
                    );
                }, []);
                const c = r.useCallback(() => {
                        const e = a.slice().reverse();
                        return (
                            ce.forEach((t) => {
                                e.includes(t) || e.push(t);
                            }),
                            e.slice(0, 7)
                        );
                    }, [a]),
                    l = (r, i) => () => {
                        const { entry: a, onEmojiSelected: o } = e;
                        a.conversation_id && (i ? n(a.conversation_id, a.id, r) : s(a.conversation_id, a.id, r), ne(t, i, r, e.entry, e.participantsCount, e.isGroupDM)), o(), e.dismiss();
                    },
                    d = r.useCallback(() => {
                        e.dismiss(), e.onShowMoreReactions();
                    }, [e]),
                    { selectedReactions: p } = e,
                    m = c().map((e) => {
                        const t = p.includes(e);
                        return r.createElement(W.Z, { accessibilityLabelFormatter: t ? re : ie, emojiReaction: e, emojiSize: "title4", enableHoverStyle: !0, focusable: !0, key: e, onPress: l(e, t), style: [te.reaction, t && te.selectedReaction] });
                    });
                return r.createElement(i.Z, { style: te.reactions }, m, r.createElement(C.ZP, { "aria-label": oe, hoverLabel: { label: ae }, icon: r.createElement(M.default, { style: te.moreIcon }), onPress: d, size: "medium", type: "brandText" }));
            });
            class de extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDMReactionPickerContent = (e) => {
                            const { entry: t, isGroupDM: s, onEmojiSelected: i, onShowMoreReactions: n, participantsCount: a } = this.props,
                                o = { dismiss: e, entry: t, isGroupDM: s, onEmojiSelected: i, onShowMoreReactions: n, participantsCount: a };
                            return r.createElement(le, o);
                        });
                }
                render() {
                    const { children: e, onDismiss: t } = this.props;
                    return r.createElement(H.Z, { enableEnterKeyToggle: !0, onDismiss: t, preferredVerticalOrientation: "up", renderContent: this._renderDMReactionPickerContent, withArrow: !0, withFixedPosition: this.context.isDrawer }, e);
                }
            }
            de.contextType = B.Z;
            function pe(e) {
                const t = (0, u.z)(),
                    s = (0, V.ly)(),
                    { isDrawer: i } = r.useContext(B.Z),
                    n = (0, j.GS)(),
                    [a, o] = r.useState(!1);
                r.useEffect(() => {
                    setTimeout(() => {
                        L.Z.preload(), U.ZP.get("emojiPicker2");
                    }, 5e3);
                }, []);
                const c = r.useCallback(
                        (r) => {
                            const { entry: i, onDismiss: n } = e;
                            i.conversation_id && (s(i.conversation_id, i.id, r.text), ne(t, !1, r.text, e.entry, e.participantsCount, e.isGroupDM)), o(!1), n();
                        },
                        [s, t, e],
                    ),
                    l = r.useCallback(() => {
                        o(!1), e.onDismiss();
                    }, [e]),
                    d = r.useCallback(
                        (t, s) => {
                            s && e.onDismiss();
                        },
                        [e],
                    ),
                    p = r.useCallback(() => {
                        e.onDismiss();
                    }, [e]),
                    m = r.useCallback(() => {
                        o(!0);
                    }, [o]),
                    h = r.useCallback(() => r.createElement(N.Z, { onSelect: c, partialRender: !1, style: n ? ue.mobileDropdownContainer : void 0 }), [c, n]);
                return r.createElement(z.Z, { onDismiss: l, preferredVerticalOrientation: "up", renderContent: h, visibilityBehavior: a ? H.Z.VISIBILITY_BEHAVIOR.forceVisible : H.Z.VISIBILITY_BEHAVIOR.forceHidden, withArrow: !0, withFixedPosition: i }, r.createElement(de, { entry: e.entry, isGroupDM: e.isGroupDM, onDismiss: d, onEmojiSelected: p, onShowMoreReactions: m, participantsCount: e.participantsCount }, e.children));
            }
            const ue = l.default.create((e) => ({ mobileDropdownContainer: { width: "100%" } }));
            var me = s(948322),
                he = s(601576);
            const ge =
                    (e) =>
                    (t, s, { api: r }) => {
                        r.withEndpoint(me.Z).reportDSA(e, {});
                    },
                ye = (0, $.Z)()
                    .propsFromActions(() => ({ addToast: he.fz, reportEncryptedDM: ge }))
                    .withAnalytics();
            var _e = s(897338),
                fe = (s(585488), s(351743)),
                ve = s.n(fe),
                be = s(468811),
                Ee = s.n(be),
                Ce = s(190286),
                Se = s(71620),
                we = s(499456),
                Ie = s(125363),
                De = s(296196);
            const Ze = w().j4bfee22,
                xe = w().d96cf7ce,
                Ae = w().faddd3a2,
                Re = _e.Z;
            function Me({ entry: e, handleHideDeleteConfirmation: t, inboxType: s, isGroupDM: i, participantsCount: n }) {
                const a = (0, u.z)(),
                    o = (0, Se.n7)("DIRECT_MESSAGES_OVERFLOW_ACTIONS"),
                    c = (0, Ie.I0)(),
                    [l] = ve()(Re);
                return r.createElement(Ce.Z, {
                    confirmButtonLabel: xe,
                    confirmButtonType: "destructiveFilled",
                    headline: Ze,
                    onCancel: t,
                    onConfirm: () => {
                        const t = (0, _.Qu)(e),
                            r = Ee().v1();
                        a.scribe({ action: "delete", data: { conversation_id: e.conversation_id, conversation_type: i ? se.NK.GROUP : se.NK.ONE_TO_ONE, conversation_participant_count: n, message_type: t, inbox_type: (0, _.e4)(s) } }),
                            l({
                                variables: { messageId: e.id, requestId: r },
                                onCompleted: (t) => {
                                    c(De.removeEntry(e.conversation_id, null, { id: e.id }));
                                },
                                onError: (e) => {
                                    o(we.f)(e);
                                },
                            });
                    },
                    text: Ae,
                });
            }
            const Pe = w().ba60339a,
                ke = w().eb497e08,
                Fe = w().b170974a,
                Te = w().i202bd22,
                Be = w().e9eef4c6,
                je = w().f2e5491a,
                Ue = w().f88553c8,
                ze = w().ifea3114,
                He = w().cac1482a,
                Ne = w().h63a5c3c,
                Le = w().d17df548,
                Ve = w().abd845fe;
            class Oe extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderOverflowMenu = (e) => {
                            const { analytics: t, entry: s, featureSwitches: i, isSent: n } = this.props,
                                a = k.C2.DMMessage,
                                o = t.contextualScribeNamespace,
                                c = [];
                            c.push({ text: Le, Icon: I.default, onClick: this._handleReplyTo });
                            const l = (0, _.NL)(s.conversation_id);
                            if ((i.isTrue("dm_edit_dms_overflow_menu_enabled") && n && !l && c.push({ text: Ve, Icon: D.default, onClick: this._handleEditDm }), !n)) {
                                if ((0, k.Yw)(i, a)) {
                                    const e = (0, k.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: a, reportedConversationId: s.conversation_id, reportedMessageId: s.id, reportedUser: s.message_data?.sender_id, scribeNamespace: t.contextualScribeNamespace });
                                    l || c.push({ text: Te, Icon: Z.default, link: { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(e) } } }, onClick: this.props.onReportMessage });
                                } else l || c.push({ text: Te, Icon: Z.default, link: { pathname: `/i/report/${a}/${s.id}`, state: { clientReferer: window.location.pathname, conversationId: s.conversation_id, scribeNamespace: o } }, onClick: this.props.onReportMessage });
                                if ((i.isTrue("dsa_encrypted_dms_report_flow_enabled") && l && s.message_data?.reporting_tag) || i.isTrue("dsa_report_flow_enabled")) {
                                    const e = (0, _.vg)(i, { entry_id: s.id, conversation_id: s.conversation_id, is_encrypted: l, type: "dm" });
                                    c.push({ text: Be, Icon: Z.default, link: { pathname: e, state: { clientReferer: window.location.pathname, scribeNamespace: o } }, onClick: l ? (t) => this._reportSecretConvo(t, s, e) : this.props.onReportMessage });
                                }
                            }
                            return f.Z.isAvailable() && c.push({ text: je, Icon: x.default, onClick: this._handleCopyMessageText }), c.push({ text: Pe, Icon: A.default, onClick: this._handleShowDeleteConfirmation(e) }), r.createElement(b.Z, { isFixed: this.context.isDrawer, items: c, onCloseRequested: this._handleHideActionsAndMenus(e), preferredHorizontalOrientation: "right" });
                        }),
                        (this._handleCopyMessageText = (e) => {
                            const { addToast: t } = this.props,
                                s = this._replaceMessageUrls();
                            s && (f.Z.setString(s), t({ text: Ue })), e?.();
                        }),
                        (this._handleReplyTo = (e) => {
                            const { entry: t } = this.props;
                            this.props.onReplyTo?.(t), e?.();
                        }),
                        (this._handleEditDm = (e) => {
                            const { entry: t } = this.props;
                            this.props.onEditDm?.(t), e?.();
                        }),
                        (this._handleForwardButton = () => {
                            const { entry: e, history: t } = this.props;
                            if (e?.message_data?.attachment?.tweet) {
                                const { tweet: s } = e.message_data.attachment;
                                t.push({ pathname: "/messages/compose", state: { tweetAttachment: { ...s, id_str: s.status } } });
                            }
                        }),
                        (this._reportSecretConvo = (e, t, s) => {
                            if (!t || !t.message_data) return;
                            const r = t.message_data;
                            if (!(r.id && r.text && r.franking_key && r.reporting_tag)) return;
                            const i = { dm_id: r.id, plaintext: r.text, franking_key: r.franking_key, reporting_tag: r.reporting_tag };
                            try {
                                this.props.reportEncryptedDM(i);
                            } catch (e) {}
                        }),
                        (this._handleSetActionsActive = () => {
                            const { setShouldFreezeUpdates: e } = this.props;
                            this.setState({ actionsAreActive: !0 }), e(!0);
                        }),
                        (this._handleHideDeleteConfirmation = () => {
                            this.setState({ showDeleteConfirmation: !1 });
                        }),
                        (this._handleHideActionsAndMenus = (e) => () => {
                            const { setShouldFreezeUpdates: t } = this.props;
                            e && e(), this.setState({ actionsAreActive: !1 }), t(!1);
                        }),
                        (this._handlePressReactionPickerButton = () => {
                            const { analytics: e, entry: t } = this.props;
                            e.scribe({ component: "reaction_button", element: (0, _.Qu)(t), action: "click" }), this._handleSetActionsActive();
                        }),
                        (this._handleShowDeleteConfirmation = (e) => () => {
                            const { setShouldFreezeUpdates: t } = this.props;
                            e(), this.setState({ actionsAreActive: !1, showDeleteConfirmation: !0 }), t(!1);
                        }),
                        (this._replaceMessageUrls = () => {
                            const { entry: e } = this.props,
                                t = e && e.message_data && e.message_data.entities;
                            let s = (e && e.message_data && e.message_data.text) || "";
                            return (
                                E.ZP.tweetTextParts(s, [0, s.length], t).forEach((e) => {
                                    "url" === e.entityType && (s = s.replace(e.url, e.expandedUrl));
                                }),
                                s
                            );
                        }),
                        (this.state = { actionsAreActive: !1, showDeleteConfirmation: !1 }),
                        (this._hasMedia = (0, T.Rw)(this.props.entry)),
                        (this._isNarrow = v.Z.get("screen").width < l.default.theme.breakpoints.xSmall);
                }
                render() {
                    const { entry: e, isSent: t, shouldShowReactionButton: s, style: n } = this.props,
                        a = this._areActionsVisible();
                    return r.createElement(i.Z, { pointerEvents: a ? "auto" : "none", style: [Ge.messageActions, t ? Ge.messageActionsLeft : Ge.messageActionsRight, a ? Ge.visible : Ge.invisible, Ge.vdlMessageActions, this._isNarrow && (this._hasMedia ? Ge.messageActionsMediaNarrow : Ge.messageActionsNarrow), n] }, e?.message_data?.attachment?.tweet && this._renderForwardButton(), s && this._renderReactionButton(), this._renderOverflowButton(), this._renderDeleteConfirmation());
                }
                _renderDeleteConfirmation() {
                    const { entry: e, inboxType: t, isGroupDM: s, participantsCount: i } = this.props;
                    return this.state.showDeleteConfirmation ? r.createElement(Me, { entry: e, handleHideDeleteConfirmation: this._handleHideDeleteConfirmation, inboxType: t, isGroupDM: s, participantsCount: i }) : null;
                }
                _renderForwardButton() {
                    return r.createElement(C.ZP, { "aria-label": ze, hoverLabel: { label: ze }, icon: $e, onPress: this._handleForwardButton, size: this._isNarrow ? "small" : "medium", type: "brandText" });
                }
                _renderReactionButton() {
                    const { entry: e, isGroupDM: t, participantsCount: s } = this.props,
                        { actionsAreActive: i } = this.state,
                        n = r.createElement(R.default, { style: Ge.vdlActionIcon });
                    return r.createElement(pe, { entry: e, isGroupDM: t, onDismiss: this._handleHideActionsAndMenus(), participantsCount: s }, r.createElement(C.ZP, { "aria-expanded": !!i, "aria-haspopup": "menu", "aria-label": Fe, hoverLabel: { label: He }, icon: n, onPress: this._handlePressReactionPickerButton, size: this._isNarrow ? "small" : "medium", type: "brandText" }));
                }
                _renderOverflowButton() {
                    const e = r.createElement(M.default, { style: Ge.vdlActionIcon });
                    return r.createElement(C.ZP, { "aria-label": ke, hoverLabel: { label: Ne }, icon: e, onPress: this._handleSetActionsActive, renderMenu: this._renderOverflowMenu, size: this._isNarrow ? "small" : "medium", type: "brandText" });
                }
                _areActionsVisible() {
                    const { containerIsActive: e, containerIsFocused: t, containerIsHovered: s, isDraft: r } = this.props,
                        { actionsAreActive: i } = this.state,
                        n = (0, T.Is)(this.props.entry) && !a.Z.isEnabled;
                    return !r && (n || (e && !a.Z.isEnabled) || t || s || i);
                }
            }
            Oe.contextType = B.Z;
            const We = (0, F.ZP)(ye(Oe)),
                Ge = l.default.create((e) => ({ invisible: { opacity: 0 }, messageActions: { alignSelf: "flex-end", flexDirection: "row" }, messageActionsMediaNarrow: { flexDirection: "column" }, messageActionsNarrow: { flexShrink: 1, flexWrap: "wrap", minWidth: e.spaces.space32 }, messageActionsLeft: { justifyContent: "flex-end", paddingEnd: e.spaces.space4 }, messageActionsRight: { justifyContent: "flex-start", paddingStart: e.spaces.space4 }, vdlMessageActions: { alignSelf: "center" }, vdlActionIcon: { color: e.colors.gray600 }, visible: { opacity: 1 } })),
                $e = r.createElement(P.default, { style: Ge.vdlActionIcon });
            var Ye = s(807896),
                Qe = s(731708),
                Ke = s(124964),
                Je = s(470397),
                qe = s(913973),
                Xe = s(207137),
                et = s(58881),
                tt = s(691108),
                st = s(786998),
                rt = s(530525),
                it = s(823161),
                nt = s(366635),
                at = s(952428);
            const ot = w().gf5e9ea6,
                ct = w().a2d48779,
                lt = rt.Z.createLayoutCache();
            const dt = l.default.create((e) => ({ bodyColumn: { flexShrink: 1, flexGrow: 1, justifyContent: "center", marginHorizontal: e.spaces.space4 }, body: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, column: { alignItems: "center", justifyContent: "center", marginEnd: e.spaces.space4 }, reactionColumn: { alignItems: "center", justifyContent: "center", marginEnd: e.componentDimensions.gutterHorizontal }, root: { flexDirection: "row", minHeight: "56px", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                pt = function (e) {
                    const { conversationId: t, entryId: s, onUndoPress: n, renderUndo: a, user: o, withBottomBorder: c } = e,
                        { avatarUri: l, isBlueVerified: d, isVerified: p, name: u, screenName: m } = o,
                        h = (0, V._h)(),
                        g = r.useMemo(
                            () =>
                                function (e) {
                                    e.stopPropagation(), n(), h(t, s, o.emojiReaction);
                                },
                            [n, o.emojiReaction, h, t, s],
                        ),
                        y = r.createElement(it.default, { imageLayoutCache: lt, screenName: m, size: it.default.defaultSize, uri: l }),
                        _ = r.createElement(W.Z, { emojiReaction: o.emojiReaction, emojiSize: "title4", focusable: !1 }),
                        f = r.createElement(nt.Z, { badgeContext: "content", isBlueVerified: d, isVerified: p, name: u, screenName: m, withHoverCard: !0, withStackedLayout: !0 });
                    return r.createElement(at.Z, { link: { pathname: `/${m}`, anchorless: !0 }, style: [dt.root, c && dt.bottomBorder], testID: e.testID }, r.createElement(i.Z, { style: dt.reactionColumn }, _), r.createElement(i.Z, { style: dt.column }, y), r.createElement(i.Z, { style: dt.bodyColumn }, r.createElement(i.Z, { style: dt.body }, f)), a ? r.createElement(i.Z, { style: dt.column }, r.createElement(C.ZP, { "aria-label": ct({ emoji: o.emojiReaction }), onClick: g, size: "small", type: "brandText" }, ot)) : null);
                };
            var ut = s(919022);
            const mt = [],
                ht = (e, t) => t.entryId,
                gt = (e) => (0, De.selectEntries)(e).entries,
                yt = (e, t) => (0, Y._d)(e, ht(0, t)) || mt,
                _t = (e, t) => ut.ZP.selectMany(e, ((e, t) => (0, Y.zT)(e, ht(0, t)))(e, t)),
                ft = (0, $.Z)()
                    .propsFromState(() => ({ entries: gt, reactionsByMessageId: yt, viewerUserId: Q._h, users: _t }))
                    .adjustStateProps(({ entries: e, reactionsByMessageId: t, users: s, viewerUserId: r }) => {
                        const i = [];
                        t.forEach((t) => {
                            const n = e[t] && e[t].data,
                                a = n.emoji_reaction;
                            if (a) {
                                const e = s.find((e) => e && e.id_str === n.sender_id),
                                    t = e && { avatarUri: e.profile_image_url_https, userId: e.id_str, emojiReaction: a, isViewerUser: e.id_str === r, screenName: e.screen_name, name: e.name, isProtected: e.protected, isVerified: e.verified, isBlueVerified: e.is_blue_verified, time: n.time };
                                t && i.push(t);
                            }
                        }),
                            i.sort((e, t) => t.time - e.time);
                        const n = i.findIndex((e) => e.userId === r);
                        return n > -1 && i.push(...i.splice(0, n)), { viewerUserId: r, usersWithReactions: i };
                    }),
                vt = w().b772cd66,
                bt = w().c0098d4a,
                Et = w().j85999ec;
            class Ct extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => r.createElement(i.Z, null, this._renderHeader(e, t), this._renderUsers(e, t), this._renderDoneButton(e, t))),
                        (this._renderHeader = (e, t) => ("sheet" === t ? r.createElement(st.Z, { title: bt }) : r.createElement(Qe.ZP, { visuallyHidden: !0 }, bt))),
                        (this._renderUsers = (e, t) => r.createElement(i.Z, { "aria-label": Et, style: [St.container, "sheet" === t ? St.sheet : St.popover] }, this._renderUserCells(e))),
                        (this._renderDoneButton = (e, t) => "sheet" === t && r.createElement(C.ZP, { key: "button_done", onPress: e, style: St.cancelButton, type: "primaryOutlined" }, vt)),
                        (this._renderUserCells = (e) => this.props.usersWithReactions.filter(Boolean).map((t, s) => r.createElement(pt, { conversationId: this.props.conversationId, entryId: this.props.entryId, history: this.props.history, key: t.userId, onUndoPress: this._reactionUndoHandler(t.emojiReaction, e), renderUndo: t.isViewerUser, testID: `${tt.Z.reactionUserCell}-${t.userId}`, user: t, withBottomBorder: s !== this.props.usersWithReactions.length - 1 }))),
                        (this._reactionUndoHandler = (e, t) => () => {
                            t(), this._handleScribeRemoveReaction(e);
                        }),
                        (this._handleScribeRemoveReaction = (e) => () => {
                            const { analytics: t } = this.props;
                            t.scribe({ page: "app", section: "twitter_service", component: "direct_messages", element: "delete_reaction", action: "success", data: { reaction_emotion: e } });
                        });
                }
                render() {
                    const { children: e } = this.props;
                    return r.createElement(z.Z, { renderContent: this._renderContent, withFixedPosition: this.props.isDrawer }, e);
                }
            }
            const St = l.default.create((e) => ({ cancelButton: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space12 }, container: { overflowY: "auto", paddingVertical: e.spaces.space12 }, popover: { maxHeight: "35vh", minWidth: "320px" }, sheet: { maxHeight: "65vh" } })),
                wt = (0, F.ZP)((0, u.Z)(ft(Ct))),
                It = [],
                Dt = (e, t) => (0, Y._d)(e, t.entryId) || It,
                Zt = (e) => (0, Y.gm)(e).entries,
                xt = (0, $.Z)()
                    .propsFromState(() => ({ entries: Zt, reactionsByMessageId: Dt, viewerUserId: Q._h }))
                    .adjustStateProps(({ entries: e, reactionsByMessageId: t, viewerUserId: s }) => {
                        let r,
                            i = 0;
                        return {
                            reactionsWithCounts: t.reduceRight((t, n) => {
                                const a = e[n] && e[n].data;
                                if (!a || !a.emoji_reaction) return t;
                                const o = (t.get(a.emoji_reaction) || 0) + 1;
                                return t.set(a.emoji_reaction, o), a?.sender_id === s && (r = a.emoji_reaction), (i += 1), t;
                            }, new Map()),
                            selectedReaction: r,
                            totalReactionCount: i,
                        };
                    }),
                At = w().h95f9e77;
            class Rt extends r.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleScribeDMReactionSummary = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "dm_reaction_summary", action: "show" });
                        }),
                        (this._onSetReactionsNode = (e) => {
                            this._measureWidths(e || void 0);
                        }),
                        (this._renderReactions = ({ isHovered: e }) => {
                            const { isGroupDM: t, reactionsWithCounts: s, selectedReaction: i } = this.props,
                                n = this.state.emojiSize || "headline1",
                                a = s.size - 1,
                                o = (e) => (e > 1 || t ? e : void 0);
                            return Array.from(s, ([t, s], c) => r.createElement(W.Z, { count: o(s), emojiReaction: t, emojiSize: n, enableHoverStyle: !1, focusable: !0, key: t, style: [c === a && Mt.rightPadding, Mt.elementPadding, i === t ? Mt.selfSelect : null, e && Mt.isHoveredDMReaction] }));
                        }),
                        (this.state = { emojiSize: void 0 });
                }
                render() {
                    const { conversationId: e, entryId: t, isDrawer: s, isEndOfDM: n, isSent: a, totalReactionCount: c } = this.props,
                        { emojiSize: d } = this.state;
                    if (0 === c) return null;
                    const p = et.Z.generate({ backgroundColor: l.default.theme.colors.gray50, color: l.default.theme.colors.gray700 }),
                        u = At({ reactionCount: c });
                    return r.createElement(i.Z, { style: [Mt.container, n ? Mt.marginShort : Mt.marginLong, a ? Mt.alignRight : Mt.alignLeft, d ? Mt.visible : Mt.invisible] }, r.createElement(wt, { conversationId: e, entryId: t, isDrawer: s }, r.createElement(o.Z, { "aria-label": u, focusable: !0, interactiveStyles: p, onPress: this._handleScribeDMReactionSummary, ref: this._onSetReactionsNode, style: Mt.content, testID: tt.Z.reactions }, this._renderReactions)));
                }
                _measureWidths(e) {
                    const t = e && e.parentElement,
                        s = { emojiSize: "headline1" };
                    if (t) {
                        const { width: r } = t.getBoundingClientRect(),
                            { width: i = 0 } = e ? e.getBoundingClientRect() : {};
                        i > r && (s.emojiSize = "subtext2");
                    }
                    this.setState({ ...s });
                }
            }
            Rt.contextType = p.rC;
            const Mt = l.default.create((e) => ({ container: { boxSizing: "border-box" }, content: { borderRadius: e.borderRadii.infinite, display: "flex", flexDirection: "row" }, rightPadding: { paddingEnd: e.spaces.space2 }, elementPadding: { borderColor: e.colors.transparent, borderWidth: e.borderWidths.small, paddingBottom: e.spaces.space2, paddingTop: e.spaces.space2, paddingStart: `calc(${e.spaces.space2} * 2)` }, selfSelect: { borderColor: l.default.theme.colors.gray50, borderRadius: e.borderRadii.infinite }, alignLeft: { alignSelf: "flex-start" }, alignRight: { alignSelf: "flex-end" }, invisible: { opacity: 0 }, visible: { opacity: 1 }, marginShort: { marginBottom: e.spaces.space4 }, marginLong: { marginBottom: e.spaces.space12 }, isHoveredDMReaction: { borderColor: e.colors.transparent, cursor: "pointer" } })),
                Pt = (0, u.Z)(xt(Rt)),
                kt = w().icd0bf34,
                Ft = w().e8bd8fec,
                Tt = w().b2d32fae,
                Bt = w().a763d33f;
            function jt(e) {
                const { isGroupDM: t, isSeenByEveryone: s, namesToDisplay: n } = e;
                return r.createElement(i.Z, { style: Ut.root }, r.createElement(Qe.ZP, { align: "right", color: "gray700", size: "subtext2", style: Ut.seenLabel, withInteractiveStyling: !0 }, s ? (t ? Tt : kt) : n.length ? Bt({ count: n.length }) : Ft));
            }
            const Ut = l.default.create((e) => ({ root: { alignItems: "flex-end", marginBottom: e.spaces.space4 }, seenLabel: { cursor: "pointer" }, namesList: { marginBottom: e.spaces.space2, whiteSpace: "pre-line" } }));
            var zt = s(89554),
                Ht = s(62857),
                Nt = s(107267),
                Lt = s(717160),
                Vt = s(240089),
                Ot = s(103335),
                Wt = s(663550),
                Gt = s(409438);
            const $t = (e, t) => ut.ZP.select(e, t.userID),
                Yt = (0, $.Z)().propsFromState(() => ({ user: $t })),
                Qt = "send-message-button",
                Kt = r.createElement(Lt.default, null),
                Jt = Yt((e) => {
                    const { viewerUserId: t } = r.useContext(p.rC),
                        s = (0, Nt.useHistory)(),
                        { user: i } = e;
                    if (!i || !t) return null;
                    const n = (0, Ot.Z)(i.id_str, t),
                        a = () => {
                            i.can_dm && s.push(`/messages/${n}`);
                        };
                    return r.createElement(Vt.ZP, { decoration: () => r.createElement(C.ZP, { disabled: !i.can_dm, icon: Kt, onClick: a, size: "large", testID: Qt, type: "primaryOutlined" }), displayMode: Gt.Z.UserCompact, isFakeButtonRoleWithListItem: !0, key: i.id_str, onClick: a, promotedItemType: Wt.bj.USER, userId: i.id_str });
                });
            function qt(e) {
                const t = r.useContext(B.Z),
                    { children: s, userIDs: i } = e;
                return r.createElement(z.Z, { renderContent: (e, t) => r.createElement(zt.Z, null, "sheet" === t ? r.createElement(st.Z, { title: Bt({ count: i.length }) }) : null, r.createElement(Ht.Z, { renderUserCell: (e) => r.createElement(Jt, { key: e, userID: e }), userIds: i })), withFixedPosition: t.isDrawer }, s);
            }
            const Xt = (0, $.Z)()
                .propsFromActions(() => ({ removeEntry: De.removeEntry }))
                .withAnalytics();
            var es = s(856674);
            const ts = ({ entryId: e, participants: t, user: s }) => {
                    const r = rs({ entryId: e, participants: t, user: s });
                    return { namesToDisplay: r, isSeenByEveryone: r.length === t.length - 1 };
                },
                ss = ({ entryId: e, participants: t, user: s }) =>
                    t.reduce((t, r) => {
                        const { join_conversation_event_id: i, last_read_event_id: n, user: a } = r,
                            o = r.user_id !== s.id_str,
                            c = n && 1 !== (0, es.ZP)(e, n),
                            l = !i || 1 !== (0, es.ZP)(i, e);
                        return o && c && l && t.push(a), t;
                    }, []),
                rs = (e) => ss(e).map((e) => e.name),
                is = w().fad48eea,
                ns = w().ba60339a,
                as = w().d338f53e,
                os = w().ae7d7a24,
                cs = w().ced3c85a,
                ls = w().d725a289,
                ds = w().bbe74f3f,
                ps = w().h0e4cdf5,
                us = w().bfbc051d,
                ms = l.default.create((e) => ({ root: { marginTop: `calc(${e.spaces.space8} - ${e.spaces.space2})`, overflow: "hidden", width: h.BC }, sentMessage: { alignSelf: "flex-end", justifyContent: "flex-end" }, sentContainer: { flexDirection: "column" }, groupedItems: { justifyContent: "flex-end", flexDirection: "row" }, timestamp: { cursor: "pointer" }, checkmark: { cursor: "pointer", flexShrink: 0, height: "1rem", paddingStart: e.spaces.space2 }, checkmarkContainer: { lineHeight: "1" }, footerPadderWithAvatar: { marginStart: `calc(${e.spaces.space40} + ${e.spaces.space12})` }, summaryContainer: { alignItems: "end" } })),
                hs = Xt(({ conversationId: e, entryId: t, entryTime: s, isActive: n, isDraft: c, isEdited: l, isError: d, isGroupDM: p, isLastPersistedMessage: u, isLastRapidFire: m, isRapidFire: h, isSent: g, onPress: y, onRetrySendMessage: _, participants: f, removeEntry: v, user: b, withUserAvatar: E }) => {
                    const C = (0, Ie.I0)(),
                        { isDrawer: S } = r.useContext(B.Z),
                        I = r.useCallback(() => {
                            C(v(e, null, { id: t }));
                        }, [e, C, t, v]),
                        D = d && r.createElement(i.Z, null, r.createElement(Qe.ZP, { align: "right", color: "gray700", size: "subtext2" }, os), r.createElement(i.Z, { style: ms.groupedItems }, r.createElement(Qe.ZP, { color: "magenta500", onPress: I, role: "button", size: "subtext2", withInteractiveStyling: !0 }, ns), r.createElement(Ke.Z, null), r.createElement(Qe.ZP, { color: "primary", onPress: _, role: "button", size: "subtext2", withInteractiveStyling: !0 }, as))),
                        Z = () => {
                            const s = !h || m;
                            return e ? r.createElement(i.Z, { style: E && ms.footerPadderWithAvatar }, r.createElement(Pt, { conversationId: e, entryId: t, isDrawer: S, isEndOfDM: s, isGroupDM: p, isSent: g })) : null;
                        },
                        x = l && r.createElement(Qe.ZP, { align: "right", color: "gray700", size: "subtext2" }, cs),
                        A = () => {
                            const e = ts({ entryId: t, participants: f, user: b }),
                                s = e.namesToDisplay?.length > 0,
                                i =
                                    u ||
                                    (p && s) ||
                                    (!p &&
                                        (({ entryId: e, participants: t, user: s }) => {
                                            const r = t.find((e) => e.user_id !== s.id_str);
                                            return r?.last_read_event_id === e;
                                        })({ entryId: t, participants: f, user: b }));
                            return g && !c && !d && (n || i) ? r.createElement(jt, (0, Ye.Z)({ isGroupDM: p }, e)) : null;
                        },
                        R = c && !d && r.createElement(Qe.ZP, { align: "right", color: "gray700", size: "subtext2" }, is),
                        M = () => {
                            if (c || d || (h && !m && !l)) return null;
                            const e = new Date(Number(s));
                            let t;
                            t = (0, Xe.zk)(e) ? ls(e) : (0, Xe.gO)(e) ? ds({ time: ls(e) }) : (0, Xe.FI)(e) ? ps(e) : us(e);
                            const n = p && !g,
                                o = g ? "right" : "left";
                            return r.createElement(i.Z, { style: [E && ms.footerPadderWithAvatar, g && ms.timestamp] }, r.createElement(Qe.ZP, { align: o, color: "gray700", size: "subtext2", withInteractiveStyling: g || !a.Z.isEnabled }, n && r.createElement(w().I18NFormatMessage, { $i18n: "c8b914d5" }, r.createElement(Qe.ZP, null, b.name)), n && " ", t));
                        },
                        P =
                            M() ||
                            A() ||
                            (() => {
                                const { isSeenByEveryone: e } = ts({ entryId: t, participants: f, user: b });
                                return !g || c || d || (h && !m) ? null : r.createElement(Qe.ZP, { color: e ? "primary" : "gray700", style: ms.checkmarkContainer }, r.createElement(qe.default, { style: ms.checkmark }));
                            })();
                    return (
                        (R || D || x || Z() || P) &&
                        r.createElement(
                            i.Z,
                            { style: [ms.root, g && ms.sentMessage] },
                            R,
                            D,
                            Z(),
                            P
                                ? (() => {
                                      const e = r.createElement(Je.Z, { style: g && ms.groupedItems }, M(), A(), x),
                                          s = ss({ entryId: t, participants: f, user: b }).map((e) => e.id_str);
                                      return p && g && s.length > 0 ? r.createElement(i.Z, { style: g && ms.summaryContainer }, r.createElement(qt, { userIDs: s, viewerUserId: b.id_str }, e)) : g ? r.createElement(o.Z, { interactive: !a.Z.isEnabled, onPress: y }, e) : e;
                                  })()
                                : null,
                        )
                    );
                }),
                gs = hs,
                ys = "messageEntry",
                _s = "emptyUserAvatar",
                fs = l.default.create((e) => ({ avatar: { borderRadius: e.borderRadii.infinite } })),
                vs = ({ showAvatar: e, size: t = "xLarge", user: s }) => (e ? r.createElement(it.default, { "aria-label": s.name, link: { pathname: `/${s.screen_name}` }, size: t, uri: s.profile_image_url_https }) : r.createElement(i.Z, { style: [fs.avatar, it.default.getSizeStyle(t)], testID: _s }));
            var bs = s(486496),
                Es = s(38562),
                Cs = s(162664);
            const Ss = (e, t) => ut.ZP.select(e, t.senderId),
                ws = (0, $.Z)()
                    .propsFromState(() => ({ user: Ss, displaySensitiveMedia: Es.f1, isDmNsfwMediaFilterEnabled: Es.a5 }))
                    .adjustStateProps(({ user: e, ...t }) => ({ user: (0, Cs.b)(e), ...t }));
            var Is = s(503196);
            const Ds = { element: "cta_dm" },
                Zs = { isGroupDM: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastRapidFire: !1 };
            class xs extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldFadeHighlight: !1 }),
                        (this._handleClick = n.Z.selectiveClickHandler(() => {
                            const {
                                entry: { error: e, id: t, is_draft: s },
                                isActive: r,
                                setActiveEntry: i,
                            } = this.props;
                            s || e || (i(r ? null : t), this._handleScribeMessageEntryClick());
                        })),
                        (this._handleScribeMessageEntryClick = () => {
                            const { isActive: e } = this.props;
                            if (!a.Z.isEnabled && !e) {
                                const { entry: e } = this.props,
                                    t = { component: "message", element: (0, _.Qu)(e), action: "click" };
                                this._scribeAction(t);
                            }
                        }),
                        (this._handleCtaImpression = () => {
                            this._scribeAction({ ...Ds, action: "show" });
                        }),
                        (this._handleCtaClick = () => {
                            this._scribeAction({ ...Ds, action: "click" });
                        }),
                        (this._isDMVoiceMessage = () => (0, _.dI)(this.props.entry.message_data?.attachment, this.context.featureSwitches));
                }
                componentDidMount() {
                    this.props.isHighlightedMessageSearchEntry && this.setState({ shouldFadeHighlight: !0 });
                }
                shouldComponentUpdate(e, t) {
                    return !(0, d.Z)(this.props, e) || !(0, d.Z)(this.state.shouldFadeHighlight, t.shouldFadeHighlight);
                }
                render() {
                    const { isActive: e, isGroupDM: t, isHighlightedMessageSearchEntry: s, isSent: n, user: c } = this.props,
                        l = this._getRapidFireProps(),
                        d = !l.isRapidFire || l.isLastRapidFire,
                        p = [Rs.root.base, Rs.root.vdlPadding, d && Rs.root.contentSpacing, d && Rs.root.vdlContentSpacing, s && Rs.root.highlightableEntry, s && this.state.shouldFadeHighlight && Rs.root.remove],
                        u = t && !n;
                    if (!c) return null;
                    const m = !a.Z.isEnabled || n;
                    return r.createElement(
                        i.Z,
                        { style: p },
                        r.createElement(o.Z, { "aria-expanded": !(!m || !e), focusable: !0, interactiveStyles: null, onPress: m ? this._handleClick : void 0, style: n ? Rs.root.sent : Rs.root.received, testID: ys }, ({ isFocused: e, isFocusedWithin: t, isHovered: s }) => this._renderMessage({ isFocused: e || t, isHovered: s, rapidFireProps: l, withUserAvatar: u })),
                        this._renderFooter(l, u),
                    );
                }
                _renderMessage({ isFocused: e, isHovered: t, rapidFireProps: s, withUserAvatar: n }) {
                    const { displaySensitiveMedia: a, entry: o, inboxType: d, isActive: p, isDmNsfwMediaFilterEnabled: u, isGroupDM: h, isLowQuality: g, isReadOnly: _, isSent: f, isTrusted: v, isVoiceMessageActive: b, isWide: E, onEditDm: C, onReplyTo: S, participants: w, scribeVoiceMessage: I, setShouldFreezeUpdates: D } = this.props,
                        { isFirstRapidFire: Z, isLastRapidFire: x, isRapidFire: A } = s,
                        R = [f ? Rs.messageContainer.sent : Rs.messageContainer.received, E ? Rs.messageContainer.wide : Rs.messageContainer.narrow, f && E && Rs.messageContainer.sentWide, !f && E && Rs.messageContainer.receivedWide],
                        M = v && !_,
                        P = this._isDMVoiceMessage(),
                        k = w?.length || 0;
                    return r.createElement(c.RD.Consumer, null, ({ direction: c }) => {
                        const _ = "rtl" === c;
                        return r.createElement(i.Z, { style: R }, o.error ? null : r.createElement(We, { containerIsActive: p, containerIsFocused: e, containerIsHovered: t, entry: o, featureSwitches: this.context.featureSwitches, inboxType: d, isDraft: !!o.is_draft, isGroupDM: h, isSent: f, onEditDm: C, onReplyTo: S, onReportMessage: P && I ? () => I.report({ isLowQuality: g, isTrusted: v }) : void 0, participantsCount: k, setShouldFreezeUpdates: D, shouldShowReactionButton: M, style: P && (0, y.F)(l.default.theme.scale, _).actionsContainer({ isSent: f, isVoiceMessageActive: b }) }), r.createElement(m.Z, { displaySensitiveMedia: a, entry: o, isActive: p, isDmNsfwMediaFilterEnabled: u, isFirstRapidFire: Z, isGroupDM: h, isLastRapidFire: x, isLowQuality: g, isRapidFire: A, isSent: f, isTrusted: v, key: o.id, onCtaClick: this._handleClick, onCtaImpression: this._handleCtaImpression, style: P && (0, y.F)(l.default.theme.scale, _).messageContainer({ isSent: f, isVoiceMessageActive: b }) }), this._possiblyRenderUserAvatar(s, n, _));
                    });
                }
                _renderFooter({ isLastRapidFire: e, isRapidFire: t }, s) {
                    const { entry: i, isActive: n, isGroupDM: a, isLastPersistedMessage: o, isSent: c, onRetrySendMessage: l, participants: d, user: p } = this.props;
                    return p ? r.createElement(gs, { conversationId: i.conversation_id, entryId: i.id, entryTime: i.time, isActive: n, isDraft: !!i.is_draft, isEdited: (i.message_data?.edit_count || 0) > 0, isError: !!i.error, isGroupDM: a, isLastPersistedMessage: o, isLastRapidFire: e, isRapidFire: t, isSent: c, localMediaId: i.message_data?.localMediaId, onPress: this._handleClick, onRetrySendMessage: l, participants: d, user: p, withUserAvatar: s }) : null;
                }
                _possiblyRenderUserAvatar({ isLastRapidFire: e, isRapidFire: t }, s, n) {
                    const { isSent: a, isVoiceMessageActive: o, user: c } = this.props,
                        d = this._isDMVoiceMessage();
                    if (!c || (!s && !o)) return null;
                    const { DMUserAvatarSizePx: p, DMUserAvatarSizeType: u } = (0, Is.Z)(l.default.theme.scale),
                        m = { showAvatar: !!d || !t || !!e, size: u, user: c },
                        h = [Rs.userAvatar.base, a ? Rs.userAvatar.sent : Rs.userAvatar.received, d && (0, y.F)(l.default.theme.scale, n).userAvatar({ isVoiceMessageActive: o, isSent: a })];
                    return r.createElement(i.Z, { style: Rs.userAvatar.container }, a ? null : r.createElement(i.Z, { style: Rs.userAvatar.spacer }), d ? r.createElement(bs.Z, { color: a ? l.default.theme.colors.primary : l.default.theme.colors.text, isActive: !!o, size: p, style: h }) : null, r.createElement(i.Z, { style: h }, r.createElement(vs, m)));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe({ ...e });
                }
                _getRapidFireProps() {
                    return { isFirstRapidFire: this.props.isFirstRapidFire, isLastRapidFire: this.props.isLastRapidFire, isRapidFire: this.props.isRapidFire };
                }
            }
            (xs.contextType = p.rC), (xs.defaultProps = Zs);
            const As = (0, u.Z)(
                    ws(
                        (function (e) {
                            function t(t) {
                                const { entry: s } = t,
                                    i = r.useContext(g.kr),
                                    [n] = i.activeVoiceMessage,
                                    { scribeAction: a } = i,
                                    [o] = n,
                                    c = o === s.id,
                                    l = { ...t, isVoiceMessageActive: c, scribeVoiceMessage: a };
                                return r.createElement(e, l);
                            }
                            return (t.defaultProps = Zs), t;
                        })(xs),
                    ),
                ),
                Rs = { root: l.default.create((e) => ({ base: { flexDirection: "column", paddingBottom: e.spaces.space2 }, vdlPadding: { paddingBottom: "0px" }, received: { cursor: "default", alignItems: "flex-start" }, sent: { cursor: "pointer", alignItems: "flex-end" }, contentSpacing: { paddingBottom: e.spaces.space20 }, vdlContentSpacing: { paddingBottom: e.spaces.space24 }, highlightableEntry: { marginHorizontal: `calc(-${e.spaces.space16})`, paddingHorizontal: e.spaces.space16, transition: "background-color 3s ease-in", backgroundColor: e.colors.unreadCellBackground }, remove: { backgroundColor: e.colors.cellBackground } })), messageContainer: l.default.create((e) => ({ sent: { flexDirection: "row", justifyContent: "flex-end" }, received: { flexDirection: "row-reverse", justifyContent: "flex-end" }, narrow: { width: "100%" }, wide: { width: h.BC }, receivedWide: { paddingEnd: e.spaces.space12 }, sentWide: { paddingStart: e.spaces.space12 } })), userAvatar: l.default.create((e) => ({ container: { flexDirection: "row", alignItems: "flex-end" }, base: { position: "absolute" }, sent: { end: 0 }, received: { start: 0 }, spacer: { width: (0, Is.Z)(e.scale).DMUserAvatarSpacerPx } })) };
        },
        616055: (e, t, s) => {
            s.d(t, { BC: () => r, O8: () => i });
            const r = "87.5%",
                i = "24px";
        },
        252233: (e, t, s) => {
            s.d(t, { Z: () => o });
            var r = s(202784),
                i = s(224162),
                n = s(731708),
                a = s(392237);
            class o extends r.PureComponent {
                render() {
                    const { Icon: e, children: t, link: s, onPress: a, style: o, testID: l, withInteractiveStyling: d } = this.props;
                    return r.createElement(i.RD.Consumer, null, ({ direction: i }) => r.createElement(n.ZP, { color: s ? "primary" : "gray700", dir: i, link: s, onPress: a, role: "none", style: [c.root, o], testID: l, withInteractiveStyling: d ?? (!!s || !!a) }, r.createElement(e, { style: c.icon }), t));
                }
            }
            const c = a.default.create((e) => ({ root: { display: "inline-block", marginEnd: e.spaces.space12 }, icon: { color: e.colors.gray700, marginEnd: e.spaces.space4 } }));
        },
        290213: (e, t, s) => {
            s.d(t, { Z: () => d });
            s(257215);
            var r = s(202784),
                i = (s(585488), s(277660), s(332920)),
                n = s.n(i),
                a = s(97043),
                o = s(252233);
            const c = n().cf249089,
                l = (e) => {
                    const { joinDate: t, testID: s, withoutIcon: i = !1 } = e,
                        l = ((e) => {
                            const t = new Date(e),
                                s = n().g727ddcf;
                            return c({ joinDate: s(t) });
                        })(t);
                    return i ? l : r.createElement(o.Z, { Icon: a.default, testID: s }, l);
                },
                d = r.memo(l);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-b085b550.eeefa31a.js.map
