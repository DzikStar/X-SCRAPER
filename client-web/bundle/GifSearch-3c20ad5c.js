"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GifSearch-3c20ad5c"],
    {
        564895: (e, t, a) => {
            a.d(t, { ZP: () => S });
            var r = a(202784),
                o = a(325686),
                i = a(731708),
                n = a(451566),
                s = a(392237),
                d = a(111677),
                l = a.n(d),
                c = a(172459),
                h = a(71620),
                u = a(668214),
                g = a(38562);
            const m = (0, u.Z)().propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("FOUND_MEDIA_AUTOPLAY_TOGGLE"), updateSettings: g.VP })),
                p = l().j7fc4f9c;
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSwitchChanged = (e) => {
                            const { createLocalApiErrorHandler: t, onToggleChange: a, updateSettings: r } = this.props;
                            r({ shouldAutoPlayGif: e }).catch(t({ showToast: !0 })), a(e);
                        });
                }
                render() {
                    const { category: e, location: t, query: a, shouldAutoPlayGif: s } = this.props,
                        d = a || t?.state?.query,
                        l = e || t?.state?.category?.display_name;
                    return (0, c.Z)() && (d || l) ? r.createElement(o.Z, { style: y.root }, r.createElement(i.ZP, { color: "gray700" }, p), r.createElement(n.Z, { "aria-label": p, onValueChange: this._handleSwitchChanged, value: s })) : null;
                }
            }
            const y = s.default.create((e) => ({ root: { flexDirection: "row", justifyContent: "space-between", margin: e.spaces.space12 } })),
                S = m(f);
        },
        278066: (e, t, a) => {
            a.d(t, { ZP: () => D });
            a(136728);
            var r = a(202784),
                o = a(325686),
                i = a(530732),
                n = a(992942),
                s = a(731708),
                d = a(392237),
                l = a(16569),
                c = a(290402),
                h = a(663194),
                u = a(24949),
                g = a(450681),
                m = a(668214),
                p = a(317861);
            const { Categories: f } = p,
                y = (e, t) => f.selectItems(e),
                S = (e) => f.selectInitialFetchStatus(e),
                _ = (0, m.Z)()
                    .propsFromState(() => ({ categories: (0, u.P1)(y, (e) => (e ? (0, g.Z)(e.map((e) => (e.display_name ? e : void 0))) : void 0)), initialFetchStatus: S }))
                    .propsFromActions(() => ({ fetchInitialIfNeeded: f.fetchInitialIfNeeded, fetchNextIfNeeded: f.fetchNextIfNeeded })),
                b = r.memo((e) => {
                    const { category: t, gifSearchKey: a, history: d, index: c, onClick: u, withLeftMargin: g } = e,
                        {
                            display_name: m,
                            original_image: { still_image_url: p },
                        } = t,
                        f = r.useCallback(() => {
                            if (u) u(t);
                            else {
                                const e = d?.location.state?.dmConversationId;
                                d?.push({ pathname: `${l.GifSearchPaths.category}/${t.id}`, state: { category: t, gifSearchKey: a, dmConversationId: e } });
                            }
                        }, [d, t, a, u]);
                    return r.createElement(i.Z, { onPress: f, style: [M.category, g && M.leftMargin] }, r.createElement(n.Z, { source: p, style: [M.categoryImage, { backgroundColor: (0, h.d)(c) }] }), r.createElement(o.Z, { style: M.categoryNameContainer }, r.createElement(s.ZP, { color: "white", size: "headline1", weight: "bold" }, m)));
                }),
                M = d.default.create((e) => ({ row: { flexDirection: "row", marginTop: e.spaces.space4 }, firstRow: { marginTop: 0 }, category: { height: "10rem", flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space4 }, categoryImage: { flexGrow: 1 }, categoryNameContainer: { position: "absolute", bottom: 0, width: "100%", padding: e.spaces.space8, backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0))" } })),
                D = _((e) => {
                    const { categories: t, fetchInitialIfNeeded: a, gifSearchKey: i, history: n, initialFetchStatus: s, onClickCategory: d } = e,
                        l = r.useCallback(() => {
                            a();
                        }, [a]),
                        h = r.useCallback(() => {
                            const e = [];
                            if (t) for (let a = 0; a < t.length; a += 2) e.push([t[a], t[a + 1]]);
                            return r.createElement(o.Z, null, r.Children.toArray(e.map(([e, t], a) => r.createElement(o.Z, { style: [M.row, 0 === a && M.firstRow] }, r.createElement(b, { category: e, gifSearchKey: i, history: n, index: 2 * a, onClick: d, withLeftMargin: !1 }), t ? r.createElement(b, { category: t, gifSearchKey: i, history: n, index: 2 * a + 1, onClick: d, withLeftMargin: !0 }) : null))));
                        }, [t, i, n, d]);
                    return (
                        r.useEffect(() => {
                            l();
                        }, [l]),
                        r.createElement(c.Z, { fetchStatus: s, onRequestRetry: l, render: h })
                    );
                });
        },
        800708: (e, t, a) => {
            a.r(t), a.d(t, { GifSearchCategoryScreen: () => c, default: () => h });
            var r = a(807896),
                o = a(202784),
                i = a(111677),
                n = a.n(i),
                s = a(223071),
                d = a(980407);
            const l = n().f5ff0d6f,
                c = (e) => {
                    const { searchBox: t, ...a } = e,
                        { history: i, location: n } = a,
                        c = n.state && n.state.category,
                        h = c && c.display_name;
                    return o.createElement(d.Z, { backButtonType: "back", documentTitle: l({ category: h }), history: i, middleControl: t }, o.createElement(s.Z, (0, r.Z)({ category: c }, a)));
                },
                h = c;
        },
        223071: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(511985),
                i = a(725516),
                n = a(317861),
                s = a(564895),
                d = a(118092);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { category: e, gifSearchKey: t, history: a, location: i, onClickGif: l, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, { category: e, location: i, onToggleChange: this._handleToggleChange, shouldAutoPlayGif: u }), !!e && r.createElement(d.Z, { gifSearchKey: t, history: a, module: n.WD, onClickGif: l, query: e.id, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, i.Z)(l, { element: "gallery" });
        },
        558969: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            var r = a(202784),
                o = a(111677),
                i = a.n(o),
                n = a(278066),
                s = a(980407),
                d = a(725516);
            const l = i().c6f5ac52,
                c = (0, d.Z)(
                    (e) => {
                        const { analytics: t, location: a, searchBox: o, ...i } = e,
                            { history: d } = i,
                            c = a.state?.searchFocused,
                            h = r.useCallback(() => {
                                c || t.scribeAction("cancel"), d.goBack({ backLocation: "/" });
                            }, [t, d, c]);
                        return r.createElement(s.Z, { documentTitle: l, history: d, middleControl: o, onBackClick: h }, r.createElement(n.ZP, i));
                    },
                    { element: "category" },
                );
            var h = a(237837);
            const u = i().ab468379,
                g = (e) => {
                    const { searchBox: t, ...a } = e,
                        { history: o, query: i } = a;
                    return r.createElement(s.Z, { backButtonType: "back", documentTitle: u({ query: i }), history: o, middleControl: t }, r.createElement(h.Z, a));
                },
                m = ({ gifSearchKey: e, history: t, location: a, searchBox: o, shouldAutoPlayGif: i }) => {
                    const n = a.state && a.state.query;
                    return n ? r.createElement(g, { gifSearchKey: e, history: t, location: a, query: n, searchBox: o, shouldAutoPlayGif: i }) : r.createElement(c, { gifSearchKey: e, history: t, location: a, searchBox: o });
                };
        },
        237837: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(511985),
                i = a(725516),
                n = a(317861),
                s = a(564895),
                d = a(118092);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { shouldAutoPlayGifOverride: null }),
                        (this._handleToggleChange = (e) => {
                            this.setState({ shouldAutoPlayGifOverride: e });
                        });
                }
                render() {
                    const { gifSearchKey: e, history: t, location: a, onClickGif: i, query: l, shouldAutoPlayGif: c } = this.props,
                        { shouldAutoPlayGifOverride: h } = this.state,
                        u = (0, o._f)(h, c);
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, { location: a, onToggleChange: this._handleToggleChange, query: l, shouldAutoPlayGif: u }), r.createElement(d.Z, { fromSearch: !0, gifSearchKey: e, history: t, module: n.ol, onClickGif: i, query: l, shouldAutoPlayGif: u }));
                }
            }
            const c = (0, i.Z)(l, { element: "gallery" });
        },
        118092: (e, t, a) => {
            a.d(t, { Z: () => W });
            var r = a(202784),
                o = a(928316),
                i = a(325686),
                n = a(457311),
                s = a(392237),
                d = a(111677),
                l = a.n(d),
                c = a(459643),
                h = a(912021),
                u = a(370751),
                g = a(290402),
                m = a(965245),
                p = a(443781),
                f = a(511985),
                y = a(716233),
                S = a(663194);
            a(136728);
            const _ = (e, t) => {
                const a = e.reduce((e, t) => {
                    const { original_image: a } = t;
                    return e + a.width / a.height;
                }, 0);
                return Math.ceil(t / a);
            };
            function b(e, t, a) {
                return e.reduce((e, r, o) => (e[e.length - 1].push({ ...r, index: o }), e[e.length - 1].length > 0 && _(e[e.length - 1], a) < t && e.push([]), e), [[]]).filter((e) => e.length > 0);
            }
            var M = a(459679),
                D = a(668214),
                C = a(704279),
                v = a(798538),
                w = a(497294),
                A = a(632960);
            const E = [],
                N = (e, { module: t, query: a }) => t.selectInitialFetchStatus(e, a),
                Z = (e, { module: t, query: a }) => t.selectItems(e, a),
                x = (e, { module: t, query: a }) => t.selectNextFetchStatus(e, a),
                I = (e) => {
                    const { tweetComposer: t } = e,
                        a = t?.activeParentKey,
                        r = A.E_(e, a),
                        o = t[a],
                        i = o.composerData[r]?.mediaIds;
                    return Array.isArray(i) ? i : E;
                },
                R = (0, D.Z)()
                    .propsFromState(() => ({ initialFetchStatus: N, items: Z, nextFetchStatus: x, oldMediaIds: I }))
                    .adjustStateProps(({ initialFetchStatus: e, items: t, nextFetchStatus: a, oldMediaIds: r }) => ({ initialFetchStatus: e, items: Array.isArray(t) ? (0, M.Z)(t, (e) => (e.url ? { ...e, thumbnail_images: [...e.thumbnail_images].sort((e, t) => t.height * t.width - e.height * e.width) } : void 0)) : void 0, nextFetchStatus: a, oldMediaIds: r }))
                    .propsFromActions(({ history: e, module: t }) => {
                        return {
                            addExternalMediaUpload: w.Q6,
                            addMediaToDM:
                                ((a = e?.location?.state),
                                (e, t) => {
                                    const r = a && a.dmConversationId;
                                    return (0, v.rA)(r, e, t);
                                }),
                            setMediaMetadata: w._B,
                            fetchInitialIfNeeded: t.fetchInitialIfNeeded,
                            fetchNextIfNeeded: t.fetchNextIfNeeded,
                            scribeAction: C.n,
                            updateSingleComposerV2: A.zi,
                        };
                        var a;
                    });
            var k = a(530732),
                G = a(992942),
                P = a(74938);
            class T extends r.Component {
                render() {
                    const { backgroundColor: e, height: t, onClick: a, width: o } = this.props;
                    return r.createElement(k.Z, { onPress: a, style: [q.imageContainer, F(e, t, o).background] }, this._renderPreview());
                }
                _renderPreview() {
                    const { altText: e, animatedMediaUrl: t, height: a, shouldAutoPlayGif: o, stillMediaUrl: i, width: n } = this.props,
                        s = { height: a, width: n, uri: o ? t : i };
                    return r.createElement(G.Z, { "aria-label": e, source: s, testID: P.Z.gifSearchGifImage });
                }
            }
            const F = (e, t, a) => s.default.create((r) => ({ background: { backgroundColor: e, height: t, width: a } })),
                q = s.default.create((e) => ({ imageContainer: { marginHorizontal: "1px", overflow: "hidden", flexShrink: 1 } })),
                K = T,
                B = "gifSearchTimelineRoot",
                z = l().a66b7760,
                O = l().a723aefa,
                L = l().a6ecfa0a,
                U = (e) => e.map((e) => e.id).join("-"),
                Q = (0, c.Z)(null),
                H = [];
            class V extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._rootNode = null),
                        (this._render = () => {
                            const { items: e, query: t } = this.props,
                                { width: a } = this.state,
                                o = e ? this._brickLayout(e, 150, a) : H;
                            return a > 0 ? r.createElement(m.Z, { assumedItemHeight: 150, cacheKey: `gifSearchCategory/${t}`, footer: this._getRenderFooter(), identityFunction: U, items: o, noItemsRenderer: this._renderEmptyItem, onNearEnd: this._handleFetchNext, renderer: this._getRowRenderer() }) : null;
                        }),
                        (this._getMemoizedRowRenderer = (0, h.Z)((e, t, a) => (o) => {
                            const n = _(o, t),
                                s = t - 2 * o.length - 1;
                            let d = 0;
                            return r.createElement(
                                i.Z,
                                { style: [$.imageRow, { height: n }] },
                                o.map((t, i) => {
                                    const {
                                            thumbnail_images: [l],
                                        } = t,
                                        c = n / l.height,
                                        h = i === o.length - 1 ? s - d : Math.round(l.width * c),
                                        { still_image_url: u, url: g } = l;
                                    return (d += h), r.createElement(K, { altText: t.alt_text || z, animatedMediaUrl: g, backgroundColor: (0, S.d)(t.index), height: n, key: t.index, onClick: a(t), shouldAutoPlayGif: e, stillMediaUrl: u, width: h });
                                }),
                            );
                        })),
                        (this._getRowRenderer = () => {
                            const { shouldAutoPlayGif: e } = this.props,
                                { width: t } = this.state;
                            return this._getMemoizedRowRenderer(e, t, this._handleClickFactory);
                        }),
                        (this._handleClickFactory = (e) => () => {
                            const { addExternalMediaUpload: t, addMediaToDM: a, fromSearch: r, gifSearchKey: o, history: i, onClickGif: n, scribeAction: s, setMediaMetadata: d, updateSingleComposerV2: l } = this.props,
                                {
                                    alt_text: c,
                                    found_media_origin: h,
                                    provider: g,
                                    original_image: { url: m },
                                    preview_image: { height: p, url: S, width: _ },
                                    thumbnail_images: [b],
                                    url: M,
                                } = e,
                                D = t({ mediaCategory: o === f.AD.Composition || o === f.AD.NoteComposition ? y.xz.TweetGif : y.xz.DMGif, mediaType: "image/gif", previewMediaType: "video/mp4", previewUrl: S, sourceUrl: m, stillMediaUrl: b.still_image_url, width: _, height: p }),
                                C = D.map((e) => e.id),
                                v = { found_media_origin: h, provider: g, url: M };
                            if ((c && d(C[0], { defaultAltText: c, gifMetadata: v }), o === f.AD.Composition)) {
                                const { oldMediaIds: e } = this.props,
                                    t = [...(0, u.Z)(e.concat(C))];
                                l({ updates: { mediaIds: this.context.featureSwitches.isTrue("rweb_mixed_media_uploads_enabled") ? t : C, gifMetadata: v } });
                            } else o === f.AD.DMComposition ? a(C, v) : o === f.AD.NoteComposition && n?.(D);
                            s({ page: o, section: "gif_search", element: "category", action: r ? "search" : "select" }), i?.go(-2);
                        }),
                        (this._renderEmptyItem = () => r.createElement(n.Z, { header: O, message: L })),
                        (this._getRenderMemoizedFooter = (0, h.Z)((e, t) => r.createElement(g.Z, { fetchStatus: e, onRequestRetry: t, render: Q }))),
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
                    return r.createElement("div", { "data-testid": B, ref: this._setRootNode }, r.createElement(g.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, ref: this._setRootNode, render: this._render }));
                }
            }
            (V.contextType = p.rC), (V.defaultProps = { fromSearch: !1 });
            const $ = s.default.create((e) => ({ emptyItem: { display: "inline-block", paddingHorizontal: e.spaces.space12, paddingVertical: e.spaces.space32 }, imageRow: { flexDirection: "row", marginBottom: 2 } })),
                W = R(V);
        },
        16569: (e, t, a) => {
            a.r(t), a.d(t, { GifSearchPaths: () => R, GifSearchScreen: () => k, default: () => P });
            a(136728);
            var r = a(202784),
                o = a(325686),
                i = a(107267),
                n = a(371344),
                s = a(154003),
                d = a(392237),
                l = a(111677),
                c = a.n(l),
                h = a(956272),
                u = a(912021),
                g = a(666536),
                m = a(443781),
                p = a(511985),
                f = a(293115),
                y = a(615027),
                S = a(189244),
                _ = a(717988),
                b = a(466441),
                M = a(668214),
                D = a(38562),
                C = a(659773);
            const v = (e, t) => (0, D.l4)(e).shouldAutoPlayGif,
                w = (0, M.Z)().propsFromState(() => ({ shouldAutoPlayGif: v, isDataSaverEnabled: D.IX, effectiveAutoplayOption: C.AP }));
            var A = a(74938),
                E = a(663194);
            const N = c().a50ba822,
                Z = c().a9ae1e78,
                x = (0, _.p)(() => Promise.all([a.e("icons.21"), a.e("icons.16"), a.e("icons.10"), a.e("icons.19"), a.e("icons.1"), a.e("icons.0"), a.e("icons.8"), a.e("icons.2"), a.e("icons.23"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), a.e("bundle.GifSearch-6107ac1a"), a.e("bundle.GifSearch-e4e3d8bb"), a.e("bundle.GifSearch-bfd49e49"), a.e("bundle.GifSearch-3c20ad5c")]).then(a.bind(a, 558969)), { shouldMigrateToX: !1 }),
                I = (0, _.p)(() => Promise.all([a.e("icons.21"), a.e("icons.16"), a.e("icons.10"), a.e("icons.19"), a.e("icons.1"), a.e("icons.0"), a.e("icons.8"), a.e("icons.2"), a.e("icons.23"), a.e("modules.common-e907d115"), a.e("modules.common-e019dbda"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"), a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"), a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"), a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"), a.e("bundle.GifSearch-6107ac1a"), a.e("bundle.GifSearch-e4e3d8bb"), a.e("bundle.GifSearch-bfd49e49"), a.e("bundle.GifSearch-3c20ad5c")]).then(a.bind(a, 800708)), { shouldMigrateToX: !1 }),
                R = { category: "/i/foundmedia/category", search: "/i/foundmedia/search" };
            class k extends r.Component {
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
                                i = r.state && r.state.query,
                                n = r.pathname === R.search && !i,
                                s = r.pathname.startsWith(R.category) || (r.pathname === R.search && i),
                                d = !a && s,
                                l = r.state && r.state.dmConversationId;
                            e ? ((o.state = { dmConversationId: l, query: e }), n ? t.push(o) : t.replace(o)) : d && t.goBack();
                        }),
                        (this._goToQueryDebounced = (0, g.Z)((...e) => this._goToQuery(...e), p.zH)),
                        (this._shouldRenderResultsOnChange = !this.props.isDataSaverEnabled);
                }
                render() {
                    const { history: e, location: t } = this.props,
                        a = this._getShouldAutoPlayGif(),
                        o = this._gifSearchKey;
                    if (!o) return r.createElement(y.Z, { to: "/" });
                    const n = { gifSearchKey: o, history: e, location: t, searchBox: this._renderSearchBox(), shouldAutoPlayGif: a };
                    return r.createElement(f.nO, { namespace: this._getScribeNamespace(o) }, r.createElement(i.Switch, null, r.createElement(i.Route, { exact: !0, path: R.search }, r.createElement(x, n)), r.createElement(i.Route, { exact: !0, path: `${R.category}/${S.kM}` }, r.createElement(I, n)), r.createElement(i.Route, { component: b.default })));
                }
                _getShouldAutoPlayGif() {
                    const { effectiveAutoplayOption: e, isDataSaverEnabled: t, shouldAutoPlayGif: a } = this.props;
                    return (0, E.r)(a, t, e);
                }
                _getGifSearchKey() {
                    const {
                            location: { state: e },
                        } = this.props,
                        { gifSearchKey: t, gifSearchKeySource: a } = e || {};
                    return t || (a && (0, p.Qy)(a) && a);
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
                    return r.createElement(o.Z, { style: G.searchContainer }, r.createElement(n.Z, { Icon: h.default, autoFocus: !0, defaultValue: t, key: t, onChange: this._handleChange, onClear: this._handleClear, onSubmitEditing: this._handleSearch, placeholder: N, ref: this._setTextInputRef, style: G.searchInput, testID: A.Z.gifSearchSearchInput, withClearButton: !0 }), this._shouldRenderResultsOnChange ? null : r.createElement(s.ZP, { disabled: e, onPress: this._handleSubmit, size: "small", style: G.searchButton, type: "brandFilled" }, Z));
                }
            }
            k.contextType = m.rC;
            const G = d.default.create((e) => ({ searchContainer: { alignItems: "center", flex: 1, flexDirection: "row", marginVertical: e.spaces.space8 }, searchInput: { height: "100%" }, searchButton: { marginStart: e.spaces.space12 } })),
                P = w(k);
        },
        74938: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { gifSearchSearchInput: "gifSearchSearchInput", gifSearchGifImage: "gifSearchGifImage" };
        },
        663194: (e, t, a) => {
            a.d(t, { d: () => m, r: () => p });
            var r = a(392237),
                o = a(461756),
                i = a(961817),
                n = a(992720);
            const { blue500: s, green500: d, magenta500: l, orange500: c, purple500: h, yellow500: u } = r.default.theme.colors,
                g = [s, d, c, h, l, u],
                m = (e = (() => Math.floor(Math.random() * g.length + 1))()) => g[e % g.length],
                p = (e, t, a) => {
                    const r = a ?? (0, i.i)();
                    return (e || ((0, n.Z)(r) && !t)) && !o.Z.reducedMotionEnabled;
                };
        },
        466441: (e, t, a) => {
            a.r(t), a.d(t, { NotFoundScreen: () => _, default: () => M });
            a(571372);
            var r = a(202784),
                o = a(386802),
                i = a(108362),
                n = a(392237),
                s = a(111677),
                d = a.n(s),
                l = a(187669),
                c = a(449067),
                h = a(38293),
                u = a(56851),
                g = a(652904),
                m = a(952793),
                p = a(163889),
                f = a(725516);
            const y = d().ba929da8,
                S = d().d203e242;
            function _(e) {
                const { splat: t } = e.match.params,
                    { isModal: a } = r.useContext(o.Z),
                    n = (0, m.hC)("responsive_web_report_page_not_found");
                return (
                    (0, l.q)(() => {
                        n && t && (0, p.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(g.Z, null, r.createElement(c.Z.Configure, { backLocation: "/", documentTitle: y, title: S }), r.createElement(i.Z, { style: a && b.modal }, r.createElement(u.Z, null)), r.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const b = n.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                M = (0, f.Z)(_, { page: "not_found" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GifSearch-3c20ad5c.167874ea.js.map
