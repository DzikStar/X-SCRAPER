"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages-e8fb8688"],
    {
        554518: (e, t, n) => {
            n.d(t, { Ao: () => p, OI: () => u, Pq: () => o, QF: () => c, Tj: () => i, eG: () => m, uU: () => l });
            var r = n(202784),
                s = n(615656);
            const a = { isSelecting: !1, selectedConversationIds: [] },
                o = "DM_BULK_ACTION_START",
                i = "DM_BULK_ACTION_END",
                c = "DM_BULK_ACTION_SELECT",
                l = "DM_BULK_ACTION_DESELECT",
                h = r.createContext(a),
                d = r.createContext(() => {});
            function u(e) {
                const { children: t } = e,
                    [n, s] = r.useReducer(_, a);
                return r.createElement(h.Provider, { value: n }, r.createElement(d.Provider, { value: s }, t));
            }
            function p() {
                return r.useContext(h);
            }
            function m() {
                return r.useContext(d);
            }
            function _(e, t) {
                switch (t.type) {
                    case o:
                        return { ...e, isSelecting: !0 };
                    case i:
                        return a;
                    case c:
                        return { ...e, selectedConversationIds: [...e.selectedConversationIds, t.id || ""] };
                    case l:
                        return { ...e, selectedConversationIds: e.selectedConversationIds.filter((e) => e !== t.id) };
                    default:
                        throw (0, s.ZP)(`Unknown action: ${t.type}`);
                }
            }
        },
        271702: (e, t, n) => {
            n.d(t, { a: () => o, s: () => a });
            var r = n(202784);
            const s = r.createContext({ tag: null, setTag: () => {} }),
                a = ({ children: e }) => {
                    const [t, n] = r.useState(null);
                    return r.createElement(s.Provider, { value: { tag: t, setTag: n } }, e);
                },
                o = () => r.useContext(s);
        },
        288331: (e, t, n) => {
            n.d(t, { Z: () => j });
            var r = n(202784),
                s = n(614983),
                a = n.n(s),
                o = n(726499),
                i = n(325686),
                c = n(371344),
                l = n(108362),
                h = n(392237),
                d = n(111677),
                u = n.n(d),
                p = n(956272),
                m = n(827515),
                _ = n(2138),
                b = n(415725),
                C = n(789831),
                y = n(290402),
                I = n(965245),
                f = n(443781),
                g = n(813928),
                E = n(652904),
                w = n(144256),
                v = n(225351),
                S = n(111311),
                Z = n(500002),
                x = n(147143),
                P = n(257444),
                k = n(110186),
                T = n(771449),
                R = n(795036),
                A = n(886559),
                D = n(731708),
                L = n(529356),
                F = n(516951),
                N = n(175856),
                U = n(668214);
            const H = (0, U.Z)()
                    .propsFromState(() => ({ shouldShowPrompt: (e, t) => (0, N.t5)(e, N.uz) }))
                    .propsFromActions(() => ({ addFlag: N.pj }))
                    .withAnalytics({ component: "dm_education_flags_prompt" }),
                M = u().fd6150fc,
                Q = r.createElement(u().I18NFormatMessage, { $i18n: "fa4f5b49" }, r.createElement(D.ZP, { link: "/privacy" }, u().c7e8a9ee)),
                B = u().j24c37b2,
                q = H((e) => {
                    const { addFlag: t, analytics: n, shouldShowPrompt: s } = e,
                        { featureSwitches: a } = r.useContext(f.rC);
                    if (!(s && a.isTrue("dm_education_flags_prompt"))) return !1;
                    return (
                        n.scribeAction("impression"),
                        r.createElement(L.Z, {
                            actionLabel: B,
                            headline: M,
                            onAction: () => {
                                n.scribeAction("click"), t(N.uz);
                            },
                            onClose: F.Z,
                            subtext: Q,
                            withCloseButton: !1,
                        })
                    );
                });
            var W = n(71620),
                K = n(296196);
            const z = (0, U.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, W.zr)("DIRECT_MESSAGES_INBOX"), fetchUpdates: K.fetchUpdatesIfNeeded })),
                O = (e) => e,
                V = u().a66ac766,
                $ = u().a846382a;
            class Y extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { showSearchView: !!this.props?.location?.state?.searchQuery, searchQuery: this.props?.location?.state?.searchQuery ?? "" }),
                        (this._render = () => {
                            const { withPinnedInbox: e } = this.props;
                            return e ? this._renderPinnedInbox() : this._renderInbox();
                        }),
                        (this._renderFocusedSearch = () => {
                            const { accessibilityTitle: e, analytics: t, conversationIds: n } = this.props,
                                { searchQuery: s } = this.state;
                            return r.createElement(R.Z, { accessibilityTitle: e, analytics: t, conversationIds: n, hideRecentSearches: this._hideRecentSearches, onQueryChange: this._handleQueryChange, query: s });
                        }),
                        (this._renderInbox = () => {
                            const { accessibilityTitle: e, conversationIds: t, footer: n, isDrawer: s, isRefreshing: a, renderEmptyDMInbox: o, virtualScrollerCacheKey: i } = this.props,
                                { showSearchView: c } = this.state;
                            return c || this.props.location?.state?.searchQuery ? this._renderFocusedSearch() : r.createElement(w.Z, { isRefreshing: a, onRefresh: this._handlePullToRefresh }, i && t ? r.createElement(I.Z, { accessibilityTitle: e, anchoring: A.Z, assumedItemHeight: 100, cacheKey: i, footer: n, header: this._renderHeader(), identityFunction: O, items: t, noItemsRenderer: o, onNearEnd: this._handleNearEnd, renderer: this._renderInboxItem({ conversationIds: t }), role: "tablist", withKeyboardShortcuts: !s, withoutHeadroom: !0 }) : null);
                        }),
                        (this._handleNearEnd = () => {
                            this._handleHistoryRequest();
                        }),
                        (this._handleQueryChange = (e) => {
                            this.setState({ searchQuery: e });
                        }),
                        (this._handleSearchChange = ({ currentTarget: { value: e } }) => {
                            this.state.showSearchView || this.setState({ showSearchView: !0 });
                        }),
                        (this._handleSearchClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "search", action: "click" }), this.setState({ showSearchView: !0 });
                        }),
                        (this._hideRecentSearches = () => {
                            this.setState({ showSearchView: !1, searchQuery: "" });
                        }),
                        (this._renderInboxItem =
                            ({ conversationIds: e, pinConversation: t, unpinConversation: n }) =>
                            (s, o) => {
                                const { viewerUserId: i } = this.context,
                                    { location: c } = this.props,
                                    { searchQuery: l } = this.state,
                                    h = s,
                                    d = { pathname: `/messages/${h}`, state: { ...c?.state, entryPoint: null, searchQuery: l } },
                                    u = h && e?.length ? e.indexOf(h) : null,
                                    p = (0, m.Z)(u) ? u + 1 : 0;
                                return a()(!!i, "viewerUserId must be defined"), o && o(!0), r.createElement(b.Z, { exact: !1, key: h, path: d.pathname }, (e) => r.createElement(P.Z, { conversationId: h, inboxType: this.props.inboxType, isActive: e, key: h, link: d, onClick: this._handleConversationClick, perspective: i, pinConversation: t, position: p, searchQuery: l, unpinConversation: n }));
                            }),
                        (this._renderPinnedInbox = () => {
                            const { accessibilityTitle: e, conversationIds: t, footer: n, isDrawer: s, renderEmptyDMInbox: a, virtualScrollerCacheKey: o } = this.props,
                                { searchQuery: i, showSearchView: c } = this.state;
                            return t.length ? r.createElement(T.ZP, { accessibilityTitle: e, cacheKey: o, conversationIds: t, footer: n, header: this._renderHeader(), hideRecentSearches: this._hideRecentSearches, onNearEnd: this._handleNearEnd, onQueryChange: this._handleQueryChange, query: i, renderEmptyDMInbox: a, renderInboxItem: this._renderInboxItem, showSearchView: c, withKeyboardShortcuts: !s }) : a();
                        }),
                        (this._handleFetchInitialWrapper = () => {
                            this._handleFetchInitial();
                        }),
                        (this._handleFetchInitial = () => {
                            const { createLocalApiErrorHandler: e, fetchInboxHistory: t, fetchUpdates: n } = this.props;
                            return t()
                                .then(this._updateLastSeenEventId, e())
                                .then(() => {
                                    this._updatePolling.start();
                                })
                                .then(() => n().catch(e()));
                        }),
                        (this._handleConversationClick = (e, t) => {
                            const { customCellClick: n } = this.props;
                            n && n(e, t);
                        }),
                        (this._handleEmptyDMInboxImpression = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ component: "empty_message", action: "impression" });
                        }),
                        (this._handlePullToRefresh = () => {
                            const { createLocalApiErrorHandler: e, fetchInboxHistory: t } = this.props;
                            t().then(this._updateLastSeenEventId, e());
                        }),
                        (this._updateLastSeenEventIdIfActive = () => {
                            if ("background" !== o.Z.currentState) return this._updateLastSeenEventId();
                        }),
                        (this._renderHeader = () => {
                            const { renderStickyContent: e, withDmSearch: t, withTagsFilter: n } = this.props;
                            return r.createElement(r.Fragment, null, t ? r.createElement(i.Z, { onClick: this._handleSearchClick, style: G.searchInput }, r.createElement(c.Z, { Icon: p.default, autoComplete: "off", isCompact: !0, onChange: this._handleSearchChange, placeholder: $, withClearButton: !0 })) : null, n && this._isDMLabelEnabled && r.createElement(k.Z, null), e ? e() : null);
                        }),
                        (this._updateLastSeenEventId = () => {
                            const { createLocalApiErrorHandler: e, updateLastSeenEventId: t } = this.props;
                            return t().catch(e());
                        }),
                        (this._fab = r.createElement(g.Z, null)),
                        (this._isDMLabelEnabled = this.context.featureSwitches.isTrue("responsive_web_dm_label_enabled"));
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchInboxHistory: t, fetchUpdates: n } = this.props;
                    return (
                        (this._updatePolling = new S.Z(
                            () => {
                                n().then(this._updateLastSeenEventIdIfActive, e(v.RU));
                            },
                            { interval: 8e3 },
                        )),
                        (this._handleHistoryRequest = (0, _.Z)((...n) => {
                            t(...n).catch(e());
                        }, 1e3)),
                        this._handleFetchInitial()
                    );
                }
                componentWillUnmount() {
                    this._updatePolling.stop();
                }
                render() {
                    return r.createElement(E.Z, { locationKey: "messagesRoot" }, r.createElement(q, null), r.createElement(C.Z, { component: l.Z, fab: this._fab, style: G.root }, r.createElement(y.Z, { "aria-label": V, fetchStatus: this.props.fetchStatus, onRequestRetry: this._handleFetchInitialWrapper, render: this._render })));
                }
            }
            (Y.contextType = f.rC), (Y.defaultProps = { conversationIds: [], inboxType: x._2.PRIMARY, isDrawer: !1, withDmSearch: !1, withPinnedInbox: !1, withTagsFilter: !1 });
            const j = (0, Z.ZP)(z(Y)),
                G = h.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1 }, searchInput: { backgroundColor: e.colors.cellBackground, padding: e.spaces.space12, zIndex: 1 } }));
        },
        826760: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                s = n(457311),
                a = n(111677),
                o = n.n(a),
                i = n(725516);
            const c = o().a676a876,
                l = o().h52877aa,
                h = o().efe8fda0;
            function d(e) {
                const t = (0, i.z)();
                return r.createElement(
                    r.Fragment,
                    null,
                    e.messageRequestPivot,
                    r.createElement(s.Z, {
                        buttonLink: "/messages/compose",
                        buttonText: h,
                        header: c,
                        message: l,
                        onImpression: () => {
                            t.scribe({ component: "empty_message", action: "impression" });
                        },
                    }),
                );
            }
        },
        149290: (e, t, n) => {
            n.d(t, { Z: () => S });
            var r = n(202784),
                s = n(325686),
                a = n(310088),
                o = n(779610),
                i = n(731708),
                c = n(909377),
                l = n(392237),
                h = n(111677),
                d = n.n(h),
                u = n(256061),
                p = n(725516),
                m = n(147143),
                _ = n(691108),
                b = n(844054);
            const C = d().f041be05,
                y = d().a2fad0f3,
                I = d().cbddf365,
                f = d().fac945ad,
                g = d().h6beb5fb,
                E = (e) => {
                    const { newUntrustedWithSocialProof: t, newUntrustedWithoutSocialProof: n, oldUntrustedWithSocialProof: r, oldUntrustedWithoutSocialProof: s } = e;
                    let a = "normal",
                        o = "",
                        i = !1;
                    return t > 0 ? ((o = y({ stringCount: w(t), count: t })), (a = "bold"), (i = !0)) : n > 0 ? ((o = f({ stringCount: w(n), count: n })), (a = "bold"), (i = !0)) : r > 0 ? ((o = I({ stringCount: w(r), count: r })), (a = "medium")) : s > 0 && ((o = C({ stringCount: w(s), count: s })), (a = "medium")), { titleWeight: a, description: o, showNotificationDot: i };
                },
                w = (e) => (e > 10 ? g({ count: 10 }) : e),
                v = d().cf2d1048;
            function S(e) {
                const t = (0, p.z)(),
                    { allowUntrustedInbox: n, secondaryInboxCounts: l } = e,
                    h = [Z.requestPivotContainer],
                    { description: d, showNotificationDot: C, titleWeight: y } = E(l);
                return n
                    ? r.createElement(
                          s.Z,
                          { style: h },
                          r.createElement(o.Z, {
                              description: d,
                              label: r.createElement(i.ZP, { weight: y }, v),
                              link: (0, b.Jn)(m._2.SECONDARY),
                              onPress: () => {
                                  t.scribe({ element: "requests_pivot", action: "click" });
                              },
                              renderRightContent: ((I = C), I ? () => r.createElement(a.Z, { pip: !0, standalone: !0, style: Z.requestPivotPip, truncatedCountFormatter: () => "", unreadCountLabel: () => "" }) : () => null),
                              thumbnail: r.createElement(s.Z, { testID: _.Z.untrustedThumbnail }, r.createElement(c.Z, { Icon: u.default, color: "neutral" })),
                              withoutArrow: !0,
                          }),
                      )
                    : null;
                var I;
            }
            const Z = l.default.create((e) => ({ requestPivotContainer: { backgroundColor: e.colors.cellBackground, zIndex: 2 }, requestPivotPip: { border: "none", height: `calc(${e.spaces.space8} + ${e.spaces.space2})`, marginBottom: e.spaces.space12, width: `calc(${e.spaces.space8} + ${e.spaces.space2})` } }));
        },
        763526: (e, t, n) => {
            n.d(t, { J: () => m });
            var r = n(202784),
                s = n(779610),
                a = n(731708),
                o = n(868634),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                h = n(829110),
                d = n(952793);
            const u = l().h5e38204,
                p = l().h7d5d9fa,
                m = () => {
                    const e = (0, d.hC)("rweb_xchat_enabled"),
                        t = (0, d.hC)("rweb_xchat_old_dms_inbox_item");
                    return e && t ? r.createElement(s.Z, { label: r.createElement(a.ZP, { size: "headline2", weight: "bold" }, u), link: "/i/chat", renderRightContent: () => r.createElement(o.ZP, { background: "blue500", style: _.badge }, p), thumbnail: r.createElement(h.default, { style: _.icon }), withoutArrow: !0 }) : null;
                },
                _ = i.default.create((e) => ({ icon: { height: e.spaces.space28, width: e.spaces.space28, color: e.colors.text }, badge: { alignSelf: "center", marginEnd: e.spaces.space12 } }));
        },
        886559: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(459643);
            const s = { ...n(332878).Z, initialScrollHeadroom: (0, r.Z)(0), scrollHeadroom: (0, r.Z)(0), pinToNewestWhenAtNewest: !0 };
        },
        844054: (e, t, n) => {
            n.d(t, { $e: () => m, I0: () => C, Jn: () => b, LA: () => y, lW: () => _ });
            n(136728);
            var r = n(202784),
                s = n(325686),
                a = n(537392),
                o = n(731708),
                i = n(392237),
                c = n(111677),
                l = n.n(c),
                h = n(233935),
                d = n(10656),
                u = n(147143),
                p = n(949718);
            const m = l().bece84b4,
                _ = l().e7172d70,
                b = (e) => {
                    switch (e) {
                        case u._2.SECONDARY:
                            return "/messages/requests";
                        case u._2.TERTIARY:
                            return "/messages/requests/additional";
                        case u._2.PRIMARY:
                        default:
                            return "/messages";
                    }
                },
                C = (e, t) => r.createElement(h.Z, { pullRight: t, to: e }),
                y = (e) =>
                    r.createElement(a.ZP, null, ({ containerWidth: t }) => {
                        const n = d.Z.isTwoColumnLayout(t),
                            a = 0 === e.length;
                        return n || a ? null : r.createElement(s.Z, { style: I.stickyCopyContainer }, r.createElement(o.ZP, { style: I.stickyCopy }, p.ZP));
                    }),
                I = i.default.create((e) => ({ stickyCopyContainer: { backgroundColor: e.colors.cellBackground, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, zIndex: 1 }, stickyCopy: { color: e.colors.gray700, padding: e.spaces.space20 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages-e8fb8688.25d9ae3a.js.map
