"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-55d013d5"],
    {
        423384: (t, e, n) => {
            n.d(e, { e: () => h });
            var r = n(33933),
                s = n(883798),
                o = n(618754),
                i = n(88434),
                a = n(208462),
                c = n(611581),
                l = n(155282),
                u = n(413336),
                d = n(113517),
                f = n(507587);
            class h extends s.J {
                constructor() {
                    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1), (this.measureInstanceViewportBox = r.dO);
                }
                getBaseTargetFromProps(t, e) {
                    return t[e];
                }
                readValueFromInstance(t, e) {
                    if (a.G.has(e)) {
                        const t = (0, i.A)(e);
                        return (t && t.default) || 0;
                    }
                    return (e = l.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
                }
                scrapeMotionValuesFromProps(t, e, n) {
                    return (0, f.U)(t, e, n);
                }
                build(t, e, n) {
                    (0, c.i)(t, e, this.isSVGTag, n.transformTemplate);
                }
                renderInstance(t, e, n, r) {
                    (0, d.K)(t, e, n, r);
                }
                mount(t) {
                    (this.isSVGTag = (0, u.a)(t.tagName)), super.mount(t);
                }
            }
        },
        918049: (t, e, n) => {
            n.d(e, { V: () => f });
            var r = n(241359),
                s = n(607819),
                o = n(208462),
                i = n(611581),
                a = n(672028),
                c = n(413336),
                l = n(113517),
                u = n(507587);
            const d = ["x", "y", "width", "height", "cx", "cy", "r"],
                f = {
                    useVisualState: (0, s.t)({
                        scrapeMotionValuesFromProps: u.U,
                        createRenderState: a.B,
                        onUpdate: ({ props: t, prevProps: e, current: n, renderState: s, latestValues: a }) => {
                            if (!n) return;
                            let u = !!t.drag;
                            if (!u)
                                for (const t in a)
                                    if (o.G.has(t)) {
                                        u = !0;
                                        break;
                                    }
                            if (!u) return;
                            let f = !e;
                            if (e)
                                for (let n = 0; n < d.length; n++) {
                                    const r = d[n];
                                    t[r] !== e[r] && (f = !0);
                                }
                            f &&
                                r.Wi.read(() => {
                                    !(function (t, e) {
                                        try {
                                            e.dimensions = "function" == typeof t.getBBox ? t.getBBox() : t.getBoundingClientRect();
                                        } catch (t) {
                                            e.dimensions = { x: 0, y: 0, width: 0, height: 0 };
                                        }
                                    })(n, s),
                                        r.Wi.render(() => {
                                            (0, i.i)(s, a, (0, c.a)(n.tagName), t.transformTemplate), (0, l.K)(n, s);
                                        });
                                });
                        },
                    }),
                };
        },
        174105: (t, e, n) => {
            n.d(e, { B: () => r });
            const r = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
        },
        867310: (t, e, n) => {
            n.d(e, { R: () => c });
            var r = n(202784),
                s = n(626),
                o = n(611581),
                i = n(672028),
                a = n(413336);
            function c(t, e, n, c) {
                const l = (0, r.useMemo)(() => {
                    const n = (0, i.B)();
                    return (0, o.i)(n, e, (0, a.a)(c), t.transformTemplate), { ...n.attrs, style: { ...n.style } };
                }, [e]);
                if (t.style) {
                    const e = {};
                    (0, s.p)(e, t.style, t), (l.style = { ...e, ...l.style });
                }
                return l;
            }
        },
        611581: (t, e, n) => {
            n.d(e, { i: () => c });
            var r = n(442673),
                s = n(288772);
            const o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
                i = { offset: "strokeDashoffset", array: "strokeDasharray" };
            function a(t, e, n) {
                return "string" == typeof t ? t : s.px.transform(e + n * t);
            }
            function c(t, { attrX: e, attrY: n, attrScale: c, originX: l, originY: u, pathLength: d, pathSpacing: f = 1, pathOffset: h = 0, ...p }, m, v) {
                if (((0, r.r)(t, p, v), m)) return void (t.style.viewBox && (t.attrs.viewBox = t.style.viewBox));
                (t.attrs = t.style), (t.style = {});
                const { attrs: g, style: y, dimensions: w } = t;
                g.transform && (w && (y.transform = g.transform), delete g.transform),
                    w &&
                        (void 0 !== l || void 0 !== u || y.transform) &&
                        (y.transformOrigin = (function (t, e, n) {
                            return `${a(e, t.x, t.width)} ${a(n, t.y, t.height)}`;
                        })(w, void 0 !== l ? l : 0.5, void 0 !== u ? u : 0.5)),
                    void 0 !== e && (g.x = e),
                    void 0 !== n && (g.y = n),
                    void 0 !== c && (g.scale = c),
                    void 0 !== d &&
                        (function (t, e, n = 1, r = 0, a = !0) {
                            t.pathLength = 1;
                            const c = a ? o : i;
                            t[c.offset] = s.px.transform(-r);
                            const l = s.px.transform(e),
                                u = s.px.transform(n);
                            t[c.array] = `${l} ${u}`;
                        })(g, d, f, h, !1);
            }
        },
        155282: (t, e, n) => {
            n.d(e, { s: () => r });
            const r = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
        },
        672028: (t, e, n) => {
            n.d(e, { B: () => s });
            var r = n(883041);
            const s = () => ({ ...(0, r.a)(), attrs: {} });
        },
        413336: (t, e, n) => {
            n.d(e, { a: () => r });
            const r = (t) => "string" == typeof t && "svg" === t.toLowerCase();
        },
        113517: (t, e, n) => {
            n.d(e, { K: () => i });
            var r = n(618754),
                s = n(902473),
                o = n(155282);
            function i(t, e, n, i) {
                (0, s.N)(t, e, void 0, i);
                for (const n in e.attrs) t.setAttribute(o.s.has(n) ? n : (0, r.D)(n), e.attrs[n]);
            }
        },
        507587: (t, e, n) => {
            n.d(e, { U: () => i });
            var r = n(315815),
                s = n(208462),
                o = n(453921);
            function i(t, e, n) {
                const i = (0, o.U)(t, e, n);
                for (const n in t)
                    if ((0, r.i)(t[n]) || (0, r.i)(e[n])) {
                        i[-1 !== s._.indexOf(n) ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n] = t[n];
                    }
                return i;
            }
        },
        530011: (t, e, n) => {
            n.d(e, { e: () => d, m: () => u });
            var r = n(912345),
                s = n(241359);
            const o = new Set();
            let i = !1,
                a = !1;
            function c() {
                if (a) {
                    const t = Array.from(o).filter((t) => t.needsMeasurement),
                        e = new Set(t.map((t) => t.element)),
                        n = new Map();
                    e.forEach((t) => {
                        const e = (0, r.Ei)(t);
                        e.length && (n.set(t, e), t.render());
                    }),
                        t.forEach((t) => t.measureInitialState()),
                        e.forEach((t) => {
                            t.render();
                            const e = n.get(t);
                            e &&
                                e.forEach(([e, n]) => {
                                    var r;
                                    null === (r = t.getValue(e)) || void 0 === r || r.set(n);
                                });
                        }),
                        t.forEach((t) => t.measureEndState()),
                        t.forEach((t) => {
                            void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY);
                        });
                }
                (a = !1), (i = !1), o.forEach((t) => t.complete()), o.clear();
            }
            function l() {
                o.forEach((t) => {
                    t.readKeyframes(), t.needsMeasurement && (a = !0);
                });
            }
            function u() {
                l(), c();
            }
            class d {
                constructor(t, e, n, r, s, o = !1) {
                    (this.isComplete = !1), (this.isAsync = !1), (this.needsMeasurement = !1), (this.isScheduled = !1), (this.unresolvedKeyframes = [...t]), (this.onComplete = e), (this.name = n), (this.motionValue = r), (this.element = s), (this.isAsync = o);
                }
                scheduleResolve() {
                    (this.isScheduled = !0), this.isAsync ? (o.add(this), i || ((i = !0), s.Wi.read(l), s.Wi.resolveKeyframes(c))) : (this.readKeyframes(), this.complete());
                }
                readKeyframes() {
                    const { unresolvedKeyframes: t, name: e, element: n, motionValue: r } = this;
                    for (let s = 0; s < t.length; s++)
                        if (null === t[s])
                            if (0 === s) {
                                const s = null == r ? void 0 : r.get(),
                                    o = t[t.length - 1];
                                if (void 0 !== s) t[0] = s;
                                else if (n && e) {
                                    const r = n.readValue(e, o);
                                    null != r && (t[0] = r);
                                }
                                void 0 === t[0] && (t[0] = o), r && void 0 === s && r.set(t[0]);
                            } else t[s] = t[s - 1];
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete() {
                    (this.isComplete = !0), this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), o.delete(this);
                }
                cancel() {
                    this.isComplete || ((this.isScheduled = !1), o.delete(this));
                }
                resume() {
                    this.isComplete || this.scheduleResolve();
                }
            }
        },
        990817: (t, e, n) => {
            n.d(e, { M: () => p });
            var r = n(912816),
                s = n(755721);
            function o(t, e) {
                if (!Array.isArray(e)) return !1;
                const n = e.length;
                if (n !== t.length) return !1;
                for (let r = 0; r < n; r++) if (e[r] !== t[r]) return !1;
                return !0;
            }
            var i = n(220330),
                a = n(412841),
                c = n(936427),
                l = n(448683);
            const u = c.V.length;
            function d(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    const e = (t.parent && d(t.parent)) || {};
                    return void 0 !== t.props.initial && (e.initial = t.props.initial), e;
                }
                const e = {};
                for (let n = 0; n < u; n++) {
                    const r = c.V[n],
                        s = t.props[r];
                    ((0, i.$)(s) || !1 === s) && (e[r] = s);
                }
                return e;
            }
            const f = [...c.e].reverse(),
                h = c.e.length;
            function p(t) {
                let e = (function (t) {
                        return (e) => Promise.all(e.map(({ animation: e, options: n }) => (0, l.d)(t, e, n)));
                    })(t),
                    n = g(),
                    c = !0;
                const u = (e) => (n, r) => {
                    var s;
                    const o = (0, a.x)(t, r, "exit" === e ? (null === (s = t.presenceContext) || void 0 === s ? void 0 : s.custom) : void 0);
                    if (o) {
                        const { transition: t, transitionEnd: e, ...r } = o;
                        n = { ...n, ...r, ...e };
                    }
                    return n;
                };
                function p(a) {
                    const { props: l } = t,
                        p = d(t.parent) || {},
                        v = [],
                        g = new Set();
                    let y = {},
                        w = 1 / 0;
                    for (let e = 0; e < h; e++) {
                        const d = f[e],
                            h = n[d],
                            x = void 0 !== l[d] ? l[d] : p[d],
                            b = (0, i.$)(x),
                            V = d === a ? h.isActive : null;
                        !1 === V && (w = e);
                        let A = x === p[d] && x !== l[d] && b;
                        if ((A && c && t.manuallyAnimateOnMount && (A = !1), (h.protectedKeys = { ...y }), (!h.isActive && null === V) || (!x && !h.prevProp) || (0, r.H)(x) || "boolean" == typeof x)) continue;
                        const S = m(h.prevProp, x);
                        let C = S || (d === a && h.isActive && !A && b) || (e > w && b),
                            B = !1;
                        const E = Array.isArray(x) ? x : [x];
                        let k = E.reduce(u(d), {});
                        !1 === V && (k = {});
                        const { prevResolvedValues: M = {} } = h,
                            K = { ...M, ...k },
                            P = (e) => {
                                (C = !0), g.has(e) && ((B = !0), g.delete(e)), (h.needsAnimating[e] = !0);
                                const n = t.getValue(e);
                                n && (n.liveStyle = !1);
                            };
                        for (const t in K) {
                            const e = k[t],
                                n = M[t];
                            if (y.hasOwnProperty(t)) continue;
                            let r = !1;
                            (r = (0, s.C)(e) && (0, s.C)(n) ? !o(e, n) : e !== n), r ? (null != e ? P(t) : g.add(t)) : void 0 !== e && g.has(t) ? P(t) : (h.protectedKeys[t] = !0);
                        }
                        (h.prevProp = x), (h.prevResolvedValues = k), h.isActive && (y = { ...y, ...k }), c && t.blockInitialAnimation && (C = !1);
                        C && (!(A && S) || B) && v.push(...E.map((t) => ({ animation: t, options: { type: d } })));
                    }
                    if (g.size) {
                        const e = {};
                        g.forEach((n) => {
                            const r = t.getBaseTarget(n),
                                s = t.getValue(n);
                            s && (s.liveStyle = !0), (e[n] = null != r ? r : null);
                        }),
                            v.push({ animation: e });
                    }
                    let x = Boolean(v.length);
                    return !c || (!1 !== l.initial && l.initial !== l.animate) || t.manuallyAnimateOnMount || (x = !1), (c = !1), x ? e(v) : Promise.resolve();
                }
                return {
                    animateChanges: p,
                    setActive: function (e, r) {
                        var s;
                        if (n[e].isActive === r) return Promise.resolve();
                        null === (s = t.variantChildren) ||
                            void 0 === s ||
                            s.forEach((t) => {
                                var n;
                                return null === (n = t.animationState) || void 0 === n ? void 0 : n.setActive(e, r);
                            }),
                            (n[e].isActive = r);
                        const o = p(e);
                        for (const t in n) n[t].protectedKeys = {};
                        return o;
                    },
                    setAnimateFunction: function (n) {
                        e = n(t);
                    },
                    getState: () => n,
                    reset: () => {
                        (n = g()), (c = !0);
                    },
                };
            }
            function m(t, e) {
                return "string" == typeof e ? e !== t : !!Array.isArray(e) && !o(e, t);
            }
            function v(t = !1) {
                return { isActive: t, protectedKeys: {}, needsAnimating: {}, prevResolvedValues: {} };
            }
            function g() {
                return { animate: v(!0), whileInView: v(), whileHover: v(), whileTap: v(), whileDrag: v(), whileFocus: v(), exit: v() };
            }
        },
        243159: (t, e, n) => {
            n.d(e, { E: () => o });
            var r = n(444866);
            const s = (t, e) => t.depth - e.depth;
            class o {
                constructor() {
                    (this.children = []), (this.isDirty = !1);
                }
                add(t) {
                    (0, r.y4)(this.children, t), (this.isDirty = !0);
                }
                remove(t) {
                    (0, r.cl)(this.children, t), (this.isDirty = !0);
                }
                forEach(t) {
                    this.isDirty && this.children.sort(s), (this.isDirty = !1), this.children.forEach(t);
                }
            }
        },
        723293: (t, e, n) => {
            n.d(e, { G: () => i, M: () => a });
            var r = n(912816),
                s = n(220330),
                o = n(936427);
            function i(t) {
                return (0, r.H)(t.animate) || o.V.some((e) => (0, s.$)(t[e]));
            }
            function a(t) {
                return Boolean(i(t) || t.variants);
            }
        },
        220330: (t, e, n) => {
            function r(t) {
                return "string" == typeof t || Array.isArray(t);
            }
            n.d(e, { $: () => r });
        },
        608879: (t, e, n) => {
            n.d(e, { F: () => o });
            var r = n(40226),
                s = n(315815);
            function o(t, e, n) {
                for (const o in e) {
                    const i = e[o],
                        a = n[o];
                    if ((0, s.i)(i)) t.addValue(o, i);
                    else if ((0, s.i)(a)) t.addValue(o, (0, r.BX)(i, { owner: t }));
                    else if (a !== i)
                        if (t.hasValue(o)) {
                            const e = t.getValue(o);
                            !0 === e.liveStyle ? e.jump(i) : e.hasAnimated || e.set(i);
                        } else {
                            const e = t.getStaticValue(o);
                            t.addValue(o, (0, r.BX)(void 0 !== e ? e : i, { owner: t }));
                        }
                }
                for (const r in n) void 0 === e[r] && t.removeValue(r);
                return e;
            }
        },
        412841: (t, e, n) => {
            n.d(e, { x: () => s });
            var r = n(399764);
            function s(t, e, n) {
                const s = t.getProps();
                return (0, r.o)(s, e, void 0 !== n ? n : s.custom, t);
            }
        },
        399764: (t, e, n) => {
            function r(t) {
                const e = [{}, {}];
                return (
                    null == t ||
                        t.values.forEach((t, n) => {
                            (e[0][n] = t.get()), (e[1][n] = t.getVelocity());
                        }),
                    e
                );
            }
            function s(t, e, n, s) {
                if ("function" == typeof e) {
                    const [o, i] = r(s);
                    e = e(void 0 !== n ? n : t.custom, o, i);
                }
                if (("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e)) {
                    const [o, i] = r(s);
                    e = e(void 0 !== n ? n : t.custom, o, i);
                }
                return e;
            }
            n.d(e, { o: () => s });
        },
        981248: (t, e, n) => {
            n.d(e, { C: () => a });
            var r = n(213809),
                s = n(40226),
                o = n(412841);
            function i(t, e, n) {
                t.hasValue(e) ? t.getValue(e).set(n) : t.addValue(e, (0, s.BX)(n));
            }
            function a(t, e) {
                const n = (0, o.x)(t, e);
                let { transitionEnd: s = {}, transition: a = {}, ...c } = n || {};
                c = { ...c, ...s };
                for (const e in c) {
                    i(t, e, (0, r.Y)(c[e]));
                }
            }
        },
        936427: (t, e, n) => {
            n.d(e, { V: () => s, e: () => r });
            const r = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                s = ["initial", ...r];
        },
        123200: (t, e, n) => {
            n.d(e, { c: () => r });
            const r = { skipAnimations: !1, useManualTiming: !1 };
        },
        444866: (t, e, n) => {
            function r(t, e) {
                -1 === t.indexOf(e) && t.push(e);
            }
            function s(t, e) {
                const n = t.indexOf(e);
                n > -1 && t.splice(n, 1);
            }
            n.d(e, { cl: () => s, y4: () => r });
        },
        51366: (t, e, n) => {
            n.d(e, { u: () => r });
            const r = (t, e, n) => (n > e ? e : n < t ? t : n);
        },
        59803: (t, e, n) => {
            n.d(e, { g: () => o });
            var r = n(182644),
                s = n(241359);
            function o(t, e) {
                const n = r.X.now(),
                    o = ({ timestamp: r }) => {
                        const i = r - n;
                        i >= e && ((0, s.Pn)(o), t(i - e));
                    };
                return s.Wi.read(o, !0), () => (0, s.Pn)(o);
            }
        },
        431216: (t, e, n) => {
            n.d(e, { y: () => s });
            const r = (t, e) => Math.abs(t - e);
            function s(t, e) {
                const n = r(t.x, e.x),
                    s = r(t.y, e.y);
                return Math.sqrt(n ** 2 + s ** 2);
            }
        },
        957456: (t, e, n) => {
            n.d(e, { l: () => r });
            const r = ({ current: t }) => (t ? t.ownerDocument.defaultView : null);
        },
        234208: (t, e, n) => {
            n.d(e, { s: () => l });
            var r = n(587363),
                s = n(377781),
                o = n(653870),
                i = n(51366),
                a = n(672871),
                c = n(196953);
            function l(t, e, { clamp: n = !0, ease: l, mixer: u } = {}) {
                const d = t.length;
                if (((0, s.k)(d === e.length, "Both input and output ranges must be the same length"), 1 === d)) return () => e[0];
                if (2 === d && e[0] === e[1]) return () => e[1];
                const f = t[0] === t[1];
                t[0] > t[d - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
                const h = (function (t, e, n) {
                        const s = [],
                            o = n || a.C,
                            i = t.length - 1;
                        for (let n = 0; n < i; n++) {
                            let i = o(t[n], t[n + 1]);
                            if (e) {
                                const t = Array.isArray(e) ? e[n] || r.Z : e;
                                i = (0, c.z)(t, i);
                            }
                            s.push(i);
                        }
                        return s;
                    })(e, l, u),
                    p = h.length,
                    m = (n) => {
                        if (f && n < t[0]) return e[0];
                        let r = 0;
                        if (p > 1) for (; r < t.length - 2 && !(n < t[r + 1]); r++);
                        const s = (0, o.Y)(t[r], t[r + 1], n);
                        return h[r](s);
                    };
                return n ? (e) => m((0, i.u)(t[0], t[d - 1], e)) : m;
            }
        },
        233791: (t, e, n) => {
            n.d(e, { j: () => r });
            const r = "undefined" != typeof window;
        },
        751377: (t, e, n) => {
            n.d(e, { P: () => r });
            const r = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);
        },
        208350: (t, e, n) => {
            function r(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current");
            }
            n.d(e, { I: () => r });
        },
        354561: (t, e, n) => {
            n.d(e, { W: () => r });
            const r = (t) => /^0[^.\s]+$/u.test(t);
        },
        672871: (t, e, n) => {
            n.d(e, { C: () => S });
            var r = n(519038),
                s = n(377781);
            function o(t, e, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < 0.5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t;
            }
            var i = n(192395),
                a = n(656572),
                c = n(586845);
            function l(t, e) {
                return (n) => (n > 0 ? e : t);
            }
            const u = (t, e, n) => {
                    const r = t * t,
                        s = n * (e * e - r) + r;
                    return s < 0 ? 0 : Math.sqrt(s);
                },
                d = [i.$, a.m, c.J];
            function f(t) {
                const e = ((n = t), d.find((t) => t.test(n)));
                var n;
                if (((0, s.K)(Boolean(e), `'${t}' is not an animatable color. Use the equivalent color code instead.`), !Boolean(e))) return !1;
                let r = e.parse(t);
                return (
                    e === c.J &&
                        (r = (function ({ hue: t, saturation: e, lightness: n, alpha: r }) {
                            (t /= 360), (n /= 100);
                            let s = 0,
                                i = 0,
                                a = 0;
                            if ((e /= 100)) {
                                const r = n < 0.5 ? n * (1 + e) : n + e - n * e,
                                    c = 2 * n - r;
                                (s = o(c, r, t + 1 / 3)), (i = o(c, r, t)), (a = o(c, r, t - 1 / 3));
                            } else s = i = a = n;
                            return { red: Math.round(255 * s), green: Math.round(255 * i), blue: Math.round(255 * a), alpha: r };
                        })(r)),
                    r
                );
            }
            const h = (t, e) => {
                const n = f(t),
                    s = f(e);
                if (!n || !s) return l(t, e);
                const o = { ...n };
                return (t) => ((o.red = u(n.red, s.red, t)), (o.green = u(n.green, s.green, t)), (o.blue = u(n.blue, s.blue, t)), (o.alpha = (0, r.t)(n.alpha, s.alpha, t)), a.m.transform(o));
            };
            var p = n(196953),
                m = n(345982),
                v = n(506746),
                g = n(91331);
            const y = new Set(["none", "hidden"]);
            function w(t, e) {
                return (n) => (0, r.t)(t, e, n);
            }
            function x(t) {
                return "number" == typeof t ? w : "string" == typeof t ? ((0, g.t)(t) ? l : m.$.test(t) ? h : A) : Array.isArray(t) ? b : "object" == typeof t ? (m.$.test(t) ? h : V) : l;
            }
            function b(t, e) {
                const n = [...t],
                    r = n.length,
                    s = t.map((t, n) => x(t)(t, e[n]));
                return (t) => {
                    for (let e = 0; e < r; e++) n[e] = s[e](t);
                    return n;
                };
            }
            function V(t, e) {
                const n = { ...t, ...e },
                    r = {};
                for (const s in n) void 0 !== t[s] && void 0 !== e[s] && (r[s] = x(t[s])(t[s], e[s]));
                return (t) => {
                    for (const e in r) n[e] = r[e](t);
                    return n;
                };
            }
            const A = (t, e) => {
                const n = v.P.createTransformer(e),
                    r = (0, v.V)(t),
                    o = (0, v.V)(e);
                return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length
                    ? (y.has(t) && !o.values.length) || (y.has(e) && !r.values.length)
                        ? (function (t, e) {
                              return y.has(t) ? (n) => (n <= 0 ? t : e) : (n) => (n >= 1 ? e : t);
                          })(t, e)
                        : (0, p.z)(
                              b(
                                  (function (t, e) {
                                      var n;
                                      const r = [],
                                          s = { color: 0, var: 0, number: 0 };
                                      for (let o = 0; o < e.values.length; o++) {
                                          const i = e.types[o],
                                              a = t.indexes[i][s[i]],
                                              c = null !== (n = t.values[a]) && void 0 !== n ? n : 0;
                                          (r[o] = c), s[i]++;
                                      }
                                      return r;
                                  })(r, o),
                                  o.values,
                              ),
                              n,
                          )
                    : ((0, s.K)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), l(t, e));
            };
            function S(t, e, n) {
                if ("number" == typeof t && "number" == typeof e && "number" == typeof n) return (0, r.t)(t, e, n);
                return x(t)(t, e);
            }
        },
        519038: (t, e, n) => {
            n.d(e, { t: () => r });
            const r = (t, e, n) => t + (e - t) * n;
        },
        290416: (t, e, n) => {
            n.d(e, { Y: () => o });
            var r = n(653870),
                s = n(519038);
            function o(t) {
                const e = [0];
                return (
                    (function (t, e) {
                        const n = t[t.length - 1];
                        for (let o = 1; o <= e; o++) {
                            const i = (0, r.Y)(0, e, o);
                            t.push((0, s.t)(n, 1, i));
                        }
                    })(e, t.length - 1),
                    e
                );
            }
        },
        782148: (t, e, n) => {
            function r(t, e) {
                return t.map((t) => t * e);
            }
            n.d(e, { q: () => r });
        },
        196953: (t, e, n) => {
            n.d(e, { z: () => s });
            const r = (t, e) => (n) => e(t(n)),
                s = (...t) => t.reduce(r);
        },
        362519: (t, e, n) => {
            n.d(e, { A: () => o });
            var r = n(233791),
                s = n(323993);
            function o() {
                if (((s.O.current = !0), r.j))
                    if (window.matchMedia) {
                        const t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => (s.n.current = t.matches);
                        t.addListener(e), e();
                    } else s.n.current = !1;
            }
        },
        323993: (t, e, n) => {
            n.d(e, { O: () => s, n: () => r });
            const r = { current: null },
                s = { current: !1 };
        },
        213809: (t, e, n) => {
            n.d(e, { Y: () => o, p: () => s });
            var r = n(755721);
            const s = (t) => Boolean(t && "object" == typeof t && t.mix && t.toValue),
                o = (t) => ((0, r.C)(t) ? t[t.length - 1] || 0 : t);
        },
        988069: (t, e, n) => {
            n.d(e, { L: () => s });
            var r = n(444866);
            class s {
                constructor() {
                    this.subscriptions = [];
                }
                add(t) {
                    return (0, r.y4)(this.subscriptions, t), () => (0, r.cl)(this.subscriptions, t);
                }
                notify(t, e, n) {
                    const r = this.subscriptions.length;
                    if (r)
                        if (1 === r) this.subscriptions[0](t, e, n);
                        else
                            for (let s = 0; s < r; s++) {
                                const r = this.subscriptions[s];
                                r && r(t, e, n);
                            }
                }
                getSize() {
                    return this.subscriptions.length;
                }
                clear() {
                    this.subscriptions.length = 0;
                }
            }
        },
        803105: (t, e, n) => {
            n.d(e, { h: () => s });
            var r = n(202784);
            function s(t) {
                const e = (0, r.useRef)(null);
                return null === e.current && (e.current = t()), e.current;
            }
        },
        114277: (t, e, n) => {
            n.d(e, { c: () => r });
            const r = { current: !1 };
        },
        923617: (t, e, n) => {
            n.d(e, { L: () => s });
            var r = n(202784);
            const s = n(233791).j ? r.useLayoutEffect : r.useEffect;
        },
        975394: (t, e, n) => {
            function r(t, e) {
                return e ? t * (1e3 / e) : 0;
            }
            n.d(e, { R: () => r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-55d013d5.30aeca0a.js.map
