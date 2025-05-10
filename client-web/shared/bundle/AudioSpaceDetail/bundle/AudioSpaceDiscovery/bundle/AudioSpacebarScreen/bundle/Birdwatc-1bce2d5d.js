(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d"],
    {
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
                c = r(782359),
                a = r(639646),
                f = r(462324),
                p = r(928403),
                l = r(478830),
                v = Array;
            t.exports = function (t) {
                var e = i(t),
                    r = c(this),
                    x = arguments.length,
                    d = x > 1 ? arguments[1] : void 0,
                    h = void 0 !== d;
                h && (d = n(d, x > 2 ? arguments[2] : void 0));
                var y,
                    b,
                    g,
                    m,
                    w,
                    S,
                    E = l(e),
                    _ = 0;
                if (!E || (this === v && u(E))) for (y = a(e), b = r ? new this(y) : v(y); y > _; _++) (S = h ? d(e[_], _) : e[_]), f(b, _, S);
                else for (w = (m = p(e, E)).next, b = r ? new this() : []; !(g = o(w, m)).done; _++) (S = h ? s(m, d, [g.value, _], !0) : g.value), f(b, _, S);
                return (b.length = _), b;
            };
        },
        689996: (t, e, r) => {
            "use strict";
            var n = r(497636),
                o = r(265968),
                i = r(409337),
                s = r(492991),
                u = r(639646),
                c = r(387501),
                a = o([].push),
                f = function (t) {
                    var e = 1 === t,
                        r = 2 === t,
                        o = 3 === t,
                        f = 4 === t,
                        p = 6 === t,
                        l = 7 === t,
                        v = 5 === t || p;
                    return function (x, d, h, y) {
                        for (var b, g, m = s(x), w = i(m), S = n(d, h), E = u(w), _ = 0, I = y || c, R = e ? I(x, E) : r || l ? I(x, 0) : void 0; E > _; _++)
                            if ((v || _ in w) && ((g = S((b = w[_]), _, m)), t))
                                if (e) R[_] = g;
                                else if (g)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return b;
                                        case 6:
                                            return _;
                                        case 2:
                                            a(R, b);
                                    }
                                else
                                    switch (t) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            a(R, b);
                                    }
                        return p ? -1 : o || f ? f : R;
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
                c = function (t) {
                    return function (e, r, c, a) {
                        n(r);
                        var f = o(e),
                            p = i(f),
                            l = s(f),
                            v = t ? l - 1 : 0,
                            x = t ? -1 : 1;
                        if (c < 2)
                            for (;;) {
                                if (v in p) {
                                    (a = p[v]), (v += x);
                                    break;
                                }
                                if (((v += x), t ? v < 0 : l <= v)) throw new u("Reduce of empty array with no initial value");
                            }
                        for (; t ? v >= 0 : l > v; v += x) v in p && (a = r(a, p[v], v, f));
                        return a;
                    };
                };
            t.exports = { left: c(!1), right: c(!0) };
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
                c = r(357188),
                a = Function,
                f = n([].concat),
                p = n([].join),
                l = {};
            t.exports = c
                ? a.bind
                : function (t) {
                      var e = o(this),
                          r = e.prototype,
                          n = u(arguments, 1),
                          c = function () {
                              var r = f(n, u(arguments));
                              return this instanceof c
                                  ? (function (t, e, r) {
                                        if (!s(l, e)) {
                                            for (var n = [], o = 0; o < e; o++) n[o] = "a[" + o + "]";
                                            l[e] = a("C,a", "return new C(" + p(n, ",") + ")");
                                        }
                                        return l[e](t, r);
                                    })(e, r.length, r)
                                  : e.apply(t, r);
                          };
                      return i(r) && (c.prototype = r), c;
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
                c = TypeError;
            t.exports = function (t, e) {
                var r = arguments.length < 2 ? u(t) : e;
                if (o(r)) return i(n(r, t));
                throw new c(s(t) + " is not iterable");
            };
        },
        44231: (t, e, r) => {
            "use strict";
            var n = r(265968),
                o = r(33718),
                i = r(26733),
                s = r(427079),
                u = r(783326),
                c = n([].push);
            t.exports = function (t) {
                if (i(t)) return t;
                if (o(t)) {
                    for (var e = t.length, r = [], n = 0; n < e; n++) {
                        var a = t[n];
                        "string" == typeof a ? c(r, a) : ("number" != typeof a && "Number" !== s(a) && "String" !== s(a)) || c(r, u(a));
                    }
                    var f = r.length,
                        p = !0;
                    return function (t, e) {
                        if (p) return (p = !1), e;
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
                c = r(108511),
                a = function () {},
                f = [],
                p = u("Reflect", "construct"),
                l = /^\s*(?:class|function)\b/,
                v = n(l.exec),
                x = !l.test(a),
                d = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return p(a, f, t), !0;
                    } catch (t) {
                        return !1;
                    }
                },
                h = function (t) {
                    if (!i(t)) return !1;
                    switch (s(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return x || !!v(l, c(t));
                    } catch (t) {
                        return !0;
                    }
                };
            (h.sham = !0),
                (t.exports =
                    !p ||
                    o(function () {
                        var t;
                        return (
                            d(d.call) ||
                            !d(Object) ||
                            !d(function () {
                                t = !0;
                            }) ||
                            t
                        );
                    })
                        ? h
                        : d);
        },
        789003: (t, e, r) => {
            "use strict";
            var n = r(497636),
                o = r(720266),
                i = r(821176),
                s = r(659821),
                u = r(991943),
                c = r(639646),
                a = r(291321),
                f = r(928403),
                p = r(478830),
                l = r(257281),
                v = TypeError,
                x = function (t, e) {
                    (this.stopped = t), (this.result = e);
                },
                d = x.prototype;
            t.exports = function (t, e, r) {
                var h,
                    y,
                    b,
                    g,
                    m,
                    w,
                    S,
                    E = r && r.that,
                    _ = !(!r || !r.AS_ENTRIES),
                    I = !(!r || !r.IS_RECORD),
                    R = !(!r || !r.IS_ITERATOR),
                    T = !(!r || !r.INTERRUPTED),
                    A = n(e, E),
                    O = function (t) {
                        return h && l(h, "normal", t), new x(!0, t);
                    },
                    M = function (t) {
                        return _ ? (i(t), T ? A(t[0], t[1], O) : A(t[0], t[1])) : T ? A(t, O) : A(t);
                    };
                if (I) h = t.iterator;
                else if (R) h = t;
                else {
                    if (!(y = p(t))) throw new v(s(t) + " is not iterable");
                    if (u(y)) {
                        for (b = 0, g = c(t); g > b; b++) if ((m = M(t[b])) && a(d, m)) return m;
                        return new x(!1);
                    }
                    h = f(t, y);
                }
                for (w = I ? t.next : h.next; !(S = o(w, h)).done; ) {
                    try {
                        m = M(S.value);
                    } catch (t) {
                        l(h, "throw", t);
                    }
                    if ("object" == typeof m && m && a(d, m)) return m;
                }
                return new x(!1);
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
                c = function () {
                    return this;
                };
            t.exports = function (t, e, r, a) {
                var f = e + " Iterator";
                return (t.prototype = o(n, { next: i(+!a, r) })), s(t, f, !1, !0), (u[f] = c), t;
            };
        },
        712707: (t, e, r) => {
            "use strict";
            var n = r(23103),
                o = r(720266),
                i = r(124231),
                s = r(951805),
                u = r(26733),
                c = r(42247),
                a = r(567567),
                f = r(956540),
                p = r(954555),
                l = r(675762),
                v = r(914768),
                x = r(670095),
                d = r(545495),
                h = r(360693),
                y = s.PROPER,
                b = s.CONFIGURABLE,
                g = h.IteratorPrototype,
                m = h.BUGGY_SAFARI_ITERATORS,
                w = x("iterator"),
                S = "keys",
                E = "values",
                _ = "entries",
                I = function () {
                    return this;
                };
            t.exports = function (t, e, r, s, x, h, R) {
                c(r, e, s);
                var T,
                    A,
                    O,
                    M = function (t) {
                        if (t === x && k) return k;
                        if (!m && t && t in C) return C[t];
                        switch (t) {
                            case S:
                            case E:
                            case _:
                                return function () {
                                    return new r(this, t);
                                };
                        }
                        return function () {
                            return new r(this);
                        };
                    },
                    L = e + " Iterator",
                    j = !1,
                    C = t.prototype,
                    P = C[w] || C["@@iterator"] || (x && C[x]),
                    k = (!m && P) || M(x),
                    N = ("Array" === e && C.entries) || P;
                if (
                    (N && (T = a(N.call(new t()))) !== Object.prototype && T.next && (i || a(T) === g || (f ? f(T, g) : u(T[w]) || v(T, w, I)), p(T, L, !0, !0), i && (d[L] = I)),
                    y &&
                        x === E &&
                        P &&
                        P.name !== E &&
                        (!i && b
                            ? l(C, "name", E)
                            : ((j = !0),
                              (k = function () {
                                  return o(P, this);
                              }))),
                    x)
                )
                    if (((A = { values: M(E), keys: h ? k : M(S), entries: M(_) }), R)) for (O in A) (m || j || !(O in C)) && v(C, O, A[O]);
                    else n({ target: e, proto: !0, forced: m || j }, A);
                return (i && !R) || C[w] === k || v(C, w, k, { name: x }), (d[e] = k), A;
            };
        },
        360693: (t, e, r) => {
            "use strict";
            var n,
                o,
                i,
                s = r(824229),
                u = r(26733),
                c = r(685052),
                a = r(822391),
                f = r(567567),
                p = r(914768),
                l = r(670095),
                v = r(124231),
                x = l("iterator"),
                d = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = f(f(i))) !== Object.prototype && (n = o) : (d = !0)),
                !c(n) ||
                s(function () {
                    var t = {};
                    return n[x].call(t) !== t;
                })
                    ? (n = {})
                    : v && (n = a(n)),
                u(n[x]) ||
                    p(n, x, function () {
                        return this;
                    }),
                (t.exports = { IteratorPrototype: n, BUGGY_SAFARI_ITERATORS: d });
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
                c = r(609859),
                a = r(497636),
                f = r(997933).f,
                p = r(155795).set,
                l = r(193358),
                v = r(232023),
                x = r(308983),
                d = r(610263),
                h = r(128801),
                y = c.MutationObserver || c.WebKitMutationObserver,
                b = c.document,
                g = c.process,
                m = c.Promise,
                w = f(c, "queueMicrotask"),
                S = w && w.value;
            if (!S) {
                var E = new l(),
                    _ = function () {
                        var t, e;
                        for (h && (t = g.domain) && t.exit(); (e = E.get()); )
                            try {
                                e();
                            } catch (t) {
                                throw (E.head && n(), t);
                            }
                        t && t.enter();
                    };
                v || h || d || !y || !b
                    ? !x && m && m.resolve
                        ? (((s = m.resolve(void 0)).constructor = m),
                          (u = a(s.then, s)),
                          (n = function () {
                              u(_);
                          }))
                        : h
                          ? (n = function () {
                                g.nextTick(_);
                            })
                          : ((p = a(p, c)),
                            (n = function () {
                                p(_);
                            }))
                    : ((o = !0),
                      (i = b.createTextNode("")),
                      new y(_).observe(i, { characterData: !0 }),
                      (n = function () {
                          i.data = o = !o;
                      })),
                    (S = function (t) {
                        E.head || n(), E.add(t);
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
                c = r(841647),
                a = n.parseInt,
                f = n.Symbol,
                p = f && f.iterator,
                l = /^[+-]?0x/i,
                v = i(l.exec),
                x =
                    8 !== a(c + "08") ||
                    22 !== a(c + "0x16") ||
                    (p &&
                        !o(function () {
                            a(Object(p));
                        }));
            t.exports = x
                ? function (t, e) {
                      var r = u(s(t));
                      return a(r, e >>> 0 || (v(l, r) ? 16 : 10));
                  }
                : a;
        },
        700047: (t, e, r) => {
            "use strict";
            var n = r(807400),
                o = r(265968),
                i = r(720266),
                s = r(824229),
                u = r(765632),
                c = r(110894),
                a = r(119195),
                f = r(492991),
                p = r(409337),
                l = Object.assign,
                v = Object.defineProperty,
                x = o([].concat);
            t.exports =
                !l ||
                s(function () {
                    if (
                        n &&
                        1 !==
                            l(
                                { b: 1 },
                                l(
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
                        7 !== l({}, t)[r] || u(l({}, e)).join("") !== o
                    );
                })
                    ? function (t, e) {
                          for (var r = f(t), o = arguments.length, s = 1, l = c.f, v = a.f; o > s; ) for (var d, h = p(arguments[s++]), y = l ? x(u(h), l(h)) : u(h), b = y.length, g = 0; b > g; ) (d = y[g++]), (n && !i(v, h, d)) || (r[d] = h[d]);
                          return r;
                      }
                    : l;
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
                c = r(670095),
                a = r(748639),
                f = r(95189),
                p = r(124231),
                l = r(406358),
                v = o && o.prototype,
                x = c("species"),
                d = !1,
                h = i(n.PromiseRejectionEvent),
                y = s("Promise", function () {
                    var t = u(o),
                        e = t !== String(o);
                    if (!e && 66 === l) return !0;
                    if (p && (!v.catch || !v.finally)) return !0;
                    if (!l || l < 51 || !/native code/.test(t)) {
                        var r = new o(function (t) {
                                t(1);
                            }),
                            n = function (t) {
                                t(
                                    function () {},
                                    function () {},
                                );
                            };
                        if ((((r.constructor = {})[x] = n), !(d = r.then(function () {}) instanceof n))) return !0;
                    }
                    return !e && (a || f) && !h;
                });
            t.exports = { CONSTRUCTOR: y, REJECTION_EVENT: h, SUBCLASSING: d };
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
                c = r(730895),
                a = r(25650),
                f = r(933036),
                p = r(822391),
                l = r(856407).get,
                v = r(542926),
                x = r(210461),
                d = f("native-string-replace", String.prototype.replace),
                h = RegExp.prototype.exec,
                y = h,
                b = s("".charAt),
                g = s("".indexOf),
                m = s("".replace),
                w = s("".slice),
                S = ((o = /b*/g), i(h, (n = /a/), "a"), i(h, o, "a"), 0 !== n.lastIndex || 0 !== o.lastIndex),
                E = a.BROKEN_CARET,
                _ = void 0 !== /()??/.exec("")[1];
            (S || _ || E || v || x) &&
                (y = function (t) {
                    var e,
                        r,
                        n,
                        o,
                        s,
                        a,
                        f,
                        v = this,
                        x = l(v),
                        I = u(t),
                        R = x.raw;
                    if (R) return (R.lastIndex = v.lastIndex), (e = i(y, R, I)), (v.lastIndex = R.lastIndex), e;
                    var T = x.groups,
                        A = E && v.sticky,
                        O = i(c, v),
                        M = v.source,
                        L = 0,
                        j = I;
                    if (
                        (A && ((O = m(O, "y", "")), -1 === g(O, "g") && (O += "g"), (j = w(I, v.lastIndex)), v.lastIndex > 0 && (!v.multiline || (v.multiline && "\n" !== b(I, v.lastIndex - 1))) && ((M = "(?: " + M + ")"), (j = " " + j), L++), (r = new RegExp("^(?:" + M + ")", O))),
                        _ && (r = new RegExp("^" + M + "$(?!\\s)", O)),
                        S && (n = v.lastIndex),
                        (o = i(h, A ? r : v, j)),
                        A ? (o ? ((o.input = w(o.input, L)), (o[0] = w(o[0], L)), (o.index = v.lastIndex), (v.lastIndex += o[0].length)) : (v.lastIndex = 0)) : S && o && (v.lastIndex = v.global ? o.index + o[0].length : n),
                        _ &&
                            o &&
                            o.length > 1 &&
                            i(d, o[0], r, function () {
                                for (s = 1; s < arguments.length - 2; s++) void 0 === arguments[s] && (o[s] = void 0);
                            }),
                        o && T)
                    )
                        for (o.groups = a = p(null), s = 0; s < T.length; s++) a[(f = T[s])[0]] = o[f[1]];
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
                c = r(180598),
                a = r(1909),
                f = r(977579),
                p = o.Function,
                l = /MSIE .\./.test(c) || (u && ((n = o.Bun.version.split(".")).length < 3 || ("0" === n[0] && (n[1] < 3 || ("3" === n[1] && "0" === n[2])))));
            t.exports = function (t, e) {
                var r = e ? 2 : 1;
                return l
                    ? function (n, o) {
                          var u = f(arguments.length, 1) > r,
                              c = s(n) ? n : p(n),
                              l = u ? a(arguments, r) : [],
                              v = u
                                  ? function () {
                                        i(c, this, l);
                                    }
                                  : c;
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
                c = n("".charCodeAt),
                a = n("".slice),
                f = function (t) {
                    return function (e, r) {
                        var n,
                            f,
                            p = i(s(e)),
                            l = o(r),
                            v = p.length;
                        return l < 0 || l >= v ? (t ? "" : void 0) : (n = c(p, l)) < 55296 || n > 56319 || l + 1 === v || (f = c(p, l + 1)) < 56320 || f > 57343 ? (t ? u(p, l) : n) : t ? a(p, l, l + 2) : f - 56320 + ((n - 55296) << 10) + 65536;
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
                c = RegExp("^[" + s + "]+"),
                a = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                f = function (t) {
                    return function (e) {
                        var r = i(o(e));
                        return 1 & t && (r = u(r, c, "")), 2 & t && (r = u(r, a, "$1")), r;
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
                c = r(653171),
                a = r(497636),
                f = r(26733),
                p = r(198270),
                l = r(824229),
                v = r(53777),
                x = r(1909),
                d = r(522635),
                h = r(977579),
                y = r(232023),
                b = r(128801),
                g = u.setImmediate,
                m = u.clearImmediate,
                w = u.process,
                S = u.Dispatch,
                E = u.Function,
                _ = u.MessageChannel,
                I = u.String,
                R = 0,
                T = {},
                A = "onreadystatechange";
            l(function () {
                n = u.location;
            });
            var O = function (t) {
                    if (p(T, t)) {
                        var e = T[t];
                        delete T[t], e();
                    }
                },
                M = function (t) {
                    return function () {
                        O(t);
                    };
                },
                L = function (t) {
                    O(t.data);
                },
                j = function (t) {
                    u.postMessage(I(t), n.protocol + "//" + n.host);
                };
            (g && m) ||
                ((g = function (t) {
                    h(arguments.length, 1);
                    var e = f(t) ? t : E(t),
                        r = x(arguments, 1);
                    return (
                        (T[++R] = function () {
                            c(e, void 0, r);
                        }),
                        o(R),
                        R
                    );
                }),
                (m = function (t) {
                    delete T[t];
                }),
                b
                    ? (o = function (t) {
                          w.nextTick(M(t));
                      })
                    : S && S.now
                      ? (o = function (t) {
                            S.now(M(t));
                        })
                      : _ && !y
                        ? ((s = (i = new _()).port2), (i.port1.onmessage = L), (o = a(s.postMessage, s)))
                        : u.addEventListener && f(u.postMessage) && !u.importScripts && n && "file:" !== n.protocol && !l(j)
                          ? ((o = j), u.addEventListener("message", L, !1))
                          : (o =
                                A in d("script")
                                    ? function (t) {
                                          v.appendChild(d("script"))[A] = function () {
                                              v.removeChild(this), O(t);
                                          };
                                      }
                                    : function (t) {
                                          setTimeout(M(t), 0);
                                      })),
                (t.exports = { set: g, clear: m });
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
        485748: (t) => {
            (t.exports = function (t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n;
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        813850: (t, e, r) => {
            var n = r(485748);
            (t.exports = function (t) {
                if (Array.isArray(t)) return n(t);
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        171600: (t) => {
            (t.exports = function (t) {
                return t && t.__esModule ? t : { default: t };
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
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
                        var c = s ? Object.getOwnPropertyDescriptor(t, u) : null;
                        c && (c.get || c.set) ? Object.defineProperty(i, u, c) : (i[u] = t[u]);
                    }
                return (i.default = t), r && r.set(t, i), i;
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        623912: (t) => {
            (t.exports = function (t) {
                if (("undefined" != typeof Symbol && null != t[Symbol.iterator]) || null != t["@@iterator"]) return Array.from(t);
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        83096: (t) => {
            (t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        373408: (t, e, r) => {
            var n = r(813850),
                o = r(623912),
                i = r(360121),
                s = r(83096);
            (t.exports = function (t) {
                return n(t) || o(t) || i(t) || s();
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
        },
        667425: (t) => {
            function e(r) {
                return (
                    (t.exports = e =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (t) {
                                  return typeof t;
                              }
                            : function (t) {
                                  return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                              }),
                    (t.exports.__esModule = !0),
                    (t.exports.default = t.exports),
                    e(r)
                );
            }
            (t.exports = e), (t.exports.__esModule = !0), (t.exports.default = t.exports);
        },
        360121: (t, e, r) => {
            var n = r(485748);
            (t.exports = function (t, e) {
                if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0;
                }
            }),
                (t.exports.__esModule = !0),
                (t.exports.default = t.exports);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1bce2d5d.3cde63fa.js.map
