(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-7b644756"],
    {
        222818: (r, t, i) => {
            !(function (r, t) {
                "use strict";
                var i,
                    s,
                    n,
                    e,
                    _,
                    f,
                    v,
                    h,
                    a = Math.imul,
                    u = t.$_$.oe,
                    o = t.$_$.ld,
                    w = t.$_$.se,
                    l = t.$_$.h2,
                    c = t.$_$.n6,
                    d = t.$_$.qe,
                    k = t.$_$.l2,
                    g = t.$_$.yi,
                    j = t.$_$.g,
                    $ = t.$_$.mb,
                    b = t.$_$.cb,
                    y = t.$_$.t,
                    x = t.$_$.u7,
                    q = t.$_$.md,
                    m = t.$_$.p6,
                    p = t.$_$.n7,
                    S = t.$_$.ne,
                    I = t.$_$.yj,
                    z = t.$_$.s7,
                    C = t.$_$.f2,
                    M = t.$_$.wc,
                    A = t.$_$.o3,
                    B = t.$_$.p3,
                    E = t.$_$.u3,
                    O = t.$_$.pe,
                    F = t.$_$.l8,
                    R = t.$_$.vc,
                    U = t.$_$.je,
                    X = t.$_$.rf,
                    L = t.$_$.uc,
                    P = t.$_$.g8,
                    V = t.$_$.qf,
                    D = t.$_$.d8,
                    G = t.$_$.fj,
                    H = t.$_$.ug,
                    J = t.$_$.oi,
                    K = t.$_$.me,
                    N = t.$_$.t1,
                    Q = t.$_$.ed,
                    T = t.$_$.sd,
                    W = t.$_$.xi,
                    Y = t.$_$.p2,
                    Z = t.$_$.tc,
                    rr = t.$_$.ui,
                    tr = t.$_$.a2,
                    ir = t.$_$.rd;
                function sr() {}
                function nr(r, t, i, s, n, e, _, f) {
                    if (!(e < _)) {
                        throw l(w("Failed requirement."));
                    }
                    var v = e;
                    if (v < _)
                        do {
                            var h = v;
                            if (((v = (v + 1) | 0), !(n.t(h).s() >= s))) {
                                throw l(w("Failed requirement."));
                            }
                        } while (v < _);
                    var u = e,
                        o = n.t(u),
                        c = n.t((_ - 1) | 0),
                        g = -1;
                    if ((s === o.s() && ((g = f.t(u)), (u = (u + 1) | 0), (o = n.t(u))), o.t(s) !== c.t(s))) {
                        var j = 1,
                            $ = (u + 1) | 0;
                        if ($ < _)
                            do {
                                var b = $;
                                ($ = ($ + 1) | 0), n.t((b - 1) | 0).t(s) !== n.t(b).t(s) && (j = (j + 1) | 0);
                            } while ($ < _);
                        var y = t.f3(_r(i, r)).f3(d(2)),
                            x = a(j, 2),
                            q = y.f3(d(x));
                        i.bs(j), i.bs(g);
                        var m = u;
                        if (m < _)
                            do {
                                var p = m;
                                m = (m + 1) | 0;
                                var S = n.t(p).t(s);
                                if (p === u || S !== n.t((p - 1) | 0).t(s)) {
                                    var I = 255 & S;
                                    i.bs(I);
                                }
                            } while (m < _);
                        for (var z = new Br(), C = u; C < _; ) {
                            var M = n.t(C).t(s),
                                A = _,
                                B = (C + 1) | 0;
                            if (B < _)
                                r: do {
                                    var E = B;
                                    if (((B = (B + 1) | 0), M !== n.t(E).t(s))) {
                                        A = E;
                                        break r;
                                    }
                                } while (B < _);
                            ((C + 1) | 0) === A && ((s + 1) | 0) === n.t(C).s() ? i.bs(f.t(C)) : (i.bs(a(-1, q.f3(_r(z, r)).j1())), nr(r, q, z, (s + 1) | 0, n, C, A, f)), (C = A);
                        }
                        i.cs(z);
                    } else {
                        var O = 0,
                            F = s,
                            R = o.s(),
                            U = c.s(),
                            X = Math.min(R, U);
                        if (F < X)
                            r: do {
                                var L = F;
                                if (((F = (F + 1) | 0), o.t(L) !== c.t(L))) break r;
                                O = (O + 1) | 0;
                            } while (F < X);
                        var P = O,
                            V = t.f3(_r(i, r)).f3(d(2)).f3(d(P)).f3(d(1));
                        i.bs(0 | -O), i.bs(g);
                        var D = s,
                            G = (s + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                i.bs(J);
                            } while (D < G);
                        if (((u + 1) | 0) === _) {
                            if (((s + O) | 0) !== n.t(u).s()) {
                                throw k(w("Check failed."));
                            }
                            i.bs(f.t(u));
                        } else {
                            var K = new Br();
                            i.bs(a(-1, V.f3(_r(K, r)).j1())), nr(r, V, K, (s + O) | 0, n, u, _, f), i.cs(K);
                        }
                    }
                }
                function er(r, t, i, s, n, e, _, f, v) {
                    return (t = t === j ? new g(0, 0) : t), (s = s === j ? 0 : s), (e = e === j ? 0 : e), (_ = _ === j ? n.s() : _), nr(r, t, i, s, n, e, _, f);
                }
                function _r(r, t) {
                    return r.wr_1.i3(d(4));
                }
                function fr() {}
                function vr(r, t) {
                    m.call(this), (this.gs_1 = r), (this.hs_1 = t);
                }
                function hr() {
                    return (r = S(u(or))), or.call(r), (r.is_1 = new Int8Array(8192)), (r.ms_1 = !0), (r.ls_1 = !1), r;
                    var r;
                }
                function ar(r, t, i, s, n) {
                    return (function (r, t, i, s, n, e) {
                        return or.call(e), (e.is_1 = r), (e.js_1 = t), (e.ks_1 = i), (e.ls_1 = s), (e.ms_1 = n), e;
                    })(r, t, i, s, n, S(u(or)));
                }
                function ur() {
                    (this.ps_1 = 8192), (this.qs_1 = 1024);
                }
                function or() {
                    (this.js_1 = 0), (this.ks_1 = 0), (this.ls_1 = !1), (this.ms_1 = !1), (this.ns_1 = null), (this.os_1 = null);
                }
                function wr() {
                    return dr(), s;
                }
                function lr(r, t, i, s, n) {
                    dr();
                    var e = 0;
                    if (e < n)
                        do {
                            var _ = e;
                            if (((e = (e + 1) | 0), r[(_ + t) | 0] !== i[(_ + s) | 0])) return !1;
                        } while (e < n);
                    return !0;
                }
                function cr(r, t, i) {
                    if ((dr(), t.t3(i).d1(new g(0, 0)) < 0 || t.d1(r) > 0 || r.g3(t).d1(i) < 0)) throw new Or("size=" + r.toString() + " offset=" + t.toString() + " byteCount=" + i.toString());
                }
                function dr() {
                    n || ((n = !0), new Ar(), (s = -1234567890));
                }
                function kr(r) {
                    var t = new Int8Array(a(4, r.length)),
                        i = 0,
                        s = r.length;
                    if (i < s)
                        do {
                            var n = i;
                            i = (i + 1) | 0;
                            var e = M(r, n);
                            if (B(e, A(128)) >= 0) {
                                for (var _ = n, f = r.length, v = n; v < f; ) {
                                    var h = M(r, v);
                                    if (B(h, A(128)) < 0) {
                                        var u = E(h),
                                            o = _;
                                        for (_ = (o + 1) | 0, t[o] = O(u), v = (v + 1) | 0; v < f && B(M(r, v), A(128)) < 0; ) {
                                            var w = v;
                                            v = (w + 1) | 0;
                                            var l = M(r, w),
                                                c = E(l),
                                                d = _;
                                            (_ = (d + 1) | 0), (t[d] = O(c));
                                        }
                                    } else if (B(h, A(2048)) < 0) {
                                        var k = E(h),
                                            g = _;
                                        (_ = (g + 1) | 0), (t[g] = O((k >> 6) | 192));
                                        var j = E(h),
                                            $ = _;
                                        (_ = ($ + 1) | 0), (t[$] = O((63 & j) | 128)), (v = (v + 1) | 0);
                                    } else if (A(55296) <= h && h <= A(57343)) {
                                        var b;
                                        if (B(h, A(56319)) > 0 || f <= ((v + 1) | 0)) b = !0;
                                        else {
                                            var y = M(r, (v + 1) | 0);
                                            b = !(A(56320) <= y && y <= A(57343));
                                        }
                                        if (b) {
                                            var x = _;
                                            (_ = (x + 1) | 0), (t[x] = 63), (v = (v + 1) | 0);
                                        } else {
                                            var q = E(h) << 10,
                                                m = M(r, (v + 1) | 0),
                                                p = (((q + E(m)) | 0) - 56613888) | 0,
                                                S = _;
                                            (_ = (S + 1) | 0), (t[S] = O((p >> 18) | 240));
                                            var I = _;
                                            (_ = (I + 1) | 0), (t[I] = O(((p >> 12) & 63) | 128));
                                            var z = _;
                                            (_ = (z + 1) | 0), (t[z] = O(((p >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (t[C] = O((63 & p) | 128)), (v = (v + 2) | 0);
                                        }
                                    } else {
                                        var R = E(h),
                                            U = _;
                                        (_ = (U + 1) | 0), (t[U] = O((R >> 12) | 224));
                                        var X = E(h),
                                            L = _;
                                        (_ = (L + 1) | 0), (t[L] = O(((X >> 6) & 63) | 128));
                                        var P = E(h),
                                            V = _;
                                        (_ = (V + 1) | 0), (t[V] = O((63 & P) | 128)), (v = (v + 1) | 0);
                                    }
                                }
                                return F(t, _);
                            }
                            var D = E(e);
                            t[n] = O(D);
                        } while (i < s);
                    return F(t, r.length);
                }
                function gr(r, t, i) {
                    if (((t = t === j ? 0 : t), (i = i === j ? r.length : i), t < 0 || i > r.length || t > i)) throw new Or("size=" + r.length + " beginIndex=" + t + " endIndex=" + i);
                    for (var s = R((i - t) | 0), n = 0, e = t; e < i; ) {
                        var _ = r[e];
                        if (_ >= 0) {
                            var f = n;
                            for (n = (f + 1) | 0, s[f] = U(_), e = (e + 1) | 0; e < i && r[e] >= 0; ) {
                                var v = e;
                                e = (v + 1) | 0;
                                var h = n;
                                (n = (h + 1) | 0), (s[h] = U(r[v]));
                            }
                        } else if (_ >> 5 == -2) {
                            var a,
                                u = e,
                                o = e;
                            if (i <= ((o + 1) | 0)) {
                                var w = n;
                                (n = (w + 1) | 0), (s[w] = U(65533)), (a = 1);
                            } else {
                                var l = r[o],
                                    c = r[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var d = 3968 ^ c ^ (l << 6);
                                    if (d < 128) {
                                        var k = n;
                                        (n = (k + 1) | 0), (s[k] = U(65533));
                                    } else {
                                        var g = n;
                                        (n = (g + 1) | 0), (s[g] = U(d));
                                    }
                                    a = 2;
                                } else {
                                    var $ = n;
                                    (n = ($ + 1) | 0), (s[$] = U(65533)), (a = 1);
                                }
                            }
                            e = (u + a) | 0;
                        } else if (_ >> 4 == -2) {
                            var b,
                                y = e;
                            r: {
                                var x = e;
                                if (i <= ((x + 2) | 0)) {
                                    var q = n;
                                    if (((n = (q + 1) | 0), (s[q] = U(65533)), i <= ((x + 1) | 0) || !(128 == (192 & r[(x + 1) | 0])))) {
                                        b = 1;
                                        break r;
                                    }
                                    b = 2;
                                } else {
                                    var m = r[x],
                                        p = r[(x + 1) | 0];
                                    if (128 == (192 & p)) {
                                        var S = r[(x + 2) | 0];
                                        if (128 == (192 & S)) {
                                            var I = -123008 ^ S ^ (p << 6) ^ (m << 12);
                                            if (I < 2048) {
                                                var z = n;
                                                (n = (z + 1) | 0), (s[z] = U(65533));
                                            } else if (55296 <= I && I <= 57343) {
                                                var C = n;
                                                (n = (C + 1) | 0), (s[C] = U(65533));
                                            } else {
                                                var M = n;
                                                (n = (M + 1) | 0), (s[M] = U(I));
                                            }
                                            b = 3;
                                        } else {
                                            var B = n;
                                            (n = (B + 1) | 0), (s[B] = U(65533)), (b = 2);
                                        }
                                    } else {
                                        var E = n;
                                        (n = (E + 1) | 0), (s[E] = U(65533)), (b = 1);
                                    }
                                }
                            }
                            e = (y + b) | 0;
                        } else if (_ >> 3 == -2) {
                            var O,
                                F = e;
                            r: {
                                var L = e;
                                if (i <= ((L + 3) | 0)) {
                                    var P = n;
                                    if (((n = (P + 1) | 0), (s[P] = A(65533)), i <= ((L + 1) | 0) || !(128 == (192 & r[(L + 1) | 0])))) {
                                        O = 1;
                                        break r;
                                    }
                                    if (i <= ((L + 2) | 0) || !(128 == (192 & r[(L + 2) | 0]))) {
                                        O = 2;
                                        break r;
                                    }
                                    O = 3;
                                } else {
                                    var V = r[L],
                                        D = r[(L + 1) | 0];
                                    if (128 == (192 & D)) {
                                        var G = r[(L + 2) | 0];
                                        if (128 == (192 & G)) {
                                            var H = r[(L + 3) | 0];
                                            if (128 == (192 & H)) {
                                                var J = 3678080 ^ H ^ (G << 6) ^ (D << 12) ^ (V << 18);
                                                if (J > 1114111) {
                                                    var K = n;
                                                    (n = (K + 1) | 0), (s[K] = A(65533));
                                                } else if (55296 <= J && J <= 57343) {
                                                    var N = n;
                                                    (n = (N + 1) | 0), (s[N] = A(65533));
                                                } else if (J < 65536) {
                                                    var Q = n;
                                                    (n = (Q + 1) | 0), (s[Q] = A(65533));
                                                } else if (65533 !== J) {
                                                    var T = n;
                                                    (n = (T + 1) | 0), (s[T] = U((55232 + ((J >>> 10) | 0)) | 0));
                                                    var W = n;
                                                    (n = (W + 1) | 0), (s[W] = U((56320 + (1023 & J)) | 0));
                                                } else {
                                                    var Y = n;
                                                    (n = (Y + 1) | 0), (s[Y] = A(65533));
                                                }
                                                O = 4;
                                            } else {
                                                var Z = n;
                                                (n = (Z + 1) | 0), (s[Z] = A(65533)), (O = 3);
                                            }
                                        } else {
                                            var rr = n;
                                            (n = (rr + 1) | 0), (s[rr] = A(65533)), (O = 2);
                                        }
                                    } else {
                                        var tr = n;
                                        (n = (tr + 1) | 0), (s[tr] = A(65533)), (O = 1);
                                    }
                                }
                            }
                            e = (F + O) | 0;
                        } else {
                            var ir = n;
                            (n = (ir + 1) | 0), (s[ir] = A(65533)), (e = (e + 1) | 0);
                        }
                    }
                    return X(s, 0, n);
                }
                function jr(r, t) {
                    var i, s;
                    if ((yr(), t.d1(new g(0, 0)) > 0)) {
                        var n = t.g3(d(1));
                        s = 13 === r.bt(n);
                    } else s = !1;
                    if (s) {
                        var e = r.ct(t.g3(new g(1, 0)));
                        r.xr(new g(2, 0)), (i = e);
                    } else {
                        var _ = r.ct(t);
                        r.xr(new g(1, 0)), (i = _);
                    }
                    return i;
                }
                function $r(r, t, i) {
                    (i = i !== j && i), yr();
                    var s = r.vr_1;
                    if (null == s) return i ? -2 : -1;
                    var n = s,
                        e = n,
                        _ = n.is_1,
                        f = n.js_1,
                        v = n.ks_1,
                        h = t.hs_1,
                        u = 0,
                        o = -1;
                    r: for (;;) {
                        var w = u;
                        u = (w + 1) | 0;
                        var l = h[w],
                            c = u;
                        u = (c + 1) | 0;
                        var d,
                            k = h[c];
                        if ((-1 !== k && (o = k), null == e)) break r;
                        if (l < 0) {
                            var g = (u + a(-1, l)) | 0;
                            t: for (;;) {
                                var $ = f;
                                f = ($ + 1) | 0;
                                var b = u;
                                if (((u = (b + 1) | 0), (255 & _[$]) !== h[b])) return o;
                                var y = u === g;
                                if (f === v && ((f = (e = I(I(e).ns_1)).js_1), (_ = e.is_1), (v = e.ks_1), e === n)) {
                                    if (!y) break r;
                                    e = null;
                                }
                                if (y) {
                                    d = h[u];
                                    break t;
                                }
                            }
                        } else {
                            var x = l,
                                q = f;
                            f = (q + 1) | 0;
                            var m = 255 & _[q],
                                p = (u + x) | 0;
                            t: for (;;) {
                                if (u === p) return o;
                                if (m === h[u]) {
                                    d = h[(u + x) | 0];
                                    break t;
                                }
                                u = (u + 1) | 0;
                            }
                            f === v && ((f = (e = I(e.ns_1)).js_1), (_ = e.is_1), (v = e.ks_1), e === n && (e = null));
                        }
                        if (d >= 0) return d;
                        u = 0 | -d;
                    }
                    return i ? -2 : o;
                }
                function br(r, t, i, s, n) {
                    yr();
                    for (var e = r, _ = t, f = e.ks_1, v = e.is_1, h = s; h < n; ) {
                        if ((_ === f && ((v = (e = I(e.ns_1)).is_1), (_ = e.js_1), (f = e.ks_1)), v[_] !== i[h])) return !1;
                        (_ = (_ + 1) | 0), (h = (h + 1) | 0);
                    }
                    return !0;
                }
                function yr() {
                    e || ((e = !0), Er("0123456789abcdef"));
                }
                function xr() {
                    return mr(), _;
                }
                function qr(r, t) {
                    return (
                        mr(),
                        (function (r, t) {
                            mr();
                            for (var i = 0, s = 0, n = r.length, e = 0; e < n; ) {
                                var _ = r[e];
                                if (_ >= 0) {
                                    var f,
                                        v = s;
                                    if (((s = (v + 1) | 0), v === t)) return i;
                                    var h = A(10);
                                    if (_ !== E(h)) {
                                        var a = A(13);
                                        f = !(_ === E(a));
                                    } else f = !1;
                                    if ((f && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (i = (i + (_ < 65536 ? 1 : 2)) | 0, e = (e + 1) | 0; e < n && r[e] >= 0; ) {
                                        var u = e;
                                        e = (u + 1) | 0;
                                        var o,
                                            w = r[u],
                                            l = s;
                                        if (((s = (l + 1) | 0), l === t)) return i;
                                        var c = A(10);
                                        if (w !== E(c)) {
                                            var d = A(13);
                                            o = !(w === E(d));
                                        } else o = !1;
                                        if ((o && ((0 <= w && w <= 31) || (127 <= w && w <= 159))) || 65533 === w) return -1;
                                        i = (i + (w < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var k = e,
                                        g = e;
                                    if (n <= ((g + 1) | 0)) {
                                        var j = s;
                                        if (((s = (j + 1) | 0), j === t)) return i;
                                        var $ = A(10);
                                        if (65533 !== E($)) {
                                            var b = A(13);
                                            E(b);
                                        }
                                        return -1;
                                    }
                                    var y = r[g],
                                        x = r[(g + 1) | 0];
                                    if (128 != (192 & x)) {
                                        var q = s;
                                        if (((s = (q + 1) | 0), q === t)) return i;
                                        var m = A(10);
                                        if (65533 !== E(m)) {
                                            var p = A(13);
                                            E(p);
                                        }
                                        return -1;
                                    }
                                    var S = 3968 ^ x ^ (y << 6);
                                    if (S < 128) {
                                        var I = s;
                                        if (((s = (I + 1) | 0), I === t)) return i;
                                        var z = A(10);
                                        if (65533 !== E(z)) {
                                            var C = A(13);
                                            E(C);
                                        }
                                        return -1;
                                    }
                                    var M,
                                        B = s;
                                    if (((s = (B + 1) | 0), B === t)) return i;
                                    var O = A(10);
                                    if (S !== E(O)) {
                                        var F = A(13);
                                        M = !(S === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= S && S <= 31) || (127 <= S && S <= 159))) || 65533 === S) return -1;
                                    (i = (i + (S < 65536 ? 1 : 2)) | 0), (e = (k + 2) | 0);
                                } else if (_ >> 4 == -2) {
                                    var R,
                                        U = e;
                                    r: {
                                        var X = e;
                                        if (n <= ((X + 2) | 0)) {
                                            var L = s;
                                            if (((s = (L + 1) | 0), L === t)) return i;
                                            var P = A(10);
                                            if (65533 !== E(P)) {
                                                var V = A(13);
                                                E(V);
                                            }
                                            return -1;
                                        }
                                        var D = r[X],
                                            G = r[(X + 1) | 0];
                                        if (128 != (192 & G)) {
                                            var H = s;
                                            if (((s = (H + 1) | 0), H === t)) return i;
                                            var J = A(10);
                                            if (65533 !== E(J)) {
                                                var K = A(13);
                                                E(K);
                                            }
                                            return -1;
                                        }
                                        var N = r[(X + 2) | 0];
                                        if (128 != (192 & N)) {
                                            var Q = s;
                                            if (((s = (Q + 1) | 0), Q === t)) return i;
                                            var T = A(10);
                                            if (65533 !== E(T)) {
                                                var W = A(13);
                                                E(W);
                                            }
                                            return -1;
                                        }
                                        var Y = -123008 ^ N ^ (G << 6) ^ (D << 12);
                                        if (Y < 2048) {
                                            var Z = s;
                                            if (((s = (Z + 1) | 0), Z === t)) return i;
                                            var rr = A(10);
                                            if (65533 !== E(rr)) {
                                                var tr = A(13);
                                                E(tr);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= Y && Y <= 57343) {
                                            var ir = s;
                                            if (((s = (ir + 1) | 0), ir === t)) return i;
                                            var sr = A(10);
                                            if (65533 !== E(sr)) {
                                                var nr = A(13);
                                                E(nr);
                                            }
                                            return -1;
                                        }
                                        var er,
                                            _r = s;
                                        if (((s = (_r + 1) | 0), _r === t)) return i;
                                        var fr = A(10);
                                        if (Y !== E(fr)) {
                                            var vr = A(13);
                                            er = !(Y === E(vr));
                                        } else er = !1;
                                        if ((er && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (i = (i + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    e = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var hr = s;
                                        if (((s = (hr + 1) | 0), hr === t)) return i;
                                        var ar = A(10);
                                        if (65533 !== E(ar)) {
                                            var ur = A(13);
                                            E(ur);
                                        }
                                        return -1;
                                    }
                                    var or,
                                        wr = e;
                                    r: {
                                        var lr = e;
                                        if (n <= ((lr + 3) | 0)) {
                                            var cr = s;
                                            if (((s = (cr + 1) | 0), cr === t)) return i;
                                            var dr = A(10);
                                            if (65533 !== E(dr)) {
                                                var kr = A(13);
                                                E(kr);
                                            }
                                            return -1;
                                        }
                                        var gr = r[lr],
                                            jr = r[(lr + 1) | 0];
                                        if (128 != (192 & jr)) {
                                            var $r = s;
                                            if (((s = ($r + 1) | 0), $r === t)) return i;
                                            var br = A(10);
                                            if (65533 !== E(br)) {
                                                var yr = A(13);
                                                E(yr);
                                            }
                                            return -1;
                                        }
                                        var xr = r[(lr + 2) | 0];
                                        if (128 != (192 & xr)) {
                                            var qr = s;
                                            if (((s = (qr + 1) | 0), qr === t)) return i;
                                            var pr = A(10);
                                            if (65533 !== E(pr)) {
                                                var Sr = A(13);
                                                E(Sr);
                                            }
                                            return -1;
                                        }
                                        var Ir = r[(lr + 3) | 0];
                                        if (128 != (192 & Ir)) {
                                            var zr = s;
                                            if (((s = (zr + 1) | 0), zr === t)) return i;
                                            var Cr = A(10);
                                            if (65533 !== E(Cr)) {
                                                var Mr = A(13);
                                                E(Mr);
                                            }
                                            return -1;
                                        }
                                        var Ar = 3678080 ^ Ir ^ (xr << 6) ^ (jr << 12) ^ (gr << 18);
                                        if (Ar > 1114111) {
                                            var Br = s;
                                            if (((s = (Br + 1) | 0), Br === t)) return i;
                                            var Er = A(10);
                                            if (65533 !== E(Er)) {
                                                var Or = A(13);
                                                E(Or);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= Ar && Ar <= 57343) {
                                            var Fr = s;
                                            if (((s = (Fr + 1) | 0), Fr === t)) return i;
                                            var Rr = A(10);
                                            if (65533 !== E(Rr)) {
                                                var Ur = A(13);
                                                E(Ur);
                                            }
                                            return -1;
                                        }
                                        if (Ar < 65536) {
                                            var Xr = s;
                                            if (((s = (Xr + 1) | 0), Xr === t)) return i;
                                            var Lr = A(10);
                                            if (65533 !== E(Lr)) {
                                                var Pr = A(13);
                                                E(Pr);
                                            }
                                            return -1;
                                        }
                                        var Vr,
                                            Dr = s;
                                        if (((s = (Dr + 1) | 0), Dr === t)) return i;
                                        var Gr = A(10);
                                        if (Ar !== E(Gr)) {
                                            var Hr = A(13);
                                            Vr = !(Ar === E(Hr));
                                        } else Vr = !1;
                                        if ((Vr && ((0 <= Ar && Ar <= 31) || (127 <= Ar && Ar <= 159))) || 65533 === Ar) return -1;
                                        (i = (i + (Ar < 65536 ? 1 : 2)) | 0), (or = 4);
                                    }
                                    e = (wr + or) | 0;
                                }
                            }
                            return i;
                        })(r, t)
                    );
                }
                function mr() {
                    f || ((f = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function pr(r, t) {
                    var i = (function (r, t, i, s) {
                        var n = i,
                            e = (s - 1) | 0;
                        for (; n <= e; ) {
                            var _ = (((n + e) | 0) >>> 1) | 0,
                                f = r[_];
                            if (f < t) n = (_ + 1) | 0;
                            else {
                                if (!(f > t)) return _;
                                e = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -n) - 1) | 0;
                    })(r.it_1, (t + 1) | 0, 0, r.ht_1.length);
                    return i >= 0 ? i : ~i;
                }
                function Sr() {
                    v = this;
                    var r = new Int8Array([]);
                    this.jt_1 = new zr(r);
                }
                function Ir() {
                    return null == v && new Sr(), v;
                }
                function zr(r) {
                    Ir(), (this.yr_1 = r), (this.zr_1 = 0), (this.as_1 = null);
                }
                function Cr(r) {
                    return new zr(r.ut());
                }
                function Mr(r, t) {
                    zr.call(this, Ir().jt_1.yr_1), (this.ht_1 = r), (this.it_1 = t);
                }
                function Ar() {
                    (this.zt_1 = null), (this.au_1 = !1), (this.bu_1 = null), (this.cu_1 = new g(-1, -1)), (this.du_1 = null), (this.eu_1 = -1), (this.fu_1 = -1);
                }
                function Br() {
                    (this.vr_1 = null), (this.wr_1 = new g(0, 0));
                }
                function Er(r) {
                    return kr(r);
                }
                function Or(r) {
                    Y(r, this), Z(this, Or);
                }
                function Fr() {
                    var r,
                        t = ((r = S(u(Rr))), Rr.call(r, null), r);
                    return Z(t, Fr), t;
                }
                function Rr(r) {
                    Ur(r, this), Z(this, Rr);
                }
                function Ur(r, t) {
                    return Xr.call(t, r, null), t;
                }
                function Xr(r, t) {
                    tr(r, t, this), Z(this, Xr);
                }
                function Lr(r) {
                    (this.nv_1 = r), (this.ov_1 = !1), (this.pv_1 = new Br());
                }
                function Pr(r) {
                    (this.rv_1 = r), (this.sv_1 = !1), (this.tv_1 = new Br());
                }
                function Vr() {
                    (this.vs_1 = 0), (this.ws_1 = 0);
                }
                o(sr, "BlackholeSink", sr),
                    q(fr),
                    o(vr, "Options", j, m, [m, p]),
                    q(ur),
                    o(or, "Segment", hr),
                    q(Sr),
                    o(zr, "ByteString", j, j, [J]),
                    o(Mr, "SegmentedByteString", j, zr),
                    o(Ar, "UnsafeCursor", Ar),
                    o(Br, "Buffer", Br),
                    o(Or, "ArrayIndexOutOfBoundsException", j, W),
                    o(
                        Xr,
                        "IOException",
                        function r() {
                            var t = ((i = S(u(Xr))), Xr.call(i, null, null), i);
                            var i;
                            return Z(t, r), t;
                        },
                        rr,
                    ),
                    o(Rr, "EOFException", Fr, Xr),
                    o(Lr, "RealBufferedSink"),
                    o(Pr, "RealBufferedSource"),
                    ir(Vr, "SegmentPool"),
                    (u(sr).ur = function (r, t) {
                        return r.xr(t);
                    }),
                    (u(sr).n9 = function () {}),
                    (u(sr).x4 = function () {}),
                    (u(fr).ds = function (r) {
                        if (0 === r.length) {
                            return new vr([], new Int32Array([0, -1]));
                        }
                        var t = $(r);
                        b(t);
                        var i = t.s(),
                            s = y(i),
                            n = 0;
                        if (n < i)
                            do {
                                (n = (n + 1) | 0), s.k(-1);
                            } while (n < i);
                        for (var e = s, _ = 0, f = 0, v = r.length; f < v; ) {
                            var h = r[f];
                            f = (f + 1) | 0;
                            var a = _;
                            _ = (a + 1) | 0;
                            var u = x(t, h);
                            e.i2(u, a);
                        }
                        if (!(t.t(0).s() > 0)) {
                            throw l(w("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < t.s(); ) {
                            var c = t.t(o),
                                d = (o + 1) | 0;
                            r: for (; d < t.s(); ) {
                                var k = t.t(d);
                                if (!k.es(c)) break r;
                                if (k.s() === c.s()) {
                                    var g = "duplicate option: " + k.toString();
                                    throw l(w(g));
                                }
                                e.t(d) > e.t(o) ? (t.k2(d), e.k2(d)) : (d = (d + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var q = new Br();
                        er(this, j, q, j, t, j, j, e);
                        for (var m = 0, p = _r(q).j1(), S = new Int32Array(p); m < p; ) (S[m] = q.fs()), (m = (m + 1) | 0);
                        var I = S;
                        return new vr(r.slice(), I);
                    }),
                    (u(vr).s = function () {
                        return this.gs_1.length;
                    }),
                    (u(vr).t = function (r) {
                        return this.gs_1[r];
                    }),
                    (u(or).rs = function () {
                        return (this.ls_1 = !0), ar(this.is_1, this.js_1, this.ks_1, !0, !1);
                    }),
                    (u(or).ss = function () {
                        var r = this.ns_1 !== this ? this.ns_1 : null;
                        return (I(this.os_1).ns_1 = this.ns_1), (I(this.ns_1).os_1 = this.os_1), (this.ns_1 = null), (this.os_1 = null), r;
                    }),
                    (u(or).ts = function (r) {
                        return (r.os_1 = this), (r.ns_1 = this.ns_1), (I(this.ns_1).os_1 = r), (this.ns_1 = r), r;
                    }),
                    (u(or).us = function (r) {
                        if (!(r > 0 && r <= ((this.ks_1 - this.js_1) | 0))) {
                            throw l(w("byteCount out of range"));
                        }
                        var t;
                        if (r >= 1024) t = this.rs();
                        else {
                            t = h.xs();
                            var i = this.is_1,
                                s = t.is_1,
                                n = this.js_1,
                                e = (this.js_1 + r) | 0;
                            z(i, s, 0, n, e);
                        }
                        return (t.ks_1 = (t.js_1 + r) | 0), (this.js_1 = (this.js_1 + r) | 0), I(this.os_1).ts(t), t;
                    }),
                    (u(or).ys = function () {
                        if (this.os_1 === this) {
                            throw k(w("cannot compact"));
                        }
                        if (!I(this.os_1).ms_1) return c;
                        var r = (this.ks_1 - this.js_1) | 0;
                        if (r > ((((8192 - I(this.os_1).ks_1) | 0) + (I(this.os_1).ls_1 ? 0 : I(this.os_1).js_1)) | 0)) return c;
                        this.zs(I(this.os_1), r), this.ss(), h.at(this);
                    }),
                    (u(or).zs = function (r, t) {
                        if (!r.ms_1) {
                            throw k(w("only owner can write"));
                        }
                        if (((r.ks_1 + t) | 0) > 8192) {
                            if (r.ls_1) throw C();
                            if (((((r.ks_1 + t) | 0) - r.js_1) | 0) > 8192) throw C();
                            var i = r.is_1,
                                s = r.is_1,
                                n = r.js_1,
                                e = r.ks_1;
                            z(i, s, 0, n, e), (r.ks_1 = (r.ks_1 - r.js_1) | 0), (r.js_1 = 0);
                        }
                        var _ = this.is_1,
                            f = r.is_1,
                            v = r.ks_1,
                            h = this.js_1,
                            a = (this.js_1 + t) | 0;
                        z(_, f, v, h, a), (r.ks_1 = (r.ks_1 + t) | 0), (this.js_1 = (this.js_1 + t) | 0);
                    }),
                    (u(Sr).kt = function (r, t, i) {
                        var s = (function (r, t) {
                            return dr(), t === wr() ? r.length : t;
                        })(r, i);
                        return cr(d(r.length), d(t), d(s)), new zr(P(r, t, (t + s) | 0));
                    }),
                    (u(Sr).lt = function (r, t, i, s) {
                        return (t = t === j ? 0 : t), (i = i === j ? wr() : i), s === j ? this.kt(r, t, i) : s.kt.call(this, r, t, i);
                    }),
                    (u(Sr).mt = function (r) {
                        var t = new zr(Er(r));
                        return t.nt(r), t;
                    }),
                    (u(zr).ot = function (r) {}),
                    (u(zr).nt = function (r) {}),
                    (u(zr).pt = function () {
                        var r = this.as_1;
                        return null == r && ((r = gr(this.qt())), this.nt(r)), r;
                    }),
                    (u(zr).rt = function () {
                        for (var r = R(a(this.yr_1.length, 2)), t = 0, i = this.yr_1, s = 0, n = i.length; s < n; ) {
                            var e = i[s];
                            s = (s + 1) | 0;
                            var _ = t;
                            t = (_ + 1) | 0;
                            var f = xr();
                            r[_] = f[(e >> 4) & 15];
                            var v = t;
                            t = (v + 1) | 0;
                            var h = xr();
                            r[v] = h[15 & e];
                        }
                        return V(r);
                    }),
                    (u(zr).st = function (r) {
                        if (r >= this.s() || r < 0) throw new Or("size=" + this.s() + " pos=" + r);
                        return this.yr_1[r];
                    }),
                    (u(zr).t = function (r) {
                        return this.st(r);
                    }),
                    (u(zr).s = function () {
                        return this.tt();
                    }),
                    (u(zr).tt = function () {
                        return this.yr_1.length;
                    }),
                    (u(zr).ut = function () {
                        return this.yr_1.slice();
                    }),
                    (u(zr).qt = function () {
                        return this.yr_1;
                    }),
                    (u(zr).vt = function (r, t, i) {
                        return (function (r, t, i, s) {
                            mr(), t.dt(r.yr_1, i, s);
                        })(this, r, t, i);
                    }),
                    (u(zr).wt = function (r, t, i, s) {
                        return t.xt(i, this.yr_1, r, s);
                    }),
                    (u(zr).xt = function (r, t, i, s) {
                        return r >= 0 && r <= ((this.yr_1.length - s) | 0) && i >= 0 && i <= ((t.length - s) | 0) && lr(this.yr_1, r, t, i, s);
                    }),
                    (u(zr).es = function (r) {
                        return this.wt(0, r, 0, r.s());
                    }),
                    (u(zr).equals = function (r) {
                        return r === this || (r instanceof zr && r.s() === this.yr_1.length && r.xt(0, this.yr_1, 0, this.yr_1.length));
                    }),
                    (u(zr).hashCode = function () {
                        var r,
                            t = this.zr_1;
                        if (0 === t) {
                            var i = D(this.yr_1);
                            this.ot(i), (r = i);
                        } else r = t;
                        return r;
                    }),
                    (u(zr).yt = function (r) {
                        var t;
                        r: {
                            for (var i = this.s(), s = r.s(), n = 0, e = Math.min(i, s); n < e; ) {
                                var _ = 255 & this.t(n),
                                    f = 255 & r.t(n);
                                if (_ !== f) {
                                    t = _ < f ? -1 : 1;
                                    break r;
                                }
                                n = (n + 1) | 0;
                            }
                            i !== s ? (t = i < s ? -1 : 1) : (t = 0);
                        }
                        return t;
                    }),
                    (u(zr).d = function (r) {
                        return this.yt(r instanceof zr ? r : G());
                    }),
                    (u(zr).toString = function () {
                        var r, t, i;
                        if (0 !== this.yr_1.length) {
                            var s = qr(this.yr_1, 64);
                            if (-1 !== s) {
                                var n = this.pt(),
                                    e = n.substring(0, s),
                                    _ = H(H(H(e, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                r = s < n.length ? "[size=" + this.yr_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var f;
                                if (this.yr_1.length <= 64) f = "[hex=" + this.rt() + "]";
                                else {
                                    var v,
                                        h = this.yr_1.length,
                                        a = ((t = this), (i = 64), dr(), i === wr() ? t.s() : i);
                                    if (!(a <= this.yr_1.length)) {
                                        var u = "endIndex > length(" + this.yr_1.length + ")";
                                        throw l(w(u));
                                    }
                                    if (!(((a - 0) | 0) >= 0)) {
                                        throw l(w("endIndex < beginIndex"));
                                    }
                                    a !== this.yr_1.length ? (v = new zr(P(this.yr_1, 0, a))) : (v = this), (f = "[size=" + h + " hex=" + v.rt() + "…]");
                                }
                                r = f;
                            }
                        } else r = "[size=0]";
                        return r;
                    }),
                    (u(Mr).rt = function () {
                        return Cr(this).rt();
                    }),
                    (u(Mr).st = function (r) {
                        cr(d(this.it_1[(this.ht_1.length - 1) | 0]), d(r), new g(1, 0));
                        var t = pr(this, r),
                            i = 0 === t ? 0 : this.it_1[(t - 1) | 0],
                            s = this.it_1[(t + this.ht_1.length) | 0];
                        return this.ht_1[t][(((r - i) | 0) + s) | 0];
                    }),
                    (u(Mr).tt = function () {
                        return this.it_1[(this.ht_1.length - 1) | 0];
                    }),
                    (u(Mr).ut = function () {
                        for (var r = new Int8Array(this.s()), t = 0, i = this.ht_1.length, s = 0, n = 0; s < i; ) {
                            var e = this.it_1[(i + s) | 0],
                                _ = this.it_1[s],
                                f = (_ - n) | 0,
                                v = this.ht_1[s];
                            z(v, r, t, e, (e + f) | 0), (t = (t + f) | 0), (n = _), (s = (s + 1) | 0);
                        }
                        return r;
                    }),
                    (u(Mr).vt = function (r, t, i) {
                        for (var s = (t + i) | 0, n = pr(this, t), e = t; e < s; ) {
                            var _ = 0 === n ? 0 : this.it_1[(n - 1) | 0],
                                f = (this.it_1[n] - _) | 0,
                                v = this.it_1[(this.ht_1.length + n) | 0],
                                h = (_ + f) | 0,
                                a = (Math.min(s, h) - e) | 0,
                                u = (v + ((e - _) | 0)) | 0,
                                o = ar(this.ht_1[n], u, (u + a) | 0, !0, !1);
                            null == r.vr_1 ? ((o.os_1 = o), (o.ns_1 = o.os_1), (r.vr_1 = o.ns_1)) : I(I(r.vr_1).os_1).ts(o), (e = (e + a) | 0), (n = (n + 1) | 0);
                        }
                        return (r.wr_1 = r.wr_1.f3(d(i))), c;
                    }),
                    (u(Mr).wt = function (r, t, i, s) {
                        var n;
                        r: if (r < 0 || r > ((this.s() - s) | 0)) n = !1;
                        else {
                            for (var e = i, _ = (r + s) | 0, f = pr(this, r), v = r; v < _; ) {
                                var h = 0 === f ? 0 : this.it_1[(f - 1) | 0],
                                    a = (this.it_1[f] - h) | 0,
                                    u = this.it_1[(this.ht_1.length + f) | 0],
                                    o = (h + a) | 0,
                                    w = (Math.min(_, o) - v) | 0,
                                    l = (u + ((v - h) | 0)) | 0,
                                    c = this.ht_1[f];
                                if (!t.xt(e, c, l, w)) {
                                    n = !1;
                                    break r;
                                }
                                (e = (e + w) | 0), (v = (v + w) | 0), (f = (f + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mr).xt = function (r, t, i, s) {
                        var n;
                        r: if (r < 0 || r > ((this.s() - s) | 0) || i < 0 || i > ((t.length - s) | 0)) n = !1;
                        else {
                            for (var e = i, _ = (r + s) | 0, f = pr(this, r), v = r; v < _; ) {
                                var h = 0 === f ? 0 : this.it_1[(f - 1) | 0],
                                    a = (this.it_1[f] - h) | 0,
                                    u = this.it_1[(this.ht_1.length + f) | 0],
                                    o = (h + a) | 0,
                                    w = (Math.min(_, o) - v) | 0,
                                    l = (u + ((v - h) | 0)) | 0;
                                if (!lr(this.ht_1[f], l, t, e, w)) {
                                    n = !1;
                                    break r;
                                }
                                (e = (e + w) | 0), (v = (v + w) | 0), (f = (f + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mr).qt = function () {
                        return this.ut();
                    }),
                    (u(Mr).equals = function (r) {
                        return r === this || (r instanceof zr && r.s() === this.s() && this.wt(0, r, 0, this.s()));
                    }),
                    (u(Mr).hashCode = function () {
                        var r,
                            t = this.zr_1;
                        if (0 === t) {
                            t = 1;
                            for (var i = this.ht_1.length, s = 0, n = 0; s < i; ) {
                                for (var e = this.it_1[(i + s) | 0], _ = this.it_1[s], f = this.ht_1[s], v = e, h = (e + ((_ - n) | 0)) | 0; v < h; ) (t = (a(31, t) + f[v]) | 0), (v = (v + 1) | 0);
                                (n = _), (s = (s + 1) | 0);
                            }
                            this.ot(t), (r = t);
                        } else r = t;
                        return r;
                    }),
                    (u(Mr).toString = function () {
                        return Cr(this).toString();
                    }),
                    (u(Ar).x4 = function () {
                        if (null == this.zt_1) {
                            throw k(w("not attached to a buffer"));
                        }
                        (this.zt_1 = null), (this.bu_1 = null), (this.cu_1 = new g(-1, -1)), (this.du_1 = null), (this.eu_1 = -1), (this.fu_1 = -1);
                    }),
                    (u(Br).gu = function () {
                        return this;
                    }),
                    (u(Br).hu = function () {
                        return this.wr_1.equals(new g(0, 0));
                    }),
                    (u(Br).iu = function (r) {
                        if (this.wr_1.d1(r) < 0) throw new Rr(null);
                    }),
                    (u(Br).ju = function (r) {
                        return this.wr_1.d1(r) >= 0;
                    }),
                    (u(Br).ku = function (r, t, i) {
                        var s,
                            n = t,
                            e = i;
                        if ((cr(this.wr_1, n, e), e.equals(new g(0, 0)))) s = this;
                        else {
                            r.wr_1 = r.wr_1.f3(e);
                            for (var _ = this.vr_1; n.d1(d((I(_).ks_1 - _.js_1) | 0)) >= 0; ) (n = n.g3(d((_.ks_1 - _.js_1) | 0))), (_ = _.ns_1);
                            for (; e.d1(new g(0, 0)) > 0; ) {
                                var f = I(_).rs();
                                f.js_1 = (f.js_1 + n.j1()) | 0;
                                var v = f,
                                    h = (f.js_1 + e.j1()) | 0,
                                    a = f.ks_1;
                                (v.ks_1 = Math.min(h, a)), null == r.vr_1 ? ((f.os_1 = f), (f.ns_1 = f.os_1), (r.vr_1 = f.ns_1)) : I(I(r.vr_1).os_1).ts(f), (e = e.g3(d((f.ks_1 - f.js_1) | 0))), (n = new g(0, 0)), (_ = _.ns_1);
                            }
                            s = this;
                        }
                        return s;
                    }),
                    (u(Br).bt = function (r) {
                        var t;
                        cr(this.wr_1, r, new g(1, 0));
                        var i = this.vr_1;
                        if (null != i) {
                            var s = i;
                            if (this.wr_1.g3(r).d1(r) < 0) {
                                for (var n = this.wr_1; n.d1(r) > 0; ) (s = I(s.os_1)), (n = n.g3(d((s.ks_1 - s.js_1) | 0)));
                                var e = s,
                                    _ = n;
                                t = I(e).is_1[K(e.js_1).f3(r).g3(_).j1()];
                            } else {
                                var f = new g(0, 0);
                                r: for (;;) {
                                    var v = f,
                                        h = (s.ks_1 - s.js_1) | 0,
                                        a = v.f3(d(h));
                                    if (a.d1(r) > 0) break r;
                                    (s = I(s.ns_1)), (f = a);
                                }
                                var u = s,
                                    o = f;
                                t = I(u).is_1[K(u.js_1).f3(r).g3(o).j1()];
                            }
                        } else {
                            var w = new g(-1, -1);
                            t = I(null).is_1[K(null.js_1).f3(r).g3(w).j1()];
                        }
                        return t;
                    }),
                    (u(Br).lu = function () {
                        var r,
                            t = this.wr_1;
                        if (t.equals(new g(0, 0))) r = new g(0, 0);
                        else {
                            var i = I(I(this.vr_1).os_1);
                            i.ks_1 < 8192 && i.ms_1 && (t = t.g3(d((i.ks_1 - i.js_1) | 0))), (r = t);
                        }
                        return r;
                    }),
                    (u(Br).mu = function () {
                        if (this.wr_1.equals(new g(0, 0))) throw Fr();
                        var r = I(this.vr_1),
                            t = r.js_1,
                            i = r.ks_1,
                            s = t;
                        t = (s + 1) | 0;
                        var n = r.is_1[s];
                        return (this.wr_1 = this.wr_1.g3(new g(1, 0))), t === i ? ((this.vr_1 = r.ss()), h.at(r)) : (r.js_1 = t), n;
                    }),
                    (u(Br).fs = function () {
                        var r;
                        if (this.wr_1.d1(new g(4, 0)) < 0) throw Fr();
                        var t = I(this.vr_1),
                            i = t.js_1,
                            s = t.ks_1;
                        if (d((s - i) | 0).d1(new g(4, 0)) < 0) {
                            r = ((255 & this.mu()) << 24) | ((255 & this.mu()) << 16) | ((255 & this.mu()) << 8) | (255 & this.mu());
                        } else {
                            var n = t.is_1,
                                e = i,
                                _ = (i = (e + 1) | 0),
                                f = (i = (_ + 1) | 0),
                                v = (i = (f + 1) | 0);
                            i = (v + 1) | 0;
                            var a = ((255 & n[e]) << 24) | ((255 & n[_]) << 16) | ((255 & n[f]) << 8) | (255 & n[v]);
                            (this.wr_1 = this.wr_1.g3(new g(4, 0))), i === s ? ((this.vr_1 = t.ss()), h.at(t)) : (t.js_1 = i), (r = a);
                        }
                        return r;
                    }),
                    (u(Br).nu = function () {
                        return this.ou(this.wr_1);
                    }),
                    (u(Br).ou = function (r) {
                        var t;
                        if (!(r.d1(new g(0, 0)) >= 0 && r.d1(new g(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + r.toString();
                            throw l(w(i));
                        }
                        if (this.wr_1.d1(r) < 0) throw Fr();
                        if (r.d1(new g(4096, 0)) >= 0) {
                            var s = this.qu(r.j1());
                            this.xr(r), (t = s);
                        } else t = new zr(this.pu(r));
                        return t;
                    }),
                    (u(Br).ru = function () {
                        return this.ct(this.wr_1);
                    }),
                    (u(Br).ct = function (r) {
                        var t;
                        if (!(r.d1(new g(0, 0)) >= 0 && r.d1(new g(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + r.toString();
                            throw l(w(i));
                        }
                        if (this.wr_1.d1(r) < 0) throw Fr();
                        if (r.equals(new g(0, 0))) t = "";
                        else {
                            var s = I(this.vr_1);
                            if (K(s.js_1).f3(r).d1(d(s.ks_1)) > 0) t = gr(this.pu(r));
                            else {
                                var n = gr(s.is_1, s.js_1, (s.js_1 + r.j1()) | 0);
                                (s.js_1 = (s.js_1 + r.j1()) | 0), (this.wr_1 = this.wr_1.g3(r)), s.js_1 === s.ks_1 && ((this.vr_1 = s.ss()), h.at(s)), (t = n);
                            }
                        }
                        return t;
                    }),
                    (u(Br).su = function () {
                        return this.tu(new g(-1, 2147483647));
                    }),
                    (u(Br).tu = function (r) {
                        var t;
                        if (!(r.d1(new g(0, 0)) >= 0)) {
                            var i = "limit < 0: " + r.toString();
                            throw l(w(i));
                        }
                        var s = r.equals(new g(-1, 2147483647)) ? new g(-1, 2147483647) : r.f3(new g(1, 0)),
                            n = this.uu(10, new g(0, 0), s);
                        if (n.equals(new g(-1, -1))) {
                            var e;
                            if (s.d1(this.wr_1) < 0) {
                                var _ = s.g3(d(1));
                                e = 13 === this.bt(_);
                            } else e = !1;
                            if (!(!!e && 10 === this.bt(s))) {
                                var f = new Br(),
                                    v = new g(0, 0),
                                    h = this.wr_1,
                                    a = d(32),
                                    u = a.d1(h) <= 0 ? a : h;
                                this.ku(f, v, u);
                                var o = this.wr_1;
                                throw new Rr("\\n not found: limit=" + (o.d1(r) <= 0 ? o : r).toString() + " content=" + f.nu().rt() + "…");
                            }
                            t = jr(this, s);
                        } else t = jr(this, n);
                        return t;
                    }),
                    (u(Br).vu = function (r) {
                        var t,
                            i = $r(this, r);
                        if (-1 !== i) {
                            var s = r.gs_1[i].s();
                            this.xr(d(s)), (t = i);
                        } else t = -1;
                        return t;
                    }),
                    (u(Br).wu = function () {
                        return this.pu(this.wr_1);
                    }),
                    (u(Br).pu = function (r) {
                        if (!(r.d1(new g(0, 0)) >= 0 && r.d1(new g(2147483647, 0)) <= 0)) {
                            var t = "byteCount: " + r.toString();
                            throw l(w(t));
                        }
                        if (this.wr_1.d1(r) < 0) throw Fr();
                        var i = new Int8Array(r.j1());
                        return this.xu(i), i;
                    }),
                    (u(Br).xu = function (r) {
                        for (var t = 0; t < r.length; ) {
                            var i = this.yu(r, t, (r.length - t) | 0);
                            if (-1 === i) throw Fr();
                            t = (t + i) | 0;
                        }
                        return c;
                    }),
                    (u(Br).yu = function (r, t, i) {
                        var s;
                        cr(d(r.length), d(t), d(i));
                        var n = this.vr_1;
                        if (null != n) {
                            var e = n,
                                _ = (e.ks_1 - e.js_1) | 0,
                                f = Math.min(i, _),
                                v = e.is_1,
                                a = e.js_1,
                                u = (e.js_1 + f) | 0;
                            z(v, r, t, a, u), (e.js_1 = (e.js_1 + f) | 0), (this.wr_1 = this.wr_1.g3(d(f))), e.js_1 === e.ks_1 && ((this.vr_1 = e.ss()), h.at(e)), (s = f);
                        } else s = -1;
                        return s;
                    }),
                    (u(Br).h2 = function () {
                        return this.xr(this.wr_1), c;
                    }),
                    (u(Br).xr = function (r) {
                        for (var t = r; t.d1(new g(0, 0)) > 0; ) {
                            var i = this.vr_1;
                            if (null == i) throw Fr();
                            var s = i,
                                n = t,
                                e = (s.ks_1 - s.js_1) | 0,
                                _ = d(e),
                                f = (n.d1(_) <= 0 ? n : _).j1();
                            (this.wr_1 = this.wr_1.g3(d(f))), (t = t.g3(d(f))), (s.js_1 = (s.js_1 + f) | 0), s.js_1 === s.ks_1 && ((this.vr_1 = s.ss()), h.at(s));
                        }
                        return c;
                    }),
                    (u(Br).zu = function (r) {
                        var t = r.s();
                        return r.vt(this, 0, t), this;
                    }),
                    (u(Br).av = function (r) {
                        var t;
                        if (!(r >= 1 && r <= 8192)) {
                            throw l(w("unexpected capacity"));
                        }
                        if (null != this.vr_1) {
                            var i = I(this.vr_1).os_1;
                            (((I(i).ks_1 + r) | 0) > 8192 || !i.ms_1) && (i = i.ts(h.xs())), (t = i);
                        } else {
                            var s = h.xs();
                            (this.vr_1 = s), (s.os_1 = s), (s.ns_1 = s), (t = s);
                        }
                        return t;
                    }),
                    (u(Br).bv = function (r) {
                        return this.cv(r, 0, r.length);
                    }),
                    (u(Br).cv = function (r, t, i) {
                        if (!(t >= 0)) throw l(w("beginIndex < 0: " + t));
                        if (!(i >= t)) throw l(w("endIndex < beginIndex: " + i + " < " + t));
                        if (!(i <= r.length)) {
                            var s = "endIndex > string.length: " + i + " > " + r.length;
                            throw l(w(s));
                        }
                        for (var n = t; n < i; ) {
                            var e = M(r, n),
                                _ = E(e);
                            if (_ < 128) {
                                var f = this.av(1),
                                    v = f.is_1,
                                    h = (f.ks_1 - n) | 0,
                                    a = (8192 - h) | 0,
                                    u = Math.min(i, a),
                                    o = n;
                                (n = (o + 1) | 0), (v[(h + o) | 0] = O(_));
                                r: for (; n < u; ) {
                                    var c = M(r, n);
                                    if ((_ = E(c)) >= 128) break r;
                                    var k = n;
                                    (n = (k + 1) | 0), (v[(h + k) | 0] = O(_));
                                }
                                var j = (((n + h) | 0) - f.ks_1) | 0;
                                (f.ks_1 = (f.ks_1 + j) | 0), (this.wr_1 = this.wr_1.f3(d(j)));
                            } else if (_ < 2048) {
                                var $ = this.av(2);
                                ($.is_1[$.ks_1] = O((_ >> 6) | 192)), ($.is_1[($.ks_1 + 1) | 0] = O((63 & _) | 128)), ($.ks_1 = ($.ks_1 + 2) | 0), (this.wr_1 = this.wr_1.f3(new g(2, 0))), (n = (n + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var b = this.av(3);
                                (b.is_1[b.ks_1] = O((_ >> 12) | 224)), (b.is_1[(b.ks_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (b.is_1[(b.ks_1 + 2) | 0] = O((63 & _) | 128)), (b.ks_1 = (b.ks_1 + 3) | 0), (this.wr_1 = this.wr_1.f3(new g(3, 0))), (n = (n + 1) | 0);
                            } else {
                                var y;
                                if (((n + 1) | 0) < i) {
                                    var x = M(r, (n + 1) | 0);
                                    y = E(x);
                                } else y = 0;
                                var q = y;
                                if (_ > 56319 || !(56320 <= q && q <= 57343)) {
                                    var m = A(63),
                                        p = E(m);
                                    this.dv(p), (n = (n + 1) | 0);
                                } else {
                                    var S = (65536 + (((1023 & _) << 10) | (1023 & q))) | 0,
                                        I = this.av(4);
                                    (I.is_1[I.ks_1] = O((S >> 18) | 240)), (I.is_1[(I.ks_1 + 1) | 0] = O(((S >> 12) & 63) | 128)), (I.is_1[(I.ks_1 + 2) | 0] = O(((S >> 6) & 63) | 128)), (I.is_1[(I.ks_1 + 3) | 0] = O((63 & S) | 128)), (I.ks_1 = (I.ks_1 + 4) | 0), (this.wr_1 = this.wr_1.f3(new g(4, 0))), (n = (n + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (u(Br).ev = function (r) {
                        return this.dt(r, 0, r.length);
                    }),
                    (u(Br).dt = function (r, t, i) {
                        var s = t;
                        cr(d(r.length), d(s), d(i));
                        for (var n = (s + i) | 0; s < n; ) {
                            var e = this.av(1),
                                _ = (n - s) | 0,
                                f = (8192 - e.ks_1) | 0,
                                v = Math.min(_, f),
                                h = e.is_1,
                                a = e.ks_1;
                            z(r, h, a, s, (s + v) | 0), (s = (s + v) | 0), (e.ks_1 = (e.ks_1 + v) | 0);
                        }
                        return (this.wr_1 = this.wr_1.f3(d(i))), this;
                    }),
                    (u(Br).cs = function (r) {
                        var t = new g(0, 0);
                        r: for (;;) {
                            var i = r.fv(this, new g(8192, 0));
                            if (i.equals(new g(-1, -1))) break r;
                            t = t.f3(i);
                        }
                        return t;
                    }),
                    (u(Br).dv = function (r) {
                        var t = this.av(1),
                            i = t.ks_1;
                        return (t.ks_1 = (i + 1) | 0), (t.is_1[i] = O(r)), (this.wr_1 = this.wr_1.f3(new g(1, 0))), this;
                    }),
                    (u(Br).bs = function (r) {
                        var t = this.av(4),
                            i = t.is_1,
                            s = t.ks_1,
                            n = s;
                        (s = (n + 1) | 0), (i[n] = O((r >>> 24) & 255));
                        var e = s;
                        (s = (e + 1) | 0), (i[e] = O((r >>> 16) & 255));
                        var _ = s;
                        (s = (_ + 1) | 0), (i[_] = O((r >>> 8) & 255));
                        var f = s;
                        return (s = (f + 1) | 0), (i[f] = O(255 & r)), (t.ks_1 = s), (this.wr_1 = this.wr_1.f3(new g(4, 0))), this;
                    }),
                    (u(Br).ur = function (r, t) {
                        var i;
                        r: {
                            var s = t;
                            if (r === this) {
                                throw l(w("source == this"));
                            }
                            for (cr(r.wr_1, new g(0, 0), s); s.d1(new g(0, 0)) > 0; ) {
                                if (s.d1(d((I(r.vr_1).ks_1 - I(r.vr_1).js_1) | 0)) < 0) {
                                    var n,
                                        e = null != this.vr_1 ? I(this.vr_1).os_1 : null;
                                    if (null != e && e.ms_1) {
                                        var _ = s,
                                            f = e.ks_1,
                                            v = _.f3(d(f)),
                                            h = e.ls_1 ? 0 : e.js_1;
                                        n = v.g3(d(h)).d1(new g(8192, 0)) <= 0;
                                    } else n = !1;
                                    if (n) {
                                        I(r.vr_1).zs(e, s.j1()), (r.wr_1 = r.wr_1.g3(s)), (this.wr_1 = this.wr_1.f3(s)), (i = c);
                                        break r;
                                    }
                                    r.vr_1 = I(r.vr_1).us(s.j1());
                                }
                                var a = r.vr_1,
                                    u = d((I(a).ks_1 - a.js_1) | 0);
                                if (((r.vr_1 = a.ss()), null == this.vr_1)) (this.vr_1 = a), (a.os_1 = a), (a.ns_1 = a.os_1);
                                else {
                                    var o = I(this.vr_1).os_1;
                                    (o = I(o).ts(a)).ys();
                                }
                                (r.wr_1 = r.wr_1.g3(u)), (this.wr_1 = this.wr_1.f3(u)), (s = s.g3(u));
                            }
                        }
                        return i;
                    }),
                    (u(Br).fv = function (r, t) {
                        var i,
                            s = t;
                        if (!(s.d1(new g(0, 0)) >= 0)) {
                            var n = "byteCount < 0: " + s.toString();
                            throw l(w(n));
                        }
                        return this.wr_1.equals(new g(0, 0)) ? (i = new g(-1, -1)) : (s.d1(this.wr_1) > 0 && (s = this.wr_1), r.ur(this, s), (i = s)), i;
                    }),
                    (u(Br).uu = function (r, t, i) {
                        var s;
                        r: {
                            var n = t,
                                e = i;
                            if (!(new g(0, 0).d1(n) <= 0 && n.d1(e) <= 0)) {
                                var _ = "size=" + this.wr_1.toString() + " fromIndex=" + n.toString() + " toIndex=" + e.toString();
                                throw l(w(_));
                            }
                            if ((e.d1(this.wr_1) > 0 && (e = this.wr_1), n.equals(e))) s = new g(-1, -1);
                            else {
                                var f = n,
                                    v = this.vr_1;
                                if (null != v) {
                                    var h = v;
                                    if (this.wr_1.g3(f).d1(f) < 0) {
                                        for (var a = this.wr_1; a.d1(f) > 0; ) (h = I(h.os_1)), (a = a.g3(d((h.ks_1 - h.js_1) | 0)));
                                        var u = h,
                                            o = a;
                                        if (null == u) {
                                            s = new g(-1, -1);
                                            break r;
                                        }
                                        for (var c = u, k = o; k.d1(e) < 0; ) {
                                            for (var j = c.is_1, $ = d(c.ks_1), b = K(c.js_1).f3(e).g3(k), y = ($.d1(b) <= 0 ? $ : b).j1(), x = K(c.js_1).f3(n).g3(k).j1(); x < y; ) {
                                                if (j[x] === r) {
                                                    s = K((x - c.js_1) | 0).f3(k);
                                                    break r;
                                                }
                                                x = (x + 1) | 0;
                                            }
                                            (n = k = k.f3(d((c.ks_1 - c.js_1) | 0))), (c = I(c.ns_1));
                                        }
                                        s = new g(-1, -1);
                                    } else {
                                        var q = new g(0, 0);
                                        t: for (;;) {
                                            var m = q,
                                                p = (h.ks_1 - h.js_1) | 0,
                                                S = m.f3(d(p));
                                            if (S.d1(f) > 0) break t;
                                            (h = I(h.ns_1)), (q = S);
                                        }
                                        if (null != h) {
                                            for (var z = h, C = q; C.d1(e) < 0; ) {
                                                for (var M = z.is_1, A = d(z.ks_1), B = K(z.js_1).f3(e).g3(C), E = (A.d1(B) <= 0 ? A : B).j1(), O = K(z.js_1).f3(n).g3(C).j1(); O < E; ) {
                                                    if (M[O] === r) {
                                                        s = K((O - z.js_1) | 0).f3(C);
                                                        break r;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (n = C = C.f3(d((z.ks_1 - z.js_1) | 0))), (z = I(z.ns_1));
                                            }
                                            s = new g(-1, -1);
                                        } else s = new g(-1, -1);
                                    }
                                } else {
                                    new g(-1, -1);
                                    s = new g(-1, -1);
                                }
                            }
                        }
                        return s;
                    }),
                    (u(Br).gv = function (r) {
                        return this.hv(r, new g(0, 0));
                    }),
                    (u(Br).hv = function (r, t) {
                        var i;
                        r: {
                            var s = t;
                            if (!(r.s() > 0)) {
                                throw l(w("bytes is empty"));
                            }
                            if (!(s.d1(new g(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + s.toString();
                                throw l(w(n));
                            }
                            var e = s,
                                _ = this.vr_1;
                            if (null != _) {
                                var f = _;
                                if (this.wr_1.g3(e).d1(e) < 0) {
                                    for (var v = this.wr_1; v.d1(e) > 0; ) (f = I(f.os_1)), (v = v.g3(d((f.ks_1 - f.js_1) | 0)));
                                    var h = f,
                                        a = v;
                                    if (null == h) {
                                        i = new g(-1, -1);
                                        break r;
                                    }
                                    for (var u = h, o = a, c = r.qt(), k = c[0], j = r.s(), $ = this.wr_1.g3(d(j)).f3(new g(1, 0)); o.d1($) < 0; ) {
                                        var b = u.is_1,
                                            y = u.ks_1,
                                            x = K(u.js_1).f3($).g3(o),
                                            q = d(y),
                                            m = (q.d1(x) <= 0 ? q : x).j1(),
                                            p = K(u.js_1).f3(s).g3(o).j1();
                                        if (p < m)
                                            do {
                                                var S = p;
                                                if (((p = (p + 1) | 0), b[S] === k && br(u, (S + 1) | 0, c, 1, j))) {
                                                    i = K((S - u.js_1) | 0).f3(o);
                                                    break r;
                                                }
                                            } while (p < m);
                                        (s = o = o.f3(d((u.ks_1 - u.js_1) | 0))), (u = I(u.ns_1));
                                    }
                                    i = new g(-1, -1);
                                } else {
                                    var z = new g(0, 0);
                                    t: for (;;) {
                                        var C = z,
                                            M = (f.ks_1 - f.js_1) | 0,
                                            A = C.f3(d(M));
                                        if (A.d1(e) > 0) break t;
                                        (f = I(f.ns_1)), (z = A);
                                    }
                                    if (null != f) {
                                        for (var B = f, E = z, O = r.qt(), F = O[0], R = r.s(), U = this.wr_1.g3(d(R)).f3(new g(1, 0)); E.d1(U) < 0; ) {
                                            var X = B.is_1,
                                                L = B.ks_1,
                                                P = K(B.js_1).f3(U).g3(E),
                                                V = d(L),
                                                D = (V.d1(P) <= 0 ? V : P).j1(),
                                                G = K(B.js_1).f3(s).g3(E).j1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && br(B, (H + 1) | 0, O, 1, R))) {
                                                        i = K((H - B.js_1) | 0).f3(E);
                                                        break r;
                                                    }
                                                } while (G < D);
                                            (s = E = E.f3(d((B.ks_1 - B.js_1) | 0))), (B = I(B.ns_1));
                                        }
                                        i = new g(-1, -1);
                                    } else i = new g(-1, -1);
                                }
                            } else {
                                new g(-1, -1);
                                i = new g(-1, -1);
                            }
                        }
                        return i;
                    }),
                    (u(Br).iv = function (r) {
                        return this.jv(r, new g(0, 0));
                    }),
                    (u(Br).jv = function (r, t) {
                        var i;
                        r: {
                            var s = t;
                            if (!(s.d1(new g(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + s.toString();
                                throw l(w(n));
                            }
                            var e = s,
                                _ = this.vr_1;
                            if (null != _) {
                                var f = _;
                                if (this.wr_1.g3(e).d1(e) < 0) {
                                    for (var v = this.wr_1; v.d1(e) > 0; ) (f = I(f.os_1)), (v = v.g3(d((f.ks_1 - f.js_1) | 0)));
                                    var h = f,
                                        a = v;
                                    if (null == h) {
                                        i = new g(-1, -1);
                                        break r;
                                    }
                                    var u = h,
                                        o = a;
                                    if (2 === r.s())
                                        for (var c = r.t(0), k = r.t(1); o.d1(this.wr_1) < 0; ) {
                                            for (var j = u.is_1, $ = K(u.js_1).f3(s).g3(o).j1(), b = u.ks_1; $ < b; ) {
                                                var y = j[$];
                                                if (y === c || y === k) {
                                                    i = K(($ - u.js_1) | 0).f3(o);
                                                    break r;
                                                }
                                                $ = ($ + 1) | 0;
                                            }
                                            (s = o = o.f3(d((u.ks_1 - u.js_1) | 0))), (u = I(u.ns_1));
                                        }
                                    else
                                        for (var x = r.qt(); o.d1(this.wr_1) < 0; ) {
                                            for (var q = u.is_1, m = K(u.js_1).f3(s).g3(o).j1(), p = u.ks_1; m < p; ) {
                                                for (var S = q[m], z = 0, C = x.length; z < C; ) {
                                                    var M = x[z];
                                                    if (((z = (z + 1) | 0), S === M)) {
                                                        i = K((m - u.js_1) | 0).f3(o);
                                                        break r;
                                                    }
                                                }
                                                m = (m + 1) | 0;
                                            }
                                            (s = o = o.f3(d((u.ks_1 - u.js_1) | 0))), (u = I(u.ns_1));
                                        }
                                    i = new g(-1, -1);
                                } else {
                                    var A = new g(0, 0);
                                    t: for (;;) {
                                        var B = A,
                                            E = (f.ks_1 - f.js_1) | 0,
                                            O = B.f3(d(E));
                                        if (O.d1(e) > 0) break t;
                                        (f = I(f.ns_1)), (A = O);
                                    }
                                    if (null != f) {
                                        var F = f,
                                            R = A;
                                        if (2 === r.s())
                                            for (var U = r.t(0), X = r.t(1); R.d1(this.wr_1) < 0; ) {
                                                for (var L = F.is_1, P = K(F.js_1).f3(s).g3(R).j1(), V = F.ks_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        i = K((P - F.js_1) | 0).f3(R);
                                                        break r;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (s = R = R.f3(d((F.ks_1 - F.js_1) | 0))), (F = I(F.ns_1));
                                            }
                                        else
                                            for (var G = r.qt(); R.d1(this.wr_1) < 0; ) {
                                                for (var H = F.is_1, J = K(F.js_1).f3(s).g3(R).j1(), N = F.ks_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            i = K((J - F.js_1) | 0).f3(R);
                                                            break r;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (s = R = R.f3(d((F.ks_1 - F.js_1) | 0))), (F = I(F.ns_1));
                                            }
                                        i = new g(-1, -1);
                                    } else i = new g(-1, -1);
                                }
                            } else {
                                new g(-1, -1);
                                i = new g(-1, -1);
                            }
                        }
                        return i;
                    }),
                    (u(Br).kv = function (r, t) {
                        return this.lv(r, t, 0, t.s());
                    }),
                    (u(Br).lv = function (r, t, i, s) {
                        var n;
                        r: if (r.d1(new g(0, 0)) < 0 || i < 0 || s < 0 || this.wr_1.g3(r).d1(d(s)) < 0 || ((t.s() - i) | 0) < s) n = !1;
                        else {
                            var e = 0;
                            if (e < s)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var f = r.f3(d(_));
                                    if (this.bt(f) !== t.t((i + _) | 0)) {
                                        n = !1;
                                        break r;
                                    }
                                } while (e < s);
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Br).n9 = function () {
                        return c;
                    }),
                    (u(Br).x4 = function () {
                        return c;
                    }),
                    (u(Br).equals = function (r) {
                        var t;
                        r: if (this !== r)
                            if (r instanceof Br)
                                if (this.wr_1.equals(r.wr_1))
                                    if (this.wr_1.equals(new g(0, 0))) t = !0;
                                    else {
                                        for (var i, s = I(this.vr_1), n = I(r.vr_1), e = s.js_1, _ = n.js_1, f = new g(0, 0); f.d1(this.wr_1) < 0; ) {
                                            var v = (s.ks_1 - e) | 0,
                                                h = (n.ks_1 - _) | 0,
                                                a = Math.min(v, h);
                                            i = d(a);
                                            var u = new g(0, 0);
                                            if (u.d1(i) < 0)
                                                do {
                                                    u = u.f3(new g(1, 0));
                                                    var o = e;
                                                    e = (o + 1) | 0;
                                                    var w = _;
                                                    if (((_ = (w + 1) | 0), s.is_1[o] !== n.is_1[w])) {
                                                        t = !1;
                                                        break r;
                                                    }
                                                } while (u.d1(i) < 0);
                                            e === s.ks_1 && (e = (s = I(s.ns_1)).js_1), _ === n.ks_1 && (_ = (n = I(n.ns_1)).js_1), (f = f.f3(i));
                                        }
                                        t = !0;
                                    }
                                else t = !1;
                            else t = !1;
                        else t = !0;
                        return t;
                    }),
                    (u(Br).hashCode = function () {
                        var r,
                            t = this.vr_1;
                        if (null != t) {
                            var i = t,
                                s = 1;
                            do {
                                for (var n = i.js_1, e = i.ks_1; n < e; ) (s = (a(31, s) + i.is_1[n]) | 0), (n = (n + 1) | 0);
                                i = I(i.ns_1);
                            } while (i !== this.vr_1);
                            r = s;
                        } else r = 0;
                        return r;
                    }),
                    (u(Br).toString = function () {
                        return this.mv().toString();
                    }),
                    (u(Br).mv = function () {
                        if (!(this.wr_1.d1(new g(2147483647, 0)) <= 0)) {
                            var r = "size > Int.MAX_VALUE: " + this.wr_1.toString();
                            throw k(w(r));
                        }
                        return this.qu(this.wr_1.j1());
                    }),
                    (u(Br).qu = function (r) {
                        var t;
                        if (0 !== r) {
                            cr(this.wr_1, new g(0, 0), d(r));
                            for (var i = 0, s = 0, n = this.vr_1; i < r; ) {
                                if (I(n).ks_1 === n.js_1) throw N("s.limit == s.pos");
                                (i = (i + ((n.ks_1 - n.js_1) | 0)) | 0), (s = (s + 1) | 0), (n = n.ns_1);
                            }
                            var e = Q(Array(s), null),
                                _ = new Int32Array(a(s, 2));
                            for (i = 0, s = 0, n = this.vr_1; i < r; ) {
                                e[s] = I(n).is_1;
                                var f = (i = (i + ((n.ks_1 - n.js_1) | 0)) | 0);
                                (_[s] = Math.min(f, r)), (_[(s + e.length) | 0] = n.js_1), (n.ls_1 = !0), (s = (s + 1) | 0), (n = n.ns_1);
                            }
                            t = new Mr(T(e) ? e : G(), _);
                        } else t = Ir().jt_1;
                        return t;
                    }),
                    (u(Lr).ur = function (r, t) {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.ur(r, t), this.qv(), c;
                    }),
                    (u(Lr).zu = function (r) {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.zu(r), this.qv();
                    }),
                    (u(Lr).bv = function (r) {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.bv(r), this.qv();
                    }),
                    (u(Lr).cv = function (r, t, i) {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.cv(r, t, i), this.qv();
                    }),
                    (u(Lr).dv = function (r) {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.dv(r), this.qv();
                    }),
                    (u(Lr).qv = function () {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        var r = this.pv_1.lu();
                        return r.d1(new g(0, 0)) > 0 && this.nv_1.ur(this.pv_1, r), this;
                    }),
                    (u(Lr).n9 = function () {
                        if (this.ov_1) {
                            throw k(w("closed"));
                        }
                        return this.pv_1.wr_1.d1(new g(0, 0)) > 0 && this.nv_1.ur(this.pv_1, this.pv_1.wr_1), this.nv_1.n9(), c;
                    }),
                    (u(Lr).x4 = function () {
                        var r;
                        if (this.ov_1) r = c;
                        else {
                            var t = null;
                            try {
                                this.pv_1.wr_1.d1(new g(0, 0)) > 0 && this.nv_1.ur(this.pv_1, this.pv_1.wr_1);
                            } catch (r) {
                                if (!(r instanceof Error)) throw r;
                                t = r;
                            }
                            try {
                                this.nv_1.x4();
                            } catch (r) {
                                if (!(r instanceof Error)) throw r;
                                null == t && (t = r);
                            }
                            if (((this.ov_1 = !0), null != t)) throw t;
                        }
                        return r;
                    }),
                    (u(Lr).toString = function () {
                        return "buffer(" + w(this.nv_1) + ")";
                    }),
                    (u(Pr).gu = function () {
                        return this.tv_1;
                    }),
                    (u(Pr).fv = function (r, t) {
                        var i;
                        r: {
                            if (!(t.d1(new g(0, 0)) >= 0)) {
                                var s = "byteCount < 0: " + t.toString();
                                throw l(w(s));
                            }
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            if (this.tv_1.wr_1.equals(new g(0, 0))) {
                                if (t.equals(new g(0, 0))) {
                                    i = new g(0, 0);
                                    break r;
                                }
                                if (this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    i = new g(-1, -1);
                                    break r;
                                }
                            }
                            var n = this.tv_1.wr_1,
                                e = t.d1(n) <= 0 ? t : n;
                            i = this.tv_1.fv(r, e);
                        }
                        return i;
                    }),
                    (u(Pr).hu = function () {
                        if (this.sv_1) {
                            throw k(w("closed"));
                        }
                        return this.tv_1.hu() && this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1));
                    }),
                    (u(Pr).iu = function (r) {
                        if (!this.ju(r)) throw Fr();
                    }),
                    (u(Pr).ju = function (r) {
                        var t;
                        r: {
                            if (!(r.d1(new g(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + r.toString();
                                throw l(w(i));
                            }
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            for (; this.tv_1.wr_1.d1(r) < 0; )
                                if (this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    t = !1;
                                    break r;
                                }
                            t = !0;
                        }
                        return t;
                    }),
                    (u(Pr).vu = function (r) {
                        var t;
                        r: {
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            for (;;) {
                                var i = $r(this.tv_1, r, !0);
                                switch (i) {
                                    case -1:
                                        t = -1;
                                        break r;
                                    case -2:
                                        if (this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                            t = -1;
                                            break r;
                                        }
                                        break;
                                    default:
                                        var s = r.gs_1[i].s();
                                        this.tv_1.xr(d(s)), (t = i);
                                        break r;
                                }
                            }
                        }
                        return t;
                    }),
                    (u(Pr).su = function () {
                        return this.tu(new g(-1, 2147483647));
                    }),
                    (u(Pr).tu = function (r) {
                        var t;
                        if (!(r.d1(new g(0, 0)) >= 0)) {
                            var i = "limit < 0: " + r.toString();
                            throw l(w(i));
                        }
                        var s = r.equals(new g(-1, 2147483647)) ? new g(-1, 2147483647) : r.f3(d(1)),
                            n = this.uu(10, new g(0, 0), s);
                        if (n.equals(new g(-1, -1))) {
                            var e, _;
                            if (s.d1(new g(-1, 2147483647)) < 0 && this.ju(s)) {
                                var f = s.g3(d(1));
                                _ = 13 === this.tv_1.bt(f);
                            } else _ = !1;
                            if (_) {
                                var v = s.f3(d(1));
                                e = this.ju(v);
                            } else e = !1;
                            if (!(!!e && 10 === this.tv_1.bt(s))) {
                                var h = new Br(),
                                    a = new g(0, 0),
                                    u = this.tv_1.wr_1,
                                    o = d(32),
                                    c = o.d1(u) <= 0 ? o : u;
                                this.tv_1.ku(h, a, c);
                                var k = this.tv_1.wr_1;
                                throw new Rr("\\n not found: limit=" + (k.d1(r) <= 0 ? k : r).toString() + " content=" + h.nu().rt() + "…");
                            }
                            t = jr(this.tv_1, s);
                        } else t = jr(this.tv_1, n);
                        return t;
                    }),
                    (u(Pr).xr = function (r) {
                        var t = r;
                        if (this.sv_1) {
                            throw k(w("closed"));
                        }
                        for (; t.d1(new g(0, 0)) > 0; ) {
                            if (this.tv_1.wr_1.equals(new g(0, 0)) && this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) throw Fr();
                            var i = t,
                                s = this.tv_1.wr_1,
                                n = i.d1(s) <= 0 ? i : s;
                            this.tv_1.xr(n), (t = t.g3(n));
                        }
                        return c;
                    }),
                    (u(Pr).uu = function (r, t, i) {
                        var s;
                        r: {
                            var n = t;
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            if (!(new g(0, 0).d1(n) <= 0 && n.d1(i) <= 0)) {
                                var e = "fromIndex=" + n.toString() + " toIndex=" + i.toString();
                                throw l(w(e));
                            }
                            for (; n.d1(i) < 0; ) {
                                var _ = this.tv_1.uu(r, n, i);
                                if (!_.equals(new g(-1, -1))) {
                                    s = _;
                                    break r;
                                }
                                var f = this.tv_1.wr_1;
                                if (f.d1(i) >= 0 || this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    s = new g(-1, -1);
                                    break r;
                                }
                                var v = n;
                                n = v.d1(f) >= 0 ? v : f;
                            }
                            s = new g(-1, -1);
                        }
                        return s;
                    }),
                    (u(Pr).iv = function (r) {
                        return this.jv(r, new g(0, 0));
                    }),
                    (u(Pr).jv = function (r, t) {
                        var i;
                        r: {
                            var s = t;
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            for (;;) {
                                var n = this.tv_1.jv(r, s);
                                if (!n.equals(new g(-1, -1))) {
                                    i = n;
                                    break r;
                                }
                                var e = this.tv_1.wr_1;
                                if (this.rv_1.fv(this.tv_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    i = new g(-1, -1);
                                    break r;
                                }
                                var _ = s;
                                s = _.d1(e) >= 0 ? _ : e;
                            }
                        }
                        return i;
                    }),
                    (u(Pr).kv = function (r, t) {
                        return this.lv(r, t, 0, t.s());
                    }),
                    (u(Pr).lv = function (r, t, i, s) {
                        var n;
                        r: {
                            if (this.sv_1) {
                                throw k(w("closed"));
                            }
                            if (r.d1(new g(0, 0)) < 0 || i < 0 || s < 0 || ((t.s() - i) | 0) < s) n = !1;
                            else {
                                var e = 0;
                                if (e < s)
                                    do {
                                        var _ = e;
                                        e = (e + 1) | 0;
                                        var f = r.f3(d(_)),
                                            v = f.f3(d(1));
                                        if (!this.ju(v)) {
                                            n = !1;
                                            break r;
                                        }
                                        if (this.tv_1.bt(f) !== t.t((i + _) | 0)) {
                                            n = !1;
                                            break r;
                                        }
                                    } while (e < s);
                                n = !0;
                            }
                        }
                        return n;
                    }),
                    (u(Pr).x4 = function () {
                        var r;
                        return this.sv_1 ? (r = c) : ((this.sv_1 = !0), this.rv_1.x4(), this.tv_1.h2()), r;
                    }),
                    (u(Pr).toString = function () {
                        return "buffer(" + w(this.rv_1) + ")";
                    }),
                    (u(Vr).xs = function () {
                        return hr();
                    }),
                    (u(Vr).at = function (r) {}),
                    (i = new fr()),
                    new ur(),
                    (h = new Vr()),
                    (r.$_$ = r.$_$ || {}),
                    (r.$_$.a = Ur),
                    (r.$_$.b = function r(t) {
                        var i = Ur(t, S(u(Xr)));
                        return Z(i, r), i;
                    }),
                    (r.$_$.c = Ir),
                    (r.$_$.d = i),
                    (r.$_$.e = kr),
                    (r.$_$.f = Br),
                    (r.$_$.g = Rr),
                    (r.$_$.h = Xr),
                    (r.$_$.i = function () {
                        return new sr();
                    }),
                    (r.$_$.j = function (r) {
                        return new Pr(r);
                    }),
                    (r.$_$.k = function (r) {
                        return new Lr(r);
                    });
            })(r.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.1d86a91a.js.map
