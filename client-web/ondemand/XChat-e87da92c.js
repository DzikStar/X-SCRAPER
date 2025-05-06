(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (n, t, i) => {
            !(function (n, t) {
                "use strict";
                t.$_$.n6;
                var i = t.$_$.g,
                    r = t.$_$.oe;
                function _(n) {
                    (n = n === i ? localStorage : n), (this.jbd_1 = n);
                }
                (0, t.$_$.ld)(_, "StorageSettings", _),
                    (r(_).kbd = function (n) {
                        return this.jbd_1.removeItem(n);
                    }),
                    (r(_).lbd = function (n, t) {
                        this.jbd_1.setItem(n, t);
                    }),
                    (r(_).mbd = function (n) {
                        return this.jbd_1.getItem(n);
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = _);
            })(n.exports, i(519039));
        },
        463219: (n, t, i) => {
            !(function (n, t, i, r, _, e, $, u, s) {
                "use strict";
                var o,
                    l,
                    c,
                    h,
                    a = t.$_$.d,
                    f = i.$_$.n6,
                    d = r.$_$.e,
                    p = i.$_$.hb,
                    v = _.$_$.d,
                    g = _.$_$.e,
                    w = _.$_$.h,
                    b = i.$_$.g,
                    m = i.$_$.fk,
                    q = i.$_$.oe,
                    y = i.$_$.ld,
                    k = i.$_$.of,
                    z = i.$_$.id,
                    j = e.$_$.i3,
                    x = e.$_$.p2,
                    C = e.$_$.y1,
                    I = i.$_$.ae,
                    R = e.$_$.h3,
                    S = i.$_$.sk,
                    E = i.$_$.y9,
                    X = e.$_$.a,
                    M = i.$_$.rd,
                    A = e.$_$.c3,
                    G = e.$_$.q1,
                    K = i.$_$.lc,
                    N = i.$_$.fj,
                    B = e.$_$.s,
                    D = e.$_$.t2,
                    F = e.$_$.u2,
                    H = i.$_$.qd,
                    J = $.$_$.a1,
                    L = i.$_$.yi,
                    O = i.$_$.d6,
                    P = i.$_$.m,
                    Q = i.$_$.ii,
                    T = $.$_$.n,
                    U = i.$_$.wb,
                    V = $.$_$.z1,
                    W = $.$_$.d2,
                    Y = e.$_$.e2,
                    Z = i.$_$.rk,
                    nn = i.$_$.z7,
                    tn = i.$_$.t,
                    rn = u.$_$.l,
                    _n = i.$_$.se,
                    en = u.$_$.k,
                    $n = s.$_$.t2,
                    un = s.$_$.m2,
                    sn = s.$_$.u2,
                    on = u.$_$.c;
                function ln(n) {
                    var t = a();
                    if (!t.f5s_1.h())
                        for (var i = "CacheMissException: " + n, r = t.f5s_1.s2().p(); r.q(); ) {
                            r.r().m2().i(i, null);
                        }
                    return f;
                }
                function cn(n) {
                    return function () {
                        var t = new d();
                        t.c4b(p(n.k9g_1)),
                            t.w4a(n.j9g_1),
                            null != n.l9g_1 &&
                                (v(t, ln),
                                g(
                                    t,
                                    n.l9g_1.o9g(),
                                    c,
                                    (function () {
                                        null == h && new gn();
                                        return h;
                                    })(),
                                ),
                                w(t, !0));
                        var i = n.m9g_1;
                        return null == i || t.d4b(i), t.f4b(), t.cz();
                    };
                }
                function hn(n, t, i, r) {
                    (r = r === b ? null : r), (this.j9g_1 = n), (this.k9g_1 = t), (this.l9g_1 = i), (this.m9g_1 = r);
                    this.n9g_1 = m(cn(this));
                }
                function an() {
                    (o = this), (this.q9g_1 = new X("https://api.x.com/graphql"));
                }
                function fn(n) {
                    K.call(this, n);
                }
                function dn(n) {
                    K.call(this, n);
                }
                function pn() {}
                function vn() {}
                function gn() {
                    (h = this), on.call(this);
                }
                y(hn, "ApolloClientServiceImpl"),
                    M(an, "RequestComposer"),
                    H(fn, K, b, [1]),
                    H(dn, K, b, [3]),
                    M(pn, "RetryErrors"),
                    M(vn, "XCacheKeyGenerator"),
                    M(gn, "XCacheResolver", b, on),
                    (q(hn).p9g = function () {
                        var n = this.n9g_1;
                        return (
                            z(
                                "client",
                                1,
                                k,
                                function (n) {
                                    return n.p9g();
                                },
                                null,
                            ),
                            n.m2()
                        );
                    }),
                    (q(an).v15 = function (n) {
                        var t = "https://api.x.com/graphql/" + n.dz_1.operationId() + "/" + n.dz_1.operationName();
                        return (function (n, t, i) {
                            var r = i.dz_1,
                                _ = I(r, C) ? x(i.dz_1, j().p13_1) : null,
                                e = t.w16_1;
                            return null != _ && (e = R.i15(e, E(S("variables", _)))), t.b17(b, e).cz();
                        })(0, this.q9g_1.v15(n).b17(b, t).cz(), n);
                    }),
                    (q(fn).q48 = function (n, t) {
                        var i = this.r48(n, t);
                        return (i.s9_1 = f), (i.t9_1 = null), i.ia();
                    }),
                    (q(fn).wa = function (n, t) {
                        return this.q48(n instanceof B ? n : N(), t);
                    }),
                    (q(fn).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var n = this.q9_1;
                                if (0 === n) {
                                    this.r9_1 = 1;
                                    var t,
                                        i = this.z9g_1.i10_1;
                                    if (i instanceof F) t = !0;
                                    else {
                                        var r;
                                        if (i instanceof D) {
                                            var _ = i.u19_1;
                                            r = 500 <= _ && _ <= 599;
                                        } else r = !1;
                                        t = r;
                                    }
                                    if (t) throw i;
                                    return f;
                                }
                                if (1 === n) throw this.t9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (q(fn).r48 = function (n, t) {
                        var i = new fn(t);
                        return (i.z9g_1 = n), i;
                    }),
                    (q(dn).n4h = function (n, t, i, r) {
                        var _ = this.o4h(n, t, i, r);
                        return (_.s9_1 = f), (_.t9_1 = null), _.ia();
                    }),
                    (q(dn).p4h = function (n, t, i, r) {
                        var _ = null != n && I(n, J) ? n : N(),
                            e = t instanceof Error ? t : N();
                        return this.n4h(_, e, i instanceof L ? i : N(), r);
                    }),
                    (q(dn).ia = function () {
                        var n = this.s9_1;
                        n: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var t = this.k9h_1.y3(),
                                            i = 50 * Math.pow(4, t);
                                        if (((this.l9h_1 = Q(i, P())), (this.q9_1 = 1), (n = T(this.l9h_1, this)) === U())) return n;
                                        continue n;
                                    case 1:
                                        return this.k9h_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (n) {
                                var r = n;
                                if (2 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (q(dn).o4h = function (n, t, i, r) {
                        var _ = new dn(r);
                        return (_.i9h_1 = n), (_.j9h_1 = t), (_.k9h_1 = i), _;
                    }),
                    (q(pn).l4d = function (n, t) {
                        var i,
                            r,
                            _ = n
                                .pz()
                                .ty(((i = n), (r = i.dz_1), I(r, C) || I(r, G) ? A() : i.gz_1))
                                .cz(),
                            e = n.dz_1;
                        if (I(e, G)) return t.i4d(_);
                        var $,
                            u,
                            s = t.i4d(_),
                            o = V(
                                s,
                                (($ = new fn(null)),
                                ((u = function (n, t) {
                                    return $.q48(n, t);
                                }).$arity = 1),
                                u),
                            ),
                            l = W(
                                o,
                                (function (n) {
                                    var t = new dn(n),
                                        i = function (n, i, r, _) {
                                            return t.n4h(n, i, r, _);
                                        };
                                    return (i.$arity = 3), i;
                                })(null),
                            );
                        return l;
                    }),
                    (q(pn).toString = function () {
                        return "RetryErrors";
                    }),
                    (q(pn).hashCode = function () {
                        return -1546425599;
                    }),
                    (q(pn).equals = function (n) {
                        return this === n || (n instanceof pn && (n instanceof pn || N(), !0));
                    }),
                    (q(vn).x54 = function (n, t) {
                        var i,
                            r = n.p2("__typename"),
                            _ = null != r && "string" == typeof r ? r : null,
                            e = n.p2("id"),
                            $ = n.p2("rest_id"),
                            u = Y(t.v54_1.i11_1.e11()),
                            s = t.w54_1.f12_1.p2("postId"),
                            o = t.w54_1.f12_1.p2("rest_id"),
                            l = t.w54_1.f12_1.p2("timelineId"),
                            c = Z(e) + (null != s ? ":" + Z(s) : null != o ? ":" + Z(o) : null != l ? ":" + Z(l) : "");
                        if (_ === sn().m8h_1.d11_1) {
                            var h = n.p2("entry_id"),
                                a = n.p2("sort_index");
                            i = en(_, [c, ":", Z(h), ":", Z(a)]);
                        } else {
                            if (_ === un().q8f_1.d11_1) i = en(_, [Z(e), Z($)]);
                            else if (_ === $n().l8h_1.d11_1) i = en(_, [c]);
                            else if (null != $ && null != _) i = en(_, [_n($)]);
                            else if (null != e && null != _) i = en(_, [_n(e)]);
                            else if (!u.h() && !(null == _)) {
                                for (var f = tn(nn(u, 10)), d = u.p(); d.q(); ) {
                                    var p = d.r(),
                                        v = Z(n.p2(p));
                                    f.k(v);
                                }
                                i = rn(_, f);
                            } else i = null;
                        }
                        return i;
                    }),
                    (q(gn).y54 = function (n, t) {
                        var i = n.i11_1.e11().d11_1,
                            r = n.c12("id", t).x14(),
                            _ = n.c12("rest_id", t).x14();
                        return null != _ && "string" == typeof _ ? en(i, [_]) : null != r && "string" == typeof r ? en(i, [r]) : null;
                    }),
                    (l = new pn()),
                    (c = new vn()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = hn),
                    (n.$_$.b = function () {
                        return null == o && new an(), o;
                    }),
                    (n.$_$.c = l);
            })(n.exports, i(350269), i(519039), i(303184), i(908893), i(170047), i(115754), i(360310), i(534449));
        },
        90906: (n, t, i) => {
            !(function (n, t, i) {
                "use strict";
                var r = t.$_$.e6,
                    _ = i.$_$.b,
                    e = t.$_$.oe,
                    $ = i.$_$.d;
                function u() {
                    this.m9h_1 = r;
                }
                (0, t.$_$.ld)(u, "RealXClock", u),
                    (e(u).j5s = function () {
                        return _.j5s();
                    }),
                    (e(u).n9h = function () {
                        return $().h6a();
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = u);
            })(n.exports, i(519039), i(738426));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.6a0bc20a.js.map
