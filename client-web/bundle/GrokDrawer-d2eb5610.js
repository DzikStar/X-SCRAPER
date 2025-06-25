(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-d2eb5610", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"],
    {
        730895: (t, n, e) => {
            "use strict";
            var i = e(821176);
            t.exports = function () {
                var t = i(this),
                    n = "";
                return t.hasIndices && (n += "d"), t.global && (n += "g"), t.ignoreCase && (n += "i"), t.multiline && (n += "m"), t.dotAll && (n += "s"), t.unicode && (n += "u"), t.unicodeSets && (n += "v"), t.sticky && (n += "y"), n;
            };
        },
        890103: (t, n, e) => {
            "use strict";
            var i = e(609859),
                r = e(807400),
                a = e(396616),
                o = e(730895),
                s = e(824229),
                u = i.RegExp,
                c = u.prototype;
            r &&
                s(function () {
                    var t = !0;
                    try {
                        u(".", "d");
                    } catch (n) {
                        t = !1;
                    }
                    var n = {},
                        e = "",
                        i = t ? "dgimsy" : "gimsy",
                        r = function (t, i) {
                            Object.defineProperty(n, t, {
                                get: function () {
                                    return (e += i), !0;
                                },
                            });
                        },
                        a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var o in (t && (a.hasIndices = "d"), a)) r(o, a[o]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(n) !== i || e !== i;
                }) &&
                a(c, "flags", { configurable: !0, get: o });
        },
        936386: (t) => {
            function n(t, n, e) {
                var i, r, a, o, s;
                function u() {
                    var c = Date.now() - o;
                    c < n && c >= 0 ? (i = setTimeout(u, n - c)) : ((i = null), e || ((s = t.apply(a, r)), (a = r = null)));
                }
                null == n && (n = 100);
                var c = function () {
                    (a = this), (r = arguments), (o = Date.now());
                    var c = e && !i;
                    return i || (i = setTimeout(u, n)), c && ((s = t.apply(a, r)), (a = r = null)), s;
                };
                return (
                    (c.clear = function () {
                        i && (clearTimeout(i), (i = null));
                    }),
                    (c.flush = function () {
                        i && ((s = t.apply(a, r)), (a = r = null), clearTimeout(i), (i = null));
                    }),
                    c
                );
            }
            (n.debounce = n), (t.exports = n);
        },
        744610: (t, n, e) => {
            "use strict";
            e.d(n, { Z: () => H });
            var i = e(133028),
                r = e(33229),
                a = e(553615),
                o = e(408839),
                s = e(59335),
                u = e(349887),
                c = e(101443),
                l = e(89554),
                v = e(265937),
                f = e(978735),
                d = e(419534),
                p = e(225266),
                h = e(138280),
                _ = e(668637),
                g = e(64650),
                Z = e(211804),
                m = e(104377),
                w = e(794167),
                y = e(588016),
                N = e(377715),
                E = e(900299),
                b = e(77593),
                D = e(521858),
                L = e(409140),
                k = e(411193),
                A = function (t, n) {
                    return t && n.onComplete
                        ? function () {
                              n.onComplete && n.onComplete(...arguments), t && t(...arguments);
                          }
                        : t || n.onComplete;
                },
                V = function (t, n, e) {
                    if (t instanceof N.Z) {
                        var r = (0, i.Z)({}, n),
                            a = (0, i.Z)({}, n);
                        for (var o in n) {
                            var s = n[o],
                                u = s.x,
                                c = s.y;
                            void 0 !== u && void 0 !== c && ((r[o] = u), (a[o] = c));
                        }
                        var l = e(t.x, r),
                            v = e(t.y, a);
                        return I([l, v], { stopTogether: !1 });
                    }
                    if (t instanceof k.Z) {
                        var f = (0, i.Z)({}, n),
                            d = (0, i.Z)({}, n),
                            p = (0, i.Z)({}, n),
                            h = (0, i.Z)({}, n);
                        for (var _ in n) {
                            var g = n[_],
                                Z = g.r,
                                m = g.g,
                                w = g.b,
                                y = g.a;
                            void 0 !== Z && void 0 !== m && void 0 !== w && void 0 !== y && ((f[_] = Z), (d[_] = m), (p[_] = w), (h[_] = y));
                        }
                        var E = e(t.r, f),
                            b = e(t.g, d),
                            D = e(t.b, p),
                            L = e(t.a, h);
                        return I([E, b, D, L], { stopTogether: !1 });
                    }
                    return null;
                },
                T = function t(n, e) {
                    var r = function (t, n, e) {
                        e = A(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof Z.Z ? i.track(new w.Z(i, n.toValue, D.Z, r, e)) : i.animate(new D.Z(r), e);
                    };
                    return (
                        V(n, e, t) || {
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
                C = function (t) {
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
                I = function (t, n) {
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
                U = function (t) {
                    return T(new y.Z(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 });
                };
            const P = {
                Value: y.Z,
                ValueXY: N.Z,
                Color: k.Z,
                Interpolation: h.Z,
                Node: Z.Z,
                decay: function t(n, e) {
                    var r = function (t, n, e) {
                        e = A(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), i.animate(new E.Z(r), e);
                    };
                    return (
                        V(n, e, t) || {
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
                timing: T,
                spring: function t(n, e) {
                    var r = function (t, n, e) {
                        e = A(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof Z.Z ? i.track(new w.Z(i, n.toValue, b.Z, r, e)) : i.animate(new b.Z(r), e);
                    };
                    return (
                        V(n, e, t) || {
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
                    return new f.Z(t, n);
                },
                subtract: function (t, n) {
                    return new m.Z(t, n);
                },
                divide: function (t, n) {
                    return new p.Z(t, n);
                },
                multiply: function (t, n) {
                    return new g.Z(t, n);
                },
                modulo: function (t, n) {
                    return new _.Z(t, n);
                },
                diffClamp: function (t, n, e) {
                    return new d.Z(t, n, e);
                },
                delay: U,
                sequence: C,
                parallel: I,
                stagger: function (t, n) {
                    return I(n.map((n, e) => C([U(t * e), n])));
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
                    var e = new v.Q(t, n);
                    return e.__isNative ? e : e.__getHandler();
                },
                createAnimatedComponent: L.Z,
                attachNativeEvent: v.I,
                forkEvent: function (t, n) {
                    return t
                        ? t instanceof v.Q
                            ? (t.__addListener(n), t)
                            : function () {
                                  "function" == typeof t && t(...arguments), n(...arguments);
                              }
                        : n;
                },
                unforkEvent: function (t, n) {
                    t && t instanceof v.Q && t.__removeListener(n);
                },
                Event: v.Q,
            };
            var x = !1;
            function M(t) {
                return (n) => {
                    var e =
                        null == n
                            ? n
                            : function () {
                                  if (!x) {
                                      x = !0;
                                      try {
                                          n(...arguments);
                                      } finally {
                                          x = !1;
                                      }
                                  }
                              };
                    t(e);
                };
            }
            var Q = { start: () => {}, stop: () => {}, reset: () => {}, _startNativeLoop: () => {}, _isUsingNativeDriver: () => !1 },
                O = (t) =>
                    (0, i.Z)(
                        (0, i.Z)({}, Q),
                        {},
                        {
                            start: M((n) => {
                                t.forEach((t) => t.start()), null == n || n({ finished: !0 });
                            }),
                        },
                    );
            const j = {
                Value: y.Z,
                ValueXY: N.Z,
                Color: k.Z,
                Interpolation: h.Z,
                Node: Z.Z,
                decay: function (t, n) {
                    return Q;
                },
                timing: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, Q),
                        {},
                        {
                            start: M((t) => {
                                e.setValue(n.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                spring: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, Q),
                        {},
                        {
                            start: M((t) => {
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
                    return Q;
                },
                sequence: function (t) {
                    return O(t);
                },
                parallel: function (t, n) {
                    return O(t);
                },
                stagger: function (t, n) {
                    return O(n);
                },
                loop: function (t, n) {
                    (void 0 === n ? {} : n).iterations;
                    return Q;
                },
                event: P.event,
                createAnimatedComponent: L.Z,
                attachNativeEvent: v.I,
                forkEvent: P.forkEvent,
                unforkEvent: P.unforkEvent,
                Event: v.Q,
            };
            var q = r.Z.isTesting ? j : P;
            const H = (0, i.Z)({ FlatList: a.Z, Image: o.Z, ScrollView: s.Z, SectionList: u.Z, Text: c.Z, View: l.Z }, q);
        },
        137937: (t, n, e) => {
            "use strict";
            e.d(n, { Z: () => i });
            const i = e(169758).Z;
        },
        472302: (t, n, e) => {
            "use strict";
            e.d(n, { Z: () => i });
            const i = e(975064).Z;
        },
        265937: (t, n, e) => {
            "use strict";
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-d2eb5610.acdd8f2a.js.map
