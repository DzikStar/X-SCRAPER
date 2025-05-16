(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, h, n, e, r) {
                "use strict";
                var _,
                    a,
                    u,
                    c,
                    o,
                    b,
                    f,
                    l,
                    w,
                    v,
                    x,
                    d,
                    y,
                    z,
                    $,
                    g,
                    m,
                    R,
                    p,
                    j,
                    k = Math.imul,
                    S = i.$_$.ue,
                    q = i.$_$.rd,
                    E = i.$_$.g,
                    J = i.$_$.lj,
                    C = i.$_$.xd,
                    A = i.$_$.mj,
                    F = i.$_$.o6,
                    K = i.$_$.yi,
                    X = i.$_$.gd,
                    P = i.$_$.ye,
                    W = i.$_$.qd,
                    I = i.$_$.id,
                    T = i.$_$.xk,
                    L = i.$_$.rc,
                    M = h.$_$.j,
                    N = i.$_$.cc,
                    U = h.$_$.h,
                    H = i.$_$.e4,
                    D = i.$_$.k4,
                    G = i.$_$.j4,
                    B = h.$_$.e,
                    O = h.$_$.d,
                    Q = i.$_$.ve,
                    V = i.$_$.a4,
                    Y = n.$_$.d,
                    Z = i.$_$.aj,
                    tt = i.$_$.td,
                    it = h.$_$.c,
                    st = h.$_$.i,
                    ht = h.$_$.a,
                    nt = h.$_$.g,
                    et = i.$_$.f,
                    rt = i.$_$.pf,
                    _t = i.$_$.db,
                    at = h.$_$.b,
                    ut = e.$_$.k,
                    ct = r.$_$.h,
                    ot = r.$_$.b,
                    bt = r.$_$.v,
                    ft = r.$_$.g,
                    lt = i.$_$.wd,
                    wt = h.$_$.f,
                    vt = i.$_$.d6,
                    xt = i.$_$.uh,
                    dt = i.$_$.eg,
                    yt = i.$_$.lk,
                    zt = i.$_$.uf,
                    $t = i.$_$.od,
                    gt = r.$_$.t,
                    mt = r.$_$.d,
                    Rt = r.$_$.f,
                    pt = r.$_$.k,
                    jt = r.$_$.c;
                function kt(t) {
                    At.call(this), (this.bytes = t);
                }
                function St(t, i) {
                    At.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function qt() {
                    (_ = this), At.call(this);
                }
                function Et() {
                    return null == _ && new qt(), _;
                }
                function Jt() {
                    (a = this), At.call(this);
                }
                function Ct() {
                    return null == a && new Jt(), a;
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
                    if (v) return F;
                    (v = !0), (u = new Pt("InvalidPin", 0, !0)), (c = new Pt("NotRegistered", 1, !0)), (o = new Pt("InvalidAuth", 2, !0)), (b = new Pt("UpgradeRequired", 3, !1)), (f = new Pt("Assertion", 4, !1)), (l = new Pt("Transient", 5, !0)), (w = new Pt("RateLimitExceeded", 6, !0));
                }
                function Pt(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Wt() {
                    (x = this), Lt.call(this);
                }
                function It() {
                    return null == x && new Wt(), x;
                }
                function Tt(t) {
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
                            Ut(), A("No enum constant value.");
                    }
                }
                function Ut() {
                    if (R) return F;
                    (R = !0), (d = new Ht("InvalidAuth", 0, !0)), (y = new Ht("UpgradeRequired", 1, !1)), (z = new Ht("Assertion", 2, !1)), ($ = new Ht("Transient", 3, !0)), (g = new Ht("RateLimitExceeded", 4, !0)), (m = new Ht("StorageFailed", 5, !0));
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
                    return Xt(), b;
                }
                function Qt() {
                    return Xt(), f;
                }
                function Vt() {
                    return Xt(), l;
                }
                function Yt() {
                    return Xt(), w;
                }
                function Zt() {
                    return Ut(), d;
                }
                function ti() {
                    return Ut(), y;
                }
                function ii() {
                    return Ut(), z;
                }
                function si() {
                    return Ut(), $;
                }
                function hi() {
                    return Ut(), g;
                }
                function ni() {
                    return Ut(), m;
                }
                function ei(t, i) {
                    (this.gb8_1 = t), (this.hb8_1 = i);
                }
                function ri(t, i) {
                    (this.ib8_1 = t), (this.jb8_1 = i);
                }
                function _i(t, i, s, h, n) {
                    L.call(this, n), (this.sb8_1 = t), (this.tb8_1 = i), (this.ub8_1 = s), (this.vb8_1 = h);
                }
                function ai(t, i, s, h, n, e, r) {
                    L.call(this, r), (this.cba_1 = t), (this.dba_1 = i), (this.eba_1 = s), (this.fba_1 = h), (this.gba_1 = n), (this.hba_1 = e);
                }
                function ui(t, i, s, h) {
                    L.call(this, h), (this.mbb_1 = t), (this.nbb_1 = i), (this.obb_1 = s);
                }
                function ci(t, i, s, h, n) {
                    L.call(this, n), (this.abc_1 = t), (this.bbc_1 = i), (this.cbc_1 = s), (this.dbc_1 = h);
                }
                function oi() {
                    (p = this), (this.cbb_1 = 1024), (this.dbb_1 = (1024 + at()) | 0);
                }
                function bi(t, i) {
                    var s = new fi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function fi(t, i) {
                    L.call(this, i), (this.tbc_1 = t);
                }
                function li(t) {
                    return t.crypto;
                }
                function wi(t, i) {
                    return Ei(t.ob9_1, "raw", i);
                }
                function vi(t, i) {
                    return Ei(t.ubc_1, "spki", i);
                }
                function xi(t, i) {
                    var s = new Ci(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function di(t) {
                    var i = li(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ut(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function yi(t) {
                    var i = li(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ut(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function zi(t, i, s) {
                    var h = new Ai(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function $i(t, i, s) {
                    var h = new Fi(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function gi(t, i, s) {
                    var h = new Ki(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function mi(t, i, s, h) {
                    var n = new Xi(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Ri(t, i, s, h) {
                    var n = new Pi(t, i, (s = s === E ? null : s), h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function pi(t, i, s, h) {
                    var n = new Wi(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function ji(t, i, s, h) {
                    var n = new Ii(t, i, (s = s === E ? null : s), h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function ki(t, i, s) {
                    var h = new Ti(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Si(t, i, s, h) {
                    var n = new Li(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function qi(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function Ei(t, i, s) {
                    return ut(li(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i, s) {
                    return ut(li(window).subtle.exportKey(i, t), s);
                }
                function Ci(t, i) {
                    L.call(this, i), (this.dbd_1 = t);
                }
                function Ai(t, i, s) {
                    L.call(this, s), (this.mbd_1 = t), (this.nbd_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.xbd_1 = t), (this.ybd_1 = i);
                }
                function Ki(t, i, s) {
                    L.call(this, s), (this.ibe_1 = t), (this.jbe_1 = i);
                }
                function Xi(t, i, s, h) {
                    L.call(this, h), (this.tbe_1 = t), (this.ube_1 = i), (this.vbe_1 = s);
                }
                function Pi(t, i, s, h) {
                    L.call(this, h), (this.fbf_1 = t), (this.gbf_1 = i), (this.hbf_1 = s);
                }
                function Wi(t, i, s, h) {
                    L.call(this, h), (this.rbf_1 = t), (this.sbf_1 = i), (this.tbf_1 = s);
                }
                function Ii(t, i, s, h) {
                    L.call(this, h), (this.dbg_1 = t), (this.ebg_1 = i), (this.fbg_1 = s);
                }
                function Ti(t, i, s) {
                    L.call(this, s), (this.pbg_1 = t), (this.qbg_1 = i);
                }
                function Li(t, i, s, h) {
                    L.call(this, h), (this.abh_1 = t), (this.bbh_1 = i), (this.cbh_1 = s);
                }
                function Mi(t, i) {
                    L.call(this, i), (this.mbh_1 = t);
                }
                function Ni(t) {
                    var i = t.pbh_1;
                    return (
                        $t(
                            "juiceboxModule",
                            1,
                            zt,
                            function (t) {
                                return Ni(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function Ui(t, i, s) {
                    var h = new Bi(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Hi(t, i) {
                    (this.ibi_1 = t), L.call(this, i);
                }
                function Di(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Hi(t, i),
                                h = function (t) {
                                    return s.jbi(t);
                                };
                            return (h.$arity = 0), h;
                        })(t, null);
                    };
                }
                function Gi(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, h) {
                                    try {
                                        var n = wt(t),
                                            e = vt().gn_1,
                                            r = xt(D(n), e),
                                            _ = i.d9x_1.r2(r);
                                        s(null == _ ? null : _.k9x_1);
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
                function Bi(t, i, s) {
                    L.call(this, s), (this.ybh_1 = t), (this.zbh_1 = i);
                }
                function Oi(t, i, s, h, n) {
                    L.call(this, n), (this.sbi_1 = t), (this.tbi_1 = i), (this.ubi_1 = s), (this.vbi_1 = h);
                }
                function Qi(t, i, s, h) {
                    L.call(this, h), (this.hbj_1 = t), (this.ibj_1 = i), (this.jbj_1 = s);
                }
                function Vi() {
                    this.pbh_1 = yt(Di(this));
                }
                function Yi(t, i, s) {
                    var h = new _s(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Zi(t, i) {
                    L.call(this, i), (this.hbk_1 = t);
                }
                function ts(t, i) {
                    L.call(this, i), (this.qbk_1 = t);
                }
                function is(t, i, s, h) {
                    L.call(this, h), (this.zbk_1 = t), (this.abl_1 = i), (this.bbl_1 = s);
                }
                function ss(t, i, s, h) {
                    L.call(this, h), (this.ybl_1 = t), (this.zbl_1 = i), (this.abm_1 = s);
                }
                function hs(t, i, s) {
                    L.call(this, s), (this.ybm_1 = t), (this.zbm_1 = i);
                }
                function ns(t, i, s, h) {
                    L.call(this, h), (this.ibn_1 = t), (this.jbn_1 = i), (this.kbn_1 = s);
                }
                function es(t, i, s, h) {
                    L.call(this, h), (this.ybn_1 = t), (this.zbn_1 = i), (this.abo_1 = s);
                }
                function rs(t, i, s, h, n) {
                    L.call(this, n), (this.jbo_1 = t), (this.kbo_1 = i), (this.lbo_1 = s), (this.mbo_1 = h);
                }
                function _s(t, i, s) {
                    L.call(this, s), (this.xbj_1 = t), (this.ybj_1 = i);
                }
                function as() {
                    this.obl_1 = 65;
                }
                function us(t, i) {
                    L.call(this, i), (this.dbp_1 = t);
                }
                function cs(t) {
                    this.ob9_1 = t;
                }
                function os(t, i) {
                    L.call(this, i), (this.mbp_1 = t);
                }
                function bs(t) {
                    this.ubc_1 = t;
                }
                function fs(t, i) {
                    L.call(this, i), (this.vbp_1 = t);
                }
                function ls(t) {
                    this.obh_1 = t;
                }
                function ws(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = At), (h.JuiceboxRecoverPrivateKeyResult.Success = kt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = St), X(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Et), X(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (h.JuiceboxRecoverFailureReason = Pt), (h.JuiceboxRecoverFailureReason.values = Ft), (h.JuiceboxRecoverFailureReason.valueOf = Kt), X(h.JuiceboxRecoverFailureReason, "InvalidPin", Dt), X(h.JuiceboxRecoverFailureReason, "NotRegistered", Gt), X(h.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), X(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), X(h.JuiceboxRecoverFailureReason, "Assertion", Qt), X(h.JuiceboxRecoverFailureReason, "Transient", Vt), X(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (h.JuiceboxRegisterPrivateKeyResult = Lt), X(h.JuiceboxRegisterPrivateKeyResult, "Success", It), (h.JuiceboxRegisterPrivateKeyResult.Failure = Tt), (h.JuiceboxRegisterFailureReason = Ht), (h.JuiceboxRegisterFailureReason.values = Mt), (h.JuiceboxRegisterFailureReason.valueOf = Nt), X(h.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), X(h.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), X(h.JuiceboxRegisterFailureReason, "Assertion", ii), X(h.JuiceboxRegisterFailureReason, "Transient", si), X(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", hi), X(h.JuiceboxRegisterFailureReason, "StorageFailed", ni);
                }
                q(At, "JuiceboxRecoverPrivateKeyResult"),
                    q(kt, "Success", E, At),
                    q(St, "JuiceboxFailure", E, At),
                    C(qt, "KeyReconstructionFailure", E, At),
                    C(Jt, "NoJuiceboxTokens", E, At),
                    q(Pt, "JuiceboxRecoverFailureReason", E, K),
                    q(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    C(Wt, "Success", E, Lt),
                    q(Tt, "Failure", E, Lt),
                    q(Ht, "JuiceboxRegisterFailureReason", E, K),
                    q(ei, "XChatKeyPair"),
                    q(ri, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ai, L),
                    tt(ui, L),
                    tt(ci, L),
                    C(oi, "LibsodiumEncryption", E, E, E, [3, 5, 2]),
                    tt(fi, L),
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
                    lt(Hi, L, E, [0]),
                    tt(Bi, L),
                    tt(Oi, L),
                    tt(Qi, L),
                    q(Vi, "WebJuiceboxApi", Vi, E, E, [1, 3, 2]),
                    tt(Zi, L),
                    tt(ts, L),
                    tt(is, L),
                    tt(ss, L),
                    tt(hs, L),
                    tt(ns, L),
                    tt(es, L),
                    tt(rs, L),
                    tt(_s, L),
                    C(as, "WebKeyFactory", E, E, E, [0, 2, 1, 3]),
                    tt(us, L),
                    q(cs, "XChatConversationKey", E, E, E, [0]),
                    tt(os, L),
                    q(bs, "XChatPublicKey", E, E, E, [0]),
                    tt(fs, L),
                    q(ls, "XChatPrivateKey", E, E, E, [0]),
                    (S(kt).u9z = function () {
                        return this.bytes;
                    }),
                    (S(St).xb7 = function () {
                        return this.reason;
                    }),
                    (S(St).yb7 = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).gh = function () {
                        return this.reason;
                    }),
                    (S(St).hh = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).zb7 = function (t, i) {
                        return new St(t, i);
                    }),
                    (S(St).copy = function (t, i, s) {
                        return (t = t === E ? this.reason : t), (i = i === E ? this.guessesRemaining : i), this.zb7(t, i);
                    }),
                    (S(St).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (S(St).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (k(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (S(St).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof St)) return !1;
                        var i = t instanceof St ? t : J();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (S(qt).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (S(qt).hashCode = function () {
                        return 188209770;
                    }),
                    (S(qt).equals = function (t) {
                        return this === t || (t instanceof qt && (t instanceof qt || J(), !0));
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
                    (S(Pt).cb8 = function () {
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
                    (S(Tt).xb7 = function () {
                        return this.reason;
                    }),
                    (S(Tt).gh = function () {
                        return this.reason;
                    }),
                    (S(Tt).db8 = function (t) {
                        return new Tt(t);
                    }),
                    (S(Tt).copy = function (t, i) {
                        return (t = t === E ? this.reason : t), this.db8(t);
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
                    (S(Ht).cb8 = function () {
                        return this.retryable;
                    }),
                    (S(ei).toString = function () {
                        return "XChatKeyPair(public=" + P(this.gb8_1) + ", private=" + P(this.hb8_1) + ")";
                    }),
                    (S(ei).hashCode = function () {
                        var t = W(this.gb8_1);
                        return (t = (k(t, 31) + W(this.hb8_1)) | 0);
                    }),
                    (S(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : J();
                        return !!I(this.gb8_1, i.gb8_1) && !!I(this.hb8_1, i.hb8_1);
                    }),
                    (S(ri).toString = function () {
                        return "XChatPrivateKeys(identity=" + P(this.ib8_1) + ", signing=" + T(this.jb8_1) + ")";
                    }),
                    (S(ri).hashCode = function () {
                        var t = W(this.ib8_1);
                        return (t = (k(t, 31) + (null == this.jb8_1 ? 0 : W(this.jb8_1))) | 0);
                    }),
                    (S(ri).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ri)) return !1;
                        var i = t instanceof ri ? t : J();
                        return !!I(this.ib8_1, i.ib8_1) && !!I(this.jb8_1, i.jb8_1);
                    }),
                    (S(_i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.yb8_1 = U), (this.w9_1 = 4), (t = this.tb8_1.pb9(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.zb8_1 = t), (this.ab9_1 = H(this.zb8_1)), (this.bb9_1 = this.yb8_1.qb7(this.ab9_1)), (this.cb9_1 = this.bb9_1.gh()), (this.db9_1 = this.bb9_1.pb6()), (this.w9_1 = 5);
                                        var i = this.db9_1;
                                        if ((t = this.vb8_1.qb9(D(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.eb9_1 = G(this.db9_1)), (this.w9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.ub8_1.rb9(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.fb9_1 = t), null == this.fb9_1)) {
                                            (this.xb8_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.gb9_1 = this.fb9_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.hb9_1 = this.gb9_1), (this.w9_1 = 9), (t = this.ub8_1.sb9(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.ib9_1 = O()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.ib9_1 = B()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.jb9_1 = this.ib9_1;
                                        var s = U,
                                            h = this.hb9_1,
                                            n = H(h),
                                            e = this.jb9_1;
                                        (this.kb9_1 = s.sb7(this.cb9_1, n, E, V(Q(e)))), (this.eb9_1 = (this.eb9_1 + G(this.kb9_1)) | 0), (this.w9_1 = 11);
                                        var r = this.kb9_1;
                                        if ((t = this.vb8_1.qb9(D(r), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.wb8_1 = F), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof Z)) {
                                            this.lb9_1 = this.z9_1;
                                            var _ = Y(),
                                                a = this.lb9_1;
                                            if (!_.d5t_1.h())
                                                for (var u = _.d5t_1.z().p(); u.q(); ) {
                                                    u.r().o2().e("XWS", a, "encryptStream failed");
                                                }
                                            (this.xb8_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.mb9_1 = this.z9_1), this.ub8_1.e5(), (this.w9_1 = 15), (t = this.vb8_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.vb8_1.e5(), this.mb9_1);
                                    case 16:
                                        if (((this.nb9_1 = this.xb8_1), (this.x9_1 = 20), this.ub8_1.e5(), (this.w9_1 = 17), (t = this.vb8_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.vb8_1.e5(), this.nb9_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.ub8_1.e5(), (this.w9_1 = 19), (t = this.vb8_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.vb8_1.e5(), F;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (20 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.eba_1.rb9(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.kba_1 = t), null == this.kba_1)) {
                                            (this.jba_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.lba_1 = this.kba_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.mba_1 = this.lba_1), (this.nba_1 = this.mba_1.length), (this.oba_1 = U), (this.w9_1 = 6), (t = this.dba_1.pb9(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.pba_1 = t), (this.qba_1 = H(this.pba_1));
                                        var i = this.mba_1;
                                        (this.rba_1 = this.oba_1.tb7(this.qba_1, H(i))), (this.sba_1 = this.rba_1.gh()), (this.tba_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.eba_1.rb9(this.cba_1.dbb_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.uba_1 = t), null == this.uba_1)) {
                                            (this.jba_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.vba_1 = this.uba_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.wba_1 = this.vba_1), (this.nba_1 = (this.nba_1 + this.wba_1.length) | 0);
                                        var s = U,
                                            h = this.wba_1;
                                        (this.xba_1 = s.vb7(this.sba_1, H(h))), (this.yba_1 = this.xba_1.sb6()), (this.w9_1 = 10);
                                        var n = this.yba_1;
                                        if ((t = this.fba_1.qb9(D(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.hba_1 && null != this.gba_1) {
                                            var e = this.nba_1 / this.gba_1.bytes.y3();
                                            e > this.tba_1 + 0.1 && (this.hba_1(e), (this.tba_1 = e));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.iba_1 = F), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof Z)) {
                                            this.zba_1 = this.z9_1;
                                            var r = Y(),
                                                _ = this.zba_1;
                                            if (!r.d5t_1.h())
                                                for (var a = r.d5t_1.z().p(); a.q(); ) {
                                                    a.r().o2().e("XWS", _, "XWS decryptStream failed");
                                                }
                                            (this.jba_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.abb_1 = this.z9_1), this.eba_1.e5(), (this.w9_1 = 14), (t = this.fba_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.fba_1.e5(), this.abb_1);
                                    case 15:
                                        if (((this.bbb_1 = this.jba_1), (this.x9_1 = 19), this.eba_1.e5(), (this.w9_1 = 16), (t = this.fba_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.fba_1.e5(), this.bbb_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.eba_1.e5(), (this.w9_1 = 18), (t = this.fba_1.tb9(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.fba_1.e5(), F;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.pbb_1 = st.wb7(ht())), (this.qbb_1 = nt);
                                        var i = this.obb_1;
                                        if (((this.rbb_1 = H(i)), (this.w9_1 = 2), (t = this.nbb_1.pb9(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = H(t),
                                            h = this.qbb_1.ob7(this.rbb_1, this.pbb_1, s),
                                            n = this.pbb_1,
                                            e = D(n),
                                            r = D(h),
                                            _ = H(et([e, r]));
                                        return D(_).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var a = this.z9_1,
                                                u = Y();
                                            if (!u.d5t_1.h())
                                                for (var c = u.d5t_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", a, "XWS encryptMessage failed");
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = _t(this.cbc_1, rt(0, ht()));
                                        this.ebc_1 = H(i.slice());
                                        var s = _t(this.cbc_1, rt(ht(), this.cbc_1.length));
                                        if (((this.fbc_1 = H(s.slice())), (this.gbc_1 = nt), (this.w9_1 = 2), (t = this.bbc_1.pb9(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var h = H(t),
                                            n = this.gbc_1.pb7(this.fbc_1, this.ebc_1, h);
                                        return D(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var e = this.z9_1,
                                                r = Y();
                                            if (!r.d5t_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.dbc_1, a = r.d5t_1.z().p(); a.q(); ) {
                                                    a.r().o2().e("XWS", e, _);
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
                    (S(oi).hbc = function (t, i, s, h) {
                        var n = new _i(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(oi).ibc = function (t, i, s, h, n, e) {
                        var r = new ai(this, t, i, s, h, n, e);
                        return (r.y9_1 = F), (r.z9_1 = null), r.oa();
                    }),
                    (S(oi).jbc = function (t, i, s) {
                        var h = new ui(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(oi).kbc = function (t, i, s, h) {
                        var n = new ci(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.tbc_1.fp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.tbc_1.nb7(this)) === N())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ji(this.dbd_1.obh_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ct(i);
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
                    (S(Ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.mbd_1), (t = ut(i.deriveBits(s, this.nbd_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.obd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.obd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.obd_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ut(li(window).subtle.digest("SHA-256", ft([this.xbd_1, bt(new Int8Array([0, 0, 0, 1])).buffer, this.ybd_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zbd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = Y();
                                            if (!s.d5t_1.h())
                                                for (var h = s.d5t_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", i, null);
                                                }
                                            (this.zbd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zbd_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (S(Ki).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.jbe_1];
                                        if ((t = ut(i.importKey("raw", this.ibe_1, s, !1, h), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.kbe_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.kbe_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.kbe_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.vbe_1), (t = ut(i.encrypt(s, this.tbe_1, this.ube_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.wbe_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.wbe_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.wbe_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
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
                                            s = li(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.hbf_1 ? [] : [this.hbf_1]), (t = ut(s.importKey(this.fbf_1, this.gbf_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ibf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.ibf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ibf_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Wi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.rbf_1), (t = ut(i.decrypt(s, this.sbf_1, this.tbf_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ubf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.ubf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ubf_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
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
                                            s = li(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.fbg_1 ? [] : [this.fbg_1]), (t = ut(s.importKey(this.dbg_1, this.ebg_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.gbg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.gbg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.gbg_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Ti).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ut(i.sign(s, this.pbg_1, this.qbg_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.rbg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.rbg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.rbg_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ut(i.verify(s, this.abh_1, this.cbh_1, this.bbh_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.dbh_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.dbh_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dbh_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ut(i.importKey("raw", this.mbh_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.nbh_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.nbh_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.nbh_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Hi).jbi = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(Hi).d2h = function (t) {
                        return this.jbi(t);
                    }),
                    (S(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ut((this.ibi_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new Hi(this.ibi_1, t);
                    }),
                    (S(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.ybh_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Gi(this.zbh_1)), new h(new s(this.zbh_1.i9x_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (S(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.sbi_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.wbi_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.d5t_1.h())
                                            for (var s = i.d5t_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.d5t_1.h())
                                            for (var n = P(this.ubi_1.d9x_1), e = h.d5t_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.sbi_1, this.ubi_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.ybi_1 = t), (this.w9_1 = 3), (t = ut(this.ybi_1.register(dt(this.tbi_1), this.vbi_1, new Int8Array(0), this.ubi_1.e9x_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.xbi_1 = It()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r == this.wbi_1.RegisterError.InvalidAuth ? Zt() : r == this.wbi_1.RegisterError.UpgradeRequired ? ti() : r == this.wbi_1.RegisterError.Assertion ? ii() : r == this.wbi_1.RegisterError.Transient ? si() : r == this.wbi_1.RegisterError.RateLimitExceeded ? hi() : si();
                                        (this.xbi_1 = new Tt(_)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.xbi_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (S(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.hbj_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.kbj_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.d5t_1.h())
                                            for (var s = i.d5t_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.d5t_1.h())
                                            for (var n = P(this.jbj_1.d9x_1), e = h.d5t_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.hbj_1, this.jbj_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.mbj_1 = t), (this.w9_1 = 3), (t = ut(this.mbj_1.recover(dt(this.ibj_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var r = t;
                                        (this.lbj_1 = new kt(r)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var _ = this.z9_1,
                                            a = _.reason,
                                            u = a == this.kbj_1.RecoverErrorReason.InvalidPin ? Dt() : a == this.kbj_1.RecoverErrorReason.NotRegistered ? Gt() : a == this.kbj_1.RecoverErrorReason.InvalidAuth ? Bt() : a == this.kbj_1.RecoverErrorReason.UpgradeRequired ? Ot() : a == this.kbj_1.RecoverErrorReason.Assertion ? Qt() : a == this.kbj_1.RecoverErrorReason.Transient ? Vt() : a == this.kbj_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.lbj_1 = new St(u, _.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.lbj_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (6 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(Vi).nbj = function (t, i, s, h) {
                        var n = new Oi(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(Vi).obj = function (t, i, s) {
                        var h = new Qi(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = di(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ei(new bs(i.publicKey), new ls(i.privateKey));
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = yi(this)) === N())) return t;
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
                                        if (((this.x9_1 = 8), (this.w9_1 = 1), (t = this.zbk_1.pbl(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.cbl_1 = t), (this.w9_1 = 2), (t = zi(this.abl_1.ubc_1, this.cbl_1.hb8_1.obh_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.dbl_1 = t;
                                        var i;
                                        if (null == this.dbl_1) return null;
                                        if (((i = this.dbl_1), (this.ebl_1 = i), (this.w9_1 = 3), (t = vi(this.cbl_1.gb8_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.fbl_1 = t), (this.gbl_1 = gt(this.fbl_1, 65)), (this.w9_1 = 4), (t = $i(this.ebl_1, this.gbl_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.hbl_1 = t;
                                        var s;
                                        if (null == this.hbl_1) return null;
                                        if (((s = this.hbl_1), (this.ibl_1 = s), (this.jbl_1 = this.ibl_1.slice(0, 16)), (this.kbl_1 = this.ibl_1.slice(16, 32)), (this.w9_1 = 5), (t = gi(this.jbl_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.lbl_1 = t;
                                        var h;
                                        if (null == this.lbl_1) return null;
                                        if (((h = this.lbl_1), (this.mbl_1 = h), (this.w9_1 = 6), (t = wi(this.bbl_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.nbl_1 = t), (this.w9_1 = 7), (t = mi(this.mbl_1, this.nbl_1, this.kbl_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var n = t;
                                        return mt(ft([this.gbl_1, n]));
                                    case 8:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (8 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.bbm_1 = ot(this.abm_1)), (this.cbm_1 = this.bbm_1.slice(0, 65)), (this.dbm_1 = this.bbm_1.slice(65)), (this.w9_1 = 1), (t = Ri("raw", this.cbm_1, E, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.ebm_1 = t;
                                        var i;
                                        if (null == this.ebm_1) return null;
                                        if (((i = this.ebm_1), (this.fbm_1 = i), (this.w9_1 = 2), (t = zi(this.fbm_1, this.zbl_1.obh_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.gbm_1 = t;
                                        var s;
                                        if (null == this.gbm_1) return null;
                                        if (((s = this.gbm_1), (this.hbm_1 = s), (this.w9_1 = 3), (t = $i(this.hbm_1, this.cbm_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.ibm_1 = t;
                                        var h;
                                        if (null == this.ibm_1) return null;
                                        if (((h = this.ibm_1), (this.jbm_1 = h), (this.kbm_1 = this.jbm_1.slice(0, 16)), (this.lbm_1 = this.jbm_1.slice(16, 32)), (this.w9_1 = 4), (t = gi(this.kbm_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.mbm_1 = t;
                                        var n;
                                        if (null == this.mbm_1) return null;
                                        if (((n = this.mbm_1), (this.nbm_1 = n), (this.w9_1 = 5), (t = pi(this.lbm_1, this.nbm_1, this.dbm_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.obm_1 = t;
                                        var e;
                                        if (null == this.obm_1) return null;
                                        if (((e = this.obm_1), (this.pbm_1 = e), (this.w9_1 = 6), (t = Yi(this.ybl_1, this.pbm_1, this)) === N())) return t;
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
                    (S(hs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ri("spki", Rt(this.zbm_1), E, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new bs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ns).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Ri("spki", Rt(this.kbn_1), E, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.lbn_1 = s;
                                        var h;
                                        if (null == this.lbn_1) h = null;
                                        else h = new bs(this.lbn_1);
                                        this.mbn_1 = h;
                                        var n;
                                        if (null == this.mbn_1) return null;
                                        if (((n = this.mbn_1), (this.nbn_1 = n), (this.w9_1 = 2), (t = this.nbn_1), (i = this), (s = Ji(t.ubc_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.obn_1 = s;
                                        var e = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((e.d = pt(this.jbn_1, !0)), (e.x = this.obn_1.x), (e.y = this.obn_1.y), (this.pbn_1 = e), (this.w9_1 = 3), (s = ji("jwk", this.pbn_1, "deriveBits", this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ls(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (4 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.zbn_1.obh_1, ot(this.abo_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : jt(t);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.kbo_1.ubc_1, ot(this.mbo_1), ot(this.lbo_1), this)) === N())) return t;
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
                    (S(_s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.ybj_1, this)) === N())) return t;
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
                    (S(as).pbl = function (t) {
                        var i = new Zi(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(as).nbo = function (t) {
                        var i = new ts(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(as).obo = function (t, i, s) {
                        var h = new is(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(as).pbo = function (t, i, s) {
                        var h = new ss(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(as).qbo = function (t, i) {
                        var s = new hs(this, t, i);
                        return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                    }),
                    (S(as).rbo = function (t, i, s) {
                        var h = new ns(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(as).sbo = function (t, i) {
                        return Yi(this, Rt(t), i);
                    }),
                    (S(as).tbo = function (t, i, s) {
                        var h = new es(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (S(as).ubo = function (t, i, s, h) {
                        var n = new rs(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (S(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wi(this.dbp_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(cs).pb9 = function (t) {
                        var i = new us(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = vi(this.mbp_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(bs).pb9 = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (S(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = xi(this.vbp_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return jt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ls).pb9 = function (t) {
                        var i = new fs(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    X(S(Pt), "name", S(Pt).z2),
                    X(S(Pt), "ordinal", S(Pt).a3),
                    X(S(Ht), "name", S(Ht).z2),
                    X(S(Ht), "ordinal", S(Ht).a3),
                    (j = new as()),
                    ws(t),
                    (t.$jsExportAll$ = ws),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = St),
                    (t.$_$.b = kt),
                    (t.$_$.c = Tt),
                    (t.$_$.d = Wt),
                    (t.$_$.e = Vi),
                    (t.$_$.f = ei),
                    (t.$_$.g = ri),
                    (t.$_$.h = ni),
                    (t.$_$.i = Et),
                    (t.$_$.j = Ct),
                    (t.$_$.k = It),
                    (t.$_$.l = function () {
                        return null == p && new oi(), p;
                    }),
                    (t.$_$.m = j);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.0e86a62a.js.map
