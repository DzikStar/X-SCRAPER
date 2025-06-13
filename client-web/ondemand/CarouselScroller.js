"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.CarouselScroller"],
    {
        64899: (e, t, n) => {
            n.d(t, { H: () => i });
            var r = n(202784),
                o = n(516951);
            const i = r.createContext({ handleNextSlide: o.Z });
        },
        153841: (e, t, n) => {
            n.r(t), n.d(t, { PagedCarouselScroller: () => R, default: () => S });
            n(136728);
            var r = n(202784),
                o = n(928316),
                i = n(744610),
                s = n(325686),
                a = n(858440),
                l = n(392237),
                c = n(461756),
                d = n(174326),
                u = n(143778),
                h = n(516951),
                g = n(187669),
                f = n(503882),
                p = n(768572),
                m = n(725516),
                Z = n(390686),
                w = n(332878),
                b = n(64899);
            const R = r.forwardRef(({ assumedItemHeight: e = 0, anchoring: t = w.Z, identityFunction: n, items: R, minimumOffscreenToViewportRatio: S = 0, nearEndProximityRatio: C = 0, nearStartProximityRatio: y = 0, noItemsRenderer: E = u.Z, preferredOffscreenToViewportRatio: x = 0, onAtEnd: k = h.Z, onAtStart: I = h.Z, onItemsRendered: V = h.Z, onNearEnd: N = h.Z, onNearStart: P = h.Z, onPositionRestored: A = h.Z, renderer: _ }, M) => {
                    const H = r.useRef(),
                        B = (0, p.ej)(),
                        [T, D] = r.useState(() => {
                            const e = B.getSavedPosition();
                            if (!e?.length) return 0;
                            const t = e[0].id,
                                n = R.findIndex(({ entryId: e }) => e === t);
                            return n > -1 ? n : 0;
                        }),
                        F = r.useRef(new i.Z.Value(50)).current,
                        O = r.useRef({}).current,
                        j = r.useRef({}),
                        z = r.useRef(0),
                        q = (0, m.z)(),
                        Y = (0, a.Z)().width < l.default.theme.breakpoints.small,
                        G = r.useCallback(
                            (e) => {
                                const t = R[e]?.entryId;
                                t && B.savePosition([{ id: t }]);
                            },
                            [B, R],
                        );
                    r.useImperativeHandle(M, () => ({ isAtNewest: () => !0, scrollToNewest: () => (0, h.Z)(), adjustFocusBy: (e) => (0, h.Z)() })),
                        (0, g.q)(function () {
                            const e = j.current[T];
                            if (e) {
                                const t = e.getBoundingClientRect().height;
                                F.setValue(t);
                            }
                            A(), K({ index: T, shouldSavePosition: !1 });
                        });
                    const J = r.useMemo(() => {
                            const e = (e) => (t) => {
                                    t && (j.current[e] = t);
                                },
                                t = (e) => {
                                    O[e] = new i.Z.Value(0);
                                    return { opacity: O[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), transform: [{ rotate: O[e].interpolate({ inputRange: [0, 1], outputRange: ["0deg", "-2deg"] }) }] };
                                },
                                o = [],
                                a = c.Z.reducedMotionEnabled ? s.Z : i.Z.View;
                            for (let i = 0; i < R.length; i += 1) {
                                const s = R[i],
                                    l = c.Z.reducedMotionEnabled ? void 0 : t(i),
                                    d = r.createElement(a, { key: i, ref: e(i), style: l }, r.createElement(r.Fragment, { key: n(s) }, _(s)));
                                o.push(d);
                            }
                            return (z.current = o.length), o;
                        }, [O, n, R, _]),
                        K = r.useCallback(
                            ({ index: e, shouldSavePosition: t }) => {
                                const n = ((e) => {
                                    if (!e || !e.current) return new f.Z(0, 0);
                                    const t = o.findDOMNode(e.current),
                                        { height: n, top: r } = t.getBoundingClientRect();
                                    return new f.Z(r, n);
                                })(H);
                                V({ positions: [{ id: R[e].entryId, rectangle: n }], viewport: n }), t && G(e);
                            },
                            [R, V, G],
                        ),
                        L = r.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                e === z.current - 1 && t >= Z.xn && q.scribeAction("reached_end"), e !== T && 1 === t && (D(e), K({ index: e, shouldSavePosition: !0 }));
                            },
                            [q, K, z, T],
                        ),
                        Q = r.useCallback(
                            (e) => {
                                c.Z.reducedMotionEnabled ||
                                    i.Z.spring(O[T], { toValue: 1, bounciness: 2, useNativeDriver: !1 }).start(function () {
                                        O[T].setValue(0);
                                    }),
                                    H.current?.handleNextSlide(e);
                            },
                            [O, H, T],
                        ),
                        U = r.useCallback(
                            ({ next: e, previous: t }) => {
                                t > e ? q.scribeAction("scroll_left") : t < e && q.scribeAction("scroll_right");
                            },
                            [q],
                        );
                    if (
                        (r.useEffect(() => {
                            const e = j.current[T];
                            if (!c.Z.reducedMotionEnabled && e) {
                                const t = e.getBoundingClientRect().height;
                                F.setValue(t);
                            }
                        }, [Y, T, F]),
                        !R.length)
                    )
                        return E();
                    const W = r.createElement(b.H.Provider, { value: { handleNextSlide: Q } }, r.createElement(d.Z, { childrenStyle: v.children, onScroll: U, onVisibleRangeChange: L, ref: H, scrollToCenter: !0, style: c.Z.reducedMotionEnabled ? v.root : v.rootInheritHeight, visibleItemIndex: T, withAddedNavButtonClickArea: !0 }, J));
                    return c.Z.reducedMotionEnabled ? W : r.createElement(i.Z.View, { style: [v.root, { height: F }] }, W);
                }),
                v = l.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical }, rootInheritHeight: { height: "inherit" }, children: { overflowY: "hidden", scrollSnapAlign: "center", scrollSnapStop: "always", width: "100%" } })),
                S = R;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CarouselScroller.604ab12a.js.map
