(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, c, h, n, e) {
                "use strict";
                var r,
                    _,
                    a,
                    u,
                    o,
                    f,
                    w,
                    l,
                    v,
                    x,
                    y,
                    z,
                    d,
                    $,
                    b,
                    k,
                    g,
                    R,
                    m,
                    p,
                    j,
                    q,
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
                    ct = h.$_$.c,
                    ht = i.$_$.nj,
                    nt = c.$_$.c,
                    et = c.$_$.i,
                    rt = c.$_$.a,
                    _t = c.$_$.g,
                    at = i.$_$.f,
                    ut = i.$_$.wf,
                    ot = i.$_$.ib,
                    ft = c.$_$.b,
                    wt = i.$_$.al,
                    lt = n.$_$.n,
                    vt = e.$_$.h,
                    xt = e.$_$.b,
                    yt = e.$_$.w,
                    zt = e.$_$.g,
                    dt = i.$_$.de,
                    $t = c.$_$.f,
                    bt = i.$_$.h6,
                    kt = i.$_$.gi,
                    gt = i.$_$.qg,
                    Rt = i.$_$.zk,
                    mt = i.$_$.bg,
                    pt = i.$_$.vd,
                    jt = e.$_$.u,
                    qt = e.$_$.d,
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
                    (x = !0), (a = new Nt("InvalidPin", 0, !0)), (u = new Nt("NotRegistered", 1, !0)), (o = new Nt("InvalidAuth", 2, !0)), (f = new Nt("UpgradeRequired", 3, !1)), (w = new Nt("Assertion", 4, !1)), (l = new Nt("Transient", 5, !0)), (v = new Nt("RateLimitExceeded", 6, !0));
                }
                function Nt(t, i, s) {
                    T.call(this, t, i), (this.retryable = s);
                }
                function Dt() {
                    (y = this), Ht.call(this);
                }
                function Lt() {
                    return null == y && new Dt(), y;
                }
                function Ut(t) {
                    Ht.call(this), (this.reason = t);
                }
                function Ht() {}
                function Gt() {
                    return [hi(), ni(), ei(), ri(), _i(), ai()];
                }
                function Bt(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return hi();
                        case "UpgradeRequired":
                            return ni();
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
                    if (R) return W;
                    (R = !0), (z = new Qt("InvalidAuth", 0, !0)), (d = new Qt("UpgradeRequired", 1, !1)), ($ = new Qt("Assertion", 2, !1)), (b = new Qt("Transient", 3, !0)), (k = new Qt("RateLimitExceeded", 4, !0)), (g = new Qt("StorageFailed", 5, !0));
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
                    return Mt(), w;
                }
                function si() {
                    return Mt(), l;
                }
                function ci() {
                    return Mt(), v;
                }
                function hi() {
                    return Ot(), z;
                }
                function ni() {
                    return Ot(), d;
                }
                function ei() {
                    return Ot(), $;
                }
                function ri() {
                    return Ot(), b;
                }
                function _i() {
                    return Ot(), k;
                }
                function ai() {
                    return Ot(), g;
                }
                function ui(t, i, s, c) {
                    M.call(this, c), (this.pc5_1 = t), (this.qc5_1 = i), (this.rc5_1 = s);
                }
                function oi(t, i, s, c) {
                    M.call(this, c), (this.ec6_1 = t), (this.fc6_1 = i), (this.gc6_1 = s);
                }
                function fi() {}
                function wi() {
                    if (j) return W;
                    (j = !0), (m = new li("Identity", 0)), (p = new li("Signing", 1));
                }
                function li(t, i) {
                    T.call(this, t, i);
                }
                function vi() {
                    return wi(), m;
                }
                function xi(t, i) {
                    (this.vc6_1 = t), (this.wc6_1 = i);
                }
                function yi(t, i) {
                    (this.xc6_1 = t), (this.yc6_1 = i);
                }
                function zi(t, i, s, c, h) {
                    M.call(this, h), (this.hc7_1 = t), (this.ic7_1 = i), (this.jc7_1 = s), (this.kc7_1 = c);
                }
                function di(t, i, s, c, h, n, e) {
                    M.call(this, e), (this.oc8_1 = t), (this.pc8_1 = i), (this.qc8_1 = s), (this.rc8_1 = c), (this.sc8_1 = h), (this.tc8_1 = n);
                }
                function $i(t, i, s, c) {
                    M.call(this, c), (this.yc9_1 = t), (this.zc9_1 = i), (this.aca_1 = s);
                }
                function bi(t, i, s, c, h) {
                    M.call(this, h), (this.mca_1 = t), (this.nca_1 = i), (this.oca_1 = s), (this.pca_1 = c);
                }
                function ki() {
                    (q = this), (this.oc9_1 = 1024), (this.pc9_1 = (1024 + ft()) | 0);
                }
                function gi(t, i) {
                    var s = new Ri(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Ri(t, i) {
                    M.call(this, i), (this.fcb_1 = t);
                }
                function mi() {}
                function pi(t) {
                    return t.crypto;
                }
                function ji(t, i) {
                    return Mi(t.jcb_1, "spki", i);
                }
                function qi(t, i) {
                    var s = new Di(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Si(t, i) {
                    var s,
                        c = pi(window).subtle,
                        h = {};
                    switch (t.y2_1) {
                        case 0:
                            s = "ECDH";
                            break;
                        case 1:
                            s = "ECDSA";
                            break;
                        default:
                            wt();
                    }
                    (h.name = s), (h.namedCurve = "P-256");
                    var n,
                        e = h;
                    switch (t.y2_1) {
                        case 0:
                            n = ["deriveBits"];
                            break;
                        case 1:
                            n = ["sign", "verify"];
                            break;
                        default:
                            wt();
                    }
                    return lt(c.generateKey(e, !0, n), i);
                }
                function Ei(t) {
                    var i = pi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        c = s;
                    return lt(i.generateKey(c, !0, ["encrypt", "decrypt"]), t);
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
                    var h = new Gi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Ki(t, i, s, c) {
                    var h = new Bi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Pi(t, i, s, c) {
                    var h = new Oi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Xi(t, i, s, c) {
                    var h = new Qi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Wi(t, i, s) {
                    var c = new Vi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ti(t, i, s, c) {
                    var h = new Yi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Ii(t, i) {
                    var s = new Zi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Mi(t, i, s) {
                    return lt(pi(window).subtle.exportKey(i, t), s);
                }
                function Ni(t, i, s) {
                    return lt(pi(window).subtle.exportKey(i, t), s);
                }
                function Di(t, i) {
                    M.call(this, i), (this.scb_1 = t);
                }
                function Li(t, i, s) {
                    M.call(this, s), (this.bcc_1 = t), (this.ccc_1 = i);
                }
                function Ui(t, i, s) {
                    M.call(this, s), (this.mcc_1 = t), (this.ncc_1 = i);
                }
                function Hi(t, i, s) {
                    M.call(this, s), (this.xcc_1 = t), (this.ycc_1 = i);
                }
                function Gi(t, i, s, c) {
                    M.call(this, c), (this.icd_1 = t), (this.jcd_1 = i), (this.kcd_1 = s);
                }
                function Bi(t, i, s, c) {
                    M.call(this, c), (this.ucd_1 = t), (this.vcd_1 = i), (this.wcd_1 = s);
                }
                function Oi(t, i, s, c) {
                    M.call(this, c), (this.gce_1 = t), (this.hce_1 = i), (this.ice_1 = s);
                }
                function Qi(t, i, s, c) {
                    M.call(this, c), (this.sce_1 = t), (this.tce_1 = i), (this.uce_1 = s);
                }
                function Vi(t, i, s) {
                    M.call(this, s), (this.ecf_1 = t), (this.fcf_1 = i);
                }
                function Yi(t, i, s, c) {
                    M.call(this, c), (this.pcf_1 = t), (this.qcf_1 = i), (this.rcf_1 = s);
                }
                function Zi(t, i) {
                    M.call(this, i), (this.bcg_1 = t);
                }
                function ts(t) {
                    var i = t.ecg_1;
                    return (
                        pt(
                            "juiceboxModule",
                            1,
                            mt,
                            function (t) {
                                return ts(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function is(t, i, s) {
                    var c = new ns(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function ss(t, i) {
                    (this.xcg_1 = t), M.call(this, i);
                }
                function cs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new ss(t, i),
                                c = function (t) {
                                    return s.ycg(t);
                                };
                            return (c.$arity = 0), c;
                        })(t, null);
                    };
                }
                function hs(t) {
                    return function (i) {
                        return new Promise(
                            (function (t, i) {
                                return function (s, c) {
                                    try {
                                        var h = $t(t),
                                            n = bt().sn_1,
                                            e = kt(Y(h), n),
                                            r = i.vaa_1.r2(e);
                                        s(null == r ? null : r.cab_1);
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
                function ns(t, i, s) {
                    M.call(this, s), (this.ncg_1 = t), (this.ocg_1 = i);
                }
                function es(t, i, s, c, h) {
                    M.call(this, h), (this.hch_1 = t), (this.ich_1 = i), (this.jch_1 = s), (this.kch_1 = c);
                }
                function rs(t, i, s, c) {
                    M.call(this, c), (this.wch_1 = t), (this.xch_1 = i), (this.ych_1 = s);
                }
                function _s() {
                    this.ecg_1 = Rt(cs(this));
                }
                function as(t, i, s) {
                    M.call(this, s), (this.wci_1 = t), (this.xci_1 = i);
                }
                function us(t, i) {
                    M.call(this, i), (this.gcj_1 = t);
                }
                function os(t, i, s, c) {
                    M.call(this, c), (this.pcj_1 = t), (this.qcj_1 = i), (this.rcj_1 = s);
                }
                function fs(t, i, s, c) {
                    M.call(this, c), (this.mck_1 = t), (this.nck_1 = i), (this.ock_1 = s);
                }
                function ws(t, i, s, c) {
                    M.call(this, c), (this.kcl_1 = t), (this.lcl_1 = i), (this.mcl_1 = s);
                }
                function ls(t, i, s, c, h) {
                    M.call(this, h), (this.vcl_1 = t), (this.wcl_1 = i), (this.xcl_1 = s), (this.ycl_1 = c);
                }
                function vs(t, i, s, c) {
                    M.call(this, c), (this.mcm_1 = t), (this.ncm_1 = i), (this.ocm_1 = s);
                }
                function xs(t, i, s, c, h) {
                    M.call(this, h), (this.xcm_1 = t), (this.ycm_1 = i), (this.zcm_1 = s), (this.acn_1 = c);
                }
                function ys(t, i, s) {
                    M.call(this, s), (this.mci_1 = t), (this.nci_1 = i);
                }
                function zs() {
                    this.dck_1 = 65;
                }
                function ds(t, i) {
                    M.call(this, i), (this.jcn_1 = t);
                }
                function $s(t) {
                    this.tc5_1 = t;
                }
                function bs(t, i) {
                    M.call(this, i), (this.scn_1 = t);
                }
                function ks(t) {
                    this.jcb_1 = t;
                }
                function gs(t, i) {
                    M.call(this, i), (this.bco_1 = t);
                }
                function Rs(t) {
                    this.dcg_1 = t;
                }
                function ms(t, i, s) {
                    var c,
                        h = js();
                    return null == h ? (c = null) : (h.mark(s + "_" + i, { startTime: performance.now(), detail: { thread: "main" } }), (c = W)), c;
                }
                function ps(t) {
                    this.cco_1 = t;
                }
                function js() {
                    var t = window.performance;
                    return null != t && null != t ? t : null;
                }
                function qs(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        c = s.dms || (s.dms = {});
                    (c.JuiceboxRecoverPrivateKeyResult = Wt), (c.JuiceboxRecoverPrivateKeyResult.Success = Jt), (c.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = At), I(c.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Kt), I(c.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Xt), (c.JuiceboxRecoverFailureReason = Nt), (c.JuiceboxRecoverFailureReason.values = Tt), (c.JuiceboxRecoverFailureReason.valueOf = It), I(c.JuiceboxRecoverFailureReason, "InvalidPin", Vt), I(c.JuiceboxRecoverFailureReason, "NotRegistered", Yt), I(c.JuiceboxRecoverFailureReason, "InvalidAuth", Zt), I(c.JuiceboxRecoverFailureReason, "UpgradeRequired", ti), I(c.JuiceboxRecoverFailureReason, "Assertion", ii), I(c.JuiceboxRecoverFailureReason, "Transient", si), I(c.JuiceboxRecoverFailureReason, "RateLimitExceeded", ci), (c.JuiceboxRegisterPrivateKeyResult = Ht), I(c.JuiceboxRegisterPrivateKeyResult, "Success", Lt), (c.JuiceboxRegisterPrivateKeyResult.Failure = Ut), (c.JuiceboxRegisterFailureReason = Qt), (c.JuiceboxRegisterFailureReason.values = Gt), (c.JuiceboxRegisterFailureReason.valueOf = Bt), I(c.JuiceboxRegisterFailureReason, "InvalidAuth", hi), I(c.JuiceboxRegisterFailureReason, "UpgradeRequired", ni), I(c.JuiceboxRegisterFailureReason, "Assertion", ei), I(c.JuiceboxRegisterFailureReason, "Transient", ri), I(c.JuiceboxRegisterFailureReason, "RateLimitExceeded", _i), I(c.JuiceboxRegisterFailureReason, "StorageFailed", ai);
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
                    A(li, "KeypairPurpose", F, T),
                    A(xi, "XChatKeyPair"),
                    A(yi, "XChatPrivateKeys"),
                    D(zi, M),
                    D(di, M),
                    D($i, M),
                    D(bi, M),
                    P(ki, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    D(Ri, M),
                    P(mi, "NoOpPerfTracer"),
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
                    dt(ss, M, F, [0]),
                    D(ns, M),
                    D(es, M),
                    D(rs, M),
                    A(_s, "WebJuiceboxApi", _s, F, F, [1, 3, 2]),
                    D(as, M),
                    D(us, M),
                    D(os, M),
                    D(fs, M),
                    D(ws, M),
                    D(ls, M),
                    D(vs, M),
                    D(xs, M),
                    D(ys, M),
                    P(zs, "WebKeyFactory", F, F, [fi], [1, 0, 2, 3]),
                    D(ds, M),
                    A($s, "XChatConversationKey", F, F, F, [0]),
                    D(bs, M),
                    A(ks, "XChatPublicKey", F, F, F, [0]),
                    D(gs, M),
                    A(Rs, "XChatPrivateKey", F, F, F, [0]),
                    A(ps, "WebPerformanceTracer"),
                    (J(Jt).pad = function () {
                        return this.bytes;
                    }),
                    (J(At).yc4 = function () {
                        return this.reason;
                    }),
                    (J(At).zc4 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ac5 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.ac5(t, i);
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
                    (J(Nt).dc5 = function () {
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
                    (J(Ut).yc4 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).ec5 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.ec5(t);
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
                    (J(Qt).dc5 = function () {
                        return this.retryable;
                    }),
                    (J(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.rc5_1.uc5(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.sc5_1 = t), (this.w9_1 = 2), (t = this.pc5_1.vc5(this.qc5_1, this.sc5_1, this)) === N())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.ec6_1.lc6(this.fc6_1, this.gc6_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.hc6_1 = t), null == this.hc6_1)) {
                                            (this.ic6_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.jc6_1 = this.hc6_1;
                                        if (((this.kc6_1 = this.jc6_1), (this.w9_1 = 2), (t = this.ec6_1.mc6(this.kc6_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        (this.ic6_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.ic6_1;
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
                        return "XChatKeyPair(public=" + U(this.vc6_1) + ", private=" + U(this.wc6_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.vc6_1);
                        return (t = (C(t, 31) + H(this.wc6_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.vc6_1, i.vc6_1) && !!G(this.wc6_1, i.wc6_1);
                    }),
                    (J(yi).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.xc6_1) + ", signing=" + B(this.yc6_1) + ")";
                    }),
                    (J(yi).hashCode = function () {
                        var t = H(this.xc6_1);
                        return (t = (C(t, 31) + (null == this.yc6_1 ? 0 : H(this.yc6_1))) | 0);
                    }),
                    (J(yi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof yi)) return !1;
                        var i = t instanceof yi ? t : K();
                        return !!G(this.xc6_1, i.xc6_1) && !!G(this.yc6_1, i.yc6_1);
                    }),
                    (J(zi).oa = function () {
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
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.nc7_1 = Q), (this.w9_1 = 4), (t = this.ic7_1.uc5(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.oc7_1 = t), (this.pc7_1 = V(this.oc7_1)), (this.qc7_1 = this.nc7_1.rc4(this.pc7_1)), (this.rc7_1 = this.qc7_1.ph()), (this.sc7_1 = this.qc7_1.qc3()), (this.w9_1 = 5);
                                        var i = this.sc7_1;
                                        if ((t = this.kc7_1.cc8(Y(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.jc7_1.dc8(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.tc7_1 = t), null == this.tc7_1)) {
                                            (this.mc7_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.uc7_1 = this.tc7_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.vc7_1 = this.uc7_1), (this.w9_1 = 9), (t = this.jc7_1.ec8(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.wc7_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.wc7_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.xc7_1 = this.wc7_1;
                                        var s = Q,
                                            c = this.vc7_1,
                                            h = V(c),
                                            n = this.xc7_1;
                                        (this.yc7_1 = s.tc4(this.rc7_1, h, F, st(it(n)))), (this.w9_1 = 11);
                                        var e = this.yc7_1;
                                        if ((t = this.kc7_1.cc8(Y(e), this)) === N()) return t;
                                        continue t;
                                    case 12:
                                        (this.lc7_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.zc7_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.zc7_1;
                                            if (!r.k5w_1.h())
                                                for (var a = r.k5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.mc7_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.ac8_1 = this.z9_1), this.jc7_1.e5(), (this.w9_1 = 15), (t = this.kc7_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.kc7_1.e5(), this.ac8_1);
                                    case 16:
                                        if (((this.bc8_1 = this.mc7_1), (this.x9_1 = 20), this.jc7_1.e5(), (this.w9_1 = 17), (t = this.kc7_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.kc7_1.e5(), this.bc8_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.jc7_1.e5(), (this.w9_1 = 19), (t = this.kc7_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.kc7_1.e5(), W;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (20 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(di).oa = function () {
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
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.qc8_1.dc8(nt(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.wc8_1 = t), null == this.wc8_1)) {
                                            (this.vc8_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.xc8_1 = this.wc8_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.yc8_1 = this.xc8_1), (this.zc8_1 = this.yc8_1.length), (this.ac9_1 = Q), (this.w9_1 = 6), (t = this.pc8_1.uc5(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.bc9_1 = t), (this.cc9_1 = V(this.bc9_1));
                                        var i = this.yc8_1;
                                        (this.dc9_1 = this.ac9_1.uc4(this.cc9_1, V(i))), (this.ec9_1 = this.dc9_1.ph()), (this.fc9_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.qc8_1.dc8(this.oc8_1.pc9_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.gc9_1 = t), null == this.gc9_1)) {
                                            (this.vc8_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.hc9_1 = this.gc9_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.ic9_1 = this.hc9_1), (this.zc8_1 = (this.zc8_1 + this.ic9_1.length) | 0);
                                        var s = Q,
                                            c = this.ic9_1;
                                        (this.jc9_1 = s.wc4(this.ec9_1, V(c))), (this.kc9_1 = this.jc9_1.tc3()), (this.w9_1 = 10);
                                        var h = this.kc9_1;
                                        if ((t = this.rc8_1.cc8(Y(h), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.tc8_1 && null != this.sc8_1) {
                                            var n = this.zc8_1 / this.sc8_1.bytes.y3();
                                            n > this.fc9_1 + 0.1 && (this.tc8_1(n), (this.fc9_1 = n));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.uc8_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.lc9_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.lc9_1;
                                            if (!e.k5w_1.h())
                                                for (var _ = e.k5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.vc8_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.mc9_1 = this.z9_1), this.qc8_1.e5(), (this.w9_1 = 14), (t = this.rc8_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.rc8_1.e5(), this.mc9_1);
                                    case 15:
                                        if (((this.nc9_1 = this.vc8_1), (this.x9_1 = 19), this.qc8_1.e5(), (this.w9_1 = 16), (t = this.rc8_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.rc8_1.e5(), this.nc9_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.qc8_1.e5(), (this.w9_1 = 18), (t = this.rc8_1.fc8(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.rc8_1.e5(), W;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (19 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
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
                                        (this.x9_1 = 3), (this.bca_1 = et.xc4(rt())), (this.cca_1 = _t);
                                        var i = this.aca_1;
                                        if (((this.dca_1 = V(i)), (this.w9_1 = 2), (t = this.zc9_1.uc5(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.cca_1.pc4(this.dca_1, this.bca_1, s),
                                            h = this.bca_1,
                                            n = Y(h),
                                            e = Y(c),
                                            r = V(at([n, e]));
                                        return Y(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var _ = this.z9_1,
                                                a = ct();
                                            if (!a.k5w_1.h())
                                                for (var u = a.k5w_1.z().p(); u.q(); ) {
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
                    (J(bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = gi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.oca_1, ut(0, rt()));
                                        this.qca_1 = V(i.slice());
                                        var s = ot(this.oca_1, ut(rt(), this.oca_1.length));
                                        if (((this.rca_1 = V(s.slice())), (this.sca_1 = _t), (this.w9_1 = 2), (t = this.nca_1.uc5(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            h = this.sca_1.qc4(this.rca_1, this.qca_1, c);
                                        return Y(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.k5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.pca_1, _ = e.k5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", n, r);
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
                    (J(ki).tca = function (t, i, s, c) {
                        var h = new zi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ki).uca = function (t, i, s, c, h, n) {
                        var e = new di(this, t, i, s, c, h, n);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(ki).vca = function (t, i, s) {
                        var c = new $i(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ki).wca = function (t, i, s, c) {
                        var h = new bi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(Ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.fcb_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.fcb_1.oc4(this)) === N())) return t;
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
                    (J(mi).gcb = function () {
                        return !1;
                    }),
                    (J(mi).hcb = function (t, i) {
                        return W;
                    }),
                    (J(mi).icb = function (t, i) {
                        return W;
                    }),
                    (J(Di).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.scb_1.dcg_1, "jwk", this)) === N())) return t;
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
                                        var i = pi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.bcc_1), (t = lt(i.deriveBits(s, this.ccc_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.dcc_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.k5w_1.h())
                                                for (var n = h.k5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.dcc_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dcc_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = lt(pi(window).subtle.digest("SHA-256", zt([this.mcc_1, yt(new Int8Array([0, 0, 0, 1])).buffer, this.ncc_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.occ_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.k5w_1.h())
                                                for (var c = s.k5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
                                                }
                                            (this.occ_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.occ_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (J(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = pi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            c = [this.ycc_1];
                                        if ((t = lt(i.importKey("raw", this.xcc_1, s, !1, c), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.zcc_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.k5w_1.h())
                                                for (var e = n.k5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.zcc_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zcc_1;
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
                                        var i = pi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.kcd_1), (t = lt(i.encrypt(s, this.icd_1, this.jcd_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.lcd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.k5w_1.h())
                                                for (var n = h.k5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.lcd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.lcd_1;
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
                                            c = pi(window).subtle,
                                            h = {};
                                        switch (this.wcd_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.wcd_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.ucd_1, this.vcd_1, h, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.xcd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.k5w_1.h())
                                                for (var r = e.k5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.xcd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.xcd_1;
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
                                        var i = pi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.gce_1), (t = lt(i.decrypt(s, this.hce_1, this.ice_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.jce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.k5w_1.h())
                                                for (var n = h.k5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.jce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.jce_1;
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
                                            c = pi(window).subtle,
                                            h = {};
                                        switch (this.uce_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.uce_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.sce_1, this.tce_1, h, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.vce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.k5w_1.h())
                                                for (var r = e.k5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.vce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.vce_1;
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
                                        var i = pi(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = lt(i.sign(s, this.ecf_1, this.fcf_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.gcf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.k5w_1.h())
                                                for (var e = n.k5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.gcf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.gcf_1;
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
                                        var i = pi(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = lt(i.verify(s, this.pcf_1, this.rcf_1, this.qcf_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.scf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.k5w_1.h())
                                                for (var e = n.k5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.scf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.scf_1;
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
                                        var i = pi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = lt(i.importKey("raw", this.bcg_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.ccg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.k5w_1.h())
                                                for (var n = h.k5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.ccg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ccg_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(ss).ycg = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ss).m2e = function (t) {
                        return this.ycg(t);
                    }),
                    (J(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = lt((this.xcg_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new ss(this.xcg_1, t);
                    }),
                    (J(ns).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ts(this.ncg_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = hs(this.ocg_1)), new c(new s(this.ocg_1.aab_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (J(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.hch_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.lch_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.k5w_1.h())
                                            for (var s = i.k5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.k5w_1.h())
                                            for (var h = U(this.jch_1.vaa_1), n = c.k5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.hch_1, this.jch_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.nch_1 = t), (this.w9_1 = 3), (t = lt(this.nch_1.register(gt(this.ich_1), this.kch_1, new Int8Array(0), this.jch_1.waa_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.mch_1 = Lt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.lch_1.RegisterError.InvalidAuth ? hi() : e == this.lch_1.RegisterError.UpgradeRequired ? ni() : e == this.lch_1.RegisterError.Assertion ? ei() : e == this.lch_1.RegisterError.Transient ? ri() : e == this.lch_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.mch_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.mch_1;
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.wch_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zch_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.k5w_1.h())
                                            for (var s = i.k5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.k5w_1.h())
                                            for (var h = U(this.ych_1.vaa_1), n = c.k5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.wch_1, this.ych_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.bci_1 = t), (this.w9_1 = 3), (t = lt(this.bci_1.recover(gt(this.xch_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.aci_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.zch_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.zch_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.zch_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.zch_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.zch_1.RecoverErrorReason.Assertion ? ii() : _ == this.zch_1.RecoverErrorReason.Transient ? si() : _ == this.zch_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.aci_1 = new At(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.aci_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(_s).cci = function (t, i, s, c) {
                        var h = new es(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(_s).dci = function (t, i, s) {
                        var c = new rs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.xci_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new ks(i.publicKey), new Rs(i.privateKey));
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
                                        return new $s(t);
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.pcj_1.nc6(vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.scj_1 = t), (this.w9_1 = 2), (t = Ci(this.qcj_1.jcb_1, this.scj_1.wc6_1.dcg_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.tcj_1 = t;
                                        var i;
                                        if (null == this.tcj_1) return null;
                                        if (((i = this.tcj_1), (this.ucj_1 = i), (this.w9_1 = 3), (t = ji(this.scj_1.vc6_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.vcj_1 = t), (this.wcj_1 = jt(this.vcj_1, 65)), (this.w9_1 = 4), (t = Ji(this.ucj_1, this.wcj_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.xcj_1 = t;
                                        var s;
                                        if (null == this.xcj_1) return null;
                                        if (((s = this.xcj_1), (this.ycj_1 = s), (this.zcj_1 = this.ycj_1.slice(0, 16)), (this.ack_1 = this.ycj_1.slice(16, 32)), (this.w9_1 = 5), (t = Ai(this.zcj_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.bck_1 = t;
                                        var c;
                                        if (null == this.bck_1) return null;
                                        if (((c = this.bck_1), (this.cck_1 = c), (this.w9_1 = 6), (t = Fi(this.cck_1, xt(this.rcj_1), this.ack_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var h = t;
                                        return qt(zt([this.wcj_1, h]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (7 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.pck_1 = xt(this.ock_1)), (this.qck_1 = this.pck_1.slice(0, 65)), (this.rck_1 = this.pck_1.slice(65)), (this.w9_1 = 1), (t = Ki("raw", this.qck_1, vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.sck_1 = t;
                                        var i;
                                        if (null == this.sck_1) return null;
                                        if (((i = this.sck_1), (this.tck_1 = i), (this.w9_1 = 2), (t = Ci(this.tck_1, this.nck_1.dcg_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.uck_1 = t;
                                        var s;
                                        if (null == this.uck_1) return null;
                                        if (((s = this.uck_1), (this.vck_1 = s), (this.w9_1 = 3), (t = Ji(this.vck_1, this.qck_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.wck_1 = t;
                                        var c;
                                        if (null == this.wck_1) return null;
                                        if (((c = this.wck_1), (this.xck_1 = c), (this.yck_1 = this.xck_1.slice(0, 16)), (this.zck_1 = this.xck_1.slice(16, 32)), (this.w9_1 = 4), (t = Ai(this.yck_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.acl_1 = t;
                                        var h;
                                        if (null == this.acl_1) return null;
                                        if (((h = this.acl_1), (this.bcl_1 = h), (this.w9_1 = 5), (t = Pi(this.zck_1, this.bcl_1, this.rck_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : St(t);
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (6 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(ws).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ki("spki", Et(this.lcl_1), this.mcl_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ks(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(ls).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Ki("spki", Et(this.xcl_1), this.ycl_1, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.zcl_1 = s;
                                        var c;
                                        if (null == this.zcl_1) c = null;
                                        else c = new ks(this.zcl_1);
                                        this.acm_1 = c;
                                        var h;
                                        if (null == this.acm_1) return null;
                                        if (((h = this.acm_1), (this.bcm_1 = h), (this.w9_1 = 2), (t = this.bcm_1), (i = this), (s = Ni(t.jcb_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.ccm_1 = s;
                                        var n = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((n.d = Ct(this.wcl_1, !0)), (n.x = this.ccm_1.x), (n.y = this.ccm_1.y), (this.dcm_1 = n), (this.w9_1 = 3), (s = Xi("jwk", this.dcm_1, this.ycl_1, this)) === N())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new Rs(s);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Wi(this.ncm_1.dcg_1, xt(this.ocm_1), this)) === N())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.ycm_1.jcb_1, xt(this.acn_1), xt(this.zcm_1), this)) === N())) return t;
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
                    (J(ys).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.nci_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new $s(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(zs).nc6 = function (t, i) {
                        var s = new as(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(zs).oc6 = function (t) {
                        var i = new us(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(zs).vc5 = function (t, i, s) {
                        var c = new os(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(zs).lc6 = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(zs).rc6 = function (t, i, s) {
                        var c = new ws(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(zs).sc6 = function (t, i, s, c) {
                        var h = new ls(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(zs).mc6 = function (t, i) {
                        return (function (t, i, s) {
                            var c = new ys(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, Et(t), i);
                    }),
                    (J(zs).tc6 = function (t, i, s) {
                        var c = new vs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(zs).uc6 = function (t, i, s, c) {
                        var h = new xs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ds).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.jcn_1), (i = this), (s = Mi(t.tc5_1, "raw", i)) === N())) return s;
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
                    (J($s).uc5 = function (t) {
                        var i = new ds(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(bs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ji(this.scn_1, this)) === N())) return t;
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
                    (J(ks).uc5 = function (t) {
                        var i = new bs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(gs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.bco_1, this)) === N())) return t;
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
                    (J(Rs).uc5 = function (t) {
                        var i = new gs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ps).gcb = function () {
                        return this.cco_1 && !(null == js());
                    }),
                    (J(ps).hcb = function (t, i) {
                        ms(0, t, "async_start");
                    }),
                    (J(ps).icb = function (t, i) {
                        ms(0, t, "async_end");
                        var s = "async_" + t;
                        try {
                            var c = js();
                            null == c || c.measure(s, "async_start_" + t, "async_end_" + t);
                            var h = js();
                            null == h || h.clearMarks("async_start_" + t);
                            var n = js();
                            null == n || n.clearMarks("async_end_" + t);
                        } catch (t) {}
                    }),
                    I(J(Nt), "name", J(Nt).z2),
                    I(J(Nt), "ordinal", J(Nt).a3),
                    I(J(Qt), "name", J(Qt).z2),
                    I(J(Qt), "ordinal", J(Qt).a3),
                    (J(zs).pc6 = function (t, i, s) {
                        var c = new ui(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(zs).qc6 = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (S = new mi()),
                    (E = new zs()),
                    qs(t),
                    (t.$jsExportAll$ = qs),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = At),
                    (t.$_$.b = Jt),
                    (t.$_$.c = Ut),
                    (t.$_$.d = Dt),
                    (t.$_$.e = _s),
                    (t.$_$.f = ps),
                    (t.$_$.g = xi),
                    (t.$_$.h = yi),
                    (t.$_$.i = ai),
                    (t.$_$.j = vi),
                    (t.$_$.k = function () {
                        return wi(), p;
                    }),
                    (t.$_$.l = S),
                    (t.$_$.m = Kt),
                    (t.$_$.n = Xt),
                    (t.$_$.o = Lt),
                    (t.$_$.p = function () {
                        return null == q && new ki(), q;
                    }),
                    (t.$_$.q = E);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.d9d91daa.js.map
