(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, h, n, e, r) {
                "use strict";
                var _,
                    u,
                    c,
                    o,
                    a,
                    b,
                    f,
                    l,
                    w,
                    v,
                    x,
                    y,
                    d,
                    z,
                    p,
                    $,
                    g,
                    q,
                    R,
                    m,
                    k,
                    j = Math.imul,
                    S = i.$_$.xe,
                    E = i.$_$.ud,
                    J = i.$_$.g,
                    C = i.$_$.rj,
                    F = i.$_$.ae,
                    A = i.$_$.sj,
                    K = i.$_$.p6,
                    P = i.$_$.ej,
                    X = i.$_$.id,
                    W = i.$_$.tc,
                    T = i.$_$.ec,
                    I = i.$_$.wd,
                    N = i.$_$.yd,
                    L = i.$_$.bf,
                    M = i.$_$.td,
                    U = i.$_$.kd,
                    H = i.$_$.el,
                    D = h.$_$.j,
                    G = h.$_$.h,
                    B = i.$_$.f4,
                    O = i.$_$.l4,
                    Q = h.$_$.e,
                    V = h.$_$.d,
                    Y = i.$_$.ye,
                    Z = i.$_$.b4,
                    tt = n.$_$.c,
                    it = i.$_$.gj,
                    st = h.$_$.c,
                    ht = h.$_$.i,
                    nt = h.$_$.a,
                    et = h.$_$.g,
                    rt = i.$_$.f,
                    _t = i.$_$.sf,
                    ut = i.$_$.fb,
                    ct = h.$_$.b,
                    ot = e.$_$.n,
                    at = r.$_$.h,
                    bt = r.$_$.b,
                    ft = r.$_$.w,
                    lt = r.$_$.g,
                    wt = i.$_$.zd,
                    vt = h.$_$.f,
                    xt = i.$_$.e6,
                    yt = i.$_$.ai,
                    dt = i.$_$.kg,
                    zt = i.$_$.sk,
                    pt = i.$_$.xf,
                    $t = i.$_$.rd,
                    gt = r.$_$.u,
                    qt = r.$_$.d,
                    Rt = r.$_$.c,
                    mt = r.$_$.f,
                    kt = r.$_$.k;
                function jt(t) {
                    At.call(this), (this.bytes = t);
                }
                function St(t, i) {
                    At.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Et() {
                    (_ = this), At.call(this);
                }
                function Jt() {
                    return null == _ && new Et(), _;
                }
                function Ct() {
                    (u = this), At.call(this);
                }
                function Ft() {
                    return null == u && new Ct(), u;
                }
                function At() {}
                function Kt() {
                    return [Gt(), Bt(), Ot(), Qt(), Vt(), Yt(), Zt()];
                }
                function Pt(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Gt();
                        case "NotRegistered":
                            return Bt();
                        case "InvalidAuth":
                            return Ot();
                        case "UpgradeRequired":
                            return Qt();
                        case "Assertion":
                            return Vt();
                        case "Transient":
                            return Yt();
                        case "RateLimitExceeded":
                            return Zt();
                        default:
                            Xt(), A("No enum constant value.");
                    }
                }
                function Xt() {
                    if (v) return K;
                    (v = !0), (c = new Wt("InvalidPin", 0, !0)), (o = new Wt("NotRegistered", 1, !0)), (a = new Wt("InvalidAuth", 2, !0)), (b = new Wt("UpgradeRequired", 3, !1)), (f = new Wt("Assertion", 4, !1)), (l = new Wt("Transient", 5, !0)), (w = new Wt("RateLimitExceeded", 6, !0));
                }
                function Wt(t, i, s) {
                    P.call(this, t, i), (this.retryable = s);
                }
                function Tt() {
                    (x = this), Lt.call(this);
                }
                function It() {
                    return null == x && new Tt(), x;
                }
                function Nt(t) {
                    Lt.call(this), (this.reason = t);
                }
                function Lt() {}
                function Mt() {
                    return [ti(), ii(), si(), hi(), ni(), ei()];
                }
                function Ut(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return ti();
                        case "UpgradeRequired":
                            return ii();
                        case "Assertion":
                            return si();
                        case "Transient":
                            return hi();
                        case "RateLimitExceeded":
                            return ni();
                        case "StorageFailed":
                            return ei();
                        default:
                            Ht(), A("No enum constant value.");
                    }
                }
                function Ht() {
                    if (q) return K;
                    (q = !0), (y = new Dt("InvalidAuth", 0, !0)), (d = new Dt("UpgradeRequired", 1, !1)), (z = new Dt("Assertion", 2, !1)), (p = new Dt("Transient", 3, !0)), ($ = new Dt("RateLimitExceeded", 4, !0)), (g = new Dt("StorageFailed", 5, !0));
                }
                function Dt(t, i, s) {
                    P.call(this, t, i), (this.retryable = s);
                }
                function Gt() {
                    return Xt(), c;
                }
                function Bt() {
                    return Xt(), o;
                }
                function Ot() {
                    return Xt(), a;
                }
                function Qt() {
                    return Xt(), b;
                }
                function Vt() {
                    return Xt(), f;
                }
                function Yt() {
                    return Xt(), l;
                }
                function Zt() {
                    return Xt(), w;
                }
                function ti() {
                    return Ht(), y;
                }
                function ii() {
                    return Ht(), d;
                }
                function si() {
                    return Ht(), z;
                }
                function hi() {
                    return Ht(), p;
                }
                function ni() {
                    return Ht(), $;
                }
                function ei() {
                    return Ht(), g;
                }
                function ri(t, i, s, h) {
                    W.call(this, h), (this.pbc_1 = t), (this.qbc_1 = i), (this.rbc_1 = s);
                }
                function _i(t, i, s, h) {
                    W.call(this, h), (this.ebd_1 = t), (this.fbd_1 = i), (this.gbd_1 = s);
                }
                function ui() {}
                function ci(t, i) {
                    (this.vbd_1 = t), (this.wbd_1 = i);
                }
                function oi(t, i) {
                    (this.xbd_1 = t), (this.ybd_1 = i);
                }
                function ai(t, i, s, h, n) {
                    W.call(this, n), (this.hbe_1 = t), (this.ibe_1 = i), (this.jbe_1 = s), (this.kbe_1 = h);
                }
                function bi(t, i, s, h, n, e, r) {
                    W.call(this, r), (this.obf_1 = t), (this.pbf_1 = i), (this.qbf_1 = s), (this.rbf_1 = h), (this.sbf_1 = n), (this.tbf_1 = e);
                }
                function fi(t, i, s, h) {
                    W.call(this, h), (this.ybg_1 = t), (this.zbg_1 = i), (this.abh_1 = s);
                }
                function li(t, i, s, h, n) {
                    W.call(this, n), (this.mbh_1 = t), (this.nbh_1 = i), (this.obh_1 = s), (this.pbh_1 = h);
                }
                function wi() {
                    (R = this), (this.obg_1 = 1024), (this.pbg_1 = (1024 + ct()) | 0);
                }
                function vi(t, i) {
                    var s = new xi(t, i);
                    return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                }
                function xi(t, i) {
                    W.call(this, i), (this.fbi_1 = t);
                }
                function yi() {}
                function di() {}
                function zi(t) {
                    return t.crypto;
                }
                function pi(t, i) {
                    return Ki(t.kbi_1, "spki", i);
                }
                function $i(t, i) {
                    var s = new Xi(t, i);
                    return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                }
                function gi(t) {
                    var i = zi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ot(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function qi(t) {
                    var i = zi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ot(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function Ri(t, i, s) {
                    var h = new Wi(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function mi(t, i, s) {
                    var h = new Ti(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function ki(t, i, s) {
                    var h = new Ii(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function ji(t, i, s, h) {
                    var n = new Ni(t, i, s, h);
                    return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                }
                function Si(t, i, s, h) {
                    var n = new Li(t, i, (s = s === J ? null : s), h);
                    return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                }
                function Ei(t, i, s, h) {
                    var n = new Mi(t, i, s, h);
                    return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                }
                function Ji(t, i, s, h) {
                    var n = new Ui(t, i, (s = s === J ? null : s), h);
                    return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                }
                function Ci(t, i, s) {
                    var h = new Hi(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function Fi(t, i, s, h) {
                    var n = new Di(t, i, s, h);
                    return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                }
                function Ai(t, i) {
                    var s = new Gi(t, i);
                    return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                }
                function Ki(t, i, s) {
                    return ot(zi(window).subtle.exportKey(i, t), s);
                }
                function Pi(t, i, s) {
                    return ot(zi(window).subtle.exportKey(i, t), s);
                }
                function Xi(t, i) {
                    W.call(this, i), (this.tbi_1 = t);
                }
                function Wi(t, i, s) {
                    W.call(this, s), (this.cbj_1 = t), (this.dbj_1 = i);
                }
                function Ti(t, i, s) {
                    W.call(this, s), (this.nbj_1 = t), (this.obj_1 = i);
                }
                function Ii(t, i, s) {
                    W.call(this, s), (this.ybj_1 = t), (this.zbj_1 = i);
                }
                function Ni(t, i, s, h) {
                    W.call(this, h), (this.jbk_1 = t), (this.kbk_1 = i), (this.lbk_1 = s);
                }
                function Li(t, i, s, h) {
                    W.call(this, h), (this.vbk_1 = t), (this.wbk_1 = i), (this.xbk_1 = s);
                }
                function Mi(t, i, s, h) {
                    W.call(this, h), (this.hbl_1 = t), (this.ibl_1 = i), (this.jbl_1 = s);
                }
                function Ui(t, i, s, h) {
                    W.call(this, h), (this.tbl_1 = t), (this.ubl_1 = i), (this.vbl_1 = s);
                }
                function Hi(t, i, s) {
                    W.call(this, s), (this.fbm_1 = t), (this.gbm_1 = i);
                }
                function Di(t, i, s, h) {
                    W.call(this, h), (this.qbm_1 = t), (this.rbm_1 = i), (this.sbm_1 = s);
                }
                function Gi(t, i) {
                    W.call(this, i), (this.cbn_1 = t);
                }
                function Bi(t) {
                    var i = t.fbn_1;
                    return (
                        $t(
                            "juiceboxModule",
                            1,
                            pt,
                            function (t) {
                                return Bi(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function Oi(t, i, s) {
                    var h = new Zi(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function Qi(t, i) {
                    (this.ybn_1 = t), W.call(this, i);
                }
                function Vi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Qi(t, i),
                                h = function (t) {
                                    return s.zbn(t);
                                };
                            return (h.$arity = 0), h;
                        })(t, null);
                    };
                }
                function Yi(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, h) {
                                    try {
                                        var n = vt(t),
                                            e = xt().in_1,
                                            r = yt(O(n), e),
                                            _ = i.v9y_1.r2(r);
                                        s(null == _ ? null : _.c9z_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        h(t);
                                    }
                                    return K;
                                };
                            })(i, t),
                        );
                    };
                }
                function Zi(t, i, s) {
                    W.call(this, s), (this.obn_1 = t), (this.pbn_1 = i);
                }
                function ts(t, i, s, h, n) {
                    W.call(this, n), (this.ibo_1 = t), (this.jbo_1 = i), (this.kbo_1 = s), (this.lbo_1 = h);
                }
                function is(t, i, s, h) {
                    W.call(this, h), (this.xbo_1 = t), (this.ybo_1 = i), (this.zbo_1 = s);
                }
                function ss() {
                    this.fbn_1 = zt(Vi(this));
                }
                function hs(t, i) {
                    W.call(this, i), (this.xbp_1 = t);
                }
                function ns(t, i) {
                    W.call(this, i), (this.gbq_1 = t);
                }
                function es(t, i, s, h) {
                    W.call(this, h), (this.pbq_1 = t), (this.qbq_1 = i), (this.rbq_1 = s);
                }
                function rs(t, i, s, h) {
                    W.call(this, h), (this.mbr_1 = t), (this.nbr_1 = i), (this.obr_1 = s);
                }
                function _s(t, i, s) {
                    W.call(this, s), (this.kbs_1 = t), (this.lbs_1 = i);
                }
                function us(t, i, s, h) {
                    W.call(this, h), (this.ubs_1 = t), (this.vbs_1 = i), (this.wbs_1 = s);
                }
                function cs(t, i, s, h) {
                    W.call(this, h), (this.kbt_1 = t), (this.lbt_1 = i), (this.mbt_1 = s);
                }
                function os(t, i, s, h, n) {
                    W.call(this, n), (this.vbt_1 = t), (this.wbt_1 = i), (this.xbt_1 = s), (this.ybt_1 = h);
                }
                function as(t, i, s) {
                    W.call(this, s), (this.nbp_1 = t), (this.obp_1 = i);
                }
                function bs() {
                    this.dbr_1 = 65;
                }
                function fs(t, i) {
                    W.call(this, i), (this.hbu_1 = t);
                }
                function ls(t) {
                    this.tbc_1 = t;
                }
                function ws(t, i) {
                    W.call(this, i), (this.qbu_1 = t);
                }
                function vs(t) {
                    this.kbi_1 = t;
                }
                function xs(t, i) {
                    W.call(this, i), (this.zbu_1 = t);
                }
                function ys(t) {
                    this.ebn_1 = t;
                }
                function ds(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = At), (h.JuiceboxRecoverPrivateKeyResult.Success = jt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = St), X(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Jt), X(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ft), (h.JuiceboxRecoverFailureReason = Wt), (h.JuiceboxRecoverFailureReason.values = Kt), (h.JuiceboxRecoverFailureReason.valueOf = Pt), X(h.JuiceboxRecoverFailureReason, "InvalidPin", Gt), X(h.JuiceboxRecoverFailureReason, "NotRegistered", Bt), X(h.JuiceboxRecoverFailureReason, "InvalidAuth", Ot), X(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Qt), X(h.JuiceboxRecoverFailureReason, "Assertion", Vt), X(h.JuiceboxRecoverFailureReason, "Transient", Yt), X(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Zt), (h.JuiceboxRegisterPrivateKeyResult = Lt), X(h.JuiceboxRegisterPrivateKeyResult, "Success", It), (h.JuiceboxRegisterPrivateKeyResult.Failure = Nt), (h.JuiceboxRegisterFailureReason = Dt), (h.JuiceboxRegisterFailureReason.values = Mt), (h.JuiceboxRegisterFailureReason.valueOf = Ut), X(h.JuiceboxRegisterFailureReason, "InvalidAuth", ti), X(h.JuiceboxRegisterFailureReason, "UpgradeRequired", ii), X(h.JuiceboxRegisterFailureReason, "Assertion", si), X(h.JuiceboxRegisterFailureReason, "Transient", hi), X(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", ni), X(h.JuiceboxRegisterFailureReason, "StorageFailed", ei);
                }
                E(At, "JuiceboxRecoverPrivateKeyResult"),
                    E(jt, "Success", J, At),
                    E(St, "JuiceboxFailure", J, At),
                    F(Et, "KeyReconstructionFailure", J, At),
                    F(Ct, "NoJuiceboxTokens", J, At),
                    E(Wt, "JuiceboxRecoverFailureReason", J, P),
                    E(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    F(Tt, "Success", J, Lt),
                    E(Nt, "Failure", J, Lt),
                    E(Dt, "JuiceboxRegisterFailureReason", J, P),
                    I(ri, W),
                    I(_i, W),
                    N(ui, "KeyFactory", J, J, J, [0, 2, 1, 3]),
                    E(ci, "XChatKeyPair"),
                    E(oi, "XChatPrivateKeys"),
                    I(ai, W),
                    I(bi, W),
                    I(fi, W),
                    I(li, W),
                    F(wi, "LibsodiumEncryption", J, J, J, [3, 5, 2]),
                    I(xi, W),
                    N(yi, "PerformanceTracer"),
                    F(di, "NoOpPerfTracer", J, J, [yi]),
                    I(Xi, W),
                    I(Wi, W),
                    I(Ti, W),
                    I(Ii, W),
                    I(Ni, W),
                    I(Li, W),
                    I(Mi, W),
                    I(Ui, W),
                    I(Hi, W),
                    I(Di, W),
                    I(Gi, W),
                    wt(Qi, W, J, [0]),
                    I(Zi, W),
                    I(ts, W),
                    I(is, W),
                    E(ss, "WebJuiceboxApi", ss, J, J, [1, 3, 2]),
                    I(hs, W),
                    I(ns, W),
                    I(es, W),
                    I(rs, W),
                    I(_s, W),
                    I(us, W),
                    I(cs, W),
                    I(os, W),
                    I(as, W),
                    F(bs, "WebKeyFactory", J, J, [ui], [0, 2, 1, 3]),
                    I(fs, W),
                    E(ls, "XChatConversationKey", J, J, J, [0]),
                    I(ws, W),
                    E(vs, "XChatPublicKey", J, J, J, [0]),
                    I(xs, W),
                    E(ys, "XChatPrivateKey", J, J, J, [0]),
                    (S(jt).pa1 = function () {
                        return this.bytes;
                    }),
                    (S(St).ybb = function () {
                        return this.reason;
                    }),
                    (S(St).zbb = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).gh = function () {
                        return this.reason;
                    }),
                    (S(St).hh = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).abc = function (t, i) {
                        return new St(t, i);
                    }),
                    (S(St).copy = function (t, i, s) {
                        return (t = t === J ? this.reason : t), (i = i === J ? this.guessesRemaining : i), this.abc(t, i);
                    }),
                    (S(St).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (S(St).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (j(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (S(St).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof St)) return !1;
                        var i = t instanceof St ? t : C();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (S(Et).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (S(Et).hashCode = function () {
                        return 188209770;
                    }),
                    (S(Et).equals = function (t) {
                        return this === t || (t instanceof Et && (t instanceof Et || C(), !0));
                    }),
                    (S(Ct).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (S(Ct).hashCode = function () {
                        return 1362829865;
                    }),
                    (S(Ct).equals = function (t) {
                        return this === t || (t instanceof Ct && (t instanceof Ct || C(), !0));
                    }),
                    (S(Wt).dbc = function () {
                        return this.retryable;
                    }),
                    (S(Tt).toString = function () {
                        return "Success";
                    }),
                    (S(Tt).hashCode = function () {
                        return 1551298723;
                    }),
                    (S(Tt).equals = function (t) {
                        return this === t || (t instanceof Tt && (t instanceof Tt || C(), !0));
                    }),
                    (S(Nt).ybb = function () {
                        return this.reason;
                    }),
                    (S(Nt).gh = function () {
                        return this.reason;
                    }),
                    (S(Nt).ebc = function (t) {
                        return new Nt(t);
                    }),
                    (S(Nt).copy = function (t, i) {
                        return (t = t === J ? this.reason : t), this.ebc(t);
                    }),
                    (S(Nt).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (S(Nt).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (S(Nt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Nt)) return !1;
                        var i = t instanceof Nt ? t : C();
                        return !!this.reason.equals(i.reason);
                    }),
                    (S(Dt).dbc = function () {
                        return this.retryable;
                    }),
                    (S(ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.rbc_1.ubc(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.sbc_1 = t), (this.w9_1 = 2), (t = this.pbc_1.vbc(this.qbc_1, this.sbc_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        return t;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(_i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.ebd_1.lbd(this.fbd_1, this.gbd_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.hbd_1 = t), null == this.hbd_1)) {
                                            (this.ibd_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.jbd_1 = this.hbd_1;
                                        if (((this.kbd_1 = this.jbd_1), (this.w9_1 = 2), (t = this.ebd_1.mbd(this.kbd_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        (this.ibd_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.ibd_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (4 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ci).toString = function () {
                        return "XChatKeyPair(public=" + L(this.vbd_1) + ", private=" + L(this.wbd_1) + ")";
                    }),
                    (S(ci).hashCode = function () {
                        var t = M(this.vbd_1);
                        return (t = (j(t, 31) + M(this.wbd_1)) | 0);
                    }),
                    (S(ci).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ci)) return !1;
                        var i = t instanceof ci ? t : C();
                        return !!U(this.vbd_1, i.vbd_1) && !!U(this.wbd_1, i.wbd_1);
                    }),
                    (S(oi).toString = function () {
                        return "XChatPrivateKeys(identity=" + L(this.xbd_1) + ", signing=" + H(this.ybd_1) + ")";
                    }),
                    (S(oi).hashCode = function () {
                        var t = M(this.xbd_1);
                        return (t = (j(t, 31) + (null == this.ybd_1 ? 0 : M(this.ybd_1))) | 0);
                    }),
                    (S(oi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof oi)) return !1;
                        var i = t instanceof oi ? t : C();
                        return !!U(this.xbd_1, i.xbd_1) && !!U(this.ybd_1, i.ybd_1);
                    }),
                    (S(ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = vi(D, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.nbe_1 = G), (this.w9_1 = 4), (t = this.ibe_1.ubc(this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        (this.obe_1 = t), (this.pbe_1 = B(this.obe_1)), (this.qbe_1 = this.nbe_1.rbb(this.pbe_1)), (this.rbe_1 = this.qbe_1.gh()), (this.sbe_1 = this.qbe_1.qba()), (this.w9_1 = 5);
                                        var i = this.sbe_1;
                                        if ((t = this.kbe_1.cbf(O(i), this)) === T()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.jbe_1.dbf(1024, this)) === T())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.tbe_1 = t), null == this.tbe_1)) {
                                            (this.mbe_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.ube_1 = this.tbe_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.vbe_1 = this.ube_1), (this.w9_1 = 9), (t = this.jbe_1.ebf(this)) === T())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.wbe_1 = V()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.wbe_1 = Q()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.xbe_1 = this.wbe_1;
                                        var s = G,
                                            h = this.vbe_1,
                                            n = B(h),
                                            e = this.xbe_1;
                                        (this.ybe_1 = s.tbb(this.rbe_1, n, J, Z(Y(e)))), (this.w9_1 = 11);
                                        var r = this.ybe_1;
                                        if ((t = this.kbe_1.cbf(O(r), this)) === T()) return t;
                                        continue t;
                                    case 12:
                                        (this.lbe_1 = K), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof it)) {
                                            this.zbe_1 = this.z9_1;
                                            var _ = tt(),
                                                u = this.zbe_1;
                                            if (!_.q5p_1.h())
                                                for (var c = _.q5p_1.z().p(); c.q(); ) {
                                                    c.r().o2().w("XWS", u, "encryptStream failed");
                                                }
                                            (this.mbe_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.abf_1 = this.z9_1), this.jbe_1.e5(), (this.w9_1 = 15), (t = this.kbe_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.kbe_1.e5(), this.abf_1);
                                    case 16:
                                        if (((this.bbf_1 = this.mbe_1), (this.x9_1 = 20), this.jbe_1.e5(), (this.w9_1 = 17), (t = this.kbe_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 17:
                                        return this.kbe_1.e5(), this.bbf_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.jbe_1.e5(), (this.w9_1 = 19), (t = this.kbe_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 19:
                                        return this.kbe_1.e5(), K;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (20 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (S(bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = vi(D, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.qbf_1.dbf(st(), this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.wbf_1 = t), null == this.wbf_1)) {
                                            (this.vbf_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.xbf_1 = this.wbf_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.ybf_1 = this.xbf_1), (this.zbf_1 = this.ybf_1.length), (this.abg_1 = G), (this.w9_1 = 6), (t = this.pbf_1.ubc(this)) === T())) return t;
                                        continue t;
                                    case 6:
                                        (this.bbg_1 = t), (this.cbg_1 = B(this.bbg_1));
                                        var i = this.ybf_1;
                                        (this.dbg_1 = this.abg_1.ubb(this.cbg_1, B(i))), (this.ebg_1 = this.dbg_1.gh()), (this.fbg_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.qbf_1.dbf(this.obf_1.pbg_1, this)) === T())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.gbg_1 = t), null == this.gbg_1)) {
                                            (this.vbf_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.hbg_1 = this.gbg_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.ibg_1 = this.hbg_1), (this.zbf_1 = (this.zbf_1 + this.ibg_1.length) | 0);
                                        var s = G,
                                            h = this.ibg_1;
                                        (this.jbg_1 = s.wbb(this.ebg_1, B(h))), (this.kbg_1 = this.jbg_1.tba()), (this.w9_1 = 10);
                                        var n = this.kbg_1;
                                        if ((t = this.rbf_1.cbf(O(n), this)) === T()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.tbf_1 && null != this.sbf_1) {
                                            var e = this.zbf_1 / this.sbf_1.bytes.y3();
                                            e > this.fbg_1 + 0.1 && (this.tbf_1(e), (this.fbg_1 = e));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.ubf_1 = K), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof it)) {
                                            this.lbg_1 = this.z9_1;
                                            var r = tt(),
                                                _ = this.lbg_1;
                                            if (!r.q5p_1.h())
                                                for (var u = r.q5p_1.z().p(); u.q(); ) {
                                                    u.r().o2().w("XWS", _, "decryptStream failed");
                                                }
                                            (this.vbf_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.mbg_1 = this.z9_1), this.qbf_1.e5(), (this.w9_1 = 14), (t = this.rbf_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.rbf_1.e5(), this.mbg_1);
                                    case 15:
                                        if (((this.nbg_1 = this.vbf_1), (this.x9_1 = 19), this.qbf_1.e5(), (this.w9_1 = 16), (t = this.rbf_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 16:
                                        return this.rbf_1.e5(), this.nbg_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.qbf_1.e5(), (this.w9_1 = 18), (t = this.rbf_1.fbf(this)) === T())) return t;
                                        continue t;
                                    case 18:
                                        return this.rbf_1.e5(), K;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (19 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = vi(D, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.bbh_1 = ht.xbb(nt())), (this.cbh_1 = et);
                                        var i = this.abh_1;
                                        if (((this.dbh_1 = B(i)), (this.w9_1 = 2), (t = this.zbg_1.ubc(this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        var s = B(t),
                                            h = this.cbh_1.pbb(this.dbh_1, this.bbh_1, s),
                                            n = this.bbh_1,
                                            e = O(n),
                                            r = O(h),
                                            _ = B(rt([e, r]));
                                        return O(_).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof it)) {
                                            var u = this.z9_1,
                                                c = tt();
                                            if (!c.q5p_1.h())
                                                for (var o = c.q5p_1.z().p(); o.q(); ) {
                                                    o.r().o2().w("XWS", u, "encryptMessage failed");
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
                    (S(li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = vi(D, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ut(this.obh_1, _t(0, nt()));
                                        this.qbh_1 = B(i.slice());
                                        var s = ut(this.obh_1, _t(nt(), this.obh_1.length));
                                        if (((this.rbh_1 = B(s.slice())), (this.sbh_1 = et), (this.w9_1 = 2), (t = this.nbh_1.ubc(this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        var h = B(t),
                                            n = this.sbh_1.qbb(this.rbh_1, this.qbh_1, h);
                                        return O(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof it)) {
                                            var e = this.z9_1,
                                                r = tt();
                                            if (!r.q5p_1.h())
                                                for (var _ = "decryptMessage failed for " + this.pbh_1, u = r.q5p_1.z().p(); u.q(); ) {
                                                    u.r().o2().w("XWS", e, _);
                                                }
                                            return null;
                                        }
                                        throw this.z9_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (4 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (S(wi).tbh = function (t, i, s, h) {
                        var n = new ai(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(wi).ubh = function (t, i, s, h, n, e) {
                        var r = new bi(this, t, i, s, h, n, e);
                        return (r.y9_1 = K), (r.z9_1 = null), r.oa();
                    }),
                    (S(wi).vbh = function (t, i, s) {
                        var h = new fi(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(wi).wbh = function (t, i, s, h) {
                        var n = new li(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.fbi_1.hp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.fbi_1.obb(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        return K;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(di).gbi = function () {
                        return !1;
                    }),
                    (S(di).hbi = function (t) {
                        return K;
                    }),
                    (S(di).ibi = function (t) {
                        return K;
                    }),
                    (S(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi(this.tbi_1.ebn_1, "jwk", this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = at(i);
                                        return bt(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (S(Wi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.cbj_1), (t = ot(i.deriveBits(s, this.dbj_1, 256), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.ebj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.ebj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ebj_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ot(zi(window).subtle.digest("SHA-256", lt([this.nbj_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.obj_1])), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.pbj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = tt();
                                            if (!s.q5p_1.h())
                                                for (var h = s.q5p_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", i, null);
                                                }
                                            (this.pbj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.pbj_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (S(Ii).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.zbj_1];
                                        if ((t = ot(i.importKey("raw", this.ybj_1, s, !1, h), this)) === T()) return t;
                                        continue t;
                                    case 1:
                                        (this.abk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
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
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Ni).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.lbk_1), (t = ot(i.encrypt(s, this.jbk_1, this.kbk_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.mbk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
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
                                        var i,
                                            s = zi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.xbk_1 ? [] : [this.xbk_1]), (t = ot(s.importKey(this.vbk_1, this.wbk_1, h, !0, i), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.ybk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.ybk_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ybk_1;
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
                                        var i = zi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.hbl_1), (t = ot(i.decrypt(s, this.ibl_1, this.jbl_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.kbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.kbl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.kbl_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = zi(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.vbl_1 ? [] : [this.vbl_1]), (t = ot(s.importKey(this.tbl_1, this.ubl_1, h, !0, i), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.wbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.wbl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.wbl_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ot(i.sign(s, this.fbm_1, this.gbm_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.hbm_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.hbm_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.hbm_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Di).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ot(i.verify(s, this.qbm_1, this.sbm_1, this.rbm_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.tbm_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.tbm_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.tbm_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (S(Gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ot(i.importKey("raw", this.cbn_1, s, !0, ["encrypt", "decrypt"]), this)) === T()) return t;
                                        continue t;
                                    case 1:
                                        (this.dbn_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.dbn_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dbn_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Qi).zbn = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(Qi).a2e = function (t) {
                        return this.zbn(t);
                    }),
                    (S(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ot((this.ybn_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === T())) return t;
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
                    (S(Qi).sa = function (t) {
                        return new Qi(this.ybn_1, t);
                    }),
                    (S(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Bi(this.obn_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Yi(this.pbn_1)), new h(new s(this.pbn_1.a9z_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (S(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Bi(this.ibo_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.mbo_1 = t), (this.x9_1 = 4);
                                        var i = tt();
                                        if (!i.q5p_1.h())
                                            for (var s = i.q5p_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = tt();
                                        if (!h.q5p_1.h())
                                            for (var n = L(this.kbo_1.v9y_1), e = h.q5p_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Oi(this.ibo_1, this.kbo_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.obo_1 = t), (this.w9_1 = 3), (t = ot(this.obo_1.register(dt(this.jbo_1), this.lbo_1, new Int8Array(0), this.kbo_1.w9y_1), this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        (this.nbo_1 = It()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r == this.mbo_1.RegisterError.InvalidAuth ? ti() : r == this.mbo_1.RegisterError.UpgradeRequired ? ii() : r == this.mbo_1.RegisterError.Assertion ? si() : r == this.mbo_1.RegisterError.Transient ? hi() : r == this.mbo_1.RegisterError.RateLimitExceeded ? ni() : hi();
                                        (this.nbo_1 = new Nt(_)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.nbo_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (S(is).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Bi(this.xbo_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.abp_1 = t), (this.x9_1 = 4);
                                        var i = tt();
                                        if (!i.q5p_1.h())
                                            for (var s = i.q5p_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = tt();
                                        if (!h.q5p_1.h())
                                            for (var n = L(this.zbo_1.v9y_1), e = h.q5p_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Oi(this.xbo_1, this.zbo_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.cbp_1 = t), (this.w9_1 = 3), (t = ot(this.cbp_1.recover(dt(this.ybo_1), new Int8Array(0)), this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        var r = t;
                                        (this.bbp_1 = new jt(r)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var _ = this.z9_1,
                                            u = _.reason,
                                            c = u == this.abp_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.abp_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.abp_1.RecoverErrorReason.InvalidAuth ? Ot() : u == this.abp_1.RecoverErrorReason.UpgradeRequired ? Qt() : u == this.abp_1.RecoverErrorReason.Assertion ? Vt() : u == this.abp_1.RecoverErrorReason.Transient ? Yt() : u == this.abp_1.RecoverErrorReason.RateLimitExceeded ? Zt() : Yt();
                                        (this.bbp_1 = new St(c, _.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.bbp_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (6 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (S(ss).dbp = function (t, i, s, h) {
                        var n = new ts(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(ss).ebp = function (t, i, s) {
                        var h = new is(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(hs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = gi(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ci(new vs(i.publicKey), new ys(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (S(ns).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return new ls(t);
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.pbq_1.nbd(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.sbq_1 = t), (this.w9_1 = 2), (t = Ri(this.qbq_1.kbi_1, this.sbq_1.wbd_1.ebn_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        this.tbq_1 = t;
                                        var i;
                                        if (null == this.tbq_1) return null;
                                        if (((i = this.tbq_1), (this.ubq_1 = i), (this.w9_1 = 3), (t = pi(this.sbq_1.vbd_1, this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.vbq_1 = t), (this.wbq_1 = gt(this.vbq_1, 65)), (this.w9_1 = 4), (t = mi(this.ubq_1, this.wbq_1, this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        this.xbq_1 = t;
                                        var s;
                                        if (null == this.xbq_1) return null;
                                        if (((s = this.xbq_1), (this.ybq_1 = s), (this.zbq_1 = this.ybq_1.slice(0, 16)), (this.abr_1 = this.ybq_1.slice(16, 32)), (this.w9_1 = 5), (t = ki(this.zbq_1, "encrypt", this)) === T())) return t;
                                        continue t;
                                    case 5:
                                        this.bbr_1 = t;
                                        var h;
                                        if (null == this.bbr_1) return null;
                                        if (((h = this.bbr_1), (this.cbr_1 = h), (this.w9_1 = 6), (t = ji(this.cbr_1, bt(this.rbq_1), this.abr_1, this)) === T())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var n = t;
                                        return qt(lt([this.wbq_1, n]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (7 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.pbr_1 = bt(this.obr_1)), (this.qbr_1 = this.pbr_1.slice(0, 65)), (this.rbr_1 = this.pbr_1.slice(65)), (this.w9_1 = 1), (t = Si("raw", this.qbr_1, J, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.sbr_1 = t;
                                        var i;
                                        if (null == this.sbr_1) return null;
                                        if (((i = this.sbr_1), (this.tbr_1 = i), (this.w9_1 = 2), (t = Ri(this.tbr_1, this.nbr_1.ebn_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        this.ubr_1 = t;
                                        var s;
                                        if (null == this.ubr_1) return null;
                                        if (((s = this.ubr_1), (this.vbr_1 = s), (this.w9_1 = 3), (t = mi(this.vbr_1, this.qbr_1, this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        this.wbr_1 = t;
                                        var h;
                                        if (null == this.wbr_1) return null;
                                        if (((h = this.wbr_1), (this.xbr_1 = h), (this.ybr_1 = this.xbr_1.slice(0, 16)), (this.zbr_1 = this.xbr_1.slice(16, 32)), (this.w9_1 = 4), (t = ki(this.ybr_1, "decrypt", this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        this.abs_1 = t;
                                        var n;
                                        if (null == this.abs_1) return null;
                                        if (((n = this.abs_1), (this.bbs_1 = n), (this.w9_1 = 5), (t = Ei(this.zbr_1, this.bbs_1, this.rbr_1, this)) === T())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : Rt(t);
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (6 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (S(_s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si("spki", mt(this.lbs_1), J, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new vs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(us).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Si("spki", mt(this.wbs_1), J, this)) === T())) return s;
                                        continue t;
                                    case 1:
                                        this.xbs_1 = s;
                                        var h;
                                        if (null == this.xbs_1) h = null;
                                        else h = new vs(this.xbs_1);
                                        this.ybs_1 = h;
                                        var n;
                                        if (null == this.ybs_1) return null;
                                        if (((n = this.ybs_1), (this.zbs_1 = n), (this.w9_1 = 2), (t = this.zbs_1), (i = this), (s = Pi(t.kbi_1, "jwk", i)) === T())) return s;
                                        continue t;
                                    case 2:
                                        this.abt_1 = s;
                                        var e = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((e.d = kt(this.vbs_1, !0)), (e.x = this.abt_1.x), (e.y = this.abt_1.y), (this.bbt_1 = e), (this.w9_1 = 3), (s = Ji("jwk", this.bbt_1, "deriveBits", this)) === T())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ys(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (4 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ci(this.lbt_1.ebn_1, bt(this.mbt_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : Rt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Fi(this.wbt_1.kbi_1, bt(this.ybt_1), bt(this.xbt_1), this)) === T())) return t;
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
                    (S(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ai(this.obp_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ls(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(bs).nbd = function (t) {
                        var i = new hs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(bs).obd = function (t) {
                        var i = new ns(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(bs).vbc = function (t, i, s) {
                        var h = new es(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).lbd = function (t, i, s) {
                        var h = new rs(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).rbd = function (t, i) {
                        var s = new _s(this, t, i);
                        return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                    }),
                    (S(bs).sbd = function (t, i, s) {
                        var h = new us(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).mbd = function (t, i) {
                        return (function (t, i, s) {
                            var h = new as(t, i, s);
                            return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                        })(this, mt(t), i);
                    }),
                    (S(bs).tbd = function (t, i, s) {
                        var h = new cs(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).ubd = function (t, i, s, h) {
                        var n = new os(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(fs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.hbu_1), (i = this), (s = Ki(t.tbc_1, "raw", i)) === T())) return s;
                                        continue t;
                                    case 1:
                                        return Rt(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (S(ls).ubc = function (t) {
                        var i = new fs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(ws).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = pi(this.qbu_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return Rt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(vs).ubc = function (t) {
                        var i = new ws(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(xs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = $i(this.zbu_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return Rt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ys).ubc = function (t) {
                        var i = new xs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    X(S(Wt), "name", S(Wt).z2),
                    X(S(Wt), "ordinal", S(Wt).a3),
                    X(S(Dt), "name", S(Dt).z2),
                    X(S(Dt), "ordinal", S(Dt).a3),
                    (S(di).jbi = function (t, i) {
                        var s;
                        return (t = t === J ? 1 : t), i === J ? (this.ibi(t), (s = K)) : (s = i.ibi.call(this, t)), s;
                    }),
                    (S(bs).pbd = function (t, i, s) {
                        var h = new ri(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).qbd = function (t, i, s) {
                        var h = new _i(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (m = new di()),
                    (k = new bs()),
                    ds(t),
                    (t.$jsExportAll$ = ds),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = St),
                    (t.$_$.b = jt),
                    (t.$_$.c = Nt),
                    (t.$_$.d = Tt),
                    (t.$_$.e = ss),
                    (t.$_$.f = ci),
                    (t.$_$.g = oi),
                    (t.$_$.h = ei),
                    (t.$_$.i = m),
                    (t.$_$.j = Jt),
                    (t.$_$.k = Ft),
                    (t.$_$.l = It),
                    (t.$_$.m = function () {
                        return null == R && new wi(), R;
                    }),
                    (t.$_$.n = k);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.0283953a.js.map
