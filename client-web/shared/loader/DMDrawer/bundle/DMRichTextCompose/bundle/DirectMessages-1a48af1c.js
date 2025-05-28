"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1a48af1c"],
    {
        622333: (e, t, r) => {
            r.d(t, { Z: () => d });
            var s = r(202784),
                n = r(325686),
                i = r(167630),
                a = r(392237),
                o = r(111677);
            const l = r.n(o)().ffde2fdc,
                c = a.default.create((e) => ({ spinner: { alignItems: "center", marginVertical: "30px" } })),
                d = () => s.createElement(n.Z, { style: c.spinner }, s.createElement(i.Z, { "aria-label": l }));
        },
        537199: (e, t, r) => {
            r.d(t, { Z: () => Ee });
            var s = r(202784),
                n = r(325686),
                i = r(731708),
                a = r(420412),
                o = r(108362),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(334346),
                p = r(373981),
                h = r(715601),
                m = r(443781),
                E = r(737613),
                g = r(275365),
                y = r(602920),
                _ = r(715913),
                I = r(26339),
                f = r(615619),
                N = r(916702),
                T = r(957032),
                C = r(699897);
            const R = (e) => {
                const { conversation: t, entry: r, inboxType: n, isActive: i, isFirstRapidFire: a, isHighlightedMessageSearchEntry: o, isLastPersistedMessage: l, isLastRapidFire: c, isRapidFire: d, isWide: u, onEditDm: p, onReplyTo: h, onRetrySendMessage: m, perspective: E, setActiveEntry: y, setShouldFreezeUpdates: _ } = e,
                    R = s.useCallback(() => {
                        m(r);
                    }, [r, m]);
                if ((0, I.c)(r) || (0, I.ik)(r)) {
                    const { conversation_id: e, low_quality: m, participants: I, read_only: f, trusted: N, type: C } = t,
                        { message_data: { sender_id: w } = {} } = r,
                        S = void 0 === e || N;
                    return s.createElement(T.ZP, { entry: r, inboxType: n, isActive: i, isFirstRapidFire: a, isGroupDM: C === g.eD.GROUP, isHighlightedMessageSearchEntry: o, isLastPersistedMessage: l, isLastRapidFire: c, isLowQuality: !!m, isRapidFire: d, isReadOnly: f, isSent: w === E, isTrusted: !!S, isWide: u, onEditDm: p, onReplyTo: h, onRetrySendMessage: R, participants: I, senderId: w, setActiveEntry: y, setShouldFreezeUpdates: _ });
                }
                return (0, I.QD)(r) ? s.createElement(f.Z, { entry: r, entryType: r.type, perspective: E }) : (0, I.Tt)(r) ? s.createElement(N.ZP, { conversation: t, entry: r, entryType: r.type, perspective: E }) : (0, I.js)(r) ? s.createElement(C.Z, { entry: r, isCompact: !1 }) : null;
            };
            var w = r(675385),
                S = r(213386),
                v = r(58881),
                D = r(891198),
                b = r(638009),
                A = r(530732),
                F = r(688715),
                M = r(823161),
                B = r(366635),
                Z = r(238406),
                x = r(470397),
                O = r(661810),
                P = r(170371),
                L = r(198506),
                V = r(290213),
                H = r(39623);
            const k = "DmActivityContainer",
                G = "DmActivityViewport",
                W = "ProfileInfoHeader",
                z = "DmScrollerContainer",
                U = "DmScrollToNewestButton",
                j = "UserDescription",
                $ = d().e535cae9,
                q = (e, t) => {
                    const r = (0, L.Z)(e, t).map(({ user: e }) => e),
                        s = r && r[0];
                    return { userAvatarUrl: s.profile_image_url_https, userDescription: s.description, userEntities: s.entities, userWithheldDescription: s.withheld_description, userWithheldEntities: s.withheld_entities, userFollowerCount: s && s.followers_count, userFriendsCount: s && s.friends_count, userIdStr: s && s.id_str, userJoinDate: s && s.created_at, userName: s && s.name, userScreenName: s && s.screen_name, userIsSubscriber: s && s.subscribed_by, userIsVerified: s && s.verified, userIsBlueVerified: s && s.is_blue_verified, userVerifiedType: s.verified_type, userHighlightedLabel: s.highlightedLabel };
                },
                Y = l.default.create((e) => ({ root: { flexDirection: "column", alignItems: "center", marginBottom: e.spaces.space16, paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space16, borderRadius: e.borderRadii.xSmall }, profileInfoItemMargin: { marginBottom: e.spaces.space4 }, borderBottom: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, description: { width: "100%", textAlign: "center" }, descriptionVDL: { marginBottom: 0, marginTop: e.spaces.space12 }, statsVDL: { marginTop: e.spaces.space12, marginBottom: e.spaces.space12 }, userAvatar: { alignItems: "center" }, lockContainer: { display: "flex", alignItems: "center", top: e.spacesPx.space36, end: -e.spacesPx.space28 } })),
                K = ({ conversation: e, withBottomBorder: t = !0 }) => {
                    const { viewerUserId: r } = s.useContext(m.rC);
                    if (!e) return null;
                    const { userAvatarUrl: a, userDescription: o, userEntities: c, userFollowerCount: d, userFriendsCount: u, userHighlightedLabel: p, userIdStr: h, userIsBlueVerified: E, userIsSubscriber: y, userIsVerified: _, userJoinDate: I, userName: f, userScreenName: N, userVerifiedType: T, userWithheldDescription: C, userWithheldEntities: R } = q(e, r || ""),
                        w = !!(f && N && ((d && u) || I)),
                        S = v.Z.generate({ color: l.default.theme.colors.text, backgroundColor: l.default.theme.colors.transparent, customFocusBackgroundColor: l.default.theme.colors.gray0, customHoverBackgroundColor: l.default.theme.colors.gray0, customPressedBackgroundColor: l.default.theme.colors.activeFaintGray });
                    return s.createElement(b.$6, { testId: W }, (r) => {
                        return s.createElement(A.Z, { interactiveStyles: S, link: r.withAnchorless((0, F.ju)(`https://x.com/${N || ""}`)), style: [Y.root, t && w && Y.borderBottom] }, s.createElement(M.default, { decoration: e?.type === g.eD.SECRET_ONE_TO_ONE ? s.createElement(n.Z, { style: Y.lockContainer }, s.createElement(H.Z, null)) : null, uri: a }), s.createElement(B.Z, { affiliateBadgeInfo: p, badgeContext: "account", isBlueVerified: E, isSubscriber: y, isVerified: _, name: f, screenName: N, style: [Y.profileInfoItemMargin, Y.userAvatar], verifiedType: T, weight: "bold", withHoverCard: !0, withLink: !0, withStackedLayout: !0 }), o && c && h ? s.createElement(Z.Z, { description: o, entities: c, style: [Y.profileInfoItemMargin, Y.description, Y.descriptionVDL], testID: j, userId: h, withheldDescription: C, withheldEntities: R }) : null, s.createElement(x.Z, { style: Y.statsVDL }, I ? ((e) => s.createElement(i.ZP, { color: "gray700", size: "subtext1" }, s.createElement(V.Z, { joinDate: e, withoutIcon: !0 })))(I) : null, d ? ((l = d), s.createElement(i.ZP, { color: "gray700", size: "subtext1" }, $({ count: D.ZP.getTruncatedCount(l) }))) : null), s.createElement(P.Z, { userId: h, userScreenName: N || "" }), s.createElement(O.Z, { spacing: "space28" }));
                        var l;
                    });
                };
            var X = r(489705),
                J = r(154003),
                Q = r(212145);
            const ee = d().h52ca4c4;
            function te(e) {
                const t = "goToNewestArrow" === e.type;
                return s.createElement(n.Z, { style: [re.scrollToNewestButtonContainer, t ? re.scrollToNewestButtonContainerEndAligned : re.scrollToNewestButtonContainerCenterAligned, !e.visible && re.scrollToNewestButtonContainerHidden], testID: U }, s.createElement(J.ZP, { backgroundColor: "cellBackground", borderColor: "transparent", color: "primary", onPress: e.onPress, style: [e.visible ? re.scrollToNewestButtonVisible : re.scrollToNewestButtonHidden, re.scrollToNewestButton] }, t ? s.createElement(Q.default, null) : s.createElement(i.ZP, null, "↓ ", ee)));
            }
            const re = l.default.create((e) => ({ scrollToNewestButton: { boxShadow: e.boxShadows.small, transition: "opacity 0.3s" }, scrollToNewestButtonContainer: { justifyContent: "end", bottom: e.spaces.space12, display: "flex", flexDirection: "row", paddingEnd: e.spaces.space32, position: "absolute", width: "100%", zIndex: 2 }, scrollToNewestButtonContainerCenterAligned: { justifyContent: "center" }, scrollToNewestButtonContainerEndAligned: { justifyContent: "end" }, scrollToNewestButtonContainerHidden: { zIndex: -1 }, scrollToNewestButtonHidden: { opacity: 0, pointerEvents: "none" }, scrollToNewestButtonVisible: { opacity: 1, pointerEvents: "auto" } }));
            var se = r(622333),
                ne = r(76601),
                ie = (r(136728), r(7330)),
                ae = r(173396),
                oe = r(46705),
                le = r(593953);
            const ce = (e, t) => {
                    if (e && e.message_data && t && t.message_data && (0, I.c)(e) && (0, I.c)(t)) {
                        const { sender_id: r, time: s } = e.message_data,
                            { sender_id: n, time: i } = t.message_data,
                            a = parseInt(i, 10) - parseInt(s, 10);
                        return r === n && a >= 0 && a <= 6e4;
                    }
                    return !1;
                },
                de = (e, t, r, s, n) => {
                    if (0 === t.length) return;
                    if (!e.trusted) return oe.X(ne.tn.entry.id);
                    if (r && s) return oe.g(r);
                    return oe.g(
                        ((e) => {
                            for (let t = e.length - 1; t >= 0; t--) {
                                const r = e[t];
                                if (r && n(r)) return r;
                            }
                            return ((e) => e[e.length - 1])(e);
                        })(t).entry.id,
                    );
                },
                ue = (e, t, r) => {
                    let s = 0,
                        n = !1;
                    for (const i of e) {
                        if (i.type !== g.Cr.MESSAGE) continue;
                        const e = i.id === r;
                        (n || e) && (e ? (n = !0) : n && i.message_data?.sender_id !== t && (s += 1));
                    }
                    return s;
                },
                pe = d().dd8272fd,
                he = (e) => e.entry.id,
                me = (e) => e.entry.type === g.Cr.MESSAGE || e.entry.type === g.Cr.CONVERSATION_PROFILE_INFO_HEADER;
            class Ee extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._shouldShowScrollToNewestButton = () => !(this.props.messageSearchEntryId || !this.props.conversation.trusted) && !this._scrollerRef?.isAtNewest()),
                        (this._handleItemsRendered = (e) => {
                            const t = e.positions.find((e) => "conversationProfileInfoHeader" === e.id),
                                r = void 0 !== t && e.viewport.getTop() < t.rectangle.getHeight();
                            this.props.onConversationProfileVisibilityChange?.(r);
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.messageSearchEntryId && !this.state.didRenderMessageSearchEntry && this.setState({ didRenderMessageSearchEntry: !0 }), this.setState({ showScrollToNewestButton: this._shouldShowScrollToNewestButton() });
                        }),
                        (this._setScrollerRef = (e) => {
                            this._scrollerRef = e;
                        }),
                        (this._scrollToNewest = (e) => {
                            this._scrollerRef && this._scrollerRef.scrollToNewest(!1);
                        }),
                        (this._renderItem = (e) => {
                            const { conversation: t, lastReadMessageId: r, perspective: o } = this.props,
                                l = this.context.loggedInUserId && this.context.loggedInUserId !== o,
                                c = t.conversation_id,
                                d = t?.entries || [];
                            switch (e.type) {
                                case g.Cr.DELEGATE_ALERT_BANNER:
                                    return l ? s.createElement(E.Z, { style: ge.delegateAlertBanner, type: "DM" }) : null;
                                case g.Cr.TYPING_INDICATOR:
                                    return c ? s.createElement(w.ZP, { conversationId: c }) : null;
                                case g.Cr.READ_ONLY_INDICATOR:
                                    return c ? (t.type === g.eD.SECRET_ONE_TO_ONE ? X.Z.recipientNoEncrypted : X.Z.readOnlyDm) : null;
                                case g.Cr.CONVERSATION_PROFILE_INFO_HEADER:
                                    return s.createElement(K, { conversation: t });
                                case g.Cr.ENCRYPTED_CONVERSATION:
                                    return s.createElement(n.Z, null, s.createElement(S.X, null), X.Z.encryptedDm);
                                case g.Cr.LOADING_INDICATOR:
                                    return s.createElement(se.Z, null);
                                case g.Cr.NEW_MESSAGES_DIVIDER: {
                                    const e = ue(d, o, r),
                                        t = s.createElement(i.ZP, { color: "gray700", size: "subtext1", weight: "medium" }, pe({ count: e }));
                                    return s.createElement(n.Z, { style: ge.newMessagesDividerContainer }, s.createElement(a.Z, { label: t }));
                                }
                                default:
                                    return this._renderDMEntry(e);
                            }
                        }),
                        (this._setActiveEntry = (e) => {
                            this.setState({ activeEntryId: e });
                        }),
                        (this._setShouldFreezeUpdates = (e) => {
                            this.setState({ shouldFreezeUpdates: e });
                        }),
                        (this.state = { activeEntryId: null, didRenderMessageSearchEntry: !1, shouldFreezeUpdates: !1, showScrollToNewestButton: !1 });
                }
                shouldComponentUpdate(e, t) {
                    return !1 === t.shouldFreezeUpdates;
                }
                render() {
                    const { conversation: e, drawerHeader: t, isWide: r, lastReadMessageId: i, messageSearchEntryId: a, onForwardRequest: l, onHistoryRequest: c, perspective: d, shouldScrollToCenter: m, style: E } = this.props,
                        I = (({ activeEntryId: e, conversation: t, delegateAlertBanner: r, didRenderMessageSearchEntry: s, footer: n, lastReadMessageId: i, messageSearchEntryId: a, perspective: o }) => {
                            const l = (t && t.entries) || [],
                                c = t?.max_search_entry_id,
                                d = (0, ie.Z)(t.entries, (e) => e.type === g.Cr.MESSAGE && !e.error && !e.is_draft),
                                u = t?.min_search_entry_id,
                                p = t?.status === g.To.AT_END,
                                h = !t.trusted || (t.status === g.To.AT_END && (t.type === g.eD.ONE_TO_ONE || t.type === g.eD.SECRET_ONE_TO_ONE)),
                                m = s && !!t?.min_search_entry_id && t.status !== g.To.AT_END,
                                E = c ? (0, le.oK)(l, c) : l.length - 1,
                                y = u ? (0, le.oK)(l, u) : -1,
                                _ = a && -1 === y ? (0, le.oK)(l, a) : y,
                                I = l.slice(p ? 0 : _, E + 1),
                                f = a ? I : l,
                                N = f.reduce((r, n, c) => {
                                    0 === c && (h && (r.push(ne.tn), t.type === g.eD.SECRET_ONE_TO_ONE && r.push(ne.oA)), ((t.status && t.status !== g.To.AT_END && !a) || m) && r.push(ne.sV));
                                    const u = (0, ae.Z)(r),
                                        p = c === l.length - 1;
                                    if ((r.push({ isRapidFire: !1, isFirstRapidFire: !1, isLastPersistedMessage: d?.id === n.id, isLastRapidFire: !1, entry: n, isActive: a === n.id || e === n.id, isTrusted: !!t?.trusted, messageSearchEntryId: a }), u)) {
                                        const e = ce(u.entry, n),
                                            t = r[r.length - 2];
                                        e ? ((r[r.length - 1].isRapidFire = !0), t.isRapidFire || ((t.isFirstRapidFire = !0), (t.isRapidFire = !0)), p && (r[r.length - 1].isLastRapidFire = !0)) : t.isRapidFire && (t.isLastRapidFire = !0);
                                    }
                                    return c === f.length - 1 && s && a && t.max_search_entry_id && t.search_status && t.search_status !== g.To.AT_END && r.push(ne.sV), n.id === i && ue(l, o, i) > 0 && r.push(ne.V_), r;
                                }, []);
                            return n && !a && N.push(n), t.read_only && ne.yW && !a && N.push(ne.yW), r && !a && N.push(r), N;
                        })({ conversation: e, delegateAlertBanner: ne.aM, footer: ne.u2, activeEntryId: this.state.activeEntryId, messageSearchEntryId: a, didRenderMessageSearchEntry: !!this.state.didRenderMessageSearchEntry, lastReadMessageId: i, perspective: d }),
                        f = e.conversation_id,
                        N = a ? `dm-activity-${f}-${a}` : `dm-activity-${f}`,
                        T = !e.trusted;
                    return s.createElement(_.Z.Consumer, null, ({ isDrawer: g }) => {
                        const _ = g ? y.Z.drawerHeaderRadius : ge.scrollSpace;
                        return s.createElement(
                            n.Z,
                            { style: [ge.scrollContainer, _], testID: k },
                            s.createElement(h.Z, { style: [ge.scrollContainer, r && ge.conversationsPadding, _, E], testID: G }, t || null, s.createElement(o.Z, { style: [ge.content, ge.alignTop], testID: z, withGutter: !0 }, s.createElement(u.C, { anchoring: p.Z, assumedItemHeight: 50, cacheKey: N, canBeAnchorFunction: me, centerInitialAnchor: T || (a && m), hasNewContentAtBottom: !T, identityFunction: he, initialAnchor: de(e, I, a, m, me), items: I, nearStartProximityRatio: 2, onAtEnd: a && this.state.didRenderMessageSearchEntry ? l : void 0, onAtStart: a && this.state.didRenderMessageSearchEntry ? c : void 0, onItemsRendered: this._handleItemsRendered, onNearStart: a ? void 0 : c, onScrollEnd: this._handleScrollEnd, ref: this._setScrollerRef, renderer: this._renderItem, withoutHeadroom: !0 }))),
                            s.createElement(te, {
                                onPress: (e) => {
                                    this.setState({ showScrollToNewestButton: !1 }), this._scrollToNewest(e);
                                },
                                type: ue(e?.entries || [], d, i) > 0 ? "goToNewMessagesText" : "goToNewestArrow",
                                visible: this.state.showScrollToNewestButton,
                            }),
                        );
                    });
                }
                _renderDMEntry({ entry: e, isActive: t, isFirstRapidFire: r, isLastPersistedMessage: n, isLastRapidFire: i, isRapidFire: a }) {
                    const { conversation: o, inboxType: l, isWide: c, messageSearchEntryId: d, onEditDm: u, onReplyTo: p, onRetrySendMessage: h, perspective: m, scribeNamespace: E } = this.props,
                        g = e.id === d;
                    return e && l ? s.createElement(R, { conversation: o, entry: e, inboxType: l, isActive: t, isFirstRapidFire: r, isHighlightedMessageSearchEntry: g, isLastPersistedMessage: n, isLastRapidFire: i, isRapidFire: a, isWide: c, key: e.id, onEditDm: u, onReplyTo: p, onRetrySendMessage: h, perspective: m, scribeNamespace: E, setActiveEntry: this._setActiveEntry, setShouldFreezeUpdates: this._setShouldFreezeUpdates }) : null;
                }
            }
            Ee.contextType = m.rC;
            const ge = l.default.create((e) => ({ spinner: { alignItems: "center", marginVertical: "30px" }, scrollContainer: { backgroundColor: e.colors.cellBackground, flexGrow: 1, height: "100%", overflowX: "hidden", WebkitOverflowScrolling: "touch" }, scrollSpace: { paddingTop: e.componentDimensions.appBarHeightPx, marginTop: -e.componentDimensions.appBarHeightPx }, conversationsPadding: { paddingTop: e.spaces.space20 }, content: { flexGrow: 1, transform: [{ translate3d: "0,0,0" }] }, delegateAlertBanner: { paddingHorizontal: 0 }, alignTop: { justifyContent: "flex-start" }, newMessagesDividerContainer: { marginBottom: e.spaces.space8 } }));
        },
        489705: (e, t, r) => {
            r.d(t, { Z: () => g });
            var s = r(202784),
                n = r(325686),
                i = r(731708),
                a = r(688715),
                o = r(392237),
                l = r(111677),
                c = r.n(l),
                d = r(442713),
                u = r(427266);
            const p = (e) => s.createElement(i.ZP, { link: e, size: "subtext1", style: { whiteSpace: "nowrap" } }),
                h = (e) => s.createElement(n.Z, { style: E.container }, s.createElement(i.ZP, { align: "center", children: e, color: "gray700", size: "subtext2" })),
                m = {};
            (0, d.Z)(m, "encryptedDm", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "c51866e3" }, s.cloneElement(p((0, a.ju)("https://help.x.com/using-twitter/encrypted-direct-messages")), null, c().g1f972d7)))), (0, d.Z)(m, "recipientNoEncrypted", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "af0bb3eb" }, s.cloneElement(p((0, a.ju)("https://help.x.com/using-twitter/encrypted-direct-messages")), null, c().bb0e37c3)))), (0, d.Z)(m, "readOnlyDm", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "b9f61623" }, s.cloneElement(p((0, a.ju)("https://support.x.com/articles/14606#faq")), null, c().a89e8ab3)))), (0, d.Z)(m, "deviceIsNotAMember", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "h27b1291" }, s.cloneElement(p((0, a.ju)("https://help.x.com/using-twitter/encrypted-direct-messages")), null, c().d98540eb)))), (0, d.Z)(m, "onlyVerifiedCanMessageGroup", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "bcabe3f5" }, s.cloneElement(p((0, a.ju)("https://help.x.com/using-twitter/direct-messages#faq")), null, c().j296badb)))), (0, d.Z)(m, "onlyVerifiedCanMessageUser", () => h(s.createElement(c().I18NFormatMessage, { $i18n: "jdef4bc7" }, s.cloneElement(p((0, a.ju)("https://help.x.com/using-twitter/direct-messages#faq")), null, c().e45d77f5))));
            const E = o.default.create((e) => ({ container: { display: "flex", flexDirection: "row", flexGrow: 1, justifyContent: "center", paddingTop: e.spaces.space20, paddingBottom: e.spaces.space20 } })),
                g = (0, u.dW)(m);
        },
        76601: (e, t, r) => {
            r.d(t, { V_: () => p, ZF: () => l, aM: () => o, oA: () => a, sV: () => u, tn: () => i, u2: () => c, yW: () => d });
            r(202784);
            var s = r(275365);
            const n = (e, t) => ({ entry: { id: t, time: "", type: e }, isActive: !1, isRapidFire: !1, isFirstRapidFire: !1, isLastPersistedMessage: !1, isLastRapidFire: !1, type: e }),
                i = n(s.Cr.CONVERSATION_PROFILE_INFO_HEADER, "conversationProfileInfoHeader"),
                a = n(s.Cr.ENCRYPTED_CONVERSATION, "encryptedConversation"),
                o = n(s.Cr.DELEGATE_ALERT_BANNER, "delegateAlertBanner"),
                l = "typingIndicator",
                c = n(s.Cr.TYPING_INDICATOR, l),
                d = n(s.Cr.READ_ONLY_INDICATOR, "readOnlyIndicator"),
                u = n(s.Cr.LOADING_INDICATOR, "loadingIndicator"),
                p = n(s.Cr.NEW_MESSAGES_DIVIDER, "newMessagesDivider");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-1a48af1c.f1206b8a.js.map
