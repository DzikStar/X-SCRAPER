(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var e,
                    w,
                    b,
                    s,
                    _ = i.$_$.ue,
                    h = i.$_$.sd,
                    r = i.$_$.o6,
                    u = i.$_$.yi,
                    o = i.$_$.rd,
                    f = i.$_$.g,
                    c = i.$_$.kj,
                    $ = i.$_$.y2,
                    x = i.$_$.zc,
                    a = i.$_$.ag,
                    v = n.$_$.g,
                    l = i.$_$.ej,
                    d = i.$_$.xe,
                    p = i.$_$.ve,
                    m = i.$_$.eg,
                    g = i.$_$.we,
                    E = (i.$_$.v5, i.$_$.hd),
                    q = n.$_$.c,
                    N = n.$_$.f,
                    T = i.$_$.vd,
                    I = i.$_$.xd,
                    y = n.$_$.h,
                    O = n.$_$.a;
                function R() {}
                function k(t, i, n) {
                    u.call(this, t, i), (this.kbv_1 = n);
                }
                function A() {}
                function M(t, i) {
                    $(i, this), x(this, M), (this.lbv_1 = t);
                }
                function S(t) {
                    this.ubv_1 = t;
                }
                function C(t, i, n) {
                    for (var e = n, w = 0; e > 0; ) {
                        var b = t.ubv_1.fv(i, w, e);
                        if (-1 === b) throw new v("Expected " + n + " bytes; got " + w);
                        (e = (e - b) | 0), (w = (w + b) | 0);
                    }
                }
                function U() {
                    (b = this), (this.rbw_1 = -65536), (this.sbw_1 = -2147418112), (this.tbw_1 = new G(""));
                }
                function P() {
                    return null == b && new U(), b;
                }
                function z(t, i, n) {
                    P(), (i = i === f ? new l(-1, -1) : i), (n = n === f ? new l(-1, -1) : n), S.call(this, t), (this.vbw_1 = i), (this.wbw_1 = n), (this.xbw_1 = new Int8Array(8)), (this.ybw_1 = !1), (this.zbw_1 = !1);
                }
                function D(t, i, n) {
                    (this.cbx_1 = t), (this.dbx_1 = i), (this.ebx_1 = n);
                }
                function L(t, i) {
                    (this.fbx_1 = t), (this.gbx_1 = i);
                }
                function j(t, i, n) {
                    (this.hbx_1 = t), (this.ibx_1 = i), (this.jbx_1 = n);
                }
                function B(t, i) {
                    (this.kbx_1 = t), (this.lbx_1 = i);
                }
                function G(t) {
                    this.mbx_1 = t;
                }
                function K(t) {
                    (t = t === f ? new N() : t), (this.nbx_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    O(t, this), x(this, F);
                }
                h(R),
                    o(k, "Kind", f, u),
                    h(A),
                    o(M, "ThriftException", f, c),
                    o(S, "BaseProtocol"),
                    h(U),
                    o(z, "BinaryProtocol", f, S),
                    o(D, "FieldMetadata"),
                    o(L, "ListMetadata"),
                    o(j, "MapMetadata"),
                    o(B, "SetMetadata"),
                    o(G, "StructMetadata"),
                    T(V, "Transport"),
                    o(K, "BufferTransport", K, f, [V]),
                    I(W, "ProtocolUtil"),
                    o(F, "ProtocolException", f, y),
                    (_(M).mbv = function (t) {
                        t.nbv("TApplicationException");
                        var i = this.message;
                        null == i || (t.obv("message", 1, 11), t.pbv(i), t.qbv()), t.obv("type", 2, 8), t.rbv(this.lbv_1.kbv_1), t.qbv(), t.sbv(), t.tbv();
                    }),
                    (_(S).e5 = function () {
                        this.ubv_1.e5();
                    }),
                    (_(z).nbv = function (t) {}),
                    (_(z).tbv = function () {}),
                    (_(z).obv = function (t, i, n) {
                        this.m3b(n), this.abx(d(i));
                    }),
                    (_(z).qbv = function () {}),
                    (_(z).sbv = function () {
                        this.m3b(0);
                    }),
                    (_(z).vbv = function (t, i) {
                        this.m3b(t), this.rbv(i);
                    }),
                    (_(z).wbv = function () {}),
                    (_(z).xbv = function (t) {
                        this.m3b(t ? 1 : 0);
                    }),
                    (_(z).m3b = function (t) {
                        (this.xbw_1[0] = t), this.ubv_1.i3b(this.xbw_1, 0, 1);
                    }),
                    (_(z).abx = function (t) {
                        (this.xbw_1[0] = p((t >> 8) & 255)), (this.xbw_1[1] = p(255 & t)), this.ubv_1.i3b(this.xbw_1, 0, 2);
                    }),
                    (_(z).rbv = function (t) {
                        (this.xbw_1[0] = p((t >> 24) & 255)), (this.xbw_1[1] = p((t >> 16) & 255)), (this.xbw_1[2] = p((t >> 8) & 255)), (this.xbw_1[3] = p(255 & t)), this.ubv_1.i3b(this.xbw_1, 0, 4);
                    }),
                    (_(z).ybv = function (t) {
                        (this.xbw_1[0] = t.r3(56).t3(new l(255, 0)).w3()), (this.xbw_1[1] = t.r3(48).t3(new l(255, 0)).w3()), (this.xbw_1[2] = t.r3(40).t3(new l(255, 0)).w3()), (this.xbw_1[3] = t.r3(32).t3(new l(255, 0)).w3()), (this.xbw_1[4] = t.r3(24).t3(new l(255, 0)).w3()), (this.xbw_1[5] = t.r3(16).t3(new l(255, 0)).w3()), (this.xbw_1[6] = t.r3(8).t3(new l(255, 0)).w3()), (this.xbw_1[7] = t.t3(new l(255, 0)).w3()), this.ubv_1.i3b(this.xbw_1, 0, 8);
                    }),
                    (_(z).pbv = function (t) {
                        var i = m(t);
                        this.rbv(i.length), this.ubv_1.bbx(i);
                    }),
                    (_(z).zbv = function (t) {
                        this.rbv(t.s()), this.ubv_1.bbx(t.bu());
                    }),
                    (_(z).abw = function () {
                        return P().tbw_1;
                    }),
                    (_(z).bbw = function () {}),
                    (_(z).cbw = function () {
                        var t = this.tu();
                        return new D("", t, 0 === t ? 0 : this.lbw());
                    }),
                    (_(z).dbw = function () {}),
                    (_(z).ebw = function () {
                        var t = this.tu(),
                            i = this.tu(),
                            n = this.mbw();
                        if (!this.wbw_1.equals(new l(-1, -1)) && g(n).e1(this.wbw_1) > 0) throw new F("Container size limit exceeded");
                        return new j(t, i, n);
                    }),
                    (_(z).fbw = function () {}),
                    (_(z).gbw = function () {
                        var t = this.tu(),
                            i = this.mbw();
                        if (!this.wbw_1.equals(new l(-1, -1)) && g(i).e1(this.wbw_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i);
                    }),
                    (_(z).hbw = function () {}),
                    (_(z).ibw = function () {
                        var t = this.tu(),
                            i = this.mbw();
                        if (!this.wbw_1.equals(new l(-1, -1)) && g(i).e1(this.wbw_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (_(z).jbw = function () {}),
                    (_(z).kbw = function () {
                        return 1 === this.tu();
                    }),
                    (_(z).tu = function () {
                        return C(this, this.xbw_1, 1), this.xbw_1[0];
                    }),
                    (_(z).lbw = function () {
                        return C(this, this.xbw_1, 2), d(((255 & this.xbw_1[0]) << 8) | (255 & this.xbw_1[1]));
                    }),
                    (_(z).mbw = function () {
                        return C(this, this.xbw_1, 4), ((255 & this.xbw_1[0]) << 24) | ((255 & this.xbw_1[1]) << 16) | ((255 & this.xbw_1[2]) << 8) | (255 & this.xbw_1[3]);
                    }),
                    (_(z).nbw = function () {
                        return (
                            C(this, this.xbw_1, 8),
                            g(this.xbw_1[0])
                                .t3(new l(255, 0))
                                .q3(56)
                                .u3(g(this.xbw_1[1]).t3(new l(255, 0)).q3(48))
                                .u3(g(this.xbw_1[2]).t3(new l(255, 0)).q3(40))
                                .u3(g(this.xbw_1[3]).t3(new l(255, 0)).q3(32))
                                .u3(g(this.xbw_1[4]).t3(new l(255, 0)).q3(24))
                                .u3(g(this.xbw_1[5]).t3(new l(255, 0)).q3(16))
                                .u3(g(this.xbw_1[6]).t3(new l(255, 0)).q3(8))
                                .u3(g(this.xbw_1[7]).t3(new l(255, 0)))
                        );
                    }),
                    (_(z).obw = function () {
                        var t = this.nbw();
                        return E(t);
                    }),
                    (_(z).pbw = function () {
                        var t,
                            i,
                            n,
                            e = this.mbw();
                        if (!this.vbw_1.equals(new l(-1, -1)) && g(e).e1(this.vbw_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = e), (n = new Int8Array(i)), C(t, n, i), a(n);
                    }),
                    (_(z).qbw = function () {
                        var t = this.mbw();
                        if (!this.vbw_1.equals(new l(-1, -1)) && g(t).e1(this.vbw_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return C(this, i, i.length), q().st(i);
                    }),
                    (_(K).fv = function (t, i, n) {
                        return this.nbx_1.fv(t, i, n);
                    }),
                    (_(K).i3b = function (t, i, n) {
                        this.nbx_1.kt(t, i, n);
                    }),
                    (_(K).e5 = function () {
                        return this.nbx_1.e5();
                    }),
                    (_(W).obx = function (t, i) {
                        if (2 === i) t.kbw();
                        else if (3 === i) t.tu();
                        else if (6 === i) t.lbw();
                        else if (8 === i) t.mbw();
                        else if (10 === i) t.nbw();
                        else if (4 === i) t.obw();
                        else if (11 === i) t.pbw();
                        else if (12 === i) {
                            t.abw();
                            t: for (;;) {
                                var n = t.cbw();
                                if (0 === n.dbx_1) break t;
                                this.obx(t, n.dbx_1), t.dbw();
                            }
                            t.bbw();
                        } else if (15 === i) {
                            var e = t.gbw(),
                                w = 0,
                                b = e.gbx_1;
                            if (w < b)
                                do {
                                    (w = (w + 1) | 0), this.obx(t, e.fbx_1);
                                } while (w < b);
                            t.hbw();
                        } else if (14 === i) {
                            var s = t.ibw(),
                                _ = 0,
                                h = s.lbx_1;
                            if (_ < h)
                                do {
                                    (_ = (_ + 1) | 0), this.obx(t, s.kbx_1);
                                } while (_ < h);
                            t.jbw();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var r = t.ebw(),
                                u = 0,
                                o = r.jbx_1;
                            if (u < o)
                                do {
                                    (u = (u + 1) | 0), this.obx(t, r.hbx_1), this.obx(t, r.ibx_1);
                                } while (u < o);
                            t.fbw();
                        }
                    }),
                    (_(K).bbx = function (t) {
                        this.i3b(t, 0, t.length);
                    }),
                    new R(),
                    new A(),
                    (s = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = z),
                    (t.$_$.b = K),
                    (t.$_$.c = M),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (w) return r;
                                (w = !0), new k("UNKNOWN", 0, 0), new k("UNKNOWN_METHOD", 1, 1), new k("INVALID_MESSAGE_TYPE", 2, 2), new k("WRONG_METHOD_NAME", 3, 3), new k("BAD_SEQUENCE_ID", 4, 4), new k("MISSING_RESULT", 5, 5), new k("INTERNAL_ERROR", 6, 6), (e = new k("PROTOCOL_ERROR", 7, 7)), new k("INVALID_TRANSFORM", 8, 8), new k("INVALID_PROTOCOL", 9, 9), new k("UNSUPPORTED_CLIENT_TYPE", 10, 10);
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
                    w,
                    b = i.$_$.pf,
                    s = i.$_$.ba,
                    _ = i.$_$.o3,
                    h = i.$_$.t3,
                    r = i.$_$.qa,
                    u = i.$_$.b6,
                    o = i.$_$.ue,
                    f = i.$_$.sd,
                    c = i.$_$.ye,
                    $ = i.$_$.h2,
                    x = (i.$_$.o6, i.$_$.bd),
                    a = i.$_$.wf,
                    v = i.$_$.f8,
                    l = i.$_$.h8,
                    d = i.$_$.fd,
                    p = i.$_$.lj,
                    m = i.$_$.ui,
                    g = i.$_$.rd,
                    E = i.$_$.g,
                    q = i.$_$.ve;
                function N() {
                    return e || ((e = !0), s([b(0, 8), b(9, 13), b(14, 18), b(19, 23), b(24, 36)]), s([8, 13, 18, 23]), (n = r(h(_(48), _(57)), h(_(97), _(102))))), n;
                }
                function T() {
                    (w = this), (this.bw_1 = s([b(0, 4), b(4, 6), b(6, 8), b(8, 10), b(10, 16)]));
                }
                function I() {
                    return null == w && new T(), w;
                }
                function y(t) {
                    if ((I(), (this.cw_1 = t), 16 !== this.cw_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.cw_1.length;
                        throw $(c(i));
                    }
                }
                f(T),
                    g(y, "Uuid", E, E, [m]),
                    (o(y).toString = function () {
                        for (var t = x(36), i = 0, n = I().bw_1.p(); n.q(); ) {
                            var e = n.r(),
                                w = e.f1_1,
                                b = e.g1_1;
                            if (w <= b)
                                do {
                                    var s = w;
                                    w = (w + 1) | 0;
                                    var h = this.cw_1[s],
                                        r = (h >> 4) & 15,
                                        u = 15 & h,
                                        o = i;
                                    (i = (o + 1) | 0), (t[o] = N().t(r).r1_1);
                                    var f = i;
                                    (i = (f + 1) | 0), (t[f] = N().t(u).r1_1);
                                } while (s !== b);
                            if (i < 36) {
                                var c = i;
                                (i = (c + 1) | 0), (t[c] = _(45));
                            }
                        }
                        return a(t);
                    }),
                    (o(y).equals = function (t) {
                        return t instanceof y && v(this.cw_1, t.cw_1);
                    }),
                    (o(y).hashCode = function () {
                        return l(this.cw_1);
                    }),
                    (o(y).dw = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var e = d(this.cw_1[n], t.cw_1[n]);
                                if (0 !== e) return e;
                            } while (i < 16);
                        return 0;
                    }),
                    (o(y).d = function (t) {
                        return this.dw(t instanceof y ? t : p());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = u().ol(16);
                        return (t[6] = q((15 & t[6]) | 64)), (t[8] = q((63 & t[8]) | 128)), new y(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.8eda91aa.js.map
