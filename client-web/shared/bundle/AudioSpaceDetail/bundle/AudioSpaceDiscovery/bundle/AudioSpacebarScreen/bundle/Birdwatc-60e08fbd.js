(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"],
    {
        549732: (t, e, r) => {
            "use strict";
            r.d(e, { Ry: () => f });
            var n = function (t) {
                    return "undefined" == typeof document ? null : (Array.isArray(t) ? t[0] : t).ownerDocument.body;
                },
                o = new WeakMap(),
                i = new WeakMap(),
                s = {},
                u = 0,
                a = function (t) {
                    return t && (t.host || a(t.parentNode));
                },
                c = function (t, e, r, n) {
                    var c = (function (t, e) {
                        return e
                            .map(function (e) {
                                if (t.contains(e)) return e;
                                var r = a(e);
                                return r && t.contains(r) ? r : null;
                            })
                            .filter(function (t) {
                                return Boolean(t);
                            });
                    })(e, Array.isArray(t) ? t : [t]);
                    s[r] || (s[r] = new WeakMap());
                    var f = s[r],
                        l = [],
                        p = new Set(),
                        v = new Set(c),
                        d = function (t) {
                            t && !p.has(t) && (p.add(t), d(t.parentNode));
                        };
                    c.forEach(d);
                    var h = function (t) {
                        t &&
                            !v.has(t) &&
                            Array.prototype.forEach.call(t.children, function (t) {
                                if (p.has(t)) h(t);
                                else
                                    try {
                                        var e = t.getAttribute(n),
                                            s = null !== e && "false" !== e,
                                            u = (o.get(t) || 0) + 1,
                                            a = (f.get(t) || 0) + 1;
                                        o.set(t, u), f.set(t, a), l.push(t), 1 === u && s && i.set(t, !0), 1 === a && t.setAttribute(r, "true"), s || t.setAttribute(n, "true");
                                    } catch (t) {}
                            });
                    };
                    return (
                        h(e),
                        p.clear(),
                        u++,
                        function () {
                            l.forEach(function (t) {
                                var e = o.get(t) - 1,
                                    s = f.get(t) - 1;
                                o.set(t, e), f.set(t, s), e || (i.has(t) || t.removeAttribute(n), i.delete(t)), s || t.removeAttribute(r);
                            }),
                                --u || ((o = new WeakMap()), (o = new WeakMap()), (i = new WeakMap()), (s = {}));
                        }
                    );
                },
                f = function (t, e, r) {
                    void 0 === r && (r = "data-aria-hidden");
                    var o = Array.from(Array.isArray(t) ? t : [t]),
                        i = e || n(t);
                    return i
                        ? (o.push.apply(o, Array.from(i.querySelectorAll("[aria-live]"))), c(o, i, r, "aria-hidden"))
                        : function () {
                              return null;
                          };
                };
        },
        557988: (t, e, r) => {
            "use strict";
            var n = r(782359),
                o = r(659821),
                i = TypeError;
            t.exports = function (t) {
                if (n(t)) return t;
                throw new i(o(t) + " is not a constructor");
            };
        },
        986570: (t, e, r) => {
            "use strict";
            var n = r(689996).forEach,
                o = r(696038)("forEach");
            t.exports = o
                ? [].forEach
                : function (t) {
                      return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
                  };
        },
        310507: (t, e, r) => {
            "use strict";
            var n = r(497636),
                o = r(720266),
                i = r(492991),
                s = r(464960),
                u = r(991943),
                a = r(782359),
                c = r(639646),
                f = r(462324),
                l = r(928403),
                p = r(478830),
                v = Array;
            t.exports = function (t) {
                var e = i(t),
                    r = a(this),
                    d = arguments.length,
                    h = d > 1 ? arguments[1] : void 0,
                    x = void 0 !== h;
                x && (h = n(h, d > 2 ? arguments[2] : void 0));
                var y,
                    g,
                    b,
                    w,
                    m,
                    S,
                    A = p(e),
                    E = 0;
                if (!A || (this === v && u(A))) for (y = c(e), g = r ? new this(y) : v(y); y > E; E++) (S = x ? h(e[E], E) : e[E]), f(g, E, S);
                else for (m = (w = l(e, A)).next, g = r ? new this() : []; !(b = o(m, w)).done; E++) (S = x ? s(w, h, [b.value, E], !0) : b.value), f(g, E, S);
                return (g.length = E), g;
            };
        },
        689996: (t, e, r) => {
            "use strict";
            var n = r(497636),
                o = r(265968),
                i = r(409337),
                s = r(492991),
                u = r(639646),
                a = r(387501),
                c = o([].push),
                f = function (t) {
                    var e = 1 === t,
                        r = 2 === t,
                        o = 3 === t,
                        f = 4 === t,
                        l = 6 === t,
                        p = 7 === t,
                        v = 5 === t || l;
                    return function (d, h, x, y) {
                        for (var g, b, w = s(d), m = i(w), S = n(h, x), A = u(m), E = 0, R = y || a, O = e ? R(d, A) : r || p ? R(d, 0) : void 0; A > E; E++)
                            if ((v || E in m) && ((b = S((g = m[E]), E, w)), t))
                                if (e) O[E] = b;
                                else if (b)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return g;
                                        case 6:
                                            return E;
                                        case 2:
                                            c(O, g);
                                    }
                                else
                                    switch (t) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(O, g);
                                    }
                        return l ? -1 : o || f ? f : O;
                    };
                };
            t.exports = { forEach: f(0), map: f(1), filter: f(2), some: f(3), every: f(4), find: f(5), findIndex: f(6), filterReject: f(7) };
        },
        331460: (t, e, r) => {
            "use strict";
            var n = r(824229),
                o = r(670095),
                i = r(406358),
                s = o("species");
            t.exports = function (t) {
                return (
                    i >= 51 ||
                    !n(function () {
                        var e = [];
                        return (
                            ((e.constructor = {})[s] = function () {
                                return { foo: 1 };
                            }),
                            1 !== e[t](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (t, e, r) => {
            "use strict";
            var n = r(824229);
            t.exports = function (t, e) {
                var r = [][t];
                return (
                    !!r &&
                    n(function () {
                        r.call(
                            null,
                            e ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (t, e, r) => {
            "use strict";
            var n = r(277111),
                o = r(492991),
                i = r(409337),
                s = r(639646),
                u = TypeError,
                a = function (t) {
                    return function (e, r, a, c) {
                        n(r);
                        var f = o(e),
                            l = i(f),
                            p = s(f),
                            v = t ? p - 1 : 0,
                            d = t ? -1 : 1;
                        if (a < 2)
                            for (;;) {
                                if (v in l) {
                                    (c = l[v]), (v += d);
                                    break;
                                }
                                if (((v += d), t ? v < 0 : p <= v)) throw new u("Reduce of empty array with no initial value");
                            }
                        for (; t ? v >= 0 : p > v; v += d) v in l && (c = r(c, l[v], v, f));
                        return c;
                    };
                };
            t.exports = { left: a(!1), right: a(!0) };
        },
        1909: (t, e, r) => {
            "use strict";
            var n = r(265968);
            t.exports = n([].slice);
        },
        118760: (t, e, r) => {
            "use strict";
            var n = r(33718),
                o = r(782359),
                i = r(685052),
                s = r(670095)("species"),
                u = Array;
            t.exports = function (t) {
                var e;
                return n(t) && ((e = t.constructor), ((o(e) && (e === u || n(e.prototype))) || (i(e) && null === (e = e[s]))) && (e = void 0)), void 0 === e ? u : e;
            };
        },
        387501: (t, e, r) => {
            "use strict";
            var n = r(118760);
            t.exports = function (t, e) {
                return new (n(t))(0 === e ? 0 : e);
            };
        },
        464960: (t, e, r) => {
            "use strict";
            var n = r(821176),
                o = r(257281);
            t.exports = function (t, e, r, i) {
                try {
                    return i ? e(n(r)[0], r[1]) : e(r);
                } catch (e) {
                    o(t, "throw", e);
                }
            };
        },
        874575: (t, e, r) => {
            "use strict";
            var n = r(670095)("iterator"),
                o = !1;
            try {
                var i = 0,
                    s = {
                        next: function () {
                            return { done: !!i++ };
                        },
                        return: function () {
                            o = !0;
                        },
                    };
                (s[n] = function () {
                    return this;
                }),
                    Array.from(s, function () {
                        throw 2;
                    });
            } catch (t) {}
            t.exports = function (t, e) {
                try {
                    if (!e && !o) return !1;
                } catch (t) {
                    return !1;
                }
                var r = !1;
                try {
                    var i = {};
                    (i[n] = function () {
                        return {
                            next: function () {
                                return { done: (r = !0) };
                            },
                        };
                    }),
                        t(i);
                } catch (t) {}
                return r;
            };
        },
        33684: (t) => {
            "use strict";
            t.exports = function (t, e) {
                return { value: t, done: e };
            };
        },
        995694: (t) => {
            "use strict";
            t.exports = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 };
        },
        618865: (t, e, r) => {
            "use strict";
            var n = r(522635)("span").classList,
                o = n && n.constructor && n.constructor.prototype;
            t.exports = o === Object.prototype ? void 0 : o;
        },
        748639: (t, e, r) => {
            "use strict";
            var n = r(95189),
                o = r(128801);
            t.exports = !n && !o && "object" == typeof window && "object" == typeof document;
        },
        737995: (t) => {
            "use strict";
            t.exports = "function" == typeof Bun && Bun && "string" == typeof Bun.version;
        },
        95189: (t) => {
            "use strict";
            t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version;
        },
        308983: (t, e, r) => {
            "use strict";
            var n = r(180598);
            t.exports = /ipad|iphone|ipod/i.test(n) && "undefined" != typeof Pebble;
        },
        232023: (t, e, r) => {
            "use strict";
            var n = r(180598);
            t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(n);
        },
        128801: (t, e, r) => {
            "use strict";
            var n = r(609859),
                o = r(427079);
            t.exports = "process" === o(n.process);
        },
        610263: (t, e, r) => {
            "use strict";
            var n = r(180598);
            t.exports = /web0s(?!.*chrome)/i.test(n);
        },
        194128: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(277111),
                i = r(685052),
                s = r(198270),
                u = r(1909),
                a = r(357188),
                c = Function,
                f = n([].concat),
                l = n([].join),
                p = {};
            t.exports = a
                ? c.bind
                : function (t) {
                      var e = o(this),
                          r = e.prototype,
                          n = u(arguments, 1),
                          a = function () {
                              var r = f(n, u(arguments));
                              return this instanceof a
                                  ? (function (t, e, r) {
                                        if (!s(p, e)) {
                                            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                            p[e] = c("C,a", "return new C(" + l(n, ",") + ")");
                                        }
                                        return p[e](t, r);
                                    })(e, r.length, r)
                                  : e.apply(t, r);
                          };
                      return i(r) && (a.prototype = r), a;
                  };
        },
        478830: (t, e, r) => {
            "use strict";
            var n = r(781589),
                o = r(155300),
                i = r(209650),
                s = r(545495),
                u = r(670095)("iterator");
            t.exports = function (t) {
                if (!i(t)) return o(t, u) || o(t, "@@iterator") || s[n(t)];
            };
        },
        928403: (t, e, r) => {
            "use strict";
            var n = r(720266),
                o = r(277111),
                i = r(821176),
                s = r(659821),
                u = r(478830),
                a = TypeError;
            t.exports = function (t, e) {
                var r = arguments.length < 2 ? u(t) : e;
                if (o(r)) return i(n(r, t));
                throw new a(s(t) + " is not iterable");
            };
        },
        44231: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                s = r(427079),
                u = r(783326),
                a = n([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var c = t[n];
                        "string" == typeof c ? a(r, c) : ("number" != typeof c && "Number" !== s(c) && "String" !== s(c)) || a(r, u(c));
                    }
                    var f = r.length,
                        l = !0;
                    return function (t, e) {
                        if (l) return (l = !1), e;
                        if (o(this)) return e;
                        for (var n = 0; n < f; n++) if (r[n] === t) return e;
                    };
                }
            };
        },
        214665: (t) => {
            "use strict";
            t.exports = function (t, e) {};
        },
        991943: (t, e, r) => {
            "use strict";
            var n = r(670095),
                o = r(545495),
                i = n("iterator"),
                s = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || s[i] === t);
            };
        },
        782359: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(824229),
                i = r(26733),
                s = r(781589),
                u = r(431333),
                a = r(108511),
                c = function () {},
                f = [],
                l = u("Reflect", "construct"),
                p = /^\s*(?:class|function)\b/,
                v = n(p.exec),
                d = !p.test(c),
                h = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return l(c, f, t), !0;
                    } catch (t) {
                        return !1;
                    }
                },
                x = function (t) {
                    if (!i(t)) return !1;
                    switch (s(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return d || !!v(p, a(t));
                    } catch (t) {
                        return !0;
                    }
                };
            (x.sham = !0),
                (t.exports =
                    !l ||
                    o(function () {
                        var t;
                        return (
                            h(h.call) ||
                            !h(Object) ||
                            !h(function () {
                                t = !0;
                            }) ||
                            t
                        );
                    })
                        ? x
                        : h);
        },
        789003: (t, e, r) => {
            "use strict";
            var n = r(497636),
                o = r(720266),
                i = r(821176),
                s = r(659821),
                u = r(991943),
                a = r(639646),
                c = r(291321),
                f = r(928403),
                l = r(478830),
                p = r(257281),
                v = TypeError,
                d = function (t, e) {
                    (this.stopped = t), (this.result = e);
                },
                h = d.prototype;
            t.exports = function (t, e, r) {
                var x,
                    y,
                    g,
                    b,
                    w,
                    m,
                    S,
                    A = r && r.that,
                    E = !(!r || !r.AS_ENTRIES),
                    R = !(!r || !r.IS_RECORD),
                    O = !(!r || !r.IS_ITERATOR),
                    I = !(!r || !r.INTERRUPTED),
                    T = n(e, A),
                    j = function (t) {
                        return x && p(x, "normal", t), new d(!0, t);
                    },
                    L = function (t) {
                        return E ? (i(t), I ? T(t[0], t[1], j) : T(t[0], t[1])) : I ? T(t, j) : T(t);
                    };
                if (R) x = t.iterator;
                else if (O) x = t;
                else {
                    if (!(y = l(t))) throw new v(s(t) + " is not iterable");
                    if (u(y)) {
                        for (g = 0, b = a(t); b > g; g++) if ((w = L(t[g])) && c(h, w)) return w;
                        return new d(!1);
                    }
                    x = f(t, y);
                }
                for (m = R ? t.next : x.next; !(S = o(m, x)).done; ) {
                    try {
                        w = L(S.value);
                    } catch (t) {
                        p(x, "throw", t);
                    }
                    if ("object" == typeof w && w && c(h, w)) return w;
                }
                return new d(!1);
            };
        },
        257281: (t, e, r) => {
            "use strict";
            var n = r(720266),
                o = r(821176),
                i = r(155300);
            t.exports = function (t, e, r) {
                var s, u;
                o(t);
                try {
                    if (!(s = i(t, "return"))) {
                        if ("throw" === e) throw r;
                        return r;
                    }
                    s = n(s, t);
                } catch (t) {
                    (u = !0), (s = t);
                }
                if ("throw" === e) throw r;
                if (u) throw s;
                return o(s), r;
            };
        },
        42247: (t, e, r) => {
            "use strict";
            var n = r(360693).IteratorPrototype,
                o = r(822391),
                i = r(665358),
                s = r(954555),
                u = r(545495),
                a = function () {
                    return this;
                };
            t.exports = function (t, e, r, c) {
                var f = e + " Iterator";
                return (t.prototype = o(n, { next: i(+!c, r) })), s(t, f, !1, !0), (u[f] = a), t;
            };
        },
        712707: (t, e, r) => {
            "use strict";
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                s = r(951805),
                u = r(26733),
                a = r(42247),
                c = r(567567),
                f = r(956540),
                l = r(954555),
                p = r(675762),
                v = r(914768),
                d = r(670095),
                h = r(545495),
                x = r(360693),
                y = s.PROPER,
                g = s.CONFIGURABLE,
                b = x.IteratorPrototype,
                w = x.BUGGY_SAFARI_ITERATORS,
                m = d("iterator"),
                S = "keys",
                A = "values",
                E = "entries",
                R = function () {
                    return this;
                };
            t.exports = function (t, e, r, s, d, x, O) {
                a(r, e, s);
                var I,
                    T,
                    j,
                    L = function (t) {
                        if (t === d && _) return _;
                        if (!w && t && t in P) return P[t];
                        switch (t) {
                            case S:
                            case A:
                            case E:
                                return function () {
                                    return new r(this, t);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    k = e + " Iterator",
                    M = !1,
                    P = t.prototype,
                    C = P[m] || P["@@iterator"] || (d && P[d]),
                    _ = (!w && C) || L(d),
                    N = ("Array" === e && P.entries) || C;
                if (
                    (N && (I = c(N.call(new t()))) !== Object.prototype && I.next && (i || c(I) === b || (f ? f(I, b) : u(I[m]) || v(I, m, R)), l(I, k, !0, !0), i && (h[k] = R)),
                    y &&
                        d === A &&
                        C &&
                        C.name !== A &&
                        (!i && g
                            ? p(P, "name", A)
                            : ((M = !0),
                              (_ = function () {
                                  return o(C, this);
                              }))),
                    d)
                )
                    if (((T = { values: L(A), keys: x ? _ : L(S), entries: L(E) }), O)) for (j in T) (w || M || !(j in P)) && v(P, j, T[j]);
                    else n({ target: e, proto: !0, forced: w || M }, T);
                return (i && !O) || P[m] === _ || v(P, m, _, { name: d }), (h[e] = _), T;
            };
        },
        360693: (t, e, r) => {
            "use strict";
            var n,
                o,
                i,
                s = r(824229),
                u = r(26733),
                a = r(685052),
                c = r(822391),
                f = r(567567),
                l = r(914768),
                p = r(670095),
                v = r(124231),
                d = p("iterator"),
                h = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (h = !0)),
                !a(n) ||
                s(function () {
                    var t = {};
                    return n[d].call(t) !== t;
                })
                    ? (n = {})
                    : v && (n = c(n)),
                u(n[d]) ||
                    l(n, d, function () {
                        return this;
                    }),
                (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: h });
        },
        545495: (t) => {
            "use strict";
            t.exports = {};
        },
        124794: (t, e, r) => {
            "use strict";
            var n,
                o,
                i,
                s,
                u,
                a = r(609859),
                c = r(497636),
                f = r(997933).f,
                l = r(155795).set,
                p = r(193358),
                v = r(232023),
                d = r(308983),
                h = r(610263),
                x = r(128801),
                y = a.MutationObserver || a.WebKitMutationObserver,
                g = a.document,
                b = a.process,
                w = a.Promise,
                m = f(a, "queueMicrotask"),
                S = m && m.value;
            if (!S) {
                var A = new p(),
                    E = function () {
                        var t, e;
                        for (x && (t = b.domain) && t.exit(); (e = A.get()); )
                            try {
                                e();
                            } catch (t) {
                                throw (A.head && n(), t);
                            }
                        t && t.enter();
                    };
                v || x || h || !y || !g
                    ? !d && w && w.resolve
                        ? (((s = w.resolve(void 0)).constructor = w),
                          (u = c(s.then, s)),
                          (n = function () {
                              u(E);
                          }))
                        : x
                          ? (n = function () {
                                b.nextTick(E);
                            })
                          : ((l = c(l, a)),
                            (n = function () {
                                l(E);
                            }))
                    : ((o = !0),
                      (i = g.createTextNode("")),
                      new y(E).observe(i, { characterData: !0 }),
                      (n = function () {
                          i.data = o = !o;
                      })),
                    (S = function (t) {
                        A.head || n(), A.add(t);
                    });
            }
            t.exports = S;
        },
        916485: (t, e, r) => {
            "use strict";
            var n = r(277111),
                o = TypeError,
                i = function (t) {
                    var e, r;
                    (this.promise = new t(function (t, n) {
                        if (void 0 !== e || void 0 !== r) throw new o("Bad Promise constructor");
                        (e = t), (r = n);
                    })),
                        (this.resolve = n(e)),
                        (this.reject = n(r));
                };
            t.exports.f = function (t) {
                return new i(t);
            };
        },
        953775: (t, e, r) => {
            "use strict";
            var n = r(609859).isFinite;
            t.exports =
                Number.isFinite ||
                function (t) {
                    return "number" == typeof t && n(t);
                };
        },
        36596: (t, e, r) => {
            "use strict";
            var n = r(609859),
                o = r(824229),
                i = r(265968),
                s = r(783326),
                u = r(1017).trim,
                a = r(841647),
                c = n.parseInt,
                f = n.Symbol,
                l = f && f.iterator,
                p = /^[+-]?0x/i,
                v = i(p.exec),
                d =
                    8 !== c(a + "08") ||
                    22 !== c(a + "0x16") ||
                    (l &&
                        !o(function () {
                            c(Object(l));
                        }));
            t.exports = d
                ? function (t, e) {
                      var r = u(s(t));
                      return c(r, e >>> 0 || (v(p, r) ? 16 : 10));
                  }
                : c;
        },
        700047: (t, e, r) => {
            "use strict";
            var n = r(807400),
                o = r(265968),
                i = r(720266),
                s = r(824229),
                u = r(765632),
                a = r(110894),
                c = r(119195),
                f = r(492991),
                l = r(409337),
                p = Object.assign,
                v = Object.defineProperty,
                d = o([].concat);
            t.exports =
                !p ||
                s(function () {
                    if (
                        n &&
                        1 !==
                            p(
                                { b: 1 },
                                p(
                                    v({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            v(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var t = {},
                        e = {},
                        r = Symbol("assign detection"),
                        o = "abcdefghijklmnopqrst";
                    return (
                        (t[r] = 7),
                        o.split("").forEach(function (t) {
                            e[t] = t;
                        }),
                        7 !== p({}, t)[r] || u(p({}, e)).join("") !== o
                    );
                })
                    ? function (t, e) {
                          for (var r = f(t), o = arguments.length, s = 1, p = a.f, v = c.f; o > s; ) for (var h, x = l(arguments[s++]), y = p ? d(u(x), p(x)) : u(x), g = y.length, b = 0; g > b; ) (h = y[b++]), (n && !i(v, x, h)) || (r[h] = x[h]);
                          return r;
                      }
                    : p;
        },
        310166: (t, e, r) => {
            "use strict";
            var n = r(427079),
                o = r(910905),
                i = r(778151).f,
                s = r(369794),
                u = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return u && "Window" === n(t)
                    ? (function (t) {
                          try {
                              return i(t);
                          } catch (t) {
                              return s(u);
                          }
                      })(t)
                    : i(o(t));
            };
        },
        844059: (t, e, r) => {
            "use strict";
            var n = r(971601),
                o = r(781589);
            t.exports = n
                ? {}.toString
                : function () {
                      return "[object " + o(this) + "]";
                  };
        },
        849276: (t, e, r) => {
            "use strict";
            var n = r(609859);
            t.exports = n;
        },
        664624: (t) => {
            "use strict";
            t.exports = function (t) {
                try {
                    return { error: !1, value: t() };
                } catch (t) {
                    return { error: !0, value: t };
                }
            };
        },
        338321: (t, e, r) => {
            "use strict";
            var n = r(609859),
                o = r(174473),
                i = r(26733),
                s = r(46541),
                u = r(108511),
                a = r(670095),
                c = r(748639),
                f = r(95189),
                l = r(124231),
                p = r(406358),
                v = o && o.prototype,
                d = a("species"),
                h = !1,
                x = i(n.PromiseRejectionEvent),
                y = s("Promise", function () {
                    var t = u(o),
                        e = t !== String(o);
                    if (!e && 66 === p) return !0;
                    if (l && (!v.catch || !v.finally)) return !0;
                    if (!p || p < 51 || !/native code/.test(t)) {
                        var r = new o(function (t) {
                                t(1);
                            }),
                            n = function (t) {
                                t(
                                    function () {},
                                    function () {},
                                );
                            };
                        if ((((r.constructor = {})[d] = n), !(h = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !e && (c || f) && !x;
                });
            t.exports = { CONSTRUCTOR: y, REJECTION_EVENT: x, SUBCLASSING: h };
        },
        174473: (t, e, r) => {
            "use strict";
            var n = r(609859);
            t.exports = n.Promise;
        },
        62391: (t, e, r) => {
            "use strict";
            var n = r(821176),
                o = r(685052),
                i = r(916485);
            t.exports = function (t, e) {
                if ((n(t), o(e) && e.constructor === t)) return e;
                var r = i.f(t);
                return (0, r.resolve)(e), r.promise;
            };
        },
        796866: (t, e, r) => {
            "use strict";
            var n = r(174473),
                o = r(874575),
                i = r(338321).CONSTRUCTOR;
            t.exports =
                i ||
                !o(function (t) {
                    n.all(t).then(void 0, function () {});
                });
        },
        193358: (t) => {
            "use strict";
            var e = function () {
                (this.head = null), (this.tail = null);
            };
            (e.prototype = {
                add: function (t) {
                    var e = { item: t, next: null },
                        r = this.tail;
                    r ? (r.next = e) : (this.head = e), (this.tail = e);
                },
                get: function () {
                    var t = this.head;
                    if (t) return null === (this.head = t.next) && (this.tail = null), t.item;
                },
            }),
                (t.exports = e);
        },
        763466: (t, e, r) => {
            "use strict";
            var n,
                o,
                i = r(720266),
                s = r(265968),
                u = r(783326),
                a = r(730895),
                c = r(25650),
                f = r(933036),
                l = r(822391),
                p = r(856407).get,
                v = r(542926),
                d = r(210461),
                h = f("native-string-replace", String.prototype.replace),
                x = RegExp.prototype.exec,
                y = x,
                g = s("".charAt),
                b = s("".indexOf),
                w = s("".replace),
                m = s("".slice),
                S = ((o = /b*/g), i(x, (n = /a/), "a"), i(x, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                A = c.BROKEN_CARET,
                E = void 0 !== /()??/.exec("")[1];
            (S || E || A || v || d) &&
                (y = function (t) {
                    var e,
                        r,
                        n,
                        o,
                        s,
                        c,
                        f,
                        v = this,
                        d = p(v),
                        R = u(t),
                        O = d.raw;
                    if (O) return (O.lastIndex = v.lastIndex), (e = i(y, O, R)), (v.lastIndex = O.lastIndex), e;
                    var I = d.groups,
                        T = A && v.sticky,
                        j = i(a, v),
                        L = v.source,
                        k = 0,
                        M = R;
                    if (
                        (T && ((j = w(j, "y", "")), -1 === b(j, "g") && (j += "g"), (M = m(R, v.lastIndex)), v.lastIndex > 0 && (!v.multiline || (v.multiline && "\n" !== g(R, v.lastIndex - 1))) && ((L = "(?: " + L + ")"), (M = " " + M), k++), (r = new RegExp("^(?:" + L + ")", j))),
                        E && (r = new RegExp("^" + L + "$(?!\\s)", j)),
                        S && (n = v.lastIndex),
                        (o = i(x, T ? r : v, M)),
                        T ? (o ? ((o.input = m(o.input, k)), (o[0] = m(o[0], k)), (o.index = v.lastIndex), (v.lastIndex += o[0].length)) : (v.lastIndex = 0)) : S && o && (v.lastIndex = v.global ? o.index + o[0].length : n),
                        E &&
                            o &&
                            o.length > 1 &&
                            i(h, o[0], r, function () {
                                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (o[s] = void 0);
                            }),
                        o && I)
                    )
                        for (o.groups = c = l(null), s = 0; s < I.length; s++) c[(f = I[s])[0]] = o[f[1]];
                    return o;
                }),
                (t.exports = y);
        },
        730895: (t, e, r) => {
            "use strict";
            var n = r(821176);
            t.exports = function () {
                var t = n(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        683349: (t, e, r) => {
            "use strict";
            var n = r(720266),
                o = r(198270),
                i = r(291321),
                s = r(730895),
                u = RegExp.prototype;
            t.exports = function (t) {
                var e = t.flags;
                return void 0 !== e || "flags" in u || o(t, "flags") || !i(u, t) ? e : n(s, t);
            };
        },
        25650: (t, e, r) => {
            "use strict";
            var n = r(824229),
                o = r(609859).RegExp,
                i = n(function () {
                    var t = o("a", "y");
                    return (t.lastIndex = 2), null !== t.exec("abcd");
                }),
                s =
                    i ||
                    n(function () {
                        return !o("a", "y").sticky;
                    }),
                u =
                    i ||
                    n(function () {
                        var t = o("^r", "gy");
                        return (t.lastIndex = 2), null !== t.exec("str");
                    });
            t.exports = { BROKEN_CARET: u, MISSED_STICKY: s, UNSUPPORTED_Y: i };
        },
        542926: (t, e, r) => {
            "use strict";
            var n = r(824229),
                o = r(609859).RegExp;
            t.exports = n(function () {
                var t = o(".", "s");
                return !(t.dotAll && t.test("\n") && "s" === t.flags);
            });
        },
        210461: (t, e, r) => {
            "use strict";
            var n = r(824229),
                o = r(609859).RegExp;
            t.exports = n(function () {
                var t = o("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c");
            });
        },
        324752: (t, e, r) => {
            "use strict";
            var n,
                o = r(609859),
                i = r(653171),
                s = r(26733),
                u = r(737995),
                a = r(180598),
                c = r(1909),
                f = r(977579),
                l = o.Function,
                p = /MSIE .\./.test(a) || (u && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            t.exports = function (t, e) {
                var r = e ? 2 : 1;
                return p
                    ? function (n, o) {
                          var u = f(arguments.length, 1) > r,
                              a = s(n) ? n : l(n),
                              p = u ? c(arguments, r) : [],
                              v = u
                                  ? function () {
                                        i(a, this, p);
                                    }
                                  : a;
                          return e ? t(v, o) : t(v);
                      }
                    : t;
            };
        },
        971832: (t, e, r) => {
            "use strict";
            var n = r(431333),
                o = r(396616),
                i = r(670095),
                s = r(807400),
                u = i("species");
            t.exports = function (t) {
                var e = n(t);
                s &&
                    e &&
                    !e[u] &&
                    o(e, u, {
                        configurable: !0,
                        get: function () {
                            return this;
                        },
                    });
            };
        },
        954555: (t, e, r) => {
            "use strict";
            var n = r(931787).f,
                o = r(198270),
                i = r(670095)("toStringTag");
            t.exports = function (t, e, r) {
                t && !r && (t = t.prototype), t && !o(t, i) && n(t, i, { configurable: !0, value: e });
            };
        },
        137942: (t, e, r) => {
            "use strict";
            var n = r(821176),
                o = r(557988),
                i = r(209650),
                s = r(670095)("species");
            t.exports = function (t, e) {
                var r,
                    u = n(t).constructor;
                return void 0 === u || i((r = n(u)[s])) ? e : o(r);
            };
        },
        630966: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(643329),
                i = r(783326),
                s = r(558885),
                u = n("".charAt),
                a = n("".charCodeAt),
                c = n("".slice),
                f = function (t) {
                    return function (e, r) {
                        var n,
                            f,
                            l = i(s(e)),
                            p = o(r),
                            v = l.length;
                        return p < 0 || p >= v ? (t ? "" : void 0) : (n = a(l, p)) < 55296 || n > 56319 || p + 1 === v || (f = a(l, p + 1)) < 56320 || f > 57343 ? (t ? u(l, p) : n) : t ? c(l, p, p + 2) : f - 56320 + ((n - 55296) << 10) + 65536;
                    };
                };
            t.exports = { codeAt: f(!1), charAt: f(!0) };
        },
        1017: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(558885),
                i = r(783326),
                s = r(841647),
                u = n("".replace),
                a = RegExp("^[" + s + "]+"),
                c = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                f = function (t) {
                    return function (e) {
                        var r = i(o(e));
                        return 1 & t && (r = u(r, a, "")), 2 & t && (r = u(r, c, "$1")), r;
                    };
                };
            t.exports = { start: f(1), end: f(2), trim: f(3) };
        },
        566481: (t, e, r) => {
            "use strict";
            var n = r(720266),
                o = r(431333),
                i = r(670095),
                s = r(914768);
            t.exports = function () {
                var t = o("Symbol"),
                    e = t && t.prototype,
                    r = e && e.valueOf,
                    u = i("toPrimitive");
                e &&
                    !e[u] &&
                    s(
                        e,
                        u,
                        function (t) {
                            return n(r, this);
                        },
                        { arity: 1 },
                    );
            };
        },
        455957: (t, e, r) => {
            "use strict";
            var n = r(144860);
            t.exports = n && !!Symbol.for && !!Symbol.keyFor;
        },
        155795: (t, e, r) => {
            "use strict";
            var n,
                o,
                i,
                s,
                u = r(609859),
                a = r(653171),
                c = r(497636),
                f = r(26733),
                l = r(198270),
                p = r(824229),
                v = r(53777),
                d = r(1909),
                h = r(522635),
                x = r(977579),
                y = r(232023),
                g = r(128801),
                b = u.setImmediate,
                w = u.clearImmediate,
                m = u.process,
                S = u.Dispatch,
                A = u.Function,
                E = u.MessageChannel,
                R = u.String,
                O = 0,
                I = {},
                T = "onreadystatechange";
            p(function () {
                n = u.location;
            });
            var j = function (t) {
                    if (l(I, t)) {
                        var e = I[t];
                        delete I[t], e();
                    }
                },
                L = function (t) {
                    return function () {
                        j(t);
                    };
                },
                k = function (t) {
                    j(t.data);
                },
                M = function (t) {
                    u.postMessage(R(t), n.protocol + "//" + n.host);
                };
            (b && w) ||
                ((b = function (t) {
                    x(arguments.length, 1);
                    var e = f(t) ? t : A(t),
                        r = d(arguments, 1);
                    return (
                        (I[++O] = function () {
                            a(e, void 0, r);
                        }),
                        o(O),
                        O
                    );
                }),
                (w = function (t) {
                    delete I[t];
                }),
                g
                    ? (o = function (t) {
                          m.nextTick(L(t));
                      })
                    : S && S.now
                      ? (o = function (t) {
                            S.now(L(t));
                        })
                      : E && !y
                        ? ((s = (i = new E()).port2), (i.port1.onmessage = k), (o = c(s.postMessage, s)))
                        : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !p(M)
                          ? ((o = M), u.addEventListener("message", k, !1))
                          : (o =
                                T in h("script")
                                    ? function (t) {
                                          v.appendChild(h("script"))[T] = function () {
                                              v.removeChild(this), j(t);
                                          };
                                      }
                                    : function (t) {
                                          setTimeout(L(t), 0);
                                      })),
                (t.exports = { set: b, clear: w });
        },
        890143: (t, e, r) => {
            "use strict";
            var n = r(265968);
            t.exports = n((1).valueOf);
        },
        863524: (t, e, r) => {
            "use strict";
            var n = r(849276),
                o = r(198270),
                i = r(355391),
                s = r(931787).f;
            t.exports = function (t) {
                var e = n.Symbol || (n.Symbol = {});
                o(e, t) || s(e, t, { value: i.f(t) });
            };
        },
        355391: (t, e, r) => {
            "use strict";
            var n = r(670095);
            e.f = n;
        },
        841647: (t) => {
            "use strict";
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        634590: (t, e, r) => {
            var n = r(667425).default;
            function o(t) {
                if ("function" != typeof WeakMap) return null;
                var e = new WeakMap(),
                    r = new WeakMap();
                return (o = function (t) {
                    return t ? r : e;
                })(t);
            }
            (t.exports = function (t, e) {
                if (!e && t && t.__esModule) return t;
                if (null === t || ("object" != n(t) && "function" != typeof t)) return { default: t };
                var r = o(e);
                if (r && r.has(t)) return r.get(t);
                var i = { __proto__: null },
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var u in t)
                    if ("default" !== u && {}.hasOwnProperty.call(t, u)) {
                        var a = s ? Object.getOwnPropertyDescriptor(t, u) : null;
                        a && (a.get || a.set) ? Object.defineProperty(i, u, a) : (i[u] = t[u]);
                    }
                return (i.default = t), r && r.set(t, i), i;
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        110929: (t, e, r) => {
            "use strict";
            r.d(e, { cx: () => i, j: () => s });
            var n = r(840489);
            const o = (t) => ("boolean" == typeof t ? `${t}` : 0 === t ? "0" : t),
                i = n.W,
                s = (t, e) => (r) => {
                    var n;
                    if (null == (null == e ? void 0 : e.variants)) return i(t, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                    const { variants: s, defaultVariants: u } = e,
                        a = Object.keys(s).map((t) => {
                            const e = null == r ? void 0 : r[t],
                                n = null == u ? void 0 : u[t];
                            if (null === e) return null;
                            const i = o(e) || o(n);
                            return s[t][i];
                        }),
                        c =
                            r &&
                            Object.entries(r).reduce((t, e) => {
                                let [r, n] = e;
                                return void 0 === n || (t[r] = n), t;
                            }, {}),
                        f =
                            null == e || null === (n = e.compoundVariants) || void 0 === n
                                ? void 0
                                : n.reduce((t, e) => {
                                      let { class: r, className: n, ...o } = e;
                                      return Object.entries(o).every((t) => {
                                          let [e, r] = t;
                                          return Array.isArray(r) ? r.includes({ ...u, ...c }[e]) : { ...u, ...c }[e] === r;
                                      })
                                          ? [...t, r, n]
                                          : t;
                                  }, []);
                    return i(t, a, f, null == r ? void 0 : r.class, null == r ? void 0 : r.className);
                };
        },
        840489: (t, e, r) => {
            "use strict";
            function n(t) {
                var e,
                    r,
                    o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var i = t.length;
                        for (e = 0; e < i; e++) t[e] && (r = n(t[e])) && (o && (o += " "), (o += r));
                    } else for (r in t) t[r] && (o && (o += " "), (o += r));
                return o;
            }
            function o() {
                for (var t, e, r = 0, o = "", i = arguments.length; r < i; r++) (t = arguments[r]) && (e = n(t)) && (o && (o += " "), (o += e));
                return o;
            }
            r.d(e, { W: () => o, Z: () => i });
            const i = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd.ae439e2a.js.map
