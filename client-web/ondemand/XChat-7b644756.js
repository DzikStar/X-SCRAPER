(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-7b644756"],
    {
        222818: (t, s, r) => {
            !(function (t, s) {
                "use strict";
                var r,
                    i,
                    e,
                    n,
                    _,
                    h,
                    f,
                    a,
                    u = Math.imul,
                    v = s.$_$.xe,
                    o = s.$_$.ud,
                    w = s.$_$.bf,
                    l = s.$_$.h2,
                    c = s.$_$.p6,
                    g = s.$_$.ze,
                    $ = s.$_$.m2,
                    k = s.$_$.jj,
                    b = s.$_$.g,
                    d = s.$_$.tb,
                    x = s.$_$.jb,
                    q = s.$_$.t,
                    y = s.$_$.y7,
                    m = s.$_$.vd,
                    S = s.$_$.r6,
                    p = s.$_$.p7,
                    j = s.$_$.we,
                    z = s.$_$.kk,
                    I = s.$_$.u7,
                    C = s.$_$.f2,
                    M = s.$_$.ed,
                    A = s.$_$.p3,
                    B = s.$_$.q3,
                    E = s.$_$.v3,
                    O = s.$_$.ye,
                    F = s.$_$.r8,
                    R = s.$_$.dd,
                    U = s.$_$.se,
                    X = s.$_$.cg,
                    L = s.$_$.cd,
                    P = s.$_$.m8,
                    V = s.$_$.bg,
                    D = s.$_$.i8,
                    G = s.$_$.qj,
                    H = s.$_$.gh,
                    J = s.$_$.zi,
                    K = s.$_$.ve,
                    N = s.$_$.t1,
                    Q = s.$_$.md,
                    T = s.$_$.be,
                    W = s.$_$.ij,
                    Y = s.$_$.q2,
                    Z = s.$_$.bd,
                    tt = s.$_$.fj,
                    st = s.$_$.a2,
                    rt = s.$_$.ae;
                function it() {}
                function et(t, s, r, i, e, n, _, h) {
                    if (!(n < _)) {
                        throw l(w("Failed requirement."));
                    }
                    var f = n;
                    if (f < _)
                        do {
                            var a = f;
                            if (((f = (f + 1) | 0), !(e.t(a).s() >= i))) {
                                throw l(w("Failed requirement."));
                            }
                        } while (f < _);
                    var v = n,
                        o = e.t(v),
                        c = e.t((_ - 1) | 0),
                        k = -1;
                    if ((i === o.s() && ((k = h.t(v)), (v = (v + 1) | 0), (o = e.t(v))), o.t(i) !== c.t(i))) {
                        var b = 1,
                            d = (v + 1) | 0;
                        if (d < _)
                            do {
                                var x = d;
                                (d = (d + 1) | 0), e.t((x - 1) | 0).t(i) !== e.t(x).t(i) && (b = (b + 1) | 0);
                            } while (d < _);
                        var q = s.g3(_t(r, t)).g3(g(2)),
                            y = u(b, 2),
                            m = q.g3(g(y));
                        r.ks(b), r.ks(k);
                        var S = v;
                        if (S < _)
                            do {
                                var p = S;
                                S = (S + 1) | 0;
                                var j = e.t(p).t(i);
                                if (p === v || j !== e.t((p - 1) | 0).t(i)) {
                                    var z = 255 & j;
                                    r.ks(z);
                                }
                            } while (S < _);
                        for (var I = new Bt(), C = v; C < _; ) {
                            var M = e.t(C).t(i),
                                A = _,
                                B = (C + 1) | 0;
                            if (B < _)
                                t: do {
                                    var E = B;
                                    if (((B = (B + 1) | 0), M !== e.t(E).t(i))) {
                                        A = E;
                                        break t;
                                    }
                                } while (B < _);
                            ((C + 1) | 0) === A && ((i + 1) | 0) === e.t(C).s() ? r.ks(h.t(C)) : (r.ks(u(-1, m.g3(_t(I, t)).k1())), et(t, m, I, (i + 1) | 0, e, C, A, h)), (C = A);
                        }
                        r.ls(I);
                    } else {
                        var O = 0,
                            F = i,
                            R = o.s(),
                            U = c.s(),
                            X = Math.min(R, U);
                        if (F < X)
                            t: do {
                                var L = F;
                                if (((F = (F + 1) | 0), o.t(L) !== c.t(L))) break t;
                                O = (O + 1) | 0;
                            } while (F < X);
                        var P = O,
                            V = s.g3(_t(r, t)).g3(g(2)).g3(g(P)).g3(g(1));
                        r.ks(0 | -O), r.ks(k);
                        var D = i,
                            G = (i + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                r.ks(J);
                            } while (D < G);
                        if (((v + 1) | 0) === _) {
                            if (((i + O) | 0) !== e.t(v).s()) {
                                throw $(w("Check failed."));
                            }
                            r.ks(h.t(v));
                        } else {
                            var K = new Bt();
                            r.ks(u(-1, V.g3(_t(K, t)).k1())), et(t, V, K, (i + O) | 0, e, v, _, h), r.ls(K);
                        }
                    }
                }
                function nt(t, s, r, i, e, n, _, h, f) {
                    return (s = s === b ? new k(0, 0) : s), (i = i === b ? 0 : i), (n = n === b ? 0 : n), (_ = _ === b ? e.s() : _), et(t, s, r, i, e, n, _, h);
                }
                function _t(t, s) {
                    return t.fs_1.j3(g(4));
                }
                function ht() {}
                function ft(t, s) {
                    S.call(this), (this.ps_1 = t), (this.qs_1 = s);
                }
                function at() {
                    return (t = j(v(ot))), ot.call(t), (t.rs_1 = new Int8Array(8192)), (t.vs_1 = !0), (t.us_1 = !1), t;
                    var t;
                }
                function ut(t, s, r, i, e) {
                    return (function (t, s, r, i, e, n) {
                        return ot.call(n), (n.rs_1 = t), (n.ss_1 = s), (n.ts_1 = r), (n.us_1 = i), (n.vs_1 = e), n;
                    })(t, s, r, i, e, j(v(ot)));
                }
                function vt() {
                    (this.ys_1 = 8192), (this.zs_1 = 1024);
                }
                function ot() {
                    (this.ss_1 = 0), (this.ts_1 = 0), (this.us_1 = !1), (this.vs_1 = !1), (this.ws_1 = null), (this.xs_1 = null);
                }
                function wt() {
                    return gt(), i;
                }
                function lt(t, s, r, i, e) {
                    gt();
                    var n = 0;
                    if (n < e)
                        do {
                            var _ = n;
                            if (((n = (n + 1) | 0), t[(_ + s) | 0] !== r[(_ + i) | 0])) return !1;
                        } while (n < e);
                    return !0;
                }
                function ct(t, s, r) {
                    if ((gt(), s.u3(r).e1(new k(0, 0)) < 0 || s.e1(t) > 0 || t.h3(s).e1(r) < 0)) throw new Ot("size=" + t.toString() + " offset=" + s.toString() + " byteCount=" + r.toString());
                }
                function gt() {
                    e || ((e = !0), new At(), (i = -1234567890));
                }
                function $t(t) {
                    var s = new Int8Array(u(4, t.length)),
                        r = 0,
                        i = t.length;
                    if (r < i)
                        do {
                            var e = r;
                            r = (r + 1) | 0;
                            var n = M(t, e);
                            if (B(n, A(128)) >= 0) {
                                for (var _ = e, h = t.length, f = e; f < h; ) {
                                    var a = M(t, f);
                                    if (B(a, A(128)) < 0) {
                                        var v = E(a),
                                            o = _;
                                        for (_ = (o + 1) | 0, s[o] = O(v), f = (f + 1) | 0; f < h && B(M(t, f), A(128)) < 0; ) {
                                            var w = f;
                                            f = (w + 1) | 0;
                                            var l = M(t, w),
                                                c = E(l),
                                                g = _;
                                            (_ = (g + 1) | 0), (s[g] = O(c));
                                        }
                                    } else if (B(a, A(2048)) < 0) {
                                        var $ = E(a),
                                            k = _;
                                        (_ = (k + 1) | 0), (s[k] = O(($ >> 6) | 192));
                                        var b = E(a),
                                            d = _;
                                        (_ = (d + 1) | 0), (s[d] = O((63 & b) | 128)), (f = (f + 1) | 0);
                                    } else if (A(55296) <= a && a <= A(57343)) {
                                        var x;
                                        if (B(a, A(56319)) > 0 || h <= ((f + 1) | 0)) x = !0;
                                        else {
                                            var q = M(t, (f + 1) | 0);
                                            x = !(A(56320) <= q && q <= A(57343));
                                        }
                                        if (x) {
                                            var y = _;
                                            (_ = (y + 1) | 0), (s[y] = 63), (f = (f + 1) | 0);
                                        } else {
                                            var m = E(a) << 10,
                                                S = M(t, (f + 1) | 0),
                                                p = (((m + E(S)) | 0) - 56613888) | 0,
                                                j = _;
                                            (_ = (j + 1) | 0), (s[j] = O((p >> 18) | 240));
                                            var z = _;
                                            (_ = (z + 1) | 0), (s[z] = O(((p >> 12) & 63) | 128));
                                            var I = _;
                                            (_ = (I + 1) | 0), (s[I] = O(((p >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (s[C] = O((63 & p) | 128)), (f = (f + 2) | 0);
                                        }
                                    } else {
                                        var R = E(a),
                                            U = _;
                                        (_ = (U + 1) | 0), (s[U] = O((R >> 12) | 224));
                                        var X = E(a),
                                            L = _;
                                        (_ = (L + 1) | 0), (s[L] = O(((X >> 6) & 63) | 128));
                                        var P = E(a),
                                            V = _;
                                        (_ = (V + 1) | 0), (s[V] = O((63 & P) | 128)), (f = (f + 1) | 0);
                                    }
                                }
                                return F(s, _);
                            }
                            var D = E(n);
                            s[e] = O(D);
                        } while (r < i);
                    return F(s, t.length);
                }
                function kt(t, s, r) {
                    if (((s = s === b ? 0 : s), (r = r === b ? t.length : r), s < 0 || r > t.length || s > r)) throw new Ot("size=" + t.length + " beginIndex=" + s + " endIndex=" + r);
                    for (var i = R((r - s) | 0), e = 0, n = s; n < r; ) {
                        var _ = t[n];
                        if (_ >= 0) {
                            var h = e;
                            for (e = (h + 1) | 0, i[h] = U(_), n = (n + 1) | 0; n < r && t[n] >= 0; ) {
                                var f = n;
                                n = (f + 1) | 0;
                                var a = e;
                                (e = (a + 1) | 0), (i[a] = U(t[f]));
                            }
                        } else if (_ >> 5 == -2) {
                            var u,
                                v = n,
                                o = n;
                            if (r <= ((o + 1) | 0)) {
                                var w = e;
                                (e = (w + 1) | 0), (i[w] = U(65533)), (u = 1);
                            } else {
                                var l = t[o],
                                    c = t[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var g = 3968 ^ c ^ (l << 6);
                                    if (g < 128) {
                                        var $ = e;
                                        (e = ($ + 1) | 0), (i[$] = U(65533));
                                    } else {
                                        var k = e;
                                        (e = (k + 1) | 0), (i[k] = U(g));
                                    }
                                    u = 2;
                                } else {
                                    var d = e;
                                    (e = (d + 1) | 0), (i[d] = U(65533)), (u = 1);
                                }
                            }
                            n = (v + u) | 0;
                        } else if (_ >> 4 == -2) {
                            var x,
                                q = n;
                            t: {
                                var y = n;
                                if (r <= ((y + 2) | 0)) {
                                    var m = e;
                                    if (((e = (m + 1) | 0), (i[m] = U(65533)), r <= ((y + 1) | 0) || !(128 == (192 & t[(y + 1) | 0])))) {
                                        x = 1;
                                        break t;
                                    }
                                    x = 2;
                                } else {
                                    var S = t[y],
                                        p = t[(y + 1) | 0];
                                    if (128 == (192 & p)) {
                                        var j = t[(y + 2) | 0];
                                        if (128 == (192 & j)) {
                                            var z = -123008 ^ j ^ (p << 6) ^ (S << 12);
                                            if (z < 2048) {
                                                var I = e;
                                                (e = (I + 1) | 0), (i[I] = U(65533));
                                            } else if (55296 <= z && z <= 57343) {
                                                var C = e;
                                                (e = (C + 1) | 0), (i[C] = U(65533));
                                            } else {
                                                var M = e;
                                                (e = (M + 1) | 0), (i[M] = U(z));
                                            }
                                            x = 3;
                                        } else {
                                            var B = e;
                                            (e = (B + 1) | 0), (i[B] = U(65533)), (x = 2);
                                        }
                                    } else {
                                        var E = e;
                                        (e = (E + 1) | 0), (i[E] = U(65533)), (x = 1);
                                    }
                                }
                            }
                            n = (q + x) | 0;
                        } else if (_ >> 3 == -2) {
                            var O,
                                F = n;
                            t: {
                                var L = n;
                                if (r <= ((L + 3) | 0)) {
                                    var P = e;
                                    if (((e = (P + 1) | 0), (i[P] = A(65533)), r <= ((L + 1) | 0) || !(128 == (192 & t[(L + 1) | 0])))) {
                                        O = 1;
                                        break t;
                                    }
                                    if (r <= ((L + 2) | 0) || !(128 == (192 & t[(L + 2) | 0]))) {
                                        O = 2;
                                        break t;
                                    }
                                    O = 3;
                                } else {
                                    var V = t[L],
                                        D = t[(L + 1) | 0];
                                    if (128 == (192 & D)) {
                                        var G = t[(L + 2) | 0];
                                        if (128 == (192 & G)) {
                                            var H = t[(L + 3) | 0];
                                            if (128 == (192 & H)) {
                                                var J = 3678080 ^ H ^ (G << 6) ^ (D << 12) ^ (V << 18);
                                                if (J > 1114111) {
                                                    var K = e;
                                                    (e = (K + 1) | 0), (i[K] = A(65533));
                                                } else if (55296 <= J && J <= 57343) {
                                                    var N = e;
                                                    (e = (N + 1) | 0), (i[N] = A(65533));
                                                } else if (J < 65536) {
                                                    var Q = e;
                                                    (e = (Q + 1) | 0), (i[Q] = A(65533));
                                                } else if (65533 !== J) {
                                                    var T = e;
                                                    (e = (T + 1) | 0), (i[T] = U((55232 + ((J >>> 10) | 0)) | 0));
                                                    var W = e;
                                                    (e = (W + 1) | 0), (i[W] = U((56320 + (1023 & J)) | 0));
                                                } else {
                                                    var Y = e;
                                                    (e = (Y + 1) | 0), (i[Y] = A(65533));
                                                }
                                                O = 4;
                                            } else {
                                                var Z = e;
                                                (e = (Z + 1) | 0), (i[Z] = A(65533)), (O = 3);
                                            }
                                        } else {
                                            var tt = e;
                                            (e = (tt + 1) | 0), (i[tt] = A(65533)), (O = 2);
                                        }
                                    } else {
                                        var st = e;
                                        (e = (st + 1) | 0), (i[st] = A(65533)), (O = 1);
                                    }
                                }
                            }
                            n = (F + O) | 0;
                        } else {
                            var rt = e;
                            (e = (rt + 1) | 0), (i[rt] = A(65533)), (n = (n + 1) | 0);
                        }
                    }
                    return X(i, 0, e);
                }
                function bt(t, s) {
                    var r, i;
                    if ((qt(), s.e1(new k(0, 0)) > 0)) {
                        var e = s.h3(g(1));
                        i = 13 === t.kt(e);
                    } else i = !1;
                    if (i) {
                        var n = t.lt(s.h3(new k(1, 0)));
                        t.gs(new k(2, 0)), (r = n);
                    } else {
                        var _ = t.lt(s);
                        t.gs(new k(1, 0)), (r = _);
                    }
                    return r;
                }
                function dt(t, s, r) {
                    (r = r !== b && r), qt();
                    var i = t.es_1;
                    if (null == i) return r ? -2 : -1;
                    var e = i,
                        n = e,
                        _ = e.rs_1,
                        h = e.ss_1,
                        f = e.ts_1,
                        a = s.qs_1,
                        v = 0,
                        o = -1;
                    t: for (;;) {
                        var w = v;
                        v = (w + 1) | 0;
                        var l = a[w],
                            c = v;
                        v = (c + 1) | 0;
                        var g,
                            $ = a[c];
                        if ((-1 !== $ && (o = $), null == n)) break t;
                        if (l < 0) {
                            var k = (v + u(-1, l)) | 0;
                            s: for (;;) {
                                var d = h;
                                h = (d + 1) | 0;
                                var x = v;
                                if (((v = (x + 1) | 0), (255 & _[d]) !== a[x])) return o;
                                var q = v === k;
                                if (h === f && ((h = (n = z(z(n).ws_1)).ss_1), (_ = n.rs_1), (f = n.ts_1), n === e)) {
                                    if (!q) break t;
                                    n = null;
                                }
                                if (q) {
                                    g = a[v];
                                    break s;
                                }
                            }
                        } else {
                            var y = l,
                                m = h;
                            h = (m + 1) | 0;
                            var S = 255 & _[m],
                                p = (v + y) | 0;
                            s: for (;;) {
                                if (v === p) return o;
                                if (S === a[v]) {
                                    g = a[(v + y) | 0];
                                    break s;
                                }
                                v = (v + 1) | 0;
                            }
                            h === f && ((h = (n = z(n.ws_1)).ss_1), (_ = n.rs_1), (f = n.ts_1), n === e && (n = null));
                        }
                        if (g >= 0) return g;
                        v = 0 | -g;
                    }
                    return r ? -2 : o;
                }
                function xt(t, s, r, i, e) {
                    qt();
                    for (var n = t, _ = s, h = n.ts_1, f = n.rs_1, a = i; a < e; ) {
                        if ((_ === h && ((f = (n = z(n.ws_1)).rs_1), (_ = n.ss_1), (h = n.ts_1)), f[_] !== r[a])) return !1;
                        (_ = (_ + 1) | 0), (a = (a + 1) | 0);
                    }
                    return !0;
                }
                function qt() {
                    n || ((n = !0), Et("0123456789abcdef"));
                }
                function yt() {
                    return St(), _;
                }
                function mt(t, s) {
                    return (
                        St(),
                        (function (t, s) {
                            St();
                            for (var r = 0, i = 0, e = t.length, n = 0; n < e; ) {
                                var _ = t[n];
                                if (_ >= 0) {
                                    var h,
                                        f = i;
                                    if (((i = (f + 1) | 0), f === s)) return r;
                                    var a = A(10);
                                    if (_ !== E(a)) {
                                        var u = A(13);
                                        h = !(_ === E(u));
                                    } else h = !1;
                                    if ((h && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (r = (r + (_ < 65536 ? 1 : 2)) | 0, n = (n + 1) | 0; n < e && t[n] >= 0; ) {
                                        var v = n;
                                        n = (v + 1) | 0;
                                        var o,
                                            w = t[v],
                                            l = i;
                                        if (((i = (l + 1) | 0), l === s)) return r;
                                        var c = A(10);
                                        if (w !== E(c)) {
                                            var g = A(13);
                                            o = !(w === E(g));
                                        } else o = !1;
                                        if ((o && ((0 <= w && w <= 31) || (127 <= w && w <= 159))) || 65533 === w) return -1;
                                        r = (r + (w < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var $ = n,
                                        k = n;
                                    if (e <= ((k + 1) | 0)) {
                                        var b = i;
                                        if (((i = (b + 1) | 0), b === s)) return r;
                                        var d = A(10);
                                        if (65533 !== E(d)) {
                                            var x = A(13);
                                            E(x);
                                        }
                                        return -1;
                                    }
                                    var q = t[k],
                                        y = t[(k + 1) | 0];
                                    if (128 != (192 & y)) {
                                        var m = i;
                                        if (((i = (m + 1) | 0), m === s)) return r;
                                        var S = A(10);
                                        if (65533 !== E(S)) {
                                            var p = A(13);
                                            E(p);
                                        }
                                        return -1;
                                    }
                                    var j = 3968 ^ y ^ (q << 6);
                                    if (j < 128) {
                                        var z = i;
                                        if (((i = (z + 1) | 0), z === s)) return r;
                                        var I = A(10);
                                        if (65533 !== E(I)) {
                                            var C = A(13);
                                            E(C);
                                        }
                                        return -1;
                                    }
                                    var M,
                                        B = i;
                                    if (((i = (B + 1) | 0), B === s)) return r;
                                    var O = A(10);
                                    if (j !== E(O)) {
                                        var F = A(13);
                                        M = !(j === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= j && j <= 31) || (127 <= j && j <= 159))) || 65533 === j) return -1;
                                    (r = (r + (j < 65536 ? 1 : 2)) | 0), (n = ($ + 2) | 0);
                                } else if (_ >> 4 == -2) {
                                    var R,
                                        U = n;
                                    t: {
                                        var X = n;
                                        if (e <= ((X + 2) | 0)) {
                                            var L = i;
                                            if (((i = (L + 1) | 0), L === s)) return r;
                                            var P = A(10);
                                            if (65533 !== E(P)) {
                                                var V = A(13);
                                                E(V);
                                            }
                                            return -1;
                                        }
                                        var D = t[X],
                                            G = t[(X + 1) | 0];
                                        if (128 != (192 & G)) {
                                            var H = i;
                                            if (((i = (H + 1) | 0), H === s)) return r;
                                            var J = A(10);
                                            if (65533 !== E(J)) {
                                                var K = A(13);
                                                E(K);
                                            }
                                            return -1;
                                        }
                                        var N = t[(X + 2) | 0];
                                        if (128 != (192 & N)) {
                                            var Q = i;
                                            if (((i = (Q + 1) | 0), Q === s)) return r;
                                            var T = A(10);
                                            if (65533 !== E(T)) {
                                                var W = A(13);
                                                E(W);
                                            }
                                            return -1;
                                        }
                                        var Y = -123008 ^ N ^ (G << 6) ^ (D << 12);
                                        if (Y < 2048) {
                                            var Z = i;
                                            if (((i = (Z + 1) | 0), Z === s)) return r;
                                            var tt = A(10);
                                            if (65533 !== E(tt)) {
                                                var st = A(13);
                                                E(st);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= Y && Y <= 57343) {
                                            var rt = i;
                                            if (((i = (rt + 1) | 0), rt === s)) return r;
                                            var it = A(10);
                                            if (65533 !== E(it)) {
                                                var et = A(13);
                                                E(et);
                                            }
                                            return -1;
                                        }
                                        var nt,
                                            _t = i;
                                        if (((i = (_t + 1) | 0), _t === s)) return r;
                                        var ht = A(10);
                                        if (Y !== E(ht)) {
                                            var ft = A(13);
                                            nt = !(Y === E(ft));
                                        } else nt = !1;
                                        if ((nt && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (r = (r + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    n = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var at = i;
                                        if (((i = (at + 1) | 0), at === s)) return r;
                                        var ut = A(10);
                                        if (65533 !== E(ut)) {
                                            var vt = A(13);
                                            E(vt);
                                        }
                                        return -1;
                                    }
                                    var ot,
                                        wt = n;
                                    t: {
                                        var lt = n;
                                        if (e <= ((lt + 3) | 0)) {
                                            var ct = i;
                                            if (((i = (ct + 1) | 0), ct === s)) return r;
                                            var gt = A(10);
                                            if (65533 !== E(gt)) {
                                                var $t = A(13);
                                                E($t);
                                            }
                                            return -1;
                                        }
                                        var kt = t[lt],
                                            bt = t[(lt + 1) | 0];
                                        if (128 != (192 & bt)) {
                                            var dt = i;
                                            if (((i = (dt + 1) | 0), dt === s)) return r;
                                            var xt = A(10);
                                            if (65533 !== E(xt)) {
                                                var qt = A(13);
                                                E(qt);
                                            }
                                            return -1;
                                        }
                                        var yt = t[(lt + 2) | 0];
                                        if (128 != (192 & yt)) {
                                            var mt = i;
                                            if (((i = (mt + 1) | 0), mt === s)) return r;
                                            var pt = A(10);
                                            if (65533 !== E(pt)) {
                                                var jt = A(13);
                                                E(jt);
                                            }
                                            return -1;
                                        }
                                        var zt = t[(lt + 3) | 0];
                                        if (128 != (192 & zt)) {
                                            var It = i;
                                            if (((i = (It + 1) | 0), It === s)) return r;
                                            var Ct = A(10);
                                            if (65533 !== E(Ct)) {
                                                var Mt = A(13);
                                                E(Mt);
                                            }
                                            return -1;
                                        }
                                        var At = 3678080 ^ zt ^ (yt << 6) ^ (bt << 12) ^ (kt << 18);
                                        if (At > 1114111) {
                                            var Bt = i;
                                            if (((i = (Bt + 1) | 0), Bt === s)) return r;
                                            var Et = A(10);
                                            if (65533 !== E(Et)) {
                                                var Ot = A(13);
                                                E(Ot);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= At && At <= 57343) {
                                            var Ft = i;
                                            if (((i = (Ft + 1) | 0), Ft === s)) return r;
                                            var Rt = A(10);
                                            if (65533 !== E(Rt)) {
                                                var Ut = A(13);
                                                E(Ut);
                                            }
                                            return -1;
                                        }
                                        if (At < 65536) {
                                            var Xt = i;
                                            if (((i = (Xt + 1) | 0), Xt === s)) return r;
                                            var Lt = A(10);
                                            if (65533 !== E(Lt)) {
                                                var Pt = A(13);
                                                E(Pt);
                                            }
                                            return -1;
                                        }
                                        var Vt,
                                            Dt = i;
                                        if (((i = (Dt + 1) | 0), Dt === s)) return r;
                                        var Gt = A(10);
                                        if (At !== E(Gt)) {
                                            var Ht = A(13);
                                            Vt = !(At === E(Ht));
                                        } else Vt = !1;
                                        if ((Vt && ((0 <= At && At <= 31) || (127 <= At && At <= 159))) || 65533 === At) return -1;
                                        (r = (r + (At < 65536 ? 1 : 2)) | 0), (ot = 4);
                                    }
                                    n = (wt + ot) | 0;
                                }
                            }
                            return r;
                        })(t, s)
                    );
                }
                function St() {
                    h || ((h = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function pt(t, s) {
                    var r = (function (t, s, r, i) {
                        var e = r,
                            n = (i - 1) | 0;
                        for (; e <= n; ) {
                            var _ = (((e + n) | 0) >>> 1) | 0,
                                h = t[_];
                            if (h < s) e = (_ + 1) | 0;
                            else {
                                if (!(h > s)) return _;
                                n = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -e) - 1) | 0;
                    })(t.rt_1, (s + 1) | 0, 0, t.qt_1.length);
                    return r >= 0 ? r : ~r;
                }
                function jt() {
                    f = this;
                    var t = new Int8Array([]);
                    this.st_1 = new It(t);
                }
                function zt() {
                    return null == f && new jt(), f;
                }
                function It(t) {
                    zt(), (this.hs_1 = t), (this.is_1 = 0), (this.js_1 = null);
                }
                function Ct(t) {
                    return new It(t.du());
                }
                function Mt(t, s) {
                    It.call(this, zt().st_1.hs_1), (this.qt_1 = t), (this.rt_1 = s);
                }
                function At() {
                    (this.iu_1 = null), (this.ju_1 = !1), (this.ku_1 = null), (this.lu_1 = new k(-1, -1)), (this.mu_1 = null), (this.nu_1 = -1), (this.ou_1 = -1);
                }
                function Bt() {
                    (this.es_1 = null), (this.fs_1 = new k(0, 0));
                }
                function Et(t) {
                    return $t(t);
                }
                function Ot(t) {
                    Y(t, this), Z(this, Ot);
                }
                function Ft() {
                    var t,
                        s = ((t = j(v(Rt))), Rt.call(t, null), t);
                    return Z(s, Ft), s;
                }
                function Rt(t) {
                    Ut(t, this), Z(this, Rt);
                }
                function Ut(t, s) {
                    return Xt.call(s, t, null), s;
                }
                function Xt(t, s) {
                    st(t, s, this), Z(this, Xt);
                }
                function Lt(t) {
                    (this.wv_1 = t), (this.xv_1 = !1), (this.yv_1 = new Bt());
                }
                function Pt(t) {
                    (this.aw_1 = t), (this.bw_1 = !1), (this.cw_1 = new Bt());
                }
                function Vt() {
                    (this.et_1 = 0), (this.ft_1 = 0);
                }
                o(it, "BlackholeSink", it),
                    m(ht),
                    o(ft, "Options", b, S, [S, p]),
                    m(vt),
                    o(ot, "Segment", at),
                    m(jt),
                    o(It, "ByteString", b, b, [J]),
                    o(Mt, "SegmentedByteString", b, It),
                    o(At, "UnsafeCursor", At),
                    o(Bt, "Buffer", Bt),
                    o(Ot, "ArrayIndexOutOfBoundsException", b, W),
                    o(
                        Xt,
                        "IOException",
                        function t() {
                            var s = ((r = j(v(Xt))), Xt.call(r, null, null), r);
                            var r;
                            return Z(s, t), s;
                        },
                        tt,
                    ),
                    o(Rt, "EOFException", Ft, Xt),
                    o(Lt, "RealBufferedSink"),
                    o(Pt, "RealBufferedSource"),
                    rt(Vt, "SegmentPool"),
                    (v(it).ds = function (t, s) {
                        return t.gs(s);
                    }),
                    (v(it).t9 = function () {}),
                    (v(it).e5 = function () {}),
                    (v(ht).ms = function (t) {
                        if (0 === t.length) {
                            return new ft([], new Int32Array([0, -1]));
                        }
                        var s = d(t);
                        x(s);
                        var r = s.s(),
                            i = q(r),
                            e = 0;
                        if (e < r)
                            do {
                                (e = (e + 1) | 0), i.k(-1);
                            } while (e < r);
                        for (var n = i, _ = 0, h = 0, f = t.length; h < f; ) {
                            var a = t[h];
                            h = (h + 1) | 0;
                            var u = _;
                            _ = (u + 1) | 0;
                            var v = y(s, a);
                            n.k2(v, u);
                        }
                        if (!(s.t(0).s() > 0)) {
                            throw l(w("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < s.s(); ) {
                            var c = s.t(o),
                                g = (o + 1) | 0;
                            t: for (; g < s.s(); ) {
                                var $ = s.t(g);
                                if (!$.ns(c)) break t;
                                if ($.s() === c.s()) {
                                    var k = "duplicate option: " + $.toString();
                                    throw l(w(k));
                                }
                                n.t(g) > n.t(o) ? (s.m2(g), n.m2(g)) : (g = (g + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var m = new Bt();
                        nt(this, b, m, b, s, b, b, n);
                        for (var S = 0, p = _t(m).k1(), j = new Int32Array(p); S < p; ) (j[S] = m.os()), (S = (S + 1) | 0);
                        var z = j;
                        return new ft(t.slice(), z);
                    }),
                    (v(ft).s = function () {
                        return this.ps_1.length;
                    }),
                    (v(ft).t = function (t) {
                        return this.ps_1[t];
                    }),
                    (v(ot).at = function () {
                        return (this.us_1 = !0), ut(this.rs_1, this.ss_1, this.ts_1, !0, !1);
                    }),
                    (v(ot).bt = function () {
                        var t = this.ws_1 !== this ? this.ws_1 : null;
                        return (z(this.xs_1).ws_1 = this.ws_1), (z(this.ws_1).xs_1 = this.xs_1), (this.ws_1 = null), (this.xs_1 = null), t;
                    }),
                    (v(ot).ct = function (t) {
                        return (t.xs_1 = this), (t.ws_1 = this.ws_1), (z(this.ws_1).xs_1 = t), (this.ws_1 = t), t;
                    }),
                    (v(ot).dt = function (t) {
                        if (!(t > 0 && t <= ((this.ts_1 - this.ss_1) | 0))) {
                            throw l(w("byteCount out of range"));
                        }
                        var s;
                        if (t >= 1024) s = this.at();
                        else {
                            s = a.gt();
                            var r = this.rs_1,
                                i = s.rs_1,
                                e = this.ss_1,
                                n = (this.ss_1 + t) | 0;
                            I(r, i, 0, e, n);
                        }
                        return (s.ts_1 = (s.ss_1 + t) | 0), (this.ss_1 = (this.ss_1 + t) | 0), z(this.xs_1).ct(s), s;
                    }),
                    (v(ot).ht = function () {
                        if (this.xs_1 === this) {
                            throw $(w("cannot compact"));
                        }
                        if (!z(this.xs_1).vs_1) return c;
                        var t = (this.ts_1 - this.ss_1) | 0;
                        if (t > ((((8192 - z(this.xs_1).ts_1) | 0) + (z(this.xs_1).us_1 ? 0 : z(this.xs_1).ss_1)) | 0)) return c;
                        this.it(z(this.xs_1), t), this.bt(), a.jt(this);
                    }),
                    (v(ot).it = function (t, s) {
                        if (!t.vs_1) {
                            throw $(w("only owner can write"));
                        }
                        if (((t.ts_1 + s) | 0) > 8192) {
                            if (t.us_1) throw C();
                            if (((((t.ts_1 + s) | 0) - t.ss_1) | 0) > 8192) throw C();
                            var r = t.rs_1,
                                i = t.rs_1,
                                e = t.ss_1,
                                n = t.ts_1;
                            I(r, i, 0, e, n), (t.ts_1 = (t.ts_1 - t.ss_1) | 0), (t.ss_1 = 0);
                        }
                        var _ = this.rs_1,
                            h = t.rs_1,
                            f = t.ts_1,
                            a = this.ss_1,
                            u = (this.ss_1 + s) | 0;
                        I(_, h, f, a, u), (t.ts_1 = (t.ts_1 + s) | 0), (this.ss_1 = (this.ss_1 + s) | 0);
                    }),
                    (v(jt).tt = function (t, s, r) {
                        var i = (function (t, s) {
                            return gt(), s === wt() ? t.length : s;
                        })(t, r);
                        return ct(g(t.length), g(s), g(i)), new It(P(t, s, (s + i) | 0));
                    }),
                    (v(jt).ut = function (t, s, r, i) {
                        return (s = s === b ? 0 : s), (r = r === b ? wt() : r), i === b ? this.tt(t, s, r) : i.tt.call(this, t, s, r);
                    }),
                    (v(jt).vt = function (t) {
                        var s = new It(Et(t));
                        return s.wt(t), s;
                    }),
                    (v(It).xt = function (t) {}),
                    (v(It).wt = function (t) {}),
                    (v(It).yt = function () {
                        var t = this.js_1;
                        return null == t && ((t = kt(this.zt())), this.wt(t)), t;
                    }),
                    (v(It).au = function () {
                        for (var t = R(u(this.hs_1.length, 2)), s = 0, r = this.hs_1, i = 0, e = r.length; i < e; ) {
                            var n = r[i];
                            i = (i + 1) | 0;
                            var _ = s;
                            s = (_ + 1) | 0;
                            var h = yt();
                            t[_] = h[(n >> 4) & 15];
                            var f = s;
                            s = (f + 1) | 0;
                            var a = yt();
                            t[f] = a[15 & n];
                        }
                        return V(t);
                    }),
                    (v(It).bu = function (t) {
                        if (t >= this.s() || t < 0) throw new Ot("size=" + this.s() + " pos=" + t);
                        return this.hs_1[t];
                    }),
                    (v(It).t = function (t) {
                        return this.bu(t);
                    }),
                    (v(It).s = function () {
                        return this.cu();
                    }),
                    (v(It).cu = function () {
                        return this.hs_1.length;
                    }),
                    (v(It).du = function () {
                        return this.hs_1.slice();
                    }),
                    (v(It).zt = function () {
                        return this.hs_1;
                    }),
                    (v(It).eu = function (t, s, r) {
                        return (function (t, s, r, i) {
                            St(), s.mt(t.hs_1, r, i);
                        })(this, t, s, r);
                    }),
                    (v(It).fu = function (t, s, r, i) {
                        return s.gu(r, this.hs_1, t, i);
                    }),
                    (v(It).gu = function (t, s, r, i) {
                        return t >= 0 && t <= ((this.hs_1.length - i) | 0) && r >= 0 && r <= ((s.length - i) | 0) && lt(this.hs_1, t, s, r, i);
                    }),
                    (v(It).ns = function (t) {
                        return this.fu(0, t, 0, t.s());
                    }),
                    (v(It).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.hs_1.length && t.gu(0, this.hs_1, 0, this.hs_1.length));
                    }),
                    (v(It).hashCode = function () {
                        var t,
                            s = this.is_1;
                        if (0 === s) {
                            var r = D(this.hs_1);
                            this.xt(r), (t = r);
                        } else t = s;
                        return t;
                    }),
                    (v(It).hu = function (t) {
                        var s;
                        t: {
                            for (var r = this.s(), i = t.s(), e = 0, n = Math.min(r, i); e < n; ) {
                                var _ = 255 & this.t(e),
                                    h = 255 & t.t(e);
                                if (_ !== h) {
                                    s = _ < h ? -1 : 1;
                                    break t;
                                }
                                e = (e + 1) | 0;
                            }
                            r !== i ? (s = r < i ? -1 : 1) : (s = 0);
                        }
                        return s;
                    }),
                    (v(It).d = function (t) {
                        return this.hu(t instanceof It ? t : G());
                    }),
                    (v(It).toString = function () {
                        var t, s, r;
                        if (0 !== this.hs_1.length) {
                            var i = mt(this.hs_1, 64);
                            if (-1 !== i) {
                                var e = this.yt(),
                                    n = e.substring(0, i),
                                    _ = H(H(H(n, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = i < e.length ? "[size=" + this.hs_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var h;
                                if (this.hs_1.length <= 64) h = "[hex=" + this.au() + "]";
                                else {
                                    var f,
                                        a = this.hs_1.length,
                                        u = ((s = this), (r = 64), gt(), r === wt() ? s.s() : r);
                                    if (!(u <= this.hs_1.length)) {
                                        var v = "endIndex > length(" + this.hs_1.length + ")";
                                        throw l(w(v));
                                    }
                                    if (!(((u - 0) | 0) >= 0)) {
                                        throw l(w("endIndex < beginIndex"));
                                    }
                                    u !== this.hs_1.length ? (f = new It(P(this.hs_1, 0, u))) : (f = this), (h = "[size=" + a + " hex=" + f.au() + "…]");
                                }
                                t = h;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (v(Mt).au = function () {
                        return Ct(this).au();
                    }),
                    (v(Mt).bu = function (t) {
                        ct(g(this.rt_1[(this.qt_1.length - 1) | 0]), g(t), new k(1, 0));
                        var s = pt(this, t),
                            r = 0 === s ? 0 : this.rt_1[(s - 1) | 0],
                            i = this.rt_1[(s + this.qt_1.length) | 0];
                        return this.qt_1[s][(((t - r) | 0) + i) | 0];
                    }),
                    (v(Mt).cu = function () {
                        return this.rt_1[(this.qt_1.length - 1) | 0];
                    }),
                    (v(Mt).du = function () {
                        for (var t = new Int8Array(this.s()), s = 0, r = this.qt_1.length, i = 0, e = 0; i < r; ) {
                            var n = this.rt_1[(r + i) | 0],
                                _ = this.rt_1[i],
                                h = (_ - e) | 0,
                                f = this.qt_1[i];
                            I(f, t, s, n, (n + h) | 0), (s = (s + h) | 0), (e = _), (i = (i + 1) | 0);
                        }
                        return t;
                    }),
                    (v(Mt).eu = function (t, s, r) {
                        for (var i = (s + r) | 0, e = pt(this, s), n = s; n < i; ) {
                            var _ = 0 === e ? 0 : this.rt_1[(e - 1) | 0],
                                h = (this.rt_1[e] - _) | 0,
                                f = this.rt_1[(this.qt_1.length + e) | 0],
                                a = (_ + h) | 0,
                                u = (Math.min(i, a) - n) | 0,
                                v = (f + ((n - _) | 0)) | 0,
                                o = ut(this.qt_1[e], v, (v + u) | 0, !0, !1);
                            null == t.es_1 ? ((o.xs_1 = o), (o.ws_1 = o.xs_1), (t.es_1 = o.ws_1)) : z(z(t.es_1).xs_1).ct(o), (n = (n + u) | 0), (e = (e + 1) | 0);
                        }
                        return (t.fs_1 = t.fs_1.g3(g(r))), c;
                    }),
                    (v(Mt).fu = function (t, s, r, i) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - i) | 0)) e = !1;
                        else {
                            for (var n = r, _ = (t + i) | 0, h = pt(this, t), f = t; f < _; ) {
                                var a = 0 === h ? 0 : this.rt_1[(h - 1) | 0],
                                    u = (this.rt_1[h] - a) | 0,
                                    v = this.rt_1[(this.qt_1.length + h) | 0],
                                    o = (a + u) | 0,
                                    w = (Math.min(_, o) - f) | 0,
                                    l = (v + ((f - a) | 0)) | 0,
                                    c = this.qt_1[h];
                                if (!s.gu(n, c, l, w)) {
                                    e = !1;
                                    break t;
                                }
                                (n = (n + w) | 0), (f = (f + w) | 0), (h = (h + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Mt).gu = function (t, s, r, i) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - i) | 0) || r < 0 || r > ((s.length - i) | 0)) e = !1;
                        else {
                            for (var n = r, _ = (t + i) | 0, h = pt(this, t), f = t; f < _; ) {
                                var a = 0 === h ? 0 : this.rt_1[(h - 1) | 0],
                                    u = (this.rt_1[h] - a) | 0,
                                    v = this.rt_1[(this.qt_1.length + h) | 0],
                                    o = (a + u) | 0,
                                    w = (Math.min(_, o) - f) | 0,
                                    l = (v + ((f - a) | 0)) | 0;
                                if (!lt(this.qt_1[h], l, s, n, w)) {
                                    e = !1;
                                    break t;
                                }
                                (n = (n + w) | 0), (f = (f + w) | 0), (h = (h + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Mt).zt = function () {
                        return this.du();
                    }),
                    (v(Mt).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.s() && this.fu(0, t, 0, this.s()));
                    }),
                    (v(Mt).hashCode = function () {
                        var t,
                            s = this.is_1;
                        if (0 === s) {
                            s = 1;
                            for (var r = this.qt_1.length, i = 0, e = 0; i < r; ) {
                                for (var n = this.rt_1[(r + i) | 0], _ = this.rt_1[i], h = this.qt_1[i], f = n, a = (n + ((_ - e) | 0)) | 0; f < a; ) (s = (u(31, s) + h[f]) | 0), (f = (f + 1) | 0);
                                (e = _), (i = (i + 1) | 0);
                            }
                            this.xt(s), (t = s);
                        } else t = s;
                        return t;
                    }),
                    (v(Mt).toString = function () {
                        return Ct(this).toString();
                    }),
                    (v(At).e5 = function () {
                        if (null == this.iu_1) {
                            throw $(w("not attached to a buffer"));
                        }
                        (this.iu_1 = null), (this.ku_1 = null), (this.lu_1 = new k(-1, -1)), (this.mu_1 = null), (this.nu_1 = -1), (this.ou_1 = -1);
                    }),
                    (v(Bt).pu = function () {
                        return this;
                    }),
                    (v(Bt).qu = function () {
                        return this.fs_1.equals(new k(0, 0));
                    }),
                    (v(Bt).ru = function (t) {
                        if (this.fs_1.e1(t) < 0) throw new Rt(null);
                    }),
                    (v(Bt).su = function (t) {
                        return this.fs_1.e1(t) >= 0;
                    }),
                    (v(Bt).tu = function (t, s, r) {
                        var i,
                            e = s,
                            n = r;
                        if ((ct(this.fs_1, e, n), n.equals(new k(0, 0)))) i = this;
                        else {
                            t.fs_1 = t.fs_1.g3(n);
                            for (var _ = this.es_1; e.e1(g((z(_).ts_1 - _.ss_1) | 0)) >= 0; ) (e = e.h3(g((_.ts_1 - _.ss_1) | 0))), (_ = _.ws_1);
                            for (; n.e1(new k(0, 0)) > 0; ) {
                                var h = z(_).at();
                                h.ss_1 = (h.ss_1 + e.k1()) | 0;
                                var f = h,
                                    a = (h.ss_1 + n.k1()) | 0,
                                    u = h.ts_1;
                                (f.ts_1 = Math.min(a, u)), null == t.es_1 ? ((h.xs_1 = h), (h.ws_1 = h.xs_1), (t.es_1 = h.ws_1)) : z(z(t.es_1).xs_1).ct(h), (n = n.h3(g((h.ts_1 - h.ss_1) | 0))), (e = new k(0, 0)), (_ = _.ws_1);
                            }
                            i = this;
                        }
                        return i;
                    }),
                    (v(Bt).kt = function (t) {
                        var s;
                        ct(this.fs_1, t, new k(1, 0));
                        var r = this.es_1;
                        if (null != r) {
                            var i = r;
                            if (this.fs_1.h3(t).e1(t) < 0) {
                                for (var e = this.fs_1; e.e1(t) > 0; ) (i = z(i.xs_1)), (e = e.h3(g((i.ts_1 - i.ss_1) | 0)));
                                var n = i,
                                    _ = e;
                                s = z(n).rs_1[K(n.ss_1).g3(t).h3(_).k1()];
                            } else {
                                var h = new k(0, 0);
                                t: for (;;) {
                                    var f = h,
                                        a = (i.ts_1 - i.ss_1) | 0,
                                        u = f.g3(g(a));
                                    if (u.e1(t) > 0) break t;
                                    (i = z(i.ws_1)), (h = u);
                                }
                                var v = i,
                                    o = h;
                                s = z(v).rs_1[K(v.ss_1).g3(t).h3(o).k1()];
                            }
                        } else {
                            var w = new k(-1, -1);
                            s = z(null).rs_1[K(null.ss_1).g3(t).h3(w).k1()];
                        }
                        return s;
                    }),
                    (v(Bt).uu = function () {
                        var t,
                            s = this.fs_1;
                        if (s.equals(new k(0, 0))) t = new k(0, 0);
                        else {
                            var r = z(z(this.es_1).xs_1);
                            r.ts_1 < 8192 && r.vs_1 && (s = s.h3(g((r.ts_1 - r.ss_1) | 0))), (t = s);
                        }
                        return t;
                    }),
                    (v(Bt).vu = function () {
                        if (this.fs_1.equals(new k(0, 0))) throw Ft();
                        var t = z(this.es_1),
                            s = t.ss_1,
                            r = t.ts_1,
                            i = s;
                        s = (i + 1) | 0;
                        var e = t.rs_1[i];
                        return (this.fs_1 = this.fs_1.h3(new k(1, 0))), s === r ? ((this.es_1 = t.bt()), a.jt(t)) : (t.ss_1 = s), e;
                    }),
                    (v(Bt).os = function () {
                        var t;
                        if (this.fs_1.e1(new k(4, 0)) < 0) throw Ft();
                        var s = z(this.es_1),
                            r = s.ss_1,
                            i = s.ts_1;
                        if (g((i - r) | 0).e1(new k(4, 0)) < 0) {
                            t = ((255 & this.vu()) << 24) | ((255 & this.vu()) << 16) | ((255 & this.vu()) << 8) | (255 & this.vu());
                        } else {
                            var e = s.rs_1,
                                n = r,
                                _ = (r = (n + 1) | 0),
                                h = (r = (_ + 1) | 0),
                                f = (r = (h + 1) | 0);
                            r = (f + 1) | 0;
                            var u = ((255 & e[n]) << 24) | ((255 & e[_]) << 16) | ((255 & e[h]) << 8) | (255 & e[f]);
                            (this.fs_1 = this.fs_1.h3(new k(4, 0))), r === i ? ((this.es_1 = s.bt()), a.jt(s)) : (s.ss_1 = r), (t = u);
                        }
                        return t;
                    }),
                    (v(Bt).wu = function () {
                        return this.xu(this.fs_1);
                    }),
                    (v(Bt).xu = function (t) {
                        var s;
                        if (!(t.e1(new k(0, 0)) >= 0 && t.e1(new k(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw l(w(r));
                        }
                        if (this.fs_1.e1(t) < 0) throw Ft();
                        if (t.e1(new k(4096, 0)) >= 0) {
                            var i = this.zu(t.k1());
                            this.gs(t), (s = i);
                        } else s = new It(this.yu(t));
                        return s;
                    }),
                    (v(Bt).av = function () {
                        return this.lt(this.fs_1);
                    }),
                    (v(Bt).lt = function (t) {
                        var s;
                        if (!(t.e1(new k(0, 0)) >= 0 && t.e1(new k(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw l(w(r));
                        }
                        if (this.fs_1.e1(t) < 0) throw Ft();
                        if (t.equals(new k(0, 0))) s = "";
                        else {
                            var i = z(this.es_1);
                            if (K(i.ss_1).g3(t).e1(g(i.ts_1)) > 0) s = kt(this.yu(t));
                            else {
                                var e = kt(i.rs_1, i.ss_1, (i.ss_1 + t.k1()) | 0);
                                (i.ss_1 = (i.ss_1 + t.k1()) | 0), (this.fs_1 = this.fs_1.h3(t)), i.ss_1 === i.ts_1 && ((this.es_1 = i.bt()), a.jt(i)), (s = e);
                            }
                        }
                        return s;
                    }),
                    (v(Bt).bv = function () {
                        return this.cv(new k(-1, 2147483647));
                    }),
                    (v(Bt).cv = function (t) {
                        var s;
                        if (!(t.e1(new k(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw l(w(r));
                        }
                        var i = t.equals(new k(-1, 2147483647)) ? new k(-1, 2147483647) : t.g3(new k(1, 0)),
                            e = this.dv(10, new k(0, 0), i);
                        if (e.equals(new k(-1, -1))) {
                            var n;
                            if (i.e1(this.fs_1) < 0) {
                                var _ = i.h3(g(1));
                                n = 13 === this.kt(_);
                            } else n = !1;
                            if (!(!!n && 10 === this.kt(i))) {
                                var h = new Bt(),
                                    f = new k(0, 0),
                                    a = this.fs_1,
                                    u = g(32),
                                    v = u.e1(a) <= 0 ? u : a;
                                this.tu(h, f, v);
                                var o = this.fs_1;
                                throw new Rt("\\n not found: limit=" + (o.e1(t) <= 0 ? o : t).toString() + " content=" + h.wu().au() + "…");
                            }
                            s = bt(this, i);
                        } else s = bt(this, e);
                        return s;
                    }),
                    (v(Bt).ev = function (t) {
                        var s,
                            r = dt(this, t);
                        if (-1 !== r) {
                            var i = t.ps_1[r].s();
                            this.gs(g(i)), (s = r);
                        } else s = -1;
                        return s;
                    }),
                    (v(Bt).fv = function () {
                        return this.yu(this.fs_1);
                    }),
                    (v(Bt).yu = function (t) {
                        if (!(t.e1(new k(0, 0)) >= 0 && t.e1(new k(2147483647, 0)) <= 0)) {
                            var s = "byteCount: " + t.toString();
                            throw l(w(s));
                        }
                        if (this.fs_1.e1(t) < 0) throw Ft();
                        var r = new Int8Array(t.k1());
                        return this.gv(r), r;
                    }),
                    (v(Bt).gv = function (t) {
                        for (var s = 0; s < t.length; ) {
                            var r = this.hv(t, s, (t.length - s) | 0);
                            if (-1 === r) throw Ft();
                            s = (s + r) | 0;
                        }
                        return c;
                    }),
                    (v(Bt).hv = function (t, s, r) {
                        var i;
                        ct(g(t.length), g(s), g(r));
                        var e = this.es_1;
                        if (null != e) {
                            var n = e,
                                _ = (n.ts_1 - n.ss_1) | 0,
                                h = Math.min(r, _),
                                f = n.rs_1,
                                u = n.ss_1,
                                v = (n.ss_1 + h) | 0;
                            I(f, t, s, u, v), (n.ss_1 = (n.ss_1 + h) | 0), (this.fs_1 = this.fs_1.h3(g(h))), n.ss_1 === n.ts_1 && ((this.es_1 = n.bt()), a.jt(n)), (i = h);
                        } else i = -1;
                        return i;
                    }),
                    (v(Bt).j2 = function () {
                        return this.gs(this.fs_1), c;
                    }),
                    (v(Bt).gs = function (t) {
                        for (var s = t; s.e1(new k(0, 0)) > 0; ) {
                            var r = this.es_1;
                            if (null == r) throw Ft();
                            var i = r,
                                e = s,
                                n = (i.ts_1 - i.ss_1) | 0,
                                _ = g(n),
                                h = (e.e1(_) <= 0 ? e : _).k1();
                            (this.fs_1 = this.fs_1.h3(g(h))), (s = s.h3(g(h))), (i.ss_1 = (i.ss_1 + h) | 0), i.ss_1 === i.ts_1 && ((this.es_1 = i.bt()), a.jt(i));
                        }
                        return c;
                    }),
                    (v(Bt).iv = function (t) {
                        var s = t.s();
                        return t.eu(this, 0, s), this;
                    }),
                    (v(Bt).jv = function (t) {
                        var s;
                        if (!(t >= 1 && t <= 8192)) {
                            throw l(w("unexpected capacity"));
                        }
                        if (null != this.es_1) {
                            var r = z(this.es_1).xs_1;
                            (((z(r).ts_1 + t) | 0) > 8192 || !r.vs_1) && (r = r.ct(a.gt())), (s = r);
                        } else {
                            var i = a.gt();
                            (this.es_1 = i), (i.xs_1 = i), (i.ws_1 = i), (s = i);
                        }
                        return s;
                    }),
                    (v(Bt).kv = function (t) {
                        return this.lv(t, 0, t.length);
                    }),
                    (v(Bt).lv = function (t, s, r) {
                        if (!(s >= 0)) throw l(w("beginIndex < 0: " + s));
                        if (!(r >= s)) throw l(w("endIndex < beginIndex: " + r + " < " + s));
                        if (!(r <= t.length)) {
                            var i = "endIndex > string.length: " + r + " > " + t.length;
                            throw l(w(i));
                        }
                        for (var e = s; e < r; ) {
                            var n = M(t, e),
                                _ = E(n);
                            if (_ < 128) {
                                var h = this.jv(1),
                                    f = h.rs_1,
                                    a = (h.ts_1 - e) | 0,
                                    u = (8192 - a) | 0,
                                    v = Math.min(r, u),
                                    o = e;
                                (e = (o + 1) | 0), (f[(a + o) | 0] = O(_));
                                t: for (; e < v; ) {
                                    var c = M(t, e);
                                    if ((_ = E(c)) >= 128) break t;
                                    var $ = e;
                                    (e = ($ + 1) | 0), (f[(a + $) | 0] = O(_));
                                }
                                var b = (((e + a) | 0) - h.ts_1) | 0;
                                (h.ts_1 = (h.ts_1 + b) | 0), (this.fs_1 = this.fs_1.g3(g(b)));
                            } else if (_ < 2048) {
                                var d = this.jv(2);
                                (d.rs_1[d.ts_1] = O((_ >> 6) | 192)), (d.rs_1[(d.ts_1 + 1) | 0] = O((63 & _) | 128)), (d.ts_1 = (d.ts_1 + 2) | 0), (this.fs_1 = this.fs_1.g3(new k(2, 0))), (e = (e + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var x = this.jv(3);
                                (x.rs_1[x.ts_1] = O((_ >> 12) | 224)), (x.rs_1[(x.ts_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (x.rs_1[(x.ts_1 + 2) | 0] = O((63 & _) | 128)), (x.ts_1 = (x.ts_1 + 3) | 0), (this.fs_1 = this.fs_1.g3(new k(3, 0))), (e = (e + 1) | 0);
                            } else {
                                var q;
                                if (((e + 1) | 0) < r) {
                                    var y = M(t, (e + 1) | 0);
                                    q = E(y);
                                } else q = 0;
                                var m = q;
                                if (_ > 56319 || !(56320 <= m && m <= 57343)) {
                                    var S = A(63),
                                        p = E(S);
                                    this.mv(p), (e = (e + 1) | 0);
                                } else {
                                    var j = (65536 + (((1023 & _) << 10) | (1023 & m))) | 0,
                                        z = this.jv(4);
                                    (z.rs_1[z.ts_1] = O((j >> 18) | 240)), (z.rs_1[(z.ts_1 + 1) | 0] = O(((j >> 12) & 63) | 128)), (z.rs_1[(z.ts_1 + 2) | 0] = O(((j >> 6) & 63) | 128)), (z.rs_1[(z.ts_1 + 3) | 0] = O((63 & j) | 128)), (z.ts_1 = (z.ts_1 + 4) | 0), (this.fs_1 = this.fs_1.g3(new k(4, 0))), (e = (e + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (v(Bt).nv = function (t) {
                        return this.mt(t, 0, t.length);
                    }),
                    (v(Bt).mt = function (t, s, r) {
                        var i = s;
                        ct(g(t.length), g(i), g(r));
                        for (var e = (i + r) | 0; i < e; ) {
                            var n = this.jv(1),
                                _ = (e - i) | 0,
                                h = (8192 - n.ts_1) | 0,
                                f = Math.min(_, h),
                                a = n.rs_1,
                                u = n.ts_1;
                            I(t, a, u, i, (i + f) | 0), (i = (i + f) | 0), (n.ts_1 = (n.ts_1 + f) | 0);
                        }
                        return (this.fs_1 = this.fs_1.g3(g(r))), this;
                    }),
                    (v(Bt).ls = function (t) {
                        var s = new k(0, 0);
                        t: for (;;) {
                            var r = t.ov(this, new k(8192, 0));
                            if (r.equals(new k(-1, -1))) break t;
                            s = s.g3(r);
                        }
                        return s;
                    }),
                    (v(Bt).mv = function (t) {
                        var s = this.jv(1),
                            r = s.ts_1;
                        return (s.ts_1 = (r + 1) | 0), (s.rs_1[r] = O(t)), (this.fs_1 = this.fs_1.g3(new k(1, 0))), this;
                    }),
                    (v(Bt).ks = function (t) {
                        var s = this.jv(4),
                            r = s.rs_1,
                            i = s.ts_1,
                            e = i;
                        (i = (e + 1) | 0), (r[e] = O((t >>> 24) & 255));
                        var n = i;
                        (i = (n + 1) | 0), (r[n] = O((t >>> 16) & 255));
                        var _ = i;
                        (i = (_ + 1) | 0), (r[_] = O((t >>> 8) & 255));
                        var h = i;
                        return (i = (h + 1) | 0), (r[h] = O(255 & t)), (s.ts_1 = i), (this.fs_1 = this.fs_1.g3(new k(4, 0))), this;
                    }),
                    (v(Bt).ds = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (t === this) {
                                throw l(w("source == this"));
                            }
                            for (ct(t.fs_1, new k(0, 0), i); i.e1(new k(0, 0)) > 0; ) {
                                if (i.e1(g((z(t.es_1).ts_1 - z(t.es_1).ss_1) | 0)) < 0) {
                                    var e,
                                        n = null != this.es_1 ? z(this.es_1).xs_1 : null;
                                    if (null != n && n.vs_1) {
                                        var _ = i,
                                            h = n.ts_1,
                                            f = _.g3(g(h)),
                                            a = n.us_1 ? 0 : n.ss_1;
                                        e = f.h3(g(a)).e1(new k(8192, 0)) <= 0;
                                    } else e = !1;
                                    if (e) {
                                        z(t.es_1).it(n, i.k1()), (t.fs_1 = t.fs_1.h3(i)), (this.fs_1 = this.fs_1.g3(i)), (r = c);
                                        break t;
                                    }
                                    t.es_1 = z(t.es_1).dt(i.k1());
                                }
                                var u = t.es_1,
                                    v = g((z(u).ts_1 - u.ss_1) | 0);
                                if (((t.es_1 = u.bt()), null == this.es_1)) (this.es_1 = u), (u.xs_1 = u), (u.ws_1 = u.xs_1);
                                else {
                                    var o = z(this.es_1).xs_1;
                                    (o = z(o).ct(u)).ht();
                                }
                                (t.fs_1 = t.fs_1.h3(v)), (this.fs_1 = this.fs_1.g3(v)), (i = i.h3(v));
                            }
                        }
                        return r;
                    }),
                    (v(Bt).ov = function (t, s) {
                        var r,
                            i = s;
                        if (!(i.e1(new k(0, 0)) >= 0)) {
                            var e = "byteCount < 0: " + i.toString();
                            throw l(w(e));
                        }
                        return this.fs_1.equals(new k(0, 0)) ? (r = new k(-1, -1)) : (i.e1(this.fs_1) > 0 && (i = this.fs_1), t.ds(this, i), (r = i)), r;
                    }),
                    (v(Bt).dv = function (t, s, r) {
                        var i;
                        t: {
                            var e = s,
                                n = r;
                            if (!(new k(0, 0).e1(e) <= 0 && e.e1(n) <= 0)) {
                                var _ = "size=" + this.fs_1.toString() + " fromIndex=" + e.toString() + " toIndex=" + n.toString();
                                throw l(w(_));
                            }
                            if ((n.e1(this.fs_1) > 0 && (n = this.fs_1), e.equals(n))) i = new k(-1, -1);
                            else {
                                var h = e,
                                    f = this.es_1;
                                if (null != f) {
                                    var a = f;
                                    if (this.fs_1.h3(h).e1(h) < 0) {
                                        for (var u = this.fs_1; u.e1(h) > 0; ) (a = z(a.xs_1)), (u = u.h3(g((a.ts_1 - a.ss_1) | 0)));
                                        var v = a,
                                            o = u;
                                        if (null == v) {
                                            i = new k(-1, -1);
                                            break t;
                                        }
                                        for (var c = v, $ = o; $.e1(n) < 0; ) {
                                            for (var b = c.rs_1, d = g(c.ts_1), x = K(c.ss_1).g3(n).h3($), q = (d.e1(x) <= 0 ? d : x).k1(), y = K(c.ss_1).g3(e).h3($).k1(); y < q; ) {
                                                if (b[y] === t) {
                                                    i = K((y - c.ss_1) | 0).g3($);
                                                    break t;
                                                }
                                                y = (y + 1) | 0;
                                            }
                                            (e = $ = $.g3(g((c.ts_1 - c.ss_1) | 0))), (c = z(c.ws_1));
                                        }
                                        i = new k(-1, -1);
                                    } else {
                                        var m = new k(0, 0);
                                        s: for (;;) {
                                            var S = m,
                                                p = (a.ts_1 - a.ss_1) | 0,
                                                j = S.g3(g(p));
                                            if (j.e1(h) > 0) break s;
                                            (a = z(a.ws_1)), (m = j);
                                        }
                                        if (null != a) {
                                            for (var I = a, C = m; C.e1(n) < 0; ) {
                                                for (var M = I.rs_1, A = g(I.ts_1), B = K(I.ss_1).g3(n).h3(C), E = (A.e1(B) <= 0 ? A : B).k1(), O = K(I.ss_1).g3(e).h3(C).k1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        i = K((O - I.ss_1) | 0).g3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (e = C = C.g3(g((I.ts_1 - I.ss_1) | 0))), (I = z(I.ws_1));
                                            }
                                            i = new k(-1, -1);
                                        } else i = new k(-1, -1);
                                    }
                                } else {
                                    new k(-1, -1);
                                    i = new k(-1, -1);
                                }
                            }
                        }
                        return i;
                    }),
                    (v(Bt).pv = function (t) {
                        return this.qv(t, new k(0, 0));
                    }),
                    (v(Bt).qv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(t.s() > 0)) {
                                throw l(w("bytes is empty"));
                            }
                            if (!(i.e1(new k(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + i.toString();
                                throw l(w(e));
                            }
                            var n = i,
                                _ = this.es_1;
                            if (null != _) {
                                var h = _;
                                if (this.fs_1.h3(n).e1(n) < 0) {
                                    for (var f = this.fs_1; f.e1(n) > 0; ) (h = z(h.xs_1)), (f = f.h3(g((h.ts_1 - h.ss_1) | 0)));
                                    var a = h,
                                        u = f;
                                    if (null == a) {
                                        r = new k(-1, -1);
                                        break t;
                                    }
                                    for (var v = a, o = u, c = t.zt(), $ = c[0], b = t.s(), d = this.fs_1.h3(g(b)).g3(new k(1, 0)); o.e1(d) < 0; ) {
                                        var x = v.rs_1,
                                            q = v.ts_1,
                                            y = K(v.ss_1).g3(d).h3(o),
                                            m = g(q),
                                            S = (m.e1(y) <= 0 ? m : y).k1(),
                                            p = K(v.ss_1).g3(i).h3(o).k1();
                                        if (p < S)
                                            do {
                                                var j = p;
                                                if (((p = (p + 1) | 0), x[j] === $ && xt(v, (j + 1) | 0, c, 1, b))) {
                                                    r = K((j - v.ss_1) | 0).g3(o);
                                                    break t;
                                                }
                                            } while (p < S);
                                        (i = o = o.g3(g((v.ts_1 - v.ss_1) | 0))), (v = z(v.ws_1));
                                    }
                                    r = new k(-1, -1);
                                } else {
                                    var I = new k(0, 0);
                                    s: for (;;) {
                                        var C = I,
                                            M = (h.ts_1 - h.ss_1) | 0,
                                            A = C.g3(g(M));
                                        if (A.e1(n) > 0) break s;
                                        (h = z(h.ws_1)), (I = A);
                                    }
                                    if (null != h) {
                                        for (var B = h, E = I, O = t.zt(), F = O[0], R = t.s(), U = this.fs_1.h3(g(R)).g3(new k(1, 0)); E.e1(U) < 0; ) {
                                            var X = B.rs_1,
                                                L = B.ts_1,
                                                P = K(B.ss_1).g3(U).h3(E),
                                                V = g(L),
                                                D = (V.e1(P) <= 0 ? V : P).k1(),
                                                G = K(B.ss_1).g3(i).h3(E).k1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && xt(B, (H + 1) | 0, O, 1, R))) {
                                                        r = K((H - B.ss_1) | 0).g3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (i = E = E.g3(g((B.ts_1 - B.ss_1) | 0))), (B = z(B.ws_1));
                                        }
                                        r = new k(-1, -1);
                                    } else r = new k(-1, -1);
                                }
                            } else {
                                new k(-1, -1);
                                r = new k(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (v(Bt).rv = function (t) {
                        return this.sv(t, new k(0, 0));
                    }),
                    (v(Bt).sv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(i.e1(new k(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + i.toString();
                                throw l(w(e));
                            }
                            var n = i,
                                _ = this.es_1;
                            if (null != _) {
                                var h = _;
                                if (this.fs_1.h3(n).e1(n) < 0) {
                                    for (var f = this.fs_1; f.e1(n) > 0; ) (h = z(h.xs_1)), (f = f.h3(g((h.ts_1 - h.ss_1) | 0)));
                                    var a = h,
                                        u = f;
                                    if (null == a) {
                                        r = new k(-1, -1);
                                        break t;
                                    }
                                    var v = a,
                                        o = u;
                                    if (2 === t.s())
                                        for (var c = t.t(0), $ = t.t(1); o.e1(this.fs_1) < 0; ) {
                                            for (var b = v.rs_1, d = K(v.ss_1).g3(i).h3(o).k1(), x = v.ts_1; d < x; ) {
                                                var q = b[d];
                                                if (q === c || q === $) {
                                                    r = K((d - v.ss_1) | 0).g3(o);
                                                    break t;
                                                }
                                                d = (d + 1) | 0;
                                            }
                                            (i = o = o.g3(g((v.ts_1 - v.ss_1) | 0))), (v = z(v.ws_1));
                                        }
                                    else
                                        for (var y = t.zt(); o.e1(this.fs_1) < 0; ) {
                                            for (var m = v.rs_1, S = K(v.ss_1).g3(i).h3(o).k1(), p = v.ts_1; S < p; ) {
                                                for (var j = m[S], I = 0, C = y.length; I < C; ) {
                                                    var M = y[I];
                                                    if (((I = (I + 1) | 0), j === M)) {
                                                        r = K((S - v.ss_1) | 0).g3(o);
                                                        break t;
                                                    }
                                                }
                                                S = (S + 1) | 0;
                                            }
                                            (i = o = o.g3(g((v.ts_1 - v.ss_1) | 0))), (v = z(v.ws_1));
                                        }
                                    r = new k(-1, -1);
                                } else {
                                    var A = new k(0, 0);
                                    s: for (;;) {
                                        var B = A,
                                            E = (h.ts_1 - h.ss_1) | 0,
                                            O = B.g3(g(E));
                                        if (O.e1(n) > 0) break s;
                                        (h = z(h.ws_1)), (A = O);
                                    }
                                    if (null != h) {
                                        var F = h,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.e1(this.fs_1) < 0; ) {
                                                for (var L = F.rs_1, P = K(F.ss_1).g3(i).h3(R).k1(), V = F.ts_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        r = K((P - F.ss_1) | 0).g3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (i = R = R.g3(g((F.ts_1 - F.ss_1) | 0))), (F = z(F.ws_1));
                                            }
                                        else
                                            for (var G = t.zt(); R.e1(this.fs_1) < 0; ) {
                                                for (var H = F.rs_1, J = K(F.ss_1).g3(i).h3(R).k1(), N = F.ts_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            r = K((J - F.ss_1) | 0).g3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (i = R = R.g3(g((F.ts_1 - F.ss_1) | 0))), (F = z(F.ws_1));
                                            }
                                        r = new k(-1, -1);
                                    } else r = new k(-1, -1);
                                }
                            } else {
                                new k(-1, -1);
                                r = new k(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (v(Bt).tv = function (t, s) {
                        return this.uv(t, s, 0, s.s());
                    }),
                    (v(Bt).uv = function (t, s, r, i) {
                        var e;
                        t: if (t.e1(new k(0, 0)) < 0 || r < 0 || i < 0 || this.fs_1.h3(t).e1(g(i)) < 0 || ((s.s() - r) | 0) < i) e = !1;
                        else {
                            var n = 0;
                            if (n < i)
                                do {
                                    var _ = n;
                                    n = (n + 1) | 0;
                                    var h = t.g3(g(_));
                                    if (this.kt(h) !== s.t((r + _) | 0)) {
                                        e = !1;
                                        break t;
                                    }
                                } while (n < i);
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Bt).t9 = function () {
                        return c;
                    }),
                    (v(Bt).e5 = function () {
                        return c;
                    }),
                    (v(Bt).equals = function (t) {
                        var s;
                        t: if (this !== t)
                            if (t instanceof Bt)
                                if (this.fs_1.equals(t.fs_1))
                                    if (this.fs_1.equals(new k(0, 0))) s = !0;
                                    else {
                                        for (var r, i = z(this.es_1), e = z(t.es_1), n = i.ss_1, _ = e.ss_1, h = new k(0, 0); h.e1(this.fs_1) < 0; ) {
                                            var f = (i.ts_1 - n) | 0,
                                                a = (e.ts_1 - _) | 0,
                                                u = Math.min(f, a);
                                            r = g(u);
                                            var v = new k(0, 0);
                                            if (v.e1(r) < 0)
                                                do {
                                                    v = v.g3(new k(1, 0));
                                                    var o = n;
                                                    n = (o + 1) | 0;
                                                    var w = _;
                                                    if (((_ = (w + 1) | 0), i.rs_1[o] !== e.rs_1[w])) {
                                                        s = !1;
                                                        break t;
                                                    }
                                                } while (v.e1(r) < 0);
                                            n === i.ts_1 && (n = (i = z(i.ws_1)).ss_1), _ === e.ts_1 && (_ = (e = z(e.ws_1)).ss_1), (h = h.g3(r));
                                        }
                                        s = !0;
                                    }
                                else s = !1;
                            else s = !1;
                        else s = !0;
                        return s;
                    }),
                    (v(Bt).hashCode = function () {
                        var t,
                            s = this.es_1;
                        if (null != s) {
                            var r = s,
                                i = 1;
                            do {
                                for (var e = r.ss_1, n = r.ts_1; e < n; ) (i = (u(31, i) + r.rs_1[e]) | 0), (e = (e + 1) | 0);
                                r = z(r.ws_1);
                            } while (r !== this.es_1);
                            t = i;
                        } else t = 0;
                        return t;
                    }),
                    (v(Bt).toString = function () {
                        return this.vv().toString();
                    }),
                    (v(Bt).vv = function () {
                        if (!(this.fs_1.e1(new k(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.fs_1.toString();
                            throw $(w(t));
                        }
                        return this.zu(this.fs_1.k1());
                    }),
                    (v(Bt).zu = function (t) {
                        var s;
                        if (0 !== t) {
                            ct(this.fs_1, new k(0, 0), g(t));
                            for (var r = 0, i = 0, e = this.es_1; r < t; ) {
                                if (z(e).ts_1 === e.ss_1) throw N("s.limit == s.pos");
                                (r = (r + ((e.ts_1 - e.ss_1) | 0)) | 0), (i = (i + 1) | 0), (e = e.ws_1);
                            }
                            var n = Q(Array(i), null),
                                _ = new Int32Array(u(i, 2));
                            for (r = 0, i = 0, e = this.es_1; r < t; ) {
                                n[i] = z(e).rs_1;
                                var h = (r = (r + ((e.ts_1 - e.ss_1) | 0)) | 0);
                                (_[i] = Math.min(h, t)), (_[(i + n.length) | 0] = e.ss_1), (e.us_1 = !0), (i = (i + 1) | 0), (e = e.ws_1);
                            }
                            s = new Mt(T(n) ? n : G(), _);
                        } else s = zt().st_1;
                        return s;
                    }),
                    (v(Lt).ds = function (t, s) {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.ds(t, s), this.zv(), c;
                    }),
                    (v(Lt).iv = function (t) {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.iv(t), this.zv();
                    }),
                    (v(Lt).kv = function (t) {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.kv(t), this.zv();
                    }),
                    (v(Lt).lv = function (t, s, r) {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.lv(t, s, r), this.zv();
                    }),
                    (v(Lt).mv = function (t) {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.mv(t), this.zv();
                    }),
                    (v(Lt).zv = function () {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        var t = this.yv_1.uu();
                        return t.e1(new k(0, 0)) > 0 && this.wv_1.ds(this.yv_1, t), this;
                    }),
                    (v(Lt).t9 = function () {
                        if (this.xv_1) {
                            throw $(w("closed"));
                        }
                        return this.yv_1.fs_1.e1(new k(0, 0)) > 0 && this.wv_1.ds(this.yv_1, this.yv_1.fs_1), this.wv_1.t9(), c;
                    }),
                    (v(Lt).e5 = function () {
                        var t;
                        if (this.xv_1) t = c;
                        else {
                            var s = null;
                            try {
                                this.yv_1.fs_1.e1(new k(0, 0)) > 0 && this.wv_1.ds(this.yv_1, this.yv_1.fs_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                s = t;
                            }
                            try {
                                this.wv_1.e5();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == s && (s = t);
                            }
                            if (((this.xv_1 = !0), null != s)) throw s;
                        }
                        return t;
                    }),
                    (v(Lt).toString = function () {
                        return "buffer(" + w(this.wv_1) + ")";
                    }),
                    (v(Pt).pu = function () {
                        return this.cw_1;
                    }),
                    (v(Pt).ov = function (t, s) {
                        var r;
                        t: {
                            if (!(s.e1(new k(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + s.toString();
                                throw l(w(i));
                            }
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            if (this.cw_1.fs_1.equals(new k(0, 0))) {
                                if (s.equals(new k(0, 0))) {
                                    r = new k(0, 0);
                                    break t;
                                }
                                if (this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) {
                                    r = new k(-1, -1);
                                    break t;
                                }
                            }
                            var e = this.cw_1.fs_1,
                                n = s.e1(e) <= 0 ? s : e;
                            r = this.cw_1.ov(t, n);
                        }
                        return r;
                    }),
                    (v(Pt).qu = function () {
                        if (this.bw_1) {
                            throw $(w("closed"));
                        }
                        return this.cw_1.qu() && this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1));
                    }),
                    (v(Pt).ru = function (t) {
                        if (!this.su(t)) throw Ft();
                    }),
                    (v(Pt).su = function (t) {
                        var s;
                        t: {
                            if (!(t.e1(new k(0, 0)) >= 0)) {
                                var r = "byteCount < 0: " + t.toString();
                                throw l(w(r));
                            }
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            for (; this.cw_1.fs_1.e1(t) < 0; )
                                if (this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) {
                                    s = !1;
                                    break t;
                                }
                            s = !0;
                        }
                        return s;
                    }),
                    (v(Pt).ev = function (t) {
                        var s;
                        t: {
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            for (;;) {
                                var r = dt(this.cw_1, t, !0);
                                switch (r) {
                                    case -1:
                                        s = -1;
                                        break t;
                                    case -2:
                                        if (this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) {
                                            s = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var i = t.ps_1[r].s();
                                        this.cw_1.gs(g(i)), (s = r);
                                        break t;
                                }
                            }
                        }
                        return s;
                    }),
                    (v(Pt).bv = function () {
                        return this.cv(new k(-1, 2147483647));
                    }),
                    (v(Pt).cv = function (t) {
                        var s;
                        if (!(t.e1(new k(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw l(w(r));
                        }
                        var i = t.equals(new k(-1, 2147483647)) ? new k(-1, 2147483647) : t.g3(g(1)),
                            e = this.dv(10, new k(0, 0), i);
                        if (e.equals(new k(-1, -1))) {
                            var n, _;
                            if (i.e1(new k(-1, 2147483647)) < 0 && this.su(i)) {
                                var h = i.h3(g(1));
                                _ = 13 === this.cw_1.kt(h);
                            } else _ = !1;
                            if (_) {
                                var f = i.g3(g(1));
                                n = this.su(f);
                            } else n = !1;
                            if (!(!!n && 10 === this.cw_1.kt(i))) {
                                var a = new Bt(),
                                    u = new k(0, 0),
                                    v = this.cw_1.fs_1,
                                    o = g(32),
                                    c = o.e1(v) <= 0 ? o : v;
                                this.cw_1.tu(a, u, c);
                                var $ = this.cw_1.fs_1;
                                throw new Rt("\\n not found: limit=" + ($.e1(t) <= 0 ? $ : t).toString() + " content=" + a.wu().au() + "…");
                            }
                            s = bt(this.cw_1, i);
                        } else s = bt(this.cw_1, e);
                        return s;
                    }),
                    (v(Pt).gs = function (t) {
                        var s = t;
                        if (this.bw_1) {
                            throw $(w("closed"));
                        }
                        for (; s.e1(new k(0, 0)) > 0; ) {
                            if (this.cw_1.fs_1.equals(new k(0, 0)) && this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) throw Ft();
                            var r = s,
                                i = this.cw_1.fs_1,
                                e = r.e1(i) <= 0 ? r : i;
                            this.cw_1.gs(e), (s = s.h3(e));
                        }
                        return c;
                    }),
                    (v(Pt).dv = function (t, s, r) {
                        var i;
                        t: {
                            var e = s;
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            if (!(new k(0, 0).e1(e) <= 0 && e.e1(r) <= 0)) {
                                var n = "fromIndex=" + e.toString() + " toIndex=" + r.toString();
                                throw l(w(n));
                            }
                            for (; e.e1(r) < 0; ) {
                                var _ = this.cw_1.dv(t, e, r);
                                if (!_.equals(new k(-1, -1))) {
                                    i = _;
                                    break t;
                                }
                                var h = this.cw_1.fs_1;
                                if (h.e1(r) >= 0 || this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) {
                                    i = new k(-1, -1);
                                    break t;
                                }
                                var f = e;
                                e = f.e1(h) >= 0 ? f : h;
                            }
                            i = new k(-1, -1);
                        }
                        return i;
                    }),
                    (v(Pt).rv = function (t) {
                        return this.sv(t, new k(0, 0));
                    }),
                    (v(Pt).sv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            for (;;) {
                                var e = this.cw_1.sv(t, i);
                                if (!e.equals(new k(-1, -1))) {
                                    r = e;
                                    break t;
                                }
                                var n = this.cw_1.fs_1;
                                if (this.aw_1.ov(this.cw_1, new k(8192, 0)).equals(new k(-1, -1))) {
                                    r = new k(-1, -1);
                                    break t;
                                }
                                var _ = i;
                                i = _.e1(n) >= 0 ? _ : n;
                            }
                        }
                        return r;
                    }),
                    (v(Pt).tv = function (t, s) {
                        return this.uv(t, s, 0, s.s());
                    }),
                    (v(Pt).uv = function (t, s, r, i) {
                        var e;
                        t: {
                            if (this.bw_1) {
                                throw $(w("closed"));
                            }
                            if (t.e1(new k(0, 0)) < 0 || r < 0 || i < 0 || ((s.s() - r) | 0) < i) e = !1;
                            else {
                                var n = 0;
                                if (n < i)
                                    do {
                                        var _ = n;
                                        n = (n + 1) | 0;
                                        var h = t.g3(g(_)),
                                            f = h.g3(g(1));
                                        if (!this.su(f)) {
                                            e = !1;
                                            break t;
                                        }
                                        if (this.cw_1.kt(h) !== s.t((r + _) | 0)) {
                                            e = !1;
                                            break t;
                                        }
                                    } while (n < i);
                                e = !0;
                            }
                        }
                        return e;
                    }),
                    (v(Pt).e5 = function () {
                        var t;
                        return this.bw_1 ? (t = c) : ((this.bw_1 = !0), this.aw_1.e5(), this.cw_1.j2()), t;
                    }),
                    (v(Pt).toString = function () {
                        return "buffer(" + w(this.aw_1) + ")";
                    }),
                    (v(Vt).gt = function () {
                        return at();
                    }),
                    (v(Vt).jt = function (t) {}),
                    (r = new ht()),
                    new vt(),
                    (a = new Vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ut),
                    (t.$_$.b = function t(s) {
                        var r = Ut(s, j(v(Xt)));
                        return Z(r, t), r;
                    }),
                    (t.$_$.c = zt),
                    (t.$_$.d = r),
                    (t.$_$.e = $t),
                    (t.$_$.f = Bt),
                    (t.$_$.g = Rt),
                    (t.$_$.h = Xt),
                    (t.$_$.i = function () {
                        return new it();
                    }),
                    (t.$_$.j = function (t) {
                        return new Pt(t);
                    }),
                    (t.$_$.k = function (t) {
                        return new Lt(t);
                    });
            })(t.exports, r(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.308cae9a.js.map
