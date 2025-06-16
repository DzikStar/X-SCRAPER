"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock", "icons/IconBookmarkPlusStroke-js", "icons/IconFeedback-js", "icons/IconFilterFill-js", "icons/IconRepliesStroke-js", "icons/IconStrikethrough-js", "icons/IconThumbsUpFill-js"],
    {
        290402: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(807896),
                r = n(202784),
                a = n(182056),
                i = n(879113),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(968478);
            const u = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, n) => {
                    const l = a.Z.isOnline();
                    return r.createElement(i.Z, (0, o.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: g.icon }), retryMessage: l ? e : u }));
                },
                g = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        816024: (e, t, n) => {
            n.r(t), n.d(t, { default: () => le });
            var o = n(807896),
                r = n(202784),
                a = n(400752),
                i = n(83825),
                l = n(996223),
                s = n(325686),
                c = n(292627),
                d = n(365023),
                u = n(530732),
                h = n(392237),
                g = n(111677),
                m = n.n(g),
                p = n(715601),
                f = n(215337),
                v = n(154003),
                b = n(837020),
                y = n(384153);
            function k(e) {
                return y.Z.selectiveClickHandler((t) => {
                    "function" == typeof e && e();
                });
            }
            function w(e) {
                const t = k(e.onRequestClose);
                return r.createElement(s.Z, { style: Z.container }, r.createElement(s.Z, { style: Z.gradientBar }, r.createElement(f.Z, { angle: 80, colors: [h.default.theme.colors.blue500, h.default.theme.colors.blue700], style: Z.gradient })), r.createElement(s.Z, { style: Z.content }, r.createElement(s.Z, { style: Z.text }, e.children), r.createElement(v.ZP, { "aria-label": E.close, borderColor: "transparent", color: "text", icon: r.createElement(b.default, null), onPress: t, size: "medium", testID: "close" })));
            }
            const E = { close: m().ia5e7488 },
                Z = h.default.create((e) => ({ container: { borderRadius: "inherit", overflow: "hidden" }, gradientBar: { position: "absolute", height: "50%", width: "100%" }, gradient: { height: "100%" }, content: { borderRadius: "inherit", marginTop: 3, backgroundColor: e.colors.navigationBackground, paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space4, flexDirection: "row", justifyContent: "center", alignItems: "center" }, text: { marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, flexDirection: "column", flex: 1 } }));
            function x(e) {
                const { isSideNavLayout: t, width: n } = e,
                    a = t ? c.Z.DesktopVoiceTweetDock : c.Z.MobileVoiceTweetDock,
                    i = t ? [P.root, { maxWidth: n }] : null;
                return r.createElement(
                    a,
                    null,
                    r.createElement(d.Z, { id: "Dock" }, (t, n) => r.createElement(s.Z, (0, o.Z)({ ref: t() }, n({ style: i })), r.createElement(p.Z, null, r.createElement(C, e)))),
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
                    r.createElement(s.Z, { style: [T.innerContainer, n] }, r.createElement(w, e)),
                );
            }
            const S = { dock: m().ddd5cfe2 },
                T = h.default.create((e) => ({ container: { backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.xSmall }, innerContainer: { backgroundColor: e.colors.navigationBackground } })),
                P = h.default.create((e) => ({ root: { alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space20, width: "100%" }, borderRadius: { borderRadius: e.borderRadii.xLarge } }));
            var R = n(744610),
                D = n(537392),
                L = n(565058);
            const M = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                I = { fn: () => Promise.resolve() },
                z = (0, L.cn)(I),
                H = (0, L.cn)(null);
            function N() {
                return (0, a.b9)(H);
            }
            var B = n(625944),
                O = n(187669),
                V = n(731708),
                _ = n(63274);
            const U = 0.85,
                A = 0.7635,
                F = 0.5,
                j = 812,
                W = 300;
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
                    s.Z,
                    { style: J.container },
                    r.createElement(v.ZP, {
                        "aria-label": $.collapse,
                        hoverLabel: K.collapse,
                        icon: r.createElement(_.default, { style: J.topBarButtonIcon }),
                        onPress: function () {
                            e.animation.springTo("collapse");
                        },
                        pullLeft: !0,
                        size: "medium",
                        type: "primaryText",
                    }),
                    r.createElement(s.Z, { style: J.expandedShellHeaderRight }, r.createElement(v.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, r.createElement(V.ZP, { size: "body", weight: "bold" }, $.unfollow))),
                );
            }
            const J = h.default.create((e) => {
                const t = q(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function X(e, t, n) {
                const o = r.useRef({ state: M.full, animatedPanOffset: 0 }),
                    i = (0, D.iv)(),
                    l = r.useMemo(
                        () =>
                            (function (e, t, n) {
                                let o = e;
                                if (t) {
                                    o = Math.min(j, e);
                                    const { height: t, top: r } = n || {},
                                        a = r + t;
                                    if (a - o < 0) {
                                        const e = a - q(h.default.theme).marginVerticalPx;
                                        e > W && (o = e);
                                    }
                                }
                                return { collapse: o * F, half: o * A, sheetMaxHeight: o * U, full: o };
                            })(i.height, e.isSideNavLayout, n),
                        [i.height, e.isSideNavLayout, n],
                    ),
                    s = r.useMemo(
                        () =>
                            function (e) {
                                let t;
                                switch (e) {
                                    case M.exit:
                                    case M.collapse:
                                        t = 0;
                                        break;
                                    case M.full:
                                    default:
                                        t = l.full;
                                }
                                return l.full - t;
                            },
                        [l],
                    ),
                    c = r.useRef(new R.Z.Value(l.full)).current;
                (0, O.q)(() => {
                    const e = s(o.current.state);
                    R.Z.spring(c, { toValue: e, useNativeDriver: !1 }).start(t);
                });
                const { onRequestClose: d, onToggleCollapsed: u } = e,
                    g = N(),
                    m = r.useMemo(
                        () =>
                            function (e, t) {
                                (o.current.state = e), g(e);
                                const n = s(o.current.state),
                                    r = t?.vy;
                                return new Promise((t) => {
                                    if (e === M.exit) return d(), t();
                                    R.Z.spring(c, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: r }).start(() => {
                                        e === M.collapse && u(), t();
                                    });
                                });
                            },
                        [g, s, c, d, u],
                    ),
                    p = (0, a.b9)(z);
                return (
                    r.useEffect(() => {
                        p({ fn: m });
                    }, [p, m]),
                    { animatedPan: c, shellHeights: l, springTo: m }
                );
            }
            function Q(e) {
                const t = q(h.default.theme),
                    n = e.animation.shellHeights.full - (e.isSideNavLayout ? t.shadowOffset : 0);
                return r.createElement(R.Z.View, { style: [ee.expandedShell, ...(e.isSideNavLayout ? [ee.expandedShellSideNav] : []), { height: n, transform: [{ translate3d: "0, 0, 0" }, { translateY: e.animation.animatedPan }] }] }, r.createElement(Y, e));
            }
            function Y(e) {
                return (
                    r.useEffect(
                        () => (
                            e.isSideNavLayout || B.Z.disable(),
                            function () {
                                B.Z.enable();
                            }
                        ),
                        [e.isSideNavLayout],
                    ),
                    r.createElement(d.Z, { id: "DockExpanded" }, (t, n) => r.createElement(s.Z, (0, o.Z)({ ref: t() }, n({ style: ee.expandedShellContent })), r.createElement(G, e), r.createElement(p.Z, { style: ee.container }, r.createElement(R.Z.View, { id: "DockContentWrapper", style: { paddingBottom: R.Z.add(0, e.animation.animatedPan) } }, e.children))))
                );
            }
            const ee = h.default.create((e) => ({ expandedShell: { boxShadow: e.boxShadows.xSmall, width: "100%", height: "100%", borderTopStartRadius: "inherit", borderTopEndRadius: "inherit" }, expandedShellSideNav: { borderRadius: "inherit" }, expandedShellContent: { borderRadius: "inherit", height: "100%", backgroundColor: e.colors.navigationBackground, overflow: "hidden" }, container: { flex: 1, scrollbarWidth: "none", overflow: "scroll", padding: e.spaces.space8 } }));
            function te(e) {
                const t = e.isSideNavLayout ? c.Z.WideExpandedSpaceDock : c.Z.NarrowExpandedSpaceDock;
                return r.createElement(t, null, r.createElement(ne, e));
            }
            function ne(e) {
                const t = q(h.default.theme),
                    n = e.width + t.shadowOffset,
                    a = e.isSideNavLayout ? [ae.root, { width: n }] : null,
                    [i, l] = r.useState(),
                    c = r.useRef(null),
                    d = (0, D.iv)();
                return (
                    r.useLayoutEffect(
                        function () {
                            const e = c.current?.getBoundingClientRect();
                            e && l(e);
                        },
                        [d.height],
                    ),
                    r.createElement(s.Z, { ref: c, style: a }, r.createElement(oe, (0, o.Z)({}, e, { layout: i })))
                );
            }
            function oe(e) {
                const { layout: t, ...n } = e,
                    [o, a] = r.useState(!1),
                    i = N(),
                    l = X(
                        n,
                        () => {
                            a(!0), i(M.full);
                        },
                        t,
                    ),
                    c = r.useMemo(() => new R.Z.Value(l.shellHeights.full), [l.shellHeights.full]),
                    d = { ...e, mounted: o, animation: l },
                    u = r.useRef(c);
                (u.current = c),
                    r.useEffect(() => {
                        const e = u.current;
                        if (!e) return;
                        const t = l.shellHeights.full;
                        R.Z.spring(e, { toValue: t, useNativeDriver: !1 }).start();
                    }, [l?.shellHeights?.full]);
                const h = r.useRef({ animatedHeight: c, animation: l, contentProps: d });
                return (
                    (h.current.animatedHeight = c),
                    (h.current.animation = l),
                    (h.current.contentProps = d),
                    r.useMemo(() => {
                        e.children, e.layout;
                        const { animatedHeight: t, animation: n, contentProps: o } = h.current;
                        let a;
                        a = e.isSideNavLayout ? ae.container : re.container;
                        const i = e.isSideNavLayout ? ae.expandedShellContainer : re.expandedShellContainer,
                            l = { height: t, opacity: n.animatedPan.interpolate({ inputRange: [n.shellHeights.collapse, n.shellHeights.full], outputRange: [1, 0] }) };
                        return r.createElement(R.Z.View, { style: [a, re.forceGPULayer, l] }, r.createElement(s.Z, { style: i }, r.createElement(Q, o)));
                    }, [e.isSideNavLayout, e.layout, e.children, o])
                );
            }
            const re = h.default.create((e) => {
                    const t = q(e).borderRadius;
                    return { forceGPULayer: { transform: [{ translate3d: "0, 0, 0" }] }, fullHeight: { height: "100%" }, container: { position: "fixed", bottom: 0, width: "100%", backgroundColor: e.colors.maskColor }, expandedShellContainer: { width: "100%", borderRadius: t } };
                }),
                ae = h.default.create((e) => {
                    const t = q(e);
                    return { root: { alignItems: "center", alignSelf: "flex-end", width: "100%", marginVertical: t.marginVertical, marginEnd: e.spacesPx.space20 }, container: { width: "100%" }, expandedShellContainer: { width: "100%", borderRadius: t.borderRadius, overflow: "hidden", padding: t.shadowOffset / 2, marginStart: t.shadowOffset / 2 } };
                });
            function ie(e) {
                const [t, n] = r.useState(!0),
                    [s, c] = (0, a.KO)(i.P),
                    d = () => n((e) => !e),
                    u = () => {
                        c(null), n(!0);
                    };
                if (null === s) return null;
                const [h, g] = s;
                return r.createElement(r.Fragment, null, t ? r.createElement(x, (0, o.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(l.J, { path: h })) : r.createElement(te, (0, o.Z)({}, e, { onRequestClose: u, onToggleCollapsed: d }), r.createElement(l.J, { path: g })));
            }
            const le = r.memo(ie);
        },
        376293: (e, t, n) => {
            n.d(t, { $f: () => x, KV: () => v, LI: () => R, SC: () => Z, Vt: () => k, ed: () => D, op: () => C });
            var o = n(202784),
                r = n(190286),
                a = n(111677),
                i = n.n(a),
                l = n(616894),
                s = n(314948),
                c = n(516951),
                d = n(163390);
            const u = i().cfd2f35e,
                h = i().f9e45cfb,
                g = i().fcd4d489,
                m = i().a6450e84,
                p = i().g353ad73,
                f = i().ad00a739,
                v = i().a9fd20be,
                b = i().j546fb79,
                y = i().c9623eeb,
                k = i().e133be4e,
                w = i().he43bca4,
                E = i().f5f01af6,
                Z = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                x = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: h({ screenName: e }), label: m, text: t ? f({ screenName: e }) : p({ screenName: e }) }),
                C = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: n, source: o, testID: r, unblockAction: a, unblockSubtext: i, user: l }) => {
                    let s,
                        u = c.Z;
                    const h = R(l, n);
                    switch (o) {
                        case Z.PROFILE:
                        case Z.LIST_DETAIL:
                        case Z.FOLLOWERS_LIST:
                            u = () => {
                                l.blocking ? a(h) : e(h);
                            };
                            break;
                        case Z.TWEET:
                        case Z.TWEET_CARET:
                        case Z.RICH_FEEDBACK:
                            (s = d.uq.block),
                                (u = () => {
                                    l.blocking ? a(h) : e(h);
                                });
                    }
                    return { confirmation: h, onClick: u, testID: r, shortcutKey: s, Icon: S(l.blocking), text: P(l), subText: T({ user: l, blockSubtext: t, unblockSubtext: i }) };
                },
                S = (e) => (e ? s.default : l.default),
                T = ({ blockSubtext: e, unblockSubtext: t, user: n }) => (!n.blocking && e ? e(n.screen_name) : n.blocking ? t : void 0),
                P = (e) => (e.blocking ? y({ screenName: e.screen_name }) : g({ screenName: e.screen_name })),
                R = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: b({ screenName: e }), label: k, text: t ? E : w }))(e.screen_name, t) : x(e.screen_name, t)),
                D = ({ confirmation: e, handleConfirm: t, onClose: n }) => {
                    const { confirmButtonType: a, headline: i, label: l, text: s } = e;
                    return o.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: l, confirmButtonType: a, headline: i, onCancel: n, onConfirm: t, text: s });
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
            n.d(t, { OX: () => h, Od: () => d, PN: () => g, uq: () => c, wR: () => p });
            var o = n(251067),
                r = n(522171),
                a = n(111677),
                i = n.n(a),
                l = n(912021),
                s = n(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, l.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = s.ZP.isMac() ? "⌘" : "CTRL",
                h = () => [
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
                g = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                m = (0, l.Z)((e) => {
                    const t = d(e),
                        n = h(),
                        o = g(),
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
                p = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        409438: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(807469),
                r = n(502909),
                a = n(600823);
            const i = (0, r.ZP)({ namespace: "topics" }),
                l = (0, r.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                s = {
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
                u = { ...i, ...l, ...s, ...d, customActionTypes: (0, r.X7)(d) },
                h = a.Z.register(u);
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(r.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(476984),
                a = n.n(r),
                i = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class g extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: d, render: g, renderFailure: m, retryMessage: p, retryable: f } = this.props;
                    switch (r) {
                        case c:
                            return f ? o.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: p }) : n ? o.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: i.Z, retryable: !0 };
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
        916910: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        818088: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17 3V0h2v3h3v2h-3v3h-2V5h-3V3h3zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        971657: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        790093: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        194417: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16 3v8h-3V8.5H3v-3h10V3h3zm5 12.5h-9v3h9v-3zM10 21v-8H7v2.5H3v3h4V21h3zm8-12.5h3v-3h-3v3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        368761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.312 23.736c-.123 0-.246-.03-.358-.091-.241-.132-.392-.385-.392-.659v-.871c0-.414.336-.75.75-.75.256 0 .482.128.617.324 1.905-1.247 4.823-3.192 5.908-4.11 2.256-1.908 3.604-4.732 3.608-7.554 0-.414.336-.749.75-.749s.75.337.749.751c-.004 3.256-1.552 6.507-4.14 8.697-1.326 1.121-5.009 3.546-7.086 4.892-.124.08-.266.12-.408.12zm-2.557-1.897c1.697-1.082 6.672-4.317 8.048-5.48 1.902-1.609 3.04-3.976 3.043-6.329-.006-4.366-3.433-7.787-7.8-7.787l-4.149-.01c-4.375-.001-7.801 3.426-7.801 7.801 0 4.104 3.14 7.204 7.465 7.37.002 1.79.008 2.88.058 3.544-.041.101-.061.21-.055.322.009.178.081.344.198.471.111.241.283.241.552.241.163 0 .316-.053.441-.144zm3.289-18.097c3.529 0 6.298 2.763 6.302 6.287-.003 1.917-.941 3.855-2.512 5.184-1.03.871-4.478 3.16-6.771 4.645l-.002-3.175c0-.403-.319-.734-.722-.749l-.721-.027c-3.49-.135-6.022-2.604-6.022-5.872 0-3.534 2.768-6.302 6.299-6.302l4.149.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        226597: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        155353: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        922449: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M5.996 10.06L6 19.907v-9.851zM6 20.332V21H2V8h1.5c.742 0 1.442.328 1.92.9.334.398.532.886.573 1.407L6 20.331zm15.78-8.051c.238-1.043-.009-2.121-.677-2.958-.67-.841-1.67-1.322-2.743-1.322H14.5l.614-3.684c.095-.578-.068-1.168-.448-1.615-.378-.445-.931-.701-1.516-.701-1.297 0-1.429.537-4.63 5.239C8.182 7.737 8 8.325 8 8.926v12.076h8.2c2.088 0 3.935-1.472 4.389-3.496l1.19-5.224z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock.b13ea58a.js.map
