(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-7b644756"],
    {
        222818: (t, r, i) => {
            !(function (t, r) {
                "use strict";
                var i,
                    n,
                    e,
                    s,
                    _,
                    u,
                    h,
                    a,
                    f = Math.imul,
                    v = r.$_$.ef,
                    o = r.$_$.be,
                    w = r.$_$.if,
                    l = r.$_$.i2,
                    c = r.$_$.t6,
                    k = r.$_$.gf,
                    x = r.$_$.n2,
                    g = r.$_$.zj,
                    j = r.$_$.g,
                    $ = r.$_$.zb,
                    b = r.$_$.ob,
                    d = r.$_$.t,
                    p = r.$_$.d8,
                    q = r.$_$.ce,
                    y = r.$_$.v6,
                    m = r.$_$.t7,
                    z = r.$_$.df,
                    S = r.$_$.al,
                    I = r.$_$.y7,
                    C = r.$_$.g2,
                    M = r.$_$.ld,
                    A = r.$_$.t3,
                    B = r.$_$.u3,
                    E = r.$_$.z3,
                    O = r.$_$.ff,
                    F = r.$_$.w8,
                    R = r.$_$.kd,
                    U = r.$_$.ze,
                    X = r.$_$.qg,
                    L = r.$_$.jd,
                    P = r.$_$.r8,
                    V = r.$_$.pg,
                    D = r.$_$.n8,
                    G = r.$_$.gk,
                    H = r.$_$.uh,
                    J = r.$_$.pj,
                    K = r.$_$.cf,
                    N = r.$_$.u1,
                    Q = r.$_$.td,
                    T = r.$_$.ie,
                    W = r.$_$.yj,
                    Y = r.$_$.r2,
                    Z = r.$_$.id,
                    tt = r.$_$.vj,
                    rt = r.$_$.b2,
                    it = r.$_$.he;
                function nt() {}
                function et(t, r, i, n, e, s, _, u) {
                    if (!(s < _)) {
                        throw l(w("Failed requirement."));
                    }
                    var h = s;
                    if (h < _)
                        do {
                            var a = h;
                            if (((h = (h + 1) | 0), !(e.t(a).s() >= n))) {
                                throw l(w("Failed requirement."));
                            }
                        } while (h < _);
                    var v = s,
                        o = e.t(v),
                        c = e.t((_ - 1) | 0),
                        g = -1;
                    if ((n === o.s() && ((g = u.t(v)), (v = (v + 1) | 0), (o = e.t(v))), o.t(n) !== c.t(n))) {
                        var j = 1,
                            $ = (v + 1) | 0;
                        if ($ < _)
                            do {
                                var b = $;
                                ($ = ($ + 1) | 0), e.t((b - 1) | 0).t(n) !== e.t(b).t(n) && (j = (j + 1) | 0);
                            } while ($ < _);
                        var d = r.i3(_t(i, t)).i3(k(2)),
                            p = f(j, 2),
                            q = d.i3(k(p));
                        i.ct(j), i.ct(g);
                        var y = v;
                        if (y < _)
                            do {
                                var m = y;
                                y = (y + 1) | 0;
                                var z = e.t(m).t(n);
                                if (m === v || z !== e.t((m - 1) | 0).t(n)) {
                                    var S = 255 & z;
                                    i.ct(S);
                                }
                            } while (y < _);
                        for (var I = new At(), C = v; C < _; ) {
                            var M = e.t(C).t(n),
                                A = _,
                                B = (C + 1) | 0;
                            if (B < _)
                                t: do {
                                    var E = B;
                                    if (((B = (B + 1) | 0), M !== e.t(E).t(n))) {
                                        A = E;
                                        break t;
                                    }
                                } while (B < _);
                            ((C + 1) | 0) === A && ((n + 1) | 0) === e.t(C).s() ? i.ct(u.t(C)) : (i.ct(f(-1, q.i3(_t(I, t)).k1())), et(t, q, I, (n + 1) | 0, e, C, A, u)), (C = A);
                        }
                        i.dt(I);
                    } else {
                        var O = 0,
                            F = n,
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
                            V = r.i3(_t(i, t)).i3(k(2)).i3(k(P)).i3(k(1));
                        i.ct(0 | -O), i.ct(g);
                        var D = n,
                            G = (n + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                i.ct(J);
                            } while (D < G);
                        if (((v + 1) | 0) === _) {
                            if (((n + O) | 0) !== e.t(v).s()) {
                                throw x(w("Check failed."));
                            }
                            i.ct(u.t(v));
                        } else {
                            var K = new At();
                            i.ct(f(-1, V.i3(_t(K, t)).k1())), et(t, V, K, (n + O) | 0, e, v, _, u), i.dt(K);
                        }
                    }
                }
                function st(t, r, i, n, e, s, _, u, h) {
                    return (r = r === j ? new g(0, 0) : r), (n = n === j ? 0 : n), (s = s === j ? 0 : s), (_ = _ === j ? e.s() : _), et(t, r, i, n, e, s, _, u);
                }
                function _t(t, r) {
                    return t.xs_1.l3(k(4));
                }
                function ut() {}
                function ht(t, r) {
                    y.call(this), (this.ht_1 = t), (this.it_1 = r);
                }
                function at() {
                    return (t = z(v(ot))), ot.call(t), (t.jt_1 = new Int8Array(8192)), (t.nt_1 = !0), (t.mt_1 = !1), t;
                    var t;
                }
                function ft(t, r, i, n, e) {
                    return (function (t, r, i, n, e, s) {
                        return ot.call(s), (s.jt_1 = t), (s.kt_1 = r), (s.lt_1 = i), (s.mt_1 = n), (s.nt_1 = e), s;
                    })(t, r, i, n, e, z(v(ot)));
                }
                function vt() {
                    (this.qt_1 = 8192), (this.rt_1 = 1024);
                }
                function ot() {
                    (this.kt_1 = 0), (this.lt_1 = 0), (this.mt_1 = !1), (this.nt_1 = !1), (this.ot_1 = null), (this.pt_1 = null);
                }
                function wt() {
                    return kt(), n;
                }
                function lt(t, r, i, n, e) {
                    kt();
                    var s = 0;
                    if (s < e)
                        do {
                            var _ = s;
                            if (((s = (s + 1) | 0), t[(_ + r) | 0] !== i[(_ + n) | 0])) return !1;
                        } while (s < e);
                    return !0;
                }
                function ct(t, r, i) {
                    if ((kt(), r.w3(i).e1(new g(0, 0)) < 0 || r.e1(t) > 0 || t.j3(r).e1(i) < 0)) throw new Et("size=" + t.toString() + " offset=" + r.toString() + " byteCount=" + i.toString());
                }
                function kt() {
                    e || ((e = !0), new Mt(), (n = -1234567890));
                }
                function xt(t, r, i) {
                    if (((r = r === j ? 0 : r), (i = i === j ? t.length : i), r < 0 || i > t.length || r > i)) throw new Et("size=" + t.length + " beginIndex=" + r + " endIndex=" + i);
                    for (var n = R((i - r) | 0), e = 0, s = r; s < i; ) {
                        var _ = t[s];
                        if (_ >= 0) {
                            var u = e;
                            for (e = (u + 1) | 0, n[u] = U(_), s = (s + 1) | 0; s < i && t[s] >= 0; ) {
                                var h = s;
                                s = (h + 1) | 0;
                                var a = e;
                                (e = (a + 1) | 0), (n[a] = U(t[h]));
                            }
                        } else if (_ >> 5 == -2) {
                            var f,
                                v = s,
                                o = s;
                            if (i <= ((o + 1) | 0)) {
                                var w = e;
                                (e = (w + 1) | 0), (n[w] = U(65533)), (f = 1);
                            } else {
                                var l = t[o],
                                    c = t[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var k = 3968 ^ c ^ (l << 6);
                                    if (k < 128) {
                                        var x = e;
                                        (e = (x + 1) | 0), (n[x] = U(65533));
                                    } else {
                                        var g = e;
                                        (e = (g + 1) | 0), (n[g] = U(k));
                                    }
                                    f = 2;
                                } else {
                                    var $ = e;
                                    (e = ($ + 1) | 0), (n[$] = U(65533)), (f = 1);
                                }
                            }
                            s = (v + f) | 0;
                        } else if (_ >> 4 == -2) {
                            var b,
                                d = s;
                            t: {
                                var p = s;
                                if (i <= ((p + 2) | 0)) {
                                    var q = e;
                                    if (((e = (q + 1) | 0), (n[q] = U(65533)), i <= ((p + 1) | 0) || !(128 == (192 & t[(p + 1) | 0])))) {
                                        b = 1;
                                        break t;
                                    }
                                    b = 2;
                                } else {
                                    var y = t[p],
                                        m = t[(p + 1) | 0];
                                    if (128 == (192 & m)) {
                                        var z = t[(p + 2) | 0];
                                        if (128 == (192 & z)) {
                                            var S = -123008 ^ z ^ (m << 6) ^ (y << 12);
                                            if (S < 2048) {
                                                var I = e;
                                                (e = (I + 1) | 0), (n[I] = U(65533));
                                            } else if (55296 <= S && S <= 57343) {
                                                var C = e;
                                                (e = (C + 1) | 0), (n[C] = U(65533));
                                            } else {
                                                var M = e;
                                                (e = (M + 1) | 0), (n[M] = U(S));
                                            }
                                            b = 3;
                                        } else {
                                            var B = e;
                                            (e = (B + 1) | 0), (n[B] = U(65533)), (b = 2);
                                        }
                                    } else {
                                        var E = e;
                                        (e = (E + 1) | 0), (n[E] = U(65533)), (b = 1);
                                    }
                                }
                            }
                            s = (d + b) | 0;
                        } else if (_ >> 3 == -2) {
                            var O,
                                F = s;
                            t: {
                                var L = s;
                                if (i <= ((L + 3) | 0)) {
                                    var P = e;
                                    if (((e = (P + 1) | 0), (n[P] = A(65533)), i <= ((L + 1) | 0) || !(128 == (192 & t[(L + 1) | 0])))) {
                                        O = 1;
                                        break t;
                                    }
                                    if (i <= ((L + 2) | 0) || !(128 == (192 & t[(L + 2) | 0]))) {
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
                                                    (e = (K + 1) | 0), (n[K] = A(65533));
                                                } else if (55296 <= J && J <= 57343) {
                                                    var N = e;
                                                    (e = (N + 1) | 0), (n[N] = A(65533));
                                                } else if (J < 65536) {
                                                    var Q = e;
                                                    (e = (Q + 1) | 0), (n[Q] = A(65533));
                                                } else if (65533 !== J) {
                                                    var T = e;
                                                    (e = (T + 1) | 0), (n[T] = U((55232 + ((J >>> 10) | 0)) | 0));
                                                    var W = e;
                                                    (e = (W + 1) | 0), (n[W] = U((56320 + (1023 & J)) | 0));
                                                } else {
                                                    var Y = e;
                                                    (e = (Y + 1) | 0), (n[Y] = A(65533));
                                                }
                                                O = 4;
                                            } else {
                                                var Z = e;
                                                (e = (Z + 1) | 0), (n[Z] = A(65533)), (O = 3);
                                            }
                                        } else {
                                            var tt = e;
                                            (e = (tt + 1) | 0), (n[tt] = A(65533)), (O = 2);
                                        }
                                    } else {
                                        var rt = e;
                                        (e = (rt + 1) | 0), (n[rt] = A(65533)), (O = 1);
                                    }
                                }
                            }
                            s = (F + O) | 0;
                        } else {
                            var it = e;
                            (e = (it + 1) | 0), (n[it] = A(65533)), (s = (s + 1) | 0);
                        }
                    }
                    return X(n, 0, e);
                }
                function gt(t, r) {
                    var i, n;
                    if ((bt(), r.e1(new g(0, 0)) > 0)) {
                        var e = r.j3(k(1));
                        n = 13 === t.cu(e);
                    } else n = !1;
                    if (n) {
                        var s = t.du(r.j3(new g(1, 0)));
                        t.ys(new g(2, 0)), (i = s);
                    } else {
                        var _ = t.du(r);
                        t.ys(new g(1, 0)), (i = _);
                    }
                    return i;
                }
                function jt(t, r, i) {
                    (i = i !== j && i), bt();
                    var n = t.ws_1;
                    if (null == n) return i ? -2 : -1;
                    var e = n,
                        s = e,
                        _ = e.jt_1,
                        u = e.kt_1,
                        h = e.lt_1,
                        a = r.it_1,
                        v = 0,
                        o = -1;
                    t: for (;;) {
                        var w = v;
                        v = (w + 1) | 0;
                        var l = a[w],
                            c = v;
                        v = (c + 1) | 0;
                        var k,
                            x = a[c];
                        if ((-1 !== x && (o = x), null == s)) break t;
                        if (l < 0) {
                            var g = (v + f(-1, l)) | 0;
                            r: for (;;) {
                                var $ = u;
                                u = ($ + 1) | 0;
                                var b = v;
                                if (((v = (b + 1) | 0), (255 & _[$]) !== a[b])) return o;
                                var d = v === g;
                                if (u === h && ((u = (s = S(S(s).ot_1)).kt_1), (_ = s.jt_1), (h = s.lt_1), s === e)) {
                                    if (!d) break t;
                                    s = null;
                                }
                                if (d) {
                                    k = a[v];
                                    break r;
                                }
                            }
                        } else {
                            var p = l,
                                q = u;
                            u = (q + 1) | 0;
                            var y = 255 & _[q],
                                m = (v + p) | 0;
                            r: for (;;) {
                                if (v === m) return o;
                                if (y === a[v]) {
                                    k = a[(v + p) | 0];
                                    break r;
                                }
                                v = (v + 1) | 0;
                            }
                            u === h && ((u = (s = S(s.ot_1)).kt_1), (_ = s.jt_1), (h = s.lt_1), s === e && (s = null));
                        }
                        if (k >= 0) return k;
                        v = 0 | -k;
                    }
                    return i ? -2 : o;
                }
                function $t(t, r, i, n, e) {
                    bt();
                    for (var s = t, _ = r, u = s.lt_1, h = s.jt_1, a = n; a < e; ) {
                        if ((_ === u && ((h = (s = S(s.ot_1)).jt_1), (_ = s.kt_1), (u = s.lt_1)), h[_] !== i[a])) return !1;
                        (_ = (_ + 1) | 0), (a = (a + 1) | 0);
                    }
                    return !0;
                }
                function bt() {
                    s || ((s = !0), Bt("0123456789abcdef"));
                }
                function dt() {
                    return qt(), _;
                }
                function pt(t, r) {
                    return (
                        qt(),
                        (function (t, r) {
                            qt();
                            for (var i = 0, n = 0, e = t.length, s = 0; s < e; ) {
                                var _ = t[s];
                                if (_ >= 0) {
                                    var u,
                                        h = n;
                                    if (((n = (h + 1) | 0), h === r)) return i;
                                    var a = A(10);
                                    if (_ !== E(a)) {
                                        var f = A(13);
                                        u = !(_ === E(f));
                                    } else u = !1;
                                    if ((u && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (i = (i + (_ < 65536 ? 1 : 2)) | 0, s = (s + 1) | 0; s < e && t[s] >= 0; ) {
                                        var v = s;
                                        s = (v + 1) | 0;
                                        var o,
                                            w = t[v],
                                            l = n;
                                        if (((n = (l + 1) | 0), l === r)) return i;
                                        var c = A(10);
                                        if (w !== E(c)) {
                                            var k = A(13);
                                            o = !(w === E(k));
                                        } else o = !1;
                                        if ((o && ((0 <= w && w <= 31) || (127 <= w && w <= 159))) || 65533 === w) return -1;
                                        i = (i + (w < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var x = s,
                                        g = s;
                                    if (e <= ((g + 1) | 0)) {
                                        var j = n;
                                        if (((n = (j + 1) | 0), j === r)) return i;
                                        var $ = A(10);
                                        if (65533 !== E($)) {
                                            var b = A(13);
                                            E(b);
                                        }
                                        return -1;
                                    }
                                    var d = t[g],
                                        p = t[(g + 1) | 0];
                                    if (128 != (192 & p)) {
                                        var q = n;
                                        if (((n = (q + 1) | 0), q === r)) return i;
                                        var y = A(10);
                                        if (65533 !== E(y)) {
                                            var m = A(13);
                                            E(m);
                                        }
                                        return -1;
                                    }
                                    var z = 3968 ^ p ^ (d << 6);
                                    if (z < 128) {
                                        var S = n;
                                        if (((n = (S + 1) | 0), S === r)) return i;
                                        var I = A(10);
                                        if (65533 !== E(I)) {
                                            var C = A(13);
                                            E(C);
                                        }
                                        return -1;
                                    }
                                    var M,
                                        B = n;
                                    if (((n = (B + 1) | 0), B === r)) return i;
                                    var O = A(10);
                                    if (z !== E(O)) {
                                        var F = A(13);
                                        M = !(z === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= z && z <= 31) || (127 <= z && z <= 159))) || 65533 === z) return -1;
                                    (i = (i + (z < 65536 ? 1 : 2)) | 0), (s = (x + 2) | 0);
                                } else if (_ >> 4 == -2) {
                                    var R,
                                        U = s;
                                    t: {
                                        var X = s;
                                        if (e <= ((X + 2) | 0)) {
                                            var L = n;
                                            if (((n = (L + 1) | 0), L === r)) return i;
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
                                            var H = n;
                                            if (((n = (H + 1) | 0), H === r)) return i;
                                            var J = A(10);
                                            if (65533 !== E(J)) {
                                                var K = A(13);
                                                E(K);
                                            }
                                            return -1;
                                        }
                                        var N = t[(X + 2) | 0];
                                        if (128 != (192 & N)) {
                                            var Q = n;
                                            if (((n = (Q + 1) | 0), Q === r)) return i;
                                            var T = A(10);
                                            if (65533 !== E(T)) {
                                                var W = A(13);
                                                E(W);
                                            }
                                            return -1;
                                        }
                                        var Y = -123008 ^ N ^ (G << 6) ^ (D << 12);
                                        if (Y < 2048) {
                                            var Z = n;
                                            if (((n = (Z + 1) | 0), Z === r)) return i;
                                            var tt = A(10);
                                            if (65533 !== E(tt)) {
                                                var rt = A(13);
                                                E(rt);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= Y && Y <= 57343) {
                                            var it = n;
                                            if (((n = (it + 1) | 0), it === r)) return i;
                                            var nt = A(10);
                                            if (65533 !== E(nt)) {
                                                var et = A(13);
                                                E(et);
                                            }
                                            return -1;
                                        }
                                        var st,
                                            _t = n;
                                        if (((n = (_t + 1) | 0), _t === r)) return i;
                                        var ut = A(10);
                                        if (Y !== E(ut)) {
                                            var ht = A(13);
                                            st = !(Y === E(ht));
                                        } else st = !1;
                                        if ((st && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (i = (i + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    s = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var at = n;
                                        if (((n = (at + 1) | 0), at === r)) return i;
                                        var ft = A(10);
                                        if (65533 !== E(ft)) {
                                            var vt = A(13);
                                            E(vt);
                                        }
                                        return -1;
                                    }
                                    var ot,
                                        wt = s;
                                    t: {
                                        var lt = s;
                                        if (e <= ((lt + 3) | 0)) {
                                            var ct = n;
                                            if (((n = (ct + 1) | 0), ct === r)) return i;
                                            var kt = A(10);
                                            if (65533 !== E(kt)) {
                                                var xt = A(13);
                                                E(xt);
                                            }
                                            return -1;
                                        }
                                        var gt = t[lt],
                                            jt = t[(lt + 1) | 0];
                                        if (128 != (192 & jt)) {
                                            var $t = n;
                                            if (((n = ($t + 1) | 0), $t === r)) return i;
                                            var bt = A(10);
                                            if (65533 !== E(bt)) {
                                                var dt = A(13);
                                                E(dt);
                                            }
                                            return -1;
                                        }
                                        var pt = t[(lt + 2) | 0];
                                        if (128 != (192 & pt)) {
                                            var yt = n;
                                            if (((n = (yt + 1) | 0), yt === r)) return i;
                                            var mt = A(10);
                                            if (65533 !== E(mt)) {
                                                var zt = A(13);
                                                E(zt);
                                            }
                                            return -1;
                                        }
                                        var St = t[(lt + 3) | 0];
                                        if (128 != (192 & St)) {
                                            var It = n;
                                            if (((n = (It + 1) | 0), It === r)) return i;
                                            var Ct = A(10);
                                            if (65533 !== E(Ct)) {
                                                var Mt = A(13);
                                                E(Mt);
                                            }
                                            return -1;
                                        }
                                        var At = 3678080 ^ St ^ (pt << 6) ^ (jt << 12) ^ (gt << 18);
                                        if (At > 1114111) {
                                            var Bt = n;
                                            if (((n = (Bt + 1) | 0), Bt === r)) return i;
                                            var Et = A(10);
                                            if (65533 !== E(Et)) {
                                                var Ot = A(13);
                                                E(Ot);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= At && At <= 57343) {
                                            var Ft = n;
                                            if (((n = (Ft + 1) | 0), Ft === r)) return i;
                                            var Rt = A(10);
                                            if (65533 !== E(Rt)) {
                                                var Ut = A(13);
                                                E(Ut);
                                            }
                                            return -1;
                                        }
                                        if (At < 65536) {
                                            var Xt = n;
                                            if (((n = (Xt + 1) | 0), Xt === r)) return i;
                                            var Lt = A(10);
                                            if (65533 !== E(Lt)) {
                                                var Pt = A(13);
                                                E(Pt);
                                            }
                                            return -1;
                                        }
                                        var Vt,
                                            Dt = n;
                                        if (((n = (Dt + 1) | 0), Dt === r)) return i;
                                        var Gt = A(10);
                                        if (At !== E(Gt)) {
                                            var Ht = A(13);
                                            Vt = !(At === E(Ht));
                                        } else Vt = !1;
                                        if ((Vt && ((0 <= At && At <= 31) || (127 <= At && At <= 159))) || 65533 === At) return -1;
                                        (i = (i + (At < 65536 ? 1 : 2)) | 0), (ot = 4);
                                    }
                                    s = (wt + ot) | 0;
                                }
                            }
                            return i;
                        })(t, r)
                    );
                }
                function qt() {
                    u || ((u = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function yt(t, r) {
                    var i = (function (t, r, i, n) {
                        var e = i,
                            s = (n - 1) | 0;
                        for (; e <= s; ) {
                            var _ = (((e + s) | 0) >>> 1) | 0,
                                u = t[_];
                            if (u < r) e = (_ + 1) | 0;
                            else {
                                if (!(u > r)) return _;
                                s = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -e) - 1) | 0;
                    })(t.ju_1, (r + 1) | 0, 0, t.iu_1.length);
                    return i >= 0 ? i : ~i;
                }
                function mt() {
                    h = this;
                    var t = new Int8Array([]);
                    this.ku_1 = new St(t);
                }
                function zt() {
                    return null == h && new mt(), h;
                }
                function St(t) {
                    zt(), (this.zs_1 = t), (this.at_1 = 0), (this.bt_1 = null);
                }
                function It(t) {
                    return new St(t.vu());
                }
                function Ct(t, r) {
                    St.call(this, zt().ku_1.zs_1), (this.iu_1 = t), (this.ju_1 = r);
                }
                function Mt() {
                    (this.av_1 = null), (this.bv_1 = !1), (this.cv_1 = null), (this.dv_1 = new g(-1, -1)), (this.ev_1 = null), (this.fv_1 = -1), (this.gv_1 = -1);
                }
                function At() {
                    (this.ws_1 = null), (this.xs_1 = new g(0, 0));
                }
                function Bt(t) {
                    return (function (t) {
                        var r = new Int8Array(f(4, t.length)),
                            i = 0,
                            n = t.length;
                        if (i < n)
                            do {
                                var e = i;
                                i = (i + 1) | 0;
                                var s = M(t, e);
                                if (B(s, A(128)) >= 0) {
                                    for (var _ = e, u = t.length, h = e; h < u; ) {
                                        var a = M(t, h);
                                        if (B(a, A(128)) < 0) {
                                            var v = E(a),
                                                o = _;
                                            for (_ = (o + 1) | 0, r[o] = O(v), h = (h + 1) | 0; h < u && B(M(t, h), A(128)) < 0; ) {
                                                var w = h;
                                                h = (w + 1) | 0;
                                                var l = M(t, w),
                                                    c = E(l),
                                                    k = _;
                                                (_ = (k + 1) | 0), (r[k] = O(c));
                                            }
                                        } else if (B(a, A(2048)) < 0) {
                                            var x = E(a),
                                                g = _;
                                            (_ = (g + 1) | 0), (r[g] = O((x >> 6) | 192));
                                            var j = E(a),
                                                $ = _;
                                            (_ = ($ + 1) | 0), (r[$] = O((63 & j) | 128)), (h = (h + 1) | 0);
                                        } else if (A(55296) <= a && a <= A(57343)) {
                                            var b;
                                            if (B(a, A(56319)) > 0 || u <= ((h + 1) | 0)) b = !0;
                                            else {
                                                var d = M(t, (h + 1) | 0);
                                                b = !(A(56320) <= d && d <= A(57343));
                                            }
                                            if (b) {
                                                var p = _;
                                                (_ = (p + 1) | 0), (r[p] = 63), (h = (h + 1) | 0);
                                            } else {
                                                var q = E(a) << 10,
                                                    y = M(t, (h + 1) | 0),
                                                    m = (((q + E(y)) | 0) - 56613888) | 0,
                                                    z = _;
                                                (_ = (z + 1) | 0), (r[z] = O((m >> 18) | 240));
                                                var S = _;
                                                (_ = (S + 1) | 0), (r[S] = O(((m >> 12) & 63) | 128));
                                                var I = _;
                                                (_ = (I + 1) | 0), (r[I] = O(((m >> 6) & 63) | 128));
                                                var C = _;
                                                (_ = (C + 1) | 0), (r[C] = O((63 & m) | 128)), (h = (h + 2) | 0);
                                            }
                                        } else {
                                            var R = E(a),
                                                U = _;
                                            (_ = (U + 1) | 0), (r[U] = O((R >> 12) | 224));
                                            var X = E(a),
                                                L = _;
                                            (_ = (L + 1) | 0), (r[L] = O(((X >> 6) & 63) | 128));
                                            var P = E(a),
                                                V = _;
                                            (_ = (V + 1) | 0), (r[V] = O((63 & P) | 128)), (h = (h + 1) | 0);
                                        }
                                    }
                                    return F(r, _);
                                }
                                var D = E(s);
                                r[e] = O(D);
                            } while (i < n);
                        return F(r, t.length);
                    })(t);
                }
                function Et(t) {
                    Y(t, this), Z(this, Et);
                }
                function Ot() {
                    var t,
                        r = ((t = z(v(Ft))), Ft.call(t, null), t);
                    return Z(r, Ot), r;
                }
                function Ft(t) {
                    Rt(t, this), Z(this, Ft);
                }
                function Rt(t, r) {
                    return Ut.call(r, t, null), r;
                }
                function Ut(t, r) {
                    rt(t, r, this), Z(this, Ut);
                }
                function Xt(t) {
                    (this.ow_1 = t), (this.pw_1 = !1), (this.qw_1 = new At());
                }
                function Lt(t) {
                    (this.sw_1 = t), (this.tw_1 = !1), (this.uw_1 = new At());
                }
                function Pt() {
                    (this.wt_1 = 0), (this.xt_1 = 0);
                }
                o(nt, "BlackholeSink", nt),
                    q(ut),
                    o(ht, "Options", j, y, [y, m]),
                    q(vt),
                    o(ot, "Segment", at),
                    q(mt),
                    o(St, "ByteString", j, j, [J]),
                    o(Ct, "SegmentedByteString", j, St),
                    o(Mt, "UnsafeCursor", Mt),
                    o(At, "Buffer", At),
                    o(Et, "ArrayIndexOutOfBoundsException", j, W),
                    o(
                        Ut,
                        "IOException",
                        function t() {
                            var r = ((i = z(v(Ut))), Ut.call(i, null, null), i);
                            var i;
                            return Z(r, t), r;
                        },
                        tt,
                    ),
                    o(Ft, "EOFException", Ot, Ut),
                    o(Xt, "RealBufferedSink"),
                    o(Lt, "RealBufferedSource"),
                    it(Pt, "SegmentPool"),
                    (v(nt).vs = function (t, r) {
                        return t.ys(r);
                    }),
                    (v(nt).v9 = function () {}),
                    (v(nt).g5 = function () {}),
                    (v(ut).et = function (t) {
                        if (0 === t.length) {
                            return new ht([], new Int32Array([0, -1]));
                        }
                        var r = $(t);
                        b(r);
                        var i = r.s(),
                            n = d(i),
                            e = 0;
                        if (e < i)
                            do {
                                (e = (e + 1) | 0), n.k(-1);
                            } while (e < i);
                        for (var s = n, _ = 0, u = 0, h = t.length; u < h; ) {
                            var a = t[u];
                            u = (u + 1) | 0;
                            var f = _;
                            _ = (f + 1) | 0;
                            var v = p(r, a);
                            s.m2(v, f);
                        }
                        if (!(r.t(0).s() > 0)) {
                            throw l(w("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < r.s(); ) {
                            var c = r.t(o),
                                k = (o + 1) | 0;
                            t: for (; k < r.s(); ) {
                                var x = r.t(k);
                                if (!x.ft(c)) break t;
                                if (x.s() === c.s()) {
                                    var g = "duplicate option: " + x.toString();
                                    throw l(w(g));
                                }
                                s.t(k) > s.t(o) ? (r.o2(k), s.o2(k)) : (k = (k + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var q = new At();
                        st(this, j, q, j, r, j, j, s);
                        for (var y = 0, m = _t(q).k1(), z = new Int32Array(m); y < m; ) (z[y] = q.gt()), (y = (y + 1) | 0);
                        var S = z;
                        return new ht(t.slice(), S);
                    }),
                    (v(ht).s = function () {
                        return this.ht_1.length;
                    }),
                    (v(ht).t = function (t) {
                        return this.ht_1[t];
                    }),
                    (v(ot).st = function () {
                        return (this.mt_1 = !0), ft(this.jt_1, this.kt_1, this.lt_1, !0, !1);
                    }),
                    (v(ot).tt = function () {
                        var t = this.ot_1 !== this ? this.ot_1 : null;
                        return (S(this.pt_1).ot_1 = this.ot_1), (S(this.ot_1).pt_1 = this.pt_1), (this.ot_1 = null), (this.pt_1 = null), t;
                    }),
                    (v(ot).ut = function (t) {
                        return (t.pt_1 = this), (t.ot_1 = this.ot_1), (S(this.ot_1).pt_1 = t), (this.ot_1 = t), t;
                    }),
                    (v(ot).vt = function (t) {
                        if (!(t > 0 && t <= ((this.lt_1 - this.kt_1) | 0))) {
                            throw l(w("byteCount out of range"));
                        }
                        var r;
                        if (t >= 1024) r = this.st();
                        else {
                            r = a.yt();
                            var i = this.jt_1,
                                n = r.jt_1,
                                e = this.kt_1,
                                s = (this.kt_1 + t) | 0;
                            I(i, n, 0, e, s);
                        }
                        return (r.lt_1 = (r.kt_1 + t) | 0), (this.kt_1 = (this.kt_1 + t) | 0), S(this.pt_1).ut(r), r;
                    }),
                    (v(ot).zt = function () {
                        if (this.pt_1 === this) {
                            throw x(w("cannot compact"));
                        }
                        if (!S(this.pt_1).nt_1) return c;
                        var t = (this.lt_1 - this.kt_1) | 0;
                        if (t > ((((8192 - S(this.pt_1).lt_1) | 0) + (S(this.pt_1).mt_1 ? 0 : S(this.pt_1).kt_1)) | 0)) return c;
                        this.au(S(this.pt_1), t), this.tt(), a.bu(this);
                    }),
                    (v(ot).au = function (t, r) {
                        if (!t.nt_1) {
                            throw x(w("only owner can write"));
                        }
                        if (((t.lt_1 + r) | 0) > 8192) {
                            if (t.mt_1) throw C();
                            if (((((t.lt_1 + r) | 0) - t.kt_1) | 0) > 8192) throw C();
                            var i = t.jt_1,
                                n = t.jt_1,
                                e = t.kt_1,
                                s = t.lt_1;
                            I(i, n, 0, e, s), (t.lt_1 = (t.lt_1 - t.kt_1) | 0), (t.kt_1 = 0);
                        }
                        var _ = this.jt_1,
                            u = t.jt_1,
                            h = t.lt_1,
                            a = this.kt_1,
                            f = (this.kt_1 + r) | 0;
                        I(_, u, h, a, f), (t.lt_1 = (t.lt_1 + r) | 0), (this.kt_1 = (this.kt_1 + r) | 0);
                    }),
                    (v(mt).lu = function (t, r, i) {
                        var n = (function (t, r) {
                            return kt(), r === wt() ? t.length : r;
                        })(t, i);
                        return ct(k(t.length), k(r), k(n)), new St(P(t, r, (r + n) | 0));
                    }),
                    (v(mt).mu = function (t, r, i, n) {
                        return (r = r === j ? 0 : r), (i = i === j ? wt() : i), n === j ? this.lu(t, r, i) : n.lu.call(this, t, r, i);
                    }),
                    (v(mt).nu = function (t) {
                        var r = new St(Bt(t));
                        return r.ou(t), r;
                    }),
                    (v(St).pu = function (t) {}),
                    (v(St).ou = function (t) {}),
                    (v(St).qu = function () {
                        var t = this.bt_1;
                        return null == t && ((t = xt(this.ru())), this.ou(t)), t;
                    }),
                    (v(St).su = function () {
                        for (var t = R(f(this.zs_1.length, 2)), r = 0, i = this.zs_1, n = 0, e = i.length; n < e; ) {
                            var s = i[n];
                            n = (n + 1) | 0;
                            var _ = r;
                            r = (_ + 1) | 0;
                            var u = dt();
                            t[_] = u[(s >> 4) & 15];
                            var h = r;
                            r = (h + 1) | 0;
                            var a = dt();
                            t[h] = a[15 & s];
                        }
                        return V(t);
                    }),
                    (v(St).tu = function (t) {
                        if (t >= this.s() || t < 0) throw new Et("size=" + this.s() + " pos=" + t);
                        return this.zs_1[t];
                    }),
                    (v(St).t = function (t) {
                        return this.tu(t);
                    }),
                    (v(St).s = function () {
                        return this.uu();
                    }),
                    (v(St).uu = function () {
                        return this.zs_1.length;
                    }),
                    (v(St).vu = function () {
                        return this.zs_1.slice();
                    }),
                    (v(St).ru = function () {
                        return this.zs_1;
                    }),
                    (v(St).wu = function (t, r, i) {
                        return (function (t, r, i, n) {
                            qt(), r.eu(t.zs_1, i, n);
                        })(this, t, r, i);
                    }),
                    (v(St).xu = function (t, r, i, n) {
                        return r.yu(i, this.zs_1, t, n);
                    }),
                    (v(St).yu = function (t, r, i, n) {
                        return t >= 0 && t <= ((this.zs_1.length - n) | 0) && i >= 0 && i <= ((r.length - n) | 0) && lt(this.zs_1, t, r, i, n);
                    }),
                    (v(St).ft = function (t) {
                        return this.xu(0, t, 0, t.s());
                    }),
                    (v(St).equals = function (t) {
                        return t === this || (t instanceof St && t.s() === this.zs_1.length && t.yu(0, this.zs_1, 0, this.zs_1.length));
                    }),
                    (v(St).hashCode = function () {
                        var t,
                            r = this.at_1;
                        if (0 === r) {
                            var i = D(this.zs_1);
                            this.pu(i), (t = i);
                        } else t = r;
                        return t;
                    }),
                    (v(St).zu = function (t) {
                        var r;
                        t: {
                            for (var i = this.s(), n = t.s(), e = 0, s = Math.min(i, n); e < s; ) {
                                var _ = 255 & this.t(e),
                                    u = 255 & t.t(e);
                                if (_ !== u) {
                                    r = _ < u ? -1 : 1;
                                    break t;
                                }
                                e = (e + 1) | 0;
                            }
                            i !== n ? (r = i < n ? -1 : 1) : (r = 0);
                        }
                        return r;
                    }),
                    (v(St).d = function (t) {
                        return this.zu(t instanceof St ? t : G());
                    }),
                    (v(St).toString = function () {
                        var t, r, i;
                        if (0 !== this.zs_1.length) {
                            var n = pt(this.zs_1, 64);
                            if (-1 !== n) {
                                var e = this.qu(),
                                    s = e.substring(0, n),
                                    _ = H(H(H(s, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = n < e.length ? "[size=" + this.zs_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var u;
                                if (this.zs_1.length <= 64) u = "[hex=" + this.su() + "]";
                                else {
                                    var h,
                                        a = this.zs_1.length,
                                        f = ((r = this), (i = 64), kt(), i === wt() ? r.s() : i);
                                    if (!(f <= this.zs_1.length)) {
                                        var v = "endIndex > length(" + this.zs_1.length + ")";
                                        throw l(w(v));
                                    }
                                    if (!(((f - 0) | 0) >= 0)) {
                                        throw l(w("endIndex < beginIndex"));
                                    }
                                    f !== this.zs_1.length ? (h = new St(P(this.zs_1, 0, f))) : (h = this), (u = "[size=" + a + " hex=" + h.su() + "…]");
                                }
                                t = u;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (v(Ct).su = function () {
                        return It(this).su();
                    }),
                    (v(Ct).tu = function (t) {
                        ct(k(this.ju_1[(this.iu_1.length - 1) | 0]), k(t), new g(1, 0));
                        var r = yt(this, t),
                            i = 0 === r ? 0 : this.ju_1[(r - 1) | 0],
                            n = this.ju_1[(r + this.iu_1.length) | 0];
                        return this.iu_1[r][(((t - i) | 0) + n) | 0];
                    }),
                    (v(Ct).uu = function () {
                        return this.ju_1[(this.iu_1.length - 1) | 0];
                    }),
                    (v(Ct).vu = function () {
                        for (var t = new Int8Array(this.s()), r = 0, i = this.iu_1.length, n = 0, e = 0; n < i; ) {
                            var s = this.ju_1[(i + n) | 0],
                                _ = this.ju_1[n],
                                u = (_ - e) | 0,
                                h = this.iu_1[n];
                            I(h, t, r, s, (s + u) | 0), (r = (r + u) | 0), (e = _), (n = (n + 1) | 0);
                        }
                        return t;
                    }),
                    (v(Ct).wu = function (t, r, i) {
                        for (var n = (r + i) | 0, e = yt(this, r), s = r; s < n; ) {
                            var _ = 0 === e ? 0 : this.ju_1[(e - 1) | 0],
                                u = (this.ju_1[e] - _) | 0,
                                h = this.ju_1[(this.iu_1.length + e) | 0],
                                a = (_ + u) | 0,
                                f = (Math.min(n, a) - s) | 0,
                                v = (h + ((s - _) | 0)) | 0,
                                o = ft(this.iu_1[e], v, (v + f) | 0, !0, !1);
                            null == t.ws_1 ? ((o.pt_1 = o), (o.ot_1 = o.pt_1), (t.ws_1 = o.ot_1)) : S(S(t.ws_1).pt_1).ut(o), (s = (s + f) | 0), (e = (e + 1) | 0);
                        }
                        return (t.xs_1 = t.xs_1.i3(k(i))), c;
                    }),
                    (v(Ct).xu = function (t, r, i, n) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - n) | 0)) e = !1;
                        else {
                            for (var s = i, _ = (t + n) | 0, u = yt(this, t), h = t; h < _; ) {
                                var a = 0 === u ? 0 : this.ju_1[(u - 1) | 0],
                                    f = (this.ju_1[u] - a) | 0,
                                    v = this.ju_1[(this.iu_1.length + u) | 0],
                                    o = (a + f) | 0,
                                    w = (Math.min(_, o) - h) | 0,
                                    l = (v + ((h - a) | 0)) | 0,
                                    c = this.iu_1[u];
                                if (!r.yu(s, c, l, w)) {
                                    e = !1;
                                    break t;
                                }
                                (s = (s + w) | 0), (h = (h + w) | 0), (u = (u + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Ct).yu = function (t, r, i, n) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - n) | 0) || i < 0 || i > ((r.length - n) | 0)) e = !1;
                        else {
                            for (var s = i, _ = (t + n) | 0, u = yt(this, t), h = t; h < _; ) {
                                var a = 0 === u ? 0 : this.ju_1[(u - 1) | 0],
                                    f = (this.ju_1[u] - a) | 0,
                                    v = this.ju_1[(this.iu_1.length + u) | 0],
                                    o = (a + f) | 0,
                                    w = (Math.min(_, o) - h) | 0,
                                    l = (v + ((h - a) | 0)) | 0;
                                if (!lt(this.iu_1[u], l, r, s, w)) {
                                    e = !1;
                                    break t;
                                }
                                (s = (s + w) | 0), (h = (h + w) | 0), (u = (u + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Ct).ru = function () {
                        return this.vu();
                    }),
                    (v(Ct).equals = function (t) {
                        return t === this || (t instanceof St && t.s() === this.s() && this.xu(0, t, 0, this.s()));
                    }),
                    (v(Ct).hashCode = function () {
                        var t,
                            r = this.at_1;
                        if (0 === r) {
                            r = 1;
                            for (var i = this.iu_1.length, n = 0, e = 0; n < i; ) {
                                for (var s = this.ju_1[(i + n) | 0], _ = this.ju_1[n], u = this.iu_1[n], h = s, a = (s + ((_ - e) | 0)) | 0; h < a; ) (r = (f(31, r) + u[h]) | 0), (h = (h + 1) | 0);
                                (e = _), (n = (n + 1) | 0);
                            }
                            this.pu(r), (t = r);
                        } else t = r;
                        return t;
                    }),
                    (v(Ct).toString = function () {
                        return It(this).toString();
                    }),
                    (v(Mt).g5 = function () {
                        if (null == this.av_1) {
                            throw x(w("not attached to a buffer"));
                        }
                        (this.av_1 = null), (this.cv_1 = null), (this.dv_1 = new g(-1, -1)), (this.ev_1 = null), (this.fv_1 = -1), (this.gv_1 = -1);
                    }),
                    (v(At).hv = function () {
                        return this;
                    }),
                    (v(At).iv = function () {
                        return this.xs_1.equals(new g(0, 0));
                    }),
                    (v(At).jv = function (t) {
                        if (this.xs_1.e1(t) < 0) throw new Ft(null);
                    }),
                    (v(At).kv = function (t) {
                        return this.xs_1.e1(t) >= 0;
                    }),
                    (v(At).lv = function (t, r, i) {
                        var n,
                            e = r,
                            s = i;
                        if ((ct(this.xs_1, e, s), s.equals(new g(0, 0)))) n = this;
                        else {
                            t.xs_1 = t.xs_1.i3(s);
                            for (var _ = this.ws_1; e.e1(k((S(_).lt_1 - _.kt_1) | 0)) >= 0; ) (e = e.j3(k((_.lt_1 - _.kt_1) | 0))), (_ = _.ot_1);
                            for (; s.e1(new g(0, 0)) > 0; ) {
                                var u = S(_).st();
                                u.kt_1 = (u.kt_1 + e.k1()) | 0;
                                var h = u,
                                    a = (u.kt_1 + s.k1()) | 0,
                                    f = u.lt_1;
                                (h.lt_1 = Math.min(a, f)), null == t.ws_1 ? ((u.pt_1 = u), (u.ot_1 = u.pt_1), (t.ws_1 = u.ot_1)) : S(S(t.ws_1).pt_1).ut(u), (s = s.j3(k((u.lt_1 - u.kt_1) | 0))), (e = new g(0, 0)), (_ = _.ot_1);
                            }
                            n = this;
                        }
                        return n;
                    }),
                    (v(At).cu = function (t) {
                        var r;
                        ct(this.xs_1, t, new g(1, 0));
                        var i = this.ws_1;
                        if (null != i) {
                            var n = i;
                            if (this.xs_1.j3(t).e1(t) < 0) {
                                for (var e = this.xs_1; e.e1(t) > 0; ) (n = S(n.pt_1)), (e = e.j3(k((n.lt_1 - n.kt_1) | 0)));
                                var s = n,
                                    _ = e;
                                r = S(s).jt_1[K(s.kt_1).i3(t).j3(_).k1()];
                            } else {
                                var u = new g(0, 0);
                                t: for (;;) {
                                    var h = u,
                                        a = (n.lt_1 - n.kt_1) | 0,
                                        f = h.i3(k(a));
                                    if (f.e1(t) > 0) break t;
                                    (n = S(n.ot_1)), (u = f);
                                }
                                var v = n,
                                    o = u;
                                r = S(v).jt_1[K(v.kt_1).i3(t).j3(o).k1()];
                            }
                        } else {
                            var w = new g(-1, -1);
                            r = S(null).jt_1[K(null.kt_1).i3(t).j3(w).k1()];
                        }
                        return r;
                    }),
                    (v(At).mv = function () {
                        var t,
                            r = this.xs_1;
                        if (r.equals(new g(0, 0))) t = new g(0, 0);
                        else {
                            var i = S(S(this.ws_1).pt_1);
                            i.lt_1 < 8192 && i.nt_1 && (r = r.j3(k((i.lt_1 - i.kt_1) | 0))), (t = r);
                        }
                        return t;
                    }),
                    (v(At).nv = function () {
                        if (this.xs_1.equals(new g(0, 0))) throw Ot();
                        var t = S(this.ws_1),
                            r = t.kt_1,
                            i = t.lt_1,
                            n = r;
                        r = (n + 1) | 0;
                        var e = t.jt_1[n];
                        return (this.xs_1 = this.xs_1.j3(new g(1, 0))), r === i ? ((this.ws_1 = t.tt()), a.bu(t)) : (t.kt_1 = r), e;
                    }),
                    (v(At).gt = function () {
                        var t;
                        if (this.xs_1.e1(new g(4, 0)) < 0) throw Ot();
                        var r = S(this.ws_1),
                            i = r.kt_1,
                            n = r.lt_1;
                        if (k((n - i) | 0).e1(new g(4, 0)) < 0) {
                            t = ((255 & this.nv()) << 24) | ((255 & this.nv()) << 16) | ((255 & this.nv()) << 8) | (255 & this.nv());
                        } else {
                            var e = r.jt_1,
                                s = i,
                                _ = (i = (s + 1) | 0),
                                u = (i = (_ + 1) | 0),
                                h = (i = (u + 1) | 0);
                            i = (h + 1) | 0;
                            var f = ((255 & e[s]) << 24) | ((255 & e[_]) << 16) | ((255 & e[u]) << 8) | (255 & e[h]);
                            (this.xs_1 = this.xs_1.j3(new g(4, 0))), i === n ? ((this.ws_1 = r.tt()), a.bu(r)) : (r.kt_1 = i), (t = f);
                        }
                        return t;
                    }),
                    (v(At).ov = function () {
                        return this.pv(this.xs_1);
                    }),
                    (v(At).pv = function (t) {
                        var r;
                        if (!(t.e1(new g(0, 0)) >= 0 && t.e1(new g(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + t.toString();
                            throw l(w(i));
                        }
                        if (this.xs_1.e1(t) < 0) throw Ot();
                        if (t.e1(new g(4096, 0)) >= 0) {
                            var n = this.rv(t.k1());
                            this.ys(t), (r = n);
                        } else r = new St(this.qv(t));
                        return r;
                    }),
                    (v(At).sv = function () {
                        return this.du(this.xs_1);
                    }),
                    (v(At).du = function (t) {
                        var r;
                        if (!(t.e1(new g(0, 0)) >= 0 && t.e1(new g(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + t.toString();
                            throw l(w(i));
                        }
                        if (this.xs_1.e1(t) < 0) throw Ot();
                        if (t.equals(new g(0, 0))) r = "";
                        else {
                            var n = S(this.ws_1);
                            if (K(n.kt_1).i3(t).e1(k(n.lt_1)) > 0) r = xt(this.qv(t));
                            else {
                                var e = xt(n.jt_1, n.kt_1, (n.kt_1 + t.k1()) | 0);
                                (n.kt_1 = (n.kt_1 + t.k1()) | 0), (this.xs_1 = this.xs_1.j3(t)), n.kt_1 === n.lt_1 && ((this.ws_1 = n.tt()), a.bu(n)), (r = e);
                            }
                        }
                        return r;
                    }),
                    (v(At).tv = function () {
                        return this.uv(new g(-1, 2147483647));
                    }),
                    (v(At).uv = function (t) {
                        var r;
                        if (!(t.e1(new g(0, 0)) >= 0)) {
                            var i = "limit < 0: " + t.toString();
                            throw l(w(i));
                        }
                        var n = t.equals(new g(-1, 2147483647)) ? new g(-1, 2147483647) : t.i3(new g(1, 0)),
                            e = this.vv(10, new g(0, 0), n);
                        if (e.equals(new g(-1, -1))) {
                            var s;
                            if (n.e1(this.xs_1) < 0) {
                                var _ = n.j3(k(1));
                                s = 13 === this.cu(_);
                            } else s = !1;
                            if (!(!!s && 10 === this.cu(n))) {
                                var u = new At(),
                                    h = new g(0, 0),
                                    a = this.xs_1,
                                    f = k(32),
                                    v = f.e1(a) <= 0 ? f : a;
                                this.lv(u, h, v);
                                var o = this.xs_1;
                                throw new Ft("\\n not found: limit=" + (o.e1(t) <= 0 ? o : t).toString() + " content=" + u.ov().su() + "…");
                            }
                            r = gt(this, n);
                        } else r = gt(this, e);
                        return r;
                    }),
                    (v(At).wv = function (t) {
                        var r,
                            i = jt(this, t);
                        if (-1 !== i) {
                            var n = t.ht_1[i].s();
                            this.ys(k(n)), (r = i);
                        } else r = -1;
                        return r;
                    }),
                    (v(At).xv = function () {
                        return this.qv(this.xs_1);
                    }),
                    (v(At).qv = function (t) {
                        if (!(t.e1(new g(0, 0)) >= 0 && t.e1(new g(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw l(w(r));
                        }
                        if (this.xs_1.e1(t) < 0) throw Ot();
                        var i = new Int8Array(t.k1());
                        return this.yv(i), i;
                    }),
                    (v(At).yv = function (t) {
                        for (var r = 0; r < t.length; ) {
                            var i = this.zv(t, r, (t.length - r) | 0);
                            if (-1 === i) throw Ot();
                            r = (r + i) | 0;
                        }
                        return c;
                    }),
                    (v(At).zv = function (t, r, i) {
                        var n;
                        ct(k(t.length), k(r), k(i));
                        var e = this.ws_1;
                        if (null != e) {
                            var s = e,
                                _ = (s.lt_1 - s.kt_1) | 0,
                                u = Math.min(i, _),
                                h = s.jt_1,
                                f = s.kt_1,
                                v = (s.kt_1 + u) | 0;
                            I(h, t, r, f, v), (s.kt_1 = (s.kt_1 + u) | 0), (this.xs_1 = this.xs_1.j3(k(u))), s.kt_1 === s.lt_1 && ((this.ws_1 = s.tt()), a.bu(s)), (n = u);
                        } else n = -1;
                        return n;
                    }),
                    (v(At).l2 = function () {
                        return this.ys(this.xs_1), c;
                    }),
                    (v(At).ys = function (t) {
                        for (var r = t; r.e1(new g(0, 0)) > 0; ) {
                            var i = this.ws_1;
                            if (null == i) throw Ot();
                            var n = i,
                                e = r,
                                s = (n.lt_1 - n.kt_1) | 0,
                                _ = k(s),
                                u = (e.e1(_) <= 0 ? e : _).k1();
                            (this.xs_1 = this.xs_1.j3(k(u))), (r = r.j3(k(u))), (n.kt_1 = (n.kt_1 + u) | 0), n.kt_1 === n.lt_1 && ((this.ws_1 = n.tt()), a.bu(n));
                        }
                        return c;
                    }),
                    (v(At).aw = function (t) {
                        var r = t.s();
                        return t.wu(this, 0, r), this;
                    }),
                    (v(At).bw = function (t) {
                        var r;
                        if (!(t >= 1 && t <= 8192)) {
                            throw l(w("unexpected capacity"));
                        }
                        if (null != this.ws_1) {
                            var i = S(this.ws_1).pt_1;
                            (((S(i).lt_1 + t) | 0) > 8192 || !i.nt_1) && (i = i.ut(a.yt())), (r = i);
                        } else {
                            var n = a.yt();
                            (this.ws_1 = n), (n.pt_1 = n), (n.ot_1 = n), (r = n);
                        }
                        return r;
                    }),
                    (v(At).cw = function (t) {
                        return this.dw(t, 0, t.length);
                    }),
                    (v(At).dw = function (t, r, i) {
                        if (!(r >= 0)) throw l(w("beginIndex < 0: " + r));
                        if (!(i >= r)) throw l(w("endIndex < beginIndex: " + i + " < " + r));
                        if (!(i <= t.length)) {
                            var n = "endIndex > string.length: " + i + " > " + t.length;
                            throw l(w(n));
                        }
                        for (var e = r; e < i; ) {
                            var s = M(t, e),
                                _ = E(s);
                            if (_ < 128) {
                                var u = this.bw(1),
                                    h = u.jt_1,
                                    a = (u.lt_1 - e) | 0,
                                    f = (8192 - a) | 0,
                                    v = Math.min(i, f),
                                    o = e;
                                (e = (o + 1) | 0), (h[(a + o) | 0] = O(_));
                                t: for (; e < v; ) {
                                    var c = M(t, e);
                                    if ((_ = E(c)) >= 128) break t;
                                    var x = e;
                                    (e = (x + 1) | 0), (h[(a + x) | 0] = O(_));
                                }
                                var j = (((e + a) | 0) - u.lt_1) | 0;
                                (u.lt_1 = (u.lt_1 + j) | 0), (this.xs_1 = this.xs_1.i3(k(j)));
                            } else if (_ < 2048) {
                                var $ = this.bw(2);
                                ($.jt_1[$.lt_1] = O((_ >> 6) | 192)), ($.jt_1[($.lt_1 + 1) | 0] = O((63 & _) | 128)), ($.lt_1 = ($.lt_1 + 2) | 0), (this.xs_1 = this.xs_1.i3(new g(2, 0))), (e = (e + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var b = this.bw(3);
                                (b.jt_1[b.lt_1] = O((_ >> 12) | 224)), (b.jt_1[(b.lt_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (b.jt_1[(b.lt_1 + 2) | 0] = O((63 & _) | 128)), (b.lt_1 = (b.lt_1 + 3) | 0), (this.xs_1 = this.xs_1.i3(new g(3, 0))), (e = (e + 1) | 0);
                            } else {
                                var d;
                                if (((e + 1) | 0) < i) {
                                    var p = M(t, (e + 1) | 0);
                                    d = E(p);
                                } else d = 0;
                                var q = d;
                                if (_ > 56319 || !(56320 <= q && q <= 57343)) {
                                    var y = A(63),
                                        m = E(y);
                                    this.ew(m), (e = (e + 1) | 0);
                                } else {
                                    var z = (65536 + (((1023 & _) << 10) | (1023 & q))) | 0,
                                        S = this.bw(4);
                                    (S.jt_1[S.lt_1] = O((z >> 18) | 240)), (S.jt_1[(S.lt_1 + 1) | 0] = O(((z >> 12) & 63) | 128)), (S.jt_1[(S.lt_1 + 2) | 0] = O(((z >> 6) & 63) | 128)), (S.jt_1[(S.lt_1 + 3) | 0] = O((63 & z) | 128)), (S.lt_1 = (S.lt_1 + 4) | 0), (this.xs_1 = this.xs_1.i3(new g(4, 0))), (e = (e + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (v(At).fw = function (t) {
                        return this.eu(t, 0, t.length);
                    }),
                    (v(At).eu = function (t, r, i) {
                        var n = r;
                        ct(k(t.length), k(n), k(i));
                        for (var e = (n + i) | 0; n < e; ) {
                            var s = this.bw(1),
                                _ = (e - n) | 0,
                                u = (8192 - s.lt_1) | 0,
                                h = Math.min(_, u),
                                a = s.jt_1,
                                f = s.lt_1;
                            I(t, a, f, n, (n + h) | 0), (n = (n + h) | 0), (s.lt_1 = (s.lt_1 + h) | 0);
                        }
                        return (this.xs_1 = this.xs_1.i3(k(i))), this;
                    }),
                    (v(At).dt = function (t) {
                        var r = new g(0, 0);
                        t: for (;;) {
                            var i = t.gw(this, new g(8192, 0));
                            if (i.equals(new g(-1, -1))) break t;
                            r = r.i3(i);
                        }
                        return r;
                    }),
                    (v(At).ew = function (t) {
                        var r = this.bw(1),
                            i = r.lt_1;
                        return (r.lt_1 = (i + 1) | 0), (r.jt_1[i] = O(t)), (this.xs_1 = this.xs_1.i3(new g(1, 0))), this;
                    }),
                    (v(At).ct = function (t) {
                        var r = this.bw(4),
                            i = r.jt_1,
                            n = r.lt_1,
                            e = n;
                        (n = (e + 1) | 0), (i[e] = O((t >>> 24) & 255));
                        var s = n;
                        (n = (s + 1) | 0), (i[s] = O((t >>> 16) & 255));
                        var _ = n;
                        (n = (_ + 1) | 0), (i[_] = O((t >>> 8) & 255));
                        var u = n;
                        return (n = (u + 1) | 0), (i[u] = O(255 & t)), (r.lt_1 = n), (this.xs_1 = this.xs_1.i3(new g(4, 0))), this;
                    }),
                    (v(At).vs = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (t === this) {
                                throw l(w("source == this"));
                            }
                            for (ct(t.xs_1, new g(0, 0), n); n.e1(new g(0, 0)) > 0; ) {
                                if (n.e1(k((S(t.ws_1).lt_1 - S(t.ws_1).kt_1) | 0)) < 0) {
                                    var e,
                                        s = null != this.ws_1 ? S(this.ws_1).pt_1 : null;
                                    if (null != s && s.nt_1) {
                                        var _ = n,
                                            u = s.lt_1,
                                            h = _.i3(k(u)),
                                            a = s.mt_1 ? 0 : s.kt_1;
                                        e = h.j3(k(a)).e1(new g(8192, 0)) <= 0;
                                    } else e = !1;
                                    if (e) {
                                        S(t.ws_1).au(s, n.k1()), (t.xs_1 = t.xs_1.j3(n)), (this.xs_1 = this.xs_1.i3(n)), (i = c);
                                        break t;
                                    }
                                    t.ws_1 = S(t.ws_1).vt(n.k1());
                                }
                                var f = t.ws_1,
                                    v = k((S(f).lt_1 - f.kt_1) | 0);
                                if (((t.ws_1 = f.tt()), null == this.ws_1)) (this.ws_1 = f), (f.pt_1 = f), (f.ot_1 = f.pt_1);
                                else {
                                    var o = S(this.ws_1).pt_1;
                                    (o = S(o).ut(f)).zt();
                                }
                                (t.xs_1 = t.xs_1.j3(v)), (this.xs_1 = this.xs_1.i3(v)), (n = n.j3(v));
                            }
                        }
                        return i;
                    }),
                    (v(At).gw = function (t, r) {
                        var i,
                            n = r;
                        if (!(n.e1(new g(0, 0)) >= 0)) {
                            var e = "byteCount < 0: " + n.toString();
                            throw l(w(e));
                        }
                        return this.xs_1.equals(new g(0, 0)) ? (i = new g(-1, -1)) : (n.e1(this.xs_1) > 0 && (n = this.xs_1), t.vs(this, n), (i = n)), i;
                    }),
                    (v(At).vv = function (t, r, i) {
                        var n;
                        t: {
                            var e = r,
                                s = i;
                            if (!(new g(0, 0).e1(e) <= 0 && e.e1(s) <= 0)) {
                                var _ = "size=" + this.xs_1.toString() + " fromIndex=" + e.toString() + " toIndex=" + s.toString();
                                throw l(w(_));
                            }
                            if ((s.e1(this.xs_1) > 0 && (s = this.xs_1), e.equals(s))) n = new g(-1, -1);
                            else {
                                var u = e,
                                    h = this.ws_1;
                                if (null != h) {
                                    var a = h;
                                    if (this.xs_1.j3(u).e1(u) < 0) {
                                        for (var f = this.xs_1; f.e1(u) > 0; ) (a = S(a.pt_1)), (f = f.j3(k((a.lt_1 - a.kt_1) | 0)));
                                        var v = a,
                                            o = f;
                                        if (null == v) {
                                            n = new g(-1, -1);
                                            break t;
                                        }
                                        for (var c = v, x = o; x.e1(s) < 0; ) {
                                            for (var j = c.jt_1, $ = k(c.lt_1), b = K(c.kt_1).i3(s).j3(x), d = ($.e1(b) <= 0 ? $ : b).k1(), p = K(c.kt_1).i3(e).j3(x).k1(); p < d; ) {
                                                if (j[p] === t) {
                                                    n = K((p - c.kt_1) | 0).i3(x);
                                                    break t;
                                                }
                                                p = (p + 1) | 0;
                                            }
                                            (e = x = x.i3(k((c.lt_1 - c.kt_1) | 0))), (c = S(c.ot_1));
                                        }
                                        n = new g(-1, -1);
                                    } else {
                                        var q = new g(0, 0);
                                        r: for (;;) {
                                            var y = q,
                                                m = (a.lt_1 - a.kt_1) | 0,
                                                z = y.i3(k(m));
                                            if (z.e1(u) > 0) break r;
                                            (a = S(a.ot_1)), (q = z);
                                        }
                                        if (null != a) {
                                            for (var I = a, C = q; C.e1(s) < 0; ) {
                                                for (var M = I.jt_1, A = k(I.lt_1), B = K(I.kt_1).i3(s).j3(C), E = (A.e1(B) <= 0 ? A : B).k1(), O = K(I.kt_1).i3(e).j3(C).k1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        n = K((O - I.kt_1) | 0).i3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (e = C = C.i3(k((I.lt_1 - I.kt_1) | 0))), (I = S(I.ot_1));
                                            }
                                            n = new g(-1, -1);
                                        } else n = new g(-1, -1);
                                    }
                                } else {
                                    new g(-1, -1);
                                    n = new g(-1, -1);
                                }
                            }
                        }
                        return n;
                    }),
                    (v(At).hw = function (t) {
                        return this.iw(t, new g(0, 0));
                    }),
                    (v(At).iw = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (!(t.s() > 0)) {
                                throw l(w("bytes is empty"));
                            }
                            if (!(n.e1(new g(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + n.toString();
                                throw l(w(e));
                            }
                            var s = n,
                                _ = this.ws_1;
                            if (null != _) {
                                var u = _;
                                if (this.xs_1.j3(s).e1(s) < 0) {
                                    for (var h = this.xs_1; h.e1(s) > 0; ) (u = S(u.pt_1)), (h = h.j3(k((u.lt_1 - u.kt_1) | 0)));
                                    var a = u,
                                        f = h;
                                    if (null == a) {
                                        i = new g(-1, -1);
                                        break t;
                                    }
                                    for (var v = a, o = f, c = t.ru(), x = c[0], j = t.s(), $ = this.xs_1.j3(k(j)).i3(new g(1, 0)); o.e1($) < 0; ) {
                                        var b = v.jt_1,
                                            d = v.lt_1,
                                            p = K(v.kt_1).i3($).j3(o),
                                            q = k(d),
                                            y = (q.e1(p) <= 0 ? q : p).k1(),
                                            m = K(v.kt_1).i3(n).j3(o).k1();
                                        if (m < y)
                                            do {
                                                var z = m;
                                                if (((m = (m + 1) | 0), b[z] === x && $t(v, (z + 1) | 0, c, 1, j))) {
                                                    i = K((z - v.kt_1) | 0).i3(o);
                                                    break t;
                                                }
                                            } while (m < y);
                                        (n = o = o.i3(k((v.lt_1 - v.kt_1) | 0))), (v = S(v.ot_1));
                                    }
                                    i = new g(-1, -1);
                                } else {
                                    var I = new g(0, 0);
                                    r: for (;;) {
                                        var C = I,
                                            M = (u.lt_1 - u.kt_1) | 0,
                                            A = C.i3(k(M));
                                        if (A.e1(s) > 0) break r;
                                        (u = S(u.ot_1)), (I = A);
                                    }
                                    if (null != u) {
                                        for (var B = u, E = I, O = t.ru(), F = O[0], R = t.s(), U = this.xs_1.j3(k(R)).i3(new g(1, 0)); E.e1(U) < 0; ) {
                                            var X = B.jt_1,
                                                L = B.lt_1,
                                                P = K(B.kt_1).i3(U).j3(E),
                                                V = k(L),
                                                D = (V.e1(P) <= 0 ? V : P).k1(),
                                                G = K(B.kt_1).i3(n).j3(E).k1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && $t(B, (H + 1) | 0, O, 1, R))) {
                                                        i = K((H - B.kt_1) | 0).i3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (n = E = E.i3(k((B.lt_1 - B.kt_1) | 0))), (B = S(B.ot_1));
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
                    (v(At).jw = function (t) {
                        return this.kw(t, new g(0, 0));
                    }),
                    (v(At).kw = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (!(n.e1(new g(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + n.toString();
                                throw l(w(e));
                            }
                            var s = n,
                                _ = this.ws_1;
                            if (null != _) {
                                var u = _;
                                if (this.xs_1.j3(s).e1(s) < 0) {
                                    for (var h = this.xs_1; h.e1(s) > 0; ) (u = S(u.pt_1)), (h = h.j3(k((u.lt_1 - u.kt_1) | 0)));
                                    var a = u,
                                        f = h;
                                    if (null == a) {
                                        i = new g(-1, -1);
                                        break t;
                                    }
                                    var v = a,
                                        o = f;
                                    if (2 === t.s())
                                        for (var c = t.t(0), x = t.t(1); o.e1(this.xs_1) < 0; ) {
                                            for (var j = v.jt_1, $ = K(v.kt_1).i3(n).j3(o).k1(), b = v.lt_1; $ < b; ) {
                                                var d = j[$];
                                                if (d === c || d === x) {
                                                    i = K(($ - v.kt_1) | 0).i3(o);
                                                    break t;
                                                }
                                                $ = ($ + 1) | 0;
                                            }
                                            (n = o = o.i3(k((v.lt_1 - v.kt_1) | 0))), (v = S(v.ot_1));
                                        }
                                    else
                                        for (var p = t.ru(); o.e1(this.xs_1) < 0; ) {
                                            for (var q = v.jt_1, y = K(v.kt_1).i3(n).j3(o).k1(), m = v.lt_1; y < m; ) {
                                                for (var z = q[y], I = 0, C = p.length; I < C; ) {
                                                    var M = p[I];
                                                    if (((I = (I + 1) | 0), z === M)) {
                                                        i = K((y - v.kt_1) | 0).i3(o);
                                                        break t;
                                                    }
                                                }
                                                y = (y + 1) | 0;
                                            }
                                            (n = o = o.i3(k((v.lt_1 - v.kt_1) | 0))), (v = S(v.ot_1));
                                        }
                                    i = new g(-1, -1);
                                } else {
                                    var A = new g(0, 0);
                                    r: for (;;) {
                                        var B = A,
                                            E = (u.lt_1 - u.kt_1) | 0,
                                            O = B.i3(k(E));
                                        if (O.e1(s) > 0) break r;
                                        (u = S(u.ot_1)), (A = O);
                                    }
                                    if (null != u) {
                                        var F = u,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.e1(this.xs_1) < 0; ) {
                                                for (var L = F.jt_1, P = K(F.kt_1).i3(n).j3(R).k1(), V = F.lt_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        i = K((P - F.kt_1) | 0).i3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (n = R = R.i3(k((F.lt_1 - F.kt_1) | 0))), (F = S(F.ot_1));
                                            }
                                        else
                                            for (var G = t.ru(); R.e1(this.xs_1) < 0; ) {
                                                for (var H = F.jt_1, J = K(F.kt_1).i3(n).j3(R).k1(), N = F.lt_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            i = K((J - F.kt_1) | 0).i3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (n = R = R.i3(k((F.lt_1 - F.kt_1) | 0))), (F = S(F.ot_1));
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
                    (v(At).lw = function (t, r) {
                        return this.mw(t, r, 0, r.s());
                    }),
                    (v(At).mw = function (t, r, i, n) {
                        var e;
                        t: if (t.e1(new g(0, 0)) < 0 || i < 0 || n < 0 || this.xs_1.j3(t).e1(k(n)) < 0 || ((r.s() - i) | 0) < n) e = !1;
                        else {
                            var s = 0;
                            if (s < n)
                                do {
                                    var _ = s;
                                    s = (s + 1) | 0;
                                    var u = t.i3(k(_));
                                    if (this.cu(u) !== r.t((i + _) | 0)) {
                                        e = !1;
                                        break t;
                                    }
                                } while (s < n);
                            e = !0;
                        }
                        return e;
                    }),
                    (v(At).v9 = function () {
                        return c;
                    }),
                    (v(At).g5 = function () {
                        return c;
                    }),
                    (v(At).equals = function (t) {
                        var r;
                        t: if (this !== t)
                            if (t instanceof At)
                                if (this.xs_1.equals(t.xs_1))
                                    if (this.xs_1.equals(new g(0, 0))) r = !0;
                                    else {
                                        for (var i, n = S(this.ws_1), e = S(t.ws_1), s = n.kt_1, _ = e.kt_1, u = new g(0, 0); u.e1(this.xs_1) < 0; ) {
                                            var h = (n.lt_1 - s) | 0,
                                                a = (e.lt_1 - _) | 0,
                                                f = Math.min(h, a);
                                            i = k(f);
                                            var v = new g(0, 0);
                                            if (v.e1(i) < 0)
                                                do {
                                                    v = v.i3(new g(1, 0));
                                                    var o = s;
                                                    s = (o + 1) | 0;
                                                    var w = _;
                                                    if (((_ = (w + 1) | 0), n.jt_1[o] !== e.jt_1[w])) {
                                                        r = !1;
                                                        break t;
                                                    }
                                                } while (v.e1(i) < 0);
                                            s === n.lt_1 && (s = (n = S(n.ot_1)).kt_1), _ === e.lt_1 && (_ = (e = S(e.ot_1)).kt_1), (u = u.i3(i));
                                        }
                                        r = !0;
                                    }
                                else r = !1;
                            else r = !1;
                        else r = !0;
                        return r;
                    }),
                    (v(At).hashCode = function () {
                        var t,
                            r = this.ws_1;
                        if (null != r) {
                            var i = r,
                                n = 1;
                            do {
                                for (var e = i.kt_1, s = i.lt_1; e < s; ) (n = (f(31, n) + i.jt_1[e]) | 0), (e = (e + 1) | 0);
                                i = S(i.ot_1);
                            } while (i !== this.ws_1);
                            t = n;
                        } else t = 0;
                        return t;
                    }),
                    (v(At).toString = function () {
                        return this.nw().toString();
                    }),
                    (v(At).nw = function () {
                        if (!(this.xs_1.e1(new g(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.xs_1.toString();
                            throw x(w(t));
                        }
                        return this.rv(this.xs_1.k1());
                    }),
                    (v(At).rv = function (t) {
                        var r;
                        if (0 !== t) {
                            ct(this.xs_1, new g(0, 0), k(t));
                            for (var i = 0, n = 0, e = this.ws_1; i < t; ) {
                                if (S(e).lt_1 === e.kt_1) throw N("s.limit == s.pos");
                                (i = (i + ((e.lt_1 - e.kt_1) | 0)) | 0), (n = (n + 1) | 0), (e = e.ot_1);
                            }
                            var s = Q(Array(n), null),
                                _ = new Int32Array(f(n, 2));
                            for (i = 0, n = 0, e = this.ws_1; i < t; ) {
                                s[n] = S(e).jt_1;
                                var u = (i = (i + ((e.lt_1 - e.kt_1) | 0)) | 0);
                                (_[n] = Math.min(u, t)), (_[(n + s.length) | 0] = e.kt_1), (e.mt_1 = !0), (n = (n + 1) | 0), (e = e.ot_1);
                            }
                            r = new Ct(T(s) ? s : G(), _);
                        } else r = zt().ku_1;
                        return r;
                    }),
                    (v(Xt).vs = function (t, r) {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.vs(t, r), this.rw(), c;
                    }),
                    (v(Xt).aw = function (t) {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.aw(t), this.rw();
                    }),
                    (v(Xt).cw = function (t) {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.cw(t), this.rw();
                    }),
                    (v(Xt).dw = function (t, r, i) {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.dw(t, r, i), this.rw();
                    }),
                    (v(Xt).ew = function (t) {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.ew(t), this.rw();
                    }),
                    (v(Xt).rw = function () {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        var t = this.qw_1.mv();
                        return t.e1(new g(0, 0)) > 0 && this.ow_1.vs(this.qw_1, t), this;
                    }),
                    (v(Xt).v9 = function () {
                        if (this.pw_1) {
                            throw x(w("closed"));
                        }
                        return this.qw_1.xs_1.e1(new g(0, 0)) > 0 && this.ow_1.vs(this.qw_1, this.qw_1.xs_1), this.ow_1.v9(), c;
                    }),
                    (v(Xt).g5 = function () {
                        var t;
                        if (this.pw_1) t = c;
                        else {
                            var r = null;
                            try {
                                this.qw_1.xs_1.e1(new g(0, 0)) > 0 && this.ow_1.vs(this.qw_1, this.qw_1.xs_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                r = t;
                            }
                            try {
                                this.ow_1.g5();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == r && (r = t);
                            }
                            if (((this.pw_1 = !0), null != r)) throw r;
                        }
                        return t;
                    }),
                    (v(Xt).toString = function () {
                        return "buffer(" + w(this.ow_1) + ")";
                    }),
                    (v(Lt).hv = function () {
                        return this.uw_1;
                    }),
                    (v(Lt).gw = function (t, r) {
                        var i;
                        t: {
                            if (!(r.e1(new g(0, 0)) >= 0)) {
                                var n = "byteCount < 0: " + r.toString();
                                throw l(w(n));
                            }
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            if (this.uw_1.xs_1.equals(new g(0, 0))) {
                                if (r.equals(new g(0, 0))) {
                                    i = new g(0, 0);
                                    break t;
                                }
                                if (this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    i = new g(-1, -1);
                                    break t;
                                }
                            }
                            var e = this.uw_1.xs_1,
                                s = r.e1(e) <= 0 ? r : e;
                            i = this.uw_1.gw(t, s);
                        }
                        return i;
                    }),
                    (v(Lt).iv = function () {
                        if (this.tw_1) {
                            throw x(w("closed"));
                        }
                        return this.uw_1.iv() && this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1));
                    }),
                    (v(Lt).jv = function (t) {
                        if (!this.kv(t)) throw Ot();
                    }),
                    (v(Lt).kv = function (t) {
                        var r;
                        t: {
                            if (!(t.e1(new g(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + t.toString();
                                throw l(w(i));
                            }
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            for (; this.uw_1.xs_1.e1(t) < 0; )
                                if (this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    r = !1;
                                    break t;
                                }
                            r = !0;
                        }
                        return r;
                    }),
                    (v(Lt).wv = function (t) {
                        var r;
                        t: {
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            for (;;) {
                                var i = jt(this.uw_1, t, !0);
                                switch (i) {
                                    case -1:
                                        r = -1;
                                        break t;
                                    case -2:
                                        if (this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                            r = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var n = t.ht_1[i].s();
                                        this.uw_1.ys(k(n)), (r = i);
                                        break t;
                                }
                            }
                        }
                        return r;
                    }),
                    (v(Lt).tv = function () {
                        return this.uv(new g(-1, 2147483647));
                    }),
                    (v(Lt).uv = function (t) {
                        var r;
                        if (!(t.e1(new g(0, 0)) >= 0)) {
                            var i = "limit < 0: " + t.toString();
                            throw l(w(i));
                        }
                        var n = t.equals(new g(-1, 2147483647)) ? new g(-1, 2147483647) : t.i3(k(1)),
                            e = this.vv(10, new g(0, 0), n);
                        if (e.equals(new g(-1, -1))) {
                            var s, _;
                            if (n.e1(new g(-1, 2147483647)) < 0 && this.kv(n)) {
                                var u = n.j3(k(1));
                                _ = 13 === this.uw_1.cu(u);
                            } else _ = !1;
                            if (_) {
                                var h = n.i3(k(1));
                                s = this.kv(h);
                            } else s = !1;
                            if (!(!!s && 10 === this.uw_1.cu(n))) {
                                var a = new At(),
                                    f = new g(0, 0),
                                    v = this.uw_1.xs_1,
                                    o = k(32),
                                    c = o.e1(v) <= 0 ? o : v;
                                this.uw_1.lv(a, f, c);
                                var x = this.uw_1.xs_1;
                                throw new Ft("\\n not found: limit=" + (x.e1(t) <= 0 ? x : t).toString() + " content=" + a.ov().su() + "…");
                            }
                            r = gt(this.uw_1, n);
                        } else r = gt(this.uw_1, e);
                        return r;
                    }),
                    (v(Lt).ys = function (t) {
                        var r = t;
                        if (this.tw_1) {
                            throw x(w("closed"));
                        }
                        for (; r.e1(new g(0, 0)) > 0; ) {
                            if (this.uw_1.xs_1.equals(new g(0, 0)) && this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) throw Ot();
                            var i = r,
                                n = this.uw_1.xs_1,
                                e = i.e1(n) <= 0 ? i : n;
                            this.uw_1.ys(e), (r = r.j3(e));
                        }
                        return c;
                    }),
                    (v(Lt).vv = function (t, r, i) {
                        var n;
                        t: {
                            var e = r;
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            if (!(new g(0, 0).e1(e) <= 0 && e.e1(i) <= 0)) {
                                var s = "fromIndex=" + e.toString() + " toIndex=" + i.toString();
                                throw l(w(s));
                            }
                            for (; e.e1(i) < 0; ) {
                                var _ = this.uw_1.vv(t, e, i);
                                if (!_.equals(new g(-1, -1))) {
                                    n = _;
                                    break t;
                                }
                                var u = this.uw_1.xs_1;
                                if (u.e1(i) >= 0 || this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    n = new g(-1, -1);
                                    break t;
                                }
                                var h = e;
                                e = h.e1(u) >= 0 ? h : u;
                            }
                            n = new g(-1, -1);
                        }
                        return n;
                    }),
                    (v(Lt).jw = function (t) {
                        return this.kw(t, new g(0, 0));
                    }),
                    (v(Lt).kw = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            for (;;) {
                                var e = this.uw_1.kw(t, n);
                                if (!e.equals(new g(-1, -1))) {
                                    i = e;
                                    break t;
                                }
                                var s = this.uw_1.xs_1;
                                if (this.sw_1.gw(this.uw_1, new g(8192, 0)).equals(new g(-1, -1))) {
                                    i = new g(-1, -1);
                                    break t;
                                }
                                var _ = n;
                                n = _.e1(s) >= 0 ? _ : s;
                            }
                        }
                        return i;
                    }),
                    (v(Lt).lw = function (t, r) {
                        return this.mw(t, r, 0, r.s());
                    }),
                    (v(Lt).mw = function (t, r, i, n) {
                        var e;
                        t: {
                            if (this.tw_1) {
                                throw x(w("closed"));
                            }
                            if (t.e1(new g(0, 0)) < 0 || i < 0 || n < 0 || ((r.s() - i) | 0) < n) e = !1;
                            else {
                                var s = 0;
                                if (s < n)
                                    do {
                                        var _ = s;
                                        s = (s + 1) | 0;
                                        var u = t.i3(k(_)),
                                            h = u.i3(k(1));
                                        if (!this.kv(h)) {
                                            e = !1;
                                            break t;
                                        }
                                        if (this.uw_1.cu(u) !== r.t((i + _) | 0)) {
                                            e = !1;
                                            break t;
                                        }
                                    } while (s < n);
                                e = !0;
                            }
                        }
                        return e;
                    }),
                    (v(Lt).g5 = function () {
                        var t;
                        return this.tw_1 ? (t = c) : ((this.tw_1 = !0), this.sw_1.g5(), this.uw_1.l2()), t;
                    }),
                    (v(Lt).toString = function () {
                        return "buffer(" + w(this.sw_1) + ")";
                    }),
                    (v(Pt).yt = function () {
                        return at();
                    }),
                    (v(Pt).bu = function (t) {}),
                    (i = new ut()),
                    new vt(),
                    (a = new Pt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Rt),
                    (t.$_$.b = function t(r) {
                        var i = Rt(r, z(v(Ut)));
                        return Z(i, t), i;
                    }),
                    (t.$_$.c = zt),
                    (t.$_$.d = i),
                    (t.$_$.e = At),
                    (t.$_$.f = Ft),
                    (t.$_$.g = Ut),
                    (t.$_$.h = function () {
                        return new nt();
                    }),
                    (t.$_$.i = function (t) {
                        return new Lt(t);
                    }),
                    (t.$_$.j = function (t) {
                        return new Xt(t);
                    });
            })(t.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.50a0626a.js.map
