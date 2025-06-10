"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock", "icons/IconBulletedList-js", "icons/IconReplyOff-js", "icons/IconStar-js"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                a = n(182056),
                i = n(879113),
                s = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(968478);
            const u = c().aa6e3300,
                g = ({ retryMessage: e, ...t }, n) => {
                    const s = a.Z.isOnline();
                    return r.createElement(i.Z, (0, o.Z)({}, t, { icon: s ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: s ? e : u }));
                },
                p = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(g);
        },
        816024: (e, t, n) => {
            n.r(t), n.d(t, { default: () => se });
            var o = n(807896),
                r = n(202784),
                a = n(400752),
                i = n(83825),
                s = n(996223),
                l = n(325686),
                c = n(292627),
                d = n(365023),
                u = n(530732),
                g = n(392237),
                p = n(111677),
                m = n.n(p),
                f = n(715601),
                h = n(215337),
                v = n(154003),
                b = n(837020),
                y = n(384153);
            function k(e) {
                return y.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function E(e) {
                const t = k(e.onRequestClose);
                return r.createElement(l.Z, { style: Z.container }, r.createElement(l.Z, { style: Z.gradientBar }, r.createElement(h.Z, { angle: 80, colors: [g.default.theme.colors.blue500, g.default.theme.colors.blue700], style: Z.gradient })), r.createElement(l.Z, { style: Z.content }, r.createElement(l.Z, { style: Z.text }, e.children), r.createElement(v.ZP, { "aria-label": w.close, borderColor: "transparent", color: "text", icon: r.createElement(b.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            const w = { close: m().ia5e7488 },
                Z = g.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, gradient: { height: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function x(e) {
                const { isSideNavLayout: t, width: n } = e,
                    a = t ? c.Z.DesktopVoiceTweetDock : c.Z.MobileVoiceTweetDock,
                    i = t ? [P.root, { maxWidth: n }] : null;
                return r.createElement(
                    a,
                    null,
                    r.createElement(d.Z, { id: "Dock" }, (t, n) => r.createElement(l.Z, (0, o.Z)({ ref: t() }, n({ style: i })), r.createElement(f.Z, null, r.createElement(C, e)))),
                );
            }
            function C(e) {
                const t = r.useRef(null),
                    n = e.isSideNavLayout && P.borderRadius;
                return r.createElement(
                    u.Z,
                    {
                        "aria-label": S.dock,
                        onPress: k(e.onToggleCollapsed),
                        ref: function (e) {
                            t.current = e;
                        },
                        style: [T.container, n],
                    },
                    r.createElement(l.Z, { style: [T.innerContainer, n] }, r.createElement(E, e)),
                );
            }
            const S = { dock: m().ddd5cfe2 },
                T = g.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                P = g.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
            var R = n(744610),
                L = n(537392),
                D = n(565058);
            const I = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                M = { fn: () => Promise.resolve() },
                N = (0, D.cn)(M),
                z = (0, D.cn)(null);
            function O() {
                return (0, a.b9)(z);
            }
            var H = n(625944),
                _ = n(187669),
                B = n(731708),
                V = n(63274);
            const U = 0.85,
                A = 0.7635,
                F = 0.5,
                W = 812,
                j = 300;
            function q(e) {
                const t = e.borderRadiiPx.large,
                    n = e.spaces.space16,
                    o = e.spacesPx.space8;
                return { borderRadius: t, paddingHorizontal: n, marginVertical: e.spaces.space20, marginVerticalPx: e.spacesPx.space20, shadowOffset: o };
            }
            const $ = { collapse: m().d227d19e, unfollow: m().c0f56044 },
                K = { collapse: { label: $.collapse }, unfollow: { label: $.unfollow } };
            function G(e) {
                return r.createElement(
                    l.Z,
                    { style: J.container },
                    r.createElement(v.ZP, {
                        "aria-label": $.collapse,
                        hoverLabel: K.collapse,
                        icon: r.createElement(V.default, { style: J.topBarButtonIcon }),
                        onPress: function () {
                            e.animation.springTo("collapse");
                        },
                        pullLeft: !0,
                        size: "medium",
                        type: "primaryText",
                    }),
                    r.createElement(l.Z, { style: J.expandedShellHeaderRight }, r.createElement(v.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, r.createElement(B.ZP, { size: "body", weight: "bold" }, $.unfollow))),
                );
            }
            const J = g.default.create((e) => {
                const t = q(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function X(e, t, n) {
                const o = r.useRef({ state: I.full, animatedPanOffset: 0 }),
                    i = (0, L.iv)(),
                    s = r.useMemo(
                        () =>
                            (function (e, t, n) {
                                let o = e;
                                if (t) {
                                    o = Math.min(W, e);
                                    const { height: t, top: r } = n || {},
                                        a = r + t;
                                    if (a - o < 0) {
                                        const e = a - q(g.default.theme).marginVerticalPx;
                                        e > j && (o = e);
                                    }
                                }
                                return { collapse: o * F, half: o * A, sheetMaxHeight: o * U, full: o };
                            })(i.height, e.isSideNavLayout, n),
                        [i.height, e.isSideNavLayout, n],
                    ),
                    l = r.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case I.exit:
                                    case I.collapse:
                                        t = 0;
                                        break;
                                    case I.full:
                                    default:
                                        t = s.full;
                                }
                                return s.full - t;
                            },
                        [s],
                    ),
                    c = r.useRef(new R.Z.Value(s.full)).current;
                (0, _.q)(() => {
                    const e = l(o.current.state);
                    R.Z.spring(c, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: d, onToggleCollapsed: u } = e,
                    p = O(),
                    m = r.useMemo(
                        () =>
                            function (e, t) {
                                (o.current.state = e), p(e);
                                const n = l(o.current.state),
                                    r = t?.vy;
                                return new Promise((t) => {
                                    if (e === I.exit) return d(), t();
                                    R.Z.spring(c, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: r }).start(() => {
                                        e === I.collapse && u(), t();
                                    });
                                });
                            },
                        [p, l, c, d, u],
                    ),
                    f = (0, a.b9)(N);
                return (
                    r.useEffect(() => {
                        f({ fn: m });
                    }, [f, m]),
                    { animatedPan: c, shellHeights: s, springTo: m }
                );
            }
            function Q(e) {
                const t = q(g.default.theme),
                    n = e.animation.shellHeights.full - (e.isSideNavLayout ? t.shadowOffset : 0);
                return r.createElement(R.Z.View, { style: [ee.expandedShell, ...(e.isSideNavLayout ? [ee.expandedShellSideNav] : []), { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, r.createElement(Y, e));
            }
            function Y(e) {
                return (
                    r.useEffect(
                        () => (
                            e.isSideNavLayout || H.Z.disable(),
                            function () {
                                H.Z.enable();
                            }
                        ),
                        [e.isSideNavLayout],
                    ),
                    r.createElement(d.Z, { id: "DockExpanded" }, (t, n) => r.createElement(l.Z, (0, o.Z)({ ref: t() }, n({ style: ee.expandedShellContent })), r.createElement(G, e), r.createElement(f.Z, { style: ee.container }, r.createElement(R.Z.View, { id: "DockContentWrapper", style: { paddingBottom: R.Z.add(0, e.animation.animatedPan) } }, e.children))))
                );
            }
            const ee = g.default.create((e) => ({ expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderTopStartRadius: "inherit", borderTopEndRadius: "inherit" }, expandedShellSideNav: { borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground, overflow: "hidden" }, container: { flex: 1, scrollbarWidth: "none", overflow: "scroll", padding: e.spaces.space8 } }));
            function te(e) {
                const t = e.isSideNavLayout ? c.Z.WideExpandedSpaceDock : c.Z.NarrowExpandedSpaceDock;
                return r.createElement(t, null, r.createElement(ne, e));
            }
            function ne(e) {
                const t = q(g.default.theme),
                    n = e.width + t.shadowOffset,
                    a = e.isSideNavLayout ? [ae.root, { width: n }] : null,
                    [i, s] = r.useState(),
                    c = r.useRef(null),
                    d = (0, L.iv)();
                return (
                    r.useLayoutEffect(
                        function () {
                            const e = c.current?.getBoundingClientRect();
                            e && s(e);
                        },
                        [d.height],
                    ),
                    r.createElement(l.Z, { ref: c, style: a }, r.createElement(oe, (0, o.Z)({}, e, { layout: i })))
                );
            }
            function oe(e) {
                const { layout: t, ...n } = e,
                    [o, a] = r.useState(!1),
                    i = O(),
                    s = X(
                        n,
                        () => {
                            a(!0), i(I.full);
                        },
                        t,
                    ),
                    c = r.useMemo(() => new R.Z.Value(s.shellHeights.full), [s.shellHeights.full]),
                    d = { ...e, mounted: o, animation: s },
                    u = r.useRef(c);
                (u.current = c),
                    r.useEffect(() => {
                        const e = u.current;
                        if (!e) return;
                        const t = s.shellHeights.full;
                        R.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [s?.shellHeights?.full]);
                const g = r.useRef({ animatedHeight: c, animation: s, contentProps: d });
                return (
                    (g.current.animatedHeight = c),
                    (g.current.animation = s),
                    (g.current.contentProps = d),
                    r.useMemo(() => {
                        e.children, e.layout;
                        const { animatedHeight: t, animation: n, contentProps: o } = g.current;
                        let a;
                        a = e.isSideNavLayout ? ae.container : re.container;
                        const i = e.isSideNavLayout ? ae.expandedShellContainer : re.expandedShellContainer,
                            s = { height: t, opacity: n.animatedPan.interpolate({ inputRange: [n.shellHeights.collapse, n.shellHeights.full], outputRange: [1, 0] }) };
                        return r.createElement(R.Z.View, { style: [a, re.forceGPULayer, s] }, r.createElement(l.Z, { style: i }, r.createElement(Q, o)));
                    }, [e.isSideNavLayout, e.layout, e.children, o])
                );
            }
            const re = g.default.create((e) => {
                    const t = q(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, expandedShellContainer: { width: "100%", borderRadius: t } };
                }),
                ae = g.default.create((e) => {
                    const t = q(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", padding: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 } };
                });
            function ie(e) {
                const [t, n] = r.useState(!0),
                    [l, c] = (0, a.KO)(i.P),
                    d = () => n((e) => !e),
                    u = () => {
                        c(null), n(!0);
                    };
                if (null === l) return null;
                const [g, p] = l;
                return r.createElement(r.Fragment, null, t ? r.createElement(x, (0, o.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(s.J, { path: g })) : r.createElement(te, (0, o.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(s.J, { path: p })));
            }
            const se = r.memo(ie);
        },
        376293: (e, t, n) => {
            n.d(t, { $f: () => x, KV: () => v, LI: () => R, SC: () => Z, Vt: () => k, ed: () => L, op: () => C });
            var o = n(202784),
                r = n(190286),
                a = n(111677),
                i = n.n(a),
                s = n(616894),
                l = n(314948),
                c = n(516951),
                d = n(163390);
            const u = i().cfd2f35e,
                g = i().f9e45cfb,
                p = i().fcd4d489,
                m = i().a6450e84,
                f = i().g353ad73,
                h = i().ad00a739,
                v = i().a9fd20be,
                b = i().j546fb79,
                y = i().c9623eeb,
                k = i().e133be4e,
                E = i().he43bca4,
                w = i().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                x = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: g({ screenName: e }), label: m, text: t ? h({ screenName: e }) : f({ screenName: e }) }),
                C = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: o, testID: r, unblockAction: a, unblockSubtext: i, user: s }) => {
                    let l,
                        u = c.Z;
                    const g = R(s, n);
                    switch (o) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                s.blocking ? a(g) : e(g);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    s.blocking ? a(g) : e(g);
                                });
                    }
                    return { confirmation: g, onClick: u, testID: r, shortcutKey: l, Icon: S(s.blocking), text: P(s), subText: T({ user: s, blockSubtext: t, unblockSubtext: i }) };
                },
                S = (e) => (e ? l.default : s.default),
                T = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                P = (e) => (e.blocking ? y({ screenName: e.screen_name }) : p({ screenName: e.screen_name })),
                R = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? w : E }))(e.screen_name, t) : x(e.screen_name, t)),
                L = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: a, headline: i, label: s, text: l } = e;
                    return o.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: a, headline: i, onCancel: n, onConfirm: t, text: l });
                };
        },
        712816: (e, t, n) => {
            n.d(t, { d: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => r });
            var o = n(111677);
            const r = { defaultToast: { text: n.n(o)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, n) => {
            n.d(t, { OX: () => g, Od: () => d, PN: () => p, uq: () => c, wR: () => f });
            var o = n(251067),
                r = n(522171),
                a = n(111677),
                i = n.n(a),
                s = n(912021),
                l = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                g = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                p = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, s.Z)((e) => {
                    const t = d(e),
                        n = g(),
                        o = p(),
                        r = {};
                    return (
                        [...n, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(807469),
                r = n(502909),
                a = n(600823);
            const i = (0, r.ZP)({ namespace: "topics" }),
                s = (0, r.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, o) => (n(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: o } = t.meta,
                        r = e.entities[o];
                    return r ? ((e, t, n, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...o() } } } : e))(e, t, r, n) : e;
                },
                d = { follow: (0, r.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...s, ...l, ...d, customActionTypes: (0, r.X7)(d) },
                g = a.Z.register(u);
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(r.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                i = n(143778),
                s = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                g = "none";
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: f, retryable: h } = this.props;
                    switch (r) {
                        case c:
                            return h ? o.createElement(s.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? o.createElement(l.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case g:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        215337: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(325686);
            class a extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, n) => {
                                    const o = t[n];
                                    let r = "";
                                    return o && (r = ` ${100 * o}%`), e + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: n, style: a } = this.props;
                    return o.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, n);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = a;
        },
        428259: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        883437: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M21.503 6.745c.475 1.032.748 2.176.748 3.385 0 2.955-1.608 5.68-4.196 7.11l-8.054 4.459v-3.452l2-2v2.06l5.086-2.816c1.952-1.079 3.164-3.133 3.164-5.36 0-.644-.101-1.264-.286-1.847l1.538-1.538zM3.71 21.71l-1.414-1.414 3.401-3.401C3.34 15.5 1.751 12.935 1.751 10c0-4.411 3.591-8 8.005-8h4.366c1.818 0 3.494.608 4.849 1.62l1.325-1.325 1.414 1.414-18 18.001zm3.462-6.29L17.545 5.047C16.567 4.386 15.389 4 14.123 4H9.757c-3.311 0-6.005 2.691-6.005 6 0 2.389 1.401 4.451 3.421 5.42z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        391366: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        258292: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        730895: (e, t, n) => {
            var o = n(821176);
            e.exports = function () {
                var e = o(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock.56e27e3a.js.map
