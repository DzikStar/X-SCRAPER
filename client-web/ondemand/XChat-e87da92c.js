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
                    (t = t === r ? localStorage : t), (this.hb3_1 = t);
                }
                (0, n.$_$.hd)(_, "StorageSettings", _),
                    (i(_).ib3 = function (t) {
                        return this.hb3_1.removeItem(t);
                    }),
                    (i(_).jb3 = function (t, n) {
                        this.hb3_1.setItem(t, n);
                    }),
                    (i(_).kb3 = function (t) {
                        return this.hb3_1.getItem(t);
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = _);
            })(t.exports, r(519039));
        },
        463219: (t, n, r) => {
            !(function (t, n, r, i, _, e, $, u, s) {
                "use strict";
                var o,
                    a,
                    l,
                    c,
                    f = n.$_$.d,
                    h = r.$_$.l6,
                    p = i.$_$.e,
                    v = r.$_$.db,
                    w = _.$_$.d,
                    d = _.$_$.e,
                    m = _.$_$.h,
                    y = r.$_$.g,
                    b = r.$_$.vj,
                    q = r.$_$.ke,
                    z = r.$_$.hd,
                    g = r.$_$.jf,
                    k = r.$_$.ed,
                    x = e.$_$.i3,
                    C = e.$_$.p2,
                    I = e.$_$.y1,
                    R = r.$_$.wd,
                    S = e.$_$.h3,
                    E = r.$_$.ik,
                    X = r.$_$.w9,
                    j = e.$_$.a,
                    M = r.$_$.nd,
                    A = e.$_$.c3,
                    G = e.$_$.q1,
                    K = r.$_$.hc,
                    N = r.$_$.vi,
                    B = e.$_$.s,
                    D = e.$_$.t2,
                    F = e.$_$.u2,
                    H = r.$_$.md,
                    J = $.$_$.a1,
                    L = r.$_$.oi,
                    O = r.$_$.c6,
                    P = r.$_$.m,
                    Q = r.$_$.yh,
                    T = $.$_$.n,
                    U = r.$_$.sb,
                    V = $.$_$.z1,
                    W = $.$_$.d2,
                    Y = e.$_$.e2,
                    Z = r.$_$.hk,
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
                    if (!n.m98_1.m())
                        for (var r = "CacheMissException: " + t, i = n.m98_1.s2().p(); i.q(); ) {
                            i.r().m2().i(r, null);
                        }
                    return h;
                }
                function at(t) {
                    return function () {
                        var n = new p();
                        n.c48(v(t.r98_1)),
                            n.w47(t.q98_1),
                            null != t.s98_1 &&
                                (w(n, ot),
                                d(
                                    n,
                                    t.s98_1.v98(),
                                    l,
                                    (function () {
                                        null == c && new wt();
                                        return c;
                                    })(),
                                ),
                                m(n, !0));
                        var r = t.t98_1;
                        return null == r || n.d48(r), n.f48(), n.zy();
                    };
                }
                function lt(t, n, r, i) {
                    (i = i === y ? null : i), (this.q98_1 = t), (this.r98_1 = n), (this.s98_1 = r), (this.t98_1 = i);
                    this.u98_1 = b(at(this));
                }
                function ct() {
                    (o = this), (this.x98_1 = new j("https://api.x.com/graphql"));
                }
                function ft(t) {
                    K.call(this, t);
                }
                function ht(t) {
                    K.call(this, t);
                }
                function pt() {}
                function vt() {}
                function wt() {
                    (c = this), st.call(this);
                }
                z(lt, "ApolloClientServiceImpl"),
                    M(ct, "RequestComposer"),
                    H(ft, K, y, [1]),
                    H(ht, K, y, [3]),
                    M(pt, "RetryErrors"),
                    M(vt, "XCacheKeyGenerator"),
                    M(wt, "XCacheResolver", y, st),
                    (q(lt).w98 = function () {
                        var t = this.u98_1;
                        return (
                            k(
                                "client",
                                1,
                                g,
                                function (t) {
                                    return t.w98();
                                },
                                null,
                            ),
                            t.m2()
                        );
                    }),
                    (q(ct).s15 = function (t) {
                        var n = "https://api.x.com/graphql/" + t.az_1.operationId() + "/" + t.az_1.operationName();
                        return (function (t, n, r) {
                            var i = r.az_1,
                                _ = R(i, I) ? C(r.az_1, x().m13_1) : null,
                                e = n.t16_1;
                            return null != _ && (e = S.f15(e, X(E("variables", _)))), n.y16(y, e).zy();
                        })(0, this.x98_1.s15(t).y16(y, n).zy(), t);
                    }),
                    (q(ft).q45 = function (t, n) {
                        var r = this.r45(t, n);
                        return (r.s9_1 = h), (r.t9_1 = null), r.ia();
                    }),
                    (q(ft).wa = function (t, n) {
                        return this.q45(t instanceof B ? t : N(), n);
                    }),
                    (q(ft).ia = function () {
                        for (this.s9_1; ; )
                            try {
                                var t = this.q9_1;
                                if (0 === t) {
                                    this.r9_1 = 1;
                                    var n,
                                        r = this.g99_1.f10_1;
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
                    (q(ft).r45 = function (t, n) {
                        var r = new ft(n);
                        return (r.g99_1 = t), r;
                    }),
                    (q(ht).n4e = function (t, n, r, i) {
                        var _ = this.o4e(t, n, r, i);
                        return (_.s9_1 = h), (_.t9_1 = null), _.ia();
                    }),
                    (q(ht).p4e = function (t, n, r, i) {
                        var _ = null != t && R(t, J) ? t : N(),
                            e = n instanceof Error ? n : N();
                        return this.n4e(_, e, r instanceof L ? r : N(), i);
                    }),
                    (q(ht).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        this.r9_1 = 2;
                                        O();
                                        var n = this.r99_1.y3(),
                                            r = 50 * Math.pow(4, n);
                                        if (((this.s99_1 = Q(r, P())), (this.q9_1 = 1), (t = T(this.s99_1, this)) === U())) return t;
                                        continue t;
                                    case 1:
                                        return this.r99_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (q(ht).o4e = function (t, n, r, i) {
                        var _ = new ht(i);
                        return (_.p99_1 = t), (_.q99_1 = n), (_.r99_1 = r), _;
                    }),
                    (q(pt).l4a = function (t, n) {
                        var r,
                            i,
                            _ = t
                                .mz()
                                .qy(((r = t), (i = r.az_1), R(i, I) || R(i, G) ? A() : r.dz_1))
                                .zy(),
                            e = t.az_1;
                        if (R(e, G)) return n.i4a(_);
                        var $,
                            u,
                            s = n.i4a(_),
                            o = V(
                                s,
                                (($ = new ft(null)),
                                ((u = function (t, n) {
                                    return $.q45(t, n);
                                }).$arity = 1),
                                u),
                            ),
                            a = W(
                                o,
                                (function (t) {
                                    var n = new ht(t),
                                        r = function (t, r, i, _) {
                                            return n.n4e(t, r, i, _);
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
                    (q(vt).x51 = function (t, n) {
                        var r,
                            i = t.p2("__typename"),
                            _ = null != i && "string" == typeof i ? i : null,
                            e = t.p2("id"),
                            $ = t.p2("rest_id"),
                            u = Y(n.v51_1.f11_1.b11()),
                            s = n.w51_1.c12_1.p2("postId"),
                            o = n.w51_1.c12_1.p2("rest_id"),
                            a = n.w51_1.c12_1.p2("timelineId"),
                            l = Z(e) + (null != s ? ":" + Z(s) : null != o ? ":" + Z(o) : null != a ? ":" + Z(a) : "");
                        if (_ === ut().h7z_1.a11_1) {
                            var c = t.p2("entry_id"),
                                f = t.p2("sort_index");
                            r = _t(_, [l, ":", Z(c), ":", Z(f)]);
                        } else {
                            if (_ === $t().m7x_1.a11_1) r = _t(_, [Z(e), Z($)]);
                            else if (_ === et().g7z_1.a11_1) r = _t(_, [l]);
                            else if (null != $ && null != _) r = _t(_, [it($)]);
                            else if (null != e && null != _) r = _t(_, [it(e)]);
                            else if (!u.m() && !(null == _)) {
                                for (var h = nt(tt(u, 10)), p = u.p(); p.q(); ) {
                                    var v = p.r(),
                                        w = Z(t.p2(v));
                                    h.e(w);
                                }
                                r = rt(_, h);
                            } else r = null;
                        }
                        return r;
                    }),
                    (q(wt).y51 = function (t, n) {
                        var r = t.f11_1.b11().a11_1,
                            i = t.z11("id", n).u14(),
                            _ = t.z11("rest_id", n).u14();
                        return null != _ && "string" == typeof _ ? _t(r, [_]) : null != i && "string" == typeof i ? _t(r, [i]) : null;
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
                var i = n.$_$.b,
                    _ = r.$_$.ke,
                    e = n.$_$.d;
                function $() {}
                (0, r.$_$.hd)($, "RealXClock", $),
                    (_($).f5p = function () {
                        return i.f5p();
                    }),
                    (_($).t99 = function () {
                        return e().b67();
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = $);
            })(t.exports, r(738426), r(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.115b139a.js.map
