(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-ae9f6adc"],
    {
        408012: (t, n, i) => {
            !(function (t, n) {
                "use strict";
                var i,
                    e = n.$_$.kd,
                    u = n.$_$.ue,
                    r = n.$_$.gd,
                    a = n.$_$.rd,
                    s = n.$_$.xd,
                    o = n.$_$.g,
                    l = n.$_$.xk;
                function f(t) {
                    for (var n = 0, i = e(Array(t), null); n < t; ) (i[n] = v(null)), (n = (n + 1) | 0);
                    this.k1a_1 = i;
                }
                function h() {
                    (i = this), c.call(this);
                }
                function _() {
                    return null == i && new h(), i;
                }
                function c() {}
                function $(t) {
                    this.kotlinx$atomicfu$value = t;
                }
                function v(t) {
                    return (function (t, n) {
                        return (n = n === o ? _() : n), new $(t);
                    })(t, _());
                }
                function w(t) {
                    this.kotlinx$atomicfu$value = t;
                }
                function g(t) {
                    this.kotlinx$atomicfu$value = t;
                }
                function m(t) {
                    this.kotlinx$atomicfu$value = t;
                }
                a(f, "AtomicArray"),
                    a(c, "TraceBase"),
                    s(h, "None", o, c),
                    a($, "AtomicRef"),
                    a(w, "AtomicBoolean"),
                    a(g, "AtomicLong"),
                    a(m, "AtomicInt"),
                    (u(f).l1a = function () {
                        return this.k1a_1.length;
                    }),
                    (u(f).atomicfu$get = function (t) {
                        return this.k1a_1[t];
                    }),
                    (u(c).atomicfu$Trace$append$1 = function (t) {}),
                    (u(c).atomicfu$Trace$append$2 = function (t, n) {}),
                    (u(c).atomicfu$Trace$append$3 = function (t, n, i) {}),
                    (u(c).atomicfu$Trace$append$4 = function (t, n, i, e) {}),
                    (u($).m1a = function (t) {
                        this.kotlinx$atomicfu$value = t;
                    }),
                    (u($).n1a = function () {
                        return this.kotlinx$atomicfu$value;
                    }),
                    (u($).atomicfu$compareAndSet = function (t, n) {
                        return this.kotlinx$atomicfu$value === t && ((this.kotlinx$atomicfu$value = n), !0);
                    }),
                    (u($).atomicfu$getAndSet = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t), n;
                    }),
                    (u($).toString = function () {
                        return l(this.kotlinx$atomicfu$value);
                    }),
                    (u(w).o1a = function (t) {
                        this.kotlinx$atomicfu$value = t;
                    }),
                    (u(w).n1a = function () {
                        return this.kotlinx$atomicfu$value;
                    }),
                    (u(w).atomicfu$compareAndSet = function (t, n) {
                        return this.kotlinx$atomicfu$value === t && ((this.kotlinx$atomicfu$value = n), !0);
                    }),
                    (u(w).atomicfu$getAndSet = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t), n;
                    }),
                    (u(w).toString = function () {
                        return this.kotlinx$atomicfu$value.toString();
                    }),
                    (u(g).p1a = function (t) {
                        this.kotlinx$atomicfu$value = t;
                    }),
                    (u(g).n1a = function () {
                        return this.kotlinx$atomicfu$value;
                    }),
                    (u(g).atomicfu$compareAndSet = function (t, n) {
                        return !!this.kotlinx$atomicfu$value.equals(t) && ((this.kotlinx$atomicfu$value = n), !0);
                    }),
                    (u(g).atomicfu$getAndSet = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t), n;
                    }),
                    (u(g).atomicfu$getAndIncrement$long = function () {
                        var t = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t.l3()), t;
                    }),
                    (u(g).atomicfu$getAndDecrement$long = function () {
                        var t = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t.m3()), t;
                    }),
                    (u(g).atomicfu$getAndAdd$long = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.g3(t)), n;
                    }),
                    (u(g).atomicfu$addAndGet$long = function (t) {
                        return (this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.g3(t)), this.kotlinx$atomicfu$value;
                    }),
                    (u(g).atomicfu$incrementAndGet$long = function () {
                        return (this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.l3()), this.kotlinx$atomicfu$value;
                    }),
                    (u(g).atomicfu$decrementAndGet$long = function () {
                        return (this.kotlinx$atomicfu$value = this.kotlinx$atomicfu$value.m3()), this.kotlinx$atomicfu$value;
                    }),
                    (u(g).toString = function () {
                        return this.kotlinx$atomicfu$value.toString();
                    }),
                    (u(m).q1a = function (t) {
                        this.kotlinx$atomicfu$value = t;
                    }),
                    (u(m).n1a = function () {
                        return this.kotlinx$atomicfu$value;
                    }),
                    (u(m).atomicfu$compareAndSet = function (t, n) {
                        return this.kotlinx$atomicfu$value === t && ((this.kotlinx$atomicfu$value = n), !0);
                    }),
                    (u(m).atomicfu$getAndSet = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = t), n;
                    }),
                    (u(m).atomicfu$getAndIncrement = function () {
                        var t = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = (t + 1) | 0), t;
                    }),
                    (u(m).atomicfu$getAndDecrement = function () {
                        var t = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = (t - 1) | 0), t;
                    }),
                    (u(m).atomicfu$getAndAdd = function (t) {
                        var n = this.kotlinx$atomicfu$value;
                        return (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + t) | 0), n;
                    }),
                    (u(m).atomicfu$addAndGet = function (t) {
                        return (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + t) | 0), this.kotlinx$atomicfu$value;
                    }),
                    (u(m).atomicfu$incrementAndGet = function () {
                        return (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value + 1) | 0), this.kotlinx$atomicfu$value;
                    }),
                    (u(m).atomicfu$decrementAndGet = function () {
                        return (this.kotlinx$atomicfu$value = (this.kotlinx$atomicfu$value - 1) | 0), this.kotlinx$atomicfu$value;
                    }),
                    (u(m).toString = function () {
                        return this.kotlinx$atomicfu$value.toString();
                    }),
                    r(u(f), "atomicfu$size", u(f).l1a),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = function (t) {
                        return new f(t);
                    }),
                    (t.$_$.b = function (t) {
                        return (function (t, n) {
                            return (n = n === o ? _() : n), new w(t);
                        })(t, _());
                    }),
                    (t.$_$.c = function (t) {
                        return (function (t, n) {
                            return (n = n === o ? _() : n), new g(t);
                        })(t, _());
                    }),
                    (t.$_$.d = v),
                    (t.$_$.e = function (t) {
                        return (function (t, n) {
                            return (n = n === o ? _() : n), new m(t);
                        })(t, _());
                    });
            })(t.exports, i(519039));
        },
        684331: (t, n, i) => {
            !(function (t, n) {
                "use strict";
                var i,
                    e,
                    u,
                    r,
                    a,
                    s,
                    o = Math.imul,
                    l = n.$_$.q2,
                    f = n.$_$.ej,
                    h = n.$_$.h2,
                    _ = n.$_$.o3,
                    c = n.$_$.ad,
                    $ = n.$_$.ue,
                    v = n.$_$.ye,
                    w = n.$_$.o6,
                    g = n.$_$.we,
                    m = n.$_$.ek,
                    d = n.$_$.p1,
                    k = n.$_$.rd,
                    b = n.$_$.g,
                    x = n.$_$.te,
                    q = n.$_$.sd,
                    p = n.$_$.t7,
                    y = n.$_$.vd,
                    A = n.$_$.l2,
                    S = n.$_$.xd,
                    z = n.$_$.x1,
                    j = n.$_$.zc,
                    C = n.$_$.y1,
                    I = n.$_$.aj;
                function B() {
                    return T(), i;
                }
                function E(t, n, i) {
                    if ((T(), n.e1(new f(0, 0)) < 0 || i.e1(t) > 0)) throw l("startIndex (" + n.toString() + ") and endIndex (" + i.toString() + ") are not within the range [0..size(" + t.toString() + "))");
                    if (n.e1(i) > 0) throw h("startIndex (" + n.toString() + ") > endIndex (" + i.toString() + ")");
                }
                function T() {
                    e || ((e = !0), (i = c([_(48), _(49), _(50), _(51), _(52), _(53), _(54), _(55), _(56), _(57), _(97), _(98), _(99), _(100), _(101), _(102)])));
                }
                function O() {
                    (this.p3a_1 = null), (this.q3a_1 = null), (this.r3a_1 = new f(0, 0));
                }
                function R() {
                    return (t = x($(L))), L.call(t), (t.s3a_1 = new Int8Array(8192)), (t.w3a_1 = !0), (t.v3a_1 = null), t;
                    var t;
                }
                function D() {
                    (this.q3b_1 = 8192), (this.r3b_1 = 1024);
                }
                function L() {
                    (this.t3a_1 = 0), (this.u3a_1 = 0), (this.v3a_1 = null), (this.w3a_1 = !1), (this.x3a_1 = null), (this.y3a_1 = null);
                }
                function G() {}
                function M() {
                    return a || ((a = !0), (r = new K()), new F(), new V()), r;
                }
                function U() {}
                function K() {}
                function F() {}
                function V() {}
                function W(t) {
                    return z(t), P.call(t), t;
                }
                function N(t, n) {
                    return C(t, n), P.call(n), n;
                }
                function P() {
                    j(this, P);
                }
                function X(t) {
                    var n = (function (t, n) {
                        return N(t, n), Y.call(n), n;
                    })(t, x($(Y)));
                    return j(n, X), n;
                }
                function Y() {
                    j(this, Y);
                }
                function H() {
                    (this.f3b_1 = 0), (this.g3b_1 = 0);
                }
                y(G, "Sink"),
                    k(O, "Buffer", O, b, [G]),
                    q(D),
                    k(L, "Segment"),
                    S(U, "UnsafeBufferOperations"),
                    k(K),
                    k(F),
                    k(V),
                    k(
                        P,
                        "IOException",
                        function t() {
                            var n = W(x($(P)));
                            return j(n, t), n;
                        },
                        I,
                    ),
                    k(
                        Y,
                        "EOFException",
                        function t() {
                            var n = ((i = x($(Y))), W(i), Y.call(i), i);
                            var i;
                            return j(n, t), n;
                        },
                        P,
                    ),
                    S(H, "SegmentPool"),
                    ($(O).s = function () {
                        return this.r3a_1;
                    }),
                    ($(O).nu = function () {
                        return this;
                    }),
                    ($(O).ou = function () {
                        return this.s().equals(new f(0, 0));
                    }),
                    ($(O).pu = function (t) {
                        if (!(t.e1(new f(0, 0)) >= 0)) {
                            var n = "byteCount: " + t.toString();
                            throw h(v(n));
                        }
                        if (this.s().e1(t) < 0) throw X("Buffer doesn't contain required number of bytes (size: " + this.s().toString() + ", required: " + t.toString() + ")");
                    }),
                    ($(O).qu = function (t) {
                        if (!(t.e1(new f(0, 0)) >= 0)) {
                            var n = "byteCount: " + t.toString() + " < 0";
                            throw h(v(n));
                        }
                        return this.s().e1(t) >= 0;
                    }),
                    ($(O).tu = function () {
                        var t,
                            n = this.p3a_1;
                        null == n
                            ? (function (t, n) {
                                  throw X("Buffer doesn't contain required number of bytes (size: " + t.s().toString() + ", required: " + n.toString() + ")");
                              })(this, new f(1, 0))
                            : (t = n);
                        var i = t,
                            e = i.z3a();
                        if (0 === e) return this.a3b(), this.tu();
                        var u = i.b3b();
                        return (this.r3a_1 = this.r3a_1.h3(new f(1, 0))), 1 === e && this.a3b(), u;
                    }),
                    ($(O).c3b = function (t, n, i) {
                        var e = t.length;
                        E(g(e), g(n), g(i));
                        var u = this.p3a_1;
                        if (null == u) return -1;
                        var r = u,
                            a = (i - n) | 0,
                            s = r.z3a(),
                            o = Math.min(a, s);
                        return r.d3b(t, n, (n + o) | 0), (this.r3a_1 = this.r3a_1.h3(g(o))), 0 === r.z3a() && this.a3b(), o;
                    }),
                    ($(O).e3b = function (t) {
                        if (!(t >= 1 && t <= 8192)) {
                            throw h(v("unexpected capacity"));
                        }
                        if (null == this.q3a_1) {
                            var n = s.et();
                            return (this.p3a_1 = n), (this.q3a_1 = n), n;
                        }
                        var i = m(this.q3a_1);
                        if (((i.u3a_1 + t) | 0) > 8192 || !i.w3a_1) {
                            var e = i.h3b(s.et());
                            return (this.q3a_1 = e), e;
                        }
                        return i;
                    }),
                    ($(O).i3b = function (t, n, i) {
                        var e = t.length;
                        E(g(e), g(n), g(i));
                        for (var u = n; u < i; ) {
                            var r = this.e3b(1),
                                a = (i - u) | 0,
                                s = r.j3b(),
                                o = Math.min(a, s);
                            r.k3b(t, u, (u + o) | 0), (u = (u + o) | 0);
                        }
                        var l = this.r3a_1,
                            f = (i - n) | 0;
                        this.r3a_1 = l.g3(g(f));
                    }),
                    ($(O).m3b = function (t) {
                        this.e3b(1).n3b(t), (this.r3a_1 = this.r3a_1.g3(new f(1, 0)));
                    }),
                    ($(O).e5 = function () {
                        return w;
                    }),
                    ($(O).toString = function () {
                        if (this.s().equals(new f(0, 0))) return "Buffer(size=0)";
                        for (var t = this.s(), n = g(64), i = (n.e1(t) <= 0 ? n : t).k1(), e = d((o(i, 2) + (this.s().e1(g(64)) > 0 ? 1 : 0)) | 0), u = 0, r = this.p3a_1; null != r; ) {
                            for (var a = M(), s = r, l = 0; u < i && l < s.z3a(); ) {
                                var h = l;
                                l = (h + 1) | 0;
                                var c = a.o3b(s, h);
                                u = (u + 1) | 0;
                                var $ = B(),
                                    v = c >> 4,
                                    w = e.g9($[15 & v]),
                                    m = B(),
                                    k = 15 & c;
                                w.g9(m[k]);
                            }
                            r = r.x3a_1;
                        }
                        return this.s().e1(g(64)) > 0 && e.g9(_(8230)), "Buffer(size=" + this.s().toString() + " hex=" + e.toString() + ")";
                    }),
                    ($(O).a3b = function () {
                        var t = m(this.p3a_1),
                            n = t.x3a_1;
                        (this.p3a_1 = n), null == n ? (this.q3a_1 = null) : (n.y3a_1 = null), (t.x3a_1 = null), s.p3b(t);
                    }),
                    ($(D).s3b = function () {
                        return R();
                    }),
                    ($(L).h3b = function (t) {
                        return (t.y3a_1 = this), (t.x3a_1 = this.x3a_1), null != this.x3a_1 && (m(this.x3a_1).y3a_1 = t), (this.x3a_1 = t), t;
                    }),
                    ($(L).n3b = function (t) {
                        var n = this.u3a_1;
                        (this.u3a_1 = (n + 1) | 0), (this.s3a_1[n] = t);
                    }),
                    ($(L).b3b = function () {
                        var t = this.t3a_1;
                        return (this.t3a_1 = (t + 1) | 0), this.s3a_1[t];
                    }),
                    ($(L).d3b = function (t, n, i) {
                        var e = (i - n) | 0,
                            u = this.s3a_1,
                            r = this.t3a_1,
                            a = (this.t3a_1 + e) | 0;
                        p(u, t, n, r, a), (this.t3a_1 = (this.t3a_1 + e) | 0);
                    }),
                    ($(L).k3b = function (t, n, i) {
                        var e = this.s3a_1,
                            u = this.u3a_1;
                        p(t, e, u, n, i), (this.u3a_1 = (this.u3a_1 + ((i - n) | 0)) | 0);
                    }),
                    ($(L).z3a = function () {
                        return (this.u3a_1 - this.t3a_1) | 0;
                    }),
                    ($(L).j3b = function () {
                        return (this.s3a_1.length - this.u3a_1) | 0;
                    }),
                    ($(L).t3b = function (t) {
                        return this.s3a_1[(this.t3a_1 + t) | 0];
                    }),
                    ($(K).o3b = function (t, n) {
                        return t.t3b(n);
                    }),
                    ($(V).o3b = function (t, n) {
                        return M().o3b(t, n);
                    }),
                    ($(H).et = function () {
                        return u.s3b();
                    }),
                    ($(H).p3b = function (t) {}),
                    ($(O).l3b = function (t, n, i, e) {
                        var u;
                        return (n = n === b ? 0 : n), (i = i === b ? t.length : i), e === b ? (this.i3b(t, n, i), (u = w)) : (u = e.i3b.call(this, t, n, i)), u;
                    }),
                    (u = new D()),
                    new U(),
                    (s = new H()),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = N),
                    (t.$_$.b = O),
                    (t.$_$.c = P),
                    (t.$_$.d = function (t) {
                        return (function (t, n) {
                            var i = n;
                            if (-1 === n) {
                                for (var e = new f(2147483647, 0); t.nu().s().e1(new f(2147483647, 0)) < 0 && t.qu(e); ) e = e.i3(g(2));
                                if (!(t.nu().s().e1(new f(2147483647, 0)) < 0)) {
                                    var u = "Can't create an array of size " + t.nu().s().toString();
                                    throw A(v(u));
                                }
                                i = t.nu().s().k1();
                            } else t.pu(g(n));
                            var r = new Int8Array(i);
                            return (
                                (function (t, n, i, e) {
                                    (i = i === b ? 0 : i), (e = e === b ? n.length : e);
                                    var u = n.length;
                                    E(g(u), g(i), g(e));
                                    var r = i;
                                    for (; r < e; ) {
                                        var a = t.c3b(n, r, e);
                                        if (-1 === a) throw X("Source exhausted before reading " + ((e - i) | 0) + " bytes. Only " + a + " bytes were read.");
                                        r = (r + a) | 0;
                                    }
                                })(t.nu(), r),
                                r
                            );
                        })(t, -1);
                    });
            })(t.exports, i(519039));
        },
        376456: (t, n, i) => {
            !(function (t, n, i) {
                "use strict";
                var e,
                    u,
                    r,
                    a = Math.imul,
                    s = n.$_$.rd,
                    o = i.$_$.n2,
                    l = n.$_$.o6,
                    f = n.$_$.g,
                    h = n.$_$.ue,
                    _ = n.$_$.xd,
                    c = i.$_$.w2,
                    $ = i.$_$.e,
                    v = n.$_$.zc,
                    w = n.$_$.q1,
                    g = n.$_$.cd,
                    m = n.$_$.xk,
                    d = n.$_$.ye,
                    k = n.$_$.sj,
                    b = n.$_$.yk,
                    x = i.$_$.t1,
                    q = i.$_$.f1,
                    p = i.$_$.m,
                    y = n.$_$.id,
                    A = i.$_$.n,
                    S = n.$_$.f,
                    z = n.$_$.b5,
                    j = n.$_$.lj,
                    C = i.$_$.v,
                    I = n.$_$.pe,
                    B = i.$_$.x1,
                    E = n.$_$.ag,
                    T = n.$_$.u,
                    O = n.$_$.w4,
                    R = n.$_$.tj,
                    D = n.$_$.e5,
                    L = n.$_$.wb,
                    G = n.$_$.g5,
                    M = n.$_$.v7,
                    U = n.$_$.we,
                    K = n.$_$.ej,
                    F = n.$_$.l2,
                    V = n.$_$.xe,
                    W = n.$_$.t9,
                    N = n.$_$.k8,
                    P = n.$_$.g8,
                    X = n.$_$.nj,
                    Y = (n.$_$.w5, n.$_$.ld),
                    H = (n.$_$.v5, n.$_$.hd),
                    J = n.$_$.wa,
                    Q = i.$_$.f,
                    Z = i.$_$.r1,
                    tt = n.$_$.t7,
                    nt = n.$_$.uk,
                    it = i.$_$.u1,
                    et = n.$_$.ae,
                    ut = n.$_$.u3,
                    rt = i.$_$.l,
                    at = i.$_$.o1,
                    st = i.$_$.n1,
                    ot = i.$_$.y1,
                    lt = n.$_$.eg,
                    ft = n.$_$.vk,
                    ht = n.$_$.wk,
                    _t = n.$_$.ka,
                    ct = n.$_$.x9,
                    $t = n.$_$.xa,
                    vt = n.$_$.m4,
                    wt = n.$_$.ff,
                    gt = n.$_$.a4,
                    mt = n.$_$.b4,
                    dt = n.$_$.n4,
                    kt = n.$_$.h5,
                    bt = n.$_$.i5,
                    xt = n.$_$.p4,
                    qt = n.$_$.x4,
                    pt = n.$_$.y4,
                    yt = n.$_$.se,
                    At = n.$_$.ve,
                    St = n.$_$.y6,
                    zt = n.$_$.ge,
                    jt = n.$_$.e9,
                    Ct = n.$_$.qk,
                    It = n.$_$.o2;
                function Bt() {}
                function Et(t) {
                    return (t.x8z_1 = !1), (t.y8z_1 = !1), (t.z8z_1 = !0), (t.a90_1 = !0), (t.b90_1 = !0), (t.c90_1 = !0), (t.d90_1 = !0), (t.e90_1 = !0), (t.f90_1 = !0), (t.g90_1 = !0), (t.h90_1 = !1), (t.i90_1 = o()), l;
                }
                function Tt() {
                    (e = this), Rt.call(this, new Ut(!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1), o());
                    this.l90_1 = Dt(f, Et);
                }
                function Ot() {
                    return null == e && new Tt(), e;
                }
                function Rt(t, n) {
                    Ot(), (this.m90_1 = t), (this.n90_1 = n);
                }
                function Dt(t, n) {
                    var i = new Lt((t = t === f ? Ot() : t));
                    return n(i), new Gt(new Ut(i.x8z_1, i.y8z_1, i.z8z_1, i.a90_1, i.b90_1, i.c90_1, i.d90_1, i.e90_1, i.f90_1, i.g90_1, i.h90_1), i.i90_1);
                }
                function Lt(t) {
                    (this.x8z_1 = t.m90_1.q90_1), (this.y8z_1 = t.m90_1.r90_1), (this.z8z_1 = t.m90_1.s90_1), (this.a90_1 = t.m90_1.t90_1), (this.b90_1 = t.m90_1.u90_1), (this.c90_1 = t.m90_1.v90_1), (this.d90_1 = t.m90_1.w90_1), (this.e90_1 = t.m90_1.x90_1), (this.f90_1 = t.m90_1.y90_1), (this.g90_1 = t.m90_1.z90_1), (this.h90_1 = t.m90_1.a91_1), (this.i90_1 = t.a3g());
                }
                function Gt(t, n) {
                    Rt.call(this, t, n);
                }
                function Mt() {}
                function Ut(t, n, i, e, u, r, a, s, o, l, f) {
                    (this.q90_1 = t), (this.r90_1 = n), (this.s90_1 = i), (this.t90_1 = e), (this.u90_1 = u), (this.v90_1 = r), (this.w90_1 = a), (this.x90_1 = s), (this.y90_1 = o), (this.z90_1 = l), (this.a91_1 = f);
                }
                function Kt() {}
                function Ft() {}
                function Vt() {}
                function Wt() {}
                function Nt(t) {
                    $(t, this), v(this, Nt);
                }
                function Pt(t, n) {
                    return new Nt("Expected " + t + ", but found " + Xt(n));
                }
                function Xt(t) {
                    var n = "0123456789ABCDEF",
                        i = w();
                    return i.g9(g(n, (t >> 4) & 15)), i.g9(g(n, 15 & t)), i.toString();
                }
                function Yt(t, n) {
                    var i = t.i91_1.r91(),
                        e = i.gh(),
                        u = i.hh(),
                        r = i.kp(),
                        a = null == r ? null : r.nr_1;
                    null == e && null != u && (e = vn(n, u));
                    return b(e, null == a ? null : new k(a));
                }
                function Ht(t) {
                    return (!t.k91_1 && t.i91_1.s91()) || (t.k91_1 && t.l91_1 >= t.j91_1);
                }
                function Jt(t, n, i, e) {
                    if (t.u91().m90_1.v90_1) {
                        var u = Gn(n, i);
                        if (null == (null == u ? null : new k(u)));
                        else {
                            var r = (null == u ? null : new k(u)).nr_1;
                            t.i91_1.t91(r, e);
                        }
                    }
                }
                function Qt(t, n) {
                    x.call(this), (this.h91_1 = t), (this.i91_1 = n), (this.j91_1 = -1), (this.k91_1 = !1), (this.l91_1 = 0), (this.m91_1 = !1), (this.n91_1 = null);
                }
                function Zt(t) {
                    return (t.q91_1 = t.o91_1.m6h()), t.q91_1;
                }
                function tn(t, n) {
                    if (t.q91_1 !== n) throw Pt("byte " + Xt(n), t.q91_1);
                    Zt(t);
                }
                function nn(t, n, i, e, u) {
                    if ((un(t, n), t.q91_1 === i)) return tn(t, i), -1;
                    if ((224 & t.q91_1) !== e) throw Pt("start of " + u, t.q91_1);
                    var r = rn(t).k1();
                    return Zt(t), r;
                }
                function en(t) {
                    var n;
                    if (31 & ~t.q91_1) {
                        var i = rn(t).k1();
                        n = an(t.o91_1, t, i);
                    } else
                        Zt(t),
                            (n = (function (t) {
                                var n = T();
                                do {
                                    n.k(en(t)), Zt(t);
                                } while (!t.s91());
                                return (function (t) {
                                    gn();
                                    var n = 0,
                                        i = t.p();
                                    for (; i.q(); ) {
                                        n = (n + i.r().length) | 0;
                                    }
                                    var e = new Int8Array(n),
                                        u = 0,
                                        r = t.p();
                                    for (; r.q(); ) {
                                        var a = r.r(),
                                            s = u,
                                            o = a.length;
                                        tt(a, e, s, 0, o), (u = (u + a.length) | 0);
                                    }
                                    return e;
                                })(n);
                            })(t));
                    return n;
                }
                function un(t, n) {
                    for (var i = 0, e = T(); 192 == (224 & t.q91_1); ) {
                        var u = rn(t),
                            r = O(u),
                            a = new R(r);
                        if ((e.k(a), t.p91_1)) {
                            if (null == (null == n ? null : new k(n)));
                            else {
                                var s = (null == n ? null : new k(n)).nr_1,
                                    o = i;
                                if (((i = (o + 1) | 0), o >= D(s))) throw new Nt("More tags found than the " + D(s) + " tags specified");
                            }
                        }
                        Zt(t);
                    }
                    var l = e.h() ? null : L(e),
                        f = null == l ? null : new k(l),
                        h = null == f ? null : f.nr_1;
                    if (null == (null == n ? null : new k(n)));
                    else {
                        var _ = (null == n ? null : new k(n)).nr_1;
                        if (t.p91_1) t.t91(_, h);
                        else if (e.s() < D(_) || !y(e.g2(0, D(_)), M(_))) throw new Nt("CBOR tags " + d(e) + " do not start with specified tags " + G(_));
                    }
                    return null == f ? null : f.nr_1;
                }
                function rn(t) {
                    var n,
                        i = 31 & t.q91_1,
                        e = 32 == (224 & t.q91_1);
                    switch (i) {
                        case 24:
                            n = 1;
                            break;
                        case 25:
                            n = 2;
                            break;
                        case 26:
                            n = 4;
                            break;
                        case 27:
                            n = 8;
                            break;
                        default:
                            n = 0;
                    }
                    if (0 === n) return e ? U((i + 1) | 0).n3() : U(i);
                    var u = (function (t, n, i) {
                        var e = an(t, n, i),
                            u = new K(0, 0),
                            r = 0;
                        if (r < i)
                            do {
                                var a = r;
                                (r = (r + 1) | 0), (u = u.q3(8).u3(U(255 & e[a])));
                            } while (r < i);
                        return u;
                    })(t.o91_1, t, n);
                    return e ? u.g3(U(1)).n3() : u;
                }
                function an(t, n, i) {
                    if (i > t.k92()) {
                        var e = "Unexpected EOF, available " + t.k92() + " bytes, requested: " + i;
                        throw F(d(e));
                    }
                    var u = new Int8Array(i);
                    return t.fv(u, 0, i), u;
                }
                function sn(t) {
                    var n = t.o91_1.m6h(),
                        i = t.o91_1.m6h();
                    return V((n << 8) | i);
                }
                function on(t) {
                    var n = 0,
                        i = 0;
                    if (i <= 3)
                        do {
                            (i = (i + 1) | 0), (n = (n << 8) | t.o91_1.m6h());
                        } while (i <= 3);
                    return n;
                }
                function ln(t, n) {
                    var i = W(n);
                    if (0 <= i)
                        t: do {
                            var e = i;
                            switch (((i = (i + -1) | 0), n.t(e))) {
                                case -1:
                                    break t;
                                case 1:
                                    n.m2(e);
                                    break;
                                default:
                                    n.k2(e, (n.t(e) - 1) | 0);
                                    break t;
                            }
                        } while (0 <= i);
                }
                function fn(t) {
                    var n,
                        i = 224 & t.q91_1,
                        e = 31 & t.q91_1;
                    switch (i) {
                        case 64:
                        case 96:
                        case 128:
                            n = rn(t).k1();
                            break;
                        case 160:
                            n = a(rn(t).k1(), 2);
                            break;
                        default:
                            switch (e) {
                                case 24:
                                    n = 1;
                                    break;
                                case 25:
                                    n = 2;
                                    break;
                                case 26:
                                    n = 4;
                                    break;
                                case 27:
                                    n = 8;
                                    break;
                                default:
                                    n = 0;
                            }
                    }
                    return n;
                }
                function hn(t, n) {
                    (this.o91_1 = t), (this.p91_1 = n), (this.q91_1 = -1), Zt(this);
                }
                function _n(t, n) {
                    Qt.call(this, t, n), (this.v92_1 = 0);
                }
                function cn(t, n) {
                    _n.call(this, t, n);
                }
                function $n(t, n) {
                    gn();
                    var i = t.u3d(n);
                    if (-3 === i) throw Q(t.d3d() + " does not contain element with name '" + n + ". You can enable 'CborBuilder.ignoreUnknownKeys' property to ignore unknown keys");
                    return i;
                }
                function vn(t, n) {
                    var i;
                    gn();
                    t: {
                        for (var e = Z(t).p(); e.q(); ) {
                            var u = e.r();
                            if (y(Mn(t, t.u3d(u)), n)) {
                                i = u;
                                break t;
                            }
                        }
                        i = null;
                    }
                    return i;
                }
                function wn(t) {
                    gn();
                    var n,
                        i,
                        e = !!(32768 & t),
                        r = (t >> 10) & 31,
                        a = 1023 & t;
                    switch (r) {
                        case 31:
                            (n = 255), (i = a);
                            break;
                        case 0:
                            if (0 !== a) {
                                var s = 0 | (gn(), u + a),
                                    o = Y(s);
                                return (o -= 0.5), e ? -o : o;
                            }
                            (i = 0), (n = 0);
                            break;
                        default:
                            (n = (r + 112) | 0), (i = a);
                    }
                    var l = Y((n << 23) | (i << 13));
                    return e ? -l : l;
                }
                function gn() {
                    r || ((r = !0), (u = nt(0.5)));
                }
                function mn(t, n) {
                    (this.e93_1 = t), (this.f93_1 = n);
                }
                function dn(t, n) {
                    it.call(this), (this.b91_1 = t), (this.c91_1 = n), (this.d91_1 = !1), (this.e91_1 = !1);
                }
                function kn(t, n) {
                    var i;
                    dn.call(this, t, n), (this.m93_1 = ((i = new mn(n, -1)), _t([i])));
                }
                function bn(t, n) {
                    dn.call(this, t, n);
                }
                function xn(t, n) {
                    Cn(t, lt(n), 96);
                }
                function qn(t, n) {
                    return t.t93(
                        (function (t) {
                            var n;
                            if (t.e1(new K(0, 0)) >= 0) {
                                n = Bn(O(t));
                            } else
                                n = (function (t) {
                                    var n = t.equals(new K(0, -2147483648)) ? new K(-1, 2147483647) : yt(-1).h3(t),
                                        i = O(n),
                                        e = Bn(i),
                                        u = e[0];
                                    return (e[0] = At(32 | u)), e;
                                })(t);
                            return n;
                        })(n),
                    );
                }
                function pn(t, n) {
                    In(t, n, 192);
                }
                function yn(t) {
                    return ct(t);
                }
                function An(t, n) {
                    In(t, n, 128);
                }
                function Sn(t, n) {
                    In(t, n, 160);
                }
                function zn(t) {
                    return t.s93(159);
                }
                function jn(t) {
                    return t.s93(191);
                }
                function Cn(t, n, i) {
                    var e = n.length;
                    In(t, O(U(e)), i), t.t93(n);
                }
                function In(t, n, i) {
                    var e,
                        u = vt(0),
                        r = vt(23),
                        a = new wt(u, r),
                        s = a.xq_1;
                    if (qt(n, xt(a.yq_1)) <= 0 && 0 <= qt(n, xt(s))) {
                        En(t, pt(n).k1() | i), (e = l);
                    } else {
                        var o = vt(24),
                            f = gt(-1),
                            h = vt(255 & mt(f)),
                            _ = new wt(o, h),
                            c = _.xq_1;
                        if (qt(n, xt(_.yq_1)) <= 0 && 0 <= qt(n, xt(c))) {
                            En(t, 24 | i), En(t, pt(n).k1()), (e = l);
                        } else {
                            var $ = gt(-1),
                                v = vt(255 & mt($)),
                                w = vt(1),
                                g = vt((dt(v) + dt(w)) | 0),
                                m = kt(-1),
                                d = vt(65535 & bt(m)),
                                k = new wt(g, d),
                                b = k.xq_1;
                            if (qt(n, xt(k.yq_1)) <= 0 && 0 <= qt(n, xt(b))) Tn(t, n, 2, 25 | i), (e = l);
                            else {
                                var x = kt(-1),
                                    q = vt(65535 & bt(x)),
                                    p = vt(1),
                                    y = vt((dt(q) + dt(p)) | 0),
                                    A = vt(-1),
                                    S = new wt(y, A),
                                    z = S.xq_1;
                                qt(n, xt(S.yq_1)) <= 0 && 0 <= qt(n, xt(z)) ? (Tn(t, n, 4, 26 | i), (e = l)) : (Tn(t, n, 8, 27 | i), (e = l));
                            }
                        }
                    }
                    return e;
                }
                function Bn(t) {
                    var n,
                        i = vt(0),
                        e = vt(23),
                        u = new wt(i, e),
                        r = u.xq_1;
                    if (qt(t, xt(u.yq_1)) <= 0 && 0 <= qt(t, xt(r))) {
                        var a = pt(t).w3();
                        n = new Int8Array([a]);
                    } else {
                        var s = vt(24),
                            o = gt(-1),
                            l = vt(255 & mt(o)),
                            f = new wt(s, l),
                            h = f.xq_1;
                        if (qt(t, xt(f.yq_1)) <= 0 && 0 <= qt(t, xt(h))) {
                            var _ = pt(t).w3();
                            n = new Int8Array([24, _]);
                        } else {
                            var c = gt(-1),
                                $ = vt(255 & mt(c)),
                                v = vt(1),
                                w = vt((dt($) + dt(v)) | 0),
                                g = kt(-1),
                                m = vt(65535 & bt(g)),
                                d = new wt(w, m),
                                k = d.xq_1;
                            if (qt(t, xt(d.yq_1)) <= 0 && 0 <= qt(t, xt(k))) n = On(t, 2, 25);
                            else {
                                var b = kt(-1),
                                    x = vt(65535 & bt(b)),
                                    q = vt(1),
                                    p = vt((dt(x) + dt(q)) | 0),
                                    y = vt(-1),
                                    A = new wt(p, y),
                                    S = A.xq_1;
                                n = qt(t, xt(A.yq_1)) <= 0 && 0 <= qt(t, xt(S)) ? On(t, 4, 26) : On(t, 8, 27);
                            }
                        }
                    }
                    return n;
                }
                function En(t, n) {
                    return t.s93(n);
                }
                function Tn(t, n, i, e) {
                    var u = (a(i, 8) - 8) | 0;
                    En(t, e);
                    var r = 0;
                    if (r < i)
                        do {
                            var s = r;
                            r = (r + 1) | 0;
                            var o = (u - a(8, s)) | 0,
                                l = O(pt(n).s3(o)),
                                f = O(new K(255, 0)),
                                h = O(pt(l).t3(pt(f)));
                            En(t, pt(h).k1());
                        } while (r < i);
                }
                function On(t, n, i) {
                    var e = new Int8Array((n + 1) | 0),
                        u = (a(n, 8) - 8) | 0;
                    e[0] = i;
                    var r = 0;
                    if (r < n)
                        do {
                            var s = r;
                            r = (r + 1) | 0;
                            var o = (s + 1) | 0,
                                l = (u - a(8, s)) | 0,
                                f = O(pt(t).s3(l)),
                                h = O(new K(255, 0)),
                                _ = O(pt(f).t3(pt(h)));
                            e[o] = pt(_).w3();
                        } while (r < n);
                    return e;
                }
                function Rn(t) {
                    return t.q3d() && Dn(t, 0);
                }
                function Dn(t, n) {
                    var i;
                    t: {
                        for (var e = t.v3d(n).p(); e.q(); ) {
                            var u = e.r();
                            if (u instanceof Bt) {
                                i = u;
                                break t;
                            }
                        }
                        i = null;
                    }
                    return !(null == i);
                }
                function Ln(t) {
                    var n;
                    t: {
                        var i = t.s3d();
                        if (!!zt(i, St) && i.h()) n = !1;
                        else {
                            for (var e = i.p(); e.q(); ) {
                                if (e.r() instanceof Mt) {
                                    n = !0;
                                    break t;
                                }
                            }
                            n = !1;
                        }
                    }
                    return n;
                }
                function Gn(t, n) {
                    var i;
                    t: {
                        for (var e = t.v3d(n).p(); e.q(); ) {
                            var u = e.r();
                            if (u instanceof Ft) {
                                i = u;
                                break t;
                            }
                        }
                        i = null;
                    }
                    var r = null == i || i instanceof Ft ? i : j();
                    return null == r ? null : r.u93_1;
                }
                function Mn(t, n) {
                    var i;
                    t: {
                        for (var e = t.v3d(n).p(); e.q(); ) {
                            var u = e.r();
                            if (u instanceof Kt) {
                                i = u;
                                break t;
                            }
                        }
                        i = null;
                    }
                    var r = null == i || i instanceof Kt ? i : j();
                    return null == r ? null : r.v93_1;
                }
                function Un(t, n) {
                    var i;
                    t: {
                        for (var e = t.v3d(n).p(); e.q(); ) {
                            var u = e.r();
                            if (u instanceof Vt) {
                                i = u;
                                break t;
                            }
                        }
                        i = null;
                    }
                    var r = null == i || i instanceof Vt ? i : j();
                    return null == r ? null : r.w93_1;
                }
                function Kn(t) {
                    for (var n = t.s3d(), i = T(), e = n.p(); e.q(); ) {
                        var u = e.r();
                        u instanceof Wt && i.k(u);
                    }
                    var r = jt(i);
                    return null == r ? null : r.x93_1;
                }
                function Fn(t, n) {
                    if (((t.g91_1 + n) | 0) <= t.f91_1.length) return l;
                    var i = new Int8Array(Ct((t.g91_1 + n) | 0) << 1),
                        e = t.f91_1,
                        u = e.length;
                    tt(e, i, 0, 0, u), (t.f91_1 = i);
                }
                function Vn() {
                    (this.f91_1 = new Int8Array(32)), (this.g91_1 = 0);
                }
                function Wn(t) {
                    (this.i92_1 = t), (this.j92_1 = 0);
                }
                s(Bt, "ByteString"),
                    s(Rt, "Cbor"),
                    _(Tt, "Default", f, Rt),
                    s(Lt, "CborBuilder"),
                    s(Gt, "CborImpl", f, Rt),
                    s(Mt, "CborArray"),
                    s(Ut, "CborConfiguration"),
                    s(Kt, "CborLabel"),
                    s(Ft, "KeyTags"),
                    s(Vt, "ValueTags"),
                    s(Wt, "ObjectTags"),
                    s(Nt, "CborDecodingException", f, c),
                    s(Qt, "CborReader", f, x, [x, B]),
                    s(hn, "CborParser"),
                    s(_n, "CborListReader", f, Qt),
                    s(cn, "CborMapReader", f, _n),
                    s(mn, "Data"),
                    s(dn, "CborWriter", f, it, [it, ot]),
                    s(kn, "DefiniteLengthCborWriter", f, dn),
                    s(bn, "IndefiniteLengthCborWriter", f, dn),
                    s(Vn, "ByteArrayOutput", Vn),
                    s(Wn, "ByteArrayInput"),
                    (h(Rt).a3g = function () {
                        return this.n90_1;
                    }),
                    (h(Rt).o90 = function (t, n) {
                        var i = new Vn();
                        return (this.m90_1.y90_1 ? new kn(this, i) : new bn(this, i)).d3h(t, n), i.bu();
                    }),
                    (h(Rt).p90 = function (t, n) {
                        return new Qt(this, new hn(new Wn(n), this.m90_1.x90_1)).k3f(t);
                    }),
                    (h(Ut).toString = function () {
                        return "CborConfiguration(encodeDefaults=" + this.q90_1 + ", ignoreUnknownKeys=" + this.r90_1 + ", encodeKeyTags=" + this.s90_1 + ", encodeValueTags=" + this.t90_1 + ", encodeObjectTags=" + this.u90_1 + ", verifyKeyTags=" + this.v90_1 + ", verifyValueTags=" + this.w90_1 + ", verifyObjectTags=" + this.x90_1 + ", useDefiniteLengthEncoding=" + this.y90_1 + ", preferCborLabelsOverNames=" + this.z90_1 + ", alwaysUseByteString=" + this.a91_1 + ")";
                    }),
                    (h(Qt).u91 = function () {
                        return this.h91_1;
                    }),
                    (h(Qt).v91 = function (t) {
                        t >= 0 && ((this.k91_1 = !0), (this.j91_1 = t));
                    }),
                    (h(Qt).a3g = function () {
                        return this.u91().a3g();
                    }),
                    (h(Qt).w91 = function (t) {
                        return this.v91(this.i91_1.x91(t));
                    }),
                    (h(Qt).l3f = function (t) {
                        var n;
                        if (Ln(t)) n = new _n(this.u91(), this.i91_1);
                        else {
                            var i = t.p3d();
                            n = !!y(i, p()) || i instanceof q ? new _n(this.u91(), this.i91_1) : y(i, A()) ? new cn(this.u91(), this.i91_1) : new Qt(this.u91(), this.i91_1);
                        }
                        var e,
                            u = n,
                            r = this.u91().m90_1.x90_1 ? Kn(t) : null,
                            a = this.n91_1;
                        if (null == (null == a ? null : new k(a))) e = null;
                        else {
                            var s = (null == a ? null : new k(a)).nr_1;
                            e = null == (null == r ? null : new k(r)) ? s : z(S([s, r]));
                        }
                        var o,
                            l = e;
                        return (o = null == (null == l ? null : new k(l)) ? r : l), u.w91(o), u;
                    }),
                    (h(Qt).m3f = function (t) {
                        this.k91_1 || this.i91_1.y91();
                    }),
                    (h(Qt).c3g = function (t) {
                        var n;
                        if (this.u91().m90_1.r90_1) {
                            var i;
                            t: for (;;) {
                                if (Ht(this)) return -1;
                                var e,
                                    u = Yt(this, t),
                                    r = u.gh(),
                                    a = u.hh(),
                                    s = null == a ? null : a.nr_1;
                                this.l91_1 = (this.l91_1 + 1) | 0;
                                e = null == r ? null : t.u3d(r);
                                var o = null == e ? -3 : e;
                                if (-3 !== o) {
                                    Jt(this, t, o, s), (i = o);
                                    break t;
                                }
                                this.i91_1.z91(s);
                            }
                            n = i;
                        } else {
                            if (Ht(this)) return -1;
                            var l = (function (t, n) {
                                    var i = t.i91_1.r91(),
                                        e = i.gh(),
                                        u = i.hh(),
                                        r = i.kp(),
                                        a = null == r ? null : r.nr_1;
                                    if (null == e && null != u) {
                                        var s = vn(n, u);
                                        if (null == s) throw new Nt("CborLabel unknown: " + m(u) + " for " + d(n));
                                        e = s;
                                    }
                                    if (null == e) throw new Nt("Expected (tagged) string or number, got nothing for " + d(n));
                                    return b(e, null == a ? null : new k(a));
                                })(this, t),
                                f = l.gh(),
                                h = l.hh(),
                                _ = null == h ? null : h.nr_1;
                            this.l91_1 = (this.l91_1 + 1) | 0;
                            var c = $n(t, f);
                            Jt(this, t, c, _), (n = c);
                        }
                        var $ = n;
                        return (this.m91_1 = Dn(t, $)), (this.n91_1 = this.u91().m90_1.w90_1 ? Un(t, $) : null), $;
                    }),
                    (h(Qt).k3f = function (t) {
                        var n;
                        if ((this.m91_1 || this.u91().m90_1.a91_1) && y(t.c3c(), C().c3c())) {
                            var i = this.i91_1.a92(this.n91_1);
                            n = null != i ? i : j();
                        } else (this.m91_1 = this.m91_1 || Rn(t.c3c())), (n = h(x).k3f.call(this, t));
                        return n;
                    }),
                    (h(Qt).g3f = function () {
                        return this.i91_1.b92(this.n91_1);
                    }),
                    (h(Qt).w3e = function () {
                        return !this.i91_1.c92();
                    }),
                    (h(Qt).e3f = function () {
                        return this.i91_1.d92(this.n91_1);
                    }),
                    (h(Qt).d3f = function () {
                        return this.i91_1.e92(this.n91_1);
                    }),
                    (h(Qt).y3e = function () {
                        return this.i91_1.f92(this.n91_1);
                    }),
                    (h(Qt).z3e = function () {
                        return this.i91_1.g92(this.n91_1).w3();
                    }),
                    (h(Qt).a3f = function () {
                        return this.i91_1.g92(this.n91_1).x3();
                    }),
                    (h(Qt).f3f = function () {
                        return I(this.i91_1.g92(this.n91_1).k1());
                    }),
                    (h(Qt).b3f = function () {
                        return this.i91_1.g92(this.n91_1).k1();
                    }),
                    (h(Qt).c3f = function () {
                        return this.i91_1.g92(this.n91_1);
                    }),
                    (h(Qt).x3e = function () {
                        return this.i91_1.h92(this.n91_1);
                    }),
                    (h(Qt).h3f = function (t) {
                        return $n(t, this.i91_1.b92(this.n91_1));
                    }),
                    (h(hn).l92 = function () {
                        return -1 === this.q91_1;
                    }),
                    (h(hn).c92 = function () {
                        return 246 === this.q91_1 || 160 === this.q91_1;
                    }),
                    (h(hn).h92 = function (t) {
                        return un(this, t), 246 === this.q91_1 ? tn(this, 246) : 160 === this.q91_1 && tn(this, 160), null;
                    }),
                    (h(hn).f92 = function (t) {
                        var n;
                        switch ((un(this, t), this.q91_1)) {
                            case 245:
                                n = !0;
                                break;
                            case 244:
                                n = !1;
                                break;
                            default:
                                throw Pt("boolean value", this.q91_1);
                        }
                        var i = n;
                        return Zt(this), i;
                    }),
                    (h(hn).m92 = function (t) {
                        return nn(this, t, 159, 128, "array");
                    }),
                    (h(hn).x91 = function (t) {
                        return nn(this, t, 191, 160, "map");
                    }),
                    (h(hn).s91 = function () {
                        return 255 === this.q91_1;
                    }),
                    (h(hn).y91 = function () {
                        return tn(this, 255);
                    }),
                    (h(hn).a92 = function (t) {
                        if ((un(this, t), 64 != (224 & this.q91_1))) throw Pt("start of byte string", this.q91_1);
                        var n = en(this);
                        return Zt(this), n;
                    }),
                    (h(hn).b92 = function (t) {
                        return (function (t, n) {
                            var i = un(t, n);
                            if (96 != (224 & t.q91_1)) throw Pt("start of string", t.q91_1);
                            var e = en(t),
                                u = E(e);
                            return Zt(t), b(u, null == i ? null : new k(i));
                        })(this, t).ah_1;
                    }),
                    (h(hn).t91 = function (t, n) {
                        if (!P(t, n)) {
                            throw new Nt("CBOR tags " + (null == (null == n ? null : new k(n)) ? null : N(n)) + " do not match expected tags " + N(t));
                        }
                    }),
                    (h(hn).r91 = function () {
                        var t = un(this, null);
                        if (96 == (224 & this.q91_1)) {
                            var n = en(this),
                                i = E(n);
                            Zt(this);
                            return new X(i, null, null == t ? null : new k(t));
                        }
                        var e = rn(this);
                        Zt(this);
                        return new X(null, e, null == t ? null : new k(t));
                    }),
                    (h(hn).g92 = function (t) {
                        un(this, t);
                        var n = rn(this);
                        return Zt(this), n;
                    }),
                    (h(hn).e92 = function (t) {
                        var n;
                        switch ((un(this, t), this.q91_1)) {
                            case 250:
                                var i = on(this);
                                n = Y(i);
                                break;
                            case 249:
                                n = wn(sn(this));
                                break;
                            default:
                                throw Pt("float header", this.q91_1);
                        }
                        var e = n;
                        return Zt(this), e;
                    }),
                    (h(hn).d92 = function (t) {
                        var n;
                        switch ((un(this, t), this.q91_1)) {
                            case 251:
                                var i = (function (t) {
                                    var n = new K(0, 0),
                                        i = 0;
                                    if (i <= 7)
                                        do {
                                            i = (i + 1) | 0;
                                            var e = t.o91_1.m6h();
                                            n = n.q3(8).u3(U(e));
                                        } while (i <= 7);
                                    return n;
                                })(this);
                                n = H(i);
                                break;
                            case 250:
                                var e = on(this);
                                n = Y(e);
                                break;
                            case 249:
                                n = wn(sn(this));
                                break;
                            default:
                                throw Pt("double header", this.q91_1);
                        }
                        var u = n;
                        return Zt(this), u;
                    }),
                    (h(hn).z91 = function (t) {
                        var n,
                            i,
                            e = T();
                        un(this, t);
                        do {
                            if (this.l92()) throw new Nt("Unexpected EOF while skipping element");
                            if (((i = void 0), (i = 224 & (n = this).q91_1), 31 & ~n.q91_1 || (128 !== i && 160 !== i && 64 !== i && 96 !== i)))
                                if (this.s91()) {
                                    if (-1 !== J(e)) throw Pt("next data item", this.q91_1);
                                    ln(0, e);
                                } else {
                                    var u = 224 & this.q91_1,
                                        r = fn(this);
                                    switch (u) {
                                        case 128:
                                        case 160:
                                            r > 0 && e.k(r);
                                            var a = un(this, t);
                                            null == a || new k(a);
                                            break;
                                        default:
                                            this.o91_1.n92(r), ln(0, e);
                                    }
                                }
                            else e.k(-1);
                            Zt(this);
                            var s = !e.h();
                        } while (s);
                    }),
                    (h(_n).w91 = function (t) {
                        var n,
                            i = this.n91_1;
                        if (null == (null == i ? null : new k(i))) n = null;
                        else {
                            var e = (null == i ? null : new k(i)).nr_1;
                            n = null == (null == t ? null : new k(t)) ? e : z(S([e, t]));
                        }
                        var u,
                            r = n;
                        return (u = null == (null == r ? null : new k(r)) ? t : r), this.v91(this.i91_1.m92(u));
                    }),
                    (h(_n).c3g = function (t) {
                        var n;
                        if ((!this.k91_1 && this.i91_1.s91()) || (this.k91_1 && this.v92_1 >= this.j91_1)) n = -1;
                        else {
                            var i = this.v92_1;
                            (this.v92_1 = (i + 1) | 0), (this.m91_1 = Dn(t, i)), (n = i);
                        }
                        return n;
                    }),
                    (h(cn).w91 = function (t) {
                        var n,
                            i = this.n91_1;
                        if (null == (null == i ? null : new k(i))) n = null;
                        else {
                            var e = (null == i ? null : new k(i)).nr_1;
                            n = null == (null == t ? null : new k(t)) ? e : z(S([e, t]));
                        }
                        var u,
                            r = n;
                        return (u = null == (null == r ? null : new k(r)) ? t : r), this.v91(a(this.i91_1.x91(u), 2));
                    }),
                    (h(dn).u91 = function () {
                        return this.b91_1;
                    }),
                    (h(dn).a3g = function () {
                        return this.u91().a3g();
                    }),
                    (h(dn).d3h = function (t, n) {
                        if ((this.e91_1 || this.u91().m90_1.a91_1) && y(t.c3c(), C().c3c())) {
                            var i = this.g93();
                            (e = i), (u = null != n && et(n) ? n : j()), Cn(e, u, 64);
                        } else (this.e91_1 = this.e91_1 || Rn(t.c3c())), h(it).d3h.call(this, t, n);
                        var e, u;
                    }),
                    (h(dn).i3h = function (t, n) {
                        return this.u91().m90_1.q90_1;
                    }),
                    (h(dn).p3g = function (t) {
                        xn(this.g93(), t);
                    }),
                    (h(dn).m3g = function (t) {
                        !(function (t, n) {
                            t.s93(250);
                            var i = ft(n),
                                e = 0;
                            if (e <= 3)
                                do {
                                    var u = e;
                                    (e = (e + 1) | 0), t.s93((i >> (24 - a(8, u))) & 255);
                                } while (e <= 3);
                        })(this.g93(), t);
                    }),
                    (h(dn).n3g = function (t) {
                        !(function (t, n) {
                            t.s93(251);
                            var i = ht(n),
                                e = 0;
                            if (e <= 7)
                                do {
                                    var u = e;
                                    (e = (e + 1) | 0),
                                        t.s93(
                                            i
                                                .r3((56 - a(8, u)) | 0)
                                                .t3(new K(255, 0))
                                                .k1(),
                                        );
                                } while (e <= 7);
                        })(this.g93(), t);
                    }),
                    (h(dn).o3g = function (t) {
                        var n = this.g93(),
                            i = ut(t);
                        qn(n, U(i));
                    }),
                    (h(dn).i3g = function (t) {
                        qn(this.g93(), U(t));
                    }),
                    (h(dn).j3g = function (t) {
                        qn(this.g93(), U(t));
                    }),
                    (h(dn).k3g = function (t) {
                        qn(this.g93(), U(t));
                    }),
                    (h(dn).l3g = function (t) {
                        qn(this.g93(), t);
                    }),
                    (h(dn).h3g = function (t) {
                        !(function (t, n) {
                            t.s93(n ? 245 : 244);
                        })(this.g93(), t);
                    }),
                    (h(dn).g3g = function () {
                        this.d91_1
                            ? this.g93().s93(160)
                            : (function (t) {
                                  t.s93(246);
                              })(this.g93());
                    }),
                    (h(dn).q3g = function (t, n) {
                        xn(this.g93(), t.t3d(n));
                    }),
                    (h(dn).e3g = function (t, n) {
                        var i = this.g93();
                        (this.d91_1 = y(t.w3d(n).p3d(), rt())), (this.e91_1 = Dn(t, n));
                        var e = t.t3d(n);
                        if (!Ln(t)) {
                            if (this.u91().m90_1.s90_1) {
                                var u = Gn(t, n);
                                if (null == (null == u ? null : new k(u)));
                                else
                                    for (var r = new k(u).p(); r.q(); ) {
                                        pn(i, r.r().o1_1);
                                    }
                            }
                            var a, s;
                            if (t.p3d() instanceof st) s = !1;
                            else s = !(t.p3d() instanceof at);
                            if (s) a = !(t.p3d() instanceof q);
                            else a = !1;
                            if (a) {
                                var o = Mn(t, n);
                                this.u91().m90_1.z90_1 && null != o ? qn(i, o) : xn(i, e);
                            }
                        }
                        if (this.u91().m90_1.t90_1) {
                            var l = Un(t, n);
                            if (null == (null == l ? null : new k(l)));
                            else
                                for (var f = new k(l).p(); f.q(); ) {
                                    pn(i, f.r().o1_1);
                                }
                        }
                        return this.h93(), !0;
                    }),
                    (h(kn).g93 = function () {
                        return yn(this.m93_1).e93_1;
                    }),
                    (h(kn).h93 = function () {
                        var t = yn(this.m93_1);
                        t.f93_1 = (t.f93_1 + 1) | 0;
                    }),
                    (h(kn).l3f = function (t) {
                        var n,
                            i,
                            e = new mn(new Vn(), 0);
                        return (n = this.m93_1), (i = e), n.k(i), this;
                    }),
                    (h(kn).m3f = function (t) {
                        var n,
                            i = ((n = this.m93_1), $t(n)),
                            e = this.g93(),
                            u = i.f93_1;
                        if (this.u91().m90_1.u90_1) {
                            var r = Kn(t);
                            if (null == (null == r ? null : new k(r)));
                            else
                                for (var a = new k(r).p(); a.q(); ) {
                                    pn(e, a.r().o1_1);
                                }
                        }
                        if (Ln(t)) {
                            An(e, O(U(u)));
                        } else {
                            var s = t.p3d();
                            if (!!y(s, p()) || s instanceof q) An(e, O(U(u)));
                            else if (s instanceof at) Sn(e, O(U((u / 2) | 0)));
                            else Sn(e, O(U(u)));
                        }
                        e.n93(i.e93_1);
                    }),
                    (h(bn).l3f = function (t) {
                        if (this.u91().m90_1.u90_1) {
                            var n = Kn(t);
                            if (null == (null == n ? null : new k(n)));
                            else
                                for (var i = new k(n).p(); i.q(); ) {
                                    var e = i.r().o1_1;
                                    pn(this.c91_1, e);
                                }
                        }
                        if (Ln(t)) zn(this.c91_1);
                        else {
                            var u = t.p3d();
                            !!y(u, p()) || u instanceof q ? zn(this.c91_1) : jn(this.c91_1);
                        }
                        return this;
                    }),
                    (h(bn).m3f = function (t) {
                        this.c91_1.s93(255);
                    }),
                    (h(bn).g93 = function () {
                        return this.c91_1;
                    }),
                    (h(bn).h93 = function () {}),
                    (h(Vn).bu = function () {
                        var t = new Int8Array(this.g91_1),
                            n = this.f91_1,
                            i = this.g91_1;
                        return tt(n, t, 0, 0, i), t;
                    }),
                    (h(Vn).n93 = function (t) {
                        this.t93(t.f91_1, f, t.g91_1);
                    }),
                    (h(Vn).i3b = function (t, n, i) {
                        if (n < 0 || n > t.length || i < 0 || i > ((t.length - n) | 0)) throw It();
                        if (0 === i) return l;
                        Fn(this, i);
                        var e = this.f91_1,
                            u = this.g91_1;
                        tt(t, e, u, n, (n + i) | 0), (this.g91_1 = (this.g91_1 + i) | 0);
                    }),
                    (h(Vn).t93 = function (t, n, i, e) {
                        var u;
                        return (n = n === f ? 0 : n), (i = i === f ? t.length : i), e === f ? (this.i3b(t, n, i), (u = l)) : (u = e.i3b.call(this, t, n, i)), u;
                    }),
                    (h(Vn).s93 = function (t) {
                        Fn(this, 1);
                        var n = this.f91_1,
                            i = this.g91_1;
                        (this.g91_1 = (i + 1) | 0), (n[i] = At(t));
                    }),
                    (h(Wn).k92 = function () {
                        return (this.i92_1.length - this.j92_1) | 0;
                    }),
                    (h(Wn).m6h = function () {
                        var t;
                        if (this.j92_1 < this.i92_1.length) {
                            var n = this.i92_1,
                                i = this.j92_1;
                            (this.j92_1 = (i + 1) | 0), (t = 255 & n[i]);
                        } else t = -1;
                        return t;
                    }),
                    (h(Wn).fv = function (t, n, i) {
                        if (n < 0 || n > t.length || i < 0 || i > ((t.length - n) | 0)) throw It();
                        if (this.j92_1 >= this.i92_1.length) return -1;
                        if (0 === i) return 0;
                        var e = ((this.i92_1.length - this.j92_1) | 0) < i ? (this.i92_1.length - this.j92_1) | 0 : i,
                            u = this.i92_1,
                            r = this.j92_1,
                            a = (this.j92_1 + e) | 0;
                        return tt(u, t, n, r, a), (this.j92_1 = (this.j92_1 + e) | 0), e;
                    }),
                    (h(Wn).n92 = function (t) {
                        this.j92_1 = (this.j92_1 + t) | 0;
                    }),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Dt);
            })(t.exports, i(519039), i(767646));
        },
        768890: (t, n, i) => {
            !(function (t, n) {
                "use strict";
                var i = n.$_$.cj,
                    e = n.$_$.rd,
                    u = n.$_$.g;
                function r() {}
                function a() {}
                function s() {}
                function o() {}
                e(r, "ResponseException", u, i), e(a, "RedirectResponseException", u, r), e(s, "ClientRequestException", u, r), e(o, "ServerResponseException", u, r), (t.$_$ = t.$_$ || {}), (t.$_$.a = s), (t.$_$.b = a), (t.$_$.c = o);
            })(t.exports, i(519039));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-ae9f6adc.20a8ec8a.js.map
