(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, h, n, r, e) {
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
                    y,
                    R,
                    m,
                    p,
                    b,
                    x,
                    j,
                    k = Math.imul,
                    E = i.$_$.oe,
                    J = i.$_$.ld,
                    S = i.$_$.g,
                    C = i.$_$.fj,
                    F = i.$_$.rd,
                    K = i.$_$.gj,
                    A = i.$_$.n6,
                    z = i.$_$.si,
                    P = i.$_$.ad,
                    X = i.$_$.se,
                    I = i.$_$.kd,
                    T = i.$_$.cd,
                    W = i.$_$.rk,
                    L = i.$_$.lc,
                    M = h.$_$.j,
                    N = i.$_$.wb,
                    U = h.$_$.h,
                    G = i.$_$.e4,
                    H = i.$_$.k4,
                    B = i.$_$.j4,
                    D = h.$_$.e,
                    O = h.$_$.d,
                    Q = i.$_$.pe,
                    V = i.$_$.a4,
                    Y = n.$_$.d,
                    Z = i.$_$.ui,
                    tt = i.$_$.nd,
                    it = h.$_$.c,
                    st = h.$_$.i,
                    ht = h.$_$.a,
                    nt = h.$_$.g,
                    rt = i.$_$.f,
                    et = i.$_$.jf,
                    _t = i.$_$.ya,
                    ut = h.$_$.b,
                    ct = r.$_$.k,
                    at = e.$_$.h,
                    ot = e.$_$.b,
                    ft = e.$_$.v,
                    lt = e.$_$.g,
                    vt = i.$_$.qd,
                    qt = h.$_$.f,
                    wt = i.$_$.c6,
                    gt = i.$_$.oh,
                    dt = i.$_$.yf,
                    $t = i.$_$.fk,
                    yt = i.$_$.of,
                    Rt = i.$_$.id,
                    mt = e.$_$.t,
                    pt = e.$_$.d,
                    bt = e.$_$.f,
                    xt = e.$_$.k,
                    jt = e.$_$.c;
                function kt(t) {
                    Kt.call(this), (this.bytes = t);
                }
                function Et(t, i) {
                    Kt.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Jt() {
                    (_ = this), Kt.call(this);
                }
                function St() {
                    return null == _ && new Jt(), _;
                }
                function Ct() {
                    (u = this), Kt.call(this);
                }
                function Ft() {
                    return null == u && new Ct(), u;
                }
                function Kt() {}
                function At() {
                    return [Ht(), Bt(), Dt(), Ot(), Qt(), Vt(), Yt()];
                }
                function zt(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Ht();
                        case "NotRegistered":
                            return Bt();
                        case "InvalidAuth":
                            return Dt();
                        case "UpgradeRequired":
                            return Ot();
                        case "Assertion":
                            return Qt();
                        case "Transient":
                            return Vt();
                        case "RateLimitExceeded":
                            return Yt();
                        default:
                            Pt(), K("No enum constant value.");
                    }
                }
                function Pt() {
                    if (w) return A;
                    (w = !0), (c = new Xt("InvalidPin", 0, !0)), (a = new Xt("NotRegistered", 1, !0)), (o = new Xt("InvalidAuth", 2, !0)), (f = new Xt("UpgradeRequired", 3, !1)), (l = new Xt("Assertion", 4, !1)), (v = new Xt("Transient", 5, !0)), (q = new Xt("RateLimitExceeded", 6, !0));
                }
                function Xt(t, i, s) {
                    z.call(this, t, i), (this.retryable = s);
                }
                function It() {
                    (g = this), Lt.call(this);
                }
                function Tt() {
                    return null == g && new It(), g;
                }
                function Wt(t) {
                    Lt.call(this), (this.reason = t);
                }
                function Lt() {}
                function Mt() {
                    return [Zt(), ti(), ii(), si(), hi(), ni()];
                }
                function Nt(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return Zt();
                        case "UpgradeRequired":
                            return ti();
                        case "Assertion":
                            return ii();
                        case "Transient":
                            return si();
                        case "RateLimitExceeded":
                            return hi();
                        case "StorageFailed":
                            return ni();
                        default:
                            Ut(), K("No enum constant value.");
                    }
                }
                function Ut() {
                    if (b) return A;
                    (b = !0), (d = new Gt("InvalidAuth", 0, !0)), ($ = new Gt("UpgradeRequired", 1, !1)), (y = new Gt("Assertion", 2, !1)), (R = new Gt("Transient", 3, !0)), (m = new Gt("RateLimitExceeded", 4, !0)), (p = new Gt("StorageFailed", 5, !0));
                }
                function Gt(t, i, s) {
                    z.call(this, t, i), (this.retryable = s);
                }
                function Ht() {
                    return Pt(), c;
                }
                function Bt() {
                    return Pt(), a;
                }
                function Dt() {
                    return Pt(), o;
                }
                function Ot() {
                    return Pt(), f;
                }
                function Qt() {
                    return Pt(), l;
                }
                function Vt() {
                    return Pt(), v;
                }
                function Yt() {
                    return Pt(), q;
                }
                function Zt() {
                    return Ut(), d;
                }
                function ti() {
                    return Ut(), $;
                }
                function ii() {
                    return Ut(), y;
                }
                function si() {
                    return Ut(), R;
                }
                function hi() {
                    return Ut(), m;
                }
                function ni() {
                    return Ut(), p;
                }
                function ri(t, i) {
                    (this.y9f_1 = t), (this.z9f_1 = i);
                }
                function ei(t, i) {
                    (this.a9g_1 = t), (this.b9g_1 = i);
                }
                function _i(t, i, s, h, n) {
                    L.call(this, n), (this.k9g_1 = t), (this.l9g_1 = i), (this.m9g_1 = s), (this.n9g_1 = h);
                }
                function ui(t, i, s, h, n, r, e) {
                    L.call(this, e), (this.u9h_1 = t), (this.v9h_1 = i), (this.w9h_1 = s), (this.x9h_1 = h), (this.y9h_1 = n), (this.z9h_1 = r);
                }
                function ci(t, i, s, h) {
                    L.call(this, h), (this.e9j_1 = t), (this.f9j_1 = i), (this.g9j_1 = s);
                }
                function ai(t, i, s, h, n) {
                    L.call(this, n), (this.s9j_1 = t), (this.t9j_1 = i), (this.u9j_1 = s), (this.v9j_1 = h);
                }
                function oi() {
                    (x = this), (this.u9i_1 = 1024), (this.v9i_1 = (1024 + ut()) | 0);
                }
                function fi(t, i) {
                    var s = new li(t, i);
                    return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                }
                function li(t, i) {
                    L.call(this, i), (this.l9k_1 = t);
                }
                function vi(t) {
                    return t.crypto;
                }
                function qi(t, i) {
                    return Ei(t.g9h_1, "raw", i);
                }
                function wi(t, i) {
                    return Ei(t.m9k_1, "spki", i);
                }
                function gi(t, i) {
                    var s = new Si(t, i);
                    return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                }
                function di(t) {
                    var i = vi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ct(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function $i(t) {
                    var i = vi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ct(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function yi(t, i, s) {
                    var h = new Ci(t, i, s);
                    return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                }
                function Ri(t, i, s) {
                    var h = new Fi(t, i, s);
                    return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                }
                function mi(t, i, s) {
                    var h = new Ki(t, i, s);
                    return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                }
                function pi(t, i, s, h) {
                    var n = new Ai(t, i, s, h);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function bi(t, i, s, h) {
                    var n = new zi(t, i, (s = s === S ? null : s), h);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function xi(t, i, s, h) {
                    var n = new Pi(t, i, s, h);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function ji(t, i, s, h) {
                    var n = new Xi(t, i, (s = s === S ? null : s), h);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function ki(t, i) {
                    var s = new Ii(t, i);
                    return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                }
                function Ei(t, i, s) {
                    return ct(vi(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i, s) {
                    return ct(vi(window).subtle.exportKey(i, t), s);
                }
                function Si(t, i) {
                    L.call(this, i), (this.v9k_1 = t);
                }
                function Ci(t, i, s) {
                    L.call(this, s), (this.e9l_1 = t), (this.f9l_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.p9l_1 = t), (this.q9l_1 = i);
                }
                function Ki(t, i, s) {
                    L.call(this, s), (this.a9m_1 = t), (this.b9m_1 = i);
                }
                function Ai(t, i, s, h) {
                    L.call(this, h), (this.l9m_1 = t), (this.m9m_1 = i), (this.n9m_1 = s);
                }
                function zi(t, i, s, h) {
                    L.call(this, h), (this.x9m_1 = t), (this.y9m_1 = i), (this.z9m_1 = s);
                }
                function Pi(t, i, s, h) {
                    L.call(this, h), (this.j9n_1 = t), (this.k9n_1 = i), (this.l9n_1 = s);
                }
                function Xi(t, i, s, h) {
                    L.call(this, h), (this.v9n_1 = t), (this.w9n_1 = i), (this.x9n_1 = s);
                }
                function Ii(t, i) {
                    L.call(this, i), (this.h9o_1 = t);
                }
                function Ti(t) {
                    var i = t.k9o_1;
                    return (
                        Rt(
                            "juiceboxModule",
                            1,
                            yt,
                            function (t) {
                                return Ti(t);
                            },
                            null,
                        ),
                        i.m2()
                    );
                }
                function Wi(t, i, s) {
                    var h = new Ui(t, i, s);
                    return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                }
                function Li(t, i) {
                    (this.d9p_1 = t), L.call(this, i);
                }
                function Mi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Li(t, i),
                                h = function (t) {
                                    return s.e9p(t);
                                };
                            return (h.$arity = 0), h;
                        })(t, null);
                    };
                }
                function Ni(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, h) {
                                    try {
                                        var n = qt(t),
                                            r = wt().zm_1,
                                            e = gt(H(n), r),
                                            _ = i.v91_1.p2(e);
                                        s(null == _ ? null : _.c92_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        h(t);
                                    }
                                    return A;
                                };
                            })(i, t),
                        );
                    };
                }
                function Ui(t, i, s) {
                    L.call(this, s), (this.t9o_1 = t), (this.u9o_1 = i);
                }
                function Gi(t, i, s, h, n) {
                    L.call(this, n), (this.n9p_1 = t), (this.o9p_1 = i), (this.p9p_1 = s), (this.q9p_1 = h);
                }
                function Hi(t, i, s, h) {
                    L.call(this, h), (this.c9q_1 = t), (this.d9q_1 = i), (this.e9q_1 = s);
                }
                function Bi() {
                    this.k9o_1 = $t(Mi(this));
                }
                function Di(t, i, s) {
                    var h = new is(t, i, s);
                    return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                }
                function Oi(t, i) {
                    L.call(this, i), (this.c9r_1 = t);
                }
                function Qi(t, i) {
                    L.call(this, i), (this.l9r_1 = t);
                }
                function Vi(t, i, s, h) {
                    L.call(this, h), (this.u9r_1 = t), (this.v9r_1 = i), (this.w9r_1 = s);
                }
                function Yi(t, i, s, h) {
                    L.call(this, h), (this.t9s_1 = t), (this.u9s_1 = i), (this.v9s_1 = s);
                }
                function Zi(t, i, s) {
                    L.call(this, s), (this.t9t_1 = t), (this.u9t_1 = i);
                }
                function ts(t, i, s, h) {
                    L.call(this, h), (this.d9u_1 = t), (this.e9u_1 = i), (this.f9u_1 = s);
                }
                function is(t, i, s) {
                    L.call(this, s), (this.s9q_1 = t), (this.t9q_1 = i);
                }
                function ss() {
                    this.j9s_1 = 65;
                }
                function hs(t, i) {
                    L.call(this, i), (this.b9v_1 = t);
                }
                function ns(t) {
                    this.g9h_1 = t;
                }
                function rs(t, i) {
                    L.call(this, i), (this.k9v_1 = t);
                }
                function es(t) {
                    this.m9k_1 = t;
                }
                function _s(t, i) {
                    L.call(this, i), (this.t9v_1 = t);
                }
                function us(t) {
                    this.j9o_1 = t;
                }
                function cs(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = Kt), (h.JuiceboxRecoverPrivateKeyResult.Success = kt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = Et), P(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", St), P(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ft), (h.JuiceboxRecoverFailureReason = Xt), (h.JuiceboxRecoverFailureReason.values = At), (h.JuiceboxRecoverFailureReason.valueOf = zt), P(h.JuiceboxRecoverFailureReason, "InvalidPin", Ht), P(h.JuiceboxRecoverFailureReason, "NotRegistered", Bt), P(h.JuiceboxRecoverFailureReason, "InvalidAuth", Dt), P(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), P(h.JuiceboxRecoverFailureReason, "Assertion", Qt), P(h.JuiceboxRecoverFailureReason, "Transient", Vt), P(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (h.JuiceboxRegisterPrivateKeyResult = Lt), P(h.JuiceboxRegisterPrivateKeyResult, "Success", Tt), (h.JuiceboxRegisterPrivateKeyResult.Failure = Wt), (h.JuiceboxRegisterFailureReason = Gt), (h.JuiceboxRegisterFailureReason.values = Mt), (h.JuiceboxRegisterFailureReason.valueOf = Nt), P(h.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), P(h.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), P(h.JuiceboxRegisterFailureReason, "Assertion", ii), P(h.JuiceboxRegisterFailureReason, "Transient", si), P(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", hi), P(h.JuiceboxRegisterFailureReason, "StorageFailed", ni);
                }
                J(Kt, "JuiceboxRecoverPrivateKeyResult"),
                    J(kt, "Success", S, Kt),
                    J(Et, "JuiceboxFailure", S, Kt),
                    F(Jt, "KeyReconstructionFailure", S, Kt),
                    F(Ct, "NoJuiceboxTokens", S, Kt),
                    J(Xt, "JuiceboxRecoverFailureReason", S, z),
                    J(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    F(It, "Success", S, Lt),
                    J(Wt, "Failure", S, Lt),
                    J(Gt, "JuiceboxRegisterFailureReason", S, z),
                    J(ri, "XChatKeyPair"),
                    J(ei, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ui, L),
                    tt(ci, L),
                    tt(ai, L),
                    F(oi, "LibsodiumEncryption", S, S, S, [3, 5, 2]),
                    tt(li, L),
                    tt(Si, L),
                    tt(Ci, L),
                    tt(Fi, L),
                    tt(Ki, L),
                    tt(Ai, L),
                    tt(zi, L),
                    tt(Pi, L),
                    tt(Xi, L),
                    tt(Ii, L),
                    vt(Li, L, S, [0]),
                    tt(Ui, L),
                    tt(Gi, L),
                    tt(Hi, L),
                    J(Bi, "WebJuiceboxApi", Bi, S, S, [1, 3, 2]),
                    tt(Oi, L),
                    tt(Qi, L),
                    tt(Vi, L),
                    tt(Yi, L),
                    tt(Zi, L),
                    tt(ts, L),
                    tt(is, L),
                    F(ss, "WebKeyFactory", S, S, S, [0, 2, 1, 3]),
                    tt(hs, L),
                    J(ns, "XChatConversationKey", S, S, S, [0]),
                    tt(rs, L),
                    J(es, "XChatPublicKey", S, S, S, [0]),
                    tt(_s, L),
                    J(us, "XChatPrivateKey", S, S, S, [0]),
                    (E(kt).z93 = function () {
                        return this.bytes;
                    }),
                    (E(Et).p9f = function () {
                        return this.reason;
                    }),
                    (E(Et).q9f = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).zg = function () {
                        return this.reason;
                    }),
                    (E(Et).ah = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).r9f = function (t, i) {
                        return new Et(t, i);
                    }),
                    (E(Et).copy = function (t, i, s) {
                        return (t = t === S ? this.reason : t), (i = i === S ? this.guessesRemaining : i), this.r9f(t, i);
                    }),
                    (E(Et).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (E(Et).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (k(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (E(Et).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Et)) return !1;
                        var i = t instanceof Et ? t : C();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (E(Jt).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (E(Jt).hashCode = function () {
                        return 188209770;
                    }),
                    (E(Jt).equals = function (t) {
                        return this === t || (t instanceof Jt && (t instanceof Jt || C(), !0));
                    }),
                    (E(Ct).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (E(Ct).hashCode = function () {
                        return 1362829865;
                    }),
                    (E(Ct).equals = function (t) {
                        return this === t || (t instanceof Ct && (t instanceof Ct || C(), !0));
                    }),
                    (E(Xt).u9f = function () {
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
                    (E(Wt).p9f = function () {
                        return this.reason;
                    }),
                    (E(Wt).zg = function () {
                        return this.reason;
                    }),
                    (E(Wt).v9f = function (t) {
                        return new Wt(t);
                    }),
                    (E(Wt).copy = function (t, i) {
                        return (t = t === S ? this.reason : t), this.v9f(t);
                    }),
                    (E(Wt).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (E(Wt).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (E(Wt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Wt)) return !1;
                        var i = t instanceof Wt ? t : C();
                        return !!this.reason.equals(i.reason);
                    }),
                    (E(Gt).u9f = function () {
                        return this.retryable;
                    }),
                    (E(ri).toString = function () {
                        return "XChatKeyPair(public=" + X(this.y9f_1) + ", private=" + X(this.z9f_1) + ")";
                    }),
                    (E(ri).hashCode = function () {
                        var t = I(this.y9f_1);
                        return (t = (k(t, 31) + I(this.z9f_1)) | 0);
                    }),
                    (E(ri).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ri)) return !1;
                        var i = t instanceof ri ? t : C();
                        return !!T(this.y9f_1, i.y9f_1) && !!T(this.z9f_1, i.z9f_1);
                    }),
                    (E(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + X(this.a9g_1) + ", signing=" + W(this.b9g_1) + ")";
                    }),
                    (E(ei).hashCode = function () {
                        var t = I(this.a9g_1);
                        return (t = (k(t, 31) + (null == this.b9g_1 ? 0 : I(this.b9g_1))) | 0);
                    }),
                    (E(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : C();
                        return !!T(this.a9g_1, i.a9g_1) && !!T(this.b9g_1, i.b9g_1);
                    }),
                    (E(_i).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 20), (this.q9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.q9g_1 = U), (this.q9_1 = 4), (t = this.l9g_1.h9h(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.r9g_1 = t), (this.s9g_1 = G(this.r9g_1)), (this.t9g_1 = this.q9g_1.i9f(this.s9g_1)), (this.u9g_1 = this.t9g_1.zg()), (this.v9g_1 = this.t9g_1.h9e()), (this.q9_1 = 5);
                                        var i = this.v9g_1;
                                        if ((t = this.n9g_1.i9h(H(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.w9g_1 = B(this.v9g_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.m9g_1.j9h(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.x9g_1 = t), null == this.x9g_1)) {
                                            (this.p9g_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.y9g_1 = this.x9g_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.z9g_1 = this.y9g_1), (this.q9_1 = 9), (t = this.m9g_1.k9h(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.a9h_1 = O()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.a9h_1 = D()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.b9h_1 = this.a9h_1;
                                        var s = U,
                                            h = this.z9g_1,
                                            n = G(h),
                                            r = this.b9h_1;
                                        (this.c9h_1 = s.k9f(this.u9g_1, n, S, V(Q(r)))), (this.w9g_1 = (this.w9g_1 + B(this.c9h_1)) | 0), (this.q9_1 = 11);
                                        var e = this.c9h_1;
                                        if ((t = this.n9g_1.i9h(H(e), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.o9g_1 = A), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Z)) {
                                            this.d9h_1 = this.t9_1;
                                            var _ = Y(),
                                                u = this.d9h_1;
                                            if (!_.g5s_1.h())
                                                for (var c = _.g5s_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e("XWS", u, "encryptStream failed");
                                                }
                                            (this.p9g_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.e9h_1 = this.t9_1), this.m9g_1.x4(), (this.q9_1 = 15), (t = this.n9g_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.n9g_1.x4(), this.e9h_1);
                                    case 16:
                                        if (((this.f9h_1 = this.p9g_1), (this.r9_1 = 20), this.m9g_1.x4(), (this.q9_1 = 17), (t = this.n9g_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.n9g_1.x4(), this.f9h_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.m9g_1.x4(), (this.q9_1 = 19), (t = this.n9g_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.n9g_1.x4(), A;
                                    case 20:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (20 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 19), (this.q9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.w9h_1.j9h(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.c9i_1 = t), null == this.c9i_1)) {
                                            (this.b9i_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.d9i_1 = this.c9i_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.e9i_1 = this.d9i_1), (this.f9i_1 = this.e9i_1.length), (this.g9i_1 = U), (this.q9_1 = 6), (t = this.v9h_1.h9h(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.h9i_1 = t), (this.i9i_1 = G(this.h9i_1));
                                        var i = this.e9i_1;
                                        (this.j9i_1 = this.g9i_1.l9f(this.i9i_1, G(i))), (this.k9i_1 = this.j9i_1.zg()), (this.l9i_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.w9h_1.j9h(this.u9h_1.v9i_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.m9i_1 = t), null == this.m9i_1)) {
                                            (this.b9i_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.n9i_1 = this.m9i_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.o9i_1 = this.n9i_1), (this.f9i_1 = (this.f9i_1 + this.o9i_1.length) | 0);
                                        var s = U,
                                            h = this.o9i_1;
                                        (this.p9i_1 = s.n9f(this.k9i_1, G(h))), (this.q9i_1 = this.p9i_1.k9e()), (this.q9_1 = 10);
                                        var n = this.q9i_1;
                                        if ((t = this.x9h_1.i9h(H(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.z9h_1 && null != this.y9h_1) {
                                            var r = this.f9i_1 / this.y9h_1.bytes.x3();
                                            r > this.l9i_1 + 0.1 && (this.z9h_1(r), (this.l9i_1 = r));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.a9i_1 = A), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Z)) {
                                            this.r9i_1 = this.t9_1;
                                            var e = Y(),
                                                _ = this.r9i_1;
                                            if (!e.g5s_1.h())
                                                for (var u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e("XWS", _, "XWS decryptStream failed");
                                                }
                                            (this.b9i_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.s9i_1 = this.t9_1), this.w9h_1.x4(), (this.q9_1 = 14), (t = this.x9h_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.x9h_1.x4(), this.s9i_1);
                                    case 15:
                                        if (((this.t9i_1 = this.b9i_1), (this.r9_1 = 19), this.w9h_1.x4(), (this.q9_1 = 16), (t = this.x9h_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.x9h_1.x4(), this.t9i_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.w9h_1.x4(), (this.q9_1 = 18), (t = this.x9h_1.l9h(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.x9h_1.x4(), A;
                                    case 19:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (19 === this.r9_1) throw c;
                                (this.q9_1 = this.r9_1), (this.t9_1 = c);
                            }
                    }),
                    (E(ci).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9_1 = 3), (this.h9j_1 = st.o9f(ht())), (this.i9j_1 = nt);
                                        var i = this.g9j_1;
                                        if (((this.j9j_1 = G(i)), (this.q9_1 = 2), (t = this.f9j_1.h9h(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = G(t),
                                            h = this.i9j_1.g9f(this.j9j_1, this.h9j_1, s),
                                            n = this.h9j_1,
                                            r = H(n),
                                            e = H(h),
                                            _ = G(rt([r, e]));
                                        return H(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var u = this.t9_1,
                                                c = Y();
                                            if (!c.g5s_1.h())
                                                for (var a = c.g5s_1.s2().p(); a.q(); ) {
                                                    a.r().m2().e("XWS", u, "XWS encryptMessage failed");
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
                    (E(ai).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.r9_1 = 3;
                                        var i = _t(this.u9j_1, et(0, ht()));
                                        this.w9j_1 = G(i.slice());
                                        var s = _t(this.u9j_1, et(ht(), this.u9j_1.length));
                                        if (((this.x9j_1 = G(s.slice())), (this.y9j_1 = nt), (this.q9_1 = 2), (t = this.t9j_1.h9h(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var h = G(t),
                                            n = this.y9j_1.h9f(this.x9j_1, this.w9j_1, h);
                                        return H(n).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var r = this.t9_1,
                                                e = Y();
                                            if (!e.g5s_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.v9j_1, u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e("XWS", r, _);
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
                    (E(oi).z9j = function (t, i, s, h) {
                        var n = new _i(this, t, i, s, h);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(oi).a9k = function (t, i, s, h, n, r) {
                        var e = new ui(this, t, i, s, h, n, r);
                        return (e.s9_1 = A), (e.t9_1 = null), e.ia();
                    }),
                    (E(oi).b9k = function (t, i, s) {
                        var h = new ci(this, t, i, s);
                        return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                    }),
                    (E(oi).c9k = function (t, i, s, h) {
                        var n = new ai(this, t, i, s, h);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.l9k_1.xo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.l9k_1.f9f(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        return A;
                                    case 3:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Si).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ji(this.v9k_1.j9o_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = at(i);
                                        return ot(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.r9_1) throw h;
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
                                        var i = vi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.e9l_1), (t = ct(i.deriveBits(s, this.f9l_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.g9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var r = n.g5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(null, h, null);
                                                }
                                            (this.g9l_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.g9l_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ct(vi(window).subtle.digest("SHA-256", lt([this.p9l_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.q9l_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9l_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = Y();
                                            if (!s.g5s_1.h())
                                                for (var h = s.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(null, i, null);
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
                                var n = t;
                                if (3 === this.r9_1) throw n;
                                (this.q9_1 = this.r9_1), (this.t9_1 = n);
                            }
                    }),
                    (E(Ki).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.b9m_1];
                                        if ((t = ct(i.importKey("raw", this.a9m_1, s, !1, h), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.c9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var e = r.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
                                                }
                                            (this.c9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.c9m_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Ai).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.n9m_1), (t = ct(i.encrypt(s, this.l9m_1, this.m9m_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.o9m_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var r = n.g5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(null, h, null);
                                                }
                                            (this.o9m_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.o9m_1;
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
                                            s = vi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.z9m_1 ? [] : [this.z9m_1]), (t = ct(s.importKey(this.x9m_1, this.y9m_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.a9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var e = r.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
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
                    (E(Pi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.j9n_1), (t = ct(i.decrypt(s, this.k9n_1, this.l9n_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.m9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var r = n.g5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(null, h, null);
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
                    (E(Xi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i,
                                            s = vi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.x9n_1 ? [] : [this.x9n_1]), (t = ct(s.importKey(this.v9n_1, this.w9n_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.y9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var e = r.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
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
                    (E(Ii).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ct(i.importKey("raw", this.h9o_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.i9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var h = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var r = n.g5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(null, h, null);
                                                }
                                            (this.i9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.i9o_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Li).e9p = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(Li).w2g = function (t) {
                        return this.e9p(t);
                    }),
                    (E(Li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ct((this.d9p_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                    (E(Li).ma = function (t) {
                        return new Li(this.d9p_1, t);
                    }),
                    (E(Ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ti(this.t9o_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Ni(this.u9o_1)), new h(new s(this.u9o_1.a92_1), []);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.r9_1) throw n;
                                (this.q9_1 = this.r9_1), (this.t9_1 = n);
                            }
                    }),
                    (E(Gi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ti(this.n9p_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9p_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.g5s_1.h())
                                            for (var n = X(this.p9p_1.v91_1), r = h.g5s_1.s2().p(); r.q(); ) {
                                                r.r().m2().d("XWS", n, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.n9p_1, this.p9p_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.t9p_1 = t), (this.q9_1 = 3), (t = ct(this.t9p_1.register(dt(this.o9p_1), this.q9p_1, new Int8Array(0), this.p9p_1.w91_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.s9p_1 = Tt()), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var e = this.t9_1,
                                            _ = e == this.r9p_1.RegisterError.InvalidAuth ? Zt() : e == this.r9p_1.RegisterError.UpgradeRequired ? ti() : e == this.r9p_1.RegisterError.Assertion ? ii() : e == this.r9p_1.RegisterError.Transient ? si() : e == this.r9p_1.RegisterError.RateLimitExceeded ? hi() : si();
                                        (this.s9p_1 = new Wt(_)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.s9p_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.r9_1) throw u;
                                (this.q9_1 = this.r9_1), (this.t9_1 = u);
                            }
                    }),
                    (E(Hi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ti(this.c9q_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.f9q_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.g5s_1.h())
                                            for (var n = X(this.e9q_1.v91_1), r = h.g5s_1.s2().p(); r.q(); ) {
                                                r.r().m2().d("XWS", n, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.c9q_1, this.e9q_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.h9q_1 = t), (this.q9_1 = 3), (t = ct(this.h9q_1.recover(dt(this.d9q_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.g9q_1 = new kt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.f9q_1.RecoverErrorReason.InvalidPin ? Ht() : u == this.f9q_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.f9q_1.RecoverErrorReason.InvalidAuth ? Dt() : u == this.f9q_1.RecoverErrorReason.UpgradeRequired ? Ot() : u == this.f9q_1.RecoverErrorReason.Assertion ? Qt() : u == this.f9q_1.RecoverErrorReason.Transient ? Vt() : u == this.f9q_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.g9q_1 = new Et(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.g9q_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Bi).i9q = function (t, i, s, h) {
                        var n = new Gi(this, t, i, s, h);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(Bi).j9q = function (t, i, s) {
                        var h = new Hi(this, t, i, s);
                        return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                    }),
                    (E(Oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = di(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ri(new es(i.publicKey), new us(i.privateKey));
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.r9_1) throw s;
                                (this.q9_1 = this.r9_1), (this.t9_1 = s);
                            }
                    }),
                    (E(Qi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = $i(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new ns(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(Vi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.u9r_1.k9s(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.x9r_1 = t), (this.q9_1 = 2), (t = yi(this.v9r_1.m9k_1, this.x9r_1.z9f_1.j9o_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.y9r_1 = t;
                                        var i;
                                        if (null == this.y9r_1) return null;
                                        if (((i = this.y9r_1), (this.z9r_1 = i), (this.q9_1 = 3), (t = wi(this.x9r_1.y9f_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.a9s_1 = t), (this.b9s_1 = mt(this.a9s_1, 65)), (this.q9_1 = 4), (t = Ri(this.z9r_1, this.b9s_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.c9s_1 = t;
                                        var s;
                                        if (null == this.c9s_1) return null;
                                        if (((s = this.c9s_1), (this.d9s_1 = s), (this.e9s_1 = this.d9s_1.slice(0, 16)), (this.f9s_1 = this.d9s_1.slice(16, 32)), (this.q9_1 = 5), (t = mi(this.e9s_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.g9s_1 = t;
                                        var h;
                                        if (null == this.g9s_1) return null;
                                        if (((h = this.g9s_1), (this.h9s_1 = h), (this.q9_1 = 6), (t = qi(this.w9r_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.i9s_1 = t), (this.q9_1 = 7), (t = pi(this.h9s_1, this.i9s_1, this.f9s_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var n = t;
                                        return pt(lt([this.b9s_1, n]));
                                    case 8:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (8 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (E(Yi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.w9s_1 = ot(this.v9s_1)), (this.x9s_1 = this.w9s_1.slice(0, 65)), (this.y9s_1 = this.w9s_1.slice(65)), (this.q9_1 = 1), (t = bi("raw", this.x9s_1, S, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.z9s_1 = t;
                                        var i;
                                        if (null == this.z9s_1) return null;
                                        if (((i = this.z9s_1), (this.a9t_1 = i), (this.q9_1 = 2), (t = yi(this.a9t_1, this.u9s_1.j9o_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.b9t_1 = t;
                                        var s;
                                        if (null == this.b9t_1) return null;
                                        if (((s = this.b9t_1), (this.c9t_1 = s), (this.q9_1 = 3), (t = Ri(this.c9t_1, this.x9s_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.d9t_1 = t;
                                        var h;
                                        if (null == this.d9t_1) return null;
                                        if (((h = this.d9t_1), (this.e9t_1 = h), (this.f9t_1 = this.e9t_1.slice(0, 16)), (this.g9t_1 = this.e9t_1.slice(16, 32)), (this.q9_1 = 4), (t = mi(this.f9t_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.h9t_1 = t;
                                        var n;
                                        if (null == this.h9t_1) return null;
                                        if (((n = this.h9t_1), (this.i9t_1 = n), (this.q9_1 = 5), (t = xi(this.g9t_1, this.i9t_1, this.y9s_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.j9t_1 = t;
                                        var r;
                                        if (null == this.j9t_1) return null;
                                        if (((r = this.j9t_1), (this.k9t_1 = r), (this.q9_1 = 6), (t = Di(this.t9s_1, this.k9t_1, this)) === N())) return t;
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
                    (E(Zi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = bi("spki", bt(this.u9t_1), S, this)) === N())) return t;
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
                    (E(ts).ia = function () {
                        var t,
                            i,
                            s = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = bi("spki", bt(this.f9u_1), S, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.g9u_1 = s;
                                        var h;
                                        if (null == this.g9u_1) h = null;
                                        else h = new es(this.g9u_1);
                                        this.h9u_1 = h;
                                        var n;
                                        if (null == this.h9u_1) return null;
                                        if (((n = this.h9u_1), (this.i9u_1 = n), (this.q9_1 = 2), (t = this.i9u_1), (i = this), (s = Ji(t.m9k_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.j9u_1 = s;
                                        var r = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((r.d = xt(this.e9u_1, !0)), (r.x = this.j9u_1.x), (r.y = this.j9u_1.y), (this.k9u_1 = r), (this.q9_1 = 3), (s = ji("jwk", this.k9u_1, "deriveBits", this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new us(s);
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (4 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(is).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.t9q_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ns(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(ss).k9s = function (t) {
                        var i = new Oi(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).l9u = function (t) {
                        var i = new Qi(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).m9u = function (t, i, s) {
                        var h = new Vi(this, t, i, s);
                        return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                    }),
                    (E(ss).n9u = function (t, i, s) {
                        var h = new Yi(this, t, i, s);
                        return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                    }),
                    (E(ss).o9u = function (t, i) {
                        var s = new Zi(this, t, i);
                        return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                    }),
                    (E(ss).p9u = function (t, i, s) {
                        var h = new ts(this, t, i, s);
                        return (h.s9_1 = A), (h.t9_1 = null), h.ia();
                    }),
                    (E(ss).q9u = function (t, i) {
                        return Di(this, bt(t), i);
                    }),
                    (E(ss).r9u = function (t, i, s) {
                        return null;
                    }),
                    (E(ss).s9u = function (t, i, s, h) {
                        return !1;
                    }),
                    (E(hs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.b9v_1, this)) === N())) return t;
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
                    (E(ns).h9h = function (t) {
                        var i = new hs(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(rs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this.k9v_1, this)) === N())) return t;
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
                    (E(es).h9h = function (t) {
                        var i = new rs(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(_s).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi(this.t9v_1, this)) === N())) return t;
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
                    (E(us).h9h = function (t) {
                        var i = new _s(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    P(E(Xt), "name", E(Xt).y2),
                    P(E(Xt), "ordinal", E(Xt).z2),
                    P(E(Gt), "name", E(Gt).y2),
                    P(E(Gt), "ordinal", E(Gt).z2),
                    (j = new ss()),
                    cs(t),
                    (t.$jsExportAll$ = cs),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Et),
                    (t.$_$.b = kt),
                    (t.$_$.c = Wt),
                    (t.$_$.d = It),
                    (t.$_$.e = Bi),
                    (t.$_$.f = ri),
                    (t.$_$.g = ei),
                    (t.$_$.h = ni),
                    (t.$_$.i = St),
                    (t.$_$.j = Ft),
                    (t.$_$.k = Tt),
                    (t.$_$.l = function () {
                        return null == x && new oi(), x;
                    }),
                    (t.$_$.m = j);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.df5dad4a.js.map
