"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CarouselTimelineHandler"],
    {
        332878: (e, a, d) => {
            d.d(a, { Z: () => c });
            function r(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const o = (e, a, d) => {
                    const r = e(a),
                        o = e(d);
                    return !r && o ? -1 : r && !o ? 1 : 0;
                },
                n = (e, a, d) => l(e(d), e(a)),
                l = (e, a) => (e < a ? -1 : e > a ? 1 : 0),
                i = (e, a) => {
                    if (e.length) return e.reduce((e, d) => (a(d, e) > 0 ? d : e));
                },
                t = ({ nextPos: e, prevPos: a }) => {
                    const d = a.getForViewport(),
                        l = (e) => e && e.doesIntersectWith(d),
                        t = (e) => (e ? Math.abs(d.getTop() - e.getTop()) : 1 / 0),
                        c = e.getList().filter(({ id: d }) => !r(d) && a.isRendered(d) && e.isRendered(d)),
                        s =
                            c.length > 0
                                ? i(c, (e, d) => {
                                      const r = a.getForItem(e.id),
                                          i = a.getForItem(d.id);
                                      return o(l, r, i) || n(t, r, i);
                                  })
                                : null;
                    return s && s.id;
                },
                c = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, a) => {
                        const { distanceToViewportBottom: d, distanceToViewportTop: r, id: o } = a;
                        if ("number" == typeof r) {
                            const a = e.getForViewport().getTop() + r;
                            return e.getForItem(o).getTop() - a;
                        }
                        if ("number" == typeof d) {
                            const a = e.getForViewport().getBottom() + d;
                            return e.getForItem(o).getBottom() - a;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const a = e.getForList().getBottom(),
                            d = e.getForViewport().getBottom();
                        return Math.max(0, d - a);
                    },
                    anchorCandidates: (e) => {
                        const a = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !r(e))
                            .map(({ id: e, rectangle: d }) => ({ id: e, distanceToViewportTop: d.getTop() - a }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, a) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const d = t({ prevPos: e, nextPos: a });
                        if (d) {
                            const r = e.getForItem(d).getTop() - e.getForViewport().getTop();
                            return a.getForItem(d).getTop() - a.getForViewport().getTop() - r;
                        }
                        return 0;
                    },
                };
        },
        751594: (e, a, d) => {
            d.r(a), d.d(a, { default: () => re });
            var r = d(459643),
                o = d(351322),
                n = d(202784),
                l = d(674530),
                i = d(735e3),
                t = (d(136728), d(392237)),
                c = d(457311),
                s = d(674132),
                u = d.n(s),
                p = d(516951),
                b = d(807896),
                D = d(154003),
                h = d(731708),
                S = d(174326),
                m = d(73664),
                A = d(725516);
            const y = ({ onSelect: e, pillGroups: a, position: d, selectedPillGroup: r }) => {
                    const o = a[d],
                        l = (0, A.z)(),
                        i = n.useRef(null),
                        t = n.useRef(0),
                        c = (0, m.R)(i);
                    n.useEffect(() => {
                        c && ((t.current += 1), 1 === t.current && l.scribe({ action: "impression", element: "topic_pill", data: { module_id: o, position: d } }));
                    }, [l, c, o, d]);
                    const s = n.useCallback(() => {
                        l.scribe({ action: "click", element: "topic_pill", data: { module_id: o, position: d } }), e(o);
                    }, [l, e, o, d]);
                    return n.createElement(D.ZP, { onClick: s, ref: i, type: r === o ? "primaryFilled" : "primaryOutlined" }, n.createElement(h.ZP, null, o));
                },
                w = (e) => {
                    const { pillGroups: a } = e;
                    return a.length
                        ? n.createElement(
                              S.Z,
                              { childrenStyle: M.buttons, style: M.container },
                              a.map((a, d) => n.createElement(y, (0, b.Z)({ key: d }, e, { position: d }))),
                          )
                        : null;
                },
                M = t.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, buttons: { marginHorizontal: e.spaces.space2 } }));
            var f = d(325686),
                g = d(143778),
                P = d(443781);
            const v = n.createContext(Object.create(P.wp, Object.getOwnPropertyDescriptors({ gap: void 0, horizontalPadding: void 0, numRowsFromMetadata: void 0, scrollerDisplayType: l.m.Carousel }))),
                I = v;
            var B = d(332878);
            const k = n.forwardRef(({ assumedItemHeight: e = 0, anchoring: a = B.Z, identityFunction: d, items: r, minimumOffscreenToViewportRatio: o = 0, nearEndProximityRatio: i = 0, nearStartProximityRatio: t = 0, noItemsRenderer: c = g.Z, preferredOffscreenToViewportRatio: s = 0, onAtEnd: u = p.Z, onAtStart: b = p.Z, onNearEnd: D = p.Z, onNearStart: h = p.Z, onPositionRestored: m = p.Z, renderer: y }, w) => {
                    const { gap: M, horizontalPadding: P, numRowsFromMetadata: I, scrollerDisplayType: k = l.m.Carousel } = n.useContext(v),
                        R = I || T(r.length, k),
                        E = n.useRef(0),
                        Z = (0, A.z)();
                    n.useImperativeHandle(w, () => ({ isAtNewest: () => !0, scrollToNewest: () => (0, p.Z)(), adjustFocusBy: (e) => (0, p.Z)() }));
                    const C = n.useMemo(() => {
                            const e = [];
                            for (let a = 0, o = 0; a < r.length; a += R, o++) {
                                const l = r.slice(a, a + R),
                                    i = n.createElement(
                                        f.Z,
                                        { key: o },
                                        l.map((e) => n.createElement(n.Fragment, { key: d(e) }, y(e))),
                                    );
                                e.push(i);
                            }
                            return (E.current = e.length), e;
                        }, [d, r, R, y]),
                        F = n.useCallback(
                            ({ index: e, intersectionRatio: a }) => {
                                e === E.current - 1 && 1 === a && Z.scribeAction("reached_end");
                            },
                            [Z],
                        ),
                        G = n.useCallback(
                            ({ next: e, previous: a }) => {
                                a > e ? Z.scribeAction("scroll_left") : a < e && Z.scribeAction("scroll_right");
                            },
                            [Z],
                        );
                    return r.length ? n.createElement(S.Z, { buttonsContainerStyle: { gap: M, paddingHorizontal: P }, onScroll: G, onVisibleRangeChange: F }, C) : c();
                }),
                T = (e, a) => (a === l.m.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1),
                R = k;
            var E = d(523561),
                Z = d(195560);
            const C = (0, E.Z)({
                loader: () =>
                    Promise.all([
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2f4a3d25"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4cc32837"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-3931c1f3"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e4b9a405"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f17e8d44"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f39972b2"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-568e95f0"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1895c9ee"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8fe22a9e"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-10bcc2eb"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        d.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        d.e("ondemand.CarouselScroller"),
                    ]).then(d.bind(d, 153841)),
                renderPlaceholder: (e, a) => n.createElement(Z.Z, { hasError: e, onRetry: a }),
            });
            var F = d(262785),
                G = d(768572),
                H = d(87063),
                V = d(371277),
                _ = d(769471),
                x = d(962741),
                z = d(263863),
                K = d(801184),
                N = d(269011),
                O = d(335632);
            const L = u().afb4c24a,
                j = u().fdd81500;
            class W extends n.Component {
                constructor(e) {
                    super(e),
                        (this.pillGroups = []),
                        (this.getEntriesToRender = () => {
                            const { items: e } = this.props;
                            if (void 0 === this.state.selectedPillGroup) return e;
                            return this.itemsByPillGroup.get(this.state.selectedPillGroup) ?? e;
                        }),
                        (this.getGap = (e) => ("Media" === e[0]?.content.displayType ? t.default.theme.spacesPx.space16 : "MediaShort" === e[0]?.content.displayType ? t.default.theme.spacesPx.space8 : void 0)),
                        (this.getHorizontalPadding = (e) => {
                            if ("Media" === e[0]?.content.displayType || "MediaShort" === e[0]?.content.displayType) return t.default.theme.componentDimensions.gutterHorizontalPx;
                        });
                    const { items: a } = this.props,
                        d = new Map();
                    a.forEach((e) => {
                        const a = e.pill_group;
                        if (void 0 === a) return;
                        const r = d.get(a);
                        r ? r.push(e) : d.set(a, [e]);
                    }),
                        (this.itemsByPillGroup = d),
                        (this.pillGroups = Array.from(d.keys())),
                        (this.state = { selectedPillGroup: this.pillGroups.length ? this.pillGroups[0] : void 0 });
                }
                render() {
                    const { applyReactionInstructions: e, canRefresh: a, dismissedEntries: d, module: r, moduleEntryId: o, numRowsFromMetadata: i, perfKey: t, renderEmptyState: c, richScribeAction: s, scrollerDisplayType: u } = this.props,
                        b = this.getEntriesToRender(),
                        D = this.getGap(b),
                        h = this.getHorizontalPadding(b);
                    return n.createElement(
                        I.Provider,
                        { value: { gap: D, horizontalPadding: h, numRowsFromMetadata: i, scrollerDisplayType: u, ...this.context } },
                        this.pillGroups.length > 1 && this.state.selectedPillGroup
                            ? n.createElement(w, {
                                  onSelect: (e) => {
                                      this.setState({ selectedPillGroup: e });
                                  },
                                  pillGroups: this.pillGroups,
                                  selectedPillGroup: this.state.selectedPillGroup,
                              })
                            : null,
                        n.createElement(V.Z, { dismissedEntries: d, entries: this.getEntriesToRender(), entryConfiguration: (0, _.Z)({}, (0, O.G)({}), { [x.ZP.Tweet]: { handlers: { [z.Z.Media]: (0, K.mG)({ isCarouselItem: !0 }), [z.Z.MediaShort]: (0, K.UM)({ isCarouselItem: !0 }) } }, [x.ZP.User]: (0, N.Z)({ isCarouselItem: !0 }) }), perfKey: t }, (d, i) => n.createElement(G.ZP, { identifier: o }, n.createElement(F.Z, { applyReactionInstructions: e, canRefresh: a, clearActiveCover: p.Z, entries: i, handlerRegistry: d, initialFetchStatus: H.Z.LOADED, key: this.state.selectedPillGroup, module: r, onAtTop: p.Z, onRef: p.Z, perfKey: t, processCallback: p.Z, refreshControl: null, removeAlert: p.Z, renderEmptyState: c, richScribeAction: s, scroller: u === l.m.PagedCarousel ? C : R, timelineId: o, title: j, withKeyboardShortcuts: !1 }))),
                    );
                }
            }
            (W.contextType = P.rC), (W.defaultProps = { renderEmptyState: () => n.createElement(c.Z, { message: L }), scrollerDisplayType: l.m.Vertical });
            const U = W;
            var q = d(668214),
                J = d(481242);
            const Q = (e, { module: a }) => a.selectCanRefresh(e),
                X = (e, { module: a }) => a.selectDismissedEntries(e),
                Y = (e, { module: a }) => a.perfKey,
                $ = (0, q.Z)()
                    .propsFromState(() => ({ canRefresh: Q, dismissedEntries: X, perfKey: Y }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, richScribeAction: J.richScribeAction })),
                ee = (0, i.o)(),
                ae = ({ applyReactionInstructions: e, canRefresh: a, dismissedEntries: d, entry: r, module: o, perfKey: i, richScribeAction: t }) => {
                    const {
                            content: { displayType: c, items: s = ee },
                            entryId: u,
                            itemMetadata: p,
                        } = r,
                        b = c,
                        D = b === l.m.GridCarousel ? p.moduleMetadata?.gridCarouselMetadata?.numRows : void 0;
                    return n.createElement(U, { applyReactionInstructions: e, canRefresh: a, dismissedEntries: d, items: s, module: o, moduleEntryId: u, numRowsFromMetadata: D, perfKey: i, richScribeAction: t, scrollerDisplayType: b });
                },
                de = $(n.memo(ae)),
                re = o.iH({ component: de, isFocusable: (0, r.Z)(!0) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CarouselTimelineHandler.c41cab7a.js.map
