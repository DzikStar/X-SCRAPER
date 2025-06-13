"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"],
    {
        588927: (t, e, n) => {
            n.d(e, { ZP: () => Jt });
            var r = n(202784),
                o = n(213980),
                i = n.n(o),
                a = n(960418);
            function u(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = -1;
                requestAnimationFrame(function r(o) {
                    n < 0 && (n = o),
                        o - n > e
                            ? (t(o), (n = -1))
                            : (function (t) {
                                  "undefined" != typeof requestAnimationFrame && requestAnimationFrame(t);
                              })(r);
                });
            }
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
            function s(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return l(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function f() {
                var t = function () {
                        return null;
                    },
                    e = !1,
                    n = function n(r) {
                        if (!e) {
                            if (Array.isArray(r)) {
                                if (!r.length) return;
                                var o = s(r),
                                    i = o[0],
                                    a = o.slice(1);
                                return "number" == typeof i ? void u(n.bind(null, a), i) : (n(i), void u(n.bind(null, a)));
                            }
                            "object" === c(r) && t(r), "function" == typeof r && r();
                        }
                    };
                return {
                    stop: function () {
                        e = !0;
                    },
                    start: function (t) {
                        (e = !1), n(t);
                    },
                    subscribe: function (e) {
                        return (
                            (t = e),
                            function () {
                                t = function () {
                                    return null;
                                };
                            }
                        );
                    },
                };
            }
            function p(t) {
                return (
                    (p =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    p(t)
                );
            }
            function y(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function b(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? y(Object(n), !0).forEach(function (e) {
                              m(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : y(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function m(t, e, n) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" !== p(t) || null === t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" !== p(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" === p(e) ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = n),
                    t
                );
            }
            var d = function (t) {
                    return t;
                },
                h = function (t, e) {
                    return Object.keys(e).reduce(function (n, r) {
                        return b(b({}, n), {}, m({}, r, t(r, e[r])));
                    }, {});
                },
                v = function (t, e, n) {
                    return t
                        .map(function (t) {
                            return ""
                                .concat(
                                    ((r = t),
                                    r.replace(/([A-Z])/g, function (t) {
                                        return "-".concat(t.toLowerCase());
                                    })),
                                    " ",
                                )
                                .concat(e, "ms ")
                                .concat(n);
                            var r;
                        })
                        .join(",");
                };
            function O(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                a,
                                u = [],
                                c = !0,
                                s = !1;
                            try {
                                if (((i = (n = n.call(t)).next), 0 === e)) {
                                    if (Object(n) !== n) return;
                                    c = !1;
                                } else for (; !(c = (r = i.call(n)).done) && (u.push(r.value), u.length !== e); c = !0);
                            } catch (t) {
                                (s = !0), (o = t);
                            } finally {
                                try {
                                    if (!c && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return u;
                        }
                    })(t, e) ||
                    S(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function g(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return E(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    S(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function S(t, e) {
                if (t) {
                    if ("string" == typeof t) return E(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? E(t, e) : void 0;
                }
            }
            function E(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            var j = 1e-4,
                A = function (t, e) {
                    return [0, 3 * t, 3 * e - 6 * t, 3 * t - 3 * e + 1];
                },
                w = function (t, e) {
                    return t
                        .map(function (t, n) {
                            return t * Math.pow(e, n);
                        })
                        .reduce(function (t, e) {
                            return t + e;
                        });
                },
                x = function (t, e) {
                    return function (n) {
                        var r = A(t, e);
                        return w(r, n);
                    };
                },
                P = function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var r = e[0],
                        o = e[1],
                        i = e[2],
                        a = e[3];
                    if (1 === e.length)
                        switch (e[0]) {
                            case "linear":
                                (r = 0), (o = 0), (i = 1), (a = 1);
                                break;
                            case "ease":
                                (r = 0.25), (o = 0.1), (i = 0.25), (a = 1);
                                break;
                            case "ease-in":
                                (r = 0.42), (o = 0), (i = 1), (a = 1);
                                break;
                            case "ease-out":
                                (r = 0.42), (o = 0), (i = 0.58), (a = 1);
                                break;
                            case "ease-in-out":
                                (r = 0), (o = 0), (i = 0.58), (a = 1);
                                break;
                            default:
                                var u = e[0].split("(");
                                if ("cubic-bezier" === u[0] && 4 === u[1].split(")")[0].split(",").length) {
                                    var c = O(
                                        u[1]
                                            .split(")")[0]
                                            .split(",")
                                            .map(function (t) {
                                                return parseFloat(t);
                                            }),
                                        4,
                                    );
                                    (r = c[0]), (o = c[1]), (i = c[2]), (a = c[3]);
                                }
                        }
                    [r, i, o, a].every(function (t) {
                        return "number" == typeof t && t >= 0 && t <= 1;
                    });
                    var s,
                        l,
                        f = x(r, i),
                        p = x(o, a),
                        y =
                            ((s = r),
                            (l = i),
                            function (t) {
                                var e = A(s, l),
                                    n = [].concat(
                                        g(
                                            e
                                                .map(function (t, e) {
                                                    return t * e;
                                                })
                                                .slice(1),
                                        ),
                                        [0],
                                    );
                                return w(n, t);
                            }),
                        b = function (t) {
                            for (var e, n = t > 1 ? 1 : t, r = n, o = 0; o < 8; ++o) {
                                var i = f(r) - n,
                                    a = y(r);
                                if (Math.abs(i - n) < j || a < j) return p(r);
                                r = (e = r - i / a) > 1 ? 1 : e < 0 ? 0 : e;
                            }
                            return p(r);
                        };
                    return (b.isStepper = !1), b;
                },
                k = function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var r = e[0];
                    if ("string" == typeof r)
                        switch (r) {
                            case "ease":
                            case "ease-in-out":
                            case "ease-out":
                            case "ease-in":
                            case "linear":
                                return P(r);
                            case "spring":
                                return (function () {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                        e = t.stiff,
                                        n = void 0 === e ? 100 : e,
                                        r = t.damping,
                                        o = void 0 === r ? 8 : r,
                                        i = t.dt,
                                        a = void 0 === i ? 17 : i,
                                        u = function (t, e, r) {
                                            var i = r + ((-(t - e) * n - r * o) * a) / 1e3,
                                                u = (r * a) / 1e3 + t;
                                            return Math.abs(u - e) < j && Math.abs(i) < j ? [e, 0] : [u, i];
                                        };
                                    return (u.isStepper = !0), (u.dt = a), u;
                                })();
                            default:
                                if ("cubic-bezier" === r.split("(")[0]) return P(r);
                        }
                    return "function" == typeof r ? r : null;
                };
            function T(t) {
                return (
                    (T =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    T(t)
                );
            }
            function C(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return M(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    _(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function R(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function N(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? R(Object(n), !0).forEach(function (e) {
                              D(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : R(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function D(t, e, n) {
                return (
                    (e = (function (t) {
                        var e = (function (t, e) {
                            if ("object" !== T(t) || null === t) return t;
                            var n = t[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var r = n.call(t, e || "default");
                                if ("object" !== T(r)) return r;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === e ? String : Number)(t);
                        })(t, "string");
                        return "symbol" === T(e) ? e : String(e);
                    })(e)) in t
                        ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 })
                        : (t[e] = n),
                    t
                );
            }
            function I(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var n = null == t ? null : ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                a,
                                u = [],
                                c = !0,
                                s = !1;
                            try {
                                if (((i = (n = n.call(t)).next), 0 === e)) {
                                    if (Object(n) !== n) return;
                                    c = !1;
                                } else for (; !(c = (r = i.call(n)).done) && (u.push(r.value), u.length !== e); c = !0);
                            } catch (t) {
                                (s = !0), (o = t);
                            } finally {
                                try {
                                    if (!c && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                } finally {
                                    if (s) throw o;
                                }
                            }
                            return u;
                        }
                    })(t, e) ||
                    _(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function _(t, e) {
                if (t) {
                    if ("string" == typeof t) return M(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? M(t, e) : void 0;
                }
            }
            function M(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            var F = function (t, e, n) {
                    return t + (e - t) * n;
                },
                B = function (t) {
                    return t.from !== t.to;
                },
                U = function t(e, n, r) {
                    var o = h(function (t, n) {
                        if (B(n)) {
                            var r = I(e(n.from, n.to, n.velocity), 2),
                                o = r[0],
                                i = r[1];
                            return N(N({}, n), {}, { from: o, velocity: i });
                        }
                        return n;
                    }, n);
                    return r < 1
                        ? h(function (t, e) {
                              return B(e) ? N(N({}, e), {}, { velocity: F(e.velocity, o[t].velocity, r), from: F(e.from, o[t].from, r) }) : e;
                          }, n)
                        : t(e, o, r - 1);
                };
            const Z = function (t, e, n, r, o) {
                var i,
                    a,
                    u,
                    c,
                    s =
                        ((i = t),
                        (a = e),
                        [Object.keys(i), Object.keys(a)].reduce(function (t, e) {
                            return t.filter(function (t) {
                                return e.includes(t);
                            });
                        })),
                    l = s.reduce(function (n, r) {
                        return N(N({}, n), {}, D({}, r, [t[r], e[r]]));
                    }, {}),
                    f = s.reduce(function (n, r) {
                        return N(N({}, n), {}, D({}, r, { from: t[r], velocity: 0, to: e[r] }));
                    }, {}),
                    p = -1,
                    y = function () {
                        return null;
                    };
                return (
                    (y = n.isStepper
                        ? function (r) {
                              u || (u = r);
                              var i = (r - u) / n.dt;
                              (f = U(n, f, i)),
                                  o(
                                      N(
                                          N(N({}, t), e),
                                          h(function (t, e) {
                                              return e.from;
                                          }, f),
                                      ),
                                  ),
                                  (u = r),
                                  Object.values(f).filter(B).length && (p = requestAnimationFrame(y));
                          }
                        : function (i) {
                              c || (c = i);
                              var a = (i - c) / r,
                                  u = h(function (t, e) {
                                      return F.apply(void 0, C(e).concat([n(a)]));
                                  }, l);
                              if ((o(N(N(N({}, t), e), u)), a < 1)) p = requestAnimationFrame(y);
                              else {
                                  var s = h(function (t, e) {
                                      return F.apply(void 0, C(e).concat([n(1)]));
                                  }, l);
                                  o(N(N(N({}, t), e), s));
                              }
                          }),
                    function () {
                        return (
                            requestAnimationFrame(y),
                            function () {
                                cancelAnimationFrame(p);
                            }
                        );
                    }
                );
            };
            function q(t) {
                return (
                    (q =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    q(t)
                );
            }
            var J = ["children", "begin", "duration", "attributeName", "easing", "isActive", "steps", "from", "to", "canBegin", "onAnimationEnd", "shouldReAnimate", "onAnimationReStart"];
            function V(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                        for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                        return o;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
                }
                return o;
            }
            function L(t) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return $(t);
                    })(t) ||
                    (function (t) {
                        if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
                    })(t) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" == typeof t) return $(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(t);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $(t, e);
                    })(t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function $(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function G(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function W(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? G(Object(n), !0).forEach(function (e) {
                              z(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : G(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function z(t, e, n) {
                return (e = H(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function X(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, H(r.key), r);
                }
            }
            function H(t) {
                var e = (function (t, e) {
                    if ("object" !== q(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" !== q(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" === q(e) ? e : String(e);
            }
            function K(t, e) {
                return (
                    (K = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    K(t, e)
                );
            }
            function Q(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = et(t);
                    if (e) {
                        var o = et(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return Y(this, n);
                };
            }
            function Y(t, e) {
                if (e && ("object" === q(e) || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return tt(t);
            }
            function tt(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function et(t) {
                return (
                    (et = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    et(t)
                );
            }
            var nt = (function (t) {
                !(function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && K(t, e);
                })(u, t);
                var e,
                    n,
                    o,
                    i = Q(u);
                function u(t, e) {
                    var n;
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, u);
                    var r = (n = i.call(this, t, e)).props,
                        o = r.isActive,
                        a = r.attributeName,
                        c = r.from,
                        s = r.to,
                        l = r.steps,
                        f = r.children,
                        p = r.duration;
                    if (((n.handleStyleChange = n.handleStyleChange.bind(tt(n))), (n.changeStyle = n.changeStyle.bind(tt(n))), !o || p <= 0)) return (n.state = { style: {} }), "function" == typeof f && (n.state = { style: s }), Y(n);
                    if (l && l.length) n.state = { style: l[0].style };
                    else if (c) {
                        if ("function" == typeof f) return (n.state = { style: c }), Y(n);
                        n.state = { style: a ? z({}, a, c) : c };
                    } else n.state = { style: {} };
                    return n;
                }
                return (
                    (e = u),
                    (n = [
                        {
                            key: "componentDidMount",
                            value: function () {
                                var t = this.props,
                                    e = t.isActive,
                                    n = t.canBegin;
                                (this.mounted = !0), e && n && this.runAnimation(this.props);
                            },
                        },
                        {
                            key: "componentDidUpdate",
                            value: function (t) {
                                var e = this.props,
                                    n = e.isActive,
                                    r = e.canBegin,
                                    o = e.attributeName,
                                    i = e.shouldReAnimate,
                                    u = e.to,
                                    c = e.from,
                                    s = this.state.style;
                                if (r)
                                    if (n) {
                                        if (!((0, a.vZ)(t.to, u) && t.canBegin && t.isActive)) {
                                            var l = !t.canBegin || !t.isActive;
                                            this.manager && this.manager.stop(), this.stopJSAnimation && this.stopJSAnimation();
                                            var f = l || i ? c : t.to;
                                            if (this.state && s) {
                                                var p = { style: o ? z({}, o, f) : f };
                                                ((o && s[o] !== f) || (!o && s !== f)) && this.setState(p);
                                            }
                                            this.runAnimation(W(W({}, this.props), {}, { from: f, begin: 0 }));
                                        }
                                    } else {
                                        var y = { style: o ? z({}, o, u) : u };
                                        this.state && s && ((o && s[o] !== u) || (!o && s !== u)) && this.setState(y);
                                    }
                            },
                        },
                        {
                            key: "componentWillUnmount",
                            value: function () {
                                this.mounted = !1;
                                var t = this.props.onAnimationEnd;
                                this.unSubscribe && this.unSubscribe(), this.manager && (this.manager.stop(), (this.manager = null)), this.stopJSAnimation && this.stopJSAnimation(), t && t();
                            },
                        },
                        {
                            key: "handleStyleChange",
                            value: function (t) {
                                this.changeStyle(t);
                            },
                        },
                        {
                            key: "changeStyle",
                            value: function (t) {
                                this.mounted && this.setState({ style: t });
                            },
                        },
                        {
                            key: "runJSAnimation",
                            value: function (t) {
                                var e = this,
                                    n = t.from,
                                    r = t.to,
                                    o = t.duration,
                                    i = t.easing,
                                    a = t.begin,
                                    u = t.onAnimationEnd,
                                    c = t.onAnimationStart,
                                    s = Z(n, r, k(i), o, this.changeStyle);
                                this.manager.start([
                                    c,
                                    a,
                                    function () {
                                        e.stopJSAnimation = s();
                                    },
                                    o,
                                    u,
                                ]);
                            },
                        },
                        {
                            key: "runStepAnimation",
                            value: function (t) {
                                var e = this,
                                    n = t.steps,
                                    r = t.begin,
                                    o = t.onAnimationStart,
                                    i = n[0],
                                    a = i.style,
                                    u = i.duration,
                                    c = void 0 === u ? 0 : u;
                                return this.manager.start(
                                    [o].concat(
                                        L(
                                            n.reduce(
                                                function (t, r, o) {
                                                    if (0 === o) return t;
                                                    var i = r.duration,
                                                        a = r.easing,
                                                        u = void 0 === a ? "ease" : a,
                                                        c = r.style,
                                                        s = r.properties,
                                                        l = r.onAnimationEnd,
                                                        f = o > 0 ? n[o - 1] : r,
                                                        p = s || Object.keys(c);
                                                    if ("function" == typeof u || "spring" === u) return [].concat(L(t), [e.runJSAnimation.bind(e, { from: f.style, to: c, duration: i, easing: u }), i]);
                                                    var y = v(p, i, u),
                                                        b = W(W(W({}, f.style), c), {}, { transition: y });
                                                    return [].concat(L(t), [b, i, l]).filter(d);
                                                },
                                                [a, Math.max(c, r)],
                                            ),
                                        ),
                                        [t.onAnimationEnd],
                                    ),
                                );
                            },
                        },
                        {
                            key: "runAnimation",
                            value: function (t) {
                                this.manager || (this.manager = f());
                                var e = t.begin,
                                    n = t.duration,
                                    r = t.attributeName,
                                    o = t.to,
                                    i = t.easing,
                                    a = t.onAnimationStart,
                                    u = t.onAnimationEnd,
                                    c = t.steps,
                                    s = t.children,
                                    l = this.manager;
                                if (((this.unSubscribe = l.subscribe(this.handleStyleChange)), "function" != typeof i && "function" != typeof s && "spring" !== i))
                                    if (c.length > 1) this.runStepAnimation(t);
                                    else {
                                        var p = r ? z({}, r, o) : o,
                                            y = v(Object.keys(p), n, i);
                                        l.start([a, e, W(W({}, p), {}, { transition: y }), n, u]);
                                    }
                                else this.runJSAnimation(t);
                            },
                        },
                        {
                            key: "render",
                            value: function () {
                                var t = this.props,
                                    e = t.children,
                                    n = (t.begin, t.duration),
                                    o = (t.attributeName, t.easing, t.isActive),
                                    i = (t.steps, t.from, t.to, t.canBegin, t.onAnimationEnd, t.shouldReAnimate, t.onAnimationReStart, V(t, J)),
                                    a = r.Children.count(e),
                                    u = this.state.style;
                                if ("function" == typeof e) return e(u);
                                if (!o || 0 === a || n <= 0) return e;
                                var c = function (t) {
                                    var e = t.props,
                                        n = e.style,
                                        o = void 0 === n ? {} : n,
                                        a = e.className;
                                    return (0, r.cloneElement)(t, W(W({}, i), {}, { style: W(W({}, o), u), className: a }));
                                };
                                return 1 === a
                                    ? c(r.Children.only(e))
                                    : r.createElement(
                                          "div",
                                          null,
                                          r.Children.map(e, function (t) {
                                              return c(t);
                                          }),
                                      );
                            },
                        },
                    ]) && X(e.prototype, n),
                    o && X(e, o),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    u
                );
            })(r.PureComponent);
            (nt.displayName = "Animate"), (nt.defaultProps = { begin: 0, duration: 1e3, from: "", to: "", attributeName: "", easing: "ease", isActive: !0, canBegin: !0, steps: [], onAnimationEnd: function () {}, onAnimationStart: function () {} }), (nt.propTypes = { from: i().oneOfType([i().object, i().string]), to: i().oneOfType([i().object, i().string]), attributeName: i().string, duration: i().number, begin: i().number, easing: i().oneOfType([i().string, i().func]), steps: i().arrayOf(i().shape({ duration: i().number.isRequired, style: i().object.isRequired, easing: i().oneOfType([i().oneOf(["ease", "ease-in", "ease-out", "ease-in-out", "linear"]), i().func]), properties: i().arrayOf("string"), onAnimationEnd: i().func })), children: i().oneOfType([i().node, i().func]), isActive: i().bool, canBegin: i().bool, onAnimationEnd: i().func, shouldReAnimate: i().bool, onAnimationStart: i().func, onAnimationReStart: i().func });
            const rt = nt;
            var ot = n(231461),
                it = n(807896),
                at = n(580753),
                ut = n(981665);
            const ct = r.createContext(null);
            function st(t, e) {
                var n = Object.create(null);
                return (
                    t &&
                        r.Children.map(t, function (t) {
                            return t;
                        }).forEach(function (t) {
                            n[t.key] = (function (t) {
                                return e && (0, r.isValidElement)(t) ? e(t) : t;
                            })(t);
                        }),
                    n
                );
            }
            function lt(t, e, n) {
                return null != n[e] ? n[e] : t.props[e];
            }
            function ft(t, e, n) {
                var o = st(t.children),
                    i = (function (t, e) {
                        function n(n) {
                            return n in e ? e[n] : t[n];
                        }
                        (t = t || {}), (e = e || {});
                        var r,
                            o = Object.create(null),
                            i = [];
                        for (var a in t) a in e ? i.length && ((o[a] = i), (i = [])) : i.push(a);
                        var u = {};
                        for (var c in e) {
                            if (o[c])
                                for (r = 0; r < o[c].length; r++) {
                                    var s = o[c][r];
                                    u[o[c][r]] = n(s);
                                }
                            u[c] = n(c);
                        }
                        for (r = 0; r < i.length; r++) u[i[r]] = n(i[r]);
                        return u;
                    })(e, o);
                return (
                    Object.keys(i).forEach(function (a) {
                        var u = i[a];
                        if ((0, r.isValidElement)(u)) {
                            var c = a in e,
                                s = a in o,
                                l = e[a],
                                f = (0, r.isValidElement)(l) && !l.props.in;
                            !s || (c && !f) ? (s || !c || f ? s && c && (0, r.isValidElement)(l) && (i[a] = (0, r.cloneElement)(u, { onExited: n.bind(null, u), in: l.props.in, exit: lt(u, "exit", t), enter: lt(u, "enter", t) })) : (i[a] = (0, r.cloneElement)(u, { in: !1 }))) : (i[a] = (0, r.cloneElement)(u, { onExited: n.bind(null, u), in: !0, exit: lt(u, "exit", t), enter: lt(u, "enter", t) }));
                        }
                    }),
                    i
                );
            }
            var pt =
                    Object.values ||
                    function (t) {
                        return Object.keys(t).map(function (e) {
                            return t[e];
                        });
                    },
                yt = (function (t) {
                    function e(e, n) {
                        var r,
                            o = (r = t.call(this, e, n) || this).handleExited.bind((0, at.Z)(r));
                        return (r.state = { contextValue: { isMounting: !0 }, handleExited: o, firstRender: !0 }), r;
                    }
                    (0, ut.Z)(e, t);
                    var n = e.prototype;
                    return (
                        (n.componentDidMount = function () {
                            (this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } });
                        }),
                        (n.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (e.getDerivedStateFromProps = function (t, e) {
                            var n,
                                o,
                                i = e.children,
                                a = e.handleExited;
                            return {
                                children: e.firstRender
                                    ? ((n = t),
                                      (o = a),
                                      st(n.children, function (t) {
                                          return (0, r.cloneElement)(t, { onExited: o.bind(null, t), in: !0, appear: lt(t, "appear", n), enter: lt(t, "enter", n), exit: lt(t, "exit", n) });
                                      }))
                                    : ft(t, i, a),
                                firstRender: !1,
                            };
                        }),
                        (n.handleExited = function (t, e) {
                            var n = st(this.props.children);
                            t.key in n ||
                                (t.props.onExited && t.props.onExited(e),
                                this.mounted &&
                                    this.setState(function (e) {
                                        var n = (0, it.Z)({}, e.children);
                                        return delete n[t.key], { children: n };
                                    }));
                        }),
                        (n.render = function () {
                            var t = this.props,
                                e = t.component,
                                n = t.childFactory,
                                o = (0, ot.Z)(t, ["component", "childFactory"]),
                                i = this.state.contextValue,
                                a = pt(this.state.children).map(n);
                            return delete o.appear, delete o.enter, delete o.exit, null === e ? r.createElement(ct.Provider, { value: i }, a) : r.createElement(ct.Provider, { value: i }, r.createElement(e, o, a));
                        }),
                        e
                    );
                })(r.Component);
            (yt.propTypes = {}),
                (yt.defaultProps = {
                    component: "div",
                    childFactory: function (t) {
                        return t;
                    },
                });
            const bt = yt;
            var mt = n(928316);
            const dt = !1;
            var ht = "unmounted",
                vt = "exited",
                Ot = "entering",
                gt = "entered",
                St = "exiting",
                Et = (function (t) {
                    function e(e, n) {
                        var r;
                        r = t.call(this, e, n) || this;
                        var o,
                            i = n && !n.isMounting ? e.enter : e.appear;
                        return (r.appearStatus = null), e.in ? (i ? ((o = vt), (r.appearStatus = Ot)) : (o = gt)) : (o = e.unmountOnExit || e.mountOnEnter ? ht : vt), (r.state = { status: o }), (r.nextCallback = null), r;
                    }
                    (0, ut.Z)(e, t),
                        (e.getDerivedStateFromProps = function (t, e) {
                            return t.in && e.status === ht ? { status: vt } : null;
                        });
                    var n = e.prototype;
                    return (
                        (n.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (n.componentDidUpdate = function (t) {
                            var e = null;
                            if (t !== this.props) {
                                var n = this.state.status;
                                this.props.in ? n !== Ot && n !== gt && (e = Ot) : (n !== Ot && n !== gt) || (e = St);
                            }
                            this.updateStatus(!1, e);
                        }),
                        (n.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (n.getTimeouts = function () {
                            var t,
                                e,
                                n,
                                r = this.props.timeout;
                            return (t = e = n = r), null != r && "number" != typeof r && ((t = r.exit), (e = r.enter), (n = void 0 !== r.appear ? r.appear : e)), { exit: t, enter: e, appear: n };
                        }),
                        (n.updateStatus = function (t, e) {
                            if ((void 0 === t && (t = !1), null !== e))
                                if ((this.cancelNextCallback(), e === Ot)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var n = this.props.nodeRef ? this.props.nodeRef.current : mt.findDOMNode(this);
                                        n &&
                                            (function (t) {
                                                t.scrollTop;
                                            })(n);
                                    }
                                    this.performEnter(t);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === vt && this.setState({ status: ht });
                        }),
                        (n.performEnter = function (t) {
                            var e = this,
                                n = this.props.enter,
                                r = this.context ? this.context.isMounting : t,
                                o = this.props.nodeRef ? [r] : [mt.findDOMNode(this), r],
                                i = o[0],
                                a = o[1],
                                u = this.getTimeouts(),
                                c = r ? u.appear : u.enter;
                            (!t && !n) || dt
                                ? this.safeSetState({ status: gt }, function () {
                                      e.props.onEntered(i);
                                  })
                                : (this.props.onEnter(i, a),
                                  this.safeSetState({ status: Ot }, function () {
                                      e.props.onEntering(i, a),
                                          e.onTransitionEnd(c, function () {
                                              e.safeSetState({ status: gt }, function () {
                                                  e.props.onEntered(i, a);
                                              });
                                          });
                                  }));
                        }),
                        (n.performExit = function () {
                            var t = this,
                                e = this.props.exit,
                                n = this.getTimeouts(),
                                r = this.props.nodeRef ? void 0 : mt.findDOMNode(this);
                            e && !dt
                                ? (this.props.onExit(r),
                                  this.safeSetState({ status: St }, function () {
                                      t.props.onExiting(r),
                                          t.onTransitionEnd(n.exit, function () {
                                              t.safeSetState({ status: vt }, function () {
                                                  t.props.onExited(r);
                                              });
                                          });
                                  }))
                                : this.safeSetState({ status: vt }, function () {
                                      t.props.onExited(r);
                                  });
                        }),
                        (n.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (n.safeSetState = function (t, e) {
                            (e = this.setNextCallback(e)), this.setState(t, e);
                        }),
                        (n.setNextCallback = function (t) {
                            var e = this,
                                n = !0;
                            return (
                                (this.nextCallback = function (r) {
                                    n && ((n = !1), (e.nextCallback = null), t(r));
                                }),
                                (this.nextCallback.cancel = function () {
                                    n = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (n.onTransitionEnd = function (t, e) {
                            this.setNextCallback(e);
                            var n = this.props.nodeRef ? this.props.nodeRef.current : mt.findDOMNode(this),
                                r = null == t && !this.props.addEndListener;
                            if (n && !r) {
                                if (this.props.addEndListener) {
                                    var o = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                        i = o[0],
                                        a = o[1];
                                    this.props.addEndListener(i, a);
                                }
                                null != t && setTimeout(this.nextCallback, t);
                            } else setTimeout(this.nextCallback, 0);
                        }),
                        (n.render = function () {
                            var t = this.state.status;
                            if (t === ht) return null;
                            var e = this.props,
                                n = e.children,
                                o = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, (0, ot.Z)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                            return r.createElement(ct.Provider, { value: null }, "function" == typeof n ? n(t, o) : r.cloneElement(r.Children.only(n), o));
                        }),
                        e
                    );
                })(r.Component);
            function jt() {}
            (Et.contextType = ct), (Et.propTypes = {}), (Et.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: jt, onEntering: jt, onEntered: jt, onExit: jt, onExiting: jt, onExited: jt }), (Et.UNMOUNTED = ht), (Et.EXITED = vt), (Et.ENTERING = Ot), (Et.ENTERED = gt), (Et.EXITING = St);
            const At = Et;
            var wt = ["children", "appearOptions", "enterOptions", "leaveOptions"];
            function xt(t) {
                return (
                    (xt =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    xt(t)
                );
            }
            function Pt() {
                return (
                    (Pt = Object.assign
                        ? Object.assign.bind()
                        : function (t) {
                              for (var e = 1; e < arguments.length; e++) {
                                  var n = arguments[e];
                                  for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                              }
                              return t;
                          }),
                    Pt.apply(this, arguments)
                );
            }
            function kt(t, e) {
                if (null == t) return {};
                var n,
                    r,
                    o = (function (t, e) {
                        if (null == t) return {};
                        var n,
                            r,
                            o = {},
                            i = Object.keys(t);
                        for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
                        return o;
                    })(t, e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    for (r = 0; r < i.length; r++) (n = i[r]), e.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(t, n) && (o[n] = t[n]));
                }
                return o;
            }
            function Tt(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e &&
                        (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })),
                        n.push.apply(n, r);
                }
                return n;
            }
            function Ct(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                        ? Tt(Object(n), !0).forEach(function (e) {
                              Mt(t, e, n[e]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                          : Tt(Object(n)).forEach(function (e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                            });
                }
                return t;
            }
            function Rt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(t, Ft(r.key), r);
                }
            }
            function Nt(t, e) {
                return (
                    (Nt = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, e) {
                              return (t.__proto__ = e), t;
                          }),
                    Nt(t, e)
                );
            }
            function Dt(t) {
                var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
                    } catch (t) {
                        return !1;
                    }
                })();
                return function () {
                    var n,
                        r = _t(t);
                    if (e) {
                        var o = _t(this).constructor;
                        n = Reflect.construct(r, arguments, o);
                    } else n = r.apply(this, arguments);
                    return (function (t, e) {
                        if (e && ("object" === xt(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return It(t);
                    })(this, n);
                };
            }
            function It(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t;
            }
            function _t(t) {
                return (
                    (_t = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (t) {
                              return t.__proto__ || Object.getPrototypeOf(t);
                          }),
                    _t(t)
                );
            }
            function Mt(t, e, n) {
                return (e = Ft(e)) in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (t[e] = n), t;
            }
            function Ft(t) {
                var e = (function (t, e) {
                    if ("object" !== xt(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" !== xt(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return ("string" === e ? String : Number)(t);
                })(t, "string");
                return "symbol" === xt(e) ? e : String(e);
            }
            var Bt = function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        e = t.steps,
                        n = t.duration;
                    return e && e.length
                        ? e.reduce(function (t, e) {
                              return t + (Number.isFinite(e.duration) && e.duration > 0 ? e.duration : 0);
                          }, 0)
                        : Number.isFinite(n)
                          ? n
                          : 0;
                },
                Ut = (function (t) {
                    !(function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        (t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), Object.defineProperty(t, "prototype", { writable: !1 }), e && Nt(t, e);
                    })(a, t);
                    var e,
                        n,
                        o,
                        i = Dt(a);
                    function a() {
                        var t;
                        return (
                            (function (t, e) {
                                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                            })(this, a),
                            Mt(It((t = i.call(this))), "handleEnter", function (e, n) {
                                var r = t.props,
                                    o = r.appearOptions,
                                    i = r.enterOptions;
                                t.handleStyleActive(n ? o : i);
                            }),
                            Mt(It(t), "handleExit", function () {
                                var e = t.props.leaveOptions;
                                t.handleStyleActive(e);
                            }),
                            (t.state = { isActive: !1 }),
                            t
                        );
                    }
                    return (
                        (e = a),
                        (n = [
                            {
                                key: "handleStyleActive",
                                value: function (t) {
                                    if (t) {
                                        var e = t.onAnimationEnd
                                            ? function () {
                                                  t.onAnimationEnd();
                                              }
                                            : null;
                                        this.setState(Ct(Ct({}, t), {}, { onAnimationEnd: e, isActive: !0 }));
                                    }
                                },
                            },
                            {
                                key: "parseTimeout",
                                value: function () {
                                    var t = this.props,
                                        e = t.appearOptions,
                                        n = t.enterOptions,
                                        r = t.leaveOptions;
                                    return Bt(e) + Bt(n) + Bt(r);
                                },
                            },
                            {
                                key: "render",
                                value: function () {
                                    var t = this,
                                        e = this.props,
                                        n = e.children,
                                        o = (e.appearOptions, e.enterOptions, e.leaveOptions, kt(e, wt));
                                    return r.createElement(At, Pt({}, o, { onEnter: this.handleEnter, onExit: this.handleExit, timeout: this.parseTimeout() }), function () {
                                        return r.createElement(rt, t.state, r.Children.only(n));
                                    });
                                },
                            },
                        ]) && Rt(e.prototype, n),
                        o && Rt(e, o),
                        Object.defineProperty(e, "prototype", { writable: !1 }),
                        a
                    );
                })(r.Component);
            Ut.propTypes = { appearOptions: i().object, enterOptions: i().object, leaveOptions: i().object, children: i().element };
            const Zt = Ut;
            function qt(t) {
                var e = t.component,
                    n = t.children,
                    o = t.appear,
                    i = t.enter,
                    a = t.leave;
                return r.createElement(
                    bt,
                    { component: e },
                    r.Children.map(n, function (t, e) {
                        return r.createElement(Zt, { appearOptions: o, enterOptions: i, leaveOptions: a, key: "child-".concat(e) }, t);
                    }),
                );
            }
            (qt.propTypes = { appear: i().object, enter: i().object, leave: i().object, children: i().oneOfType([i().array, i().element]), component: i().any }), (qt.defaultProps = { component: "span" });
            const Jt = rt;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774.54aa350a.js.map
