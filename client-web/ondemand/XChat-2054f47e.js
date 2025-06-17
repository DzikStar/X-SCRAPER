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
                    l,
                    w,
                    v,
                    x,
                    d,
                    y,
                    z,
                    b,
                    $,
                    g,
                    p,
                    R,
                    m,
                    q,
                    k,
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
                    lt = i.$_$.al,
                    wt = n.$_$.n,
                    vt = e.$_$.h,
                    xt = e.$_$.b,
                    dt = e.$_$.w,
                    yt = e.$_$.g,
                    zt = i.$_$.de,
                    bt = c.$_$.f,
                    $t = i.$_$.h6,
                    gt = i.$_$.gi,
                    pt = i.$_$.qg,
                    Rt = i.$_$.zk,
                    mt = i.$_$.bg,
                    qt = i.$_$.vd,
                    kt = e.$_$.u,
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
                    (R = !0), (y = new Qt("InvalidAuth", 0, !0)), (z = new Qt("UpgradeRequired", 1, !1)), (b = new Qt("Assertion", 2, !1)), ($ = new Qt("Transient", 3, !0)), (g = new Qt("RateLimitExceeded", 4, !0)), (p = new Qt("StorageFailed", 5, !0));
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
                function hi() {
                    return Ot(), y;
                }
                function ni() {
                    return Ot(), z;
                }
                function ei() {
                    return Ot(), b;
                }
                function ri() {
                    return Ot(), $;
                }
                function _i() {
                    return Ot(), g;
                }
                function ai() {
                    return Ot(), p;
                }
                function ui(t, i, s, c) {
                    M.call(this, c), (this.vc9_1 = t), (this.wc9_1 = i), (this.xc9_1 = s);
                }
                function oi(t, i, s, c) {
                    M.call(this, c), (this.kca_1 = t), (this.lca_1 = i), (this.mca_1 = s);
                }
                function fi() {}
                function li() {
                    if (k) return W;
                    (k = !0), (m = new wi("Identity", 0)), (q = new wi("Signing", 1));
                }
                function wi(t, i) {
                    T.call(this, t, i);
                }
                function vi() {
                    return li(), m;
                }
                function xi(t, i) {
                    (this.bcb_1 = t), (this.ccb_1 = i);
                }
                function di(t, i) {
                    (this.dcb_1 = t), (this.ecb_1 = i);
                }
                function yi(t, i, s, c, h) {
                    M.call(this, h), (this.ncb_1 = t), (this.ocb_1 = i), (this.pcb_1 = s), (this.qcb_1 = c);
                }
                function zi(t, i, s, c, h, n, e) {
                    M.call(this, e), (this.ucc_1 = t), (this.vcc_1 = i), (this.wcc_1 = s), (this.xcc_1 = c), (this.ycc_1 = h), (this.zcc_1 = n);
                }
                function bi(t, i, s, c) {
                    M.call(this, c), (this.ece_1 = t), (this.fce_1 = i), (this.gce_1 = s);
                }
                function $i(t, i, s, c, h) {
                    M.call(this, h), (this.sce_1 = t), (this.tce_1 = i), (this.uce_1 = s), (this.vce_1 = c);
                }
                function gi() {
                    (j = this), (this.ucd_1 = 1024), (this.vcd_1 = (1024 + ft()) | 0);
                }
                function pi(t, i) {
                    var s = new Ri(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Ri(t, i) {
                    M.call(this, i), (this.lcf_1 = t);
                }
                function mi() {}
                function qi(t) {
                    return t.crypto;
                }
                function ki(t, i) {
                    return Mi(t.pcf_1, "spki", i);
                }
                function ji(t, i) {
                    var s = new Di(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Si(t, i) {
                    var s,
                        c = qi(window).subtle,
                        h = {};
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
                            lt();
                    }
                    return wt(c.generateKey(e, !0, n), i);
                }
                function Ei(t) {
                    var i = qi(window).subtle,
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
                    return wt(qi(window).subtle.exportKey(i, t), s);
                }
                function Ni(t, i, s) {
                    return wt(qi(window).subtle.exportKey(i, t), s);
                }
                function Di(t, i) {
                    M.call(this, i), (this.ycf_1 = t);
                }
                function Li(t, i, s) {
                    M.call(this, s), (this.hcg_1 = t), (this.icg_1 = i);
                }
                function Ui(t, i, s) {
                    M.call(this, s), (this.scg_1 = t), (this.tcg_1 = i);
                }
                function Hi(t, i, s) {
                    M.call(this, s), (this.dch_1 = t), (this.ech_1 = i);
                }
                function Gi(t, i, s, c) {
                    M.call(this, c), (this.och_1 = t), (this.pch_1 = i), (this.qch_1 = s);
                }
                function Bi(t, i, s, c) {
                    M.call(this, c), (this.aci_1 = t), (this.bci_1 = i), (this.cci_1 = s);
                }
                function Oi(t, i, s, c) {
                    M.call(this, c), (this.mci_1 = t), (this.nci_1 = i), (this.oci_1 = s);
                }
                function Qi(t, i, s, c) {
                    M.call(this, c), (this.yci_1 = t), (this.zci_1 = i), (this.acj_1 = s);
                }
                function Vi(t, i, s) {
                    M.call(this, s), (this.kcj_1 = t), (this.lcj_1 = i);
                }
                function Yi(t, i, s, c) {
                    M.call(this, c), (this.vcj_1 = t), (this.wcj_1 = i), (this.xcj_1 = s);
                }
                function Zi(t, i) {
                    M.call(this, i), (this.hck_1 = t);
                }
                function ts(t) {
                    var i = t.kck_1;
                    return (
                        qt(
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
                    (this.dcl_1 = t), M.call(this, i);
                }
                function cs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new ss(t, i),
                                c = function (t) {
                                    return s.ecl(t);
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
                                        var h = bt(t),
                                            n = $t().sn_1,
                                            e = gt(Y(h), n),
                                            r = i.jaa_1.r2(e);
                                        s(null == r ? null : r.qaa_1);
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
                    M.call(this, s), (this.tck_1 = t), (this.uck_1 = i);
                }
                function es(t, i, s, c, h) {
                    M.call(this, h), (this.ncl_1 = t), (this.ocl_1 = i), (this.pcl_1 = s), (this.qcl_1 = c);
                }
                function rs(t, i, s, c) {
                    M.call(this, c), (this.ccm_1 = t), (this.dcm_1 = i), (this.ecm_1 = s);
                }
                function _s() {
                    this.kck_1 = Rt(cs(this));
                }
                function as(t, i, s) {
                    M.call(this, s), (this.ccn_1 = t), (this.dcn_1 = i);
                }
                function us(t, i) {
                    M.call(this, i), (this.mcn_1 = t);
                }
                function os(t, i, s, c) {
                    M.call(this, c), (this.vcn_1 = t), (this.wcn_1 = i), (this.xcn_1 = s);
                }
                function fs(t, i, s, c) {
                    M.call(this, c), (this.sco_1 = t), (this.tco_1 = i), (this.uco_1 = s);
                }
                function ls(t, i, s, c) {
                    M.call(this, c), (this.qcp_1 = t), (this.rcp_1 = i), (this.scp_1 = s);
                }
                function ws(t, i, s, c, h) {
                    M.call(this, h), (this.bcq_1 = t), (this.ccq_1 = i), (this.dcq_1 = s), (this.ecq_1 = c);
                }
                function vs(t, i, s, c) {
                    M.call(this, c), (this.scq_1 = t), (this.tcq_1 = i), (this.ucq_1 = s);
                }
                function xs(t, i, s, c, h) {
                    M.call(this, h), (this.dcr_1 = t), (this.ecr_1 = i), (this.fcr_1 = s), (this.gcr_1 = c);
                }
                function ds(t, i, s) {
                    M.call(this, s), (this.scm_1 = t), (this.tcm_1 = i);
                }
                function ys() {
                    this.jco_1 = 65;
                }
                function zs(t, i) {
                    M.call(this, i), (this.pcr_1 = t);
                }
                function bs(t) {
                    this.zc9_1 = t;
                }
                function $s(t, i) {
                    M.call(this, i), (this.ycr_1 = t);
                }
                function gs(t) {
                    this.pcf_1 = t;
                }
                function ps(t, i) {
                    M.call(this, i), (this.hcs_1 = t);
                }
                function Rs(t) {
                    this.jck_1 = t;
                }
                function ms(t, i, s) {
                    var c,
                        h = ks();
                    return null == h ? (c = null) : (h.mark(s + "_" + i, { startTime: performance.now(), detail: { thread: "main" } }), (c = W)), c;
                }
                function qs(t) {
                    this.ics_1 = t;
                }
                function ks() {
                    var t = window.performance;
                    return null != t && null != t ? t : null;
                }
                function js(t) {
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
                    A(wi, "KeypairPurpose", F, T),
                    A(xi, "XChatKeyPair"),
                    A(di, "XChatPrivateKeys"),
                    D(yi, M),
                    D(zi, M),
                    D(bi, M),
                    D($i, M),
                    P(gi, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
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
                    zt(ss, M, F, [0]),
                    D(ns, M),
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
                    A(gs, "XChatPublicKey", F, F, F, [0]),
                    D(ps, M),
                    A(Rs, "XChatPrivateKey", F, F, F, [0]),
                    A(qs, "WebPerformanceTracer"),
                    (J(Jt).dad = function () {
                        return this.bytes;
                    }),
                    (J(At).ec9 = function () {
                        return this.reason;
                    }),
                    (J(At).fc9 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).gc9 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.gc9(t, i);
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
                    (J(Nt).jc9 = function () {
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
                    (J(Ut).ec9 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).kc9 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.kc9(t);
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
                    (J(Qt).jc9 = function () {
                        return this.retryable;
                    }),
                    (J(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.xc9_1.aca(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.yc9_1 = t), (this.w9_1 = 2), (t = this.vc9_1.bca(this.wc9_1, this.yc9_1, this)) === N())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.kca_1.rca(this.lca_1, this.mca_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.nca_1 = t), null == this.nca_1)) {
                                            (this.oca_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.pca_1 = this.nca_1;
                                        if (((this.qca_1 = this.pca_1), (this.w9_1 = 2), (t = this.kca_1.sca(this.qca_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        (this.oca_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.oca_1;
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
                        return "XChatKeyPair(public=" + U(this.bcb_1) + ", private=" + U(this.ccb_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.bcb_1);
                        return (t = (C(t, 31) + H(this.ccb_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.bcb_1, i.bcb_1) && !!G(this.ccb_1, i.ccb_1);
                    }),
                    (J(di).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.dcb_1) + ", signing=" + B(this.ecb_1) + ")";
                    }),
                    (J(di).hashCode = function () {
                        var t = H(this.dcb_1);
                        return (t = (C(t, 31) + (null == this.ecb_1 ? 0 : H(this.ecb_1))) | 0);
                    }),
                    (J(di).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof di)) return !1;
                        var i = t instanceof di ? t : K();
                        return !!G(this.dcb_1, i.dcb_1) && !!G(this.ecb_1, i.ecb_1);
                    }),
                    (J(yi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = pi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.tcb_1 = Q), (this.w9_1 = 4), (t = this.ocb_1.aca(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.ucb_1 = t), (this.vcb_1 = V(this.ucb_1)), (this.wcb_1 = this.tcb_1.xc8(this.vcb_1)), (this.xcb_1 = this.wcb_1.ph()), (this.ycb_1 = this.wcb_1.wc7()), (this.w9_1 = 5);
                                        var i = this.ycb_1;
                                        if ((t = this.qcb_1.icc(Y(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.pcb_1.jcc(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.zcb_1 = t), null == this.zcb_1)) {
                                            (this.scb_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.acc_1 = this.zcb_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.bcc_1 = this.acc_1), (this.w9_1 = 9), (t = this.pcb_1.kcc(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.ccc_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.ccc_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.dcc_1 = this.ccc_1;
                                        var s = Q,
                                            c = this.bcc_1,
                                            h = V(c),
                                            n = this.dcc_1;
                                        (this.ecc_1 = s.zc8(this.xcb_1, h, F, st(it(n)))), (this.w9_1 = 11);
                                        var e = this.ecc_1;
                                        if ((t = this.qcb_1.icc(Y(e), this)) === N()) return t;
                                        continue t;
                                    case 12:
                                        (this.rcb_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.fcc_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.fcc_1;
                                            if (!r.i5w_1.h())
                                                for (var a = r.i5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.scb_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.gcc_1 = this.z9_1), this.pcb_1.e5(), (this.w9_1 = 15), (t = this.qcb_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.qcb_1.e5(), this.gcc_1);
                                    case 16:
                                        if (((this.hcc_1 = this.scb_1), (this.x9_1 = 20), this.pcb_1.e5(), (this.w9_1 = 17), (t = this.qcb_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.qcb_1.e5(), this.hcc_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.pcb_1.e5(), (this.w9_1 = 19), (t = this.qcb_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.qcb_1.e5(), W;
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
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = pi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.wcc_1.jcc(nt(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.ccd_1 = t), null == this.ccd_1)) {
                                            (this.bcd_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.dcd_1 = this.ccd_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.ecd_1 = this.dcd_1), (this.fcd_1 = this.ecd_1.length), (this.gcd_1 = Q), (this.w9_1 = 6), (t = this.vcc_1.aca(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.hcd_1 = t), (this.icd_1 = V(this.hcd_1));
                                        var i = this.ecd_1;
                                        (this.jcd_1 = this.gcd_1.ac9(this.icd_1, V(i))), (this.kcd_1 = this.jcd_1.ph()), (this.lcd_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.wcc_1.jcc(this.ucc_1.vcd_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.mcd_1 = t), null == this.mcd_1)) {
                                            (this.bcd_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.ncd_1 = this.mcd_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.ocd_1 = this.ncd_1), (this.fcd_1 = (this.fcd_1 + this.ocd_1.length) | 0);
                                        var s = Q,
                                            c = this.ocd_1;
                                        (this.pcd_1 = s.cc9(this.kcd_1, V(c))), (this.qcd_1 = this.pcd_1.zc7()), (this.w9_1 = 10);
                                        var h = this.qcd_1;
                                        if ((t = this.xcc_1.icc(Y(h), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.zcc_1 && null != this.ycc_1) {
                                            var n = this.fcd_1 / this.ycc_1.bytes.y3();
                                            n > this.lcd_1 + 0.1 && (this.zcc_1(n), (this.lcd_1 = n));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.acd_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.rcd_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.rcd_1;
                                            if (!e.i5w_1.h())
                                                for (var _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.bcd_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.scd_1 = this.z9_1), this.wcc_1.e5(), (this.w9_1 = 14), (t = this.xcc_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.xcc_1.e5(), this.scd_1);
                                    case 15:
                                        if (((this.tcd_1 = this.bcd_1), (this.x9_1 = 19), this.wcc_1.e5(), (this.w9_1 = 16), (t = this.xcc_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.xcc_1.e5(), this.tcd_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.wcc_1.e5(), (this.w9_1 = 18), (t = this.xcc_1.lcc(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.xcc_1.e5(), W;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = pi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.hce_1 = et.dc9(rt())), (this.ice_1 = _t);
                                        var i = this.gce_1;
                                        if (((this.jce_1 = V(i)), (this.w9_1 = 2), (t = this.fce_1.aca(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.ice_1.vc8(this.jce_1, this.hce_1, s),
                                            h = this.hce_1,
                                            n = Y(h),
                                            e = Y(c),
                                            r = V(at([n, e]));
                                        return Y(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = pi(O, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.uce_1, ut(0, rt()));
                                        this.wce_1 = V(i.slice());
                                        var s = ot(this.uce_1, ut(rt(), this.uce_1.length));
                                        if (((this.xce_1 = V(s.slice())), (this.yce_1 = _t), (this.w9_1 = 2), (t = this.tce_1.aca(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            h = this.yce_1.wc8(this.xce_1, this.wce_1, c);
                                        return Y(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.vce_1, _ = e.i5w_1.z().p(); _.q(); ) {
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
                    (J(gi).zce = function (t, i, s, c) {
                        var h = new yi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(gi).acf = function (t, i, s, c, h, n) {
                        var e = new zi(this, t, i, s, c, h, n);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(gi).bcf = function (t, i, s) {
                        var c = new bi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(gi).ccf = function (t, i, s, c) {
                        var h = new $i(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(Ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.lcf_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.lcf_1.uc8(this)) === N())) return t;
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
                    (J(mi).mcf = function () {
                        return !1;
                    }),
                    (J(mi).ncf = function (t, i) {
                        return W;
                    }),
                    (J(mi).ocf = function (t, i) {
                        return W;
                    }),
                    (J(Di).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.ycf_1.jck_1, "jwk", this)) === N())) return t;
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
                                        var i = qi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.hcg_1), (t = wt(i.deriveBits(s, this.icg_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.jcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.jcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.jcg_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = wt(qi(window).subtle.digest("SHA-256", yt([this.scg_1, dt(new Int8Array([0, 0, 0, 1])).buffer, this.tcg_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ucg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.i5w_1.h())
                                                for (var c = s.i5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
                                                }
                                            (this.ucg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ucg_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" },
                                            c = [this.ech_1];
                                        if ((t = wt(i.importKey("raw", this.dch_1, s, !1, c), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.fch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.fch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.fch_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.qch_1), (t = wt(i.encrypt(s, this.och_1, this.pch_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.rch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.rch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.rch_1;
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
                                            c = qi(window).subtle,
                                            h = {};
                                        switch (this.cci_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.cci_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.aci_1, this.bci_1, h, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.dci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.dci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dci_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.mci_1), (t = wt(i.decrypt(s, this.nci_1, this.oci_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.pci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.pci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.pci_1;
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
                                            c = qi(window).subtle,
                                            h = {};
                                        switch (this.acj_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.acj_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.yci_1, this.zci_1, h, !0, s), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.bcj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.bcj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.bcj_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = wt(i.sign(s, this.kcj_1, this.lcj_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.mcj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.mcj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.mcj_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = wt(i.verify(s, this.vcj_1, this.xcj_1, this.wcj_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ycj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.ycj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ycj_1;
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
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = wt(i.importKey("raw", this.hck_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.ick_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.ick_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ick_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(ss).ecl = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ss).k2e = function (t) {
                        return this.ecl(t);
                    }),
                    (J(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wt((this.dcl_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                        return new ss(this.dcl_1, t);
                    }),
                    (J(ns).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ts(this.tck_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = hs(this.uck_1)), new c(new s(this.uck_1.oaa_1), []);
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.ncl_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.rcl_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.pcl_1.jaa_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.ncl_1, this.pcl_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.tcl_1 = t), (this.w9_1 = 3), (t = wt(this.tcl_1.register(pt(this.ocl_1), this.qcl_1, new Int8Array(0), this.pcl_1.kaa_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.scl_1 = Lt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.rcl_1.RegisterError.InvalidAuth ? hi() : e == this.rcl_1.RegisterError.UpgradeRequired ? ni() : e == this.rcl_1.RegisterError.Assertion ? ei() : e == this.rcl_1.RegisterError.Transient ? ri() : e == this.rcl_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.scl_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.scl_1;
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = ts(this.ccm_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.fcm_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.ecm_1.jaa_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = is(this.ccm_1, this.ecm_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.hcm_1 = t), (this.w9_1 = 3), (t = wt(this.hcm_1.recover(pt(this.dcm_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.gcm_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.fcm_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.fcm_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.fcm_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.fcm_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.fcm_1.RecoverErrorReason.Assertion ? ii() : _ == this.fcm_1.RecoverErrorReason.Transient ? si() : _ == this.fcm_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.gcm_1 = new At(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.gcm_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(_s).icm = function (t, i, s, c) {
                        var h = new es(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(_s).jcm = function (t, i, s) {
                        var c = new rs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.dcn_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new gs(i.publicKey), new Rs(i.privateKey));
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.vcn_1.tca(vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ycn_1 = t), (this.w9_1 = 2), (t = Ci(this.wcn_1.pcf_1, this.ycn_1.ccb_1.jck_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.zcn_1 = t;
                                        var i;
                                        if (null == this.zcn_1) return null;
                                        if (((i = this.zcn_1), (this.aco_1 = i), (this.w9_1 = 3), (t = ki(this.ycn_1.bcb_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.bco_1 = t), (this.cco_1 = kt(this.bco_1, 65)), (this.w9_1 = 4), (t = Ji(this.aco_1, this.cco_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.dco_1 = t;
                                        var s;
                                        if (null == this.dco_1) return null;
                                        if (((s = this.dco_1), (this.eco_1 = s), (this.fco_1 = this.eco_1.slice(0, 16)), (this.gco_1 = this.eco_1.slice(16, 32)), (this.w9_1 = 5), (t = Ai(this.fco_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.hco_1 = t;
                                        var c;
                                        if (null == this.hco_1) return null;
                                        if (((c = this.hco_1), (this.ico_1 = c), (this.w9_1 = 6), (t = Fi(this.ico_1, xt(this.xcn_1), this.gco_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var h = t;
                                        return jt(yt([this.cco_1, h]));
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
                                        if (((this.x9_1 = 6), (this.vco_1 = xt(this.uco_1)), (this.wco_1 = this.vco_1.slice(0, 65)), (this.xco_1 = this.vco_1.slice(65)), (this.w9_1 = 1), (t = Ki("raw", this.wco_1, vi(), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.yco_1 = t;
                                        var i;
                                        if (null == this.yco_1) return null;
                                        if (((i = this.yco_1), (this.zco_1 = i), (this.w9_1 = 2), (t = Ci(this.zco_1, this.tco_1.jck_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.acp_1 = t;
                                        var s;
                                        if (null == this.acp_1) return null;
                                        if (((s = this.acp_1), (this.bcp_1 = s), (this.w9_1 = 3), (t = Ji(this.bcp_1, this.wco_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.ccp_1 = t;
                                        var c;
                                        if (null == this.ccp_1) return null;
                                        if (((c = this.ccp_1), (this.dcp_1 = c), (this.ecp_1 = this.dcp_1.slice(0, 16)), (this.fcp_1 = this.dcp_1.slice(16, 32)), (this.w9_1 = 4), (t = Ai(this.ecp_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.gcp_1 = t;
                                        var h;
                                        if (null == this.gcp_1) return null;
                                        if (((h = this.gcp_1), (this.hcp_1 = h), (this.w9_1 = 5), (t = Pi(this.fcp_1, this.hcp_1, this.xco_1, this)) === N())) return t;
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
                    (J(ls).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ki("spki", Et(this.rcp_1), this.scp_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new gs(t);
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Ki("spki", Et(this.dcq_1), this.ecq_1, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.fcq_1 = s;
                                        var c;
                                        if (null == this.fcq_1) c = null;
                                        else c = new gs(this.fcq_1);
                                        this.gcq_1 = c;
                                        var h;
                                        if (null == this.gcq_1) return null;
                                        if (((h = this.gcq_1), (this.hcq_1 = h), (this.w9_1 = 2), (t = this.hcq_1), (i = this), (s = Ni(t.pcf_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.icq_1 = s;
                                        var n = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((n.d = Ct(this.ccq_1, !0)), (n.x = this.icq_1.x), (n.y = this.icq_1.y), (this.jcq_1 = n), (this.w9_1 = 3), (s = Xi("jwk", this.jcq_1, this.ecq_1, this)) === N())) return s;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Wi(this.tcq_1.jck_1, xt(this.ucq_1), this)) === N())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.ecr_1.pcf_1, xt(this.gcr_1), xt(this.fcr_1), this)) === N())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.tcm_1, this)) === N())) return t;
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
                    (J(ys).tca = function (t, i) {
                        var s = new as(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(ys).uca = function (t) {
                        var i = new us(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ys).bca = function (t, i, s) {
                        var c = new os(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).rca = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).xca = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).yca = function (t, i, s, c) {
                        var h = new ws(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ys).sca = function (t, i) {
                        return (function (t, i, s) {
                            var c = new ds(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, Et(t), i);
                    }),
                    (J(ys).zca = function (t, i, s) {
                        var c = new vs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).acb = function (t, i, s, c) {
                        var h = new xs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(zs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.pcr_1), (i = this), (s = Mi(t.zc9_1, "raw", i)) === N())) return s;
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
                    (J(bs).aca = function (t) {
                        var i = new zs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J($s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.ycr_1, this)) === N())) return t;
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
                    (J(gs).aca = function (t) {
                        var i = new $s(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ps).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ji(this.hcs_1, this)) === N())) return t;
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
                    (J(Rs).aca = function (t) {
                        var i = new ps(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(qs).mcf = function () {
                        return this.ics_1 && !(null == ks());
                    }),
                    (J(qs).ncf = function (t, i) {
                        ms(0, t, "async_start");
                    }),
                    (J(qs).ocf = function (t, i) {
                        ms(0, t, "async_end");
                        var s = "async_" + t;
                        try {
                            var c = ks();
                            null == c || c.measure(s, "async_start_" + t, "async_end_" + t);
                            var h = ks();
                            null == h || h.clearMarks("async_start_" + t);
                            var n = ks();
                            null == n || n.clearMarks("async_end_" + t);
                        } catch (t) {}
                    }),
                    I(J(Nt), "name", J(Nt).z2),
                    I(J(Nt), "ordinal", J(Nt).a3),
                    I(J(Qt), "name", J(Qt).z2),
                    I(J(Qt), "ordinal", J(Qt).a3),
                    (J(ys).vca = function (t, i, s) {
                        var c = new ui(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ys).wca = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (S = new mi()),
                    (E = new ys()),
                    js(t),
                    (t.$jsExportAll$ = js),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = At),
                    (t.$_$.b = Jt),
                    (t.$_$.c = Ut),
                    (t.$_$.d = Dt),
                    (t.$_$.e = _s),
                    (t.$_$.f = qs),
                    (t.$_$.g = xi),
                    (t.$_$.h = di),
                    (t.$_$.i = ai),
                    (t.$_$.j = vi),
                    (t.$_$.k = function () {
                        return li(), q;
                    }),
                    (t.$_$.l = S),
                    (t.$_$.m = Kt),
                    (t.$_$.n = Xt),
                    (t.$_$.o = Lt),
                    (t.$_$.p = function () {
                        return null == j && new gi(), j;
                    }),
                    (t.$_$.q = E);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.10a2670a.js.map
