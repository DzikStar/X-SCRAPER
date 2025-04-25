"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch"],
    {
        174647: (e, a, r) => {
            r.d(a, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, r) => e.get("foundmedia/categories", a, r),
                category(a, r) {
                    const { category: o, ...t } = a;
                    return e.get(`foundmedia/categories/${o}`, t, r);
                },
                search: (a, r) => e.get("foundmedia/search", a, r),
            });
        },
        229333: (e, a, r) => {
            r.d(a, { Z: () => h });
            var o = r(202784),
                t = r(466999),
                d = r(325686),
                n = r(392237),
                l = r(674132);
            const s = r.n(l)().e5b0063d;
            let i = 0;
            class c extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${i}`), (i += 1);
                }
                render() {
                    const { children: e, title: a } = this.props,
                        r = s({ title: a });
                    return o.createElement(d.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(t.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: n.default.visuallyHidden }, a), o.createElement(d.Z, { "aria-label": r }, e));
                }
            }
            const h = c;
        },
        625661: (e, a, r) => {
            r.d(a, { ZP: () => u });
            var o = r(202784),
                t = r(614983),
                d = r.n(t),
                n = r(325686),
                l = r(370006),
                s = r(786998),
                i = r(929028),
                c = r(386802);
            function h(e, a, r) {
                return e || (!a && r ? "fixed" : void 0);
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: r, fixed: t, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: p, secondaryBar: D, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: S, withWideContainer: k } = this.props,
                        { isModal: _ } = this.context,
                        I = d ? c : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, r) {
                            return e && !(a && r);
                        })(!!S, _, !!D);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: a, centeredLogo: r, isFullWidth: n, isLarge: i, leftControl: I, middleControl: u, position: h(m, _, t), rightControl: p, style: g, subtitle: y, title: f, titleDomId: M, titleIconCell: b, titleIconCellSize: w, withBackground: A, withWideContainer: k }), D || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: a } = this.context,
                        r = i.Z.getBackgroundStyles();
                    return a ? o.createElement(n.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, a, r) => {
            r.d(a, { Z: () => s });
            var o = r(202784),
                t = r(325686),
                d = r(392237);
            class n extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(t.Z, { style: l.root });
                }
            }
            const l = d.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = n;
        },
        290402: (e, a, r) => {
            r.d(a, { Z: () => p });
            var o = r(807896),
                t = r(202784),
                d = r(182056),
                n = r(879113),
                l = r(392237),
                s = r(674132),
                i = r.n(s),
                c = r(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, r) => {
                    const l = d.Z.isOnline();
                    return t.createElement(n.Z, (0, o.Z)({}, a, { icon: l ? void 0 : t.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = t.forwardRef(u);
        },
        980407: (e, a, r) => {
            r.d(a, { Z: () => D, w: () => m });
            var o = r(202784),
                t = r(325686),
                d = r(108362),
                n = r(386802),
                l = r(392237),
                s = r(652904),
                i = r(555079),
                c = r(625661),
                h = r(449067),
                u = r(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: a, backButtonType: r, backLocation: d, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, rightControl: g, secondaryBar: y, subtitle: f, title: M } = this.props,
                                { isModal: b } = this.context;
                            return o.createElement(t.Z, { style: b ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, o.createElement(c.ZP, { backButtonType: r || (b ? "close" : "back"), backLocation: d, centerTitle: n, fixed: !b, hideBackButton: l, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: D, ref: e, rightControl: g, secondaryBar: y, style: [b && p.appBarModal, a], subtitle: f, title: M, titleDomId: i.Q_ }));
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
                    return o.createElement(s.Z, null, o.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: D }), o.createElement(t.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, o.createElement(d.Z, { isFullWidth: i, isLarge: c, style: [p.container, y && p.containerModal, n] }, y ? o.createElement(u.Z, { style: p.viewport }, f, r) : r), a ? o.createElement(t.Z, { style: [p.bottomBarModal, !y && !g && p.bottomBarMobile] }, o.createElement(d.Z, { isFullWidth: i, isLarge: c }, a)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = n.Z);
            const p = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                D = m;
        },
        965245: (e, a, r) => {
            r.d(a, { Z: () => s });
            var o = r(807896),
                t = r(202784),
                d = r(229333),
                n = r(414939),
                l = r(334346);
            const s = ({ accessibilityTitle: e, footer: a = t.createElement(n.Z, null), ...r }) => {
                const s = t.createElement(l.C, (0, o.Z)({}, r, { footer: a }));
                return e ? t.createElement(d.Z, { title: e }, s) : s;
            };
        },
        334346: (e, a, r) => {
            r.d(a, { C: () => s, Z: () => l });
            var o = r(807896),
                t = r(202784),
                d = r(524084),
                n = r(768572);
            const l = "stable_sort_index",
                s = t.forwardRef((e, a) => {
                    const r = e.cacheKey;
                    return t.createElement(n.ZP, { identifier: r }, t.createElement(d.Z, (0, o.Z)({ ref: a }, e)));
                });
        },
        231035: (e, a, r) => {
            r.d(a, { Z: () => g });
            var o = r(202784),
                t = r(420740),
                d = r(108362),
                n = r(731708),
                l = r(154003),
                s = r(392237),
                i = r(674132),
                c = r.n(i),
                h = r(272175);
            const u = (0, r(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), o.createElement(h.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                m = "error-detail",
                p = c().e49537c2,
                D = c().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(t.Z, { testID: m }, o.createElement(u, null), o.createElement(d.Z, { style: y.root }, o.createElement(n.ZP, { align: "center", color: "gray700", style: y.retryText }, p), o.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const y = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, a, r) => {
            r.d(a, { Z: () => c });
            var o = r(202784),
                t = r(500002),
                d = r(668214),
                n = r(997174),
                l = r(118823);
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
                            location: { pathname: r, search: o },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: d, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    a.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && a.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const i = t || l;
                    ((i && t !== l) || (!i && r !== d) || o !== n || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: a, updateLocation: r, updateTweetDetailNav: o } = e;
                    a.scribePageImpression(), r(a.contextualScribeNamespace, a.contextualScribeData), o(a.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, t.ZP)(s(i));
        },
        524084: (e, a, r) => {
            r.d(a, { Z: () => n });
            var o = r(202784),
                t = r(523561),
                d = r(195560);
            const n = (0, t.Z)({ loader: () => r.e("loader.AbsolutePower").then(r.bind(r, 590136)), renderPlaceholder: (e, a) => o.createElement(d.Z, { hasError: e, onRetry: a }) });
        },
        511985: (e, a, r) => {
            r.d(a, { AD: () => o, Qy: () => d, _f: () => n, zH: () => t });
            const o = Object.freeze({ Composition: "composition", DMComposition: "dm_composition", NoteComposition: "note_composition" }),
                t = 500,
                d = (e) => Object.values(o).indexOf(e) >= 0,
                n = (e, a) => ("boolean" == typeof e ? e : a);
        },
        317861: (e, a, r) => {
            r.d(a, { Categories: () => p, WD: () => D, ol: () => g });
            var o = r(118717),
                t = r(174647),
                d = r(499627),
                n = r(917799),
                l = r(312771);
            const s = "gifSearch",
                i = `rweb/${s}`,
                c = {},
                h = { cursor: {}, items: [], initialFetchStatus: l.ZP.NONE, nextFetchStatus: l.ZP.NONE },
                u = ({ defaultQuery: e, getApiMethod: a, getParams: r, localNamespace: o, mergeNewItems: t }) => {
                    const d = n.dg(`${i}/${o}`, "FETCH"),
                        u = (e, a, r) => {
                            const { fetchStatus: o, ...t } = r,
                                d = e[a] || {},
                                n = (d.cursor || {}).next ? "nextFetchStatus" : "initialFetchStatus";
                            return { ...e, [a]: { ...h, ...d, ...t, [n]: o } };
                        },
                        m =
                            ({ cursor: e, query: o }) =>
                            (t, l, { api: s }) =>
                                n._O(t, { request: a(s), params: r(e, o) })({ actionTypes: d, meta: { query: o } }),
                        p = (a, r = e) => (a[s][o] || {})[r] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: o }) => {
                                const t = p(r(), a);
                                return t.initialFetchStatus === l.ZP.LOADING || t.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: o }) => {
                                const t = p(r(), a),
                                    { cursor: d = {} } = t;
                                return t.nextFetchStatus !== l.ZP.LOADING && d.next ? e(m({ query: a, cursor: d.next })) : Promise.resolve();
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
                                        { query: o } = a.meta,
                                        d = (e[o] || {}).items || [];
                                    return u(e, o, { cursor: r, fetchStatus: l.ZP.LOADED, items: t(d, a.payload) });
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
                y = (0, o.UY)({ categories: p.reducer, category: D.reducer, search: g.reducer });
            d.Z.register({ [s]: y });
        },
        564895: (e, a, r) => {
            r.d(a, { ZP: () => f });
            var o = r(202784),
                t = r(325686),
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
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: a, onToggleChange: r, updateSettings: o } = this.props;
                            o({ shouldAutoPlayGif: e }).catch(a({ showToast: !0 })), r(e);
                        });
                }
                render() {
                    const { category: e, location: a, query: r, shouldAutoPlayGif: l } = this.props,
                        s = r || a?.state?.query,
                        i = e || a?.state?.category?.display_name;
                    return (0, c.Z)() && (s || i) ? o.createElement(t.Z, { style: y.root }, o.createElement(d.ZP, { color: "gray700" }, D), o.createElement(n.Z, { "aria-label": D, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const y = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                f = p(g);
        },
        278066: (e, a, r) => {
            r.d(a, { ZP: () => S });
            r(136728);
            var o = r(202784),
                t = r(325686),
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
                b = o.memo((e) => {
                    const { category: a, gifSearchKey: r, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: D },
                        } = a,
                        g = o.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: r, dmConversationId: e } });
                            }
                        }, [s, a, r, u]);
                    return o.createElement(d.Z, { onPress: g, style: [w.category, m && w.leftMargin] }, o.createElement(n.Z, { source: D, style: [w.categoryImage, { backgroundColor: (0, h.d)(c) }] }), o.createElement(t.Z, { style: w.categoryNameContainer }, o.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                w = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = M((e) => {
                    const { categories: a, fetchInitialIfNeeded: r, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = o.useCallback(() => {
                            r();
                        }, [r]),
                        h = o.useCallback(() => {
                            const e = [];
                            if (a) for (let r = 0; r < a.length; r += 2) e.push([a[r], a[r + 1]]);
                            return o.createElement(t.Z, null, o.Children.toArray(e.map(([e, a], r) => o.createElement(t.Z, { style: [w.row, 0 === r && w.firstRow] }, o.createElement(b, { category: e, gifSearchKey: d, history: n, index: 2 * r, onClick: s, withLeftMargin: !1 }), a ? o.createElement(b, { category: a, gifSearchKey: d, history: n, index: 2 * r + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        o.useEffect(() => {
                            i();
                        }, [i]),
                        o.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        800708: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchCategoryScreen: () => c, default: () => h });
            var o = r(807896),
                t = r(202784),
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
                    return t.createElement(s.Z, { backButtonType: "back", documentTitle: i({ category: h }), history: d, middleControl: a }, t.createElement(l.Z, (0, o.Z)({ category: c }, r)));
                },
                h = c;
        },
        223071: (e, a, r) => {
            r.d(a, { Z: () => c });
            var o = r(202784),
                t = r(511985),
                d = r(725516),
                n = r(317861),
                l = r(564895),
                s = r(118092);
            class i extends o.Component {
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
                        u = (0, t._f)(h, c);
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, { category: e, location: d, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && o.createElement(s.Z, { gifSearchKey: a, history: r, module: n.WD, onClickGif: i, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        558969: (e, a, r) => {
            r.r(a), r.d(a, { default: () => p });
            var o = r(202784),
                t = r(674132),
                d = r.n(t),
                n = r(278066),
                l = r(980407),
                s = r(725516);
            const i = d().c6f5ac52,
                c = (0, s.Z)(
                    (e) => {
                        const { analytics: a, location: r, searchBox: t, ...d } = e,
                            { history: s } = d,
                            c = r.state?.searchFocused,
                            h = o.useCallback(() => {
                                c || a.scribeAction("cancel"), s.goBack({ backLocation: "/" });
                            }, [a, s, c]);
                        return o.createElement(l.Z, { documentTitle: i, history: s, middleControl: t, onBackClick: h }, o.createElement(n.ZP, d));
                    },
                    { element: "category" },
                );
            var h = r(237837);
            const u = d().ab468379,
                m = (e) => {
                    const { searchBox: a, ...r } = e,
                        { history: t, query: d } = r;
                    return o.createElement(l.Z, { backButtonType: "back", documentTitle: u({ query: d }), history: t, middleControl: a }, o.createElement(h.Z, r));
                },
                p = ({ gifSearchKey: e, history: a, location: r, searchBox: t, shouldAutoPlayGif: d }) => {
                    const n = r.state && r.state.query;
                    return n ? o.createElement(m, { gifSearchKey: e, history: a, location: r, query: n, searchBox: t, shouldAutoPlayGif: d }) : o.createElement(c, { gifSearchKey: e, history: a, location: r, searchBox: t });
                };
        },
        237837: (e, a, r) => {
            r.d(a, { Z: () => c });
            var o = r(202784),
                t = r(511985),
                d = r(725516),
                n = r(317861),
                l = r(564895),
                s = r(118092);
            class i extends o.Component {
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
                        u = (0, t._f)(h, c);
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, { location: r, onToggleChange: this._handleToggleChange, query: i, shouldAutoPlayGif: u }), o.createElement(s.Z, { fromSearch: !0, gifSearchKey: e, history: a, module: n.ol, onClickGif: d, query: i, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, d.Z)(i, { element: "gallery" });
        },
        118092: (e, a, r) => {
            r.d(a, { Z: () => $ });
            var o = r(202784),
                t = r(928316),
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
                return e.reduce((e, o, t) => (e[e.length - 1].push({ ...o, index: t }), e[e.length - 1].length > 0 && M(e[e.length - 1], r) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
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
                E = (e, { module: a, query: r }) => a.selectNextFetchStatus(e, r),
                x = (e) => {
                    const { tweetComposer: a } = e,
                        r = a?.activeParentKey,
                        o = A.E_(e, r),
                        t = a[r],
                        d = t.composerData[o]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                v = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: Z, nextFetchStatus: E, oldMediaIds: x }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: r, oldMediaIds: o }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, w.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: r, oldMediaIds: o }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((r = e?.location?.state),
                                (e, a) => {
                                    const o = r && r.dmConversationId;
                                    return (0, _.rA)(o, e, a);
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
            class T extends o.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: r, width: t } = this.props;
                    return o.createElement(N.Z, { onPress: r, style: [G.imageContainer, F(e, a, t).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: r, shouldAutoPlayGif: t, stillMediaUrl: d, width: n } = this.props,
                        l = { height: r, width: n, uri: t ? a : d };
                    return o.createElement(R.Z, { "aria-label": e, source: l, testID: B.Z.gifSearchGifImage });
                }
            }
            const F = (e, a, r) => l.default.create((o) => ({ background: { backgroundColor: e, height: a, width: r } })),
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
                                { width: r } = this.state,
                                t = e ? this._brickLayout(e, 150, r) : Q;
                            return r > 0 ? o.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: U, items: t, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, r) => (t) => {
                            const n = M(t, a),
                                l = a - 2 * t.length - 1;
                            let s = 0;
                            return o.createElement(
                                d.Z,
                                { style: [V.imageRow, { height: n }] },
                                t.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === t.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), o.createElement(L, { altText: a.alt_text || O, animatedMediaUrl: m, backgroundColor: (0, f.d)(a.index), height: n, key: a.index, onClick: r(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: a } = this.state;
                            return this._getMemoizedRowRenderer(e, a, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: a, addMediaToDM: r, fromSearch: o, gifSearchKey: t, history: d, onClickGif: n, scribeAction: l, setMediaMetadata: s, updateSingleComposerV2: i } = this.props,
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
                            } else t === g.AD.DMComposition ? r(k, _) : t === g.AD.NoteComposition && n?.(S);
                            l({ page: t, section: "gif_search", element: "category", action: o ? "search" : "select" }), d?.go(-2);
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
                    return o.createElement("div", { "data-testid": q, ref: this._setRootNode }, o.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (H.contextType = D.rC), (H.defaultProps = { fromSearch: !1 });
            const V = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                $ = v(H);
        },
        16569: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchPaths: () => v, GifSearchScreen: () => N, default: () => B });
            r(136728);
            var o = r(202784),
                t = r(325686),
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
                E = (0, M.p)(
                    () =>
                        Promise.all([
                            r.e("icons.7"),
                            r.e("icons.15"),
                            r.e("icons.8"),
                            r.e("icons.3"),
                            r.e("icons.24"),
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
                x = (0, M.p)(
                    () =>
                        Promise.all([
                            r.e("icons.7"),
                            r.e("icons.15"),
                            r.e("icons.8"),
                            r.e("icons.3"),
                            r.e("icons.24"),
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
                            const { history: e, isDataSaverEnabled: a, location: r } = this.props,
                                o = r.pathname.startsWith(v.category),
                                t = r.pathname === v.search && r.state && r.state.query;
                            !a && (o || t) ? e.goBack() : a && this.setState({ searchDisabled: !0 });
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
                            const { history: a, isDataSaverEnabled: r, location: o } = this.props,
                                t = { pathname: v.search },
                                d = o.state && o.state.query,
                                n = o.pathname === v.search && !d,
                                l = o.pathname.startsWith(v.category) || (o.pathname === v.search && d),
                                s = !r && l,
                                i = o.state && o.state.dmConversationId;
                            e ? ((t.state = { dmConversationId: i, query: e }), n ? a.push(t) : a.replace(t)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), D.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        r = this._getShouldAutoPlayGif(),
                        t = this._gifSearchKey;
                    if (!t) return o.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: t, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: r };
                    return o.createElement(g.nO, { namespace: this._getScribeNamespace(t) }, o.createElement(d.Switch, null, o.createElement(d.Route, { exact: !0, path: v.search }, o.createElement(E, n)), o.createElement(d.Route, { exact: !0, path: `${v.category}/${f.kM}` }, o.createElement(x, n)), o.createElement(d.Route, { component: b.default })));
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
                    return o.createElement(t.Z, { style: R.searchContainer }, o.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : o.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, Z));
                }
            }
            N.contextType = p.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                B = I(N);
        },
        74938: (e, a, r) => {
            r.d(a, { Z: () => o });
            const o = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, r) => {
            r.d(a, { d: () => p, r: () => D });
            var o = r(392237),
                t = r(461756),
                d = r(961817),
                n = r(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = o.default.theme.colors,
                m = [l, s, c, h, i, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                D = (e, a, r) => {
                    const o = r ?? (0, d.i)();
                    return (e || ((0, n.Z)(o) && !a)) && !t.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => M, default: () => w });
            r(571372);
            var o = r(202784),
                t = r(386802),
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
                    { isModal: r } = o.useContext(t.Z),
                    n = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, D.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    o.createElement(m.Z, null, o.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: f }), o.createElement(d.Z, { style: r && b.modal }, o.createElement(u.Z, null)), o.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, g.Z)(M, { page: "not_found" });
        },
        879113: (e, a, r) => {
            r.d(a, { Z: () => m });
            var o = r(202784),
                t = r(476984),
                d = r.n(t),
                n = r(143778),
                l = r(750410),
                s = r(682830);
            const i = "failed",
                c = "loaded",
                h = "loading",
                u = "none";
            class m extends o.Component {
                shouldComponentUpdate(e) {
                    const a = e.fetchStatus === c,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!a && !r) || !d()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: a, failureMessage: r, fetchStatus: t, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: p, retryMessage: D, retryable: g } = this.props;
                    switch (t) {
                        case i:
                            return g ? o.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: D }) : r ? o.createElement(s.m, { failureMessage: r }) : p();
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
        730895: (e, a, r) => {
            var o = r(821176);
            e.exports = function () {
                var e = o(this),
                    a = "";
                return e.hasIndices && (a += "d"), e.global && (a += "g"), e.ignoreCase && (a += "i"), e.multiline && (a += "m"), e.dotAll && (a += "s"), e.unicode && (a += "u"), e.unicodeSets && (a += "v"), e.sticky && (a += "y"), a;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch.b37d321a.js.map
