"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4"],
    {
        337886: (t, i, s) => {
            s.d(i, { Z: () => a });
            var e = s(889441),
                n = 1;
            const a = class {
                start(t, i, s, e, n) {}
                stop() {
                    this.__nativeId && e.ZP.API.stopAnimation(this.__nativeId);
                }
                __getNativeAnimationConfig() {
                    throw new Error("This animation type cannot be offloaded to native");
                }
                __debouncedOnEnd(t) {
                    var i = this.__onEnd;
                    (this.__onEnd = null), i && i(t);
                }
                __startNativeAnimation(t) {
                    var i = n + ":startAnimation";
                    (n += 1), e.ZP.API.setWaitingForIdentifier(i);
                    try {
                        var s = this.__getNativeAnimationConfig();
                        t.__makeNative(s.platformConfig), (this.__nativeId = e.ZP.generateNewAnimationId()), e.ZP.API.startAnimatingNode(this.__nativeId, t.__getNativeTag(), s, this.__debouncedOnEnd.bind(this));
                    } catch (t) {
                        throw t;
                    } finally {
                        e.ZP.API.unsetWaitingForIdentifier(i);
                    }
                }
            };
        },
        900299: (t, i, s) => {
            s.d(i, { Z: () => o });
            var e = s(337886),
                n = s(889441);
            class a extends e.Z {
                constructor(t) {
                    var i, s, e;
                    super(), (this._deceleration = null !== (i = t.deceleration) && void 0 !== i ? i : 0.998), (this._velocity = t.velocity), (this._useNativeDriver = (0, n.lH)(t)), (this.__isInteraction = null !== (s = t.isInteraction) && void 0 !== s ? s : !this._useNativeDriver), (this.__iterations = null !== (e = t.iterations) && void 0 !== e ? e : 1);
                }
                __getNativeAnimationConfig() {
                    return { type: "decay", deceleration: this._deceleration, velocity: this._velocity, iterations: this.__iterations };
                }
                start(t, i, s, e, n) {
                    (this.__active = !0), (this._lastValue = t), (this._fromValue = t), (this._onUpdate = i), (this.__onEnd = s), (this._startTime = Date.now()), this._useNativeDriver ? this.__startNativeAnimation(n) : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
                }
                onUpdate() {
                    var t = Date.now(),
                        i = this._fromValue + (this._velocity / (1 - this._deceleration)) * (1 - Math.exp(-(1 - this._deceleration) * (t - this._startTime)));
                    this._onUpdate(i), Math.abs(this._lastValue - i) < 0.1 ? this.__debouncedOnEnd({ finished: !0 }) : ((this._lastValue = i), this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this))));
                }
                stop() {
                    super.stop(), (this.__active = !1), s.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const o = a;
        },
        77593: (t, i, s) => {
            s.d(i, { Z: () => _ });
            var e = s(337886),
                n = s(555516),
                a = s(614983),
                o = s.n(a),
                r = s(889441);
            class h extends e.Z {
                constructor(t) {
                    var i, s, e, a, h, _, l, d, u, m, v;
                    if ((super(), (this._overshootClamping = null !== (i = t.overshootClamping) && void 0 !== i && i), (this._restDisplacementThreshold = null !== (s = t.restDisplacementThreshold) && void 0 !== s ? s : 0.001), (this._restSpeedThreshold = null !== (e = t.restSpeedThreshold) && void 0 !== e ? e : 0.001), (this._initialVelocity = null !== (a = t.velocity) && void 0 !== a ? a : 0), (this._lastVelocity = null !== (h = t.velocity) && void 0 !== h ? h : 0), (this._toValue = t.toValue), (this._delay = null !== (_ = t.delay) && void 0 !== _ ? _ : 0), (this._useNativeDriver = (0, r.lH)(t)), (this._platformConfig = t.platformConfig), (this.__isInteraction = null !== (l = t.isInteraction) && void 0 !== l ? l : !this._useNativeDriver), (this.__iterations = null !== (d = t.iterations) && void 0 !== d ? d : 1), void 0 !== t.stiffness || void 0 !== t.damping || void 0 !== t.mass)) o()(void 0 === t.bounciness && void 0 === t.speed && void 0 === t.tension && void 0 === t.friction, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one"), (this._stiffness = null !== (u = t.stiffness) && void 0 !== u ? u : 100), (this._damping = null !== (m = t.damping) && void 0 !== m ? m : 10), (this._mass = null !== (v = t.mass) && void 0 !== v ? v : 1);
                    else if (void 0 !== t.bounciness || void 0 !== t.speed) {
                        var f, c;
                        o()(void 0 === t.tension && void 0 === t.friction && void 0 === t.stiffness && void 0 === t.damping && void 0 === t.mass, "You can define one of bounciness/speed, tension/friction, or stiffness/damping/mass, but not more than one");
                        var p = n.Z.fromBouncinessAndSpeed(null !== (f = t.bounciness) && void 0 !== f ? f : 8, null !== (c = t.speed) && void 0 !== c ? c : 12);
                        (this._stiffness = p.stiffness), (this._damping = p.damping), (this._mass = 1);
                    } else {
                        var g,
                            V,
                            y = n.Z.fromOrigamiTensionAndFriction(null !== (g = t.tension) && void 0 !== g ? g : 40, null !== (V = t.friction) && void 0 !== V ? V : 7);
                        (this._stiffness = y.stiffness), (this._damping = y.damping), (this._mass = 1);
                    }
                    o()(this._stiffness > 0, "Stiffness value must be greater than 0"), o()(this._damping > 0, "Damping value must be greater than 0"), o()(this._mass > 0, "Mass value must be greater than 0");
                }
                __getNativeAnimationConfig() {
                    var t;
                    return { type: "spring", overshootClamping: this._overshootClamping, restDisplacementThreshold: this._restDisplacementThreshold, restSpeedThreshold: this._restSpeedThreshold, stiffness: this._stiffness, damping: this._damping, mass: this._mass, initialVelocity: null !== (t = this._initialVelocity) && void 0 !== t ? t : this._lastVelocity, toValue: this._toValue, iterations: this.__iterations, platformConfig: this._platformConfig };
                }
                start(t, i, s, e, n) {
                    if (((this.__active = !0), (this._startPosition = t), (this._lastPosition = this._startPosition), (this._onUpdate = i), (this.__onEnd = s), (this._lastTime = Date.now()), (this._frameTime = 0), e instanceof h)) {
                        var a = e.getInternalState();
                        (this._lastPosition = a.lastPosition), (this._lastVelocity = a.lastVelocity), (this._initialVelocity = this._lastVelocity), (this._lastTime = a.lastTime);
                    }
                    var o = () => {
                        this._useNativeDriver ? this.__startNativeAnimation(n) : this.onUpdate();
                    };
                    this._delay ? (this._timeout = setTimeout(o, this._delay)) : o();
                }
                getInternalState() {
                    return { lastPosition: this._lastPosition, lastVelocity: this._lastVelocity, lastTime: this._lastTime };
                }
                onUpdate() {
                    var t = Date.now();
                    t > this._lastTime + 64 && (t = this._lastTime + 64);
                    var i = (t - this._lastTime) / 1e3;
                    this._frameTime += i;
                    var s = this._damping,
                        e = this._mass,
                        n = this._stiffness,
                        a = -this._initialVelocity,
                        o = s / (2 * Math.sqrt(n * e)),
                        r = Math.sqrt(n / e),
                        h = r * Math.sqrt(1 - o * o),
                        _ = this._toValue - this._startPosition,
                        l = 0,
                        d = 0,
                        u = this._frameTime;
                    if (o < 1) {
                        var m = Math.exp(-o * r * u);
                        (l = this._toValue - m * (((a + o * r * _) / h) * Math.sin(h * u) + _ * Math.cos(h * u))), (d = o * r * m * ((Math.sin(h * u) * (a + o * r * _)) / h + _ * Math.cos(h * u)) - m * (Math.cos(h * u) * (a + o * r * _) - h * _ * Math.sin(h * u)));
                    } else {
                        var v = Math.exp(-r * u);
                        (l = this._toValue - v * (_ + (a + r * _) * u)), (d = v * (a * (u * r - 1) + u * _ * (r * r)));
                    }
                    if (((this._lastTime = t), (this._lastPosition = l), (this._lastVelocity = d), this._onUpdate(l), this.__active)) {
                        var f = !1;
                        this._overshootClamping && 0 !== this._stiffness && (f = this._startPosition < this._toValue ? l > this._toValue : l < this._toValue);
                        var c = Math.abs(d) <= this._restSpeedThreshold,
                            p = !0;
                        if ((0 !== this._stiffness && (p = Math.abs(this._toValue - l) <= this._restDisplacementThreshold), f || (c && p))) return 0 !== this._stiffness && ((this._lastPosition = this._toValue), (this._lastVelocity = 0), this._onUpdate(this._toValue)), void this.__debouncedOnEnd({ finished: !0 });
                        this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this));
                    }
                }
                stop() {
                    super.stop(), (this.__active = !1), clearTimeout(this._timeout), s.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const _ = h;
        },
        521858: (t, i, s) => {
            s.d(i, { Z: () => h });
            var e,
                n = s(137937),
                a = s(337886),
                o = s(889441);
            class r extends a.Z {
                constructor(t) {
                    var i, s, a, r, h;
                    super(), (this._toValue = t.toValue), (this._easing = null !== (i = t.easing) && void 0 !== i ? i : (e || (e = n.Z.inOut(n.Z.ease)), e)), (this._duration = null !== (s = t.duration) && void 0 !== s ? s : 500), (this._delay = null !== (a = t.delay) && void 0 !== a ? a : 0), (this.__iterations = null !== (r = t.iterations) && void 0 !== r ? r : 1), (this._useNativeDriver = (0, o.lH)(t)), (this._platformConfig = t.platformConfig), (this.__isInteraction = null !== (h = t.isInteraction) && void 0 !== h ? h : !this._useNativeDriver);
                }
                __getNativeAnimationConfig() {
                    for (var t = [], i = Math.round(this._duration / (1e3 / 60)), s = 0; s < i; s++) t.push(this._easing(s / i));
                    return t.push(this._easing(1)), { type: "frames", frames: t, toValue: this._toValue, iterations: this.__iterations, platformConfig: this._platformConfig };
                }
                start(t, i, s, e, n) {
                    (this.__active = !0), (this._fromValue = t), (this._onUpdate = i), (this.__onEnd = s);
                    var a = () => {
                        0 !== this._duration || this._useNativeDriver ? ((this._startTime = Date.now()), this._useNativeDriver ? this.__startNativeAnimation(n) : (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)))) : (this._onUpdate(this._toValue), this.__debouncedOnEnd({ finished: !0 }));
                    };
                    this._delay ? (this._timeout = setTimeout(a, this._delay)) : a();
                }
                onUpdate() {
                    var t = Date.now();
                    if (t >= this._startTime + this._duration) return 0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), void this.__debouncedOnEnd({ finished: !0 });
                    this._onUpdate(this._fromValue + this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = requestAnimationFrame(this.onUpdate.bind(this)));
                }
                stop() {
                    super.stop(), (this.__active = !1), clearTimeout(this._timeout), s.g.cancelAnimationFrame(this._animationFrame), this.__debouncedOnEnd({ finished: !1 });
                }
            }
            const h = r;
        },
        445950: (t, i, s) => {
            s.d(i, { Z: () => f });
            var e = 4,
                n = 0.001,
                a = 1e-7,
                o = 10,
                r = 11,
                h = 1 / (r - 1),
                _ = "function" == typeof Float32Array;
            function l(t, i) {
                return 1 - 3 * i + 3 * t;
            }
            function d(t, i) {
                return 3 * i - 6 * t;
            }
            function u(t) {
                return 3 * t;
            }
            function m(t, i, s) {
                return ((l(i, s) * t + d(i, s)) * t + u(i)) * t;
            }
            function v(t, i, s) {
                return 3 * l(i, s) * t * t + 2 * d(i, s) * t + u(i);
            }
            function f(t, i, s, l) {
                if (!(t >= 0 && t <= 1 && s >= 0 && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
                var d = _ ? new Float32Array(r) : new Array(r);
                if (t !== i || s !== l) for (var u = 0; u < r; ++u) d[u] = m(u * h, t, s);
                function f(i) {
                    for (var _ = 0, l = 1, u = r - 1; l !== u && d[l] <= i; ++l) _ += h;
                    --l;
                    var f = _ + ((i - d[l]) / (d[l + 1] - d[l])) * h,
                        c = v(f, t, s);
                    return c >= n
                        ? (function (t, i, s, n) {
                              for (var a = i, o = 0; o < e; ++o) {
                                  var r = v(a, s, n);
                                  if (0 === r) return a;
                                  a -= (m(a, s, n) - t) / r;
                              }
                              return a;
                          })(i, f, t, s)
                        : 0 === c
                          ? f
                          : (function (t, i, s, e, n) {
                                var r,
                                    h,
                                    _ = 0,
                                    l = i,
                                    d = s;
                                do {
                                    (r = m((h = l + (d - l) / 2), e, n) - t) > 0 ? (d = h) : (l = h);
                                } while (Math.abs(r) > a && ++_ < o);
                                return h;
                            })(i, _, _ + h, t, s);
                }
                return function (e) {
                    return t === i && s === l ? e : 0 === e ? 0 : 1 === e ? 1 : m(f(e), i, l);
                };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-e64ba3d4.8b4e15fa.js.map
