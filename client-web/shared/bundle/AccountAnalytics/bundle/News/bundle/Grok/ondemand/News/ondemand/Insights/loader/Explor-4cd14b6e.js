"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"],
    {
        231533: (t, e, r) => {
            r.d(e, { V$: () => A, a3: () => z, bn: () => P, lT: () => k, w7: () => M });
            var n = r(202784),
                i = r(161049),
                o = r.n(i),
                a = r(497030),
                u = r.n(a),
                c = r(304335),
                l = r.n(c),
                f = r(818149),
                s = r.n(f),
                p = r(143624),
                d = r(159067),
                y = r(121844),
                h = r(284618),
                v = r(859947),
                b = ["option", "shapeType", "propTransformer", "activeClassName", "isActive"];
            function m(t) {
                return (
                    (m =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    m(t)
                );
            }
            function g(t, e) {
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
            function O(t, e) {
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
            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? O(Object(r), !0).forEach(function (e) {
                              j(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : O(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function j(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != m(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != m(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == m(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function x(t, e) {
                return w(w({}, e), t);
            }
            function S(t) {
                var e = t.shapeType,
                    r = t.elementProps;
                switch (e) {
                    case "rectangle":
                        return n.createElement(p.A, r);
                    case "trapezoid":
                        return n.createElement(d.Z, r);
                    case "sector":
                        return n.createElement(y.L, r);
                    case "symbols":
                        if (
                            (function (t) {
                                return "symbols" === t;
                            })(e)
                        )
                            return n.createElement(v.v, r);
                        break;
                    default:
                        return null;
                }
            }
            function P(t) {
                var e,
                    r = t.option,
                    i = t.shapeType,
                    a = t.propTransformer,
                    c = void 0 === a ? x : a,
                    f = t.activeClassName,
                    s = void 0 === f ? "recharts-active-shape" : f,
                    p = t.isActive,
                    d = g(t, b);
                if ((0, n.isValidElement)(r))
                    e = (0, n.cloneElement)(
                        r,
                        w(
                            w({}, d),
                            (function (t) {
                                return (0, n.isValidElement)(t) ? t.props : t;
                            })(r),
                        ),
                    );
                else if (o()(r)) e = r(d);
                else if (u()(r) && !l()(r)) {
                    var y = c(r, d);
                    e = n.createElement(S, { shapeType: i, elementProps: y });
                } else {
                    var v = d;
                    e = n.createElement(S, { shapeType: i, elementProps: v });
                }
                return p ? n.createElement(h.m, { className: s }, e) : e;
            }
            function k(t, e) {
                return null != e && "trapezoids" in t.props;
            }
            function A(t, e) {
                return null != e && "sectors" in t.props;
            }
            function M(t, e) {
                return null != e && "points" in t.props;
            }
            function E(t, e) {
                var r,
                    n,
                    i = t.x === (null == e || null === (r = e.labelViewBox) || void 0 === r ? void 0 : r.x) || t.x === e.x,
                    o = t.y === (null == e || null === (n = e.labelViewBox) || void 0 === n ? void 0 : n.y) || t.y === e.y;
                return i && o;
            }
            function T(t, e) {
                var r = t.endAngle === e.endAngle,
                    n = t.startAngle === e.startAngle;
                return r && n;
            }
            function D(t, e) {
                var r = t.x === e.x,
                    n = t.y === e.y,
                    i = t.z === e.z;
                return r && n && i;
            }
            function z(t) {
                var e = t.activeTooltipItem,
                    r = t.graphicalItem,
                    n = t.itemData,
                    i = (function (t, e) {
                        var r;
                        return k(t, e) ? (r = "trapezoids") : A(t, e) ? (r = "sectors") : M(t, e) && (r = "points"), r;
                    })(r, e),
                    o = (function (t, e) {
                        var r, n;
                        return k(t, e) ? (null === (r = e.tooltipPayload) || void 0 === r || null === (r = r[0]) || void 0 === r || null === (r = r.payload) || void 0 === r ? void 0 : r.payload) : A(t, e) ? (null === (n = e.tooltipPayload) || void 0 === n || null === (n = n[0]) || void 0 === n || null === (n = n.payload) || void 0 === n ? void 0 : n.payload) : M(t, e) ? e.payload : {};
                    })(r, e),
                    a = n.filter(function (t, n) {
                        var a = s()(o, t),
                            u = r.props[i].filter(function (t) {
                                var n = (function (t, e) {
                                    var r;
                                    return k(t, e) ? (r = E) : A(t, e) ? (r = T) : M(t, e) && (r = D), r;
                                })(r, e);
                                return n(t, e);
                            }),
                            c = r.props[i].indexOf(u[u.length - 1]);
                        return a && n === c;
                    });
                return n.indexOf(a[a.length - 1]);
            }
        },
        476830: (t, e, r) => {
            r.d(e, { A: () => h, O: () => y });
            var n = r(202784),
                i = r(611534),
                o = r(231533),
                a = ["x", "y"];
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
            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? l(Object(r), !0).forEach(function (e) {
                              s(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : l(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function s(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != u(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != u(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == u(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function p(t, e) {
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
            function d(t, e) {
                var r = t.x,
                    n = t.y,
                    i = p(t, a),
                    o = "".concat(r),
                    u = parseInt(o, 10),
                    c = "".concat(n),
                    l = parseInt(c, 10),
                    s = "".concat(e.height || i.height),
                    d = parseInt(s, 10),
                    y = "".concat(e.width || i.width),
                    h = parseInt(y, 10);
                return f(f(f(f(f({}, e), i), u ? { x: u } : {}), l ? { y: l } : {}), {}, { height: d, width: h, name: e.name, radius: e.radius });
            }
            function y(t) {
                return n.createElement(o.bn, c({ shapeType: "rectangle", propTransformer: d, activeClassName: "recharts-active-bar" }, t));
            }
            var h = function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                return function (r, n) {
                    if ("number" == typeof t) return t;
                    var o = "number" == typeof r;
                    return o ? t(r, n) : (o || (0, i.Z)(!1), e);
                };
            };
        },
        969524: (t, e, r) => {
            r.d(e, { Ky: () => w, O1: () => m, _b: () => g, t9: () => b, xE: () => j });
            var n = r(534519),
                i = r.n(n),
                o = r(539794),
                a = r.n(o),
                u = r(547247),
                c = r(179376),
                l = r(715027),
                f = r(324908);
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
            function p(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, v(n.key), n);
                }
            }
            function d(t, e) {
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
            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? d(Object(r), !0).forEach(function (e) {
                              h(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : d(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function h(t, e, r) {
                return (e = v(e)) in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r), t;
            }
            function v(t) {
                var e = (function (t, e) {
                    if ("object" != s(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" == s(e) ? e : e + "";
            }
            var b = function (t, e, r, n, i) {
                    var o = t.width,
                        a = t.height,
                        s = t.layout,
                        p = t.children,
                        d = Object.keys(e),
                        v = { left: r.left, leftMirror: r.left, right: o - r.right, rightMirror: o - r.right, top: r.top, topMirror: r.top, bottom: a - r.bottom, bottomMirror: a - r.bottom },
                        b = !!(0, c.sP)(p, f.$);
                    return d.reduce(function (o, a) {
                        var c,
                            f,
                            p,
                            d,
                            m,
                            g = e[a],
                            O = g.orientation,
                            w = g.domain,
                            j = g.padding,
                            x = void 0 === j ? {} : j,
                            S = g.mirror,
                            P = g.reversed,
                            k = "".concat(O).concat(S ? "Mirror" : "");
                        if ("number" === g.type && ("gap" === g.padding || "no-gap" === g.padding)) {
                            var A = w[1] - w[0],
                                M = 1 / 0,
                                E = g.categoricalDomain.sort();
                            if (
                                (E.forEach(function (t, e) {
                                    e > 0 && (M = Math.min((t || 0) - (E[e - 1] || 0), M));
                                }),
                                Number.isFinite(M))
                            ) {
                                var T = M / A,
                                    D = "vertical" === g.layout ? r.height : r.width;
                                if (("gap" === g.padding && (c = (T * D) / 2), "no-gap" === g.padding)) {
                                    var z = (0, l.h1)(t.barCategoryGap, T * D),
                                        I = (T * D) / 2;
                                    c = I - z - ((I - z) / D) * z;
                                }
                            }
                        }
                        (f = "xAxis" === n ? [r.left + (x.left || 0) + (c || 0), r.left + r.width - (x.right || 0) - (c || 0)] : "yAxis" === n ? ("horizontal" === s ? [r.top + r.height - (x.bottom || 0), r.top + (x.top || 0)] : [r.top + (x.top || 0) + (c || 0), r.top + r.height - (x.bottom || 0) - (c || 0)]) : g.range), P && (f = [f[1], f[0]]);
                        var C = (0, u.Hq)(g, i, b),
                            N = C.scale,
                            L = C.realScaleType;
                        N.domain(w).range(f), (0, u.zF)(N);
                        var G = (0, u.g$)(N, y(y({}, g), {}, { realScaleType: L }));
                        "xAxis" === n ? ((m = ("top" === O && !S) || ("bottom" === O && S)), (p = r.left), (d = v[k] - m * g.height)) : "yAxis" === n && ((m = ("left" === O && !S) || ("right" === O && S)), (p = v[k] - m * g.width), (d = r.top));
                        var Z = y(y(y({}, g), G), {}, { realScaleType: L, x: p, y: d, scale: N, width: "xAxis" === n ? r.width : g.width, height: "yAxis" === n ? r.height : g.height });
                        return (Z.bandSize = (0, u.zT)(Z, G)), g.hide || "xAxis" !== n ? g.hide || (v[k] += (m ? -1 : 1) * Z.width) : (v[k] += (m ? -1 : 1) * Z.height), y(y({}, o), {}, h({}, a, Z));
                    }, {});
                },
                m = function (t, e) {
                    var r = t.x,
                        n = t.y,
                        i = e.x,
                        o = e.y;
                    return { x: Math.min(r, i), y: Math.min(n, o), width: Math.abs(i - r), height: Math.abs(o - n) };
                },
                g = function (t) {
                    var e = t.x1,
                        r = t.y1,
                        n = t.x2,
                        i = t.y2;
                    return m({ x: e, y: r }, { x: n, y: i });
                },
                O = (function () {
                    function t(e) {
                        !(function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                            (this.scale = e);
                    }
                    return (
                        (e = t),
                        (r = [
                            {
                                key: "domain",
                                get: function () {
                                    return this.scale.domain;
                                },
                            },
                            {
                                key: "range",
                                get: function () {
                                    return this.scale.range;
                                },
                            },
                            {
                                key: "rangeMin",
                                get: function () {
                                    return this.range()[0];
                                },
                            },
                            {
                                key: "rangeMax",
                                get: function () {
                                    return this.range()[1];
                                },
                            },
                            {
                                key: "bandwidth",
                                get: function () {
                                    return this.scale.bandwidth;
                                },
                            },
                            {
                                key: "apply",
                                value: function (t) {
                                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                        r = e.bandAware,
                                        n = e.position;
                                    if (void 0 !== t) {
                                        if (n)
                                            switch (n) {
                                                case "start":
                                                default:
                                                    return this.scale(t);
                                                case "middle":
                                                    var i = this.bandwidth ? this.bandwidth() / 2 : 0;
                                                    return this.scale(t) + i;
                                                case "end":
                                                    var o = this.bandwidth ? this.bandwidth() : 0;
                                                    return this.scale(t) + o;
                                            }
                                        if (r) {
                                            var a = this.bandwidth ? this.bandwidth() / 2 : 0;
                                            return this.scale(t) + a;
                                        }
                                        return this.scale(t);
                                    }
                                },
                            },
                            {
                                key: "isInRange",
                                value: function (t) {
                                    var e = this.range(),
                                        r = e[0],
                                        n = e[e.length - 1];
                                    return r <= n ? t >= r && t <= n : t >= n && t <= r;
                                },
                            },
                        ]),
                        (n = [
                            {
                                key: "create",
                                value: function (e) {
                                    return new t(e);
                                },
                            },
                        ]),
                        r && p(e.prototype, r),
                        n && p(e, n),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        e
                    );
                    var e, r, n;
                })();
            h(O, "EPS", 1e-4);
            var w = function (t) {
                var e = Object.keys(t).reduce(function (e, r) {
                    return y(y({}, e), {}, h({}, r, O.create(t[r])));
                }, {});
                return y(
                    y({}, e),
                    {},
                    {
                        apply: function (t) {
                            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.bandAware,
                                o = r.position;
                            return i()(t, function (t, r) {
                                return e[r].apply(t, { bandAware: n, position: o });
                            });
                        },
                        isInRange: function (t) {
                            return a()(t, function (t, r) {
                                return e[r].isInRange(t);
                            });
                        },
                    },
                );
            };
            var j = function (t) {
                var e = t.width,
                    r = t.height,
                    n = (function (t) {
                        return ((t % 180) + 180) % 180;
                    })(arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0),
                    i = (n * Math.PI) / 180,
                    o = Math.atan(r / e),
                    a = i > o && i < Math.PI - o ? r / Math.sin(i) : e / Math.cos(i);
                return Math.abs(a);
            };
        },
        547247: (t, e, r) => {
            r.d(e, { Bu: () => lt, By: () => J, DO: () => ot, EB: () => gt, F$: () => V, Fy: () => vt, Hq: () => at, Hv: () => ht, LG: () => jt, NA: () => et, O3: () => mt, Qo: () => Pt, Rf: () => rt, VO: () => W, Vv: () => ft, Yj: () => bt, ZI: () => X, fk: () => q, g$: () => yt, gF: () => R, ko: () => St, pt: () => U, qz: () => H, s6: () => tt, uY: () => nt, wh: () => dt, zF: () => ct, zT: () => xt });
            var n = r(199620),
                i = r(478622),
                o = r(970201),
                a = r(34152),
                u = r(13236),
                c = r(479880),
                l = r(460344),
                f = r(601106),
                s = r(191233),
                p = r(371644),
                d = r.n(p),
                y = r(165680),
                h = r.n(y),
                v = r(301842),
                b = r.n(v),
                m = r(161049),
                g = r.n(m),
                O = r(785505),
                w = r.n(O),
                j = r(72579),
                x = r.n(j),
                S = r(835838),
                P = r.n(S),
                k = r(616951),
                A = r.n(k),
                M = r(823779),
                E = r.n(M),
                T = r(818149),
                D = r.n(T),
                z = r(900829),
                I = r.n(z),
                C = r(896928),
                N = r(118694),
                L = r(715027),
                G = r(179376),
                Z = r(912076);
            function B(t) {
                return (
                    (B =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    B(t)
                );
            }
            function K(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return _(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return _(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return _(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function _(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            function Y(t, e) {
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
            function $(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Y(Object(r), !0).forEach(function (e) {
                              F(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : Y(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function F(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != B(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != B(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == B(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            function V(t, e, r) {
                return b()(t) || b()(e) ? r : (0, L.P2)(e) ? x()(t, e, r) : g()(e) ? e(t) : r;
            }
            function R(t, e, r, n) {
                var i = P()(t, function (t) {
                    return V(t, e);
                });
                if ("number" === r) {
                    var o = i.filter(function (t) {
                        return (0, L.hj)(t) || parseFloat(t);
                    });
                    return o.length ? [h()(o), d()(o)] : [1 / 0, -1 / 0];
                }
                return (
                    n
                        ? i.filter(function (t) {
                              return !b()(t);
                          })
                        : i
                ).map(function (t) {
                    return (0, L.P2)(t) || t instanceof Date ? t : "";
                });
            }
            var W = function (t) {
                    var e,
                        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        o = -1,
                        a = null !== (e = null == r ? void 0 : r.length) && void 0 !== e ? e : 0;
                    if (a <= 1) return 0;
                    if (i && "angleAxis" === i.axisType && Math.abs(Math.abs(i.range[1] - i.range[0]) - 360) <= 1e-6)
                        for (var u = i.range, c = 0; c < a; c++) {
                            var l = c > 0 ? n[c - 1].coordinate : n[a - 1].coordinate,
                                f = n[c].coordinate,
                                s = c >= a - 1 ? n[0].coordinate : n[c + 1].coordinate,
                                p = void 0;
                            if ((0, L.uY)(f - l) !== (0, L.uY)(s - f)) {
                                var d = [];
                                if ((0, L.uY)(s - f) === (0, L.uY)(u[1] - u[0])) {
                                    p = s;
                                    var y = f + u[1] - u[0];
                                    (d[0] = Math.min(y, (y + l) / 2)), (d[1] = Math.max(y, (y + l) / 2));
                                } else {
                                    p = l;
                                    var h = s + u[1] - u[0];
                                    (d[0] = Math.min(f, (h + f) / 2)), (d[1] = Math.max(f, (h + f) / 2));
                                }
                                var v = [Math.min(f, (p + f) / 2), Math.max(f, (p + f) / 2)];
                                if ((t > v[0] && t <= v[1]) || (t >= d[0] && t <= d[1])) {
                                    o = n[c].index;
                                    break;
                                }
                            } else {
                                var b = Math.min(l, s),
                                    m = Math.max(l, s);
                                if (t > (b + f) / 2 && t <= (m + f) / 2) {
                                    o = n[c].index;
                                    break;
                                }
                            }
                        }
                    else
                        for (var g = 0; g < a; g++)
                            if ((0 === g && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) || (g > 0 && g < a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2 && t <= (r[g].coordinate + r[g + 1].coordinate) / 2) || (g === a - 1 && t > (r[g].coordinate + r[g - 1].coordinate) / 2)) {
                                o = r[g].index;
                                break;
                            }
                    return o;
                },
                q = function (t) {
                    var e,
                        r,
                        n = t.type.displayName,
                        i = null !== (e = t.type) && void 0 !== e && e.defaultProps ? $($({}, t.type.defaultProps), t.props) : t.props,
                        o = i.stroke,
                        a = i.fill;
                    switch (n) {
                        case "Line":
                            r = o;
                            break;
                        case "Area":
                        case "Radar":
                            r = o && "none" !== o ? o : a;
                            break;
                        default:
                            r = a;
                    }
                    return r;
                },
                U = function (t) {
                    var e = t.barSize,
                        r = t.totalSize,
                        n = t.stackGroups,
                        i = void 0 === n ? {} : n;
                    if (!i) return {};
                    for (var o = {}, a = Object.keys(i), u = 0, c = a.length; u < c; u++)
                        for (var l = i[a[u]].stackGroups, f = Object.keys(l), s = 0, p = f.length; s < p; s++) {
                            var d = l[f[s]],
                                y = d.items,
                                h = d.cateAxisId,
                                v = y.filter(function (t) {
                                    return (0, G.Gf)(t.type).indexOf("Bar") >= 0;
                                });
                            if (v && v.length) {
                                var m = v[0].type.defaultProps,
                                    g = void 0 !== m ? $($({}, m), v[0].props) : v[0].props,
                                    O = g.barSize,
                                    w = g[h];
                                o[w] || (o[w] = []);
                                var j = b()(O) ? e : O;
                                o[w].push({ item: v[0], stackList: v.slice(1), barSize: b()(j) ? void 0 : (0, L.h1)(j, r, 0) });
                            }
                        }
                    return o;
                },
                H = function (t) {
                    var e = t.barGap,
                        r = t.barCategoryGap,
                        n = t.bandSize,
                        i = t.sizeList,
                        o = void 0 === i ? [] : i,
                        a = t.maxBarSize,
                        u = o.length;
                    if (u < 1) return null;
                    var c,
                        l = (0, L.h1)(e, n, 0, !0),
                        f = [];
                    if (o[0].barSize === +o[0].barSize) {
                        var s = !1,
                            p = n / u,
                            d = o.reduce(function (t, e) {
                                return t + e.barSize || 0;
                            }, 0);
                        (d += (u - 1) * l) >= n && ((d -= (u - 1) * l), (l = 0)), d >= n && p > 0 && ((s = !0), (d = u * (p *= 0.9)));
                        var y = { offset: (((n - d) / 2) | 0) - l, size: 0 };
                        c = o.reduce(function (t, e) {
                            var r = { item: e.item, position: { offset: y.offset + y.size + l, size: s ? p : e.barSize } },
                                n = [].concat(K(t), [r]);
                            return (
                                (y = n[n.length - 1].position),
                                e.stackList &&
                                    e.stackList.length &&
                                    e.stackList.forEach(function (t) {
                                        n.push({ item: t, position: y });
                                    }),
                                n
                            );
                        }, f);
                    } else {
                        var h = (0, L.h1)(r, n, 0, !0);
                        n - 2 * h - (u - 1) * l <= 0 && (l = 0);
                        var v = (n - 2 * h - (u - 1) * l) / u;
                        v > 1 && (v >>= 0);
                        var b = a === +a ? Math.min(v, a) : v;
                        c = o.reduce(function (t, e, r) {
                            var n = [].concat(K(t), [{ item: e.item, position: { offset: h + (v + l) * r + (v - b) / 2, size: b } }]);
                            return (
                                e.stackList &&
                                    e.stackList.length &&
                                    e.stackList.forEach(function (t) {
                                        n.push({ item: t, position: n[n.length - 1].position });
                                    }),
                                n
                            );
                        }, f);
                    }
                    return c;
                },
                J = function (t, e, r, n) {
                    var i = r.children,
                        o = r.width,
                        a = r.margin,
                        u = o - (a.left || 0) - (a.right || 0),
                        c = (0, Z.z)({ children: i, legendWidth: u });
                    if (c) {
                        var l = n || {},
                            f = l.width,
                            s = l.height,
                            p = c.align,
                            d = c.verticalAlign,
                            y = c.layout;
                        if (("vertical" === y || ("horizontal" === y && "middle" === d)) && "center" !== p && (0, L.hj)(t[p])) return $($({}, t), {}, F({}, p, t[p] + (f || 0)));
                        if (("horizontal" === y || ("vertical" === y && "center" === p)) && "middle" !== d && (0, L.hj)(t[d])) return $($({}, t), {}, F({}, d, t[d] + (s || 0)));
                    }
                    return t;
                },
                Q = function (t, e, r, n, i) {
                    var o = e.props.children,
                        a = (0, G.NN)(o, N.W).filter(function (t) {
                            return (function (t, e, r) {
                                return !!b()(e) || ("horizontal" === t ? "yAxis" === e : "vertical" === t || "x" === r ? "xAxis" === e : "y" !== r || "yAxis" === e);
                            })(n, i, t.props.direction);
                        });
                    if (a && a.length) {
                        var u = a.map(function (t) {
                            return t.props.dataKey;
                        });
                        return t.reduce(
                            function (t, e) {
                                var n = V(e, r);
                                if (b()(n)) return t;
                                var i = Array.isArray(n) ? [h()(n), d()(n)] : [n, n],
                                    o = u.reduce(
                                        function (t, r) {
                                            var n = V(e, r, 0),
                                                o = i[0] - Math.abs(Array.isArray(n) ? n[0] : n),
                                                a = i[1] + Math.abs(Array.isArray(n) ? n[1] : n);
                                            return [Math.min(o, t[0]), Math.max(a, t[1])];
                                        },
                                        [1 / 0, -1 / 0],
                                    );
                                return [Math.min(o[0], t[0]), Math.max(o[1], t[1])];
                            },
                            [1 / 0, -1 / 0],
                        );
                    }
                    return null;
                },
                X = function (t, e, r, n, i) {
                    var o = e
                        .map(function (e) {
                            return Q(t, e, r, i, n);
                        })
                        .filter(function (t) {
                            return !b()(t);
                        });
                    return o && o.length
                        ? o.reduce(
                              function (t, e) {
                                  return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                              },
                              [1 / 0, -1 / 0],
                          )
                        : null;
                },
                tt = function (t, e, r, n, i) {
                    var o = e.map(function (e) {
                        var o = e.props.dataKey;
                        return ("number" === r && o && Q(t, e, o, n)) || R(t, o, r, i);
                    });
                    if ("number" === r)
                        return o.reduce(
                            function (t, e) {
                                return [Math.min(t[0], e[0]), Math.max(t[1], e[1])];
                            },
                            [1 / 0, -1 / 0],
                        );
                    var a = {};
                    return o.reduce(function (t, e) {
                        for (var r = 0, n = e.length; r < n; r++) a[e[r]] || ((a[e[r]] = !0), t.push(e[r]));
                        return t;
                    }, []);
                },
                et = function (t, e) {
                    return ("horizontal" === t && "xAxis" === e) || ("vertical" === t && "yAxis" === e) || ("centric" === t && "angleAxis" === e) || ("radial" === t && "radiusAxis" === e);
                },
                rt = function (t, e, r, n) {
                    if (n)
                        return t.map(function (t) {
                            return t.coordinate;
                        });
                    var i,
                        o,
                        a = t.map(function (t) {
                            return t.coordinate === e && (i = !0), t.coordinate === r && (o = !0), t.coordinate;
                        });
                    return i || a.push(e), o || a.push(r), a;
                },
                nt = function (t, e, r) {
                    if (!t) return null;
                    var n = t.scale,
                        i = t.duplicateDomain,
                        o = t.type,
                        a = t.range,
                        u = "scaleBand" === t.realScaleType ? n.bandwidth() / 2 : 2,
                        c = (e || r) && "category" === o && n.bandwidth ? n.bandwidth() / u : 0;
                    return (
                        (c = "angleAxis" === t.axisType && (null == a ? void 0 : a.length) >= 2 ? 2 * (0, L.uY)(a[0] - a[1]) * c : c),
                        e && (t.ticks || t.niceTicks)
                            ? (t.ticks || t.niceTicks)
                                  .map(function (t) {
                                      var e = i ? i.indexOf(t) : t;
                                      return { coordinate: n(e) + c, value: t, offset: c };
                                  })
                                  .filter(function (t) {
                                      return !A()(t.coordinate);
                                  })
                            : t.isCategorical && t.categoricalDomain
                              ? t.categoricalDomain.map(function (t, e) {
                                    return { coordinate: n(t) + c, value: t, index: e, offset: c };
                                })
                              : n.ticks && !r
                                ? n.ticks(t.tickCount).map(function (t) {
                                      return { coordinate: n(t) + c, value: t, offset: c };
                                  })
                                : n.domain().map(function (t, e) {
                                      return { coordinate: n(t) + c, value: i ? i[t] : t, index: e, offset: c };
                                  })
                    );
                },
                it = new WeakMap(),
                ot = function (t, e) {
                    if ("function" != typeof e) return t;
                    it.has(t) || it.set(t, new WeakMap());
                    var r = it.get(t);
                    if (r.has(e)) return r.get(e);
                    var n = function () {
                        t.apply(void 0, arguments), e.apply(void 0, arguments);
                    };
                    return r.set(e, n), n;
                },
                at = function (t, e, r) {
                    var a = t.scale,
                        u = t.type,
                        c = t.layout,
                        l = t.axisType;
                    if ("auto" === a) return "radial" === c && "radiusAxis" === l ? { scale: n.Z(), realScaleType: "band" } : "radial" === c && "angleAxis" === l ? { scale: i.Z(), realScaleType: "linear" } : "category" === u && e && (e.indexOf("LineChart") >= 0 || e.indexOf("AreaChart") >= 0 || (e.indexOf("ComposedChart") >= 0 && !r)) ? { scale: n.x(), realScaleType: "point" } : "category" === u ? { scale: n.Z(), realScaleType: "band" } : { scale: i.Z(), realScaleType: "linear" };
                    if (w()(a)) {
                        var f = "scale".concat(E()(a));
                        return { scale: (o[f] || n.x)(), realScaleType: o[f] ? f : "point" };
                    }
                    return g()(a) ? { scale: a } : { scale: n.x(), realScaleType: "point" };
                },
                ut = 1e-4,
                ct = function (t) {
                    var e = t.domain();
                    if (e && !(e.length <= 2)) {
                        var r = e.length,
                            n = t.range(),
                            i = Math.min(n[0], n[1]) - ut,
                            o = Math.max(n[0], n[1]) + ut,
                            a = t(e[0]),
                            u = t(e[r - 1]);
                        (a < i || a > o || u < i || u > o) && t.domain([e[0], e[r - 1]]);
                    }
                },
                lt = function (t, e) {
                    if (!t) return null;
                    for (var r = 0, n = t.length; r < n; r++) if (t[r].item === e) return t[r].position;
                    return null;
                },
                ft = function (t, e) {
                    if (!e || 2 !== e.length || !(0, L.hj)(e[0]) || !(0, L.hj)(e[1])) return t;
                    var r = Math.min(e[0], e[1]),
                        n = Math.max(e[0], e[1]),
                        i = [t[0], t[1]];
                    return (!(0, L.hj)(t[0]) || t[0] < r) && (i[0] = r), (!(0, L.hj)(t[1]) || t[1] > n) && (i[1] = n), i[0] > n && (i[0] = n), i[1] < r && (i[1] = r), i;
                },
                st = {
                    sign: function (t) {
                        var e = t.length;
                        if (!(e <= 0))
                            for (var r = 0, n = t[0].length; r < n; ++r)
                                for (var i = 0, o = 0, a = 0; a < e; ++a) {
                                    var u = A()(t[a][r][1]) ? t[a][r][0] : t[a][r][1];
                                    u >= 0 ? ((t[a][r][0] = i), (t[a][r][1] = i + u), (i = t[a][r][1])) : ((t[a][r][0] = o), (t[a][r][1] = o + u), (o = t[a][r][1]));
                                }
                    },
                    expand: a.Z,
                    none: u.Z,
                    silhouette: c.Z,
                    wiggle: l.Z,
                    positive: function (t) {
                        var e = t.length;
                        if (!(e <= 0))
                            for (var r = 0, n = t[0].length; r < n; ++r)
                                for (var i = 0, o = 0; o < e; ++o) {
                                    var a = A()(t[o][r][1]) ? t[o][r][0] : t[o][r][1];
                                    a >= 0 ? ((t[o][r][0] = i), (t[o][r][1] = i + a), (i = t[o][r][1])) : ((t[o][r][0] = 0), (t[o][r][1] = 0));
                                }
                    },
                },
                pt = function (t, e, r) {
                    var n = e.map(function (t) {
                            return t.props.dataKey;
                        }),
                        i = st[r];
                    return (0, f.Z)()
                        .keys(n)
                        .value(function (t, e) {
                            return +V(t, e, 0);
                        })
                        .order(s.Z)
                        .offset(i)(t);
                },
                dt = function (t, e, r, n, i, o) {
                    if (!t) return null;
                    var a = (o ? e.reverse() : e).reduce(function (t, e) {
                        var i,
                            o = null !== (i = e.type) && void 0 !== i && i.defaultProps ? $($({}, e.type.defaultProps), e.props) : e.props,
                            a = o.stackId;
                        if (o.hide) return t;
                        var u = o[r],
                            c = t[u] || { hasStack: !1, stackGroups: {} };
                        if ((0, L.P2)(a)) {
                            var l = c.stackGroups[a] || { numericAxisId: r, cateAxisId: n, items: [] };
                            l.items.push(e), (c.hasStack = !0), (c.stackGroups[a] = l);
                        } else c.stackGroups[(0, L.EL)("_stackId_")] = { numericAxisId: r, cateAxisId: n, items: [e] };
                        return $($({}, t), {}, F({}, u, c));
                    }, {});
                    return Object.keys(a).reduce(function (e, o) {
                        var u = a[o];
                        if (u.hasStack) {
                            u.stackGroups = Object.keys(u.stackGroups).reduce(function (e, o) {
                                var a = u.stackGroups[o];
                                return $($({}, e), {}, F({}, o, { numericAxisId: r, cateAxisId: n, items: a.items, stackedData: pt(t, a.items, i) }));
                            }, {});
                        }
                        return $($({}, e), {}, F({}, o, u));
                    }, {});
                },
                yt = function (t, e) {
                    var r = e.realScaleType,
                        n = e.type,
                        i = e.tickCount,
                        o = e.originalDomain,
                        a = e.allowDecimals,
                        u = r || e.scale;
                    if ("auto" !== u && "linear" !== u) return null;
                    if (i && "number" === n && o && ("auto" === o[0] || "auto" === o[1])) {
                        var c = t.domain();
                        if (!c.length) return null;
                        var l = (0, C.Zj)(c, i, a);
                        return t.domain([h()(l), d()(l)]), { niceTicks: l };
                    }
                    if (i && "number" === n) {
                        var f = t.domain();
                        return { niceTicks: (0, C.wZ)(f, i, a) };
                    }
                    return null;
                };
            function ht(t) {
                var e = t.axis,
                    r = t.ticks,
                    n = t.bandSize,
                    i = t.entry,
                    o = t.index,
                    a = t.dataKey;
                if ("category" === e.type) {
                    if (!e.allowDuplicatedCategory && e.dataKey && !b()(i[e.dataKey])) {
                        var u = (0, L.Ap)(r, "value", i[e.dataKey]);
                        if (u) return u.coordinate + n / 2;
                    }
                    return r[o] ? r[o].coordinate + n / 2 : null;
                }
                var c = V(i, b()(a) ? e.dataKey : a);
                return b()(c) ? null : e.scale(c);
            }
            var vt = function (t) {
                    var e = t.axis,
                        r = t.ticks,
                        n = t.offset,
                        i = t.bandSize,
                        o = t.entry,
                        a = t.index;
                    if ("category" === e.type) return r[a] ? r[a].coordinate + n : null;
                    var u = V(o, e.dataKey, e.domain[a]);
                    return b()(u) ? null : e.scale(u) - i / 2 + n;
                },
                bt = function (t) {
                    var e = t.numericAxis,
                        r = e.scale.domain();
                    if ("number" === e.type) {
                        var n = Math.min(r[0], r[1]),
                            i = Math.max(r[0], r[1]);
                        return n <= 0 && i >= 0 ? 0 : i < 0 ? i : n;
                    }
                    return r[0];
                },
                mt = function (t, e) {
                    var r,
                        n = (null !== (r = t.type) && void 0 !== r && r.defaultProps ? $($({}, t.type.defaultProps), t.props) : t.props).stackId;
                    if ((0, L.P2)(n)) {
                        var i = e[n];
                        if (i) {
                            var o = i.items.indexOf(t);
                            return o >= 0 ? i.stackedData[o] : null;
                        }
                    }
                    return null;
                },
                gt = function (t, e, r) {
                    return Object.keys(t)
                        .reduce(
                            function (n, i) {
                                var o = t[i].stackedData.reduce(
                                    function (t, n) {
                                        var i = n.slice(e, r + 1).reduce(
                                            function (t, e) {
                                                return [h()(e.concat([t[0]]).filter(L.hj)), d()(e.concat([t[1]]).filter(L.hj))];
                                            },
                                            [1 / 0, -1 / 0],
                                        );
                                        return [Math.min(t[0], i[0]), Math.max(t[1], i[1])];
                                    },
                                    [1 / 0, -1 / 0],
                                );
                                return [Math.min(o[0], n[0]), Math.max(o[1], n[1])];
                            },
                            [1 / 0, -1 / 0],
                        )
                        .map(function (t) {
                            return t === 1 / 0 || t === -1 / 0 ? 0 : t;
                        });
                },
                Ot = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                wt = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/,
                jt = function (t, e, r) {
                    if (g()(t)) return t(e, r);
                    if (!Array.isArray(t)) return e;
                    var n = [];
                    if ((0, L.hj)(t[0])) n[0] = r ? t[0] : Math.min(t[0], e[0]);
                    else if (Ot.test(t[0])) {
                        var i = +Ot.exec(t[0])[1];
                        n[0] = e[0] - i;
                    } else g()(t[0]) ? (n[0] = t[0](e[0])) : (n[0] = e[0]);
                    if ((0, L.hj)(t[1])) n[1] = r ? t[1] : Math.max(t[1], e[1]);
                    else if (wt.test(t[1])) {
                        var o = +wt.exec(t[1])[1];
                        n[1] = e[1] + o;
                    } else g()(t[1]) ? (n[1] = t[1](e[1])) : (n[1] = e[1]);
                    return n;
                },
                xt = function (t, e, r) {
                    if (t && t.scale && t.scale.bandwidth) {
                        var n = t.scale.bandwidth();
                        if (!r || n > 0) return n;
                    }
                    if (t && e && e.length >= 2) {
                        for (
                            var i = I()(e, function (t) {
                                    return t.coordinate;
                                }),
                                o = 1 / 0,
                                a = 1,
                                u = i.length;
                            a < u;
                            a++
                        ) {
                            var c = i[a],
                                l = i[a - 1];
                            o = Math.min((c.coordinate || 0) - (l.coordinate || 0), o);
                        }
                        return o === 1 / 0 ? 0 : o;
                    }
                    return r ? void 0 : 0;
                },
                St = function (t, e, r) {
                    return t && t.length ? (D()(t, x()(r, "type.defaultProps.domain")) ? e : t) : e;
                },
                Pt = function (t, e) {
                    var r = t.type.defaultProps ? $($({}, t.type.defaultProps), t.props) : t.props,
                        n = r.dataKey,
                        i = r.name,
                        o = r.unit,
                        a = r.formatter,
                        u = r.tooltipType,
                        c = r.chartType,
                        l = r.hide;
                    return $($({}, (0, G.L6)(t, !1)), {}, { dataKey: n, unit: o, formatter: a, name: i || n, color: q(t), value: V(e, n), type: u, payload: e, chartType: c, hide: l });
                };
        },
        68532: (t, e, r) => {
            function n(t) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    n(t)
                );
            }
            function i(t, e) {
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
            function o(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? i(Object(r), !0).forEach(function (e) {
                              a(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : i(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function a(t, e, r) {
                var i;
                return (
                    (i = (function (t, e) {
                        if ("object" != n(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var i = r.call(t, e || "default");
                            if ("object" != n(i)) return i;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == n(i) ? i : i + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            r.d(e, { g: () => c });
            var u = ["Webkit", "Moz", "O", "ms"],
                c = function (t, e) {
                    if (!t) return null;
                    var r = t.replace(/(\w)/, function (t) {
                            return t.toUpperCase();
                        }),
                        n = u.reduce(function (t, n) {
                            return o(o({}, t), {}, a({}, n + r, e));
                        }, {});
                    return (n[t] = e), n;
                };
        },
        188089: (t, e, r) => {
            r.d(e, { os: () => p, xE: () => s });
            var n = r(179499);
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
            function o(t, e) {
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
            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? o(Object(r), !0).forEach(function (e) {
                              u(t, e, r[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                          : o(Object(r)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                            });
                }
                return t;
            }
            function u(t, e, r) {
                var n;
                return (
                    (n = (function (t, e) {
                        if ("object" != i(t) || !t) return t;
                        var r = t[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(t, e || "default");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === e ? String : Number)(t);
                    })(e, "string")),
                    (e = "symbol" == i(n) ? n : n + "") in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = r),
                    t
                );
            }
            var c = { widthCache: {}, cacheCount: 0 },
                l = { position: "absolute", top: "-20000px", left: 0, padding: 0, margin: 0, border: "none", whiteSpace: "pre" },
                f = "recharts_measurement_span";
            var s = function (t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (null == t || n.x.isSsr) return { width: 0, height: 0 };
                    var r,
                        i =
                            ((r = a({}, e)),
                            Object.keys(r).forEach(function (t) {
                                r[t] || delete r[t];
                            }),
                            r),
                        o = JSON.stringify({ text: t, copyStyle: i });
                    if (c.widthCache[o]) return c.widthCache[o];
                    try {
                        var u = document.getElementById(f);
                        u || ((u = document.createElement("span")).setAttribute("id", f), u.setAttribute("aria-hidden", "true"), document.body.appendChild(u));
                        var s = a(a({}, l), i);
                        Object.assign(u.style, s), (u.textContent = "".concat(t));
                        var p = u.getBoundingClientRect(),
                            d = { width: p.width, height: p.height };
                        return (c.widthCache[o] = d), ++c.cacheCount > 2e3 && ((c.cacheCount = 0), (c.widthCache = {})), d;
                    } catch (t) {
                        return { width: 0, height: 0 };
                    }
                },
                p = function (t) {
                    return { top: t.top + window.scrollY - document.documentElement.clientTop, left: t.left + window.scrollX - document.documentElement.clientLeft };
                };
        },
        715027: (t, e, r) => {
            r.d(e, { Ap: () => w, EL: () => v, Kt: () => m, P2: () => y, bv: () => g, h1: () => b, hU: () => p, hj: () => d, k4: () => O, uY: () => s });
            var n = r(785505),
                i = r.n(n),
                o = r(616951),
                a = r.n(o),
                u = r(72579),
                c = r.n(u),
                l = r(680537),
                f = r.n(l),
                s = function (t) {
                    return 0 === t ? 0 : t > 0 ? 1 : -1;
                },
                p = function (t) {
                    return i()(t) && t.indexOf("%") === t.length - 1;
                },
                d = function (t) {
                    return f()(t) && !a()(t);
                },
                y = function (t) {
                    return d(t) || i()(t);
                },
                h = 0,
                v = function (t) {
                    var e = ++h;
                    return "".concat(t || "").concat(e);
                },
                b = function (t, e) {
                    var r,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (!d(t) && !i()(t)) return n;
                    if (p(t)) {
                        var u = t.indexOf("%");
                        r = (e * parseFloat(t.slice(0, u))) / 100;
                    } else r = +t;
                    return a()(r) && (r = n), o && r > e && (r = e), r;
                },
                m = function (t) {
                    if (!t) return null;
                    var e = Object.keys(t);
                    return e && e.length ? t[e[0]] : null;
                },
                g = function (t) {
                    if (!Array.isArray(t)) return !1;
                    for (var e = t.length, r = {}, n = 0; n < e; n++) {
                        if (r[t[n]]) return !0;
                        r[t[n]] = !0;
                    }
                    return !1;
                },
                O = function (t, e) {
                    return d(t) && d(e)
                        ? function (r) {
                              return t + r * (e - t);
                          }
                        : function () {
                              return e;
                          };
                };
            function w(t, e, r) {
                return t && t.length
                    ? t.find(function (t) {
                          return t && ("function" == typeof e ? e(t) : c()(t, e)) === r;
                      })
                    : null;
            }
        },
        648309: (t, e, r) => {
            r.d(e, { _: () => s });
            var n = r(815045),
                i = r(730840),
                o = r(533618),
                a = r(729816),
                u = r(179376),
                c = r(715027);
            function l(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return f(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return f(t, e);
                        var r = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === r && t.constructor && (r = t.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(t);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return f(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }
            var s = function (t, e, r, f, s) {
                var p = (0, u.NN)(t, i.d),
                    d = (0, u.NN)(t, n.q),
                    y = [].concat(l(p), l(d)),
                    h = (0, u.NN)(t, o.z),
                    v = "".concat(f, "Id"),
                    b = f[0],
                    m = e;
                if (
                    (y.length &&
                        (m = y.reduce(function (t, e) {
                            if (e.props[v] === r && (0, a.B)(e.props, "extendDomain") && (0, c.hj)(e.props[b])) {
                                var n = e.props[b];
                                return [Math.min(t[0], n), Math.max(t[1], n)];
                            }
                            return t;
                        }, m)),
                    h.length)
                ) {
                    var g = "".concat(b, "1"),
                        O = "".concat(b, "2");
                    m = h.reduce(function (t, e) {
                        if (e.props[v] === r && (0, a.B)(e.props, "extendDomain") && (0, c.hj)(e.props[g]) && (0, c.hj)(e.props[O])) {
                            var n = e.props[g],
                                i = e.props[O];
                            return [Math.min(t[0], n, i), Math.max(t[1], n, i)];
                        }
                        return t;
                    }, m);
                }
                return (
                    s &&
                        s.length &&
                        (m = s.reduce(function (t, e) {
                            return (0, c.hj)(e) ? [Math.min(t[0], e), Math.max(t[1], e)] : t;
                        }, m)),
                    m
                );
            };
        },
        137279: (t, e, r) => {
            r.d(e, { Y: () => o, t: () => i });
            var n = r(210161),
                i = new (r.n(n)())(),
                o = "recharts.syncMouseEvents";
        },
        179499: (t, e, r) => {
            r.d(e, { x: () => n });
            var n = {
                isSsr: !("undefined" != typeof window && window.document && window.document.createElement && window.setTimeout),
                get: function (t) {
                    return n[t];
                },
                set: function (t, e) {
                    if ("string" == typeof t) n[t] = e;
                    else {
                        var r = Object.keys(t);
                        r &&
                            r.length &&
                            r.forEach(function (e) {
                                n[e] = t[e];
                            });
                    }
                },
            };
        },
        729816: (t, e, r) => {
            r.d(e, { B: () => n });
            var n = function (t, e) {
                var r = t.alwaysShow,
                    n = t.ifOverflow;
                return r && (n = "extendDomain"), n === e;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e.1063aafa.js.map
