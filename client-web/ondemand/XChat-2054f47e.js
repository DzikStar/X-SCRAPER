(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, n, h, a, e) {
                "use strict";
                var r,
                    _,
                    u,
                    c,
                    o,
                    f,
                    l,
                    w,
                    v,
                    x,
                    y,
                    z,
                    d,
                    b,
                    $,
                    m,
                    R,
                    g,
                    p,
                    k,
                    q = Math.imul,
                    S = i.$_$.te,
                    E = i.$_$.qd,
                    j = i.$_$.g,
                    J = i.$_$.kj,
                    C = i.$_$.wd,
                    A = i.$_$.lj,
                    F = i.$_$.o6,
                    K = i.$_$.xi,
                    X = i.$_$.fd,
                    P = i.$_$.xe,
                    W = i.$_$.pd,
                    I = i.$_$.hd,
                    T = i.$_$.wk,
                    L = i.$_$.qc,
                    M = n.$_$.j,
                    N = i.$_$.bc,
                    U = n.$_$.h,
                    H = i.$_$.e4,
                    D = i.$_$.k4,
                    G = i.$_$.j4,
                    B = n.$_$.e,
                    O = n.$_$.d,
                    Q = i.$_$.ue,
                    V = i.$_$.a4,
                    Y = h.$_$.d,
                    Z = i.$_$.zi,
                    tt = i.$_$.sd,
                    it = n.$_$.c,
                    st = n.$_$.i,
                    nt = n.$_$.a,
                    ht = n.$_$.g,
                    at = i.$_$.f,
                    et = i.$_$.of,
                    rt = i.$_$.cb,
                    _t = n.$_$.b,
                    ut = a.$_$.k,
                    ct = e.$_$.h,
                    ot = e.$_$.b,
                    ft = e.$_$.v,
                    lt = e.$_$.g,
                    wt = i.$_$.vd,
                    vt = n.$_$.f,
                    xt = i.$_$.d6,
                    yt = i.$_$.th,
                    zt = i.$_$.dg,
                    dt = i.$_$.kk,
                    bt = i.$_$.tf,
                    $t = i.$_$.nd,
                    mt = e.$_$.t,
                    Rt = e.$_$.d,
                    gt = e.$_$.f,
                    pt = e.$_$.k,
                    kt = e.$_$.c;
                function qt(t) {
                    At.call(this), (this.bytes = t);
                }
                function St(t, i) {
                    At.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Et() {
                    (r = this), At.call(this);
                }
                function jt() {
                    return null == r && new Et(), r;
                }
                function Jt() {
                    (_ = this), At.call(this);
                }
                function Ct() {
                    return null == _ && new Jt(), _;
                }
                function At() {}
                function Ft() {
                    return [Dt(), Gt(), Bt(), Ot(), Qt(), Vt(), Yt()];
                }
                function Kt(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Dt();
                        case "NotRegistered":
                            return Gt();
                        case "InvalidAuth":
                            return Bt();
                        case "UpgradeRequired":
                            return Ot();
                        case "Assertion":
                            return Qt();
                        case "Transient":
                            return Vt();
                        case "RateLimitExceeded":
                            return Yt();
                        default:
                            Xt(), A("No enum constant value.");
                    }
                }
                function Xt() {
                    if (x) return F;
                    (x = !0), (u = new Pt("InvalidPin", 0, !0)), (c = new Pt("NotRegistered", 1, !0)), (o = new Pt("InvalidAuth", 2, !0)), (f = new Pt("UpgradeRequired", 3, !1)), (l = new Pt("Assertion", 4, !1)), (w = new Pt("Transient", 5, !0)), (v = new Pt("RateLimitExceeded", 6, !0));
                }
                function Pt(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Wt() {
                    (y = this), Lt.call(this);
                }
                function It() {
                    return null == y && new Wt(), y;
                }
                function Tt(t) {
                    Lt.call(this), (this.reason = t);
                }
                function Lt() {}
                function Mt() {
                    return [Zt(), ti(), ii(), si(), ni(), hi()];
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
                            return hi();
                        default:
                            Ut(), A("No enum constant value.");
                    }
                }
                function Ut() {
                    if (g) return F;
                    (g = !0), (z = new Ht("InvalidAuth", 0, !0)), (d = new Ht("UpgradeRequired", 1, !1)), (b = new Ht("Assertion", 2, !1)), ($ = new Ht("Transient", 3, !0)), (m = new Ht("RateLimitExceeded", 4, !0)), (R = new Ht("StorageFailed", 5, !0));
                }
                function Ht(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Dt() {
                    return Xt(), u;
                }
                function Gt() {
                    return Xt(), c;
                }
                function Bt() {
                    return Xt(), o;
                }
                function Ot() {
                    return Xt(), f;
                }
                function Qt() {
                    return Xt(), l;
                }
                function Vt() {
                    return Xt(), w;
                }
                function Yt() {
                    return Xt(), v;
                }
                function Zt() {
                    return Ut(), z;
                }
                function ti() {
                    return Ut(), d;
                }
                function ii() {
                    return Ut(), b;
                }
                function si() {
                    return Ut(), $;
                }
                function ni() {
                    return Ut(), m;
                }
                function hi() {
                    return Ut(), R;
                }
                function ai(t, i) {
                    (this.wak_1 = t), (this.xak_1 = i);
                }
                function ei(t, i) {
                    (this.yak_1 = t), (this.zak_1 = i);
                }
                function ri(t, i, s, n, h) {
                    L.call(this, h), (this.ial_1 = t), (this.jal_1 = i), (this.kal_1 = s), (this.lal_1 = n);
                }
                function _i(t, i, s, n, h, a, e) {
                    L.call(this, e), (this.sam_1 = t), (this.tam_1 = i), (this.uam_1 = s), (this.vam_1 = n), (this.wam_1 = h), (this.xam_1 = a);
                }
                function ui(t, i, s, n) {
                    L.call(this, n), (this.cao_1 = t), (this.dao_1 = i), (this.eao_1 = s);
                }
                function ci(t, i, s, n, h) {
                    L.call(this, h), (this.qao_1 = t), (this.rao_1 = i), (this.sao_1 = s), (this.tao_1 = n);
                }
                function oi() {
                    (p = this), (this.san_1 = 1024), (this.tan_1 = (1024 + _t()) | 0);
                }
                function fi(t, i) {
                    var s = new li(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function li(t, i) {
                    L.call(this, i), (this.jap_1 = t);
                }
                function wi(t) {
                    return t.crypto;
                }
                function vi(t, i) {
                    return ji(t.eam_1, "raw", i);
                }
                function xi(t, i) {
                    return ji(t.kap_1, "spki", i);
                }
                function yi(t, i) {
                    var s = new Ci(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function zi(t) {
                    var i = wi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        n = s;
                    return ut(i.generateKey(n, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = wi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        n = s;
                    return ut(i.generateKey(n, !0, ["encrypt", "decrypt"]), t);
                }
                function bi(t, i, s) {
                    var n = new Ai(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function $i(t, i, s) {
                    var n = new Fi(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function mi(t, i, s) {
                    var n = new Ki(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Ri(t, i, s, n) {
                    var h = new Xi(t, i, s, n);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function gi(t, i, s, n) {
                    var h = new Pi(t, i, (s = s === j ? null : s), n);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function pi(t, i, s, n) {
                    var h = new Wi(t, i, s, n);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function ki(t, i, s, n) {
                    var h = new Ii(t, i, (s = s === j ? null : s), n);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function qi(t, i, s) {
                    var n = new Ti(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Si(t, i, s, n) {
                    var h = new Li(t, i, s, n);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Ei(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function ji(t, i, s) {
                    return ut(wi(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i, s) {
                    return ut(wi(window).subtle.exportKey(i, t), s);
                }
                function Ci(t, i) {
                    L.call(this, i), (this.tap_1 = t);
                }
                function Ai(t, i, s) {
                    L.call(this, s), (this.caq_1 = t), (this.daq_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.naq_1 = t), (this.oaq_1 = i);
                }
                function Ki(t, i, s) {
                    L.call(this, s), (this.yaq_1 = t), (this.zaq_1 = i);
                }
                function Xi(t, i, s, n) {
                    L.call(this, n), (this.jar_1 = t), (this.kar_1 = i), (this.lar_1 = s);
                }
                function Pi(t, i, s, n) {
                    L.call(this, n), (this.var_1 = t), (this.war_1 = i), (this.xar_1 = s);
                }
                function Wi(t, i, s, n) {
                    L.call(this, n), (this.has_1 = t), (this.ias_1 = i), (this.jas_1 = s);
                }
                function Ii(t, i, s, n) {
                    L.call(this, n), (this.tas_1 = t), (this.uas_1 = i), (this.vas_1 = s);
                }
                function Ti(t, i, s) {
                    L.call(this, s), (this.fat_1 = t), (this.gat_1 = i);
                }
                function Li(t, i, s, n) {
                    L.call(this, n), (this.qat_1 = t), (this.rat_1 = i), (this.sat_1 = s);
                }
                function Mi(t, i) {
                    L.call(this, i), (this.cau_1 = t);
                }
                function Ni(t) {
                    var i = t.fau_1;
                    return (
                        $t(
                            "juiceboxModule",
                            1,
                            bt,
                            function (t) {
                                return Ni(t);
                            },
                            null,
                        ),
                        i.n2()
                    );
                }
                function Ui(t, i, s) {
                    var n = new Bi(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Hi(t, i) {
                    (this.yau_1 = t), L.call(this, i);
                }
                function Di(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Hi(t, i),
                                n = function (t) {
                                    return s.zau(t);
                                };
                            return (n.$arity = 0), n;
                        })(t, null);
                    };
                }
                function Gi(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, n) {
                                    try {
                                        var h = vt(t),
                                            a = xt().fn_1,
                                            e = yt(D(h), a),
                                            r = i.m9b_1.q2(e);
                                        s(null == r ? null : r.t9b_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        n(t);
                                    }
                                    return F;
                                };
                            })(i, t),
                        );
                    };
                }
                function Bi(t, i, s) {
                    L.call(this, s), (this.oau_1 = t), (this.pau_1 = i);
                }
                function Oi(t, i, s, n, h) {
                    L.call(this, h), (this.iav_1 = t), (this.jav_1 = i), (this.kav_1 = s), (this.lav_1 = n);
                }
                function Qi(t, i, s, n) {
                    L.call(this, n), (this.xav_1 = t), (this.yav_1 = i), (this.zav_1 = s);
                }
                function Vi() {
                    this.fau_1 = dt(Di(this));
                }
                function Yi(t, i, s) {
                    var n = new rs(t, i, s);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Zi(t, i) {
                    L.call(this, i), (this.xaw_1 = t);
                }
                function ts(t, i) {
                    L.call(this, i), (this.gax_1 = t);
                }
                function is(t, i, s, n) {
                    L.call(this, n), (this.pax_1 = t), (this.qax_1 = i), (this.rax_1 = s);
                }
                function ss(t, i, s, n) {
                    L.call(this, n), (this.pay_1 = t), (this.qay_1 = i), (this.ray_1 = s);
                }
                function ns(t, i, s) {
                    L.call(this, s), (this.paz_1 = t), (this.qaz_1 = i);
                }
                function hs(t, i, s, n) {
                    L.call(this, n), (this.zaz_1 = t), (this.ab0_1 = i), (this.bb0_1 = s);
                }
                function as(t, i, s, n) {
                    L.call(this, n), (this.pb0_1 = t), (this.qb0_1 = i), (this.rb0_1 = s);
                }
                function es(t, i, s, n, h) {
                    L.call(this, h), (this.ab1_1 = t), (this.bb1_1 = i), (this.cb1_1 = s), (this.db1_1 = n);
                }
                function rs(t, i, s) {
                    L.call(this, s), (this.naw_1 = t), (this.oaw_1 = i);
                }
                function _s() {
                    this.fay_1 = 65;
                }
                function us(t, i) {
                    L.call(this, i), (this.ub1_1 = t);
                }
                function cs(t) {
                    this.eam_1 = t;
                }
                function os(t, i) {
                    L.call(this, i), (this.db2_1 = t);
                }
                function fs(t) {
                    this.kap_1 = t;
                }
                function ls(t, i) {
                    L.call(this, i), (this.mb2_1 = t);
                }
                function ws(t) {
                    this.eau_1 = t;
                }
                function vs(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        n = s.dms || (s.dms = {});
                    (n.JuiceboxRecoverPrivateKeyResult = At), (n.JuiceboxRecoverPrivateKeyResult.Success = qt), (n.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = St), X(n.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", jt), X(n.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (n.JuiceboxRecoverFailureReason = Pt), (n.JuiceboxRecoverFailureReason.values = Ft), (n.JuiceboxRecoverFailureReason.valueOf = Kt), X(n.JuiceboxRecoverFailureReason, "InvalidPin", Dt), X(n.JuiceboxRecoverFailureReason, "NotRegistered", Gt), X(n.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), X(n.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), X(n.JuiceboxRecoverFailureReason, "Assertion", Qt), X(n.JuiceboxRecoverFailureReason, "Transient", Vt), X(n.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (n.JuiceboxRegisterPrivateKeyResult = Lt), X(n.JuiceboxRegisterPrivateKeyResult, "Success", It), (n.JuiceboxRegisterPrivateKeyResult.Failure = Tt), (n.JuiceboxRegisterFailureReason = Ht), (n.JuiceboxRegisterFailureReason.values = Mt), (n.JuiceboxRegisterFailureReason.valueOf = Nt), X(n.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), X(n.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), X(n.JuiceboxRegisterFailureReason, "Assertion", ii), X(n.JuiceboxRegisterFailureReason, "Transient", si), X(n.JuiceboxRegisterFailureReason, "RateLimitExceeded", ni), X(n.JuiceboxRegisterFailureReason, "StorageFailed", hi);
                }
                E(At, "JuiceboxRecoverPrivateKeyResult"),
                    E(qt, "Success", j, At),
                    E(St, "JuiceboxFailure", j, At),
                    C(Et, "KeyReconstructionFailure", j, At),
                    C(Jt, "NoJuiceboxTokens", j, At),
                    E(Pt, "JuiceboxRecoverFailureReason", j, K),
                    E(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    C(Wt, "Success", j, Lt),
                    E(Tt, "Failure", j, Lt),
                    E(Ht, "JuiceboxRegisterFailureReason", j, K),
                    E(ai, "XChatKeyPair"),
                    E(ei, "XChatPrivateKeys"),
                    tt(ri, L),
                    tt(_i, L),
                    tt(ui, L),
                    tt(ci, L),
                    C(oi, "LibsodiumEncryption", j, j, j, [3, 5, 2]),
                    tt(li, L),
                    tt(Ci, L),
                    tt(Ai, L),
                    tt(Fi, L),
                    tt(Ki, L),
                    tt(Xi, L),
                    tt(Pi, L),
                    tt(Wi, L),
                    tt(Ii, L),
                    tt(Ti, L),
                    tt(Li, L),
                    tt(Mi, L),
                    wt(Hi, L, j, [0]),
                    tt(Bi, L),
                    tt(Oi, L),
                    tt(Qi, L),
                    E(Vi, "WebJuiceboxApi", Vi, j, j, [1, 3, 2]),
                    tt(Zi, L),
                    tt(ts, L),
                    tt(is, L),
                    tt(ss, L),
                    tt(ns, L),
                    tt(hs, L),
                    tt(as, L),
                    tt(es, L),
                    tt(rs, L),
                    C(_s, "WebKeyFactory", j, j, j, [0, 2, 1, 3]),
                    tt(us, L),
                    E(cs, "XChatConversationKey", j, j, j, [0]),
                    tt(os, L),
                    E(fs, "XChatPublicKey", j, j, j, [0]),
                    tt(ls, L),
                    E(ws, "XChatPrivateKey", j, j, j, [0]),
                    (S(qt).p9d = function () {
                        return this.bytes;
                    }),
                    (S(St).nak = function () {
                        return this.reason;
                    }),
                    (S(St).oak = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).fh = function () {
                        return this.reason;
                    }),
                    (S(St).gh = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).pak = function (t, i) {
                        return new St(t, i);
                    }),
                    (S(St).copy = function (t, i, s) {
                        return (t = t === j ? this.reason : t), (i = i === j ? this.guessesRemaining : i), this.pak(t, i);
                    }),
                    (S(St).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (S(St).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (q(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (S(St).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof St)) return !1;
                        var i = t instanceof St ? t : J();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (S(Et).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (S(Et).hashCode = function () {
                        return 188209770;
                    }),
                    (S(Et).equals = function (t) {
                        return this === t || (t instanceof Et && (t instanceof Et || J(), !0));
                    }),
                    (S(Jt).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (S(Jt).hashCode = function () {
                        return 1362829865;
                    }),
                    (S(Jt).equals = function (t) {
                        return this === t || (t instanceof Jt && (t instanceof Jt || J(), !0));
                    }),
                    (S(Pt).sak = function () {
                        return this.retryable;
                    }),
                    (S(Wt).toString = function () {
                        return "Success";
                    }),
                    (S(Wt).hashCode = function () {
                        return 1551298723;
                    }),
                    (S(Wt).equals = function (t) {
                        return this === t || (t instanceof Wt && (t instanceof Wt || J(), !0));
                    }),
                    (S(Tt).nak = function () {
                        return this.reason;
                    }),
                    (S(Tt).fh = function () {
                        return this.reason;
                    }),
                    (S(Tt).tak = function (t) {
                        return new Tt(t);
                    }),
                    (S(Tt).copy = function (t, i) {
                        return (t = t === j ? this.reason : t), this.tak(t);
                    }),
                    (S(Tt).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (S(Tt).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (S(Tt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Tt)) return !1;
                        var i = t instanceof Tt ? t : J();
                        return !!this.reason.equals(i.reason);
                    }),
                    (S(Ht).sak = function () {
                        return this.retryable;
                    }),
                    (S(ai).toString = function () {
                        return "XChatKeyPair(public=" + P(this.wak_1) + ", private=" + P(this.xak_1) + ")";
                    }),
                    (S(ai).hashCode = function () {
                        var t = W(this.wak_1);
                        return (t = (q(t, 31) + W(this.xak_1)) | 0);
                    }),
                    (S(ai).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ai)) return !1;
                        var i = t instanceof ai ? t : J();
                        return !!I(this.wak_1, i.wak_1) && !!I(this.xak_1, i.xak_1);
                    }),
                    (S(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + P(this.yak_1) + ", signing=" + T(this.zak_1) + ")";
                    }),
                    (S(ei).hashCode = function () {
                        var t = W(this.yak_1);
                        return (t = (q(t, 31) + (null == this.zak_1 ? 0 : W(this.zak_1))) | 0);
                    }),
                    (S(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : J();
                        return !!I(this.yak_1, i.yak_1) && !!I(this.zak_1, i.zak_1);
                    }),
                    (S(ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.oal_1 = U), (this.w9_1 = 4), (t = this.jal_1.fam(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.pal_1 = t), (this.qal_1 = H(this.pal_1)), (this.ral_1 = this.oal_1.gak(this.qal_1)), (this.sal_1 = this.ral_1.fh()), (this.tal_1 = this.ral_1.faj()), (this.w9_1 = 5);
                                        var i = this.tal_1;
                                        if ((t = this.lal_1.gam(D(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.ual_1 = G(this.tal_1)), (this.w9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.kal_1.ham(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.val_1 = t), null == this.val_1)) {
                                            (this.nal_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.wal_1 = this.val_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.xal_1 = this.wal_1), (this.w9_1 = 9), (t = this.kal_1.iam(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.yal_1 = O()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.yal_1 = B()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.zal_1 = this.yal_1;
                                        var s = U,
                                            n = this.xal_1,
                                            h = H(n),
                                            a = this.zal_1;
                                        (this.aam_1 = s.iak(this.sal_1, h, j, V(Q(a)))), (this.ual_1 = (this.ual_1 + G(this.aam_1)) | 0), (this.w9_1 = 11);
                                        var e = this.aam_1;
                                        if ((t = this.lal_1.gam(D(e), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.mal_1 = F), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof Z)) {
                                            this.bam_1 = this.z9_1;
                                            var r = Y(),
                                                _ = this.bam_1;
                                            if (!r.f5s_1.h())
                                                for (var u = r.f5s_1.t2().p(); u.q(); ) {
                                                    u.r().n2().e("XWS", _, "encryptStream failed");
                                                }
                                            (this.nal_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.cam_1 = this.z9_1), this.kal_1.e5(), (this.w9_1 = 15), (t = this.lal_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.lal_1.e5(), this.cam_1);
                                    case 16:
                                        if (((this.dam_1 = this.nal_1), (this.x9_1 = 20), this.kal_1.e5(), (this.w9_1 = 17), (t = this.lal_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.lal_1.e5(), this.dam_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.kal_1.e5(), (this.w9_1 = 19), (t = this.lal_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.lal_1.e5(), F;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (20 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(_i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.uam_1.ham(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.aan_1 = t), null == this.aan_1)) {
                                            (this.zam_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.ban_1 = this.aan_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.can_1 = this.ban_1), (this.dan_1 = this.can_1.length), (this.ean_1 = U), (this.w9_1 = 6), (t = this.tam_1.fam(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.fan_1 = t), (this.gan_1 = H(this.fan_1));
                                        var i = this.can_1;
                                        (this.han_1 = this.ean_1.jak(this.gan_1, H(i))), (this.ian_1 = this.han_1.fh()), (this.jan_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.uam_1.ham(this.sam_1.tan_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.kan_1 = t), null == this.kan_1)) {
                                            (this.zam_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.lan_1 = this.kan_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.man_1 = this.lan_1), (this.dan_1 = (this.dan_1 + this.man_1.length) | 0);
                                        var s = U,
                                            n = this.man_1;
                                        (this.nan_1 = s.lak(this.ian_1, H(n))), (this.oan_1 = this.nan_1.iaj()), (this.w9_1 = 10);
                                        var h = this.oan_1;
                                        if ((t = this.vam_1.gam(D(h), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.xam_1 && null != this.wam_1) {
                                            var a = this.dan_1 / this.wam_1.bytes.y3();
                                            a > this.jan_1 + 0.1 && (this.xam_1(a), (this.jan_1 = a));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.yam_1 = F), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof Z)) {
                                            this.pan_1 = this.z9_1;
                                            var e = Y(),
                                                r = this.pan_1;
                                            if (!e.f5s_1.h())
                                                for (var _ = e.f5s_1.t2().p(); _.q(); ) {
                                                    _.r().n2().e("XWS", r, "XWS decryptStream failed");
                                                }
                                            (this.zam_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.qan_1 = this.z9_1), this.uam_1.e5(), (this.w9_1 = 14), (t = this.vam_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.vam_1.e5(), this.qan_1);
                                    case 15:
                                        if (((this.ran_1 = this.zam_1), (this.x9_1 = 19), this.uam_1.e5(), (this.w9_1 = 16), (t = this.vam_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.vam_1.e5(), this.ran_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.uam_1.e5(), (this.w9_1 = 18), (t = this.vam_1.jam(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.vam_1.e5(), F;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (19 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (S(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.fao_1 = st.mak(nt())), (this.gao_1 = ht);
                                        var i = this.eao_1;
                                        if (((this.hao_1 = H(i)), (this.w9_1 = 2), (t = this.dao_1.fam(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = H(t),
                                            n = this.gao_1.eak(this.hao_1, this.fao_1, s),
                                            h = this.fao_1,
                                            a = D(h),
                                            e = D(n),
                                            r = H(at([a, e]));
                                        return D(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var _ = this.z9_1,
                                                u = Y();
                                            if (!u.f5s_1.h())
                                                for (var c = u.f5s_1.t2().p(); c.q(); ) {
                                                    c.r().n2().e("XWS", _, "XWS encryptMessage failed");
                                                }
                                            return null;
                                        }
                                        throw this.z9_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (4 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (S(ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = fi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = rt(this.sao_1, et(0, nt()));
                                        this.uao_1 = H(i.slice());
                                        var s = rt(this.sao_1, et(nt(), this.sao_1.length));
                                        if (((this.vao_1 = H(s.slice())), (this.wao_1 = ht), (this.w9_1 = 2), (t = this.rao_1.fam(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var n = H(t),
                                            h = this.wao_1.fak(this.vao_1, this.uao_1, n);
                                        return D(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var a = this.z9_1,
                                                e = Y();
                                            if (!e.f5s_1.h())
                                                for (var r = "XWS decryptMessage failed for " + this.tao_1, _ = e.f5s_1.t2().p(); _.q(); ) {
                                                    _.r().n2().e("XWS", a, r);
                                                }
                                            return null;
                                        }
                                        throw this.z9_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (4 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (S(oi).xao = function (t, i, s, n) {
                        var h = new ri(this, t, i, s, n);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(oi).yao = function (t, i, s, n, h, a) {
                        var e = new _i(this, t, i, s, n, h, a);
                        return (e.y9_1 = F), (e.z9_1 = null), e.oa();
                    }),
                    (S(oi).zao = function (t, i, s) {
                        var n = new ui(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(oi).aap = function (t, i, s, n) {
                        var h = new ci(this, t, i, s, n);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.jap_1.dp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.jap_1.dak(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        return F;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(Ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ji(this.tap_1.eau_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
                                        return ot(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (S(Ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.caq_1), (t = ut(i.deriveBits(s, this.daq_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.eaq_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var a = h.f5s_1.t2().p(); a.q(); ) {
                                                    a.r().n2().e("XWS", n, null);
                                                }
                                            (this.eaq_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.eaq_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(Fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ut(wi(window).subtle.digest("SHA-256", lt([this.naq_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.oaq_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.paq_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = Y();
                                            if (!s.f5s_1.h())
                                                for (var n = s.f5s_1.t2().p(); n.q(); ) {
                                                    n.r().n2().e("XWS", i, null);
                                                }
                                            (this.paq_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.paq_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (S(Ki).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            n = [this.zaq_1];
                                        if ((t = ut(i.importKey("raw", this.yaq_1, s, !1, n), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.aar_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                a = Y();
                                            if (!a.f5s_1.h())
                                                for (var e = a.f5s_1.t2().p(); e.q(); ) {
                                                    e.r().n2().e("XWS", h, null);
                                                }
                                            (this.aar_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.aar_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.lar_1), (t = ut(i.encrypt(s, this.jar_1, this.kar_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.mar_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var a = h.f5s_1.t2().p(); a.q(); ) {
                                                    a.r().n2().e("XWS", n, null);
                                                }
                                            (this.mar_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.mar_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(Pi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = wi(window).subtle,
                                            n = {};
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.xar_1 ? [] : [this.xar_1]), (t = ut(s.importKey(this.var_1, this.war_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.yar_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                a = Y();
                                            if (!a.f5s_1.h())
                                                for (var e = a.f5s_1.t2().p(); e.q(); ) {
                                                    e.r().n2().e("XWS", h, null);
                                                }
                                            (this.yar_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.yar_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Wi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.has_1), (t = ut(i.decrypt(s, this.ias_1, this.jas_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.kas_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var a = h.f5s_1.t2().p(); a.q(); ) {
                                                    a.r().n2().e("XWS", n, null);
                                                }
                                            (this.kas_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.kas_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(Ii).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = wi(window).subtle,
                                            n = {};
                                        if (((n.name = "ECDH"), (n.namedCurve = "P-256"), (i = null == this.vas_1 ? [] : [this.vas_1]), (t = ut(s.importKey(this.tas_1, this.uas_1, n, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.was_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                a = Y();
                                            if (!a.f5s_1.h())
                                                for (var e = a.f5s_1.t2().p(); e.q(); ) {
                                                    e.r().n2().e("XWS", h, null);
                                                }
                                            (this.was_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.was_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Ti).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "ECDSA" },
                                            n = { name: "SHA-256" };
                                        if (((s.hash = n), (t = ut(i.sign(s, this.fat_1, this.gat_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.hat_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                a = Y();
                                            if (!a.f5s_1.h())
                                                for (var e = a.f5s_1.t2().p(); e.q(); ) {
                                                    e.r().n2().e("XWS", h, null);
                                                }
                                            (this.hat_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.hat_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "ECDSA" },
                                            n = { name: "SHA-256" };
                                        if (((s.hash = n), (t = ut(i.verify(s, this.qat_1, this.sat_1, this.rat_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.tat_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                a = Y();
                                            if (!a.f5s_1.h())
                                                for (var e = a.f5s_1.t2().p(); e.q(); ) {
                                                    e.r().n2().e("XWS", h, null);
                                                }
                                            (this.tat_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.tat_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = wi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ut(i.importKey("raw", this.cau_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.dau_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = Y();
                                            if (!h.f5s_1.h())
                                                for (var a = h.f5s_1.t2().p(); a.q(); ) {
                                                    a.r().n2().e("XWS", n, null);
                                                }
                                            (this.dau_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dau_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(Hi).zau = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(Hi).b2h = function (t) {
                        return this.zau(t);
                    }),
                    (S(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ut((this.yau_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return t;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(Hi).sa = function (t) {
                        return new Hi(this.yau_1, t);
                    }),
                    (S(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.oau_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            n = i.Client;
                                        return (window.JuiceboxGetAuthToken = Gi(this.pau_1)), new n(new s(this.pau_1.r9b_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (S(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.iav_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.mav_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.f5s_1.h())
                                            for (var s = i.f5s_1.t2().p(); s.q(); ) {
                                                s.r().n2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.f5s_1.h())
                                            for (var h = P(this.kav_1.m9b_1), a = n.f5s_1.t2().p(); a.q(); ) {
                                                a.r().n2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.iav_1, this.kav_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.oav_1 = t), (this.w9_1 = 3), (t = ut(this.oav_1.register(zt(this.jav_1), this.lav_1, new Int8Array(0), this.kav_1.n9b_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.nav_1 = It()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.mav_1.RegisterError.InvalidAuth ? Zt() : e == this.mav_1.RegisterError.UpgradeRequired ? ti() : e == this.mav_1.RegisterError.Assertion ? ii() : e == this.mav_1.RegisterError.Transient ? si() : e == this.mav_1.RegisterError.RateLimitExceeded ? ni() : si();
                                        (this.nav_1 = new Tt(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.nav_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (6 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.xav_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.aaw_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.f5s_1.h())
                                            for (var s = i.f5s_1.t2().p(); s.q(); ) {
                                                s.r().n2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var n = Y();
                                        if (!n.f5s_1.h())
                                            for (var h = P(this.zav_1.m9b_1), a = n.f5s_1.t2().p(); a.q(); ) {
                                                a.r().n2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.xav_1, this.zav_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.caw_1 = t), (this.w9_1 = 3), (t = ut(this.caw_1.recover(zt(this.yav_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.baw_1 = new qt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            u = _ == this.aaw_1.RecoverErrorReason.InvalidPin ? Dt() : _ == this.aaw_1.RecoverErrorReason.NotRegistered ? Gt() : _ == this.aaw_1.RecoverErrorReason.InvalidAuth ? Bt() : _ == this.aaw_1.RecoverErrorReason.UpgradeRequired ? Ot() : _ == this.aaw_1.RecoverErrorReason.Assertion ? Qt() : _ == this.aaw_1.RecoverErrorReason.Transient ? Vt() : _ == this.aaw_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.baw_1 = new St(u, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.baw_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (6 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(Vi).daw = function (t, i, s, n) {
                        var h = new Oi(this, t, i, s, n);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(Vi).eaw = function (t, i, s) {
                        var n = new Qi(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = zi(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ai(new fs(i.publicKey), new ws(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (S(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = di(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new cs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(is).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 8), (this.w9_1 = 1), (t = this.pax_1.gay(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.sax_1 = t), (this.w9_1 = 2), (t = bi(this.qax_1.kap_1, this.sax_1.xak_1.eau_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.tax_1 = t;
                                        var i;
                                        if (null == this.tax_1) return null;
                                        if (((i = this.tax_1), (this.uax_1 = i), (this.w9_1 = 3), (t = xi(this.sax_1.wak_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.vax_1 = t), (this.wax_1 = mt(this.vax_1, 65)), (this.w9_1 = 4), (t = $i(this.uax_1, this.wax_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.xax_1 = t;
                                        var s;
                                        if (null == this.xax_1) return null;
                                        if (((s = this.xax_1), (this.yax_1 = s), (this.zax_1 = this.yax_1.slice(0, 16)), (this.aay_1 = this.yax_1.slice(16, 32)), (this.w9_1 = 5), (t = mi(this.zax_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.bay_1 = t;
                                        var n;
                                        if (null == this.bay_1) return null;
                                        if (((n = this.bay_1), (this.cay_1 = n), (this.w9_1 = 6), (t = vi(this.rax_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.eay_1 = t), (this.w9_1 = 7), (t = Ri(this.cay_1, this.eay_1, this.aay_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var h = t;
                                        return Rt(lt([this.wax_1, h]));
                                    case 8:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (8 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (S(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.say_1 = ot(this.ray_1)), (this.tay_1 = this.say_1.slice(0, 65)), (this.uay_1 = this.say_1.slice(65)), (this.w9_1 = 1), (t = gi("raw", this.tay_1, j, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.vay_1 = t;
                                        var i;
                                        if (null == this.vay_1) return null;
                                        if (((i = this.vay_1), (this.way_1 = i), (this.w9_1 = 2), (t = bi(this.way_1, this.qay_1.eau_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.xay_1 = t;
                                        var s;
                                        if (null == this.xay_1) return null;
                                        if (((s = this.xay_1), (this.yay_1 = s), (this.w9_1 = 3), (t = $i(this.yay_1, this.tay_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.zay_1 = t;
                                        var n;
                                        if (null == this.zay_1) return null;
                                        if (((n = this.zay_1), (this.aaz_1 = n), (this.baz_1 = this.aaz_1.slice(0, 16)), (this.caz_1 = this.aaz_1.slice(16, 32)), (this.w9_1 = 4), (t = mi(this.baz_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.daz_1 = t;
                                        var h;
                                        if (null == this.daz_1) return null;
                                        if (((h = this.daz_1), (this.eaz_1 = h), (this.w9_1 = 5), (t = pi(this.caz_1, this.eaz_1, this.uay_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.faz_1 = t;
                                        var a;
                                        if (null == this.faz_1) return null;
                                        if (((a = this.faz_1), (this.gaz_1 = a), (this.w9_1 = 6), (t = Yi(this.pay_1, this.gaz_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        return t;
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (7 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(ns).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = gi("spki", gt(this.qaz_1), j, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new fs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(hs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = gi("spki", gt(this.bb0_1), j, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.cb0_1 = s;
                                        var n;
                                        if (null == this.cb0_1) n = null;
                                        else n = new fs(this.cb0_1);
                                        this.db0_1 = n;
                                        var h;
                                        if (null == this.db0_1) return null;
                                        if (((h = this.db0_1), (this.eb0_1 = h), (this.w9_1 = 2), (t = this.eb0_1), (i = this), (s = Ji(t.kap_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.fb0_1 = s;
                                        var a = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((a.d = pt(this.ab0_1, !0)), (a.x = this.fb0_1.x), (a.y = this.fb0_1.y), (this.gb0_1 = a), (this.w9_1 = 3), (s = ki("jwk", this.gb0_1, "deriveBits", this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ws(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (4 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.qb0_1.eau_1, ot(this.rb0_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : kt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.bb1_1.kap_1, ot(this.db1_1), ot(this.cb1_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null != t && t;
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.oaw_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new cs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(_s).gay = function (t) {
                        var i = new Zi(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(_s).eb1 = function (t) {
                        var i = new ts(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(_s).fb1 = function (t, i, s) {
                        var n = new is(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(_s).gb1 = function (t, i, s) {
                        var n = new ss(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(_s).hb1 = function (t, i) {
                        var s = new ns(this, t, i);
                        return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                    }),
                    (S(_s).ib1 = function (t, i, s) {
                        var n = new hs(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(_s).jb1 = function (t, i) {
                        return Yi(this, gt(t), i);
                    }),
                    (S(_s).kb1 = function (t, i, s) {
                        var n = new as(this, t, i, s);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(_s).lb1 = function (t, i, s, n) {
                        var h = new es(this, t, i, s, n);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = vi(this.ub1_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return kt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(cs).fam = function (t) {
                        var i = new us(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = xi(this.db2_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return kt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(fs).fam = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(ls).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = yi(this.mb2_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return kt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ws).fam = function (t) {
                        var i = new ls(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    X(S(Pt), "name", S(Pt).z2),
                    X(S(Pt), "ordinal", S(Pt).a3),
                    X(S(Ht), "name", S(Ht).z2),
                    X(S(Ht), "ordinal", S(Ht).a3),
                    (k = new _s()),
                    vs(t),
                    (t.$jsExportAll$ = vs),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = St),
                    (t.$_$.b = qt),
                    (t.$_$.c = Tt),
                    (t.$_$.d = Wt),
                    (t.$_$.e = Vi),
                    (t.$_$.f = ai),
                    (t.$_$.g = ei),
                    (t.$_$.h = hi),
                    (t.$_$.i = jt),
                    (t.$_$.j = Ct),
                    (t.$_$.k = It),
                    (t.$_$.l = function () {
                        return null == p && new oi(), p;
                    }),
                    (t.$_$.m = k);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.75b44eda.js.map
