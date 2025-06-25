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
                    w,
                    l,
                    v,
                    x,
                    y,
                    d,
                    z,
                    $,
                    b,
                    g,
                    p,
                    R,
                    m,
                    q,
                    j,
                    k,
                    S,
                    E,
                    C,
                    J = Math.imul,
                    A = i.$_$.cf,
                    F = i.$_$.zd,
                    K = i.$_$.g,
                    P = i.$_$.ak,
                    X = i.$_$.fe,
                    W = i.$_$.bk,
                    T = i.$_$.s6,
                    I = i.$_$.nj,
                    M = i.$_$.nd,
                    N = i.$_$.yc,
                    D = i.$_$.jc,
                    L = i.$_$.be,
                    U = i.$_$.de,
                    H = i.$_$.gf,
                    G = i.$_$.yd,
                    B = i.$_$.pd,
                    O = i.$_$.nl,
                    Q = c.$_$.j,
                    V = c.$_$.h,
                    Y = i.$_$.i4,
                    Z = i.$_$.o4,
                    tt = c.$_$.e,
                    it = c.$_$.d,
                    st = i.$_$.df,
                    ct = i.$_$.e4,
                    nt = n.$_$.c,
                    ht = i.$_$.pj,
                    et = c.$_$.c,
                    rt = c.$_$.i,
                    _t = c.$_$.a,
                    at = c.$_$.g,
                    ut = i.$_$.f,
                    ot = i.$_$.yf,
                    ft = i.$_$.ib,
                    wt = c.$_$.b,
                    lt = i.$_$.cl,
                    vt = h.$_$.n,
                    xt = e.$_$.h,
                    yt = e.$_$.b,
                    dt = e.$_$.x,
                    zt = e.$_$.g,
                    $t = i.$_$.ee,
                    bt = c.$_$.f,
                    gt = i.$_$.h6,
                    pt = i.$_$.ii,
                    Rt = i.$_$.sg,
                    mt = i.$_$.bl,
                    qt = i.$_$.dg,
                    jt = i.$_$.wd,
                    kt = e.$_$.v,
                    St = e.$_$.d,
                    Et = e.$_$.c,
                    Ct = e.$_$.f,
                    Jt = e.$_$.k;
                function At(t) {
                    Tt.call(this), (this.bytes = t);
                }
                function Ft(t, i) {
                    Tt.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function Kt() {
                    (r = this), Tt.call(this);
                }
                function Pt() {
                    return null == r && new Kt(), r;
                }
                function Xt() {
                    (_ = this), Tt.call(this);
                }
                function Wt() {
                    return null == _ && new Xt(), _;
                }
                function Tt() {}
                function It() {
                    return [Yt(), Zt(), ti(), ii(), si(), ci(), ni()];
                }
                function Mt(t) {
                    switch (t) {
                        case "InvalidPin":
                            return Yt();
                        case "NotRegistered":
                            return Zt();
                        case "InvalidAuth":
                            return ti();
                        case "UpgradeRequired":
                            return ii();
                        case "Assertion":
                            return si();
                        case "Transient":
                            return ci();
                        case "RateLimitExceeded":
                            return ni();
                        default:
                            Nt(), W("No enum constant value.");
                    }
                }
                function Nt() {
                    if (x) return T;
                    (x = !0), (a = new Dt("InvalidPin", 0, !0)), (u = new Dt("NotRegistered", 1, !0)), (o = new Dt("InvalidAuth", 2, !0)), (f = new Dt("UpgradeRequired", 3, !1)), (w = new Dt("Assertion", 4, !1)), (l = new Dt("Transient", 5, !0)), (v = new Dt("RateLimitExceeded", 6, !0));
                }
                function Dt(t, i, s) {
                    I.call(this, t, i), (this.retryable = s);
                }
                function Lt() {
                    (y = this), Gt.call(this);
                }
                function Ut() {
                    return null == y && new Lt(), y;
                }
                function Ht(t) {
                    Gt.call(this), (this.reason = t);
                }
                function Gt() {}
                function Bt() {
                    return [hi(), ei(), ri(), _i(), ai(), ui()];
                }
                function Ot(t) {
                    switch (t) {
                        case "InvalidAuth":
                            return hi();
                        case "UpgradeRequired":
                            return ei();
                        case "Assertion":
                            return ri();
                        case "Transient":
                            return _i();
                        case "RateLimitExceeded":
                            return ai();
                        case "StorageFailed":
                            return ui();
                        default:
                            Qt(), W("No enum constant value.");
                    }
                }
                function Qt() {
                    if (R) return T;
                    (R = !0), (d = new Vt("InvalidAuth", 0, !0)), (z = new Vt("UpgradeRequired", 1, !1)), ($ = new Vt("Assertion", 2, !1)), (b = new Vt("Transient", 3, !0)), (g = new Vt("RateLimitExceeded", 4, !0)), (p = new Vt("StorageFailed", 5, !0));
                }
                function Vt(t, i, s) {
                    I.call(this, t, i), (this.retryable = s);
                }
                function Yt() {
                    return Nt(), a;
                }
                function Zt() {
                    return Nt(), u;
                }
                function ti() {
                    return Nt(), o;
                }
                function ii() {
                    return Nt(), f;
                }
                function si() {
                    return Nt(), w;
                }
                function ci() {
                    return Nt(), l;
                }
                function ni() {
                    return Nt(), v;
                }
                function hi() {
                    return Qt(), d;
                }
                function ei() {
                    return Qt(), z;
                }
                function ri() {
                    return Qt(), $;
                }
                function _i() {
                    return Qt(), b;
                }
                function ai() {
                    return Qt(), g;
                }
                function ui() {
                    return Qt(), p;
                }
                function oi(t, i, s, c) {
                    N.call(this, c), (this.qcb_1 = t), (this.rcb_1 = i), (this.scb_1 = s);
                }
                function fi(t, i, s, c) {
                    N.call(this, c), (this.fcc_1 = t), (this.gcc_1 = i), (this.hcc_1 = s);
                }
                function wi() {}
                function li() {
                    if (j) return T;
                    (j = !0), (m = new vi("Identity", 0)), (q = new vi("Signing", 1));
                }
                function vi(t, i) {
                    I.call(this, t, i);
                }
                function xi() {
                    return li(), m;
                }
                function yi(t, i) {
                    (this.wcc_1 = t), (this.xcc_1 = i);
                }
                function di(t, i) {
                    (this.ycc_1 = t), (this.zcc_1 = i);
                }
                function zi(t, i, s, c, n) {
                    N.call(this, n), (this.icd_1 = t), (this.jcd_1 = i), (this.kcd_1 = s), (this.lcd_1 = c);
                }
                function $i(t, i, s, c, n, h, e) {
                    N.call(this, e), (this.pce_1 = t), (this.qce_1 = i), (this.rce_1 = s), (this.sce_1 = c), (this.tce_1 = n), (this.uce_1 = h);
                }
                function bi(t, i, s, c) {
                    N.call(this, c), (this.zcf_1 = t), (this.acg_1 = i), (this.bcg_1 = s);
                }
                function gi(t, i, s, c, n) {
                    N.call(this, n), (this.ncg_1 = t), (this.ocg_1 = i), (this.pcg_1 = s), (this.qcg_1 = c);
                }
                function pi() {
                    (k = this), (this.pcf_1 = 1024), (this.qcf_1 = (1024 + wt()) | 0);
                }
                function Ri(t, i) {
                    var s = new mi(t, i);
                    return (s.y9_1 = T), (s.z9_1 = null), s.oa();
                }
                function mi(t, i) {
                    N.call(this, i), (this.gch_1 = t);
                }
                function qi() {}
                function ji(t) {
                    return t.crypto;
                }
                function ki(t, i) {
                    return Ni(t.kch_1, "spki", i);
                }
                function Si(t, i) {
                    var s = new Li(t, i);
                    return (s.y9_1 = T), (s.z9_1 = null), s.oa();
                }
                function Ei(t, i) {
                    var s,
                        c = ji(window).subtle,
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
                    return vt(c.generateKey(e, !0, h), i);
                }
                function Ci(t) {
                    var i = ji(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        c = s;
                    return vt(i.generateKey(c, !0, ["encrypt", "decrypt"]), t);
                }
                function Ji(t, i, s) {
                    var c = new Ui(t, i, s);
                    return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                }
                function Ai(t, i, s) {
                    var c = new Hi(t, i, s);
                    return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                }
                function Fi(t, i, s) {
                    var c = new Gi(t, i, s);
                    return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                }
                function Ki(t, i, s, c) {
                    var n = new Bi(t, i, s, c);
                    return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                }
                function Pi(t, i, s, c) {
                    var n = new Oi(t, i, s, c);
                    return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                }
                function Xi(t, i, s, c) {
                    var n = new Qi(t, i, s, c);
                    return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                }
                function Wi(t, i, s, c) {
                    var n = new Vi(t, i, s, c);
                    return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                }
                function Ti(t, i, s) {
                    var c = new Yi(t, i, s);
                    return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                }
                function Ii(t, i, s, c) {
                    var n = new Zi(t, i, s, c);
                    return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                }
                function Mi(t, i) {
                    var s = new ts(t, i);
                    return (s.y9_1 = T), (s.z9_1 = null), s.oa();
                }
                function Ni(t, i, s) {
                    return vt(ji(window).subtle.exportKey(i, t), s);
                }
                function Di(t, i, s) {
                    return vt(ji(window).subtle.exportKey(i, t), s);
                }
                function Li(t, i) {
                    N.call(this, i), (this.tch_1 = t);
                }
                function Ui(t, i, s) {
                    N.call(this, s), (this.cci_1 = t), (this.dci_1 = i);
                }
                function Hi(t, i, s) {
                    N.call(this, s), (this.nci_1 = t), (this.oci_1 = i);
                }
                function Gi(t, i, s) {
                    N.call(this, s), (this.yci_1 = t), (this.zci_1 = i);
                }
                function Bi(t, i, s, c) {
                    N.call(this, c), (this.jcj_1 = t), (this.kcj_1 = i), (this.lcj_1 = s);
                }
                function Oi(t, i, s, c) {
                    N.call(this, c), (this.vcj_1 = t), (this.wcj_1 = i), (this.xcj_1 = s);
                }
                function Qi(t, i, s, c) {
                    N.call(this, c), (this.hck_1 = t), (this.ick_1 = i), (this.jck_1 = s);
                }
                function Vi(t, i, s, c) {
                    N.call(this, c), (this.tck_1 = t), (this.uck_1 = i), (this.vck_1 = s);
                }
                function Yi(t, i, s) {
                    N.call(this, s), (this.fcl_1 = t), (this.gcl_1 = i);
                }
                function Zi(t, i, s, c) {
                    N.call(this, c), (this.qcl_1 = t), (this.rcl_1 = i), (this.scl_1 = s);
                }
                function ts(t, i) {
                    N.call(this, i), (this.ccm_1 = t);
                }
                function is(t) {
                    var i = t.fcm_1;
                    return (
                        jt(
                            "juiceboxModule",
                            1,
                            qt,
                            function (t) {
                                return is(t);
                            },
                            null,
                        ),
                        i.o2()
                    );
                }
                function ss(t, i, s) {
                    var c = new es(t, i, s);
                    return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                }
                function cs(t, i) {
                    (this.ycm_1 = t), N.call(this, i);
                }
                function ns(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new cs(t, i),
                                c = function (t) {
                                    return s.zcm(t);
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
                                        var n = bt(t),
                                            h = gt().sn_1,
                                            e = pt(Z(n), h),
                                            r = i.iae_1.r2(e);
                                        s(null == r ? null : r.pae_1);
                                    } catch (t) {
                                        if (!(t instanceof Error)) throw t;
                                        c(t);
                                    }
                                    return T;
                                };
                            })(i, t),
                        );
                    };
                }
                function es(t, i, s) {
                    N.call(this, s), (this.ocm_1 = t), (this.pcm_1 = i);
                }
                function rs(t, i, s, c, n) {
                    N.call(this, n), (this.icn_1 = t), (this.jcn_1 = i), (this.kcn_1 = s), (this.lcn_1 = c);
                }
                function _s(t, i, s, c) {
                    N.call(this, c), (this.xcn_1 = t), (this.ycn_1 = i), (this.zcn_1 = s);
                }
                function as() {
                    this.fcm_1 = mt(ns(this));
                }
                function us(t, i, s) {
                    N.call(this, s), (this.xco_1 = t), (this.yco_1 = i);
                }
                function os(t, i) {
                    N.call(this, i), (this.hcp_1 = t);
                }
                function fs(t, i, s, c) {
                    N.call(this, c), (this.qcp_1 = t), (this.rcp_1 = i), (this.scp_1 = s);
                }
                function ws(t, i, s, c) {
                    N.call(this, c), (this.ncq_1 = t), (this.ocq_1 = i), (this.pcq_1 = s);
                }
                function ls(t, i, s, c) {
                    N.call(this, c), (this.lcr_1 = t), (this.mcr_1 = i), (this.ncr_1 = s);
                }
                function vs(t, i, s, c, n) {
                    N.call(this, n), (this.wcr_1 = t), (this.xcr_1 = i), (this.ycr_1 = s), (this.zcr_1 = c);
                }
                function xs(t, i, s, c) {
                    N.call(this, c), (this.ncs_1 = t), (this.ocs_1 = i), (this.pcs_1 = s);
                }
                function ys(t, i, s, c, n) {
                    N.call(this, n), (this.ycs_1 = t), (this.zcs_1 = i), (this.act_1 = s), (this.bct_1 = c);
                }
                function ds(t, i, s) {
                    N.call(this, s), (this.nco_1 = t), (this.oco_1 = i);
                }
                function zs() {
                    this.ecq_1 = 65;
                }
                function $s(t, i) {
                    N.call(this, i), (this.kct_1 = t);
                }
                function bs(t) {
                    this.ucb_1 = t;
                }
                function gs(t, i) {
                    N.call(this, i), (this.tct_1 = t);
                }
                function ps(t) {
                    this.kch_1 = t;
                }
                function Rs(t, i) {
                    N.call(this, i), (this.ccu_1 = t);
                }
                function ms(t) {
                    this.ecm_1 = t;
                }
                function qs(t, i, s) {
                    var c,
                        n = ks();
                    if (null == n) c = null;
                    else {
                        var h = s + "_" + i;
                        performance.now();
                        n.mark(h, P()), (c = T);
                    }
                    return c;
                }
                function js(t) {
                    this.dcu_1 = t;
                }
                function ks() {
                    var t = window.performance;
                    return null != t && null != t ? t : null;
                }
                function Ss() {}
                function Es(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        c = s.dms || (s.dms = {});
                    (c.JuiceboxRecoverPrivateKeyResult = Tt), (c.JuiceboxRecoverPrivateKeyResult.Success = At), (c.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = Ft), M(c.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Pt), M(c.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Wt), (c.JuiceboxRecoverFailureReason = Dt), (c.JuiceboxRecoverFailureReason.values = It), (c.JuiceboxRecoverFailureReason.valueOf = Mt), M(c.JuiceboxRecoverFailureReason, "InvalidPin", Yt), M(c.JuiceboxRecoverFailureReason, "NotRegistered", Zt), M(c.JuiceboxRecoverFailureReason, "InvalidAuth", ti), M(c.JuiceboxRecoverFailureReason, "UpgradeRequired", ii), M(c.JuiceboxRecoverFailureReason, "Assertion", si), M(c.JuiceboxRecoverFailureReason, "Transient", ci), M(c.JuiceboxRecoverFailureReason, "RateLimitExceeded", ni), (c.JuiceboxRegisterPrivateKeyResult = Gt), M(c.JuiceboxRegisterPrivateKeyResult, "Success", Ut), (c.JuiceboxRegisterPrivateKeyResult.Failure = Ht), (c.JuiceboxRegisterFailureReason = Vt), (c.JuiceboxRegisterFailureReason.values = Bt), (c.JuiceboxRegisterFailureReason.valueOf = Ot), M(c.JuiceboxRegisterFailureReason, "InvalidAuth", hi), M(c.JuiceboxRegisterFailureReason, "UpgradeRequired", ei), M(c.JuiceboxRegisterFailureReason, "Assertion", ri), M(c.JuiceboxRegisterFailureReason, "Transient", _i), M(c.JuiceboxRegisterFailureReason, "RateLimitExceeded", ai), M(c.JuiceboxRegisterFailureReason, "StorageFailed", ui);
                }
                F(Tt, "JuiceboxRecoverPrivateKeyResult"),
                    F(At, "Success", K, Tt),
                    F(Ft, "JuiceboxFailure", K, Tt),
                    X(Kt, "KeyReconstructionFailure", K, Tt),
                    X(Xt, "NoJuiceboxTokens", K, Tt),
                    F(Dt, "JuiceboxRecoverFailureReason", K, I),
                    F(Gt, "JuiceboxRegisterPrivateKeyResult"),
                    X(Lt, "Success", K, Gt),
                    F(Ht, "Failure", K, Gt),
                    F(Vt, "JuiceboxRegisterFailureReason", K, I),
                    L(oi, N),
                    L(fi, N),
                    U(wi, "KeyFactory", K, K, K, [1, 0, 2, 3]),
                    F(vi, "KeypairPurpose", K, I),
                    F(yi, "XChatKeyPair"),
                    F(di, "XChatPrivateKeys"),
                    L(zi, N),
                    L($i, N),
                    L(bi, N),
                    L(gi, N),
                    X(pi, "LibsodiumEncryption", K, K, K, [3, 5, 2]),
                    L(mi, N),
                    X(qi, "NoOpPerfTracer"),
                    L(Li, N),
                    L(Ui, N),
                    L(Hi, N),
                    L(Gi, N),
                    L(Bi, N),
                    L(Oi, N),
                    L(Qi, N),
                    L(Vi, N),
                    L(Yi, N),
                    L(Zi, N),
                    L(ts, N),
                    $t(cs, N, K, [0]),
                    L(es, N),
                    L(rs, N),
                    L(_s, N),
                    F(as, "WebJuiceboxApi", as, K, K, [1, 3, 2]),
                    L(us, N),
                    L(os, N),
                    L(fs, N),
                    L(ws, N),
                    L(ls, N),
                    L(vs, N),
                    L(xs, N),
                    L(ys, N),
                    L(ds, N),
                    X(zs, "WebKeyFactory", K, K, [wi], [1, 0, 2, 3]),
                    L($s, N),
                    F(bs, "XChatConversationKey", K, K, K, [0]),
                    L(gs, N),
                    F(ps, "XChatPublicKey", K, K, K, [0]),
                    L(Rs, N),
                    F(ms, "XChatPrivateKey", K, K, K, [0]),
                    F(js, "WebPerformanceTracer"),
                    X(Ss, "WebRatchetTreeCrypto", K, K, K, [1, 3, 2]),
                    (A(At).cah = function () {
                        return this.bytes;
                    }),
                    (A(Ft).zca = function () {
                        return this.reason;
                    }),
                    (A(Ft).acb = function () {
                        return this.guessesRemaining;
                    }),
                    (A(Ft).ph = function () {
                        return this.reason;
                    }),
                    (A(Ft).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (A(Ft).bcb = function (t, i) {
                        return new Ft(t, i);
                    }),
                    (A(Ft).copy = function (t, i, s) {
                        return (t = t === K ? this.reason : t), (i = i === K ? this.guessesRemaining : i), this.bcb(t, i);
                    }),
                    (A(Ft).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (A(Ft).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (J(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (A(Ft).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Ft)) return !1;
                        var i = t instanceof Ft ? t : P();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (A(Kt).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (A(Kt).hashCode = function () {
                        return 188209770;
                    }),
                    (A(Kt).equals = function (t) {
                        return this === t || (t instanceof Kt && (t instanceof Kt || P(), !0));
                    }),
                    (A(Xt).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (A(Xt).hashCode = function () {
                        return 1362829865;
                    }),
                    (A(Xt).equals = function (t) {
                        return this === t || (t instanceof Xt && (t instanceof Xt || P(), !0));
                    }),
                    (A(Dt).ecb = function () {
                        return this.retryable;
                    }),
                    (A(Lt).toString = function () {
                        return "Success";
                    }),
                    (A(Lt).hashCode = function () {
                        return 1551298723;
                    }),
                    (A(Lt).equals = function (t) {
                        return this === t || (t instanceof Lt && (t instanceof Lt || P(), !0));
                    }),
                    (A(Ht).zca = function () {
                        return this.reason;
                    }),
                    (A(Ht).ph = function () {
                        return this.reason;
                    }),
                    (A(Ht).fcb = function (t) {
                        return new Ht(t);
                    }),
                    (A(Ht).copy = function (t, i) {
                        return (t = t === K ? this.reason : t), this.fcb(t);
                    }),
                    (A(Ht).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (A(Ht).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (A(Ht).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Ht)) return !1;
                        var i = t instanceof Ht ? t : P();
                        return !!this.reason.equals(i.reason);
                    }),
                    (A(Vt).ecb = function () {
                        return this.retryable;
                    }),
                    (A(oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.scb_1.vcb(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.tcb_1 = t), (this.w9_1 = 2), (t = this.qcb_1.wcb(this.rcb_1, this.tcb_1, this)) === D())) return t;
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
                    (A(fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.fcc_1.mcc(this.gcc_1, this.hcc_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.icc_1 = t), null == this.icc_1)) {
                                            (this.jcc_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.kcc_1 = this.icc_1;
                                        if (((this.lcc_1 = this.kcc_1), (this.w9_1 = 2), (t = this.fcc_1.ncc(this.lcc_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        (this.jcc_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.jcc_1;
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (4 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (A(yi).toString = function () {
                        return "XChatKeyPair(public=" + H(this.wcc_1) + ", private=" + H(this.xcc_1) + ")";
                    }),
                    (A(yi).hashCode = function () {
                        var t = G(this.wcc_1);
                        return (t = (J(t, 31) + G(this.xcc_1)) | 0);
                    }),
                    (A(yi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof yi)) return !1;
                        var i = t instanceof yi ? t : P();
                        return !!B(this.wcc_1, i.wcc_1) && !!B(this.xcc_1, i.xcc_1);
                    }),
                    (A(di).toString = function () {
                        return "XChatPrivateKeys(identity=" + H(this.ycc_1) + ", signing=" + O(this.zcc_1) + ")";
                    }),
                    (A(di).hashCode = function () {
                        var t = G(this.ycc_1);
                        return (t = (J(t, 31) + (null == this.zcc_1 ? 0 : G(this.zcc_1))) | 0);
                    }),
                    (A(di).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof di)) return !1;
                        var i = t instanceof di ? t : P();
                        return !!B(this.ycc_1, i.ycc_1) && !!B(this.zcc_1, i.zcc_1);
                    }),
                    (A(zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = Ri(Q, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.ocd_1 = V), (this.w9_1 = 4), (t = this.jcd_1.vcb(this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        (this.pcd_1 = t), (this.qcd_1 = Y(this.pcd_1)), (this.rcd_1 = this.ocd_1.sca(this.qcd_1)), (this.scd_1 = this.rcd_1.ph()), (this.tcd_1 = this.rcd_1.rc9()), (this.w9_1 = 5);
                                        var i = this.tcd_1;
                                        if ((t = this.lcd_1.dce(Z(i), this)) === D()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.kcd_1.ece(1024, this)) === D())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.ucd_1 = t), null == this.ucd_1)) {
                                            (this.ncd_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.vcd_1 = this.ucd_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.wcd_1 = this.vcd_1), (this.w9_1 = 9), (t = this.kcd_1.fce(this)) === D())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.xcd_1 = it()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.xcd_1 = tt()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.ycd_1 = this.xcd_1;
                                        var s = V,
                                            c = this.wcd_1,
                                            n = Y(c),
                                            h = this.ycd_1;
                                        (this.zcd_1 = s.uca(this.scd_1, n, K, ct(st(h)))), (this.w9_1 = 11);
                                        var e = this.zcd_1;
                                        if ((t = this.lcd_1.dce(Z(e), this)) === D()) return t;
                                        continue t;
                                    case 12:
                                        (this.mcd_1 = T), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.ace_1 = this.z9_1;
                                            var r = nt(),
                                                _ = this.ace_1;
                                            if (!r.j5w_1.h())
                                                for (var a = r.j5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.ncd_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.bce_1 = this.z9_1), this.kcd_1.e5(), (this.w9_1 = 15), (t = this.lcd_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.lcd_1.e5(), this.bce_1);
                                    case 16:
                                        if (((this.cce_1 = this.ncd_1), (this.x9_1 = 20), this.kcd_1.e5(), (this.w9_1 = 17), (t = this.lcd_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 17:
                                        return this.lcd_1.e5(), this.cce_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.kcd_1.e5(), (this.w9_1 = 19), (t = this.lcd_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 19:
                                        return this.lcd_1.e5(), T;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (20 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (A($i).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = Ri(Q, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.rce_1.ece(et(), this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.xce_1 = t), null == this.xce_1)) {
                                            (this.wce_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.yce_1 = this.xce_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.zce_1 = this.yce_1), (this.acf_1 = this.zce_1.length), (this.bcf_1 = V), (this.w9_1 = 6), (t = this.qce_1.vcb(this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        (this.ccf_1 = t), (this.dcf_1 = Y(this.ccf_1));
                                        var i = this.zce_1;
                                        (this.ecf_1 = this.bcf_1.vca(this.dcf_1, Y(i))), (this.fcf_1 = this.ecf_1.ph()), (this.gcf_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.rce_1.ece(this.pce_1.qcf_1, this)) === D())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.hcf_1 = t), null == this.hcf_1)) {
                                            (this.wce_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.icf_1 = this.hcf_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.jcf_1 = this.icf_1), (this.acf_1 = (this.acf_1 + this.jcf_1.length) | 0);
                                        var s = V,
                                            c = this.jcf_1;
                                        (this.kcf_1 = s.xca(this.fcf_1, Y(c))), (this.lcf_1 = this.kcf_1.uc9()), (this.w9_1 = 10);
                                        var n = this.lcf_1;
                                        if ((t = this.sce_1.dce(Z(n), this)) === D()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.uce_1 && null != this.tce_1) {
                                            var h = this.acf_1 / this.tce_1.bytes.y3();
                                            h > this.gcf_1 + 0.1 && (this.uce_1(h), (this.gcf_1 = h));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.vce_1 = T), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.mcf_1 = this.z9_1;
                                            var e = nt(),
                                                r = this.mcf_1;
                                            if (!e.j5w_1.h())
                                                for (var _ = e.j5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.wce_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.ncf_1 = this.z9_1), this.rce_1.e5(), (this.w9_1 = 14), (t = this.sce_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.sce_1.e5(), this.ncf_1);
                                    case 15:
                                        if (((this.ocf_1 = this.wce_1), (this.x9_1 = 19), this.rce_1.e5(), (this.w9_1 = 16), (t = this.sce_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 16:
                                        return this.sce_1.e5(), this.ocf_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.rce_1.e5(), (this.w9_1 = 18), (t = this.sce_1.gce(this)) === D())) return t;
                                        continue t;
                                    case 18:
                                        return this.sce_1.e5(), T;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (19 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (A(bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(Q, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.ccg_1 = rt.yca(_t())), (this.dcg_1 = at);
                                        var i = this.bcg_1;
                                        if (((this.ecg_1 = Y(i)), (this.w9_1 = 2), (t = this.acg_1.vcb(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var s = Y(t),
                                            c = this.dcg_1.qca(this.ecg_1, this.ccg_1, s),
                                            n = this.ccg_1,
                                            h = Z(n),
                                            e = Z(c),
                                            r = Y(ut([h, e]));
                                        return Z(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var _ = this.z9_1,
                                                a = nt();
                                            if (!a.j5w_1.h())
                                                for (var u = a.j5w_1.z().p(); u.q(); ) {
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
                    (A(gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(Q, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ft(this.pcg_1, ot(0, _t()));
                                        this.rcg_1 = Y(i.slice());
                                        var s = ft(this.pcg_1, ot(_t(), this.pcg_1.length));
                                        if (((this.scg_1 = Y(s.slice())), (this.tcg_1 = at), (this.w9_1 = 2), (t = this.ocg_1.vcb(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var c = Y(t),
                                            n = this.tcg_1.rca(this.scg_1, this.rcg_1, c);
                                        return Z(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var h = this.z9_1,
                                                e = nt();
                                            if (!e.j5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.qcg_1, _ = e.j5w_1.z().p(); _.q(); ) {
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
                    (A(pi).ucg = function (t, i, s, c) {
                        var n = new zi(this, t, i, s, c);
                        return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                    }),
                    (A(pi).vcg = function (t, i, s, c, n, h) {
                        var e = new $i(this, t, i, s, c, n, h);
                        return (e.y9_1 = T), (e.z9_1 = null), e.oa();
                    }),
                    (A(pi).wcg = function (t, i, s) {
                        var c = new bi(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(pi).xcg = function (t, i, s, c) {
                        var n = new gi(this, t, i, s, c);
                        return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                    }),
                    (A(mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.gch_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.gch_1.pca(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        return T;
                                    case 3:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (3 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (A(qi).hch = function () {
                        return !1;
                    }),
                    (A(qi).ich = function (t, i) {
                        return T;
                    }),
                    (A(qi).jch = function (t, i) {
                        return T;
                    }),
                    (A(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Di(this.tch_1.ecm_1, "jwk", this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = xt(i);
                                        return yt(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (2 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (A(Ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.cci_1), (t = vt(i.deriveBits(s, this.dci_1, 256), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.eci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = nt();
                                            if (!n.j5w_1.h())
                                                for (var h = n.j5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.eci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.eci_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (A(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = vt(ji(window).subtle.digest("SHA-256", zt([this.nci_1, dt(new Int8Array([0, 0, 0, 1])).buffer, this.oci_1])), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.pci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = nt();
                                            if (!s.j5w_1.h())
                                                for (var c = s.j5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
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
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (A(Gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" },
                                            c = [this.zci_1];
                                        if ((t = vt(i.importKey("raw", this.yci_1, s, !1, c), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.acj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = nt();
                                            if (!h.j5w_1.h())
                                                for (var e = h.j5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.acj_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.acj_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (A(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.lcj_1), (t = vt(i.encrypt(s, this.jcj_1, this.kcj_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.mcj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = nt();
                                            if (!n.j5w_1.h())
                                                for (var h = n.j5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
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
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (A(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s,
                                            c = ji(window).subtle,
                                            n = {};
                                        switch (this.xcj_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((n.name = i), (n.namedCurve = "P-256"), this.xcj_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = vt(c.importKey(this.vcj_1, this.wcj_1, n, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.ycj_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                e = nt();
                                            if (!e.j5w_1.h())
                                                for (var r = e.j5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", h, null);
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
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (A(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.hck_1), (t = vt(i.decrypt(s, this.ick_1, this.jck_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.kck_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = nt();
                                            if (!n.j5w_1.h())
                                                for (var h = n.j5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.kck_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.kck_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (A(Vi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s,
                                            c = ji(window).subtle,
                                            n = {};
                                        switch (this.vck_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((n.name = i), (n.namedCurve = "P-256"), this.vck_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = vt(c.importKey(this.tck_1, this.uck_1, n, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.wck_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                e = nt();
                                            if (!e.j5w_1.h())
                                                for (var r = e.j5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", h, null);
                                                }
                                            (this.wck_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.wck_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (A(Yi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = vt(i.sign(s, this.fcl_1, this.gcl_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.hcl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = nt();
                                            if (!h.j5w_1.h())
                                                for (var e = h.j5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.hcl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.hcl_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (A(Zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = vt(i.verify(s, this.qcl_1, this.scl_1, this.rcl_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.tcl_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                h = nt();
                                            if (!h.j5w_1.h())
                                                for (var e = h.j5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", n, null);
                                                }
                                            (this.tcl_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.tcl_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (A(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = vt(i.importKey("raw", this.ccm_1, s, !0, ["encrypt", "decrypt"]), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.dcm_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                n = nt();
                                            if (!n.j5w_1.h())
                                                for (var h = n.j5w_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", c, null);
                                                }
                                            (this.dcm_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dcm_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (A(cs).zcm = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = T), (i.z9_1 = null), i.oa();
                    }),
                    (A(cs).m2e = function (t) {
                        return this.zcm(t);
                    }),
                    (A(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = vt((this.ycm_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === D())) return t;
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
                    (A(cs).sa = function (t) {
                        return new cs(this.ycm_1, t);
                    }),
                    (A(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = is(this.ocm_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = hs(this.pcm_1)), new c(new s(this.pcm_1.nae_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (A(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.icn_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.mcn_1 = t), (this.x9_1 = 4);
                                        var i = nt();
                                        if (!i.j5w_1.h())
                                            for (var s = i.j5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = nt();
                                        if (!c.j5w_1.h())
                                            for (var n = H(this.kcn_1.iae_1), h = c.j5w_1.z().p(); h.q(); ) {
                                                h.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.icn_1, this.kcn_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.ocn_1 = t), (this.w9_1 = 3), (t = vt(this.ocn_1.register(Rt(this.jcn_1), this.lcn_1, new Int8Array(0), this.kcn_1.jae_1), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        (this.ncn_1 = Ut()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.mcn_1.RegisterError.InvalidAuth ? hi() : e == this.mcn_1.RegisterError.UpgradeRequired ? ei() : e == this.mcn_1.RegisterError.Assertion ? ri() : e == this.mcn_1.RegisterError.Transient ? _i() : e == this.mcn_1.RegisterError.RateLimitExceeded ? ai() : _i();
                                        (this.ncn_1 = new Ht(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.ncn_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (6 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (A(_s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.xcn_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.aco_1 = t), (this.x9_1 = 4);
                                        var i = nt();
                                        if (!i.j5w_1.h())
                                            for (var s = i.j5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = nt();
                                        if (!c.j5w_1.h())
                                            for (var n = H(this.zcn_1.iae_1), h = c.j5w_1.z().p(); h.q(); ) {
                                                h.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.xcn_1, this.zcn_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.cco_1 = t), (this.w9_1 = 3), (t = vt(this.cco_1.recover(Rt(this.ycn_1), new Int8Array(0)), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.bco_1 = new At(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.aco_1.RecoverErrorReason.InvalidPin ? Yt() : _ == this.aco_1.RecoverErrorReason.NotRegistered ? Zt() : _ == this.aco_1.RecoverErrorReason.InvalidAuth ? ti() : _ == this.aco_1.RecoverErrorReason.UpgradeRequired ? ii() : _ == this.aco_1.RecoverErrorReason.Assertion ? si() : _ == this.aco_1.RecoverErrorReason.Transient ? ci() : _ == this.aco_1.RecoverErrorReason.RateLimitExceeded ? ni() : ci();
                                        (this.bco_1 = new Ft(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.bco_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (A(as).dco = function (t, i, s, c) {
                        var n = new rs(this, t, i, s, c);
                        return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                    }),
                    (A(as).eco = function (t, i, s) {
                        var c = new _s(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.yco_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new yi(new ps(i.publicKey), new ms(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (A(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ci(this)) === D())) return t;
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
                    (A(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.qcp_1.occ(xi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.tcp_1 = t), (this.w9_1 = 2), (t = Ji(this.rcp_1.kch_1, this.tcp_1.xcc_1.ecm_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.ucp_1 = t;
                                        var i;
                                        if (null == this.ucp_1) return null;
                                        if (((i = this.ucp_1), (this.vcp_1 = i), (this.w9_1 = 3), (t = ki(this.tcp_1.wcc_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.wcp_1 = t), (this.xcp_1 = kt(this.wcp_1, 65)), (this.w9_1 = 4), (t = Ai(this.vcp_1, this.xcp_1, this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.ycp_1 = t;
                                        var s;
                                        if (null == this.ycp_1) return null;
                                        if (((s = this.ycp_1), (this.zcp_1 = s), (this.acq_1 = this.zcp_1.slice(0, 16)), (this.bcq_1 = this.zcp_1.slice(16, 32)), (this.w9_1 = 5), (t = Fi(this.acq_1, "encrypt", this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        this.ccq_1 = t;
                                        var c;
                                        if (null == this.ccq_1) return null;
                                        if (((c = this.ccq_1), (this.dcq_1 = c), (this.w9_1 = 6), (t = Ki(this.dcq_1, yt(this.scp_1), this.bcq_1, this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var n = t;
                                        return St(zt([this.xcp_1, n]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (7 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (A(ws).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.qcq_1 = yt(this.pcq_1)), (this.rcq_1 = this.qcq_1.slice(0, 65)), (this.scq_1 = this.qcq_1.slice(65)), (this.w9_1 = 1), (t = Pi("raw", this.rcq_1, xi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.tcq_1 = t;
                                        var i;
                                        if (null == this.tcq_1) return null;
                                        if (((i = this.tcq_1), (this.ucq_1 = i), (this.w9_1 = 2), (t = Ji(this.ucq_1, this.ocq_1.ecm_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.vcq_1 = t;
                                        var s;
                                        if (null == this.vcq_1) return null;
                                        if (((s = this.vcq_1), (this.wcq_1 = s), (this.w9_1 = 3), (t = Ai(this.wcq_1, this.rcq_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        this.xcq_1 = t;
                                        var c;
                                        if (null == this.xcq_1) return null;
                                        if (((c = this.xcq_1), (this.ycq_1 = c), (this.zcq_1 = this.ycq_1.slice(0, 16)), (this.acr_1 = this.ycq_1.slice(16, 32)), (this.w9_1 = 4), (t = Fi(this.zcq_1, "decrypt", this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.bcr_1 = t;
                                        var n;
                                        if (null == this.bcr_1) return null;
                                        if (((n = this.bcr_1), (this.ccr_1 = n), (this.w9_1 = 5), (t = Xi(this.acr_1, this.ccr_1, this.scq_1, this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : Et(t);
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (6 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (A(ls).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi("spki", Ct(this.mcr_1), this.ncr_1, this)) === D())) return t;
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
                    (A(vs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Pi("spki", Ct(this.ycr_1), this.zcr_1, this)) === D())) return s;
                                        continue t;
                                    case 1:
                                        this.acs_1 = s;
                                        var c;
                                        if (null == this.acs_1) c = null;
                                        else c = new ps(this.acs_1);
                                        this.bcs_1 = c;
                                        var n;
                                        if (null == this.bcs_1) return null;
                                        if (((n = this.bcs_1), (this.ccs_1 = n), (this.w9_1 = 2), (t = this.ccs_1), (i = this), (s = Di(t.kch_1, "jwk", i)) === D())) return s;
                                        continue t;
                                    case 2:
                                        this.dcs_1 = s;
                                        var h = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((h.d = Jt(this.xcr_1, !0)), (h.x = this.dcs_1.x), (h.y = this.dcs_1.y), (this.ecs_1 = h), (this.w9_1 = 3), (s = Wi("jwk", this.ecs_1, this.zcr_1, this)) === D())) return s;
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
                    (A(xs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.ocs_1.ecm_1, yt(this.pcs_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : Et(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (A(ys).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.zcs_1.kch_1, yt(this.bct_1), yt(this.act_1), this)) === D())) return t;
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
                    (A(ds).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Mi(this.oco_1, this)) === D())) return t;
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
                    (A(zs).occ = function (t, i) {
                        var s = new us(this, t, i);
                        return (s.y9_1 = T), (s.z9_1 = null), s.oa();
                    }),
                    (A(zs).pcc = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = T), (i.z9_1 = null), i.oa();
                    }),
                    (A(zs).wcb = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(zs).mcc = function (t, i, s) {
                        var c = new ws(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(zs).scc = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(zs).tcc = function (t, i, s, c) {
                        var n = new vs(this, t, i, s, c);
                        return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                    }),
                    (A(zs).ncc = function (t, i) {
                        return (function (t, i, s) {
                            var c = new ds(t, i, s);
                            return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                        })(this, Ct(t), i);
                    }),
                    (A(zs).ucc = function (t, i, s) {
                        var c = new xs(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(zs).vcc = function (t, i, s, c) {
                        var n = new ys(this, t, i, s, c);
                        return (n.y9_1 = T), (n.z9_1 = null), n.oa();
                    }),
                    (A($s).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.kct_1), (i = this), (s = Ni(t.ucb_1, "raw", i)) === D())) return s;
                                        continue t;
                                    case 1:
                                        return Et(s);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (2 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (A(bs).vcb = function (t) {
                        var i = new $s(this, t);
                        return (i.y9_1 = T), (i.z9_1 = null), i.oa();
                    }),
                    (A(gs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.tct_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        return Et(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (A(ps).vcb = function (t) {
                        var i = new gs(this, t);
                        return (i.y9_1 = T), (i.z9_1 = null), i.oa();
                    }),
                    (A(Rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.ccu_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        return Et(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (A(ms).vcb = function (t) {
                        var i = new Rs(this, t);
                        return (i.y9_1 = T), (i.z9_1 = null), i.oa();
                    }),
                    (A(js).hch = function () {
                        return this.dcu_1 && !(null == ks());
                    }),
                    (A(js).ich = function (t, i) {
                        qs(0, t, "async_start");
                    }),
                    (A(js).jch = function (t, i) {
                        qs(0, t, "async_end");
                        var s = "async_" + t;
                        try {
                            var c = ks();
                            null == c || c.measure(s, "async_start_" + t, "async_end_" + t);
                            var n = ks();
                            null == n || n.clearMarks("async_start_" + t);
                            var h = ks();
                            null == h || h.clearMarks("async_end_" + t);
                        } catch (t) {}
                    }),
                    M(A(Dt), "name", A(Dt).z2),
                    M(A(Dt), "ordinal", A(Dt).a3),
                    M(A(Vt), "name", A(Vt).z2),
                    M(A(Vt), "ordinal", A(Vt).a3),
                    (A(zs).qcc = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (A(zs).rcc = function (t, i, s) {
                        var c = new fi(this, t, i, s);
                        return (c.y9_1 = T), (c.z9_1 = null), c.oa();
                    }),
                    (S = new qi()),
                    (E = new zs()),
                    (C = new Ss()),
                    Es(t),
                    (t.$jsExportAll$ = Es),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Ft),
                    (t.$_$.b = At),
                    (t.$_$.c = Ht),
                    (t.$_$.d = Lt),
                    (t.$_$.e = as),
                    (t.$_$.f = js),
                    (t.$_$.g = yi),
                    (t.$_$.h = di),
                    (t.$_$.i = ui),
                    (t.$_$.j = xi),
                    (t.$_$.k = function () {
                        return li(), q;
                    }),
                    (t.$_$.l = S),
                    (t.$_$.m = Pt),
                    (t.$_$.n = Wt),
                    (t.$_$.o = Ut),
                    (t.$_$.p = function () {
                        return null == k && new pi(), k;
                    }),
                    (t.$_$.q = E),
                    (t.$_$.r = C);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.d9bf46fa.js.map
