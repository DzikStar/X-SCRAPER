(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, h, n, e, r) {
                "use strict";
                var _,
                    c,
                    u,
                    o,
                    a,
                    b,
                    f,
                    l,
                    w,
                    v,
                    x,
                    d,
                    z,
                    y,
                    $,
                    p,
                    g,
                    R,
                    q,
                    m,
                    k = Math.imul,
                    j = i.$_$.ve,
                    S = i.$_$.sd,
                    E = i.$_$.g,
                    J = i.$_$.pj,
                    C = i.$_$.yd,
                    A = i.$_$.qj,
                    F = i.$_$.o6,
                    K = i.$_$.cj,
                    X = i.$_$.gd,
                    P = i.$_$.ze,
                    W = i.$_$.rd,
                    I = i.$_$.id,
                    T = i.$_$.cl,
                    L = i.$_$.rc,
                    M = h.$_$.j,
                    N = i.$_$.cc,
                    U = h.$_$.h,
                    H = i.$_$.e4,
                    D = i.$_$.k4,
                    G = h.$_$.e,
                    B = h.$_$.d,
                    O = i.$_$.we,
                    Q = i.$_$.a4,
                    V = n.$_$.c,
                    Y = i.$_$.ej,
                    Z = i.$_$.ud,
                    tt = h.$_$.c,
                    it = h.$_$.i,
                    st = h.$_$.a,
                    ht = h.$_$.g,
                    nt = i.$_$.f,
                    et = i.$_$.qf,
                    rt = i.$_$.db,
                    _t = h.$_$.b,
                    ct = e.$_$.m,
                    ut = r.$_$.h,
                    ot = r.$_$.b,
                    at = r.$_$.v,
                    bt = r.$_$.g,
                    ft = i.$_$.xd,
                    lt = h.$_$.f,
                    wt = i.$_$.d6,
                    vt = i.$_$.yh,
                    xt = i.$_$.ig,
                    dt = i.$_$.qk,
                    zt = i.$_$.vf,
                    yt = i.$_$.pd,
                    $t = r.$_$.t,
                    pt = r.$_$.d,
                    gt = r.$_$.f,
                    Rt = r.$_$.k,
                    qt = r.$_$.c;
                function mt(t) {
                    Ct.call(this), (this.bytes = t);
                }
                function kt(t, i) {
                    Ct.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function jt() {
                    (_ = this), Ct.call(this);
                }
                function St() {
                    return null == _ && new jt(), _;
                }
                function Et() {
                    (c = this), Ct.call(this);
                }
                function Jt() {
                    return null == c && new Et(), c;
                }
                function Ct() {}
                function At() {
                    return [Ht(), Dt(), Gt(), Bt(), Ot(), Qt(), Vt()];
                }
                function Ft(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Ht();
                        case "NotRegistered":
                            return Dt();
                        case "InvalidAuth":
                            return Gt();
                        case "UpgradeRequired":
                            return Bt();
                        case "Assertion":
                            return Ot();
                        case "Transient":
                            return Qt();
                        case "RateLimitExceeded":
                            return Vt();
                        default:
                            Kt(), A("No enum constant value.");
                    }
                }
                function Kt() {
                    if (v) return F;
                    (v = !0), (u = new Xt("InvalidPin", 0, !0)), (o = new Xt("NotRegistered", 1, !0)), (a = new Xt("InvalidAuth", 2, !0)), (b = new Xt("UpgradeRequired", 3, !1)), (f = new Xt("Assertion", 4, !1)), (l = new Xt("Transient", 5, !0)), (w = new Xt("RateLimitExceeded", 6, !0));
                }
                function Xt(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Pt() {
                    (x = this), Tt.call(this);
                }
                function Wt() {
                    return null == x && new Pt(), x;
                }
                function It(t) {
                    Tt.call(this), (this.reason = t);
                }
                function Tt() {}
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
                    if (R) return F;
                    (R = !0), (d = new Ut("InvalidAuth", 0, !0)), (z = new Ut("UpgradeRequired", 1, !1)), (y = new Ut("Assertion", 2, !1)), ($ = new Ut("Transient", 3, !0)), (p = new Ut("RateLimitExceeded", 4, !0)), (g = new Ut("StorageFailed", 5, !0));
                }
                function Ut(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Ht() {
                    return Kt(), u;
                }
                function Dt() {
                    return Kt(), o;
                }
                function Gt() {
                    return Kt(), a;
                }
                function Bt() {
                    return Kt(), b;
                }
                function Ot() {
                    return Kt(), f;
                }
                function Qt() {
                    return Kt(), l;
                }
                function Vt() {
                    return Kt(), w;
                }
                function Yt() {
                    return Nt(), d;
                }
                function Zt() {
                    return Nt(), z;
                }
                function ti() {
                    return Nt(), y;
                }
                function ii() {
                    return Nt(), $;
                }
                function si() {
                    return Nt(), p;
                }
                function hi() {
                    return Nt(), g;
                }
                function ni(t, i) {
                    (this.nbc_1 = t), (this.obc_1 = i);
                }
                function ei(t, i) {
                    (this.pbc_1 = t), (this.qbc_1 = i);
                }
                function ri(t, i, s, h, n) {
                    L.call(this, n), (this.zbc_1 = t), (this.abd_1 = i), (this.bbd_1 = s), (this.cbd_1 = h);
                }
                function _i(t, i, s, h, n, e, r) {
                    L.call(this, r), (this.ibe_1 = t), (this.jbe_1 = i), (this.kbe_1 = s), (this.lbe_1 = h), (this.mbe_1 = n), (this.nbe_1 = e);
                }
                function ci(t, i, s, h) {
                    L.call(this, h), (this.sbf_1 = t), (this.tbf_1 = i), (this.ubf_1 = s);
                }
                function ui(t, i, s, h, n) {
                    L.call(this, n), (this.gbg_1 = t), (this.hbg_1 = i), (this.ibg_1 = s), (this.jbg_1 = h);
                }
                function oi() {
                    (q = this), (this.ibf_1 = 1024), (this.jbf_1 = (1024 + _t()) | 0);
                }
                function ai(t, i) {
                    var s = new bi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function bi(t, i) {
                    L.call(this, i), (this.zbg_1 = t);
                }
                function fi(t) {
                    return t.crypto;
                }
                function li(t, i) {
                    return Si(t.ubd_1, "raw", i);
                }
                function wi(t, i) {
                    return Si(t.abh_1, "spki", i);
                }
                function vi(t, i) {
                    var s = new Ji(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function xi(t) {
                    var i = fi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ct(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function di(t) {
                    var i = fi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ct(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function zi(t, i, s) {
                    var h = new Ci(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function yi(t, i, s) {
                    var h = new Ai(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function $i(t, i, s) {
                    var h = new Fi(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function pi(t, i, s, h) {
                    var n = new Ki(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function gi(t, i, s, h) {
                    var n = new Xi(t, i, (s = s === E ? null : s), h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Ri(t, i, s, h) {
                    var n = new Pi(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function qi(t, i, s, h) {
                    var n = new Wi(t, i, (s = s === E ? null : s), h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function mi(t, i, s) {
                    var h = new Ii(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function ki(t, i, s, h) {
                    var n = new Ti(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function ji(t, i) {
                    var s = new Li(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function Si(t, i, s) {
                    return ct(fi(window).subtle.exportKey(i, t), s);
                }
                function Ei(t, i, s) {
                    return ct(fi(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i) {
                    L.call(this, i), (this.jbh_1 = t);
                }
                function Ci(t, i, s) {
                    L.call(this, s), (this.sbh_1 = t), (this.tbh_1 = i);
                }
                function Ai(t, i, s) {
                    L.call(this, s), (this.dbi_1 = t), (this.ebi_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.obi_1 = t), (this.pbi_1 = i);
                }
                function Ki(t, i, s, h) {
                    L.call(this, h), (this.zbi_1 = t), (this.abj_1 = i), (this.bbj_1 = s);
                }
                function Xi(t, i, s, h) {
                    L.call(this, h), (this.lbj_1 = t), (this.mbj_1 = i), (this.nbj_1 = s);
                }
                function Pi(t, i, s, h) {
                    L.call(this, h), (this.xbj_1 = t), (this.ybj_1 = i), (this.zbj_1 = s);
                }
                function Wi(t, i, s, h) {
                    L.call(this, h), (this.jbk_1 = t), (this.kbk_1 = i), (this.lbk_1 = s);
                }
                function Ii(t, i, s) {
                    L.call(this, s), (this.vbk_1 = t), (this.wbk_1 = i);
                }
                function Ti(t, i, s, h) {
                    L.call(this, h), (this.gbl_1 = t), (this.hbl_1 = i), (this.ibl_1 = s);
                }
                function Li(t, i) {
                    L.call(this, i), (this.sbl_1 = t);
                }
                function Mi(t) {
                    var i = t.vbl_1;
                    return (
                        yt(
                            "juiceboxModule",
                            1,
                            zt,
                            function (t) {
                                return Mi(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function Ni(t, i, s) {
                    var h = new Gi(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Ui(t, i) {
                    (this.obm_1 = t), L.call(this, i);
                }
                function Hi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Ui(t, i),
                                h = function (t) {
                                    return s.pbm(t);
                                };
                            return (h.$arity = 0), h;
                        })(t, null);
                    };
                }
                function Di(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, h) {
                                    try {
                                        var n = lt(t),
                                            e = wt().gn_1,
                                            r = vt(D(n), e),
                                            _ = i.o9z_1.r2(r);
                                        s(null == _ ? null : _.v9z_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        h(t);
                                    }
                                    return F;
                                };
                            })(i, t),
                        );
                    };
                }
                function Gi(t, i, s) {
                    L.call(this, s), (this.ebm_1 = t), (this.fbm_1 = i);
                }
                function Bi(t, i, s, h, n) {
                    L.call(this, n), (this.ybm_1 = t), (this.zbm_1 = i), (this.abn_1 = s), (this.bbn_1 = h);
                }
                function Oi(t, i, s, h) {
                    L.call(this, h), (this.nbn_1 = t), (this.obn_1 = i), (this.pbn_1 = s);
                }
                function Qi() {
                    this.vbl_1 = dt(Hi(this));
                }
                function Vi(t, i, s) {
                    var h = new rs(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Yi(t, i) {
                    L.call(this, i), (this.nbo_1 = t);
                }
                function Zi(t, i) {
                    L.call(this, i), (this.wbo_1 = t);
                }
                function ts(t, i, s, h) {
                    L.call(this, h), (this.fbp_1 = t), (this.gbp_1 = i), (this.hbp_1 = s);
                }
                function is(t, i, s, h) {
                    L.call(this, h), (this.ebq_1 = t), (this.fbq_1 = i), (this.gbq_1 = s);
                }
                function ss(t, i, s) {
                    L.call(this, s), (this.ebr_1 = t), (this.fbr_1 = i);
                }
                function hs(t, i, s, h) {
                    L.call(this, h), (this.obr_1 = t), (this.pbr_1 = i), (this.qbr_1 = s);
                }
                function ns(t, i, s, h) {
                    L.call(this, h), (this.ebs_1 = t), (this.fbs_1 = i), (this.gbs_1 = s);
                }
                function es(t, i, s, h, n) {
                    L.call(this, n), (this.pbs_1 = t), (this.qbs_1 = i), (this.rbs_1 = s), (this.sbs_1 = h);
                }
                function rs(t, i, s) {
                    L.call(this, s), (this.dbo_1 = t), (this.ebo_1 = i);
                }
                function _s() {
                    this.ubp_1 = 65;
                }
                function cs(t, i) {
                    L.call(this, i), (this.jbt_1 = t);
                }
                function us(t) {
                    this.ubd_1 = t;
                }
                function os(t, i) {
                    L.call(this, i), (this.sbt_1 = t);
                }
                function as(t) {
                    this.abh_1 = t;
                }
                function bs(t, i) {
                    L.call(this, i), (this.bbu_1 = t);
                }
                function fs(t) {
                    this.ubl_1 = t;
                }
                function ls(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = Ct), (h.JuiceboxRecoverPrivateKeyResult.Success = mt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), X(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", St), X(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Jt), (h.JuiceboxRecoverFailureReason = Xt), (h.JuiceboxRecoverFailureReason.values = At), (h.JuiceboxRecoverFailureReason.valueOf = Ft), X(h.JuiceboxRecoverFailureReason, "InvalidPin", Ht), X(h.JuiceboxRecoverFailureReason, "NotRegistered", Dt), X(h.JuiceboxRecoverFailureReason, "InvalidAuth", Gt), X(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Bt), X(h.JuiceboxRecoverFailureReason, "Assertion", Ot), X(h.JuiceboxRecoverFailureReason, "Transient", Qt), X(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Vt), (h.JuiceboxRegisterPrivateKeyResult = Tt), X(h.JuiceboxRegisterPrivateKeyResult, "Success", Wt), (h.JuiceboxRegisterPrivateKeyResult.Failure = It), (h.JuiceboxRegisterFailureReason = Ut), (h.JuiceboxRegisterFailureReason.values = Lt), (h.JuiceboxRegisterFailureReason.valueOf = Mt), X(h.JuiceboxRegisterFailureReason, "InvalidAuth", Yt), X(h.JuiceboxRegisterFailureReason, "UpgradeRequired", Zt), X(h.JuiceboxRegisterFailureReason, "Assertion", ti), X(h.JuiceboxRegisterFailureReason, "Transient", ii), X(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", si), X(h.JuiceboxRegisterFailureReason, "StorageFailed", hi);
                }
                S(Ct, "JuiceboxRecoverPrivateKeyResult"),
                    S(mt, "Success", E, Ct),
                    S(kt, "JuiceboxFailure", E, Ct),
                    C(jt, "KeyReconstructionFailure", E, Ct),
                    C(Et, "NoJuiceboxTokens", E, Ct),
                    S(Xt, "JuiceboxRecoverFailureReason", E, K),
                    S(Tt, "JuiceboxRegisterPrivateKeyResult"),
                    C(Pt, "Success", E, Tt),
                    S(It, "Failure", E, Tt),
                    S(Ut, "JuiceboxRegisterFailureReason", E, K),
                    S(ni, "XChatKeyPair"),
                    S(ei, "XChatPrivateKeys"),
                    Z(ri, L),
                    Z(_i, L),
                    Z(ci, L),
                    Z(ui, L),
                    C(oi, "LibsodiumEncryption", E, E, E, [3, 5, 2]),
                    Z(bi, L),
                    Z(Ji, L),
                    Z(Ci, L),
                    Z(Ai, L),
                    Z(Fi, L),
                    Z(Ki, L),
                    Z(Xi, L),
                    Z(Pi, L),
                    Z(Wi, L),
                    Z(Ii, L),
                    Z(Ti, L),
                    Z(Li, L),
                    ft(Ui, L, E, [0]),
                    Z(Gi, L),
                    Z(Bi, L),
                    Z(Oi, L),
                    S(Qi, "WebJuiceboxApi", Qi, E, E, [1, 3, 2]),
                    Z(Yi, L),
                    Z(Zi, L),
                    Z(ts, L),
                    Z(is, L),
                    Z(ss, L),
                    Z(hs, L),
                    Z(ns, L),
                    Z(es, L),
                    Z(rs, L),
                    C(_s, "WebKeyFactory", E, E, E, [0, 2, 1, 3]),
                    Z(cs, L),
                    S(us, "XChatConversationKey", E, E, E, [0]),
                    Z(os, L),
                    S(as, "XChatPublicKey", E, E, E, [0]),
                    Z(bs, L),
                    S(fs, "XChatPrivateKey", E, E, E, [0]),
                    (j(mt).ja2 = function () {
                        return this.bytes;
                    }),
                    (j(kt).ebc = function () {
                        return this.reason;
                    }),
                    (j(kt).fbc = function () {
                        return this.guessesRemaining;
                    }),
                    (j(kt).gh = function () {
                        return this.reason;
                    }),
                    (j(kt).hh = function () {
                        return this.guessesRemaining;
                    }),
                    (j(kt).gbc = function (t, i) {
                        return new kt(t, i);
                    }),
                    (j(kt).copy = function (t, i, s) {
                        return (t = t === E ? this.reason : t), (i = i === E ? this.guessesRemaining : i), this.gbc(t, i);
                    }),
                    (j(kt).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (j(kt).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (k(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (j(kt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof kt)) return !1;
                        var i = t instanceof kt ? t : J();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (j(jt).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (j(jt).hashCode = function () {
                        return 188209770;
                    }),
                    (j(jt).equals = function (t) {
                        return this === t || (t instanceof jt && (t instanceof jt || J(), !0));
                    }),
                    (j(Et).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (j(Et).hashCode = function () {
                        return 1362829865;
                    }),
                    (j(Et).equals = function (t) {
                        return this === t || (t instanceof Et && (t instanceof Et || J(), !0));
                    }),
                    (j(Xt).jbc = function () {
                        return this.retryable;
                    }),
                    (j(Pt).toString = function () {
                        return "Success";
                    }),
                    (j(Pt).hashCode = function () {
                        return 1551298723;
                    }),
                    (j(Pt).equals = function (t) {
                        return this === t || (t instanceof Pt && (t instanceof Pt || J(), !0));
                    }),
                    (j(It).ebc = function () {
                        return this.reason;
                    }),
                    (j(It).gh = function () {
                        return this.reason;
                    }),
                    (j(It).kbc = function (t) {
                        return new It(t);
                    }),
                    (j(It).copy = function (t, i) {
                        return (t = t === E ? this.reason : t), this.kbc(t);
                    }),
                    (j(It).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (j(It).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (j(It).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof It)) return !1;
                        var i = t instanceof It ? t : J();
                        return !!this.reason.equals(i.reason);
                    }),
                    (j(Ut).jbc = function () {
                        return this.retryable;
                    }),
                    (j(ni).toString = function () {
                        return "XChatKeyPair(public=" + P(this.nbc_1) + ", private=" + P(this.obc_1) + ")";
                    }),
                    (j(ni).hashCode = function () {
                        var t = W(this.nbc_1);
                        return (t = (k(t, 31) + W(this.obc_1)) | 0);
                    }),
                    (j(ni).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ni)) return !1;
                        var i = t instanceof ni ? t : J();
                        return !!I(this.nbc_1, i.nbc_1) && !!I(this.obc_1, i.obc_1);
                    }),
                    (j(ei).toString = function () {
                        return "XChatPrivateKeys(identity=" + P(this.pbc_1) + ", signing=" + T(this.qbc_1) + ")";
                    }),
                    (j(ei).hashCode = function () {
                        var t = W(this.pbc_1);
                        return (t = (k(t, 31) + (null == this.qbc_1 ? 0 : W(this.qbc_1))) | 0);
                    }),
                    (j(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : J();
                        return !!I(this.pbc_1, i.pbc_1) && !!I(this.qbc_1, i.qbc_1);
                    }),
                    (j(ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = ai(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.fbd_1 = U), (this.w9_1 = 4), (t = this.abd_1.vbd(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.gbd_1 = t), (this.hbd_1 = H(this.gbd_1)), (this.ibd_1 = this.fbd_1.xbb(this.hbd_1)), (this.jbd_1 = this.ibd_1.gh()), (this.kbd_1 = this.ibd_1.wba()), (this.w9_1 = 5);
                                        var i = this.kbd_1;
                                        if ((t = this.cbd_1.wbd(D(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.bbd_1.xbd(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.lbd_1 = t), null == this.lbd_1)) {
                                            (this.ebd_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.mbd_1 = this.lbd_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.nbd_1 = this.mbd_1), (this.w9_1 = 9), (t = this.bbd_1.ybd(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.obd_1 = B()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.obd_1 = G()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.pbd_1 = this.obd_1;
                                        var s = U,
                                            h = this.nbd_1,
                                            n = H(h),
                                            e = this.pbd_1;
                                        (this.qbd_1 = s.zbb(this.jbd_1, n, E, Q(O(e)))), (this.w9_1 = 11);
                                        var r = this.qbd_1;
                                        if ((t = this.cbd_1.wbd(D(r), this)) === N()) return t;
                                        continue t;
                                    case 12:
                                        (this.dbd_1 = F), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof Y)) {
                                            this.rbd_1 = this.z9_1;
                                            var _ = V(),
                                                c = this.rbd_1;
                                            if (!_.h5r_1.h())
                                                for (var u = _.h5r_1.z().p(); u.q(); ) {
                                                    u.r().o2().w("XWS", c, "encryptStream failed");
                                                }
                                            (this.ebd_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.sbd_1 = this.z9_1), this.bbd_1.e5(), (this.w9_1 = 15), (t = this.cbd_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.cbd_1.e5(), this.sbd_1);
                                    case 16:
                                        if (((this.tbd_1 = this.ebd_1), (this.x9_1 = 20), this.bbd_1.e5(), (this.w9_1 = 17), (t = this.cbd_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.cbd_1.e5(), this.tbd_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.bbd_1.e5(), (this.w9_1 = 19), (t = this.cbd_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.cbd_1.e5(), F;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (20 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (j(_i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = ai(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.kbe_1.xbd(tt(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.qbe_1 = t), null == this.qbe_1)) {
                                            (this.pbe_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.rbe_1 = this.qbe_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.sbe_1 = this.rbe_1), (this.tbe_1 = this.sbe_1.length), (this.ube_1 = U), (this.w9_1 = 6), (t = this.jbe_1.vbd(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.vbe_1 = t), (this.wbe_1 = H(this.vbe_1));
                                        var i = this.sbe_1;
                                        (this.xbe_1 = this.ube_1.abc(this.wbe_1, H(i))), (this.ybe_1 = this.xbe_1.gh()), (this.zbe_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.kbe_1.xbd(this.ibe_1.jbf_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.abf_1 = t), null == this.abf_1)) {
                                            (this.pbe_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.bbf_1 = this.abf_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.cbf_1 = this.bbf_1), (this.tbe_1 = (this.tbe_1 + this.cbf_1.length) | 0);
                                        var s = U,
                                            h = this.cbf_1;
                                        (this.dbf_1 = s.cbc(this.ybe_1, H(h))), (this.ebf_1 = this.dbf_1.zba()), (this.w9_1 = 10);
                                        var n = this.ebf_1;
                                        if ((t = this.lbe_1.wbd(D(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.nbe_1 && null != this.mbe_1) {
                                            var e = this.tbe_1 / this.mbe_1.bytes.y3();
                                            e > this.zbe_1 + 0.1 && (this.nbe_1(e), (this.zbe_1 = e));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.obe_1 = F), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof Y)) {
                                            this.fbf_1 = this.z9_1;
                                            var r = V(),
                                                _ = this.fbf_1;
                                            if (!r.h5r_1.h())
                                                for (var c = r.h5r_1.z().p(); c.q(); ) {
                                                    c.r().o2().w("XWS", _, "decryptStream failed");
                                                }
                                            (this.pbe_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.gbf_1 = this.z9_1), this.kbe_1.e5(), (this.w9_1 = 14), (t = this.lbe_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.lbe_1.e5(), this.gbf_1);
                                    case 15:
                                        if (((this.hbf_1 = this.pbe_1), (this.x9_1 = 19), this.kbe_1.e5(), (this.w9_1 = 16), (t = this.lbe_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.lbe_1.e5(), this.hbf_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.kbe_1.e5(), (this.w9_1 = 18), (t = this.lbe_1.zbd(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.lbe_1.e5(), F;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (19 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (j(ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = ai(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.vbf_1 = it.dbc(st())), (this.wbf_1 = ht);
                                        var i = this.ubf_1;
                                        if (((this.xbf_1 = H(i)), (this.w9_1 = 2), (t = this.tbf_1.vbd(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = H(t),
                                            h = this.wbf_1.vbb(this.xbf_1, this.vbf_1, s),
                                            n = this.vbf_1,
                                            e = D(n),
                                            r = D(h),
                                            _ = H(nt([e, r]));
                                        return D(_).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Y)) {
                                            var c = this.z9_1,
                                                u = V();
                                            if (!u.h5r_1.h())
                                                for (var o = u.h5r_1.z().p(); o.q(); ) {
                                                    o.r().o2().w("XWS", c, "encryptMessage failed");
                                                }
                                            return null;
                                        }
                                        throw this.z9_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (4 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (j(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = ai(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = rt(this.ibg_1, et(0, st()));
                                        this.kbg_1 = H(i.slice());
                                        var s = rt(this.ibg_1, et(st(), this.ibg_1.length));
                                        if (((this.lbg_1 = H(s.slice())), (this.mbg_1 = ht), (this.w9_1 = 2), (t = this.hbg_1.vbd(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var h = H(t),
                                            n = this.mbg_1.wbb(this.lbg_1, this.kbg_1, h);
                                        return D(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Y)) {
                                            var e = this.z9_1,
                                                r = V();
                                            if (!r.h5r_1.h())
                                                for (var _ = "decryptMessage failed for " + this.jbg_1, c = r.h5r_1.z().p(); c.q(); ) {
                                                    c.r().o2().w("XWS", e, _);
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
                    (j(oi).nbg = function (t, i, s, h) {
                        var n = new ri(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (j(oi).obg = function (t, i, s, h, n, e) {
                        var r = new _i(this, t, i, s, h, n, e);
                        return (r.y9_1 = F), (r.z9_1 = null), r.oa();
                    }),
                    (j(oi).pbg = function (t, i, s) {
                        var h = new ci(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(oi).qbg = function (t, i, s, h) {
                        var n = new ui(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (j(bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.zbg_1.fp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.zbg_1.ubb(this)) === N())) return t;
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
                    (j(Ji).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.jbh_1.ubl_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ut(i);
                                        return ot(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (j(Ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.sbh_1), (t = ct(i.deriveBits(s, this.tbh_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ubh_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = V();
                                            if (!n.h5r_1.h())
                                                for (var e = n.h5r_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.ubh_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ubh_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(Ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ct(fi(window).subtle.digest("SHA-256", bt([this.dbi_1, at(new Int8Array([0, 0, 0, 1])).buffer, this.ebi_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.fbi_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = V();
                                            if (!s.h5r_1.h())
                                                for (var h = s.h5r_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", i, null);
                                                }
                                            (this.fbi_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.fbi_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (j(Fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.pbi_1];
                                        if ((t = ct(i.importKey("raw", this.obi_1, s, !1, h), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.qbi_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = V();
                                            if (!e.h5r_1.h())
                                                for (var r = e.h5r_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.qbi_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.qbi_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (j(Ki).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.bbj_1), (t = ct(i.encrypt(s, this.zbi_1, this.abj_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.cbj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = V();
                                            if (!n.h5r_1.h())
                                                for (var e = n.h5r_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.cbj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.cbj_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = fi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.nbj_1 ? [] : [this.nbj_1]), (t = ct(s.importKey(this.lbj_1, this.mbj_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.obj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = V();
                                            if (!e.h5r_1.h())
                                                for (var r = e.h5r_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.obj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.obj_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (j(Pi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.xbj_1), (t = ct(i.decrypt(s, this.ybj_1, this.zbj_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.abk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = V();
                                            if (!n.h5r_1.h())
                                                for (var e = n.h5r_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.abk_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.abk_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(Wi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = fi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.lbk_1 ? [] : [this.lbk_1]), (t = ct(s.importKey(this.jbk_1, this.kbk_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.mbk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = V();
                                            if (!e.h5r_1.h())
                                                for (var r = e.h5r_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.mbk_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.mbk_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (j(Ii).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ct(i.sign(s, this.vbk_1, this.wbk_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.xbk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = V();
                                            if (!e.h5r_1.h())
                                                for (var r = e.h5r_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.xbk_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.xbk_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (j(Ti).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ct(i.verify(s, this.gbl_1, this.ibl_1, this.hbl_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.jbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = V();
                                            if (!e.h5r_1.h())
                                                for (var r = e.h5r_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.jbl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.jbl_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (j(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = fi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ct(i.importKey("raw", this.sbl_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.tbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = V();
                                            if (!n.h5r_1.h())
                                                for (var e = n.h5r_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.tbl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.tbl_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(Ui).pbm = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (j(Ui).a2e = function (t) {
                        return this.pbm(t);
                    }),
                    (j(Ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ct((this.obm_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                    (j(Ui).sa = function (t) {
                        return new Ui(this.obm_1, t);
                    }),
                    (j(Gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Mi(this.ebm_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Di(this.fbm_1)), new h(new s(this.fbm_1.t9z_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (j(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Mi(this.ybm_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.cbn_1 = t), (this.x9_1 = 4);
                                        var i = V();
                                        if (!i.h5r_1.h())
                                            for (var s = i.h5r_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = V();
                                        if (!h.h5r_1.h())
                                            for (var n = P(this.abn_1.o9z_1), e = h.h5r_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ni(this.ybm_1, this.abn_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.ebn_1 = t), (this.w9_1 = 3), (t = ct(this.ebn_1.register(xt(this.zbm_1), this.bbn_1, new Int8Array(0), this.abn_1.p9z_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.dbn_1 = Wt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r == this.cbn_1.RegisterError.InvalidAuth ? Yt() : r == this.cbn_1.RegisterError.UpgradeRequired ? Zt() : r == this.cbn_1.RegisterError.Assertion ? ti() : r == this.cbn_1.RegisterError.Transient ? ii() : r == this.cbn_1.RegisterError.RateLimitExceeded ? si() : ii();
                                        (this.dbn_1 = new It(_)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.dbn_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (6 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (j(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Mi(this.nbn_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.qbn_1 = t), (this.x9_1 = 4);
                                        var i = V();
                                        if (!i.h5r_1.h())
                                            for (var s = i.h5r_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = V();
                                        if (!h.h5r_1.h())
                                            for (var n = P(this.pbn_1.o9z_1), e = h.h5r_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ni(this.nbn_1, this.pbn_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.sbn_1 = t), (this.w9_1 = 3), (t = ct(this.sbn_1.recover(xt(this.obn_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var r = t;
                                        (this.rbn_1 = new mt(r)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var _ = this.z9_1,
                                            c = _.reason,
                                            u = c == this.qbn_1.RecoverErrorReason.InvalidPin ? Ht() : c == this.qbn_1.RecoverErrorReason.NotRegistered ? Dt() : c == this.qbn_1.RecoverErrorReason.InvalidAuth ? Gt() : c == this.qbn_1.RecoverErrorReason.UpgradeRequired ? Bt() : c == this.qbn_1.RecoverErrorReason.Assertion ? Ot() : c == this.qbn_1.RecoverErrorReason.Transient ? Qt() : c == this.qbn_1.RecoverErrorReason.RateLimitExceeded ? Vt() : Qt();
                                        (this.rbn_1 = new kt(u, _.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.rbn_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (6 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (j(Qi).tbn = function (t, i, s, h) {
                        var n = new Bi(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (j(Qi).ubn = function (t, i, s) {
                        var h = new Oi(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(Yi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = xi(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ni(new as(i.publicKey), new fs(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (j(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = di(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new us(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 8), (this.w9_1 = 1), (t = this.fbp_1.vbp(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ibp_1 = t), (this.w9_1 = 2), (t = zi(this.gbp_1.abh_1, this.ibp_1.obc_1.ubl_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.jbp_1 = t;
                                        var i;
                                        if (null == this.jbp_1) return null;
                                        if (((i = this.jbp_1), (this.kbp_1 = i), (this.w9_1 = 3), (t = wi(this.ibp_1.nbc_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.lbp_1 = t), (this.mbp_1 = $t(this.lbp_1, 65)), (this.w9_1 = 4), (t = yi(this.kbp_1, this.mbp_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.nbp_1 = t;
                                        var s;
                                        if (null == this.nbp_1) return null;
                                        if (((s = this.nbp_1), (this.obp_1 = s), (this.pbp_1 = this.obp_1.slice(0, 16)), (this.qbp_1 = this.obp_1.slice(16, 32)), (this.w9_1 = 5), (t = $i(this.pbp_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.rbp_1 = t;
                                        var h;
                                        if (null == this.rbp_1) return null;
                                        if (((h = this.rbp_1), (this.sbp_1 = h), (this.w9_1 = 6), (t = li(this.hbp_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.tbp_1 = t), (this.w9_1 = 7), (t = pi(this.sbp_1, this.tbp_1, this.qbp_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var n = t;
                                        return pt(bt([this.mbp_1, n]));
                                    case 8:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (8 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (j(is).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.hbq_1 = ot(this.gbq_1)), (this.ibq_1 = this.hbq_1.slice(0, 65)), (this.jbq_1 = this.hbq_1.slice(65)), (this.w9_1 = 1), (t = gi("raw", this.ibq_1, E, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.kbq_1 = t;
                                        var i;
                                        if (null == this.kbq_1) return null;
                                        if (((i = this.kbq_1), (this.lbq_1 = i), (this.w9_1 = 2), (t = zi(this.lbq_1, this.fbq_1.ubl_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.mbq_1 = t;
                                        var s;
                                        if (null == this.mbq_1) return null;
                                        if (((s = this.mbq_1), (this.nbq_1 = s), (this.w9_1 = 3), (t = yi(this.nbq_1, this.ibq_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.obq_1 = t;
                                        var h;
                                        if (null == this.obq_1) return null;
                                        if (((h = this.obq_1), (this.pbq_1 = h), (this.qbq_1 = this.pbq_1.slice(0, 16)), (this.rbq_1 = this.pbq_1.slice(16, 32)), (this.w9_1 = 4), (t = $i(this.qbq_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.sbq_1 = t;
                                        var n;
                                        if (null == this.sbq_1) return null;
                                        if (((n = this.sbq_1), (this.tbq_1 = n), (this.w9_1 = 5), (t = Ri(this.rbq_1, this.tbq_1, this.jbq_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.ubq_1 = t;
                                        var e;
                                        if (null == this.ubq_1) return null;
                                        if (((e = this.ubq_1), (this.vbq_1 = e), (this.w9_1 = 6), (t = Vi(this.ebq_1, this.vbq_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        return t;
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (7 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = gi("spki", gt(this.fbr_1), E, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new as(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(hs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = gi("spki", gt(this.qbr_1), E, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.rbr_1 = s;
                                        var h;
                                        if (null == this.rbr_1) h = null;
                                        else h = new as(this.rbr_1);
                                        this.sbr_1 = h;
                                        var n;
                                        if (null == this.sbr_1) return null;
                                        if (((n = this.sbr_1), (this.tbr_1 = n), (this.w9_1 = 2), (t = this.tbr_1), (i = this), (s = Ei(t.abh_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.ubr_1 = s;
                                        var e = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((e.d = Rt(this.pbr_1, !0)), (e.x = this.ubr_1.x), (e.y = this.ubr_1.y), (this.vbr_1 = e), (this.w9_1 = 3), (s = qi("jwk", this.vbr_1, "deriveBits", this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new fs(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (4 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (j(ns).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = mi(this.fbs_1.ubl_1, ot(this.gbs_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : qt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.qbs_1.abh_1, ot(this.sbs_1), ot(this.rbs_1), this)) === N())) return t;
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
                    (j(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ji(this.ebo_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new us(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(_s).vbp = function (t) {
                        var i = new Yi(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (j(_s).tbs = function (t) {
                        var i = new Zi(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (j(_s).ubs = function (t, i, s) {
                        var h = new ts(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(_s).vbs = function (t, i, s) {
                        var h = new is(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(_s).wbs = function (t, i) {
                        var s = new ss(this, t, i);
                        return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                    }),
                    (j(_s).xbs = function (t, i, s) {
                        var h = new hs(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(_s).ybs = function (t, i) {
                        return Vi(this, gt(t), i);
                    }),
                    (j(_s).zbs = function (t, i, s) {
                        var h = new ns(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (j(_s).abt = function (t, i, s, h) {
                        var n = new es(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (j(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = li(this.jbt_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return qt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(us).vbd = function (t) {
                        var i = new cs(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (j(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wi(this.sbt_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return qt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(as).vbd = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (j(bs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = vi(this.bbu_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return qt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (j(fs).vbd = function (t) {
                        var i = new bs(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    X(j(Xt), "name", j(Xt).z2),
                    X(j(Xt), "ordinal", j(Xt).a3),
                    X(j(Ut), "name", j(Ut).z2),
                    X(j(Ut), "ordinal", j(Ut).a3),
                    (m = new _s()),
                    ls(t),
                    (t.$jsExportAll$ = ls),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = mt),
                    (t.$_$.c = It),
                    (t.$_$.d = Pt),
                    (t.$_$.e = Qi),
                    (t.$_$.f = ni),
                    (t.$_$.g = ei),
                    (t.$_$.h = hi),
                    (t.$_$.i = St),
                    (t.$_$.j = Jt),
                    (t.$_$.k = Wt),
                    (t.$_$.l = function () {
                        return null == q && new oi(), q;
                    }),
                    (t.$_$.m = m);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.479e5d0a.js.map
