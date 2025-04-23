"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        174647: (e, a, r) => {
            r.d(a, { Z: () => t });
            const t = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, r) => e.get("foundmedia/categories", a, r),
                category(a, r) {
                    const { category: t, ...o } = a;
                    return e.get(`foundmedia/categories/${t}`, o, r);
                },
                search: (a, r) => e.get("foundmedia/search", a, r),
            });
        },
        229333: (e, a, r) => {
            r.d(a, { Z: () => h });
            var t = r(202784),
                o = r(466999),
                d = r(325686),
                n = r(392237),
                l = r(674132);
            const s = r.n(l)().e5b0063d;
            let i = 0;
            class c extends t.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        r = s({ title: a });
                    return t.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, t.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, a), t.createElement(d.Z, { "aria-label": r }, e));
                }
            }
            const h = c;
        },
        625661: (e, a, r) => {
            r.d(a, { ZP: () => u });
            var t = r(202784),
                o = r(614983),
                d = r.n(o),
                n = r(325686),
                l = r(370006),
                s = r(786998),
                i = r(929028),
                c = r(386802);
            function h(e, a, r) {
                return e || (!a && r ? "fixed" : void 0);
            }
            class u extends t.Component {
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: r, fixed: o, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: p, secondaryBar: D, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: S, withWideContainer: k } = this.props,
                        { isModal: _ } = this.context,
                        I = d ? c : t.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, r) {
                            return e && !(a && r);
                        })(!!S, _, !!D);
                    return t.createElement(t.Fragment, null, t.createElement(s.Z, { centerTitle: a, centeredLogo: r, isFullWidth: n, isLarge: i, leftControl: I, middleControl: u, position: h(m, _, o), rightControl: p, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: A, withWideContainer: k }), D || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        r = i.Z.getBackgroundStyles();
                    return a ? t.createElement(n.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t = r(202784),
                o = r(325686),
                d = r(392237);
            class n extends t.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return t.createElement(o.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = n;
        },
        290402: (e, a, r) => {
            r.d(a, { Z: () => p });
            var t = r(807896),
                o = r(202784),
                d = r(182056),
                n = r(879113),
                l = r(392237),
                s = r(674132),
                i = r.n(s),
                c = r(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, r) => {
                    const l = d.Z.isOnline();
                    return o.createElement(n.Z, (0, t.Z)({}, a, { icon: l ? void 0 : o.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = o.forwardRef(u);
        },
        980407: (e, a, r) => {
            r.d(a, { Z: () => D, w: () => m });
            var t = r(202784),
                o = r(325686),
                d = r(108362),
                n = r(386802),
                l = r(392237),
                s = r(652904),
                i = r(555079),
                c = r(625661),
                h = r(449067),
                u = r(715601);
            class m extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: r, backLocation: d, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, rightControl: g, secondaryBar: y, subtitle: f, title: M } = this.props,
                                { isModal: b } = this.context;
                            return t.createElement(o.Z, { style: b ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, t.createElement(c.ZP, { backButtonType: r || (b ? "close" : "back"), backLocation: d, centerTitle: n, fixed: !b, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, ref: e, rightControl: g, secondaryBar: y, style: [b && p.appBarModal, a], subtitle: f, title: M, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: a } = this.props,
                                { isModal: r } = this.context;
                            a && (r ? window.requestAnimationFrame(() => a(e)) : a(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: a, children: r, containerStyle: n, documentTitle: l, isFullWidth: i, isLarge: c, renderHeader: m, title: D, withoutBottomBarMobile: g } = this.props,
                        { isModal: y } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return t.createElement(s.Z, null, t.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: D }), t.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, t.createElement(d.Z, { isFullWidth: i, isLarge: c, style: [p.container, y && p.containerModal, n] }, y ? t.createElement(u.Z, { style: p.viewport }, f, r) : r), a ? t.createElement(o.Z, { style: [p.bottomBarModal, !y && !g && p.bottomBarMobile] }, t.createElement(d.Z, { isFullWidth: i, isLarge: c }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                D = m;
        },
        965245: (e, a, r) => {
            r.d(a, { Z: () => s });
            var t = r(807896),
                o = r(202784),
                d = r(229333),
                n = r(414939),
                l = r(334346);
            const s = ({ accessibilityTitle: e, footer: a = o.createElement(n.Z, null), ...r }) => {
                const s = o.createElement(l.C, (0, t.Z)({}, r, { footer: a }));
                return e ? o.createElement(d.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, r) => {
            r.d(a, { C: () => s, Z: () => l });
            var t = r(807896),
                o = r(202784),
                d = r(524084),
                n = r(768572);
            const l = "stable_sort_index",
                s = o.forwardRef((e, a) => {
                    const r = e.cacheKey;
                    return o.createElement(n.ZP, { identifier: r }, o.createElement(d.Z, (0, t.Z)({ ref: a }, e)));
                });
        },
        231035: (e, a, r) => {
            r.d(a, { Z: () => g });
            var t = r(202784),
                o = r(420740),
                d = r(108362),
                n = r(731708),
                l = r(154003),
                s = r(392237),
                i = r(674132),
                c = r.n(i),
                h = r(272175);
            const u = (0, r(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), t.createElement(h.ql, null, t.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                p = c().e49537c2,
                D = c().a9ae1e78;
            class g extends t.PureComponent {
                render() {
                    return t.createElement(o.Z, { testID: m }, t.createElement(u, null), t.createElement(d.Z, { style: y.root }, t.createElement(n.ZP, { align: "center", color: "gray700", style: y.retryText }, p), t.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(500002),
                d = r(668214),
                n = r(997174),
                l = r(118823);
            const s = (0, d.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class i extends t.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: a },
                            location: { pathname: r, search: t },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: d, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && a.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const i = o || l;
                    ((i && o !== l) || (!i && r !== d) || t !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: r, updateTweetDetailNav: t } = e;
                    a.scribePageImpression(), r(a.contextualScribeNamespace, a.contextualScribeData), t(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(s(i));
        },
        524084: (e, a, r) => {
            r.d(a, { Z: () => n });
            var t = r(202784),
                o = r(523561),
                d = r(195560);
            const n = (0, o.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, a) => t.createElement(d.Z, { hasError: e, onRetry: a }) });
        },
        511985: (e, a, r) => {
            r.d(a, { AD: () => t, Qy: () => d, _f: () => n, zH: () => o });
            const t = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                o = 500,
                d = (e) => Object.values(t).indexOf(e) >= 0,
                n = (e, a) => ("boolean" == typeof e ? e : a);
        },
        317861: (e, a, r) => {
            r.d(a, { Categories: () => p, WD: () => D, ol: () => g });
            var t = r(118717),
                o = r(174647),
                d = r(499627),
                n = r(917799),
                l = r(312771);
            const s = "gifSearch",
                i = `rweb/${s}`,
                c = {},
                h = { cursor: {}, items: [], initialFetchStatus: l.ZP.NONE, nextFetchStatus: l.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: a, getParams: r, localNamespace: t, mergeNewItems: o }) => {
                    const d = n.dg(`${i}/${t}`, "FETCH"),
                        u = (e, a, r) => {
                            const { fetchStatus: t, ...o } = r,
                                d = e[a] || {},
                                n = (d.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [a]: { ...h, ...d, ...o, [n]: t } };
                        },
                        m =
                            ({ cursor: e, query: t }) =>
                            (o, l, { api: s }) =>
                                n._O(o, { request: a(s), params: r(e, t) })({ actionTypes: d, meta: { query: t } }),
                        p = (a, r = e) => (a[s][t] || {})[r] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: t }) => {
                                const o = p(r(), a);
                                return o.initialFetchStatus === l.ZP.LOADING || o.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: t }) => {
                                const o = p(r(), a),
                                    { cursor: d = {} } = o;
                                return o.nextFetchStatus !== l.ZP.LOADING && d.next ? e(m({ query: a, cursor: d.next })) : Promise.resolve();
                            },
                        reducer: (e = c, a) => {
                            if (!a) return e;
                            switch (a.type) {
                                case d.REQUEST: {
                                    const { query: r } = a.meta;
                                    return u(e, r, { fetchStatus: l.ZP.LOADING });
                                }
                                case d.FAILURE: {
                                    const { query: r } = a.meta;
                                    return u(e, r, { fetchStatus: l.ZP.FAILED });
                                }
                                case d.SUCCESS: {
                                    const { cursor: r } = a.payload,
                                        { query: t } = a.meta,
                                        d = (e[t] || {}).items || [];
                                    return u(e, t, { cursor: r, fetchStatus: l.ZP.LOADED, items: o(d, a.payload) });
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
                y = (0, t.UY)({ categories: p.reducer, category: D.reducer, search: g.reducer });
            d.Z.register({ [s]: y });
        },
        564895: (e, a, r) => {
            r.d(a, { ZP: () => f });
            var t = r(202784),
                o = r(325686),
                d = r(731708),
                n = r(451566),
                l = r(392237),
                s = r(674132),
                i = r.n(s),
                c = r(172459),
                h = r(71620),
                u = r(668214),
                m = r(38562);
            const p = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                D = i().j7fc4f9c;
            class g extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: a, onToggleChange: r, updateSettings: t } = this.props;
                            t({ shouldAutoPlayGif: e }).catch(a({ showToast: !0 })), r(e);
                        });
                }
                render() {
                    const { category: e, location: a, query: r, shouldAutoPlayGif: l } = this.props,
                        s = r || a?.state?.query,
                        i = e || a?.state?.category?.display_name;
                    return (0, c.Z)() && (s || i) ? t.createElement(o.Z, { style: y.root }, t.createElement(d.ZP, { color: "gray700" }, D), t.createElement(n.Z, { "aria-label": D, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                f = p(g);
        },
        278066: (e, a, r) => {
            r.d(a, { ZP: () => S });
            r(136728);
            var t = r(202784),
                o = r(325686),
                d = r(530732),
                n = r(992942),
                l = r(731708),
                s = r(392237),
                i = r(16569),
                c = r(290402),
                h = r(663194),
                u = r(24949),
                m = r(450681),
                p = r(668214),
                D = r(317861);
            const { Categories: g } = D,
                y = (e, a) => g.selectItems(e),
                f = (e) => g.selectInitialFetchStatus(e),
                M = (0, p.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(y, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: f }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: g.fetchInitialIfNeeded, fetchNextIfNeeded: g.fetchNextIfNeeded })),
                b = t.memo((e) => {
                    const { category: a, gifSearchKey: r, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: D },
                        } = a,
                        g = t.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: r, dmConversationId: e } });
                            }
                        }, [s, a, r, u]);
                    return t.createElement(d.Z, { onPress: g, style: [w.category, m && w.leftMargin] }, t.createElement(n.Z, { source: D, style: [w.categoryImage, { backgroundColor: (0, h.d)(c) }] }), t.createElement(o.Z, { style: w.categoryNameContainer }, t.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                w = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = M((e) => {
                    const { categories: a, fetchInitialIfNeeded: r, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = t.useCallback(() => {
                            r();
                        }, [r]),
                        h = t.useCallback(() => {
                            const e = [];
                            if (a) for (let r = 0; r < a.length; r += 2) e.push([a[r], a[r + 1]]);
                            return t.createElement(o.Z, null, t.Children.toArray(e.map(([e, a], r) => t.createElement(o.Z, { style: [w.row, 0 === r && w.firstRow] }, t.createElement(b, { category: e, gifSearchKey: d, history: n, index: 2 * r, onClick: s, withLeftMargin: !1 }), a ? t.createElement(b, { category: a, gifSearchKey: d, history: n, index: 2 * r + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        t.useEffect(() => {
                            i();
                        }, [i]),
                        t.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        800708: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchCategoryScreen: () => c, default: () => h });
            var t = r(807896),
                o = r(202784),
                d = r(674132),
                n = r.n(d),
                l = r(223071),
                s = r(980407);
            const i = n().f5ff0d6f,
                c = (e) => {
                    const { searchBox: a, ...r } = e,
                        { history: d, location: n } = r,
                        c = n.state && n.state.category,
                        h = c && c.display_name;
                    return o.createElement(s.Z, { backButtonType: "back", documentTitle: i({ category: h }), history: d, middleControl: a }, o.createElement(l.Z, (0, t.Z)({ category: c }, r)));
                },
                h = c;
        },
        223071: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(511985),
                d = r(725516),
                n = r(317861),
                l = r(564895),
                s = r(118092);
            class i extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { category: e, gifSearchKey: a, history: r, location: d, onClickGif: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return t.createElement(t.Fragment, null, t.createElement(l.ZP, { category: e, location: d, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && t.createElement(s.Z, { gifSearchKey: a, history: r, module: n.WD, onClickGif: i, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        558969: (e, a, r) => {
            r.r(a), r.d(a, { default: () => p });
            var t = r(202784),
                o = r(674132),
                d = r.n(o),
                n = r(278066),
                l = r(980407),
                s = r(725516);
            const i = d().c6f5ac52,
                c = (0, s.Z)(
                    (e) => {
                        const { analytics: a, location: r, searchBox: o, ...d } = e,
                            { history: s } = d,
                            c = r.state?.searchFocused,
                            h = t.useCallback(() => {
                                c || a.scribeAction("cancel"), s.goBack({ backLocation: "/" });
                            }, [a, s, c]);
                        return t.createElement(l.Z, { documentTitle: i, history: s, middleControl: o, onBackClick: h }, t.createElement(n.ZP, d));
                    },
                    { element: "category" },
                );
            var h = r(237837);
            const u = d().ab468379,
                m = (e) => {
                    const { searchBox: a, ...r } = e,
                        { history: o, query: d } = r;
                    return t.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: d }), history: o, middleControl: a }, t.createElement(h.Z, r));
                },
                p = ({ gifSearchKey: e, history: a, location: r, searchBox: o, shouldAutoPlayGif: d }) => {
                    const n = r.state && r.state.query;
                    return n ? t.createElement(m, { gifSearchKey: e, history: a, location: r, query: n, searchBox: o, shouldAutoPlayGif: d }) : t.createElement(c, { gifSearchKey: e, history: a, location: r, searchBox: o });
                };
        },
        237837: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(511985),
                d = r(725516),
                n = r(317861),
                l = r(564895),
                s = r(118092);
            class i extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { gifSearchKey: e, history: a, location: r, onClickGif: d, query: i, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return t.createElement(t.Fragment, null, t.createElement(l.ZP, { location: r, onToggleChange: this._handleToggleChange, query: i, shouldAutoPlayGif: u }), t.createElement(s.Z, { fromSearch: !0, gifSearchKey: e, history: a, module: n.ol, onClickGif: d, query: i, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        118092: (e, a, r) => {
            r.d(a, { Z: () => $ });
            var t = r(202784),
                o = r(928316),
                d = r(325686),
                n = r(457311),
                l = r(392237),
                s = r(674132),
                i = r.n(s),
                c = r(459643),
                h = r(912021),
                u = r(370751),
                m = r(290402),
                p = r(965245),
                D = r(443781),
                g = r(511985),
                y = r(716233),
                f = r(663194);
            r(136728);
            const M = (e, a) => {
                const r = e.reduce((e, a) => {
                    const { original_image: r } = a;
                    return e + r.width / r.height;
                }, 0);
                return Math.ceil(a / r);
            };
            function b(e, a, r) {
                return e.reduce((e, t, o) => (e[e.length - 1].push({ ...t, index: o }), e[e.length - 1].length > 0 && M(e[e.length - 1], r) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var w = r(459679),
                S = r(668214),
                k = r(704279),
                _ = r(798538),
                I = r(497294),
                A = r(632960);
            const C = [],
                P = (e, { module: a, query: r }) => a.selectInitialFetchStatus(e, r),
                Z = (e, { module: a, query: r }) => a.selectItems(e, r),
                v = (e, { module: a, query: r }) => a.selectNextFetchStatus(e, r),
                E = (e) => {
                    const { tweetComposer: a } = e,
                        r = a?.activeParentKey,
                        t = A.E_(e, r),
                        o = a[r],
                        d = o.composerData[t]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                x = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: Z, nextFetchStatus: v, oldMediaIds: E }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: r, oldMediaIds: t }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, w.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: r, oldMediaIds: t }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((r = e?.location?.state),
                                (e, a) => {
                                    const t = r && r.dmConversationId;
                                    return (0, _.rA)(t, e, a);
                                }),
                            setMediaMetadata: I._B,
                            fetchInitialIfNeeded: a.fetchInitialIfNeeded,
                            fetchNextIfNeeded: a.fetchNextIfNeeded,
                            scribeAction: k.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var r;
                    });
            var N = r(530732),
                R = r(992942),
                B = r(74938);
            class T extends t.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: r, width: o } = this.props;
                    return t.createElement(N.Z, { onPress: r, style: [G.imageContainer, F(e, a, o).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: r, shouldAutoPlayGif: o, stillMediaUrl: d, width: n } = this.props,
                        l = { height: r, width: n, uri: o ? a : d };
                    return t.createElement(R.Z, { "aria-label": e, source: l, testID: B.Z.gifSearchGifImage });
                }
            }
            const F = (e, a, r) => l.default.create((t) => ({ background: { backgroundColor: e, height: a, width: r } })),
                G = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = T,
                q = "gifSearchTimelineRoot",
                z = i().a66b7760,
                O = i().a723aefa,
                K = i().a6ecfa0a,
                U = (e) => e.map((e) => e.id).join("-"),
                H = (0, c.Z)(null),
                V = [];
            class W extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: r } = this.state,
                                o = e ? this._brickLayout(e, 150, r) : V;
                            return r > 0 ? t.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: U, items: o, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, r) => (o) => {
                            const n = M(o, a),
                                l = a - 2 * o.length - 1;
                            let s = 0;
                            return t.createElement(
                                d.Z,
                                { style: [Q.imageRow, { height: n }] },
                                o.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === o.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), t.createElement(L, { altText: a.alt_text || z, animatedMediaUrl: m, backgroundColor: (0, f.d)(a.index), height: n, key: a.index, onClick: r(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: a } = this.state;
                            return this._getMemoizedRowRenderer(e, a, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: a, addMediaToDM: r, fromSearch: t, gifSearchKey: o, history: d, onClickGif: n, scribeAction: l, setMediaMetadata: s, updateSingleComposerV2: i } = this.props,
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
                                k = S.map((e) => e.id),
                                _ = { found_media_origin: h, provider: m, url: w };
                            if ((c && s(k[0], { defaultAltText: c, gifMetadata: _ }), o === g.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(k))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : k, gifMetadata: _ } });
                            } else o === g.AD.DMComposition ? r(k, _) : o === g.AD.NoteComposition && n?.(S);
                            l({ page: o, section: "gif_search", element: "category", action: t ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => t.createElement(n.Z, { header: O, message: K })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => t.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: H }))),
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
                    return t.createElement("div", { "data-testid": q, ref: this._setRootNode }, t.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (W.contextType = D.rC), (W.defaultProps = { fromSearch: !1 });
            const Q = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                $ = x(W);
        },
        16569: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchPaths: () => x, GifSearchScreen: () => N, default: () => B });
            r(136728);
            var t = r(202784),
                o = r(325686),
                d = r(107267),
                n = r(371344),
                l = r(154003),
                s = r(392237),
                i = r(674132),
                c = r.n(i),
                h = r(956272),
                u = r(912021),
                m = r(666536),
                p = r(443781),
                D = r(511985),
                g = r(293115),
                y = r(615027),
                f = r(189244),
                M = r(717988),
                b = r(466441),
                w = r(668214),
                S = r(38562),
                k = r(659773);
            const _ = (e, a) => (0, S.l4)(e).shouldAutoPlayGif,
                I = (0, w.Z)().propsFromState(() => ({ shouldAutoPlayGif: _, isDataSaverEnabled: S.IX, effectiveAutoplayOption: k.AP }));
            var A = r(74938),
                C = r(663194);
            const P = c().a50ba822,
                Z = c().a9ae1e78,
                v = (0, M.p)(
                    () =>
                        Promise.all([
                            r.e("icons.5"),
                            r.e("icons.12"),
                            r.e("icons.20"),
                            r.e("icons.0"),
                            r.e("icons.21"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
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
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("bundle.GifSearch"),
                        ]).then(r.bind(r, 558969)),
                    { shouldMigrateToX: !1 },
                ),
                E = (0, M.p)(
                    () =>
                        Promise.all([
                            r.e("icons.5"),
                            r.e("icons.12"),
                            r.e("icons.20"),
                            r.e("icons.0"),
                            r.e("icons.21"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
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
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                            r.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                            r.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                            r.e("bundle.GifSearch"),
                        ]).then(r.bind(r, 800708)),
                    { shouldMigrateToX: !1 },
                ),
                x = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class N extends t.Component {
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
                            const { history: e, isDataSaverEnabled: a, location: r } = this.props,
                                t = r.pathname.startsWith(x.category),
                                o = r.pathname === x.search && r.state && r.state.query;
                            !a && (t || o) ? e.goBack() : a && this.setState({ searchDisabled: !0 });
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
                            const { history: a, isDataSaverEnabled: r, location: t } = this.props,
                                o = { pathname: x.search },
                                d = t.state && t.state.query,
                                n = t.pathname === x.search && !d,
                                l = t.pathname.startsWith(x.category) || (t.pathname === x.search && d),
                                s = !r && l,
                                i = t.state && t.state.dmConversationId;
                            e ? ((o.state = { dmConversationId: i, query: e }), n ? a.push(o) : a.replace(o)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), D.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        r = this._getShouldAutoPlayGif(),
                        o = this._gifSearchKey;
                    if (!o) return t.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: o, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: r };
                    return t.createElement(g.nO, { namespace: this._getScribeNamespace(o) }, t.createElement(d.Switch, null, t.createElement(d.Route, { exact: !0, path: x.search }, t.createElement(v, n)), t.createElement(d.Route, { exact: !0, path: `${x.category}/${f.kM}` }, t.createElement(E, n)), t.createElement(d.Route, { component: b.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: a, shouldAutoPlayGif: r } = this.props;
                    return (0, C.r)(r, a, e);
                }
                _getGifSearchKey() {
                    const {
                            location: { state: e },
                        } = this.props,
                        { gifSearchKey: a, gifSearchKeySource: r } = e || {};
                    return a || (r && (0, D.Qy)(r) && r);
                }
                _getQueryOrCategory() {
                    const { location: e } = this.props,
                        a = e.state && e.state.query,
                        r = e.state && e.state.category ? e.state.category.display_name : "";
                    return a || r;
                }
                _renderSearchBox() {
                    const { searchDisabled: e } = this.state,
                        a = this._getQueryOrCategory();
                    return t.createElement(o.Z, { style: R.searchContainer }, t.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : t.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, Z));
                }
            }
            N.contextType = p.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                B = I(N);
        },
        74938: (e, a, r) => {
            r.d(a, { Z: () => t });
            const t = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, r) => {
            r.d(a, { d: () => p, r: () => D });
            var t = r(392237),
                o = r(461756),
                d = r(961817),
                n = r(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = t.default.theme.colors,
                m = [l, s, c, h, i, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                D = (e, a, r) => {
                    const t = r ?? (0, d.i)();
                    return (e || ((0, n.Z)(t) && !a)) && !o.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => M, default: () => w });
            r(571372);
            var t = r(202784),
                o = r(386802),
                d = r(108362),
                n = r(392237),
                l = r(674132),
                s = r.n(l),
                i = r(187669),
                c = r(449067),
                h = r(38293),
                u = r(231035),
                m = r(652904),
                p = r(952793),
                D = r(163889),
                g = r(725516);
            const y = s().ba929da8,
                f = s().d203e242;
            function M(e) {
                const { splat: a } = e.match.params,
                    { isModal: r } = t.useContext(o.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    t.createElement(m.Z, null, t.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: f }), t.createElement(d.Z, { style: r && b.modal }, t.createElement(u.Z, null)), t.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, g.Z)(M, { page: "not_found" });
        },
        879113: (e, a, r) => {
            r.d(a, { Z: () => m });
            var t = r(202784),
                o = r(476984),
                d = r.n(o),
                n = r(143778),
                l = r(750410),
                s = r(682830);
            const i = "failed",
                c = "loaded",
                h = "loading",
                u = "none";
            class m extends t.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === c,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !r) || !d()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: r, fetchStatus: o, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: p, retryMessage: D, retryable: g } = this.props;
                    switch (o) {
                        case i:
                            return g ? t.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: D }) : r ? t.createElement(s.m, { failureMessage: r }) : p();
                        case h:
                            return t.createElement(s.J, { "aria-label": e, color: a, loadingMessage: n });
                        case u:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: n.Z, retryable: !0 };
        },
        748138: (e, a, r) => {
            r.r(a), r.d(a, { default: () => s });
            var t = r(202784),
                o = r(890601),
                d = r(783427),
                n = r(347101);
            const l = (e = {}) => {
                const { direction: a } = (0, d.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: a });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        730895: (e, a, r) => {
            var t = r(821176);
            e.exports = function () {
                var e = t(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.62a19f2a.js.map
