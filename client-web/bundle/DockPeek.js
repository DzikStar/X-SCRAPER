"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DockPeek", "icons/IconBulletedList-js", "icons/IconReplyOff-js", "icons/IconStar-js"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                s = o(879113),
                i = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(968478);
            const u = l().aa6e3300,
                g = ({ retryMessage: e, ...t }, o) => {
                    const i = a.Z.isOnline();
                    return r.createElement(s.Z, (0, n.Z)({}, t, { icon: i ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: i ? e : u }));
                },
                p = i.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = r.forwardRef(g);
        },
        292546: (e, t, o) => {
            o.d(t, { Z: () => a });
            o(543673), o(240753), o(128399), o(136728);
            var n = o(202784),
                r = o(107267);
            const a = () => {
                const e = (0, r.useLocation)(),
                    t = (0, r.useHistory)(),
                    [o, a] = n.useState(new URLSearchParams(e.search));
                n.useEffect(() => {
                    a(new URLSearchParams(e.search));
                }, [e.search]);
                const s = n.useCallback(
                    (n, r) => {
                        const a = new URLSearchParams(o);
                        a.set(n, r), t.push(`${e.pathname}?${a.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [n.useMemo(() => new URLSearchParams(e.search), [e.search]), s];
            };
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => Z, KV: () => v, LI: () => I, SC: () => C, Vt: () => k, ed: () => M, op: () => T });
            var n = o(202784),
                r = o(190286),
                a = o(111677),
                s = o.n(a),
                i = o(616894),
                c = o(314948),
                l = o(516951),
                d = o(163390);
            const u = s().cfd2f35e,
                g = s().f9e45cfb,
                p = s().fcd4d489,
                h = s().a6450e84,
                m = s().g353ad73,
                f = s().ad00a739,
                v = s().a9fd20be,
                b = s().j546fb79,
                y = s().c9623eeb,
                k = s().e133be4e,
                w = s().he43bca4,
                E = s().f5f01af6,
                C = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                Z = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: g({ screenName: e }), label: h, text: t ? f({ screenName: e }) : m({ screenName: e }) }),
                T = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: n, testID: r, unblockAction: a, unblockSubtext: s, user: i }) => {
                    let c,
                        u = l.Z;
                    const g = I(i, o);
                    switch (n) {
                        case C.PROFILE:
                        case C.LIST_DETAIL:
                        case C.FOLLOWERS_LIST:
                            u = () => {
                                i.blocking ? a(g) : e(g);
                            };
                            break;
                        case C.TWEET:
                        case C.TWEET_CARET:
                        case C.RICH_FEEDBACK:
                            (c = d.uq.block),
                                (u = () => {
                                    i.blocking ? a(g) : e(g);
                                });
                    }
                    return { confirmation: g, onClick: u, testID: r, shortcutKey: c, Icon: x(i.blocking), text: S(i), subText: P({ user: i, blockSubtext: t, unblockSubtext: s }) };
                },
                x = (e) => (e ? c.default : i.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? y({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? E : w }))(e.screen_name, t) : Z(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: s, label: i, text: c } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: i, confirmButtonType: a, headline: s, onCancel: o, onConfirm: t, text: c });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => g, Od: () => d, PN: () => p, uq: () => l, wR: () => m });
            var n = o(251067),
                r = o(522171),
                a = o(111677),
                s = o.n(a),
                i = o(912021),
                c = o(323265);
            const l = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, i.Z)((e) => {
                    const t = e ? [{ description: s().b7fa0cfe, keys: l.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: s().d5696fcc, keys: l.openKeyboardShortcuts, universal: !0 }, { description: s().a83d4280, keys: l.nextItem, universal: !0 }, { description: s().g0048656, keys: l.previousItem, universal: !0 }, { description: s().a690c4d0, keys: "Space", universal: !0 }, { description: s().e893811a, keys: l.refresh, universal: !1 }, { description: s().ha8209bc, keys: l.goHome, universal: !1 }, { description: s().fcf3e54c, keys: l.goExplore, universal: !1 }, { description: s().eb75875e, keys: l.goNotifications, universal: !1 }, { description: s().cdb53d7a, keys: l.goMentions, universal: !1 }, { description: s().fa98627a, keys: l.goProfile, universal: !1 }, { description: s().d4ebc798, keys: l.goToDrafts, universal: !1 }, { description: s().fd6a3f30, keys: l.goToScheduled, universal: !1 }, { description: s().d7b8ebaa, keys: l.goLikes, universal: !1 }, { description: s().b0041756, keys: l.goLists, universal: !1 }, { description: s().d4986f86, keys: l.goMessages, universal: !1 }, { description: s().h5860a68, keys: l.goGrok, universal: !1 }, { description: s().bb081ea2, keys: l.goSettings, universal: !1 }, { description: s().i3145aa0, keys: l.goBookmarks, universal: !1 }, ...t, { description: s().eee2ed92, keys: l.goToUser, universal: !1 }, { description: s().ee5ccf3e, keys: l.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                g = () => [
                    { description: s().ab3d53f8, keys: l.newTweet, universal: !1 },
                    { description: s().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: s().e736990a, keys: l.newMessage, universal: !1 },
                    { description: s().a9ae1e78, keys: l.search, universal: !1 },
                    { description: s().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: s().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: s().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: s().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: s().gb303814, keys: l.bookmark, universal: !1 },
                    { description: s().c03b1126, keys: l.mute, universal: !1 },
                    { description: s().ebd2abb2, keys: l.block, universal: !1 },
                    { description: s().hc6c5510, keys: "Enter", universal: !0 },
                    { description: s().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: s().b488758c, keys: l.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: s().c82314e0, keys: l.video.play1, universal: !0 },
                    { description: s().c82314e0, keys: l.video.play2, universal: !0 },
                    { description: s().b881560e, keys: l.video.mute, universal: !0 },
                    { description: s().a94f7302, keys: l.audio.dock, universal: !1 },
                    { description: s().a7e604c6, keys: l.audio.play, universal: !1 },
                    { description: s().f978c4fc, keys: l.audio.mute, universal: !1 },
                ],
                h = (0, i.Z)((e) => {
                    const t = d(e),
                        o = g(),
                        n = p(),
                        r = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                m = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(807469),
                r = o(502909),
                a = o(600823);
            const s = (0, r.ZP)({ namespace: "topics" }),
                i = (0, r.tb)(s, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                c = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, n) => (o(s.updateOne(e, { following: t })), Promise.resolve()),
                },
                l = (e, t, o) => {
                    const { entityId: n } = t.meta,
                        r = e.entities[n];
                    return r ? ((e, t, o, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...n() } } } : e))(e, t, r, o) : e;
                },
                d = { follow: (0, r.Tx)(s, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => l(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(s, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => l(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(s, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => l(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(s, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => l(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...s, ...i, ...c, ...d, customActionTypes: (0, r.X7)(d) },
                g = a.Z.register(u);
        },
        149103: (e, t, o) => {
            o.r(t), o.d(t, { default: () => M });
            var n = o(202784),
                r = o(400752),
                a = o(83825),
                s = o(292546),
                i = o(807896),
                c = o(325686),
                l = o(537392),
                d = o(392237),
                u = o(138099),
                g = o(154003),
                p = o(111677),
                h = o.n(p),
                m = o(487552),
                f = o(837020),
                v = o(715601),
                b = o(996223),
                y = o(731708),
                k = o(530732),
                w = o(215337);
            function E({ "aria-label": e, children: t, onPress: o, style: r }) {
                return n.createElement(k.Z, { "aria-label": e, onPress: o, style: [C.button, r] }, n.createElement(w.Z, { angle: 80, colors: [d.default.theme.colors.blue500, d.default.theme.colors.blue700], style: C.gradient }, t));
            }
            const C = d.default.create((e) => ({ button: { overflow: "hidden", width: "100%", boxShadow: e.boxShadows.small, height: e.spacesPx.space48, borderRadius: e.spacesPx.space48 }, gradient: { height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space24 } }));
            function Z({ onPress: e }) {
                const t = h().g4743c56;
                return n.createElement(n.Fragment, null, n.createElement(c.Z, { style: T.ctaButtonContainer }, n.createElement(E, { "aria-label": t, onPress: e, style: T.ctaButton }, n.createElement(y.ZP, { align: "center", color: "white", numberOfLines: 1, size: "headline1", weight: "bold" }, t))));
            }
            const T = d.default.create((e) => ({ ctaButtonContainer: { width: "100%", gap: e.spaces.space8, marginTop: e.spaces.space24 }, ctaButton: { width: "100%" } }));
            function x(e) {
                const t = (0, l.iv)().width < d.default.theme.breakpoints.medium,
                    o = { type: "bottom", role: "menu", onMaskClick: e.onClose, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0 },
                    [r, a] = (function () {
                        const [e, t] = n.useState(null),
                            o = n.useMemo(() => {
                                if (!e)
                                    return function (e) {
                                        const o = e.nativeEvent.layout;
                                        o && t(o);
                                    };
                            }, [e]);
                        return [e, o];
                    })();
                return n.createElement(u.Z, o, n.createElement(v.Z, { onLayout: a, style: P.sheetContainer }, n.createElement(c.Z, { style: P.header }, t && n.createElement(c.Z, { style: P.headerLeft }, n.createElement(g.ZP, (0, i.Z)({ "aria-label": I.collapse, icon: n.createElement(m.default, { style: P.closeIcon }), onPress: e.onJoin, pullLeft: !0 }, S))), n.createElement(c.Z, { style: P.headerRight }, n.createElement(g.ZP, (0, i.Z)({ "aria-label": I.close, icon: n.createElement(f.default, { style: P.closeIcon }), onPress: e.onClose, pullLeft: !0 }, S)))), n.createElement(c.Z, { style: [P.withoutPadding, P.content, ...(t ? [] : [P.contentNarrow])] }, n.createElement(b.J, { path: e.path ?? "" })), !t && n.createElement(Z, { onPress: e.onJoin })));
            }
            const P = d.default.create((e) => ({ sheetContainer: { flex: 1, padding: e.spacesPx.space24, paddingTop: e.spacesPx.space12 }, withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 }, content: { overflowY: "auto", flex: 1, scrollbarWidth: "none" }, contentNarrow: { maxHeight: "60vh" }, header: { flexDirection: "row", marginBottom: e.spacesPx.space12 }, headerLeft: { flex: 1, alignItems: "flex-start" }, headerRight: { flex: 1, alignItems: "flex-end" }, closeIcon: { width: e.spacesPx.space24, height: e.spacesPx.space24 } })),
                S = { borderColor: "transparent", color: "text", size: "medium" },
                I = { collapse: h().d227d19e, close: h().ia5e7488 };
            function M(e) {
                const [t] = (0, s.Z)(),
                    o = t.get("peek"),
                    i = t.get("collapsed"),
                    c = t.get("expanded"),
                    l = (0, r.b9)(a.P);
                return n.createElement(x, {
                    onClose: () => {
                        e.history.goBackThroughModals();
                    },
                    onJoin: () => {
                        i && c && l([i, c]), e.history.goBackThroughModals();
                    },
                    path: o,
                });
            }
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                a = o(392237);
            function s({ spacing: e, style: t }) {
                return n.createElement(r.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                r = o(476984),
                a = o.n(r),
                s = o(143778),
                i = o(750410),
                c = o(682830);
            const l = "failed",
                d = "loaded",
                u = "loading",
                g = "none";
            class p extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: r, icon: a, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: h, retryMessage: m, retryable: f } = this.props;
                    switch (r) {
                        case l:
                            return f ? n.createElement(i.Z, { icon: a, onRequestRetry: d, retryMessage: m }) : o ? n.createElement(c.m, { failureMessage: o }) : h();
                        case u:
                            return n.createElement(c.J, { "aria-label": e, color: t, loadingMessage: s });
                        case g:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686);
            class a extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const n = t[o];
                                    let r = "";
                                    return n && (r = ` ${100 * n}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return n.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const s = a;
        },
        428259: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        883437: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        391366: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        258292: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var n = o(202784),
                r = o(890601),
                a = o(783427),
                s = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        730895: (e, t, o) => {
            var n = o(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DockPeek.21be7d1a.js.map
