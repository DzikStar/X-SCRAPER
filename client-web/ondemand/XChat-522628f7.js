(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-522628f7"],
    {
        51056: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var s = i.$_$.xc,
                    _ = i.$_$.s6,
                    h = i.$_$.bf,
                    r = i.$_$.ic,
                    e = i.$_$.ff,
                    c = i.$_$.m2,
                    u = i.$_$.de,
                    o = i.$_$.g,
                    a = i.$_$.al,
                    f = n.$_$.n,
                    $ = n.$_$.b,
                    d = n.$_$.m,
                    l = n.$_$.a,
                    w = i.$_$.u;
                function b(t, i, n, _) {
                    (this.id1_1 = t), (this.jd1_1 = i), (this.kd1_1 = n), s.call(this, _);
                }
                function y(t, i, n, _, h) {
                    (this.wd1_1 = t), (this.xd1_1 = i), (this.yd1_1 = n), (this.zd1_1 = _), s.call(this, h);
                }
                u(b, s, o, [0]),
                    u(y, s, o, [0]),
                    (h(b).nd1 = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = _), (i.z9_1 = null), i.oa();
                    }),
                    (h(b).k2e = function (t) {
                        return this.nd1(t);
                    }),
                    (h(b).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.id1_1.j1g(this)) === r())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ld1_1 = t), this.ld1_1)) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        return null;
                                    case 2:
                                        if (((this.md1_1 = this.jd1_1.ncy_1(this.kd1_1)), (this.w9_1 = 3), (t = this.kd1_1.r().j1g(this)) === r())) return t;
                                        continue t;
                                    case 3:
                                        if (t) {
                                            var i = "ResultSet returned more than 1 row for " + e(this.jd1_1);
                                            throw c(e(i));
                                        }
                                        return this.md1_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (4 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (h(b).sa = function (t) {
                        return new b(this.id1_1, this.jd1_1, this.kd1_1, t);
                    }),
                    (h(y).ad2 = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = _), (i.z9_1 = null), i.oa();
                    }),
                    (h(y).k2e = function (t) {
                        return this.ad2(t);
                    }),
                    (h(y).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = this.wd1_1.j1g(this)) === r())) return t;
                                        continue t;
                                    case 1:
                                        if (t) {
                                            this.xd1_1.k(this.yd1_1.ncy_1(this.zd1_1)), (this.w9_1 = 2);
                                            continue t;
                                        }
                                        return this.xd1_1;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.w9_1 = 4), (t = this.zd1_1.r().j1g(this)) === r())) return t;
                                        continue t;
                                    case 4:
                                        if (!t) {
                                            this.w9_1 = 5;
                                            continue t;
                                        }
                                        this.xd1_1.k(this.yd1_1.ncy_1(this.zd1_1)), (this.w9_1 = 3);
                                        continue t;
                                    case 5:
                                        return this.xd1_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (6 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (h(y).sa = function (t) {
                        return new y(this.wd1_1, this.xd1_1, this.yd1_1, this.zd1_1, t);
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function (t, i) {
                        return t
                            .ocy(
                                ((n = t),
                                function (t) {
                                    var i,
                                        s = t.r(),
                                        _ = w();
                                    if (s instanceof l)
                                        i = new l(
                                            d(
                                                (function (t, i, n, s, _) {
                                                    var h = new y(t, i, n, s, _),
                                                        r = function (t) {
                                                            return h.ad2(t);
                                                        };
                                                    return (r.$arity = 0), r;
                                                })(s, _, n, t, null),
                                            ),
                                        );
                                    else if (s instanceof $) {
                                        if (!s.o2()) return new $(f(_));
                                        for (_.k(n.ncy_1(t)); t.r().o2(); ) _.k(n.ncy_1(t));
                                        i = new $(f(_));
                                    } else a();
                                    return i;
                                }),
                            )
                            .j1g(i);
                        var n;
                    }),
                    (t.$_$.b = function (t, i) {
                        return t
                            .ocy(
                                ((n = t),
                                function (t) {
                                    var i,
                                        s = t.r();
                                    if (s instanceof l)
                                        i = new l(
                                            d(
                                                (function (t, i, n, s) {
                                                    var _ = new b(t, i, n, s),
                                                        h = function (t) {
                                                            return _.nd1(t);
                                                        };
                                                    return (h.$arity = 0), h;
                                                })(s, n, t, null),
                                            ),
                                        );
                                    else if (s instanceof $) {
                                        if (!s.o2()) return new $(f(null));
                                        var _ = n.ncy_1(t);
                                        if (t.r().o2()) {
                                            var h = "ResultSet returned more than 1 row for " + e(n);
                                            throw c(e(h));
                                        }
                                        i = new $(f(_));
                                    } else a();
                                    return i;
                                }),
                            )
                            .j1g(i);
                        var n;
                    });
            })(t.exports, n(519039), n(604278));
        },
        774322: (t, i, n) => {
            !(function (t, i, n, s, _) {
                "use strict";
                var h = i.$_$.b2,
                    r = n.$_$.xc,
                    e = n.$_$.s6,
                    c = n.$_$.bf,
                    u = n.$_$.yj,
                    o = i.$_$.q2,
                    a = n.$_$.ne,
                    f = s.$_$.a,
                    $ = n.$_$.ic,
                    d = n.$_$.de,
                    l = n.$_$.g,
                    w = n.$_$.od,
                    b = n.$_$.bd,
                    y = i.$_$.f1,
                    p = n.$_$.xd,
                    v = n.$_$.yd,
                    z = i.$_$.r,
                    x = n.$_$.ae,
                    q = i.$_$.g1,
                    g = _.$_$.f,
                    m = i.$_$.c1,
                    k = s.$_$.b;
                function j(t, i) {
                    (this.jd2_1 = t), r.call(this, i);
                }
                function E(t, i) {
                    var n = new j(t, i),
                        s = function (t, i) {
                            return n.ld2(t, i);
                        };
                    return (s.$arity = 1), s;
                }
                function S(t) {
                    this.md2_1 = t;
                }
                function T(t, i, n) {
                    (this.vd2_1 = t), (this.wd2_1 = i), r.call(this, n);
                }
                function R(t, i, n) {
                    var s = new T(t, i, n),
                        _ = function (t, i) {
                            return s.y2p(t, i);
                        };
                    return (_.$arity = 1), _;
                }
                function C(t, i, n) {
                    r.call(this, n), (this.kd3_1 = t), (this.ld3_1 = i);
                }
                function I(t, i) {
                    (this.nd3_1 = t), (this.od3_1 = i);
                }
                function A(t) {
                    this.pd3_1 = t;
                }
                function N(t) {
                    return function () {
                        return t.s1u(e), e;
                    };
                }
                function O(t, i) {
                    (this.yd3_1 = t), r.call(this, i);
                }
                function D(t, i) {
                    (this.pd4_1 = t), r.call(this, i);
                }
                function L(t, i) {
                    var n = new D(t, i),
                        s = function (t, i) {
                            return n.rd4(t, i);
                        };
                    return (s.$arity = 1), s;
                }
                function M(t) {
                    this.sd4_1 = t;
                }
                function P(t, i, n) {
                    (this.bd5_1 = t), (this.cd5_1 = i), r.call(this, n);
                }
                function U(t, i, n) {
                    var s = new P(t, i, n),
                        _ = function (t, i) {
                            return s.y2p(t, i);
                        };
                    return (_.$arity = 1), _;
                }
                function Q(t, i, n) {
                    r.call(this, n), (this.qd5_1 = t), (this.rd5_1 = i);
                }
                function V(t, i) {
                    (this.td5_1 = t), (this.ud5_1 = i);
                }
                d(j, r, l, [1]),
                    v(S, "sam$kotlinx_coroutines_flow_FlowCollector$0", l, l, [y, b], [1]),
                    d(T, r, l, [1]),
                    x(C, r),
                    v(I, l, l, l, [q], [1]),
                    v(A, "sam$app_cash_sqldelight_Query_Listener$0", l, l, [g, b]),
                    d(O, r, l, [1]),
                    d(D, r, l, [1]),
                    v(M, "sam$kotlinx_coroutines_flow_FlowCollector$0", l, l, [y, b], [1]),
                    d(P, r, l, [1]),
                    x(Q, r),
                    v(V, l, l, l, [q], [1]),
                    (c(j).ld2 = function (t, i) {
                        var n = this.b26(t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(j).cb = function (t, i) {
                        return this.ld2(null != t && a(t, o) ? t : u(), i);
                    }),
                    (c(j).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = f(this.jd2_1, this)) === $())) return t;
                                        continue t;
                                    case 1:
                                        return t;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (c(j).b26 = function (t, i) {
                        var n = new j(this.jd2_1, i);
                        return (n.kd2_1 = t), n;
                    }),
                    (c(S).g1y = function (t, i) {
                        return this.md2_1(t, i);
                    }),
                    (c(S).a4 = function () {
                        return this.md2_1;
                    }),
                    (c(S).equals = function (t) {
                        var i;
                        null != t && a(t, y) ? (i = !(null == t || !a(t, b)) && w(this.a4(), t.a4())) : (i = !1);
                        return i;
                    }),
                    (c(S).hashCode = function () {
                        return p(this.a4());
                    }),
                    (c(T).y2p = function (t, i) {
                        var n = this.ta(t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(T).cb = function (t, i) {
                        return this.y2p(null == t || null != t ? t : u(), i);
                    }),
                    (c(T).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        this.x9_1 = 3;
                                        this.yd2_1 = this.vd2_1;
                                        this.zd2_1 = this.xd2_1;
                                        if (((this.ad3_1 = this.zd2_1), (this.w9_1 = 1), (t = z(this.wd2_1, E(this.ad3_1, null), this)) === $())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.bd3_1 = t), (this.w9_1 = 2), (t = this.yd2_1.g1y(this.bd3_1, this)) === $())) return t;
                                        continue t;
                                    case 2:
                                        return e;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (c(T).ta = function (t, i) {
                        var n = new T(this.vd2_1, this.wd2_1, i);
                        return (n.xd2_1 = t), n;
                    }),
                    (c(C).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        this.x9_1 = 2;
                                        (this.md3_1 = this.ld3_1), (this.w9_1 = 1);
                                        var i = R(this.md3_1, this.kd3_1.od3_1, null);
                                        if ((t = this.kd3_1.nd3_1.p1x(new S(i), this)) === $()) return t;
                                        continue t;
                                    case 1:
                                        return e;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (c(I).h1y = function (t, i) {
                        var n = new C(this, t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(I).p1x = function (t, i) {
                        return this.h1y(t, i);
                    }),
                    (c(A).jcy = function () {
                        return this.pd3_1();
                    }),
                    (c(A).a4 = function () {
                        return this.pd3_1;
                    }),
                    (c(A).equals = function (t) {
                        var i;
                        null != t && a(t, g) ? (i = !(null == t || !a(t, b)) && w(this.a4(), t.a4())) : (i = !1);
                        return i;
                    }),
                    (c(A).hashCode = function () {
                        return p(this.a4());
                    }),
                    (c(O).fd4 = function (t, i) {
                        var n = this.gd4(t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(O).cb = function (t, i) {
                        return this.fd4(null != t && a(t, y) ? t : u(), i);
                    }),
                    (c(O).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 8), (this.ad4_1 = m(-1)), this.ad4_1.s1u(e);
                                        var i = N(this.ad4_1);
                                        (this.bd4_1 = new A(i)), this.yd3_1.lcy(this.bd4_1), (this.w9_1 = 1);
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 7), (this.dd4_1 = this.ad4_1.p()), (this.w9_1 = 2);
                                        continue t;
                                    case 2:
                                        if (((this.w9_1 = 3), (t = this.dd4_1.p1r(this)) === $())) return t;
                                        continue t;
                                    case 3:
                                        if (!t) {
                                            this.w9_1 = 5;
                                            continue t;
                                        }
                                        if (((this.ed4_1 = this.dd4_1.r()), (this.w9_1 = 4), (t = this.zd3_1.g1y(this.yd3_1, this)) === $())) return t;
                                        continue t;
                                    case 4:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 5:
                                        (this.cd4_1 = e), (this.x9_1 = 8), (this.w9_1 = 6);
                                        continue t;
                                    case 6:
                                        return (this.x9_1 = 8), this.yd3_1.mcy(this.bd4_1), e;
                                    case 7:
                                        this.x9_1 = 8;
                                        var n = this.z9_1;
                                        throw (this.yd3_1.mcy(this.bd4_1), n);
                                    case 8:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (8 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (c(O).gd4 = function (t, i) {
                        var n = new O(this.yd3_1, i);
                        return (n.zd3_1 = t), n;
                    }),
                    (c(D).rd4 = function (t, i) {
                        var n = this.b26(t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(D).cb = function (t, i) {
                        return this.rd4(null != t && a(t, o) ? t : u(), i);
                    }),
                    (c(D).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = k(this.pd4_1, this)) === $())) return t;
                                        continue t;
                                    case 1:
                                        return t;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (c(D).b26 = function (t, i) {
                        var n = new D(this.pd4_1, i);
                        return (n.qd4_1 = t), n;
                    }),
                    (c(M).g1y = function (t, i) {
                        return this.sd4_1(t, i);
                    }),
                    (c(M).a4 = function () {
                        return this.sd4_1;
                    }),
                    (c(M).equals = function (t) {
                        var i;
                        null != t && a(t, y) ? (i = !(null == t || !a(t, b)) && w(this.a4(), t.a4())) : (i = !1);
                        return i;
                    }),
                    (c(M).hashCode = function () {
                        return p(this.a4());
                    }),
                    (c(P).y2p = function (t, i) {
                        var n = this.ta(t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(P).cb = function (t, i) {
                        return this.y2p(null == t || null != t ? t : u(), i);
                    }),
                    (c(P).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        this.x9_1 = 3;
                                        this.ed5_1 = this.bd5_1;
                                        this.fd5_1 = this.dd5_1;
                                        if (((this.gd5_1 = this.fd5_1), (this.w9_1 = 1), (t = z(this.cd5_1, L(this.gd5_1, null), this)) === $())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.hd5_1 = t), (this.w9_1 = 2), (t = this.ed5_1.g1y(this.hd5_1, this)) === $())) return t;
                                        continue t;
                                    case 2:
                                        return e;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (c(P).ta = function (t, i) {
                        var n = new P(this.bd5_1, this.cd5_1, i);
                        return (n.dd5_1 = t), n;
                    }),
                    (c(Q).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        this.x9_1 = 2;
                                        (this.sd5_1 = this.rd5_1), (this.w9_1 = 1);
                                        var i = U(this.sd5_1, this.qd5_1.ud5_1, null);
                                        if ((t = this.qd5_1.td5_1.p1x(new M(i), this)) === $()) return t;
                                        continue t;
                                    case 1:
                                        return e;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (c(V).h1y = function (t, i) {
                        var n = new Q(this, t, i);
                        return (n.y9_1 = e), (n.z9_1 = null), n.oa();
                    }),
                    (c(V).p1x = function (t, i) {
                        return this.h1y(t, i);
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function (t) {
                        return h(
                            ((i = new O(t, null)),
                            ((n = function (t, n) {
                                return i.fd4(t, n);
                            }).$arity = 1),
                            n),
                        );
                        var i, n;
                    }),
                    (t.$_$.b = function (t, i) {
                        return new I(t, i);
                    }),
                    (t.$_$.c = function (t, i) {
                        return new V(t, i);
                    });
            })(t.exports, n(115754), n(519039), n(51056), n(604278));
        },
        604278: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n = i.$_$.u2,
                    s = i.$_$.bf,
                    _ = i.$_$.yj,
                    h = i.$_$.lj,
                    r = i.$_$.yd,
                    e = i.$_$.ce,
                    c = i.$_$.g,
                    u = i.$_$.s6,
                    o = i.$_$.xc,
                    a = i.$_$.ic,
                    f = i.$_$.ff,
                    $ = i.$_$.m2,
                    d = i.$_$.ae,
                    l = i.$_$.u,
                    w = i.$_$.h1,
                    b = i.$_$.z8,
                    y = i.$_$.ll,
                    p = i.$_$.te,
                    v = i.$_$.q1,
                    z = i.$_$.s3,
                    x = i.$_$.xd,
                    q = i.$_$.od,
                    g = i.$_$.rb,
                    m = i.$_$.rj;
                function k(t) {
                    this.ecy_1 = t;
                }
                function j() {}
                function E(t) {
                    S.call(this, t);
                }
                function S(t) {
                    this.ncy_1 = t;
                }
                function T(t, i, n, s, _, h, r) {
                    E.call(this, r), (this.qcy_1 = t), (this.rcy_1 = i), (this.scy_1 = n), (this.tcy_1 = s), (this.ucy_1 = _), (this.vcy_1 = h);
                }
                function R(t, i, n, s) {
                    o.call(this, s), (this.hcz_1 = t), (this.icz_1 = i), (this.jcz_1 = n);
                }
                function C(t) {
                    N.call(this, t);
                }
                function I() {
                    this.tcz_1 = W();
                    this.ucz_1 = l();
                    this.vcz_1 = l();
                    this.wcz_1 = w();
                    (this.xcz_1 = w()), (this.ycz_1 = !1), (this.zcz_1 = !0), (this.ad0_1 = null);
                }
                function A() {}
                function N(t) {
                    this.rcz_1 = t;
                }
                function O(t) {
                    this.qd0_1 = t;
                }
                function D() {}
                function L(t, i) {
                    return t(i);
                }
                function M(t) {
                    this.rd0_1 = t;
                }
                function P(t) {
                    this.sd0_1 = t;
                }
                function U() {}
                function Q() {}
                function V() {
                    this.vd0_1 = l();
                }
                function W() {
                    return new m(0, 0);
                }
                r(k, "EnumColumnAdapter"),
                    e(j, "Listener"),
                    r(S, "ExecutableQuery"),
                    r(E, "Query", c, S),
                    r(T, "SimpleQuery", c, E),
                    d(R, o),
                    r(N, "BaseTransacterImpl"),
                    r(C, "SuspendingTransacterImpl", c, N, c, [2]),
                    r(I, "Transaction"),
                    e(A, "SuspendingTransactionWithoutReturn", c, c, c, [1]),
                    r(O, "SuspendingTransactionWrapper", c, c, [A], [1]),
                    r(D, "RollbackException", c, Error),
                    e(U, "QueryResult", c, c, c, [0]),
                    r(M, "Value", c, c, [U], [0]),
                    r(P, "AsyncValue", c, c, [U], [0]),
                    e(Q, "SqlDriver"),
                    r(V, "StatementParameterInterceptor", V),
                    (s(k).fcy = function (t) {
                        var i;
                        t: {
                            for (var s = this.ecy_1, _ = 0, h = s.length; _ < h; ) {
                                var r = s[_];
                                if (((_ = (_ + 1) | 0), r.x2_1 === t)) {
                                    i = r;
                                    break t;
                                }
                            }
                            throw n("Array contains no element matching the predicate.");
                        }
                        return i;
                    }),
                    (s(k).gcy = function (t) {
                        return this.fcy(null != t && "string" == typeof t ? t : _());
                    }),
                    (s(k).hcy = function (t) {
                        return t.x2_1;
                    }),
                    (s(k).icy = function (t) {
                        return this.hcy(t instanceof h ? t : _());
                    }),
                    (s(T).ocy = function (t) {
                        return this.scy_1.wcy(this.qcy_1, this.vcy_1, t, 0, null);
                    }),
                    (s(T).toString = function () {
                        return this.tcy_1 + ":" + this.ucy_1;
                    }),
                    (s(T).lcy = function (t) {
                        this.scy_1.xcy(this.rcy_1.slice(), t);
                    }),
                    (s(T).mcy = function (t) {
                        this.scy_1.ycy(this.rcy_1.slice(), t);
                    }),
                    (s(R).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 9), (this.w9_1 = 1), (t = this.hcz_1.rcz_1.scz().j1g(this)) === a())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.kcz_1 = t), (this.lcz_1 = this.kcz_1.bd0()), null != this.lcz_1 && this.icz_1)) {
                                            throw $(f("Already in a transaction"));
                                        }
                                        (this.mcz_1 = null), (this.ncz_1 = null), (this.w9_1 = 2);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 5), (this.x9_1 = 4), (this.kcz_1.ad0_1 = this.hcz_1), (this.w9_1 = 3), (t = this.jcz_1(new O(this.kcz_1), this)) === a())) return t;
                                        continue t;
                                    case 3:
                                        this.ncz_1 = t;
                                        (this.kcz_1.ycz_1 = !0), (this.ocz_1 = u), (this.x9_1 = 9), (this.w9_1 = 7);
                                        continue t;
                                    case 4:
                                        if (((this.x9_1 = 5), this.z9_1 instanceof Error)) {
                                            this.pcz_1 = this.z9_1;
                                            (this.mcz_1 = this.pcz_1), (this.ocz_1 = u), (this.x9_1 = 9), (this.w9_1 = 7);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 5:
                                        if (((this.x9_1 = 9), (this.qcz_1 = this.z9_1), (this.w9_1 = 6), (t = this.kcz_1.cd0().j1g(this)) === a())) return t;
                                        continue t;
                                    case 6:
                                    case 8:
                                        return this.hcz_1.dd0(this.kcz_1, this.lcz_1, this.mcz_1, this.ncz_1);
                                    case 7:
                                        if (((this.x9_1 = 9), (this.w9_1 = 8), (t = this.kcz_1.cd0().j1g(this)) === a())) return t;
                                        continue t;
                                    case 9:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (9 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (s(C).fd0 = function (t, i, n) {
                        return (function (t, i, n, s) {
                            var _ = new R(t, i, n, s);
                            return (_.y9_1 = u), (_.z9_1 = null), _.oa();
                        })(this, t, i, n);
                    }),
                    (s(I).bd0 = function () {
                        return this.id0();
                    }),
                    (s(I).cd0 = function () {
                        return this.kd0(), this.jd0(this.ycz_1 && this.zcz_1);
                    }),
                    (s(I).ld0 = function (t) {
                        this.kd0(), this.ucz_1.k(t);
                    }),
                    (s(I).md0 = function (t) {
                        this.kd0(), this.vcz_1.k(t);
                    }),
                    (s(I).kd0 = function () {
                        if (!this.tcz_1.equals(W())) {
                            throw $(f("Transaction objects (`TransactionWithReturn` and `TransactionWithoutReturn`) must be used\nonly within the transaction lambda scope."));
                        }
                    }),
                    (s(N).dd0 = function (t, i, n, s) {
                        if (null == i)
                            if (t.ycz_1 && t.zcz_1) {
                                if (!t.xcz_1.h()) {
                                    var h = t.xcz_1,
                                        r = b(h);
                                    this.rcz_1.nd0(r.slice());
                                }
                                t.xcz_1.j2(), t.wcz_1.j2();
                                for (var e = t.ucz_1.p(); e.q(); ) {
                                    e.r()();
                                }
                                t.ucz_1.j2();
                            } else {
                                try {
                                    for (var c = t.vcz_1.p(); c.q(); ) {
                                        c.r()();
                                    }
                                } catch (t) {
                                    if (t instanceof Error) {
                                        var u = t;
                                        if (null != n) throw p("Exception while rolling back from an exception.\nOriginal exception: " + y(n) + "\nwith cause " + y(n.cause) + "\n\nRollback exception: " + u.toString(), u);
                                        throw u;
                                    }
                                    throw t;
                                }
                                t.vcz_1.j2();
                            }
                        else (i.zcz_1 = t.ycz_1 && t.zcz_1), i.ucz_1.u(t.ucz_1), i.vcz_1.u(t.vcz_1), i.wcz_1.u(t.wcz_1), i.xcz_1.u(t.xcz_1);
                        if (null == i && n instanceof D) {
                            var o = n.od0_1;
                            return null == o || null != o ? o : _();
                        }
                        if (null != n) throw n;
                        return null == s || null != s ? s : _();
                    }),
                    (s(N).gd0 = function (t, i) {
                        var n,
                            s,
                            _ = this.rcz_1.pd0();
                        if (null != _)
                            _.wcz_1.k(t) &&
                                i(
                                    ((s = _),
                                    function (t) {
                                        return s.xcz_1.k(t), u;
                                    }),
                                );
                        else {
                            var h = w();
                            i(
                                ((n = h),
                                function (t) {
                                    return n.k(t), u;
                                }),
                            );
                            var r = b(h);
                            this.rcz_1.nd0(r.slice());
                        }
                    }),
                    (s(N).hd0 = function (t) {
                        if (0 === t) return "()";
                        var i = v((t + 2) | 0);
                        i.f9("(?");
                        var n = (t - 1) | 0,
                            s = 0;
                        if (s < n)
                            do {
                                (s = (s + 1) | 0), i.f9(",?");
                            } while (s < n);
                        return i.g9(z(41)), i.toString();
                    }),
                    (s(M).o2 = function () {
                        return this.rd0_1;
                    }),
                    (s(M).j1g = function (t) {
                        return this.rd0_1;
                    }),
                    (s(M).toString = function () {
                        return (t = this.rd0_1), "Value(value=" + y(t) + ")";
                        var t;
                    }),
                    (s(M).hashCode = function () {
                        return null == (t = this.rd0_1) ? 0 : x(t);
                        var t;
                    }),
                    (s(M).equals = function (t) {
                        return (function (t, i) {
                            if (!(i instanceof M)) return !1;
                            var n = i instanceof M ? i.rd0_1 : _();
                            return !!q(t, n);
                        })(this.rd0_1, t);
                    }),
                    (s(P).j1g = function (t) {
                        return L(this.sd0_1, t);
                    }),
                    (s(P).toString = function () {
                        return (t = this.sd0_1), "AsyncValue(getter=" + f(t) + ")";
                        var t;
                    }),
                    (s(P).hashCode = function () {
                        return (t = this.sd0_1), x(t);
                        var t;
                    }),
                    (s(P).equals = function (t) {
                        return (function (t, i) {
                            if (!(i instanceof P)) return !1;
                            var n = i instanceof P ? i.sd0_1 : _();
                            return !!q(t, n);
                        })(this.sd0_1, t);
                    }),
                    (s(V).wd0 = function (t, i) {
                        this.vd0_1.k(i);
                    }),
                    (s(V).xd0 = function (t, i) {
                        this.vd0_1.k(i);
                    }),
                    (s(V).yd0 = function (t, i) {
                        this.vd0_1.k(i);
                    }),
                    (s(V).zd0 = function () {
                        var t = g(this.vd0_1);
                        return this.vd0_1.j2(), t;
                    }),
                    (s(P).o2 = function () {
                        throw $("The driver used with SQLDelight is asynchronous, so SQLDelight should be configured for\nasynchronous usage:\n\nsqldelight {\n  databases {\n    MyDatabase {\n      generateAsync = true\n    }\n  }\n}");
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = P),
                    (t.$_$.b = M),
                    (t.$_$.c = Q),
                    (t.$_$.d = V),
                    (t.$_$.e = k),
                    (t.$_$.f = j),
                    (t.$_$.g = function (t, i, n, s, _, h, r) {
                        return new T(t, i, n, s, _, h, r);
                    }),
                    (t.$_$.h = E),
                    (t.$_$.i = C),
                    (t.$_$.j = A),
                    (t.$_$.k = I),
                    (t.$_$.l = function (t, i, n, s, _) {
                        return (s = s === c ? null : s), _ === c ? this.td0(t, i, n, s) : _.td0.call(this, t, i, n, s);
                    }),
                    (t.$_$.m = function (t) {
                        return t;
                    }),
                    (t.$_$.n = function (t) {
                        return t;
                    }),
                    (t.$_$.o = L);
            })(t.exports, n(519039));
        },
        625470: (t, i, n) => {
            !(function (t, i, n) {
                "use strict";
                var s,
                    _,
                    h,
                    r,
                    e = i.$_$.bf,
                    c = i.$_$.zd,
                    u = i.$_$.s6,
                    o = i.$_$.lj,
                    a = i.$_$.yd,
                    f = i.$_$.g,
                    $ = i.$_$.xj,
                    d = i.$_$.z2,
                    l = i.$_$.fd,
                    w = i.$_$.lg,
                    b = n.$_$.g,
                    y = i.$_$.rj,
                    p = i.$_$.ef,
                    v = i.$_$.cf,
                    z = i.$_$.qg,
                    x = i.$_$.df,
                    q = (i.$_$.z5, i.$_$.nd),
                    g = n.$_$.c,
                    m = n.$_$.f,
                    k = i.$_$.ce,
                    j = i.$_$.ee,
                    E = n.$_$.h,
                    S = n.$_$.a;
                function T() {}
                function R(t, i, n) {
                    o.call(this, t, i), (this.lbo_1 = n);
                }
                function C() {}
                function I(t, i) {
                    d(i, this), l(this, I), (this.mbo_1 = t);
                }
                function A(t) {
                    this.vbo_1 = t;
                }
                function N(t, i, n) {
                    for (var s = n, _ = 0; s > 0; ) {
                        var h = t.vbo_1.qv(i, _, s);
                        if (-1 === h) throw new b("Expected " + n + " bytes; got " + _);
                        (s = (s - h) | 0), (_ = (_ + h) | 0);
                    }
                }
                function O() {
                    (h = this), (this.sbp_1 = -65536), (this.tbp_1 = -2147418112), (this.ubp_1 = new V(""));
                }
                function D() {
                    return null == h && new O(), h;
                }
                function L(t, i, n) {
                    D(), (i = i === f ? new y(-1, -1) : i), (n = n === f ? new y(-1, -1) : n), A.call(this, t), (this.wbp_1 = i), (this.xbp_1 = n), (this.ybp_1 = new Int8Array(8)), (this.zbp_1 = !1), (this.abq_1 = !1);
                }
                function M(t, i, n) {
                    (this.dbq_1 = t), (this.ebq_1 = i), (this.fbq_1 = n);
                }
                function P(t, i) {
                    (this.gbq_1 = t), (this.hbq_1 = i);
                }
                function U(t, i, n) {
                    (this.ibq_1 = t), (this.jbq_1 = i), (this.kbq_1 = n);
                }
                function Q(t, i) {
                    (this.lbq_1 = t), (this.mbq_1 = i);
                }
                function V(t) {
                    this.nbq_1 = t;
                }
                function W(t) {
                    (t = t === f ? new m() : t), (this.obq_1 = t);
                }
                function B() {}
                function F() {}
                function G(t) {
                    S(t, this), l(this, G);
                }
                c(T),
                    a(R, "Kind", f, o),
                    c(C),
                    a(I, "ThriftException", f, $),
                    a(A, "BaseProtocol"),
                    c(O),
                    a(L, "BinaryProtocol", f, A),
                    a(M, "FieldMetadata"),
                    a(P, "ListMetadata"),
                    a(U, "MapMetadata"),
                    a(Q, "SetMetadata"),
                    a(V, "StructMetadata"),
                    k(B, "Transport"),
                    a(W, "BufferTransport", W, f, [B]),
                    j(F, "ProtocolUtil"),
                    a(G, "ProtocolException", f, E),
                    (e(I).nbo = function (t) {
                        t.obo("TApplicationException");
                        var i = this.message;
                        null == i || (t.pbo("message", 1, 11), t.qbo(i), t.rbo()), t.pbo("type", 2, 8), t.sbo(this.mbo_1.lbo_1), t.rbo(), t.tbo(), t.ubo();
                    }),
                    (e(A).e5 = function () {
                        this.vbo_1.e5();
                    }),
                    (e(L).obo = function (t) {}),
                    (e(L).ubo = function () {}),
                    (e(L).pbo = function (t, i, n) {
                        this.j38(n), this.bbq(p(i));
                    }),
                    (e(L).rbo = function () {}),
                    (e(L).tbo = function () {
                        this.j38(0);
                    }),
                    (e(L).wbo = function (t, i) {
                        this.j38(t), this.sbo(i);
                    }),
                    (e(L).xbo = function () {}),
                    (e(L).ybo = function (t) {
                        this.j38(t ? 1 : 0);
                    }),
                    (e(L).j38 = function (t) {
                        (this.ybp_1[0] = t), this.vbo_1.f38(this.ybp_1, 0, 1);
                    }),
                    (e(L).bbq = function (t) {
                        (this.ybp_1[0] = v((t >> 8) & 255)), (this.ybp_1[1] = v(255 & t)), this.vbo_1.f38(this.ybp_1, 0, 2);
                    }),
                    (e(L).sbo = function (t) {
                        (this.ybp_1[0] = v((t >> 24) & 255)), (this.ybp_1[1] = v((t >> 16) & 255)), (this.ybp_1[2] = v((t >> 8) & 255)), (this.ybp_1[3] = v(255 & t)), this.vbo_1.f38(this.ybp_1, 0, 4);
                    }),
                    (e(L).zbo = function (t) {
                        (this.ybp_1[0] = t.r3(56).t3(new y(255, 0)).w3()), (this.ybp_1[1] = t.r3(48).t3(new y(255, 0)).w3()), (this.ybp_1[2] = t.r3(40).t3(new y(255, 0)).w3()), (this.ybp_1[3] = t.r3(32).t3(new y(255, 0)).w3()), (this.ybp_1[4] = t.r3(24).t3(new y(255, 0)).w3()), (this.ybp_1[5] = t.r3(16).t3(new y(255, 0)).w3()), (this.ybp_1[6] = t.r3(8).t3(new y(255, 0)).w3()), (this.ybp_1[7] = t.t3(new y(255, 0)).w3()), this.vbo_1.f38(this.ybp_1, 0, 8);
                    }),
                    (e(L).qbo = function (t) {
                        var i = z(t);
                        this.sbo(i.length), this.vbo_1.cbq(i);
                    }),
                    (e(L).abp = function (t) {
                        this.sbo(t.s()), this.vbo_1.cbq(t.mu());
                    }),
                    (e(L).bbp = function () {
                        return D().ubp_1;
                    }),
                    (e(L).cbp = function () {}),
                    (e(L).dbp = function () {
                        var t = this.ev();
                        return new M("", t, 0 === t ? 0 : this.mbp());
                    }),
                    (e(L).ebp = function () {}),
                    (e(L).fbp = function () {
                        var t = this.ev(),
                            i = this.ev(),
                            n = this.nbp();
                        if (!this.xbp_1.equals(new y(-1, -1)) && x(n).e1(this.xbp_1) > 0) throw new G("Container size limit exceeded");
                        return new U(t, i, n);
                    }),
                    (e(L).gbp = function () {}),
                    (e(L).hbp = function () {
                        var t = this.ev(),
                            i = this.nbp();
                        if (!this.xbp_1.equals(new y(-1, -1)) && x(i).e1(this.xbp_1) > 0) throw new G("Container size limit exceeded");
                        return new P(t, i);
                    }),
                    (e(L).ibp = function () {}),
                    (e(L).jbp = function () {
                        var t = this.ev(),
                            i = this.nbp();
                        if (!this.xbp_1.equals(new y(-1, -1)) && x(i).e1(this.xbp_1) > 0) throw new G("Container size limit exceeded");
                        return new Q(t, i);
                    }),
                    (e(L).kbp = function () {}),
                    (e(L).lbp = function () {
                        return 1 === this.ev();
                    }),
                    (e(L).ev = function () {
                        return N(this, this.ybp_1, 1), this.ybp_1[0];
                    }),
                    (e(L).mbp = function () {
                        return N(this, this.ybp_1, 2), p(((255 & this.ybp_1[0]) << 8) | (255 & this.ybp_1[1]));
                    }),
                    (e(L).nbp = function () {
                        return N(this, this.ybp_1, 4), ((255 & this.ybp_1[0]) << 24) | ((255 & this.ybp_1[1]) << 16) | ((255 & this.ybp_1[2]) << 8) | (255 & this.ybp_1[3]);
                    }),
                    (e(L).obp = function () {
                        return (
                            N(this, this.ybp_1, 8),
                            x(this.ybp_1[0])
                                .t3(new y(255, 0))
                                .q3(56)
                                .u3(x(this.ybp_1[1]).t3(new y(255, 0)).q3(48))
                                .u3(x(this.ybp_1[2]).t3(new y(255, 0)).q3(40))
                                .u3(x(this.ybp_1[3]).t3(new y(255, 0)).q3(32))
                                .u3(x(this.ybp_1[4]).t3(new y(255, 0)).q3(24))
                                .u3(x(this.ybp_1[5]).t3(new y(255, 0)).q3(16))
                                .u3(x(this.ybp_1[6]).t3(new y(255, 0)).q3(8))
                                .u3(x(this.ybp_1[7]).t3(new y(255, 0)))
                        );
                    }),
                    (e(L).pbp = function () {
                        var t = this.obp();
                        return q(t);
                    }),
                    (e(L).qbp = function () {
                        var t,
                            i,
                            n,
                            s = this.nbp();
                        if (!this.wbp_1.equals(new y(-1, -1)) && x(s).e1(this.wbp_1) > 0) throw new G("String size limit exceeded");
                        return (t = this), (i = s), (n = new Int8Array(i)), N(t, n, i), w(n);
                    }),
                    (e(L).rbp = function () {
                        var t = this.nbp();
                        if (!this.wbp_1.equals(new y(-1, -1)) && x(t).e1(this.wbp_1) > 0) throw new G("Binary size limit exceeded");
                        var i = new Int8Array(t);
                        return N(this, i, i.length), g().du(i);
                    }),
                    (e(W).qv = function (t, i, n) {
                        return this.obq_1.qv(t, i, n);
                    }),
                    (e(W).f38 = function (t, i, n) {
                        this.obq_1.vt(t, i, n);
                    }),
                    (e(W).e5 = function () {
                        return this.obq_1.e5();
                    }),
                    (e(F).pbq = function (t, i) {
                        if (2 === i) t.lbp();
                        else if (3 === i) t.ev();
                        else if (6 === i) t.mbp();
                        else if (8 === i) t.nbp();
                        else if (10 === i) t.obp();
                        else if (4 === i) t.pbp();
                        else if (11 === i) t.qbp();
                        else if (12 === i) {
                            t.bbp();
                            t: for (;;) {
                                var n = t.dbp();
                                if (0 === n.ebq_1) break t;
                                this.pbq(t, n.ebq_1), t.ebp();
                            }
                            t.cbp();
                        } else if (15 === i) {
                            var s = t.hbp(),
                                _ = 0,
                                h = s.hbq_1;
                            if (_ < h)
                                do {
                                    (_ = (_ + 1) | 0), this.pbq(t, s.gbq_1);
                                } while (_ < h);
                            t.ibp();
                        } else if (14 === i) {
                            var r = t.jbp(),
                                e = 0,
                                c = r.mbq_1;
                            if (e < c)
                                do {
                                    (e = (e + 1) | 0), this.pbq(t, r.lbq_1);
                                } while (e < c);
                            t.kbp();
                        } else {
                            if (13 !== i) throw new G("Unrecognized TType value: " + i);
                            var u = t.fbp(),
                                o = 0,
                                a = u.kbq_1;
                            if (o < a)
                                do {
                                    (o = (o + 1) | 0), this.pbq(t, u.ibq_1), this.pbq(t, u.jbq_1);
                                } while (o < a);
                            t.gbp();
                        }
                    }),
                    (e(W).cbq = function (t) {
                        this.f38(t, 0, t.length);
                    }),
                    new T(),
                    new C(),
                    (r = new F()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = L),
                    (t.$_$.b = W),
                    (t.$_$.c = I),
                    (t.$_$.d = function () {
                        return (
                            (function () {
                                if (_) return u;
                                (_ = !0), new R("UNKNOWN", 0, 0), new R("UNKNOWN_METHOD", 1, 1), new R("INVALID_MESSAGE_TYPE", 2, 2), new R("WRONG_METHOD_NAME", 3, 3), new R("BAD_SEQUENCE_ID", 4, 4), new R("MISSING_RESULT", 5, 5), new R("INTERNAL_ERROR", 6, 6), (s = new R("PROTOCOL_ERROR", 7, 7)), new R("INVALID_TRANSFORM", 8, 8), new R("INVALID_PROTOCOL", 9, 9), new R("UNSUPPORTED_CLIENT_TYPE", 10, 10);
                            })(),
                            s
                        );
                    }),
                    (t.$_$.e = r);
            })(t.exports, n(519039), n(222818));
        },
        937455: (t, i, n) => {
            !(function (t, i) {
                "use strict";
                var n,
                    s,
                    _,
                    h = i.$_$.wf,
                    r = i.$_$.ga,
                    e = i.$_$.s3,
                    c = i.$_$.x3,
                    u = i.$_$.va,
                    o = i.$_$.f6,
                    a = i.$_$.bf,
                    f = i.$_$.zd,
                    $ = i.$_$.ff,
                    d = i.$_$.i2,
                    l = (i.$_$.s6, i.$_$.hd),
                    w = i.$_$.hg,
                    b = i.$_$.j8,
                    y = i.$_$.l8,
                    p = i.$_$.ld,
                    v = i.$_$.yj,
                    z = i.$_$.hj,
                    x = i.$_$.yd,
                    q = i.$_$.g,
                    g = i.$_$.cf;
                function m() {
                    return s || ((s = !0), r([h(0, 8), h(9, 13), h(14, 18), h(19, 23), h(24, 36)]), r([8, 13, 18, 23]), (n = u(c(e(48), e(57)), c(e(97), e(102))))), n;
                }
                function k() {
                    (_ = this), (this.mw_1 = r([h(0, 4), h(4, 6), h(6, 8), h(8, 10), h(10, 16)]));
                }
                function j() {
                    return null == _ && new k(), _;
                }
                function E(t) {
                    if ((j(), (this.nw_1 = t), 16 !== this.nw_1.length)) {
                        var i = "Invalid UUID bytes. Expected 16 bytes; found " + this.nw_1.length;
                        throw d($(i));
                    }
                }
                f(k),
                    x(E, "Uuid", q, q, [z]),
                    (a(E).toString = function () {
                        for (var t = l(36), i = 0, n = j().mw_1.p(); n.q(); ) {
                            var s = n.r(),
                                _ = s.f1_1,
                                h = s.g1_1;
                            if (_ <= h)
                                do {
                                    var r = _;
                                    _ = (_ + 1) | 0;
                                    var c = this.nw_1[r],
                                        u = (c >> 4) & 15,
                                        o = 15 & c,
                                        a = i;
                                    (i = (a + 1) | 0), (t[a] = m().t(u).r1_1);
                                    var f = i;
                                    (i = (f + 1) | 0), (t[f] = m().t(o).r1_1);
                                } while (r !== h);
                            if (i < 36) {
                                var $ = i;
                                (i = ($ + 1) | 0), (t[$] = e(45));
                            }
                        }
                        return w(t);
                    }),
                    (a(E).equals = function (t) {
                        return t instanceof E && b(this.nw_1, t.nw_1);
                    }),
                    (a(E).hashCode = function () {
                        return y(this.nw_1);
                    }),
                    (a(E).ow = function (t) {
                        var i = 0;
                        if (i < 16)
                            do {
                                var n = i;
                                i = (i + 1) | 0;
                                var s = p(this.nw_1[n], t.nw_1[n]);
                                if (0 !== s) return s;
                            } while (i < 16);
                        return 0;
                    }),
                    (a(E).d = function (t) {
                        return this.ow(t instanceof E ? t : v());
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function () {
                        var t = o().am(16);
                        return (t[6] = g((15 & t[6]) | 64)), (t[8] = g((63 & t[8]) | 128)), new E(t);
                    });
            })(t.exports, n(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-522628f7.713ab1da.js.map
