"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Dock-6107ac1a", "icons/IconChevronDownNoMargin-js", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"],
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
        63274: (t, n, e) => {
            e.r(n), e.d(n, { default: () => u });
            var i = e(202784),
                r = e(890601),
                a = e(783427),
                o = e(347101);
            const s = (t = {}) => {
                const { direction: n } = (0, a.Z)();
                return (0, r.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [o.Z.root, t.style], viewBox: "0 0 17 10", children: i.createElement("g", null, i.createElement("path", { d: "M.043 1.485L1.457.065 8.5 7.115l7.043-7.05 1.414 1.42L8.5 9.935.043 1.485z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 17, height: 10 };
            const u = s;
        },
        744610: (t, n, e) => {
            e.d(n, { Z: () => H });
            var i = e(133028),
                r = e(33229),
                a = e(553615),
                o = e(408839),
                s = e(59335),
                u = e(349887),
                c = e(101443),
                v = e(89554),
                l = e(265937),
                f = e(978735),
                d = e(419534),
                h = e(225266),
                p = e(138280),
                _ = e(668637),
                Z = e(64650),
                g = e(211804),
                m = e(104377),
                w = e(794167),
                E = e(588016),
                N = e(377715),
                y = e(900299),
                L = e(77593),
                D = e(521858),
                V = e(409140),
                b = e(411193),
                k = function (t, n) {
                    return t && n.onComplete
                        ? function () {
                              n.onComplete && n.onComplete(...arguments), t && t(...arguments);
                          }
                        : t || n.onComplete;
                },
                A = function (t, n, e) {
                    if (t instanceof N.Z) {
                        var r = (0, i.Z)({}, n),
                            a = (0, i.Z)({}, n);
                        for (var o in n) {
                            var s = n[o],
                                u = s.x,
                                c = s.y;
                            void 0 !== u && void 0 !== c && ((r[o] = u), (a[o] = c));
                        }
                        var v = e(t.x, r),
                            l = e(t.y, a);
                        return T([v, l], { stopTogether: !1 });
                    }
                    if (t instanceof b.Z) {
                        var f = (0, i.Z)({}, n),
                            d = (0, i.Z)({}, n),
                            h = (0, i.Z)({}, n),
                            p = (0, i.Z)({}, n);
                        for (var _ in n) {
                            var Z = n[_],
                                g = Z.r,
                                m = Z.g,
                                w = Z.b,
                                E = Z.a;
                            void 0 !== g && void 0 !== m && void 0 !== w && void 0 !== E && ((f[_] = g), (d[_] = m), (h[_] = w), (p[_] = E));
                        }
                        var y = e(t.r, f),
                            L = e(t.g, d),
                            D = e(t.b, h),
                            V = e(t.a, p);
                        return T([y, L, D, V], { stopTogether: !1 });
                    }
                    return null;
                },
                C = function t(n, e) {
                    var r = function (t, n, e) {
                        e = k(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof g.Z ? i.track(new w.Z(i, n.toValue, D.Z, r, e)) : i.animate(new D.Z(r), e);
                    };
                    return (
                        A(n, e, t) || {
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
                I = function (t) {
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
                T = function (t, n) {
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
                    return C(new E.Z(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 });
                };
            const M = {
                Value: E.Z,
                ValueXY: N.Z,
                Color: b.Z,
                Interpolation: p.Z,
                Node: g.Z,
                decay: function t(n, e) {
                    var r = function (t, n, e) {
                        e = k(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), i.animate(new y.Z(r), e);
                    };
                    return (
                        A(n, e, t) || {
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
                timing: C,
                spring: function t(n, e) {
                    var r = function (t, n, e) {
                        e = k(e, n);
                        var i = t,
                            r = n;
                        i.stopTracking(), n.toValue instanceof g.Z ? i.track(new w.Z(i, n.toValue, L.Z, r, e)) : i.animate(new L.Z(r), e);
                    };
                    return (
                        A(n, e, t) || {
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
                    return new h.Z(t, n);
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
                delay: U,
                sequence: I,
                parallel: T,
                stagger: function (t, n) {
                    return T(n.map((n, e) => I([U(t * e), n])));
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
                    var e = new l.Q(t, n);
                    return e.__isNative ? e : e.__getHandler();
                },
                createAnimatedComponent: V.Z,
                attachNativeEvent: l.I,
                forkEvent: function (t, n) {
                    return t
                        ? t instanceof l.Q
                            ? (t.__addListener(n), t)
                            : function () {
                                  "function" == typeof t && t(...arguments), n(...arguments);
                              }
                        : n;
                },
                unforkEvent: function (t, n) {
                    t && t instanceof l.Q && t.__removeListener(n);
                },
                Event: l.Q,
            };
            var P = !1;
            function Q(t) {
                return (n) => {
                    var e =
                        null == n
                            ? n
                            : function () {
                                  if (!P) {
                                      P = !0;
                                      try {
                                          n(...arguments);
                                      } finally {
                                          P = !1;
                                      }
                                  }
                              };
                    t(e);
                };
            }
            var x = { start: () => {}, stop: () => {}, reset: () => {}, _startNativeLoop: () => {}, _isUsingNativeDriver: () => !1 },
                j = (t) =>
                    (0, i.Z)(
                        (0, i.Z)({}, x),
                        {},
                        {
                            start: Q((n) => {
                                t.forEach((t) => t.start()), null == n || n({ finished: !0 });
                            }),
                        },
                    );
            const $ = {
                Value: E.Z,
                ValueXY: N.Z,
                Color: b.Z,
                Interpolation: p.Z,
                Node: g.Z,
                decay: function (t, n) {
                    return x;
                },
                timing: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, x),
                        {},
                        {
                            start: Q((t) => {
                                e.setValue(n.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                spring: function (t, n) {
                    var e = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, x),
                        {},
                        {
                            start: Q((t) => {
                                e.setValue(n.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                add: M.add,
                subtract: M.subtract,
                divide: M.divide,
                multiply: M.multiply,
                modulo: M.modulo,
                diffClamp: M.diffClamp,
                delay: function (t) {
                    return x;
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
                    return x;
                },
                event: M.event,
                createAnimatedComponent: V.Z,
                attachNativeEvent: l.I,
                forkEvent: M.forkEvent,
                unforkEvent: M.unforkEvent,
                Event: l.Q,
            };
            var q = r.Z.isTesting ? $ : M;
            const H = (0, i.Z)({ FlatList: a.Z, Image: o.Z, ScrollView: s.Z, SectionList: u.Z, Text: c.Z, View: v.Z }, q);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Dock-6107ac1a.e73ef40a.js.map
