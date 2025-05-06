(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, a, i) => {
            !(function (t, a, i) {
                "use strict";
                var n,
                    e,
                    s,
                    _,
                    h = a.$_$.oe,
                    r = a.$_$.md,
                    u = a.$_$.n6,
                    o = a.$_$.si,
                    f = a.$_$.ld,
                    $ = a.$_$.g,
                    c = a.$_$.ej,
                    z = a.$_$.y2,
                    w = a.$_$.tc,
                    y = a.$_$.uf,
                    v = i.$_$.g,
                    l = a.$_$.yi,
                    x = a.$_$.re,
                    d = a.$_$.pe,
                    p = a.$_$.yf,
                    q = a.$_$.qe,
                    m = (a.$_$.u5, a.$_$.bd),
                    b = i.$_$.c,
                    E = i.$_$.f,
                    g = a.$_$.pd,
                    N = a.$_$.rd,
                    T = i.$_$.h,
                    I = i.$_$.a;
                function O() {}
                function R(t, a, i) {
                    o.call(this, t, a), (this.max_1 = i);
                }
                function A() {}
                function M(t, a) {
                    z(a, this), w(this, M), (this.nax_1 = t);
                }
                function S(t) {
                    this.wax_1 = t;
                }
                function C(t, a, i) {
                    for (var n = i, e = 0; n > 0; ) {
                        var s = t.wax_1.yu(a, e, n);
                        if (-1 === s) throw new v("Expected " + i + " bytes; got " + e);
                        (n = (n - s) | 0), (e = (e + s) | 0);
                    }
                }
                function U() {
                    (s = this), (this.uay_1 = -65536), (this.vay_1 = -2147418112), (this.way_1 = new G(""));
                }
                function P() {
                    return null == s && new U(), s;
                }
                function k(t, a, i) {
                    P(), (a = a === $ ? new l(-1, -1) : a), (i = i === $ ? new l(-1, -1) : i), S.call(this, t), (this.yay_1 = a), (this.zay_1 = i), (this.aaz_1 = new Int8Array(8)), (this.baz_1 = !1), (this.caz_1 = !1);
                }
                function D(t, a, i) {
                    (this.faz_1 = t), (this.gaz_1 = a), (this.haz_1 = i);
                }
                function L(t, a) {
                    (this.iaz_1 = t), (this.jaz_1 = a);
                }
                function j(t, a, i) {
                    (this.kaz_1 = t), (this.laz_1 = a), (this.maz_1 = i);
                }
                function B(t, a) {
                    (this.naz_1 = t), (this.oaz_1 = a);
                }
                function G(t) {
                    this.paz_1 = t;
                }
                function K(t) {
                    (t = t === $ ? new E() : t), (this.qaz_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    I(t, this), w(this, F);
                }
                r(O),
                    f(R, "Kind", $, o),
                    r(A),
                    f(M, "ThriftException", $, c),
                    f(S, "BaseProtocol"),
                    r(U),
                    f(k, "BinaryProtocol", $, S),
                    f(D, "FieldMetadata"),
                    f(L, "ListMetadata"),
                    f(j, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    g(V, "Transport"),
                    f(K, "BufferTransport", K, $, [V]),
                    N(W, "ProtocolUtil"),
                    f(F, "ProtocolException", $, T),
                    (h(M).oax = function (t) {
                        t.pax("TApplicationException");
                        var a = this.message;
                        null == a || (t.qax("message", 1, 11), t.rax(a), t.sax()), t.qax("type", 2, 8), t.tax(this.nax_1.max_1), t.sax(), t.uax(), t.vax();
                    }),
                    (h(S).x4 = function () {
                        this.wax_1.x4();
                    }),
                    (h(k).pax = function (t) {}),
                    (h(k).vax = function () {}),
                    (h(k).qax = function (t, a, i) {
                        this.e3b(i), this.daz(x(a));
                    }),
                    (h(k).sax = function () {}),
                    (h(k).uax = function () {
                        this.e3b(0);
                    }),
                    (h(k).xax = function (t, a) {
                        this.e3b(t), this.tax(a);
                    }),
                    (h(k).yax = function () {}),
                    (h(k).zax = function (t) {
                        this.e3b(t ? 1 : 0);
                    }),
                    (h(k).e3b = function (t) {
                        (this.aaz_1[0] = t), this.wax_1.a3b(this.aaz_1, 0, 1);
                    }),
                    (h(k).daz = function (t) {
                        (this.aaz_1[0] = d((t >> 8) & 255)), (this.aaz_1[1] = d(255 & t)), this.wax_1.a3b(this.aaz_1, 0, 2);
                    }),
                    (h(k).tax = function (t) {
                        (this.aaz_1[0] = d((t >> 24) & 255)), (this.aaz_1[1] = d((t >> 16) & 255)), (this.aaz_1[2] = d((t >> 8) & 255)), (this.aaz_1[3] = d(255 & t)), this.wax_1.a3b(this.aaz_1, 0, 4);
                    }),
                    (h(k).aay = function (t) {
                        (this.aaz_1[0] = t.q3(56).s3(new l(255, 0)).v3()), (this.aaz_1[1] = t.q3(48).s3(new l(255, 0)).v3()), (this.aaz_1[2] = t.q3(40).s3(new l(255, 0)).v3()), (this.aaz_1[3] = t.q3(32).s3(new l(255, 0)).v3()), (this.aaz_1[4] = t.q3(24).s3(new l(255, 0)).v3()), (this.aaz_1[5] = t.q3(16).s3(new l(255, 0)).v3()), (this.aaz_1[6] = t.q3(8).s3(new l(255, 0)).v3()), (this.aaz_1[7] = t.s3(new l(255, 0)).v3()), this.wax_1.a3b(this.aaz_1, 0, 8);
                    }),
                    (h(k).rax = function (t) {
                        var a = p(t);
                        this.tax(a.length), this.wax_1.eaz(a);
                    }),
                    (h(k).bay = function (t) {
                        this.tax(t.s()), this.wax_1.eaz(t.ut());
                    }),
                    (h(k).cay = function () {
                        return P().way_1;
                    }),
                    (h(k).eay = function () {}),
                    (h(k).fay = function () {
                        var t = this.mu();
                        return new D("", t, 0 === t ? 0 : this.oay());
                    }),
                    (h(k).gay = function () {}),
                    (h(k).hay = function () {
                        var t = this.mu(),
                            a = this.mu(),
                            i = this.pay();
                        if (!this.zay_1.equals(new l(-1, -1)) && q(i).d1(this.zay_1) > 0) throw new F("Container size limit exceeded");
                        return new j(t, a, i);
                    }),
                    (h(k).iay = function () {}),
                    (h(k).jay = function () {
                        var t = this.mu(),
                            a = this.pay();
                        if (!this.zay_1.equals(new l(-1, -1)) && q(a).d1(this.zay_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, a);
                    }),
                    (h(k).kay = function () {}),
                    (h(k).lay = function () {
                        var t = this.mu(),
                            a = this.pay();
                        if (!this.zay_1.equals(new l(-1, -1)) && q(a).d1(this.zay_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, a);
                    }),
                    (h(k).may = function () {}),
                    (h(k).nay = function () {
                        return 1 === this.mu();
                    }),
                    (h(k).mu = function () {
                        return C(this, this.aaz_1, 1), this.aaz_1[0];
                    }),
                    (h(k).oay = function () {
                        return C(this, this.aaz_1, 2), x(((255 & this.aaz_1[0]) << 8) | (255 & this.aaz_1[1]));
                    }),
                    (h(k).pay = function () {
                        return C(this, this.aaz_1, 4), ((255 & this.aaz_1[0]) << 24) | ((255 & this.aaz_1[1]) << 16) | ((255 & this.aaz_1[2]) << 8) | (255 & this.aaz_1[3]);
                    }),
                    (h(k).qay = function () {
                        return (
                            C(this, this.aaz_1, 8),
                            q(this.aaz_1[0])
                                .s3(new l(255, 0))
                                .p3(56)
                                .t3(q(this.aaz_1[1]).s3(new l(255, 0)).p3(48))
                                .t3(q(this.aaz_1[2]).s3(new l(255, 0)).p3(40))
                                .t3(q(this.aaz_1[3]).s3(new l(255, 0)).p3(32))
                                .t3(q(this.aaz_1[4]).s3(new l(255, 0)).p3(24))
                                .t3(q(this.aaz_1[5]).s3(new l(255, 0)).p3(16))
                                .t3(q(this.aaz_1[6]).s3(new l(255, 0)).p3(8))
                                .t3(q(this.aaz_1[7]).s3(new l(255, 0)))
                        );
                    }),
                    (h(k).ray = function () {
                        var t = this.qay();
                        return m(t);
                    }),
                    (h(k).say = function () {
                        var t,
                            a,
                            i,
                            n = this.pay();
                        if (!this.yay_1.equals(new l(-1, -1)) && q(n).d1(this.yay_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (a = n), (i = new Int8Array(a)), C(t, i, a), y(i);
                    }),
                    (h(k).tay = function () {
                        var t = this.pay();
                        if (!this.yay_1.equals(new l(-1, -1)) && q(t).d1(this.yay_1) > 0) throw new F("Binary size limit exceeded");
                        var a = new Int8Array(t);
                        return C(this, a, a.length), b().lt(a);
                    }),
                    (h(K).yu = function (t, a, i) {
                        return this.qaz_1.yu(t, a, i);
                    }),
                    (h(K).a3b = function (t, a, i) {
                        this.qaz_1.dt(t, a, i);
                    }),
                    (h(K).x4 = function () {
                        return this.qaz_1.x4();
                    }),
                    (h(W).raz = function (t, a) {
                        if (2 === a) t.nay();
                        else if (3 === a) t.mu();
                        else if (6 === a) t.oay();
                        else if (8 === a) t.pay();
                        else if (10 === a) t.qay();
                        else if (4 === a) t.ray();
                        else if (11 === a) t.say();
                        else if (12 === a) {
                            t.cay();
                            t: for (;;) {
                                var i = t.fay();
                                if (0 === i.gaz_1) break t;
                                this.raz(t, i.gaz_1), t.gay();
                            }
                            t.eay();
                        } else if (15 === a) {
                            var n = t.jay(),
                                e = 0,
                                s = n.jaz_1;
                            if (e < s)
                                do {
                                    (e = (e + 1) | 0), this.raz(t, n.iaz_1);
                                } while (e < s);
                            t.kay();
                        } else if (14 === a) {
                            var _ = t.lay(),
                                h = 0,
                                r = _.oaz_1;
                            if (h < r)
                                do {
                                    (h = (h + 1) | 0), this.raz(t, _.naz_1);
                                } while (h < r);
                            t.may();
                        } else {
                            if (13 !== a) throw new F("Unrecognized TType value: " + a);
                            var u = t.hay(),
                                o = 0,
                                f = u.maz_1;
                            if (o < f)
                                do {
                                    (o = (o + 1) | 0), this.raz(t, u.kaz_1), this.raz(t, u.laz_1);
                                } while (o < f);
                            t.iay();
                        }
                    }),
                    (h(K).eaz = function (t) {
                        this.a3b(t, 0, t.length);
                    }),
                    new O(),
                    new A(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = k),
                    (t.$_$.b = K),
                    (t.$_$.c = M),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (e) return u;
                                (e = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (n = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            n
                        );
                    }),
                    (t.$_$.e = _);
            })(t.exports, i(519039), i(222818));
        },
        937455: (t, a, i) => {
            !(function (t, a) {
                "use strict";
                var i,
                    n,
                    e,
                    s = a.$_$.jf,
                    _ = a.$_$.w9,
                    h = a.$_$.o3,
                    r = a.$_$.t3,
                    u = a.$_$.la,
                    o = a.$_$.a6,
                    f = a.$_$.oe,
                    $ = a.$_$.md,
                    c = a.$_$.se,
                    z = a.$_$.h2,
                    w = (a.$_$.n6, a.$_$.vc),
                    y = a.$_$.qf,
                    v = a.$_$.c8,
                    l = a.$_$.d8,
                    x = a.$_$.zc,
                    d = a.$_$.fj,
                    p = a.$_$.oi,
                    q = a.$_$.ld,
                    m = a.$_$.g,
                    b = a.$_$.pe;
                function E() {
                    return n || ((n = !0), _([s(0, 8), s(9, 13), s(14, 18), s(19, 23), s(24, 36)]), _([8, 13, 18, 23]), (i = u(r(h(48), h(57)), r(h(97), h(102))))), i;
                }
                function g() {
                    (e = this), (this.uv_1 = _([s(0, 4), s(4, 6), s(6, 8), s(8, 10), s(10, 16)]));
                }
                function N() {
                    return null == e && new g(), e;
                }
                function T(t) {
                    if ((N(), (this.vv_1 = t), 16 !== this.vv_1.length)) {
                        var a = "Invalid UUID bytes. Expected 16 bytes; found " + this.vv_1.length;
                        throw z(c(a));
                    }
                }
                $(g),
                    q(T, "Uuid", m, m, [p]),
                    (f(T).toString = function () {
                        for (var t = w(36), a = 0, i = N().uv_1.p(); i.q(); ) {
                            var n = i.r(),
                                e = n.e1_1,
                                s = n.f1_1;
                            if (e <= s)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var r = this.vv_1[_],
                                        u = (r >> 4) & 15,
                                        o = 15 & r,
                                        f = a;
                                    (a = (f + 1) | 0), (t[f] = E().t(u).p1_1);
                                    var $ = a;
                                    (a = ($ + 1) | 0), (t[$] = E().t(o).p1_1);
                                } while (_ !== s);
                            if (a < 36) {
                                var c = a;
                                (a = (c + 1) | 0), (t[c] = h(45));
                            }
                        }
                        return y(t);
                    }),
                    (f(T).equals = function (t) {
                        return t instanceof T && v(this.vv_1, t.vv_1);
                    }),
                    (f(T).hashCode = function () {
                        return l(this.vv_1);
                    }),
                    (f(T).wv = function (t) {
                        var a = 0;
                        if (a < 16)
                            do {
                                var i = a;
                                a = (a + 1) | 0;
                                var n = x(this.vv_1[i], t.vv_1[i]);
                                if (0 !== n) return n;
                            } while (a < 16);
                        return 0;
                    }),
                    (f(T).d = function (t) {
                        return this.wv(t instanceof T ? t : d());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().hl(16);
                        return (t[6] = b((15 & t[6]) | 64)), (t[8] = b((63 & t[8]) | 128)), new T(t);
                    });
            })(t.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.73362d1a.js.map
