"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-e019dbda"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                d = o(929028),
                c = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: d, leftControl: c, middleControl: h, position: u, rightControl: m, secondaryBar: f, style: y, subtitle: w, title: g, titleDomId: b, titleIconCell: T, titleIconCellSize: C, withBackground: P, withWideContainer: D } = this.props,
                        { isModal: Z } = this.context,
                        _ = i ? c : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!P, Z, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: d, leftControl: _, middleControl: h, position: p(u, Z, r), rightControl: m, style: y, subtitle: w, title: g, titleDomId: b, titleIconCell: T, titleIconCellSize: C, withBackground: v, withWideContainer: D }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        280418: (e, t, o) => {
            o.r(t), o.d(t, { default: () => M });
            var n = o(202784),
                r = o(325686),
                i = o(107267),
                a = o(588441),
                s = o(392237),
                l = o(786998),
                d = o(154003),
                c = o(111677),
                p = o.n(c),
                h = o(837020),
                u = o(841972),
                m = o(726615),
                f = o(893904),
                y = o(715601),
                w = o(606293);
            const g = p().df34a454,
                b = p().ia5e7488,
                T = { label: b },
                C = p().efe6ef9e,
                P = { label: C },
                D = n.createElement(h.default, null),
                Z = n.createElement(u.default, null);
            function _() {
                const e = n.useMemo(() => n.createElement(v, null), []),
                    t = n.useMemo(() => n.createElement(x, null), []);
                return n.createElement(r.Z, { style: E.navStyle }, n.createElement(l.Z, { leftControl: e, rightControl: t, title: g }));
            }
            function v() {
                const e = (0, w.RQ)();
                return n.createElement(d.ZP, { "aria-label": b, hoverLabel: T, icon: D, onPress: e, pullLeft: !0, type: "primaryText" });
            }
            function x() {
                const e = (0, w.VD)();
                return n.createElement(d.ZP, { "aria-label": C, hoverLabel: P, icon: Z, onPress: e, type: "primaryText" });
            }
            const M = function () {
                    (0, f.useStickyViewNotify)(), (0, w.Jf)();
                    const { onViewportSet: e, viewport: t } = (function () {
                            const [e, t] = n.useState(),
                                o = n.useCallback((e) => {
                                    if (!e) return;
                                    const o = s.default.theme.componentDimensions.appBarHeightPx;
                                    e.setOffsetTop(o), t(e);
                                }, []);
                            return { viewport: e, onViewportSet: o };
                        })(),
                        o = (0, w.Ct)();
                    return n.createElement(a.Z, { ref: o, style: E.container }, n.createElement(y.Z, { onViewportSet: e, style: E.sidebarViewStyle }, n.createElement(_, null), t && n.createElement(i.Route, { component: m.ConversationTimeline })));
                },
                E = s.default.create((e) => ({ container: { height: s.default.supports("height: 100dvh") ? "100dvh" : "100vh", borderStartWidth: e.borderWidths.small, borderStartStyle: "solid", borderStartColor: e.colors.borderColor, borderEndWidth: e.borderWidths.small, borderEndStyle: "solid", borderEndColor: e.colors.borderColor }, navStyle: { zIndex: e.componentZIndices.appBarZIndex, backfaceVisibility: "hidden", position: "sticky", top: -0.5 }, sidebarViewStyle: { flex: 1, inset: 0, overflow: "auto" } }));
        },
        847016: (e, t, o) => {
            o.d(t, { t: () => s });
            var n = o(202784),
                r = o(325686),
                i = o(731708),
                a = o(392237);
            const s = ({ children: e, containerStyle: t, description: o, descriptionDir: a, descriptionTestID: s, label: d, withBottomBorder: c = !0, withDisabledText: p = !1, withPaddingHorizontal: h = !1 }) => {
                    const u = n.useMemo(() => [l.descriptionItem, t, c ? l.bottomBorder : void 0, h && l.paddingHorizontal], [t, c, h]),
                        m = n.useMemo(() => [l.descriptionContainer, p ? l.disabled : void 0], [p]);
                    return n.createElement(r.Z, { style: u }, !!d && n.createElement(i.ZP, { style: p ? l.disabled : void 0, weight: "bold" }, d), !!o && n.createElement(r.Z, { style: m }, n.createElement(i.ZP, { color: "gray700", dir: a, size: "subtext2", style: l.descriptionContainer, testID: s }, o)), e);
                },
                l = a.default.create((e) => ({ descriptionItem: { backgroundColor: e.colors.cellBackground, paddingVertical: e.componentDimensions.gutterVertical }, descriptionContainer: { marginTop: e.spaces.space2 }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, disabled: { opacity: 0.5 }, paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => u });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                s = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, rightControl: y, secondaryBar: w, subtitle: g, title: b } = this.props,
                                { isModal: T } = this.context;
                            return n.createElement(r.Z, { style: T ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, n.createElement(c.ZP, { backButtonType: o || (T ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !T, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, ref: e, rightControl: y, secondaryBar: w, style: [T && m.appBarModal, t], subtitle: g, title: b, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: f, withoutBottomBarMobile: y } = this.props,
                        { isModal: w } = this.context,
                        g = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && g, n.createElement(i.Z, { isFullWidth: d, isLarge: c, style: [m.container, w && m.containerModal, a] }, w ? n.createElement(h.Z, { style: m.viewport }, g, o) : o), t ? n.createElement(r.Z, { style: [m.bottomBarModal, !w && !y && m.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = u;
        },
        347720: (e, t, o) => {
            o.d(t, { Y: () => d });
            var n = o(202784),
                r = o(325686),
                i = o(67369),
                a = o(731708),
                s = o(696591),
                l = o(392237);
            const d = ({ callout: e, primaryLabel: t, style: o, subtitle: l, title: d }) => {
                    const p = (0, i.Zz)();
                    return n.createElement(r.Z, { style: [p ? c.mobileTitleContainer : c.titleContainer, e ? c.withCallout : null, o] }, n.createElement(a.ZP, { align: "left", "aria-level": 1, role: "heading", size: "title4", weight: "heavy" }, d), !!t && n.createElement(r.Z, { style: c.primaryLabelContainer }, n.createElement(a.ZP, { align: "left", color: "primary", size: "title4" }, t)), !!l && n.createElement(r.Z, { style: c.subtitleContainer }, n.createElement(s.Z, { align: "left", color: "gray700" }, l)), !!e && n.createElement(r.Z, { style: c.calloutContainer }, e));
                },
                c = l.default.create((e) => ({ titleContainer: { paddingVertical: e.spaces.space24 }, mobileTitleContainer: { paddingVertical: e.spaces.space40 }, primaryLabelContainer: { marginTop: e.spaces.space28 }, subtitleContainer: { marginTop: e.spaces.space12 }, withCallout: { paddingBottom: e.spaces.space16 }, calloutContainer: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 } }));
        },
        651930: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(99107),
                i = o(272175),
                a = o(111677);
            const s = o.n(a)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = s;
                    return e ? n.createElement(i.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: r.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        349035: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(272175);
            const i = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(r.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        898948: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(443781),
                i = o(163301);
            const a = (e) => {
                const { children: t, collectionName: o } = e,
                    a = n.useContext(r.rC);
                return (0, i.Kx)(a), t;
            };
        },
        218093: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(420740),
                i = o(111677);
            const a = o.n(i)().b2311b70;
            function s() {
                return n.createElement(r.Z, { onRetry: null, title: a });
            }
            const l = n.memo(s);
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => d });
            function n(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const r = (e, t, o) => {
                    const n = e(t),
                        r = e(o);
                    return !n && r ? -1 : n && !r ? 1 : 0;
                },
                i = (e, t, o) => a(e(o), e(t)),
                a = (e, t) => (e < t ? -1 : e > t ? 1 : 0),
                s = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                l = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(o),
                        l = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        d = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            d.length > 0
                                ? s(d, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          s = t.getForItem(o.id);
                                      return r(a, n, s) || i(l, n, s);
                                  })
                                : null;
                    return c && c.id;
                },
                d = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, t) => {
                        const { distanceToViewportBottom: o, distanceToViewportTop: n, id: r } = t;
                        if ("number" == typeof n) {
                            const t = e.getForViewport().getTop() + n;
                            return e.getForItem(r).getTop() - t;
                        }
                        if ("number" == typeof o) {
                            const t = e.getForViewport().getBottom() + o;
                            return e.getForItem(r).getBottom() - t;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const t = e.getForList().getBottom(),
                            o = e.getForViewport().getBottom();
                        return Math.max(0, o - t);
                    },
                    anchorCandidates: (e) => {
                        const t = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !n(e))
                            .map(({ id: e, rectangle: o }) => ({ id: e, distanceToViewportTop: o.getTop() - t }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, t) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const o = l({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        893904: (e, t, o) => {
            o.r(t), o.d(t, { StickyView: () => h, default: () => w, roundToNearestDevicePixel: () => p, useStickyViewNotify: () => m });
            var n = o(202784),
                r = o(325686),
                i = o(67877),
                a = o(537392),
                s = o(392237),
                l = o(752624),
                d = o(323265),
                c = o(993547);
            const p = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class h extends n.PureComponent {
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
                        (this._scheduleUpdatePositioning = (0, i.Z)(this._updatePositioning.bind(this), this._singleRequestAnimationFrame));
                    const { viewport: t } = e;
                    this._removeProgrammaticScrollListener = t.addProgrammaticScrollListener(this._handleProgrammaticScroll);
                }
                componentDidMount() {
                    this._isMounted = !0;
                    const { viewport: e } = this.props;
                    if ((this._updatePositioning(), (this._removeScrollListener = e.addScrollListener(this._scheduleUpdatePositioning)), this._containerNode)) {
                        const t = this._containerNode.getBoundingClientRect(),
                            o = e.scrollY();
                        (this._prevScrollY = o), this.setState({ stickyOffset: o + t.top });
                    }
                    this._pendingScrolledBy && (this._handleProgrammaticScroll(this._pendingScrolledBy), (this._pendingScrolledBy = 0));
                }
                componentWillUnmount() {
                    (this._isMounted = !1), this._removeScrollListener && this._removeScrollListener(), this._removeProgrammaticScrollListener && this._removeProgrammaticScrollListener(), void 0 !== this._timeoutId && cancelAnimationFrame(this._timeoutId);
                }
                render() {
                    const { contentOffset: e, position: t, stickyThreshold: o, stickyTop: i } = this.state,
                        a = y[t],
                        s = window.devicePixelRatio || 1,
                        l = p({ cssPixels: o, dpr: s }),
                        d = p({ cssPixels: e, dpr: s }),
                        c = { top: i ? `${l}px` : null, bottom: i ? null : `${l}px` };
                    return n.createElement(r.Z, { ref: this._setContainerRef, style: [y.container, { minHeight: this.state.contentHeight }] }, n.createElement(f, { onNotify: this._forceUpdatePositioning }), n.createElement(r.Z, { style: { marginTop: `${d}px` } }), n.createElement(r.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
                }
                _updatePositioning(e = !1) {
                    if (!this._contentNode || !this._containerNode) return;
                    const t = this.props.viewport.scrollY(),
                        o = t - this._prevScrollY;
                    if (Math.abs(o) < 0.5 && !e) return;
                    const { distanceFromBottom: n } = this.props;
                    this._prevScrollY = t;
                    const r = !!this._contentNode && this._contentNode.getBoundingClientRect(),
                        i = !!this._containerNode && this._containerNode.getBoundingClientRect();
                    if (!r || !i) return;
                    const { height: s } = (0, a.iv)(),
                        l = d.ZP.isIOS() ? window.innerHeight : s,
                        c = t + i.top,
                        p = Math.max(r.top - i.top, 0);
                    if (l - r.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: r.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            i = window.devicePixelRatio || 1,
                            a = r.bottom - l + n <= 1 / i,
                            s = c - r.top <= 1 / i;
                        if (((e && a) || (!e && s)) && d.ZP.isFirefox()) {
                            const e = n,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: s, stickyThreshold: s ? t : e, contentOffset: p, contentHeight: r.height });
                        } else {
                            const o = l - r.height - n,
                                i = l - r.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? o : i, contentOffset: t ? p : this.state.contentOffset, contentHeight: r.height });
                        }
                    }
                }
                _updateState(e) {
                    const t = this.state.stickyTop !== e.stickyTop,
                        o = this.state.stickyThreshold !== e.stickyThreshold,
                        n = Math.abs(this.state.contentOffset - e.contentOffset) > 0.5,
                        r = Math.abs(this.state.stickyOffset - e.stickyOffset) > 0.5,
                        i = this.state.position !== e.position,
                        a = this.state.contentHeight !== e.contentHeight;
                    (t || o || n || r || i || a) && this.setState(e);
                }
            }
            h.defaultProps = { distanceFromBottom: 10 };
            const u = new l.Z();
            function m() {
                n.useLayoutEffect(() => {
                    u.notify();
                }, []);
            }
            function f({ onNotify: e }) {
                return (
                    n.useEffect(() => {
                        const { unsubscribe: t } = u.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const y = s.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                w = (0, c.Z)(h);
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(202784),
                r = o(420740),
                i = o(108362),
                a = o(731708),
                s = o(154003),
                l = o(392237),
                d = o(111677),
                c = o.n(d),
                p = o(349035);
            const h = "error-detail",
                u = c().e49537c2,
                m = c().a9ae1e78;
            class f extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: h }, n.createElement(p.Z, null), n.createElement(i.Z, { style: y.root }, n.createElement(a.ZP, { align: "center", color: "gray700", style: y.retryText }, u), n.createElement(s.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, m)));
                }
            }
            const y = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class d extends n.Component {
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
                    const d = r || s;
                    ((d && r !== s) || (!d && o !== i) || n !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, r.ZP)(l(d));
        },
        167496: (e, t, o) => {
            o.d(t, { Z: () => m, r: () => u });
            var n = o(202784),
                r = o(154003),
                i = o(811176),
                a = o(111677),
                s = o.n(a),
                l = o(517747);
            const d = s().d7b8ebaa,
                c = s().d601fc20,
                p = s().j43f99be,
                h = s().ad6e11ac,
                u = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function m({ replyDropdownSelection: e = u.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    a = n.useMemo(
                        () => [
                            { isSelected: u.relevance === e, onClick: o(u.relevance), selectable: !0, text: p },
                            { isSelected: u.recency === e, onClick: o(u.recency), selectable: !0, text: c },
                            { isSelected: u.likes === e, onClick: o(u.likes), selectable: !0, text: d },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(l.default, null), renderMenu: (e) => n.createElement(i.Z, { description: h, items: a, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => M, ZP: () => x });
            var n = o(662678),
                r = o(769471),
                i = o(337637),
                a = o(459679),
                s = o(192337),
                l = o(962741),
                d = o(372703),
                c = o(466015),
                p = o(267483),
                h = o(263863),
                u = o(351322),
                m = o(37533),
                f = o(777809),
                y = o(652815),
                w = o(560520),
                g = o(367991),
                b = o(705638),
                T = o(801184),
                C = o(335632);
            const P = "FocalTweetInlineTombstone",
                D = "More Replies";
            let Z;
            const _ = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                v = { ...(0, C.G)({}), [l.ZP.Tweet]: (0, b.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                x = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: i, replyDropdownSelection: a, rootTweetAuthorId: s, tweetTextSize: c, withFocalTweetMedia: b, withRuxInjections: C }) =>
                    (0, r.Z)({}, v, {
                        [l.ZP.SelfThreadTweetComposer]: y.Z,
                        [l.ZP.Tweet]: {
                            handlers: {
                                [h.Z.Tweet]: (0, T.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            r = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = r),
                                            (n.rootTweetAuthorId = s),
                                            o &&
                                                (n.onTweetDismiss = () => {
                                                    t({ entry: e, feedbackKeys: [d.qt] });
                                                }),
                                            n
                                        );
                                    },
                                    dismissable: !0,
                                    hideReplyContextMode: t,
                                    withMuteConversation: !0,
                                }),
                                [h.Z.FocalTweet]: (0, T.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: r, hasModeratedReplies: i },
                                                conversationPosition: l,
                                                referringContext: c,
                                            } = t,
                                            { contextTweetId: p, promotedContent: h, socialContext: u, topicFollowPrompt: m } = c || {};
                                        return {
                                            contextTweetId: p,
                                            conversationAnnotation: r,
                                            hasModeratedReplies: !!(i && l && l.isStart),
                                            promotedContent: h,
                                            rootTweetAuthorId: s,
                                            socialContext: u,
                                            topicFollowPrompt: m,
                                            withHideReply: o,
                                            withInlineMedia: b,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [d.qt] });
                                                      },
                                                  }
                                                : {}),
                                            changeDropdownState: e,
                                            replyDropdownSelection: a,
                                        };
                                    },
                                    dismissable: !0,
                                    divider: (e) => ({ top: !1, bottom: !1 }),
                                    hideReplyContextMode: t,
                                }),
                                [h.Z.SelfThread]: (0, T.Cw)({ hideReplyContextMode: t }),
                                [h.Z.ReaderMode]: (0, T.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [l.ZP.Tombstone]: { handlers: { [P]: (0, g._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [p.Z.Inline]: (0, g._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? d.qt : void 0, withHideReply: o }) } },
                        [l.ZP.Label]: u.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === D ? _.TransparentCursor : _.Default))(e, i), handlers: { [_.TransparentCursor]: f.L, [_.Default]: f.k } }),
                        [l.ZP.TimelineCursor]: (0, m.Z)({ withRuxInjections: C }),
                        [l.ZP.ThreadHeader]: w.Z,
                    }),
                M = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: r, showOnlyRelevantReplies: d, socialContext: c, topicFollowPrompt: h }) => {
                    const u = (e) => (e.type === l.ZP.Tweet && e.content.id === o) || (e.type === l.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const m = (0, i.Z)(o, u);
                        let f = !1;
                        const y = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, m);
                        let w;
                        return (0, a.Z)(y, (o, n) => {
                            const i = o.type === l.ZP.TimelineCursor && (o.content.cursorType === s.CursorType.ShowMoreThreads || o.content.cursorType === s.CursorType.ShowMoreThreadsPrompt),
                                a = o.type === l.ZP.Label && o.content.text === D;
                            if (d && (i || a)) return void 0 === w && o.content.cursorType === s.CursorType.ShowMoreThreadsPrompt ? (Z = n) : void 0 === w && (w = n), !1;
                            if (d && void 0 !== w && n >= w) return !1;
                            if (d && void 0 === w && n >= Z) return !1;
                            const u = n > m;
                            if ((o.type !== l.ZP.Tweet && o.type !== l.ZP.Tombstone) || u) return o.type !== l.ZP.SelfThreadTweetComposer && o;
                            {
                                const i = !f;
                                if (((f = !0), n < m)) {
                                    if (o.type === l.ZP.Tweet) return S(o, i);
                                    if (o.type === l.ZP.Tombstone) return R(o, i);
                                } else {
                                    if (o.type === l.ZP.Tombstone) {
                                        const t = { isStart: i, isEnd: !0 };
                                        return o.content.displayType === p.Z.Inline ? I({ contextTweetId: e, entry: o, socialContext: c, topicFollowPrompt: h, conversationPosition: t }) : k({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === l.ZP.Tweet) return E({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: c, promotedContent: r, topicFollowPrompt: h, conversationPosition: { isStart: i, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                E = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: i, topicFollowPrompt: a }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: i, promotedContent: r, topicFollowPrompt: a } }, { displayType: h.Z.FocalTweet }),
                I = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: P }),
                k = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                S = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                R = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => x });
            var n = o(202784),
                r = o(111677),
                i = o.n(r),
                a = o(912021),
                s = o(218093),
                l = o(334346),
                d = o(332878),
                c = o(163889),
                p = o(466015),
                h = o(847933),
                u = o(519896),
                m = o(443781),
                f = o(56851),
                y = o(810641),
                w = o(438965),
                g = o(668214);
            const b = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                T = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                C = (0, g.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: b, contextualClientEventInfo: T }));
            var P = o(519125);
            const D = i().d35d74e4,
                Z = (e) => {
                    switch (e) {
                        case h.Z.NOT_FOUND:
                            return n.createElement(f.Z, null);
                        case h.Z.NOT_ALLOWED:
                            return n.createElement(s.Z, null);
                        default:
                            return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                _ = () => n.createElement(f.Z, null);
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, a.Z)((e, t, o, n, r, i, a) => (0, P.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: i, promotedContent: n, showOnlyRelevantReplies: a }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: i } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, i, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, a.Z)((e, t, o, n, r, i) => {
                            const a = e && n && e === n;
                            return (0, P.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!a, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: i });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                i = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? w.j.CONVERSATION : void 0,
                                a = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, i, r, t, n, a);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(y.Z, { anchoring: d.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: u.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: _, renderUnavailable: Z, title: D });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [p.Se({ id: t, sortIndex: l.Z })] : void 0;
                }
            }
            (v.defaultProps = { withFocalTweetMedia: !0 }), (v.contextType = m.rC);
            const x = C(v);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => i, Hx: () => l, Oj: () => r, P3: () => d, QO: () => s, j: () => a });
            var n = o(942893);
            const r = { component: "tweet" },
                i = { component: "thread" },
                a = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                l = (e) => n.Z.getTweetURTEntryItem(e),
                d = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => x });
            var n = o(807896),
                r = o(202784),
                i = o(476984),
                a = o.n(i),
                s = o(111677),
                l = o.n(s),
                d = o(615656),
                c = o(290402),
                p = o(325686),
                h = o(240089),
                u = o(663550),
                m = o(409438);
            const f = ({ displayMode: e = m.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                r.createElement(
                    p.Z,
                    { role: "list" },
                    o.map((o, n) => (t ? t(o) : r.createElement(h.ZP, { decoration: h.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: u.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var y = o(312771),
                w = o(71620),
                g = o(973572),
                b = o(668214),
                T = o(919022);
            const C = (e, t) => t.userIds,
                P = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = T.ZP.select(e, t);
                        return !!n && o(n);
                    });
                },
                D = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const n = T.ZP.selectFetchStatus(e, o);
                        return n && (t[o] = n === y.ZP.NONE ? y.ZP.LOADING : n), t;
                    }, {});
                },
                Z = (0, b.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, g.Z)(P, (e) => e),
                        fetchStatus: (0, g.Z)(P, D, C, (e, t, o) => {
                            let n = y.ZP.LOADED;
                            for (let r = 0; r < o.length; r++) {
                                const i = o[r];
                                if (-1 === e.indexOf(i)) {
                                    const e = t[i] || y.ZP.LOADING;
                                    n = n === y.ZP.LOADED ? e : n;
                                }
                                if (n === y.ZP.LOADED) break;
                            }
                            return n;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, w.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: T.ZP.fetchManyIfNeeded })),
                _ = l().f5b426c2;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: i, filterPredicate: a, userIds: s, ...l } = this.props;
                            return r.createElement(f, (0, n.Z)({}, l, { userIds: e }));
                        }),
                        (this._handleFetch = () => {
                            this._fetchUsersIfNeeded();
                        });
                }
                componentDidMount() {
                    this._fetchUsersIfNeeded();
                }
                componentDidUpdate(e) {
                    a()(e.userIds, this.props.userIds) || this._fetchUsersIfNeeded();
                }
                render() {
                    return r.createElement(c.Z, { "aria-label": _, fetchStatus: this.state.allUsersUnavailable ? y.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: n } = this.props;
                    o(n).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [d.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [d.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const x = Z(v);
        },
        26193: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.8"),
                        o.e("icons.15"),
                        o.e("icons.7"),
                        o.e("icons.3"),
                        o.e("icons.24"),
                        o.e("icons.12"),
                        o.e("icons.22"),
                        o.e("icons.2"),
                        o.e("icons.18"),
                        o.e("icons.9"),
                        o.e("icons.6"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.14"),
                        o.e("icons.5"),
                        o.e("icons.16"),
                        o.e("icons.19"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        o.e("loader.WideLayout-6107ac1a"),
                        o.e("loader.WideLayout-a2dee9c7"),
                    ]).then(o.bind(o, 130888)),
                renderPlaceholder: (e, t) => null,
            });
        },
        340179: (e, t, o) => {
            o.d(t, { i: () => a });
            var n = o(516951),
                r = o(615656),
                i = o(51525);
            const a = (e = "") => ({
                [r.ZP.GenericNotFound]: { customAction: n.Z },
                [r.ZP.NotAuthorizedToViewUser]: {
                    customAction: () => {
                        (0, i.DR)(`/${e}`, { statusCode: 401 });
                    },
                },
                [r.ZP.StatusViewForbidden]: {
                    customAction: () => {
                        (0, i.DR)(`/${e}`);
                    },
                },
                showToast: !0,
            });
        },
        702001: (e, t, o) => {
            o.d(t, { c: () => i });
            var n = o(516951),
                r = o(615656);
            const i = { [r.ZP.OtherUserSuspended]: { customAction: n.Z }, [r.ZP.StatusViewForbidden]: { customAction: n.Z } };
        },
        396987: (e, t, o) => {
            o.d(t, { QF: () => s, Qo: () => l, hZ: () => a });
            var n = o(918621);
            const r = "external_referer",
                i = 604800;
            function a(e) {
                return (0, n.ej)({ cookieName: r, featureSwitches: e });
            }
            function s(e, t) {
                const o = (t && t.encryptedReferralDetails) || "",
                    a = (t && t.encryptedReferer) || "",
                    s = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!o && !a && !s) return;
                const l = `${encodeURIComponent(a)}|${s}|${encodeURIComponent(o)}`;
                (0, n.d8)(r, l, { cookieOptions: { maxAge: i, encode: (e) => e }, featureSwitches: e });
            }
            const l = (e) => {
                const t = a(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        833773: (e, t, o) => {
            o.d(t, { zI: () => s, ti: () => l, bi: () => d });
            o(396987), o(875640);
            var n = o(401388),
                r = o(2430),
                i = o(782826);
            const a = Object.freeze({ Web: 0, Email: 1, Partner: 2, Market: 3, Access: 4 });
            function s(e) {
                let t = {};
                const { emptyIfServerRendered: o = !0 } = e;
                const { httpReferer: s = document.referrer ?? "", query: l = window.location.search ?? {}, requestUrl: d = window.location.href } = e,
                    {
                        cn: c,
                        iid: p,
                        nid: h,
                        original_referer: u,
                        partner: m,
                        ref_src: f,
                        ref_url: y,
                        refsrc: w,
                        s: g,
                        uid: b,
                        url: T,
                    } = (function (e) {
                        const t = {};
                        return (
                            ["cn", "iid", "original_referer", "nid", "refsrc", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach((o) => {
                                t[o] = (0, r.BX)(e[o]);
                            }),
                            t
                        );
                    })(l);
                let C = Object.freeze({});
                if (
                    (null != e.referralMapping
                        ? (C = e.referralMapping)
                        : null != e.featureSwitches &&
                          (C = (function (e) {
                              const t = {},
                                  o = e.getArrayValue("shortened_tracking_parameters_mapping");
                              for (const e of o) {
                                  const o = e.split(":");
                                  if (2 === o.length) {
                                      const [e, n] = o;
                                      t[e] = n;
                                  }
                              }
                              return t;
                          })(e.featureSwitches)),
                    f)
                )
                    t = { referral_type: a.Web, referral_details_str: f };
                else if ("email" === w || p) {
                    let e;
                    try {
                        e = window.atob(c);
                    } catch (t) {
                        e = "invalid";
                    }
                    const o = ["twcamp^email", h && `twsrc^${h}`, b && `twcon^${b}`, p && `twterm^${p}`, `twgr^${e}`].filter(Boolean).join("|");
                    t = { referral_type: a.Email, referral_details_str: o };
                } else if (g) {
                    const e = C[g];
                    e && (t = { referral_type: a.Web, referral_details_str: e });
                } else m ? (t = { referral_type: a.Partner, referral_details_str: `twsrc^${m}` }) : s && i.ZP.isExternalUrl(s) && (t = { referral_type: a.Web });
                let P = y ?? u ?? T ?? s;
                return P.length > 256 && (P = P.substring(0, 256)), P && (t = { ...t, referer: P }), (0, n.Z)(t) || (t = { ...t, url: d }), t;
            }
            function l(e) {
                return e.referral_type === a.Access;
            }
            function d(e) {
                return e.referral_type === a.Web;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-e019dbda.6afbf8ba.js.map
