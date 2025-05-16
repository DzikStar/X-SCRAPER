(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-1c7ce4c0"],
    {
        837398: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r,
                    i = t.$_$.te,
                    u = t.$_$.ud,
                    e = t.$_$.kj,
                    _ = t.$_$.wd,
                    l = t.$_$.g,
                    o = t.$_$.od,
                    s = t.$_$.qd,
                    f = t.$_$.fd;
                function a() {}
                function h() {
                    (r = this), v.call(this);
                }
                function c() {
                    return null == r && new h(), r;
                }
                function $(n) {
                    v.call(this), (this.profileImageUrl = n);
                }
                function v() {}
                function p(n) {
                    var t = n.com || (n.com = {}),
                        r = t.x || (t.x = {}),
                        i = r.profilepicture || (r.profilepicture = {});
                    (i.ProfilePictureState = v), f(i.ProfilePictureState, "Loading", c), (i.ProfilePictureState.Content = $);
                }
                u(a, "ProfilePictureButtonComponent"),
                    s(v, "ProfilePictureState"),
                    _(h, "Loading", l, v),
                    s($, "Content", l, v),
                    (i(h).toString = function () {
                        return "Loading";
                    }),
                    (i(h).hashCode = function () {
                        return -185273644;
                    }),
                    (i(h).equals = function (n) {
                        return this === n || (n instanceof h && (n instanceof h || e(), !0));
                    }),
                    (i($).u91 = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).fh = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).b93 = function (n) {
                        return new $(n);
                    }),
                    (i($).copy = function (n, t) {
                        return (n = n === l ? this.profileImageUrl : n), this.b93(n);
                    }),
                    (i($).toString = function () {
                        return "Content(profileImageUrl=" + this.profileImageUrl + ")";
                    }),
                    (i($).hashCode = function () {
                        return null == this.profileImageUrl ? 0 : o(this.profileImageUrl);
                    }),
                    (i($).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof $)) return !1;
                        var t = n instanceof $ ? n : e();
                        return this.profileImageUrl == t.profileImageUrl;
                    }),
                    p(n),
                    (n.$jsExportAll$ = p),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = a),
                    (n.$_$.b = $),
                    (n.$_$.c = c);
            })(n.exports, r(519039));
        },
        314665: (n, t, r) => {
            !(function (n, t, r, i, u, e) {
                "use strict";
                var _ = t.$_$.qc,
                    l = t.$_$.o6,
                    o = t.$_$.te,
                    s = t.$_$.kj,
                    f = t.$_$.f7,
                    a = t.$_$.fe,
                    h = t.$_$.d9,
                    c = r.$_$.b,
                    $ = t.$_$.vd,
                    v = t.$_$.g,
                    p = t.$_$.hd,
                    w = t.$_$.uc,
                    b = i.$_$.a1,
                    q = t.$_$.pd,
                    d = t.$_$.qd,
                    g = i.$_$.m2,
                    k = t.$_$.z9,
                    y = t.$_$.bc,
                    m = u.$_$.a,
                    z = r.$_$.c,
                    C = i.$_$.d1,
                    j = e.$_$.e,
                    x = i.$_$.s2,
                    R = t.$_$.fd,
                    P = r.$_$.a;
                function S(n, t) {
                    (this.bb7_1 = n), _.call(this, t);
                }
                function U(n, t) {
                    var r = new S(n, t),
                        i = function (n, t) {
                            return r.db7(n, t);
                        };
                    return (i.$arity = 1), i;
                }
                function I(n) {
                    this.lb7_1 = n;
                }
                function B(n, t) {
                    (this.ub7_1 = n), _.call(this, t);
                }
                function M(n, t, r, i) {
                    var u, e;
                    (this.fb7_1 = n),
                        (this.gb7_1 = t),
                        (this.hb7_1 = r),
                        (this.ib7_1 = m(this, i)),
                        (this.jb7_1 = C(z())),
                        (this.kb7_1 = j(this.jb7_1)),
                        x(
                            this.ib7_1,
                            v,
                            v,
                            ((u = new B(this, null)),
                            ((e = function (n, t) {
                                return u.o25(n, t);
                            }).$arity = 1),
                            e),
                        );
                }
                $(S, _, v, [1]),
                    d(I, "sam$kotlinx_coroutines_flow_FlowCollector$0", v, v, [b, w], [1]),
                    $(B, _, v, [1]),
                    d(M, "DefaultProfilePictureButtonComponent", v, v, [P]),
                    (o(S).db7 = function (n, t) {
                        var r = this.eb7(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (o(S).cb = function (n, t) {
                        return this.db7(null == n || a(n, f) ? n : s(), t);
                    }),
                    (o(S).oa = function () {
                        for (this.y9_1; ; )
                            try {
                                var n = this.w9_1;
                                if (0 === n) {
                                    this.x9_1 = 1;
                                    var t = this.cb7_1,
                                        r = null == t ? null : h(t);
                                    if (null == r);
                                    else
                                        n: do {
                                            for (var i = this.bb7_1.jb7_1; ; ) {
                                                var u = i.n2(),
                                                    e = new c(r.m92_1);
                                                if (i.y23(u, e)) break n;
                                            }
                                        } while (0);
                                    return l;
                                }
                                if (1 === n) throw this.z9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (o(S).eb7 = function (n, t) {
                        var r = new S(this.bb7_1, t);
                        return (r.cb7_1 = n), r;
                    }),
                    (o(I).u1x = function (n, t) {
                        return this.lb7_1(n, t);
                    }),
                    (o(I).a4 = function () {
                        return this.lb7_1;
                    }),
                    (o(I).equals = function (n) {
                        var t;
                        null != n && a(n, b) ? (t = !(null == n || !a(n, w)) && p(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (o(I).hashCode = function () {
                        return q(this.a4());
                    }),
                    (o(B).o25 = function (n, t) {
                        var r = this.p25(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (o(B).cb = function (n, t) {
                        return this.o25(null != n && a(n, g) ? n : s(), t);
                    }),
                    (o(B).oa = function () {
                        var n = this.y9_1;
                        n: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 2), (this.w9_1 = 1);
                                        var t = this.ub7_1.gb7_1.f9t(k(this.ub7_1.hb7_1), v, !0),
                                            r = U(this.ub7_1, null);
                                        if ((n = t.d1x(new I(r), this)) === y()) return n;
                                        continue n;
                                    case 1:
                                        return l;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (n) {
                                var i = n;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (o(B).p25 = function (n, t) {
                        var r = new B(this.ub7_1, t);
                        return (r.vb7_1 = n), r;
                    }),
                    (o(M).ea = function () {
                        return this.kb7_1;
                    }),
                    (o(M).nb5 = function () {
                        return this.fb7_1.nb5();
                    }),
                    (o(M).ob5 = function () {
                        return this.fb7_1.ob5();
                    }),
                    (o(M).pb5 = function () {
                        return this.fb7_1.pb5();
                    }),
                    (o(M).qb5 = function () {
                        return this.fb7_1.qb5();
                    }),
                    (o(M).mb5 = function () {
                        return this.fb7_1.mb5();
                    }),
                    R(o(M), "state", function () {
                        return this.ea();
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = M);
            })(n.exports, r(519039), r(837398), r(115754), r(471406), r(593760));
        },
        982563: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r = t.$_$.re;
                (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = function () {
                        return r(new Date().getTime());
                    });
            })(n.exports, r(519039));
        },
        360310: (n, t, r) => {
            !(function (n, t, r, i, u) {
                "use strict";
                var e,
                    _,
                    l,
                    o,
                    s,
                    f,
                    a,
                    h = Math.imul,
                    c = t.$_$.d1,
                    $ = t.$_$.o6,
                    v = t.$_$.te,
                    p = t.$_$.qd,
                    w = t.$_$.z8,
                    b = t.$_$.rd,
                    q = t.$_$.q1,
                    d = t.$_$.se,
                    g = t.$_$.mb,
                    k = t.$_$.o1,
                    y = t.$_$.od,
                    m = r.$_$.e2,
                    z = t.$_$.wk,
                    C = t.$_$.b8,
                    j = t.$_$.t,
                    x = t.$_$.wd,
                    R = r.$_$.d1,
                    P = r.$_$.d2,
                    S = r.$_$.c1,
                    U = r.$_$.b1,
                    I = r.$_$.g3,
                    B = t.$_$.g,
                    M = t.$_$.dj,
                    D = i.$_$.a,
                    K = u.$_$.e,
                    L = t.$_$.ba,
                    F = t.$_$.gf,
                    N = t.$_$.c1,
                    A = t.$_$.y8,
                    E = t.$_$.c9,
                    J = t.$_$.qa,
                    O = t.$_$.a9,
                    T = t.$_$.u,
                    G = t.$_$.s7,
                    V = t.$_$.sb,
                    H = t.$_$.ma,
                    Q = t.$_$.dk,
                    W = r.$_$.i,
                    X = t.$_$.hd,
                    Y = r.$_$.j,
                    Z = r.$_$.q2,
                    nn = t.$_$.kj,
                    tn = t.$_$.i7,
                    rn = t.$_$.fe,
                    un = t.$_$.xe,
                    en = t.$_$.l2,
                    _n = t.$_$.n9,
                    ln = t.$_$.ga,
                    on = t.$_$.h1,
                    sn = t.$_$.rb,
                    fn = t.$_$.xk,
                    an = t.$_$.ra,
                    hn = t.$_$.z7,
                    cn = t.$_$.f7,
                    $n = t.$_$.lk,
                    vn = t.$_$.c8,
                    pn = r.$_$.a1,
                    wn = r.$_$.y,
                    bn = t.$_$.e9,
                    qn = t.$_$.ob,
                    dn = t.$_$.pd,
                    gn = t.$_$.lb,
                    kn = r.$_$.w2,
                    yn = t.$_$.m7,
                    mn = t.$_$.f1,
                    zn = t.$_$.ja,
                    Cn = t.$_$.zi,
                    jn = r.$_$.h;
                function xn() {
                    this.k54_1 = c();
                }
                function Rn() {
                    (e = this), (this.m54_1 = new Sn(w()));
                }
                function Pn() {
                    return null == e && new Rn(), e;
                }
                function Sn(n) {
                    Pn(), (this.n54_1 = n);
                }
                function Un(n, t, r) {
                    var i = q();
                    i.f9(n), i.f9(":");
                    for (var u = t.p(); u.q(); ) {
                        var e = u.r();
                        i.f9(e);
                    }
                    var _ = i.toString();
                    return Dn.call(r, _), r;
                }
                function In(n, t) {
                    return Un(n, t, d(v(Dn)));
                }
                function Bn() {
                    (_ = this), (this.q54_1 = k("ApolloCacheReference\\{(.*)\\}")), (this.r54_1 = "ApolloCacheReference"), (this.s54_1 = new Dn("QUERY_ROOT"));
                }
                function Mn() {
                    return null == _ && new Bn(), _;
                }
                function Dn(n) {
                    Mn(), (this.u54_1 = n);
                }
                function Kn(n, t) {
                    (this.v54_1 = n), (this.w54_1 = t);
                }
                function Ln() {}
                function Fn() {}
                function Nn() {}
                function An(n) {
                    return n.e12_1.c12_1;
                }
                function En() {}
                function Jn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Xn.call(this), (this.c55_1 = n), (this.d55_1 = t);
                }
                function On(n, t, r) {
                    var i,
                        u = n.l55_1.s55(t);
                    null == u ? (i = null) : ((u.y55() || r.o54("evict-after-read")) && n.l55_1.t55(t), (i = u));
                    var e,
                        _ = i;
                    null == _ ? (e = null) : (e = _.y55() ? null : _);
                    return null == e ? null : e.u55_1;
                }
                function Tn(n, t, r) {
                    var i,
                        u = n.d56(t.z55_1, r);
                    if (null == u) n.l55_1.f56(t.z55_1, new Gn(t, n.j55_1)), (i = t.g56());
                    else {
                        var e = u.e56(t),
                            _ = e.fh(),
                            l = e.gh();
                        n.l55_1.f56(t.z55_1, new Gn(_, n.j55_1)), (i = l);
                    }
                    return i;
                }
                function Gn(n, t) {
                    (this.u55_1 = n), (this.v55_1 = t), (this.w55_1 = D()), (this.x55_1 = (this.u55_1.h56() + 8) | 0);
                }
                function Vn(n, t) {
                    var r = K(n).length,
                        i = null == t ? null : t.x55_1;
                    return (r + (null == i ? 0 : i)) | 0;
                }
                function Hn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Wn.call(this), (this.i55_1 = n), (this.j55_1 = t), (this.k55_1 = new Rt());
                    this.l55_1 = new $t(this.i55_1, Vn);
                }
                function Qn() {
                    this.n56_1 = "()^$.*?+{}";
                }
                function Wn() {
                    this.i56_1 = null;
                }
                function Xn() {
                    this.f55_1 = null;
                }
                function Yn(n, t, r, i, u, e) {
                    return new st(r, t.u54_1, e, i, u, n.p56().r11_1, n.p56().n11_1.j11().i11_1).e57();
                }
                function Zn(n, t, r, i) {
                    return (function (n, t, r, i, u) {
                        return tt.call(u, n, t, r), (u.c56_1 = i), u;
                    })(n, t, r, i, d(v(tt)));
                }
                function nt() {}
                function tt(n, t, r) {
                    (r = r === B ? null : r), (this.z55_1 = n), (this.a56_1 = t), (this.b56_1 = r), (this.c56_1 = null);
                }
                function rt(n, t, r) {
                    var i;
                    if (n instanceof Dn) i = rt(t.s57_1.q2(r), t, r);
                    else if (null != n && rn(n, cn)) {
                        for (var u = j(C(n, 10)), e = 0, _ = n.p(); _.q(); ) {
                            var l = _.r(),
                                o = e;
                            e = (o + 1) | 0;
                            var s = hn(o),
                                f = rt(l, t, an(r, s));
                            u.k(f);
                        }
                        i = u;
                    } else if (null != n && rn(n, tn)) {
                        for (var a = N(L(n.s())), h = n.t2().p(); h.q(); ) {
                            var c = h.r(),
                                $ = c.m2(),
                                v = c.n2(),
                                p = c.m2(),
                                w = rt(v, t, an(r, null != p && "string" == typeof p ? p : nn()));
                            a.u2($, w);
                        }
                        i = a;
                    } else i = n;
                    return i;
                }
                function it(n, t, r, i) {
                    (this.t57_1 = n), (this.u57_1 = t), (this.v57_1 = r), (this.w57_1 = i);
                }
                function ut(n) {
                    this.x57_1 = n;
                    this.y57_1 = T();
                }
                function et(n, t, r, i, u) {
                    for (var e, _, l = t.p(); l.q(); ) {
                        var o = l.r();
                        o instanceof wn ? u.y57_1.k(o) : o instanceof pn ? (!vn(o.l13_1, i) && o.k13_1 !== r) || ((e = o), (_ = u.x57_1.k12_1), xt(e.m13_1, _)) || et(n, o.n13_1, r, i, u) : $n();
                    }
                }
                function _t(n, t, r, i, u) {
                    var e = new ut(i);
                    et(n, t, r, u, e);
                    for (var _ = e.y57_1, l = c(), o = _.p(); o.q(); ) {
                        var s,
                            f = o.r(),
                            a = fn(f.g12(), f.p11_1),
                            h = l.q2(a);
                        if (null == h) {
                            var $ = T();
                            l.u2(a, $), (s = $);
                        } else s = h;
                        s.k(f);
                    }
                    for (var v = l.s2(), p = j(C(v, 10)), w = v.p(); w.q(); ) {
                        for (var b = w.r(), q = bn(b).uz(), d = T(), g = b.p(); g.q(); ) {
                            var k = g.r().r11_1;
                            G(d, k);
                        }
                        var y = q.a12(d).hz();
                        p.k(y);
                    }
                    return p;
                }
                function lt(n, t, r, i, u) {
                    if (n instanceof Dn) {
                        var e = n.u54_1;
                        t.d57_1.k(new it(e, r, i, u));
                    } else if (null != n && rn(n, cn))
                        for (var _ = 0, l = n.p(); l.q(); ) {
                            var o = l.r(),
                                s = _;
                            _ = (s + 1) | 0;
                            var f = hn(s);
                            lt(o, t, an(r, f), i, u);
                        }
                    else if (null != n && rn(n, tn)) {
                        rn(n, tn) || nn();
                        for (var a = n.q2("__typename"), h = _t(t, i, u, t.x56_1, null != a && "string" == typeof a ? a : null), c = T(), $ = h.p(); $.q(); ) {
                            var v,
                                p = $.r();
                            if (jt(p, t.x56_1.k12_1)) v = null;
                            else {
                                var w = t.y56_1.a55(p, t.x56_1, n, "");
                                lt(w, t, an(r, p.g12()), p.r11_1, p.n11_1.j11().i11_1), (v = fn(p.g12(), w));
                            }
                            var b = v;
                            null == b || c.k(b);
                        }
                        qn(c);
                    }
                }
                function ot(n) {
                    this.s57_1 = n;
                }
                function st(n, t, r, i, u, e, _) {
                    (this.v56_1 = n), (this.w56_1 = t), (this.x56_1 = r), (this.y56_1 = i), (this.z56_1 = u), (this.a57_1 = e), (this.b57_1 = _);
                    this.c57_1 = c();
                    this.d57_1 = T();
                }
                function ft(n, t) {
                    if (null == t.c58_1) return $;
                    var r = t.c58_1;
                    if ((null == r || (r.b58_1 = t.b58_1), null == t.b58_1)) n.q55_1 = t.c58_1;
                    else {
                        var i = t.b58_1;
                        null == i || (i.c58_1 = t.c58_1);
                    }
                    (t.b58_1 = n.p55_1), (t.c58_1 = null);
                    var u = n.p55_1;
                    null == u || (u.c58_1 = t), (n.p55_1 = t);
                }
                function at(n, t) {
                    if (null == t.c58_1) n.p55_1 = t.b58_1;
                    else {
                        var r = t.c58_1;
                        null == r || (r.b58_1 = t.b58_1);
                    }
                    if (null == t.b58_1) n.q55_1 = t.c58_1;
                    else {
                        var i = t.b58_1;
                        null == i || (i.c58_1 = t.c58_1);
                    }
                    (n.r55_1 = (n.r55_1 - n.n55_1(Q(t.z57_1), t.a58_1)) | 0), (t.z57_1 = null), (t.a58_1 = null), (t.b58_1 = null), (t.c58_1 = null);
                }
                function ht(n, t, r, i) {
                    (this.z57_1 = n), (this.a58_1 = t), (this.b58_1 = r), (this.c58_1 = i);
                }
                function ct(n, t) {
                    return 1;
                }
                function $t(n, t) {
                    (t = t === B ? ct : t), (this.m55_1 = n), (this.n55_1 = t), (this.o55_1 = mn(0, 0.75)), (this.p55_1 = null), (this.q55_1 = null), (this.r55_1 = 0);
                }
                function vt(n, t, r, i, u) {
                    for (
                        var e = t.q2("__typename"),
                            _ = (function (n, t, r, i) {
                                var u = new wt();
                                return bt(n, t, r, i, u), u.d58_1;
                            })(n, i, u, null != e && "string" == typeof e ? e : null),
                            l = t.t2(),
                            o = T(),
                            s = l.p();
                        s.q();

                    ) {
                        for (var f, a = s.r(), h = T(), c = _.p(); c.q(); ) {
                            var $ = c.r();
                            $.g12() === a.m2() && h.k($);
                        }
                        var v = h;
                        if (v.h()) f = null;
                        else {
                            for (var p = T(), w = v.p(); w.q(); ) {
                                var b = w.r();
                                jt(b, n.q56_1.k12_1) || p.k(b);
                            }
                            var q = p;
                            if (q.h()) f = null;
                            else {
                                for (var d = bn(q).uz(), g = T(), k = q.p(); k.q(); ) {
                                    var y = k.r().r11_1;
                                    G(g, y);
                                }
                                var m = d.a12(g).y11(A()).hz(),
                                    z = m.n12(n.q56_1),
                                    C = r === Mn().t54().u54_1 ? null : r;
                                f = fn(z, pt(n, a.n2(), m, m.n11_1, qt(C, n, z)));
                            }
                        }
                        var j = f;
                        null == j || o.k(j);
                    }
                    var x = new tt(r, qn(o)),
                        R = n.t56_1.q2(r),
                        P = null != R ? R.e56(x).zg_1 : x;
                    return n.t56_1.u2(r, P), new Dn(r);
                }
                function pt(n, t, r, i, u) {
                    var e;
                    if (i instanceof R) {
                        if (null == t) {
                            throw en(un("Check failed."));
                        }
                        e = i.f13_1;
                    } else {
                        if (null == t) return null;
                        e = i;
                    }
                    var _,
                        l = e;
                    if (l instanceof U) {
                        if (null == t || !rn(t, cn)) {
                            throw en(un("Check failed."));
                        }
                        for (var o = j(C(t, 10)), s = 0, f = t.p(); f.q(); ) {
                            var a = f.r(),
                                h = s;
                            s = (h + 1) | 0;
                            var c = hn(h),
                                $ = pt(n, a, r, l.s13_1, qt(u, n, c.toString()));
                            o.k($);
                        }
                        _ = o;
                    } else {
                        if (l instanceof S && P(l)) {
                            if (null == t || !rn(t, tn)) {
                                throw en(un("Check failed."));
                            }
                            var v = n.s56_1.x54(rn(t, tn) ? t : nn(), new Kn(r, n.q56_1)),
                                p = null == v ? null : v.u54_1;
                            _ = vt(n, t, null == p ? u : p, r.r11_1, r.n11_1.j11().i11_1);
                        } else _ = t;
                    }
                    return _;
                }
                function wt() {
                    this.d58_1 = T();
                }
                function bt(n, t, r, i, u) {
                    for (var e = t.p(); e.q(); ) {
                        var _ = e.r();
                        _ instanceof wn ? u.d58_1.k(_) : _ instanceof pn ? (vn(_.l13_1, i) || _.k13_1 === r) && bt(n, _.n13_1, r, i, u) : $n();
                    }
                }
                function qt(n, t, r) {
                    return null == n ? r : n + "." + r;
                }
                function dt(n, t, r) {
                    (this.q56_1 = n), (this.r56_1 = t), (this.s56_1 = r);
                    this.t56_1 = c();
                }
                function gt(n, t, r) {
                    var i,
                        u = t.f58_1.q2(r);
                    if (null != u) {
                        var e = null == n ? null : n.e56(u.g58_1),
                            _ = null == e ? null : e.zg_1;
                        i = null == _ ? u.g58_1 : _;
                    } else i = n;
                    return i;
                }
                function kt(n, t) {
                    (this.i58_1 = n), (this.j58_1 = t);
                }
                function yt(n) {
                    (this.g58_1 = n), (this.h58_1 = zn([n]));
                }
                function mt() {
                    Wn.call(this);
                    this.f58_1 = c();
                }
                function zt(n, t) {
                    var r;
                    if (null == t) r = 4;
                    else if (null != t && "string" == typeof t) r = K(t).length;
                    else if (null != t && "boolean" == typeof t) r = 16;
                    else if (null != t && "number" == typeof t) r = 4;
                    else if (t instanceof M) r = 8;
                    else if (null != t && "number" == typeof t) r = 8;
                    else if (t instanceof jn) r = (K(t.a18_1).length + 8) | 0;
                    else if (null != t && rn(t, tn)) {
                        for (var i = 0, u = t.r2().p(); u.q(); ) {
                            var e = u.r();
                            i = (i + zt(a, e)) | 0;
                        }
                        for (var _ = (16 + i) | 0, l = 0, o = t.s2().p(); o.q(); ) {
                            var s = o.r();
                            l = (l + zt(a, s)) | 0;
                        }
                        r = (_ + l) | 0;
                    } else if (null != t && rn(t, cn)) {
                        for (var f = 0, h = t.p(); h.q(); ) {
                            var c = h.r();
                            f = (f + zt(a, c)) | 0;
                        }
                        r = (16 + f) | 0;
                    } else {
                        if (!(t instanceof Dn)) {
                            var $ = "Unknown field type in Record: '" + z(t) + "'";
                            throw en(un($));
                        }
                        r = (16 + K(t.u54_1).length) | 0;
                    }
                    return r;
                }
                function Ct() {
                    (this.g57_1 = 16), (this.h57_1 = 4), (this.i57_1 = 8), (this.j57_1 = 8), (this.k57_1 = 16), (this.l57_1 = 16), (this.m57_1 = 16), (this.n57_1 = 16), (this.o57_1 = 4);
                }
                function jt(n, t) {
                    return xt(n.p11_1, t);
                }
                function xt(n, t) {
                    for (var r = n.p(); r.q(); ) {
                        var i = r.r(),
                            u = t.q2(i.v12_1),
                            e = null != u && "boolean" == typeof u ? u : null,
                            _ = null != e && e;
                        if ((i.w12_1 && (_ = !_), !_)) return !0;
                    }
                    return !1;
                }
                function Rt() {}
                p(xn, "Builder", xn),
                    b(Rn),
                    p(Sn, "CacheHeaders"),
                    b(Bn),
                    p(Dn, "CacheKey"),
                    p(Kn, "CacheKeyGeneratorContext"),
                    x(Ln, "TypePolicyCacheKeyGenerator"),
                    p(Fn, "CacheKeyResolver"),
                    x(Nn, "DefaultCacheResolver"),
                    x(En, "FieldPolicyCacheResolver"),
                    p(Xn, "NormalizedCacheFactory"),
                    p(Jn, "MemoryCacheFactory", Jn, Xn),
                    p(Gn, "CacheEntry"),
                    p(Wn, "NormalizedCache"),
                    p(Hn, "MemoryCache", Hn, Wn),
                    b(Qn),
                    b(nt),
                    p(tt, "Record", B, B, [tn]),
                    p(it, "PendingReference"),
                    p(ut, "CollectState"),
                    p(ot, "CacheBatchReaderData"),
                    p(st, "CacheBatchReader"),
                    p(ht, "Node"),
                    p($t, "LruCache"),
                    p(wt, "CollectState", wt),
                    p(dt, "Normalizer"),
                    p(kt, "RemovalResult"),
                    p(yt, "RecordJournal"),
                    p(mt, "OptimisticCache", mt, Wn),
                    x(Ct, "RecordWeigher"),
                    p(Rt, "CacheLock", Rt),
                    (v(xn).g16 = function (n, t) {
                        return this.k54_1.u2(n, t), this;
                    }),
                    (v(xn).l54 = function (n) {
                        return this.k54_1.w2(n), this;
                    }),
                    (v(xn).hz = function () {
                        return new Sn(this.k54_1);
                    }),
                    (v(Rn).j3i = function () {
                        return new xn();
                    }),
                    (v(Sn).uz = function () {
                        return Pn().j3i().l54(this.n54_1);
                    }),
                    (v(Sn).o54 = function (n) {
                        return this.n54_1.o2(n);
                    }),
                    (v(Sn).p54 = function (n) {
                        return this.uz().l54(n.n54_1).hz();
                    }),
                    (v(Bn).t54 = function () {
                        return this.s54_1;
                    }),
                    (v(Dn).hashCode = function () {
                        return y(this.u54_1);
                    }),
                    (v(Dn).equals = function (n) {
                        var t = n instanceof Dn ? n : null;
                        return this.u54_1 === (null == t ? null : t.u54_1);
                    }),
                    (v(Dn).toString = function () {
                        return "CacheKey(" + this.u54_1 + ")";
                    }),
                    (v(Ln).x54 = function (n, t) {
                        var r,
                            i = m(t.v54_1.n11_1.j11());
                        if (i.h()) r = null;
                        else {
                            for (var u = z(n.q2("__typename")), e = j(C(i, 10)), _ = i.p(); _.q(); ) {
                                var l = _.r(),
                                    o = z(n.q2(l));
                                e.k(o);
                            }
                            r = In(u, e);
                        }
                        return r;
                    }),
                    (v(Fn).z54 = function (n, t) {
                        return null;
                    }),
                    (v(Fn).a55 = function (n, t, r, i) {
                        var u = n.n11_1;
                        if ((u instanceof R && (u = u.f13_1), u instanceof S && P(u))) {
                            var e = this.y54(n, t);
                            if (null != e) return e;
                        }
                        if (u instanceof U && ((u = u.s13_1) instanceof R && (u = u.f13_1), u instanceof S && P(u))) {
                            var _ = this.z54(n, t);
                            if (null != _) return _;
                        }
                        return o.a55(n, t, r, i);
                    }),
                    (v(Nn).a55 = function (n, t, r, i) {
                        var u = n.n12(t);
                        if (!r.o2(u)) throw I(i, u);
                        return r.q2(u);
                    }),
                    (v(En).a55 = function (n, t, r, i) {
                        for (var u = n.m12(t, An).s2(), e = j(C(u, 10)), _ = u.p(); _.q(); ) {
                            var l = _.r(),
                                s = z(l);
                            e.k(s);
                        }
                        var f = e;
                        return f.h() ? o.a55(n, t, r, i) : In(n.n11_1.j11().i11_1, f);
                    }),
                    (v(Jn).e55 = function () {
                        return new Hn(this.c55_1, this.d55_1);
                    }),
                    (v(Gn).y55 = function () {
                        return !(this.v55_1.d1(new M(0, 0)) < 0) && D().h3(this.w55_1).d1(this.v55_1) >= 0;
                    }),
                    (v(Hn).d56 = function (n, t) {
                        return this.k55_1.k56(
                            ((r = this),
                            (i = n),
                            (u = t),
                            function () {
                                var n,
                                    t = On(r, i, u);
                                if (null == t) {
                                    var e,
                                        _ = r.i56_1,
                                        l = null == _ ? null : _.d56(i, u);
                                    null == l ? (e = null) : (r.l55_1.f56(i, new Gn(l, r.j55_1)), (e = l)), (n = e);
                                } else n = t;
                                return n;
                            }),
                        );
                        var r, i, u;
                    }),
                    (v(Hn).j56 = function (n, t) {
                        return this.k55_1.k56(
                            ((r = n),
                            (i = this),
                            (u = t),
                            function () {
                                for (var n = r, t = N(F(L(C(n, 10)), 16)), e = n.p(); e.q(); ) {
                                    var _ = e.r(),
                                        l = On(i, _, u);
                                    t.u2(_, l);
                                }
                                for (var o = t, s = c(), f = o.t2().p(); f.q(); ) {
                                    var a = f.r();
                                    null == a.n2() && s.u2(a.m2(), a.n2());
                                }
                                for (var h = s.r2(), $ = i.i56_1, v = null == $ ? null : $.j56(h, u), p = null == v ? A() : v, w = p.p(); w.q(); ) {
                                    var b = w.r();
                                    i.l55_1.f56(b.z55_1, new Gn(b, i.j55_1));
                                }
                                return J(E(o.s2()), p);
                            }),
                        );
                        var r, i, u;
                    }),
                    (v(Hn).l56 = function (n, t) {
                        if (t.o54("do-not-store")) return O();
                        for (var r = T(), i = n.p(); i.q(); ) {
                            var u = Tn(this, i.r(), t);
                            G(r, u);
                        }
                        var e = V(r),
                            _ = this.i56_1,
                            l = null == _ ? null : _.l56(n, t),
                            o = null == l ? O() : l;
                        return H(e, o);
                    }),
                    (v(Wn).m56 = function (n) {
                        for (var t = this; null != t.i56_1; ) t = Q(t.i56_1);
                        return (t.i56_1 = n), this;
                    }),
                    (v(Xn).g55 = function () {
                        var n = this.f55_1;
                        return null != n ? this.e55().m56(n.g55()) : this.e55();
                    }),
                    (v(nt).f57 = function (n, t) {
                        if (n.z55_1 !== t.z55_1) {
                            var r = "Cannot compute changed keys on record with different keys: '" + n.z55_1 + "' - '" + t.z55_1 + "'";
                            throw en(un(r));
                        }
                        for (var i = n.a56_1.r2(), u = t.a56_1.r2(), e = _n(i, u), _ = H(ln(i, e), ln(u, e)), l = T(), o = e.p(); o.q(); ) {
                            var s = o.r();
                            X(n.a56_1.q2(s), t.a56_1.q2(s)) || l.k(s);
                        }
                        for (var f = H(_, l), a = j(C(f, 10)), h = f.p(); h.q(); ) {
                            var c = h.r(),
                                $ = n.z55_1 + "." + c;
                            a.k($);
                        }
                        return V(a);
                    }),
                    (v(tt).h56 = function () {
                        var n = this.c56_1,
                            t = null == n ? null : n.s(),
                            r = null == t ? null : h(t, 8),
                            i = null == r ? 0 : r;
                        return (a.p57(this) + i) | 0;
                    }),
                    (v(tt).q57 = function (n, t) {
                        for (var r = on(), i = sn(this.a56_1), u = this.c56_1, e = null == u ? null : sn(u), _ = null == e ? c() : e, l = n.a56_1.t2().p(); l.q(); ) {
                            var o = l.r(),
                                s = o.m2(),
                                f = o.n2(),
                                a = this.a56_1.o2(s),
                                h = this.a56_1.q2(s);
                            (a && X(h, f)) || (i.u2(s, f), r.k(this.z55_1 + "." + s)), null != t && _.u2(s, t);
                        }
                        return fn(Zn(this.z55_1, i, n.b56_1, _), r);
                    }),
                    (v(tt).e56 = function (n) {
                        return this.q57(n, null);
                    }),
                    (v(tt).g56 = function () {
                        for (var n = this.a56_1.r2(), t = j(C(n, 10)), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                u = this.z55_1 + "." + i;
                            t.k(u);
                        }
                        return V(t);
                    }),
                    (v(tt).asJsReadonlyMapView = function () {
                        return this.a56_1.asJsReadonlyMapView();
                    }),
                    (v(tt).l3w = function (n) {
                        return this.a56_1.o2(n);
                    }),
                    (v(tt).o2 = function (n) {
                        return null != n && "string" == typeof n && this.l3w(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).r57 = function (n) {
                        return this.a56_1.p2(n);
                    }),
                    (v(tt).p2 = function (n) {
                        return (null == n || null != n) && this.r57(null == n || null != n ? n : nn());
                    }),
                    (v(tt).ee = function (n) {
                        return this.a56_1.q2(n);
                    }),
                    (v(tt).q2 = function (n) {
                        return null == n || "string" != typeof n ? null : this.ee(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).h = function () {
                        return this.a56_1.h();
                    }),
                    (v(tt).t2 = function () {
                        return this.a56_1.t2();
                    }),
                    (v(tt).r2 = function () {
                        return this.a56_1.r2();
                    }),
                    (v(tt).s = function () {
                        return this.a56_1.s();
                    }),
                    (v(tt).s2 = function () {
                        return this.a56_1.s2();
                    }),
                    (v(ot).o56 = function () {
                        var n = rt(this.s57_1.q2(A()), this, A());
                        return null != n && rn(n, tn) ? n : nn();
                    }),
                    (v(ot).toString = function () {
                        return "CacheBatchReaderData(data=" + un(this.s57_1) + ")";
                    }),
                    (v(ot).hashCode = function () {
                        return dn(this.s57_1);
                    }),
                    (v(ot).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof ot)) return !1;
                        var t = n instanceof ot ? n : nn();
                        return !!X(this.s57_1, t.s57_1);
                    }),
                    (v(st).e57 = function () {
                        var n = this.w56_1,
                            t = this.a57_1,
                            r = this.b57_1,
                            i = A();
                        this.d57_1.k(new it(n, i, t, r));
                        n: for (; !this.d57_1.h(); ) {
                            for (var u = this.d57_1, e = j(C(u, 10)), _ = u.p(); _.q(); ) {
                                var l = _.r().t57_1;
                                e.k(l);
                            }
                            for (var o = this.v56_1.j56(e, this.z56_1), s = F(L(C(o, 10)), 16), f = N(s), a = o.p(); a.q(); ) {
                                var h = a.r(),
                                    c = h.z55_1;
                                f.u2(c, h);
                            }
                            var $ = f,
                                v = gn(this.d57_1);
                            this.d57_1.i2();
                            for (var p = v.p(); p.q(); ) {
                                var b = p.r(),
                                    q = $.q2(b.t57_1);
                                if (null == q) {
                                    if (b.t57_1 !== Mn().t54().u54_1) throw new kn(b.t57_1);
                                    q = new tt(b.t57_1, w());
                                }
                                for (var d = q.ee("__typename"), g = _t(this, b.v57_1, b.w57_1, this.x56_1, null != d && "string" == typeof d ? d : null), k = T(), y = g.p(); y.q(); ) {
                                    var m,
                                        z = y.r();
                                    if (jt(z, this.x56_1.k12_1)) m = null;
                                    else {
                                        var x = this.y56_1.a55(z, this.x56_1, q, q.z55_1);
                                        lt(x, this, an(b.u57_1, z.g12()), z.r11_1, z.n11_1.j11().i11_1), (m = fn(z.g12(), x));
                                    }
                                    var R = m;
                                    null == R || k.k(R);
                                }
                                var P = qn(k),
                                    S = this.c57_1,
                                    U = b.u57_1;
                                S.u2(U, P);
                            }
                        }
                        return new ot(this.c57_1);
                    }),
                    (v($t).s55 = function (n) {
                        var t = this.o55_1.q2(n);
                        return null != t && ft(this, t), null == t ? null : t.a58_1;
                    }),
                    (v($t).f56 = function (n, t) {
                        var r = this.o55_1.q2(n);
                        if (null == r) {
                            var i = this.o55_1,
                                u = (function (n, t, r) {
                                    var i = new ht(t, r, n.p55_1, null);
                                    if (((n.p55_1 = i), null == i.b58_1)) n.q55_1 = n.p55_1;
                                    else {
                                        var u = i.b58_1;
                                        null == u || (u.c58_1 = n.p55_1);
                                    }
                                    return (n.r55_1 = (n.r55_1 + n.n55_1(t, r)) | 0), i;
                                })(this, n, t);
                            i.u2(n, u);
                        } else (r.a58_1 = t), ft(this, r);
                        !(function (n) {
                            for (var t = n.q55_1; null != t && n.r55_1 > n.m55_1; ) {
                                var r = n.o55_1,
                                    i = t.z57_1;
                                (rn(r, yn) ? r : nn()).v2(i), at(n, t), (t = n.q55_1);
                            }
                        })(this);
                    }),
                    (v($t).t55 = function (n) {
                        return (function (n, t) {
                            var r = n.o55_1.v2(t),
                                i = null == r ? null : r.a58_1;
                            return null != r && at(n, r), i;
                        })(this, n);
                    }),
                    (v(dt).u56 = function (n, t, r) {
                        return vt(this, n, this.r56_1, t, r), this.t56_1;
                    }),
                    (v(yt).k58 = function (n) {
                        var t = this.g58_1.e56(n),
                            r = t.fh(),
                            i = t.gh();
                        return (this.g58_1 = r), this.h58_1.k(n), i;
                    }),
                    (v(yt).l58 = function (n) {
                        var t;
                        n: {
                            for (var r = 0, i = this.h58_1.p(); i.q(); ) {
                                var u = i.r();
                                if (n.equals(u.b56_1)) {
                                    t = r;
                                    break n;
                                }
                                r = (r + 1) | 0;
                            }
                            t = -1;
                        }
                        var e = t;
                        if (-1 === e) return new kt(O(), !1);
                        if (1 === this.h58_1.s()) return new kt(this.g58_1.g56(), !0);
                        var _ = this.g58_1;
                        this.h58_1.l2(e).z55_1;
                        var l = null,
                            o = (e - 1) | 0,
                            s = Math.max(0, o),
                            a = this.h58_1.s();
                        if (s < a)
                            do {
                                var h = s;
                                s = (s + 1) | 0;
                                var c = this.h58_1.t(h);
                                if (null == l) l = c;
                                else {
                                    var $ = l.e56(c).fh();
                                    l = $;
                                }
                            } while (s < a);
                        return (this.g58_1 = Q(l)), new kt(f.f57(_, this.g58_1), !1);
                    }),
                    (v(mt).d56 = function (n, t) {
                        var r;
                        try {
                            var i = this.i56_1;
                            r = gt(null == i ? null : i.d56(n, t), this, n);
                        } catch (n) {
                            if (!(n instanceof Cn)) throw n;
                            r = null;
                        }
                        return r;
                    }),
                    (v(mt).j56 = function (n, t) {
                        var r,
                            i = this.i56_1,
                            u = null == i ? null : i.j56(n, t);
                        if (null == u) r = null;
                        else {
                            for (var e = F(L(C(u, 10)), 16), _ = N(e), l = u.p(); l.q(); ) {
                                var o = l.r(),
                                    s = o.z55_1;
                                _.u2(s, o);
                            }
                            r = _;
                        }
                        for (var f = r, a = null == f ? w() : f, h = T(), c = n.p(); c.q(); ) {
                            var $ = c.r(),
                                v = gt(a.q2($), this, $);
                            null == v || h.k(v);
                        }
                        return h;
                    }),
                    (v(mt).l56 = function (n, t) {
                        var r = this.i56_1,
                            i = null == r ? null : r.l56(n, t);
                        return null == i ? O() : i;
                    }),
                    (v(mt).m58 = function (n) {
                        for (var t = T(), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                u = this.n58(i);
                            G(t, u);
                        }
                        return V(t);
                    }),
                    (v(mt).n58 = function (n) {
                        var t,
                            r = this.f58_1.q2(n.z55_1);
                        if (null == r) {
                            var i = this.f58_1,
                                u = n.z55_1,
                                e = new yt(n);
                            i.u2(u, e), (t = n.g56());
                        } else t = r.k58(n);
                        return t;
                    }),
                    (v(mt).o58 = function (n) {
                        for (var t = on(), r = this.f58_1.t2().p(); r.q(); ) {
                            var i = r.r().n2().l58(n);
                            t.u(i.i58_1), i.j58_1 && r.g5();
                        }
                        return t;
                    }),
                    (v(Ct).p57 = function (n) {
                        for (var t = (16 + K(n.z55_1).length) | 0, r = n.a56_1.t2().p(); r.q(); ) {
                            var i = r.r(),
                                u = i.m2(),
                                e = i.n2();
                            t = (t + ((K(u).length + zt(0, e)) | 0)) | 0;
                        }
                        return t;
                    }),
                    (v(Rt).k56 = function (n) {
                        return n();
                    }),
                    (l = new Ln()),
                    (o = new Nn()),
                    (s = new En()),
                    new Qn(),
                    (f = new nt()),
                    (a = new Ct()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = mt),
                    (n.$_$.b = xn),
                    (n.$_$.c = Fn),
                    (n.$_$.d = Jn),
                    (n.$_$.e = tt),
                    (n.$_$.f = function (n) {
                        var t;
                        if (null == n) t = null;
                        else {
                            for (var r = T(), i = n.p(); i.q(); ) {
                                var u = i.r().g56();
                                G(r, u);
                            }
                            t = r;
                        }
                        var e = null == t ? null : V(t);
                        return null == e ? O() : e;
                    }),
                    (n.$_$.g = function (n, t, r, i) {
                        return (function (n, t, r, i, u) {
                            var e = new Y();
                            n.y14().dw(e, r, t);
                            var _ = Z(n, r, !0),
                                l = new dt(_, u, i),
                                o = e.fx();
                            return l.u56(null != o && rn(o, tn) ? o : nn(), n.p56().r11_1, n.p56().n11_1.j11().i11_1);
                        })(n, t, r, i, Mn().t54().u54_1);
                    }),
                    (n.$_$.h = function (n, t, r, i, u) {
                        return Yn(n, Mn().t54(), t, r, i, u);
                    }),
                    (n.$_$.i = function (n, t, r, i, u, e) {
                        return Yn(n, t, r, i, u, e);
                    }),
                    (n.$_$.j = function (n, t, r, i) {
                        for (var u = new W(n.o56()), e = r.uz(), _ = i.k12_1, l = c(), o = _.t2().p(); o.q(); ) {
                            var s = o.r();
                            X(s.n2(), !1) && l.u2(s.m2(), s.n2());
                        }
                        return t.cw(u, e.c14(l.r2()).hz());
                    }),
                    (n.$_$.k = function (n, t) {
                        return (function (n, t, r) {
                            return Un(n, g(t), r), r;
                        })(n, t, d(v(Dn)));
                    }),
                    (n.$_$.l = In),
                    (n.$_$.m = Pn),
                    (n.$_$.n = s),
                    (n.$_$.o = l);
            })(n.exports, r(519039), r(170047), r(982563), r(222818));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-1c7ce4c0.5b48d34a.js.map
