(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f2f827c9"],
    {
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var e,
                    b,
                    s,
                    _,
                    h = i.$_$.te,
                    r = i.$_$.rd,
                    u = i.$_$.o6,
                    o = i.$_$.xi,
                    f = i.$_$.qd,
                    a = i.$_$.g,
                    c = i.$_$.jj,
                    $ = i.$_$.y2,
                    w = i.$_$.yc,
                    l = i.$_$.zf,
                    d = n.$_$.g,
                    v = i.$_$.dj,
                    g = i.$_$.we,
                    p = i.$_$.ue,
                    q = i.$_$.dg,
                    E = i.$_$.ve,
                    k = (i.$_$.v5, i.$_$.gd),
                    x = n.$_$.c,
                    y = n.$_$.f,
                    N = i.$_$.ud,
                    z = i.$_$.wd,
                    T = n.$_$.h,
                    I = n.$_$.a;
                function O() {}
                function R(t, i, n) {
                    o.call(this, t, i), (this.yb7_1 = n);
                }
                function A() {}
                function M(t, i) {
                    $(i, this), w(this, M), (this.zb7_1 = t);
                }
                function S(t) {
                    this.ib8_1 = t;
                }
                function C(t, i, n) {
                    for (var e = n, b = 0; e > 0; ) {
                        var s = t.ib8_1.dv(i, b, e);
                        if (-1 === s) throw new d("Expected " + n + " bytes; got " + b);
                        (e = (e - s) | 0), (b = (b + s) | 0);
                    }
                }
                function U() {
                    (s = this), (this.fb9_1 = -65536), (this.gb9_1 = -2147418112), (this.hb9_1 = new G(""));
                }
                function j() {
                    return null == s && new U(), s;
                }
                function m(t, i, n) {
                    j(), (i = i === a ? new v(-1, -1) : i), (n = n === a ? new v(-1, -1) : n), S.call(this, t), (this.jb9_1 = i), (this.kb9_1 = n), (this.lb9_1 = new Int8Array(8)), (this.mb9_1 = !1), (this.nb9_1 = !1);
                }
                function P(t, i, n) {
                    (this.qb9_1 = t), (this.rb9_1 = i), (this.sb9_1 = n);
                }
                function D(t, i) {
                    (this.tb9_1 = t), (this.ub9_1 = i);
                }
                function L(t, i, n) {
                    (this.vb9_1 = t), (this.wb9_1 = i), (this.xb9_1 = n);
                }
                function B(t, i) {
                    (this.yb9_1 = t), (this.zb9_1 = i);
                }
                function G(t) {
                    this.aba_1 = t;
                }
                function K(t) {
                    (t = t === a ? new y() : t), (this.bba_1 = t);
                }
                function V() {}
                function W() {}
                function F(t) {
                    I(t, this), w(this, F);
                }
                r(O),
                    f(R, "Kind", a, o),
                    r(A),
                    f(M, "ThriftException", a, c),
                    f(S, "BaseProtocol"),
                    r(U),
                    f(m, "BinaryProtocol", a, S),
                    f(P, "FieldMetadata"),
                    f(D, "ListMetadata"),
                    f(L, "MapMetadata"),
                    f(B, "SetMetadata"),
                    f(G, "StructMetadata"),
                    N(V, "Transport"),
                    f(K, "BufferTransport", K, a, [V]),
                    z(W, "ProtocolUtil"),
                    f(F, "ProtocolException", a, T),
                    (h(M).ab8 = function (t) {
                        t.bb8("TApplicationException");
                        var i = this.message;
                        null == i || (t.cb8("message", 1, 11), t.db8(i), t.eb8()), t.cb8("type", 2, 8), t.fb8(this.zb7_1.yb7_1), t.eb8(), t.gb8(), t.hb8();
                    }),
                    (h(S).e5 = function () {
                        this.ib8_1.e5();
                    }),
                    (h(m).bb8 = function (t) {}),
                    (h(m).hb8 = function () {}),
                    (h(m).cb8 = function (t, i, n) {
                        this.k3b(n), this.ob9(g(i));
                    }),
                    (h(m).eb8 = function () {}),
                    (h(m).gb8 = function () {
                        this.k3b(0);
                    }),
                    (h(m).jb8 = function (t, i) {
                        this.k3b(t), this.fb8(i);
                    }),
                    (h(m).kb8 = function () {}),
                    (h(m).lb8 = function (t) {
                        this.k3b(t ? 1 : 0);
                    }),
                    (h(m).k3b = function (t) {
                        (this.lb9_1[0] = t), this.ib8_1.g3b(this.lb9_1, 0, 1);
                    }),
                    (h(m).ob9 = function (t) {
                        (this.lb9_1[0] = p((t >> 8) & 255)), (this.lb9_1[1] = p(255 & t)), this.ib8_1.g3b(this.lb9_1, 0, 2);
                    }),
                    (h(m).fb8 = function (t) {
                        (this.lb9_1[0] = p((t >> 24) & 255)), (this.lb9_1[1] = p((t >> 16) & 255)), (this.lb9_1[2] = p((t >> 8) & 255)), (this.lb9_1[3] = p(255 & t)), this.ib8_1.g3b(this.lb9_1, 0, 4);
                    }),
                    (h(m).mb8 = function (t) {
                        (this.lb9_1[0] = t.r3(56).t3(new v(255, 0)).w3()), (this.lb9_1[1] = t.r3(48).t3(new v(255, 0)).w3()), (this.lb9_1[2] = t.r3(40).t3(new v(255, 0)).w3()), (this.lb9_1[3] = t.r3(32).t3(new v(255, 0)).w3()), (this.lb9_1[4] = t.r3(24).t3(new v(255, 0)).w3()), (this.lb9_1[5] = t.r3(16).t3(new v(255, 0)).w3()), (this.lb9_1[6] = t.r3(8).t3(new v(255, 0)).w3()), (this.lb9_1[7] = t.t3(new v(255, 0)).w3()), this.ib8_1.g3b(this.lb9_1, 0, 8);
                    }),
                    (h(m).db8 = function (t) {
                        var i = q(t);
                        this.fb8(i.length), this.ib8_1.pb9(i);
                    }),
                    (h(m).nb8 = function (t) {
                        this.fb8(t.s()), this.ib8_1.pb9(t.zt());
                    }),
                    (h(m).ob8 = function () {
                        return j().hb9_1;
                    }),
                    (h(m).pb8 = function () {}),
                    (h(m).qb8 = function () {
                        var t = this.ru();
                        return new P("", t, 0 === t ? 0 : this.zb8());
                    }),
                    (h(m).rb8 = function () {}),
                    (h(m).sb8 = function () {
                        var t = this.ru(),
                            i = this.ru(),
                            n = this.ab9();
                        if (!this.kb9_1.equals(new v(-1, -1)) && E(n).d1(this.kb9_1) > 0) throw new F("Container size limit exceeded");
                        return new L(t, i, n);
                    }),
                    (h(m).tb8 = function () {}),
                    (h(m).ub8 = function () {
                        var t = this.ru(),
                            i = this.ab9();
                        if (!this.kb9_1.equals(new v(-1, -1)) && E(i).d1(this.kb9_1) > 0) throw new F("Container size limit exceeded");
                        return new D(t, i);
                    }),
                    (h(m).vb8 = function () {}),
                    (h(m).wb8 = function () {
                        var t = this.ru(),
                            i = this.ab9();
                        if (!this.kb9_1.equals(new v(-1, -1)) && E(i).d1(this.kb9_1) > 0) throw new F("Container size limit exceeded");
                        return new B(t, i);
                    }),
                    (h(m).xb8 = function () {}),
                    (h(m).yb8 = function () {
                        return 1 === this.ru();
                    }),
                    (h(m).ru = function () {
                        return C(this, this.lb9_1, 1), this.lb9_1[0];
                    }),
                    (h(m).zb8 = function () {
                        return C(this, this.lb9_1, 2), g(((255 & this.lb9_1[0]) << 8) | (255 & this.lb9_1[1]));
                    }),
                    (h(m).ab9 = function () {
                        return C(this, this.lb9_1, 4), ((255 & this.lb9_1[0]) << 24) | ((255 & this.lb9_1[1]) << 16) | ((255 & this.lb9_1[2]) << 8) | (255 & this.lb9_1[3]);
                    }),
                    (h(m).bb9 = function () {
                        return (
                            C(this, this.lb9_1, 8),
                            E(this.lb9_1[0])
                                .t3(new v(255, 0))
                                .q3(56)
                                .u3(E(this.lb9_1[1]).t3(new v(255, 0)).q3(48))
                                .u3(E(this.lb9_1[2]).t3(new v(255, 0)).q3(40))
                                .u3(E(this.lb9_1[3]).t3(new v(255, 0)).q3(32))
                                .u3(E(this.lb9_1[4]).t3(new v(255, 0)).q3(24))
                                .u3(E(this.lb9_1[5]).t3(new v(255, 0)).q3(16))
                                .u3(E(this.lb9_1[6]).t3(new v(255, 0)).q3(8))
                                .u3(E(this.lb9_1[7]).t3(new v(255, 0)))
                        );
                    }),
                    (h(m).cb9 = function () {
                        var t = this.bb9();
                        return k(t);
                    }),
                    (h(m).db9 = function () {
                        var t,
                            i,
                            n,
                            e = this.ab9();
                        if (!this.jb9_1.equals(new v(-1, -1)) && E(e).d1(this.jb9_1) > 0) throw new F("String size limit exceeded");
                        return (t = this), (i = e), (n = new Int8Array(i)), C(t, n, i), l(n);
                    }),
                    (h(m).eb9 = function () {
                        var t = this.ab9();
                        if (!this.jb9_1.equals(new v(-1, -1)) && E(t).d1(this.jb9_1) > 0) throw new F("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return C(this, i, i.length), x().qt(i);
                    }),
                    (h(K).dv = function (t, i, n) {
                        return this.bba_1.dv(t, i, n);
                    }),
                    (h(K).g3b = function (t, i, n) {
                        this.bba_1.it(t, i, n);
                    }),
                    (h(K).e5 = function () {
                        return this.bba_1.e5();
                    }),
                    (h(W).cba = function (t, i) {
                        if (2 === i) t.yb8();
                        else if (3 === i) t.ru();
                        else if (6 === i) t.zb8();
                        else if (8 === i) t.ab9();
                        else if (10 === i) t.bb9();
                        else if (4 === i) t.cb9();
                        else if (11 === i) t.db9();
                        else if (12 === i) {
                            t.ob8();
                            t: for (;;) {
                                var n = t.qb8();
                                if (0 === n.rb9_1) break t;
                                this.cba(t, n.rb9_1), t.rb8();
                            }
                            t.pb8();
                        } else if (15 === i) {
                            var e = t.ub8(),
                                b = 0,
                                s = e.ub9_1;
                            if (b < s)
                                do {
                                    (b = (b + 1) | 0), this.cba(t, e.tb9_1);
                                } while (b < s);
                            t.vb8();
                        } else if (14 === i) {
                            var _ = t.wb8(),
                                h = 0,
                                r = _.zb9_1;
                            if (h < r)
                                do {
                                    (h = (h + 1) | 0), this.cba(t, _.yb9_1);
                                } while (h < r);
                            t.xb8();
                        } else {
                            if (13 !== i) throw new F("Unrecognized TType value: " + i);
                            var u = t.sb8(),
                                o = 0,
                                f = u.xb9_1;
                            if (o < f)
                                do {
                                    (o = (o + 1) | 0), this.cba(t, u.vb9_1), this.cba(t, u.wb9_1);
                                } while (o < f);
                            t.tb8();
                        }
                    }),
                    (h(K).pb9 = function (t) {
                        this.g3b(t, 0, t.length);
                    }),
                    new O(),
                    new A(),
                    (_ = new W()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = m),
                    (t.$_$.b = K),
                    (t.$_$.c = M),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (b) return u;
                                (b = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (e = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            e
                        );
                    }),
                    (t.$_$.e = _);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    e,
                    b,
                    s = i.$_$.of,
                    _ = i.$_$.aa,
                    h = i.$_$.o3,
                    r = i.$_$.t3,
                    u = i.$_$.pa,
                    o = i.$_$.b6,
                    f = i.$_$.te,
                    a = i.$_$.rd,
                    c = i.$_$.xe,
                    $ = i.$_$.h2,
                    w = (i.$_$.o6, i.$_$.ad),
                    l = i.$_$.vf,
                    d = i.$_$.e8,
                    v = i.$_$.g8,
                    g = i.$_$.ed,
                    p = i.$_$.kj,
                    q = i.$_$.ti,
                    E = i.$_$.qd,
                    k = i.$_$.g,
                    x = i.$_$.ue;
                function y() {
                    return e || ((e = !0), _([s(0, 8), s(9, 13), s(14, 18), s(19, 23), s(24, 36)]), _([8, 13, 18, 23]), (n = u(r(h(48), h(57)), r(h(97), h(102))))), n;
                }
                function N() {
                    (b = this), (this.zv_1 = _([s(0, 4), s(4, 6), s(6, 8), s(8, 10), s(10, 16)]));
                }
                function z() {
                    return null == b && new N(), b;
                }
                function T(t) {
                    if ((z(), (this.aw_1 = t), 16 !== this.aw_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.aw_1.length;
                        throw $(c(i));
                    }
                }
                a(N),
                    E(T, "Uuid", k, k, [q]),
                    (f(T).toString = function () {
                        for (var t = w(36), i = 0, n = z().zv_1.p(); n.q(); ) {
                            var e = n.r(),
                                b = e.e1_1,
                                s = e.f1_1;
                            if (b <= s)
                                do {
                                    var _ = b;
                                    b = (b + 1) | 0;
                                    var r = this.aw_1[_],
                                        u = (r >> 4) & 15,
                                        o = 15 & r,
                                        f = i;
                                    (i = (f + 1) | 0), (t[f] = y().t(u).q1_1);
                                    var a = i;
                                    (i = (a + 1) | 0), (t[a] = y().t(o).q1_1);
                                } while (_ !== s);
                            if (i < 36) {
                                var c = i;
                                (i = (c + 1) | 0), (t[c] = h(45));
                            }
                        }
                        return l(t);
                    }),
                    (f(T).equals = function (t) {
                        return t instanceof T && d(this.aw_1, t.aw_1);
                    }),
                    (f(T).hashCode = function () {
                        return v(this.aw_1);
                    }),
                    (f(T).bw = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var e = g(this.aw_1[n], t.aw_1[n]);
                                if (0 !== e) return e;
                            } while (i < 16);
                        return 0;
                    }),
                    (f(T).d = function (t) {
                        return this.bw(t instanceof T ? t : p());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().nl(16);
                        return (t[6] = x((15 & t[6]) | 64)), (t[8] = x((63 & t[8]) | 128)), new T(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f2f827c9.64d11f2a.js.map
