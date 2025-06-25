"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages-6195aaff"],
    {
        138214: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                a = n(443781),
                s = n(340130),
                o = n(593953),
                c = n(668214),
                l = n(627279),
                i = n(919022);
            const h = (e, t) => (t.senderId ? i.ZP.select(e, t.senderId) : void 0),
                d = (e, t) => (0, l.WK)(e, t.reactionEntry.message_id),
                m = (e, t) => {
                    const n = d(e, t);
                    return n && n.message_data && i.ZP.select(e, n.message_data.sender_id);
                },
                u = (0, c.Z)().propsFromState(() => ({ reactingUser: h, reactedMessageEntry: d, messageUser: m }));
            var p = n(731708),
                g = n(111677),
                E = n.n(g),
                I = n(575522);
            function _({ emojiReaction: e, isGroupDM: t, isSelected: n, messageScreenName: a, messageText: o, perspective: c, reacterId: l, reacterName: i, type: h, unread: d }) {
                const m = c === l,
                    u = (0, I.T)(d),
                    g = (0, I.F)(d, n);
                let _;
                return (
                    (_ =
                        h === s.C7.TWEET
                            ? t
                                ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "hc1bd66d" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "bd3edf13" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "df2dc76f" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "aba18aef" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                            : h === s.C7.VIDEO
                              ? t
                                  ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "d1f8bdd9" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "d764af97" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                  : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "ab1cdfe3" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "f0cf1699" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                              : h === s.C7.PHOTO
                                ? t
                                    ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "hec0fd4d" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "j55320df" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                    : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "jf27606b" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "cd110359" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                                : h === s.C7.GIF
                                  ? t
                                      ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "e70dcc35" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "g1bf440b" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                      : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "b2da1bf9" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "g84c0421" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                                  : h === s.C7.CARD
                                    ? t
                                        ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "cd2e7c19" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "aee9e7fb" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                        : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "f9fb1cf7" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "f2bf910f" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                                    : h === s.C7.TEXT
                                      ? t
                                          ? ((e, t, n, a, s) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "i6cec545" }, r.createElement(p.ZP, null, a), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, s)) : r.createElement(E().I18NFormatMessage, { $i18n: "d6998bab" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, a), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, s))))(m, i, e, a, o)
                                          : ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "cec676f3" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "a2706f9b" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, e, o)
                                      : h === s.C7.VOICE
                                        ? t
                                            ? ((e, t, n, a) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "ff973a65" }, r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a)) : r.createElement(E().I18NFormatMessage, { $i18n: "ec2cede5" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n), r.createElement(p.ZP, null, a))))(m, i, a, e)
                                            : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "i1d08199" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "d424b45f" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)
                                        : ((e, t, n) => (e ? r.createElement(E().I18NFormatMessage, { $i18n: "d6b15bbf" }, r.createElement(p.ZP, null, n)) : r.createElement(E().I18NFormatMessage, { $i18n: "ac0d4bc7" }, r.createElement(p.ZP, null, t), r.createElement(p.ZP, null, n))))(m, i, e)),
                    r.createElement(p.ZP, { color: g, numberOfLines: 1, weight: u }, _)
                );
            }
            const C = u(({ isGroupDM: e, isSelected: t = !1, messageUser: n, perspective: c, reactedMessageEntry: l, reactingUser: i, reactionEntry: h, unread: d = !1 }) => {
                const { featureSwitches: m } = r.useContext(a.rC),
                    u = l && l.message_data,
                    p = u && u.attachment,
                    g = u && u.text,
                    E = n && n.screen_name,
                    I = i && i.id_str,
                    C = i && i.name,
                    b = h.emoji_reaction || "";
                let f = s.C7.UNKNOWN;
                return p ? (p.tweet ? (f = s.C7.TWEET) : p.video ? (f = (0, o.dI)(p, m) ? s.C7.VOICE : s.C7.VIDEO) : p.photo ? (f = s.C7.PHOTO) : p.animated_gif ? (f = s.C7.GIF) : p.card && (f = s.C7.CARD)) : g && (f = s.C7.TEXT), r.createElement(_, { emojiReaction: b, isGroupDM: e, isSelected: t, messageScreenName: E, messageText: g, perspective: c, reacterId: I, reacterName: C, type: f, unread: d });
            });
        },
        795036: (e, t, n) => {
            n.d(t, { Z: () => Xe });
            var r = n(202784),
                a = n(614983),
                s = n.n(a),
                o = n(325686),
                c = n(457311),
                l = n(731708),
                i = n(530732),
                h = n(154003),
                d = n(371344),
                m = n(392237),
                u = n(111677),
                p = n.n(u),
                g = n(894966),
                E = n(956272),
                I = n(827515),
                _ = n(666536),
                C = n(290402),
                b = n(822228),
                f = n(965245),
                S = n(507651),
                v = n(443781),
                y = n(144256),
                Z = n(500002),
                P = n(275365),
                R = n(147143),
                T = n(622333),
                M = n(11582),
                x = n(511495),
                F = n(340130),
                N = n(886559),
                k = n(257444),
                D = n(420412),
                w = n(430895),
                $ = n(125966),
                A = n(25001),
                q = n(246851),
                H = n(87063),
                L = n(71620),
                O = n(668214);
            const Q = (e, { module: t }) => t.selectItems(e),
                z = (e, { module: t }) => t.selectFetchStatus(e),
                B = (0, O.Z)()
                    .propsFromState(() => ({ fetchStatus: z, sliceItems: Q }))
                    .adjustStateProps(({ fetchStatus: e, sliceItems: t }) => {
                        const n = ((e) => e.find((e) => e.groupData)?.groupData?.result || [])(t),
                            r = ((e) => e.find((e) => e.peopleData)?.peopleData?.result || [])(t),
                            a = ((e) => e.find((e) => e.messageData)?.messageData?.conversationIds || [])(t),
                            s = ((e) => e.find((e) => e.messageData)?.messageData?.entryIds || [])(t),
                            o = ((e) => e.find((e) => e.groupData)?.groupData?.highlightingTokens)(t),
                            c = ((e) => e.find((e) => e.messageData)?.messageData?.highlightingTokens)(t),
                            l = ((e) => e.find((e) => e.peopleData)?.peopleData?.highlightingTokens)(t);
                        return { entryIds: s, fetchStatus: e, groupConversationIds: n, groupHighlightingTokens: o, messageConversationIds: a, messageHighlightingTokens: c, peopleHighlightingTokens: l, peopleSearchConversationIds: r, sliceItems: t };
                    })
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, L.zr)("DM_SEARCH_ALL_CONTEXT"), fetchSearchIfNeeded: e.fetchIfNeeded })),
                G = p().ffd9cfe6;
            function U(e) {
                const { location: t, tabLabel: n } = e;
                return r.createElement(o.Z, { style: V.footer }, r.createElement(l.ZP, { link: { pathname: t.pathname, state: { tab: n } } }, G));
            }
            const V = m.default.create((e) => ({ footer: { backgroundColor: e.colors.cellBackground, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor } })),
                W = p().c94ac69e,
                j = p().a2f81050,
                K = p().g2fd3206;
            const X = B(function (e) {
                    const t = r.useContext(v.rC),
                        { fetchStatus: n, loadingLabel: a, module: s } = e,
                        o = (0, q.Z)(s),
                        c = t.featureSwitches.getNumberValue("dm_inbox_search_groups_bucket_size"),
                        l = t.featureSwitches.getNumberValue("dm_inbox_search_messages_bucket_size"),
                        i = t.featureSwitches.getNumberValue("dm_inbox_search_people_bucket_size"),
                        h = r.useCallback(() => {
                            const { createLocalApiErrorHandler: t, fetchSearchIfNeeded: n } = e;
                            n().catch(t());
                        }, [e]);
                    r.useEffect(() => {
                        o !== s && n !== H.Z.FAILED && h();
                    }, [n, h, s, o]);
                    const d = ({ headerText: e, icon: t }) => r.createElement(M.ZP, { headerText: e, icon: t }),
                        m = () => {
                            const { entryIds: t, messageConversationIds: n, messageHighlightingTokens: a, pinConversation: s, renderInboxItem: o, unpinConversation: c } = e;
                            return r.createElement(r.Fragment, null, d({ icon: $.default, headerText: j }), t.map((e, r) => (e ? ((e) => o({ conversationIds: n, isMessageItem: !0, messageIds: t, pinConversation: s, unpinConversation: c, highlightingTokens: a })(e))(e) : null)).slice(0, l));
                        };
                    return r.createElement(C.Z, {
                        "aria-label": a,
                        fetchStatus: n,
                        onRequestRetry: h,
                        render: () => {
                            const { groupConversationIds: t, location: n, messageConversationIds: a, peopleSearchConversationIds: s, renderEmptyState: o } = e,
                                h = s.length && t.length,
                                u = c < t.length,
                                p = l < a.length,
                                g = i < s.length;
                            return t?.length || s.length || a.length
                                ? r.createElement(
                                      r.Fragment,
                                      null,
                                      s.length
                                          ? (() => {
                                                const { peopleHighlightingTokens: t, peopleSearchConversationIds: n, pinConversation: a, renderInboxItem: s, unpinConversation: o } = e;
                                                return r.createElement(r.Fragment, null, d({ icon: A.default, headerText: K }), n.map((e, r) => (e ? s({ conversationIds: n, pinConversation: a, unpinConversation: o, highlightingTokens: t })(e) : null)).slice(0, i));
                                            })()
                                          : null,
                                      h && !g ? r.createElement(D.Z, null) : null,
                                      g ? r.createElement(U, { location: n, tabLabel: K }) : null,
                                      t.length
                                          ? (() => {
                                                const { groupConversationIds: t, groupHighlightingTokens: n, pinConversation: a, renderInboxItem: s, unpinConversation: o } = e;
                                                return r.createElement(r.Fragment, null, d({ icon: w.default, headerText: W }), t.map((e, r) => (e ? s({ conversationIds: t, pinConversation: a, unpinConversation: o, highlightingTokens: n })(e) : null)).slice(0, c));
                                            })()
                                          : null,
                                      u ? r.createElement(U, { location: n, tabLabel: W }) : null,
                                      a.length ? m() : null,
                                      p ? r.createElement(U, { location: n, tabLabel: j }) : null,
                                  )
                                : o();
                        },
                    });
                }),
                J = X;
            var Y = n(24949),
                ee = n(599138);
            const te = (e, t) => t.query,
                ne = (0, O.Z)().propsFromState(() => ({ sliceModule: (0, Y.P1)(te, (e) => (e ? (0, ee.Z)(e) : void 0)) }))((e) => {
                    const { loadingLabel: t, location: n, pinConversation: a, query: s, renderEmptyState: o, renderInboxItem: c, sliceModule: l, unpinConversation: i } = e;
                    return l ? r.createElement(J, { loadingLabel: t, location: n, module: l, pinConversation: a, query: s, renderEmptyState: o, renderInboxItem: c, unpinConversation: i }) : o();
                }),
                re = ne;
            var ae = n(296196),
                se = n(312771);
            const oe = ae.selectRecentSearches,
                ce = (e, t) => (t.query ? ae.selectSearchConversations(e, t.query) : []),
                le = (e, t) => (t.query ? ae.selectSearchFetchStatus(e, t.query) : se.ZP.LOADED),
                ie = (e, t) => t.conversationIds || [],
                he = (e, t) => (e?.length ? t.filter((t) => e.indexOf(t) > -1) : e),
                de = (0, O.Z)()
                    .propsFromState(() => ({ conversationIds: ie, recentSearches: oe, searchFetchStatus: le, searchConversationIds: ce }))
                    .adjustStateProps(({ conversationIds: e, recentSearches: t, searchConversationIds: n, searchFetchStatus: r }) => ({ conversationIds: e, recentSearches: t, searchFetchStatus: r, searchConversationIds: he(n, e) }))
                    .propsFromActions(() => ({ addRecentSearch: ae.addRecentSearches, createLocalApiErrorHandler: (0, L.zr)("DIRECT_MESSAGES_SEARCH"), search: ae.searchConversations, clearRecentSearch: ae.clearRecentSearch, clearRecentSearches: ae.clearRecentSearches }));
            var me = n(618012),
                ue = n(705414),
                pe = n(506899),
                ge = (n(585488), n(908478)),
                Ee = n(771613),
                Ie = n(736063),
                _e = n(125363),
                Ce = n(674420),
                be = n(127218);
            const fe = ue.Z,
                Se = me.Z,
                ve = "DM_CONVERSATION_SEARCH",
                ye = { context: ve },
                Ze = (e) => e,
                Pe = (e) => {
                    const { footer: t, noItemsRenderer: n, onScrollEnd: a, pinConversation: s, renderInboxItem: o, searchTerm: c, tabType: l, unpinConversation: i } = e,
                        h = (0, _e.I0)(),
                        d = !0,
                        m = l === F.TG.GROUPS ? fe : Se,
                        { data: u, fetchNext: p, hasNext: g } = (0, be.C)(m, { query: c, withConversationQueryHighlights: d });
                    let E;
                    u?.dm_group_convo_slice_result ? (E = u?.dm_group_convo_slice_result?.items) : u?.dm_people_convo_slice_result && (E = u?.dm_people_convo_slice_result?.items);
                    const {
                            entities: I,
                            highlightingTokens: _,
                            normalizedConversations: C,
                        } = r.useMemo(() => {
                            const e = E?.map((e) => e?.dm_convo_search) || {},
                                t = E?.map((e) => e?.highlighting?.query_tokens),
                                n = (0, pe.Fv)(e, [Ee.ZP]);
                            return { normalizedConversations: n, entities: { ...n?.entities }, highlightingTokens: t };
                        }, [E, d]),
                        b = (0, q.Z)(u);
                    return (
                        r.useEffect(() => {
                            (0, ge.Z)(u, b) || h((0, Ce.f)(I, !0));
                        }, [I, u, b, h]),
                        r.createElement(f.Z, { cacheKey: ve, footer: g ? null : t, identityFunction: Ze, items: C?.result, noItemsRenderer: n, onNearEnd: p, onScrollEnd: a, renderer: o({ conversationIds: C?.result, isMessageItem: !1, pinConversation: s, unpinConversation: i, highlightingTokens: _ }), withoutHeadroom: !0 })
                    );
                };
            function Re(e) {
                return r.createElement(Ie.H, { errorConfig: ye }, r.createElement(Pe, e));
            }
            const Te = n(463450).Z,
                Me = "DM_MESSAGE_SEARCH",
                xe = { context: Me },
                Fe = (e) => e,
                Ne = (e) => {
                    const { footer: t, noItemsRenderer: n, onScrollEnd: a, pinConversation: s, renderInboxItem: o, searchTerm: c, unpinConversation: l } = e,
                        i = (0, _e.I0)(),
                        h = !0,
                        { data: d, fetchNext: m, hasNext: u } = (0, be.C)(Te, { query: c, withAttachments: !0, withMessageQueryHighlights: h }),
                        {
                            entities: p,
                            highlightingTokens: g,
                            normalizedConversations: E,
                            normalizedMessages: I,
                        } = r.useMemo(() => {
                            const e = d?.dm_message_slice_result?.items?.map((e) => e?.dm_event?.legacy?.conversation),
                                t = d?.dm_message_slice_result?.items,
                                n = t?.map((e) => e?.highlighting?.query_tokens),
                                r = (0, pe.Fv)(e, [Ee.ZP]),
                                a = (0, pe.Fv)(t, [Ee.JJ]);
                            return { normalizedConversations: r, normalizedMessages: a, entities: { ...r?.entities, ...a?.entities }, highlightingTokens: n };
                        }, [d?.dm_message_slice_result?.items, h]),
                        _ = (0, q.Z)(d);
                    return (
                        r.useEffect(() => {
                            (0, ge.Z)(d, _) || i((0, Ce.f)(p, !0));
                        }, [p, d, _, i]),
                        r.createElement(f.Z, { cacheKey: Me, footer: u ? null : t, identityFunction: Fe, items: I?.result, noItemsRenderer: n, onNearEnd: m, onScrollEnd: a, renderer: o({ conversationIds: E?.result, isMessageItem: !0, messageIds: I?.result, pinConversation: s, unpinConversation: l, highlightingTokens: g }), withoutHeadroom: !0 })
                    );
                };
            function ke(e) {
                return r.createElement(Ie.H, { errorConfig: xe }, r.createElement(Ne, e));
            }
            const De = (e) => e,
                we = p().b08821f4,
                $e = p().a66ac766,
                Ae = p().a846382a,
                qe = p().b9dae4f4,
                He = p().e7fb2028,
                Le = p().ae111c99,
                Oe = p().e8581cce,
                Qe = p().f08940ac,
                ze = p().i5d7593a,
                Be = p().f8321d82,
                Ge = p().c94ac69e,
                Ue = p().a2f81050,
                Ve = p().g2fd3206,
                We = p().fb3c8e74;
            class je extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { debouncedQuery: "", isLoadingMore: !1, isRefreshing: !1 }),
                        (this._setInputRef = (e) => {
                            this._textInputRef = e;
                        }),
                        (this._handleConversationClick = (e, t, n, r) => {
                            const { analytics: a } = this.props,
                                s = n?.participants.length || 0,
                                o = n?.type === P.eD.GROUP;
                            a.scribe({ element: "thread", action: "click", data: { event_value: this.props.query.length, conversation_id: t, conversation_participant_count: s, conversation_type: o ? F.NK.GROUP : F.NK.ONE_TO_ONE, position: r } });
                        }),
                        (this._renderEmptyDMSearchInbox = () => {
                            const { analytics: e, query: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            return n && t ? (e.scribe({ component: "search", element: "results", action: "empty" }), r.createElement(c.Z, { buttonLink: "/messages/compose", buttonText: Qe, header: Le({ query: n }), message: Oe, onButtonPress: this._handleComposeButtonPress })) : r.createElement(o.Z, { style: Ke.emptyState }, r.createElement(l.ZP, { align: "center", color: "gray700" }, ze));
                        }),
                        (this._renderRecentSearches = () => {
                            const { analytics: e, query: t, recentSearches: n } = this.props;
                            return n.length && !t
                                ? r.createElement(
                                      r.Fragment,
                                      null,
                                      r.createElement(M.ZP, { analytics: e, clearRecentSearches: this._clearRecentSearches, headerText: We, withClearButton: !0 }),
                                      n.map((e) => r.createElement(x.Z, { clearRecentSearch: (t) => this._handleClearRecentSearch(t, e), handleRecentSearchClick: () => this._handleRecentSearchClick(e), key: e, recentSearch: e })),
                                  )
                                : this._renderEmptyDMSearchInbox();
                        }),
                        (this._renderAllDMSearchResultsTab = () => {
                            const { debouncedQuery: e } = this.state;
                            return e ? this._renderAllDMSearchResults() : this._renderEmptyDMSearchInbox();
                        }),
                        (this._renderAllDMSearchResults = () => {
                            const { location: e, pinConversation: t, unpinConversation: n } = this.props,
                                { debouncedQuery: a } = this.state;
                            return r.createElement(re, { loadingLabel: $e, location: e, pinConversation: t, query: a, renderEmptyState: this._renderEmptyDMSearchInbox, renderInboxItem: this._renderSearchInboxItem, unpinConversation: n });
                        }),
                        (this._renderConversationsTab = (e) => {
                            const { pinConversation: t, unpinConversation: n } = this.props,
                                { debouncedQuery: a } = this.state;
                            return r.createElement(Re, { footer: this._renderFooter(), noItemsRenderer: this._renderEmptyDMSearchInbox, onScrollEnd: this._handleScrollEnd, pinConversation: t, renderInboxItem: this._renderSearchInboxItem, searchTerm: a, tabType: e ? F.TG.GROUPS : F.TG.PEOPLE, unpinConversation: n });
                        }),
                        (this._renderMessagesTab = () => {
                            const { pinConversation: e, unpinConversation: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            return n ? r.createElement(ke, { footer: this._renderFooter(), noItemsRenderer: this._renderEmptyDMSearchInbox, onScrollEnd: this._handleScrollEnd, pinConversation: e, renderInboxItem: this._renderSearchInboxItem, searchTerm: n, unpinConversation: t }) : this._renderEmptyDMSearchInbox();
                        }),
                        (this._renderTabContent = () => {
                            const { location: e } = this.props,
                                { tab: t } = e?.state || {};
                            switch (t) {
                                case Ve:
                                    return this._renderConversationsTab(!1);
                                case Ge:
                                    return this._renderConversationsTab(!0);
                                case Ue:
                                    return this._renderMessagesTab();
                                default:
                                    return this._renderAllDMSearchResultsTab();
                            }
                        }),
                        (this._renderSearchInboxItem =
                            ({ conversationIds: e, highlightingTokens: t, isMessageItem: n = !1, messageIds: a, pinConversation: o, unpinConversation: c }) =>
                            (l, i) => {
                                const { viewerUserId: h } = this.context,
                                    { location: d } = this.props,
                                    { query: m } = this.props,
                                    u = n ? (a || []).indexOf(l) : -1,
                                    p = -1 !== u && e?.length ? e[u] : null,
                                    g = p ? l : "",
                                    E = p || l,
                                    _ = { pathname: `/messages/${E}`, state: { ...d?.state, entryPoint: null, searchQuery: m } },
                                    C = E && e?.length ? e.indexOf(E) : null,
                                    f = C ? C + 1 : 0;
                                s()(!!h, "viewerUserId must be defined"), i && i(!0);
                                const S = t?.length && (0, I.Z)(C) && C >= 0 ? t[C] : void 0,
                                    v = (e) => r.createElement(k.Z, { conversationId: E, highlightingTokens: S, inboxType: R._2.PRIMARY, isActive: e, isMessageItem: n, key: E, link: _, messageId: g, onClick: this._handleConversationClick, perspective: h, pinConversation: o, position: f, searchQuery: m, unpinConversation: c });
                                return r.createElement(b.Z, { exact: !1, path: _.pathname }, v);
                            }),
                        (this._renderSearchResults = () => {
                            const { accessibilityTitle: e, pinConversation: t, searchConversationIds: n, unpinConversation: a } = this.props,
                                { isRefreshing: s } = this.state;
                            return r.createElement(o.Z, null, r.createElement(y.Z, { isRefreshing: s, onRefresh: this._handlePullToRefresh }, r.createElement(f.Z, { accessibilityTitle: e, anchoring: N.Z, assumedItemHeight: 100, cacheKey: "dmSearchInbox", footer: this._renderFooter(), identityFunction: De, items: n, noItemsRenderer: this._renderRecentSearches, onNearEnd: this._handleNearEnd, onScrollEnd: this._handleScrollEnd, renderer: this._renderSearchInboxItem({ conversationIds: n, pinConversation: t, unpinConversation: a }), role: "tablist", withoutHeadroom: !0 })));
                        }),
                        (this._renderFooter = () => (this.state.isLoadingMore ? r.createElement(T.Z, null) : r.createElement(o.Z, { style: Ke.footerContainer }, r.createElement(l.ZP, { align: "center", size: "body", weight: "bold" }, He), r.createElement(i.Z, { interactiveStyles: null }, r.createElement(l.ZP, { align: "center", color: "primary", onPress: this._handleFooterClick, size: "subtext2", withInteractiveStyling: !0 }, qe))))),
                        (this._clearRecentSearches = () => {
                            const { analytics: e, clearRecentSearches: t } = this.props;
                            e.scribe({ component: "recent_search", action: "clear" }), t();
                        }),
                        (this._handleComposeButtonPress = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "search", element: "empty_results", action: "compose" });
                        }),
                        (this._handleFooterClick = () => {
                            this._textInputRef?.clear(), this._textInputRef?.focus();
                        }),
                        (this._handleRefetchSearch = () => {
                            const { analytics: e, createLocalApiErrorHandler: t, search: n } = this.props,
                                { debouncedQuery: r } = this.state;
                            n && r && (e.scribe({ component: "search", element: "retry", action: "click" }), n({ query: r.toLowerCase(), preserveResults: !1, fetchNextPage: !1 }).catch(t()));
                        }),
                        (this._handlePullToRefresh = () => {
                            const { createLocalApiErrorHandler: e, search: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            this.setState({ isRefreshing: !0 }),
                                t &&
                                    n &&
                                    t({ query: n.toLowerCase(), preserveResults: !0, fetchNextPage: !1 })
                                        .then(() => this.setState({ isRefreshing: !1 }))
                                        .catch((t) => (this.setState({ isRefreshing: !1 }), e()(t)));
                        }),
                        (this._handleSearchChangeInner = (e) => {
                            const { onQueryChange: t } = this.props;
                            t(e), this.setState({ debouncedQuery: e });
                        }),
                        (this._handleSearchChangeDebounced = (0, _.Z)(this._handleSearchChangeInner, 200)),
                        (this._handleSearchChange = ({ currentTarget: { value: e } }) => {
                            const { onQueryChange: t } = this.props;
                            ((e && e.trim()) || !e) && (t(e), this._handleSearchChangeDebounced(e));
                        }),
                        (this._handleNearEnd = () => {
                            const { analytics: e, search: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            this.setState({ isLoadingMore: !0 }), n && (e.scribe({ component: "search", element: "results", action: "get_older" }), t({ query: n, preserveResults: !1, fetchNextPage: !0 }).finally(() => this.setState({ isLoadingMore: !1 })));
                        }),
                        (this._handleScrollEnd = () => {
                            const { addRecentSearch: e, analytics: t, query: n } = this.props,
                                { debouncedQuery: r } = this.state;
                            r && n && (e(n), t.scribe({ component: "recent_search", action: "add" }));
                        }),
                        (this._handleSearchClear = () => this._handleSearchChangeInner("")),
                        (this._handleHideRecentSearches = () => {
                            const { hideRecentSearches: e } = this.props;
                            e();
                        }),
                        (this._handleAddRecentSearch = ({ currentTarget: { value: e } }) => {
                            const { addRecentSearch: t, analytics: n } = this.props;
                            e && (t(e), n.scribe({ component: "recent_search", action: "add" }), this._textInputRef && this._textInputRef.blur());
                        }),
                        (this._handleRecentSearchClick = (e) => {
                            const { analytics: t, onQueryChange: n } = this.props;
                            n(e), t.scribe({ component: "recent_search", action: "click" }), this._handleSearchChangeInner(e);
                        }),
                        (this._handleClearRecentSearch = (e, t) => {
                            const { analytics: n, clearRecentSearch: r } = this.props;
                            e.stopPropagation(), e.preventDefault(), n.scribe({ component: "recent_search", action: "clear" }), r(t);
                        });
                }
                componentDidMount() {
                    const { location: e } = this.props;
                    e?.state?.searchQuery && this._handleSearchChangeInner(e?.state?.searchQuery), this._textInputRef && this._textInputRef.focus();
                }
                componentDidUpdate(e) {
                    const { analytics: t, query: n, recentSearches: r } = this.props;
                    e.query || !n || r.includes(n) || t.scribe({ component: "search", action: "began_typing" });
                }
                render() {
                    const { location: e, query: t, searchFetchStatus: n } = this.props,
                        { tab: a } = e?.state || {},
                        s = [Be, Ve, Ge, Ue].map((t) => ({ key: t, label: t, "aria-label": t, isActive: () => a === t || (!a && t === Be), to: { ...e, state: { ...e.state, tab: t } } }));
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { style: Ke.searchInput }, r.createElement(h.ZP, { "aria-label": we, icon: r.createElement(g.default, null), onPress: this._handleHideRecentSearches, pullLeft: !0, type: "primaryText" }), r.createElement(d.Z, { Icon: E.default, autoComplete: "off", onChange: this._handleSearchChange, onClear: this._handleSearchClear, onSubmitEditing: this._handleAddRecentSearch, placeholder: Ae, ref: this._setInputRef, value: t, withClearButton: !0 })), t || a === Ve || a === Ge || a === Ue ? r.createElement(r.Fragment, null, r.createElement(S.Z, { links: s }), this._renderTabContent()) : r.createElement(C.Z, { "aria-label": $e, fetchStatus: n, onRequestRetry: this._handleRefetchSearch, render: this._renderSearchResults }));
                }
            }
            (je.contextType = v.rC), (je.defaultProps = { recentSearches: [], searchConversationIds: [], query: "" });
            const Ke = m.default.create((e) => ({ emptyState: { marginTop: e.spaces.space32 }, searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, flexDirection: "row", alignItems: "center", zIndex: 1 }, searchInputBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, footerContainer: { marginVertical: e.spaces.space32 } })),
                Xe = (0, Z.ZP)(de(je));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-6195aaff.7edc369a.js.map
