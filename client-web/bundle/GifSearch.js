"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        174647: (e, a, t) => {
            t.d(a, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, t) => e.get("foundmedia/categories", a, t),
                category(a, t) {
                    const { category: o, ...r } = a;
                    return e.get(`foundmedia/categories/${o}`, r, t);
                },
                search: (a, t) => e.get("foundmedia/search", a, t),
            });
        },
        229333: (e, a, t) => {
            t.d(a, { Z: () => h });
            var o = t(202784),
                r = t(466999),
                d = t(325686),
                n = t(392237),
                l = t(332920);
            const s = t.n(l)().e5b0063d;
            let i = 0;
            class c extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        t = s({ title: a });
                    return o.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, a), o.createElement(d.Z, { "aria-label": t }, e));
                }
            }
            const h = c;
        },
        625661: (e, a, t) => {
            t.d(a, { ZP: () => u });
            var o = t(202784),
                r = t(614983),
                d = t.n(r),
                n = t(325686),
                l = t(370006),
                s = t(786998),
                i = t(929028),
                c = t(386802);
            function h(e, a, t) {
                return e || (!a && t ? "fixed" : void 0);
            }
            class u extends o.Component {
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: t, fixed: r, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: p, secondaryBar: D, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: S, withWideContainer: _ } = this.props,
                        { isModal: k } = this.context,
                        I = d ? c : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, t) {
                            return e && !(a && t);
                        })(!!S, k, !!D);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: a, centeredLogo: t, isFullWidth: n, isLarge: i, leftControl: I, middleControl: u, position: h(m, k, r), rightControl: p, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: A, withWideContainer: _ }), D || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        t = i.Z.getBackgroundStyles();
                    return a ? o.createElement(n.Z, { style: !!e && t }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, a, t) => {
            t.d(a, { Z: () => s });
            var o = t(202784),
                r = t(325686),
                d = t(392237);
            class n extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = n;
        },
        290402: (e, a, t) => {
            t.d(a, { Z: () => p });
            var o = t(807896),
                r = t(202784),
                d = t(182056),
                n = t(879113),
                l = t(392237),
                s = t(332920),
                i = t.n(s),
                c = t(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, t) => {
                    const l = d.Z.isOnline();
                    return r.createElement(n.Z, (0, o.Z)({}, a, { icon: l ? void 0 : r.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = r.forwardRef(u);
        },
        980407: (e, a, t) => {
            t.d(a, { Z: () => D, w: () => m });
            var o = t(202784),
                r = t(325686),
                d = t(108362),
                n = t(386802),
                l = t(392237),
                s = t(652904),
                i = t(555079),
                c = t(625661),
                h = t(449067),
                u = t(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: t, backLocation: d, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, rightControl: g, secondaryBar: y, subtitle: f, title: M } = this.props,
                                { isModal: b } = this.context;
                            return o.createElement(r.Z, { style: b ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, o.createElement(c.ZP, { backButtonType: t || (b ? "close" : "back"), backLocation: d, centerTitle: n, fixed: !b, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, ref: e, rightControl: g, secondaryBar: y, style: [b && p.appBarModal, a], subtitle: f, title: M, titleDomId: i.Q_ }));
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
                    return o.createElement(s.Z, null, o.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: D }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, o.createElement(d.Z, { isFullWidth: i, isLarge: c, style: [p.container, y && p.containerModal, n] }, y ? o.createElement(u.Z, { style: p.viewport }, f, t) : t), a ? o.createElement(r.Z, { style: [p.bottomBarModal, !y && !g && p.bottomBarMobile] }, o.createElement(d.Z, { isFullWidth: i, isLarge: c }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                D = m;
        },
        965245: (e, a, t) => {
            t.d(a, { Z: () => s });
            var o = t(807896),
                r = t(202784),
                d = t(229333),
                n = t(414939),
                l = t(334346);
            const s = ({ accessibilityTitle: e, footer: a = r.createElement(n.Z, null), ...t }) => {
                const s = r.createElement(l.C, (0, o.Z)({}, t, { footer: a }));
                return e ? r.createElement(d.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, t) => {
            t.d(a, { C: () => s, Z: () => l });
            var o = t(807896),
                r = t(202784),
                d = t(524084),
                n = t(768572);
            const l = "stable_sort_index",
                s = r.forwardRef((e, a) => {
                    const t = e.cacheKey;
                    return r.createElement(n.ZP, { identifier: t }, r.createElement(d.Z, (0, o.Z)({ ref: a }, e)));
                });
        },
        231035: (e, a, t) => {
            t.d(a, { Z: () => g });
            var o = t(202784),
                r = t(420740),
                d = t(108362),
                n = t(731708),
                l = t(154003),
                s = t(392237),
                i = t(332920),
                c = t.n(i),
                h = t(272175);
            const u = (0, t(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), o.createElement(h.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                p = c().e49537c2,
                D = c().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(r.Z, { testID: m }, o.createElement(u, null), o.createElement(d.Z, { style: y.root }, o.createElement(n.ZP, { align: "center", color: "gray700", style: y.retryText }, p), o.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, t) => {
            t.d(a, { Z: () => c });
            var o = t(202784),
                r = t(500002),
                d = t(668214),
                n = t(997174),
                l = t(118823);
            const s = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class i extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: t, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: d, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && a.pathname === t && ((this._isInBackground = !1), (s = !0));
                    const i = r || l;
                    ((i && r !== l) || (!i && t !== d) || o !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: t, updateTweetDetailNav: o } = e;
                    a.scribePageImpression(), t(a.contextualScribeNamespace, a.contextualScribeData), o(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, r.ZP)(s(i));
        },
        524084: (e, a, t) => {
            t.d(a, { Z: () => n });
            var o = t(202784),
                r = t(523561),
                d = t(195560);
            const n = (0, r.Z)({ loader: () => t.e("loader.AbsolutePower").then(t.bind(t, 590136)), renderPlaceholder: (e, a) => o.createElement(d.Z, { hasError: e, onRetry: a }) });
        },
        511985: (e, a, t) => {
            t.d(a, { AD: () => o, Qy: () => d, _f: () => n, zH: () => r });
            const o = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                r = 500,
                d = (e) => Object.values(o).indexOf(e) >= 0,
                n = (e, a) => ("boolean" == typeof e ? e : a);
        },
        317861: (e, a, t) => {
            t.d(a, { Categories: () => p, WD: () => D, ol: () => g });
            var o = t(118717),
                r = t(174647),
                d = t(499627),
                n = t(917799),
                l = t(312771);
            const s = "gifSearch",
                i = `rweb/${s}`,
                c = {},
                h = { cursor: {}, items: [], initialFetchStatus: l.ZP.NONE, nextFetchStatus: l.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: a, getParams: t, localNamespace: o, mergeNewItems: r }) => {
                    const d = n.dg(`${i}/${o}`, "FETCH"),
                        u = (e, a, t) => {
                            const { fetchStatus: o, ...r } = t,
                                d = e[a] || {},
                                n = (d.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [a]: { ...h, ...d, ...r, [n]: o } };
                        },
                        m =
                            ({ cursor: e, query: o }) =>
                            (r, l, { api: s }) =>
                                n._O(r, { request: a(s), params: t(e, o) })({ actionTypes: d, meta: { query: o } }),
                        p = (a, t = e) => (a[s][o] || {})[t] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, t, { api: o }) => {
                                const r = p(t(), a);
                                return r.initialFetchStatus === l.ZP.LOADING || r.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, t, { api: o }) => {
                                const r = p(t(), a),
                                    { cursor: d = {} } = r;
                                return r.nextFetchStatus !== l.ZP.LOADING && d.next ? e(m({ query: a, cursor: d.next })) : Promise.resolve();
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
                                        { query: o } = a.meta,
                                        d = (e[o] || {}).items || [];
                                    return u(e, o, { cursor: t, fetchStatus: l.ZP.LOADED, items: r(d, a.payload) });
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
                p = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(r.Z).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, a) => [...e, ...(a?.data?.groups || [])], localNamespace: "categories" }),
                D = u({ getApiMethod: (e) => e.withEndpoint(r.Z).category, getParams: (e, a) => ({ category: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "category" }),
                g = u({ getApiMethod: (e) => e.withEndpoint(r.Z).search, getParams: (e, a) => ({ q: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "search" }),
                y = (0, o.UY)({ categories: p.reducer, category: D.reducer, search: g.reducer });
            d.Z.register({ [s]: y });
        },
        564895: (e, a, t) => {
            t.d(a, { ZP: () => f });
            var o = t(202784),
                r = t(325686),
                d = t(731708),
                n = t(451566),
                l = t(392237),
                s = t(332920),
                i = t.n(s),
                c = t(172459),
                h = t(71620),
                u = t(668214),
                m = t(38562);
            const p = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                D = i().j7fc4f9c;
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: a, onToggleChange: t, updateSettings: o } = this.props;
                            o({ shouldAutoPlayGif: e }).catch(a({ showToast: !0 })), t(e);
                        });
                }
                render() {
                    const { category: e, location: a, query: t, shouldAutoPlayGif: l } = this.props,
                        s = t || a?.state?.query,
                        i = e || a?.state?.category?.display_name;
                    return (0, c.Z)() && (s || i) ? o.createElement(r.Z, { style: y.root }, o.createElement(d.ZP, { color: "gray700" }, D), o.createElement(n.Z, { "aria-label": D, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                f = p(g);
        },
        278066: (e, a, t) => {
            t.d(a, { ZP: () => S });
            t(136728);
            var o = t(202784),
                r = t(325686),
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
                b = o.memo((e) => {
                    const { category: a, gifSearchKey: t, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: D },
                        } = a,
                        g = o.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: t, dmConversationId: e } });
                            }
                        }, [s, a, t, u]);
                    return o.createElement(d.Z, { onPress: g, style: [w.category, m && w.leftMargin] }, o.createElement(n.Z, { source: D, style: [w.categoryImage, { backgroundColor: (0, h.d)(c) }] }), o.createElement(r.Z, { style: w.categoryNameContainer }, o.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                w = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = M((e) => {
                    const { categories: a, fetchInitialIfNeeded: t, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = o.useCallback(() => {
                            t();
                        }, [t]),
                        h = o.useCallback(() => {
                            const e = [];
                            if (a) for (let t = 0; t < a.length; t += 2) e.push([a[t], a[t + 1]]);
                            return o.createElement(r.Z, null, o.Children.toArray(e.map(([e, a], t) => o.createElement(r.Z, { style: [w.row, 0 === t && w.firstRow] }, o.createElement(b, { category: e, gifSearchKey: d, history: n, index: 2 * t, onClick: s, withLeftMargin: !1 }), a ? o.createElement(b, { category: a, gifSearchKey: d, history: n, index: 2 * t + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        o.useEffect(() => {
                            i();
                        }, [i]),
                        o.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        800708: (e, a, t) => {
            t.r(a), t.d(a, { GifSearchCategoryScreen: () => c, default: () => h });
            var o = t(807896),
                r = t(202784),
                d = t(332920),
                n = t.n(d),
                l = t(223071),
                s = t(980407);
            const i = n().f5ff0d6f,
                c = (e) => {
                    const { searchBox: a, ...t } = e,
                        { history: d, location: n } = t,
                        c = n.state && n.state.category,
                        h = c && c.display_name;
                    return r.createElement(s.Z, { backButtonType: "back", documentTitle: i({ category: h }), history: d, middleControl: a }, r.createElement(l.Z, (0, o.Z)({ category: c }, t)));
                },
                h = c;
        },
        223071: (e, a, t) => {
            t.d(a, { Z: () => c });
            var o = t(202784),
                r = t(511985),
                d = t(725516),
                n = t(317861),
                l = t(564895),
                s = t(118092);
            class i extends o.Component {
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
                        u = (0, r._f)(h, c);
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, { category: e, location: d, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && o.createElement(s.Z, { gifSearchKey: a, history: t, module: n.WD, onClickGif: i, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        558969: (e, a, t) => {
            t.r(a), t.d(a, { default: () => p });
            var o = t(202784),
                r = t(332920),
                d = t.n(r),
                n = t(278066),
                l = t(980407),
                s = t(725516);
            const i = d().c6f5ac52,
                c = (0, s.Z)(
                    (e) => {
                        const { analytics: a, location: t, searchBox: r, ...d } = e,
                            { history: s } = d,
                            c = t.state?.searchFocused,
                            h = o.useCallback(() => {
                                c || a.scribeAction("cancel"), s.goBack({ backLocation: "/" });
                            }, [a, s, c]);
                        return o.createElement(l.Z, { documentTitle: i, history: s, middleControl: r, onBackClick: h }, o.createElement(n.ZP, d));
                    },
                    { element: "category" },
                );
            var h = t(237837);
            const u = d().ab468379,
                m = (e) => {
                    const { searchBox: a, ...t } = e,
                        { history: r, query: d } = t;
                    return o.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: d }), history: r, middleControl: a }, o.createElement(h.Z, t));
                },
                p = ({ gifSearchKey: e, history: a, location: t, searchBox: r, shouldAutoPlayGif: d }) => {
                    const n = t.state && t.state.query;
                    return n ? o.createElement(m, { gifSearchKey: e, history: a, location: t, query: n, searchBox: r, shouldAutoPlayGif: d }) : o.createElement(c, { gifSearchKey: e, history: a, location: t, searchBox: r });
                };
        },
        237837: (e, a, t) => {
            t.d(a, { Z: () => c });
            var o = t(202784),
                r = t(511985),
                d = t(725516),
                n = t(317861),
                l = t(564895),
                s = t(118092);
            class i extends o.Component {
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
                        u = (0, r._f)(h, c);
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, { location: t, onToggleChange: this._handleToggleChange, query: i, shouldAutoPlayGif: u }), o.createElement(s.Z, { fromSearch: !0, gifSearchKey: e, history: a, module: n.ol, onClickGif: d, query: i, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        118092: (e, a, t) => {
            t.d(a, { Z: () => $ });
            var o = t(202784),
                r = t(928316),
                d = t(325686),
                n = t(457311),
                l = t(392237),
                s = t(332920),
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
                return e.reduce((e, o, r) => (e[e.length - 1].push({ ...o, index: r }), e[e.length - 1].length > 0 && M(e[e.length - 1], t) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
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
                E = (e, { module: a, query: t }) => a.selectNextFetchStatus(e, t),
                x = (e) => {
                    const { tweetComposer: a } = e,
                        t = a?.activeParentKey,
                        o = A.E_(e, t),
                        r = a[t],
                        d = r.composerData[o]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                v = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: Z, nextFetchStatus: E, oldMediaIds: x }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: t, oldMediaIds: o }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, w.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: t, oldMediaIds: o }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((t = e?.location?.state),
                                (e, a) => {
                                    const o = t && t.dmConversationId;
                                    return (0, k.rA)(o, e, a);
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
            class T extends o.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: t, width: r } = this.props;
                    return o.createElement(N.Z, { onPress: t, style: [G.imageContainer, F(e, a, r).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: t, shouldAutoPlayGif: r, stillMediaUrl: d, width: n } = this.props,
                        l = { height: t, width: n, uri: r ? a : d };
                    return o.createElement(R.Z, { "aria-label": e, source: l, testID: B.Z.gifSearchGifImage });
                }
            }
            const F = (e, a, t) => l.default.create((o) => ({ background: { backgroundColor: e, height: a, width: t } })),
                G = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = T,
                q = "gifSearchTimelineRoot",
                O = i().a66b7760,
                z = i().a723aefa,
                K = i().a6ecfa0a,
                U = (e) => e.map((e) => e.id).join("-"),
                W = (0, c.Z)(null),
                Q = [];
            class H extends o.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: t } = this.state,
                                r = e ? this._brickLayout(e, 150, t) : Q;
                            return t > 0 ? o.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: U, items: r, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, t) => (r) => {
                            const n = M(r, a),
                                l = a - 2 * r.length - 1;
                            let s = 0;
                            return o.createElement(
                                d.Z,
                                { style: [V.imageRow, { height: n }] },
                                r.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === r.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), o.createElement(L, { altText: a.alt_text || O, animatedMediaUrl: m, backgroundColor: (0, f.d)(a.index), height: n, key: a.index, onClick: t(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: a } = this.state;
                            return this._getMemoizedRowRenderer(e, a, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: a, addMediaToDM: t, fromSearch: o, gifSearchKey: r, history: d, onClickGif: n, scribeAction: l, setMediaMetadata: s, updateSingleComposerV2: i } = this.props,
                                {
                                    alt_text: c,
                                    found_media_origin: h,
                                    provider: m,
                                    original_image: { url: p },
                                    preview_image: { height: D, url: f, width: M },
                                    thumbnail_images: [b],
                                    url: w,
                                } = e,
                                S = a({ mediaCategory: r === g.AD.Composition || r === g.AD.NoteComposition ? y.xz.TweetGif : y.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: f, sourceUrl: p, stillMediaUrl: b.still_image_url, width: M, height: D }),
                                _ = S.map((e) => e.id),
                                k = { found_media_origin: h, provider: m, url: w };
                            if ((c && s(_[0], { defaultAltText: c, gifMetadata: k }), r === g.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(_))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : _, gifMetadata: k } });
                            } else r === g.AD.DMComposition ? t(_, k) : r === g.AD.NoteComposition && n?.(S);
                            l({ page: r, section: "gif_search", element: "category", action: o ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => o.createElement(n.Z, { header: z, message: K })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => o.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: W }))),
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
                            this._rootNode = r.findDOMNode(e);
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
                    return o.createElement("div", { "data-testid": q, ref: this._setRootNode }, o.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (H.contextType = D.rC), (H.defaultProps = { fromSearch: !1 });
            const V = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                $ = v(H);
        },
        16569: (e, a, t) => {
            t.r(a), t.d(a, { GifSearchPaths: () => v, GifSearchScreen: () => N, default: () => B });
            t(136728);
            var o = t(202784),
                r = t(325686),
                d = t(107267),
                n = t(371344),
                l = t(154003),
                s = t(392237),
                i = t(332920),
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
                E = (0, M.p)(
                    () =>
                        Promise.all([
                            t.e("icons.10"),
                            t.e("icons.21"),
                            t.e("icons.16"),
                            t.e("icons.1"),
                            t.e("icons.19"),
                            t.e("icons.0"),
                            t.e("icons.23"),
                            t.e("icons.8"),
                            t.e("icons.2"),
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
                x = (0, M.p)(
                    () =>
                        Promise.all([
                            t.e("icons.10"),
                            t.e("icons.21"),
                            t.e("icons.16"),
                            t.e("icons.1"),
                            t.e("icons.19"),
                            t.e("icons.0"),
                            t.e("icons.23"),
                            t.e("icons.8"),
                            t.e("icons.2"),
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
                v = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class N extends o.Component {
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
                                o = t.pathname.startsWith(v.category),
                                r = t.pathname === v.search && t.state && t.state.query;
                            !a && (o || r) ? e.goBack() : a && this.setState({ searchDisabled: !0 });
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
                            const { history: a, isDataSaverEnabled: t, location: o } = this.props,
                                r = { pathname: v.search },
                                d = o.state && o.state.query,
                                n = o.pathname === v.search && !d,
                                l = o.pathname.startsWith(v.category) || (o.pathname === v.search && d),
                                s = !t && l,
                                i = o.state && o.state.dmConversationId;
                            e ? ((r.state = { dmConversationId: i, query: e }), n ? a.push(r) : a.replace(r)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), D.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        t = this._getShouldAutoPlayGif(),
                        r = this._gifSearchKey;
                    if (!r) return o.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: r, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: t };
                    return o.createElement(g.nO, { namespace: this._getScribeNamespace(r) }, o.createElement(d.Switch, null, o.createElement(d.Route, { exact: !0, path: v.search }, o.createElement(E, n)), o.createElement(d.Route, { exact: !0, path: `${v.category}/${f.kM}` }, o.createElement(x, n)), o.createElement(d.Route, { component: b.default })));
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
                    return o.createElement(r.Z, { style: R.searchContainer }, o.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : o.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, Z));
                }
            }
            N.contextType = p.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                B = I(N);
        },
        74938: (e, a, t) => {
            t.d(a, { Z: () => o });
            const o = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, t) => {
            t.d(a, { d: () => p, r: () => D });
            var o = t(392237),
                r = t(461756),
                d = t(961817),
                n = t(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = o.default.theme.colors,
                m = [l, s, c, h, i, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                D = (e, a, t) => {
                    const o = t ?? (0, d.i)();
                    return (e || ((0, n.Z)(o) && !a)) && !r.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, t) => {
            t.r(a), t.d(a, { NotFoundScreen: () => M, default: () => w });
            t(571372);
            var o = t(202784),
                r = t(386802),
                d = t(108362),
                n = t(392237),
                l = t(332920),
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
                    { isModal: t } = o.useContext(r.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    o.createElement(m.Z, null, o.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: f }), o.createElement(d.Z, { style: t && b.modal }, o.createElement(u.Z, null)), o.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, g.Z)(M, { page: "not_found" });
        },
        879113: (e, a, t) => {
            t.d(a, { Z: () => m });
            var o = t(202784),
                r = t(476984),
                d = t.n(r),
                n = t(143778),
                l = t(750410),
                s = t(682830);
            const i = "failed",
                c = "loaded",
                h = "loading",
                u = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === c,
                        t = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !t) || !d()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: t, fetchStatus: r, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: p, retryMessage: D, retryable: g } = this.props;
                    switch (r) {
                        case i:
                            return g ? o.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: D }) : t ? o.createElement(s.m, { failureMessage: t }) : p();
                        case h:
                            return o.createElement(s.J, { "aria-label": e, color: a, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        730895: (e, a, t) => {
            var o = t(821176);
            e.exports = function () {
                var e = o(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.69df499a.js.map
