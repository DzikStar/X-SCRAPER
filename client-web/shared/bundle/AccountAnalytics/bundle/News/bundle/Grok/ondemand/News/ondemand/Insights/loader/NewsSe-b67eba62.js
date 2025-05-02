"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-b67eba62"],
    {
        896928: (e, t, r) => {
            r.d(t, { Zj: () => M, wZ: () => E });
            var n = r(617374),
                a = r.n(n);
            function i(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return o(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    (function (e, t) {
                        if (!e) return;
                        if ("string" == typeof e) return o(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(e);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return o(e, t);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            var l = function (e) {
                    return e;
                },
                u = { "@@functional/placeholder": !0 },
                s = function (e) {
                    return e === u;
                },
                c = function (e) {
                    return function t() {
                        return 0 === arguments.length || (1 === arguments.length && s(arguments.length <= 0 ? void 0 : arguments[0])) ? t : e.apply(void 0, arguments);
                    };
                },
                d = function e(t, r) {
                    return 1 === t
                        ? r
                        : c(function () {
                              for (var n = arguments.length, a = new Array(n), o = 0; o < n; o++) a[o] = arguments[o];
                              var l = a.filter(function (e) {
                                  return e !== u;
                              }).length;
                              return l >= t
                                  ? r.apply(void 0, a)
                                  : e(
                                        t - l,
                                        c(function () {
                                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                            var o = a.map(function (e) {
                                                return s(e) ? t.shift() : e;
                                            });
                                            return r.apply(void 0, i(o).concat(t));
                                        }),
                                    );
                          });
                },
                h = function (e) {
                    return d(e.length, e);
                },
                f = function (e, t) {
                    for (var r = [], n = e; n < t; ++n) r[n - e] = n;
                    return r;
                },
                v = h(function (e, t) {
                    return Array.isArray(t)
                        ? t.map(e)
                        : Object.keys(t)
                              .map(function (e) {
                                  return t[e];
                              })
                              .map(e);
                }),
                p = function () {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    if (!t.length) return l;
                    var n = t.reverse(),
                        a = n[0],
                        i = n.slice(1);
                    return function () {
                        return i.reduce(
                            function (e, t) {
                                return t(e);
                            },
                            a.apply(void 0, arguments),
                        );
                    };
                },
                y = function (e) {
                    return Array.isArray(e) ? e.reverse() : e.split("").reverse.join("");
                },
                m = function (e) {
                    var t = null,
                        r = null;
                    return function () {
                        for (var n = arguments.length, a = new Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return t &&
                            a.every(function (e, r) {
                                return e === t[r];
                            })
                            ? r
                            : ((t = a), (r = e.apply(void 0, a)));
                    };
                };
            const g = {
                rangeStep: function (e, t, r) {
                    for (var n = new (a())(e), i = 0, o = []; n.lt(t) && i < 1e5; ) o.push(n.toNumber()), (n = n.add(r)), i++;
                    return o;
                },
                getDigitCount: function (e) {
                    return 0 === e ? 1 : Math.floor(new (a())(e).abs().log(10).toNumber()) + 1;
                },
                interpolateNumber: h(function (e, t, r) {
                    var n = +e;
                    return n + r * (+t - n);
                }),
                uninterpolateNumber: h(function (e, t, r) {
                    var n = t - +e;
                    return (r - e) / (n = n || 1 / 0);
                }),
                uninterpolateTruncation: h(function (e, t, r) {
                    var n = t - +e;
                    return (n = n || 1 / 0), Math.max(0, Math.min(1, (r - e) / n));
                }),
            };
            function b(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return S(e);
                    })(e) ||
                    (function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
                    })(e) ||
                    x(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function w(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
                        var r = [],
                            n = !0,
                            a = !1,
                            i = void 0;
                        try {
                            for (var o, l = e[Symbol.iterator](); !(n = (o = l.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            (a = !0), (i = e);
                        } finally {
                            try {
                                n || null == l.return || l.return();
                            } finally {
                                if (a) throw i;
                            }
                        }
                        return r;
                    })(e, t) ||
                    x(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function x(e, t) {
                if (e) {
                    if ("string" == typeof e) return S(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? S(e, t) : void 0;
                }
            }
            function S(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }
            function O(e) {
                var t = w(e, 2),
                    r = t[0],
                    n = t[1],
                    a = r,
                    i = n;
                return r > n && ((a = n), (i = r)), [a, i];
            }
            function A(e, t, r) {
                if (e.lte(0)) return new (a())(0);
                var n = g.getDigitCount(e.toNumber()),
                    i = new (a())(10).pow(n),
                    o = e.div(i),
                    l = 1 !== n ? 0.05 : 0.1,
                    u = new (a())(Math.ceil(o.div(l).toNumber())).add(r).mul(l).mul(i);
                return t ? u : new (a())(Math.ceil(u));
            }
            function T(e, t, r) {
                var n = 1,
                    i = new (a())(e);
                if (!i.isint() && r) {
                    var o = Math.abs(e);
                    o < 1 ? ((n = new (a())(10).pow(g.getDigitCount(e) - 1)), (i = new (a())(Math.floor(i.div(n).toNumber())).mul(n))) : o > 1 && (i = new (a())(Math.floor(e)));
                } else 0 === e ? (i = new (a())(Math.floor((t - 1) / 2))) : r || (i = new (a())(Math.floor(e)));
                var l = Math.floor((t - 1) / 2);
                return p(
                    v(function (e) {
                        return i.add(new (a())(e - l).mul(n)).toNumber();
                    }),
                    f,
                )(0, t);
            }
            function k(e, t, r, n) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
                if (!Number.isFinite((t - e) / (r - 1))) return { step: new (a())(0), tickMin: new (a())(0), tickMax: new (a())(0) };
                var o,
                    l = A(new (a())(t).sub(e).div(r - 1), n, i);
                o = e <= 0 && t >= 0 ? new (a())(0) : (o = new (a())(e).add(t).div(2)).sub(new (a())(o).mod(l));
                var u = Math.ceil(o.sub(e).div(l).toNumber()),
                    s = Math.ceil(new (a())(t).sub(o).div(l).toNumber()),
                    c = u + s + 1;
                return c > r ? k(e, t, r, n, i + 1) : (c < r && ((s = t > 0 ? s + (r - c) : s), (u = t > 0 ? u : u + (r - c))), { step: l, tickMin: o.sub(new (a())(u).mul(l)), tickMax: o.add(new (a())(s).mul(l)) });
            }
            var M = m(function (e) {
                    var t = w(e, 2),
                        r = t[0],
                        n = t[1],
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                        o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        l = Math.max(i, 2),
                        u = w(O([r, n]), 2),
                        s = u[0],
                        c = u[1];
                    if (s === -1 / 0 || c === 1 / 0) {
                        var d =
                            c === 1 / 0
                                ? [s].concat(
                                      b(
                                          f(0, i - 1).map(function () {
                                              return 1 / 0;
                                          }),
                                      ),
                                  )
                                : [].concat(
                                      b(
                                          f(0, i - 1).map(function () {
                                              return -1 / 0;
                                          }),
                                      ),
                                      [c],
                                  );
                        return r > n ? y(d) : d;
                    }
                    if (s === c) return T(s, i, o);
                    var h = k(s, c, l, o),
                        v = h.step,
                        p = h.tickMin,
                        m = h.tickMax,
                        x = g.rangeStep(p, m.add(new (a())(0.1).mul(v)), v);
                    return r > n ? y(x) : x;
                }),
                E =
                    (m(function (e) {
                        var t = w(e, 2),
                            r = t[0],
                            n = t[1],
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 6,
                            o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            l = Math.max(i, 2),
                            u = w(O([r, n]), 2),
                            s = u[0],
                            c = u[1];
                        if (s === -1 / 0 || c === 1 / 0) return [r, n];
                        if (s === c) return T(s, i, o);
                        var d = A(new (a())(c).sub(s).div(l - 1), o, 0),
                            h = p(
                                v(function (e) {
                                    return new (a())(s).add(new (a())(e).mul(d)).toNumber();
                                }),
                                f,
                            )(0, l).filter(function (e) {
                                return e >= s && e <= c;
                            });
                        return r > n ? y(h) : h;
                    }),
                    m(function (e, t) {
                        var r = w(e, 2),
                            n = r[0],
                            i = r[1],
                            o = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                            l = w(O([n, i]), 2),
                            u = l[0],
                            s = l[1];
                        if (u === -1 / 0 || s === 1 / 0) return [n, i];
                        if (u === s) return [u];
                        var c = Math.max(t, 2),
                            d = A(new (a())(s).sub(u).div(c - 1), o, 0),
                            h = [].concat(b(g.rangeStep(new (a())(u), new (a())(s).sub(new (a())(0.99).mul(d)), d)), [s]);
                        return n > i ? y(h) : h;
                    }));
        },
        324908: (e, t, r) => {
            r.d(t, { $: () => N });
            var n,
                a = r(202784),
                i = r(840489),
                o = r(588927),
                l = r(818149),
                u = r.n(l),
                s = r(301842),
                c = r.n(s),
                d = r(284618),
                h = r(118694),
                f = r(11011),
                v = r(196621),
                p = r(715027),
                y = r(179376),
                m = r(179499),
                g = r(547247),
                b = r(321442),
                w = r(476830),
                x = ["value", "background"];
            function S(e) {
                return (
                    (S =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    S(e)
                );
            }
            function O(e, t) {
                if (null == e) return {};
                var r,
                    n,
                    a = (function (e, t) {
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
                    var i = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < i.length; n++) (r = i[n]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
                }
                return a;
            }
            function A() {
                return (
                    (A = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    A.apply(this, arguments)
                );
            }
            function T(e, t) {
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
            function k(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? T(Object(r), !0).forEach(function (t) {
                              I(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : T(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function M(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, X(n.key), n);
                }
            }
            function E(e, t, r) {
                return (
                    (t = P(t)),
                    (function (e, t) {
                        if (t && ("object" === S(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        })(e);
                    })(e, j() ? Reflect.construct(t, r || [], P(e).constructor) : t.apply(e, r))
                );
            }
            function j() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (j = function () {
                    return !!e;
                })();
            }
            function P(e) {
                return (
                    (P = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    P(e)
                );
            }
            function D(e, t) {
                return (
                    (D = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    D(e, t)
                );
            }
            function I(e, t, r) {
                return (t = X(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function X(e) {
                var t = (function (e, t) {
                    if ("object" != S(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != S(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == S(t) ? t : t + "";
            }
            var N = (function (e) {
                function t() {
                    var e;
                    !(function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                    })(this, t);
                    for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++) n[a] = arguments[a];
                    return (
                        I((e = E(this, t, [].concat(n))), "state", { isAnimationFinished: !1 }),
                        I(e, "id", (0, p.EL)("recharts-bar-")),
                        I(e, "handleAnimationEnd", function () {
                            var t = e.props.onAnimationEnd;
                            e.setState({ isAnimationFinished: !0 }), t && t();
                        }),
                        I(e, "handleAnimationStart", function () {
                            var t = e.props.onAnimationStart;
                            e.setState({ isAnimationFinished: !1 }), t && t();
                        }),
                        e
                    );
                }
                return (
                    (function (e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && D(e, t);
                    })(t, e),
                    (r = t),
                    (l = [
                        {
                            key: "getDerivedStateFromProps",
                            value: function (e, t) {
                                return e.animationId !== t.prevAnimationId ? { prevAnimationId: e.animationId, curData: e.data, prevData: t.curData } : e.data !== t.curData ? { curData: e.data } : null;
                            },
                        },
                    ]),
                    (n = [
                        {
                            key: "renderRectanglesStatically",
                            value: function (e) {
                                var t = this,
                                    r = this.props,
                                    n = r.shape,
                                    i = r.dataKey,
                                    o = r.activeIndex,
                                    l = r.activeBar,
                                    u = (0, y.L6)(this.props, !1);
                                return (
                                    e &&
                                    e.map(function (e, r) {
                                        var s = r === o,
                                            c = s ? l : n,
                                            h = k(k(k({}, u), e), {}, { isActive: s, option: c, index: r, dataKey: i, onAnimationStart: t.handleAnimationStart, onAnimationEnd: t.handleAnimationEnd });
                                        return a.createElement(
                                            d.m,
                                            A({ className: "recharts-bar-rectangle" }, (0, b.bw)(t.props, e, r), {
                                                key: "rectangle-"
                                                    .concat(null == e ? void 0 : e.x, "-")
                                                    .concat(null == e ? void 0 : e.y, "-")
                                                    .concat(null == e ? void 0 : e.value),
                                            }),
                                            a.createElement(w.O, h),
                                        );
                                    })
                                );
                            },
                        },
                        {
                            key: "renderRectanglesWithAnimation",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    r = t.data,
                                    n = t.layout,
                                    i = t.isAnimationActive,
                                    l = t.animationBegin,
                                    u = t.animationDuration,
                                    s = t.animationEasing,
                                    c = t.animationId,
                                    h = this.state.prevData;
                                return a.createElement(o.ZP, { begin: l, duration: u, isActive: i, easing: s, from: { t: 0 }, to: { t: 1 }, key: "bar-".concat(c), onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (t) {
                                    var i = t.t,
                                        o = r.map(function (e, t) {
                                            var r = h && h[t];
                                            if (r) {
                                                var a = (0, p.k4)(r.x, e.x),
                                                    o = (0, p.k4)(r.y, e.y),
                                                    l = (0, p.k4)(r.width, e.width),
                                                    u = (0, p.k4)(r.height, e.height);
                                                return k(k({}, e), {}, { x: a(i), y: o(i), width: l(i), height: u(i) });
                                            }
                                            if ("horizontal" === n) {
                                                var s = (0, p.k4)(0, e.height)(i);
                                                return k(k({}, e), {}, { y: e.y + e.height - s, height: s });
                                            }
                                            var c = (0, p.k4)(0, e.width)(i);
                                            return k(k({}, e), {}, { width: c });
                                        });
                                    return a.createElement(d.m, null, e.renderRectanglesStatically(o));
                                });
                            },
                        },
                        {
                            key: "renderRectangles",
                            value: function () {
                                var e = this.props,
                                    t = e.data,
                                    r = e.isAnimationActive,
                                    n = this.state.prevData;
                                return !(r && t && t.length) || (n && u()(n, t)) ? this.renderRectanglesStatically(t) : this.renderRectanglesWithAnimation();
                            },
                        },
                        {
                            key: "renderBackground",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    r = t.data,
                                    n = t.dataKey,
                                    i = t.activeIndex,
                                    o = (0, y.L6)(this.props.background, !1);
                                return r.map(function (t, r) {
                                    t.value;
                                    var l = t.background,
                                        u = O(t, x);
                                    if (!l) return null;
                                    var s = k(k(k(k(k({}, u), {}, { fill: "#eee" }, l), o), (0, b.bw)(e.props, t, r)), {}, { onAnimationStart: e.handleAnimationStart, onAnimationEnd: e.handleAnimationEnd, dataKey: n, index: r, className: "recharts-bar-background-rectangle" });
                                    return a.createElement(w.O, A({ key: "background-bar-".concat(r), option: e.props.background, isActive: r === i }, s));
                                });
                            },
                        },
                        {
                            key: "renderErrorBar",
                            value: function (e, t) {
                                if (this.props.isAnimationActive && !this.state.isAnimationFinished) return null;
                                var r = this.props,
                                    n = r.data,
                                    i = r.xAxis,
                                    o = r.yAxis,
                                    l = r.layout,
                                    u = r.children,
                                    s = (0, y.NN)(u, h.W);
                                if (!s) return null;
                                var c = "vertical" === l ? n[0].height / 2 : n[0].width / 2,
                                    f = function (e, t) {
                                        var r = Array.isArray(e.value) ? e.value[1] : e.value;
                                        return { x: e.x, y: e.y, value: r, errorVal: (0, g.F$)(e, t) };
                                    },
                                    v = { clipPath: e ? "url(#clipPath-".concat(t, ")") : null };
                                return a.createElement(
                                    d.m,
                                    v,
                                    s.map(function (e) {
                                        return a.cloneElement(e, { key: "error-bar-".concat(t, "-").concat(e.props.dataKey), data: n, xAxis: i, yAxis: o, layout: l, offset: c, dataPointFormatter: f });
                                    }),
                                );
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = e.hide,
                                    r = e.data,
                                    n = e.className,
                                    o = e.xAxis,
                                    l = e.yAxis,
                                    u = e.left,
                                    s = e.top,
                                    h = e.width,
                                    f = e.height,
                                    p = e.isAnimationActive,
                                    y = e.background,
                                    m = e.id;
                                if (t || !r || !r.length) return null;
                                var g = this.state.isAnimationFinished,
                                    b = (0, i.Z)("recharts-bar", n),
                                    w = o && o.allowDataOverflow,
                                    x = l && l.allowDataOverflow,
                                    S = w || x,
                                    O = c()(m) ? this.id : m;
                                return a.createElement(d.m, { className: b }, w || x ? a.createElement("defs", null, a.createElement("clipPath", { id: "clipPath-".concat(O) }, a.createElement("rect", { x: w ? u : u - h / 2, y: x ? s : s - f / 2, width: w ? h : 2 * h, height: x ? f : 2 * f }))) : null, a.createElement(d.m, { className: "recharts-bar-rectangles", clipPath: S ? "url(#clipPath-".concat(O, ")") : null }, y ? this.renderBackground() : null, this.renderRectangles()), this.renderErrorBar(S, O), (!p || g) && v.e.renderCallByParent(this.props, r));
                            },
                        },
                    ]) && M(r.prototype, n),
                    l && M(r, l),
                    Object.defineProperty(r, "prototype", { writable: !1 }),
                    r
                );
                var r, n, l;
            })(a.PureComponent);
            (n = N),
                I(N, "displayName", "Bar"),
                I(N, "defaultProps", { xAxisId: 0, yAxisId: 0, legendType: "rect", minPointSize: 0, hide: !1, data: [], layout: "vertical", activeBar: !1, isAnimationActive: !m.x.isSsr, animationBegin: 0, animationDuration: 400, animationEasing: "ease" }),
                I(N, "getComposedData", function (e) {
                    var t = e.props,
                        r = e.item,
                        a = e.barPosition,
                        i = e.bandSize,
                        o = e.xAxis,
                        l = e.yAxis,
                        u = e.xAxisTicks,
                        s = e.yAxisTicks,
                        c = e.stackedData,
                        d = e.dataStartIndex,
                        h = e.displayedData,
                        v = e.offset,
                        m = (0, g.Bu)(a, r);
                    if (!m) return null;
                    var b = t.layout,
                        x = r.type.defaultProps,
                        S = void 0 !== x ? k(k({}, x), r.props) : r.props,
                        O = S.dataKey,
                        A = S.children,
                        T = S.minPointSize,
                        M = "horizontal" === b ? l : o,
                        E = c ? M.scale.domain() : null,
                        j = (0, g.Yj)({ numericAxis: M }),
                        P = (0, y.NN)(A, f.b),
                        D = h.map(function (e, t) {
                            var a, h, f, v, y, x;
                            c ? (a = (0, g.Vv)(c[d + t], E)) : ((a = (0, g.F$)(e, O)), Array.isArray(a) || (a = [j, a]));
                            var S = (0, w.A)(T, n.defaultProps.minPointSize)(a[1], t);
                            if ("horizontal" === b) {
                                var A,
                                    M = [l.scale(a[0]), l.scale(a[1])],
                                    D = M[0],
                                    I = M[1];
                                (h = (0, g.Fy)({ axis: o, ticks: u, bandSize: i, offset: m.offset, entry: e, index: t })), (f = null !== (A = null != I ? I : D) && void 0 !== A ? A : void 0), (v = m.size);
                                var X = D - I;
                                if (((y = Number.isNaN(X) ? 0 : X), (x = { x: h, y: l.y, width: v, height: l.height }), Math.abs(S) > 0 && Math.abs(y) < Math.abs(S))) {
                                    var N = (0, p.uY)(y || S) * (Math.abs(S) - Math.abs(y));
                                    (f -= N), (y += N);
                                }
                            } else {
                                var L = [o.scale(a[0]), o.scale(a[1])],
                                    _ = L[0],
                                    F = L[1];
                                if (((h = _), (f = (0, g.Fy)({ axis: l, ticks: s, bandSize: i, offset: m.offset, entry: e, index: t })), (v = F - _), (y = m.size), (x = { x: o.x, y: f, width: o.width, height: y }), Math.abs(S) > 0 && Math.abs(v) < Math.abs(S))) v += (0, p.uY)(v || S) * (Math.abs(S) - Math.abs(v));
                            }
                            return k(k(k({}, e), {}, { x: h, y: f, width: v, height: y, value: c ? a : a[1], payload: e, background: x }, P && P[t] && P[t].props), {}, { tooltipPayload: [(0, g.Qo)(r, e)], tooltipPosition: { x: h + v / 2, y: f + y / 2 } });
                        });
                    return k({ data: D, layout: b }, v);
                });
        },
        319978: (e, t, r) => {
            r.d(t, { B: () => E });
            var n = r(202784),
                a = r(840489),
                i = r(199620),
                o = r(161049),
                l = r.n(o),
                u = r(802689),
                s = r.n(u),
                c = r(284618),
                d = r(707670),
                h = r(547247),
                f = r(715027),
                v = r(68532),
                p = r(179376);
            function y(e) {
                return (
                    (y =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    y(e)
                );
            }
            function m() {
                return (
                    (m = Object.assign
                        ? Object.assign.bind()
                        : function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var r = arguments[t];
                                  for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                              }
                              return e;
                          }),
                    m.apply(this, arguments)
                );
            }
            function g(e, t) {
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
            function b(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                        ? g(Object(r), !0).forEach(function (t) {
                              T(e, t, r[t]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                          : g(Object(r)).forEach(function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                            });
                }
                return e;
            }
            function w(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var n = t[r];
                    (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, k(n.key), n);
                }
            }
            function x(e, t, r) {
                return (
                    (t = O(t)),
                    (function (e, t) {
                        if (t && ("object" === y(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return (function (e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e;
                        })(e);
                    })(e, S() ? Reflect.construct(t, r || [], O(e).constructor) : t.apply(e, r))
                );
            }
            function S() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                } catch (e) {}
                return (S = function () {
                    return !!e;
                })();
            }
            function O(e) {
                return (
                    (O = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    O(e)
                );
            }
            function A(e, t) {
                return (
                    (A = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (e, t) {
                              return (e.__proto__ = t), e;
                          }),
                    A(e, t)
                );
            }
            function T(e, t, r) {
                return (t = k(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
            }
            function k(e) {
                var t = (function (e, t) {
                    if ("object" != y(e) || !e) return e;
                    var r = e[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(e, t || "default");
                        if ("object" != y(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === t ? String : Number)(e);
                })(e, "string");
                return "symbol" == y(t) ? t : t + "";
            }
            var M = function (e) {
                    return e.changedTouches && !!e.changedTouches.length;
                },
                E = (function (e) {
                    function t(e) {
                        var r;
                        return (
                            (function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, t),
                            T((r = x(this, t, [e])), "handleDrag", function (e) {
                                r.leaveTimer && (clearTimeout(r.leaveTimer), (r.leaveTimer = null)), r.state.isTravellerMoving ? r.handleTravellerMove(e) : r.state.isSlideMoving && r.handleSlideDrag(e);
                            }),
                            T(r, "handleTouchMove", function (e) {
                                null != e.changedTouches && e.changedTouches.length > 0 && r.handleDrag(e.changedTouches[0]);
                            }),
                            T(r, "handleDragEnd", function () {
                                r.setState({ isTravellerMoving: !1, isSlideMoving: !1 }, function () {
                                    var e = r.props,
                                        t = e.endIndex,
                                        n = e.onDragEnd,
                                        a = e.startIndex;
                                    null == n || n({ endIndex: t, startIndex: a });
                                }),
                                    r.detachDragEndListener();
                            }),
                            T(r, "handleLeaveWrapper", function () {
                                (r.state.isTravellerMoving || r.state.isSlideMoving) && (r.leaveTimer = window.setTimeout(r.handleDragEnd, r.props.leaveTimeOut));
                            }),
                            T(r, "handleEnterSlideOrTraveller", function () {
                                r.setState({ isTextActive: !0 });
                            }),
                            T(r, "handleLeaveSlideOrTraveller", function () {
                                r.setState({ isTextActive: !1 });
                            }),
                            T(r, "handleSlideDragStart", function (e) {
                                var t = M(e) ? e.changedTouches[0] : e;
                                r.setState({ isTravellerMoving: !1, isSlideMoving: !0, slideMoveStartX: t.pageX }), r.attachDragEndListener();
                            }),
                            (r.travellerDragStartHandlers = { startX: r.handleTravellerDragStart.bind(r, "startX"), endX: r.handleTravellerDragStart.bind(r, "endX") }),
                            (r.state = {}),
                            r
                        );
                    }
                    return (
                        (function (e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && A(e, t);
                        })(t, e),
                        (r = t),
                        (u = [
                            {
                                key: "renderDefaultTraveller",
                                value: function (e) {
                                    var t = e.x,
                                        r = e.y,
                                        a = e.width,
                                        i = e.height,
                                        o = e.stroke,
                                        l = Math.floor(r + i / 2) - 1;
                                    return n.createElement(n.Fragment, null, n.createElement("rect", { x: t, y: r, width: a, height: i, fill: o, stroke: "none" }), n.createElement("line", { x1: t + 1, y1: l, x2: t + a - 1, y2: l, fill: "none", stroke: "#fff" }), n.createElement("line", { x1: t + 1, y1: l + 2, x2: t + a - 1, y2: l + 2, fill: "none", stroke: "#fff" }));
                                },
                            },
                            {
                                key: "renderTraveller",
                                value: function (e, r) {
                                    return n.isValidElement(e) ? n.cloneElement(e, r) : l()(e) ? e(r) : t.renderDefaultTraveller(r);
                                },
                            },
                            {
                                key: "getDerivedStateFromProps",
                                value: function (e, t) {
                                    var r = e.data,
                                        n = e.width,
                                        a = e.x,
                                        o = e.travellerWidth,
                                        l = e.updateId,
                                        u = e.startIndex,
                                        c = e.endIndex;
                                    if (r !== t.prevData || l !== t.prevUpdateId)
                                        return b(
                                            { prevData: r, prevTravellerWidth: o, prevUpdateId: l, prevX: a, prevWidth: n },
                                            r && r.length
                                                ? (function (e) {
                                                      var t = e.data,
                                                          r = e.startIndex,
                                                          n = e.endIndex,
                                                          a = e.x,
                                                          o = e.width,
                                                          l = e.travellerWidth;
                                                      if (!t || !t.length) return {};
                                                      var u = t.length,
                                                          c = (0, i.x)()
                                                              .domain(s()(0, u))
                                                              .range([a, a + o - l]),
                                                          d = c.domain().map(function (e) {
                                                              return c(e);
                                                          });
                                                      return { isTextActive: !1, isSlideMoving: !1, isTravellerMoving: !1, isTravellerFocused: !1, startX: c(r), endX: c(n), scale: c, scaleValues: d };
                                                  })({ data: r, width: n, x: a, travellerWidth: o, startIndex: u, endIndex: c })
                                                : { scale: null, scaleValues: null },
                                        );
                                    if (t.scale && (n !== t.prevWidth || a !== t.prevX || o !== t.prevTravellerWidth)) {
                                        t.scale.range([a, a + n - o]);
                                        var d = t.scale.domain().map(function (e) {
                                            return t.scale(e);
                                        });
                                        return { prevData: r, prevTravellerWidth: o, prevUpdateId: l, prevX: a, prevWidth: n, startX: t.scale(e.startIndex), endX: t.scale(e.endIndex), scaleValues: d };
                                    }
                                    return null;
                                },
                            },
                            {
                                key: "getIndexInRange",
                                value: function (e, t) {
                                    for (var r = 0, n = e.length - 1; n - r > 1; ) {
                                        var a = Math.floor((r + n) / 2);
                                        e[a] > t ? (n = a) : (r = a);
                                    }
                                    return t >= e[n] ? n : r;
                                },
                            },
                        ]),
                        (o = [
                            {
                                key: "componentWillUnmount",
                                value: function () {
                                    this.leaveTimer && (clearTimeout(this.leaveTimer), (this.leaveTimer = null)), this.detachDragEndListener();
                                },
                            },
                            {
                                key: "getIndex",
                                value: function (e) {
                                    var r = e.startX,
                                        n = e.endX,
                                        a = this.state.scaleValues,
                                        i = this.props,
                                        o = i.gap,
                                        l = i.data.length - 1,
                                        u = Math.min(r, n),
                                        s = Math.max(r, n),
                                        c = t.getIndexInRange(a, u),
                                        d = t.getIndexInRange(a, s);
                                    return { startIndex: c - (c % o), endIndex: d === l ? l : d - (d % o) };
                                },
                            },
                            {
                                key: "getTextOfTick",
                                value: function (e) {
                                    var t = this.props,
                                        r = t.data,
                                        n = t.tickFormatter,
                                        a = t.dataKey,
                                        i = (0, h.F$)(r[e], a, e);
                                    return l()(n) ? n(i, e) : i;
                                },
                            },
                            {
                                key: "attachDragEndListener",
                                value: function () {
                                    window.addEventListener("mouseup", this.handleDragEnd, !0), window.addEventListener("touchend", this.handleDragEnd, !0), window.addEventListener("mousemove", this.handleDrag, !0);
                                },
                            },
                            {
                                key: "detachDragEndListener",
                                value: function () {
                                    window.removeEventListener("mouseup", this.handleDragEnd, !0), window.removeEventListener("touchend", this.handleDragEnd, !0), window.removeEventListener("mousemove", this.handleDrag, !0);
                                },
                            },
                            {
                                key: "handleSlideDrag",
                                value: function (e) {
                                    var t = this.state,
                                        r = t.slideMoveStartX,
                                        n = t.startX,
                                        a = t.endX,
                                        i = this.props,
                                        o = i.x,
                                        l = i.width,
                                        u = i.travellerWidth,
                                        s = i.startIndex,
                                        c = i.endIndex,
                                        d = i.onChange,
                                        h = e.pageX - r;
                                    h > 0 ? (h = Math.min(h, o + l - u - a, o + l - u - n)) : h < 0 && (h = Math.max(h, o - n, o - a));
                                    var f = this.getIndex({ startX: n + h, endX: a + h });
                                    (f.startIndex === s && f.endIndex === c) || !d || d(f), this.setState({ startX: n + h, endX: a + h, slideMoveStartX: e.pageX });
                                },
                            },
                            {
                                key: "handleTravellerDragStart",
                                value: function (e, t) {
                                    var r = M(t) ? t.changedTouches[0] : t;
                                    this.setState({ isSlideMoving: !1, isTravellerMoving: !0, movingTravellerId: e, brushMoveStartX: r.pageX }), this.attachDragEndListener();
                                },
                            },
                            {
                                key: "handleTravellerMove",
                                value: function (e) {
                                    var t = this.state,
                                        r = t.brushMoveStartX,
                                        n = t.movingTravellerId,
                                        a = t.endX,
                                        i = t.startX,
                                        o = this.state[n],
                                        l = this.props,
                                        u = l.x,
                                        s = l.width,
                                        c = l.travellerWidth,
                                        d = l.onChange,
                                        h = l.gap,
                                        f = l.data,
                                        v = { startX: this.state.startX, endX: this.state.endX },
                                        p = e.pageX - r;
                                    p > 0 ? (p = Math.min(p, u + s - c - o)) : p < 0 && (p = Math.max(p, u - o)), (v[n] = o + p);
                                    var y = this.getIndex(v),
                                        m = y.startIndex,
                                        g = y.endIndex;
                                    this.setState(T(T({}, n, o + p), "brushMoveStartX", e.pageX), function () {
                                        var e;
                                        d && ((e = f.length - 1), (("startX" === n && (a > i ? m % h == 0 : g % h == 0)) || (a < i && g === e) || ("endX" === n && (a > i ? g % h == 0 : m % h == 0)) || (a > i && g === e)) && d(y));
                                    });
                                },
                            },
                            {
                                key: "handleTravellerMoveKeyboard",
                                value: function (e, t) {
                                    var r = this,
                                        n = this.state,
                                        a = n.scaleValues,
                                        i = n.startX,
                                        o = n.endX,
                                        l = this.state[t],
                                        u = a.indexOf(l);
                                    if (-1 !== u) {
                                        var s = u + e;
                                        if (!(-1 === s || s >= a.length)) {
                                            var c = a[s];
                                            ("startX" === t && c >= o) ||
                                                ("endX" === t && c <= i) ||
                                                this.setState(T({}, t, c), function () {
                                                    r.props.onChange(r.getIndex({ startX: r.state.startX, endX: r.state.endX }));
                                                });
                                        }
                                    }
                                },
                            },
                            {
                                key: "renderBackground",
                                value: function () {
                                    var e = this.props,
                                        t = e.x,
                                        r = e.y,
                                        a = e.width,
                                        i = e.height,
                                        o = e.fill,
                                        l = e.stroke;
                                    return n.createElement("rect", { stroke: l, fill: o, x: t, y: r, width: a, height: i });
                                },
                            },
                            {
                                key: "renderPanorama",
                                value: function () {
                                    var e = this.props,
                                        t = e.x,
                                        r = e.y,
                                        a = e.width,
                                        i = e.height,
                                        o = e.data,
                                        l = e.children,
                                        u = e.padding,
                                        s = n.Children.only(l);
                                    return s ? n.cloneElement(s, { x: t, y: r, width: a, height: i, margin: u, compact: !0, data: o }) : null;
                                },
                            },
                            {
                                key: "renderTravellerLayer",
                                value: function (e, r) {
                                    var a,
                                        i,
                                        o = this,
                                        l = this.props,
                                        u = l.y,
                                        s = l.travellerWidth,
                                        d = l.height,
                                        h = l.traveller,
                                        f = l.ariaLabel,
                                        v = l.data,
                                        y = l.startIndex,
                                        m = l.endIndex,
                                        g = Math.max(e, this.props.x),
                                        w = b(b({}, (0, p.L6)(this.props, !1)), {}, { x: g, y: u, width: s, height: d }),
                                        x = f || "Min value: ".concat(null === (a = v[y]) || void 0 === a ? void 0 : a.name, ", Max value: ").concat(null === (i = v[m]) || void 0 === i ? void 0 : i.name);
                                    return n.createElement(
                                        c.m,
                                        {
                                            tabIndex: 0,
                                            role: "slider",
                                            "aria-label": x,
                                            "aria-valuenow": e,
                                            className: "recharts-brush-traveller",
                                            onMouseEnter: this.handleEnterSlideOrTraveller,
                                            onMouseLeave: this.handleLeaveSlideOrTraveller,
                                            onMouseDown: this.travellerDragStartHandlers[r],
                                            onTouchStart: this.travellerDragStartHandlers[r],
                                            onKeyDown: function (e) {
                                                ["ArrowLeft", "ArrowRight"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), o.handleTravellerMoveKeyboard("ArrowRight" === e.key ? 1 : -1, r));
                                            },
                                            onFocus: function () {
                                                o.setState({ isTravellerFocused: !0 });
                                            },
                                            onBlur: function () {
                                                o.setState({ isTravellerFocused: !1 });
                                            },
                                            style: { cursor: "col-resize" },
                                        },
                                        t.renderTraveller(h, w),
                                    );
                                },
                            },
                            {
                                key: "renderSlide",
                                value: function (e, t) {
                                    var r = this.props,
                                        a = r.y,
                                        i = r.height,
                                        o = r.stroke,
                                        l = r.travellerWidth,
                                        u = Math.min(e, t) + l,
                                        s = Math.max(Math.abs(t - e) - l, 0);
                                    return n.createElement("rect", { className: "recharts-brush-slide", onMouseEnter: this.handleEnterSlideOrTraveller, onMouseLeave: this.handleLeaveSlideOrTraveller, onMouseDown: this.handleSlideDragStart, onTouchStart: this.handleSlideDragStart, style: { cursor: "move" }, stroke: "none", fill: o, fillOpacity: 0.2, x: u, y: a, width: s, height: i });
                                },
                            },
                            {
                                key: "renderText",
                                value: function () {
                                    var e = this.props,
                                        t = e.startIndex,
                                        r = e.endIndex,
                                        a = e.y,
                                        i = e.height,
                                        o = e.travellerWidth,
                                        l = e.stroke,
                                        u = this.state,
                                        s = u.startX,
                                        h = u.endX,
                                        f = { pointerEvents: "none", fill: l };
                                    return n.createElement(c.m, { className: "recharts-brush-texts" }, n.createElement(d.x, m({ textAnchor: "end", verticalAnchor: "middle", x: Math.min(s, h) - 5, y: a + i / 2 }, f), this.getTextOfTick(t)), n.createElement(d.x, m({ textAnchor: "start", verticalAnchor: "middle", x: Math.max(s, h) + o + 5, y: a + i / 2 }, f), this.getTextOfTick(r)));
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var e = this.props,
                                        t = e.data,
                                        r = e.className,
                                        i = e.children,
                                        o = e.x,
                                        l = e.y,
                                        u = e.width,
                                        s = e.height,
                                        d = e.alwaysShowText,
                                        h = this.state,
                                        p = h.startX,
                                        y = h.endX,
                                        m = h.isTextActive,
                                        g = h.isSlideMoving,
                                        b = h.isTravellerMoving,
                                        w = h.isTravellerFocused;
                                    if (!t || !t.length || !(0, f.hj)(o) || !(0, f.hj)(l) || !(0, f.hj)(u) || !(0, f.hj)(s) || u <= 0 || s <= 0) return null;
                                    var x = (0, a.Z)("recharts-brush", r),
                                        S = 1 === n.Children.count(i),
                                        O = (0, v.g)("userSelect", "none");
                                    return n.createElement(c.m, { className: x, onMouseLeave: this.handleLeaveWrapper, onTouchMove: this.handleTouchMove, style: O }, this.renderBackground(), S && this.renderPanorama(), this.renderSlide(p, y), this.renderTravellerLayer(p, "startX"), this.renderTravellerLayer(y, "endX"), (m || g || b || w || d) && this.renderText());
                                },
                            },
                        ]) && w(r.prototype, o),
                        u && w(r, u),
                        Object.defineProperty(r, "prototype", { writable: !1 }),
                        r
                    );
                    var r, o, u;
                })(n.PureComponent);
            T(E, "displayName", "Brush"), T(E, "defaultProps", { height: 40, travellerWidth: 5, gap: 1, fill: "#fff", stroke: "#666", padding: { top: 1, right: 1, bottom: 1, left: 1 }, leaveTimeOut: 1e3, alwaysShowText: !1 });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.NewsSe-b67eba62.590b01ea.js.map
