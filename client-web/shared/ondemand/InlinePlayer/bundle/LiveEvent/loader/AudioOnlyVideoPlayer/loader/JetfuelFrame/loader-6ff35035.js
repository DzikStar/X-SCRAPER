"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-6ff35035"],
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
                w = /[\uD800-\uDFFF]/g,
                E = /^[\uD800-\uDBFF]$/,
                O = /^[\uDC00-\uDFFF]$/,
                j =
                    !l ||
                    u(function () {
                        var t = o("Symbol")("stringify detection");
                        return "[null]" !== p([t]) || "{}" !== p({ a: t }) || "{}" !== p(Object(t));
                    }),
                T = u(function () {
                    return '"\\udf06\\ud834"' !== p("\udf06\ud834") || '"\\udead"' !== p("\udead");
                }),
                A = function (t, r) {
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
                P = function (t, r, e) {
                    var n = y(e, r - 1),
                        o = y(e, r + 1);
                    return (g(E, t) && !g(O, o)) || (g(O, t) && !g(E, n)) ? "\\u" + S(m(t, 0), 16) : t;
                };
            p &&
                n(
                    { target: "JSON", stat: !0, arity: 3, forced: j || T },
                    {
                        stringify: function (t, r, e) {
                            var n = v(arguments),
                                o = i(j ? A : p, null, n);
                            return T && "string" == typeof o ? b(o, w, P) : o;
                        },
                    },
                );
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
                w = e(124794),
                E = e(214665),
                O = e(664624),
                j = e(193358),
                T = e(856407),
                A = e(174473),
                P = e(338321),
                x = e(916485),
                F = "Promise",
                N = P.CONSTRUCTOR,
                R = P.REJECTION_EVENT,
                C = P.SUBCLASSING,
                k = T.getterFor(F),
                D = T.set,
                I = A && A.prototype,
                _ = A,
                U = I,
                J = f.TypeError,
                $ = f.document,
                L = f.process,
                B = x.f,
                G = B,
                M = !!($ && $.createEvent && f.dispatchEvent),
                V = "unhandledrejection",
                X = function (t) {
                    var r;
                    return !(!y(t) || !g((r = t.then))) && r;
                },
                H = function (t, r) {
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
                        c ? (a || (2 === r.rejection && K(r), (r.rejection = 1)), !0 === c ? (e = i) : (v && v.enter(), (e = c(i)), v && (v.exit(), (o = !0))), e === t.promise ? f(new J("Promise-chain cycle")) : (n = X(e)) ? s(n, e, u, f) : u(e)) : f(i);
                    } catch (t) {
                        v && !o && v.exit(), f(t);
                    }
                },
                Q = function (t, r) {
                    t.notified ||
                        ((t.notified = !0),
                        w(function () {
                            for (var e, n = t.reactions; (e = n.get()); ) H(e, t);
                            (t.notified = !1), r && !t.rejection && q(t);
                        }));
                },
                W = function (t, r, e) {
                    var n, o;
                    M ? (((n = $.createEvent("Event")).promise = r), (n.reason = e), n.initEvent(t, !1, !0), f.dispatchEvent(n)) : (n = { promise: r, reason: e }), !R && (o = f["on" + t]) ? o(n) : t === V && E("Unhandled promise rejection", e);
                },
                q = function (t) {
                    s(S, f, function () {
                        var r,
                            e = t.facade,
                            n = t.value;
                        if (
                            z(t) &&
                            ((r = O(function () {
                                u ? L.emit("unhandledRejection", n, e) : W(V, e, n);
                            })),
                            (t.rejection = u || z(t) ? 2 : 1),
                            r.error)
                        )
                            throw r.value;
                    });
                },
                z = function (t) {
                    return 1 !== t.rejection && !t.parent;
                },
                K = function (t) {
                    s(S, f, function () {
                        var r = t.facade;
                        u ? L.emit("rejectionHandled", r) : W("rejectionhandled", r, t.value);
                    });
                },
                Y = function (t, r, e) {
                    return function (n) {
                        t(r, n, e);
                    };
                },
                Z = function (t, r, e) {
                    t.done || ((t.done = !0), e && (t = e), (t.value = r), (t.state = 2), Q(t, !0));
                },
                tt = function (t, r, e) {
                    if (!t.done) {
                        (t.done = !0), e && (t = e);
                        try {
                            if (t.facade === r) throw new J("Promise can't be resolved itself");
                            var n = X(r);
                            n
                                ? w(function () {
                                      var e = { done: !1 };
                                      try {
                                          s(n, r, Y(tt, e, t), Y(Z, e, t));
                                      } catch (r) {
                                          Z(e, r, t);
                                      }
                                  })
                                : ((t.value = r), (t.state = 1), Q(t, !1));
                        } catch (r) {
                            Z({ done: !1 }, r, t);
                        }
                    }
                };
            if (
                N &&
                ((U = (_ = function (t) {
                    m(this, U), p(t), s(n, this);
                    var r = k(this);
                    try {
                        t(Y(tt, r), Y(Z, r));
                    } catch (t) {
                        Z(r, t);
                    }
                }).prototype),
                ((n = function (t) {
                    D(this, { type: F, done: !1, notified: !1, parent: !1, reactions: new j(), rejection: !1, state: 0, value: void 0 });
                }).prototype = v(U, "then", function (t, r) {
                    var e = k(this),
                        n = B(b(this, _));
                    return (
                        (e.parent = !0),
                        (n.ok = !g(t) || t),
                        (n.fail = g(r) && r),
                        (n.domain = u ? L.domain : void 0),
                        0 === e.state
                            ? e.reactions.add(n)
                            : w(function () {
                                  H(n, e);
                              }),
                        n.promise
                    );
                })),
                (o = function () {
                    var t = new n(),
                        r = k(t);
                    (this.promise = t), (this.resolve = Y(tt, r)), (this.reject = Y(Z, r));
                }),
                (x.f = B =
                    function (t) {
                        return t === _ || undefined === t ? new o(t) : G(t);
                    }),
                !c && g(A) && I !== Object.prototype)
            ) {
                (i = I.then),
                    C ||
                        v(
                            I,
                            "then",
                            function (t, r) {
                                var e = this;
                                return new _(function (t, r) {
                                    s(i, e, t, r);
                                }).then(t, r);
                            },
                            { unsafe: !0 },
                        );
                try {
                    delete I.constructor;
                } catch (t) {}
                d && d(I, U);
            }
            a({ global: !0, constructor: !0, wrap: !0, forced: N }, { Promise: _ }), l(_, F, !1, !0), h(F);
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
                w = e(310166),
                E = e(110894),
                O = e(997933),
                j = e(931787),
                T = e(690219),
                A = e(119195),
                P = e(914768),
                x = e(396616),
                F = e(933036),
                N = e(944399),
                R = e(995977),
                C = e(581441),
                k = e(670095),
                D = e(355391),
                I = e(863524),
                _ = e(566481),
                U = e(954555),
                J = e(856407),
                $ = e(689996).forEach,
                L = N("hidden"),
                B = "Symbol",
                G = "prototype",
                M = J.set,
                V = J.getterFor(B),
                X = Object[G],
                H = o.Symbol,
                Q = H && H[G],
                W = o.RangeError,
                q = o.TypeError,
                z = o.QObject,
                K = O.f,
                Y = j.f,
                Z = w.f,
                tt = A.f,
                rt = a([].push),
                et = F("symbols"),
                nt = F("op-symbols"),
                ot = F("wks"),
                it = !z || !z[G] || !z[G].findChild,
                at = function (t, r, e) {
                    var n = K(X, r);
                    n && delete X[r], Y(t, r, e), n && t !== X && Y(X, r, n);
                },
                ct =
                    u &&
                    s(function () {
                        return (
                            7 !==
                            m(
                                Y({}, "a", {
                                    get: function () {
                                        return Y(this, "a", { value: 7 }).a;
                                    },
                                }),
                            ).a
                        );
                    })
                        ? at
                        : Y,
                ut = function (t, r) {
                    var e = (et[t] = m(Q));
                    return M(e, { type: B, tag: t, description: r }), u || (e.description = r), e;
                },
                ft = function (t, r, e) {
                    t === X && ft(nt, r, e), l(t);
                    var n = p(r);
                    return l(e), v(et, n) ? (e.enumerable ? (v(t, L) && t[L][n] && (t[L][n] = !1), (e = m(e, { enumerable: y(0, !1) }))) : (v(t, L) || Y(t, L, y(1, {})), (t[L][n] = !0)), ct(t, n, e)) : Y(t, n, e);
                },
                st = function (t, r) {
                    l(t);
                    var e = h(r),
                        n = b(e).concat(ht(e));
                    return (
                        $(n, function (r) {
                            (u && !i(vt, e, r)) || ft(t, r, e[r]);
                        }),
                        t
                    );
                },
                vt = function (t) {
                    var r = p(t),
                        e = i(tt, this, r);
                    return !(this === X && v(et, r) && !v(nt, r)) && (!(e || !v(this, r) || !v(et, r) || (v(this, L) && this[L][r])) || e);
                },
                dt = function (t, r) {
                    var e = h(t),
                        n = p(r);
                    if (e !== X || !v(et, n) || v(nt, n)) {
                        var o = K(e, n);
                        return !o || !v(et, n) || (v(e, L) && e[L][n]) || (o.enumerable = !0), o;
                    }
                },
                lt = function (t) {
                    var r = Z(h(t)),
                        e = [];
                    return (
                        $(r, function (t) {
                            v(et, t) || v(R, t) || rt(e, t);
                        }),
                        e
                    );
                },
                ht = function (t) {
                    var r = t === X,
                        e = Z(r ? nt : h(t)),
                        n = [];
                    return (
                        $(e, function (t) {
                            !v(et, t) || (r && !v(X, t)) || rt(n, et[t]);
                        }),
                        n
                    );
                };
            f ||
                (P(
                    (Q = (H = function () {
                        if (d(Q, this)) throw new q("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0,
                            r = C(t),
                            e = function (t) {
                                this === X && i(e, nt, t), v(this, L) && v(this[L], r) && (this[L][r] = !1);
                                var n = y(1, t);
                                try {
                                    ct(this, r, n);
                                } catch (t) {
                                    if (!(t instanceof W)) throw t;
                                    at(this, r, n);
                                }
                            };
                        return u && it && ct(X, r, { configurable: !0, set: e }), ut(r, t);
                    })[G]),
                    "toString",
                    function () {
                        return V(this).tag;
                    },
                ),
                P(H, "withoutSetter", function (t) {
                    return ut(C(t), t);
                }),
                (A.f = vt),
                (j.f = ft),
                (T.f = st),
                (O.f = dt),
                (S.f = w.f = lt),
                (E.f = ht),
                (D.f = function (t) {
                    return ut(k(t), t);
                }),
                u &&
                    (x(Q, "description", {
                        configurable: !0,
                        get: function () {
                            return V(this).description;
                        },
                    }),
                    c || P(X, "propertyIsEnumerable", vt, { unsafe: !0 }))),
                n({ global: !0, constructor: !0, wrap: !0, forced: !f, sham: !f }, { Symbol: H }),
                $(b(ot), function (t) {
                    I(t);
                }),
                n(
                    { target: B, stat: !0, forced: !f },
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
                _(),
                U(H, B),
                (R[L] = !0);
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
                    w = a("".replace),
                    E = a("".slice);
                v(h, "description", {
                    configurable: !0,
                    get: function () {
                        var t = m(this);
                        if (c(p, t)) return "";
                        var r = b(t),
                            e = y ? E(r, 7, -1) : w(r, S, "$1");
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.InlinePlayer~bundle.LiveEvent~loader.AudioOnlyVideoPlayer~loader.JetfuelFrame~loader-6ff35035.6113937a.js.map
