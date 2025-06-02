"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ImmersiveMediaViewer", "bundle.AudioSpaceDetail"],
    {
        572067: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(272175);
            const d = (e) => {
                const { canonical: t, description: r = "", image: d, imageAlt: a, imageH: s, imageType: l, imageW: i, title: c, ttl: u, type: h } = e;
                return o.createElement(n.ql, null, h ? o.createElement("meta", { content: h, property: "og:type" }) : null, t ? o.createElement("meta", { content: t, property: "og:url" }) : null, c ? o.createElement("meta", { content: c, property: "og:title" }) : null, o.createElement("meta", { content: r, property: "og:description" }), d ? o.createElement("meta", { content: d, property: "og:image" }) : null, l ? o.createElement("meta", { content: l, property: "og:image:type" }) : null, i ? o.createElement("meta", { content: i, property: "og:image:width" }) : null, s ? o.createElement("meta", { content: s, property: "og:image:height" }) : null, a ? o.createElement("meta", { content: a, property: "og:image:alt" }) : null, u ? o.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        579051: (e, t, r) => {
            r.d(t, { f: () => n });
            r(202784);
            class o {
                constructor(e, t, r, o, n) {
                    (this.id = e), (this._renderer = r), (this.canBeAnchor = o), (this.data = t), (this.sortIndex = n);
                }
                render(e) {
                    const { _renderer: t, data: r } = this;
                    return t(r, e);
                }
            }
            const n = (e, t, r, n, d = "-1") => new o(e, t, r, n, d);
        },
        719536: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = Object.freeze({ MOVEMENT: "movement", LIST_UPDATE: "list_update", INITIAL_POSITION: "initial_position" });
        },
        335636: (e, t, r) => {
            r.d(t, { H: () => d, V: () => a });
            r(571372);
            var o = r(202784),
                n = r(516951);
            const d = o.createContext({ blockedOrMutedEntryIds: new Set(), forwardPivotInfo: void 0, hasClosedCaptioning: !0, isMuted: !1, setTweetContentHidden: n.Z, isTweetContentHidden: !1, setHasClosedCaptioning: n.Z, onMuteToggle: n.Z, onTweetUpdate: n.Z, setBlockedOrMutedEntry: n.Z });
            function a() {
                const e = o.useContext(d);
                if (void 0 === e) throw new Error("useImmersiveMediaViewerContext was used outside of its provider ImmersiveMediaViewerContext");
                return e;
            }
        },
        897695: (e, t, r) => {
            r.r(t), r.d(t, { ImmersiveMediaViewerScreen: () => ge, default: () => Se });
            r(136728), r(543673), r(240753), r(128399);
            var o = r(202784),
                n = r(878052),
                d = r(325686),
                a = r(688715),
                s = r(392237),
                l = r(111677),
                i = r.n(l),
                c = r(370751),
                u = r(187669),
                h = r(572067),
                m = r(449067),
                p = r(807896),
                w = r(335636),
                b = r(912021),
                D = r(2138),
                M = r(166852),
                I = r(516951),
                f = r(143778),
                y = r(163889),
                g = r(163390),
                v = r(768572),
                S = r(933794),
                _ = r(579051),
                E = r(719536),
                P = r(476984),
                T = r.n(P),
                A = r(214997),
                C = r(837880),
                R = r(908478),
                k = r(323265),
                Z = r(993547),
                x = r(725516),
                N = r(609927);
            class B extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._contentsFocusable = !1),
                        (this._setRef = (e) => {
                            const { item: t, setAPI: r } = this.props;
                            r && (e ? ((this._element = e), r(t.id, this)) : (r(t.id, void 0), (this._element = void 0)));
                        }),
                        (this._setIsItemFocusable = (e) => {
                            this._contentsFocusable = e;
                        });
                }
                shouldComponentUpdate(e) {
                    const { item: t } = this.props;
                    return !(0, R.Z)(e.item, t);
                }
                componentWillUnmount() {
                    this.props.setAPI && this.props.setAPI(this.props.item.id, void 0);
                }
                componentDidUpdate(e) {
                    const { item: t, setAPI: r } = this.props;
                    e.item.id !== t.id && r && (r(e.item.id, void 0), r(t.id, this));
                }
                getElement() {
                    return this._element;
                }
                isFocusable() {
                    return this._contentsFocusable;
                }
                render() {
                    const { item: e } = this.props;
                    return o.createElement("div", { "data-testid": `cellInnerDiv-${e.id}`, ref: this._setRef }, e.render(this._setIsItemFocusable));
                }
            }
            const H = s.default.supports("height: 100dvh");
            class F extends o.Component {
                constructor(e) {
                    super(e),
                        (this._scrollRef = o.createRef()),
                        (this._isSafari = k.ZP.isSafari() || k.ZP.isIOS()),
                        (this._lastItemIndexRef = o.createRef()),
                        (this._getCurrentItemIndexMemoized = (0, b.Z)((e, t) => e.findIndex((e) => e.id === t))),
                        (this._getCurrentItemIndex = () => {
                            const { list: e } = this.props;
                            if (!this.state.visibleItemId) return 0;
                            const t = this._getCurrentItemIndexMemoized(e, this.state.visibleItemId);
                            if (-1 === t) {
                                return this._lastItemIndexRef.current || 0;
                            }
                            return (this._lastItemIndexRef.current = t), t;
                        }),
                        (this._handleWindowResize = () => {
                            this.setState({ windowInnerHeight: window.innerHeight });
                        }),
                        (this._calculateNearestSnapStopPosition = (e, t) => {
                            const r = Math.floor(e / t);
                            return e % t >= t / 2 ? r + 1 : r;
                        }),
                        (this._handleScroll = (e) => {
                            const t = Math.round(e.nativeEvent.contentOffset.y),
                                r = window.innerHeight || 1,
                                o = this._calculateNearestSnapStopPosition(t, r);
                            this._updateScrollEnd(o);
                        }),
                        (this._updateScrollEnd = (0, D.Z)((e) => {
                            const { analytics: t, onPositionUpdate: r, onScrollEnd: o, viewport: n } = this.props,
                                d = this._getCurrentItemIndex(),
                                a = e;
                            d !== a && (t.scribe({ action: "scroll", data: { event_value: window.innerHeight } }), a > d && t.scribe({ component: "feed", action: "next" }), a < d && t.scribe({ component: "feed", action: "previous" }), a === this.props.list.length - 2 && t.scribe({ action: "load", element: "bottom" }), r(a, n.getRect()), o(), this.setState(({ visibleItemId: e }) => ({ visibleItemId: this.props.list[a] ? this.props.list[a].id : e })));
                        }, 100)),
                        (this.adjustFocusBy = (e) => {
                            this.setState(({ windowInnerHeight: t }) => {
                                const r = this._getCurrentItemIndex(),
                                    o = (0, C.Z)(r + e, 0, this.props.list.length - 1);
                                return this._scrollRef.current?.scrollTo({ y: t * o, animated: !0 }), { visibleItemId: this.props.list[o].id };
                            });
                        }),
                        (this.scrollToIndex = (e) => {
                            this.setState(({ windowInnerHeight: t }) => {
                                const r = Math.min(this.props.list.length - 1, e);
                                return this._scrollRef.current?.scrollTo({ y: t * r, animated: !1 }), { visibleItemId: this.props.list[r].id };
                            });
                        }),
                        (this.scrollToNewest = () => {
                            this.setState(() => (this._scrollRef.current?.scrollTo({ y: 0, animated: !1 }), { visibleItemId: this.props.list.length ? this.props.list[0].id : void 0 }));
                        }),
                        (this.isAtNewest = () => !!this.props.list.length && this.state.visibleItemId === this.props.list[0].id),
                        (this._lastItemIndexRef.current = 0),
                        (this.state = { visibleItemId: e.list.length ? e.list[0].id : void 0, windowInnerHeight: window.innerHeight }),
                        window.addEventListener("resize", this._handleWindowResize);
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this._handleWindowResize);
                }
                render() {
                    const e = H ? "100dvh" : `${this.state.windowInnerHeight}px`,
                        t = this._getCurrentItemIndex();
                    return o.createElement(
                        N.Z.Provider,
                        { value: { isGlobal: !1, isSticky: !1, adjustFocusBy: this.adjustFocusBy, currentIndex: t, totalItems: this.props.list.length } },
                        o.createElement(
                            d.Z,
                            { style: { height: e, maxHeight: e } },
                            o.createElement(
                                A.Z,
                                { onScroll: this._handleScroll, ref: this._scrollRef, scrollEventThrottle: 16, showsHorizontalScrollIndicator: !1, showsVerticalScrollIndicator: !1, style: U.scrollView, testID: "vss-scroll-view" },
                                this.props.list.map((r, n) => {
                                    const a = Math.abs(t - n) <= 1;
                                    return o.createElement(d.Z, { key: r.id, style: { height: e, maxHeight: e, width: "100%" } }, o.createElement(d.Z, { style: U.scrollSnapItem }, o.createElement(d.Z, { style: U.scrollSnapItemInner }, a && o.createElement(B, { item: r, key: r.id }))));
                                }),
                            ),
                        ),
                    );
                }
                shouldComponentUpdate(e, t) {
                    return !T()(this.props, e) || !(0, R.Z)(this.state, t);
                }
                componentDidMount() {
                    const e = new URLSearchParams(window.location.search).get("currentTweet");
                    e && this._scrollToCurrentTweet(e);
                }
                componentDidUpdate(e) {
                    const t = new URLSearchParams(window.location.search).get("currentTweet");
                    this.props.list.length !== e.list.length && t && this._scrollToCurrentTweet(t);
                }
                _scrollToCurrentTweet(e) {
                    const t = this.props.list.findIndex((t) => t.id === `tweet-${e}`);
                    t >= 0 && this.scrollToIndex(t);
                }
            }
            const U = s.default.create(() => ({ scrollView: { overflowY: "auto", scrollSnapType: "y mandatory", height: "100%" }, scrollSnapItem: { width: "100%", scrollSnapAlign: "start", scrollSnapStop: "always" }, scrollSnapItemInner: { height: window.innerHeight, width: "100%" } })),
                L = (0, Z.Z)((0, x.Z)(F)),
                $ = { triggerCause: E.Z.MOVEMENT };
            class O extends o.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._renderer = o.createRef()),
                        (this._keyboardShortcutHandlers = { [g.uq.refresh]: this._handleKeyboardRefresh, [g.uq.nextItem]: this._handleKeyboardFocusNext, [g.uq.previousItem]: this._handleKeyboardFocusPrevious }),
                        (this._getList = (0, b.Z)((e, t, r, o) => e.filter((e) => !this.props.blockedOrMutedEntryIds.has(r(e))).map((e, n) => (0, _.f)(r(e), e, t, !1, o && o(e))))),
                        (this._render = () => {
                            const { withKeyboardShortcuts: e } = this.props;
                            return o.createElement(S.Z, { enabled: e, handlers: this._keyboardShortcutHandlers }, o.createElement(L, { list: this.state.list, onPositionUpdate: this._handlePositionUpdate, onScrollEnd: this._handleScrollEnd, ref: this._renderer }));
                        }),
                        (this._handleScrollEnd = () => {
                            this.props.onScrollEnd && this.props.onScrollEnd();
                        }),
                        (this._handlePositionUpdate = (e, t) => {
                            const { onItemsRendered: r } = this.props,
                                o = this.state.list;
                            0 === e && this.props.onAtStart($), e === o.length - 1 && this.props.onAtEnd($), 1 === e && this.props.onNearStart($), e === o.length - 2 && this.props.onNearEnd($), o[e] ? r && r({ positions: [{ id: o[e].id, rectangle: t }], viewport: t }) : (0, y.ZP)(`VerticalSnapScroller could not update position to ${e}, itemList was ${o.length} elements.`, { level: "warning" });
                        }),
                        (this._handleKeyboardRefresh = (0, D.Z)(() => {
                            this.props.onKeyboardRefresh && this.props.onKeyboardRefresh();
                        }, 1e3)),
                        (this._handleKeyboardFocusNext = () => {
                            this.adjustFocusBy(1);
                        }),
                        (this._handleKeyboardFocusPrevious = () => {
                            this.adjustFocusBy(-1);
                        }),
                        (this.isAtNewest = () => !this._renderer.current || this._renderer.current.isAtNewest());
                    const { identityFunction: r, items: n, renderer: d, sortIndexFunction: a } = this.props;
                    this.state = { _items: n, list: this._getList(n, d, r, a) };
                }
                render() {
                    const { items: e, noItemsRenderer: t } = this.props;
                    return e.length ? this._render() : t();
                }
                componentDidMount() {
                    const { onPositionRestored: e } = this.props;
                    e();
                }
                componentDidUpdate(e) {
                    const { cacheKey: t, onPositionRestored: r } = this.props;
                    if ((t !== e.cacheKey && r(), e.items !== this.props.items)) {
                        const { identityFunction: e, renderer: t, sortIndexFunction: r } = this.props,
                            o = (0, M.Z)([...this.state._items, ...this.props.items], (t) => e(t));
                        this.setState({ _items: o, list: this._getList(o, t, e, r) });
                    }
                }
                adjustFocusBy(e) {
                    this._renderer.current && this._renderer.current.adjustFocusBy(e);
                }
                scrollToNewest(e) {
                    this._renderer.current && this._renderer.current.scrollToNewest(e);
                }
            }
            (O.contextType = v.y3), (O.defaultProps = { onPositionRestored: I.Z, onAtEnd: I.Z, onAtStart: I.Z, onNearEnd: I.Z, onNearStart: I.Z, onScrollEnd: I.Z, noItemsRenderer: f.Z, withKeyboardShortcuts: !1 });
            const V = o.forwardRef((e, t) =>
                o.createElement(
                    d.Z,
                    null,
                    o.createElement(w.H.Consumer, null, ({ blockedOrMutedEntryIds: r }) => o.createElement(O, (0, p.Z)({ ref: t }, e, { blockedOrMutedEntryIds: r }))),
                ),
            );
            var K = r(652904),
                W = r(810641),
                j = r(952793),
                z = r(383186),
                q = r(503229),
                G = r(466015),
                J = r(740025),
                Y = r(750085),
                X = r(218951);
            const Q = (e, t) => (0, X.Z)({ timelineId: `immersiveMedia-${e}`, network: { getEndpoint: (e) => e.withEndpoint(J.ZP).fetchImmersiveMedia, getEndpointParams: () => ({ pinned_tweet_id: e, page_name: t }) }, context: "FETCH_IMMERSIVE_MEDIA", perfKey: "immersiveMedia", formatResponse: Y.Z }),
                ee = (e) => (0, X.Z)({ timelineId: `immersiveProfile-${e}`, network: { getEndpoint: (e) => e.withEndpoint(J.ZP).fetchImmersiveProfile, getEndpointParams: () => ({ pinned_tweet_id: e }) }, context: "FETCH_IMMERSIVE_PROFILE", perfKey: "immersiveProfile", formatResponse: Y.Z });
            var te = r(67534),
                re = r(668214),
                oe = r(836255);
            const ne = (e, t) => {
                    const r = new URLSearchParams(t.location.search).get("currentTweetUser");
                    return new URLSearchParams(t.location.search).get("currentTweet") && r;
                },
                de = (e, t) => {
                    const r = le(e, t),
                        o = ne(0, t);
                    return !r && o ? ce(e, t) : se(e, t);
                },
                ae = (e, t) => {
                    const r = ne(0, t);
                    return !le(e, t) && r ? ie(e, t) : ((e, t) => t.match.params.screenName || "")(0, t);
                },
                se = (e, t) => t.match.params.statusId || "",
                le = (e, t) => !(!e.urt[`immersiveMedia-${se(e, t)}`] && !e.urt[`immersiveProfile-${se(e, t)}`]),
                ie = (e, t) => new URLSearchParams(t.location.search).get("currentTweetUser") || "",
                ce = (e, t) => new URLSearchParams(t.location.search).get("currentTweet") || "",
                ue = (e, t) => {
                    if ("profile" === new URLSearchParams(t.location.search).get("mode")) return "profile";
                },
                he = (e, t) => ((e, t) => e.location && e.location.state && e.location.state[t])(t, "forwardPivotInfo"),
                me = (0, re.Z)()
                    .propsFromState(() => ({ mode: ue, pinnedTweetId: de, pinnedTweetUser: ae, pinnedTweet: oe.Z.createHydratedTweetSelector(de), forwardPivotInfo: he }))
                    .withAnalytics({ page: "gallery", section: "immersive" });
            var pe = r(263863),
                we = r(351322),
                be = r(509738);
            var De = r(335632),
                Me = r(962741);
            const Ie = i().h59700fa,
                fe = {
                    ...(0, De.G)({}),
                    [Me.ZP.Tweet]: we.ov({
                        selectDisplayType: (e) => e.content.displayType,
                        handlers: {
                            [pe.Z.Tweet]:
                                ((ye = {}),
                                {
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
                                            r.e("icons.23"),
                                            r.e("modules.common-e907d115"),
                                            r.e("modules.common-e019dbda"),
                                            r.e("icons.22"),
                                            r.e("icons.24"),
                                            r.e("icons.25"),
                                            r.e("icons.14"),
                                            r.e("icons.13"),
                                            r.e("modules.audio-6107ac1a"),
                                            r.e("modules.audio-b953418a"),
                                            r.e("modules.audio-7c51e6a7"),
                                            r.e("modules.audio-04db59e9"),
                                            r.e("modules.audio-76583d6c"),
                                            r.e("modules.audio-b7a8a5fb"),
                                            r.e("modules.audio-51f6e793"),
                                            r.e("modules.audio-e019dbda"),
                                            r.e("modules.audio-262c94d4"),
                                            r.e("modules.audio-c6fe4ea4"),
                                            r.e("icons.6"),
                                            r.e("icons.3"),
                                            r.e("icons.4"),
                                            r.e("icons.1"),
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
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
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
                                            r.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-85aa903d"),
                                            r.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-c8e3a520"),
                                            r.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-658f42e4"),
                                            r.e("shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288"),
                                            r.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                                            r.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-4648150b"),
                                            r.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-6ff35035"),
                                            r.e("shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-147738cd"),
                                            r.e("loader.immersiveTweetHandler"),
                                        ]).then(r.bind(r, 311554)),
                                    loaderOptions: ye,
                                    loaderKey: "immersiveTweetLoader",
                                    strategy: be.Z.OnDemand,
                                }),
                        },
                    }),
                };
            var ye;
            const ge = (e) => {
                    const { analytics: t, forwardPivotInfo: r, history: l, location: i, mode: p, pinnedTweet: b, pinnedTweetId: D, pinnedTweetUser: M } = e,
                        I = (0, j.hC)("immersive_viewer_enable_profile_viewer"),
                        [f] = o.useState(!1),
                        [y, g] = o.useState(null),
                        [v, S] = o.useState(!1),
                        [_, E] = o.useState(!1),
                        [P, T] = o.useState(!1),
                        [A, C] = o.useState(!0),
                        [R, k] = o.useState(new Set()),
                        { width: Z } = n.Z.get("screen");
                    (0, u.q)(() => {
                        if ((t.scribe({ action: "impression" }), !(Z >= s.default.theme.breakpoints.large)))
                            return (
                                S(Z >= s.default.theme.breakpoints.large),
                                l.replace(`${(0, z.PK)(`/${M}/status/${D}`)}?${new URLSearchParams(i.search).toString()}`),
                                function () {
                                    t.scribe({ action: "navigate" });
                                }
                            );
                        l.push(`/${M}/status/${D}`);
                    });
                    const x = o.useCallback(
                            (e) => {
                                if (b) {
                                    const t = new URLSearchParams(i.search),
                                        r = Array.from(t.keys()).length ? `&${t.toString()}` : "";
                                    l.replace(`${b.permalink}/mediaViewer?currentTweet=${e.id_str}&currentTweetUser=${e.user.screen_name}${r}`), g(e);
                                }
                            },
                            [l, b, i.search],
                        ),
                        N = o.useCallback(
                            (e) => {
                                E(e);
                            },
                            [E],
                        ),
                        B = o.useCallback(
                            (e) => {
                                T(e);
                            },
                            [T],
                        ),
                        H = o.useCallback(
                            (e) => {
                                C(e);
                            },
                            [C],
                        ),
                        F = o.useMemo(() => (I && "profile" === p ? ee(D) : Q(D, M)), [p, D, M, I]),
                        U = o.useMemo(() => {
                            if (!b) return null;
                            const e = ((e) => {
                                const t = (e.entities?.media || []).find((e) => "photo" === e.type);
                                if (t && "photo" === t.type) return t;
                            })(b);
                            return o.createElement(h.Z, { canonical: ((t = b.user.screen_name), (r = b.id_str), (0, a.ju)(`https://x.com/${t}/status/${r}/mediaViewer`)), description: b.text, image: e?.media_url_https, imageH: e?.original_info?.height, imageType: (e?.media_url_https.match(/([^.]*)$/) || [""])[0], imageW: e?.original_info?.width, title: b.user.screen_name, type: "article" });
                            var t, r;
                        }, [b]);
                    return o.createElement(
                        K.Z,
                        null,
                        U,
                        o.createElement(
                            m.Z.Configure,
                            { headerless: !0 },
                            o.createElement(
                                d.Z,
                                { style: ve.container, testID: "modalContainer" },
                                o.createElement(
                                    d.Z,
                                    { style: [ve.neighbor, v && ve.desktopNeighbor] },
                                    o.createElement(
                                        d.Z,
                                        { style: v && ve.desktopTimelineContainer },
                                        o.createElement(
                                            w.H.Provider,
                                            {
                                                testID: "contextProvider",
                                                value: {
                                                    forwardPivotInfo: r,
                                                    onTweetUpdate: x,
                                                    hasClosedCaptioning: A,
                                                    isMuted: _,
                                                    setHasClosedCaptioning: H,
                                                    onMuteToggle: N,
                                                    setBlockedOrMutedEntry: (e, t) => {
                                                        const r = (0, c.Z)(Array.from(R));
                                                        t ? r.add(e) : r.delete(e), k(r);
                                                    },
                                                    blockedOrMutedEntryIds: R,
                                                    setTweetContentHidden: B,
                                                    isTweetContentHidden: P,
                                                },
                                            },
                                            D && o.createElement(W.Z, { entryConfiguration: fe, module: F, previewEntries: b ? [G.Se({ id: D, sortIndex: "stable_sort_index" })] : void 0, scroller: V, title: Ie }),
                                        ),
                                    ),
                                    o.createElement(d.Z, { style: v && ve.desktopMediaDrawer, testID: v ? "immersive-viewer-desktop-conversation-drawer" : void 0 }, y && ((e, t) => !!e || t)(v, f) ? o.createElement(te.Z, { location: i, rootTweet: y, screenName: M, tweet: y, tweetId: y.id_str }) : null),
                                ),
                            ),
                        ),
                    );
                },
                ve = s.default.create((e) => ({ container: { flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, neighbor: { flexGrow: 1, flexShrink: 1 }, desktopNeighbor: { display: "flex", flexDirection: "row" }, desktopTimelineContainer: { flex: 2 }, desktopMediaDrawer: { flex: 1 } })),
                Se = me((0, q.Z)(ge));
        },
        67534: (e, t, r) => {
            r.d(t, { Z: () => w });
            var o = r(202784),
                n = r(392237),
                d = r(715601),
                a = r(167496),
                s = r(927192),
                l = r(71620),
                i = r(340179),
                c = r(125363),
                u = r(360142),
                h = r(735313),
                m = r(904096);
            const p = n.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, overflow: "auto", width: m.p, borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid" } })),
                w = function ({ contextTweetId: e, location: t, promotedContent: r, rootTweet: n, screenName: m, socialContext: w, tweet: b, tweetId: D }) {
                    const [M, I] = o.useState(a.r.relevance),
                        f = (0, c.I0)(),
                        y = (0, l.n7)("CONVERSATION_DRAWER"),
                        g = o.useMemo(() => (0, i.i)(m), [m]),
                        v = (e, t) => {
                            let r = "Relevance";
                            return t === a.r.recency ? (r = "Recency") : t === a.r.likes && (r = "Likes"), (0, u.ZP)({ focalTweetId: e, rankingMode: r });
                        };
                    return o.createElement(
                        d.Z,
                        { "aria-expanded": !0, style: p.root },
                        o.createElement(s.Z, {
                            apiErrorHandlerMap: g,
                            changeDropdownState: (e) => {
                                I(e), f((0, h.Z)(v(D, e))).catch(y({}));
                            },
                            contextTweetId: e,
                            focalTweet: b,
                            focalTweetId: D,
                            location: t,
                            module: v(D, M),
                            promotedContent: r,
                            replyDropdownSelection: M,
                            rootTweet: n,
                            selectedTweet: { selectedTweetId: D },
                            socialContext: w,
                            withFocalTweetMedia: !1,
                        }),
                    );
                };
        },
        904096: (e, t, r) => {
            r.d(t, { J: () => d, p: () => n });
            var o = r(521514);
            const n = o.Z.columnWidths.secondary.normal,
                d = o.Z.columnWidths.primary;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ImmersiveMediaViewer.d0af30ca.js.map
