"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-b08eb7a4"],
    {
        481224: (t, e, r) => {
            r.d(e, { _: () => k });
            var n = r(202784),
                o = r(301842),
                i = r.n(o),
                a = r(161049),
                c = r.n(a),
                l = r(429259),
                u = r.n(l),
                s = r(840489),
                f = r(707670),
                h = r(179376),
                d = r(715027),
                p = r(122089);
            function y(t) {
                return (
                    (y =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    y(t)
                );
            }
            var b = ["offset"];
            function v(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return m(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return m(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function g(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            function w(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? w(Object(r), !0).forEach(function (e) {
                              x(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : w(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function x(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != y(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != y(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == y(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function j() {
                return (
                    (j = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    j.apply(this, arguments)
                );
            }
            var P = function (t) {
                    var e = t.value,
                        r = t.formatter,
                        n = i()(t.children) ? e : t.children;
                    return c()(r) ? r(n) : n;
                },
                B = function (t, e, r) {
                    var o,
                        a,
                        c = t.position,
                        l = t.viewBox,
                        u = t.offset,
                        f = t.className,
                        h = l,
                        y = h.cx,
                        b = h.cy,
                        v = h.innerRadius,
                        m = h.outerRadius,
                        g = h.startAngle,
                        w = h.endAngle,
                        O = h.clockWise,
                        x = (v + m) / 2,
                        P = (function (t, e) {
                            return (0, d.uY)(e - t) * Math.min(Math.abs(e - t), 360);
                        })(g, w),
                        B = P >= 0 ? 1 : -1;
                    "insideStart" === c ? ((o = g + B * u), (a = O)) : "insideEnd" === c ? ((o = w - B * u), (a = !O)) : "end" === c && ((o = w + B * u), (a = O)), (a = P <= 0 ? a : !a);
                    var A = (0, p.op)(y, b, x, o),
                        S = (0, p.op)(y, b, x, o + 359 * (a ? 1 : -1)),
                        E = "M"
                            .concat(A.x, ",")
                            .concat(A.y, "\n    A")
                            .concat(x, ",")
                            .concat(x, ",0,1,")
                            .concat(a ? 0 : 1, ",\n    ")
                            .concat(S.x, ",")
                            .concat(S.y),
                        k = i()(t.id) ? (0, d.EL)("recharts-radial-line-") : t.id;
                    return n.createElement("text", j({}, r, { dominantBaseline: "central", className: (0, s.Z)("recharts-radial-bar-label", f) }), n.createElement("defs", null, n.createElement("path", { id: k, d: E })), n.createElement("textPath", { xlinkHref: "#".concat(k) }, e));
                },
                A = function (t) {
                    var e = t.viewBox,
                        r = t.offset,
                        n = t.position,
                        o = e,
                        i = o.cx,
                        a = o.cy,
                        c = o.innerRadius,
                        l = o.outerRadius,
                        u = (o.startAngle + o.endAngle) / 2;
                    if ("outside" === n) {
                        var s = (0, p.op)(i, a, l + r, u),
                            f = s.x;
                        return { x: f, y: s.y, textAnchor: f >= i ? "start" : "end", verticalAnchor: "middle" };
                    }
                    if ("center" === n) return { x: i, y: a, textAnchor: "middle", verticalAnchor: "middle" };
                    if ("centerTop" === n) return { x: i, y: a, textAnchor: "middle", verticalAnchor: "start" };
                    if ("centerBottom" === n) return { x: i, y: a, textAnchor: "middle", verticalAnchor: "end" };
                    var h = (c + l) / 2,
                        d = (0, p.op)(i, a, h, u);
                    return { x: d.x, y: d.y, textAnchor: "middle", verticalAnchor: "middle" };
                },
                S = function (t) {
                    var e = t.viewBox,
                        r = t.parentViewBox,
                        n = t.offset,
                        o = t.position,
                        i = e,
                        a = i.x,
                        c = i.y,
                        l = i.width,
                        s = i.height,
                        f = s >= 0 ? 1 : -1,
                        h = f * n,
                        p = f > 0 ? "end" : "start",
                        y = f > 0 ? "start" : "end",
                        b = l >= 0 ? 1 : -1,
                        v = b * n,
                        m = b > 0 ? "end" : "start",
                        g = b > 0 ? "start" : "end";
                    if ("top" === o) return O(O({}, { x: a + l / 2, y: c - f * n, textAnchor: "middle", verticalAnchor: p }), r ? { height: Math.max(c - r.y, 0), width: l } : {});
                    if ("bottom" === o) return O(O({}, { x: a + l / 2, y: c + s + h, textAnchor: "middle", verticalAnchor: y }), r ? { height: Math.max(r.y + r.height - (c + s), 0), width: l } : {});
                    if ("left" === o) {
                        var w = { x: a - v, y: c + s / 2, textAnchor: m, verticalAnchor: "middle" };
                        return O(O({}, w), r ? { width: Math.max(w.x - r.x, 0), height: s } : {});
                    }
                    if ("right" === o) {
                        var x = { x: a + l + v, y: c + s / 2, textAnchor: g, verticalAnchor: "middle" };
                        return O(O({}, x), r ? { width: Math.max(r.x + r.width - x.x, 0), height: s } : {});
                    }
                    var j = r ? { width: l, height: s } : {};
                    return "insideLeft" === o ? O({ x: a + v, y: c + s / 2, textAnchor: g, verticalAnchor: "middle" }, j) : "insideRight" === o ? O({ x: a + l - v, y: c + s / 2, textAnchor: m, verticalAnchor: "middle" }, j) : "insideTop" === o ? O({ x: a + l / 2, y: c + h, textAnchor: "middle", verticalAnchor: y }, j) : "insideBottom" === o ? O({ x: a + l / 2, y: c + s - h, textAnchor: "middle", verticalAnchor: p }, j) : "insideTopLeft" === o ? O({ x: a + v, y: c + h, textAnchor: g, verticalAnchor: y }, j) : "insideTopRight" === o ? O({ x: a + l - v, y: c + h, textAnchor: m, verticalAnchor: y }, j) : "insideBottomLeft" === o ? O({ x: a + v, y: c + s - h, textAnchor: g, verticalAnchor: p }, j) : "insideBottomRight" === o ? O({ x: a + l - v, y: c + s - h, textAnchor: m, verticalAnchor: p }, j) : u()(o) && ((0, d.hj)(o.x) || (0, d.hU)(o.x)) && ((0, d.hj)(o.y) || (0, d.hU)(o.y)) ? O({ x: a + (0, d.h1)(o.x, l), y: c + (0, d.h1)(o.y, s), textAnchor: "end", verticalAnchor: "end" }, j) : O({ x: a + l / 2, y: c + s / 2, textAnchor: "middle", verticalAnchor: "middle" }, j);
                },
                E = function (t) {
                    return "cx" in t && (0, d.hj)(t.cx);
                };
            function k(t) {
                var e,
                    r = t.offset,
                    o = O({ offset: void 0 === r ? 5 : r }, g(t, b)),
                    a = o.viewBox,
                    l = o.position,
                    u = o.value,
                    d = o.children,
                    p = o.content,
                    y = o.className,
                    v = void 0 === y ? "" : y,
                    m = o.textBreakAll;
                if (!a || (i()(u) && i()(d) && !(0, n.isValidElement)(p) && !c()(p))) return null;
                if ((0, n.isValidElement)(p)) return (0, n.cloneElement)(p, o);
                if (c()(p)) {
                    if (((e = (0, n.createElement)(p, o)), (0, n.isValidElement)(e))) return e;
                } else e = P(o);
                var w = E(a),
                    x = (0, h.L6)(o, !0);
                if (w && ("insideStart" === l || "insideEnd" === l || "end" === l)) return B(o, e, x);
                var k = w ? A(o) : S(o);
                return n.createElement(f.x, j({ className: (0, s.Z)("recharts-label", v) }, x, k, { breakAll: m }), e);
            }
            k.displayName = "Label";
            var N = function (t) {
                var e = t.cx,
                    r = t.cy,
                    n = t.angle,
                    o = t.startAngle,
                    i = t.endAngle,
                    a = t.r,
                    c = t.radius,
                    l = t.innerRadius,
                    u = t.outerRadius,
                    s = t.x,
                    f = t.y,
                    h = t.top,
                    p = t.left,
                    y = t.width,
                    b = t.height,
                    v = t.clockWise,
                    m = t.labelViewBox;
                if (m) return m;
                if ((0, d.hj)(y) && (0, d.hj)(b)) {
                    if ((0, d.hj)(s) && (0, d.hj)(f)) return { x: s, y: f, width: y, height: b };
                    if ((0, d.hj)(h) && (0, d.hj)(p)) return { x: h, y: p, width: y, height: b };
                }
                return (0, d.hj)(s) && (0, d.hj)(f) ? { x: s, y: f, width: 0, height: 0 } : (0, d.hj)(e) && (0, d.hj)(r) ? { cx: e, cy: r, startAngle: o || n || 0, endAngle: i || n || 0, innerRadius: l || 0, outerRadius: u || c || a || 0, clockWise: v } : t.viewBox ? t.viewBox : {};
            };
            (k.parseViewBox = N),
                (k.renderCallByParent = function (t, e) {
                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (!t || (!t.children && r && !t.label)) return null;
                    var o = t.children,
                        i = N(t),
                        a = (0, h.NN)(o, k).map(function (t, r) {
                            return (0, n.cloneElement)(t, { viewBox: e || i, key: "label-".concat(r) });
                        });
                    if (!r) return a;
                    var l = (function (t, e) {
                        return t ? (!0 === t ? n.createElement(k, { key: "label-implicit", viewBox: e }) : (0, d.P2)(t) ? n.createElement(k, { key: "label-implicit", viewBox: e, value: t }) : (0, n.isValidElement)(t) ? (t.type === k ? (0, n.cloneElement)(t, { key: "label-implicit", viewBox: e }) : n.createElement(k, { key: "label-implicit", content: t, viewBox: e })) : c()(t) ? n.createElement(k, { key: "label-implicit", content: t, viewBox: e }) : u()(t) ? n.createElement(k, j({ viewBox: e }, t, { key: "label-implicit" })) : null) : null;
                    })(t.label, e || i);
                    return [l].concat(v(a));
                });
        },
        196621: (t, e, r) => {
            r.d(e, { e: () => S });
            var n = r(202784),
                o = r(301842),
                i = r.n(o),
                a = r(429259),
                c = r.n(a),
                l = r(161049),
                u = r.n(l),
                s = r(856974),
                f = r.n(s),
                h = r(481224),
                d = r(284618),
                p = r(179376),
                y = r(547247);
            function b(t) {
                return (
                    (b =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    b(t)
                );
            }
            var v = ["valueAccessor"],
                m = ["data", "dataKey", "clockWise", "id", "textBreakAll"];
            function g(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return w(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return w(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return w(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function w(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function O() {
                return (
                    (O = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    O.apply(this, arguments)
                );
            }
            function x(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? x(Object(r), !0).forEach(function (e) {
                              P(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : x(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function P(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != b(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != b(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == b(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function B(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            var A = function (t) {
                return Array.isArray(t.value) ? f()(t.value) : t.value;
            };
            function S(t) {
                var e = t.valueAccessor,
                    r = void 0 === e ? A : e,
                    o = B(t, v),
                    a = o.data,
                    c = o.dataKey,
                    l = o.clockWise,
                    u = o.id,
                    s = o.textBreakAll,
                    f = B(o, m);
                return a && a.length
                    ? n.createElement(
                          d.m,
                          { className: "recharts-label-list" },
                          a.map(function (t, e) {
                              var o = i()(c) ? r(t, e) : (0, y.F$)(t && t.payload, c),
                                  a = i()(u) ? {} : { id: "".concat(u, "-").concat(e) };
                              return n.createElement(h._, O({}, (0, p.L6)(t, !0), f, a, { parentViewBox: t.parentViewBox, value: o, textBreakAll: s, viewBox: h._.parseViewBox(i()(l) ? t : j(j({}, t), {}, { clockWise: l })), key: "label-".concat(e), index: e }));
                          }),
                      )
                    : null;
            }
            (S.displayName = "LabelList"),
                (S.renderCallByParent = function (t, e) {
                    var r = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    if (!t || (!t.children && r && !t.label)) return null;
                    var o = t.children,
                        i = (0, p.NN)(o, S).map(function (t, r) {
                            return (0, n.cloneElement)(t, { data: e, key: "labelList-".concat(r) });
                        });
                    return r
                        ? [
                              (function (t, e) {
                                  return t ? (!0 === t ? n.createElement(S, { key: "labelList-implicit", data: e }) : n.isValidElement(t) || u()(t) ? n.createElement(S, { key: "labelList-implicit", data: e, content: t }) : c()(t) ? n.createElement(S, O({ data: e }, t, { key: "labelList-implicit" })) : null) : null;
                              })(t.label, e),
                          ].concat(g(i))
                        : i;
                });
        },
        96629: (t, e, r) => {
            r.d(e, { D: () => w });
            var n = r(202784),
                o = r(761502),
                i = r(715027),
                a = r(432391);
            function c(t) {
                return (
                    (c =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    c(t)
                );
            }
            var l = ["ref"];
            function u(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? u(Object(r), !0).forEach(function (e) {
                              b(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : u(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function f(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, v(n.key), n);
                }
            }
            function h(t, e, r) {
                return (
                    (e = p(e)),
                    (function (t, e) {
                        if (e && ("object" === c(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, d() ? Reflect.construct(e, r || [], p(t).constructor) : e.apply(t, r))
                );
            }
            function d() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (d = function () {
                    return !!t;
                })();
            }
            function p(t) {
                return (
                    (p = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    p(t)
                );
            }
            function y(t, e) {
                return (
                    (y = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    y(t, e)
                );
            }
            function b(t, e, r) {
                return (e = v(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function v(t) {
                var e = (function (t, e) {
                    if ("object" != c(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != c(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == c(e) ? e : e + "";
            }
            function m(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            function g(t) {
                return t.value;
            }
            var w = (function (t) {
                function e() {
                    var t;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, e);
                    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return b((t = h(this, e, [].concat(n))), "lastBoundingBox", { width: -1, height: -1 }), t;
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && y(t, e);
                    })(e, t),
                    (r = e),
                    (u = [
                        {
                            key: "getWithHeight",
                            value: function (t, e) {
                                var r = s(s({}, this.defaultProps), t.props).layout;
                                return "vertical" === r && (0, i.hj)(t.props.height) ? { height: t.props.height } : "horizontal" === r ? { width: t.props.width || e } : null;
                            },
                        },
                    ]),
                    (c = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                this.updateBBox();
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function () {
                                this.updateBBox();
                            },
                        },
                        {
                            key: "getBBox",
                            value: function () {
                                if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                                    var t = this.wrapperNode.getBoundingClientRect();
                                    return (t.height = this.wrapperNode.offsetHeight), (t.width = this.wrapperNode.offsetWidth), t;
                                }
                                return null;
                            },
                        },
                        {
                            key: "updateBBox",
                            value: function () {
                                var t = this.props.onBBoxUpdate,
                                    e = this.getBBox();
                                e ? (Math.abs(e.width - this.lastBoundingBox.width) > 1 || Math.abs(e.height - this.lastBoundingBox.height) > 1) && ((this.lastBoundingBox.width = e.width), (this.lastBoundingBox.height = e.height), t && t(e)) : (-1 === this.lastBoundingBox.width && -1 === this.lastBoundingBox.height) || ((this.lastBoundingBox.width = -1), (this.lastBoundingBox.height = -1), t && t(null));
                            },
                        },
                        {
                            key: "getBBoxSnapshot",
                            value: function () {
                                return this.lastBoundingBox.width >= 0 && this.lastBoundingBox.height >= 0 ? s({}, this.lastBoundingBox) : { width: 0, height: 0 };
                            },
                        },
                        {
                            key: "getDefaultPosition",
                            value: function (t) {
                                var e,
                                    r,
                                    n = this.props,
                                    o = n.layout,
                                    i = n.align,
                                    a = n.verticalAlign,
                                    c = n.margin,
                                    l = n.chartWidth,
                                    u = n.chartHeight;
                                return (t && ((void 0 !== t.left && null !== t.left) || (void 0 !== t.right && null !== t.right))) || (e = "center" === i && "vertical" === o ? { left: ((l || 0) - this.getBBoxSnapshot().width) / 2 } : "right" === i ? { right: (c && c.right) || 0 } : { left: (c && c.left) || 0 }), (t && ((void 0 !== t.top && null !== t.top) || (void 0 !== t.bottom && null !== t.bottom))) || (r = "middle" === a ? { top: ((u || 0) - this.getBBoxSnapshot().height) / 2 } : "bottom" === a ? { bottom: (c && c.bottom) || 0 } : { top: (c && c.top) || 0 }), s(s({}, e), r);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.props,
                                    r = e.content,
                                    i = e.width,
                                    c = e.height,
                                    u = e.wrapperStyle,
                                    f = e.payloadUniqBy,
                                    h = e.payload,
                                    d = s(s({ position: "absolute", width: i || "auto", height: c || "auto" }, this.getDefaultPosition(u)), u);
                                return n.createElement(
                                    "div",
                                    {
                                        className: "recharts-legend-wrapper",
                                        style: d,
                                        ref: function (e) {
                                            t.wrapperNode = e;
                                        },
                                    },
                                    (function (t, e) {
                                        if (n.isValidElement(t)) return n.cloneElement(t, e);
                                        if ("function" == typeof t) return n.createElement(t, e);
                                        e.ref;
                                        var r = m(e, l);
                                        return n.createElement(o.g, r);
                                    })(r, s(s({}, this.props), {}, { payload: (0, a.z)(h, f, g) })),
                                );
                            },
                        },
                    ]) && f(r.prototype, c),
                    u && f(r, u),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, c, u;
            })(n.PureComponent);
            b(w, "displayName", "Legend"), b(w, "defaultProps", { iconSize: 14, layout: "horizontal", align: "center", verticalAlign: "bottom" });
        },
        18205: (t, e, r) => {
            r.d(e, { h: () => b });
            var n = r(840489),
                o = r(202784),
                i = r(912436),
                a = r.n(i),
                c = r(715027),
                l = r(691745),
                u = r(179376);
            function s(t) {
                return (
                    (s =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    s(t)
                );
            }
            function f(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? f(Object(r), !0).forEach(function (e) {
                              d(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : f(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function d(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != s(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == s(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function p(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != r) {
                            var n,
                                o,
                                i,
                                a,
                                c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                            } catch (t) {
                                (u = !0), (o = t);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                                } finally {
                                    if (u) throw o;
                                }
                            }
                            return c;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return y(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return y(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var b = (0, o.forwardRef)(function (t, e) {
                var r = t.aspect,
                    i = t.initialDimension,
                    s = void 0 === i ? { width: -1, height: -1 } : i,
                    f = t.width,
                    d = void 0 === f ? "100%" : f,
                    y = t.height,
                    b = void 0 === y ? "100%" : y,
                    v = t.minWidth,
                    m = void 0 === v ? 0 : v,
                    g = t.minHeight,
                    w = t.maxHeight,
                    O = t.children,
                    x = t.debounce,
                    j = void 0 === x ? 0 : x,
                    P = t.id,
                    B = t.className,
                    A = t.onResize,
                    S = t.style,
                    E = void 0 === S ? {} : S,
                    k = (0, o.useRef)(null),
                    N = (0, o.useRef)();
                (N.current = A),
                    (0, o.useImperativeHandle)(e, function () {
                        return Object.defineProperty(k.current, "current", {
                            get: function () {
                                return k.current;
                            },
                            configurable: !0,
                        });
                    });
                var C = p((0, o.useState)({ containerWidth: s.width, containerHeight: s.height }), 2),
                    D = C[0],
                    T = C[1],
                    R = (0, o.useCallback)(function (t, e) {
                        T(function (r) {
                            var n = Math.round(t),
                                o = Math.round(e);
                            return r.containerWidth === n && r.containerHeight === o ? r : { containerWidth: n, containerHeight: o };
                        });
                    }, []);
                (0, o.useEffect)(
                    function () {
                        var t = function (t) {
                            var e,
                                r = t[0].contentRect,
                                n = r.width,
                                o = r.height;
                            R(n, o), null === (e = N.current) || void 0 === e || e.call(N, n, o);
                        };
                        j > 0 && (t = a()(t, j, { trailing: !0, leading: !1 }));
                        var e = new ResizeObserver(t),
                            r = k.current.getBoundingClientRect(),
                            n = r.width,
                            o = r.height;
                        return (
                            R(n, o),
                            e.observe(k.current),
                            function () {
                                e.disconnect();
                            }
                        );
                    },
                    [R, j],
                );
                var _ = (0, o.useMemo)(
                    function () {
                        var t = D.containerWidth,
                            e = D.containerHeight;
                        if (t < 0 || e < 0) return null;
                        (0, l.Z)((0, c.hU)(d) || (0, c.hU)(b), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", d, b), (0, l.Z)(!r || r > 0, "The aspect(%s) must be greater than zero.", r);
                        var n = (0, c.hU)(d) ? t : d,
                            i = (0, c.hU)(b) ? e : b;
                        r && r > 0 && (n ? (i = n / r) : i && (n = i * r), w && i > w && (i = w)), (0, l.Z)(n > 0 || i > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", n, i, d, b, m, g, r);
                        var a = !Array.isArray(O) && (0, u.Gf)(O.type).endsWith("Chart");
                        return o.Children.map(O, function (t) {
                            return o.isValidElement(t) ? (0, o.cloneElement)(t, h({ width: n, height: i }, a ? { style: h({ height: "100%", width: "100%", maxHeight: i, maxWidth: n }, t.props.style) } : {})) : t;
                        });
                    },
                    [r, O, b, w, g, m, D, d],
                );
                return o.createElement("div", { id: P ? "".concat(P) : void 0, className: (0, n.Z)("recharts-responsive-container", B), style: h(h({}, E), {}, { width: d, height: b, minWidth: m, minHeight: g, maxHeight: w }), ref: k }, _);
            });
        },
        707670: (t, e, r) => {
            r.d(e, { x: () => j });
            var n = r(202784),
                o = r(301842),
                i = r.n(o),
                a = r(840489),
                c = r(715027),
                l = r(179499),
                u = r(179376),
                s = r(188089),
                f = r(729769),
                h = ["x", "y", "lineHeight", "capHeight", "scaleToFit", "textAnchor", "verticalAnchor", "fill"],
                d = ["dx", "dy", "angle", "className", "breakAll"];
            function p() {
                return (
                    (p = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    p.apply(this, arguments)
                );
            }
            function y(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            function b(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != r) {
                            var n,
                                o,
                                i,
                                a,
                                c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((i = (r = r.call(t)).next), 0 === e)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = i.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                            } catch (t) {
                                (u = !0), (o = t);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                                } finally {
                                    if (u) throw o;
                                }
                            }
                            return c;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return v(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return v(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function v(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var m = /[ \f\n\r\t\v\u2028\u2029]+/,
                g = function (t) {
                    var e = t.children,
                        r = t.breakAll,
                        n = t.style;
                    try {
                        var o = [];
                        return (
                            i()(e) || (o = r ? e.toString().split("") : e.toString().split(m)),
                            {
                                wordsWithComputedWidth: o.map(function (t) {
                                    return { word: t, width: (0, s.xE)(t, n).width };
                                }),
                                spaceWidth: r ? 0 : (0, s.xE)(" ", n).width,
                            }
                        );
                    } catch (t) {
                        return null;
                    }
                },
                w = function (t) {
                    return [{ words: i()(t) ? [] : t.toString().split(m) }];
                },
                O = function (t) {
                    var e = t.width,
                        r = t.scaleToFit,
                        n = t.children,
                        o = t.style,
                        i = t.breakAll,
                        a = t.maxLines;
                    if ((e || r) && !l.x.isSsr) {
                        var u = g({ breakAll: i, children: n, style: o });
                        return u
                            ? (function (t, e, r, n, o) {
                                  var i = t.maxLines,
                                      a = t.children,
                                      l = t.style,
                                      u = t.breakAll,
                                      s = (0, c.hj)(i),
                                      f = a,
                                      h = function () {
                                          return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).reduce(function (t, e) {
                                              var i = e.word,
                                                  a = e.width,
                                                  c = t[t.length - 1];
                                              if (c && (null == n || o || c.width + a + r < Number(n))) c.words.push(i), (c.width += a + r);
                                              else {
                                                  var l = { words: [i], width: a };
                                                  t.push(l);
                                              }
                                              return t;
                                          }, []);
                                      },
                                      d = h(e);
                                  if (!s) return d;
                                  for (
                                      var p,
                                          y = function (t) {
                                              var e = f.slice(0, t),
                                                  r = g({ breakAll: u, style: l, children: e + "…" }).wordsWithComputedWidth,
                                                  o = h(r),
                                                  a =
                                                      o.length > i ||
                                                      (function (t) {
                                                          return t.reduce(function (t, e) {
                                                              return t.width > e.width ? t : e;
                                                          });
                                                      })(o).width > Number(n);
                                              return [a, o];
                                          },
                                          v = 0,
                                          m = f.length - 1,
                                          w = 0;
                                      v <= m && w <= f.length - 1;

                                  ) {
                                      var O = Math.floor((v + m) / 2),
                                          x = b(y(O - 1), 2),
                                          j = x[0],
                                          P = x[1],
                                          B = b(y(O), 1)[0];
                                      if ((j || B || (v = O + 1), j && B && (m = O - 1), !j && B)) {
                                          p = P;
                                          break;
                                      }
                                      w++;
                                  }
                                  return p || d;
                              })({ breakAll: i, children: n, maxLines: a, style: o }, u.wordsWithComputedWidth, u.spaceWidth, e, r)
                            : w(n);
                    }
                    return w(n);
                },
                x = "#808080",
                j = function (t) {
                    var e = t.x,
                        r = void 0 === e ? 0 : e,
                        o = t.y,
                        i = void 0 === o ? 0 : o,
                        l = t.lineHeight,
                        s = void 0 === l ? "1em" : l,
                        b = t.capHeight,
                        v = void 0 === b ? "0.71em" : b,
                        m = t.scaleToFit,
                        g = void 0 !== m && m,
                        w = t.textAnchor,
                        j = void 0 === w ? "start" : w,
                        P = t.verticalAnchor,
                        B = void 0 === P ? "end" : P,
                        A = t.fill,
                        S = void 0 === A ? x : A,
                        E = y(t, h),
                        k = (0, n.useMemo)(
                            function () {
                                return O({ breakAll: E.breakAll, children: E.children, maxLines: E.maxLines, scaleToFit: g, style: E.style, width: E.width });
                            },
                            [E.breakAll, E.children, E.maxLines, g, E.style, E.width],
                        ),
                        N = E.dx,
                        C = E.dy,
                        D = E.angle,
                        T = E.className,
                        R = E.breakAll,
                        _ = y(E, d);
                    if (!(0, c.P2)(r) || !(0, c.P2)(i)) return null;
                    var W,
                        L = r + ((0, c.hj)(N) ? N : 0),
                        M = i + ((0, c.hj)(C) ? C : 0);
                    switch (B) {
                        case "start":
                            W = (0, f.w)("calc(".concat(v, ")"));
                            break;
                        case "middle":
                            W = (0, f.w)(
                                "calc("
                                    .concat((k.length - 1) / 2, " * -")
                                    .concat(s, " + (")
                                    .concat(v, " / 2))"),
                            );
                            break;
                        default:
                            W = (0, f.w)("calc(".concat(k.length - 1, " * -").concat(s, ")"));
                    }
                    var I = [];
                    if (g) {
                        var H = k[0].width,
                            V = E.width;
                        I.push("scale(".concat(((0, c.hj)(V) ? V / H : 1) / H, ")"));
                    }
                    return (
                        D && I.push("rotate(".concat(D, ", ").concat(L, ", ").concat(M, ")")),
                        I.length && (_.transform = I.join(" ")),
                        n.createElement(
                            "text",
                            p({}, (0, u.L6)(_, !0), { x: L, y: M, className: (0, a.Z)("recharts-text", T), textAnchor: j, fill: S.includes("url") ? x : S }),
                            k.map(function (t, e) {
                                var r = t.words.join(R ? "" : " ");
                                return n.createElement("tspan", { x: L, dy: 0 === e ? W : s, key: "".concat(r, "-").concat(e) }, r);
                            }),
                        )
                    );
                };
        },
        735081: (t, e, r) => {
            r.d(e, { u: () => N });
            var n = r(202784),
                o = r(517711),
                i = r(178474);
            function a(t) {
                return (
                    (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    a(t)
                );
            }
            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? c(Object(r), !0).forEach(function (e) {
                              p(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : c(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, y(n.key), n);
                }
            }
            function s(t, e, r) {
                return (
                    (e = h(e)),
                    (function (t, e) {
                        if (e && ("object" === a(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, f() ? Reflect.construct(e, r || [], h(t).constructor) : e.apply(t, r))
                );
            }
            function f() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (f = function () {
                    return !!t;
                })();
            }
            function h(t) {
                return (
                    (h = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    h(t)
                );
            }
            function d(t, e) {
                return (
                    (d = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    d(t, e)
                );
            }
            function p(t, e, r) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function y(t) {
                var e = (function (t, e) {
                    if ("object" != a(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != a(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == a(e) ? e : e + "";
            }
            var b = (function (t) {
                    function e() {
                        var t;
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e);
                        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        return (
                            p((t = s(this, e, [].concat(n))), "state", { dismissed: !1, dismissedAtCoordinate: { x: 0, y: 0 }, lastBoundingBox: { width: -1, height: -1 } }),
                            p(t, "handleKeyDown", function (e) {
                                var r, n, o, i;
                                "Escape" === e.key && t.setState({ dismissed: !0, dismissedAtCoordinate: { x: null !== (r = null === (n = t.props.coordinate) || void 0 === n ? void 0 : n.x) && void 0 !== r ? r : 0, y: null !== (o = null === (i = t.props.coordinate) || void 0 === i ? void 0 : i.y) && void 0 !== o ? o : 0 } });
                            }),
                            t
                        );
                    }
                    return (
                        (function (t, e) {
                            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                            (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && d(t, e);
                        })(e, t),
                        (r = e),
                        (o = [
                            {
                                key: "updateBBox",
                                value: function () {
                                    if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
                                        var t = this.wrapperNode.getBoundingClientRect();
                                        (Math.abs(t.width - this.state.lastBoundingBox.width) > 1 || Math.abs(t.height - this.state.lastBoundingBox.height) > 1) && this.setState({ lastBoundingBox: { width: t.width, height: t.height } });
                                    } else (-1 === this.state.lastBoundingBox.width && -1 === this.state.lastBoundingBox.height) || this.setState({ lastBoundingBox: { width: -1, height: -1 } });
                                },
                            },
                            {
                                key: "componentDidMount",
                                value: function () {
                                    document.addEventListener("keydown", this.handleKeyDown), this.updateBBox();
                                },
                            },
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    document.removeEventListener("keydown", this.handleKeyDown);
                                },
                            },
                            {
                                key: "componentDidUpdate",
                                value: function () {
                                    var t, e;
                                    this.props.active && this.updateBBox(), this.state.dismissed && (((null === (t = this.props.coordinate) || void 0 === t ? void 0 : t.x) === this.state.dismissedAtCoordinate.x && (null === (e = this.props.coordinate) || void 0 === e ? void 0 : e.y) === this.state.dismissedAtCoordinate.y) || (this.state.dismissed = !1));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this,
                                        e = this.props,
                                        r = e.active,
                                        o = e.allowEscapeViewBox,
                                        a = e.animationDuration,
                                        c = e.animationEasing,
                                        u = e.children,
                                        s = e.coordinate,
                                        f = e.hasPayload,
                                        h = e.isAnimationActive,
                                        d = e.offset,
                                        p = e.position,
                                        y = e.reverseDirection,
                                        b = e.useTranslate3d,
                                        v = e.viewBox,
                                        m = e.wrapperStyle,
                                        g = (0, i.qq)({ allowEscapeViewBox: o, coordinate: s, offsetTopLeft: d, position: p, reverseDirection: y, tooltipBox: this.state.lastBoundingBox, useTranslate3d: b, viewBox: v }),
                                        w = g.cssClasses,
                                        O = g.cssProperties,
                                        x = l(l({ transition: h && r ? "transform ".concat(a, "ms ").concat(c) : void 0 }, O), {}, { pointerEvents: "none", visibility: !this.state.dismissed && r && f ? "visible" : "hidden", position: "absolute", top: 0, left: 0 }, m);
                                    return n.createElement(
                                        "div",
                                        {
                                            tabIndex: -1,
                                            className: w,
                                            style: x,
                                            ref: function (e) {
                                                t.wrapperNode = e;
                                            },
                                        },
                                        u,
                                    );
                                },
                            },
                        ]) && u(r.prototype, o),
                        a && u(r, a),
                        Object.defineProperty(r, "prototype", { writable: !1 }),
                        r
                    );
                    var r, o, a;
                })(n.PureComponent),
                v = r(179499),
                m = r(432391);
            function g(t) {
                return (
                    (g =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    g(t)
                );
            }
            function w(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e &&
                        (n = n.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function O(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? w(Object(r), !0).forEach(function (e) {
                              S(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : w(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function x(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, E(n.key), n);
                }
            }
            function j(t, e, r) {
                return (
                    (e = B(e)),
                    (function (t, e) {
                        if (e && ("object" === g(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, P() ? Reflect.construct(e, r || [], B(t).constructor) : e.apply(t, r))
                );
            }
            function P() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (P = function () {
                    return !!t;
                })();
            }
            function B(t) {
                return (
                    (B = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    B(t)
                );
            }
            function A(t, e) {
                return (
                    (A = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    A(t, e)
                );
            }
            function S(t, e, r) {
                return (e = E(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function E(t) {
                var e = (function (t, e) {
                    if ("object" != g(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != g(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == g(e) ? e : e + "";
            }
            function k(t) {
                return t.dataKey;
            }
            var N = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        j(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && A(t, e);
                    })(e, t),
                    (r = e),
                    (i = [
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.props,
                                    r = e.active,
                                    i = e.allowEscapeViewBox,
                                    a = e.animationDuration,
                                    c = e.animationEasing,
                                    l = e.content,
                                    u = e.coordinate,
                                    s = e.filterNull,
                                    f = e.isAnimationActive,
                                    h = e.offset,
                                    d = e.payload,
                                    p = e.payloadUniqBy,
                                    y = e.position,
                                    v = e.reverseDirection,
                                    g = e.useTranslate3d,
                                    w = e.viewBox,
                                    x = e.wrapperStyle,
                                    j = null != d ? d : [];
                                s &&
                                    j.length &&
                                    (j = (0, m.z)(
                                        d.filter(function (e) {
                                            return null != e.value && (!0 !== e.hide || t.props.includeHidden);
                                        }),
                                        p,
                                        k,
                                    ));
                                var P = j.length > 0;
                                return n.createElement(
                                    b,
                                    { allowEscapeViewBox: i, animationDuration: a, animationEasing: c, isAnimationActive: f, active: r, coordinate: u, hasPayload: P, offset: h, position: y, reverseDirection: v, useTranslate3d: g, viewBox: w, wrapperStyle: x },
                                    (function (t, e) {
                                        return n.isValidElement(t) ? n.cloneElement(t, e) : "function" == typeof t ? n.createElement(t, e) : n.createElement(o.x, e);
                                    })(l, O(O({}, this.props), {}, { payload: j })),
                                );
                            },
                        },
                    ]) && x(r.prototype, i),
                    a && x(r, a),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, i, a;
            })(n.PureComponent);
            S(N, "displayName", "Tooltip"), S(N, "defaultProps", { accessibilityLayer: !1, allowEscapeViewBox: { x: !1, y: !1 }, animationDuration: 400, animationEasing: "ease", contentStyle: {}, coordinate: { x: 0, y: 0 }, cursor: !0, cursorStyle: {}, filterNull: !0, isAnimationActive: !v.x.isSsr, itemStyle: {}, labelStyle: {}, offset: 10, reverseDirection: { x: !1, y: !1 }, separator: " : ", trigger: "hover", useTranslate3d: !1, viewBox: { x: 0, y: 0, height: 0, width: 0 }, wrapperStyle: {} });
        },
        284618: (t, e, r) => {
            r.d(e, { m: () => u });
            var n = r(202784),
                o = r(840489),
                i = r(179376),
                a = ["children", "className"];
            function c() {
                return (
                    (c = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    c.apply(this, arguments)
                );
            }
            function l(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            var u = n.forwardRef(function (t, e) {
                var r = t.children,
                    u = t.className,
                    s = l(t, a),
                    f = (0, o.Z)("recharts-layer", u);
                return n.createElement("g", c({ className: f }, (0, i.L6)(s, !0), { ref: e }), r);
            });
        },
        119617: (t, e, r) => {
            r.d(e, { T: () => u });
            var n = r(202784),
                o = r(840489),
                i = r(179376),
                a = ["children", "width", "height", "viewBox", "className", "style", "title", "desc"];
            function c() {
                return (
                    (c = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    c.apply(this, arguments)
                );
            }
            function l(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var r = {};
                        for (var n in t)
                            if (Object.prototype.hasOwnProperty.call(t, n)) {
                                if (e.indexOf(n) >= 0) continue;
                                r[n] = t[n];
                            }
                        return r;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < i.length; n++) (r = i[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r]));
                }
                return o;
            }
            function u(t) {
                var e = t.children,
                    r = t.width,
                    u = t.height,
                    s = t.viewBox,
                    f = t.className,
                    h = t.style,
                    d = t.title,
                    p = t.desc,
                    y = l(t, a),
                    b = s || { width: r, height: u, x: 0, y: 0 },
                    v = (0, o.Z)("recharts-surface", f);
                return n.createElement("svg", c({}, (0, i.L6)(y, !0, "svg"), { className: v, width: r, height: u, style: h, viewBox: "".concat(b.x, " ").concat(b.y, " ").concat(b.width, " ").concat(b.height) }), n.createElement("title", null, d), n.createElement("desc", null, p), e);
            }
        },
        319164: (t, e, r) => {
            r.d(e, { CW: () => O, Mw: () => S, Nf: () => x, Ud: () => j, bH: () => w, br: () => m, d2: () => P, qD: () => B, sp: () => g, zn: () => A });
            var n = r(202784),
                o = r(611534),
                i = r(255281),
                a = r.n(i),
                c = r(539794),
                l = r.n(c),
                u = r(212875),
                s = r(715027);
            var f = (0, n.createContext)(void 0),
                h = (0, n.createContext)(void 0),
                d = (0, n.createContext)(void 0),
                p = (0, n.createContext)({}),
                y = (0, n.createContext)(void 0),
                b = (0, n.createContext)(0),
                v = (0, n.createContext)(0),
                m = function (t) {
                    var e = t.state,
                        r = e.xAxisMap,
                        o = e.yAxisMap,
                        i = e.offset,
                        a = t.clipPathId,
                        c = t.children,
                        l = t.width,
                        s = t.height,
                        m = (0, u.Y)(i);
                    return n.createElement(f.Provider, { value: r }, n.createElement(h.Provider, { value: o }, n.createElement(p.Provider, { value: i }, n.createElement(d.Provider, { value: m }, n.createElement(y.Provider, { value: a }, n.createElement(b.Provider, { value: s }, n.createElement(v.Provider, { value: l }, c)))))));
                },
                g = function () {
                    return (0, n.useContext)(y);
                };
            var w = function (t) {
                    var e = (0, n.useContext)(f);
                    null == e && (0, o.Z)(!1);
                    var r = e[t];
                    return null == r && (0, o.Z)(!1), r;
                },
                O = function () {
                    var t = (0, n.useContext)(f);
                    return (0, s.Kt)(t);
                },
                x = function () {
                    var t = (0, n.useContext)(h);
                    return (
                        a()(t, function (t) {
                            return l()(t.domain, Number.isFinite);
                        }) || (0, s.Kt)(t)
                    );
                },
                j = function (t) {
                    var e = (0, n.useContext)(h);
                    null == e && (0, o.Z)(!1);
                    var r = e[t];
                    return null == r && (0, o.Z)(!1), r;
                },
                P = function () {
                    return (0, n.useContext)(d);
                },
                B = function () {
                    return (0, n.useContext)(p);
                },
                A = function () {
                    return (0, n.useContext)(v);
                },
                S = function () {
                    return (0, n.useContext)(b);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-b08eb7a4.89dd12aa.js.map
