(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, r, e, n, h) {
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
                    d,
                    g,
                    m,
                    $,
                    R,
                    y,
                    b,
                    p,
                    x,
                    j,
                    k = Math.imul,
                    E = i.$_$.ke,
                    J = i.$_$.hd,
                    F = i.$_$.g,
                    C = i.$_$.vi,
                    S = i.$_$.nd,
                    A = i.$_$.wi,
                    K = i.$_$.l6,
                    P = i.$_$.ii,
                    I = i.$_$.wc,
                    T = i.$_$.oe,
                    z = i.$_$.gd,
                    X = i.$_$.yc,
                    W = i.$_$.hc,
                    L = r.$_$.j,
                    M = i.$_$.sb,
                    N = r.$_$.h,
                    U = i.$_$.d4,
                    G = i.$_$.j4,
                    H = i.$_$.i4,
                    B = r.$_$.e,
                    D = r.$_$.d,
                    O = i.$_$.le,
                    Q = i.$_$.z3,
                    V = e.$_$.d,
                    Y = i.$_$.ki,
                    Z = i.$_$.jd,
                    tt = r.$_$.c,
                    it = r.$_$.i,
                    st = r.$_$.a,
                    rt = r.$_$.g,
                    et = i.$_$.f,
                    nt = i.$_$.ef,
                    ht = i.$_$.wa,
                    _t = r.$_$.b,
                    ut = n.$_$.k,
                    ct = h.$_$.h,
                    at = h.$_$.b,
                    ot = h.$_$.u,
                    ft = h.$_$.g,
                    lt = i.$_$.md,
                    vt = r.$_$.f,
                    qt = i.$_$.b6,
                    wt = i.$_$.eh,
                    dt = i.$_$.tf,
                    gt = i.$_$.vj,
                    mt = i.$_$.jf,
                    $t = i.$_$.ed,
                    Rt = h.$_$.s,
                    yt = h.$_$.d,
                    bt = h.$_$.f,
                    pt = h.$_$.j,
                    xt = h.$_$.c;
                function jt(t) {
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
                            Pt(), A("No enum constant value.");
                    }
                }
                function Pt() {
                    if (w) return K;
                    (w = !0), (c = new It("InvalidPin", 0, !0)), (a = new It("NotRegistered", 1, !0)), (o = new It("InvalidAuth", 2, !0)), (f = new It("UpgradeRequired", 3, !1)), (l = new It("Assertion", 4, !1)), (v = new It("Transient", 5, !0)), (q = new It("RateLimitExceeded", 6, !0));
                }
                function It(t, i, s) {
                    P.call(this, t, i), (this.retryable = s);
                }
                function Tt() {
                    (d = this), Wt.call(this);
                }
                function zt() {
                    return null == d && new Tt(), d;
                }
                function Xt(t) {
                    Wt.call(this), (this.reason = t);
                }
                function Wt() {}
                function Lt() {
                    return [Yt(), Zt(), ti(), ii(), si(), ri()];
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
                            return ri();
                        default:
                            Nt(), A("No enum constant value.");
                    }
                }
                function Nt() {
                    if (p) return K;
                    (p = !0), (g = new Ut("InvalidAuth", 0, !0)), (m = new Ut("UpgradeRequired", 1, !1)), ($ = new Ut("Assertion", 2, !1)), (R = new Ut("Transient", 3, !0)), (y = new Ut("RateLimitExceeded", 4, !0)), (b = new Ut("StorageFailed", 5, !0));
                }
                function Ut(t, i, s) {
                    P.call(this, t, i), (this.retryable = s);
                }
                function Gt() {
                    return Pt(), c;
                }
                function Ht() {
                    return Pt(), a;
                }
                function Bt() {
                    return Pt(), o;
                }
                function Dt() {
                    return Pt(), f;
                }
                function Ot() {
                    return Pt(), l;
                }
                function Qt() {
                    return Pt(), v;
                }
                function Vt() {
                    return Pt(), q;
                }
                function Yt() {
                    return Nt(), g;
                }
                function Zt() {
                    return Nt(), m;
                }
                function ti() {
                    return Nt(), $;
                }
                function ii() {
                    return Nt(), R;
                }
                function si() {
                    return Nt(), y;
                }
                function ri() {
                    return Nt(), b;
                }
                function ei(t, i) {
                    (this.w9d_1 = t), (this.x9d_1 = i);
                }
                function ni(t, i, s, r, e) {
                    W.call(this, e), (this.g9e_1 = t), (this.h9e_1 = i), (this.i9e_1 = s), (this.j9e_1 = r);
                }
                function hi(t, i, s, r, e, n, h) {
                    W.call(this, h), (this.q9f_1 = t), (this.r9f_1 = i), (this.s9f_1 = s), (this.t9f_1 = r), (this.u9f_1 = e), (this.v9f_1 = n);
                }
                function _i(t, i, s, r) {
                    W.call(this, r), (this.a9h_1 = t), (this.b9h_1 = i), (this.c9h_1 = s);
                }
                function ui(t, i, s, r, e) {
                    W.call(this, e), (this.o9h_1 = t), (this.p9h_1 = i), (this.q9h_1 = s), (this.r9h_1 = r);
                }
                function ci() {
                    (x = this), (this.q9g_1 = 1024), (this.r9g_1 = (1024 + _t()) | 0);
                }
                function ai(t, i) {
                    var s = new oi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function oi(t, i) {
                    W.call(this, i), (this.h9i_1 = t);
                }
                function fi(t) {
                    return t.crypto;
                }
                function li(t, i) {
                    return ji(t.c9f_1, "raw", i);
                }
                function vi(t, i) {
                    return ji(t.i9i_1, "spki", i);
                }
                function qi(t, i) {
                    var s = new Ei(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function wi(t) {
                    var i = fi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        r = s;
                    return ut(i.generateKey(r, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = fi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        r = s;
                    return ut(i.generateKey(r, !0, ["encrypt", "decrypt"]), t);
                }
                function gi(t, i, s) {
                    var r = new Ji(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function mi(t, i, s) {
                    var r = new Fi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function $i(t, i, s) {
                    var r = new Ci(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Ri(t, i, s, r) {
                    var e = new Si(t, i, s, r);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function yi(t, i, s, r) {
                    var e = new Ai(t, i, (s = s === F ? null : s), r);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function bi(t, i, s, r) {
                    var e = new Ki(t, i, s, r);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function pi(t, i, s, r) {
                    var e = new Pi(t, i, (s = s === F ? null : s), r);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function xi(t, i) {
                    var s = new Ii(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function ji(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function ki(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function Ei(t, i) {
                    W.call(this, i), (this.r9i_1 = t);
                }
                function Ji(t, i, s) {
                    W.call(this, s), (this.a9j_1 = t), (this.b9j_1 = i);
                }
                function Fi(t, i, s) {
                    W.call(this, s), (this.l9j_1 = t), (this.m9j_1 = i);
                }
                function Ci(t, i, s) {
                    W.call(this, s), (this.w9j_1 = t), (this.x9j_1 = i);
                }
                function Si(t, i, s, r) {
                    W.call(this, r), (this.h9k_1 = t), (this.i9k_1 = i), (this.j9k_1 = s);
                }
                function Ai(t, i, s, r) {
                    W.call(this, r), (this.t9k_1 = t), (this.u9k_1 = i), (this.v9k_1 = s);
                }
                function Ki(t, i, s, r) {
                    W.call(this, r), (this.f9l_1 = t), (this.g9l_1 = i), (this.h9l_1 = s);
                }
                function Pi(t, i, s, r) {
                    W.call(this, r), (this.r9l_1 = t), (this.s9l_1 = i), (this.t9l_1 = s);
                }
                function Ii(t, i) {
                    W.call(this, i), (this.d9m_1 = t);
                }
                function Ti(t) {
                    var i = t.g9m_1;
                    return (
                        $t(
                            "juiceboxModule",
                            1,
                            mt,
                            function (t) {
                                return Ti(t);
                            },
                            null,
                        ),
                        i.m2()
                    );
                }
                function zi(t, i, s) {
                    var r = new Mi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Xi(t, i) {
                    (this.z9m_1 = t), W.call(this, i);
                }
                function Wi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Xi(t, i),
                                r = function (t) {
                                    return s.a9n(t);
                                };
                            return (r.$arity = 0), r;
                        })(t, null);
                    };
                }
                function Li(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, r) {
                                    try {
                                        var e = vt(t),
                                            n = qt().wm_1,
                                            h = wt(G(e), n),
                                            _ = i.a90_1.p2(h);
                                        s(null == _ ? null : _.h90_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        r(t);
                                    }
                                    return K;
                                };
                            })(i, t),
                        );
                    };
                }
                function Mi(t, i, s) {
                    W.call(this, s), (this.p9m_1 = t), (this.q9m_1 = i);
                }
                function Ni(t, i, s, r, e) {
                    W.call(this, e), (this.j9n_1 = t), (this.k9n_1 = i), (this.l9n_1 = s), (this.m9n_1 = r);
                }
                function Ui(t, i, s, r) {
                    W.call(this, r), (this.b9o_1 = t), (this.c9o_1 = i), (this.d9o_1 = s);
                }
                function Gi() {
                    this.g9m_1 = gt(Wi(this));
                }
                function Hi(t, i, s) {
                    var r = new Zi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Bi(t, i) {
                    W.call(this, i), (this.b9p_1 = t);
                }
                function Di(t, i) {
                    W.call(this, i), (this.k9p_1 = t);
                }
                function Oi(t, i, s, r) {
                    W.call(this, r), (this.t9p_1 = t), (this.u9p_1 = i), (this.v9p_1 = s);
                }
                function Qi(t, i, s, r) {
                    W.call(this, r), (this.s9q_1 = t), (this.t9q_1 = i), (this.u9q_1 = s);
                }
                function Vi(t, i, s) {
                    W.call(this, s), (this.s9r_1 = t), (this.t9r_1 = i);
                }
                function Yi(t, i, s, r) {
                    W.call(this, r), (this.c9s_1 = t), (this.d9s_1 = i), (this.e9s_1 = s);
                }
                function Zi(t, i, s) {
                    W.call(this, s), (this.r9o_1 = t), (this.s9o_1 = i);
                }
                function ts() {
                    this.i9q_1 = 65;
                }
                function is(t, i) {
                    W.call(this, i), (this.a9t_1 = t);
                }
                function ss(t) {
                    this.c9f_1 = t;
                }
                function rs(t, i) {
                    W.call(this, i), (this.j9t_1 = t);
                }
                function es(t) {
                    this.i9i_1 = t;
                }
                function ns(t, i) {
                    W.call(this, i), (this.s9t_1 = t);
                }
                function hs(t) {
                    this.f9m_1 = t;
                }
                function _s(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        r = s.dms || (s.dms = {});
                    (r.JuiceboxRecoverPrivateKeyResult = St), (r.JuiceboxRecoverPrivateKeyResult.Success = jt), (r.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), I(r.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), I(r.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (r.JuiceboxRecoverFailureReason = It), (r.JuiceboxRecoverFailureReason.values = At), (r.JuiceboxRecoverFailureReason.valueOf = Kt), I(r.JuiceboxRecoverFailureReason, "InvalidPin", Gt), I(r.JuiceboxRecoverFailureReason, "NotRegistered", Ht), I(r.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), I(r.JuiceboxRecoverFailureReason, "UpgradeRequired", Dt), I(r.JuiceboxRecoverFailureReason, "Assertion", Ot), I(r.JuiceboxRecoverFailureReason, "Transient", Qt), I(r.JuiceboxRecoverFailureReason, "RateLimitExceeded", Vt), (r.JuiceboxRegisterPrivateKeyResult = Wt), I(r.JuiceboxRegisterPrivateKeyResult, "Success", zt), (r.JuiceboxRegisterPrivateKeyResult.Failure = Xt), (r.JuiceboxRegisterFailureReason = Ut), (r.JuiceboxRegisterFailureReason.values = Lt), (r.JuiceboxRegisterFailureReason.valueOf = Mt), I(r.JuiceboxRegisterFailureReason, "InvalidAuth", Yt), I(r.JuiceboxRegisterFailureReason, "UpgradeRequired", Zt), I(r.JuiceboxRegisterFailureReason, "Assertion", ti), I(r.JuiceboxRegisterFailureReason, "Transient", ii), I(r.JuiceboxRegisterFailureReason, "RateLimitExceeded", si), I(r.JuiceboxRegisterFailureReason, "StorageFailed", ri);
                }
                J(St, "JuiceboxRecoverPrivateKeyResult"),
                    J(jt, "Success", F, St),
                    J(kt, "JuiceboxFailure", F, St),
                    S(Et, "KeyReconstructionFailure", F, St),
                    S(Ft, "NoJuiceboxTokens", F, St),
                    J(It, "JuiceboxRecoverFailureReason", F, P),
                    J(Wt, "JuiceboxRegisterPrivateKeyResult"),
                    S(Tt, "Success", F, Wt),
                    J(Xt, "Failure", F, Wt),
                    J(Ut, "JuiceboxRegisterFailureReason", F, P),
                    J(ei, "XChatIdentityKeyPair"),
                    Z(ni, W),
                    Z(hi, W),
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
                    Z(Pi, W),
                    Z(Ii, W),
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
                    Z(rs, W),
                    J(es, "XChatPublicKey", F, F, F, [0]),
                    Z(ns, W),
                    J(hs, "XChatPrivateKey", F, F, F, [0]),
                    (E(jt).e92 = function () {
                        return this.bytes;
                    }),
                    (E(kt).n9d = function () {
                        return this.reason;
                    }),
                    (E(kt).o9d = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).wg = function () {
                        return this.reason;
                    }),
                    (E(kt).xg = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).p9d = function (t, i) {
                        return new kt(t, i);
                    }),
                    (E(kt).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.p9d(t, i);
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
                    (E(It).s9d = function () {
                        return this.retryable;
                    }),
                    (E(Tt).toString = function () {
                        return "Success";
                    }),
                    (E(Tt).hashCode = function () {
                        return 1551298723;
                    }),
                    (E(Tt).equals = function (t) {
                        return this === t || (t instanceof Tt && (t instanceof Tt || C(), !0));
                    }),
                    (E(Xt).n9d = function () {
                        return this.reason;
                    }),
                    (E(Xt).wg = function () {
                        return this.reason;
                    }),
                    (E(Xt).t9d = function (t) {
                        return new Xt(t);
                    }),
                    (E(Xt).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.t9d(t);
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
                    (E(Ut).s9d = function () {
                        return this.retryable;
                    }),
                    (E(ei).toString = function () {
                        return "XChatIdentityKeyPair(public=" + T(this.w9d_1) + ", private=" + T(this.x9d_1) + ")";
                    }),
                    (E(ei).hashCode = function () {
                        var t = z(this.w9d_1);
                        return (t = (k(t, 31) + z(this.x9d_1)) | 0);
                    }),
                    (E(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : C();
                        return !!X(this.w9d_1, i.w9d_1) && !!X(this.x9d_1, i.x9d_1);
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
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.m9e_1 = N), (this.q9_1 = 4), (t = this.h9e_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.n9e_1 = t), (this.o9e_1 = U(this.n9e_1)), (this.p9e_1 = this.m9e_1.g9d(this.o9e_1)), (this.q9e_1 = this.p9e_1.wg()), (this.r9e_1 = this.p9e_1.f9c()), (this.q9_1 = 5);
                                        var i = this.r9e_1;
                                        if ((t = this.j9e_1.e9f(G(i), this)) === M()) return t;
                                        continue t;
                                    case 5:
                                        (this.s9e_1 = H(this.r9e_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.i9e_1.f9f(1024, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.t9e_1 = t), null == this.t9e_1)) {
                                            (this.l9e_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.u9e_1 = this.t9e_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.v9e_1 = this.u9e_1), (this.q9_1 = 9), (t = this.i9e_1.g9f(this)) === M())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.w9e_1 = D()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.w9e_1 = B()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.x9e_1 = this.w9e_1;
                                        var s = N,
                                            r = this.v9e_1,
                                            e = U(r),
                                            n = this.x9e_1;
                                        (this.y9e_1 = s.i9d(this.q9e_1, e, F, Q(O(n)))), (this.s9e_1 = (this.s9e_1 + H(this.y9e_1)) | 0), (this.q9_1 = 11);
                                        var h = this.y9e_1;
                                        if ((t = this.j9e_1.e9f(G(h), this)) === M()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.k9e_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Y)) {
                                            this.z9e_1 = this.t9_1;
                                            var _ = V(),
                                                u = this.z9e_1;
                                            if (!_.m98_1.m())
                                                for (var c = _.m98_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.l9e_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.a9f_1 = this.t9_1), this.i9e_1.x4(), (this.q9_1 = 15), (t = this.j9e_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.j9e_1.x4(), this.a9f_1);
                                    case 16:
                                        if (((this.b9f_1 = this.l9e_1), (this.r9_1 = 20), this.i9e_1.x4(), (this.q9_1 = 17), (t = this.j9e_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 17:
                                        return this.j9e_1.x4(), this.b9f_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.i9e_1.x4(), (this.q9_1 = 19), (t = this.j9e_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 19:
                                        return this.j9e_1.x4(), K;
                                    case 20:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (20 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(hi).ia = function () {
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
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.s9f_1.f9f(tt(), this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.y9f_1 = t), null == this.y9f_1)) {
                                            (this.x9f_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.z9f_1 = this.y9f_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.a9g_1 = this.z9f_1), (this.b9g_1 = this.a9g_1.length), (this.c9g_1 = N), (this.q9_1 = 6), (t = this.r9f_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        (this.d9g_1 = t), (this.e9g_1 = U(this.d9g_1));
                                        var i = this.a9g_1;
                                        (this.f9g_1 = this.c9g_1.j9d(this.e9g_1, U(i))), (this.g9g_1 = this.f9g_1.wg()), (this.h9g_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.s9f_1.f9f(this.q9f_1.r9g_1, this)) === M())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.i9g_1 = t), null == this.i9g_1)) {
                                            (this.x9f_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.j9g_1 = this.i9g_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.k9g_1 = this.j9g_1), (this.b9g_1 = (this.b9g_1 + this.k9g_1.length) | 0);
                                        var s = N,
                                            r = this.k9g_1;
                                        (this.l9g_1 = s.l9d(this.g9g_1, U(r))), (this.m9g_1 = this.l9g_1.i9c()), (this.q9_1 = 10);
                                        var e = this.m9g_1;
                                        if ((t = this.t9f_1.e9f(G(e), this)) === M()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.v9f_1 && null != this.u9f_1) {
                                            var n = this.b9g_1 / this.u9f_1.bytes.x3();
                                            n > this.h9g_1 + 0.1 && (this.v9f_1(n), (this.h9g_1 = n));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.w9f_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Y)) {
                                            this.n9g_1 = this.t9_1;
                                            var h = V(),
                                                _ = this.n9g_1;
                                            if (!h.m98_1.m())
                                                for (var u = h.m98_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.x9f_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.o9g_1 = this.t9_1), this.s9f_1.x4(), (this.q9_1 = 14), (t = this.t9f_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.t9f_1.x4(), this.o9g_1);
                                    case 15:
                                        if (((this.p9g_1 = this.x9f_1), (this.r9_1 = 19), this.s9f_1.x4(), (this.q9_1 = 16), (t = this.t9f_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 16:
                                        return this.t9f_1.x4(), this.p9g_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.s9f_1.x4(), (this.q9_1 = 18), (t = this.t9f_1.h9f(this)) === M())) return t;
                                        continue t;
                                    case 18:
                                        return this.t9f_1.x4(), K;
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
                                        (this.r9_1 = 3), (this.d9h_1 = it.m9d(st())), (this.e9h_1 = rt);
                                        var i = this.c9h_1;
                                        if (((this.f9h_1 = U(i)), (this.q9_1 = 2), (t = this.b9h_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var s = U(t),
                                            r = this.e9h_1.e9d(this.f9h_1, this.d9h_1, s),
                                            e = this.d9h_1,
                                            n = G(e),
                                            h = G(r),
                                            _ = U(et([n, h]));
                                        return G(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var u = this.t9_1,
                                                c = V();
                                            if (!c.m98_1.m())
                                                for (var a = c.m98_1.s2().p(); a.q(); ) {
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
                                        var i = ht(this.q9h_1, nt(0, st()));
                                        this.s9h_1 = U(i.slice());
                                        var s = ht(this.q9h_1, nt(st(), this.q9h_1.length));
                                        if (((this.t9h_1 = U(s.slice())), (this.u9h_1 = rt), (this.q9_1 = 2), (t = this.p9h_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var r = U(t),
                                            e = this.u9h_1.f9d(this.t9h_1, this.s9h_1, r);
                                        return G(e).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var n = this.t9_1,
                                                h = V();
                                            if (!h.m98_1.m())
                                                for (var _ = "XWS decryptMessage failed for " + this.r9h_1, u = h.m98_1.s2().p(); u.q(); ) {
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
                    (E(ci).v9h = function (t, i, s, r) {
                        var e = new ni(this, t, i, s, r);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ci).w9h = function (t, i, s, r, e, n) {
                        var h = new hi(this, t, i, s, r, e, n);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ci).x9h = function (t, i, s) {
                        var r = new _i(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ci).y9h = function (t, i, s, r) {
                        var e = new ui(this, t, i, s, r);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.h9i_1.uo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.h9i_1.d9d(this)) === M())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.r9i_1.f9m_1, "jwk", this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
                                        return at(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (2 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
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
                                        if (((s.public = this.a9j_1), (t = ut(i.deriveBits(s, this.b9j_1, 256), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.c9j_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                e = V();
                                            if (!e.m98_1.m())
                                                for (var n = e.m98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.c9j_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.c9j_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Fi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ut(fi(window).subtle.digest("SHA-256", ft([this.l9j_1, ot(new Int8Array([0, 0, 0, 1])).buffer, this.m9j_1])), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.n9j_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = V();
                                            if (!s.m98_1.m())
                                                for (var r = s.m98_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(i, null);
                                                }
                                            (this.n9j_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.n9j_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
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
                                            r = [this.x9j_1];
                                        if ((t = ut(i.importKey("raw", this.w9j_1, s, !1, r), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.y9j_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                n = V();
                                            if (!n.m98_1.m())
                                                for (var h = n.m98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(e, null);
                                                }
                                            (this.y9j_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.y9j_1;
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
                                        if (((s.iv = this.j9k_1), (t = ut(i.encrypt(s, this.h9k_1, this.i9k_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.k9k_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                e = V();
                                            if (!e.m98_1.m())
                                                for (var n = e.m98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.k9k_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.k9k_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
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
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.v9k_1 ? [] : [this.v9k_1]), (t = ut(s.importKey(this.t9k_1, this.u9k_1, r, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.w9k_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                n = V();
                                            if (!n.m98_1.m())
                                                for (var h = n.m98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(e, null);
                                                }
                                            (this.w9k_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.w9k_1;
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
                                        if (((s.iv = this.f9l_1), (t = ut(i.decrypt(s, this.g9l_1, this.h9l_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.i9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                e = V();
                                            if (!e.m98_1.m())
                                                for (var n = e.m98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.i9l_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.i9l_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Pi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i,
                                            s = fi(window).subtle,
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.t9l_1 ? [] : [this.t9l_1]), (t = ut(s.importKey(this.r9l_1, this.s9l_1, r, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.u9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                n = V();
                                            if (!n.m98_1.m())
                                                for (var h = n.m98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(e, null);
                                                }
                                            (this.u9l_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.u9l_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Ii).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ut(i.importKey("raw", this.d9m_1, s, !0, ["encrypt", "decrypt"]), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.e9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                e = V();
                                            if (!e.m98_1.m())
                                                for (var n = e.m98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
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
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Xi).a9n = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Xi).p2d = function (t) {
                        return this.a9n(t);
                    }),
                    (E(Xi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ut((this.z9m_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === M())) return t;
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
                        return new Xi(this.z9m_1, t);
                    }),
                    (E(Mi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ti(this.p9m_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            r = i.Client;
                                        return (window.JuiceboxGetAuthToken = Li(this.q9m_1)), new r(new s(this.q9m_1.f90_1), []);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (2 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Ni).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.q9_1 = 1), (t = Ti(this.j9n_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.n9n_1 = t), (this.r9_1 = 5);
                                        var i = V();
                                        if (!i.m98_1.m())
                                            for (var s = i.m98_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = V();
                                        if (!r.m98_1.m())
                                            for (var e = "XWS " + T(this.l9n_1.a90_1), n = r.m98_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(e, null);
                                            }
                                        if (((this.q9_1 = 2), (t = zi(this.j9n_1, this.l9n_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.p9n_1 = t), (this.q9n_1 = dt(this.k9n_1)), (this.q9_1 = 3), (t = this.m9n_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.r9n_1 = t), (this.s9n_1 = this.p9n_1.register(this.q9n_1, this.r9n_1, new Int8Array(0), this.l9n_1.b90_1)), (this.q9_1 = 4), (t = ut(this.s9n_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.o9n_1 = zt()), (this.r9_1 = 7), (this.q9_1 = 6);
                                        continue t;
                                    case 5:
                                        this.r9_1 = 7;
                                        var h = this.t9_1,
                                            _ = h == this.n9n_1.RegisterError.InvalidAuth ? Yt() : h == this.n9n_1.RegisterError.UpgradeRequired ? Zt() : h == this.n9n_1.RegisterError.Assertion ? ti() : h == this.n9n_1.RegisterError.Transient ? ii() : h == this.n9n_1.RegisterError.RateLimitExceeded ? si() : ii();
                                        (this.o9n_1 = new Xt(_)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        return (this.r9_1 = 7), this.o9n_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ti(this.b9o_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.e9o_1 = t), (this.r9_1 = 4);
                                        var i = V();
                                        if (!i.m98_1.m())
                                            for (var s = i.m98_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = V();
                                        if (!r.m98_1.m())
                                            for (var e = "XWS " + T(this.d9o_1.a90_1), n = r.m98_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(e, null);
                                            }
                                        if (((this.q9_1 = 2), (t = zi(this.b9o_1, this.d9o_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.g9o_1 = t), (this.q9_1 = 3), (t = ut(this.g9o_1.recover(dt(this.c9o_1), new Int8Array(0)), this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        var h = t;
                                        (this.f9o_1 = new jt(h)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.e9o_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.e9o_1.RecoverErrorReason.NotRegistered ? Ht() : u == this.e9o_1.RecoverErrorReason.InvalidAuth ? Bt() : u == this.e9o_1.RecoverErrorReason.UpgradeRequired ? Dt() : u == this.e9o_1.RecoverErrorReason.Assertion ? Ot() : u == this.e9o_1.RecoverErrorReason.Transient ? Qt() : u == this.e9o_1.RecoverErrorReason.RateLimitExceeded ? Vt() : Qt();
                                        (this.f9o_1 = new kt(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.f9o_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Gi).h9o = function (t, i, s, r) {
                        var e = new Ni(this, t, i, s, r);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(Gi).i9o = function (t, i, s) {
                        var r = new Ui(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
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
                                        return new ei(new es(i.publicKey), new hs(i.privateKey));
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = di(this)) === M())) return t;
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.t9p_1.j9q(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.w9p_1 = t), (this.q9_1 = 2), (t = gi(this.u9p_1.i9i_1, this.w9p_1.x9d_1.f9m_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.x9p_1 = t;
                                        var i;
                                        if (null == this.x9p_1) return null;
                                        if (((i = this.x9p_1), (this.y9p_1 = i), (this.q9_1 = 3), (t = vi(this.w9p_1.w9d_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.z9p_1 = t), (this.a9q_1 = Rt(this.z9p_1, 65)), (this.q9_1 = 4), (t = mi(this.y9p_1, this.a9q_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.b9q_1 = t;
                                        var s;
                                        if (null == this.b9q_1) return null;
                                        if (((s = this.b9q_1), (this.c9q_1 = s), (this.d9q_1 = this.c9q_1.slice(0, 16)), (this.e9q_1 = this.c9q_1.slice(16, 32)), (this.q9_1 = 5), (t = $i(this.d9q_1, "encrypt", this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.f9q_1 = t;
                                        var r;
                                        if (null == this.f9q_1) return null;
                                        if (((r = this.f9q_1), (this.g9q_1 = r), (this.q9_1 = 6), (t = li(this.v9p_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.h9q_1 = t), (this.q9_1 = 7), (t = Ri(this.g9q_1, this.h9q_1, this.e9q_1, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var e = t;
                                        return yt(ft([this.a9q_1, e]));
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
                                        if (((this.r9_1 = 7), (this.v9q_1 = at(this.u9q_1)), (this.w9q_1 = this.v9q_1.slice(0, 65)), (this.x9q_1 = this.v9q_1.slice(65)), (this.q9_1 = 1), (t = yi("raw", this.w9q_1, F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.y9q_1 = t;
                                        var i;
                                        if (null == this.y9q_1) return null;
                                        if (((i = this.y9q_1), (this.z9q_1 = i), (this.q9_1 = 2), (t = gi(this.z9q_1, this.t9q_1.f9m_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.a9r_1 = t;
                                        var s;
                                        if (null == this.a9r_1) return null;
                                        if (((s = this.a9r_1), (this.b9r_1 = s), (this.q9_1 = 3), (t = mi(this.b9r_1, this.w9q_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        this.c9r_1 = t;
                                        var r;
                                        if (null == this.c9r_1) return null;
                                        if (((r = this.c9r_1), (this.d9r_1 = r), (this.e9r_1 = this.d9r_1.slice(0, 16)), (this.f9r_1 = this.d9r_1.slice(16, 32)), (this.q9_1 = 4), (t = $i(this.e9r_1, "decrypt", this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.g9r_1 = t;
                                        var e;
                                        if (null == this.g9r_1) return null;
                                        if (((e = this.g9r_1), (this.h9r_1 = e), (this.q9_1 = 5), (t = bi(this.f9r_1, this.h9r_1, this.x9q_1, this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.i9r_1 = t;
                                        var n;
                                        if (null == this.i9r_1) return null;
                                        if (((n = this.i9r_1), (this.j9r_1 = n), (this.q9_1 = 6), (t = Hi(this.s9q_1, this.j9r_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        return t;
                                    case 7:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (7 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Vi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = yi("spki", bt(this.t9r_1), F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new es(t);
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = yi("spki", bt(this.e9s_1), F, this)) === M())) return s;
                                        continue t;
                                    case 1:
                                        this.f9s_1 = s;
                                        var r;
                                        if (null == this.f9s_1) r = null;
                                        else r = new es(this.f9s_1);
                                        this.g9s_1 = r;
                                        var e;
                                        if (null == this.g9s_1) return null;
                                        if (((e = this.g9s_1), (this.h9s_1 = e), (this.q9_1 = 2), (t = this.h9s_1), (i = this), (s = ki(t.i9i_1, "jwk", i)) === M())) return s;
                                        continue t;
                                    case 2:
                                        this.i9s_1 = s;
                                        var n = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((n.d = pt(this.d9s_1, !0)), (n.x = this.i9s_1.x), (n.y = this.i9s_1.y), (this.j9s_1 = n), (this.q9_1 = 3), (s = pi("jwk", this.j9s_1, "deriveBits", this)) === M())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new hs(s);
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (4 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Zi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = xi(this.s9o_1, this)) === M())) return t;
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
                    (E(ts).j9q = function (t) {
                        var i = new Bi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).k9s = function (t) {
                        var i = new Di(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).l9s = function (t, i, s) {
                        var r = new Oi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).m9s = function (t, i, s) {
                        var r = new Qi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).n9s = function (t, i) {
                        var s = new Vi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ts).o9s = function (t, i, s) {
                        var r = new Yi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).p9s = function (t, i) {
                        return Hi(this, bt(t), i);
                    }),
                    (E(ts).q9s = function (t, i, s) {
                        return null;
                    }),
                    (E(ts).r9s = function (t, i, s, r) {
                        return !1;
                    }),
                    (E(is).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = li(this.a9t_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return xt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(ss).d9f = function (t) {
                        var i = new is(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(rs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = vi(this.j9t_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return xt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(es).d9f = function (t) {
                        var i = new rs(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.s9t_1, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return xt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(hs).d9f = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    I(E(It), "name", E(It).y2),
                    I(E(It), "ordinal", E(It).z2),
                    I(E(Ut), "name", E(Ut).y2),
                    I(E(Ut), "ordinal", E(Ut).z2),
                    (j = new ts()),
                    _s(t),
                    (t.$jsExportAll$ = _s),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = jt),
                    (t.$_$.c = Xt),
                    (t.$_$.d = Tt),
                    (t.$_$.e = Gi),
                    (t.$_$.f = ei),
                    (t.$_$.g = ri),
                    (t.$_$.h = Jt),
                    (t.$_$.i = Ct),
                    (t.$_$.j = zt),
                    (t.$_$.k = function () {
                        return null == x && new ci(), x;
                    }),
                    (t.$_$.l = j);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.70214ffa.js.map
