(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var c,
                    e,
                    s,
                    _,
                    h = i.$_$.ve,
                    r = i.$_$.td,
                    u = i.$_$.o6,
                    o = i.$_$.cj,
                    f = i.$_$.sd,
                    a = i.$_$.g,
                    $ = i.$_$.oj,
                    w = i.$_$.y2,
                    l = i.$_$.zc,
                    b = i.$_$.dg,
                    z = n.$_$.g,
                    d = i.$_$.ij,
                    v = i.$_$.ye,
                    p = i.$_$.we,
                    q = i.$_$.ig,
                    g = i.$_$.xe,
                    x = (i.$_$.v5, i.$_$.hd),
                    E = n.$_$.c,
                    y = n.$_$.f,
                    m = i.$_$.wd,
                    N = i.$_$.yd,
                    T = n.$_$.h,
                    I = n.$_$.a;
                function O() {}
                function R(t, i, n) {
                    o.call(this, t, i), (this.nbz_1 = n);
                }
                function A() {}
                function M(t, i) {
                    w(i, this), l(this, M), (this.obz_1 = t);
                }
                function S(t) {
                    this.xbz_1 = t;
                }
                function C(t, i, n) {
                    for (var c = n, e = 0; c > 0; ) {
                        var s = t.xbz_1.fv(i, e, c);
                        if (-1 === s) throw new z("Expected " + n + " bytes; got " + e);
                        (c = (c - s) | 0), (e = (e + s) | 0);
                    }
                }
                function U() {
                    (s = this), (this.uc0_1 = -65536), (this.vc0_1 = -2147418112), (this.wc0_1 = new G(""));
                }
                function k() {
                    return null == s && new U(), s;
                }
                function P(t, i, n) {
                    k(), (i = i === a ? new d(-1, -1) : i), (n = n === a ? new d(-1, -1) : n), S.call(this, t), (this.yc0_1 = i), (this.zc0_1 = n), (this.ac1_1 = new Int8Array(8)), (this.bc1_1 = !1), (this.cc1_1 = !1);
                }
                function D(t, i, n) {
                    (this.fc1_1 = t), (this.gc1_1 = i), (this.hc1_1 = n);
                }
                function L(t, i) {
                    (this.ic1_1 = t), (this.jc1_1 = i);
                }
                function j(t, i, n) {
                    (this.kc1_1 = t), (this.lc1_1 = i), (this.mc1_1 = n);
                }
                function B(t, i) {
                    (this.nc1_1 = t), (this.oc1_1 = i);
                }
                function G(t) {
                    this.pc1_1 = t;
                }
                function K(t) {
                    (t = t === a ? new y() : t), (this.qc1_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    I(t, this), l(this, F);
                }
                r(O),
                    f(R, "Kind", a, o),
                    r(A),
                    f(M, "ThriftException", a, $),
                    f(S, "BaseProtocol"),
                    r(U),
                    f(P, "BinaryProtocol", a, S),
                    f(D, "FieldMetadata"),
                    f(L, "ListMetadata"),
                    f(j, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    m(V, "Transport"),
                    f(K, "BufferTransport", K, a, [V]),
                    N(W, "ProtocolUtil"),
                    f(F, "ProtocolException", a, T),
                    (h(M).pbz = function (t) {
                        t.qbz("TApplicationException");
                        var i = this.message;
                        null == i || (t.rbz("message", 1, 11), t.sbz(i), t.tbz()), t.rbz("type", 2, 8), t.ubz(this.obz_1.nbz_1), t.tbz(), t.vbz(), t.wbz();
                    }),
                    (h(S).e5 = function () {
                        this.xbz_1.e5();
                    }),
                    (h(P).qbz = function (t) {}),
                    (h(P).wbz = function () {}),
                    (h(P).rbz = function (t, i, n) {
                        this.q39(n), this.dc1(v(i));
                    }),
                    (h(P).tbz = function () {}),
                    (h(P).vbz = function () {
                        this.q39(0);
                    }),
                    (h(P).ybz = function (t, i) {
                        this.q39(t), this.ubz(i);
                    }),
                    (h(P).zbz = function () {}),
                    (h(P).ac0 = function (t) {
                        this.q39(t ? 1 : 0);
                    }),
                    (h(P).q39 = function (t) {
                        (this.ac1_1[0] = t), this.xbz_1.m39(this.ac1_1, 0, 1);
                    }),
                    (h(P).dc1 = function (t) {
                        (this.ac1_1[0] = p((t >> 8) & 255)), (this.ac1_1[1] = p(255 & t)), this.xbz_1.m39(this.ac1_1, 0, 2);
                    }),
                    (h(P).ubz = function (t) {
                        (this.ac1_1[0] = p((t >> 24) & 255)), (this.ac1_1[1] = p((t >> 16) & 255)), (this.ac1_1[2] = p((t >> 8) & 255)), (this.ac1_1[3] = p(255 & t)), this.xbz_1.m39(this.ac1_1, 0, 4);
                    }),
                    (h(P).bc0 = function (t) {
                        (this.ac1_1[0] = t.r3(56).t3(new d(255, 0)).w3()), (this.ac1_1[1] = t.r3(48).t3(new d(255, 0)).w3()), (this.ac1_1[2] = t.r3(40).t3(new d(255, 0)).w3()), (this.ac1_1[3] = t.r3(32).t3(new d(255, 0)).w3()), (this.ac1_1[4] = t.r3(24).t3(new d(255, 0)).w3()), (this.ac1_1[5] = t.r3(16).t3(new d(255, 0)).w3()), (this.ac1_1[6] = t.r3(8).t3(new d(255, 0)).w3()), (this.ac1_1[7] = t.t3(new d(255, 0)).w3()), this.xbz_1.m39(this.ac1_1, 0, 8);
                    }),
                    (h(P).sbz = function (t) {
                        var i = q(t);
                        this.ubz(i.length), this.xbz_1.ec1(i);
                    }),
                    (h(P).cc0 = function (t) {
                        this.ubz(t.s()), this.xbz_1.ec1(t.bu());
                    }),
                    (h(P).dc0 = function () {
                        return k().wc0_1;
                    }),
                    (h(P).ec0 = function () {}),
                    (h(P).fc0 = function () {
                        var t = this.tu();
                        return new D("", t, 0 === t ? 0 : this.oc0());
                    }),
                    (h(P).gc0 = function () {}),
                    (h(P).hc0 = function () {
                        var t = this.tu(),
                            i = this.tu(),
                            n = this.pc0();
                        if (!this.zc0_1.equals(new d(-1, -1)) && g(n).e1(this.zc0_1) > 0) throw new F("Container size limit exceeded");
                        return new j(t, i, n);
                    }),
                    (h(P).ic0 = function () {}),
                    (h(P).jc0 = function () {
                        var t = this.tu(),
                            i = this.pc0();
                        if (!this.zc0_1.equals(new d(-1, -1)) && g(i).e1(this.zc0_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i);
                    }),
                    (h(P).kc0 = function () {}),
                    (h(P).lc0 = function () {
                        var t = this.tu(),
                            i = this.pc0();
                        if (!this.zc0_1.equals(new d(-1, -1)) && g(i).e1(this.zc0_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (h(P).mc0 = function () {}),
                    (h(P).nc0 = function () {
                        return 1 === this.tu();
                    }),
                    (h(P).tu = function () {
                        return C(this, this.ac1_1, 1), this.ac1_1[0];
                    }),
                    (h(P).oc0 = function () {
                        return C(this, this.ac1_1, 2), v(((255 & this.ac1_1[0]) << 8) | (255 & this.ac1_1[1]));
                    }),
                    (h(P).pc0 = function () {
                        return C(this, this.ac1_1, 4), ((255 & this.ac1_1[0]) << 24) | ((255 & this.ac1_1[1]) << 16) | ((255 & this.ac1_1[2]) << 8) | (255 & this.ac1_1[3]);
                    }),
                    (h(P).qc0 = function () {
                        return (
                            C(this, this.ac1_1, 8),
                            g(this.ac1_1[0])
                                .t3(new d(255, 0))
                                .q3(56)
                                .u3(g(this.ac1_1[1]).t3(new d(255, 0)).q3(48))
                                .u3(g(this.ac1_1[2]).t3(new d(255, 0)).q3(40))
                                .u3(g(this.ac1_1[3]).t3(new d(255, 0)).q3(32))
                                .u3(g(this.ac1_1[4]).t3(new d(255, 0)).q3(24))
                                .u3(g(this.ac1_1[5]).t3(new d(255, 0)).q3(16))
                                .u3(g(this.ac1_1[6]).t3(new d(255, 0)).q3(8))
                                .u3(g(this.ac1_1[7]).t3(new d(255, 0)))
                        );
                    }),
                    (h(P).rc0 = function () {
                        var t = this.qc0();
                        return x(t);
                    }),
                    (h(P).sc0 = function () {
                        var t,
                            i,
                            n,
                            c = this.pc0();
                        if (!this.yc0_1.equals(new d(-1, -1)) && g(c).e1(this.yc0_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = c), (n = new Int8Array(i)), C(t, n, i), b(n);
                    }),
                    (h(P).tc0 = function () {
                        var t = this.pc0();
                        if (!this.yc0_1.equals(new d(-1, -1)) && g(t).e1(this.yc0_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return C(this, i, i.length), E().st(i);
                    }),
                    (h(K).fv = function (t, i, n) {
                        return this.qc1_1.fv(t, i, n);
                    }),
                    (h(K).m39 = function (t, i, n) {
                        this.qc1_1.kt(t, i, n);
                    }),
                    (h(K).e5 = function () {
                        return this.qc1_1.e5();
                    }),
                    (h(W).rc1 = function (t, i) {
                        if (2 === i) t.nc0();
                        else if (3 === i) t.tu();
                        else if (6 === i) t.oc0();
                        else if (8 === i) t.pc0();
                        else if (10 === i) t.qc0();
                        else if (4 === i) t.rc0();
                        else if (11 === i) t.sc0();
                        else if (12 === i) {
                            t.dc0();
                            t: for (;;) {
                                var n = t.fc0();
                                if (0 === n.gc1_1) break t;
                                this.rc1(t, n.gc1_1), t.gc0();
                            }
                            t.ec0();
                        } else if (15 === i) {
                            var c = t.jc0(),
                                e = 0,
                                s = c.jc1_1;
                            if (e < s)
                                do {
                                    (e = (e + 1) | 0), this.rc1(t, c.ic1_1);
                                } while (e < s);
                            t.kc0();
                        } else if (14 === i) {
                            var _ = t.lc0(),
                                h = 0,
                                r = _.oc1_1;
                            if (h < r)
                                do {
                                    (h = (h + 1) | 0), this.rc1(t, _.nc1_1);
                                } while (h < r);
                            t.mc0();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var u = t.hc0(),
                                o = 0,
                                f = u.mc1_1;
                            if (o < f)
                                do {
                                    (o = (o + 1) | 0), this.rc1(t, u.kc1_1), this.rc1(t, u.lc1_1);
                                } while (o < f);
                            t.ic0();
                        }
                    }),
                    (h(K).ec1 = function (t) {
                        this.m39(t, 0, t.length);
                    }),
                    new O(),
                    new A(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = P),
                    (t.$_$.b = K),
                    (t.$_$.c = M),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (e) return u;
                                (e = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (c = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            c
                        );
                    }),
                    (t.$_$.e = _);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    c,
                    e,
                    s = i.$_$.qf,
                    _ = i.$_$.ba,
                    h = i.$_$.o3,
                    r = i.$_$.t3,
                    u = i.$_$.qa,
                    o = i.$_$.b6,
                    f = i.$_$.ve,
                    a = i.$_$.td,
                    $ = i.$_$.ze,
                    w = i.$_$.h2,
                    l = (i.$_$.o6, i.$_$.bd),
                    b = i.$_$.zf,
                    z = i.$_$.f8,
                    d = i.$_$.h8,
                    v = i.$_$.fd,
                    p = i.$_$.pj,
                    q = i.$_$.yi,
                    g = i.$_$.sd,
                    x = i.$_$.g,
                    E = i.$_$.we;
                function y() {
                    return c || ((c = !0), _([s(0, 8), s(9, 13), s(14, 18), s(19, 23), s(24, 36)]), _([8, 13, 18, 23]), (n = u(r(h(48), h(57)), r(h(97), h(102))))), n;
                }
                function m() {
                    (e = this), (this.bw_1 = _([s(0, 4), s(4, 6), s(6, 8), s(8, 10), s(10, 16)]));
                }
                function N() {
                    return null == e && new m(), e;
                }
                function T(t) {
                    if ((N(), (this.cw_1 = t), 16 !== this.cw_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.cw_1.length;
                        throw w($(i));
                    }
                }
                a(m),
                    g(T, "Uuid", x, x, [q]),
                    (f(T).toString = function () {
                        for (var t = l(36), i = 0, n = N().bw_1.p(); n.q(); ) {
                            var c = n.r(),
                                e = c.f1_1,
                                s = c.g1_1;
                            if (e <= s)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var r = this.cw_1[_],
                                        u = (r >> 4) & 15,
                                        o = 15 & r,
                                        f = i;
                                    (i = (f + 1) | 0), (t[f] = y().t(u).r1_1);
                                    var a = i;
                                    (i = (a + 1) | 0), (t[a] = y().t(o).r1_1);
                                } while (_ !== s);
                            if (i < 36) {
                                var $ = i;
                                (i = ($ + 1) | 0), (t[$] = h(45));
                            }
                        }
                        return b(t);
                    }),
                    (f(T).equals = function (t) {
                        return t instanceof T && z(this.cw_1, t.cw_1);
                    }),
                    (f(T).hashCode = function () {
                        return d(this.cw_1);
                    }),
                    (f(T).dw = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var c = v(this.cw_1[n], t.cw_1[n]);
                                if (0 !== c) return c;
                            } while (i < 16);
                        return 0;
                    }),
                    (f(T).d = function (t) {
                        return this.dw(t instanceof T ? t : p());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().ol(16);
                        return (t[6] = E((15 & t[6]) | 64)), (t[8] = E((63 & t[8]) | 128)), new T(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.e7ed7cca.js.map
