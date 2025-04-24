"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-27545368"],
    {
        691745: (e, t, r) => {
            r.d(t, { Z: () => n });
            var n = function (e, t) {
                for (var r = arguments.length, n = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) n[o - 2] = arguments[o];
            };
        },
        122089: (e, t, r) => {
            r.d(t, { $4: () => b, $S: () => P, Wk: () => m, op: () => g, t9: () => C, z3: () => x });
            var n = r(301842),
                o = r.n(n),
                a = r(202784),
                i = r(161049),
                u = r.n(i),
                l = r(715027),
                c = r(547247);
            function s(e) {
                return (
                    (s =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    s(e)
                );
            }
            function f(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? f(Object(r), !0).forEach(function (t) {
                              y(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : f(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function y(e, t, r) {
                var n;
                return (
                    (n = (function (e, t) {
                        if ("object" != s(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != s(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == s(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
            }
            function d(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var n,
                                o,
                                a,
                                i,
                                u = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                            } catch (e) {
                                (c = !0), (o = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return u;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return h(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function h(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var m = Math.PI / 180,
                v = function (e) {
                    return (180 * e) / Math.PI;
                },
                g = function (e, t, r, n) {
                    return { x: e + Math.cos(-m * n) * r, y: t + Math.sin(-m * n) * r };
                },
                b = function (e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { top: 0, right: 0, bottom: 0, left: 0 };
                    return Math.min(Math.abs(e - (r.left || 0) - (r.right || 0)), Math.abs(t - (r.top || 0) - (r.bottom || 0))) / 2;
                },
                C = function (e, t, r, n, a) {
                    var i = e.width,
                        u = e.height,
                        s = e.startAngle,
                        f = e.endAngle,
                        h = (0, l.h1)(e.cx, i, i / 2),
                        m = (0, l.h1)(e.cy, u, u / 2),
                        v = b(i, u, r),
                        g = (0, l.h1)(e.innerRadius, v, 0),
                        C = (0, l.h1)(e.outerRadius, v, 0.8 * v);
                    return Object.keys(t).reduce(function (e, r) {
                        var i,
                            u = t[r],
                            l = u.domain,
                            v = u.reversed;
                        if (o()(u.range)) "angleAxis" === n ? (i = [s, f]) : "radiusAxis" === n && (i = [g, C]), v && (i = [i[1], i[0]]);
                        else {
                            var b = d((i = u.range), 2);
                            (s = b[0]), (f = b[1]);
                        }
                        var w = (0, c.Hq)(u, a),
                            S = w.realScaleType,
                            x = w.scale;
                        x.domain(l).range(i), (0, c.zF)(x);
                        var P = (0, c.g$)(x, p(p({}, u), {}, { realScaleType: S })),
                            O = p(p(p({}, u), P), {}, { range: i, radius: C, realScaleType: S, scale: x, cx: h, cy: m, innerRadius: g, outerRadius: C, startAngle: s, endAngle: f });
                        return p(p({}, e), {}, y({}, r, O));
                    }, {});
                },
                w = function (e, t) {
                    var r,
                        n,
                        o,
                        a,
                        i,
                        u,
                        l = e.x,
                        c = e.y,
                        s = t.cx,
                        f = t.cy,
                        p = ((n = { x: s, y: f }), (o = (r = { x: l, y: c }).x), (a = r.y), (i = n.x), (u = n.y), Math.sqrt(Math.pow(o - i, 2) + Math.pow(a - u, 2)));
                    if (p <= 0) return { radius: p };
                    var y = (l - s) / p,
                        d = Math.acos(y);
                    return c > f && (d = 2 * Math.PI - d), { radius: p, angle: v(d), angleInRadian: d };
                },
                S = function (e, t) {
                    var r = t.startAngle,
                        n = t.endAngle,
                        o = Math.floor(r / 360),
                        a = Math.floor(n / 360);
                    return e + 360 * Math.min(o, a);
                },
                x = function (e, t) {
                    var r = e.x,
                        n = e.y,
                        o = w({ x: r, y: n }, t),
                        a = o.radius,
                        i = o.angle,
                        u = t.innerRadius,
                        l = t.outerRadius;
                    if (a < u || a > l) return !1;
                    if (0 === a) return !0;
                    var c,
                        s = (function (e) {
                            var t = e.startAngle,
                                r = e.endAngle,
                                n = Math.floor(t / 360),
                                o = Math.floor(r / 360),
                                a = Math.min(n, o);
                            return { startAngle: t - 360 * a, endAngle: r - 360 * a };
                        })(t),
                        f = s.startAngle,
                        y = s.endAngle,
                        d = i;
                    if (f <= y) {
                        for (; d > y; ) d -= 360;
                        for (; d < f; ) d += 360;
                        c = d >= f && d <= y;
                    } else {
                        for (; d > f; ) d -= 360;
                        for (; d < y; ) d += 360;
                        c = d >= y && d <= f;
                    }
                    return c ? p(p({}, t), {}, { radius: a, angle: S(d, t) }) : null;
                },
                P = function (e) {
                    return (0, a.isValidElement)(e) || u()(e) || "boolean" == typeof e ? "" : e.className;
                };
        },
        179376: (e, t, r) => {
            r.d(t, { $R: () => z, Bh: () => B, Gf: () => x, L6: () => L, NN: () => A, TT: () => M, eu: () => I, jf: () => T, rL: () => N, sP: () => j });
            var n = r(72579),
                o = r.n(n),
                a = r(301842),
                i = r.n(a),
                u = r(785505),
                l = r.n(u),
                c = r(161049),
                s = r.n(c),
                f = r(429259),
                p = r.n(f),
                y = r(202784),
                d = r(823393),
                h = r(715027),
                m = r(447022),
                v = r(321442),
                g = ["children"],
                b = ["children"];
            function C(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    o = (function (e, t) {
                        if (null == e) return {};
                        var r = {};
                        for (var n in e)
                            if (Object.prototype.hasOwnProperty.call(e, n)) {
                                if (t.indexOf(n) >= 0) continue;
                                r[n] = e[n];
                            }
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) (r = a[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                }
                return o;
            }
            function w(e) {
                return (
                    (w =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    w(e)
                );
            }
            var S = { click: "onClick", mousedown: "onMouseDown", mouseup: "onMouseUp", mouseover: "onMouseOver", mousemove: "onMouseMove", mouseout: "onMouseOut", mouseenter: "onMouseEnter", mouseleave: "onMouseLeave", touchcancel: "onTouchCancel", touchend: "onTouchEnd", touchmove: "onTouchMove", touchstart: "onTouchStart" },
                x = function (e) {
                    return "string" == typeof e ? e : e ? e.displayName || e.name || "Component" : "";
                },
                P = null,
                O = null,
                k = function e(t) {
                    if (t === P && Array.isArray(O)) return O;
                    var r = [];
                    return (
                        y.Children.forEach(t, function (t) {
                            i()(t) || ((0, d.isFragment)(t) ? (r = r.concat(e(t.props.children))) : r.push(t));
                        }),
                        (O = r),
                        (P = t),
                        r
                    );
                };
            function A(e, t) {
                var r = [],
                    n = [];
                return (
                    (n = Array.isArray(t)
                        ? t.map(function (e) {
                              return x(e);
                          })
                        : [x(t)]),
                    k(e).forEach(function (e) {
                        var t = o()(e, "type.displayName") || o()(e, "type.name");
                        -1 !== n.indexOf(t) && r.push(e);
                    }),
                    r
                );
            }
            function j(e, t) {
                var r = A(e, t);
                return r && r[0];
            }
            var M = function (e) {
                    if (!e || !e.props) return !1;
                    var t = e.props,
                        r = t.width,
                        n = t.height;
                    return !(!(0, h.hj)(r) || r <= 0 || !(0, h.hj)(n) || n <= 0);
                },
                D = ["a", "altGlyph", "altGlyphDef", "altGlyphItem", "animate", "animateColor", "animateMotion", "animateTransform", "circle", "clipPath", "color-profile", "cursor", "defs", "desc", "ellipse", "feBlend", "feColormatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence", "filter", "font", "font-face", "font-face-format", "font-face-name", "font-face-url", "foreignObject", "g", "glyph", "glyphRef", "hkern", "image", "line", "lineGradient", "marker", "mask", "metadata", "missing-glyph", "mpath", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "script", "set", "stop", "style", "svg", "switch", "symbol", "text", "textPath", "title", "tref", "tspan", "use", "view", "vkern"],
                E = function (e) {
                    return e && e.type && l()(e.type) && D.indexOf(e.type) >= 0;
                },
                T = function (e) {
                    return e && "object" === w(e) && "clipDot" in e;
                },
                L = function (e, t, r) {
                    if (!e || "function" == typeof e || "boolean" == typeof e) return null;
                    var n = e;
                    if (((0, y.isValidElement)(e) && (n = e.props), !p()(n))) return null;
                    var o = {};
                    return (
                        Object.keys(n).forEach(function (e) {
                            var a;
                            (function (e, t, r, n) {
                                var o,
                                    a = null !== (o = null === v.ry || void 0 === v.ry ? void 0 : v.ry[n]) && void 0 !== o ? o : [];
                                return (!s()(e) && ((n && a.includes(t)) || v.Yh.includes(t))) || (r && v.nv.includes(t));
                            })(null === (a = n) || void 0 === a ? void 0 : a[e], e, t, r) && (o[e] = n[e]);
                        }),
                        o
                    );
                },
                N = function e(t, r) {
                    if (t === r) return !0;
                    var n = y.Children.count(t);
                    if (n !== y.Children.count(r)) return !1;
                    if (0 === n) return !0;
                    if (1 === n) return R(Array.isArray(t) ? t[0] : t, Array.isArray(r) ? r[0] : r);
                    for (var o = 0; o < n; o++) {
                        var a = t[o],
                            i = r[o];
                        if (Array.isArray(a) || Array.isArray(i)) {
                            if (!e(a, i)) return !1;
                        } else if (!R(a, i)) return !1;
                    }
                    return !0;
                },
                R = function (e, t) {
                    if (i()(e) && i()(t)) return !0;
                    if (!i()(e) && !i()(t)) {
                        var r = e.props || {},
                            n = r.children,
                            o = C(r, g),
                            a = t.props || {},
                            u = a.children,
                            l = C(a, b);
                        return n && u ? (0, m.w)(o, l) && N(n, u) : !n && !u && (0, m.w)(o, l);
                    }
                    return !1;
                },
                I = function (e, t) {
                    var r = [],
                        n = {};
                    return (
                        k(e).forEach(function (e, o) {
                            if (E(e)) r.push(e);
                            else if (e) {
                                var a = x(e.type),
                                    i = t[a] || {},
                                    u = i.handler,
                                    l = i.once;
                                if (u && (!l || !n[a])) {
                                    var c = u(e, a, o);
                                    r.push(c), (n[a] = !0);
                                }
                            }
                        }),
                        r
                    );
                },
                B = function (e) {
                    var t = e && e.type;
                    return t && S[t] ? S[t] : null;
                },
                z = function (e, t) {
                    return k(t).indexOf(e);
                };
        },
        729769: (e, t, r) => {
            function n(e) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    n(e)
                );
            }
            function o(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var n,
                                o,
                                a,
                                i,
                                u = [],
                                l = !0,
                                c = !1;
                            try {
                                if (((a = (r = r.call(e)).next), 0 === t)) {
                                    if (Object(r) !== r) return;
                                    l = !1;
                                } else for (; !(l = (n = a.call(r)).done) && (u.push(n.value), u.length !== t); l = !0);
                            } catch (e) {
                                (c = !0), (o = e);
                            } finally {
                                try {
                                    if (!l && null != r.return && ((i = r.return()), Object(i) !== i)) return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return u;
                        }
                    })(e, t) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return a(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(e, t);
                    })(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function a(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function i(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n);
                }
            }
            function u(e) {
                var t = (function (e, t) {
                    if ("object" != n(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var o = r.call(e, t || "default");
                        if ("object" != n(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == n(t) ? t : t + "";
            }
            r.d(t, { w: () => b });
            var l = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
                c = /(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,
                s = /^px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q$/,
                f = /(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,
                p = { cm: 96 / 2.54, mm: 96 / 25.4, pt: 96 / 72, pc: 16, in: 96, Q: 96 / 101.6, px: 1 },
                y = Object.keys(p),
                d = "NaN";
            var h = (function () {
                function e(t, r) {
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, e),
                        (this.num = t),
                        (this.unit = r),
                        (this.num = t),
                        (this.unit = r),
                        Number.isNaN(t) && (this.unit = ""),
                        "" === r || s.test(r) || ((this.num = NaN), (this.unit = "")),
                        y.includes(r) &&
                            ((this.num = (function (e, t) {
                                return e * p[t];
                            })(t, r)),
                            (this.unit = "px"));
                }
                return (
                    (t = e),
                    (n = [
                        {
                            key: "parse",
                            value: function (t) {
                                var r,
                                    n = o(null !== (r = f.exec(t)) && void 0 !== r ? r : [], 3),
                                    a = n[1],
                                    i = n[2];
                                return new e(parseFloat(a), null != i ? i : "");
                            },
                        },
                    ]),
                    (r = [
                        {
                            key: "add",
                            value: function (t) {
                                return this.unit !== t.unit ? new e(NaN, "") : new e(this.num + t.num, this.unit);
                            },
                        },
                        {
                            key: "subtract",
                            value: function (t) {
                                return this.unit !== t.unit ? new e(NaN, "") : new e(this.num - t.num, this.unit);
                            },
                        },
                        {
                            key: "multiply",
                            value: function (t) {
                                return "" !== this.unit && "" !== t.unit && this.unit !== t.unit ? new e(NaN, "") : new e(this.num * t.num, this.unit || t.unit);
                            },
                        },
                        {
                            key: "divide",
                            value: function (t) {
                                return "" !== this.unit && "" !== t.unit && this.unit !== t.unit ? new e(NaN, "") : new e(this.num / t.num, this.unit || t.unit);
                            },
                        },
                        {
                            key: "toString",
                            value: function () {
                                return "".concat(this.num).concat(this.unit);
                            },
                        },
                        {
                            key: "isNaN",
                            value: function () {
                                return Number.isNaN(this.num);
                            },
                        },
                    ]) && i(t.prototype, r),
                    n && i(t, n),
                    Object.defineProperty(t, "prototype", { writable: !1 }),
                    t
                );
                var t, r, n;
            })();
            function m(e) {
                if (e.includes(d)) return d;
                for (var t = e; t.includes("*") || t.includes("/"); ) {
                    var r,
                        n = o(null !== (r = l.exec(t)) && void 0 !== r ? r : [], 4),
                        a = n[1],
                        i = n[2],
                        u = n[3],
                        s = h.parse(null != a ? a : ""),
                        f = h.parse(null != u ? u : ""),
                        p = "*" === i ? s.multiply(f) : s.divide(f);
                    if (p.isNaN()) return d;
                    t = t.replace(l, p.toString());
                }
                for (; t.includes("+") || /.-\d+(?:\.\d+)?/.test(t); ) {
                    var y,
                        m = o(null !== (y = c.exec(t)) && void 0 !== y ? y : [], 4),
                        v = m[1],
                        g = m[2],
                        b = m[3],
                        C = h.parse(null != v ? v : ""),
                        w = h.parse(null != b ? b : ""),
                        S = "+" === g ? C.add(w) : C.subtract(w);
                    if (S.isNaN()) return d;
                    t = t.replace(c, S.toString());
                }
                return t;
            }
            var v = /\(([^()]*)\)/;
            function g(e) {
                var t = e.replace(/\s+/g, "");
                return (
                    (t = (function (e) {
                        for (var t = e; t.includes("("); ) {
                            var r = o(v.exec(t), 2)[1];
                            t = t.replace(v, m(r));
                        }
                        return t;
                    })(t)),
                    (t = m(t))
                );
            }
            function b(e) {
                var t = (function (e) {
                    try {
                        return g(e);
                    } catch (e) {
                        return d;
                    }
                })(e.slice(5, -1));
                return t === d ? "" : t;
            }
        },
        447022: (e, t, r) => {
            function n(e, t) {
                for (var r in e) if ({}.hasOwnProperty.call(e, r) && (!{}.hasOwnProperty.call(t, r) || e[r] !== t[r])) return !1;
                for (var n in t) if ({}.hasOwnProperty.call(t, n) && !{}.hasOwnProperty.call(e, n)) return !1;
                return !0;
            }
            r.d(t, { w: () => n });
        },
        932012: (e, t, r) => {
            r.d(t, { fW: () => i, pn: () => u, t3: () => a, tR: () => l });
            var n = r(969524),
                o = r(412835);
            function a(e, t, r) {
                var o = { width: e.width + t.width, height: e.height + t.height };
                return (0, n.xE)(o, r);
            }
            function i(e, t, r) {
                var n = "width" === r,
                    o = e.x,
                    a = e.y,
                    i = e.width,
                    u = e.height;
                return 1 === t ? { start: n ? o : a, end: n ? o + i : a + u } : { start: n ? o + i : a + u, end: n ? o : a };
            }
            function u(e, t, r, n, o) {
                if (e * t < e * n || e * t > e * o) return !1;
                var a = r();
                return e * (t - (e * a) / 2 - n) >= 0 && e * (t + (e * a) / 2 - o) <= 0;
            }
            function l(e, t) {
                return (0, o.t)(e, t + 1);
            }
        },
        212875: (e, t, r) => {
            r.d(t, { Y: () => o });
            var n = r(830733),
                o = r.n(n)()(
                    function (e) {
                        return { x: e.left, y: e.top, width: e.width, height: e.height };
                    },
                    function (e) {
                        return ["l", e.left, "t", e.top, "w", e.width, "h", e.height].join("");
                    },
                );
        },
        389314: (e, t, r) => {
            r.d(t, { y: () => a });
            var n = r(122089),
                o = r(50278);
            function a(e, t, r) {
                var a, i, u, l;
                if ("horizontal" === e) (u = a = t.x), (i = r.top), (l = r.top + r.height);
                else if ("vertical" === e) (l = i = t.y), (a = r.left), (u = r.left + r.width);
                else if (null != t.cx && null != t.cy) {
                    if ("centric" !== e) return (0, o.O)(t);
                    var c = t.cx,
                        s = t.cy,
                        f = t.innerRadius,
                        p = t.outerRadius,
                        y = t.angle,
                        d = (0, n.op)(c, s, f, y),
                        h = (0, n.op)(c, s, p, y);
                    (a = d.x), (i = d.y), (u = h.x), (l = h.y);
                }
                return [
                    { x: a, y: i },
                    { x: u, y: l },
                ];
            }
        },
        881582: (e, t, r) => {
            function n(e, t, r, n) {
                var o = n / 2;
                return { stroke: "none", fill: "#ccc", x: "horizontal" === e ? t.x - o : r.left + 0.5, y: "horizontal" === e ? r.top + 0.5 : t.y - o, width: "horizontal" === e ? n : r.width - 1, height: "horizontal" === e ? r.height - 1 : n };
            }
            r.d(t, { E: () => n });
        },
        50278: (e, t, r) => {
            r.d(t, { O: () => o });
            var n = r(122089);
            function o(e) {
                var t = e.cx,
                    r = e.cy,
                    o = e.radius,
                    a = e.startAngle,
                    i = e.endAngle;
                return { points: [(0, n.op)(t, r, o, a), (0, n.op)(t, r, o, i)], cx: t, cy: r, radius: o, startAngle: a, endAngle: i };
            }
        },
        412835: (e, t, r) => {
            function n(e, t, r) {
                if (t < 1) return [];
                if (1 === t && void 0 === r) return e;
                for (var n = [], o = 0; o < e.length; o += t) {
                    if (void 0 !== r && !0 !== r(e[o])) return;
                    n.push(e[o]);
                }
                return n;
            }
            r.d(t, { t: () => n });
        },
        912076: (e, t, r) => {
            r.d(t, { z: () => s });
            var n = r(96629),
                o = r(547247),
                a = r(179376);
            function i(e) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    i(e)
                );
            }
            function u(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t &&
                        (n = n.filter(function (t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable;
                        })),
                        r.push.apply(r, n);
                }
                return r;
            }
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? u(Object(r), !0).forEach(function (t) {
                              c(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : u(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function c(e, t, r) {
                var n;
                return (
                    (n = (function (e, t) {
                        if ("object" != i(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != i(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == i(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
            }
            var s = function (e) {
                var t = e.children,
                    r = e.formattedGraphicalItems,
                    i = e.legendWidth,
                    u = e.legendContent,
                    c = (0, a.sP)(t, n.D);
                if (!c) return null;
                var s,
                    f = n.D.defaultProps,
                    p = void 0 !== f ? l(l({}, f), c.props) : {};
                return (
                    (s =
                        c.props && c.props.payload
                            ? c.props && c.props.payload
                            : "children" === u
                              ? (r || []).reduce(function (e, t) {
                                    var r = t.item,
                                        n = t.props,
                                        o = n.sectors || n.data || [];
                                    return e.concat(
                                        o.map(function (e) {
                                            return { type: c.props.iconType || r.props.legendType, value: e.name, color: e.fill, payload: e };
                                        }),
                                    );
                                }, [])
                              : (r || []).map(function (e) {
                                    var t = e.item,
                                        r = t.type.defaultProps,
                                        n = void 0 !== r ? l(l({}, r), t.props) : {},
                                        a = n.dataKey,
                                        i = n.name,
                                        u = n.legendType;
                                    return { inactive: n.hide, dataKey: a, type: p.iconType || u || "square", color: (0, o.fk)(t), value: i || a, payload: n };
                                })),
                    l(l(l({}, p), n.D.getWithHeight(c, i)), {}, { payload: s, item: c })
                );
            };
        },
        317868: (e, t, r) => {
            r.d(t, { W: () => o });
            var n = r(715027);
            function o(e, t, r) {
                if ("number" === r && !0 === t && Array.isArray(e)) {
                    var o = null == e ? void 0 : e[0],
                        a = null == e ? void 0 : e[1];
                    if (o && a && (0, n.hj)(o) && (0, n.hj)(a)) return !0;
                }
                return !1;
            }
        },
        432391: (e, t, r) => {
            r.d(t, { z: () => u });
            var n = r(984636),
                o = r.n(n),
                a = r(161049),
                i = r.n(a);
            function u(e, t, r) {
                return !0 === t ? o()(e, r) : i()(t) ? o()(e, t) : e;
            }
        },
        178474: (e, t, r) => {
            r.d(t, { qq: () => f });
            var n = r(840489),
                o = r(715027);
            function a(e) {
                return (
                    (a =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    a(e)
                );
            }
            function i(e, t, r) {
                var n;
                return (
                    (n = (function (e, t) {
                        if ("object" != a(e) || !e) return e;
                        var r = e[Symbol.toPrimitive];
                        if (void 0 !== r) {
                            var n = r.call(e, t || "default");
                            if ("object" != a(n)) return n;
                            throw new TypeError("@@toPrimitive must return a primitive value.");
                        }
                        return ("string" === t ? String : Number)(e);
                    })(t, "string")),
                    (t = "symbol" == a(n) ? n : n + "") in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r),
                    e
                );
            }
            var u = "recharts-tooltip-wrapper",
                l = { visibility: "hidden" };
            function c(e) {
                var t = e.coordinate,
                    r = e.translateX,
                    a = e.translateY;
                return (0, n.Z)(u, i(i(i(i({}, "".concat(u, "-right"), (0, o.hj)(r) && t && (0, o.hj)(t.x) && r >= t.x), "".concat(u, "-left"), (0, o.hj)(r) && t && (0, o.hj)(t.x) && r < t.x), "".concat(u, "-bottom"), (0, o.hj)(a) && t && (0, o.hj)(t.y) && a >= t.y), "".concat(u, "-top"), (0, o.hj)(a) && t && (0, o.hj)(t.y) && a < t.y));
            }
            function s(e) {
                var t = e.allowEscapeViewBox,
                    r = e.coordinate,
                    n = e.key,
                    a = e.offsetTopLeft,
                    i = e.position,
                    u = e.reverseDirection,
                    l = e.tooltipDimension,
                    c = e.viewBox,
                    s = e.viewBoxDimension;
                if (i && (0, o.hj)(i[n])) return i[n];
                var f = r[n] - l - a,
                    p = r[n] + a;
                return t[n] ? (u[n] ? f : p) : u[n] ? (f < c[n] ? Math.max(p, c[n]) : Math.max(f, c[n])) : p + l > c[n] + s ? Math.max(f, c[n]) : Math.max(p, c[n]);
            }
            function f(e) {
                var t,
                    r,
                    n = e.allowEscapeViewBox,
                    o = e.coordinate,
                    a = e.offsetTopLeft,
                    i = e.position,
                    u = e.reverseDirection,
                    f = e.tooltipBox,
                    p = e.useTranslate3d,
                    y = e.viewBox;
                return {
                    cssProperties:
                        f.height > 0 && f.width > 0 && o
                            ? (function (e) {
                                  var t = e.translateX,
                                      r = e.translateY;
                                  return { transform: e.useTranslate3d ? "translate3d(".concat(t, "px, ").concat(r, "px, 0)") : "translate(".concat(t, "px, ").concat(r, "px)") };
                              })({ translateX: (t = s({ allowEscapeViewBox: n, coordinate: o, key: "x", offsetTopLeft: a, position: i, reverseDirection: u, tooltipDimension: f.width, viewBox: y, viewBoxDimension: y.width })), translateY: (r = s({ allowEscapeViewBox: n, coordinate: o, key: "y", offsetTopLeft: a, position: i, reverseDirection: u, tooltipDimension: f.height, viewBox: y, viewBoxDimension: y.height })), useTranslate3d: p })
                            : l,
                    cssClasses: c({ translateX: t, translateY: r, coordinate: o }),
                };
            }
        },
        321442: (e, t, r) => {
            r.d(t, { Yh: () => u, Ym: () => f, bw: () => p, nv: () => s, ry: () => c });
            var n = r(202784),
                o = r(429259),
                a = r.n(o);
            function i(e) {
                return (
                    (i =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    i(e)
                );
            }
            var u = [
                    "aria-activedescendant",
                    "aria-atomic",
                    "aria-autocomplete",
                    "aria-busy",
                    "aria-checked",
                    "aria-colcount",
                    "aria-colindex",
                    "aria-colspan",
                    "aria-controls",
                    "aria-current",
                    "aria-describedby",
                    "aria-details",
                    "aria-disabled",
                    "aria-errormessage",
                    "aria-expanded",
                    "aria-flowto",
                    "aria-haspopup",
                    "aria-hidden",
                    "aria-invalid",
                    "aria-keyshortcuts",
                    "aria-label",
                    "aria-labelledby",
                    "aria-level",
                    "aria-live",
                    "aria-modal",
                    "aria-multiline",
                    "aria-multiselectable",
                    "aria-orientation",
                    "aria-owns",
                    "aria-placeholder",
                    "aria-posinset",
                    "aria-pressed",
                    "aria-readonly",
                    "aria-relevant",
                    "aria-required",
                    "aria-roledescription",
                    "aria-rowcount",
                    "aria-rowindex",
                    "aria-rowspan",
                    "aria-selected",
                    "aria-setsize",
                    "aria-sort",
                    "aria-valuemax",
                    "aria-valuemin",
                    "aria-valuenow",
                    "aria-valuetext",
                    "className",
                    "color",
                    "height",
                    "id",
                    "lang",
                    "max",
                    "media",
                    "method",
                    "min",
                    "name",
                    "style",
                    "target",
                    "width",
                    "role",
                    "tabIndex",
                    "accentHeight",
                    "accumulate",
                    "additive",
                    "alignmentBaseline",
                    "allowReorder",
                    "alphabetic",
                    "amplitude",
                    "arabicForm",
                    "ascent",
                    "attributeName",
                    "attributeType",
                    "autoReverse",
                    "azimuth",
                    "baseFrequency",
                    "baselineShift",
                    "baseProfile",
                    "bbox",
                    "begin",
                    "bias",
                    "by",
                    "calcMode",
                    "capHeight",
                    "clip",
                    "clipPath",
                    "clipPathUnits",
                    "clipRule",
                    "colorInterpolation",
                    "colorInterpolationFilters",
                    "colorProfile",
                    "colorRendering",
                    "contentScriptType",
                    "contentStyleType",
                    "cursor",
                    "cx",
                    "cy",
                    "d",
                    "decelerate",
                    "descent",
                    "diffuseConstant",
                    "direction",
                    "display",
                    "divisor",
                    "dominantBaseline",
                    "dur",
                    "dx",
                    "dy",
                    "edgeMode",
                    "elevation",
                    "enableBackground",
                    "end",
                    "exponent",
                    "externalResourcesRequired",
                    "fill",
                    "fillOpacity",
                    "fillRule",
                    "filter",
                    "filterRes",
                    "filterUnits",
                    "floodColor",
                    "floodOpacity",
                    "focusable",
                    "fontFamily",
                    "fontSize",
                    "fontSizeAdjust",
                    "fontStretch",
                    "fontStyle",
                    "fontVariant",
                    "fontWeight",
                    "format",
                    "from",
                    "fx",
                    "fy",
                    "g1",
                    "g2",
                    "glyphName",
                    "glyphOrientationHorizontal",
                    "glyphOrientationVertical",
                    "glyphRef",
                    "gradientTransform",
                    "gradientUnits",
                    "hanging",
                    "horizAdvX",
                    "horizOriginX",
                    "href",
                    "ideographic",
                    "imageRendering",
                    "in2",
                    "in",
                    "intercept",
                    "k1",
                    "k2",
                    "k3",
                    "k4",
                    "k",
                    "kernelMatrix",
                    "kernelUnitLength",
                    "kerning",
                    "keyPoints",
                    "keySplines",
                    "keyTimes",
                    "lengthAdjust",
                    "letterSpacing",
                    "lightingColor",
                    "limitingConeAngle",
                    "local",
                    "markerEnd",
                    "markerHeight",
                    "markerMid",
                    "markerStart",
                    "markerUnits",
                    "markerWidth",
                    "mask",
                    "maskContentUnits",
                    "maskUnits",
                    "mathematical",
                    "mode",
                    "numOctaves",
                    "offset",
                    "opacity",
                    "operator",
                    "order",
                    "orient",
                    "orientation",
                    "origin",
                    "overflow",
                    "overlinePosition",
                    "overlineThickness",
                    "paintOrder",
                    "panose1",
                    "pathLength",
                    "patternContentUnits",
                    "patternTransform",
                    "patternUnits",
                    "pointerEvents",
                    "pointsAtX",
                    "pointsAtY",
                    "pointsAtZ",
                    "preserveAlpha",
                    "preserveAspectRatio",
                    "primitiveUnits",
                    "r",
                    "radius",
                    "refX",
                    "refY",
                    "renderingIntent",
                    "repeatCount",
                    "repeatDur",
                    "requiredExtensions",
                    "requiredFeatures",
                    "restart",
                    "result",
                    "rotate",
                    "rx",
                    "ry",
                    "seed",
                    "shapeRendering",
                    "slope",
                    "spacing",
                    "specularConstant",
                    "specularExponent",
                    "speed",
                    "spreadMethod",
                    "startOffset",
                    "stdDeviation",
                    "stemh",
                    "stemv",
                    "stitchTiles",
                    "stopColor",
                    "stopOpacity",
                    "strikethroughPosition",
                    "strikethroughThickness",
                    "string",
                    "stroke",
                    "strokeDasharray",
                    "strokeDashoffset",
                    "strokeLinecap",
                    "strokeLinejoin",
                    "strokeMiterlimit",
                    "strokeOpacity",
                    "strokeWidth",
                    "surfaceScale",
                    "systemLanguage",
                    "tableValues",
                    "targetX",
                    "targetY",
                    "textAnchor",
                    "textDecoration",
                    "textLength",
                    "textRendering",
                    "to",
                    "transform",
                    "u1",
                    "u2",
                    "underlinePosition",
                    "underlineThickness",
                    "unicode",
                    "unicodeBidi",
                    "unicodeRange",
                    "unitsPerEm",
                    "vAlphabetic",
                    "values",
                    "vectorEffect",
                    "version",
                    "vertAdvY",
                    "vertOriginX",
                    "vertOriginY",
                    "vHanging",
                    "vIdeographic",
                    "viewTarget",
                    "visibility",
                    "vMathematical",
                    "widths",
                    "wordSpacing",
                    "writingMode",
                    "x1",
                    "x2",
                    "x",
                    "xChannelSelector",
                    "xHeight",
                    "xlinkActuate",
                    "xlinkArcrole",
                    "xlinkHref",
                    "xlinkRole",
                    "xlinkShow",
                    "xlinkTitle",
                    "xlinkType",
                    "xmlBase",
                    "xmlLang",
                    "xmlns",
                    "xmlnsXlink",
                    "xmlSpace",
                    "y1",
                    "y2",
                    "y",
                    "yChannelSelector",
                    "z",
                    "zoomAndPan",
                    "ref",
                    "key",
                    "angle",
                ],
                l = ["points", "pathLength"],
                c = { svg: ["viewBox", "children"], polygon: l, polyline: l },
                s = [
                    "dangerouslySetInnerHTML",
                    "onCopy",
                    "onCopyCapture",
                    "onCut",
                    "onCutCapture",
                    "onPaste",
                    "onPasteCapture",
                    "onCompositionEnd",
                    "onCompositionEndCapture",
                    "onCompositionStart",
                    "onCompositionStartCapture",
                    "onCompositionUpdate",
                    "onCompositionUpdateCapture",
                    "onFocus",
                    "onFocusCapture",
                    "onBlur",
                    "onBlurCapture",
                    "onChange",
                    "onChangeCapture",
                    "onBeforeInput",
                    "onBeforeInputCapture",
                    "onInput",
                    "onInputCapture",
                    "onReset",
                    "onResetCapture",
                    "onSubmit",
                    "onSubmitCapture",
                    "onInvalid",
                    "onInvalidCapture",
                    "onLoad",
                    "onLoadCapture",
                    "onError",
                    "onErrorCapture",
                    "onKeyDown",
                    "onKeyDownCapture",
                    "onKeyPress",
                    "onKeyPressCapture",
                    "onKeyUp",
                    "onKeyUpCapture",
                    "onAbort",
                    "onAbortCapture",
                    "onCanPlay",
                    "onCanPlayCapture",
                    "onCanPlayThrough",
                    "onCanPlayThroughCapture",
                    "onDurationChange",
                    "onDurationChangeCapture",
                    "onEmptied",
                    "onEmptiedCapture",
                    "onEncrypted",
                    "onEncryptedCapture",
                    "onEnded",
                    "onEndedCapture",
                    "onLoadedData",
                    "onLoadedDataCapture",
                    "onLoadedMetadata",
                    "onLoadedMetadataCapture",
                    "onLoadStart",
                    "onLoadStartCapture",
                    "onPause",
                    "onPauseCapture",
                    "onPlay",
                    "onPlayCapture",
                    "onPlaying",
                    "onPlayingCapture",
                    "onProgress",
                    "onProgressCapture",
                    "onRateChange",
                    "onRateChangeCapture",
                    "onSeeked",
                    "onSeekedCapture",
                    "onSeeking",
                    "onSeekingCapture",
                    "onStalled",
                    "onStalledCapture",
                    "onSuspend",
                    "onSuspendCapture",
                    "onTimeUpdate",
                    "onTimeUpdateCapture",
                    "onVolumeChange",
                    "onVolumeChangeCapture",
                    "onWaiting",
                    "onWaitingCapture",
                    "onAuxClick",
                    "onAuxClickCapture",
                    "onClick",
                    "onClickCapture",
                    "onContextMenu",
                    "onContextMenuCapture",
                    "onDoubleClick",
                    "onDoubleClickCapture",
                    "onDrag",
                    "onDragCapture",
                    "onDragEnd",
                    "onDragEndCapture",
                    "onDragEnter",
                    "onDragEnterCapture",
                    "onDragExit",
                    "onDragExitCapture",
                    "onDragLeave",
                    "onDragLeaveCapture",
                    "onDragOver",
                    "onDragOverCapture",
                    "onDragStart",
                    "onDragStartCapture",
                    "onDrop",
                    "onDropCapture",
                    "onMouseDown",
                    "onMouseDownCapture",
                    "onMouseEnter",
                    "onMouseLeave",
                    "onMouseMove",
                    "onMouseMoveCapture",
                    "onMouseOut",
                    "onMouseOutCapture",
                    "onMouseOver",
                    "onMouseOverCapture",
                    "onMouseUp",
                    "onMouseUpCapture",
                    "onSelect",
                    "onSelectCapture",
                    "onTouchCancel",
                    "onTouchCancelCapture",
                    "onTouchEnd",
                    "onTouchEndCapture",
                    "onTouchMove",
                    "onTouchMoveCapture",
                    "onTouchStart",
                    "onTouchStartCapture",
                    "onPointerDown",
                    "onPointerDownCapture",
                    "onPointerMove",
                    "onPointerMoveCapture",
                    "onPointerUp",
                    "onPointerUpCapture",
                    "onPointerCancel",
                    "onPointerCancelCapture",
                    "onPointerEnter",
                    "onPointerEnterCapture",
                    "onPointerLeave",
                    "onPointerLeaveCapture",
                    "onPointerOver",
                    "onPointerOverCapture",
                    "onPointerOut",
                    "onPointerOutCapture",
                    "onGotPointerCapture",
                    "onGotPointerCaptureCapture",
                    "onLostPointerCapture",
                    "onLostPointerCaptureCapture",
                    "onScroll",
                    "onScrollCapture",
                    "onWheel",
                    "onWheelCapture",
                    "onAnimationStart",
                    "onAnimationStartCapture",
                    "onAnimationEnd",
                    "onAnimationEndCapture",
                    "onAnimationIteration",
                    "onAnimationIterationCapture",
                    "onTransitionEnd",
                    "onTransitionEndCapture",
                ],
                f = function (e, t) {
                    if (!e || "function" == typeof e || "boolean" == typeof e) return null;
                    var r = e;
                    if (((0, n.isValidElement)(e) && (r = e.props), !a()(r))) return null;
                    var o = {};
                    return (
                        Object.keys(r).forEach(function (e) {
                            s.includes(e) &&
                                (o[e] =
                                    t ||
                                    function (t) {
                                        return r[e](r, t);
                                    });
                        }),
                        o
                    );
                },
                p = function (e, t, r) {
                    if (!a()(e) || "object" !== i(e)) return null;
                    var n = null;
                    return (
                        Object.keys(e).forEach(function (o) {
                            var a = e[o];
                            s.includes(o) &&
                                "function" == typeof a &&
                                (n || (n = {}),
                                (n[o] = (function (e, t, r) {
                                    return function (n) {
                                        return e(t, r, n), null;
                                    };
                                })(a, t, r)));
                        }),
                        n
                    );
                };
        },
        658582: (e, t) => {
            var r,
                n = Symbol.for("react.element"),
                o = Symbol.for("react.portal"),
                a = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                u = Symbol.for("react.profiler"),
                l = Symbol.for("react.provider"),
                c = Symbol.for("react.context"),
                s = Symbol.for("react.server_context"),
                f = Symbol.for("react.forward_ref"),
                p = Symbol.for("react.suspense"),
                y = Symbol.for("react.suspense_list"),
                d = Symbol.for("react.memo"),
                h = Symbol.for("react.lazy"),
                m = Symbol.for("react.offscreen");
            /**
             * @license React
             * react-is.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */ function v(e) {
                if ("object" == typeof e && null !== e) {
                    var t = e.$$typeof;
                    switch (t) {
                        case n:
                            switch ((e = e.type)) {
                                case a:
                                case u:
                                case i:
                                case p:
                                case y:
                                    return e;
                                default:
                                    switch ((e = e && e.$$typeof)) {
                                        case s:
                                        case c:
                                        case f:
                                        case h:
                                        case d:
                                        case l:
                                            return e;
                                        default:
                                            return t;
                                    }
                            }
                        case o:
                            return t;
                    }
                }
            }
            (r = Symbol.for("react.module.reference")),
                (t.isFragment = function (e) {
                    return v(e) === a;
                });
        },
        823393: (e, t, r) => {
            e.exports = r(658582);
        },
        970201: (e, t, r) => {
            r.r(t), r.d(t, { scaleBand: () => n.ti, scaleDiverging: () => n.AB, scaleDivergingLog: () => n.Wr, scaleDivergingPow: () => n.dK, scaleDivergingSqrt: () => n.KR, scaleDivergingSymlog: () => n.b4, scaleIdentity: () => n.ez, scaleImplicit: () => n.qm, scaleLinear: () => n.BY, scaleLog: () => n.p2, scaleOrdinal: () => n.PK, scalePoint: () => n.q2, scalePow: () => n.vY, scaleQuantile: () => n.FT, scaleQuantize: () => n.aE, scaleRadial: () => n.s$, scaleSequential: () => n.cJ, scaleSequentialLog: () => n.$l, scaleSequentialPow: () => n.bE, scaleSequentialQuantile: () => n.IO, scaleSequentialSqrt: () => n.aA, scaleSequentialSymlog: () => n.lQ, scaleSqrt: () => n.PU, scaleSymlog: () => n.eh, scaleThreshold: () => n.ut, scaleTime: () => n.Xf, scaleUtc: () => n.KY, tickFormat: () => n.uk });
            var n = r(193247);
        },
        611534: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = !0,
                o = "Invariant failed";
            function a(e, t) {
                if (!e) {
                    if (n) throw new Error(o);
                    var r = "function" == typeof t ? t() : t,
                        a = r ? "".concat(o, ": ").concat(r) : o;
                    throw new Error(a);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-27545368.1be98e7a.js.map
