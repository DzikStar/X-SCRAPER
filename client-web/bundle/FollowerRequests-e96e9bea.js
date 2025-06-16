"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.FollowerRequests-e96e9bea"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                i = o(325686),
                a = o(392237),
                s = o(111677);
            const l = o.n(s)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = l({ title: t });
                    return n.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), n.createElement(i.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: v, style: b, subtitle: f, title: C, titleDomId: g, titleIconCell: y, titleIconCellSize: _, withBackground: w, withWideContainer: S } = this.props,
                        { isModal: k } = this.context,
                        B = i ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        R = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!w, k, !!v);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: B, middleControl: p, position: u(h, k, r), rightControl: m, style: b, subtitle: f, title: C, titleDomId: g, titleIconCell: y, titleIconCellSize: _, withBackground: R, withWideContainer: S }), v || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                i = o(392237);
            class a extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: s.root });
                }
            }
            const s = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                r = o(202784),
                i = o(182056),
                a = o(879113),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const s = i.Z.isOnline();
                    return r.createElement(a.Z, (0, n.Z)({}, t, { icon: s ? void 0 : r.createElement(d.default, { style: h.icon }), retryMessage: s ? e : u }));
                },
                h = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(p);
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => w });
            o(136728);
            var n = o(202784),
                r = o(638236),
                i = o(811176),
                a = o(111677),
                s = o.n(a),
                l = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                p = o(847607),
                h = o(417714),
                m = o(988823);
            const v = "block",
                b = "mute",
                f = "removeFollower",
                C = "report",
                g = "share",
                y = s().j7bb1a43,
                _ = s().hef5960c,
                w = (0, m.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: a, onMute: s, onRemoveFollower: m, onReportUser: w, onShare: S, onUnblock: k, onUnmute: B, user: R } = e,
                        T = [],
                        P = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...i } = t;
                                n({ confirmButtonLabel: e, ...i })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !R.protected &&
                        !R.blocking &&
                        !R.blocked_by &&
                        T.push({
                            Icon: r.Z,
                            onClick: () => {
                                a(), S();
                            },
                            testID: g,
                            text: _,
                        });
                    !R.blocking &&
                        T.push({
                            ...(0, p.N1)(
                                R,
                                () => {
                                    a(), s();
                                },
                                () => {
                                    a(), B();
                                },
                            ),
                            testID: b,
                        });
                    R.followed_by &&
                        T.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    P(e, m);
                                },
                                user: R,
                            }),
                            testID: f,
                        }),
                        T.push((0, u.op)({ blockAction: (e) => P(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: v, unblockAction: (e) => P(e, k), user: R })),
                        T.push({
                            Icon: l.default,
                            onClick: () => {
                                a(), w();
                            },
                            testID: C,
                            text: y({ screenName: R.screen_name }),
                        });
                    const Z = T.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(i.Z, { items: Z, onCloseRequested: a });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => v, w: () => h });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: v, rightControl: b, secondaryBar: f, subtitle: C, title: g } = this.props,
                                { isModal: y } = this.context;
                            return n.createElement(r.Z, { style: y ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !y, hideBackButton: s, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: v, ref: e, rightControl: b, secondaryBar: f, style: [y && m.appBarModal, t], subtitle: C, title: g, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: h, title: v, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        C = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: v }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && C, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, f && m.containerModal, a] }, f ? n.createElement(p.Z, { style: m.viewport }, C, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !f && !b && m.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                v = h;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                r = o(202784),
                i = o(229333),
                a = o(414939),
                s = o(334346);
            const l = ({ accessibilityTitle: e, footer: t = r.createElement(a.Z, null), ...o }) => {
                const l = r.createElement(s.C, (0, n.Z)({}, o, { footer: t }));
                return e ? r.createElement(i.Z, { title: e }, l) : l;
            };
        },
        334346: (e, t, o) => {
            o.d(t, { C: () => l, Z: () => s });
            var n = o(807896),
                r = o(202784),
                i = o(524084),
                a = o(768572);
            const s = "stable_sort_index",
                l = r.forwardRef((e, t) => {
                    const o = e.cacheKey;
                    return r.createElement(a.ZP, { identifier: o }, r.createElement(i.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(807896),
                r = o(202784),
                i = o(771099);
            const a = (e) => (t) => r.createElement(i.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => S });
            var n = o(202784),
                r = o(154003),
                i = o(111677),
                a = o.n(i),
                s = o(74514),
                l = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                p = o(668214),
                h = o(257166),
                m = o(919022);
            const v = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, p.Z)()
                    .propsFromState(() => ({ shouldPromptPush: v }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: m.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = a().bdba3e1a,
                C = a().c4da7d28,
                g = a().j87c21f4,
                y = a().iebc30ca,
                _ = a().dc740eb2;
            class w extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": C, hoverLabel: { label: y }, icon: n.createElement(s.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: g }, icon: n.createElement(l.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const S = b(w);
        },
        292257: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(325686),
                i = o(154003),
                a = o(392237),
                s = o(111677),
                l = o.n(s);
            const c = l().da878dc0,
                d = l().ec2d8342,
                u = a.default.create((e) => ({ root: { paddingTop: e.spaces.space4, flexDirection: "row", flexGrow: 1, justifyContent: "center" }, declineButton: { marginEnd: e.spaces.space12 }, followerRequestActionButton: { flexGrow: 1 } })),
                p = ({ onAccept: e, onDecline: t }) => n.createElement(r.Z, { style: u.root }, n.createElement(i.ZP, { "aria-label": d, onPress: t, size: "small", style: [u.followerRequestActionButton, u.declineButton], type: "destructiveOutlined" }, d), n.createElement(i.ZP, { "aria-label": c, onPress: e, size: "small", style: u.followerRequestActionButton, type: "brandOutlined" }, c));
            var h = o(68292),
                m = o(71620),
                v = o(668214),
                b = o(466036);
            const f = (0, v.Z)().propsFromActions(() => ({ acceptPendingFollower: b.WC, createLocalApiErrorHandler: (0, m.zr)("FOLLOWER_REQUEST_ACTIONS_CONTAINER"), declinePendingFollower: b.X }));
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAccept = () => {
                            const { acceptPendingFollower: e, createLocalApiErrorHandler: t, userId: o } = this.props;
                            e({ id_str: o }).catch(t(h.D));
                        }),
                        (this._handleDecline = () => {
                            const { createLocalApiErrorHandler: e, declinePendingFollower: t, userId: o } = this.props;
                            t({ id_str: o }).catch(e(h.D));
                        });
                }
                render() {
                    return n.createElement(p, { onAccept: this._handleAccept, onDecline: this._handleDecline });
                }
            }
            const g = f(C);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== i) || n !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        452661: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(18198),
                r = {
                    centroidDimension: function (e, t, o, n) {
                        var i = e.touchBank,
                            a = 0,
                            s = 0,
                            l = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                        if (null !== l) l.touchActive && l.currentTimeStamp > t && ((a += n && o ? l.currentPageX : n && !o ? l.currentPageY : !n && o ? l.previousPageX : l.previousPageY), (s = 1));
                        else
                            for (var c = 0; c < i.length; c++) {
                                var d = i[c];
                                if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                    (a += n && o ? d.currentPageX : n && !o ? d.currentPageY : !n && o ? d.previousPageX : d.previousPageY), s++;
                                }
                            }
                        return s > 0 ? a / s : r.noCentroid;
                    },
                    currentCentroidXOfTouchesChangedAfter: function (e, t) {
                        return r.centroidDimension(e, t, !0, !0);
                    },
                    currentCentroidYOfTouchesChangedAfter: function (e, t) {
                        return r.centroidDimension(e, t, !1, !0);
                    },
                    previousCentroidXOfTouchesChangedAfter: function (e, t) {
                        return r.centroidDimension(e, t, !0, !1);
                    },
                    previousCentroidYOfTouchesChangedAfter: function (e, t) {
                        return r.centroidDimension(e, t, !1, !1);
                    },
                    currentCentroidX: function (e) {
                        return r.centroidDimension(e, 0, !0, !0);
                    },
                    currentCentroidY: function (e) {
                        return r.centroidDimension(e, 0, !1, !0);
                    },
                    noCentroid: -1,
                };
            const i = r;
            var a = i.currentCentroidXOfTouchesChangedAfter,
                s = i.currentCentroidYOfTouchesChangedAfter,
                l = i.previousCentroidXOfTouchesChangedAfter,
                c = i.previousCentroidYOfTouchesChangedAfter,
                d = i.currentCentroidX,
                u = i.currentCentroidY,
                p = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = s(t, e._accountsForMovesUpTo));
                        var o = e._accountsForMovesUpTo,
                            n = l(t, o),
                            r = a(t, o),
                            i = c(t, o),
                            d = s(t, o),
                            u = e.dx + (r - n),
                            p = e.dy + (d - i),
                            h = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (u - e.dx) / h), (e.vy = (p - e.dy) / h), (e.dx = u), (e.dy = p), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            o = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, o),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, o),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && p._initializeGestureState(o), (o.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, o)),
                                onMoveShouldSetResponderCapture(t) {
                                    var n = t.touchHistory;
                                    return o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (p._updateGestureStateOnMove(o, n), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, o));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = n.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (o.x0 = d(r.touchHistory)),
                                    (o.y0 = u(r.touchHistory)),
                                    (o.dx = 0),
                                    (o.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, o),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, o)
                                ),
                                onResponderReject(n) {
                                    h(t, e.onPanResponderReject, n, o);
                                },
                                onResponderRelease(n) {
                                    h(t, e.onPanResponderRelease, n, o), m(t), p._initializeGestureState(o);
                                },
                                onResponderStart(t) {
                                    var n = t.touchHistory;
                                    (o.numberActiveTouches = n.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, o);
                                },
                                onResponderMove(t) {
                                    var n = t.touchHistory;
                                    o._accountsForMovesUpTo !== n.mostRecentTimeStamp && (p._updateGestureStateOnMove(o, n), e.onPanResponderMove && e.onPanResponderMove(t, o));
                                },
                                onResponderEnd(n) {
                                    var r = n.touchHistory;
                                    (o.numberActiveTouches = r.numberActiveTouches), h(t, e.onPanResponderEnd, n, o);
                                },
                                onResponderTerminate(n) {
                                    h(t, e.onPanResponderTerminate, n, o), m(t), p._initializeGestureState(o);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, o),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function h(e, t, o, r) {
                e.handle && (n.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(o, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const v = p;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.FollowerRequests-e96e9bea.6382c37a.js.map
