"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-cf1ec9f3"],
    {
        384316: (e, a, r) => {
            r.d(a, { V: () => y, Z: () => g });
            var o = r(202784),
                t = r(457311),
                d = r(108362),
                n = r(674132),
                l = r.n(n),
                s = r(789831),
                i = r(32677),
                c = r(810641),
                h = r(335632),
                u = r(725405),
                m = r(519896);
            const D = l().dd2c9034,
                p = l().cada17f8,
                y = () => o.createElement(t.Z, { header: D, message: p }),
                g = ({ bookmarkFolderId: e, history: a, title: r, urtModule: t }) => {
                    const n = o.createElement(i.Z, { history: a }),
                        l = (0, u.Z)(),
                        D = o.useMemo(() => (0, h.G)({ withRemoveFromBookmarks: !0, bookmarkFolderId: e }), [e]);
                    return o.createElement(s.Z, { component: d.Z, fab: n }, o.createElement(c.Z, { entryConfiguration: D, module: t, prerollDisplayLocation: m.Nw.OTHER, renderEmptyState: () => (l.scribeAction("empty"), y()), title: r }));
                };
        },
        564895: (e, a, r) => {
            r.d(a, { ZP: () => M });
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
            const D = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: m.VP })),
                p = i().j7fc4f9c;
            class y extends o.Component {
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
                    return (0, c.Z)() && (s || i) ? o.createElement(t.Z, { style: g.root }, o.createElement(d.ZP, { color: "gray700" }, p), o.createElement(n.Z, { "aria-label": p, onValueChange: this._handleSwitchChanged, value: l })) : null;
                }
            }
            const g = l.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                M = D(y);
        },
        278066: (e, a, r) => {
            r.d(a, { ZP: () => A });
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
                D = r(668214),
                p = r(317861);
            const { Categories: y } = p,
                g = (e, a) => y.selectItems(e),
                M = (e) => y.selectInitialFetchStatus(e),
                f = (0, D.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(g, (e) => (e ? (0, m.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: M }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: y.fetchInitialIfNeeded, fetchNextIfNeeded: y.fetchNextIfNeeded })),
                w = o.memo((e) => {
                    const { category: a, gifSearchKey: r, history: s, index: c, onClick: u, withLeftMargin: m } = e,
                        {
                            display_name: D,
                            original_image: { still_image_url: p },
                        } = a,
                        y = o.useCallback(() => {
                            if (u) u(a);
                            else {
                                const e = s?.location.state?.dmConversationId;
                                s?.push({ pathname: `${i.GifSearchPaths.category}/${a.id}`, state: { category: a, gifSearchKey: r, dmConversationId: e } });
                            }
                        }, [s, a, r, u]);
                    return o.createElement(d.Z, { onPress: y, style: [b.category, m && b.leftMargin] }, o.createElement(n.Z, { source: p, style: [b.categoryImage, { backgroundColor: (0, h.d)(c) }] }), o.createElement(t.Z, { style: b.categoryNameContainer }, o.createElement(l.ZP, { color: "white", size: "headline1", weight: "bold" }, D)));
                }),
                b = s.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                A = f((e) => {
                    const { categories: a, fetchInitialIfNeeded: r, gifSearchKey: d, history: n, initialFetchStatus: l, onClickCategory: s } = e,
                        i = o.useCallback(() => {
                            r();
                        }, [r]),
                        h = o.useCallback(() => {
                            const e = [];
                            if (a) for (let r = 0; r < a.length; r += 2) e.push([a[r], a[r + 1]]);
                            return o.createElement(t.Z, null, o.Children.toArray(e.map(([e, a], r) => o.createElement(t.Z, { style: [b.row, 0 === r && b.firstRow] }, o.createElement(w, { category: e, gifSearchKey: d, history: n, index: 2 * r, onClick: s, withLeftMargin: !1 }), a ? o.createElement(w, { category: a, gifSearchKey: d, history: n, index: 2 * r + 1, onClick: s, withLeftMargin: !0 }) : null))));
                        }, [a, d, n, s]);
                    return (
                        o.useEffect(() => {
                            i();
                        }, [i]),
                        o.createElement(c.Z, { fetchStatus: l, onRequestRetry: i, render: h })
                    );
                });
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
            r.d(a, { Z: () => j });
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
                D = r(965245),
                p = r(443781),
                y = r(511985),
                g = r(716233),
                M = r(663194);
            r(136728);
            const f = (e, a) => {
                const r = e.reduce((e, a) => {
                    const { original_image: r } = a;
                    return e + r.width / r.height;
                }, 0);
                return Math.ceil(a / r);
            };
            function w(e, a, r) {
                return e.reduce((e, o, t) => (e[e.length - 1].push({ ...o, index: t }), e[e.length - 1].length > 0 && f(e[e.length - 1], r) < a && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var b = r(459679),
                A = r(668214),
                _ = r(704279),
                S = r(798538),
                I = r(497294),
                k = r(632960);
            const E = [],
                P = (e, { module: a, query: r }) => a.selectInitialFetchStatus(e, r),
                C = (e, { module: a, query: r }) => a.selectItems(e, r),
                v = (e, { module: a, query: r }) => a.selectNextFetchStatus(e, r),
                Z = (e) => {
                    const { tweetComposer: a } = e,
                        r = a?.activeParentKey,
                        o = k.E_(e, r),
                        t = a[r],
                        d = t.composerData[o]?.mediaIds;
                    return Array.isArray(d) ? d : E;
                },
                x = (0, A.Z)()
                    .propsFromState(() => ({ initialFetchStatus: P, items: C, nextFetchStatus: v, oldMediaIds: Z }))
                    .adjustStateProps(({ initialFetchStatus: e, items: a, nextFetchStatus: r, oldMediaIds: o }) => ({ initialFetchStatus: e, items: Array.isArray(a) ? (0, b.Z)(a, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, a) => a.height * a.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: r, oldMediaIds: o }))
                    .propsFromActions(({ history: e, module: a }) => {
                        return {
                            addExternalMediaUpload: I.Q6,
                            addMediaToDM:
                                ((r = e?.location?.state),
                                (e, a) => {
                                    const o = r && r.dmConversationId;
                                    return (0, S.rA)(o, e, a);
                                }),
                            setMediaMetadata: I._B,
                            fetchInitialIfNeeded: a.fetchInitialIfNeeded,
                            fetchNextIfNeeded: a.fetchNextIfNeeded,
                            scribeAction: _.n,
                            updateSingleComposerV2: k.zi,
                        };
                        var r;
                    });
            var R = r(530732),
                N = r(992942),
                T = r(74938);
            class F extends o.Component {
                render() {
                    const { backgroundColor: e, height: a, onClick: r, width: t } = this.props;
                    return o.createElement(R.Z, { onPress: r, style: [O.imageContainer, G(e, a, t).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: a, height: r, shouldAutoPlayGif: t, stillMediaUrl: d, width: n } = this.props,
                        l = { height: r, width: n, uri: t ? a : d };
                    return o.createElement(N.Z, { "aria-label": e, source: l, testID: T.Z.gifSearchGifImage });
                }
            }
            const G = (e, a, r) => l.default.create((o) => ({ background: { backgroundColor: e, height: a, width: r } })),
                O = l.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                L = F,
                q = "gifSearchTimelineRoot",
                U = i().a66b7760,
                z = i().a723aefa,
                B = i().a6ecfa0a,
                H = (e) => e.map((e) => e.id).join("-"),
                K = (0, c.Z)(null),
                V = [];
            class W extends o.Component {
                constructor(e, a) {
                    super(e, a),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: a } = this.props,
                                { width: r } = this.state,
                                t = e ? this._brickLayout(e, 150, r) : V;
                            return r > 0 ? o.createElement(D.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${a}`, footer: this._getRenderFooter(), identityFunction: H, items: t, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, a, r) => (t) => {
                            const n = f(t, a),
                                l = a - 2 * t.length - 1;
                            let s = 0;
                            return o.createElement(
                                d.Z,
                                { style: [Q.imageRow, { height: n }] },
                                t.map((a, d) => {
                                    const {
                                            thumbnail_images: [i],
                                        } = a,
                                        c = n / i.height,
                                        h = d === t.length - 1 ? l - s : Math.round(i.width * c),
                                        { still_image_url: u, url: m } = i;
                                    return (s += h), o.createElement(L, { altText: a.alt_text || U, animatedMediaUrl: m, backgroundColor: (0, M.d)(a.index), height: n, key: a.index, onClick: r(a), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
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
                                    original_image: { url: D },
                                    preview_image: { height: p, url: M, width: f },
                                    thumbnail_images: [w],
                                    url: b,
                                } = e,
                                A = a({ mediaCategory: t === y.AD.Composition || t === y.AD.NoteComposition ? g.xz.TweetGif : g.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: M, sourceUrl: D, stillMediaUrl: w.still_image_url, width: f, height: p }),
                                _ = A.map((e) => e.id),
                                S = { found_media_origin: h, provider: m, url: b };
                            if ((c && s(_[0], { defaultAltText: c, gifMetadata: S }), t === y.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    a = [...(0, u.Z)(e.concat(_))];
                                i({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? a : _, gifMetadata: S } });
                            } else t === y.AD.DMComposition ? r(_, S) : t === y.AD.NoteComposition && n?.(A);
                            l({ page: t, section: "gif_search", element: "category", action: o ? "search" : "select" }), d?.go(-2);
                        }),
                        (this._renderEmptyItem = () => o.createElement(n.Z, { header: z, message: B })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, a) => o.createElement(m.Z, { fetchStatus: e, onRequestRetry: a, render: K }))),
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
            (W.contextType = p.rC), (W.defaultProps = { fromSearch: !1 });
            const Q = l.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                j = x(W);
        },
        16569: (e, a, r) => {
            r.r(a), r.d(a, { GifSearchPaths: () => x, GifSearchScreen: () => R, default: () => T });
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
                D = r(443781),
                p = r(511985),
                y = r(293115),
                g = r(615027),
                M = r(189244),
                f = r(717988),
                w = r(466441),
                b = r(668214),
                A = r(38562),
                _ = r(659773);
            const S = (e, a) => (0, A.l4)(e).shouldAutoPlayGif,
                I = (0, b.Z)().propsFromState(() => ({ shouldAutoPlayGif: S, isDataSaverEnabled: A.IX, effectiveAutoplayOption: _.AP }));
            var k = r(74938),
                E = r(663194);
            const P = c().a50ba822,
                C = c().a9ae1e78,
                v = (0, f.p)(
                    () =>
                        Promise.all([
                            r.e("icons.24"),
                            r.e("icons.2"),
                            r.e("icons.10"),
                            r.e("icons.15"),
                            r.e("icons.27"),
                            r.e("icons.12"),
                            r.e("icons.16"),
                            r.e("icons.7"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
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
                Z = (0, f.p)(
                    () =>
                        Promise.all([
                            r.e("icons.24"),
                            r.e("icons.2"),
                            r.e("icons.10"),
                            r.e("icons.15"),
                            r.e("icons.27"),
                            r.e("icons.12"),
                            r.e("icons.16"),
                            r.e("icons.7"),
                            r.e("modules.common-e907d115"),
                            r.e("modules.common-e019dbda"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                            r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
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
            class R extends o.Component {
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
                                o = r.pathname.startsWith(x.category),
                                t = r.pathname === x.search && r.state && r.state.query;
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
                                t = { pathname: x.search },
                                d = o.state && o.state.query,
                                n = o.pathname === x.search && !d,
                                l = o.pathname.startsWith(x.category) || (o.pathname === x.search && d),
                                s = !r && l,
                                i = o.state && o.state.dmConversationId;
                            e ? ((t.state = { dmConversationId: i, query: e }), n ? a.push(t) : a.replace(t)) : s && a.goBack();
                        }),
                        (this._goToQueryDebounced = (0, m.Z)((...e) => this._goToQuery(...e), p.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: a } = this.props,
                        r = this._getShouldAutoPlayGif(),
                        t = this._gifSearchKey;
                    if (!t) return o.createElement(g.Z, { to: "/" });
                    const n = { gifSearchKey: t, history: e, location: a, searchBox: this._renderSearchBox(), shouldAutoPlayGif: r };
                    return o.createElement(y.nO, { namespace: this._getScribeNamespace(t) }, o.createElement(d.Switch, null, o.createElement(d.Route, { exact: !0, path: x.search }, o.createElement(v, n)), o.createElement(d.Route, { exact: !0, path: `${x.category}/${M.kM}` }, o.createElement(Z, n)), o.createElement(d.Route, { component: w.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: a, shouldAutoPlayGif: r } = this.props;
                    return (0, E.r)(r, a, e);
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
                    return o.createElement(t.Z, { style: N.searchContainer }, o.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: a, key: a, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: P, ref: this._setTextInputRef, style: N.searchInput, testID: k.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : o.createElement(l.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: N.searchButton, type: "brandFilled" }, C));
                }
            }
            R.contextType = D.rC;
            const N = s.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                T = I(R);
        },
        74938: (e, a, r) => {
            r.d(a, { Z: () => o });
            const o = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, a, r) => {
            r.d(a, { d: () => D, r: () => p });
            var o = r(392237),
                t = r(461756),
                d = r(961817),
                n = r(992720);
            const { blue500: l, green500: s, magenta500: i, orange500: c, purple500: h, yellow500: u } = o.default.theme.colors,
                m = [l, s, c, h, i, u],
                D = (e = (() => Math.floor(Math.random() * m.length + 1))()) => m[e % m.length],
                p = (e, a, r) => {
                    const o = r ?? (0, d.i)();
                    return (e || ((0, n.Z)(o) && !a)) && !t.Z.reducedMotionEnabled;
                };
        },
        842485: (e, a, r) => {
            r.r(a), r.d(a, { Entry: () => k, KeyboardShortcutsScreen: () => S, ShortcutContent: () => I, default: () => P });
            var o = r(202784),
                t = r(325686),
                d = r(386802),
                n = r(844685),
                l = r(731708),
                s = r(392237),
                i = r(674132),
                c = r.n(i),
                h = r(980407),
                u = r(443781),
                m = r(163390),
                D = r(24949),
                p = r(668214),
                y = r(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ viewerUserScreenName: (0, D.P1)(y.ZP.selectViewerUser, (e) => (e ? e.screen_name : void 0)) }))
                    .withAnalytics({ page: "keyboard_shortcuts" }),
                M = c().ef1649e2,
                f = c().h54e6138,
                w = c().aefd89c8,
                b = c().cafdefb2,
                A = c().add55c98,
                _ = c().dda42cf2,
                S = ({ history: e, location: a, viewerUserScreenName: r }) => {
                    const { userClaims: t } = o.useContext(u.rC),
                        { isModal: n } = o.useContext(d.Z),
                        l = (e) => (r ? e : e.filter((e) => e && e.universal)),
                        s = (0, m.Od)(t.isTrueAndEnabled("subscriptions_feature_1007")),
                        i = (0, m.OX)(),
                        c = (0, m.PN)(),
                        D = l(s),
                        p = l(i),
                        y = l(c),
                        g = [
                            { headerText: w, shortcuts: D },
                            { headerText: b, shortcuts: p },
                            { headerText: A, shortcuts: y },
                            { headerText: _, shortcuts: [] },
                        ];
                    return o.createElement(h.Z, { documentTitle: M, history: e, isLarge: !0, title: f }, o.createElement(I, { isModal: n, shortcuts: g }));
                },
                I = ({ isModal: e, shortcuts: a }) =>
                    o.createElement(
                        t.Z,
                        { style: [E.root, e && E.row] },
                        a.map(({ headerText: a, shortcuts: r, subtitleText: d }, l) => {
                            const s = l === r.length - 1,
                                i = r.length > 1;
                            return 0 === r.length
                                ? null
                                : o.createElement(
                                      t.Z,
                                      { key: l, style: [E.section, !s && !e && E.sectionBottomMargin] },
                                      a ? o.createElement(n.Z, { style: E.moduleHeader, subtext: d, text: a }) : null,
                                      o.createElement(
                                          t.Z,
                                          { role: "table", style: !s && i && e && E.divider },
                                          r.map((e, a) => o.createElement(k, { description: e.description, key: a, keys: e.keys })),
                                      ),
                                  );
                        }),
                    ),
                k = ({ description: e, keys: a }) => {
                    const r = Array.isArray(a) ? a : [a];
                    return o.createElement(
                        t.Z,
                        { role: "row", style: E.entry },
                        o.createElement(l.ZP, { role: "cell" }, e),
                        o.createElement(
                            t.Z,
                            { role: "cell", style: E.keyRow },
                            r.map((e, a) => e.split(" ").map((e, r, t) => o.createElement(o.Fragment, { key: r }, 0 !== a && o.createElement(l.ZP, { style: E.plus }, ", "), o.createElement(l.ZP, { align: "center", style: E.key, withoutTwemojiAndHashflags: !0 }, e), r !== t.length - 1 ? o.createElement(l.ZP, { style: E.plus }, "+") : null))),
                        ),
                    );
                },
                E = s.default.create((e) => ({ root: { padding: e.spaces.space12, paddingBottom: e.spaces.space20 }, row: { flexDirection: "row" }, keyRow: { flexDirection: "row", alignItems: "center" }, section: { flexShrink: 1 }, sectionBottomMargin: { marginBottom: e.spaces.space12 }, divider: { borderStyle: "solid", borderEndWidth: e.borderWidths.small, borderColor: e.colors.gray50, paddingEnd: e.spaces.space12, marginEnd: e.spaces.space12 }, entry: { flexDirection: "row", justifyContent: "space-between", marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space2 }, key: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.small, boxShadow: `inset 0 -1px 0 ${e.colors.gray200}`, fontFamily: "monospace, monospace", minWidth: "1.7em", paddingHorizontal: e.spaces.space4, paddingVertical: e.spaces.space1 }, plus: { marginHorizontal: e.spaces.space2 }, moduleHeader: { paddingStart: e.spaces.space12 } })),
                P = g(S);
        },
        466441: (e, a, r) => {
            r.r(a), r.d(a, { NotFoundScreen: () => f, default: () => b });
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
                D = r(952793),
                p = r(163889),
                y = r(725516);
            const g = s().ba929da8,
                M = s().d203e242;
            function f(e) {
                const { splat: a } = e.match.params,
                    { isModal: r } = o.useContext(t.Z),
                    n = (0, D.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        n && a && (0, p.ZP)(new Error(`Page not found: ${a}`));
                    }),
                    o.createElement(m.Z, null, o.createElement(c.Z.Configure, { backLocation: "/", documentTitle: g, title: M }), o.createElement(d.Z, { style: r && w.modal }, o.createElement(u.Z, null)), o.createElement(h.Z, { title: g, withMeta: !1 }))
                );
            }
            const w = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                b = (0, y.Z)(f, { page: "not_found" });
        },
        537817: (e, a, r) => {
            r.r(a), r.d(a, { TwitterArticleComposerEmptyState: () => f, default: () => b });
            r(136728);
            var o = r(202784),
                t = r(107267),
                d = r(457311),
                n = r(392237),
                l = r(674132),
                s = r.n(l),
                i = r(794057),
                c = r(689985),
                h = r(71620),
                u = r(668214),
                m = r(143322);
            const D = (0, u.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("CREATE_ARTICLE_ENTITY_BUTTON"), createDraftArticle: m.ZP.create }))
                    .withAnalytics({ page: "article_composer", section: "empty_state" }),
                p = s().d36447e0,
                y = s().ca0ed982,
                g = s().ee9e42aa,
                M = s().e9a50596,
                f = ({ analytics: e, createDraftArticle: a, createLocalApiErrorHandler: r }) => {
                    const n = (0, t.useHistory)();
                    return o.createElement(d.Z, {
                        buttonLink: c.TC,
                        buttonText: g,
                        header: p,
                        message: y,
                        onButtonPress: () => {
                            e.scribe({ element: "create_button", action: "click" }),
                                a("", i.kd)
                                    .then((e) => {
                                        e?.result && "string" == typeof e.result && e.entities?.articleEntities[e.result] && n.push((0, c.lU)(e.entities.articleEntities[e.result].rest_id));
                                    })
                                    .catch(r({ showToast: !0, defaultToast: { text: M } }));
                        },
                        style: w.root,
                    });
                },
                w = n.default.create((e) => ({ root: { alignItems: "top", flex: 1, justifyContent: "center", backgroundColor: e.colors.cellBackground } })),
                b = D(f);
        },
        302534: (e, a, r) => {
            r.r(a), r.d(a, { default: () => Z });
            r(136728);
            var o = r(202784),
                t = r(325686),
                d = r(154003),
                n = r(392237),
                l = r(674132),
                s = r.n(l),
                i = r(619738),
                c = r(161821),
                h = r(19640),
                u = r(545457),
                m = r(253493),
                D = r(507651),
                p = r(583909),
                y = r(293115),
                g = r(794057),
                M = r(689985),
                f = r(71620),
                w = r(668214),
                b = r(143322),
                A = r(390387);
            const _ = { page: "longform_composer", section: "notes_list" },
                S = (0, w.Z)()
                    .propsFromState(() => ({ viewerUserId: A._h }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("COMPOSE_TWITTER_ARTICLE_BUTTON"), createArticleEntity: b.ZP.create }))
                    .withAnalytics(_);
            function I(e) {
                const {
                        location: { pathname: a },
                        viewerUserId: r,
                    } = e,
                    [d, n] = o.useState(P.DRAFTS);
                if (!r) return null;
                const l = (e) => () => d === e,
                    s = (0, c.Z)(P).map((e) => ({ key: e, label: C[e].label, isActive: l(e), to: { pathname: a }, onClick: () => n(e) }));
                return o.createElement(
                    o.Fragment,
                    null,
                    o.createElement(D.Z, { links: s }),
                    o.createElement(
                        t.Z,
                        { style: k.container },
                        o.createElement(p.Z, {
                            emptyStateHeader: C[d].header,
                            lifecycle: (() => {
                                switch (d) {
                                    case P.PUBLISHED:
                                        return h.f.Published;
                                    case P.DRAFTS:
                                    default:
                                        return h.f.Draft;
                                }
                            })(),
                            source: g.C0.LONGFORM_COMPOSER,
                            userId: r,
                        }),
                    ),
                );
            }
            const k = n.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground, flexGrow: 1 } }));
            const E = s().a5a30af0,
                P = Object.freeze({ DRAFTS: "Drafts", PUBLISHED: "Published" }),
                C = { [P.DRAFTS]: { label: s().d4ebc798, header: s().f965e890 }, [P.PUBLISHED]: { label: s().bb40bf66, header: s().c2756718 } },
                v = o.createElement(i.default, null),
                Z = S(function (e) {
                    const { viewerUserId: a } = e;
                    (0, u.ph)();
                    const [r, t] = (function (e) {
                            const a = o.useRef(() => {});
                            a.current = function () {
                                e.analytics.scribe({ element: "create_button", action: "click" }),
                                    e
                                        .createArticleEntity("", g.kd)
                                        .then((a) => {
                                            a?.result && "string" == typeof a.result && a.entities?.articleEntities[a.result] && e.history.push((0, M.lU)(a.entities.articleEntities[a.result].rest_id));
                                        })
                                        .catch(e.createLocalApiErrorHandler({ showToast: !0 }));
                            };
                            const { pathname: r, query: t } = e.location,
                                d = o.useRef(!1);
                            return (
                                (d.current = "/compose/articles" === r && "create" === t.action),
                                o.useLayoutEffect(function () {
                                    if (!0 === d.current) return a.current();
                                }, []),
                                [a.current, d.current]
                            );
                        })(e),
                        n = o.useMemo(() => o.createElement(d.ZP, { "aria-label": "create", icon: v, onPress: r, type: "primaryText" }), [r]);
                    return !a || t ? null : o.createElement(y.nO, { namespace: _ }, o.createElement(m.Z, { rightControl: n, screenType: "root", title: E }, o.createElement(I, e)));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-cf1ec9f3.a2f7f0aa.js.map
