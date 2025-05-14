(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, r, n, h, e) {
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
                    g,
                    d,
                    $,
                    y,
                    m,
                    R,
                    k,
                    x,
                    j,
                    p,
                    b = Math.imul,
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
                    M = r.$_$.j,
                    N = i.$_$.wb,
                    U = r.$_$.h,
                    G = i.$_$.e4,
                    H = i.$_$.k4,
                    B = i.$_$.j4,
                    D = r.$_$.e,
                    O = r.$_$.d,
                    Q = i.$_$.pe,
                    V = i.$_$.a4,
                    Y = n.$_$.d,
                    Z = i.$_$.ui,
                    tt = i.$_$.nd,
                    it = r.$_$.c,
                    st = r.$_$.i,
                    rt = r.$_$.a,
                    nt = r.$_$.g,
                    ht = i.$_$.f,
                    et = i.$_$.jf,
                    _t = i.$_$.ya,
                    ut = r.$_$.b,
                    ct = h.$_$.k,
                    at = e.$_$.h,
                    ot = e.$_$.b,
                    lt = e.$_$.v,
                    ft = e.$_$.g,
                    vt = i.$_$.qd,
                    wt = r.$_$.f,
                    qt = i.$_$.c6,
                    gt = i.$_$.oh,
                    dt = i.$_$.yf,
                    $t = i.$_$.fk,
                    yt = i.$_$.of,
                    mt = i.$_$.id,
                    Rt = e.$_$.t,
                    kt = e.$_$.d,
                    xt = e.$_$.f,
                    jt = e.$_$.k,
                    pt = e.$_$.c;
                function bt(t) {
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
                    if (q) return A;
                    (q = !0), (c = new Xt("InvalidPin", 0, !0)), (a = new Xt("NotRegistered", 1, !0)), (o = new Xt("InvalidAuth", 2, !0)), (l = new Xt("UpgradeRequired", 3, !1)), (f = new Xt("Assertion", 4, !1)), (v = new Xt("Transient", 5, !0)), (w = new Xt("RateLimitExceeded", 6, !0));
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
                    return [Zt(), ti(), ii(), si(), ri(), ni()];
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
                            return ri();
                        case "StorageFailed":
                            return ni();
                        default:
                            Ut(), K("No enum constant value.");
                    }
                }
                function Ut() {
                    if (x) return A;
                    (x = !0), (d = new Gt("InvalidAuth", 0, !0)), ($ = new Gt("UpgradeRequired", 1, !1)), (y = new Gt("Assertion", 2, !1)), (m = new Gt("Transient", 3, !0)), (R = new Gt("RateLimitExceeded", 4, !0)), (k = new Gt("StorageFailed", 5, !0));
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
                    return Pt(), l;
                }
                function Qt() {
                    return Pt(), f;
                }
                function Vt() {
                    return Pt(), v;
                }
                function Yt() {
                    return Pt(), w;
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
                    return Ut(), m;
                }
                function ri() {
                    return Ut(), R;
                }
                function ni() {
                    return Ut(), k;
                }
                function hi(t, i) {
                    (this.k9i_1 = t), (this.l9i_1 = i);
                }
                function ei(t, i) {
                    (this.m9i_1 = t), (this.n9i_1 = i);
                }
                function _i(t, i, s, r, n) {
                    L.call(this, n), (this.w9i_1 = t), (this.x9i_1 = i), (this.y9i_1 = s), (this.z9i_1 = r);
                }
                function ui(t, i, s, r, n, h, e) {
                    L.call(this, e), (this.g9k_1 = t), (this.h9k_1 = i), (this.i9k_1 = s), (this.j9k_1 = r), (this.k9k_1 = n), (this.l9k_1 = h);
                }
                function ci(t, i, s, r) {
                    L.call(this, r), (this.q9l_1 = t), (this.r9l_1 = i), (this.s9l_1 = s);
                }
                function ai(t, i, s, r, n) {
                    L.call(this, n), (this.e9m_1 = t), (this.f9m_1 = i), (this.g9m_1 = s), (this.h9m_1 = r);
                }
                function oi() {
                    (j = this), (this.g9l_1 = 1024), (this.h9l_1 = (1024 + ut()) | 0);
                }
                function li(t, i) {
                    var s = new fi(t, i);
                    return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                }
                function fi(t, i) {
                    L.call(this, i), (this.x9m_1 = t);
                }
                function vi(t) {
                    return t.crypto;
                }
                function wi(t, i) {
                    return Ei(t.s9j_1, "raw", i);
                }
                function qi(t, i) {
                    return Ei(t.y9m_1, "spki", i);
                }
                function gi(t, i) {
                    var s = new Si(t, i);
                    return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                }
                function di(t) {
                    var i = vi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        r = s;
                    return ct(i.generateKey(r, !0, ["deriveBits"]), t);
                }
                function $i(t) {
                    var i = vi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        r = s;
                    return ct(i.generateKey(r, !0, ["encrypt", "decrypt"]), t);
                }
                function yi(t, i, s) {
                    var r = new Ci(t, i, s);
                    return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                }
                function mi(t, i, s) {
                    var r = new Fi(t, i, s);
                    return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                }
                function Ri(t, i, s) {
                    var r = new Ki(t, i, s);
                    return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                }
                function ki(t, i, s, r) {
                    var n = new Ai(t, i, s, r);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function xi(t, i, s, r) {
                    var n = new zi(t, i, (s = s === S ? null : s), r);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function ji(t, i, s, r) {
                    var n = new Pi(t, i, s, r);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function pi(t, i, s, r) {
                    var n = new Xi(t, i, (s = s === S ? null : s), r);
                    return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                }
                function bi(t, i) {
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
                    L.call(this, i), (this.h9n_1 = t);
                }
                function Ci(t, i, s) {
                    L.call(this, s), (this.q9n_1 = t), (this.r9n_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.b9o_1 = t), (this.c9o_1 = i);
                }
                function Ki(t, i, s) {
                    L.call(this, s), (this.m9o_1 = t), (this.n9o_1 = i);
                }
                function Ai(t, i, s, r) {
                    L.call(this, r), (this.x9o_1 = t), (this.y9o_1 = i), (this.z9o_1 = s);
                }
                function zi(t, i, s, r) {
                    L.call(this, r), (this.j9p_1 = t), (this.k9p_1 = i), (this.l9p_1 = s);
                }
                function Pi(t, i, s, r) {
                    L.call(this, r), (this.v9p_1 = t), (this.w9p_1 = i), (this.x9p_1 = s);
                }
                function Xi(t, i, s, r) {
                    L.call(this, r), (this.h9q_1 = t), (this.i9q_1 = i), (this.j9q_1 = s);
                }
                function Ii(t, i) {
                    L.call(this, i), (this.t9q_1 = t);
                }
                function Ti(t) {
                    var i = t.w9q_1;
                    return (
                        mt(
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
                    var r = new Ui(t, i, s);
                    return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                }
                function Li(t, i) {
                    (this.p9r_1 = t), L.call(this, i);
                }
                function Mi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Li(t, i),
                                r = function (t) {
                                    return s.q9r(t);
                                };
                            return (r.$arity = 0), r;
                        })(t, null);
                    };
                }
                function Ni(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, r) {
                                    try {
                                        var n = wt(t),
                                            h = qt().zm_1,
                                            e = gt(H(n), h),
                                            _ = i.h94_1.p2(e);
                                        s(null == _ ? null : _.o94_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        r(t);
                                    }
                                    return A;
                                };
                            })(i, t),
                        );
                    };
                }
                function Ui(t, i, s) {
                    L.call(this, s), (this.f9r_1 = t), (this.g9r_1 = i);
                }
                function Gi(t, i, s, r, n) {
                    L.call(this, n), (this.z9r_1 = t), (this.a9s_1 = i), (this.b9s_1 = s), (this.c9s_1 = r);
                }
                function Hi(t, i, s, r) {
                    L.call(this, r), (this.o9s_1 = t), (this.p9s_1 = i), (this.q9s_1 = s);
                }
                function Bi() {
                    this.w9q_1 = $t(Mi(this));
                }
                function Di(t, i, s) {
                    var r = new is(t, i, s);
                    return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                }
                function Oi(t, i) {
                    L.call(this, i), (this.o9t_1 = t);
                }
                function Qi(t, i) {
                    L.call(this, i), (this.x9t_1 = t);
                }
                function Vi(t, i, s, r) {
                    L.call(this, r), (this.g9u_1 = t), (this.h9u_1 = i), (this.i9u_1 = s);
                }
                function Yi(t, i, s, r) {
                    L.call(this, r), (this.f9v_1 = t), (this.g9v_1 = i), (this.h9v_1 = s);
                }
                function Zi(t, i, s) {
                    L.call(this, s), (this.f9w_1 = t), (this.g9w_1 = i);
                }
                function ts(t, i, s, r) {
                    L.call(this, r), (this.p9w_1 = t), (this.q9w_1 = i), (this.r9w_1 = s);
                }
                function is(t, i, s) {
                    L.call(this, s), (this.e9t_1 = t), (this.f9t_1 = i);
                }
                function ss() {
                    this.v9u_1 = 65;
                }
                function rs(t, i) {
                    L.call(this, i), (this.n9x_1 = t);
                }
                function ns(t) {
                    this.s9j_1 = t;
                }
                function hs(t, i) {
                    L.call(this, i), (this.w9x_1 = t);
                }
                function es(t) {
                    this.y9m_1 = t;
                }
                function _s(t, i) {
                    L.call(this, i), (this.f9y_1 = t);
                }
                function us(t) {
                    this.v9q_1 = t;
                }
                function cs(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        r = s.dms || (s.dms = {});
                    (r.JuiceboxRecoverPrivateKeyResult = Kt), (r.JuiceboxRecoverPrivateKeyResult.Success = bt), (r.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = Et), P(r.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", St), P(r.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ft), (r.JuiceboxRecoverFailureReason = Xt), (r.JuiceboxRecoverFailureReason.values = At), (r.JuiceboxRecoverFailureReason.valueOf = zt), P(r.JuiceboxRecoverFailureReason, "InvalidPin", Ht), P(r.JuiceboxRecoverFailureReason, "NotRegistered", Bt), P(r.JuiceboxRecoverFailureReason, "InvalidAuth", Dt), P(r.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), P(r.JuiceboxRecoverFailureReason, "Assertion", Qt), P(r.JuiceboxRecoverFailureReason, "Transient", Vt), P(r.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (r.JuiceboxRegisterPrivateKeyResult = Lt), P(r.JuiceboxRegisterPrivateKeyResult, "Success", Tt), (r.JuiceboxRegisterPrivateKeyResult.Failure = Wt), (r.JuiceboxRegisterFailureReason = Gt), (r.JuiceboxRegisterFailureReason.values = Mt), (r.JuiceboxRegisterFailureReason.valueOf = Nt), P(r.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), P(r.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), P(r.JuiceboxRegisterFailureReason, "Assertion", ii), P(r.JuiceboxRegisterFailureReason, "Transient", si), P(r.JuiceboxRegisterFailureReason, "RateLimitExceeded", ri), P(r.JuiceboxRegisterFailureReason, "StorageFailed", ni);
                }
                J(Kt, "JuiceboxRecoverPrivateKeyResult"),
                    J(bt, "Success", S, Kt),
                    J(Et, "JuiceboxFailure", S, Kt),
                    F(Jt, "KeyReconstructionFailure", S, Kt),
                    F(Ct, "NoJuiceboxTokens", S, Kt),
                    J(Xt, "JuiceboxRecoverFailureReason", S, z),
                    J(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    F(It, "Success", S, Lt),
                    J(Wt, "Failure", S, Lt),
                    J(Gt, "JuiceboxRegisterFailureReason", S, z),
                    J(hi, "XChatKeyPair"),
                    J(ei, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ui, L),
                    tt(ci, L),
                    tt(ai, L),
                    F(oi, "LibsodiumEncryption", S, S, S, [3, 5, 2]),
                    tt(fi, L),
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
                    tt(rs, L),
                    J(ns, "XChatConversationKey", S, S, S, [0]),
                    tt(hs, L),
                    J(es, "XChatPublicKey", S, S, S, [0]),
                    tt(_s, L),
                    J(us, "XChatPrivateKey", S, S, S, [0]),
                    (E(bt).l96 = function () {
                        return this.bytes;
                    }),
                    (E(Et).b9i = function () {
                        return this.reason;
                    }),
                    (E(Et).c9i = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).zg = function () {
                        return this.reason;
                    }),
                    (E(Et).ah = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).d9i = function (t, i) {
                        return new Et(t, i);
                    }),
                    (E(Et).copy = function (t, i, s) {
                        return (t = t === S ? this.reason : t), (i = i === S ? this.guessesRemaining : i), this.d9i(t, i);
                    }),
                    (E(Et).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (E(Et).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (b(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
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
                    (E(Xt).g9i = function () {
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
                    (E(Wt).b9i = function () {
                        return this.reason;
                    }),
                    (E(Wt).zg = function () {
                        return this.reason;
                    }),
                    (E(Wt).h9i = function (t) {
                        return new Wt(t);
                    }),
                    (E(Wt).copy = function (t, i) {
                        return (t = t === S ? this.reason : t), this.h9i(t);
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
                    (E(Gt).g9i = function () {
                        return this.retryable;
                    }),
                    (E(hi).toString = function () {
                        return "XChatKeyPair(public=" + X(this.k9i_1) + ", private=" + X(this.l9i_1) + ")";
                    }),
                    (E(hi).hashCode = function () {
                        var t = I(this.k9i_1);
                        return (t = (b(t, 31) + I(this.l9i_1)) | 0);
                    }),
                    (E(hi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof hi)) return !1;
                        var i = t instanceof hi ? t : C();
                        return !!T(this.k9i_1, i.k9i_1) && !!T(this.l9i_1, i.l9i_1);
                    }),
                    (E(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + X(this.m9i_1) + ", signing=" + W(this.n9i_1) + ")";
                    }),
                    (E(ei).hashCode = function () {
                        var t = I(this.m9i_1);
                        return (t = (b(t, 31) + (null == this.n9i_1 ? 0 : I(this.n9i_1))) | 0);
                    }),
                    (E(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : C();
                        return !!T(this.m9i_1, i.m9i_1) && !!T(this.n9i_1, i.n9i_1);
                    }),
                    (E(_i).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 20), (this.q9_1 = 1), (t = li(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.c9j_1 = U), (this.q9_1 = 4), (t = this.x9i_1.t9j(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.d9j_1 = t), (this.e9j_1 = G(this.d9j_1)), (this.f9j_1 = this.c9j_1.u9h(this.e9j_1)), (this.g9j_1 = this.f9j_1.zg()), (this.h9j_1 = this.f9j_1.t9g()), (this.q9_1 = 5);
                                        var i = this.h9j_1;
                                        if ((t = this.z9i_1.u9j(H(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.i9j_1 = B(this.h9j_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.y9i_1.v9j(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.j9j_1 = t), null == this.j9j_1)) {
                                            (this.b9j_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.k9j_1 = this.j9j_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.l9j_1 = this.k9j_1), (this.q9_1 = 9), (t = this.y9i_1.w9j(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.m9j_1 = O()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.m9j_1 = D()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.n9j_1 = this.m9j_1;
                                        var s = U,
                                            r = this.l9j_1,
                                            n = G(r),
                                            h = this.n9j_1;
                                        (this.o9j_1 = s.w9h(this.g9j_1, n, S, V(Q(h)))), (this.i9j_1 = (this.i9j_1 + B(this.o9j_1)) | 0), (this.q9_1 = 11);
                                        var e = this.o9j_1;
                                        if ((t = this.z9i_1.u9j(H(e), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.a9j_1 = A), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Z)) {
                                            this.p9j_1 = this.t9_1;
                                            var _ = Y(),
                                                u = this.p9j_1;
                                            if (!_.g5s_1.h())
                                                for (var c = _.g5s_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e("XWS", u, "encryptStream failed");
                                                }
                                            (this.b9j_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.q9j_1 = this.t9_1), this.y9i_1.x4(), (this.q9_1 = 15), (t = this.z9i_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.z9i_1.x4(), this.q9j_1);
                                    case 16:
                                        if (((this.r9j_1 = this.b9j_1), (this.r9_1 = 20), this.y9i_1.x4(), (this.q9_1 = 17), (t = this.z9i_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.z9i_1.x4(), this.r9j_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.y9i_1.x4(), (this.q9_1 = 19), (t = this.z9i_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.z9i_1.x4(), A;
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
                                        if (((this.r9_1 = 19), (this.q9_1 = 1), (t = li(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.q9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.q9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.i9k_1.v9j(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.o9k_1 = t), null == this.o9k_1)) {
                                            (this.n9k_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.p9k_1 = this.o9k_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.q9k_1 = this.p9k_1), (this.r9k_1 = this.q9k_1.length), (this.s9k_1 = U), (this.q9_1 = 6), (t = this.h9k_1.t9j(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.t9k_1 = t), (this.u9k_1 = G(this.t9k_1));
                                        var i = this.q9k_1;
                                        (this.v9k_1 = this.s9k_1.x9h(this.u9k_1, G(i))), (this.w9k_1 = this.v9k_1.zg()), (this.x9k_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.i9k_1.v9j(this.g9k_1.h9l_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.y9k_1 = t), null == this.y9k_1)) {
                                            (this.n9k_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.z9k_1 = this.y9k_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.a9l_1 = this.z9k_1), (this.r9k_1 = (this.r9k_1 + this.a9l_1.length) | 0);
                                        var s = U,
                                            r = this.a9l_1;
                                        (this.b9l_1 = s.z9h(this.w9k_1, G(r))), (this.c9l_1 = this.b9l_1.w9g()), (this.q9_1 = 10);
                                        var n = this.c9l_1;
                                        if ((t = this.j9k_1.u9j(H(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.l9k_1 && null != this.k9k_1) {
                                            var h = this.r9k_1 / this.k9k_1.bytes.x3();
                                            h > this.x9k_1 + 0.1 && (this.l9k_1(h), (this.x9k_1 = h));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.m9k_1 = A), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Z)) {
                                            this.d9l_1 = this.t9_1;
                                            var e = Y(),
                                                _ = this.d9l_1;
                                            if (!e.g5s_1.h())
                                                for (var u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e("XWS", _, "XWS decryptStream failed");
                                                }
                                            (this.n9k_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.e9l_1 = this.t9_1), this.i9k_1.x4(), (this.q9_1 = 14), (t = this.j9k_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.j9k_1.x4(), this.e9l_1);
                                    case 15:
                                        if (((this.f9l_1 = this.n9k_1), (this.r9_1 = 19), this.i9k_1.x4(), (this.q9_1 = 16), (t = this.j9k_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.j9k_1.x4(), this.f9l_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.i9k_1.x4(), (this.q9_1 = 18), (t = this.j9k_1.x9j(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.j9k_1.x4(), A;
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = li(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9_1 = 3), (this.t9l_1 = st.a9i(rt())), (this.u9l_1 = nt);
                                        var i = this.s9l_1;
                                        if (((this.v9l_1 = G(i)), (this.q9_1 = 2), (t = this.r9l_1.t9j(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = G(t),
                                            r = this.u9l_1.s9h(this.v9l_1, this.t9l_1, s),
                                            n = this.t9l_1,
                                            h = H(n),
                                            e = H(r),
                                            _ = G(ht([h, e]));
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = li(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.r9_1 = 3;
                                        var i = _t(this.g9m_1, et(0, rt()));
                                        this.i9m_1 = G(i.slice());
                                        var s = _t(this.g9m_1, et(rt(), this.g9m_1.length));
                                        if (((this.j9m_1 = G(s.slice())), (this.k9m_1 = nt), (this.q9_1 = 2), (t = this.f9m_1.t9j(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var r = G(t),
                                            n = this.k9m_1.t9h(this.j9m_1, this.i9m_1, r);
                                        return H(n).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var h = this.t9_1,
                                                e = Y();
                                            if (!e.g5s_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.h9m_1, u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e("XWS", h, _);
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
                    (E(oi).l9m = function (t, i, s, r) {
                        var n = new _i(this, t, i, s, r);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(oi).m9m = function (t, i, s, r, n, h) {
                        var e = new ui(this, t, i, s, r, n, h);
                        return (e.s9_1 = A), (e.t9_1 = null), e.ia();
                    }),
                    (E(oi).n9m = function (t, i, s) {
                        var r = new ci(this, t, i, s);
                        return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                    }),
                    (E(oi).o9m = function (t, i, s, r) {
                        var n = new ai(this, t, i, s, r);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(fi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.x9m_1.xo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.x9m_1.r9h(this)) === N())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ji(this.h9n_1.v9q_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = at(i);
                                        return ot(s);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (2 === this.r9_1) throw r;
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
                                        var i = vi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.q9n_1), (t = ct(i.deriveBits(s, this.r9n_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.s9n_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var h = n.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(null, r, null);
                                                }
                                            (this.s9n_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.s9n_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = ct(vi(window).subtle.digest("SHA-256", ft([this.b9o_1, lt(new Int8Array([0, 0, 0, 1])).buffer, this.c9o_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.d9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = Y();
                                            if (!s.g5s_1.h())
                                                for (var r = s.g5s_1.s2().p(); r.q(); ) {
                                                    r.r().m2().e(null, i, null);
                                                }
                                            (this.d9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.d9o_1;
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
                                            r = [this.n9o_1];
                                        if ((t = ct(i.importKey("raw", this.m9o_1, s, !1, r), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.o9o_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
                                                }
                                            (this.o9o_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.o9o_1;
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
                                        if (((s.iv = this.z9o_1), (t = ct(i.encrypt(s, this.x9o_1, this.y9o_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.a9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var h = n.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(null, r, null);
                                                }
                                            (this.a9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.a9p_1;
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
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.l9p_1 ? [] : [this.l9p_1]), (t = ct(s.importKey(this.j9p_1, this.k9p_1, r, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.m9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
                                                }
                                            (this.m9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.m9p_1;
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
                                        if (((s.iv = this.v9p_1), (t = ct(i.decrypt(s, this.w9p_1, this.x9p_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.y9p_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var h = n.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(null, r, null);
                                                }
                                            (this.y9p_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.y9p_1;
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
                                            r = {};
                                        if (((r.name = "ECDH"), (r.namedCurve = "P-256"), (i = null == this.j9q_1 ? [] : [this.j9q_1]), (t = ct(s.importKey(this.h9q_1, this.i9q_1, r, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.k9q_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(null, n, null);
                                                }
                                            (this.k9q_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.k9q_1;
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
                                        if ((t = ct(i.importKey("raw", this.t9q_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.u9q_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                n = Y();
                                            if (!n.g5s_1.h())
                                                for (var h = n.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(null, r, null);
                                                }
                                            (this.u9q_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.u9q_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Li).q9r = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(Li).w2g = function (t) {
                        return this.q9r(t);
                    }),
                    (E(Li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ct((this.p9r_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new Li(this.p9r_1, t);
                    }),
                    (E(Ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Ti(this.f9r_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            r = i.Client;
                                        return (window.JuiceboxGetAuthToken = Ni(this.g9r_1)), new r(new s(this.g9r_1.m94_1), []);
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ti(this.z9r_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.d9s_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = Y();
                                        if (!r.g5s_1.h())
                                            for (var n = X(this.b9s_1.h94_1), h = r.g5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d("XWS", n, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.z9r_1, this.b9s_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.f9s_1 = t), (this.q9_1 = 3), (t = ct(this.f9s_1.register(dt(this.a9s_1), this.c9s_1, new Int8Array(0), this.b9s_1.i94_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.e9s_1 = Tt()), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var e = this.t9_1,
                                            _ = e == this.d9s_1.RegisterError.InvalidAuth ? Zt() : e == this.d9s_1.RegisterError.UpgradeRequired ? ti() : e == this.d9s_1.RegisterError.Assertion ? ii() : e == this.d9s_1.RegisterError.Transient ? si() : e == this.d9s_1.RegisterError.RateLimitExceeded ? ri() : si();
                                        (this.e9s_1 = new Wt(_)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.e9s_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Ti(this.o9s_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.r9s_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var r = Y();
                                        if (!r.g5s_1.h())
                                            for (var n = X(this.q9s_1.h94_1), h = r.g5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d("XWS", n, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.o9s_1, this.q9s_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.t9s_1 = t), (this.q9_1 = 3), (t = ct(this.t9s_1.recover(dt(this.p9s_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.s9s_1 = new bt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            c = u == this.r9s_1.RecoverErrorReason.InvalidPin ? Ht() : u == this.r9s_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.r9s_1.RecoverErrorReason.InvalidAuth ? Dt() : u == this.r9s_1.RecoverErrorReason.UpgradeRequired ? Ot() : u == this.r9s_1.RecoverErrorReason.Assertion ? Qt() : u == this.r9s_1.RecoverErrorReason.Transient ? Vt() : u == this.r9s_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.s9s_1 = new Et(c, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.s9s_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(Bi).u9s = function (t, i, s, r) {
                        var n = new Gi(this, t, i, s, r);
                        return (n.s9_1 = A), (n.t9_1 = null), n.ia();
                    }),
                    (E(Bi).v9s = function (t, i, s) {
                        var r = new Hi(this, t, i, s);
                        return (r.s9_1 = A), (r.t9_1 = null), r.ia();
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.g9u_1.w9u(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.j9u_1 = t), (this.q9_1 = 2), (t = yi(this.h9u_1.y9m_1, this.j9u_1.l9i_1.v9q_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.k9u_1 = t;
                                        var i;
                                        if (null == this.k9u_1) return null;
                                        if (((i = this.k9u_1), (this.l9u_1 = i), (this.q9_1 = 3), (t = qi(this.j9u_1.k9i_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.m9u_1 = t), (this.n9u_1 = Rt(this.m9u_1, 65)), (this.q9_1 = 4), (t = mi(this.l9u_1, this.n9u_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.o9u_1 = t;
                                        var s;
                                        if (null == this.o9u_1) return null;
                                        if (((s = this.o9u_1), (this.p9u_1 = s), (this.q9u_1 = this.p9u_1.slice(0, 16)), (this.r9u_1 = this.p9u_1.slice(16, 32)), (this.q9_1 = 5), (t = Ri(this.q9u_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.s9u_1 = t;
                                        var r;
                                        if (null == this.s9u_1) return null;
                                        if (((r = this.s9u_1), (this.t9u_1 = r), (this.q9_1 = 6), (t = wi(this.i9u_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.u9u_1 = t), (this.q9_1 = 7), (t = ki(this.t9u_1, this.u9u_1, this.r9u_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var n = t;
                                        return kt(ft([this.n9u_1, n]));
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
                                        if (((this.r9_1 = 7), (this.i9v_1 = ot(this.h9v_1)), (this.j9v_1 = this.i9v_1.slice(0, 65)), (this.k9v_1 = this.i9v_1.slice(65)), (this.q9_1 = 1), (t = xi("raw", this.j9v_1, S, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.l9v_1 = t;
                                        var i;
                                        if (null == this.l9v_1) return null;
                                        if (((i = this.l9v_1), (this.m9v_1 = i), (this.q9_1 = 2), (t = yi(this.m9v_1, this.g9v_1.v9q_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.n9v_1 = t;
                                        var s;
                                        if (null == this.n9v_1) return null;
                                        if (((s = this.n9v_1), (this.o9v_1 = s), (this.q9_1 = 3), (t = mi(this.o9v_1, this.j9v_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.p9v_1 = t;
                                        var r;
                                        if (null == this.p9v_1) return null;
                                        if (((r = this.p9v_1), (this.q9v_1 = r), (this.r9v_1 = this.q9v_1.slice(0, 16)), (this.s9v_1 = this.q9v_1.slice(16, 32)), (this.q9_1 = 4), (t = Ri(this.r9v_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.t9v_1 = t;
                                        var n;
                                        if (null == this.t9v_1) return null;
                                        if (((n = this.t9v_1), (this.u9v_1 = n), (this.q9_1 = 5), (t = ji(this.s9v_1, this.u9v_1, this.k9v_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.v9v_1 = t;
                                        var h;
                                        if (null == this.v9v_1) return null;
                                        if (((h = this.v9v_1), (this.w9v_1 = h), (this.q9_1 = 6), (t = Di(this.f9v_1, this.w9v_1, this)) === N())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = xi("spki", xt(this.g9w_1), S, this)) === N())) return t;
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = xi("spki", xt(this.r9w_1), S, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.s9w_1 = s;
                                        var r;
                                        if (null == this.s9w_1) r = null;
                                        else r = new es(this.s9w_1);
                                        this.t9w_1 = r;
                                        var n;
                                        if (null == this.t9w_1) return null;
                                        if (((n = this.t9w_1), (this.u9w_1 = n), (this.q9_1 = 2), (t = this.u9w_1), (i = this), (s = Ji(t.y9m_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.v9w_1 = s;
                                        var h = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((h.d = jt(this.q9w_1, !0)), (h.x = this.v9w_1.x), (h.y = this.v9w_1.y), (this.w9w_1 = h), (this.q9_1 = 3), (s = pi("jwk", this.w9w_1, "deriveBits", this)) === N())) return s;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = bi(this.f9t_1, this)) === N())) return t;
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
                    (E(ss).w9u = function (t) {
                        var i = new Oi(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).x9w = function (t) {
                        var i = new Qi(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).y9w = function (t, i, s) {
                        var r = new Vi(this, t, i, s);
                        return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                    }),
                    (E(ss).z9w = function (t, i, s) {
                        var r = new Yi(this, t, i, s);
                        return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                    }),
                    (E(ss).a9x = function (t, i) {
                        var s = new Zi(this, t, i);
                        return (s.s9_1 = A), (s.t9_1 = null), s.ia();
                    }),
                    (E(ss).b9x = function (t, i, s) {
                        var r = new ts(this, t, i, s);
                        return (r.s9_1 = A), (r.t9_1 = null), r.ia();
                    }),
                    (E(ss).c9x = function (t, i) {
                        return Di(this, xt(t), i);
                    }),
                    (E(ss).d9x = function (t, i, s) {
                        return null;
                    }),
                    (E(ss).e9x = function (t, i, s, r) {
                        return !1;
                    }),
                    (E(rs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this.n9x_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return pt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(ns).t9j = function (t) {
                        var i = new rs(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(hs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.w9x_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return pt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(es).t9j = function (t) {
                        var i = new hs(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    (E(_s).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi(this.f9y_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return pt(t);
                                    case 2:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.r9_1) throw i;
                                (this.q9_1 = this.r9_1), (this.t9_1 = i);
                            }
                    }),
                    (E(us).t9j = function (t) {
                        var i = new _s(this, t);
                        return (i.s9_1 = A), (i.t9_1 = null), i.ia();
                    }),
                    P(E(Xt), "name", E(Xt).y2),
                    P(E(Xt), "ordinal", E(Xt).z2),
                    P(E(Gt), "name", E(Gt).y2),
                    P(E(Gt), "ordinal", E(Gt).z2),
                    (p = new ss()),
                    cs(t),
                    (t.$jsExportAll$ = cs),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Et),
                    (t.$_$.b = bt),
                    (t.$_$.c = Wt),
                    (t.$_$.d = It),
                    (t.$_$.e = Bi),
                    (t.$_$.f = hi),
                    (t.$_$.g = ei),
                    (t.$_$.h = ni),
                    (t.$_$.i = St),
                    (t.$_$.j = Ft),
                    (t.$_$.k = Tt),
                    (t.$_$.l = function () {
                        return null == j && new oi(), j;
                    }),
                    (t.$_$.m = p);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.1e466eba.js.map
