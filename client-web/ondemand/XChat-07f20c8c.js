(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-07f20c8c"],
    {
        939093: (t, i, s) => {
            !(function (t, i, n, r, h, e) {
                "use strict";
                var _,
                    u,
                    a,
                    c,
                    o,
                    f,
                    l,
                    v,
                    w,
                    q,
                    d,
                    g,
                    y,
                    m,
                    $,
                    R,
                    p,
                    b,
                    x,
                    z,
                    k = Math.imul,
                    E = i.$_$.oe,
                    j = i.$_$.ld,
                    J = i.$_$.g,
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
                    at = h.$_$.k,
                    ct = e.$_$.h,
                    ot = e.$_$.b,
                    ft = e.$_$.u,
                    lt = e.$_$.g,
                    vt = i.$_$.qd,
                    wt = n.$_$.f,
                    qt = i.$_$.c6,
                    dt = i.$_$.oh,
                    gt = i.$_$.yf,
                    yt = i.$_$.fk,
                    mt = i.$_$.of,
                    $t = i.$_$.id,
                    Rt = e.$_$.s,
                    pt = e.$_$.d,
                    bt = e.$_$.f,
                    xt = e.$_$.j,
                    zt = e.$_$.c;
                function kt(t) {
                    St.call(this), (this.bytes = t);
                }
                function Et(t, i) {
                    St.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function jt() {
                    (_ = this), St.call(this);
                }
                function Jt() {
                    return null == _ && new jt(), _;
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
                    (q = !0), (a = new It("InvalidPin", 0, !0)), (c = new It("NotRegistered", 1, !0)), (o = new It("InvalidAuth", 2, !0)), (f = new It("UpgradeRequired", 3, !1)), (l = new It("Assertion", 4, !1)), (v = new It("Transient", 5, !0)), (w = new It("RateLimitExceeded", 6, !0));
                }
                function It(t, i, s) {
                    A.call(this, t, i), (this.retryable = s);
                }
                function Tt() {
                    (d = this), Lt.call(this);
                }
                function Xt() {
                    return null == d && new Tt(), d;
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
                    if (b) return K;
                    (b = !0), (g = new Gt("InvalidAuth", 0, !0)), (y = new Gt("UpgradeRequired", 1, !1)), (m = new Gt("Assertion", 2, !1)), ($ = new Gt("Transient", 3, !0)), (R = new Gt("RateLimitExceeded", 4, !0)), (p = new Gt("StorageFailed", 5, !0));
                }
                function Gt(t, i, s) {
                    A.call(this, t, i), (this.retryable = s);
                }
                function Ht() {
                    return Pt(), a;
                }
                function Bt() {
                    return Pt(), c;
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
                    return Ut(), g;
                }
                function ti() {
                    return Ut(), y;
                }
                function ii() {
                    return Ut(), m;
                }
                function si() {
                    return Ut(), $;
                }
                function ni() {
                    return Ut(), R;
                }
                function ri() {
                    return Ut(), p;
                }
                function hi(t, i) {
                    (this.g9m_1 = t), (this.h9m_1 = i);
                }
                function ei(t, i) {
                    (this.i9m_1 = t), (this.j9m_1 = i);
                }
                function _i(t, i, s, n, r) {
                    L.call(this, r), (this.s9m_1 = t), (this.t9m_1 = i), (this.u9m_1 = s), (this.v9m_1 = n);
                }
                function ui(t, i, s, n, r, h, e) {
                    L.call(this, e), (this.c9o_1 = t), (this.d9o_1 = i), (this.e9o_1 = s), (this.f9o_1 = n), (this.g9o_1 = r), (this.h9o_1 = h);
                }
                function ai(t, i, s, n) {
                    L.call(this, n), (this.m9p_1 = t), (this.n9p_1 = i), (this.o9p_1 = s);
                }
                function ci(t, i, s, n, r) {
                    L.call(this, r), (this.a9q_1 = t), (this.b9q_1 = i), (this.c9q_1 = s), (this.d9q_1 = n);
                }
                function oi() {
                    (x = this), (this.c9p_1 = 1024), (this.d9p_1 = (1024 + ut()) | 0);
                }
                function fi(t, i) {
                    var s = new li(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function li(t, i) {
                    L.call(this, i), (this.t9q_1 = t);
                }
                function vi(t) {
                    return t.crypto;
                }
                function wi(t, i) {
                    return Ei(t.o9n_1, "raw", i);
                }
                function qi(t, i) {
                    return Ei(t.u9q_1, "spki", i);
                }
                function di(t, i) {
                    var s = new Ji(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function gi(t) {
                    var i = vi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        n = s;
                    return at(i.generateKey(n, !0, ["deriveBits"]), t);
                }
                function yi(t) {
                    var i = vi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        n = s;
                    return at(i.generateKey(n, !0, ["encrypt", "decrypt"]), t);
                }
                function mi(t, i, s) {
                    var n = new Ci(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function $i(t, i, s) {
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
                function bi(t, i, s, n) {
                    var r = new Ai(t, i, (s = s === J ? null : s), n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function xi(t, i, s, n) {
                    var r = new Pi(t, i, s, n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function zi(t, i, s, n) {
                    var r = new Ii(t, i, (s = s === J ? null : s), n);
                    return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                }
                function ki(t, i) {
                    var s = new Ti(t, i);
                    return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                }
                function Ei(t, i, s) {
                    return at(vi(window).subtle.exportKey(i, t), s);
                }
                function ji(t, i, s) {
                    return at(vi(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i) {
                    L.call(this, i), (this.d9r_1 = t);
                }
                function Ci(t, i, s) {
                    L.call(this, s), (this.m9r_1 = t), (this.n9r_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.x9r_1 = t), (this.y9r_1 = i);
                }
                function Si(t, i, s) {
                    L.call(this, s), (this.i9s_1 = t), (this.j9s_1 = i);
                }
                function Ki(t, i, s, n) {
                    L.call(this, n), (this.t9s_1 = t), (this.u9s_1 = i), (this.v9s_1 = s);
                }
                function Ai(t, i, s, n) {
                    L.call(this, n), (this.f9t_1 = t), (this.g9t_1 = i), (this.h9t_1 = s);
                }
                function Pi(t, i, s, n) {
                    L.call(this, n), (this.r9t_1 = t), (this.s9t_1 = i), (this.t9t_1 = s);
                }
                function Ii(t, i, s, n) {
                    L.call(this, n), (this.d9u_1 = t), (this.e9u_1 = i), (this.f9u_1 = s);
                }
                function Ti(t, i) {
                    L.call(this, i), (this.p9u_1 = t);
                }
                function Xi(t) {
                    var i = t.s9u_1;
                    return (
                        $t(
                            "juiceboxModule",
                            1,
                            mt,
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
                    (this.l9v_1 = t), L.call(this, i);
                }
                function Mi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Li(t, i),
                                n = function (t) {
                                    return s.m9v(t);
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
                                            e = dt(H(r), h),
                                            _ = i.d98_1.p2(e);
                                        s(null == _ ? null : _.k98_1);
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
                    L.call(this, s), (this.b9v_1 = t), (this.c9v_1 = i);
                }
                function Gi(t, i, s, n, r) {
                    L.call(this, r), (this.v9v_1 = t), (this.w9v_1 = i), (this.x9v_1 = s), (this.y9v_1 = n);
                }
                function Hi(t, i, s, n) {
                    L.call(this, n), (this.k9w_1 = t), (this.l9w_1 = i), (this.m9w_1 = s);
                }
                function Bi() {
                    this.s9u_1 = yt(Mi(this));
                }
                function Di(t, i, s) {
                    var n = new is(t, i, s);
                    return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                }
                function Oi(t, i) {
                    L.call(this, i), (this.k9x_1 = t);
                }
                function Qi(t, i) {
                    L.call(this, i), (this.t9x_1 = t);
                }
                function Vi(t, i, s, n) {
                    L.call(this, n), (this.c9y_1 = t), (this.d9y_1 = i), (this.e9y_1 = s);
                }
                function Yi(t, i, s, n) {
                    L.call(this, n), (this.b9z_1 = t), (this.c9z_1 = i), (this.d9z_1 = s);
                }
                function Zi(t, i, s) {
                    L.call(this, s), (this.ba0_1 = t), (this.ca0_1 = i);
                }
                function ts(t, i, s, n) {
                    L.call(this, n), (this.la0_1 = t), (this.ma0_1 = i), (this.na0_1 = s);
                }
                function is(t, i, s) {
                    L.call(this, s), (this.a9x_1 = t), (this.b9x_1 = i);
                }
                function ss() {
                    this.r9y_1 = 65;
                }
                function ns(t, i) {
                    L.call(this, i), (this.ja1_1 = t);
                }
                function rs(t) {
                    this.o9n_1 = t;
                }
                function hs(t, i) {
                    L.call(this, i), (this.sa1_1 = t);
                }
                function es(t) {
                    this.u9q_1 = t;
                }
                function _s(t, i) {
                    L.call(this, i), (this.ba2_1 = t);
                }
                function us(t) {
                    this.r9u_1 = t;
                }
                function as(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        n = s.dms || (s.dms = {});
                    (n.JuiceboxRecoverPrivateKeyResult = St), (n.JuiceboxRecoverPrivateKeyResult.Success = kt), (n.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = Et), P(n.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), P(n.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ft), (n.JuiceboxRecoverFailureReason = It), (n.JuiceboxRecoverFailureReason.values = Kt), (n.JuiceboxRecoverFailureReason.valueOf = At), P(n.JuiceboxRecoverFailureReason, "InvalidPin", Ht), P(n.JuiceboxRecoverFailureReason, "NotRegistered", Bt), P(n.JuiceboxRecoverFailureReason, "InvalidAuth", Dt), P(n.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), P(n.JuiceboxRecoverFailureReason, "Assertion", Qt), P(n.JuiceboxRecoverFailureReason, "Transient", Vt), P(n.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (n.JuiceboxRegisterPrivateKeyResult = Lt), P(n.JuiceboxRegisterPrivateKeyResult, "Success", Xt), (n.JuiceboxRegisterPrivateKeyResult.Failure = Wt), (n.JuiceboxRegisterFailureReason = Gt), (n.JuiceboxRegisterFailureReason.values = Mt), (n.JuiceboxRegisterFailureReason.valueOf = Nt), P(n.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), P(n.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), P(n.JuiceboxRegisterFailureReason, "Assertion", ii), P(n.JuiceboxRegisterFailureReason, "Transient", si), P(n.JuiceboxRegisterFailureReason, "RateLimitExceeded", ni), P(n.JuiceboxRegisterFailureReason, "StorageFailed", ri);
                }
                j(St, "JuiceboxRecoverPrivateKeyResult"),
                    j(kt, "Success", J, St),
                    j(Et, "JuiceboxFailure", J, St),
                    F(jt, "KeyReconstructionFailure", J, St),
                    F(Ct, "NoJuiceboxTokens", J, St),
                    j(It, "JuiceboxRecoverFailureReason", J, A),
                    j(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    F(Tt, "Success", J, Lt),
                    j(Wt, "Failure", J, Lt),
                    j(Gt, "JuiceboxRegisterFailureReason", J, A),
                    j(hi, "XChatKeyPair"),
                    j(ei, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ui, L),
                    tt(ai, L),
                    tt(ci, L),
                    F(oi, "LibsodiumEncryption", J, J, J, [3, 5, 2]),
                    tt(li, L),
                    tt(Ji, L),
                    tt(Ci, L),
                    tt(Fi, L),
                    tt(Si, L),
                    tt(Ki, L),
                    tt(Ai, L),
                    tt(Pi, L),
                    tt(Ii, L),
                    tt(Ti, L),
                    vt(Li, L, J, [0]),
                    tt(Ui, L),
                    tt(Gi, L),
                    tt(Hi, L),
                    j(Bi, "WebJuiceboxApi", Bi, J, J, [1, 3, 2]),
                    tt(Oi, L),
                    tt(Qi, L),
                    tt(Vi, L),
                    tt(Yi, L),
                    tt(Zi, L),
                    tt(ts, L),
                    tt(is, L),
                    F(ss, "WebKeyFactory", J, J, J, [0, 2, 1, 3]),
                    tt(ns, L),
                    j(rs, "XChatConversationKey", J, J, J, [0]),
                    tt(hs, L),
                    j(es, "XChatPublicKey", J, J, J, [0]),
                    tt(_s, L),
                    j(us, "XChatPrivateKey", J, J, J, [0]),
                    (E(kt).h9a = function () {
                        return this.bytes;
                    }),
                    (E(Et).x9l = function () {
                        return this.reason;
                    }),
                    (E(Et).y9l = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).zg = function () {
                        return this.reason;
                    }),
                    (E(Et).ah = function () {
                        return this.guessesRemaining;
                    }),
                    (E(Et).z9l = function (t, i) {
                        return new Et(t, i);
                    }),
                    (E(Et).copy = function (t, i, s) {
                        return (t = t === J ? this.reason : t), (i = i === J ? this.guessesRemaining : i), this.z9l(t, i);
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
                    (E(jt).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (E(jt).hashCode = function () {
                        return 188209770;
                    }),
                    (E(jt).equals = function (t) {
                        return this === t || (t instanceof jt && (t instanceof jt || C(), !0));
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
                    (E(It).c9m = function () {
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
                    (E(Wt).x9l = function () {
                        return this.reason;
                    }),
                    (E(Wt).zg = function () {
                        return this.reason;
                    }),
                    (E(Wt).d9m = function (t) {
                        return new Wt(t);
                    }),
                    (E(Wt).copy = function (t, i) {
                        return (t = t === J ? this.reason : t), this.d9m(t);
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
                    (E(Gt).c9m = function () {
                        return this.retryable;
                    }),
                    (E(hi).toString = function () {
                        return "XChatKeyPair(public=" + I(this.g9m_1) + ", private=" + I(this.h9m_1) + ")";
                    }),
                    (E(hi).hashCode = function () {
                        var t = T(this.g9m_1);
                        return (t = (k(t, 31) + T(this.h9m_1)) | 0);
                    }),
                    (E(hi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof hi)) return !1;
                        var i = t instanceof hi ? t : C();
                        return !!X(this.g9m_1, i.g9m_1) && !!X(this.h9m_1, i.h9m_1);
                    }),
                    (E(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + I(this.i9m_1) + ", signing=" + W(this.j9m_1) + ")";
                    }),
                    (E(ei).hashCode = function () {
                        var t = T(this.i9m_1);
                        return (t = (k(t, 31) + (null == this.j9m_1 ? 0 : T(this.j9m_1))) | 0);
                    }),
                    (E(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : C();
                        return !!X(this.i9m_1, i.i9m_1) && !!X(this.j9m_1, i.j9m_1);
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
                                        if (((this.r9_1 = 14), (this.r9_1 = 13), (this.y9m_1 = U), (this.q9_1 = 4), (t = this.t9m_1.p9n(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.z9m_1 = t), (this.a9n_1 = G(this.z9m_1)), (this.b9n_1 = this.y9m_1.q9l(this.a9n_1)), (this.c9n_1 = this.b9n_1.zg()), (this.d9n_1 = this.b9n_1.p9k()), (this.q9_1 = 5);
                                        var i = this.d9n_1;
                                        if ((t = this.v9m_1.q9n(H(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.e9n_1 = B(this.d9n_1)), (this.q9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.q9_1 = 7), (t = this.u9m_1.r9n(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.f9n_1 = t), null == this.f9n_1)) {
                                            (this.x9m_1 = !0), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        (this.g9n_1 = this.f9n_1), (this.q9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.h9n_1 = this.g9n_1), (this.q9_1 = 9), (t = this.u9m_1.s9n(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.i9n_1 = O()), (this.q9_1 = 10);
                                            continue t;
                                        }
                                        (this.i9n_1 = D()), (this.q9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.j9n_1 = this.i9n_1;
                                        var s = U,
                                            n = this.h9n_1,
                                            r = G(n),
                                            h = this.j9n_1;
                                        (this.k9n_1 = s.s9l(this.c9n_1, r, J, V(Q(h)))), (this.e9n_1 = (this.e9n_1 + B(this.k9n_1)) | 0), (this.q9_1 = 11);
                                        var e = this.k9n_1;
                                        if ((t = this.v9m_1.q9n(H(e), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.q9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.w9m_1 = K), (this.r9_1 = 20), (this.q9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.r9_1 = 14), this.t9_1 instanceof Z)) {
                                            this.l9n_1 = this.t9_1;
                                            var _ = Y(),
                                                u = this.l9n_1;
                                            if (!_.g5s_1.h())
                                                for (var a = _.g5s_1.s2().p(); a.q(); ) {
                                                    a.r().m2().e(u, "XWS encryptStream failed");
                                                }
                                            (this.x9m_1 = !1), (this.r9_1 = 20), (this.q9_1 = 16);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 14:
                                        if (((this.r9_1 = 20), (this.m9n_1 = this.t9_1), this.u9m_1.x4(), (this.q9_1 = 15), (t = this.v9m_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.v9m_1.x4(), this.m9n_1);
                                    case 16:
                                        if (((this.n9n_1 = this.x9m_1), (this.r9_1 = 20), this.u9m_1.x4(), (this.q9_1 = 17), (t = this.v9m_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.v9m_1.x4(), this.n9n_1;
                                    case 18:
                                        if (((this.r9_1 = 20), this.u9m_1.x4(), (this.q9_1 = 19), (t = this.v9m_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.v9m_1.x4(), K;
                                    case 20:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (20 === this.r9_1) throw c;
                                (this.q9_1 = this.r9_1), (this.t9_1 = c);
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
                                        if (((this.r9_1 = 13), (this.r9_1 = 12), (this.q9_1 = 4), (t = this.e9o_1.r9n(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.k9o_1 = t), null == this.k9o_1)) {
                                            (this.j9o_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.l9o_1 = this.k9o_1), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.m9o_1 = this.l9o_1), (this.n9o_1 = this.m9o_1.length), (this.o9o_1 = U), (this.q9_1 = 6), (t = this.d9o_1.p9n(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.p9o_1 = t), (this.q9o_1 = G(this.p9o_1));
                                        var i = this.m9o_1;
                                        (this.r9o_1 = this.o9o_1.t9l(this.q9o_1, G(i))), (this.s9o_1 = this.r9o_1.zg()), (this.t9o_1 = 0), (this.q9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.q9_1 = 8), (t = this.e9o_1.r9n(this.c9o_1.d9p_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.u9o_1 = t), null == this.u9o_1)) {
                                            (this.j9o_1 = !0), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        (this.v9o_1 = this.u9o_1), (this.q9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.w9o_1 = this.v9o_1), (this.n9o_1 = (this.n9o_1 + this.w9o_1.length) | 0);
                                        var s = U,
                                            n = this.w9o_1;
                                        (this.x9o_1 = s.v9l(this.s9o_1, G(n))), (this.y9o_1 = this.x9o_1.s9k()), (this.q9_1 = 10);
                                        var r = this.y9o_1;
                                        if ((t = this.f9o_1.q9n(H(r), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.h9o_1 && null != this.g9o_1) {
                                            var h = this.n9o_1 / this.g9o_1.bytes.x3();
                                            h > this.t9o_1 + 0.1 && (this.h9o_1(h), (this.t9o_1 = h));
                                        }
                                        this.q9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.i9o_1 = K), (this.r9_1 = 19), (this.q9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.r9_1 = 13), this.t9_1 instanceof Z)) {
                                            this.z9o_1 = this.t9_1;
                                            var e = Y(),
                                                _ = this.z9o_1;
                                            if (!e.g5s_1.h())
                                                for (var u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(_, "XWS decryptStream failed");
                                                }
                                            (this.j9o_1 = !1), (this.r9_1 = 19), (this.q9_1 = 15);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 13:
                                        if (((this.r9_1 = 19), (this.a9p_1 = this.t9_1), this.e9o_1.x4(), (this.q9_1 = 14), (t = this.f9o_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.f9o_1.x4(), this.a9p_1);
                                    case 15:
                                        if (((this.b9p_1 = this.j9o_1), (this.r9_1 = 19), this.e9o_1.x4(), (this.q9_1 = 16), (t = this.f9o_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.f9o_1.x4(), this.b9p_1;
                                    case 17:
                                        if (((this.r9_1 = 19), this.e9o_1.x4(), (this.q9_1 = 18), (t = this.f9o_1.t9n(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.f9o_1.x4(), K;
                                    case 19:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (19 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
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
                                        (this.r9_1 = 3), (this.p9p_1 = st.w9l(nt())), (this.q9p_1 = rt);
                                        var i = this.o9p_1;
                                        if (((this.r9p_1 = G(i)), (this.q9_1 = 2), (t = this.n9p_1.p9n(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = G(t),
                                            n = this.q9p_1.o9l(this.r9p_1, this.p9p_1, s),
                                            r = this.p9p_1,
                                            h = H(r),
                                            e = H(n),
                                            _ = G(ht([h, e]));
                                        return H(_).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var u = this.t9_1,
                                                a = Y();
                                            if (!a.g5s_1.h())
                                                for (var c = a.g5s_1.s2().p(); c.q(); ) {
                                                    c.r().m2().e(u, "XWS encryptMessage failed");
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
                    (E(ci).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.r9_1 = 3;
                                        var i = _t(this.c9q_1, et(0, nt()));
                                        this.e9q_1 = G(i.slice());
                                        var s = _t(this.c9q_1, et(nt(), this.c9q_1.length));
                                        if (((this.f9q_1 = G(s.slice())), (this.g9q_1 = rt), (this.q9_1 = 2), (t = this.b9q_1.p9n(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var n = G(t),
                                            r = this.g9q_1.p9l(this.f9q_1, this.e9q_1, n);
                                        return H(r).slice();
                                    case 3:
                                        if (((this.r9_1 = 4), this.t9_1 instanceof Z)) {
                                            var h = this.t9_1,
                                                e = Y();
                                            if (!e.g5s_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.d9q_1, u = e.g5s_1.s2().p(); u.q(); ) {
                                                    u.r().m2().e(h, _);
                                                }
                                            return null;
                                        }
                                        throw this.t9_1;
                                    case 4:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (4 === this.r9_1) throw a;
                                (this.q9_1 = this.r9_1), (this.t9_1 = a);
                            }
                    }),
                    (E(oi).h9q = function (t, i, s, n) {
                        var r = new _i(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(oi).i9q = function (t, i, s, n, r, h) {
                        var e = new ui(this, t, i, s, n, r, h);
                        return (e.s9_1 = K), (e.t9_1 = null), e.ia();
                    }),
                    (E(oi).j9q = function (t, i, s) {
                        var n = new ai(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(oi).k9q = function (t, i, s, n) {
                        var r = new ci(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 3), this.t9q_1.xo())) {
                                            this.q9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.q9_1 = 1), (t = this.t9q_1.n9l(this)) === N())) return t;
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
                    (E(Ji).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ji(this.d9r_1.r9u_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
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
                                        if (((s.public = this.m9r_1), (t = at(i.deriveBits(s, this.n9r_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.o9r_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var h = r.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.o9r_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.o9r_1;
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
                                        if (((this.r9_1 = 3), (this.r9_1 = 2), (this.q9_1 = 1), (t = at(vi(window).subtle.digest("SHA-256", lt([this.x9r_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.y9r_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.z9r_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var i = this.t9_1,
                                                s = Y();
                                            if (!s.g5s_1.h())
                                                for (var n = s.g5s_1.s2().p(); n.q(); ) {
                                                    n.r().m2().e(i, null);
                                                }
                                            (this.z9r_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.z9r_1;
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
                                            n = [this.j9s_1];
                                        if ((t = at(i.importKey("raw", this.i9s_1, s, !1, n), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.k9s_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.k9s_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.k9s_1;
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
                                        if (((s.iv = this.v9s_1), (t = at(i.encrypt(s, this.t9s_1, this.u9s_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.w9s_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var h = r.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.w9s_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.w9s_1;
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
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.h9t_1 ? [] : [this.h9t_1]), (t = at(s.importKey(this.f9t_1, this.g9t_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.i9t_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.i9t_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.i9t_1;
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
                                        if (((s.iv = this.r9t_1), (t = at(i.decrypt(s, this.s9t_1, this.t9t_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.u9t_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var h = r.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.u9t_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.u9t_1;
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
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.f9u_1 ? [] : [this.f9u_1]), (t = at(s.importKey(this.d9u_1, this.e9u_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.g9u_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var r = this.t9_1,
                                                h = Y();
                                            if (!h.g5s_1.h())
                                                for (var e = h.g5s_1.s2().p(); e.q(); ) {
                                                    e.r().m2().e(r, null);
                                                }
                                            (this.g9u_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.g9u_1;
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
                                        if ((t = at(i.importKey("raw", this.p9u_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.q9u_1 = t), (this.r9_1 = 3), (this.q9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.r9_1 = 3), this.t9_1 instanceof Error)) {
                                            var n = this.t9_1,
                                                r = Y();
                                            if (!r.g5s_1.h())
                                                for (var h = r.g5s_1.s2().p(); h.q(); ) {
                                                    h.r().m2().e(n, null);
                                                }
                                            (this.q9u_1 = null), (this.q9_1 = 4);
                                            continue t;
                                        }
                                        throw this.t9_1;
                                    case 3:
                                        throw this.t9_1;
                                    case 4:
                                        return (this.r9_1 = 3), this.q9u_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.r9_1) throw e;
                                (this.q9_1 = this.r9_1), (this.t9_1 = e);
                            }
                    }),
                    (E(Li).m9v = function (t) {
                        var i = this.ma(t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(Li).k2g = function (t) {
                        return this.m9v(t);
                    }),
                    (E(Li).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = at((this.l9v_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new Li(this.l9v_1, t);
                    }),
                    (E(Ui).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = Xi(this.b9v_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            n = i.Client;
                                        return (window.JuiceboxGetAuthToken = Ni(this.c9v_1)), new n(new s(this.c9v_1.i98_1), []);
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Xi(this.v9v_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.z9v_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.g5s_1.h())
                                            for (var r = "XWS " + I(this.x9v_1.d98_1), h = n.g5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.v9v_1, this.x9v_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.b9w_1 = t), (this.q9_1 = 3), (t = at(this.b9w_1.register(gt(this.w9v_1), this.y9v_1, new Int8Array(0), this.x9v_1.e98_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.a9w_1 = Xt()), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var e = this.t9_1,
                                            _ = e == this.z9v_1.RegisterError.InvalidAuth ? Zt() : e == this.z9v_1.RegisterError.UpgradeRequired ? ti() : e == this.z9v_1.RegisterError.Assertion ? ii() : e == this.z9v_1.RegisterError.Transient ? si() : e == this.z9v_1.RegisterError.RateLimitExceeded ? ni() : si();
                                        (this.a9w_1 = new Wt(_)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.a9w_1;
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
                                        if (((this.r9_1 = 6), (this.q9_1 = 1), (t = Xi(this.k9w_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.n9w_1 = t), (this.r9_1 = 4);
                                        var i = Y();
                                        if (!i.g5s_1.h())
                                            for (var s = i.g5s_1.s2().p(); s.q(); ) {
                                                s.r().m2().d("XWS Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.g5s_1.h())
                                            for (var r = "XWS " + I(this.m9w_1.d98_1), h = n.g5s_1.s2().p(); h.q(); ) {
                                                h.r().m2().d(r, null);
                                            }
                                        if (((this.q9_1 = 2), (t = Wi(this.k9w_1, this.m9w_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.p9w_1 = t), (this.q9_1 = 3), (t = at(this.p9w_1.recover(gt(this.l9w_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.o9w_1 = new kt(e)), (this.r9_1 = 6), (this.q9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.r9_1 = 6;
                                        var _ = this.t9_1,
                                            u = _.reason,
                                            a = u == this.n9w_1.RecoverErrorReason.InvalidPin ? Ht() : u == this.n9w_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.n9w_1.RecoverErrorReason.InvalidAuth ? Dt() : u == this.n9w_1.RecoverErrorReason.UpgradeRequired ? Ot() : u == this.n9w_1.RecoverErrorReason.Assertion ? Qt() : u == this.n9w_1.RecoverErrorReason.Transient ? Vt() : u == this.n9w_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.o9w_1 = new Et(a, _.guesses_remaining)), (this.q9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.r9_1 = 6), this.o9w_1;
                                    case 6:
                                        throw this.t9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (6 === this.r9_1) throw c;
                                (this.q9_1 = this.r9_1), (this.t9_1 = c);
                            }
                    }),
                    (E(Bi).q9w = function (t, i, s, n) {
                        var r = new Gi(this, t, i, s, n);
                        return (r.s9_1 = K), (r.t9_1 = null), r.ia();
                    }),
                    (E(Bi).r9w = function (t, i, s) {
                        var n = new Hi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(Oi).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = gi(this)) === N())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = yi(this)) === N())) return t;
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
                                        if (((this.r9_1 = 8), (this.q9_1 = 1), (t = this.c9y_1.s9y(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.f9y_1 = t), (this.q9_1 = 2), (t = mi(this.d9y_1.u9q_1, this.f9y_1.h9m_1.r9u_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.g9y_1 = t;
                                        var i;
                                        if (null == this.g9y_1) return null;
                                        if (((i = this.g9y_1), (this.h9y_1 = i), (this.q9_1 = 3), (t = qi(this.f9y_1.g9m_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.i9y_1 = t), (this.j9y_1 = Rt(this.i9y_1, 65)), (this.q9_1 = 4), (t = $i(this.h9y_1, this.j9y_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.k9y_1 = t;
                                        var s;
                                        if (null == this.k9y_1) return null;
                                        if (((s = this.k9y_1), (this.l9y_1 = s), (this.m9y_1 = this.l9y_1.slice(0, 16)), (this.n9y_1 = this.l9y_1.slice(16, 32)), (this.q9_1 = 5), (t = Ri(this.m9y_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.o9y_1 = t;
                                        var n;
                                        if (null == this.o9y_1) return null;
                                        if (((n = this.o9y_1), (this.p9y_1 = n), (this.q9_1 = 6), (t = wi(this.e9y_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.q9y_1 = t), (this.q9_1 = 7), (t = pi(this.p9y_1, this.q9y_1, this.n9y_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var r = t;
                                        return pt(lt([this.j9y_1, r]));
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
                                        if (((this.r9_1 = 7), (this.e9z_1 = ot(this.d9z_1)), (this.f9z_1 = this.e9z_1.slice(0, 65)), (this.g9z_1 = this.e9z_1.slice(65)), (this.q9_1 = 1), (t = bi("raw", this.f9z_1, J, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.h9z_1 = t;
                                        var i;
                                        if (null == this.h9z_1) return null;
                                        if (((i = this.h9z_1), (this.i9z_1 = i), (this.q9_1 = 2), (t = mi(this.i9z_1, this.c9z_1.r9u_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.j9z_1 = t;
                                        var s;
                                        if (null == this.j9z_1) return null;
                                        if (((s = this.j9z_1), (this.k9z_1 = s), (this.q9_1 = 3), (t = $i(this.k9z_1, this.f9z_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.l9z_1 = t;
                                        var n;
                                        if (null == this.l9z_1) return null;
                                        if (((n = this.l9z_1), (this.m9z_1 = n), (this.n9z_1 = this.m9z_1.slice(0, 16)), (this.o9z_1 = this.m9z_1.slice(16, 32)), (this.q9_1 = 4), (t = Ri(this.n9z_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.p9z_1 = t;
                                        var r;
                                        if (null == this.p9z_1) return null;
                                        if (((r = this.p9z_1), (this.q9z_1 = r), (this.q9_1 = 5), (t = xi(this.o9z_1, this.q9z_1, this.g9z_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.r9z_1 = t;
                                        var h;
                                        if (null == this.r9z_1) return null;
                                        if (((h = this.r9z_1), (this.s9z_1 = h), (this.q9_1 = 6), (t = Di(this.b9z_1, this.s9z_1, this)) === N())) return t;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = bi("spki", bt(this.ca0_1), J, this)) === N())) return t;
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
                                        if (((this.r9_1 = 4), (this.q9_1 = 1), (s = bi("spki", bt(this.na0_1), J, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.oa0_1 = s;
                                        var n;
                                        if (null == this.oa0_1) n = null;
                                        else n = new es(this.oa0_1);
                                        this.pa0_1 = n;
                                        var r;
                                        if (null == this.pa0_1) return null;
                                        if (((r = this.pa0_1), (this.qa0_1 = r), (this.q9_1 = 2), (t = this.qa0_1), (i = this), (s = ji(t.u9q_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.ra0_1 = s;
                                        var h = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((h.d = xt(this.ma0_1, !0)), (h.x = this.ra0_1.x), (h.y = this.ra0_1.y), (this.sa0_1 = h), (this.q9_1 = 3), (s = zi("jwk", this.sa0_1, "deriveBits", this)) === N())) return s;
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
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = ki(this.b9x_1, this)) === N())) return t;
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
                    (E(ss).s9y = function (t) {
                        var i = new Oi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).ta0 = function (t) {
                        var i = new Qi(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(ss).ua0 = function (t, i, s) {
                        var n = new Vi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).va0 = function (t, i, s) {
                        var n = new Yi(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).wa0 = function (t, i) {
                        var s = new Zi(this, t, i);
                        return (s.s9_1 = K), (s.t9_1 = null), s.ia();
                    }),
                    (E(ss).xa0 = function (t, i, s) {
                        var n = new ts(this, t, i, s);
                        return (n.s9_1 = K), (n.t9_1 = null), n.ia();
                    }),
                    (E(ss).ya0 = function (t, i) {
                        return Di(this, bt(t), i);
                    }),
                    (E(ss).za0 = function (t, i, s) {
                        return null;
                    }),
                    (E(ss).aa1 = function (t, i, s, n) {
                        return !1;
                    }),
                    (E(ns).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = wi(this.ja1_1, this)) === N())) return t;
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
                    (E(rs).p9n = function (t) {
                        var i = new ns(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(hs).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = qi(this.sa1_1, this)) === N())) return t;
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
                    (E(es).p9n = function (t) {
                        var i = new hs(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    (E(_s).ia = function () {
                        var t = this.s9_1;
                        t: for (;;)
                            try {
                                switch (this.q9_1) {
                                    case 0:
                                        if (((this.r9_1 = 2), (this.q9_1 = 1), (t = di(this.ba2_1, this)) === N())) return t;
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
                    (E(us).p9n = function (t) {
                        var i = new _s(this, t);
                        return (i.s9_1 = K), (i.t9_1 = null), i.ia();
                    }),
                    P(E(It), "name", E(It).y2),
                    P(E(It), "ordinal", E(It).z2),
                    P(E(Gt), "name", E(Gt).y2),
                    P(E(Gt), "ordinal", E(Gt).z2),
                    (z = new ss()),
                    as(t),
                    (t.$jsExportAll$ = as),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Et),
                    (t.$_$.b = kt),
                    (t.$_$.c = Wt),
                    (t.$_$.d = Tt),
                    (t.$_$.e = Bi),
                    (t.$_$.f = hi),
                    (t.$_$.g = ei),
                    (t.$_$.h = ri),
                    (t.$_$.i = Jt),
                    (t.$_$.j = Ft),
                    (t.$_$.k = Xt),
                    (t.$_$.l = function () {
                        return null == x && new oi(), x;
                    }),
                    (t.$_$.m = z);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-07f20c8c.38b9a2aa.js.map
