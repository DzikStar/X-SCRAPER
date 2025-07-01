"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"],
    {
        744610: (t, e, n) => {
            n.d(e, { Z: () => B });
            var i = n(133028),
                r = n(33229),
                a = n(553615),
                o = n(408839),
                s = n(59335),
                u = n(349887),
                l = n(101443),
                c = n(89554),
                v = n(265937),
                f = n(978735),
                d = n(419534),
                h = n(225266),
                p = n(138280),
                Z = n(668637),
                _ = n(64650),
                g = n(211804),
                m = n(104377),
                b = n(794167),
                w = n(588016),
                y = n(377715),
                E = n(900299),
                N = n(77593),
                C = n(521858),
                D = n(409140),
                k = n(411193),
                A = function (t, e) {
                    return t && e.onComplete
                        ? function () {
                              e.onComplete && e.onComplete(...arguments), t && t(...arguments);
                          }
                        : t || e.onComplete;
                },
                L = function (t, e, n) {
                    if (t instanceof y.Z) {
                        var r = (0, i.Z)({}, e),
                            a = (0, i.Z)({}, e);
                        for (var o in e) {
                            var s = e[o],
                                u = s.x,
                                l = s.y;
                            void 0 !== u && void 0 !== l && ((r[o] = u), (a[o] = l));
                        }
                        var c = n(t.x, r),
                            v = n(t.y, a);
                        return I([c, v], { stopTogether: !1 });
                    }
                    if (t instanceof k.Z) {
                        var f = (0, i.Z)({}, e),
                            d = (0, i.Z)({}, e),
                            h = (0, i.Z)({}, e),
                            p = (0, i.Z)({}, e);
                        for (var Z in e) {
                            var _ = e[Z],
                                g = _.r,
                                m = _.g,
                                b = _.b,
                                w = _.a;
                            void 0 !== g && void 0 !== m && void 0 !== b && void 0 !== w && ((f[Z] = g), (d[Z] = m), (h[Z] = b), (p[Z] = w));
                        }
                        var E = n(t.r, f),
                            N = n(t.g, d),
                            C = n(t.b, h),
                            D = n(t.a, p);
                        return I([E, N, C, D], { stopTogether: !1 });
                    }
                    return null;
                },
                V = function t(e, n) {
                    var r = function (t, e, n) {
                        n = A(n, e);
                        var i = t,
                            r = e;
                        i.stopTracking(), e.toValue instanceof g.Z ? i.track(new b.Z(i, e.toValue, C.Z, r, n)) : i.animate(new C.Z(r), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                r(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, n), {}, { iterations: t });
                                r(e, a);
                            },
                            _isUsingNativeDriver: function () {
                                return n.useNativeDriver || !1;
                            },
                        }
                    );
                },
                T = function (t) {
                    var e = 0;
                    return {
                        start: function (n) {
                            0 === t.length
                                ? n && n({ finished: !0 })
                                : t[e].start(function i(r) {
                                      r.finished && ++e !== t.length ? t[e].start(i) : n && n(r);
                                  });
                        },
                        stop: function () {
                            e < t.length && t[e].stop();
                        },
                        reset: function () {
                            t.forEach((t, n) => {
                                n <= e && t.reset();
                            }),
                                (e = 0);
                        },
                        _startNativeLoop: function () {
                            throw new Error("Loops run using the native driver cannot contain Animated.sequence animations");
                        },
                        _isUsingNativeDriver: function () {
                            return !1;
                        },
                    };
                },
                I = function (t, e) {
                    var n = 0,
                        i = {},
                        r = !(e && !1 === e.stopTogether),
                        a = {
                            start: function (e) {
                                n !== t.length
                                    ? t.forEach((o, s) => {
                                          var u = function (o) {
                                              if (((i[s] = !0), ++n === t.length)) return (n = 0), void (e && e(o));
                                              !o.finished && r && a.stop();
                                          };
                                          o ? o.start(u) : u({ finished: !0 });
                                      })
                                    : e && e({ finished: !0 });
                            },
                            stop: function () {
                                t.forEach((t, e) => {
                                    !i[e] && t.stop(), (i[e] = !0);
                                });
                            },
                            reset: function () {
                                t.forEach((t, e) => {
                                    t.reset(), (i[e] = !1), (n = 0);
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
                x = function (t) {
                    return V(new w.Z(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 });
                };
            const F = {
                Value: w.Z,
                ValueXY: y.Z,
                Color: k.Z,
                Interpolation: p.Z,
                Node: g.Z,
                decay: function t(e, n) {
                    var r = function (t, e, n) {
                        n = A(n, e);
                        var i = t,
                            r = e;
                        i.stopTracking(), i.animate(new E.Z(r), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                r(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, n), {}, { iterations: t });
                                r(e, a);
                            },
                            _isUsingNativeDriver: function () {
                                return n.useNativeDriver || !1;
                            },
                        }
                    );
                },
                timing: V,
                spring: function t(e, n) {
                    var r = function (t, e, n) {
                        n = A(n, e);
                        var i = t,
                            r = e;
                        i.stopTracking(), e.toValue instanceof g.Z ? i.track(new b.Z(i, e.toValue, N.Z, r, n)) : i.animate(new N.Z(r), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                r(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, i.Z)((0, i.Z)({}, n), {}, { iterations: t });
                                r(e, a);
                            },
                            _isUsingNativeDriver: function () {
                                return n.useNativeDriver || !1;
                            },
                        }
                    );
                },
                add: function (t, e) {
                    return new f.Z(t, e);
                },
                subtract: function (t, e) {
                    return new m.Z(t, e);
                },
                divide: function (t, e) {
                    return new h.Z(t, e);
                },
                multiply: function (t, e) {
                    return new _.Z(t, e);
                },
                modulo: function (t, e) {
                    return new Z.Z(t, e);
                },
                diffClamp: function (t, e, n) {
                    return new d.Z(t, e, n);
                },
                delay: x,
                sequence: T,
                parallel: I,
                stagger: function (t, e) {
                    return I(e.map((e, n) => T([x(t * n), e])));
                },
                loop: function (t, e) {
                    var n = void 0 === e ? {} : e,
                        i = n.iterations,
                        r = void 0 === i ? -1 : i,
                        a = n.resetBeforeIteration,
                        o = void 0 === a || a,
                        s = !1,
                        u = 0;
                    return {
                        start: function (e) {
                            t && 0 !== r
                                ? t._isUsingNativeDriver()
                                    ? t._startNativeLoop(r)
                                    : (function n(i) {
                                          void 0 === i && (i = { finished: !0 }), s || u === r || !1 === i.finished ? e && e(i) : (u++, o && t.reset(), t.start(n));
                                      })()
                                : e && e({ finished: !0 });
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
                event: function (t, e) {
                    var n = new v.Q(t, e);
                    return n.__isNative ? n : n.__getHandler();
                },
                createAnimatedComponent: D.Z,
                attachNativeEvent: v.I,
                forkEvent: function (t, e) {
                    return t
                        ? t instanceof v.Q
                            ? (t.__addListener(e), t)
                            : function () {
                                  "function" == typeof t && t(...arguments), e(...arguments);
                              }
                        : e;
                },
                unforkEvent: function (t, e) {
                    t && t instanceof v.Q && t.__removeListener(e);
                },
                Event: v.Q,
            };
            var j = !1;
            function S(t) {
                return (e) => {
                    var n =
                        null == e
                            ? e
                            : function () {
                                  if (!j) {
                                      j = !0;
                                      try {
                                          e(...arguments);
                                      } finally {
                                          j = !1;
                                      }
                                  }
                              };
                    t(n);
                };
            }
            var U = { start: () => {}, stop: () => {}, reset: () => {}, _startNativeLoop: () => {}, _isUsingNativeDriver: () => !1 },
                M = (t) =>
                    (0, i.Z)(
                        (0, i.Z)({}, U),
                        {},
                        {
                            start: S((e) => {
                                t.forEach((t) => t.start()), null == e || e({ finished: !0 });
                            }),
                        },
                    );
            const P = {
                Value: w.Z,
                ValueXY: y.Z,
                Color: k.Z,
                Interpolation: p.Z,
                Node: g.Z,
                decay: function (t, e) {
                    return U;
                },
                timing: function (t, e) {
                    var n = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, U),
                        {},
                        {
                            start: S((t) => {
                                n.setValue(e.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                spring: function (t, e) {
                    var n = t;
                    return (0, i.Z)(
                        (0, i.Z)({}, U),
                        {},
                        {
                            start: S((t) => {
                                n.setValue(e.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                add: F.add,
                subtract: F.subtract,
                divide: F.divide,
                multiply: F.multiply,
                modulo: F.modulo,
                diffClamp: F.diffClamp,
                delay: function (t) {
                    return U;
                },
                sequence: function (t) {
                    return M(t);
                },
                parallel: function (t, e) {
                    return M(t);
                },
                stagger: function (t, e) {
                    return M(e);
                },
                loop: function (t, e) {
                    (void 0 === e ? {} : e).iterations;
                    return U;
                },
                event: F.event,
                createAnimatedComponent: D.Z,
                attachNativeEvent: v.I,
                forkEvent: F.forkEvent,
                unforkEvent: F.unforkEvent,
                Event: v.Q,
            };
            var Q = r.Z.isTesting ? P : F;
            const B = (0, i.Z)({ FlatList: a.Z, Image: o.Z, ScrollView: s.Z, SectionList: u.Z, Text: l.Z, View: c.Z }, Q);
        },
        137937: (t, e, n) => {
            n.d(e, { Z: () => i });
            const i = n(169758).Z;
        },
        151624: (t, e, n) => {
            n.d(e, { Z: () => i });
            const i = n(454479).Z;
        },
        472302: (t, e, n) => {
            n.d(e, { Z: () => i });
            const i = n(975064).Z;
        },
        372612: (t, e, n) => {
            n.d(e, { Z: () => b });
            var i = n(133028),
                r = n(807896),
                a = n(231461),
                o = n(202784),
                s = n(890601),
                u = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/;
            const l = (t, e) => {
                var n;
                return "string" == typeof t ? "" + parseFloat(t) * e + t.match(u)[1] : ((n = t), !isNaN(parseFloat(n)) && isFinite(n) ? t * e : void 0);
            };
            var c = n(297689),
                v = n(325686),
                f = ["aria-label", "accessibilityLabel", "activeThumbColor", "activeTrackColor", "disabled", "onValueChange", "style", "thumbColor", "trackColor", "value"],
                d = {},
                h = "0px 1px 3px rgba(0,0,0,0.5)",
                p = h + ", 0 0 0 10px rgba(0,0,0,0.1)",
                Z = "#D5D5D5",
                _ = "#BDBDBD",
                g = o.forwardRef((t, e) => {
                    var n = t["aria-label"],
                        i = t.accessibilityLabel,
                        u = t.activeThumbColor,
                        g = t.activeTrackColor,
                        b = t.disabled,
                        w = void 0 !== b && b,
                        y = t.onValueChange,
                        E = t.style,
                        N = void 0 === E ? d : E,
                        C = t.thumbColor,
                        D = t.trackColor,
                        k = t.value,
                        A = void 0 !== k && k,
                        L = (0, a.Z)(t, f),
                        V = o.useRef(null);
                    function T(t) {
                        var e = "focus" === t.nativeEvent.type ? p : h;
                        null != V.current && (V.current.style.boxShadow = e);
                    }
                    var I = c.Z.flatten(N),
                        x = I.height,
                        F = I.width,
                        j = x || "20px",
                        S = l(j, 2),
                        U = F > S ? F : S,
                        M = l(j, 0.5),
                        P = !0 === A ? (null != D && "object" == typeof D ? D.true : null != g ? g : "#A3D3CF") : null != D && "object" == typeof D ? D.false : null != D ? D : "#939393",
                        Q = A ? (null != u ? u : "#009688") : null != C ? C : "#FAFAFA",
                        B = j,
                        O = B,
                        R = [m.root, N, w && m.cursorDefault, { height: j, width: U }],
                        q = !0 === A ? (("string" == typeof g && null != g) || ("object" == typeof D && null != D && D.true) ? P : Z) : ("string" == typeof D && null != D) || ("object" == typeof D && null != D && D.false) ? P : Z,
                        H = !0 === A ? (null == u ? _ : Q) : null == C ? _ : Q,
                        X = [m.track, { backgroundColor: w ? q : P, borderRadius: M }],
                        Y = [m.thumb, A && m.thumbActive, { backgroundColor: w ? H : Q, height: B, marginStart: A ? l(O, -1) : 0, width: O }],
                        z = (0, s.Z)("input", {
                            "aria-label": n || i,
                            checked: A,
                            disabled: w,
                            onBlur: T,
                            onChange: function (t) {
                                null != y && y(t.nativeEvent.target.checked);
                            },
                            onFocus: T,
                            ref: e,
                            style: [m.nativeControl, m.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return o.createElement(v.Z, (0, r.Z)({}, L, { style: R }), o.createElement(v.Z, { style: X }), o.createElement(v.Z, { ref: V, style: Y }), z);
                });
            g.displayName = "Switch";
            var m = c.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, i.Z)((0, i.Z)({ forcedColorAdjust: "none" }, c.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: h, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, i.Z)((0, i.Z)({}, c.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const b = g;
        },
        265937: (t, e, n) => {
            n.d(e, { I: () => s, Q: () => u });
            var i = n(588016),
                r = n(889441),
                a = n(614983),
                o = n.n(a);
            function s(t, e, n) {
                var a = [],
                    s = (t, e) => {
                        if (t instanceof i.Z) t.__makeNative(), a.push({ nativeEventPath: e, animatedValueTag: t.__getNativeTag() });
                        else if ("object" == typeof t) for (var n in t) s(t[n], e.concat(n));
                    };
                return (
                    o()(n[0] && n[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`."),
                    s(n[0].nativeEvent, []),
                    null != t &&
                        a.forEach((n) => {
                            r.ZP.API.addAnimatedEventToView(t, e, n);
                        }),
                    {
                        detach() {
                            null != t &&
                                a.forEach((n) => {
                                    r.ZP.API.removeAnimatedEventFromView(t, e, n.animatedValueTag);
                                });
                        },
                    }
                );
            }
            class u {
                constructor(t, e) {
                    (this._listeners = []), (this._argMapping = t), null == e && (e = { useNativeDriver: !1 }), e.listener && this.__addListener(e.listener), (this._callListeners = this._callListeners.bind(this)), (this._attachedEvent = null), (this.__isNative = (0, r.lH)(e));
                }
                __addListener(t) {
                    this._listeners.push(t);
                }
                __removeListener(t) {
                    this._listeners = this._listeners.filter((e) => e !== t);
                }
                __attach(t, e) {
                    o()(this.__isNative, "Only native driven events need to be attached."), (this._attachedEvent = s(t, e, this._argMapping));
                }
                __detach(t, e) {
                    o()(this.__isNative, "Only native driven events need to be detached."), this._attachedEvent && this._attachedEvent.detach();
                }
                __getHandler() {
                    var t = this;
                    if (this.__isNative) return this._callListeners;
                    return function () {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        var a = (t, e, n) => {
                            if (t instanceof i.Z) "number" == typeof e && t.setValue(e);
                            else if ("object" == typeof t) for (var r in t) a(t[r], e[r], r);
                        };
                        t._argMapping.forEach((t, e) => {
                            a(t, n[e], "arg" + e);
                        }),
                            t._callListeners(...n);
                    };
                }
                _callListeners() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    this._listeners.forEach((t) => t(...e));
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f.1519703a.js.map
