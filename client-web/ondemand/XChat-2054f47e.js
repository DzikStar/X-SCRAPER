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
                    d,
                    y,
                    z,
                    g,
                    p,
                    $,
                    R,
                    m,
                    q,
                    k,
                    j = Math.imul,
                    S = i.$_$.xe,
                    E = i.$_$.ud,
                    J = i.$_$.g,
                    C = i.$_$.qj,
                    F = i.$_$.ae,
                    A = i.$_$.rj,
                    K = i.$_$.p6,
                    P = i.$_$.dj,
                    X = i.$_$.id,
                    W = i.$_$.tc,
                    T = i.$_$.ec,
                    I = i.$_$.wd,
                    N = i.$_$.yd,
                    L = i.$_$.bf,
                    M = i.$_$.td,
                    U = i.$_$.kd,
                    H = i.$_$.dl,
                    D = h.$_$.j,
                    G = h.$_$.h,
                    B = i.$_$.f4,
                    O = i.$_$.l4,
                    Q = h.$_$.e,
                    V = h.$_$.d,
                    Y = i.$_$.ye,
                    Z = i.$_$.b4,
                    tt = n.$_$.c,
                    it = i.$_$.fj,
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
                    dt = i.$_$.zh,
                    yt = i.$_$.kg,
                    zt = i.$_$.rk,
                    gt = i.$_$.xf,
                    pt = i.$_$.rd,
                    $t = r.$_$.u,
                    Rt = r.$_$.d,
                    mt = r.$_$.c,
                    qt = r.$_$.f,
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
                    if (R) return K;
                    (R = !0), (d = new Dt("InvalidAuth", 0, !0)), (y = new Dt("UpgradeRequired", 1, !1)), (z = new Dt("Assertion", 2, !1)), (g = new Dt("Transient", 3, !0)), (p = new Dt("RateLimitExceeded", 4, !0)), ($ = new Dt("StorageFailed", 5, !0));
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
                    return Ht(), d;
                }
                function ii() {
                    return Ht(), y;
                }
                function si() {
                    return Ht(), z;
                }
                function hi() {
                    return Ht(), g;
                }
                function ni() {
                    return Ht(), p;
                }
                function ei() {
                    return Ht(), $;
                }
                function ri(t, i, s, h) {
                    W.call(this, h), (this.bbd_1 = t), (this.cbd_1 = i), (this.dbd_1 = s);
                }
                function _i(t, i, s, h) {
                    W.call(this, h), (this.qbd_1 = t), (this.rbd_1 = i), (this.sbd_1 = s);
                }
                function ui() {}
                function ci(t, i) {
                    (this.hbe_1 = t), (this.ibe_1 = i);
                }
                function oi(t, i) {
                    (this.jbe_1 = t), (this.kbe_1 = i);
                }
                function ai(t, i, s, h, n) {
                    W.call(this, n), (this.tbe_1 = t), (this.ube_1 = i), (this.vbe_1 = s), (this.wbe_1 = h);
                }
                function bi(t, i, s, h, n, e, r) {
                    W.call(this, r), (this.abg_1 = t), (this.bbg_1 = i), (this.cbg_1 = s), (this.dbg_1 = h), (this.ebg_1 = n), (this.fbg_1 = e);
                }
                function fi(t, i, s, h) {
                    W.call(this, h), (this.kbh_1 = t), (this.lbh_1 = i), (this.mbh_1 = s);
                }
                function li(t, i, s, h, n) {
                    W.call(this, n), (this.ybh_1 = t), (this.zbh_1 = i), (this.abi_1 = s), (this.bbi_1 = h);
                }
                function wi() {
                    (m = this), (this.abh_1 = 1024), (this.bbh_1 = (1024 + ct()) | 0);
                }
                function vi(t, i) {
                    var s = new xi(t, i);
                    return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                }
                function xi(t, i) {
                    W.call(this, i), (this.rbi_1 = t);
                }
                function di() {}
                function yi() {}
                function zi(t) {
                    return t.crypto;
                }
                function gi(t, i) {
                    return Ki(t.wbi_1, "spki", i);
                }
                function pi(t, i) {
                    var s = new Xi(t, i);
                    return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                }
                function $i(t) {
                    var i = zi(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ot(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function Ri(t) {
                    var i = zi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ot(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function mi(t, i, s) {
                    var h = new Wi(t, i, s);
                    return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                }
                function qi(t, i, s) {
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
                    W.call(this, i), (this.fbj_1 = t);
                }
                function Wi(t, i, s) {
                    W.call(this, s), (this.obj_1 = t), (this.pbj_1 = i);
                }
                function Ti(t, i, s) {
                    W.call(this, s), (this.zbj_1 = t), (this.abk_1 = i);
                }
                function Ii(t, i, s) {
                    W.call(this, s), (this.kbk_1 = t), (this.lbk_1 = i);
                }
                function Ni(t, i, s, h) {
                    W.call(this, h), (this.vbk_1 = t), (this.wbk_1 = i), (this.xbk_1 = s);
                }
                function Li(t, i, s, h) {
                    W.call(this, h), (this.hbl_1 = t), (this.ibl_1 = i), (this.jbl_1 = s);
                }
                function Mi(t, i, s, h) {
                    W.call(this, h), (this.tbl_1 = t), (this.ubl_1 = i), (this.vbl_1 = s);
                }
                function Ui(t, i, s, h) {
                    W.call(this, h), (this.fbm_1 = t), (this.gbm_1 = i), (this.hbm_1 = s);
                }
                function Hi(t, i, s) {
                    W.call(this, s), (this.rbm_1 = t), (this.sbm_1 = i);
                }
                function Di(t, i, s, h) {
                    W.call(this, h), (this.cbn_1 = t), (this.dbn_1 = i), (this.ebn_1 = s);
                }
                function Gi(t, i) {
                    W.call(this, i), (this.obn_1 = t);
                }
                function Bi(t) {
                    var i = t.rbn_1;
                    return (
                        pt(
                            "juiceboxModule",
                            1,
                            gt,
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
                    (this.kbo_1 = t), W.call(this, i);
                }
                function Vi(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Qi(t, i),
                                h = function (t) {
                                    return s.lbo(t);
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
                                            r = dt(O(n), e),
                                            _ = i.g9z_1.r2(r);
                                        s(null == _ ? null : _.n9z_1);
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
                    W.call(this, s), (this.abo_1 = t), (this.bbo_1 = i);
                }
                function ts(t, i, s, h, n) {
                    W.call(this, n), (this.ubo_1 = t), (this.vbo_1 = i), (this.wbo_1 = s), (this.xbo_1 = h);
                }
                function is(t, i, s, h) {
                    W.call(this, h), (this.jbp_1 = t), (this.kbp_1 = i), (this.lbp_1 = s);
                }
                function ss() {
                    this.rbn_1 = zt(Vi(this));
                }
                function hs(t, i) {
                    W.call(this, i), (this.jbq_1 = t);
                }
                function ns(t, i) {
                    W.call(this, i), (this.sbq_1 = t);
                }
                function es(t, i, s, h) {
                    W.call(this, h), (this.bbr_1 = t), (this.cbr_1 = i), (this.dbr_1 = s);
                }
                function rs(t, i, s, h) {
                    W.call(this, h), (this.ybr_1 = t), (this.zbr_1 = i), (this.abs_1 = s);
                }
                function _s(t, i, s) {
                    W.call(this, s), (this.wbs_1 = t), (this.xbs_1 = i);
                }
                function us(t, i, s, h) {
                    W.call(this, h), (this.gbt_1 = t), (this.hbt_1 = i), (this.ibt_1 = s);
                }
                function cs(t, i, s, h) {
                    W.call(this, h), (this.wbt_1 = t), (this.xbt_1 = i), (this.ybt_1 = s);
                }
                function os(t, i, s, h, n) {
                    W.call(this, n), (this.hbu_1 = t), (this.ibu_1 = i), (this.jbu_1 = s), (this.kbu_1 = h);
                }
                function as(t, i, s) {
                    W.call(this, s), (this.zbp_1 = t), (this.abq_1 = i);
                }
                function bs() {
                    this.pbr_1 = 65;
                }
                function fs(t, i) {
                    W.call(this, i), (this.tbu_1 = t);
                }
                function ls(t) {
                    this.fbd_1 = t;
                }
                function ws(t, i) {
                    W.call(this, i), (this.cbv_1 = t);
                }
                function vs(t) {
                    this.wbi_1 = t;
                }
                function xs(t, i) {
                    W.call(this, i), (this.lbv_1 = t);
                }
                function ds(t) {
                    this.qbn_1 = t;
                }
                function ys(t) {
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
                    N(di, "PerformanceTracer"),
                    F(yi, "NoOpPerfTracer", J, J, [di]),
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
                    E(ds, "XChatPrivateKey", J, J, J, [0]),
                    (S(jt).aa2 = function () {
                        return this.bytes;
                    }),
                    (S(St).kbc = function () {
                        return this.reason;
                    }),
                    (S(St).lbc = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).gh = function () {
                        return this.reason;
                    }),
                    (S(St).hh = function () {
                        return this.guessesRemaining;
                    }),
                    (S(St).mbc = function (t, i) {
                        return new St(t, i);
                    }),
                    (S(St).copy = function (t, i, s) {
                        return (t = t === J ? this.reason : t), (i = i === J ? this.guessesRemaining : i), this.mbc(t, i);
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
                    (S(Wt).pbc = function () {
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
                    (S(Nt).kbc = function () {
                        return this.reason;
                    }),
                    (S(Nt).gh = function () {
                        return this.reason;
                    }),
                    (S(Nt).qbc = function (t) {
                        return new Nt(t);
                    }),
                    (S(Nt).copy = function (t, i) {
                        return (t = t === J ? this.reason : t), this.qbc(t);
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
                    (S(Dt).pbc = function () {
                        return this.retryable;
                    }),
                    (S(ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.dbd_1.gbd(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ebd_1 = t), (this.w9_1 = 2), (t = this.bbd_1.hbd(this.cbd_1, this.ebd_1, this)) === T())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.qbd_1.xbd(this.rbd_1, this.sbd_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.tbd_1 = t), null == this.tbd_1)) {
                                            (this.ubd_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.vbd_1 = this.tbd_1;
                                        if (((this.wbd_1 = this.vbd_1), (this.w9_1 = 2), (t = this.qbd_1.ybd(this.wbd_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        (this.ubd_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.ubd_1;
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
                        return "XChatKeyPair(public=" + L(this.hbe_1) + ", private=" + L(this.ibe_1) + ")";
                    }),
                    (S(ci).hashCode = function () {
                        var t = M(this.hbe_1);
                        return (t = (j(t, 31) + M(this.ibe_1)) | 0);
                    }),
                    (S(ci).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ci)) return !1;
                        var i = t instanceof ci ? t : C();
                        return !!U(this.hbe_1, i.hbe_1) && !!U(this.ibe_1, i.ibe_1);
                    }),
                    (S(oi).toString = function () {
                        return "XChatPrivateKeys(identity=" + L(this.jbe_1) + ", signing=" + H(this.kbe_1) + ")";
                    }),
                    (S(oi).hashCode = function () {
                        var t = M(this.jbe_1);
                        return (t = (j(t, 31) + (null == this.kbe_1 ? 0 : M(this.kbe_1))) | 0);
                    }),
                    (S(oi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof oi)) return !1;
                        var i = t instanceof oi ? t : C();
                        return !!U(this.jbe_1, i.jbe_1) && !!U(this.kbe_1, i.kbe_1);
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
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.zbe_1 = G), (this.w9_1 = 4), (t = this.ube_1.gbd(this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        (this.abf_1 = t), (this.bbf_1 = B(this.abf_1)), (this.cbf_1 = this.zbe_1.dbc(this.bbf_1)), (this.dbf_1 = this.cbf_1.gh()), (this.ebf_1 = this.cbf_1.cbb()), (this.w9_1 = 5);
                                        var i = this.ebf_1;
                                        if ((t = this.wbe_1.obf(O(i), this)) === T()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.vbe_1.pbf(1024, this)) === T())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.fbf_1 = t), null == this.fbf_1)) {
                                            (this.ybe_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.gbf_1 = this.fbf_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.hbf_1 = this.gbf_1), (this.w9_1 = 9), (t = this.vbe_1.qbf(this)) === T())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.ibf_1 = V()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.ibf_1 = Q()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.jbf_1 = this.ibf_1;
                                        var s = G,
                                            h = this.hbf_1,
                                            n = B(h),
                                            e = this.jbf_1;
                                        (this.kbf_1 = s.fbc(this.dbf_1, n, J, Z(Y(e)))), (this.w9_1 = 11);
                                        var r = this.kbf_1;
                                        if ((t = this.wbe_1.obf(O(r), this)) === T()) return t;
                                        continue t;
                                    case 12:
                                        (this.xbe_1 = K), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof it)) {
                                            this.lbf_1 = this.z9_1;
                                            var _ = tt(),
                                                u = this.lbf_1;
                                            if (!_.q5p_1.h())
                                                for (var c = _.q5p_1.z().p(); c.q(); ) {
                                                    c.r().o2().w("XWS", u, "encryptStream failed");
                                                }
                                            (this.ybe_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.mbf_1 = this.z9_1), this.vbe_1.e5(), (this.w9_1 = 15), (t = this.wbe_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.wbe_1.e5(), this.mbf_1);
                                    case 16:
                                        if (((this.nbf_1 = this.ybe_1), (this.x9_1 = 20), this.vbe_1.e5(), (this.w9_1 = 17), (t = this.wbe_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 17:
                                        return this.wbe_1.e5(), this.nbf_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.vbe_1.e5(), (this.w9_1 = 19), (t = this.wbe_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 19:
                                        return this.wbe_1.e5(), K;
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
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.cbg_1.pbf(st(), this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.ibg_1 = t), null == this.ibg_1)) {
                                            (this.hbg_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.jbg_1 = this.ibg_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.kbg_1 = this.jbg_1), (this.lbg_1 = this.kbg_1.length), (this.mbg_1 = G), (this.w9_1 = 6), (t = this.bbg_1.gbd(this)) === T())) return t;
                                        continue t;
                                    case 6:
                                        (this.nbg_1 = t), (this.obg_1 = B(this.nbg_1));
                                        var i = this.kbg_1;
                                        (this.pbg_1 = this.mbg_1.gbc(this.obg_1, B(i))), (this.qbg_1 = this.pbg_1.gh()), (this.rbg_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.cbg_1.pbf(this.abg_1.bbh_1, this)) === T())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.sbg_1 = t), null == this.sbg_1)) {
                                            (this.hbg_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.tbg_1 = this.sbg_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.ubg_1 = this.tbg_1), (this.lbg_1 = (this.lbg_1 + this.ubg_1.length) | 0);
                                        var s = G,
                                            h = this.ubg_1;
                                        (this.vbg_1 = s.ibc(this.qbg_1, B(h))), (this.wbg_1 = this.vbg_1.fbb()), (this.w9_1 = 10);
                                        var n = this.wbg_1;
                                        if ((t = this.dbg_1.obf(O(n), this)) === T()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.fbg_1 && null != this.ebg_1) {
                                            var e = this.lbg_1 / this.ebg_1.bytes.y3();
                                            e > this.rbg_1 + 0.1 && (this.fbg_1(e), (this.rbg_1 = e));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.gbg_1 = K), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof it)) {
                                            this.xbg_1 = this.z9_1;
                                            var r = tt(),
                                                _ = this.xbg_1;
                                            if (!r.q5p_1.h())
                                                for (var u = r.q5p_1.z().p(); u.q(); ) {
                                                    u.r().o2().w("XWS", _, "decryptStream failed");
                                                }
                                            (this.hbg_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.ybg_1 = this.z9_1), this.cbg_1.e5(), (this.w9_1 = 14), (t = this.dbg_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.dbg_1.e5(), this.ybg_1);
                                    case 15:
                                        if (((this.zbg_1 = this.hbg_1), (this.x9_1 = 19), this.cbg_1.e5(), (this.w9_1 = 16), (t = this.dbg_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 16:
                                        return this.dbg_1.e5(), this.zbg_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.cbg_1.e5(), (this.w9_1 = 18), (t = this.dbg_1.rbf(this)) === T())) return t;
                                        continue t;
                                    case 18:
                                        return this.dbg_1.e5(), K;
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
                                        (this.x9_1 = 3), (this.nbh_1 = ht.jbc(nt())), (this.obh_1 = et);
                                        var i = this.mbh_1;
                                        if (((this.pbh_1 = B(i)), (this.w9_1 = 2), (t = this.lbh_1.gbd(this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        var s = B(t),
                                            h = this.obh_1.bbc(this.pbh_1, this.nbh_1, s),
                                            n = this.nbh_1,
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
                                        var i = ut(this.abi_1, _t(0, nt()));
                                        this.cbi_1 = B(i.slice());
                                        var s = ut(this.abi_1, _t(nt(), this.abi_1.length));
                                        if (((this.dbi_1 = B(s.slice())), (this.ebi_1 = et), (this.w9_1 = 2), (t = this.zbh_1.gbd(this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        var h = B(t),
                                            n = this.ebi_1.cbc(this.dbi_1, this.cbi_1, h);
                                        return O(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof it)) {
                                            var e = this.z9_1,
                                                r = tt();
                                            if (!r.q5p_1.h())
                                                for (var _ = "decryptMessage failed for " + this.bbi_1, u = r.q5p_1.z().p(); u.q(); ) {
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
                    (S(wi).fbi = function (t, i, s, h) {
                        var n = new ai(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(wi).gbi = function (t, i, s, h, n, e) {
                        var r = new bi(this, t, i, s, h, n, e);
                        return (r.y9_1 = K), (r.z9_1 = null), r.oa();
                    }),
                    (S(wi).hbi = function (t, i, s) {
                        var h = new fi(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(wi).ibi = function (t, i, s, h) {
                        var n = new li(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.rbi_1.hp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.rbi_1.abc(this)) === T())) return t;
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
                    (S(yi).sbi = function () {
                        return !1;
                    }),
                    (S(yi).tbi = function (t) {
                        return K;
                    }),
                    (S(yi).ubi = function (t) {
                        return K;
                    }),
                    (S(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi(this.fbj_1.qbn_1, "jwk", this)) === T())) return t;
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
                                        if (((s.public = this.obj_1), (t = ot(i.deriveBits(s, this.pbj_1, 256), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.qbj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.qbj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.qbj_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ot(zi(window).subtle.digest("SHA-256", lt([this.zbj_1, ft(new Int8Array([0, 0, 0, 1])).buffer, this.abk_1])), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.bbk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = tt();
                                            if (!s.q5p_1.h())
                                                for (var h = s.q5p_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", i, null);
                                                }
                                            (this.bbk_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.bbk_1;
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
                                            h = [this.lbk_1];
                                        if ((t = ot(i.importKey("raw", this.kbk_1, s, !1, h), this)) === T()) return t;
                                        continue t;
                                    case 1:
                                        (this.mbk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
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
                    (S(Ni).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = zi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.xbk_1), (t = ot(i.encrypt(s, this.vbk_1, this.wbk_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.ybk_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
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
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.jbl_1 ? [] : [this.jbl_1]), (t = ot(s.importKey(this.hbl_1, this.ibl_1, h, !0, i), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.kbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
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
                                        if (((s.iv = this.tbl_1), (t = ot(i.decrypt(s, this.ubl_1, this.vbl_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.wbl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
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
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.hbm_1 ? [] : [this.hbm_1]), (t = ot(s.importKey(this.fbm_1, this.gbm_1, h, !0, i), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.ibm_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.ibm_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ibm_1;
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
                                        if (((s.hash = h), (t = ot(i.sign(s, this.rbm_1, this.sbm_1), this)) === T())) return t;
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
                                        if (((s.hash = h), (t = ot(i.verify(s, this.cbn_1, this.ebn_1, this.dbn_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.fbn_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = tt();
                                            if (!e.q5p_1.h())
                                                for (var r = e.q5p_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.fbn_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.fbn_1;
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
                                        if ((t = ot(i.importKey("raw", this.obn_1, s, !0, ["encrypt", "decrypt"]), this)) === T()) return t;
                                        continue t;
                                    case 1:
                                        (this.pbn_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = tt();
                                            if (!n.q5p_1.h())
                                                for (var e = n.q5p_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.pbn_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.pbn_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (S(Qi).lbo = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(Qi).a2e = function (t) {
                        return this.lbo(t);
                    }),
                    (S(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ot((this.kbo_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === T())) return t;
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
                        return new Qi(this.kbo_1, t);
                    }),
                    (S(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Bi(this.abo_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Yi(this.bbo_1)), new h(new s(this.bbo_1.l9z_1), []);
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Bi(this.ubo_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.ybo_1 = t), (this.x9_1 = 4);
                                        var i = tt();
                                        if (!i.q5p_1.h())
                                            for (var s = i.q5p_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = tt();
                                        if (!h.q5p_1.h())
                                            for (var n = L(this.wbo_1.g9z_1), e = h.q5p_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Oi(this.ubo_1, this.wbo_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.abp_1 = t), (this.w9_1 = 3), (t = ot(this.abp_1.register(yt(this.vbo_1), this.xbo_1, new Int8Array(0), this.wbo_1.h9z_1), this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        (this.zbo_1 = It()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r == this.ybo_1.RegisterError.InvalidAuth ? ti() : r == this.ybo_1.RegisterError.UpgradeRequired ? ii() : r == this.ybo_1.RegisterError.Assertion ? si() : r == this.ybo_1.RegisterError.Transient ? hi() : r == this.ybo_1.RegisterError.RateLimitExceeded ? ni() : hi();
                                        (this.zbo_1 = new Nt(_)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.zbo_1;
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Bi(this.jbp_1)(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        (this.mbp_1 = t), (this.x9_1 = 4);
                                        var i = tt();
                                        if (!i.q5p_1.h())
                                            for (var s = i.q5p_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = tt();
                                        if (!h.q5p_1.h())
                                            for (var n = L(this.lbp_1.g9z_1), e = h.q5p_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Oi(this.jbp_1, this.lbp_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.obp_1 = t), (this.w9_1 = 3), (t = ot(this.obp_1.recover(yt(this.kbp_1), new Int8Array(0)), this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        var r = t;
                                        (this.nbp_1 = new jt(r)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var _ = this.z9_1,
                                            u = _.reason,
                                            c = u == this.mbp_1.RecoverErrorReason.InvalidPin ? Gt() : u == this.mbp_1.RecoverErrorReason.NotRegistered ? Bt() : u == this.mbp_1.RecoverErrorReason.InvalidAuth ? Ot() : u == this.mbp_1.RecoverErrorReason.UpgradeRequired ? Qt() : u == this.mbp_1.RecoverErrorReason.Assertion ? Vt() : u == this.mbp_1.RecoverErrorReason.Transient ? Yt() : u == this.mbp_1.RecoverErrorReason.RateLimitExceeded ? Zt() : Yt();
                                        (this.nbp_1 = new St(c, _.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.nbp_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var o = t;
                                if (6 === this.x9_1) throw o;
                                (this.w9_1 = this.x9_1), (this.z9_1 = o);
                            }
                    }),
                    (S(ss).pbp = function (t, i, s, h) {
                        var n = new ts(this, t, i, s, h);
                        return (n.y9_1 = K), (n.z9_1 = null), n.oa();
                    }),
                    (S(ss).qbp = function (t, i, s) {
                        var h = new is(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(hs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = $i(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new ci(new vs(i.publicKey), new ds(i.privateKey));
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ri(this)) === T())) return t;
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.bbr_1.zbd(this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ebr_1 = t), (this.w9_1 = 2), (t = mi(this.cbr_1.wbi_1, this.ebr_1.ibe_1.qbn_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        this.fbr_1 = t;
                                        var i;
                                        if (null == this.fbr_1) return null;
                                        if (((i = this.fbr_1), (this.gbr_1 = i), (this.w9_1 = 3), (t = gi(this.ebr_1.hbe_1, this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.hbr_1 = t), (this.ibr_1 = $t(this.hbr_1, 65)), (this.w9_1 = 4), (t = qi(this.gbr_1, this.ibr_1, this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        this.jbr_1 = t;
                                        var s;
                                        if (null == this.jbr_1) return null;
                                        if (((s = this.jbr_1), (this.kbr_1 = s), (this.lbr_1 = this.kbr_1.slice(0, 16)), (this.mbr_1 = this.kbr_1.slice(16, 32)), (this.w9_1 = 5), (t = ki(this.lbr_1, "encrypt", this)) === T())) return t;
                                        continue t;
                                    case 5:
                                        this.nbr_1 = t;
                                        var h;
                                        if (null == this.nbr_1) return null;
                                        if (((h = this.nbr_1), (this.obr_1 = h), (this.w9_1 = 6), (t = ji(this.obr_1, bt(this.dbr_1), this.mbr_1, this)) === T())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var n = t;
                                        return Rt(lt([this.ibr_1, n]));
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
                                        if (((this.x9_1 = 6), (this.bbs_1 = bt(this.abs_1)), (this.cbs_1 = this.bbs_1.slice(0, 65)), (this.dbs_1 = this.bbs_1.slice(65)), (this.w9_1 = 1), (t = Si("raw", this.cbs_1, J, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        this.ebs_1 = t;
                                        var i;
                                        if (null == this.ebs_1) return null;
                                        if (((i = this.ebs_1), (this.fbs_1 = i), (this.w9_1 = 2), (t = mi(this.fbs_1, this.zbr_1.qbn_1, this)) === T())) return t;
                                        continue t;
                                    case 2:
                                        this.gbs_1 = t;
                                        var s;
                                        if (null == this.gbs_1) return null;
                                        if (((s = this.gbs_1), (this.hbs_1 = s), (this.w9_1 = 3), (t = qi(this.hbs_1, this.cbs_1, this)) === T())) return t;
                                        continue t;
                                    case 3:
                                        this.ibs_1 = t;
                                        var h;
                                        if (null == this.ibs_1) return null;
                                        if (((h = this.ibs_1), (this.jbs_1 = h), (this.kbs_1 = this.jbs_1.slice(0, 16)), (this.lbs_1 = this.jbs_1.slice(16, 32)), (this.w9_1 = 4), (t = ki(this.kbs_1, "decrypt", this)) === T())) return t;
                                        continue t;
                                    case 4:
                                        this.mbs_1 = t;
                                        var n;
                                        if (null == this.mbs_1) return null;
                                        if (((n = this.mbs_1), (this.nbs_1 = n), (this.w9_1 = 5), (t = Ei(this.lbs_1, this.nbs_1, this.dbs_1, this)) === T())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : mt(t);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si("spki", qt(this.xbs_1), J, this)) === T())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Si("spki", qt(this.ibt_1), J, this)) === T())) return s;
                                        continue t;
                                    case 1:
                                        this.jbt_1 = s;
                                        var h;
                                        if (null == this.jbt_1) h = null;
                                        else h = new vs(this.jbt_1);
                                        this.kbt_1 = h;
                                        var n;
                                        if (null == this.kbt_1) return null;
                                        if (((n = this.kbt_1), (this.lbt_1 = n), (this.w9_1 = 2), (t = this.lbt_1), (i = this), (s = Pi(t.wbi_1, "jwk", i)) === T())) return s;
                                        continue t;
                                    case 2:
                                        this.mbt_1 = s;
                                        var e = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((e.d = kt(this.hbt_1, !0)), (e.x = this.mbt_1.x), (e.y = this.mbt_1.y), (this.nbt_1 = e), (this.w9_1 = 3), (s = Ji("jwk", this.nbt_1, "deriveBits", this)) === T())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ds(s);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ci(this.xbt_1.qbn_1, bt(this.ybt_1), this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : mt(t);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Fi(this.ibu_1.wbi_1, bt(this.kbu_1), bt(this.jbu_1), this)) === T())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ai(this.abq_1, this)) === T())) return t;
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
                    (S(bs).zbd = function (t) {
                        var i = new hs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(bs).abe = function (t) {
                        var i = new ns(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(bs).hbd = function (t, i, s) {
                        var h = new es(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).xbd = function (t, i, s) {
                        var h = new rs(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).dbe = function (t, i) {
                        var s = new _s(this, t, i);
                        return (s.y9_1 = K), (s.z9_1 = null), s.oa();
                    }),
                    (S(bs).ebe = function (t, i, s) {
                        var h = new us(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).ybd = function (t, i) {
                        return (function (t, i, s) {
                            var h = new as(t, i, s);
                            return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                        })(this, qt(t), i);
                    }),
                    (S(bs).fbe = function (t, i, s) {
                        var h = new cs(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).gbe = function (t, i, s, h) {
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.tbu_1), (i = this), (s = Ki(t.fbd_1, "raw", i)) === T())) return s;
                                        continue t;
                                    case 1:
                                        return mt(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (S(ls).gbd = function (t) {
                        var i = new fs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(ws).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = gi(this.cbv_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return mt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(vs).gbd = function (t) {
                        var i = new ws(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    (S(xs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = pi(this.lbv_1, this)) === T())) return t;
                                        continue t;
                                    case 1:
                                        return mt(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (S(ds).gbd = function (t) {
                        var i = new xs(this, t);
                        return (i.y9_1 = K), (i.z9_1 = null), i.oa();
                    }),
                    X(S(Wt), "name", S(Wt).z2),
                    X(S(Wt), "ordinal", S(Wt).a3),
                    X(S(Dt), "name", S(Dt).z2),
                    X(S(Dt), "ordinal", S(Dt).a3),
                    (S(yi).vbi = function (t, i) {
                        var s;
                        return (t = t === J ? 1 : t), i === J ? (this.ubi(t), (s = K)) : (s = i.ubi.call(this, t)), s;
                    }),
                    (S(bs).bbe = function (t, i, s) {
                        var h = new ri(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (S(bs).cbe = function (t, i, s) {
                        var h = new _i(this, t, i, s);
                        return (h.y9_1 = K), (h.z9_1 = null), h.oa();
                    }),
                    (q = new yi()),
                    (k = new bs()),
                    ys(t),
                    (t.$jsExportAll$ = ys),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = St),
                    (t.$_$.b = jt),
                    (t.$_$.c = Nt),
                    (t.$_$.d = Tt),
                    (t.$_$.e = ss),
                    (t.$_$.f = ci),
                    (t.$_$.g = oi),
                    (t.$_$.h = ei),
                    (t.$_$.i = q),
                    (t.$_$.j = Jt),
                    (t.$_$.k = Ft),
                    (t.$_$.l = It),
                    (t.$_$.m = function () {
                        return null == m && new wi(), m;
                    }),
                    (t.$_$.n = k);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.9e9dd08a.js.map
