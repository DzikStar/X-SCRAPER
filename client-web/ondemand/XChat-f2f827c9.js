(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var a,
                    r,
                    s,
                    e,
                    _ = i.$_$.ke,
                    h = i.$_$.id,
                    u = i.$_$.l6,
                    o = i.$_$.mi,
                    f = i.$_$.hd,
                    $ = i.$_$.g,
                    c = i.$_$.yi,
                    w = i.$_$.y2,
                    p = i.$_$.pc,
                    q = i.$_$.pf,
                    l = n.$_$.g,
                    v = i.$_$.si,
                    d = i.$_$.ne,
                    x = i.$_$.le,
                    g = i.$_$.tf,
                    b = i.$_$.me,
                    E = (i.$_$.t5, i.$_$.xc),
                    m = n.$_$.c,
                    N = n.$_$.f,
                    T = i.$_$.ld,
                    y = i.$_$.nd,
                    I = n.$_$.h,
                    j = n.$_$.a;
                function O() {}
                function R(t, i, n) {
                    o.call(this, t, i), (this.caq_1 = n);
                }
                function z() {}
                function A(t, i) {
                    w(i, this), p(this, A), (this.daq_1 = t);
                }
                function M(t) {
                    this.maq_1 = t;
                }
                function S(t, i, n) {
                    for (var a = n, r = 0; a > 0; ) {
                        var s = t.maq_1.vu(i, r, a);
                        if (-1 === s) throw new l("Expected " + n + " bytes; got " + r);
                        (a = (a - s) | 0), (r = (r + s) | 0);
                    }
                }
                function C() {
                    (s = this), (this.jar_1 = -65536), (this.kar_1 = -2147418112), (this.lar_1 = new G(""));
                }
                function U() {
                    return null == s && new C(), s;
                }
                function k(t, i, n) {
                    U(), (i = i === $ ? new v(-1, -1) : i), (n = n === $ ? new v(-1, -1) : n), M.call(this, t), (this.nar_1 = i), (this.oar_1 = n), (this.par_1 = new Int8Array(8)), (this.qar_1 = !1), (this.rar_1 = !1);
                }
                function P(t, i, n) {
                    (this.uar_1 = t), (this.var_1 = i), (this.war_1 = n);
                }
                function D(t, i) {
                    (this.xar_1 = t), (this.yar_1 = i);
                }
                function L(t, i, n) {
                    (this.zar_1 = t), (this.aas_1 = i), (this.bas_1 = n);
                }
                function B(t, i) {
                    (this.cas_1 = t), (this.das_1 = i);
                }
                function G(t) {
                    this.eas_1 = t;
                }
                function K(t) {
                    (t = t === $ ? new N() : t), (this.fas_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    j(t, this), p(this, F);
                }
                h(O),
                    f(R, "Kind", $, o),
                    h(z),
                    f(A, "ThriftException", $, c),
                    f(M, "BaseProtocol"),
                    h(C),
                    f(k, "BinaryProtocol", $, M),
                    f(P, "FieldMetadata"),
                    f(D, "ListMetadata"),
                    f(L, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    T(V, "Transport"),
                    f(K, "BufferTransport", K, $, [V]),
                    y(W, "ProtocolUtil"),
                    f(F, "ProtocolException", $, I),
                    (_(A).eaq = function (t) {
                        t.faq("TApplicationException");
                        var i = this.message;
                        null == i || (t.gaq("message", 1, 11), t.haq(i), t.iaq()), t.gaq("type", 2, 8), t.jaq(this.daq_1.caq_1), t.iaq(), t.kaq(), t.laq();
                    }),
                    (_(M).x4 = function () {
                        this.maq_1.x4();
                    }),
                    (_(k).faq = function (t) {}),
                    (_(k).laq = function () {}),
                    (_(k).gaq = function (t, i, n) {
                        this.b3b(n), this.sar(d(i));
                    }),
                    (_(k).iaq = function () {}),
                    (_(k).kaq = function () {
                        this.b3b(0);
                    }),
                    (_(k).naq = function (t, i) {
                        this.b3b(t), this.jaq(i);
                    }),
                    (_(k).oaq = function () {}),
                    (_(k).paq = function (t) {
                        this.b3b(t ? 1 : 0);
                    }),
                    (_(k).b3b = function (t) {
                        (this.par_1[0] = t), this.maq_1.x3a(this.par_1, 0, 1);
                    }),
                    (_(k).sar = function (t) {
                        (this.par_1[0] = x((t >> 8) & 255)), (this.par_1[1] = x(255 & t)), this.maq_1.x3a(this.par_1, 0, 2);
                    }),
                    (_(k).jaq = function (t) {
                        (this.par_1[0] = x((t >> 24) & 255)), (this.par_1[1] = x((t >> 16) & 255)), (this.par_1[2] = x((t >> 8) & 255)), (this.par_1[3] = x(255 & t)), this.maq_1.x3a(this.par_1, 0, 4);
                    }),
                    (_(k).qaq = function (t) {
                        (this.par_1[0] = t.q3(56).s3(new v(255, 0)).v3()), (this.par_1[1] = t.q3(48).s3(new v(255, 0)).v3()), (this.par_1[2] = t.q3(40).s3(new v(255, 0)).v3()), (this.par_1[3] = t.q3(32).s3(new v(255, 0)).v3()), (this.par_1[4] = t.q3(24).s3(new v(255, 0)).v3()), (this.par_1[5] = t.q3(16).s3(new v(255, 0)).v3()), (this.par_1[6] = t.q3(8).s3(new v(255, 0)).v3()), (this.par_1[7] = t.s3(new v(255, 0)).v3()), this.maq_1.x3a(this.par_1, 0, 8);
                    }),
                    (_(k).haq = function (t) {
                        var i = g(t);
                        this.jaq(i.length), this.maq_1.tar(i);
                    }),
                    (_(k).raq = function (t) {
                        this.jaq(t.s()), this.maq_1.tar(t.rt());
                    }),
                    (_(k).saq = function () {
                        return U().lar_1;
                    }),
                    (_(k).taq = function () {}),
                    (_(k).uaq = function () {
                        var t = this.ju();
                        return new P("", t, 0 === t ? 0 : this.dar());
                    }),
                    (_(k).vaq = function () {}),
                    (_(k).waq = function () {
                        var t = this.ju(),
                            i = this.ju(),
                            n = this.ear();
                        if (!this.oar_1.equals(new v(-1, -1)) && b(n).d1(this.oar_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i, n);
                    }),
                    (_(k).xaq = function () {}),
                    (_(k).yaq = function () {
                        var t = this.ju(),
                            i = this.ear();
                        if (!this.oar_1.equals(new v(-1, -1)) && b(i).d1(this.oar_1) > 0) throw new F("Container size limit exceeded");
                        return new D(t, i);
                    }),
                    (_(k).zaq = function () {}),
                    (_(k).aar = function () {
                        var t = this.ju(),
                            i = this.ear();
                        if (!this.oar_1.equals(new v(-1, -1)) && b(i).d1(this.oar_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (_(k).bar = function () {}),
                    (_(k).car = function () {
                        return 1 === this.ju();
                    }),
                    (_(k).ju = function () {
                        return S(this, this.par_1, 1), this.par_1[0];
                    }),
                    (_(k).dar = function () {
                        return S(this, this.par_1, 2), d(((255 & this.par_1[0]) << 8) | (255 & this.par_1[1]));
                    }),
                    (_(k).ear = function () {
                        return S(this, this.par_1, 4), ((255 & this.par_1[0]) << 24) | ((255 & this.par_1[1]) << 16) | ((255 & this.par_1[2]) << 8) | (255 & this.par_1[3]);
                    }),
                    (_(k).far = function () {
                        return (
                            S(this, this.par_1, 8),
                            b(this.par_1[0])
                                .s3(new v(255, 0))
                                .p3(56)
                                .t3(b(this.par_1[1]).s3(new v(255, 0)).p3(48))
                                .t3(b(this.par_1[2]).s3(new v(255, 0)).p3(40))
                                .t3(b(this.par_1[3]).s3(new v(255, 0)).p3(32))
                                .t3(b(this.par_1[4]).s3(new v(255, 0)).p3(24))
                                .t3(b(this.par_1[5]).s3(new v(255, 0)).p3(16))
                                .t3(b(this.par_1[6]).s3(new v(255, 0)).p3(8))
                                .t3(b(this.par_1[7]).s3(new v(255, 0)))
                        );
                    }),
                    (_(k).gar = function () {
                        var t = this.far();
                        return E(t);
                    }),
                    (_(k).har = function () {
                        var t,
                            i,
                            n,
                            a = this.ear();
                        if (!this.nar_1.equals(new v(-1, -1)) && b(a).d1(this.nar_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = a), (n = new Int8Array(i)), S(t, n, i), q(n);
                    }),
                    (_(k).iar = function () {
                        var t = this.ear();
                        if (!this.nar_1.equals(new v(-1, -1)) && b(t).d1(this.nar_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return S(this, i, i.length), m().it(i);
                    }),
                    (_(K).vu = function (t, i, n) {
                        return this.fas_1.vu(t, i, n);
                    }),
                    (_(K).x3a = function (t, i, n) {
                        this.fas_1.at(t, i, n);
                    }),
                    (_(K).x4 = function () {
                        return this.fas_1.x4();
                    }),
                    (_(W).gas = function (t, i) {
                        if (2 === i) t.car();
                        else if (3 === i) t.ju();
                        else if (6 === i) t.dar();
                        else if (8 === i) t.ear();
                        else if (10 === i) t.far();
                        else if (4 === i) t.gar();
                        else if (11 === i) t.har();
                        else if (12 === i) {
                            t.saq();
                            t: for (;;) {
                                var n = t.uaq();
                                if (0 === n.var_1) break t;
                                this.gas(t, n.var_1), t.vaq();
                            }
                            t.taq();
                        } else if (15 === i) {
                            var a = t.yaq(),
                                r = 0,
                                s = a.yar_1;
                            if (r < s)
                                do {
                                    (r = (r + 1) | 0), this.gas(t, a.xar_1);
                                } while (r < s);
                            t.zaq();
                        } else if (14 === i) {
                            var e = t.aar(),
                                _ = 0,
                                h = e.das_1;
                            if (_ < h)
                                do {
                                    (_ = (_ + 1) | 0), this.gas(t, e.cas_1);
                                } while (_ < h);
                            t.bar();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var u = t.waq(),
                                o = 0,
                                f = u.bas_1;
                            if (o < f)
                                do {
                                    (o = (o + 1) | 0), this.gas(t, u.zar_1), this.gas(t, u.aas_1);
                                } while (o < f);
                            t.xaq();
                        }
                    }),
                    (_(K).tar = function (t) {
                        this.x3a(t, 0, t.length);
                    }),
                    new O(),
                    new z(),
                    (e = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = k),
                    (t.$_$.b = K),
                    (t.$_$.c = A),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (r) return u;
                                (r = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (a = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            a
                        );
                    }),
                    (t.$_$.e = e);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    a,
                    r,
                    s = i.$_$.ef,
                    e = i.$_$.u9,
                    _ = i.$_$.n3,
                    h = i.$_$.s3,
                    u = i.$_$.ja,
                    o = i.$_$.z5,
                    f = i.$_$.ke,
                    $ = i.$_$.id,
                    c = i.$_$.oe,
                    w = i.$_$.h2,
                    p = (i.$_$.l6, i.$_$.rc),
                    q = i.$_$.lf,
                    l = i.$_$.a8,
                    v = i.$_$.b8,
                    d = i.$_$.vc,
                    x = i.$_$.zi,
                    g = i.$_$.ii,
                    b = i.$_$.hd,
                    E = i.$_$.g,
                    m = i.$_$.le;
                function N() {
                    return a || ((a = !0), e([s(0, 8), s(9, 13), s(14, 18), s(19, 23), s(24, 36)]), e([8, 13, 18, 23]), (n = u(h(_(48), _(57)), h(_(97), _(102))))), n;
                }
                function T() {
                    (r = this), (this.rv_1 = e([s(0, 4), s(4, 6), s(6, 8), s(8, 10), s(10, 16)]));
                }
                function y() {
                    return null == r && new T(), r;
                }
                function I(t) {
                    if ((y(), (this.sv_1 = t), 16 !== this.sv_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.sv_1.length;
                        throw w(c(i));
                    }
                }
                $(T),
                    b(I, "Uuid", E, E, [g]),
                    (f(I).toString = function () {
                        for (var t = p(36), i = 0, n = y().rv_1.p(); n.q(); ) {
                            var a = n.r(),
                                r = a.e1_1,
                                s = a.f1_1;
                            if (r <= s)
                                do {
                                    var e = r;
                                    r = (r + 1) | 0;
                                    var h = this.sv_1[e],
                                        u = (h >> 4) & 15,
                                        o = 15 & h,
                                        f = i;
                                    (i = (f + 1) | 0), (t[f] = N().t(u).p1_1);
                                    var $ = i;
                                    (i = ($ + 1) | 0), (t[$] = N().t(o).p1_1);
                                } while (e !== s);
                            if (i < 36) {
                                var c = i;
                                (i = (c + 1) | 0), (t[c] = _(45));
                            }
                        }
                        return q(t);
                    }),
                    (f(I).equals = function (t) {
                        return t instanceof I && l(this.sv_1, t.sv_1);
                    }),
                    (f(I).hashCode = function () {
                        return v(this.sv_1);
                    }),
                    (f(I).tv = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var a = d(this.sv_1[n], t.sv_1[n]);
                                if (0 !== a) return a;
                            } while (i < 16);
                        return 0;
                    }),
                    (f(I).d = function (t) {
                        return this.tv(t instanceof I ? t : x());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().el(16);
                        return (t[6] = m((15 & t[6]) | 64)), (t[8] = m((63 & t[8]) | 128)), new I(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.db9e244a.js.map
