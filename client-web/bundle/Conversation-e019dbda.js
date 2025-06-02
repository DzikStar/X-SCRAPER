"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-e019dbda"],
    {
        625661: (e, t, r) => {
            r.d(t, { ZP: () => h });
            var o = r(202784),
                n = r(614983),
                a = r.n(n),
                d = r(325686),
                i = r(370006),
                l = r(786998),
                s = r(929028),
                c = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: n, hideBackButton: a, isFullWidth: d, isLarge: s, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: f, subtitle: y, title: D, titleDomId: g, titleIconCell: M, titleIconCellSize: w, withBackground: k, withWideContainer: _ } = this.props,
                        { isModal: C } = this.context,
                        S = a ? c : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        B = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!k, C, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: r, isFullWidth: d, isLarge: s, leftControl: S, middleControl: h, position: u(p, C, n), rightControl: m, style: f, subtitle: y, title: D, titleDomId: g, titleIconCell: M, titleIconCellSize: w, withBackground: B, withWideContainer: _ }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = s.Z.getBackgroundStyles();
                    return t ? o.createElement(d.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        280418: (e, t, r) => {
            r.r(t), r.d(t, { default: () => I });
            var o = r(202784),
                n = r(325686),
                a = r(107267),
                d = r(588441),
                i = r(392237),
                l = r(786998),
                s = r(154003),
                c = r(111677),
                u = r.n(c),
                h = r(837020),
                p = r(841972),
                m = r(726615),
                b = r(893904),
                f = r(715601),
                y = r(606293);
            const D = u().df34a454,
                g = u().ia5e7488,
                M = { label: g },
                w = u().efe6ef9e,
                k = { label: w },
                _ = o.createElement(h.default, null),
                C = o.createElement(p.default, null);
            function S() {
                const e = o.useMemo(() => o.createElement(B, null), []),
                    t = o.useMemo(() => o.createElement(P, null), []);
                return o.createElement(n.Z, { style: Z.navStyle }, o.createElement(l.Z, { leftControl: e, rightControl: t, title: D }));
            }
            function B() {
                const e = (0, y.RQ)();
                return o.createElement(s.ZP, { "aria-label": g, hoverLabel: M, icon: _, onPress: e, pullLeft: !0, type: "primaryText" });
            }
            function P() {
                const e = (0, y.VD)();
                return o.createElement(s.ZP, { "aria-label": w, hoverLabel: k, icon: C, onPress: e, type: "primaryText" });
            }
            const I = function () {
                    (0, b.useStickyViewNotify)(), (0, y.Jf)();
                    const { onViewportSet: e, viewport: t } = (function () {
                            const [e, t] = o.useState(),
                                r = o.useCallback((e) => {
                                    if (!e) return;
                                    const r = i.default.theme.componentDimensions.appBarHeightPx;
                                    e.setOffsetTop(r), t(e);
                                }, []);
                            return { viewport: e, onViewportSet: r };
                        })(),
                        r = (0, y.Ct)();
                    return o.createElement(d.Z, { ref: r, style: Z.container }, o.createElement(f.Z, { onViewportSet: e, style: Z.sidebarViewStyle }, o.createElement(S, null), t && o.createElement(a.Route, { component: m.ConversationTimeline })));
                },
                Z = i.default.create((e) => ({ container: { height: i.default.supports("height: 100dvh") ? "100dvh" : "100vh", borderStartWidth: e.borderWidths.small, borderStartStyle: "solid", borderStartColor: e.colors.borderColor, borderEndWidth: e.borderWidths.small, borderEndStyle: "solid", borderEndColor: e.colors.borderColor }, navStyle: { zIndex: e.componentZIndices.appBarZIndex, backfaceVisibility: "hidden", position: "sticky", top: -0.5 }, sidebarViewStyle: { flex: 1, inset: 0, overflow: "auto" } }));
        },
        847016: (e, t, r) => {
            r.d(t, { t: () => i });
            var o = r(202784),
                n = r(325686),
                a = r(731708),
                d = r(392237);
            const i = ({ children: e, containerStyle: t, description: r, descriptionDir: d, descriptionTestID: i, label: s, withBottomBorder: c = !0, withDisabledText: u = !1, withPaddingHorizontal: h = !1 }) => {
                    const p = o.useMemo(() => [l.descriptionItem, t, c ? l.bottomBorder : void 0, h && l.paddingHorizontal], [t, c, h]),
                        m = o.useMemo(() => [l.descriptionContainer, u ? l.disabled : void 0], [u]);
                    return o.createElement(n.Z, { style: p }, !!s && o.createElement(a.ZP, { style: u ? l.disabled : void 0, weight: "bold" }, s), !!r && o.createElement(n.Z, { style: m }, o.createElement(a.ZP, { color: "gray700", dir: d, size: "subtext2", style: l.descriptionContainer, testID: i }, r)), e);
                },
                l = d.default.create((e) => ({ descriptionItem: { backgroundColor: e.colors.cellBackground, paddingVertical: e.componentDimensions.gutterVertical }, descriptionContainer: { marginTop: e.spaces.space2 }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, disabled: { opacity: 0.5 }, paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => b, w: () => p });
            var o = r(202784),
                n = r(325686),
                a = r(108362),
                d = r(386802),
                i = r(392237),
                l = r(652904),
                s = r(555079),
                c = r(625661),
                u = r(449067),
                h = r(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: a, centerTitle: d, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: y, subtitle: D, title: g } = this.props,
                                { isModal: M } = this.context;
                            return o.createElement(n.Z, { style: M ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(c.ZP, { backButtonType: r || (M ? "close" : "back"), backLocation: a, centerTitle: d, fixed: !M, hideBackButton: i, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: f, secondaryBar: y, style: [M && m.appBarModal, t], subtitle: D, title: g, titleDomId: s.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: d, documentTitle: i, isFullWidth: s, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: y } = this.context,
                        D = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: b }), o.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, y && m.rootModal] }, !y && D, o.createElement(a.Z, { isFullWidth: s, isLarge: c, style: [m.container, y && m.containerModal, d] }, y ? o.createElement(h.Z, { style: m.viewport }, D, r) : r), t ? o.createElement(n.Z, { style: [m.bottomBarModal, !y && !f && m.bottomBarMobile] }, o.createElement(a.Z, { isFullWidth: s, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = d.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        347720: (e, t, r) => {
            r.d(t, { Y: () => s });
            var o = r(202784),
                n = r(325686),
                a = r(67369),
                d = r(731708),
                i = r(696591),
                l = r(392237);
            const s = ({ callout: e, primaryLabel: t, style: r, subtitle: l, title: s }) => {
                    const u = (0, a.Zz)();
                    return o.createElement(n.Z, { style: [u ? c.mobileTitleContainer : c.titleContainer, e ? c.withCallout : null, r] }, o.createElement(d.ZP, { align: "left", "aria-level": 1, role: "heading", size: "title4", weight: "heavy" }, s), !!t && o.createElement(n.Z, { style: c.primaryLabelContainer }, o.createElement(d.ZP, { align: "left", color: "primary", size: "title4" }, t)), !!l && o.createElement(n.Z, { style: c.subtitleContainer }, o.createElement(i.Z, { align: "left", color: "gray700" }, l)), !!e && o.createElement(n.Z, { style: c.calloutContainer }, e));
                },
                c = l.default.create((e) => ({ titleContainer: { paddingVertical: e.spaces.space24 }, mobileTitleContainer: { paddingVertical: e.spaces.space40 }, primaryLabelContainer: { marginTop: e.spaces.space28 }, subtitleContainer: { marginTop: e.spaces.space12 }, withCallout: { paddingBottom: e.spaces.space16 }, calloutContainer: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 } }));
        },
        651930: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(99107),
                a = r(272175),
                d = r(111677);
            const i = r.n(d)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = i;
                    return e ? o.createElement(a.ql, null, o.createElement("meta", { content: e, property: "al:ios:url" }), o.createElement("meta", { content: n.AF, property: "al:ios:app_store_id" }), o.createElement("meta", { content: t, property: "al:ios:app_name" }), o.createElement("meta", { content: e, property: "al:android:url" }), o.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), o.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        898948: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(443781),
                a = r(163301);
            const d = (e) => {
                const { children: t, collectionName: r } = e,
                    d = o.useContext(n.rC);
                return (0, a.Kx)(d), t;
            };
        },
        893904: (e, t, r) => {
            r.r(t), r.d(t, { StickyView: () => h, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => m });
            var o = r(202784),
                n = r(325686),
                a = r(67877),
                d = r(537392),
                i = r(392237),
                l = r(752624),
                s = r(323265),
                c = r(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class h extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._pendingScrolledBy = 0),
                        (this._singleRequestAnimationFrame = (e) => {
                            void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId), (this._timeoutId = requestAnimationFrame(e));
                        }),
                        (this._setContentRef = (e) => {
                            this._contentNode = e;
                        }),
                        (this._setContainerRef = (e) => {
                            this._containerNode = e;
                        }),
                        (this._handleProgrammaticScroll = (e) => {
                            this._isMounted ? ((this._prevScrollY = (this._prevScrollY || 0) + e), this.setState({ contentOffset: Math.max(0, this.state.contentOffset + e) })) : (this._pendingScrolledBy += e);
                        }),
                        (this._isMounted = !1),
                        (this._handleLayout = (e) => {
                            if (!this._isMounted) return;
                            const t = e.nativeEvent.layout.height > this.state.contentHeight;
                            this._updatePositioning(t);
                        }),
                        (this._forceUpdatePositioning = () => {
                            this._updatePositioning(!0);
                        }),
                        (this.state = { stickyTop: !0, stickyThreshold: 0, contentOffset: 0, contentHeight: 0, stickyOffset: 0, position: "sticky" }),
                        (this._scheduleUpdatePositioning = (0, a.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
                    const { viewport: t } = e;
                    this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(this._handleProgrammaticScroll);
                }
                componentDidMount() {
                    this._isMounted = !0;
                    const { viewport: e } = this.props;
                    if ((this._updatePositioning(), (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)), this._containerNode)) {
                        const t = this._containerNode.getBoundingClientRect(),
                            r = e.scrollY();
                        (this._prevScrollY = r), this.setState({ stickyOffset: r + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: r, stickyTop: a } = this.state,
                        d = f[t],
                        i = window.devicePixelRatio || 1,
                        l = u({ cssPixels: r, dpr: i }),
                        s = u({ cssPixels: e, dpr: i }),
                        c = { top: a ? `${l}px` : null, bottom: a ? null : `${l}px` };
                    return o.createElement(n.Z, { ref: this._setContainerRef, style: [f.container, { minHeight: this.state.contentHeight }] }, o.createElement(b, { onNotify: this._forceUpdatePositioning }), o.createElement(n.Z, { style: { marginTop: `${s}px` } }), o.createElement(n.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, d] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        r = t - this._prevScrollY;
                    if (Math.abs(r) < 0.5 && !e) return;
                    const { distanceFromBottom: o } = this.props;
                    this._prevScrollY = t;
                    const n = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        a = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!n || !a) return;
                    const { height: i } = (0, d.iv)(),
                        l = s.ZP.isIOS() ? window.innerHeight : i,
                        c = t + a.top,
                        u = Math.max(n.top - a.top, 0);
                    if (l - n.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: n.height, position: "fixed" });
                    else {
                        const e = r > 0,
                            t = e !== this.state.stickyTop,
                            a = window.devicePixelRatio || 1,
                            d = n.bottom - l + o <= 1 / a,
                            i = c - n.top <= 1 / a;
                        if (((e && d) || (!e && i)) && s.ZP.isFirefox()) {
                            const e = o,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: i, stickyThreshold: i ? t : e, contentOffset: u, contentHeight: n.height });
                        } else {
                            const r = l - n.height - o,
                                a = l - n.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? r : a, contentOffset: t ? u : this.state.contentOffset, contentHeight: n.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        r = this.state.stickyThreshold !== e.stickyThreshold,
                        o = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        n = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        a = this.state.position !== e.position,
                        d = this.state.contentHeight !== e.contentHeight;
                    (t || r || o || n || a || d) && this.setState(e);
                }
            }
            h.defaultProps = { distanceFromBottom: 10 };
            const p = new l.Z();
            function m() {
                o.useLayoutEffect(() => {
                    p.notify();
                }, []);
            }
            function b({ onNotify: e }) {
                return (
                    o.useEffect(() => {
                        const { unsubscribe: t } = p.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const f = i.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, c.Z)(h);
        },
        62857: (e, t, r) => {
            r.d(t, { Z: () => P });
            var o = r(807896),
                n = r(202784),
                a = r(476984),
                d = r.n(a),
                i = r(111677),
                l = r.n(i),
                s = r(615656),
                c = r(290402),
                u = r(325686),
                h = r(240089),
                p = r(663550),
                m = r(409438);
            const b = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: r }) =>
                n.createElement(
                    u.Z,
                    { role: "list" },
                    r.map((r, o) => (t ? t(r) : n.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: r, promotedItemType: p.bj.USER, userId: r, withFollowsYou: !0 }))),
                );
            var f = r(312771),
                y = r(71620),
                D = r(973572),
                g = r(668214),
                M = r(919022);
            const w = (e, t) => t.userIds,
                k = (e, t) => {
                    const { filterPredicate: r = (e) => !!e, userIds: o } = t;
                    return o.filter((t) => {
                        const o = M.ZP.select(e, t);
                        return !!o && r(o);
                    });
                },
                _ = (e, t) => {
                    const { userIds: r } = t;
                    return r.reduce((t, r) => {
                        const o = M.ZP.selectFetchStatus(e, r);
                        return o && (t[r] = o === f.ZP.NONE ? f.ZP.LOADING : o), t;
                    }, {});
                },
                C = (0, g.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, D.Z)(k, (e) => e),
                        fetchStatus: (0, D.Z)(k, _, w, (e, t, r) => {
                            let o = f.ZP.LOADED;
                            for (let n = 0; n < r.length; n++) {
                                const a = r[n];
                                if (-1 === e.indexOf(a)) {
                                    const e = t[a] || f.ZP.LOADING;
                                    o = o === f.ZP.LOADED ? e : o;
                                }
                                if (o === f.ZP.LOADED) break;
                            }
                            return o;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: M.ZP.fetchManyIfNeeded })),
                S = l().f5b426c2;
            class B extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: r, fetchUsersIfNeeded: a, filterPredicate: d, userIds: i, ...l } = this.props;
                            return n.createElement(b, (0, o.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    d()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return n.createElement(c.Z, { "aria-label": S, fetchStatus: this.state.allUsersUnavailable ? f.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: r, userIds: o } = this.props;
                    r(o).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [s.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [s.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const P = C(B);
        },
        26193: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(202784);
            const o = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("icons.0"),
                        r.e("icons.5"),
                        r.e("icons.12"),
                        r.e("icons.20"),
                        r.e("icons.2"),
                        r.e("icons.21"),
                        r.e("icons.28"),
                        r.e("icons.10"),
                        r.e("icons.17"),
                        r.e("icons.9"),
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("icons.22"),
                        r.e("icons.25"),
                        r.e("icons.14"),
                        r.e("icons.6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        r.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        r.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        r.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        r.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        r.e("loader.WideLayout"),
                    ]).then(r.bind(r, 130888)),
                renderPlaceholder: (e, t) => null,
            });
        },
        702001: (e, t, r) => {
            r.d(t, { c: () => a });
            var o = r(516951),
                n = r(615656);
            const a = { [n.ZP.OtherUserSuspended]: { customAction: o.Z }, [n.ZP.StatusViewForbidden]: { customAction: o.Z } };
        },
        396987: (e, t, r) => {
            r.d(t, { QF: () => i, Qo: () => l, hZ: () => d });
            var o = r(918621);
            const n = "external_referer",
                a = 604800;
            function d(e) {
                return (0, o.ej)({ cookieName: n, featureSwitches: e });
            }
            function i(e, t) {
                const r = (t && t.encryptedReferralDetails) || "",
                    d = (t && t.encryptedReferer) || "",
                    i = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!r && !d && !i) return;
                const l = `${encodeURIComponent(d)}|${i}|${encodeURIComponent(r)}`;
                (0, o.d8)(n, l, { cookieOptions: { maxAge: a, encode: (e) => e }, featureSwitches: e });
            }
            const l = (e) => {
                const t = d(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        833773: (e, t, r) => {
            r.d(t, { zI: () => i, ti: () => l, bi: () => s });
            r(396987), r(875640);
            var o = r(401388),
                n = r(2430),
                a = r(782826);
            const d = Object.freeze({ Web: 0, Email: 1, Partner: 2, Market: 3, Access: 4 });
            function i(e) {
                let t = {};
                const { emptyIfServerRendered: r = !0 } = e;
                const { httpReferer: i = document.referrer ?? "", query: l = window.location.search ?? {}, requestUrl: s = window.location.href } = e,
                    {
                        cn: c,
                        iid: u,
                        nid: h,
                        original_referer: p,
                        partner: m,
                        ref_src: b,
                        ref_url: f,
                        refsrc: y,
                        s: D,
                        uid: g,
                        url: M,
                    } = (function (e) {
                        const t = {};
                        return (
                            ["cn", "iid", "original_referer", "nid", "refsrc", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach((r) => {
                                t[r] = (0, n.BX)(e[r]);
                            }),
                            t
                        );
                    })(l);
                let w = Object.freeze({});
                if (
                    (null != e.referralMapping
                        ? (w = e.referralMapping)
                        : null != e.featureSwitches &&
                          (w = (function (e) {
                              const t = {},
                                  r = e.getArrayValue("shortened_tracking_parameters_mapping");
                              for (const e of r) {
                                  const r = e.split(":");
                                  if (2 === r.length) {
                                      const [e, o] = r;
                                      t[e] = o;
                                  }
                              }
                              return t;
                          })(e.featureSwitches)),
                    b)
                )
                    t = { referral_type: d.Web, referral_details_str: b };
                else if ("email" === y || u) {
                    let e;
                    try {
                        e = window.atob(c);
                    } catch (t) {
                        e = "invalid";
                    }
                    const r = ["twcamp^email", h && `twsrc^${h}`, g && `twcon^${g}`, u && `twterm^${u}`, `twgr^${e}`].filter(Boolean).join("|");
                    t = { referral_type: d.Email, referral_details_str: r };
                } else if (D) {
                    const e = w[D];
                    e && (t = { referral_type: d.Web, referral_details_str: e });
                } else m ? (t = { referral_type: d.Partner, referral_details_str: `twsrc^${m}` }) : i && a.ZP.isExternalUrl(i) && (t = { referral_type: d.Web });
                let k = f ?? p ?? M ?? i;
                return k.length > 256 && (k = k.substring(0, 256)), k && (t = { ...t, referer: k }), (0, o.Z)(t) || (t = { ...t, url: s }), t;
            }
            function l(e) {
                return e.referral_type === d.Access;
            }
            function s(e) {
                return e.referral_type === d.Web;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-e019dbda.9d020d3a.js.map
