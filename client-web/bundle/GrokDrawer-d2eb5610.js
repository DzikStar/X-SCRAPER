(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GrokDrawer-d2eb5610", "shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"],
    {
        730895: (t, e, n) => {
            "use strict";
            var r = n(821176);
            t.exports = function () {
                var t = r(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        890103: (t, e, n) => {
            "use strict";
            var r = n(609859),
                i = n(807400),
                a = n(396616),
                o = n(730895),
                s = n(824229),
                u = r.RegExp,
                l = u.prototype;
            i &&
                s(function () {
                    var t = !0;
                    try {
                        u(".", "d");
                    } catch (e) {
                        t = !1;
                    }
                    var e = {},
                        n = "",
                        r = t ? "dgimsy" : "gimsy",
                        i = function (t, r) {
                            Object.defineProperty(e, t, {
                                get: function () {
                                    return (n += r), !0;
                                },
                            });
                        },
                        a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var o in (t && (a.hasIndices = "d"), a)) i(o, a[o]);
                    return Object.getOwnPropertyDescriptor(l, "flags").get.call(e) !== r || n !== r;
                }) &&
                a(l, "flags", { configurable: !0, get: o });
        },
        936386: (t) => {
            function e(t, e, n) {
                var r, i, a, o, s;
                function u() {
                    var l = Date.now() - o;
                    l < e && l >= 0 ? (r = setTimeout(u, e - l)) : ((r = null), n || ((s = t.apply(a, i)), (a = i = null)));
                }
                null == e && (e = 100);
                var l = function () {
                    (a = this), (i = arguments), (o = Date.now());
                    var l = n && !r;
                    return r || (r = setTimeout(u, e)), l && ((s = t.apply(a, i)), (a = i = null)), s;
                };
                return (
                    (l.clear = function () {
                        r && (clearTimeout(r), (r = null));
                    }),
                    (l.flush = function () {
                        r && ((s = t.apply(a, i)), (a = i = null), clearTimeout(r), (r = null));
                    }),
                    l
                );
            }
            (e.debounce = e), (t.exports = e);
        },
        744610: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => Q });
            var r = n(133028),
                i = n(33229),
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
                g = n(668637),
                Z = n(64650),
                m = n(211804),
                _ = n(104377),
                b = n(794167),
                y = n(588016),
                w = n(377715),
                E = n(900299),
                N = n(77593),
                D = n(521858),
                C = n(409140),
                k = n(411193),
                A = function (t, e) {
                    return t && e.onComplete
                        ? function () {
                              e.onComplete && e.onComplete(...arguments), t && t(...arguments);
                          }
                        : t || e.onComplete;
                },
                L = function (t, e, n) {
                    if (t instanceof w.Z) {
                        var i = (0, r.Z)({}, e),
                            a = (0, r.Z)({}, e);
                        for (var o in e) {
                            var s = e[o],
                                u = s.x,
                                l = s.y;
                            void 0 !== u && void 0 !== l && ((i[o] = u), (a[o] = l));
                        }
                        var c = n(t.x, i),
                            v = n(t.y, a);
                        return x([c, v], { stopTogether: !1 });
                    }
                    if (t instanceof k.Z) {
                        var f = (0, r.Z)({}, e),
                            d = (0, r.Z)({}, e),
                            h = (0, r.Z)({}, e),
                            p = (0, r.Z)({}, e);
                        for (var g in e) {
                            var Z = e[g],
                                m = Z.r,
                                _ = Z.g,
                                b = Z.b,
                                y = Z.a;
                            void 0 !== m && void 0 !== _ && void 0 !== b && void 0 !== y && ((f[g] = m), (d[g] = _), (h[g] = b), (p[g] = y));
                        }
                        var E = n(t.r, f),
                            N = n(t.g, d),
                            D = n(t.b, h),
                            C = n(t.a, p);
                        return x([E, N, D, C], { stopTogether: !1 });
                    }
                    return null;
                },
                V = function t(e, n) {
                    var i = function (t, e, n) {
                        n = A(n, e);
                        var r = t,
                            i = e;
                        r.stopTracking(), e.toValue instanceof m.Z ? r.track(new b.Z(r, e.toValue, D.Z, i, n)) : r.animate(new D.Z(i), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                i(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, r.Z)((0, r.Z)({}, n), {}, { iterations: t });
                                i(e, a);
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
                                : t[e].start(function r(i) {
                                      i.finished && ++e !== t.length ? t[e].start(r) : n && n(i);
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
                x = function (t, e) {
                    var n = 0,
                        r = {},
                        i = !(e && !1 === e.stopTogether),
                        a = {
                            start: function (e) {
                                n !== t.length
                                    ? t.forEach((o, s) => {
                                          var u = function (o) {
                                              if (((r[s] = !0), ++n === t.length)) return (n = 0), void (e && e(o));
                                              !o.finished && i && a.stop();
                                          };
                                          o ? o.start(u) : u({ finished: !0 });
                                      })
                                    : e && e({ finished: !0 });
                            },
                            stop: function () {
                                t.forEach((t, e) => {
                                    !r[e] && t.stop(), (r[e] = !0);
                                });
                            },
                            reset: function () {
                                t.forEach((t, e) => {
                                    t.reset(), (r[e] = !1), (n = 0);
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
                    return V(new y.Z(0), { toValue: 0, delay: t, duration: 0, useNativeDriver: !1 });
                };
            const j = {
                Value: y.Z,
                ValueXY: w.Z,
                Color: k.Z,
                Interpolation: p.Z,
                Node: m.Z,
                decay: function t(e, n) {
                    var i = function (t, e, n) {
                        n = A(n, e);
                        var r = t,
                            i = e;
                        r.stopTracking(), r.animate(new E.Z(i), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                i(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, r.Z)((0, r.Z)({}, n), {}, { iterations: t });
                                i(e, a);
                            },
                            _isUsingNativeDriver: function () {
                                return n.useNativeDriver || !1;
                            },
                        }
                    );
                },
                timing: V,
                spring: function t(e, n) {
                    var i = function (t, e, n) {
                        n = A(n, e);
                        var r = t,
                            i = e;
                        r.stopTracking(), e.toValue instanceof m.Z ? r.track(new b.Z(r, e.toValue, N.Z, i, n)) : r.animate(new N.Z(i), n);
                    };
                    return (
                        L(e, n, t) || {
                            start: function (t) {
                                i(e, n, t);
                            },
                            stop: function () {
                                e.stopAnimation();
                            },
                            reset: function () {
                                e.resetAnimation();
                            },
                            _startNativeLoop: function (t) {
                                var a = (0, r.Z)((0, r.Z)({}, n), {}, { iterations: t });
                                i(e, a);
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
                    return new _.Z(t, e);
                },
                divide: function (t, e) {
                    return new h.Z(t, e);
                },
                multiply: function (t, e) {
                    return new Z.Z(t, e);
                },
                modulo: function (t, e) {
                    return new g.Z(t, e);
                },
                diffClamp: function (t, e, n) {
                    return new d.Z(t, e, n);
                },
                delay: I,
                sequence: T,
                parallel: x,
                stagger: function (t, e) {
                    return x(e.map((e, n) => T([I(t * n), e])));
                },
                loop: function (t, e) {
                    var n = void 0 === e ? {} : e,
                        r = n.iterations,
                        i = void 0 === r ? -1 : r,
                        a = n.resetBeforeIteration,
                        o = void 0 === a || a,
                        s = !1,
                        u = 0;
                    return {
                        start: function (e) {
                            t && 0 !== i
                                ? t._isUsingNativeDriver()
                                    ? t._startNativeLoop(i)
                                    : (function n(r) {
                                          void 0 === r && (r = { finished: !0 }), s || u === i || !1 === r.finished ? e && e(r) : (u++, o && t.reset(), t.start(n));
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
                createAnimatedComponent: C.Z,
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
            var F = !1;
            function S(t) {
                return (e) => {
                    var n =
                        null == e
                            ? e
                            : function () {
                                  if (!F) {
                                      F = !0;
                                      try {
                                          e(...arguments);
                                      } finally {
                                          F = !1;
                                      }
                                  }
                              };
                    t(n);
                };
            }
            var U = { start: () => {}, stop: () => {}, reset: () => {}, _startNativeLoop: () => {}, _isUsingNativeDriver: () => !1 },
                P = (t) =>
                    (0, r.Z)(
                        (0, r.Z)({}, U),
                        {},
                        {
                            start: S((e) => {
                                t.forEach((t) => t.start()), null == e || e({ finished: !0 });
                            }),
                        },
                    );
            const O = {
                Value: y.Z,
                ValueXY: w.Z,
                Color: k.Z,
                Interpolation: p.Z,
                Node: m.Z,
                decay: function (t, e) {
                    return U;
                },
                timing: function (t, e) {
                    var n = t;
                    return (0, r.Z)(
                        (0, r.Z)({}, U),
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
                    return (0, r.Z)(
                        (0, r.Z)({}, U),
                        {},
                        {
                            start: S((t) => {
                                n.setValue(e.toValue), null == t || t({ finished: !0 });
                            }),
                        },
                    );
                },
                add: j.add,
                subtract: j.subtract,
                divide: j.divide,
                multiply: j.multiply,
                modulo: j.modulo,
                diffClamp: j.diffClamp,
                delay: function (t) {
                    return U;
                },
                sequence: function (t) {
                    return P(t);
                },
                parallel: function (t, e) {
                    return P(t);
                },
                stagger: function (t, e) {
                    return P(e);
                },
                loop: function (t, e) {
                    (void 0 === e ? {} : e).iterations;
                    return U;
                },
                event: j.event,
                createAnimatedComponent: C.Z,
                attachNativeEvent: v.I,
                forkEvent: j.forkEvent,
                unforkEvent: j.unforkEvent,
                Event: v.Q,
            };
            var M = i.Z.isTesting ? O : j;
            const Q = (0, r.Z)({ FlatList: a.Z, Image: o.Z, ScrollView: s.Z, SectionList: u.Z, Text: l.Z, View: c.Z }, M);
        },
        137937: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => r });
            const r = n(169758).Z;
        },
        151624: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => r });
            const r = n(454479).Z;
        },
        472302: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => r });
            const r = n(975064).Z;
        },
        372612: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => b });
            var r = n(133028),
                i = n(807896),
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
                g = "#D5D5D5",
                Z = "#BDBDBD",
                m = o.forwardRef((t, e) => {
                    var n = t["aria-label"],
                        r = t.accessibilityLabel,
                        u = t.activeThumbColor,
                        m = t.activeTrackColor,
                        b = t.disabled,
                        y = void 0 !== b && b,
                        w = t.onValueChange,
                        E = t.style,
                        N = void 0 === E ? d : E,
                        D = t.thumbColor,
                        C = t.trackColor,
                        k = t.value,
                        A = void 0 !== k && k,
                        L = (0, a.Z)(t, f),
                        V = o.useRef(null);
                    function T(t) {
                        var e = "focus" === t.nativeEvent.type ? p : h;
                        null != V.current && (V.current.style.boxShadow = e);
                    }
                    var x = c.Z.flatten(N),
                        I = x.height,
                        j = x.width,
                        F = I || "20px",
                        S = l(F, 2),
                        U = j > S ? j : S,
                        P = l(F, 0.5),
                        O = !0 === A ? (null != C && "object" == typeof C ? C.true : null != m ? m : "#A3D3CF") : null != C && "object" == typeof C ? C.false : null != C ? C : "#939393",
                        M = A ? (null != u ? u : "#009688") : null != D ? D : "#FAFAFA",
                        Q = F,
                        B = Q,
                        R = [_.root, N, y && _.cursorDefault, { height: F, width: U }],
                        q = !0 === A ? (("string" == typeof m && null != m) || ("object" == typeof C && null != C && C.true) ? O : g) : ("string" == typeof C && null != C) || ("object" == typeof C && null != C && C.false) ? O : g,
                        H = !0 === A ? (null == u ? Z : M) : null == D ? Z : M,
                        X = [_.track, { backgroundColor: y ? q : O, borderRadius: P }],
                        Y = [_.thumb, A && _.thumbActive, { backgroundColor: y ? H : M, height: Q, marginStart: A ? l(B, -1) : 0, width: B }],
                        G = (0, s.Z)("input", {
                            "aria-label": n || r,
                            checked: A,
                            disabled: y,
                            onBlur: T,
                            onChange: function (t) {
                                null != w && w(t.nativeEvent.target.checked);
                            },
                            onFocus: T,
                            ref: e,
                            style: [_.nativeControl, _.cursorInherit],
                            type: "checkbox",
                            role: "switch",
                        });
                    return o.createElement(v.Z, (0, i.Z)({}, L, { style: R }), o.createElement(v.Z, { style: X }), o.createElement(v.Z, { ref: V, style: Y }), G);
                });
            m.displayName = "Switch";
            var _ = c.Z.create({ root: { cursor: "pointer", userSelect: "none" }, cursorDefault: { cursor: "default" }, cursorInherit: { cursor: "inherit" }, track: (0, r.Z)((0, r.Z)({ forcedColorAdjust: "none" }, c.Z.absoluteFillObject), {}, { height: "70%", margin: "auto", transitionDuration: "0.1s", width: "100%" }), thumb: { forcedColorAdjust: "none", alignSelf: "flex-start", borderRadius: "100%", boxShadow: h, start: "0%", transform: "translateZ(0)", transitionDuration: "0.1s" }, thumbActive: { insetInlineStart: "100%" }, nativeControl: (0, r.Z)((0, r.Z)({}, c.Z.absoluteFillObject), {}, { height: "100%", margin: 0, appearance: "none", padding: 0, width: "100%" }) });
            const b = m;
        },
        265937: (t, e, n) => {
            "use strict";
            n.d(e, { I: () => s, Q: () => u });
            var r = n(588016),
                i = n(889441),
                a = n(614983),
                o = n.n(a);
            function s(t, e, n) {
                var a = [],
                    s = (t, e) => {
                        if (t instanceof r.Z) t.__makeNative(), a.push({ nativeEventPath: e, animatedValueTag: t.__getNativeTag() });
                        else if ("object" == typeof t) for (var n in t) s(t[n], e.concat(n));
                    };
                return (
                    o()(n[0] && n[0].nativeEvent, "Native driven events only support animated values contained inside `nativeEvent`."),
                    s(n[0].nativeEvent, []),
                    null != t &&
                        a.forEach((n) => {
                            i.ZP.API.addAnimatedEventToView(t, e, n);
                        }),
                    {
                        detach() {
                            null != t &&
                                a.forEach((n) => {
                                    i.ZP.API.removeAnimatedEventFromView(t, e, n.animatedValueTag);
                                });
                        },
                    }
                );
            }
            class u {
                constructor(t, e) {
                    (this._listeners = []), (this._argMapping = t), null == e && (e = { useNativeDriver: !1 }), e.listener && this.__addListener(e.listener), (this._callListeners = this._callListeners.bind(this)), (this._attachedEvent = null), (this.__isNative = (0, i.lH)(e));
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
                        for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                        var a = (t, e, n) => {
                            if (t instanceof r.Z) "number" == typeof e && t.setValue(e);
                            else if ("object" == typeof t) for (var i in t) a(t[i], e[i], i);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GrokDrawer-d2eb5610.f6e1038a.js.map
