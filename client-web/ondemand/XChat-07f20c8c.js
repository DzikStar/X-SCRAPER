(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, r, h, n, e) {
                "use strict";
                var _,
                    u,
                    c,
                    a,
                    o,
                    l,
                    f,
                    v,
                    w,
                    q,
                    d,
                    $,
                    y,
                    m,
                    R,
                    g,
                    x,
                    p,
                    j,
                    b,
                    k = Math.imul,
                    E = i.$_$.ke,
                    J = i.$_$.hd,
                    F = i.$_$.g,
                    C = i.$_$.zi,
                    S = i.$_$.nd,
                    A = i.$_$.aj,
                    K = i.$_$.l6,
                    P = i.$_$.mi,
                    I = i.$_$.wc,
                    z = i.$_$.oe,
                    T = i.$_$.gd,
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
                    V = h.$_$.d,
                    Y = i.$_$.oi,
                    Z = i.$_$.jd,
                    tt = r.$_$.c,
                    it = r.$_$.i,
                    st = r.$_$.a,
                    rt = r.$_$.g,
                    ht = i.$_$.f,
                    nt = i.$_$.ef,
                    et = i.$_$.wa,
                    _t = r.$_$.b,
                    ut = n.$_$.k,
                    ct = e.$_$.h,
                    at = e.$_$.b,
                    ot = e.$_$.u,
                    lt = e.$_$.g,
                    ft = i.$_$.md,
                    vt = r.$_$.f,
                    wt = i.$_$.b6,
                    qt = i.$_$.ih,
                    dt = i.$_$.tf,
                    $t = i.$_$.zj,
                    yt = i.$_$.jf,
                    mt = i.$_$.ed,
                    Rt = e.$_$.s,
                    gt = e.$_$.d,
                    xt = e.$_$.f,
                    pt = e.$_$.j,
                    jt = e.$_$.c;
                function bt(t) {
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
                    if (q) return K;
                    (q = !0), (c = new It("InvalidPin", 0, !0)), (a = new It("NotRegistered", 1, !0)), (o = new It("InvalidAuth", 2, !0)), (l = new It("UpgradeRequired", 3, !1)), (f = new It("Assertion", 4, !1)), (v = new It("Transient", 5, !0)), (w = new It("RateLimitExceeded", 6, !0));
                }
                function It(t, i, s) {
                    P.call(this, t, i), (this.retryable = s);
                }
                function zt() {
                    (d = this), Wt.call(this);
                }
                function Tt() {
                    return null == d && new zt(), d;
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
                    (p = !0), ($ = new Ut("InvalidAuth", 0, !0)), (y = new Ut("UpgradeRequired", 1, !1)), (m = new Ut("Assertion", 2, !1)), (R = new Ut("Transient", 3, !0)), (g = new Ut("RateLimitExceeded", 4, !0)), (x = new Ut("StorageFailed", 5, !0));
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
                    return Pt(), l;
                }
                function Ot() {
                    return Pt(), f;
                }
                function Qt() {
                    return Pt(), v;
                }
                function Vt() {
                    return Pt(), w;
                }
                function Yt() {
                    return Nt(), $;
                }
                function Zt() {
                    return Nt(), y;
                }
                function ti() {
                    return Nt(), m;
                }
                function ii() {
                    return Nt(), R;
                }
                function si() {
                    return Nt(), g;
                }
                function ri() {
                    return Nt(), x;
                }
                function hi(t, i) {
                    (this.l9h_1 = t), (this.m9h_1 = i);
                }
                function ni(t, i, s, r, h) {
                    W.call(this, h), (this.v9h_1 = t), (this.w9h_1 = i), (this.x9h_1 = s), (this.y9h_1 = r);
                }
                function ei(t, i, s, r, h, n, e) {
                    W.call(this, e), (this.f9j_1 = t), (this.g9j_1 = i), (this.h9j_1 = s), (this.i9j_1 = r), (this.j9j_1 = h), (this.k9j_1 = n);
                }
                function _i(t, i, s, r) {
                    W.call(this, r), (this.p9k_1 = t), (this.q9k_1 = i), (this.r9k_1 = s);
                }
                function ui(t, i, s, r, h) {
                    W.call(this, h), (this.d9l_1 = t), (this.e9l_1 = i), (this.f9l_1 = s), (this.g9l_1 = r);
                }
                function ci() {
                    (j = this), (this.f9k_1 = 1024), (this.g9k_1 = (1024 + _t()) | 0);
                }
                function ai(t, i) {
                    var s = new oi(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function oi(t, i) {
                    W.call(this, i), (this.w9l_1 = t);
                }
                function li(t) {
                    return t.crypto;
                }
                function fi(t, i) {
                    return bi(t.r9i_1, "raw", i);
                }
                function vi(t, i) {
                    return bi(t.x9l_1, "spki", i);
                }
                function wi(t, i) {
                    var s = new Ei(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function qi(t) {
                    var i = li(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        r = s;
                    return ut(i.generateKey(r, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = li(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        r = s;
                    return ut(i.generateKey(r, !0, ["encrypt", "decrypt"]), t);
                }
                function $i(t, i, s) {
                    var r = new Ji(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function yi(t, i, s) {
                    var r = new Fi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function mi(t, i, s) {
                    var r = new Ci(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Ri(t, i, s, r) {
                    var h = new Si(t, i, s, r);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function gi(t, i, s, r) {
                    var h = new Ai(t, i, (s = s === F ? null : s), r);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function xi(t, i, s, r) {
                    var h = new Ki(t, i, s, r);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function pi(t, i, s, r) {
                    var h = new Pi(t, i, (s = s === F ? null : s), r);
                    return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                }
                function ji(t, i) {
                    var s = new Ii(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function bi(t, i, s) {
                    return ut(li(window).subtle.exportKey(i, t), s);
                }
                function ki(t, i, s) {
                    return ut(li(window).subtle.exportKey(i, t), s);
                }
                function Ei(t, i) {
                    W.call(this, i), (this.g9m_1 = t);
                }
                function Ji(t, i, s) {
                    W.call(this, s), (this.p9m_1 = t), (this.q9m_1 = i);
                }
                function Fi(t, i, s) {
                    W.call(this, s), (this.a9n_1 = t), (this.b9n_1 = i);
                }
                function Ci(t, i, s) {
                    W.call(this, s), (this.l9n_1 = t), (this.m9n_1 = i);
                }
                function Si(t, i, s, r) {
                    W.call(this, r), (this.w9n_1 = t), (this.x9n_1 = i), (this.y9n_1 = s);
                }
                function Ai(t, i, s, r) {
                    W.call(this, r), (this.i9o_1 = t), (this.j9o_1 = i), (this.k9o_1 = s);
                }
                function Ki(t, i, s, r) {
                    W.call(this, r), (this.u9o_1 = t), (this.v9o_1 = i), (this.w9o_1 = s);
                }
                function Pi(t, i, s, r) {
                    W.call(this, r), (this.g9p_1 = t), (this.h9p_1 = i), (this.i9p_1 = s);
                }
                function Ii(t, i) {
                    W.call(this, i), (this.s9p_1 = t);
                }
                function zi(t) {
                    var i = t.v9p_1;
                    return (
                        mt(
                            "juiceboxModule",
                            1,
                            yt,
                            function (t) {
                                return zi(t);
                            },
                            null,
                        ),
                        i.m2()
                    );
                }
                function Ti(t, i, s) {
                    var r = new Mi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Xi(t, i) {
                    (this.o9q_1 = t), W.call(this, i);
                }
                function Wi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Xi(t, i),
                                r = function (t) {
                                    return s.p9q(t);
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
                                        var h = vt(t),
                                            n = wt().wm_1,
                                            e = qt(G(h), n),
                                            _ = i.t93_1.p2(e);
                                        s(null == _ ? null : _.a94_1);
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
                    W.call(this, s), (this.e9q_1 = t), (this.f9q_1 = i);
                }
                function Ni(t, i, s, r, h) {
                    W.call(this, h), (this.y9q_1 = t), (this.z9q_1 = i), (this.a9r_1 = s), (this.b9r_1 = r);
                }
                function Ui(t, i, s, r) {
                    W.call(this, r), (this.q9r_1 = t), (this.r9r_1 = i), (this.s9r_1 = s);
                }
                function Gi() {
                    this.v9p_1 = $t(Wi(this));
                }
                function Hi(t, i, s) {
                    var r = new Zi(t, i, s);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function Bi(t, i) {
                    W.call(this, i), (this.q9s_1 = t);
                }
                function Di(t, i) {
                    W.call(this, i), (this.z9s_1 = t);
                }
                function Oi(t, i, s, r) {
                    W.call(this, r), (this.i9t_1 = t), (this.j9t_1 = i), (this.k9t_1 = s);
                }
                function Qi(t, i, s, r) {
                    W.call(this, r), (this.h9u_1 = t), (this.i9u_1 = i), (this.j9u_1 = s);
                }
                function Vi(t, i, s) {
                    W.call(this, s), (this.h9v_1 = t), (this.i9v_1 = i);
                }
                function Yi(t, i, s, r) {
                    W.call(this, r), (this.r9v_1 = t), (this.s9v_1 = i), (this.t9v_1 = s);
                }
                function Zi(t, i, s) {
                    W.call(this, s), (this.g9s_1 = t), (this.h9s_1 = i);
                }
                function ts() {
                    this.x9t_1 = 65;
                }
                function is(t, i) {
                    W.call(this, i), (this.p9w_1 = t);
                }
                function ss(t) {
                    this.r9i_1 = t;
                }
                function rs(t, i) {
                    W.call(this, i), (this.y9w_1 = t);
                }
                function hs(t) {
                    this.x9l_1 = t;
                }
                function ns(t, i) {
                    W.call(this, i), (this.h9x_1 = t);
                }
                function es(t) {
                    this.u9p_1 = t;
                }
                function _s(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        r = s.dms || (s.dms = {});
                    (r.JuiceboxRecoverPrivateKeyResult = St), (r.JuiceboxRecoverPrivateKeyResult.Success = bt), (r.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), I(r.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), I(r.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (r.JuiceboxRecoverFailureReason = It), (r.JuiceboxRecoverFailureReason.values = At), (r.JuiceboxRecoverFailureReason.valueOf = Kt), I(r.JuiceboxRecoverFailureReason, "InvalidPin", Gt), I(r.JuiceboxRecoverFailureReason, "NotRegistered", Ht), I(r.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), I(r.JuiceboxRecoverFailureReason, "UpgradeRequired", Dt), I(r.JuiceboxRecoverFailureReason, "Assertion", Ot), I(r.JuiceboxRecoverFailureReason, "Transient", Qt), I(r.JuiceboxRecoverFailureReason, "RateLimitExceeded", Vt), (r.JuiceboxRegisterPrivateKeyResult = Wt), I(r.JuiceboxRegisterPrivateKeyResult, "Success", Tt), (r.JuiceboxRegisterPrivateKeyResult.Failure = Xt), (r.JuiceboxRegisterFailureReason = Ut), (r.JuiceboxRegisterFailureReason.values = Lt), (r.JuiceboxRegisterFailureReason.valueOf = Mt), I(r.JuiceboxRegisterFailureReason, "InvalidAuth", Yt), I(r.JuiceboxRegisterFailureReason, "UpgradeRequired", Zt), I(r.JuiceboxRegisterFailureReason, "Assertion", ti), I(r.JuiceboxRegisterFailureReason, "Transient", ii), I(r.JuiceboxRegisterFailureReason, "RateLimitExceeded", si), I(r.JuiceboxRegisterFailureReason, "StorageFailed", ri);
                }
                J(St, "JuiceboxRecoverPrivateKeyResult"),
                    J(bt, "Success", F, St),
                    J(kt, "JuiceboxFailure", F, St),
                    S(Et, "KeyReconstructionFailure", F, St),
                    S(Ft, "NoJuiceboxTokens", F, St),
                    J(It, "JuiceboxRecoverFailureReason", F, P),
                    J(Wt, "JuiceboxRegisterPrivateKeyResult"),
                    S(zt, "Success", F, Wt),
                    J(Xt, "Failure", F, Wt),
                    J(Ut, "JuiceboxRegisterFailureReason", F, P),
                    J(hi, "XChatIdentityKeyPair"),
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
                    Z(Pi, W),
                    Z(Ii, W),
                    ft(Xi, W, F, [0]),
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
                    J(hs, "XChatPublicKey", F, F, F, [0]),
                    Z(ns, W),
                    J(es, "XChatPrivateKey", F, F, F, [0]),
                    (E(bt).x95 = function () {
                        return this.bytes;
                    }),
                    (E(kt).c9h = function () {
                        return this.reason;
                    }),
                    (E(kt).d9h = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).wg = function () {
                        return this.reason;
                    }),
                    (E(kt).xg = function () {
                        return this.guessesRemaining;
                    }),
                    (E(kt).e9h = function (t, i) {
                        return new kt(t, i);
                    }),
                    (E(kt).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.e9h(t, i);
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
                    (E(It).h9h = function () {
                        return this.retryable;
                    }),
                    (E(zt).toString = function () {
                        return "Success";
                    }),
                    (E(zt).hashCode = function () {
                        return 1551298723;
                    }),
                    (E(zt).equals = function (t) {
                        return this === t || (t instanceof zt && (t instanceof zt || C(), !0));
                    }),
                    (E(Xt).c9h = function () {
                        return this.reason;
                    }),
                    (E(Xt).wg = function () {
                        return this.reason;
                    }),
                    (E(Xt).i9h = function (t) {
                        return new Xt(t);
                    }),
                    (E(Xt).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.i9h(t);
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
                    (E(Ut).h9h = function () {
                        return this.retryable;
                    }),
                    (E(hi).toString = function () {
                        return "XChatIdentityKeyPair(public=" + z(this.l9h_1) + ", private=" + z(this.m9h_1) + ")";
                    }),
                    (E(hi).hashCode = function () {
                        var t = T(this.l9h_1);
                        return (t = (k(t, 31) + T(this.m9h_1)) | 0);
                    }),
                    (E(hi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof hi)) return !1;
                        var i = t instanceof hi ? t : C();
                        return !!X(this.l9h_1, i.l9h_1) && !!X(this.m9h_1, i.m9h_1);
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
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.b9i_1 = N), (this.q9_1 = 4), (t = this.w9h_1.s9i(this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.c9i_1 = t), (this.d9i_1 = U(this.c9i_1)), (this.e9i_1 = this.b9i_1.v9g(this.d9i_1)), (this.f9i_1 = this.e9i_1.wg()), (this.g9i_1 = this.e9i_1.u9f()), (this.q9_1 = 5);
                                        var i = this.g9i_1;
                                        if ((t = this.y9h_1.t9i(G(i), this)) === M()) return t;
                                        continue t;
                                    case 5:
                                        (this.h9i_1 = H(this.g9i_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.x9h_1.u9i(1024, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.i9i_1 = t), null == this.i9i_1)) {
                                            (this.a9i_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.j9i_1 = this.i9i_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.k9i_1 = this.j9i_1), (this.q9_1 = 9), (t = this.x9h_1.v9i(this)) === M())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.l9i_1 = D()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.l9i_1 = B()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.m9i_1 = this.l9i_1;
                                        var s = N,
                                            r = this.k9i_1,
                                            h = U(r),
                                            n = this.m9i_1;
                                        (this.n9i_1 = s.x9g(this.f9i_1, h, F, Q(O(n)))), (this.h9i_1 = (this.h9i_1 + H(this.n9i_1)) | 0), (this.q9_1 = 11);
                                        var e = this.n9i_1;
                                        if ((t = this.y9h_1.t9i(G(e), this)) === M()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.z9h_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Y)) {
                                            this.o9i_1 = this.t9_1;
                                            var _ = V(),
                                                u = this.o9i_1;
                                            if (!_.c5s_1.m())
                                                for (var c = _.c5s_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.a9i_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.p9i_1 = this.t9_1), this.x9h_1.x4(), (this.q9_1 = 15), (t = this.y9h_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.y9h_1.x4(), this.p9i_1);
                                    case 16:
                                        if (((this.q9i_1 = this.a9i_1), (this.r9_1 = 20), this.x9h_1.x4(), (this.q9_1 = 17), (t = this.y9h_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 17:
                                        return this.y9h_1.x4(), this.q9i_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.x9h_1.x4(), (this.q9_1 = 19), (t = this.y9h_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 19:
                                        return this.y9h_1.x4(), K;
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
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.h9j_1.u9i(tt(), this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.n9j_1 = t), null == this.n9j_1)) {
                                            (this.m9j_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.o9j_1 = this.n9j_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.p9j_1 = this.o9j_1), (this.q9j_1 = this.p9j_1.length), (this.r9j_1 = N), (this.q9_1 = 6), (t = this.g9j_1.s9i(this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        (this.s9j_1 = t), (this.t9j_1 = U(this.s9j_1));
                                        var i = this.p9j_1;
                                        (this.u9j_1 = this.r9j_1.y9g(this.t9j_1, U(i))), (this.v9j_1 = this.u9j_1.wg()), (this.w9j_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.h9j_1.u9i(this.f9j_1.g9k_1, this)) === M())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.x9j_1 = t), null == this.x9j_1)) {
                                            (this.m9j_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.y9j_1 = this.x9j_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.z9j_1 = this.y9j_1), (this.q9j_1 = (this.q9j_1 + this.z9j_1.length) | 0);
                                        var s = N,
                                            r = this.z9j_1;
                                        (this.a9k_1 = s.a9h(this.v9j_1, U(r))), (this.b9k_1 = this.a9k_1.x9f()), (this.q9_1 = 10);
                                        var h = this.b9k_1;
                                        if ((t = this.i9j_1.t9i(G(h), this)) === M()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.k9j_1 && null != this.j9j_1) {
                                            var n = this.q9j_1 / this.j9j_1.bytes.x3();
                                            n > this.w9j_1 + 0.1 && (this.k9j_1(n), (this.w9j_1 = n));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.l9j_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Y)) {
                                            this.c9k_1 = this.t9_1;
                                            var e = V(),
                                                _ = this.c9k_1;
                                            if (!e.c5s_1.m())
                                                for (var u = e.c5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.m9j_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.d9k_1 = this.t9_1), this.h9j_1.x4(), (this.q9_1 = 14), (t = this.i9j_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.i9j_1.x4(), this.d9k_1);
                                    case 15:
                                        if (((this.e9k_1 = this.m9j_1), (this.r9_1 = 19), this.h9j_1.x4(), (this.q9_1 = 16), (t = this.i9j_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 16:
                                        return this.i9j_1.x4(), this.e9k_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.h9j_1.x4(), (this.q9_1 = 18), (t = this.i9j_1.w9i(this)) === M())) return t;
                                        continue t;
                                    case 18:
                                        return this.i9j_1.x4(), K;
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
                                        (this.r9_1 = 3), (this.s9k_1 = it.b9h(st())), (this.t9k_1 = rt);
                                        var i = this.r9k_1;
                                        if (((this.u9k_1 = U(i)), (this.q9_1 = 2), (t = this.q9k_1.s9i(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var s = U(t),
                                            r = this.t9k_1.t9g(this.u9k_1, this.s9k_1, s),
                                            h = this.s9k_1,
                                            n = G(h),
                                            e = G(r),
                                            _ = U(ht([n, e]));
                                        return G(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var u = this.t9_1,
                                                c = V();
                                            if (!c.c5s_1.m())
                                                for (var a = c.c5s_1.s2().p(); a.q(); ) {
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
                                        var i = et(this.f9l_1, nt(0, st()));
                                        this.h9l_1 = U(i.slice());
                                        var s = et(this.f9l_1, nt(st(), this.f9l_1.length));
                                        if (((this.i9l_1 = U(s.slice())), (this.j9l_1 = rt), (this.q9_1 = 2), (t = this.e9l_1.s9i(this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        var r = U(t),
                                            h = this.j9l_1.u9g(this.i9l_1, this.h9l_1, r);
                                        return G(h).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Y)) {
                                            var n = this.t9_1,
                                                e = V();
                                            if (!e.c5s_1.m())
                                                for (var _ = "XWS decryptMessage failed for " + this.g9l_1, u = e.c5s_1.s2().p(); u.q(); ) {
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
                    (E(ci).k9l = function (t, i, s, r) {
                        var h = new ni(this, t, i, s, r);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(ci).l9l = function (t, i, s, r, h, n) {
                        var e = new ei(this, t, i, s, r, h, n);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(ci).m9l = function (t, i, s) {
                        var r = new _i(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ci).n9l = function (t, i, s, r) {
                        var h = new ui(this, t, i, s, r);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.w9l_1.uo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.w9l_1.s9g(this)) === M())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.g9m_1.u9p_1, "jwk", this)) === M())) return t;
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
                                        var i = li(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.p9m_1), (t = ut(i.deriveBits(s, this.q9m_1, 256), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = V();
                                            if (!h.c5s_1.m())
                                                for (var n = h.c5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.r9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.r9m_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ut(li(window).subtle.digest("SHA-256", lt([this.a9n_1, ot(new Int8Array([0, 0, 0, 1])).buffer, this.b9n_1])), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.c9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = V();
                                            if (!s.c5s_1.m())
                                                for (var r = s.c5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(i, null);
                                                }
                                            (this.c9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.c9n_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Ci).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" },
                                            r = [this.m9n_1];
                                        if ((t = ut(i.importKey("raw", this.l9n_1, s, !1, r), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.n9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = V();
                                            if (!n.c5s_1.m())
                                                for (var e = n.c5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(h, null);
                                                }
                                            (this.n9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.n9n_1;
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
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.y9n_1), (t = ut(i.encrypt(s, this.w9n_1, this.x9n_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.z9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = V();
                                            if (!h.c5s_1.m())
                                                for (var n = h.c5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.z9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.z9n_1;
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
                                            s = li(window).subtle,
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.k9o_1 ? [] : [this.k9o_1]), (t = ut(s.importKey(this.i9o_1, this.j9o_1, r, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.l9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = V();
                                            if (!n.c5s_1.m())
                                                for (var e = n.c5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(h, null);
                                                }
                                            (this.l9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.l9o_1;
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
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.u9o_1), (t = ut(i.decrypt(s, this.v9o_1, this.w9o_1), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = V();
                                            if (!h.c5s_1.m())
                                                for (var n = h.c5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.x9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.x9o_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
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
                                            s = li(window).subtle,
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.i9p_1 ? [] : [this.i9p_1]), (t = ut(s.importKey(this.g9p_1, this.h9p_1, r, !0, i), this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.j9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = V();
                                            if (!n.c5s_1.m())
                                                for (var e = n.c5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(h, null);
                                                }
                                            (this.j9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.j9p_1;
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
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ut(i.importKey("raw", this.s9p_1, s, !0, ["encrypt", "decrypt"]), this)) === M()) return t;
                                        continue t;
                                    case 1:
                                        (this.t9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = V();
                                            if (!h.c5s_1.m())
                                                for (var n = h.c5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(r, null);
                                                }
                                            (this.t9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.t9p_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Xi).p9q = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Xi).g2g = function (t) {
                        return this.p9q(t);
                    }),
                    (E(Xi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ut((this.o9q_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === M())) return t;
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
                        return new Xi(this.o9q_1, t);
                    }),
                    (E(Mi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = zi(this.e9q_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            r = i.Client;
                                        return (window.JuiceboxGetAuthToken = Li(this.f9q_1)), new r(new s(this.f9q_1.y93_1), []);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Ni).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.q9_1 = 1), (t = zi(this.y9q_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.c9r_1 = t), (this.r9_1 = 5);
                                        var i = V();
                                        if (!i.c5s_1.m())
                                            for (var s = i.c5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = V();
                                        if (!r.c5s_1.m())
                                            for (var h = "XWS " + z(this.a9r_1.t93_1), n = r.c5s_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(h, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.y9q_1, this.a9r_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.e9r_1 = t), (this.f9r_1 = dt(this.z9q_1)), (this.q9_1 = 3), (t = this.b9r_1.s9i(this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.g9r_1 = t), (this.h9r_1 = this.e9r_1.register(this.f9r_1, this.g9r_1, new Int8Array(0), this.a9r_1.u93_1)), (this.q9_1 = 4), (t = ut(this.h9r_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        (this.d9r_1 = Tt()), (this.r9_1 = 7), (this.q9_1 = 6);
                                        continue t;
                                    case 5:
                                        this.r9_1 = 7;
                                        var e = this.t9_1,
                                            _ = e == this.c9r_1.RegisterError.InvalidAuth ? Yt() : e == this.c9r_1.RegisterError.UpgradeRequired ? Zt() : e == this.c9r_1.RegisterError.Assertion ? ti() : e == this.c9r_1.RegisterError.Transient ? ii() : e == this.c9r_1.RegisterError.RateLimitExceeded ? si() : ii();
                                        (this.d9r_1 = new Xt(_)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        return (this.r9_1 = 7), this.d9r_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = zi(this.q9r_1)(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        (this.t9r_1 = t), (this.r9_1 = 4);
                                        var i = V();
                                        if (!i.c5s_1.m())
                                            for (var s = i.c5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = V();
                                        if (!r.c5s_1.m())
                                            for (var h = "XWS " + z(this.s9r_1.t93_1), n = r.c5s_1.s2().p(); n.q(); ) {
                                                n.r().m2().d(h, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Ti(this.q9r_1, this.s9r_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.v9r_1 = t), (this.q9_1 = 3), (t = ut(this.v9r_1.recover(dt(this.r9r_1), new Int8Array(0)), this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.u9r_1 = new bt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.t9r_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.t9r_1.RecoverErrorReason.NotRegistered ? Ht() : u == this.t9r_1.RecoverErrorReason.InvalidAuth ? Bt() : u == this.t9r_1.RecoverErrorReason.UpgradeRequired ? Dt() : u == this.t9r_1.RecoverErrorReason.Assertion ? Ot() : u == this.t9r_1.RecoverErrorReason.Transient ? Qt() : u == this.t9r_1.RecoverErrorReason.RateLimitExceeded ? Vt() : Qt();
                                        (this.u9r_1 = new kt(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.u9r_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Gi).w9r = function (t, i, s, r) {
                        var h = new Ni(this, t, i, s, r);
                        return (h.s9_1 = K), (h.t9_1 = null), h.ia();
                    }),
                    (E(Gi).x9r = function (t, i, s) {
                        var r = new Ui(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(Bi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new hi(new hs(i.publicKey), new es(i.privateKey));
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.i9t_1.y9t(this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.l9t_1 = t), (this.q9_1 = 2), (t = $i(this.j9t_1.x9l_1, this.l9t_1.m9h_1.u9p_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.m9t_1 = t;
                                        var i;
                                        if (null == this.m9t_1) return null;
                                        if (((i = this.m9t_1), (this.n9t_1 = i), (this.q9_1 = 3), (t = vi(this.l9t_1.l9h_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.o9t_1 = t), (this.p9t_1 = Rt(this.o9t_1, 65)), (this.q9_1 = 4), (t = yi(this.n9t_1, this.p9t_1, this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.q9t_1 = t;
                                        var s;
                                        if (null == this.q9t_1) return null;
                                        if (((s = this.q9t_1), (this.r9t_1 = s), (this.s9t_1 = this.r9t_1.slice(0, 16)), (this.t9t_1 = this.r9t_1.slice(16, 32)), (this.q9_1 = 5), (t = mi(this.s9t_1, "encrypt", this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.u9t_1 = t;
                                        var r;
                                        if (null == this.u9t_1) return null;
                                        if (((r = this.u9t_1), (this.v9t_1 = r), (this.q9_1 = 6), (t = fi(this.k9t_1, this)) === M())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.w9t_1 = t), (this.q9_1 = 7), (t = Ri(this.v9t_1, this.w9t_1, this.t9t_1, this)) === M())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var h = t;
                                        return gt(lt([this.p9t_1, h]));
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
                                        if (((this.r9_1 = 7), (this.k9u_1 = at(this.j9u_1)), (this.l9u_1 = this.k9u_1.slice(0, 65)), (this.m9u_1 = this.k9u_1.slice(65)), (this.q9_1 = 1), (t = gi("raw", this.l9u_1, F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        this.n9u_1 = t;
                                        var i;
                                        if (null == this.n9u_1) return null;
                                        if (((i = this.n9u_1), (this.o9u_1 = i), (this.q9_1 = 2), (t = $i(this.o9u_1, this.i9u_1.u9p_1, this)) === M())) return t;
                                        continue t;
                                    case 2:
                                        this.p9u_1 = t;
                                        var s;
                                        if (null == this.p9u_1) return null;
                                        if (((s = this.p9u_1), (this.q9u_1 = s), (this.q9_1 = 3), (t = yi(this.q9u_1, this.l9u_1, this)) === M())) return t;
                                        continue t;
                                    case 3:
                                        this.r9u_1 = t;
                                        var r;
                                        if (null == this.r9u_1) return null;
                                        if (((r = this.r9u_1), (this.s9u_1 = r), (this.t9u_1 = this.s9u_1.slice(0, 16)), (this.u9u_1 = this.s9u_1.slice(16, 32)), (this.q9_1 = 4), (t = mi(this.t9u_1, "decrypt", this)) === M())) return t;
                                        continue t;
                                    case 4:
                                        this.v9u_1 = t;
                                        var h;
                                        if (null == this.v9u_1) return null;
                                        if (((h = this.v9u_1), (this.w9u_1 = h), (this.q9_1 = 5), (t = xi(this.u9u_1, this.w9u_1, this.m9u_1, this)) === M())) return t;
                                        continue t;
                                    case 5:
                                        this.x9u_1 = t;
                                        var n;
                                        if (null == this.x9u_1) return null;
                                        if (((n = this.x9u_1), (this.y9u_1 = n), (this.q9_1 = 6), (t = Hi(this.h9u_1, this.y9u_1, this)) === M())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi("spki", xt(this.i9v_1), F, this)) === M())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new hs(t);
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = gi("spki", xt(this.t9v_1), F, this)) === M())) return s;
                                        continue t;
                                    case 1:
                                        this.u9v_1 = s;
                                        var r;
                                        if (null == this.u9v_1) r = null;
                                        else r = new hs(this.u9v_1);
                                        this.v9v_1 = r;
                                        var h;
                                        if (null == this.v9v_1) return null;
                                        if (((h = this.v9v_1), (this.w9v_1 = h), (this.q9_1 = 2), (t = this.w9v_1), (i = this), (s = ki(t.x9l_1, "jwk", i)) === M())) return s;
                                        continue t;
                                    case 2:
                                        this.x9v_1 = s;
                                        var n = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((n.d = pt(this.s9v_1, !0)), (n.x = this.x9v_1.x), (n.y = this.x9v_1.y), (this.y9v_1 = n), (this.q9_1 = 3), (s = pi("jwk", this.y9v_1, "deriveBits", this)) === M())) return s;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ji(this.h9s_1, this)) === M())) return t;
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
                    (E(ts).y9t = function (t) {
                        var i = new Bi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).z9v = function (t) {
                        var i = new Di(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ts).a9w = function (t, i, s) {
                        var r = new Oi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).b9w = function (t, i, s) {
                        var r = new Qi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).c9w = function (t, i) {
                        var s = new Vi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ts).d9w = function (t, i, s) {
                        var r = new Yi(this, t, i, s);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(ts).e9w = function (t, i) {
                        return Hi(this, xt(t), i);
                    }),
                    (E(ts).f9w = function (t, i, s) {
                        return null;
                    }),
                    (E(ts).g9w = function (t, i, s, r) {
                        return !1;
                    }),
                    (E(is).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = fi(this.p9w_1, this)) === M())) return t;
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
                    (E(ss).s9i = function (t) {
                        var i = new is(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(rs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = vi(this.y9w_1, this)) === M())) return t;
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
                    (E(hs).s9i = function (t) {
                        var i = new rs(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this.h9x_1, this)) === M())) return t;
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
                    (E(es).s9i = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    I(E(It), "name", E(It).y2),
                    I(E(It), "ordinal", E(It).z2),
                    I(E(Ut), "name", E(Ut).y2),
                    I(E(Ut), "ordinal", E(Ut).z2),
                    (b = new ts()),
                    _s(t),
                    (t.$jsExportAll$ = _s),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = bt),
                    (t.$_$.c = Xt),
                    (t.$_$.d = zt),
                    (t.$_$.e = Gi),
                    (t.$_$.f = hi),
                    (t.$_$.g = ri),
                    (t.$_$.h = Jt),
                    (t.$_$.i = Ct),
                    (t.$_$.j = Tt),
                    (t.$_$.k = function () {
                        return null == j && new ci(), j;
                    }),
                    (t.$_$.l = b);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.e3597f6a.js.map
