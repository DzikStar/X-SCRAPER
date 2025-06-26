"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock-6107ac1a"],
    {
        215337: (t, n, e) => {
            e.d(n, { Z: () => o });
            var i = e(202784),
                r = e(325686);
            class a extends i.Component {
                constructor(...t) {
                    super(...t),
                        (this.getColors = () => {
                            const { colors: t, locations: n } = this.props;
                            return t
                                .map((t, e) => {
                                    const i = n[e];
                                    let r = "";
                                    return i && (r = ` ${100 * i}%`), t + r;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: t, angleUnit: n, children: e, style: a } = this.props;
                    return i.createElement(r.Z, { style: [a, { backgroundImage: `linear-gradient(${t}${n},${this.getColors()})` }] }, e);
                }
            }
            a.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const o = a;
        },
        744610: (t, n, e) => {
            e.d(n, { Z: () => M });
            var i = e(133028),
                r = e(33229),
                a = e(553615),
                o = e(408839),
                s = e(59335),
                u = e(349887),
                c = e(101443),
                v = e(89554),
                f = e(265937),
                l = e(978735),
                d = e(419534),
                p = e(225266),
                h = e(138280),
                _ = e(668637),
                Z = e(64650),
                g = e(211804),
                m = e(104377),
                N = e(794167),
                E = e(588016),
                w = e(377715),
                y = e(900299),
                L = e(77593),
                V = e(521858),
                k = e(409140),
                A = e(411193),
                b = function (t, n) {
                    return t && n.onComplete
                        ? function () {
                              n.onComplete && n.onComplete(...arguments), t && t(...arguments);
                          }
                        : t || n.onComplete;
                },
                C = function (t, n, e) {
                    if (t instanceof w.Z) {
                        var r = (0, i.Z)({}, n),
                            a = (0, i.Z)({}, n);
                        for (var o in n) {
                            var s = n[o],
                                u = s.x,
                                c = s.y;
                            void 0 !== u && void 0 !== c && ((r[o] = u), (a[o] = c));
                        }
                        var v = e(t.x, r),
                            f = e(t.y, a);
                        return U([v, f], { stopTogether: !1 });
                    }
                    if (t instanceof A.Z) {
                        var l = (0, i.Z)({}, n),
                            d = (0, i.Z)({}, n),
                            p = (0, i.Z)({}, n),
                            h = (0, i.Z)({}, n);
                        for (var _ in n) {
                            var Z = n[_],
                                g = Z.r,
                                m = Z.g,
                                N = Z.b,
                                E = Z.a;
                            void 0 !== g && void 0 !== m && void 0 !== N && void 0 !== E && ((l[_] = g), (d[_] = m), (p[_] = N), (h[_] = E));
                        }
                        var y = e(t.r, l),
                            L = e(t.g, d),
                            V = e(t.b, p),
                            k = e(t.a, h);
                        return U([y, L, V, k], { stopTogether: !1 });
                    }
                    return null;
                },
                D = function t(n, e) {
                    var r = function (t, n, e) {
                        e = b(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof g.Z ? i.track(new N.Z(i, n.toValue, V.Z, r, e)) : i.animate(new V.Z(r), e);
                    };
                    return (
                        C(n, e, t) || {
                            start: function (t) {
                                r(n, e, t);
                            },
                            stop: function () {
                                n.stopAnimation();
                            },
                            reset: function () {
                                n.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, e), {}, { iterations: t });
                                r(n, a);
                            },
                            _isUsingNativeDriver: function () {
                                return e.useNativeDriver || !1;
                            },
                        }
                    );
                },
                T = function (t) {
                    var n = 0;
                    return {
                        start: function (e) {
                            0 === t.length
                                ? e && e({ finished: !0 })
                                : t[n].start(function i(r) {
                                      r.finished && ++n !== t.length ? t[n].start(i) : e && e(r);
                                  });
                        },
                        stop: function () {
                            n < t.length && t[n].stop();
                        },
                        reset: function () {
                            t.forEach((t, e) => {
                                e <= n && t.reset();
                            }),
                                (n = 0);
                        },
                        _startNativeLoop: function () {
                            throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
                        },
                        _isUsingNativeDriver: function () {
                            return !1;
                        },
                    };
                },
                U = function (t, n) {
                    var e = 0,
                        i = {},
                        r = !(n && !1 === n.stopTogether),
                        a = {
                            start: function (n) {
                                e !== t.length
                                    ? t.forEach((o, s) => {
                                          var u = function (o) {
                                              if (((i[s] = !0), ++e === t.length)) return (e = 0), void (n && n(o));
                                              !o.finished && r && a.stop();
                                          };
                                          o ? o.start(u) : u({ finished: !0 });
                                      })
                                    : n && n({ finished: !0 });
                            },
                            stop: function () {
                                t.forEach((t, n) => {
                                    !i[n] && t.stop(), (i[n] = !0);
                                });
                            },
                            reset: function () {
                                t.forEach((t, n) => {
                                    t.reset(), (i[n] = !1), (e = 0);
                                });
                            },
                            _startNativeLoop: function () {
                                throw new Error("Loops run using the native driver cannot contain Animated.parallel animations");
                            },
                            _isUsingNativeDriver: function () {
                                return !1;
                            },
                        };
                    return a;
                },
                I = function (t) {
                    return D(new E.Z(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 });
                };
            const P = {
                Value: E.Z,
                ValueXY: w.Z,
                Color: A.Z,
                Interpolation: h.Z,
                Node: g.Z,
                decay: function t(n, e) {
                    var r = function (t, n, e) {
                        e = b(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), i.animate(new y.Z(r), e);
                    };
                    return (
                        C(n, e, t) || {
                            start: function (t) {
                                r(n, e, t);
                            },
                            stop: function () {
                                n.stopAnimation();
                            },
                            reset: function () {
                                n.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, e), {}, { iterations: t });
                                r(n, a);
                            },
                            _isUsingNativeDriver: function () {
                                return e.useNativeDriver || !1;
                            },
                        }
                    );
                },
                timing: D,
                spring: function t(n, e) {
                    var r = function (t, n, e) {
                        e = b(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof g.Z ? i.track(new N.Z(i, n.toValue, L.Z, r, e)) : i.animate(new L.Z(r), e);
                    };
                    return (
                        C(n, e, t) || {
                            start: function (t) {
                                r(n, e, t);
                            },
                            stop: function () {
                                n.stopAnimation();
                            },
                            reset: function () {
                                n.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, e), {}, { iterations: t });
                                r(n, a);
                            },
                            _isUsingNativeDriver: function () {
                                return e.useNativeDriver || !1;
                            },
                        }
                    );
                },
                add: function (t, n) {
                    return new l.Z(t, n);
                },
                subtract: function (t, n) {
                    return new m.Z(t, n);
                },
                divide: function (t, n) {
                    return new p.Z(t, n);
                },
                multiply: function (t, n) {
                    return new Z.Z(t, n);
                },
                modulo: function (t, n) {
                    return new _.Z(t, n);
                },
                diffClamp: function (t, n, e) {
                    return new d.Z(t, n, e);
                },
                delay: I,
                sequence: T,
                parallel: U,
                stagger: function (t, n) {
                    return U(n.map((n, e) => T([I(t * e), n])));
                },
                loop: function (t, n) {
                    var e = void 0 === n ? {} : n,
                        i = e.iterations,
                        r = void 0 === i ? -1 : i,
                        a = e.resetBeforeIteration,
                        o = void 0 === a || a,
                        s = !1,
                        u = 0;
                    return {
                        start: function (n) {
                            t && 0 !== r
                                ? t._isUsingNativeDriver()
                                    ? t._startNativeLoop(r)
                                    : (function e(i) {
                                          void 0 === i && (i = { finished: !0 }), s || u === r || !1 === i.finished ? n && n(i) : (u++, o && t.reset(), t.start(e));
                                      })()
                                : n && n({ finished: !0 });
                        },
                        stop: function () {
                            (s = !0), t.stop();
                        },
                        reset: function () {
                            (u = 0), (s = !1), t.reset();
                        },
                        _startNativeLoop: function () {
                            throw new Error("Loops run using the native driver cannot contain Animated.loop animations");
                        },
                        _isUsingNativeDriver: function () {
                            return t._isUsingNativeDriver();
                        },
                    };
                },
                event: function (t, n) {
                    var e = new f.Q(t, n);
                    return e.__isNative ? e : e.__getHandler();
                },
                createAnimatedComponent: k.Z,
                attachNativeEvent: f.I,
                forkEvent: function (t, n) {
                    return t
                        ? t instanceof f.Q
                            ? (t.__addListener(n), t)
                            : function () {
                                  "function" == typeof t && t(...arguments), n(...arguments);
                              }
                        : n;
                },
                unforkEvent: function (t, n) {
                    t && t instanceof f.Q && t.__removeListener(n);
                },
                Event: f.Q,
            };
            var Q = !1;
            function x(t) {
                return (n) => {
                    var e =
                        null == n
                            ? n
                            : function () {
                                  if (!Q) {
                                      Q = !0;
                                      try {
                                          n(...arguments);
                                      } finally {
                                          Q = !1;
                                      }
                                  }
                              };
                    t(e);
                };
            }
            var $ = { start: () => {}, stop: () => {}, reset: () => {}, _startNativeLoop: () => {}, _isUsingNativeDriver: () => !1 },
                j = (t) =>
                    (0, i.Z)(
                        (0, i.Z)({}, $),
                        {},
                        {
                            start: x((n) => {
                                t.forEach((t) => t.start()), null == n || n({ finished: !0 });
                            }),
                        },
                    );
            const q = {
                Value: E.Z,
                ValueXY: w.Z,
                Color: A.Z,
                Interpolation: h.Z,
                Node: g.Z,
                decay: function (t, n) {
                    return $;
                },
                timing: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, $),
                        {},
                        {
                            start: x((t) => {
                                e.setValue(n.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                spring: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, $),
                        {},
                        {
                            start: x((t) => {
                                e.setValue(n.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                add: P.add,
                subtract: P.subtract,
                divide: P.divide,
                multiply: P.multiply,
                modulo: P.modulo,
                diffClamp: P.diffClamp,
                delay: function (t) {
                    return $;
                },
                sequence: function (t) {
                    return j(t);
                },
                parallel: function (t, n) {
                    return j(t);
                },
                stagger: function (t, n) {
                    return j(n);
                },
                loop: function (t, n) {
                    (void 0 === n ? {} : n).iterations;
                    return $;
                },
                event: P.event,
                createAnimatedComponent: k.Z,
                attachNativeEvent: f.I,
                forkEvent: P.forkEvent,
                unforkEvent: P.unforkEvent,
                Event: f.Q,
            };
            var H = r.Z.isTesting ? q : P;
            const M = (0, i.Z)({ FlatList: a.Z, Image: o.Z, ScrollView: s.Z, SectionList: u.Z, Text: c.Z, View: v.Z }, H);
        },
        137937: (t, n, e) => {
            e.d(n, { Z: () => i });
            const i = e(169758).Z;
        },
        472302: (t, n, e) => {
            e.d(n, { Z: () => i });
            const i = e(975064).Z;
        },
        265937: (t, n, e) => {
            e.d(n, { I: () => s, Q: () => u });
            var i = e(588016),
                r = e(889441),
                a = e(614983),
                o = e.n(a);
            function s(t, n, e) {
                var a = [],
                    s = (t, n) => {
                        if (t instanceof i.Z) t.__makeNative(), a.push({ nativeEventPath: n, animatedValueTag: t.__getNativeTag() });
                        else if ("object" == typeof t) for (var e in t) s(t[e], n.concat(e));
                    };
                return (
                    o()(e[0] && e[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`."),
                    s(e[0].nativeEvent, []),
                    null != t &&
                        a.forEach((e) => {
                            r.ZP.API.addAnimatedEventToView(t, n, e);
                        }),
                    {
                        detach() {
                            null != t &&
                                a.forEach((e) => {
                                    r.ZP.API.removeAnimatedEventFromView(t, n, e.animatedValueTag);
                                });
                        },
                    }
                );
            }
            class u {
                constructor(t, n) {
                    (this._listeners = []), (this._argMapping = t), null == n && (n = { useNativeDriver: !1 }), n.listener && this.__addListener(n.listener), (this._callListeners = this._callListeners.bind(this)), (this._attachedEvent = null), (this.__isNative = (0, r.lH)(n));
                }
                __addListener(t) {
                    this._listeners.push(t);
                }
                __removeListener(t) {
                    this._listeners = this._listeners.filter((n) => n !== t);
                }
                __attach(t, n) {
                    o()(this.__isNative, "Only native driven events need to be attached."), (this._attachedEvent = s(t, n, this._argMapping));
                }
                __detach(t, n) {
                    o()(this.__isNative, "Only native driven events need to be detached."), this._attachedEvent && this._attachedEvent.detach();
                }
                __getHandler() {
                    var t = this;
                    if (this.__isNative) return this._callListeners;
                    return function () {
                        for (var n = arguments.length, e = new Array(n), r = 0; r < n; r++) e[r] = arguments[r];
                        var a = (t, n, e) => {
                            if (t instanceof i.Z) "number" == typeof n && t.setValue(n);
                            else if ("object" == typeof t) for (var r in t) a(t[r], n[r], r);
                        };
                        t._argMapping.forEach((t, n) => {
                            a(t, e[n], "arg" + n);
                        }),
                            t._callListeners(...e);
                    };
                }
                _callListeners() {
                    for (var t = arguments.length, n = new Array(t), e = 0; e < t; e++) n[e] = arguments[e];
                    this._listeners.forEach((t) => t(...n));
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock-6107ac1a.a91b171a.js.map
