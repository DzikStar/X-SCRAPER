(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, c, n, h, e) {
                "use strict";
                var r,
                    _,
                    a,
                    u,
                    o,
                    f,
                    l,
                    w,
                    v,
                    x,
                    d,
                    y,
                    z,
                    b,
                    $,
                    p,
                    g,
                    m,
                    R,
                    k,
                    q,
                    j,
                    S,
                    E,
                    C = Math.imul,
                    J = i.$_$.bf,
                    A = i.$_$.yd,
                    F = i.$_$.g,
                    K = i.$_$.yj,
                    P = i.$_$.ee,
                    X = i.$_$.zj,
                    W = i.$_$.s6,
                    T = i.$_$.lj,
                    I = i.$_$.md,
                    M = i.$_$.xc,
                    N = i.$_$.ic,
                    D = i.$_$.ae,
                    L = i.$_$.ce,
                    U = i.$_$.ff,
                    H = i.$_$.xd,
                    G = i.$_$.od,
                    B = i.$_$.ll,
                    O = c.$_$.j,
                    Q = c.$_$.h,
                    V = i.$_$.i4,
                    Y = i.$_$.o4,
                    Z = c.$_$.e,
                    tt = c.$_$.d,
                    it = i.$_$.cf,
                    st = i.$_$.e4,
                    ct = n.$_$.c,
                    nt = i.$_$.nj,
                    ht = c.$_$.c,
                    et = c.$_$.i,
                    rt = c.$_$.a,
                    _t = c.$_$.g,
                    at = i.$_$.f,
                    ut = i.$_$.wf,
                    ot = i.$_$.ib,
                    ft = c.$_$.b,
                    lt = i.$_$.al,
                    wt = h.$_$.n,
                    vt = e.$_$.h,
                    xt = e.$_$.b,
                    dt = e.$_$.w,
                    yt = e.$_$.g,
                    zt = i.$_$.de,
                    bt = c.$_$.f,
                    $t = i.$_$.h6,
                    pt = i.$_$.gi,
                    gt = i.$_$.qg,
                    mt = i.$_$.zk,
                    Rt = i.$_$.bg,
                    kt = i.$_$.vd,
                    qt = e.$_$.u,
                    jt = e.$_$.d,
                    St = e.$_$.c,
                    Et = e.$_$.f,
                    Ct = e.$_$.k;
                function Jt(t) {
                    Wt.call(this), (this.bytes = t);
                }
                function At(t, i) {
                    Wt.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Ft() {
                    (r = this), Wt.call(this);
                }
                function Kt() {
                    return null == r && new Ft(), r;
                }
                function Pt() {
                    (_ = this), Wt.call(this);
                }
                function Xt() {
                    return null == _ && new Pt(), _;
                }
                function Wt() {}
                function Tt() {
                    return [Vt(), Yt(), Zt(), ti(), ii(), si(), ci()];
                }
                function It(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Vt();
                        case "NotRegistered":
                            return Yt();
                        case "InvalidAuth":
                            return Zt();
                        case "UpgradeRequired":
                            return ti();
                        case "Assertion":
                            return ii();
                        case "Transient":
                            return si();
                        case "RateLimitExceeded":
                            return ci();
                        default:
                            Mt(), X("No enum constant value.");
                    }
                }
                function Mt() {
                    if (x) return W;
                    (x = !0), (a = new Nt("InvalidPin", 0, !0)), (u = new Nt("NotRegistered", 1, !0)), (o = new Nt("InvalidAuth", 2, !0)), (f = new Nt("UpgradeRequired", 3, !1)), (l = new Nt("Assertion", 4, !1)), (w = new Nt("Transient", 5, !0)), (v = new Nt("RateLimitExceeded", 6, !0));
                }
                function Nt(t, i, s) {
                    T.call(this, t, i), (this.retryable = s);
                }
                function Dt() {
                    (d = this), Ht.call(this);
                }
                function Lt() {
                    return null == d && new Dt(), d;
                }
                function Ut(t) {
                    Ht.call(this), (this.reason = t);
                }
                function Ht() {}
                function Gt() {
                    return [ni(), hi(), ei(), ri(), _i(), ai()];
                }
                function Bt(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return ni();
                        case "UpgradeRequired":
                            return hi();
                        case "Assertion":
                            return ei();
                        case "Transient":
                            return ri();
                        case "RateLimitExceeded":
                            return _i();
                        case "StorageFailed":
                            return ai();
                        default:
                            Ot(), X("No enum constant value.");
                    }
                }
                function Ot() {
                    if (m) return W;
                    (m = !0), (y = new Qt("InvalidAuth", 0, !0)), (z = new Qt("UpgradeRequired", 1, !1)), (b = new Qt("Assertion", 2, !1)), ($ = new Qt("Transient", 3, !0)), (p = new Qt("RateLimitExceeded", 4, !0)), (g = new Qt("StorageFailed", 5, !0));
                }
                function Qt(t, i, s) {
                    T.call(this, t, i), (this.retryable = s);
                }
                function Vt() {
                    return Mt(), a;
                }
                function Yt() {
                    return Mt(), u;
                }
                function Zt() {
                    return Mt(), o;
                }
                function ti() {
                    return Mt(), f;
                }
                function ii() {
                    return Mt(), l;
                }
                function si() {
                    return Mt(), w;
                }
                function ci() {
                    return Mt(), v;
                }
                function ni() {
                    return Ot(), y;
                }
                function hi() {
                    return Ot(), z;
                }
                function ei() {
                    return Ot(), b;
                }
                function ri() {
                    return Ot(), $;
                }
                function _i() {
                    return Ot(), p;
                }
                function ai() {
                    return Ot(), g;
                }
                function ui(t, i, s, c) {
                    M.call(this, c), (this.dca_1 = t), (this.eca_1 = i), (this.fca_1 = s);
                }
                function oi(t, i, s, c) {
                    M.call(this, c), (this.sca_1 = t), (this.tca_1 = i), (this.uca_1 = s);
                }
                function fi() {}
                function li() {
                    if (q) return W;
                    (q = !0), (R = new wi("Identity", 0)), (k = new wi("Signing", 1));
                }
                function wi(t, i) {
                    T.call(this, t, i);
                }
                function vi() {
                    return li(), R;
                }
                function xi(t, i) {
                    (this.jcb_1 = t), (this.kcb_1 = i);
                }
                function di(t, i) {
                    (this.lcb_1 = t), (this.mcb_1 = i);
                }
                function yi(t, i, s, c, n) {
                    M.call(this, n), (this.vcb_1 = t), (this.wcb_1 = i), (this.xcb_1 = s), (this.ycb_1 = c);
                }
                function zi(t, i, s, c, n, h, e) {
                    M.call(this, e), (this.ccd_1 = t), (this.dcd_1 = i), (this.ecd_1 = s), (this.fcd_1 = c), (this.gcd_1 = n), (this.hcd_1 = h);
                }
                function bi(t, i, s, c) {
                    M.call(this, c), (this.mce_1 = t), (this.nce_1 = i), (this.oce_1 = s);
                }
                function $i(t, i, s, c, n) {
                    M.call(this, n), (this.acf_1 = t), (this.bcf_1 = i), (this.ccf_1 = s), (this.dcf_1 = c);
                }
                function pi() {
                    (j = this), (this.cce_1 = 1024), (this.dce_1 = (1024 + ft()) | 0);
                }
                function gi(t, i) {
                    var s = new mi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function mi(t, i) {
                    M.call(this, i), (this.tcf_1 = t);
                }
                function Ri() {}
                function ki(t) {
                    return t.crypto;
                }
                function qi(t, i) {
                    return Mi(t.xcf_1, "spki", i);
                }
                function ji(t, i) {
                    var s = new Di(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Si(t, i) {
                    var s,
                        c = ki(window).subtle,
                        n = {};
                    switch (t.y2_1) {
                        case 0:
                            s = "ECDH";
                            break;
                        case 1:
                            s = "ECDSA";
                            break;
                        default:
                            lt();
                    }
                    (n.name = s), (n.namedCurve = "P-256");
                    var h,
                        e = n;
                    switch (t.y2_1) {
                        case 0:
                            h = ["deriveBits"];
                            break;
                        case 1:
                            h = ["sign", "verify"];
                            break;
                        default:
                            lt();
                    }
                    return wt(c.generateKey(e, !0, h), i);
                }
                function Ei(t) {
                    var i = ki(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        c = s;
                    return wt(i.generateKey(c, !0, ["encrypt", "decrypt"]), t);
                }
                function Ci(t, i, s) {
                    var c = new Li(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ji(t, i, s) {
                    var c = new Ui(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ai(t, i, s) {
                    var c = new Hi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Fi(t, i, s, c) {
                    var n = new Gi(t, i, s, c);
                    return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                }
                function Ki(t, i, s, c) {
                    var n = new Bi(t, i, s, c);
                    return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                }
                function Pi(t, i, s, c) {
                    var n = new Oi(t, i, s, c);
                    return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                }
                function Xi(t, i, s, c) {
                    var n = new Qi(t, i, s, c);
                    return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                }
                function Wi(t, i, s) {
                    var c = new Vi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ti(t, i, s, c) {
                    var n = new Yi(t, i, s, c);
                    return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                }
                function Ii(t, i) {
                    var s = new Zi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Mi(t, i, s) {
                    return wt(ki(window).subtle.exportKey(i, t), s);
                }
                function Ni(t, i, s) {
                    return wt(ki(window).subtle.exportKey(i, t), s);
                }
                function Di(t, i) {
                    M.call(this, i), (this.gcg_1 = t);
                }
                function Li(t, i, s) {
                    M.call(this, s), (this.pcg_1 = t), (this.qcg_1 = i);
                }
                function Ui(t, i, s) {
                    M.call(this, s), (this.ach_1 = t), (this.bch_1 = i);
                }
                function Hi(t, i, s) {
                    M.call(this, s), (this.lch_1 = t), (this.mch_1 = i);
                }
                function Gi(t, i, s, c) {
                    M.call(this, c), (this.wch_1 = t), (this.xch_1 = i), (this.ych_1 = s);
                }
                function Bi(t, i, s, c) {
                    M.call(this, c), (this.ici_1 = t), (this.jci_1 = i), (this.kci_1 = s);
                }
                function Oi(t, i, s, c) {
                    M.call(this, c), (this.uci_1 = t), (this.vci_1 = i), (this.wci_1 = s);
                }
                function Qi(t, i, s, c) {
                    M.call(this, c), (this.gcj_1 = t), (this.hcj_1 = i), (this.icj_1 = s);
                }
                function Vi(t, i, s) {
                    M.call(this, s), (this.scj_1 = t), (this.tcj_1 = i);
                }
                function Yi(t, i, s, c) {
                    M.call(this, c), (this.dck_1 = t), (this.eck_1 = i), (this.fck_1 = s);
                }
                function Zi(t, i) {
                    M.call(this, i), (this.pck_1 = t);
                }
                function ts(t) {
                    var i = t.sck_1;
                    return (
                        kt(
                            "juiceboxModule",
                            1,
                            Rt,
                            function (t) {
                                return ts(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function is(t, i, s) {
                    var c = new hs(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function ss(t, i) {
                    (this.lcl_1 = t), M.call(this, i);
                }
                function cs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new ss(t, i),
                                c = function (t) {
                                    return s.mcl(t);
                                };
                            return (c.$arity = 0), c;
                        })(t, null);
                    };
                }
                function ns(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, c) {
                                    try {
                                        var n = bt(t),
                                            h = $t().sn_1,
                                            e = pt(Y(n), h),
                                            r = i.raa_1.r2(e);
                                        s(null == r ? null : r.yaa_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        c(t);
                                    }
                                    return W;
                                };
                            })(i, t),
                        );
                    };
                }
                function hs(t, i, s) {
                    M.call(this, s), (this.bcl_1 = t), (this.ccl_1 = i);
                }
                function es(t, i, s, c, n) {
                    M.call(this, n), (this.vcl_1 = t), (this.wcl_1 = i), (this.xcl_1 = s), (this.ycl_1 = c);
                }
                function rs(t, i, s, c) {
                    M.call(this, c), (this.kcm_1 = t), (this.lcm_1 = i), (this.mcm_1 = s);
                }
                function _s() {
                    this.sck_1 = mt(cs(this));
                }
                function as(t, i, s) {
                    M.call(this, s), (this.kcn_1 = t), (this.lcn_1 = i);
                }
                function us(t, i) {
                    M.call(this, i), (this.ucn_1 = t);
                }
                function os(t, i, s, c) {
                    M.call(this, c), (this.dco_1 = t), (this.eco_1 = i), (this.fco_1 = s);
                }
                function fs(t, i, s, c) {
                    M.call(this, c), (this.acp_1 = t), (this.bcp_1 = i), (this.ccp_1 = s);
                }
                function ls(t, i, s, c) {
                    M.call(this, c), (this.ycp_1 = t), (this.zcp_1 = i), (this.acq_1 = s);
                }
                function ws(t, i, s, c, n) {
                    M.call(this, n), (this.jcq_1 = t), (this.kcq_1 = i), (this.lcq_1 = s), (this.mcq_1 = c);
                }
                function vs(t, i, s, c) {
                    M.call(this, c), (this.acr_1 = t), (this.bcr_1 = i), (this.ccr_1 = s);
                }
                function xs(t, i, s, c, n) {
                    M.call(this, n), (this.lcr_1 = t), (this.mcr_1 = i), (this.ncr_1 = s), (this.ocr_1 = c);
                }
                function ds(t, i, s) {
                    M.call(this, s), (this.acn_1 = t), (this.bcn_1 = i);
                }
                function ys() {
                    this.rco_1 = 65;
                }
                function zs(t, i) {
                    M.call(this, i), (this.xcr_1 = t);
                }
                function bs(t) {
                    this.hca_1 = t;
                }
                function $s(t, i) {
                    M.call(this, i), (this.gcs_1 = t);
                }
                function ps(t) {
                    this.xcf_1 = t;
                }
                function gs(t, i) {
                    M.call(this, i), (this.pcs_1 = t);
                }
                function ms(t) {
                    this.rck_1 = t;
                }
                function Rs(t, i, s) {
                    var c,
                        n = qs();
                    return null == n ? (c = null) : (n.mark(s + "_" + i, { startTime: performance.now(), detail: { thread: "main" } }), (c = W)), c;
                }
                function ks(t) {
                    this.qcs_1 = t;
                }
                function qs() {
                    var t = window.performance;
                    return null != t && null != t ? t : null;
                }
                function js(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        c = s.dms || (s.dms = {});
                    (c.JuiceboxRecoverPrivateKeyResult = Wt), (c.JuiceboxRecoverPrivateKeyResult.Success = Jt), (c.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = At), I(c.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Kt), I(c.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Xt), (c.JuiceboxRecoverFailureReason = Nt), (c.JuiceboxRecoverFailureReason.values = Tt), (c.JuiceboxRecoverFailureReason.valueOf = It), I(c.JuiceboxRecoverFailureReason, "InvalidPin", Vt), I(c.JuiceboxRecoverFailureReason, "NotRegistered", Yt), I(c.JuiceboxRecoverFailureReason, "InvalidAuth", Zt), I(c.JuiceboxRecoverFailureReason, "UpgradeRequired", ti), I(c.JuiceboxRecoverFailureReason, "Assertion", ii), I(c.JuiceboxRecoverFailureReason, "Transient", si), I(c.JuiceboxRecoverFailureReason, "RateLimitExceeded", ci), (c.JuiceboxRegisterPrivateKeyResult = Ht), I(c.JuiceboxRegisterPrivateKeyResult, "Success", Lt), (c.JuiceboxRegisterPrivateKeyResult.Failure = Ut), (c.JuiceboxRegisterFailureReason = Qt), (c.JuiceboxRegisterFailureReason.values = Gt), (c.JuiceboxRegisterFailureReason.valueOf = Bt), I(c.JuiceboxRegisterFailureReason, "InvalidAuth", ni), I(c.JuiceboxRegisterFailureReason, "UpgradeRequired", hi), I(c.JuiceboxRegisterFailureReason, "Assertion", ei), I(c.JuiceboxRegisterFailureReason, "Transient", ri), I(c.JuiceboxRegisterFailureReason, "RateLimitExceeded", _i), I(c.JuiceboxRegisterFailureReason, "StorageFailed", ai);
                }
                A(Wt, "JuiceboxRecoverPrivateKeyResult"),
                    A(Jt, "Success", F, Wt),
                    A(At, "JuiceboxFailure", F, Wt),
                    P(Ft, "KeyReconstructionFailure", F, Wt),
                    P(Pt, "NoJuiceboxTokens", F, Wt),
                    A(Nt, "JuiceboxRecoverFailureReason", F, T),
                    A(Ht, "JuiceboxRegisterPrivateKeyResult"),
                    P(Dt, "Success", F, Ht),
                    A(Ut, "Failure", F, Ht),
                    A(Qt, "JuiceboxRegisterFailureReason", F, T),
                    D(ui, M),
                    D(oi, M),
                    L(fi, "KeyFactory", F, F, F, [1, 0, 2, 3]),
                    A(wi, "KeypairPurpose", F, T),
                    A(xi, "XChatKeyPair"),
                    A(di, "XChatPrivateKeys"),
                    D(yi, M),
                    D(zi, M),
                    D(bi, M),
                    D($i, M),
                    P(pi, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    D(mi, M),
                    P(Ri, "NoOpPerfTracer"),
                    D(Di, M),
                    D(Li, M),
                    D(Ui, M),
                    D(Hi, M),
                    D(Gi, M),
                    D(Bi, M),
                    D(Oi, M),
                    D(Qi, M),
                    D(Vi, M),
                    D(Yi, M),
                    D(Zi, M),
                    zt(ss, M, F, [0]),
                    D(hs, M),
                    D(es, M),
                    D(rs, M),
                    A(_s, "WebJuiceboxApi", _s, F, F, [1, 3, 2]),
                    D(as, M),
                    D(us, M),
                    D(os, M),
                    D(fs, M),
                    D(ls, M),
                    D(ws, M),
                    D(vs, M),
                    D(xs, M),
                    D(ds, M),
                    P(ys, "WebKeyFactory", F, F, [fi], [1, 0, 2, 3]),
                    D(zs, M),
                    A(bs, "XChatConversationKey", F, F, F, [0]),
                    D($s, M),
                    A(ps, "XChatPublicKey", F, F, F, [0]),
                    D(gs, M),
                    A(ms, "XChatPrivateKey", F, F, F, [0]),
                    A(ks, "WebPerformanceTracer"),
                    (J(Jt).lad = function () {
                        return this.bytes;
                    }),
                    (J(At).mc9 = function () {
                        return this.reason;
                    }),
                    (J(At).nc9 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).oc9 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.oc9(t, i);
                    }),
                    (J(At).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (J(At).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (C(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (J(At).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof At)) return !1;
                        var i = t instanceof At ? t : K();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (J(Ft).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (J(Ft).hashCode = function () {
                        return 188209770;
                    }),
                    (J(Ft).equals = function (t) {
                        return this === t || (t instanceof Ft && (t instanceof Ft || K(), !0));
                    }),
                    (J(Pt).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (J(Pt).hashCode = function () {
                        return 1362829865;
                    }),
                    (J(Pt).equals = function (t) {
                        return this === t || (t instanceof Pt && (t instanceof Pt || K(), !0));
                    }),
                    (J(Nt).rc9 = function () {
                        return this.retryable;
                    }),
                    (J(Dt).toString = function () {
                        return "Success";
                    }),
                    (J(Dt).hashCode = function () {
                        return 1551298723;
                    }),
                    (J(Dt).equals = function (t) {
                        return this === t || (t instanceof Dt && (t instanceof Dt || K(), !0));
                    }),
                    (J(Ut).mc9 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).sc9 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.sc9(t);
                    }),
                    (J(Ut).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (J(Ut).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (J(Ut).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Ut)) return !1;
                        var i = t instanceof Ut ? t : K();
                        return !!this.reason.equals(i.reason);
                    }),
                    (J(Qt).rc9 = function () {
                        return this.retryable;
                    }),
                    (J(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.fca_1.ica(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.gca_1 = t), (this.w9_1 = 2), (t = this.dca_1.jca(this.eca_1, this.gca_1, this)) === N())) return t;
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
                    (J(oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.sca_1.zca(this.tca_1, this.uca_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.vca_1 = t), null == this.vca_1)) {
                                            (this.wca_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.xca_1 = this.vca_1;
                                        if (((this.yca_1 = this.xca_1), (this.w9_1 = 2), (t = this.sca_1.acb(this.yca_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        (this.wca_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.wca_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (4 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(xi).toString = function () {
                        return "XChatKeyPair(public=" + U(this.jcb_1) + ", private=" + U(this.kcb_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.jcb_1);
                        return (t = (C(t, 31) + H(this.kcb_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.jcb_1, i.jcb_1) && !!G(this.kcb_1, i.kcb_1);
                    }),
                    (J(di).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.lcb_1) + ", signing=" + B(this.mcb_1) + ")";
                    }),
                    (J(di).hashCode = function () {
                        var t = H(this.lcb_1);
                        return (t = (C(t, 31) + (null == this.mcb_1 ? 0 : H(this.mcb_1))) | 0);
                    }),
                    (J(di).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof di)) return !1;
                        var i = t instanceof di ? t : K();
                        return !!G(this.lcb_1, i.lcb_1) && !!G(this.mcb_1, i.mcb_1);
                    }),
                    (J(yi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = gi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.bcc_1 = Q), (this.w9_1 = 4), (t = this.wcb_1.ica(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.ccc_1 = t), (this.dcc_1 = V(this.ccc_1)), (this.ecc_1 = this.bcc_1.fc9(this.dcc_1)), (this.fcc_1 = this.ecc_1.ph()), (this.gcc_1 = this.ecc_1.ec8()), (this.w9_1 = 5);
                                        var i = this.gcc_1;
                                        if ((t = this.ycb_1.qcc(Y(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.xcb_1.rcc(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.hcc_1 = t), null == this.hcc_1)) {
                                            (this.acc_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.icc_1 = this.hcc_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.jcc_1 = this.icc_1), (this.w9_1 = 9), (t = this.xcb_1.scc(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.kcc_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.kcc_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.lcc_1 = this.kcc_1;
                                        var s = Q,
                                            c = this.jcc_1,
                                            n = V(c),
                                            h = this.lcc_1;
                                        (this.mcc_1 = s.hc9(this.fcc_1, n, F, st(it(h)))), (this.w9_1 = 11);
                                        var e = this.mcc_1;
                                        if ((t = this.ycb_1.qcc(Y(e), this)) === N()) return t;
                                        continue t;
                                    case 12:
                                        (this.zcb_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof nt)) {
                                            this.ncc_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.ncc_1;
                                            if (!r.i5w_1.h())
                                                for (var a = r.i5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.acc_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.occ_1 = this.z9_1), this.xcb_1.e5(), (this.w9_1 = 15), (t = this.ycb_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.ycb_1.e5(), this.occ_1);
                                    case 16:
                                        if (((this.pcc_1 = this.acc_1), (this.x9_1 = 20), this.xcb_1.e5(), (this.w9_1 = 17), (t = this.ycb_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.ycb_1.e5(), this.pcc_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.xcb_1.e5(), (this.w9_1 = 19), (t = this.ycb_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.ycb_1.e5(), W;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (20 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = gi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.ecd_1.rcc(ht(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.kcd_1 = t), null == this.kcd_1)) {
                                            (this.jcd_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.lcd_1 = this.kcd_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.mcd_1 = this.lcd_1), (this.ncd_1 = this.mcd_1.length), (this.ocd_1 = Q), (this.w9_1 = 6), (t = this.dcd_1.ica(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.pcd_1 = t), (this.qcd_1 = V(this.pcd_1));
                                        var i = this.mcd_1;
                                        (this.rcd_1 = this.ocd_1.ic9(this.qcd_1, V(i))), (this.scd_1 = this.rcd_1.ph()), (this.tcd_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.ecd_1.rcc(this.ccd_1.dce_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.ucd_1 = t), null == this.ucd_1)) {
                                            (this.jcd_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.vcd_1 = this.ucd_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.wcd_1 = this.vcd_1), (this.ncd_1 = (this.ncd_1 + this.wcd_1.length) | 0);
                                        var s = Q,
                                            c = this.wcd_1;
                                        (this.xcd_1 = s.kc9(this.scd_1, V(c))), (this.ycd_1 = this.xcd_1.hc8()), (this.w9_1 = 10);
                                        var n = this.ycd_1;
                                        if ((t = this.fcd_1.qcc(Y(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.hcd_1 && null != this.gcd_1) {
                                            var h = this.ncd_1 / this.gcd_1.bytes.y3();
                                            h > this.tcd_1 + 0.1 && (this.hcd_1(h), (this.tcd_1 = h));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.icd_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof nt)) {
                                            this.zcd_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.zcd_1;
                                            if (!e.i5w_1.h())
                                                for (var _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.jcd_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.ace_1 = this.z9_1), this.ecd_1.e5(), (this.w9_1 = 14), (t = this.fcd_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.fcd_1.e5(), this.ace_1);
                                    case 15:
                                        if (((this.bce_1 = this.jcd_1), (this.x9_1 = 19), this.ecd_1.e5(), (this.w9_1 = 16), (t = this.fcd_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.fcd_1.e5(), this.bce_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.ecd_1.e5(), (this.w9_1 = 18), (t = this.fcd_1.tcc(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.fcd_1.e5(), W;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (19 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (J(bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = gi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.pce_1 = et.lc9(rt())), (this.qce_1 = _t);
                                        var i = this.oce_1;
                                        if (((this.rce_1 = V(i)), (this.w9_1 = 2), (t = this.nce_1.ica(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.qce_1.dc9(this.rce_1, this.pce_1, s),
                                            n = this.pce_1,
                                            h = Y(n),
                                            e = Y(c),
                                            r = V(at([h, e]));
                                        return Y(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof nt)) {
                                            var _ = this.z9_1,
                                                a = ct();
                                            if (!a.i5w_1.h())
                                                for (var u = a.i5w_1.z().p(); u.q(); ) {
                                                    u.r().o2().e("XWS", _, "encryptMessage failed");
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
                    (J($i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = gi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.ccf_1, ut(0, rt()));
                                        this.ecf_1 = V(i.slice());
                                        var s = ot(this.ccf_1, ut(rt(), this.ccf_1.length));
                                        if (((this.fcf_1 = V(s.slice())), (this.gcf_1 = _t), (this.w9_1 = 2), (t = this.bcf_1.ica(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            n = this.gcf_1.ec9(this.fcf_1, this.ecf_1, c);
                                        return Y(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof nt)) {
                                            var h = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.dcf_1, _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", h, r);
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
                    (J(pi).hcf = function (t, i, s, c) {
                        var n = new yi(this, t, i, s, c);
                        return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                    }),
                    (J(pi).icf = function (t, i, s, c, n, h) {
                        var e = new zi(this, t, i, s, c, n, h);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(pi).jcf = function (t, i, s) {
                        var c = new bi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(pi).kcf = function (t, i, s, c) {
                        var n = new $i(this, t, i, s, c);
                        return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                    }),
                    (J(mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.tcf_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.tcf_1.cc9(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        return W;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(Ri).ucf = function () {
                        return !1;
                    }),
                    (J(Ri).vcf = function (t, i) {
                        return W;
                    }),
                    (J(Ri).wcf = function (t, i) {
                        return W;
                    }),
                    (J(Di).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.gcg_1.rck_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = vt(i);
                                        return xt(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (2 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (J(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.pcg_1), (t = wt(i.deriveBits(s, this.qcg_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.rcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var h = n.i5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.rcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.rcg_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(Ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = wt(ki(window).subtle.digest("SHA-256", yt([this.ach_1, dt(new Int8Array([0, 0, 0, 1])).buffer, this.bch_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.cch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.i5w_1.h())
                                                for (var c = s.i5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
                                                }
                                            (this.cch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.cch_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "AES-GCM" },
                                            c = [this.mch_1];
                                        if ((t = wt(i.importKey("raw", this.lch_1, s, !1, c), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.nch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var e = h.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.nch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.nch_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (J(Gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.ych_1), (t = wt(i.encrypt(s, this.wch_1, this.xch_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var h = n.i5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.zch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zch_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s,
                                            c = ki(window).subtle,
                                            n = {};
                                        switch (this.kci_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((n.name = i), (n.namedCurve = "P-256"), this.kci_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.ici_1, this.jci_1, n, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.lci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", h, null);
                                                }
                                            (this.lci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.lci_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (J(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.uci_1), (t = wt(i.decrypt(s, this.vci_1, this.wci_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.xci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var h = n.i5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.xci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.xci_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s,
                                            c = ki(window).subtle,
                                            n = {};
                                        switch (this.icj_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((n.name = i), (n.namedCurve = "P-256"), this.icj_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.gcj_1, this.hcj_1, n, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.jcj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", h, null);
                                                }
                                            (this.jcj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.jcj_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (J(Vi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = wt(i.sign(s, this.scj_1, this.tcj_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ucj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var e = h.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.ucj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ucj_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (J(Yi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = wt(i.verify(s, this.dck_1, this.fck_1, this.eck_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.gck_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var e = h.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.gck_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.gck_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (J(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ki(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = wt(i.importKey("raw", this.pck_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.qck_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var h = n.i5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.qck_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.qck_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(ss).mcl = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ss).k2e = function (t) {
                        return this.mcl(t);
                    }),
                    (J(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wt((this.lcl_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                    (J(ss).sa = function (t) {
                        return new ss(this.lcl_1, t);
                    }),
                    (J(hs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ts(this.bcl_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = ns(this.ccl_1)), new c(new s(this.ccl_1.waa_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.vcl_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zcl_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var n = U(this.xcl_1.raa_1), h = c.i5w_1.z().p(); h.q(); ) {
                                                h.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.vcl_1, this.xcl_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.bcm_1 = t), (this.w9_1 = 3), (t = wt(this.bcm_1.register(gt(this.wcl_1), this.ycl_1, new Int8Array(0), this.xcl_1.saa_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.acm_1 = Lt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.zcl_1.RegisterError.InvalidAuth ? ni() : e == this.zcl_1.RegisterError.UpgradeRequired ? hi() : e == this.zcl_1.RegisterError.Assertion ? ei() : e == this.zcl_1.RegisterError.Transient ? ri() : e == this.zcl_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.acm_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.acm_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (6 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (J(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.kcm_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ncm_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var n = U(this.mcm_1.raa_1), h = c.i5w_1.z().p(); h.q(); ) {
                                                h.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.kcm_1, this.mcm_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.pcm_1 = t), (this.w9_1 = 3), (t = wt(this.pcm_1.recover(gt(this.lcm_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.ocm_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.ncm_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.ncm_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.ncm_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.ncm_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.ncm_1.RecoverErrorReason.Assertion ? ii() : _ == this.ncm_1.RecoverErrorReason.Transient ? si() : _ == this.ncm_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.ocm_1 = new At(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.ocm_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(_s).qcm = function (t, i, s, c) {
                        var n = new es(this, t, i, s, c);
                        return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                    }),
                    (J(_s).rcm = function (t, i, s) {
                        var c = new rs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.lcn_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new ps(i.publicKey), new ms(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (J(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new bs(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.dco_1.bcb(vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.gco_1 = t), (this.w9_1 = 2), (t = Ci(this.eco_1.xcf_1, this.gco_1.kcb_1.rck_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.hco_1 = t;
                                        var i;
                                        if (null == this.hco_1) return null;
                                        if (((i = this.hco_1), (this.ico_1 = i), (this.w9_1 = 3), (t = qi(this.gco_1.jcb_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.jco_1 = t), (this.kco_1 = qt(this.jco_1, 65)), (this.w9_1 = 4), (t = Ji(this.ico_1, this.kco_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.lco_1 = t;
                                        var s;
                                        if (null == this.lco_1) return null;
                                        if (((s = this.lco_1), (this.mco_1 = s), (this.nco_1 = this.mco_1.slice(0, 16)), (this.oco_1 = this.mco_1.slice(16, 32)), (this.w9_1 = 5), (t = Ai(this.nco_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.pco_1 = t;
                                        var c;
                                        if (null == this.pco_1) return null;
                                        if (((c = this.pco_1), (this.qco_1 = c), (this.w9_1 = 6), (t = Fi(this.qco_1, xt(this.fco_1), this.oco_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var n = t;
                                        return jt(yt([this.kco_1, n]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (7 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (J(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.dcp_1 = xt(this.ccp_1)), (this.ecp_1 = this.dcp_1.slice(0, 65)), (this.fcp_1 = this.dcp_1.slice(65)), (this.w9_1 = 1), (t = Ki("raw", this.ecp_1, vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.gcp_1 = t;
                                        var i;
                                        if (null == this.gcp_1) return null;
                                        if (((i = this.gcp_1), (this.hcp_1 = i), (this.w9_1 = 2), (t = Ci(this.hcp_1, this.bcp_1.rck_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.icp_1 = t;
                                        var s;
                                        if (null == this.icp_1) return null;
                                        if (((s = this.icp_1), (this.jcp_1 = s), (this.w9_1 = 3), (t = Ji(this.jcp_1, this.ecp_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.kcp_1 = t;
                                        var c;
                                        if (null == this.kcp_1) return null;
                                        if (((c = this.kcp_1), (this.lcp_1 = c), (this.mcp_1 = this.lcp_1.slice(0, 16)), (this.ncp_1 = this.lcp_1.slice(16, 32)), (this.w9_1 = 4), (t = Ai(this.mcp_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.ocp_1 = t;
                                        var n;
                                        if (null == this.ocp_1) return null;
                                        if (((n = this.ocp_1), (this.pcp_1 = n), (this.w9_1 = 5), (t = Pi(this.ncp_1, this.pcp_1, this.fcp_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : St(t);
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (6 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (J(ls).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ki("spki", Et(this.zcp_1), this.acq_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ps(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(ws).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Ki("spki", Et(this.lcq_1), this.mcq_1, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.ncq_1 = s;
                                        var c;
                                        if (null == this.ncq_1) c = null;
                                        else c = new ps(this.ncq_1);
                                        this.ocq_1 = c;
                                        var n;
                                        if (null == this.ocq_1) return null;
                                        if (((n = this.ocq_1), (this.pcq_1 = n), (this.w9_1 = 2), (t = this.pcq_1), (i = this), (s = Ni(t.xcf_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.qcq_1 = s;
                                        var h = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((h.d = Ct(this.kcq_1, !0)), (h.x = this.qcq_1.x), (h.y = this.qcq_1.y), (this.rcq_1 = h), (this.w9_1 = 3), (s = Xi("jwk", this.rcq_1, this.mcq_1, this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ms(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (4 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(vs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Wi(this.bcr_1.rck_1, xt(this.ccr_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : St(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(xs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.mcr_1.xcf_1, xt(this.ocr_1), xt(this.ncr_1), this)) === N())) return t;
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
                    (J(ds).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.bcn_1, this)) === N())) return t;
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
                    (J(ys).bcb = function (t, i) {
                        var s = new as(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(ys).ccb = function (t) {
                        var i = new us(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ys).jca = function (t, i, s) {
                        var c = new os(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).zca = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).fcb = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).gcb = function (t, i, s, c) {
                        var n = new ws(this, t, i, s, c);
                        return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                    }),
                    (J(ys).acb = function (t, i) {
                        return (function (t, i, s) {
                            var c = new ds(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, Et(t), i);
                    }),
                    (J(ys).hcb = function (t, i, s) {
                        var c = new vs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).icb = function (t, i, s, c) {
                        var n = new xs(this, t, i, s, c);
                        return (n.y9_1 = W), (n.z9_1 = null), n.oa();
                    }),
                    (J(zs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.xcr_1), (i = this), (s = Mi(t.hca_1, "raw", i)) === N())) return s;
                                        continue t;
                                    case 1:
                                        return St(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (2 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (J(bs).ica = function (t) {
                        var i = new zs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J($s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.gcs_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return St(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(ps).ica = function (t) {
                        var i = new $s(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(gs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ji(this.pcs_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return St(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(ms).ica = function (t) {
                        var i = new gs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ks).ucf = function () {
                        return this.qcs_1 && !(null == qs());
                    }),
                    (J(ks).vcf = function (t, i) {
                        Rs(0, t, "async_start");
                    }),
                    (J(ks).wcf = function (t, i) {
                        Rs(0, t, "async_end");
                        var s = "async_" + t;
                        try {
                            var c = qs();
                            null == c || c.measure(s, "async_start_" + t, "async_end_" + t);
                            var n = qs();
                            null == n || n.clearMarks("async_start_" + t);
                            var h = qs();
                            null == h || h.clearMarks("async_end_" + t);
                        } catch (t) {}
                    }),
                    I(J(Nt), "name", J(Nt).z2),
                    I(J(Nt), "ordinal", J(Nt).a3),
                    I(J(Qt), "name", J(Qt).z2),
                    I(J(Qt), "ordinal", J(Qt).a3),
                    (J(ys).dcb = function (t, i, s) {
                        var c = new ui(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).ecb = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (S = new Ri()),
                    (E = new ys()),
                    js(t),
                    (t.$jsExportAll$ = js),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = At),
                    (t.$_$.b = Jt),
                    (t.$_$.c = Ut),
                    (t.$_$.d = Dt),
                    (t.$_$.e = _s),
                    (t.$_$.f = ks),
                    (t.$_$.g = xi),
                    (t.$_$.h = di),
                    (t.$_$.i = ai),
                    (t.$_$.j = vi),
                    (t.$_$.k = function () {
                        return li(), k;
                    }),
                    (t.$_$.l = S),
                    (t.$_$.m = Kt),
                    (t.$_$.n = Xt),
                    (t.$_$.o = Lt),
                    (t.$_$.p = function () {
                        return null == j && new pi(), j;
                    }),
                    (t.$_$.q = E);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.517e857a.js.map
