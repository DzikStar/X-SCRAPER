"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-7d212117", "loader.Dock-7d212117", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"],
    {
        337886: (t, e, i) => {
            i.d(e, { Z: () => n });
            var a = i(889441),
                s = 1;
            const n = class {
                start(t, e, i, a, s) {}
                stop() {
                    this.__nativeId && a.ZP.API.stopAnimation(this.__nativeId);
                }
                __getNativeAnimationConfig() {
                    throw new Error("This animation type cannot be offloaded to native");
                }
                __debouncedOnEnd(t) {
                    var e = this.__onEnd;
                    (this.__onEnd = null), e && e(t);
                }
                __startNativeAnimation(t) {
                    var e = s + ":startAnimation";
                    (s += 1), a.ZP.API.setWaitingForIdentifier(e);
                    try {
                        var i = this.__getNativeAnimationConfig();
                        t.__makeNative(i.platformConfig), (this.__nativeId = a.ZP.generateNewAnimationId()), a.ZP.API.startAnimatingNode(this.__nativeId, t.__getNativeTag(), i, this.__debouncedOnEnd.bind(this));
                    } catch (t) {
                        throw t;
                    } finally {
                        a.ZP.API.unsetWaitingForIdentifier(e);
                    }
                }
            };
        },
        900299: (t, e, i) => {
            i.d(e, { Z: () => r });
            var a = i(337886),
                s = i(889441);
            class n extends a.Z {
                constructor(t) {
                    var e, i, a;
                    super(), (this._deceleration = null !== (e = t.deceleration) && void 0 !== e ? e : 0.998), (this._velocity = t.velocity), (this._useNativeDriver = (0, s.lH)(t)), (this.__isInteraction = null !== (i = t.isInteraction) && void 0 !== i ? i : !this._useNativeDriver), (this.__iterations = null !== (a = t.iterations) && void 0 !== a ? a : 1);
                }
                __getNativeAnimationConfig() {
                    return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations };
                }
                start(t, e, i, a, s) {
                    (this.__active = !0), (this._lastValue = t), (this._fromValue = t), (this._onUpdate = e), (this.__onEnd = i), (this._startTime = Date.now()), this._useNativeDriver ? this.__startNativeAnimation(s) : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
                }
                onUpdate() {
                    var t = Date.now(),
                        e = this._fromValue + (this._velocity / (1 - this._deceleration)) * (1 - Math.exp(-(1 - this._deceleration) * (t - this._startTime)));
                    this._onUpdate(e), Math.abs(this._lastValue - e) < 0.1 ? this.__debouncedOnEnd({ finished: !0 }) : ((this._lastValue = e), this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))));
                }
                stop() {
                    super.stop(), (this.__active = !1), i.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const r = n;
        },
        77593: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(337886),
                s = i(555516),
                n = i(614983),
                r = i.n(n),
                _ = i(889441);
            class o extends a.Z {
                constructor(t) {
                    var e, i, a, n, o, h, l, u, d, v, f;
                    if ((super(), (this._overshootClamping = null !== (e = t.overshootClamping) && void 0 !== e && e), (this._restDisplacementThreshold = null !== (i = t.restDisplacementThreshold) && void 0 !== i ? i : 0.001), (this._restSpeedThreshold = null !== (a = t.restSpeedThreshold) && void 0 !== a ? a : 0.001), (this._initialVelocity = null !== (n = t.velocity) && void 0 !== n ? n : 0), (this._lastVelocity = null !== (o = t.velocity) && void 0 !== o ? o : 0), (this._toValue = t.toValue), (this._delay = null !== (h = t.delay) && void 0 !== h ? h : 0), (this._useNativeDriver = (0, _.lH)(t)), (this._platformConfig = t.platformConfig), (this.__isInteraction = null !== (l = t.isInteraction) && void 0 !== l ? l : !this._useNativeDriver), (this.__iterations = null !== (u = t.iterations) && void 0 !== u ? u : 1), void 0 !== t.stiffness || void 0 !== t.damping || void 0 !== t.mass)) r()(void 0 === t.bounciness && void 0 === t.speed && void 0 === t.tension && void 0 === t.friction, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one"), (this._stiffness = null !== (d = t.stiffness) && void 0 !== d ? d : 100), (this._damping = null !== (v = t.damping) && void 0 !== v ? v : 10), (this._mass = null !== (f = t.mass) && void 0 !== f ? f : 1);
                    else if (void 0 !== t.bounciness || void 0 !== t.speed) {
                        var m, c;
                        r()(void 0 === t.tension && void 0 === t.friction && void 0 === t.stiffness && void 0 === t.damping && void 0 === t.mass, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
                        var g = s.Z.fromBouncinessAndSpeed(null !== (m = t.bounciness) && void 0 !== m ? m : 8, null !== (c = t.speed) && void 0 !== c ? c : 12);
                        (this._stiffness = g.stiffness), (this._damping = g.damping), (this._mass = 1);
                    } else {
                        var p,
                            N,
                            V = s.Z.fromOrigamiTensionAndFriction(null !== (p = t.tension) && void 0 !== p ? p : 40, null !== (N = t.friction) && void 0 !== N ? N : 7);
                        (this._stiffness = V.stiffness), (this._damping = V.damping), (this._mass = 1);
                    }
                    r()(this._stiffness > 0, "Stiffness value must be greater than 0"), r()(this._damping > 0, "Damping value must be greater than 0"), r()(this._mass > 0, "Mass value must be greater than 0");
                }
                __getNativeAnimationConfig() {
                    var t;
                    return { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass, initialVelocity: null !== (t = this._initialVelocity) && void 0 !== t ? t : this._lastVelocity, toValue: this._toValue, iterations: this.__iterations, platformConfig: this._platformConfig };
                }
                start(t, e, i, a, s) {
                    if (((this.__active = !0), (this._startPosition = t), (this._lastPosition = this._startPosition), (this._onUpdate = e), (this.__onEnd = i), (this._lastTime = Date.now()), (this._frameTime = 0), a instanceof o)) {
                        var n = a.getInternalState();
                        (this._lastPosition = n.lastPosition), (this._lastVelocity = n.lastVelocity), (this._initialVelocity = this._lastVelocity), (this._lastTime = n.lastTime);
                    }
                    var r = () => {
                        this._useNativeDriver ? this.__startNativeAnimation(s) : this.onUpdate();
                    };
                    this._delay ? (this._timeout = setTimeout(r, this._delay)) : r();
                }
                getInternalState() {
                    return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime };
                }
                onUpdate() {
                    var t = Date.now();
                    t > this._lastTime + 64 && (t = this._lastTime + 64);
                    var e = (t - this._lastTime) / 1e3;
                    this._frameTime += e;
                    var i = this._damping,
                        a = this._mass,
                        s = this._stiffness,
                        n = -this._initialVelocity,
                        r = i / (2 * Math.sqrt(s * a)),
                        _ = Math.sqrt(s / a),
                        o = _ * Math.sqrt(1 - r * r),
                        h = this._toValue - this._startPosition,
                        l = 0,
                        u = 0,
                        d = this._frameTime;
                    if (r < 1) {
                        var v = Math.exp(-r * _ * d);
                        (l = this._toValue - v * (((n + r * _ * h) / o) * Math.sin(o * d) + h * Math.cos(o * d))), (u = r * _ * v * ((Math.sin(o * d) * (n + r * _ * h)) / o + h * Math.cos(o * d)) - v * (Math.cos(o * d) * (n + r * _ * h) - o * h * Math.sin(o * d)));
                    } else {
                        var f = Math.exp(-_ * d);
                        (l = this._toValue - f * (h + (n + _ * h) * d)), (u = f * (n * (d * _ - 1) + d * h * (_ * _)));
                    }
                    if (((this._lastTime = t), (this._lastPosition = l), (this._lastVelocity = u), this._onUpdate(l), this.__active)) {
                        var m = !1;
                        this._overshootClamping && 0 !== this._stiffness && (m = this._startPosition < this._toValue ? l > this._toValue : l < this._toValue);
                        var c = Math.abs(u) <= this._restSpeedThreshold,
                            g = !0;
                        if ((0 !== this._stiffness && (g = Math.abs(this._toValue - l) <= this._restDisplacementThreshold), m || (c && g))) return 0 !== this._stiffness && ((this._lastPosition = this._toValue), (this._lastVelocity = 0), this._onUpdate(this._toValue)), void this.__debouncedOnEnd({ finished: !0 });
                        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
                    }
                }
                stop() {
                    super.stop(), (this.__active = !1), clearTimeout(this._timeout), i.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const h = o;
        },
        521858: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a,
                s = i(137937),
                n = i(337886),
                r = i(889441);
            class _ extends n.Z {
                constructor(t) {
                    var e, i, n, _, o;
                    super(), (this._toValue = t.toValue), (this._easing = null !== (e = t.easing) && void 0 !== e ? e : (a || (a = s.Z.inOut(s.Z.ease)), a)), (this._duration = null !== (i = t.duration) && void 0 !== i ? i : 500), (this._delay = null !== (n = t.delay) && void 0 !== n ? n : 0), (this.__iterations = null !== (_ = t.iterations) && void 0 !== _ ? _ : 1), (this._useNativeDriver = (0, r.lH)(t)), (this._platformConfig = t.platformConfig), (this.__isInteraction = null !== (o = t.isInteraction) && void 0 !== o ? o : !this._useNativeDriver);
                }
                __getNativeAnimationConfig() {
                    for (var t = [], e = Math.round(this._duration / (1e3 / 60)), i = 0; i < e; i++) t.push(this._easing(i / e));
                    return t.push(this._easing(1)), { type: "frames", frames: t, toValue: this._toValue, iterations: this.__iterations, platformConfig: this._platformConfig };
                }
                start(t, e, i, a, s) {
                    (this.__active = !0), (this._fromValue = t), (this._onUpdate = e), (this.__onEnd = i);
                    var n = () => {
                        0 !== this._duration || this._useNativeDriver ? ((this._startTime = Date.now()), this._useNativeDriver ? this.__startNativeAnimation(s) : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))) : (this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 }));
                    };
                    this._delay ? (this._timeout = setTimeout(n, this._delay)) : n();
                }
                onUpdate() {
                    var t = Date.now();
                    if (t >= this._startTime + this._duration) return 0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), void this.__debouncedOnEnd({ finished: !0 });
                    this._onUpdate(this._fromValue + this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
                }
                stop() {
                    super.stop(), (this.__active = !1), clearTimeout(this._timeout), i.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const o = _;
        },
        445950: (t, e, i) => {
            i.d(e, { Z: () => m });
            var a = 4,
                s = 0.001,
                n = 1e-7,
                r = 10,
                _ = 11,
                o = 1 / (_ - 1),
                h = "function" == typeof Float32Array;
            function l(t, e) {
                return 1 - 3 * e + 3 * t;
            }
            function u(t, e) {
                return 3 * e - 6 * t;
            }
            function d(t) {
                return 3 * t;
            }
            function v(t, e, i) {
                return ((l(e, i) * t + u(e, i)) * t + d(e)) * t;
            }
            function f(t, e, i) {
                return 3 * l(e, i) * t * t + 2 * u(e, i) * t + d(e);
            }
            function m(t, e, i, l) {
                if (!(t >= 0 && t <= 1 && i >= 0 && i <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                var u = h ? new Float32Array(_) : new Array(_);
                if (t !== e || i !== l) for (var d = 0; d < _; ++d) u[d] = v(d * o, t, i);
                function m(e) {
                    for (var h = 0, l = 1, d = _ - 1; l !== d && u[l] <= e; ++l) h += o;
                    --l;
                    var m = h + ((e - u[l]) / (u[l + 1] - u[l])) * o,
                        c = f(m, t, i);
                    return c >= s
                        ? (function (t, e, i, s) {
                              for (var n = e, r = 0; r < a; ++r) {
                                  var _ = f(n, i, s);
                                  if (0 === _) return n;
                                  n -= (v(n, i, s) - t) / _;
                              }
                              return n;
                          })(e, m, t, i)
                        : 0 === c
                          ? m
                          : (function (t, e, i, a, s) {
                                var _,
                                    o,
                                    h = 0,
                                    l = e,
                                    u = i;
                                do {
                                    (_ = v((o = l + (u - l) / 2), a, s) - t) > 0 ? (u = o) : (l = o);
                                } while (Math.abs(_) > n && ++h < r);
                                return o;
                            })(e, h, h + o, t, i);
                }
                return function (a) {
                    return t === e && i === l ? a : 0 === a ? 0 : 1 === a ? 1 : v(m(a), e, l);
                };
            }
        },
        553615: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(807896),
                s = i(202784),
                n = i(555874),
                r = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(n.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const o = (0, r.Z)(_);
        },
        408839: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(45843);
            const s = (0, i(409140).Z)(a.Z);
        },
        59335: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(807896),
                s = i(202784),
                n = i(214997),
                r = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(n.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const o = (0, r.Z)(_);
        },
        349887: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(807896),
                s = i(202784),
                n = i(472302),
                r = i(409140),
                _ = s.forwardRef((t, e) => s.createElement(n.Z, (0, a.Z)({ scrollEventThrottle: 1e-4 }, t, { ref: e })));
            const o = (0, r.Z)(_);
        },
        101443: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(466999);
            const s = (0, i(409140).Z)(a.Z);
        },
        89554: (t, e, i) => {
            i.d(e, { Z: () => s });
            i(202784);
            var a = i(325686);
            const s = (0, i(409140).Z)(a.Z);
        },
        409140: (t, e, i) => {
            i.d(e, { Z: () => w });
            var a = i(807896),
                s = i(231461),
                n = i(133028),
                r = i(265937),
                _ = i(211804),
                o = i(354877),
                h = i(889441);
            class l extends o.Z {
                constructor(t) {
                    super(), (this._transforms = t);
                }
                __makeNative() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__makeNative();
                        }
                    }),
                        super.__makeNative();
                }
                __getValue() {
                    return this._transforms.map((t) => {
                        var e = {};
                        for (var i in t) {
                            var a = t[i];
                            a instanceof _.Z ? (e[i] = a.__getValue()) : (e[i] = a);
                        }
                        return e;
                    });
                }
                __getAnimatedValue() {
                    return this._transforms.map((t) => {
                        var e = {};
                        for (var i in t) {
                            var a = t[i];
                            a instanceof _.Z ? (e[i] = a.__getAnimatedValue()) : (e[i] = a);
                        }
                        return e;
                    });
                }
                __attach() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__addChild(this);
                        }
                    });
                }
                __detach() {
                    this._transforms.forEach((t) => {
                        for (var e in t) {
                            var i = t[e];
                            i instanceof _.Z && i.__removeChild(this);
                        }
                    }),
                        super.__detach();
                }
                __getNativeConfig() {
                    var t = [];
                    return (
                        this._transforms.forEach((e) => {
                            for (var i in e) {
                                var a = e[i];
                                a instanceof _.Z ? t.push({ type: "animated", property: i, nodeTag: a.__getNativeTag() }) : t.push({ type: "static", property: i, value: h.ZP.transformDataType(a) });
                            }
                        }),
                        h.ZP.validateTransform(t),
                        { type: "transform", transforms: t }
                    );
                }
            }
            const u = l;
            var d = i(297689).Z.flatten;
            function v(t) {
                var e = d(t),
                    i = {};
                for (var a in e) {
                    var s = e[a];
                    "transform" === a && Array.isArray(s) ? (i[a] = new u(s)) : s instanceof _.Z ? (i[a] = s) : s && !Array.isArray(s) && "object" == typeof s && (i[a] = v(s));
                }
                return i;
            }
            class f extends o.Z {
                constructor(t) {
                    super(), (this._inputStyle = t), (this._style = v(t));
                }
                _walkStyleAndGetValues(t) {
                    var e = {};
                    for (var i in t) {
                        var a = t[i];
                        a instanceof _.Z ? a.__isNative || (e[i] = a.__getValue()) : a && !Array.isArray(a) && "object" == typeof a ? (e[i] = this._walkStyleAndGetValues(a)) : (e[i] = a);
                    }
                    return e;
                }
                __getValue() {
                    return [this._inputStyle, this._walkStyleAndGetValues(this._style)];
                }
                _walkStyleAndGetAnimatedValues(t) {
                    var e = {};
                    for (var i in t) {
                        var a = t[i];
                        a instanceof _.Z ? (e[i] = a.__getAnimatedValue()) : a && !Array.isArray(a) && "object" == typeof a && (e[i] = this._walkStyleAndGetAnimatedValues(a));
                    }
                    return e;
                }
                __getAnimatedValue() {
                    return this._walkStyleAndGetAnimatedValues(this._style);
                }
                __attach() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__addChild(this);
                    }
                }
                __detach() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__removeChild(this);
                    }
                    super.__detach();
                }
                __makeNative() {
                    for (var t in this._style) {
                        var e = this._style[t];
                        e instanceof _.Z && e.__makeNative();
                    }
                    super.__makeNative();
                }
                __getNativeConfig() {
                    var t = {};
                    for (var e in this._style)
                        if (this._style[e] instanceof _.Z) {
                            var i = this._style[e];
                            i.__makeNative(), (t[e] = i.__getNativeTag());
                        }
                    return h.ZP.validateStyles(t), { type: "style", style: t };
                }
            }
            const m = f;
            var c = i(614983),
                g = i.n(c);
            class p extends _.Z {
                constructor(t, e) {
                    super(), t.style && (t = (0, n.Z)((0, n.Z)({}, t), {}, { style: new m(t.style) })), (this._props = t), (this._callback = e), this.__attach();
                }
                __getValue() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z ? (!i.__isNative || i instanceof m) && (t[e] = i.__getValue()) : i instanceof r.Q ? (t[e] = i.__getHandler()) : (t[e] = i);
                    }
                    return t;
                }
                __getAnimatedValue() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z && (t[e] = i.__getAnimatedValue());
                    }
                    return t;
                }
                __attach() {
                    for (var t in this._props) {
                        var e = this._props[t];
                        e instanceof _.Z && e.__addChild(this);
                    }
                }
                __detach() {
                    for (var t in (this.__isNative && this._animatedView && this.__disconnectAnimatedView(), this._props)) {
                        var e = this._props[t];
                        e instanceof _.Z && e.__removeChild(this);
                    }
                    super.__detach();
                }
                update() {
                    this._callback();
                }
                __makeNative() {
                    if (!this.__isNative) {
                        for (var t in ((this.__isNative = !0), this._props)) {
                            var e = this._props[t];
                            e instanceof _.Z && e.__makeNative();
                        }
                        this._animatedView && this.__connectAnimatedView();
                    }
                }
                setNativeView(t) {
                    this._animatedView !== t && ((this._animatedView = t), this.__isNative && this.__connectAnimatedView());
                }
                __connectAnimatedView() {
                    g()(this.__isNative, 'Expected node to be marked as "native"');
                    var t = this._animatedView;
                    g()(null != t, "Unable to locate attached view in the native tree"), h.ZP.API.connectAnimatedNodeToView(this.__getNativeTag(), t);
                }
                __disconnectAnimatedView() {
                    g()(this.__isNative, 'Expected node to be marked as "native"');
                    var t = this._animatedView;
                    g()(null != t, "Unable to locate attached view in the native tree"), h.ZP.API.disconnectAnimatedNodeFromView(this.__getNativeTag(), t);
                }
                __restoreDefaultValues() {
                    this.__isNative && h.ZP.API.restoreDefaultValues(this.__getNativeTag());
                }
                __getNativeConfig() {
                    var t = {};
                    for (var e in this._props) {
                        var i = this._props[e];
                        i instanceof _.Z && (i.__makeNative(), (t[e] = i.__getNativeTag()));
                    }
                    return { type: "props", props: t };
                }
            }
            const N = p;
            var V = i(920863),
                y = i(202784),
                Z = i(156905);
            function b(t) {
                var e = (0, y.useReducer)((t) => t + 1, 0)[1],
                    i = (0, y.useRef)(null),
                    a = (0, y.useMemo)(() => new N(t, () => (null == i.current ? void 0 : i.current())), [t]);
                !(function (t) {
                    var e = (0, y.useRef)(null),
                        i = (0, y.useRef)(!1);
                    (0, y.useEffect)(() => {
                        h.ZP.API.flushQueue();
                    }),
                        (0, Z.Z)(
                            () => (
                                (i.current = !1),
                                () => {
                                    i.current = !0;
                                }
                            ),
                            [],
                        ),
                        (0, Z.Z)(() => {
                            if ((t.__attach(), null != e.current)) {
                                var a = e.current;
                                a.__restoreDefaultValues(), a.__detach(), (e.current = null);
                            }
                            return () => {
                                i.current ? t.__detach() : (e.current = t);
                            };
                        }, [t]);
                })(a);
                var s = (0, y.useCallback)(
                        (s) => {
                            a.setNativeView(s),
                                (i.current = () => {
                                    e();
                                });
                            var n = (function (t) {
                                    return "object" == typeof t && "function" == typeof (null == t ? void 0 : t.getScrollableNode) ? t.getScrollableNode() : t;
                                })(s),
                                _ = [];
                            for (var o in t) {
                                var h = t[o];
                                h instanceof r.Q && h.__isNative && (h.__attach(n, o), _.push([o, h]));
                            }
                            return () => {
                                i.current = null;
                                for (var t = 0, e = _; t < e.length; t++) {
                                    var a = e[t],
                                        s = a[0];
                                    a[1].__detach(n, s);
                                }
                            };
                        },
                        [t, a],
                    ),
                    n = (0, V.Z)(s);
                return [A(a), n];
            }
            function A(t) {
                return (0, n.Z)((0, n.Z)({}, t.__getValue()), {}, { collapsable: !1 });
            }
            var C = i(881806),
                T = ["style"];
            function w(t) {
                return y.forwardRef((e, i) => {
                    var n = b(e),
                        r = n[0],
                        _ = n[1],
                        o = (0, C.Z)(_, i),
                        h = r.passthroughAnimatedPropExplicitValues,
                        l = r.style,
                        u = null != h ? h : {},
                        d = u.style,
                        v = (0, s.Z)(u, T),
                        f = [l, d];
                    return y.createElement(t, (0, a.Z)({}, r, v, { style: f, ref: o }));
                });
            }
        },
        978735: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                n = i(354877);
            class r extends n.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() + this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "addition", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = r;
        },
        411193: (t, e, i) => {
            i.d(e, { Z: () => d });
            var a = i(588016),
                s = i(354877),
                n = i(437349),
                r = i.n(n),
                _ = i(889441).ZP.API,
                o = { r: 0, g: 0, b: 0, a: 1 },
                h = 1;
            function l(t) {
                if (null == t) return null;
                if (u(t)) return t;
                var e = r()(t);
                if (null == e) return null;
                if ("object" == typeof e) {
                    if (null != e) return e;
                } else if ("number" == typeof e) {
                    return { r: (4278190080 & e) >>> 24, g: (16711680 & e) >>> 16, b: (65280 & e) >>> 8, a: (255 & e) / 255 };
                }
                return null;
            }
            function u(t) {
                return t && "number" == typeof t.r && "number" == typeof t.g && "number" == typeof t.b && "number" == typeof t.a;
            }
            class d extends s.Z {
                constructor(t, e) {
                    super(), (this._listeners = {});
                    var i = null != t ? t : o;
                    if (
                        (function (t) {
                            return t && t.r instanceof a.Z && t.g instanceof a.Z && t.b instanceof a.Z && t.a instanceof a.Z;
                        })(i)
                    ) {
                        var s = i;
                        (this.r = s.r), (this.g = s.g), (this.b = s.b), (this.a = s.a);
                    } else {
                        var n,
                            r = null !== (n = l(i)) && void 0 !== n ? n : o,
                            _ = o;
                        u(r) ? (_ = r) : (this.nativeColor = r), (this.r = new a.Z(_.r)), (this.g = new a.Z(_.g)), (this.b = new a.Z(_.b)), (this.a = new a.Z(_.a));
                    }
                    (this.nativeColor || (e && e.useNativeDriver)) && this.__makeNative();
                }
                setValue(t) {
                    var e,
                        i = !1;
                    if (this.__isNative) {
                        var a = this.__getNativeTag();
                        _.setWaitingForIdentifier(a.toString());
                    }
                    var s = null !== (e = l(t)) && void 0 !== e ? e : o;
                    if (u(s)) {
                        var n = s;
                        this.r.setValue(n.r), this.g.setValue(n.g), this.b.setValue(n.b), this.a.setValue(n.a), null != this.nativeColor && ((this.nativeColor = null), (i = !0));
                    } else {
                        var r = s;
                        this.nativeColor !== r && ((this.nativeColor = r), (i = !0));
                    }
                    if (this.__isNative) {
                        var h = this.__getNativeTag();
                        i && _.updateAnimatedNodeConfig(h, this.__getNativeConfig()), _.unsetWaitingForIdentifier(h.toString());
                    }
                }
                setOffset(t) {
                    this.r.setOffset(t.r), this.g.setOffset(t.g), this.b.setOffset(t.b), this.a.setOffset(t.a);
                }
                flattenOffset() {
                    this.r.flattenOffset(), this.g.flattenOffset(), this.b.flattenOffset(), this.a.flattenOffset();
                }
                extractOffset() {
                    this.r.extractOffset(), this.g.extractOffset(), this.b.extractOffset(), this.a.extractOffset();
                }
                addListener(t) {
                    var e = String(h++),
                        i = (e) => {
                            e.value;
                            t(this.__getValue());
                        };
                    return (this._listeners[e] = { r: this.r.addListener(i), g: this.g.addListener(i), b: this.b.addListener(i), a: this.a.addListener(i) }), e;
                }
                removeListener(t) {
                    this.r.removeListener(this._listeners[t].r), this.g.removeListener(this._listeners[t].g), this.b.removeListener(this._listeners[t].b), this.a.removeListener(this._listeners[t].a), delete this._listeners[t];
                }
                removeAllListeners() {
                    this.r.removeAllListeners(), this.g.removeAllListeners(), this.b.removeAllListeners(), this.a.removeAllListeners(), (this._listeners = {});
                }
                stopAnimation(t) {
                    this.r.stopAnimation(), this.g.stopAnimation(), this.b.stopAnimation(), this.a.stopAnimation(), t && t(this.__getValue());
                }
                resetAnimation(t) {
                    this.r.resetAnimation(), this.g.resetAnimation(), this.b.resetAnimation(), this.a.resetAnimation(), t && t(this.__getValue());
                }
                __getValue() {
                    return null != this.nativeColor ? this.nativeColor : "rgba(" + this.r.__getValue() + ", " + this.g.__getValue() + ", " + this.b.__getValue() + ", " + this.a.__getValue() + ")";
                }
                __attach() {
                    this.r.__addChild(this), this.g.__addChild(this), this.b.__addChild(this), this.a.__addChild(this), super.__attach();
                }
                __detach() {
                    this.r.__removeChild(this), this.g.__removeChild(this), this.b.__removeChild(this), this.a.__removeChild(this), super.__detach();
                }
                __makeNative(t) {
                    this.r.__makeNative(t), this.g.__makeNative(t), this.b.__makeNative(t), this.a.__makeNative(t), super.__makeNative(t);
                }
                __getNativeConfig() {
                    return { type: "color", r: this.r.__getNativeTag(), g: this.g.__getNativeTag(), b: this.b.__getNativeTag(), a: this.a.__getNativeTag(), nativeColor: this.nativeColor };
                }
            }
        },
        419534: (t, e, i) => {
            i.d(e, { Z: () => r });
            var a = i(138280),
                s = i(354877);
            class n extends s.Z {
                constructor(t, e, i) {
                    super(), (this._a = t), (this._min = e), (this._max = i), (this._value = this._lastValue = this._a.__getValue());
                }
                __makeNative(t) {
                    this._a.__makeNative(t), super.__makeNative(t);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __getValue() {
                    var t = this._a.__getValue(),
                        e = t - this._lastValue;
                    return (this._lastValue = t), (this._value = Math.min(Math.max(this._value + e, this._min), this._max)), this._value;
                }
                __attach() {
                    this._a.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "diffclamp", input: this._a.__getNativeTag(), min: this._min, max: this._max };
                }
            }
            const r = n;
        },
        225266: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(138280),
                s = i(211804),
                n = i(588016),
                r = i(354877);
            class _ extends r.Z {
                constructor(t, e) {
                    super(), (this._warnedAboutDivideByZero = !1), 0 === e || (e instanceof s.Z && e.__getValue()), (this._a = "number" == typeof t ? new n.Z(t) : t), (this._b = "number" == typeof e ? new n.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    var t = this._a.__getValue(),
                        e = this._b.__getValue();
                    return 0 === e ? (this._warnedAboutDivideByZero || (this._warnedAboutDivideByZero = !0), 0) : ((this._warnedAboutDivideByZero = !1), t / e);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "division", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const o = _;
        },
        138280: (t, e, i) => {
            i.d(e, { Z: () => m });
            var a = i(133028),
                s = i(354877),
                n = i(889441),
                r = i(614983),
                _ = i.n(r),
                o = i(437349),
                h = i.n(o),
                l = (t) => t;
            function u(t) {
                if (t.outputRange && "string" == typeof t.outputRange[0])
                    return (function (t) {
                        var e = t.outputRange;
                        _()(e.length >= 2, "Bad output range"),
                            (e = e.map(d)),
                            (function (t) {
                                for (var e = t[0].replace(v, ""), i = 1; i < t.length; ++i) _()(e === t[i].replace(v, ""), "invalid pattern " + t[0] + " and " + t[i]);
                            })(e);
                        var i = e[0].match(v).map(() => []);
                        e.forEach((t) => {
                            t.match(v).forEach((t, e) => {
                                i[e].push(+t);
                            });
                        });
                        var s = e[0].match(v).map((e, s) => u((0, a.Z)((0, a.Z)({}, t), {}, { outputRange: i[s] }))),
                            n = ((r = e[0]), "string" == typeof r && r.startsWith("rgb"));
                        var r;
                        return (t) => {
                            var i = 0;
                            return e[0].replace(v, () => {
                                var e = +s[i++](t);
                                return n && (e = i < 4 ? Math.round(e) : Math.round(1e3 * e) / 1e3), String(e);
                            });
                        };
                    })(t);
                var e = t.outputRange,
                    i = t.inputRange;
                var s = t.easing || l,
                    n = "extend";
                void 0 !== t.extrapolateLeft ? (n = t.extrapolateLeft) : void 0 !== t.extrapolate && (n = t.extrapolate);
                var r = "extend";
                return (
                    void 0 !== t.extrapolateRight ? (r = t.extrapolateRight) : void 0 !== t.extrapolate && (r = t.extrapolate),
                    (t) => {
                        _()("number" == typeof t, "Cannot interpolation an input which is not a number");
                        var a = (function (t, e) {
                            var i;
                            for (i = 1; i < e.length - 1 && !(e[i] >= t); ++i);
                            return i - 1;
                        })(t, i);
                        return (function (t, e, i, a, s, n, r, _) {
                            var o = t;
                            if (o < e) {
                                if ("identity" === r) return o;
                                "clamp" === r && (o = e);
                            }
                            if (o > i) {
                                if ("identity" === _) return o;
                                "clamp" === _ && (o = i);
                            }
                            if (a === s) return a;
                            if (e === i) return t <= e ? a : s;
                            e === -1 / 0 ? (o = -o) : i === 1 / 0 ? (o -= e) : (o = (o - e) / (i - e));
                            (o = n(o)), a === -1 / 0 ? (o = -o) : s === 1 / 0 ? (o += a) : (o = o * (s - a) + a);
                            return o;
                        })(t, i[a], i[a + 1], e[a], e[a + 1], s, n, r);
                    }
                );
            }
            function d(t) {
                var e = h()(t);
                return null === e || "number" != typeof e ? t : "rgba(" + ((4278190080 & (e = e || 0)) >>> 24) + ", " + ((16711680 & e) >>> 16) + ", " + ((65280 & e) >>> 8) + ", " + (255 & e) / 255 + ")";
            }
            var v = /[+-]?(?:\d+\.?\d*|\.\d+)(?:[eE][+-]?\d+)?/g;
            class f extends s.Z {
                constructor(t, e) {
                    super(), (this._parent = t), (this._config = e), (this._interpolation = u(e));
                }
                __makeNative(t) {
                    this._parent.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    var t = this._parent.__getValue();
                    return _()("number" == typeof t, "Cannot interpolate an input which is not a number."), this._interpolation(t);
                }
                interpolate(t) {
                    return new f(this, t);
                }
                __attach() {
                    this._parent.__addChild(this);
                }
                __detach() {
                    this._parent.__removeChild(this), super.__detach();
                }
                __transformDataType(t) {
                    return t.map(n.ZP.transformDataType);
                }
                __getNativeConfig() {
                    return { inputRange: this._config.inputRange, outputRange: this.__transformDataType(this._config.outputRange), extrapolateLeft: this._config.extrapolateLeft || this._config.extrapolate || "extend", extrapolateRight: this._config.extrapolateRight || this._config.extrapolate || "extend", type: "interpolation" };
                }
            }
            f.__createInterpolation = u;
            const m = f;
        },
        668637: (t, e, i) => {
            i.d(e, { Z: () => r });
            var a = i(138280),
                s = i(354877);
            class n extends s.Z {
                constructor(t, e) {
                    super(), (this._a = t), (this._modulus = e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return ((this._a.__getValue() % this._modulus) + this._modulus) % this._modulus;
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "modulus", input: this._a.__getNativeTag(), modulus: this._modulus };
                }
            }
            const r = n;
        },
        64650: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                n = i(354877);
            class r extends n.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() * this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "multiplication", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = r;
        },
        211804: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(889441),
                s = i(614983),
                n = i.n(s),
                r = a.ZP.API,
                _ = 1;
            const o = class {
                __attach() {}
                __detach() {
                    this.__isNative && null != this.__nativeTag && (a.ZP.API.dropAnimatedNode(this.__nativeTag), (this.__nativeTag = void 0));
                }
                __getValue() {}
                __getAnimatedValue() {
                    return this.__getValue();
                }
                __addChild(t) {}
                __removeChild(t) {}
                __getChildren() {
                    return [];
                }
                constructor() {
                    this._listeners = {};
                }
                __makeNative(t) {
                    if (!this.__isNative) throw new Error('This node cannot be made a "native" animated node');
                    (this._platformConfig = t), this.hasListeners() && this._startListeningToNativeValueUpdates();
                }
                addListener(t) {
                    var e = String(_++);
                    return (this._listeners[e] = t), this.__isNative && this._startListeningToNativeValueUpdates(), e;
                }
                removeListener(t) {
                    delete this._listeners[t], this.__isNative && !this.hasListeners() && this._stopListeningForNativeValueUpdates();
                }
                removeAllListeners() {
                    (this._listeners = {}), this.__isNative && this._stopListeningForNativeValueUpdates();
                }
                hasListeners() {
                    return !!Object.keys(this._listeners).length;
                }
                _startListeningToNativeValueUpdates() {
                    (this.__nativeAnimatedValueListener && !this.__shouldUpdateListenersForNewNativeTag) ||
                        (this.__shouldUpdateListenersForNewNativeTag && ((this.__shouldUpdateListenersForNewNativeTag = !1), this._stopListeningForNativeValueUpdates()),
                        r.startListeningToAnimatedNodeValue(this.__getNativeTag()),
                        (this.__nativeAnimatedValueListener = a.ZP.nativeEventEmitter.addListener("onAnimatedValueUpdate", (t) => {
                            t.tag === this.__getNativeTag() && this.__onAnimatedValueUpdateReceived(t.value);
                        })));
                }
                __onAnimatedValueUpdateReceived(t) {
                    this.__callListeners(t);
                }
                __callListeners(t) {
                    for (var e in this._listeners) this._listeners[e]({ value: t });
                }
                _stopListeningForNativeValueUpdates() {
                    this.__nativeAnimatedValueListener && (this.__nativeAnimatedValueListener.remove(), (this.__nativeAnimatedValueListener = null), r.stopListeningToAnimatedNodeValue(this.__getNativeTag()));
                }
                __getNativeTag() {
                    var t;
                    a.ZP.assertNativeAnimatedModule(), n()(this.__isNative, 'Attempt to get native tag from node not marked as "native"');
                    var e = null !== (t = this.__nativeTag) && void 0 !== t ? t : a.ZP.generateNewNodeTag();
                    if (null == this.__nativeTag) {
                        this.__nativeTag = e;
                        var i = this.__getNativeConfig();
                        this._platformConfig && (i.platformConfig = this._platformConfig), a.ZP.API.createAnimatedNode(e, i), (this.__shouldUpdateListenersForNewNativeTag = !0);
                    }
                    return e;
                }
                __getNativeConfig() {
                    throw new Error("This JS animated node type cannot be used as native animated node");
                }
                toJSON() {
                    return this.__getValue();
                }
                __getPlatformConfig() {
                    return this._platformConfig;
                }
                __setPlatformConfig(t) {
                    this._platformConfig = t;
                }
            };
        },
        104377: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(138280),
                s = i(588016),
                n = i(354877);
            class r extends n.Z {
                constructor(t, e) {
                    super(), (this._a = "number" == typeof t ? new s.Z(t) : t), (this._b = "number" == typeof e ? new s.Z(e) : e);
                }
                __makeNative(t) {
                    this._a.__makeNative(t), this._b.__makeNative(t), super.__makeNative(t);
                }
                __getValue() {
                    return this._a.__getValue() - this._b.__getValue();
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                __attach() {
                    this._a.__addChild(this), this._b.__addChild(this);
                }
                __detach() {
                    this._a.__removeChild(this), this._b.__removeChild(this), super.__detach();
                }
                __getNativeConfig() {
                    return { type: "subtraction", input: [this._a.__getNativeTag(), this._b.__getNativeTag()] };
                }
            }
            const _ = r;
        },
        794167: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(133028),
                s = i(211804),
                n = i(889441);
            class r extends s.Z {
                constructor(t, e, i, a, s) {
                    super(), (this._value = t), (this._parent = e), (this._animationClass = i), (this._animationConfig = a), (this._useNativeDriver = (0, n.lH)(a)), (this._callback = s), this.__attach();
                }
                __makeNative() {
                    (this.__isNative = !0), this._parent.__makeNative(), super.__makeNative(), this._value.__makeNative();
                }
                __getValue() {
                    return this._parent.__getValue();
                }
                __attach() {
                    this._parent.__addChild(this), this._useNativeDriver && this.__makeNative();
                }
                __detach() {
                    this._parent.__removeChild(this), super.__detach();
                }
                update() {
                    this._value.animate(new this._animationClass((0, a.Z)((0, a.Z)({}, this._animationConfig), {}, { toValue: this._animationConfig.toValue.__getValue() })), this._callback);
                }
                __getNativeConfig() {
                    var t = new this._animationClass((0, a.Z)((0, a.Z)({}, this._animationConfig), {}, { toValue: void 0 })).__getNativeAnimationConfig();
                    return { type: "tracking", animationId: (0, n.p1)(), animationConfig: t, toValue: this._parent.__getNativeTag(), value: this._value.__getNativeTag() };
                }
            }
            const _ = r;
        },
        588016: (t, e, i) => {
            i.d(e, { Z: () => o });
            var a = i(138280),
                s = i(354877),
                n = i(18198),
                r = i(889441).ZP.API;
            class _ extends s.Z {
                constructor(t, e) {
                    if ((super(), "number" != typeof t)) throw new Error("AnimatedValue: Attempting to set value to undefined");
                    (this._startingValue = this._value = t), (this._offset = 0), (this._animation = null), e && e.useNativeDriver && this.__makeNative();
                }
                __detach() {
                    this.__isNative &&
                        r.getValue(this.__getNativeTag(), (t) => {
                            this._value = t - this._offset;
                        }),
                        this.stopAnimation(),
                        super.__detach();
                }
                __getValue() {
                    return this._value + this._offset;
                }
                setValue(t) {
                    var e, i;
                    this._animation && (this._animation.stop(), (this._animation = null)), this._updateValue(t, !this.__isNative), this.__isNative && ((e = this.__getNativeTag().toString()), (i = () => r.setAnimatedNodeValue(this.__getNativeTag(), t)), r.setWaitingForIdentifier(e), i(), r.unsetWaitingForIdentifier(e));
                }
                setOffset(t) {
                    (this._offset = t), this.__isNative && r.setAnimatedNodeOffset(this.__getNativeTag(), t);
                }
                flattenOffset() {
                    (this._value += this._offset), (this._offset = 0), this.__isNative && r.flattenAnimatedNodeOffset(this.__getNativeTag());
                }
                extractOffset() {
                    (this._offset += this._value), (this._value = 0), this.__isNative && r.extractAnimatedNodeOffset(this.__getNativeTag());
                }
                stopAnimation(t) {
                    this.stopTracking(), this._animation && this._animation.stop(), (this._animation = null), t && (this.__isNative ? r.getValue(this.__getNativeTag(), t) : t(this.__getValue()));
                }
                resetAnimation(t) {
                    this.stopAnimation(t), (this._value = this._startingValue), this.__isNative && r.setAnimatedNodeValue(this.__getNativeTag(), this._startingValue);
                }
                __onAnimatedValueUpdateReceived(t) {
                    this._updateValue(t, !1);
                }
                interpolate(t) {
                    return new a.Z(this, t);
                }
                animate(t, e) {
                    var i = null;
                    t.__isInteraction && (i = n.Z.createInteractionHandle());
                    var a = this._animation;
                    this._animation && this._animation.stop(),
                        (this._animation = t),
                        t.start(
                            this._value,
                            (t) => {
                                this._updateValue(t, !0);
                            },
                            (t) => {
                                (this._animation = null), null !== i && n.Z.clearInteractionHandle(i), e && e(t);
                            },
                            a,
                            this,
                        );
                }
                stopTracking() {
                    this._tracking && this._tracking.__detach(), (this._tracking = null);
                }
                track(t) {
                    this.stopTracking(), (this._tracking = t), this._tracking && this._tracking.update();
                }
                _updateValue(t, e) {
                    if (void 0 === t) throw new Error("AnimatedValue: Attempting to set value to undefined");
                    var i, a;
                    (this._value = t),
                        e &&
                            ((i = this),
                            (a = new Set()),
                            (function t(e) {
                                "function" == typeof e.update ? a.add(e) : e.__getChildren().forEach(t);
                            })(i),
                            a.forEach((t) => t.update())),
                        super.__callListeners(this.__getValue());
                }
                __getNativeConfig() {
                    return { type: "value", value: this._value, offset: this._offset };
                }
            }
            const o = _;
        },
        377715: (t, e, i) => {
            i.d(e, { Z: () => h });
            var a = i(588016),
                s = i(354877),
                n = i(614983),
                r = i.n(n),
                _ = 1;
            class o extends s.Z {
                constructor(t) {
                    super();
                    var e = t || { x: 0, y: 0 };
                    "number" == typeof e.x && "number" == typeof e.y ? ((this.x = new a.Z(e.x)), (this.y = new a.Z(e.y))) : (r()(e.x instanceof a.Z && e.y instanceof a.Z, "AnimatedValueXY must be initialized with an object of numbers or AnimatedValues."), (this.x = e.x), (this.y = e.y)), (this._listeners = {});
                }
                setValue(t) {
                    this.x.setValue(t.x), this.y.setValue(t.y);
                }
                setOffset(t) {
                    this.x.setOffset(t.x), this.y.setOffset(t.y);
                }
                flattenOffset() {
                    this.x.flattenOffset(), this.y.flattenOffset();
                }
                extractOffset() {
                    this.x.extractOffset(), this.y.extractOffset();
                }
                __getValue() {
                    return { x: this.x.__getValue(), y: this.y.__getValue() };
                }
                resetAnimation(t) {
                    this.x.resetAnimation(), this.y.resetAnimation(), t && t(this.__getValue());
                }
                stopAnimation(t) {
                    this.x.stopAnimation(), this.y.stopAnimation(), t && t(this.__getValue());
                }
                addListener(t) {
                    var e = String(_++),
                        i = (e) => {
                            e.value;
                            t(this.__getValue());
                        };
                    return (this._listeners[e] = { x: this.x.addListener(i), y: this.y.addListener(i) }), e;
                }
                removeListener(t) {
                    this.x.removeListener(this._listeners[t].x), this.y.removeListener(this._listeners[t].y), delete this._listeners[t];
                }
                removeAllListeners() {
                    this.x.removeAllListeners(), this.y.removeAllListeners(), (this._listeners = {});
                }
                getLayout() {
                    return { left: this.x, top: this.y };
                }
                getTranslateTransform() {
                    return [{ translateX: this.x }, { translateY: this.y }];
                }
            }
            const h = o;
        },
        354877: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(77325),
                s = i(211804),
                n = i(889441);
            class r extends s.Z {
                constructor() {
                    super(), (this._children = []);
                }
                __makeNative(t) {
                    if (!this.__isNative) {
                        this.__isNative = !0;
                        for (var e, i = (0, a.Z)(this._children); !(e = i()).done; ) {
                            var s = e.value;
                            s.__makeNative(t), n.ZP.API.connectAnimatedNodes(this.__getNativeTag(), s.__getNativeTag());
                        }
                    }
                    super.__makeNative(t);
                }
                __addChild(t) {
                    0 === this._children.length && this.__attach(), this._children.push(t), this.__isNative && (t.__makeNative(this.__getPlatformConfig()), n.ZP.API.connectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()));
                }
                __removeChild(t) {
                    var e = this._children.indexOf(t);
                    -1 !== e && (this.__isNative && t.__isNative && n.ZP.API.disconnectAnimatedNodes(this.__getNativeTag(), t.__getNativeTag()), this._children.splice(e, 1), 0 === this._children.length && this.__detach());
                }
                __getChildren() {
                    return this._children;
                }
                __callListeners(t) {
                    if ((super.__callListeners(t), !this.__isNative))
                        for (var e, i = (0, a.Z)(this._children); !(e = i()).done; ) {
                            var s = e.value;
                            s.__getValue && s.__callListeners(s.__getValue());
                        }
                }
            }
            const _ = r;
        },
        951113: (t, e, i) => {
            i.d(e, { Z: () => _ });
            var a = i(33229);
            const s = new (i(28604).Z)();
            var n = i(614983),
                r = i.n(n);
            class _ {
                constructor(t) {
                    "ios" === a.Z.OS && (r()(null != t, "`new NativeEventEmitter()` requires a non-null argument."), (this._nativeModule = t));
                }
                addListener(t, e, i) {
                    var a;
                    null == (a = this._nativeModule) || a.addListener(t);
                    var n = s.addListener(t, e, i);
                    return {
                        remove: () => {
                            var t;
                            null != n && (null == (t = this._nativeModule) || t.removeListeners(1), n.remove(), (n = null));
                        },
                    };
                }
                removeListener(t, e) {
                    var i;
                    null == (i = this._nativeModule) || i.removeListeners(1), s.removeListener(t, e);
                }
                emit(t) {
                    for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), a = 1; a < e; a++) i[a - 1] = arguments[a];
                    s.emit(t, ...i);
                }
                removeAllListeners(t) {
                    var e;
                    r()(null != t, "`NativeEventEmitter.removeAllListener()` requires a non-null argument."), null == (e = this._nativeModule) || e.removeListeners(this.listenerCount(t)), s.removeAllListeners(t);
                }
                listenerCount(t) {
                    return s.listenerCount(t);
                }
            }
        },
        472822: (t, e, i) => {
            i.d(e, { Z: () => a });
            const a = { isLayoutAnimationEnabled: () => !0, shouldEmitW3CPointerEvents: () => !1, shouldPressibilityUseW3CPointerEventsForHover: () => !1, animatedShouldDebounceQueueFlush: () => !1, animatedShouldUseSingleOp: () => !1 };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-7d212117.5e992e8a.js.map
