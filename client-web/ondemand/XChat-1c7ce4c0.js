(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-1c7ce4c0"],
    {
        837398: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r,
                    i = t.$_$.xe,
                    e = t.$_$.yd,
                    u = t.$_$.rj,
                    _ = t.$_$.ae,
                    l = t.$_$.g,
                    o = t.$_$.sd,
                    s = t.$_$.ud,
                    f = t.$_$.id;
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
                        return this === n || (n instanceof h && (n instanceof h || u(), !0));
                    }),
                    (i($).q9h = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).gh = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).w9i = function (n) {
                        return new $(n);
                    }),
                    (i($).copy = function (n, t) {
                        return (n = n === l ? this.profileImageUrl : n), this.w9i(n);
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
                var _ = t.$_$.tc,
                    l = t.$_$.p6,
                    o = t.$_$.xe,
                    s = t.$_$.rj,
                    f = t.$_$.g7,
                    a = t.$_$.je,
                    h = t.$_$.f9,
                    c = r.$_$.b,
                    $ = t.$_$.zd,
                    v = t.$_$.g,
                    p = t.$_$.kd,
                    w = t.$_$.xc,
                    b = i.$_$.f1,
                    k = t.$_$.td,
                    y = t.$_$.ud,
                    q = i.$_$.q2,
                    z = t.$_$.ca,
                    d = t.$_$.ec,
                    g = e.$_$.a,
                    m = r.$_$.c,
                    C = i.$_$.i1,
                    x = u.$_$.e,
                    j = i.$_$.w2,
                    R = t.$_$.id,
                    P = r.$_$.a;
                function U(n, t) {
                    (this.obz_1 = n), _.call(this, t);
                }
                function S(n, t) {
                    var r = new U(n, t),
                        i = function (n, t) {
                            return r.qbz(n, t);
                        };
                    return (i.$arity = 1), i;
                }
                function I(n) {
                    this.ybz_1 = n;
                }
                function B(n, t) {
                    (this.hc0_1 = n), _.call(this, t);
                }
                function M(n, t, r, i) {
                    var e, u;
                    (this.sbz_1 = n),
                        (this.tbz_1 = t),
                        (this.ubz_1 = r),
                        (this.vbz_1 = g(this, i)),
                        (this.wbz_1 = C(m())),
                        (this.xbz_1 = x(this.wbz_1)),
                        j(
                            this.vbz_1,
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
                    y(I, "sam$kotlinx_coroutines_flow_FlowCollector$0", v, v, [b, w], [1]),
                    $(B, _, v, [1]),
                    y(M, "DefaultProfilePictureButtonComponent", v, v, [P]),
                    (o(U).qbz = function (n, t) {
                        var r = this.rbz(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (o(U).cb = function (n, t) {
                        return this.qbz(null == n || a(n, f) ? n : s(), t);
                    }),
                    (o(U).oa = function () {
                        for (this.y9_1; ; )
                            try {
                                var n = this.w9_1;
                                if (0 === n) {
                                    this.x9_1 = 1;
                                    var t = this.pbz_1,
                                        r = null == t ? null : h(t);
                                    if (null == r);
                                    else
                                        n: do {
                                            for (var i = this.obz_1.wbz_1; ; ) {
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
                    (o(U).rbz = function (n, t) {
                        var r = new U(this.obz_1, t);
                        return (r.pbz_1 = n), r;
                    }),
                    (o(I).w1x = function (n, t) {
                        return this.ybz_1(n, t);
                    }),
                    (o(I).a4 = function () {
                        return this.ybz_1;
                    }),
                    (o(I).equals = function (n) {
                        var t;
                        null != n && a(n, b) ? (t = !(null == n || !a(n, w)) && p(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (o(I).hashCode = function () {
                        return k(this.a4());
                    }),
                    (o(B).q25 = function (n, t) {
                        var r = this.r25(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (o(B).cb = function (n, t) {
                        return this.q25(null != n && a(n, q) ? n : s(), t);
                    }),
                    (o(B).oa = function () {
                        var n = this.y9_1;
                        n: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 2), (this.w9_1 = 1);
                                        var t = this.hc0_1.tbz_1.eai(z(this.hc0_1.ubz_1), v, !0),
                                            r = S(this.hc0_1, null);
                                        if ((n = t.f1x(new I(r), this)) === d()) return n;
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
                    (o(B).r25 = function (n, t) {
                        var r = new B(this.hc0_1, t);
                        return (r.ic0_1 = n), r;
                    }),
                    (o(M).ea = function () {
                        return this.xbz_1;
                    }),
                    (o(M).aby = function () {
                        return this.sbz_1.aby();
                    }),
                    (o(M).bby = function () {
                        return this.sbz_1.bby();
                    }),
                    (o(M).cby = function () {
                        return this.sbz_1.cby();
                    }),
                    (o(M).dby = function () {
                        return this.sbz_1.dby();
                    }),
                    (o(M).zbx = function () {
                        return this.sbz_1.zbx();
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
                var r = t.$_$.ve;
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
                    o,
                    s,
                    f,
                    a,
                    h = Math.imul,
                    c = t.$_$.d1,
                    $ = t.$_$.p6,
                    v = t.$_$.xe,
                    p = t.$_$.ud,
                    w = t.$_$.b9,
                    b = t.$_$.vd,
                    k = t.$_$.q1,
                    y = t.$_$.we,
                    q = t.$_$.pb,
                    z = t.$_$.o1,
                    d = t.$_$.sd,
                    g = r.$_$.g2,
                    m = t.$_$.el,
                    C = t.$_$.d8,
                    x = t.$_$.t,
                    j = t.$_$.ae,
                    R = r.$_$.d1,
                    P = r.$_$.f2,
                    U = r.$_$.c1,
                    S = r.$_$.b1,
                    I = r.$_$.i3,
                    B = t.$_$.g,
                    M = t.$_$.kj,
                    D = i.$_$.a,
                    K = e.$_$.e,
                    L = t.$_$.ea,
                    F = t.$_$.kf,
                    N = t.$_$.c1,
                    A = t.$_$.a9,
                    E = t.$_$.e9,
                    J = t.$_$.ta,
                    O = t.$_$.c9,
                    T = t.$_$.u,
                    G = t.$_$.t7,
                    V = t.$_$.vb,
                    H = t.$_$.pa,
                    Q = t.$_$.lk,
                    W = r.$_$.i,
                    X = t.$_$.kd,
                    Y = r.$_$.j,
                    Z = r.$_$.s2,
                    nn = t.$_$.rj,
                    tn = t.$_$.j7,
                    rn = t.$_$.je,
                    en = t.$_$.bf,
                    un = t.$_$.m2,
                    _n = t.$_$.q9,
                    ln = t.$_$.ja,
                    on = t.$_$.h1,
                    sn = t.$_$.ub,
                    fn = t.$_$.fl,
                    an = t.$_$.ua,
                    hn = t.$_$.b8,
                    cn = t.$_$.g7,
                    $n = t.$_$.tk,
                    vn = t.$_$.e8,
                    pn = r.$_$.a1,
                    wn = r.$_$.y,
                    bn = t.$_$.g9,
                    kn = t.$_$.rb,
                    yn = t.$_$.td,
                    qn = t.$_$.ob,
                    zn = r.$_$.y2,
                    dn = t.$_$.n7,
                    gn = t.$_$.f1,
                    mn = t.$_$.ma,
                    Cn = t.$_$.gj,
                    xn = r.$_$.h;
                function jn() {
                    this.v51_1 = c();
                }
                function Rn() {
                    (u = this), (this.x51_1 = new Un(w()));
                }
                function Pn() {
                    return null == u && new Rn(), u;
                }
                function Un(n) {
                    Pn(), (this.y51_1 = n);
                }
                function Sn(n, t, r) {
                    var i = k();
                    i.f9(n), i.f9(":");
                    for (var e = t.p(); e.q(); ) {
                        var u = e.r();
                        i.f9(u);
                    }
                    var _ = i.toString();
                    return Dn.call(r, _), r;
                }
                function In(n, t) {
                    return Sn(n, t, y(v(Dn)));
                }
                function Bn() {
                    (_ = this), (this.b52_1 = z("ApolloCacheReference\\{(.*)\\}")), (this.c52_1 = "ApolloCacheReference"), (this.d52_1 = new Dn("QUERY_ROOT"));
                }
                function Mn() {
                    return null == _ && new Bn(), _;
                }
                function Dn(n) {
                    Mn(), (this.f52_1 = n);
                }
                function Kn(n, t) {
                    (this.g52_1 = n), (this.h52_1 = t);
                }
                function Ln() {}
                function Fn() {}
                function Nn() {}
                function An(n) {
                    return n.i12_1.g12_1;
                }
                function En() {}
                function Jn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Xn.call(this), (this.n52_1 = n), (this.o52_1 = t);
                }
                function On(n, t, r) {
                    var i,
                        e = n.w52_1.d53(t);
                    null == e ? (i = null) : ((e.j53() || r.z51("evict-after-read")) && n.w52_1.e53(t), (i = e));
                    var u,
                        _ = i;
                    null == _ ? (u = null) : (u = _.j53() ? null : _);
                    return null == u ? null : u.f53_1;
                }
                function Tn(n, t, r) {
                    var i,
                        e = n.o53(t.k53_1, r);
                    if (null == e) n.w52_1.q53(t.k53_1, new Gn(t, n.u52_1)), (i = t.r53());
                    else {
                        var u = e.p53(t),
                            _ = u.gh(),
                            l = u.hh();
                        n.w52_1.q53(t.k53_1, new Gn(_, n.u52_1)), (i = l);
                    }
                    return i;
                }
                function Gn(n, t) {
                    (this.f53_1 = n), (this.g53_1 = t), (this.h53_1 = D()), (this.i53_1 = (this.f53_1.s53() + 8) | 0);
                }
                function Vn(n, t) {
                    var r = K(n).length,
                        i = null == t ? null : t.i53_1;
                    return (r + (null == i ? 0 : i)) | 0;
                }
                function Hn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Wn.call(this), (this.t52_1 = n), (this.u52_1 = t), (this.v52_1 = new Rt());
                    this.w52_1 = new $t(this.t52_1, Vn);
                }
                function Qn() {
                    this.y53_1 = "()^$.*?+{}";
                }
                function Wn() {
                    this.t53_1 = null;
                }
                function Xn() {
                    this.q52_1 = null;
                }
                function Yn(n, t, r, i, e, u) {
                    return new st(r, t.f52_1, u, i, e, n.a54().v11_1, n.a54().r11_1.n11().m11_1).p54();
                }
                function Zn(n, t, r, i) {
                    return (function (n, t, r, i, e) {
                        return tt.call(e, n, t, r), (e.n53_1 = i), e;
                    })(n, t, r, i, y(v(tt)));
                }
                function nt() {}
                function tt(n, t, r) {
                    (r = r === B ? null : r), (this.k53_1 = n), (this.l53_1 = t), (this.m53_1 = r), (this.n53_1 = null);
                }
                function rt(n, t, r) {
                    var i;
                    if (n instanceof Dn) i = rt(t.d55_1.r2(r), t, r);
                    else if (null != n && rn(n, cn)) {
                        for (var e = x(C(n, 10)), u = 0, _ = n.p(); _.q(); ) {
                            var l = _.r(),
                                o = u;
                            u = (o + 1) | 0;
                            var s = hn(o),
                                f = rt(l, t, an(r, s));
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
                    (this.e55_1 = n), (this.f55_1 = t), (this.g55_1 = r), (this.h55_1 = i);
                }
                function et(n) {
                    this.i55_1 = n;
                    this.j55_1 = T();
                }
                function ut(n, t, r, i, e) {
                    for (var u, _, l = t.p(); l.q(); ) {
                        var o = l.r();
                        o instanceof wn ? e.j55_1.k(o) : o instanceof pn ? (!vn(o.p13_1, i) && o.o13_1 !== r) || ((u = o), (_ = e.i55_1.o12_1), jt(u.q13_1, _)) || ut(n, o.r13_1, r, i, e) : $n();
                    }
                }
                function _t(n, t, r, i, e) {
                    var u = new et(i);
                    ut(n, t, r, e, u);
                    for (var _ = u.j55_1, l = c(), o = _.p(); o.q(); ) {
                        var s,
                            f = o.r(),
                            a = fn(f.k12(), f.t11_1),
                            h = l.r2(a);
                        if (null == h) {
                            var $ = T();
                            l.u2(a, $), (s = $);
                        } else s = h;
                        s.k(f);
                    }
                    for (var v = l.t2(), p = x(C(v, 10)), w = v.p(); w.q(); ) {
                        for (var b = w.r(), k = bn(b).yz(), y = T(), q = b.p(); q.q(); ) {
                            var z = q.r().v11_1;
                            G(y, z);
                        }
                        var d = k.e12(y).lz();
                        p.k(d);
                    }
                    return p;
                }
                function lt(n, t, r, i, e) {
                    if (n instanceof Dn) {
                        var u = n.f52_1;
                        t.o54_1.k(new it(u, r, i, e));
                    } else if (null != n && rn(n, cn))
                        for (var _ = 0, l = n.p(); l.q(); ) {
                            var o = l.r(),
                                s = _;
                            _ = (s + 1) | 0;
                            var f = hn(s);
                            lt(o, t, an(r, f), i, e);
                        }
                    else if (null != n && rn(n, tn)) {
                        rn(n, tn) || nn();
                        for (var a = n.r2("__typename"), h = _t(t, i, e, t.i54_1, null != a && "string" == typeof a ? a : null), c = T(), $ = h.p(); $.q(); ) {
                            var v,
                                p = $.r();
                            if (xt(p, t.i54_1.o12_1)) v = null;
                            else {
                                var w = t.j54_1.l52(p, t.i54_1, n, "");
                                lt(w, t, an(r, p.k12()), p.v11_1, p.r11_1.n11().m11_1), (v = fn(p.k12(), w));
                            }
                            var b = v;
                            null == b || c.k(b);
                        }
                        kn(c);
                    }
                }
                function ot(n) {
                    this.d55_1 = n;
                }
                function st(n, t, r, i, e, u, _) {
                    (this.g54_1 = n), (this.h54_1 = t), (this.i54_1 = r), (this.j54_1 = i), (this.k54_1 = e), (this.l54_1 = u), (this.m54_1 = _);
                    this.n54_1 = c();
                    this.o54_1 = T();
                }
                function ft(n, t) {
                    if (null == t.n55_1) return $;
                    var r = t.n55_1;
                    if ((null == r || (r.m55_1 = t.m55_1), null == t.m55_1)) n.b53_1 = t.n55_1;
                    else {
                        var i = t.m55_1;
                        null == i || (i.n55_1 = t.n55_1);
                    }
                    (t.m55_1 = n.a53_1), (t.n55_1 = null);
                    var e = n.a53_1;
                    null == e || (e.n55_1 = t), (n.a53_1 = t);
                }
                function at(n, t) {
                    if (null == t.n55_1) n.a53_1 = t.m55_1;
                    else {
                        var r = t.n55_1;
                        null == r || (r.m55_1 = t.m55_1);
                    }
                    if (null == t.m55_1) n.b53_1 = t.n55_1;
                    else {
                        var i = t.m55_1;
                        null == i || (i.n55_1 = t.n55_1);
                    }
                    (n.c53_1 = (n.c53_1 - n.y52_1(Q(t.k55_1), t.l55_1)) | 0), (t.k55_1 = null), (t.l55_1 = null), (t.m55_1 = null), (t.n55_1 = null);
                }
                function ht(n, t, r, i) {
                    (this.k55_1 = n), (this.l55_1 = t), (this.m55_1 = r), (this.n55_1 = i);
                }
                function ct(n, t) {
                    return 1;
                }
                function $t(n, t) {
                    (t = t === B ? ct : t), (this.x52_1 = n), (this.y52_1 = t), (this.z52_1 = gn(0, 0.75)), (this.a53_1 = null), (this.b53_1 = null), (this.c53_1 = 0);
                }
                function vt(n, t, r, i, e) {
                    for (
                        var u = t.r2("__typename"),
                            _ = (function (n, t, r, i) {
                                var e = new wt();
                                return bt(n, t, r, i, e), e.o55_1;
                            })(n, i, e, null != u && "string" == typeof u ? u : null),
                            l = t.z(),
                            o = T(),
                            s = l.p();
                        s.q();

                    ) {
                        for (var f, a = s.r(), h = T(), c = _.p(); c.q(); ) {
                            var $ = c.r();
                            $.k12() === a.n2() && h.k($);
                        }
                        var v = h;
                        if (v.h()) f = null;
                        else {
                            for (var p = T(), w = v.p(); w.q(); ) {
                                var b = w.r();
                                xt(b, n.b54_1.o12_1) || p.k(b);
                            }
                            var k = p;
                            if (k.h()) f = null;
                            else {
                                for (var y = bn(k).yz(), q = T(), z = k.p(); z.q(); ) {
                                    var d = z.r().v11_1;
                                    G(q, d);
                                }
                                var g = y.e12(q).c12(A()).lz(),
                                    m = g.r12(n.b54_1),
                                    C = r === Mn().e52().f52_1 ? null : r;
                                f = fn(m, pt(n, a.o2(), g, g.r11_1, kt(C, n, m)));
                            }
                        }
                        var x = f;
                        null == x || o.k(x);
                    }
                    var j = new tt(r, kn(o)),
                        R = n.e54_1.r2(r),
                        P = null != R ? R.p53(j).ah_1 : j;
                    return n.e54_1.u2(r, P), new Dn(r);
                }
                function pt(n, t, r, i, e) {
                    var u;
                    if (i instanceof R) {
                        if (null == t) {
                            throw un(en("Check failed."));
                        }
                        u = i.j13_1;
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
                        for (var o = x(C(t, 10)), s = 0, f = t.p(); f.q(); ) {
                            var a = f.r(),
                                h = s;
                            s = (h + 1) | 0;
                            var c = hn(h),
                                $ = pt(n, a, r, l.w13_1, kt(e, n, c.toString()));
                            o.k($);
                        }
                        _ = o;
                    } else {
                        if (l instanceof U && P(l)) {
                            if (null == t || !rn(t, tn)) {
                                throw un(en("Check failed."));
                            }
                            var v = n.d54_1.i52(rn(t, tn) ? t : nn(), new Kn(r, n.b54_1)),
                                p = null == v ? null : v.f52_1;
                            _ = vt(n, t, null == p ? e : p, r.v11_1, r.r11_1.n11().m11_1);
                        } else _ = t;
                    }
                    return _;
                }
                function wt() {
                    this.o55_1 = T();
                }
                function bt(n, t, r, i, e) {
                    for (var u = t.p(); u.q(); ) {
                        var _ = u.r();
                        _ instanceof wn ? e.o55_1.k(_) : _ instanceof pn ? (vn(_.p13_1, i) || _.o13_1 === r) && bt(n, _.r13_1, r, i, e) : $n();
                    }
                }
                function kt(n, t, r) {
                    return null == n ? r : n + "." + r;
                }
                function yt(n, t, r) {
                    (this.b54_1 = n), (this.c54_1 = t), (this.d54_1 = r);
                    this.e54_1 = c();
                }
                function qt(n, t, r) {
                    var i,
                        e = t.q55_1.r2(r);
                    if (null != e) {
                        var u = null == n ? null : n.p53(e.r55_1),
                            _ = null == u ? null : u.ah_1;
                        i = null == _ ? e.r55_1 : _;
                    } else i = n;
                    return i;
                }
                function zt(n, t) {
                    (this.t55_1 = n), (this.u55_1 = t);
                }
                function dt(n) {
                    (this.r55_1 = n), (this.s55_1 = mn([n]));
                }
                function gt() {
                    Wn.call(this);
                    this.q55_1 = c();
                }
                function mt(n, t) {
                    var r;
                    if (null == t) r = 4;
                    else if (null != t && "string" == typeof t) r = K(t).length;
                    else if (null != t && "boolean" == typeof t) r = 16;
                    else if (null != t && "number" == typeof t) r = 4;
                    else if (t instanceof M) r = 8;
                    else if (null != t && "number" == typeof t) r = 8;
                    else if (t instanceof xn) r = (K(t.e18_1).length + 8) | 0;
                    else if (null != t && rn(t, tn)) {
                        for (var i = 0, e = t.s2().p(); e.q(); ) {
                            var u = e.r();
                            i = (i + mt(a, u)) | 0;
                        }
                        for (var _ = (16 + i) | 0, l = 0, o = t.t2().p(); o.q(); ) {
                            var s = o.r();
                            l = (l + mt(a, s)) | 0;
                        }
                        r = (_ + l) | 0;
                    } else if (null != t && rn(t, cn)) {
                        for (var f = 0, h = t.p(); h.q(); ) {
                            var c = h.r();
                            f = (f + mt(a, c)) | 0;
                        }
                        r = (16 + f) | 0;
                    } else {
                        if (!(t instanceof Dn)) {
                            var $ = "Unknown field type in Record: '" + m(t) + "'";
                            throw un(en($));
                        }
                        r = (16 + K(t.f52_1).length) | 0;
                    }
                    return r;
                }
                function Ct() {
                    (this.r54_1 = 16), (this.s54_1 = 4), (this.t54_1 = 8), (this.u54_1 = 8), (this.v54_1 = 16), (this.w54_1 = 16), (this.x54_1 = 16), (this.y54_1 = 16), (this.z54_1 = 4);
                }
                function xt(n, t) {
                    return jt(n.t11_1, t);
                }
                function jt(n, t) {
                    for (var r = n.p(); r.q(); ) {
                        var i = r.r(),
                            e = t.r2(i.z12_1),
                            u = null != e && "boolean" == typeof e ? e : null,
                            _ = null != u && u;
                        if ((i.a13_1 && (_ = !_), !_)) return !0;
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
                    p(ot, "CacheBatchReaderData"),
                    p(st, "CacheBatchReader"),
                    p(ht, "Node"),
                    p($t, "LruCache"),
                    p(wt, "CollectState", wt),
                    p(yt, "Normalizer"),
                    p(zt, "RemovalResult"),
                    p(dt, "RecordJournal"),
                    p(gt, "OptimisticCache", gt, Wn),
                    j(Ct, "RecordWeigher"),
                    p(Rt, "CacheLock", Rt),
                    (v(jn).k16 = function (n, t) {
                        return this.v51_1.u2(n, t), this;
                    }),
                    (v(jn).w51 = function (n) {
                        return this.v51_1.w2(n), this;
                    }),
                    (v(jn).lz = function () {
                        return new Un(this.v51_1);
                    }),
                    (v(Rn).y3e = function () {
                        return new jn();
                    }),
                    (v(Un).yz = function () {
                        return Pn().y3e().w51(this.y51_1);
                    }),
                    (v(Un).z51 = function (n) {
                        return this.y51_1.p2(n);
                    }),
                    (v(Un).a52 = function (n) {
                        return this.yz().w51(n.y51_1).lz();
                    }),
                    (v(Bn).e52 = function () {
                        return this.d52_1;
                    }),
                    (v(Dn).hashCode = function () {
                        return d(this.f52_1);
                    }),
                    (v(Dn).equals = function (n) {
                        var t = n instanceof Dn ? n : null;
                        return this.f52_1 === (null == t ? null : t.f52_1);
                    }),
                    (v(Dn).toString = function () {
                        return "CacheKey(" + this.f52_1 + ")";
                    }),
                    (v(Ln).i52 = function (n, t) {
                        var r,
                            i = g(t.g52_1.r11_1.n11());
                        if (i.h()) r = null;
                        else {
                            for (var e = m(n.r2("__typename")), u = x(C(i, 10)), _ = i.p(); _.q(); ) {
                                var l = _.r(),
                                    o = m(n.r2(l));
                                u.k(o);
                            }
                            r = In(e, u);
                        }
                        return r;
                    }),
                    (v(Fn).k52 = function (n, t) {
                        return null;
                    }),
                    (v(Fn).l52 = function (n, t, r, i) {
                        var e = n.r11_1;
                        if ((e instanceof R && (e = e.j13_1), e instanceof U && P(e))) {
                            var u = this.j52(n, t);
                            if (null != u) return u;
                        }
                        if (e instanceof S && ((e = e.w13_1) instanceof R && (e = e.j13_1), e instanceof U && P(e))) {
                            var _ = this.k52(n, t);
                            if (null != _) return _;
                        }
                        return o.l52(n, t, r, i);
                    }),
                    (v(Nn).l52 = function (n, t, r, i) {
                        var e = n.r12(t);
                        if (!r.p2(e)) throw I(i, e);
                        return r.r2(e);
                    }),
                    (v(En).l52 = function (n, t, r, i) {
                        for (var e = n.q12(t, An).t2(), u = x(C(e, 10)), _ = e.p(); _.q(); ) {
                            var l = _.r(),
                                s = m(l);
                            u.k(s);
                        }
                        var f = u;
                        return f.h() ? o.l52(n, t, r, i) : In(n.r11_1.n11().m11_1, f);
                    }),
                    (v(Jn).p52 = function () {
                        return new Hn(this.n52_1, this.o52_1);
                    }),
                    (v(Gn).j53 = function () {
                        return !(this.g53_1.e1(new M(0, 0)) < 0) && D().h3(this.h53_1).e1(this.g53_1) >= 0;
                    }),
                    (v(Hn).o53 = function (n, t) {
                        return this.v52_1.v53(
                            ((r = this),
                            (i = n),
                            (e = t),
                            function () {
                                var n,
                                    t = On(r, i, e);
                                if (null == t) {
                                    var u,
                                        _ = r.t53_1,
                                        l = null == _ ? null : _.o53(i, e);
                                    null == l ? (u = null) : (r.w52_1.q53(i, new Gn(l, r.u52_1)), (u = l)), (n = u);
                                } else n = t;
                                return n;
                            }),
                        );
                        var r, i, e;
                    }),
                    (v(Hn).u53 = function (n, t) {
                        return this.v52_1.v53(
                            ((r = n),
                            (i = this),
                            (e = t),
                            function () {
                                for (var n = r, t = N(F(L(C(n, 10)), 16)), u = n.p(); u.q(); ) {
                                    var _ = u.r(),
                                        l = On(i, _, e);
                                    t.u2(_, l);
                                }
                                for (var o = t, s = c(), f = o.z().p(); f.q(); ) {
                                    var a = f.r();
                                    null == a.o2() && s.u2(a.n2(), a.o2());
                                }
                                for (var h = s.s2(), $ = i.t53_1, v = null == $ ? null : $.u53(h, e), p = null == v ? A() : v, w = p.p(); w.q(); ) {
                                    var b = w.r();
                                    i.w52_1.q53(b.k53_1, new Gn(b, i.u52_1));
                                }
                                return J(E(o.t2()), p);
                            }),
                        );
                        var r, i, e;
                    }),
                    (v(Hn).w53 = function (n, t) {
                        if (t.z51("do-not-store")) return O();
                        for (var r = T(), i = n.p(); i.q(); ) {
                            var e = Tn(this, i.r(), t);
                            G(r, e);
                        }
                        var u = V(r),
                            _ = this.t53_1,
                            l = null == _ ? null : _.w53(n, t),
                            o = null == l ? O() : l;
                        return H(u, o);
                    }),
                    (v(Wn).x53 = function (n) {
                        for (var t = this; null != t.t53_1; ) t = Q(t.t53_1);
                        return (t.t53_1 = n), this;
                    }),
                    (v(Xn).r52 = function () {
                        var n = this.q52_1;
                        return null != n ? this.p52().x53(n.r52()) : this.p52();
                    }),
                    (v(nt).q54 = function (n, t) {
                        if (n.k53_1 !== t.k53_1) {
                            var r = "Cannot compute changed keys on record with different keys: '" + n.k53_1 + "' - '" + t.k53_1 + "'";
                            throw un(en(r));
                        }
                        for (var i = n.l53_1.s2(), e = t.l53_1.s2(), u = _n(i, e), _ = H(ln(i, u), ln(e, u)), l = T(), o = u.p(); o.q(); ) {
                            var s = o.r();
                            X(n.l53_1.r2(s), t.l53_1.r2(s)) || l.k(s);
                        }
                        for (var f = H(_, l), a = x(C(f, 10)), h = f.p(); h.q(); ) {
                            var c = h.r(),
                                $ = n.k53_1 + "." + c;
                            a.k($);
                        }
                        return V(a);
                    }),
                    (v(tt).s53 = function () {
                        var n = this.n53_1,
                            t = null == n ? null : n.s(),
                            r = null == t ? null : h(t, 8),
                            i = null == r ? 0 : r;
                        return (a.a55(this) + i) | 0;
                    }),
                    (v(tt).b55 = function (n, t) {
                        for (var r = on(), i = sn(this.l53_1), e = this.n53_1, u = null == e ? null : sn(e), _ = null == u ? c() : u, l = n.l53_1.z().p(); l.q(); ) {
                            var o = l.r(),
                                s = o.n2(),
                                f = o.o2(),
                                a = this.l53_1.p2(s),
                                h = this.l53_1.r2(s);
                            (a && X(h, f)) || (i.u2(s, f), r.k(this.k53_1 + "." + s)), null != t && _.u2(s, t);
                        }
                        return fn(Zn(this.k53_1, i, n.m53_1, _), r);
                    }),
                    (v(tt).p53 = function (n) {
                        return this.b55(n, null);
                    }),
                    (v(tt).r53 = function () {
                        for (var n = this.l53_1.s2(), t = x(C(n, 10)), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                e = this.k53_1 + "." + i;
                            t.k(e);
                        }
                        return V(t);
                    }),
                    (v(tt).asJsReadonlyMapView = function () {
                        return this.l53_1.asJsReadonlyMapView();
                    }),
                    (v(tt).v3t = function (n) {
                        return this.l53_1.p2(n);
                    }),
                    (v(tt).p2 = function (n) {
                        return null != n && "string" == typeof n && this.v3t(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).c55 = function (n) {
                        return this.l53_1.q2(n);
                    }),
                    (v(tt).q2 = function (n) {
                        return (null == n || null != n) && this.c55(null == n || null != n ? n : nn());
                    }),
                    (v(tt).ee = function (n) {
                        return this.l53_1.r2(n);
                    }),
                    (v(tt).r2 = function (n) {
                        return null == n || "string" != typeof n ? null : this.ee(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).h = function () {
                        return this.l53_1.h();
                    }),
                    (v(tt).z = function () {
                        return this.l53_1.z();
                    }),
                    (v(tt).s2 = function () {
                        return this.l53_1.s2();
                    }),
                    (v(tt).s = function () {
                        return this.l53_1.s();
                    }),
                    (v(tt).t2 = function () {
                        return this.l53_1.t2();
                    }),
                    (v(ot).z53 = function () {
                        var n = rt(this.d55_1.r2(A()), this, A());
                        return null != n && rn(n, tn) ? n : nn();
                    }),
                    (v(ot).toString = function () {
                        return "CacheBatchReaderData(data=" + en(this.d55_1) + ")";
                    }),
                    (v(ot).hashCode = function () {
                        return yn(this.d55_1);
                    }),
                    (v(ot).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof ot)) return !1;
                        var t = n instanceof ot ? n : nn();
                        return !!X(this.d55_1, t.d55_1);
                    }),
                    (v(st).p54 = function () {
                        var n = this.h54_1,
                            t = this.l54_1,
                            r = this.m54_1,
                            i = A();
                        this.o54_1.k(new it(n, i, t, r));
                        n: for (; !this.o54_1.h(); ) {
                            for (var e = this.o54_1, u = x(C(e, 10)), _ = e.p(); _.q(); ) {
                                var l = _.r().e55_1;
                                u.k(l);
                            }
                            for (var o = this.g54_1.u53(u, this.k54_1), s = F(L(C(o, 10)), 16), f = N(s), a = o.p(); a.q(); ) {
                                var h = a.r(),
                                    c = h.k53_1;
                                f.u2(c, h);
                            }
                            var $ = f,
                                v = qn(this.o54_1);
                            this.o54_1.j2();
                            for (var p = v.p(); p.q(); ) {
                                var b = p.r(),
                                    k = $.r2(b.e55_1);
                                if (null == k) {
                                    if (b.e55_1 !== Mn().e52().f52_1) throw new zn(b.e55_1);
                                    k = new tt(b.e55_1, w());
                                }
                                for (var y = k.ee("__typename"), q = _t(this, b.g55_1, b.h55_1, this.i54_1, null != y && "string" == typeof y ? y : null), z = T(), d = q.p(); d.q(); ) {
                                    var g,
                                        m = d.r();
                                    if (xt(m, this.i54_1.o12_1)) g = null;
                                    else {
                                        var j = this.j54_1.l52(m, this.i54_1, k, k.k53_1);
                                        lt(j, this, an(b.f55_1, m.k12()), m.v11_1, m.r11_1.n11().m11_1), (g = fn(m.k12(), j));
                                    }
                                    var R = g;
                                    null == R || z.k(R);
                                }
                                var P = kn(z),
                                    U = this.n54_1,
                                    S = b.f55_1;
                                U.u2(S, P);
                            }
                        }
                        return new ot(this.n54_1);
                    }),
                    (v($t).d53 = function (n) {
                        var t = this.z52_1.r2(n);
                        return null != t && ft(this, t), null == t ? null : t.l55_1;
                    }),
                    (v($t).q53 = function (n, t) {
                        var r = this.z52_1.r2(n);
                        if (null == r) {
                            var i = this.z52_1,
                                e = (function (n, t, r) {
                                    var i = new ht(t, r, n.a53_1, null);
                                    if (((n.a53_1 = i), null == i.m55_1)) n.b53_1 = n.a53_1;
                                    else {
                                        var e = i.m55_1;
                                        null == e || (e.n55_1 = n.a53_1);
                                    }
                                    return (n.c53_1 = (n.c53_1 + n.y52_1(t, r)) | 0), i;
                                })(this, n, t);
                            i.u2(n, e);
                        } else (r.l55_1 = t), ft(this, r);
                        !(function (n) {
                            for (var t = n.b53_1; null != t && n.c53_1 > n.x52_1; ) {
                                var r = n.z52_1,
                                    i = t.k55_1;
                                (rn(r, dn) ? r : nn()).v2(i), at(n, t), (t = n.b53_1);
                            }
                        })(this);
                    }),
                    (v($t).e53 = function (n) {
                        return (function (n, t) {
                            var r = n.z52_1.v2(t),
                                i = null == r ? null : r.l55_1;
                            return null != r && at(n, r), i;
                        })(this, n);
                    }),
                    (v(yt).f54 = function (n, t, r) {
                        return vt(this, n, this.c54_1, t, r), this.e54_1;
                    }),
                    (v(dt).v55 = function (n) {
                        var t = this.r55_1.p53(n),
                            r = t.gh(),
                            i = t.hh();
                        return (this.r55_1 = r), this.s55_1.k(n), i;
                    }),
                    (v(dt).w55 = function (n) {
                        var t;
                        n: {
                            for (var r = 0, i = this.s55_1.p(); i.q(); ) {
                                var e = i.r();
                                if (n.equals(e.m53_1)) {
                                    t = r;
                                    break n;
                                }
                                r = (r + 1) | 0;
                            }
                            t = -1;
                        }
                        var u = t;
                        if (-1 === u) return new zt(O(), !1);
                        if (1 === this.s55_1.s()) return new zt(this.r55_1.r53(), !0);
                        var _ = this.r55_1;
                        this.s55_1.m2(u).k53_1;
                        var l = null,
                            o = (u - 1) | 0,
                            s = Math.max(0, o),
                            a = this.s55_1.s();
                        if (s < a)
                            do {
                                var h = s;
                                s = (s + 1) | 0;
                                var c = this.s55_1.t(h);
                                if (null == l) l = c;
                                else {
                                    var $ = l.p53(c).gh();
                                    l = $;
                                }
                            } while (s < a);
                        return (this.r55_1 = Q(l)), new zt(f.q54(_, this.r55_1), !1);
                    }),
                    (v(gt).o53 = function (n, t) {
                        var r;
                        try {
                            var i = this.t53_1;
                            r = qt(null == i ? null : i.o53(n, t), this, n);
                        } catch (n) {
                            if (!(n instanceof Cn)) throw n;
                            r = null;
                        }
                        return r;
                    }),
                    (v(gt).u53 = function (n, t) {
                        var r,
                            i = this.t53_1,
                            e = null == i ? null : i.u53(n, t);
                        if (null == e) r = null;
                        else {
                            for (var u = F(L(C(e, 10)), 16), _ = N(u), l = e.p(); l.q(); ) {
                                var o = l.r(),
                                    s = o.k53_1;
                                _.u2(s, o);
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
                    (v(gt).w53 = function (n, t) {
                        var r = this.t53_1,
                            i = null == r ? null : r.w53(n, t);
                        return null == i ? O() : i;
                    }),
                    (v(gt).x55 = function (n) {
                        for (var t = T(), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                e = this.y55(i);
                            G(t, e);
                        }
                        return V(t);
                    }),
                    (v(gt).y55 = function (n) {
                        var t,
                            r = this.q55_1.r2(n.k53_1);
                        if (null == r) {
                            var i = this.q55_1,
                                e = n.k53_1,
                                u = new dt(n);
                            i.u2(e, u), (t = n.r53());
                        } else t = r.v55(n);
                        return t;
                    }),
                    (v(gt).z55 = function (n) {
                        for (var t = on(), r = this.q55_1.z().p(); r.q(); ) {
                            var i = r.r().o2().w55(n);
                            t.u(i.t55_1), i.u55_1 && r.g5();
                        }
                        return t;
                    }),
                    (v(Ct).a55 = function (n) {
                        for (var t = (16 + K(n.k53_1).length) | 0, r = n.l53_1.z().p(); r.q(); ) {
                            var i = r.r(),
                                e = i.n2(),
                                u = i.o2();
                            t = (t + ((K(e).length + mt(0, u)) | 0)) | 0;
                        }
                        return t;
                    }),
                    (v(Rt).v53 = function (n) {
                        return n();
                    }),
                    (l = new Ln()),
                    (o = new Nn()),
                    (s = new En()),
                    new Qn(),
                    (f = new nt()),
                    (a = new Ct()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = gt),
                    (n.$_$.b = jn),
                    (n.$_$.c = Fn),
                    (n.$_$.d = Jn),
                    (n.$_$.e = tt),
                    (n.$_$.f = function (n) {
                        var t;
                        if (null == n) t = null;
                        else {
                            for (var r = T(), i = n.p(); i.q(); ) {
                                var e = i.r().r53();
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
                            n.c15().hw(u, r, t);
                            var _ = Z(n, r, !0),
                                l = new yt(_, e, i),
                                o = u.jx();
                            return l.f54(null != o && rn(o, tn) ? o : nn(), n.a54().v11_1, n.a54().r11_1.n11().m11_1);
                        })(n, t, r, i, Mn().e52().f52_1);
                    }),
                    (n.$_$.h = function (n, t, r, i, e) {
                        return Yn(n, Mn().e52(), t, r, i, e);
                    }),
                    (n.$_$.i = function (n, t, r, i, e, u) {
                        return Yn(n, t, r, i, e, u);
                    }),
                    (n.$_$.j = function (n, t, r, i) {
                        for (var e = new W(n.z53()), u = r.yz(), _ = i.o12_1, l = c(), o = _.z().p(); o.q(); ) {
                            var s = o.r();
                            X(s.o2(), !1) && l.u2(s.n2(), s.o2());
                        }
                        return t.gw(e, u.g14(l.s2()).lz());
                    }),
                    (n.$_$.k = function (n, t) {
                        return (function (n, t, r) {
                            return Sn(n, q(t), r), r;
                        })(n, t, y(v(Dn)));
                    }),
                    (n.$_$.l = In),
                    (n.$_$.m = Pn),
                    (n.$_$.n = s),
                    (n.$_$.o = l);
            })(n.exports, r(519039), r(170047), r(982563), r(222818));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-1c7ce4c0.3a4b9f6a.js.map
