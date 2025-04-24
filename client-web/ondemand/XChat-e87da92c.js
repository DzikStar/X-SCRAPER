(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (t, n, r) => {
            !(function (t, n) {
                "use strict";
                n.$_$.l6;
                var r = n.$_$.g,
                    _ = n.$_$.ke;
                function e(t) {
                    (t = t === r ? localStorage : t), (this.rb2_1 = t);
                }
                (0, n.$_$.hd)(e, "StorageSettings", e),
                    (_(e).sb2 = function (t) {
                        return this.rb2_1.removeItem(t);
                    }),
                    (_(e).tb2 = function (t, n) {
                        this.rb2_1.setItem(t, n);
                    }),
                    (_(e).ub2 = function (t) {
                        return this.rb2_1.getItem(t);
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = e);
            })(t.exports, r(519039));
        },
        463219: (t, n, r) => {
            !(function (t, n, r, _, e, i, $, u, s) {
                "use strict";
                var o,
                    a,
                    l,
                    c,
                    f = n.$_$.c,
                    h = r.$_$.l6,
                    p = _.$_$.e,
                    v = r.$_$.db,
                    d = e.$_$.d,
                    w = e.$_$.e,
                    m = e.$_$.h,
                    y = r.$_$.g,
                    b = r.$_$.uj,
                    q = r.$_$.ke,
                    z = r.$_$.hd,
                    k = r.$_$.jf,
                    g = r.$_$.ed,
                    x = i.$_$.i3,
                    C = i.$_$.p2,
                    j = i.$_$.y1,
                    I = r.$_$.wd,
                    R = i.$_$.h3,
                    S = r.$_$.gk,
                    E = r.$_$.w9,
                    X = i.$_$.a,
                    M = r.$_$.nd,
                    A = i.$_$.c3,
                    G = i.$_$.q1,
                    K = r.$_$.hc,
                    N = r.$_$.ui,
                    B = i.$_$.s,
                    D = i.$_$.t2,
                    F = i.$_$.u2,
                    H = r.$_$.md,
                    J = $.$_$.y,
                    L = r.$_$.ni,
                    O = r.$_$.c6,
                    P = r.$_$.m,
                    Q = r.$_$.xh,
                    T = $.$_$.n,
                    U = r.$_$.sb,
                    V = $.$_$.x1,
                    W = $.$_$.b2,
                    Y = i.$_$.e2,
                    Z = r.$_$.fk,
                    tt = r.$_$.x7,
                    nt = r.$_$.t,
                    rt = u.$_$.l,
                    _t = r.$_$.oe,
                    et = u.$_$.k,
                    it = s.$_$.o2,
                    $t = s.$_$.h2,
                    ut = s.$_$.p2,
                    st = u.$_$.c;
                function ot(t) {
                    var n = f();
                    if (!n.j98_1.m())
                        for (var r = "CacheMissException: " + t, _ = n.j98_1.s2().p(); _.q(); ) {
                            _.r().m2().i(r, null);
                        }
                    return h;
                }
                function at(t) {
                    return function () {
                        var n = new p();
                        n.z47(v(t.o98_1)),
                            n.t47(t.n98_1),
                            null != t.p98_1 &&
                                (d(n, ot),
                                w(
                                    n,
                                    t.p98_1.s98(),
                                    l,
                                    (function () {
                                        null == c && new dt();
                                        return c;
                                    })(),
                                ),
                                m(n, !0));
                        var r = t.q98_1;
                        return null == r || n.a48(r), n.c48(), n.zy();
                    };
                }
                function lt(t, n, r, _) {
                    (_ = _ === y ? null : _), (this.n98_1 = t), (this.o98_1 = n), (this.p98_1 = r), (this.q98_1 = _);
                    this.r98_1 = b(at(this));
                }
                function ct() {
                    (o = this), (this.u98_1 = new X("https://api.x.com/graphql"));
                }
                function ft(t) {
                    K.call(this, t);
                }
                function ht(t) {
                    K.call(this, t);
                }
                function pt() {}
                function vt() {}
                function dt() {
                    (c = this), st.call(this);
                }
                z(lt, "ApolloClientServiceImpl"),
                    M(ct, "RequestComposer"),
                    H(ft, K, y, [1]),
                    H(ht, K, y, [3]),
                    M(pt, "RetryErrors"),
                    M(vt, "XCacheKeyGenerator"),
                    M(dt, "XCacheResolver", y, st),
                    (q(lt).t98 = function () {
                        var t = this.r98_1;
                        return (
                            g(
                                "client",
                                1,
                                k,
                                function (t) {
                                    return t.t98();
                                },
                                null,
                            ),
                            t.m2()
                        );
                    }),
                    (q(ct).s15 = function (t) {
                        var n = "https://api.x.com/graphql/" + t.az_1.operationId() + "/" + t.az_1.operationName();
                        return (function (t, n, r) {
                            var _ = r.az_1,
                                e = I(_, j) ? C(r.az_1, x().m13_1) : null,
                                i = n.t16_1;
                            return null != e && (i = R.f15(i, E(S("variables", e)))), n.y16(y, i).zy();
                        })(0, this.u98_1.s15(t).y16(y, n).zy(), t);
                    }),
                    (q(ft).n45 = function (t, n) {
                        var r = this.o45(t, n);
                        return (r.s9_1 = h), (r.t9_1 = null), r.ia();
                    }),
                    (q(ft).wa = function (t, n) {
                        return this.n45(t instanceof B ? t : N(), n);
                    }),
                    (q(ft).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var t = this.q9_1;
                                if (0 === t) {
                                    this.r9_1 = 1;
                                    var n,
                                        r = this.d99_1.f10_1;
                                    if (r instanceof F) n = !0;
                                    else {
                                        var _;
                                        if (r instanceof D) {
                                            var e = r.r19_1;
                                            _ = 500 <= e && e <= 599;
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
                    (q(ft).o45 = function (t, n) {
                        var r = new ft(n);
                        return (r.d99_1 = t), r;
                    }),
                    (q(ht).k4e = function (t, n, r, _) {
                        var e = this.l4e(t, n, r, _);
                        return (e.s9_1 = h), (e.t9_1 = null), e.ia();
                    }),
                    (q(ht).m4e = function (t, n, r, _) {
                        var e = null != t && I(t, J) ? t : N(),
                            i = n instanceof Error ? n : N();
                        return this.k4e(e, i, r instanceof L ? r : N(), _);
                    }),
                    (q(ht).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var n = this.o99_1.y3(),
                                            r = 50 * Math.pow(4, n);
                                        if (((this.p99_1 = Q(r, P())), (this.q9_1 = 1), (t = T(this.p99_1, this)) === U())) return t;
                                        continue t;
                                    case 1:
                                        return this.o99_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (2 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (q(ht).l4e = function (t, n, r, _) {
                        var e = new ht(_);
                        return (e.m99_1 = t), (e.n99_1 = n), (e.o99_1 = r), e;
                    }),
                    (q(pt).i4a = function (t, n) {
                        var r,
                            _,
                            e = t
                                .mz()
                                .qy(((r = t), (_ = r.az_1), I(_, j) || I(_, G) ? A() : r.dz_1))
                                .zy(),
                            i = t.az_1;
                        if (I(i, G)) return n.f4a(e);
                        var $,
                            u,
                            s = n.f4a(e),
                            o = V(
                                s,
                                (($ = new ft(null)),
                                ((u = function (t, n) {
                                    return $.n45(t, n);
                                }).$arity = 1),
                                u),
                            ),
                            a = W(
                                o,
                                (function (t) {
                                    var n = new ht(t),
                                        r = function (t, r, _, e) {
                                            return n.k4e(t, r, _, e);
                                        };
                                    return (r.$arity = 3), r;
                                })(null),
                            );
                        return a;
                    }),
                    (q(pt).toString = function () {
                        return "RetryErrors";
                    }),
                    (q(pt).hashCode = function () {
                        return -1546425599;
                    }),
                    (q(pt).equals = function (t) {
                        return this === t || (t instanceof pt && (t instanceof pt || N(), !0));
                    }),
                    (q(vt).u51 = function (t, n) {
                        var r,
                            _ = t.p2("__typename"),
                            e = null != _ && "string" == typeof _ ? _ : null,
                            i = t.p2("id"),
                            $ = t.p2("rest_id"),
                            u = Y(n.s51_1.f11_1.b11()),
                            s = n.t51_1.c12_1.p2("postId"),
                            o = n.t51_1.c12_1.p2("rest_id"),
                            a = n.t51_1.c12_1.p2("timelineId"),
                            l = Z(i) + (null != s ? ":" + Z(s) : null != o ? ":" + Z(o) : null != a ? ":" + Z(a) : "");
                        if (e === ut().e7h_1.a11_1) {
                            var c = t.p2("entry_id"),
                                f = t.p2("sort_index");
                            r = et(e, [l, ":", Z(c), ":", Z(f)]);
                        } else {
                            if (e === $t().j7f_1.a11_1) r = et(e, [Z(i), Z($)]);
                            else if (e === it().d7h_1.a11_1) r = et(e, [l]);
                            else if (null != $ && null != e) r = et(e, [_t($)]);
                            else if (null != i && null != e) r = et(e, [_t(i)]);
                            else if (!u.m() && !(null == e)) {
                                for (var h = nt(tt(u, 10)), p = u.p(); p.q(); ) {
                                    var v = p.r(),
                                        d = Z(t.p2(v));
                                    h.e(d);
                                }
                                r = rt(e, h);
                            } else r = null;
                        }
                        return r;
                    }),
                    (q(dt).v51 = function (t, n) {
                        var r = t.f11_1.b11().a11_1,
                            _ = t.z11("id", n).u14(),
                            e = t.z11("rest_id", n).u14();
                        return null != e && "string" == typeof e ? et(r, [e]) : null != _ && "string" == typeof _ ? et(r, [_]) : null;
                    }),
                    (a = new pt()),
                    (l = new vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = lt),
                    (t.$_$.b = function () {
                        return null == o && new ct(), o;
                    }),
                    (t.$_$.c = a);
            })(t.exports, r(350269), r(519039), r(303184), r(908893), r(170047), r(115754), r(360310), r(534449));
        },
        90906: (t, n, r) => {
            !(function (t, n, r) {
                "use strict";
                var _ = n.$_$.b,
                    e = r.$_$.ke,
                    i = n.$_$.d;
                function $() {}
                (0, r.$_$.hd)($, "RealXClock", $),
                    (e($).t7j = function () {
                        return _.t7j();
                    }),
                    (e($).q99 = function () {
                        return i().o81();
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = $);
            })(t.exports, r(738426), r(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.f64066ca.js.map
