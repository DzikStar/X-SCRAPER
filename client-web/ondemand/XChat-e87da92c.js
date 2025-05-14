(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                t.$_$.n6;
                var r = t.$_$.g,
                    e = t.$_$.oe,
                    _ = t.$_$.kh;
                function i(n) {
                    (n = n === r ? localStorage : n), (this.oba_1 = n);
                }
                (0, t.$_$.ld)(i, "StorageSettings", i),
                    (e(i).pba = function (n) {
                        return this.oba_1.removeItem(n);
                    }),
                    (e(i).qba = function (n, t) {
                        this.oba_1.setItem(n, t);
                    }),
                    (e(i).rba = function (n) {
                        return this.oba_1.getItem(n);
                    }),
                    (e(i).sba = function (n, t) {
                        var r = this.oba_1,
                            e = t.toString();
                        r.setItem(n, e);
                    }),
                    (e(i).tba = function (n, t) {
                        var r = this.oba_1.getItem(n),
                            e = null == r ? null : _(r);
                        return null == e ? t : e;
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = i);
            })(n.exports, r(519039));
        },
        463219: (n, t, r) => {
            !(function (n, t, r, e, _, i, $, u, s) {
                "use strict";
                var l,
                    o,
                    a,
                    c,
                    f = t.$_$.d,
                    h = r.$_$.n6,
                    d = e.$_$.e,
                    p = r.$_$.hb,
                    v = _.$_$.d,
                    w = _.$_$.e,
                    b = _.$_$.h,
                    g = r.$_$.g,
                    y = r.$_$.fk,
                    m = r.$_$.oe,
                    x = r.$_$.ld,
                    q = r.$_$.of,
                    z = r.$_$.id,
                    k = i.$_$.i3,
                    C = i.$_$.p2,
                    I = i.$_$.y1,
                    S = r.$_$.ae,
                    j = i.$_$.h3,
                    E = r.$_$.sk,
                    R = r.$_$.y9,
                    X = i.$_$.a,
                    M = r.$_$.rd,
                    A = i.$_$.c3,
                    G = i.$_$.q1,
                    K = r.$_$.lc,
                    N = r.$_$.fj,
                    B = i.$_$.s,
                    D = i.$_$.t2,
                    F = i.$_$.u2,
                    H = r.$_$.qd,
                    J = $.$_$.a1,
                    L = r.$_$.yi,
                    O = r.$_$.d6,
                    P = r.$_$.m,
                    Q = r.$_$.ii,
                    T = $.$_$.n,
                    U = r.$_$.wb,
                    V = $.$_$.a2,
                    W = $.$_$.e2,
                    Y = r.$_$.rk,
                    Z = r.$_$.e7,
                    nn = r.$_$.k9,
                    tn = r.$_$.u9,
                    rn = i.$_$.e2,
                    en = r.$_$.z7,
                    _n = r.$_$.t,
                    $n = u.$_$.l,
                    un = r.$_$.se,
                    sn = u.$_$.k,
                    ln = s.$_$.n3,
                    on = s.$_$.u2,
                    an = s.$_$.n2,
                    cn = s.$_$.v2,
                    fn = u.$_$.c;
                function hn(n) {
                    var t = f();
                    if (!t.g5s_1.h())
                        for (var r = "CacheMissException: " + n, e = t.g5s_1.s2().p(); e.q(); ) {
                            e.r().m2().i(null, r, null);
                        }
                    return h;
                }
                function dn(n) {
                    return function () {
                        var t = new d();
                        t.d4b(p(n.e9d_1)),
                            t.x4a(n.d9d_1),
                            null != n.f9d_1 &&
                                (v(t, hn),
                                w(
                                    t,
                                    n.f9d_1.i9d(),
                                    a,
                                    (function () {
                                        null == c && new qn();
                                        return c;
                                    })(),
                                ),
                                b(t, !0));
                        var r = n.g9d_1;
                        return null == r || t.e4b(r), t.g4b(), t.cz();
                    };
                }
                function pn(n, t, r, e) {
                    (e = e === g ? null : e), (this.d9d_1 = n), (this.e9d_1 = t), (this.f9d_1 = r), (this.g9d_1 = e);
                    this.h9d_1 = y(dn(this));
                }
                function vn() {
                    (l = this), (this.k9d_1 = new X("https://api.x.com/graphql"));
                }
                function wn(n) {
                    K.call(this, n);
                }
                function bn(n) {
                    K.call(this, n);
                }
                function gn() {}
                function yn(n, t, r) {
                    var e = n.x54_1.f12_1.p2("postId"),
                        _ = n.x54_1.f12_1.p2("rest_id"),
                        i = n.x54_1.f12_1.p2("timelineId"),
                        $ = n.x54_1.f12_1.p2("query");
                    return Y(r) + (null != e ? ":" + Y(e) : null != _ ? ":" + Y(_) : null != i ? ":" + Y(i) : null != $ ? ":" + Y($) : "");
                }
                function mn(n, t) {
                    var r = n.x54_1.f12_1.p2("account_id"),
                        e = n.x54_1.f12_1.p2("product_codes"),
                        _ = null != e && S(e, Z) ? e : null;
                    return nn(tn([r, null == _ ? null : nn(_, "-"), n.x54_1.f12_1.p2("search_filter_id")]), ":");
                }
                function xn() {}
                function qn() {
                    (c = this), fn.call(this);
                }
                x(pn, "ApolloClientServiceImpl"),
                    M(vn, "RequestComposer"),
                    H(wn, K, g, [1]),
                    H(bn, K, g, [3]),
                    M(gn, "RetryErrors"),
                    M(xn, "XCacheKeyGenerator"),
                    M(qn, "XCacheResolver", g, fn),
                    (m(pn).j9d = function () {
                        var n = this.h9d_1;
                        return (
                            z(
                                "client",
                                1,
                                q,
                                function (n) {
                                    return n.j9d();
                                },
                                null,
                            ),
                            n.m2()
                        );
                    }),
                    (m(vn).v15 = function (n) {
                        var t = "https://api.x.com/graphql/" + n.dz_1.operationId() + "/" + n.dz_1.operationName();
                        return (function (n, t, r) {
                            var e = r.dz_1,
                                _ = S(e, I) ? C(r.dz_1, k().p13_1) : null,
                                i = t.w16_1;
                            return null != _ && (i = j.i15(i, R(E("variables", _)))), t.b17(g, i).cz();
                        })(0, this.k9d_1.v15(n).b17(g, t).cz(), n);
                    }),
                    (m(wn).r48 = function (n, t) {
                        var r = this.s48(n, t);
                        return (r.s9_1 = h), (r.t9_1 = null), r.ia();
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
                                        r = this.t9d_1.i10_1;
                                    if (r instanceof F) t = !0;
                                    else {
                                        var e;
                                        if (r instanceof D) {
                                            var _ = r.u19_1;
                                            e = 500 <= _ && _ <= 599;
                                        } else e = !1;
                                        t = e;
                                    }
                                    if (t) throw r;
                                    return h;
                                }
                                if (1 === n) throw this.t9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (m(wn).s48 = function (n, t) {
                        var r = new wn(t);
                        return (r.t9d_1 = n), r;
                    }),
                    (m(bn).o4h = function (n, t, r, e) {
                        var _ = this.p4h(n, t, r, e);
                        return (_.s9_1 = h), (_.t9_1 = null), _.ia();
                    }),
                    (m(bn).q4h = function (n, t, r, e) {
                        var _ = null != n && S(n, J) ? n : N(),
                            i = t instanceof Error ? t : N();
                        return this.o4h(_, i, r instanceof L ? r : N(), e);
                    }),
                    (m(bn).ia = function () {
                        var n = this.s9_1;
                        n: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var t = this.e9e_1.y3(),
                                            r = 50 * Math.pow(4, t);
                                        if (((this.f9e_1 = Q(r, P())), (this.q9_1 = 1), (n = T(this.f9e_1, this)) === U())) return n;
                                        continue n;
                                    case 1:
                                        return this.e9e_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (n) {
                                var e = n;
                                if (2 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (m(bn).p4h = function (n, t, r, e) {
                        var _ = new bn(e);
                        return (_.c9e_1 = n), (_.d9e_1 = t), (_.e9e_1 = r), _;
                    }),
                    (m(gn).m4d = function (n, t) {
                        var r,
                            e,
                            _ = n
                                .pz()
                                .ty(((r = n), (e = r.dz_1), S(e, I) || S(e, G) ? A() : r.gz_1))
                                .cz(),
                            i = n.dz_1;
                        if (S(i, G)) return t.j4d(_);
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
                                        r = function (n, r, e, _) {
                                            return t.o4h(n, r, e, _);
                                        };
                                    return (r.$arity = 3), r;
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
                    (m(xn).y54 = function (n, t) {
                        var r,
                            e = n.p2("__typename"),
                            _ = null != e && "string" == typeof e ? e : null,
                            i = n.p2("id"),
                            $ = n.p2("rest_id"),
                            u = rn(t.w54_1.i11_1.e11());
                        if (_ === cn().f8b_1.d11_1) {
                            var s = n.p2("entry_id"),
                                l = n.p2("sort_index"),
                                o = yn(t, 0, i);
                            r = sn(_, [o, ":", Y(s), ":", Y(l)]);
                        } else if (_ === an().n89_1.d11_1) r = sn(_, [Y(i), Y($)]);
                        else if (_ === on().e8b_1.d11_1) {
                            var a = yn(t, 0, i);
                            r = sn(_, [a]);
                        } else {
                            if (_ === ln().l8d_1.d11_1) r = sn(_, [mn(t)]);
                            else if (null != $ && null != _) r = sn(_, [un($)]);
                            else if (null != i && null != _) r = sn(_, [un(i)]);
                            else if (!u.h() && !(null == _)) {
                                for (var c = _n(en(u, 10)), f = u.p(); f.q(); ) {
                                    var h = f.r(),
                                        d = Y(n.p2(h));
                                    c.k(d);
                                }
                                r = $n(_, c);
                            } else r = null;
                        }
                        return r;
                    }),
                    (m(qn).z54 = function (n, t) {
                        var r = n.i11_1.e11().d11_1,
                            e = n.c12("id", t).x14(),
                            _ = n.c12("rest_id", t).x14();
                        return null != _ && "string" == typeof _ ? sn(r, [_]) : null != e && "string" == typeof e ? sn(r, [e]) : null;
                    }),
                    (o = new gn()),
                    (a = new xn()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = pn),
                    (n.$_$.b = function () {
                        return null == l && new vn(), l;
                    }),
                    (n.$_$.c = o);
            })(n.exports, r(350269), r(519039), r(303184), r(908893), r(170047), r(115754), r(360310), r(534449));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.d7eab79a.js.map
