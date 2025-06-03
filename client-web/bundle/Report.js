"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report"],
    {
        625661: (e, t, r) => {
            r.d(t, { ZP: () => u });
            var o = r(202784),
                s = r(614983),
                n = r.n(s),
                a = r(325686),
                i = r(370006),
                c = r(786998),
                l = r(929028),
                d = r(386802);
            function p(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: s, hideBackButton: n, isFullWidth: a, isLarge: l, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: f, style: C, subtitle: v, title: y, titleDomId: _, titleIconCell: w, titleIconCellSize: g, withBackground: b, withWideContainer: S } = this.props,
                        { isModal: T } = this.context,
                        R = n ? d : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!b, T, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(c.Z, { centerTitle: t, centeredLogo: r, isFullWidth: a, isLarge: l, leftControl: R, middleControl: u, position: p(h, T, s), rightControl: m, style: C, subtitle: v, title: y, titleDomId: _, titleIconCell: w, titleIconCellSize: g, withBackground: k, withWideContainer: S }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = l.Z.getBackgroundStyles();
                    return t ? o.createElement(a.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, r) => {
            r.d(t, { Z: () => m });
            var o = r(807896),
                s = r(202784),
                n = r(182056),
                a = r(879113),
                i = r(392237),
                c = r(111677),
                l = r.n(c),
                d = r(968478);
            const p = l().aa6e3300,
                u = ({ retryMessage: e, ...t }, r) => {
                    const i = n.Z.isOnline();
                    return s.createElement(a.Z, (0, o.Z)({}, t, { icon: i ? void 0 : s.createElement(d.default, { style: h.icon }), retryMessage: i ? e : p }));
                },
                h = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = s.forwardRef(u);
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => f, w: () => h });
            var o = r(202784),
                s = r(325686),
                n = r(108362),
                a = r(386802),
                i = r(392237),
                c = r(652904),
                l = r(555079),
                d = r(625661),
                p = r(449067),
                u = r(715601);
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: a, hideBackButton: i, history: c, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, rightControl: C, secondaryBar: v, subtitle: y, title: _ } = this.props,
                                { isModal: w } = this.context;
                            return o.createElement(s.Z, { style: w ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (w ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !w, hideBackButton: i, history: c, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, ref: e, rightControl: C, secondaryBar: v, style: [w && m.appBarModal, t], subtitle: y, title: _, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: a, documentTitle: i, isFullWidth: l, isLarge: d, renderHeader: h, title: f, withoutBottomBarMobile: C } = this.props,
                        { isModal: v } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(c.Z, null, o.createElement(p.Z.Configure, { documentTitle: i, headerless: !0, title: f }), o.createElement(s.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, v && m.rootModal] }, !v && y, o.createElement(n.Z, { isFullWidth: l, isLarge: d, style: [m.container, v && m.containerModal, a] }, v ? o.createElement(u.Z, { style: m.viewport }, y, r) : r), t ? o.createElement(s.Z, { style: [m.bottomBarModal, !v && !C && m.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: l, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = h;
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                s = r(500002),
                n = r(668214),
                a = r(997174),
                i = r(118823);
            const c = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: n, search: a },
                            locationKey: i,
                        } = e;
                    let c = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (c = !0));
                    const l = s || i;
                    ((l && s !== i) || (!l && r !== n) || o !== a || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, s.ZP)(c(l));
        },
        545334: (e, t, r) => {
            r.d(t, { d: () => s });
            var o = r(111677);
            const s = r.n(o)().gf5e9ea6;
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => p, FK: () => y, GS: () => i, N1: () => h, PY: () => u, X6: () => _, cm: () => c });
            r(202784);
            var o = r(111677),
                s = r.n(o),
                n = r(391366),
                a = r(40904);
            const i = s().hb568af4,
                c = s().bb1cbeb6,
                l = (s().h2f62206, s().e67b2d65),
                d = s().f05597b3,
                p = (e) => l({ screenName: e }),
                u = (e) => d({ screenName: e }),
                h = (e, t, r) => {
                    const { muting: o, screen_name: s } = e;
                    return { text: o ? u(s) : p(s), onClick: o ? r : t, Icon: o ? n.default : a.default };
                },
                m = s().h59f52ee,
                f = s().eea0cbee,
                C = s().i29533b3,
                v = s().h129c3c3,
                y = (e) => (e ? ((e) => C({ screenName: e }))(e) : m),
                _ = (e) => (e ? ((e) => v({ screenName: e }))(e) : f);
        },
        712816: (e, t, r) => {
            r.d(t, { d: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, r) => {
            r.d(t, { D: () => s });
            var o = r(111677);
            const s = { defaultToast: { text: r.n(o)().ca96fe6e }, showToast: !0 };
        },
        730996: (e, t, r) => {
            r.d(t, { W: () => s, g: () => o });
            r(571372);
            const o = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function s(e) {
                switch (e) {
                    case "appealtweet":
                    case "limiteddiscoveryappealtweet":
                    case "profileonlydiscoveryappealtweet":
                    case "reportdmconversation":
                    case "hidetweet":
                    case "reportmoment":
                    case "removecommunitymember":
                    case "reporttweet":
                    case "reportlist":
                    case "reportprofile":
                    case "reportspace":
                    case "appealsuspension":
                    case "notification":
                        return e;
                    default:
                        throw new Error(`unexpected source ${e}`);
                }
            }
        },
        296196: (e, t, r) => {
            r.r(t),
                r.d(t, {
                    GLOBAL_STATE_KEY: () => f.Yf,
                    acceptConversation: () => n.tF,
                    addAvatarMedia: () => n._D,
                    addParticipants: () => n.ck,
                    addRecentSearches: () => Z,
                    addWelcomeMessageToConversation: () => n.Qe,
                    clearRecentSearch: () => I,
                    clearRecentSearches: () => x,
                    clearSearchCache: () => g,
                    default: () => L,
                    deleteConversations: () => n.S9,
                    disableMentionNotifications: () => n.BW,
                    disableNotifications: () => n.dq,
                    enableMentionNotifications: () => n.Ap,
                    enableNotifications: () => n.PZ,
                    fetchConversation: () => n.Um,
                    fetchConversationFromParticipants: () => n.sS,
                    fetchConversationFuture: () => n.OW,
                    fetchConversationHistoricalSnapshot: () => n.wm,
                    fetchConversationHistory: () => n.Be,
                    fetchConversationIfNeeded: () => n.sA,
                    fetchInbox: () => i.oH,
                    fetchInboxIfNeeded: () => i.C2,
                    fetchPermissions: () => n.qg,
                    fetchTrustedInboxHistory: () => i.vC,
                    fetchUntrustedInboxHistory: () => i.kK,
                    fetchUntrustedLowQualityInboxHistory: () => i.j7,
                    fetchUpdates: () => D.f9,
                    fetchUpdatesIfNeeded: () => D.hd,
                    leaveConversation: () => n.qH,
                    markAllAsRead: () => n.SF,
                    markConversationRead: () => n.v3,
                    markSpamStatus: () => a.kv,
                    muteDMUser: () => n.sj,
                    removeAvatarMedia: () => n.Xw,
                    removeConversation: () => n.Ae,
                    removeEntry: () => a.MY,
                    searchConversations: () => M,
                    selectConversation: () => n.xu,
                    selectConversationAvatarMediaId: () => n.aG,
                    selectConversationAvatarMediaIsUploading: () => n.W,
                    selectConversationAvatarMediaUploadProgress: () => n.UA,
                    selectConversationFetchStatus: () => n.Pr,
                    selectConversationIdsByInbox: () => i.g4,
                    selectConversationIsLoaded: () => n.gQ,
                    selectConversationIsRead: () => n.jT,
                    selectConversations: () => n.FS,
                    selectEntries: () => a.gm,
                    selectEntriesForConversation: () => a.iN,
                    selectEntry: () => a.WK,
                    selectFetchStatus: () => i.UD,
                    selectHasConversations: () => n.ax,
                    selectInboxCursor: () => i.Pt,
                    selectInboxIsLoaded: () => i.MB,
                    selectInboxTypeByConversation: () => n.Zg,
                    selectIsLoadingTop: () => i.xS,
                    selectLabelledConversationIds: () => i.Z3,
                    selectLastSeenEventIds: () => i.B7,
                    selectPinnedConversationIds: () => i.Kf,
                    selectRecentSearches: () => k,
                    selectRecipientCanNotDm: () => n.OF,
                    selectSearchConversations: () => A,
                    selectSearchFetchStatus: () => E,
                    selectUnreadCount: () => i.Sb,
                    selectUntrustedConversationCount: () => i.Oq,
                    selectUntrustedCounts: () => i.Re,
                    selectUntrustedCursor: () => i.aB,
                    selectUntrustedLowQualityConversationCount: () => i.ZI,
                    selectUntrustedLowQualityCursor: () => i.Gk,
                    selectUntrustedUnreadCount: () => i.k5,
                    selectUpdates: () => D.o8,
                    setConversationAvatar: () => n.X5,
                    toggleNotifications: () => n.$S,
                    unmuteDMUser: () => n.GP,
                    updateConversationAvatar: () => n.nI,
                    updateConversationName: () => n.FI,
                    updateConversationReadState: () => n.d0,
                    updateLastSeenEventId: () => i.kL,
                    updateTrustedLastSeenEventId: () => i.$7,
                    updateTyping: () => n.lT,
                    updateUntrustedLastSeenEventId: () => i.A4,
                });
            var o = r(118717),
                s = r(499627),
                n = r(613195),
                a = r(627279),
                i = r(720277),
                c = (r(136728), r(468811)),
                l = r.n(c),
                d = r(948322),
                p = r(917799),
                u = r(312771),
                h = r(390387),
                m = r(849585),
                f = r(147143);
            const C = "rweb.recentDMSearches",
                v = Object.freeze({ REQUEST: "rweb/directMessages/SEARCH_REQUEST", SUCCESS: "rweb/directMessages/SEARCH_SUCCESS", FAILURE: "rweb/directMessages/SEARCH_FAILURE" }),
                y = "rweb/directMessages/ADD_RECENT_SEARCHES",
                _ = (e) => ({ payload: e, type: y }),
                w = "rweb/directMessages/CLEAR_SEARCH_CACHE",
                g = () => ({ type: w }),
                b = "rweb/directMessages/CLEAR_RECENT_SEARCH",
                S = "rweb/directMessages/CLEAR_RECENT_SEARCHES",
                T = { searchResults: {}, recentSearches: [] };
            function R(e = T, t) {
                if (!t) return e;
                switch (t.type) {
                    case y:
                    case b:
                        return { ...e, recentSearches: t.payload || [] };
                    case S:
                        return { ...e, recentSearches: [] };
                    case v.REQUEST: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : u.ZP.LOADING } };
                        return { ...e, searchResults: a };
                    }
                    case v.FAILURE: {
                        const { fetchNextPage: r, preserveResults: o, query: s } = t.meta || {},
                            n = e.searchResults ? e.searchResults[s] : {},
                            a = { ...e.searchResults, [s]: { ...n, fetchStatus: o || r ? n?.fetchStatus : u.ZP.FAILED, error: t.payload } };
                        return { ...e, searchResults: a };
                    }
                    case v.SUCCESS: {
                        const { query: r } = t.meta || {},
                            o = t.payload && t.payload.result ? t.payload.result : null,
                            { conversations: s, error: n } = o || {},
                            a = o?.conversationIds ? o.conversationIds : s ? Object.keys(s) : [],
                            i = e.searchResults ? e.searchResults[r] : {},
                            c = i?.conversationIds || [],
                            l = c.length && a ? c.concat(a.filter((e) => !c.includes(e))) : a,
                            d = { ...e.searchResults, [r]: { ...i, lastCursor: o?.cursor, conversationIds: l, error: n, fetchStatus: u.ZP.LOADED } };
                        return { ...e, searchResults: d };
                    }
                    case w:
                    case m.t:
                        return { ...T, recentSearches: e.recentSearches };
                    default:
                        return e;
                }
            }
            const k = (e) => e[f.Yf].search?.recentSearches,
                E = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    if (r) {
                        const e = r[t];
                        return e?.fetchStatus || u.ZP.NONE;
                    }
                    return u.ZP.NONE;
                },
                A = (e, t) => {
                    const r = e[f.Yf].search?.searchResults;
                    return (r && r[t]?.conversationIds) || [];
                },
                M =
                    (e) =>
                    (t, r, { api: o }) => {
                        const s = r(),
                            { fetchNextPage: n, preserveResults: a, query: c } = e || {},
                            u = { query: c, search_type: "conversations", request_id: l().v4() },
                            h = ((e, t) => {
                                const r = e[f.Yf].search?.searchResults;
                                return (r && r[t]?.lastCursor) || null;
                            })(s, c),
                            m = ((e) => e[f.Yf].search?.searchResults)(s),
                            C = m ? m[c] : void 0,
                            y = !!h;
                        h && c && n && (u.cursor = h);
                        const _ = p._O(t, { params: u, request: o.withEndpoint(d.Z).search }),
                            w = (e) => {
                                if (e && e.result) {
                                    const { conversations: t } = e.result,
                                        { users: r } = e.entities;
                                    return t && Object.values(t).forEach((e) => (e.isSearchResult = !0)), t ? (0, i.s0)({ conversations: t, users: r }) : null;
                                }
                            };
                        return !C || C?.error || a || (n && y) ? _({ actionTypes: v, context: "SEARCH", meta: { query: u.query, cursor: u.cursor, preserveResults: a, fetchNextPage: n } }, w) : (t({ type: "rweb/directMessages/SEARCH_SUCCESS", payload: { result: C }, meta: { query: c, cursor: h } }), Promise.resolve());
                    },
                Z =
                    (e) =>
                    (t, r, { featureSwitches: o, userPersistence: s }) => {
                        const n = o.getNumberValue("dm_inbox_search_max_recent_searches_stored");
                        return s.get(C).then((r) => {
                            const o = r?.recentSearches || [];
                            return !o.includes(e) && o.push(e), o.length > n && o.shift(), t(_(o)), s.set(C, { recentSearches: o });
                        });
                    },
                I =
                    (e) =>
                    (t, r, { userPersistence: o }) =>
                        o.get(C).then((r) => {
                            const s = r?.recentSearches || [];
                            return s.splice(s.indexOf(e), 1), t({ payload: s, type: b }), o.set(C, { recentSearches: s });
                        }),
                x =
                    () =>
                    (e, t, { userPersistence: r }) => (e({ type: S }), r.set(C, { recentSearches: [] }));
            s.Z.register(
                { [f.Yf]: R },
                () =>
                    (e, t, { userPersistence: r }) =>
                        h.Qb(t())
                            ? Promise.resolve(
                                  r.get(C).then((t) => {
                                      const r = t?.recentSearches;
                                      r && e(_(r));
                                  }),
                              ).then(() => {})
                            : Promise.resolve(),
            );
            var D = r(923965);
            const B = (0, o.UY)({ conversations: n.ZP, entries: a.ZP, inbox: i.ZP, search: R, updates: D.ZP });
            s.Z.register({ [f.Yf]: B });
            const L = B;
        },
        629196: (e, t, r) => {
            r.d(t, { r: () => l });
            r(136728);
            var o = r(161821),
                s = r(390387),
                n = r(836255),
                a = r(255117),
                i = r(166506),
                c = r(919022);
            const l =
                (e, t) =>
                (r, l, { api: d, featureSwitches: p }) =>
                    r(c.ZP.mute(e, t)).then(() => {
                        const t = l(),
                            c = (0, o.Z)(n.Z.selectAll(t)).reduce((r, o) => {
                                if (null != o)
                                    if (o.user === e) r[o.id_str] = !0;
                                    else if (o.retweeted_status) {
                                        const s = n.Z.select(t, o.retweeted_status);
                                        s?.user === e && (r[o.id_str] = !0);
                                    }
                                return r;
                            }, {}),
                            d = (0, s._h)(l()),
                            p = d ? [(0, a.ZP)({ useLatest: !1, userId: d }).removeTweets(c), (0, a.ZP)({ useLatest: !0, userId: d }).removeTweets(c)] : [],
                            u = (0, i.k9)();
                        if (u.selectInitialFetchStatus(t) && !u.selectCanRefresh(t)) {
                            const r = (0, i.f8)(e, t, u);
                            r && p.push(r);
                        }
                        return r(p);
                    });
        },
        166506: (e, t, r) => {
            r.d(t, { du: () => d, f8: () => p, k9: () => l });
            var o = r(503768),
                s = r(750085),
                n = r(962741),
                a = r(466015),
                i = r(919022),
                c = r(218951);
            const l = () => (0, c.Z)({ timelineId: "mutedAccountsGraphQL", network: { getEndpoint: (e) => e.withEndpoint(o.ZP).fetchMutedAccounts, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, context: "FETCH_MUTED_ACCOUNTS", perfKey: "mutedAccountsGraphql", formatResponse: s.Z }),
                d = (e) => (t, r) => {
                    const o = r();
                    t(
                        e
                            .selectEntries(o)
                            .filter((e) => {
                                const t = e.type === n.ZP.User ? e.content.id : "",
                                    r = i.ZP.select(o, t);
                                return r && !r.muting;
                            })
                            .map((t) => e.removeEntry(t.entryId)),
                    );
                },
                p = (e, t, r) => {
                    if (!r.selectEntries(t).find((t) => t.type === n.ZP.User && t.content.id === e)) {
                        const t = (0, a.OD)(e),
                            o = (0, a.$0)({ entryId: t, id: e, sortIndex: Date.now().toString() });
                        return r.injectEntry(o);
                    }
                };
        },
        294010: (e, t, r) => {
            r.r(t), r.d(t, { ReportFlowComplete: () => M, default: () => I });
            r(136728);
            var o = r(202784),
                s = r(325686),
                n = r(392237),
                a = r(111677),
                i = r.n(a),
                c = r(516951),
                l = r(143778),
                d = r(187669),
                p = r(290402),
                u = r(545334),
                h = r(847607),
                m = r(712816),
                f = r(879596),
                C = r(312771),
                v = r(71620),
                y = r(208115),
                _ = r(668214),
                w = r(629196),
                g = r(601576),
                b = r(919022);
            const S = (e, t) => {
                    const r = t.location.query.action;
                    if ("string" == typeof r) return r;
                },
                T = (e, t) => {
                    const r = t.location.query.reported_user_id;
                    if ("string" == typeof r) return r;
                },
                R = (e, t) => {
                    const r = t.location.query.reported_screen_name;
                    if ("string" == typeof r) return r;
                },
                k = (0, _.Z)()
                    .propsFromState(() => ({ action: S, canGoBack: y.q, reportedUserId: T, reportedScreenName: R }))
                    .propsFromActions(() => ({ addToast: g.fz, block: b.ZP.block, createLocalApiErrorHandler: (0, v.zr)("REPORT_SCREEN"), mute: w.r, unblock: b.ZP.unblock, unfollow: b.ZP.unfollow, unmute: b.ZP.unmute })),
                E = i().a9fd20be,
                A = i().i2b9632e;
            function M(e) {
                return (
                    (0, d.q)(() => {
                        const { action: t, addToast: r, block: o, canGoBack: s, createLocalApiErrorHandler: n, history: a, mute: i, reportedScreenName: c, reportedUserId: l } = e;
                        s
                            ? (l && "mute" === t
                                  ? i(l).then(
                                        () => {
                                            var t, o;
                                            r({
                                                action: {
                                                    label: u.d,
                                                    onAction:
                                                        ((t = l),
                                                        (o = c),
                                                        () => {
                                                            const { addToast: r, createLocalApiErrorHandler: s, unmute: n } = e;
                                                            n(t).then(
                                                                () => {
                                                                    r({ text: (0, h.X6)(o) });
                                                                },
                                                                s({ showToast: !0 }),
                                                            );
                                                        }),
                                                },
                                                text: (0, h.FK)(c),
                                            });
                                        },
                                        n({ showToast: !0 }),
                                    )
                                  : l &&
                                    "block" === t &&
                                    o(l).then(() => {
                                        var t;
                                        r({
                                            action: {
                                                label: u.d,
                                                onAction:
                                                    ((t = l),
                                                    () => {
                                                        const { addToast: r, createLocalApiErrorHandler: o, unblock: s } = e;
                                                        s(t).then(() => {
                                                            r({ text: A });
                                                        }, o(f.D));
                                                    }),
                                            },
                                            text: E,
                                        });
                                    }, n(m.d)),
                              a.goBackThroughModals())
                            : a.push("/");
                    }),
                    o.createElement(s.Z, { style: Z.root }, o.createElement(p.Z, { fetchStatus: C.ZP.LOADING, onRequestRetry: c.Z, render: l.Z, retryable: !1 }))
                );
            }
            const Z = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 } })),
                I = k(M);
        },
        679406: (e, t, r) => {
            r.r(t), r.d(t, { ReportScreen: () => Ce, default: () => ve });
            r(136728);
            var o = r(202784),
                s = r(468811),
                n = r.n(s),
                a = r(688715),
                i = r(154003),
                c = r(362075),
                l = r(392237),
                d = r(111677),
                p = r.n(d),
                u = r(161821),
                h = r(840647),
                m = r(980407),
                f = r(443781),
                C = r(545334),
                v = r(847607),
                y = r(712816),
                _ = r(879596),
                w = r(323683),
                g = r(163889),
                b = r(730996),
                S = r(395067),
                T = r(479506),
                R = r(942893),
                k = r(593953),
                E = r(71620),
                A = r(208115),
                M = r(2430),
                Z = r(668214),
                I = r(481242),
                x = r(837455),
                D = r(296196),
                B = r(275365),
                L = r(182991),
                U = r(576469),
                P = r(197914),
                N = r(228356),
                F = r(629196),
                H = r(390387),
                O = r(601576),
                W = r(836255),
                q = r(919022);
            const z = (e, t) => t.location && t.location.state && t.location.state.clientReferer,
                G = (e, t) => t.location && t.location.state && t.location.state.inboxType,
                $ = (e, t) => t.location && t.location.state && t.location.state.scribeNamespace,
                j = (e, t) => !!(t.location && t.location.state && t.location.state.isMedia) || !1,
                Y = (e, t) => t.location && t.location.state && t.location.state.promotedContent,
                V = (e, t) => t.location && t.location.state && t.location.state.conversationSection,
                Q = (e, t) => t.location && t.location.query && (0, M.BX)(t.location.query.community_id),
                K = (e, t) => (0, S.HO)(X(e, t)),
                X = (e, t) => t.match.params.reportType,
                J = (e, t) => t.match.params.reportedId,
                ee = (e, t) => {
                    const r = X(e, t),
                        o = J(0, t);
                    switch (r) {
                        case S.C2.Tweet:
                        case S.C2.AppealTweetWarning:
                        case S.C2.LimitedDiscoveryAppealTweet:
                        case S.C2.ProfileOnlyDiscoveryAppealTweet:
                        case S.C2.HideCommunityTweet:
                            return W.Z.selectHydrated(e, o);
                        default:
                            return;
                    }
                },
                te = (e, t) => {
                    const r = X(e, t) === S.C2.User ? J(0, t) : void 0;
                    return r ? q.ZP.select(e, r) : void 0;
                },
                re = (e, t) => {
                    let r;
                    const o = X(e, t);
                    if (((o !== S.C2.DMConversation && o !== S.C2.DMMessage) || (r = o === S.C2.DMConversation ? J(0, t) : t.location.state ? t.location.state.conversationId : void 0), r)) {
                        const t = (0, L.x)(e, r),
                            o = ((e) => H.x0(e))(e);
                        return oe(t, o);
                    }
                },
                oe = (e, t) => {
                    if (e && e.data) {
                        let r;
                        return (r = e.data.type === B.eD.GROUP ? "0" : e.data.participants.filter((e) => e.user_id !== t)[0].user_id), { conversationId: e.data.conversation_id, reportedUserId: r };
                    }
                },
                se = (e, t) => (X(e, t) === S.C2.Moment ? N.Z.select(e, J(0, t)) : void 0),
                ne = (e, t) => {
                    const r = X(e, t) === S.C2.List ? J(0, t) : void 0;
                    return r ? U.Z.select(e, r) : void 0;
                },
                ae = (e, t) => {
                    const r = X(e, t) === S.C2.Moment ? J(0, t) : void 0;
                    return r ? P.Z.select(e, r) : void 0;
                },
                ie = (0, Z.Z)()
                    .propsFromState(() => ({ canGoBack: A.q, clientReferer: z, communityId: Q, dmConversation: re, reportedId: J, inboxType: G, isMedia: j, lang: H.VT, liveEvent: ae, moment: se, list: ne, promotedContent: Y, conversationSection: V, reportType: X, reportSource: K, scribeNamespace: $, tweet: ee, user: te }))
                    .propsFromActions(() => ({ addToast: O.fz, block: q.ZP.block, createLocalApiErrorHandler: (0, E.zr)("REPORT_SCREEN"), fetchUpdates: D.fetchUpdates, mute: F.r, markTweetAsReported: W.Z.markAsReported, markTweetsAsRemovedFromCommunity: W.Z.markTweetsAsRemovedFromCommunity, markUserAsRemovedFromCommunity: x.Z.markUserAsRemovedFromCommunity, richScribeAction: I.richScribeAction, unblock: q.ZP.unblock, unfollow: q.ZP.unfollow, unmute: q.ZP.unmute })),
                ce = p().f1824804,
                le = p().h030c24c,
                de = p().b12ffee6,
                pe = p().f9f27fa2,
                ue = p().a9fd20be,
                he = p().i2b9632e,
                me = p().b772cd66,
                fe = (0, a.ju)("https://x.com");
            class Ce extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderDoneButton = () => {
                            const { isDone: e } = this.state;
                            return e ? o.createElement(i.ZP, { onPress: this._handleDone, size: "xSmall", type: "primaryFilled" }, me) : void 0;
                        }),
                        (this._handleDone = () => {
                            const { clientReferer: e, createLocalApiErrorHandler: t, fetchUpdates: r, history: o, inboxType: s, promotedContent: n, reportType: a } = this.props;
                            switch ((this._scribeAction("done"), a)) {
                                case S.C2.DMConversation:
                                case S.C2.DMMessage:
                                    o.replace((0, k.k2)(s)), r().catch(t({}));
                                    break;
                                case S.C2.Tweet: {
                                    const t = this.context.featureSwitches.isTrue("subscriptions_report_ad_upsell_enabled"),
                                        r = this.context.userClaims.hasSubscription("premium_plus") || this.context.userClaims.isVerifiedOrg() || this.context.userClaims.isVerifiedOrgAffiliate();
                                    if (t && !r && n?.impression_id) {
                                        const t = { variant: "ReportAd", dismissPath: e };
                                        o.push("/i/verified-get-verified", t);
                                    } else this._goBack();
                                    break;
                                }
                                default:
                                    this._goBack();
                            }
                        }),
                        (this._goBack = () => {
                            const { history: e } = this.props,
                                t = Math.min(-1, this._initialHistoryLength - window.history.length - 1);
                            e.go(t);
                        }),
                        (this._handleBack = () => {
                            const { history: e } = this.props;
                            e.goBack();
                        }),
                        (this._handleCancel = () => {
                            this._goBack();
                        }),
                        (this._handleUndoBlock = (e) => () => {
                            const { addToast: t, createLocalApiErrorHandler: r, promotedContent: o, unblock: s } = this.props;
                            s(e, { promotedContent: o }).then(() => {
                                t({ text: he });
                            }, r(_.D));
                        }),
                        (this._handleUndoMute = (e, t) => () => {
                            const { addToast: r, createLocalApiErrorHandler: o, unmute: s } = this.props;
                            s(e).then(
                                () => {
                                    r({ text: (0, v.X6)(t) });
                                },
                                o({ showToast: !0 }),
                            );
                        }),
                        (this._getReportTitle = () => {
                            const { reportType: e } = this.props;
                            switch (e) {
                                case S.C2.AppealTweetWarning:
                                    return ce;
                                case S.C2.RemoveCommunityMember:
                                    return de;
                                case S.C2.HideCommunityTweet:
                                    return pe;
                                default:
                                    return le;
                            }
                        }),
                        (this._getReportedTweetId = () => {
                            const { liveEvent: e, moment: t, reportType: r, tweet: o } = this.props;
                            switch (r) {
                                case S.C2.Moment: {
                                    const r = (e ? (0, u.Z)(e.slates) : []).find((e) => e.tweet_id);
                                    return r ? r.tweet_id : t && t.cover_media && t.cover_media.tweet_id;
                                }
                                case S.C2.AppealTweetWarning:
                                case S.C2.LimitedDiscoveryAppealTweet:
                                case S.C2.ProfileOnlyDiscoveryAppealTweet:
                                case S.C2.HideCommunityTweet:
                                case S.C2.Tweet:
                                    return o && o.id_str;
                                default:
                                    return;
                            }
                        }),
                        (this._getReportedUserId = (e) => {
                            const { dmConversation: t, list: r, liveEvent: o, moment: s, reportType: n, reportedId: a, tweet: i, user: c } = this.props;
                            switch (n) {
                                case S.C2.DMConversation:
                                case S.C2.DMMessage:
                                    return e && e.data && t && "0" === t.reportedUserId ? e.data.reported_user_id : t && t.reportedUserId;
                                case S.C2.Moment:
                                    return (o && o.liveEventDetails.attribution_user_id) || (s && s.author && s.author.id);
                                case S.C2.User:
                                    return c && c.id_str;
                                case S.C2.List:
                                    return r && r.user;
                                case S.C2.AppealTweetWarning:
                                case S.C2.LimitedDiscoveryAppealTweet:
                                case S.C2.ProfileOnlyDiscoveryAppealTweet:
                                case S.C2.HideCommunityTweet:
                                case S.C2.Tweet:
                                    return i && i.user.id_str;
                                case S.C2.RemoveCommunityMember:
                                    return a;
                                default:
                                    return void (0, g.ZP)(`Unknown report type ${n}`);
                            }
                        }),
                        (this._getReportedUserScreenName = (e) => {
                            const { liveEvent: t, moment: r, reportType: o, tweet: s, user: n } = this.props;
                            switch (o) {
                                case S.C2.Moment: {
                                    const e = t?.liveEventDetails.attribution_user_id,
                                        o = e ? t?.users?.[e] : void 0;
                                    if (o) return o?.screen_name;
                                    if (r && r.author) return r.author.screen_name;
                                    break;
                                }
                                case S.C2.Tweet:
                                    return s?.user.screen_name;
                                case S.C2.User:
                                    return n?.screen_name;
                            }
                        }),
                        (this._getCommunityId = () => {
                            const { communityId: e, reportType: t } = this.props;
                            if (t === S.C2.RemoveCommunityMember) return e;
                        }),
                        (this._getReportUrl = () => {
                            const { clientReferer: e, conversationSection: t, dmConversation: r, isMedia: o, lang: s, list: n, liveEvent: a, moment: i, promotedContent: c, reportSource: l, reportType: d, reportedId: p, scribeNamespace: u } = this.props,
                                m = d === S.C2.DMConversation,
                                f = d === S.C2.DMMessage,
                                C = d === S.C2.Moment,
                                v = d === S.C2.List,
                                y = { client_location: [u?.page, u?.section, u?.component].join(":"), client_referer: e, client_app_id: (0, h.Z)().clientAppId, conversation_section: t, source: l, report_flow_id: this._reportFlowId, reported_user_id: this._getReportedUserId(), reported_tweet_id: this._getReportedTweetId(), reported_direct_message_conversation_id: (f || m) && r && r.conversationId, reported_direct_message_id: f && p, reported_moment_id: C ? (a && a.liveEventDetails.id) || (i && i.id_str) : void 0, reported_list_id: v ? n && n.id_str : void 0, is_promoted: !!c, impression_id: c?.impression_id, is_media: o, initiated_in_app: "1", lang: s, community_id: this._getCommunityId() },
                                _ = Object.keys(y)
                                    .filter((e) => !!y[e])
                                    .map((e) => `${encodeURIComponent(e)}=${encodeURIComponent(y[e])}`)
                                    .join("&");
                            return `${fe}/i/safety/report_story?${_}`;
                        }),
                        (this._messageHandler = (e) => {
                            const { addToast: t, markTweetAsReported: r, markTweetsAsRemovedFromCommunity: o, markUserAsRemovedFromCommunity: s, reportSource: n } = this.props;
                            if (e.origin !== fe || "ReportAction" !== e.data.type) return;
                            const { block: a, createLocalApiErrorHandler: i, mute: c, promotedContent: l, unfollow: d } = this.props,
                                p = this._getReportedUserId(e);
                            switch (e.data.action) {
                                case "block":
                                    p &&
                                        a(p, { promotedContent: l }).then(() => {
                                            t({ action: { label: C.d, onAction: this._handleUndoBlock(p) }, text: ue });
                                        }, i(y.d));
                                    break;
                                case "unfollow":
                                    p && d(p, { promotedContent: l }).catch(i(w.X));
                                    break;
                                case "mute":
                                    p &&
                                        c(p).then(
                                            () => {
                                                const r = this._getReportedUserScreenName(e);
                                                t({ action: { label: C.d, onAction: this._handleUndoMute(p, r) }, text: (0, v.FK)(r) });
                                            },
                                            i({ showToast: !0 }),
                                        );
                                    break;
                                case "complete": {
                                    this.setState({ isDone: !0 });
                                    const e = this._getReportedTweetId();
                                    if ((e && (n === b.g.Tweet && r(e, S.az.Tombstone), n === b.g.HideCommunityTweet && r(e, S.az.HiddenCommunityTweet)), n === b.g.RemoveCommunityMember)) {
                                        const e = this._getReportedUserId(),
                                            t = this._getCommunityId();
                                        e && t && (o(e, t, S.az.RemovedCommunityMember), s(`${t}_${e}`));
                                    }
                                    break;
                                }
                                case "error":
                                    this.setState({ isDone: !0 });
                                    break;
                                case "cancel":
                                    this._handleCancel();
                            }
                        }),
                        (this.state = { isDone: !1 }),
                        (this._accessedDirectly = this._wasAccessedDirectly()),
                        (this._reportFlowId = n().v4()),
                        (this._reportUrl = this._accessedDirectly ? "" : this._getReportUrl()),
                        (this._initialHistoryLength = window.history.length);
                }
                componentDidMount() {
                    const { addMessageListener: e, history: t } = this.props;
                    e(this._messageHandler), this._wasAccessedDirectly() ? t.push("/") : this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { isDone: e } = this.state;
                    this.props.removeMessageListener(this._messageHandler), e || this._wasAccessedDirectly() || this._scribeAction("cancel");
                }
                render() {
                    const { history: e } = this.props,
                        { isDone: t } = this.state;
                    return this._accessedDirectly ? null : o.createElement(m.Z, { backButtonType: t ? "close" : "back", history: e, onBackClick: t ? this._handleDone : this._handleBack, rightControl: this._renderDoneButton(), title: this._getReportTitle() }, o.createElement(c.Z, { allowForms: !0, src: this._reportUrl, style: l.default.absoluteFill }));
                }
                _wasAccessedDirectly() {
                    const { canGoBack: e, communityId: t, dmConversation: r, list: o, liveEvent: s, moment: n, reportType: a, reportedId: i, scribeNamespace: c, tweet: l, user: d } = this.props,
                        p = s && s.liveEventDetails.attribution_user_id;
                    return !e || !c || (a === S.C2.AppealTweetWarning && !l) || (a === S.C2.LimitedDiscoveryAppealTweet && !l) || (a === S.C2.ProfileOnlyDiscoveryAppealTweet && !l) || (a === S.C2.HideCommunityTweet && !l) || (a === S.C2.RemoveCommunityMember && !t && !i) || (a === S.C2.Tweet && !l) || (a === S.C2.User && !d) || (a === S.C2.DMConversation && !r) || (a === S.C2.DMMessage && (!i || !r)) || (a === S.C2.Moment && !n && !p) || (a === S.C2.List && !o);
                }
                _getScribeNamespace() {
                    if (this._scribeNamespace) return this._scribeNamespace;
                    const { reportType: e, scribeNamespace: t } = this.props;
                    let r;
                    switch (e) {
                        case S.C2.AppealTweetWarning:
                            r = "appeal_tweet_warning";
                            break;
                        case S.C2.LimitedDiscoveryAppealTweet:
                            r = "limited_discovery_appeal_tweet";
                            break;
                        case S.C2.ProfileOnlyDiscoveryAppealTweet:
                            r = "profile_only_discovery_appeal_tweet";
                            break;
                        case S.C2.DMConversation:
                            r = "report_dm_conversation";
                            break;
                        case S.C2.Moment:
                            r = "report_moment";
                            break;
                        case S.C2.Tweet:
                            r = "report_tweet";
                            break;
                        case S.C2.User:
                            r = "report_user";
                    }
                    return (this._scribeNamespace = { ...t, element: r }), this._scribeNamespace;
                }
                _getScribeData() {
                    if (this._scribeData) return this._scribeData;
                    const { promotedContent: e, reportType: t, scribeNamespace: r, tweet: o, user: s } = this.props;
                    if (t === S.C2.Tweet || t === S.C2.AppealTweetWarning || t === S.C2.LimitedDiscoveryAppealTweet || t === S.C2.ProfileOnlyDiscoveryAppealTweet) this._scribeData = { associations: { [T.Z.AssociationType.ASSOCIATED_TWEET]: { association_id: o && o.id_str, association_namespace: { page: r?.page } } }, promoted: !!e, items: o ? [R.Z.forTweet(o)] : [] };
                    else if (t === S.C2.User) {
                        const e = s ? [R.Z.forUser(s.id_str)] : [];
                        this._scribeData = { associations: { [T.Z.AssociationType.ASSOCIATED_USER]: { association_id: s && s.id_str } }, items: e, targets: e };
                    }
                    return this._scribeData;
                }
                _scribeAction(e) {
                    const { richScribeAction: t } = this.props,
                        r = { ...this._getScribeData(), report_details: { report_flow_id: this._reportFlowId } };
                    t({ ...this._getScribeNamespace(), action: e }, r);
                }
            }
            (Ce.defaultProps = { addMessageListener: (e) => window.addEventListener("message", e), isMedia: !1, removeMessageListener: (e) => window.removeEventListener("message", e) }), (Ce.contextType = f.rC);
            const ve = ie(Ce);
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                s = r(476984),
                n = r.n(s),
                a = r(143778),
                i = r(750410),
                c = r(682830);
            const l = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class h extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: s, icon: n, loadingMessage: a, onRequestRetry: d, render: h, renderFailure: m, retryMessage: f, retryable: C } = this.props;
                    switch (s) {
                        case l:
                            return C ? o.createElement(i.Z, { icon: n, onRequestRetry: d, retryMessage: f }) : r ? o.createElement(c.m, { failureMessage: r }) : m();
                        case p:
                            return o.createElement(c.J, { "aria-label": e, color: t, loadingMessage: a });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        362075: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                s = r(202784),
                n = r(325686),
                a = r(688715),
                i = r(950822),
                c = r(386802),
                l = r(392237);
            class d extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = s.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: r } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return r ? r(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let o;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    o = JSON.parse(e.data);
                                } catch (t) {
                                    return void (r && r(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(o);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: r, dangerouslyDisableSandbox: o, src: c, style: l, title: d } = this.props,
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, i.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, a.ju)(c), style: p.iframe, title: d, ...(o ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${r ? " allow-top-navigation" : ""}` }) });
                    return s.createElement(n.Z, { style: u ? [p.root, p.modalPadding, l] : [p.root, l] }, m);
                }
            }
            d.contextType = c.t;
            const p = l.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = s.forwardRef((e, t) => s.createElement(d, (0, o.Z)({ forwardedRef: t }, e)));
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                s = r(890601),
                n = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        391366: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                s = r(890601),
                n = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => s, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return s(e, t);
            };
            function s(e, t) {
                return e.reduce(
                    (r, o, s) => {
                        const n = t ? t(o, s, e) : !!o;
                        return n && r[0].push(o), !n && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report.a777a31a.js.map
