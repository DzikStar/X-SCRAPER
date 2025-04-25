(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (n, t, i) => {
            !(function (n, t, i) {
                "use strict";
                var a,
                    e,
                    o,
                    s,
                    _ = t.$_$.ke,
                    h = t.$_$.id,
                    r = t.$_$.l6,
                    u = t.$_$.ii,
                    f = t.$_$.hd,
                    c = t.$_$.g,
                    $ = t.$_$.ui,
                    w = t.$_$.y2,
                    l = t.$_$.pc,
                    v = t.$_$.pf,
                    d = i.$_$.g,
                    p = t.$_$.oi,
                    x = t.$_$.ne,
                    E = t.$_$.le,
                    g = t.$_$.tf,
                    q = t.$_$.me,
                    N = (t.$_$.t5, t.$_$.xc),
                    b = i.$_$.c,
                    m = i.$_$.f,
                    T = t.$_$.ld,
                    k = t.$_$.nd,
                    I = i.$_$.h,
                    y = i.$_$.a;
                function O() {}
                function R(n, t, i) {
                    u.call(this, n, t), (this.aan_1 = i);
                }
                function j() {}
                function A(n, t) {
                    w(t, this), l(this, A), (this.ban_1 = n);
                }
                function M(n) {
                    this.kan_1 = n;
                }
                function S(n, t, i) {
                    for (var a = i, e = 0; a > 0; ) {
                        var o = n.kan_1.vu(t, e, a);
                        if (-1 === o) throw new d("Expected " + i + " bytes; got " + e);
                        (a = (a - o) | 0), (e = (e + o) | 0);
                    }
                }
                function z() {
                    (o = this), (this.hao_1 = -65536), (this.iao_1 = -2147418112), (this.jao_1 = new G(""));
                }
                function C() {
                    return null == o && new z(), o;
                }
                function U(n, t, i) {
                    C(), (t = t === c ? new p(-1, -1) : t), (i = i === c ? new p(-1, -1) : i), M.call(this, n), (this.lao_1 = t), (this.mao_1 = i), (this.nao_1 = new Int8Array(8)), (this.oao_1 = !1), (this.pao_1 = !1);
                }
                function P(n, t, i) {
                    (this.sao_1 = n), (this.tao_1 = t), (this.uao_1 = i);
                }
                function D(n, t) {
                    (this.vao_1 = n), (this.wao_1 = t);
                }
                function L(n, t, i) {
                    (this.xao_1 = n), (this.yao_1 = t), (this.zao_1 = i);
                }
                function B(n, t) {
                    (this.aap_1 = n), (this.bap_1 = t);
                }
                function G(n) {
                    this.cap_1 = n;
                }
                function K(n) {
                    (n = n === c ? new m() : n), (this.dap_1 = n);
                }
                function V() {}
                function W() {}
                function F(n) {
                    y(n, this), l(this, F);
                }
                h(O),
                    f(R, "Kind", c, u),
                    h(j),
                    f(A, "ThriftException", c, $),
                    f(M, "BaseProtocol"),
                    h(z),
                    f(U, "BinaryProtocol", c, M),
                    f(P, "FieldMetadata"),
                    f(D, "ListMetadata"),
                    f(L, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    T(V, "Transport"),
                    f(K, "BufferTransport", K, c, [V]),
                    k(W, "ProtocolUtil"),
                    f(F, "ProtocolException", c, I),
                    (_(A).can = function (n) {
                        n.dan("TApplicationException");
                        var t = this.message;
                        null == t || (n.ean("message", 1, 11), n.fan(t), n.gan()), n.ean("type", 2, 8), n.han(this.ban_1.aan_1), n.gan(), n.ian(), n.jan();
                    }),
                    (_(M).x4 = function () {
                        this.kan_1.x4();
                    }),
                    (_(U).dan = function (n) {}),
                    (_(U).jan = function () {}),
                    (_(U).ean = function (n, t, i) {
                        this.e38(i), this.qao(x(t));
                    }),
                    (_(U).gan = function () {}),
                    (_(U).ian = function () {
                        this.e38(0);
                    }),
                    (_(U).lan = function (n, t) {
                        this.e38(n), this.han(t);
                    }),
                    (_(U).man = function () {}),
                    (_(U).nan = function (n) {
                        this.e38(n ? 1 : 0);
                    }),
                    (_(U).e38 = function (n) {
                        (this.nao_1[0] = n), this.kan_1.a38(this.nao_1, 0, 1);
                    }),
                    (_(U).qao = function (n) {
                        (this.nao_1[0] = E((n >> 8) & 255)), (this.nao_1[1] = E(255 & n)), this.kan_1.a38(this.nao_1, 0, 2);
                    }),
                    (_(U).han = function (n) {
                        (this.nao_1[0] = E((n >> 24) & 255)), (this.nao_1[1] = E((n >> 16) & 255)), (this.nao_1[2] = E((n >> 8) & 255)), (this.nao_1[3] = E(255 & n)), this.kan_1.a38(this.nao_1, 0, 4);
                    }),
                    (_(U).oan = function (n) {
                        (this.nao_1[0] = n.q3(56).s3(new p(255, 0)).v3()), (this.nao_1[1] = n.q3(48).s3(new p(255, 0)).v3()), (this.nao_1[2] = n.q3(40).s3(new p(255, 0)).v3()), (this.nao_1[3] = n.q3(32).s3(new p(255, 0)).v3()), (this.nao_1[4] = n.q3(24).s3(new p(255, 0)).v3()), (this.nao_1[5] = n.q3(16).s3(new p(255, 0)).v3()), (this.nao_1[6] = n.q3(8).s3(new p(255, 0)).v3()), (this.nao_1[7] = n.s3(new p(255, 0)).v3()), this.kan_1.a38(this.nao_1, 0, 8);
                    }),
                    (_(U).fan = function (n) {
                        var t = g(n);
                        this.han(t.length), this.kan_1.rao(t);
                    }),
                    (_(U).pan = function (n) {
                        this.han(n.s()), this.kan_1.rao(n.rt());
                    }),
                    (_(U).qan = function () {
                        return C().jao_1;
                    }),
                    (_(U).ran = function () {}),
                    (_(U).san = function () {
                        var n = this.ju();
                        return new P("", n, 0 === n ? 0 : this.bao());
                    }),
                    (_(U).tan = function () {}),
                    (_(U).uan = function () {
                        var n = this.ju(),
                            t = this.ju(),
                            i = this.cao();
                        if (!this.mao_1.equals(new p(-1, -1)) && q(i).d1(this.mao_1) > 0) throw new F("Container size limit exceeded");
                        return new L(n, t, i);
                    }),
                    (_(U).van = function () {}),
                    (_(U).wan = function () {
                        var n = this.ju(),
                            t = this.cao();
                        if (!this.mao_1.equals(new p(-1, -1)) && q(t).d1(this.mao_1) > 0) throw new F("Container size limit exceeded");
                        return new D(n, t);
                    }),
                    (_(U).xan = function () {}),
                    (_(U).yan = function () {
                        var n = this.ju(),
                            t = this.cao();
                        if (!this.mao_1.equals(new p(-1, -1)) && q(t).d1(this.mao_1) > 0) throw new F("Container size limit exceeded");
                        return new B(n, t);
                    }),
                    (_(U).zan = function () {}),
                    (_(U).aao = function () {
                        return 1 === this.ju();
                    }),
                    (_(U).ju = function () {
                        return S(this, this.nao_1, 1), this.nao_1[0];
                    }),
                    (_(U).bao = function () {
                        return S(this, this.nao_1, 2), x(((255 & this.nao_1[0]) << 8) | (255 & this.nao_1[1]));
                    }),
                    (_(U).cao = function () {
                        return S(this, this.nao_1, 4), ((255 & this.nao_1[0]) << 24) | ((255 & this.nao_1[1]) << 16) | ((255 & this.nao_1[2]) << 8) | (255 & this.nao_1[3]);
                    }),
                    (_(U).dao = function () {
                        return (
                            S(this, this.nao_1, 8),
                            q(this.nao_1[0])
                                .s3(new p(255, 0))
                                .p3(56)
                                .t3(q(this.nao_1[1]).s3(new p(255, 0)).p3(48))
                                .t3(q(this.nao_1[2]).s3(new p(255, 0)).p3(40))
                                .t3(q(this.nao_1[3]).s3(new p(255, 0)).p3(32))
                                .t3(q(this.nao_1[4]).s3(new p(255, 0)).p3(24))
                                .t3(q(this.nao_1[5]).s3(new p(255, 0)).p3(16))
                                .t3(q(this.nao_1[6]).s3(new p(255, 0)).p3(8))
                                .t3(q(this.nao_1[7]).s3(new p(255, 0)))
                        );
                    }),
                    (_(U).eao = function () {
                        var n = this.dao();
                        return N(n);
                    }),
                    (_(U).fao = function () {
                        var n,
                            t,
                            i,
                            a = this.cao();
                        if (!this.lao_1.equals(new p(-1, -1)) && q(a).d1(this.lao_1) > 0) throw new F("String size limit exceeded");
                        return (n = this), (t = a), (i = new Int8Array(t)), S(n, i, t), v(i);
                    }),
                    (_(U).gao = function () {
                        var n = this.cao();
                        if (!this.lao_1.equals(new p(-1, -1)) && q(n).d1(this.lao_1) > 0) throw new F("Binary size limit exceeded");
                        var t = new Int8Array(n);
                        return S(this, t, t.length), b().it(t);
                    }),
                    (_(K).vu = function (n, t, i) {
                        return this.dap_1.vu(n, t, i);
                    }),
                    (_(K).a38 = function (n, t, i) {
                        this.dap_1.at(n, t, i);
                    }),
                    (_(K).x4 = function () {
                        return this.dap_1.x4();
                    }),
                    (_(W).eap = function (n, t) {
                        if (2 === t) n.aao();
                        else if (3 === t) n.ju();
                        else if (6 === t) n.bao();
                        else if (8 === t) n.cao();
                        else if (10 === t) n.dao();
                        else if (4 === t) n.eao();
                        else if (11 === t) n.fao();
                        else if (12 === t) {
                            n.qan();
                            n: for (;;) {
                                var i = n.san();
                                if (0 === i.tao_1) break n;
                                this.eap(n, i.tao_1), n.tan();
                            }
                            n.ran();
                        } else if (15 === t) {
                            var a = n.wan(),
                                e = 0,
                                o = a.wao_1;
                            if (e < o)
                                do {
                                    (e = (e + 1) | 0), this.eap(n, a.vao_1);
                                } while (e < o);
                            n.xan();
                        } else if (14 === t) {
                            var s = n.yan(),
                                _ = 0,
                                h = s.bap_1;
                            if (_ < h)
                                do {
                                    (_ = (_ + 1) | 0), this.eap(n, s.aap_1);
                                } while (_ < h);
                            n.zan();
                        } else {
                            if (13 !== t) throw new F("Unrecognized TType value: " + t);
                            var r = n.uan(),
                                u = 0,
                                f = r.zao_1;
                            if (u < f)
                                do {
                                    (u = (u + 1) | 0), this.eap(n, r.xao_1), this.eap(n, r.yao_1);
                                } while (u < f);
                            n.van();
                        }
                    }),
                    (_(K).rao = function (n) {
                        this.a38(n, 0, n.length);
                    }),
                    new O(),
                    new j(),
                    (s = new W()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = U),
                    (n.$_$.b = K),
                    (n.$_$.c = A),
                    (n.$_$.d = function () {
                        return (
                            (function () {
                                if (e) return r;
                                (e = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (a = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            a
                        );
                    }),
                    (n.$_$.e = s);
            })(n.exports, i(519039), i(222818));
        },
        937455: (n, t, i) => {
            !(function (n, t) {
                "use strict";
                var i,
                    a,
                    e,
                    o = t.$_$.ef,
                    s = t.$_$.u9,
                    _ = t.$_$.n3,
                    h = t.$_$.s3,
                    r = t.$_$.ja,
                    u = t.$_$.z5,
                    f = t.$_$.ke,
                    c = t.$_$.id,
                    $ = t.$_$.oe,
                    w = t.$_$.h2,
                    l = (t.$_$.l6, t.$_$.rc),
                    v = t.$_$.lf,
                    d = t.$_$.a8,
                    p = t.$_$.b8,
                    x = t.$_$.vc,
                    E = t.$_$.vi,
                    g = t.$_$.ei,
                    q = t.$_$.hd,
                    N = t.$_$.g,
                    b = t.$_$.le;
                function m() {
                    return a || ((a = !0), s([o(0, 8), o(9, 13), o(14, 18), o(19, 23), o(24, 36)]), s([8, 13, 18, 23]), (i = r(h(_(48), _(57)), h(_(97), _(102))))), i;
                }
                function T() {
                    (e = this), (this.rv_1 = s([o(0, 4), o(4, 6), o(6, 8), o(8, 10), o(10, 16)]));
                }
                function k() {
                    return null == e && new T(), e;
                }
                function I(n) {
                    if ((k(), (this.sv_1 = n), 16 !== this.sv_1.length)) {
                        var t = "Invalid UUID bytes. Expected 16 bytes; found " + this.sv_1.length;
                        throw w($(t));
                    }
                }
                c(T),
                    q(I, "Uuid", N, N, [g]),
                    (f(I).toString = function () {
                        for (var n = l(36), t = 0, i = k().rv_1.p(); i.q(); ) {
                            var a = i.r(),
                                e = a.e1_1,
                                o = a.f1_1;
                            if (e <= o)
                                do {
                                    var s = e;
                                    e = (e + 1) | 0;
                                    var h = this.sv_1[s],
                                        r = (h >> 4) & 15,
                                        u = 15 & h,
                                        f = t;
                                    (t = (f + 1) | 0), (n[f] = m().t(r).p1_1);
                                    var c = t;
                                    (t = (c + 1) | 0), (n[c] = m().t(u).p1_1);
                                } while (s !== o);
                            if (t < 36) {
                                var $ = t;
                                (t = ($ + 1) | 0), (n[$] = _(45));
                            }
                        }
                        return v(n);
                    }),
                    (f(I).equals = function (n) {
                        return n instanceof I && d(this.sv_1, n.sv_1);
                    }),
                    (f(I).hashCode = function () {
                        return p(this.sv_1);
                    }),
                    (f(I).tv = function (n) {
                        var t = 0;
                        if (t < 16)
                            do {
                                var i = t;
                                t = (t + 1) | 0;
                                var a = x(this.sv_1[i], n.sv_1[i]);
                                if (0 !== a) return a;
                            } while (t < 16);
                        return 0;
                    }),
                    (f(I).d = function (n) {
                        return this.tv(n instanceof I ? n : E());
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = function () {
                        var n = u().el(16);
                        return (n[6] = b((15 & n[6]) | 64)), (n[8] = b((63 & n[8]) | 128)), new I(n);
                    });
            })(n.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.277a0eaa.js.map
