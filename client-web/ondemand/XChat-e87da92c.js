(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (t, n, r) => {
            !(function (t, n) {
                "use strict";
                n.$_$.l6;
                var r = n.$_$.g,
                    i = n.$_$.ke;
                function _(t) {
                    (t = t === r ? localStorage : t), (this.kb6_1 = t);
                }
                (0, n.$_$.hd)(_, "StorageSettings", _),
                    (i(_).lb6 = function (t) {
                        return this.kb6_1.removeItem(t);
                    }),
                    (i(_).mb6 = function (t, n) {
                        this.kb6_1.setItem(t, n);
                    }),
                    (i(_).nb6 = function (t) {
                        return this.kb6_1.getItem(t);
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = _);
            })(t.exports, r(519039));
        },
        463219: (t, n, r) => {
            !(function (t, n, r, i, _, e, $, u, s) {
                "use strict";
                var o,
                    c,
                    a,
                    l,
                    f = n.$_$.d,
                    h = r.$_$.l6,
                    v = i.$_$.e,
                    b = r.$_$.db,
                    p = _.$_$.d,
                    d = _.$_$.e,
                    w = _.$_$.h,
                    y = r.$_$.g,
                    m = r.$_$.zj,
                    z = r.$_$.ke,
                    k = r.$_$.hd,
                    g = r.$_$.jf,
                    q = r.$_$.ed,
                    C = e.$_$.i3,
                    x = e.$_$.p2,
                    I = e.$_$.y1,
                    R = r.$_$.wd,
                    S = e.$_$.h3,
                    E = r.$_$.mk,
                    X = r.$_$.w9,
                    j = e.$_$.a,
                    M = r.$_$.nd,
                    A = e.$_$.c3,
                    G = e.$_$.q1,
                    K = r.$_$.hc,
                    N = r.$_$.zi,
                    B = e.$_$.s,
                    D = e.$_$.t2,
                    F = e.$_$.u2,
                    H = r.$_$.md,
                    J = $.$_$.a1,
                    L = r.$_$.si,
                    O = r.$_$.c6,
                    P = r.$_$.m,
                    Q = r.$_$.ci,
                    T = $.$_$.n,
                    U = r.$_$.sb,
                    V = $.$_$.z1,
                    W = $.$_$.d2,
                    Y = e.$_$.e2,
                    Z = r.$_$.lk,
                    tt = r.$_$.x7,
                    nt = r.$_$.t,
                    rt = u.$_$.l,
                    it = r.$_$.oe,
                    _t = u.$_$.k,
                    et = s.$_$.o2,
                    $t = s.$_$.h2,
                    ut = s.$_$.p2,
                    st = u.$_$.c;
                function ot(t) {
                    var n = f();
                    if (!n.o9b_1.m())
                        for (var r = "CacheMissException: " + t, i = n.o9b_1.s2().p(); i.q(); ) {
                            i.r().m2().i(r, null);
                        }
                    return h;
                }
                function ct(t) {
                    return function () {
                        var n = new v();
                        n.z4a(b(t.t9b_1)),
                            n.t4a(t.s9b_1),
                            null != t.u9b_1 &&
                                (p(n, ot),
                                d(
                                    n,
                                    t.u9b_1.x9b(),
                                    a,
                                    (function () {
                                        null == l && new pt();
                                        return l;
                                    })(),
                                ),
                                w(n, !0));
                        var r = t.v9b_1;
                        return null == r || n.a4b(r), n.c4b(), n.zy();
                    };
                }
                function at(t, n, r, i) {
                    (i = i === y ? null : i), (this.s9b_1 = t), (this.t9b_1 = n), (this.u9b_1 = r), (this.v9b_1 = i);
                    this.w9b_1 = m(ct(this));
                }
                function lt() {
                    (o = this), (this.z9b_1 = new j("https://api.x.com/graphql"));
                }
                function ft(t) {
                    K.call(this, t);
                }
                function ht(t) {
                    K.call(this, t);
                }
                function vt() {}
                function bt() {}
                function pt() {
                    (l = this), st.call(this);
                }
                k(at, "ApolloClientServiceImpl"),
                    M(lt, "RequestComposer"),
                    H(ft, K, y, [1]),
                    H(ht, K, y, [3]),
                    M(vt, "RetryErrors"),
                    M(bt, "XCacheKeyGenerator"),
                    M(pt, "XCacheResolver", y, st),
                    (z(at).y9b = function () {
                        var t = this.w9b_1;
                        return (
                            q(
                                "client",
                                1,
                                g,
                                function (t) {
                                    return t.y9b();
                                },
                                null,
                            ),
                            t.m2()
                        );
                    }),
                    (z(lt).s15 = function (t) {
                        var n = "https://api.x.com/graphql/" + t.az_1.operationId() + "/" + t.az_1.operationName();
                        return (function (t, n, r) {
                            var i = r.az_1,
                                _ = R(i, I) ? x(r.az_1, C().m13_1) : null,
                                e = n.t16_1;
                            return null != _ && (e = S.f15(e, X(E("variables", _)))), n.y16(y, e).zy();
                        })(0, this.z9b_1.s15(t).y16(y, n).zy(), t);
                    }),
                    (z(ft).n48 = function (t, n) {
                        var r = this.o48(t, n);
                        return (r.s9_1 = h), (r.t9_1 = null), r.ia();
                    }),
                    (z(ft).wa = function (t, n) {
                        return this.n48(t instanceof B ? t : N(), n);
                    }),
                    (z(ft).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var t = this.q9_1;
                                if (0 === t) {
                                    this.r9_1 = 1;
                                    var n,
                                        r = this.i9c_1.f10_1;
                                    if (r instanceof F) n = !0;
                                    else {
                                        var i;
                                        if (r instanceof D) {
                                            var _ = r.r19_1;
                                            i = 500 <= _ && _ <= 599;
                                        } else i = !1;
                                        n = i;
                                    }
                                    if (n) throw r;
                                    return h;
                                }
                                if (1 === t) throw this.t9_1;
                            } catch (t) {
                                throw t;
                            }
                    }),
                    (z(ft).o48 = function (t, n) {
                        var r = new ft(n);
                        return (r.i9c_1 = t), r;
                    }),
                    (z(ht).k4h = function (t, n, r, i) {
                        var _ = this.l4h(t, n, r, i);
                        return (_.s9_1 = h), (_.t9_1 = null), _.ia();
                    }),
                    (z(ht).m4h = function (t, n, r, i) {
                        var _ = null != t && R(t, J) ? t : N(),
                            e = n instanceof Error ? n : N();
                        return this.k4h(_, e, r instanceof L ? r : N(), i);
                    }),
                    (z(ht).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var n = this.t9c_1.y3(),
                                            r = 50 * Math.pow(4, n);
                                        if (((this.u9c_1 = Q(r, P())), (this.q9_1 = 1), (t = T(this.u9c_1, this)) === U())) return t;
                                        continue t;
                                    case 1:
                                        return this.t9c_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (z(ht).l4h = function (t, n, r, i) {
                        var _ = new ht(i);
                        return (_.r9c_1 = t), (_.s9c_1 = n), (_.t9c_1 = r), _;
                    }),
                    (z(vt).i4d = function (t, n) {
                        var r,
                            i,
                            _ = t
                                .mz()
                                .qy(((r = t), (i = r.az_1), R(i, I) || R(i, G) ? A() : r.dz_1))
                                .zy(),
                            e = t.az_1;
                        if (R(e, G)) return n.f4d(_);
                        var $,
                            u,
                            s = n.f4d(_),
                            o = V(
                                s,
                                (($ = new ft(null)),
                                ((u = function (t, n) {
                                    return $.n48(t, n);
                                }).$arity = 1),
                                u),
                            ),
                            c = W(
                                o,
                                (function (t) {
                                    var n = new ht(t),
                                        r = function (t, r, i, _) {
                                            return n.k4h(t, r, i, _);
                                        };
                                    return (r.$arity = 3), r;
                                })(null),
                            );
                        return c;
                    }),
                    (z(vt).toString = function () {
                        return "RetryErrors";
                    }),
                    (z(vt).hashCode = function () {
                        return -1546425599;
                    }),
                    (z(vt).equals = function (t) {
                        return this === t || (t instanceof vt && (t instanceof vt || N(), !0));
                    }),
                    (z(bt).u54 = function (t, n) {
                        var r,
                            i = t.p2("__typename"),
                            _ = null != i && "string" == typeof i ? i : null,
                            e = t.p2("id"),
                            $ = t.p2("rest_id"),
                            u = Y(n.s54_1.f11_1.b11()),
                            s = n.t54_1.c12_1.p2("postId"),
                            o = n.t54_1.c12_1.p2("rest_id"),
                            c = n.t54_1.c12_1.p2("timelineId"),
                            a = Z(e) + (null != s ? ":" + Z(s) : null != o ? ":" + Z(o) : null != c ? ":" + Z(c) : "");
                        if (_ === ut().g8d_1.a11_1) {
                            var l = t.p2("entry_id"),
                                f = t.p2("sort_index");
                            r = _t(_, [a, ":", Z(l), ":", Z(f)]);
                        } else {
                            if (_ === $t().l8b_1.a11_1) r = _t(_, [Z(e), Z($)]);
                            else if (_ === et().f8d_1.a11_1) r = _t(_, [a]);
                            else if (null != $ && null != _) r = _t(_, [it($)]);
                            else if (null != e && null != _) r = _t(_, [it(e)]);
                            else if (!u.m() && !(null == _)) {
                                for (var h = nt(tt(u, 10)), v = u.p(); v.q(); ) {
                                    var b = v.r(),
                                        p = Z(t.p2(b));
                                    h.e(p);
                                }
                                r = rt(_, h);
                            } else r = null;
                        }
                        return r;
                    }),
                    (z(pt).v54 = function (t, n) {
                        var r = t.f11_1.b11().a11_1,
                            i = t.z11("id", n).u14(),
                            _ = t.z11("rest_id", n).u14();
                        return null != _ && "string" == typeof _ ? _t(r, [_]) : null != i && "string" == typeof i ? _t(r, [i]) : null;
                    }),
                    (c = new vt()),
                    (a = new bt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = at),
                    (t.$_$.b = function () {
                        return null == o && new lt(), o;
                    }),
                    (t.$_$.c = c);
            })(t.exports, r(350269), r(519039), r(303184), r(908893), r(170047), r(115754), r(360310), r(534449));
        },
        90906: (t, n, r) => {
            !(function (t, n, r) {
                "use strict";
                var i = n.$_$.b,
                    _ = r.$_$.ke,
                    e = n.$_$.d;
                function $() {}
                (0, r.$_$.hd)($, "RealXClock", $),
                    (_($).c5s = function () {
                        return i.c5s();
                    }),
                    (_($).v9c = function () {
                        return e().y69();
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = $);
            })(t.exports, r(738426), r(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.bbd7bf5a.js.map
