(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var e,
                    b,
                    w,
                    s,
                    _ = i.$_$.ue,
                    u = i.$_$.sd,
                    h = i.$_$.o6,
                    r = i.$_$.yi,
                    o = i.$_$.rd,
                    f = i.$_$.g,
                    c = i.$_$.kj,
                    $ = i.$_$.y2,
                    a = i.$_$.zc,
                    v = i.$_$.ag,
                    l = n.$_$.g,
                    d = i.$_$.ej,
                    x = i.$_$.xe,
                    p = i.$_$.ve,
                    g = i.$_$.eg,
                    E = i.$_$.we,
                    q = (i.$_$.v5, i.$_$.hd),
                    y = n.$_$.c,
                    N = n.$_$.f,
                    m = i.$_$.vd,
                    T = i.$_$.xd,
                    k = n.$_$.h,
                    I = n.$_$.a;
                function O() {}
                function R(t, i, n) {
                    r.call(this, t, i), (this.hbv_1 = n);
                }
                function j() {}
                function A(t, i) {
                    $(i, this), a(this, A), (this.ibv_1 = t);
                }
                function M(t) {
                    this.rbv_1 = t;
                }
                function S(t, i, n) {
                    for (var e = n, b = 0; e > 0; ) {
                        var w = t.rbv_1.fv(i, b, e);
                        if (-1 === w) throw new l("Expected " + n + " bytes; got " + b);
                        (e = (e - w) | 0), (b = (b + w) | 0);
                    }
                }
                function C() {
                    (w = this), (this.obw_1 = -65536), (this.pbw_1 = -2147418112), (this.qbw_1 = new G(""));
                }
                function U() {
                    return null == w && new C(), w;
                }
                function z(t, i, n) {
                    U(), (i = i === f ? new d(-1, -1) : i), (n = n === f ? new d(-1, -1) : n), M.call(this, t), (this.sbw_1 = i), (this.tbw_1 = n), (this.ubw_1 = new Int8Array(8)), (this.vbw_1 = !1), (this.wbw_1 = !1);
                }
                function P(t, i, n) {
                    (this.zbw_1 = t), (this.abx_1 = i), (this.bbx_1 = n);
                }
                function D(t, i) {
                    (this.cbx_1 = t), (this.dbx_1 = i);
                }
                function L(t, i, n) {
                    (this.ebx_1 = t), (this.fbx_1 = i), (this.gbx_1 = n);
                }
                function B(t, i) {
                    (this.hbx_1 = t), (this.ibx_1 = i);
                }
                function G(t) {
                    this.jbx_1 = t;
                }
                function K(t) {
                    (t = t === f ? new N() : t), (this.kbx_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    I(t, this), a(this, F);
                }
                u(O),
                    o(R, "Kind", f, r),
                    u(j),
                    o(A, "ThriftException", f, c),
                    o(M, "BaseProtocol"),
                    u(C),
                    o(z, "BinaryProtocol", f, M),
                    o(P, "FieldMetadata"),
                    o(D, "ListMetadata"),
                    o(L, "MapMetadata"),
                    o(B, "SetMetadata"),
                    o(G, "StructMetadata"),
                    m(V, "Transport"),
                    o(K, "BufferTransport", K, f, [V]),
                    T(W, "ProtocolUtil"),
                    o(F, "ProtocolException", f, k),
                    (_(A).jbv = function (t) {
                        t.kbv("TApplicationException");
                        var i = this.message;
                        null == i || (t.lbv("message", 1, 11), t.mbv(i), t.nbv()), t.lbv("type", 2, 8), t.obv(this.ibv_1.hbv_1), t.nbv(), t.pbv(), t.qbv();
                    }),
                    (_(M).e5 = function () {
                        this.rbv_1.e5();
                    }),
                    (_(z).kbv = function (t) {}),
                    (_(z).qbv = function () {}),
                    (_(z).lbv = function (t, i, n) {
                        this.m3b(n), this.xbw(x(i));
                    }),
                    (_(z).nbv = function () {}),
                    (_(z).pbv = function () {
                        this.m3b(0);
                    }),
                    (_(z).sbv = function (t, i) {
                        this.m3b(t), this.obv(i);
                    }),
                    (_(z).tbv = function () {}),
                    (_(z).ubv = function (t) {
                        this.m3b(t ? 1 : 0);
                    }),
                    (_(z).m3b = function (t) {
                        (this.ubw_1[0] = t), this.rbv_1.i3b(this.ubw_1, 0, 1);
                    }),
                    (_(z).xbw = function (t) {
                        (this.ubw_1[0] = p((t >> 8) & 255)), (this.ubw_1[1] = p(255 & t)), this.rbv_1.i3b(this.ubw_1, 0, 2);
                    }),
                    (_(z).obv = function (t) {
                        (this.ubw_1[0] = p((t >> 24) & 255)), (this.ubw_1[1] = p((t >> 16) & 255)), (this.ubw_1[2] = p((t >> 8) & 255)), (this.ubw_1[3] = p(255 & t)), this.rbv_1.i3b(this.ubw_1, 0, 4);
                    }),
                    (_(z).vbv = function (t) {
                        (this.ubw_1[0] = t.r3(56).t3(new d(255, 0)).w3()), (this.ubw_1[1] = t.r3(48).t3(new d(255, 0)).w3()), (this.ubw_1[2] = t.r3(40).t3(new d(255, 0)).w3()), (this.ubw_1[3] = t.r3(32).t3(new d(255, 0)).w3()), (this.ubw_1[4] = t.r3(24).t3(new d(255, 0)).w3()), (this.ubw_1[5] = t.r3(16).t3(new d(255, 0)).w3()), (this.ubw_1[6] = t.r3(8).t3(new d(255, 0)).w3()), (this.ubw_1[7] = t.t3(new d(255, 0)).w3()), this.rbv_1.i3b(this.ubw_1, 0, 8);
                    }),
                    (_(z).mbv = function (t) {
                        var i = g(t);
                        this.obv(i.length), this.rbv_1.ybw(i);
                    }),
                    (_(z).wbv = function (t) {
                        this.obv(t.s()), this.rbv_1.ybw(t.bu());
                    }),
                    (_(z).xbv = function () {
                        return U().qbw_1;
                    }),
                    (_(z).ybv = function () {}),
                    (_(z).zbv = function () {
                        var t = this.tu();
                        return new P("", t, 0 === t ? 0 : this.ibw());
                    }),
                    (_(z).abw = function () {}),
                    (_(z).bbw = function () {
                        var t = this.tu(),
                            i = this.tu(),
                            n = this.jbw();
                        if (!this.tbw_1.equals(new d(-1, -1)) && E(n).e1(this.tbw_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i, n);
                    }),
                    (_(z).cbw = function () {}),
                    (_(z).dbw = function () {
                        var t = this.tu(),
                            i = this.jbw();
                        if (!this.tbw_1.equals(new d(-1, -1)) && E(i).e1(this.tbw_1) > 0) throw new F("Container size limit exceeded");
                        return new D(t, i);
                    }),
                    (_(z).ebw = function () {}),
                    (_(z).fbw = function () {
                        var t = this.tu(),
                            i = this.jbw();
                        if (!this.tbw_1.equals(new d(-1, -1)) && E(i).e1(this.tbw_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (_(z).gbw = function () {}),
                    (_(z).hbw = function () {
                        return 1 === this.tu();
                    }),
                    (_(z).tu = function () {
                        return S(this, this.ubw_1, 1), this.ubw_1[0];
                    }),
                    (_(z).ibw = function () {
                        return S(this, this.ubw_1, 2), x(((255 & this.ubw_1[0]) << 8) | (255 & this.ubw_1[1]));
                    }),
                    (_(z).jbw = function () {
                        return S(this, this.ubw_1, 4), ((255 & this.ubw_1[0]) << 24) | ((255 & this.ubw_1[1]) << 16) | ((255 & this.ubw_1[2]) << 8) | (255 & this.ubw_1[3]);
                    }),
                    (_(z).kbw = function () {
                        return (
                            S(this, this.ubw_1, 8),
                            E(this.ubw_1[0])
                                .t3(new d(255, 0))
                                .q3(56)
                                .u3(E(this.ubw_1[1]).t3(new d(255, 0)).q3(48))
                                .u3(E(this.ubw_1[2]).t3(new d(255, 0)).q3(40))
                                .u3(E(this.ubw_1[3]).t3(new d(255, 0)).q3(32))
                                .u3(E(this.ubw_1[4]).t3(new d(255, 0)).q3(24))
                                .u3(E(this.ubw_1[5]).t3(new d(255, 0)).q3(16))
                                .u3(E(this.ubw_1[6]).t3(new d(255, 0)).q3(8))
                                .u3(E(this.ubw_1[7]).t3(new d(255, 0)))
                        );
                    }),
                    (_(z).lbw = function () {
                        var t = this.kbw();
                        return q(t);
                    }),
                    (_(z).mbw = function () {
                        var t,
                            i,
                            n,
                            e = this.jbw();
                        if (!this.sbw_1.equals(new d(-1, -1)) && E(e).e1(this.sbw_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = e), (n = new Int8Array(i)), S(t, n, i), v(n);
                    }),
                    (_(z).nbw = function () {
                        var t = this.jbw();
                        if (!this.sbw_1.equals(new d(-1, -1)) && E(t).e1(this.sbw_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return S(this, i, i.length), y().st(i);
                    }),
                    (_(K).fv = function (t, i, n) {
                        return this.kbx_1.fv(t, i, n);
                    }),
                    (_(K).i3b = function (t, i, n) {
                        this.kbx_1.kt(t, i, n);
                    }),
                    (_(K).e5 = function () {
                        return this.kbx_1.e5();
                    }),
                    (_(W).lbx = function (t, i) {
                        if (2 === i) t.hbw();
                        else if (3 === i) t.tu();
                        else if (6 === i) t.ibw();
                        else if (8 === i) t.jbw();
                        else if (10 === i) t.kbw();
                        else if (4 === i) t.lbw();
                        else if (11 === i) t.mbw();
                        else if (12 === i) {
                            t.xbv();
                            t: for (;;) {
                                var n = t.zbv();
                                if (0 === n.abx_1) break t;
                                this.lbx(t, n.abx_1), t.abw();
                            }
                            t.ybv();
                        } else if (15 === i) {
                            var e = t.dbw(),
                                b = 0,
                                w = e.dbx_1;
                            if (b < w)
                                do {
                                    (b = (b + 1) | 0), this.lbx(t, e.cbx_1);
                                } while (b < w);
                            t.ebw();
                        } else if (14 === i) {
                            var s = t.fbw(),
                                _ = 0,
                                u = s.ibx_1;
                            if (_ < u)
                                do {
                                    (_ = (_ + 1) | 0), this.lbx(t, s.hbx_1);
                                } while (_ < u);
                            t.gbw();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var h = t.bbw(),
                                r = 0,
                                o = h.gbx_1;
                            if (r < o)
                                do {
                                    (r = (r + 1) | 0), this.lbx(t, h.ebx_1), this.lbx(t, h.fbx_1);
                                } while (r < o);
                            t.cbw();
                        }
                    }),
                    (_(K).ybw = function (t) {
                        this.i3b(t, 0, t.length);
                    }),
                    new O(),
                    new j(),
                    (s = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = z),
                    (t.$_$.b = K),
                    (t.$_$.c = A),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (b) return h;
                                (b = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (e = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            e
                        );
                    }),
                    (t.$_$.e = s);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    e,
                    b,
                    w = i.$_$.pf,
                    s = i.$_$.ba,
                    _ = i.$_$.o3,
                    u = i.$_$.t3,
                    h = i.$_$.qa,
                    r = i.$_$.b6,
                    o = i.$_$.ue,
                    f = i.$_$.sd,
                    c = i.$_$.ye,
                    $ = i.$_$.h2,
                    a = (i.$_$.o6, i.$_$.bd),
                    v = i.$_$.wf,
                    l = i.$_$.f8,
                    d = i.$_$.h8,
                    x = i.$_$.fd,
                    p = i.$_$.lj,
                    g = i.$_$.ui,
                    E = i.$_$.rd,
                    q = i.$_$.g,
                    y = i.$_$.ve;
                function N() {
                    return e || ((e = !0), s([w(0, 8), w(9, 13), w(14, 18), w(19, 23), w(24, 36)]), s([8, 13, 18, 23]), (n = h(u(_(48), _(57)), u(_(97), _(102))))), n;
                }
                function m() {
                    (b = this), (this.bw_1 = s([w(0, 4), w(4, 6), w(6, 8), w(8, 10), w(10, 16)]));
                }
                function T() {
                    return null == b && new m(), b;
                }
                function k(t) {
                    if ((T(), (this.cw_1 = t), 16 !== this.cw_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.cw_1.length;
                        throw $(c(i));
                    }
                }
                f(m),
                    E(k, "Uuid", q, q, [g]),
                    (o(k).toString = function () {
                        for (var t = a(36), i = 0, n = T().bw_1.p(); n.q(); ) {
                            var e = n.r(),
                                b = e.f1_1,
                                w = e.g1_1;
                            if (b <= w)
                                do {
                                    var s = b;
                                    b = (b + 1) | 0;
                                    var u = this.cw_1[s],
                                        h = (u >> 4) & 15,
                                        r = 15 & u,
                                        o = i;
                                    (i = (o + 1) | 0), (t[o] = N().t(h).r1_1);
                                    var f = i;
                                    (i = (f + 1) | 0), (t[f] = N().t(r).r1_1);
                                } while (s !== w);
                            if (i < 36) {
                                var c = i;
                                (i = (c + 1) | 0), (t[c] = _(45));
                            }
                        }
                        return v(t);
                    }),
                    (o(k).equals = function (t) {
                        return t instanceof k && l(this.cw_1, t.cw_1);
                    }),
                    (o(k).hashCode = function () {
                        return d(this.cw_1);
                    }),
                    (o(k).dw = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var e = x(this.cw_1[n], t.cw_1[n]);
                                if (0 !== e) return e;
                            } while (i < 16);
                        return 0;
                    }),
                    (o(k).d = function (t) {
                        return this.dw(t instanceof k ? t : p());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = r().ol(16);
                        return (t[6] = y((15 & t[6]) | 64)), (t[8] = y((63 & t[8]) | 128)), new k(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.f7929aea.js.map
