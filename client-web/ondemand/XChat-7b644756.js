(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-7b644756"],
    {
        222818: (t, s, r) => {
            !(function (t, s) {
                "use strict";
                var r,
                    i,
                    n,
                    e,
                    _,
                    h,
                    a,
                    v,
                    f = Math.imul,
                    u = s.$_$.te,
                    o = s.$_$.qd,
                    l = s.$_$.xe,
                    w = s.$_$.h2,
                    c = s.$_$.o6,
                    d = s.$_$.ve,
                    g = s.$_$.l2,
                    b = s.$_$.dj,
                    p = s.$_$.g,
                    $ = s.$_$.qb,
                    k = s.$_$.gb,
                    y = s.$_$.t,
                    m = s.$_$.w7,
                    x = s.$_$.rd,
                    q = s.$_$.q6,
                    j = s.$_$.o7,
                    S = s.$_$.se,
                    z = s.$_$.dk,
                    I = s.$_$.t7,
                    C = s.$_$.f2,
                    M = s.$_$.bd,
                    A = s.$_$.o3,
                    B = s.$_$.p3,
                    E = s.$_$.u3,
                    O = s.$_$.ue,
                    F = s.$_$.p8,
                    R = s.$_$.ad,
                    U = s.$_$.oe,
                    X = s.$_$.wf,
                    L = s.$_$.zc,
                    P = s.$_$.k8,
                    V = s.$_$.vf,
                    D = s.$_$.g8,
                    G = s.$_$.kj,
                    H = s.$_$.zg,
                    J = s.$_$.ti,
                    K = s.$_$.re,
                    N = s.$_$.t1,
                    Q = s.$_$.jd,
                    T = s.$_$.xd,
                    W = s.$_$.cj,
                    Y = s.$_$.p2,
                    Z = s.$_$.yc,
                    tt = s.$_$.zi,
                    st = s.$_$.a2,
                    rt = s.$_$.wd;
                function it() {}
                function nt(t, s, r, i, n, e, _, h) {
                    if (!(e < _)) {
                        throw w(l("Failed requirement."));
                    }
                    var a = e;
                    if (a < _)
                        do {
                            var v = a;
                            if (((a = (a + 1) | 0), !(n.t(v).s() >= i))) {
                                throw w(l("Failed requirement."));
                            }
                        } while (a < _);
                    var u = e,
                        o = n.t(u),
                        c = n.t((_ - 1) | 0),
                        b = -1;
                    if ((i === o.s() && ((b = h.t(u)), (u = (u + 1) | 0), (o = n.t(u))), o.t(i) !== c.t(i))) {
                        var p = 1,
                            $ = (u + 1) | 0;
                        if ($ < _)
                            do {
                                var k = $;
                                ($ = ($ + 1) | 0), n.t((k - 1) | 0).t(i) !== n.t(k).t(i) && (p = (p + 1) | 0);
                            } while ($ < _);
                        var y = s.g3(_t(r, t)).g3(d(2)),
                            m = f(p, 2),
                            x = y.g3(d(m));
                        r.gs(p), r.gs(b);
                        var q = u;
                        if (q < _)
                            do {
                                var j = q;
                                q = (q + 1) | 0;
                                var S = n.t(j).t(i);
                                if (j === u || S !== n.t((j - 1) | 0).t(i)) {
                                    var z = 255 & S;
                                    r.gs(z);
                                }
                            } while (q < _);
                        for (var I = new Bt(), C = u; C < _; ) {
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
                            ((C + 1) | 0) === A && ((i + 1) | 0) === n.t(C).s() ? r.gs(h.t(C)) : (r.gs(f(-1, x.g3(_t(I, t)).j1())), nt(t, x, I, (i + 1) | 0, n, C, A, h)), (C = A);
                        }
                        r.hs(I);
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
                            V = s.g3(_t(r, t)).g3(d(2)).g3(d(P)).g3(d(1));
                        r.gs(0 | -O), r.gs(b);
                        var D = i,
                            G = (i + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                r.gs(J);
                            } while (D < G);
                        if (((u + 1) | 0) === _) {
                            if (((i + O) | 0) !== n.t(u).s()) {
                                throw g(l("Check failed."));
                            }
                            r.gs(h.t(u));
                        } else {
                            var K = new Bt();
                            r.gs(f(-1, V.g3(_t(K, t)).j1())), nt(t, V, K, (i + O) | 0, n, u, _, h), r.hs(K);
                        }
                    }
                }
                function et(t, s, r, i, n, e, _, h, a) {
                    return (s = s === p ? new b(0, 0) : s), (i = i === p ? 0 : i), (e = e === p ? 0 : e), (_ = _ === p ? n.s() : _), nt(t, s, r, i, n, e, _, h);
                }
                function _t(t, s) {
                    return t.bs_1.j3(d(4));
                }
                function ht() {}
                function at(t, s) {
                    q.call(this), (this.ls_1 = t), (this.ms_1 = s);
                }
                function vt() {
                    return (t = S(u(ot))), ot.call(t), (t.ns_1 = new Int8Array(8192)), (t.rs_1 = !0), (t.qs_1 = !1), t;
                    var t;
                }
                function ft(t, s, r, i, n) {
                    return (function (t, s, r, i, n, e) {
                        return ot.call(e), (e.ns_1 = t), (e.os_1 = s), (e.ps_1 = r), (e.qs_1 = i), (e.rs_1 = n), e;
                    })(t, s, r, i, n, S(u(ot)));
                }
                function ut() {
                    (this.us_1 = 8192), (this.vs_1 = 1024);
                }
                function ot() {
                    (this.os_1 = 0), (this.ps_1 = 0), (this.qs_1 = !1), (this.rs_1 = !1), (this.ss_1 = null), (this.ts_1 = null);
                }
                function lt() {
                    return dt(), i;
                }
                function wt(t, s, r, i, n) {
                    dt();
                    var e = 0;
                    if (e < n)
                        do {
                            var _ = e;
                            if (((e = (e + 1) | 0), t[(_ + s) | 0] !== r[(_ + i) | 0])) return !1;
                        } while (e < n);
                    return !0;
                }
                function ct(t, s, r) {
                    if ((dt(), s.u3(r).d1(new b(0, 0)) < 0 || s.d1(t) > 0 || t.h3(s).d1(r) < 0)) throw new Ot("size=" + t.toString() + " offset=" + s.toString() + " byteCount=" + r.toString());
                }
                function dt() {
                    n || ((n = !0), new At(), (i = -1234567890));
                }
                function gt(t) {
                    var s = new Int8Array(f(4, t.length)),
                        r = 0,
                        i = t.length;
                    if (r < i)
                        do {
                            var n = r;
                            r = (r + 1) | 0;
                            var e = M(t, n);
                            if (B(e, A(128)) >= 0) {
                                for (var _ = n, h = t.length, a = n; a < h; ) {
                                    var v = M(t, a);
                                    if (B(v, A(128)) < 0) {
                                        var u = E(v),
                                            o = _;
                                        for (_ = (o + 1) | 0, s[o] = O(u), a = (a + 1) | 0; a < h && B(M(t, a), A(128)) < 0; ) {
                                            var l = a;
                                            a = (l + 1) | 0;
                                            var w = M(t, l),
                                                c = E(w),
                                                d = _;
                                            (_ = (d + 1) | 0), (s[d] = O(c));
                                        }
                                    } else if (B(v, A(2048)) < 0) {
                                        var g = E(v),
                                            b = _;
                                        (_ = (b + 1) | 0), (s[b] = O((g >> 6) | 192));
                                        var p = E(v),
                                            $ = _;
                                        (_ = ($ + 1) | 0), (s[$] = O((63 & p) | 128)), (a = (a + 1) | 0);
                                    } else if (A(55296) <= v && v <= A(57343)) {
                                        var k;
                                        if (B(v, A(56319)) > 0 || h <= ((a + 1) | 0)) k = !0;
                                        else {
                                            var y = M(t, (a + 1) | 0);
                                            k = !(A(56320) <= y && y <= A(57343));
                                        }
                                        if (k) {
                                            var m = _;
                                            (_ = (m + 1) | 0), (s[m] = 63), (a = (a + 1) | 0);
                                        } else {
                                            var x = E(v) << 10,
                                                q = M(t, (a + 1) | 0),
                                                j = (((x + E(q)) | 0) - 56613888) | 0,
                                                S = _;
                                            (_ = (S + 1) | 0), (s[S] = O((j >> 18) | 240));
                                            var z = _;
                                            (_ = (z + 1) | 0), (s[z] = O(((j >> 12) & 63) | 128));
                                            var I = _;
                                            (_ = (I + 1) | 0), (s[I] = O(((j >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (s[C] = O((63 & j) | 128)), (a = (a + 2) | 0);
                                        }
                                    } else {
                                        var R = E(v),
                                            U = _;
                                        (_ = (U + 1) | 0), (s[U] = O((R >> 12) | 224));
                                        var X = E(v),
                                            L = _;
                                        (_ = (L + 1) | 0), (s[L] = O(((X >> 6) & 63) | 128));
                                        var P = E(v),
                                            V = _;
                                        (_ = (V + 1) | 0), (s[V] = O((63 & P) | 128)), (a = (a + 1) | 0);
                                    }
                                }
                                return F(s, _);
                            }
                            var D = E(e);
                            s[n] = O(D);
                        } while (r < i);
                    return F(s, t.length);
                }
                function bt(t, s, r) {
                    if (((s = s === p ? 0 : s), (r = r === p ? t.length : r), s < 0 || r > t.length || s > r)) throw new Ot("size=" + t.length + " beginIndex=" + s + " endIndex=" + r);
                    for (var i = R((r - s) | 0), n = 0, e = s; e < r; ) {
                        var _ = t[e];
                        if (_ >= 0) {
                            var h = n;
                            for (n = (h + 1) | 0, i[h] = U(_), e = (e + 1) | 0; e < r && t[e] >= 0; ) {
                                var a = e;
                                e = (a + 1) | 0;
                                var v = n;
                                (n = (v + 1) | 0), (i[v] = U(t[a]));
                            }
                        } else if (_ >> 5 == -2) {
                            var f,
                                u = e,
                                o = e;
                            if (r <= ((o + 1) | 0)) {
                                var l = n;
                                (n = (l + 1) | 0), (i[l] = U(65533)), (f = 1);
                            } else {
                                var w = t[o],
                                    c = t[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var d = 3968 ^ c ^ (w << 6);
                                    if (d < 128) {
                                        var g = n;
                                        (n = (g + 1) | 0), (i[g] = U(65533));
                                    } else {
                                        var b = n;
                                        (n = (b + 1) | 0), (i[b] = U(d));
                                    }
                                    f = 2;
                                } else {
                                    var $ = n;
                                    (n = ($ + 1) | 0), (i[$] = U(65533)), (f = 1);
                                }
                            }
                            e = (u + f) | 0;
                        } else if (_ >> 4 == -2) {
                            var k,
                                y = e;
                            t: {
                                var m = e;
                                if (r <= ((m + 2) | 0)) {
                                    var x = n;
                                    if (((n = (x + 1) | 0), (i[x] = U(65533)), r <= ((m + 1) | 0) || !(128 == (192 & t[(m + 1) | 0])))) {
                                        k = 1;
                                        break t;
                                    }
                                    k = 2;
                                } else {
                                    var q = t[m],
                                        j = t[(m + 1) | 0];
                                    if (128 == (192 & j)) {
                                        var S = t[(m + 2) | 0];
                                        if (128 == (192 & S)) {
                                            var z = -123008 ^ S ^ (j << 6) ^ (q << 12);
                                            if (z < 2048) {
                                                var I = n;
                                                (n = (I + 1) | 0), (i[I] = U(65533));
                                            } else if (55296 <= z && z <= 57343) {
                                                var C = n;
                                                (n = (C + 1) | 0), (i[C] = U(65533));
                                            } else {
                                                var M = n;
                                                (n = (M + 1) | 0), (i[M] = U(z));
                                            }
                                            k = 3;
                                        } else {
                                            var B = n;
                                            (n = (B + 1) | 0), (i[B] = U(65533)), (k = 2);
                                        }
                                    } else {
                                        var E = n;
                                        (n = (E + 1) | 0), (i[E] = U(65533)), (k = 1);
                                    }
                                }
                            }
                            e = (y + k) | 0;
                        } else if (_ >> 3 == -2) {
                            var O,
                                F = e;
                            t: {
                                var L = e;
                                if (r <= ((L + 3) | 0)) {
                                    var P = n;
                                    if (((n = (P + 1) | 0), (i[P] = A(65533)), r <= ((L + 1) | 0) || !(128 == (192 & t[(L + 1) | 0])))) {
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
                                        var st = n;
                                        (n = (st + 1) | 0), (i[st] = A(65533)), (O = 1);
                                    }
                                }
                            }
                            e = (F + O) | 0;
                        } else {
                            var rt = n;
                            (n = (rt + 1) | 0), (i[rt] = A(65533)), (e = (e + 1) | 0);
                        }
                    }
                    return X(i, 0, n);
                }
                function pt(t, s) {
                    var r, i;
                    if ((yt(), s.d1(new b(0, 0)) > 0)) {
                        var n = s.h3(d(1));
                        i = 13 === t.gt(n);
                    } else i = !1;
                    if (i) {
                        var e = t.ht(s.h3(new b(1, 0)));
                        t.cs(new b(2, 0)), (r = e);
                    } else {
                        var _ = t.ht(s);
                        t.cs(new b(1, 0)), (r = _);
                    }
                    return r;
                }
                function $t(t, s, r) {
                    (r = r !== p && r), yt();
                    var i = t.as_1;
                    if (null == i) return r ? -2 : -1;
                    var n = i,
                        e = n,
                        _ = n.ns_1,
                        h = n.os_1,
                        a = n.ps_1,
                        v = s.ms_1,
                        u = 0,
                        o = -1;
                    t: for (;;) {
                        var l = u;
                        u = (l + 1) | 0;
                        var w = v[l],
                            c = u;
                        u = (c + 1) | 0;
                        var d,
                            g = v[c];
                        if ((-1 !== g && (o = g), null == e)) break t;
                        if (w < 0) {
                            var b = (u + f(-1, w)) | 0;
                            s: for (;;) {
                                var $ = h;
                                h = ($ + 1) | 0;
                                var k = u;
                                if (((u = (k + 1) | 0), (255 & _[$]) !== v[k])) return o;
                                var y = u === b;
                                if (h === a && ((h = (e = z(z(e).ss_1)).os_1), (_ = e.ns_1), (a = e.ps_1), e === n)) {
                                    if (!y) break t;
                                    e = null;
                                }
                                if (y) {
                                    d = v[u];
                                    break s;
                                }
                            }
                        } else {
                            var m = w,
                                x = h;
                            h = (x + 1) | 0;
                            var q = 255 & _[x],
                                j = (u + m) | 0;
                            s: for (;;) {
                                if (u === j) return o;
                                if (q === v[u]) {
                                    d = v[(u + m) | 0];
                                    break s;
                                }
                                u = (u + 1) | 0;
                            }
                            h === a && ((h = (e = z(e.ss_1)).os_1), (_ = e.ns_1), (a = e.ps_1), e === n && (e = null));
                        }
                        if (d >= 0) return d;
                        u = 0 | -d;
                    }
                    return r ? -2 : o;
                }
                function kt(t, s, r, i, n) {
                    yt();
                    for (var e = t, _ = s, h = e.ps_1, a = e.ns_1, v = i; v < n; ) {
                        if ((_ === h && ((a = (e = z(e.ss_1)).ns_1), (_ = e.os_1), (h = e.ps_1)), a[_] !== r[v])) return !1;
                        (_ = (_ + 1) | 0), (v = (v + 1) | 0);
                    }
                    return !0;
                }
                function yt() {
                    e || ((e = !0), Et("0123456789abcdef"));
                }
                function mt() {
                    return qt(), _;
                }
                function xt(t, s) {
                    return (
                        qt(),
                        (function (t, s) {
                            qt();
                            for (var r = 0, i = 0, n = t.length, e = 0; e < n; ) {
                                var _ = t[e];
                                if (_ >= 0) {
                                    var h,
                                        a = i;
                                    if (((i = (a + 1) | 0), a === s)) return r;
                                    var v = A(10);
                                    if (_ !== E(v)) {
                                        var f = A(13);
                                        h = !(_ === E(f));
                                    } else h = !1;
                                    if ((h && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (r = (r + (_ < 65536 ? 1 : 2)) | 0, e = (e + 1) | 0; e < n && t[e] >= 0; ) {
                                        var u = e;
                                        e = (u + 1) | 0;
                                        var o,
                                            l = t[u],
                                            w = i;
                                        if (((i = (w + 1) | 0), w === s)) return r;
                                        var c = A(10);
                                        if (l !== E(c)) {
                                            var d = A(13);
                                            o = !(l === E(d));
                                        } else o = !1;
                                        if ((o && ((0 <= l && l <= 31) || (127 <= l && l <= 159))) || 65533 === l) return -1;
                                        r = (r + (l < 65536 ? 1 : 2)) | 0;
                                    }
                                } else if (_ >> 5 == -2) {
                                    var g = e,
                                        b = e;
                                    if (n <= ((b + 1) | 0)) {
                                        var p = i;
                                        if (((i = (p + 1) | 0), p === s)) return r;
                                        var $ = A(10);
                                        if (65533 !== E($)) {
                                            var k = A(13);
                                            E(k);
                                        }
                                        return -1;
                                    }
                                    var y = t[b],
                                        m = t[(b + 1) | 0];
                                    if (128 != (192 & m)) {
                                        var x = i;
                                        if (((i = (x + 1) | 0), x === s)) return r;
                                        var q = A(10);
                                        if (65533 !== E(q)) {
                                            var j = A(13);
                                            E(j);
                                        }
                                        return -1;
                                    }
                                    var S = 3968 ^ m ^ (y << 6);
                                    if (S < 128) {
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
                                    if (S !== E(O)) {
                                        var F = A(13);
                                        M = !(S === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= S && S <= 31) || (127 <= S && S <= 159))) || 65533 === S) return -1;
                                    (r = (r + (S < 65536 ? 1 : 2)) | 0), (e = (g + 2) | 0);
                                } else if (_ >> 4 == -2) {
                                    var R,
                                        U = e;
                                    t: {
                                        var X = e;
                                        if (n <= ((X + 2) | 0)) {
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
                                                var nt = A(13);
                                                E(nt);
                                            }
                                            return -1;
                                        }
                                        var et,
                                            _t = i;
                                        if (((i = (_t + 1) | 0), _t === s)) return r;
                                        var ht = A(10);
                                        if (Y !== E(ht)) {
                                            var at = A(13);
                                            et = !(Y === E(at));
                                        } else et = !1;
                                        if ((et && ((0 <= Y && Y <= 31) || (127 <= Y && Y <= 159))) || 65533 === Y) return -1;
                                        (r = (r + (Y < 65536 ? 1 : 2)) | 0), (R = 3);
                                    }
                                    e = (U + R) | 0;
                                } else {
                                    if (_ >> 3 != -2) {
                                        var vt = i;
                                        if (((i = (vt + 1) | 0), vt === s)) return r;
                                        var ft = A(10);
                                        if (65533 !== E(ft)) {
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
                                            var ct = i;
                                            if (((i = (ct + 1) | 0), ct === s)) return r;
                                            var dt = A(10);
                                            if (65533 !== E(dt)) {
                                                var gt = A(13);
                                                E(gt);
                                            }
                                            return -1;
                                        }
                                        var bt = t[wt],
                                            pt = t[(wt + 1) | 0];
                                        if (128 != (192 & pt)) {
                                            var $t = i;
                                            if (((i = ($t + 1) | 0), $t === s)) return r;
                                            var kt = A(10);
                                            if (65533 !== E(kt)) {
                                                var yt = A(13);
                                                E(yt);
                                            }
                                            return -1;
                                        }
                                        var mt = t[(wt + 2) | 0];
                                        if (128 != (192 & mt)) {
                                            var xt = i;
                                            if (((i = (xt + 1) | 0), xt === s)) return r;
                                            var jt = A(10);
                                            if (65533 !== E(jt)) {
                                                var St = A(13);
                                                E(St);
                                            }
                                            return -1;
                                        }
                                        var zt = t[(wt + 3) | 0];
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
                                        var At = 3678080 ^ zt ^ (mt << 6) ^ (pt << 12) ^ (bt << 18);
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
                                    e = (lt + ot) | 0;
                                }
                            }
                            return r;
                        })(t, s)
                    );
                }
                function qt() {
                    h || ((h = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function jt(t, s) {
                    var r = (function (t, s, r, i) {
                        var n = r,
                            e = (i - 1) | 0;
                        for (; n <= e; ) {
                            var _ = (((n + e) | 0) >>> 1) | 0,
                                h = t[_];
                            if (h < s) n = (_ + 1) | 0;
                            else {
                                if (!(h > s)) return _;
                                e = (_ - 1) | 0;
                            }
                        }
                        return ((0 | -n) - 1) | 0;
                    })(t.nt_1, (s + 1) | 0, 0, t.mt_1.length);
                    return r >= 0 ? r : ~r;
                }
                function St() {
                    a = this;
                    var t = new Int8Array([]);
                    this.ot_1 = new It(t);
                }
                function zt() {
                    return null == a && new St(), a;
                }
                function It(t) {
                    zt(), (this.ds_1 = t), (this.es_1 = 0), (this.fs_1 = null);
                }
                function Ct(t) {
                    return new It(t.zt());
                }
                function Mt(t, s) {
                    It.call(this, zt().ot_1.ds_1), (this.mt_1 = t), (this.nt_1 = s);
                }
                function At() {
                    (this.eu_1 = null), (this.fu_1 = !1), (this.gu_1 = null), (this.hu_1 = new b(-1, -1)), (this.iu_1 = null), (this.ju_1 = -1), (this.ku_1 = -1);
                }
                function Bt() {
                    (this.as_1 = null), (this.bs_1 = new b(0, 0));
                }
                function Et(t) {
                    return gt(t);
                }
                function Ot(t) {
                    Y(t, this), Z(this, Ot);
                }
                function Ft() {
                    var t,
                        s = ((t = S(u(Rt))), Rt.call(t, null), t);
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
                    (this.sv_1 = t), (this.tv_1 = !1), (this.uv_1 = new Bt());
                }
                function Pt(t) {
                    (this.wv_1 = t), (this.xv_1 = !1), (this.yv_1 = new Bt());
                }
                function Vt() {
                    (this.at_1 = 0), (this.bt_1 = 0);
                }
                o(it, "BlackholeSink", it),
                    x(ht),
                    o(at, "Options", p, q, [q, j]),
                    x(ut),
                    o(ot, "Segment", vt),
                    x(St),
                    o(It, "ByteString", p, p, [J]),
                    o(Mt, "SegmentedByteString", p, It),
                    o(At, "UnsafeCursor", At),
                    o(Bt, "Buffer", Bt),
                    o(Ot, "ArrayIndexOutOfBoundsException", p, W),
                    o(
                        Xt,
                        "IOException",
                        function t() {
                            var s = ((r = S(u(Xt))), Xt.call(r, null, null), r);
                            var r;
                            return Z(s, t), s;
                        },
                        tt,
                    ),
                    o(Rt, "EOFException", Ft, Xt),
                    o(Lt, "RealBufferedSink"),
                    o(Pt, "RealBufferedSource"),
                    rt(Vt, "SegmentPool"),
                    (u(it).zr = function (t, s) {
                        return t.cs(s);
                    }),
                    (u(it).t9 = function () {}),
                    (u(it).e5 = function () {}),
                    (u(ht).is = function (t) {
                        if (0 === t.length) {
                            return new at([], new Int32Array([0, -1]));
                        }
                        var s = $(t);
                        k(s);
                        var r = s.s(),
                            i = y(r),
                            n = 0;
                        if (n < r)
                            do {
                                (n = (n + 1) | 0), i.k(-1);
                            } while (n < r);
                        for (var e = i, _ = 0, h = 0, a = t.length; h < a; ) {
                            var v = t[h];
                            h = (h + 1) | 0;
                            var f = _;
                            _ = (f + 1) | 0;
                            var u = m(s, v);
                            e.j2(u, f);
                        }
                        if (!(s.t(0).s() > 0)) {
                            throw w(l("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < s.s(); ) {
                            var c = s.t(o),
                                d = (o + 1) | 0;
                            t: for (; d < s.s(); ) {
                                var g = s.t(d);
                                if (!g.js(c)) break t;
                                if (g.s() === c.s()) {
                                    var b = "duplicate option: " + g.toString();
                                    throw w(l(b));
                                }
                                e.t(d) > e.t(o) ? (s.l2(d), e.l2(d)) : (d = (d + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var x = new Bt();
                        et(this, p, x, p, s, p, p, e);
                        for (var q = 0, j = _t(x).j1(), S = new Int32Array(j); q < j; ) (S[q] = x.ks()), (q = (q + 1) | 0);
                        var z = S;
                        return new at(t.slice(), z);
                    }),
                    (u(at).s = function () {
                        return this.ls_1.length;
                    }),
                    (u(at).t = function (t) {
                        return this.ls_1[t];
                    }),
                    (u(ot).ws = function () {
                        return (this.qs_1 = !0), ft(this.ns_1, this.os_1, this.ps_1, !0, !1);
                    }),
                    (u(ot).xs = function () {
                        var t = this.ss_1 !== this ? this.ss_1 : null;
                        return (z(this.ts_1).ss_1 = this.ss_1), (z(this.ss_1).ts_1 = this.ts_1), (this.ss_1 = null), (this.ts_1 = null), t;
                    }),
                    (u(ot).ys = function (t) {
                        return (t.ts_1 = this), (t.ss_1 = this.ss_1), (z(this.ss_1).ts_1 = t), (this.ss_1 = t), t;
                    }),
                    (u(ot).zs = function (t) {
                        if (!(t > 0 && t <= ((this.ps_1 - this.os_1) | 0))) {
                            throw w(l("byteCount out of range"));
                        }
                        var s;
                        if (t >= 1024) s = this.ws();
                        else {
                            s = v.ct();
                            var r = this.ns_1,
                                i = s.ns_1,
                                n = this.os_1,
                                e = (this.os_1 + t) | 0;
                            I(r, i, 0, n, e);
                        }
                        return (s.ps_1 = (s.os_1 + t) | 0), (this.os_1 = (this.os_1 + t) | 0), z(this.ts_1).ys(s), s;
                    }),
                    (u(ot).dt = function () {
                        if (this.ts_1 === this) {
                            throw g(l("cannot compact"));
                        }
                        if (!z(this.ts_1).rs_1) return c;
                        var t = (this.ps_1 - this.os_1) | 0;
                        if (t > ((((8192 - z(this.ts_1).ps_1) | 0) + (z(this.ts_1).qs_1 ? 0 : z(this.ts_1).os_1)) | 0)) return c;
                        this.et(z(this.ts_1), t), this.xs(), v.ft(this);
                    }),
                    (u(ot).et = function (t, s) {
                        if (!t.rs_1) {
                            throw g(l("only owner can write"));
                        }
                        if (((t.ps_1 + s) | 0) > 8192) {
                            if (t.qs_1) throw C();
                            if (((((t.ps_1 + s) | 0) - t.os_1) | 0) > 8192) throw C();
                            var r = t.ns_1,
                                i = t.ns_1,
                                n = t.os_1,
                                e = t.ps_1;
                            I(r, i, 0, n, e), (t.ps_1 = (t.ps_1 - t.os_1) | 0), (t.os_1 = 0);
                        }
                        var _ = this.ns_1,
                            h = t.ns_1,
                            a = t.ps_1,
                            v = this.os_1,
                            f = (this.os_1 + s) | 0;
                        I(_, h, a, v, f), (t.ps_1 = (t.ps_1 + s) | 0), (this.os_1 = (this.os_1 + s) | 0);
                    }),
                    (u(St).pt = function (t, s, r) {
                        var i = (function (t, s) {
                            return dt(), s === lt() ? t.length : s;
                        })(t, r);
                        return ct(d(t.length), d(s), d(i)), new It(P(t, s, (s + i) | 0));
                    }),
                    (u(St).qt = function (t, s, r, i) {
                        return (s = s === p ? 0 : s), (r = r === p ? lt() : r), i === p ? this.pt(t, s, r) : i.pt.call(this, t, s, r);
                    }),
                    (u(St).rt = function (t) {
                        var s = new It(Et(t));
                        return s.st(t), s;
                    }),
                    (u(It).tt = function (t) {}),
                    (u(It).st = function (t) {}),
                    (u(It).ut = function () {
                        var t = this.fs_1;
                        return null == t && ((t = bt(this.vt())), this.st(t)), t;
                    }),
                    (u(It).wt = function () {
                        for (var t = R(f(this.ds_1.length, 2)), s = 0, r = this.ds_1, i = 0, n = r.length; i < n; ) {
                            var e = r[i];
                            i = (i + 1) | 0;
                            var _ = s;
                            s = (_ + 1) | 0;
                            var h = mt();
                            t[_] = h[(e >> 4) & 15];
                            var a = s;
                            s = (a + 1) | 0;
                            var v = mt();
                            t[a] = v[15 & e];
                        }
                        return V(t);
                    }),
                    (u(It).xt = function (t) {
                        if (t >= this.s() || t < 0) throw new Ot("size=" + this.s() + " pos=" + t);
                        return this.ds_1[t];
                    }),
                    (u(It).t = function (t) {
                        return this.xt(t);
                    }),
                    (u(It).s = function () {
                        return this.yt();
                    }),
                    (u(It).yt = function () {
                        return this.ds_1.length;
                    }),
                    (u(It).zt = function () {
                        return this.ds_1.slice();
                    }),
                    (u(It).vt = function () {
                        return this.ds_1;
                    }),
                    (u(It).au = function (t, s, r) {
                        return (function (t, s, r, i) {
                            qt(), s.it(t.ds_1, r, i);
                        })(this, t, s, r);
                    }),
                    (u(It).bu = function (t, s, r, i) {
                        return s.cu(r, this.ds_1, t, i);
                    }),
                    (u(It).cu = function (t, s, r, i) {
                        return t >= 0 && t <= ((this.ds_1.length - i) | 0) && r >= 0 && r <= ((s.length - i) | 0) && wt(this.ds_1, t, s, r, i);
                    }),
                    (u(It).js = function (t) {
                        return this.bu(0, t, 0, t.s());
                    }),
                    (u(It).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.ds_1.length && t.cu(0, this.ds_1, 0, this.ds_1.length));
                    }),
                    (u(It).hashCode = function () {
                        var t,
                            s = this.es_1;
                        if (0 === s) {
                            var r = D(this.ds_1);
                            this.tt(r), (t = r);
                        } else t = s;
                        return t;
                    }),
                    (u(It).du = function (t) {
                        var s;
                        t: {
                            for (var r = this.s(), i = t.s(), n = 0, e = Math.min(r, i); n < e; ) {
                                var _ = 255 & this.t(n),
                                    h = 255 & t.t(n);
                                if (_ !== h) {
                                    s = _ < h ? -1 : 1;
                                    break t;
                                }
                                n = (n + 1) | 0;
                            }
                            r !== i ? (s = r < i ? -1 : 1) : (s = 0);
                        }
                        return s;
                    }),
                    (u(It).d = function (t) {
                        return this.du(t instanceof It ? t : G());
                    }),
                    (u(It).toString = function () {
                        var t, s, r;
                        if (0 !== this.ds_1.length) {
                            var i = xt(this.ds_1, 64);
                            if (-1 !== i) {
                                var n = this.ut(),
                                    e = n.substring(0, i),
                                    _ = H(H(H(e, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = i < n.length ? "[size=" + this.ds_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var h;
                                if (this.ds_1.length <= 64) h = "[hex=" + this.wt() + "]";
                                else {
                                    var a,
                                        v = this.ds_1.length,
                                        f = ((s = this), (r = 64), dt(), r === lt() ? s.s() : r);
                                    if (!(f <= this.ds_1.length)) {
                                        var u = "endIndex > length(" + this.ds_1.length + ")";
                                        throw w(l(u));
                                    }
                                    if (!(((f - 0) | 0) >= 0)) {
                                        throw w(l("endIndex < beginIndex"));
                                    }
                                    f !== this.ds_1.length ? (a = new It(P(this.ds_1, 0, f))) : (a = this), (h = "[size=" + v + " hex=" + a.wt() + "…]");
                                }
                                t = h;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (u(Mt).wt = function () {
                        return Ct(this).wt();
                    }),
                    (u(Mt).xt = function (t) {
                        ct(d(this.nt_1[(this.mt_1.length - 1) | 0]), d(t), new b(1, 0));
                        var s = jt(this, t),
                            r = 0 === s ? 0 : this.nt_1[(s - 1) | 0],
                            i = this.nt_1[(s + this.mt_1.length) | 0];
                        return this.mt_1[s][(((t - r) | 0) + i) | 0];
                    }),
                    (u(Mt).yt = function () {
                        return this.nt_1[(this.mt_1.length - 1) | 0];
                    }),
                    (u(Mt).zt = function () {
                        for (var t = new Int8Array(this.s()), s = 0, r = this.mt_1.length, i = 0, n = 0; i < r; ) {
                            var e = this.nt_1[(r + i) | 0],
                                _ = this.nt_1[i],
                                h = (_ - n) | 0,
                                a = this.mt_1[i];
                            I(a, t, s, e, (e + h) | 0), (s = (s + h) | 0), (n = _), (i = (i + 1) | 0);
                        }
                        return t;
                    }),
                    (u(Mt).au = function (t, s, r) {
                        for (var i = (s + r) | 0, n = jt(this, s), e = s; e < i; ) {
                            var _ = 0 === n ? 0 : this.nt_1[(n - 1) | 0],
                                h = (this.nt_1[n] - _) | 0,
                                a = this.nt_1[(this.mt_1.length + n) | 0],
                                v = (_ + h) | 0,
                                f = (Math.min(i, v) - e) | 0,
                                u = (a + ((e - _) | 0)) | 0,
                                o = ft(this.mt_1[n], u, (u + f) | 0, !0, !1);
                            null == t.as_1 ? ((o.ts_1 = o), (o.ss_1 = o.ts_1), (t.as_1 = o.ss_1)) : z(z(t.as_1).ts_1).ys(o), (e = (e + f) | 0), (n = (n + 1) | 0);
                        }
                        return (t.bs_1 = t.bs_1.g3(d(r))), c;
                    }),
                    (u(Mt).bu = function (t, s, r, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0)) n = !1;
                        else {
                            for (var e = r, _ = (t + i) | 0, h = jt(this, t), a = t; a < _; ) {
                                var v = 0 === h ? 0 : this.nt_1[(h - 1) | 0],
                                    f = (this.nt_1[h] - v) | 0,
                                    u = this.nt_1[(this.mt_1.length + h) | 0],
                                    o = (v + f) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (u + ((a - v) | 0)) | 0,
                                    c = this.mt_1[h];
                                if (!s.cu(e, c, w, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mt).cu = function (t, s, r, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0) || r < 0 || r > ((s.length - i) | 0)) n = !1;
                        else {
                            for (var e = r, _ = (t + i) | 0, h = jt(this, t), a = t; a < _; ) {
                                var v = 0 === h ? 0 : this.nt_1[(h - 1) | 0],
                                    f = (this.nt_1[h] - v) | 0,
                                    u = this.nt_1[(this.mt_1.length + h) | 0],
                                    o = (v + f) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (u + ((a - v) | 0)) | 0;
                                if (!wt(this.mt_1[h], w, s, e, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Mt).vt = function () {
                        return this.zt();
                    }),
                    (u(Mt).equals = function (t) {
                        return t === this || (t instanceof It && t.s() === this.s() && this.bu(0, t, 0, this.s()));
                    }),
                    (u(Mt).hashCode = function () {
                        var t,
                            s = this.es_1;
                        if (0 === s) {
                            s = 1;
                            for (var r = this.mt_1.length, i = 0, n = 0; i < r; ) {
                                for (var e = this.nt_1[(r + i) | 0], _ = this.nt_1[i], h = this.mt_1[i], a = e, v = (e + ((_ - n) | 0)) | 0; a < v; ) (s = (f(31, s) + h[a]) | 0), (a = (a + 1) | 0);
                                (n = _), (i = (i + 1) | 0);
                            }
                            this.tt(s), (t = s);
                        } else t = s;
                        return t;
                    }),
                    (u(Mt).toString = function () {
                        return Ct(this).toString();
                    }),
                    (u(At).e5 = function () {
                        if (null == this.eu_1) {
                            throw g(l("not attached to a buffer"));
                        }
                        (this.eu_1 = null), (this.gu_1 = null), (this.hu_1 = new b(-1, -1)), (this.iu_1 = null), (this.ju_1 = -1), (this.ku_1 = -1);
                    }),
                    (u(Bt).lu = function () {
                        return this;
                    }),
                    (u(Bt).mu = function () {
                        return this.bs_1.equals(new b(0, 0));
                    }),
                    (u(Bt).nu = function (t) {
                        if (this.bs_1.d1(t) < 0) throw new Rt(null);
                    }),
                    (u(Bt).ou = function (t) {
                        return this.bs_1.d1(t) >= 0;
                    }),
                    (u(Bt).pu = function (t, s, r) {
                        var i,
                            n = s,
                            e = r;
                        if ((ct(this.bs_1, n, e), e.equals(new b(0, 0)))) i = this;
                        else {
                            t.bs_1 = t.bs_1.g3(e);
                            for (var _ = this.as_1; n.d1(d((z(_).ps_1 - _.os_1) | 0)) >= 0; ) (n = n.h3(d((_.ps_1 - _.os_1) | 0))), (_ = _.ss_1);
                            for (; e.d1(new b(0, 0)) > 0; ) {
                                var h = z(_).ws();
                                h.os_1 = (h.os_1 + n.j1()) | 0;
                                var a = h,
                                    v = (h.os_1 + e.j1()) | 0,
                                    f = h.ps_1;
                                (a.ps_1 = Math.min(v, f)), null == t.as_1 ? ((h.ts_1 = h), (h.ss_1 = h.ts_1), (t.as_1 = h.ss_1)) : z(z(t.as_1).ts_1).ys(h), (e = e.h3(d((h.ps_1 - h.os_1) | 0))), (n = new b(0, 0)), (_ = _.ss_1);
                            }
                            i = this;
                        }
                        return i;
                    }),
                    (u(Bt).gt = function (t) {
                        var s;
                        ct(this.bs_1, t, new b(1, 0));
                        var r = this.as_1;
                        if (null != r) {
                            var i = r;
                            if (this.bs_1.h3(t).d1(t) < 0) {
                                for (var n = this.bs_1; n.d1(t) > 0; ) (i = z(i.ts_1)), (n = n.h3(d((i.ps_1 - i.os_1) | 0)));
                                var e = i,
                                    _ = n;
                                s = z(e).ns_1[K(e.os_1).g3(t).h3(_).j1()];
                            } else {
                                var h = new b(0, 0);
                                t: for (;;) {
                                    var a = h,
                                        v = (i.ps_1 - i.os_1) | 0,
                                        f = a.g3(d(v));
                                    if (f.d1(t) > 0) break t;
                                    (i = z(i.ss_1)), (h = f);
                                }
                                var u = i,
                                    o = h;
                                s = z(u).ns_1[K(u.os_1).g3(t).h3(o).j1()];
                            }
                        } else {
                            var l = new b(-1, -1);
                            s = z(null).ns_1[K(null.os_1).g3(t).h3(l).j1()];
                        }
                        return s;
                    }),
                    (u(Bt).qu = function () {
                        var t,
                            s = this.bs_1;
                        if (s.equals(new b(0, 0))) t = new b(0, 0);
                        else {
                            var r = z(z(this.as_1).ts_1);
                            r.ps_1 < 8192 && r.rs_1 && (s = s.h3(d((r.ps_1 - r.os_1) | 0))), (t = s);
                        }
                        return t;
                    }),
                    (u(Bt).ru = function () {
                        if (this.bs_1.equals(new b(0, 0))) throw Ft();
                        var t = z(this.as_1),
                            s = t.os_1,
                            r = t.ps_1,
                            i = s;
                        s = (i + 1) | 0;
                        var n = t.ns_1[i];
                        return (this.bs_1 = this.bs_1.h3(new b(1, 0))), s === r ? ((this.as_1 = t.xs()), v.ft(t)) : (t.os_1 = s), n;
                    }),
                    (u(Bt).ks = function () {
                        var t;
                        if (this.bs_1.d1(new b(4, 0)) < 0) throw Ft();
                        var s = z(this.as_1),
                            r = s.os_1,
                            i = s.ps_1;
                        if (d((i - r) | 0).d1(new b(4, 0)) < 0) {
                            t = ((255 & this.ru()) << 24) | ((255 & this.ru()) << 16) | ((255 & this.ru()) << 8) | (255 & this.ru());
                        } else {
                            var n = s.ns_1,
                                e = r,
                                _ = (r = (e + 1) | 0),
                                h = (r = (_ + 1) | 0),
                                a = (r = (h + 1) | 0);
                            r = (a + 1) | 0;
                            var f = ((255 & n[e]) << 24) | ((255 & n[_]) << 16) | ((255 & n[h]) << 8) | (255 & n[a]);
                            (this.bs_1 = this.bs_1.h3(new b(4, 0))), r === i ? ((this.as_1 = s.xs()), v.ft(s)) : (s.os_1 = r), (t = f);
                        }
                        return t;
                    }),
                    (u(Bt).su = function () {
                        return this.tu(this.bs_1);
                    }),
                    (u(Bt).tu = function (t) {
                        var s;
                        if (!(t.d1(new b(0, 0)) >= 0 && t.d1(new b(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.bs_1.d1(t) < 0) throw Ft();
                        if (t.d1(new b(4096, 0)) >= 0) {
                            var i = this.vu(t.j1());
                            this.cs(t), (s = i);
                        } else s = new It(this.uu(t));
                        return s;
                    }),
                    (u(Bt).wu = function () {
                        return this.ht(this.bs_1);
                    }),
                    (u(Bt).ht = function (t) {
                        var s;
                        if (!(t.d1(new b(0, 0)) >= 0 && t.d1(new b(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.bs_1.d1(t) < 0) throw Ft();
                        if (t.equals(new b(0, 0))) s = "";
                        else {
                            var i = z(this.as_1);
                            if (K(i.os_1).g3(t).d1(d(i.ps_1)) > 0) s = bt(this.uu(t));
                            else {
                                var n = bt(i.ns_1, i.os_1, (i.os_1 + t.j1()) | 0);
                                (i.os_1 = (i.os_1 + t.j1()) | 0), (this.bs_1 = this.bs_1.h3(t)), i.os_1 === i.ps_1 && ((this.as_1 = i.xs()), v.ft(i)), (s = n);
                            }
                        }
                        return s;
                    }),
                    (u(Bt).xu = function () {
                        return this.yu(new b(-1, 2147483647));
                    }),
                    (u(Bt).yu = function (t) {
                        var s;
                        if (!(t.d1(new b(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw w(l(r));
                        }
                        var i = t.equals(new b(-1, 2147483647)) ? new b(-1, 2147483647) : t.g3(new b(1, 0)),
                            n = this.zu(10, new b(0, 0), i);
                        if (n.equals(new b(-1, -1))) {
                            var e;
                            if (i.d1(this.bs_1) < 0) {
                                var _ = i.h3(d(1));
                                e = 13 === this.gt(_);
                            } else e = !1;
                            if (!(!!e && 10 === this.gt(i))) {
                                var h = new Bt(),
                                    a = new b(0, 0),
                                    v = this.bs_1,
                                    f = d(32),
                                    u = f.d1(v) <= 0 ? f : v;
                                this.pu(h, a, u);
                                var o = this.bs_1;
                                throw new Rt("\\n not found: limit=" + (o.d1(t) <= 0 ? o : t).toString() + " content=" + h.su().wt() + "…");
                            }
                            s = pt(this, i);
                        } else s = pt(this, n);
                        return s;
                    }),
                    (u(Bt).av = function (t) {
                        var s,
                            r = $t(this, t);
                        if (-1 !== r) {
                            var i = t.ls_1[r].s();
                            this.cs(d(i)), (s = r);
                        } else s = -1;
                        return s;
                    }),
                    (u(Bt).bv = function () {
                        return this.uu(this.bs_1);
                    }),
                    (u(Bt).uu = function (t) {
                        if (!(t.d1(new b(0, 0)) >= 0 && t.d1(new b(2147483647, 0)) <= 0)) {
                            var s = "byteCount: " + t.toString();
                            throw w(l(s));
                        }
                        if (this.bs_1.d1(t) < 0) throw Ft();
                        var r = new Int8Array(t.j1());
                        return this.cv(r), r;
                    }),
                    (u(Bt).cv = function (t) {
                        for (var s = 0; s < t.length; ) {
                            var r = this.dv(t, s, (t.length - s) | 0);
                            if (-1 === r) throw Ft();
                            s = (s + r) | 0;
                        }
                        return c;
                    }),
                    (u(Bt).dv = function (t, s, r) {
                        var i;
                        ct(d(t.length), d(s), d(r));
                        var n = this.as_1;
                        if (null != n) {
                            var e = n,
                                _ = (e.ps_1 - e.os_1) | 0,
                                h = Math.min(r, _),
                                a = e.ns_1,
                                f = e.os_1,
                                u = (e.os_1 + h) | 0;
                            I(a, t, s, f, u), (e.os_1 = (e.os_1 + h) | 0), (this.bs_1 = this.bs_1.h3(d(h))), e.os_1 === e.ps_1 && ((this.as_1 = e.xs()), v.ft(e)), (i = h);
                        } else i = -1;
                        return i;
                    }),
                    (u(Bt).i2 = function () {
                        return this.cs(this.bs_1), c;
                    }),
                    (u(Bt).cs = function (t) {
                        for (var s = t; s.d1(new b(0, 0)) > 0; ) {
                            var r = this.as_1;
                            if (null == r) throw Ft();
                            var i = r,
                                n = s,
                                e = (i.ps_1 - i.os_1) | 0,
                                _ = d(e),
                                h = (n.d1(_) <= 0 ? n : _).j1();
                            (this.bs_1 = this.bs_1.h3(d(h))), (s = s.h3(d(h))), (i.os_1 = (i.os_1 + h) | 0), i.os_1 === i.ps_1 && ((this.as_1 = i.xs()), v.ft(i));
                        }
                        return c;
                    }),
                    (u(Bt).ev = function (t) {
                        var s = t.s();
                        return t.au(this, 0, s), this;
                    }),
                    (u(Bt).fv = function (t) {
                        var s;
                        if (!(t >= 1 && t <= 8192)) {
                            throw w(l("unexpected capacity"));
                        }
                        if (null != this.as_1) {
                            var r = z(this.as_1).ts_1;
                            (((z(r).ps_1 + t) | 0) > 8192 || !r.rs_1) && (r = r.ys(v.ct())), (s = r);
                        } else {
                            var i = v.ct();
                            (this.as_1 = i), (i.ts_1 = i), (i.ss_1 = i), (s = i);
                        }
                        return s;
                    }),
                    (u(Bt).gv = function (t) {
                        return this.hv(t, 0, t.length);
                    }),
                    (u(Bt).hv = function (t, s, r) {
                        if (!(s >= 0)) throw w(l("beginIndex < 0: " + s));
                        if (!(r >= s)) throw w(l("endIndex < beginIndex: " + r + " < " + s));
                        if (!(r <= t.length)) {
                            var i = "endIndex > string.length: " + r + " > " + t.length;
                            throw w(l(i));
                        }
                        for (var n = s; n < r; ) {
                            var e = M(t, n),
                                _ = E(e);
                            if (_ < 128) {
                                var h = this.fv(1),
                                    a = h.ns_1,
                                    v = (h.ps_1 - n) | 0,
                                    f = (8192 - v) | 0,
                                    u = Math.min(r, f),
                                    o = n;
                                (n = (o + 1) | 0), (a[(v + o) | 0] = O(_));
                                t: for (; n < u; ) {
                                    var c = M(t, n);
                                    if ((_ = E(c)) >= 128) break t;
                                    var g = n;
                                    (n = (g + 1) | 0), (a[(v + g) | 0] = O(_));
                                }
                                var p = (((n + v) | 0) - h.ps_1) | 0;
                                (h.ps_1 = (h.ps_1 + p) | 0), (this.bs_1 = this.bs_1.g3(d(p)));
                            } else if (_ < 2048) {
                                var $ = this.fv(2);
                                ($.ns_1[$.ps_1] = O((_ >> 6) | 192)), ($.ns_1[($.ps_1 + 1) | 0] = O((63 & _) | 128)), ($.ps_1 = ($.ps_1 + 2) | 0), (this.bs_1 = this.bs_1.g3(new b(2, 0))), (n = (n + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var k = this.fv(3);
                                (k.ns_1[k.ps_1] = O((_ >> 12) | 224)), (k.ns_1[(k.ps_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (k.ns_1[(k.ps_1 + 2) | 0] = O((63 & _) | 128)), (k.ps_1 = (k.ps_1 + 3) | 0), (this.bs_1 = this.bs_1.g3(new b(3, 0))), (n = (n + 1) | 0);
                            } else {
                                var y;
                                if (((n + 1) | 0) < r) {
                                    var m = M(t, (n + 1) | 0);
                                    y = E(m);
                                } else y = 0;
                                var x = y;
                                if (_ > 56319 || !(56320 <= x && x <= 57343)) {
                                    var q = A(63),
                                        j = E(q);
                                    this.iv(j), (n = (n + 1) | 0);
                                } else {
                                    var S = (65536 + (((1023 & _) << 10) | (1023 & x))) | 0,
                                        z = this.fv(4);
                                    (z.ns_1[z.ps_1] = O((S >> 18) | 240)), (z.ns_1[(z.ps_1 + 1) | 0] = O(((S >> 12) & 63) | 128)), (z.ns_1[(z.ps_1 + 2) | 0] = O(((S >> 6) & 63) | 128)), (z.ns_1[(z.ps_1 + 3) | 0] = O((63 & S) | 128)), (z.ps_1 = (z.ps_1 + 4) | 0), (this.bs_1 = this.bs_1.g3(new b(4, 0))), (n = (n + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (u(Bt).jv = function (t) {
                        return this.it(t, 0, t.length);
                    }),
                    (u(Bt).it = function (t, s, r) {
                        var i = s;
                        ct(d(t.length), d(i), d(r));
                        for (var n = (i + r) | 0; i < n; ) {
                            var e = this.fv(1),
                                _ = (n - i) | 0,
                                h = (8192 - e.ps_1) | 0,
                                a = Math.min(_, h),
                                v = e.ns_1,
                                f = e.ps_1;
                            I(t, v, f, i, (i + a) | 0), (i = (i + a) | 0), (e.ps_1 = (e.ps_1 + a) | 0);
                        }
                        return (this.bs_1 = this.bs_1.g3(d(r))), this;
                    }),
                    (u(Bt).hs = function (t) {
                        var s = new b(0, 0);
                        t: for (;;) {
                            var r = t.kv(this, new b(8192, 0));
                            if (r.equals(new b(-1, -1))) break t;
                            s = s.g3(r);
                        }
                        return s;
                    }),
                    (u(Bt).iv = function (t) {
                        var s = this.fv(1),
                            r = s.ps_1;
                        return (s.ps_1 = (r + 1) | 0), (s.ns_1[r] = O(t)), (this.bs_1 = this.bs_1.g3(new b(1, 0))), this;
                    }),
                    (u(Bt).gs = function (t) {
                        var s = this.fv(4),
                            r = s.ns_1,
                            i = s.ps_1,
                            n = i;
                        (i = (n + 1) | 0), (r[n] = O((t >>> 24) & 255));
                        var e = i;
                        (i = (e + 1) | 0), (r[e] = O((t >>> 16) & 255));
                        var _ = i;
                        (i = (_ + 1) | 0), (r[_] = O((t >>> 8) & 255));
                        var h = i;
                        return (i = (h + 1) | 0), (r[h] = O(255 & t)), (s.ps_1 = i), (this.bs_1 = this.bs_1.g3(new b(4, 0))), this;
                    }),
                    (u(Bt).zr = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (t === this) {
                                throw w(l("source == this"));
                            }
                            for (ct(t.bs_1, new b(0, 0), i); i.d1(new b(0, 0)) > 0; ) {
                                if (i.d1(d((z(t.as_1).ps_1 - z(t.as_1).os_1) | 0)) < 0) {
                                    var n,
                                        e = null != this.as_1 ? z(this.as_1).ts_1 : null;
                                    if (null != e && e.rs_1) {
                                        var _ = i,
                                            h = e.ps_1,
                                            a = _.g3(d(h)),
                                            v = e.qs_1 ? 0 : e.os_1;
                                        n = a.h3(d(v)).d1(new b(8192, 0)) <= 0;
                                    } else n = !1;
                                    if (n) {
                                        z(t.as_1).et(e, i.j1()), (t.bs_1 = t.bs_1.h3(i)), (this.bs_1 = this.bs_1.g3(i)), (r = c);
                                        break t;
                                    }
                                    t.as_1 = z(t.as_1).zs(i.j1());
                                }
                                var f = t.as_1,
                                    u = d((z(f).ps_1 - f.os_1) | 0);
                                if (((t.as_1 = f.xs()), null == this.as_1)) (this.as_1 = f), (f.ts_1 = f), (f.ss_1 = f.ts_1);
                                else {
                                    var o = z(this.as_1).ts_1;
                                    (o = z(o).ys(f)).dt();
                                }
                                (t.bs_1 = t.bs_1.h3(u)), (this.bs_1 = this.bs_1.g3(u)), (i = i.h3(u));
                            }
                        }
                        return r;
                    }),
                    (u(Bt).kv = function (t, s) {
                        var r,
                            i = s;
                        if (!(i.d1(new b(0, 0)) >= 0)) {
                            var n = "byteCount < 0: " + i.toString();
                            throw w(l(n));
                        }
                        return this.bs_1.equals(new b(0, 0)) ? (r = new b(-1, -1)) : (i.d1(this.bs_1) > 0 && (i = this.bs_1), t.zr(this, i), (r = i)), r;
                    }),
                    (u(Bt).zu = function (t, s, r) {
                        var i;
                        t: {
                            var n = s,
                                e = r;
                            if (!(new b(0, 0).d1(n) <= 0 && n.d1(e) <= 0)) {
                                var _ = "size=" + this.bs_1.toString() + " fromIndex=" + n.toString() + " toIndex=" + e.toString();
                                throw w(l(_));
                            }
                            if ((e.d1(this.bs_1) > 0 && (e = this.bs_1), n.equals(e))) i = new b(-1, -1);
                            else {
                                var h = n,
                                    a = this.as_1;
                                if (null != a) {
                                    var v = a;
                                    if (this.bs_1.h3(h).d1(h) < 0) {
                                        for (var f = this.bs_1; f.d1(h) > 0; ) (v = z(v.ts_1)), (f = f.h3(d((v.ps_1 - v.os_1) | 0)));
                                        var u = v,
                                            o = f;
                                        if (null == u) {
                                            i = new b(-1, -1);
                                            break t;
                                        }
                                        for (var c = u, g = o; g.d1(e) < 0; ) {
                                            for (var p = c.ns_1, $ = d(c.ps_1), k = K(c.os_1).g3(e).h3(g), y = ($.d1(k) <= 0 ? $ : k).j1(), m = K(c.os_1).g3(n).h3(g).j1(); m < y; ) {
                                                if (p[m] === t) {
                                                    i = K((m - c.os_1) | 0).g3(g);
                                                    break t;
                                                }
                                                m = (m + 1) | 0;
                                            }
                                            (n = g = g.g3(d((c.ps_1 - c.os_1) | 0))), (c = z(c.ss_1));
                                        }
                                        i = new b(-1, -1);
                                    } else {
                                        var x = new b(0, 0);
                                        s: for (;;) {
                                            var q = x,
                                                j = (v.ps_1 - v.os_1) | 0,
                                                S = q.g3(d(j));
                                            if (S.d1(h) > 0) break s;
                                            (v = z(v.ss_1)), (x = S);
                                        }
                                        if (null != v) {
                                            for (var I = v, C = x; C.d1(e) < 0; ) {
                                                for (var M = I.ns_1, A = d(I.ps_1), B = K(I.os_1).g3(e).h3(C), E = (A.d1(B) <= 0 ? A : B).j1(), O = K(I.os_1).g3(n).h3(C).j1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        i = K((O - I.os_1) | 0).g3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (n = C = C.g3(d((I.ps_1 - I.os_1) | 0))), (I = z(I.ss_1));
                                            }
                                            i = new b(-1, -1);
                                        } else i = new b(-1, -1);
                                    }
                                } else {
                                    new b(-1, -1);
                                    i = new b(-1, -1);
                                }
                            }
                        }
                        return i;
                    }),
                    (u(Bt).lv = function (t) {
                        return this.mv(t, new b(0, 0));
                    }),
                    (u(Bt).mv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(t.s() > 0)) {
                                throw w(l("bytes is empty"));
                            }
                            if (!(i.d1(new b(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.as_1;
                            if (null != _) {
                                var h = _;
                                if (this.bs_1.h3(e).d1(e) < 0) {
                                    for (var a = this.bs_1; a.d1(e) > 0; ) (h = z(h.ts_1)), (a = a.h3(d((h.ps_1 - h.os_1) | 0)));
                                    var v = h,
                                        f = a;
                                    if (null == v) {
                                        r = new b(-1, -1);
                                        break t;
                                    }
                                    for (var u = v, o = f, c = t.vt(), g = c[0], p = t.s(), $ = this.bs_1.h3(d(p)).g3(new b(1, 0)); o.d1($) < 0; ) {
                                        var k = u.ns_1,
                                            y = u.ps_1,
                                            m = K(u.os_1).g3($).h3(o),
                                            x = d(y),
                                            q = (x.d1(m) <= 0 ? x : m).j1(),
                                            j = K(u.os_1).g3(i).h3(o).j1();
                                        if (j < q)
                                            do {
                                                var S = j;
                                                if (((j = (j + 1) | 0), k[S] === g && kt(u, (S + 1) | 0, c, 1, p))) {
                                                    r = K((S - u.os_1) | 0).g3(o);
                                                    break t;
                                                }
                                            } while (j < q);
                                        (i = o = o.g3(d((u.ps_1 - u.os_1) | 0))), (u = z(u.ss_1));
                                    }
                                    r = new b(-1, -1);
                                } else {
                                    var I = new b(0, 0);
                                    s: for (;;) {
                                        var C = I,
                                            M = (h.ps_1 - h.os_1) | 0,
                                            A = C.g3(d(M));
                                        if (A.d1(e) > 0) break s;
                                        (h = z(h.ss_1)), (I = A);
                                    }
                                    if (null != h) {
                                        for (var B = h, E = I, O = t.vt(), F = O[0], R = t.s(), U = this.bs_1.h3(d(R)).g3(new b(1, 0)); E.d1(U) < 0; ) {
                                            var X = B.ns_1,
                                                L = B.ps_1,
                                                P = K(B.os_1).g3(U).h3(E),
                                                V = d(L),
                                                D = (V.d1(P) <= 0 ? V : P).j1(),
                                                G = K(B.os_1).g3(i).h3(E).j1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && kt(B, (H + 1) | 0, O, 1, R))) {
                                                        r = K((H - B.os_1) | 0).g3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (i = E = E.g3(d((B.ps_1 - B.os_1) | 0))), (B = z(B.ss_1));
                                        }
                                        r = new b(-1, -1);
                                    } else r = new b(-1, -1);
                                }
                            } else {
                                new b(-1, -1);
                                r = new b(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (u(Bt).nv = function (t) {
                        return this.ov(t, new b(0, 0));
                    }),
                    (u(Bt).ov = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(i.d1(new b(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.as_1;
                            if (null != _) {
                                var h = _;
                                if (this.bs_1.h3(e).d1(e) < 0) {
                                    for (var a = this.bs_1; a.d1(e) > 0; ) (h = z(h.ts_1)), (a = a.h3(d((h.ps_1 - h.os_1) | 0)));
                                    var v = h,
                                        f = a;
                                    if (null == v) {
                                        r = new b(-1, -1);
                                        break t;
                                    }
                                    var u = v,
                                        o = f;
                                    if (2 === t.s())
                                        for (var c = t.t(0), g = t.t(1); o.d1(this.bs_1) < 0; ) {
                                            for (var p = u.ns_1, $ = K(u.os_1).g3(i).h3(o).j1(), k = u.ps_1; $ < k; ) {
                                                var y = p[$];
                                                if (y === c || y === g) {
                                                    r = K(($ - u.os_1) | 0).g3(o);
                                                    break t;
                                                }
                                                $ = ($ + 1) | 0;
                                            }
                                            (i = o = o.g3(d((u.ps_1 - u.os_1) | 0))), (u = z(u.ss_1));
                                        }
                                    else
                                        for (var m = t.vt(); o.d1(this.bs_1) < 0; ) {
                                            for (var x = u.ns_1, q = K(u.os_1).g3(i).h3(o).j1(), j = u.ps_1; q < j; ) {
                                                for (var S = x[q], I = 0, C = m.length; I < C; ) {
                                                    var M = m[I];
                                                    if (((I = (I + 1) | 0), S === M)) {
                                                        r = K((q - u.os_1) | 0).g3(o);
                                                        break t;
                                                    }
                                                }
                                                q = (q + 1) | 0;
                                            }
                                            (i = o = o.g3(d((u.ps_1 - u.os_1) | 0))), (u = z(u.ss_1));
                                        }
                                    r = new b(-1, -1);
                                } else {
                                    var A = new b(0, 0);
                                    s: for (;;) {
                                        var B = A,
                                            E = (h.ps_1 - h.os_1) | 0,
                                            O = B.g3(d(E));
                                        if (O.d1(e) > 0) break s;
                                        (h = z(h.ss_1)), (A = O);
                                    }
                                    if (null != h) {
                                        var F = h,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.d1(this.bs_1) < 0; ) {
                                                for (var L = F.ns_1, P = K(F.os_1).g3(i).h3(R).j1(), V = F.ps_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        r = K((P - F.os_1) | 0).g3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (i = R = R.g3(d((F.ps_1 - F.os_1) | 0))), (F = z(F.ss_1));
                                            }
                                        else
                                            for (var G = t.vt(); R.d1(this.bs_1) < 0; ) {
                                                for (var H = F.ns_1, J = K(F.os_1).g3(i).h3(R).j1(), N = F.ps_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            r = K((J - F.os_1) | 0).g3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (i = R = R.g3(d((F.ps_1 - F.os_1) | 0))), (F = z(F.ss_1));
                                            }
                                        r = new b(-1, -1);
                                    } else r = new b(-1, -1);
                                }
                            } else {
                                new b(-1, -1);
                                r = new b(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (u(Bt).pv = function (t, s) {
                        return this.qv(t, s, 0, s.s());
                    }),
                    (u(Bt).qv = function (t, s, r, i) {
                        var n;
                        t: if (t.d1(new b(0, 0)) < 0 || r < 0 || i < 0 || this.bs_1.h3(t).d1(d(i)) < 0 || ((s.s() - r) | 0) < i) n = !1;
                        else {
                            var e = 0;
                            if (e < i)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var h = t.g3(d(_));
                                    if (this.gt(h) !== s.t((r + _) | 0)) {
                                        n = !1;
                                        break t;
                                    }
                                } while (e < i);
                            n = !0;
                        }
                        return n;
                    }),
                    (u(Bt).t9 = function () {
                        return c;
                    }),
                    (u(Bt).e5 = function () {
                        return c;
                    }),
                    (u(Bt).equals = function (t) {
                        var s;
                        t: if (this !== t)
                            if (t instanceof Bt)
                                if (this.bs_1.equals(t.bs_1))
                                    if (this.bs_1.equals(new b(0, 0))) s = !0;
                                    else {
                                        for (var r, i = z(this.as_1), n = z(t.as_1), e = i.os_1, _ = n.os_1, h = new b(0, 0); h.d1(this.bs_1) < 0; ) {
                                            var a = (i.ps_1 - e) | 0,
                                                v = (n.ps_1 - _) | 0,
                                                f = Math.min(a, v);
                                            r = d(f);
                                            var u = new b(0, 0);
                                            if (u.d1(r) < 0)
                                                do {
                                                    u = u.g3(new b(1, 0));
                                                    var o = e;
                                                    e = (o + 1) | 0;
                                                    var l = _;
                                                    if (((_ = (l + 1) | 0), i.ns_1[o] !== n.ns_1[l])) {
                                                        s = !1;
                                                        break t;
                                                    }
                                                } while (u.d1(r) < 0);
                                            e === i.ps_1 && (e = (i = z(i.ss_1)).os_1), _ === n.ps_1 && (_ = (n = z(n.ss_1)).os_1), (h = h.g3(r));
                                        }
                                        s = !0;
                                    }
                                else s = !1;
                            else s = !1;
                        else s = !0;
                        return s;
                    }),
                    (u(Bt).hashCode = function () {
                        var t,
                            s = this.as_1;
                        if (null != s) {
                            var r = s,
                                i = 1;
                            do {
                                for (var n = r.os_1, e = r.ps_1; n < e; ) (i = (f(31, i) + r.ns_1[n]) | 0), (n = (n + 1) | 0);
                                r = z(r.ss_1);
                            } while (r !== this.as_1);
                            t = i;
                        } else t = 0;
                        return t;
                    }),
                    (u(Bt).toString = function () {
                        return this.rv().toString();
                    }),
                    (u(Bt).rv = function () {
                        if (!(this.bs_1.d1(new b(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.bs_1.toString();
                            throw g(l(t));
                        }
                        return this.vu(this.bs_1.j1());
                    }),
                    (u(Bt).vu = function (t) {
                        var s;
                        if (0 !== t) {
                            ct(this.bs_1, new b(0, 0), d(t));
                            for (var r = 0, i = 0, n = this.as_1; r < t; ) {
                                if (z(n).ps_1 === n.os_1) throw N("s.limit == s.pos");
                                (r = (r + ((n.ps_1 - n.os_1) | 0)) | 0), (i = (i + 1) | 0), (n = n.ss_1);
                            }
                            var e = Q(Array(i), null),
                                _ = new Int32Array(f(i, 2));
                            for (r = 0, i = 0, n = this.as_1; r < t; ) {
                                e[i] = z(n).ns_1;
                                var h = (r = (r + ((n.ps_1 - n.os_1) | 0)) | 0);
                                (_[i] = Math.min(h, t)), (_[(i + e.length) | 0] = n.os_1), (n.qs_1 = !0), (i = (i + 1) | 0), (n = n.ss_1);
                            }
                            s = new Mt(T(e) ? e : G(), _);
                        } else s = zt().ot_1;
                        return s;
                    }),
                    (u(Lt).zr = function (t, s) {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.zr(t, s), this.vv(), c;
                    }),
                    (u(Lt).ev = function (t) {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.ev(t), this.vv();
                    }),
                    (u(Lt).gv = function (t) {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.gv(t), this.vv();
                    }),
                    (u(Lt).hv = function (t, s, r) {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.hv(t, s, r), this.vv();
                    }),
                    (u(Lt).iv = function (t) {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.iv(t), this.vv();
                    }),
                    (u(Lt).vv = function () {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        var t = this.uv_1.qu();
                        return t.d1(new b(0, 0)) > 0 && this.sv_1.zr(this.uv_1, t), this;
                    }),
                    (u(Lt).t9 = function () {
                        if (this.tv_1) {
                            throw g(l("closed"));
                        }
                        return this.uv_1.bs_1.d1(new b(0, 0)) > 0 && this.sv_1.zr(this.uv_1, this.uv_1.bs_1), this.sv_1.t9(), c;
                    }),
                    (u(Lt).e5 = function () {
                        var t;
                        if (this.tv_1) t = c;
                        else {
                            var s = null;
                            try {
                                this.uv_1.bs_1.d1(new b(0, 0)) > 0 && this.sv_1.zr(this.uv_1, this.uv_1.bs_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                s = t;
                            }
                            try {
                                this.sv_1.e5();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == s && (s = t);
                            }
                            if (((this.tv_1 = !0), null != s)) throw s;
                        }
                        return t;
                    }),
                    (u(Lt).toString = function () {
                        return "buffer(" + l(this.sv_1) + ")";
                    }),
                    (u(Pt).lu = function () {
                        return this.yv_1;
                    }),
                    (u(Pt).kv = function (t, s) {
                        var r;
                        t: {
                            if (!(s.d1(new b(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + s.toString();
                                throw w(l(i));
                            }
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            if (this.yv_1.bs_1.equals(new b(0, 0))) {
                                if (s.equals(new b(0, 0))) {
                                    r = new b(0, 0);
                                    break t;
                                }
                                if (this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) {
                                    r = new b(-1, -1);
                                    break t;
                                }
                            }
                            var n = this.yv_1.bs_1,
                                e = s.d1(n) <= 0 ? s : n;
                            r = this.yv_1.kv(t, e);
                        }
                        return r;
                    }),
                    (u(Pt).mu = function () {
                        if (this.xv_1) {
                            throw g(l("closed"));
                        }
                        return this.yv_1.mu() && this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1));
                    }),
                    (u(Pt).nu = function (t) {
                        if (!this.ou(t)) throw Ft();
                    }),
                    (u(Pt).ou = function (t) {
                        var s;
                        t: {
                            if (!(t.d1(new b(0, 0)) >= 0)) {
                                var r = "byteCount < 0: " + t.toString();
                                throw w(l(r));
                            }
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            for (; this.yv_1.bs_1.d1(t) < 0; )
                                if (this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) {
                                    s = !1;
                                    break t;
                                }
                            s = !0;
                        }
                        return s;
                    }),
                    (u(Pt).av = function (t) {
                        var s;
                        t: {
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            for (;;) {
                                var r = $t(this.yv_1, t, !0);
                                switch (r) {
                                    case -1:
                                        s = -1;
                                        break t;
                                    case -2:
                                        if (this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) {
                                            s = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var i = t.ls_1[r].s();
                                        this.yv_1.cs(d(i)), (s = r);
                                        break t;
                                }
                            }
                        }
                        return s;
                    }),
                    (u(Pt).xu = function () {
                        return this.yu(new b(-1, 2147483647));
                    }),
                    (u(Pt).yu = function (t) {
                        var s;
                        if (!(t.d1(new b(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw w(l(r));
                        }
                        var i = t.equals(new b(-1, 2147483647)) ? new b(-1, 2147483647) : t.g3(d(1)),
                            n = this.zu(10, new b(0, 0), i);
                        if (n.equals(new b(-1, -1))) {
                            var e, _;
                            if (i.d1(new b(-1, 2147483647)) < 0 && this.ou(i)) {
                                var h = i.h3(d(1));
                                _ = 13 === this.yv_1.gt(h);
                            } else _ = !1;
                            if (_) {
                                var a = i.g3(d(1));
                                e = this.ou(a);
                            } else e = !1;
                            if (!(!!e && 10 === this.yv_1.gt(i))) {
                                var v = new Bt(),
                                    f = new b(0, 0),
                                    u = this.yv_1.bs_1,
                                    o = d(32),
                                    c = o.d1(u) <= 0 ? o : u;
                                this.yv_1.pu(v, f, c);
                                var g = this.yv_1.bs_1;
                                throw new Rt("\\n not found: limit=" + (g.d1(t) <= 0 ? g : t).toString() + " content=" + v.su().wt() + "…");
                            }
                            s = pt(this.yv_1, i);
                        } else s = pt(this.yv_1, n);
                        return s;
                    }),
                    (u(Pt).cs = function (t) {
                        var s = t;
                        if (this.xv_1) {
                            throw g(l("closed"));
                        }
                        for (; s.d1(new b(0, 0)) > 0; ) {
                            if (this.yv_1.bs_1.equals(new b(0, 0)) && this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) throw Ft();
                            var r = s,
                                i = this.yv_1.bs_1,
                                n = r.d1(i) <= 0 ? r : i;
                            this.yv_1.cs(n), (s = s.h3(n));
                        }
                        return c;
                    }),
                    (u(Pt).zu = function (t, s, r) {
                        var i;
                        t: {
                            var n = s;
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            if (!(new b(0, 0).d1(n) <= 0 && n.d1(r) <= 0)) {
                                var e = "fromIndex=" + n.toString() + " toIndex=" + r.toString();
                                throw w(l(e));
                            }
                            for (; n.d1(r) < 0; ) {
                                var _ = this.yv_1.zu(t, n, r);
                                if (!_.equals(new b(-1, -1))) {
                                    i = _;
                                    break t;
                                }
                                var h = this.yv_1.bs_1;
                                if (h.d1(r) >= 0 || this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) {
                                    i = new b(-1, -1);
                                    break t;
                                }
                                var a = n;
                                n = a.d1(h) >= 0 ? a : h;
                            }
                            i = new b(-1, -1);
                        }
                        return i;
                    }),
                    (u(Pt).nv = function (t) {
                        return this.ov(t, new b(0, 0));
                    }),
                    (u(Pt).ov = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            for (;;) {
                                var n = this.yv_1.ov(t, i);
                                if (!n.equals(new b(-1, -1))) {
                                    r = n;
                                    break t;
                                }
                                var e = this.yv_1.bs_1;
                                if (this.wv_1.kv(this.yv_1, new b(8192, 0)).equals(new b(-1, -1))) {
                                    r = new b(-1, -1);
                                    break t;
                                }
                                var _ = i;
                                i = _.d1(e) >= 0 ? _ : e;
                            }
                        }
                        return r;
                    }),
                    (u(Pt).pv = function (t, s) {
                        return this.qv(t, s, 0, s.s());
                    }),
                    (u(Pt).qv = function (t, s, r, i) {
                        var n;
                        t: {
                            if (this.xv_1) {
                                throw g(l("closed"));
                            }
                            if (t.d1(new b(0, 0)) < 0 || r < 0 || i < 0 || ((s.s() - r) | 0) < i) n = !1;
                            else {
                                var e = 0;
                                if (e < i)
                                    do {
                                        var _ = e;
                                        e = (e + 1) | 0;
                                        var h = t.g3(d(_)),
                                            a = h.g3(d(1));
                                        if (!this.ou(a)) {
                                            n = !1;
                                            break t;
                                        }
                                        if (this.yv_1.gt(h) !== s.t((r + _) | 0)) {
                                            n = !1;
                                            break t;
                                        }
                                    } while (e < i);
                                n = !0;
                            }
                        }
                        return n;
                    }),
                    (u(Pt).e5 = function () {
                        var t;
                        return this.xv_1 ? (t = c) : ((this.xv_1 = !0), this.wv_1.e5(), this.yv_1.i2()), t;
                    }),
                    (u(Pt).toString = function () {
                        return "buffer(" + l(this.wv_1) + ")";
                    }),
                    (u(Vt).ct = function () {
                        return vt();
                    }),
                    (u(Vt).ft = function (t) {}),
                    (r = new ht()),
                    new ut(),
                    (v = new Vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ut),
                    (t.$_$.b = function t(s) {
                        var r = Ut(s, S(u(Xt)));
                        return Z(r, t), r;
                    }),
                    (t.$_$.c = zt),
                    (t.$_$.d = r),
                    (t.$_$.e = gt),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.45c162ba.js.map
