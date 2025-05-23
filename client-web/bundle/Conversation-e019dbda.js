"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-e019dbda"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                d = o(370006),
                s = o(786998),
                l = o(929028),
                c = o(386802);
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: l, leftControl: c, middleControl: p, position: h, rightControl: b, secondaryBar: m, style: f, subtitle: y, title: w, titleDomId: D, titleIconCell: S, titleIconCellSize: g, withBackground: A, withWideContainer: v } = this.props,
                        { isModal: T } = this.context,
                        C = i ? c : n.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        M = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!A, T, !!m);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: l, leftControl: C, middleControl: p, position: u(h, T, r), rightControl: b, style: f, subtitle: y, title: w, titleDomId: D, titleIconCell: S, titleIconCellSize: g, withBackground: M, withWideContainer: v }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        280418: (e, t, o) => {
            o.r(t), o.d(t, { default: () => _ });
            var n = o(202784),
                r = o(325686),
                i = o(107267),
                a = o(588441),
                d = o(392237),
                s = o(786998),
                l = o(154003),
                c = o(332920),
                u = o.n(c),
                p = o(837020),
                h = o(841972),
                b = o(726615),
                m = o(893904),
                f = o(715601),
                y = o(606293);
            const w = u().df34a454,
                D = u().ia5e7488,
                S = { label: D },
                g = u().efe6ef9e,
                A = { label: g },
                v = n.createElement(p.default, null),
                T = n.createElement(h.default, null);
            function C() {
                const e = n.useMemo(() => n.createElement(M, null), []),
                    t = n.useMemo(() => n.createElement(P, null), []);
                return n.createElement(r.Z, { style: I.navStyle }, n.createElement(s.Z, { leftControl: e, rightControl: t, title: w }));
            }
            function M() {
                const e = (0, y.RQ)();
                return n.createElement(l.ZP, { "aria-label": D, hoverLabel: S, icon: v, onPress: e, pullLeft: !0, type: "primaryText" });
            }
            function P() {
                const e = (0, y.VD)();
                return n.createElement(l.ZP, { "aria-label": g, hoverLabel: A, icon: T, onPress: e, type: "primaryText" });
            }
            const _ = function () {
                    (0, m.useStickyViewNotify)(), (0, y.Jf)();
                    const { onViewportSet: e, viewport: t } = (function () {
                            const [e, t] = n.useState(),
                                o = n.useCallback((e) => {
                                    if (!e) return;
                                    const o = d.default.theme.componentDimensions.appBarHeightPx;
                                    e.setOffsetTop(o), t(e);
                                }, []);
                            return { viewport: e, onViewportSet: o };
                        })(),
                        o = (0, y.Ct)();
                    return n.createElement(a.Z, { ref: o, style: I.container }, n.createElement(f.Z, { onViewportSet: e, style: I.sidebarViewStyle }, n.createElement(C, null), t && n.createElement(i.Route, { component: b.ConversationTimeline })));
                },
                I = d.default.create((e) => ({ container: { height: d.default.supports("height: 100dvh") ? "100dvh" : "100vh", borderStartWidth: e.borderWidths.small, borderStartStyle: "solid", borderStartColor: e.colors.borderColor, borderEndWidth: e.borderWidths.small, borderEndStyle: "solid", borderEndColor: e.colors.borderColor }, navStyle: { zIndex: e.componentZIndices.appBarZIndex, backfaceVisibility: "hidden", position: "sticky", top: -0.5 }, sidebarViewStyle: { flex: 1, inset: 0, overflow: "auto" } }));
        },
        847016: (e, t, o) => {
            o.d(t, { t: () => d });
            var n = o(202784),
                r = o(325686),
                i = o(731708),
                a = o(392237);
            const d = ({ children: e, containerStyle: t, description: o, descriptionDir: a, descriptionTestID: d, label: l, withBottomBorder: c = !0, withDisabledText: u = !1, withPaddingHorizontal: p = !1 }) => {
                    const h = n.useMemo(() => [s.descriptionItem, t, c ? s.bottomBorder : void 0, p && s.paddingHorizontal], [t, c, p]),
                        b = n.useMemo(() => [s.descriptionContainer, u ? s.disabled : void 0], [u]);
                    return n.createElement(r.Z, { style: h }, !!l && n.createElement(i.ZP, { style: u ? s.disabled : void 0, weight: "bold" }, l), !!o && n.createElement(r.Z, { style: b }, n.createElement(i.ZP, { color: "gray700", dir: a, size: "subtext2", style: s.descriptionContainer, testID: d }, o)), e);
                },
                s = a.default.create((e) => ({ descriptionItem: { backgroundColor: e.colors.cellBackground, paddingVertical: e.componentDimensions.gutterVertical }, descriptionContainer: { marginTop: e.spaces.space2 }, bottomBorder: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, disabled: { opacity: 0.5 }, paddingHorizontal: { paddingHorizontal: e.componentDimensions.gutterHorizontal } }));
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => m, w: () => h });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                d = o(392237),
                s = o(652904),
                l = o(555079),
                c = o(625661),
                u = o(449067),
                p = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: d, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: m, rightControl: f, secondaryBar: y, subtitle: w, title: D } = this.props,
                                { isModal: S } = this.context;
                            return n.createElement(r.Z, { style: S ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, n.createElement(c.ZP, { backButtonType: o || (S ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !S, hideBackButton: d, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: m, ref: e, rightControl: f, secondaryBar: y, style: [S && b.appBarModal, t], subtitle: w, title: D, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: d, isFullWidth: l, isLarge: c, renderHeader: h, title: m, withoutBottomBarMobile: f } = this.props,
                        { isModal: y } = this.context,
                        w = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: d, headerless: !0, title: m }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, y && b.rootModal] }, !y && w, n.createElement(i.Z, { isFullWidth: l, isLarge: c, style: [b.container, y && b.containerModal, a] }, y ? n.createElement(p.Z, { style: b.viewport }, w, o) : o), t ? n.createElement(r.Z, { style: [b.bottomBarModal, !y && !f && b.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const b = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = h;
        },
        347720: (e, t, o) => {
            o.d(t, { Y: () => l });
            var n = o(202784),
                r = o(325686),
                i = o(67369),
                a = o(731708),
                d = o(696591),
                s = o(392237);
            const l = ({ callout: e, primaryLabel: t, style: o, subtitle: s, title: l }) => {
                    const u = (0, i.Zz)();
                    return n.createElement(r.Z, { style: [u ? c.mobileTitleContainer : c.titleContainer, e ? c.withCallout : null, o] }, n.createElement(a.ZP, { align: "left", "aria-level": 1, role: "heading", size: "title4", weight: "heavy" }, l), !!t && n.createElement(r.Z, { style: c.primaryLabelContainer }, n.createElement(a.ZP, { align: "left", color: "primary", size: "title4" }, t)), !!s && n.createElement(r.Z, { style: c.subtitleContainer }, n.createElement(d.Z, { align: "left", color: "gray700" }, s)), !!e && n.createElement(r.Z, { style: c.calloutContainer }, e));
                },
                c = s.default.create((e) => ({ titleContainer: { paddingVertical: e.spaces.space24 }, mobileTitleContainer: { paddingVertical: e.spaces.space40 }, primaryLabelContainer: { marginTop: e.spaces.space28 }, subtitleContainer: { marginTop: e.spaces.space12 }, withCallout: { paddingBottom: e.spaces.space16 }, calloutContainer: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 } }));
        },
        651930: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(99107),
                i = o(272175),
                a = o(332920);
            const d = o.n(a)().c39b0e24,
                s = ({ deepLink: e }) => {
                    const t = d;
                    return e ? n.createElement(i.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: r.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
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
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(420740),
                i = o(332920);
            const a = o.n(i)().b2311b70;
            function d() {
                return n.createElement(r.Z, { onRetry: null, title: a });
            }
            const s = n.memo(d);
        },
        332878: (e, t, o) => {
            o.d(t, { Z: () => l });
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
                d = (e, t) => {
                    if (e.length) return e.reduce((e, o) => (t(o, e) > 0 ? o : e));
                },
                s = ({ nextPos: e, prevPos: t }) => {
                    const o = t.getForViewport(),
                        a = (e) => e && e.doesIntersectWith(o),
                        s = (e) => (e ? Math.abs(o.getTop() - e.getTop()) : 1 / 0),
                        l = e.getList().filter(({ id: o }) => !n(o) && t.isRendered(o) && e.isRendered(o)),
                        c =
                            l.length > 0
                                ? d(l, (e, o) => {
                                      const n = t.getForItem(e.id),
                                          d = t.getForItem(o.id);
                                      return r(a, n, d) || i(s, n, d);
                                  })
                                : null;
                    return c && c.id;
                },
                l = {
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
                        const o = s({ prevPos: e, nextPos: t });
                        if (o) {
                            const n = e.getForItem(o).getTop() - e.getForViewport().getTop();
                            return t.getForItem(o).getTop() - t.getForViewport().getTop() - n;
                        }
                        return 0;
                    },
                };
        },
        893904: (e, t, o) => {
            o.r(t), o.d(t, { StickyView: () => p, default: () => y, roundToNearestDevicePixel: () => u, useStickyViewNotify: () => b });
            var n = o(202784),
                r = o(325686),
                i = o(67877),
                a = o(537392),
                d = o(392237),
                s = o(752624),
                l = o(323265),
                c = o(993547);
            const u = ({ cssPixels: e, dpr: t }) => Math.round(e * t) / t;
            class p extends n.PureComponent {
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
                        a = f[t],
                        d = window.devicePixelRatio || 1,
                        s = u({ cssPixels: o, dpr: d }),
                        l = u({ cssPixels: e, dpr: d }),
                        c = { top: i ? `${s}px` : null, bottom: i ? null : `${s}px` };
                    return n.createElement(r.Z, { ref: this._setContainerRef, style: [f.container, { minHeight: this.state.contentHeight }] }, n.createElement(m, { onNotify: this._forceUpdatePositioning }), n.createElement(r.Z, { style: { marginTop: `${l}px` } }), n.createElement(r.Z, { onLayout: this._handleLayout, ref: this._setContentRef, style: [this.props.style, c, a] }, this.props.children));
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
                    const { height: d } = (0, a.iv)(),
                        s = l.ZP.isIOS() ? window.innerHeight : d,
                        c = t + i.top,
                        u = Math.max(r.top - i.top, 0);
                    if (s - r.height >= c) this._updateState({ stickyTop: !0, stickyThreshold: c, contentOffset: 0, stickyOffset: c, contentHeight: r.height, position: "fixed" });
                    else {
                        const e = o > 0,
                            t = e !== this.state.stickyTop,
                            i = window.devicePixelRatio || 1,
                            a = r.bottom - s + n <= 1 / i,
                            d = c - r.top <= 1 / i;
                        if (((e && a) || (!e && d)) && l.ZP.isFirefox()) {
                            const e = n,
                                t = c;
                            this._updateState({ position: "fixed", stickyOffset: c, stickyTop: d, stickyThreshold: d ? t : e, contentOffset: u, contentHeight: r.height });
                        } else {
                            const o = s - r.height - n,
                                i = s - r.height - c;
                            this._updateState({ position: "sticky", stickyTop: e, stickyOffset: c, stickyThreshold: e ? o : i, contentOffset: t ? u : this.state.contentOffset, contentHeight: r.height });
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
            p.defaultProps = { distanceFromBottom: 10 };
            const h = new s.Z();
            function b() {
                n.useLayoutEffect(() => {
                    h.notify();
                }, []);
            }
            function m({ onNotify: e }) {
                return (
                    n.useEffect(() => {
                        const { unsubscribe: t } = h.subscribe(e);
                        return () => {
                            t();
                        };
                    }, [e]),
                    null
                );
            }
            const f = d.default.create((e) => ({ container: { height: "100%" }, sticky: { position: "sticky" }, fixed: { position: "fixed" }, static: { position: "static" } })),
                y = (0, c.Z)(p);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                d = o(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class l extends n.Component {
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
                            locationKey: d,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const l = r || d;
                    ((l && r !== d) || (!l && o !== i) || n !== a || s) && this._performPageUpdates(this.props);
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
            const c = (0, r.ZP)(s(l));
        },
        167496: (e, t, o) => {
            o.d(t, { Z: () => b, r: () => h });
            var n = o(202784),
                r = o(154003),
                i = o(811176),
                a = o(332920),
                d = o.n(a),
                s = o(517747);
            const l = d().d7b8ebaa,
                c = d().d601fc20,
                u = d().j43f99be,
                p = d().ad6e11ac,
                h = Object.freeze({ relevance: "relevance", recency: "recency", likes: "likes" });
            function b({ replyDropdownSelection: e = h.relevance, changeDropdownState: t }) {
                const o = n.useCallback(
                        (e) => () => {
                            t?.(e);
                        },
                        [t],
                    ),
                    a = n.useMemo(
                        () => [
                            { isSelected: h.relevance === e, onClick: o(h.relevance), selectable: !0, text: u },
                            { isSelected: h.recency === e, onClick: o(h.recency), selectable: !0, text: c },
                            { isSelected: h.likes === e, onClick: o(h.likes), selectable: !0, text: l },
                        ],
                        [o, e],
                    );
                return n.createElement(r.ZP, { "aria-haspopup": "menu", icon: n.createElement(s.default, null), renderMenu: (e) => n.createElement(i.Z, { description: p, items: a, onCloseRequested: e, shouldCloseOnClick: !0 }), type: "primaryText" });
            }
        },
        519125: (e, t, o) => {
            o.d(t, { Mu: () => _, ZP: () => P });
            var n = o(662678),
                r = o(769471),
                i = o(337637),
                a = o(459679),
                d = o(192337),
                s = o(962741),
                l = o(372703),
                c = o(466015),
                u = o(267483),
                p = o(263863),
                h = o(351322),
                b = o(37533),
                m = o(777809),
                f = o(652815),
                y = o(560520),
                w = o(367991),
                D = o(705638),
                S = o(801184),
                g = o(335632);
            const A = "FocalTweetInlineTombstone",
                v = "More Replies";
            let T;
            const C = Object.freeze({ Default: "ui_defaultLabel", TransparentCursor: "ui_transparentCursor" }),
                M = { ...(0, g.G)({}), [s.ZP.Tweet]: (0, D.Z)({ hideConversationControlsEducationText: !0, withMuteConversation: !0 }) },
                P = ({ changeDropdownState: e, hideReplyContextMode: t, isCurrentUserRootAuthor: o, isReaderMode: n, isTransparentCursorsEnabled: i, replyDropdownSelection: a, rootTweetAuthorId: d, tweetTextSize: c, withFocalTweetMedia: D, withRuxInjections: g }) =>
                    (0, r.Z)({}, M, {
                        [s.ZP.SelfThreadTweetComposer]: f.Z,
                        [s.ZP.Tweet]: {
                            handlers: {
                                [p.Z.Tweet]: (0, S.Cw)({
                                    hideConversationControlsEducationText: !0,
                                    hideExclusivityInfoEducationTextInReplies: !0,
                                    hideTrustedFriendsEducationTextInReplies: !0,
                                    createAdditionalProps: (e, { applyFeedbackAction: t }) => {
                                        const n = { withHideReply: o, showMidConversationControlEducationText: !0, withUnhideReply: !1, withViewHiddenReplies: !0 },
                                            r = !!(e.content && e.content.hasModeratedReplies && e.conversationPosition && e.conversationPosition.isStart);
                                        return (
                                            (n.conversationAnnotation = e?.content?.conversation_annotation),
                                            (n.hasModeratedReplies = r),
                                            (n.rootTweetAuthorId = d),
                                            o &&
                                                (n.onTweetDismiss = () => {
                                                    t({ entry: e, feedbackKeys: [l.qt] });
                                                }),
                                            n
                                        );
                                    },
                                    dismissable: !0,
                                    hideReplyContextMode: t,
                                    withMuteConversation: !0,
                                }),
                                [p.Z.FocalTweet]: (0, S.g6)({
                                    createAdditionalProps: (t, { applyFeedbackAction: n }) => {
                                        const {
                                                content: { conversation_annotation: r, hasModeratedReplies: i },
                                                conversationPosition: s,
                                                referringContext: c,
                                            } = t,
                                            { contextTweetId: u, promotedContent: p, socialContext: h, topicFollowPrompt: b } = c || {};
                                        return {
                                            contextTweetId: u,
                                            conversationAnnotation: r,
                                            hasModeratedReplies: !!(i && s && s.isStart),
                                            promotedContent: p,
                                            rootTweetAuthorId: d,
                                            socialContext: h,
                                            topicFollowPrompt: b,
                                            withHideReply: o,
                                            withInlineMedia: D,
                                            ...(o
                                                ? {
                                                      onTweetDismiss: () => {
                                                          n({ entry: t, feedbackKeys: [l.qt] });
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
                                [p.Z.SelfThread]: (0, S.Cw)({ hideReplyContextMode: t }),
                                [p.Z.ReaderMode]: (0, S.Cw)({ hideConversationControlsEducationText: !0, hideExclusivityInfoEducationTextInReplies: !0, hideHighlightedUserLabel: !0, hideTrustedFriendsEducationTextInReplies: !0, isReaderMode: !0, shouldSelfThreadIncludeAvatar: !1, showWithheldBannerOnMyTweets: !1, tweetTextSize: c, withActionsDisabled: !1, withMuteConversation: !1, withRemoveFromBookmarks: !1, withSelfThread: !1, withUserPresence: !1 }),
                            },
                        },
                        [s.ZP.Tombstone]: { handlers: { [A]: (0, w._n)({ isFocalTweet: !0, isReaderMode: n, withHideReply: o }), [u.Z.Inline]: (0, w._n)({ isReaderMode: n, tweetDismissFeedbackKey: o ? l.qt : void 0, withHideReply: o }) } },
                        [s.ZP.Label]: h.ov({ selectDisplayType: (e) => ((e, t) => (t && e.content.text === v ? C.TransparentCursor : C.Default))(e, i), handlers: { [C.TransparentCursor]: m.L, [C.Default]: m.k } }),
                        [s.ZP.TimelineCursor]: (0, b.Z)({ withRuxInjections: g }),
                        [s.ZP.ThreadHeader]: y.Z,
                    }),
                _ = ({ contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: r, showOnlyRelevantReplies: l, socialContext: c, topicFollowPrompt: p }) => {
                    const h = (e) => (e.type === s.ZP.Tweet && e.content.id === o) || (e.type === s.ZP.Tombstone && !!e.content && !!e.content.tweet && e.content.tweet.id === o);
                    return (o) => {
                        const b = (0, i.Z)(o, h);
                        let m = !1;
                        const f = ((e, t) => {
                            const o = (0, n.Z)(e, (e) => "0" !== e.sortIndex);
                            return o[0].splice(t + 1, 0, ...o[1]), o[0];
                        })(o, b);
                        let y;
                        return (0, a.Z)(f, (o, n) => {
                            const i = o.type === s.ZP.TimelineCursor && (o.content.cursorType === d.CursorType.ShowMoreThreads || o.content.cursorType === d.CursorType.ShowMoreThreadsPrompt),
                                a = o.type === s.ZP.Label && o.content.text === v;
                            if (l && (i || a)) return void 0 === y && o.content.cursorType === d.CursorType.ShowMoreThreadsPrompt ? (T = n) : void 0 === y && (y = n), !1;
                            if (l && void 0 !== y && n >= y) return !1;
                            if (l && void 0 === y && n >= T) return !1;
                            const h = n > b;
                            if ((o.type !== s.ZP.Tweet && o.type !== s.ZP.Tombstone) || h) return o.type !== s.ZP.SelfThreadTweetComposer && o;
                            {
                                const i = !m;
                                if (((m = !0), n < b)) {
                                    if (o.type === s.ZP.Tweet) return x(o, i);
                                    if (o.type === s.ZP.Tombstone) return E(o, i);
                                } else {
                                    if (o.type === s.ZP.Tombstone) {
                                        const t = { isStart: i, isEnd: !0 };
                                        return o.content.displayType === u.Z.Inline ? Z({ contextTweetId: e, entry: o, socialContext: c, topicFollowPrompt: p, conversationPosition: t }) : k({ entry: o, conversationPosition: t });
                                    }
                                    if (o.type === s.ZP.Tweet) return I({ originalEntry: o, contextTweetId: e, contextualClientEventInfo: t, socialContext: c, promotedContent: r, topicFollowPrompt: p, conversationPosition: { isStart: i, isEnd: !0, position: "focal", showReplyContext: !1 } });
                                }
                            }
                        });
                    };
                },
                I = ({ contextTweetId: e, contextualClientEventInfo: t, conversationPosition: o, originalEntry: n, promotedContent: r, socialContext: i, topicFollowPrompt: a }) => c.Wf({ ...n, conversationPosition: o, referringContext: { contextTweetId: e, contextualClientEventInfo: t, socialContext: i, promotedContent: r, topicFollowPrompt: a } }, { displayType: p.Z.FocalTweet }),
                Z = ({ contextTweetId: e, conversationPosition: t, entry: o, socialContext: n, topicFollowPrompt: r }) => c.Wf({ ...o, conversationPosition: t, referringContext: { contextTweetId: e, socialContext: n } }, { displayType: A }),
                k = ({ conversationPosition: e, entry: t }) => ({ ...t, conversationPosition: e }),
                x = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor", showReplyContext: !1 } }),
                E = (e, t) => ({ ...e, conversationPosition: { isStart: t, isEnd: !1, position: "ancestor" } });
        },
        927192: (e, t, o) => {
            o.d(t, { Z: () => P });
            var n = o(202784),
                r = o(332920),
                i = o.n(r),
                a = o(912021),
                d = o(218093),
                s = o(334346),
                l = o(332878),
                c = o(163889),
                u = o(466015),
                p = o(847933),
                h = o(519896),
                b = o(443781),
                m = o(231035),
                f = o(810641),
                y = o(438965),
                w = o(668214);
            const D = (e, t) => {
                    const o = t.module.selectTimeline(e);
                    return !!o && o.terminatedStatus.atTop;
                },
                S = (e, t) => t.location.state && t.location.state.contextualClientEventInfo,
                g = (0, w.Z)().propsFromState(() => ({ isTimelineTerminatedAtTop: D, contextualClientEventInfo: S }));
            var A = o(519125);
            const v = i().d35d74e4,
                T = (e) => {
                    switch (e) {
                        case p.Z.NOT_FOUND:
                            return n.createElement(m.Z, null);
                        case p.Z.NOT_ALLOWED:
                            return n.createElement(d.Z, null);
                        default:
                            return (0, c.ZP)(`Unhandled timeline unavailable reason: ${e}`), null;
                    }
                },
                C = () => n.createElement(m.Z, null);
            class M extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._isInitialFocusEntry = (e, t) => {
                            const { focalTweetId: o, location: n } = this.props;
                            return !!!n.state?.focusComposer && e && e.content && !!e.content.id && e.content.id === o;
                        }),
                        (this._getMemoizedPreprocessor = (0, a.Z)((e, t, o, n, r, i, a) => (0, A.Mu)({ focalTweetId: r, contextTweetId: t, contextualClientEventInfo: o, socialContext: e, topicFollowPrompt: i, promotedContent: n, showOnlyRelevantReplies: a }))),
                        (this._getPreprocessor = () => {
                            const { contextTweetId: e, contextualClientEventInfo: t, focalTweetId: o, promotedContent: n, socialContext: r, topicFollowPrompt: i } = this.props;
                            return this._getMemoizedPreprocessor(r, e, t, n, o, i, !1);
                        }),
                        (this._getMemoizedEntryConfig = (0, a.Z)((e, t, o, n, r, i) => {
                            const a = e && n && e === n;
                            return (0, A.ZP)({ changeDropdownState: this.props.changeDropdownState, isCurrentUserRootAuthor: !!a, hideReplyContextMode: t, replyDropdownSelection: o, rootTweetAuthorId: n, withFocalTweetMedia: r, withRuxInjections: i });
                        })),
                        (this._getEntryConfig = () => {
                            const e = this.props,
                                t = e.rootTweet?.user.id_str,
                                o = this.context.viewerUserId,
                                n = e.withFocalTweetMedia,
                                r = e.replyDropdownSelection,
                                i = this.context.featureSwitches.isTrue("rweb_tweets_reply_context_hidden") ? y.j.CONVERSATION : void 0,
                                a = e.withRuxInjections;
                            return this._getMemoizedEntryConfig(o, i, r, t, n, a);
                        });
                }
                render() {
                    const { apiErrorHandlerMap: e, fetchOptions: t, module: o, onEntriesRendered: r } = this.props;
                    return n.createElement(f.Z, { anchoring: l.Z, apiErrorHandlerMap: e, entryConfiguration: this._getEntryConfig(), fetchOptions: t, isInitialFocusEntry: this._isInitialFocusEntry, module: o, nearStartProximityRatio: 2, olderAtTop: !0, onEntriesRendered: r, preprocessEntryList: this._getPreprocessor(), prerollDisplayLocation: h.Nw.OTHER, previewEntries: this._previewEntries(), refreshControl: null, renderEmptyState: C, renderUnavailable: T, title: v });
                }
                _previewEntries() {
                    const { focalTweet: e } = this.props,
                        t = e?.id_str || "";
                    return e ? [u.Se({ id: t, sortIndex: s.Z })] : void 0;
                }
            }
            (M.defaultProps = { withFocalTweetMedia: !0 }), (M.contextType = b.rC);
            const P = g(M);
        },
        438965: (e, t, o) => {
            o.d(t, { FE: () => i, Hx: () => s, Oj: () => r, P3: () => l, QO: () => d, j: () => a });
            var n = o(942893);
            const r = { component: "tweet" },
                i = { component: "thread" },
                a = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                d =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: o, conversationTreeMetadata: n } = t;
                        return !(e || (o && !o.isEnd && (!n || !1 !== n.descendantConnector || 0 !== n.indents.filter((e) => "line" === e.displayType).length)));
                    },
                s = (e) => n.Z.getTweetURTEntryItem(e),
                l = (e, t, o) => {
                    const n = ["descendant", "ancestor"].includes(o?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === o?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: n, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        62857: (e, t, o) => {
            o.d(t, { Z: () => P });
            var n = o(807896),
                r = o(202784),
                i = o(476984),
                a = o.n(i),
                d = o(332920),
                s = o.n(d),
                l = o(615656),
                c = o(290402),
                u = o(325686),
                p = o(240089),
                h = o(663550),
                b = o(409438);
            const m = ({ displayMode: e = b.Z.UserDetailed, renderUserCell: t, userIds: o }) =>
                r.createElement(
                    u.Z,
                    { role: "list" },
                    o.map((o, n) => (t ? t(o) : r.createElement(p.ZP, { decoration: p.ET, displayMode: e, isFakeButtonRoleWithListItem: !0, key: o, promotedItemType: h.bj.USER, userId: o, withFollowsYou: !0 }))),
                );
            var f = o(312771),
                y = o(71620),
                w = o(973572),
                D = o(668214),
                S = o(919022);
            const g = (e, t) => t.userIds,
                A = (e, t) => {
                    const { filterPredicate: o = (e) => !!e, userIds: n } = t;
                    return n.filter((t) => {
                        const n = S.ZP.select(e, t);
                        return !!n && o(n);
                    });
                },
                v = (e, t) => {
                    const { userIds: o } = t;
                    return o.reduce((t, o) => {
                        const n = S.ZP.selectFetchStatus(e, o);
                        return n && (t[o] = n === f.ZP.NONE ? f.ZP.LOADING : n), t;
                    }, {});
                },
                T = (0, D.Z)()
                    .propsFromState(() => ({
                        availableUserIds: (0, w.Z)(A, (e) => e),
                        fetchStatus: (0, w.Z)(A, v, g, (e, t, o) => {
                            let n = f.ZP.LOADED;
                            for (let r = 0; r < o.length; r++) {
                                const i = o[r];
                                if (-1 === e.indexOf(i)) {
                                    const e = t[i] || f.ZP.LOADING;
                                    n = n === f.ZP.LOADED ? e : n;
                                }
                                if (n === f.ZP.LOADED) break;
                            }
                            return n;
                        }),
                    }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USERS_LIST_CONTAINER"), fetchUsersIfNeeded: S.ZP.fetchManyIfNeeded })),
                C = s().f5b426c2;
            class M extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { allUsersUnavailable: !1 }),
                        (this._renderContent = () => {
                            const { availableUserIds: e, createLocalApiErrorHandler: t, fetchStatus: o, fetchUsersIfNeeded: i, filterPredicate: a, userIds: d, ...s } = this.props;
                            return r.createElement(m, (0, n.Z)({}, s, { userIds: e }));
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
                    return r.createElement(c.Z, { "aria-label": C, fetchStatus: this.state.allUsersUnavailable ? f.ZP.LOADED : this.props.fetchStatus, onRequestRetry: this._handleFetch, render: this._renderContent, retryable: !1 });
                }
                _fetchUsersIfNeeded() {
                    const { availableUserIds: e, createLocalApiErrorHandler: t, fetchUsersIfNeeded: o, userIds: n } = this.props;
                    o(n).then(
                        () => {
                            this.setState({ allUsersUnavailable: !1 });
                        },
                        t({
                            [l.ZP.AddressBookLookupNotFound]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                            [l.ZP.OtherUserSuspended]: {
                                customAction: () => {
                                    0 === e.length && this.setState({ allUsersUnavailable: !0 });
                                },
                            },
                        }),
                    );
                }
            }
            const P = T(M);
        },
        26193: (e, t, o) => {
            o.d(t, { Z: () => n });
            o(202784);
            const n = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.10"),
                        o.e("icons.21"),
                        o.e("icons.16"),
                        o.e("icons.1"),
                        o.e("icons.19"),
                        o.e("icons.0"),
                        o.e("icons.23"),
                        o.e("icons.8"),
                        o.e("icons.2"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.7"),
                        o.e("icons.9"),
                        o.e("icons.15"),
                        o.e("icons.24"),
                        o.e("icons.3"),
                        o.e("icons.13"),
                        o.e("icons.29"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee359ff7"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9e2532"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b73bd0e3"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e0a7c12b"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-627162af"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-286dfed9"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-162a9ab0"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-cbd8f64c"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f943ab46"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-91216611"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("loader.WideLayout-6107ac1a"),
                        o.e("loader.WideLayout-9f4db315"),
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
            o.d(t, { QF: () => d, Qo: () => s, hZ: () => a });
            var n = o(918621);
            const r = "external_referer",
                i = 604800;
            function a(e) {
                return (0, n.ej)({ cookieName: r, featureSwitches: e });
            }
            function d(e, t) {
                const o = (t && t.encryptedReferralDetails) || "",
                    a = (t && t.encryptedReferer) || "",
                    d = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!o && !a && !d) return;
                const s = `${encodeURIComponent(a)}|${d}|${encodeURIComponent(o)}`;
                (0, n.d8)(r, s, { cookieOptions: { maxAge: i, encode: (e) => e }, featureSwitches: e });
            }
            const s = (e) => {
                const t = a(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        833773: (e, t, o) => {
            o.d(t, { zI: () => d, ti: () => s, bi: () => l });
            o(396987), o(875640);
            var n = o(401388),
                r = o(2430),
                i = o(782826);
            const a = Object.freeze({ Web: 0, Email: 1, Partner: 2, Market: 3, Access: 4 });
            function d(e) {
                let t = {};
                const { emptyIfServerRendered: o = !0 } = e;
                const { httpReferer: d = document.referrer ?? "", query: s = window.location.search ?? {}, requestUrl: l = window.location.href } = e,
                    {
                        cn: c,
                        iid: u,
                        nid: p,
                        original_referer: h,
                        partner: b,
                        ref_src: m,
                        ref_url: f,
                        refsrc: y,
                        s: w,
                        uid: D,
                        url: S,
                    } = (function (e) {
                        const t = {};
                        return (
                            ["cn", "iid", "original_referer", "nid", "refsrc", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach((o) => {
                                t[o] = (0, r.BX)(e[o]);
                            }),
                            t
                        );
                    })(s);
                let g = Object.freeze({});
                if (
                    (null != e.referralMapping
                        ? (g = e.referralMapping)
                        : null != e.featureSwitches &&
                          (g = (function (e) {
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
                    m)
                )
                    t = { referral_type: a.Web, referral_details_str: m };
                else if ("email" === y || u) {
                    let e;
                    try {
                        e = window.atob(c);
                    } catch (t) {
                        e = "invalid";
                    }
                    const o = ["twcamp^email", p && `twsrc^${p}`, D && `twcon^${D}`, u && `twterm^${u}`, `twgr^${e}`].filter(Boolean).join("|");
                    t = { referral_type: a.Email, referral_details_str: o };
                } else if (w) {
                    const e = g[w];
                    e && (t = { referral_type: a.Web, referral_details_str: e });
                } else b ? (t = { referral_type: a.Partner, referral_details_str: `twsrc^${b}` }) : d && i.ZP.isExternalUrl(d) && (t = { referral_type: a.Web });
                let A = f ?? h ?? S ?? d;
                return A.length > 256 && (A = A.substring(0, 256)), A && (t = { ...t, referer: A }), (0, n.Z)(t) || (t = { ...t, url: l }), t;
            }
            function s(e) {
                return e.referral_type === a.Access;
            }
            function l(e) {
                return e.referral_type === a.Web;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-e019dbda.ccd183ca.js.map
