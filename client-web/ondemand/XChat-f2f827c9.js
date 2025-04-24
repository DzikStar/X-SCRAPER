(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (n, t, i) => {
            !(function (n, t, i) {
                "use strict";
                var a,
                    o,
                    e,
                    s,
                    h = t.$_$.ke,
                    _ = t.$_$.id,
                    r = t.$_$.l6,
                    u = t.$_$.hi,
                    f = t.$_$.hd,
                    $ = t.$_$.g,
                    c = t.$_$.ti,
                    w = t.$_$.y2,
                    v = t.$_$.pc,
                    l = t.$_$.pf,
                    d = i.$_$.g,
                    p = t.$_$.ni,
                    x = t.$_$.ne,
                    m = t.$_$.le,
                    g = t.$_$.tf,
                    y = t.$_$.me,
                    b = (t.$_$.t5, t.$_$.xc),
                    E = i.$_$.c,
                    q = i.$_$.f,
                    N = t.$_$.ld,
                    T = t.$_$.nd,
                    I = i.$_$.h,
                    O = i.$_$.a;
                function R() {}
                function A(n, t, i) {
                    u.call(this, n, t), (this.uam_1 = i);
                }
                function M() {}
                function S(n, t) {
                    w(t, this), v(this, S), (this.vam_1 = n);
                }
                function j(n) {
                    this.ean_1 = n;
                }
                function k(n, t, i) {
                    for (var a = i, o = 0; a > 0; ) {
                        var e = n.ean_1.vu(t, o, a);
                        if (-1 === e) throw new d("Expected " + i + " bytes; got " + o);
                        (a = (a - e) | 0), (o = (o + e) | 0);
                    }
                }
                function z() {
                    (e = this), (this.bao_1 = -65536), (this.cao_1 = -2147418112), (this.dao_1 = new G(""));
                }
                function C() {
                    return null == e && new z(), e;
                }
                function U(n, t, i) {
                    C(), (t = t === $ ? new p(-1, -1) : t), (i = i === $ ? new p(-1, -1) : i), j.call(this, n), (this.fao_1 = t), (this.gao_1 = i), (this.hao_1 = new Int8Array(8)), (this.iao_1 = !1), (this.jao_1 = !1);
                }
                function P(n, t, i) {
                    (this.mao_1 = n), (this.nao_1 = t), (this.oao_1 = i);
                }
                function D(n, t) {
                    (this.pao_1 = n), (this.qao_1 = t);
                }
                function L(n, t, i) {
                    (this.rao_1 = n), (this.sao_1 = t), (this.tao_1 = i);
                }
                function B(n, t) {
                    (this.uao_1 = n), (this.vao_1 = t);
                }
                function G(n) {
                    this.wao_1 = n;
                }
                function K(n) {
                    (n = n === $ ? new q() : n), (this.xao_1 = n);
                }
                function V() {}
                function W() {}
                function F(n) {
                    O(n, this), v(this, F);
                }
                _(R),
                    f(A, "Kind", $, u),
                    _(M),
                    f(S, "ThriftException", $, c),
                    f(j, "BaseProtocol"),
                    _(z),
                    f(U, "BinaryProtocol", $, j),
                    f(P, "FieldMetadata"),
                    f(D, "ListMetadata"),
                    f(L, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    N(V, "Transport"),
                    f(K, "BufferTransport", K, $, [V]),
                    T(W, "ProtocolUtil"),
                    f(F, "ProtocolException", $, I),
                    (h(S).wam = function (n) {
                        n.xam("TApplicationException");
                        var t = this.message;
                        null == t || (n.yam("message", 1, 11), n.zam(t), n.aan()), n.yam("type", 2, 8), n.ban(this.vam_1.uam_1), n.aan(), n.can(), n.dan();
                    }),
                    (h(j).x4 = function () {
                        this.ean_1.x4();
                    }),
                    (h(U).xam = function (n) {}),
                    (h(U).dan = function () {}),
                    (h(U).yam = function (n, t, i) {
                        this.b38(i), this.kao(x(t));
                    }),
                    (h(U).aan = function () {}),
                    (h(U).can = function () {
                        this.b38(0);
                    }),
                    (h(U).fan = function (n, t) {
                        this.b38(n), this.ban(t);
                    }),
                    (h(U).gan = function () {}),
                    (h(U).han = function (n) {
                        this.b38(n ? 1 : 0);
                    }),
                    (h(U).b38 = function (n) {
                        (this.hao_1[0] = n), this.ean_1.x37(this.hao_1, 0, 1);
                    }),
                    (h(U).kao = function (n) {
                        (this.hao_1[0] = m((n >> 8) & 255)), (this.hao_1[1] = m(255 & n)), this.ean_1.x37(this.hao_1, 0, 2);
                    }),
                    (h(U).ban = function (n) {
                        (this.hao_1[0] = m((n >> 24) & 255)), (this.hao_1[1] = m((n >> 16) & 255)), (this.hao_1[2] = m((n >> 8) & 255)), (this.hao_1[3] = m(255 & n)), this.ean_1.x37(this.hao_1, 0, 4);
                    }),
                    (h(U).ian = function (n) {
                        (this.hao_1[0] = n.q3(56).s3(new p(255, 0)).v3()), (this.hao_1[1] = n.q3(48).s3(new p(255, 0)).v3()), (this.hao_1[2] = n.q3(40).s3(new p(255, 0)).v3()), (this.hao_1[3] = n.q3(32).s3(new p(255, 0)).v3()), (this.hao_1[4] = n.q3(24).s3(new p(255, 0)).v3()), (this.hao_1[5] = n.q3(16).s3(new p(255, 0)).v3()), (this.hao_1[6] = n.q3(8).s3(new p(255, 0)).v3()), (this.hao_1[7] = n.s3(new p(255, 0)).v3()), this.ean_1.x37(this.hao_1, 0, 8);
                    }),
                    (h(U).zam = function (n) {
                        var t = g(n);
                        this.ban(t.length), this.ean_1.lao(t);
                    }),
                    (h(U).jan = function (n) {
                        this.ban(n.s()), this.ean_1.lao(n.rt());
                    }),
                    (h(U).kan = function () {
                        return C().dao_1;
                    }),
                    (h(U).lan = function () {}),
                    (h(U).man = function () {
                        var n = this.ju();
                        return new P("", n, 0 === n ? 0 : this.van());
                    }),
                    (h(U).nan = function () {}),
                    (h(U).oan = function () {
                        var n = this.ju(),
                            t = this.ju(),
                            i = this.wan();
                        if (!this.gao_1.equals(new p(-1, -1)) && y(i).d1(this.gao_1) > 0) throw new F("Container size limit exceeded");
                        return new L(n, t, i);
                    }),
                    (h(U).pan = function () {}),
                    (h(U).qan = function () {
                        var n = this.ju(),
                            t = this.wan();
                        if (!this.gao_1.equals(new p(-1, -1)) && y(t).d1(this.gao_1) > 0) throw new F("Container size limit exceeded");
                        return new D(n, t);
                    }),
                    (h(U).ran = function () {}),
                    (h(U).san = function () {
                        var n = this.ju(),
                            t = this.wan();
                        if (!this.gao_1.equals(new p(-1, -1)) && y(t).d1(this.gao_1) > 0) throw new F("Container size limit exceeded");
                        return new B(n, t);
                    }),
                    (h(U).tan = function () {}),
                    (h(U).uan = function () {
                        return 1 === this.ju();
                    }),
                    (h(U).ju = function () {
                        return k(this, this.hao_1, 1), this.hao_1[0];
                    }),
                    (h(U).van = function () {
                        return k(this, this.hao_1, 2), x(((255 & this.hao_1[0]) << 8) | (255 & this.hao_1[1]));
                    }),
                    (h(U).wan = function () {
                        return k(this, this.hao_1, 4), ((255 & this.hao_1[0]) << 24) | ((255 & this.hao_1[1]) << 16) | ((255 & this.hao_1[2]) << 8) | (255 & this.hao_1[3]);
                    }),
                    (h(U).xan = function () {
                        return (
                            k(this, this.hao_1, 8),
                            y(this.hao_1[0])
                                .s3(new p(255, 0))
                                .p3(56)
                                .t3(y(this.hao_1[1]).s3(new p(255, 0)).p3(48))
                                .t3(y(this.hao_1[2]).s3(new p(255, 0)).p3(40))
                                .t3(y(this.hao_1[3]).s3(new p(255, 0)).p3(32))
                                .t3(y(this.hao_1[4]).s3(new p(255, 0)).p3(24))
                                .t3(y(this.hao_1[5]).s3(new p(255, 0)).p3(16))
                                .t3(y(this.hao_1[6]).s3(new p(255, 0)).p3(8))
                                .t3(y(this.hao_1[7]).s3(new p(255, 0)))
                        );
                    }),
                    (h(U).yan = function () {
                        var n = this.xan();
                        return b(n);
                    }),
                    (h(U).zan = function () {
                        var n,
                            t,
                            i,
                            a = this.wan();
                        if (!this.fao_1.equals(new p(-1, -1)) && y(a).d1(this.fao_1) > 0) throw new F("String size limit exceeded");
                        return (n = this), (t = a), (i = new Int8Array(t)), k(n, i, t), l(i);
                    }),
                    (h(U).aao = function () {
                        var n = this.wan();
                        if (!this.fao_1.equals(new p(-1, -1)) && y(n).d1(this.fao_1) > 0) throw new F("Binary size limit exceeded");
                        var t = new Int8Array(n);
                        return k(this, t, t.length), E().it(t);
                    }),
                    (h(K).vu = function (n, t, i) {
                        return this.xao_1.vu(n, t, i);
                    }),
                    (h(K).x37 = function (n, t, i) {
                        this.xao_1.at(n, t, i);
                    }),
                    (h(K).x4 = function () {
                        return this.xao_1.x4();
                    }),
                    (h(W).yao = function (n, t) {
                        if (2 === t) n.uan();
                        else if (3 === t) n.ju();
                        else if (6 === t) n.van();
                        else if (8 === t) n.wan();
                        else if (10 === t) n.xan();
                        else if (4 === t) n.yan();
                        else if (11 === t) n.zan();
                        else if (12 === t) {
                            n.kan();
                            n: for (;;) {
                                var i = n.man();
                                if (0 === i.nao_1) break n;
                                this.yao(n, i.nao_1), n.nan();
                            }
                            n.lan();
                        } else if (15 === t) {
                            var a = n.qan(),
                                o = 0,
                                e = a.qao_1;
                            if (o < e)
                                do {
                                    (o = (o + 1) | 0), this.yao(n, a.pao_1);
                                } while (o < e);
                            n.ran();
                        } else if (14 === t) {
                            var s = n.san(),
                                h = 0,
                                _ = s.vao_1;
                            if (h < _)
                                do {
                                    (h = (h + 1) | 0), this.yao(n, s.uao_1);
                                } while (h < _);
                            n.tan();
                        } else {
                            if (13 !== t) throw new F("Unrecognized TType value: " + t);
                            var r = n.oan(),
                                u = 0,
                                f = r.tao_1;
                            if (u < f)
                                do {
                                    (u = (u + 1) | 0), this.yao(n, r.rao_1), this.yao(n, r.sao_1);
                                } while (u < f);
                            n.pan();
                        }
                    }),
                    (h(K).lao = function (n) {
                        this.x37(n, 0, n.length);
                    }),
                    new R(),
                    new M(),
                    (s = new W()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = U),
                    (n.$_$.b = K),
                    (n.$_$.c = S),
                    (n.$_$.d = function () {
                        return (
                            (function () {
                                if (o) return r;
                                (o = !0), new A("UNKNOWN", 0, 0), new A("UNKNOWN_METHOD", 1, 1), new A("INVALID_MESSAGE_TYPE", 2, 2), new A("WRONG_METHOD_NAME", 3, 3), new A("BAD_SEQUENCE_ID", 4, 4), new A("MISSING_RESULT", 5, 5), new A("INTERNAL_ERROR", 6, 6), (a = new A("PROTOCOL_ERROR", 7, 7)), new A("INVALID_TRANSFORM", 8, 8), new A("INVALID_PROTOCOL", 9, 9), new A("UNSUPPORTED_CLIENT_TYPE", 10, 10);
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
                    o,
                    e = t.$_$.ef,
                    s = t.$_$.u9,
                    h = t.$_$.n3,
                    _ = t.$_$.s3,
                    r = t.$_$.ja,
                    u = t.$_$.z5,
                    f = t.$_$.ke,
                    $ = t.$_$.id,
                    c = t.$_$.oe,
                    w = t.$_$.h2,
                    v = (t.$_$.l6, t.$_$.rc),
                    l = t.$_$.lf,
                    d = t.$_$.a8,
                    p = t.$_$.b8,
                    x = t.$_$.vc,
                    m = t.$_$.ui,
                    g = t.$_$.di,
                    y = t.$_$.hd,
                    b = t.$_$.g,
                    E = t.$_$.le;
                function q() {
                    return a || ((a = !0), s([e(0, 8), e(9, 13), e(14, 18), e(19, 23), e(24, 36)]), s([8, 13, 18, 23]), (i = r(_(h(48), h(57)), _(h(97), h(102))))), i;
                }
                function N() {
                    (o = this), (this.rv_1 = s([e(0, 4), e(4, 6), e(6, 8), e(8, 10), e(10, 16)]));
                }
                function T() {
                    return null == o && new N(), o;
                }
                function I(n) {
                    if ((T(), (this.sv_1 = n), 16 !== this.sv_1.length)) {
                        var t = "Invalid UUID bytes. Expected 16 bytes; found " + this.sv_1.length;
                        throw w(c(t));
                    }
                }
                $(N),
                    y(I, "Uuid", b, b, [g]),
                    (f(I).toString = function () {
                        for (var n = v(36), t = 0, i = T().rv_1.p(); i.q(); ) {
                            var a = i.r(),
                                o = a.e1_1,
                                e = a.f1_1;
                            if (o <= e)
                                do {
                                    var s = o;
                                    o = (o + 1) | 0;
                                    var _ = this.sv_1[s],
                                        r = (_ >> 4) & 15,
                                        u = 15 & _,
                                        f = t;
                                    (t = (f + 1) | 0), (n[f] = q().t(r).p1_1);
                                    var $ = t;
                                    (t = ($ + 1) | 0), (n[$] = q().t(u).p1_1);
                                } while (s !== e);
                            if (t < 36) {
                                var c = t;
                                (t = (c + 1) | 0), (n[c] = h(45));
                            }
                        }
                        return l(n);
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
                        return this.tv(n instanceof I ? n : m());
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = function () {
                        var n = u().el(16);
                        return (n[6] = E((15 & n[6]) | 64)), (n[8] = E((63 & n[8]) | 128)), new I(n);
                    });
            })(n.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.59e33eba.js.map
