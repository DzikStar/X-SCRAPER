(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, n, r, h, e) {
                "use strict";
                var _,
                    u,
                    c,
                    a,
                    o,
                    f,
                    l,
                    v,
                    w,
                    q,
                    m,
                    y,
                    d,
                    $,
                    x,
                    R,
                    p,
                    g,
                    b,
                    z,
                    k = Math.imul,
                    E = i.$_$.oe,
                    J = i.$_$.ld,
                    j = i.$_$.g,
                    C = i.$_$.fj,
                    F = i.$_$.rd,
                    S = i.$_$.gj,
                    K = i.$_$.n6,
                    A = i.$_$.si,
                    P = i.$_$.ad,
                    I = i.$_$.se,
                    T = i.$_$.kd,
                    X = i.$_$.cd,
                    W = i.$_$.rk,
                    L = i.$_$.lc,
                    M = n.$_$.j,
                    N = i.$_$.wb,
                    U = n.$_$.h,
                    G = i.$_$.e4,
                    H = i.$_$.k4,
                    B = i.$_$.j4,
                    D = n.$_$.e,
                    O = n.$_$.d,
                    Q = i.$_$.pe,
                    V = i.$_$.a4,
                    Y = r.$_$.d,
                    Z = i.$_$.ui,
                    tt = i.$_$.nd,
                    it = n.$_$.c,
                    st = n.$_$.i,
                    nt = n.$_$.a,
                    rt = n.$_$.g,
                    ht = i.$_$.f,
                    et = i.$_$.jf,
                    _t = i.$_$.ya,
                    ut = n.$_$.b,
                    ct = h.$_$.k,
                    at = e.$_$.h,
                    ot = e.$_$.b,
                    ft = e.$_$.u,
                    lt = e.$_$.g,
                    vt = i.$_$.qd,
                    wt = n.$_$.f,
                    qt = i.$_$.c6,
                    mt = i.$_$.oh,
                    yt = i.$_$.yf,
                    dt = i.$_$.fk,
                    $t = i.$_$.of,
                    xt = i.$_$.id,
                    Rt = e.$_$.s,
                    pt = e.$_$.d,
                    gt = e.$_$.f,
                    bt = e.$_$.j,
                    zt = e.$_$.c;
                function kt(t) {
                    St.call(this), (this.bytes = t);
                }
                function Et(t, i) {
                    St.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Jt() {
                    (_ = this), St.call(this);
                }
                function jt() {
                    return null == _ && new Jt(), _;
                }
                function Ct() {
                    (u = this), St.call(this);
                }
                function Ft() {
                    return null == u && new Ct(), u;
                }
                function St() {}
                function Kt() {
                    return [Ht(), Bt(), Dt(), Ot(), Qt(), Vt(), Yt()];
                }
                function At(t) {
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
                            Pt(), S("No enum constant value.");
                    }
                }
                function Pt() {
                    if (q) return K;
                    (q = !0), (c = new It("InvalidPin", 0, !0)), (a = new It("NotRegistered", 1, !0)), (o = new It("InvalidAuth", 2, !0)), (f = new It("UpgradeRequired", 3, !1)), (l = new It("Assertion", 4, !1)), (v = new It("Transient", 5, !0)), (w = new It("RateLimitExceeded", 6, !0));
                }
                function It(t, i, s) {
                    A.call(this, t, i), (this.retryable = s);
                }
                function Tt() {
                    (m = this), Lt.call(this);
                }
                function Xt() {
                    return null == m && new Tt(), m;
                }
                function Wt(t) {
                    Lt.call(this), (this.reason = t);
                }
                function Lt() {}
                function Mt() {
                    return [Zt(), ti(), ii(), si(), ni(), ri()];
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
                            return ni();
                        case "StorageFailed":
                            return ri();
                        default:
                            Ut(), S("No enum constant value.");
                    }
                }
                function Ut() {
                    if (g) return K;
                    (g = !0), (y = new Gt("InvalidAuth", 0, !0)), (d = new Gt("UpgradeRequired", 1, !1)), ($ = new Gt("Assertion", 2, !1)), (x = new Gt("Transient", 3, !0)), (R = new Gt("RateLimitExceeded", 4, !0)), (p = new Gt("StorageFailed", 5, !0));
                }
                function Gt(t, i, s) {
                    A.call(this, t, i), (this.retryable = s);
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
                    return Pt(), w;
                }
                function Zt() {
                    return Ut(), y;
                }
                function ti() {
                    return Ut(), d;
                }
                function ii() {
                    return Ut(), $;
                }
                function si() {
                    return Ut(), x;
                }
                function ni() {
                    return Ut(), R;
                }
                function ri() {
                    return Ut(), p;
                }
                function hi(t, i) {
                    (this.q9l_1 = t), (this.r9l_1 = i);
                }
                function ei(t, i) {
                    (this.s9l_1 = t), (this.t9l_1 = i);
                }
                function _i(t, i, s, n, r) {
                    L.call(this, r), (this.c9m_1 = t), (this.d9m_1 = i), (this.e9m_1 = s), (this.f9m_1 = n);
                }
                function ui(t, i, s, n, r, h, e) {
                    L.call(this, e), (this.m9n_1 = t), (this.n9n_1 = i), (this.o9n_1 = s), (this.p9n_1 = n), (this.q9n_1 = r), (this.r9n_1 = h);
                }
                function ci(t, i, s, n) {
                    L.call(this, n), (this.w9o_1 = t), (this.x9o_1 = i), (this.y9o_1 = s);
                }
                function ai(t, i, s, n, r) {
                    L.call(this, r), (this.k9p_1 = t), (this.l9p_1 = i), (this.m9p_1 = s), (this.n9p_1 = n);
                }
                function oi() {
                    (b = this), (this.m9o_1 = 1024), (this.n9o_1 = (1024 + ut()) | 0);
                }
                function fi(t, i) {
                    var s = new li(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function li(t, i) {
                    L.call(this, i), (this.d9q_1 = t);
                }
                function vi(t) {
                    return t.crypto;
                }
                function wi(t, i) {
                    return Ei(t.y9m_1, "raw", i);
                }
                function qi(t, i) {
                    return Ei(t.e9q_1, "spki", i);
                }
                function mi(t, i) {
                    var s = new ji(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function yi(t) {
                    var i = vi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        n = s;
                    return ct(i.generateKey(n, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = vi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        n = s;
                    return ct(i.generateKey(n, !0, ["encrypt", "decrypt"]), t);
                }
                function $i(t, i, s) {
                    var n = new Ci(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function xi(t, i, s) {
                    var n = new Fi(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function Ri(t, i, s) {
                    var n = new Si(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function pi(t, i, s, n) {
                    var r = new Ki(t, i, s, n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function gi(t, i, s, n) {
                    var r = new Ai(t, i, (s = s === j ? null : s), n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function bi(t, i, s, n) {
                    var r = new Pi(t, i, s, n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function zi(t, i, s, n) {
                    var r = new Ii(t, i, (s = s === j ? null : s), n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function ki(t, i) {
                    var s = new Ti(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function Ei(t, i, s) {
                    return ct(vi(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i, s) {
                    return ct(vi(window).subtle.exportKey(i, t), s);
                }
                function ji(t, i) {
                    L.call(this, i), (this.n9q_1 = t);
                }
                function Ci(t, i, s) {
                    L.call(this, s), (this.w9q_1 = t), (this.x9q_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.h9r_1 = t), (this.i9r_1 = i);
                }
                function Si(t, i, s) {
                    L.call(this, s), (this.s9r_1 = t), (this.t9r_1 = i);
                }
                function Ki(t, i, s, n) {
                    L.call(this, n), (this.d9s_1 = t), (this.e9s_1 = i), (this.f9s_1 = s);
                }
                function Ai(t, i, s, n) {
                    L.call(this, n), (this.p9s_1 = t), (this.q9s_1 = i), (this.r9s_1 = s);
                }
                function Pi(t, i, s, n) {
                    L.call(this, n), (this.b9t_1 = t), (this.c9t_1 = i), (this.d9t_1 = s);
                }
                function Ii(t, i, s, n) {
                    L.call(this, n), (this.n9t_1 = t), (this.o9t_1 = i), (this.p9t_1 = s);
                }
                function Ti(t, i) {
                    L.call(this, i), (this.z9t_1 = t);
                }
                function Xi(t) {
                    var i = t.c9u_1;
                    return (
                        xt(
                            "juiceboxModule",
                            1,
                            $t,
                            function (t) {
                                return Xi(t);
                            },
                            null,
                        ),
                        i.m2()
                    );
                }
                function Wi(t, i, s) {
                    var n = new Ui(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function Li(t, i) {
                    (this.v9u_1 = t), L.call(this, i);
                }
                function Mi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Li(t, i),
                                n = function (t) {
                                    return s.w9u(t);
                                };
                            return (n.$arity = 0), n;
                        })(t, null);
                    };
                }
                function Ni(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, n) {
                                    try {
                                        var r = wt(t),
                                            h = qt().zm_1,
                                            e = mt(H(r), h),
                                            _ = i.n97_1.p2(e);
                                        s(null == _ ? null : _.u97_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        n(t);
                                    }
                                    return K;
                                };
                            })(i, t),
                        );
                    };
                }
                function Ui(t, i, s) {
                    L.call(this, s), (this.l9u_1 = t), (this.m9u_1 = i);
                }
                function Gi(t, i, s, n, r) {
                    L.call(this, r), (this.f9v_1 = t), (this.g9v_1 = i), (this.h9v_1 = s), (this.i9v_1 = n);
                }
                function Hi(t, i, s, n) {
                    L.call(this, n), (this.u9v_1 = t), (this.v9v_1 = i), (this.w9v_1 = s);
                }
                function Bi() {
                    this.c9u_1 = dt(Mi(this));
                }
                function Di(t, i, s) {
                    var n = new is(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function Oi(t, i) {
                    L.call(this, i), (this.u9w_1 = t);
                }
                function Qi(t, i) {
                    L.call(this, i), (this.d9x_1 = t);
                }
                function Vi(t, i, s, n) {
                    L.call(this, n), (this.m9x_1 = t), (this.n9x_1 = i), (this.o9x_1 = s);
                }
                function Yi(t, i, s, n) {
                    L.call(this, n), (this.l9y_1 = t), (this.m9y_1 = i), (this.n9y_1 = s);
                }
                function Zi(t, i, s) {
                    L.call(this, s), (this.l9z_1 = t), (this.m9z_1 = i);
                }
                function ts(t, i, s, n) {
                    L.call(this, n), (this.v9z_1 = t), (this.w9z_1 = i), (this.x9z_1 = s);
                }
                function is(t, i, s) {
                    L.call(this, s), (this.k9w_1 = t), (this.l9w_1 = i);
                }
                function ss() {
                    this.b9y_1 = 65;
                }
                function ns(t, i) {
                    L.call(this, i), (this.ta0_1 = t);
                }
                function rs(t) {
                    this.y9m_1 = t;
                }
                function hs(t, i) {
                    L.call(this, i), (this.ca1_1 = t);
                }
                function es(t) {
                    this.e9q_1 = t;
                }
                function _s(t, i) {
                    L.call(this, i), (this.la1_1 = t);
                }
                function us(t) {
                    this.b9u_1 = t;
                }
                function cs(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        n = s.dms || (s.dms = {});
                    (n.JuiceboxRecoverPrivateKeyResult = St), (n.JuiceboxRecoverPrivateKeyResult.Success = kt), (n.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = Et), P(n.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", jt), P(n.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ft), (n.JuiceboxRecoverFailureReason = It), (n.JuiceboxRecoverFailureReason.values = Kt), (n.JuiceboxRecoverFailureReason.valueOf = At), P(n.JuiceboxRecoverFailureReason, "InvalidPin", Ht), P(n.JuiceboxRecoverFailureReason, "NotRegistered", Bt), P(n.JuiceboxRecoverFailureReason, "InvalidAuth", Dt), P(n.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), P(n.JuiceboxRecoverFailureReason, "Assertion", Qt), P(n.JuiceboxRecoverFailureReason, "Transient", Vt), P(n.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (n.JuiceboxRegisterPrivateKeyResult = Lt), P(n.JuiceboxRegisterPrivateKeyResult, "Success", Xt), (n.JuiceboxRegisterPrivateKeyResult.Failure = Wt), (n.JuiceboxRegisterFailureReason = Gt), (n.JuiceboxRegisterFailureReason.values = Mt), (n.JuiceboxRegisterFailureReason.valueOf = Nt), P(n.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), P(n.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), P(n.JuiceboxRegisterFailureReason, "Assertion", ii), P(n.JuiceboxRegisterFailureReason, "Transient", si), P(n.JuiceboxRegisterFailureReason, "RateLimitExceeded", ni), P(n.JuiceboxRegisterFailureReason, "StorageFailed", ri);
                }
                J(St, "JuiceboxRecoverPrivateKeyResult"),
                    J(kt, "Success", j, St),
                    J(Et, "JuiceboxFailure", j, St),
                    F(Jt, "KeyReconstructionFailure", j, St),
                    F(Ct, "NoJuiceboxTokens", j, St),
                    J(It, "JuiceboxRecoverFailureReason", j, A),
                    J(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    F(Tt, "Success", j, Lt),
                    J(Wt, "Failure", j, Lt),
                    J(Gt, "JuiceboxRegisterFailureReason", j, A),
                    J(hi, "XChatKeyPair"),
                    J(ei, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ui, L),
                    tt(ci, L),
                    tt(ai, L),
                    F(oi, "LibsodiumEncryption", j, j, j, [3, 5, 2]),
                    tt(li, L),
                    tt(ji, L),
                    tt(Ci, L),
                    tt(Fi, L),
                    tt(Si, L),
                    tt(Ki, L),
                    tt(Ai, L),
                    tt(Pi, L),
                    tt(Ii, L),
                    tt(Ti, L),
                    vt(Li, L, j, [0]),
                    tt(Ui, L),
                    tt(Gi, L),
                    tt(Hi, L),
                    J(Bi, "WebJuiceboxApi", Bi, j, j, [1, 3, 2]),
                    tt(Oi, L),
                    tt(Qi, L),
                    tt(Vi, L),
                    tt(Yi, L),
                    tt(Zi, L),
                    tt(ts, L),
                    tt(is, L),
                    F(ss, "WebKeyFactory", j, j, j, [0, 2, 1, 3]),
                    tt(ns, L),
                    J(rs, "XChatConversationKey", j, j, j, [0]),
                    tt(hs, L),
                    J(es, "XChatPublicKey", j, j, j, [0]),
                    tt(_s, L),
                    J(us, "XChatPrivateKey", j, j, j, [0]),
                    (E(kt).r99 = function () {
                        return this.bytes;
                    }),
                    (E(Et).h9l = function () {
                        return this.reason;
                    }),
                    (E(Et).i9l = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).zg = function () {
                        return this.reason;
                    }),
                    (E(Et).ah = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).j9l = function (t, i) {
                        return new Et(t, i);
                    }),
                    (E(Et).copy = function (t, i, s) {
                        return (t = t === j ? this.reason : t), (i = i === j ? this.guessesRemaining : i), this.j9l(t, i);
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
                    (E(It).m9l = function () {
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
                    (E(Wt).h9l = function () {
                        return this.reason;
                    }),
                    (E(Wt).zg = function () {
                        return this.reason;
                    }),
                    (E(Wt).n9l = function (t) {
                        return new Wt(t);
                    }),
                    (E(Wt).copy = function (t, i) {
                        return (t = t === j ? this.reason : t), this.n9l(t);
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
                    (E(Gt).m9l = function () {
                        return this.retryable;
                    }),
                    (E(hi).toString = function () {
                        return "XChatKeyPair(public=" + I(this.q9l_1) + ", private=" + I(this.r9l_1) + ")";
                    }),
                    (E(hi).hashCode = function () {
                        var t = T(this.q9l_1);
                        return (t = (k(t, 31) + T(this.r9l_1)) | 0);
                    }),
                    (E(hi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof hi)) return !1;
                        var i = t instanceof hi ? t : C();
                        return !!X(this.q9l_1, i.q9l_1) && !!X(this.r9l_1, i.r9l_1);
                    }),
                    (E(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + I(this.s9l_1) + ", signing=" + W(this.t9l_1) + ")";
                    }),
                    (E(ei).hashCode = function () {
                        var t = T(this.s9l_1);
                        return (t = (k(t, 31) + (null == this.t9l_1 ? 0 : T(this.t9l_1))) | 0);
                    }),
                    (E(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : C();
                        return !!X(this.s9l_1, i.s9l_1) && !!X(this.t9l_1, i.t9l_1);
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
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.i9m_1 = U), (this.q9_1 = 4), (t = this.d9m_1.z9m(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.j9m_1 = t), (this.k9m_1 = G(this.j9m_1)), (this.l9m_1 = this.i9m_1.a9l(this.k9m_1)), (this.m9m_1 = this.l9m_1.zg()), (this.n9m_1 = this.l9m_1.z9j()), (this.q9_1 = 5);
                                        var i = this.n9m_1;
                                        if ((t = this.f9m_1.a9n(H(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.o9m_1 = B(this.n9m_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.e9m_1.b9n(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.p9m_1 = t), null == this.p9m_1)) {
                                            (this.h9m_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.q9m_1 = this.p9m_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.r9m_1 = this.q9m_1), (this.q9_1 = 9), (t = this.e9m_1.c9n(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.s9m_1 = O()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.s9m_1 = D()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.t9m_1 = this.s9m_1;
                                        var s = U,
                                            n = this.r9m_1,
                                            r = G(n),
                                            h = this.t9m_1;
                                        (this.u9m_1 = s.c9l(this.m9m_1, r, j, V(Q(h)))), (this.o9m_1 = (this.o9m_1 + B(this.u9m_1)) | 0), (this.q9_1 = 11);
                                        var e = this.u9m_1;
                                        if ((t = this.f9m_1.a9n(H(e), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.g9m_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Z)) {
                                            this.v9m_1 = this.t9_1;
                                            var _ = Y(),
                                                u = this.v9m_1;
                                            if (!_.f5s_1.h())
                                                for (var c = _.f5s_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.h9m_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.w9m_1 = this.t9_1), this.e9m_1.x4(), (this.q9_1 = 15), (t = this.f9m_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.f9m_1.x4(), this.w9m_1);
                                    case 16:
                                        if (((this.x9m_1 = this.h9m_1), (this.r9_1 = 20), this.e9m_1.x4(), (this.q9_1 = 17), (t = this.f9m_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.f9m_1.x4(), this.x9m_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.e9m_1.x4(), (this.q9_1 = 19), (t = this.f9m_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.f9m_1.x4(), K;
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
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.o9n_1.b9n(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.u9n_1 = t), null == this.u9n_1)) {
                                            (this.t9n_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.v9n_1 = this.u9n_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.w9n_1 = this.v9n_1), (this.x9n_1 = this.w9n_1.length), (this.y9n_1 = U), (this.q9_1 = 6), (t = this.n9n_1.z9m(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.z9n_1 = t), (this.a9o_1 = G(this.z9n_1));
                                        var i = this.w9n_1;
                                        (this.b9o_1 = this.y9n_1.d9l(this.a9o_1, G(i))), (this.c9o_1 = this.b9o_1.zg()), (this.d9o_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.o9n_1.b9n(this.m9n_1.n9o_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.e9o_1 = t), null == this.e9o_1)) {
                                            (this.t9n_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.f9o_1 = this.e9o_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.g9o_1 = this.f9o_1), (this.x9n_1 = (this.x9n_1 + this.g9o_1.length) | 0);
                                        var s = U,
                                            n = this.g9o_1;
                                        (this.h9o_1 = s.f9l(this.c9o_1, G(n))), (this.i9o_1 = this.h9o_1.c9k()), (this.q9_1 = 10);
                                        var r = this.i9o_1;
                                        if ((t = this.p9n_1.a9n(H(r), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.r9n_1 && null != this.q9n_1) {
                                            var h = this.x9n_1 / this.q9n_1.bytes.x3();
                                            h > this.d9o_1 + 0.1 && (this.r9n_1(h), (this.d9o_1 = h));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.s9n_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Z)) {
                                            this.j9o_1 = this.t9_1;
                                            var e = Y(),
                                                _ = this.j9o_1;
                                            if (!e.f5s_1.h())
                                                for (var u = e.f5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.t9n_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.k9o_1 = this.t9_1), this.o9n_1.x4(), (this.q9_1 = 14), (t = this.p9n_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.p9n_1.x4(), this.k9o_1);
                                    case 15:
                                        if (((this.l9o_1 = this.t9n_1), (this.r9_1 = 19), this.o9n_1.x4(), (this.q9_1 = 16), (t = this.p9n_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.p9n_1.x4(), this.l9o_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.o9n_1.x4(), (this.q9_1 = 18), (t = this.p9n_1.d9n(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.p9n_1.x4(), K;
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
                                        (this.r9_1 = 3), (this.z9o_1 = st.g9l(nt())), (this.a9p_1 = rt);
                                        var i = this.y9o_1;
                                        if (((this.b9p_1 = G(i)), (this.q9_1 = 2), (t = this.x9o_1.z9m(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = G(t),
                                            n = this.a9p_1.y9k(this.b9p_1, this.z9o_1, s),
                                            r = this.z9o_1,
                                            h = H(r),
                                            e = H(n),
                                            _ = G(ht([h, e]));
                                        return H(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var u = this.t9_1,
                                                c = Y();
                                            if (!c.f5s_1.h())
                                                for (var a = c.f5s_1.s2().p(); a.q(); ) {
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
                                        var i = _t(this.m9p_1, et(0, nt()));
                                        this.o9p_1 = G(i.slice());
                                        var s = _t(this.m9p_1, et(nt(), this.m9p_1.length));
                                        if (((this.p9p_1 = G(s.slice())), (this.q9p_1 = rt), (this.q9_1 = 2), (t = this.l9p_1.z9m(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var n = G(t),
                                            r = this.q9p_1.z9k(this.p9p_1, this.o9p_1, n);
                                        return H(r).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var h = this.t9_1,
                                                e = Y();
                                            if (!e.f5s_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.n9p_1, u = e.f5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(h, _);
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
                    (E(oi).r9p = function (t, i, s, n) {
                        var r = new _i(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(oi).s9p = function (t, i, s, n, r, h) {
                        var e = new ui(this, t, i, s, n, r, h);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(oi).t9p = function (t, i, s) {
                        var n = new ci(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(oi).u9p = function (t, i, s, n) {
                        var r = new ai(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.d9q_1.xo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.d9q_1.x9k(this)) === N())) return t;
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
                    (E(ji).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ji(this.n9q_1.b9u_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = at(i);
                                        return ot(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.r9_1) throw n;
                                (this.q9_1 = this.r9_1), (this.t9_1 = n);
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
                                        if (((s.public = this.w9q_1), (t = ct(i.deriveBits(s, this.x9q_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.y9q_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.f5s_1.h())
                                                for (var h = r.f5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.y9q_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.y9q_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ct(vi(window).subtle.digest("SHA-256", lt([this.h9r_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.i9r_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.j9r_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = Y();
                                            if (!s.f5s_1.h())
                                                for (var n = s.f5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(i, null);
                                                }
                                            (this.j9r_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.j9r_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (E(Si).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            n = [this.t9r_1];
                                        if ((t = ct(i.importKey("raw", this.s9r_1, s, !1, n), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.u9r_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var e = h.f5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.u9r_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.u9r_1;
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
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.f9s_1), (t = ct(i.encrypt(s, this.d9s_1, this.e9s_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.g9s_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.f5s_1.h())
                                                for (var h = r.f5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.g9s_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.g9s_1;
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
                                            s = vi(window).subtle,
                                            n = {};
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.r9s_1 ? [] : [this.r9s_1]), (t = ct(s.importKey(this.p9s_1, this.q9s_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.s9s_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var e = h.f5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.s9s_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.s9s_1;
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
                                        if (((s.iv = this.b9t_1), (t = ct(i.decrypt(s, this.c9t_1, this.d9t_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.e9t_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.f5s_1.h())
                                                for (var h = r.f5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.e9t_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.e9t_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Ii).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i,
                                            s = vi(window).subtle,
                                            n = {};
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.p9t_1 ? [] : [this.p9t_1]), (t = ct(s.importKey(this.n9t_1, this.o9t_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.q9t_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var e = h.f5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.q9t_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.q9t_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.r9_1) throw _;
                                (this.q9_1 = this.r9_1), (this.t9_1 = _);
                            }
                    }),
                    (E(Ti).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        (this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1);
                                        var i = vi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ct(i.importKey("raw", this.z9t_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.a9u_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.f5s_1.h())
                                                for (var h = r.f5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.a9u_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.a9u_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Li).w9u = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Li).j2g = function (t) {
                        return this.w9u(t);
                    }),
                    (E(Li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ct((this.v9u_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new Li(this.v9u_1, t);
                    }),
                    (E(Ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Xi(this.l9u_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            n = i.Client;
                                        return (window.JuiceboxGetAuthToken = Ni(this.m9u_1)), new n(new s(this.m9u_1.s97_1), []);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (2 === this.r9_1) throw r;
                                (this.q9_1 = this.r9_1), (this.t9_1 = r);
                            }
                    }),
                    (E(Gi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Xi(this.f9v_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.j9v_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.f5s_1.h())
                                            for (var s = i.f5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.f5s_1.h())
                                            for (var r = "XWS " + I(this.h9v_1.n97_1), h = n.f5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.f9v_1, this.h9v_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.l9v_1 = t), (this.q9_1 = 3), (t = ct(this.l9v_1.register(yt(this.g9v_1), this.i9v_1, new Int8Array(0), this.h9v_1.o97_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.k9v_1 = Xt()), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var e = this.t9_1,
                                            _ = e == this.j9v_1.RegisterError.InvalidAuth ? Zt() : e == this.j9v_1.RegisterError.UpgradeRequired ? ti() : e == this.j9v_1.RegisterError.Assertion ? ii() : e == this.j9v_1.RegisterError.Transient ? si() : e == this.j9v_1.RegisterError.RateLimitExceeded ? ni() : si();
                                        (this.k9v_1 = new Wt(_)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.k9v_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Xi(this.u9v_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9v_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.f5s_1.h())
                                            for (var s = i.f5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.f5s_1.h())
                                            for (var r = "XWS " + I(this.w9v_1.n97_1), h = n.f5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.u9v_1, this.w9v_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.z9v_1 = t), (this.q9_1 = 3), (t = ct(this.z9v_1.recover(yt(this.v9v_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.y9v_1 = new kt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.x9v_1.RecoverErrorReason.InvalidPin ? Ht() : u == this.x9v_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.x9v_1.RecoverErrorReason.InvalidAuth ? Dt() : u == this.x9v_1.RecoverErrorReason.UpgradeRequired ? Ot() : u == this.x9v_1.RecoverErrorReason.Assertion ? Qt() : u == this.x9v_1.RecoverErrorReason.Transient ? Vt() : u == this.x9v_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.y9v_1 = new Et(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.y9v_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Bi).a9w = function (t, i, s, n) {
                        var r = new Gi(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(Bi).b9w = function (t, i, s) {
                        var n = new Hi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(Oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = yi(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new hi(new es(i.publicKey), new us(i.privateKey));
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = di(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new rs(t);
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.m9x_1.c9y(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.p9x_1 = t), (this.q9_1 = 2), (t = $i(this.n9x_1.e9q_1, this.p9x_1.r9l_1.b9u_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.q9x_1 = t;
                                        var i;
                                        if (null == this.q9x_1) return null;
                                        if (((i = this.q9x_1), (this.r9x_1 = i), (this.q9_1 = 3), (t = qi(this.p9x_1.q9l_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.s9x_1 = t), (this.t9x_1 = Rt(this.s9x_1, 65)), (this.q9_1 = 4), (t = xi(this.r9x_1, this.t9x_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.u9x_1 = t;
                                        var s;
                                        if (null == this.u9x_1) return null;
                                        if (((s = this.u9x_1), (this.v9x_1 = s), (this.w9x_1 = this.v9x_1.slice(0, 16)), (this.x9x_1 = this.v9x_1.slice(16, 32)), (this.q9_1 = 5), (t = Ri(this.w9x_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.y9x_1 = t;
                                        var n;
                                        if (null == this.y9x_1) return null;
                                        if (((n = this.y9x_1), (this.z9x_1 = n), (this.q9_1 = 6), (t = wi(this.o9x_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.a9y_1 = t), (this.q9_1 = 7), (t = pi(this.z9x_1, this.a9y_1, this.x9x_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var r = t;
                                        return pt(lt([this.t9x_1, r]));
                                    case 8:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (8 === this.r9_1) throw h;
                                (this.q9_1 = this.r9_1), (this.t9_1 = h);
                            }
                    }),
                    (E(Yi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 7), (this.o9y_1 = ot(this.n9y_1)), (this.p9y_1 = this.o9y_1.slice(0, 65)), (this.q9y_1 = this.o9y_1.slice(65)), (this.q9_1 = 1), (t = gi("raw", this.p9y_1, j, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.r9y_1 = t;
                                        var i;
                                        if (null == this.r9y_1) return null;
                                        if (((i = this.r9y_1), (this.s9y_1 = i), (this.q9_1 = 2), (t = $i(this.s9y_1, this.m9y_1.b9u_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.t9y_1 = t;
                                        var s;
                                        if (null == this.t9y_1) return null;
                                        if (((s = this.t9y_1), (this.u9y_1 = s), (this.q9_1 = 3), (t = xi(this.u9y_1, this.p9y_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.v9y_1 = t;
                                        var n;
                                        if (null == this.v9y_1) return null;
                                        if (((n = this.v9y_1), (this.w9y_1 = n), (this.x9y_1 = this.w9y_1.slice(0, 16)), (this.y9y_1 = this.w9y_1.slice(16, 32)), (this.q9_1 = 4), (t = Ri(this.x9y_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.z9y_1 = t;
                                        var r;
                                        if (null == this.z9y_1) return null;
                                        if (((r = this.z9y_1), (this.a9z_1 = r), (this.q9_1 = 5), (t = bi(this.y9y_1, this.a9z_1, this.q9y_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.b9z_1 = t;
                                        var h;
                                        if (null == this.b9z_1) return null;
                                        if (((h = this.b9z_1), (this.c9z_1 = h), (this.q9_1 = 6), (t = Di(this.l9y_1, this.c9z_1, this)) === N())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi("spki", gt(this.m9z_1), j, this)) === N())) return t;
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = gi("spki", gt(this.x9z_1), j, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.y9z_1 = s;
                                        var n;
                                        if (null == this.y9z_1) n = null;
                                        else n = new es(this.y9z_1);
                                        this.z9z_1 = n;
                                        var r;
                                        if (null == this.z9z_1) return null;
                                        if (((r = this.z9z_1), (this.aa0_1 = r), (this.q9_1 = 2), (t = this.aa0_1), (i = this), (s = Ji(t.e9q_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.ba0_1 = s;
                                        var h = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((h.d = bt(this.w9z_1, !0)), (h.x = this.ba0_1.x), (h.y = this.ba0_1.y), (this.ca0_1 = h), (this.q9_1 = 3), (s = zi("jwk", this.ca0_1, "deriveBits", this)) === N())) return s;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.l9w_1, this)) === N())) return t;
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
                    (E(ss).c9y = function (t) {
                        var i = new Oi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).da0 = function (t) {
                        var i = new Qi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).ea0 = function (t, i, s) {
                        var n = new Vi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).fa0 = function (t, i, s) {
                        var n = new Yi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).ga0 = function (t, i) {
                        var s = new Zi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ss).ha0 = function (t, i, s) {
                        var n = new ts(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).ia0 = function (t, i) {
                        return Di(this, gt(t), i);
                    }),
                    (E(ss).ja0 = function (t, i, s) {
                        return null;
                    }),
                    (E(ss).ka0 = function (t, i, s, n) {
                        return !1;
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this.ta0_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return zt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(rs).z9m = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(hs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.ca1_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return zt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(es).z9m = function (t) {
                        var i = new hs(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(_s).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = mi(this.la1_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return zt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(us).z9m = function (t) {
                        var i = new _s(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    P(E(It), "name", E(It).y2),
                    P(E(It), "ordinal", E(It).z2),
                    P(E(Gt), "name", E(Gt).y2),
                    P(E(Gt), "ordinal", E(Gt).z2),
                    (z = new ss()),
                    cs(t),
                    (t.$jsExportAll$ = cs),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Et),
                    (t.$_$.b = kt),
                    (t.$_$.c = Wt),
                    (t.$_$.d = Tt),
                    (t.$_$.e = Bi),
                    (t.$_$.f = hi),
                    (t.$_$.g = ei),
                    (t.$_$.h = ri),
                    (t.$_$.i = jt),
                    (t.$_$.j = Ft),
                    (t.$_$.k = Xt),
                    (t.$_$.l = function () {
                        return null == b && new oi(), b;
                    }),
                    (t.$_$.m = z);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.c1d0deca.js.map
