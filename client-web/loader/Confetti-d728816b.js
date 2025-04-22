"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Confetti-d728816b"],
    {
        563747: (e, t, n) => {
            n.d(t, { Xz: () => B, xQ: () => N, U2: () => V });
            var r = n(696995),
                o = n(202784),
                i = n(192467),
                a = n(7962),
                s = n.n(a),
                c = n(714616),
                l = n(200357),
                u = n(605721),
                f = n(936386),
                d = n.n(f);
            function p(e) {
                let { debounce: t, scroll: n, polyfill: r, offsetSize: i } = void 0 === e ? { debounce: 0, scroll: !1, offsetSize: !1 } : e;
                const a = r || ("undefined" == typeof window ? class {} : window.ResizeObserver);
                if (!a) throw new Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");
                const [s, c] = (0, o.useState)({ left: 0, top: 0, width: 0, height: 0, bottom: 0, right: 0, x: 0, y: 0 }),
                    l = (0, o.useRef)({ element: null, scrollContainers: null, resizeObserver: null, lastBounds: s }),
                    u = t ? ("number" == typeof t ? t : t.scroll) : null,
                    f = t ? ("number" == typeof t ? t : t.resize) : null,
                    p = (0, o.useRef)(!1);
                (0, o.useEffect)(
                    () => (
                        (p.current = !0),
                        () => {
                            p.current = !1;
                        }
                    ),
                );
                const [m, b, g] = (0, o.useMemo)(() => {
                    const e = () => {
                        if (!l.current.element) return;
                        const { left: e, top: t, width: n, height: r, bottom: o, right: a, x: s, y: u } = l.current.element.getBoundingClientRect(),
                            f = { left: e, top: t, width: n, height: r, bottom: o, right: a, x: s, y: u };
                        l.current.element instanceof HTMLElement && i && ((f.height = l.current.element.offsetHeight), (f.width = l.current.element.offsetWidth)), Object.freeze(f), p.current && !v(l.current.lastBounds, f) && c((l.current.lastBounds = f));
                    };
                    return [e, f ? d()(e, f) : e, u ? d()(e, u) : e];
                }, [c, i, u, f]);
                function y() {
                    l.current.scrollContainers && (l.current.scrollContainers.forEach((e) => e.removeEventListener("scroll", g, !0)), (l.current.scrollContainers = null)), l.current.resizeObserver && (l.current.resizeObserver.disconnect(), (l.current.resizeObserver = null));
                }
                function w() {
                    l.current.element && ((l.current.resizeObserver = new a(g)), l.current.resizeObserver.observe(l.current.element), n && l.current.scrollContainers && l.current.scrollContainers.forEach((e) => e.addEventListener("scroll", g, { capture: !0, passive: !0 })));
                }
                var _, C, P;
                return (
                    (_ = g),
                    (C = Boolean(n)),
                    (0, o.useEffect)(() => {
                        if (C) {
                            const e = _;
                            return (
                                window.addEventListener("scroll", e, { capture: !0, passive: !0 }),
                                () => {
                                    window.removeEventListener("scroll", e, !0);
                                }
                            );
                        }
                    }, [_, C]),
                    (P = b),
                    (0, o.useEffect)(() => {
                        const e = P;
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [P]),
                    (0, o.useEffect)(() => {
                        y(), w();
                    }, [n, g, b]),
                    (0, o.useEffect)(() => y, []),
                    [
                        (e) => {
                            e && e !== l.current.element && (y(), (l.current.element = e), (l.current.scrollContainers = h(e)), w());
                        },
                        s,
                        m,
                    ]
                );
            }
            function h(e) {
                const t = [];
                if (!e || e === document.body) return t;
                const { overflow: n, overflowX: r, overflowY: o } = window.getComputedStyle(e);
                return [n, r, o].some((e) => "auto" === e || "scroll" === e) && t.push(e), [...t, ...h(e.parentElement)];
            }
            const m = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
                v = (e, t) => m.every((n) => e[n] === t[n]);
            const b = {
                obj: (e) => e === Object(e) && !b.arr(e) && "function" != typeof e,
                fun: (e) => "function" == typeof e,
                str: (e) => "string" == typeof e,
                num: (e) => "number" == typeof e,
                und: (e) => void 0 === e,
                arr: (e) => Array.isArray(e),
                equ(e, t) {
                    if (typeof e != typeof t || !!e != !!t) return !1;
                    if (b.str(e) || b.num(e) || b.obj(e)) return e === t;
                    if (b.arr(e) && e == t) return !0;
                    let n;
                    for (n in e) if (!(n in t)) return !1;
                    for (n in t) if (e[n] !== t[n]) return !1;
                    return !b.und(n) || e === t;
                },
            };
            function g(e) {
                return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
            }
            function y(e, t, n, r) {
                const o = n.get(t);
                o && (n.delete(t), 0 === n.size && (e.delete(r), o.target.releasePointerCapture(r)));
            }
            function w(e) {
                const t = new r.Vector3();
                function n(e) {
                    return e.filter((e) =>
                        ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
                            var n;
                            return null == (n = e.__r3f) ? void 0 : n.handlers["onPointer" + t];
                        }),
                    );
                }
                function o(t) {
                    const { internal: n } = e.getState();
                    Array.from(n.hovered.values()).forEach((e) => {
                        if (!t.length || !t.find((t) => t.object === e.object && t.index === e.index && t.instanceId === e.instanceId)) {
                            const r = e.eventObject.__r3f,
                                o = null == r ? void 0 : r.handlers;
                            if ((n.hovered.delete(g(e)), null != r && r.eventCount)) {
                                const n = { ...e, intersections: t || [] };
                                null == o.onPointerOut || o.onPointerOut(n), null == o.onPointerLeave || o.onPointerLeave(n);
                            }
                        }
                    });
                }
                function i(e, t) {
                    t.forEach((t) => {
                        var n;
                        return null == (n = t.__r3f) || null == n.handlers.onPointerMissed ? void 0 : n.handlers.onPointerMissed(e);
                    });
                }
                return {
                    handlePointer: (r) => {
                        switch (r) {
                            case "onPointerLeave":
                            case "onPointerCancel":
                                return () => o([]);
                            case "onLostPointerCapture":
                                return (t) => {
                                    const { internal: n } = e.getState();
                                    "pointerId" in t && !n.capturedMap.has(t.pointerId) && (n.capturedMap.delete(t.pointerId), o([]));
                                };
                        }
                        return (a) => {
                            const { onPointerMissed: s, internal: c } = e.getState();
                            !(function (t) {
                                var n, r, o, i;
                                const a = e.getState(),
                                    { raycaster: s, mouse: c, camera: l, size: u } = a,
                                    f = null == s.computeOffsets ? void 0 : s.computeOffsets(t, a),
                                    d = null != (n = null == f ? void 0 : f.offsetX) ? n : t.offsetX,
                                    p = null != (r = null == f ? void 0 : f.offsetY) ? r : t.offsetY,
                                    h = null != (o = null == f ? void 0 : f.width) ? o : u.width,
                                    m = null != (i = null == f ? void 0 : f.height) ? i : u.height;
                                c.set((d / h) * 2 - 1, (-p / m) * 2 + 1), s.setFromCamera(c, l);
                            })(a),
                                (c.lastEvent.current = a);
                            const l = "onPointerMove" === r,
                                u = "onClick" === r || "onContextMenu" === r || "onDoubleClick" === r,
                                f = (function (t, n) {
                                    const { internal: r } = e.getState();
                                    if ("pointerId" in n && r.capturedMap.has(n.pointerId)) for (let e of r.capturedMap.get(n.pointerId).values()) t.push(e.intersection);
                                    return t;
                                })(
                                    (function (t) {
                                        const n = e.getState(),
                                            { raycaster: r, internal: o } = n;
                                        if (!r.enabled) return [];
                                        const i = new Set(),
                                            a = [],
                                            s = t ? t(o.interaction) : o.interaction;
                                        let c = r.intersectObjects(s, !0).filter((e) => {
                                            const t = g(e);
                                            return !i.has(t) && (i.add(t), !0);
                                        });
                                        r.filter && (c = r.filter(c, n));
                                        for (const e of c) {
                                            let t = e.object;
                                            for (; t; ) {
                                                var l;
                                                null != (l = t.__r3f) && l.eventCount && a.push({ ...e, eventObject: t }), (t = t.parent);
                                            }
                                        }
                                        return a;
                                    })(l ? n : void 0),
                                    a,
                                ),
                                d = u
                                    ? (function (t) {
                                          const { internal: n } = e.getState(),
                                              r = t.offsetX - n.initialClick[0],
                                              o = t.offsetY - n.initialClick[1];
                                          return Math.round(Math.sqrt(r * r + o * o));
                                      })(a)
                                    : 0;
                            "onPointerDown" === r && ((c.initialClick = [a.offsetX, a.offsetY]), (c.initialHits = f.map((e) => e.eventObject))),
                                u && !f.length && d <= 2 && (i(a, c.interaction), s && s(a)),
                                l && o(f),
                                (function (n, r, i, a) {
                                    const { raycaster: s, mouse: c, camera: l, internal: u } = e.getState();
                                    if (n.length) {
                                        const e = t.set(c.x, c.y, 0).unproject(l),
                                            f = { stopped: !1 };
                                        for (const t of n) {
                                            const d = (e) => {
                                                    var n, r;
                                                    return null != (n = null == (r = u.capturedMap.get(e)) ? void 0 : r.has(t.eventObject)) && n;
                                                },
                                                p = (e) => {
                                                    const n = { intersection: t, target: r.target };
                                                    u.capturedMap.has(e) ? u.capturedMap.get(e).set(t.eventObject, n) : u.capturedMap.set(e, new Map([[t.eventObject, n]])), r.target.setPointerCapture(e);
                                                },
                                                h = (e) => {
                                                    const n = u.capturedMap.get(e);
                                                    n && y(u.capturedMap, t.eventObject, n, e);
                                                };
                                            let m = {};
                                            for (let e in r) {
                                                let t = r[e];
                                                "function" != typeof t && (m[e] = t);
                                            }
                                            let v = {
                                                ...t,
                                                ...m,
                                                spaceX: c.x,
                                                spaceY: c.y,
                                                intersections: n,
                                                stopped: f.stopped,
                                                delta: i,
                                                unprojectedPoint: e,
                                                ray: s.ray,
                                                camera: l,
                                                stopPropagation: () => {
                                                    const e = "pointerId" in r && u.capturedMap.get(r.pointerId);
                                                    (!e || e.has(t.eventObject)) && ((v.stopped = f.stopped = !0), u.hovered.size && Array.from(u.hovered.values()).find((e) => e.eventObject === t.eventObject)) && o([...n.slice(0, n.indexOf(t)), t]);
                                                },
                                                target: { hasPointerCapture: d, setPointerCapture: p, releasePointerCapture: h },
                                                currentTarget: { hasPointerCapture: d, setPointerCapture: p, releasePointerCapture: h },
                                                sourceEvent: r,
                                                nativeEvent: r,
                                            };
                                            if ((a(v), !0 === f.stopped)) break;
                                        }
                                    }
                                })(f, a, d, (e) => {
                                    const t = e.eventObject,
                                        n = t.__r3f,
                                        o = null == n ? void 0 : n.handlers;
                                    if (null != n && n.eventCount)
                                        if (l) {
                                            if (o.onPointerOver || o.onPointerEnter || o.onPointerOut || o.onPointerLeave) {
                                                const t = g(e),
                                                    n = c.hovered.get(t);
                                                n ? n.stopped && e.stopPropagation() : (c.hovered.set(t, e), null == o.onPointerOver || o.onPointerOver(e), null == o.onPointerEnter || o.onPointerEnter(e));
                                            }
                                            null == o.onPointerMove || o.onPointerMove(e);
                                        } else {
                                            const n = o[r];
                                            n
                                                ? (u && !c.initialHits.includes(t)) ||
                                                  (i(
                                                      a,
                                                      c.interaction.filter((e) => !c.initialHits.includes(e)),
                                                  ),
                                                  n(e))
                                                : u &&
                                                  c.initialHits.includes(t) &&
                                                  i(
                                                      a,
                                                      c.interaction.filter((e) => !c.initialHits.includes(e)),
                                                  );
                                        }
                                });
                        };
                    },
                };
            }
            const _ = (e) => e && !!e.getState,
                C = (e, t) => {
                    var n, r;
                    return { root: _(e) ? e : null != (n = null == (r = e.__r3f) ? void 0 : r.root) ? n : t.__r3f.root, container: _(e) ? e.getState().scene : e };
                },
                P = "__default",
                j = {};
            let E = {};
            function O(e, t) {
                const n = e;
                return ((null != t && t.primitive) || !n.__r3f) && (n.__r3f = { root: null, memoizedProps: {}, eventCount: 0, handlers: {}, objects: [], parent: null, ...t }), e;
            }
            const M = (e) => e && e.isOrthographicCamera;
            function z(e) {
                return Array.isArray(e) ? Math.min(Math.max(e[0], window.devicePixelRatio), e[1]) : e;
            }
            const S = o.createContext(null);
            let x,
                k = [],
                A = [],
                T = [];
            function L(e, t) {
                for (x = 0; x < e.length; x++) e[x](t);
            }
            function I(e, t) {
                let n = t.clock.getDelta();
                for ("never" === t.frameloop && "number" == typeof e && ((n = e - t.clock.elapsedTime), (t.clock.oldTime = t.clock.elapsedTime), (t.clock.elapsedTime = e)), x = 0; x < t.internal.subscribers.length; x++) t.internal.subscribers[x].ref.current(t, n);
                return !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera), (t.internal.frames = Math.max(0, t.internal.frames - 1)), "always" === t.frameloop ? 1 : t.internal.frames;
            }
            function D(e) {
                const { handlePointer: t } = w(e),
                    n = { onClick: ["click", !1], onContextMenu: ["contextmenu", !1], onDoubleClick: ["dblclick", !1], onWheel: ["wheel", !0], onPointerDown: ["pointerdown", !0], onPointerUp: ["pointerup", !0], onPointerLeave: ["pointerleave", !0], onPointerMove: ["pointermove", !0], onPointerCancel: ["pointercancel", !0], onLostPointerCapture: ["lostpointercapture", !0] };
                return {
                    connected: !1,
                    handlers: Object.keys(n).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
                    connect: (t) => {
                        var r;
                        const { set: o, events: i } = e.getState();
                        null == i.disconnect || i.disconnect(),
                            o((e) => ({ events: { ...e.events, connected: t } })),
                            Object.entries(null != (r = null == i ? void 0 : i.handlers) ? r : []).forEach(([e, r]) => {
                                const [o, i] = n[e];
                                t.addEventListener(o, r, { passive: i });
                            });
                    },
                    disconnect: () => {
                        const { set: t, events: r } = e.getState();
                        var o;
                        r.connected &&
                            (Object.entries(null != (o = r.handlers) ? o : []).forEach(([e, t]) => {
                                if (r && r.connected instanceof HTMLElement) {
                                    const [o] = n[e];
                                    r.connected.removeEventListener(o, t);
                                }
                            }),
                            t((e) => ({ events: { ...e.events, connected: !1 } })));
                    },
                };
            }
            const R = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect;
            function F({ set: e }) {
                return R(() => (e(new Promise(() => null)), () => e(!1)), []), null;
            }
            class H extends o.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: !1 });
                }
                componentDidCatch(e) {
                    this.props.set(e);
                }
                render() {
                    return this.state.error ? null : this.props.children;
                }
            }
            H.getDerivedStateFromError = () => ({ error: !0 });
            const B = o.forwardRef(function ({ children: e, fallback: t, tabIndex: n, resize: a, id: s, style: c, className: l, events: f, ...d }, h) {
                const m = (function (e) {
                        const t = o.useRef(e);
                        return (
                            o.useLayoutEffect(() => {
                                t.current = e;
                            }, [e]),
                            (...e) => (null == t.current ? void 0 : t.current(...e))
                        );
                    })(d.onPointerMissed),
                    [v, { width: g, height: y }] = p({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...a }),
                    w = o.useRef(null),
                    [_, C] = o.useState(!1),
                    [P, j] = o.useState(!1);
                if (_) throw _;
                if (P) throw P;
                return (
                    R(() => {
                        g > 0 &&
                            y > 0 &&
                            (function (e, t, { gl: n, size: a, mode: s = q[1], events: c, onCreated: l, ...u } = {}) {
                                var f, d, p, h, m;
                                a || (a = { width: null != (d = null == (p = t.parentElement) ? void 0 : p.clientWidth) ? d : 0, height: null != (h = null == (m = t.parentElement) ? void 0 : m.clientHeight) ? h : 0 });
                                let v = X.get(t),
                                    g = null == v ? void 0 : v.fiber,
                                    y = null == v ? void 0 : v.store,
                                    w = null == (f = y) ? void 0 : f.getState();
                                if (g && w) {
                                    void 0 === u.dpr || b.equ(w.viewport.dpr, z(u.dpr)) || w.setDpr(u.dpr), (w.size.width === a.width && w.size.height === a.height) || w.setSize(a.width, a.height), w.frameloop !== u.frameloop && w.setFrameloop(u.frameloop);
                                    u.linear !== w.internal.lastProps.linear && (ee(t), (g = void 0));
                                }
                                if (!g) {
                                    const e = J(n, t);
                                    u.vr && ((e.xr.enabled = !0), e.setAnimationLoop((e) => $(e, !0))),
                                        (y = ((e, t, n, a) => {
                                            const { gl: s, size: c, shadows: l = !1, linear: u = !1, flat: f = !1, vr: d = !1, orthographic: p = !1, frameloop: h = "always", dpr: m = 1, performance: v, clock: b = new r.Clock(), raycaster: g, camera: y, onPointerMissed: w } = a;
                                            l && ((s.shadowMap.enabled = !0), "object" == typeof l ? Object.assign(s.shadowMap, l) : (s.shadowMap.type = r.PCFSoftShadowMap)), u && (s.outputEncoding = r.LinearEncoding), f && (s.toneMapping = r.NoToneMapping), "never" === h && (b.stop(), (b.elapsedTime = 0));
                                            const _ = (0, i.Z)((i, c) => {
                                                    const l = new r.Raycaster(),
                                                        { params: _, ...C } = g || {};
                                                    e(l, { enabled: !0, ...C, params: { ...l.params, ..._ } });
                                                    const P = y instanceof r.Camera,
                                                        j = P ? y : p ? new r.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3) : new r.PerspectiveCamera(75, 0, 0.1, 1e3);
                                                    P || ((j.position.z = 5), y && e(j, y), (null != y && y.rotation) || j.lookAt(0, 0, 0));
                                                    const E = z(m),
                                                        S = new r.Vector3(),
                                                        x = new r.Vector3(),
                                                        k = new r.Vector3();
                                                    function A(e = c().camera, t = x, n = c().size) {
                                                        const { width: o, height: i } = n,
                                                            a = o / i;
                                                        t instanceof r.Vector3 ? k.copy(t) : k.set(...t);
                                                        const s = e.getWorldPosition(S).distanceTo(k);
                                                        if (M(e)) return { width: o / e.zoom, height: i / e.zoom, factor: 1, distance: s, aspect: a };
                                                        {
                                                            const t = (e.fov * Math.PI) / 180,
                                                                n = 2 * Math.tan(t / 2) * s,
                                                                r = n * (o / i);
                                                            return { width: r, height: n, factor: o / r, distance: s, aspect: a };
                                                        }
                                                    }
                                                    let T;
                                                    const L = (e) => i((t) => ({ performance: { ...t.performance, current: e } }));
                                                    return {
                                                        gl: s,
                                                        set: i,
                                                        get: c,
                                                        invalidate: () => t(c()),
                                                        advance: (e, t) => n(e, t, c()),
                                                        linear: u,
                                                        flat: f,
                                                        scene: O(new r.Scene()),
                                                        camera: j,
                                                        controls: null,
                                                        raycaster: l,
                                                        clock: b,
                                                        mouse: new r.Vector2(),
                                                        vr: d,
                                                        frameloop: h,
                                                        onPointerMissed: w,
                                                        performance: {
                                                            current: 1,
                                                            min: 0.5,
                                                            max: 1,
                                                            debounce: 200,
                                                            ...v,
                                                            regress: () => {
                                                                const e = c();
                                                                T && clearTimeout(T), e.performance.current !== e.performance.min && L(e.performance.min), (T = setTimeout(() => L(c().performance.max), e.performance.debounce));
                                                            },
                                                        },
                                                        size: { width: 0, height: 0 },
                                                        viewport: { initialDpr: E, dpr: E, width: 0, height: 0, aspect: 0, distance: 0, factor: 0, getCurrentViewport: A },
                                                        setSize: (e, t) => {
                                                            const n = { width: e, height: t };
                                                            i((e) => ({ size: n, viewport: { ...e.viewport, ...A(j, x, n) } }));
                                                        },
                                                        setDpr: (e) => i((t) => ({ viewport: { ...t.viewport, dpr: z(e) } })),
                                                        setFrameloop: (e = "always") => i(() => ({ frameloop: e })),
                                                        events: { connected: !1 },
                                                        internal: {
                                                            active: !1,
                                                            priority: 0,
                                                            frames: 0,
                                                            lastProps: a,
                                                            lastEvent: o.createRef(),
                                                            interaction: [],
                                                            hovered: new Map(),
                                                            subscribers: [],
                                                            initialClick: [0, 0],
                                                            initialHits: [],
                                                            capturedMap: new Map(),
                                                            subscribe: (e, t = 0) => (
                                                                i(({ internal: n }) => ({ internal: { ...n, priority: n.priority + (t > 0 ? 1 : 0), subscribers: [...n.subscribers, { ref: e, priority: t }].sort((e, t) => e.priority - t.priority) } })),
                                                                () => {
                                                                    i(({ internal: n }) => ({ internal: { ...n, priority: n.priority - (t > 0 ? 1 : 0), subscribers: n.subscribers.filter((t) => t.ref !== e) } }));
                                                                }
                                                            ),
                                                        },
                                                    };
                                                }),
                                                C = _.getState();
                                            let P = C.size,
                                                j = C.viewport.dpr;
                                            return (
                                                _.subscribe(() => {
                                                    const { camera: e, size: t, viewport: n, internal: o } = _.getState();
                                                    (t === P && n.dpr === j) || (e.manual || o.lastProps.camera instanceof r.Camera || (M(e) ? ((e.left = t.width / -2), (e.right = t.width / 2), (e.top = t.height / 2), (e.bottom = t.height / -2)) : (e.aspect = t.width / t.height), e.updateProjectionMatrix(), e.updateMatrixWorld()), s.setPixelRatio(n.dpr), s.setSize(t.width, t.height), (P = t), (j = n.dpr));
                                                }),
                                                c && C.setSize(c.width, c.height),
                                                _.subscribe((e) => t(e)),
                                                _
                                            );
                                        })(Q, Y, $, { gl: e, size: a, ...u }));
                                    const l = y.getState();
                                    (g = Z.createContainer(y, q.indexOf(s), !1, null)), X.set(t, { fiber: g, store: y }), c && l.set({ events: c(y) });
                                }
                                if (y && g) return Z.updateContainer(o.createElement(K, { store: y, element: e, onCreated: l, target: t }), g, null, () => {}), y;
                                throw "Error creating root!";
                            })(o.createElement(H, { set: j }, o.createElement(o.Suspense, { fallback: o.createElement(F, { set: C }) }, e)), w.current, { ...d, size: { width: g, height: y }, onPointerMissed: m, events: f || D });
                    }, [g, y, e, m]),
                    R(() => {
                        const e = w.current;
                        return () => ee(e);
                    }, []),
                    o.createElement("div", { ref: v, id: s, className: l, tabIndex: n, style: { position: "relative", width: "100%", height: "100%", overflow: "hidden", ...c } }, o.createElement("canvas", { ref: (0, u.Z)([w, h]), style: { display: "block" } }, t))
                );
            });
            function W() {
                const e = o.useContext(S);
                if (!e) throw "R3F hooks can only be used within the Canvas component!";
                return e;
            }
            function N(e, t = 0) {
                const n = W().getState().internal.subscribe,
                    r = o.useRef(e);
                return (
                    o.useLayoutEffect(() => {
                        r.current = e;
                    }, [e]),
                    o.useLayoutEffect(() => n(r, t), [t, n]),
                    null
                );
            }
            function G(e) {
                const t = { nodes: {}, materials: {} };
                return (
                    e &&
                        e.traverse((e) => {
                            e.name && (t.nodes[e.name] = e), e.material && !t.materials[e.material.name] && (t.materials[e.material.name] = e.material);
                        }),
                    t
                );
            }
            function U(e, t) {
                return function (n, ...r) {
                    const o = new n();
                    return (
                        e && e(o),
                        Promise.all(
                            r.map(
                                (e) =>
                                    new Promise((n, r) =>
                                        o.load(
                                            e,
                                            (e) => {
                                                e.scene && Object.assign(e, G(e.scene)), n(e);
                                            },
                                            t,
                                            (t) => r(`Could not load ${e}: ${t.message}`),
                                        ),
                                    ),
                            ),
                        )
                    );
                };
            }
            function V(e, t, n, r) {
                const o = Array.isArray(t) ? t : [t],
                    i = (0, l.G)(U(n, r), e, ...o);
                return Array.isArray(t) ? i : i[0];
            }
            (V.preload = function (e, t, n) {
                const r = Array.isArray(t) ? t : [t];
                return l.G.preload(U(n), e, ...r);
            }),
                (V.clear = function (e, t) {
                    const n = Array.isArray(t) ? t : [t];
                    return l.G.clear(e, ...n);
                });
            const X = new Map(),
                q = ["legacy", "blocking", "concurrent"],
                { invalidate: Y, advance: $ } = (function (e) {
                    let t,
                        n = !1;
                    function r(o) {
                        if (
                            ((n = !0),
                            (t = 0),
                            L(k, o),
                            e.forEach((e) => {
                                const n = e.store.getState();
                                n.internal.active && ("always" === n.frameloop || n.internal.frames > 0) && (t += I(o, n));
                            }),
                            L(A, o),
                            t > 0)
                        )
                            return requestAnimationFrame(r);
                        L(T, o), (n = !1);
                    }
                    return {
                        loop: r,
                        invalidate: function t(o) {
                            if (!o) return e.forEach((e) => t(e.store.getState()));
                            !o.vr && o.internal.active && "never" !== o.frameloop && ((o.internal.frames = Math.min(60, o.internal.frames + 1)), n || ((n = !0), requestAnimationFrame(r)));
                        },
                        advance: function (t, n = !0, r) {
                            n && L(k, t), r ? I(t, r) : e.forEach((e) => I(t, e.store.getState())), n && L(A, t);
                        },
                    };
                })(X),
                { reconciler: Z, applyProps: Q } = (function () {
                    function e(e, { children: t, key: n, ref: r, ...o }, { children: i, key: a, ref: s, ...c } = {}, l = !1) {
                        var u;
                        const f = null != (u = null == e ? void 0 : e.__r3f) ? u : {},
                            d = Object.entries(o),
                            p = [];
                        if (l) {
                            const e = Object.keys(c);
                            for (let t = 0; t < e.length; t++) o.hasOwnProperty(e[t]) || d.unshift([e[t], P + "remove"]);
                        }
                        d.forEach(([t, n]) => {
                            var r, o, i;
                            if (null != (r = e.__r3f) && r.primitive && "object" === t) return;
                            if (((o = n), (i = c[t]), (b.arr(o) && b.equ(o, i)) || o === i)) return;
                            if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t)) return p.push([t, n, !0, []]);
                            let a = [];
                            t.includes("-") && (a = t.split("-")), p.push([t, n, !1, a]);
                        });
                        const h = { ...o };
                        return f.memoizedProps && f.memoizedProps.args && (h.args = f.memoizedProps.args), f.memoizedProps && f.memoizedProps.attach && (h.attach = f.memoizedProps.attach), { accumulative: l, memoized: h, changes: p };
                    }
                    function t(t, i) {
                        var a, s, c;
                        const l = null != (a = null == t ? void 0 : t.__r3f) ? a : {},
                            u = l.root,
                            f = null != (s = null == u || null == u.getState ? void 0 : u.getState()) ? s : {},
                            { memoized: d, changes: p } = (h = i) && h.memoized && h.changes ? i : e(t, i);
                        var h;
                        const m = l.eventCount;
                        if (
                            (t.__r3f && (t.__r3f.memoizedProps = d),
                            p.forEach(([e, o, i, a]) => {
                                var s;
                                let c = t,
                                    u = c[e];
                                if (a.length && ((u = a.reduce((e, t) => e[t], t)), !u || !u.set)) {
                                    const [n, ...r] = a.reverse();
                                    (c = r.reverse().reduce((e, t) => e[t], t)), (e = n);
                                }
                                if (o === P + "remove")
                                    if (u && u.constructor) o = new u.constructor(d.args);
                                    else if (c.constructor) {
                                        const e = new c.constructor(c.__r3f.memoizedProps.args);
                                        (o = e[u]), e.dispose && e.dispose();
                                    } else o = 0;
                                const p = (null == f || null == (s = f.gl) ? void 0 : s.outputEncoding) === r.LinearEncoding;
                                if (i) o ? (l.handlers[e] = o) : delete l.handlers[e], (l.eventCount = Object.keys(l.handlers).length);
                                else if (u && u.set && (u.copy || u instanceof r.Layers)) {
                                    if (Array.isArray(o)) u.fromArray ? u.fromArray(o) : u.set(...o);
                                    else if (u.copy && o && o.constructor && u.constructor.name === o.constructor.name) u.copy(o);
                                    else if (void 0 !== o) {
                                        const e = u instanceof r.Color;
                                        !e && u.setScalar ? u.setScalar(o) : u instanceof r.Layers && o instanceof r.Layers ? (u.mask = o.mask) : u.set(o), !p && e && u.convertSRGBToLinear();
                                    }
                                } else (c[e] = o), !p && c[e] instanceof r.Texture && (c[e].encoding = r.sRGBEncoding);
                                n(t);
                            }),
                            l.parent && f.internal && t.raycast && m !== l.eventCount)
                        ) {
                            const e = f.internal.interaction.indexOf(t);
                            e > -1 && f.internal.interaction.splice(e, 1), l.eventCount && f.internal.interaction.push(t);
                        }
                        return p.length && null != (c = t.__r3f) && c.parent && o(t), t;
                    }
                    function n(e) {
                        var t, n;
                        const r = null == (t = e.__r3f) || null == (n = t.root) || null == n.getState ? void 0 : n.getState();
                        r && 0 === r.internal.frames && r.invalidate();
                    }
                    function o(e) {
                        null == e.onUpdate || e.onUpdate(e);
                    }
                    function i(e, { args: n = [], ...o }, i, a, s) {
                        let c,
                            l = `${e[0].toUpperCase()}${e.slice(1)}`;
                        if (!_(i) && s) {
                            const e = (t) => (t.return ? e(t.return) : t.stateNode && t.stateNode.containerInfo);
                            i = e(s);
                        }
                        if (!i || !_(i)) throw `No valid root for ${l}!`;
                        if ("primitive" === e) {
                            if (void 0 === o.object) throw "Primitives without 'object' are invalid!";
                            c = O(o.object, { root: i, primitive: !0 });
                        } else {
                            const e = E[l] || r[l];
                            if (!e) throw `${l} is not part of the THREE namespace! Did you forget to extend? See: https://github.com/pmndrs/react-three-fiber/blob/master/markdown/api.md#using-3rd-party-objects-declaratively`;
                            if (!Array.isArray(n)) throw "The args prop must be an array!";
                            c = O(new e(...n), { root: i, memoizedProps: { args: 0 === n.length ? null : n } });
                        }
                        return "attachFns" in o || (l.endsWith("Geometry") ? (o = { attach: "geometry", ...o }) : l.endsWith("Material") && (o = { attach: "material", ...o })), t(c, o), c;
                    }
                    function a(e, t) {
                        let r = !1;
                        if (t) {
                            if (t.attachArray) b.arr(e[t.attachArray]) || (e[t.attachArray] = []), e[t.attachArray].push(t);
                            else if (t.attachObject) b.obj(e[t.attachObject[0]]) || (e[t.attachObject[0]] = {}), (e[t.attachObject[0]][t.attachObject[1]] = t);
                            else if (t.attach && !b.fun(t.attach)) e[t.attach] = t;
                            else if (b.arr(t.attachFns)) {
                                const [n] = t.attachFns;
                                b.str(n) && b.fun(e[n]) ? e[n](t) : b.fun(n) && n(t, e);
                            } else t.isObject3D && e.isObject3D && (e.add(t), (r = !0));
                            r || e.__r3f.objects.push(t), t.__r3f || O(t, {}), (t.__r3f.parent = e), o(t), n(t);
                        }
                    }
                    function l(e, t, r) {
                        let i = !1;
                        if (t) {
                            if (t.attachArray) {
                                let n = e[t.attachArray];
                                b.arr(n) || ((e[t.attachArray] = []), (n = e[t.attachArray])), n.splice(n.indexOf(r), 0, t);
                            } else {
                                if (t.attachObject || (t.attach && !b.fun(t.attach))) return a(e, t);
                                if (t.isObject3D && e.isObject3D) {
                                    (t.parent = e), t.dispatchEvent({ type: "added" });
                                    const n = e.children.filter((e) => e !== t),
                                        o = n.indexOf(r);
                                    (e.children = [...n.slice(0, o), t, ...n.slice(o)]), (i = !0);
                                }
                            }
                            i || e.__r3f.objects.push(t), t.__r3f || O(t, {}), (t.__r3f.parent = e), o(t), n(t);
                        }
                    }
                    function u(e, t, n = !1) {
                        e && [...e].forEach((e) => f(t, e, n));
                    }
                    function f(e, t, r) {
                        if (t) {
                            var o, i;
                            if ((t.__r3f && (t.__r3f.parent = null), null != (o = e.__r3f) && o.objects && (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)), t.attachArray)) e[t.attachArray] = e[t.attachArray].filter((e) => e !== t);
                            else if (t.attachObject) delete e[t.attachObject[0]][t.attachObject[1]];
                            else if (t.attach && !b.fun(t.attach) && e[t.attach] === t) e[t.attach] = null;
                            else if (b.arr(t.attachFns)) {
                                const [, n] = t.attachFns;
                                b.str(n) && b.fun(e[n]) ? e[n](t) : b.fun(n) && n(t, e);
                            } else if (t.isObject3D && e.isObject3D) {
                                var a;
                                e.remove(t),
                                    null != (a = t.__r3f) &&
                                        a.root &&
                                        (function (e, t) {
                                            const { internal: n } = e.getState();
                                            (n.interaction = n.interaction.filter((e) => e !== t)),
                                                (n.initialHits = n.initialHits.filter((e) => e !== t)),
                                                n.hovered.forEach((e, r) => {
                                                    (e.eventObject !== t && e.object !== t) || n.hovered.delete(r);
                                                }),
                                                n.capturedMap.forEach((e, r) => {
                                                    y(n.capturedMap, t, e, r);
                                                });
                                        })(t.__r3f.root, t);
                            }
                            const l = null == (i = t.__r3f) ? void 0 : i.primitive,
                                f = void 0 === r ? null !== t.dispose && !l : r;
                            var s;
                            if (!l) u(null == (s = t.__r3f) ? void 0 : s.objects, t, f), u(t.children, t, f);
                            t.__r3f && (delete t.__r3f.root, delete t.__r3f.objects, delete t.__r3f.handlers, delete t.__r3f.memoizedProps, l || delete t.__r3f),
                                f &&
                                    t.dispose &&
                                    "Scene" !== t.type &&
                                    (0, c.unstable_runWithPriority)(c.unstable_IdlePriority, () => {
                                        try {
                                            t.dispose();
                                        } catch (e) {}
                                    }),
                                n(e);
                        }
                    }
                    return {
                        reconciler: s()({
                            now: c.unstable_now,
                            createInstance: i,
                            removeChild: f,
                            appendChild: a,
                            appendInitialChild: a,
                            insertBefore: l,
                            warnsIfNotActing: !0,
                            supportsMutation: !0,
                            isPrimaryRenderer: !1,
                            scheduleTimeout: b.fun(setTimeout) ? setTimeout : void 0,
                            cancelTimeout: b.fun(clearTimeout) ? clearTimeout : void 0,
                            setTimeout: b.fun(setTimeout) ? setTimeout : void 0,
                            clearTimeout: b.fun(clearTimeout) ? clearTimeout : void 0,
                            noTimeout: -1,
                            appendChildToContainer: (e, t) => {
                                const { container: n, root: r } = C(e, t);
                                (n.__r3f.root = r), a(n, t);
                            },
                            removeChildFromContainer: (e, t) => f(C(e, t).container, t),
                            insertInContainerBefore: (e, t, n) => l(C(e, t).container, t, n),
                            prepareUpdate(t, n, r, o) {
                                if (t.__r3f.primitive && o.object && o.object !== t) return [!0];
                                {
                                    const { args: n = [], children: i, ...s } = o,
                                        { args: c = [], children: l, ...u } = r;
                                    if (!Array.isArray(n)) throw "The args prop must be an array!";
                                    if (n.some((e, t) => e !== c[t])) return [!0];
                                    const f = e(t, s, u, !0);
                                    if (f.changes.length) return [!1, f];
                                    if (t.attach && "function" != typeof t.attach) {
                                        const e = t.__r3f.parent;
                                        e && e[t.attach] !== t && a(e, t);
                                    }
                                    return null;
                                }
                            },
                            commitUpdate(e, [n, r], o, s, c, l) {
                                n
                                    ? (function (e, t, n, r) {
                                          var o;
                                          const s = null == (o = e.__r3f) ? void 0 : o.parent;
                                          if (!s) return;
                                          const c = i(t, n, e.__r3f.root);
                                          "primitive" !== t && e.children && (e.children.forEach((e) => a(c, e)), (e.children = [])), e.__r3f.objects.forEach((e) => a(c, e)), (e.__r3f.objects = []), f(s, e), a(s, c), c.raycast && c.__r3f.eventCount && c.__r3f.root.getState().internal.interaction.push(c);
                                          [r, r.alternate].forEach((e) => {
                                              null !== e && ((e.stateNode = c), e.ref && ("function" == typeof e.ref ? e.ref(c) : (e.ref.current = c)));
                                          });
                                      })(e, o, c, l)
                                    : t(e, r);
                            },
                            hideInstance(e) {
                                e.isObject3D && ((e.visible = !1), n(e));
                            },
                            unhideInstance(e, t) {
                                ((e.isObject3D && null == t.visible) || t.visible) && ((e.visible = !0), n(e));
                            },
                            hideTextInstance() {
                                throw new Error("Text is not allowed in the R3F tree.");
                            },
                            getPublicInstance: (e) => e,
                            getRootHostContext: (e) => j,
                            getChildHostContext: (e) => e,
                            createTextInstance() {},
                            finalizeInitialChildren(e) {
                                var t;
                                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {}).handlers;
                            },
                            commitMount(e) {
                                var t;
                                const n = null != (t = null == e ? void 0 : e.__r3f) ? t : {};
                                e.raycast && n.handlers && n.eventCount && e.__r3f.root.getState().internal.interaction.push(e);
                            },
                            shouldDeprioritizeSubtree: () => !1,
                            prepareForCommit: () => null,
                            preparePortalMount(e) {
                                O(e);
                            },
                            resetAfterCommit() {},
                            shouldSetTextContent: () => !1,
                            clearContainer: () => !1,
                        }),
                        applyProps: t,
                    };
                })(),
                J = (e, t) => {
                    const n = "function" == typeof e ? e(t) : e;
                    if (null != (o = n) && o.render) return n;
                    var o;
                    const i = new r.WebGLRenderer({ powerPreference: "high-performance", canvas: t, antialias: !0, alpha: !0, ...e });
                    return (i.outputEncoding = r.sRGBEncoding), (i.toneMapping = r.ACESFilmicToneMapping), e && Q(i, e), i;
                };
            function K({ store: e, element: t, onCreated: n, target: r }) {
                return (
                    o.useEffect(() => {
                        const t = e.getState();
                        t.set((e) => ({ internal: { ...e.internal, active: !0 } })), null == t.events.connect || t.events.connect(r), n && n(t);
                    }, []),
                    o.createElement(S.Provider, { value: e }, t)
                );
            }
            function ee(e, t) {
                const n = X.get(e),
                    r = null == n ? void 0 : n.fiber;
                if (r) {
                    const o = null == n ? void 0 : n.store.getState();
                    o && (o.internal.active = !1),
                        Z.updateContainer(null, r, null, () => {
                            o &&
                                setTimeout(() => {
                                    var n, r, i;
                                    null == o.events.disconnect || o.events.disconnect(),
                                        null == (n = o.gl) || null == (r = n.renderLists) || null == r.dispose || r.dispose(),
                                        null == (i = o.gl) || null == i.forceContextLoss || i.forceContextLoss(),
                                        (function (e) {
                                            e.dispose && "Scene" !== e.type && e.dispose();
                                            for (const t in e) null == t.dispose || t.dispose(), delete e[t];
                                        })(o),
                                        X.delete(e),
                                        t && t(e);
                                }, 500);
                        });
                }
            }
            Z.act;
            Z.injectIntoDevTools({ bundleType: 0, rendererPackageName: "@react-three/fiber", version: "17.0.2" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Confetti-d728816b.ec2d016a.js.map
