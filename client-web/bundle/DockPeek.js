"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.DockPeek", "icons/IconBookmarkPlusStroke-js", "icons/IconFeedback-js", "icons/IconFilterFill-js", "icons/IconRepliesStroke-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
    {
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                n = o(202784),
                a = o(182056),
                i = o(879113),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, o) => {
                    const s = a.Z.isOnline();
                    return n.createElement(i.Z, (0, r.Z)({}, t, { icon: s ? void 0 : n.createElement(d.default, { style: g.icon }), retryMessage: s ? e : u }));
                },
                g = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = n.forwardRef(h);
        },
        292546: (e, t, o) => {
            o.d(t, { Z: () => a });
            o(543673), o(240753), o(128399), o(136728);
            var r = o(202784),
                n = o(107267);
            const a = () => {
                const e = (0, n.useLocation)(),
                    t = (0, n.useHistory)(),
                    [o, a] = r.useState(new URLSearchParams(e.search));
                r.useEffect(() => {
                    a(new URLSearchParams(e.search));
                }, [e.search]);
                const i = r.useCallback(
                    (r, n) => {
                        const a = new URLSearchParams(o);
                        a.set(r, n), t.push(`${e.pathname}?${a.toString()}`);
                    },
                    [t, e.pathname, o],
                );
                return [r.useMemo(() => new URLSearchParams(e.search), [e.search]), i];
            };
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => C, KV: () => f, LI: () => I, SC: () => Z, Vt: () => k, ed: () => M, op: () => x });
            var r = o(202784),
                n = o(190286),
                a = o(111677),
                i = o.n(a),
                s = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const u = i().cfd2f35e,
                h = i().f9e45cfb,
                g = i().fcd4d489,
                m = i().a6450e84,
                p = i().g353ad73,
                v = i().ad00a739,
                f = i().a9fd20be,
                b = i().j546fb79,
                y = i().c9623eeb,
                k = i().e133be4e,
                w = i().he43bca4,
                E = i().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                C = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? v({ screenName: e }) : p({ screenName: e }) }),
                x = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: o, source: r, testID: n, unblockAction: a, unblockSubtext: i, user: s }) => {
                    let l,
                        u = c.Z;
                    const h = I(s, o);
                    switch (r) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                s.blocking ? a(h) : e(h);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    s.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: n, shortcutKey: l, Icon: T(s.blocking), text: S(s), subText: P({ user: s, blockSubtext: t, unblockSubtext: i }) };
                },
                T = (e) => (e ? l.default : s.default),
                P = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                S = (e) => (e.blocking ? y({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? E : w }))(e.screen_name, t) : C(e.screen_name, t)),
                M = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: i, label: s, text: l } = e;
                    return r.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: a, headline: i, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => n });
            var r = o(111677);
            const n = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => h, Od: () => d, PN: () => g, uq: () => c, wR: () => p });
            var r = o(251067),
                n = o(522171),
                a = o(111677),
                i = o.n(a),
                s = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                g = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, s.Z)((e) => {
                    const t = d(e),
                        o = h(),
                        r = g(),
                        n = {};
                    return (
                        [...o, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                p = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807469),
                n = o(502909),
                a = o(600823);
            const i = (0, n.ZP)({ namespace: "topics" }),
                s = (0, n.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, r) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, o) => {
                    const { entityId: r } = t.meta,
                        n = e.entities[r];
                    return n ? ((e, t, o, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...r() } } } : e))(e, t, n, o) : e;
                },
                d = { follow: (0, n.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...s, ...l, ...d, customActionTypes: (0, n.X7)(d) },
                h = a.Z.register(u);
        },
        149103: (e, t, o) => {
            o.r(t), o.d(t, { default: () => M });
            var r = o(202784),
                n = o(400752),
                a = o(83825),
                i = o(292546),
                s = o(807896),
                l = o(325686),
                c = o(537392),
                d = o(392237),
                u = o(138099),
                h = o(154003),
                g = o(111677),
                m = o.n(g),
                p = o(487552),
                v = o(837020),
                f = o(715601),
                b = o(996223),
                y = o(731708),
                k = o(530732),
                w = o(215337);
            function E({ "aria-label": e, children: t, onPress: o, style: n }) {
                return r.createElement(k.Z, { "aria-label": e, onPress: o, style: [Z.button, n] }, r.createElement(w.Z, { angle: 80, colors: [d.default.theme.colors.blue500, d.default.theme.colors.blue700], style: Z.gradient }, t));
            }
            const Z = d.default.create((e) => ({ button: { overflow: "hidden", width: "100%", boxShadow: e.boxShadows.small, height: e.spacesPx.space48, borderRadius: e.spacesPx.space48 }, gradient: { height: "100%", justifyContent: "center", paddingHorizontal: e.spaces.space24 } }));
            function C({ onPress: e }) {
                const t = m().g4743c56;
                return r.createElement(r.Fragment, null, r.createElement(l.Z, { style: x.ctaButtonContainer }, r.createElement(E, { "aria-label": t, onPress: e, style: x.ctaButton }, r.createElement(y.ZP, { align: "center", color: "white", numberOfLines: 1, size: "headline1", weight: "bold" }, t))));
            }
            const x = d.default.create((e) => ({ ctaButtonContainer: { width: "100%", gap: e.spaces.space8, marginTop: e.spaces.space24 }, ctaButton: { width: "100%" } }));
            function T(e) {
                const t = (0, c.iv)().width < d.default.theme.breakpoints.medium,
                    o = { type: "bottom", role: "menu", onMaskClick: e.onClose, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0 },
                    [n, a] = (function () {
                        const [e, t] = r.useState(null),
                            o = r.useMemo(() => {
                                if (!e)
                                    return function (e) {
                                        const o = e.nativeEvent.layout;
                                        o && t(o);
                                    };
                            }, [e]);
                        return [e, o];
                    })();
                return r.createElement(u.Z, o, r.createElement(f.Z, { onLayout: a, style: P.sheetContainer }, r.createElement(l.Z, { style: P.header }, t && r.createElement(l.Z, { style: P.headerLeft }, r.createElement(h.ZP, (0, s.Z)({ "aria-label": I.collapse, icon: r.createElement(p.default, { style: P.closeIcon }), onPress: e.onJoin, pullLeft: !0 }, S))), r.createElement(l.Z, { style: P.headerRight }, r.createElement(h.ZP, (0, s.Z)({ "aria-label": I.close, icon: r.createElement(v.default, { style: P.closeIcon }), onPress: e.onClose, pullLeft: !0 }, S)))), r.createElement(l.Z, { style: [P.withoutPadding, P.content, ...(t ? [] : [P.contentNarrow])] }, r.createElement(b.J, { path: e.path ?? "" })), !t && r.createElement(C, { onPress: e.onJoin })));
            }
            const P = d.default.create((e) => ({ sheetContainer: { flex: 1, padding: e.spacesPx.space24, paddingTop: e.spacesPx.space12 }, withoutPadding: { paddingHorizontal: 0, paddingVertical: 0 }, content: { overflowY: "auto", flex: 1, scrollbarWidth: "none" }, contentNarrow: { maxHeight: "60vh" }, header: { flexDirection: "row", marginBottom: e.spacesPx.space12 }, headerLeft: { flex: 1, alignItems: "flex-start" }, headerRight: { flex: 1, alignItems: "flex-end" }, closeIcon: { width: e.spacesPx.space24, height: e.spacesPx.space24 } })),
                S = { borderColor: "transparent", color: "text", size: "medium" },
                I = { collapse: m().d227d19e, close: m().ia5e7488 };
            function M(e) {
                const [t] = (0, i.Z)(),
                    o = t.get("peek"),
                    s = t.get("collapsed"),
                    l = t.get("expanded"),
                    c = (0, n.b9)(a.P);
                return r.createElement(T, {
                    onClose: () => {
                        e.history.goBackThroughModals();
                    },
                    onJoin: () => {
                        s && l && c([s, l]), e.history.goBackThroughModals();
                    },
                    path: o,
                });
            }
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686),
                a = o(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(n.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(202784),
                n = o(476984),
                a = o.n(n),
                i = o(143778),
                s = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class g extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: a, loadingMessage: i, onRequestRetry: d, render: g, renderFailure: m, retryMessage: p, retryable: v } = this.props;
                    switch (n) {
                        case c:
                            return v ? r.createElement(s.Z, { icon: a, onRequestRetry: d, retryMessage: p }) : o ? r.createElement(l.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        215337: (e, t, o) => {
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, o) => {
                                    const r = t[o];
                                    let n = "";
                                    return r && (n = ` ${100 * r}%`), e + n;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: o, style: a } = this.props;
                    return r.createElement(n.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, o);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        916910: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        818088: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        971657: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        194417: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        368761: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        226597: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        155353: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        69893: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        922449: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        730895: (e, t, o) => {
            var r = o(821176);
            e.exports = function () {
                var e = r(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.DockPeek.cd6b9b4a.js.map
