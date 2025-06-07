"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DirectMessages-61a8d679"],
    {
        175853: (e, t, n) => {
            n.r(t), n.d(t, { DMConversationScreen: () => Q, default: () => ee });
            var o = n(202784),
                a = n(708852),
                r = n(794731),
                i = n(652904),
                s = n(246851),
                c = n(441790),
                l = n(587521),
                d = n(297436),
                p = n(668214),
                h = n(296196),
                u = n(798538),
                m = n(997174),
                v = n(390387),
                _ = n(5849),
                f = n(919022),
                g = n(593953);
            const b = (e, t) => t.match.params.conversationId,
                C = (e, t) => h.selectConversation(e, b(0, t)),
                E = (e, t) => u.q9(e, b(0, t)),
                y = (e, t) => u.W8(e, b(0, t)),
                O = (0, p.Z)()
                    .propsFromState(() => ({ conversation: C, entries: h.selectEntries, conversationId: b, isNewGroupConversation: g.rR, perspective: v._h, newConversationParticipants: g.bZ, tweetAttachment: g.Ss, users: f.ZP.selectAll, isUploading: E, media: y }))
                    .adjustStateProps(({ conversation: e, conversationId: t, entries: n, isNewGroupConversation: o, isUploading: a, media: r, newConversationParticipants: i, perspective: s, tweetAttachment: c, users: l }) => {
                        const p = e?.data;
                        return { conversation: (p && (0, d.lk)(p, n, l)) || void 0, conversationId: t, isNewGroupConversation: o, isUploading: a, media: r, newConversationParticipants: i, perspective: s };
                    })
                    .propsFromActions(
                        ({
                            match: {
                                params: { conversationId: e },
                            },
                        }) => ({ cancelUpload: (0, g.Ly)(e), removeMedia: (0, g.Xx)(e), setLastViewedDmInboxPath: _.EA, updateTweetDetailNav: m.NH }),
                    )
                    .withAnalytics({ page: "messages", section: "thread" });
            n(136728);
            var N = n(325686),
                S = n(107267),
                T = n(642153),
                Z = n(537392),
                w = n(731708),
                I = n(154003),
                x = n(392237),
                k = n(111677),
                P = n.n(k),
                D = n(913313),
                A = n(201787),
                U = n(496364),
                M = n(952793),
                R = n(10656),
                B = n(198506),
                L = n(275365),
                G = n(503115),
                F = n(356738),
                z = n(255534),
                H = n(276032),
                V = n(164383);
            const $ = P().d4986f86,
                j = P().e3e58b6e,
                q = P().a9ddbb94,
                K = P().dd4779a0,
                W = 8,
                X = 3;
            function Y(e) {
                const t = (0, S.useHistory)(),
                    n = (0, S.useLocation)(),
                    a = (0, M.hC)("responsive_web_dm_label_enabled"),
                    { conversation: r, conversationId: i, newConversationParticipants: s, perspective: c } = e,
                    l = (e) => {
                        r?.trusted ? t.push({ pathname: "/messages", state: n.state }) : e();
                    },
                    d = (e, t) => {
                        const n = e.map(({ user: e }) => e.profile_image_url_https).slice(0, t);
                        return o.createElement(N.Z, { style: J.facePile }, o.createElement(T.Z, { userAvatarSize: "large", userAvatarUrls: n }));
                    },
                    p = (e) => {
                        const t = r && r.participants.length ? (0, z.E)({ conversation: r, perspective: c }) : s ? (0, z.E)({ newConversationParticipants: s, perspective: c }) : $,
                            n = r?.participants.length ? o.createElement(z.Z, { conversation: r, perspective: c, textSize: "headline2", withScreenName: !1 }) : s ? o.createElement(z.Z, { newConversationParticipants: s, perspective: c, textSize: "headline2", withScreenName: !1 }) : o.createElement(w.ZP, { size: "headline2" }, $),
                            a = r && c ? (0, B.Z)(r, c) : void 0,
                            l = (0, g.NL)(i);
                        let p = "large",
                            h = c ? o.createElement(G.Z, { conversation: r, perspective: c, size: p, withLock: l }) : void 0;
                        return a && r?.type === L.eD.GROUP && void 0 === r?.avatar && ((h = ((e) => o.createElement(Z.ZP, null, ({ containerWidth: t }) => (R.Z.isTwoColumnLayout(t) ? d(e, W) : d(e, X))))(a)), (p = "custom")), { ...(e && { titleIconCell: h, titleIconCellSize: p }), title: n, documentTitle: t };
                    },
                    h = () => {
                        const e = r?.type === L.eD.GROUP,
                            t = n?.state?.position || 0;
                        return i ? o.createElement(N.Z, { style: J.rightControlStyles }, o.createElement(V.fK, { conversationId: i }), a && o.createElement(H.Z, { conversationId: i }, o.createElement(I.ZP, { "aria-haspopup": "menu", "aria-label": K, hoverLabel: { label: K }, icon: o.createElement(D.default, null), size: "small", style: J.infoButton, type: "primaryText" })), o.createElement(A.Z, { "aria-label": e ? q : j, conversationId: i, link: { pathname: `/messages/${i}/info`, state: { position: t } }, style: J.infoButton })) : void 0;
                    };
                return o.createElement(
                    U.Z,
                    (() => {
                        const t = p(e.showTitle);
                        return { backLocation: "/messages", onBackClick: l, rightControl: h(), screenType: "primaryDetail", withBottomTabBar: !1, headerless: !1, secondaryBar: a ? o.createElement(F.Z, null) : void 0, ...t };
                    })(),
                    e.children,
                );
            }
            const J = x.default.create((e) => ({ infoButton: { marginEnd: e.spaces.space4 }, rightControlStyles: { flexDirection: "row" }, facePile: { display: "flex", flexDirection: "row" } }));
            function Q({ conversationId: e, history: t, location: n, isNewGroupConversation: d = !1, conversation: p, newConversationParticipants: h, perspective: u, richTextInputContext: m, setLastViewedDmInboxPath: v, typeaheadWrapper: _ = r.Z }) {
                const f = (0, s.Z)(e),
                    [g, b] = o.useState(!1),
                    C = (0, c.N)();
                e || d || n.pathname !== window.location.pathname || t.replace({ pathname: "/messages" });
                o.useEffect(() => {
                    e !== f && v(n.pathname);
                }, [e, n.pathname, f, v]);
                const E = "string" == typeof n.query.text ? n.query.text : void 0,
                    y = (0, a.Y4)();
                return o.createElement(
                    i.Z,
                    null,
                    o.createElement(
                        Y,
                        { conversation: p, conversationId: e, newConversationParticipants: h, perspective: u, showTitle: !g },
                        o.createElement(l.Z, {
                            conversationId: e,
                            history: t,
                            isWide: y,
                            location: n,
                            onConversationProfileVisibilityChange: (e) => {
                                g !== e && b(e);
                            },
                            prefillText: E,
                            richTextInputContext: m,
                            typeaheadWrapper: _,
                            typingNotifier: C,
                        }),
                    ),
                );
            }
            const ee = O(Q);
        },
        29725: (e, t, n) => {
            n.r(t), n.d(t, { ConversationGroupInfoScreen: () => G, default: () => z });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(108362),
                i = n(154003),
                s = n(822399),
                c = n(855488),
                l = n(392237),
                d = n(111677),
                p = n.n(d),
                h = n(908478),
                u = n(290402),
                m = n(980407),
                v = n(751170),
                _ = n(199127),
                f = n(8448),
                g = n(716233),
                b = n(503115),
                C = (n(571372), n(184605)),
                E = n(71620),
                y = n(297436),
                O = n(66242),
                N = n(668214),
                S = n(296196),
                T = n(497294),
                Z = n(390387),
                w = n(919022);
            const I = (e, t) => t.match.params.conversationId,
                x = (e, t) => S.selectConversation(e, I(0, t)),
                k = (e, t) => S.selectConversationFetchStatus(e, I(0, t)),
                P = (e, t) => {
                    const n = S.selectConversationAvatarMediaId(e, I(0, t)),
                        [o] = (0, C.Z)(n) ? T.m3(e, n) : [];
                    return o;
                },
                D = (e, t) => S.selectConversationAvatarMediaIsUploading(e, I(0, t)),
                A = (e, t) => S.selectConversationAvatarMediaUploadProgress(e, I(0, t)),
                U = (0, N.Z)()
                    .propsFromState(() => ({ avatarMedia: P, conversation: x, conversationId: I, entries: S.selectEntries, fetchStatus: k, isUploading: D, mediaUploadProgress: A, perspective: Z._h, users: w.ZP.selectAll }))
                    .adjustStateProps(({ conversation: e, entries: t, perspective: n, users: o, ...a }) => {
                        const r = e && e.data,
                            i = r && (0, y.E5)(r, t, o),
                            s = i && (0, O.ZP)(i, n);
                        if (!n) throw new Error("logged-in user not found");
                        return { ...a, conversation: i, groupName: s, perspective: n };
                    })
                    .propsFromActions(() => ({ addAvatarMedia: S.addAvatarMedia, createLocalApiErrorHandler: (0, E.zr)("CONVERSATION_GROUP_INFO_SCREEN"), fetchConversation: S.fetchConversation, fetchConversationIfNeeded: S.fetchConversationIfNeeded, removeAvatarMedia: S.removeAvatarMedia, removeMediaUpload: T.WU, setConversationAvatar: S.setConversationAvatar, updateConversationName: S.updateConversationName }))
                    .withAnalytics({ page: "messages", section: "group_settings" }),
                M = p().abd845fe,
                R = p().d87bff5a,
                B = p().i2209530,
                L = p().cabb453e;
            class G extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderContent = () => o.createElement(a.Z, null, this._renderGroupAvatarPicker(), this._renderGroupNameEditor())),
                        (this._handleFetch = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchConversationIfNeeded: n } = this.props;
                            n({ conversationId: e }).catch(t((0, f.q)(e)));
                        }),
                        (this._handleGroupNameUpdated = (e) => {
                            this.setState({ groupNameEdit: e.target.value });
                        }),
                        (this._handleSavePress = () => {
                            this._savePress();
                        }),
                        (this._savePress = () => {
                            const { avatarMedia: e, conversationId: t, createLocalApiErrorHandler: n, fetchConversation: o, groupName: a, history: r, setConversationAvatar: i, updateConversationName: s } = this.props,
                                { groupNameEdit: c } = this.state,
                                l = [];
                            return (
                                e && l.push(i(t).catch(n())),
                                c && a !== c && l.push(s({ conversationId: t, name: c }).catch(n({ showToast: !0 }))),
                                Promise.all(l).then(
                                    () => {
                                        o({ conversationId: t }).catch(n((0, f.q)(t))), r.goBack({ backLocation: `/messages/${t}/info`, shouldReplaceOnFallback: !0 });
                                    },
                                    () => e && this._clearAvatarMedia(e.id),
                                )
                            );
                        }),
                        (this._handleAvatarMediaChange = ([e]) => {
                            const { addAvatarMedia: t, avatarMedia: n, conversationId: o } = this.props;
                            n && this._clearAvatarMedia(n.id), t(o, e);
                        }),
                        (this._handleMediaFailure = (e) => {
                            this._clearAvatarMedia(e);
                        }),
                        (this.state = { groupNameEdit: e.groupName });
                }
                static getDerivedStateFromProps(e, t) {
                    const { groupName: n } = e;
                    return "string" == typeof n && null === t.groupNameEdit ? { groupNameEdit: n } : null;
                }
                componentDidMount() {
                    this._handleFetch();
                }
                componentWillUnmount() {
                    const { avatarMedia: e } = this.props;
                    e && this._clearAvatarMedia(e.id);
                }
                shouldComponentUpdate(e, t) {
                    return !(0, h.Z)(e, this.props) || !(0, h.Z)(t, this.state);
                }
                render() {
                    const { conversationId: e, fetchStatus: t, history: n } = this.props;
                    return o.createElement(m.Z, { backLocation: `/messages/${e}/info`, history: n, rightControl: this._renderRightControl(), title: M }, o.createElement(r.Z, { style: F.root }, o.createElement(u.Z, { "aria-label": R, fetchStatus: t, onRequestRetry: this._handleFetch, render: this._renderContent })));
                }
                _renderRightControl() {
                    const { avatarMedia: e, groupName: t, isUploading: n } = this.props,
                        { groupNameEdit: a } = this.state,
                        r = n || !((a && a !== t) || e);
                    return o.createElement(i.ZP, { children: B, disabled: r, onPress: this._handleSavePress, size: "small", type: "primaryFilled" });
                }
                _renderGroupAvatarPicker() {
                    const { avatarMedia: e, conversation: t, mediaUploadProgress: n, perspective: r } = this.props,
                        i = o.createElement(b.Z, { conversation: t, perspective: r });
                    return o.createElement(a.Z, null, o.createElement(s.Z, { progress: n }), o.createElement(a.Z, { style: F.avatarContainerRoot }, o.createElement(_.default, { borderRadius: v.A.INFINITE, currentContent: i, location: g.vC.Avatar, mediaItem: e || void 0, onChange: this._handleAvatarMediaChange, onFailure: this._handleMediaFailure, rootStyle: F.avatarContainer })));
                }
                _renderGroupNameEditor() {
                    return o.createElement(c.Z, { label: L, maxLength: 50, name: "groupNameEdit", onChange: this._handleGroupNameUpdated, style: F.groupNameEditor, value: this.state.groupNameEdit || "" });
                }
                _clearAvatarMedia(e) {
                    const { avatarMedia: t, conversationId: n, removeAvatarMedia: o, removeMediaUpload: a } = this.props;
                    (t && t.uploading) || a(e), o(n, e);
                }
            }
            const F = l.default.create((e) => ({ root: { backgroundColor: e.colors.gray0 }, avatarContainerRoot: { alignItems: "center", backgroundColor: e.colors.cellBackground, paddingVertical: e.spaces.space20 }, groupNameEditor: { backgroundColor: e.colors.cellBackground }, avatarContainer: { height: `calc(5 * ${e.spaces.space20})`, width: `calc(5 * ${e.spaces.space20})` } })),
                z = U(G);
        },
        513232: (e, t, n) => {
            n.r(t), n.d(t, { ConversationInfoScreen: () => Ae, default: () => Me, styles: () => Ue });
            n(136728);
            var o = n(202784),
                a = n(325686),
                r = n(811176),
                i = n(108362),
                s = n(872405),
                c = n(731708),
                l = n(420412),
                d = n(844685),
                p = n(242454),
                h = n(154003),
                u = n(451566),
                m = n(392237),
                v = n(111677),
                _ = n.n(v),
                f = n(121791),
                g = n(908478),
                b = n(516951),
                C = n(573839),
                E = n(947135),
                y = n(290402),
                O = n(721754),
                N = n(496364),
                S = n(443781),
                T = n(62857),
                Z = n(712816),
                w = n(8448),
                I = n(879596),
                x = n(198506),
                k = n(943245),
                P = n(395067),
                D = n(409438),
                A = n(275365),
                U = n(503115),
                M = n(213386),
                R = n(340130),
                B = n(593953),
                L = (n(571372), n(71620)),
                G = n(297436),
                F = n(66242),
                z = n(668214),
                H = n(296196),
                V = n(390387),
                $ = n(601576),
                j = n(919022);
            const q = (e, t) => t.match.params.conversationId,
                K = (e, t) => H.selectConversation(e, q(0, t)),
                W = (e, t) => H.selectConversationFetchStatus(e, q(0, t)),
                X = (e, t) => {
                    const n = q(0, t);
                    return H.selectInboxTypeByConversation(e, n);
                },
                Y = (e, t) => {
                    const n = X(e, t);
                    return (0, B.Fb)(n);
                },
                J = (e) => !!V.kD(e),
                Q = (0, z.Z)()
                    .propsFromState(() => ({ hasRegisteredCryptoKey: J, conversation: K, entries: H.selectEntries, conversationId: q, fetchStatus: W, inboxType: X, language: V.VT, perspective: V._h, reporterCountry: V.GG, scribeComponent: Y, users: j.ZP.selectAll }))
                    .adjustStateProps(({ conversation: e, entries: t, perspective: n, users: o, ...a }) => {
                        const r = e && e.data,
                            i = r && (0, G.E5)(r, t, o),
                            s = i && (0, F.ZP)(i, n),
                            c = !(!r || !r.notifications_disabled),
                            l = !(!r || !r.mention_notifications_disabled),
                            d = r && r.mute_expiration_time && Number(r.mute_expiration_time),
                            p = i?.participants.map((e) => e.user_id) || [],
                            h = p && 1 === p.length && p[0] === n,
                            u = p && p.filter((e) => e !== n),
                            m = h ? p : u.slice(0, 5),
                            v = m.length < u.length;
                        if (!n) throw new Error("logged-in user not found");
                        return { ...a, conversation: i, groupName: s, isSelfConversation: h, mentionNotificationsDisabled: l, muteExpirationTime: d, notificationsDisabled: c, perspective: n, showViewPeople: v, visibleParticipants: m };
                    })
                    .propsFromActions(() => ({ addToast: $.fz, block: j.ZP.block, createLocalApiErrorHandler: (0, L.zr)("DIRECT_MESSAGES_CONVERSATION_INFO"), disableMentionNotifications: H.disableMentionNotifications, disableNotifications: H.disableNotifications, enableMentionNotifications: H.enableMentionNotifications, enableNotifications: H.enableNotifications, fetchConversationIfNeeded: H.fetchConversationIfNeeded, leaveConversation: H.leaveConversation, muteDMUser: H.muteDMUser, unblock: j.ZP.unblock, unmuteDMUser: H.unmuteDMUser, updateConversationName: H.updateConversationName, dmBlock: j.ZP.dmBlock, dmUnblock: j.ZP.dmUnblock }))
                    .withAnalytics({ page: "messages", section: "conversation_settings" }),
                ee = _().e3e58b6e,
                te = _().a9ddbb94,
                ne = _().abd845fe,
                oe = _().g2fd3206,
                ae = _().eb1bb5a2,
                re = _().c602600a,
                ie = _().a70436ac,
                se = _().eb75875e,
                ce = _().a7f20223,
                le = _().g2f04a6b,
                de = _().i453fedf,
                pe = _().b3dfd51a,
                he = _().cc7c8ce6,
                ue = _().hab58674,
                me = _().e3c6e080,
                ve = { confirmButtonLabel: _().bb1d57b6, actionTextDelete: _().ad63377e, actionTextLeave: _().g9074da4, header: _().gdf4b790, text: _().h09b49f8 },
                _e = _().i6b19b08,
                fe = _().f33ef58a,
                ge = _().ccf2f24e,
                be = _().d1a6dbe6,
                Ce = _().f24af200,
                Ee = _().a30e1677,
                ye = _().iae09949,
                Oe = _().a9fd20be,
                Ne = _().e778e3d8,
                Se = _().e133be4e,
                Te = _().b7867912,
                Ze = _().gaddb872,
                we = _().d83414a1,
                Ie = _().a5bbfecd,
                xe = _().cde6e1ff,
                ke = _().d87bff5a,
                Pe = [
                    { duration: 1, displayText: _().j37c4674, toast: _().je7e1fed, toastOld: _().hf94a2d6 },
                    { duration: 2, displayText: _().fb7a43c6, toast: _().e95c8f8b, toastOld: _().bd54fad2 },
                    { duration: 3, displayText: _().cb5bf56e, toast: _().gb7a130b, toastOld: _().f6fce0fe },
                    { duration: 0, displayText: _().cabeb6c2, toast: _().i78153dd, toastOld: _().hfc86556 },
                ],
                De = { page: "messages", section: "conversation_settings" };
            class Ae extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._withSecretDM = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return this.props.hasRegisteredCryptoKey && (0, C.K)(this.context.featureSwitches, this.context.userClaims, e?.is_blue_verified, e?.has_graduated_access, e?.verified_type);
                        }),
                        (this._getNameOfGroupOrOneToOneConvo = () => {
                            const { conversation: e, groupName: t } = this.props;
                            return e?.type === A.eD.GROUP ? t || "" : this._getNameOfOneToOneConvo();
                        }),
                        (this._getScreenNameOfOneToOneConvo = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return e ? e.screen_name : "";
                        }),
                        (this._getNameOfOneToOneConvo = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return e ? e.name : "";
                        }),
                        (this._getBlockedOfOneToOneConvo = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return e ? e.blocking : null;
                        }),
                        (this._getDMBlockedOfOneToOneConvo = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return e ? e.dm_blocking : null;
                        }),
                        (this._getUserIdOfOneToOneConvo = () => {
                            const e = this._getSenderOfOneToOneConvo();
                            return e ? e.id_str : "";
                        }),
                        (this._getSenderOfOneToOneConvo = () => {
                            const { conversation: e, perspective: t } = this.props,
                                n = e && (0, x.Z)(e, t).map(({ user: e }) => e);
                            return (n && n[0]) || null;
                        }),
                        (this._renderContent = () => {
                            const { conversation: e } = this.props,
                                t = !e?.trusted;
                            return o.createElement(S.rC.Consumer, null, ({ featureSwitches: e }) => o.createElement(a.Z, null, this._renderEncryptedConversationLabel(), this._renderGroupSection(), this._renderParticipantsSection(), t ? null : this._renderNotificationsSection(), this._renderConversationActions()));
                        }),
                        (this._getItems = () => Pe.map((e) => ({ text: e.displayText, onClick: () => this._handleNotificationsDisabled(e) }))),
                        (this._renderActionMenu = () => (e) => o.createElement(r.Z, { items: this._getItems(), onCloseRequested: e })),
                        (this._handleViewPeople = () => {
                            this._scribeAction("view_participants");
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: n } = this.props,
                                o = this._getSenderOfOneToOneConvo(),
                                a = o ? o.id_str : "";
                            "" !== a &&
                                (t(a).then(() => {
                                    e({ action: { label: Se, onAction: this._handleUnblockUser }, text: Oe });
                                }, n(Z.d)),
                                this._scribeAction("block"));
                        }),
                        (this._handleUnblockUser = () => {
                            const e = this._getSenderOfOneToOneConvo(),
                                t = e ? e.id_str : "",
                                { createLocalApiErrorHandler: n, unblock: o } = this.props;
                            o(t).catch(n(I.D)), this._scribeAction("unblock");
                        }),
                        (this._handleDMBlockUser = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, dmBlock: n } = this.props,
                                o = this._getSenderOfOneToOneConvo(),
                                a = o ? o.id_str : "";
                            "" !== a &&
                                (n(a).then(() => {
                                    e({ action: { label: Se, onAction: this._handleDMUnblockUser }, text: Ne });
                                }, t(Z.d)),
                                this._scribeAction("dm_block"));
                        }),
                        (this._handleDMUnblockUser = () => {
                            const e = this._getSenderOfOneToOneConvo(),
                                t = e ? e.id_str : "",
                                { createLocalApiErrorHandler: n, dmUnblock: o } = this.props;
                            o(t).catch(n(I.D)), this._scribeAction("dm_unblock");
                        }),
                        (this._handleReportConversation = () => {
                            this._scribeAction("report");
                        }),
                        (this._handleFetch = () => {
                            const { conversationId: e, createLocalApiErrorHandler: t, fetchConversationIfNeeded: n } = this.props;
                            n({ conversationId: e }).catch(t((0, w.q)(e)));
                        }),
                        (this._handleLeaveConversation = () => {
                            const { conversation: e, conversationId: t, createLocalApiErrorHandler: n, inboxType: o, leaveConversation: a, location: r } = this.props;
                            a({ conversationId: t }).catch(n({ showToast: !0 }));
                            const i = e?.type === A.eD.GROUP ? "leave_group" : "delete_thread",
                                s = r?.state?.position || 0,
                                c = e?.participants.length || 0,
                                l = { conversation_type: e?.type === A.eD.GROUP ? R.NK.GROUP : R.NK.ONE_TO_ONE, conversation_id: t, conversation_participant_count: c, position: s, inbox_type: (0, B.e4)(o), entry_point: R.eR.CONVERSATION_INFO };
                            this._scribeAction(i, l), this._handleConversationClose();
                        }),
                        (this._handleNotificationsDisabled = (e) => {
                            const { addToast: t, conversationId: n, disableNotifications: o } = this.props,
                                a = this._getNameOfGroupOrOneToOneConvo();
                            o({ conversationId: n, duration: e.duration }), t({ text: e.toast({ name: a }) });
                        }),
                        (this._handleNotificationsEnabled = () => () => {
                            const { addToast: e, conversationId: t, createLocalApiErrorHandler: n, enableNotifications: o } = this.props,
                                a = this._getNameOfGroupOrOneToOneConvo(),
                                r = le({ name: a });
                            o({ conversationId: t }).then(
                                () => {
                                    e({ text: r });
                                },
                                n({ showToast: !0 }),
                            );
                        }),
                        (this._handleMentionSwitchChanged = (e) => {
                            const { addToast: t, analytics: n, conversationId: o, createLocalApiErrorHandler: a, disableMentionNotifications: r, enableMentionNotifications: i } = this.props;
                            n.scribe({ component: "dm_existing_conversation_dialog", action: e ? "disable_mentions" : "enable_mentions" }),
                                e
                                    ? r({ conversationId: o }).then(
                                          () => {
                                              t({ text: ue });
                                          },
                                          a({ showToast: !0 }),
                                      )
                                    : i({ conversationId: o }).then(
                                          () => {
                                              t({ text: me });
                                          },
                                          a({ showToast: !0 }),
                                      );
                        }),
                        (this._handleConversationClose = () => {
                            this._returnToInbox();
                        }),
                        (this._returnToInbox = () => {
                            const { history: e, inboxType: t } = this.props;
                            e.push((0, B.k2)(t));
                        }),
                        (this._scribeAction = (e, t) => {
                            const { analytics: n, scribeComponent: o } = this.props;
                            n.scribe({ component: o, action: e, data: t || this._getScribeData() });
                        }),
                        (this._getScribeData = () => {
                            const { conversation: e } = this.props;
                            return { items: [{ conversation_type: e?.type === A.eD.GROUP ? R.NK.GROUP : R.NK.ONE_TO_ONE }] };
                        }),
                        (this.state = { notificationsDisabled: e.notificationsDisabled, muteExpirationTime: e.muteExpirationTime });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                shouldComponentUpdate(e, t) {
                    return !(0, g.Z)(e, this.props) || !(0, g.Z)(t, this.state);
                }
                render() {
                    const { conversation: e, conversationId: t, fetchStatus: n } = this.props,
                        a = e?.type === A.eD.GROUP;
                    return o.createElement(N.Z, { backLocation: `/messages/${t}`, screenType: "secondaryDetail", title: a ? te : ee, withBottomTabBar: !1 }, o.createElement(i.Z, { style: Ue.root }, o.createElement(y.Z, { "aria-label": ke, fetchStatus: n, onRequestRetry: this._handleFetch, render: this._renderContent })));
                }
                _renderGroupSection() {
                    const { conversation: e, conversationId: t, groupName: n, perspective: a } = this.props,
                        r = e?.type === A.eD.GROUP,
                        i = e?.trusted;
                    return r ? o.createElement(s.Z, { avatarCell: o.createElement(U.Z, { conversation: e, perspective: a }), cellStyle: Ue.groupSectionRight, style: Ue.groupSection }, o.createElement(c.ZP, { numberOfLines: 1, weight: "bold" }, n), i ? o.createElement(c.ZP, { link: `/messages/${t}/group-info`, style: Ue.edit }, ne) : null) : null;
                }
                _renderParticipantsSection() {
                    const { conversation: e, conversationId: t, showViewPeople: n, visibleParticipants: r } = this.props,
                        i = e?.type === A.eD.GROUP,
                        s = e?.type === A.eD.ONE_TO_ONE,
                        c = e?.trusted;
                    return o.createElement(a.Z, null, i ? o.createElement(o.Fragment, null, o.createElement(l.Z, null), o.createElement(d.Z, { text: oe })) : null, o.createElement(T.Z, { displayMode: D.Z.UserCompact, userIds: r }), n ? o.createElement(p.Z, { color: "primary", label: ae, link: `/messages/${t}/participants`, onClick: this._handleViewPeople }) : null, i && c ? o.createElement(p.Z, { color: "primary", label: re, link: `/messages/${t}/add` }) : null, s && this._withSecretDM() && c ? o.createElement(h.ZP, { link: `/messages/e${t}`, style: Ue.encryptedConversationButton, type: "primaryOutlined" }, ie) : null);
                }
                _renderEncryptedConversationLabel() {
                    const { conversation: e } = this.props;
                    if (!(e?.type === A.eD.SECRET_ONE_TO_ONE)) return null;
                    const t = o.createElement(f.default, { style: Ue.iconLock }),
                        n = o.createElement(c.ZP, { size: "body", style: Ue.encryptedConversationLabel, weight: "bold" });
                    return o.createElement(a.Z, { style: Ue.encryptedConversationContainer }, o.createElement(_().I18NFormatMessage, { $i18n: "c6dca173" }, t, o.cloneElement(n, null, _().je9455da)), o.createElement(M.X, null));
                }
                _renderSnoozeConversationSwitch() {
                    const { muteExpirationTime: e, notificationsDisabled: t } = this.props,
                        n = this._getNameOfGroupOrOneToOneConvo(),
                        r = ce({ name: n });
                    return t ? o.createElement(a.Z, { role: "label" }, o.createElement(a.Z, { style: Ue.notificationsToggleContainer }, o.createElement(c.ZP, null, r), o.createElement(u.Z, { onValueChange: this._handleNotificationsEnabled(), value: t })), e ? o.createElement(c.ZP, { color: "gray700", size: "subtext2", style: Ue.notificationsDescription }, this._displayExpirationTime()) : null) : o.createElement(a.Z, { style: Ue.notificationsToggleContainer }, o.createElement(c.ZP, null, r), o.createElement(O.Z, { "aria-label": r, renderMenu: this._renderActionMenu() }, o.createElement(u.Z, { onValueChange: b.Z, value: t })));
                }
                _renderSnoozeMentionsSwitch() {
                    const { mentionNotificationsDisabled: e } = this.props;
                    return o.createElement(a.Z, null, o.createElement(a.Z, { role: "label", style: Ue.notificationsToggleContainer }, o.createElement(c.ZP, null, pe), o.createElement(u.Z, { onValueChange: this._handleMentionSwitchChanged, value: e })), o.createElement(c.ZP, { color: "gray700", size: "subtext2", style: Ue.notificationsDescription }, he));
                }
                _renderNotificationsSection() {
                    const { conversation: e, isSelfConversation: t } = this.props,
                        n = e?.type === A.eD.GROUP;
                    return t ? null : o.createElement(a.Z, null, o.createElement(l.Z, null), o.createElement(d.Z, { text: se }), o.createElement(a.Z, null, this._renderSnoozeConversationSwitch()), n ? this._renderSnoozeMentionsSwitch() : null);
                }
                _displayExpirationTime() {
                    const { language: e, muteExpirationTime: t } = this.props;
                    if (!t) return null;
                    const n = t - new Date().getTime() < 864e5,
                        o = new Date(t).toLocaleString((0, k.It)(e || "en"), n ? { hour: "2-digit", minute: "2-digit" } : { weekday: "long", month: "short", day: "2-digit" });
                    return de({ expiration: o });
                }
                _renderConversationActions() {
                    const { conversation: e, conversationId: t } = this.props,
                        n = e?.type !== A.eD.GROUP,
                        r = !e?.trusted,
                        i = (0, B.NL)(t),
                        { featureSwitches: s } = this.context,
                        c = s.isTrue("dm_block_enabled");
                    return o.createElement(a.Z, null, o.createElement(l.Z, null), n && c ? this._renderDMBlockUserButton() : null, n ? this._renderBlockUserButton() : null, i ? null : this._renderReportConversationButton(), this._renderReportDSAButton(), o.createElement(E.Z, { confirmationSheetConfirmButtonLabel: ve.confirmButtonLabel, confirmationSheetConfirmButtonType: "destructiveFilled", confirmationSheetHeadline: ve.header, confirmationSheetText: ve.text, label: r ? ve.actionTextDelete : ve.actionTextLeave, onConfirmationSheetConfirm: this._handleLeaveConversation, withBottomBorder: !1 }));
                }
                _renderDMBlockUserButton() {
                    const { isSelfConversation: e } = this.props,
                        t = this._getScreenNameOfOneToOneConvo(),
                        n = this._getDMBlockedOfOneToOneConvo(),
                        a = this._getBlockedOfOneToOneConvo(),
                        r = n ? xe({ screenName: t }) : ye({ screenName: t }),
                        i = n ? Ze : Ce;
                    return e || a ? null : o.createElement(E.Z, { color: "primary", confirmationSheetText: r, label: i, onConfirmationSheetConfirm: n ? this._handleDMUnblockUser : this._handleDMBlockUser });
                }
                _renderBlockUserButton() {
                    const { isSelfConversation: e } = this.props,
                        t = this._getScreenNameOfOneToOneConvo(),
                        n = this._getBlockedOfOneToOneConvo(),
                        a = n ? (this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled") ? Ie({ screenName: t }) : we({ screenName: t })) : Ee({ screenName: t }),
                        r = n ? Te : be;
                    return e ? null : o.createElement(E.Z, { color: "primary", confirmationSheetText: a, label: r, onConfirmationSheetConfirm: n ? this._handleUnblockUser : this._handleBlockUser });
                }
                _renderReportConversationButton() {
                    const { conversation: e, conversationId: t, inboxType: n, isSelfConversation: a } = this.props,
                        r = e?.type !== A.eD.GROUP ? ge : _e,
                        i = P.C2.DMConversation,
                        { featureSwitches: s } = this.context,
                        c = e?.type === A.eD.GROUP ? "0" : this._getUserIdOfOneToOneConvo(),
                        l = (0, P.Yw)(s, i) ? { pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify((0, P.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: !1, reportType: i, reportedConversationId: t, reportedUser: c, scribeNamespace: De })) } } } : { pathname: `/i/report/dm_conversation/${t}`, state: { clientReferer: window.location.pathname, scribeNamespace: De, inboxType: n } };
                    return a ? null : o.createElement(p.Z, { color: "primary", label: r, link: l, onPress: this._handleReportConversation });
                }
                _renderReportDSAButton() {
                    const { conversationId: e, inboxType: t } = this.props,
                        { featureSwitches: n } = this.context,
                        a = n.isTrue("dsa_report_flow_enabled"),
                        r = { pathname: (0, B.vg)(n, { conversation_id: e, is_encrypted: (0, B.NL)(e), type: "conversation" }), state: { clientReferer: window.location.pathname, scribeNamespace: De, inboxType: t } };
                    return a ? o.createElement(p.Z, { color: "primary", label: fe, link: r, onPress: this._handleReportConversation }) : null;
                }
            }
            Ae.contextType = S.rC;
            const Ue = m.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, edit: { flexShrink: 0 }, groupSection: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, groupSectionRight: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, encryptedConversationButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space20 }, encryptedConversationContainer: { flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: e.colors.gray0, marginVertical: e.spaces.space12 }, encryptedConversationLabel: { margin: e.spaces.space12 }, iconLock: { color: e.colors.text }, notificationsToggleContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, notificationsDescription: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.componentDimensions.gutterVertical, paddingTop: 0 } })),
                Me = Q(Ae);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DirectMessages-61a8d679.34fc946a.js.map
