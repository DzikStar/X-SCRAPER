"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TwitterArticles~bundle.GifSearch"],
    {
        229333: (e, a, r) => {
            r.d(a, { Z: () => h });
            var t = r(202784),
                o = r(466999),
                d = r(325686),
                n = r(392237),
                l = r(111677);
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
                    const { backButtonType: e, centerTitle: a, centeredLogo: r, fixed: o, hideBackButton: d, isFullWidth: n, isLarge: i, leftControl: c, middleControl: u, position: m, rightControl: D, secondaryBar: p, style: g, subtitle: f, title: M, titleDomId: y, titleIconCell: w, titleIconCellSize: b, withBackground: S, withWideContainer: I } = this.props,
                        { isModal: _ } = this.context,
                        k = d ? c : t.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, a, r) {
                            return e && !(a && r);
                        })(!!S, _, !!p);
                    return t.createElement(t.Fragment, null, t.createElement(s.Z, { centerTitle: a, centeredLogo: r, isFullWidth: n, isLarge: i, leftControl: k, middleControl: u, position: h(m, _, o), rightControl: D, style: g, subtitle: f, title: M, titleDomId: y, titleIconCell: w, titleIconCellSize: b, withBackground: A, withWideContainer: I }), p || null);
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
            r.d(a, { Z: () => D });
            var t = r(807896),
                o = r(202784),
                d = r(182056),
                n = r(879113),
                l = r(392237),
                s = r(111677),
                i = r.n(s),
                c = r(968478);
            const h = i().aa6e3300,
                u = ({ retryMessage: e, ...a }, r) => {
                    const l = d.Z.isOnline();
                    return o.createElement(n.Z, (0, t.Z)({}, a, { icon: l ? void 0 : o.createElement(c.default, { style: m.icon }), retryMessage: l ? e : h }));
                },
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                D = o.forwardRef(u);
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
        349035: (e, a, r) => {
            r.d(a, { Z: () => d });
            var t = r(202784),
                o = r(272175);
            const d = (0, r(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), t.createElement(o.ql, null, t.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, a, r) => {
            r.d(a, { Z: () => p });
            var t = r(202784),
                o = r(420740),
                d = r(108362),
                n = r(731708),
                l = r(154003),
                s = r(392237),
                i = r(111677),
                c = r.n(i),
                h = r(349035);
            const u = "error-detail",
                m = c().e49537c2,
                D = c().a9ae1e78;
            class p extends t.PureComponent {
                render() {
                    return t.createElement(o.Z, { testID: u }, t.createElement(h.Z, null), t.createElement(d.Z, { style: g.root }, t.createElement(n.ZP, { align: "center", color: "gray700", style: g.retryText }, m), t.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const g = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
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
        197319: (e, a, r) => {
            r.d(a, { Categories: () => D, WD: () => p, ol: () => g });
            var t = r(118717);
            const o = ({ apiClient: e, featureSwitches: a }) => ({
                categories: (a, r) => e.get("foundmedia/categories", a, r),
                category(a, r) {
                    const { category: t, ...o } = a;
                    return e.get(`foundmedia/categories/${t}`, o, r);
                },
                search: (a, r) => e.get("foundmedia/search", a, r),
            });
            var d = r(499627),
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
                        D = (a, r = e) => (a[s][t] || {})[r] || {};
                    return {
                        actionTypes: d,
                        fetchInitialIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: t }) => {
                                const o = D(r(), a);
                                return o.initialFetchStatus === l.ZP.LOADING || o.items ? Promise.resolve() : e(m({ query: a }));
                            },
                        fetchNextIfNeeded:
                            ({ query: a = e } = {}) =>
                            (e, r, { api: t }) => {
                                const o = D(r(), a),
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
                        selectInitialFetchStatus: (e, a) => D(e, a).initialFetchStatus || l.ZP.NONE,
                        selectItems: (e, a) => D(e, a).items,
                        selectNextFetchStatus: (e, a) => D(e, a).nextFetchStatus || l.ZP.NONE,
                        selectQueryState: D,
                    };
                },
                m = (e) => e.filter(({ original_image: { height: e, width: a } = {} }) => e > 0 && a > 0),
                D = u({ defaultQuery: "categories", getApiMethod: (e) => e.withEndpoint(o).categories, getParams: (e) => (e ? { cursor: e } : {}), mergeNewItems: (e, a) => [...e, ...(a?.data?.groups || [])], localNamespace: "categories" }),
                p = u({ getApiMethod: (e) => e.withEndpoint(o).category, getParams: (e, a) => ({ category: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "category" }),
                g = u({ getApiMethod: (e) => e.withEndpoint(o).search, getParams: (e, a) => ({ q: a, ...(e ? { cursor: e } : {}) }), mergeNewItems: (e, a) => [...e, ...m(a?.data?.items || [])], localNamespace: "search" }),
                f = (0, t.UY)({ categories: D.reducer, category: p.reducer, search: g.reducer });
            d.Z.register({ [s]: f });
        },
        564895: (e, a, r) => {
            r.d(a, { ZP: () => M });
            var t = r(202784),
                o = r(325686),
                d = r(731708),
                n = r(451566),
                l = r(392237),
                s = r(111677),
                i = r.n(s),
                c = r(172459),
                h = r(71620),
                u = r(668214),
                m = r(38562);
            const D = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                p = i().j7fc4f9c;
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
                    return (0, c.Z)() && (s || i) ? t.createElement(o.Z, { style: f.root }, t.createElement(d.ZP, { color: "gray700" }, p), t.createElement(n.Z, { "aria-label": p, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const f = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                M = D(g);
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
                D = r(668214),
                p = r(197319);
            const { Categories: g } = p,
                f = (e, a) => g.selectItems(e),
                M = (e) => g.selectInitialFetchStatus(e),
                y = (0, D.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(f, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: M }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: g.fetchInitialIfNeeded, fetchNextIfNeeded: g.fetchNextIfNeeded })),
                w = t.memo((e) => {
                    const { category: a, gifSearchKey: r, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: D,
                            original_image: { still_image_url: p },
                        } = a,
                        g = t.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: r, dmConversationId: e } });
                            }
                        }, [s, a, r, u]);
                    return t.createElement(d.Z, { onPress: g, style: [b.category, m && b.leftMargin] }, t.createElement(n.Z, { source: p, style: [b.categoryImage, { backgroundColor: (0, h.d)(c) }] }), t.createElement(o.Z, { style: b.categoryNameContainer }, t.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, D)));
                }),
                b = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                S = y((e) => {
                    const { categories: a, fetchInitialIfNeeded: r, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = t.useCallback(() => {
                            r();
                        }, [r]),
                        h = t.useCallback(() => {
                            const e = [];
                            if (a) for (let r = 0; r < a.length; r += 2) e.push([a[r], a[r + 1]]);
                            return t.createElement(o.Z, null, t.Children.toArray(e.map(([e, a], r) => t.createElement(o.Z, { style: [b.row, 0 === r && b.firstRow] }, t.createElement(w, { category: e, gifSearchKey: d, history: n, index: 2 * r, onClick: s, withLeftMargin: !1 }), a ? t.createElement(w, { category: a, gifSearchKey: d, history: n, index: 2 * r + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        t.useEffect(() => {
                            i();
                        }, [i]),
                        t.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
        },
        223071: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(511985),
                d = r(725516),
                n = r(197319),
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
        237837: (e, a, r) => {
            r.d(a, { Z: () => c });
            var t = r(202784),
                o = r(511985),
                d = r(725516),
                n = r(197319),
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
            r.d(a, { Z: () => V });
            var t = r(202784),
                o = r(928316),
                d = r(325686),
                n = r(457311),
                l = r(392237),
                s = r(111677),
                i = r.n(s),
                c = r(459643),
                h = r(912021),
                u = r(370751),
                m = r(290402),
                D = r(965245),
                p = r(443781),
                g = r(511985),
                f = r(716233),
                M = r(663194);
            r(136728);
            const y = (e, a) => {
                const r = e.reduce((e, a) => {
                    const { original_image: r } = a;
                    return e + r.width / r.height;
                }, 0);
                return Math.ceil(a / r);
            };
            function w(e, a, r) {
                return e.reduce((e, t, o) => (e[e.length - 1].push({ ...t, index: o }), e[e.length - 1].length > 0 && y(e[e.length - 1], r) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var b = r(459679),
                S = r(668214),
                I = r(704279),
                _ = r(798538),
                k = r(497294),
                A = r(632960);
            const C = [],
                P = (e, { module: a, query: r }) => a.selectInitialFetchStatus(e, r),
                v = (e, { module: a, query: r }) => a.selectItems(e, r),
                E = (e, { module: a, query: r }) => a.selectNextFetchStatus(e, r),
                Z = (e) => {
                    const { tweetComposer: a } = e,
                        r = a?.activeParentKey,
                        t = A.E_(e, r),
                        o = a[r],
                        d = o.composerData[t]?.mediaIds;
                    return Array.isArray(d) ? d : C;
                },
                N = (0, S.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: v, nextFetchStatus: E, oldMediaIds: Z }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: r, oldMediaIds: t }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, b.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: r, oldMediaIds: t }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: k.Q6,
                            addMediaToDM:
                                ((r = e?.location?.state),
                                (e, a) => {
                                    const t = r && r.dmConversationId;
                                    return (0, _.rA)(t, e, a);
                                }),
                            setMediaMetadata: k._B,
                            fetchInitialIfNeeded: a.fetchInitialIfNeeded,
                            fetchNextIfNeeded: a.fetchNextIfNeeded,
                            scribeAction: I.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var r;
                    });
            var x = r(530732),
                R = r(992942),
                F = r(74938);
            class T extends t.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: r, width: o } = this.props;
                    return t.createElement(x.Z, { onPress: r, style: [q.imageContainer, G(e, a, o).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: r, shouldAutoPlayGif: o, stillMediaUrl: d, width: n } = this.props,
                        l = { height: r, width: n, uri: o ? a : d };
                    return t.createElement(R.Z, { "aria-label": e, source: l, testID: F.Z.gifSearchGifImage });
                }
            }
            const G = (e, a, r) => l.default.create((t) => ({ background: { backgroundColor: e, height: a, width: r } })),
                q = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                B = T,
                L = "gifSearchTimelineRoot",
                O = i().a66b7760,
                z = i().a723aefa,
                U = i().a6ecfa0a,
                K = (e) => e.map((e) => e.id).join("-"),
                Q = (0, c.Z)(null),
                H = [];
            class W extends t.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: r } = this.state,
                                o = e ? this._brickLayout(e, 150, r) : H;
                            return r > 0 ? t.createElement(D.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: K, items: o, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, r) => (o) => {
                            const n = y(o, a),
                                l = a - 2 * o.length - 1;
                            let s = 0;
                            return t.createElement(
                                d.Z,
                                { style: [$.imageRow, { height: n }] },
                                o.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === o.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), t.createElement(B, { altText: a.alt_text || O, animatedMediaUrl: m, backgroundColor: (0, M.d)(a.index), height: n, key: a.index, onClick: r(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
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
                                    original_image: { url: D },
                                    preview_image: { height: p, url: M, width: y },
                                    thumbnail_images: [w],
                                    url: b,
                                } = e,
                                S = a({ mediaCategory: o === g.AD.Composition || o === g.AD.NoteComposition ? f.xz.TweetGif : f.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: M, sourceUrl: D, stillMediaUrl: w.still_image_url, width: y, height: p }),
                                I = S.map((e) => e.id),
                                _ = { found_media_origin: h, provider: m, url: b };
                            if ((c && s(I[0], { defaultAltText: c, gifMetadata: _ }), o === g.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(I))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : I, gifMetadata: _ } });
                            } else o === g.AD.DMComposition ? r(I, _) : o === g.AD.NoteComposition && n?.(S);
                            l({ page: o, section: "gif_search", element: "category", action: t ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => t.createElement(n.Z, { header: z, message: U })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => t.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: Q }))),
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
                        (this._brickLayout = (0, h.Z)(w)),
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
                    return t.createElement("div", { "data-testid": L, ref: this._setRootNode }, t.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (W.contextType = p.rC), (W.defaultProps = { fromSearch: !1 });
            const $ = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                V = N(W);
        },
        16569: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchPaths: () => N, GifSearchScreen: () => x, default: () => F });
            r(136728);
            var t = r(202784),
                o = r(325686),
                d = r(107267),
                n = r(371344),
                l = r(154003),
                s = r(392237),
                i = r(111677),
                c = r.n(i),
                h = r(956272),
                u = r(912021),
                m = r(666536),
                D = r(443781),
                p = r(511985),
                g = r(293115),
                f = r(615027),
                M = r(189244),
                y = r(717988),
                w = r(466441),
                b = r(668214),
                S = r(38562),
                I = r(659773);
            const _ = (e, a) => (0, S.l4)(e).shouldAutoPlayGif,
                k = (0, b.Z)().propsFromState(() => ({ shouldAutoPlayGif: _, isDataSaverEnabled: S.IX, effectiveAutoplayOption: I.AP }));
            var A = r(74938),
                C = r(663194);
            const P = c().a50ba822,
                v = c().a9ae1e78,
                E = (0, y.p)(
                    () =>
                        Promise.all([
                            r.e("icons.0"),
                            r.e("icons.5"),
                            r.e("icons.12"),
                            r.e("icons.20"),
                            r.e("icons.2"),
                            r.e("icons.21"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
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
                            r.e("shared~bundle.TwitterArticles~bundle.GifSearch"),
                            r.e("bundle.GifSearch"),
                        ]).then(r.bind(r, 558969)),
                    { shouldMigrateToX: !1 },
                ),
                Z = (0, y.p)(
                    () =>
                        Promise.all([
                            r.e("icons.0"),
                            r.e("icons.5"),
                            r.e("icons.12"),
                            r.e("icons.20"),
                            r.e("icons.2"),
                            r.e("icons.21"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                            r.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
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
                            r.e("shared~bundle.TwitterArticles~bundle.GifSearch"),
                            r.e("bundle.GifSearch"),
                        ]).then(r.bind(r, 800708)),
                    { shouldMigrateToX: !1 },
                ),
                N = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class x extends t.Component {
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
                                t = r.pathname.startsWith(N.category),
                                o = r.pathname === N.search && r.state && r.state.query;
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
                                o = { pathname: N.search },
                                d = t.state && t.state.query,
                                n = t.pathname === N.search && !d,
                                l = t.pathname.startsWith(N.category) || (t.pathname === N.search && d),
                                s = !r && l,
                                i = t.state && t.state.dmConversationId;
                            e ? ((o.state = { dmConversationId: i, query: e }), n ? a.push(o) : a.replace(o)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), p.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        r = this._getShouldAutoPlayGif(),
                        o = this._gifSearchKey;
                    if (!o) return t.createElement(f.Z, { to: "/" });
                    const n = { gifSearchKey: o, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: r };
                    return t.createElement(g.nO, { namespace: this._getScribeNamespace(o) }, t.createElement(d.Switch, null, t.createElement(d.Route, { exact: !0, path: N.search }, t.createElement(E, n)), t.createElement(d.Route, { exact: !0, path: `${N.category}/${M.kM}` }, t.createElement(Z, n)), t.createElement(d.Route, { component: w.default })));
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
                    return a || (r && (0, p.Qy)(r) && r);
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
                    return t.createElement(o.Z, { style: R.searchContainer }, t.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: R.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : t.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: R.searchButton, type: "brandFilled" }, v));
                }
            }
            x.contextType = D.rC;
            const R = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                F = k(x);
        },
        74938: (e, a, r) => {
            r.d(a, { Z: () => t });
            const t = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, r) => {
            r.d(a, { d: () => D, r: () => p });
            var t = r(392237),
                o = r(461756),
                d = r(961817),
                n = r(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = t.default.theme.colors,
                m = [l, s, c, h, i, u],
                D = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                p = (e, a, r) => {
                    const t = r ?? (0, d.i)();
                    return (e || ((0, n.Z)(t) && !a)) && !o.Z.reducedMotionEnabled;
                };
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => y, default: () => b });
            r(571372);
            var t = r(202784),
                o = r(386802),
                d = r(108362),
                n = r(392237),
                l = r(111677),
                s = r.n(l),
                i = r(187669),
                c = r(449067),
                h = r(38293),
                u = r(56851),
                m = r(652904),
                D = r(952793),
                p = r(163889),
                g = r(725516);
            const f = s().ba929da8,
                M = s().d203e242;
            function y(e) {
                const { splat: a } = e.match.params,
                    { isModal: r } = t.useContext(o.Z),
                    n = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, p.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    t.createElement(m.Z, null, t.createElement(c.Z.Configure, { backLocation: "/", documentTitle: f, title: M }), t.createElement(d.Z, { style: r && w.modal }, t.createElement(u.Z, null)), t.createElement(h.Z, { title: f, withMeta: !1 }))
                );
            }
            const w = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                b = (0, g.Z)(y, { page: "not_found" });
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
                    const { "aria-label": e, color: a, failureMessage: r, fetchStatus: o, icon: d, loadingMessage: n, onRequestRetry: c, render: m, renderFailure: D, retryMessage: p, retryable: g } = this.props;
                    switch (o) {
                        case i:
                            return g ? t.createElement(l.Z, { icon: d, onRequestRetry: c, retryMessage: p }) : r ? t.createElement(s.m, { failureMessage: r }) : D();
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TwitterArticles~bundle.GifSearch.ba95808a.js.map
