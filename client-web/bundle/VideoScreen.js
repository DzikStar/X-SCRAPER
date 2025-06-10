"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.VideoScreen"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                s = o(202784),
                r = o(182056),
                i = o(879113),
                a = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(968478);
            const u = l().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const a = r.Z.isOnline();
                    return s.createElement(i.Z, (0, n.Z)({}, t, { icon: a ? void 0 : s.createElement(d.default, { style: g.icon }), retryMessage: a ? e : u }));
                },
                g = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = s.forwardRef(p);
        },
        252021: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                s = o(107267),
                r = o(115553);
            const i = (e) => {
                (0, s.useHistory)();
                return n.createElement(r.A, e);
            };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                s = o(500002),
                r = o(668214),
                i = o(997174),
                a = o(118823);
            const c = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = s || a;
                    ((l && s !== a) || (!l && o !== r) || n !== i || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, s.ZP)(c(l));
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => C, KV: () => b, LI: () => x, SC: () => w, Vt: () => v, ed: () => P, op: () => Z });
            var n = o(202784),
                s = o(190286),
                r = o(111677),
                i = o.n(r),
                a = o(616894),
                c = o(314948),
                l = o(516951),
                d = o(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                g = i().fcd4d489,
                m = i().a6450e84,
                f = i().g353ad73,
                h = i().ad00a739,
                b = i().a9fd20be,
                k = i().j546fb79,
                y = i().c9623eeb,
                v = i().e133be4e,
                T = i().he43bca4,
                E = i().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: m, text: t ? h({ screenName: e }) : f({ screenName: e }) }),
                Z = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: s, unblockAction: r, unblockSubtext: i, user: a }) => {
                    let c,
                        u = l.Z;
                    const p = x(a, o);
                    switch (n) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? r(p) : e(p);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    a.blocking ? r(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: s, shortcutKey: c, Icon: I(a.blocking), text: S(a), subText: _({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                I = (e) => (e ? c.default : a.default),
                _ = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? y({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                x = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: k({ screenName: e }), label: v, text: t ? E : T }))(e.screen_name, t) : C(e.screen_name, t)),
                P = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: r, headline: i, label: a, text: c } = e;
                    return n.createElement(s.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: r, headline: i, onCancel: o, onConfirm: t, text: c });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => s });
            var n = o(111677);
            const s = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => p, Od: () => d, PN: () => g, uq: () => l, wR: () => f });
            var n = o(251067),
                s = o(522171),
                r = o(111677),
                i = o.n(r),
                a = o(912021),
                c = o(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: l.nextItem, universal: !0 }, { description: i().g0048656, keys: l.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: l.refresh, universal: !1 }, { description: i().ha8209bc, keys: l.goHome, universal: !1 }, { description: i().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: i().eb75875e, keys: l.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: i().fa98627a, keys: l.goProfile, universal: !1 }, { description: i().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: i().b0041756, keys: l.goLists, universal: !1 }, { description: i().d4986f86, keys: l.goMessages, universal: !1 }, { description: i().h5860a68, keys: l.goGrok, universal: !1 }, { description: i().bb081ea2, keys: l.goSettings, universal: !1 }, { description: i().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: l.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: l.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: l.search, universal: !1 },
                    { description: i().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: l.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: l.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: l.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                g = () => [
                    { description: i().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: i().b881560e, keys: l.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = d(e),
                        o = p(),
                        n = g(),
                        s = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807469),
                s = o(502909),
                r = o(600823);
            const i = (0, s.ZP)({ namespace: "topics" }),
                a = (0, s.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                c = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, n) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                l = (e, t, o) => {
                    const { entityId: n } = t.meta,
                        s = e.entities[n];
                    return s ? ((e, t, o, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...n() } } } : e))(e, t, s, o) : e;
                },
                d = { follow: (0, s.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => l(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, s.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => l(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, s.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => l(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, s.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => l(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...c, ...d, customActionTypes: (0, s.X7)(d) },
                p = r.Z.register(u);
        },
        460283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => w });
            var n = o(202784),
                s = o(392237),
                r = o(205705),
                i = o(252021),
                a = o(652904),
                c = o(810641),
                l = o(655352),
                d = o(293115),
                u = o(644829),
                p = o(750085),
                g = o(218951);
            const m = () => (0, g.Z)({ timelineId: "video", network: { getEndpoint: (e) => e.withEndpoint(u.Z).fetchMediaTabVideoMixer, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: p.Z, context: "FETCH_MEDIA_TAB_VIDEO_TIMELINE", perfKey: "video" });
            var f = o(769471),
                h = o(674530),
                b = o(367879),
                k = o(335632),
                y = o(962741),
                v = o(742742);
            const T = (0, f.Z)({}, (0, k.G)({}), { [y.ZP.TimelineModule]: { handlers: { [v.Z.Carousel]: (0, b.Z)({ moduleDisplayType: h.m.Carousel, divider: { top: !1, bottom: !1 } }), [v.Z.CompactCarousel]: (0, b.Z)({ moduleDisplayType: h.m.CompactCarousel, divider: { top: !1, bottom: !1 } }) } } }),
                E = { page: "media" };
            function w({ history: e }) {
                const t = !(0, l.ZP)(),
                    o = n.useMemo(() => m(), []),
                    s = t ? n.createElement(r.Z, { style: C.icon }) : void 0;
                return n.createElement(d.nO, { namespace: E }, n.createElement(a.Z, { locationKey: E.page }, n.createElement(i.Z, { centeredLogo: s, history: e, isFullWidth: !0, primaryContent: n.createElement(c.Z, { entryConfiguration: T, module: o, title: "Video Screen" }), sidebarContent: null })));
            }
            const C = s.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                s = o(476984),
                r = o.n(s),
                i = o(143778),
                a = o(750410),
                c = o(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class g extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: s, icon: r, loadingMessage: i, onRequestRetry: d, render: g, renderFailure: m, retryMessage: f, retryable: h } = this.props;
                    switch (s) {
                        case l:
                            return h ? n.createElement(a.Z, { icon: r, onRequestRetry: d, retryMessage: f }) : o ? n.createElement(c.m, { failureMessage: o }) : m();
                        case u:
                            return n.createElement(c.J, { "aria-label": e, color: t, loadingMessage: i });
                        case p:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                s = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
        314948: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                s = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25 0 1.92.66 3.68 1.75 5.08l2.8-2.79 1.41 1.42-2.79 2.79c1.4 1.1 3.16 1.75 5.08 1.75 4.56 0 8.25-3.69 8.25-8.25 0-1.92-.65-3.68-1.75-5.08l-2.79 2.79-1.41-1.42 2.79-2.79C15.68 4.4 13.92 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.VideoScreen.31bb2f0a.js.map
