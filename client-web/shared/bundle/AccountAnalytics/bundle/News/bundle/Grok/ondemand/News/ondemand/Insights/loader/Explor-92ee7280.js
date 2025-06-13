"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"],
    {
        210724: (t, r, e) => {
            e.d(r, { X: () => b });
            var n = e(202784),
                c = e(840489),
                o = e(715027),
                a = e(179376);
            function i(t) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    i(t)
                );
            }
            var u = ["x", "y", "top", "left", "width", "height", "className"];
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    l.apply(this, arguments)
                );
            }
            function s(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function f(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == i(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            function y(t, r) {
                if (null == t) return {};
                var e,
                    n,
                    c = (function (t, r) {
                        if (null == t) return {};
                        var e = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (r.indexOf(n) >= 0) continue;
                                e[n] = t[n];
                            }
                        return e;
                    })(t, r);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (e = o[n]), r.indexOf(e) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, e) && (c[e] = t[e]));
                }
                return c;
            }
            var p = function (t, r, e, n, c, o) {
                    return "M".concat(t, ",").concat(c, "v").concat(n, "M").concat(o, ",").concat(r, "h").concat(e);
                },
                b = function (t) {
                    var r = t.x,
                        e = void 0 === r ? 0 : r,
                        i = t.y,
                        b = void 0 === i ? 0 : i,
                        m = t.top,
                        v = void 0 === m ? 0 : m,
                        h = t.left,
                        g = void 0 === h ? 0 : h,
                        d = t.width,
                        O = void 0 === d ? 0 : d,
                        j = t.height,
                        w = void 0 === j ? 0 : j,
                        P = t.className,
                        x = (function (t) {
                            for (var r = 1; r < arguments.length; r++) {
                                var e = null != arguments[r] ? arguments[r] : {};
                                r % 2
                                    ? s(Object(e), !0).forEach(function (r) {
                                          f(t, r, e[r]);
                                      })
                                    : Object.getOwnPropertyDescriptors
                                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                                      : s(Object(e)).forEach(function (r) {
                                            Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                                        });
                            }
                            return t;
                        })({ x: e, y: b, top: v, left: g, width: O, height: w }, y(t, u));
                    return (0, o.hj)(e) && (0, o.hj)(b) && (0, o.hj)(O) && (0, o.hj)(w) && (0, o.hj)(v) && (0, o.hj)(g) ? n.createElement("path", l({}, (0, a.L6)(x, !0), { className: (0, c.Z)("recharts-cross", P), d: p(e, b, O, w, v, g) })) : null;
                };
        },
        562827: (t, r, e) => {
            e.d(r, { H: () => N });
            var n = e(202784),
                c = e(277694),
                o = e(197238),
                a = e(963698),
                i = e(991479),
                u = e(642977),
                l = e(798282),
                s = e(66481),
                f = e(629389),
                y = e(173729),
                p = e(563073),
                b = e(976985),
                m = e(823779),
                v = e.n(m),
                h = e(161049),
                g = e.n(h),
                d = e(840489),
                O = e(321442),
                j = e(179376),
                w = e(715027);
            function P(t) {
                return (
                    (P =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    P(t)
                );
            }
            function x() {
                return (
                    (x = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    x.apply(this, arguments)
                );
            }
            function S(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function A(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? S(Object(e), !0).forEach(function (r) {
                              E(t, r, e[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                          : S(Object(e)).forEach(function (r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                            });
                }
                return t;
            }
            function E(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != P(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != P(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == P(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            var M = { curveBasisClosed: c.Z, curveBasisOpen: o.Z, curveBasis: a.ZP, curveBumpX: i.sj, curveBumpY: i.BW, curveLinearClosed: u.Z, curveLinear: l.Z, curveMonotoneX: s.Z, curveMonotoneY: s.s, curveNatural: f.Z, curveStep: y.ZP, curveStepAfter: y.cD, curveStepBefore: y.RN },
                Z = function (t) {
                    return t.x === +t.x && t.y === +t.y;
                },
                D = function (t) {
                    return t.x;
                },
                L = function (t) {
                    return t.y;
                },
                R = function (t) {
                    var r,
                        e = t.type,
                        n = void 0 === e ? "linear" : e,
                        c = t.points,
                        o = void 0 === c ? [] : c,
                        a = t.baseLine,
                        i = t.layout,
                        u = t.connectNulls,
                        s = void 0 !== u && u,
                        f = (function (t, r) {
                            if (g()(t)) return t;
                            var e = "curve".concat(v()(t));
                            return ("curveMonotone" !== e && "curveBump" !== e) || !r ? M[e] || l.Z : M["".concat(e).concat("vertical" === r ? "Y" : "X")];
                        })(n, i),
                        y = s
                            ? o.filter(function (t) {
                                  return Z(t);
                              })
                            : o;
                    if (Array.isArray(a)) {
                        var m = s
                                ? a.filter(function (t) {
                                      return Z(t);
                                  })
                                : a,
                            h = y.map(function (t, r) {
                                return A(A({}, t), {}, { base: m[r] });
                            });
                        return (
                            (r =
                                "vertical" === i
                                    ? (0, p.Z)()
                                          .y(L)
                                          .x1(D)
                                          .x0(function (t) {
                                              return t.base.x;
                                          })
                                    : (0, p.Z)()
                                          .x(D)
                                          .y1(L)
                                          .y0(function (t) {
                                              return t.base.y;
                                          }))
                                .defined(Z)
                                .curve(f),
                            r(h)
                        );
                    }
                    return (r = "vertical" === i && (0, w.hj)(a) ? (0, p.Z)().y(L).x1(D).x0(a) : (0, w.hj)(a) ? (0, p.Z)().x(D).y1(L).y0(a) : (0, b.Z)().x(D).y(L)).defined(Z).curve(f), r(y);
                },
                N = function (t) {
                    var r = t.className,
                        e = t.points,
                        c = t.path,
                        o = t.pathRef;
                    if (!((e && e.length) || c)) return null;
                    var a = e && e.length ? R(t) : c;
                    return n.createElement("path", x({}, (0, j.L6)(t, !1), (0, O.Ym)(t), { className: (0, d.Z)("recharts-curve", r), d: a, ref: o }));
                };
        },
        847055: (t, r, e) => {
            e.d(r, { o: () => u });
            var n = e(202784),
                c = e(840489),
                o = e(321442),
                a = e(179376);
            function i() {
                return (
                    (i = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    i.apply(this, arguments)
                );
            }
            var u = function (t) {
                var r = t.cx,
                    e = t.cy,
                    u = t.r,
                    l = t.className,
                    s = (0, c.Z)("recharts-dot", l);
                return r === +r && e === +e && u === +u ? n.createElement("circle", i({}, (0, a.L6)(t, !1), (0, o.Ym)(t), { className: s, cx: r, cy: e, r: u })) : null;
            };
        },
        143624: (t, r, e) => {
            e.d(r, { A: () => h, X: () => m });
            var n = e(202784),
                c = e(840489),
                o = e(588927),
                a = e(179376);
            function i(t) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    i(t)
                );
            }
            function u() {
                return (
                    (u = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    u.apply(this, arguments)
                );
            }
            function l(t, r) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, r) {
                        var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != e) {
                            var n,
                                c,
                                o,
                                a,
                                i = [],
                                u = !0,
                                l = !1;
                            try {
                                if (((o = (e = e.call(t)).next), 0 === r)) {
                                    if (Object(e) !== e) return;
                                    u = !1;
                                } else for (; !(u = (n = o.call(e)).done) && (i.push(n.value), i.length !== r); u = !0);
                            } catch (t) {
                                (l = !0), (c = t);
                            } finally {
                                try {
                                    if (!u && null != e.return && ((a = e.return()), Object(a) !== a)) return;
                                } finally {
                                    if (l) throw c;
                                }
                            }
                            return i;
                        }
                    })(t, r) ||
                    (function (t, r) {
                        if (!t) return;
                        if ("string" == typeof t) return s(t, r);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === e && t.constructor && (e = t.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(t);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return s(t, r);
                    })(t, r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n;
            }
            function f(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function y(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? f(Object(e), !0).forEach(function (r) {
                              p(t, r, e[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                          : f(Object(e)).forEach(function (r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                            });
                }
                return t;
            }
            function p(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == i(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            var b = function (t, r, e, n, c) {
                    var o,
                        a = Math.min(Math.abs(e) / 2, Math.abs(n) / 2),
                        i = n >= 0 ? 1 : -1,
                        u = e >= 0 ? 1 : -1,
                        l = (n >= 0 && e >= 0) || (n < 0 && e < 0) ? 1 : 0;
                    if (a > 0 && c instanceof Array) {
                        for (var s = [0, 0, 0, 0], f = 0; f < 4; f++) s[f] = c[f] > a ? a : c[f];
                        (o = "M".concat(t, ",").concat(r + i * s[0])),
                            s[0] > 0 &&
                                (o += "A "
                                    .concat(s[0], ",")
                                    .concat(s[0], ",0,0,")
                                    .concat(l, ",")
                                    .concat(t + u * s[0], ",")
                                    .concat(r)),
                            (o += "L ".concat(t + e - u * s[1], ",").concat(r)),
                            s[1] > 0 &&
                                (o += "A "
                                    .concat(s[1], ",")
                                    .concat(s[1], ",0,0,")
                                    .concat(l, ",\n        ")
                                    .concat(t + e, ",")
                                    .concat(r + i * s[1])),
                            (o += "L ".concat(t + e, ",").concat(r + n - i * s[2])),
                            s[2] > 0 &&
                                (o += "A "
                                    .concat(s[2], ",")
                                    .concat(s[2], ",0,0,")
                                    .concat(l, ",\n        ")
                                    .concat(t + e - u * s[2], ",")
                                    .concat(r + n)),
                            (o += "L ".concat(t + u * s[3], ",").concat(r + n)),
                            s[3] > 0 &&
                                (o += "A "
                                    .concat(s[3], ",")
                                    .concat(s[3], ",0,0,")
                                    .concat(l, ",\n        ")
                                    .concat(t, ",")
                                    .concat(r + n - i * s[3])),
                            (o += "Z");
                    } else if (a > 0 && c === +c && c > 0) {
                        var y = Math.min(a, c);
                        o = "M "
                            .concat(t, ",")
                            .concat(r + i * y, "\n            A ")
                            .concat(y, ",")
                            .concat(y, ",0,0,")
                            .concat(l, ",")
                            .concat(t + u * y, ",")
                            .concat(r, "\n            L ")
                            .concat(t + e - u * y, ",")
                            .concat(r, "\n            A ")
                            .concat(y, ",")
                            .concat(y, ",0,0,")
                            .concat(l, ",")
                            .concat(t + e, ",")
                            .concat(r + i * y, "\n            L ")
                            .concat(t + e, ",")
                            .concat(r + n - i * y, "\n            A ")
                            .concat(y, ",")
                            .concat(y, ",0,0,")
                            .concat(l, ",")
                            .concat(t + e - u * y, ",")
                            .concat(r + n, "\n            L ")
                            .concat(t + u * y, ",")
                            .concat(r + n, "\n            A ")
                            .concat(y, ",")
                            .concat(y, ",0,0,")
                            .concat(l, ",")
                            .concat(t, ",")
                            .concat(r + n - i * y, " Z");
                    } else o = "M ".concat(t, ",").concat(r, " h ").concat(e, " v ").concat(n, " h ").concat(-e, " Z");
                    return o;
                },
                m = function (t, r) {
                    if (!t || !r) return !1;
                    var e = t.x,
                        n = t.y,
                        c = r.x,
                        o = r.y,
                        a = r.width,
                        i = r.height;
                    if (Math.abs(a) > 0 && Math.abs(i) > 0) {
                        var u = Math.min(c, c + a),
                            l = Math.max(c, c + a),
                            s = Math.min(o, o + i),
                            f = Math.max(o, o + i);
                        return e >= u && e <= l && n >= s && n <= f;
                    }
                    return !1;
                },
                v = { x: 0, y: 0, width: 0, height: 0, radius: 0, isAnimationActive: !1, isUpdateAnimationActive: !1, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" },
                h = function (t) {
                    var r = y(y({}, v), t),
                        e = (0, n.useRef)(),
                        i = l((0, n.useState)(-1), 2),
                        s = i[0],
                        f = i[1];
                    (0, n.useEffect)(function () {
                        if (e.current && e.current.getTotalLength)
                            try {
                                var t = e.current.getTotalLength();
                                t && f(t);
                            } catch (t) {}
                    }, []);
                    var p = r.x,
                        m = r.y,
                        h = r.width,
                        g = r.height,
                        d = r.radius,
                        O = r.className,
                        j = r.animationEasing,
                        w = r.animationDuration,
                        P = r.animationBegin,
                        x = r.isAnimationActive,
                        S = r.isUpdateAnimationActive;
                    if (p !== +p || m !== +m || h !== +h || g !== +g || 0 === h || 0 === g) return null;
                    var A = (0, c.Z)("recharts-rectangle", O);
                    return S
                        ? n.createElement(o.ZP, { canBegin: s > 0, from: { width: h, height: g, x: p, y: m }, to: { width: h, height: g, x: p, y: m }, duration: w, animationEasing: j, isActive: S }, function (t) {
                              var c = t.width,
                                  i = t.height,
                                  l = t.x,
                                  f = t.y;
                              return n.createElement(o.ZP, { canBegin: s > 0, from: "0px ".concat(-1 === s ? 1 : s, "px"), to: "".concat(s, "px 0px"), attributeName: "strokeDasharray", begin: P, duration: w, isActive: x, easing: j }, n.createElement("path", u({}, (0, a.L6)(r, !0), { className: A, d: b(l, f, c, i, d), ref: e })));
                          })
                        : n.createElement("path", u({}, (0, a.L6)(r, !0), { className: A, d: b(p, m, h, g, d) }));
                };
        },
        121844: (t, r, e) => {
            e.d(r, { L: () => v });
            var n = e(202784),
                c = e(840489),
                o = e(179376),
                a = e(122089),
                i = e(715027);
            function u(t) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    u(t)
                );
            }
            function l() {
                return (
                    (l = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    l.apply(this, arguments)
                );
            }
            function s(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function f(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? s(Object(e), !0).forEach(function (r) {
                              y(t, r, e[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                          : s(Object(e)).forEach(function (r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                            });
                }
                return t;
            }
            function y(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != u(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == u(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            var p = function (t) {
                    var r = t.cx,
                        e = t.cy,
                        n = t.radius,
                        c = t.angle,
                        o = t.sign,
                        i = t.isExternal,
                        u = t.cornerRadius,
                        l = t.cornerIsExternal,
                        s = u * (i ? 1 : -1) + n,
                        f = Math.asin(u / s) / a.Wk,
                        y = l ? c : c + o * f,
                        p = l ? c - o * f : c;
                    return { center: (0, a.op)(r, e, s, y), circleTangency: (0, a.op)(r, e, n, y), lineTangency: (0, a.op)(r, e, s * Math.cos(f * a.Wk), p), theta: f };
                },
                b = function (t) {
                    var r = t.cx,
                        e = t.cy,
                        n = t.innerRadius,
                        c = t.outerRadius,
                        o = t.startAngle,
                        u = (function (t, r) {
                            return (0, i.uY)(r - t) * Math.min(Math.abs(r - t), 359.999);
                        })(o, t.endAngle),
                        l = o + u,
                        s = (0, a.op)(r, e, c, o),
                        f = (0, a.op)(r, e, c, l),
                        y = "M "
                            .concat(s.x, ",")
                            .concat(s.y, "\n    A ")
                            .concat(c, ",")
                            .concat(c, ",0,\n    ")
                            .concat(+(Math.abs(u) > 180), ",")
                            .concat(+(o > l), ",\n    ")
                            .concat(f.x, ",")
                            .concat(f.y, "\n  ");
                    if (n > 0) {
                        var p = (0, a.op)(r, e, n, o),
                            b = (0, a.op)(r, e, n, l);
                        y += "L "
                            .concat(b.x, ",")
                            .concat(b.y, "\n            A ")
                            .concat(n, ",")
                            .concat(n, ",0,\n            ")
                            .concat(+(Math.abs(u) > 180), ",")
                            .concat(+(o <= l), ",\n            ")
                            .concat(p.x, ",")
                            .concat(p.y, " Z");
                    } else y += "L ".concat(r, ",").concat(e, " Z");
                    return y;
                },
                m = { cx: 0, cy: 0, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 0, cornerRadius: 0, forceCornerRadius: !1, cornerIsExternal: !1 },
                v = function (t) {
                    var r = f(f({}, m), t),
                        e = r.cx,
                        a = r.cy,
                        u = r.innerRadius,
                        s = r.outerRadius,
                        y = r.cornerRadius,
                        v = r.forceCornerRadius,
                        h = r.cornerIsExternal,
                        g = r.startAngle,
                        d = r.endAngle,
                        O = r.className;
                    if (s < u || g === d) return null;
                    var j,
                        w = (0, c.Z)("recharts-sector", O),
                        P = s - u,
                        x = (0, i.h1)(y, P, 0, !0);
                    return (
                        (j =
                            x > 0 && Math.abs(g - d) < 360
                                ? (function (t) {
                                      var r = t.cx,
                                          e = t.cy,
                                          n = t.innerRadius,
                                          c = t.outerRadius,
                                          o = t.cornerRadius,
                                          a = t.forceCornerRadius,
                                          u = t.cornerIsExternal,
                                          l = t.startAngle,
                                          s = t.endAngle,
                                          f = (0, i.uY)(s - l),
                                          y = p({ cx: r, cy: e, radius: c, angle: l, sign: f, cornerRadius: o, cornerIsExternal: u }),
                                          m = y.circleTangency,
                                          v = y.lineTangency,
                                          h = y.theta,
                                          g = p({ cx: r, cy: e, radius: c, angle: s, sign: -f, cornerRadius: o, cornerIsExternal: u }),
                                          d = g.circleTangency,
                                          O = g.lineTangency,
                                          j = g.theta,
                                          w = u ? Math.abs(l - s) : Math.abs(l - s) - h - j;
                                      if (w < 0)
                                          return a
                                              ? "M "
                                                    .concat(v.x, ",")
                                                    .concat(v.y, "\n        a")
                                                    .concat(o, ",")
                                                    .concat(o, ",0,0,1,")
                                                    .concat(2 * o, ",0\n        a")
                                                    .concat(o, ",")
                                                    .concat(o, ",0,0,1,")
                                                    .concat(2 * -o, ",0\n      ")
                                              : b({ cx: r, cy: e, innerRadius: n, outerRadius: c, startAngle: l, endAngle: s });
                                      var P = "M "
                                          .concat(v.x, ",")
                                          .concat(v.y, "\n    A")
                                          .concat(o, ",")
                                          .concat(o, ",0,0,")
                                          .concat(+(f < 0), ",")
                                          .concat(m.x, ",")
                                          .concat(m.y, "\n    A")
                                          .concat(c, ",")
                                          .concat(c, ",0,")
                                          .concat(+(w > 180), ",")
                                          .concat(+(f < 0), ",")
                                          .concat(d.x, ",")
                                          .concat(d.y, "\n    A")
                                          .concat(o, ",")
                                          .concat(o, ",0,0,")
                                          .concat(+(f < 0), ",")
                                          .concat(O.x, ",")
                                          .concat(O.y, "\n  ");
                                      if (n > 0) {
                                          var x = p({ cx: r, cy: e, radius: n, angle: l, sign: f, isExternal: !0, cornerRadius: o, cornerIsExternal: u }),
                                              S = x.circleTangency,
                                              A = x.lineTangency,
                                              E = x.theta,
                                              M = p({ cx: r, cy: e, radius: n, angle: s, sign: -f, isExternal: !0, cornerRadius: o, cornerIsExternal: u }),
                                              Z = M.circleTangency,
                                              D = M.lineTangency,
                                              L = M.theta,
                                              R = u ? Math.abs(l - s) : Math.abs(l - s) - E - L;
                                          if (R < 0 && 0 === o) return "".concat(P, "L").concat(r, ",").concat(e, "Z");
                                          P += "L"
                                              .concat(D.x, ",")
                                              .concat(D.y, "\n      A")
                                              .concat(o, ",")
                                              .concat(o, ",0,0,")
                                              .concat(+(f < 0), ",")
                                              .concat(Z.x, ",")
                                              .concat(Z.y, "\n      A")
                                              .concat(n, ",")
                                              .concat(n, ",0,")
                                              .concat(+(R > 180), ",")
                                              .concat(+(f > 0), ",")
                                              .concat(S.x, ",")
                                              .concat(S.y, "\n      A")
                                              .concat(o, ",")
                                              .concat(o, ",0,0,")
                                              .concat(+(f < 0), ",")
                                              .concat(A.x, ",")
                                              .concat(A.y, "Z");
                                      } else P += "L".concat(r, ",").concat(e, "Z");
                                      return P;
                                  })({ cx: e, cy: a, innerRadius: u, outerRadius: s, cornerRadius: Math.min(x, P / 2), forceCornerRadius: v, cornerIsExternal: h, startAngle: g, endAngle: d })
                                : b({ cx: e, cy: a, innerRadius: u, outerRadius: s, startAngle: g, endAngle: d })),
                        n.createElement("path", l({}, (0, o.L6)(r, !0), { className: w, d: j, role: "img" }))
                    );
                };
        },
        859947: (t, r, e) => {
            e.d(r, { v: () => S });
            var n = e(202784),
                c = e(823779),
                o = e.n(c),
                a = e(190281),
                i = e(676709),
                u = e(325019),
                l = e(407609),
                s = e(165174),
                f = e(464610),
                y = e(449012),
                p = e(826873),
                b = e(840489),
                m = e(179376);
            function v(t) {
                return (
                    (v =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    v(t)
                );
            }
            var h = ["type", "size", "sizeType"];
            function g() {
                return (
                    (g = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    g.apply(this, arguments)
                );
            }
            function d(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function O(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? d(Object(e), !0).forEach(function (r) {
                              j(t, r, e[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                          : d(Object(e)).forEach(function (r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                            });
                }
                return t;
            }
            function j(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != v(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != v(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == v(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            function w(t, r) {
                if (null == t) return {};
                var e,
                    n,
                    c = (function (t, r) {
                        if (null == t) return {};
                        var e = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (r.indexOf(n) >= 0) continue;
                                e[n] = t[n];
                            }
                        return e;
                    })(t, r);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (e = o[n]), r.indexOf(e) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, e) && (c[e] = t[e]));
                }
                return c;
            }
            var P = { symbolCircle: a.Z, symbolCross: i.Z, symbolDiamond: u.Z, symbolSquare: l.Z, symbolStar: s.Z, symbolTriangle: f.Z, symbolWye: y.Z },
                x = Math.PI / 180,
                S = function (t) {
                    var r,
                        e,
                        c = t.type,
                        i = void 0 === c ? "circle" : c,
                        u = t.size,
                        l = void 0 === u ? 64 : u,
                        s = t.sizeType,
                        f = void 0 === s ? "area" : s,
                        y = O(O({}, w(t, h)), {}, { type: i, size: l, sizeType: f }),
                        v = y.className,
                        d = y.cx,
                        j = y.cy,
                        S = (0, m.L6)(y, !0);
                    return d === +d && j === +j && l === +l
                        ? n.createElement(
                              "path",
                              g({}, S, {
                                  className: (0, b.Z)("recharts-symbols", v),
                                  transform: "translate(".concat(d, ", ").concat(j, ")"),
                                  d:
                                      ((r = (function (t) {
                                          var r = "symbol".concat(o()(t));
                                          return P[r] || a.Z;
                                      })(i)),
                                      (e = (0, p.ZP)()
                                          .type(r)
                                          .size(
                                              (function (t, r, e) {
                                                  if ("area" === r) return t;
                                                  switch (e) {
                                                      case "cross":
                                                          return (5 * t * t) / 9;
                                                      case "diamond":
                                                          return (0.5 * t * t) / Math.sqrt(3);
                                                      case "square":
                                                          return t * t;
                                                      case "star":
                                                          var n = 18 * x;
                                                          return 1.25 * t * t * (Math.tan(n) - Math.tan(2 * n) * Math.pow(Math.tan(n), 2));
                                                      case "triangle":
                                                          return (Math.sqrt(3) * t * t) / 4;
                                                      case "wye":
                                                          return ((21 - 10 * Math.sqrt(3)) * t * t) / 8;
                                                      default:
                                                          return (Math.PI * t * t) / 4;
                                                  }
                                              })(l, f, i),
                                          )),
                                      e()),
                              }),
                          )
                        : null;
                };
            S.registerSymbol = function (t, r) {
                P["symbol".concat(o()(t))] = r;
            };
        },
        159067: (t, r, e) => {
            e.d(r, { Z: () => v });
            var n = e(202784),
                c = e(840489),
                o = e(588927),
                a = e(179376);
            function i(t) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    i(t)
                );
            }
            function u() {
                return (
                    (u = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var r = 1; r < arguments.length; r++) {
                                  var e = arguments[r];
                                  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                              }
                              return t;
                          }),
                    u.apply(this, arguments)
                );
            }
            function l(t, r) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, r) {
                        var e = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != e) {
                            var n,
                                c,
                                o,
                                a,
                                i = [],
                                u = !0,
                                l = !1;
                            try {
                                if (((o = (e = e.call(t)).next), 0 === r)) {
                                    if (Object(e) !== e) return;
                                    u = !1;
                                } else for (; !(u = (n = o.call(e)).done) && (i.push(n.value), i.length !== r); u = !0);
                            } catch (t) {
                                (l = !0), (c = t);
                            } finally {
                                try {
                                    if (!u && null != e.return && ((a = e.return()), Object(a) !== a)) return;
                                } finally {
                                    if (l) throw c;
                                }
                            }
                            return i;
                        }
                    })(t, r) ||
                    (function (t, r) {
                        if (!t) return;
                        if ("string" == typeof t) return s(t, r);
                        var e = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === e && t.constructor && (e = t.constructor.name);
                        if ("Map" === e || "Set" === e) return Array.from(t);
                        if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return s(t, r);
                    })(t, r) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function s(t, r) {
                (null == r || r > t.length) && (r = t.length);
                for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e];
                return n;
            }
            function f(t, r) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    r &&
                        (n = n.filter(function (r) {
                            return Object.getOwnPropertyDescriptor(t, r).enumerable;
                        })),
                        e.push.apply(e, n);
                }
                return e;
            }
            function y(t) {
                for (var r = 1; r < arguments.length; r++) {
                    var e = null != arguments[r] ? arguments[r] : {};
                    r % 2
                        ? f(Object(e), !0).forEach(function (r) {
                              p(t, r, e[r]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
                          : f(Object(e)).forEach(function (r) {
                                Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(e, r));
                            });
                }
                return t;
            }
            function p(t, r, e) {
                var n;
                return (
                    (n = (function (t, r) {
                        if ("object" != i(t) || !t) return t;
                        var e = t[Symbol.toPrimitive];
                        if (void 0 !== e) {
                            var n = e.call(t, r || "default");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === r ? String : Number)(t);
                    })(r, "string")),
                    (r = "symbol" == i(n) ? n : n + "") in t ? Object.defineProperty(t, r, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[r] = e),
                    t
                );
            }
            var b = function (t, r, e, n, c) {
                    var o,
                        a = e - n;
                    return (o = "M ".concat(t, ",").concat(r)), (o += "L ".concat(t + e, ",").concat(r)), (o += "L ".concat(t + e - a / 2, ",").concat(r + c)), (o += "L ".concat(t + e - a / 2 - n, ",").concat(r + c)), (o += "L ".concat(t, ",").concat(r, " Z"));
                },
                m = { x: 0, y: 0, upperWidth: 0, lowerWidth: 0, height: 0, isUpdateAnimationActive: !1, animationBegin: 0, animationDuration: 1500, animationEasing: "ease" },
                v = function (t) {
                    var r = y(y({}, m), t),
                        e = (0, n.useRef)(),
                        i = l((0, n.useState)(-1), 2),
                        s = i[0],
                        f = i[1];
                    (0, n.useEffect)(function () {
                        if (e.current && e.current.getTotalLength)
                            try {
                                var t = e.current.getTotalLength();
                                t && f(t);
                            } catch (t) {}
                    }, []);
                    var p = r.x,
                        v = r.y,
                        h = r.upperWidth,
                        g = r.lowerWidth,
                        d = r.height,
                        O = r.className,
                        j = r.animationEasing,
                        w = r.animationDuration,
                        P = r.animationBegin,
                        x = r.isUpdateAnimationActive;
                    if (p !== +p || v !== +v || h !== +h || g !== +g || d !== +d || (0 === h && 0 === g) || 0 === d) return null;
                    var S = (0, c.Z)("recharts-trapezoid", O);
                    return x
                        ? n.createElement(o.ZP, { canBegin: s > 0, from: { upperWidth: 0, lowerWidth: 0, height: d, x: p, y: v }, to: { upperWidth: h, lowerWidth: g, height: d, x: p, y: v }, duration: w, animationEasing: j, isActive: x }, function (t) {
                              var c = t.upperWidth,
                                  i = t.lowerWidth,
                                  l = t.height,
                                  f = t.x,
                                  y = t.y;
                              return n.createElement(o.ZP, { canBegin: s > 0, from: "0px ".concat(-1 === s ? 1 : s, "px"), to: "".concat(s, "px 0px"), attributeName: "strokeDasharray", begin: P, duration: w, easing: j }, n.createElement("path", u({}, (0, a.L6)(r, !0), { className: S, d: b(f, y, c, i, l), ref: e })));
                          })
                        : n.createElement("g", null, n.createElement("path", u({}, (0, a.L6)(r, !0), { className: S, d: b(p, v, h, g, d) })));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280.65dff1fa.js.map
