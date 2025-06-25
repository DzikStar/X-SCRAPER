"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-6107ac1a", "bundle.ConversationParticipants-6107ac1a"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(466999),
                a = n(325686),
                i = n(392237),
                l = n(111677);
            const s = n.n(l)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = s({ title: t });
                    return o.createElement(a.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), o.createElement(a.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                a = n.n(r),
                i = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: g, subtitle: b, title: v, titleDomId: y, titleIconCell: C, titleIconCellSize: E, withBackground: S, withWideContainer: Z } = this.props,
                        { isModal: w } = this.context,
                        k = a ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!S, w, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: c, leftControl: k, middleControl: h, position: u(p, w, r), rightControl: m, style: g, subtitle: b, title: v, titleDomId: y, titleIconCell: C, titleIconCellSize: E, withBackground: x, withWideContainer: Z }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(325686),
                a = n(392237);
            class i extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: l.root });
                }
            }
            const l = a.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
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
                    return r.createElement(i.Z, (0, o.Z)({}, t, { icon: l ? void 0 : r.createElement(d.default, { style: p.icon }), retryMessage: l ? e : u }));
                },
                p = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        333241: (e, t, n) => {
            n.d(t, { Z: () => E });
            n(136728);
            var o = n(202784),
                r = n(638236),
                a = n(811176),
                i = n(111677),
                l = n.n(i),
                s = n(415506),
                c = n(516951),
                d = n(376293),
                u = n(847607),
                h = n(417714),
                p = n(988823);
            const m = "block",
                f = "mute",
                g = "removeFollower",
                b = "report",
                v = "share",
                y = l().j7bb1a43,
                C = l().g00b4c55,
                E = (0, p.M)((e) => {
                    const { onBlock: t, onClose: n, onMute: i, onRemoveFollower: l, onReportUser: p, onShare: E, onUnblock: S, onUnmute: Z, user: w } = e,
                        k = [],
                        x = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...a } = t;
                                o({ confirmButtonLabel: e, ...a })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !w.protected &&
                        !w.blocking &&
                        !w.blocked_by &&
                        k.push({
                            Icon: r.Z,
                            onClick: () => {
                                n(), E();
                            },
                            testID: v,
                            text: C({ screenName: w.screen_name }),
                        });
                    !w.blocking &&
                        k.push({
                            ...(0, u.N1)(
                                w,
                                () => {
                                    n(), i();
                                },
                                () => {
                                    n(), Z();
                                },
                            ),
                            testID: f,
                        });
                    w.followed_by &&
                        k.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    x(e, l);
                                },
                                user: w,
                            }),
                            testID: g,
                        }),
                        k.push((0, d.op)({ blockAction: (e) => x(e, t), source: d.SC.FOLLOWERS_LIST, testID: m, unblockAction: (e) => x(e, S), user: w })),
                        k.push({
                            Icon: s.default,
                            onClick: () => {
                                n(), p();
                            },
                            testID: b,
                            text: y({ screenName: w.screen_name }),
                        });
                    const P = k.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(a.Z, { items: P, onCloseRequested: n });
                });
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => f, w: () => p });
            var o = n(202784),
                r = n(325686),
                a = n(108362),
                i = n(386802),
                l = n(392237),
                s = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                h = n(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: a, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: g, secondaryBar: b, subtitle: v, title: y } = this.props,
                                { isModal: C } = this.context;
                            return o.createElement(r.Z, { style: C ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (C ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: g, secondaryBar: b, style: [C && m.appBarModal, t], subtitle: v, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: p, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: b } = this.context,
                        v = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && v, o.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, i] }, b ? o.createElement(h.Z, { style: m.viewport }, v, n) : n), t ? o.createElement(r.Z, { style: [m.bottomBarModal, !b && !g && m.bottomBarMobile] }, o.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                a = n(229333),
                i = n(414939),
                l = n(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(i.Z, null), ...n }) => {
                const s = r.createElement(l.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(a.Z, { title: e }, s) : s;
            };
        },
        334346: (e, t, n) => {
            n.d(t, { C: () => s, Z: () => l });
            var o = n(807896),
                r = n(202784),
                a = n(524084),
                i = n(768572);
            const l = "stable_sort_index",
                s = r.forwardRef((e, t) => {
                    const n = e.cacheKey;
                    return r.createElement(i.ZP, { identifier: n }, r.createElement(a.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                r = n(202784),
                a = n(771099);
            const i = (e) => (t) => r.createElement(a.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var o = n(202784),
                r = n(154003),
                a = n(111677),
                i = n.n(a),
                l = n(74514),
                s = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                h = n(668214),
                p = n(257166),
                m = n(919022);
            const f = (e, t) => !(!t.allowPromptForPush || !p.selectShouldPromptBrowserPush(e)),
                g = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                b = i().bdba3e1a,
                v = i().c4da7d28,
                y = i().j87c21f4,
                C = i().iebc30ca,
                E = i().dc740eb2;
            class S extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": v, hoverLabel: { label: C }, icon: o.createElement(l.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": b, hoverLabel: { label: y }, icon: o.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: o } = this.props;
                    return n(o, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const Z = g(S);
        },
        292257: (e, t, n) => {
            n.d(t, { Z: () => y });
            var o = n(202784),
                r = n(325686),
                a = n(154003),
                i = n(392237),
                l = n(111677),
                s = n.n(l);
            const c = s().da878dc0,
                d = s().ec2d8342,
                u = i.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                h = ({ onAccept: e, onDecline: t }) => o.createElement(r.Z, { style: u.root }, o.createElement(a.ZP, { "aria-label": d, onPress: t, size: "small", style: [u.followerRequestActionButton, u.declineButton], type: "destructiveOutlined" }, d), o.createElement(a.ZP, { "aria-label": c, onPress: e, size: "small", style: u.followerRequestActionButton, type: "brandOutlined" }, c));
            var p = n(68292),
                m = n(71620),
                f = n(668214),
                g = n(466036);
            const b = (0, f.Z)().propsFromActions(() => ({ acceptPendingFollower: g.WC, createLocalApiErrorHandler: (0, m.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: g.X }));
            class v extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: n } = this.props;
                            e({ id_str: n }).catch(t(p.D));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: n } = this.props;
                            t({ id_str: n }).catch(e(p.D));
                        });
                }
                render() {
                    return o.createElement(h, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const y = b(v);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                a = n(668214),
                i = n(997174),
                l = n(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && n !== a) || o !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => p });
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
            class p extends o.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: a, loadingMessage: i, onRequestRetry: d, render: p, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? o.createElement(l.Z, { icon: a, onRequestRetry: d, retryMessage: f }) : n ? o.createElement(s.m, { failureMessage: n }) : m();
                        case u:
                            return o.createElement(s.J, { "aria-label": e, color: t, loadingMessage: i });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => o });
            class o {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new o();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var o = n(202784),
                r = n(325686),
                a = n(392237),
                i = n(111677),
                l = n.n(i),
                s = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                h = n(173739);
            const p = l().jcf3e7a2;
            function m({ animation: e, autoplay: t }) {
                const [n, a] = o.useState(t),
                    [i, l] = o.useState(0);
                return (
                    o.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && l(Math.round(e.currentTime));
                        });
                    }, [e]),
                    o.createElement(
                        r.Z,
                        { style: f.container },
                        o.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? o.createElement(s.default, null) : o.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        o.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        o.createElement(
                            r.Z,
                            { style: f.slider },
                            o.createElement(h.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: l, withControls: s } = e,
                    c = o.useRef(void 0),
                    d = o.useRef({ animationLoaded: !1 }),
                    u = o.useRef(null),
                    [h, p] = o.useState(!1);
                return (
                    o.useEffect(() => {
                        function o(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            b.load().then((r) => {
                                if (r && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        s = r.loadAnimation(a);
                                    (c.current = s),
                                        (s.onError = (e) => {
                                            const t = new v(e);
                                            "function" == typeof l && l(t), o(s, t);
                                        }),
                                        s.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (s.play(), i && i());
                                        }),
                                        s.addEventListener("complete", () => {
                                            o(s);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, l, s]),
                    o.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    o.createElement(r.Z, null, o.createElement(r.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, o.createElement("div", { ref: u, style: e.animationStyle }), s && c.current && h && o.createElement(m, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    o.useEffect(() => {
                        b.load();
                    }, []),
                    null
                );
            };
            const b = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class v extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, v), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                i = n(149170),
                l = n(40644);
            const s = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = s, Icon: n = i.default, iconSize: r = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: h, testID: p, withDarkBackground: m = !1 }) {
                const f = o.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = o.useMemo(() => ({ label: t }), [t]);
                return o.createElement(l.ZP, { Icon: n, activeColor: e || (m ? "white" : void 0), "aria-label": t, backgroundColor: m ? "translucentBlack77" : "transparent", color: m ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: h, testID: p });
            };
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: l, value: s, ...c }) => {
                const { direction: d } = (0, a.Z)(),
                    u = { ...c, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: l, onDarkBackground: i, value: [c.min, s], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return o.createElement(r.Z, u);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var o = n(202784),
                r = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const o = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: o };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                m = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [f, g] = o.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = o.useRef(!1);
                    return (
                        o.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        o.useEffect(() => {
                            if (b.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        o.useEffect(() => {
                            b.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        o.useMemo(() => {
                            const e = h[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return o.createElement(
                                r.Z,
                                { style: [m.root, n] },
                                t ? o.createElement("span", { style: s }, o.createElement(l.ZP, d, f.oldText)) : null,
                                o.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(b.current, g),
                                        style: c,
                                    },
                                    o.createElement(l.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, b, g])
                    );
                };
        },
        40644: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var o = n(202784),
                r = n(325686),
                a = n(461756),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(224162),
                d = n(491915),
                u = n(392237),
                h = n(551611),
                p = n(111677),
                m = n.n(p),
                f = n(891198),
                g = n(537392),
                b = n(280278);
            const v = m().e8d93005,
                y = u.default.create((e) => ({ count: { paddingHorizontal: e.spacesPx.space4, minWidth: `calc(1em + 2 * ${e.spaces.space12})` }, narrowCount: { paddingEnd: 0, paddingStart: e.spacesPx.space4, minWidth: `calc(1em + ${e.spaces.space4})` } })),
                C = ({ color: e, count: t }) => {
                    const n = (0, f.wl)(t, !0);
                    return o.createElement(g.ZP, null, ({ containerWidth: r }) => {
                        return o.createElement(b.ZP, { color: e, count: t, size: "subtext2", style: [y.count, ((a = r), a < u.default.theme.breakpoints.small && y.narrowCount)] }, t > 0 ? (((e) => e < u.default.theme.breakpoints.xxSmall)(r) || n.length >= 5 ? v(t) : n) : void 0);
                        var a;
                    });
                };
            class E extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = (e, t) => {
                            const { activeColor: n, color: a, decoration: l } = this.props;
                            return o.createElement(c.ZP.Consumer, null, ({ direction: s }) => o.createElement(i.ZP, { color: e ? n : a, dir: s, style: [w.inner, e && "blue500" === n && w.blue500] }, o.createElement(r.Z, { ref: this.props.actionIconContainerRef }, t ? this._renderButton(t) : null, this._renderIcon()), l, this._renderCount()));
                        }),
                        (this._renderButton = (e) => {
                            const { activeColor: t, backgroundColor: n, hoverLabel: r, iconSize: a, isActive: i, isDisabled: c, showBackgroundWhenActive: d } = this.props,
                                h = l.Z.generate({ backgroundColor: u.default.theme.colors[n], color: u.default.theme.colors[t], insetFocusRing: !0 }),
                                p = d && i && !e?.isHovered;
                            return o.createElement(s.Z, { hoverLabel: r, interactiveStyles: h, interactivityState: e, style: [u.default.absoluteFill, Z[p ? "haloBackground" : n], !c && w.iconBackground, "small" === a && w.iconSmallBoundingBox, p && w.haloBoundingBox] });
                        }),
                        (this._renderIcon = () => {
                            const { ActiveIcon: e, iconSize: t, isActive: n, isDisabled: r, isFaded: i, onAnimationEnd: l, onAnimationStart: s, onError: c, showAnimation: p, transitionAnimationUrl: m } = this.props;
                            if (!u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled && e && p) return o.createElement(d.ZP, { animation: m || h.Bf, animationContainerStyle: S[t], animationStyle: x, onAnimationEnd: l, onAnimationStart: s, onError: c });
                            {
                                const a = n && e ? e : this.props.Icon;
                                return o.createElement(a, { style: [S[t], !r && i && w.iconFaded] });
                            }
                        }),
                        (this._renderCount = () => {
                            const { count: e, withCount: t } = this.props;
                            return t ? o.createElement(C, { count: e }) : null;
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t, renderWrapper: n } = this.props;
                            n || (e.stopPropagation(), t && t(e));
                        });
                }
                render() {
                    const { "aria-label": e, focusable: t, enableKeyboardShortcuts: n, isActive: i, isDisabled: l, isPresentational: c, keyboardShortcut: h, link: p, preventFocusShift: m, renderMenu: f, renderWrapper: g = o.Fragment, style: b, testID: v } = this.props,
                        y = !u.default.theme.highContrastEnabled && !a.Z.reducedMotionEnabled;
                    return o.createElement(
                        r.Z,
                        { style: [w.root, b] },
                        o.createElement(
                            g,
                            null,
                            c
                                ? this._renderContent(i)
                                : o.createElement(s.Z, { "aria-haspopup": f ? "menu" : void 0, "aria-label": e, disabled: l, enableKeyboardShortcuts: n, focusable: t, interactiveStyles: null, keyboardShortcut: h, link: p, onClick: this._handlePress, preventFocusShift: m, renderMenu: f, style: [w.triggerAreaRoot, w.outlineNone], testID: v }, (e) => {
                                      const { isFocused: t, isHovered: n, isPressed: o } = e,
                                          r = i || n || o || t;
                                      return this._renderContent(r, e);
                                  }),
                        ),
                        y ? o.createElement(d.ZP.Prepare, null) : null,
                    );
                }
            }
            E.defaultProps = { activeColor: "blue500", backgroundColor: "transparent", color: "gray700", count: 0, isDisabled: !1, iconSize: "normal" };
            const S = u.default.create((e) => ({ small: { height: "1em", width: "1em" }, normal: { height: "1.25em", width: "1.25em" }, large: { height: "1.5em", width: "1.5em" } })),
                Z = u.default.create((e) => ({ transparent: { backgroundColor: e.colors.transparent }, translucentBlack77: { backgroundColor: e.colors.translucentBlack77 }, haloBackground: { backgroundColor: e.colors.activeBlack } })),
                w = u.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "flex-start" }, triggerAreaRoot: { justifyContent: "center", minHeight: e.lineHeights.body, overflow: "visible", userSelect: "none" }, inner: { alignItems: "center", display: "flex", justifyContent: "flex-start", transitionProperty: "color", transitionDuration: "0.2s", whiteSpace: "nowrap" }, iconFaded: { opacity: 0.4 }, iconBackground: { borderRadius: e.borderRadii.infinite, margin: -8 }, iconSmallBoundingBox: { margin: -6 }, outlineNone: { outlineStyle: "none" }, blue500: { color: e.colors.blue500 }, white: { color: e.colors.white }, haloBoundingBox: { margin: -6 } })),
                k = "224.5%",
                x = { width: k, height: k };
        },
        551611: (e, t, n) => {
            n.d(t, { Bf: () => r, ZP: () => i });
            var o = n(941978);
            const r = "https://abs.twimg.com/sticky/animations/like.4.json";
            class a extends o.C {
                check(e) {
                    return super.check(e ?? r);
                }
            }
            const i = new a();
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(157396);
            const r = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
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
        151624: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => m });
            var o = n(18198),
                r = n(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                i = r.Z.currentCentroidYOfTouchesChangedAfter,
                l = r.Z.previousCentroidXOfTouchesChangedAfter,
                s = r.Z.previousCentroidYOfTouchesChangedAfter,
                c = r.Z.currentCentroidX,
                d = r.Z.currentCentroidY,
                u = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = l(t, n),
                            r = a(t, n),
                            c = s(t, n),
                            d = i(t, n),
                            u = e.dx + (r - o),
                            h = e.dy + (d - c),
                            p = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / p), (e.vy = (h - e.dy) / p), (e.dx = u), (e.dy = h), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && u._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = c(r.touchHistory)),
                                    (n.y0 = d(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(o) {
                                    h(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    h(t, e.onPanResponderRelease, o, n), p(t), u._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (u._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), h(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    h(t, e.onPanResponderTerminate, o, n), p(t), u._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, n, r) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, r);
            }
            function p(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const m = u;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = {
                centroidDimension: function (e, t, n, r) {
                    var a = e.touchBank,
                        i = 0,
                        l = 0,
                        s = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== s) s.touchActive && s.currentTimeStamp > t && ((i += r && n ? s.currentPageX : r && !n ? s.currentPageY : !r && n ? s.previousPageX : s.previousPageY), (l = 1));
                    else
                        for (var c = 0; c < a.length; c++) {
                            var d = a[c];
                            if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                (i += r && n ? d.currentPageX : r && !n ? d.currentPageY : !r && n ? d.previousPageX : d.previousPageY), l++;
                            }
                        }
                    return l > 0 ? i / l : o.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return o.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return o.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-6107ac1a.1058fc6a.js.map
