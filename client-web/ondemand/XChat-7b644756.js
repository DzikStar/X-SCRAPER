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
                    h,
                    a,
                    f,
                    u = Math.imul,
                    v = r.$_$.bf,
                    o = r.$_$.yd,
                    l = r.$_$.ff,
                    w = r.$_$.i2,
                    c = r.$_$.s6,
                    g = r.$_$.df,
                    b = r.$_$.m2,
                    $ = r.$_$.rj,
                    k = r.$_$.g,
                    d = r.$_$.wb,
                    q = r.$_$.mb,
                    m = r.$_$.t,
                    p = r.$_$.b8,
                    x = r.$_$.zd,
                    y = r.$_$.u6,
                    S = r.$_$.s7,
                    z = r.$_$.af,
                    j = r.$_$.sk,
                    I = r.$_$.x7,
                    C = r.$_$.g2,
                    M = r.$_$.id,
                    A = r.$_$.s3,
                    B = r.$_$.t3,
                    E = r.$_$.y3,
                    O = r.$_$.cf,
                    F = r.$_$.u8,
                    R = r.$_$.hd,
                    U = r.$_$.we,
                    X = r.$_$.ig,
                    L = r.$_$.gd,
                    P = r.$_$.p8,
                    V = r.$_$.hg,
                    D = r.$_$.l8,
                    G = r.$_$.yj,
                    H = r.$_$.mh,
                    J = r.$_$.hj,
                    K = r.$_$.ze,
                    N = r.$_$.u1,
                    Q = r.$_$.qd,
                    T = r.$_$.fe,
                    W = r.$_$.qj,
                    Y = r.$_$.q2,
                    Z = r.$_$.fd,
                    tt = r.$_$.nj,
                    rt = r.$_$.b2,
                    it = r.$_$.ee;
                function nt() {}
                function et(t, r, i, n, e, s, _, h) {
                    if (!(s < _)) {
                        throw w(l("Failed requirement."));
                    }
                    var a = s;
                    if (a < _)
                        do {
                            var f = a;
                            if (((a = (a + 1) | 0), !(e.t(f).s() >= n))) {
                                throw w(l("Failed requirement."));
                            }
                        } while (a < _);
                    var v = s,
                        o = e.t(v),
                        c = e.t((_ - 1) | 0),
                        $ = -1;
                    if ((n === o.s() && (($ = h.t(v)), (v = (v + 1) | 0), (o = e.t(v))), o.t(n) !== c.t(n))) {
                        var k = 1,
                            d = (v + 1) | 0;
                        if (d < _)
                            do {
                                var q = d;
                                (d = (d + 1) | 0), e.t((q - 1) | 0).t(n) !== e.t(q).t(n) && (k = (k + 1) | 0);
                            } while (d < _);
                        var m = r.g3(_t(i, t)).g3(g(2)),
                            p = u(k, 2),
                            x = m.g3(g(p));
                        i.ts(k), i.ts($);
                        var y = v;
                        if (y < _)
                            do {
                                var S = y;
                                y = (y + 1) | 0;
                                var z = e.t(S).t(n);
                                if (S === v || z !== e.t((S - 1) | 0).t(n)) {
                                    var j = 255 & z;
                                    i.ts(j);
                                }
                            } while (y < _);
                        for (var I = new Bt(), C = v; C < _; ) {
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
                            ((C + 1) | 0) === A && ((n + 1) | 0) === e.t(C).s() ? i.ts(h.t(C)) : (i.ts(u(-1, x.g3(_t(I, t)).k1())), et(t, x, I, (n + 1) | 0, e, C, A, h)), (C = A);
                        }
                        i.us(I);
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
                            V = r.g3(_t(i, t)).g3(g(2)).g3(g(P)).g3(g(1));
                        i.ts(0 | -O), i.ts($);
                        var D = n,
                            G = (n + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                i.ts(J);
                            } while (D < G);
                        if (((v + 1) | 0) === _) {
                            if (((n + O) | 0) !== e.t(v).s()) {
                                throw b(l("Check failed."));
                            }
                            i.ts(h.t(v));
                        } else {
                            var K = new Bt();
                            i.ts(u(-1, V.g3(_t(K, t)).k1())), et(t, V, K, (n + O) | 0, e, v, _, h), i.us(K);
                        }
                    }
                }
                function st(t, r, i, n, e, s, _, h, a) {
                    return (r = r === k ? new $(0, 0) : r), (n = n === k ? 0 : n), (s = s === k ? 0 : s), (_ = _ === k ? e.s() : _), et(t, r, i, n, e, s, _, h);
                }
                function _t(t, r) {
                    return t.os_1.j3(g(4));
                }
                function ht() {}
                function at(t, r) {
                    y.call(this), (this.ys_1 = t), (this.zs_1 = r);
                }
                function ft() {
                    return (t = z(v(ot))), ot.call(t), (t.at_1 = new Int8Array(8192)), (t.et_1 = !0), (t.dt_1 = !1), t;
                    var t;
                }
                function ut(t, r, i, n, e) {
                    return (function (t, r, i, n, e, s) {
                        return ot.call(s), (s.at_1 = t), (s.bt_1 = r), (s.ct_1 = i), (s.dt_1 = n), (s.et_1 = e), s;
                    })(t, r, i, n, e, z(v(ot)));
                }
                function vt() {
                    (this.ht_1 = 8192), (this.it_1 = 1024);
                }
                function ot() {
                    (this.bt_1 = 0), (this.ct_1 = 0), (this.dt_1 = !1), (this.et_1 = !1), (this.ft_1 = null), (this.gt_1 = null);
                }
                function lt() {
                    return gt(), n;
                }
                function wt(t, r, i, n, e) {
                    gt();
                    var s = 0;
                    if (s < e)
                        do {
                            var _ = s;
                            if (((s = (s + 1) | 0), t[(_ + r) | 0] !== i[(_ + n) | 0])) return !1;
                        } while (s < e);
                    return !0;
                }
                function ct(t, r, i) {
                    if ((gt(), r.u3(i).e1(new $(0, 0)) < 0 || r.e1(t) > 0 || t.h3(r).e1(i) < 0)) throw new Ot("size=" + t.toString() + " offset=" + r.toString() + " byteCount=" + i.toString());
                }
                function gt() {
                    e || ((e = !0), new At(), (n = -1234567890));
                }
                function bt(t) {
                    var r = new Int8Array(u(4, t.length)),
                        i = 0,
                        n = t.length;
                    if (i < n)
                        do {
                            var e = i;
                            i = (i + 1) | 0;
                            var s = M(t, e);
                            if (B(s, A(128)) >= 0) {
                                for (var _ = e, h = t.length, a = e; a < h; ) {
                                    var f = M(t, a);
                                    if (B(f, A(128)) < 0) {
                                        var v = E(f),
                                            o = _;
                                        for (_ = (o + 1) | 0, r[o] = O(v), a = (a + 1) | 0; a < h && B(M(t, a), A(128)) < 0; ) {
                                            var l = a;
                                            a = (l + 1) | 0;
                                            var w = M(t, l),
                                                c = E(w),
                                                g = _;
                                            (_ = (g + 1) | 0), (r[g] = O(c));
                                        }
                                    } else if (B(f, A(2048)) < 0) {
                                        var b = E(f),
                                            $ = _;
                                        (_ = ($ + 1) | 0), (r[$] = O((b >> 6) | 192));
                                        var k = E(f),
                                            d = _;
                                        (_ = (d + 1) | 0), (r[d] = O((63 & k) | 128)), (a = (a + 1) | 0);
                                    } else if (A(55296) <= f && f <= A(57343)) {
                                        var q;
                                        if (B(f, A(56319)) > 0 || h <= ((a + 1) | 0)) q = !0;
                                        else {
                                            var m = M(t, (a + 1) | 0);
                                            q = !(A(56320) <= m && m <= A(57343));
                                        }
                                        if (q) {
                                            var p = _;
                                            (_ = (p + 1) | 0), (r[p] = 63), (a = (a + 1) | 0);
                                        } else {
                                            var x = E(f) << 10,
                                                y = M(t, (a + 1) | 0),
                                                S = (((x + E(y)) | 0) - 56613888) | 0,
                                                z = _;
                                            (_ = (z + 1) | 0), (r[z] = O((S >> 18) | 240));
                                            var j = _;
                                            (_ = (j + 1) | 0), (r[j] = O(((S >> 12) & 63) | 128));
                                            var I = _;
                                            (_ = (I + 1) | 0), (r[I] = O(((S >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (r[C] = O((63 & S) | 128)), (a = (a + 2) | 0);
                                        }
                                    } else {
                                        var R = E(f),
                                            U = _;
                                        (_ = (U + 1) | 0), (r[U] = O((R >> 12) | 224));
                                        var X = E(f),
                                            L = _;
                                        (_ = (L + 1) | 0), (r[L] = O(((X >> 6) & 63) | 128));
                                        var P = E(f),
                                            V = _;
                                        (_ = (V + 1) | 0), (r[V] = O((63 & P) | 128)), (a = (a + 1) | 0);
                                    }
                                }
                                return F(r, _);
                            }
                            var D = E(s);
                            r[e] = O(D);
                        } while (i < n);
                    return F(r, t.length);
                }
                function $t(t, r, i) {
                    if (((r = r === k ? 0 : r), (i = i === k ? t.length : i), r < 0 || i > t.length || r > i)) throw new Ot("size=" + t.length + " beginIndex=" + r + " endIndex=" + i);
                    for (var n = R((i - r) | 0), e = 0, s = r; s < i; ) {
                        var _ = t[s];
                        if (_ >= 0) {
                            var h = e;
                            for (e = (h + 1) | 0, n[h] = U(_), s = (s + 1) | 0; s < i && t[s] >= 0; ) {
                                var a = s;
                                s = (a + 1) | 0;
                                var f = e;
                                (e = (f + 1) | 0), (n[f] = U(t[a]));
                            }
                        } else if (_ >> 5 == -2) {
                            var u,
                                v = s,
                                o = s;
                            if (i <= ((o + 1) | 0)) {
                                var l = e;
                                (e = (l + 1) | 0), (n[l] = U(65533)), (u = 1);
                            } else {
                                var w = t[o],
                                    c = t[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var g = 3968 ^ c ^ (w << 6);
                                    if (g < 128) {
                                        var b = e;
                                        (e = (b + 1) | 0), (n[b] = U(65533));
                                    } else {
                                        var $ = e;
                                        (e = ($ + 1) | 0), (n[$] = U(g));
                                    }
                                    u = 2;
                                } else {
                                    var d = e;
                                    (e = (d + 1) | 0), (n[d] = U(65533)), (u = 1);
                                }
                            }
                            s = (v + u) | 0;
                        } else if (_ >> 4 == -2) {
                            var q,
                                m = s;
                            t: {
                                var p = s;
                                if (i <= ((p + 2) | 0)) {
                                    var x = e;
                                    if (((e = (x + 1) | 0), (n[x] = U(65533)), i <= ((p + 1) | 0) || !(128 == (192 & t[(p + 1) | 0])))) {
                                        q = 1;
                                        break t;
                                    }
                                    q = 2;
                                } else {
                                    var y = t[p],
                                        S = t[(p + 1) | 0];
                                    if (128 == (192 & S)) {
                                        var z = t[(p + 2) | 0];
                                        if (128 == (192 & z)) {
                                            var j = -123008 ^ z ^ (S << 6) ^ (y << 12);
                                            if (j < 2048) {
                                                var I = e;
                                                (e = (I + 1) | 0), (n[I] = U(65533));
                                            } else if (55296 <= j && j <= 57343) {
                                                var C = e;
                                                (e = (C + 1) | 0), (n[C] = U(65533));
                                            } else {
                                                var M = e;
                                                (e = (M + 1) | 0), (n[M] = U(j));
                                            }
                                            q = 3;
                                        } else {
                                            var B = e;
                                            (e = (B + 1) | 0), (n[B] = U(65533)), (q = 2);
                                        }
                                    } else {
                                        var E = e;
                                        (e = (E + 1) | 0), (n[E] = U(65533)), (q = 1);
                                    }
                                }
                            }
                            s = (m + q) | 0;
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
                function kt(t, r) {
                    var i, n;
                    if ((mt(), r.e1(new $(0, 0)) > 0)) {
                        var e = r.h3(g(1));
                        n = 13 === t.tt(e);
                    } else n = !1;
                    if (n) {
                        var s = t.ut(r.h3(new $(1, 0)));
                        t.ps(new $(2, 0)), (i = s);
                    } else {
                        var _ = t.ut(r);
                        t.ps(new $(1, 0)), (i = _);
                    }
                    return i;
                }
                function dt(t, r, i) {
                    (i = i !== k && i), mt();
                    var n = t.ns_1;
                    if (null == n) return i ? -2 : -1;
                    var e = n,
                        s = e,
                        _ = e.at_1,
                        h = e.bt_1,
                        a = e.ct_1,
                        f = r.zs_1,
                        v = 0,
                        o = -1;
                    t: for (;;) {
                        var l = v;
                        v = (l + 1) | 0;
                        var w = f[l],
                            c = v;
                        v = (c + 1) | 0;
                        var g,
                            b = f[c];
                        if ((-1 !== b && (o = b), null == s)) break t;
                        if (w < 0) {
                            var $ = (v + u(-1, w)) | 0;
                            r: for (;;) {
                                var d = h;
                                h = (d + 1) | 0;
                                var q = v;
                                if (((v = (q + 1) | 0), (255 & _[d]) !== f[q])) return o;
                                var m = v === $;
                                if (h === a && ((h = (s = j(j(s).ft_1)).bt_1), (_ = s.at_1), (a = s.ct_1), s === e)) {
                                    if (!m) break t;
                                    s = null;
                                }
                                if (m) {
                                    g = f[v];
                                    break r;
                                }
                            }
                        } else {
                            var p = w,
                                x = h;
                            h = (x + 1) | 0;
                            var y = 255 & _[x],
                                S = (v + p) | 0;
                            r: for (;;) {
                                if (v === S) return o;
                                if (y === f[v]) {
                                    g = f[(v + p) | 0];
                                    break r;
                                }
                                v = (v + 1) | 0;
                            }
                            h === a && ((h = (s = j(s.ft_1)).bt_1), (_ = s.at_1), (a = s.ct_1), s === e && (s = null));
                        }
                        if (g >= 0) return g;
                        v = 0 | -g;
                    }
                    return i ? -2 : o;
                }
                function qt(t, r, i, n, e) {
                    mt();
                    for (var s = t, _ = r, h = s.ct_1, a = s.at_1, f = n; f < e; ) {
                        if ((_ === h && ((a = (s = j(s.ft_1)).at_1), (_ = s.bt_1), (h = s.ct_1)), a[_] !== i[f])) return !1;
                        (_ = (_ + 1) | 0), (f = (f + 1) | 0);
                    }
                    return !0;
                }
                function mt() {
                    s || ((s = !0), Et("0123456789abcdef"));
                }
                function pt() {
                    return yt(), _;
                }
                function xt(t, r) {
                    return (
                        yt(),
                        (function (t, r) {
                            yt();
                            for (var i = 0, n = 0, e = t.length, s = 0; s < e; ) {
                                var _ = t[s];
                                if (_ >= 0) {
                                    var h,
                                        a = n;
                                    if (((n = (a + 1) | 0), a === r)) return i;
                                    var f = A(10);
                                    if (_ !== E(f)) {
                                        var u = A(13);
                                        h = !(_ === E(u));
                                    } else h = !1;
                                    if ((h && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (i = (i + (_ < 65536 ? 1 : 2)) | 0, s = (s + 1) | 0; s < e && t[s] >= 0; ) {
                                        var v = s;
                                        s = (v + 1) | 0;
                                        var o,
                                            l = t[v],
                                            w = n;
                                        if (((n = (w + 1) | 0), w === r)) return i;
                                        var c = A(10);
                                        if (l !== E(c)) {
                                            var g = A(13);
                                            o = !(l === E(g));
                                        } else o = !1;
                                        if ((o && ((0 <= l && l <= 31) || (127 <= l && l <= 159))) || 65533 === l) return -1;
                                        i = (i + (l < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var b = s,
                                        $ = s;
                                    if (e <= (($ + 1) | 0)) {
                                        var k = n;
                                        if (((n = (k + 1) | 0), k === r)) return i;
                                        var d = A(10);
                                        if (65533 !== E(d)) {
                                            var q = A(13);
                                            E(q);
                                        }
                                        return -1;
                                    }
                                    var m = t[$],
                                        p = t[($ + 1) | 0];
                                    if (128 != (192 & p)) {
                                        var x = n;
                                        if (((n = (x + 1) | 0), x === r)) return i;
                                        var y = A(10);
                                        if (65533 !== E(y)) {
                                            var S = A(13);
                                            E(S);
                                        }
                                        return -1;
                                    }
                                    var z = 3968 ^ p ^ (m << 6);
                                    if (z < 128) {
                                        var j = n;
                                        if (((n = (j + 1) | 0), j === r)) return i;
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
                                    (i = (i + (z < 65536 ? 1 : 2)) | 0), (s = (b + 2) | 0);
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
                                        var ht = A(10);
                                        if (Y !== E(ht)) {
                                            var at = A(13);
                                            st = !(Y === E(at));
                                        } else st = !1;
                                        if ((st && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (i = (i + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    s = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var ft = n;
                                        if (((n = (ft + 1) | 0), ft === r)) return i;
                                        var ut = A(10);
                                        if (65533 !== E(ut)) {
                                            var vt = A(13);
                                            E(vt);
                                        }
                                        return -1;
                                    }
                                    var ot,
                                        lt = s;
                                    t: {
                                        var wt = s;
                                        if (e <= ((wt + 3) | 0)) {
                                            var ct = n;
                                            if (((n = (ct + 1) | 0), ct === r)) return i;
                                            var gt = A(10);
                                            if (65533 !== E(gt)) {
                                                var bt = A(13);
                                                E(bt);
                                            }
                                            return -1;
                                        }
                                        var $t = t[wt],
                                            kt = t[(wt + 1) | 0];
                                        if (128 != (192 & kt)) {
                                            var dt = n;
                                            if (((n = (dt + 1) | 0), dt === r)) return i;
                                            var qt = A(10);
                                            if (65533 !== E(qt)) {
                                                var mt = A(13);
                                                E(mt);
                                            }
                                            return -1;
                                        }
                                        var pt = t[(wt + 2) | 0];
                                        if (128 != (192 & pt)) {
                                            var xt = n;
                                            if (((n = (xt + 1) | 0), xt === r)) return i;
                                            var St = A(10);
                                            if (65533 !== E(St)) {
                                                var zt = A(13);
                                                E(zt);
                                            }
                                            return -1;
                                        }
                                        var jt = t[(wt + 3) | 0];
                                        if (128 != (192 & jt)) {
                                            var It = n;
                                            if (((n = (It + 1) | 0), It === r)) return i;
                                            var Ct = A(10);
                                            if (65533 !== E(Ct)) {
                                                var Mt = A(13);
                                                E(Mt);
                                            }
                                            return -1;
                                        }
                                        var At = 3678080 ^ jt ^ (pt << 6) ^ (kt << 12) ^ ($t << 18);
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
                                    s = (lt + ot) | 0;
                                }
                            }
                            return i;
                        })(t, r)
                    );
                }
                function yt() {
                    h || ((h = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function St(t, r) {
                    var i = (function (t, r, i, n) {
                        var e = i,
                            s = (n - 1) | 0;
                        for (; e <= s; ) {
                            var _ = (((e + s) | 0) >>> 1) | 0,
                                h = t[_];
                            if (h < r) e = (_ + 1) | 0;
                            else {
                                if (!(h > r)) return _;
                                s = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -e) - 1) | 0;
                    })(t.au_1, (r + 1) | 0, 0, t.zt_1.length);
                    return i >= 0 ? i : ~i;
                }
                function zt() {
                    a = this;
                    var t = new Int8Array([]);
                    this.bu_1 = new It(t);
                }
                function jt() {
                    return null == a && new zt(), a;
                }
                function It(t) {
                    jt(), (this.qs_1 = t), (this.rs_1 = 0), (this.ss_1 = null);
                }
                function Ct(t) {
                    return new It(t.mu());
                }
                function Mt(t, r) {
                    It.call(this, jt().bu_1.qs_1), (this.zt_1 = t), (this.au_1 = r);
                }
                function At() {
                    (this.ru_1 = null), (this.su_1 = !1), (this.tu_1 = null), (this.uu_1 = new $(-1, -1)), (this.vu_1 = null), (this.wu_1 = -1), (this.xu_1 = -1);
                }
                function Bt() {
                    (this.ns_1 = null), (this.os_1 = new $(0, 0));
                }
                function Et(t) {
                    return bt(t);
                }
                function Ot(t) {
                    Y(t, this), Z(this, Ot);
                }
                function Ft() {
                    var t,
                        r = ((t = z(v(Rt))), Rt.call(t, null), t);
                    return Z(r, Ft), r;
                }
                function Rt(t) {
                    Ut(t, this), Z(this, Rt);
                }
                function Ut(t, r) {
                    return Xt.call(r, t, null), r;
                }
                function Xt(t, r) {
                    rt(t, r, this), Z(this, Xt);
                }
                function Lt(t) {
                    (this.fw_1 = t), (this.gw_1 = !1), (this.hw_1 = new Bt());
                }
                function Pt(t) {
                    (this.jw_1 = t), (this.kw_1 = !1), (this.lw_1 = new Bt());
                }
                function Vt() {
                    (this.nt_1 = 0), (this.ot_1 = 0);
                }
                o(nt, "BlackholeSink", nt),
                    x(ht),
                    o(at, "Options", k, y, [y, S]),
                    x(vt),
                    o(ot, "Segment", ft),
                    x(zt),
                    o(It, "ByteString", k, k, [J]),
                    o(Mt, "SegmentedByteString", k, It),
                    o(At, "UnsafeCursor", At),
                    o(Bt, "Buffer", Bt),
                    o(Ot, "ArrayIndexOutOfBoundsException", k, W),
                    o(
                        Xt,
                        "IOException",
                        function t() {
                            var r = ((i = z(v(Xt))), Xt.call(i, null, null), i);
                            var i;
                            return Z(r, t), r;
                        },
                        tt,
                    ),
                    o(Rt, "EOFException", Ft, Xt),
                    o(Lt, "RealBufferedSink"),
                    o(Pt, "RealBufferedSource"),
                    it(Vt, "SegmentPool"),
                    (v(nt).ms = function (t, r) {
                        return t.ps(r);
                    }),
                    (v(nt).t9 = function () {}),
                    (v(nt).e5 = function () {}),
                    (v(ht).vs = function (t) {
                        if (0 === t.length) {
                            return new at([], new Int32Array([0, -1]));
                        }
                        var r = d(t);
                        q(r);
                        var i = r.s(),
                            n = m(i),
                            e = 0;
                        if (e < i)
                            do {
                                (e = (e + 1) | 0), n.k(-1);
                            } while (e < i);
                        for (var s = n, _ = 0, h = 0, a = t.length; h < a; ) {
                            var f = t[h];
                            h = (h + 1) | 0;
                            var u = _;
                            _ = (u + 1) | 0;
                            var v = p(r, f);
                            s.k2(v, u);
                        }
                        if (!(r.t(0).s() > 0)) {
                            throw w(l("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < r.s(); ) {
                            var c = r.t(o),
                                g = (o + 1) | 0;
                            t: for (; g < r.s(); ) {
                                var b = r.t(g);
                                if (!b.ws(c)) break t;
                                if (b.s() === c.s()) {
                                    var $ = "duplicate option: " + b.toString();
                                    throw w(l($));
                                }
                                s.t(g) > s.t(o) ? (r.m2(g), s.m2(g)) : (g = (g + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var x = new Bt();
                        st(this, k, x, k, r, k, k, s);
                        for (var y = 0, S = _t(x).k1(), z = new Int32Array(S); y < S; ) (z[y] = x.xs()), (y = (y + 1) | 0);
                        var j = z;
                        return new at(t.slice(), j);
                    }),
                    (v(at).s = function () {
                        return this.ys_1.length;
                    }),
                    (v(at).t = function (t) {
                        return this.ys_1[t];
                    }),
                    (v(ot).jt = function () {
                        return (this.dt_1 = !0), ut(this.at_1, this.bt_1, this.ct_1, !0, !1);
                    }),
                    (v(ot).kt = function () {
                        var t = this.ft_1 !== this ? this.ft_1 : null;
                        return (j(this.gt_1).ft_1 = this.ft_1), (j(this.ft_1).gt_1 = this.gt_1), (this.ft_1 = null), (this.gt_1 = null), t;
                    }),
                    (v(ot).lt = function (t) {
                        return (t.gt_1 = this), (t.ft_1 = this.ft_1), (j(this.ft_1).gt_1 = t), (this.ft_1 = t), t;
                    }),
                    (v(ot).mt = function (t) {
                        if (!(t > 0 && t <= ((this.ct_1 - this.bt_1) | 0))) {
                            throw w(l("byteCount out of range"));
                        }
                        var r;
                        if (t >= 1024) r = this.jt();
                        else {
                            r = f.pt();
                            var i = this.at_1,
                                n = r.at_1,
                                e = this.bt_1,
                                s = (this.bt_1 + t) | 0;
                            I(i, n, 0, e, s);
                        }
                        return (r.ct_1 = (r.bt_1 + t) | 0), (this.bt_1 = (this.bt_1 + t) | 0), j(this.gt_1).lt(r), r;
                    }),
                    (v(ot).qt = function () {
                        if (this.gt_1 === this) {
                            throw b(l("cannot compact"));
                        }
                        if (!j(this.gt_1).et_1) return c;
                        var t = (this.ct_1 - this.bt_1) | 0;
                        if (t > ((((8192 - j(this.gt_1).ct_1) | 0) + (j(this.gt_1).dt_1 ? 0 : j(this.gt_1).bt_1)) | 0)) return c;
                        this.rt(j(this.gt_1), t), this.kt(), f.st(this);
                    }),
                    (v(ot).rt = function (t, r) {
                        if (!t.et_1) {
                            throw b(l("only owner can write"));
                        }
                        if (((t.ct_1 + r) | 0) > 8192) {
                            if (t.dt_1) throw C();
                            if (((((t.ct_1 + r) | 0) - t.bt_1) | 0) > 8192) throw C();
                            var i = t.at_1,
                                n = t.at_1,
                                e = t.bt_1,
                                s = t.ct_1;
                            I(i, n, 0, e, s), (t.ct_1 = (t.ct_1 - t.bt_1) | 0), (t.bt_1 = 0);
                        }
                        var _ = this.at_1,
                            h = t.at_1,
                            a = t.ct_1,
                            f = this.bt_1,
                            u = (this.bt_1 + r) | 0;
                        I(_, h, a, f, u), (t.ct_1 = (t.ct_1 + r) | 0), (this.bt_1 = (this.bt_1 + r) | 0);
                    }),
                    (v(zt).cu = function (t, r, i) {
                        var n = (function (t, r) {
                            return gt(), r === lt() ? t.length : r;
                        })(t, i);
                        return ct(g(t.length), g(r), g(n)), new It(P(t, r, (r + n) | 0));
                    }),
                    (v(zt).du = function (t, r, i, n) {
                        return (r = r === k ? 0 : r), (i = i === k ? lt() : i), n === k ? this.cu(t, r, i) : n.cu.call(this, t, r, i);
                    }),
                    (v(zt).eu = function (t) {
                        var r = new It(Et(t));
                        return r.fu(t), r;
                    }),
                    (v(It).gu = function (t) {}),
                    (v(It).fu = function (t) {}),
                    (v(It).hu = function () {
                        var t = this.ss_1;
                        return null == t && ((t = $t(this.iu())), this.fu(t)), t;
                    }),
                    (v(It).ju = function () {
                        for (var t = R(u(this.qs_1.length, 2)), r = 0, i = this.qs_1, n = 0, e = i.length; n < e; ) {
                            var s = i[n];
                            n = (n + 1) | 0;
                            var _ = r;
                            r = (_ + 1) | 0;
                            var h = pt();
                            t[_] = h[(s >> 4) & 15];
                            var a = r;
                            r = (a + 1) | 0;
                            var f = pt();
                            t[a] = f[15 & s];
                        }
                        return V(t);
                    }),
                    (v(It).ku = function (t) {
                        if (t >= this.s() || t < 0) throw new Ot("size=" + this.s() + " pos=" + t);
                        return this.qs_1[t];
                    }),
                    (v(It).t = function (t) {
                        return this.ku(t);
                    }),
                    (v(It).s = function () {
                        return this.lu();
                    }),
                    (v(It).lu = function () {
                        return this.qs_1.length;
                    }),
                    (v(It).mu = function () {
                        return this.qs_1.slice();
                    }),
                    (v(It).iu = function () {
                        return this.qs_1;
                    }),
                    (v(It).nu = function (t, r, i) {
                        return (function (t, r, i, n) {
                            yt(), r.vt(t.qs_1, i, n);
                        })(this, t, r, i);
                    }),
                    (v(It).ou = function (t, r, i, n) {
                        return r.pu(i, this.qs_1, t, n);
                    }),
                    (v(It).pu = function (t, r, i, n) {
                        return t >= 0 && t <= ((this.qs_1.length - n) | 0) && i >= 0 && i <= ((r.length - n) | 0) && wt(this.qs_1, t, r, i, n);
                    }),
                    (v(It).ws = function (t) {
                        return this.ou(0, t, 0, t.s());
                    }),
                    (v(It).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.qs_1.length && t.pu(0, this.qs_1, 0, this.qs_1.length));
                    }),
                    (v(It).hashCode = function () {
                        var t,
                            r = this.rs_1;
                        if (0 === r) {
                            var i = D(this.qs_1);
                            this.gu(i), (t = i);
                        } else t = r;
                        return t;
                    }),
                    (v(It).qu = function (t) {
                        var r;
                        t: {
                            for (var i = this.s(), n = t.s(), e = 0, s = Math.min(i, n); e < s; ) {
                                var _ = 255 & this.t(e),
                                    h = 255 & t.t(e);
                                if (_ !== h) {
                                    r = _ < h ? -1 : 1;
                                    break t;
                                }
                                e = (e + 1) | 0;
                            }
                            i !== n ? (r = i < n ? -1 : 1) : (r = 0);
                        }
                        return r;
                    }),
                    (v(It).d = function (t) {
                        return this.qu(t instanceof It ? t : G());
                    }),
                    (v(It).toString = function () {
                        var t, r, i;
                        if (0 !== this.qs_1.length) {
                            var n = xt(this.qs_1, 64);
                            if (-1 !== n) {
                                var e = this.hu(),
                                    s = e.substring(0, n),
                                    _ = H(H(H(s, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = n < e.length ? "[size=" + this.qs_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var h;
                                if (this.qs_1.length <= 64) h = "[hex=" + this.ju() + "]";
                                else {
                                    var a,
                                        f = this.qs_1.length,
                                        u = ((r = this), (i = 64), gt(), i === lt() ? r.s() : i);
                                    if (!(u <= this.qs_1.length)) {
                                        var v = "endIndex > length(" + this.qs_1.length + ")";
                                        throw w(l(v));
                                    }
                                    if (!(((u - 0) | 0) >= 0)) {
                                        throw w(l("endIndex < beginIndex"));
                                    }
                                    u !== this.qs_1.length ? (a = new It(P(this.qs_1, 0, u))) : (a = this), (h = "[size=" + f + " hex=" + a.ju() + "…]");
                                }
                                t = h;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (v(Mt).ju = function () {
                        return Ct(this).ju();
                    }),
                    (v(Mt).ku = function (t) {
                        ct(g(this.au_1[(this.zt_1.length - 1) | 0]), g(t), new $(1, 0));
                        var r = St(this, t),
                            i = 0 === r ? 0 : this.au_1[(r - 1) | 0],
                            n = this.au_1[(r + this.zt_1.length) | 0];
                        return this.zt_1[r][(((t - i) | 0) + n) | 0];
                    }),
                    (v(Mt).lu = function () {
                        return this.au_1[(this.zt_1.length - 1) | 0];
                    }),
                    (v(Mt).mu = function () {
                        for (var t = new Int8Array(this.s()), r = 0, i = this.zt_1.length, n = 0, e = 0; n < i; ) {
                            var s = this.au_1[(i + n) | 0],
                                _ = this.au_1[n],
                                h = (_ - e) | 0,
                                a = this.zt_1[n];
                            I(a, t, r, s, (s + h) | 0), (r = (r + h) | 0), (e = _), (n = (n + 1) | 0);
                        }
                        return t;
                    }),
                    (v(Mt).nu = function (t, r, i) {
                        for (var n = (r + i) | 0, e = St(this, r), s = r; s < n; ) {
                            var _ = 0 === e ? 0 : this.au_1[(e - 1) | 0],
                                h = (this.au_1[e] - _) | 0,
                                a = this.au_1[(this.zt_1.length + e) | 0],
                                f = (_ + h) | 0,
                                u = (Math.min(n, f) - s) | 0,
                                v = (a + ((s - _) | 0)) | 0,
                                o = ut(this.zt_1[e], v, (v + u) | 0, !0, !1);
                            null == t.ns_1 ? ((o.gt_1 = o), (o.ft_1 = o.gt_1), (t.ns_1 = o.ft_1)) : j(j(t.ns_1).gt_1).lt(o), (s = (s + u) | 0), (e = (e + 1) | 0);
                        }
                        return (t.os_1 = t.os_1.g3(g(i))), c;
                    }),
                    (v(Mt).ou = function (t, r, i, n) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - n) | 0)) e = !1;
                        else {
                            for (var s = i, _ = (t + n) | 0, h = St(this, t), a = t; a < _; ) {
                                var f = 0 === h ? 0 : this.au_1[(h - 1) | 0],
                                    u = (this.au_1[h] - f) | 0,
                                    v = this.au_1[(this.zt_1.length + h) | 0],
                                    o = (f + u) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (v + ((a - f) | 0)) | 0,
                                    c = this.zt_1[h];
                                if (!r.pu(s, c, w, l)) {
                                    e = !1;
                                    break t;
                                }
                                (s = (s + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Mt).pu = function (t, r, i, n) {
                        var e;
                        t: if (t < 0 || t > ((this.s() - n) | 0) || i < 0 || i > ((r.length - n) | 0)) e = !1;
                        else {
                            for (var s = i, _ = (t + n) | 0, h = St(this, t), a = t; a < _; ) {
                                var f = 0 === h ? 0 : this.au_1[(h - 1) | 0],
                                    u = (this.au_1[h] - f) | 0,
                                    v = this.au_1[(this.zt_1.length + h) | 0],
                                    o = (f + u) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (v + ((a - f) | 0)) | 0;
                                if (!wt(this.zt_1[h], w, r, s, l)) {
                                    e = !1;
                                    break t;
                                }
                                (s = (s + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            e = !0;
                        }
                        return e;
                    }),
                    (v(Mt).iu = function () {
                        return this.mu();
                    }),
                    (v(Mt).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.s() && this.ou(0, t, 0, this.s()));
                    }),
                    (v(Mt).hashCode = function () {
                        var t,
                            r = this.rs_1;
                        if (0 === r) {
                            r = 1;
                            for (var i = this.zt_1.length, n = 0, e = 0; n < i; ) {
                                for (var s = this.au_1[(i + n) | 0], _ = this.au_1[n], h = this.zt_1[n], a = s, f = (s + ((_ - e) | 0)) | 0; a < f; ) (r = (u(31, r) + h[a]) | 0), (a = (a + 1) | 0);
                                (e = _), (n = (n + 1) | 0);
                            }
                            this.gu(r), (t = r);
                        } else t = r;
                        return t;
                    }),
                    (v(Mt).toString = function () {
                        return Ct(this).toString();
                    }),
                    (v(At).e5 = function () {
                        if (null == this.ru_1) {
                            throw b(l("not attached to a buffer"));
                        }
                        (this.ru_1 = null), (this.tu_1 = null), (this.uu_1 = new $(-1, -1)), (this.vu_1 = null), (this.wu_1 = -1), (this.xu_1 = -1);
                    }),
                    (v(Bt).yu = function () {
                        return this;
                    }),
                    (v(Bt).zu = function () {
                        return this.os_1.equals(new $(0, 0));
                    }),
                    (v(Bt).av = function (t) {
                        if (this.os_1.e1(t) < 0) throw new Rt(null);
                    }),
                    (v(Bt).bv = function (t) {
                        return this.os_1.e1(t) >= 0;
                    }),
                    (v(Bt).cv = function (t, r, i) {
                        var n,
                            e = r,
                            s = i;
                        if ((ct(this.os_1, e, s), s.equals(new $(0, 0)))) n = this;
                        else {
                            t.os_1 = t.os_1.g3(s);
                            for (var _ = this.ns_1; e.e1(g((j(_).ct_1 - _.bt_1) | 0)) >= 0; ) (e = e.h3(g((_.ct_1 - _.bt_1) | 0))), (_ = _.ft_1);
                            for (; s.e1(new $(0, 0)) > 0; ) {
                                var h = j(_).jt();
                                h.bt_1 = (h.bt_1 + e.k1()) | 0;
                                var a = h,
                                    f = (h.bt_1 + s.k1()) | 0,
                                    u = h.ct_1;
                                (a.ct_1 = Math.min(f, u)), null == t.ns_1 ? ((h.gt_1 = h), (h.ft_1 = h.gt_1), (t.ns_1 = h.ft_1)) : j(j(t.ns_1).gt_1).lt(h), (s = s.h3(g((h.ct_1 - h.bt_1) | 0))), (e = new $(0, 0)), (_ = _.ft_1);
                            }
                            n = this;
                        }
                        return n;
                    }),
                    (v(Bt).tt = function (t) {
                        var r;
                        ct(this.os_1, t, new $(1, 0));
                        var i = this.ns_1;
                        if (null != i) {
                            var n = i;
                            if (this.os_1.h3(t).e1(t) < 0) {
                                for (var e = this.os_1; e.e1(t) > 0; ) (n = j(n.gt_1)), (e = e.h3(g((n.ct_1 - n.bt_1) | 0)));
                                var s = n,
                                    _ = e;
                                r = j(s).at_1[K(s.bt_1).g3(t).h3(_).k1()];
                            } else {
                                var h = new $(0, 0);
                                t: for (;;) {
                                    var a = h,
                                        f = (n.ct_1 - n.bt_1) | 0,
                                        u = a.g3(g(f));
                                    if (u.e1(t) > 0) break t;
                                    (n = j(n.ft_1)), (h = u);
                                }
                                var v = n,
                                    o = h;
                                r = j(v).at_1[K(v.bt_1).g3(t).h3(o).k1()];
                            }
                        } else {
                            var l = new $(-1, -1);
                            r = j(null).at_1[K(null.bt_1).g3(t).h3(l).k1()];
                        }
                        return r;
                    }),
                    (v(Bt).dv = function () {
                        var t,
                            r = this.os_1;
                        if (r.equals(new $(0, 0))) t = new $(0, 0);
                        else {
                            var i = j(j(this.ns_1).gt_1);
                            i.ct_1 < 8192 && i.et_1 && (r = r.h3(g((i.ct_1 - i.bt_1) | 0))), (t = r);
                        }
                        return t;
                    }),
                    (v(Bt).ev = function () {
                        if (this.os_1.equals(new $(0, 0))) throw Ft();
                        var t = j(this.ns_1),
                            r = t.bt_1,
                            i = t.ct_1,
                            n = r;
                        r = (n + 1) | 0;
                        var e = t.at_1[n];
                        return (this.os_1 = this.os_1.h3(new $(1, 0))), r === i ? ((this.ns_1 = t.kt()), f.st(t)) : (t.bt_1 = r), e;
                    }),
                    (v(Bt).xs = function () {
                        var t;
                        if (this.os_1.e1(new $(4, 0)) < 0) throw Ft();
                        var r = j(this.ns_1),
                            i = r.bt_1,
                            n = r.ct_1;
                        if (g((n - i) | 0).e1(new $(4, 0)) < 0) {
                            t = ((255 & this.ev()) << 24) | ((255 & this.ev()) << 16) | ((255 & this.ev()) << 8) | (255 & this.ev());
                        } else {
                            var e = r.at_1,
                                s = i,
                                _ = (i = (s + 1) | 0),
                                h = (i = (_ + 1) | 0),
                                a = (i = (h + 1) | 0);
                            i = (a + 1) | 0;
                            var u = ((255 & e[s]) << 24) | ((255 & e[_]) << 16) | ((255 & e[h]) << 8) | (255 & e[a]);
                            (this.os_1 = this.os_1.h3(new $(4, 0))), i === n ? ((this.ns_1 = r.kt()), f.st(r)) : (r.bt_1 = i), (t = u);
                        }
                        return t;
                    }),
                    (v(Bt).fv = function () {
                        return this.gv(this.os_1);
                    }),
                    (v(Bt).gv = function (t) {
                        var r;
                        if (!(t.e1(new $(0, 0)) >= 0 && t.e1(new $(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + t.toString();
                            throw w(l(i));
                        }
                        if (this.os_1.e1(t) < 0) throw Ft();
                        if (t.e1(new $(4096, 0)) >= 0) {
                            var n = this.iv(t.k1());
                            this.ps(t), (r = n);
                        } else r = new It(this.hv(t));
                        return r;
                    }),
                    (v(Bt).jv = function () {
                        return this.ut(this.os_1);
                    }),
                    (v(Bt).ut = function (t) {
                        var r;
                        if (!(t.e1(new $(0, 0)) >= 0 && t.e1(new $(2147483647, 0)) <= 0)) {
                            var i = "byteCount: " + t.toString();
                            throw w(l(i));
                        }
                        if (this.os_1.e1(t) < 0) throw Ft();
                        if (t.equals(new $(0, 0))) r = "";
                        else {
                            var n = j(this.ns_1);
                            if (K(n.bt_1).g3(t).e1(g(n.ct_1)) > 0) r = $t(this.hv(t));
                            else {
                                var e = $t(n.at_1, n.bt_1, (n.bt_1 + t.k1()) | 0);
                                (n.bt_1 = (n.bt_1 + t.k1()) | 0), (this.os_1 = this.os_1.h3(t)), n.bt_1 === n.ct_1 && ((this.ns_1 = n.kt()), f.st(n)), (r = e);
                            }
                        }
                        return r;
                    }),
                    (v(Bt).kv = function () {
                        return this.lv(new $(-1, 2147483647));
                    }),
                    (v(Bt).lv = function (t) {
                        var r;
                        if (!(t.e1(new $(0, 0)) >= 0)) {
                            var i = "limit < 0: " + t.toString();
                            throw w(l(i));
                        }
                        var n = t.equals(new $(-1, 2147483647)) ? new $(-1, 2147483647) : t.g3(new $(1, 0)),
                            e = this.mv(10, new $(0, 0), n);
                        if (e.equals(new $(-1, -1))) {
                            var s;
                            if (n.e1(this.os_1) < 0) {
                                var _ = n.h3(g(1));
                                s = 13 === this.tt(_);
                            } else s = !1;
                            if (!(!!s && 10 === this.tt(n))) {
                                var h = new Bt(),
                                    a = new $(0, 0),
                                    f = this.os_1,
                                    u = g(32),
                                    v = u.e1(f) <= 0 ? u : f;
                                this.cv(h, a, v);
                                var o = this.os_1;
                                throw new Rt("\\n not found: limit=" + (o.e1(t) <= 0 ? o : t).toString() + " content=" + h.fv().ju() + "…");
                            }
                            r = kt(this, n);
                        } else r = kt(this, e);
                        return r;
                    }),
                    (v(Bt).nv = function (t) {
                        var r,
                            i = dt(this, t);
                        if (-1 !== i) {
                            var n = t.ys_1[i].s();
                            this.ps(g(n)), (r = i);
                        } else r = -1;
                        return r;
                    }),
                    (v(Bt).ov = function () {
                        return this.hv(this.os_1);
                    }),
                    (v(Bt).hv = function (t) {
                        if (!(t.e1(new $(0, 0)) >= 0 && t.e1(new $(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.os_1.e1(t) < 0) throw Ft();
                        var i = new Int8Array(t.k1());
                        return this.pv(i), i;
                    }),
                    (v(Bt).pv = function (t) {
                        for (var r = 0; r < t.length; ) {
                            var i = this.qv(t, r, (t.length - r) | 0);
                            if (-1 === i) throw Ft();
                            r = (r + i) | 0;
                        }
                        return c;
                    }),
                    (v(Bt).qv = function (t, r, i) {
                        var n;
                        ct(g(t.length), g(r), g(i));
                        var e = this.ns_1;
                        if (null != e) {
                            var s = e,
                                _ = (s.ct_1 - s.bt_1) | 0,
                                h = Math.min(i, _),
                                a = s.at_1,
                                u = s.bt_1,
                                v = (s.bt_1 + h) | 0;
                            I(a, t, r, u, v), (s.bt_1 = (s.bt_1 + h) | 0), (this.os_1 = this.os_1.h3(g(h))), s.bt_1 === s.ct_1 && ((this.ns_1 = s.kt()), f.st(s)), (n = h);
                        } else n = -1;
                        return n;
                    }),
                    (v(Bt).j2 = function () {
                        return this.ps(this.os_1), c;
                    }),
                    (v(Bt).ps = function (t) {
                        for (var r = t; r.e1(new $(0, 0)) > 0; ) {
                            var i = this.ns_1;
                            if (null == i) throw Ft();
                            var n = i,
                                e = r,
                                s = (n.ct_1 - n.bt_1) | 0,
                                _ = g(s),
                                h = (e.e1(_) <= 0 ? e : _).k1();
                            (this.os_1 = this.os_1.h3(g(h))), (r = r.h3(g(h))), (n.bt_1 = (n.bt_1 + h) | 0), n.bt_1 === n.ct_1 && ((this.ns_1 = n.kt()), f.st(n));
                        }
                        return c;
                    }),
                    (v(Bt).rv = function (t) {
                        var r = t.s();
                        return t.nu(this, 0, r), this;
                    }),
                    (v(Bt).sv = function (t) {
                        var r;
                        if (!(t >= 1 && t <= 8192)) {
                            throw w(l("unexpected capacity"));
                        }
                        if (null != this.ns_1) {
                            var i = j(this.ns_1).gt_1;
                            (((j(i).ct_1 + t) | 0) > 8192 || !i.et_1) && (i = i.lt(f.pt())), (r = i);
                        } else {
                            var n = f.pt();
                            (this.ns_1 = n), (n.gt_1 = n), (n.ft_1 = n), (r = n);
                        }
                        return r;
                    }),
                    (v(Bt).tv = function (t) {
                        return this.uv(t, 0, t.length);
                    }),
                    (v(Bt).uv = function (t, r, i) {
                        if (!(r >= 0)) throw w(l("beginIndex < 0: " + r));
                        if (!(i >= r)) throw w(l("endIndex < beginIndex: " + i + " < " + r));
                        if (!(i <= t.length)) {
                            var n = "endIndex > string.length: " + i + " > " + t.length;
                            throw w(l(n));
                        }
                        for (var e = r; e < i; ) {
                            var s = M(t, e),
                                _ = E(s);
                            if (_ < 128) {
                                var h = this.sv(1),
                                    a = h.at_1,
                                    f = (h.ct_1 - e) | 0,
                                    u = (8192 - f) | 0,
                                    v = Math.min(i, u),
                                    o = e;
                                (e = (o + 1) | 0), (a[(f + o) | 0] = O(_));
                                t: for (; e < v; ) {
                                    var c = M(t, e);
                                    if ((_ = E(c)) >= 128) break t;
                                    var b = e;
                                    (e = (b + 1) | 0), (a[(f + b) | 0] = O(_));
                                }
                                var k = (((e + f) | 0) - h.ct_1) | 0;
                                (h.ct_1 = (h.ct_1 + k) | 0), (this.os_1 = this.os_1.g3(g(k)));
                            } else if (_ < 2048) {
                                var d = this.sv(2);
                                (d.at_1[d.ct_1] = O((_ >> 6) | 192)), (d.at_1[(d.ct_1 + 1) | 0] = O((63 & _) | 128)), (d.ct_1 = (d.ct_1 + 2) | 0), (this.os_1 = this.os_1.g3(new $(2, 0))), (e = (e + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var q = this.sv(3);
                                (q.at_1[q.ct_1] = O((_ >> 12) | 224)), (q.at_1[(q.ct_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (q.at_1[(q.ct_1 + 2) | 0] = O((63 & _) | 128)), (q.ct_1 = (q.ct_1 + 3) | 0), (this.os_1 = this.os_1.g3(new $(3, 0))), (e = (e + 1) | 0);
                            } else {
                                var m;
                                if (((e + 1) | 0) < i) {
                                    var p = M(t, (e + 1) | 0);
                                    m = E(p);
                                } else m = 0;
                                var x = m;
                                if (_ > 56319 || !(56320 <= x && x <= 57343)) {
                                    var y = A(63),
                                        S = E(y);
                                    this.vv(S), (e = (e + 1) | 0);
                                } else {
                                    var z = (65536 + (((1023 & _) << 10) | (1023 & x))) | 0,
                                        j = this.sv(4);
                                    (j.at_1[j.ct_1] = O((z >> 18) | 240)), (j.at_1[(j.ct_1 + 1) | 0] = O(((z >> 12) & 63) | 128)), (j.at_1[(j.ct_1 + 2) | 0] = O(((z >> 6) & 63) | 128)), (j.at_1[(j.ct_1 + 3) | 0] = O((63 & z) | 128)), (j.ct_1 = (j.ct_1 + 4) | 0), (this.os_1 = this.os_1.g3(new $(4, 0))), (e = (e + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (v(Bt).wv = function (t) {
                        return this.vt(t, 0, t.length);
                    }),
                    (v(Bt).vt = function (t, r, i) {
                        var n = r;
                        ct(g(t.length), g(n), g(i));
                        for (var e = (n + i) | 0; n < e; ) {
                            var s = this.sv(1),
                                _ = (e - n) | 0,
                                h = (8192 - s.ct_1) | 0,
                                a = Math.min(_, h),
                                f = s.at_1,
                                u = s.ct_1;
                            I(t, f, u, n, (n + a) | 0), (n = (n + a) | 0), (s.ct_1 = (s.ct_1 + a) | 0);
                        }
                        return (this.os_1 = this.os_1.g3(g(i))), this;
                    }),
                    (v(Bt).us = function (t) {
                        var r = new $(0, 0);
                        t: for (;;) {
                            var i = t.xv(this, new $(8192, 0));
                            if (i.equals(new $(-1, -1))) break t;
                            r = r.g3(i);
                        }
                        return r;
                    }),
                    (v(Bt).vv = function (t) {
                        var r = this.sv(1),
                            i = r.ct_1;
                        return (r.ct_1 = (i + 1) | 0), (r.at_1[i] = O(t)), (this.os_1 = this.os_1.g3(new $(1, 0))), this;
                    }),
                    (v(Bt).ts = function (t) {
                        var r = this.sv(4),
                            i = r.at_1,
                            n = r.ct_1,
                            e = n;
                        (n = (e + 1) | 0), (i[e] = O((t >>> 24) & 255));
                        var s = n;
                        (n = (s + 1) | 0), (i[s] = O((t >>> 16) & 255));
                        var _ = n;
                        (n = (_ + 1) | 0), (i[_] = O((t >>> 8) & 255));
                        var h = n;
                        return (n = (h + 1) | 0), (i[h] = O(255 & t)), (r.ct_1 = n), (this.os_1 = this.os_1.g3(new $(4, 0))), this;
                    }),
                    (v(Bt).ms = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (t === this) {
                                throw w(l("source == this"));
                            }
                            for (ct(t.os_1, new $(0, 0), n); n.e1(new $(0, 0)) > 0; ) {
                                if (n.e1(g((j(t.ns_1).ct_1 - j(t.ns_1).bt_1) | 0)) < 0) {
                                    var e,
                                        s = null != this.ns_1 ? j(this.ns_1).gt_1 : null;
                                    if (null != s && s.et_1) {
                                        var _ = n,
                                            h = s.ct_1,
                                            a = _.g3(g(h)),
                                            f = s.dt_1 ? 0 : s.bt_1;
                                        e = a.h3(g(f)).e1(new $(8192, 0)) <= 0;
                                    } else e = !1;
                                    if (e) {
                                        j(t.ns_1).rt(s, n.k1()), (t.os_1 = t.os_1.h3(n)), (this.os_1 = this.os_1.g3(n)), (i = c);
                                        break t;
                                    }
                                    t.ns_1 = j(t.ns_1).mt(n.k1());
                                }
                                var u = t.ns_1,
                                    v = g((j(u).ct_1 - u.bt_1) | 0);
                                if (((t.ns_1 = u.kt()), null == this.ns_1)) (this.ns_1 = u), (u.gt_1 = u), (u.ft_1 = u.gt_1);
                                else {
                                    var o = j(this.ns_1).gt_1;
                                    (o = j(o).lt(u)).qt();
                                }
                                (t.os_1 = t.os_1.h3(v)), (this.os_1 = this.os_1.g3(v)), (n = n.h3(v));
                            }
                        }
                        return i;
                    }),
                    (v(Bt).xv = function (t, r) {
                        var i,
                            n = r;
                        if (!(n.e1(new $(0, 0)) >= 0)) {
                            var e = "byteCount < 0: " + n.toString();
                            throw w(l(e));
                        }
                        return this.os_1.equals(new $(0, 0)) ? (i = new $(-1, -1)) : (n.e1(this.os_1) > 0 && (n = this.os_1), t.ms(this, n), (i = n)), i;
                    }),
                    (v(Bt).mv = function (t, r, i) {
                        var n;
                        t: {
                            var e = r,
                                s = i;
                            if (!(new $(0, 0).e1(e) <= 0 && e.e1(s) <= 0)) {
                                var _ = "size=" + this.os_1.toString() + " fromIndex=" + e.toString() + " toIndex=" + s.toString();
                                throw w(l(_));
                            }
                            if ((s.e1(this.os_1) > 0 && (s = this.os_1), e.equals(s))) n = new $(-1, -1);
                            else {
                                var h = e,
                                    a = this.ns_1;
                                if (null != a) {
                                    var f = a;
                                    if (this.os_1.h3(h).e1(h) < 0) {
                                        for (var u = this.os_1; u.e1(h) > 0; ) (f = j(f.gt_1)), (u = u.h3(g((f.ct_1 - f.bt_1) | 0)));
                                        var v = f,
                                            o = u;
                                        if (null == v) {
                                            n = new $(-1, -1);
                                            break t;
                                        }
                                        for (var c = v, b = o; b.e1(s) < 0; ) {
                                            for (var k = c.at_1, d = g(c.ct_1), q = K(c.bt_1).g3(s).h3(b), m = (d.e1(q) <= 0 ? d : q).k1(), p = K(c.bt_1).g3(e).h3(b).k1(); p < m; ) {
                                                if (k[p] === t) {
                                                    n = K((p - c.bt_1) | 0).g3(b);
                                                    break t;
                                                }
                                                p = (p + 1) | 0;
                                            }
                                            (e = b = b.g3(g((c.ct_1 - c.bt_1) | 0))), (c = j(c.ft_1));
                                        }
                                        n = new $(-1, -1);
                                    } else {
                                        var x = new $(0, 0);
                                        r: for (;;) {
                                            var y = x,
                                                S = (f.ct_1 - f.bt_1) | 0,
                                                z = y.g3(g(S));
                                            if (z.e1(h) > 0) break r;
                                            (f = j(f.ft_1)), (x = z);
                                        }
                                        if (null != f) {
                                            for (var I = f, C = x; C.e1(s) < 0; ) {
                                                for (var M = I.at_1, A = g(I.ct_1), B = K(I.bt_1).g3(s).h3(C), E = (A.e1(B) <= 0 ? A : B).k1(), O = K(I.bt_1).g3(e).h3(C).k1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        n = K((O - I.bt_1) | 0).g3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (e = C = C.g3(g((I.ct_1 - I.bt_1) | 0))), (I = j(I.ft_1));
                                            }
                                            n = new $(-1, -1);
                                        } else n = new $(-1, -1);
                                    }
                                } else {
                                    new $(-1, -1);
                                    n = new $(-1, -1);
                                }
                            }
                        }
                        return n;
                    }),
                    (v(Bt).yv = function (t) {
                        return this.zv(t, new $(0, 0));
                    }),
                    (v(Bt).zv = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (!(t.s() > 0)) {
                                throw w(l("bytes is empty"));
                            }
                            if (!(n.e1(new $(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + n.toString();
                                throw w(l(e));
                            }
                            var s = n,
                                _ = this.ns_1;
                            if (null != _) {
                                var h = _;
                                if (this.os_1.h3(s).e1(s) < 0) {
                                    for (var a = this.os_1; a.e1(s) > 0; ) (h = j(h.gt_1)), (a = a.h3(g((h.ct_1 - h.bt_1) | 0)));
                                    var f = h,
                                        u = a;
                                    if (null == f) {
                                        i = new $(-1, -1);
                                        break t;
                                    }
                                    for (var v = f, o = u, c = t.iu(), b = c[0], k = t.s(), d = this.os_1.h3(g(k)).g3(new $(1, 0)); o.e1(d) < 0; ) {
                                        var q = v.at_1,
                                            m = v.ct_1,
                                            p = K(v.bt_1).g3(d).h3(o),
                                            x = g(m),
                                            y = (x.e1(p) <= 0 ? x : p).k1(),
                                            S = K(v.bt_1).g3(n).h3(o).k1();
                                        if (S < y)
                                            do {
                                                var z = S;
                                                if (((S = (S + 1) | 0), q[z] === b && qt(v, (z + 1) | 0, c, 1, k))) {
                                                    i = K((z - v.bt_1) | 0).g3(o);
                                                    break t;
                                                }
                                            } while (S < y);
                                        (n = o = o.g3(g((v.ct_1 - v.bt_1) | 0))), (v = j(v.ft_1));
                                    }
                                    i = new $(-1, -1);
                                } else {
                                    var I = new $(0, 0);
                                    r: for (;;) {
                                        var C = I,
                                            M = (h.ct_1 - h.bt_1) | 0,
                                            A = C.g3(g(M));
                                        if (A.e1(s) > 0) break r;
                                        (h = j(h.ft_1)), (I = A);
                                    }
                                    if (null != h) {
                                        for (var B = h, E = I, O = t.iu(), F = O[0], R = t.s(), U = this.os_1.h3(g(R)).g3(new $(1, 0)); E.e1(U) < 0; ) {
                                            var X = B.at_1,
                                                L = B.ct_1,
                                                P = K(B.bt_1).g3(U).h3(E),
                                                V = g(L),
                                                D = (V.e1(P) <= 0 ? V : P).k1(),
                                                G = K(B.bt_1).g3(n).h3(E).k1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && qt(B, (H + 1) | 0, O, 1, R))) {
                                                        i = K((H - B.bt_1) | 0).g3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (n = E = E.g3(g((B.ct_1 - B.bt_1) | 0))), (B = j(B.ft_1));
                                        }
                                        i = new $(-1, -1);
                                    } else i = new $(-1, -1);
                                }
                            } else {
                                new $(-1, -1);
                                i = new $(-1, -1);
                            }
                        }
                        return i;
                    }),
                    (v(Bt).aw = function (t) {
                        return this.bw(t, new $(0, 0));
                    }),
                    (v(Bt).bw = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (!(n.e1(new $(0, 0)) >= 0)) {
                                var e = "fromIndex < 0: " + n.toString();
                                throw w(l(e));
                            }
                            var s = n,
                                _ = this.ns_1;
                            if (null != _) {
                                var h = _;
                                if (this.os_1.h3(s).e1(s) < 0) {
                                    for (var a = this.os_1; a.e1(s) > 0; ) (h = j(h.gt_1)), (a = a.h3(g((h.ct_1 - h.bt_1) | 0)));
                                    var f = h,
                                        u = a;
                                    if (null == f) {
                                        i = new $(-1, -1);
                                        break t;
                                    }
                                    var v = f,
                                        o = u;
                                    if (2 === t.s())
                                        for (var c = t.t(0), b = t.t(1); o.e1(this.os_1) < 0; ) {
                                            for (var k = v.at_1, d = K(v.bt_1).g3(n).h3(o).k1(), q = v.ct_1; d < q; ) {
                                                var m = k[d];
                                                if (m === c || m === b) {
                                                    i = K((d - v.bt_1) | 0).g3(o);
                                                    break t;
                                                }
                                                d = (d + 1) | 0;
                                            }
                                            (n = o = o.g3(g((v.ct_1 - v.bt_1) | 0))), (v = j(v.ft_1));
                                        }
                                    else
                                        for (var p = t.iu(); o.e1(this.os_1) < 0; ) {
                                            for (var x = v.at_1, y = K(v.bt_1).g3(n).h3(o).k1(), S = v.ct_1; y < S; ) {
                                                for (var z = x[y], I = 0, C = p.length; I < C; ) {
                                                    var M = p[I];
                                                    if (((I = (I + 1) | 0), z === M)) {
                                                        i = K((y - v.bt_1) | 0).g3(o);
                                                        break t;
                                                    }
                                                }
                                                y = (y + 1) | 0;
                                            }
                                            (n = o = o.g3(g((v.ct_1 - v.bt_1) | 0))), (v = j(v.ft_1));
                                        }
                                    i = new $(-1, -1);
                                } else {
                                    var A = new $(0, 0);
                                    r: for (;;) {
                                        var B = A,
                                            E = (h.ct_1 - h.bt_1) | 0,
                                            O = B.g3(g(E));
                                        if (O.e1(s) > 0) break r;
                                        (h = j(h.ft_1)), (A = O);
                                    }
                                    if (null != h) {
                                        var F = h,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.e1(this.os_1) < 0; ) {
                                                for (var L = F.at_1, P = K(F.bt_1).g3(n).h3(R).k1(), V = F.ct_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        i = K((P - F.bt_1) | 0).g3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (n = R = R.g3(g((F.ct_1 - F.bt_1) | 0))), (F = j(F.ft_1));
                                            }
                                        else
                                            for (var G = t.iu(); R.e1(this.os_1) < 0; ) {
                                                for (var H = F.at_1, J = K(F.bt_1).g3(n).h3(R).k1(), N = F.ct_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            i = K((J - F.bt_1) | 0).g3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (n = R = R.g3(g((F.ct_1 - F.bt_1) | 0))), (F = j(F.ft_1));
                                            }
                                        i = new $(-1, -1);
                                    } else i = new $(-1, -1);
                                }
                            } else {
                                new $(-1, -1);
                                i = new $(-1, -1);
                            }
                        }
                        return i;
                    }),
                    (v(Bt).cw = function (t, r) {
                        return this.dw(t, r, 0, r.s());
                    }),
                    (v(Bt).dw = function (t, r, i, n) {
                        var e;
                        t: if (t.e1(new $(0, 0)) < 0 || i < 0 || n < 0 || this.os_1.h3(t).e1(g(n)) < 0 || ((r.s() - i) | 0) < n) e = !1;
                        else {
                            var s = 0;
                            if (s < n)
                                do {
                                    var _ = s;
                                    s = (s + 1) | 0;
                                    var h = t.g3(g(_));
                                    if (this.tt(h) !== r.t((i + _) | 0)) {
                                        e = !1;
                                        break t;
                                    }
                                } while (s < n);
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
                        var r;
                        t: if (this !== t)
                            if (t instanceof Bt)
                                if (this.os_1.equals(t.os_1))
                                    if (this.os_1.equals(new $(0, 0))) r = !0;
                                    else {
                                        for (var i, n = j(this.ns_1), e = j(t.ns_1), s = n.bt_1, _ = e.bt_1, h = new $(0, 0); h.e1(this.os_1) < 0; ) {
                                            var a = (n.ct_1 - s) | 0,
                                                f = (e.ct_1 - _) | 0,
                                                u = Math.min(a, f);
                                            i = g(u);
                                            var v = new $(0, 0);
                                            if (v.e1(i) < 0)
                                                do {
                                                    v = v.g3(new $(1, 0));
                                                    var o = s;
                                                    s = (o + 1) | 0;
                                                    var l = _;
                                                    if (((_ = (l + 1) | 0), n.at_1[o] !== e.at_1[l])) {
                                                        r = !1;
                                                        break t;
                                                    }
                                                } while (v.e1(i) < 0);
                                            s === n.ct_1 && (s = (n = j(n.ft_1)).bt_1), _ === e.ct_1 && (_ = (e = j(e.ft_1)).bt_1), (h = h.g3(i));
                                        }
                                        r = !0;
                                    }
                                else r = !1;
                            else r = !1;
                        else r = !0;
                        return r;
                    }),
                    (v(Bt).hashCode = function () {
                        var t,
                            r = this.ns_1;
                        if (null != r) {
                            var i = r,
                                n = 1;
                            do {
                                for (var e = i.bt_1, s = i.ct_1; e < s; ) (n = (u(31, n) + i.at_1[e]) | 0), (e = (e + 1) | 0);
                                i = j(i.ft_1);
                            } while (i !== this.ns_1);
                            t = n;
                        } else t = 0;
                        return t;
                    }),
                    (v(Bt).toString = function () {
                        return this.ew().toString();
                    }),
                    (v(Bt).ew = function () {
                        if (!(this.os_1.e1(new $(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.os_1.toString();
                            throw b(l(t));
                        }
                        return this.iv(this.os_1.k1());
                    }),
                    (v(Bt).iv = function (t) {
                        var r;
                        if (0 !== t) {
                            ct(this.os_1, new $(0, 0), g(t));
                            for (var i = 0, n = 0, e = this.ns_1; i < t; ) {
                                if (j(e).ct_1 === e.bt_1) throw N("s.limit == s.pos");
                                (i = (i + ((e.ct_1 - e.bt_1) | 0)) | 0), (n = (n + 1) | 0), (e = e.ft_1);
                            }
                            var s = Q(Array(n), null),
                                _ = new Int32Array(u(n, 2));
                            for (i = 0, n = 0, e = this.ns_1; i < t; ) {
                                s[n] = j(e).at_1;
                                var h = (i = (i + ((e.ct_1 - e.bt_1) | 0)) | 0);
                                (_[n] = Math.min(h, t)), (_[(n + s.length) | 0] = e.bt_1), (e.dt_1 = !0), (n = (n + 1) | 0), (e = e.ft_1);
                            }
                            r = new Mt(T(s) ? s : G(), _);
                        } else r = jt().bu_1;
                        return r;
                    }),
                    (v(Lt).ms = function (t, r) {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.ms(t, r), this.iw(), c;
                    }),
                    (v(Lt).rv = function (t) {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.rv(t), this.iw();
                    }),
                    (v(Lt).tv = function (t) {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.tv(t), this.iw();
                    }),
                    (v(Lt).uv = function (t, r, i) {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.uv(t, r, i), this.iw();
                    }),
                    (v(Lt).vv = function (t) {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.vv(t), this.iw();
                    }),
                    (v(Lt).iw = function () {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        var t = this.hw_1.dv();
                        return t.e1(new $(0, 0)) > 0 && this.fw_1.ms(this.hw_1, t), this;
                    }),
                    (v(Lt).t9 = function () {
                        if (this.gw_1) {
                            throw b(l("closed"));
                        }
                        return this.hw_1.os_1.e1(new $(0, 0)) > 0 && this.fw_1.ms(this.hw_1, this.hw_1.os_1), this.fw_1.t9(), c;
                    }),
                    (v(Lt).e5 = function () {
                        var t;
                        if (this.gw_1) t = c;
                        else {
                            var r = null;
                            try {
                                this.hw_1.os_1.e1(new $(0, 0)) > 0 && this.fw_1.ms(this.hw_1, this.hw_1.os_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                r = t;
                            }
                            try {
                                this.fw_1.e5();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == r && (r = t);
                            }
                            if (((this.gw_1 = !0), null != r)) throw r;
                        }
                        return t;
                    }),
                    (v(Lt).toString = function () {
                        return "buffer(" + l(this.fw_1) + ")";
                    }),
                    (v(Pt).yu = function () {
                        return this.lw_1;
                    }),
                    (v(Pt).xv = function (t, r) {
                        var i;
                        t: {
                            if (!(r.e1(new $(0, 0)) >= 0)) {
                                var n = "byteCount < 0: " + r.toString();
                                throw w(l(n));
                            }
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            if (this.lw_1.os_1.equals(new $(0, 0))) {
                                if (r.equals(new $(0, 0))) {
                                    i = new $(0, 0);
                                    break t;
                                }
                                if (this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    i = new $(-1, -1);
                                    break t;
                                }
                            }
                            var e = this.lw_1.os_1,
                                s = r.e1(e) <= 0 ? r : e;
                            i = this.lw_1.xv(t, s);
                        }
                        return i;
                    }),
                    (v(Pt).zu = function () {
                        if (this.kw_1) {
                            throw b(l("closed"));
                        }
                        return this.lw_1.zu() && this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1));
                    }),
                    (v(Pt).av = function (t) {
                        if (!this.bv(t)) throw Ft();
                    }),
                    (v(Pt).bv = function (t) {
                        var r;
                        t: {
                            if (!(t.e1(new $(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + t.toString();
                                throw w(l(i));
                            }
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            for (; this.lw_1.os_1.e1(t) < 0; )
                                if (this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    r = !1;
                                    break t;
                                }
                            r = !0;
                        }
                        return r;
                    }),
                    (v(Pt).nv = function (t) {
                        var r;
                        t: {
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            for (;;) {
                                var i = dt(this.lw_1, t, !0);
                                switch (i) {
                                    case -1:
                                        r = -1;
                                        break t;
                                    case -2:
                                        if (this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                            r = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var n = t.ys_1[i].s();
                                        this.lw_1.ps(g(n)), (r = i);
                                        break t;
                                }
                            }
                        }
                        return r;
                    }),
                    (v(Pt).kv = function () {
                        return this.lv(new $(-1, 2147483647));
                    }),
                    (v(Pt).lv = function (t) {
                        var r;
                        if (!(t.e1(new $(0, 0)) >= 0)) {
                            var i = "limit < 0: " + t.toString();
                            throw w(l(i));
                        }
                        var n = t.equals(new $(-1, 2147483647)) ? new $(-1, 2147483647) : t.g3(g(1)),
                            e = this.mv(10, new $(0, 0), n);
                        if (e.equals(new $(-1, -1))) {
                            var s, _;
                            if (n.e1(new $(-1, 2147483647)) < 0 && this.bv(n)) {
                                var h = n.h3(g(1));
                                _ = 13 === this.lw_1.tt(h);
                            } else _ = !1;
                            if (_) {
                                var a = n.g3(g(1));
                                s = this.bv(a);
                            } else s = !1;
                            if (!(!!s && 10 === this.lw_1.tt(n))) {
                                var f = new Bt(),
                                    u = new $(0, 0),
                                    v = this.lw_1.os_1,
                                    o = g(32),
                                    c = o.e1(v) <= 0 ? o : v;
                                this.lw_1.cv(f, u, c);
                                var b = this.lw_1.os_1;
                                throw new Rt("\\n not found: limit=" + (b.e1(t) <= 0 ? b : t).toString() + " content=" + f.fv().ju() + "…");
                            }
                            r = kt(this.lw_1, n);
                        } else r = kt(this.lw_1, e);
                        return r;
                    }),
                    (v(Pt).ps = function (t) {
                        var r = t;
                        if (this.kw_1) {
                            throw b(l("closed"));
                        }
                        for (; r.e1(new $(0, 0)) > 0; ) {
                            if (this.lw_1.os_1.equals(new $(0, 0)) && this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) throw Ft();
                            var i = r,
                                n = this.lw_1.os_1,
                                e = i.e1(n) <= 0 ? i : n;
                            this.lw_1.ps(e), (r = r.h3(e));
                        }
                        return c;
                    }),
                    (v(Pt).mv = function (t, r, i) {
                        var n;
                        t: {
                            var e = r;
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            if (!(new $(0, 0).e1(e) <= 0 && e.e1(i) <= 0)) {
                                var s = "fromIndex=" + e.toString() + " toIndex=" + i.toString();
                                throw w(l(s));
                            }
                            for (; e.e1(i) < 0; ) {
                                var _ = this.lw_1.mv(t, e, i);
                                if (!_.equals(new $(-1, -1))) {
                                    n = _;
                                    break t;
                                }
                                var h = this.lw_1.os_1;
                                if (h.e1(i) >= 0 || this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    n = new $(-1, -1);
                                    break t;
                                }
                                var a = e;
                                e = a.e1(h) >= 0 ? a : h;
                            }
                            n = new $(-1, -1);
                        }
                        return n;
                    }),
                    (v(Pt).aw = function (t) {
                        return this.bw(t, new $(0, 0));
                    }),
                    (v(Pt).bw = function (t, r) {
                        var i;
                        t: {
                            var n = r;
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            for (;;) {
                                var e = this.lw_1.bw(t, n);
                                if (!e.equals(new $(-1, -1))) {
                                    i = e;
                                    break t;
                                }
                                var s = this.lw_1.os_1;
                                if (this.jw_1.xv(this.lw_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    i = new $(-1, -1);
                                    break t;
                                }
                                var _ = n;
                                n = _.e1(s) >= 0 ? _ : s;
                            }
                        }
                        return i;
                    }),
                    (v(Pt).cw = function (t, r) {
                        return this.dw(t, r, 0, r.s());
                    }),
                    (v(Pt).dw = function (t, r, i, n) {
                        var e;
                        t: {
                            if (this.kw_1) {
                                throw b(l("closed"));
                            }
                            if (t.e1(new $(0, 0)) < 0 || i < 0 || n < 0 || ((r.s() - i) | 0) < n) e = !1;
                            else {
                                var s = 0;
                                if (s < n)
                                    do {
                                        var _ = s;
                                        s = (s + 1) | 0;
                                        var h = t.g3(g(_)),
                                            a = h.g3(g(1));
                                        if (!this.bv(a)) {
                                            e = !1;
                                            break t;
                                        }
                                        if (this.lw_1.tt(h) !== r.t((i + _) | 0)) {
                                            e = !1;
                                            break t;
                                        }
                                    } while (s < n);
                                e = !0;
                            }
                        }
                        return e;
                    }),
                    (v(Pt).e5 = function () {
                        var t;
                        return this.kw_1 ? (t = c) : ((this.kw_1 = !0), this.jw_1.e5(), this.lw_1.j2()), t;
                    }),
                    (v(Pt).toString = function () {
                        return "buffer(" + l(this.jw_1) + ")";
                    }),
                    (v(Vt).pt = function () {
                        return ft();
                    }),
                    (v(Vt).st = function (t) {}),
                    (i = new ht()),
                    new vt(),
                    (f = new Vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ut),
                    (t.$_$.b = function t(r) {
                        var i = Ut(r, z(v(Xt)));
                        return Z(i, t), i;
                    }),
                    (t.$_$.c = jt),
                    (t.$_$.d = i),
                    (t.$_$.e = bt),
                    (t.$_$.f = Bt),
                    (t.$_$.g = Rt),
                    (t.$_$.h = Xt),
                    (t.$_$.i = function () {
                        return new nt();
                    }),
                    (t.$_$.j = function (t) {
                        return new Pt(t);
                    }),
                    (t.$_$.k = function (t) {
                        return new Lt(t);
                    });
            })(t.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.a63f9c2a.js.map
