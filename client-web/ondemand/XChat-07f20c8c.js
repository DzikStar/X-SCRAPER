(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, h, r, n, e) {
                "use strict";
                var _,
                    u,
                    c,
                    a,
                    o,
                    f,
                    l,
                    v,
                    q,
                    w,
                    g,
                    d,
                    $,
                    b,
                    m,
                    y,
                    R,
                    p,
                    j,
                    x,
                    k = Math.imul,
                    E = i.$_$.ke,
                    J = i.$_$.hd,
                    F = i.$_$.g,
                    C = i.$_$.zi,
                    S = i.$_$.nd,
                    A = i.$_$.aj,
                    K = i.$_$.l6,
                    z = i.$_$.mi,
                    P = i.$_$.wc,
                    I = i.$_$.oe,
                    T = i.$_$.gd,
                    X = i.$_$.yc,
                    W = i.$_$.hc,
                    L = h.$_$.j,
                    M = i.$_$.sb,
                    N = h.$_$.h,
                    U = i.$_$.d4,
                    G = i.$_$.j4,
                    H = i.$_$.i4,
                    B = h.$_$.e,
                    D = h.$_$.d,
                    O = i.$_$.le,
                    Q = i.$_$.z3,
                    V = r.$_$.d,
                    Y = i.$_$.oi,
                    Z = i.$_$.jd,
                    tt = h.$_$.c,
                    it = h.$_$.i,
                    st = h.$_$.a,
                    ht = h.$_$.g,
                    rt = i.$_$.f,
                    nt = i.$_$.ef,
                    et = i.$_$.wa,
                    _t = h.$_$.b,
                    ut = n.$_$.k,
                    ct = e.$_$.h,
                    at = e.$_$.b,
                    ot = e.$_$.u,
                    ft = e.$_$.g,
                    lt = i.$_$.md,
                    vt = h.$_$.f,
                    qt = i.$_$.b6,
                    wt = i.$_$.ih,
                    gt = i.$_$.tf,
                    dt = i.$_$.zj,
                    $t = i.$_$.jf,
                    bt = i.$_$.ed,
                    mt = e.$_$.s,
                    yt = e.$_$.d,
                    Rt = e.$_$.f,
                    pt = e.$_$.j,
                    jt = e.$_$.c;
                function xt(t) {
                    St.call(this), (this.bytes = t);
                }
                function kt(t, i) {
                    St.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Et() {
                    (_ = this), St.call(this);
                }
                function Jt() {
                    return null == _ && new Et(), _;
                }
                function Ft() {
                    (u = this), St.call(this);
                }
                function Ct() {
                    return null == u && new Ft(), u;
                }
                function St() {}
                function At() {
                    return [Gt(), Ht(), Bt(), Dt(), Ot(), Qt(), Vt()];
                }
                function Kt(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Gt();
                        case "NotRegistered":
                            return Ht();
                        case "InvalidAuth":
                            return Bt();
                        case "UpgradeRequired":
                            return Dt();
                        case "Assertion":
                            return Ot();
                        case "Transient":
                            return Qt();
                        case "RateLimitExceeded":
                            return Vt();
                        default:
                            zt(), A("No enum constant value.");
                    }
                }
                function zt() {
                    if (w) return K;
                    (w = !0), (c = new Pt("InvalidPin", 0, !0)), (a = new Pt("NotRegistered", 1, !0)), (o = new Pt("InvalidAuth", 2, !0)), (f = new Pt("UpgradeRequired", 3, !1)), (l = new Pt("Assertion", 4, !1)), (v = new Pt("Transient", 5, !0)), (q = new Pt("RateLimitExceeded", 6, !0));
                }
                function Pt(t, i, s) {
                    z.call(this, t, i), (this.retryable = s);
                }
                function It() {
                    (g = this), Wt.call(this);
                }
                function Tt() {
                    return null == g && new It(), g;
                }
                function Xt(t) {
                    Wt.call(this), (this.reason = t);
                }
                function Wt() {}
                function Lt() {
                    return [Yt(), Zt(), ti(), ii(), si(), hi()];
                }
                function Mt(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return Yt();
                        case "UpgradeRequired":
                            return Zt();
                        case "Assertion":
                            return ti();
                        case "Transient":
                            return ii();
                        case "RateLimitExceeded":
                            return si();
                        case "StorageFailed":
                            return hi();
                        default:
                            Nt(), A("No enum constant value.");
                    }
                }
                function Nt() {
                    if (p) return K;
                    (p = !0), (d = new Ut("InvalidAuth", 0, !0)), ($ = new Ut("UpgradeRequired", 1, !1)), (b = new Ut("Assertion", 2, !1)), (m = new Ut("Transient", 3, !0)), (y = new Ut("RateLimitExceeded", 4, !0)), (R = new Ut("StorageFailed", 5, !0));
                }
                function Ut(t, i, s) {
                    z.call(this, t, i), (this.retryable = s);
                }
                function Gt() {
                    return zt(), c;
                }
                function Ht() {
                    return zt(), a;
                }
                function Bt() {
                    return zt(), o;
                }
                function Dt() {
                    return zt(), f;
                }
                function Ot() {
                    return zt(), l;
                }
                function Qt() {
                    return zt(), v;
                }
                function Vt() {
                    return zt(), q;
                }
                function Yt() {
                    return Nt(), d;
                }
                function Zt() {
                    return Nt(), $;
                }
                function ti() {
                    return Nt(), b;
                }
                function ii() {
                    return Nt(), m;
                }
                function si() {
                    return Nt(), y;
                }
                function hi() {
                    return Nt(), R;
                }
                function ri(t, i) {
                    (this.y9g_1 = t), (this.z9g_1 = i);
                }
                function ni(t, i, s, h, r) {
                    W.call(this, r), (this.i9h_1 = t), (this.j9h_1 = i), (this.k9h_1 = s), (this.l9h_1 = h);
                }
                function ei(t, i, s, h, r, n, e) {
                    W.call(this, e), (this.s9i_1 = t), (this.t9i_1 = i), (this.u9i_1 = s), (this.v9i_1 = h), (this.w9i_1 = r), (this.x9i_1 = n);
                }
                function _i(t, i, s, h) {
                    W.call(this, h), (this.c9k_1 = t), (this.d9k_1 = i), (this.e9k_1 = s);
                }
                function ui(t, i, s, h, r) {
                    W.call(this, r), (this.q9k_1 = t), (this.r9k_1 = i), (this.s9k_1 = s), (this.t9k_1 = h);
                }
                function ci() {
                    (j = this), (this.s9j_1 = 1024), (this.t9j_1 = (1024 + _t()) | 0);
                }
                function ai(t, i) {
                    var s = new oi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function oi(t, i) {
                    W.call(this, i), (this.j9l_1 = t);
                }
                function fi(t) {
                    return t.crypto;
                }
                function li(t, i) {
                    return xi(t.e9i_1, "raw", i);
                }
                function vi(t, i) {
                    return xi(t.k9l_1, "spki", i);
                }
                function qi(t, i) {
                    var s = new Ei(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function wi(t) {
                    var i = fi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ut(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function gi(t) {
                    var i = fi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ut(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function di(t, i, s) {
                    var h = new Ji(t, i, s);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function $i(t, i, s) {
                    var h = new Fi(t, i, s);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function bi(t, i, s) {
                    var h = new Ci(t, i, s);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function mi(t, i, s, h) {
                    var r = new Si(t, i, s, h);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function yi(t, i, s, h) {
                    var r = new Ai(t, i, (s = s === F ? null : s), h);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Ri(t, i, s, h) {
                    var r = new Ki(t, i, s, h);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function pi(t, i, s, h) {
                    var r = new zi(t, i, (s = s === F ? null : s), h);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function ji(t, i) {
                    var s = new Pi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function xi(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function ki(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function Ei(t, i) {
                    W.call(this, i), (this.t9l_1 = t);
                }
                function Ji(t, i, s) {
                    W.call(this, s), (this.c9m_1 = t), (this.d9m_1 = i);
                }
                function Fi(t, i, s) {
                    W.call(this, s), (this.n9m_1 = t), (this.o9m_1 = i);
                }
                function Ci(t, i, s) {
                    W.call(this, s), (this.y9m_1 = t), (this.z9m_1 = i);
                }
                function Si(t, i, s, h) {
                    W.call(this, h), (this.j9n_1 = t), (this.k9n_1 = i), (this.l9n_1 = s);
                }
                function Ai(t, i, s, h) {
                    W.call(this, h), (this.v9n_1 = t), (this.w9n_1 = i), (this.x9n_1 = s);
                }
                function Ki(t, i, s, h) {
                    W.call(this, h), (this.h9o_1 = t), (this.i9o_1 = i), (this.j9o_1 = s);
                }
                function zi(t, i, s, h) {
                    W.call(this, h), (this.t9o_1 = t), (this.u9o_1 = i), (this.v9o_1 = s);
                }
                function Pi(t, i) {
                    W.call(this, i), (this.f9p_1 = t);
                }
                function Ii(t) {
                    var i = t.i9p_1;
                    return (
                        bt(
                            "juiceboxModule",
                            1,
                            $t,
                            function (t) {
                                return Ii(t);
                            },
                            null,
                        ),
                        i.m2()
                    );
                }
                function Ti(t, i, s) {
                    var h = new Mi(t, i, s);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function Xi(t, i) {
                    (this.b9q_1 = t), W.call(this, i);
                }
                function Wi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Xi(t, i),
                                h = function (t) {
                                    return s.c9q(t);
                                };
                            return (h.$arity = 0), h;
                        })(t, null);
                    };
                }
                function Li(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, h) {
                                    try {
                                        var r = vt(t),
                                            n = qt().wm_1,
                                            e = wt(G(r), n),
                                            _ = i.c93_1.p2(e);
                                        s(null == _ ? null : _.j93_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        h(t);
                                    }
                                    return K;
                                };
                            })(i, t),
                        );
                    };
                }
                function Mi(t, i, s) {
                    W.call(this, s), (this.r9p_1 = t), (this.s9p_1 = i);
                }
                function Ni(t, i, s, h, r) {
                    W.call(this, r), (this.l9q_1 = t), (this.m9q_1 = i), (this.n9q_1 = s), (this.o9q_1 = h);
                }
                function Ui(t, i, s, h) {
                    W.call(this, h), (this.d9r_1 = t), (this.e9r_1 = i), (this.f9r_1 = s);
                }
                function Gi() {
                    this.i9p_1 = dt(Wi(this));
                }
                function Hi(t, i, s) {
                    var h = new Zi(t, i, s);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function Bi(t, i) {
                    W.call(this, i), (this.d9s_1 = t);
                }
                function Di(t, i) {
                    W.call(this, i), (this.m9s_1 = t);
                }
                function Oi(t, i, s, h) {
                    W.call(this, h), (this.v9s_1 = t), (this.w9s_1 = i), (this.x9s_1 = s);
                }
                function Qi(t, i, s, h) {
                    W.call(this, h), (this.u9t_1 = t), (this.v9t_1 = i), (this.w9t_1 = s);
                }
                function Vi(t, i, s) {
                    W.call(this, s), (this.u9u_1 = t), (this.v9u_1 = i);
                }
                function Yi(t, i, s, h) {
                    W.call(this, h), (this.e9v_1 = t), (this.f9v_1 = i), (this.g9v_1 = s);
                }
                function Zi(t, i, s) {
                    W.call(this, s), (this.t9r_1 = t), (this.u9r_1 = i);
                }
                function ts() {
                    this.k9t_1 = 65;
                }
                function is(t, i) {
                    W.call(this, i), (this.c9w_1 = t);
                }
                function ss(t) {
                    this.e9i_1 = t;
                }
                function hs(t, i) {
                    W.call(this, i), (this.l9w_1 = t);
                }
                function rs(t) {
                    this.k9l_1 = t;
                }
                function ns(t, i) {
                    W.call(this, i), (this.u9w_1 = t);
                }
                function es(t) {
                    this.h9p_1 = t;
                }
                function _s(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = St), (h.JuiceboxRecoverPrivateKeyResult.Success = xt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), P(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), P(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (h.JuiceboxRecoverFailureReason = Pt), (h.JuiceboxRecoverFailureReason.values = At), (h.JuiceboxRecoverFailureReason.valueOf = Kt), P(h.JuiceboxRecoverFailureReason, "InvalidPin", Gt), P(h.JuiceboxRecoverFailureReason, "NotRegistered", Ht), P(h.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), P(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Dt), P(h.JuiceboxRecoverFailureReason, "Assertion", Ot), P(h.JuiceboxRecoverFailureReason, "Transient", Qt), P(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Vt), (h.JuiceboxRegisterPrivateKeyResult = Wt), P(h.JuiceboxRegisterPrivateKeyResult, "Success", Tt), (h.JuiceboxRegisterPrivateKeyResult.Failure = Xt), (h.JuiceboxRegisterFailureReason = Ut), (h.JuiceboxRegisterFailureReason.values = Lt), (h.JuiceboxRegisterFailureReason.valueOf = Mt), P(h.JuiceboxRegisterFailureReason, "InvalidAuth", Yt), P(h.JuiceboxRegisterFailureReason, "UpgradeRequired", Zt), P(h.JuiceboxRegisterFailureReason, "Assertion", ti), P(h.JuiceboxRegisterFailureReason, "Transient", ii), P(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", si), P(h.JuiceboxRegisterFailureReason, "StorageFailed", hi);
                }
                J(St, "JuiceboxRecoverPrivateKeyResult"),
                    J(xt, "Success", F, St),
                    J(kt, "JuiceboxFailure", F, St),
                    S(Et, "KeyReconstructionFailure", F, St),
                    S(Ft, "NoJuiceboxTokens", F, St),
                    J(Pt, "JuiceboxRecoverFailureReason", F, z),
                    J(Wt, "JuiceboxRegisterPrivateKeyResult"),
                    S(It, "Success", F, Wt),
                    J(Xt, "Failure", F, Wt),
                    J(Ut, "JuiceboxRegisterFailureReason", F, z),
                    J(ri, "XChatIdentityKeyPair"),
                    Z(ni, W),
                    Z(ei, W),
                    Z(_i, W),
                    Z(ui, W),
                    S(ci, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    Z(oi, W),
                    Z(Ei, W),
                    Z(Ji, W),
                    Z(Fi, W),
                    Z(Ci, W),
                    Z(Si, W),
                    Z(Ai, W),
                    Z(Ki, W),
                    Z(zi, W),
                    Z(Pi, W),
                    lt(Xi, W, F, [0]),
                    Z(Mi, W),
                    Z(Ni, W),
                    Z(Ui, W),
                    J(Gi, "WebJuiceboxApi", Gi, F, F, [1, 3, 2]),
                    Z(Bi, W),
                    Z(Di, W),
                    Z(Oi, W),
                    Z(Qi, W),
                    Z(Vi, W),
                    Z(Yi, W),
                    Z(Zi, W),
                    S(ts, "WebKeyFactory", F, F, F, [0, 2, 1, 3]),
                    Z(is, W),
                    J(ss, "XChatConversationKey", F, F, F, [0]),
                    Z(hs, W),
                    J(rs, "XChatPublicKey", F, F, F, [0]),
                    Z(ns, W),
                    J(es, "XChatPrivateKey", F, F, F, [0]),
                    (E(xt).g95 = function () {
                        return this.bytes;
                    }),
                    (E(kt).p9g = function () {
                        return this.reason;
                    }),
                    (E(kt).q9g = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).wg = function () {
                        return this.reason;
                    }),
                    (E(kt).xg = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).r9g = function (t, i) {
                        return new kt(t, i);
                    }),
                    (E(kt).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.r9g(t, i);
                    }),
                    (E(kt).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (E(kt).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (k(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (E(kt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof kt)) return !1;
                        var i = t instanceof kt ? t : C();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (E(Et).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (E(Et).hashCode = function () {
                        return 188209770;
                    }),
                    (E(Et).equals = function (t) {
                        return this === t || (t instanceof Et && (t instanceof Et || C(), !0));
                    }),
                    (E(Ft).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (E(Ft).hashCode = function () {
                        return 1362829865;
                    }),
                    (E(Ft).equals = function (t) {
                        return this === t || (t instanceof Ft && (t instanceof Ft || C(), !0));
                    }),
                    (E(Pt).u9g = function () {
                        return this.retryable;
                    }),
                    (E(It).toString = function () {
                        return "Success";
                    }),
                    (E(It).hashCode = function () {
                        return 1551298723;
                    }),
                    (E(It).equals = function (t) {
                        return this === t || (t instanceof It && (t instanceof It || C(), !0));
                    }),
                    (E(Xt).p9g = function () {
                        return this.reason;
                    }),
                    (E(Xt).wg = function () {
                        return this.reason;
                    }),
                    (E(Xt).v9g = function (t) {
                        return new Xt(t);
                    }),
                    (E(Xt).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.v9g(t);
                    }),
                    (E(Xt).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (E(Xt).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (E(Xt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Xt)) return !1;
                        var i = t instanceof Xt ? t : C();
                        return !!this.reason.equals(i.reason);
                    }),
                    (E(Ut).u9g = function () {
                        return this.retryable;
                    }),
                    (E(ri).toString = function () {
                        return "XChatIdentityKeyPair(public=" + I(this.y9g_1) + ", private=" + I(this.z9g_1) + ")";
                    }),
                    (E(ri).hashCode = function () {
                        var t = T(this.y9g_1);
                        return (t = (k(t, 31) + T(this.z9g_1)) | 0);
                    }),
                    (E(ri).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ri)) return !1;
                        var i = t instanceof ri ? t : C();
                        return !!X(this.y9g_1, i.y9g_1) && !!X(this.z9g_1, i.z9g_1);
                    }),
                    (E(ni).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 20), (this.q9_1 = 1), (t = ai(L, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.o9h_1 = N), (this.q9_1 = 4), (t = this.j9h_1.f9i(this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.p9h_1 = t), (this.q9h_1 = U(this.p9h_1)), (this.r9h_1 = this.o9h_1.i9g(this.q9h_1)), (this.s9h_1 = this.r9h_1.wg()), (this.t9h_1 = this.r9h_1.h9f()), (this.q9_1 = 5);
                                        var i = this.t9h_1;
                                        if ((t = this.l9h_1.g9i(G(i), this)) === M()) return t;
                                        continue t;
                                    case 5:
                                        (this.u9h_1 = H(this.t9h_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.k9h_1.h9i(1024, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.v9h_1 = t), null == this.v9h_1)) {
                                            (this.n9h_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.w9h_1 = this.v9h_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.x9h_1 = this.w9h_1), (this.q9_1 = 9), (t = this.k9h_1.i9i(this)) === M())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.y9h_1 = D()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.y9h_1 = B()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.z9h_1 = this.y9h_1;
                                        var s = N,
                                            h = this.x9h_1,
                                            r = U(h),
                                            n = this.z9h_1;
                                        (this.a9i_1 = s.k9g(this.s9h_1, r, F, Q(O(n)))), (this.u9h_1 = (this.u9h_1 + H(this.a9i_1)) | 0), (this.q9_1 = 11);
                                        var e = this.a9i_1;
                                        if ((t = this.l9h_1.g9i(G(e), this)) === M()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.m9h_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Y)) {
                                            this.b9i_1 = this.t9_1;
                                            var _ = V(),
                                                u = this.b9i_1;
                                            if (!_.o9b_1.m())
                                                for (var c = _.o9b_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.n9h_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.c9i_1 = this.t9_1), this.k9h_1.x4(), (this.q9_1 = 15), (t = this.l9h_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.l9h_1.x4(), this.c9i_1);
                                    case 16:
                                        if (((this.d9i_1 = this.n9h_1), (this.r9_1 = 20), this.k9h_1.x4(), (this.q9_1 = 17), (t = this.l9h_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 17:
                                        return this.l9h_1.x4(), this.d9i_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.k9h_1.x4(), (this.q9_1 = 19), (t = this.l9h_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 19:
                                        return this.l9h_1.x4(), K;
                                    case 20:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (20 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(ei).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 19), (this.q9_1 = 1), (t = ai(L, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.u9i_1.h9i(tt(), this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.a9j_1 = t), null == this.a9j_1)) {
                                            (this.z9i_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.b9j_1 = this.a9j_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.c9j_1 = this.b9j_1), (this.d9j_1 = this.c9j_1.length), (this.e9j_1 = N), (this.q9_1 = 6), (t = this.t9i_1.f9i(this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        (this.f9j_1 = t), (this.g9j_1 = U(this.f9j_1));
                                        var i = this.c9j_1;
                                        (this.h9j_1 = this.e9j_1.l9g(this.g9j_1, U(i))), (this.i9j_1 = this.h9j_1.wg()), (this.j9j_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.u9i_1.h9i(this.s9i_1.t9j_1, this)) === M())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.k9j_1 = t), null == this.k9j_1)) {
                                            (this.z9i_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.l9j_1 = this.k9j_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.m9j_1 = this.l9j_1), (this.d9j_1 = (this.d9j_1 + this.m9j_1.length) | 0);
                                        var s = N,
                                            h = this.m9j_1;
                                        (this.n9j_1 = s.n9g(this.i9j_1, U(h))), (this.o9j_1 = this.n9j_1.k9f()), (this.q9_1 = 10);
                                        var r = this.o9j_1;
                                        if ((t = this.v9i_1.g9i(G(r), this)) === M()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.x9i_1 && null != this.w9i_1) {
                                            var n = this.d9j_1 / this.w9i_1.bytes.x3();
                                            n > this.j9j_1 + 0.1 && (this.x9i_1(n), (this.j9j_1 = n));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.y9i_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Y)) {
                                            this.p9j_1 = this.t9_1;
                                            var e = V(),
                                                _ = this.p9j_1;
                                            if (!e.o9b_1.m())
                                                for (var u = e.o9b_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.z9i_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.q9j_1 = this.t9_1), this.u9i_1.x4(), (this.q9_1 = 14), (t = this.v9i_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.v9i_1.x4(), this.q9j_1);
                                    case 15:
                                        if (((this.r9j_1 = this.z9i_1), (this.r9_1 = 19), this.u9i_1.x4(), (this.q9_1 = 16), (t = this.v9i_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 16:
                                        return this.v9i_1.x4(), this.r9j_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.u9i_1.x4(), (this.q9_1 = 18), (t = this.v9i_1.j9i(this)) === M())) return t;
                                        continue t;
                                    case 18:
                                        return this.v9i_1.x4(), K;
                                    case 19:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (19 === this.r9_1) throw c;
                                (this.q9_1 = this.r9_1), (this.t9_1 = c);
                            }
                    }),
                    (E(_i).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = ai(L, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9_1 = 3), (this.f9k_1 = it.o9g(st())), (this.g9k_1 = ht);
                                        var i = this.e9k_1;
                                        if (((this.h9k_1 = U(i)), (this.q9_1 = 2), (t = this.d9k_1.f9i(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var s = U(t),
                                            h = this.g9k_1.g9g(this.h9k_1, this.f9k_1, s),
                                            r = this.f9k_1,
                                            n = G(r),
                                            e = G(h),
                                            _ = U(rt([n, e]));
                                        return G(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var u = this.t9_1,
                                                c = V();
                                            if (!c.o9b_1.m())
                                                for (var a = c.o9b_1.s2().p(); a.q(); ) {
                                                    a.r().m2().e(u, "XWS encryptMessage failed");
                                                }
                                            return null;
                                        }
                                        throw this.t9_1;
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (4 === this.r9_1) throw o;
                                (this.q9_1 = this.r9_1), (this.t9_1 = o);
                            }
                    }),
                    (E(ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = ai(L, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.r9_1 = 3;
                                        var i = et(this.s9k_1, nt(0, st()));
                                        this.u9k_1 = U(i.slice());
                                        var s = et(this.s9k_1, nt(st(), this.s9k_1.length));
                                        if (((this.v9k_1 = U(s.slice())), (this.w9k_1 = ht), (this.q9_1 = 2), (t = this.r9k_1.f9i(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var h = U(t),
                                            r = this.w9k_1.h9g(this.v9k_1, this.u9k_1, h);
                                        return G(r).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var n = this.t9_1,
                                                e = V();
                                            if (!e.o9b_1.m())
                                                for (var _ = "XWS decryptMessage failed for " + this.t9k_1, u = e.o9b_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(n, _);
                                                }
                                            return null;
                                        }
                                        throw this.t9_1;
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (4 === this.r9_1) throw c;
                                (this.q9_1 = this.r9_1), (this.t9_1 = c);
                            }
                    }),
                    (E(ci).x9k = function (t, i, s, h) {
                        var r = new ni(this, t, i, s, h);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ci).y9k = function (t, i, s, h, r, n) {
                        var e = new ei(this, t, i, s, h, r, n);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ci).z9k = function (t, i, s) {
                        var h = new _i(this, t, i, s);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ci).a9l = function (t, i, s, h) {
                        var r = new ui(this, t, i, s, h);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.j9l_1.uo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.j9l_1.f9g(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        return K;
                                    case 3:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Ei).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.t9l_1.h9p_1, "jwk", this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
                                        return at(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Ji).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.c9m_1), (t = ut(i.deriveBits(s, this.d9m_1, 256), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.e9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                r = V();
                                            if (!r.o9b_1.m())
                                                for (var n = r.o9b_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(h, null);
                                                }
                                            (this.e9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.e9m_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Fi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ut(fi(window).subtle.digest("SHA-256", ft([this.n9m_1, ot(new Int8Array([0, 0, 0, 1])).buffer, this.o9m_1])), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.p9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = V();
                                            if (!s.o9b_1.m())
                                                for (var h = s.o9b_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(i, null);
                                                }
                                            (this.p9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.p9m_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (E(Ci).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.z9m_1];
                                        if ((t = ut(i.importKey("raw", this.y9m_1, s, !1, h), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.a9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.o9b_1.m())
                                                for (var e = n.o9b_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.a9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.a9n_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Si).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.l9n_1), (t = ut(i.encrypt(s, this.j9n_1, this.k9n_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.m9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                r = V();
                                            if (!r.o9b_1.m())
                                                for (var n = r.o9b_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(h, null);
                                                }
                                            (this.m9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.m9n_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Ai).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i,
                                            s = fi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.x9n_1 ? [] : [this.x9n_1]), (t = ut(s.importKey(this.v9n_1, this.w9n_1, h, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.y9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.o9b_1.m())
                                                for (var e = n.o9b_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.y9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.y9n_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Ki).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.h9o_1), (t = ut(i.decrypt(s, this.i9o_1, this.j9o_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.k9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                r = V();
                                            if (!r.o9b_1.m())
                                                for (var n = r.o9b_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(h, null);
                                                }
                                            (this.k9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.k9o_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(zi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i,
                                            s = fi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.v9o_1 ? [] : [this.v9o_1]), (t = ut(s.importKey(this.t9o_1, this.u9o_1, h, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.w9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.o9b_1.m())
                                                for (var e = n.o9b_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.w9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.w9o_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Pi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ut(i.importKey("raw", this.f9p_1, s, !0, ["encrypt", "decrypt"]), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.g9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                r = V();
                                            if (!r.o9b_1.m())
                                                for (var n = r.o9b_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(h, null);
                                                }
                                            (this.g9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.g9p_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Xi).c9q = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Xi).g2g = function (t) {
                        return this.c9q(t);
                    }),
                    (E(Xi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ut((this.b9q_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return t;
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Xi).ma = function (t) {
                        return new Xi(this.b9q_1, t);
                    }),
                    (E(Mi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ii(this.r9p_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Li(this.s9p_1)), new h(new s(this.s9p_1.h93_1), []);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (2 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (E(Ni).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.q9_1 = 1), (t = Ii(this.l9q_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.p9q_1 = t), (this.r9_1 = 5);
                                        var i = V();
                                        if (!i.o9b_1.m())
                                            for (var s = i.o9b_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = V();
                                        if (!h.o9b_1.m())
                                            for (var r = "XWS " + I(this.n9q_1.c93_1), n = h.o9b_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.l9q_1, this.n9q_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.r9q_1 = t), (this.s9q_1 = gt(this.m9q_1)), (this.q9_1 = 3), (t = this.o9q_1.f9i(this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.t9q_1 = t), (this.u9q_1 = this.r9q_1.register(this.s9q_1, this.t9q_1, new Int8Array(0), this.n9q_1.d93_1)), (this.q9_1 = 4), (t = ut(this.u9q_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.q9q_1 = Tt()), (this.r9_1 = 7), (this.q9_1 = 6);
                                        continue t;
                                    case 5:
                                        this.r9_1 = 7;
                                        var e = this.t9_1,
                                            _ = e == this.p9q_1.RegisterError.InvalidAuth ? Yt() : e == this.p9q_1.RegisterError.UpgradeRequired ? Zt() : e == this.p9q_1.RegisterError.Assertion ? ti() : e == this.p9q_1.RegisterError.Transient ? ii() : e == this.p9q_1.RegisterError.RateLimitExceeded ? si() : ii();
                                        (this.q9q_1 = new Xt(_)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        return (this.r9_1 = 7), this.q9q_1;
                                    case 7:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (7 === this.r9_1) throw u;
                                (this.q9_1 = this.r9_1), (this.t9_1 = u);
                            }
                    }),
                    (E(Ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ii(this.d9r_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.g9r_1 = t), (this.r9_1 = 4);
                                        var i = V();
                                        if (!i.o9b_1.m())
                                            for (var s = i.o9b_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = V();
                                        if (!h.o9b_1.m())
                                            for (var r = "XWS " + I(this.f9r_1.c93_1), n = h.o9b_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.d9r_1, this.f9r_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.i9r_1 = t), (this.q9_1 = 3), (t = ut(this.i9r_1.recover(gt(this.e9r_1), new Int8Array(0)), this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.h9r_1 = new xt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.g9r_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.g9r_1.RecoverErrorReason.NotRegistered ? Ht() : u == this.g9r_1.RecoverErrorReason.InvalidAuth ? Bt() : u == this.g9r_1.RecoverErrorReason.UpgradeRequired ? Dt() : u == this.g9r_1.RecoverErrorReason.Assertion ? Ot() : u == this.g9r_1.RecoverErrorReason.Transient ? Qt() : u == this.g9r_1.RecoverErrorReason.RateLimitExceeded ? Vt() : Qt();
                                        (this.h9r_1 = new kt(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.h9r_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Gi).j9r = function (t, i, s, h) {
                        var r = new Ni(this, t, i, s, h);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(Gi).k9r = function (t, i, s) {
                        var h = new Ui(this, t, i, s);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(Bi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ri(new rs(i.publicKey), new es(i.privateKey));
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.r9_1) throw s;
                                (this.q9_1 = this.r9_1), (this.t9_1 = s);
                            }
                    }),
                    (E(Di).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return new ss(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.v9s_1.l9t(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.y9s_1 = t), (this.q9_1 = 2), (t = di(this.w9s_1.k9l_1, this.y9s_1.z9g_1.h9p_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.z9s_1 = t;
                                        var i;
                                        if (null == this.z9s_1) return null;
                                        if (((i = this.z9s_1), (this.a9t_1 = i), (this.q9_1 = 3), (t = vi(this.y9s_1.y9g_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.b9t_1 = t), (this.c9t_1 = mt(this.b9t_1, 65)), (this.q9_1 = 4), (t = $i(this.a9t_1, this.c9t_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.d9t_1 = t;
                                        var s;
                                        if (null == this.d9t_1) return null;
                                        if (((s = this.d9t_1), (this.e9t_1 = s), (this.f9t_1 = this.e9t_1.slice(0, 16)), (this.g9t_1 = this.e9t_1.slice(16, 32)), (this.q9_1 = 5), (t = bi(this.f9t_1, "encrypt", this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.h9t_1 = t;
                                        var h;
                                        if (null == this.h9t_1) return null;
                                        if (((h = this.h9t_1), (this.i9t_1 = h), (this.q9_1 = 6), (t = li(this.x9s_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.j9t_1 = t), (this.q9_1 = 7), (t = mi(this.i9t_1, this.j9t_1, this.g9t_1, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var r = t;
                                        return yt(ft([this.c9t_1, r]));
                                    case 8:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (8 === this.r9_1) throw n;
                                (this.q9_1 = this.r9_1), (this.t9_1 = n);
                            }
                    }),
                    (E(Qi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.x9t_1 = at(this.w9t_1)), (this.y9t_1 = this.x9t_1.slice(0, 65)), (this.z9t_1 = this.x9t_1.slice(65)), (this.q9_1 = 1), (t = yi("raw", this.y9t_1, F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.a9u_1 = t;
                                        var i;
                                        if (null == this.a9u_1) return null;
                                        if (((i = this.a9u_1), (this.b9u_1 = i), (this.q9_1 = 2), (t = di(this.b9u_1, this.v9t_1.h9p_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.c9u_1 = t;
                                        var s;
                                        if (null == this.c9u_1) return null;
                                        if (((s = this.c9u_1), (this.d9u_1 = s), (this.q9_1 = 3), (t = $i(this.d9u_1, this.y9t_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        this.e9u_1 = t;
                                        var h;
                                        if (null == this.e9u_1) return null;
                                        if (((h = this.e9u_1), (this.f9u_1 = h), (this.g9u_1 = this.f9u_1.slice(0, 16)), (this.h9u_1 = this.f9u_1.slice(16, 32)), (this.q9_1 = 4), (t = bi(this.g9u_1, "decrypt", this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.i9u_1 = t;
                                        var r;
                                        if (null == this.i9u_1) return null;
                                        if (((r = this.i9u_1), (this.j9u_1 = r), (this.q9_1 = 5), (t = Ri(this.h9u_1, this.j9u_1, this.z9t_1, this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.k9u_1 = t;
                                        var n;
                                        if (null == this.k9u_1) return null;
                                        if (((n = this.k9u_1), (this.l9u_1 = n), (this.q9_1 = 6), (t = Hi(this.u9t_1, this.l9u_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        return t;
                                    case 7:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (7 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Vi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = yi("spki", Rt(this.v9u_1), F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new rs(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Yi).ia = function () {
                        var t,
                            i,
                            s = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = yi("spki", Rt(this.g9v_1), F, this)) === M())) return s;
                                        continue t;
                                    case 1:
                                        this.h9v_1 = s;
                                        var h;
                                        if (null == this.h9v_1) h = null;
                                        else h = new rs(this.h9v_1);
                                        this.i9v_1 = h;
                                        var r;
                                        if (null == this.i9v_1) return null;
                                        if (((r = this.i9v_1), (this.j9v_1 = r), (this.q9_1 = 2), (t = this.j9v_1), (i = this), (s = ki(t.k9l_1, "jwk", i)) === M())) return s;
                                        continue t;
                                    case 2:
                                        this.k9v_1 = s;
                                        var n = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((n.d = pt(this.f9v_1, !0)), (n.x = this.k9v_1.x), (n.y = this.k9v_1.y), (this.l9v_1 = n), (this.q9_1 = 3), (s = pi("jwk", this.l9v_1, "deriveBits", this)) === M())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new es(s);
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (4 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Zi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ji(this.u9r_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ss(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(ts).l9t = function (t) {
                        var i = new Bi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).m9v = function (t) {
                        var i = new Di(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).n9v = function (t, i, s) {
                        var h = new Oi(this, t, i, s);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ts).o9v = function (t, i, s) {
                        var h = new Qi(this, t, i, s);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ts).p9v = function (t, i) {
                        var s = new Vi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ts).q9v = function (t, i, s) {
                        var h = new Yi(this, t, i, s);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ts).r9v = function (t, i) {
                        return Hi(this, Rt(t), i);
                    }),
                    (E(ts).s9v = function (t, i, s) {
                        return null;
                    }),
                    (E(ts).t9v = function (t, i, s, h) {
                        return !1;
                    }),
                    (E(is).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = li(this.c9w_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(ss).f9i = function (t) {
                        var i = new is(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(hs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = vi(this.l9w_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(rs).f9i = function (t) {
                        var i = new hs(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.u9w_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(es).f9i = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    P(E(Pt), "name", E(Pt).y2),
                    P(E(Pt), "ordinal", E(Pt).z2),
                    P(E(Ut), "name", E(Ut).y2),
                    P(E(Ut), "ordinal", E(Ut).z2),
                    (x = new ts()),
                    _s(t),
                    (t.$jsExportAll$ = _s),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = xt),
                    (t.$_$.c = Xt),
                    (t.$_$.d = It),
                    (t.$_$.e = Gi),
                    (t.$_$.f = ri),
                    (t.$_$.g = hi),
                    (t.$_$.h = Jt),
                    (t.$_$.i = Ct),
                    (t.$_$.j = Tt),
                    (t.$_$.k = function () {
                        return null == j && new ci(), j;
                    }),
                    (t.$_$.l = x);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.3ce6650a.js.map
