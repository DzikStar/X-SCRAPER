"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-32266432"],
    {
        160731: (t, n, s) => {
            s.d(n, { L: () => i });
            var e = s(417899);
            const i = (t) => ((t *= 2) < 1 ? 0.5 * (0, e.G2)(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))));
        },
        417899: (t, n, s) => {
            s.d(n, { CG: () => r, G2: () => a, XL: () => c });
            var e = s(374732),
                i = s(17070),
                o = s(226574);
            const r = (0, e._)(0.33, 1.53, 0.69, 0.99),
                a = (0, o.M)(r),
                c = (0, i.o)(a);
        },
        941469: (t, n, s) => {
            s.d(n, { Bn: () => r, X7: () => a, Z7: () => o });
            var e = s(17070),
                i = s(226574);
            const o = (t) => 1 - Math.sin(Math.acos(t)),
                r = (0, i.M)(o),
                a = (0, e.o)(o);
        },
        374732: (t, n, s) => {
            s.d(n, { _: () => a });
            var e = s(587363);
            const i = (t, n, s) => (((1 - 3 * s + 3 * n) * t + (3 * s - 6 * n)) * t + 3 * n) * t,
                o = 1e-7,
                r = 12;
            function a(t, n, s, a) {
                if (t === n && s === a) return e.Z;
                const c = (n) =>
                    (function (t, n, s, e, a) {
                        let c,
                            u,
                            h = 0;
                        do {
                            (u = n + (s - n) / 2), (c = i(u, e, a) - t), c > 0 ? (s = u) : (n = u);
                        } while (Math.abs(c) > o && ++h < r);
                        return u;
                    })(n, 0, 1, t, s);
                return (t) => (0 === t || 1 === t ? t : i(c(t), n, a));
            }
        },
        597800: (t, n, s) => {
            s.d(n, { Vv: () => o, YQ: () => i, mZ: () => r });
            var e = s(374732);
            const i = (0, e._)(0.42, 0, 1, 1),
                o = (0, e._)(0, 0, 0.58, 1),
                r = (0, e._)(0.42, 0, 0.58, 1);
        },
        17070: (t, n, s) => {
            s.d(n, { o: () => e });
            const e = (t) => (n) => (n <= 0.5 ? t(2 * n) / 2 : (2 - t(2 * (1 - n))) / 2);
        },
        226574: (t, n, s) => {
            s.d(n, { M: () => e });
            const e = (t) => (n) => 1 - t(1 - n);
        },
        129554: (t, n, s) => {
            s.d(n, { N: () => e });
            const e = (t) => Array.isArray(t) && "number" != typeof t[0];
        },
        645240: (t, n, s) => {
            s.d(n, { R: () => d });
            var e = s(479556),
                i = s(587363),
                o = s(377781),
                r = s(160731),
                a = s(417899),
                c = s(941469),
                u = s(374732),
                h = s(597800);
            const l = { linear: i.Z, easeIn: h.YQ, easeInOut: h.mZ, easeOut: h.Vv, circIn: c.Z7, circInOut: c.X7, circOut: c.Bn, backIn: a.G2, backInOut: a.XL, backOut: a.CG, anticipate: r.L },
                d = (t) => {
                    if ((0, e.qE)(t)) {
                        (0, o.k)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        const [n, s, e, i] = t;
                        return (0, u._)(n, s, e, i);
                    }
                    return "string" == typeof t ? ((0, o.k)(void 0 !== l[t], `Invalid easing type '${t}'`), l[t]) : t;
                };
        },
        778624: (t, n, s) => {
            function e(t, n, s, e = { passive: !0 }) {
                return t.addEventListener(n, s, e), () => t.removeEventListener(n, s);
            }
            s.d(n, { E: () => e });
        },
        967817: (t, n, s) => {
            s.d(n, { a: () => o });
            var e = s(778624),
                i = s(698457);
            function o(t, n, s, o) {
                return (0, e.E)(t, n, (0, i.s)(s), o);
            }
        },
        698457: (t, n, s) => {
            s.d(n, { Q: () => i, s: () => o });
            var e = s(479556);
            function i(t) {
                return { point: { x: t.pageX, y: t.pageY } };
            }
            const o = (t) => (n) => (0, e.DJ)(n) && t(n, i(n));
        },
        237202: (t, n, s) => {
            s.d(n, { Z: () => r });
            var e = s(123200);
            const i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
                o = 40;
            function r(t, n) {
                let s = !1,
                    r = !0;
                const a = { delta: 0, timestamp: 0, isProcessing: !1 },
                    c = () => (s = !0),
                    u = i.reduce(
                        (t, n) => (
                            (t[n] = (function (t) {
                                let n = new Set(),
                                    s = new Set(),
                                    e = !1,
                                    i = !1;
                                const o = new WeakSet();
                                let r = { delta: 0, timestamp: 0, isProcessing: !1 };
                                function a(n) {
                                    o.has(n) && (c.schedule(n), t()), n(r);
                                }
                                const c = {
                                    schedule: (t, i = !1, r = !1) => {
                                        const a = r && e ? n : s;
                                        return i && o.add(t), a.has(t) || a.add(t), t;
                                    },
                                    cancel: (t) => {
                                        s.delete(t), o.delete(t);
                                    },
                                    process: (t) => {
                                        (r = t), e ? (i = !0) : ((e = !0), ([n, s] = [s, n]), n.forEach(a), n.clear(), (e = !1), i && ((i = !1), c.process(t)));
                                    },
                                };
                                return c;
                            })(c)),
                            t
                        ),
                        {},
                    ),
                    { read: h, resolveKeyframes: l, update: d, preRender: m, render: p, postRender: g } = u,
                    v = () => {
                        const i = e.c.useManualTiming ? a.timestamp : performance.now();
                        (s = !1), (a.delta = r ? 1e3 / 60 : Math.max(Math.min(i - a.timestamp, o), 1)), (a.timestamp = i), (a.isProcessing = !0), h.process(a), l.process(a), d.process(a), m.process(a), p.process(a), g.process(a), (a.isProcessing = !1), s && n && ((r = !1), t(v));
                    };
                return {
                    schedule: i.reduce((n, e) => {
                        const i = u[e];
                        return (n[e] = (n, e = !1, o = !1) => (s || ((s = !0), (r = !0), a.isProcessing || t(v)), i.schedule(n, e, o))), n;
                    }, {}),
                    cancel: (t) => {
                        for (let n = 0; n < i.length; n++) u[i[n]].cancel(t);
                    },
                    state: a,
                    steps: u,
                };
            }
        },
        241359: (t, n, s) => {
            s.d(n, { Pn: () => r, Wi: () => o, frameData: () => a, yL: () => c });
            var e = s(587363),
                i = s(237202);
            const { schedule: o, cancel: r, state: a, steps: c } = (0, i.Z)("undefined" != typeof requestAnimationFrame ? requestAnimationFrame : e.Z, !0);
        },
        891353: (t, n, s) => {
            s.d(n, { g: () => i });
            var e = s(237202);
            const { schedule: i, cancel: o } = (0, e.Z)(queueMicrotask, !1);
        },
        182644: (t, n, s) => {
            s.d(n, { X: () => a });
            var e = s(123200),
                i = s(241359);
            let o;
            function r() {
                o = void 0;
            }
            const a = {
                now: () => (void 0 === o && a.set(i.frameData.isProcessing || e.c.useManualTiming ? i.frameData.timestamp : performance.now()), o),
                set: (t) => {
                    (o = t), queueMicrotask(r);
                },
            };
        },
        970704: (t, n, s) => {
            s.d(n, { h: () => V });
            var e = s(894796),
                i = s(587363),
                o = s(377781),
                r = s(479556),
                a = s(53398),
                c = s(208350),
                u = s(967817),
                h = s(653870),
                l = s(324144),
                d = s(51366),
                m = s(519038);
            function p(t, n, s) {
                return { min: void 0 !== n ? t.min + n : void 0, max: void 0 !== s ? t.max + s - (t.max - t.min) : void 0 };
            }
            function g(t, n) {
                let s = n.min - t.min,
                    e = n.max - t.max;
                return n.max - n.min < t.max - t.min && ([s, e] = [e, s]), { min: s, max: e };
            }
            const v = 0.35;
            function f(t, n, s) {
                return { min: x(t, n), max: x(t, s) };
            }
            function x(t, n) {
                return "number" == typeof t ? t : t[n] || 0;
            }
            var P = s(33933),
                E = s(101010),
                y = s(285579),
                M = s(698457),
                D = s(477222),
                S = s(778624),
                w = s(288772),
                A = s(61419),
                L = s(957456),
                C = s(904969),
                k = s(241359);
            const b = new WeakMap();
            class T {
                constructor(t) {
                    (this.openDragLock = null), (this.isDragging = !1), (this.currentDirection = null), (this.originPoint = { x: 0, y: 0 }), (this.constraints = !1), (this.hasMutatedConstraints = !1), (this.elastic = (0, P.dO)()), (this.visualElement = t);
                }
                start(t, { snapToCursor: n = !1 } = {}) {
                    const { presenceContext: s } = this.visualElement;
                    if (s && !1 === s.isPresent) return;
                    const { dragSnapToOrigin: e } = this.getProps();
                    this.panSession = new a.H(
                        t,
                        {
                            onSessionStart: (t) => {
                                const { dragSnapToOrigin: s } = this.getProps();
                                s ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor((0, M.Q)(t).point);
                            },
                            onStart: (t, n) => {
                                const { drag: s, dragPropagation: e, onDragStart: i } = this.getProps();
                                if (s && !e && (this.openDragLock && this.openDragLock(), (this.openDragLock = (0, r.KV)(s)), !this.openDragLock)) return;
                                (this.isDragging = !0),
                                    (this.currentDirection = null),
                                    this.resolveConstraints(),
                                    this.visualElement.projection && ((this.visualElement.projection.isAnimationBlocked = !0), (this.visualElement.projection.target = void 0)),
                                    (0, E.U)((t) => {
                                        let n = this.getAxisMotionValue(t).get() || 0;
                                        if (w.aQ.test(n)) {
                                            const { projection: s } = this.visualElement;
                                            if (s && s.layout) {
                                                const e = s.layout.layoutBox[t];
                                                if (e) {
                                                    n = (0, l.JO)(e) * (parseFloat(n) / 100);
                                                }
                                            }
                                        }
                                        this.originPoint[t] = n;
                                    }),
                                    i && k.Wi.postRender(() => i(t, n)),
                                    (0, C.K)(this.visualElement, "transform");
                                const { animationState: o } = this.visualElement;
                                o && o.setActive("whileDrag", !0);
                            },
                            onMove: (t, n) => {
                                const { dragPropagation: s, dragDirectionLock: e, onDirectionLock: i, onDrag: o } = this.getProps();
                                if (!s && !this.openDragLock) return;
                                const { offset: r } = n;
                                if (e && null === this.currentDirection)
                                    return (
                                        (this.currentDirection = (function (t, n = 10) {
                                            let s = null;
                                            Math.abs(t.y) > n ? (s = "y") : Math.abs(t.x) > n && (s = "x");
                                            return s;
                                        })(r)),
                                        void (null !== this.currentDirection && i && i(this.currentDirection))
                                    );
                                this.updateAxis("x", n.point, r), this.updateAxis("y", n.point, r), this.visualElement.render(), o && o(t, n);
                            },
                            onSessionEnd: (t, n) => this.stop(t, n),
                            resumeAnimation: () =>
                                (0, E.U)((t) => {
                                    var n;
                                    return "paused" === this.getAnimationState(t) && (null === (n = this.getAxisMotionValue(t).animation) || void 0 === n ? void 0 : n.play());
                                }),
                        },
                        { transformPagePoint: this.visualElement.getTransformPagePoint(), dragSnapToOrigin: e, contextWindow: (0, L.l)(this.visualElement) },
                    );
                }
                stop(t, n) {
                    const s = this.isDragging;
                    if ((this.cancel(), !s)) return;
                    const { velocity: e } = n;
                    this.startAnimation(e);
                    const { onDragEnd: i } = this.getProps();
                    i && k.Wi.postRender(() => i(t, n));
                }
                cancel() {
                    this.isDragging = !1;
                    const { projection: t, animationState: n } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), (this.panSession = void 0);
                    const { dragPropagation: s } = this.getProps();
                    !s && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)), n && n.setActive("whileDrag", !1);
                }
                updateAxis(t, n, s) {
                    const { drag: e } = this.getProps();
                    if (!s || !W(t, e, this.currentDirection)) return;
                    const i = this.getAxisMotionValue(t);
                    let o = this.originPoint[t] + s[t];
                    this.constraints &&
                        this.constraints[t] &&
                        (o = (function (t, { min: n, max: s }, e) {
                            return void 0 !== n && t < n ? (t = e ? (0, m.t)(n, t, e.min) : Math.max(t, n)) : void 0 !== s && t > s && (t = e ? (0, m.t)(s, t, e.max) : Math.min(t, s)), t;
                        })(o, this.constraints[t], this.elastic[t])),
                        i.set(o);
                }
                resolveConstraints() {
                    var t;
                    const { dragConstraints: n, dragElastic: s } = this.getProps(),
                        e = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (t = this.visualElement.projection) || void 0 === t ? void 0 : t.layout,
                        i = this.constraints;
                    n && (0, c.I)(n)
                        ? this.constraints || (this.constraints = this.resolveRefConstraints())
                        : (this.constraints =
                              !(!n || !e) &&
                              (function (t, { top: n, left: s, bottom: e, right: i }) {
                                  return { x: p(t.x, s, i), y: p(t.y, n, e) };
                              })(e.layoutBox, n)),
                        (this.elastic = (function (t = v) {
                            return !1 === t ? (t = 0) : !0 === t && (t = v), { x: f(t, "left", "right"), y: f(t, "top", "bottom") };
                        })(s)),
                        i !== this.constraints &&
                            e &&
                            this.constraints &&
                            !this.hasMutatedConstraints &&
                            (0, E.U)((t) => {
                                !1 !== this.constraints &&
                                    this.getAxisMotionValue(t) &&
                                    (this.constraints[t] = (function (t, n) {
                                        const s = {};
                                        return void 0 !== n.min && (s.min = n.min - t.min), void 0 !== n.max && (s.max = n.max - t.min), s;
                                    })(e.layoutBox[t], this.constraints[t]));
                            });
                }
                resolveRefConstraints() {
                    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
                    if (!t || !(0, c.I)(t)) return !1;
                    const s = t.current;
                    (0, o.k)(null !== s, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    const { projection: e } = this.visualElement;
                    if (!e || !e.layout) return !1;
                    const i = (0, y.z)(s, e.root, this.visualElement.getTransformPagePoint());
                    let r = (function (t, n) {
                        return { x: g(t.x, n.x), y: g(t.y, n.y) };
                    })(e.layout.layoutBox, i);
                    if (n) {
                        const t = n((0, D.z2)(r));
                        (this.hasMutatedConstraints = !!t), t && (r = (0, D.i8)(t));
                    }
                    return r;
                }
                startAnimation(t) {
                    const { drag: n, dragMomentum: s, dragElastic: e, dragTransition: i, dragSnapToOrigin: o, onDragTransitionEnd: r } = this.getProps(),
                        a = this.constraints || {},
                        c = (0, E.U)((r) => {
                            if (!W(r, n, this.currentDirection)) return;
                            let c = (a && a[r]) || {};
                            o && (c = { min: 0, max: 0 });
                            const u = e ? 200 : 1e6,
                                h = e ? 40 : 1e7,
                                l = { type: "inertia", velocity: s ? t[r] : 0, bounceStiffness: u, bounceDamping: h, timeConstant: 750, restDelta: 1, restSpeed: 10, ...i, ...c };
                            return this.startAxisValueAnimation(r, l);
                        });
                    return Promise.all(c).then(r);
                }
                startAxisValueAnimation(t, n) {
                    const s = this.getAxisMotionValue(t);
                    return (0, C.K)(this.visualElement, t), s.start((0, A.v)(t, s, 0, n, this.visualElement, !1));
                }
                stopAnimation() {
                    (0, E.U)((t) => this.getAxisMotionValue(t).stop());
                }
                pauseAnimation() {
                    (0, E.U)((t) => {
                        var n;
                        return null === (n = this.getAxisMotionValue(t).animation) || void 0 === n ? void 0 : n.pause();
                    });
                }
                getAnimationState(t) {
                    var n;
                    return null === (n = this.getAxisMotionValue(t).animation) || void 0 === n ? void 0 : n.state;
                }
                getAxisMotionValue(t) {
                    const n = `_drag${t.toUpperCase()}`,
                        s = this.visualElement.getProps(),
                        e = s[n];
                    return e || this.visualElement.getValue(t, (s.initial ? s.initial[t] : void 0) || 0);
                }
                snapToCursor(t) {
                    (0, E.U)((n) => {
                        const { drag: s } = this.getProps();
                        if (!W(n, s, this.currentDirection)) return;
                        const { projection: e } = this.visualElement,
                            i = this.getAxisMotionValue(n);
                        if (e && e.layout) {
                            const { min: s, max: o } = e.layout.layoutBox[n];
                            i.set(t[n] - (0, m.t)(s, o, 0.5));
                        }
                    });
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    const { drag: t, dragConstraints: n } = this.getProps(),
                        { projection: s } = this.visualElement;
                    if (!(0, c.I)(n) || !s || !this.constraints) return;
                    this.stopAnimation();
                    const e = { x: 0, y: 0 };
                    (0, E.U)((t) => {
                        const n = this.getAxisMotionValue(t);
                        if (n && !1 !== this.constraints) {
                            const s = n.get();
                            e[t] = (function (t, n) {
                                let s = 0.5;
                                const e = (0, l.JO)(t),
                                    i = (0, l.JO)(n);
                                return i > e ? (s = (0, h.Y)(n.min, n.max - e, t.min)) : e > i && (s = (0, h.Y)(t.min, t.max - i, n.min)), (0, d.u)(0, 1, s);
                            })({ min: s, max: s }, this.constraints[t]);
                        }
                    });
                    const { transformTemplate: i } = this.visualElement.getProps();
                    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
                        s.root && s.root.updateScroll(),
                        s.updateLayout(),
                        this.resolveConstraints(),
                        (0, E.U)((n) => {
                            if (!W(n, t, null)) return;
                            const s = this.getAxisMotionValue(n),
                                { min: i, max: o } = this.constraints[n];
                            s.set((0, m.t)(i, o, e[n]));
                        });
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    b.set(this.visualElement, this);
                    const t = this.visualElement.current,
                        n = (0, u.a)(t, "pointerdown", (t) => {
                            const { drag: n, dragListener: s = !0 } = this.getProps();
                            n && s && this.start(t);
                        }),
                        s = () => {
                            const { dragConstraints: t } = this.getProps();
                            (0, c.I)(t) && t.current && (this.constraints = this.resolveRefConstraints());
                        },
                        { projection: e } = this.visualElement,
                        i = e.addEventListener("measure", s);
                    e && !e.layout && (e.root && e.root.updateScroll(), e.updateLayout()), k.Wi.read(s);
                    const o = (0, S.E)(window, "resize", () => this.scalePositionWithinConstraints()),
                        r = e.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: n }) => {
                            this.isDragging &&
                                n &&
                                ((0, E.U)((n) => {
                                    const s = this.getAxisMotionValue(n);
                                    s && ((this.originPoint[n] += t[n].translate), s.set(s.get() + t[n].translate));
                                }),
                                this.visualElement.render());
                        });
                    return () => {
                        o(), n(), i(), r && r();
                    };
                }
                getProps() {
                    const t = this.visualElement.getProps(),
                        { drag: n = !1, dragDirectionLock: s = !1, dragPropagation: e = !1, dragConstraints: i = !1, dragElastic: o = v, dragMomentum: r = !0 } = t;
                    return { ...t, drag: n, dragDirectionLock: s, dragPropagation: e, dragConstraints: i, dragElastic: o, dragMomentum: r };
                }
            }
            function W(t, n, s) {
                return !((!0 !== n && n !== t) || (null !== s && s !== t));
            }
            class V extends e.L {
                constructor(t) {
                    super(t), (this.removeGroupControls = i.Z), (this.removeListeners = i.Z), (this.controls = new T(t));
                }
                mount() {
                    const { dragControls: t } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), (this.removeListeners = this.controls.addListeners() || i.Z);
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners();
                }
            }
        },
        951108: (t, n, s) => {
            s.d(n, { f: () => r });
            var e = s(778624),
                i = s(894796),
                o = s(196953);
            class r extends i.L {
                constructor() {
                    super(...arguments), (this.isActive = !1);
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible");
                    } catch (n) {
                        t = !0;
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), (this.isActive = !0));
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), (this.isActive = !1));
                }
                mount() {
                    this.unmount = (0, o.z)(
                        (0, e.E)(this.node.current, "focus", () => this.onFocus()),
                        (0, e.E)(this.node.current, "blur", () => this.onBlur()),
                    );
                }
                unmount() {}
            }
        },
        98680: (t, n, s) => {
            s.d(n, { a: () => c });
            var e = s(894796),
                i = s(479556),
                o = s(698457),
                r = s(241359);
            function a(t, n, s) {
                const { props: e } = t;
                t.animationState && e.whileHover && t.animationState.setActive("whileHover", "Start" === s);
                const i = e["onHover" + s];
                i && r.Wi.postRender(() => i(n, (0, o.Q)(n)));
            }
            class c extends e.L {
                mount() {
                    const { current: t } = this.node;
                    t && (this.unmount = (0, i.Mr)(t, (t) => (a(this.node, t, "Start"), (t) => a(this.node, t, "End"))));
                }
                unmount() {}
            }
        },
        53398: (t, n, s) => {
            s.d(n, { H: () => h });
            var e = s(479556),
                i = s(987302),
                o = s(967817),
                r = s(698457),
                a = s(431216),
                c = s(196953),
                u = s(241359);
            class h {
                constructor(t, n, { transformPagePoint: s, contextWindow: i, dragSnapToOrigin: h = !1 } = {}) {
                    if (
                        ((this.startEvent = null),
                        (this.lastMoveEvent = null),
                        (this.lastMoveEventInfo = null),
                        (this.handlers = {}),
                        (this.contextWindow = window),
                        (this.updatePoint = () => {
                            if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                            const t = m(this.lastMoveEventInfo, this.history),
                                n = null !== this.startEvent,
                                s = (0, a.y)(t.offset, { x: 0, y: 0 }) >= 3;
                            if (!n && !s) return;
                            const { point: e } = t,
                                { timestamp: i } = u.frameData;
                            this.history.push({ ...e, timestamp: i });
                            const { onStart: o, onMove: r } = this.handlers;
                            n || (o && o(this.lastMoveEvent, t), (this.startEvent = this.lastMoveEvent)), r && r(this.lastMoveEvent, t);
                        }),
                        (this.handlePointerMove = (t, n) => {
                            (this.lastMoveEvent = t), (this.lastMoveEventInfo = l(n, this.transformPagePoint)), u.Wi.update(this.updatePoint, !0);
                        }),
                        (this.handlePointerUp = (t, n) => {
                            this.end();
                            const { onEnd: s, onSessionEnd: e, resumeAnimation: i } = this.handlers;
                            if ((this.dragSnapToOrigin && i && i(), !this.lastMoveEvent || !this.lastMoveEventInfo)) return;
                            const o = m("pointercancel" === t.type ? this.lastMoveEventInfo : l(n, this.transformPagePoint), this.history);
                            this.startEvent && s && s(t, o), e && e(t, o);
                        }),
                        !(0, e.DJ)(t))
                    )
                        return;
                    (this.dragSnapToOrigin = h), (this.handlers = n), (this.transformPagePoint = s), (this.contextWindow = i || window);
                    const d = l((0, r.Q)(t), this.transformPagePoint),
                        { point: p } = d,
                        { timestamp: g } = u.frameData;
                    this.history = [{ ...p, timestamp: g }];
                    const { onSessionStart: v } = n;
                    v && v(t, m(d, this.history)), (this.removeListeners = (0, c.z)((0, o.a)(this.contextWindow, "pointermove", this.handlePointerMove), (0, o.a)(this.contextWindow, "pointerup", this.handlePointerUp), (0, o.a)(this.contextWindow, "pointercancel", this.handlePointerUp)));
                }
                updateHandlers(t) {
                    this.handlers = t;
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, u.Pn)(this.updatePoint);
                }
            }
            function l(t, n) {
                return n ? { point: n(t.point) } : t;
            }
            function d(t, n) {
                return { x: t.x - n.x, y: t.y - n.y };
            }
            function m({ point: t }, n) {
                return { point: t, delta: d(t, g(n)), offset: d(t, p(n)), velocity: v(n, 0.1) };
            }
            function p(t) {
                return t[0];
            }
            function g(t) {
                return t[t.length - 1];
            }
            function v(t, n) {
                if (t.length < 2) return { x: 0, y: 0 };
                let s = t.length - 1,
                    e = null;
                const o = g(t);
                for (; s >= 0 && ((e = t[s]), !(o.timestamp - e.timestamp > (0, i.w)(n))); ) s--;
                if (!e) return { x: 0, y: 0 };
                const r = (0, i.X)(o.timestamp - e.timestamp);
                if (0 === r) return { x: 0, y: 0 };
                const a = { x: (o.x - e.x) / r, y: (o.y - e.y) / r };
                return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
            }
        },
        488018: (t, n, s) => {
            s.d(n, { q: () => h });
            var e = s(53398),
                i = s(967817),
                o = s(894796),
                r = s(587363),
                a = s(957456),
                c = s(241359);
            const u = (t) => (n, s) => {
                t && c.Wi.postRender(() => t(n, s));
            };
            class h extends o.L {
                constructor() {
                    super(...arguments), (this.removePointerDownListener = r.Z);
                }
                onPointerDown(t) {
                    this.session = new e.H(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint(), contextWindow: (0, a.l)(this.node) });
                }
                createPanHandlers() {
                    const { onPanSessionStart: t, onPanStart: n, onPan: s, onPanEnd: e } = this.node.getProps();
                    return {
                        onSessionStart: u(t),
                        onStart: u(n),
                        onMove: s,
                        onEnd: (t, n) => {
                            delete this.session, e && c.Wi.postRender(() => e(t, n));
                        },
                    };
                }
                mount() {
                    this.removePointerDownListener = (0, i.a)(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers());
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end();
                }
            }
        },
        253429: (t, n, s) => {
            s.d(n, { Q: () => c });
            var e = s(894796),
                i = s(479556),
                o = s(698457),
                r = s(241359);
            function a(t, n, s) {
                const { props: e } = t;
                t.animationState && e.whileTap && t.animationState.setActive("whileTap", "Start" === s);
                const i = e["onTap" + ("End" === s ? "" : s)];
                i && r.Wi.postRender(() => i(n, (0, o.Q)(n)));
            }
            class c extends e.L {
                mount() {
                    const { current: t } = this.node;
                    t && (this.unmount = (0, i.OD)(t, (t) => (a(this.node, t, "Start"), (t, { success: n }) => a(this.node, t, n ? "End" : "Cancel")), { useGlobalTarget: this.node.props.globalTapTarget }));
                }
                unmount() {}
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-32266432.aad01e2a.js.map
