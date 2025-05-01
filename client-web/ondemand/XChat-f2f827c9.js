(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, s, i) => {
            !(function (t, s, i) {
                "use strict";
                var n,
                    a,
                    e,
                    r,
                    _ = s.$_$.ke,
                    h = s.$_$.id,
                    c = s.$_$.l6,
                    u = s.$_$.mi,
                    o = s.$_$.hd,
                    f = s.$_$.g,
                    $ = s.$_$.yi,
                    w = s.$_$.y2,
                    l = s.$_$.pc,
                    v = s.$_$.pf,
                    q = i.$_$.g,
                    d = s.$_$.si,
                    p = s.$_$.ne,
                    b = s.$_$.le,
                    x = s.$_$.tf,
                    E = s.$_$.me,
                    g = (s.$_$.t5, s.$_$.xc),
                    N = i.$_$.c,
                    z = i.$_$.f,
                    T = s.$_$.ld,
                    y = s.$_$.nd,
                    I = i.$_$.h,
                    O = i.$_$.a;
                function m() {}
                function R(t, s, i) {
                    u.call(this, t, s), (this.paq_1 = i);
                }
                function j() {}
                function A(t, s) {
                    w(s, this), l(this, A), (this.qaq_1 = t);
                }
                function M(t) {
                    this.zaq_1 = t;
                }
                function S(t, s, i) {
                    for (var n = i, a = 0; n > 0; ) {
                        var e = t.zaq_1.vu(s, a, n);
                        if (-1 === e) throw new q("Expected " + i + " bytes; got " + a);
                        (n = (n - e) | 0), (a = (a + e) | 0);
                    }
                }
                function k() {
                    (e = this), (this.war_1 = -65536), (this.xar_1 = -2147418112), (this.yar_1 = new G(""));
                }
                function C() {
                    return null == e && new k(), e;
                }
                function U(t, s, i) {
                    C(), (s = s === f ? new d(-1, -1) : s), (i = i === f ? new d(-1, -1) : i), M.call(this, t), (this.aas_1 = s), (this.bas_1 = i), (this.cas_1 = new Int8Array(8)), (this.das_1 = !1), (this.eas_1 = !1);
                }
                function P(t, s, i) {
                    (this.has_1 = t), (this.ias_1 = s), (this.jas_1 = i);
                }
                function D(t, s) {
                    (this.kas_1 = t), (this.las_1 = s);
                }
                function L(t, s, i) {
                    (this.mas_1 = t), (this.nas_1 = s), (this.oas_1 = i);
                }
                function B(t, s) {
                    (this.pas_1 = t), (this.qas_1 = s);
                }
                function G(t) {
                    this.ras_1 = t;
                }
                function K(t) {
                    (t = t === f ? new z() : t), (this.sas_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    O(t, this), l(this, F);
                }
                h(m),
                    o(R, "Kind", f, u),
                    h(j),
                    o(A, "ThriftException", f, $),
                    o(M, "BaseProtocol"),
                    h(k),
                    o(U, "BinaryProtocol", f, M),
                    o(P, "FieldMetadata"),
                    o(D, "ListMetadata"),
                    o(L, "MapMetadata"),
                    o(B, "SetMetadata"),
                    o(G, "StructMetadata"),
                    T(V, "Transport"),
                    o(K, "BufferTransport", K, f, [V]),
                    y(W, "ProtocolUtil"),
                    o(F, "ProtocolException", f, I),
                    (_(A).raq = function (t) {
                        t.saq("TApplicationException");
                        var s = this.message;
                        null == s || (t.taq("message", 1, 11), t.uaq(s), t.vaq()), t.taq("type", 2, 8), t.waq(this.qaq_1.paq_1), t.vaq(), t.xaq(), t.yaq();
                    }),
                    (_(M).x4 = function () {
                        this.zaq_1.x4();
                    }),
                    (_(U).saq = function (t) {}),
                    (_(U).yaq = function () {}),
                    (_(U).taq = function (t, s, i) {
                        this.b3b(i), this.fas(p(s));
                    }),
                    (_(U).vaq = function () {}),
                    (_(U).xaq = function () {
                        this.b3b(0);
                    }),
                    (_(U).aar = function (t, s) {
                        this.b3b(t), this.waq(s);
                    }),
                    (_(U).bar = function () {}),
                    (_(U).car = function (t) {
                        this.b3b(t ? 1 : 0);
                    }),
                    (_(U).b3b = function (t) {
                        (this.cas_1[0] = t), this.zaq_1.x3a(this.cas_1, 0, 1);
                    }),
                    (_(U).fas = function (t) {
                        (this.cas_1[0] = b((t >> 8) & 255)), (this.cas_1[1] = b(255 & t)), this.zaq_1.x3a(this.cas_1, 0, 2);
                    }),
                    (_(U).waq = function (t) {
                        (this.cas_1[0] = b((t >> 24) & 255)), (this.cas_1[1] = b((t >> 16) & 255)), (this.cas_1[2] = b((t >> 8) & 255)), (this.cas_1[3] = b(255 & t)), this.zaq_1.x3a(this.cas_1, 0, 4);
                    }),
                    (_(U).dar = function (t) {
                        (this.cas_1[0] = t.q3(56).s3(new d(255, 0)).v3()), (this.cas_1[1] = t.q3(48).s3(new d(255, 0)).v3()), (this.cas_1[2] = t.q3(40).s3(new d(255, 0)).v3()), (this.cas_1[3] = t.q3(32).s3(new d(255, 0)).v3()), (this.cas_1[4] = t.q3(24).s3(new d(255, 0)).v3()), (this.cas_1[5] = t.q3(16).s3(new d(255, 0)).v3()), (this.cas_1[6] = t.q3(8).s3(new d(255, 0)).v3()), (this.cas_1[7] = t.s3(new d(255, 0)).v3()), this.zaq_1.x3a(this.cas_1, 0, 8);
                    }),
                    (_(U).uaq = function (t) {
                        var s = x(t);
                        this.waq(s.length), this.zaq_1.gas(s);
                    }),
                    (_(U).ear = function (t) {
                        this.waq(t.s()), this.zaq_1.gas(t.rt());
                    }),
                    (_(U).far = function () {
                        return C().yar_1;
                    }),
                    (_(U).gar = function () {}),
                    (_(U).har = function () {
                        var t = this.ju();
                        return new P("", t, 0 === t ? 0 : this.qar());
                    }),
                    (_(U).iar = function () {}),
                    (_(U).jar = function () {
                        var t = this.ju(),
                            s = this.ju(),
                            i = this.rar();
                        if (!this.bas_1.equals(new d(-1, -1)) && E(i).d1(this.bas_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, s, i);
                    }),
                    (_(U).kar = function () {}),
                    (_(U).lar = function () {
                        var t = this.ju(),
                            s = this.rar();
                        if (!this.bas_1.equals(new d(-1, -1)) && E(s).d1(this.bas_1) > 0) throw new F("Container size limit exceeded");
                        return new D(t, s);
                    }),
                    (_(U).mar = function () {}),
                    (_(U).nar = function () {
                        var t = this.ju(),
                            s = this.rar();
                        if (!this.bas_1.equals(new d(-1, -1)) && E(s).d1(this.bas_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, s);
                    }),
                    (_(U).oar = function () {}),
                    (_(U).par = function () {
                        return 1 === this.ju();
                    }),
                    (_(U).ju = function () {
                        return S(this, this.cas_1, 1), this.cas_1[0];
                    }),
                    (_(U).qar = function () {
                        return S(this, this.cas_1, 2), p(((255 & this.cas_1[0]) << 8) | (255 & this.cas_1[1]));
                    }),
                    (_(U).rar = function () {
                        return S(this, this.cas_1, 4), ((255 & this.cas_1[0]) << 24) | ((255 & this.cas_1[1]) << 16) | ((255 & this.cas_1[2]) << 8) | (255 & this.cas_1[3]);
                    }),
                    (_(U).sar = function () {
                        return (
                            S(this, this.cas_1, 8),
                            E(this.cas_1[0])
                                .s3(new d(255, 0))
                                .p3(56)
                                .t3(E(this.cas_1[1]).s3(new d(255, 0)).p3(48))
                                .t3(E(this.cas_1[2]).s3(new d(255, 0)).p3(40))
                                .t3(E(this.cas_1[3]).s3(new d(255, 0)).p3(32))
                                .t3(E(this.cas_1[4]).s3(new d(255, 0)).p3(24))
                                .t3(E(this.cas_1[5]).s3(new d(255, 0)).p3(16))
                                .t3(E(this.cas_1[6]).s3(new d(255, 0)).p3(8))
                                .t3(E(this.cas_1[7]).s3(new d(255, 0)))
                        );
                    }),
                    (_(U).tar = function () {
                        var t = this.sar();
                        return g(t);
                    }),
                    (_(U).uar = function () {
                        var t,
                            s,
                            i,
                            n = this.rar();
                        if (!this.aas_1.equals(new d(-1, -1)) && E(n).d1(this.aas_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (s = n), (i = new Int8Array(s)), S(t, i, s), v(i);
                    }),
                    (_(U).var = function () {
                        var t = this.rar();
                        if (!this.aas_1.equals(new d(-1, -1)) && E(t).d1(this.aas_1) > 0) throw new F("Binary size limit exceeded");
                        var s = new Int8Array(t);
                        return S(this, s, s.length), N().it(s);
                    }),
                    (_(K).vu = function (t, s, i) {
                        return this.sas_1.vu(t, s, i);
                    }),
                    (_(K).x3a = function (t, s, i) {
                        this.sas_1.at(t, s, i);
                    }),
                    (_(K).x4 = function () {
                        return this.sas_1.x4();
                    }),
                    (_(W).tas = function (t, s) {
                        if (2 === s) t.par();
                        else if (3 === s) t.ju();
                        else if (6 === s) t.qar();
                        else if (8 === s) t.rar();
                        else if (10 === s) t.sar();
                        else if (4 === s) t.tar();
                        else if (11 === s) t.uar();
                        else if (12 === s) {
                            t.far();
                            t: for (;;) {
                                var i = t.har();
                                if (0 === i.ias_1) break t;
                                this.tas(t, i.ias_1), t.iar();
                            }
                            t.gar();
                        } else if (15 === s) {
                            var n = t.lar(),
                                a = 0,
                                e = n.las_1;
                            if (a < e)
                                do {
                                    (a = (a + 1) | 0), this.tas(t, n.kas_1);
                                } while (a < e);
                            t.mar();
                        } else if (14 === s) {
                            var r = t.nar(),
                                _ = 0,
                                h = r.qas_1;
                            if (_ < h)
                                do {
                                    (_ = (_ + 1) | 0), this.tas(t, r.pas_1);
                                } while (_ < h);
                            t.oar();
                        } else {
                            if (13 !== s) throw new F("Unrecognized TType value: " + s);
                            var c = t.jar(),
                                u = 0,
                                o = c.oas_1;
                            if (u < o)
                                do {
                                    (u = (u + 1) | 0), this.tas(t, c.mas_1), this.tas(t, c.nas_1);
                                } while (u < o);
                            t.kar();
                        }
                    }),
                    (_(K).gas = function (t) {
                        this.x3a(t, 0, t.length);
                    }),
                    new m(),
                    new j(),
                    (r = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = U),
                    (t.$_$.b = K),
                    (t.$_$.c = A),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (a) return c;
                                (a = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (n = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            n
                        );
                    }),
                    (t.$_$.e = r);
            })(t.exports, i(519039), i(222818));
        },
        937455: (t, s, i) => {
            !(function (t, s) {
                "use strict";
                var i,
                    n,
                    a,
                    e = s.$_$.ef,
                    r = s.$_$.u9,
                    _ = s.$_$.n3,
                    h = s.$_$.s3,
                    c = s.$_$.ja,
                    u = s.$_$.z5,
                    o = s.$_$.ke,
                    f = s.$_$.id,
                    $ = s.$_$.oe,
                    w = s.$_$.h2,
                    l = (s.$_$.l6, s.$_$.rc),
                    v = s.$_$.lf,
                    q = s.$_$.a8,
                    d = s.$_$.b8,
                    p = s.$_$.vc,
                    b = s.$_$.zi,
                    x = s.$_$.ii,
                    E = s.$_$.hd,
                    g = s.$_$.g,
                    N = s.$_$.le;
                function z() {
                    return n || ((n = !0), r([e(0, 8), e(9, 13), e(14, 18), e(19, 23), e(24, 36)]), r([8, 13, 18, 23]), (i = c(h(_(48), _(57)), h(_(97), _(102))))), i;
                }
                function T() {
                    (a = this), (this.rv_1 = r([e(0, 4), e(4, 6), e(6, 8), e(8, 10), e(10, 16)]));
                }
                function y() {
                    return null == a && new T(), a;
                }
                function I(t) {
                    if ((y(), (this.sv_1 = t), 16 !== this.sv_1.length)) {
                        var s = "Invalid UUID bytes. Expected 16 bytes; found " + this.sv_1.length;
                        throw w($(s));
                    }
                }
                f(T),
                    E(I, "Uuid", g, g, [x]),
                    (o(I).toString = function () {
                        for (var t = l(36), s = 0, i = y().rv_1.p(); i.q(); ) {
                            var n = i.r(),
                                a = n.e1_1,
                                e = n.f1_1;
                            if (a <= e)
                                do {
                                    var r = a;
                                    a = (a + 1) | 0;
                                    var h = this.sv_1[r],
                                        c = (h >> 4) & 15,
                                        u = 15 & h,
                                        o = s;
                                    (s = (o + 1) | 0), (t[o] = z().t(c).p1_1);
                                    var f = s;
                                    (s = (f + 1) | 0), (t[f] = z().t(u).p1_1);
                                } while (r !== e);
                            if (s < 36) {
                                var $ = s;
                                (s = ($ + 1) | 0), (t[$] = _(45));
                            }
                        }
                        return v(t);
                    }),
                    (o(I).equals = function (t) {
                        return t instanceof I && q(this.sv_1, t.sv_1);
                    }),
                    (o(I).hashCode = function () {
                        return d(this.sv_1);
                    }),
                    (o(I).tv = function (t) {
                        var s = 0;
                        if (s < 16)
                            do {
                                var i = s;
                                s = (s + 1) | 0;
                                var n = p(this.sv_1[i], t.sv_1[i]);
                                if (0 !== n) return n;
                            } while (s < 16);
                        return 0;
                    }),
                    (o(I).d = function (t) {
                        return this.tv(t instanceof I ? t : b());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = u().el(16);
                        return (t[6] = N((15 & t[6]) | 64)), (t[8] = N((63 & t[8]) | 128)), new I(t);
                    });
            })(t.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.eb21881a.js.map
