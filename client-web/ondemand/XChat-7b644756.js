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
                    u = Math.imul,
                    f = s.$_$.ue,
                    o = s.$_$.rd,
                    l = s.$_$.ye,
                    w = s.$_$.h2,
                    c = s.$_$.o6,
                    d = s.$_$.we,
                    g = s.$_$.l2,
                    q = s.$_$.ej,
                    $ = s.$_$.g,
                    k = s.$_$.rb,
                    p = s.$_$.hb,
                    b = s.$_$.t,
                    y = s.$_$.x7,
                    m = s.$_$.sd,
                    x = s.$_$.q6,
                    S = s.$_$.o7,
                    z = s.$_$.te,
                    I = s.$_$.ek,
                    j = s.$_$.t7,
                    C = s.$_$.f2,
                    M = s.$_$.cd,
                    A = s.$_$.o3,
                    B = s.$_$.p3,
                    E = s.$_$.u3,
                    O = s.$_$.ve,
                    F = s.$_$.q8,
                    R = s.$_$.bd,
                    U = s.$_$.pe,
                    X = s.$_$.xf,
                    L = s.$_$.ad,
                    P = s.$_$.l8,
                    V = s.$_$.wf,
                    D = s.$_$.h8,
                    G = s.$_$.lj,
                    H = s.$_$.ah,
                    J = s.$_$.ui,
                    K = s.$_$.se,
                    N = s.$_$.t1,
                    Q = s.$_$.kd,
                    T = s.$_$.yd,
                    W = s.$_$.dj,
                    Y = s.$_$.p2,
                    Z = s.$_$.zc,
                    tt = s.$_$.aj,
                    st = s.$_$.a2,
                    rt = s.$_$.xd;
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
                    var f = e,
                        o = n.t(f),
                        c = n.t((_ - 1) | 0),
                        q = -1;
                    if ((i === o.s() && ((q = h.t(f)), (f = (f + 1) | 0), (o = n.t(f))), o.t(i) !== c.t(i))) {
                        var $ = 1,
                            k = (f + 1) | 0;
                        if (k < _)
                            do {
                                var p = k;
                                (k = (k + 1) | 0), n.t((p - 1) | 0).t(i) !== n.t(p).t(i) && ($ = ($ + 1) | 0);
                            } while (k < _);
                        var b = s.g3(_t(r, t)).g3(d(2)),
                            y = u($, 2),
                            m = b.g3(d(y));
                        r.is($), r.is(q);
                        var x = f;
                        if (x < _)
                            do {
                                var S = x;
                                x = (x + 1) | 0;
                                var z = n.t(S).t(i);
                                if (S === f || z !== n.t((S - 1) | 0).t(i)) {
                                    var I = 255 & z;
                                    r.is(I);
                                }
                            } while (x < _);
                        for (var j = new Bt(), C = f; C < _; ) {
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
                            ((C + 1) | 0) === A && ((i + 1) | 0) === n.t(C).s() ? r.is(h.t(C)) : (r.is(u(-1, m.g3(_t(j, t)).k1())), nt(t, m, j, (i + 1) | 0, n, C, A, h)), (C = A);
                        }
                        r.js(j);
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
                        r.is(0 | -O), r.is(q);
                        var D = i,
                            G = (i + O) | 0;
                        if (D < G)
                            do {
                                var H = D;
                                D = (D + 1) | 0;
                                var J = 255 & o.t(H);
                                r.is(J);
                            } while (D < G);
                        if (((f + 1) | 0) === _) {
                            if (((i + O) | 0) !== n.t(f).s()) {
                                throw g(l("Check failed."));
                            }
                            r.is(h.t(f));
                        } else {
                            var K = new Bt();
                            r.is(u(-1, V.g3(_t(K, t)).k1())), nt(t, V, K, (i + O) | 0, n, f, _, h), r.js(K);
                        }
                    }
                }
                function et(t, s, r, i, n, e, _, h, a) {
                    return (s = s === $ ? new q(0, 0) : s), (i = i === $ ? 0 : i), (e = e === $ ? 0 : e), (_ = _ === $ ? n.s() : _), nt(t, s, r, i, n, e, _, h);
                }
                function _t(t, s) {
                    return t.ds_1.j3(d(4));
                }
                function ht() {}
                function at(t, s) {
                    x.call(this), (this.ns_1 = t), (this.os_1 = s);
                }
                function vt() {
                    return (t = z(f(ot))), ot.call(t), (t.ps_1 = new Int8Array(8192)), (t.ts_1 = !0), (t.ss_1 = !1), t;
                    var t;
                }
                function ut(t, s, r, i, n) {
                    return (function (t, s, r, i, n, e) {
                        return ot.call(e), (e.ps_1 = t), (e.qs_1 = s), (e.rs_1 = r), (e.ss_1 = i), (e.ts_1 = n), e;
                    })(t, s, r, i, n, z(f(ot)));
                }
                function ft() {
                    (this.ws_1 = 8192), (this.xs_1 = 1024);
                }
                function ot() {
                    (this.qs_1 = 0), (this.rs_1 = 0), (this.ss_1 = !1), (this.ts_1 = !1), (this.us_1 = null), (this.vs_1 = null);
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
                    if ((dt(), s.u3(r).e1(new q(0, 0)) < 0 || s.e1(t) > 0 || t.h3(s).e1(r) < 0)) throw new Ot("size=" + t.toString() + " offset=" + s.toString() + " byteCount=" + r.toString());
                }
                function dt() {
                    n || ((n = !0), new At(), (i = -1234567890));
                }
                function gt(t) {
                    var s = new Int8Array(u(4, t.length)),
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
                                        var f = E(v),
                                            o = _;
                                        for (_ = (o + 1) | 0, s[o] = O(f), a = (a + 1) | 0; a < h && B(M(t, a), A(128)) < 0; ) {
                                            var l = a;
                                            a = (l + 1) | 0;
                                            var w = M(t, l),
                                                c = E(w),
                                                d = _;
                                            (_ = (d + 1) | 0), (s[d] = O(c));
                                        }
                                    } else if (B(v, A(2048)) < 0) {
                                        var g = E(v),
                                            q = _;
                                        (_ = (q + 1) | 0), (s[q] = O((g >> 6) | 192));
                                        var $ = E(v),
                                            k = _;
                                        (_ = (k + 1) | 0), (s[k] = O((63 & $) | 128)), (a = (a + 1) | 0);
                                    } else if (A(55296) <= v && v <= A(57343)) {
                                        var p;
                                        if (B(v, A(56319)) > 0 || h <= ((a + 1) | 0)) p = !0;
                                        else {
                                            var b = M(t, (a + 1) | 0);
                                            p = !(A(56320) <= b && b <= A(57343));
                                        }
                                        if (p) {
                                            var y = _;
                                            (_ = (y + 1) | 0), (s[y] = 63), (a = (a + 1) | 0);
                                        } else {
                                            var m = E(v) << 10,
                                                x = M(t, (a + 1) | 0),
                                                S = (((m + E(x)) | 0) - 56613888) | 0,
                                                z = _;
                                            (_ = (z + 1) | 0), (s[z] = O((S >> 18) | 240));
                                            var I = _;
                                            (_ = (I + 1) | 0), (s[I] = O(((S >> 12) & 63) | 128));
                                            var j = _;
                                            (_ = (j + 1) | 0), (s[j] = O(((S >> 6) & 63) | 128));
                                            var C = _;
                                            (_ = (C + 1) | 0), (s[C] = O((63 & S) | 128)), (a = (a + 2) | 0);
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
                function qt(t, s, r) {
                    if (((s = s === $ ? 0 : s), (r = r === $ ? t.length : r), s < 0 || r > t.length || s > r)) throw new Ot("size=" + t.length + " beginIndex=" + s + " endIndex=" + r);
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
                            var u,
                                f = e,
                                o = e;
                            if (r <= ((o + 1) | 0)) {
                                var l = n;
                                (n = (l + 1) | 0), (i[l] = U(65533)), (u = 1);
                            } else {
                                var w = t[o],
                                    c = t[(o + 1) | 0];
                                if (128 == (192 & c)) {
                                    var d = 3968 ^ c ^ (w << 6);
                                    if (d < 128) {
                                        var g = n;
                                        (n = (g + 1) | 0), (i[g] = U(65533));
                                    } else {
                                        var q = n;
                                        (n = (q + 1) | 0), (i[q] = U(d));
                                    }
                                    u = 2;
                                } else {
                                    var k = n;
                                    (n = (k + 1) | 0), (i[k] = U(65533)), (u = 1);
                                }
                            }
                            e = (f + u) | 0;
                        } else if (_ >> 4 == -2) {
                            var p,
                                b = e;
                            t: {
                                var y = e;
                                if (r <= ((y + 2) | 0)) {
                                    var m = n;
                                    if (((n = (m + 1) | 0), (i[m] = U(65533)), r <= ((y + 1) | 0) || !(128 == (192 & t[(y + 1) | 0])))) {
                                        p = 1;
                                        break t;
                                    }
                                    p = 2;
                                } else {
                                    var x = t[y],
                                        S = t[(y + 1) | 0];
                                    if (128 == (192 & S)) {
                                        var z = t[(y + 2) | 0];
                                        if (128 == (192 & z)) {
                                            var I = -123008 ^ z ^ (S << 6) ^ (x << 12);
                                            if (I < 2048) {
                                                var j = n;
                                                (n = (j + 1) | 0), (i[j] = U(65533));
                                            } else if (55296 <= I && I <= 57343) {
                                                var C = n;
                                                (n = (C + 1) | 0), (i[C] = U(65533));
                                            } else {
                                                var M = n;
                                                (n = (M + 1) | 0), (i[M] = U(I));
                                            }
                                            p = 3;
                                        } else {
                                            var B = n;
                                            (n = (B + 1) | 0), (i[B] = U(65533)), (p = 2);
                                        }
                                    } else {
                                        var E = n;
                                        (n = (E + 1) | 0), (i[E] = U(65533)), (p = 1);
                                    }
                                }
                            }
                            e = (b + p) | 0;
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
                function $t(t, s) {
                    var r, i;
                    if ((bt(), s.e1(new q(0, 0)) > 0)) {
                        var n = s.h3(d(1));
                        i = 13 === t.it(n);
                    } else i = !1;
                    if (i) {
                        var e = t.jt(s.h3(new q(1, 0)));
                        t.es(new q(2, 0)), (r = e);
                    } else {
                        var _ = t.jt(s);
                        t.es(new q(1, 0)), (r = _);
                    }
                    return r;
                }
                function kt(t, s, r) {
                    (r = r !== $ && r), bt();
                    var i = t.cs_1;
                    if (null == i) return r ? -2 : -1;
                    var n = i,
                        e = n,
                        _ = n.ps_1,
                        h = n.qs_1,
                        a = n.rs_1,
                        v = s.os_1,
                        f = 0,
                        o = -1;
                    t: for (;;) {
                        var l = f;
                        f = (l + 1) | 0;
                        var w = v[l],
                            c = f;
                        f = (c + 1) | 0;
                        var d,
                            g = v[c];
                        if ((-1 !== g && (o = g), null == e)) break t;
                        if (w < 0) {
                            var q = (f + u(-1, w)) | 0;
                            s: for (;;) {
                                var k = h;
                                h = (k + 1) | 0;
                                var p = f;
                                if (((f = (p + 1) | 0), (255 & _[k]) !== v[p])) return o;
                                var b = f === q;
                                if (h === a && ((h = (e = I(I(e).us_1)).qs_1), (_ = e.ps_1), (a = e.rs_1), e === n)) {
                                    if (!b) break t;
                                    e = null;
                                }
                                if (b) {
                                    d = v[f];
                                    break s;
                                }
                            }
                        } else {
                            var y = w,
                                m = h;
                            h = (m + 1) | 0;
                            var x = 255 & _[m],
                                S = (f + y) | 0;
                            s: for (;;) {
                                if (f === S) return o;
                                if (x === v[f]) {
                                    d = v[(f + y) | 0];
                                    break s;
                                }
                                f = (f + 1) | 0;
                            }
                            h === a && ((h = (e = I(e.us_1)).qs_1), (_ = e.ps_1), (a = e.rs_1), e === n && (e = null));
                        }
                        if (d >= 0) return d;
                        f = 0 | -d;
                    }
                    return r ? -2 : o;
                }
                function pt(t, s, r, i, n) {
                    bt();
                    for (var e = t, _ = s, h = e.rs_1, a = e.ps_1, v = i; v < n; ) {
                        if ((_ === h && ((a = (e = I(e.us_1)).ps_1), (_ = e.qs_1), (h = e.rs_1)), a[_] !== r[v])) return !1;
                        (_ = (_ + 1) | 0), (v = (v + 1) | 0);
                    }
                    return !0;
                }
                function bt() {
                    e || ((e = !0), Et("0123456789abcdef"));
                }
                function yt() {
                    return xt(), _;
                }
                function mt(t, s) {
                    return (
                        xt(),
                        (function (t, s) {
                            xt();
                            for (var r = 0, i = 0, n = t.length, e = 0; e < n; ) {
                                var _ = t[e];
                                if (_ >= 0) {
                                    var h,
                                        a = i;
                                    if (((i = (a + 1) | 0), a === s)) return r;
                                    var v = A(10);
                                    if (_ !== E(v)) {
                                        var u = A(13);
                                        h = !(_ === E(u));
                                    } else h = !1;
                                    if ((h && ((0 <= _ && _ <= 31) || (127 <= _ && _ <= 159))) || 65533 === _) return -1;
                                    for (r = (r + (_ < 65536 ? 1 : 2)) | 0, e = (e + 1) | 0; e < n && t[e] >= 0; ) {
                                        var f = e;
                                        e = (f + 1) | 0;
                                        var o,
                                            l = t[f],
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
                                        q = e;
                                    if (n <= ((q + 1) | 0)) {
                                        var $ = i;
                                        if (((i = ($ + 1) | 0), $ === s)) return r;
                                        var k = A(10);
                                        if (65533 !== E(k)) {
                                            var p = A(13);
                                            E(p);
                                        }
                                        return -1;
                                    }
                                    var b = t[q],
                                        y = t[(q + 1) | 0];
                                    if (128 != (192 & y)) {
                                        var m = i;
                                        if (((i = (m + 1) | 0), m === s)) return r;
                                        var x = A(10);
                                        if (65533 !== E(x)) {
                                            var S = A(13);
                                            E(S);
                                        }
                                        return -1;
                                    }
                                    var z = 3968 ^ y ^ (b << 6);
                                    if (z < 128) {
                                        var I = i;
                                        if (((i = (I + 1) | 0), I === s)) return r;
                                        var j = A(10);
                                        if (65533 !== E(j)) {
                                            var C = A(13);
                                            E(C);
                                        }
                                        return -1;
                                    }
                                    var M,
                                        B = i;
                                    if (((i = (B + 1) | 0), B === s)) return r;
                                    var O = A(10);
                                    if (z !== E(O)) {
                                        var F = A(13);
                                        M = !(z === E(F));
                                    } else M = !1;
                                    if ((M && ((0 <= z && z <= 31) || (127 <= z && z <= 159))) || 65533 === z) return -1;
                                    (r = (r + (z < 65536 ? 1 : 2)) | 0), (e = (g + 2) | 0);
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
                                        var ut = A(10);
                                        if (65533 !== E(ut)) {
                                            var ft = A(13);
                                            E(ft);
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
                                        var qt = t[wt],
                                            $t = t[(wt + 1) | 0];
                                        if (128 != (192 & $t)) {
                                            var kt = i;
                                            if (((i = (kt + 1) | 0), kt === s)) return r;
                                            var pt = A(10);
                                            if (65533 !== E(pt)) {
                                                var bt = A(13);
                                                E(bt);
                                            }
                                            return -1;
                                        }
                                        var yt = t[(wt + 2) | 0];
                                        if (128 != (192 & yt)) {
                                            var mt = i;
                                            if (((i = (mt + 1) | 0), mt === s)) return r;
                                            var St = A(10);
                                            if (65533 !== E(St)) {
                                                var zt = A(13);
                                                E(zt);
                                            }
                                            return -1;
                                        }
                                        var It = t[(wt + 3) | 0];
                                        if (128 != (192 & It)) {
                                            var jt = i;
                                            if (((i = (jt + 1) | 0), jt === s)) return r;
                                            var Ct = A(10);
                                            if (65533 !== E(Ct)) {
                                                var Mt = A(13);
                                                E(Mt);
                                            }
                                            return -1;
                                        }
                                        var At = 3678080 ^ It ^ (yt << 6) ^ ($t << 12) ^ (qt << 18);
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
                function xt() {
                    h || ((h = !0), (_ = L([A(48), A(49), A(50), A(51), A(52), A(53), A(54), A(55), A(56), A(57), A(97), A(98), A(99), A(100), A(101), A(102)])));
                }
                function St(t, s) {
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
                    })(t.pt_1, (s + 1) | 0, 0, t.ot_1.length);
                    return r >= 0 ? r : ~r;
                }
                function zt() {
                    a = this;
                    var t = new Int8Array([]);
                    this.qt_1 = new jt(t);
                }
                function It() {
                    return null == a && new zt(), a;
                }
                function jt(t) {
                    It(), (this.fs_1 = t), (this.gs_1 = 0), (this.hs_1 = null);
                }
                function Ct(t) {
                    return new jt(t.bu());
                }
                function Mt(t, s) {
                    jt.call(this, It().qt_1.fs_1), (this.ot_1 = t), (this.pt_1 = s);
                }
                function At() {
                    (this.gu_1 = null), (this.hu_1 = !1), (this.iu_1 = null), (this.ju_1 = new q(-1, -1)), (this.ku_1 = null), (this.lu_1 = -1), (this.mu_1 = -1);
                }
                function Bt() {
                    (this.cs_1 = null), (this.ds_1 = new q(0, 0));
                }
                function Et(t) {
                    return gt(t);
                }
                function Ot(t) {
                    Y(t, this), Z(this, Ot);
                }
                function Ft() {
                    var t,
                        s = ((t = z(f(Rt))), Rt.call(t, null), t);
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
                    (this.uv_1 = t), (this.vv_1 = !1), (this.wv_1 = new Bt());
                }
                function Pt(t) {
                    (this.yv_1 = t), (this.zv_1 = !1), (this.aw_1 = new Bt());
                }
                function Vt() {
                    (this.ct_1 = 0), (this.dt_1 = 0);
                }
                o(it, "BlackholeSink", it),
                    m(ht),
                    o(at, "Options", $, x, [x, S]),
                    m(ft),
                    o(ot, "Segment", vt),
                    m(zt),
                    o(jt, "ByteString", $, $, [J]),
                    o(Mt, "SegmentedByteString", $, jt),
                    o(At, "UnsafeCursor", At),
                    o(Bt, "Buffer", Bt),
                    o(Ot, "ArrayIndexOutOfBoundsException", $, W),
                    o(
                        Xt,
                        "IOException",
                        function t() {
                            var s = ((r = z(f(Xt))), Xt.call(r, null, null), r);
                            var r;
                            return Z(s, t), s;
                        },
                        tt,
                    ),
                    o(Rt, "EOFException", Ft, Xt),
                    o(Lt, "RealBufferedSink"),
                    o(Pt, "RealBufferedSource"),
                    rt(Vt, "SegmentPool"),
                    (f(it).bs = function (t, s) {
                        return t.es(s);
                    }),
                    (f(it).t9 = function () {}),
                    (f(it).e5 = function () {}),
                    (f(ht).ks = function (t) {
                        if (0 === t.length) {
                            return new at([], new Int32Array([0, -1]));
                        }
                        var s = k(t);
                        p(s);
                        var r = s.s(),
                            i = b(r),
                            n = 0;
                        if (n < r)
                            do {
                                (n = (n + 1) | 0), i.k(-1);
                            } while (n < r);
                        for (var e = i, _ = 0, h = 0, a = t.length; h < a; ) {
                            var v = t[h];
                            h = (h + 1) | 0;
                            var u = _;
                            _ = (u + 1) | 0;
                            var f = y(s, v);
                            e.k2(f, u);
                        }
                        if (!(s.t(0).s() > 0)) {
                            throw w(l("the empty byte string is not a supported option"));
                        }
                        for (var o = 0; o < s.s(); ) {
                            var c = s.t(o),
                                d = (o + 1) | 0;
                            t: for (; d < s.s(); ) {
                                var g = s.t(d);
                                if (!g.ls(c)) break t;
                                if (g.s() === c.s()) {
                                    var q = "duplicate option: " + g.toString();
                                    throw w(l(q));
                                }
                                e.t(d) > e.t(o) ? (s.m2(d), e.m2(d)) : (d = (d + 1) | 0);
                            }
                            o = (o + 1) | 0;
                        }
                        var m = new Bt();
                        et(this, $, m, $, s, $, $, e);
                        for (var x = 0, S = _t(m).k1(), z = new Int32Array(S); x < S; ) (z[x] = m.ms()), (x = (x + 1) | 0);
                        var I = z;
                        return new at(t.slice(), I);
                    }),
                    (f(at).s = function () {
                        return this.ns_1.length;
                    }),
                    (f(at).t = function (t) {
                        return this.ns_1[t];
                    }),
                    (f(ot).ys = function () {
                        return (this.ss_1 = !0), ut(this.ps_1, this.qs_1, this.rs_1, !0, !1);
                    }),
                    (f(ot).zs = function () {
                        var t = this.us_1 !== this ? this.us_1 : null;
                        return (I(this.vs_1).us_1 = this.us_1), (I(this.us_1).vs_1 = this.vs_1), (this.us_1 = null), (this.vs_1 = null), t;
                    }),
                    (f(ot).at = function (t) {
                        return (t.vs_1 = this), (t.us_1 = this.us_1), (I(this.us_1).vs_1 = t), (this.us_1 = t), t;
                    }),
                    (f(ot).bt = function (t) {
                        if (!(t > 0 && t <= ((this.rs_1 - this.qs_1) | 0))) {
                            throw w(l("byteCount out of range"));
                        }
                        var s;
                        if (t >= 1024) s = this.ys();
                        else {
                            s = v.et();
                            var r = this.ps_1,
                                i = s.ps_1,
                                n = this.qs_1,
                                e = (this.qs_1 + t) | 0;
                            j(r, i, 0, n, e);
                        }
                        return (s.rs_1 = (s.qs_1 + t) | 0), (this.qs_1 = (this.qs_1 + t) | 0), I(this.vs_1).at(s), s;
                    }),
                    (f(ot).ft = function () {
                        if (this.vs_1 === this) {
                            throw g(l("cannot compact"));
                        }
                        if (!I(this.vs_1).ts_1) return c;
                        var t = (this.rs_1 - this.qs_1) | 0;
                        if (t > ((((8192 - I(this.vs_1).rs_1) | 0) + (I(this.vs_1).ss_1 ? 0 : I(this.vs_1).qs_1)) | 0)) return c;
                        this.gt(I(this.vs_1), t), this.zs(), v.ht(this);
                    }),
                    (f(ot).gt = function (t, s) {
                        if (!t.ts_1) {
                            throw g(l("only owner can write"));
                        }
                        if (((t.rs_1 + s) | 0) > 8192) {
                            if (t.ss_1) throw C();
                            if (((((t.rs_1 + s) | 0) - t.qs_1) | 0) > 8192) throw C();
                            var r = t.ps_1,
                                i = t.ps_1,
                                n = t.qs_1,
                                e = t.rs_1;
                            j(r, i, 0, n, e), (t.rs_1 = (t.rs_1 - t.qs_1) | 0), (t.qs_1 = 0);
                        }
                        var _ = this.ps_1,
                            h = t.ps_1,
                            a = t.rs_1,
                            v = this.qs_1,
                            u = (this.qs_1 + s) | 0;
                        j(_, h, a, v, u), (t.rs_1 = (t.rs_1 + s) | 0), (this.qs_1 = (this.qs_1 + s) | 0);
                    }),
                    (f(zt).rt = function (t, s, r) {
                        var i = (function (t, s) {
                            return dt(), s === lt() ? t.length : s;
                        })(t, r);
                        return ct(d(t.length), d(s), d(i)), new jt(P(t, s, (s + i) | 0));
                    }),
                    (f(zt).st = function (t, s, r, i) {
                        return (s = s === $ ? 0 : s), (r = r === $ ? lt() : r), i === $ ? this.rt(t, s, r) : i.rt.call(this, t, s, r);
                    }),
                    (f(zt).tt = function (t) {
                        var s = new jt(Et(t));
                        return s.ut(t), s;
                    }),
                    (f(jt).vt = function (t) {}),
                    (f(jt).ut = function (t) {}),
                    (f(jt).wt = function () {
                        var t = this.hs_1;
                        return null == t && ((t = qt(this.xt())), this.ut(t)), t;
                    }),
                    (f(jt).yt = function () {
                        for (var t = R(u(this.fs_1.length, 2)), s = 0, r = this.fs_1, i = 0, n = r.length; i < n; ) {
                            var e = r[i];
                            i = (i + 1) | 0;
                            var _ = s;
                            s = (_ + 1) | 0;
                            var h = yt();
                            t[_] = h[(e >> 4) & 15];
                            var a = s;
                            s = (a + 1) | 0;
                            var v = yt();
                            t[a] = v[15 & e];
                        }
                        return V(t);
                    }),
                    (f(jt).zt = function (t) {
                        if (t >= this.s() || t < 0) throw new Ot("size=" + this.s() + " pos=" + t);
                        return this.fs_1[t];
                    }),
                    (f(jt).t = function (t) {
                        return this.zt(t);
                    }),
                    (f(jt).s = function () {
                        return this.au();
                    }),
                    (f(jt).au = function () {
                        return this.fs_1.length;
                    }),
                    (f(jt).bu = function () {
                        return this.fs_1.slice();
                    }),
                    (f(jt).xt = function () {
                        return this.fs_1;
                    }),
                    (f(jt).cu = function (t, s, r) {
                        return (function (t, s, r, i) {
                            xt(), s.kt(t.fs_1, r, i);
                        })(this, t, s, r);
                    }),
                    (f(jt).du = function (t, s, r, i) {
                        return s.eu(r, this.fs_1, t, i);
                    }),
                    (f(jt).eu = function (t, s, r, i) {
                        return t >= 0 && t <= ((this.fs_1.length - i) | 0) && r >= 0 && r <= ((s.length - i) | 0) && wt(this.fs_1, t, s, r, i);
                    }),
                    (f(jt).ls = function (t) {
                        return this.du(0, t, 0, t.s());
                    }),
                    (f(jt).equals = function (t) {
                        return t === this || (t instanceof jt && t.s() === this.fs_1.length && t.eu(0, this.fs_1, 0, this.fs_1.length));
                    }),
                    (f(jt).hashCode = function () {
                        var t,
                            s = this.gs_1;
                        if (0 === s) {
                            var r = D(this.fs_1);
                            this.vt(r), (t = r);
                        } else t = s;
                        return t;
                    }),
                    (f(jt).fu = function (t) {
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
                    (f(jt).d = function (t) {
                        return this.fu(t instanceof jt ? t : G());
                    }),
                    (f(jt).toString = function () {
                        var t, s, r;
                        if (0 !== this.fs_1.length) {
                            var i = mt(this.fs_1, 64);
                            if (-1 !== i) {
                                var n = this.wt(),
                                    e = n.substring(0, i),
                                    _ = H(H(H(e, "\\", "\\\\"), "\n", "\\n"), "\r", "\\r");
                                t = i < n.length ? "[size=" + this.fs_1.length + " text=" + _ + "…]" : "[text=" + _ + "]";
                            } else {
                                var h;
                                if (this.fs_1.length <= 64) h = "[hex=" + this.yt() + "]";
                                else {
                                    var a,
                                        v = this.fs_1.length,
                                        u = ((s = this), (r = 64), dt(), r === lt() ? s.s() : r);
                                    if (!(u <= this.fs_1.length)) {
                                        var f = "endIndex > length(" + this.fs_1.length + ")";
                                        throw w(l(f));
                                    }
                                    if (!(((u - 0) | 0) >= 0)) {
                                        throw w(l("endIndex < beginIndex"));
                                    }
                                    u !== this.fs_1.length ? (a = new jt(P(this.fs_1, 0, u))) : (a = this), (h = "[size=" + v + " hex=" + a.yt() + "…]");
                                }
                                t = h;
                            }
                        } else t = "[size=0]";
                        return t;
                    }),
                    (f(Mt).yt = function () {
                        return Ct(this).yt();
                    }),
                    (f(Mt).zt = function (t) {
                        ct(d(this.pt_1[(this.ot_1.length - 1) | 0]), d(t), new q(1, 0));
                        var s = St(this, t),
                            r = 0 === s ? 0 : this.pt_1[(s - 1) | 0],
                            i = this.pt_1[(s + this.ot_1.length) | 0];
                        return this.ot_1[s][(((t - r) | 0) + i) | 0];
                    }),
                    (f(Mt).au = function () {
                        return this.pt_1[(this.ot_1.length - 1) | 0];
                    }),
                    (f(Mt).bu = function () {
                        for (var t = new Int8Array(this.s()), s = 0, r = this.ot_1.length, i = 0, n = 0; i < r; ) {
                            var e = this.pt_1[(r + i) | 0],
                                _ = this.pt_1[i],
                                h = (_ - n) | 0,
                                a = this.ot_1[i];
                            j(a, t, s, e, (e + h) | 0), (s = (s + h) | 0), (n = _), (i = (i + 1) | 0);
                        }
                        return t;
                    }),
                    (f(Mt).cu = function (t, s, r) {
                        for (var i = (s + r) | 0, n = St(this, s), e = s; e < i; ) {
                            var _ = 0 === n ? 0 : this.pt_1[(n - 1) | 0],
                                h = (this.pt_1[n] - _) | 0,
                                a = this.pt_1[(this.ot_1.length + n) | 0],
                                v = (_ + h) | 0,
                                u = (Math.min(i, v) - e) | 0,
                                f = (a + ((e - _) | 0)) | 0,
                                o = ut(this.ot_1[n], f, (f + u) | 0, !0, !1);
                            null == t.cs_1 ? ((o.vs_1 = o), (o.us_1 = o.vs_1), (t.cs_1 = o.us_1)) : I(I(t.cs_1).vs_1).at(o), (e = (e + u) | 0), (n = (n + 1) | 0);
                        }
                        return (t.ds_1 = t.ds_1.g3(d(r))), c;
                    }),
                    (f(Mt).du = function (t, s, r, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0)) n = !1;
                        else {
                            for (var e = r, _ = (t + i) | 0, h = St(this, t), a = t; a < _; ) {
                                var v = 0 === h ? 0 : this.pt_1[(h - 1) | 0],
                                    u = (this.pt_1[h] - v) | 0,
                                    f = this.pt_1[(this.ot_1.length + h) | 0],
                                    o = (v + u) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (f + ((a - v) | 0)) | 0,
                                    c = this.ot_1[h];
                                if (!s.eu(e, c, w, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (f(Mt).eu = function (t, s, r, i) {
                        var n;
                        t: if (t < 0 || t > ((this.s() - i) | 0) || r < 0 || r > ((s.length - i) | 0)) n = !1;
                        else {
                            for (var e = r, _ = (t + i) | 0, h = St(this, t), a = t; a < _; ) {
                                var v = 0 === h ? 0 : this.pt_1[(h - 1) | 0],
                                    u = (this.pt_1[h] - v) | 0,
                                    f = this.pt_1[(this.ot_1.length + h) | 0],
                                    o = (v + u) | 0,
                                    l = (Math.min(_, o) - a) | 0,
                                    w = (f + ((a - v) | 0)) | 0;
                                if (!wt(this.ot_1[h], w, s, e, l)) {
                                    n = !1;
                                    break t;
                                }
                                (e = (e + l) | 0), (a = (a + l) | 0), (h = (h + 1) | 0);
                            }
                            n = !0;
                        }
                        return n;
                    }),
                    (f(Mt).xt = function () {
                        return this.bu();
                    }),
                    (f(Mt).equals = function (t) {
                        return t === this || (t instanceof jt && t.s() === this.s() && this.du(0, t, 0, this.s()));
                    }),
                    (f(Mt).hashCode = function () {
                        var t,
                            s = this.gs_1;
                        if (0 === s) {
                            s = 1;
                            for (var r = this.ot_1.length, i = 0, n = 0; i < r; ) {
                                for (var e = this.pt_1[(r + i) | 0], _ = this.pt_1[i], h = this.ot_1[i], a = e, v = (e + ((_ - n) | 0)) | 0; a < v; ) (s = (u(31, s) + h[a]) | 0), (a = (a + 1) | 0);
                                (n = _), (i = (i + 1) | 0);
                            }
                            this.vt(s), (t = s);
                        } else t = s;
                        return t;
                    }),
                    (f(Mt).toString = function () {
                        return Ct(this).toString();
                    }),
                    (f(At).e5 = function () {
                        if (null == this.gu_1) {
                            throw g(l("not attached to a buffer"));
                        }
                        (this.gu_1 = null), (this.iu_1 = null), (this.ju_1 = new q(-1, -1)), (this.ku_1 = null), (this.lu_1 = -1), (this.mu_1 = -1);
                    }),
                    (f(Bt).nu = function () {
                        return this;
                    }),
                    (f(Bt).ou = function () {
                        return this.ds_1.equals(new q(0, 0));
                    }),
                    (f(Bt).pu = function (t) {
                        if (this.ds_1.e1(t) < 0) throw new Rt(null);
                    }),
                    (f(Bt).qu = function (t) {
                        return this.ds_1.e1(t) >= 0;
                    }),
                    (f(Bt).ru = function (t, s, r) {
                        var i,
                            n = s,
                            e = r;
                        if ((ct(this.ds_1, n, e), e.equals(new q(0, 0)))) i = this;
                        else {
                            t.ds_1 = t.ds_1.g3(e);
                            for (var _ = this.cs_1; n.e1(d((I(_).rs_1 - _.qs_1) | 0)) >= 0; ) (n = n.h3(d((_.rs_1 - _.qs_1) | 0))), (_ = _.us_1);
                            for (; e.e1(new q(0, 0)) > 0; ) {
                                var h = I(_).ys();
                                h.qs_1 = (h.qs_1 + n.k1()) | 0;
                                var a = h,
                                    v = (h.qs_1 + e.k1()) | 0,
                                    u = h.rs_1;
                                (a.rs_1 = Math.min(v, u)), null == t.cs_1 ? ((h.vs_1 = h), (h.us_1 = h.vs_1), (t.cs_1 = h.us_1)) : I(I(t.cs_1).vs_1).at(h), (e = e.h3(d((h.rs_1 - h.qs_1) | 0))), (n = new q(0, 0)), (_ = _.us_1);
                            }
                            i = this;
                        }
                        return i;
                    }),
                    (f(Bt).it = function (t) {
                        var s;
                        ct(this.ds_1, t, new q(1, 0));
                        var r = this.cs_1;
                        if (null != r) {
                            var i = r;
                            if (this.ds_1.h3(t).e1(t) < 0) {
                                for (var n = this.ds_1; n.e1(t) > 0; ) (i = I(i.vs_1)), (n = n.h3(d((i.rs_1 - i.qs_1) | 0)));
                                var e = i,
                                    _ = n;
                                s = I(e).ps_1[K(e.qs_1).g3(t).h3(_).k1()];
                            } else {
                                var h = new q(0, 0);
                                t: for (;;) {
                                    var a = h,
                                        v = (i.rs_1 - i.qs_1) | 0,
                                        u = a.g3(d(v));
                                    if (u.e1(t) > 0) break t;
                                    (i = I(i.us_1)), (h = u);
                                }
                                var f = i,
                                    o = h;
                                s = I(f).ps_1[K(f.qs_1).g3(t).h3(o).k1()];
                            }
                        } else {
                            var l = new q(-1, -1);
                            s = I(null).ps_1[K(null.qs_1).g3(t).h3(l).k1()];
                        }
                        return s;
                    }),
                    (f(Bt).su = function () {
                        var t,
                            s = this.ds_1;
                        if (s.equals(new q(0, 0))) t = new q(0, 0);
                        else {
                            var r = I(I(this.cs_1).vs_1);
                            r.rs_1 < 8192 && r.ts_1 && (s = s.h3(d((r.rs_1 - r.qs_1) | 0))), (t = s);
                        }
                        return t;
                    }),
                    (f(Bt).tu = function () {
                        if (this.ds_1.equals(new q(0, 0))) throw Ft();
                        var t = I(this.cs_1),
                            s = t.qs_1,
                            r = t.rs_1,
                            i = s;
                        s = (i + 1) | 0;
                        var n = t.ps_1[i];
                        return (this.ds_1 = this.ds_1.h3(new q(1, 0))), s === r ? ((this.cs_1 = t.zs()), v.ht(t)) : (t.qs_1 = s), n;
                    }),
                    (f(Bt).ms = function () {
                        var t;
                        if (this.ds_1.e1(new q(4, 0)) < 0) throw Ft();
                        var s = I(this.cs_1),
                            r = s.qs_1,
                            i = s.rs_1;
                        if (d((i - r) | 0).e1(new q(4, 0)) < 0) {
                            t = ((255 & this.tu()) << 24) | ((255 & this.tu()) << 16) | ((255 & this.tu()) << 8) | (255 & this.tu());
                        } else {
                            var n = s.ps_1,
                                e = r,
                                _ = (r = (e + 1) | 0),
                                h = (r = (_ + 1) | 0),
                                a = (r = (h + 1) | 0);
                            r = (a + 1) | 0;
                            var u = ((255 & n[e]) << 24) | ((255 & n[_]) << 16) | ((255 & n[h]) << 8) | (255 & n[a]);
                            (this.ds_1 = this.ds_1.h3(new q(4, 0))), r === i ? ((this.cs_1 = s.zs()), v.ht(s)) : (s.qs_1 = r), (t = u);
                        }
                        return t;
                    }),
                    (f(Bt).uu = function () {
                        return this.vu(this.ds_1);
                    }),
                    (f(Bt).vu = function (t) {
                        var s;
                        if (!(t.e1(new q(0, 0)) >= 0 && t.e1(new q(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.ds_1.e1(t) < 0) throw Ft();
                        if (t.e1(new q(4096, 0)) >= 0) {
                            var i = this.xu(t.k1());
                            this.es(t), (s = i);
                        } else s = new jt(this.wu(t));
                        return s;
                    }),
                    (f(Bt).yu = function () {
                        return this.jt(this.ds_1);
                    }),
                    (f(Bt).jt = function (t) {
                        var s;
                        if (!(t.e1(new q(0, 0)) >= 0 && t.e1(new q(2147483647, 0)) <= 0)) {
                            var r = "byteCount: " + t.toString();
                            throw w(l(r));
                        }
                        if (this.ds_1.e1(t) < 0) throw Ft();
                        if (t.equals(new q(0, 0))) s = "";
                        else {
                            var i = I(this.cs_1);
                            if (K(i.qs_1).g3(t).e1(d(i.rs_1)) > 0) s = qt(this.wu(t));
                            else {
                                var n = qt(i.ps_1, i.qs_1, (i.qs_1 + t.k1()) | 0);
                                (i.qs_1 = (i.qs_1 + t.k1()) | 0), (this.ds_1 = this.ds_1.h3(t)), i.qs_1 === i.rs_1 && ((this.cs_1 = i.zs()), v.ht(i)), (s = n);
                            }
                        }
                        return s;
                    }),
                    (f(Bt).zu = function () {
                        return this.av(new q(-1, 2147483647));
                    }),
                    (f(Bt).av = function (t) {
                        var s;
                        if (!(t.e1(new q(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw w(l(r));
                        }
                        var i = t.equals(new q(-1, 2147483647)) ? new q(-1, 2147483647) : t.g3(new q(1, 0)),
                            n = this.bv(10, new q(0, 0), i);
                        if (n.equals(new q(-1, -1))) {
                            var e;
                            if (i.e1(this.ds_1) < 0) {
                                var _ = i.h3(d(1));
                                e = 13 === this.it(_);
                            } else e = !1;
                            if (!(!!e && 10 === this.it(i))) {
                                var h = new Bt(),
                                    a = new q(0, 0),
                                    v = this.ds_1,
                                    u = d(32),
                                    f = u.e1(v) <= 0 ? u : v;
                                this.ru(h, a, f);
                                var o = this.ds_1;
                                throw new Rt("\\n not found: limit=" + (o.e1(t) <= 0 ? o : t).toString() + " content=" + h.uu().yt() + "…");
                            }
                            s = $t(this, i);
                        } else s = $t(this, n);
                        return s;
                    }),
                    (f(Bt).cv = function (t) {
                        var s,
                            r = kt(this, t);
                        if (-1 !== r) {
                            var i = t.ns_1[r].s();
                            this.es(d(i)), (s = r);
                        } else s = -1;
                        return s;
                    }),
                    (f(Bt).dv = function () {
                        return this.wu(this.ds_1);
                    }),
                    (f(Bt).wu = function (t) {
                        if (!(t.e1(new q(0, 0)) >= 0 && t.e1(new q(2147483647, 0)) <= 0)) {
                            var s = "byteCount: " + t.toString();
                            throw w(l(s));
                        }
                        if (this.ds_1.e1(t) < 0) throw Ft();
                        var r = new Int8Array(t.k1());
                        return this.ev(r), r;
                    }),
                    (f(Bt).ev = function (t) {
                        for (var s = 0; s < t.length; ) {
                            var r = this.fv(t, s, (t.length - s) | 0);
                            if (-1 === r) throw Ft();
                            s = (s + r) | 0;
                        }
                        return c;
                    }),
                    (f(Bt).fv = function (t, s, r) {
                        var i;
                        ct(d(t.length), d(s), d(r));
                        var n = this.cs_1;
                        if (null != n) {
                            var e = n,
                                _ = (e.rs_1 - e.qs_1) | 0,
                                h = Math.min(r, _),
                                a = e.ps_1,
                                u = e.qs_1,
                                f = (e.qs_1 + h) | 0;
                            j(a, t, s, u, f), (e.qs_1 = (e.qs_1 + h) | 0), (this.ds_1 = this.ds_1.h3(d(h))), e.qs_1 === e.rs_1 && ((this.cs_1 = e.zs()), v.ht(e)), (i = h);
                        } else i = -1;
                        return i;
                    }),
                    (f(Bt).j2 = function () {
                        return this.es(this.ds_1), c;
                    }),
                    (f(Bt).es = function (t) {
                        for (var s = t; s.e1(new q(0, 0)) > 0; ) {
                            var r = this.cs_1;
                            if (null == r) throw Ft();
                            var i = r,
                                n = s,
                                e = (i.rs_1 - i.qs_1) | 0,
                                _ = d(e),
                                h = (n.e1(_) <= 0 ? n : _).k1();
                            (this.ds_1 = this.ds_1.h3(d(h))), (s = s.h3(d(h))), (i.qs_1 = (i.qs_1 + h) | 0), i.qs_1 === i.rs_1 && ((this.cs_1 = i.zs()), v.ht(i));
                        }
                        return c;
                    }),
                    (f(Bt).gv = function (t) {
                        var s = t.s();
                        return t.cu(this, 0, s), this;
                    }),
                    (f(Bt).hv = function (t) {
                        var s;
                        if (!(t >= 1 && t <= 8192)) {
                            throw w(l("unexpected capacity"));
                        }
                        if (null != this.cs_1) {
                            var r = I(this.cs_1).vs_1;
                            (((I(r).rs_1 + t) | 0) > 8192 || !r.ts_1) && (r = r.at(v.et())), (s = r);
                        } else {
                            var i = v.et();
                            (this.cs_1 = i), (i.vs_1 = i), (i.us_1 = i), (s = i);
                        }
                        return s;
                    }),
                    (f(Bt).iv = function (t) {
                        return this.jv(t, 0, t.length);
                    }),
                    (f(Bt).jv = function (t, s, r) {
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
                                var h = this.hv(1),
                                    a = h.ps_1,
                                    v = (h.rs_1 - n) | 0,
                                    u = (8192 - v) | 0,
                                    f = Math.min(r, u),
                                    o = n;
                                (n = (o + 1) | 0), (a[(v + o) | 0] = O(_));
                                t: for (; n < f; ) {
                                    var c = M(t, n);
                                    if ((_ = E(c)) >= 128) break t;
                                    var g = n;
                                    (n = (g + 1) | 0), (a[(v + g) | 0] = O(_));
                                }
                                var $ = (((n + v) | 0) - h.rs_1) | 0;
                                (h.rs_1 = (h.rs_1 + $) | 0), (this.ds_1 = this.ds_1.g3(d($)));
                            } else if (_ < 2048) {
                                var k = this.hv(2);
                                (k.ps_1[k.rs_1] = O((_ >> 6) | 192)), (k.ps_1[(k.rs_1 + 1) | 0] = O((63 & _) | 128)), (k.rs_1 = (k.rs_1 + 2) | 0), (this.ds_1 = this.ds_1.g3(new q(2, 0))), (n = (n + 1) | 0);
                            } else if (_ < 55296 || _ > 57343) {
                                var p = this.hv(3);
                                (p.ps_1[p.rs_1] = O((_ >> 12) | 224)), (p.ps_1[(p.rs_1 + 1) | 0] = O(((_ >> 6) & 63) | 128)), (p.ps_1[(p.rs_1 + 2) | 0] = O((63 & _) | 128)), (p.rs_1 = (p.rs_1 + 3) | 0), (this.ds_1 = this.ds_1.g3(new q(3, 0))), (n = (n + 1) | 0);
                            } else {
                                var b;
                                if (((n + 1) | 0) < r) {
                                    var y = M(t, (n + 1) | 0);
                                    b = E(y);
                                } else b = 0;
                                var m = b;
                                if (_ > 56319 || !(56320 <= m && m <= 57343)) {
                                    var x = A(63),
                                        S = E(x);
                                    this.kv(S), (n = (n + 1) | 0);
                                } else {
                                    var z = (65536 + (((1023 & _) << 10) | (1023 & m))) | 0,
                                        I = this.hv(4);
                                    (I.ps_1[I.rs_1] = O((z >> 18) | 240)), (I.ps_1[(I.rs_1 + 1) | 0] = O(((z >> 12) & 63) | 128)), (I.ps_1[(I.rs_1 + 2) | 0] = O(((z >> 6) & 63) | 128)), (I.ps_1[(I.rs_1 + 3) | 0] = O((63 & z) | 128)), (I.rs_1 = (I.rs_1 + 4) | 0), (this.ds_1 = this.ds_1.g3(new q(4, 0))), (n = (n + 2) | 0);
                                }
                            }
                        }
                        return this;
                    }),
                    (f(Bt).lv = function (t) {
                        return this.kt(t, 0, t.length);
                    }),
                    (f(Bt).kt = function (t, s, r) {
                        var i = s;
                        ct(d(t.length), d(i), d(r));
                        for (var n = (i + r) | 0; i < n; ) {
                            var e = this.hv(1),
                                _ = (n - i) | 0,
                                h = (8192 - e.rs_1) | 0,
                                a = Math.min(_, h),
                                v = e.ps_1,
                                u = e.rs_1;
                            j(t, v, u, i, (i + a) | 0), (i = (i + a) | 0), (e.rs_1 = (e.rs_1 + a) | 0);
                        }
                        return (this.ds_1 = this.ds_1.g3(d(r))), this;
                    }),
                    (f(Bt).js = function (t) {
                        var s = new q(0, 0);
                        t: for (;;) {
                            var r = t.mv(this, new q(8192, 0));
                            if (r.equals(new q(-1, -1))) break t;
                            s = s.g3(r);
                        }
                        return s;
                    }),
                    (f(Bt).kv = function (t) {
                        var s = this.hv(1),
                            r = s.rs_1;
                        return (s.rs_1 = (r + 1) | 0), (s.ps_1[r] = O(t)), (this.ds_1 = this.ds_1.g3(new q(1, 0))), this;
                    }),
                    (f(Bt).is = function (t) {
                        var s = this.hv(4),
                            r = s.ps_1,
                            i = s.rs_1,
                            n = i;
                        (i = (n + 1) | 0), (r[n] = O((t >>> 24) & 255));
                        var e = i;
                        (i = (e + 1) | 0), (r[e] = O((t >>> 16) & 255));
                        var _ = i;
                        (i = (_ + 1) | 0), (r[_] = O((t >>> 8) & 255));
                        var h = i;
                        return (i = (h + 1) | 0), (r[h] = O(255 & t)), (s.rs_1 = i), (this.ds_1 = this.ds_1.g3(new q(4, 0))), this;
                    }),
                    (f(Bt).bs = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (t === this) {
                                throw w(l("source == this"));
                            }
                            for (ct(t.ds_1, new q(0, 0), i); i.e1(new q(0, 0)) > 0; ) {
                                if (i.e1(d((I(t.cs_1).rs_1 - I(t.cs_1).qs_1) | 0)) < 0) {
                                    var n,
                                        e = null != this.cs_1 ? I(this.cs_1).vs_1 : null;
                                    if (null != e && e.ts_1) {
                                        var _ = i,
                                            h = e.rs_1,
                                            a = _.g3(d(h)),
                                            v = e.ss_1 ? 0 : e.qs_1;
                                        n = a.h3(d(v)).e1(new q(8192, 0)) <= 0;
                                    } else n = !1;
                                    if (n) {
                                        I(t.cs_1).gt(e, i.k1()), (t.ds_1 = t.ds_1.h3(i)), (this.ds_1 = this.ds_1.g3(i)), (r = c);
                                        break t;
                                    }
                                    t.cs_1 = I(t.cs_1).bt(i.k1());
                                }
                                var u = t.cs_1,
                                    f = d((I(u).rs_1 - u.qs_1) | 0);
                                if (((t.cs_1 = u.zs()), null == this.cs_1)) (this.cs_1 = u), (u.vs_1 = u), (u.us_1 = u.vs_1);
                                else {
                                    var o = I(this.cs_1).vs_1;
                                    (o = I(o).at(u)).ft();
                                }
                                (t.ds_1 = t.ds_1.h3(f)), (this.ds_1 = this.ds_1.g3(f)), (i = i.h3(f));
                            }
                        }
                        return r;
                    }),
                    (f(Bt).mv = function (t, s) {
                        var r,
                            i = s;
                        if (!(i.e1(new q(0, 0)) >= 0)) {
                            var n = "byteCount < 0: " + i.toString();
                            throw w(l(n));
                        }
                        return this.ds_1.equals(new q(0, 0)) ? (r = new q(-1, -1)) : (i.e1(this.ds_1) > 0 && (i = this.ds_1), t.bs(this, i), (r = i)), r;
                    }),
                    (f(Bt).bv = function (t, s, r) {
                        var i;
                        t: {
                            var n = s,
                                e = r;
                            if (!(new q(0, 0).e1(n) <= 0 && n.e1(e) <= 0)) {
                                var _ = "size=" + this.ds_1.toString() + " fromIndex=" + n.toString() + " toIndex=" + e.toString();
                                throw w(l(_));
                            }
                            if ((e.e1(this.ds_1) > 0 && (e = this.ds_1), n.equals(e))) i = new q(-1, -1);
                            else {
                                var h = n,
                                    a = this.cs_1;
                                if (null != a) {
                                    var v = a;
                                    if (this.ds_1.h3(h).e1(h) < 0) {
                                        for (var u = this.ds_1; u.e1(h) > 0; ) (v = I(v.vs_1)), (u = u.h3(d((v.rs_1 - v.qs_1) | 0)));
                                        var f = v,
                                            o = u;
                                        if (null == f) {
                                            i = new q(-1, -1);
                                            break t;
                                        }
                                        for (var c = f, g = o; g.e1(e) < 0; ) {
                                            for (var $ = c.ps_1, k = d(c.rs_1), p = K(c.qs_1).g3(e).h3(g), b = (k.e1(p) <= 0 ? k : p).k1(), y = K(c.qs_1).g3(n).h3(g).k1(); y < b; ) {
                                                if ($[y] === t) {
                                                    i = K((y - c.qs_1) | 0).g3(g);
                                                    break t;
                                                }
                                                y = (y + 1) | 0;
                                            }
                                            (n = g = g.g3(d((c.rs_1 - c.qs_1) | 0))), (c = I(c.us_1));
                                        }
                                        i = new q(-1, -1);
                                    } else {
                                        var m = new q(0, 0);
                                        s: for (;;) {
                                            var x = m,
                                                S = (v.rs_1 - v.qs_1) | 0,
                                                z = x.g3(d(S));
                                            if (z.e1(h) > 0) break s;
                                            (v = I(v.us_1)), (m = z);
                                        }
                                        if (null != v) {
                                            for (var j = v, C = m; C.e1(e) < 0; ) {
                                                for (var M = j.ps_1, A = d(j.rs_1), B = K(j.qs_1).g3(e).h3(C), E = (A.e1(B) <= 0 ? A : B).k1(), O = K(j.qs_1).g3(n).h3(C).k1(); O < E; ) {
                                                    if (M[O] === t) {
                                                        i = K((O - j.qs_1) | 0).g3(C);
                                                        break t;
                                                    }
                                                    O = (O + 1) | 0;
                                                }
                                                (n = C = C.g3(d((j.rs_1 - j.qs_1) | 0))), (j = I(j.us_1));
                                            }
                                            i = new q(-1, -1);
                                        } else i = new q(-1, -1);
                                    }
                                } else {
                                    new q(-1, -1);
                                    i = new q(-1, -1);
                                }
                            }
                        }
                        return i;
                    }),
                    (f(Bt).nv = function (t) {
                        return this.ov(t, new q(0, 0));
                    }),
                    (f(Bt).ov = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(t.s() > 0)) {
                                throw w(l("bytes is empty"));
                            }
                            if (!(i.e1(new q(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.cs_1;
                            if (null != _) {
                                var h = _;
                                if (this.ds_1.h3(e).e1(e) < 0) {
                                    for (var a = this.ds_1; a.e1(e) > 0; ) (h = I(h.vs_1)), (a = a.h3(d((h.rs_1 - h.qs_1) | 0)));
                                    var v = h,
                                        u = a;
                                    if (null == v) {
                                        r = new q(-1, -1);
                                        break t;
                                    }
                                    for (var f = v, o = u, c = t.xt(), g = c[0], $ = t.s(), k = this.ds_1.h3(d($)).g3(new q(1, 0)); o.e1(k) < 0; ) {
                                        var p = f.ps_1,
                                            b = f.rs_1,
                                            y = K(f.qs_1).g3(k).h3(o),
                                            m = d(b),
                                            x = (m.e1(y) <= 0 ? m : y).k1(),
                                            S = K(f.qs_1).g3(i).h3(o).k1();
                                        if (S < x)
                                            do {
                                                var z = S;
                                                if (((S = (S + 1) | 0), p[z] === g && pt(f, (z + 1) | 0, c, 1, $))) {
                                                    r = K((z - f.qs_1) | 0).g3(o);
                                                    break t;
                                                }
                                            } while (S < x);
                                        (i = o = o.g3(d((f.rs_1 - f.qs_1) | 0))), (f = I(f.us_1));
                                    }
                                    r = new q(-1, -1);
                                } else {
                                    var j = new q(0, 0);
                                    s: for (;;) {
                                        var C = j,
                                            M = (h.rs_1 - h.qs_1) | 0,
                                            A = C.g3(d(M));
                                        if (A.e1(e) > 0) break s;
                                        (h = I(h.us_1)), (j = A);
                                    }
                                    if (null != h) {
                                        for (var B = h, E = j, O = t.xt(), F = O[0], R = t.s(), U = this.ds_1.h3(d(R)).g3(new q(1, 0)); E.e1(U) < 0; ) {
                                            var X = B.ps_1,
                                                L = B.rs_1,
                                                P = K(B.qs_1).g3(U).h3(E),
                                                V = d(L),
                                                D = (V.e1(P) <= 0 ? V : P).k1(),
                                                G = K(B.qs_1).g3(i).h3(E).k1();
                                            if (G < D)
                                                do {
                                                    var H = G;
                                                    if (((G = (G + 1) | 0), X[H] === F && pt(B, (H + 1) | 0, O, 1, R))) {
                                                        r = K((H - B.qs_1) | 0).g3(E);
                                                        break t;
                                                    }
                                                } while (G < D);
                                            (i = E = E.g3(d((B.rs_1 - B.qs_1) | 0))), (B = I(B.us_1));
                                        }
                                        r = new q(-1, -1);
                                    } else r = new q(-1, -1);
                                }
                            } else {
                                new q(-1, -1);
                                r = new q(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (f(Bt).pv = function (t) {
                        return this.qv(t, new q(0, 0));
                    }),
                    (f(Bt).qv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (!(i.e1(new q(0, 0)) >= 0)) {
                                var n = "fromIndex < 0: " + i.toString();
                                throw w(l(n));
                            }
                            var e = i,
                                _ = this.cs_1;
                            if (null != _) {
                                var h = _;
                                if (this.ds_1.h3(e).e1(e) < 0) {
                                    for (var a = this.ds_1; a.e1(e) > 0; ) (h = I(h.vs_1)), (a = a.h3(d((h.rs_1 - h.qs_1) | 0)));
                                    var v = h,
                                        u = a;
                                    if (null == v) {
                                        r = new q(-1, -1);
                                        break t;
                                    }
                                    var f = v,
                                        o = u;
                                    if (2 === t.s())
                                        for (var c = t.t(0), g = t.t(1); o.e1(this.ds_1) < 0; ) {
                                            for (var $ = f.ps_1, k = K(f.qs_1).g3(i).h3(o).k1(), p = f.rs_1; k < p; ) {
                                                var b = $[k];
                                                if (b === c || b === g) {
                                                    r = K((k - f.qs_1) | 0).g3(o);
                                                    break t;
                                                }
                                                k = (k + 1) | 0;
                                            }
                                            (i = o = o.g3(d((f.rs_1 - f.qs_1) | 0))), (f = I(f.us_1));
                                        }
                                    else
                                        for (var y = t.xt(); o.e1(this.ds_1) < 0; ) {
                                            for (var m = f.ps_1, x = K(f.qs_1).g3(i).h3(o).k1(), S = f.rs_1; x < S; ) {
                                                for (var z = m[x], j = 0, C = y.length; j < C; ) {
                                                    var M = y[j];
                                                    if (((j = (j + 1) | 0), z === M)) {
                                                        r = K((x - f.qs_1) | 0).g3(o);
                                                        break t;
                                                    }
                                                }
                                                x = (x + 1) | 0;
                                            }
                                            (i = o = o.g3(d((f.rs_1 - f.qs_1) | 0))), (f = I(f.us_1));
                                        }
                                    r = new q(-1, -1);
                                } else {
                                    var A = new q(0, 0);
                                    s: for (;;) {
                                        var B = A,
                                            E = (h.rs_1 - h.qs_1) | 0,
                                            O = B.g3(d(E));
                                        if (O.e1(e) > 0) break s;
                                        (h = I(h.us_1)), (A = O);
                                    }
                                    if (null != h) {
                                        var F = h,
                                            R = A;
                                        if (2 === t.s())
                                            for (var U = t.t(0), X = t.t(1); R.e1(this.ds_1) < 0; ) {
                                                for (var L = F.ps_1, P = K(F.qs_1).g3(i).h3(R).k1(), V = F.rs_1; P < V; ) {
                                                    var D = L[P];
                                                    if (D === U || D === X) {
                                                        r = K((P - F.qs_1) | 0).g3(R);
                                                        break t;
                                                    }
                                                    P = (P + 1) | 0;
                                                }
                                                (i = R = R.g3(d((F.rs_1 - F.qs_1) | 0))), (F = I(F.us_1));
                                            }
                                        else
                                            for (var G = t.xt(); R.e1(this.ds_1) < 0; ) {
                                                for (var H = F.ps_1, J = K(F.qs_1).g3(i).h3(R).k1(), N = F.rs_1; J < N; ) {
                                                    for (var Q = H[J], T = 0, W = G.length; T < W; ) {
                                                        var Y = G[T];
                                                        if (((T = (T + 1) | 0), Q === Y)) {
                                                            r = K((J - F.qs_1) | 0).g3(R);
                                                            break t;
                                                        }
                                                    }
                                                    J = (J + 1) | 0;
                                                }
                                                (i = R = R.g3(d((F.rs_1 - F.qs_1) | 0))), (F = I(F.us_1));
                                            }
                                        r = new q(-1, -1);
                                    } else r = new q(-1, -1);
                                }
                            } else {
                                new q(-1, -1);
                                r = new q(-1, -1);
                            }
                        }
                        return r;
                    }),
                    (f(Bt).rv = function (t, s) {
                        return this.sv(t, s, 0, s.s());
                    }),
                    (f(Bt).sv = function (t, s, r, i) {
                        var n;
                        t: if (t.e1(new q(0, 0)) < 0 || r < 0 || i < 0 || this.ds_1.h3(t).e1(d(i)) < 0 || ((s.s() - r) | 0) < i) n = !1;
                        else {
                            var e = 0;
                            if (e < i)
                                do {
                                    var _ = e;
                                    e = (e + 1) | 0;
                                    var h = t.g3(d(_));
                                    if (this.it(h) !== s.t((r + _) | 0)) {
                                        n = !1;
                                        break t;
                                    }
                                } while (e < i);
                            n = !0;
                        }
                        return n;
                    }),
                    (f(Bt).t9 = function () {
                        return c;
                    }),
                    (f(Bt).e5 = function () {
                        return c;
                    }),
                    (f(Bt).equals = function (t) {
                        var s;
                        t: if (this !== t)
                            if (t instanceof Bt)
                                if (this.ds_1.equals(t.ds_1))
                                    if (this.ds_1.equals(new q(0, 0))) s = !0;
                                    else {
                                        for (var r, i = I(this.cs_1), n = I(t.cs_1), e = i.qs_1, _ = n.qs_1, h = new q(0, 0); h.e1(this.ds_1) < 0; ) {
                                            var a = (i.rs_1 - e) | 0,
                                                v = (n.rs_1 - _) | 0,
                                                u = Math.min(a, v);
                                            r = d(u);
                                            var f = new q(0, 0);
                                            if (f.e1(r) < 0)
                                                do {
                                                    f = f.g3(new q(1, 0));
                                                    var o = e;
                                                    e = (o + 1) | 0;
                                                    var l = _;
                                                    if (((_ = (l + 1) | 0), i.ps_1[o] !== n.ps_1[l])) {
                                                        s = !1;
                                                        break t;
                                                    }
                                                } while (f.e1(r) < 0);
                                            e === i.rs_1 && (e = (i = I(i.us_1)).qs_1), _ === n.rs_1 && (_ = (n = I(n.us_1)).qs_1), (h = h.g3(r));
                                        }
                                        s = !0;
                                    }
                                else s = !1;
                            else s = !1;
                        else s = !0;
                        return s;
                    }),
                    (f(Bt).hashCode = function () {
                        var t,
                            s = this.cs_1;
                        if (null != s) {
                            var r = s,
                                i = 1;
                            do {
                                for (var n = r.qs_1, e = r.rs_1; n < e; ) (i = (u(31, i) + r.ps_1[n]) | 0), (n = (n + 1) | 0);
                                r = I(r.us_1);
                            } while (r !== this.cs_1);
                            t = i;
                        } else t = 0;
                        return t;
                    }),
                    (f(Bt).toString = function () {
                        return this.tv().toString();
                    }),
                    (f(Bt).tv = function () {
                        if (!(this.ds_1.e1(new q(2147483647, 0)) <= 0)) {
                            var t = "size > Int.MAX_VALUE: " + this.ds_1.toString();
                            throw g(l(t));
                        }
                        return this.xu(this.ds_1.k1());
                    }),
                    (f(Bt).xu = function (t) {
                        var s;
                        if (0 !== t) {
                            ct(this.ds_1, new q(0, 0), d(t));
                            for (var r = 0, i = 0, n = this.cs_1; r < t; ) {
                                if (I(n).rs_1 === n.qs_1) throw N("s.limit == s.pos");
                                (r = (r + ((n.rs_1 - n.qs_1) | 0)) | 0), (i = (i + 1) | 0), (n = n.us_1);
                            }
                            var e = Q(Array(i), null),
                                _ = new Int32Array(u(i, 2));
                            for (r = 0, i = 0, n = this.cs_1; r < t; ) {
                                e[i] = I(n).ps_1;
                                var h = (r = (r + ((n.rs_1 - n.qs_1) | 0)) | 0);
                                (_[i] = Math.min(h, t)), (_[(i + e.length) | 0] = n.qs_1), (n.ss_1 = !0), (i = (i + 1) | 0), (n = n.us_1);
                            }
                            s = new Mt(T(e) ? e : G(), _);
                        } else s = It().qt_1;
                        return s;
                    }),
                    (f(Lt).bs = function (t, s) {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.bs(t, s), this.xv(), c;
                    }),
                    (f(Lt).gv = function (t) {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.gv(t), this.xv();
                    }),
                    (f(Lt).iv = function (t) {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.iv(t), this.xv();
                    }),
                    (f(Lt).jv = function (t, s, r) {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.jv(t, s, r), this.xv();
                    }),
                    (f(Lt).kv = function (t) {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.kv(t), this.xv();
                    }),
                    (f(Lt).xv = function () {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        var t = this.wv_1.su();
                        return t.e1(new q(0, 0)) > 0 && this.uv_1.bs(this.wv_1, t), this;
                    }),
                    (f(Lt).t9 = function () {
                        if (this.vv_1) {
                            throw g(l("closed"));
                        }
                        return this.wv_1.ds_1.e1(new q(0, 0)) > 0 && this.uv_1.bs(this.wv_1, this.wv_1.ds_1), this.uv_1.t9(), c;
                    }),
                    (f(Lt).e5 = function () {
                        var t;
                        if (this.vv_1) t = c;
                        else {
                            var s = null;
                            try {
                                this.wv_1.ds_1.e1(new q(0, 0)) > 0 && this.uv_1.bs(this.wv_1, this.wv_1.ds_1);
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                s = t;
                            }
                            try {
                                this.uv_1.e5();
                            } catch (t) {
                                if (!(t instanceof Error)) throw t;
                                null == s && (s = t);
                            }
                            if (((this.vv_1 = !0), null != s)) throw s;
                        }
                        return t;
                    }),
                    (f(Lt).toString = function () {
                        return "buffer(" + l(this.uv_1) + ")";
                    }),
                    (f(Pt).nu = function () {
                        return this.aw_1;
                    }),
                    (f(Pt).mv = function (t, s) {
                        var r;
                        t: {
                            if (!(s.e1(new q(0, 0)) >= 0)) {
                                var i = "byteCount < 0: " + s.toString();
                                throw w(l(i));
                            }
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            if (this.aw_1.ds_1.equals(new q(0, 0))) {
                                if (s.equals(new q(0, 0))) {
                                    r = new q(0, 0);
                                    break t;
                                }
                                if (this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) {
                                    r = new q(-1, -1);
                                    break t;
                                }
                            }
                            var n = this.aw_1.ds_1,
                                e = s.e1(n) <= 0 ? s : n;
                            r = this.aw_1.mv(t, e);
                        }
                        return r;
                    }),
                    (f(Pt).ou = function () {
                        if (this.zv_1) {
                            throw g(l("closed"));
                        }
                        return this.aw_1.ou() && this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1));
                    }),
                    (f(Pt).pu = function (t) {
                        if (!this.qu(t)) throw Ft();
                    }),
                    (f(Pt).qu = function (t) {
                        var s;
                        t: {
                            if (!(t.e1(new q(0, 0)) >= 0)) {
                                var r = "byteCount < 0: " + t.toString();
                                throw w(l(r));
                            }
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            for (; this.aw_1.ds_1.e1(t) < 0; )
                                if (this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) {
                                    s = !1;
                                    break t;
                                }
                            s = !0;
                        }
                        return s;
                    }),
                    (f(Pt).cv = function (t) {
                        var s;
                        t: {
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            for (;;) {
                                var r = kt(this.aw_1, t, !0);
                                switch (r) {
                                    case -1:
                                        s = -1;
                                        break t;
                                    case -2:
                                        if (this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) {
                                            s = -1;
                                            break t;
                                        }
                                        break;
                                    default:
                                        var i = t.ns_1[r].s();
                                        this.aw_1.es(d(i)), (s = r);
                                        break t;
                                }
                            }
                        }
                        return s;
                    }),
                    (f(Pt).zu = function () {
                        return this.av(new q(-1, 2147483647));
                    }),
                    (f(Pt).av = function (t) {
                        var s;
                        if (!(t.e1(new q(0, 0)) >= 0)) {
                            var r = "limit < 0: " + t.toString();
                            throw w(l(r));
                        }
                        var i = t.equals(new q(-1, 2147483647)) ? new q(-1, 2147483647) : t.g3(d(1)),
                            n = this.bv(10, new q(0, 0), i);
                        if (n.equals(new q(-1, -1))) {
                            var e, _;
                            if (i.e1(new q(-1, 2147483647)) < 0 && this.qu(i)) {
                                var h = i.h3(d(1));
                                _ = 13 === this.aw_1.it(h);
                            } else _ = !1;
                            if (_) {
                                var a = i.g3(d(1));
                                e = this.qu(a);
                            } else e = !1;
                            if (!(!!e && 10 === this.aw_1.it(i))) {
                                var v = new Bt(),
                                    u = new q(0, 0),
                                    f = this.aw_1.ds_1,
                                    o = d(32),
                                    c = o.e1(f) <= 0 ? o : f;
                                this.aw_1.ru(v, u, c);
                                var g = this.aw_1.ds_1;
                                throw new Rt("\\n not found: limit=" + (g.e1(t) <= 0 ? g : t).toString() + " content=" + v.uu().yt() + "…");
                            }
                            s = $t(this.aw_1, i);
                        } else s = $t(this.aw_1, n);
                        return s;
                    }),
                    (f(Pt).es = function (t) {
                        var s = t;
                        if (this.zv_1) {
                            throw g(l("closed"));
                        }
                        for (; s.e1(new q(0, 0)) > 0; ) {
                            if (this.aw_1.ds_1.equals(new q(0, 0)) && this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) throw Ft();
                            var r = s,
                                i = this.aw_1.ds_1,
                                n = r.e1(i) <= 0 ? r : i;
                            this.aw_1.es(n), (s = s.h3(n));
                        }
                        return c;
                    }),
                    (f(Pt).bv = function (t, s, r) {
                        var i;
                        t: {
                            var n = s;
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            if (!(new q(0, 0).e1(n) <= 0 && n.e1(r) <= 0)) {
                                var e = "fromIndex=" + n.toString() + " toIndex=" + r.toString();
                                throw w(l(e));
                            }
                            for (; n.e1(r) < 0; ) {
                                var _ = this.aw_1.bv(t, n, r);
                                if (!_.equals(new q(-1, -1))) {
                                    i = _;
                                    break t;
                                }
                                var h = this.aw_1.ds_1;
                                if (h.e1(r) >= 0 || this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) {
                                    i = new q(-1, -1);
                                    break t;
                                }
                                var a = n;
                                n = a.e1(h) >= 0 ? a : h;
                            }
                            i = new q(-1, -1);
                        }
                        return i;
                    }),
                    (f(Pt).pv = function (t) {
                        return this.qv(t, new q(0, 0));
                    }),
                    (f(Pt).qv = function (t, s) {
                        var r;
                        t: {
                            var i = s;
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            for (;;) {
                                var n = this.aw_1.qv(t, i);
                                if (!n.equals(new q(-1, -1))) {
                                    r = n;
                                    break t;
                                }
                                var e = this.aw_1.ds_1;
                                if (this.yv_1.mv(this.aw_1, new q(8192, 0)).equals(new q(-1, -1))) {
                                    r = new q(-1, -1);
                                    break t;
                                }
                                var _ = i;
                                i = _.e1(e) >= 0 ? _ : e;
                            }
                        }
                        return r;
                    }),
                    (f(Pt).rv = function (t, s) {
                        return this.sv(t, s, 0, s.s());
                    }),
                    (f(Pt).sv = function (t, s, r, i) {
                        var n;
                        t: {
                            if (this.zv_1) {
                                throw g(l("closed"));
                            }
                            if (t.e1(new q(0, 0)) < 0 || r < 0 || i < 0 || ((s.s() - r) | 0) < i) n = !1;
                            else {
                                var e = 0;
                                if (e < i)
                                    do {
                                        var _ = e;
                                        e = (e + 1) | 0;
                                        var h = t.g3(d(_)),
                                            a = h.g3(d(1));
                                        if (!this.qu(a)) {
                                            n = !1;
                                            break t;
                                        }
                                        if (this.aw_1.it(h) !== s.t((r + _) | 0)) {
                                            n = !1;
                                            break t;
                                        }
                                    } while (e < i);
                                n = !0;
                            }
                        }
                        return n;
                    }),
                    (f(Pt).e5 = function () {
                        var t;
                        return this.zv_1 ? (t = c) : ((this.zv_1 = !0), this.yv_1.e5(), this.aw_1.j2()), t;
                    }),
                    (f(Pt).toString = function () {
                        return "buffer(" + l(this.yv_1) + ")";
                    }),
                    (f(Vt).et = function () {
                        return vt();
                    }),
                    (f(Vt).ht = function (t) {}),
                    (r = new ht()),
                    new ft(),
                    (v = new Vt()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ut),
                    (t.$_$.b = function t(s) {
                        var r = Ut(s, z(f(Xt)));
                        return Z(r, t), r;
                    }),
                    (t.$_$.c = It),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-7b644756.0fdb411a.js.map
