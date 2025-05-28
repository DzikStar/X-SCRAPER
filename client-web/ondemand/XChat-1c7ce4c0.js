(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-1c7ce4c0"],
    {
        837398: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r,
                    i = t.$_$.ve,
                    e = t.$_$.wd,
                    u = t.$_$.pj,
                    _ = t.$_$.yd,
                    l = t.$_$.g,
                    s = t.$_$.qd,
                    o = t.$_$.sd,
                    f = t.$_$.gd;
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
                e(a, "ProfilePictureButtonComponent"),
                    o(v, "ProfilePictureState"),
                    _(h, "Loading", l, v),
                    o($, "Content", l, v),
                    (i(h).toString = function () {
                        return "Loading";
                    }),
                    (i(h).hashCode = function () {
                        return -185273644;
                    }),
                    (i(h).equals = function (n) {
                        return this === n || (n instanceof h && (n instanceof h || u(), !0));
                    }),
                    (i($).s9i = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).gh = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).y9j = function (n) {
                        return new $(n);
                    }),
                    (i($).copy = function (n, t) {
                        return (n = n === l ? this.profileImageUrl : n), this.y9j(n);
                    }),
                    (i($).toString = function () {
                        return "Content(profileImageUrl=" + this.profileImageUrl + ")";
                    }),
                    (i($).hashCode = function () {
                        return null == this.profileImageUrl ? 0 : s(this.profileImageUrl);
                    }),
                    (i($).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof $)) return !1;
                        var t = n instanceof $ ? n : u();
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
            !(function (n, t, r, i, e, u) {
                "use strict";
                var _ = t.$_$.rc,
                    l = t.$_$.o6,
                    s = t.$_$.ve,
                    o = t.$_$.pj,
                    f = t.$_$.f7,
                    a = t.$_$.he,
                    h = t.$_$.e9,
                    c = r.$_$.b,
                    $ = t.$_$.xd,
                    v = t.$_$.g,
                    p = t.$_$.id,
                    w = t.$_$.vc,
                    b = i.$_$.e1,
                    y = t.$_$.rd,
                    d = t.$_$.sd,
                    q = i.$_$.p2,
                    g = t.$_$.aa,
                    k = t.$_$.cc,
                    m = e.$_$.a,
                    z = r.$_$.c,
                    C = i.$_$.h1,
                    x = u.$_$.e,
                    j = i.$_$.v2,
                    R = t.$_$.gd,
                    P = r.$_$.a;
                function U(n, t) {
                    (this.qby_1 = n), _.call(this, t);
                }
                function S(n, t) {
                    var r = new U(n, t),
                        i = function (n, t) {
                            return r.sby(n, t);
                        };
                    return (i.$arity = 1), i;
                }
                function I(n) {
                    this.abz_1 = n;
                }
                function B(n, t) {
                    (this.jbz_1 = n), _.call(this, t);
                }
                function M(n, t, r, i) {
                    var e, u;
                    (this.uby_1 = n),
                        (this.vby_1 = t),
                        (this.wby_1 = r),
                        (this.xby_1 = m(this, i)),
                        (this.yby_1 = C(z())),
                        (this.zby_1 = x(this.yby_1)),
                        j(
                            this.xby_1,
                            v,
                            v,
                            ((e = new B(this, null)),
                            ((u = function (n, t) {
                                return e.q25(n, t);
                            }).$arity = 1),
                            u),
                        );
                }
                $(U, _, v, [1]),
                    d(I, "sam$kotlinx_coroutines_flow_FlowCollector$0", v, v, [b, w], [1]),
                    $(B, _, v, [1]),
                    d(M, "DefaultProfilePictureButtonComponent", v, v, [P]),
                    (s(U).sby = function (n, t) {
                        var r = this.tby(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (s(U).cb = function (n, t) {
                        return this.sby(null == n || a(n, f) ? n : o(), t);
                    }),
                    (s(U).oa = function () {
                        for (this.y9_1; ; )
                            try {
                                var n = this.w9_1;
                                if (0 === n) {
                                    this.x9_1 = 1;
                                    var t = this.rby_1,
                                        r = null == t ? null : h(t);
                                    if (null == r);
                                    else
                                        n: do {
                                            for (var i = this.qby_1.yby_1; ; ) {
                                                var e = i.o2(),
                                                    u = new c(r.profileImageUrl);
                                                if (i.a24(e, u)) break n;
                                            }
                                        } while (0);
                                    return l;
                                }
                                if (1 === n) throw this.z9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (s(U).tby = function (n, t) {
                        var r = new U(this.qby_1, t);
                        return (r.rby_1 = n), r;
                    }),
                    (s(I).w1x = function (n, t) {
                        return this.abz_1(n, t);
                    }),
                    (s(I).a4 = function () {
                        return this.abz_1;
                    }),
                    (s(I).equals = function (n) {
                        var t;
                        null != n && a(n, b) ? (t = !(null == n || !a(n, w)) && p(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (s(I).hashCode = function () {
                        return y(this.a4());
                    }),
                    (s(B).q25 = function (n, t) {
                        var r = this.r25(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (s(B).cb = function (n, t) {
                        return this.q25(null != n && a(n, q) ? n : o(), t);
                    }),
                    (s(B).oa = function () {
                        var n = this.y9_1;
                        n: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 2), (this.w9_1 = 1);
                                        var t = this.jbz_1.vby_1.lai(g(this.jbz_1.wby_1), v, !0),
                                            r = S(this.jbz_1, null);
                                        if ((n = t.f1x(new I(r), this)) === k()) return n;
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
                    (s(B).r25 = function (n, t) {
                        var r = new B(this.jbz_1, t);
                        return (r.kbz_1 = n), r;
                    }),
                    (s(M).ea = function () {
                        return this.zby_1;
                    }),
                    (s(M).cbx = function () {
                        return this.uby_1.cbx();
                    }),
                    (s(M).dbx = function () {
                        return this.uby_1.dbx();
                    }),
                    (s(M).ebx = function () {
                        return this.uby_1.ebx();
                    }),
                    (s(M).fbx = function () {
                        return this.uby_1.fbx();
                    }),
                    (s(M).bbx = function () {
                        return this.uby_1.bbx();
                    }),
                    R(s(M), "state", function () {
                        return this.ea();
                    }),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = M);
            })(n.exports, r(519039), r(837398), r(115754), r(471406), r(593760));
        },
        982563: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r = t.$_$.te;
                (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = function () {
                        return r(new Date().getTime());
                    });
            })(n.exports, r(519039));
        },
        360310: (n, t, r) => {
            !(function (n, t, r, i, e) {
                "use strict";
                var u,
                    _,
                    l,
                    s,
                    o,
                    f,
                    a,
                    h = Math.imul,
                    c = t.$_$.d1,
                    $ = t.$_$.o6,
                    v = t.$_$.ve,
                    p = t.$_$.sd,
                    w = t.$_$.a9,
                    b = t.$_$.td,
                    y = t.$_$.q1,
                    d = t.$_$.ue,
                    q = t.$_$.nb,
                    g = t.$_$.o1,
                    k = t.$_$.qd,
                    m = r.$_$.g2,
                    z = t.$_$.cl,
                    C = t.$_$.c8,
                    x = t.$_$.t,
                    j = t.$_$.yd,
                    R = r.$_$.d1,
                    P = r.$_$.f2,
                    U = r.$_$.c1,
                    S = r.$_$.b1,
                    I = r.$_$.i3,
                    B = t.$_$.g,
                    M = t.$_$.ij,
                    D = i.$_$.a,
                    K = e.$_$.e,
                    L = t.$_$.ca,
                    F = t.$_$.if,
                    N = t.$_$.c1,
                    A = t.$_$.z8,
                    E = t.$_$.d9,
                    J = t.$_$.ra,
                    O = t.$_$.b9,
                    T = t.$_$.u,
                    G = t.$_$.s7,
                    V = t.$_$.tb,
                    H = t.$_$.na,
                    Q = t.$_$.jk,
                    W = r.$_$.i,
                    X = t.$_$.id,
                    Y = r.$_$.j,
                    Z = r.$_$.s2,
                    nn = t.$_$.pj,
                    tn = t.$_$.i7,
                    rn = t.$_$.he,
                    en = t.$_$.ze,
                    un = t.$_$.l2,
                    _n = t.$_$.o9,
                    ln = t.$_$.ha,
                    sn = t.$_$.h1,
                    on = t.$_$.sb,
                    fn = t.$_$.dl,
                    an = t.$_$.sa,
                    hn = t.$_$.a8,
                    cn = t.$_$.f7,
                    $n = t.$_$.rk,
                    vn = t.$_$.d8,
                    pn = r.$_$.a1,
                    wn = r.$_$.y,
                    bn = t.$_$.f9,
                    yn = t.$_$.pb,
                    dn = t.$_$.rd,
                    qn = t.$_$.mb,
                    gn = r.$_$.y2,
                    kn = t.$_$.m7,
                    mn = t.$_$.f1,
                    zn = t.$_$.ka,
                    Cn = t.$_$.ej,
                    xn = r.$_$.h;
                function jn() {
                    this.m53_1 = c();
                }
                function Rn() {
                    (u = this), (this.o53_1 = new Un(w()));
                }
                function Pn() {
                    return null == u && new Rn(), u;
                }
                function Un(n) {
                    Pn(), (this.p53_1 = n);
                }
                function Sn(n, t, r) {
                    var i = y();
                    i.f9(n), i.f9(":");
                    for (var e = t.p(); e.q(); ) {
                        var u = e.r();
                        i.f9(u);
                    }
                    var _ = i.toString();
                    return Dn.call(r, _), r;
                }
                function In(n, t) {
                    return Sn(n, t, d(v(Dn)));
                }
                function Bn() {
                    (_ = this), (this.s53_1 = g("ApolloCacheReference\\{(.*)\\}")), (this.t53_1 = "ApolloCacheReference"), (this.u53_1 = new Dn("QUERY_ROOT"));
                }
                function Mn() {
                    return null == _ && new Bn(), _;
                }
                function Dn(n) {
                    Mn(), (this.w53_1 = n);
                }
                function Kn(n, t) {
                    (this.x53_1 = n), (this.y53_1 = t);
                }
                function Ln() {}
                function Fn() {}
                function Nn() {}
                function An(n) {
                    return n.g12_1.e12_1;
                }
                function En() {}
                function Jn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Xn.call(this), (this.e54_1 = n), (this.f54_1 = t);
                }
                function On(n, t, r) {
                    var i,
                        e = n.n54_1.u54(t);
                    null == e ? (i = null) : ((e.a55() || r.q53("evict-after-read")) && n.n54_1.v54(t), (i = e));
                    var u,
                        _ = i;
                    null == _ ? (u = null) : (u = _.a55() ? null : _);
                    return null == u ? null : u.w54_1;
                }
                function Tn(n, t, r) {
                    var i,
                        e = n.f55(t.b55_1, r);
                    if (null == e) n.n54_1.h55(t.b55_1, new Gn(t, n.l54_1)), (i = t.i55());
                    else {
                        var u = e.g55(t),
                            _ = u.gh(),
                            l = u.hh();
                        n.n54_1.h55(t.b55_1, new Gn(_, n.l54_1)), (i = l);
                    }
                    return i;
                }
                function Gn(n, t) {
                    (this.w54_1 = n), (this.x54_1 = t), (this.y54_1 = D()), (this.z54_1 = (this.w54_1.j55() + 8) | 0);
                }
                function Vn(n, t) {
                    var r = K(n).length,
                        i = null == t ? null : t.z54_1;
                    return (r + (null == i ? 0 : i)) | 0;
                }
                function Hn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Wn.call(this), (this.k54_1 = n), (this.l54_1 = t), (this.m54_1 = new Rt());
                    this.n54_1 = new $t(this.k54_1, Vn);
                }
                function Qn() {
                    this.p55_1 = "()^$.*?+{}";
                }
                function Wn() {
                    this.k55_1 = null;
                }
                function Xn() {
                    this.h54_1 = null;
                }
                function Yn(n, t, r, i, e, u) {
                    return new ot(r, t.w53_1, u, i, e, n.r55().t11_1, n.r55().p11_1.l11().k11_1).g56();
                }
                function Zn(n, t, r, i) {
                    return (function (n, t, r, i, e) {
                        return tt.call(e, n, t, r), (e.e55_1 = i), e;
                    })(n, t, r, i, d(v(tt)));
                }
                function nt() {}
                function tt(n, t, r) {
                    (r = r === B ? null : r), (this.b55_1 = n), (this.c55_1 = t), (this.d55_1 = r), (this.e55_1 = null);
                }
                function rt(n, t, r) {
                    var i;
                    if (n instanceof Dn) i = rt(t.u56_1.r2(r), t, r);
                    else if (null != n && rn(n, cn)) {
                        for (var e = x(C(n, 10)), u = 0, _ = n.p(); _.q(); ) {
                            var l = _.r(),
                                s = u;
                            u = (s + 1) | 0;
                            var o = hn(s),
                                f = rt(l, t, an(r, o));
                            e.k(f);
                        }
                        i = e;
                    } else if (null != n && rn(n, tn)) {
                        for (var a = N(L(n.s())), h = n.z().p(); h.q(); ) {
                            var c = h.r(),
                                $ = c.n2(),
                                v = c.o2(),
                                p = c.n2(),
                                w = rt(v, t, an(r, null != p && "string" == typeof p ? p : nn()));
                            a.u2($, w);
                        }
                        i = a;
                    } else i = n;
                    return i;
                }
                function it(n, t, r, i) {
                    (this.v56_1 = n), (this.w56_1 = t), (this.x56_1 = r), (this.y56_1 = i);
                }
                function et(n) {
                    this.z56_1 = n;
                    this.a57_1 = T();
                }
                function ut(n, t, r, i, e) {
                    for (var u, _, l = t.p(); l.q(); ) {
                        var s = l.r();
                        s instanceof wn ? e.a57_1.k(s) : s instanceof pn ? (!vn(s.n13_1, i) && s.m13_1 !== r) || ((u = s), (_ = e.z56_1.m12_1), jt(u.o13_1, _)) || ut(n, s.p13_1, r, i, e) : $n();
                    }
                }
                function _t(n, t, r, i, e) {
                    var u = new et(i);
                    ut(n, t, r, e, u);
                    for (var _ = u.a57_1, l = c(), s = _.p(); s.q(); ) {
                        var o,
                            f = s.r(),
                            a = fn(f.i12(), f.r11_1),
                            h = l.r2(a);
                        if (null == h) {
                            var $ = T();
                            l.u2(a, $), (o = $);
                        } else o = h;
                        o.k(f);
                    }
                    for (var v = l.t2(), p = x(C(v, 10)), w = v.p(); w.q(); ) {
                        for (var b = w.r(), y = bn(b).wz(), d = T(), q = b.p(); q.q(); ) {
                            var g = q.r().t11_1;
                            G(d, g);
                        }
                        var k = y.c12(d).jz();
                        p.k(k);
                    }
                    return p;
                }
                function lt(n, t, r, i, e) {
                    if (n instanceof Dn) {
                        var u = n.w53_1;
                        t.f56_1.k(new it(u, r, i, e));
                    } else if (null != n && rn(n, cn))
                        for (var _ = 0, l = n.p(); l.q(); ) {
                            var s = l.r(),
                                o = _;
                            _ = (o + 1) | 0;
                            var f = hn(o);
                            lt(s, t, an(r, f), i, e);
                        }
                    else if (null != n && rn(n, tn)) {
                        rn(n, tn) || nn();
                        for (var a = n.r2("__typename"), h = _t(t, i, e, t.z55_1, null != a && "string" == typeof a ? a : null), c = T(), $ = h.p(); $.q(); ) {
                            var v,
                                p = $.r();
                            if (xt(p, t.z55_1.m12_1)) v = null;
                            else {
                                var w = t.a56_1.c54(p, t.z55_1, n, "");
                                lt(w, t, an(r, p.i12()), p.t11_1, p.p11_1.l11().k11_1), (v = fn(p.i12(), w));
                            }
                            var b = v;
                            null == b || c.k(b);
                        }
                        yn(c);
                    }
                }
                function st(n) {
                    this.u56_1 = n;
                }
                function ot(n, t, r, i, e, u, _) {
                    (this.x55_1 = n), (this.y55_1 = t), (this.z55_1 = r), (this.a56_1 = i), (this.b56_1 = e), (this.c56_1 = u), (this.d56_1 = _);
                    this.e56_1 = c();
                    this.f56_1 = T();
                }
                function ft(n, t) {
                    if (null == t.e57_1) return $;
                    var r = t.e57_1;
                    if ((null == r || (r.d57_1 = t.d57_1), null == t.d57_1)) n.s54_1 = t.e57_1;
                    else {
                        var i = t.d57_1;
                        null == i || (i.e57_1 = t.e57_1);
                    }
                    (t.d57_1 = n.r54_1), (t.e57_1 = null);
                    var e = n.r54_1;
                    null == e || (e.e57_1 = t), (n.r54_1 = t);
                }
                function at(n, t) {
                    if (null == t.e57_1) n.r54_1 = t.d57_1;
                    else {
                        var r = t.e57_1;
                        null == r || (r.d57_1 = t.d57_1);
                    }
                    if (null == t.d57_1) n.s54_1 = t.e57_1;
                    else {
                        var i = t.d57_1;
                        null == i || (i.e57_1 = t.e57_1);
                    }
                    (n.t54_1 = (n.t54_1 - n.p54_1(Q(t.b57_1), t.c57_1)) | 0), (t.b57_1 = null), (t.c57_1 = null), (t.d57_1 = null), (t.e57_1 = null);
                }
                function ht(n, t, r, i) {
                    (this.b57_1 = n), (this.c57_1 = t), (this.d57_1 = r), (this.e57_1 = i);
                }
                function ct(n, t) {
                    return 1;
                }
                function $t(n, t) {
                    (t = t === B ? ct : t), (this.o54_1 = n), (this.p54_1 = t), (this.q54_1 = mn(0, 0.75)), (this.r54_1 = null), (this.s54_1 = null), (this.t54_1 = 0);
                }
                function vt(n, t, r, i, e) {
                    for (
                        var u = t.r2("__typename"),
                            _ = (function (n, t, r, i) {
                                var e = new wt();
                                return bt(n, t, r, i, e), e.f57_1;
                            })(n, i, e, null != u && "string" == typeof u ? u : null),
                            l = t.z(),
                            s = T(),
                            o = l.p();
                        o.q();

                    ) {
                        for (var f, a = o.r(), h = T(), c = _.p(); c.q(); ) {
                            var $ = c.r();
                            $.i12() === a.n2() && h.k($);
                        }
                        var v = h;
                        if (v.h()) f = null;
                        else {
                            for (var p = T(), w = v.p(); w.q(); ) {
                                var b = w.r();
                                xt(b, n.s55_1.m12_1) || p.k(b);
                            }
                            var y = p;
                            if (y.h()) f = null;
                            else {
                                for (var d = bn(y).wz(), q = T(), g = y.p(); g.q(); ) {
                                    var k = g.r().t11_1;
                                    G(q, k);
                                }
                                var m = d.c12(q).a12(A()).jz(),
                                    z = m.p12(n.s55_1),
                                    C = r === Mn().v53().w53_1 ? null : r;
                                f = fn(z, pt(n, a.o2(), m, m.p11_1, yt(C, n, z)));
                            }
                        }
                        var x = f;
                        null == x || s.k(x);
                    }
                    var j = new tt(r, yn(s)),
                        R = n.v55_1.r2(r),
                        P = null != R ? R.g55(j).ah_1 : j;
                    return n.v55_1.u2(r, P), new Dn(r);
                }
                function pt(n, t, r, i, e) {
                    var u;
                    if (i instanceof R) {
                        if (null == t) {
                            throw un(en("Check failed."));
                        }
                        u = i.h13_1;
                    } else {
                        if (null == t) return null;
                        u = i;
                    }
                    var _,
                        l = u;
                    if (l instanceof S) {
                        if (null == t || !rn(t, cn)) {
                            throw un(en("Check failed."));
                        }
                        for (var s = x(C(t, 10)), o = 0, f = t.p(); f.q(); ) {
                            var a = f.r(),
                                h = o;
                            o = (h + 1) | 0;
                            var c = hn(h),
                                $ = pt(n, a, r, l.u13_1, yt(e, n, c.toString()));
                            s.k($);
                        }
                        _ = s;
                    } else {
                        if (l instanceof U && P(l)) {
                            if (null == t || !rn(t, tn)) {
                                throw un(en("Check failed."));
                            }
                            var v = n.u55_1.z53(rn(t, tn) ? t : nn(), new Kn(r, n.s55_1)),
                                p = null == v ? null : v.w53_1;
                            _ = vt(n, t, null == p ? e : p, r.t11_1, r.p11_1.l11().k11_1);
                        } else _ = t;
                    }
                    return _;
                }
                function wt() {
                    this.f57_1 = T();
                }
                function bt(n, t, r, i, e) {
                    for (var u = t.p(); u.q(); ) {
                        var _ = u.r();
                        _ instanceof wn ? e.f57_1.k(_) : _ instanceof pn ? (vn(_.n13_1, i) || _.m13_1 === r) && bt(n, _.p13_1, r, i, e) : $n();
                    }
                }
                function yt(n, t, r) {
                    return null == n ? r : n + "." + r;
                }
                function dt(n, t, r) {
                    (this.s55_1 = n), (this.t55_1 = t), (this.u55_1 = r);
                    this.v55_1 = c();
                }
                function qt(n, t, r) {
                    var i,
                        e = t.h57_1.r2(r);
                    if (null != e) {
                        var u = null == n ? null : n.g55(e.i57_1),
                            _ = null == u ? null : u.ah_1;
                        i = null == _ ? e.i57_1 : _;
                    } else i = n;
                    return i;
                }
                function gt(n, t) {
                    (this.k57_1 = n), (this.l57_1 = t);
                }
                function kt(n) {
                    (this.i57_1 = n), (this.j57_1 = zn([n]));
                }
                function mt() {
                    Wn.call(this);
                    this.h57_1 = c();
                }
                function zt(n, t) {
                    var r;
                    if (null == t) r = 4;
                    else if (null != t && "string" == typeof t) r = K(t).length;
                    else if (null != t && "boolean" == typeof t) r = 16;
                    else if (null != t && "number" == typeof t) r = 4;
                    else if (t instanceof M) r = 8;
                    else if (null != t && "number" == typeof t) r = 8;
                    else if (t instanceof xn) r = (K(t.c18_1).length + 8) | 0;
                    else if (null != t && rn(t, tn)) {
                        for (var i = 0, e = t.s2().p(); e.q(); ) {
                            var u = e.r();
                            i = (i + zt(a, u)) | 0;
                        }
                        for (var _ = (16 + i) | 0, l = 0, s = t.t2().p(); s.q(); ) {
                            var o = s.r();
                            l = (l + zt(a, o)) | 0;
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
                            throw un(en($));
                        }
                        r = (16 + K(t.w53_1).length) | 0;
                    }
                    return r;
                }
                function Ct() {
                    (this.i56_1 = 16), (this.j56_1 = 4), (this.k56_1 = 8), (this.l56_1 = 8), (this.m56_1 = 16), (this.n56_1 = 16), (this.o56_1 = 16), (this.p56_1 = 16), (this.q56_1 = 4);
                }
                function xt(n, t) {
                    return jt(n.r11_1, t);
                }
                function jt(n, t) {
                    for (var r = n.p(); r.q(); ) {
                        var i = r.r(),
                            e = t.r2(i.x12_1),
                            u = null != e && "boolean" == typeof e ? e : null,
                            _ = null != u && u;
                        if ((i.y12_1 && (_ = !_), !_)) return !0;
                    }
                    return !1;
                }
                function Rt() {}
                p(jn, "Builder", jn),
                    b(Rn),
                    p(Un, "CacheHeaders"),
                    b(Bn),
                    p(Dn, "CacheKey"),
                    p(Kn, "CacheKeyGeneratorContext"),
                    j(Ln, "TypePolicyCacheKeyGenerator"),
                    p(Fn, "CacheKeyResolver"),
                    j(Nn, "DefaultCacheResolver"),
                    j(En, "FieldPolicyCacheResolver"),
                    p(Xn, "NormalizedCacheFactory"),
                    p(Jn, "MemoryCacheFactory", Jn, Xn),
                    p(Gn, "CacheEntry"),
                    p(Wn, "NormalizedCache"),
                    p(Hn, "MemoryCache", Hn, Wn),
                    b(Qn),
                    b(nt),
                    p(tt, "Record", B, B, [tn]),
                    p(it, "PendingReference"),
                    p(et, "CollectState"),
                    p(st, "CacheBatchReaderData"),
                    p(ot, "CacheBatchReader"),
                    p(ht, "Node"),
                    p($t, "LruCache"),
                    p(wt, "CollectState", wt),
                    p(dt, "Normalizer"),
                    p(gt, "RemovalResult"),
                    p(kt, "RecordJournal"),
                    p(mt, "OptimisticCache", mt, Wn),
                    j(Ct, "RecordWeigher"),
                    p(Rt, "CacheLock", Rt),
                    (v(jn).i16 = function (n, t) {
                        return this.m53_1.u2(n, t), this;
                    }),
                    (v(jn).n53 = function (n) {
                        return this.m53_1.w2(n), this;
                    }),
                    (v(jn).jz = function () {
                        return new Un(this.m53_1);
                    }),
                    (v(Rn).p3g = function () {
                        return new jn();
                    }),
                    (v(Un).wz = function () {
                        return Pn().p3g().n53(this.p53_1);
                    }),
                    (v(Un).q53 = function (n) {
                        return this.p53_1.p2(n);
                    }),
                    (v(Un).r53 = function (n) {
                        return this.wz().n53(n.p53_1).jz();
                    }),
                    (v(Bn).v53 = function () {
                        return this.u53_1;
                    }),
                    (v(Dn).hashCode = function () {
                        return k(this.w53_1);
                    }),
                    (v(Dn).equals = function (n) {
                        var t = n instanceof Dn ? n : null;
                        return this.w53_1 === (null == t ? null : t.w53_1);
                    }),
                    (v(Dn).toString = function () {
                        return "CacheKey(" + this.w53_1 + ")";
                    }),
                    (v(Ln).z53 = function (n, t) {
                        var r,
                            i = m(t.x53_1.p11_1.l11());
                        if (i.h()) r = null;
                        else {
                            for (var e = z(n.r2("__typename")), u = x(C(i, 10)), _ = i.p(); _.q(); ) {
                                var l = _.r(),
                                    s = z(n.r2(l));
                                u.k(s);
                            }
                            r = In(e, u);
                        }
                        return r;
                    }),
                    (v(Fn).b54 = function (n, t) {
                        return null;
                    }),
                    (v(Fn).c54 = function (n, t, r, i) {
                        var e = n.p11_1;
                        if ((e instanceof R && (e = e.h13_1), e instanceof U && P(e))) {
                            var u = this.a54(n, t);
                            if (null != u) return u;
                        }
                        if (e instanceof S && ((e = e.u13_1) instanceof R && (e = e.h13_1), e instanceof U && P(e))) {
                            var _ = this.b54(n, t);
                            if (null != _) return _;
                        }
                        return s.c54(n, t, r, i);
                    }),
                    (v(Nn).c54 = function (n, t, r, i) {
                        var e = n.p12(t);
                        if (!r.p2(e)) throw I(i, e);
                        return r.r2(e);
                    }),
                    (v(En).c54 = function (n, t, r, i) {
                        for (var e = n.o12(t, An).t2(), u = x(C(e, 10)), _ = e.p(); _.q(); ) {
                            var l = _.r(),
                                o = z(l);
                            u.k(o);
                        }
                        var f = u;
                        return f.h() ? s.c54(n, t, r, i) : In(n.p11_1.l11().k11_1, f);
                    }),
                    (v(Jn).g54 = function () {
                        return new Hn(this.e54_1, this.f54_1);
                    }),
                    (v(Gn).a55 = function () {
                        return !(this.x54_1.e1(new M(0, 0)) < 0) && D().h3(this.y54_1).e1(this.x54_1) >= 0;
                    }),
                    (v(Hn).f55 = function (n, t) {
                        return this.m54_1.m55(
                            ((r = this),
                            (i = n),
                            (e = t),
                            function () {
                                var n,
                                    t = On(r, i, e);
                                if (null == t) {
                                    var u,
                                        _ = r.k55_1,
                                        l = null == _ ? null : _.f55(i, e);
                                    null == l ? (u = null) : (r.n54_1.h55(i, new Gn(l, r.l54_1)), (u = l)), (n = u);
                                } else n = t;
                                return n;
                            }),
                        );
                        var r, i, e;
                    }),
                    (v(Hn).l55 = function (n, t) {
                        return this.m54_1.m55(
                            ((r = n),
                            (i = this),
                            (e = t),
                            function () {
                                for (var n = r, t = N(F(L(C(n, 10)), 16)), u = n.p(); u.q(); ) {
                                    var _ = u.r(),
                                        l = On(i, _, e);
                                    t.u2(_, l);
                                }
                                for (var s = t, o = c(), f = s.z().p(); f.q(); ) {
                                    var a = f.r();
                                    null == a.o2() && o.u2(a.n2(), a.o2());
                                }
                                for (var h = o.s2(), $ = i.k55_1, v = null == $ ? null : $.l55(h, e), p = null == v ? A() : v, w = p.p(); w.q(); ) {
                                    var b = w.r();
                                    i.n54_1.h55(b.b55_1, new Gn(b, i.l54_1));
                                }
                                return J(E(s.t2()), p);
                            }),
                        );
                        var r, i, e;
                    }),
                    (v(Hn).n55 = function (n, t) {
                        if (t.q53("do-not-store")) return O();
                        for (var r = T(), i = n.p(); i.q(); ) {
                            var e = Tn(this, i.r(), t);
                            G(r, e);
                        }
                        var u = V(r),
                            _ = this.k55_1,
                            l = null == _ ? null : _.n55(n, t),
                            s = null == l ? O() : l;
                        return H(u, s);
                    }),
                    (v(Wn).o55 = function (n) {
                        for (var t = this; null != t.k55_1; ) t = Q(t.k55_1);
                        return (t.k55_1 = n), this;
                    }),
                    (v(Xn).i54 = function () {
                        var n = this.h54_1;
                        return null != n ? this.g54().o55(n.i54()) : this.g54();
                    }),
                    (v(nt).h56 = function (n, t) {
                        if (n.b55_1 !== t.b55_1) {
                            var r = "Cannot compute changed keys on record with different keys: '" + n.b55_1 + "' - '" + t.b55_1 + "'";
                            throw un(en(r));
                        }
                        for (var i = n.c55_1.s2(), e = t.c55_1.s2(), u = _n(i, e), _ = H(ln(i, u), ln(e, u)), l = T(), s = u.p(); s.q(); ) {
                            var o = s.r();
                            X(n.c55_1.r2(o), t.c55_1.r2(o)) || l.k(o);
                        }
                        for (var f = H(_, l), a = x(C(f, 10)), h = f.p(); h.q(); ) {
                            var c = h.r(),
                                $ = n.b55_1 + "." + c;
                            a.k($);
                        }
                        return V(a);
                    }),
                    (v(tt).j55 = function () {
                        var n = this.e55_1,
                            t = null == n ? null : n.s(),
                            r = null == t ? null : h(t, 8),
                            i = null == r ? 0 : r;
                        return (a.r56(this) + i) | 0;
                    }),
                    (v(tt).s56 = function (n, t) {
                        for (var r = sn(), i = on(this.c55_1), e = this.e55_1, u = null == e ? null : on(e), _ = null == u ? c() : u, l = n.c55_1.z().p(); l.q(); ) {
                            var s = l.r(),
                                o = s.n2(),
                                f = s.o2(),
                                a = this.c55_1.p2(o),
                                h = this.c55_1.r2(o);
                            (a && X(h, f)) || (i.u2(o, f), r.k(this.b55_1 + "." + o)), null != t && _.u2(o, t);
                        }
                        return fn(Zn(this.b55_1, i, n.d55_1, _), r);
                    }),
                    (v(tt).g55 = function (n) {
                        return this.s56(n, null);
                    }),
                    (v(tt).i55 = function () {
                        for (var n = this.c55_1.s2(), t = x(C(n, 10)), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                e = this.b55_1 + "." + i;
                            t.k(e);
                        }
                        return V(t);
                    }),
                    (v(tt).asJsReadonlyMapView = function () {
                        return this.c55_1.asJsReadonlyMapView();
                    }),
                    (v(tt).m3v = function (n) {
                        return this.c55_1.p2(n);
                    }),
                    (v(tt).p2 = function (n) {
                        return null != n && "string" == typeof n && this.m3v(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).t56 = function (n) {
                        return this.c55_1.q2(n);
                    }),
                    (v(tt).q2 = function (n) {
                        return (null == n || null != n) && this.t56(null == n || null != n ? n : nn());
                    }),
                    (v(tt).ee = function (n) {
                        return this.c55_1.r2(n);
                    }),
                    (v(tt).r2 = function (n) {
                        return null == n || "string" != typeof n ? null : this.ee(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).h = function () {
                        return this.c55_1.h();
                    }),
                    (v(tt).z = function () {
                        return this.c55_1.z();
                    }),
                    (v(tt).s2 = function () {
                        return this.c55_1.s2();
                    }),
                    (v(tt).s = function () {
                        return this.c55_1.s();
                    }),
                    (v(tt).t2 = function () {
                        return this.c55_1.t2();
                    }),
                    (v(st).q55 = function () {
                        var n = rt(this.u56_1.r2(A()), this, A());
                        return null != n && rn(n, tn) ? n : nn();
                    }),
                    (v(st).toString = function () {
                        return "CacheBatchReaderData(data=" + en(this.u56_1) + ")";
                    }),
                    (v(st).hashCode = function () {
                        return dn(this.u56_1);
                    }),
                    (v(st).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof st)) return !1;
                        var t = n instanceof st ? n : nn();
                        return !!X(this.u56_1, t.u56_1);
                    }),
                    (v(ot).g56 = function () {
                        var n = this.y55_1,
                            t = this.c56_1,
                            r = this.d56_1,
                            i = A();
                        this.f56_1.k(new it(n, i, t, r));
                        n: for (; !this.f56_1.h(); ) {
                            for (var e = this.f56_1, u = x(C(e, 10)), _ = e.p(); _.q(); ) {
                                var l = _.r().v56_1;
                                u.k(l);
                            }
                            for (var s = this.x55_1.l55(u, this.b56_1), o = F(L(C(s, 10)), 16), f = N(o), a = s.p(); a.q(); ) {
                                var h = a.r(),
                                    c = h.b55_1;
                                f.u2(c, h);
                            }
                            var $ = f,
                                v = qn(this.f56_1);
                            this.f56_1.j2();
                            for (var p = v.p(); p.q(); ) {
                                var b = p.r(),
                                    y = $.r2(b.v56_1);
                                if (null == y) {
                                    if (b.v56_1 !== Mn().v53().w53_1) throw new gn(b.v56_1);
                                    y = new tt(b.v56_1, w());
                                }
                                for (var d = y.ee("__typename"), q = _t(this, b.x56_1, b.y56_1, this.z55_1, null != d && "string" == typeof d ? d : null), g = T(), k = q.p(); k.q(); ) {
                                    var m,
                                        z = k.r();
                                    if (xt(z, this.z55_1.m12_1)) m = null;
                                    else {
                                        var j = this.a56_1.c54(z, this.z55_1, y, y.b55_1);
                                        lt(j, this, an(b.w56_1, z.i12()), z.t11_1, z.p11_1.l11().k11_1), (m = fn(z.i12(), j));
                                    }
                                    var R = m;
                                    null == R || g.k(R);
                                }
                                var P = yn(g),
                                    U = this.e56_1,
                                    S = b.w56_1;
                                U.u2(S, P);
                            }
                        }
                        return new st(this.e56_1);
                    }),
                    (v($t).u54 = function (n) {
                        var t = this.q54_1.r2(n);
                        return null != t && ft(this, t), null == t ? null : t.c57_1;
                    }),
                    (v($t).h55 = function (n, t) {
                        var r = this.q54_1.r2(n);
                        if (null == r) {
                            var i = this.q54_1,
                                e = (function (n, t, r) {
                                    var i = new ht(t, r, n.r54_1, null);
                                    if (((n.r54_1 = i), null == i.d57_1)) n.s54_1 = n.r54_1;
                                    else {
                                        var e = i.d57_1;
                                        null == e || (e.e57_1 = n.r54_1);
                                    }
                                    return (n.t54_1 = (n.t54_1 + n.p54_1(t, r)) | 0), i;
                                })(this, n, t);
                            i.u2(n, e);
                        } else (r.c57_1 = t), ft(this, r);
                        !(function (n) {
                            for (var t = n.s54_1; null != t && n.t54_1 > n.o54_1; ) {
                                var r = n.q54_1,
                                    i = t.b57_1;
                                (rn(r, kn) ? r : nn()).v2(i), at(n, t), (t = n.s54_1);
                            }
                        })(this);
                    }),
                    (v($t).v54 = function (n) {
                        return (function (n, t) {
                            var r = n.q54_1.v2(t),
                                i = null == r ? null : r.c57_1;
                            return null != r && at(n, r), i;
                        })(this, n);
                    }),
                    (v(dt).w55 = function (n, t, r) {
                        return vt(this, n, this.t55_1, t, r), this.v55_1;
                    }),
                    (v(kt).m57 = function (n) {
                        var t = this.i57_1.g55(n),
                            r = t.gh(),
                            i = t.hh();
                        return (this.i57_1 = r), this.j57_1.k(n), i;
                    }),
                    (v(kt).n57 = function (n) {
                        var t;
                        n: {
                            for (var r = 0, i = this.j57_1.p(); i.q(); ) {
                                var e = i.r();
                                if (n.equals(e.d55_1)) {
                                    t = r;
                                    break n;
                                }
                                r = (r + 1) | 0;
                            }
                            t = -1;
                        }
                        var u = t;
                        if (-1 === u) return new gt(O(), !1);
                        if (1 === this.j57_1.s()) return new gt(this.i57_1.i55(), !0);
                        var _ = this.i57_1;
                        this.j57_1.m2(u).b55_1;
                        var l = null,
                            s = (u - 1) | 0,
                            o = Math.max(0, s),
                            a = this.j57_1.s();
                        if (o < a)
                            do {
                                var h = o;
                                o = (o + 1) | 0;
                                var c = this.j57_1.t(h);
                                if (null == l) l = c;
                                else {
                                    var $ = l.g55(c).gh();
                                    l = $;
                                }
                            } while (o < a);
                        return (this.i57_1 = Q(l)), new gt(f.h56(_, this.i57_1), !1);
                    }),
                    (v(mt).f55 = function (n, t) {
                        var r;
                        try {
                            var i = this.k55_1;
                            r = qt(null == i ? null : i.f55(n, t), this, n);
                        } catch (n) {
                            if (!(n instanceof Cn)) throw n;
                            r = null;
                        }
                        return r;
                    }),
                    (v(mt).l55 = function (n, t) {
                        var r,
                            i = this.k55_1,
                            e = null == i ? null : i.l55(n, t);
                        if (null == e) r = null;
                        else {
                            for (var u = F(L(C(e, 10)), 16), _ = N(u), l = e.p(); l.q(); ) {
                                var s = l.r(),
                                    o = s.b55_1;
                                _.u2(o, s);
                            }
                            r = _;
                        }
                        for (var f = r, a = null == f ? w() : f, h = T(), c = n.p(); c.q(); ) {
                            var $ = c.r(),
                                v = qt(a.r2($), this, $);
                            null == v || h.k(v);
                        }
                        return h;
                    }),
                    (v(mt).n55 = function (n, t) {
                        var r = this.k55_1,
                            i = null == r ? null : r.n55(n, t);
                        return null == i ? O() : i;
                    }),
                    (v(mt).o57 = function (n) {
                        for (var t = T(), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                e = this.p57(i);
                            G(t, e);
                        }
                        return V(t);
                    }),
                    (v(mt).p57 = function (n) {
                        var t,
                            r = this.h57_1.r2(n.b55_1);
                        if (null == r) {
                            var i = this.h57_1,
                                e = n.b55_1,
                                u = new kt(n);
                            i.u2(e, u), (t = n.i55());
                        } else t = r.m57(n);
                        return t;
                    }),
                    (v(mt).q57 = function (n) {
                        for (var t = sn(), r = this.h57_1.z().p(); r.q(); ) {
                            var i = r.r().o2().n57(n);
                            t.u(i.k57_1), i.l57_1 && r.g5();
                        }
                        return t;
                    }),
                    (v(Ct).r56 = function (n) {
                        for (var t = (16 + K(n.b55_1).length) | 0, r = n.c55_1.z().p(); r.q(); ) {
                            var i = r.r(),
                                e = i.n2(),
                                u = i.o2();
                            t = (t + ((K(e).length + zt(0, u)) | 0)) | 0;
                        }
                        return t;
                    }),
                    (v(Rt).m55 = function (n) {
                        return n();
                    }),
                    (l = new Ln()),
                    (s = new Nn()),
                    (o = new En()),
                    new Qn(),
                    (f = new nt()),
                    (a = new Ct()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = mt),
                    (n.$_$.b = jn),
                    (n.$_$.c = Fn),
                    (n.$_$.d = Jn),
                    (n.$_$.e = tt),
                    (n.$_$.f = function (n) {
                        var t;
                        if (null == n) t = null;
                        else {
                            for (var r = T(), i = n.p(); i.q(); ) {
                                var e = i.r().i55();
                                G(r, e);
                            }
                            t = r;
                        }
                        var u = null == t ? null : V(t);
                        return null == u ? O() : u;
                    }),
                    (n.$_$.g = function (n, t, r, i) {
                        return (function (n, t, r, i, e) {
                            var u = new Y();
                            n.a15().fw(u, r, t);
                            var _ = Z(n, r, !0),
                                l = new dt(_, e, i),
                                s = u.hx();
                            return l.w55(null != s && rn(s, tn) ? s : nn(), n.r55().t11_1, n.r55().p11_1.l11().k11_1);
                        })(n, t, r, i, Mn().v53().w53_1);
                    }),
                    (n.$_$.h = function (n, t, r, i, e) {
                        return Yn(n, Mn().v53(), t, r, i, e);
                    }),
                    (n.$_$.i = function (n, t, r, i, e, u) {
                        return Yn(n, t, r, i, e, u);
                    }),
                    (n.$_$.j = function (n, t, r, i) {
                        for (var e = new W(n.q55()), u = r.wz(), _ = i.m12_1, l = c(), s = _.z().p(); s.q(); ) {
                            var o = s.r();
                            X(o.o2(), !1) && l.u2(o.n2(), o.o2());
                        }
                        return t.ew(e, u.e14(l.s2()).jz());
                    }),
                    (n.$_$.k = function (n, t) {
                        return (function (n, t, r) {
                            return Sn(n, q(t), r), r;
                        })(n, t, d(v(Dn)));
                    }),
                    (n.$_$.l = In),
                    (n.$_$.m = Pn),
                    (n.$_$.n = o),
                    (n.$_$.o = l);
            })(n.exports, r(519039), r(170047), r(982563), r(222818));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-1c7ce4c0.b24957fa.js.map
