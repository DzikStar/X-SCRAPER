"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"],
    {
        583365: (t, e, r) => {
            r.d(e, { O: () => T });
            var n = r(202784),
                i = r(161049),
                o = r.n(i),
                a = r(72579),
                c = r.n(a),
                l = r(840489),
                u = r(447022),
                s = r(284618),
                f = r(707670),
                y = r(481224),
                p = r(715027),
                h = r(321442),
                v = r(179376),
                b = r(57242),
                d = ["viewBox"],
                m = ["viewBox"],
                g = ["ticks"];
            function O(t) {
                return (
                    (O =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    O(t)
                );
            }
            function w() {
                return (
                    (w = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    w.apply(this, arguments)
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
            function k(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? x(Object(r), !0).forEach(function (e) {
                              N(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : x(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function j(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    i = (function (t, e) {
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
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
                }
                return i;
            }
            function P(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, C(n.key), n);
                }
            }
            function S(t, e, r) {
                return (
                    (e = A(e)),
                    (function (t, e) {
                        if (e && ("object" === O(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, E() ? Reflect.construct(e, r || [], A(t).constructor) : e.apply(t, r))
                );
            }
            function E() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (E = function () {
                    return !!t;
                })();
            }
            function A(t) {
                return (
                    (A = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    A(t)
                );
            }
            function z(t, e) {
                return (
                    (z = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    z(t, e)
                );
            }
            function N(t, e, r) {
                return (e = C(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function C(t) {
                var e = (function (t, e) {
                    if ("object" != O(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != O(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == O(e) ? e : e + "";
            }
            var T = (function (t) {
                function e(t) {
                    var r;
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        ((r = S(this, e, [t])).state = { fontSize: "", letterSpacing: "" }),
                        r
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && z(t, e);
                    })(e, t),
                    (r = e),
                    (a = [
                        {
                            key: "renderTickItem",
                            value: function (t, e, r) {
                                return n.isValidElement(t) ? n.cloneElement(t, e) : o()(t) ? t(e) : n.createElement(f.x, w({}, e, { className: "recharts-cartesian-axis-tick-value" }), r);
                            },
                        },
                    ]),
                    (i = [
                        {
                            key: "shouldComponentUpdate",
                            value: function (t, e) {
                                var r = t.viewBox,
                                    n = j(t, d),
                                    i = this.props,
                                    o = i.viewBox,
                                    a = j(i, m);
                                return !(0, u.w)(r, o) || !(0, u.w)(n, a) || !(0, u.w)(e, this.state);
                            },
                        },
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this.layerReference;
                                if (t) {
                                    var e = t.getElementsByClassName("recharts-cartesian-axis-tick-value")[0];
                                    e && this.setState({ fontSize: window.getComputedStyle(e).fontSize, letterSpacing: window.getComputedStyle(e).letterSpacing });
                                }
                            },
                        },
                        {
                            key: "getTickLineCoord",
                            value: function (t) {
                                var e,
                                    r,
                                    n,
                                    i,
                                    o,
                                    a,
                                    c = this.props,
                                    l = c.x,
                                    u = c.y,
                                    s = c.width,
                                    f = c.height,
                                    y = c.orientation,
                                    h = c.tickSize,
                                    v = c.mirror,
                                    b = c.tickMargin,
                                    d = v ? -1 : 1,
                                    m = t.tickSize || h,
                                    g = (0, p.hj)(t.tickCoord) ? t.tickCoord : t.coordinate;
                                switch (y) {
                                    case "top":
                                        (e = r = t.coordinate), (a = (n = (i = u + +!v * f) - d * m) - d * b), (o = g);
                                        break;
                                    case "left":
                                        (n = i = t.coordinate), (o = (e = (r = l + +!v * s) - d * m) - d * b), (a = g);
                                        break;
                                    case "right":
                                        (n = i = t.coordinate), (o = (e = (r = l + +v * s) + d * m) + d * b), (a = g);
                                        break;
                                    default:
                                        (e = r = t.coordinate), (a = (n = (i = u + +v * f) + d * m) + d * b), (o = g);
                                }
                                return { line: { x1: e, y1: n, x2: r, y2: i }, tick: { x: o, y: a } };
                            },
                        },
                        {
                            key: "getTickTextAnchor",
                            value: function () {
                                var t,
                                    e = this.props,
                                    r = e.orientation,
                                    n = e.mirror;
                                switch (r) {
                                    case "left":
                                        t = n ? "start" : "end";
                                        break;
                                    case "right":
                                        t = n ? "end" : "start";
                                        break;
                                    default:
                                        t = "middle";
                                }
                                return t;
                            },
                        },
                        {
                            key: "getTickVerticalAnchor",
                            value: function () {
                                var t = this.props,
                                    e = t.orientation,
                                    r = t.mirror,
                                    n = "end";
                                switch (e) {
                                    case "left":
                                    case "right":
                                        n = "middle";
                                        break;
                                    case "top":
                                        n = r ? "start" : "end";
                                        break;
                                    default:
                                        n = r ? "end" : "start";
                                }
                                return n;
                            },
                        },
                        {
                            key: "renderAxisLine",
                            value: function () {
                                var t = this.props,
                                    e = t.x,
                                    r = t.y,
                                    i = t.width,
                                    o = t.height,
                                    a = t.orientation,
                                    u = t.mirror,
                                    s = t.axisLine,
                                    f = k(k(k({}, (0, v.L6)(this.props, !1)), (0, v.L6)(s, !1)), {}, { fill: "none" });
                                if ("top" === a || "bottom" === a) {
                                    var y = +(("top" === a && !u) || ("bottom" === a && u));
                                    f = k(k({}, f), {}, { x1: e, y1: r + y * o, x2: e + i, y2: r + y * o });
                                } else {
                                    var p = +(("left" === a && !u) || ("right" === a && u));
                                    f = k(k({}, f), {}, { x1: e + p * i, y1: r, x2: e + p * i, y2: r + o });
                                }
                                return n.createElement("line", w({}, f, { className: (0, l.Z)("recharts-cartesian-axis-line", c()(s, "className")) }));
                            },
                        },
                        {
                            key: "renderTicks",
                            value: function (t, r, i) {
                                var a = this,
                                    u = this.props,
                                    f = u.tickLine,
                                    y = u.stroke,
                                    p = u.tick,
                                    d = u.tickFormatter,
                                    m = u.unit,
                                    g = (0, b.f)(k(k({}, this.props), {}, { ticks: t }), r, i),
                                    O = this.getTickTextAnchor(),
                                    x = this.getTickVerticalAnchor(),
                                    j = (0, v.L6)(this.props, !1),
                                    P = (0, v.L6)(p, !1),
                                    S = k(k({}, j), {}, { fill: "none" }, (0, v.L6)(f, !1)),
                                    E = g.map(function (t, r) {
                                        var i = a.getTickLineCoord(t),
                                            u = i.line,
                                            v = i.tick,
                                            b = k(k(k(k({ textAnchor: O, verticalAnchor: x }, j), {}, { stroke: "none", fill: y }, P), v), {}, { index: r, payload: t, visibleTicksCount: g.length, tickFormatter: d });
                                        return n.createElement(s.m, w({ className: "recharts-cartesian-axis-tick", key: "tick-".concat(t.value, "-").concat(t.coordinate, "-").concat(t.tickCoord) }, (0, h.bw)(a.props, t, r)), f && n.createElement("line", w({}, S, u, { className: (0, l.Z)("recharts-cartesian-axis-tick-line", c()(f, "className")) })), p && e.renderTickItem(p, b, "".concat(o()(d) ? d(t.value, r) : t.value).concat(m || "")));
                                    });
                                return n.createElement("g", { className: "recharts-cartesian-axis-ticks" }, E);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this,
                                    e = this.props,
                                    r = e.axisLine,
                                    i = e.width,
                                    a = e.height,
                                    c = e.ticksGenerator,
                                    u = e.className;
                                if (e.hide) return null;
                                var f = this.props,
                                    p = f.ticks,
                                    h = j(f, g),
                                    v = p;
                                return (
                                    o()(c) && (v = p && p.length > 0 ? c(this.props) : c(h)),
                                    i <= 0 || a <= 0 || !v || !v.length
                                        ? null
                                        : n.createElement(
                                              s.m,
                                              {
                                                  className: (0, l.Z)("recharts-cartesian-axis", u),
                                                  ref: function (e) {
                                                      t.layerReference = e;
                                                  },
                                              },
                                              r && this.renderAxisLine(),
                                              this.renderTicks(v, this.state.fontSize, this.state.letterSpacing),
                                              y._.renderCallByParent(this.props),
                                          )
                                );
                            },
                        },
                    ]) && P(r.prototype, i),
                    a && P(r, a),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, i, a;
            })(n.Component);
            N(T, "displayName", "CartesianAxis"), N(T, "defaultProps", { x: 0, y: 0, width: 0, height: 0, viewBox: { x: 0, y: 0, width: 0, height: 0 }, orientation: "bottom", ticks: [], stroke: "#666", tickLine: !0, axisLine: !0, tick: !0, mirror: !1, minTickGap: 5, tickSize: 6, tickMargin: 2, interval: "preserveEnd" });
        },
        755484: (t, e, r) => {
            r.d(e, { q: () => N });
            var n = r(202784),
                i = r(161049),
                o = r.n(i),
                a = r(691745),
                c = r(715027),
                l = r(179376),
                u = r(547247),
                s = r(57242),
                f = r(583365),
                y = r(319164),
                p = ["x1", "y1", "x2", "y2", "key"],
                h = ["offset"];
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
            function b(t, e) {
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
            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? b(Object(r), !0).forEach(function (e) {
                              m(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : b(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function m(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != v(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != v(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == v(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function g() {
                return (
                    (g = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    g.apply(this, arguments)
                );
            }
            function O(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    i = (function (t, e) {
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
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
                }
                return i;
            }
            var w = function (t) {
                var e = t.fill;
                if (!e || "none" === e) return null;
                var r = t.fillOpacity,
                    i = t.x,
                    o = t.y,
                    a = t.width,
                    c = t.height,
                    l = t.ry;
                return n.createElement("rect", { x: i, y: o, ry: l, width: a, height: c, stroke: "none", fill: e, fillOpacity: r, className: "recharts-cartesian-grid-bg" });
            };
            function x(t, e) {
                var r;
                if (n.isValidElement(t)) r = n.cloneElement(t, e);
                else if (o()(t)) r = t(e);
                else {
                    var i = e.x1,
                        a = e.y1,
                        c = e.x2,
                        u = e.y2,
                        s = e.key,
                        f = O(e, p),
                        y = (0, l.L6)(f, !1),
                        v = (y.offset, O(y, h));
                    r = n.createElement("line", g({}, v, { x1: i, y1: a, x2: c, y2: u, fill: "none", key: s }));
                }
                return r;
            }
            function k(t) {
                var e = t.x,
                    r = t.width,
                    i = t.horizontal,
                    o = void 0 === i || i,
                    a = t.horizontalPoints;
                if (!o || !a || !a.length) return null;
                var c = a.map(function (n, i) {
                    var a = d(d({}, t), {}, { x1: e, y1: n, x2: e + r, y2: n, key: "line-".concat(i), index: i });
                    return x(o, a);
                });
                return n.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, c);
            }
            function j(t) {
                var e = t.y,
                    r = t.height,
                    i = t.vertical,
                    o = void 0 === i || i,
                    a = t.verticalPoints;
                if (!o || !a || !a.length) return null;
                var c = a.map(function (n, i) {
                    var a = d(d({}, t), {}, { x1: n, y1: e, x2: n, y2: e + r, key: "line-".concat(i), index: i });
                    return x(o, a);
                });
                return n.createElement("g", { className: "recharts-cartesian-grid-vertical" }, c);
            }
            function P(t) {
                var e = t.horizontalFill,
                    r = t.fillOpacity,
                    i = t.x,
                    o = t.y,
                    a = t.width,
                    c = t.height,
                    l = t.horizontalPoints,
                    u = t.horizontal;
                if (!(void 0 === u || u) || !e || !e.length) return null;
                var s = l
                    .map(function (t) {
                        return Math.round(t + o - o);
                    })
                    .sort(function (t, e) {
                        return t - e;
                    });
                o !== s[0] && s.unshift(0);
                var f = s.map(function (t, l) {
                    var u = !s[l + 1] ? o + c - t : s[l + 1] - t;
                    if (u <= 0) return null;
                    var f = l % e.length;
                    return n.createElement("rect", { key: "react-".concat(l), y: t, x: i, height: u, width: a, stroke: "none", fill: e[f], fillOpacity: r, className: "recharts-cartesian-grid-bg" });
                });
                return n.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, f);
            }
            function S(t) {
                var e = t.vertical,
                    r = void 0 === e || e,
                    i = t.verticalFill,
                    o = t.fillOpacity,
                    a = t.x,
                    c = t.y,
                    l = t.width,
                    u = t.height,
                    s = t.verticalPoints;
                if (!r || !i || !i.length) return null;
                var f = s
                    .map(function (t) {
                        return Math.round(t + a - a);
                    })
                    .sort(function (t, e) {
                        return t - e;
                    });
                a !== f[0] && f.unshift(0);
                var y = f.map(function (t, e) {
                    var r = !f[e + 1] ? a + l - t : f[e + 1] - t;
                    if (r <= 0) return null;
                    var s = e % i.length;
                    return n.createElement("rect", { key: "react-".concat(e), x: t, y: c, width: r, height: u, stroke: "none", fill: i[s], fillOpacity: o, className: "recharts-cartesian-grid-bg" });
                });
                return n.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, y);
            }
            var E = function (t, e) {
                    var r = t.xAxis,
                        n = t.width,
                        i = t.height,
                        o = t.offset;
                    return (0, u.Rf)((0, s.f)(d(d(d({}, f.O.defaultProps), r), {}, { ticks: (0, u.uY)(r, !0), viewBox: { x: 0, y: 0, width: n, height: i } })), o.left, o.left + o.width, e);
                },
                A = function (t, e) {
                    var r = t.yAxis,
                        n = t.width,
                        i = t.height,
                        o = t.offset;
                    return (0, u.Rf)((0, s.f)(d(d(d({}, f.O.defaultProps), r), {}, { ticks: (0, u.uY)(r, !0), viewBox: { x: 0, y: 0, width: n, height: i } })), o.top, o.top + o.height, e);
                },
                z = { horizontal: !0, vertical: !0, horizontalPoints: [], verticalPoints: [], stroke: "#ccc", fill: "none", verticalFill: [], horizontalFill: [] };
            function N(t) {
                var e,
                    r,
                    i,
                    l,
                    u,
                    s,
                    f = (0, y.zn)(),
                    p = (0, y.Mw)(),
                    h = (0, y.qD)(),
                    b = d(d({}, t), {}, { stroke: null !== (e = t.stroke) && void 0 !== e ? e : z.stroke, fill: null !== (r = t.fill) && void 0 !== r ? r : z.fill, horizontal: null !== (i = t.horizontal) && void 0 !== i ? i : z.horizontal, horizontalFill: null !== (l = t.horizontalFill) && void 0 !== l ? l : z.horizontalFill, vertical: null !== (u = t.vertical) && void 0 !== u ? u : z.vertical, verticalFill: null !== (s = t.verticalFill) && void 0 !== s ? s : z.verticalFill, x: (0, c.hj)(t.x) ? t.x : h.left, y: (0, c.hj)(t.y) ? t.y : h.top, width: (0, c.hj)(t.width) ? t.width : h.width, height: (0, c.hj)(t.height) ? t.height : h.height }),
                    m = b.x,
                    O = b.y,
                    x = b.width,
                    N = b.height,
                    C = b.syncWithTicks,
                    T = b.horizontalValues,
                    _ = b.verticalValues,
                    B = (0, y.CW)(),
                    L = (0, y.Nf)();
                if (!(0, c.hj)(x) || x <= 0 || !(0, c.hj)(N) || N <= 0 || !(0, c.hj)(m) || m !== +m || !(0, c.hj)(O) || O !== +O) return null;
                var F = b.verticalCoordinatesGenerator || E,
                    D = b.horizontalCoordinatesGenerator || A,
                    R = b.horizontalPoints,
                    I = b.verticalPoints;
                if ((!R || !R.length) && o()(D)) {
                    var G = T && T.length,
                        M = D({ yAxis: L ? d(d({}, L), {}, { ticks: G ? T : L.ticks }) : void 0, width: f, height: p, offset: h }, !!G || C);
                    (0, a.Z)(Array.isArray(M), "horizontalCoordinatesGenerator should return Array but instead it returned [".concat(v(M), "]")), Array.isArray(M) && (R = M);
                }
                if ((!I || !I.length) && o()(F)) {
                    var V = _ && _.length,
                        Z = F({ xAxis: B ? d(d({}, B), {}, { ticks: V ? _ : B.ticks }) : void 0, width: f, height: p, offset: h }, !!V || C);
                    (0, a.Z)(Array.isArray(Z), "verticalCoordinatesGenerator should return Array but instead it returned [".concat(v(Z), "]")), Array.isArray(Z) && (I = Z);
                }
                return n.createElement("g", { className: "recharts-cartesian-grid" }, n.createElement(w, { fill: b.fill, fillOpacity: b.fillOpacity, x: b.x, y: b.y, width: b.width, height: b.height, ry: b.ry }), n.createElement(k, g({}, b, { offset: h, horizontalPoints: R, xAxis: B, yAxis: L })), n.createElement(j, g({}, b, { offset: h, verticalPoints: I, xAxis: B, yAxis: L })), n.createElement(P, g({}, b, { horizontalPoints: R })), n.createElement(S, g({}, b, { verticalPoints: I })));
            }
            N.displayName = "CartesianGrid";
        },
        118694: (t, e, r) => {
            r.d(e, { W: () => O });
            var n = r(202784),
                i = r(611534),
                o = r(284618),
                a = r(179376),
                c = ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"];
            function l(t) {
                return (
                    (l =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    l(t)
                );
            }
            function u() {
                return (
                    (u = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var r = arguments[e];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                              }
                              return t;
                          }),
                    u.apply(this, arguments)
                );
            }
            function s(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var r = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != r) {
                            var n,
                                i,
                                o,
                                a,
                                c = [],
                                l = !0,
                                u = !1;
                            try {
                                if (((o = (r = r.call(t)).next), 0 === e)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = o.call(r)).done) && (c.push(n.value), c.length !== e); l = !0);
                            } catch (t) {
                                (u = !0), (i = t);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((a = r.return()), Object(a) !== a)) return;
                                } finally {
                                    if (u) throw i;
                                }
                            }
                            return c;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return f(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function y(t, e) {
                if (null == t) return {};
                var r,
                    n,
                    i = (function (t, e) {
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
                    var o = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < o.length; n++) (r = o[n]), e.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r]));
                }
                return i;
            }
            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, g(n.key), n);
                }
            }
            function h(t, e, r) {
                return (
                    (e = b(e)),
                    (function (t, e) {
                        if (e && ("object" === l(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t;
                        })(t);
                    })(t, v() ? Reflect.construct(e, r || [], b(t).constructor) : e.apply(t, r))
                );
            }
            function v() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (t) {}
                return (v = function () {
                    return !!t;
                })();
            }
            function b(t) {
                return (
                    (b = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    b(t)
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
            function m(t, e, r) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function g(t) {
                var e = (function (t, e) {
                    if ("object" != l(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != l(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == l(e) ? e : e + "";
            }
            var O = (function (t) {
                function e() {
                    return (
                        (function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, e),
                        h(this, e, arguments)
                    );
                }
                return (
                    (function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && d(t, e);
                    })(e, t),
                    (r = e),
                    (l = [
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    e = t.offset,
                                    r = t.layout,
                                    l = t.width,
                                    f = t.dataKey,
                                    p = t.data,
                                    h = t.dataPointFormatter,
                                    v = t.xAxis,
                                    b = t.yAxis,
                                    d = y(t, c),
                                    m = (0, a.L6)(d, !1);
                                "x" === this.props.direction && "number" !== v.type && (0, i.Z)(!1);
                                var g = p.map(function (t) {
                                    var i = h(t, f),
                                        a = i.x,
                                        c = i.y,
                                        y = i.value,
                                        p = i.errorVal;
                                    if (!p) return null;
                                    var d,
                                        g,
                                        O = [];
                                    if (Array.isArray(p)) {
                                        var w = s(p, 2);
                                        (d = w[0]), (g = w[1]);
                                    } else d = g = p;
                                    if ("vertical" === r) {
                                        var x = v.scale,
                                            k = c + e,
                                            j = k + l,
                                            P = k - l,
                                            S = x(y - d),
                                            E = x(y + g);
                                        O.push({ x1: E, y1: j, x2: E, y2: P }), O.push({ x1: S, y1: k, x2: E, y2: k }), O.push({ x1: S, y1: j, x2: S, y2: P });
                                    } else if ("horizontal" === r) {
                                        var A = b.scale,
                                            z = a + e,
                                            N = z - l,
                                            C = z + l,
                                            T = A(y - d),
                                            _ = A(y + g);
                                        O.push({ x1: N, y1: _, x2: C, y2: _ }), O.push({ x1: z, y1: T, x2: z, y2: _ }), O.push({ x1: N, y1: T, x2: C, y2: T });
                                    }
                                    return n.createElement(
                                        o.m,
                                        u(
                                            {
                                                className: "recharts-errorBar",
                                                key: "bar-".concat(
                                                    O.map(function (t) {
                                                        return "".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2);
                                                    }),
                                                ),
                                            },
                                            m,
                                        ),
                                        O.map(function (t) {
                                            return n.createElement("line", u({}, t, { key: "line-".concat(t.x1, "-").concat(t.x2, "-").concat(t.y1, "-").concat(t.y2) }));
                                        }),
                                    );
                                });
                                return n.createElement(o.m, { className: "recharts-errorBars" }, g);
                            },
                        },
                    ]) && p(r.prototype, l),
                    f && p(r, f),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, l, f;
            })(n.Component);
            m(O, "defaultProps", { stroke: "black", strokeWidth: 1.5, width: 5, offset: 0, layout: "horizontal" }), m(O, "displayName", "ErrorBar");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49.e257d3aa.js.map
