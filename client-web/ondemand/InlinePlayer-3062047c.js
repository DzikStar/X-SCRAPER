"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.InlinePlayer-3062047c"],
    {
        449228: (t, r, e) => {
            var n = e(23103),
                o = e(689996).find,
                i = e(609736),
                a = "find",
                c = !0;
            a in [] &&
                Array(1)[a](function () {
                    c = !1;
                }),
                n(
                    { target: "Array", proto: !0, forced: c },
                    {
                        find: function (t) {
                            return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    },
                ),
                i(a);
        },
        438695: (t, r, e) => {
            var n = e(23103),
                o = e(986570);
            n({ target: "Array", proto: !0, forced: [].forEach !== o }, { forEach: o });
        },
        827233: (t, r, e) => {
            var n = e(23103),
                o = e(310507);
            n(
                {
                    target: "Array",
                    stat: !0,
                    forced: !e(874575)(function (t) {
                        Array.from(t);
                    }),
                },
                { from: o },
            );
        },
        374083: (t, r, e) => {
            var n = e(23103),
                o = e(844745),
                i = e(219540).indexOf,
                a = e(696038),
                c = o([].indexOf),
                u = !!c && 1 / c([1], 1, -0) < 0;
            n(
                { target: "Array", proto: !0, forced: u || !a("indexOf") },
                {
                    indexOf: function (t) {
                        var r = arguments.length > 1 ? arguments[1] : void 0;
                        return u ? c(this, t, r) || 0 : i(this, t, r);
                    },
                },
            );
        },
        418145: (t, r, e) => {
            e(23103)({ target: "Array", stat: !0 }, { isArray: e(33718) });
        },
        315735: (t, r, e) => {
            var n = e(910905),
                o = e(609736),
                i = e(545495),
                a = e(856407),
                c = e(931787).f,
                u = e(712707),
                f = e(33684),
                s = e(124231),
                v = e(807400),
                d = "Array Iterator",
                l = a.set,
                h = a.getterFor(d);
            t.exports = u(
                Array,
                "Array",
                function (t, r) {
                    l(this, { type: d, target: n(t), index: 0, kind: r });
                },
                function () {
                    var t = h(this),
                        r = t.target,
                        e = t.kind,
                        n = t.index++;
                    if (!r || n >= r.length) return (t.target = void 0), f(void 0, !0);
                    switch (e) {
                        case "keys":
                            return f(n, !1);
                        case "values":
                            return f(r[n], !1);
                    }
                    return f([n, r[n]], !1);
                },
                "values",
            );
            var p = (i.Arguments = i.Array);
            if ((o("keys"), o("values"), o("entries"), !s && v && "values" !== p.name))
                try {
                    c(p, "name", { value: "values" });
                } catch (t) {}
        },
        543450: (t, r, e) => {
            var n = e(23103),
                o = e(689996).map;
            n(
                { target: "Array", proto: !0, forced: !e(331460)("map") },
                {
                    map: function (t) {
                        return o(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (t, r, e) => {
            var n = e(23103),
                o = e(43143).left,
                i = e(696038),
                a = e(406358);
            n(
                { target: "Array", proto: !0, forced: (!e(128801) && a > 79 && a < 83) || !i("reduce") },
                {
                    reduce: function (t) {
                        var r = arguments.length;
                        return o(this, t, r, r > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (t, r, e) => {
            var n = e(23103),
                o = e(33718),
                i = e(782359),
                a = e(685052),
                c = e(443231),
                u = e(639646),
                f = e(910905),
                s = e(462324),
                v = e(670095),
                d = e(331460),
                l = e(1909),
                h = d("slice"),
                p = v("species"),
                g = Array,
                y = Math.max;
            n(
                { target: "Array", proto: !0, forced: !h },
                {
                    slice: function (t, r) {
                        var e,
                            n,
                            v,
                            d = f(this),
                            h = u(d),
                            m = c(t, h),
                            b = c(void 0 === r ? h : r, h);
                        if (o(d) && ((e = d.constructor), ((i(e) && (e === g || o(e.prototype))) || (a(e) && null === (e = e[p]))) && (e = void 0), e === g || void 0 === e)) return l(d, m, b);
                        for (n = new (void 0 === e ? g : e)(y(b - m, 0)), v = 0; m < b; m++, v++) m in d && s(n, v, d[m]);
                        return (n.length = v), n;
                    },
                },
            );
        },
        24895: (t, r, e) => {
            var n = e(23103),
                o = e(265968),
                i = Date,
                a = o(i.prototype.getTime);
            n(
                { target: "Date", stat: !0 },
                {
                    now: function () {
                        return a(new i());
                    },
                },
            );
        },
        499120: (t, r, e) => {
            var n = e(265968),
                o = e(914768),
                i = Date.prototype,
                a = "Invalid Date",
                c = "toString",
                u = n(i[c]),
                f = n(i.getTime);
            String(new Date(NaN)) !== a &&
                o(i, c, function () {
                    var t = f(this);
                    return t == t ? u(this) : a;
                });
        },
        865584: (t, r, e) => {
            var n = e(23103),
                o = e(194128);
            n({ target: "Function", proto: !0, forced: Function.bind !== o }, { bind: o });
        },
        326936: (t, r, e) => {
            var n = e(807400),
                o = e(951805).EXISTS,
                i = e(265968),
                a = e(396616),
                c = Function.prototype,
                u = i(c.toString),
                f = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
                s = i(f.exec);
            n &&
                !o &&
                a(c, "name", {
                    configurable: !0,
                    get: function () {
                        try {
                            return s(f, u(this))[1];
                        } catch (t) {
                            return "";
                        }
                    },
                });
        },
        606710: (t, r, e) => {
            var n = e(23103),
                o = e(431333),
                i = e(653171),
                a = e(720266),
                c = e(265968),
                u = e(824229),
                f = e(26733),
                s = e(349395),
                v = e(1909),
                d = e(44231),
                l = e(144860),
                h = String,
                p = o("JSON", "stringify"),
                g = c(/./.exec),
                y = c("".charAt),
                m = c("".charCodeAt),
                b = c("".replace),
                S = c((1).toString),
                E = /[\uD800-\uDFFF]/g,
                N = /^[\uD800-\uDBFF]$/,
                w = /^[\uDC00-\uDFFF]$/,
                O =
                    !l ||
                    u(function () {
                        var t = o("Symbol")("stringify detection");
                        return "[null]" !== p([t]) || "{}" !== p({ a: t }) || "{}" !== p(Object(t));
                    }),
                A = u(function () {
                    return '"\\udf06\\ud834"' !== p("\udf06\ud834") || '"\\udead"' !== p("\udead");
                }),
                I = function (t, r) {
                    var e = v(arguments),
                        n = d(r);
                    if (f(n) || (void 0 !== t && !s(t)))
                        return (
                            (e[1] = function (t, r) {
                                if ((f(n) && (r = a(n, this, h(t), r)), !s(r))) return r;
                            }),
                            i(p, null, e)
                        );
                },
                j = function (t, r, e) {
                    var n = y(e, r - 1),
                        o = y(e, r + 1);
                    return (g(N, t) && !g(w, o)) || (g(w, t) && !g(N, n)) ? "\\u" + S(m(t, 0), 16) : t;
                };
            p &&
                n(
                    { target: "JSON", stat: !0, arity: 3, forced: O || A },
                    {
                        stringify: function (t, r, e) {
                            var n = v(arguments),
                                o = i(O ? I : p, null, n);
                            return A && "string" == typeof o ? b(o, E, j) : o;
                        },
                    },
                );
        },
        271245: (t, r, e) => {
            var n = e(23103),
                o = e(124231),
                i = e(807400),
                a = e(609859),
                c = e(849276),
                u = e(265968),
                f = e(46541),
                s = e(198270),
                v = e(720835),
                d = e(291321),
                l = e(349395),
                h = e(992066),
                p = e(824229),
                g = e(778151).f,
                y = e(997933).f,
                m = e(931787).f,
                b = e(890143),
                S = e(1017).trim,
                E = "Number",
                N = a[E],
                w = c[E],
                O = N.prototype,
                A = a.TypeError,
                I = u("".slice),
                j = u("".charCodeAt),
                T = function (t) {
                    var r,
                        e,
                        n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        f = h(t, "number");
                    if (l(f)) throw new A("Cannot convert a Symbol value to a number");
                    if ("string" == typeof f && f.length > 2)
                        if (((f = S(f)), 43 === (r = j(f, 0)) || 45 === r)) {
                            if (88 === (e = j(f, 2)) || 120 === e) return NaN;
                        } else if (48 === r) {
                            switch (j(f, 1)) {
                                case 66:
                                case 98:
                                    (n = 2), (o = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (o = 55);
                                    break;
                                default:
                                    return +f;
                            }
                            for (a = (i = I(f, 2)).length, c = 0; c < a; c++) if ((u = j(i, c)) < 48 || u > o) return NaN;
                            return parseInt(i, n);
                        }
                    return +f;
                },
                F = f(E, !N(" 0o1") || !N("0b1") || N("+0x1")),
                x = function (t) {
                    var r,
                        e =
                            arguments.length < 1
                                ? 0
                                : N(
                                      (function (t) {
                                          var r = h(t, "number");
                                          return "bigint" == typeof r ? r : T(r);
                                      })(t),
                                  );
                    return d(O, (r = this)) &&
                        p(function () {
                            b(r);
                        })
                        ? v(Object(e), this, x)
                        : e;
                };
            (x.prototype = O), F && !o && (O.constructor = x), n({ global: !0, constructor: !0, wrap: !0, forced: F }, { Number: x });
            var P = function (t, r) {
                for (var e, n = i ? g(r) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) s(r, (e = n[o])) && !s(t, e) && m(t, e, y(r, e));
            };
            o && w && P(c[E], w), (F || o) && P(c[E], N);
        },
        414586: (t, r, e) => {
            e(23103)(
                { target: "Number", stat: !0 },
                {
                    isNaN: function (t) {
                        return t != t;
                    },
                },
            );
        },
        458143: (t, r, e) => {
            e(23103)({ target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 });
        },
        43105: (t, r, e) => {
            var n = e(23103),
                o = e(700047);
            n({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== o }, { assign: o });
        },
        682067: (t, r, e) => {
            var n = e(23103),
                o = e(144860),
                i = e(824229),
                a = e(110894),
                c = e(492991);
            n(
                {
                    target: "Object",
                    stat: !0,
                    forced:
                        !o ||
                        i(function () {
                            a.f(1);
                        }),
                },
                {
                    getOwnPropertySymbols: function (t) {
                        var r = a.f;
                        return r ? r(c(t)) : [];
                    },
                },
            );
        },
        334769: (t, r, e) => {
            var n = e(23103),
                o = e(492991),
                i = e(765632);
            n(
                {
                    target: "Object",
                    stat: !0,
                    forced: e(824229)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (t) {
                        return i(o(t));
                    },
                },
            );
        },
        358188: (t, r, e) => {
            var n = e(971601),
                o = e(914768),
                i = e(844059);
            n || o(Object.prototype, "toString", i, { unsafe: !0 });
        },
        256032: (t, r, e) => {
            var n = e(23103),
                o = e(720266),
                i = e(277111),
                a = e(916485),
                c = e(664624),
                u = e(789003);
            n(
                { target: "Promise", stat: !0, forced: e(796866) },
                {
                    all: function (t) {
                        var r = this,
                            e = a.f(r),
                            n = e.resolve,
                            f = e.reject,
                            s = c(function () {
                                var e = i(r.resolve),
                                    a = [],
                                    c = 0,
                                    s = 1;
                                u(t, function (t) {
                                    var i = c++,
                                        u = !1;
                                    s++,
                                        o(e, r, t).then(function (t) {
                                            u || ((u = !0), (a[i] = t), --s || n(a));
                                        }, f);
                                }),
                                    --s || n(a);
                            });
                        return s.error && f(s.value), e.promise;
                    },
                },
            );
        },
        806135: (t, r, e) => {
            var n = e(23103),
                o = e(124231),
                i = e(338321).CONSTRUCTOR,
                a = e(174473),
                c = e(431333),
                u = e(26733),
                f = e(914768),
                s = a && a.prototype;
            if (
                (n(
                    { target: "Promise", proto: !0, forced: i, real: !0 },
                    {
                        catch: function (t) {
                            return this.then(void 0, t);
                        },
                    },
                ),
                !o && u(a))
            ) {
                var v = c("Promise").prototype.catch;
                s.catch !== v && f(s, "catch", v, { unsafe: !0 });
            }
        },
        486087: (t, r, e) => {
            var n,
                o,
                i,
                a = e(23103),
                c = e(124231),
                u = e(128801),
                f = e(609859),
                s = e(720266),
                v = e(914768),
                d = e(956540),
                l = e(954555),
                h = e(971832),
                p = e(277111),
                g = e(26733),
                y = e(685052),
                m = e(557728),
                b = e(137942),
                S = e(155795).set,
                E = e(124794),
                N = e(214665),
                w = e(664624),
                O = e(193358),
                A = e(856407),
                I = e(174473),
                j = e(338321),
                T = e(916485),
                F = "Promise",
                x = j.CONSTRUCTOR,
                P = j.REJECTION_EVENT,
                R = j.SUBCLASSING,
                C = A.getterFor(F),
                _ = A.set,
                k = I && I.prototype,
                D = I,
                U = k,
                M = f.TypeError,
                G = f.document,
                L = f.process,
                V = T.f,
                X = V,
                $ = !!(G && G.createEvent && f.dispatchEvent),
                J = "unhandledrejection",
                B = function (t) {
                    var r;
                    return !(!y(t) || !g((r = t.then))) && r;
                },
                Y = function (t, r) {
                    var e,
                        n,
                        o,
                        i = r.value,
                        a = 1 === r.state,
                        c = a ? t.ok : t.fail,
                        u = t.resolve,
                        f = t.reject,
                        v = t.domain;
                    try {
                        c ? (a || (2 === r.rejection && z(r), (r.rejection = 1)), !0 === c ? (e = i) : (v && v.enter(), (e = c(i)), v && (v.exit(), (o = !0))), e === t.promise ? f(new M("Promise-chain cycle")) : (n = B(e)) ? s(n, e, u, f) : u(e)) : f(i);
                    } catch (t) {
                        v && !o && v.exit(), f(t);
                    }
                },
                H = function (t, r) {
                    t.notified ||
                        ((t.notified = !0),
                        E(function () {
                            for (var e, n = t.reactions; (e = n.get()); ) Y(e, t);
                            (t.notified = !1), r && !t.rejection && W(t);
                        }));
                },
                Q = function (t, r, e) {
                    var n, o;
                    $ ? (((n = G.createEvent("Event")).promise = r), (n.reason = e), n.initEvent(t, !1, !0), f.dispatchEvent(n)) : (n = { promise: r, reason: e }), !P && (o = f["on" + t]) ? o(n) : t === J && N("Unhandled promise rejection", e);
                },
                W = function (t) {
                    s(S, f, function () {
                        var r,
                            e = t.facade,
                            n = t.value;
                        if (
                            q(t) &&
                            ((r = w(function () {
                                u ? L.emit("unhandledRejection", n, e) : Q(J, e, n);
                            })),
                            (t.rejection = u || q(t) ? 2 : 1),
                            r.error)
                        )
                            throw r.value;
                    });
                },
                q = function (t) {
                    return 1 !== t.rejection && !t.parent;
                },
                z = function (t) {
                    s(S, f, function () {
                        var r = t.facade;
                        u ? L.emit("rejectionHandled", r) : Q("rejectionhandled", r, t.value);
                    });
                },
                K = function (t, r, e) {
                    return function (n) {
                        t(r, n, e);
                    };
                },
                Z = function (t, r, e) {
                    t.done || ((t.done = !0), e && (t = e), (t.value = r), (t.state = 2), H(t, !0));
                },
                tt = function (t, r, e) {
                    if (!t.done) {
                        (t.done = !0), e && (t = e);
                        try {
                            if (t.facade === r) throw new M("Promise can't be resolved itself");
                            var n = B(r);
                            n
                                ? E(function () {
                                      var e = { done: !1 };
                                      try {
                                          s(n, r, K(tt, e, t), K(Z, e, t));
                                      } catch (r) {
                                          Z(e, r, t);
                                      }
                                  })
                                : ((t.value = r), (t.state = 1), H(t, !1));
                        } catch (r) {
                            Z({ done: !1 }, r, t);
                        }
                    }
                };
            if (
                x &&
                ((U = (D = function (t) {
                    m(this, U), p(t), s(n, this);
                    var r = C(this);
                    try {
                        t(K(tt, r), K(Z, r));
                    } catch (t) {
                        Z(r, t);
                    }
                }).prototype),
                ((n = function (t) {
                    _(this, { type: F, done: !1, notified: !1, parent: !1, reactions: new O(), rejection: !1, state: 0, value: void 0 });
                }).prototype = v(U, "then", function (t, r) {
                    var e = C(this),
                        n = V(b(this, D));
                    return (
                        (e.parent = !0),
                        (n.ok = !g(t) || t),
                        (n.fail = g(r) && r),
                        (n.domain = u ? L.domain : void 0),
                        0 === e.state
                            ? e.reactions.add(n)
                            : E(function () {
                                  Y(n, e);
                              }),
                        n.promise
                    );
                })),
                (o = function () {
                    var t = new n(),
                        r = C(t);
                    (this.promise = t), (this.resolve = K(tt, r)), (this.reject = K(Z, r));
                }),
                (T.f = V =
                    function (t) {
                        return t === D || undefined === t ? new o(t) : X(t);
                    }),
                !c && g(I) && k !== Object.prototype)
            ) {
                (i = k.then),
                    R ||
                        v(
                            k,
                            "then",
                            function (t, r) {
                                var e = this;
                                return new D(function (t, r) {
                                    s(i, e, t, r);
                                }).then(t, r);
                            },
                            { unsafe: !0 },
                        );
                try {
                    delete k.constructor;
                } catch (t) {}
                d && d(k, U);
            }
            a({ global: !0, constructor: !0, wrap: !0, forced: x }, { Promise: D }), l(D, F, !1, !0), h(F);
        },
        73439: (t, r, e) => {
            e(486087), e(256032), e(806135), e(726767), e(939320), e(852047);
        },
        726767: (t, r, e) => {
            var n = e(23103),
                o = e(720266),
                i = e(277111),
                a = e(916485),
                c = e(664624),
                u = e(789003);
            n(
                { target: "Promise", stat: !0, forced: e(796866) },
                {
                    race: function (t) {
                        var r = this,
                            e = a.f(r),
                            n = e.reject,
                            f = c(function () {
                                var a = i(r.resolve);
                                u(t, function (t) {
                                    o(a, r, t).then(e.resolve, n);
                                });
                            });
                        return f.error && n(f.value), e.promise;
                    },
                },
            );
        },
        939320: (t, r, e) => {
            var n = e(23103),
                o = e(720266),
                i = e(916485);
            n(
                { target: "Promise", stat: !0, forced: e(338321).CONSTRUCTOR },
                {
                    reject: function (t) {
                        var r = i.f(this);
                        return o(r.reject, void 0, t), r.promise;
                    },
                },
            );
        },
        852047: (t, r, e) => {
            var n = e(23103),
                o = e(431333),
                i = e(124231),
                a = e(174473),
                c = e(338321).CONSTRUCTOR,
                u = e(62391),
                f = o("Promise"),
                s = i && !c;
            n(
                { target: "Promise", stat: !0, forced: i || c },
                {
                    resolve: function (t) {
                        return u(s && this === f ? a : this, t);
                    },
                },
            );
        },
        477950: (t, r, e) => {
            var n = e(23103),
                o = e(763466);
            n({ target: "RegExp", proto: !0, forced: /./.exec !== o }, { exec: o });
        },
        888233: (t, r, e) => {
            var n = e(951805).PROPER,
                o = e(914768),
                i = e(821176),
                a = e(783326),
                c = e(824229),
                u = e(683349),
                f = "toString",
                s = RegExp.prototype[f],
                v = c(function () {
                    return "/a/b" !== s.call({ source: "a", flags: "b" });
                }),
                d = n && s.name !== f;
            (v || d) &&
                o(
                    RegExp.prototype,
                    f,
                    function () {
                        var t = i(this);
                        return "/" + a(t.source) + "/" + a(u(t));
                    },
                    { unsafe: !0 },
                );
        },
        428673: (t, r, e) => {
            var n = e(630966).charAt,
                o = e(783326),
                i = e(856407),
                a = e(712707),
                c = e(33684),
                u = "String Iterator",
                f = i.set,
                s = i.getterFor(u);
            a(
                String,
                "String",
                function (t) {
                    f(this, { type: u, string: o(t), index: 0 });
                },
                function () {
                    var t,
                        r = s(this),
                        e = r.string,
                        o = r.index;
                    return o >= e.length ? c(void 0, !0) : ((t = n(e, o)), (r.index += t.length), c(t, !1));
                },
            );
        },
        339956: (t, r, e) => {
            var n = e(23103),
                o = e(609859),
                i = e(720266),
                a = e(265968),
                c = e(124231),
                u = e(807400),
                f = e(144860),
                s = e(824229),
                v = e(198270),
                d = e(291321),
                l = e(821176),
                h = e(910905),
                p = e(239310),
                g = e(783326),
                y = e(665358),
                m = e(822391),
                b = e(765632),
                S = e(778151),
                E = e(310166),
                N = e(110894),
                w = e(997933),
                O = e(931787),
                A = e(690219),
                I = e(119195),
                j = e(914768),
                T = e(396616),
                F = e(933036),
                x = e(944399),
                P = e(995977),
                R = e(581441),
                C = e(670095),
                _ = e(355391),
                k = e(863524),
                D = e(566481),
                U = e(954555),
                M = e(856407),
                G = e(689996).forEach,
                L = x("hidden"),
                V = "Symbol",
                X = "prototype",
                $ = M.set,
                J = M.getterFor(V),
                B = Object[X],
                Y = o.Symbol,
                H = Y && Y[X],
                Q = o.RangeError,
                W = o.TypeError,
                q = o.QObject,
                z = w.f,
                K = O.f,
                Z = E.f,
                tt = I.f,
                rt = a([].push),
                et = F("symbols"),
                nt = F("op-symbols"),
                ot = F("wks"),
                it = !q || !q[X] || !q[X].findChild,
                at = function (t, r, e) {
                    var n = z(B, r);
                    n && delete B[r], K(t, r, e), n && t !== B && K(B, r, n);
                },
                ct =
                    u &&
                    s(function () {
                        return (
                            7 !==
                            m(
                                K({}, "a", {
                                    get: function () {
                                        return K(this, "a", { value: 7 }).a;
                                    },
                                }),
                            ).a
                        );
                    })
                        ? at
                        : K,
                ut = function (t, r) {
                    var e = (et[t] = m(H));
                    return $(e, { type: V, tag: t, description: r }), u || (e.description = r), e;
                },
                ft = function (t, r, e) {
                    t === B && ft(nt, r, e), l(t);
                    var n = p(r);
                    return l(e), v(et, n) ? (e.enumerable ? (v(t, L) && t[L][n] && (t[L][n] = !1), (e = m(e, { enumerable: y(0, !1) }))) : (v(t, L) || K(t, L, y(1, {})), (t[L][n] = !0)), ct(t, n, e)) : K(t, n, e);
                },
                st = function (t, r) {
                    l(t);
                    var e = h(r),
                        n = b(e).concat(ht(e));
                    return (
                        G(n, function (r) {
                            (u && !i(vt, e, r)) || ft(t, r, e[r]);
                        }),
                        t
                    );
                },
                vt = function (t) {
                    var r = p(t),
                        e = i(tt, this, r);
                    return !(this === B && v(et, r) && !v(nt, r)) && (!(e || !v(this, r) || !v(et, r) || (v(this, L) && this[L][r])) || e);
                },
                dt = function (t, r) {
                    var e = h(t),
                        n = p(r);
                    if (e !== B || !v(et, n) || v(nt, n)) {
                        var o = z(e, n);
                        return !o || !v(et, n) || (v(e, L) && e[L][n]) || (o.enumerable = !0), o;
                    }
                },
                lt = function (t) {
                    var r = Z(h(t)),
                        e = [];
                    return (
                        G(r, function (t) {
                            v(et, t) || v(P, t) || rt(e, t);
                        }),
                        e
                    );
                },
                ht = function (t) {
                    var r = t === B,
                        e = Z(r ? nt : h(t)),
                        n = [];
                    return (
                        G(e, function (t) {
                            !v(et, t) || (r && !v(B, t)) || rt(n, et[t]);
                        }),
                        n
                    );
                };
            f ||
                (j(
                    (H = (Y = function () {
                        if (d(H, this)) throw new W("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                            r = R(t),
                            e = function (t) {
                                this === B && i(e, nt, t), v(this, L) && v(this[L], r) && (this[L][r] = !1);
                                var n = y(1, t);
                                try {
                                    ct(this, r, n);
                                } catch (t) {
                                    if (!(t instanceof Q)) throw t;
                                    at(this, r, n);
                                }
                            };
                        return u && it && ct(B, r, { configurable: !0, set: e }), ut(r, t);
                    })[X]),
                    "toString",
                    function () {
                        return J(this).tag;
                    },
                ),
                j(Y, "withoutSetter", function (t) {
                    return ut(R(t), t);
                }),
                (I.f = vt),
                (O.f = ft),
                (A.f = st),
                (w.f = dt),
                (S.f = E.f = lt),
                (N.f = ht),
                (_.f = function (t) {
                    return ut(C(t), t);
                }),
                u &&
                    (T(H, "description", {
                        configurable: !0,
                        get: function () {
                            return J(this).description;
                        },
                    }),
                    c || j(B, "propertyIsEnumerable", vt, { unsafe: !0 }))),
                n({ global: !0, constructor: !0, wrap: !0, forced: !f, sham: !f }, { Symbol: Y }),
                G(b(ot), function (t) {
                    k(t);
                }),
                n(
                    { target: V, stat: !0, forced: !f },
                    {
                        useSetter: function () {
                            it = !0;
                        },
                        useSimple: function () {
                            it = !1;
                        },
                    },
                ),
                n(
                    { target: "Object", stat: !0, forced: !f, sham: !u },
                    {
                        create: function (t, r) {
                            return void 0 === r ? m(t) : st(m(t), r);
                        },
                        defineProperty: ft,
                        defineProperties: st,
                        getOwnPropertyDescriptor: dt,
                    },
                ),
                n({ target: "Object", stat: !0, forced: !f }, { getOwnPropertyNames: lt }),
                D(),
                U(Y, V),
                (P[L] = !0);
        },
        200634: (t, r, e) => {
            var n = e(23103),
                o = e(807400),
                i = e(609859),
                a = e(265968),
                c = e(198270),
                u = e(26733),
                f = e(291321),
                s = e(783326),
                v = e(396616),
                d = e(977081),
                l = i.Symbol,
                h = l && l.prototype;
            if (o && u(l) && (!("description" in h) || void 0 !== l().description)) {
                var p = {},
                    g = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : s(arguments[0]),
                            r = f(h, this) ? new l(t) : void 0 === t ? l() : l(t);
                        return "" === t && (p[r] = !0), r;
                    };
                d(g, l), (g.prototype = h), (h.constructor = g);
                var y = "Symbol(description detection)" === String(l("description detection")),
                    m = a(h.valueOf),
                    b = a(h.toString),
                    S = /^Symbol\((.*)\)[^)]+$/,
                    E = a("".replace),
                    N = a("".slice);
                v(h, "description", {
                    configurable: !0,
                    get: function () {
                        var t = m(this);
                        if (c(p, t)) return "";
                        var r = b(t),
                            e = y ? N(r, 7, -1) : E(r, S, "$1");
                        return "" === e ? void 0 : e;
                    },
                }),
                    n({ global: !0, constructor: !0, forced: !0 }, { Symbol: g });
            }
        },
        523352: (t, r, e) => {
            var n = e(23103),
                o = e(431333),
                i = e(198270),
                a = e(783326),
                c = e(933036),
                u = e(455957),
                f = c("string-to-symbol-registry"),
                s = c("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !u },
                {
                    for: function (t) {
                        var r = a(t);
                        if (i(f, r)) return f[r];
                        var e = o("Symbol")(r);
                        return (f[r] = e), (s[e] = r), e;
                    },
                },
            );
        },
        320796: (t, r, e) => {
            e(863524)("iterator");
        },
        334115: (t, r, e) => {
            e(339956), e(523352), e(749717), e(606710), e(682067);
        },
        749717: (t, r, e) => {
            var n = e(23103),
                o = e(198270),
                i = e(349395),
                a = e(659821),
                c = e(933036),
                u = e(455957),
                f = c("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !u },
                {
                    keyFor: function (t) {
                        if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
                        if (o(f, t)) return f[t];
                    },
                },
            );
        },
        201939: (t, r, e) => {
            var n = e(609859),
                o = e(995694),
                i = e(618865),
                a = e(986570),
                c = e(675762),
                u = function (t) {
                    if (t && t.forEach !== a)
                        try {
                            c(t, "forEach", a);
                        } catch (r) {
                            t.forEach = a;
                        }
                };
            for (var f in o) o[f] && u(n[f] && n[f].prototype);
            u(i);
        },
        906886: (t, r, e) => {
            var n = e(609859),
                o = e(995694),
                i = e(618865),
                a = e(315735),
                c = e(675762),
                u = e(670095),
                f = u("iterator"),
                s = u("toStringTag"),
                v = a.values,
                d = function (t, r) {
                    if (t) {
                        if (t[f] !== v)
                            try {
                                c(t, f, v);
                            } catch (r) {
                                t[f] = v;
                            }
                        if ((t[s] || c(t, s, r), o[r]))
                            for (var e in a)
                                if (t[e] !== a[e])
                                    try {
                                        c(t, e, a[e]);
                                    } catch (r) {
                                        t[e] = a[e];
                                    }
                    }
                };
            for (var l in o) d(n[l] && n[l].prototype, l);
            d(i, "DOMTokenList");
        },
        773801: (t, r, e) => {
            var n = e(23103),
                o = e(609859),
                i = e(324752)(o.setInterval, !0);
            n({ global: !0, bind: !0, forced: o.setInterval !== i }, { setInterval: i });
        },
        698540: (t, r, e) => {
            var n = e(23103),
                o = e(609859),
                i = e(324752)(o.setTimeout, !0);
            n({ global: !0, bind: !0, forced: o.setTimeout !== i }, { setTimeout: i });
        },
        154226: (t, r, e) => {
            e(773801), e(698540);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.InlinePlayer-3062047c.d7d2edfa.js.map
