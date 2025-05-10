"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        174647: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, t) => e.get("foundmedia/categories", a, t),
                category(a, t) {
                    const { category: r, ...o } = a;
                    return e.get(`foundmedia/categories/${r}`, o, t);
                },
                search: (a, t) => e.get("foundmedia/search", a, t),
            });
        },
        229333: (e, a, t) => {
            t.d(a, { Z: () => h });
            var r = t(202784),
                o = t(466999),
                d = t(325686),
                n = t(392237),
                l = t(674132);
            const s = t.n(l)().e5b0063d;
            let i = 0;
            class c extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        t = s({ title: a });
                    return r.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, a), r.createElement(d.Z, { "aria-label": t }, e));
                }
            }
            const h = c;
        },
        625661: (e, a, t) => {
            t.d(a, { ZP: () => u });
            var r = t(202784),
                o = t(614983),
                d = t.n(o),
                n = t(325686),
                l = t(370006),
                s = t(786998),
                i = t(929028),
                c = t(386802);
            function h(e, a, t) {
                return e || (!a && t ? "fixed" : void 0);
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: t, fixed: o, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: p, secondaryBar: D, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: S, withWideContainer: _ } = this.props,
                        { isModal: k } = this.context,
                        I = d ? c : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, t) {
                            return e && !(a && t);
                        })(!!S, k, !!D);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: a, centeredLogo: t, isFullWidth: n, isLarge: i, leftControl: I, middleControl: u, position: h(m, k, o), rightControl: p, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: A, withWideContainer: _ }), D || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        t = i.Z.getBackgroundStyles();
                    return a ? r.createElement(n.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(202784),
                o = t(325686),
                d = t(392237);
            class n extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(o.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = n;
        },
        290402: (e, a, t) => {
            t.d(a, { Z: () => p });
            var r = t(807896),
                o = t(202784),
                d = t(182056),
                n = t(879113),
                l = t(392237),
                s = t(674132),
                i = t.n(s),
                c = t(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, t) => {
                    const l = d.Z.isOnline();
                    return o.createElement(n.Z, (0, r.Z)({}, a, { icon: l ? void 0 : o.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = o.forwardRef(u);
        },
        980407: (e, a, t) => {
            t.d(a, { Z: () => D, w: () => m });
            var r = t(202784),
                o = t(325686),
                d = t(108362),
                n = t(386802),
                l = t(392237),
                s = t(652904),
                i = t(555079),
                c = t(625661),
                h = t(449067),
                u = t(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: t, backLocation: d, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, rightControl: g, secondaryBar: y, subtitle: f, title: M } = this.props,
                                { isModal: b } = this.context;
                            return r.createElement(o.Z, { style: b ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, r.createElement(c.ZP, { backButtonType: t || (b ? "close" : "back"), backLocation: d, centerTitle: n, fixed: !b, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, ref: e, rightControl: g, secondaryBar: y, style: [b && p.appBarModal, a], subtitle: f, title: M, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: t } = this.context;
                            a && (t ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: t, containerStyle: n, documentTitle: l, isFullWidth: i, isLarge: c, renderHeader: m, title: D, withoutBottomBarMobile: g } = this.props,
                        { isModal: y } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: D }), r.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, r.createElement(d.Z, { isFullWidth: i, isLarge: c, style: [p.container, y && p.containerModal, n] }, y ? r.createElement(u.Z, { style: p.viewport }, f, t) : t), a ? r.createElement(o.Z, { style: [p.bottomBarModal, !y && !g && p.bottomBarMobile] }, r.createElement(d.Z, { isFullWidth: i, isLarge: c }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                D = m;
        },
        965245: (e, a, t) => {
            t.d(a, { Z: () => s });
            var r = t(807896),
                o = t(202784),
                d = t(229333),
                n = t(414939),
                l = t(334346);
            const s = ({ accessibilityTitle: e, footer: a = o.createElement(n.Z, null), ...t }) => {
                const s = o.createElement(l.C, (0, r.Z)({}, t, { footer: a }));
                return e ? o.createElement(d.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, t) => {
            t.d(a, { C: () => s, Z: () => l });
            var r = t(807896),
                o = t(202784),
                d = t(524084),
                n = t(768572);
            const l = "stable_sort_index",
                s = o.forwardRef((e, a) => {
                    const t = e.cacheKey;
                    return o.createElement(n.ZP, { identifier: t }, o.createElement(d.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        231035: (e, a, t) => {
            t.d(a, { Z: () => g });
            var r = t(202784),
                o = t(420740),
                d = t(108362),
                n = t(731708),
                l = t(154003),
                s = t(392237),
                i = t(674132),
                c = t.n(i),
                h = t(272175);
            const u = (0, t(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), r.createElement(h.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                p = c().e49537c2,
                D = c().a9ae1e78;
            class g extends r.PureComponent {
                render() {
                    return r.createElement(o.Z, { testID: m }, r.createElement(u, null), r.createElement(d.Z, { style: y.root }, r.createElement(n.ZP, { align: "center", color: "gray700", style: y.retryText }, p), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => c });
            var r = t(202784),
                o = t(500002),
                d = t(668214),
                n = t(997174),
                l = t(118823);
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
                            location: { pathname: t, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: d, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (s = !0));
                    const i = o || l;
                    ((i && o !== l) || (!i && t !== d) || r !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: t, updateTweetDetailNav: r } = e;
                    a.scribePageImpression(), t(a.contextualScribeNamespace, a.contextualScribeData), r(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(s(i));
        },
        524084: (e, a, t) => {
            t.d(a, { Z: () => n });
            var r = t(202784),
                o = t(523561),
                d = t(195560);
            const n = (0, o.Z)({ loader: () => t.e("loader.AbsolutePower").then(t.bind(t, 590136)), renderPlaceholder: (e, a) => r.createElement(d.Z, { hasError: e, onRetry: a }) });
        },
        511985: (e, a, t) => {
            t.d(a, { AD: () => r, Qy: () => d, _f: () => n, zH: () => o });
            const r = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                o = 500,
                d = (e) => Object.values(r).indexOf(e) >= 0,
                n = (e, a) => ("boolean" == typeof e ? e : a);
        },
        317861: (e, a, t) => {
            t.d(a, { Categories: () => p, WD: () => D, ol: () => g });
            var r = t(118717),
                o = t(174647),
                d = t(499627),
                n = t(917799),
                l = t(312771);
            const s = "gifSearch",
                i = `rweb/${s}`,
                c = {},
                h = { cursor: {}, items: [], initialFetchStatus: l.ZP.NONE, nextFetchStatus: l.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: a, getParams: t, localNamespace: r, mergeNewItems: o }) => {
                    const d = n.dg(`${i}/${r}`, "FETCH"),
                        u = (e, a, t) => {
                            const { fetchStatus: r, ...o } = t,
                                d = e[a] || {},
                                n = (d.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [a]: { ...h, ...d, ...o, [n]: r } };
                        },
                        m =
                            ({ cursor: e, query: r }) =>
                            (o, l, { api: s }) =>
                                n._O(o, { request: a(s), params: t(e, r) })({ actionTypes: d, meta: { query: r } }),
                        p = (a, t = e) => (a[s][r] || {})[t] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, t, { api: r }) => {
                                const o = p(t(), a);
                                return o.initialFetchStatus === l.ZP.LOADING || o.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, t, { api: r }) => {
                                const o = p(t(), a),
                                    { cursor: d = {} } = o;
                                return o.nextFetchStatus !== l.ZP.LOADING && d.next ? e(m({ query: a, cursor: d.next })) : Promise.resolve();
                            },
                        reducer: (e = c, a) => {
                            if (!a) return e;
                            switch (a.type) {
                                case d.REQUEST: {
                                    const { query: t } = a.meta;
                                    return u(e, t, { fetchStatus: l.ZP.LOADING });
                                }
                                case d.FAILURE: {
                                    const { query: t } = a.meta;
                                    return u(e, t, { fetchStatus: l.ZP.FAILED });
                                }
                                case d.SUCCESS: {
                                    const { cursor: t } = a.payload,
                                        { query: r } = a.meta,
                                        d = (e[r] || {}).items || [];
                                    return u(e, r, { cursor: t, fetchStatus: l.ZP.LOADED, items: o(d, a.payload) });
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
                p = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(o.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, a) => [...e, ...(a?.data?.groups || [])], localNamespace: "categories" }),
                D = u({ getApiMethod: (e) => e.withEndpoint(o.Z).category, getParams: (e, a) => ({ category: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "category" }),
                g = u({ getApiMethod: (e) => e.withEndpoint(o.Z).search, getParams: (e, a) => ({ q: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "search" }),
                y = (0, r.UY)({ categories: p.reducer, category: D.reducer, search: g.reducer });
            d.Z.register({ [s]: y });
        },
        564895: (e, a, t) => {
            t.d(a, { ZP: () => f });
            var r = t(202784),
                o = t(325686),
                d = t(731708),
                n = t(451566),
                l = t(392237),
                s = t(674132),
                i = t.n(s),
                c = t(172459),
                h = t(71620),
                u = t(668214),
                m = t(38562);
            const p = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                D = i().j7fc4f9c;
            class g extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: a, onToggleChange: t, updateSettings: r } = this.props;
                            r({ shouldAutoPlayGif: e }).catch(a({ showToast: !0 })), t(e);
                        });
                }
                render() {
                    const { category: e, location: a, query: t, shouldAutoPlayGif: l } = this.props,
                        s = t || a?.state?.query,
                        i = e || a?.state?.category?.display_name;
                    return (0, c.Z)() && (s || i) ? r.createElement(o.Z, { style: y.root }, r.createElement(d.ZP, { color: "gray700" }, D), r.createElement(n.Z, { "aria-label": D, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                f = p(g);
        },
        278066: (e, a, t) => {
            t.d(a, { ZP: () => S });
            t(136728);
            var r = t(202784),
                o = t(325686),
                d = t(530732),
                n = t(992942),
                l = t(731708),
                s = t(392237),
                i = t(16569),
                c = t(290402),
                h = t(663194),
                u = t(24949),
                m = t(450681),
                p = t(668214),
                D = t(317861);
            const { Categories: g } = D,
                y = (e, a) => g.selectItems(e),
                f = (e) => g.selectInitialFetchStatus(e),
                M = (0, p.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(y, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: f }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: g.fetchInitialIfNeeded, fetchNextIfNeeded: g.fetchNextIfNeeded })),
                b = r.memo((e) => {
                    const { category: a, gifSearchKey: t, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: D },
                        } = a,
                        g = r.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: t, dmConversationId: e } });
                            }
                        }, [s, a, t, u]);
                    return r.createElement(d.Z, { onPress: g, style: [w.category, m && w.leftMargin] }, r.createElement(n.Z, { source: D, style: [w.categoryImage, { backgroundColor: (0, h.d)(c) }] }), r.createElement(o.Z, { style: w.categoryNameContainer }, r.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                w = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = M((e) => {
                    const { categories: a, fetchInitialIfNeeded: t, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = r.useCallback(() => {
                            t();
                        }, [t]),
                        h = r.useCallback(() => {
                            const e = [];
                            if (a) for (let t = 0; t < a.length; t += 2) e.push([a[t], a[t + 1]]);
                            return r.createElement(o.Z, null, r.Children.toArray(e.map(([e, a], t) => r.createElement(o.Z, { style: [w.row, 0 === t && w.firstRow] }, r.createElement(b, { category: e, gifSearchKey: d, history: n, index: 2 * t, onClick: s, withLeftMargin: !1 }), a ? r.createElement(b, { category: a, gifSearchKey: d, history: n, index: 2 * t + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        r.useEffect(() => {
                            i();
                        }, [i]),
                        r.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        800708: (e, a, t) => {
            t.r(a), t.d(a, { GifSearchCategoryScreen: () => c, default: () => h });
            var r = t(807896),
                o = t(202784),
                d = t(674132),
                n = t.n(d),
                l = t(223071),
                s = t(980407);
            const i = n().f5ff0d6f,
                c = (e) => {
                    const { searchBox: a, ...t } = e,
                        { history: d, location: n } = t,
                        c = n.state && n.state.category,
                        h = c && c.display_name;
                    return o.createElement(s.Z, { backButtonType: "back", documentTitle: i({ category: h }), history: d, middleControl: a }, o.createElement(l.Z, (0, r.Z)({ category: c }, t)));
                },
                h = c;
        },
        223071: (e, a, t) => {
            t.d(a, { Z: () => c });
            var r = t(202784),
                o = t(511985),
                d = t(725516),
                n = t(317861),
                l = t(564895),
                s = t(118092);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { category: e, gifSearchKey: a, history: t, location: d, onClickGif: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(l.ZP, { category: e, location: d, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && r.createElement(s.Z, { gifSearchKey: a, history: t, module: n.WD, onClickGif: i, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        558969: (e, a, t) => {
            t.r(a), t.d(a, { default: () => p });
            var r = t(202784),
                o = t(674132),
                d = t.n(o),
                n = t(278066),
                l = t(980407),
                s = t(725516);
            const i = d().c6f5ac52,
                c = (0, s.Z)(
                    (e) => {
                        const { analytics: a, location: t, searchBox: o, ...d } = e,
                            { history: s } = d,
                            c = t.state?.searchFocused,
                            h = r.useCallback(() => {
                                c || a.scribeAction("cancel"), s.goBack({ backLocation: "/" });
                            }, [a, s, c]);
                        return r.createElement(l.Z, { documentTitle: i, history: s, middleControl: o, onBackClick: h }, r.createElement(n.ZP, d));
                    },
                    { element: "category" },
                );
            var h = t(237837);
            const u = d().ab468379,
                m = (e) => {
                    const { searchBox: a, ...t } = e,
                        { history: o, query: d } = t;
                    return r.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: d }), history: o, middleControl: a }, r.createElement(h.Z, t));
                },
                p = ({ gifSearchKey: e, history: a, location: t, searchBox: o, shouldAutoPlayGif: d }) => {
                    const n = t.state && t.state.query;
                    return n ? r.createElement(m, { gifSearchKey: e, history: a, location: t, query: n, searchBox: o, shouldAutoPlayGif: d }) : r.createElement(c, { gifSearchKey: e, history: a, location: t, searchBox: o });
                };
        },
        237837: (e, a, t) => {
            t.d(a, { Z: () => c });
            var r = t(202784),
                o = t(511985),
                d = t(725516),
                n = t(317861),
                l = t(564895),
                s = t(118092);
            class i extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { gifSearchKey: e, history: a, location: t, onClickGif: d, query: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(l.ZP, { location: t, onToggleChange: this._handleToggleChange, query: i, shouldAutoPlayGif: u }), r.createElement(s.Z, { fromSearch: !0, gifSearchKey: e, history: a, module: n.ol, onClickGif: d, query: i, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        118092: (e, a, t) => {
            t.d(a, { Z: () => $ });
            var r = t(202784),
                o = t(928316),
                d = t(325686),
                n = t(457311),
                l = t(392237),
                s = t(674132),
                i = t.n(s),
                c = t(459643),
                h = t(912021),
                u = t(370751),
                m = t(290402),
                p = t(965245),
                D = t(443781),
                g = t(511985),
                y = t(716233),
                f = t(663194);
            t(136728);
            const M = (e, a) => {
                const t = e.reduce((e, a) => {
                    const { original_image: t } = a;
                    return e + t.width / t.height;
                }, 0);
                return Math.ceil(a / t);
            };
            function b(e, a, t) {
                return e.reduce((e, r, o) => (e[e.length - 1].push({ ...r, index: o }), e[e.length - 1].length > 0 && M(e[e.length - 1], t) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var w = t(459679),
                S = t(668214),
                _ = t(704279),
                k = t(798538),
                I = t(497294),
                A = t(632960);
            const C = [],
                P = (e, { module: a, query: t }) => a.selectInitialFetchStatus(e, t),
                Z = (e, { module: a, query: t }) => a.selectItems(e, t),
                v = (e, { module: a, query: t }) => a.selectNextFetchStatus(e, t),
                E = (e) => {
                    const { tweetComposer: a } = e,
                        t = a?.activeParentKey,
                        r = A.E_(e, t),
                        o = a[t],
                        d = o.composerData[r]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                x = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: Z, nextFetchStatus: v, oldMediaIds: E }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: t, oldMediaIds: r }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, w.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: t, oldMediaIds: r }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((t = e?.location?.state),
                                (e, a) => {
                                    const r = t && t.dmConversationId;
                                    return (0, k.rA)(r, e, a);
                                }),
                            setMediaMetadata: I._B,
                            fetchInitialIfNeeded: a.fetchInitialIfNeeded,
                            fetchNextIfNeeded: a.fetchNextIfNeeded,
                            scribeAction: _.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var t;
                    });
            var N = t(530732),
                R = t(992942),
                B = t(74938);
            class T extends r.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: t, width: o } = this.props;
                    return r.createElement(N.Z, { onPress: t, style: [G.imageContainer, F(e, a, o).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: t, shouldAutoPlayGif: o, stillMediaUrl: d, width: n } = this.props,
                        l = { height: t, width: n, uri: o ? a : d };
                    return r.createElement(R.Z, { "aria-label": e, source: l, testID: B.Z.gifSearchGifImage });
                }
            }
            const F = (e, a, t) => l.default.create((r) => ({ background: { backgroundColor: e, height: a, width: t } })),
                G = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = T,
                q = "gifSearchTimelineRoot",
                z = i().a66b7760,
                O = i().a723aefa,
                K = i().a6ecfa0a,
                U = (e) => e.map((e) => e.id).join("-"),
                H = (0, c.Z)(null),
                V = [];
            class W extends r.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: t } = this.state,
                                o = e ? this._brickLayout(e, 150, t) : V;
                            return t > 0 ? r.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: U, items: o, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, t) => (o) => {
                            const n = M(o, a),
                                l = a - 2 * o.length - 1;
                            let s = 0;
                            return r.createElement(
                                d.Z,
                                { style: [Q.imageRow, { height: n }] },
                                o.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === o.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), r.createElement(L, { altText: a.alt_text || z, animatedMediaUrl: m, backgroundColor: (0, f.d)(a.index), height: n, key: a.index, onClick: t(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: a } = this.state;
                            return this._getMemoizedRowRenderer(e, a, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: a, addMediaToDM: t, fromSearch: r, gifSearchKey: o, history: d, onClickGif: n, scribeAction: l, setMediaMetadata: s, updateSingleComposerV2: i } = this.props,
                                {
                                    alt_text: c,
                                    found_media_origin: h,
                                    provider: m,
                                    original_image: { url: p },
                                    preview_image: { height: D, url: f, width: M },
                                    thumbnail_images: [b],
                                    url: w,
                                } = e,
                                S = a({ mediaCategory: o === g.AD.Composition || o === g.AD.NoteComposition ? y.xz.TweetGif : y.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: f, sourceUrl: p, stillMediaUrl: b.still_image_url, width: M, height: D }),
                                _ = S.map((e) => e.id),
                                k = { found_media_origin: h, provider: m, url: w };
                            if ((c && s(_[0], { defaultAltText: c, gifMetadata: k }), o === g.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(_))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : _, gifMetadata: k } });
                            } else o === g.AD.DMComposition ? t(_, k) : o === g.AD.NoteComposition && n?.(S);
                            l({ page: o, section: "gif_search", element: "category", action: r ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => r.createElement(n.Z, { header: O, message: K })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => r.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: H }))),
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
                            this._rootNode = o.findDOMNode(e);
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
            (W.contextType = D.rC), (W.defaultProps = { fromSearch: !1 });
            const Q = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                $ = x(W);
        },
        16569: (e, a, t) => {
            t.r(a), t.d(a, { GifSearchPaths: () => x, GifSearchScreen: () => N, default: () => B });
            t(136728);
            var r = t(202784),
                o = t(325686),
                d = t(107267),
                n = t(371344),
                l = t(154003),
                s = t(392237),
                i = t(674132),
                c = t.n(i),
                h = t(956272),
                u = t(912021),
                m = t(666536),
                p = t(443781),
                D = t(511985),
                g = t(293115),
                y = t(615027),
                f = t(189244),
                M = t(717988),
                b = t(466441),
                w = t(668214),
                S = t(38562),
                _ = t(659773);
            const k = (e, a) => (0, S.l4)(e).shouldAutoPlayGif,
                I = (0, w.Z)().propsFromState(() => ({ shouldAutoPlayGif: k, isDataSaverEnabled: S.IX, effectiveAutoplayOption: _.AP }));
            var A = t(74938),
                C = t(663194);
            const P = c().a50ba822,
                Z = c().a9ae1e78,
                v = (0, M.p)(
                    () =>
                        Promise.all([
                            t.e("icons.5"),
                            t.e("icons.12"),
                            t.e("icons.20"),
                            t.e("icons.0"),
                            t.e("icons.21"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            t.e("bundle.GifSearch"),
                        ]).then(t.bind(t, 558969)),
                    { shouldMigrateToX: !1 },
                ),
                E = (0, M.p)(
                    () =>
                        Promise.all([
                            t.e("icons.5"),
                            t.e("icons.12"),
                            t.e("icons.20"),
                            t.e("icons.0"),
                            t.e("icons.21"),
                            t.e("modules.common-e907d115"),
                            t.e("modules.common-e019dbda"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            t.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            t.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            t.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            t.e("bundle.GifSearch"),
                        ]).then(t.bind(t, 800708)),
                    { shouldMigrateToX: !1 },
                ),
                x = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
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
                            const { history: e, isDataSaverEnabled: a, location: t } = this.props,
                                r = t.pathname.startsWith(x.category),
                                o = t.pathname === x.search && t.state && t.state.query;
                            !a && (r || o) ? e.goBack() : a && this.setState({ searchDisabled: !0 });
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
                            const { history: a, isDataSaverEnabled: t, location: r } = this.props,
                                o = { pathname: x.search },
                                d = r.state && r.state.query,
                                n = r.pathname === x.search && !d,
                                l = r.pathname.startsWith(x.category) || (r.pathname === x.search && d),
                                s = !t && l,
                                i = r.state && r.state.dmConversationId;
                            e ? ((o.state = { dmConversationId: i, query: e }), n ? a.push(o) : a.replace(o)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), D.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        t = this._getShouldAutoPlayGif(),
                        o = this._gifSearchKey;
                    if (!o) return r.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: o, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: t };
                    return r.createElement(g.nO, { namespace: this._getScribeNamespace(o) }, r.createElement(d.Switch, null, r.createElement(d.Route, { exact: !0, path: x.search }, r.createElement(v, n)), r.createElement(d.Route, { exact: !0, path: `${x.category}/${f.kM}` }, r.createElement(E, n)), r.createElement(d.Route, { component: b.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: a, shouldAutoPlayGif: t } = this.props;
                    return (0, C.r)(t, a, e);
                }
                _getGifSearchKey() {
                    const {
                            location: { state: e },
                        } = this.props,
                        { gifSearchKey: a, gifSearchKeySource: t } = e || {};
                    return a || (t && (0, D.Qy)(t) && t);
                }
                _getQueryOrCategory() {
                    const { location: e } = this.props,
                        a = e.state && e.state.query,
                        t = e.state && e.state.category ? e.state.category.display_name : "";
                    return a || t;
                }
                _renderSearchBox() {
                    const { searchDisabled: e } = this.state,
                        a = this._getQueryOrCategory();
                    return r.createElement(o.Z, { style: R.searchContainer }, r.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : r.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, Z));
                }
            }
            N.contextType = p.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                B = I(N);
        },
        74938: (e, a, t) => {
            t.d(a, { Z: () => r });
            const r = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, t) => {
            t.d(a, { d: () => p, r: () => D });
            var r = t(392237),
                o = t(461756),
                d = t(961817),
                n = t(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = r.default.theme.colors,
                m = [l, s, c, h, i, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                D = (e, a, t) => {
                    const r = t ?? (0, d.i)();
                    return (e || ((0, n.Z)(r) && !a)) && !o.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, t) => {
            t.r(a), t.d(a, { NotFoundScreen: () => M, default: () => w });
            t(571372);
            var r = t(202784),
                o = t(386802),
                d = t(108362),
                n = t(392237),
                l = t(674132),
                s = t.n(l),
                i = t(187669),
                c = t(449067),
                h = t(38293),
                u = t(231035),
                m = t(652904),
                p = t(952793),
                D = t(163889),
                g = t(725516);
            const y = s().ba929da8,
                f = s().d203e242;
            function M(e) {
                const { splat: a } = e.match.params,
                    { isModal: t } = r.useContext(o.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    r.createElement(m.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: f }), r.createElement(d.Z, { style: t && b.modal }, r.createElement(u.Z, null)), r.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, g.Z)(M, { page: "not_found" });
        },
        879113: (e, a, t) => {
            t.d(a, { Z: () => m });
            var r = t(202784),
                o = t(476984),
                d = t.n(o),
                n = t(143778),
                l = t(750410),
                s = t(682830);
            const i = "failed",
                c = "loaded",
                h = "loading",
                u = "none";
            class m extends r.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === c,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !t) || !d()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: t, fetchStatus: o, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: p, retryMessage: D, retryable: g } = this.props;
                    switch (o) {
                        case i:
                            return g ? r.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: D }) : t ? r.createElement(s.m, { failureMessage: t }) : p();
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
        748138: (e, a, t) => {
            t.r(a), t.d(a, { default: () => s });
            var r = t(202784),
                o = t(890601),
                d = t(783427),
                n = t(347101);
            const l = (e = {}) => {
                const { direction: a } = (0, d.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        730895: (e, a, t) => {
            var r = t(821176);
            e.exports = function () {
                var e = r(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.712a8faa.js.map
