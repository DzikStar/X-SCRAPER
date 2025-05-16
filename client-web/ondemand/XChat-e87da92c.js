(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-e87da92c"],
    {
        567018: (n, t, i) => {
            !(function (n, t) {
                "use strict";
                t.$_$.o6;
                var i = t.$_$.g,
                    _ = t.$_$.te,
                    r = t.$_$.ph;
                function e(n) {
                    (n = n === i ? localStorage : n), (this.xbn_1 = n);
                }
                (0, t.$_$.qd)(e, "StorageSettings", e),
                    (_(e).ybn = function (n) {
                        return this.xbn_1.removeItem(n);
                    }),
                    (_(e).zbn = function (n, t) {
                        this.xbn_1.setItem(n, t);
                    }),
                    (_(e).abo = function (n) {
                        return this.xbn_1.getItem(n);
                    }),
                    (_(e).bbo = function (n, t) {
                        var i = this.xbn_1,
                            _ = t.toString();
                        i.setItem(n, _);
                    }),
                    (_(e).cbo = function (n, t) {
                        var i = this.xbn_1.getItem(n),
                            _ = null == i ? null : r(i);
                        return null == _ ? t : _;
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = e);
            })(n.exports, i(519039));
        },
        463219: (n, t, i) => {
            !(function (n, t, i, _, r, e, $, u, l) {
                "use strict";
                var o,
                    s,
                    c,
                    a,
                    h = t.$_$.d,
                    f = i.$_$.o6,
                    v = _.$_$.e,
                    w = i.$_$.lb,
                    k = r.$_$.d,
                    d = r.$_$.e,
                    p = r.$_$.h,
                    q = i.$_$.g,
                    b = i.$_$.kk,
                    y = i.$_$.te,
                    x = i.$_$.qd,
                    z = i.$_$.tf,
                    g = i.$_$.nd,
                    m = e.$_$.i3,
                    j = e.$_$.p2,
                    C = e.$_$.y1,
                    I = i.$_$.fe,
                    S = e.$_$.h3,
                    E = i.$_$.xk,
                    R = i.$_$.ca,
                    X = e.$_$.a,
                    M = i.$_$.wd,
                    A = e.$_$.c3,
                    G = e.$_$.q1,
                    K = i.$_$.qc,
                    N = i.$_$.kj,
                    B = e.$_$.s,
                    D = e.$_$.t2,
                    F = e.$_$.u2,
                    H = i.$_$.vd,
                    J = $.$_$.a1,
                    L = i.$_$.dj,
                    O = i.$_$.e6,
                    P = i.$_$.m,
                    Q = i.$_$.ni,
                    T = $.$_$.n,
                    U = i.$_$.bc,
                    V = $.$_$.z1,
                    W = $.$_$.d2,
                    Y = i.$_$.wk,
                    Z = i.$_$.f7,
                    nn = i.$_$.o9,
                    tn = i.$_$.y9,
                    _n = e.$_$.e2,
                    rn = i.$_$.b8,
                    en = i.$_$.t,
                    $n = u.$_$.l,
                    un = i.$_$.xe,
                    ln = u.$_$.k,
                    on = l.$_$.v3,
                    sn = l.$_$.c3,
                    cn = l.$_$.v2,
                    an = l.$_$.d3,
                    hn = u.$_$.c;
                function fn(n) {
                    var t = h();
                    if (!t.f5s_1.h())
                        for (var i = "CacheMissException: " + n, _ = t.f5s_1.t2().p(); _.q(); ) {
                            _.r().n2().i(null, i, null);
                        }
                    return f;
                }
                function vn(n) {
                    return function () {
                        var t = new v();
                        t.c4b(w(n.i9k_1)),
                            t.w4a(n.h9k_1),
                            t.gz(!0),
                            null != n.j9k_1 &&
                                (k(t, fn),
                                d(
                                    t,
                                    n.j9k_1.m9k(),
                                    c,
                                    (function () {
                                        null == a && new zn();
                                        return a;
                                    })(),
                                ),
                                p(t, !0));
                        var i = n.k9k_1;
                        return null == i || t.d4b(i), t.f4b(), t.hz();
                    };
                }
                function wn(n, t, i, _) {
                    (_ = _ === q ? null : _), (this.h9k_1 = n), (this.i9k_1 = t), (this.j9k_1 = i), (this.k9k_1 = _);
                    this.l9k_1 = b(vn(this));
                }
                function kn() {
                    (o = this), (this.o9k_1 = new X("https://api.x.com/graphql"));
                }
                function dn(n) {
                    K.call(this, n);
                }
                function pn(n) {
                    K.call(this, n);
                }
                function qn() {}
                function bn(n, t, i) {
                    var _ = n.w54_1.k12_1.q2("postId"),
                        r = n.w54_1.k12_1.q2("rest_id"),
                        e = n.w54_1.k12_1.q2("timelineId"),
                        $ = n.w54_1.k12_1.q2("query");
                    return Y(i) + (null != _ ? ":" + Y(_) : null != r ? ":" + Y(r) : null != e ? ":" + Y(e) : null != $ ? ":" + Y($) : "");
                }
                function yn(n, t) {
                    var i = n.w54_1.k12_1.q2("account_id"),
                        _ = n.w54_1.k12_1.q2("product_codes"),
                        r = null != _ && I(_, Z) ? _ : null;
                    return nn(tn([i, null == r ? null : nn(r, "-"), n.w54_1.k12_1.q2("search_filter_id")]), ":");
                }
                function xn() {}
                function zn() {
                    (a = this), hn.call(this);
                }
                x(wn, "ApolloClientServiceImpl"),
                    M(kn, "RequestComposer"),
                    H(dn, K, q, [1]),
                    H(pn, K, q, [3]),
                    M(qn, "RetryErrors"),
                    M(xn, "XCacheKeyGenerator"),
                    M(zn, "XCacheResolver", q, hn),
                    (y(wn).n9k = function () {
                        var n = this.l9k_1;
                        return (
                            g(
                                "client",
                                1,
                                z,
                                function (n) {
                                    return n.n9k();
                                },
                                null,
                            ),
                            n.n2()
                        );
                    }),
                    (y(kn).a16 = function (n) {
                        var t = "https://api.x.com/graphql/" + n.iz_1.operationId() + "/" + n.iz_1.operationName();
                        return (function (n, t, i) {
                            var _ = i.iz_1,
                                r = I(_, C) ? j(i.iz_1, m().u13_1) : null,
                                e = t.b17_1;
                            return null != r && (e = S.n15(e, R(E("variables", r)))), t.g17(q, e).hz();
                        })(0, this.o9k_1.a16(n).g17(q, t).hz(), n);
                    }),
                    (y(dn).q48 = function (n, t) {
                        var i = this.r48(n, t);
                        return (i.y9_1 = f), (i.z9_1 = null), i.oa();
                    }),
                    (y(dn).cb = function (n, t) {
                        return this.q48(n instanceof B ? n : N(), t);
                    }),
                    (y(dn).oa = function () {
                        for (this.y9_1; ; )
                            try {
                                var n = this.w9_1;
                                if (0 === n) {
                                    this.x9_1 = 1;
                                    var t,
                                        i = this.x9k_1.n10_1;
                                    if (i instanceof F) t = !0;
                                    else {
                                        var _;
                                        if (i instanceof D) {
                                            var r = i.z19_1;
                                            _ = 500 <= r && r <= 599;
                                        } else _ = !1;
                                        t = _;
                                    }
                                    if (t) throw i;
                                    return f;
                                }
                                if (1 === n) throw this.z9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (y(dn).r48 = function (n, t) {
                        var i = new dn(t);
                        return (i.x9k_1 = n), i;
                    }),
                    (y(pn).n4h = function (n, t, i, _) {
                        var r = this.o4h(n, t, i, _);
                        return (r.y9_1 = f), (r.z9_1 = null), r.oa();
                    }),
                    (y(pn).p4h = function (n, t, i, _) {
                        var r = null != n && I(n, J) ? n : N(),
                            e = t instanceof Error ? t : N();
                        return this.n4h(r, e, i instanceof L ? i : N(), _);
                    }),
                    (y(pn).oa = function () {
                        var n = this.y9_1;
                        n: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        this.x9_1 = 2;
                                        O();
                                        var t = this.i9l_1.z3(),
                                            i = 50 * Math.pow(4, t);
                                        if (((this.j9l_1 = Q(i, P())), (this.w9_1 = 1), (n = T(this.j9l_1, this)) === U())) return n;
                                        continue n;
                                    case 1:
                                        return this.i9l_1.d1(new L(5, 0)) < 0;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (n) {
                                var _ = n;
                                if (2 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (y(pn).o4h = function (n, t, i, _) {
                        var r = new pn(_);
                        return (r.g9l_1 = n), (r.h9l_1 = t), (r.i9l_1 = i), r;
                    }),
                    (y(qn).l4d = function (n, t) {
                        var i,
                            _,
                            r = n
                                .uz()
                                .yy(((i = n), (_ = i.iz_1), I(_, C) || I(_, G) ? A() : i.lz_1))
                                .hz(),
                            e = n.iz_1;
                        if (I(e, G)) return t.i4d(r);
                        var $,
                            u,
                            l = t.i4d(r),
                            o = V(
                                l,
                                (($ = new dn(null)),
                                ((u = function (n, t) {
                                    return $.q48(n, t);
                                }).$arity = 1),
                                u),
                            ),
                            s = W(
                                o,
                                (function (n) {
                                    var t = new pn(n),
                                        i = function (n, i, _, r) {
                                            return t.n4h(n, i, _, r);
                                        };
                                    return (i.$arity = 3), i;
                                })(null),
                            );
                        return s;
                    }),
                    (y(qn).toString = function () {
                        return "RetryErrors";
                    }),
                    (y(qn).hashCode = function () {
                        return -1546425599;
                    }),
                    (y(qn).equals = function (n) {
                        return this === n || (n instanceof qn && (n instanceof qn || N(), !0));
                    }),
                    (y(xn).x54 = function (n, t) {
                        var i,
                            _ = n.q2("__typename"),
                            r = null != _ && "string" == typeof _ ? _ : null,
                            e = n.q2("id"),
                            $ = n.q2("rest_id"),
                            u = _n(t.v54_1.n11_1.j11());
                        if (r === an().x8f_1.i11_1) {
                            var l = n.q2("entry_id"),
                                o = n.q2("sort_index"),
                                s = bn(t, 0, e);
                            i = ln(r, [s, ":", Y(l), ":", Y(o)]);
                        } else if (r === cn().f8e_1.i11_1) i = ln(r, [Y(e), Y($)]);
                        else if (r === sn().w8f_1.i11_1) {
                            var c = bn(t, 0, e);
                            i = ln(r, [c]);
                        } else {
                            if (r === on().l8i_1.i11_1) i = ln(r, [yn(t)]);
                            else if (null != $ && null != r) i = ln(r, [un($)]);
                            else if (null != e && null != r) i = ln(r, [un(e)]);
                            else if (!u.h() && !(null == r)) {
                                for (var a = en(rn(u, 10)), h = u.p(); h.q(); ) {
                                    var f = h.r(),
                                        v = Y(n.q2(f));
                                    a.k(v);
                                }
                                i = $n(r, a);
                            } else i = null;
                        }
                        return i;
                    }),
                    (y(zn).y54 = function (n, t) {
                        var i = n.n11_1.j11().i11_1,
                            _ = n.h12("id", t).c15(),
                            r = n.h12("rest_id", t).c15();
                        return null != r && "string" == typeof r ? ln(i, [r]) : null != _ && "string" == typeof _ ? ln(i, [_]) : null;
                    }),
                    (s = new qn()),
                    (c = new xn()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = wn),
                    (n.$_$.b = function () {
                        return null == o && new kn(), o;
                    }),
                    (n.$_$.c = s);
            })(n.exports, i(350269), i(519039), i(303184), i(908893), i(170047), i(115754), i(360310), i(534449));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-e87da92c.cb93a96a.js.map
