"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-a0a7bb72"],
    {
        894796: (t, e, o) => {
            o.d(e, { L: () => n });
            class n {
                constructor(t) {
                    (this.isMounted = !1), (this.node = t);
                }
                update() {}
            }
        },
        830116: (t, e, o) => {
            o.d(e, { s: () => d });
            var n = o(912816),
                i = o(990817),
                r = o(894796);
            class s extends r.L {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = (0, i.M)(t));
                }
                updateAnimationControlsSubscription() {
                    const { animate: t } = this.node.getProps();
                    (0, n.H)(t) && (this.unmountControls = t.subscribe(this.node));
                }
                mount() {
                    this.updateAnimationControlsSubscription();
                }
                update() {
                    const { animate: t } = this.node.getProps(),
                        { animate: e } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription();
                }
                unmount() {
                    var t;
                    this.node.animationState.reset(), null === (t = this.unmountControls) || void 0 === t || t.call(this);
                }
            }
            let a = 0;
            class u extends r.L {
                constructor() {
                    super(...arguments), (this.id = a++);
                }
                update() {
                    if (!this.node.presenceContext) return;
                    const { isPresent: t, onExitComplete: e } = this.node.presenceContext,
                        { isPresent: o } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === o) return;
                    const n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => e(this.id));
                }
                mount() {
                    const { register: t } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id));
                }
                unmount() {}
            }
            const d = { animation: { Feature: s }, exit: { Feature: u } };
        },
        707397: (t, e, o) => {
            o.d(e, { featureDefinitions: () => i });
            const n = { animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"], exit: ["exit"], drag: ["drag", "dragControls"], focus: ["whileFocus"], hover: ["whileHover", "onHoverStart", "onHoverEnd"], tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"], pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"], inView: ["whileInView", "onViewportEnter", "onViewportLeave"], layout: ["layout", "layoutId"] },
                i = {};
            for (const t in n) i[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
        },
        179265: (t, e, o) => {
            o.d(e, { o: () => a });
            var n = o(970704),
                i = o(488018),
                r = o(886379),
                s = o(433050);
            const a = { pan: { Feature: i.q }, drag: { Feature: n.h, ProjectionNode: s.u, MeasureLayout: r.q } };
        },
        387662: (t, e, o) => {
            o.d(e, { E: () => h });
            var n = o(98680),
                i = o(951108),
                r = o(253429),
                s = o(894796);
            const a = new WeakMap(),
                u = new WeakMap(),
                d = (t) => {
                    const e = a.get(t.target);
                    e && e(t);
                },
                l = (t) => {
                    t.forEach(d);
                };
            function c(t, e, o) {
                const n = (function ({ root: t, ...e }) {
                    const o = t || document;
                    u.has(o) || u.set(o, {});
                    const n = u.get(o),
                        i = JSON.stringify(e);
                    return n[i] || (n[i] = new IntersectionObserver(l, { root: t, ...e })), n[i];
                })(e);
                return (
                    a.set(t, o),
                    n.observe(t),
                    () => {
                        a.delete(t), n.unobserve(t);
                    }
                );
            }
            const p = { some: 0, all: 1 };
            class m extends s.L {
                constructor() {
                    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
                }
                startObserver() {
                    this.unmount();
                    const { viewport: t = {} } = this.node.getProps(),
                        { root: e, margin: o, amount: n = "some", once: i } = t,
                        r = { root: e ? e.current : void 0, rootMargin: o, threshold: "number" == typeof n ? n : p[n] };
                    return c(this.node.current, r, (t) => {
                        const { isIntersecting: e } = t;
                        if (this.isInView === e) return;
                        if (((this.isInView = e), i && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        const { onViewportEnter: o, onViewportLeave: n } = this.node.getProps(),
                            r = e ? o : n;
                        r && r(t);
                    });
                }
                mount() {
                    this.startObserver();
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    const { props: t, prevProps: e } = this.node;
                    ["amount", "margin", "root"].some(
                        (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
                            return (o) => t[o] !== e[o];
                        })(t, e),
                    ) && this.startObserver();
                }
                unmount() {}
            }
            const h = { inView: { Feature: m }, tap: { Feature: r.Q }, focus: { Feature: i.f }, hover: { Feature: n.a } };
        },
        981840: (t, e, o) => {
            o.d(e, { b: () => r });
            var n = o(433050),
                i = o(886379);
            const r = { layout: { ProjectionNode: n.u, MeasureLayout: i.q } };
        },
        886379: (t, e, o) => {
            o.d(e, { q: () => v });
            var n = o(552322),
                i = o(202784),
                r = o(858175),
                s = o(203422),
                a = o(364460),
                u = o(663722),
                d = o(445650),
                l = o(387995),
                c = o(514599),
                p = o(891353),
                m = o(241359);
            class h extends i.Component {
                componentDidMount() {
                    const { visualElement: t, layoutGroup: e, switchLayoutGroup: o, layoutId: n } = this.props,
                        { projection: i } = t;
                    (0, c.B)(f),
                        i &&
                            (e.group && e.group.add(i),
                            o && o.register && n && o.register(i),
                            i.root.didUpdate(),
                            i.addEventListener("animationComplete", () => {
                                this.safeToRemove();
                            }),
                            i.setOptions({ ...i.options, onExitComplete: () => this.safeToRemove() })),
                        (u.V.hasEverUpdated = !0);
                }
                getSnapshotBeforeUpdate(t) {
                    const { layoutDependency: e, visualElement: o, drag: n, isPresent: i } = this.props,
                        r = o.projection;
                    return r
                        ? ((r.isPresent = i),
                          n || t.layoutDependency !== e || void 0 === e ? r.willUpdate() : this.safeToRemove(),
                          t.isPresent !== i &&
                              (i
                                  ? r.promote()
                                  : r.relegate() ||
                                    m.Wi.postRender(() => {
                                        const t = r.getStack();
                                        (t && t.members.length) || this.safeToRemove();
                                    })),
                          null)
                        : null;
                }
                componentDidUpdate() {
                    const { projection: t } = this.props.visualElement;
                    t &&
                        (t.root.didUpdate(),
                        p.g.postRender(() => {
                            !t.currentAnimation && t.isLead() && this.safeToRemove();
                        }));
                }
                componentWillUnmount() {
                    const { visualElement: t, layoutGroup: e, switchLayoutGroup: o } = this.props,
                        { projection: n } = t;
                    n && (n.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(n), o && o.deregister && o.deregister(n));
                }
                safeToRemove() {
                    const { safeToRemove: t } = this.props;
                    t && t();
                }
                render() {
                    return null;
                }
            }
            function v(t) {
                const [e, o] = (0, r.oO)(),
                    u = (0, i.useContext)(s.p);
                return (0, n.jsx)(h, { ...t, layoutGroup: u, switchLayoutGroup: (0, i.useContext)(a.g), isPresent: e, safeToRemove: o });
            }
            const f = { borderRadius: { ...d.J, applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"] }, borderTopLeftRadius: d.J, borderTopRightRadius: d.J, borderBottomLeftRadius: d.J, borderBottomRightRadius: d.J, boxShadow: l.M };
        },
        37577: (t, e, o) => {
            o.d(e, { B: () => S });
            var n = o(552322),
                i = o(202784),
                r = o(203422),
                s = o(203273),
                a = o(160976),
                u = o(746154),
                d = o(282025),
                l = o(233791),
                c = o(707397);
            const p = Symbol.for("motionComponentSymbol");
            var m = o(208350);
            function h(t, e, o) {
                return (0, i.useCallback)(
                    (n) => {
                        n && t.onMount && t.onMount(n), e && (n ? e.mount(n) : e.unmount()), o && ("function" == typeof o ? o(n) : (0, m.I)(o) && (o.current = n));
                    },
                    [e],
                );
            }
            var v = o(97967),
                f = o(923617),
                g = o(267098),
                w = o(891353),
                y = o(364460);
            function C(t, e, o, n, r) {
                var d, l;
                const { visualElement: c } = (0, i.useContext)(u.v),
                    p = (0, i.useContext)(s.u),
                    h = (0, i.useContext)(v.O),
                    C = (0, i.useContext)(a._).reducedMotion,
                    S = (0, i.useRef)(null);
                (n = n || p.renderer), !S.current && n && (S.current = n(t, { visualState: e, parent: c, props: o, presenceContext: h, blockInitialAnimation: !!h && !1 === h.initial, reducedMotionConfig: C }));
                const E = S.current,
                    x = (0, i.useContext)(y.g);
                !E ||
                    E.projection ||
                    !r ||
                    ("html" !== E.type && "svg" !== E.type) ||
                    (function (t, e, o, n) {
                        const { layoutId: i, layout: r, drag: s, dragConstraints: a, layoutScroll: u, layoutRoot: d } = e;
                        (t.projection = new o(t.latestValues, e["data-framer-portal-id"] ? void 0 : b(t.parent))), t.projection.setOptions({ layoutId: i, layout: r, alwaysMeasureLayout: Boolean(s) || (a && (0, m.I)(a)), visualElement: t, animationType: "string" == typeof r ? r : "both", initialPromotionConfig: n, layoutScroll: u, layoutRoot: d });
                    })(S.current, o, r, x);
                const R = (0, i.useRef)(!1);
                (0, i.useInsertionEffect)(() => {
                    E && R.current && E.update(o, h);
                });
                const M = o[g.M],
                    P = (0, i.useRef)(Boolean(M) && !(null === (d = window.MotionHandoffIsComplete) || void 0 === d ? void 0 : d.call(window, M)) && (null === (l = window.MotionHasOptimisedAnimation) || void 0 === l ? void 0 : l.call(window, M)));
                return (
                    (0, f.L)(() => {
                        E && ((R.current = !0), (window.MotionIsMounted = !0), E.updateFeatures(), w.g.render(E.render), P.current && E.animationState && E.animationState.animateChanges());
                    }),
                    (0, i.useEffect)(() => {
                        E &&
                            (!P.current && E.animationState && E.animationState.animateChanges(),
                            P.current &&
                                (queueMicrotask(() => {
                                    var t;
                                    null === (t = window.MotionHandoffMarkAsComplete) || void 0 === t || t.call(window, M);
                                }),
                                (P.current = !1)));
                    }),
                    E
                );
            }
            function b(t) {
                if (t) return !1 !== t.options.allowProjection ? t.projection : b(t.parent);
            }
            function S({ preloadedFeatures: t, createVisualElement: e, useRender: o, useVisualState: r, Component: m }) {
                var v, f;
                function g(t, p) {
                    let v;
                    const f = { ...(0, i.useContext)(a._), ...t, layoutId: E(t) },
                        { isStatic: g } = f,
                        w = (0, d.H)(t),
                        y = r(t, g);
                    if (!g && l.j) {
                        !(function () {
                            (0, i.useContext)(s.u).strict;
                            0;
                        })();
                        const t = (function (t) {
                            const { drag: e, layout: o } = c.featureDefinitions;
                            if (!e && !o) return {};
                            const n = { ...e, ...o };
                            return { MeasureLayout: (null == e ? void 0 : e.isEnabled(t)) || (null == o ? void 0 : o.isEnabled(t)) ? n.MeasureLayout : void 0, ProjectionNode: n.ProjectionNode };
                        })(f);
                        (v = t.MeasureLayout), (w.visualElement = C(m, y, f, e, t.ProjectionNode));
                    }
                    return (0, n.jsxs)(u.v.Provider, { value: w, children: [v && w.visualElement ? (0, n.jsx)(v, { visualElement: w.visualElement, ...f }) : null, o(m, t, h(y, w.visualElement, p), y, g, w.visualElement)] });
                }
                t &&
                    (function (t) {
                        for (const e in t) c.featureDefinitions[e] = { ...c.featureDefinitions[e], ...t[e] };
                    })(t),
                    (g.displayName = `motion.${"string" == typeof m ? m : `create(${null !== (f = null !== (v = m.displayName) && void 0 !== v ? v : m.name) && void 0 !== f ? f : ""})`}`);
                const w = (0, i.forwardRef)(g);
                return (w[p] = m), w;
            }
            function E({ layoutId: t }) {
                const e = (0, i.useContext)(r.p).id;
                return e && void 0 !== t ? e + "-" + t : t;
            }
        },
        541980: (t, e, o) => {
            o.d(e, { j: () => r });
            var n = o(514599),
                i = o(208462);
            function r(t, { layout: e, layoutId: o }) {
                return i.G.has(t) || t.startsWith("origin") || ((e || void 0 !== o) && (!!n.P[t] || "opacity" === t));
            }
        },
        607819: (t, e, o) => {
            o.d(e, { t: () => c });
            var n = o(202784),
                i = o(912816),
                r = o(746154),
                s = o(97967),
                a = o(723293),
                u = o(399764),
                d = o(803105),
                l = o(669535);
            const c = (t) => (e, o) => {
                const i = (0, n.useContext)(r.v),
                    a = (0, n.useContext)(s.O),
                    u = () =>
                        (function ({ scrapeMotionValuesFromProps: t, createRenderState: e, onUpdate: o }, n, i, r) {
                            const s = { latestValues: p(n, i, r, t), renderState: e() };
                            return o && ((s.onMount = (t) => o({ props: n, current: t, ...s })), (s.onUpdate = (t) => o(t))), s;
                        })(t, e, i, a);
                return o ? u() : (0, d.h)(u);
            };
            function p(t, e, o, n) {
                const r = {},
                    s = n(t, {});
                for (const t in s) r[t] = (0, l.b)(s[t]);
                let { initial: d, animate: c } = t;
                const p = (0, a.G)(t),
                    m = (0, a.M)(t);
                e && m && !p && !1 !== t.inherit && (void 0 === d && (d = e.initial), void 0 === c && (c = e.animate));
                let h = !!o && !1 === o.initial;
                h = h || !1 === d;
                const v = h ? c : d;
                if (v && "boolean" != typeof v && !(0, i.H)(v)) {
                    const e = Array.isArray(v) ? v : [v];
                    for (let o = 0; o < e.length; o++) {
                        const n = (0, u.o)(t, e[o]);
                        if (n) {
                            const { transitionEnd: t, transition: e, ...o } = n;
                            for (const t in o) {
                                let e = o[t];
                                if (Array.isArray(e)) {
                                    e = e[h ? e.length - 1 : 0];
                                }
                                null !== e && (r[t] = e);
                            }
                            for (const e in t) r[e] = t[e];
                        }
                    }
                }
                return r;
            }
        },
        624232: (t, e, o) => {
            o.d(e, { Z: () => i });
            const n = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
            function i(t) {
                return t.startsWith("while") || (t.startsWith("drag") && "draggable" !== t) || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || n.has(t);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-a0a7bb72.5ea2fc1a.js.map
