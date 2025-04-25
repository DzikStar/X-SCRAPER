(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-7b644756"],
    {
        222818: (t, r, s) => {
            !(function (t, r) {
                "use strict";
                var s,
                    i,
                    n,
                    e,
                    _,
                    h,
                    f,
                    v,
                    a = Math.imul,
                    u = r.$_$.ke,
                    o = r.$_$.hd,
                    l = r.$_$.oe,
                    w = r.$_$.h2,
                    g = r.$_$.l6,
                    c = r.$_$.me,
                    d = r.$_$.l2,
                    $ = r.$_$.oi,
                    k = r.$_$.g,
                    b = r.$_$.ib,
                    q = r.$_$.za,
                    m = r.$_$.t,
                    y = r.$_$.s7,
                    x = r.$_$.id,
                    p = r.$_$.n6,
                    j = r.$_$.l7,
                    S = r.$_$.je,
                    I = r.$_$.oj,
                    z = r.$_$.q7,
                    C = r.$_$.f2,
                    M = r.$_$.sc,
                    A = r.$_$.n3,
                    B = r.$_$.o3,
                    E = r.$_$.t3,
                    O = r.$_$.le,
                    F = r.$_$.j8,
                    R = r.$_$.rc,
                    U = r.$_$.fe,
                    X = r.$_$.mf,
                    L = r.$_$.qc,
                    P = r.$_$.e8,
                    V = r.$_$.lf,
                    D = r.$_$.b8,
                    G = r.$_$.vi,
                    H = r.$_$.pg,
                    J = r.$_$.ei,
                    K = r.$_$.ie,
                    N = r.$_$.t1,
                    Q = r.$_$.ad,
                    T = r.$_$.od,
                    W = r.$_$.ni,
                    Y = r.$_$.p2,
                    Z = r.$_$.pc,
                    tt = r.$_$.ki,
                    rt = r.$_$.a2,
                    st = r.$_$.nd;
                function it() {}
                function nt(t, r, s, i, n, e, _, h) {
                    if (!(e < _)) {
                        throw w(l("Failed requirement."));
                    }
                    var f = e;
                    if (f < _)
                        do {
                            var v = f;
                            if (((f = (f + 1) | 0), !(n.t(v).s() >= i))) {
                                throw w(l("Failed requirement."));
                            }
                        } while (f < _);
                    var u = e,
                        o = n.t(u),
                        g = n.t((_ - 1) | 0),
                        $ = -1;
                    if ((i === o.s() && (($ = h.t(u)), (u = (u + 1) | 0), (o = n.t(u))), o.t(i) !== g.t(i))) {
                        var k = 1,
                            b = (u + 1) | 0;
                        if (b < _)
                            do {
                                var q = b;
                                (b = (b + 1) | 0), n.t((q - 1) | 0).t(i) !== n.t(q).t(i) && (k = (k + 1) | 0);
                            } while (b < _);
                        var m = r.f3(_t(s, t)).f3(c(2)),
                            y = a(k, 2),
                            x = m.f3(c(y));
                        s.yr(k), s.yr($);
                        var p = u;
                        if (p < _)
                            do {
                                var j = p;
                                p = (p + 1) | 0;
                                var S = n.t(j).t(i);
                                if (j === u || S !== n.t((j - 1) | 0).t(i)) {
                                    var I = 255 & S;
                                    s.yr(I);
                                }
                            } while (p < _);
                        for (var z = new Bt(), C = u; C < _; ) {
                            var M = n.t(C).t(i),
                                A = _,
                                B = (C + 1) | 0;
                            if (B < _)
                                t: do {
                                    var E = B;
                                    if (((B = (B + 1) | 0), M !== n.t(E).t(i))) {
                                        A = E;
                                        break t;
                                    }
                                } while (B < _);
                            ((C + 1) | 0) === A && ((i + 1) | 0) === n.t(C).s() ? s.yr(h.t(C)) : (s.yr(a(-1, x.f3(_t(z, t)).j1())), nt(t, x, z, (i + 1) | 0, n, C, A, h)), (C = A);
                        }
                        s.zr(z);
                    } else {
                        var O = 0,
                            F = i,
                            R = o.s(),
                            U = g.s(),
                            X = Math.min(R, U);
                        if (F < X)
                            t: do {
                                var L = F;
                                if (((F = (F + 1) | 0), o.t(L) !== g.t(L))) break t;
                                O = (O + 1) | 0;
                            } while (F < X);
                        var P = O,
                            V = r.f3(_t(s, t)).f3(c(2)).f3(c(P)).f3(c(1));
                        s.yr(0 | -O), s.yr($);
                        var D = i,
                            G = (i + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                s.yr(J);
                            } while (D < G);
                        if (((u + 1) | 0) === _) {
                            if (((i + O) | 0) !== n.t(u).s()) {
                                throw d(l("Check failed."));
                            }
                            s.yr(h.t(u));
                        } else {
                            var K = new Bt();
                            s.yr(a(-1, V.f3(_t(K, t)).j1())), nt(t, V, K, (i + O) | 0, n, u, _, h), s.zr(K);
                        }
                    }
                }
                function et(t, r, s, i, n, e, _, h, f) {
                    return (r = r === k ? new $(0, 0) : r), (i = i === k ? 0 : i), (e = e === k ? 0 : e), (_ = _ === k ? n.s() : _), nt(t, r, s, i, n, e, _, h);
                }
                function _t(t, r) {
                    return t.tr_1.i3(c(4));
                }
                function ht() {}
                function ft(t, r) {
                    p.call(this), (this.ds_1 = t), (this.es_1 = r);
                }
                function vt() {
                    return (t = S(u(ot))), ot.call(t), (t.fs_1 = new Int8Array(8192)), (t.js_1 = !0), (t.is_1 = !1), t;
                    var t;
                }
                function at(t, r, s, i, n) {
                    return (function (t, r, s, i, n, e) {
                        return ot.call(e), (e.fs_1 = t), (e.gs_1 = r), (e.hs_1 = s), (e.is_1 = i), (e.js_1 = n), e;
                    })(t, r, s, i, n, S(u(ot)));
                }
                function ut() {
                    (this.ms_1 = 8192), (this.ns_1 = 1024);
                }
                function ot() {
                    (this.gs_1 = 0), (this.hs_1 = 0), (this.is_1 = !1), (this.js_1 = !1), (this.ks_1 = null), (this.ls_1 = null);
                }
                function lt() {
                    return ct(), i;
                }
                function wt(t, r, s, i, n) {
                    ct();
                    var e = 0;
                    if (e < n)
                        do {
                            var _ = e;
                            if (((e = (e + 1) | 0), t[(_ + r) | 0] !== s[(_ + i) | 0])) return !1;
                        } while (e < n);
                    return !0;
                }
                function gt(t, r, s) {
                    if ((ct(), r.t3(s).d1(new $(0, 0)) < 0 || r.d1(t) > 0 || t.g3(r).d1(s) < 0)) throw new Ot("size=" + t.toString() + " offset=" + r.toString() + " byteCount=" + s.toString());
                }
                function ct() {
                    n || ((n = !0), new At(), (i = -1234567890));
                }
                function dt(t) {
                    var r = new Int8Array(a(4, t.length)),
                        s = 0,
                        i = t.length;
                    if (s < i)
                        do {
                            var n = s;
                            s = (s + 1) | 0;
                            var e = M(t, n);
                            if (B(e, A(128)) >= 0) {
                                for (var _ = n, h = t.length, f = n; f < h; ) {
                                    var v = M(t, f);
                                    if (B(v, A(128)) < 0) {
                                        var u = E(v),
                                            o = _;
                                        for (_ = (o + 1) | 0, r[o] = O(u), f = (f + 1) | 0; f < h && B(M(t, f), A(128)) < 0; ) {
                                            var l = f;
                                            f = (l + 1) | 0;
                                            var w = M(t, l),
                                                g = E(w),
                                                c = _;
                                            (_ = (c + 1) | 0), (r[c] = O(g));
                                        }
                                    } else if (B(v, A(2048)) < 0) {
                                        var d = E(v),
                                            $ = _;
                                        (_ = ($ + 1) | 0), (r[$] = O((d >> 6) | 192));
                                        var k = E(v),
                                            b = _;
                                        (_ = (b + 1) | 0), (r[b] = O((63 & k) | 128)), (f = (f + 1) | 0);
                                    } else if (A(55296) <= v && v <= A(57343)) {
                                        var q;
                                        if (B(v, A(56319)) > 0 || h <= ((f + 1) | 0)) q = !0;
                                        else {
                                            var m = M(t, (f + 1) | 0);
                                            q = !(A(56320) <= m && m <= A(57343));
                                        }
                                        if (q) {
                                            var y = _;
                                            (_ = (y + 1) | 0), (r[y] = 63), (f = (f + 1) | 0);
                                        } else {
                                            var x = E(v) << 10,
                                                p = M(t, (f + 1) | 0),
                                                j = (((x + E(p)) | 0) - 56613888) | 0,
                                                S = _;
                                            (_ = (S + 1) | 0), (r[S] = O((j >> 18) | 240));
                                            var I = _;
                                            (_ = (I + 1) | 0), (r[I] = O(((j >> 12) & 63) | 128));
                                            var z = _;
                                            (_ = (z + 1) | 0), (r[z] = O(((j >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (r[C] = O((63 & j) | 128)), (f = (f + 2) | 0);
                                        }
                                    } else {
                                        var R = E(v),
                                            U = _;
                                        (_ = (U + 1) | 0), (r[U] = O((R >> 12) | 224));
                                        var X = E(v),
                                            L = _;
                                        (_ = (L + 1) | 0), (r[L] = O(((X >> 6) & 63) | 128));
                                        var P = E(v),
                                            V = _;
                                        (_ = (V + 1) | 0), (r[V] = O((63 & P) | 128)), (f = (f + 1) | 0);
                                    }
                                }
                                return F(r, _);
                            }
                            var D = E(e);
                            r[n] = O(D);
                        } while (s < i);
                    return F(r, t.length);
                }
                function $t(t, r, s) {
                    if (((r = r === k ? 0 : r), (s = s === k ? t.length : s), r < 0 || s > t.length || r > s)) throw new Ot("size=" + t.length + " beginIndex=" + r + " endIndex=" + s);
                    for (var i = R((s - r) | 0), n = 0, e = r; e < s; ) {
                        var _ = t[e];
                        if (_ >= 0) {
                            var h = n;
                            for (n = (h + 1) | 0, i[h] = U(_), e = (e + 1) | 0; e < s && t[e] >= 0; ) {
                                var f = e;
                                e = (f + 1) | 0;
                                var v = n;
                                (n = (v + 1) | 0), (i[v] = U(t[f]));
                            }
                        } else if (_ >> 5 == -2) {
                            var a,
                                u = e,
                                o = e;
                            if (s <= ((o + 1) | 0)) {
                                var l = n;
                                (n = (l + 1) | 0), (i[l] = U(65533)), (a = 1);
                            } else {
                                var w = t[o],
                                    g = t[(o + 1) | 0];
                                if (128 == (192 & g)) {
                                    var c = 3968 ^ g ^ (w << 6);
                                    if (c < 128) {
                                        var d = n;
                                        (n = (d + 1) | 0), (i[d] = U(65533));
                                    } else {
                                        var $ = n;
                                        (n = ($ + 1) | 0), (i[$] = U(c));
                                    }
                                    a = 2;
                                } else {
                                    var b = n;
                                    (n = (b + 1) | 0), (i[b] = U(65533)), (a = 1);
                                }
                            }
                            e = (u + a) | 0;
                        } else if (_ >> 4 == -2) {
                            var q,
                                m = e;
                            t: {
                                var y = e;
                                if (s <= ((y + 2) | 0)) {
                                    var x = n;
                                    if (((n = (x + 1) | 0), (i[x] = U(65533)), s <= ((y + 1) | 0) || !(128 == (192 & t[(y + 1) | 0])))) {
                                        q = 1;
                                        break t;
                                    }
                                    q = 2;
                                } else {
                                    var p = t[y],
                                        j = t[(y + 1) | 0];
                                    if (128 == (192 & j)) {
                                        var S = t[(y + 2) | 0];
                                        if (128 == (192 & S)) {
                                            var I = -123008 ^ S ^ (j << 6) ^ (p << 12);
                                            if (I < 2048) {
                                                var z = n;
                                                (n = (z + 1) | 0), (i[z] = U(65533));
                                            } else if (55296 <= I && I <= 57343) {
                                                var C = n;
                                                (n = (C + 1) | 0), (i[C] = U(65533));
                                            } else {
                                                var M = n;
                                                (n = (M + 1) | 0), (i[M] = U(I));
                                            }
                                            q = 3;
                                        } else {
                                            var B = n;
                                            (n = (B + 1) | 0), (i[B] = U(65533)), (q = 2);
                                        }
                                    } else {
                                        var E = n;
                                        (n = (E + 1) | 0), (i[E] = U(65533)), (q = 1);
                                    }
                                }
                            }
                            e = (m + q) | 0;
                        } else if (_ >> 3 == -2) {
                            var O,
                                F = e;
                            t: {
                                var L = e;
                                if (s <= ((L + 3) | 0)) {
                                    var P = n;
                                    if (((n = (P + 1) | 0), (i[P] = A(65533)), s <= ((L + 1) | 0) || !(128 == (192 & t[(L + 1) | 0])))) {
                                        O = 1;
                                        break t;
                                    }
                                    if (s <= ((L + 2) | 0) || !(128 == (192 & t[(L + 2) | 0]))) {
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
                                                    var K = n;
                                                    (n = (K + 1) | 0), (i[K] = A(65533));
                                                } else if (55296 <= J && J <= 57343) {
                                                    var N = n;
                                                    (n = (N + 1) | 0), (i[N] = A(65533));
                                                } else if (J < 65536) {
                                                    var Q = n;
                                                    (n = (Q + 1) | 0), (i[Q] = A(65533));
                                                } else if (65533 !== J) {
                                                    var T = n;
                                                    (n = (T + 1) | 0), (i[T] = U((55232 + ((J >>> 10) | 0)) | 0));
                                                    var W = n;
                                                    (n = (W + 1) | 0), (i[W] = U((56320 + (1023 & J)) | 0));
                                                } else {
                                                    var Y = n;
                                                    (n = (Y + 1) | 0), (i[Y] = A(65533));
                                                }
                                                O = 4;
                                            } else {
                                                var Z = n;
                                                (n = (Z + 1) | 0), (i[Z] = A(65533)), (O = 3);
                                            }
                                        } else {
                                            var tt = n;
                                            (n = (tt + 1) | 0), (i[tt] = A(65533)), (O = 2);
                                        }
                                    } else {
                                        var rt = n;
                                        (n = (rt + 1) | 0), (i[rt] = A(65533)), (O = 1);
                                    }
                                }
                            }
                            e = (F + O) | 0;
                        } else {
                            var st = n;
                            (n = (st + 1) | 0), (i[st] = A(65533)), (e = (e + 1) | 0);
                        }
                    }
                    return X(i, 0, n);
                }
                function kt(t, r) {
                    var s, i;
                    if ((mt(), r.d1(new $(0, 0)) > 0)) {
                        var n = r.g3(c(1));
                        i = 13 === t.ys(n);
                    } else i = !1;
                    if (i) {
                        var e = t.zs(r.g3(new $(1, 0)));
                        t.ur(new $(2, 0)), (s = e);
                    } else {
                        var _ = t.zs(r);
                        t.ur(new $(1, 0)), (s = _);
                    }
                    return s;
                }
                function bt(t, r, s) {
                    (s = s !== k && s), mt();
                    var i = t.sr_1;
                    if (null == i) return s ? -2 : -1;
                    var n = i,
                        e = n,
                        _ = n.fs_1,
                        h = n.gs_1,
                        f = n.hs_1,
                        v = r.es_1,
                        u = 0,
                        o = -1;
                    t: for (;;) {
                        var l = u;
                        u = (l + 1) | 0;
                        var w = v[l],
                            g = u;
                        u = (g + 1) | 0;
                        var c,
                            d = v[g];
                        if ((-1 !== d && (o = d), null == e)) break t;
                        if (w < 0) {
                            var $ = (u + a(-1, w)) | 0;
                            r: for (;;) {
                                var b = h;
                                h = (b + 1) | 0;
                                var q = u;
                                if (((u = (q + 1) | 0), (255 & _[b]) !== v[q])) return o;
                                var m = u === $;
                                if (h === f && ((h = (e = I(I(e).ks_1)).gs_1), (_ = e.fs_1), (f = e.hs_1), e === n)) {
                                    if (!m) break t;
                                    e = null;
                                }
                                if (m) {
                                    c = v[u];
                                    break r;
                                }
                            }
                        } else {
                            var y = w,
                                x = h;
                            h = (x + 1) | 0;
                            var p = 255 & _[x],
                                j = (u + y) | 0;
                            r: for (;;) {
                                if (u === j) return o;
                                if (p === v[u]) {
                                    c = v[(u + y) | 0];
                                    break r;
                                }
                                u = (u + 1) | 0;
                            }
                            h === f && ((h = (e = I(e.ks_1)).gs_1), (_ = e.fs_1), (f = e.hs_1), e === n && (e = null));
                        }
                        if (c >= 0) return c;
                        u = 0 | -c;
                    }
                    return s ? -2 : o;
                }
                function qt(t, r, s, i, n) {
                    mt();
                    for (var e = t, _ = r, h = e.hs_1, f = e.fs_1, v = i; v < n; ) {
                        if ((_ === h && ((f = (e = I(e.ks_1)).fs_1), (_ = e.gs_1), (h = e.hs_1)), f[_] !== s[v])) return !1;
                        (_ = (_ + 1) | 0), (v = (v + 1) | 0);
                    }
                    return !0;
                }
                function mt() {
                    e || ((e = !0), Et("0123456789abcdef"));
                }
                function yt() {
                    return pt(), _;
                }
                function xt(t, r) {
                    return (
                        pt(),
                        (function (t, r) {
                            pt();
                            for (var s = 0, i = 0, n = t.length, e = 0; e < n; ) {
                                var _ = t[e];
                                if (_ >= 0) {
                                    var h,
                                        f = i;
                                    if (((i = (f + 1) | 0), f === r)) return s;
                                    var v = A(10);
                                    if (_ !== E(v)) {
                                        var a = A(13);
                                        h = !(_ === E(a));
                                    } else h = !1;
                                    if ((h && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (s = (s + (_ < 65536 ? 1 : 2)) | 0, e = (e + 1) | 0; e < n && t[e] >= 0; ) {
                                        var u = e;
                                        e = (u + 1) | 0;
                                        var o,
                                            l = t[u],
                                            w = i;
                                        if (((i = (w + 1) | 0), w === r)) return s;
                                        var g = A(10);
                                        if (l !== E(g)) {
                                            var c = A(13);
                                            o = !(l === E(c));
                                        } else o = !1;
                                        if ((o && ((0 <= l && l <= 31) || (127 <= l && l <= 159))) || 65533 === l) return -1;
                                        s = (s + (l < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var d = e,
                                        $ = e;
                                    if (n <= (($ + 1) | 0)) {
                                        var k = i;
                                        if (((i = (k + 1) | 0), k === r)) return s;
                                        var b = A(10);
                                        if (65533 !== E(b)) {
                                            var q = A(13);
                                            E(q);
                                        }
                                        return -1;
                                    }
                                    var m = t[$],
                                        y = t[($ + 1) | 0];
                                    if (128 != (192 & y)) {
                                        var x = i;
                                        if (((i = (x + 1) | 0), x === r)) return s;
                                        var p = A(10);
                                        if (65533 !== E(p)) {
                                            var j = A(13);
                                            E(j);
                                        }
                                        return -1;
                                    }
                                    var S = 3968 ^ y ^ (m << 6);
                                    if (S < 128) {
                                        var I = i;
                                        if (((i = (I + 1) | 0), I === r)) return s;
                                        var z = A(10);
                                        if (65533 !== E(z)) {
                                            var C = A(13);
                                            E(C);
                                        }
                                        return -1;
                                    }
                                    var M,
                                        B = i;
                                    if (((i = (B + 1) | 0), B === r)) return s;
                                    var O = A(10);
                                    if (S !== E(O)) {
                                        var F = A(13);
                                        M = !(S === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= S && S <= 31) || (127 <= S && S <= 159))) || 65533 === S) return -1;
                                    (s = (s + (S < 65536 ? 1 : 2)) | 0), (e = (d + 2) | 0);
                                } else if (_ >> 4 == -2) {
                                    var R,
                                        U = e;
                                    t: {
                                        var X = e;
                                        if (n <= ((X + 2) | 0)) {
                                            var L = i;
                                            if (((i = (L + 1) | 0), L === r)) return s;
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
                                            if (((i = (H + 1) | 0), H === r)) return s;
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
                                            if (((i = (Q + 1) | 0), Q === r)) return s;
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
                                            if (((i = (Z + 1) | 0), Z === r)) return s;
                                            var tt = A(10);
                                            if (65533 !== E(tt)) {
                                                var rt = A(13);
                                                E(rt);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= Y && Y <= 57343) {
                                            var st = i;
                                            if (((i = (st + 1) | 0), st === r)) return s;
                                            var it = A(10);
                                            if (65533 !== E(it)) {
                                                var nt = A(13);
                                                E(nt);
                                            }
                                            return -1;
                                        }
                                        var et,
                                            _t = i;
                                        if (((i = (_t + 1) | 0), _t === r)) return s;
                                        var ht = A(10);
                                        if (Y !== E(ht)) {
                                            var ft = A(13);
                                            et = !(Y === E(ft));
                                        } else et = !1;
                                        if ((et && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (s = (s + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    e = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var vt = i;
                                        if (((i = (vt + 1) | 0), vt === r)) return s;
                                        var at = A(10);
                                        if (65533 !== E(at)) {
                                            var ut = A(13);
                                            E(ut);
                                        }
                                        return -1;
                                    }
                                    var ot,
                                        lt = e;
                                    t: {
                                        var wt = e;
                                        if (n <= ((wt + 3) | 0)) {
                                            var gt = i;
                                            if (((i = (gt + 1) | 0), gt === r)) return s;
                                            var ct = A(10);
                                            if (65533 !== E(ct)) {
                                                var dt = A(13);
                                                E(dt);
                                            }
                                            return -1;
                                        }
                                        var $t = t[wt],
                                            kt = t[(wt + 1) | 0];
                                        if (128 != (192 & kt)) {
                                            var bt = i;
                                            if (((i = (bt + 1) | 0), bt === r)) return s;
                                            var qt = A(10);
                                            if (65533 !== E(qt)) {
                                                var mt = A(13);
                                                E(mt);
                                            }
                                            return -1;
                                        }
                                        var yt = t[(wt + 2) | 0];
                                        if (128 != (192 & yt)) {
                                            var xt = i;
                                            if (((i = (xt + 1) | 0), xt === r)) return s;
                                            var jt = A(10);
                                            if (65533 !== E(jt)) {
                                                var St = A(13);
                                                E(St);
                                            }
                                            return -1;
                                        }
                                        var It = t[(wt + 3) | 0];
                                        if (128 != (192 & It)) {
                                            var zt = i;
                                            if (((i = (zt + 1) | 0), zt === r)) return s;
                                            var Ct = A(10);
                                            if (65533 !== E(Ct)) {
                                                var Mt = A(13);
                                                E(Mt);
                                            }
                                            return -1;
                                        }
                                        var At = 3678080 ^ It ^ (yt << 6) ^ (kt << 12) ^ ($t << 18);
                                        if (At > 1114111) {
                                            var Bt = i;
                                            if (((i = (Bt + 1) | 0), Bt === r)) return s;
                                            var Et = A(10);
                                            if (65533 !== E(Et)) {
                                                var Ot = A(13);
                                                E(Ot);
                                            }
                                            return -1;
                                        }
                                        if (55296 <= At && At <= 57343) {
                                            var Ft = i;
                                            if (((i = (Ft + 1) | 0), Ft === r)) return s;
                                            var Rt = A(10);
                                            if (65533 !== E(Rt)) {
                                                var Ut = A(13);
                                                E(Ut);
                                            }
                                            return -1;
                                        }
                                        if (At < 65536) {
                                            var Xt = i;
                                            if (((i = (Xt + 1) | 0), Xt === r)) return s;
                                            var Lt = A(10);
                                            if (65533 !== E(Lt)) {
                                                var Pt = A(13);
                                                E(Pt);
                                            }
                                            return -1;
                                        }
                                        var Vt,
                                            Dt = i;
                                        if (((i = (Dt + 1) | 0), Dt === r)) return s;
                                        var Gt = A(10);
                                        if (At !== E(Gt)) {
                                            var Ht = A(13);
                                            Vt = !(At === E(Ht));
                                        } else Vt = !1;
                                        if ((Vt && ((0 <= At && At <= 31) || (127 <= At && At <= 159))) || 65533 === At) return -1;
                                        (s = (s + (At < 65536 ? 1 : 2)) | 0), (ot = 4);
                                    }
                                    e = (lt + ot) | 0;
                                }
                            }
                            return s;
                        })(t, r)
                    );
                }
                function pt() {
                    h || ((h = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function jt(t, r) {
                    var s = (function (t, r, s, i) {
                        var n = s,
                            e = (i - 1) | 0;
                        for (; n <= e; ) {
                            var _ = (((n + e) | 0) >>> 1) | 0,
                                h = t[_];
                            if (h < r) n = (_ + 1) | 0;
                            else {
                                if (!(h > r)) return _;
                                e = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -n) - 1) | 0;
                    })(t.ft_1, (r + 1) | 0, 0, t.et_1.length);
                    return s >= 0 ? s : ~s;
                }
                function St() {
                    f = this;
                    var t = new Int8Array([]);
                    this.gt_1 = new zt(t);
                }
                function It() {
                    return null == f && new St(), f;
                }
                function zt(t) {
                    It(), (this.vr_1 = t), (this.wr_1 = 0), (this.xr_1 = null);
                }
                function Ct(t) {
                    return new zt(t.rt());
                }
                function Mt(t, r) {
                    zt.call(this, It().gt_1.vr_1), (this.et_1 = t), (this.ft_1 = r);
                }
                function At() {
                    (this.wt_1 = null), (this.xt_1 = !1), (this.yt_1 = null), (this.zt_1 = new $(-1, -1)), (this.au_1 = null), (this.bu_1 = -1), (this.cu_1 = -1);
                }
                function Bt() {
                    (this.sr_1 = null), (this.tr_1 = new $(0, 0));
                }
                function Et(t) {
                    return dt(t);
                }
                function Ot(t) {
                    Y(t, this), Z(this, Ot);
                }
                function Ft() {
                    var t,
                        r = ((t = S(u(Rt))), Rt.call(t, null), t);
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
                    (this.kv_1 = t), (this.lv_1 = !1), (this.mv_1 = new Bt());
                }
                function Pt(t) {
                    (this.ov_1 = t), (this.pv_1 = !1), (this.qv_1 = new Bt());
                }
                function Vt() {
                    (this.ss_1 = 0), (this.ts_1 = 0);
                }
                o(it, "BlackholeSink", it),
                    x(ht),
                    o(ft, "Options", k, p, [p, j]),
                    x(ut),
                    o(ot, "Segment", vt),
                    x(St),
                    o(zt, "ByteString", k, k, [J]),
                    o(Mt, "SegmentedByteString", k, zt),
                    o(At, "UnsafeCursor", At),
                    o(Bt, "Buffer", Bt),
                    o(Ot, "ArrayIndexOutOfBoundsException", k, W),
                    o(
                        Xt,
                        "IOException",
                        function t() {
                            var r = ((s = S(u(Xt))), Xt.call(s, null, null), s);
                            var s;
                            return Z(r, t), r;
                        },
                        tt,
                    ),
                    o(Rt, "EOFException", Ft, Xt),
                    o(Lt, "RealBufferedSink"),
                    o(Pt, "RealBufferedSource"),
                    st(Vt, "SegmentPool"),
                    (u(it).rr = function (t, r) {
                        return t.ur(r);
                    }),
                    (u(it).n9 = function () {}),
                    (u(it).x4 = function () {}),
                    (u(ht).as = function (t) {
                        if (0 === t.length) {
                            return new ft([], new Int32Array([0, -1]));
                        }
                        var r = b(t);
                        q(r);
                        var s = r.s(),
                            i = m(s),
                            n = 0;
                        if (n < s)
                            do {
                                (n = (n + 1) | 0), i.e(-1);
                            } while (n < s);
                        for (var e = i, _ = 0, h = 0, f = t.length; h < f; ) {
                            var v = t[h];
                            h = (h + 1) | 0;
                            var a = _;
                            _ = (a + 1) | 0;
                            var u = y(r, v);
                            e.i2(u, a);
                        }
                        if (!(r.t(0).s() > 0)) {
                            throw w(l("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < r.s(); ) {
                            var g = r.t(o),
                                c = (o + 1) | 0;
                            t: for (; c < r.s(); ) {
                                var d = r.t(c);
                                if (!d.bs(g)) break t;
                                if (d.s() === g.s()) {
                                    var $ = "duplicate option: " + d.toString();
                                    throw w(l($));
                                }
                                e.t(c) > e.t(o) ? (r.k2(c), e.k2(c)) : (c = (c + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var x = new Bt();
                        et(this, k, x, k, r, k, k, e);
                        for (var p = 0, j = _t(x).j1(), S = new Int32Array(j); p < j; ) (S[p] = x.cs()), (p = (p + 1) | 0);
                        var I = S;
                        return new ft(t.slice(), I);
                    }),
                    (u(ft).s = function () {
                        return this.ds_1.length;
                    }),
                    (u(ft).t = function (t) {
                        return this.ds_1[t];
                    }),
                    (u(ot).os = function () {
                        return (this.is_1 = !0), at(this.fs_1, this.gs_1, this.hs_1, !0, !1);
                    }),
                    (u(ot).ps = function () {
                        var t = this.ks_1 !== this ? this.ks_1 : null;
                        return (I(this.ls_1).ks_1 = this.ks_1), (I(this.ks_1).ls_1 = this.ls_1), (this.ks_1 = null), (this.ls_1 = null), t;
                    }),
                    (u(ot).qs = function (t) {
                        return (t.ls_1 = this), (t.ks_1 = this.ks_1), (I(this.ks_1).ls_1 = t), (this.ks_1 = t), t;
                    }),
                    (u(ot).rs = function (t) {
                        if (!(t > 0 && t <= ((this.hs_1 - this.gs_1) | 0))) {
                            throw w(l("byteCount out of range"));
                        }
                        var r;
                        if (t >= 1024) r = this.os();
                        else {
                            r = v.us();
                            var s = this.fs_1,
                                i = r.fs_1,
                                n = this.gs_1,
                                e = (this.gs_1 + t) | 0;
                            z(s, i, 0, n, e);
                        }
                        return (r.hs_1 = (r.gs_1 + t) | 0), (this.gs_1 = (this.gs_1 + t) | 0), I(this.ls_1).qs(r), r;
                    }),
                    (u(ot).vs = function () {
                        if (this.ls_1 === this) {
                            throw d(l("cannot compact"));
                        }
                        if (!I(this.ls_1).js_1) return g;
                        var t = (this.hs_1 - this.gs_1) | 0;
                        if (t > ((((8192 - I(this.ls_1).hs_1) | 0) + (I(this.ls_1).is_1 ? 0 : I(this.ls_1).gs_1)) | 0)) return g;
                        this.ws(I(this.ls_1), t), this.ps(), v.xs(this);
                    }),
                    (u(ot).ws = function (t, r) {
                        if (!t.js_1) {
                            throw d(l("only owner can write"));
                        }
                        if (((t.hs_1 + r) | 0) > 8192) {
                            if (t.is_1) throw C();
                            if (((((t.hs_1 + r) | 0) - t.gs_1) | 0) > 8192) throw C();
                            var s = t.fs_1,
                                i = t.fs_1,
                                n = t.gs_1,
                                e = t.hs_1;
                            z(s, i, 0, n, e), (t.hs_1 = (t.hs_1 - t.gs_1) | 0), (t.gs_1 = 0);
                        }
                        var _ = this.fs_1,
                            h = t.fs_1,
                            f = t.hs_1,
                            v = this.gs_1,
                            a = (this.gs_1 + r) | 0;
                        z(_, h, f, v, a), (t.hs_1 = (t.hs_1 + r) | 0), (this.gs_1 = (this.gs_1 + r) | 0);
                    }),
                    (u(St).ht = function (t, r, s) {
                        var i = (function (t, r) {
                            return ct(), r === lt() ? t.length : r;
                        })(t, s);
                        return gt(c(t.length), c(r), c(i)), new zt(P(t, r, (r + i) | 0));
                    }),
                    (u(St).it = function (t, r, s, i) {
                        return (r = r === k ? 0 : r), (s = s === k ? lt() : s), i === k ? this.ht(t, r, s) : i.ht.call(this, t, r, s);
                    }),
                    (u(St).jt = function (t) {
                        var r = new zt(Et(t));
                        return r.kt(t), r;
                    }),
                    (u(zt).lt = function (t) {}),
                    (u(zt).kt = function (t) {}),
                    (u(zt).mt = function () {
                        var t = this.xr_1;
                        return null == t && ((t = $t(this.nt())), this.kt(t)), t;
                    }),
                    (u(zt).ot = function () {
                        for (var t = R(a(this.vr_1.length, 2)), r = 0, s = this.vr_1, i = 0, n = s.length; i < n; ) {
                            var e = s[i];
                            i = (i + 1) | 0;
                            var _ = r;
                            r = (_ + 1) | 0;
                            var h = yt();
                            t[_] = h[(e >> 4) & 15];
                            var f = r;
                            r = (f + 1) | 0;
                            var v = yt();
                            t[f] = v[15 & e];
                        }
                        return V(t);
                    }),
                    (u(zt).pt = function (t) {
                        if (t >= this.s() || t < 0) throw new Ot("size=" + this.s() + " pos=" + t);
                        return this.vr_1[t];
                    }),
                    (u(zt).t = function (t) {
                        return this.pt(t);
                    }),
                    (u(zt).s = function () {
                        return this.qt();
                    }),
                    (u(zt).qt = function () {
                        return this.vr_1.length;
                    }),
                    (u(zt).rt = function () {
                        return this.vr_1.slice();
                    }),
                    (u(zt).nt = function () {
                        return this.vr_1;
                    }),
                    (u(zt).st = function (t, r, s) {
                        return (function (t, r, s, i) {
                            pt(), r.at(t.vr_1, s, i);
                        })(this, t, r, s);
                    }),
                    (u(zt).tt = function (t, r, s, i) {
                        return r.ut(s, this.vr_1, t, i);
                    }),
                    (u(zt).ut = function (t, r, s, i) {
                        return t >= 0 && t <= ((this.vr_1.length - i) | 0) && s >= 0 && s <= ((r.length - i) | 0) && wt(this.vr_1, t, r, s, i);
                    }),
                    (u(zt).bs = function (t) {
                        return this.tt(0, t, 0, t.s());
                    }),
                    (u(zt).equals = function (t) {
                        return t === this || (t instanceof zt && t.s() === this.vr_1.length && t.ut(0, this.vr_1, 0, this.vr_1.length));
                    }),
                    (u(zt).hashCode = function () {
                        var t,
                            r = this.wr_1;
                        if (0 === r) {
                            var s = D(this.vr_1);
                            this.lt(s), (t = s);
                        } else t = r;
                        return t;
                    }),
                    (u(zt).vt = function (t) {
                        var r;
                        t: {
                            for (var s = this.s(), i = t.s(), n = 0, e = Math.min(s, i); n < e; ) {
                                var _ = 255 & this.t(n),
                                    h = 255 & t.t(n);
                                if (_ !== h) {
                                    r = _ < h ? -1 : 1;
                                    break t;
                                }
                                n = (n + 1) | 0;
                            }
                            s !== i ? (r = s < i ? -1 : 1) : (r = 0);
                        }
                        return r;
                    }),
                    (u(zt).d = function (t) {
                        return this.vt(t instanceof zt ? t : G());
                    }),
                    (u(zt).toString = function () {
                        var t, r, s;
                        if (0 !== this.vr_1.length) {
                            var i = xt(this.vr_1, 64);
                            if (-1 !== i) {
                                var n = this.mt(),
                                    e = n.substring(0, i),
                                    _ = H(H(H(e, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = i < n.length ? "[size=" + this.vr_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var h;
                                if (this.vr_1.length <= 64) h = "[hex=" + this.ot() + "]";
                                else {
                                    var f,
                                        v = this.vr_1.length,
                                        a = ((r = this), (s = 64), ct(), s === lt() ? r.s() : s);
                                    if (!(a <= this.vr_1.length)) {
                                        var u = "endIndex > length(" + this.vr_1.length + ")";
                                        throw w(l(u));
                                    }
                                    if (!(((a - 0) | 0) >= 0)) {
                                        throw w(l("endIndex < beginIndex"));
                                    }
                                    a !== this.vr_1.length ? (f = new zt(P(this.vr_1, 0, a))) : (f = this), (h = "[size=" + v + " hex=" + f.ot() + "…]");
                                }
                                t = h;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (u(Mt).ot = function () {
                        return Ct(this).ot();
                    }),
                    (u(Mt).pt = function (t) {
                        gt(c(this.ft_1[(this.et_1.length - 1) | 0]), c(t), new $(1, 0));
                        var r = jt(this, t),
                            s = 0 === r ? 0 : this.ft_1[(r - 1) | 0],
                            i = this.ft_1[(r + this.et_1.length) | 0];
                        return this.et_1[r][(((t - s) | 0) + i) | 0];
                    }),
                    (u(Mt).qt = function () {
                        return this.ft_1[(this.et_1.length - 1) | 0];
                    }),
                    (u(Mt).rt = function () {
                        for (var t = new Int8Array(this.s()), r = 0, s = this.et_1.length, i = 0, n = 0; i < s; ) {
                            var e = this.ft_1[(s + i) | 0],
                                _ = this.ft_1[i],
                                h = (_ - n) | 0,
                                f = this.et_1[i];
                            z(f, t, r, e, (e + h) | 0), (r = (r + h) | 0), (n = _), (i = (i + 1) | 0);
                        }
                        return t;
                    }),
                    (u(Mt).st = function (t, r, s) {
                        for (var i = (r + s) | 0, n = jt(this, r), e = r; e < i; ) {
                            var _ = 0 === n ? 0 : this.ft_1[(n - 1) | 0],
                                h = (this.ft_1[n] - _) | 0,
                                f = this.ft_1[(this.et_1.length + n) | 0],
                                v = (_ + h) | 0,
                                a = (Math.min(i, v) - e) | 0,
                                u = (f + ((e - _) | 0)) | 0,
                                o = at(this.et_1[n], u, (u + a) | 0, !0, !1);
                            null == t.sr_1 ? ((o.ls_1 = o), (o.ks_1 = o.ls_1), (t.sr_1 = o.ks_1)) : I(I(t.sr_1).ls_1).qs(o), (e = (e + a) | 0), (n = (n + 1) | 0);
                        }
                        return (t.tr_1 = t.tr_1.f3(c(s))), g;
                    }),
                    (u(Mt).tt = function (t, r, s, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0)) n = !1;
                        else {
                            for (var e = s, _ = (t + i) | 0, h = jt(this, t), f = t; f < _; ) {
                                var v = 0 === h ? 0 : this.ft_1[(h - 1) | 0],
                                    a = (this.ft_1[h] - v) | 0,
                                    u = this.ft_1[(this.et_1.length + h) | 0],
                                    o = (v + a) | 0,
                                    l = (Math.min(_, o) - f) | 0,
                                    w = (u + ((f - v) | 0)) | 0,
                                    g = this.et_1[h];
                                if (!r.ut(e, g, w, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (f = (f + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mt).ut = function (t, r, s, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0) || s < 0 || s > ((r.length - i) | 0)) n = !1;
                        else {
                            for (var e = s, _ = (t + i) | 0, h = jt(this, t), f = t; f < _; ) {
                                var v = 0 === h ? 0 : this.ft_1[(h - 1) | 0],
                                    a = (this.ft_1[h] - v) | 0,
                                    u = this.ft_1[(this.et_1.length + h) | 0],
                                    o = (v + a) | 0,
                                    l = (Math.min(_, o) - f) | 0,
                                    w = (u + ((f - v) | 0)) | 0;
                                if (!wt(this.et_1[h], w, r, e, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (f = (f + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mt).nt = function () {
                        return this.rt();
                    }),
                    (u(Mt).equals = function (t) {
                        return t === this || (t instanceof zt && t.s() === this.s() && this.tt(0, t, 0, this.s()));
                    }),
                    (u(Mt).hashCode = function () {
                        var t,
                            r = this.wr_1;
                        if (0 === r) {
                            r = 1;
                            for (var s = this.et_1.length, i = 0, n = 0; i < s; ) {
                                for (var e = this.ft_1[(s + i) | 0], _ = this.ft_1[i], h = this.et_1[i], f = e, v = (e + ((_ - n) | 0)) | 0; f < v; ) (r = (a(31, r) + h[f]) | 0), (f = (f + 1) | 0);
                                (n = _), (i = (i + 1) | 0);
                            }
                            this.lt(r), (t = r);
                        } else t = r;
                        return t;
                    }),
                    (u(Mt).toString = function () {
                        return Ct(this).toString();
                    }),
                    (u(At).x4 = function () {
                        if (null == this.wt_1) {
                            throw d(l("not attached to a buffer"));
                        }
                        (this.wt_1 = null), (this.yt_1 = null), (this.zt_1 = new $(-1, -1)), (this.au_1 = null), (this.bu_1 = -1), (this.cu_1 = -1);
                    }),
                    (u(Bt).du = function () {
                        return this;
                    }),
                    (u(Bt).eu = function () {
                        return this.tr_1.equals(new $(0, 0));
                    }),
                    (u(Bt).fu = function (t) {
                        if (this.tr_1.d1(t) < 0) throw new Rt(null);
                    }),
                    (u(Bt).gu = function (t) {
                        return this.tr_1.d1(t) >= 0;
                    }),
                    (u(Bt).hu = function (t, r, s) {
                        var i,
                            n = r,
                            e = s;
                        if ((gt(this.tr_1, n, e), e.equals(new $(0, 0)))) i = this;
                        else {
                            t.tr_1 = t.tr_1.f3(e);
                            for (var _ = this.sr_1; n.d1(c((I(_).hs_1 - _.gs_1) | 0)) >= 0; ) (n = n.g3(c((_.hs_1 - _.gs_1) | 0))), (_ = _.ks_1);
                            for (; e.d1(new $(0, 0)) > 0; ) {
                                var h = I(_).os();
                                h.gs_1 = (h.gs_1 + n.j1()) | 0;
                                var f = h,
                                    v = (h.gs_1 + e.j1()) | 0,
                                    a = h.hs_1;
                                (f.hs_1 = Math.min(v, a)), null == t.sr_1 ? ((h.ls_1 = h), (h.ks_1 = h.ls_1), (t.sr_1 = h.ks_1)) : I(I(t.sr_1).ls_1).qs(h), (e = e.g3(c((h.hs_1 - h.gs_1) | 0))), (n = new $(0, 0)), (_ = _.ks_1);
                            }
                            i = this;
                        }
                        return i;
                    }),
                    (u(Bt).ys = function (t) {
                        var r;
                        gt(this.tr_1, t, new $(1, 0));
                        var s = this.sr_1;
                        if (null != s) {
                            var i = s;
                            if (this.tr_1.g3(t).d1(t) < 0) {
                                for (var n = this.tr_1; n.d1(t) > 0; ) (i = I(i.ls_1)), (n = n.g3(c((i.hs_1 - i.gs_1) | 0)));
                                var e = i,
                                    _ = n;
                                r = I(e).fs_1[K(e.gs_1).f3(t).g3(_).j1()];
                            } else {
                                var h = new $(0, 0);
                                t: for (;;) {
                                    var f = h,
                                        v = (i.hs_1 - i.gs_1) | 0,
                                        a = f.f3(c(v));
                                    if (a.d1(t) > 0) break t;
                                    (i = I(i.ks_1)), (h = a);
                                }
                                var u = i,
                                    o = h;
                                r = I(u).fs_1[K(u.gs_1).f3(t).g3(o).j1()];
                            }
                        } else {
                            var l = new $(-1, -1);
                            r = I(null).fs_1[K(null.gs_1).f3(t).g3(l).j1()];
                        }
                        return r;
                    }),
                    (u(Bt).iu = function () {
                        var t,
                            r = this.tr_1;
                        if (r.equals(new $(0, 0))) t = new $(0, 0);
                        else {
                            var s = I(I(this.sr_1).ls_1);
                            s.hs_1 < 8192 && s.js_1 && (r = r.g3(c((s.hs_1 - s.gs_1) | 0))), (t = r);
                        }
                        return t;
                    }),
                    (u(Bt).ju = function () {
                        if (this.tr_1.equals(new $(0, 0))) throw Ft();
                        var t = I(this.sr_1),
                            r = t.gs_1,
                            s = t.hs_1,
                            i = r;
                        r = (i + 1) | 0;
                        var n = t.fs_1[i];
                        return (this.tr_1 = this.tr_1.g3(new $(1, 0))), r === s ? ((this.sr_1 = t.ps()), v.xs(t)) : (t.gs_1 = r), n;
                    }),
                    (u(Bt).cs = function () {
                        var t;
                        if (this.tr_1.d1(new $(4, 0)) < 0) throw Ft();
                        var r = I(this.sr_1),
                            s = r.gs_1,
                            i = r.hs_1;
                        if (c((i - s) | 0).d1(new $(4, 0)) < 0) {
                            t = ((255 & this.ju()) << 24) | ((255 & this.ju()) << 16) | ((255 & this.ju()) << 8) | (255 & this.ju());
                        } else {
                            var n = r.fs_1,
                                e = s,
                                _ = (s = (e + 1) | 0),
                                h = (s = (_ + 1) | 0),
                                f = (s = (h + 1) | 0);
                            s = (f + 1) | 0;
                            var a = ((255 & n[e]) << 24) | ((255 & n[_]) << 16) | ((255 & n[h]) << 8) | (255 & n[f]);
                            (this.tr_1 = this.tr_1.g3(new $(4, 0))), s === i ? ((this.sr_1 = r.ps()), v.xs(r)) : (r.gs_1 = s), (t = a);
                        }
                        return t;
                    }),
                    (u(Bt).ku = function () {
                        return this.lu(this.tr_1);
                    }),
                    (u(Bt).lu = function (t) {
                        var r;
                        if (!(t.d1(new $(0, 0)) >= 0 && t.d1(new $(2147483647, 0)) <= 0)) {
                            var s = "byteCount: " + t.toString();
                            throw w(l(s));
                        }
                        if (this.tr_1.d1(t) < 0) throw Ft();
                        if (t.d1(new $(4096, 0)) >= 0) {
                            var i = this.nu(t.j1());
                            this.ur(t), (r = i);
                        } else r = new zt(this.mu(t));
                        return r;
                    }),
                    (u(Bt).ou = function () {
                        return this.zs(this.tr_1);
                    }),
                    (u(Bt).zs = function (t) {
                        var r;
                        if (!(t.d1(new $(0, 0)) >= 0 && t.d1(new $(2147483647, 0)) <= 0)) {
                            var s = "byteCount: " + t.toString();
                            throw w(l(s));
                        }
                        if (this.tr_1.d1(t) < 0) throw Ft();
                        if (t.equals(new $(0, 0))) r = "";
                        else {
                            var i = I(this.sr_1);
                            if (K(i.gs_1).f3(t).d1(c(i.hs_1)) > 0) r = $t(this.mu(t));
                            else {
                                var n = $t(i.fs_1, i.gs_1, (i.gs_1 + t.j1()) | 0);
                                (i.gs_1 = (i.gs_1 + t.j1()) | 0), (this.tr_1 = this.tr_1.g3(t)), i.gs_1 === i.hs_1 && ((this.sr_1 = i.ps()), v.xs(i)), (r = n);
                            }
                        }
                        return r;
                    }),
                    (u(Bt).pu = function () {
                        return this.qu(new $(-1, 2147483647));
                    }),
                    (u(Bt).qu = function (t) {
                        var r;
                        if (!(t.d1(new $(0, 0)) >= 0)) {
                            var s = "limit < 0: " + t.toString();
                            throw w(l(s));
                        }
                        var i = t.equals(new $(-1, 2147483647)) ? new $(-1, 2147483647) : t.f3(new $(1, 0)),
                            n = this.ru(10, new $(0, 0), i);
                        if (n.equals(new $(-1, -1))) {
                            var e;
                            if (i.d1(this.tr_1) < 0) {
                                var _ = i.g3(c(1));
                                e = 13 === this.ys(_);
                            } else e = !1;
                            if (!(!!e && 10 === this.ys(i))) {
                                var h = new Bt(),
                                    f = new $(0, 0),
                                    v = this.tr_1,
                                    a = c(32),
                                    u = a.d1(v) <= 0 ? a : v;
                                this.hu(h, f, u);
                                var o = this.tr_1;
                                throw new Rt("\\n not found: limit=" + (o.d1(t) <= 0 ? o : t).toString() + " content=" + h.ku().ot() + "…");
                            }
                            r = kt(this, i);
                        } else r = kt(this, n);
                        return r;
                    }),
                    (u(Bt).su = function (t) {
                        var r,
                            s = bt(this, t);
                        if (-1 !== s) {
                            var i = t.ds_1[s].s();
                            this.ur(c(i)), (r = s);
                        } else r = -1;
                        return r;
                    }),
                    (u(Bt).tu = function () {
                        return this.mu(this.tr_1);
                    }),
                    (u(Bt).mu = function (t) {
                        if (!(t.d1(new $(0, 0)) >= 0 && t.d1(new $(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.tr_1.d1(t) < 0) throw Ft();
                        var s = new Int8Array(t.j1());
                        return this.uu(s), s;
                    }),
                    (u(Bt).uu = function (t) {
                        for (var r = 0; r < t.length; ) {
                            var s = this.vu(t, r, (t.length - r) | 0);
                            if (-1 === s) throw Ft();
                            r = (r + s) | 0;
                        }
                        return g;
                    }),
                    (u(Bt).vu = function (t, r, s) {
                        var i;
                        gt(c(t.length), c(r), c(s));
                        var n = this.sr_1;
                        if (null != n) {
                            var e = n,
                                _ = (e.hs_1 - e.gs_1) | 0,
                                h = Math.min(s, _),
                                f = e.fs_1,
                                a = e.gs_1,
                                u = (e.gs_1 + h) | 0;
                            z(f, t, r, a, u), (e.gs_1 = (e.gs_1 + h) | 0), (this.tr_1 = this.tr_1.g3(c(h))), e.gs_1 === e.hs_1 && ((this.sr_1 = e.ps()), v.xs(e)), (i = h);
                        } else i = -1;
                        return i;
                    }),
                    (u(Bt).h2 = function () {
                        return this.ur(this.tr_1), g;
                    }),
                    (u(Bt).ur = function (t) {
                        for (var r = t; r.d1(new $(0, 0)) > 0; ) {
                            var s = this.sr_1;
                            if (null == s) throw Ft();
                            var i = s,
                                n = r,
                                e = (i.hs_1 - i.gs_1) | 0,
                                _ = c(e),
                                h = (n.d1(_) <= 0 ? n : _).j1();
                            (this.tr_1 = this.tr_1.g3(c(h))), (r = r.g3(c(h))), (i.gs_1 = (i.gs_1 + h) | 0), i.gs_1 === i.hs_1 && ((this.sr_1 = i.ps()), v.xs(i));
                        }
                        return g;
                    }),
                    (u(Bt).wu = function (t) {
                        var r = t.s();
                        return t.st(this, 0, r), this;
                    }),
                    (u(Bt).xu = function (t) {
                        var r;
                        if (!(t >= 1 && t <= 8192)) {
                            throw w(l("unexpected capacity"));
                        }
                        if (null != this.sr_1) {
                            var s = I(this.sr_1).ls_1;
                            (((I(s).hs_1 + t) | 0) > 8192 || !s.js_1) && (s = s.qs(v.us())), (r = s);
                        } else {
                            var i = v.us();
                            (this.sr_1 = i), (i.ls_1 = i), (i.ks_1 = i), (r = i);
                        }
                        return r;
                    }),
                    (u(Bt).yu = function (t) {
                        return this.zu(t, 0, t.length);
                    }),
                    (u(Bt).zu = function (t, r, s) {
                        if (!(r >= 0)) throw w(l("beginIndex < 0: " + r));
                        if (!(s >= r)) throw w(l("endIndex < beginIndex: " + s + " < " + r));
                        if (!(s <= t.length)) {
                            var i = "endIndex > string.length: " + s + " > " + t.length;
                            throw w(l(i));
                        }
                        for (var n = r; n < s; ) {
                            var e = M(t, n),
                                _ = E(e);
                            if (_ < 128) {
                                var h = this.xu(1),
                                    f = h.fs_1,
                                    v = (h.hs_1 - n) | 0,
                                    a = (8192 - v) | 0,
                                    u = Math.min(s, a),
                                    o = n;
                                (n = (o + 1) | 0), (f[(v + o) | 0] = O(_));
                                t: for (; n < u; ) {
                                    var g = M(t, n);
                                    if ((_ = E(g)) >= 128) break t;
                                    var d = n;
                                    (n = (d + 1) | 0), (f[(v + d) | 0] = O(_));
                                }
                                var k = (((n + v) | 0) - h.hs_1) | 0;
                                (h.hs_1 = (h.hs_1 + k) | 0), (this.tr_1 = this.tr_1.f3(c(k)));
                            } else if (_ < 2048) {
                                var b = this.xu(2);
                                (b.fs_1[b.hs_1] = O((_ >> 6) | 192)), (b.fs_1[(b.hs_1 + 1) | 0] = O((63 & _) | 128)), (b.hs_1 = (b.hs_1 + 2) | 0), (this.tr_1 = this.tr_1.f3(new $(2, 0))), (n = (n + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var q = this.xu(3);
                                (q.fs_1[q.hs_1] = O((_ >> 12) | 224)), (q.fs_1[(q.hs_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (q.fs_1[(q.hs_1 + 2) | 0] = O((63 & _) | 128)), (q.hs_1 = (q.hs_1 + 3) | 0), (this.tr_1 = this.tr_1.f3(new $(3, 0))), (n = (n + 1) | 0);
                            } else {
                                var m;
                                if (((n + 1) | 0) < s) {
                                    var y = M(t, (n + 1) | 0);
                                    m = E(y);
                                } else m = 0;
                                var x = m;
                                if (_ > 56319 || !(56320 <= x && x <= 57343)) {
                                    var p = A(63),
                                        j = E(p);
                                    this.av(j), (n = (n + 1) | 0);
                                } else {
                                    var S = (65536 + (((1023 & _) << 10) | (1023 & x))) | 0,
                                        I = this.xu(4);
                                    (I.fs_1[I.hs_1] = O((S >> 18) | 240)), (I.fs_1[(I.hs_1 + 1) | 0] = O(((S >> 12) & 63) | 128)), (I.fs_1[(I.hs_1 + 2) | 0] = O(((S >> 6) & 63) | 128)), (I.fs_1[(I.hs_1 + 3) | 0] = O((63 & S) | 128)), (I.hs_1 = (I.hs_1 + 4) | 0), (this.tr_1 = this.tr_1.f3(new $(4, 0))), (n = (n + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (u(Bt).bv = function (t) {
                        return this.at(t, 0, t.length);
                    }),
                    (u(Bt).at = function (t, r, s) {
                        var i = r;
                        gt(c(t.length), c(i), c(s));
                        for (var n = (i + s) | 0; i < n; ) {
                            var e = this.xu(1),
                                _ = (n - i) | 0,
                                h = (8192 - e.hs_1) | 0,
                                f = Math.min(_, h),
                                v = e.fs_1,
                                a = e.hs_1;
                            z(t, v, a, i, (i + f) | 0), (i = (i + f) | 0), (e.hs_1 = (e.hs_1 + f) | 0);
                        }
                        return (this.tr_1 = this.tr_1.f3(c(s))), this;
                    }),
                    (u(Bt).zr = function (t) {
                        var r = new $(0, 0);
                        t: for (;;) {
                            var s = t.cv(this, new $(8192, 0));
                            if (s.equals(new $(-1, -1))) break t;
                            r = r.f3(s);
                        }
                        return r;
                    }),
                    (u(Bt).av = function (t) {
                        var r = this.xu(1),
                            s = r.hs_1;
                        return (r.hs_1 = (s + 1) | 0), (r.fs_1[s] = O(t)), (this.tr_1 = this.tr_1.f3(new $(1, 0))), this;
                    }),
                    (u(Bt).yr = function (t) {
                        var r = this.xu(4),
                            s = r.fs_1,
                            i = r.hs_1,
                            n = i;
                        (i = (n + 1) | 0), (s[n] = O((t >>> 24) & 255));
                        var e = i;
                        (i = (e + 1) | 0), (s[e] = O((t >>> 16) & 255));
                        var _ = i;
                        (i = (_ + 1) | 0), (s[_] = O((t >>> 8) & 255));
                        var h = i;
                        return (i = (h + 1) | 0), (s[h] = O(255 & t)), (r.hs_1 = i), (this.tr_1 = this.tr_1.f3(new $(4, 0))), this;
                    }),
                    (u(Bt).rr = function (t, r) {
                        var s;
                        t: {
                            var i = r;
                            if (t === this) {
                                throw w(l("source == this"));
                            }
                            for (gt(t.tr_1, new $(0, 0), i); i.d1(new $(0, 0)) > 0; ) {
                                if (i.d1(c((I(t.sr_1).hs_1 - I(t.sr_1).gs_1) | 0)) < 0) {
                                    var n,
                                        e = null != this.sr_1 ? I(this.sr_1).ls_1 : null;
                                    if (null != e && e.js_1) {
                                        var _ = i,
                                            h = e.hs_1,
                                            f = _.f3(c(h)),
                                            v = e.is_1 ? 0 : e.gs_1;
                                        n = f.g3(c(v)).d1(new $(8192, 0)) <= 0;
                                    } else n = !1;
                                    if (n) {
                                        I(t.sr_1).ws(e, i.j1()), (t.tr_1 = t.tr_1.g3(i)), (this.tr_1 = this.tr_1.f3(i)), (s = g);
                                        break t;
                                    }
                                    t.sr_1 = I(t.sr_1).rs(i.j1());
                                }
                                var a = t.sr_1,
                                    u = c((I(a).hs_1 - a.gs_1) | 0);
                                if (((t.sr_1 = a.ps()), null == this.sr_1)) (this.sr_1 = a), (a.ls_1 = a), (a.ks_1 = a.ls_1);
                                else {
                                    var o = I(this.sr_1).ls_1;
                                    (o = I(o).qs(a)).vs();
                                }
                                (t.tr_1 = t.tr_1.g3(u)), (this.tr_1 = this.tr_1.f3(u)), (i = i.g3(u));
                            }
                        }
                        return s;
                    }),
                    (u(Bt).cv = function (t, r) {
                        var s,
                            i = r;
                        if (!(i.d1(new $(0, 0)) >= 0)) {
                            var n = "byteCount < 0: " + i.toString();
                            throw w(l(n));
                        }
                        return this.tr_1.equals(new $(0, 0)) ? (s = new $(-1, -1)) : (i.d1(this.tr_1) > 0 && (i = this.tr_1), t.rr(this, i), (s = i)), s;
                    }),
                    (u(Bt).ru = function (t, r, s) {
                        var i;
                        t: {
                            var n = r,
                                e = s;
                            if (!(new $(0, 0).d1(n) <= 0 && n.d1(e) <= 0)) {
                                var _ = "size=" + this.tr_1.toString() + " fromIndex=" + n.toString() + " toIndex=" + e.toString();
                                throw w(l(_));
                            }
                            if ((e.d1(this.tr_1) > 0 && (e = this.tr_1), n.equals(e))) i = new $(-1, -1);
                            else {
                                var h = n,
                                    f = this.sr_1;
                                if (null != f) {
                                    var v = f;
                                    if (this.tr_1.g3(h).d1(h) < 0) {
                                        for (var a = this.tr_1; a.d1(h) > 0; ) (v = I(v.ls_1)), (a = a.g3(c((v.hs_1 - v.gs_1) | 0)));
                                        var u = v,
                                            o = a;
                                        if (null == u) {
                                            i = new $(-1, -1);
                                            break t;
                                        }
                                        for (var g = u, d = o; d.d1(e) < 0; ) {
                                            for (var k = g.fs_1, b = c(g.hs_1), q = K(g.gs_1).f3(e).g3(d), m = (b.d1(q) <= 0 ? b : q).j1(), y = K(g.gs_1).f3(n).g3(d).j1(); y < m; ) {
                                                if (k[y] === t) {
                                                    i = K((y - g.gs_1) | 0).f3(d);
                                                    break t;
                                                }
                                                y = (y + 1) | 0;
                                            }
                                            (n = d = d.f3(c((g.hs_1 - g.gs_1) | 0))), (g = I(g.ks_1));
                                        }
                                        i = new $(-1, -1);
                                    } else {
                                        var x = new $(0, 0);
                                        r: for (;;) {
                                            var p = x,
                                                j = (v.hs_1 - v.gs_1) | 0,
                                                S = p.f3(c(j));
                                            if (S.d1(h) > 0) break r;
                                            (v = I(v.ks_1)), (x = S);
                                        }
                                        if (null != v) {
                                            for (var z = v, C = x; C.d1(e) < 0; ) {
                                                for (var M = z.fs_1, A = c(z.hs_1), B = K(z.gs_1).f3(e).g3(C), E = (A.d1(B) <= 0 ? A : B).j1(), O = K(z.gs_1).f3(n).g3(C).j1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        i = K((O - z.gs_1) | 0).f3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (n = C = C.f3(c((z.hs_1 - z.gs_1) | 0))), (z = I(z.ks_1));
                                            }
                                            i = new $(-1, -1);
                                        } else i = new $(-1, -1);
                                    }
                                } else {
                                    new $(-1, -1);
                                    i = new $(-1, -1);
                                }
                            }
                        }
                        return i;
                    }),
                    (u(Bt).dv = function (t) {
                        return this.ev(t, new $(0, 0));
                    }),
                    (u(Bt).ev = function (t, r) {
                        var s;
                        t: {
                            var i = r;
                            if (!(t.s() > 0)) {
                                throw w(l("bytes is empty"));
                            }
                            if (!(i.d1(new $(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.sr_1;
                            if (null != _) {
                                var h = _;
                                if (this.tr_1.g3(e).d1(e) < 0) {
                                    for (var f = this.tr_1; f.d1(e) > 0; ) (h = I(h.ls_1)), (f = f.g3(c((h.hs_1 - h.gs_1) | 0)));
                                    var v = h,
                                        a = f;
                                    if (null == v) {
                                        s = new $(-1, -1);
                                        break t;
                                    }
                                    for (var u = v, o = a, g = t.nt(), d = g[0], k = t.s(), b = this.tr_1.g3(c(k)).f3(new $(1, 0)); o.d1(b) < 0; ) {
                                        var q = u.fs_1,
                                            m = u.hs_1,
                                            y = K(u.gs_1).f3(b).g3(o),
                                            x = c(m),
                                            p = (x.d1(y) <= 0 ? x : y).j1(),
                                            j = K(u.gs_1).f3(i).g3(o).j1();
                                        if (j < p)
                                            do {
                                                var S = j;
                                                if (((j = (j + 1) | 0), q[S] === d && qt(u, (S + 1) | 0, g, 1, k))) {
                                                    s = K((S - u.gs_1) | 0).f3(o);
                                                    break t;
                                                }
                                            } while (j < p);
                                        (i = o = o.f3(c((u.hs_1 - u.gs_1) | 0))), (u = I(u.ks_1));
                                    }
                                    s = new $(-1, -1);
                                } else {
                                    var z = new $(0, 0);
                                    r: for (;;) {
                                        var C = z,
                                            M = (h.hs_1 - h.gs_1) | 0,
                                            A = C.f3(c(M));
                                        if (A.d1(e) > 0) break r;
                                        (h = I(h.ks_1)), (z = A);
                                    }
                                    if (null != h) {
                                        for (var B = h, E = z, O = t.nt(), F = O[0], R = t.s(), U = this.tr_1.g3(c(R)).f3(new $(1, 0)); E.d1(U) < 0; ) {
                                            var X = B.fs_1,
                                                L = B.hs_1,
                                                P = K(B.gs_1).f3(U).g3(E),
                                                V = c(L),
                                                D = (V.d1(P) <= 0 ? V : P).j1(),
                                                G = K(B.gs_1).f3(i).g3(E).j1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && qt(B, (H + 1) | 0, O, 1, R))) {
                                                        s = K((H - B.gs_1) | 0).f3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (i = E = E.f3(c((B.hs_1 - B.gs_1) | 0))), (B = I(B.ks_1));
                                        }
                                        s = new $(-1, -1);
                                    } else s = new $(-1, -1);
                                }
                            } else {
                                new $(-1, -1);
                                s = new $(-1, -1);
                            }
                        }
                        return s;
                    }),
                    (u(Bt).fv = function (t) {
                        return this.gv(t, new $(0, 0));
                    }),
                    (u(Bt).gv = function (t, r) {
                        var s;
                        t: {
                            var i = r;
                            if (!(i.d1(new $(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.sr_1;
                            if (null != _) {
                                var h = _;
                                if (this.tr_1.g3(e).d1(e) < 0) {
                                    for (var f = this.tr_1; f.d1(e) > 0; ) (h = I(h.ls_1)), (f = f.g3(c((h.hs_1 - h.gs_1) | 0)));
                                    var v = h,
                                        a = f;
                                    if (null == v) {
                                        s = new $(-1, -1);
                                        break t;
                                    }
                                    var u = v,
                                        o = a;
                                    if (2 === t.s())
                                        for (var g = t.t(0), d = t.t(1); o.d1(this.tr_1) < 0; ) {
                                            for (var k = u.fs_1, b = K(u.gs_1).f3(i).g3(o).j1(), q = u.hs_1; b < q; ) {
                                                var m = k[b];
                                                if (m === g || m === d) {
                                                    s = K((b - u.gs_1) | 0).f3(o);
                                                    break t;
                                                }
                                                b = (b + 1) | 0;
                                            }
                                            (i = o = o.f3(c((u.hs_1 - u.gs_1) | 0))), (u = I(u.ks_1));
                                        }
                                    else
                                        for (var y = t.nt(); o.d1(this.tr_1) < 0; ) {
                                            for (var x = u.fs_1, p = K(u.gs_1).f3(i).g3(o).j1(), j = u.hs_1; p < j; ) {
                                                for (var S = x[p], z = 0, C = y.length; z < C; ) {
                                                    var M = y[z];
                                                    if (((z = (z + 1) | 0), S === M)) {
                                                        s = K((p - u.gs_1) | 0).f3(o);
                                                        break t;
                                                    }
                                                }
                                                p = (p + 1) | 0;
                                            }
                                            (i = o = o.f3(c((u.hs_1 - u.gs_1) | 0))), (u = I(u.ks_1));
                                        }
                                    s = new $(-1, -1);
                                } else {
                                    var A = new $(0, 0);
                                    r: for (;;) {
                                        var B = A,
                                            E = (h.hs_1 - h.gs_1) | 0,
                                            O = B.f3(c(E));
                                        if (O.d1(e) > 0) break r;
                                        (h = I(h.ks_1)), (A = O);
                                    }
                                    if (null != h) {
                                        var F = h,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.d1(this.tr_1) < 0; ) {
                                                for (var L = F.fs_1, P = K(F.gs_1).f3(i).g3(R).j1(), V = F.hs_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        s = K((P - F.gs_1) | 0).f3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (i = R = R.f3(c((F.hs_1 - F.gs_1) | 0))), (F = I(F.ks_1));
                                            }
                                        else
                                            for (var G = t.nt(); R.d1(this.tr_1) < 0; ) {
                                                for (var H = F.fs_1, J = K(F.gs_1).f3(i).g3(R).j1(), N = F.hs_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            s = K((J - F.gs_1) | 0).f3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (i = R = R.f3(c((F.hs_1 - F.gs_1) | 0))), (F = I(F.ks_1));
                                            }
                                        s = new $(-1, -1);
                                    } else s = new $(-1, -1);
                                }
                            } else {
                                new $(-1, -1);
                                s = new $(-1, -1);
                            }
                        }
                        return s;
                    }),
                    (u(Bt).hv = function (t, r) {
                        return this.iv(t, r, 0, r.s());
                    }),
                    (u(Bt).iv = function (t, r, s, i) {
                        var n;
                        t: if (t.d1(new $(0, 0)) < 0 || s < 0 || i < 0 || this.tr_1.g3(t).d1(c(i)) < 0 || ((r.s() - s) | 0) < i) n = !1;
                        else {
                            var e = 0;
                            if (e < i)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var h = t.f3(c(_));
                                    if (this.ys(h) !== r.t((s + _) | 0)) {
                                        n = !1;
                                        break t;
                                    }
                                } while (e < i);
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Bt).n9 = function () {
                        return g;
                    }),
                    (u(Bt).x4 = function () {
                        return g;
                    }),
                    (u(Bt).equals = function (t) {
                        var r;
                        t: if (this !== t)
                            if (t instanceof Bt)
                                if (this.tr_1.equals(t.tr_1))
                                    if (this.tr_1.equals(new $(0, 0))) r = !0;
                                    else {
                                        for (var s, i = I(this.sr_1), n = I(t.sr_1), e = i.gs_1, _ = n.gs_1, h = new $(0, 0); h.d1(this.tr_1) < 0; ) {
                                            var f = (i.hs_1 - e) | 0,
                                                v = (n.hs_1 - _) | 0,
                                                a = Math.min(f, v);
                                            s = c(a);
                                            var u = new $(0, 0);
                                            if (u.d1(s) < 0)
                                                do {
                                                    u = u.f3(new $(1, 0));
                                                    var o = e;
                                                    e = (o + 1) | 0;
                                                    var l = _;
                                                    if (((_ = (l + 1) | 0), i.fs_1[o] !== n.fs_1[l])) {
                                                        r = !1;
                                                        break t;
                                                    }
                                                } while (u.d1(s) < 0);
                                            e === i.hs_1 && (e = (i = I(i.ks_1)).gs_1), _ === n.hs_1 && (_ = (n = I(n.ks_1)).gs_1), (h = h.f3(s));
                                        }
                                        r = !0;
                                    }
                                else r = !1;
                            else r = !1;
                        else r = !0;
                        return r;
                    }),
                    (u(Bt).hashCode = function () {
                        var t,
                            r = this.sr_1;
                        if (null != r) {
                            var s = r,
                                i = 1;
                            do {
                                for (var n = s.gs_1, e = s.hs_1; n < e; ) (i = (a(31, i) + s.fs_1[n]) | 0), (n = (n + 1) | 0);
                                s = I(s.ks_1);
                            } while (s !== this.sr_1);
                            t = i;
                        } else t = 0;
                        return t;
                    }),
                    (u(Bt).toString = function () {
                        return this.jv().toString();
                    }),
                    (u(Bt).jv = function () {
                        if (!(this.tr_1.d1(new $(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.tr_1.toString();
                            throw d(l(t));
                        }
                        return this.nu(this.tr_1.j1());
                    }),
                    (u(Bt).nu = function (t) {
                        var r;
                        if (0 !== t) {
                            gt(this.tr_1, new $(0, 0), c(t));
                            for (var s = 0, i = 0, n = this.sr_1; s < t; ) {
                                if (I(n).hs_1 === n.gs_1) throw N("s.limit == s.pos");
                                (s = (s + ((n.hs_1 - n.gs_1) | 0)) | 0), (i = (i + 1) | 0), (n = n.ks_1);
                            }
                            var e = Q(Array(i), null),
                                _ = new Int32Array(a(i, 2));
                            for (s = 0, i = 0, n = this.sr_1; s < t; ) {
                                e[i] = I(n).fs_1;
                                var h = (s = (s + ((n.hs_1 - n.gs_1) | 0)) | 0);
                                (_[i] = Math.min(h, t)), (_[(i + e.length) | 0] = n.gs_1), (n.is_1 = !0), (i = (i + 1) | 0), (n = n.ks_1);
                            }
                            r = new Mt(T(e) ? e : G(), _);
                        } else r = It().gt_1;
                        return r;
                    }),
                    (u(Lt).rr = function (t, r) {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.rr(t, r), this.nv(), g;
                    }),
                    (u(Lt).wu = function (t) {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.wu(t), this.nv();
                    }),
                    (u(Lt).yu = function (t) {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.yu(t), this.nv();
                    }),
                    (u(Lt).zu = function (t, r, s) {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.zu(t, r, s), this.nv();
                    }),
                    (u(Lt).av = function (t) {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.av(t), this.nv();
                    }),
                    (u(Lt).nv = function () {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        var t = this.mv_1.iu();
                        return t.d1(new $(0, 0)) > 0 && this.kv_1.rr(this.mv_1, t), this;
                    }),
                    (u(Lt).n9 = function () {
                        if (this.lv_1) {
                            throw d(l("closed"));
                        }
                        return this.mv_1.tr_1.d1(new $(0, 0)) > 0 && this.kv_1.rr(this.mv_1, this.mv_1.tr_1), this.kv_1.n9(), g;
                    }),
                    (u(Lt).x4 = function () {
                        var t;
                        if (this.lv_1) t = g;
                        else {
                            var r = null;
                            try {
                                this.mv_1.tr_1.d1(new $(0, 0)) > 0 && this.kv_1.rr(this.mv_1, this.mv_1.tr_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                r = t;
                            }
                            try {
                                this.kv_1.x4();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == r && (r = t);
                            }
                            if (((this.lv_1 = !0), null != r)) throw r;
                        }
                        return t;
                    }),
                    (u(Lt).toString = function () {
                        return "buffer(" + l(this.kv_1) + ")";
                    }),
                    (u(Pt).du = function () {
                        return this.qv_1;
                    }),
                    (u(Pt).cv = function (t, r) {
                        var s;
                        t: {
                            if (!(r.d1(new $(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + r.toString();
                                throw w(l(i));
                            }
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            if (this.qv_1.tr_1.equals(new $(0, 0))) {
                                if (r.equals(new $(0, 0))) {
                                    s = new $(0, 0);
                                    break t;
                                }
                                if (this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    s = new $(-1, -1);
                                    break t;
                                }
                            }
                            var n = this.qv_1.tr_1,
                                e = r.d1(n) <= 0 ? r : n;
                            s = this.qv_1.cv(t, e);
                        }
                        return s;
                    }),
                    (u(Pt).eu = function () {
                        if (this.pv_1) {
                            throw d(l("closed"));
                        }
                        return this.qv_1.eu() && this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1));
                    }),
                    (u(Pt).fu = function (t) {
                        if (!this.gu(t)) throw Ft();
                    }),
                    (u(Pt).gu = function (t) {
                        var r;
                        t: {
                            if (!(t.d1(new $(0, 0)) >= 0)) {
                                var s = "byteCount < 0: " + t.toString();
                                throw w(l(s));
                            }
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            for (; this.qv_1.tr_1.d1(t) < 0; )
                                if (this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    r = !1;
                                    break t;
                                }
                            r = !0;
                        }
                        return r;
                    }),
                    (u(Pt).su = function (t) {
                        var r;
                        t: {
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            for (;;) {
                                var s = bt(this.qv_1, t, !0);
                                switch (s) {
                                    case -1:
                                        r = -1;
                                        break t;
                                    case -2:
                                        if (this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                            r = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var i = t.ds_1[s].s();
                                        this.qv_1.ur(c(i)), (r = s);
                                        break t;
                                }
                            }
                        }
                        return r;
                    }),
                    (u(Pt).pu = function () {
                        return this.qu(new $(-1, 2147483647));
                    }),
                    (u(Pt).qu = function (t) {
                        var r;
                        if (!(t.d1(new $(0, 0)) >= 0)) {
                            var s = "limit < 0: " + t.toString();
                            throw w(l(s));
                        }
                        var i = t.equals(new $(-1, 2147483647)) ? new $(-1, 2147483647) : t.f3(c(1)),
                            n = this.ru(10, new $(0, 0), i);
                        if (n.equals(new $(-1, -1))) {
                            var e, _;
                            if (i.d1(new $(-1, 2147483647)) < 0 && this.gu(i)) {
                                var h = i.g3(c(1));
                                _ = 13 === this.qv_1.ys(h);
                            } else _ = !1;
                            if (_) {
                                var f = i.f3(c(1));
                                e = this.gu(f);
                            } else e = !1;
                            if (!(!!e && 10 === this.qv_1.ys(i))) {
                                var v = new Bt(),
                                    a = new $(0, 0),
                                    u = this.qv_1.tr_1,
                                    o = c(32),
                                    g = o.d1(u) <= 0 ? o : u;
                                this.qv_1.hu(v, a, g);
                                var d = this.qv_1.tr_1;
                                throw new Rt("\\n not found: limit=" + (d.d1(t) <= 0 ? d : t).toString() + " content=" + v.ku().ot() + "…");
                            }
                            r = kt(this.qv_1, i);
                        } else r = kt(this.qv_1, n);
                        return r;
                    }),
                    (u(Pt).ur = function (t) {
                        var r = t;
                        if (this.pv_1) {
                            throw d(l("closed"));
                        }
                        for (; r.d1(new $(0, 0)) > 0; ) {
                            if (this.qv_1.tr_1.equals(new $(0, 0)) && this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) throw Ft();
                            var s = r,
                                i = this.qv_1.tr_1,
                                n = s.d1(i) <= 0 ? s : i;
                            this.qv_1.ur(n), (r = r.g3(n));
                        }
                        return g;
                    }),
                    (u(Pt).ru = function (t, r, s) {
                        var i;
                        t: {
                            var n = r;
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            if (!(new $(0, 0).d1(n) <= 0 && n.d1(s) <= 0)) {
                                var e = "fromIndex=" + n.toString() + " toIndex=" + s.toString();
                                throw w(l(e));
                            }
                            for (; n.d1(s) < 0; ) {
                                var _ = this.qv_1.ru(t, n, s);
                                if (!_.equals(new $(-1, -1))) {
                                    i = _;
                                    break t;
                                }
                                var h = this.qv_1.tr_1;
                                if (h.d1(s) >= 0 || this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    i = new $(-1, -1);
                                    break t;
                                }
                                var f = n;
                                n = f.d1(h) >= 0 ? f : h;
                            }
                            i = new $(-1, -1);
                        }
                        return i;
                    }),
                    (u(Pt).fv = function (t) {
                        return this.gv(t, new $(0, 0));
                    }),
                    (u(Pt).gv = function (t, r) {
                        var s;
                        t: {
                            var i = r;
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            for (;;) {
                                var n = this.qv_1.gv(t, i);
                                if (!n.equals(new $(-1, -1))) {
                                    s = n;
                                    break t;
                                }
                                var e = this.qv_1.tr_1;
                                if (this.ov_1.cv(this.qv_1, new $(8192, 0)).equals(new $(-1, -1))) {
                                    s = new $(-1, -1);
                                    break t;
                                }
                                var _ = i;
                                i = _.d1(e) >= 0 ? _ : e;
                            }
                        }
                        return s;
                    }),
                    (u(Pt).hv = function (t, r) {
                        return this.iv(t, r, 0, r.s());
                    }),
                    (u(Pt).iv = function (t, r, s, i) {
                        var n;
                        t: {
                            if (this.pv_1) {
                                throw d(l("closed"));
                            }
                            if (t.d1(new $(0, 0)) < 0 || s < 0 || i < 0 || ((r.s() - s) | 0) < i) n = !1;
                            else {
                                var e = 0;
                                if (e < i)
                                    do {
                                        var _ = e;
                                        e = (e + 1) | 0;
                                        var h = t.f3(c(_)),
                                            f = h.f3(c(1));
                                        if (!this.gu(f)) {
                                            n = !1;
                                            break t;
                                        }
                                        if (this.qv_1.ys(h) !== r.t((s + _) | 0)) {
                                            n = !1;
                                            break t;
                                        }
                                    } while (e < i);
                                n = !0;
                            }
                        }
                        return n;
                    }),
                    (u(Pt).x4 = function () {
                        var t;
                        return this.pv_1 ? (t = g) : ((this.pv_1 = !0), this.ov_1.x4(), this.qv_1.h2()), t;
                    }),
                    (u(Pt).toString = function () {
                        return "buffer(" + l(this.ov_1) + ")";
                    }),
                    (u(Vt).us = function () {
                        return vt();
                    }),
                    (u(Vt).xs = function (t) {}),
                    (s = new ht()),
                    new ut(),
                    (v = new Vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ut),
                    (t.$_$.b = function t(r) {
                        var s = Ut(r, S(u(Xt)));
                        return Z(s, t), s;
                    }),
                    (t.$_$.c = It),
                    (t.$_$.d = s),
                    (t.$_$.e = dt),
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
            })(t.exports, s(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.343d91fa.js.map
