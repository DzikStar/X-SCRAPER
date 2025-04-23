"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        174647: (e, a, o) => {
            o.d(a, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, o) => e.get("foundmedia/categories", a, o),
                category(a, o) {
                    const { category: r, ...t } = a;
                    return e.get(`foundmedia/categories/${r}`, t, o);
                },
                search: (a, o) => e.get("foundmedia/search", a, o),
            });
        },
        229333: (e, a, o) => {
            o.d(a, { Z: () => h });
            var r = o(202784),
                t = o(466999),
                d = o(325686),
                n = o(392237),
                l = o(674132);
            const s = o.n(l)().e5b0063d;
            let i = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        o = s({ title: a });
                    return r.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(t.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, a), r.createElement(d.Z, { "aria-label": o }, e));
                }
            }
            const h = c;
        },
        625661: (e, a, o) => {
            o.d(a, { ZP: () => u });
            var r = o(202784),
                t = o(614983),
                d = o.n(t),
                n = o(325686),
                l = o(370006),
                s = o(786998),
                i = o(929028),
                c = o(386802);
            function h(e, a, o) {
                return e || (!a && o ? "fixed" : void 0);
            }
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: a } = this.props;
                            d()(a || e, "Either onBackClick must be specified, or history should be supplied"), a ? a(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: a } = this.props;
                            a && a.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: a, centeredLogo: o, fixed: t, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: p, secondaryBar: D, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: S, withWideContainer: k } = this.props,
                        { isModal: _ } = this.context,
                        I = d ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, o) {
                            return e && !(a && o);
                        })(!!S, _, !!D);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: a, centeredLogo: o, isFullWidth: n, isLarge: i, leftControl: I, middleControl: u, position: h(m, _, t), rightControl: p, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: A, withWideContainer: k }), D || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        o = i.Z.getBackgroundStyles();
                    return a ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, a, o) => {
            o.d(a, { Z: () => s });
            var r = o(202784),
                t = o(325686),
                d = o(392237);
            class n extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(t.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = n;
        },
        290402: (e, a, o) => {
            o.d(a, { Z: () => p });
            var r = o(807896),
                t = o(202784),
                d = o(182056),
                n = o(879113),
                l = o(392237),
                s = o(674132),
                i = o.n(s),
                c = o(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, o) => {
                    const l = d.Z.isOnline();
                    return t.createElement(n.Z, (0, r.Z)({}, a, { icon: l ? void 0 : t.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = t.forwardRef(u);
        },
        980407: (e, a, o) => {
            o.d(a, { Z: () => D, w: () => m });
            var r = o(202784),
                t = o(325686),
                d = o(108362),
                n = o(386802),
                l = o(392237),
                s = o(652904),
                i = o(555079),
                c = o(625661),
                h = o(449067),
                u = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: o, backLocation: d, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, rightControl: g, secondaryBar: y, subtitle: f, title: M } = this.props,
                                { isModal: b } = this.context;
                            return r.createElement(t.Z, { style: b ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (b ? "close" : "back"), backLocation: d, centerTitle: n, fixed: !b, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, ref: e, rightControl: g, secondaryBar: y, style: [b && p.appBarModal, a], subtitle: f, title: M, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: o } = this.context;
                            a && (o ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: o, containerStyle: n, documentTitle: l, isFullWidth: i, isLarge: c, renderHeader: m, title: D, withoutBottomBarMobile: g } = this.props,
                        { isModal: y } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: D }), r.createElement(t.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, r.createElement(d.Z, { isFullWidth: i, isLarge: c, style: [p.container, y && p.containerModal, n] }, y ? r.createElement(u.Z, { style: p.viewport }, f, o) : o), a ? r.createElement(t.Z, { style: [p.bottomBarModal, !y && !g && p.bottomBarMobile] }, r.createElement(d.Z, { isFullWidth: i, isLarge: c }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                D = m;
        },
        965245: (e, a, o) => {
            o.d(a, { Z: () => s });
            var r = o(807896),
                t = o(202784),
                d = o(229333),
                n = o(414939),
                l = o(334346);
            const s = ({ accessibilityTitle: e, footer: a = t.createElement(n.Z, null), ...o }) => {
                const s = t.createElement(l.C, (0, r.Z)({}, o, { footer: a }));
                return e ? t.createElement(d.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, o) => {
            o.d(a, { C: () => s, Z: () => l });
            var r = o(807896),
                t = o(202784),
                d = o(524084),
                n = o(768572);
            const l = "stable_sort_index",
                s = t.forwardRef((e, a) => {
                    const o = e.cacheKey;
                    return t.createElement(n.ZP, { identifier: o }, t.createElement(d.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        231035: (e, a, o) => {
            o.d(a, { Z: () => g });
            var r = o(202784),
                t = o(420740),
                d = o(108362),
                n = o(731708),
                l = o(154003),
                s = o(392237),
                i = o(674132),
                c = o.n(i),
                h = o(272175);
            const u = (0, o(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), r.createElement(h.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                p = c().e49537c2,
                D = c().a9ae1e78;
            class g extends r.PureComponent {
                render() {
                    return r.createElement(t.Z, { testID: m }, r.createElement(u, null), r.createElement(d.Z, { style: y.root }, r.createElement(n.ZP, { align: "center", color: "gray700", style: y.retryText }, p), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, o) => {
            o.d(a, { Z: () => c });
            var r = o(202784),
                t = o(500002),
                d = o(668214),
                n = o(997174),
                l = o(118823);
            const s = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class i extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: o, search: r },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: d, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && a.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const i = t || l;
                    ((i && t !== l) || (!i && o !== d) || r !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: o, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), o(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, t.ZP)(s(i));
        },
        524084: (e, a, o) => {
            o.d(a, { Z: () => n });
            var r = o(202784),
                t = o(523561),
                d = o(195560);
            const n = (0, t.Z)({ loader: () => o.e("loader.AbsolutePower").then(o.bind(o, 590136)), renderPlaceholder: (e, a) => r.createElement(d.Z, { hasError: e, onRetry: a }) });
        },
        511985: (e, a, o) => {
            o.d(a, { AD: () => r, Qy: () => d, _f: () => n, zH: () => t });
            const r = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                t = 500,
                d = (e) => Object.values(r).indexOf(e) >= 0,
                n = (e, a) => ("boolean" == typeof e ? e : a);
        },
        317861: (e, a, o) => {
            o.d(a, { Categories: () => p, WD: () => D, ol: () => g });
            var r = o(118717),
                t = o(174647),
                d = o(499627),
                n = o(917799),
                l = o(312771);
            const s = "gifSearch",
                i = `rweb/${s}`,
                c = {},
                h = { cursor: {}, items: [], initialFetchStatus: l.ZP.NONE, nextFetchStatus: l.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: a, getParams: o, localNamespace: r, mergeNewItems: t }) => {
                    const d = n.dg(`${i}/${r}`, "FETCH"),
                        u = (e, a, o) => {
                            const { fetchStatus: r, ...t } = o,
                                d = e[a] || {},
                                n = (d.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [a]: { ...h, ...d, ...t, [n]: r } };
                        },
                        m =
                            ({ cursor: e, query: r }) =>
                            (t, l, { api: s }) =>
                                n._O(t, { request: a(s), params: o(e, r) })({ actionTypes: d, meta: { query: r } }),
                        p = (a, o = e) => (a[s][r] || {})[o] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, o, { api: r }) => {
                                const t = p(o(), a);
                                return t.initialFetchStatus === l.ZP.LOADING || t.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, o, { api: r }) => {
                                const t = p(o(), a),
                                    { cursor: d = {} } = t;
                                return t.nextFetchStatus !== l.ZP.LOADING && d.next ? e(m({ query: a, cursor: d.next })) : Promise.resolve();
                            },
                        reducer: (e = c, a) => {
                            if (!a) return e;
                            switch (a.type) {
                                case d.REQUEST: {
                                    const { query: o } = a.meta;
                                    return u(e, o, { fetchStatus: l.ZP.LOADING });
                                }
                                case d.FAILURE: {
                                    const { query: o } = a.meta;
                                    return u(e, o, { fetchStatus: l.ZP.FAILED });
                                }
                                case d.SUCCESS: {
                                    const { cursor: o } = a.payload,
                                        { query: r } = a.meta,
                                        d = (e[r] || {}).items || [];
                                    return u(e, r, { cursor: o, fetchStatus: l.ZP.LOADED, items: t(d, a.payload) });
                                }
                                default:
                                    return e;
                            }
                        },
                        selectInitialFetchStatus: (e, a) => p(e, a).initialFetchStatus || l.ZP.NONE,
                        selectItems: (e, a) => p(e, a).items,
                        selectNextFetchStatus: (e, a) => p(e, a).nextFetchStatus || l.ZP.NONE,
                        selectQueryState: p,
                    };
                },
                m = (e) => e.filter(({ original_image: { height: e, width: a } = {} }) => e > 0 && a > 0),
                p = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(t.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, a) => [...e, ...(a?.data?.groups || [])], localNamespace: "categories" }),
                D = u({ getApiMethod: (e) => e.withEndpoint(t.Z).category, getParams: (e, a) => ({ category: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "category" }),
                g = u({ getApiMethod: (e) => e.withEndpoint(t.Z).search, getParams: (e, a) => ({ q: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "search" }),
                y = (0, r.UY)({ categories: p.reducer, category: D.reducer, search: g.reducer });
            d.Z.register({ [s]: y });
        },
        564895: (e, a, o) => {
            o.d(a, { ZP: () => f });
            var r = o(202784),
                t = o(325686),
                d = o(731708),
                n = o(451566),
                l = o(392237),
                s = o(674132),
                i = o.n(s),
                c = o(172459),
                h = o(71620),
                u = o(668214),
                m = o(38562);
            const p = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                D = i().j7fc4f9c;
            class g extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: a, onToggleChange: o, updateSettings: r } = this.props;
                            r({ shouldAutoPlayGif: e }).catch(a({ showToast: !0 })), o(e);
                        });
                }
                render() {
                    const { category: e, location: a, query: o, shouldAutoPlayGif: l } = this.props,
                        s = o || a?.state?.query,
                        i = e || a?.state?.category?.display_name;
                    return (0, c.Z)() && (s || i) ? r.createElement(t.Z, { style: y.root }, r.createElement(d.ZP, { color: "gray700" }, D), r.createElement(n.Z, { "aria-label": D, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                f = p(g);
        },
        278066: (e, a, o) => {
            o.d(a, { ZP: () => S });
            o(136728);
            var r = o(202784),
                t = o(325686),
                d = o(530732),
                n = o(992942),
                l = o(731708),
                s = o(392237),
                i = o(16569),
                c = o(290402),
                h = o(663194),
                u = o(24949),
                m = o(450681),
                p = o(668214),
                D = o(317861);
            const { Categories: g } = D,
                y = (e, a) => g.selectItems(e),
                f = (e) => g.selectInitialFetchStatus(e),
                M = (0, p.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(y, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: f }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: g.fetchInitialIfNeeded, fetchNextIfNeeded: g.fetchNextIfNeeded })),
                b = r.memo((e) => {
                    const { category: a, gifSearchKey: o, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: D },
                        } = a,
                        g = r.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: o, dmConversationId: e } });
                            }
                        }, [s, a, o, u]);
                    return r.createElement(d.Z, { onPress: g, style: [w.category, m && w.leftMargin] }, r.createElement(n.Z, { source: D, style: [w.categoryImage, { backgroundColor: (0, h.d)(c) }] }), r.createElement(t.Z, { style: w.categoryNameContainer }, r.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                w = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = M((e) => {
                    const { categories: a, fetchInitialIfNeeded: o, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = r.useCallback(() => {
                            o();
                        }, [o]),
                        h = r.useCallback(() => {
                            const e = [];
                            if (a) for (let o = 0; o < a.length; o += 2) e.push([a[o], a[o + 1]]);
                            return r.createElement(t.Z, null, r.Children.toArray(e.map(([e, a], o) => r.createElement(t.Z, { style: [w.row, 0 === o && w.firstRow] }, r.createElement(b, { category: e, gifSearchKey: d, history: n, index: 2 * o, onClick: s, withLeftMargin: !1 }), a ? r.createElement(b, { category: a, gifSearchKey: d, history: n, index: 2 * o + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        r.useEffect(() => {
                            i();
                        }, [i]),
                        r.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        800708: (e, a, o) => {
            o.r(a), o.d(a, { GifSearchCategoryScreen: () => c, default: () => h });
            var r = o(807896),
                t = o(202784),
                d = o(674132),
                n = o.n(d),
                l = o(223071),
                s = o(980407);
            const i = n().f5ff0d6f,
                c = (e) => {
                    const { searchBox: a, ...o } = e,
                        { history: d, location: n } = o,
                        c = n.state && n.state.category,
                        h = c && c.display_name;
                    return t.createElement(s.Z, { backButtonType: "back", documentTitle: i({ category: h }), history: d, middleControl: a }, t.createElement(l.Z, (0, r.Z)({ category: c }, o)));
                },
                h = c;
        },
        223071: (e, a, o) => {
            o.d(a, { Z: () => c });
            var r = o(202784),
                t = o(511985),
                d = o(725516),
                n = o(317861),
                l = o(564895),
                s = o(118092);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { category: e, gifSearchKey: a, history: o, location: d, onClickGif: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, t._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(l.ZP, { category: e, location: d, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && r.createElement(s.Z, { gifSearchKey: a, history: o, module: n.WD, onClickGif: i, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        558969: (e, a, o) => {
            o.r(a), o.d(a, { default: () => p });
            var r = o(202784),
                t = o(674132),
                d = o.n(t),
                n = o(278066),
                l = o(980407),
                s = o(725516);
            const i = d().c6f5ac52,
                c = (0, s.Z)(
                    (e) => {
                        const { analytics: a, location: o, searchBox: t, ...d } = e,
                            { history: s } = d,
                            c = o.state?.searchFocused,
                            h = r.useCallback(() => {
                                c || a.scribeAction("cancel"), s.goBack({ backLocation: "/" });
                            }, [a, s, c]);
                        return r.createElement(l.Z, { documentTitle: i, history: s, middleControl: t, onBackClick: h }, r.createElement(n.ZP, d));
                    },
                    { element: "category" },
                );
            var h = o(237837);
            const u = d().ab468379,
                m = (e) => {
                    const { searchBox: a, ...o } = e,
                        { history: t, query: d } = o;
                    return r.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: d }), history: t, middleControl: a }, r.createElement(h.Z, o));
                },
                p = ({ gifSearchKey: e, history: a, location: o, searchBox: t, shouldAutoPlayGif: d }) => {
                    const n = o.state && o.state.query;
                    return n ? r.createElement(m, { gifSearchKey: e, history: a, location: o, query: n, searchBox: t, shouldAutoPlayGif: d }) : r.createElement(c, { gifSearchKey: e, history: a, location: o, searchBox: t });
                };
        },
        237837: (e, a, o) => {
            o.d(a, { Z: () => c });
            var r = o(202784),
                t = o(511985),
                d = o(725516),
                n = o(317861),
                l = o(564895),
                s = o(118092);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { gifSearchKey: e, history: a, location: o, onClickGif: d, query: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, t._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(l.ZP, { location: o, onToggleChange: this._handleToggleChange, query: i, shouldAutoPlayGif: u }), r.createElement(s.Z, { fromSearch: !0, gifSearchKey: e, history: a, module: n.ol, onClickGif: d, query: i, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        118092: (e, a, o) => {
            o.d(a, { Z: () => $ });
            var r = o(202784),
                t = o(928316),
                d = o(325686),
                n = o(457311),
                l = o(392237),
                s = o(674132),
                i = o.n(s),
                c = o(459643),
                h = o(912021),
                u = o(370751),
                m = o(290402),
                p = o(965245),
                D = o(443781),
                g = o(511985),
                y = o(716233),
                f = o(663194);
            o(136728);
            const M = (e, a) => {
                const o = e.reduce((e, a) => {
                    const { original_image: o } = a;
                    return e + o.width / o.height;
                }, 0);
                return Math.ceil(a / o);
            };
            function b(e, a, o) {
                return e.reduce((e, r, t) => (e[e.length - 1].push({ ...r, index: t }), e[e.length - 1].length > 0 && M(e[e.length - 1], o) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var w = o(459679),
                S = o(668214),
                k = o(704279),
                _ = o(798538),
                I = o(497294),
                A = o(632960);
            const C = [],
                P = (e, { module: a, query: o }) => a.selectInitialFetchStatus(e, o),
                Z = (e, { module: a, query: o }) => a.selectItems(e, o),
                E = (e, { module: a, query: o }) => a.selectNextFetchStatus(e, o),
                x = (e) => {
                    const { tweetComposer: a } = e,
                        o = a?.activeParentKey,
                        r = A.E_(e, o),
                        t = a[o],
                        d = t.composerData[r]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                v = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: Z, nextFetchStatus: E, oldMediaIds: x }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: o, oldMediaIds: r }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, w.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: o, oldMediaIds: r }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((o = e?.location?.state),
                                (e, a) => {
                                    const r = o && o.dmConversationId;
                                    return (0, _.rA)(r, e, a);
                                }),
                            setMediaMetadata: I._B,
                            fetchInitialIfNeeded: a.fetchInitialIfNeeded,
                            fetchNextIfNeeded: a.fetchNextIfNeeded,
                            scribeAction: k.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var o;
                    });
            var N = o(530732),
                R = o(992942),
                B = o(74938);
            class T extends r.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: o, width: t } = this.props;
                    return r.createElement(N.Z, { onPress: o, style: [G.imageContainer, F(e, a, t).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: o, shouldAutoPlayGif: t, stillMediaUrl: d, width: n } = this.props,
                        l = { height: o, width: n, uri: t ? a : d };
                    return r.createElement(R.Z, { "aria-label": e, source: l, testID: B.Z.gifSearchGifImage });
                }
            }
            const F = (e, a, o) => l.default.create((r) => ({ background: { backgroundColor: e, height: a, width: o } })),
                G = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = T,
                q = "gifSearchTimelineRoot",
                O = i().a66b7760,
                z = i().a723aefa,
                K = i().a6ecfa0a,
                U = (e) => e.map((e) => e.id).join("-"),
                W = (0, c.Z)(null),
                Q = [];
            class H extends r.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: o } = this.state,
                                t = e ? this._brickLayout(e, 150, o) : Q;
                            return o > 0 ? r.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: U, items: t, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, o) => (t) => {
                            const n = M(t, a),
                                l = a - 2 * t.length - 1;
                            let s = 0;
                            return r.createElement(
                                d.Z,
                                { style: [V.imageRow, { height: n }] },
                                t.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === t.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), r.createElement(L, { altText: a.alt_text || O, animatedMediaUrl: m, backgroundColor: (0, f.d)(a.index), height: n, key: a.index, onClick: o(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: a } = this.state;
                            return this._getMemoizedRowRenderer(e, a, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: a, addMediaToDM: o, fromSearch: r, gifSearchKey: t, history: d, onClickGif: n, scribeAction: l, setMediaMetadata: s, updateSingleComposerV2: i } = this.props,
                                {
                                    alt_text: c,
                                    found_media_origin: h,
                                    provider: m,
                                    original_image: { url: p },
                                    preview_image: { height: D, url: f, width: M },
                                    thumbnail_images: [b],
                                    url: w,
                                } = e,
                                S = a({ mediaCategory: t === g.AD.Composition || t === g.AD.NoteComposition ? y.xz.TweetGif : y.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: f, sourceUrl: p, stillMediaUrl: b.still_image_url, width: M, height: D }),
                                k = S.map((e) => e.id),
                                _ = { found_media_origin: h, provider: m, url: w };
                            if ((c && s(k[0], { defaultAltText: c, gifMetadata: _ }), t === g.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(k))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : k, gifMetadata: _ } });
                            } else t === g.AD.DMComposition ? o(k, _) : t === g.AD.NoteComposition && n?.(S);
                            l({ page: t, section: "gif_search", element: "category", action: r ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => r.createElement(n.Z, { header: z, message: K })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => r.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: W }))),
                        (this._getRenderFooter = () => {
                            const { nextFetchStatus: e } = this.props;
                            return this._getRenderMemoizedFooter(e, this._handleFetchNext);
                        }),
                        (this._handleFetch = (e = this.props.query) => {
                            const { fetchInitialIfNeeded: a } = this.props;
                            a({ query: e });
                        }),
                        (this._handleFetchNext = () => {
                            const { fetchNextIfNeeded: e, query: a } = this.props;
                            e({ query: a });
                        }),
                        (this._handleResize = () => {
                            this._rootNode && this._rootNode instanceof Element && this.setState({ width: this._rootNode.clientWidth });
                        }),
                        (this._brickLayout = (0, h.Z)(b)),
                        (this._setRootNode = (e) => {
                            this._rootNode = t.findDOMNode(e);
                        }),
                        (this.state = { width: 0 });
                }
                componentDidUpdate(e) {
                    e.query !== this.props.query && this._handleFetch(this.props.query);
                }
                componentDidMount() {
                    window.addEventListener("resize", this._handleResize), this._handleFetch(), this._handleResize();
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this._handleResize);
                }
                render() {
                    const { initialFetchStatus: e } = this.props;
                    return r.createElement("div", { "data-testid": q, ref: this._setRootNode }, r.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (H.contextType = D.rC), (H.defaultProps = { fromSearch: !1 });
            const V = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                $ = v(H);
        },
        16569: (e, a, o) => {
            o.r(a), o.d(a, { GifSearchPaths: () => v, GifSearchScreen: () => N, default: () => B });
            o(136728);
            var r = o(202784),
                t = o(325686),
                d = o(107267),
                n = o(371344),
                l = o(154003),
                s = o(392237),
                i = o(674132),
                c = o.n(i),
                h = o(956272),
                u = o(912021),
                m = o(666536),
                p = o(443781),
                D = o(511985),
                g = o(293115),
                y = o(615027),
                f = o(189244),
                M = o(717988),
                b = o(466441),
                w = o(668214),
                S = o(38562),
                k = o(659773);
            const _ = (e, a) => (0, S.l4)(e).shouldAutoPlayGif,
                I = (0, w.Z)().propsFromState(() => ({ shouldAutoPlayGif: _, isDataSaverEnabled: S.IX, effectiveAutoplayOption: k.AP }));
            var A = o(74938),
                C = o(663194);
            const P = c().a50ba822,
                Z = c().a9ae1e78,
                E = (0, M.p)(
                    () =>
                        Promise.all([
                            o.e("icons.10"),
                            o.e("icons.21"),
                            o.e("icons.16"),
                            o.e("icons.1"),
                            o.e("icons.19"),
                            o.e("icons.0"),
                            o.e("icons.8"),
                            o.e("icons.23"),
                            o.e("icons.2"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
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
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            o.e("bundle.GifSearch"),
                        ]).then(o.bind(o, 558969)),
                    { shouldMigrateToX: !1 },
                ),
                x = (0, M.p)(
                    () =>
                        Promise.all([
                            o.e("icons.10"),
                            o.e("icons.21"),
                            o.e("icons.16"),
                            o.e("icons.1"),
                            o.e("icons.19"),
                            o.e("icons.0"),
                            o.e("icons.8"),
                            o.e("icons.23"),
                            o.e("icons.2"),
                            o.e("modules.common-e907d115"),
                            o.e("modules.common-e019dbda"),
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
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            o.e("bundle.GifSearch"),
                        ]).then(o.bind(o, 800708)),
                    { shouldMigrateToX: !1 },
                ),
                v = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class N extends r.Component {
                constructor(e, a) {
                    super(e, a),
                        (this.state = { searchDisabled: !0 }),
                        (this._gifSearchKey = this._getGifSearchKey()),
                        (this._getScribeNamespace = (0, u.Z)((e) => ({ page: e, section: "gif_search" }))),
                        (this._setTextInputRef = (e) => {
                            this._textInputRef = e;
                        }),
                        (this._handleChange = (e) => {
                            const { value: a } = e.currentTarget;
                            this._shouldRenderResultsOnChange ? this._goToQueryDebounced(a) : this.setState({ searchDisabled: !a });
                        }),
                        (this._handleClear = () => {
                            const { history: e, isDataSaverEnabled: a, location: o } = this.props,
                                r = o.pathname.startsWith(v.category),
                                t = o.pathname === v.search && o.state && o.state.query;
                            !a && (r || t) ? e.goBack() : a && this.setState({ searchDisabled: !0 });
                        }),
                        (this._handleSubmit = () => {
                            const e = this._textInputRef && this._textInputRef.getValue();
                            this._goToQuery(e);
                        }),
                        (this._handleSearch = (e) => {
                            const { value: a } = e.currentTarget;
                            this._goToQuery(a);
                        }),
                        (this._goToQuery = (e) => {
                            const { history: a, isDataSaverEnabled: o, location: r } = this.props,
                                t = { pathname: v.search },
                                d = r.state && r.state.query,
                                n = r.pathname === v.search && !d,
                                l = r.pathname.startsWith(v.category) || (r.pathname === v.search && d),
                                s = !o && l,
                                i = r.state && r.state.dmConversationId;
                            e ? ((t.state = { dmConversationId: i, query: e }), n ? a.push(t) : a.replace(t)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), D.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        o = this._getShouldAutoPlayGif(),
                        t = this._gifSearchKey;
                    if (!t) return r.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: t, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: o };
                    return r.createElement(g.nO, { namespace: this._getScribeNamespace(t) }, r.createElement(d.Switch, null, r.createElement(d.Route, { exact: !0, path: v.search }, r.createElement(E, n)), r.createElement(d.Route, { exact: !0, path: `${v.category}/${f.kM}` }, r.createElement(x, n)), r.createElement(d.Route, { component: b.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: a, shouldAutoPlayGif: o } = this.props;
                    return (0, C.r)(o, a, e);
                }
                _getGifSearchKey() {
                    const {
                            location: { state: e },
                        } = this.props,
                        { gifSearchKey: a, gifSearchKeySource: o } = e || {};
                    return a || (o && (0, D.Qy)(o) && o);
                }
                _getQueryOrCategory() {
                    const { location: e } = this.props,
                        a = e.state && e.state.query,
                        o = e.state && e.state.category ? e.state.category.display_name : "";
                    return a || o;
                }
                _renderSearchBox() {
                    const { searchDisabled: e } = this.state,
                        a = this._getQueryOrCategory();
                    return r.createElement(t.Z, { style: R.searchContainer }, r.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : r.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, Z));
                }
            }
            N.contextType = p.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                B = I(N);
        },
        74938: (e, a, o) => {
            o.d(a, { Z: () => r });
            const r = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, o) => {
            o.d(a, { d: () => p, r: () => D });
            var r = o(392237),
                t = o(461756),
                d = o(961817),
                n = o(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = r.default.theme.colors,
                m = [l, s, c, h, i, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                D = (e, a, o) => {
                    const r = o ?? (0, d.i)();
                    return (e || ((0, n.Z)(r) && !a)) && !t.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, o) => {
            o.r(a), o.d(a, { NotFoundScreen: () => M, default: () => w });
            o(571372);
            var r = o(202784),
                t = o(386802),
                d = o(108362),
                n = o(392237),
                l = o(674132),
                s = o.n(l),
                i = o(187669),
                c = o(449067),
                h = o(38293),
                u = o(231035),
                m = o(652904),
                p = o(952793),
                D = o(163889),
                g = o(725516);
            const y = s().ba929da8,
                f = s().d203e242;
            function M(e) {
                const { splat: a } = e.match.params,
                    { isModal: o } = r.useContext(t.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    r.createElement(m.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: f }), r.createElement(d.Z, { style: o && b.modal }, r.createElement(u.Z, null)), r.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, g.Z)(M, { page: "not_found" });
        },
        879113: (e, a, o) => {
            o.d(a, { Z: () => m });
            var r = o(202784),
                t = o(476984),
                d = o.n(t),
                n = o(143778),
                l = o(750410),
                s = o(682830);
            const i = "failed",
                c = "loaded",
                h = "loading",
                u = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === c,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !o) || !d()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: o, fetchStatus: t, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: p, retryMessage: D, retryable: g } = this.props;
                    switch (t) {
                        case i:
                            return g ? r.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: D }) : o ? r.createElement(s.m, { failureMessage: o }) : p();
                        case h:
                            return r.createElement(s.J, { "aria-label": e, color: a, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        730895: (e, a, o) => {
            var r = o(821176);
            e.exports = function () {
                var e = r(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.b1c1f3fa.js.map
