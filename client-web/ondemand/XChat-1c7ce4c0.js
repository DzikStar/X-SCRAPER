(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-1c7ce4c0"],
    {
        837398: (n, t, r) => {
            !(function (n, t) {
                "use strict";
                var r,
                    i = t.$_$.ue,
                    u = t.$_$.vd,
                    e = t.$_$.lj,
                    _ = t.$_$.xd,
                    l = t.$_$.g,
                    s = t.$_$.pd,
                    o = t.$_$.rd,
                    a = t.$_$.gd;
                function f() {}
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
                    (i.ProfilePictureState = v), a(i.ProfilePictureState, "Loading", c), (i.ProfilePictureState.Content = $);
                }
                u(f, "ProfilePictureButtonComponent"),
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
                        return this === n || (n instanceof h && (n instanceof h || e(), !0));
                    }),
                    (i($).n9g = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).gh = function () {
                        return this.profileImageUrl;
                    }),
                    (i($).t9h = function (n) {
                        return new $(n);
                    }),
                    (i($).copy = function (n, t) {
                        return (n = n === l ? this.profileImageUrl : n), this.t9h(n);
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
                        var t = n instanceof $ ? n : e();
                        return this.profileImageUrl == t.profileImageUrl;
                    }),
                    p(n),
                    (n.$jsExportAll$ = p),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = f),
                    (n.$_$.b = $),
                    (n.$_$.c = c);
            })(n.exports, r(519039));
        },
        314665: (n, t, r) => {
            !(function (n, t, r, i, u, e) {
                "use strict";
                var _ = t.$_$.rc,
                    l = t.$_$.o6,
                    s = t.$_$.ue,
                    o = t.$_$.lj,
                    a = t.$_$.f7,
                    f = t.$_$.ge,
                    h = t.$_$.e9,
                    c = r.$_$.b,
                    $ = t.$_$.wd,
                    v = t.$_$.g,
                    p = t.$_$.id,
                    w = t.$_$.vc,
                    y = i.$_$.a1,
                    b = t.$_$.qd,
                    d = t.$_$.rd,
                    q = i.$_$.m2,
                    g = t.$_$.aa,
                    m = t.$_$.cc,
                    k = u.$_$.a,
                    x = r.$_$.c,
                    z = i.$_$.d1,
                    C = e.$_$.e,
                    j = i.$_$.s2,
                    R = t.$_$.gd,
                    P = r.$_$.a;
                function S(n, t) {
                    (this.kbu_1 = n), _.call(this, t);
                }
                function U(n, t) {
                    var r = new S(n, t),
                        i = function (n, t) {
                            return r.mbu(n, t);
                        };
                    return (i.$arity = 1), i;
                }
                function I(n) {
                    this.ubu_1 = n;
                }
                function B(n, t) {
                    (this.dbv_1 = n), _.call(this, t);
                }
                function M(n, t, r, i) {
                    var u, e;
                    (this.obu_1 = n),
                        (this.pbu_1 = t),
                        (this.qbu_1 = r),
                        (this.rbu_1 = k(this, i)),
                        (this.sbu_1 = z(x())),
                        (this.tbu_1 = C(this.sbu_1)),
                        j(
                            this.rbu_1,
                            v,
                            v,
                            ((u = new B(this, null)),
                            ((e = function (n, t) {
                                return u.q25(n, t);
                            }).$arity = 1),
                            e),
                        );
                }
                $(S, _, v, [1]),
                    d(I, "sam$kotlinx_coroutines_flow_FlowCollector$0", v, v, [y, w], [1]),
                    $(B, _, v, [1]),
                    d(M, "DefaultProfilePictureButtonComponent", v, v, [P]),
                    (s(S).mbu = function (n, t) {
                        var r = this.nbu(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (s(S).cb = function (n, t) {
                        return this.mbu(null == n || f(n, a) ? n : o(), t);
                    }),
                    (s(S).oa = function () {
                        for (this.y9_1; ; )
                            try {
                                var n = this.w9_1;
                                if (0 === n) {
                                    this.x9_1 = 1;
                                    var t = this.lbu_1,
                                        r = null == t ? null : h(t);
                                    if (null == r);
                                    else
                                        n: do {
                                            for (var i = this.kbu_1.sbu_1; ; ) {
                                                var u = i.o2(),
                                                    e = new c(r.e9h_1);
                                                if (i.a24(u, e)) break n;
                                            }
                                        } while (0);
                                    return l;
                                }
                                if (1 === n) throw this.z9_1;
                            } catch (n) {
                                throw n;
                            }
                    }),
                    (s(S).nbu = function (n, t) {
                        var r = new S(this.kbu_1, t);
                        return (r.lbu_1 = n), r;
                    }),
                    (s(I).w1x = function (n, t) {
                        return this.ubu_1(n, t);
                    }),
                    (s(I).a4 = function () {
                        return this.ubu_1;
                    }),
                    (s(I).equals = function (n) {
                        var t;
                        null != n && f(n, y) ? (t = !(null == n || !f(n, w)) && p(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (s(I).hashCode = function () {
                        return b(this.a4());
                    }),
                    (s(B).q25 = function (n, t) {
                        var r = this.r25(n, t);
                        return (r.y9_1 = l), (r.z9_1 = null), r.oa();
                    }),
                    (s(B).cb = function (n, t) {
                        return this.q25(null != n && f(n, q) ? n : o(), t);
                    }),
                    (s(B).oa = function () {
                        var n = this.y9_1;
                        n: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 2), (this.w9_1 = 1);
                                        var t = this.dbv_1.pbu_1.paf(g(this.dbv_1.qbu_1), v, !0),
                                            r = U(this.dbv_1, null);
                                        if ((n = t.f1x(new I(r), this)) === m()) return n;
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
                        var r = new B(this.dbv_1, t);
                        return (r.ebv_1 = n), r;
                    }),
                    (s(M).ea = function () {
                        return this.tbu_1;
                    }),
                    (s(M).wbs = function () {
                        return this.obu_1.wbs();
                    }),
                    (s(M).xbs = function () {
                        return this.obu_1.xbs();
                    }),
                    (s(M).ybs = function () {
                        return this.obu_1.ybs();
                    }),
                    (s(M).zbs = function () {
                        return this.obu_1.zbs();
                    }),
                    (s(M).vbs = function () {
                        return this.obu_1.vbs();
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
                var r = t.$_$.se;
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
                    s,
                    o,
                    a,
                    f,
                    h = Math.imul,
                    c = t.$_$.d1,
                    $ = t.$_$.o6,
                    v = t.$_$.ue,
                    p = t.$_$.rd,
                    w = t.$_$.a9,
                    y = t.$_$.sd,
                    b = t.$_$.q1,
                    d = t.$_$.te,
                    q = t.$_$.nb,
                    g = t.$_$.o1,
                    m = t.$_$.pd,
                    k = r.$_$.f2,
                    x = t.$_$.xk,
                    z = t.$_$.c8,
                    C = t.$_$.t,
                    j = t.$_$.xd,
                    R = r.$_$.d1,
                    P = r.$_$.e2,
                    S = r.$_$.c1,
                    U = r.$_$.b1,
                    I = r.$_$.h3,
                    B = t.$_$.g,
                    M = t.$_$.ej,
                    D = i.$_$.a,
                    K = u.$_$.e,
                    L = t.$_$.ca,
                    F = t.$_$.hf,
                    N = t.$_$.c1,
                    A = t.$_$.z8,
                    E = t.$_$.d9,
                    J = t.$_$.ra,
                    O = t.$_$.b9,
                    T = t.$_$.u,
                    G = t.$_$.s7,
                    V = t.$_$.tb,
                    H = t.$_$.na,
                    Q = t.$_$.ek,
                    W = r.$_$.i,
                    X = t.$_$.id,
                    Y = r.$_$.j,
                    Z = r.$_$.r2,
                    nn = t.$_$.lj,
                    tn = t.$_$.i7,
                    rn = t.$_$.ge,
                    un = t.$_$.ye,
                    en = t.$_$.l2,
                    _n = t.$_$.o9,
                    ln = t.$_$.ha,
                    sn = t.$_$.h1,
                    on = t.$_$.sb,
                    an = t.$_$.yk,
                    fn = t.$_$.sa,
                    hn = t.$_$.a8,
                    cn = t.$_$.f7,
                    $n = t.$_$.mk,
                    vn = t.$_$.d8,
                    pn = r.$_$.a1,
                    wn = r.$_$.y,
                    yn = t.$_$.f9,
                    bn = t.$_$.pb,
                    dn = t.$_$.qd,
                    qn = t.$_$.mb,
                    gn = r.$_$.x2,
                    mn = t.$_$.m7,
                    kn = t.$_$.f1,
                    xn = t.$_$.ka,
                    zn = t.$_$.aj,
                    Cn = r.$_$.h;
                function jn() {
                    this.i55_1 = c();
                }
                function Rn() {
                    (e = this), (this.k55_1 = new Sn(w()));
                }
                function Pn() {
                    return null == e && new Rn(), e;
                }
                function Sn(n) {
                    Pn(), (this.l55_1 = n);
                }
                function Un(n, t, r) {
                    var i = b();
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
                    (_ = this), (this.o55_1 = g("ApolloCacheReference\\{(.*)\\}")), (this.p55_1 = "ApolloCacheReference"), (this.q55_1 = new Dn("QUERY_ROOT"));
                }
                function Mn() {
                    return null == _ && new Bn(), _;
                }
                function Dn(n) {
                    Mn(), (this.s55_1 = n);
                }
                function Kn(n, t) {
                    (this.t55_1 = n), (this.u55_1 = t);
                }
                function Ln() {}
                function Fn() {}
                function Nn() {}
                function An(n) {
                    return n.g12_1.e12_1;
                }
                function En() {}
                function Jn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Xn.call(this), (this.a56_1 = n), (this.b56_1 = t);
                }
                function On(n, t, r) {
                    var i,
                        u = n.j56_1.q56(t);
                    null == u ? (i = null) : ((u.w56() || r.m55("evict-after-read")) && n.j56_1.r56(t), (i = u));
                    var e,
                        _ = i;
                    null == _ ? (e = null) : (e = _.w56() ? null : _);
                    return null == e ? null : e.s56_1;
                }
                function Tn(n, t, r) {
                    var i,
                        u = n.b57(t.x56_1, r);
                    if (null == u) n.j56_1.d57(t.x56_1, new Gn(t, n.h56_1)), (i = t.e57());
                    else {
                        var e = u.c57(t),
                            _ = e.gh(),
                            l = e.hh();
                        n.j56_1.d57(t.x56_1, new Gn(_, n.h56_1)), (i = l);
                    }
                    return i;
                }
                function Gn(n, t) {
                    (this.s56_1 = n), (this.t56_1 = t), (this.u56_1 = D()), (this.v56_1 = (this.s56_1.f57() + 8) | 0);
                }
                function Vn(n, t) {
                    var r = K(n).length,
                        i = null == t ? null : t.v56_1;
                    return (r + (null == i ? 0 : i)) | 0;
                }
                function Hn(n, t) {
                    (n = n === B ? 2147483647 : n), (t = t === B ? new M(-1, -1) : t), Wn.call(this), (this.g56_1 = n), (this.h56_1 = t), (this.i56_1 = new Rt());
                    this.j56_1 = new $t(this.g56_1, Vn);
                }
                function Qn() {
                    this.l57_1 = "()^$.*?+{}";
                }
                function Wn() {
                    this.g57_1 = null;
                }
                function Xn() {
                    this.d56_1 = null;
                }
                function Yn(n, t, r, i, u, e) {
                    return new ot(r, t.s55_1, e, i, u, n.n57().t11_1, n.n57().p11_1.l11().k11_1).c58();
                }
                function Zn(n, t, r, i) {
                    return (function (n, t, r, i, u) {
                        return tt.call(u, n, t, r), (u.a57_1 = i), u;
                    })(n, t, r, i, d(v(tt)));
                }
                function nt() {}
                function tt(n, t, r) {
                    (r = r === B ? null : r), (this.x56_1 = n), (this.y56_1 = t), (this.z56_1 = r), (this.a57_1 = null);
                }
                function rt(n, t, r) {
                    var i;
                    if (n instanceof Dn) i = rt(t.q58_1.r2(r), t, r);
                    else if (null != n && rn(n, cn)) {
                        for (var u = C(z(n, 10)), e = 0, _ = n.p(); _.q(); ) {
                            var l = _.r(),
                                s = e;
                            e = (s + 1) | 0;
                            var o = hn(s),
                                a = rt(l, t, fn(r, o));
                            u.k(a);
                        }
                        i = u;
                    } else if (null != n && rn(n, tn)) {
                        for (var f = N(L(n.s())), h = n.z().p(); h.q(); ) {
                            var c = h.r(),
                                $ = c.n2(),
                                v = c.o2(),
                                p = c.n2(),
                                w = rt(v, t, fn(r, null != p && "string" == typeof p ? p : nn()));
                            f.u2($, w);
                        }
                        i = f;
                    } else i = n;
                    return i;
                }
                function it(n, t, r, i) {
                    (this.r58_1 = n), (this.s58_1 = t), (this.t58_1 = r), (this.u58_1 = i);
                }
                function ut(n) {
                    this.v58_1 = n;
                    this.w58_1 = T();
                }
                function et(n, t, r, i, u) {
                    for (var e, _, l = t.p(); l.q(); ) {
                        var s = l.r();
                        s instanceof wn ? u.w58_1.k(s) : s instanceof pn ? (!vn(s.n13_1, i) && s.m13_1 !== r) || ((e = s), (_ = u.v58_1.m12_1), jt(e.o13_1, _)) || et(n, s.p13_1, r, i, u) : $n();
                    }
                }
                function _t(n, t, r, i, u) {
                    var e = new ut(i);
                    et(n, t, r, u, e);
                    for (var _ = e.w58_1, l = c(), s = _.p(); s.q(); ) {
                        var o,
                            a = s.r(),
                            f = an(a.i12(), a.r11_1),
                            h = l.r2(f);
                        if (null == h) {
                            var $ = T();
                            l.u2(f, $), (o = $);
                        } else o = h;
                        o.k(a);
                    }
                    for (var v = l.t2(), p = C(z(v, 10)), w = v.p(); w.q(); ) {
                        for (var y = w.r(), b = yn(y).wz(), d = T(), q = y.p(); q.q(); ) {
                            var g = q.r().t11_1;
                            G(d, g);
                        }
                        var m = b.c12(d).jz();
                        p.k(m);
                    }
                    return p;
                }
                function lt(n, t, r, i, u) {
                    if (n instanceof Dn) {
                        var e = n.s55_1;
                        t.b58_1.k(new it(e, r, i, u));
                    } else if (null != n && rn(n, cn))
                        for (var _ = 0, l = n.p(); l.q(); ) {
                            var s = l.r(),
                                o = _;
                            _ = (o + 1) | 0;
                            var a = hn(o);
                            lt(s, t, fn(r, a), i, u);
                        }
                    else if (null != n && rn(n, tn)) {
                        rn(n, tn) || nn();
                        for (var f = n.r2("__typename"), h = _t(t, i, u, t.v57_1, null != f && "string" == typeof f ? f : null), c = T(), $ = h.p(); $.q(); ) {
                            var v,
                                p = $.r();
                            if (Ct(p, t.v57_1.m12_1)) v = null;
                            else {
                                var w = t.w57_1.y55(p, t.v57_1, n, "");
                                lt(w, t, fn(r, p.i12()), p.t11_1, p.p11_1.l11().k11_1), (v = an(p.i12(), w));
                            }
                            var y = v;
                            null == y || c.k(y);
                        }
                        bn(c);
                    }
                }
                function st(n) {
                    this.q58_1 = n;
                }
                function ot(n, t, r, i, u, e, _) {
                    (this.t57_1 = n), (this.u57_1 = t), (this.v57_1 = r), (this.w57_1 = i), (this.x57_1 = u), (this.y57_1 = e), (this.z57_1 = _);
                    this.a58_1 = c();
                    this.b58_1 = T();
                }
                function at(n, t) {
                    if (null == t.a59_1) return $;
                    var r = t.a59_1;
                    if ((null == r || (r.z58_1 = t.z58_1), null == t.z58_1)) n.o56_1 = t.a59_1;
                    else {
                        var i = t.z58_1;
                        null == i || (i.a59_1 = t.a59_1);
                    }
                    (t.z58_1 = n.n56_1), (t.a59_1 = null);
                    var u = n.n56_1;
                    null == u || (u.a59_1 = t), (n.n56_1 = t);
                }
                function ft(n, t) {
                    if (null == t.a59_1) n.n56_1 = t.z58_1;
                    else {
                        var r = t.a59_1;
                        null == r || (r.z58_1 = t.z58_1);
                    }
                    if (null == t.z58_1) n.o56_1 = t.a59_1;
                    else {
                        var i = t.z58_1;
                        null == i || (i.a59_1 = t.a59_1);
                    }
                    (n.p56_1 = (n.p56_1 - n.l56_1(Q(t.x58_1), t.y58_1)) | 0), (t.x58_1 = null), (t.y58_1 = null), (t.z58_1 = null), (t.a59_1 = null);
                }
                function ht(n, t, r, i) {
                    (this.x58_1 = n), (this.y58_1 = t), (this.z58_1 = r), (this.a59_1 = i);
                }
                function ct(n, t) {
                    return 1;
                }
                function $t(n, t) {
                    (t = t === B ? ct : t), (this.k56_1 = n), (this.l56_1 = t), (this.m56_1 = kn(0, 0.75)), (this.n56_1 = null), (this.o56_1 = null), (this.p56_1 = 0);
                }
                function vt(n, t, r, i, u) {
                    for (
                        var e = t.r2("__typename"),
                            _ = (function (n, t, r, i) {
                                var u = new wt();
                                return yt(n, t, r, i, u), u.b59_1;
                            })(n, i, u, null != e && "string" == typeof e ? e : null),
                            l = t.z(),
                            s = T(),
                            o = l.p();
                        o.q();

                    ) {
                        for (var a, f = o.r(), h = T(), c = _.p(); c.q(); ) {
                            var $ = c.r();
                            $.i12() === f.n2() && h.k($);
                        }
                        var v = h;
                        if (v.h()) a = null;
                        else {
                            for (var p = T(), w = v.p(); w.q(); ) {
                                var y = w.r();
                                Ct(y, n.o57_1.m12_1) || p.k(y);
                            }
                            var b = p;
                            if (b.h()) a = null;
                            else {
                                for (var d = yn(b).wz(), q = T(), g = b.p(); g.q(); ) {
                                    var m = g.r().t11_1;
                                    G(q, m);
                                }
                                var k = d.c12(q).a12(A()).jz(),
                                    x = k.p12(n.o57_1),
                                    z = r === Mn().r55().s55_1 ? null : r;
                                a = an(x, pt(n, f.o2(), k, k.p11_1, bt(z, n, x)));
                            }
                        }
                        var C = a;
                        null == C || s.k(C);
                    }
                    var j = new tt(r, bn(s)),
                        R = n.r57_1.r2(r),
                        P = null != R ? R.c57(j).ah_1 : j;
                    return n.r57_1.u2(r, P), new Dn(r);
                }
                function pt(n, t, r, i, u) {
                    var e;
                    if (i instanceof R) {
                        if (null == t) {
                            throw en(un("Check failed."));
                        }
                        e = i.h13_1;
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
                        for (var s = C(z(t, 10)), o = 0, a = t.p(); a.q(); ) {
                            var f = a.r(),
                                h = o;
                            o = (h + 1) | 0;
                            var c = hn(h),
                                $ = pt(n, f, r, l.u13_1, bt(u, n, c.toString()));
                            s.k($);
                        }
                        _ = s;
                    } else {
                        if (l instanceof S && P(l)) {
                            if (null == t || !rn(t, tn)) {
                                throw en(un("Check failed."));
                            }
                            var v = n.q57_1.v55(rn(t, tn) ? t : nn(), new Kn(r, n.o57_1)),
                                p = null == v ? null : v.s55_1;
                            _ = vt(n, t, null == p ? u : p, r.t11_1, r.p11_1.l11().k11_1);
                        } else _ = t;
                    }
                    return _;
                }
                function wt() {
                    this.b59_1 = T();
                }
                function yt(n, t, r, i, u) {
                    for (var e = t.p(); e.q(); ) {
                        var _ = e.r();
                        _ instanceof wn ? u.b59_1.k(_) : _ instanceof pn ? (vn(_.n13_1, i) || _.m13_1 === r) && yt(n, _.p13_1, r, i, u) : $n();
                    }
                }
                function bt(n, t, r) {
                    return null == n ? r : n + "." + r;
                }
                function dt(n, t, r) {
                    (this.o57_1 = n), (this.p57_1 = t), (this.q57_1 = r);
                    this.r57_1 = c();
                }
                function qt(n, t, r) {
                    var i,
                        u = t.d59_1.r2(r);
                    if (null != u) {
                        var e = null == n ? null : n.c57(u.e59_1),
                            _ = null == e ? null : e.ah_1;
                        i = null == _ ? u.e59_1 : _;
                    } else i = n;
                    return i;
                }
                function gt(n, t) {
                    (this.g59_1 = n), (this.h59_1 = t);
                }
                function mt(n) {
                    (this.e59_1 = n), (this.f59_1 = xn([n]));
                }
                function kt() {
                    Wn.call(this);
                    this.d59_1 = c();
                }
                function xt(n, t) {
                    var r;
                    if (null == t) r = 4;
                    else if (null != t && "string" == typeof t) r = K(t).length;
                    else if (null != t && "boolean" == typeof t) r = 16;
                    else if (null != t && "number" == typeof t) r = 4;
                    else if (t instanceof M) r = 8;
                    else if (null != t && "number" == typeof t) r = 8;
                    else if (t instanceof Cn) r = (K(t.c18_1).length + 8) | 0;
                    else if (null != t && rn(t, tn)) {
                        for (var i = 0, u = t.s2().p(); u.q(); ) {
                            var e = u.r();
                            i = (i + xt(f, e)) | 0;
                        }
                        for (var _ = (16 + i) | 0, l = 0, s = t.t2().p(); s.q(); ) {
                            var o = s.r();
                            l = (l + xt(f, o)) | 0;
                        }
                        r = (_ + l) | 0;
                    } else if (null != t && rn(t, cn)) {
                        for (var a = 0, h = t.p(); h.q(); ) {
                            var c = h.r();
                            a = (a + xt(f, c)) | 0;
                        }
                        r = (16 + a) | 0;
                    } else {
                        if (!(t instanceof Dn)) {
                            var $ = "Unknown field type in Record: '" + x(t) + "'";
                            throw en(un($));
                        }
                        r = (16 + K(t.s55_1).length) | 0;
                    }
                    return r;
                }
                function zt() {
                    (this.e58_1 = 16), (this.f58_1 = 4), (this.g58_1 = 8), (this.h58_1 = 8), (this.i58_1 = 16), (this.j58_1 = 16), (this.k58_1 = 16), (this.l58_1 = 16), (this.m58_1 = 4);
                }
                function Ct(n, t) {
                    return jt(n.r11_1, t);
                }
                function jt(n, t) {
                    for (var r = n.p(); r.q(); ) {
                        var i = r.r(),
                            u = t.r2(i.x12_1),
                            e = null != u && "boolean" == typeof u ? u : null,
                            _ = null != e && e;
                        if ((i.y12_1 && (_ = !_), !_)) return !0;
                    }
                    return !1;
                }
                function Rt() {}
                p(jn, "Builder", jn),
                    y(Rn),
                    p(Sn, "CacheHeaders"),
                    y(Bn),
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
                    y(Qn),
                    y(nt),
                    p(tt, "Record", B, B, [tn]),
                    p(it, "PendingReference"),
                    p(ut, "CollectState"),
                    p(st, "CacheBatchReaderData"),
                    p(ot, "CacheBatchReader"),
                    p(ht, "Node"),
                    p($t, "LruCache"),
                    p(wt, "CollectState", wt),
                    p(dt, "Normalizer"),
                    p(gt, "RemovalResult"),
                    p(mt, "RecordJournal"),
                    p(kt, "OptimisticCache", kt, Wn),
                    j(zt, "RecordWeigher"),
                    p(Rt, "CacheLock", Rt),
                    (v(jn).i16 = function (n, t) {
                        return this.i55_1.u2(n, t), this;
                    }),
                    (v(jn).j55 = function (n) {
                        return this.i55_1.w2(n), this;
                    }),
                    (v(jn).jz = function () {
                        return new Sn(this.i55_1);
                    }),
                    (v(Rn).l3i = function () {
                        return new jn();
                    }),
                    (v(Sn).wz = function () {
                        return Pn().l3i().j55(this.l55_1);
                    }),
                    (v(Sn).m55 = function (n) {
                        return this.l55_1.p2(n);
                    }),
                    (v(Sn).n55 = function (n) {
                        return this.wz().j55(n.l55_1).jz();
                    }),
                    (v(Bn).r55 = function () {
                        return this.q55_1;
                    }),
                    (v(Dn).hashCode = function () {
                        return m(this.s55_1);
                    }),
                    (v(Dn).equals = function (n) {
                        var t = n instanceof Dn ? n : null;
                        return this.s55_1 === (null == t ? null : t.s55_1);
                    }),
                    (v(Dn).toString = function () {
                        return "CacheKey(" + this.s55_1 + ")";
                    }),
                    (v(Ln).v55 = function (n, t) {
                        var r,
                            i = k(t.t55_1.p11_1.l11());
                        if (i.h()) r = null;
                        else {
                            for (var u = x(n.r2("__typename")), e = C(z(i, 10)), _ = i.p(); _.q(); ) {
                                var l = _.r(),
                                    s = x(n.r2(l));
                                e.k(s);
                            }
                            r = In(u, e);
                        }
                        return r;
                    }),
                    (v(Fn).x55 = function (n, t) {
                        return null;
                    }),
                    (v(Fn).y55 = function (n, t, r, i) {
                        var u = n.p11_1;
                        if ((u instanceof R && (u = u.h13_1), u instanceof S && P(u))) {
                            var e = this.w55(n, t);
                            if (null != e) return e;
                        }
                        if (u instanceof U && ((u = u.u13_1) instanceof R && (u = u.h13_1), u instanceof S && P(u))) {
                            var _ = this.x55(n, t);
                            if (null != _) return _;
                        }
                        return s.y55(n, t, r, i);
                    }),
                    (v(Nn).y55 = function (n, t, r, i) {
                        var u = n.p12(t);
                        if (!r.p2(u)) throw I(i, u);
                        return r.r2(u);
                    }),
                    (v(En).y55 = function (n, t, r, i) {
                        for (var u = n.o12(t, An).t2(), e = C(z(u, 10)), _ = u.p(); _.q(); ) {
                            var l = _.r(),
                                o = x(l);
                            e.k(o);
                        }
                        var a = e;
                        return a.h() ? s.y55(n, t, r, i) : In(n.p11_1.l11().k11_1, a);
                    }),
                    (v(Jn).c56 = function () {
                        return new Hn(this.a56_1, this.b56_1);
                    }),
                    (v(Gn).w56 = function () {
                        return !(this.t56_1.e1(new M(0, 0)) < 0) && D().h3(this.u56_1).e1(this.t56_1) >= 0;
                    }),
                    (v(Hn).b57 = function (n, t) {
                        return this.i56_1.i57(
                            ((r = this),
                            (i = n),
                            (u = t),
                            function () {
                                var n,
                                    t = On(r, i, u);
                                if (null == t) {
                                    var e,
                                        _ = r.g57_1,
                                        l = null == _ ? null : _.b57(i, u);
                                    null == l ? (e = null) : (r.j56_1.d57(i, new Gn(l, r.h56_1)), (e = l)), (n = e);
                                } else n = t;
                                return n;
                            }),
                        );
                        var r, i, u;
                    }),
                    (v(Hn).h57 = function (n, t) {
                        return this.i56_1.i57(
                            ((r = n),
                            (i = this),
                            (u = t),
                            function () {
                                for (var n = r, t = N(F(L(z(n, 10)), 16)), e = n.p(); e.q(); ) {
                                    var _ = e.r(),
                                        l = On(i, _, u);
                                    t.u2(_, l);
                                }
                                for (var s = t, o = c(), a = s.z().p(); a.q(); ) {
                                    var f = a.r();
                                    null == f.o2() && o.u2(f.n2(), f.o2());
                                }
                                for (var h = o.s2(), $ = i.g57_1, v = null == $ ? null : $.h57(h, u), p = null == v ? A() : v, w = p.p(); w.q(); ) {
                                    var y = w.r();
                                    i.j56_1.d57(y.x56_1, new Gn(y, i.h56_1));
                                }
                                return J(E(s.t2()), p);
                            }),
                        );
                        var r, i, u;
                    }),
                    (v(Hn).j57 = function (n, t) {
                        if (t.m55("do-not-store")) return O();
                        for (var r = T(), i = n.p(); i.q(); ) {
                            var u = Tn(this, i.r(), t);
                            G(r, u);
                        }
                        var e = V(r),
                            _ = this.g57_1,
                            l = null == _ ? null : _.j57(n, t),
                            s = null == l ? O() : l;
                        return H(e, s);
                    }),
                    (v(Wn).k57 = function (n) {
                        for (var t = this; null != t.g57_1; ) t = Q(t.g57_1);
                        return (t.g57_1 = n), this;
                    }),
                    (v(Xn).e56 = function () {
                        var n = this.d56_1;
                        return null != n ? this.c56().k57(n.e56()) : this.c56();
                    }),
                    (v(nt).d58 = function (n, t) {
                        if (n.x56_1 !== t.x56_1) {
                            var r = "Cannot compute changed keys on record with different keys: '" + n.x56_1 + "' - '" + t.x56_1 + "'";
                            throw en(un(r));
                        }
                        for (var i = n.y56_1.s2(), u = t.y56_1.s2(), e = _n(i, u), _ = H(ln(i, e), ln(u, e)), l = T(), s = e.p(); s.q(); ) {
                            var o = s.r();
                            X(n.y56_1.r2(o), t.y56_1.r2(o)) || l.k(o);
                        }
                        for (var a = H(_, l), f = C(z(a, 10)), h = a.p(); h.q(); ) {
                            var c = h.r(),
                                $ = n.x56_1 + "." + c;
                            f.k($);
                        }
                        return V(f);
                    }),
                    (v(tt).f57 = function () {
                        var n = this.a57_1,
                            t = null == n ? null : n.s(),
                            r = null == t ? null : h(t, 8),
                            i = null == r ? 0 : r;
                        return (f.n58(this) + i) | 0;
                    }),
                    (v(tt).o58 = function (n, t) {
                        for (var r = sn(), i = on(this.y56_1), u = this.a57_1, e = null == u ? null : on(u), _ = null == e ? c() : e, l = n.y56_1.z().p(); l.q(); ) {
                            var s = l.r(),
                                o = s.n2(),
                                a = s.o2(),
                                f = this.y56_1.p2(o),
                                h = this.y56_1.r2(o);
                            (f && X(h, a)) || (i.u2(o, a), r.k(this.x56_1 + "." + o)), null != t && _.u2(o, t);
                        }
                        return an(Zn(this.x56_1, i, n.z56_1, _), r);
                    }),
                    (v(tt).c57 = function (n) {
                        return this.o58(n, null);
                    }),
                    (v(tt).e57 = function () {
                        for (var n = this.y56_1.s2(), t = C(z(n, 10)), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                u = this.x56_1 + "." + i;
                            t.k(u);
                        }
                        return V(t);
                    }),
                    (v(tt).asJsReadonlyMapView = function () {
                        return this.y56_1.asJsReadonlyMapView();
                    }),
                    (v(tt).i3x = function (n) {
                        return this.y56_1.p2(n);
                    }),
                    (v(tt).p2 = function (n) {
                        return null != n && "string" == typeof n && this.i3x(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).p58 = function (n) {
                        return this.y56_1.q2(n);
                    }),
                    (v(tt).q2 = function (n) {
                        return (null == n || null != n) && this.p58(null == n || null != n ? n : nn());
                    }),
                    (v(tt).ee = function (n) {
                        return this.y56_1.r2(n);
                    }),
                    (v(tt).r2 = function (n) {
                        return null == n || "string" != typeof n ? null : this.ee(null != n && "string" == typeof n ? n : nn());
                    }),
                    (v(tt).h = function () {
                        return this.y56_1.h();
                    }),
                    (v(tt).z = function () {
                        return this.y56_1.z();
                    }),
                    (v(tt).s2 = function () {
                        return this.y56_1.s2();
                    }),
                    (v(tt).s = function () {
                        return this.y56_1.s();
                    }),
                    (v(tt).t2 = function () {
                        return this.y56_1.t2();
                    }),
                    (v(st).m57 = function () {
                        var n = rt(this.q58_1.r2(A()), this, A());
                        return null != n && rn(n, tn) ? n : nn();
                    }),
                    (v(st).toString = function () {
                        return "CacheBatchReaderData(data=" + un(this.q58_1) + ")";
                    }),
                    (v(st).hashCode = function () {
                        return dn(this.q58_1);
                    }),
                    (v(st).equals = function (n) {
                        if (this === n) return !0;
                        if (!(n instanceof st)) return !1;
                        var t = n instanceof st ? n : nn();
                        return !!X(this.q58_1, t.q58_1);
                    }),
                    (v(ot).c58 = function () {
                        var n = this.u57_1,
                            t = this.y57_1,
                            r = this.z57_1,
                            i = A();
                        this.b58_1.k(new it(n, i, t, r));
                        n: for (; !this.b58_1.h(); ) {
                            for (var u = this.b58_1, e = C(z(u, 10)), _ = u.p(); _.q(); ) {
                                var l = _.r().r58_1;
                                e.k(l);
                            }
                            for (var s = this.t57_1.h57(e, this.x57_1), o = F(L(z(s, 10)), 16), a = N(o), f = s.p(); f.q(); ) {
                                var h = f.r(),
                                    c = h.x56_1;
                                a.u2(c, h);
                            }
                            var $ = a,
                                v = qn(this.b58_1);
                            this.b58_1.j2();
                            for (var p = v.p(); p.q(); ) {
                                var y = p.r(),
                                    b = $.r2(y.r58_1);
                                if (null == b) {
                                    if (y.r58_1 !== Mn().r55().s55_1) throw new gn(y.r58_1);
                                    b = new tt(y.r58_1, w());
                                }
                                for (var d = b.ee("__typename"), q = _t(this, y.t58_1, y.u58_1, this.v57_1, null != d && "string" == typeof d ? d : null), g = T(), m = q.p(); m.q(); ) {
                                    var k,
                                        x = m.r();
                                    if (Ct(x, this.v57_1.m12_1)) k = null;
                                    else {
                                        var j = this.w57_1.y55(x, this.v57_1, b, b.x56_1);
                                        lt(j, this, fn(y.s58_1, x.i12()), x.t11_1, x.p11_1.l11().k11_1), (k = an(x.i12(), j));
                                    }
                                    var R = k;
                                    null == R || g.k(R);
                                }
                                var P = bn(g),
                                    S = this.a58_1,
                                    U = y.s58_1;
                                S.u2(U, P);
                            }
                        }
                        return new st(this.a58_1);
                    }),
                    (v($t).q56 = function (n) {
                        var t = this.m56_1.r2(n);
                        return null != t && at(this, t), null == t ? null : t.y58_1;
                    }),
                    (v($t).d57 = function (n, t) {
                        var r = this.m56_1.r2(n);
                        if (null == r) {
                            var i = this.m56_1,
                                u = (function (n, t, r) {
                                    var i = new ht(t, r, n.n56_1, null);
                                    if (((n.n56_1 = i), null == i.z58_1)) n.o56_1 = n.n56_1;
                                    else {
                                        var u = i.z58_1;
                                        null == u || (u.a59_1 = n.n56_1);
                                    }
                                    return (n.p56_1 = (n.p56_1 + n.l56_1(t, r)) | 0), i;
                                })(this, n, t);
                            i.u2(n, u);
                        } else (r.y58_1 = t), at(this, r);
                        !(function (n) {
                            for (var t = n.o56_1; null != t && n.p56_1 > n.k56_1; ) {
                                var r = n.m56_1,
                                    i = t.x58_1;
                                (rn(r, mn) ? r : nn()).v2(i), ft(n, t), (t = n.o56_1);
                            }
                        })(this);
                    }),
                    (v($t).r56 = function (n) {
                        return (function (n, t) {
                            var r = n.m56_1.v2(t),
                                i = null == r ? null : r.y58_1;
                            return null != r && ft(n, r), i;
                        })(this, n);
                    }),
                    (v(dt).s57 = function (n, t, r) {
                        return vt(this, n, this.p57_1, t, r), this.r57_1;
                    }),
                    (v(mt).i59 = function (n) {
                        var t = this.e59_1.c57(n),
                            r = t.gh(),
                            i = t.hh();
                        return (this.e59_1 = r), this.f59_1.k(n), i;
                    }),
                    (v(mt).j59 = function (n) {
                        var t;
                        n: {
                            for (var r = 0, i = this.f59_1.p(); i.q(); ) {
                                var u = i.r();
                                if (n.equals(u.z56_1)) {
                                    t = r;
                                    break n;
                                }
                                r = (r + 1) | 0;
                            }
                            t = -1;
                        }
                        var e = t;
                        if (-1 === e) return new gt(O(), !1);
                        if (1 === this.f59_1.s()) return new gt(this.e59_1.e57(), !0);
                        var _ = this.e59_1;
                        this.f59_1.m2(e).x56_1;
                        var l = null,
                            s = (e - 1) | 0,
                            o = Math.max(0, s),
                            f = this.f59_1.s();
                        if (o < f)
                            do {
                                var h = o;
                                o = (o + 1) | 0;
                                var c = this.f59_1.t(h);
                                if (null == l) l = c;
                                else {
                                    var $ = l.c57(c).gh();
                                    l = $;
                                }
                            } while (o < f);
                        return (this.e59_1 = Q(l)), new gt(a.d58(_, this.e59_1), !1);
                    }),
                    (v(kt).b57 = function (n, t) {
                        var r;
                        try {
                            var i = this.g57_1;
                            r = qt(null == i ? null : i.b57(n, t), this, n);
                        } catch (n) {
                            if (!(n instanceof zn)) throw n;
                            r = null;
                        }
                        return r;
                    }),
                    (v(kt).h57 = function (n, t) {
                        var r,
                            i = this.g57_1,
                            u = null == i ? null : i.h57(n, t);
                        if (null == u) r = null;
                        else {
                            for (var e = F(L(z(u, 10)), 16), _ = N(e), l = u.p(); l.q(); ) {
                                var s = l.r(),
                                    o = s.x56_1;
                                _.u2(o, s);
                            }
                            r = _;
                        }
                        for (var a = r, f = null == a ? w() : a, h = T(), c = n.p(); c.q(); ) {
                            var $ = c.r(),
                                v = qt(f.r2($), this, $);
                            null == v || h.k(v);
                        }
                        return h;
                    }),
                    (v(kt).j57 = function (n, t) {
                        var r = this.g57_1,
                            i = null == r ? null : r.j57(n, t);
                        return null == i ? O() : i;
                    }),
                    (v(kt).k59 = function (n) {
                        for (var t = T(), r = n.p(); r.q(); ) {
                            var i = r.r(),
                                u = this.l59(i);
                            G(t, u);
                        }
                        return V(t);
                    }),
                    (v(kt).l59 = function (n) {
                        var t,
                            r = this.d59_1.r2(n.x56_1);
                        if (null == r) {
                            var i = this.d59_1,
                                u = n.x56_1,
                                e = new mt(n);
                            i.u2(u, e), (t = n.e57());
                        } else t = r.i59(n);
                        return t;
                    }),
                    (v(kt).m59 = function (n) {
                        for (var t = sn(), r = this.d59_1.z().p(); r.q(); ) {
                            var i = r.r().o2().j59(n);
                            t.u(i.g59_1), i.h59_1 && r.g5();
                        }
                        return t;
                    }),
                    (v(zt).n58 = function (n) {
                        for (var t = (16 + K(n.x56_1).length) | 0, r = n.y56_1.z().p(); r.q(); ) {
                            var i = r.r(),
                                u = i.n2(),
                                e = i.o2();
                            t = (t + ((K(u).length + xt(0, e)) | 0)) | 0;
                        }
                        return t;
                    }),
                    (v(Rt).i57 = function (n) {
                        return n();
                    }),
                    (l = new Ln()),
                    (s = new Nn()),
                    (o = new En()),
                    new Qn(),
                    (a = new nt()),
                    (f = new zt()),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = kt),
                    (n.$_$.b = jn),
                    (n.$_$.c = Fn),
                    (n.$_$.d = Jn),
                    (n.$_$.e = tt),
                    (n.$_$.f = function (n) {
                        var t;
                        if (null == n) t = null;
                        else {
                            for (var r = T(), i = n.p(); i.q(); ) {
                                var u = i.r().e57();
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
                            n.a15().fw(e, r, t);
                            var _ = Z(n, r, !0),
                                l = new dt(_, u, i),
                                s = e.hx();
                            return l.s57(null != s && rn(s, tn) ? s : nn(), n.n57().t11_1, n.n57().p11_1.l11().k11_1);
                        })(n, t, r, i, Mn().r55().s55_1);
                    }),
                    (n.$_$.h = function (n, t, r, i, u) {
                        return Yn(n, Mn().r55(), t, r, i, u);
                    }),
                    (n.$_$.i = function (n, t, r, i, u, e) {
                        return Yn(n, t, r, i, u, e);
                    }),
                    (n.$_$.j = function (n, t, r, i) {
                        for (var u = new W(n.m57()), e = r.wz(), _ = i.m12_1, l = c(), s = _.z().p(); s.q(); ) {
                            var o = s.r();
                            X(o.o2(), !1) && l.u2(o.n2(), o.o2());
                        }
                        return t.ew(u, e.e14(l.s2()).jz());
                    }),
                    (n.$_$.k = function (n, t) {
                        return (function (n, t, r) {
                            return Un(n, q(t), r), r;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-1c7ce4c0.43f3f25a.js.map
