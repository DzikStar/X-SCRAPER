(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var a,
                    e,
                    s,
                    _,
                    h = i.$_$.oe,
                    u = i.$_$.md,
                    r = i.$_$.n6,
                    o = i.$_$.si,
                    f = i.$_$.ld,
                    w = i.$_$.g,
                    $ = i.$_$.ej,
                    c = i.$_$.y2,
                    z = i.$_$.tc,
                    v = i.$_$.uf,
                    l = n.$_$.g,
                    b = i.$_$.yi,
                    y = i.$_$.re,
                    d = i.$_$.pe,
                    p = i.$_$.yf,
                    m = i.$_$.qe,
                    q = (i.$_$.u5, i.$_$.bd),
                    E = n.$_$.c,
                    g = n.$_$.f,
                    x = i.$_$.pd,
                    N = i.$_$.rd,
                    T = n.$_$.h,
                    I = n.$_$.a;
                function O() {}
                function R(t, i, n) {
                    o.call(this, t, i), (this.jay_1 = n);
                }
                function k() {}
                function A(t, i) {
                    c(i, this), z(this, A), (this.kay_1 = t);
                }
                function M(t) {
                    this.tay_1 = t;
                }
                function S(t, i, n) {
                    for (var a = n, e = 0; a > 0; ) {
                        var s = t.tay_1.yu(i, e, a);
                        if (-1 === s) throw new l("Expected " + n + " bytes; got " + e);
                        (a = (a - s) | 0), (e = (e + s) | 0);
                    }
                }
                function C() {
                    (s = this), (this.qaz_1 = -65536), (this.raz_1 = -2147418112), (this.saz_1 = new G(""));
                }
                function U() {
                    return null == s && new C(), s;
                }
                function P(t, i, n) {
                    U(), (i = i === w ? new b(-1, -1) : i), (n = n === w ? new b(-1, -1) : n), M.call(this, t), (this.uaz_1 = i), (this.vaz_1 = n), (this.waz_1 = new Int8Array(8)), (this.xaz_1 = !1), (this.yaz_1 = !1);
                }
                function j(t, i, n) {
                    (this.bb0_1 = t), (this.cb0_1 = i), (this.db0_1 = n);
                }
                function D(t, i) {
                    (this.eb0_1 = t), (this.fb0_1 = i);
                }
                function L(t, i, n) {
                    (this.gb0_1 = t), (this.hb0_1 = i), (this.ib0_1 = n);
                }
                function B(t, i) {
                    (this.jb0_1 = t), (this.kb0_1 = i);
                }
                function G(t) {
                    this.lb0_1 = t;
                }
                function K(t) {
                    (t = t === w ? new g() : t), (this.mb0_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    I(t, this), z(this, F);
                }
                u(O),
                    f(R, "Kind", w, o),
                    u(k),
                    f(A, "ThriftException", w, $),
                    f(M, "BaseProtocol"),
                    u(C),
                    f(P, "BinaryProtocol", w, M),
                    f(j, "FieldMetadata"),
                    f(D, "ListMetadata"),
                    f(L, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    x(V, "Transport"),
                    f(K, "BufferTransport", K, w, [V]),
                    N(W, "ProtocolUtil"),
                    f(F, "ProtocolException", w, T),
                    (h(A).lay = function (t) {
                        t.may("TApplicationException");
                        var i = this.message;
                        null == i || (t.nay("message", 1, 11), t.oay(i), t.pay()), t.nay("type", 2, 8), t.qay(this.kay_1.jay_1), t.pay(), t.ray(), t.say();
                    }),
                    (h(M).x4 = function () {
                        this.tay_1.x4();
                    }),
                    (h(P).may = function (t) {}),
                    (h(P).say = function () {}),
                    (h(P).nay = function (t, i, n) {
                        this.f3b(n), this.zaz(y(i));
                    }),
                    (h(P).pay = function () {}),
                    (h(P).ray = function () {
                        this.f3b(0);
                    }),
                    (h(P).uay = function (t, i) {
                        this.f3b(t), this.qay(i);
                    }),
                    (h(P).vay = function () {}),
                    (h(P).way = function (t) {
                        this.f3b(t ? 1 : 0);
                    }),
                    (h(P).f3b = function (t) {
                        (this.waz_1[0] = t), this.tay_1.b3b(this.waz_1, 0, 1);
                    }),
                    (h(P).zaz = function (t) {
                        (this.waz_1[0] = d((t >> 8) & 255)), (this.waz_1[1] = d(255 & t)), this.tay_1.b3b(this.waz_1, 0, 2);
                    }),
                    (h(P).qay = function (t) {
                        (this.waz_1[0] = d((t >> 24) & 255)), (this.waz_1[1] = d((t >> 16) & 255)), (this.waz_1[2] = d((t >> 8) & 255)), (this.waz_1[3] = d(255 & t)), this.tay_1.b3b(this.waz_1, 0, 4);
                    }),
                    (h(P).xay = function (t) {
                        (this.waz_1[0] = t.q3(56).s3(new b(255, 0)).v3()), (this.waz_1[1] = t.q3(48).s3(new b(255, 0)).v3()), (this.waz_1[2] = t.q3(40).s3(new b(255, 0)).v3()), (this.waz_1[3] = t.q3(32).s3(new b(255, 0)).v3()), (this.waz_1[4] = t.q3(24).s3(new b(255, 0)).v3()), (this.waz_1[5] = t.q3(16).s3(new b(255, 0)).v3()), (this.waz_1[6] = t.q3(8).s3(new b(255, 0)).v3()), (this.waz_1[7] = t.s3(new b(255, 0)).v3()), this.tay_1.b3b(this.waz_1, 0, 8);
                    }),
                    (h(P).oay = function (t) {
                        var i = p(t);
                        this.qay(i.length), this.tay_1.ab0(i);
                    }),
                    (h(P).yay = function (t) {
                        this.qay(t.s()), this.tay_1.ab0(t.ut());
                    }),
                    (h(P).zay = function () {
                        return U().saz_1;
                    }),
                    (h(P).aaz = function () {}),
                    (h(P).baz = function () {
                        var t = this.mu();
                        return new j("", t, 0 === t ? 0 : this.kaz());
                    }),
                    (h(P).caz = function () {}),
                    (h(P).daz = function () {
                        var t = this.mu(),
                            i = this.mu(),
                            n = this.laz();
                        if (!this.vaz_1.equals(new b(-1, -1)) && m(n).d1(this.vaz_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i, n);
                    }),
                    (h(P).eaz = function () {}),
                    (h(P).faz = function () {
                        var t = this.mu(),
                            i = this.laz();
                        if (!this.vaz_1.equals(new b(-1, -1)) && m(i).d1(this.vaz_1) > 0) throw new F("Container size limit exceeded");
                        return new D(t, i);
                    }),
                    (h(P).gaz = function () {}),
                    (h(P).haz = function () {
                        var t = this.mu(),
                            i = this.laz();
                        if (!this.vaz_1.equals(new b(-1, -1)) && m(i).d1(this.vaz_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (h(P).iaz = function () {}),
                    (h(P).jaz = function () {
                        return 1 === this.mu();
                    }),
                    (h(P).mu = function () {
                        return S(this, this.waz_1, 1), this.waz_1[0];
                    }),
                    (h(P).kaz = function () {
                        return S(this, this.waz_1, 2), y(((255 & this.waz_1[0]) << 8) | (255 & this.waz_1[1]));
                    }),
                    (h(P).laz = function () {
                        return S(this, this.waz_1, 4), ((255 & this.waz_1[0]) << 24) | ((255 & this.waz_1[1]) << 16) | ((255 & this.waz_1[2]) << 8) | (255 & this.waz_1[3]);
                    }),
                    (h(P).maz = function () {
                        return (
                            S(this, this.waz_1, 8),
                            m(this.waz_1[0])
                                .s3(new b(255, 0))
                                .p3(56)
                                .t3(m(this.waz_1[1]).s3(new b(255, 0)).p3(48))
                                .t3(m(this.waz_1[2]).s3(new b(255, 0)).p3(40))
                                .t3(m(this.waz_1[3]).s3(new b(255, 0)).p3(32))
                                .t3(m(this.waz_1[4]).s3(new b(255, 0)).p3(24))
                                .t3(m(this.waz_1[5]).s3(new b(255, 0)).p3(16))
                                .t3(m(this.waz_1[6]).s3(new b(255, 0)).p3(8))
                                .t3(m(this.waz_1[7]).s3(new b(255, 0)))
                        );
                    }),
                    (h(P).naz = function () {
                        var t = this.maz();
                        return q(t);
                    }),
                    (h(P).oaz = function () {
                        var t,
                            i,
                            n,
                            a = this.laz();
                        if (!this.uaz_1.equals(new b(-1, -1)) && m(a).d1(this.uaz_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = a), (n = new Int8Array(i)), S(t, n, i), v(n);
                    }),
                    (h(P).paz = function () {
                        var t = this.laz();
                        if (!this.uaz_1.equals(new b(-1, -1)) && m(t).d1(this.uaz_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return S(this, i, i.length), E().lt(i);
                    }),
                    (h(K).yu = function (t, i, n) {
                        return this.mb0_1.yu(t, i, n);
                    }),
                    (h(K).b3b = function (t, i, n) {
                        this.mb0_1.dt(t, i, n);
                    }),
                    (h(K).x4 = function () {
                        return this.mb0_1.x4();
                    }),
                    (h(W).nb0 = function (t, i) {
                        if (2 === i) t.jaz();
                        else if (3 === i) t.mu();
                        else if (6 === i) t.kaz();
                        else if (8 === i) t.laz();
                        else if (10 === i) t.maz();
                        else if (4 === i) t.naz();
                        else if (11 === i) t.oaz();
                        else if (12 === i) {
                            t.zay();
                            t: for (;;) {
                                var n = t.baz();
                                if (0 === n.cb0_1) break t;
                                this.nb0(t, n.cb0_1), t.caz();
                            }
                            t.aaz();
                        } else if (15 === i) {
                            var a = t.faz(),
                                e = 0,
                                s = a.fb0_1;
                            if (e < s)
                                do {
                                    (e = (e + 1) | 0), this.nb0(t, a.eb0_1);
                                } while (e < s);
                            t.gaz();
                        } else if (14 === i) {
                            var _ = t.haz(),
                                h = 0,
                                u = _.kb0_1;
                            if (h < u)
                                do {
                                    (h = (h + 1) | 0), this.nb0(t, _.jb0_1);
                                } while (h < u);
                            t.iaz();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var r = t.daz(),
                                o = 0,
                                f = r.ib0_1;
                            if (o < f)
                                do {
                                    (o = (o + 1) | 0), this.nb0(t, r.gb0_1), this.nb0(t, r.hb0_1);
                                } while (o < f);
                            t.eaz();
                        }
                    }),
                    (h(K).ab0 = function (t) {
                        this.b3b(t, 0, t.length);
                    }),
                    new O(),
                    new k(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = P),
                    (t.$_$.b = K),
                    (t.$_$.c = A),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (e) return r;
                                (e = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (a = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            a
                        );
                    }),
                    (t.$_$.e = _);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    a,
                    e,
                    s = i.$_$.jf,
                    _ = i.$_$.w9,
                    h = i.$_$.o3,
                    u = i.$_$.t3,
                    r = i.$_$.la,
                    o = i.$_$.a6,
                    f = i.$_$.oe,
                    w = i.$_$.md,
                    $ = i.$_$.se,
                    c = i.$_$.h2,
                    z = (i.$_$.n6, i.$_$.vc),
                    v = i.$_$.qf,
                    l = i.$_$.c8,
                    b = i.$_$.d8,
                    y = i.$_$.zc,
                    d = i.$_$.fj,
                    p = i.$_$.oi,
                    m = i.$_$.ld,
                    q = i.$_$.g,
                    E = i.$_$.pe;
                function g() {
                    return a || ((a = !0), _([s(0, 8), s(9, 13), s(14, 18), s(19, 23), s(24, 36)]), _([8, 13, 18, 23]), (n = r(u(h(48), h(57)), u(h(97), h(102))))), n;
                }
                function x() {
                    (e = this), (this.uv_1 = _([s(0, 4), s(4, 6), s(6, 8), s(8, 10), s(10, 16)]));
                }
                function N() {
                    return null == e && new x(), e;
                }
                function T(t) {
                    if ((N(), (this.vv_1 = t), 16 !== this.vv_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.vv_1.length;
                        throw c($(i));
                    }
                }
                w(x),
                    m(T, "Uuid", q, q, [p]),
                    (f(T).toString = function () {
                        for (var t = z(36), i = 0, n = N().uv_1.p(); n.q(); ) {
                            var a = n.r(),
                                e = a.e1_1,
                                s = a.f1_1;
                            if (e <= s)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var u = this.vv_1[_],
                                        r = (u >> 4) & 15,
                                        o = 15 & u,
                                        f = i;
                                    (i = (f + 1) | 0), (t[f] = g().t(r).p1_1);
                                    var w = i;
                                    (i = (w + 1) | 0), (t[w] = g().t(o).p1_1);
                                } while (_ !== s);
                            if (i < 36) {
                                var $ = i;
                                (i = ($ + 1) | 0), (t[$] = h(45));
                            }
                        }
                        return v(t);
                    }),
                    (f(T).equals = function (t) {
                        return t instanceof T && l(this.vv_1, t.vv_1);
                    }),
                    (f(T).hashCode = function () {
                        return b(this.vv_1);
                    }),
                    (f(T).wv = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var a = y(this.vv_1[n], t.vv_1[n]);
                                if (0 !== a) return a;
                            } while (i < 16);
                        return 0;
                    }),
                    (f(T).d = function (t) {
                        return this.wv(t instanceof T ? t : d());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().hl(16);
                        return (t[6] = E((15 & t[6]) | 64)), (t[8] = E((63 & t[8]) | 128)), new T(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.58e34aba.js.map
