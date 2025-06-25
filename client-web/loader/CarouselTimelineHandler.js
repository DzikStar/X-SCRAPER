"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CarouselTimelineHandler"],
    {
        332878: (e, o, r) => {
            r.d(o, { Z: () => i });
            function a(e) {
                return "_listHeader" === e || "_listFooter" === e;
            }
            const t = (e, o, r) => {
                    const a = e(o),
                        t = e(r);
                    return !a && t ? -1 : a && !t ? 1 : 0;
                },
                n = (e, o, r) => d(e(r), e(o)),
                d = (e, o) => (e < o ? -1 : e > o ? 1 : 0),
                l = (e, o) => {
                    if (e.length) return e.reduce((e, r) => (o(r, e) > 0 ? r : e));
                },
                s = ({ nextPos: e, prevPos: o }) => {
                    const r = o.getForViewport(),
                        d = (e) => e && e.doesIntersectWith(r),
                        s = (e) => (e ? Math.abs(r.getTop() - e.getTop()) : 1 / 0),
                        i = e.getList().filter(({ id: r }) => !a(r) && o.isRendered(r) && e.isRendered(r)),
                        c =
                            i.length > 0
                                ? l(i, (e, r) => {
                                      const a = o.getForItem(e.id),
                                          l = o.getForItem(r.id);
                                      return t(d, a, l) || n(s, a, l);
                                  })
                                : null;
                    return c && c.id;
                },
                i = {
                    initialScrollHeadroom: (e) => e.getRect().getHeight(),
                    offsetToAnchor: (e, o) => {
                        const { distanceToViewportBottom: r, distanceToViewportTop: a, id: t } = o;
                        if ("number" == typeof a) {
                            const o = e.getForViewport().getTop() + a;
                            return e.getForItem(t).getTop() - o;
                        }
                        if ("number" == typeof r) {
                            const o = e.getForViewport().getBottom() + r;
                            return e.getForItem(t).getBottom() - o;
                        }
                        return 0;
                    },
                    scrollHeadroom: (e) => {
                        const o = e.getForList().getBottom(),
                            r = e.getForViewport().getBottom();
                        return Math.max(0, r - o);
                    },
                    anchorCandidates: (e) => {
                        const o = e.getForViewport().getTop();
                        return e
                            .findVisibleItems()
                            .filter(({ id: e }) => !a(e))
                            .map(({ id: e, rectangle: r }) => ({ id: e, distanceToViewportTop: r.getTop() - o }));
                    },
                    pinToNewestWhenAtNewest: !1,
                    offsetCorrection(e, o) {
                        if (e.getForViewport().getTop() <= e.getForList().getTop() && this.pinToNewestWhenAtNewest) return 0;
                        const r = s({ prevPos: e, nextPos: o });
                        if (r) {
                            const a = e.getForItem(r).getTop() - e.getForViewport().getTop();
                            return o.getForItem(r).getTop() - o.getForViewport().getTop() - a;
                        }
                        return 0;
                    },
                };
        },
        751594: (e, o, r) => {
            r.r(o), r.d(o, { default: () => ae });
            var a = r(459643),
                t = r(351322),
                n = r(202784),
                d = r(674530),
                l = r(735e3),
                s = (r(136728), r(392237)),
                i = r(457311),
                c = r(111677),
                u = r.n(c),
                m = r(516951),
                p = r(807896),
                h = r(154003),
                D = r(731708),
                M = r(174326),
                y = r(73664),
                g = r(725516);
            const f = ({ onSelect: e, pillGroups: o, position: r, selectedPillGroup: a }) => {
                    const t = o[r],
                        d = (0, g.z)(),
                        l = n.useRef(null),
                        s = n.useRef(0),
                        i = (0, y.R)(l);
                    n.useEffect(() => {
                        i && ((s.current += 1), 1 === s.current && d.scribe({ action: "impression", element: "topic_pill", data: { module_id: t, position: r } }));
                    }, [d, i, t, r]);
                    const c = n.useCallback(() => {
                        d.scribe({ action: "click", element: "topic_pill", data: { module_id: t, position: r } }), e(t);
                    }, [d, e, t, r]);
                    return n.createElement(h.ZP, { onClick: c, ref: l, type: a === t ? "primaryFilled" : "primaryOutlined" }, n.createElement(D.ZP, null, t));
                },
                w = (e) => {
                    const { pillGroups: o } = e;
                    return o.length
                        ? n.createElement(
                              M.Z,
                              { childrenStyle: P.buttons, style: P.container },
                              o.map((o, r) => n.createElement(f, (0, p.Z)({ key: r }, e, { position: r }))),
                          )
                        : null;
                },
                P = s.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal }, buttons: { marginHorizontal: e.spaces.space2 } }));
            var I = r(325686),
                A = r(143778),
                b = r(443781);
            const k = n.createContext(Object.create(b.wp, Object.getOwnPropertyDescriptors({ gap: void 0, horizontalPadding: void 0, numRowsFromMetadata: void 0, scrollerDisplayType: d.m.Carousel }))),
                T = k;
            var R = r(332878);
            const E = n.forwardRef(({ assumedItemHeight: e = 0, anchoring: o = R.Z, identityFunction: r, items: a, minimumOffscreenToViewportRatio: t = 0, nearEndProximityRatio: l = 0, nearStartProximityRatio: s = 0, noItemsRenderer: i = A.Z, preferredOffscreenToViewportRatio: c = 0, onAtEnd: u = m.Z, onAtStart: p = m.Z, onNearEnd: h = m.Z, onNearStart: D = m.Z, onPositionRestored: y = m.Z, renderer: f }, w) => {
                    const { gap: P, horizontalPadding: b, numRowsFromMetadata: T, scrollerDisplayType: E = d.m.Carousel } = n.useContext(k),
                        C = T || Z(a.length, E),
                        F = n.useRef(0),
                        G = (0, g.z)();
                    n.useImperativeHandle(w, () => ({ isAtNewest: () => !0, scrollToNewest: () => (0, m.Z)(), adjustFocusBy: (e) => (0, m.Z)() }));
                    const S = n.useMemo(() => {
                            const e = [];
                            for (let o = 0, t = 0; o < a.length; o += C, t++) {
                                const d = a.slice(o, o + C),
                                    l = n.createElement(
                                        I.Z,
                                        { key: t },
                                        d.map((e) => n.createElement(n.Fragment, { key: r(e) }, f(e))),
                                    );
                                e.push(l);
                            }
                            return (F.current = e.length), e;
                        }, [r, a, C, f]),
                        v = n.useCallback(
                            ({ index: e, intersectionRatio: o }) => {
                                e === F.current - 1 && 1 === o && G.scribeAction("reached_end");
                            },
                            [G],
                        ),
                        H = n.useCallback(
                            ({ next: e, previous: o }) => {
                                o > e ? G.scribeAction("scroll_left") : o < e && G.scribeAction("scroll_right");
                            },
                            [G],
                        );
                    return a.length ? n.createElement(M.Z, { buttonsContainerStyle: { gap: P, paddingHorizontal: b }, onScroll: H, onVisibleRangeChange: v }, S) : i();
                }),
                Z = (e, o) => (o === d.m.GridCarousel && e >= 8 ? (e < 12 ? 2 : 3) : 1),
                C = E;
            var F = r(523561),
                G = r(195560);
            const S = (0, F.Z)({
                loader: () =>
                    Promise.all([
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("ondemand.CarouselScroller"),
                    ]).then(r.bind(r, 153841)),
                renderPlaceholder: (e, o) => n.createElement(G.Z, { hasError: e, onRetry: o }),
            });
            var v = r(262785),
                H = r(768572),
                V = r(87063),
                _ = r(371277),
                x = r(769471),
                z = r(962741),
                B = r(263863),
                K = r(801184),
                N = r(269011),
                O = r(335632);
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
                        (this.getGap = (e) => ("Media" === e[0]?.content.displayType ? s.default.theme.spacesPx.space16 : "MediaShort" === e[0]?.content.displayType ? s.default.theme.spacesPx.space8 : void 0)),
                        (this.getHorizontalPadding = (e) => {
                            if ("Media" === e[0]?.content.displayType || "MediaShort" === e[0]?.content.displayType) return s.default.theme.componentDimensions.gutterHorizontalPx;
                        });
                    const { items: o } = this.props,
                        r = new Map();
                    o.forEach((e) => {
                        const o = e.pill_group;
                        if (void 0 === o) return;
                        const a = r.get(o);
                        a ? a.push(e) : r.set(o, [e]);
                    }),
                        (this.itemsByPillGroup = r),
                        (this.pillGroups = Array.from(r.keys())),
                        (this.state = { selectedPillGroup: this.pillGroups.length ? this.pillGroups[0] : void 0 });
                }
                render() {
                    const { applyReactionInstructions: e, canRefresh: o, dismissedEntries: r, module: a, moduleEntryId: t, numRowsFromMetadata: l, perfKey: s, renderEmptyState: i, richScribeAction: c, scrollerDisplayType: u } = this.props,
                        p = this.getEntriesToRender(),
                        h = this.getGap(p),
                        D = this.getHorizontalPadding(p);
                    return n.createElement(
                        T.Provider,
                        { value: { gap: h, horizontalPadding: D, numRowsFromMetadata: l, scrollerDisplayType: u, ...this.context } },
                        this.pillGroups.length > 1 && this.state.selectedPillGroup
                            ? n.createElement(w, {
                                  onSelect: (e) => {
                                      this.setState({ selectedPillGroup: e });
                                  },
                                  pillGroups: this.pillGroups,
                                  selectedPillGroup: this.state.selectedPillGroup,
                              })
                            : null,
                        n.createElement(_.Z, { dismissedEntries: r, entries: this.getEntriesToRender(), entryConfiguration: (0, x.Z)({}, (0, O.G)({}), { [z.ZP.Tweet]: { handlers: { [B.Z.Media]: (0, K.mG)({ isCarouselItem: !0 }), [B.Z.MediaShort]: (0, K.UM)({ isCarouselItem: !0 }) } }, [z.ZP.User]: (0, N.Z)({ isCarouselItem: !0 }) }), perfKey: s }, (r, l) => n.createElement(H.ZP, { identifier: t }, n.createElement(v.Z, { applyReactionInstructions: e, canRefresh: o, clearActiveCover: m.Z, entries: l, handlerRegistry: r, initialFetchStatus: V.Z.LOADED, key: this.state.selectedPillGroup, module: a, onAtTop: m.Z, onRef: m.Z, perfKey: s, processCallback: m.Z, refreshControl: null, removeAlert: m.Z, renderEmptyState: i, richScribeAction: c, scroller: u === d.m.PagedCarousel ? S : C, timelineId: t, title: j, withKeyboardShortcuts: !1 }))),
                    );
                }
            }
            (W.contextType = b.rC), (W.defaultProps = { renderEmptyState: () => n.createElement(i.Z, { message: L }), scrollerDisplayType: d.m.Vertical });
            const U = W;
            var q = r(668214),
                J = r(481242);
            const Q = (e, { module: o }) => o.selectCanRefresh(e),
                X = (e, { module: o }) => o.selectDismissedEntries(e),
                Y = (e, { module: o }) => o.perfKey,
                $ = (0, q.Z)()
                    .propsFromState(() => ({ canRefresh: Q, dismissedEntries: X, perfKey: Y }))
                    .propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, richScribeAction: J.richScribeAction })),
                ee = (0, l.o)(),
                oe = ({ applyReactionInstructions: e, canRefresh: o, dismissedEntries: r, entry: a, module: t, perfKey: l, richScribeAction: s }) => {
                    const {
                            content: { displayType: i, items: c = ee },
                            entryId: u,
                            itemMetadata: m,
                        } = a,
                        p = i,
                        h = p === d.m.GridCarousel ? m.moduleMetadata?.gridCarouselMetadata?.numRows : void 0;
                    return n.createElement(U, { applyReactionInstructions: e, canRefresh: o, dismissedEntries: r, items: c, module: t, moduleEntryId: u, numRowsFromMetadata: h, perfKey: l, richScribeAction: s, scrollerDisplayType: p });
                },
                re = $(n.memo(oe)),
                ae = t.iH({ component: re, isFocusable: (0, a.Z)(!0) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CarouselTimelineHandler.47f7daaa.js.map
