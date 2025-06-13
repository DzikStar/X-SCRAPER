"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-4436cc51"],
    {
        664177: (t, e, s) => {
            function r(t) {
                if ("undefined" == typeof Proxy) return t;
                const e = new Map();
                return new Proxy((...e) => t(...e), { get: (s, r) => ("create" === r ? t : (e.has(r) || e.set(r, t(r)), e.get(r))) });
            }
            s.d(e, { E: () => j });
            var n = s(830116),
                i = s(179265),
                o = s(387662),
                a = s(981840),
                l = s(37577),
                h = s(174105);
            function u(t) {
                return "string" == typeof t && !t.includes("-") && !!(h.B.indexOf(t) > -1 || /[A-Z]/u.test(t));
            }
            var p = s(918049),
                d = s(607819),
                c = s(453921),
                f = s(883041);
            const m = { useVisualState: (0, d.t)({ scrapeMotionValuesFromProps: c.U, createRenderState: f.a }) };
            var g = s(202784),
                v = s(626),
                x = s(624232);
            let y = (t) => !(0, x.Z)(t);
            try {
                (b = require("@emotion/is-prop-valid").default) && (y = (t) => (t.startsWith("on") ? !(0, x.Z)(t) : b(t)));
            } catch (t) {}
            var b;
            var V = s(867310),
                w = s(315815);
            function S(t = !1) {
                return (e, s, r, { latestValues: n }, i) => {
                    const o = (u(e) ? V.R : v.I)(s, n, i, e),
                        a = (function (t, e, s) {
                            const r = {};
                            for (const n in t) ("values" === n && "object" == typeof t.values) || ((y(n) || (!0 === s && (0, x.Z)(n)) || (!e && !(0, x.Z)(n)) || (t.draggable && n.startsWith("onDrag"))) && (r[n] = t[n]));
                            return r;
                        })(s, "string" == typeof e, t),
                        l = e !== g.Fragment ? { ...a, ...o, ref: r } : {},
                        { children: h } = s,
                        p = (0, g.useMemo)(() => ((0, w.i)(h) ? h.get() : h), [h]);
                    return (0, g.createElement)(e, { ...l, children: p });
                };
            }
            function C(t, e) {
                return function (s, { forwardMotionProps: r } = { forwardMotionProps: !1 }) {
                    const n = { ...(u(s) ? p.V : m), preloadedFeatures: t, useRender: S(r), createVisualElement: e, Component: s };
                    return (0, l.B)(n);
                };
            }
            var P = s(285579),
                M = s(883798),
                T = s(91331),
                F = s(88434),
                R = s(442673),
                W = s(208462),
                $ = s(902473);
            class k extends M.J {
                constructor() {
                    super(...arguments), (this.type = "html"), (this.renderInstance = $.N);
                }
                readValueFromInstance(t, e) {
                    if (W.G.has(e)) {
                        const t = (0, F.A)(e);
                        return (t && t.default) || 0;
                    }
                    {
                        const r = ((s = t), window.getComputedStyle(s)),
                            n = ((0, T.f)(e) ? r.getPropertyValue(e) : r[e]) || 0;
                        return "string" == typeof n ? n.trim() : n;
                    }
                    var s;
                }
                measureInstanceViewportBox(t, { transformPagePoint: e }) {
                    return (0, P.J)(t, e);
                }
                build(t, e, s) {
                    (0, R.r)(t, e, s.transformTemplate);
                }
                scrapeMotionValuesFromProps(t, e, s) {
                    return (0, c.U)(t, e, s);
                }
            }
            var A = s(423384);
            const B = (t, e) => (u(t) ? new A.e(e) : new k(e, { allowProjection: t !== g.Fragment })),
                j = r(C({ ...n.s, ...o.E, ...i.o, ...a.b }, B));
        },
        132051: (t, e, s) => {
            s.d(e, { s: () => g });
            var r = s(898761),
                n = s(132881),
                i = s(506746),
                o = s(391564);
            const a = new Set(["auto", "none", "0"]);
            var l = s(530011),
                h = s(377781),
                u = s(751377),
                p = s(91331);
            const d = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            function c(t, e, s = 1) {
                (0, h.k)(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                const [r, n] = (function (t) {
                    const e = d.exec(t);
                    if (!e) return [,];
                    const [, s, r, n] = e;
                    return [`--${null != s ? s : r}`, n];
                })(t);
                if (!r) return;
                const i = window.getComputedStyle(e).getPropertyValue(r);
                if (i) {
                    const t = i.trim();
                    return (0, u.P)(t) ? parseFloat(t) : t;
                }
                return (0, p.t)(n) ? c(n, e, s + 1) : n;
            }
            var f = s(912345),
                m = s(903790);
            class g extends l.e {
                constructor(t, e, s, r, n) {
                    super(t, e, s, r, n, !0);
                }
                readKeyframes() {
                    const { unresolvedKeyframes: t, element: e, name: s } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let s = 0; s < t.length; s++) {
                        let r = t[s];
                        if ("string" == typeof r && ((r = r.trim()), (0, p.t)(r))) {
                            const n = c(r, e.current);
                            void 0 !== n && (t[s] = n), s === t.length - 1 && (this.finalKeyframe = r);
                        }
                    }
                    if ((this.resolveNoneKeyframes(), !n.z.has(s) || 2 !== t.length)) return;
                    const [r, i] = t,
                        o = (0, m.C)(r),
                        a = (0, m.C)(i);
                    if (o !== a)
                        if ((0, f.mP)(o) && (0, f.mP)(a))
                            for (let e = 0; e < t.length; e++) {
                                const s = t[e];
                                "string" == typeof s && (t[e] = parseFloat(s));
                            }
                        else this.needsMeasurement = !0;
                }
                resolveNoneKeyframes() {
                    const { unresolvedKeyframes: t, name: e } = this,
                        s = [];
                    for (let e = 0; e < t.length; e++) (0, r.W)(t[e]) && s.push(e);
                    s.length &&
                        (function (t, e, s) {
                            let r,
                                n = 0;
                            for (; n < t.length && !r; ) {
                                const e = t[n];
                                "string" == typeof e && !a.has(e) && (0, i.V)(e).values.length && (r = t[n]), n++;
                            }
                            if (r && s) for (const n of e) t[n] = (0, o.T)(s, r);
                        })(t, s, e);
                }
                measureInitialState() {
                    const { element: t, unresolvedKeyframes: e, name: s } = this;
                    if (!t || !t.current) return;
                    "height" === s && (this.suspendedScrollY = window.pageYOffset), (this.measuredOrigin = f.lw[s](t.measureViewportBox(), window.getComputedStyle(t.current))), (e[0] = this.measuredOrigin);
                    const r = e[e.length - 1];
                    void 0 !== r && t.getValue(s, r).jump(r, !1);
                }
                measureEndState() {
                    var t;
                    const { element: e, name: s, unresolvedKeyframes: r } = this;
                    if (!e || !e.current) return;
                    const n = e.getValue(s);
                    n && n.jump(this.measuredOrigin, !1);
                    const i = r.length - 1,
                        o = r[i];
                    (r[i] = f.lw[s](e.measureViewportBox(), window.getComputedStyle(e.current))),
                        null !== o && void 0 === this.finalKeyframe && (this.finalKeyframe = o),
                        (null === (t = this.removedTransforms) || void 0 === t ? void 0 : t.length) &&
                            this.removedTransforms.forEach(([t, s]) => {
                                e.getValue(t).set(s);
                            }),
                        this.resolveNoneKeyframes();
                }
            }
        },
        883798: (t, e, s) => {
            s.d(e, { J: () => R });
            var r = s(182644),
                n = s(707397),
                i = s(33933),
                o = s(751377),
                a = s(354561),
                l = s(362519),
                h = s(323993),
                u = s(988069),
                p = s(40226),
                d = s(506746),
                c = s(315815),
                f = s(391564),
                m = s(345982),
                g = s(903790),
                v = s(513624);
            const x = [...g.$, m.$, d.P];
            var y = s(208462);
            const b = new WeakMap();
            var V = s(723293),
                w = s(530011),
                S = s(608879),
                C = s(399764),
                P = s(241359);
            const M = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class T {
                scrapeMotionValuesFromProps(t, e, s) {
                    return {};
                }
                constructor({ parent: t, props: e, presenceContext: s, reducedMotionConfig: n, blockInitialAnimation: i, visualState: o }, a = {}) {
                    (this.current = null),
                        (this.children = new Set()),
                        (this.isVariantNode = !1),
                        (this.isControllingVariants = !1),
                        (this.shouldReduceMotion = null),
                        (this.values = new Map()),
                        (this.KeyframeResolver = w.e),
                        (this.features = {}),
                        (this.valueSubscriptions = new Map()),
                        (this.prevMotionValues = {}),
                        (this.events = {}),
                        (this.propEventSubscriptions = {}),
                        (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
                        (this.render = () => {
                            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
                        }),
                        (this.renderScheduledAt = 0),
                        (this.scheduleRender = () => {
                            const t = r.X.now();
                            this.renderScheduledAt < t && ((this.renderScheduledAt = t), P.Wi.render(this.render, !1, !0));
                        });
                    const { latestValues: l, renderState: h, onUpdate: u } = o;
                    (this.onUpdate = u), (this.latestValues = l), (this.baseTarget = { ...l }), (this.initialValues = e.initial ? { ...l } : {}), (this.renderState = h), (this.parent = t), (this.props = e), (this.presenceContext = s), (this.depth = t ? t.depth + 1 : 0), (this.reducedMotionConfig = n), (this.options = a), (this.blockInitialAnimation = Boolean(i)), (this.isControllingVariants = (0, V.G)(e)), (this.isVariantNode = (0, V.M)(e)), this.isVariantNode && (this.variantChildren = new Set()), (this.manuallyAnimateOnMount = Boolean(t && t.current));
                    const { willChange: p, ...d } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (const t in d) {
                        const e = d[t];
                        void 0 !== l[t] && (0, c.i)(e) && e.set(l[t], !1);
                    }
                }
                mount(t) {
                    (this.current = t), b.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), h.O.current || (0, l.A)(), (this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || h.n.current)), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
                }
                unmount() {
                    b.delete(this.current), this.projection && this.projection.unmount(), (0, P.Pn)(this.notifyUpdate), (0, P.Pn)(this.render), this.valueSubscriptions.forEach((t) => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
                    for (const t in this.events) this.events[t].clear();
                    for (const t in this.features) {
                        const e = this.features[t];
                        e && (e.unmount(), (e.isMounted = !1));
                    }
                    this.current = null;
                }
                bindToMotionValue(t, e) {
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    const s = y.G.has(t),
                        r = e.on("change", (e) => {
                            (this.latestValues[t] = e), this.props.onUpdate && P.Wi.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0);
                        }),
                        n = e.on("renderRequest", this.scheduleRender);
                    let i;
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)),
                        this.valueSubscriptions.set(t, () => {
                            r(), n(), i && i(), e.owner && e.stop();
                        });
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0;
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in n.featureDefinitions) {
                        const e = n.featureDefinitions[t];
                        if (!e) continue;
                        const { isEnabled: s, Feature: r } = e;
                        if ((!this.features[t] && r && s(this.props) && (this.features[t] = new r(this)), this.features[t])) {
                            const e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props);
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, i.dO)();
                }
                getStaticValue(t) {
                    return this.latestValues[t];
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e;
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), (this.prevProps = this.props), (this.props = t), (this.prevPresenceContext = this.presenceContext), (this.presenceContext = e);
                    for (let e = 0; e < M.length; e++) {
                        const s = M[e];
                        this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
                        const r = t["on" + s];
                        r && (this.propEventSubscriptions[s] = this.on(s, r));
                    }
                    (this.prevMotionValues = (0, S.F)(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues)), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this);
                }
                getProps() {
                    return this.props;
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0;
                }
                getDefaultTransition() {
                    return this.props.transition;
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint;
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
                }
                addVariantChild(t) {
                    const e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t);
                }
                addValue(t, e) {
                    const s = this.values.get(t);
                    e !== s && (s && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), (this.latestValues[t] = e.get()));
                }
                removeValue(t) {
                    this.values.delete(t);
                    const e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
                }
                hasValue(t) {
                    return this.values.has(t);
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let s = this.values.get(t);
                    return void 0 === s && void 0 !== e && ((s = (0, p.BX)(null === e ? void 0 : e, { owner: this })), this.addValue(t, s)), s;
                }
                readValue(t, e) {
                    var s;
                    let r = void 0 === this.latestValues[t] && this.current ? (null !== (s = this.getBaseTargetFromProps(this.props, t)) && void 0 !== s ? s : this.readValueFromInstance(this.current, t, this.options)) : this.latestValues[t];
                    var n;
                    return null != r && ("string" == typeof r && ((0, o.P)(r) || (0, a.W)(r)) ? (r = parseFloat(r)) : ((n = r), !x.find((0, v.l)(n)) && d.P.test(e) && (r = (0, f.T)(t, e))), this.setBaseTarget(t, (0, c.i)(r) ? r.get() : r)), (0, c.i)(r) ? r.get() : r;
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e;
                }
                getBaseTarget(t) {
                    var e;
                    const { initial: s } = this.props;
                    let r;
                    if ("string" == typeof s || "object" == typeof s) {
                        const n = (0, C.o)(this.props, s, null === (e = this.presenceContext) || void 0 === e ? void 0 : e.custom);
                        n && (r = n[t]);
                    }
                    if (s && void 0 !== r) return r;
                    const n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || (0, c.i)(n) ? (void 0 !== this.initialValues[t] && void 0 === r ? void 0 : this.baseTarget[t]) : n;
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new u.L()), this.events[t].add(e);
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e);
                }
            }
            var F = s(132051);
            class R extends T {
                constructor() {
                    super(...arguments), (this.KeyframeResolver = F.s);
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1;
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0;
                }
                removeValueFromRenderState(t, { vars: e, style: s }) {
                    delete e[t], delete s[t];
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    const { children: t } = this.props;
                    (0, c.i)(t) &&
                        (this.childSubscription = t.on("change", (t) => {
                            this.current && (this.current.textContent = `${t}`);
                        }));
                }
            }
        },
        618754: (t, e, s) => {
            s.d(e, { D: () => r });
            const r = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();
        },
        91331: (t, e, s) => {
            s.d(e, { f: () => n, t: () => o });
            const r = (t) => (e) => "string" == typeof e && e.startsWith(t),
                n = r("--"),
                i = r("var(--"),
                o = (t) => !!i(t) && a.test(t.split("/*")[0].trim()),
                a = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
        },
        528650: (t, e, s) => {
            function r(t) {
                return t instanceof SVGElement && "svg" !== t.tagName;
            }
            s.d(e, { v: () => r });
        },
        912345: (t, e, s) => {
            s.d(e, { Ei: () => p, lw: () => d, mP: () => o });
            var r = s(230397),
                n = s(288772),
                i = s(208462);
            const o = (t) => t === r.Rx || t === n.px,
                a = (t, e) => parseFloat(t.split(", ")[e]),
                l =
                    (t, e) =>
                    (s, { transform: r }) => {
                        if ("none" === r || !r) return 0;
                        const n = r.match(/^matrix3d\((.+)\)$/u);
                        if (n) return a(n[1], e);
                        {
                            const e = r.match(/^matrix\((.+)\)$/u);
                            return e ? a(e[1], t) : 0;
                        }
                    },
                h = new Set(["x", "y", "z"]),
                u = i._.filter((t) => !h.has(t));
            function p(t) {
                const e = [];
                return (
                    u.forEach((s) => {
                        const r = t.getValue(s);
                        void 0 !== r && (e.push([s, r.get()]), r.set(s.startsWith("scale") ? 1 : 0));
                    }),
                    e
                );
            }
            const d = { width: ({ x: t }, { paddingLeft: e = "0", paddingRight: s = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(s), height: ({ y: t }, { paddingTop: e = "0", paddingBottom: s = "0" }) => t.max - t.min - parseFloat(e) - parseFloat(s), top: (t, { top: e }) => parseFloat(e), left: (t, { left: e }) => parseFloat(e), bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min), right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min), x: l(4, 13), y: l(5, 14) };
            (d.translateX = d.x), (d.translateY = d.y);
        },
        391564: (t, e, s) => {
            s.d(e, { T: () => o });
            var r = s(506746),
                n = s(973764),
                i = s(88434);
            function o(t, e) {
                let s = (0, i.A)(t);
                return s !== n.h && (s = r.P), s.getAnimatableNone ? s.getAnimatableNone(e) : void 0;
            }
        },
        88434: (t, e, s) => {
            s.d(e, { A: () => o });
            var r = s(345982),
                n = s(973764);
            const i = { ...s(66030).j, color: r.$, backgroundColor: r.$, outlineColor: r.$, fill: r.$, stroke: r.$, borderColor: r.$, borderTopColor: r.$, borderRightColor: r.$, borderBottomColor: r.$, borderLeftColor: r.$, filter: n.h, WebkitFilter: n.h },
                o = (t) => i[t];
        },
        903790: (t, e, s) => {
            s.d(e, { $: () => o, C: () => a });
            var r = s(230397),
                n = s(288772),
                i = s(513624);
            const o = [r.Rx, n.px, n.aQ, n.RW, n.vw, n.vh, { test: (t) => "auto" === t, parse: (t) => t }],
                a = (t) => o.find((0, i.l)(t));
        },
        66030: (t, e, s) => {
            s.d(e, { j: () => l });
            var r = s(230397),
                n = s(288772);
            const i = { borderWidth: n.px, borderTopWidth: n.px, borderRightWidth: n.px, borderBottomWidth: n.px, borderLeftWidth: n.px, borderRadius: n.px, radius: n.px, borderTopLeftRadius: n.px, borderTopRightRadius: n.px, borderBottomRightRadius: n.px, borderBottomLeftRadius: n.px, width: n.px, maxWidth: n.px, height: n.px, maxHeight: n.px, top: n.px, right: n.px, bottom: n.px, left: n.px, padding: n.px, paddingTop: n.px, paddingRight: n.px, paddingBottom: n.px, paddingLeft: n.px, margin: n.px, marginTop: n.px, marginRight: n.px, marginBottom: n.px, marginLeft: n.px, backgroundPositionX: n.px, backgroundPositionY: n.px },
                o = { rotate: n.RW, rotateX: n.RW, rotateY: n.RW, rotateZ: n.RW, scale: r.bA, scaleX: r.bA, scaleY: r.bA, scaleZ: r.bA, skew: n.RW, skewX: n.RW, skewY: n.RW, distance: n.px, translateX: n.px, translateY: n.px, translateZ: n.px, x: n.px, y: n.px, z: n.px, perspective: n.px, transformPerspective: n.px, opacity: r.Fq, originX: n.$C, originY: n.$C, originZ: n.px },
                a = { ...r.Rx, transform: Math.round },
                l = { ...i, ...o, zIndex: a, size: n.px, fillOpacity: r.Fq, strokeOpacity: r.Fq, numOctaves: a };
        },
        513624: (t, e, s) => {
            s.d(e, { l: () => r });
            const r = (t) => (e) => e.test(t);
        },
        626: (t, e, s) => {
            s.d(e, { I: () => u, p: () => l });
            var r = s(202784),
                n = s(541980),
                i = s(315815),
                o = s(442673),
                a = s(883041);
            function l(t, e, s) {
                for (const r in e) (0, i.i)(e[r]) || (0, n.j)(r, s) || (t[r] = e[r]);
            }
            function h(t, e) {
                const s = {};
                return (
                    l(s, t.style || {}, t),
                    Object.assign(
                        s,
                        (function ({ transformTemplate: t }, e) {
                            return (0, r.useMemo)(() => {
                                const s = (0, a.a)();
                                return (0, o.r)(s, e, t), Object.assign({}, s.vars, s.style);
                            }, [e]);
                        })(t, e),
                    ),
                    s
                );
            }
            function u(t, e) {
                const s = {},
                    r = h(t, e);
                return t.drag && !1 !== t.dragListener && ((s.draggable = !1), (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"), (r.touchAction = !0 === t.drag ? "none" : "pan-" + ("x" === t.drag ? "y" : "x"))), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (s.tabIndex = 0), (s.style = r), s;
            }
        },
        442673: (t, e, s) => {
            s.d(e, { r: () => h });
            var r = s(91331);
            const n = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
            var i = s(66030),
                o = s(208462);
            const a = { x: "translateX", y: "translateY", z: "translateZ", transformPerspective: "perspective" },
                l = o._.length;
            function h(t, e, s) {
                const { style: h, vars: u, transformOrigin: p } = t;
                let d = !1,
                    c = !1;
                for (const t in e) {
                    const s = e[t];
                    if (o.G.has(t)) d = !0;
                    else if ((0, r.f)(t)) u[t] = s;
                    else {
                        const e = n(s, i.j[t]);
                        t.startsWith("origin") ? ((c = !0), (p[t] = e)) : (h[t] = e);
                    }
                }
                if (
                    (e.transform ||
                        (d || s
                            ? (h.transform = (function (t, e, s) {
                                  let r = "",
                                      h = !0;
                                  for (let u = 0; u < l; u++) {
                                      const l = o._[u],
                                          p = t[l];
                                      if (void 0 === p) continue;
                                      let d = !0;
                                      if (((d = "number" == typeof p ? p === (l.startsWith("scale") ? 1 : 0) : 0 === parseFloat(p)), !d || s)) {
                                          const t = n(p, i.j[l]);
                                          d || ((h = !1), (r += `${a[l] || l}(${t}) `)), s && (e[l] = t);
                                      }
                                  }
                                  return (r = r.trim()), s ? (r = s(e, h ? "" : r)) : h && (r = "none"), r;
                              })(e, t.transform, s))
                            : h.transform && (h.transform = "none")),
                    c)
                ) {
                    const { originX: t = "50%", originY: e = "50%", originZ: s = 0 } = p;
                    h.transformOrigin = `${t} ${e} ${s}`;
                }
            }
        },
        883041: (t, e, s) => {
            s.d(e, { a: () => r });
            const r = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
        },
        132881: (t, e, s) => {
            s.d(e, { z: () => n });
            var r = s(208462);
            const n = new Set(["width", "height", "top", "left", "right", "bottom", ...r._]);
        },
        208462: (t, e, s) => {
            s.d(e, { G: () => n, _: () => r });
            const r = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                n = new Set(r);
        },
        902473: (t, e, s) => {
            function r(t, { style: e, vars: s }, r, n) {
                Object.assign(t.style, e, n && n.getProjectionStyles(r));
                for (const e in s) t.style.setProperty(e, s[e]);
            }
            s.d(e, { N: () => r });
        },
        453921: (t, e, s) => {
            s.d(e, { U: () => i });
            var r = s(541980),
                n = s(315815);
            function i(t, e, s) {
                var i;
                const { style: o } = t,
                    a = {};
                for (const l in o) ((0, n.i)(o[l]) || (e.style && (0, n.i)(e.style[l])) || (0, r.j)(l, t) || void 0 !== (null === (i = null == s ? void 0 : s.getValue(l)) || void 0 === i ? void 0 : i.liveStyle)) && (a[l] = o[l]);
                return a;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-4436cc51.8515125a.js.map
