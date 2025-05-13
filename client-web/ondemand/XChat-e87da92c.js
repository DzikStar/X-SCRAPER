(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (t, n, r) => {
            !(function (t, n) {
                "use strict";
                n.$_$.n6;
                var r = n.$_$.g,
                    _ = n.$_$.oe,
                    i = n.$_$.kh;
                function e(t) {
                    (t = t === r ? localStorage : t), (this.cb8_1 = t);
                }
                (0, n.$_$.ld)(e, "StorageSettings", e),
                    (_(e).db8 = function (t) {
                        return this.cb8_1.removeItem(t);
                    }),
                    (_(e).eb8 = function (t, n) {
                        this.cb8_1.setItem(t, n);
                    }),
                    (_(e).fb8 = function (t) {
                        return this.cb8_1.getItem(t);
                    }),
                    (_(e).gb8 = function (t, n) {
                        var r = this.cb8_1,
                            _ = n.toString();
                        r.setItem(t, _);
                    }),
                    (_(e).hb8 = function (t, n) {
                        var r = this.cb8_1.getItem(t),
                            _ = null == r ? null : i(r);
                        return null == _ ? n : _;
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = e);
            })(t.exports, r(519039));
        },
        463219: (t, n, r) => {
            !(function (t, n, r, _, i, e, $, u, s) {
                "use strict";
                var l,
                    a,
                    o,
                    c,
                    f = n.$_$.d,
                    h = r.$_$.n6,
                    p = _.$_$.e,
                    v = r.$_$.hb,
                    d = i.$_$.d,
                    b = i.$_$.e,
                    w = i.$_$.h,
                    y = r.$_$.g,
                    g = r.$_$.fk,
                    m = r.$_$.oe,
                    x = r.$_$.ld,
                    q = r.$_$.of,
                    z = r.$_$.id,
                    k = e.$_$.i3,
                    C = e.$_$.p2,
                    I = e.$_$.y1,
                    S = r.$_$.ae,
                    E = e.$_$.h3,
                    R = r.$_$.sk,
                    j = r.$_$.y9,
                    X = e.$_$.a,
                    M = r.$_$.rd,
                    A = e.$_$.c3,
                    G = e.$_$.q1,
                    K = r.$_$.lc,
                    N = r.$_$.fj,
                    B = e.$_$.s,
                    D = e.$_$.t2,
                    F = e.$_$.u2,
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
                    tt = r.$_$.k9,
                    nt = r.$_$.u9,
                    rt = e.$_$.e2,
                    _t = r.$_$.z7,
                    it = r.$_$.t,
                    et = u.$_$.l,
                    $t = r.$_$.se,
                    ut = u.$_$.k,
                    st = s.$_$.n3,
                    lt = s.$_$.u2,
                    at = s.$_$.n2,
                    ot = s.$_$.v2,
                    ct = u.$_$.c;
                function ft(t) {
                    var n = f();
                    if (!n.g5s_1.h())
                        for (var r = "CacheMissException: " + t, _ = n.g5s_1.s2().p(); _.q(); ) {
                            _.r().m2().i(null, r, null);
                        }
                    return h;
                }
                function ht(t) {
                    return function () {
                        var n = new p();
                        n.d4b(v(t.s9a_1)),
                            n.x4a(t.r9a_1),
                            null != t.t9a_1 &&
                                (d(n, ft),
                                b(
                                    n,
                                    t.t9a_1.w9a(),
                                    o,
                                    (function () {
                                        null == c && new xt();
                                        return c;
                                    })(),
                                ),
                                w(n, !0));
                        var r = t.u9a_1;
                        return null == r || n.e4b(r), n.g4b(), n.cz();
                    };
                }
                function pt(t, n, r, _) {
                    (_ = _ === y ? null : _), (this.r9a_1 = t), (this.s9a_1 = n), (this.t9a_1 = r), (this.u9a_1 = _);
                    this.v9a_1 = g(ht(this));
                }
                function vt() {
                    (l = this), (this.y9a_1 = new X("https://api.x.com/graphql"));
                }
                function dt(t) {
                    K.call(this, t);
                }
                function bt(t) {
                    K.call(this, t);
                }
                function wt() {}
                function yt(t, n, r) {
                    var _ = t.x54_1.f12_1.p2("postId"),
                        i = t.x54_1.f12_1.p2("rest_id"),
                        e = t.x54_1.f12_1.p2("timelineId"),
                        $ = t.x54_1.f12_1.p2("query");
                    return Y(r) + (null != _ ? ":" + Y(_) : null != i ? ":" + Y(i) : null != e ? ":" + Y(e) : null != $ ? ":" + Y($) : "");
                }
                function gt(t, n) {
                    var r = t.x54_1.f12_1.p2("account_id"),
                        _ = t.x54_1.f12_1.p2("product_codes"),
                        i = null != _ && S(_, Z) ? _ : null;
                    return tt(nt([r, null == i ? null : tt(i, "-"), t.x54_1.f12_1.p2("search_filter_id")]), ":");
                }
                function mt() {}
                function xt() {
                    (c = this), ct.call(this);
                }
                x(pt, "ApolloClientServiceImpl"),
                    M(vt, "RequestComposer"),
                    H(dt, K, y, [1]),
                    H(bt, K, y, [3]),
                    M(wt, "RetryErrors"),
                    M(mt, "XCacheKeyGenerator"),
                    M(xt, "XCacheResolver", y, ct),
                    (m(pt).x9a = function () {
                        var t = this.v9a_1;
                        return (
                            z(
                                "client",
                                1,
                                q,
                                function (t) {
                                    return t.x9a();
                                },
                                null,
                            ),
                            t.m2()
                        );
                    }),
                    (m(vt).v15 = function (t) {
                        var n = "https://api.x.com/graphql/" + t.dz_1.operationId() + "/" + t.dz_1.operationName();
                        return (function (t, n, r) {
                            var _ = r.dz_1,
                                i = S(_, I) ? C(r.dz_1, k().p13_1) : null,
                                e = n.w16_1;
                            return null != i && (e = E.i15(e, j(R("variables", i)))), n.b17(y, e).cz();
                        })(0, this.y9a_1.v15(t).b17(y, n).cz(), t);
                    }),
                    (m(dt).r48 = function (t, n) {
                        var r = this.s48(t, n);
                        return (r.s9_1 = h), (r.t9_1 = null), r.ia();
                    }),
                    (m(dt).wa = function (t, n) {
                        return this.r48(t instanceof B ? t : N(), n);
                    }),
                    (m(dt).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var t = this.q9_1;
                                if (0 === t) {
                                    this.r9_1 = 1;
                                    var n,
                                        r = this.h9b_1.i10_1;
                                    if (r instanceof F) n = !0;
                                    else {
                                        var _;
                                        if (r instanceof D) {
                                            var i = r.u19_1;
                                            _ = 500 <= i && i <= 599;
                                        } else _ = !1;
                                        n = _;
                                    }
                                    if (n) throw r;
                                    return h;
                                }
                                if (1 === t) throw this.t9_1;
                            } catch (t) {
                                throw t;
                            }
                    }),
                    (m(dt).s48 = function (t, n) {
                        var r = new dt(n);
                        return (r.h9b_1 = t), r;
                    }),
                    (m(bt).o4h = function (t, n, r, _) {
                        var i = this.p4h(t, n, r, _);
                        return (i.s9_1 = h), (i.t9_1 = null), i.ia();
                    }),
                    (m(bt).q4h = function (t, n, r, _) {
                        var i = null != t && S(t, J) ? t : N(),
                            e = n instanceof Error ? n : N();
                        return this.o4h(i, e, r instanceof L ? r : N(), _);
                    }),
                    (m(bt).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var n = this.s9b_1.y3(),
                                            r = 50 * Math.pow(4, n);
                                        if (((this.t9b_1 = Q(r, P())), (this.q9_1 = 1), (t = T(this.t9b_1, this)) === U())) return t;
                                        continue t;
                                    case 1:
                                        return this.s9b_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (2 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (m(bt).p4h = function (t, n, r, _) {
                        var i = new bt(_);
                        return (i.q9b_1 = t), (i.r9b_1 = n), (i.s9b_1 = r), i;
                    }),
                    (m(wt).m4d = function (t, n) {
                        var r,
                            _,
                            i = t
                                .pz()
                                .ty(((r = t), (_ = r.dz_1), S(_, I) || S(_, G) ? A() : r.gz_1))
                                .cz(),
                            e = t.dz_1;
                        if (S(e, G)) return n.j4d(i);
                        var $,
                            u,
                            s = n.j4d(i),
                            l = V(
                                s,
                                (($ = new dt(null)),
                                ((u = function (t, n) {
                                    return $.r48(t, n);
                                }).$arity = 1),
                                u),
                            ),
                            a = W(
                                l,
                                (function (t) {
                                    var n = new bt(t),
                                        r = function (t, r, _, i) {
                                            return n.o4h(t, r, _, i);
                                        };
                                    return (r.$arity = 3), r;
                                })(null),
                            );
                        return a;
                    }),
                    (m(wt).toString = function () {
                        return "RetryErrors";
                    }),
                    (m(wt).hashCode = function () {
                        return -1546425599;
                    }),
                    (m(wt).equals = function (t) {
                        return this === t || (t instanceof wt && (t instanceof wt || N(), !0));
                    }),
                    (m(mt).y54 = function (t, n) {
                        var r,
                            _ = t.p2("__typename"),
                            i = null != _ && "string" == typeof _ ? _ : null,
                            e = t.p2("id"),
                            $ = t.p2("rest_id"),
                            u = rt(n.w54_1.i11_1.e11());
                        if (i === ot().f8b_1.d11_1) {
                            var s = t.p2("entry_id"),
                                l = t.p2("sort_index"),
                                a = yt(n, 0, e);
                            r = ut(i, [a, ":", Y(s), ":", Y(l)]);
                        } else if (i === at().n89_1.d11_1) r = ut(i, [Y(e), Y($)]);
                        else if (i === lt().e8b_1.d11_1) {
                            var o = yt(n, 0, e);
                            r = ut(i, [o]);
                        } else {
                            if (i === st().l8d_1.d11_1) r = ut(i, [gt(n)]);
                            else if (null != $ && null != i) r = ut(i, [$t($)]);
                            else if (null != e && null != i) r = ut(i, [$t(e)]);
                            else if (!u.h() && !(null == i)) {
                                for (var c = it(_t(u, 10)), f = u.p(); f.q(); ) {
                                    var h = f.r(),
                                        p = Y(t.p2(h));
                                    c.k(p);
                                }
                                r = et(i, c);
                            } else r = null;
                        }
                        return r;
                    }),
                    (m(xt).z54 = function (t, n) {
                        var r = t.i11_1.e11().d11_1,
                            _ = t.c12("id", n).x14(),
                            i = t.c12("rest_id", n).x14();
                        return null != i && "string" == typeof i ? ut(r, [i]) : null != _ && "string" == typeof _ ? ut(r, [_]) : null;
                    }),
                    (a = new wt()),
                    (o = new mt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = pt),
                    (t.$_$.b = function () {
                        return null == l && new vt(), l;
                    }),
                    (t.$_$.c = a);
            })(t.exports, r(350269), r(519039), r(303184), r(908893), r(170047), r(115754), r(360310), r(534449));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.b4d4e66a.js.map
