"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d3107ce"],
    {
        477222: (t, e, i) => {
            function s({ top: t, left: e, right: i, bottom: s }) {
                return { x: { min: e, max: i }, y: { min: t, max: s } };
            }
            function o({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
            }
            function a(t, e) {
                if (!e) return t;
                const i = e({ x: t.left, y: t.top }),
                    s = e({ x: t.right, y: t.bottom });
                return { top: i.y, left: i.x, bottom: s.y, right: s.x };
            }
            i.d(e, { d7: () => a, i8: () => s, z2: () => o });
        },
        102217: (t, e, i) => {
            i.d(e, { D2: () => p, YY: () => u, am: () => d, o2: () => l, q2: () => a });
            var s = i(519038),
                o = i(428749);
            function a(t, e, i) {
                return i + e * (t - i);
            }
            function n(t, e, i, s, o) {
                return void 0 !== o && (t = a(t, o, s)), a(t, i, s) + e;
            }
            function r(t, e = 0, i = 1, s, o) {
                (t.min = n(t.min, e, i, s, o)), (t.max = n(t.max, e, i, s, o));
            }
            function l(t, { x: e, y: i }) {
                r(t.x, e.translate, e.scale, e.originPoint), r(t.y, i.translate, i.scale, i.originPoint);
            }
            const h = 0.999999999999,
                c = 1.0000000000001;
            function u(t, e, i, s = !1) {
                const a = i.length;
                if (!a) return;
                let n, r;
                e.x = e.y = 1;
                for (let h = 0; h < a; h++) {
                    (n = i[h]), (r = n.projectionDelta);
                    const { visualElement: a } = n.options;
                    (a && a.props.style && "contents" === a.props.style.display) || (s && n.options.layoutScroll && n.scroll && n !== n.root && p(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }), r && ((e.x *= r.x.scale), (e.y *= r.y.scale), l(t, r)), s && (0, o.ud)(n.latestValues) && p(t, n.latestValues));
                }
                e.x < c && e.x > h && (e.x = 1), e.y < c && e.y > h && (e.y = 1);
            }
            function d(t, e) {
                (t.min = t.min + e), (t.max = t.max + e);
            }
            function m(t, e, i, o, a = 0.5) {
                r(t, e, i, (0, s.t)(t.min, t.max, a), o);
            }
            function p(t, e) {
                m(t.x, e.x, e.scaleX, e.scale, e.originX), m(t.y, e.y, e.scaleY, e.scale, e.originY);
            }
        },
        324144: (t, e, i) => {
            i.d(e, { JO: () => l, b3: () => y, tf: () => m, wS: () => h, y$: () => u });
            var s = i(519038);
            const o = 0.9999,
                a = 1.0001,
                n = -0.01,
                r = 0.01;
            function l(t) {
                return t.max - t.min;
            }
            function h(t, e, i) {
                return Math.abs(t - e) <= i;
            }
            function c(t, e, i, h = 0.5) {
                (t.origin = h), (t.originPoint = (0, s.t)(e.min, e.max, t.origin)), (t.scale = l(i) / l(e)), (t.translate = (0, s.t)(i.min, i.max, t.origin) - t.originPoint), ((t.scale >= o && t.scale <= a) || isNaN(t.scale)) && (t.scale = 1), ((t.translate >= n && t.translate <= r) || isNaN(t.translate)) && (t.translate = 0);
            }
            function u(t, e, i, s) {
                c(t.x, e.x, i.x, s ? s.originX : void 0), c(t.y, e.y, i.y, s ? s.originY : void 0);
            }
            function d(t, e, i) {
                (t.min = i.min + e.min), (t.max = t.min + l(e));
            }
            function m(t, e, i) {
                d(t.x, e.x, i.x), d(t.y, e.y, i.y);
            }
            function p(t, e, i) {
                (t.min = e.min - i.min), (t.max = t.min + l(e));
            }
            function y(t, e, i) {
                p(t.x, e.x, i.x), p(t.y, e.y, i.y);
            }
        },
        33933: (t, e, i) => {
            i.d(e, { dO: () => o, wc: () => s });
            const s = () => ({ x: { translate: 0, scale: 1, origin: 0, originPoint: 0 }, y: { translate: 0, scale: 1, origin: 0, originPoint: 0 } }),
                o = () => ({ x: { min: 0, max: 0 }, y: { min: 0, max: 0 } });
        },
        433050: (t, e, i) => {
            i.d(e, { u: () => kt });
            var s = i(479556),
                o = i(587363),
                a = i(979943),
                n = i(358880),
                r = i(241359),
                l = i(891353),
                h = i(182644),
                c = i(528650),
                u = i(243159),
                d = i(51366),
                m = i(59803),
                p = i(519038),
                y = i(988069),
                f = i(669535),
                g = i(653870),
                v = i(941469),
                x = i(288772);
            const T = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                P = T.length,
                D = (t) => ("string" == typeof t ? parseFloat(t) : t),
                j = (t) => "number" == typeof t || x.px.test(t);
            function S(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius;
            }
            const R = w(0, 0.5, v.Bn),
                B = w(0.5, 0.95, o.Z);
            function w(t, e, i) {
                return (s) => (s < t ? 0 : s > e ? 1 : i((0, g.Y)(t, e, s)));
            }
            function A(t, e) {
                (t.min = e.min), (t.max = e.max);
            }
            function L(t, e) {
                A(t.x, e.x), A(t.y, e.y);
            }
            function V(t, e) {
                (t.translate = e.translate), (t.scale = e.scale), (t.originPoint = e.originPoint), (t.origin = e.origin);
            }
            var k = i(102217),
                O = i(324144);
            function E(t, e, i, s, o) {
                return (t -= e), (t = (0, k.q2)(t, 1 / i, s)), void 0 !== o && (t = (0, k.q2)(t, 1 / o, s)), t;
            }
            function b(t, e, [i, s, o], a, n) {
                !(function (t, e = 0, i = 1, s = 0.5, o, a = t, n = t) {
                    x.aQ.test(e) && ((e = parseFloat(e)), (e = (0, p.t)(n.min, n.max, e / 100) - n.min));
                    if ("number" != typeof e) return;
                    let r = (0, p.t)(a.min, a.max, s);
                    t === a && (r -= e), (t.min = E(t.min, e, i, r, o)), (t.max = E(t.max, e, i, r, o));
                })(t, e[i], e[s], e[o], e.scale, a, n);
            }
            const U = ["x", "scaleX", "originX"],
                C = ["y", "scaleY", "originY"];
            function F(t, e, i, s) {
                b(t.x, e, U, i ? i.x : void 0, s ? s.x : void 0), b(t.y, e, C, i ? i.y : void 0, s ? s.y : void 0);
            }
            var M = i(33933);
            function $(t) {
                return 0 === t.translate && 1 === t.scale;
            }
            function I(t) {
                return $(t.x) && $(t.y);
            }
            function z(t, e) {
                return t.min === e.min && t.max === e.max;
            }
            function Y(t, e) {
                return Math.round(t.min) === Math.round(e.min) && Math.round(t.max) === Math.round(e.max);
            }
            function X(t, e) {
                return Y(t.x, e.x) && Y(t.y, e.y);
            }
            function N(t) {
                return (0, O.JO)(t.x) / (0, O.JO)(t.y);
            }
            function W(t, e) {
                return t.translate === e.translate && t.scale === e.scale && t.originPoint === e.originPoint;
            }
            var J = i(444866);
            class _ {
                constructor() {
                    this.members = [];
                }
                add(t) {
                    (0, J.y4)(this.members, t), t.scheduleRender();
                }
                remove(t) {
                    if (((0, J.cl)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead)) {
                        const t = this.members[this.members.length - 1];
                        t && this.promote(t);
                    }
                }
                relegate(t) {
                    const e = this.members.findIndex((e) => t === e);
                    if (0 === e) return !1;
                    let i;
                    for (let t = e; t >= 0; t--) {
                        const e = this.members[t];
                        if (!1 !== e.isPresent) {
                            i = e;
                            break;
                        }
                    }
                    return !!i && (this.promote(i), !0);
                }
                promote(t, e) {
                    const i = this.lead;
                    if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), (t.resumeFrom = i), e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && ((t.snapshot = i.snapshot), (t.snapshot.latestValues = i.animationValues || i.latestValues)), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        const { crossfade: s } = t.options;
                        !1 === s && i.hide();
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach((t) => {
                        const { options: e, resumingFrom: i } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete();
                    });
                }
                scheduleRender() {
                    this.members.forEach((t) => {
                        t.instance && t.scheduleRender(!1);
                    });
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
                }
            }
            var H = i(514599);
            var Z = i(101010),
                q = i(428749),
                G = i(663722);
            const Q = { type: "projectionFrame", totalNodes: 0, resolvedTargetDeltas: 0, recalculatedProjection: 0 },
                K = "undefined" != typeof window && void 0 !== window.MotionDebug,
                tt = ["", "X", "Y", "Z"],
                et = { visibility: "hidden" };
            let it = 0;
            function st(t, e, i, s) {
                const { latestValues: o } = e;
                o[t] && ((i[t] = o[t]), e.setStaticValue(t, 0), s && (s[t] = 0));
            }
            function ot(t) {
                if (((t.hasCheckedOptimisedAppear = !0), t.root === t)) return;
                const { visualElement: e } = t.options;
                if (!e) return;
                const i = (0, n.s)(e);
                if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    const { layout: e, layoutId: s } = t.options;
                    window.MotionCancelOptimisedAnimation(i, "transform", r.Wi, !(e || s));
                }
                const { parent: s } = t;
                s && !s.hasCheckedOptimisedAppear && ot(s);
            }
            function at({ attachResizeListener: t, defaultParent: e, measureScroll: i, checkIsScrollRoot: o, resetTransform: n }) {
                return class {
                    constructor(t = {}, i = null == e ? void 0 : e()) {
                        (this.id = it++),
                            (this.animationId = 0),
                            (this.children = new Set()),
                            (this.options = {}),
                            (this.isTreeAnimating = !1),
                            (this.isAnimationBlocked = !1),
                            (this.isLayoutDirty = !1),
                            (this.isProjectionDirty = !1),
                            (this.isSharedProjectionDirty = !1),
                            (this.isTransformDirty = !1),
                            (this.updateManuallyBlocked = !1),
                            (this.updateBlockedByResize = !1),
                            (this.isUpdating = !1),
                            (this.isSVG = !1),
                            (this.needsReset = !1),
                            (this.shouldResetTransform = !1),
                            (this.hasCheckedOptimisedAppear = !1),
                            (this.treeScale = { x: 1, y: 1 }),
                            (this.eventHandlers = new Map()),
                            (this.hasTreeAnimated = !1),
                            (this.updateScheduled = !1),
                            (this.scheduleUpdate = () => this.update()),
                            (this.projectionUpdateScheduled = !1),
                            (this.checkUpdateFailed = () => {
                                this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
                            }),
                            (this.updateProjection = () => {
                                (this.projectionUpdateScheduled = !1), K && (Q.totalNodes = Q.resolvedTargetDeltas = Q.recalculatedProjection = 0), this.nodes.forEach(lt), this.nodes.forEach(yt), this.nodes.forEach(ft), this.nodes.forEach(ht), K && window.MotionDebug.record(Q);
                            }),
                            (this.resolvedRelativeTargetAt = 0),
                            (this.hasProjected = !1),
                            (this.isVisible = !0),
                            (this.animationProgress = 0),
                            (this.sharedNodes = new Map()),
                            (this.latestValues = t),
                            (this.root = i ? i.root || i : this),
                            (this.path = i ? [...i.path, i] : []),
                            (this.parent = i),
                            (this.depth = i ? i.depth + 1 : 0);
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new u.E());
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new y.L()), this.eventHandlers.get(t).add(e);
                    }
                    notifyListeners(t, ...e) {
                        const i = this.eventHandlers.get(t);
                        i && i.notify(...e);
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t);
                    }
                    mount(e, i = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        (this.isSVG = (0, c.v)(e)), (this.instance = e);
                        const { layoutId: o, layout: a, visualElement: n } = this.options;
                        if ((n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), i && (a || o) && (this.isLayoutDirty = !0), t)) {
                            let i;
                            const s = () => (this.root.updateBlockedByResize = !1);
                            t(e, () => {
                                (this.root.updateBlockedByResize = !0), i && i(), (i = (0, m.g)(s, 250)), G.V.hasAnimatedSinceResize && ((G.V.hasAnimatedSinceResize = !1), this.nodes.forEach(pt));
                            });
                        }
                        o && this.root.registerSharedNode(o, this),
                            !1 !== this.options.animate &&
                                n &&
                                (o || a) &&
                                this.addEventListener("didUpdate", ({ delta: t, hasLayoutChanged: e, hasRelativeTargetChanged: i, layout: o }) => {
                                    if (this.isTreeAnimationBlocked()) return (this.target = void 0), void (this.relativeTarget = void 0);
                                    const a = this.options.transition || n.getDefaultTransition() || Dt,
                                        { onLayoutAnimationStart: r, onLayoutAnimationComplete: l } = n.getProps(),
                                        h = !this.targetLayout || !X(this.targetLayout, o) || i,
                                        c = !e && i;
                                    if (this.options.layoutRoot || (this.resumeFrom && this.resumeFrom.instance) || c || (e && (h || !this.currentAnimation))) {
                                        this.resumeFrom && ((this.resumingFrom = this.resumeFrom), (this.resumingFrom.resumingFrom = void 0)), this.setAnimationOrigin(t, c);
                                        const e = { ...(0, s.ev)(a, "layout"), onPlay: r, onComplete: l };
                                        (n.shouldReduceMotion || this.options.layoutRoot) && ((e.delay = 0), (e.type = !1)), this.startAnimation(e);
                                    } else e || pt(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                                    this.targetLayout = o;
                                });
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        const t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), (this.instance = void 0), (0, r.Pn)(this.updateProjection);
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0;
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1;
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize;
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || (this.parent && this.parent.isTreeAnimationBlocked()) || !1;
                    }
                    startUpdate() {
                        this.isUpdateBlocked() || ((this.isUpdating = !0), this.nodes && this.nodes.forEach(gt), this.animationId++);
                    }
                    getTransformTemplate() {
                        const { visualElement: t } = this.options;
                        return t && t.getProps().transformTemplate;
                    }
                    willUpdate(t = !0) {
                        if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) return void (this.options.onExitComplete && this.options.onExitComplete());
                        if ((window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && ot(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            const e = this.path[t];
                            (e.shouldResetTransform = !0), e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1);
                        }
                        const { layoutId: e, layout: i } = this.options;
                        if (void 0 === e && !i) return;
                        const s = this.getTransformTemplate();
                        (this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0), this.updateSnapshot(), t && this.notifyListeners("willUpdate");
                    }
                    update() {
                        this.updateScheduled = !1;
                        if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(ut);
                        this.isUpdating || this.nodes.forEach(dt), (this.isUpdating = !1), this.nodes.forEach(mt), this.nodes.forEach(nt), this.nodes.forEach(rt), this.clearAllSnapshots();
                        const t = h.X.now();
                        (r.frameData.delta = (0, d.u)(0, 1e3 / 60, t - r.frameData.timestamp)), (r.frameData.timestamp = t), (r.frameData.isProcessing = !0), r.yL.update.process(r.frameData), r.yL.preRender.process(r.frameData), r.yL.render.process(r.frameData), (r.frameData.isProcessing = !1);
                    }
                    didUpdate() {
                        this.updateScheduled || ((this.updateScheduled = !0), l.g.read(this.scheduleUpdate));
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(ct), this.sharedNodes.forEach(vt);
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || ((this.projectionUpdateScheduled = !0), r.Wi.preRender(this.updateProjection, !1, !0));
                    }
                    scheduleCheckAfterUnmount() {
                        r.Wi.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
                        });
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure());
                    }
                    updateLayout() {
                        if (!this.instance) return;
                        if ((this.updateScroll(), !((this.options.alwaysMeasureLayout && this.isLead()) || this.isLayoutDirty))) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) {
                                this.path[t].updateScroll();
                            }
                        const t = this.layout;
                        (this.layout = this.measure(!1)), (this.layoutCorrected = (0, M.dO)()), (this.isLayoutDirty = !1), (this.projectionDelta = void 0), this.notifyListeners("measure", this.layout.layoutBox);
                        const { visualElement: e } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0);
                    }
                    updateScroll(t = "measure") {
                        let e = Boolean(this.options.layoutScroll && this.instance);
                        if ((this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e)) {
                            const e = o(this.instance);
                            this.scroll = { animationId: this.root.animationId, phase: t, isRoot: e, offset: i(this.instance), wasRoot: this.scroll ? this.scroll.isRoot : e };
                        }
                    }
                    resetTransform() {
                        if (!n) return;
                        const t = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                            e = this.projectionDelta && !I(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            o = s !== this.prevTransformTemplateValue;
                        t && (e || (0, q.ud)(this.latestValues) || o) && (n(this.instance, s), (this.shouldResetTransform = !1), this.scheduleRender());
                    }
                    measure(t = !0) {
                        const e = this.measurePageBox();
                        let i = this.removeElementScroll(e);
                        var s;
                        return t && (i = this.removeTransform(i)), Rt((s = i).x), Rt(s.y), { animationId: this.root.animationId, measuredBox: e, layoutBox: i, latestValues: {}, source: this.id };
                    }
                    measurePageBox() {
                        var t;
                        const { visualElement: e } = this.options;
                        if (!e) return (0, M.dO)();
                        const i = e.measureViewportBox();
                        if (!((null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) || this.path.some(wt))) {
                            const { scroll: t } = this.root;
                            t && ((0, k.am)(i.x, t.offset.x), (0, k.am)(i.y, t.offset.y));
                        }
                        return i;
                    }
                    removeElementScroll(t) {
                        var e;
                        const i = (0, M.dO)();
                        if ((L(i, t), null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot)) return i;
                        for (let e = 0; e < this.path.length; e++) {
                            const s = this.path[e],
                                { scroll: o, options: a } = s;
                            s !== this.root && o && a.layoutScroll && (o.wasRoot && L(i, t), (0, k.am)(i.x, o.offset.x), (0, k.am)(i.y, o.offset.y));
                        }
                        return i;
                    }
                    applyTransform(t, e = !1) {
                        const i = (0, M.dO)();
                        L(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            const s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, k.D2)(i, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }), (0, q.ud)(s.latestValues) && (0, k.D2)(i, s.latestValues);
                        }
                        return (0, q.ud)(this.latestValues) && (0, k.D2)(i, this.latestValues), i;
                    }
                    removeTransform(t) {
                        const e = (0, M.dO)();
                        L(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            const i = this.path[t];
                            if (!i.instance) continue;
                            if (!(0, q.ud)(i.latestValues)) continue;
                            (0, q.Lj)(i.latestValues) && i.updateSnapshot();
                            const s = (0, M.dO)();
                            L(s, i.measurePageBox()), F(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s);
                        }
                        return (0, q.ud)(this.latestValues) && F(e, this.latestValues), e;
                    }
                    setTargetDelta(t) {
                        (this.targetDelta = t), this.root.scheduleUpdateProjection(), (this.isProjectionDirty = !0);
                    }
                    setOptions(t) {
                        this.options = { ...this.options, ...t, crossfade: void 0 === t.crossfade || t.crossfade };
                    }
                    clearMeasurements() {
                        (this.scroll = void 0), (this.layout = void 0), (this.snapshot = void 0), (this.prevTransformTemplateValue = void 0), (this.targetDelta = void 0), (this.target = void 0), (this.isLayoutDirty = !1);
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== r.frameData.timestamp && this.relativeParent.resolveTargetDelta(!0);
                    }
                    resolveTargetDelta(t = !1) {
                        var e;
                        const i = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = i.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = i.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = i.isSharedProjectionDirty);
                        const s = Boolean(this.resumingFrom) || this !== i;
                        if (!(t || (s && this.isSharedProjectionDirty) || this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                        const { layout: o, layoutId: a } = this.options;
                        if (this.layout && (o || a)) {
                            if (((this.resolvedRelativeTargetAt = r.frameData.timestamp), !this.targetDelta && !this.relativeTarget)) {
                                const t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? ((this.relativeParent = t), this.forceRelativeParentToResolveTarget(), (this.relativeTarget = (0, M.dO)()), (this.relativeTargetOrigin = (0, M.dO)()), (0, O.b3)(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), L(this.relativeTarget, this.relativeTargetOrigin)) : (this.relativeParent = this.relativeTarget = void 0);
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if ((this.target || ((this.target = (0, M.dO)()), (this.targetWithTransforms = (0, M.dO)())), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, O.tf)(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (Boolean(this.resumingFrom) ? (this.target = this.applyTransform(this.layout.layoutBox)) : L(this.target, this.layout.layoutBox), (0, k.o2)(this.target, this.targetDelta)) : L(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget)) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    const t = this.getClosestProjectingParent();
                                    t && Boolean(t.resumingFrom) === Boolean(this.resumingFrom) && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? ((this.relativeParent = t), this.forceRelativeParentToResolveTarget(), (this.relativeTarget = (0, M.dO)()), (this.relativeTargetOrigin = (0, M.dO)()), (0, O.b3)(this.relativeTargetOrigin, this.target, t.target), L(this.relativeTarget, this.relativeTargetOrigin)) : (this.relativeParent = this.relativeTarget = void 0);
                                }
                                K && Q.resolvedTargetDeltas++;
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (this.parent && !(0, q.Lj)(this.parent.latestValues) && !(0, q.D_)(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
                    }
                    isProjecting() {
                        return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
                    }
                    calcProjection() {
                        var t;
                        const e = this.getLead(),
                            i = Boolean(this.resumingFrom) || this !== e;
                        let s = !0;
                        if (((this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty)) && (s = !1), i && (this.isSharedProjectionDirty || this.isTransformDirty) && (s = !1), this.resolvedRelativeTargetAt === r.frameData.timestamp && (s = !1), s)) return;
                        const { layout: o, layoutId: a } = this.options;
                        if (((this.isTreeAnimating = Boolean((this.parent && this.parent.isTreeAnimating) || this.currentAnimation || this.pendingAnimation)), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || (!o && !a))) return;
                        L(this.layoutCorrected, this.layout.layoutBox);
                        const n = this.treeScale.x,
                            l = this.treeScale.y;
                        (0, k.YY)(this.layoutCorrected, this.treeScale, this.path, i), !e.layout || e.target || (1 === this.treeScale.x && 1 === this.treeScale.y) || ((e.target = e.layout.layoutBox), (e.targetWithTransforms = (0, M.dO)()));
                        const { target: h } = e;
                        h ? (this.projectionDelta && this.prevProjectionDelta ? (V(this.prevProjectionDelta.x, this.projectionDelta.x), V(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), (0, O.y$)(this.projectionDelta, this.layoutCorrected, h, this.latestValues), (this.treeScale.x === n && this.treeScale.y === l && W(this.projectionDelta.x, this.prevProjectionDelta.x) && W(this.projectionDelta.y, this.prevProjectionDelta.y)) || ((this.hasProjected = !0), this.scheduleRender(), this.notifyListeners("projectionUpdate", h)), K && Q.recalculatedProjection++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
                    }
                    hide() {
                        this.isVisible = !1;
                    }
                    show() {
                        this.isVisible = !0;
                    }
                    scheduleRender(t = !0) {
                        var e;
                        if ((null === (e = this.options.visualElement) || void 0 === e || e.scheduleRender(), t)) {
                            const t = this.getStack();
                            t && t.scheduleRender();
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
                    }
                    createProjectionDeltas() {
                        (this.prevProjectionDelta = (0, M.wc)()), (this.projectionDelta = (0, M.wc)()), (this.projectionDeltaWithTransform = (0, M.wc)());
                    }
                    setAnimationOrigin(t, e = !1) {
                        const i = this.snapshot,
                            s = i ? i.latestValues : {},
                            o = { ...this.latestValues },
                            a = (0, M.wc)();
                        (this.relativeParent && this.relativeParent.options.layoutRoot) || (this.relativeTarget = this.relativeTargetOrigin = void 0), (this.attemptToResolveRelativeTarget = !e);
                        const n = (0, M.dO)(),
                            r = (i ? i.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            l = this.getStack(),
                            h = !l || l.members.length <= 1,
                            c = Boolean(r && !h && !0 === this.options.crossfade && !this.path.some(Pt));
                        let u;
                        (this.animationProgress = 0),
                            (this.mixTargetDelta = (e) => {
                                const i = e / 1e3;
                                var l, d, m, y, f, g;
                                xt(a.x, t.x, i),
                                    xt(a.y, t.y, i),
                                    this.setTargetDelta(a),
                                    this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && ((0, O.b3)(n, this.layout.layoutBox, this.relativeParent.layout.layoutBox), (m = this.relativeTarget), (y = this.relativeTargetOrigin), (f = n), (g = i), Tt(m.x, y.x, f.x, g), Tt(m.y, y.y, f.y, g), u && ((l = this.relativeTarget), (d = u), z(l.x, d.x) && z(l.y, d.y)) && (this.isProjectionDirty = !1), u || (u = (0, M.dO)()), L(u, this.relativeTarget)),
                                    r &&
                                        ((this.animationValues = o),
                                        (function (t, e, i, s, o, a) {
                                            o ? ((t.opacity = (0, p.t)(0, void 0 !== i.opacity ? i.opacity : 1, R(s))), (t.opacityExit = (0, p.t)(void 0 !== e.opacity ? e.opacity : 1, 0, B(s)))) : a && (t.opacity = (0, p.t)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, s));
                                            for (let o = 0; o < P; o++) {
                                                const a = `border${T[o]}Radius`;
                                                let n = S(e, a),
                                                    r = S(i, a);
                                                (void 0 === n && void 0 === r) || (n || (n = 0), r || (r = 0), 0 === n || 0 === r || j(n) === j(r) ? ((t[a] = Math.max((0, p.t)(D(n), D(r), s), 0)), (x.aQ.test(r) || x.aQ.test(n)) && (t[a] += "%")) : (t[a] = r));
                                            }
                                            (e.rotate || i.rotate) && (t.rotate = (0, p.t)(e.rotate || 0, i.rotate || 0, s));
                                        })(o, s, this.latestValues, i, c, h)),
                                    this.root.scheduleUpdateProjection(),
                                    this.scheduleRender(),
                                    (this.animationProgress = i);
                            }),
                            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"),
                            this.currentAnimation && this.currentAnimation.stop(),
                            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
                            this.pendingAnimation && ((0, r.Pn)(this.pendingAnimation), (this.pendingAnimation = void 0)),
                            (this.pendingAnimation = r.Wi.update(() => {
                                (G.V.hasAnimatedSinceResize = !0),
                                    (this.currentAnimation = (0, a.D)(0, 1e3, {
                                        ...t,
                                        onUpdate: (e) => {
                                            this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                                        },
                                        onComplete: () => {
                                            t.onComplete && t.onComplete(), this.completeAnimation();
                                        },
                                    })),
                                    this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                                    (this.pendingAnimation = void 0);
                            }));
                    }
                    completeAnimation() {
                        this.resumingFrom && ((this.resumingFrom.currentAnimation = void 0), (this.resumingFrom.preserveOpacity = void 0));
                        const t = this.getStack();
                        t && t.exitAnimationComplete(), (this.resumingFrom = this.currentAnimation = this.animationValues = void 0), this.notifyListeners("animationComplete");
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation();
                    }
                    applyTransformsToTarget() {
                        const t = this.getLead();
                        let { targetWithTransforms: e, target: i, layout: s, latestValues: o } = t;
                        if (e && i && s) {
                            if (this !== t && this.layout && s && Bt(this.options.animationType, this.layout.layoutBox, s.layoutBox)) {
                                i = this.target || (0, M.dO)();
                                const e = (0, O.JO)(this.layout.layoutBox.x);
                                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                                const s = (0, O.JO)(this.layout.layoutBox.y);
                                (i.y.min = t.target.y.min), (i.y.max = i.y.min + s);
                            }
                            L(e, i), (0, k.D2)(e, o), (0, O.y$)(this.projectionDeltaWithTransform, this.layoutCorrected, e, o);
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new _());
                        this.sharedNodes.get(t).add(e);
                        const i = e.options.initialPromotionConfig;
                        e.promote({ transition: i ? i.transition : void 0, preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0 });
                    }
                    isLead() {
                        const t = this.getStack();
                        return !t || t.lead === this;
                    }
                    getLead() {
                        var t;
                        const { layoutId: e } = this.options;
                        return (e && (null === (t = this.getStack()) || void 0 === t ? void 0 : t.lead)) || this;
                    }
                    getPrevLead() {
                        var t;
                        const { layoutId: e } = this.options;
                        return e ? (null === (t = this.getStack()) || void 0 === t ? void 0 : t.prevLead) : void 0;
                    }
                    getStack() {
                        const { layoutId: t } = this.options;
                        if (t) return this.root.sharedNodes.get(t);
                    }
                    promote({ needsReset: t, transition: e, preserveFollowOpacity: i } = {}) {
                        const s = this.getStack();
                        s && s.promote(this, i), t && ((this.projectionDelta = void 0), (this.needsReset = !0)), e && this.setOptions({ transition: e });
                    }
                    relegate() {
                        const t = this.getStack();
                        return !!t && t.relegate(this);
                    }
                    resetSkewAndRotation() {
                        const { visualElement: t } = this.options;
                        if (!t) return;
                        let e = !1;
                        const { latestValues: i } = t;
                        if (((i.z || i.rotate || i.rotateX || i.rotateY || i.rotateZ || i.skewX || i.skewY) && (e = !0), !e)) return;
                        const s = {};
                        i.z && st("z", t, s, this.animationValues);
                        for (let e = 0; e < tt.length; e++) st(`rotate${tt[e]}`, t, s, this.animationValues), st(`skew${tt[e]}`, t, s, this.animationValues);
                        t.render();
                        for (const e in s) t.setStaticValue(e, s[e]), this.animationValues && (this.animationValues[e] = s[e]);
                        t.scheduleRender();
                    }
                    getProjectionStyles(t) {
                        var e, i;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return et;
                        const s = { visibility: "" },
                            o = this.getTransformTemplate();
                        if (this.needsReset) return (this.needsReset = !1), (s.opacity = ""), (s.pointerEvents = (0, f.b)(null == t ? void 0 : t.pointerEvents) || ""), (s.transform = o ? o(this.latestValues, "") : "none"), s;
                        const a = this.getLead();
                        if (!this.projectionDelta || !this.layout || !a.target) {
                            const e = {};
                            return this.options.layoutId && ((e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1), (e.pointerEvents = (0, f.b)(null == t ? void 0 : t.pointerEvents) || "")), this.hasProjected && !(0, q.ud)(this.latestValues) && ((e.transform = o ? o({}, "") : "none"), (this.hasProjected = !1)), e;
                        }
                        const n = a.animationValues || a.latestValues;
                        this.applyTransformsToTarget(),
                            (s.transform = (function (t, e, i) {
                                let s = "";
                                const o = t.x.translate / e.x,
                                    a = t.y.translate / e.y,
                                    n = (null == i ? void 0 : i.z) || 0;
                                if (((o || a || n) && (s = `translate3d(${o}px, ${a}px, ${n}px) `), (1 === e.x && 1 === e.y) || (s += `scale(${1 / e.x}, ${1 / e.y}) `), i)) {
                                    const { transformPerspective: t, rotate: e, rotateX: o, rotateY: a, skewX: n, skewY: r } = i;
                                    t && (s = `perspective(${t}px) ${s}`), e && (s += `rotate(${e}deg) `), o && (s += `rotateX(${o}deg) `), a && (s += `rotateY(${a}deg) `), n && (s += `skewX(${n}deg) `), r && (s += `skewY(${r}deg) `);
                                }
                                const r = t.x.scale * e.x,
                                    l = t.y.scale * e.y;
                                return (1 === r && 1 === l) || (s += `scale(${r}, ${l})`), s || "none";
                            })(this.projectionDeltaWithTransform, this.treeScale, n)),
                            o && (s.transform = o(n, s.transform));
                        const { x: r, y: l } = this.projectionDelta;
                        (s.transformOrigin = `${100 * r.origin}% ${100 * l.origin}% 0`), a.animationValues ? (s.opacity = a === this ? (null !== (i = null !== (e = n.opacity) && void 0 !== e ? e : this.latestValues.opacity) && void 0 !== i ? i : 1) : this.preserveOpacity ? this.latestValues.opacity : n.opacityExit) : (s.opacity = a === this ? (void 0 !== n.opacity ? n.opacity : "") : void 0 !== n.opacityExit ? n.opacityExit : 0);
                        for (const t in H.P) {
                            if (void 0 === n[t]) continue;
                            const { correct: e, applyTo: i } = H.P[t],
                                o = "none" === s.transform ? n[t] : e(n[t], a);
                            if (i) {
                                const t = i.length;
                                for (let e = 0; e < t; e++) s[i[e]] = o;
                            } else s[t] = o;
                        }
                        return this.options.layoutId && (s.pointerEvents = a === this ? (0, f.b)(null == t ? void 0 : t.pointerEvents) || "" : "none"), s;
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0;
                    }
                    resetTree() {
                        this.root.nodes.forEach((t) => {
                            var e;
                            return null === (e = t.currentAnimation) || void 0 === e ? void 0 : e.stop();
                        }),
                            this.root.nodes.forEach(ut),
                            this.root.sharedNodes.clear();
                    }
                };
            }
            function nt(t) {
                t.updateLayout();
            }
            function rt(t) {
                var e;
                const i = (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && i && t.hasListeners("didUpdate")) {
                    const { layoutBox: e, measuredBox: s } = t.layout,
                        { animationType: o } = t.options,
                        a = i.source !== t.layout.source;
                    "size" === o
                        ? (0, Z.U)((t) => {
                              const s = a ? i.measuredBox[t] : i.layoutBox[t],
                                  o = (0, O.JO)(s);
                              (s.min = e[t].min), (s.max = s.min + o);
                          })
                        : Bt(o, i.layoutBox, e) &&
                          (0, Z.U)((s) => {
                              const o = a ? i.measuredBox[s] : i.layoutBox[s],
                                  n = (0, O.JO)(e[s]);
                              (o.max = o.min + n), t.relativeTarget && !t.currentAnimation && ((t.isProjectionDirty = !0), (t.relativeTarget[s].max = t.relativeTarget[s].min + n));
                          });
                    const n = (0, M.wc)();
                    (0, O.y$)(n, e, i.layoutBox);
                    const r = (0, M.wc)();
                    a ? (0, O.y$)(r, t.applyTransform(s, !0), i.measuredBox) : (0, O.y$)(r, e, i.layoutBox);
                    const l = !I(n);
                    let h = !1;
                    if (!t.resumeFrom) {
                        const s = t.getClosestProjectingParent();
                        if (s && !s.resumeFrom) {
                            const { snapshot: o, layout: a } = s;
                            if (o && a) {
                                const n = (0, M.dO)();
                                (0, O.b3)(n, i.layoutBox, o.layoutBox);
                                const r = (0, M.dO)();
                                (0, O.b3)(r, e, a.layoutBox), X(n, r) || (h = !0), s.options.layoutRoot && ((t.relativeTarget = r), (t.relativeTargetOrigin = n), (t.relativeParent = s));
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", { layout: e, snapshot: i, delta: r, layoutDelta: n, hasLayoutChanged: l, hasRelativeTargetChanged: h });
                } else if (t.isLead()) {
                    const { onExitComplete: e } = t.options;
                    e && e();
                }
                t.options.transition = void 0;
            }
            function lt(t) {
                K && Q.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = Boolean(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty));
            }
            function ht(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1;
            }
            function ct(t) {
                t.clearSnapshot();
            }
            function ut(t) {
                t.clearMeasurements();
            }
            function dt(t) {
                t.isLayoutDirty = !1;
            }
            function mt(t) {
                const { visualElement: e } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform();
            }
            function pt(t) {
                t.finishAnimation(), (t.targetDelta = t.relativeTarget = t.target = void 0), (t.isProjectionDirty = !0);
            }
            function yt(t) {
                t.resolveTargetDelta();
            }
            function ft(t) {
                t.calcProjection();
            }
            function gt(t) {
                t.resetSkewAndRotation();
            }
            function vt(t) {
                t.removeLeadSnapshot();
            }
            function xt(t, e, i) {
                (t.translate = (0, p.t)(e.translate, 0, i)), (t.scale = (0, p.t)(e.scale, 1, i)), (t.origin = e.origin), (t.originPoint = e.originPoint);
            }
            function Tt(t, e, i, s) {
                (t.min = (0, p.t)(e.min, i.min, s)), (t.max = (0, p.t)(e.max, i.max, s));
            }
            function Pt(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit;
            }
            const Dt = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
                jt = (t) => "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(t),
                St = jt("applewebkit/") && !jt("chrome/") ? Math.round : o.Z;
            function Rt(t) {
                (t.min = St(t.min)), (t.max = St(t.max));
            }
            function Bt(t, e, i) {
                return "position" === t || ("preserve-aspect" === t && !(0, O.wS)(N(e), N(i), 0.2));
            }
            function wt(t) {
                var e;
                return t !== t.root && (null === (e = t.scroll) || void 0 === e ? void 0 : e.wasRoot);
            }
            var At = i(778624);
            const Lt = at({ attachResizeListener: (t, e) => (0, At.E)(t, "resize", e), measureScroll: () => ({ x: document.documentElement.scrollLeft || document.body.scrollLeft, y: document.documentElement.scrollTop || document.body.scrollTop }), checkIsScrollRoot: () => !0 }),
                Vt = { current: void 0 },
                kt = at({
                    measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
                    defaultParent: () => {
                        if (!Vt.current) {
                            const t = new Lt({});
                            t.mount(window), t.setOptions({ layoutScroll: !0 }), (Vt.current = t);
                        }
                        return Vt.current;
                    },
                    resetTransform: (t, e) => {
                        t.style.transform = void 0 !== e ? e : "none";
                    },
                    checkIsScrollRoot: (t) => Boolean("fixed" === window.getComputedStyle(t).position),
                });
        },
        663722: (t, e, i) => {
            i.d(e, { V: () => s });
            const s = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
        },
        445650: (t, e, i) => {
            i.d(e, { J: () => a });
            var s = i(288772);
            function o(t, e) {
                return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
            }
            const a = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t) {
                        if (!s.px.test(t)) return t;
                        t = parseFloat(t);
                    }
                    return `${o(t, e.target.x)}% ${o(t, e.target.y)}%`;
                },
            };
        },
        387995: (t, e, i) => {
            i.d(e, { M: () => a });
            var s = i(519038),
                o = i(506746);
            const a = {
                correct: (t, { treeScale: e, projectionDelta: i }) => {
                    const a = t,
                        n = o.P.parse(t);
                    if (n.length > 5) return a;
                    const r = o.P.createTransformer(t),
                        l = "number" != typeof n[0] ? 1 : 0,
                        h = i.x.scale * e.x,
                        c = i.y.scale * e.y;
                    (n[0 + l] /= h), (n[1 + l] /= c);
                    const u = (0, s.t)(h, c, 0.5);
                    return "number" == typeof n[2 + l] && (n[2 + l] /= u), "number" == typeof n[3 + l] && (n[3 + l] /= u), r(n);
                },
            };
        },
        514599: (t, e, i) => {
            i.d(e, { B: () => o, P: () => s });
            const s = {};
            function o(t) {
                Object.assign(s, t);
            }
        },
        101010: (t, e, i) => {
            function s(t) {
                return [t("x"), t("y")];
            }
            i.d(e, { U: () => s });
        },
        428749: (t, e, i) => {
            function s(t) {
                return void 0 === t || 1 === t;
            }
            function o({ scale: t, scaleX: e, scaleY: i }) {
                return !s(t) || !s(e) || !s(i);
            }
            function a(t) {
                return o(t) || n(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY;
            }
            function n(t) {
                return r(t.x) || r(t.y);
            }
            function r(t) {
                return t && "0%" !== t;
            }
            i.d(e, { D_: () => n, Lj: () => o, ud: () => a });
        },
        285579: (t, e, i) => {
            i.d(e, { J: () => a, z: () => n });
            var s = i(477222),
                o = i(102217);
            function a(t, e) {
                return (0, s.i8)((0, s.d7)(t.getBoundingClientRect(), e));
            }
            function n(t, e, i) {
                const s = a(t, i),
                    { scroll: n } = e;
                return n && ((0, o.am)(s.x, n.offset.x), (0, o.am)(s.y, n.offset.y)), s;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d3107ce.01698b0a.js.map
