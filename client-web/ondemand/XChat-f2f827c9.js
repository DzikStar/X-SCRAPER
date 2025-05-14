(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var a,
                    s,
                    e,
                    _,
                    u = i.$_$.oe,
                    h = i.$_$.md,
                    w = i.$_$.n6,
                    r = i.$_$.si,
                    o = i.$_$.ld,
                    f = i.$_$.g,
                    v = i.$_$.ej,
                    $ = i.$_$.y2,
                    c = i.$_$.tc,
                    b = i.$_$.uf,
                    l = n.$_$.g,
                    d = i.$_$.yi,
                    p = i.$_$.re,
                    q = i.$_$.pe,
                    y = i.$_$.yf,
                    m = i.$_$.qe,
                    E = (i.$_$.u5, i.$_$.bd),
                    x = n.$_$.c,
                    N = n.$_$.f,
                    g = i.$_$.pd,
                    T = i.$_$.rd,
                    I = n.$_$.h,
                    O = n.$_$.a;
                function R() {}
                function z(t, i, n) {
                    r.call(this, t, i), (this.oau_1 = n);
                }
                function A() {}
                function M(t, i) {
                    $(i, this), c(this, M), (this.pau_1 = t);
                }
                function S(t) {
                    this.yau_1 = t;
                }
                function C(t, i, n) {
                    for (var a = n, s = 0; a > 0; ) {
                        var e = t.yau_1.yu(i, s, a);
                        if (-1 === e) throw new l("Expected " + n + " bytes; got " + s);
                        (a = (a - e) | 0), (s = (s + e) | 0);
                    }
                }
                function U() {
                    (e = this), (this.vav_1 = -65536), (this.wav_1 = -2147418112), (this.xav_1 = new G(""));
                }
                function P() {
                    return null == e && new U(), e;
                }
                function k(t, i, n) {
                    P(), (i = i === f ? new d(-1, -1) : i), (n = n === f ? new d(-1, -1) : n), S.call(this, t), (this.zav_1 = i), (this.aaw_1 = n), (this.baw_1 = new Int8Array(8)), (this.caw_1 = !1), (this.daw_1 = !1);
                }
                function D(t, i, n) {
                    (this.gaw_1 = t), (this.haw_1 = i), (this.iaw_1 = n);
                }
                function L(t, i) {
                    (this.jaw_1 = t), (this.kaw_1 = i);
                }
                function j(t, i, n) {
                    (this.law_1 = t), (this.maw_1 = i), (this.naw_1 = n);
                }
                function B(t, i) {
                    (this.oaw_1 = t), (this.paw_1 = i);
                }
                function G(t) {
                    this.qaw_1 = t;
                }
                function K(t) {
                    (t = t === f ? new N() : t), (this.raw_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    O(t, this), c(this, F);
                }
                h(R),
                    o(z, "Kind", f, r),
                    h(A),
                    o(M, "ThriftException", f, v),
                    o(S, "BaseProtocol"),
                    h(U),
                    o(k, "BinaryProtocol", f, S),
                    o(D, "FieldMetadata"),
                    o(L, "ListMetadata"),
                    o(j, "MapMetadata"),
                    o(B, "SetMetadata"),
                    o(G, "StructMetadata"),
                    g(V, "Transport"),
                    o(K, "BufferTransport", K, f, [V]),
                    T(W, "ProtocolUtil"),
                    o(F, "ProtocolException", f, I),
                    (u(M).qau = function (t) {
                        t.rau("TApplicationException");
                        var i = this.message;
                        null == i || (t.sau("message", 1, 11), t.tau(i), t.uau()), t.sau("type", 2, 8), t.vau(this.pau_1.oau_1), t.uau(), t.wau(), t.xau();
                    }),
                    (u(S).x4 = function () {
                        this.yau_1.x4();
                    }),
                    (u(k).rau = function (t) {}),
                    (u(k).xau = function () {}),
                    (u(k).sau = function (t, i, n) {
                        this.f3b(n), this.eaw(p(i));
                    }),
                    (u(k).uau = function () {}),
                    (u(k).wau = function () {
                        this.f3b(0);
                    }),
                    (u(k).zau = function (t, i) {
                        this.f3b(t), this.vau(i);
                    }),
                    (u(k).aav = function () {}),
                    (u(k).bav = function (t) {
                        this.f3b(t ? 1 : 0);
                    }),
                    (u(k).f3b = function (t) {
                        (this.baw_1[0] = t), this.yau_1.b3b(this.baw_1, 0, 1);
                    }),
                    (u(k).eaw = function (t) {
                        (this.baw_1[0] = q((t >> 8) & 255)), (this.baw_1[1] = q(255 & t)), this.yau_1.b3b(this.baw_1, 0, 2);
                    }),
                    (u(k).vau = function (t) {
                        (this.baw_1[0] = q((t >> 24) & 255)), (this.baw_1[1] = q((t >> 16) & 255)), (this.baw_1[2] = q((t >> 8) & 255)), (this.baw_1[3] = q(255 & t)), this.yau_1.b3b(this.baw_1, 0, 4);
                    }),
                    (u(k).cav = function (t) {
                        (this.baw_1[0] = t.q3(56).s3(new d(255, 0)).v3()), (this.baw_1[1] = t.q3(48).s3(new d(255, 0)).v3()), (this.baw_1[2] = t.q3(40).s3(new d(255, 0)).v3()), (this.baw_1[3] = t.q3(32).s3(new d(255, 0)).v3()), (this.baw_1[4] = t.q3(24).s3(new d(255, 0)).v3()), (this.baw_1[5] = t.q3(16).s3(new d(255, 0)).v3()), (this.baw_1[6] = t.q3(8).s3(new d(255, 0)).v3()), (this.baw_1[7] = t.s3(new d(255, 0)).v3()), this.yau_1.b3b(this.baw_1, 0, 8);
                    }),
                    (u(k).tau = function (t) {
                        var i = y(t);
                        this.vau(i.length), this.yau_1.faw(i);
                    }),
                    (u(k).dav = function (t) {
                        this.vau(t.s()), this.yau_1.faw(t.ut());
                    }),
                    (u(k).eav = function () {
                        return P().xav_1;
                    }),
                    (u(k).fav = function () {}),
                    (u(k).gav = function () {
                        var t = this.mu();
                        return new D("", t, 0 === t ? 0 : this.pav());
                    }),
                    (u(k).hav = function () {}),
                    (u(k).iav = function () {
                        var t = this.mu(),
                            i = this.mu(),
                            n = this.qav();
                        if (!this.aaw_1.equals(new d(-1, -1)) && m(n).d1(this.aaw_1) > 0) throw new F("Container size limit exceeded");
                        return new j(t, i, n);
                    }),
                    (u(k).jav = function () {}),
                    (u(k).kav = function () {
                        var t = this.mu(),
                            i = this.qav();
                        if (!this.aaw_1.equals(new d(-1, -1)) && m(i).d1(this.aaw_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i);
                    }),
                    (u(k).lav = function () {}),
                    (u(k).mav = function () {
                        var t = this.mu(),
                            i = this.qav();
                        if (!this.aaw_1.equals(new d(-1, -1)) && m(i).d1(this.aaw_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (u(k).nav = function () {}),
                    (u(k).oav = function () {
                        return 1 === this.mu();
                    }),
                    (u(k).mu = function () {
                        return C(this, this.baw_1, 1), this.baw_1[0];
                    }),
                    (u(k).pav = function () {
                        return C(this, this.baw_1, 2), p(((255 & this.baw_1[0]) << 8) | (255 & this.baw_1[1]));
                    }),
                    (u(k).qav = function () {
                        return C(this, this.baw_1, 4), ((255 & this.baw_1[0]) << 24) | ((255 & this.baw_1[1]) << 16) | ((255 & this.baw_1[2]) << 8) | (255 & this.baw_1[3]);
                    }),
                    (u(k).rav = function () {
                        return (
                            C(this, this.baw_1, 8),
                            m(this.baw_1[0])
                                .s3(new d(255, 0))
                                .p3(56)
                                .t3(m(this.baw_1[1]).s3(new d(255, 0)).p3(48))
                                .t3(m(this.baw_1[2]).s3(new d(255, 0)).p3(40))
                                .t3(m(this.baw_1[3]).s3(new d(255, 0)).p3(32))
                                .t3(m(this.baw_1[4]).s3(new d(255, 0)).p3(24))
                                .t3(m(this.baw_1[5]).s3(new d(255, 0)).p3(16))
                                .t3(m(this.baw_1[6]).s3(new d(255, 0)).p3(8))
                                .t3(m(this.baw_1[7]).s3(new d(255, 0)))
                        );
                    }),
                    (u(k).sav = function () {
                        var t = this.rav();
                        return E(t);
                    }),
                    (u(k).tav = function () {
                        var t,
                            i,
                            n,
                            a = this.qav();
                        if (!this.zav_1.equals(new d(-1, -1)) && m(a).d1(this.zav_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = a), (n = new Int8Array(i)), C(t, n, i), b(n);
                    }),
                    (u(k).uav = function () {
                        var t = this.qav();
                        if (!this.zav_1.equals(new d(-1, -1)) && m(t).d1(this.zav_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return C(this, i, i.length), x().lt(i);
                    }),
                    (u(K).yu = function (t, i, n) {
                        return this.raw_1.yu(t, i, n);
                    }),
                    (u(K).b3b = function (t, i, n) {
                        this.raw_1.dt(t, i, n);
                    }),
                    (u(K).x4 = function () {
                        return this.raw_1.x4();
                    }),
                    (u(W).saw = function (t, i) {
                        if (2 === i) t.oav();
                        else if (3 === i) t.mu();
                        else if (6 === i) t.pav();
                        else if (8 === i) t.qav();
                        else if (10 === i) t.rav();
                        else if (4 === i) t.sav();
                        else if (11 === i) t.tav();
                        else if (12 === i) {
                            t.eav();
                            t: for (;;) {
                                var n = t.gav();
                                if (0 === n.haw_1) break t;
                                this.saw(t, n.haw_1), t.hav();
                            }
                            t.fav();
                        } else if (15 === i) {
                            var a = t.kav(),
                                s = 0,
                                e = a.kaw_1;
                            if (s < e)
                                do {
                                    (s = (s + 1) | 0), this.saw(t, a.jaw_1);
                                } while (s < e);
                            t.lav();
                        } else if (14 === i) {
                            var _ = t.mav(),
                                u = 0,
                                h = _.paw_1;
                            if (u < h)
                                do {
                                    (u = (u + 1) | 0), this.saw(t, _.oaw_1);
                                } while (u < h);
                            t.nav();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var w = t.iav(),
                                r = 0,
                                o = w.naw_1;
                            if (r < o)
                                do {
                                    (r = (r + 1) | 0), this.saw(t, w.law_1), this.saw(t, w.maw_1);
                                } while (r < o);
                            t.jav();
                        }
                    }),
                    (u(K).faw = function (t) {
                        this.b3b(t, 0, t.length);
                    }),
                    new R(),
                    new A(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = k),
                    (t.$_$.b = K),
                    (t.$_$.c = M),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (s) return w;
                                (s = !0), new z("UNKNOWN", 0, 0), new z("UNKNOWN_METHOD", 1, 1), new z("INVALID_MESSAGE_TYPE", 2, 2), new z("WRONG_METHOD_NAME", 3, 3), new z("BAD_SEQUENCE_ID", 4, 4), new z("MISSING_RESULT", 5, 5), new z("INTERNAL_ERROR", 6, 6), (a = new z("PROTOCOL_ERROR", 7, 7)), new z("INVALID_TRANSFORM", 8, 8), new z("INVALID_PROTOCOL", 9, 9), new z("UNSUPPORTED_CLIENT_TYPE", 10, 10);
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
                    s,
                    e = i.$_$.jf,
                    _ = i.$_$.w9,
                    u = i.$_$.o3,
                    h = i.$_$.t3,
                    w = i.$_$.la,
                    r = i.$_$.a6,
                    o = i.$_$.oe,
                    f = i.$_$.md,
                    v = i.$_$.se,
                    $ = i.$_$.h2,
                    c = (i.$_$.n6, i.$_$.vc),
                    b = i.$_$.qf,
                    l = i.$_$.c8,
                    d = i.$_$.d8,
                    p = i.$_$.zc,
                    q = i.$_$.fj,
                    y = i.$_$.oi,
                    m = i.$_$.ld,
                    E = i.$_$.g,
                    x = i.$_$.pe;
                function N() {
                    return a || ((a = !0), _([e(0, 8), e(9, 13), e(14, 18), e(19, 23), e(24, 36)]), _([8, 13, 18, 23]), (n = w(h(u(48), u(57)), h(u(97), u(102))))), n;
                }
                function g() {
                    (s = this), (this.uv_1 = _([e(0, 4), e(4, 6), e(6, 8), e(8, 10), e(10, 16)]));
                }
                function T() {
                    return null == s && new g(), s;
                }
                function I(t) {
                    if ((T(), (this.vv_1 = t), 16 !== this.vv_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.vv_1.length;
                        throw $(v(i));
                    }
                }
                f(g),
                    m(I, "Uuid", E, E, [y]),
                    (o(I).toString = function () {
                        for (var t = c(36), i = 0, n = T().uv_1.p(); n.q(); ) {
                            var a = n.r(),
                                s = a.e1_1,
                                e = a.f1_1;
                            if (s <= e)
                                do {
                                    var _ = s;
                                    s = (s + 1) | 0;
                                    var h = this.vv_1[_],
                                        w = (h >> 4) & 15,
                                        r = 15 & h,
                                        o = i;
                                    (i = (o + 1) | 0), (t[o] = N().t(w).p1_1);
                                    var f = i;
                                    (i = (f + 1) | 0), (t[f] = N().t(r).p1_1);
                                } while (_ !== e);
                            if (i < 36) {
                                var v = i;
                                (i = (v + 1) | 0), (t[v] = u(45));
                            }
                        }
                        return b(t);
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
                                var a = p(this.vv_1[n], t.vv_1[n]);
                                if (0 !== a) return a;
                            } while (i < 16);
                        return 0;
                    }),
                    (o(I).d = function (t) {
                        return this.wv(t instanceof I ? t : q());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = r().hl(16);
                        return (t[6] = x((15 & t[6]) | 64)), (t[8] = x((63 & t[8]) | 128)), new I(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.b1e5e20a.js.map
