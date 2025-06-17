"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock", "icons/IconAtBold-js", "icons/IconBookStrokeOff-js", "icons/IconBookmarkCloseStroke-js", "icons/IconFilterFill-js", "icons/IconItalic-js", "icons/IconNumberedList-js", "icons/IconThumbsUp-js"],
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
            const H = Object.freeze({ collapse: "collapse", exit: "exit", full: "full" }),
                I = { fn: () => Promise.resolve() },
                M = (0, L.cn)(I),
                z = (0, L.cn)(null);
            function N() {
                return (0, a.b9)(z);
            }
            var V = n(625944),
                B = n(187669),
                O = n(731708),
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
                    r.createElement(s.Z, { style: J.expandedShellHeaderRight }, r.createElement(v.ZP, { onPress: e.onRequestClose, pullRight: !0, size: "medium", type: "destructiveText" }, r.createElement(O.ZP, { size: "body", weight: "bold" }, $.unfollow))),
                );
            }
            const J = h.default.create((e) => {
                const t = q(e).paddingHorizontal;
                return { container: { marginTop: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", paddingHorizontal: t }, expandedShellHeaderRight: { flexDirection: "row" }, topBarButtonIcon: { color: e.colors.text, width: e.spaces.space16 } };
            });
            function X(e, t, n) {
                const o = r.useRef({ state: H.full, animatedPanOffset: 0 }),
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
                                    case H.exit:
                                    case H.collapse:
                                        t = 0;
                                        break;
                                    case H.full:
                                    default:
                                        t = l.full;
                                }
                                return l.full - t;
                            },
                        [l],
                    ),
                    c = r.useRef(new R.Z.Value(l.full)).current;
                (0, B.q)(() => {
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
                                    if (e === H.exit) return d(), t();
                                    R.Z.spring(c, { overshootClamping: !0, toValue: n, useNativeDriver: !1, velocity: r }).start(() => {
                                        e === H.collapse && u(), t();
                                    });
                                });
                            },
                        [g, s, c, d, u],
                    ),
                    p = (0, a.b9)(M);
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
                            e.isSideNavLayout || V.Z.disable(),
                            function () {
                                V.Z.enable();
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
                            a(!0), i(H.full);
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
        388941: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 4.25c-4.28 0-7.75 3.47-7.75 7.75s3.47 7.75 7.75 7.75c1.499 0 2.894-.424 4.078-1.158l1.318 2.125c-1.568.972-3.418 1.534-5.396 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.75 12 1.75 22.25 6.339 22.25 12c0 .534-.032 1.061-.08 1.549-.223 2.285-2.31 3.65-4.378 3.471-1.128-.098-2.114-.621-2.817-1.396-1.008 1.136-2.467 1.802-4.077 1.576-2.748-.386-4.354-3.149-3.973-5.86s2.686-4.924 5.434-4.538c.793.111 1.491.421 2.074.87l.038-.32 2.482.298-.584 4.861c-.122 1.015.621 1.93 1.64 2.019.927.081 1.605-.515 1.674-1.223.042-.426.068-.869.068-1.306 0-4.28-3.47-7.75-7.75-7.75H12zm.01 5.026c-1.08-.152-2.377.746-2.611 2.41s.765 2.885 1.845 3.036c1.08.152 2.377-.746 2.611-2.41.234-1.664-.765-2.884-1.845-3.036z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        416276: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.002 4h7.764c1.23 0 2.386.49 3.236 1.32.85-.83 2.006-1.32 3.236-1.32h7.764v16h-8.146c-.839 0-1.488.51-1.959 1.45h-1.789l-.171-.34C10.598 20.43 9.906 20 9.148 20H1.002V4zm10 3.26C10.53 6.48 9.685 6 8.766 6H3.002v12h6.146c.658 0 1.292.16 1.854.46V7.26zm2 11.21c.527-.29 1.143-.47 1.854-.47h6.146V6h-5.764c-.918 0-1.764.48-2.236 1.26v11.21zM19 11h-4V9h4v2zm0 4h-4v-2h4v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        738398: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M16.586 4l-2.043-2.04L15.957.54 18 2.59 20.043.54l1.414 1.42L19.414 4l2.043 2.04-1.414 1.42L18 5.41l-2.043 2.05-1.414-1.42L16.586 4zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V11h2v11.94l-8-5.71-8 5.71V4.5C4 3.12 5.119 2 6.5 2h4.502v2H6.5z" })) }, { writingDirection: t });
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
        856661: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M9 6h3.731L9.184 18H5v2h10v-2h-3.731l3.547-12H19V4H9v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        89085: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M3.905 6.516h-.423V4.354h.263c.564-.015 1.018-.126 1.361-.332s.61-.529.8-.972h2.093v7.949H5.471v-4.94c-.351.305-.873.457-1.567.457zm2.194 10.88c.403-.273.69-.542.861-.81.171-.265.257-.566.257-.9 0-.304-.087-.542-.262-.713-.175-.172-.426-.257-.753-.257-.35 0-.623.096-.821.285-.198.19-.297.457-.297.799 0 .145.016.296.046.457l-2.577-.228c-.023-.175-.034-.342-.034-.502 0-.547.16-1.018.479-1.413s.764-.699 1.334-.913c.57-.213 1.224-.319 1.961-.319 1.125 0 2.009.221 2.651.662.643.441.964 1.079.964 1.916 0 .532-.112.998-.336 1.397-.224.399-.584.766-1.078 1.1-.562.381-1.372.768-2.428 1.164H10v1.881H2.542v-1.687c1.642-.806 2.828-1.445 3.558-1.917zM22 6H12v2h10V6zm0 10H12v2h10v-2z" })) }, { writingDirection: t });
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
        487606: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2 4c1.66 0 3-1.34 3-3h1c0 1.66 1.34 3 3 3v1C7.34 5 6 6.34 6 8H5c0-1.66-1.34-3-3-3V4zm7.89 4.9C11.26 7.53 12 5.35 12 2h2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1zm7.32 3.1c-.97-.42-1.81-.97-2.53-1.69-.71-.71-1.27-1.56-1.68-2.52-.42.96-.98 1.81-1.69 2.52-.72.72-1.56 1.27-2.53 1.69.97.42 1.81.97 2.53 1.69.71.71 1.27 1.56 1.69 2.52.41-.96.97-1.81 1.68-2.52.72-.72 1.56-1.27 2.53-1.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        946474: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                r = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18.36 8h-2.68l.42-2.52C16.4 3.66 15 2 13.15 2c-1.07 0-2.06.57-2.59 1.51l-3 5.24c-.04.06-.08.11-.14.15C6.96 8.35 6.27 8 5.5 8H2v13h14.2c2.1 0 3.92-1.45 4.39-3.5l1.19-5.22C22.27 10.09 20.61 8 18.36 8zM6 19H4v-9h1.5c.27 0 .5.22.5.5V19zm13.83-7.17l-1.19 5.22C18.38 18.19 17.37 19 16.2 19H8v-8.16c.54-.2 1-.58 1.3-1.1l2.99-5.24c.18-.31.5-.5.86-.5.61 0 1.07.55.97 1.15l-.8 4.85h5.04c.97 0 1.68.89 1.47 1.83z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock.3b0f5a6a.js.map
