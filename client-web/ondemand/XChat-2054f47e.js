(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, c, h, n, e) {
                "use strict";
                var r,
                    _,
                    u,
                    a,
                    o,
                    f,
                    w,
                    l,
                    v,
                    x,
                    y,
                    z,
                    d,
                    g,
                    $,
                    b,
                    R,
                    p,
                    k,
                    m,
                    j,
                    q,
                    S,
                    E,
                    C = Math.imul,
                    J = i.$_$.af,
                    A = i.$_$.xd,
                    F = i.$_$.g,
                    K = i.$_$.xj,
                    P = i.$_$.de,
                    X = i.$_$.yj,
                    W = i.$_$.r6,
                    I = i.$_$.kj,
                    T = i.$_$.ld,
                    N = i.$_$.wc,
                    D = i.$_$.hc,
                    L = i.$_$.zd,
                    M = i.$_$.be,
                    U = i.$_$.ef,
                    H = i.$_$.wd,
                    G = i.$_$.nd,
                    B = i.$_$.kl,
                    O = c.$_$.j,
                    Q = c.$_$.h,
                    V = i.$_$.h4,
                    Y = i.$_$.n4,
                    Z = c.$_$.e,
                    tt = c.$_$.d,
                    it = i.$_$.bf,
                    st = i.$_$.d4,
                    ct = h.$_$.c,
                    ht = i.$_$.mj,
                    nt = c.$_$.c,
                    et = c.$_$.i,
                    rt = c.$_$.a,
                    _t = c.$_$.g,
                    ut = i.$_$.f,
                    at = i.$_$.vf,
                    ot = i.$_$.hb,
                    ft = c.$_$.b,
                    wt = i.$_$.zk,
                    lt = n.$_$.n,
                    vt = e.$_$.h,
                    xt = e.$_$.b,
                    yt = e.$_$.w,
                    zt = e.$_$.g,
                    dt = i.$_$.ce,
                    gt = c.$_$.f,
                    $t = i.$_$.g6,
                    bt = i.$_$.fi,
                    Rt = i.$_$.pg,
                    pt = i.$_$.yk,
                    kt = i.$_$.ag,
                    mt = i.$_$.ud,
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
                    (x = !0), (u = new Dt("InvalidPin", 0, !0)), (a = new Dt("NotRegistered", 1, !0)), (o = new Dt("InvalidAuth", 2, !0)), (f = new Dt("UpgradeRequired", 3, !1)), (w = new Dt("Assertion", 4, !1)), (l = new Dt("Transient", 5, !0)), (v = new Dt("RateLimitExceeded", 6, !0));
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
                    return [hi(), ni(), ei(), ri(), _i(), ui()];
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
                            return ui();
                        default:
                            Ot(), X("No enum constant value.");
                    }
                }
                function Ot() {
                    if (p) return W;
                    (p = !0), (z = new Qt("InvalidAuth", 0, !0)), (d = new Qt("UpgradeRequired", 1, !1)), (g = new Qt("Assertion", 2, !1)), ($ = new Qt("Transient", 3, !0)), (b = new Qt("RateLimitExceeded", 4, !0)), (R = new Qt("StorageFailed", 5, !0));
                }
                function Qt(t, i, s) {
                    I.call(this, t, i), (this.retryable = s);
                }
                function Vt() {
                    return Nt(), u;
                }
                function Yt() {
                    return Nt(), a;
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
                    return Ot(), g;
                }
                function ri() {
                    return Ot(), $;
                }
                function _i() {
                    return Ot(), b;
                }
                function ui() {
                    return Ot(), R;
                }
                function ai(t, i, s, c) {
                    N.call(this, c), (this.ec4_1 = t), (this.fc4_1 = i), (this.gc4_1 = s);
                }
                function oi(t, i, s, c) {
                    N.call(this, c), (this.tc4_1 = t), (this.uc4_1 = i), (this.vc4_1 = s);
                }
                function fi() {}
                function wi() {
                    if (j) return W;
                    (j = !0), (k = new li("Identity", 0)), (m = new li("Signing", 1));
                }
                function li(t, i) {
                    I.call(this, t, i);
                }
                function vi() {
                    return wi(), k;
                }
                function xi(t, i) {
                    (this.kc5_1 = t), (this.lc5_1 = i);
                }
                function yi(t, i) {
                    (this.mc5_1 = t), (this.nc5_1 = i);
                }
                function zi(t, i, s, c, h) {
                    N.call(this, h), (this.wc5_1 = t), (this.xc5_1 = i), (this.yc5_1 = s), (this.zc5_1 = c);
                }
                function di(t, i, s, c, h, n, e) {
                    N.call(this, e), (this.dc7_1 = t), (this.ec7_1 = i), (this.fc7_1 = s), (this.gc7_1 = c), (this.hc7_1 = h), (this.ic7_1 = n);
                }
                function gi(t, i, s, c) {
                    N.call(this, c), (this.nc8_1 = t), (this.oc8_1 = i), (this.pc8_1 = s);
                }
                function $i(t, i, s, c, h) {
                    N.call(this, h), (this.bc9_1 = t), (this.cc9_1 = i), (this.dc9_1 = s), (this.ec9_1 = c);
                }
                function bi() {
                    (q = this), (this.dc8_1 = 1024), (this.ec8_1 = (1024 + ft()) | 0);
                }
                function Ri(t, i) {
                    var s = new pi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function pi(t, i) {
                    N.call(this, i), (this.uc9_1 = t);
                }
                function ki() {}
                function mi() {}
                function ji(t) {
                    return t.crypto;
                }
                function qi(t, i) {
                    return Di(t.zc9_1, "spki", i);
                }
                function Si(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function Ei(t, i) {
                    var s,
                        c = ji(window).subtle,
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
                    var i = ji(window).subtle,
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
                    return lt(ji(window).subtle.exportKey(i, t), s);
                }
                function Li(t, i, s) {
                    return lt(ji(window).subtle.exportKey(i, t), s);
                }
                function Mi(t, i) {
                    N.call(this, i), (this.ica_1 = t);
                }
                function Ui(t, i, s) {
                    N.call(this, s), (this.rca_1 = t), (this.sca_1 = i);
                }
                function Hi(t, i, s) {
                    N.call(this, s), (this.ccb_1 = t), (this.dcb_1 = i);
                }
                function Gi(t, i, s) {
                    N.call(this, s), (this.ncb_1 = t), (this.ocb_1 = i);
                }
                function Bi(t, i, s, c) {
                    N.call(this, c), (this.ycb_1 = t), (this.zcb_1 = i), (this.acc_1 = s);
                }
                function Oi(t, i, s, c) {
                    N.call(this, c), (this.kcc_1 = t), (this.lcc_1 = i), (this.mcc_1 = s);
                }
                function Qi(t, i, s, c) {
                    N.call(this, c), (this.wcc_1 = t), (this.xcc_1 = i), (this.ycc_1 = s);
                }
                function Vi(t, i, s, c) {
                    N.call(this, c), (this.icd_1 = t), (this.jcd_1 = i), (this.kcd_1 = s);
                }
                function Yi(t, i, s) {
                    N.call(this, s), (this.ucd_1 = t), (this.vcd_1 = i);
                }
                function Zi(t, i, s, c) {
                    N.call(this, c), (this.fce_1 = t), (this.gce_1 = i), (this.hce_1 = s);
                }
                function ts(t, i) {
                    N.call(this, i), (this.rce_1 = t);
                }
                function is(t) {
                    var i = t.uce_1;
                    return (
                        mt(
                            "juiceboxModule",
                            1,
                            kt,
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
                    (this.ncf_1 = t), N.call(this, i);
                }
                function hs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new cs(t, i),
                                c = function (t) {
                                    return s.ocf(t);
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
                                        var h = gt(t),
                                            n = $t().sn_1,
                                            e = bt(Y(h), n),
                                            r = i.ha7_1.r2(e);
                                        s(null == r ? null : r.oa7_1);
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
                    N.call(this, s), (this.dcf_1 = t), (this.ecf_1 = i);
                }
                function rs(t, i, s, c, h) {
                    N.call(this, h), (this.xcf_1 = t), (this.ycf_1 = i), (this.zcf_1 = s), (this.acg_1 = c);
                }
                function _s(t, i, s, c) {
                    N.call(this, c), (this.mcg_1 = t), (this.ncg_1 = i), (this.ocg_1 = s);
                }
                function us() {
                    this.uce_1 = pt(hs(this));
                }
                function as(t, i, s) {
                    N.call(this, s), (this.mch_1 = t), (this.nch_1 = i);
                }
                function os(t, i) {
                    N.call(this, i), (this.wch_1 = t);
                }
                function fs(t, i, s, c) {
                    N.call(this, c), (this.fci_1 = t), (this.gci_1 = i), (this.hci_1 = s);
                }
                function ws(t, i, s, c) {
                    N.call(this, c), (this.ccj_1 = t), (this.dcj_1 = i), (this.ecj_1 = s);
                }
                function ls(t, i, s, c) {
                    N.call(this, c), (this.ack_1 = t), (this.bck_1 = i), (this.cck_1 = s);
                }
                function vs(t, i, s, c, h) {
                    N.call(this, h), (this.lck_1 = t), (this.mck_1 = i), (this.nck_1 = s), (this.ock_1 = c);
                }
                function xs(t, i, s, c) {
                    N.call(this, c), (this.ccl_1 = t), (this.dcl_1 = i), (this.ecl_1 = s);
                }
                function ys(t, i, s, c, h) {
                    N.call(this, h), (this.ncl_1 = t), (this.ocl_1 = i), (this.pcl_1 = s), (this.qcl_1 = c);
                }
                function zs(t, i, s) {
                    N.call(this, s), (this.cch_1 = t), (this.dch_1 = i);
                }
                function ds() {
                    this.tci_1 = 65;
                }
                function gs(t, i) {
                    N.call(this, i), (this.zcl_1 = t);
                }
                function $s(t) {
                    this.ic4_1 = t;
                }
                function bs(t, i) {
                    N.call(this, i), (this.icm_1 = t);
                }
                function Rs(t) {
                    this.zc9_1 = t;
                }
                function ps(t, i) {
                    N.call(this, i), (this.rcm_1 = t);
                }
                function ks(t) {
                    this.tce_1 = t;
                }
                function ms(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        c = s.dms || (s.dms = {});
                    (c.JuiceboxRecoverPrivateKeyResult = Wt), (c.JuiceboxRecoverPrivateKeyResult.Success = Jt), (c.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = At), T(c.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Kt), T(c.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Xt), (c.JuiceboxRecoverFailureReason = Dt), (c.JuiceboxRecoverFailureReason.values = It), (c.JuiceboxRecoverFailureReason.valueOf = Tt), T(c.JuiceboxRecoverFailureReason, "InvalidPin", Vt), T(c.JuiceboxRecoverFailureReason, "NotRegistered", Yt), T(c.JuiceboxRecoverFailureReason, "InvalidAuth", Zt), T(c.JuiceboxRecoverFailureReason, "UpgradeRequired", ti), T(c.JuiceboxRecoverFailureReason, "Assertion", ii), T(c.JuiceboxRecoverFailureReason, "Transient", si), T(c.JuiceboxRecoverFailureReason, "RateLimitExceeded", ci), (c.JuiceboxRegisterPrivateKeyResult = Ht), T(c.JuiceboxRegisterPrivateKeyResult, "Success", Mt), (c.JuiceboxRegisterPrivateKeyResult.Failure = Ut), (c.JuiceboxRegisterFailureReason = Qt), (c.JuiceboxRegisterFailureReason.values = Gt), (c.JuiceboxRegisterFailureReason.valueOf = Bt), T(c.JuiceboxRegisterFailureReason, "InvalidAuth", hi), T(c.JuiceboxRegisterFailureReason, "UpgradeRequired", ni), T(c.JuiceboxRegisterFailureReason, "Assertion", ei), T(c.JuiceboxRegisterFailureReason, "Transient", ri), T(c.JuiceboxRegisterFailureReason, "RateLimitExceeded", _i), T(c.JuiceboxRegisterFailureReason, "StorageFailed", ui);
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
                    L(ai, N),
                    L(oi, N),
                    M(fi, "KeyFactory", F, F, F, [1, 0, 2, 3]),
                    A(li, "KeypairPurpose", F, I),
                    A(xi, "XChatKeyPair"),
                    A(yi, "XChatPrivateKeys"),
                    L(zi, N),
                    L(di, N),
                    L(gi, N),
                    L($i, N),
                    P(bi, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    L(pi, N),
                    M(ki, "PerformanceTracer"),
                    P(mi, "NoOpPerfTracer", F, F, [ki]),
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
                    A(us, "WebJuiceboxApi", us, F, F, [1, 3, 2]),
                    L(as, N),
                    L(os, N),
                    L(fs, N),
                    L(ws, N),
                    L(ls, N),
                    L(vs, N),
                    L(xs, N),
                    L(ys, N),
                    L(zs, N),
                    P(ds, "WebKeyFactory", F, F, [fi], [1, 0, 2, 3]),
                    L(gs, N),
                    A($s, "XChatConversationKey", F, F, F, [0]),
                    L(bs, N),
                    A(Rs, "XChatPublicKey", F, F, F, [0]),
                    L(ps, N),
                    A(ks, "XChatPrivateKey", F, F, F, [0]),
                    (J(Jt).baa = function () {
                        return this.bytes;
                    }),
                    (J(At).nc3 = function () {
                        return this.reason;
                    }),
                    (J(At).oc3 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).pc3 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.pc3(t, i);
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
                    (J(Dt).sc3 = function () {
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
                    (J(Ut).nc3 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).tc3 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.tc3(t);
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
                    (J(Qt).sc3 = function () {
                        return this.retryable;
                    }),
                    (J(ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.gc4_1.jc4(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.hc4_1 = t), (this.w9_1 = 2), (t = this.ec4_1.kc4(this.fc4_1, this.hc4_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.tc4_1.ac5(this.uc4_1, this.vc4_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.wc4_1 = t), null == this.wc4_1)) {
                                            (this.xc4_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.yc4_1 = this.wc4_1;
                                        if (((this.zc4_1 = this.yc4_1), (this.w9_1 = 2), (t = this.tc4_1.bc5(this.zc4_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        (this.xc4_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.xc4_1;
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
                        return "XChatKeyPair(public=" + U(this.kc5_1) + ", private=" + U(this.lc5_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.kc5_1);
                        return (t = (C(t, 31) + H(this.lc5_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.kc5_1, i.kc5_1) && !!G(this.lc5_1, i.lc5_1);
                    }),
                    (J(yi).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.mc5_1) + ", signing=" + B(this.nc5_1) + ")";
                    }),
                    (J(yi).hashCode = function () {
                        var t = H(this.mc5_1);
                        return (t = (C(t, 31) + (null == this.nc5_1 ? 0 : H(this.nc5_1))) | 0);
                    }),
                    (J(yi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof yi)) return !1;
                        var i = t instanceof yi ? t : K();
                        return !!G(this.mc5_1, i.mc5_1) && !!G(this.nc5_1, i.nc5_1);
                    }),
                    (J(zi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 20), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.cc6_1 = Q), (this.w9_1 = 4), (t = this.xc5_1.jc4(this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        (this.dc6_1 = t), (this.ec6_1 = V(this.dc6_1)), (this.fc6_1 = this.cc6_1.gc3(this.ec6_1)), (this.gc6_1 = this.fc6_1.ph()), (this.hc6_1 = this.fc6_1.fc2()), (this.w9_1 = 5);
                                        var i = this.hc6_1;
                                        if ((t = this.zc5_1.rc6(Y(i), this)) === D()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.yc5_1.sc6(1024, this)) === D())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.ic6_1 = t), null == this.ic6_1)) {
                                            (this.bc6_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.jc6_1 = this.ic6_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.kc6_1 = this.jc6_1), (this.w9_1 = 9), (t = this.yc5_1.tc6(this)) === D())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.lc6_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.lc6_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.mc6_1 = this.lc6_1;
                                        var s = Q,
                                            c = this.kc6_1,
                                            h = V(c),
                                            n = this.mc6_1;
                                        (this.nc6_1 = s.ic3(this.gc6_1, h, F, st(it(n)))), (this.w9_1 = 11);
                                        var e = this.nc6_1;
                                        if ((t = this.zc5_1.rc6(Y(e), this)) === D()) return t;
                                        continue t;
                                    case 12:
                                        (this.ac6_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.oc6_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.oc6_1;
                                            if (!r.i5w_1.h())
                                                for (var u = r.i5w_1.z().p(); u.q(); ) {
                                                    u.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.bc6_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.pc6_1 = this.z9_1), this.yc5_1.e5(), (this.w9_1 = 15), (t = this.zc5_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.zc5_1.e5(), this.pc6_1);
                                    case 16:
                                        if (((this.qc6_1 = this.bc6_1), (this.x9_1 = 20), this.yc5_1.e5(), (this.w9_1 = 17), (t = this.zc5_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 17:
                                        return this.zc5_1.e5(), this.qc6_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.yc5_1.e5(), (this.w9_1 = 19), (t = this.zc5_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 19:
                                        return this.zc5_1.e5(), W;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (20 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (J(di).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.fc7_1.sc6(nt(), this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.lc7_1 = t), null == this.lc7_1)) {
                                            (this.kc7_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.mc7_1 = this.lc7_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.nc7_1 = this.mc7_1), (this.oc7_1 = this.nc7_1.length), (this.pc7_1 = Q), (this.w9_1 = 6), (t = this.ec7_1.jc4(this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        (this.qc7_1 = t), (this.rc7_1 = V(this.qc7_1));
                                        var i = this.nc7_1;
                                        (this.sc7_1 = this.pc7_1.jc3(this.rc7_1, V(i))), (this.tc7_1 = this.sc7_1.ph()), (this.uc7_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.fc7_1.sc6(this.dc7_1.ec8_1, this)) === D())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.vc7_1 = t), null == this.vc7_1)) {
                                            (this.kc7_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.wc7_1 = this.vc7_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.xc7_1 = this.wc7_1), (this.oc7_1 = (this.oc7_1 + this.xc7_1.length) | 0);
                                        var s = Q,
                                            c = this.xc7_1;
                                        (this.yc7_1 = s.lc3(this.tc7_1, V(c))), (this.zc7_1 = this.yc7_1.ic2()), (this.w9_1 = 10);
                                        var h = this.zc7_1;
                                        if ((t = this.gc7_1.rc6(Y(h), this)) === D()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.ic7_1 && null != this.hc7_1) {
                                            var n = this.oc7_1 / this.hc7_1.bytes.y3();
                                            n > this.uc7_1 + 0.1 && (this.ic7_1(n), (this.uc7_1 = n));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.jc7_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.ac8_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.ac8_1;
                                            if (!e.i5w_1.h())
                                                for (var _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.kc7_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.bc8_1 = this.z9_1), this.fc7_1.e5(), (this.w9_1 = 14), (t = this.gc7_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.gc7_1.e5(), this.bc8_1);
                                    case 15:
                                        if (((this.cc8_1 = this.kc7_1), (this.x9_1 = 19), this.fc7_1.e5(), (this.w9_1 = 16), (t = this.gc7_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 16:
                                        return this.gc7_1.e5(), this.cc8_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.fc7_1.e5(), (this.w9_1 = 18), (t = this.gc7_1.uc6(this)) === D())) return t;
                                        continue t;
                                    case 18:
                                        return this.gc7_1.e5(), W;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (19 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.qc8_1 = et.mc3(rt())), (this.rc8_1 = _t);
                                        var i = this.pc8_1;
                                        if (((this.sc8_1 = V(i)), (this.w9_1 = 2), (t = this.oc8_1.jc4(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.rc8_1.ec3(this.sc8_1, this.qc8_1, s),
                                            h = this.qc8_1,
                                            n = Y(h),
                                            e = Y(c),
                                            r = V(ut([n, e]));
                                        return Y(r).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var _ = this.z9_1,
                                                u = ct();
                                            if (!u.i5w_1.h())
                                                for (var a = u.i5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().e("XWS", _, "encryptMessage failed");
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.dc9_1, at(0, rt()));
                                        this.fc9_1 = V(i.slice());
                                        var s = ot(this.dc9_1, at(rt(), this.dc9_1.length));
                                        if (((this.gc9_1 = V(s.slice())), (this.hc9_1 = _t), (this.w9_1 = 2), (t = this.cc9_1.jc4(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            h = this.hc9_1.fc3(this.gc9_1, this.fc9_1, c);
                                        return Y(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.ec9_1, _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", n, r);
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
                    (J(bi).ic9 = function (t, i, s, c) {
                        var h = new zi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(bi).jc9 = function (t, i, s, c, h, n) {
                        var e = new di(this, t, i, s, c, h, n);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(bi).kc9 = function (t, i, s) {
                        var c = new gi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(bi).lc9 = function (t, i, s, c) {
                        var h = new $i(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(pi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.uc9_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.uc9_1.dc3(this)) === D())) return t;
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
                    (J(mi).vc9 = function () {
                        return !1;
                    }),
                    (J(mi).wc9 = function (t) {
                        return W;
                    }),
                    (J(mi).xc9 = function (t) {
                        return W;
                    }),
                    (J(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Li(this.ica_1.tce_1, "jwk", this)) === D())) return t;
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
                                        var i = ji(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.rca_1), (t = lt(i.deriveBits(s, this.sca_1, 256), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.tca_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.tca_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.tca_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = lt(ji(window).subtle.digest("SHA-256", zt([this.ccb_1, yt(new Int8Array([0, 0, 0, 1])).buffer, this.dcb_1])), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.ecb_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.i5w_1.h())
                                                for (var c = s.i5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
                                                }
                                            (this.ecb_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ecb_1;
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
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" },
                                            c = [this.ocb_1];
                                        if ((t = lt(i.importKey("raw", this.ncb_1, s, !1, c), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.pcb_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.pcb_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.pcb_1;
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
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.acc_1), (t = lt(i.encrypt(s, this.ycb_1, this.zcb_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.bcc_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.bcc_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.bcc_1;
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
                                            c = ji(window).subtle,
                                            h = {};
                                        switch (this.mcc_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.mcc_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.kcc_1, this.lcc_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.ncc_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.ncc_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ncc_1;
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
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.wcc_1), (t = lt(i.decrypt(s, this.xcc_1, this.ycc_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.zcc_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
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
                                            c = ji(window).subtle,
                                            h = {};
                                        switch (this.kcd_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                wt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.kcd_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                wt();
                                        }
                                        if ((t = lt(c.importKey(this.icd_1, this.jcd_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.lcd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
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
                                        var i = ji(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = lt(i.sign(s, this.ucd_1, this.vcd_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.wcd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.wcd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.wcd_1;
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
                                        var i = ji(window).subtle,
                                            s = { name: "ECDSA" },
                                            c = { name: "SHA-256" };
                                        if (((s.hash = c), (t = lt(i.verify(s, this.fce_1, this.hce_1, this.gce_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.ice_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.ice_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ice_1;
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
                                        var i = ji(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = lt(i.importKey("raw", this.rce_1, s, !0, ["encrypt", "decrypt"]), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.sce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.sce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.sce_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(cs).ocf = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(cs).k2e = function (t) {
                        return this.ocf(t);
                    }),
                    (J(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = lt((this.ncf_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === D())) return t;
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
                        return new cs(this.ncf_1, t);
                    }),
                    (J(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = is(this.dcf_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = ns(this.ecf_1)), new c(new s(this.ecf_1.ma7_1), []);
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.xcf_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.bcg_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.zcf_1.ha7_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.xcf_1, this.zcf_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.dcg_1 = t), (this.w9_1 = 3), (t = lt(this.dcg_1.register(Rt(this.ycf_1), this.acg_1, new Int8Array(0), this.zcf_1.ia7_1), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        (this.ccg_1 = Mt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.bcg_1.RegisterError.InvalidAuth ? hi() : e == this.bcg_1.RegisterError.UpgradeRequired ? ni() : e == this.bcg_1.RegisterError.Assertion ? ei() : e == this.bcg_1.RegisterError.Transient ? ri() : e == this.bcg_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.ccg_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.ccg_1;
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.mcg_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.pcg_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.ocg_1.ha7_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.mcg_1, this.ocg_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.rcg_1 = t), (this.w9_1 = 3), (t = lt(this.rcg_1.recover(Rt(this.ncg_1), new Int8Array(0)), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.qcg_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            u = _ == this.pcg_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.pcg_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.pcg_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.pcg_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.pcg_1.RecoverErrorReason.Assertion ? ii() : _ == this.pcg_1.RecoverErrorReason.Transient ? si() : _ == this.pcg_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.qcg_1 = new At(u, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.qcg_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (J(us).scg = function (t, i, s, c) {
                        var h = new rs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(us).tcg = function (t, i, s) {
                        var c = new _s(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(as).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.nch_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new Rs(i.publicKey), new ks(i.privateKey));
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.fci_1.cc5(vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.ici_1 = t), (this.w9_1 = 2), (t = Ji(this.gci_1.zc9_1, this.ici_1.lc5_1.tce_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.jci_1 = t;
                                        var i;
                                        if (null == this.jci_1) return null;
                                        if (((i = this.jci_1), (this.kci_1 = i), (this.w9_1 = 3), (t = qi(this.ici_1.kc5_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.lci_1 = t), (this.mci_1 = jt(this.lci_1, 65)), (this.w9_1 = 4), (t = Ai(this.kci_1, this.mci_1, this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.nci_1 = t;
                                        var s;
                                        if (null == this.nci_1) return null;
                                        if (((s = this.nci_1), (this.oci_1 = s), (this.pci_1 = this.oci_1.slice(0, 16)), (this.qci_1 = this.oci_1.slice(16, 32)), (this.w9_1 = 5), (t = Fi(this.pci_1, "encrypt", this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        this.rci_1 = t;
                                        var c;
                                        if (null == this.rci_1) return null;
                                        if (((c = this.rci_1), (this.sci_1 = c), (this.w9_1 = 6), (t = Ki(this.sci_1, xt(this.hci_1), this.qci_1, this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var h = t;
                                        return qt(zt([this.mci_1, h]));
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
                                        if (((this.x9_1 = 6), (this.fcj_1 = xt(this.ecj_1)), (this.gcj_1 = this.fcj_1.slice(0, 65)), (this.hcj_1 = this.fcj_1.slice(65)), (this.w9_1 = 1), (t = Pi("raw", this.gcj_1, vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.icj_1 = t;
                                        var i;
                                        if (null == this.icj_1) return null;
                                        if (((i = this.icj_1), (this.jcj_1 = i), (this.w9_1 = 2), (t = Ji(this.jcj_1, this.dcj_1.tce_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.kcj_1 = t;
                                        var s;
                                        if (null == this.kcj_1) return null;
                                        if (((s = this.kcj_1), (this.lcj_1 = s), (this.w9_1 = 3), (t = Ai(this.lcj_1, this.gcj_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        this.mcj_1 = t;
                                        var c;
                                        if (null == this.mcj_1) return null;
                                        if (((c = this.mcj_1), (this.ncj_1 = c), (this.ocj_1 = this.ncj_1.slice(0, 16)), (this.pcj_1 = this.ncj_1.slice(16, 32)), (this.w9_1 = 4), (t = Fi(this.ocj_1, "decrypt", this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.qcj_1 = t;
                                        var h;
                                        if (null == this.qcj_1) return null;
                                        if (((h = this.qcj_1), (this.rcj_1 = h), (this.w9_1 = 5), (t = Xi(this.pcj_1, this.rcj_1, this.hcj_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi("spki", Et(this.bck_1), this.cck_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new Rs(t);
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Pi("spki", Et(this.nck_1), this.ock_1, this)) === D())) return s;
                                        continue t;
                                    case 1:
                                        this.pck_1 = s;
                                        var c;
                                        if (null == this.pck_1) c = null;
                                        else c = new Rs(this.pck_1);
                                        this.qck_1 = c;
                                        var h;
                                        if (null == this.qck_1) return null;
                                        if (((h = this.qck_1), (this.rck_1 = h), (this.w9_1 = 2), (t = this.rck_1), (i = this), (s = Li(t.zc9_1, "jwk", i)) === D())) return s;
                                        continue t;
                                    case 2:
                                        this.sck_1 = s;
                                        var n = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((n.d = Ct(this.mck_1, !0)), (n.x = this.sck_1.x), (n.y = this.sck_1.y), (this.tck_1 = n), (this.w9_1 = 3), (s = Wi("jwk", this.tck_1, this.ock_1, this)) === D())) return s;
                                        continue t;
                                    case 3:
                                        return null == s ? null : new ks(s);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.dcl_1.tce_1, xt(this.ecl_1), this)) === D())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.ocl_1.zc9_1, xt(this.qcl_1), xt(this.pcl_1), this)) === D())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.dch_1, this)) === D())) return t;
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
                    (J(ds).cc5 = function (t, i) {
                        var s = new as(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(ds).dc5 = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ds).kc4 = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).ac5 = function (t, i, s) {
                        var c = new ws(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).gc5 = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).hc5 = function (t, i, s, c) {
                        var h = new vs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ds).bc5 = function (t, i) {
                        return (function (t, i, s) {
                            var c = new zs(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, Et(t), i);
                    }),
                    (J(ds).ic5 = function (t, i, s) {
                        var c = new xs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).jc5 = function (t, i, s, c) {
                        var h = new ys(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(gs).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.zcl_1), (i = this), (s = Di(t.ic4_1, "raw", i)) === D())) return s;
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
                    (J($s).jc4 = function (t) {
                        var i = new gs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(bs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.icm_1, this)) === D())) return t;
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
                    (J(Rs).jc4 = function (t) {
                        var i = new bs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ps).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.rcm_1, this)) === D())) return t;
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
                    (J(ks).jc4 = function (t) {
                        var i = new ps(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    T(J(Dt), "name", J(Dt).z2),
                    T(J(Dt), "ordinal", J(Dt).a3),
                    T(J(Qt), "name", J(Qt).z2),
                    T(J(Qt), "ordinal", J(Qt).a3),
                    (J(mi).yc9 = function (t, i) {
                        var s;
                        return (t = t === F ? 1 : t), i === F ? (this.xc9(t), (s = W)) : (s = i.xc9.call(this, t)), s;
                    }),
                    (J(ds).ec5 = function (t, i, s) {
                        var c = new ai(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).fc5 = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (S = new mi()),
                    (E = new ds()),
                    ms(t),
                    (t.$jsExportAll$ = ms),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = At),
                    (t.$_$.b = Jt),
                    (t.$_$.c = Ut),
                    (t.$_$.d = Lt),
                    (t.$_$.e = us),
                    (t.$_$.f = xi),
                    (t.$_$.g = yi),
                    (t.$_$.h = ui),
                    (t.$_$.i = vi),
                    (t.$_$.j = function () {
                        return wi(), m;
                    }),
                    (t.$_$.k = S),
                    (t.$_$.l = Kt),
                    (t.$_$.m = Xt),
                    (t.$_$.n = Mt),
                    (t.$_$.o = function () {
                        return null == q && new bi(), q;
                    }),
                    (t.$_$.p = E);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.8ea0660a.js.map
