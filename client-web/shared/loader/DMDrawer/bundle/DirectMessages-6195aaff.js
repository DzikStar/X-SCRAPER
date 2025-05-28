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
            n.d(t, { Z: () => Je });
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
                C = n(33104),
                b = n(290402),
                f = n(822228),
                S = n(965245),
                v = n(507651),
                y = n(443781),
                Z = n(144256),
                P = n(500002),
                R = n(275365),
                T = n(147143),
                M = n(622333),
                x = n(11582),
                F = n(511495),
                N = n(340130),
                k = n(886559),
                D = n(257444),
                w = n(420412),
                $ = n(430895),
                A = n(125966),
                q = n(25001),
                H = n(246851),
                L = n(87063),
                O = n(71620),
                Q = n(668214);
            const z = (e, { module: t }) => t.selectItems(e),
                B = (e, { module: t }) => t.selectFetchStatus(e),
                G = (0, Q.Z)()
                    .propsFromState(() => ({ fetchStatus: B, sliceItems: z }))
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
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, O.zr)("DM_SEARCH_ALL_CONTEXT"), fetchSearchIfNeeded: e.fetchIfNeeded })),
                U = p().ffd9cfe6;
            function V(e) {
                const { location: t, tabLabel: n } = e;
                return r.createElement(o.Z, { style: W.footer }, r.createElement(l.ZP, { link: { pathname: t.pathname, state: { tab: n } } }, U));
            }
            const W = m.default.create((e) => ({ footer: { backgroundColor: e.colors.cellBackground, paddingStart: e.spaces.space16, paddingVertical: e.spaces.space12, alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor } })),
                j = p().c94ac69e,
                K = p().a2f81050,
                X = p().g2fd3206;
            const J = G(function (e) {
                    const t = r.useContext(y.rC),
                        { fetchStatus: n, loadingLabel: a, module: s } = e,
                        o = (0, H.Z)(s),
                        c = t.featureSwitches.getNumberValue("dm_inbox_search_groups_bucket_size"),
                        l = t.featureSwitches.getNumberValue("dm_inbox_search_messages_bucket_size"),
                        i = t.featureSwitches.getNumberValue("dm_inbox_search_people_bucket_size"),
                        h = r.useCallback(() => {
                            const { createLocalApiErrorHandler: t, fetchSearchIfNeeded: n } = e;
                            n().catch(t());
                        }, [e]);
                    r.useEffect(() => {
                        o !== s && n !== L.Z.FAILED && h();
                    }, [n, h, s, o]);
                    const d = ({ headerText: e, icon: t }) => r.createElement(x.ZP, { headerText: e, icon: t }),
                        m = () => {
                            const { entryIds: t, messageConversationIds: n, messageHighlightingTokens: a, pinConversation: s, renderInboxItem: o, unpinConversation: c } = e;
                            return r.createElement(r.Fragment, null, d({ icon: A.default, headerText: K }), t.map((e, r) => (e ? ((e) => o({ conversationIds: n, isMessageItem: !0, messageIds: t, pinConversation: s, unpinConversation: c, highlightingTokens: a })(e))(e) : null)).slice(0, l));
                        };
                    return r.createElement(b.Z, {
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
                                                return r.createElement(r.Fragment, null, d({ icon: q.default, headerText: X }), n.map((e, r) => (e ? s({ conversationIds: n, pinConversation: a, unpinConversation: o, highlightingTokens: t })(e) : null)).slice(0, i));
                                            })()
                                          : null,
                                      h && !g ? r.createElement(w.Z, null) : null,
                                      g ? r.createElement(V, { location: n, tabLabel: X }) : null,
                                      t.length
                                          ? (() => {
                                                const { groupConversationIds: t, groupHighlightingTokens: n, pinConversation: a, renderInboxItem: s, unpinConversation: o } = e;
                                                return r.createElement(r.Fragment, null, d({ icon: $.default, headerText: j }), t.map((e, r) => (e ? s({ conversationIds: t, pinConversation: a, unpinConversation: o, highlightingTokens: n })(e) : null)).slice(0, c));
                                            })()
                                          : null,
                                      u ? r.createElement(V, { location: n, tabLabel: j }) : null,
                                      a.length ? m() : null,
                                      p ? r.createElement(V, { location: n, tabLabel: K }) : null,
                                  )
                                : o();
                        },
                    });
                }),
                Y = J;
            var ee = n(24949),
                te = n(599138);
            const ne = (e, t) => t.query,
                re = (0, Q.Z)().propsFromState(() => ({ sliceModule: (0, ee.P1)(ne, (e) => (e ? (0, te.Z)(e) : void 0)) }))((e) => {
                    const { loadingLabel: t, location: n, pinConversation: a, query: s, renderEmptyState: o, renderInboxItem: c, sliceModule: l, unpinConversation: i } = e;
                    return l ? r.createElement(Y, { loadingLabel: t, location: n, module: l, pinConversation: a, query: s, renderEmptyState: o, renderInboxItem: c, unpinConversation: i }) : o();
                }),
                ae = re;
            var se = n(296196),
                oe = n(312771);
            const ce = se.selectRecentSearches,
                le = (e, t) => (t.query ? se.selectSearchConversations(e, t.query) : []),
                ie = (e, t) => (t.query ? se.selectSearchFetchStatus(e, t.query) : oe.ZP.LOADED),
                he = (e, t) => t.conversationIds || [],
                de = (e, t) => (e?.length ? t.filter((t) => e.indexOf(t) > -1) : e),
                me = (0, Q.Z)()
                    .propsFromState(() => ({ conversationIds: he, recentSearches: ce, searchFetchStatus: ie, searchConversationIds: le }))
                    .adjustStateProps(({ conversationIds: e, recentSearches: t, searchConversationIds: n, searchFetchStatus: r }) => ({ conversationIds: e, recentSearches: t, searchFetchStatus: r, searchConversationIds: de(n, e) }))
                    .propsFromActions(() => ({ addRecentSearch: se.addRecentSearches, createLocalApiErrorHandler: (0, O.zr)("DIRECT_MESSAGES_SEARCH"), search: se.searchConversations, clearRecentSearch: se.clearRecentSearch, clearRecentSearches: se.clearRecentSearches }));
            var ue = n(618012),
                pe = n(705414),
                ge = n(506899),
                Ee = (n(585488), n(908478)),
                Ie = n(771613),
                _e = n(736063),
                Ce = n(125363),
                be = n(674420),
                fe = n(127218);
            const Se = pe.Z,
                ve = ue.Z,
                ye = "DM_CONVERSATION_SEARCH",
                Ze = { context: ye },
                Pe = (e) => e,
                Re = (e) => {
                    const { footer: t, noItemsRenderer: n, onScrollEnd: a, pinConversation: s, renderInboxItem: o, searchTerm: c, tabType: l, unpinConversation: i } = e,
                        h = (0, Ce.I0)(),
                        d = !0,
                        m = l === N.TG.GROUPS ? Se : ve,
                        { data: u, fetchNext: p, hasNext: g } = (0, fe.C)(m, { query: c, withConversationQueryHighlights: d });
                    let E;
                    u?.dm_group_convo_slice_result ? (E = u?.dm_group_convo_slice_result?.items) : u?.dm_people_convo_slice_result && (E = u?.dm_people_convo_slice_result?.items);
                    const {
                            entities: I,
                            highlightingTokens: _,
                            normalizedConversations: C,
                        } = r.useMemo(() => {
                            const e = E?.map((e) => e?.dm_convo_search) || {},
                                t = E?.map((e) => e?.highlighting?.query_tokens),
                                n = (0, ge.Fv)(e, [Ie.ZP]);
                            return { normalizedConversations: n, entities: { ...n?.entities }, highlightingTokens: t };
                        }, [E, d]),
                        b = (0, H.Z)(u);
                    return (
                        r.useEffect(() => {
                            (0, Ee.Z)(u, b) || h((0, be.f)(I, !0));
                        }, [I, u, b, h]),
                        r.createElement(S.Z, { cacheKey: ye, footer: g ? null : t, identityFunction: Pe, items: C?.result, noItemsRenderer: n, onNearEnd: p, onScrollEnd: a, renderer: o({ conversationIds: C?.result, isMessageItem: !1, pinConversation: s, unpinConversation: i, highlightingTokens: _ }), withoutHeadroom: !0 })
                    );
                };
            function Te(e) {
                return r.createElement(_e.H, { errorConfig: Ze }, r.createElement(Re, e));
            }
            const Me = n(463450).Z,
                xe = "DM_MESSAGE_SEARCH",
                Fe = { context: xe },
                Ne = (e) => e,
                ke = (e) => {
                    const { footer: t, noItemsRenderer: n, onScrollEnd: a, pinConversation: s, renderInboxItem: o, searchTerm: c, unpinConversation: l } = e,
                        i = (0, Ce.I0)(),
                        h = !0,
                        { data: d, fetchNext: m, hasNext: u } = (0, fe.C)(Me, { query: c, withAttachments: !0, withMessageQueryHighlights: h }),
                        {
                            entities: p,
                            highlightingTokens: g,
                            normalizedConversations: E,
                            normalizedMessages: I,
                        } = r.useMemo(() => {
                            const e = d?.dm_message_slice_result?.items?.map((e) => e?.dm_event?.legacy?.conversation),
                                t = d?.dm_message_slice_result?.items,
                                n = t?.map((e) => e?.highlighting?.query_tokens),
                                r = (0, ge.Fv)(e, [Ie.ZP]),
                                a = (0, ge.Fv)(t, [Ie.JJ]);
                            return { normalizedConversations: r, normalizedMessages: a, entities: { ...r?.entities, ...a?.entities }, highlightingTokens: n };
                        }, [d?.dm_message_slice_result?.items, h]),
                        _ = (0, H.Z)(d);
                    return (
                        r.useEffect(() => {
                            (0, Ee.Z)(d, _) || i((0, be.f)(p, !0));
                        }, [p, d, _, i]),
                        r.createElement(S.Z, { cacheKey: xe, footer: u ? null : t, identityFunction: Ne, items: I?.result, noItemsRenderer: n, onNearEnd: m, onScrollEnd: a, renderer: o({ conversationIds: E?.result, isMessageItem: !0, messageIds: I?.result, pinConversation: s, unpinConversation: l, highlightingTokens: g }), withoutHeadroom: !0 })
                    );
                };
            function De(e) {
                return r.createElement(_e.H, { errorConfig: Fe }, r.createElement(ke, e));
            }
            const we = (e) => e,
                $e = p().b08821f4,
                Ae = p().a66ac766,
                qe = p().a846382a,
                He = p().b9dae4f4,
                Le = p().e7fb2028,
                Oe = p().ae111c99,
                Qe = p().e8581cce,
                ze = p().f08940ac,
                Be = p().i5d7593a,
                Ge = p().f8321d82,
                Ue = p().c94ac69e,
                Ve = p().a2f81050,
                We = p().g2fd3206,
                je = p().fb3c8e74;
            class Ke extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { debouncedQuery: "", isLoadingMore: !1, isRefreshing: !1 }),
                        (this._setInputRef = (e) => {
                            this._textInputRef = e;
                        }),
                        (this._handleConversationClick = (e, t, n, r) => {
                            const { analytics: a } = this.props,
                                s = n?.participants.length || 0,
                                o = n?.type === R.eD.GROUP;
                            a.scribe({ element: "thread", action: "click", data: { event_value: this.props.query.length, conversation_id: t, conversation_participant_count: s, conversation_type: o ? N.NK.GROUP : N.NK.ONE_TO_ONE, position: r } });
                        }),
                        (this._renderEmptyDMSearchInbox = () => {
                            const { analytics: e, query: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            return n && t ? (e.scribe({ component: "search", element: "results", action: "empty" }), r.createElement(c.Z, { buttonLink: "/messages/compose", buttonText: ze, header: Oe({ query: n }), message: Qe, onButtonPress: this._handleComposeButtonPress })) : r.createElement(o.Z, { style: Xe.emptyState }, r.createElement(l.ZP, { align: "center", color: "gray700" }, Be));
                        }),
                        (this._renderRecentSearches = () => {
                            const { analytics: e, query: t, recentSearches: n } = this.props;
                            return n.length && !t
                                ? r.createElement(
                                      r.Fragment,
                                      null,
                                      r.createElement(x.ZP, { analytics: e, clearRecentSearches: this._clearRecentSearches, headerText: je, withClearButton: !0 }),
                                      n.map((e) => r.createElement(F.Z, { clearRecentSearch: (t) => this._handleClearRecentSearch(t, e), handleRecentSearchClick: () => this._handleRecentSearchClick(e), key: e, recentSearch: e })),
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
                            return r.createElement(ae, { loadingLabel: Ae, location: e, pinConversation: t, query: a, renderEmptyState: this._renderEmptyDMSearchInbox, renderInboxItem: this._renderSearchInboxItem, unpinConversation: n });
                        }),
                        (this._renderConversationsTab = (e) => {
                            const { pinConversation: t, unpinConversation: n } = this.props,
                                { debouncedQuery: a } = this.state;
                            return r.createElement(Te, { footer: this._renderFooter(), noItemsRenderer: this._renderEmptyDMSearchInbox, onScrollEnd: this._handleScrollEnd, pinConversation: t, renderInboxItem: this._renderSearchInboxItem, searchTerm: a, tabType: e ? N.TG.GROUPS : N.TG.PEOPLE, unpinConversation: n });
                        }),
                        (this._renderMessagesTab = () => {
                            const { pinConversation: e, unpinConversation: t } = this.props,
                                { debouncedQuery: n } = this.state;
                            return n ? r.createElement(De, { footer: this._renderFooter(), noItemsRenderer: this._renderEmptyDMSearchInbox, onScrollEnd: this._handleScrollEnd, pinConversation: e, renderInboxItem: this._renderSearchInboxItem, searchTerm: n, unpinConversation: t }) : this._renderEmptyDMSearchInbox();
                        }),
                        (this._renderTabContent = () => {
                            const { location: e } = this.props,
                                { tab: t } = e?.state || {};
                            switch (t) {
                                case We:
                                    return this._renderConversationsTab(!1);
                                case Ue:
                                    return this._renderConversationsTab(!0);
                                case Ve:
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
                                    b = C ? C + 1 : 0;
                                s()(!!h, "viewerUserId must be defined"), i && i(!0);
                                const S = t?.length && (0, I.Z)(C) && C >= 0 ? t[C] : void 0,
                                    v = (e) => r.createElement(D.Z, { conversationId: E, highlightingTokens: S, inboxType: T._2.PRIMARY, isActive: e, isMessageItem: n, key: E, link: _, messageId: g, onClick: this._handleConversationClick, perspective: h, pinConversation: o, position: b, searchQuery: m, unpinConversation: c });
                                return r.createElement(f.Z, { exact: !1, path: _.pathname }, v);
                            }),
                        (this._renderSearchResults = () => {
                            const { accessibilityTitle: e, pinConversation: t, searchConversationIds: n, unpinConversation: a } = this.props,
                                { isRefreshing: s } = this.state;
                            return r.createElement(C.Z, null, r.createElement(Z.Z, { isRefreshing: s, onRefresh: this._handlePullToRefresh }, r.createElement(S.Z, { accessibilityTitle: e, anchoring: k.Z, assumedItemHeight: 100, cacheKey: "dmSearchInbox", footer: this._renderFooter(), identityFunction: we, items: n, noItemsRenderer: this._renderRecentSearches, onNearEnd: this._handleNearEnd, onScrollEnd: this._handleScrollEnd, renderer: this._renderSearchInboxItem({ conversationIds: n, pinConversation: t, unpinConversation: a }), role: "tablist", withoutHeadroom: !0 })));
                        }),
                        (this._renderFooter = () => (this.state.isLoadingMore ? r.createElement(M.Z, null) : r.createElement(o.Z, { style: Xe.footerContainer }, r.createElement(l.ZP, { align: "center", size: "body", weight: "bold" }, Le), r.createElement(i.Z, { interactiveStyles: null }, r.createElement(l.ZP, { align: "center", color: "primary", onPress: this._handleFooterClick, size: "subtext2", withInteractiveStyling: !0 }, He))))),
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
                        s = [Ge, We, Ue, Ve].map((t) => ({ key: t, label: t, "aria-label": t, isActive: () => a === t || (!a && t === Ge), to: { ...e, state: { ...e.state, tab: t } } }));
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { style: Xe.searchInput }, r.createElement(h.ZP, { "aria-label": $e, icon: r.createElement(g.default, null), onPress: this._handleHideRecentSearches, pullLeft: !0, type: "primaryText" }), r.createElement(d.Z, { Icon: E.default, autoComplete: "off", onChange: this._handleSearchChange, onClear: this._handleSearchClear, onSubmitEditing: this._handleAddRecentSearch, placeholder: qe, ref: this._setInputRef, value: t, withClearButton: !0 })), t || a === We || a === Ue || a === Ve ? r.createElement(r.Fragment, null, r.createElement(v.Z, { links: s }), this._renderTabContent()) : r.createElement(b.Z, { "aria-label": Ae, fetchStatus: n, onRequestRetry: this._handleRefetchSearch, render: this._renderSearchResults }));
                }
            }
            (Ke.contextType = y.rC), (Ke.defaultProps = { recentSearches: [], searchConversationIds: [], query: "" });
            const Xe = m.default.create((e) => ({ emptyState: { marginTop: e.spaces.space32 }, searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, flexDirection: "row", alignItems: "center", zIndex: 1 }, searchInputBorder: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, footerContainer: { marginVertical: e.spaces.space32 } })),
                Je = (0, P.ZP)(me(Ke));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-6195aaff.69546cca.js.map
