window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-48a4958c"],
        {
            574858: (r, t, e) => {
                var n = e(23103),
                    o = e(215439).findLastIndex,
                    i = e(609736);
                n(
                    { target: "Array", proto: !0 },
                    {
                        findLastIndex: function (r) {
                            return o(this, r, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    },
                ),
                    i("findLastIndex");
            },
            136728: (r, t, e) => {
                var n = e(23103),
                    o = e(492991),
                    i = e(639646),
                    a = e(936554),
                    u = e(513064);
                n(
                    {
                        target: "Array",
                        proto: !0,
                        arity: 1,
                        forced:
                            e(824229)(function () {
                                return 4294967297 !== [].push.call({ length: 4294967296 }, 1);
                            }) ||
                            !(function () {
                                try {
                                    Object.defineProperty([], "length", { writable: !1 }).push();
                                } catch (r) {
                                    return r instanceof TypeError;
                                }
                            })(),
                    },
                    {
                        push: function (r) {
                            var t = o(this),
                                e = i(t),
                                n = arguments.length;
                            u(e + n);
                            for (var f = 0; f < n; f++) (t[e] = arguments[f]), e++;
                            return a(t, e), e;
                        },
                    },
                );
            },
            901951: (r, t, e) => {
                var n = e(23103),
                    o = e(492991),
                    i = e(639646),
                    a = e(936554),
                    u = e(779563),
                    f = e(513064);
                n(
                    {
                        target: "Array",
                        proto: !0,
                        arity: 1,
                        forced:
                            1 !== [].unshift(0) ||
                            !(function () {
                                try {
                                    Object.defineProperty([], "length", { writable: !1 }).unshift();
                                } catch (r) {
                                    return r instanceof TypeError;
                                }
                            })(),
                    },
                    {
                        unshift: function (r) {
                            var t = o(this),
                                e = i(t),
                                n = arguments.length;
                            if (n) {
                                f(e + n);
                                for (var c = e; c--; ) {
                                    var s = c + n;
                                    c in t ? (t[s] = t[c]) : u(t, s);
                                }
                                for (var y = 0; y < n; y++) t[y] = arguments[y];
                            }
                            return a(t, e + n);
                        },
                    },
                );
            },
            571372: (r, t, e) => {
                var n = e(23103),
                    o = e(609859),
                    i = e(653171),
                    a = e(493949),
                    u = "WebAssembly",
                    f = o[u],
                    c = 7 !== new Error("e", { cause: 7 }).cause,
                    s = function (r, t) {
                        var e = {};
                        (e[r] = a(r, t, c)), n({ global: !0, constructor: !0, arity: 1, forced: c }, e);
                    },
                    y = function (r, t) {
                        if (f && f[r]) {
                            var e = {};
                            (e[r] = a(u + "." + r, t, c)), n({ target: u, stat: !0, constructor: !0, arity: 1, forced: c }, e);
                        }
                    };
                s("Error", function (r) {
                    return function (t) {
                        return i(r, this, arguments);
                    };
                }),
                    s("EvalError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    s("RangeError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    s("ReferenceError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    s("SyntaxError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    s("TypeError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    s("URIError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    y("CompileError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    y("LinkError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    }),
                    y("RuntimeError", function (r) {
                        return function (t) {
                            return i(r, this, arguments);
                        };
                    });
            },
            694898: (r, t, e) => {
                var n = e(509918),
                    o = e(639646),
                    i = e(643329),
                    a = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("at", function (r) {
                    var t = a(this),
                        e = o(t),
                        n = i(r),
                        u = n >= 0 ? n : e + n;
                    return u < 0 || u >= e ? void 0 : t[u];
                });
            },
            38857: (r, t, e) => {
                var n = e(509918),
                    o = e(997065),
                    i = e(519123),
                    a = e(781589),
                    u = e(720266),
                    f = e(265968),
                    c = e(824229),
                    s = n.aTypedArray,
                    y = n.exportTypedArrayMethod,
                    l = f("".slice);
                y(
                    "fill",
                    function (r) {
                        var t = arguments.length;
                        s(this);
                        var e = "Big" === l(a(this), 0, 3) ? i(r) : +r;
                        return u(o, this, e, t > 1 ? arguments[1] : void 0, t > 2 ? arguments[2] : void 0);
                    },
                    c(function () {
                        var r = 0;
                        return (
                            new Int8Array(2).fill({
                                valueOf: function () {
                                    return r++;
                                },
                            }),
                            1 !== r
                        );
                    }),
                );
            },
            157093: (r, t, e) => {
                var n = e(509918),
                    o = e(215439).findLastIndex,
                    i = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLastIndex", function (r) {
                    return o(i(this), r, arguments.length > 1 ? arguments[1] : void 0);
                });
            },
            540171: (r, t, e) => {
                var n = e(509918),
                    o = e(215439).findLast,
                    i = n.aTypedArray;
                (0, n.exportTypedArrayMethod)("findLast", function (r) {
                    return o(i(this), r, arguments.length > 1 ? arguments[1] : void 0);
                });
            },
            265688: (r, t, e) => {
                var n = e(609859),
                    o = e(720266),
                    i = e(509918),
                    a = e(639646),
                    u = e(584262),
                    f = e(492991),
                    c = e(824229),
                    s = n.RangeError,
                    y = n.Int8Array,
                    l = y && y.prototype,
                    p = l && l.set,
                    d = i.aTypedArray,
                    h = i.exportTypedArrayMethod,
                    v = !c(function () {
                        var r = new Uint8ClampedArray(2);
                        return o(p, r, { length: 1, 0: 3 }, 1), 3 !== r[1];
                    }),
                    g =
                        v &&
                        i.NATIVE_ARRAY_BUFFER_VIEWS &&
                        c(function () {
                            var r = new y(2);
                            return r.set(1), r.set("2", 1), 0 !== r[0] || 2 !== r[1];
                        });
                h(
                    "set",
                    function (r) {
                        d(this);
                        var t = u(arguments.length > 1 ? arguments[1] : void 0, 1),
                            e = f(r);
                        if (v) return o(p, this, e, t);
                        var n = this.length,
                            i = a(e),
                            c = 0;
                        if (i + t > n) throw new s("Wrong length");
                        for (; c < i; ) this[t + c] = e[c++];
                    },
                    !v || g,
                );
            },
            270315: (r, t, e) => {
                var n = e(609859),
                    o = e(844745),
                    i = e(824229),
                    a = e(277111),
                    u = e(633867),
                    f = e(509918),
                    c = e(922671),
                    s = e(548506),
                    y = e(406358),
                    l = e(449811),
                    p = f.aTypedArray,
                    d = f.exportTypedArrayMethod,
                    h = n.Uint16Array,
                    v = h && o(h.prototype.sort),
                    g = !(
                        !v ||
                        (i(function () {
                            v(new h(2), null);
                        }) &&
                            i(function () {
                                v(new h(2), {});
                            }))
                    ),
                    b =
                        !!v &&
                        !i(function () {
                            if (y) return y < 74;
                            if (c) return c < 67;
                            if (s) return !0;
                            if (l) return l < 602;
                            var r,
                                t,
                                e = new h(516),
                                n = Array(516);
                            for (r = 0; r < 516; r++) (t = r % 4), (e[r] = 515 - r), (n[r] = r - 2 * t + 3);
                            for (
                                v(e, function (r, t) {
                                    return ((r / 4) | 0) - ((t / 4) | 0);
                                }),
                                    r = 0;
                                r < 516;
                                r++
                            )
                                if (e[r] !== n[r]) return !0;
                        });
                d(
                    "sort",
                    function (r) {
                        return (
                            void 0 !== r && a(r),
                            b
                                ? v(this, r)
                                : u(
                                      p(this),
                                      (function (r) {
                                          return function (t, e) {
                                              return void 0 !== r ? +r(t, e) || 0 : e != e ? -1 : t != t ? 1 : 0 === t && 0 === e ? (1 / t > 0 && 1 / e < 0 ? 1 : -1) : t > e;
                                          };
                                      })(r),
                                  )
                        );
                    },
                    !b || g,
                );
            },
            592529: (r, t, e) => {
                var n = e(21178),
                    o = e(509918),
                    i = o.aTypedArray,
                    a = o.exportTypedArrayMethod,
                    u = o.getTypedArrayConstructor;
                a("toReversed", function () {
                    return n(i(this), u(this));
                });
            },
            86943: (r, t, e) => {
                var n = e(509918),
                    o = e(265968),
                    i = e(277111),
                    a = e(341253),
                    u = n.aTypedArray,
                    f = n.getTypedArrayConstructor,
                    c = n.exportTypedArrayMethod,
                    s = o(n.TypedArrayPrototype.sort);
                c("toSorted", function (r) {
                    void 0 !== r && i(r);
                    var t = u(this),
                        e = a(f(t), t);
                    return s(e, r);
                });
            },
            691157: (r, t, e) => {
                var n = e(869647),
                    o = e(509918),
                    i = e(579098),
                    a = e(643329),
                    u = e(519123),
                    f = o.aTypedArray,
                    c = o.getTypedArrayConstructor,
                    s = o.exportTypedArrayMethod,
                    y = !!(function () {
                        try {
                            new Int8Array(1).with(2, {
                                valueOf: function () {
                                    throw 8;
                                },
                            });
                        } catch (r) {
                            return 8 === r;
                        }
                    })();
                s(
                    "with",
                    {
                        with: function (r, t) {
                            var e = f(this),
                                o = a(r),
                                s = i(e) ? u(t) : +t;
                            return n(e, c(e), o, s);
                        },
                    }.with,
                    !y,
                );
            },
            875640: (r, t, e) => {
                var n = e(23103),
                    o = e(609859),
                    i = e(431333),
                    a = e(665358),
                    u = e(931787).f,
                    f = e(198270),
                    c = e(557728),
                    s = e(720835),
                    y = e(340635),
                    l = e(257445),
                    p = e(465299),
                    d = e(807400),
                    h = e(124231),
                    v = "DOMException",
                    g = i("Error"),
                    b = i(v),
                    m = function () {
                        c(this, A);
                        var r = arguments.length,
                            t = y(r < 1 ? void 0 : arguments[0]),
                            e = y(r < 2 ? void 0 : arguments[1], "Error"),
                            n = new b(t, e),
                            o = new g(t);
                        return (o.name = v), u(n, "stack", a(1, p(o.stack, 1))), s(n, this, m), n;
                    },
                    A = (m.prototype = b.prototype),
                    w = "stack" in new g(v),
                    x = "stack" in new b(1, 2),
                    E = b && d && Object.getOwnPropertyDescriptor(o, v),
                    O = !(!E || (E.writable && E.configurable)),
                    T = w && !O && !x;
                n({ global: !0, constructor: !0, forced: h || T }, { DOMException: T ? m : b });
                var k = i(v),
                    S = k.prototype;
                if (S.constructor !== k)
                    for (var _ in (h || u(S, "constructor", a(1, k)), l))
                        if (f(l, _)) {
                            var I = l[_],
                                P = I.s;
                            f(k, P) || u(k, P, a(6, I.c));
                        }
            },
            543673: (r, t, e) => {
                var n = e(914768),
                    o = e(265968),
                    i = e(783326),
                    a = e(977579),
                    u = URLSearchParams,
                    f = u.prototype,
                    c = o(f.append),
                    s = o(f.delete),
                    y = o(f.forEach),
                    l = o([].push),
                    p = new u("a=1&a=2&b=3");
                p.delete("a", 1),
                    p.delete("b", void 0),
                    p + "" != "a=2" &&
                        n(
                            f,
                            "delete",
                            function (r) {
                                var t = arguments.length,
                                    e = t < 2 ? void 0 : arguments[1];
                                if (t && void 0 === e) return s(this, r);
                                var n = [];
                                y(this, function (r, t) {
                                    l(n, { key: t, value: r });
                                }),
                                    a(t, 1);
                                for (var o, u = i(r), f = i(e), p = 0, d = 0, h = !1, v = n.length; p < v; ) (o = n[p++]), h || o.key === u ? ((h = !0), s(this, o.key)) : d++;
                                for (; d < v; ) ((o = n[d++]).key === u && o.value === f) || c(this, o.key, o.value);
                            },
                            { enumerable: !0, unsafe: !0 },
                        );
            },
            240753: (r, t, e) => {
                var n = e(914768),
                    o = e(265968),
                    i = e(783326),
                    a = e(977579),
                    u = URLSearchParams,
                    f = u.prototype,
                    c = o(f.getAll),
                    s = o(f.has),
                    y = new u("a=1");
                (!y.has("a", 2) && y.has("a", void 0)) ||
                    n(
                        f,
                        "has",
                        function (r) {
                            var t = arguments.length,
                                e = t < 2 ? void 0 : arguments[1];
                            if (t && void 0 === e) return s(this, r);
                            var n = c(this, r);
                            a(t, 1);
                            for (var o = i(e), u = 0; u < n.length; ) if (n[u++] === o) return !0;
                            return !1;
                        },
                        { enumerable: !0, unsafe: !0 },
                    );
            },
            128399: (r, t, e) => {
                var n = e(807400),
                    o = e(265968),
                    i = e(396616),
                    a = URLSearchParams.prototype,
                    u = o(a.forEach);
                n &&
                    !("size" in a) &&
                    i(a, "size", {
                        get: function () {
                            var r = 0;
                            return (
                                u(this, function () {
                                    r++;
                                }),
                                r
                            );
                        },
                        configurable: !0,
                        enumerable: !0,
                    });
            },
            236161: (r, t, e) => {
                function n(r) {
                    return (
                        (n =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (r) {
                                      return typeof r;
                                  }
                                : function (r) {
                                      return r && "function" == typeof Symbol && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
                                  }),
                        n(r)
                    );
                }
                function o(r) {
                    return (
                        (function (r) {
                            if (Array.isArray(r)) return i(r);
                        })(r) ||
                        (function (r) {
                            if ("undefined" != typeof Symbol && Symbol.iterator in Object(r)) return Array.from(r);
                        })(r) ||
                        (function (r, t) {
                            if (!r) return;
                            if ("string" == typeof r) return i(r, t);
                            var e = Object.prototype.toString.call(r).slice(8, -1);
                            "Object" === e && r.constructor && (e = r.constructor.name);
                            if ("Map" === e || "Set" === e) return Array.from(e);
                            if ("Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)) return i(r, t);
                        })(r) ||
                        (function () {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        })()
                    );
                }
                function i(r, t) {
                    (null == t || t > r.length) && (t = r.length);
                    for (var e = 0, n = new Array(t); e < t; e++) n[e] = r[e];
                    return n;
                }
                function a(r) {
                    return r.filter(function (t, e) {
                        return r.lastIndexOf(t) === e;
                    });
                }
                function u(r) {
                    for (var t = 0, e = arguments.length <= 1 ? 0 : arguments.length - 1; t < e; ++t) {
                        var i = t + 1 < 1 || arguments.length <= t + 1 ? void 0 : arguments[t + 1];
                        for (var f in i) {
                            var c = i[f],
                                s = r[f];
                            if (s && c) {
                                if (Array.isArray(s)) {
                                    r[f] = a(s.concat(c));
                                    continue;
                                }
                                if (Array.isArray(c)) {
                                    r[f] = a([s].concat(o(c)));
                                    continue;
                                }
                                if ("object" === n(c)) {
                                    r[f] = u({}, s, c);
                                    continue;
                                }
                            }
                            r[f] = c;
                        }
                    }
                    return r;
                }
                e.r(t), e.d(t, { assignStyle: () => u, camelCaseProperty: () => l, cssifyDeclaration: () => h, cssifyObject: () => v, hyphenateProperty: () => d, isPrefixedProperty: () => b, isPrefixedValue: () => A, isUnitlessProperty: () => C, normalizeProperty: () => L, resolveArrayValue: () => z, unprefixProperty: () => R, unprefixValue: () => U });
                var f = /-([a-z])/g,
                    c = /^Ms/g,
                    s = {};
                function y(r) {
                    return r[1].toUpperCase();
                }
                function l(r) {
                    if (s.hasOwnProperty(r)) return s[r];
                    var t = r.replace(f, y).replace(c, "ms");
                    return (s[r] = t), t;
                }
                var p = e(923603);
                function d(r) {
                    return (0, p.default)(r);
                }
                function h(r, t) {
                    return d(r) + ":" + t;
                }
                function v(r) {
                    var t = "";
                    for (var e in r) {
                        var n = r[e];
                        ("string" != typeof n && "number" != typeof n) || (t && (t += ";"), (t += h(e, n)));
                    }
                    return t;
                }
                var g = /^(Webkit|Moz|O|ms)/;
                function b(r) {
                    return g.test(r);
                }
                var m = /-webkit-|-moz-|-ms-/;
                function A(r) {
                    return "string" == typeof r && m.test(r);
                }
                var w = { borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 },
                    x = ["animationIterationCount", "boxFlex", "boxFlexGroup", "boxOrdinalGroup", "columnCount", "flex", "flexGrow", "flexPositive", "flexShrink", "flexNegative", "flexOrder", "gridColumn", "gridColumnEnd", "gridColumnStart", "gridRow", "gridRowEnd", "gridRowStart", "lineClamp", "order"],
                    E = ["Webkit", "ms", "Moz", "O"];
                function O(r, t) {
                    return r + t.charAt(0).toUpperCase() + t.slice(1);
                }
                for (var T = 0, k = x.length; T < k; ++T) {
                    var S = x[T];
                    w[S] = !0;
                    for (var _ = 0, I = E.length; _ < I; ++_) w[O(E[_], S)] = !0;
                }
                for (var P in w) w[d(P)] = !0;
                function C(r) {
                    return w.hasOwnProperty(r);
                }
                var M = /^(ms|Webkit|Moz|O)/;
                function R(r) {
                    var t = r.replace(M, "");
                    return t.charAt(0).toLowerCase() + t.slice(1);
                }
                function L(r) {
                    return R(l(r));
                }
                function z(r, t) {
                    return t.join(";" + d(r) + ":");
                }
                var j = /(-ms-|-webkit-|-moz-|-o-)/g;
                function U(r) {
                    return "string" == typeof r ? r.replace(j, "") : r;
                }
            },
            239977: (r, t, e) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (r) {
                        return (0, i.default)(r);
                    });
                var n,
                    o = e(923603),
                    i = (n = o) && n.__esModule ? n : { default: n };
            },
            936793: (r, t) => {
                Object.defineProperty(t, "__esModule", { value: !0 }),
                    (t.default = function (r) {
                        return "string" == typeof r && e.test(r);
                    });
                var e = /-webkit-|-moz-|-ms-/;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-48a4958c.f89a54fa.js.map
