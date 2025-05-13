(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var s,
                    a,
                    e,
                    _,
                    h = i.$_$.oe,
                    u = i.$_$.md,
                    r = i.$_$.n6,
                    f = i.$_$.si,
                    o = i.$_$.ld,
                    $ = i.$_$.g,
                    c = i.$_$.ej,
                    w = i.$_$.y2,
                    p = i.$_$.tc,
                    v = i.$_$.uf,
                    l = n.$_$.g,
                    d = i.$_$.yi,
                    b = i.$_$.re,
                    m = i.$_$.pe,
                    g = i.$_$.yf,
                    E = i.$_$.qe,
                    x = (i.$_$.u5, i.$_$.bd),
                    y = n.$_$.c,
                    q = n.$_$.f,
                    N = i.$_$.pd,
                    T = i.$_$.rd,
                    I = n.$_$.h,
                    O = n.$_$.a;
                function R() {}
                function A(t, i, n) {
                    f.call(this, t, i), (this.cas_1 = n);
                }
                function M() {}
                function S(t, i) {
                    w(i, this), p(this, S), (this.das_1 = t);
                }
                function z(t) {
                    this.mas_1 = t;
                }
                function C(t, i, n) {
                    for (var s = n, a = 0; s > 0; ) {
                        var e = t.mas_1.yu(i, a, s);
                        if (-1 === e) throw new l("Expected " + n + " bytes; got " + a);
                        (s = (s - e) | 0), (a = (a + e) | 0);
                    }
                }
                function U() {
                    (e = this), (this.jat_1 = -65536), (this.kat_1 = -2147418112), (this.lat_1 = new G(""));
                }
                function P() {
                    return null == e && new U(), e;
                }
                function j(t, i, n) {
                    P(), (i = i === $ ? new d(-1, -1) : i), (n = n === $ ? new d(-1, -1) : n), z.call(this, t), (this.nat_1 = i), (this.oat_1 = n), (this.pat_1 = new Int8Array(8)), (this.qat_1 = !1), (this.rat_1 = !1);
                }
                function D(t, i, n) {
                    (this.uat_1 = t), (this.vat_1 = i), (this.wat_1 = n);
                }
                function L(t, i) {
                    (this.xat_1 = t), (this.yat_1 = i);
                }
                function k(t, i, n) {
                    (this.zat_1 = t), (this.aau_1 = i), (this.bau_1 = n);
                }
                function B(t, i) {
                    (this.cau_1 = t), (this.dau_1 = i);
                }
                function G(t) {
                    this.eau_1 = t;
                }
                function K(t) {
                    (t = t === $ ? new q() : t), (this.fau_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    O(t, this), p(this, F);
                }
                u(R),
                    o(A, "Kind", $, f),
                    u(M),
                    o(S, "ThriftException", $, c),
                    o(z, "BaseProtocol"),
                    u(U),
                    o(j, "BinaryProtocol", $, z),
                    o(D, "FieldMetadata"),
                    o(L, "ListMetadata"),
                    o(k, "MapMetadata"),
                    o(B, "SetMetadata"),
                    o(G, "StructMetadata"),
                    N(V, "Transport"),
                    o(K, "BufferTransport", K, $, [V]),
                    T(W, "ProtocolUtil"),
                    o(F, "ProtocolException", $, I),
                    (h(S).eas = function (t) {
                        t.fas("TApplicationException");
                        var i = this.message;
                        null == i || (t.gas("message", 1, 11), t.has(i), t.ias()), t.gas("type", 2, 8), t.jas(this.das_1.cas_1), t.ias(), t.kas(), t.las();
                    }),
                    (h(z).x4 = function () {
                        this.mas_1.x4();
                    }),
                    (h(j).fas = function (t) {}),
                    (h(j).las = function () {}),
                    (h(j).gas = function (t, i, n) {
                        this.f3b(n), this.sat(b(i));
                    }),
                    (h(j).ias = function () {}),
                    (h(j).kas = function () {
                        this.f3b(0);
                    }),
                    (h(j).nas = function (t, i) {
                        this.f3b(t), this.jas(i);
                    }),
                    (h(j).oas = function () {}),
                    (h(j).pas = function (t) {
                        this.f3b(t ? 1 : 0);
                    }),
                    (h(j).f3b = function (t) {
                        (this.pat_1[0] = t), this.mas_1.b3b(this.pat_1, 0, 1);
                    }),
                    (h(j).sat = function (t) {
                        (this.pat_1[0] = m((t >> 8) & 255)), (this.pat_1[1] = m(255 & t)), this.mas_1.b3b(this.pat_1, 0, 2);
                    }),
                    (h(j).jas = function (t) {
                        (this.pat_1[0] = m((t >> 24) & 255)), (this.pat_1[1] = m((t >> 16) & 255)), (this.pat_1[2] = m((t >> 8) & 255)), (this.pat_1[3] = m(255 & t)), this.mas_1.b3b(this.pat_1, 0, 4);
                    }),
                    (h(j).qas = function (t) {
                        (this.pat_1[0] = t.q3(56).s3(new d(255, 0)).v3()), (this.pat_1[1] = t.q3(48).s3(new d(255, 0)).v3()), (this.pat_1[2] = t.q3(40).s3(new d(255, 0)).v3()), (this.pat_1[3] = t.q3(32).s3(new d(255, 0)).v3()), (this.pat_1[4] = t.q3(24).s3(new d(255, 0)).v3()), (this.pat_1[5] = t.q3(16).s3(new d(255, 0)).v3()), (this.pat_1[6] = t.q3(8).s3(new d(255, 0)).v3()), (this.pat_1[7] = t.s3(new d(255, 0)).v3()), this.mas_1.b3b(this.pat_1, 0, 8);
                    }),
                    (h(j).has = function (t) {
                        var i = g(t);
                        this.jas(i.length), this.mas_1.tat(i);
                    }),
                    (h(j).ras = function (t) {
                        this.jas(t.s()), this.mas_1.tat(t.ut());
                    }),
                    (h(j).sas = function () {
                        return P().lat_1;
                    }),
                    (h(j).tas = function () {}),
                    (h(j).uas = function () {
                        var t = this.mu();
                        return new D("", t, 0 === t ? 0 : this.dat());
                    }),
                    (h(j).vas = function () {}),
                    (h(j).was = function () {
                        var t = this.mu(),
                            i = this.mu(),
                            n = this.eat();
                        if (!this.oat_1.equals(new d(-1, -1)) && E(n).d1(this.oat_1) > 0) throw new F("Container size limit exceeded");
                        return new k(t, i, n);
                    }),
                    (h(j).xas = function () {}),
                    (h(j).yas = function () {
                        var t = this.mu(),
                            i = this.eat();
                        if (!this.oat_1.equals(new d(-1, -1)) && E(i).d1(this.oat_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i);
                    }),
                    (h(j).zas = function () {}),
                    (h(j).aat = function () {
                        var t = this.mu(),
                            i = this.eat();
                        if (!this.oat_1.equals(new d(-1, -1)) && E(i).d1(this.oat_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (h(j).bat = function () {}),
                    (h(j).cat = function () {
                        return 1 === this.mu();
                    }),
                    (h(j).mu = function () {
                        return C(this, this.pat_1, 1), this.pat_1[0];
                    }),
                    (h(j).dat = function () {
                        return C(this, this.pat_1, 2), b(((255 & this.pat_1[0]) << 8) | (255 & this.pat_1[1]));
                    }),
                    (h(j).eat = function () {
                        return C(this, this.pat_1, 4), ((255 & this.pat_1[0]) << 24) | ((255 & this.pat_1[1]) << 16) | ((255 & this.pat_1[2]) << 8) | (255 & this.pat_1[3]);
                    }),
                    (h(j).fat = function () {
                        return (
                            C(this, this.pat_1, 8),
                            E(this.pat_1[0])
                                .s3(new d(255, 0))
                                .p3(56)
                                .t3(E(this.pat_1[1]).s3(new d(255, 0)).p3(48))
                                .t3(E(this.pat_1[2]).s3(new d(255, 0)).p3(40))
                                .t3(E(this.pat_1[3]).s3(new d(255, 0)).p3(32))
                                .t3(E(this.pat_1[4]).s3(new d(255, 0)).p3(24))
                                .t3(E(this.pat_1[5]).s3(new d(255, 0)).p3(16))
                                .t3(E(this.pat_1[6]).s3(new d(255, 0)).p3(8))
                                .t3(E(this.pat_1[7]).s3(new d(255, 0)))
                        );
                    }),
                    (h(j).gat = function () {
                        var t = this.fat();
                        return x(t);
                    }),
                    (h(j).hat = function () {
                        var t,
                            i,
                            n,
                            s = this.eat();
                        if (!this.nat_1.equals(new d(-1, -1)) && E(s).d1(this.nat_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = s), (n = new Int8Array(i)), C(t, n, i), v(n);
                    }),
                    (h(j).iat = function () {
                        var t = this.eat();
                        if (!this.nat_1.equals(new d(-1, -1)) && E(t).d1(this.nat_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return C(this, i, i.length), y().lt(i);
                    }),
                    (h(K).yu = function (t, i, n) {
                        return this.fau_1.yu(t, i, n);
                    }),
                    (h(K).b3b = function (t, i, n) {
                        this.fau_1.dt(t, i, n);
                    }),
                    (h(K).x4 = function () {
                        return this.fau_1.x4();
                    }),
                    (h(W).gau = function (t, i) {
                        if (2 === i) t.cat();
                        else if (3 === i) t.mu();
                        else if (6 === i) t.dat();
                        else if (8 === i) t.eat();
                        else if (10 === i) t.fat();
                        else if (4 === i) t.gat();
                        else if (11 === i) t.hat();
                        else if (12 === i) {
                            t.sas();
                            t: for (;;) {
                                var n = t.uas();
                                if (0 === n.vat_1) break t;
                                this.gau(t, n.vat_1), t.vas();
                            }
                            t.tas();
                        } else if (15 === i) {
                            var s = t.yas(),
                                a = 0,
                                e = s.yat_1;
                            if (a < e)
                                do {
                                    (a = (a + 1) | 0), this.gau(t, s.xat_1);
                                } while (a < e);
                            t.zas();
                        } else if (14 === i) {
                            var _ = t.aat(),
                                h = 0,
                                u = _.dau_1;
                            if (h < u)
                                do {
                                    (h = (h + 1) | 0), this.gau(t, _.cau_1);
                                } while (h < u);
                            t.bat();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var r = t.was(),
                                f = 0,
                                o = r.bau_1;
                            if (f < o)
                                do {
                                    (f = (f + 1) | 0), this.gau(t, r.zat_1), this.gau(t, r.aau_1);
                                } while (f < o);
                            t.xas();
                        }
                    }),
                    (h(K).tat = function (t) {
                        this.b3b(t, 0, t.length);
                    }),
                    new R(),
                    new M(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = j),
                    (t.$_$.b = K),
                    (t.$_$.c = S),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (a) return r;
                                (a = !0), new A("UNKNOWN", 0, 0), new A("UNKNOWN_METHOD", 1, 1), new A("INVALID_MESSAGE_TYPE", 2, 2), new A("WRONG_METHOD_NAME", 3, 3), new A("BAD_SEQUENCE_ID", 4, 4), new A("MISSING_RESULT", 5, 5), new A("INTERNAL_ERROR", 6, 6), (s = new A("PROTOCOL_ERROR", 7, 7)), new A("INVALID_TRANSFORM", 8, 8), new A("INVALID_PROTOCOL", 9, 9), new A("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            s
                        );
                    }),
                    (t.$_$.e = _);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    s,
                    a,
                    e = i.$_$.jf,
                    _ = i.$_$.w9,
                    h = i.$_$.o3,
                    u = i.$_$.t3,
                    r = i.$_$.la,
                    f = i.$_$.a6,
                    o = i.$_$.oe,
                    $ = i.$_$.md,
                    c = i.$_$.se,
                    w = i.$_$.h2,
                    p = (i.$_$.n6, i.$_$.vc),
                    v = i.$_$.qf,
                    l = i.$_$.c8,
                    d = i.$_$.d8,
                    b = i.$_$.zc,
                    m = i.$_$.fj,
                    g = i.$_$.oi,
                    E = i.$_$.ld,
                    x = i.$_$.g,
                    y = i.$_$.pe;
                function q() {
                    return s || ((s = !0), _([e(0, 8), e(9, 13), e(14, 18), e(19, 23), e(24, 36)]), _([8, 13, 18, 23]), (n = r(u(h(48), h(57)), u(h(97), h(102))))), n;
                }
                function N() {
                    (a = this), (this.uv_1 = _([e(0, 4), e(4, 6), e(6, 8), e(8, 10), e(10, 16)]));
                }
                function T() {
                    return null == a && new N(), a;
                }
                function I(t) {
                    if ((T(), (this.vv_1 = t), 16 !== this.vv_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.vv_1.length;
                        throw w(c(i));
                    }
                }
                $(N),
                    E(I, "Uuid", x, x, [g]),
                    (o(I).toString = function () {
                        for (var t = p(36), i = 0, n = T().uv_1.p(); n.q(); ) {
                            var s = n.r(),
                                a = s.e1_1,
                                e = s.f1_1;
                            if (a <= e)
                                do {
                                    var _ = a;
                                    a = (a + 1) | 0;
                                    var u = this.vv_1[_],
                                        r = (u >> 4) & 15,
                                        f = 15 & u,
                                        o = i;
                                    (i = (o + 1) | 0), (t[o] = q().t(r).p1_1);
                                    var $ = i;
                                    (i = ($ + 1) | 0), (t[$] = q().t(f).p1_1);
                                } while (_ !== e);
                            if (i < 36) {
                                var c = i;
                                (i = (c + 1) | 0), (t[c] = h(45));
                            }
                        }
                        return v(t);
                    }),
                    (o(I).equals = function (t) {
                        return t instanceof I && l(this.vv_1, t.vv_1);
                    }),
                    (o(I).hashCode = function () {
                        return d(this.vv_1);
                    }),
                    (o(I).wv = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var s = b(this.vv_1[n], t.vv_1[n]);
                                if (0 !== s) return s;
                            } while (i < 16);
                        return 0;
                    }),
                    (o(I).d = function (t) {
                        return this.wv(t instanceof I ? t : m());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = f().hl(16);
                        return (t[6] = y((15 & t[6]) | 64)), (t[8] = y((63 & t[8]) | 128)), new I(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.44d1564a.js.map
