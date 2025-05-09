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
                    (n = n === i ? localStorage : n), (this.fbe_1 = n);
                }
                (0, t.$_$.ld)(_, "StorageSettings", _),
                    (r(_).gbe = function (n) {
                        return this.fbe_1.removeItem(n);
                    }),
                    (r(_).hbe = function (n, t) {
                        this.fbe_1.setItem(n, t);
                    }),
                    (r(_).ibe = function (n) {
                        return this.fbe_1.getItem(n);
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = _);
            })(n.exports, i(519039));
        },
        463219: (n, t, i) => {
            !(function (n, t, i, r, _, e, $, u, s) {
                "use strict";
                var l,
                    o,
                    h,
                    a,
                    c = t.$_$.d,
                    f = i.$_$.n6,
                    p = r.$_$.e,
                    d = i.$_$.hb,
                    v = _.$_$.d,
                    w = _.$_$.e,
                    b = _.$_$.h,
                    g = i.$_$.g,
                    y = i.$_$.fk,
                    m = i.$_$.oe,
                    z = i.$_$.ld,
                    x = i.$_$.of,
                    q = i.$_$.id,
                    k = e.$_$.i3,
                    C = e.$_$.p2,
                    I = e.$_$.y1,
                    S = i.$_$.ae,
                    E = e.$_$.h3,
                    R = i.$_$.sk,
                    j = i.$_$.y9,
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
                    Y = i.$_$.rk,
                    Z = i.$_$.e7,
                    nn = i.$_$.k9,
                    tn = i.$_$.u9,
                    rn = e.$_$.e2,
                    _n = i.$_$.z7,
                    en = i.$_$.t,
                    $n = u.$_$.l,
                    un = i.$_$.se,
                    sn = u.$_$.k,
                    ln = s.$_$.m3,
                    on = s.$_$.t2,
                    hn = s.$_$.m2,
                    an = s.$_$.u2,
                    cn = u.$_$.c;
                function fn(n) {
                    var t = c();
                    if (!t.g5s_1.h())
                        for (var i = "CacheMissException: " + n, r = t.g5s_1.s2().p(); r.q(); ) {
                            r.r().m2().i(i, null);
                        }
                    return f;
                }
                function pn(n) {
                    return function () {
                        var t = new p();
                        t.d4b(d(n.a9h_1)),
                            t.x4a(n.z9g_1),
                            null != n.b9h_1 &&
                                (v(t, fn),
                                w(
                                    t,
                                    n.b9h_1.e9h(),
                                    h,
                                    (function () {
                                        null == a && new xn();
                                        return a;
                                    })(),
                                ),
                                b(t, !0));
                        var i = n.c9h_1;
                        return null == i || t.e4b(i), t.g4b(), t.cz();
                    };
                }
                function dn(n, t, i, r) {
                    (r = r === g ? null : r), (this.z9g_1 = n), (this.a9h_1 = t), (this.b9h_1 = i), (this.c9h_1 = r);
                    this.d9h_1 = y(pn(this));
                }
                function vn() {
                    (l = this), (this.g9h_1 = new X("https://api.x.com/graphql"));
                }
                function wn(n) {
                    K.call(this, n);
                }
                function bn(n) {
                    K.call(this, n);
                }
                function gn() {}
                function yn(n, t, i) {
                    var r = n.x54_1.f12_1.p2("postId"),
                        _ = n.x54_1.f12_1.p2("rest_id"),
                        e = n.x54_1.f12_1.p2("timelineId"),
                        $ = n.x54_1.f12_1.p2("query");
                    return Y(i) + (null != r ? ":" + Y(r) : null != _ ? ":" + Y(_) : null != e ? ":" + Y(e) : null != $ ? ":" + Y($) : "");
                }
                function mn(n, t) {
                    var i = n.x54_1.f12_1.p2("account_id"),
                        r = n.x54_1.f12_1.p2("product_codes"),
                        _ = null != r && S(r, Z) ? r : null;
                    return nn(tn([i, null == _ ? null : nn(_, "-"), n.x54_1.f12_1.p2("search_filter_id")]), ":");
                }
                function zn() {}
                function xn() {
                    (a = this), cn.call(this);
                }
                z(dn, "ApolloClientServiceImpl"),
                    M(vn, "RequestComposer"),
                    H(wn, K, g, [1]),
                    H(bn, K, g, [3]),
                    M(gn, "RetryErrors"),
                    M(zn, "XCacheKeyGenerator"),
                    M(xn, "XCacheResolver", g, cn),
                    (m(dn).f9h = function () {
                        var n = this.d9h_1;
                        return (
                            q(
                                "client",
                                1,
                                x,
                                function (n) {
                                    return n.f9h();
                                },
                                null,
                            ),
                            n.m2()
                        );
                    }),
                    (m(vn).v15 = function (n) {
                        var t = "https://api.x.com/graphql/" + n.dz_1.operationId() + "/" + n.dz_1.operationName();
                        return (function (n, t, i) {
                            var r = i.dz_1,
                                _ = S(r, I) ? C(i.dz_1, k().p13_1) : null,
                                e = t.w16_1;
                            return null != _ && (e = E.i15(e, j(R("variables", _)))), t.b17(g, e).cz();
                        })(0, this.g9h_1.v15(n).b17(g, t).cz(), n);
                    }),
                    (m(wn).r48 = function (n, t) {
                        var i = this.s48(n, t);
                        return (i.s9_1 = f), (i.t9_1 = null), i.ia();
                    }),
                    (m(wn).wa = function (n, t) {
                        return this.r48(n instanceof B ? n : N(), t);
                    }),
                    (m(wn).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var n = this.q9_1;
                                if (0 === n) {
                                    this.r9_1 = 1;
                                    var t,
                                        i = this.p9h_1.i10_1;
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
                    (m(wn).s48 = function (n, t) {
                        var i = new wn(t);
                        return (i.p9h_1 = n), i;
                    }),
                    (m(bn).o4h = function (n, t, i, r) {
                        var _ = this.p4h(n, t, i, r);
                        return (_.s9_1 = f), (_.t9_1 = null), _.ia();
                    }),
                    (m(bn).q4h = function (n, t, i, r) {
                        var _ = null != n && S(n, J) ? n : N(),
                            e = t instanceof Error ? t : N();
                        return this.o4h(_, e, i instanceof L ? i : N(), r);
                    }),
                    (m(bn).ia = function () {
                        var n = this.s9_1;
                        n: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var t = this.a9i_1.y3(),
                                            i = 50 * Math.pow(4, t);
                                        if (((this.b9i_1 = Q(i, P())), (this.q9_1 = 1), (n = T(this.b9i_1, this)) === U())) return n;
                                        continue n;
                                    case 1:
                                        return this.a9i_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (n) {
                                var r = n;
                                if (2 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (m(bn).p4h = function (n, t, i, r) {
                        var _ = new bn(r);
                        return (_.y9h_1 = n), (_.z9h_1 = t), (_.a9i_1 = i), _;
                    }),
                    (m(gn).m4d = function (n, t) {
                        var i,
                            r,
                            _ = n
                                .pz()
                                .ty(((i = n), (r = i.dz_1), S(r, I) || S(r, G) ? A() : i.gz_1))
                                .cz(),
                            e = n.dz_1;
                        if (S(e, G)) return t.j4d(_);
                        var $,
                            u,
                            s = t.j4d(_),
                            l = V(
                                s,
                                (($ = new wn(null)),
                                ((u = function (n, t) {
                                    return $.r48(n, t);
                                }).$arity = 1),
                                u),
                            ),
                            o = W(
                                l,
                                (function (n) {
                                    var t = new bn(n),
                                        i = function (n, i, r, _) {
                                            return t.o4h(n, i, r, _);
                                        };
                                    return (i.$arity = 3), i;
                                })(null),
                            );
                        return o;
                    }),
                    (m(gn).toString = function () {
                        return "RetryErrors";
                    }),
                    (m(gn).hashCode = function () {
                        return -1546425599;
                    }),
                    (m(gn).equals = function (n) {
                        return this === n || (n instanceof gn && (n instanceof gn || N(), !0));
                    }),
                    (m(zn).y54 = function (n, t) {
                        var i,
                            r = n.p2("__typename"),
                            _ = null != r && "string" == typeof r ? r : null,
                            e = n.p2("id"),
                            $ = n.p2("rest_id"),
                            u = rn(t.w54_1.i11_1.e11());
                        if (_ === an().b8i_1.d11_1) {
                            var s = n.p2("entry_id"),
                                l = n.p2("sort_index"),
                                o = yn(t, 0, e);
                            i = sn(_, [o, ":", Y(s), ":", Y(l)]);
                        } else if (_ === hn().f8g_1.d11_1) i = sn(_, [Y(e), Y($)]);
                        else if (_ === on().a8i_1.d11_1) {
                            var h = yn(t, 0, e);
                            i = sn(_, [h]);
                        } else {
                            if (_ === ln().g8k_1.d11_1) i = sn(_, [mn(t)]);
                            else if (null != $ && null != _) i = sn(_, [un($)]);
                            else if (null != e && null != _) i = sn(_, [un(e)]);
                            else if (!u.h() && !(null == _)) {
                                for (var a = en(_n(u, 10)), c = u.p(); c.q(); ) {
                                    var f = c.r(),
                                        p = Y(n.p2(f));
                                    a.k(p);
                                }
                                i = $n(_, a);
                            } else i = null;
                        }
                        return i;
                    }),
                    (m(xn).z54 = function (n, t) {
                        var i = n.i11_1.e11().d11_1,
                            r = n.c12("id", t).x14(),
                            _ = n.c12("rest_id", t).x14();
                        return null != _ && "string" == typeof _ ? sn(i, [_]) : null != r && "string" == typeof r ? sn(i, [r]) : null;
                    }),
                    (o = new gn()),
                    (h = new zn()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = dn),
                    (n.$_$.b = function () {
                        return null == l && new vn(), l;
                    }),
                    (n.$_$.c = o);
            })(n.exports, i(350269), i(519039), i(303184), i(908893), i(170047), i(115754), i(360310), i(534449));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.a996660a.js.map
