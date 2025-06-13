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
                    y,
                    z,
                    d,
                    $,
                    g,
                    b,
                    R,
                    m,
                    p,
                    k,
                    q,
                    S,
                    E,
                    j,
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
                    lt = i.$_$.al,
                    wt = n.$_$.n,
                    vt = e.$_$.h,
                    xt = e.$_$.b,
                    yt = e.$_$.w,
                    zt = e.$_$.g,
                    dt = i.$_$.de,
                    $t = c.$_$.f,
                    gt = i.$_$.h6,
                    bt = i.$_$.gi,
                    Rt = i.$_$.qg,
                    mt = i.$_$.zk,
                    pt = i.$_$.bg,
                    kt = i.$_$.vd,
                    qt = e.$_$.u,
                    St = e.$_$.d,
                    Et = e.$_$.c,
                    jt = e.$_$.f,
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
                    (x = !0), (a = new Dt("InvalidPin", 0, !0)), (u = new Dt("NotRegistered", 1, !0)), (o = new Dt("InvalidAuth", 2, !0)), (f = new Dt("UpgradeRequired", 3, !1)), (l = new Dt("Assertion", 4, !1)), (w = new Dt("Transient", 5, !0)), (v = new Dt("RateLimitExceeded", 6, !0));
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
                    if (m) return W;
                    (m = !0), (z = new Qt("InvalidAuth", 0, !0)), (d = new Qt("UpgradeRequired", 1, !1)), ($ = new Qt("Assertion", 2, !1)), (g = new Qt("Transient", 3, !0)), (b = new Qt("RateLimitExceeded", 4, !0)), (R = new Qt("StorageFailed", 5, !0));
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
                    return Nt(), l;
                }
                function si() {
                    return Nt(), w;
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
                    return Ot(), $;
                }
                function ri() {
                    return Ot(), g;
                }
                function _i() {
                    return Ot(), b;
                }
                function ai() {
                    return Ot(), R;
                }
                function ui(t, i, s, c) {
                    N.call(this, c), (this.lc6_1 = t), (this.mc6_1 = i), (this.nc6_1 = s);
                }
                function oi(t, i, s, c) {
                    N.call(this, c), (this.ac7_1 = t), (this.bc7_1 = i), (this.cc7_1 = s);
                }
                function fi() {}
                function li() {
                    if (q) return W;
                    (q = !0), (p = new wi("Identity", 0)), (k = new wi("Signing", 1));
                }
                function wi(t, i) {
                    I.call(this, t, i);
                }
                function vi() {
                    return li(), p;
                }
                function xi(t, i) {
                    (this.rc7_1 = t), (this.sc7_1 = i);
                }
                function yi(t, i) {
                    (this.tc7_1 = t), (this.uc7_1 = i);
                }
                function zi(t, i, s, c, h) {
                    N.call(this, h), (this.dc8_1 = t), (this.ec8_1 = i), (this.fc8_1 = s), (this.gc8_1 = c);
                }
                function di(t, i, s, c, h, n, e) {
                    N.call(this, e), (this.kc9_1 = t), (this.lc9_1 = i), (this.mc9_1 = s), (this.nc9_1 = c), (this.oc9_1 = h), (this.pc9_1 = n);
                }
                function $i(t, i, s, c) {
                    N.call(this, c), (this.uca_1 = t), (this.vca_1 = i), (this.wca_1 = s);
                }
                function gi(t, i, s, c, h) {
                    N.call(this, h), (this.icb_1 = t), (this.jcb_1 = i), (this.kcb_1 = s), (this.lcb_1 = c);
                }
                function bi() {
                    (S = this), (this.kca_1 = 1024), (this.lca_1 = (1024 + ft()) | 0);
                }
                function Ri(t, i) {
                    var s = new mi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function mi(t, i) {
                    N.call(this, i), (this.bcc_1 = t);
                }
                function pi() {}
                function ki() {}
                function qi(t) {
                    return t.crypto;
                }
                function Si(t, i) {
                    return Di(t.gcc_1, "spki", i);
                }
                function Ei(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                }
                function ji(t, i) {
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
                function Ci(t) {
                    var i = qi(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        c = s;
                    return wt(i.generateKey(c, !0, ["encrypt", "decrypt"]), t);
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
                    return wt(qi(window).subtle.exportKey(i, t), s);
                }
                function Li(t, i, s) {
                    return wt(qi(window).subtle.exportKey(i, t), s);
                }
                function Mi(t, i) {
                    N.call(this, i), (this.pcc_1 = t);
                }
                function Ui(t, i, s) {
                    N.call(this, s), (this.ycc_1 = t), (this.zcc_1 = i);
                }
                function Hi(t, i, s) {
                    N.call(this, s), (this.jcd_1 = t), (this.kcd_1 = i);
                }
                function Gi(t, i, s) {
                    N.call(this, s), (this.ucd_1 = t), (this.vcd_1 = i);
                }
                function Bi(t, i, s, c) {
                    N.call(this, c), (this.fce_1 = t), (this.gce_1 = i), (this.hce_1 = s);
                }
                function Oi(t, i, s, c) {
                    N.call(this, c), (this.rce_1 = t), (this.sce_1 = i), (this.tce_1 = s);
                }
                function Qi(t, i, s, c) {
                    N.call(this, c), (this.dcf_1 = t), (this.ecf_1 = i), (this.fcf_1 = s);
                }
                function Vi(t, i, s, c) {
                    N.call(this, c), (this.pcf_1 = t), (this.qcf_1 = i), (this.rcf_1 = s);
                }
                function Yi(t, i, s) {
                    N.call(this, s), (this.bcg_1 = t), (this.ccg_1 = i);
                }
                function Zi(t, i, s, c) {
                    N.call(this, c), (this.mcg_1 = t), (this.ncg_1 = i), (this.ocg_1 = s);
                }
                function ts(t, i) {
                    N.call(this, i), (this.ycg_1 = t);
                }
                function is(t) {
                    var i = t.bch_1;
                    return (
                        kt(
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
                    (this.uch_1 = t), N.call(this, i);
                }
                function hs(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new cs(t, i),
                                c = function (t) {
                                    return s.vch(t);
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
                                        var h = $t(t),
                                            n = gt().sn_1,
                                            e = bt(Y(h), n),
                                            r = i.ea8_1.r2(e);
                                        s(null == r ? null : r.la8_1);
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
                    N.call(this, s), (this.kch_1 = t), (this.lch_1 = i);
                }
                function rs(t, i, s, c, h) {
                    N.call(this, h), (this.eci_1 = t), (this.fci_1 = i), (this.gci_1 = s), (this.hci_1 = c);
                }
                function _s(t, i, s, c) {
                    N.call(this, c), (this.tci_1 = t), (this.uci_1 = i), (this.vci_1 = s);
                }
                function as() {
                    this.bch_1 = mt(hs(this));
                }
                function us(t, i, s) {
                    N.call(this, s), (this.tcj_1 = t), (this.ucj_1 = i);
                }
                function os(t, i) {
                    N.call(this, i), (this.dck_1 = t);
                }
                function fs(t, i, s, c) {
                    N.call(this, c), (this.mck_1 = t), (this.nck_1 = i), (this.ock_1 = s);
                }
                function ls(t, i, s, c) {
                    N.call(this, c), (this.jcl_1 = t), (this.kcl_1 = i), (this.lcl_1 = s);
                }
                function ws(t, i, s, c) {
                    N.call(this, c), (this.hcm_1 = t), (this.icm_1 = i), (this.jcm_1 = s);
                }
                function vs(t, i, s, c, h) {
                    N.call(this, h), (this.scm_1 = t), (this.tcm_1 = i), (this.ucm_1 = s), (this.vcm_1 = c);
                }
                function xs(t, i, s, c) {
                    N.call(this, c), (this.jcn_1 = t), (this.kcn_1 = i), (this.lcn_1 = s);
                }
                function ys(t, i, s, c, h) {
                    N.call(this, h), (this.ucn_1 = t), (this.vcn_1 = i), (this.wcn_1 = s), (this.xcn_1 = c);
                }
                function zs(t, i, s) {
                    N.call(this, s), (this.jcj_1 = t), (this.kcj_1 = i);
                }
                function ds() {
                    this.acl_1 = 65;
                }
                function $s(t, i) {
                    N.call(this, i), (this.gco_1 = t);
                }
                function gs(t) {
                    this.pc6_1 = t;
                }
                function bs(t, i) {
                    N.call(this, i), (this.pco_1 = t);
                }
                function Rs(t) {
                    this.gcc_1 = t;
                }
                function ms(t, i) {
                    N.call(this, i), (this.yco_1 = t);
                }
                function ps(t) {
                    this.ach_1 = t;
                }
                function ks(t) {
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
                    A(wi, "KeypairPurpose", F, I),
                    A(xi, "XChatKeyPair"),
                    A(yi, "XChatPrivateKeys"),
                    L(zi, N),
                    L(di, N),
                    L($i, N),
                    L(gi, N),
                    P(bi, "LibsodiumEncryption", F, F, F, [3, 5, 2]),
                    L(mi, N),
                    M(pi, "PerformanceTracer"),
                    P(ki, "NoOpPerfTracer", F, F, [pi]),
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
                    L(ls, N),
                    L(ws, N),
                    L(vs, N),
                    L(xs, N),
                    L(ys, N),
                    L(zs, N),
                    P(ds, "WebKeyFactory", F, F, [fi], [1, 0, 2, 3]),
                    L($s, N),
                    A(gs, "XChatConversationKey", F, F, F, [0]),
                    L(bs, N),
                    A(Rs, "XChatPublicKey", F, F, F, [0]),
                    L(ms, N),
                    A(ps, "XChatPrivateKey", F, F, F, [0]),
                    (J(Jt).zaa = function () {
                        return this.bytes;
                    }),
                    (J(At).uc5 = function () {
                        return this.reason;
                    }),
                    (J(At).vc5 = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).ph = function () {
                        return this.reason;
                    }),
                    (J(At).qh = function () {
                        return this.guessesRemaining;
                    }),
                    (J(At).wc5 = function (t, i) {
                        return new At(t, i);
                    }),
                    (J(At).copy = function (t, i, s) {
                        return (t = t === F ? this.reason : t), (i = i === F ? this.guessesRemaining : i), this.wc5(t, i);
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
                    (J(Dt).zc5 = function () {
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
                    (J(Ut).uc5 = function () {
                        return this.reason;
                    }),
                    (J(Ut).ph = function () {
                        return this.reason;
                    }),
                    (J(Ut).ac6 = function (t) {
                        return new Ut(t);
                    }),
                    (J(Ut).copy = function (t, i) {
                        return (t = t === F ? this.reason : t), this.ac6(t);
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
                    (J(Qt).zc5 = function () {
                        return this.retryable;
                    }),
                    (J(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.w9_1 = 1), (t = this.nc6_1.qc6(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.oc6_1 = t), (this.w9_1 = 2), (t = this.lc6_1.rc6(this.mc6_1, this.oc6_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = this.ac7_1.hc7(this.bc7_1, this.cc7_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.dc7_1 = t), null == this.dc7_1)) {
                                            (this.ec7_1 = null), (this.w9_1 = 3);
                                            continue t;
                                        }
                                        this.fc7_1 = this.dc7_1;
                                        if (((this.gc7_1 = this.fc7_1), (this.w9_1 = 2), (t = this.ac7_1.ic7(this.gc7_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        (this.ec7_1 = t), (this.w9_1 = 3);
                                        continue t;
                                    case 3:
                                        return this.ec7_1;
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
                        return "XChatKeyPair(public=" + U(this.rc7_1) + ", private=" + U(this.sc7_1) + ")";
                    }),
                    (J(xi).hashCode = function () {
                        var t = H(this.rc7_1);
                        return (t = (C(t, 31) + H(this.sc7_1)) | 0);
                    }),
                    (J(xi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof xi)) return !1;
                        var i = t instanceof xi ? t : K();
                        return !!G(this.rc7_1, i.rc7_1) && !!G(this.sc7_1, i.sc7_1);
                    }),
                    (J(yi).toString = function () {
                        return "XChatPrivateKeys(identity=" + U(this.tc7_1) + ", signing=" + B(this.uc7_1) + ")";
                    }),
                    (J(yi).hashCode = function () {
                        var t = H(this.tc7_1);
                        return (t = (C(t, 31) + (null == this.uc7_1 ? 0 : H(this.uc7_1))) | 0);
                    }),
                    (J(yi).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof yi)) return !1;
                        var i = t instanceof yi ? t : K();
                        return !!G(this.tc7_1, i.tc7_1) && !!G(this.uc7_1, i.uc7_1);
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
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.jc8_1 = Q), (this.w9_1 = 4), (t = this.ec8_1.qc6(this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        (this.kc8_1 = t), (this.lc8_1 = V(this.kc8_1)), (this.mc8_1 = this.jc8_1.nc5(this.lc8_1)), (this.nc8_1 = this.mc8_1.ph()), (this.oc8_1 = this.mc8_1.mc4()), (this.w9_1 = 5);
                                        var i = this.oc8_1;
                                        if ((t = this.gc8_1.yc8(Y(i), this)) === D()) return t;
                                        continue t;
                                    case 5:
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.fc8_1.zc8(1024, this)) === D())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.pc8_1 = t), null == this.pc8_1)) {
                                            (this.ic8_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.qc8_1 = this.pc8_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.rc8_1 = this.qc8_1), (this.w9_1 = 9), (t = this.fc8_1.ac9(this)) === D())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.sc8_1 = tt()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.sc8_1 = Z()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.tc8_1 = this.sc8_1;
                                        var s = Q,
                                            c = this.rc8_1,
                                            h = V(c),
                                            n = this.tc8_1;
                                        (this.uc8_1 = s.pc5(this.nc8_1, h, F, st(it(n)))), (this.w9_1 = 11);
                                        var e = this.uc8_1;
                                        if ((t = this.gc8_1.yc8(Y(e), this)) === D()) return t;
                                        continue t;
                                    case 12:
                                        (this.hc8_1 = W), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof ht)) {
                                            this.vc8_1 = this.z9_1;
                                            var r = ct(),
                                                _ = this.vc8_1;
                                            if (!r.i5w_1.h())
                                                for (var a = r.i5w_1.z().p(); a.q(); ) {
                                                    a.r().o2().w("XWS", _, "encryptStream failed");
                                                }
                                            (this.ic8_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.wc8_1 = this.z9_1), this.fc8_1.e5(), (this.w9_1 = 15), (t = this.gc8_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.gc8_1.e5(), this.wc8_1);
                                    case 16:
                                        if (((this.xc8_1 = this.ic8_1), (this.x9_1 = 20), this.fc8_1.e5(), (this.w9_1 = 17), (t = this.gc8_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 17:
                                        return this.gc8_1.e5(), this.xc8_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.fc8_1.e5(), (this.w9_1 = 19), (t = this.gc8_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 19:
                                        return this.gc8_1.e5(), W;
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
                                        if (((this.x9_1 = 19), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.w9_1 = 2;
                                        continue t;
                                    case 2:
                                        this.w9_1 = 3;
                                        continue t;
                                    case 3:
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.mc9_1.zc8(nt(), this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.sc9_1 = t), null == this.sc9_1)) {
                                            (this.rc9_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.tc9_1 = this.sc9_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.uc9_1 = this.tc9_1), (this.vc9_1 = this.uc9_1.length), (this.wc9_1 = Q), (this.w9_1 = 6), (t = this.lc9_1.qc6(this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        (this.xc9_1 = t), (this.yc9_1 = V(this.xc9_1));
                                        var i = this.uc9_1;
                                        (this.zc9_1 = this.wc9_1.qc5(this.yc9_1, V(i))), (this.aca_1 = this.zc9_1.ph()), (this.bca_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.mc9_1.zc8(this.kc9_1.lca_1, this)) === D())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.cca_1 = t), null == this.cca_1)) {
                                            (this.rc9_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.dca_1 = this.cca_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.eca_1 = this.dca_1), (this.vc9_1 = (this.vc9_1 + this.eca_1.length) | 0);
                                        var s = Q,
                                            c = this.eca_1;
                                        (this.fca_1 = s.sc5(this.aca_1, V(c))), (this.gca_1 = this.fca_1.pc4()), (this.w9_1 = 10);
                                        var h = this.gca_1;
                                        if ((t = this.nc9_1.yc8(Y(h), this)) === D()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.pc9_1 && null != this.oc9_1) {
                                            var n = this.vc9_1 / this.oc9_1.bytes.y3();
                                            n > this.bca_1 + 0.1 && (this.pc9_1(n), (this.bca_1 = n));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.qc9_1 = W), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof ht)) {
                                            this.hca_1 = this.z9_1;
                                            var e = ct(),
                                                r = this.hca_1;
                                            if (!e.i5w_1.h())
                                                for (var _ = e.i5w_1.z().p(); _.q(); ) {
                                                    _.r().o2().w("XWS", r, "decryptStream failed");
                                                }
                                            (this.rc9_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.ica_1 = this.z9_1), this.mc9_1.e5(), (this.w9_1 = 14), (t = this.nc9_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.nc9_1.e5(), this.ica_1);
                                    case 15:
                                        if (((this.jca_1 = this.rc9_1), (this.x9_1 = 19), this.mc9_1.e5(), (this.w9_1 = 16), (t = this.nc9_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 16:
                                        return this.nc9_1.e5(), this.jca_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.mc9_1.e5(), (this.w9_1 = 18), (t = this.nc9_1.bc9(this)) === D())) return t;
                                        continue t;
                                    case 18:
                                        return this.nc9_1.e5(), W;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.xca_1 = et.tc5(rt())), (this.yca_1 = _t);
                                        var i = this.wca_1;
                                        if (((this.zca_1 = V(i)), (this.w9_1 = 2), (t = this.vca_1.qc6(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var s = V(t),
                                            c = this.yca_1.lc5(this.zca_1, this.xca_1, s),
                                            h = this.xca_1,
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
                    (J(gi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = Ri(O, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = ot(this.kcb_1, ut(0, rt()));
                                        this.mcb_1 = V(i.slice());
                                        var s = ot(this.kcb_1, ut(rt(), this.kcb_1.length));
                                        if (((this.ncb_1 = V(s.slice())), (this.ocb_1 = _t), (this.w9_1 = 2), (t = this.jcb_1.qc6(this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        var c = V(t),
                                            h = this.ocb_1.mc5(this.ncb_1, this.mcb_1, c);
                                        return Y(h).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof ht)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = "decryptMessage failed for " + this.lcb_1, _ = e.i5w_1.z().p(); _.q(); ) {
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
                    (J(bi).pcb = function (t, i, s, c) {
                        var h = new zi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(bi).qcb = function (t, i, s, c, h, n) {
                        var e = new di(this, t, i, s, c, h, n);
                        return (e.y9_1 = W), (e.z9_1 = null), e.oa();
                    }),
                    (J(bi).rcb = function (t, i, s) {
                        var c = new $i(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(bi).scb = function (t, i, s, c) {
                        var h = new gi(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.bcc_1.qp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.bcc_1.kc5(this)) === D())) return t;
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
                    (J(ki).ccc = function () {
                        return !1;
                    }),
                    (J(ki).dcc = function (t) {
                        return W;
                    }),
                    (J(ki).ecc = function (t) {
                        return W;
                    }),
                    (J(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Li(this.pcc_1.ach_1, "jwk", this)) === D())) return t;
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
                                        if (((s.public = this.ycc_1), (t = wt(i.deriveBits(s, this.zcc_1, 256), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.acd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.acd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.acd_1;
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
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = wt(qi(window).subtle.digest("SHA-256", zt([this.jcd_1, yt(new Int8Array([0, 0, 0, 1])).buffer, this.kcd_1])), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.lcd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = ct();
                                            if (!s.i5w_1.h())
                                                for (var c = s.i5w_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", i, null);
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
                                            c = [this.vcd_1];
                                        if ((t = wt(i.importKey("raw", this.ucd_1, s, !1, c), this)) === D()) return t;
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
                    (J(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = qi(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.hce_1), (t = wt(i.encrypt(s, this.fce_1, this.gce_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.ice_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
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
                                        switch (this.tce_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.tce_1.y2_1)) {
                                            case 0:
                                                s = [];
                                                break;
                                            case 1:
                                                s = ["verify"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.rce_1, this.sce_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.uce_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.uce_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.uce_1;
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
                                        if (((s.iv = this.dcf_1), (t = wt(i.decrypt(s, this.ecf_1, this.fcf_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.gcf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
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
                                        switch (this.rcf_1.y2_1) {
                                            case 0:
                                                i = "ECDH";
                                                break;
                                            case 1:
                                                i = "ECDSA";
                                                break;
                                            default:
                                                lt();
                                        }
                                        switch (((h.name = i), (h.namedCurve = "P-256"), this.rcf_1.y2_1)) {
                                            case 0:
                                                s = ["deriveBits"];
                                                break;
                                            case 1:
                                                s = ["sign"];
                                                break;
                                            default:
                                                lt();
                                        }
                                        if ((t = wt(c.importKey(this.pcf_1, this.qcf_1, h, !0, s), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.scf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = ct();
                                            if (!e.i5w_1.h())
                                                for (var r = e.i5w_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
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
                                        if (((s.hash = c), (t = wt(i.sign(s, this.bcg_1, this.ccg_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.dcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.dcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.dcg_1;
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
                                        if (((s.hash = c), (t = wt(i.verify(s, this.mcg_1, this.ocg_1, this.ncg_1), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.pcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = ct();
                                            if (!n.i5w_1.h())
                                                for (var e = n.i5w_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.pcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.pcg_1;
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
                                        if ((t = wt(i.importKey("raw", this.ycg_1, s, !0, ["encrypt", "decrypt"]), this)) === D()) return t;
                                        continue t;
                                    case 1:
                                        (this.zcg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var c = this.z9_1,
                                                h = ct();
                                            if (!h.i5w_1.h())
                                                for (var n = h.i5w_1.z().p(); n.q(); ) {
                                                    n.r().o2().e("XWS", c, null);
                                                }
                                            (this.zcg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zcg_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (3 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (J(cs).vch = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(cs).k2e = function (t) {
                        return this.vch(t);
                    }),
                    (J(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wt((this.uch_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === D())) return t;
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
                        return new cs(this.uch_1, t);
                    }),
                    (J(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = is(this.kch_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            c = i.Client;
                                        return (window.JuiceboxGetAuthToken = ns(this.lch_1)), new c(new s(this.lch_1.ja8_1), []);
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.eci_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.ici_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.gci_1.ea8_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.eci_1, this.gci_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.kci_1 = t), (this.w9_1 = 3), (t = wt(this.kci_1.register(Rt(this.fci_1), this.hci_1, new Int8Array(0), this.gci_1.fa8_1), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        (this.jci_1 = Mt()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var e = this.z9_1,
                                            r = e == this.ici_1.RegisterError.InvalidAuth ? hi() : e == this.ici_1.RegisterError.UpgradeRequired ? ni() : e == this.ici_1.RegisterError.Assertion ? ei() : e == this.ici_1.RegisterError.Transient ? ri() : e == this.ici_1.RegisterError.RateLimitExceeded ? _i() : ri();
                                        (this.jci_1 = new Ut(r)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.jci_1;
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
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = is(this.tci_1)(this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        (this.wci_1 = t), (this.x9_1 = 4);
                                        var i = ct();
                                        if (!i.i5w_1.h())
                                            for (var s = i.i5w_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var c = ct();
                                        if (!c.i5w_1.h())
                                            for (var h = U(this.vci_1.ea8_1), n = c.i5w_1.z().p(); n.q(); ) {
                                                n.r().o2().d("XWS", h, null);
                                            }
                                        if (((this.w9_1 = 2), (t = ss(this.tci_1, this.vci_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.yci_1 = t), (this.w9_1 = 3), (t = wt(this.yci_1.recover(Rt(this.uci_1), new Int8Array(0)), this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        var e = t;
                                        (this.xci_1 = new Jt(e)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r.reason,
                                            a = _ == this.wci_1.RecoverErrorReason.InvalidPin ? Vt() : _ == this.wci_1.RecoverErrorReason.NotRegistered ? Yt() : _ == this.wci_1.RecoverErrorReason.InvalidAuth ? Zt() : _ == this.wci_1.RecoverErrorReason.UpgradeRequired ? ti() : _ == this.wci_1.RecoverErrorReason.Assertion ? ii() : _ == this.wci_1.RecoverErrorReason.Transient ? si() : _ == this.wci_1.RecoverErrorReason.RateLimitExceeded ? ci() : si();
                                        (this.xci_1 = new At(a, r.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.xci_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (J(as).zci = function (t, i, s, c) {
                        var h = new rs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(as).acj = function (t, i, s) {
                        var c = new _s(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(us).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ji(this.ucj_1, this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        var i = t;
                                        return new xi(new Rs(i.publicKey), new ps(i.privateKey));
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
                                        return new gs(t);
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
                                        if (((this.x9_1 = 7), (this.w9_1 = 1), (t = this.mck_1.jc7(vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.pck_1 = t), (this.w9_1 = 2), (t = Ji(this.nck_1.gcc_1, this.pck_1.sc7_1.ach_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.qck_1 = t;
                                        var i;
                                        if (null == this.qck_1) return null;
                                        if (((i = this.qck_1), (this.rck_1 = i), (this.w9_1 = 3), (t = Si(this.pck_1.rc7_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.sck_1 = t), (this.tck_1 = qt(this.sck_1, 65)), (this.w9_1 = 4), (t = Ai(this.rck_1, this.tck_1, this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.uck_1 = t;
                                        var s;
                                        if (null == this.uck_1) return null;
                                        if (((s = this.uck_1), (this.vck_1 = s), (this.wck_1 = this.vck_1.slice(0, 16)), (this.xck_1 = this.vck_1.slice(16, 32)), (this.w9_1 = 5), (t = Fi(this.wck_1, "encrypt", this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        this.yck_1 = t;
                                        var c;
                                        if (null == this.yck_1) return null;
                                        if (((c = this.yck_1), (this.zck_1 = c), (this.w9_1 = 6), (t = Ki(this.zck_1, xt(this.ock_1), this.xck_1, this)) === D())) return t;
                                        continue t;
                                    case 6:
                                        if (null == t) return null;
                                        var h = t;
                                        return St(zt([this.tck_1, h]));
                                    case 7:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (7 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (J(ls).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.mcl_1 = xt(this.lcl_1)), (this.ncl_1 = this.mcl_1.slice(0, 65)), (this.ocl_1 = this.mcl_1.slice(65)), (this.w9_1 = 1), (t = Pi("raw", this.ncl_1, vi(), this)) === D())) return t;
                                        continue t;
                                    case 1:
                                        this.pcl_1 = t;
                                        var i;
                                        if (null == this.pcl_1) return null;
                                        if (((i = this.pcl_1), (this.qcl_1 = i), (this.w9_1 = 2), (t = Ji(this.qcl_1, this.kcl_1.ach_1, this)) === D())) return t;
                                        continue t;
                                    case 2:
                                        this.rcl_1 = t;
                                        var s;
                                        if (null == this.rcl_1) return null;
                                        if (((s = this.rcl_1), (this.scl_1 = s), (this.w9_1 = 3), (t = Ai(this.scl_1, this.ncl_1, this)) === D())) return t;
                                        continue t;
                                    case 3:
                                        this.tcl_1 = t;
                                        var c;
                                        if (null == this.tcl_1) return null;
                                        if (((c = this.tcl_1), (this.ucl_1 = c), (this.vcl_1 = this.ucl_1.slice(0, 16)), (this.wcl_1 = this.ucl_1.slice(16, 32)), (this.w9_1 = 4), (t = Fi(this.vcl_1, "decrypt", this)) === D())) return t;
                                        continue t;
                                    case 4:
                                        this.xcl_1 = t;
                                        var h;
                                        if (null == this.xcl_1) return null;
                                        if (((h = this.xcl_1), (this.ycl_1 = h), (this.w9_1 = 5), (t = Xi(this.wcl_1, this.ycl_1, this.ocl_1, this)) === D())) return t;
                                        continue t;
                                    case 5:
                                        return null == t ? null : Et(t);
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Pi("spki", jt(this.icm_1), this.jcm_1, this)) === D())) return t;
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
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Pi("spki", jt(this.ucm_1), this.vcm_1, this)) === D())) return s;
                                        continue t;
                                    case 1:
                                        this.wcm_1 = s;
                                        var c;
                                        if (null == this.wcm_1) c = null;
                                        else c = new Rs(this.wcm_1);
                                        this.xcm_1 = c;
                                        var h;
                                        if (null == this.xcm_1) return null;
                                        if (((h = this.xcm_1), (this.ycm_1 = h), (this.w9_1 = 2), (t = this.ycm_1), (i = this), (s = Li(t.gcc_1, "jwk", i)) === D())) return s;
                                        continue t;
                                    case 2:
                                        this.zcm_1 = s;
                                        var n = { crv: "P-256", ext: !0, kty: "EC" };
                                        if (((n.d = Ct(this.tcm_1, !0)), (n.x = this.zcm_1.x), (n.y = this.zcm_1.y), (this.acn_1 = n), (this.w9_1 = 3), (s = Wi("jwk", this.acn_1, this.vcm_1, this)) === D())) return s;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ii(this.kcn_1.ach_1, xt(this.lcn_1), this)) === D())) return t;
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
                    (J(ys).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ti(this.vcn_1.gcc_1, xt(this.xcn_1), xt(this.wcn_1), this)) === D())) return t;
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
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.kcj_1, this)) === D())) return t;
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
                    (J(ds).jc7 = function (t, i) {
                        var s = new us(this, t, i);
                        return (s.y9_1 = W), (s.z9_1 = null), s.oa();
                    }),
                    (J(ds).kc7 = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ds).rc6 = function (t, i, s) {
                        var c = new fs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).hc7 = function (t, i, s) {
                        var c = new ls(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).nc7 = function (t, i, s) {
                        var c = new ws(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).oc7 = function (t, i, s, c) {
                        var h = new vs(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J(ds).ic7 = function (t, i) {
                        return (function (t, i, s) {
                            var c = new zs(t, i, s);
                            return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                        })(this, jt(t), i);
                    }),
                    (J(ds).pc7 = function (t, i, s) {
                        var c = new xs(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).qc7 = function (t, i, s, c) {
                        var h = new ys(this, t, i, s, c);
                        return (h.y9_1 = W), (h.z9_1 = null), h.oa();
                    }),
                    (J($s).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = this.gco_1), (i = this), (s = Di(t.pc6_1, "raw", i)) === D())) return s;
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
                    (J(gs).qc6 = function (t) {
                        var i = new $s(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(bs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.pco_1, this)) === D())) return t;
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
                    (J(Rs).qc6 = function (t) {
                        var i = new bs(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    (J(ms).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ei(this.yco_1, this)) === D())) return t;
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
                    (J(ps).qc6 = function (t) {
                        var i = new ms(this, t);
                        return (i.y9_1 = W), (i.z9_1 = null), i.oa();
                    }),
                    T(J(Dt), "name", J(Dt).z2),
                    T(J(Dt), "ordinal", J(Dt).a3),
                    T(J(Qt), "name", J(Qt).z2),
                    T(J(Qt), "ordinal", J(Qt).a3),
                    (J(ki).fcc = function (t, i) {
                        var s;
                        return (t = t === F ? 1 : t), i === F ? (this.ecc(t), (s = W)) : (s = i.ecc.call(this, t)), s;
                    }),
                    (J(ds).lc7 = function (t, i, s) {
                        var c = new ui(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (J(ds).mc7 = function (t, i, s) {
                        var c = new oi(this, t, i, s);
                        return (c.y9_1 = W), (c.z9_1 = null), c.oa();
                    }),
                    (E = new ki()),
                    (j = new ds()),
                    ks(t),
                    (t.$jsExportAll$ = ks),
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
                        return li(), k;
                    }),
                    (t.$_$.k = E),
                    (t.$_$.l = Kt),
                    (t.$_$.m = Xt),
                    (t.$_$.n = Mt),
                    (t.$_$.o = function () {
                        return null == S && new bi(), S;
                    }),
                    (t.$_$.p = j);
            })(t.exports, s(519039), s(776307), s(350269), s(115754), s(761256));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.ba00d81a.js.map
