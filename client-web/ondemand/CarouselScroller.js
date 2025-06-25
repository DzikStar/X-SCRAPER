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
            n.r(t), n.d(t, { PagedCarouselScroller: () => b, default: () => S });
            n(136728);
            var r = n(202784),
                o = n(928316),
                i = n(744610),
                a = n(325686),
                s = n(858440),
                l = n(392237),
                c = n(461756),
                d = n(174326),
                u = n(143778),
                h = n(516951),
                g = n(187669),
                f = n(503882),
                Z = n(768572),
                m = n(725516),
                p = n(390686),
                w = n(332878),
                v = n(64899);
            const b = r.forwardRef(({ assumedItemHeight: e = 0, anchoring: t = w.Z, identityFunction: n, items: b, minimumOffscreenToViewportRatio: S = 0, nearEndProximityRatio: E = 0, nearStartProximityRatio: C = 0, noItemsRenderer: y = u.Z, preferredOffscreenToViewportRatio: x = 0, onAtEnd: k = h.Z, onAtStart: I = h.Z, onItemsRendered: V = h.Z, onNearEnd: N = h.Z, onNearStart: P = h.Z, onPositionRestored: A = h.Z, renderer: _ }, M) => {
                    const H = r.useRef(),
                        B = (0, Z.ej)(),
                        [T, D] = r.useState(() => {
                            const e = B.getSavedPosition();
                            if (!e?.length) return 0;
                            const t = e[0].id,
                                n = b.findIndex(({ entryId: e }) => e === t);
                            return n > -1 ? n : 0;
                        }),
                        F = r.useRef(new i.Z.Value(50)).current,
                        O = r.useRef({}).current,
                        j = r.useRef({}),
                        z = r.useRef(0),
                        L = (0, m.z)(),
                        q = (0, s.Z)().width < l.default.theme.breakpoints.small,
                        Y = r.useCallback(
                            (e) => {
                                const t = b[e]?.entryId;
                                t && B.savePosition([{ id: t }]);
                            },
                            [B, b],
                        );
                    r.useImperativeHandle(M, () => ({ isAtNewest: () => !0, scrollToNewest: () => (0, h.Z)(), adjustFocusBy: (e) => (0, h.Z)() })),
                        (0, g.q)(function () {
                            const e = j.current[T];
                            if (e) {
                                const t = e.getBoundingClientRect().height;
                                F.setValue(t);
                            }
                            A(), J({ index: T, shouldSavePosition: !1 });
                        });
                    const G = r.useMemo(() => {
                            const e = (e) => (t) => {
                                    t && (j.current[e] = t);
                                },
                                t = (e) => {
                                    O[e] = new i.Z.Value(0);
                                    return { opacity: O[e].interpolate({ inputRange: [0, 1], outputRange: [1, 0] }), transform: [{ rotate: O[e].interpolate({ inputRange: [0, 1], outputRange: ["0deg", "-2deg"] }) }] };
                                },
                                o = [],
                                s = c.Z.reducedMotionEnabled ? a.Z : i.Z.View;
                            for (let i = 0; i < b.length; i += 1) {
                                const a = b[i],
                                    l = c.Z.reducedMotionEnabled ? void 0 : t(i),
                                    d = r.createElement(s, { key: i, ref: e(i), style: l }, r.createElement(r.Fragment, { key: n(a) }, _(a)));
                                o.push(d);
                            }
                            return (z.current = o.length), o;
                        }, [O, n, b, _]),
                        J = r.useCallback(
                            ({ index: e, shouldSavePosition: t }) => {
                                const n = ((e) => {
                                    if (!e || !e.current) return new f.Z(0, 0);
                                    const t = o.findDOMNode(e.current),
                                        { height: n, top: r } = t.getBoundingClientRect();
                                    return new f.Z(r, n);
                                })(H);
                                V({ positions: [{ id: b[e].entryId, rectangle: n }], viewport: n }), t && Y(e);
                            },
                            [b, V, Y],
                        ),
                        K = r.useCallback(
                            ({ index: e, intersectionRatio: t }) => {
                                e === z.current - 1 && t >= p.xn && L.scribeAction("reached_end"), e !== T && 1 === t && (D(e), J({ index: e, shouldSavePosition: !0 }));
                            },
                            [L, J, z, T],
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
                                t > e ? L.scribeAction("scroll_left") : t < e && L.scribeAction("scroll_right");
                            },
                            [L],
                        );
                    if (
                        (r.useEffect(() => {
                            const e = j.current[T];
                            if (!c.Z.reducedMotionEnabled && e) {
                                const t = e.getBoundingClientRect().height;
                                F.setValue(t);
                            }
                        }, [q, T, F]),
                        !b.length)
                    )
                        return y();
                    const W = r.createElement(v.H.Provider, { value: { handleNextSlide: Q } }, r.createElement(d.Z, { childrenStyle: R.children, onScroll: U, onVisibleRangeChange: K, ref: H, scrollToCenter: !0, style: c.Z.reducedMotionEnabled ? R.root : R.rootInheritHeight, visibleItemIndex: T, withAddedNavButtonClickArea: !0 }, G));
                    return c.Z.reducedMotionEnabled ? W : r.createElement(i.Z.View, { style: [R.root, { height: F }] }, W);
                }),
                R = l.default.create((e) => ({ root: { marginHorizontal: e.spaces.space4, marginBottom: e.componentDimensions.gutterVertical }, rootInheritHeight: { height: "inherit" }, children: { overflowY: "hidden", scrollSnapAlign: "center", scrollSnapStop: "always", width: "100%" } })),
                S = b;
        },
        858440: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(878052),
                o = n(202784);
            function i() {
                var e = (0, o.useState)(() => r.Z.get("window")),
                    t = e[0],
                    n = e[1];
                return (
                    (0, o.useEffect)(() => {
                        function e(e) {
                            var t = e.window;
                            null != t && n(t);
                        }
                        return (
                            r.Z.addEventListener("change", e),
                            n(r.Z.get("window")),
                            () => {
                                r.Z.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    t
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.CarouselScroller.85a4356a.js.map
