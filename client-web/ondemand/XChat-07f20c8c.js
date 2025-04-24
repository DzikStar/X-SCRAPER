(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, e, r, n, h) {
                "use strict";
                var _,
                    u,
                    c,
                    a,
                    o,
                    f,
                    l,
                    q,
                    v,
                    w,
                    d,
                    g,
                    $,
                    m,
                    y,
                    R,
                    p,
                    b,
                    x,
                    j,
                    k = Math.imul,
                    E = i.$_$.ke,
                    J = i.$_$.hd,
                    F = i.$_$.g,
                    C = i.$_$.ui,
                    S = i.$_$.nd,
                    A = i.$_$.vi,
                    K = i.$_$.l6,
                    z = i.$_$.hi,
                    P = i.$_$.wc,
                    I = i.$_$.oe,
                    T = i.$_$.gd,
                    X = i.$_$.yc,
                    W = i.$_$.hc,
                    L = e.$_$.j,
                    M = i.$_$.sb,
                    N = e.$_$.h,
                    U = i.$_$.d4,
                    G = i.$_$.j4,
                    H = i.$_$.i4,
                    B = e.$_$.e,
                    D = e.$_$.d,
                    O = i.$_$.le,
                    Q = i.$_$.z3,
                    V = r.$_$.c,
                    Y = i.$_$.ji,
                    Z = i.$_$.jd,
                    tt = e.$_$.c,
                    it = e.$_$.i,
                    st = e.$_$.a,
                    et = e.$_$.g,
                    rt = i.$_$.f,
                    nt = i.$_$.ef,
                    ht = i.$_$.wa,
                    _t = e.$_$.b,
                    ut = n.$_$.k,
                    ct = h.$_$.h,
                    at = h.$_$.b,
                    ot = h.$_$.u,
                    ft = h.$_$.g,
                    lt = i.$_$.md,
                    qt = e.$_$.f,
                    vt = i.$_$.b6,
                    wt = i.$_$.dh,
                    dt = i.$_$.tf,
                    gt = i.$_$.uj,
                    $t = i.$_$.jf,
                    mt = i.$_$.ed,
                    yt = h.$_$.s,
                    Rt = h.$_$.d,
                    pt = h.$_$.f,
                    bt = h.$_$.j,
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
                            zt(), A("No enum constant value.");
                    }
                }
                function zt() {
                    if (w) return K;
                    (w = !0), (c = new Pt("InvalidPin", 0, !0)), (a = new Pt("NotRegistered", 1, !0)), (o = new Pt("InvalidAuth", 2, !0)), (f = new Pt("UpgradeRequired", 3, !1)), (l = new Pt("Assertion", 4, !1)), (q = new Pt("Transient", 5, !0)), (v = new Pt("RateLimitExceeded", 6, !0));
                }
                function Pt(t, i, s) {
                    z.call(this, t, i), (this.retryable = s);
                }
                function It() {
                    (d = this), Wt.call(this);
                }
                function Tt() {
                    return null == d && new It(), d;
                }
                function Xt(t) {
                    Wt.call(this), (this.reason = t);
                }
                function Wt() {}
                function Lt() {
                    return [Yt(), Zt(), ti(), ii(), si(), ei()];
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
                            return ei();
                        default:
                            Nt(), A("No enum constant value.");
                    }
                }
                function Nt() {
                    if (b) return K;
                    (b = !0), (g = new Ut("InvalidAuth", 0, !0)), ($ = new Ut("UpgradeRequired", 1, !1)), (m = new Ut("Assertion", 2, !1)), (y = new Ut("Transient", 3, !0)), (R = new Ut("RateLimitExceeded", 4, !0)), (p = new Ut("StorageFailed", 5, !0));
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
                    return zt(), q;
                }
                function Vt() {
                    return zt(), v;
                }
                function Yt() {
                    return Nt(), g;
                }
                function Zt() {
                    return Nt(), $;
                }
                function ti() {
                    return Nt(), m;
                }
                function ii() {
                    return Nt(), y;
                }
                function si() {
                    return Nt(), R;
                }
                function ei() {
                    return Nt(), p;
                }
                function ri(t, i) {
                    (this.t9d_1 = t), (this.u9d_1 = i);
                }
                function ni(t, i, s, e, r) {
                    W.call(this, r), (this.d9e_1 = t), (this.e9e_1 = i), (this.f9e_1 = s), (this.g9e_1 = e);
                }
                function hi(t, i, s, e, r, n, h) {
                    W.call(this, h), (this.n9f_1 = t), (this.o9f_1 = i), (this.p9f_1 = s), (this.q9f_1 = e), (this.r9f_1 = r), (this.s9f_1 = n);
                }
                function _i(t, i, s, e) {
                    W.call(this, e), (this.x9g_1 = t), (this.y9g_1 = i), (this.z9g_1 = s);
                }
                function ui(t, i, s, e, r) {
                    W.call(this, r), (this.l9h_1 = t), (this.m9h_1 = i), (this.n9h_1 = s), (this.o9h_1 = e);
                }
                function ci() {
                    (x = this), (this.n9g_1 = 1024), (this.o9g_1 = (1024 + _t()) | 0);
                }
                function ai(t, i) {
                    var s = new oi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function oi(t, i) {
                    W.call(this, i), (this.e9i_1 = t);
                }
                function fi(t) {
                    return t.crypto;
                }
                function li(t, i) {
                    return ji(t.z9e_1, "raw", i);
                }
                function qi(t, i) {
                    return ji(t.f9i_1, "spki", i);
                }
                function vi(t, i) {
                    var s = new Ei(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function wi(t) {
                    var i = fi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        e = s;
                    return ut(i.generateKey(e, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = fi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        e = s;
                    return ut(i.generateKey(e, !0, ["encrypt", "decrypt"]), t);
                }
                function gi(t, i, s) {
                    var e = new Ji(t, i, s);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function $i(t, i, s) {
                    var e = new Fi(t, i, s);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function mi(t, i, s) {
                    var e = new Ci(t, i, s);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function yi(t, i, s, e) {
                    var r = new Si(t, i, s, e);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Ri(t, i, s, e) {
                    var r = new Ai(t, i, (s = s === F ? null : s), e);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function pi(t, i, s, e) {
                    var r = new Ki(t, i, s, e);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function bi(t, i, s, e) {
                    var r = new zi(t, i, (s = s === F ? null : s), e);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function xi(t, i) {
                    var s = new Pi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function ji(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function ki(t, i, s) {
                    return ut(fi(window).subtle.exportKey(i, t), s);
                }
                function Ei(t, i) {
                    W.call(this, i), (this.o9i_1 = t);
                }
                function Ji(t, i, s) {
                    W.call(this, s), (this.x9i_1 = t), (this.y9i_1 = i);
                }
                function Fi(t, i, s) {
                    W.call(this, s), (this.i9j_1 = t), (this.j9j_1 = i);
                }
                function Ci(t, i, s) {
                    W.call(this, s), (this.t9j_1 = t), (this.u9j_1 = i);
                }
                function Si(t, i, s, e) {
                    W.call(this, e), (this.e9k_1 = t), (this.f9k_1 = i), (this.g9k_1 = s);
                }
                function Ai(t, i, s, e) {
                    W.call(this, e), (this.q9k_1 = t), (this.r9k_1 = i), (this.s9k_1 = s);
                }
                function Ki(t, i, s, e) {
                    W.call(this, e), (this.c9l_1 = t), (this.d9l_1 = i), (this.e9l_1 = s);
                }
                function zi(t, i, s, e) {
                    W.call(this, e), (this.o9l_1 = t), (this.p9l_1 = i), (this.q9l_1 = s);
                }
                function Pi(t, i) {
                    W.call(this, i), (this.a9m_1 = t);
                }
                function Ii(t) {
                    var i = t.d9m_1;
                    return (
                        mt(
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
                    var e = new Mi(t, i, s);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function Xi(t, i) {
                    (this.w9m_1 = t), W.call(this, i);
                }
                function Wi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Xi(t, i),
                                e = function (t) {
                                    return s.x9m(t);
                                };
                            return (e.$arity = 0), e;
                        })(t, null);
                    };
                }
                function Li(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, e) {
                                    try {
                                        var r = qt(t),
                                            n = vt().wm_1,
                                            h = wt(G(r), n),
                                            _ = i.x8z_1.p2(h);
                                        s(null == _ ? null : _.e90_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        e(t);
                                    }
                                    return K;
                                };
                            })(i, t),
                        );
                    };
                }
                function Mi(t, i, s) {
                    W.call(this, s), (this.m9m_1 = t), (this.n9m_1 = i);
                }
                function Ni(t, i, s, e, r) {
                    W.call(this, r), (this.g9n_1 = t), (this.h9n_1 = i), (this.i9n_1 = s), (this.j9n_1 = e);
                }
                function Ui(t, i, s, e) {
                    W.call(this, e), (this.y9n_1 = t), (this.z9n_1 = i), (this.a9o_1 = s);
                }
                function Gi() {
                    this.d9m_1 = gt(Wi(this));
                }
                function Hi(t, i, s) {
                    var e = new Zi(t, i, s);
                    return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                }
                function Bi(t, i) {
                    W.call(this, i), (this.y9o_1 = t);
                }
                function Di(t, i) {
                    W.call(this, i), (this.h9p_1 = t);
                }
                function Oi(t, i, s, e) {
                    W.call(this, e), (this.q9p_1 = t), (this.r9p_1 = i), (this.s9p_1 = s);
                }
                function Qi(t, i, s, e) {
                    W.call(this, e), (this.p9q_1 = t), (this.q9q_1 = i), (this.r9q_1 = s);
                }
                function Vi(t, i, s) {
                    W.call(this, s), (this.p9r_1 = t), (this.q9r_1 = i);
                }
                function Yi(t, i, s, e) {
                    W.call(this, e), (this.z9r_1 = t), (this.a9s_1 = i), (this.b9s_1 = s);
                }
                function Zi(t, i, s) {
                    W.call(this, s), (this.o9o_1 = t), (this.p9o_1 = i);
                }
                function ts() {
                    this.f9q_1 = 65;
                }
                function is(t, i) {
                    W.call(this, i), (this.v9s_1 = t);
                }
                function ss(t) {
                    this.z9e_1 = t;
                }
                function es(t, i) {
                    W.call(this, i), (this.e9t_1 = t);
                }
                function rs(t) {
                    this.f9i_1 = t;
                }
                function ns(t, i) {
                    W.call(this, i), (this.n9t_1 = t);
                }
                function hs(t) {
                    this.c9m_1 = t;
                }
                function _s(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        e = s.dms || (s.dms = {});
                    (e.JuiceboxRecoverPrivateKeyResult = St), (e.JuiceboxRecoverPrivateKeyResult.Success = jt), (e.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), P(e.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), P(e.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (e.JuiceboxRecoverFailureReason = Pt), (e.JuiceboxRecoverFailureReason.values = At), (e.JuiceboxRecoverFailureReason.valueOf = Kt), P(e.JuiceboxRecoverFailureReason, "InvalidPin", Gt), P(e.JuiceboxRecoverFailureReason, "NotRegistered", Ht), P(e.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), P(e.JuiceboxRecoverFailureReason, "UpgradeRequired", Dt), P(e.JuiceboxRecoverFailureReason, "Assertion", Ot), P(e.JuiceboxRecoverFailureReason, "Transient", Qt), P(e.JuiceboxRecoverFailureReason, "RateLimitExceeded", Vt), (e.JuiceboxRegisterPrivateKeyResult = Wt), P(e.JuiceboxRegisterPrivateKeyResult, "Success", Tt), (e.JuiceboxRegisterPrivateKeyResult.Failure = Xt), (e.JuiceboxRegisterFailureReason = Ut), (e.JuiceboxRegisterFailureReason.values = Lt), (e.JuiceboxRegisterFailureReason.valueOf = Mt), P(e.JuiceboxRegisterFailureReason, "InvalidAuth", Yt), P(e.JuiceboxRegisterFailureReason, "UpgradeRequired", Zt), P(e.JuiceboxRegisterFailureReason, "Assertion", ti), P(e.JuiceboxRegisterFailureReason, "Transient", ii), P(e.JuiceboxRegisterFailureReason, "RateLimitExceeded", si), P(e.JuiceboxRegisterFailureReason, "StorageFailed", ei);
                }
                J(St, "JuiceboxRecoverPrivateKeyResult"),
                    J(jt, "Success", F, St),
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
                    Z(es, W),
                    J(rs, "XChatPublicKey", F, F, F, [0]),
                    Z(ns, W),
                    J(hs, "XChatPrivateKey", F, F, F, [0]),
                    (E(jt).b92 = function () {
                        return this.bytes;
                    }),
                    (E(kt).k9d = function () {
                        return this.reason;
                    }),
                    (E(kt).l9d = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).wg = function () {
                        return this.reason;
                    }),
                    (E(kt).xg = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).m9d = function (t, i) {
                        return new kt(t, i);
                    }),
                    (E(kt).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.m9d(t, i);
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
                    (E(Pt).p9d = function () {
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
                    (E(Xt).k9d = function () {
                        return this.reason;
                    }),
                    (E(Xt).wg = function () {
                        return this.reason;
                    }),
                    (E(Xt).q9d = function (t) {
                        return new Xt(t);
                    }),
                    (E(Xt).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.q9d(t);
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
                    (E(Ut).p9d = function () {
                        return this.retryable;
                    }),
                    (E(ri).toString = function () {
                        return "XChatIdentityKeyPair(public=" + I(this.t9d_1) + ", private=" + I(this.u9d_1) + ")";
                    }),
                    (E(ri).hashCode = function () {
                        var t = T(this.t9d_1);
                        return (t = (k(t, 31) + T(this.u9d_1)) | 0);
                    }),
                    (E(ri).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ri)) return !1;
                        var i = t instanceof ri ? t : C();
                        return !!X(this.t9d_1, i.t9d_1) && !!X(this.u9d_1, i.u9d_1);
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
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.j9e_1 = N), (this.q9_1 = 4), (t = this.e9e_1.a9f(this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.k9e_1 = t), (this.l9e_1 = U(this.k9e_1)), (this.m9e_1 = this.j9e_1.d9d(this.l9e_1)), (this.n9e_1 = this.m9e_1.wg()), (this.o9e_1 = this.m9e_1.c9c()), (this.q9_1 = 5);
                                        var i = this.o9e_1;
                                        if ((t = this.g9e_1.b9f(G(i), this)) === M()) return t;
                                        continue t;
                                    case 5:
                                        (this.p9e_1 = H(this.o9e_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.f9e_1.c9f(1024, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.q9e_1 = t), null == this.q9e_1)) {
                                            (this.i9e_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.r9e_1 = this.q9e_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.s9e_1 = this.r9e_1), (this.q9_1 = 9), (t = this.f9e_1.d9f(this)) === M())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.t9e_1 = D()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.t9e_1 = B()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.u9e_1 = this.t9e_1;
                                        var s = N,
                                            e = this.s9e_1,
                                            r = U(e),
                                            n = this.u9e_1;
                                        (this.v9e_1 = s.f9d(this.n9e_1, r, F, Q(O(n)))), (this.p9e_1 = (this.p9e_1 + H(this.v9e_1)) | 0), (this.q9_1 = 11);
                                        var h = this.v9e_1;
                                        if ((t = this.g9e_1.b9f(G(h), this)) === M()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.h9e_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Y)) {
                                            this.w9e_1 = this.t9_1;
                                            var _ = V(),
                                                u = this.w9e_1;
                                            if (!_.j98_1.m())
                                                for (var c = _.j98_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.i9e_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.x9e_1 = this.t9_1), this.f9e_1.x4(), (this.q9_1 = 15), (t = this.g9e_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.g9e_1.x4(), this.x9e_1);
                                    case 16:
                                        if (((this.y9e_1 = this.i9e_1), (this.r9_1 = 20), this.f9e_1.x4(), (this.q9_1 = 17), (t = this.g9e_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 17:
                                        return this.g9e_1.x4(), this.y9e_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.f9e_1.x4(), (this.q9_1 = 19), (t = this.g9e_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 19:
                                        return this.g9e_1.x4(), K;
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
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.p9f_1.c9f(tt(), this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.v9f_1 = t), null == this.v9f_1)) {
                                            (this.u9f_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.w9f_1 = this.v9f_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.x9f_1 = this.w9f_1), (this.y9f_1 = this.x9f_1.length), (this.z9f_1 = N), (this.q9_1 = 6), (t = this.o9f_1.a9f(this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        (this.a9g_1 = t), (this.b9g_1 = U(this.a9g_1));
                                        var i = this.x9f_1;
                                        (this.c9g_1 = this.z9f_1.g9d(this.b9g_1, U(i))), (this.d9g_1 = this.c9g_1.wg()), (this.e9g_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.p9f_1.c9f(this.n9f_1.o9g_1, this)) === M())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.f9g_1 = t), null == this.f9g_1)) {
                                            (this.u9f_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.g9g_1 = this.f9g_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.h9g_1 = this.g9g_1), (this.y9f_1 = (this.y9f_1 + this.h9g_1.length) | 0);
                                        var s = N,
                                            e = this.h9g_1;
                                        (this.i9g_1 = s.i9d(this.d9g_1, U(e))), (this.j9g_1 = this.i9g_1.f9c()), (this.q9_1 = 10);
                                        var r = this.j9g_1;
                                        if ((t = this.q9f_1.b9f(G(r), this)) === M()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.s9f_1 && null != this.r9f_1) {
                                            var n = this.y9f_1 / this.r9f_1.bytes.x3();
                                            n > this.e9g_1 + 0.1 && (this.s9f_1(n), (this.e9g_1 = n));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.t9f_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Y)) {
                                            this.k9g_1 = this.t9_1;
                                            var h = V(),
                                                _ = this.k9g_1;
                                            if (!h.j98_1.m())
                                                for (var u = h.j98_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.u9f_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.l9g_1 = this.t9_1), this.p9f_1.x4(), (this.q9_1 = 14), (t = this.q9f_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.q9f_1.x4(), this.l9g_1);
                                    case 15:
                                        if (((this.m9g_1 = this.u9f_1), (this.r9_1 = 19), this.p9f_1.x4(), (this.q9_1 = 16), (t = this.q9f_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 16:
                                        return this.q9f_1.x4(), this.m9g_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.p9f_1.x4(), (this.q9_1 = 18), (t = this.q9f_1.e9f(this)) === M())) return t;
                                        continue t;
                                    case 18:
                                        return this.q9f_1.x4(), K;
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
                                        (this.r9_1 = 3), (this.a9h_1 = it.j9d(st())), (this.b9h_1 = et);
                                        var i = this.z9g_1;
                                        if (((this.c9h_1 = U(i)), (this.q9_1 = 2), (t = this.y9g_1.a9f(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var s = U(t),
                                            e = this.b9h_1.b9d(this.c9h_1, this.a9h_1, s),
                                            r = this.a9h_1,
                                            n = G(r),
                                            h = G(e),
                                            _ = U(rt([n, h]));
                                        return G(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var u = this.t9_1,
                                                c = V();
                                            if (!c.j98_1.m())
                                                for (var a = c.j98_1.s2().p(); a.q(); ) {
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
                                        var i = ht(this.n9h_1, nt(0, st()));
                                        this.p9h_1 = U(i.slice());
                                        var s = ht(this.n9h_1, nt(st(), this.n9h_1.length));
                                        if (((this.q9h_1 = U(s.slice())), (this.r9h_1 = et), (this.q9_1 = 2), (t = this.m9h_1.a9f(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var e = U(t),
                                            r = this.r9h_1.c9d(this.q9h_1, this.p9h_1, e);
                                        return G(r).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var n = this.t9_1,
                                                h = V();
                                            if (!h.j98_1.m())
                                                for (var _ = "XWS decryptMessage failed for " + this.o9h_1, u = h.j98_1.s2().p(); u.q(); ) {
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
                    (E(ci).s9h = function (t, i, s, e) {
                        var r = new ni(this, t, i, s, e);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ci).t9h = function (t, i, s, e, r, n) {
                        var h = new hi(this, t, i, s, e, r, n);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ci).u9h = function (t, i, s) {
                        var e = new _i(this, t, i, s);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ci).v9h = function (t, i, s, e) {
                        var r = new ui(this, t, i, s, e);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.e9i_1.uo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.e9i_1.a9d(this)) === M())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.o9i_1.c9m_1, "jwk", this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
                                        return at(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (2 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
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
                                        if (((s.public = this.x9i_1), (t = ut(i.deriveBits(s, this.y9i_1, 256), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.z9i_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                r = V();
                                            if (!r.j98_1.m())
                                                for (var n = r.j98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(e, null);
                                                }
                                            (this.z9i_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.z9i_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ut(fi(window).subtle.digest("SHA-256", ft([this.i9j_1, ot(new Int8Array([0, 0, 0, 1])).buffer, this.j9j_1])), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.k9j_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = V();
                                            if (!s.j98_1.m())
                                                for (var e = s.j98_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(i, null);
                                                }
                                            (this.k9j_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.k9j_1;
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
                                            e = [this.u9j_1];
                                        if ((t = ut(i.importKey("raw", this.t9j_1, s, !1, e), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.v9j_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.j98_1.m())
                                                for (var h = n.j98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(r, null);
                                                }
                                            (this.v9j_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.v9j_1;
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
                                        if (((s.iv = this.g9k_1), (t = ut(i.encrypt(s, this.e9k_1, this.f9k_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.h9k_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                r = V();
                                            if (!r.j98_1.m())
                                                for (var n = r.j98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(e, null);
                                                }
                                            (this.h9k_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.h9k_1;
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
                                            e = {};
                                        if (((e.name = "ECDH"), (e.namedCurve = "P-256"), (i = null == this.s9k_1 ? [] : [this.s9k_1]), (t = ut(s.importKey(this.q9k_1, this.r9k_1, e, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.t9k_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.j98_1.m())
                                                for (var h = n.j98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(r, null);
                                                }
                                            (this.t9k_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.t9k_1;
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
                                        if (((s.iv = this.c9l_1), (t = ut(i.decrypt(s, this.d9l_1, this.e9l_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.f9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                r = V();
                                            if (!r.j98_1.m())
                                                for (var n = r.j98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(e, null);
                                                }
                                            (this.f9l_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.f9l_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
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
                                            e = {};
                                        if (((e.name = "ECDH"), (e.namedCurve = "P-256"), (i = null == this.q9l_1 ? [] : [this.q9l_1]), (t = ut(s.importKey(this.o9l_1, this.p9l_1, e, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = V();
                                            if (!n.j98_1.m())
                                                for (var h = n.j98_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(r, null);
                                                }
                                            (this.r9l_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.r9l_1;
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
                                        if ((t = ut(i.importKey("raw", this.a9m_1, s, !0, ["encrypt", "decrypt"]), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.b9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var e = this.t9_1,
                                                r = V();
                                            if (!r.j98_1.m())
                                                for (var n = r.j98_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(e, null);
                                                }
                                            (this.b9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.b9m_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Xi).x9m = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Xi).m2d = function (t) {
                        return this.x9m(t);
                    }),
                    (E(Xi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ut((this.w9m_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === M())) return t;
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
                        return new Xi(this.w9m_1, t);
                    }),
                    (E(Mi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ii(this.m9m_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            e = i.Client;
                                        return (window.JuiceboxGetAuthToken = Li(this.n9m_1)), new e(new s(this.n9m_1.c90_1), []);
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
                                        if (((this.r9_1 = 7), (this.q9_1 = 1), (t = Ii(this.g9n_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.k9n_1 = t), (this.r9_1 = 5);
                                        var i = V();
                                        if (!i.j98_1.m())
                                            for (var s = i.j98_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var e = V();
                                        if (!e.j98_1.m())
                                            for (var r = "XWS " + I(this.i9n_1.x8z_1), n = e.j98_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.g9n_1, this.i9n_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.m9n_1 = t), (this.n9n_1 = dt(this.h9n_1)), (this.q9_1 = 3), (t = this.j9n_1.a9f(this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.o9n_1 = t), (this.p9n_1 = this.m9n_1.register(this.n9n_1, this.o9n_1, new Int8Array(0), this.i9n_1.y8z_1)), (this.q9_1 = 4), (t = ut(this.p9n_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.l9n_1 = Tt()), (this.r9_1 = 7), (this.q9_1 = 6);
                                        continue t;
                                    case 5:
                                        this.r9_1 = 7;
                                        var h = this.t9_1,
                                            _ = h == this.k9n_1.RegisterError.InvalidAuth ? Yt() : h == this.k9n_1.RegisterError.UpgradeRequired ? Zt() : h == this.k9n_1.RegisterError.Assertion ? ti() : h == this.k9n_1.RegisterError.Transient ? ii() : h == this.k9n_1.RegisterError.RateLimitExceeded ? si() : ii();
                                        (this.l9n_1 = new Xt(_)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        return (this.r9_1 = 7), this.l9n_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ii(this.y9n_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.b9o_1 = t), (this.r9_1 = 4);
                                        var i = V();
                                        if (!i.j98_1.m())
                                            for (var s = i.j98_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var e = V();
                                        if (!e.j98_1.m())
                                            for (var r = "XWS " + I(this.a9o_1.x8z_1), n = e.j98_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.y9n_1, this.a9o_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.d9o_1 = t), (this.q9_1 = 3), (t = ut(this.d9o_1.recover(dt(this.z9n_1), new Int8Array(0)), this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        var h = t;
                                        (this.c9o_1 = new jt(h)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.b9o_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.b9o_1.RecoverErrorReason.NotRegistered ? Ht() : u == this.b9o_1.RecoverErrorReason.InvalidAuth ? Bt() : u == this.b9o_1.RecoverErrorReason.UpgradeRequired ? Dt() : u == this.b9o_1.RecoverErrorReason.Assertion ? Ot() : u == this.b9o_1.RecoverErrorReason.Transient ? Qt() : u == this.b9o_1.RecoverErrorReason.RateLimitExceeded ? Vt() : Qt();
                                        (this.c9o_1 = new kt(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.c9o_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Gi).e9o = function (t, i, s, e) {
                        var r = new Ni(this, t, i, s, e);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(Gi).f9o = function (t, i, s) {
                        var e = new Ui(this, t, i, s);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
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
                                        return new ri(new rs(i.publicKey), new hs(i.privateKey));
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.q9p_1.g9q(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.t9p_1 = t), (this.q9_1 = 2), (t = gi(this.r9p_1.f9i_1, this.t9p_1.u9d_1.c9m_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.u9p_1 = t;
                                        var i;
                                        if (null == this.u9p_1) return null;
                                        if (((i = this.u9p_1), (this.v9p_1 = i), (this.q9_1 = 3), (t = qi(this.t9p_1.t9d_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.w9p_1 = t), (this.x9p_1 = yt(this.w9p_1, 65)), (this.q9_1 = 4), (t = $i(this.v9p_1, this.x9p_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.y9p_1 = t;
                                        var s;
                                        if (null == this.y9p_1) return null;
                                        if (((s = this.y9p_1), (this.z9p_1 = s), (this.a9q_1 = this.z9p_1.slice(0, 16)), (this.b9q_1 = this.z9p_1.slice(16, 32)), (this.q9_1 = 5), (t = mi(this.a9q_1, "encrypt", this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.c9q_1 = t;
                                        var e;
                                        if (null == this.c9q_1) return null;
                                        if (((e = this.c9q_1), (this.d9q_1 = e), (this.q9_1 = 6), (t = li(this.s9p_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.e9q_1 = t), (this.q9_1 = 7), (t = yi(this.d9q_1, this.e9q_1, this.b9q_1, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var r = t;
                                        return Rt(ft([this.x9p_1, r]));
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
                                        if (((this.r9_1 = 7), (this.s9q_1 = at(this.r9q_1)), (this.t9q_1 = this.s9q_1.slice(0, 65)), (this.u9q_1 = this.s9q_1.slice(65)), (this.q9_1 = 1), (t = Ri("raw", this.t9q_1, F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.v9q_1 = t;
                                        var i;
                                        if (null == this.v9q_1) return null;
                                        if (((i = this.v9q_1), (this.w9q_1 = i), (this.q9_1 = 2), (t = gi(this.w9q_1, this.q9q_1.c9m_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.x9q_1 = t;
                                        var s;
                                        if (null == this.x9q_1) return null;
                                        if (((s = this.x9q_1), (this.y9q_1 = s), (this.q9_1 = 3), (t = $i(this.y9q_1, this.t9q_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        this.z9q_1 = t;
                                        var e;
                                        if (null == this.z9q_1) return null;
                                        if (((e = this.z9q_1), (this.a9r_1 = e), (this.b9r_1 = this.a9r_1.slice(0, 16)), (this.c9r_1 = this.a9r_1.slice(16, 32)), (this.q9_1 = 4), (t = mi(this.b9r_1, "decrypt", this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.d9r_1 = t;
                                        var r;
                                        if (null == this.d9r_1) return null;
                                        if (((r = this.d9r_1), (this.e9r_1 = r), (this.q9_1 = 5), (t = pi(this.c9r_1, this.e9r_1, this.u9q_1, this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.f9r_1 = t;
                                        var n;
                                        if (null == this.f9r_1) return null;
                                        if (((n = this.f9r_1), (this.g9r_1 = n), (this.q9_1 = 6), (t = Hi(this.p9q_1, this.g9r_1, this)) === M())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ri("spki", pt(this.q9r_1), F, this)) === M())) return t;
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = Ri("spki", pt(this.b9s_1), F, this)) === M())) return s;
                                        continue t;
                                    case 1:
                                        this.c9s_1 = s;
                                        var e;
                                        if (null == this.c9s_1) e = null;
                                        else e = new rs(this.c9s_1);
                                        this.d9s_1 = e;
                                        var r;
                                        if (null == this.d9s_1) return null;
                                        if (((r = this.d9s_1), (this.e9s_1 = r), (this.q9_1 = 2), (t = this.e9s_1), (i = this), (s = ki(t.f9i_1, "jwk", i)) === M())) return s;
                                        continue t;
                                    case 2:
                                        this.f9s_1 = s;
                                        var n = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((n.d = bt(this.a9s_1, !0)), (n.x = this.f9s_1.x), (n.y = this.f9s_1.y), (this.g9s_1 = n), (this.q9_1 = 3), (s = bi("jwk", this.g9s_1, "deriveBits", this)) === M())) return s;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = xi(this.p9o_1, this)) === M())) return t;
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
                    (E(ts).g9q = function (t) {
                        var i = new Bi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).h9s = function (t) {
                        var i = new Di(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).i9s = function (t, i, s) {
                        var e = new Oi(this, t, i, s);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ts).j9s = function (t, i, s) {
                        var e = new Qi(this, t, i, s);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ts).k9s = function (t, i) {
                        var s = new Vi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ts).l9s = function (t, i, s) {
                        var e = new Yi(this, t, i, s);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ts).m9s = function (t, i) {
                        return Hi(this, pt(t), i);
                    }),
                    (E(is).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = li(this.v9s_1, this)) === M())) return t;
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
                    (E(ss).a9f = function (t) {
                        var i = new is(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(es).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.e9t_1, this)) === M())) return t;
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
                    (E(rs).a9f = function (t) {
                        var i = new es(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = vi(this.n9t_1, this)) === M())) return t;
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
                    (E(hs).a9f = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    P(E(Pt), "name", E(Pt).y2),
                    P(E(Pt), "ordinal", E(Pt).z2),
                    P(E(Ut), "name", E(Ut).y2),
                    P(E(Ut), "ordinal", E(Ut).z2),
                    (j = new ts()),
                    _s(t),
                    (t.$jsExportAll$ = _s),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = jt),
                    (t.$_$.c = Xt),
                    (t.$_$.d = It),
                    (t.$_$.e = Gi),
                    (t.$_$.f = ri),
                    (t.$_$.g = ei),
                    (t.$_$.h = Jt),
                    (t.$_$.i = Ct),
                    (t.$_$.j = Tt),
                    (t.$_$.k = function () {
                        return null == x && new ci(), x;
                    }),
                    (t.$_$.l = j);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.bc53d68a.js.map
