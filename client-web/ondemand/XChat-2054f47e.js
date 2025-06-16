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
                    b,
                    $,
                    g,
                    m,
                    R,
                    p,
                    j,
                    q,
                    k,
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
                    I = i.$_$.lj,
                    T = i.$_$.md,
                    N = i.$_$.xc,
                    D = i.$_$.ic,
                    L = i.$_$.ae,
                    M = i.$_$.ce,
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
                    bt = c.$_$.f,
                    $t = i.$_$.h6,
                    gt = i.$_$.gi,
                    mt = i.$_$.qg,
                    Rt = i.$_$.zk,
                    pt = i.$_$.bg,
                    jt = i.$_$.vd,
                    qt = e.$_$.u,
                    kt = e.$_$.d,
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
                function It() {
                    return [Vt(), Yt(), Zt(), ti(), ii(), si(), ci()];
                }
                function Tt(t) {
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
                            Nt(), X("No enum constant value.");
                    }
                }
                function Nt() {
                    if (x) return W;
                    (x = !0), (a = new Dt("InvalidPin", 0, !0)), (u = new Dt("NotRegistered", 1, !0)), (o = new Dt("InvalidAuth", 2, !0)), (f = new Dt("UpgradeRequired", 3, !1)), (w = new Dt("Assertion", 4, !1)), (l = new Dt("Transient", 5, !0)), (v = new Dt("RateLimitExceeded", 6, !0));
                }
                function Dt(t, i, s) {
                    I.call(this, t, i), (this.retryable = s);
                }
                function Lt() {
                    (y = this), Ht.call(this);
                }
                function Mt() {
                    return null == y && new Lt(), y;
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
                    (R = !0), (z = new Qt("InvalidAuth", 0, !0)), (d = new Qt("UpgradeRequired", 1, !1)), (b = new Qt("Assertion", 2, !1)), ($ = new Qt("Transient", 3, !0)), (g = new Qt("RateLimitExceeded", 4, !0)), (m = new Qt("StorageFailed", 5, !0));
                }
                function Qt(t, i, s) {
                    I.call(this, t, i), (this.retryable = s);
                }
                function Vt() {
                    return Nt(), a;
                }
                function Yt() {
                    return Nt(), u;
                }
                function Zt() {
                    return Nt(), o;
                }
                function ti() {
                    return Nt(), f;
                }
                function ii() {
                    return Nt(), w;
                }
                function si() {
                    return Nt(), l;
                }
                function ci() {
                    return Nt(), v;
                }
                function hi() {
                    return Ot(), z;
                }
                function ni() {
                    return Ot(), d;
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
                    return Ot(), m;
                }
                function ui(t, i, s, c) {
                    N.call(this, c), (this.oc7_1 = t), (this.pc7_1 = i), (this.qc7_1 = s);
                }
                function oi(t, i, s, c) {
                    N.call(this, c), (this.dc8_1 = t), (this.ec8_1 = i), (this.fc8_1 = s);
                }
                function fi() {}
                function wi() {
                    if (q) return W;
                    (q = !0), (p = new li("Identity", 0)), (j = new li("Signing", 1));
                }
                function li(t, i) {
                    I.call(this, t, i);
                }
                function vi() {
                    return wi(), p;
                }
                function xi(t, i) {
                    (this.uc8_1 = t), (this.vc8_1 = i);
                }
                function yi(t, i) {
                    (this.wc8_1 = t), (this.xc8_1 = i);
                }
                function zi(t, i, s, c, h) {
                    N.call(this, h), (this.gc9_1 = t), (this.hc9_1 = i), (this.ic9_1 = s), (this.jc9_1 = c);
                }
                function di(t, i, s, c, h, n, e) {
                    N.call(this, e), (this.nca_1 = t), (this.oca_1 = i), (this.pca_1 = s), (this.qca_1 = c), (this.rca_1 = h), (this.sca_1 = n);
                }
                function bi(t, i, s, c) {
                    N.call(this, c), (this.xcb_1 = t), (this.ycb_1 = i), (this.zcb_1 = s);
                }
                function $i(t, i, s, c, h) {
                    N.call(this, h), (this.lcc_1 = t), (this.mcc_1 = i), (this.ncc_1 = s), (this.occ_1 = c);
                }
                function gi() {
                    (k = this), (this.ncb_1 = 1024), (this.ocb_1 = (1024 + ft()) | 0);
                }
                function mi(t, i) {
                    var s = new Ri(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Ri(t, i) {
                    N.call(this, i), (this.ecd_1 = t);
                }
                function pi() {}
                function ji() {}
                function qi(t) {
                    return t.crypto;
                }
                function ki(t, i) {
                    return Di(t.jcd_1, "spki", i);
                }
                function Si(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Ei(t, i) {
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
                function Ci(t) {
                    var i = qi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        c = s;
                    return lt(i.generateKey(c, !0, ["encrypt", "decrypt"]), t);
                }
                function Ji(t, i, s) {
                    var c = new Ui(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ai(t, i, s) {
                    var c = new Hi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Fi(t, i, s) {
                    var c = new Gi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
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
                function Wi(t, i, s, c) {
                    var h = new Vi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Ii(t, i, s) {
                    var c = new Yi(t, i, s);
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function Ti(t, i, s, c) {
                    var h = new Zi(t, i, s, c);
                    return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                }
                function Ni(t, i) {
                    var s = new ts(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Di(t, i, s) {
                    return lt(qi(window).subtle.exportKey(i, t), s);
                }
                function Li(t, i, s) {
                    return lt(qi(window).subtle.exportKey(i, t), s);
                }
                function Mi(t, i) {
                    N.call(this, i), (this.scd_1 = t);
                }
                function Ui(t, i, s) {
                    N.call(this, s), (this.bce_1 = t), (this.cce_1 = i);
                }
                function Hi(t, i, s) {
                    N.call(this, s), (this.mce_1 = t), (this.nce_1 = i);
                }
                function Gi(t, i, s) {
                    N.call(this, s), (this.xce_1 = t), (this.yce_1 = i);
                }
                function Bi(t, i, s, c) {
                    N.call(this, c), (this.icf_1 = t), (this.jcf_1 = i), (this.kcf_1 = s);
                }
                function Oi(t, i, s, c) {
                    N.call(this, c), (this.ucf_1 = t), (this.vcf_1 = i), (this.wcf_1 = s);
                }
                function Qi(t, i, s, c) {
                    N.call(this, c), (this.gcg_1 = t), (this.hcg_1 = i), (this.icg_1 = s);
                }
                function Vi(t, i, s, c) {
                    N.call(this, c), (this.scg_1 = t), (this.tcg_1 = i), (this.ucg_1 = s);
                }
                function Yi(t, i, s) {
                    N.call(this, s), (this.ech_1 = t), (this.fch_1 = i);
                }
                function Zi(t, i, s, c) {
                    N.call(this, c), (this.pch_1 = t), (this.qch_1 = i), (this.rch_1 = s);
                }
                function ts(t, i) {
                    N.call(this, i), (this.bci_1 = t);
                }
                function is(t) {
                    var i = t.eci_1;
                    return (
                        jt(
                            "juiceboxModule",
                            1,
                            pt,
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
                    return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                }
                function cs(t, i) {
                    (this.xci_1 = t), N.call(this, i);
                }
                function hs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new cs(t, i),
                                c = function (t) {
                                    return s.yci(t);
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
                                        var h = bt(t),
                                            n = $t().sn_1,
                                            e = gt(Y(h), n),
                                            r = i.qa8_1.r2(e);
                                        s(null == r ? null : r.xa8_1);
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
                function es(t, i, s) {
                    N.call(this, s), (this.nci_1 = t), (this.oci_1 = i);
                }
                function rs(t, i, s, c, h) {
                    N.call(this, h), (this.hcj_1 = t), (this.icj_1 = i), (this.jcj_1 = s), (this.kcj_1 = c);
                }
                function _s(t, i, s, c) {
                    N.call(this, c), (this.wcj_1 = t), (this.xcj_1 = i), (this.ycj_1 = s);
                }
                function as() {
                    this.eci_1 = Rt(hs(this));
                }
                function us(t, i, s) {
                    N.call(this, s), (this.wck_1 = t), (this.xck_1 = i);
                }
                function os(t, i) {
                    N.call(this, i), (this.gcl_1 = t);
                }
                function fs(t, i, s, c) {
                    N.call(this, c), (this.pcl_1 = t), (this.qcl_1 = i), (this.rcl_1 = s);
                }
                function ws(t, i, s, c) {
                    N.call(this, c), (this.mcm_1 = t), (this.ncm_1 = i), (this.ocm_1 = s);
                }
                function ls(t, i, s, c) {
                    N.call(this, c), (this.kcn_1 = t), (this.lcn_1 = i), (this.mcn_1 = s);
                }
                function vs(t, i, s, c, h) {
                    N.call(this, h), (this.vcn_1 = t), (this.wcn_1 = i), (this.xcn_1 = s), (this.ycn_1 = c);
                }
                function xs(t, i, s, c) {
                    N.call(this, c), (this.mco_1 = t), (this.nco_1 = i), (this.oco_1 = s);
                }
                function ys(t, i, s, c, h) {
                    N.call(this, h), (this.xco_1 = t), (this.yco_1 = i), (this.zco_1 = s), (this.acp_1 = c);
                }
                function zs(t, i, s) {
                    N.call(this, s), (this.mck_1 = t), (this.nck_1 = i);
                }
                function ds() {
                    this.dcm_1 = 65;
                }
                function bs(t, i) {
                    N.call(this, i), (this.jcp_1 = t);
                }
                function $s(t) {
                    this.sc7_1 = t;
                }
                function gs(t, i) {
                    N.call(this, i), (this.scp_1 = t);
                }
                function ms(t) {
                    this.jcd_1 = t;
                }
                function Rs(t, i) {
                    N.call(this, i), (this.bcq_1 = t);
                }
                function ps(t) {
                    this.dci_1 = t;
                }
                function js(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        c = s.dms || (s.dms = {});
                    (c.JuiceboxRecoverPrivateKeyResult = Wt), (c.JuiceboxRecoverPrivateKeyResult.Success = Jt), (c.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = At), T(c.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Kt), T(c.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Xt), (c.JuiceboxRecoverFailureReason = Dt), (c.JuiceboxRecoverFailureReason.values = It), (c.JuiceboxRecoverFailureReason.valueOf = Tt), T(c.JuiceboxRecoverFailureReason, "InvalidPin", Vt), T(c.JuiceboxRecoverFailureReason, "NotRegistered", Yt), T(c.JuiceboxRecoverFailureReason, "InvalidAuth", Zt), T(c.JuiceboxRecoverFailureReason, "UpgradeRequired", ti), T(c.JuiceboxRecoverFailureReason, "Assertion", ii), T(c.JuiceboxRecoverFailureReason, "Transient", si), T(c.JuiceboxRecoverFailureReason, "RateLimitExceeded", ci), (c.JuiceboxRegisterPrivateKeyResult = Ht), T(c.JuiceboxRegisterPrivateKeyResult, "Success", Mt), (c.JuiceboxRegisterPrivateKeyResult.Failure = Ut), (c.JuiceboxRegisterFailureReason = Qt), (c.JuiceboxRegisterFailureReason.values = Gt), (c.JuiceboxRegisterFailureReason.valueOf = Bt), T(c.JuiceboxRegisterFailureReason, "InvalidAuth", hi), T(c.JuiceboxRegisterFailureReason, "UpgradeRequired", ni), T(c.JuiceboxRegisterFailureReason, "Assertion", ei), T(c.JuiceboxRegisterFailureReason, "Transient", ri), T(c.JuiceboxRegisterFailureReason, "RateLimitExceeded", _i), T(c.JuiceboxRegisterFailureReason, "StorageFailed", ai);
                }
                A(Wt, "JuiceboxRecoverPrivateKeyResult"),
                    A(Jt, "Success", F, Wt),
                    A(At, "JuiceboxFailure", F, Wt),
                    P(Ft, "KeyReconstructionFailure", F, Wt),
                    P(Pt, "NoJuiceboxTokens", F, Wt),
                    A(Dt, "JuiceboxRecoverFailureReason", F, I),
                    A(Ht, "JuiceboxRegisterPrivateKeyResult"),
                    P(Lt, "Success", F, Ht),
                    A(Ut, "Failure", F, Ht),
                    A(Qt, "JuiceboxRegisterFailureReason", F, I),
                    L(ui, N),
                    L(oi, N),
                    M(fi, "KeyFactory", F, F, F, [1, 0, 2, 3]),
                    A(li, "KeypairPurpose", F, I),
                    A(xi, "XChatKeyPair"),
                    A(yi, "XChatPrivateKeys"),
                    L(zi, N),
                    L(di, N),
                    L(bi, N),
                    L($i, N),
                    P(gi, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    L(Ri, N),
                    M(pi, "PerformanceTracer"),
                    P(ji, "NoOpPerfTracer", F, F, [pi]),
                    L(Mi, N),
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
                    dt(cs, N, F, [0]),
                    L(es, N),
                    L(rs, N),
                    L(_s, N),
                    A(as, "WebJuiceboxApi", as, F, F, [1, 3, 2]),
                    L(us, N),
                    L(os, N),
                    L(fs, N),
                    L(ws, N),
                    L(ls, N),
                    L(vs, N),
                    L(xs, N),
                    L(ys, N),
                    L(zs, N),
                    P(ds, "WebKeyFactory", F, F, [fi], [1, 0, 2, 3]),
                    L(bs, N),
                    A($s, "XChatConversationKey", F, F, F, [0]),
                    L(gs, N),
                    A(ms, "XChatPublicKey", F, F, F, [0]),
                    L(Rs, N),
                    A(ps, "XChatPrivateKey", F, F, F, [0]),
                    (J(Jt).lab = function () {
                        return this.bytes;
                    }),
                    (J(At).xc6 = function () {
                        return this.reason;
                    }),
                    (J(At).yc6 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).zc6 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.zc6(t, i);
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
                    (J(Dt).cc7 = function () {
                        return this.retryable;
                    }),
                    (J(Lt).toString = function () {
                        return "Success";
                    }),
                    (J(Lt).hashCode = function () {
                        return 1551298723;
                    }),
                    (J(Lt).equals = function (t) {
                        return this === t || (t instanceof Lt && (t instanceof Lt || K(), !0));
                    }),
                    (J(Ut).xc6 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).dc7 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.dc7(t);
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
                    (J(Qt).cc7 = function () {
                        return this.retryable;
                    }),
                    (J(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.qc7_1.tc7(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.rc7_1 = t), (this.w9_1 = 2), (t = this.oc7_1.uc7(this.pc7_1, this.rc7_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.dc8_1.kc8(this.ec8_1, this.fc8_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.gc8_1 = t), null == this.gc8_1)) {
                                            (this.hc8_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.ic8_1 = this.gc8_1;
                                        if (((this.jc8_1 = this.ic8_1), (this.w9_1 = 2), (t = this.dc8_1.lc8(this.jc8_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        (this.hc8_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.hc8_1;
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
                        return "XChatKeyPair(public=" + U(this.uc8_1) + ", private=" + U(this.vc8_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.uc8_1);
                        return (t = (C(t, 31) + H(this.vc8_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.uc8_1, i.uc8_1) && !!G(this.vc8_1, i.vc8_1);
                    }),
                    (J(yi).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.wc8_1) + ", signing=" + B(this.xc8_1) + ")";
                    }),
                    (J(yi).hashCode = function () {
                        var t = H(this.wc8_1);
                        return (t = (C(t, 31) + (null == this.xc8_1 ? 0 : H(this.xc8_1))) | 0);
                    }),
                    (J(yi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof yi)) return !1;
                        var i = t instanceof yi ? t : K();
                        return !!G(this.wc8_1, i.wc8_1) && !!G(this.xc8_1, i.xc8_1);
                    }),
                    (J(zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = mi(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.mc9_1 = Q), (this.w9_1 = 4), (t = this.hc9_1.tc7(this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        (this.nc9_1 = t), (this.oc9_1 = V(this.nc9_1)), (this.pc9_1 = this.mc9_1.qc6(this.oc9_1)), (this.qc9_1 = this.pc9_1.ph()), (this.rc9_1 = this.pc9_1.pc5()), (this.w9_1 = 5);
                                        var i = this.rc9_1;
                                        if ((t = this.jc9_1.bca(Y(i), this)) === D()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.ic9_1.cca(1024, this)) === D())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.sc9_1 = t), null == this.sc9_1)) {
                                            (this.lc9_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.tc9_1 = this.sc9_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.uc9_1 = this.tc9_1), (this.w9_1 = 9), (t = this.ic9_1.dca(this)) === D())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.vc9_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.vc9_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.wc9_1 = this.vc9_1;
                                        var s = Q,
                                            c = this.uc9_1,
                                            h = V(c),
                                            n = this.wc9_1;
                                        (this.xc9_1 = s.sc6(this.qc9_1, h, F, st(it(n)))), (this.w9_1 = 11);
                                        var e = this.xc9_1;
                                        if ((t = this.jc9_1.bca(Y(e), this)) === D()) return t;
                                        continue t;
                                    case 12:
                                        (this.kc9_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.yc9_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.yc9_1;
                                            if (!r.i5w_1.h())
                                                for (var a = r.i5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.lc9_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.zc9_1 = this.z9_1), this.ic9_1.e5(), (this.w9_1 = 15), (t = this.jc9_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.jc9_1.e5(), this.zc9_1);
                                    case 16:
                                        if (((this.aca_1 = this.lc9_1), (this.x9_1 = 20), this.ic9_1.e5(), (this.w9_1 = 17), (t = this.jc9_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 17:
                                        return this.jc9_1.e5(), this.aca_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.ic9_1.e5(), (this.w9_1 = 19), (t = this.jc9_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 19:
                                        return this.jc9_1.e5(), W;
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
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = mi(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.pca_1.cca(nt(), this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.vca_1 = t), null == this.vca_1)) {
                                            (this.uca_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.wca_1 = this.vca_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.xca_1 = this.wca_1), (this.yca_1 = this.xca_1.length), (this.zca_1 = Q), (this.w9_1 = 6), (t = this.oca_1.tc7(this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        (this.acb_1 = t), (this.bcb_1 = V(this.acb_1));
                                        var i = this.xca_1;
                                        (this.ccb_1 = this.zca_1.tc6(this.bcb_1, V(i))), (this.dcb_1 = this.ccb_1.ph()), (this.ecb_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.pca_1.cca(this.nca_1.ocb_1, this)) === D())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.fcb_1 = t), null == this.fcb_1)) {
                                            (this.uca_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.gcb_1 = this.fcb_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.hcb_1 = this.gcb_1), (this.yca_1 = (this.yca_1 + this.hcb_1.length) | 0);
                                        var s = Q,
                                            c = this.hcb_1;
                                        (this.icb_1 = s.vc6(this.dcb_1, V(c))), (this.jcb_1 = this.icb_1.sc5()), (this.w9_1 = 10);
                                        var h = this.jcb_1;
                                        if ((t = this.qca_1.bca(Y(h), this)) === D()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.sca_1 && null != this.rca_1) {
                                            var n = this.yca_1 / this.rca_1.bytes.y3();
                                            n > this.ecb_1 + 0.1 && (this.sca_1(n), (this.ecb_1 = n));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.tca_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.kcb_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.kcb_1;
                                            if (!e.i5w_1.h())
                                                for (var _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.uca_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.lcb_1 = this.z9_1), this.pca_1.e5(), (this.w9_1 = 14), (t = this.qca_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.qca_1.e5(), this.lcb_1);
                                    case 15:
                                        if (((this.mcb_1 = this.uca_1), (this.x9_1 = 19), this.pca_1.e5(), (this.w9_1 = 16), (t = this.qca_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 16:
                                        return this.qca_1.e5(), this.mcb_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.pca_1.e5(), (this.w9_1 = 18), (t = this.qca_1.eca(this)) === D())) return t;
                                        continue t;
                                    case 18:
                                        return this.qca_1.e5(), W;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = mi(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.acc_1 = et.wc6(rt())), (this.bcc_1 = _t);
                                        var i = this.zcb_1;
                                        if (((this.ccc_1 = V(i)), (this.w9_1 = 2), (t = this.ycb_1.tc7(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.bcc_1.oc6(this.ccc_1, this.acc_1, s),
                                            h = this.acc_1,
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = mi(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.ncc_1, ut(0, rt()));
                                        this.pcc_1 = V(i.slice());
                                        var s = ot(this.ncc_1, ut(rt(), this.ncc_1.length));
                                        if (((this.qcc_1 = V(s.slice())), (this.rcc_1 = _t), (this.w9_1 = 2), (t = this.mcc_1.tc7(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            h = this.rcc_1.pc6(this.qcc_1, this.pcc_1, c);
                                        return Y(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.occ_1, _ = e.i5w_1.z().p(); _.q(); ) {
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
                    (J(gi).scc = function (t, i, s, c) {
                        var h = new zi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(gi).tcc = function (t, i, s, c, h, n) {
                        var e = new di(this, t, i, s, c, h, n);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(gi).ucc = function (t, i, s) {
                        var c = new bi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(gi).vcc = function (t, i, s, c) {
                        var h = new $i(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(Ri).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.ecd_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.ecd_1.nc6(this)) === D())) return t;
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
                    (J(ji).fcd = function () {
                        return !1;
                    }),
                    (J(ji).gcd = function (t) {
                        return W;
                    }),
                    (J(ji).hcd = function (t) {
                        return W;
                    }),
                    (J(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Li(this.scd_1.dci_1, "jwk", this)) === D())) return t;
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
                    (J(Ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = qi(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.bce_1), (t = lt(i.deriveBits(s, this.cce_1, 256), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.dce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.dce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dce_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = lt(qi(window).subtle.digest("SHA-256", zt([this.mce_1, yt(new Int8Array([0, 0, 0, 1])).buffer, this.nce_1])), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.oce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.i5w_1.h())
                                                for (var c = s.i5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
                                                }
                                            (this.oce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.oce_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (3 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
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
                                            s = { name: "AES-GCM" },
                                            c = [this.yce_1];
                                        if ((t = lt(i.importKey("raw", this.xce_1, s, !1, c), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.zce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.zce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zce_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (J(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.kcf_1), (t = lt(i.encrypt(s, this.icf_1, this.jcf_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.lcf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.lcf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.lcf_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(Oi).oa = function () {
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
                                        switch (this.wcf_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.wcf_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.ucf_1, this.vcf_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.xcf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.xcf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.xcf_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (J(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.gcg_1), (t = lt(i.decrypt(s, this.hcg_1, this.icg_1), this)) === D())) return t;
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
                    (J(Vi).oa = function () {
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
                                        switch (this.ucg_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.ucg_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.scg_1, this.tcg_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.vcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.vcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.vcg_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
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
                                        if (((s.hash = c), (t = lt(i.sign(s, this.ech_1, this.fch_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.gch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.gch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.gch_1;
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
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = lt(i.verify(s, this.pch_1, this.rch_1, this.qch_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.sch_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.sch_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.sch_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (J(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = lt(i.importKey("raw", this.bci_1, s, !0, ["encrypt", "decrypt"]), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.cci_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.cci_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.cci_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(cs).yci = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(cs).k2e = function (t) {
                        return this.yci(t);
                    }),
                    (J(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = lt((this.xci_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === D())) return t;
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
                    (J(cs).sa = function (t) {
                        return new cs(this.xci_1, t);
                    }),
                    (J(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = is(this.nci_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = ns(this.oci_1)), new c(new s(this.oci_1.va8_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var h = t;
                                if (2 === this.x9_1) throw h;
                                (this.w9_1 = this.x9_1), (this.z9_1 = h);
                            }
                    }),
                    (J(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.hcj_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.lcj_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.jcj_1.qa8_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.hcj_1, this.jcj_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.ncj_1 = t), (this.w9_1 = 3), (t = lt(this.ncj_1.register(mt(this.icj_1), this.kcj_1, new Int8Array(0), this.jcj_1.ra8_1), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        (this.mcj_1 = Mt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.lcj_1.RegisterError.InvalidAuth ? hi() : e == this.lcj_1.RegisterError.UpgradeRequired ? ni() : e == this.lcj_1.RegisterError.Assertion ? ei() : e == this.lcj_1.RegisterError.Transient ? ri() : e == this.lcj_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.mcj_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.mcj_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (6 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (J(_s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.wcj_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.zcj_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.ycj_1.qa8_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.wcj_1, this.ycj_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.bck_1 = t), (this.w9_1 = 3), (t = lt(this.bck_1.recover(mt(this.xcj_1), new Int8Array(0)), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.ack_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.zcj_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.zcj_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.zcj_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.zcj_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.zcj_1.RecoverErrorReason.Assertion ? ii() : _ == this.zcj_1.RecoverErrorReason.Transient ? si() : _ == this.zcj_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.ack_1 = new At(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.ack_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(as).cck = function (t, i, s, c) {
                        var h = new rs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(as).dck = function (t, i, s) {
                        var c = new _s(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.xck_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new ms(i.publicKey), new ps(i.privateKey));
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var s = t;
                                if (2 === this.x9_1) throw s;
                                (this.w9_1 = this.x9_1), (this.z9_1 = s);
                            }
                    }),
                    (J(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ci(this)) === D())) return t;
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
                    (J(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.pcl_1.mc8(vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.scl_1 = t), (this.w9_1 = 2), (t = Ji(this.qcl_1.jcd_1, this.scl_1.vc8_1.dci_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.tcl_1 = t;
                                        var i;
                                        if (null == this.tcl_1) return null;
                                        if (((i = this.tcl_1), (this.ucl_1 = i), (this.w9_1 = 3), (t = ki(this.scl_1.uc8_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.vcl_1 = t), (this.wcl_1 = qt(this.vcl_1, 65)), (this.w9_1 = 4), (t = Ai(this.ucl_1, this.wcl_1, this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.xcl_1 = t;
                                        var s;
                                        if (null == this.xcl_1) return null;
                                        if (((s = this.xcl_1), (this.ycl_1 = s), (this.zcl_1 = this.ycl_1.slice(0, 16)), (this.acm_1 = this.ycl_1.slice(16, 32)), (this.w9_1 = 5), (t = Fi(this.zcl_1, "encrypt", this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        this.bcm_1 = t;
                                        var c;
                                        if (null == this.bcm_1) return null;
                                        if (((c = this.bcm_1), (this.ccm_1 = c), (this.w9_1 = 6), (t = Ki(this.ccm_1, xt(this.rcl_1), this.acm_1, this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var h = t;
                                        return kt(zt([this.wcl_1, h]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (7 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(ws).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.pcm_1 = xt(this.ocm_1)), (this.qcm_1 = this.pcm_1.slice(0, 65)), (this.rcm_1 = this.pcm_1.slice(65)), (this.w9_1 = 1), (t = Pi("raw", this.qcm_1, vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.scm_1 = t;
                                        var i;
                                        if (null == this.scm_1) return null;
                                        if (((i = this.scm_1), (this.tcm_1 = i), (this.w9_1 = 2), (t = Ji(this.tcm_1, this.ncm_1.dci_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.ucm_1 = t;
                                        var s;
                                        if (null == this.ucm_1) return null;
                                        if (((s = this.ucm_1), (this.vcm_1 = s), (this.w9_1 = 3), (t = Ai(this.vcm_1, this.qcm_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        this.wcm_1 = t;
                                        var c;
                                        if (null == this.wcm_1) return null;
                                        if (((c = this.wcm_1), (this.xcm_1 = c), (this.ycm_1 = this.xcm_1.slice(0, 16)), (this.zcm_1 = this.xcm_1.slice(16, 32)), (this.w9_1 = 4), (t = Fi(this.ycm_1, "decrypt", this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.acn_1 = t;
                                        var h;
                                        if (null == this.acn_1) return null;
                                        if (((h = this.acn_1), (this.bcn_1 = h), (this.w9_1 = 5), (t = Xi(this.zcm_1, this.bcn_1, this.rcm_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi("spki", Et(this.lcn_1), this.mcn_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new ms(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (J(vs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Pi("spki", Et(this.xcn_1), this.ycn_1, this)) === D())) return s;
                                        continue t;
                                    case 1:
                                        this.zcn_1 = s;
                                        var c;
                                        if (null == this.zcn_1) c = null;
                                        else c = new ms(this.zcn_1);
                                        this.aco_1 = c;
                                        var h;
                                        if (null == this.aco_1) return null;
                                        if (((h = this.aco_1), (this.bco_1 = h), (this.w9_1 = 2), (t = this.bco_1), (i = this), (s = Li(t.jcd_1, "jwk", i)) === D())) return s;
                                        continue t;
                                    case 2:
                                        this.cco_1 = s;
                                        var n = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((n.d = Ct(this.wcn_1, !0)), (n.x = this.cco_1.x), (n.y = this.cco_1.y), (this.dco_1 = n), (this.w9_1 = 3), (s = Wi("jwk", this.dco_1, this.ycn_1, this)) === D())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ps(s);
                                    case 4:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (4 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(xs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.nco_1.dci_1, xt(this.oco_1), this)) === D())) return t;
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
                    (J(ys).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.yco_1.jcd_1, xt(this.acp_1), xt(this.zco_1), this)) === D())) return t;
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
                    (J(zs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.nck_1, this)) === D())) return t;
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
                    (J(ds).mc8 = function (t, i) {
                        var s = new us(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(ds).nc8 = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ds).uc7 = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).kc8 = function (t, i, s) {
                        var c = new ws(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).qc8 = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).rc8 = function (t, i, s, c) {
                        var h = new vs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ds).lc8 = function (t, i) {
                        return (function (t, i, s) {
                            var c = new zs(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, Et(t), i);
                    }),
                    (J(ds).sc8 = function (t, i, s) {
                        var c = new xs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).tc8 = function (t, i, s, c) {
                        var h = new ys(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(bs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.jcp_1), (i = this), (s = Di(t.sc7_1, "raw", i)) === D())) return s;
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
                    (J($s).tc7 = function (t) {
                        var i = new bs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(gs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.scp_1, this)) === D())) return t;
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
                    (J(ms).tc7 = function (t) {
                        var i = new gs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(Rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.bcq_1, this)) === D())) return t;
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
                    (J(ps).tc7 = function (t) {
                        var i = new Rs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    T(J(Dt), "name", J(Dt).z2),
                    T(J(Dt), "ordinal", J(Dt).a3),
                    T(J(Qt), "name", J(Qt).z2),
                    T(J(Qt), "ordinal", J(Qt).a3),
                    (J(ji).icd = function (t, i) {
                        var s;
                        return (t = t === F ? 1 : t), i === F ? (this.hcd(t), (s = W)) : (s = i.hcd.call(this, t)), s;
                    }),
                    (J(ds).oc8 = function (t, i, s) {
                        var c = new ui(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).pc8 = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (S = new ji()),
                    (E = new ds()),
                    js(t),
                    (t.$jsExportAll$ = js),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = At),
                    (t.$_$.b = Jt),
                    (t.$_$.c = Ut),
                    (t.$_$.d = Lt),
                    (t.$_$.e = as),
                    (t.$_$.f = xi),
                    (t.$_$.g = yi),
                    (t.$_$.h = ai),
                    (t.$_$.i = vi),
                    (t.$_$.j = function () {
                        return wi(), j;
                    }),
                    (t.$_$.k = S),
                    (t.$_$.l = Kt),
                    (t.$_$.m = Xt),
                    (t.$_$.n = Mt),
                    (t.$_$.o = function () {
                        return null == k && new gi(), k;
                    }),
                    (t.$_$.p = E);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.0624b99a.js.map
