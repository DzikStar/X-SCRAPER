"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-cf1ec9f3"],
    {
        384316: (e, t, a) => {
            a.d(t, { V: () => f, Z: () => y });
            var r = a(202784),
                o = a(457311),
                n = a(108362),
                s = a(111677),
                i = a.n(s),
                l = a(789831),
                d = a(32677),
                c = a(810641),
                h = a(335632),
                u = a(725405),
                m = a(519896);
            const p = i().dd2c9034,
                g = i().cada17f8,
                f = () => r.createElement(o.Z, { header: p, message: g }),
                y = ({ bookmarkFolderId: e, history: t, title: a, urtModule: o }) => {
                    const s = r.createElement(d.Z, { history: t }),
                        i = (0, u.Z)(),
                        p = r.useMemo(() => (0, h.G)({ withRemoveFromBookmarks: !0, bookmarkFolderId: e }), [e]);
                    return r.createElement(l.Z, { component: n.Z, fab: s }, r.createElement(c.Z, { entryConfiguration: p, module: o, prerollDisplayLocation: m.Nw.OTHER, renderEmptyState: () => (i.scribeAction("empty"), f()), title: a }));
                };
        },
        564895: (e, t, a) => {
            a.d(t, { ZP: () => S });
            var r = a(202784),
                o = a(325686),
                n = a(731708),
                s = a(401705),
                i = a(392237),
                l = a(111677),
                d = a.n(l),
                c = a(172459),
                h = a(71620),
                u = a(668214),
                m = a(38562);
            const p = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                g = d().j7fc4f9c;
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: t, onToggleChange: a, updateSettings: r } = this.props;
                            r({ shouldAutoPlayGif: e }).catch(t({ showToast: !0 })), a(e);
                        });
                }
                render() {
                    const { category: e, location: t, query: a, shouldAutoPlayGif: i } = this.props,
                        l = a || t?.state?.query,
                        d = e || t?.state?.category?.display_name;
                    return (0, c.Z)() && (l || d) ? r.createElement(o.Z, { style: y.root }, r.createElement(n.ZP, { color: "gray700" }, g), r.createElement(s.Z, { "aria-label": g, onValueChange: this._handleSwitchChanged, value: i })) : null;
                }
            }
            const y = i.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                S = p(f);
        },
        278066: (e, t, a) => {
            a.d(t, { ZP: () => E });
            a(136728);
            var r = a(202784),
                o = a(325686),
                n = a(530732),
                s = a(992942),
                i = a(731708),
                l = a(392237),
                d = a(16569),
                c = a(290402),
                h = a(663194),
                u = a(24949),
                m = a(450681),
                p = a(668214),
                g = a(317861);
            const { Categories: f } = g,
                y = (e, t) => f.selectItems(e),
                S = (e) => f.selectInitialFetchStatus(e),
                b = (0, p.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(y, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: S }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: f.fetchInitialIfNeeded, fetchNextIfNeeded: f.fetchNextIfNeeded })),
                _ = r.memo((e) => {
                    const { category: t, gifSearchKey: a, history: l, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: p,
                            original_image: { still_image_url: g },
                        } = t,
                        f = r.useCallback(() => {
                            if (u) u(t);
                            else {
                                const e = l?.location.state?.dmConversationId;
                                l?.push({ pathname: `${d.GifSearchPaths.category}/${t.id}`, state: { category: t, gifSearchKey: a, dmConversationId: e } });
                            }
                        }, [l, t, a, u]);
                    return r.createElement(n.Z, { onPress: f, style: [D.category, m && D.leftMargin] }, r.createElement(s.Z, { source: g, style: [D.categoryImage, { backgroundColor: (0, h.d)(c) }] }), r.createElement(o.Z, { style: D.categoryNameContainer }, r.createElement(i.ZP, { color: "white", size: "headline1", weight: "bold" }, p)));
                }),
                D = l.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                E = b((e) => {
                    const { categories: t, fetchInitialIfNeeded: a, gifSearchKey: n, history: s, initialFetchStatus: i, onClickCategory: l } = e,
                        d = r.useCallback(() => {
                            a();
                        }, [a]),
                        h = r.useCallback(() => {
                            const e = [];
                            if (t) for (let a = 0; a < t.length; a += 2) e.push([t[a], t[a + 1]]);
                            return r.createElement(o.Z, null, r.Children.toArray(e.map(([e, t], a) => r.createElement(o.Z, { style: [D.row, 0 === a && D.firstRow] }, r.createElement(_, { category: e, gifSearchKey: n, history: s, index: 2 * a, onClick: l, withLeftMargin: !1 }), t ? r.createElement(_, { category: t, gifSearchKey: n, history: s, index: 2 * a + 1, onClick: l, withLeftMargin: !0 }) : null))));
                        }, [t, n, s, l]);
                    return (
                        r.useEffect(() => {
                            d();
                        }, [d]),
                        r.createElement(c.Z, { fetchStatus: i, onRequestRetry: d, render: h })
                    );
                });
        },
        223071: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(511985),
                n = a(725516),
                s = a(317861),
                i = a(564895),
                l = a(118092);
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { category: e, gifSearchKey: t, history: a, location: n, onClickGif: d, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(i.ZP, { category: e, location: n, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && r.createElement(l.Z, { gifSearchKey: t, history: a, module: s.WD, onClickGif: d, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, n.Z)(d, { element: "gallery" });
        },
        237837: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(511985),
                n = a(725516),
                s = a(317861),
                i = a(564895),
                l = a(118092);
            class d extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { gifSearchKey: e, history: t, location: a, onClickGif: n, query: d, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(i.ZP, { location: a, onToggleChange: this._handleToggleChange, query: d, shouldAutoPlayGif: u }), r.createElement(l.Z, { fromSearch: !0, gifSearchKey: e, history: t, module: s.ol, onClickGif: n, query: d, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, n.Z)(d, { element: "gallery" });
        },
        118092: (e, t, a) => {
            a.d(t, { Z: () => j });
            var r = a(202784),
                o = a(928316),
                n = a(325686),
                s = a(457311),
                i = a(392237),
                l = a(111677),
                d = a.n(l),
                c = a(459643),
                h = a(912021),
                u = a(370751),
                m = a(290402),
                p = a(965245),
                g = a(443781),
                f = a(511985),
                y = a(716233),
                S = a(663194);
            a(136728);
            const b = (e, t) => {
                const a = e.reduce((e, t) => {
                    const { original_image: a } = t;
                    return e + a.width / a.height;
                }, 0);
                return Math.ceil(t / a);
            };
            function _(e, t, a) {
                return e.reduce((e, r, o) => (e[e.length - 1].push({ ...r, index: o }), e[e.length - 1].length > 0 && b(e[e.length - 1], a) < t && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var D = a(459679),
                E = a(668214),
                M = a(704279),
                w = a(798538),
                C = a(497294),
                A = a(632960);
            const v = [],
                Z = (e, { module: t, query: a }) => t.selectInitialFetchStatus(e, a),
                k = (e, { module: t, query: a }) => t.selectItems(e, a),
                x = (e, { module: t, query: a }) => t.selectNextFetchStatus(e, a),
                I = (e) => {
                    const { tweetComposer: t } = e,
                        a = t?.activeParentKey,
                        r = A.E_(e, a),
                        o = t[a],
                        n = o.composerData[r]?.mediaIds;
                    return Array.isArray(n) ? n : v;
                },
                R = (0, E.Z)()
                    .propsFromState(() => ({ initialFetchStatus: Z, items: k, nextFetchStatus: x, oldMediaIds: I }))
                    .adjustStateProps(({ initialFetchStatus: e, items: t, nextFetchStatus: a, oldMediaIds: r }) => ({ initialFetchStatus: e, items: Array.isArray(t) ? (0, D.Z)(t, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, t) => t.height * t.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: a, oldMediaIds: r }))
                    .propsFromActions(({ history: e, module: t }) => {
                        return {
                            addExternalMediaUpload: C.Q6,
                            addMediaToDM:
                                ((a = e?.location?.state),
                                (e, t) => {
                                    const r = a && a.dmConversationId;
                                    return (0, w.rA)(r, e, t);
                                }),
                            setMediaMetadata: C._B,
                            fetchInitialIfNeeded: t.fetchInitialIfNeeded,
                            fetchNextIfNeeded: t.fetchNextIfNeeded,
                            scribeAction: M.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var a;
                    });
            var N = a(530732),
                T = a(992942),
                P = a(74938);
            class F extends r.Component {
                render() {
                    const { backgroundColor: e, height: t, onClick: a, width: o } = this.props;
                    return r.createElement(N.Z, { onPress: a, style: [O.imageContainer, G(e, t, o).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: t, height: a, shouldAutoPlayGif: o, stillMediaUrl: n, width: s } = this.props,
                        i = { height: a, width: s, uri: o ? t : n };
                    return r.createElement(T.Z, { "aria-label": e, source: i, testID: P.Z.gifSearchGifImage });
                }
            }
            const G = (e, t, a) => i.default.create((r) => ({ background: { backgroundColor: e, height: t, width: a } })),
                O = i.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = F,
                q = "gifSearchTimelineRoot",
                U = d().a66b7760,
                z = d().a723aefa,
                B = d().a6ecfa0a,
                H = (e) => e.map((e) => e.id).join("-"),
                K = (0, c.Z)(null),
                V = [];
            class W extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: t } = this.props,
                                { width: a } = this.state,
                                o = e ? this._brickLayout(e, 150, a) : V;
                            return a > 0 ? r.createElement(p.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${t}`, footer: this._getRenderFooter(), identityFunction: H, items: o, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, t, a) => (o) => {
                            const s = b(o, t),
                                i = t - 2 * o.length - 1;
                            let l = 0;
                            return r.createElement(
                                n.Z,
                                { style: [Q.imageRow, { height: s }] },
                                o.map((t, n) => {
                                    const {
                                            thumbnail_images: [d],
                                        } = t,
                                        c = s / d.height,
                                        h = n === o.length - 1 ? i - l : Math.round(d.width * c),
                                        { still_image_url: u, url: m } = d;
                                    return (l += h), r.createElement(L, { altText: t.alt_text || U, animatedMediaUrl: m, backgroundColor: (0, S.d)(t.index), height: s, key: t.index, onClick: a(t), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: t } = this.state;
                            return this._getMemoizedRowRenderer(e, t, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: t, addMediaToDM: a, fromSearch: r, gifSearchKey: o, history: n, onClickGif: s, scribeAction: i, setMediaMetadata: l, updateSingleComposerV2: d } = this.props,
                                {
                                    alt_text: c,
                                    found_media_origin: h,
                                    provider: m,
                                    original_image: { url: p },
                                    preview_image: { height: g, url: S, width: b },
                                    thumbnail_images: [_],
                                    url: D,
                                } = e,
                                E = t({ mediaCategory: o === f.AD.Composition || o === f.AD.NoteComposition ? y.xz.TweetGif : y.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: S, sourceUrl: p, stillMediaUrl: _.still_image_url, width: b, height: g }),
                                M = E.map((e) => e.id),
                                w = { found_media_origin: h, provider: m, url: D };
                            if ((c && l(M[0], { defaultAltText: c, gifMetadata: w }), o === f.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    t = [...(0, u.Z)(e.concat(M))];
                                d({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? t : M, gifMetadata: w } });
                            } else o === f.AD.DMComposition ? a(M, w) : o === f.AD.NoteComposition && s?.(E);
                            i({ page: o, section: "gif_search", element: "category", action: r ? "search" : "select" }), n?.go(-2);
                        }),
                        (this._renderEmptyItem = () => r.createElement(s.Z, { header: z, message: B })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, t) => r.createElement(m.Z, { fetchStatus: e, onRequestRetry: t, render: K }))),
                        (this._getRenderFooter = () => {
                            const { nextFetchStatus: e } = this.props;
                            return this._getRenderMemoizedFooter(e, this._handleFetchNext);
                        }),
                        (this._handleFetch = (e = this.props.query) => {
                            const { fetchInitialIfNeeded: t } = this.props;
                            t({ query: e });
                        }),
                        (this._handleFetchNext = () => {
                            const { fetchNextIfNeeded: e, query: t } = this.props;
                            e({ query: t });
                        }),
                        (this._handleResize = () => {
                            this._rootNode && this._rootNode instanceof Element && this.setState({ width: this._rootNode.clientWidth });
                        }),
                        (this._brickLayout = (0, h.Z)(_)),
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
            (W.contextType = g.rC), (W.defaultProps = { fromSearch: !1 });
            const Q = i.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                j = R(W);
        },
        16569: (e, t, a) => {
            a.r(t), a.d(t, { GifSearchPaths: () => R, GifSearchScreen: () => N, default: () => P });
            a(136728);
            var r = a(202784),
                o = a(325686),
                n = a(107267),
                s = a(371344),
                i = a(154003),
                l = a(392237),
                d = a(111677),
                c = a.n(d),
                h = a(956272),
                u = a(912021),
                m = a(666536),
                p = a(443781),
                g = a(511985),
                f = a(293115),
                y = a(615027),
                S = a(189244),
                b = a(717988),
                _ = a(466441),
                D = a(668214),
                E = a(38562),
                M = a(659773);
            const w = (e, t) => (0, E.l4)(e).shouldAutoPlayGif,
                C = (0, D.Z)().propsFromState(() => ({ shouldAutoPlayGif: w, isDataSaverEnabled: E.IX, effectiveAutoplayOption: M.AP }));
            var A = a(74938),
                v = a(663194);
            const Z = c().a50ba822,
                k = c().a9ae1e78,
                x = (0, b.p)(() => Promise.all([a.e("icons.0"), a.e("icons.5"), a.e("icons.12"), a.e("icons.20"), a.e("icons.2"), a.e("icons.21"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), a.e("bundle.GifSearch-6107ac1a"), a.e("bundle.GifSearch-8ed0fac5"), a.e("bundle.GifSearch-bfd49e49"), a.e("bundle.GifSearch-3c20ad5c")]).then(a.bind(a, 558969)), { shouldMigrateToX: !1 }),
                I = (0, b.p)(() => Promise.all([a.e("icons.0"), a.e("icons.5"), a.e("icons.12"), a.e("icons.20"), a.e("icons.2"), a.e("icons.21"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), a.e("bundle.GifSearch-6107ac1a"), a.e("bundle.GifSearch-8ed0fac5"), a.e("bundle.GifSearch-bfd49e49"), a.e("bundle.GifSearch-3c20ad5c")]).then(a.bind(a, 800708)), { shouldMigrateToX: !1 }),
                R = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class N extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this.state = { searchDisabled: !0 }),
                        (this._gifSearchKey = this._getGifSearchKey()),
                        (this._getScribeNamespace = (0, u.Z)((e) => ({ page: e, section: "gif_search" }))),
                        (this._setTextInputRef = (e) => {
                            this._textInputRef = e;
                        }),
                        (this._handleChange = (e) => {
                            const { value: t } = e.currentTarget;
                            this._shouldRenderResultsOnChange ? this._goToQueryDebounced(t) : this.setState({ searchDisabled: !t });
                        }),
                        (this._handleClear = () => {
                            const { history: e, isDataSaverEnabled: t, location: a } = this.props,
                                r = a.pathname.startsWith(R.category),
                                o = a.pathname === R.search && a.state && a.state.query;
                            !t && (r || o) ? e.goBack() : t && this.setState({ searchDisabled: !0 });
                        }),
                        (this._handleSubmit = () => {
                            const e = this._textInputRef && this._textInputRef.getValue();
                            this._goToQuery(e);
                        }),
                        (this._handleSearch = (e) => {
                            const { value: t } = e.currentTarget;
                            this._goToQuery(t);
                        }),
                        (this._goToQuery = (e) => {
                            const { history: t, isDataSaverEnabled: a, location: r } = this.props,
                                o = { pathname: R.search },
                                n = r.state && r.state.query,
                                s = r.pathname === R.search && !n,
                                i = r.pathname.startsWith(R.category) || (r.pathname === R.search && n),
                                l = !a && i,
                                d = r.state && r.state.dmConversationId;
                            e ? ((o.state = { dmConversationId: d, query: e }), s ? t.push(o) : t.replace(o)) : l && t.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), g.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: t } = this.props,
                        a = this._getShouldAutoPlayGif(),
                        o = this._gifSearchKey;
                    if (!o) return r.createElement(y.Z, { to: "/" });
                    const s = { gifSearchKey: o, history: e, location: t, searchBox: this._renderSearchBox(), shouldAutoPlayGif: a };
                    return r.createElement(f.nO, { namespace: this._getScribeNamespace(o) }, r.createElement(n.Switch, null, r.createElement(n.Route, { exact: !0, path: R.search }, r.createElement(x, s)), r.createElement(n.Route, { exact: !0, path: `${R.category}/${S.kM}` }, r.createElement(I, s)), r.createElement(n.Route, { component: _.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: t, shouldAutoPlayGif: a } = this.props;
                    return (0, v.r)(a, t, e);
                }
                _getGifSearchKey() {
                    const {
                            location: { state: e },
                        } = this.props,
                        { gifSearchKey: t, gifSearchKeySource: a } = e || {};
                    return t || (a && (0, g.Qy)(a) && a);
                }
                _getQueryOrCategory() {
                    const { location: e } = this.props,
                        t = e.state && e.state.query,
                        a = e.state && e.state.category ? e.state.category.display_name : "";
                    return t || a;
                }
                _renderSearchBox() {
                    const { searchDisabled: e } = this.state,
                        t = this._getQueryOrCategory();
                    return r.createElement(o.Z, { style: T.searchContainer }, r.createElement(s.Z, { Icon: h.default, autoFocus: !0, defaultValue: t, key: t, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: Z, ref: this._setTextInputRef, style: T.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : r.createElement(i.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: T.searchButton, type: "brandFilled" }, k));
                }
            }
            N.contextType = p.rC;
            const T = l.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                P = C(N);
        },
        74938: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, t, a) => {
            a.d(t, { d: () => p, r: () => g });
            var r = a(392237),
                o = a(461756),
                n = a(961817),
                s = a(992720);
            const { blue500: i, green500: l, magenta500: d, orange500: c, purple500: h, yellow500: u } = r.default.theme.colors,
                m = [i, l, c, h, d, u],
                p = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                g = (e, t, a) => {
                    const r = a ?? (0, n.i)();
                    return (e || ((0, s.Z)(r) && !t)) && !o.Z.reducedMotionEnabled;
                };
        },
        842485: (e, t, a) => {
            a.r(t), a.d(t, { Entry: () => A, KeyboardShortcutsScreen: () => w, ShortcutContent: () => C, default: () => Z });
            var r = a(202784),
                o = a(325686),
                n = a(386802),
                s = a(844685),
                i = a(731708),
                l = a(392237),
                d = a(111677),
                c = a.n(d),
                h = a(980407),
                u = a(443781),
                m = a(163390),
                p = a(24949),
                g = a(668214),
                f = a(919022);
            const y = (0, g.Z)()
                    .propsFromState(() => ({ viewerUserScreenName: (0, p.P1)(f.ZP.selectViewerUser, (e) => (e ? e.screen_name : void 0)) }))
                    .withAnalytics({ page: "keyboard_shortcuts" }),
                S = c().ef1649e2,
                b = c().h54e6138,
                _ = c().aefd89c8,
                D = c().cafdefb2,
                E = c().add55c98,
                M = c().dda42cf2,
                w = ({ history: e, location: t, viewerUserScreenName: a }) => {
                    const { userClaims: o } = r.useContext(u.rC),
                        { isModal: s } = r.useContext(n.Z),
                        i = (e) => (a ? e : e.filter((e) => e && e.universal)),
                        l = (0, m.Od)(o.isTrueAndEnabled("subscriptions_feature_1007")),
                        d = (0, m.OX)(),
                        c = (0, m.PN)(),
                        p = i(l),
                        g = i(d),
                        f = i(c),
                        y = [
                            { headerText: _, shortcuts: p },
                            { headerText: D, shortcuts: g },
                            { headerText: E, shortcuts: f },
                            { headerText: M, shortcuts: [] },
                        ];
                    return r.createElement(h.Z, { documentTitle: S, history: e, isLarge: !0, title: b }, r.createElement(C, { isModal: s, shortcuts: y }));
                },
                C = ({ isModal: e, shortcuts: t }) =>
                    r.createElement(
                        o.Z,
                        { style: [v.root, e && v.row] },
                        t.map(({ headerText: t, shortcuts: a, subtitleText: n }, i) => {
                            const l = i === a.length - 1,
                                d = a.length > 1;
                            return 0 === a.length
                                ? null
                                : r.createElement(
                                      o.Z,
                                      { key: i, style: [v.section, !l && !e && v.sectionBottomMargin] },
                                      t ? r.createElement(s.Z, { style: v.moduleHeader, subtext: n, text: t }) : null,
                                      r.createElement(
                                          o.Z,
                                          { role: "table", style: !l && d && e && v.divider },
                                          a.map((e, t) => r.createElement(A, { description: e.description, key: t, keys: e.keys })),
                                      ),
                                  );
                        }),
                    ),
                A = ({ description: e, keys: t }) => {
                    const a = Array.isArray(t) ? t : [t];
                    return r.createElement(
                        o.Z,
                        { role: "row", style: v.entry },
                        r.createElement(i.ZP, { role: "cell" }, e),
                        r.createElement(
                            o.Z,
                            { role: "cell", style: v.keyRow },
                            a.map((e, t) => e.split(" ").map((e, a, o) => r.createElement(r.Fragment, { key: a }, 0 !== t && r.createElement(i.ZP, { style: v.plus }, ", "), r.createElement(i.ZP, { align: "center", style: v.key, withoutTwemojiAndHashflags: !0 }, e), a !== o.length - 1 ? r.createElement(i.ZP, { style: v.plus }, "+") : null))),
                        ),
                    );
                },
                v = l.default.create((e) => ({ root: { padding: e.spaces.space12, paddingBottom: e.spaces.space20 }, row: { flexDirection: "row" }, keyRow: { flexDirection: "row", alignItems: "center" }, section: { flexShrink: 1 }, sectionBottomMargin: { marginBottom: e.spaces.space12 }, divider: { borderStyle: "solid", borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingEnd: e.spaces.space12, marginEnd: e.spaces.space12 }, entry: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space2 }, key: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.small, boxShadow: `inset 0 -1px 0 ${e.colors.gray200}`, fontFamily: "monospace, monospace", minWidth: "1.7em", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space1 }, plus: { marginHorizontal: e.spaces.space2 }, moduleHeader: { paddingStart: e.spaces.space12 } })),
                Z = y(w);
        },
        466441: (e, t, a) => {
            a.r(t), a.d(t, { NotFoundScreen: () => b, default: () => D });
            a(571372);
            var r = a(202784),
                o = a(386802),
                n = a(108362),
                s = a(392237),
                i = a(111677),
                l = a.n(i),
                d = a(187669),
                c = a(449067),
                h = a(38293),
                u = a(56851),
                m = a(652904),
                p = a(952793),
                g = a(163889),
                f = a(725516);
            const y = l().ba929da8,
                S = l().d203e242;
            function b(e) {
                const { splat: t } = e.match.params,
                    { isModal: a } = r.useContext(o.Z),
                    s = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, d.q)(() => {
                        s && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(m.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: S }), r.createElement(n.Z, { style: a && _.modal }, r.createElement(u.Z, null)), r.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const _ = s.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                D = (0, f.Z)(b, { page: "not_found" });
        },
        537817: (e, t, a) => {
            a.r(t), a.d(t, { TwitterArticleComposerEmptyState: () => b, default: () => D });
            a(136728);
            var r = a(202784),
                o = a(107267),
                n = a(457311),
                s = a(392237),
                i = a(111677),
                l = a.n(i),
                d = a(794057),
                c = a(689985),
                h = a(71620),
                u = a(668214),
                m = a(143322);
            const p = (0, u.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("CREATE_ARTICLE_ENTITY_BUTTON"), createDraftArticle: m.ZP.create }))
                    .withAnalytics({ page: "article_composer", section: "empty_state" }),
                g = l().d36447e0,
                f = l().ca0ed982,
                y = l().ee9e42aa,
                S = l().e9a50596,
                b = ({ analytics: e, createDraftArticle: t, createLocalApiErrorHandler: a }) => {
                    const s = (0, o.useHistory)();
                    return r.createElement(n.Z, {
                        buttonLink: c.TC,
                        buttonText: y,
                        header: g,
                        message: f,
                        onButtonPress: () => {
                            e.scribe({ element: "create_button", action: "click" }),
                                t("", d.kd)
                                    .then((e) => {
                                        e?.result && "string" == typeof e.result && e.entities?.articleEntities[e.result] && s.push((0, c.lU)(e.entities.articleEntities[e.result].rest_id));
                                    })
                                    .catch(a({ showToast: !0, defaultToast: { text: S } }));
                        },
                        style: _.root,
                    });
                },
                _ = s.default.create((e) => ({ root: { alignItems: "top", flex: 1, justifyContent: "center", backgroundColor: e.colors.cellBackground } })),
                D = p(b);
        },
        302534: (e, t, a) => {
            a.r(t), a.d(t, { default: () => I });
            a(136728);
            var r = a(202784),
                o = a(325686),
                n = a(154003),
                s = a(392237),
                i = a(111677),
                l = a.n(i),
                d = a(619738),
                c = a(161821),
                h = a(19640),
                u = a(545457),
                m = a(496364),
                p = a(507651),
                g = a(583909),
                f = a(293115),
                y = a(794057),
                S = a(689985),
                b = a(71620),
                _ = a(668214),
                D = a(143322),
                E = a(390387);
            const M = { page: "longform_composer", section: "notes_list" },
                w = (0, _.Z)()
                    .propsFromState(() => ({ viewerUserId: E._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, b.zr)("COMPOSE_TWITTER_ARTICLE_BUTTON"), createArticleEntity: D.ZP.create }))
                    .withAnalytics(M);
            function C(e) {
                const {
                        location: { pathname: t },
                        viewerUserId: a,
                    } = e,
                    [n, s] = r.useState(Z.DRAFTS);
                if (!a) return null;
                const i = (e) => () => n === e,
                    l = (0, c.Z)(Z).map((e) => ({ key: e, label: k[e].label, isActive: i(e), to: { pathname: t }, onClick: () => s(e) }));
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(p.Z, { links: l }),
                    r.createElement(
                        o.Z,
                        { style: A.container },
                        r.createElement(g.Z, {
                            emptyStateHeader: k[n].header,
                            lifecycle: (() => {
                                switch (n) {
                                    case Z.PUBLISHED:
                                        return h.f.Published;
                                    case Z.DRAFTS:
                                    default:
                                        return h.f.Draft;
                                }
                            })(),
                            source: y.C0.LONGFORM_COMPOSER,
                            userId: a,
                        }),
                    ),
                );
            }
            const A = s.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }));
            const v = l().a5a30af0,
                Z = Object.freeze({ DRAFTS: "Drafts", PUBLISHED: "Published" }),
                k = { [Z.DRAFTS]: { label: l().d4ebc798, header: l().f965e890 }, [Z.PUBLISHED]: { label: l().bb40bf66, header: l().c2756718 } },
                x = r.createElement(d.default, null),
                I = w(function (e) {
                    const { viewerUserId: t } = e;
                    (0, u.ph)();
                    const [a, o] = (function (e) {
                            const t = r.useRef(() => {});
                            t.current = function () {
                                e.analytics.scribe({ element: "create_button", action: "click" }),
                                    e
                                        .createArticleEntity("", y.kd)
                                        .then((t) => {
                                            t?.result && "string" == typeof t.result && t.entities?.articleEntities[t.result] && e.history.push((0, S.lU)(t.entities.articleEntities[t.result].rest_id));
                                        })
                                        .catch(e.createLocalApiErrorHandler({ showToast: !0 }));
                            };
                            const { pathname: a, query: o } = e.location,
                                n = r.useRef(!1);
                            return (
                                (n.current = "/compose/articles" === a && "create" === o.action),
                                r.useLayoutEffect(function () {
                                    if (!0 === n.current) return t.current();
                                }, []),
                                [t.current, n.current]
                            );
                        })(e),
                        s = r.useMemo(() => r.createElement(n.ZP, { "aria-label": "create", icon: x, onPress: a, type: "primaryText" }), [a]);
                    return !t || o ? null : r.createElement(f.nO, { namespace: M }, r.createElement(m.Z, { rightControl: s, screenType: "root", title: v }, r.createElement(C, e)));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-cf1ec9f3.1f3f342a.js.map
