"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22", "ondemand.InlinePlayer-3062047c"],
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
                s = e(33684),
                f = e(124231),
                v = e(807400),
                d = "Array Iterator",
                l = a.set,
                p = a.getterFor(d);
            t.exports = u(
                Array,
                "Array",
                function (t, r) {
                    l(this, { type: d, target: n(t), index: 0, kind: r });
                },
                function () {
                    var t = p(this),
                        r = t.target,
                        e = t.kind,
                        n = t.index++;
                    if (!r || n >= r.length) return (t.target = void 0), s(void 0, !0);
                    switch (e) {
                        case "keys":
                            return s(n, !1);
                        case "values":
                            return s(r[n], !1);
                    }
                    return s([n, r[n]], !1);
                },
                "values",
            );
            var h = (i.Arguments = i.Array);
            if ((o("keys"), o("values"), o("entries"), !f && v && "values" !== h.name))
                try {
                    c(h, "name", { value: "values" });
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
                s = e(910905),
                f = e(462324),
                v = e(670095),
                d = e(331460),
                l = e(1909),
                p = d("slice"),
                h = v("species"),
                g = Array,
                y = Math.max;
            n(
                { target: "Array", proto: !0, forced: !p },
                {
                    slice: function (t, r) {
                        var e,
                            n,
                            v,
                            d = s(this),
                            p = u(d),
                            m = c(t, p),
                            b = c(void 0 === r ? p : r, p);
                        if (o(d) && ((e = d.constructor), ((i(e) && (e === g || o(e.prototype))) || (a(e) && null === (e = e[h]))) && (e = void 0), e === g || void 0 === e)) return l(d, m, b);
                        for (n = new (void 0 === e ? g : e)(y(b - m, 0)), v = 0; m < b; m++, v++) m in d && f(n, v, d[m]);
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
                s = n(i.getTime);
            String(new Date(NaN)) !== a &&
                o(i, c, function () {
                    var t = s(this);
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
                s = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
                f = i(s.exec);
            n &&
                !o &&
                a(c, "name", {
                    configurable: !0,
                    get: function () {
                        try {
                            return f(s, u(this))[1];
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
                s = e(26733),
                f = e(349395),
                v = e(1909),
                d = e(44231),
                l = e(144860),
                p = String,
                h = o("JSON", "stringify"),
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
                        return "[null]" !== h([t]) || "{}" !== h({ a: t }) || "{}" !== h(Object(t));
                    }),
                A = u(function () {
                    return '"\\udf06\\ud834"' !== h("\udf06\ud834") || '"\\udead"' !== h("\udead");
                }),
                j = function (t, r) {
                    var e = v(arguments),
                        n = d(r);
                    if (s(n) || (void 0 !== t && !f(t)))
                        return (
                            (e[1] = function (t, r) {
                                if ((s(n) && (r = a(n, this, p(t), r)), !f(r))) return r;
                            }),
                            i(h, null, e)
                        );
                },
                I = function (t, r, e) {
                    var n = y(e, r - 1),
                        o = y(e, r + 1);
                    return (g(N, t) && !g(w, o)) || (g(w, t) && !g(N, n)) ? "\\u" + S(m(t, 0), 16) : t;
                };
            h &&
                n(
                    { target: "JSON", stat: !0, arity: 3, forced: O || A },
                    {
                        stringify: function (t, r, e) {
                            var n = v(arguments),
                                o = i(O ? j : h, null, n);
                            return A && "string" == typeof o ? b(o, E, I) : o;
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
                s = e(46541),
                f = e(198270),
                v = e(720835),
                d = e(291321),
                l = e(349395),
                p = e(992066),
                h = e(824229),
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
                j = u("".slice),
                I = u("".charCodeAt),
                T = function (t) {
                    var r,
                        e,
                        n,
                        o,
                        i,
                        a,
                        c,
                        u,
                        s = p(t, "number");
                    if (l(s)) throw new A("Cannot convert a Symbol value to a number");
                    if ("string" == typeof s && s.length > 2)
                        if (((s = S(s)), 43 === (r = I(s, 0)) || 45 === r)) {
                            if (88 === (e = I(s, 2)) || 120 === e) return NaN;
                        } else if (48 === r) {
                            switch (I(s, 1)) {
                                case 66:
                                case 98:
                                    (n = 2), (o = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (o = 55);
                                    break;
                                default:
                                    return +s;
                            }
                            for (a = (i = j(s, 2)).length, c = 0; c < a; c++) if ((u = I(i, c)) < 48 || u > o) return NaN;
                            return parseInt(i, n);
                        }
                    return +s;
                },
                F = s(E, !N(" 0o1") || !N("0b1") || N("+0x1")),
                R = function (t) {
                    var r,
                        e =
                            arguments.length < 1
                                ? 0
                                : N(
                                      (function (t) {
                                          var r = p(t, "number");
                                          return "bigint" == typeof r ? r : T(r);
                                      })(t),
                                  );
                    return d(O, (r = this)) &&
                        h(function () {
                            b(r);
                        })
                        ? v(Object(e), this, R)
                        : e;
                };
            (R.prototype = O), F && !o && (O.constructor = R), n({ global: !0, constructor: !0, wrap: !0, forced: F }, { Number: R });
            var x = function (t, r) {
                for (var e, n = i ? g(r) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) f(r, (e = n[o])) && !f(t, e) && m(t, e, y(r, e));
            };
            o && w && x(c[E], w), (F || o) && x(c[E], N);
        },
        966466: (t, r, e) => {
            e(23103)({ target: "Number", stat: !0 }, { isFinite: e(953775) });
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
        977208: (t, r, e) => {
            var n = e(23103),
                o = e(36596);
            n({ target: "Number", stat: !0, forced: Number.parseInt !== o }, { parseInt: o });
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
                            s = e.reject,
                            f = c(function () {
                                var e = i(r.resolve),
                                    a = [],
                                    c = 0,
                                    f = 1;
                                u(t, function (t) {
                                    var i = c++,
                                        u = !1;
                                    f++,
                                        o(e, r, t).then(function (t) {
                                            u || ((u = !0), (a[i] = t), --f || n(a));
                                        }, s);
                                }),
                                    --f || n(a);
                            });
                        return f.error && s(f.value), e.promise;
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
                s = e(914768),
                f = a && a.prototype;
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
                f.catch !== v && s(f, "catch", v, { unsafe: !0 });
            }
        },
        486087: (t, r, e) => {
            var n,
                o,
                i,
                a = e(23103),
                c = e(124231),
                u = e(128801),
                s = e(609859),
                f = e(720266),
                v = e(914768),
                d = e(956540),
                l = e(954555),
                p = e(971832),
                h = e(277111),
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
                j = e(174473),
                I = e(338321),
                T = e(916485),
                F = "Promise",
                R = I.CONSTRUCTOR,
                x = I.REJECTION_EVENT,
                P = I.SUBCLASSING,
                C = A.getterFor(F),
                _ = A.set,
                k = j && j.prototype,
                D = j,
                U = k,
                M = s.TypeError,
                L = s.document,
                G = s.process,
                V = T.f,
                J = V,
                X = !!(L && L.createEvent && s.dispatchEvent),
                $ = "unhandledrejection",
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
                        s = t.reject,
                        v = t.domain;
                    try {
                        c ? (a || (2 === r.rejection && z(r), (r.rejection = 1)), !0 === c ? (e = i) : (v && v.enter(), (e = c(i)), v && (v.exit(), (o = !0))), e === t.promise ? s(new M("Promise-chain cycle")) : (n = B(e)) ? f(n, e, u, s) : u(e)) : s(i);
                    } catch (t) {
                        v && !o && v.exit(), s(t);
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
                    X ? (((n = L.createEvent("Event")).promise = r), (n.reason = e), n.initEvent(t, !1, !0), s.dispatchEvent(n)) : (n = { promise: r, reason: e }), !x && (o = s["on" + t]) ? o(n) : t === $ && N("Unhandled promise rejection", e);
                },
                W = function (t) {
                    f(S, s, function () {
                        var r,
                            e = t.facade,
                            n = t.value;
                        if (
                            q(t) &&
                            ((r = w(function () {
                                u ? G.emit("unhandledRejection", n, e) : Q($, e, n);
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
                    f(S, s, function () {
                        var r = t.facade;
                        u ? G.emit("rejectionHandled", r) : Q("rejectionhandled", r, t.value);
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
                                          f(n, r, K(tt, e, t), K(Z, e, t));
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
                R &&
                ((U = (D = function (t) {
                    m(this, U), h(t), f(n, this);
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
                        (n.domain = u ? G.domain : void 0),
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
                        return t === D || undefined === t ? new o(t) : J(t);
                    }),
                !c && g(j) && k !== Object.prototype)
            ) {
                (i = k.then),
                    P ||
                        v(
                            k,
                            "then",
                            function (t, r) {
                                var e = this;
                                return new D(function (t, r) {
                                    f(i, e, t, r);
                                }).then(t, r);
                            },
                            { unsafe: !0 },
                        );
                try {
                    delete k.constructor;
                } catch (t) {}
                d && d(k, U);
            }
            a({ global: !0, constructor: !0, wrap: !0, forced: R }, { Promise: D }), l(D, F, !1, !0), p(F);
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
                            s = c(function () {
                                var a = i(r.resolve);
                                u(t, function (t) {
                                    o(a, r, t).then(e.resolve, n);
                                });
                            });
                        return s.error && n(s.value), e.promise;
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
                s = o("Promise"),
                f = i && !c;
            n(
                { target: "Promise", stat: !0, forced: i || c },
                {
                    resolve: function (t) {
                        return u(f && this === s ? a : this, t);
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
                s = "toString",
                f = RegExp.prototype[s],
                v = c(function () {
                    return "/a/b" !== f.call({ source: "a", flags: "b" });
                }),
                d = n && f.name !== s;
            (v || d) &&
                o(
                    RegExp.prototype,
                    s,
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
                s = i.set,
                f = i.getterFor(u);
            a(
                String,
                "String",
                function (t) {
                    s(this, { type: u, string: o(t), index: 0 });
                },
                function () {
                    var t,
                        r = f(this),
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
                s = e(144860),
                f = e(824229),
                v = e(198270),
                d = e(291321),
                l = e(821176),
                p = e(910905),
                h = e(239310),
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
                j = e(119195),
                I = e(914768),
                T = e(396616),
                F = e(933036),
                R = e(944399),
                x = e(995977),
                P = e(581441),
                C = e(670095),
                _ = e(355391),
                k = e(863524),
                D = e(566481),
                U = e(954555),
                M = e(856407),
                L = e(689996).forEach,
                G = R("hidden"),
                V = "Symbol",
                J = "prototype",
                X = M.set,
                $ = M.getterFor(V),
                B = Object[J],
                Y = o.Symbol,
                H = Y && Y[J],
                Q = o.RangeError,
                W = o.TypeError,
                q = o.QObject,
                z = w.f,
                K = O.f,
                Z = E.f,
                tt = j.f,
                rt = a([].push),
                et = F("symbols"),
                nt = F("op-symbols"),
                ot = F("wks"),
                it = !q || !q[J] || !q[J].findChild,
                at = function (t, r, e) {
                    var n = z(B, r);
                    n && delete B[r], K(t, r, e), n && t !== B && K(B, r, n);
                },
                ct =
                    u &&
                    f(function () {
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
                    return X(e, { type: V, tag: t, description: r }), u || (e.description = r), e;
                },
                st = function (t, r, e) {
                    t === B && st(nt, r, e), l(t);
                    var n = h(r);
                    return l(e), v(et, n) ? (e.enumerable ? (v(t, G) && t[G][n] && (t[G][n] = !1), (e = m(e, { enumerable: y(0, !1) }))) : (v(t, G) || K(t, G, y(1, {})), (t[G][n] = !0)), ct(t, n, e)) : K(t, n, e);
                },
                ft = function (t, r) {
                    l(t);
                    var e = p(r),
                        n = b(e).concat(pt(e));
                    return (
                        L(n, function (r) {
                            (u && !i(vt, e, r)) || st(t, r, e[r]);
                        }),
                        t
                    );
                },
                vt = function (t) {
                    var r = h(t),
                        e = i(tt, this, r);
                    return !(this === B && v(et, r) && !v(nt, r)) && (!(e || !v(this, r) || !v(et, r) || (v(this, G) && this[G][r])) || e);
                },
                dt = function (t, r) {
                    var e = p(t),
                        n = h(r);
                    if (e !== B || !v(et, n) || v(nt, n)) {
                        var o = z(e, n);
                        return !o || !v(et, n) || (v(e, G) && e[G][n]) || (o.enumerable = !0), o;
                    }
                },
                lt = function (t) {
                    var r = Z(p(t)),
                        e = [];
                    return (
                        L(r, function (t) {
                            v(et, t) || v(x, t) || rt(e, t);
                        }),
                        e
                    );
                },
                pt = function (t) {
                    var r = t === B,
                        e = Z(r ? nt : p(t)),
                        n = [];
                    return (
                        L(e, function (t) {
                            !v(et, t) || (r && !v(B, t)) || rt(n, et[t]);
                        }),
                        n
                    );
                };
            s ||
                (I(
                    (H = (Y = function () {
                        if (d(H, this)) throw new W("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                            r = P(t),
                            e = function (t) {
                                this === B && i(e, nt, t), v(this, G) && v(this[G], r) && (this[G][r] = !1);
                                var n = y(1, t);
                                try {
                                    ct(this, r, n);
                                } catch (t) {
                                    if (!(t instanceof Q)) throw t;
                                    at(this, r, n);
                                }
                            };
                        return u && it && ct(B, r, { configurable: !0, set: e }), ut(r, t);
                    })[J]),
                    "toString",
                    function () {
                        return $(this).tag;
                    },
                ),
                I(Y, "withoutSetter", function (t) {
                    return ut(P(t), t);
                }),
                (j.f = vt),
                (O.f = st),
                (A.f = ft),
                (w.f = dt),
                (S.f = E.f = lt),
                (N.f = pt),
                (_.f = function (t) {
                    return ut(C(t), t);
                }),
                u &&
                    (T(H, "description", {
                        configurable: !0,
                        get: function () {
                            return $(this).description;
                        },
                    }),
                    c || I(B, "propertyIsEnumerable", vt, { unsafe: !0 }))),
                n({ global: !0, constructor: !0, wrap: !0, forced: !s, sham: !s }, { Symbol: Y }),
                L(b(ot), function (t) {
                    k(t);
                }),
                n(
                    { target: V, stat: !0, forced: !s },
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
                    { target: "Object", stat: !0, forced: !s, sham: !u },
                    {
                        create: function (t, r) {
                            return void 0 === r ? m(t) : ft(m(t), r);
                        },
                        defineProperty: st,
                        defineProperties: ft,
                        getOwnPropertyDescriptor: dt,
                    },
                ),
                n({ target: "Object", stat: !0, forced: !s }, { getOwnPropertyNames: lt }),
                D(),
                U(Y, V),
                (x[G] = !0);
        },
        200634: (t, r, e) => {
            var n = e(23103),
                o = e(807400),
                i = e(609859),
                a = e(265968),
                c = e(198270),
                u = e(26733),
                s = e(291321),
                f = e(783326),
                v = e(396616),
                d = e(977081),
                l = i.Symbol,
                p = l && l.prototype;
            if (o && u(l) && (!("description" in p) || void 0 !== l().description)) {
                var h = {},
                    g = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : f(arguments[0]),
                            r = s(p, this) ? new l(t) : void 0 === t ? l() : l(t);
                        return "" === t && (h[r] = !0), r;
                    };
                d(g, l), (g.prototype = p), (p.constructor = g);
                var y = "Symbol(description detection)" === String(l("description detection")),
                    m = a(p.valueOf),
                    b = a(p.toString),
                    S = /^Symbol\((.*)\)[^)]+$/,
                    E = a("".replace),
                    N = a("".slice);
                v(p, "description", {
                    configurable: !0,
                    get: function () {
                        var t = m(this);
                        if (c(h, t)) return "";
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
                s = c("string-to-symbol-registry"),
                f = c("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !u },
                {
                    for: function (t) {
                        var r = a(t);
                        if (i(s, r)) return s[r];
                        var e = o("Symbol")(r);
                        return (s[r] = e), (f[e] = r), e;
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
                s = c("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !u },
                {
                    keyFor: function (t) {
                        if (!i(t)) throw new TypeError(a(t) + " is not a symbol");
                        if (o(s, t)) return s[t];
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
            for (var s in o) o[s] && u(n[s] && n[s].prototype);
            u(i);
        },
        906886: (t, r, e) => {
            var n = e(609859),
                o = e(995694),
                i = e(618865),
                a = e(315735),
                c = e(675762),
                u = e(670095),
                s = u("iterator"),
                f = u("toStringTag"),
                v = a.values,
                d = function (t, r) {
                    if (t) {
                        if (t[s] !== v)
                            try {
                                c(t, s, v);
                            } catch (r) {
                                t[s] = v;
                            }
                        if ((t[f] || c(t, f, r), o[r]))
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
        482609: (t) => {
            t.exports = function (t) {
                var r = [];
                return (
                    (r.toString = function () {
                        return this.map(function (r) {
                            var e = (function (t, r) {
                                var e = t[1] || "",
                                    n = t[3];
                                if (!n) return e;
                                if (r && "function" == typeof btoa) {
                                    var o = ((a = n), (c = btoa(unescape(encodeURIComponent(JSON.stringify(a))))), (u = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c)), "/*# ".concat(u, " */")),
                                        i = n.sources.map(function (t) {
                                            return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */");
                                        });
                                    return [e].concat(i).concat([o]).join("\n");
                                }
                                var a, c, u;
                                return [e].join("\n");
                            })(r, t);
                            return r[2] ? "@media ".concat(r[2], " {").concat(e, "}") : e;
                        }).join("");
                    }),
                    (r.i = function (t, e, n) {
                        "string" == typeof t && (t = [[null, t, ""]]);
                        var o = {};
                        if (n)
                            for (var i = 0; i < this.length; i++) {
                                var a = this[i][0];
                                null != a && (o[a] = !0);
                            }
                        for (var c = 0; c < t.length; c++) {
                            var u = [].concat(t[c]);
                            (n && o[u[0]]) || (e && (u[2] ? (u[2] = "".concat(e, " and ").concat(u[2])) : (u[2] = e)), r.push(u));
                        }
                    }),
                    r
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22.56a7678a.js.map
