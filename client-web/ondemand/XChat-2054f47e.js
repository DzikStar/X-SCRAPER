(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2054f47e"],
    {
        801906: (t, i, s) => {
            !(function (t, i, h, n, e, r) {
                "use strict";
                var _,
                    a,
                    c,
                    u,
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
                    g,
                    $,
                    m,
                    R,
                    p,
                    j,
                    q = Math.imul,
                    k = i.$_$.ue,
                    S = i.$_$.rd,
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
                    ct = e.$_$.k,
                    ut = r.$_$.h,
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
                    gt = i.$_$.od,
                    $t = r.$_$.t,
                    mt = r.$_$.d,
                    Rt = r.$_$.f,
                    pt = r.$_$.k,
                    jt = r.$_$.c;
                function qt(t) {
                    At.call(this), (this.bytes = t);
                }
                function kt(t, i) {
                    At.call(this), (this.reason = t), (this.guessesRemaining = i);
                }
                function St() {
                    (_ = this), At.call(this);
                }
                function Et() {
                    return null == _ && new St(), _;
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
                    (v = !0), (c = new Pt("InvalidPin", 0, !0)), (u = new Pt("NotRegistered", 1, !0)), (o = new Pt("InvalidAuth", 2, !0)), (b = new Pt("UpgradeRequired", 3, !1)), (f = new Pt("Assertion", 4, !1)), (l = new Pt("Transient", 5, !0)), (w = new Pt("RateLimitExceeded", 6, !0));
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
                    (R = !0), (d = new Ht("InvalidAuth", 0, !0)), (y = new Ht("UpgradeRequired", 1, !1)), (z = new Ht("Assertion", 2, !1)), (g = new Ht("Transient", 3, !0)), ($ = new Ht("RateLimitExceeded", 4, !0)), (m = new Ht("StorageFailed", 5, !0));
                }
                function Ht(t, i, s) {
                    K.call(this, t, i), (this.retryable = s);
                }
                function Dt() {
                    return Xt(), c;
                }
                function Gt() {
                    return Xt(), u;
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
                    return Ut(), g;
                }
                function hi() {
                    return Ut(), $;
                }
                function ni() {
                    return Ut(), m;
                }
                function ei(t, i) {
                    (this.jb8_1 = t), (this.kb8_1 = i);
                }
                function ri(t, i) {
                    (this.lb8_1 = t), (this.mb8_1 = i);
                }
                function _i(t, i, s, h, n) {
                    L.call(this, n), (this.vb8_1 = t), (this.wb8_1 = i), (this.xb8_1 = s), (this.yb8_1 = h);
                }
                function ai(t, i, s, h, n, e, r) {
                    L.call(this, r), (this.fba_1 = t), (this.gba_1 = i), (this.hba_1 = s), (this.iba_1 = h), (this.jba_1 = n), (this.kba_1 = e);
                }
                function ci(t, i, s, h) {
                    L.call(this, h), (this.pbb_1 = t), (this.qbb_1 = i), (this.rbb_1 = s);
                }
                function ui(t, i, s, h, n) {
                    L.call(this, n), (this.dbc_1 = t), (this.ebc_1 = i), (this.fbc_1 = s), (this.gbc_1 = h);
                }
                function oi() {
                    (p = this), (this.fbb_1 = 1024), (this.gbb_1 = (1024 + at()) | 0);
                }
                function bi(t, i) {
                    var s = new fi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function fi(t, i) {
                    L.call(this, i), (this.wbc_1 = t);
                }
                function li(t) {
                    return t.crypto;
                }
                function wi(t, i) {
                    return Ei(t.rb9_1, "raw", i);
                }
                function vi(t, i) {
                    return Ei(t.xbc_1, "spki", i);
                }
                function xi(t, i) {
                    var s = new Ci(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function di(t) {
                    var i = li(window).subtle,
                        s = { name: "ECDH", namedCurve: "P-256" },
                        h = s;
                    return ct(i.generateKey(h, !0, ["deriveBits"]), t);
                }
                function yi(t) {
                    var i = li(window).subtle,
                        s = { name: "AES-GCM", length: 256 },
                        h = s;
                    return ct(i.generateKey(h, !0, ["encrypt", "decrypt"]), t);
                }
                function zi(t, i, s) {
                    var h = new Ai(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function gi(t, i, s) {
                    var h = new Fi(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function $i(t, i, s) {
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
                function qi(t, i, s) {
                    var h = new Ti(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function ki(t, i, s, h) {
                    var n = new Li(t, i, s, h);
                    return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                }
                function Si(t, i) {
                    var s = new Mi(t, i);
                    return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                }
                function Ei(t, i, s) {
                    return ct(li(window).subtle.exportKey(i, t), s);
                }
                function Ji(t, i, s) {
                    return ct(li(window).subtle.exportKey(i, t), s);
                }
                function Ci(t, i) {
                    L.call(this, i), (this.gbd_1 = t);
                }
                function Ai(t, i, s) {
                    L.call(this, s), (this.pbd_1 = t), (this.qbd_1 = i);
                }
                function Fi(t, i, s) {
                    L.call(this, s), (this.abe_1 = t), (this.bbe_1 = i);
                }
                function Ki(t, i, s) {
                    L.call(this, s), (this.lbe_1 = t), (this.mbe_1 = i);
                }
                function Xi(t, i, s, h) {
                    L.call(this, h), (this.wbe_1 = t), (this.xbe_1 = i), (this.ybe_1 = s);
                }
                function Pi(t, i, s, h) {
                    L.call(this, h), (this.ibf_1 = t), (this.jbf_1 = i), (this.kbf_1 = s);
                }
                function Wi(t, i, s, h) {
                    L.call(this, h), (this.ubf_1 = t), (this.vbf_1 = i), (this.wbf_1 = s);
                }
                function Ii(t, i, s, h) {
                    L.call(this, h), (this.gbg_1 = t), (this.hbg_1 = i), (this.ibg_1 = s);
                }
                function Ti(t, i, s) {
                    L.call(this, s), (this.sbg_1 = t), (this.tbg_1 = i);
                }
                function Li(t, i, s, h) {
                    L.call(this, h), (this.dbh_1 = t), (this.ebh_1 = i), (this.fbh_1 = s);
                }
                function Mi(t, i) {
                    L.call(this, i), (this.pbh_1 = t);
                }
                function Ni(t) {
                    var i = t.sbh_1;
                    return (
                        gt(
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
                    (this.lbi_1 = t), L.call(this, i);
                }
                function Di(t) {
                    return function () {
                        return (function (t, i) {
                            var s = new Hi(t, i),
                                h = function (t) {
                                    return s.mbi(t);
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
                                            _ = i.g9x_1.r2(r);
                                        s(null == _ ? null : _.n9x_1);
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
                    L.call(this, s), (this.bbi_1 = t), (this.cbi_1 = i);
                }
                function Oi(t, i, s, h, n) {
                    L.call(this, n), (this.vbi_1 = t), (this.wbi_1 = i), (this.xbi_1 = s), (this.ybi_1 = h);
                }
                function Qi(t, i, s, h) {
                    L.call(this, h), (this.kbj_1 = t), (this.lbj_1 = i), (this.mbj_1 = s);
                }
                function Vi() {
                    this.sbh_1 = yt(Di(this));
                }
                function Yi(t, i, s) {
                    var h = new _s(t, i, s);
                    return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                }
                function Zi(t, i) {
                    L.call(this, i), (this.kbk_1 = t);
                }
                function ts(t, i) {
                    L.call(this, i), (this.tbk_1 = t);
                }
                function is(t, i, s, h) {
                    L.call(this, h), (this.cbl_1 = t), (this.dbl_1 = i), (this.ebl_1 = s);
                }
                function ss(t, i, s, h) {
                    L.call(this, h), (this.bbm_1 = t), (this.cbm_1 = i), (this.dbm_1 = s);
                }
                function hs(t, i, s) {
                    L.call(this, s), (this.bbn_1 = t), (this.cbn_1 = i);
                }
                function ns(t, i, s, h) {
                    L.call(this, h), (this.lbn_1 = t), (this.mbn_1 = i), (this.nbn_1 = s);
                }
                function es(t, i, s, h) {
                    L.call(this, h), (this.bbo_1 = t), (this.cbo_1 = i), (this.dbo_1 = s);
                }
                function rs(t, i, s, h, n) {
                    L.call(this, n), (this.mbo_1 = t), (this.nbo_1 = i), (this.obo_1 = s), (this.pbo_1 = h);
                }
                function _s(t, i, s) {
                    L.call(this, s), (this.abk_1 = t), (this.bbk_1 = i);
                }
                function as() {
                    this.rbl_1 = 65;
                }
                function cs(t, i) {
                    L.call(this, i), (this.gbp_1 = t);
                }
                function us(t) {
                    this.rb9_1 = t;
                }
                function os(t, i) {
                    L.call(this, i), (this.pbp_1 = t);
                }
                function bs(t) {
                    this.xbc_1 = t;
                }
                function fs(t, i) {
                    L.call(this, i), (this.ybp_1 = t);
                }
                function ls(t) {
                    this.rbh_1 = t;
                }
                function ws(t) {
                    var i = t.com || (t.com = {}),
                        s = i.x || (i.x = {}),
                        h = s.dms || (s.dms = {});
                    (h.JuiceboxRecoverPrivateKeyResult = At), (h.JuiceboxRecoverPrivateKeyResult.Success = qt), (h.JuiceboxRecoverPrivateKeyResult.JuiceboxFailure = kt), X(h.JuiceboxRecoverPrivateKeyResult, "KeyReconstructionFailure", Et), X(h.JuiceboxRecoverPrivateKeyResult, "NoJuiceboxTokens", Ct), (h.JuiceboxRecoverFailureReason = Pt), (h.JuiceboxRecoverFailureReason.values = Ft), (h.JuiceboxRecoverFailureReason.valueOf = Kt), X(h.JuiceboxRecoverFailureReason, "InvalidPin", Dt), X(h.JuiceboxRecoverFailureReason, "NotRegistered", Gt), X(h.JuiceboxRecoverFailureReason, "InvalidAuth", Bt), X(h.JuiceboxRecoverFailureReason, "UpgradeRequired", Ot), X(h.JuiceboxRecoverFailureReason, "Assertion", Qt), X(h.JuiceboxRecoverFailureReason, "Transient", Vt), X(h.JuiceboxRecoverFailureReason, "RateLimitExceeded", Yt), (h.JuiceboxRegisterPrivateKeyResult = Lt), X(h.JuiceboxRegisterPrivateKeyResult, "Success", It), (h.JuiceboxRegisterPrivateKeyResult.Failure = Tt), (h.JuiceboxRegisterFailureReason = Ht), (h.JuiceboxRegisterFailureReason.values = Mt), (h.JuiceboxRegisterFailureReason.valueOf = Nt), X(h.JuiceboxRegisterFailureReason, "InvalidAuth", Zt), X(h.JuiceboxRegisterFailureReason, "UpgradeRequired", ti), X(h.JuiceboxRegisterFailureReason, "Assertion", ii), X(h.JuiceboxRegisterFailureReason, "Transient", si), X(h.JuiceboxRegisterFailureReason, "RateLimitExceeded", hi), X(h.JuiceboxRegisterFailureReason, "StorageFailed", ni);
                }
                S(At, "JuiceboxRecoverPrivateKeyResult"),
                    S(qt, "Success", E, At),
                    S(kt, "JuiceboxFailure", E, At),
                    C(St, "KeyReconstructionFailure", E, At),
                    C(Jt, "NoJuiceboxTokens", E, At),
                    S(Pt, "JuiceboxRecoverFailureReason", E, K),
                    S(Lt, "JuiceboxRegisterPrivateKeyResult"),
                    C(Wt, "Success", E, Lt),
                    S(Tt, "Failure", E, Lt),
                    S(Ht, "JuiceboxRegisterFailureReason", E, K),
                    S(ei, "XChatKeyPair"),
                    S(ri, "XChatPrivateKeys"),
                    tt(_i, L),
                    tt(ai, L),
                    tt(ci, L),
                    tt(ui, L),
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
                    S(Vi, "WebJuiceboxApi", Vi, E, E, [1, 3, 2]),
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
                    tt(cs, L),
                    S(us, "XChatConversationKey", E, E, E, [0]),
                    tt(os, L),
                    S(bs, "XChatPublicKey", E, E, E, [0]),
                    tt(fs, L),
                    S(ls, "XChatPrivateKey", E, E, E, [0]),
                    (k(qt).x9z = function () {
                        return this.bytes;
                    }),
                    (k(kt).ab8 = function () {
                        return this.reason;
                    }),
                    (k(kt).bb8 = function () {
                        return this.guessesRemaining;
                    }),
                    (k(kt).gh = function () {
                        return this.reason;
                    }),
                    (k(kt).hh = function () {
                        return this.guessesRemaining;
                    }),
                    (k(kt).cb8 = function (t, i) {
                        return new kt(t, i);
                    }),
                    (k(kt).copy = function (t, i, s) {
                        return (t = t === E ? this.reason : t), (i = i === E ? this.guessesRemaining : i), this.cb8(t, i);
                    }),
                    (k(kt).toString = function () {
                        return "JuiceboxFailure(reason=" + this.reason.toString() + ", guessesRemaining=" + this.guessesRemaining + ")";
                    }),
                    (k(kt).hashCode = function () {
                        var t = this.reason.hashCode();
                        return (t = (q(t, 31) + (null == this.guessesRemaining ? 0 : this.guessesRemaining)) | 0);
                    }),
                    (k(kt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof kt)) return !1;
                        var i = t instanceof kt ? t : J();
                        return !!this.reason.equals(i.reason) && this.guessesRemaining == i.guessesRemaining;
                    }),
                    (k(St).toString = function () {
                        return "KeyReconstructionFailure";
                    }),
                    (k(St).hashCode = function () {
                        return 188209770;
                    }),
                    (k(St).equals = function (t) {
                        return this === t || (t instanceof St && (t instanceof St || J(), !0));
                    }),
                    (k(Jt).toString = function () {
                        return "NoJuiceboxTokens";
                    }),
                    (k(Jt).hashCode = function () {
                        return 1362829865;
                    }),
                    (k(Jt).equals = function (t) {
                        return this === t || (t instanceof Jt && (t instanceof Jt || J(), !0));
                    }),
                    (k(Pt).fb8 = function () {
                        return this.retryable;
                    }),
                    (k(Wt).toString = function () {
                        return "Success";
                    }),
                    (k(Wt).hashCode = function () {
                        return 1551298723;
                    }),
                    (k(Wt).equals = function (t) {
                        return this === t || (t instanceof Wt && (t instanceof Wt || J(), !0));
                    }),
                    (k(Tt).ab8 = function () {
                        return this.reason;
                    }),
                    (k(Tt).gh = function () {
                        return this.reason;
                    }),
                    (k(Tt).gb8 = function (t) {
                        return new Tt(t);
                    }),
                    (k(Tt).copy = function (t, i) {
                        return (t = t === E ? this.reason : t), this.gb8(t);
                    }),
                    (k(Tt).toString = function () {
                        return "Failure(reason=" + this.reason.toString() + ")";
                    }),
                    (k(Tt).hashCode = function () {
                        return this.reason.hashCode();
                    }),
                    (k(Tt).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof Tt)) return !1;
                        var i = t instanceof Tt ? t : J();
                        return !!this.reason.equals(i.reason);
                    }),
                    (k(Ht).fb8 = function () {
                        return this.retryable;
                    }),
                    (k(ei).toString = function () {
                        return "XChatKeyPair(public=" + P(this.jb8_1) + ", private=" + P(this.kb8_1) + ")";
                    }),
                    (k(ei).hashCode = function () {
                        var t = W(this.jb8_1);
                        return (t = (q(t, 31) + W(this.kb8_1)) | 0);
                    }),
                    (k(ei).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ei)) return !1;
                        var i = t instanceof ei ? t : J();
                        return !!I(this.jb8_1, i.jb8_1) && !!I(this.kb8_1, i.kb8_1);
                    }),
                    (k(ri).toString = function () {
                        return "XChatPrivateKeys(identity=" + P(this.lb8_1) + ", signing=" + T(this.mb8_1) + ")";
                    }),
                    (k(ri).hashCode = function () {
                        var t = W(this.lb8_1);
                        return (t = (q(t, 31) + (null == this.mb8_1 ? 0 : W(this.mb8_1))) | 0);
                    }),
                    (k(ri).equals = function (t) {
                        if (this === t) return !0;
                        if (!(t instanceof ri)) return !1;
                        var i = t instanceof ri ? t : J();
                        return !!I(this.lb8_1, i.lb8_1) && !!I(this.mb8_1, i.mb8_1);
                    }),
                    (k(_i).oa = function () {
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
                                        if (((this.x9_1 = 14), (this.x9_1 = 13), (this.bb9_1 = U), (this.w9_1 = 4), (t = this.wb8_1.sb9(this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        (this.cb9_1 = t), (this.db9_1 = H(this.cb9_1)), (this.eb9_1 = this.bb9_1.tb7(this.db9_1)), (this.fb9_1 = this.eb9_1.gh()), (this.gb9_1 = this.eb9_1.sb6()), (this.w9_1 = 5);
                                        var i = this.gb9_1;
                                        if ((t = this.yb8_1.tb9(D(i), this)) === N()) return t;
                                        continue t;
                                    case 5:
                                        (this.hb9_1 = G(this.gb9_1)), (this.w9_1 = 6);
                                        continue t;
                                    case 6:
                                        if (((this.w9_1 = 7), (t = this.xb8_1.ub9(1024, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (((this.ib9_1 = t), null == this.ib9_1)) {
                                            (this.ab9_1 = !0), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        (this.jb9_1 = this.ib9_1), (this.w9_1 = 8);
                                        continue t;
                                    case 8:
                                        if (((this.kb9_1 = this.jb9_1), (this.w9_1 = 9), (t = this.xb8_1.vb9(this)) === N())) return t;
                                        continue t;
                                    case 9:
                                        if (t) {
                                            (this.lb9_1 = O()), (this.w9_1 = 10);
                                            continue t;
                                        }
                                        (this.lb9_1 = B()), (this.w9_1 = 10);
                                        continue t;
                                    case 10:
                                        this.mb9_1 = this.lb9_1;
                                        var s = U,
                                            h = this.kb9_1,
                                            n = H(h),
                                            e = this.mb9_1;
                                        (this.nb9_1 = s.vb7(this.fb9_1, n, E, V(Q(e)))), (this.hb9_1 = (this.hb9_1 + G(this.nb9_1)) | 0), (this.w9_1 = 11);
                                        var r = this.nb9_1;
                                        if ((t = this.yb8_1.tb9(D(r), this)) === N()) return t;
                                        continue t;
                                    case 11:
                                        this.w9_1 = 6;
                                        continue t;
                                    case 12:
                                        (this.zb8_1 = F), (this.x9_1 = 20), (this.w9_1 = 18);
                                        continue t;
                                    case 13:
                                        if (((this.x9_1 = 14), this.z9_1 instanceof Z)) {
                                            this.ob9_1 = this.z9_1;
                                            var _ = Y(),
                                                a = this.ob9_1;
                                            if (!_.d5t_1.h())
                                                for (var c = _.d5t_1.z().p(); c.q(); ) {
                                                    c.r().o2().e("XWS", a, "encryptStream failed");
                                                }
                                            (this.ab9_1 = !1), (this.x9_1 = 20), (this.w9_1 = 16);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 14:
                                        if (((this.x9_1 = 20), (this.pb9_1 = this.z9_1), this.xb8_1.e5(), (this.w9_1 = 15), (t = this.yb8_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 15:
                                        throw (this.yb8_1.e5(), this.pb9_1);
                                    case 16:
                                        if (((this.qb9_1 = this.ab9_1), (this.x9_1 = 20), this.xb8_1.e5(), (this.w9_1 = 17), (t = this.yb8_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 17:
                                        return this.yb8_1.e5(), this.qb9_1;
                                    case 18:
                                        if (((this.x9_1 = 20), this.xb8_1.e5(), (this.w9_1 = 19), (t = this.yb8_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 19:
                                        return this.yb8_1.e5(), F;
                                    case 20:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (20 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (k(ai).oa = function () {
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
                                        if (((this.x9_1 = 13), (this.x9_1 = 12), (this.w9_1 = 4), (t = this.hba_1.ub9(it(), this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        if (((this.nba_1 = t), null == this.nba_1)) {
                                            (this.mba_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.oba_1 = this.nba_1), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        if (((this.pba_1 = this.oba_1), (this.qba_1 = this.pba_1.length), (this.rba_1 = U), (this.w9_1 = 6), (t = this.gba_1.sb9(this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        (this.sba_1 = t), (this.tba_1 = H(this.sba_1));
                                        var i = this.pba_1;
                                        (this.uba_1 = this.rba_1.wb7(this.tba_1, H(i))), (this.vba_1 = this.uba_1.gh()), (this.wba_1 = 0), (this.w9_1 = 7);
                                        continue t;
                                    case 7:
                                        if (((this.w9_1 = 8), (t = this.hba_1.ub9(this.fba_1.gbb_1, this)) === N())) return t;
                                        continue t;
                                    case 8:
                                        if (((this.xba_1 = t), null == this.xba_1)) {
                                            (this.mba_1 = !0), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        (this.yba_1 = this.xba_1), (this.w9_1 = 9);
                                        continue t;
                                    case 9:
                                        (this.zba_1 = this.yba_1), (this.qba_1 = (this.qba_1 + this.zba_1.length) | 0);
                                        var s = U,
                                            h = this.zba_1;
                                        (this.abb_1 = s.yb7(this.vba_1, H(h))), (this.bbb_1 = this.abb_1.vb6()), (this.w9_1 = 10);
                                        var n = this.bbb_1;
                                        if ((t = this.iba_1.tb9(D(n), this)) === N()) return t;
                                        continue t;
                                    case 10:
                                        if (null != this.kba_1 && null != this.jba_1) {
                                            var e = this.qba_1 / this.jba_1.bytes.y3();
                                            e > this.wba_1 + 0.1 && (this.kba_1(e), (this.wba_1 = e));
                                        }
                                        this.w9_1 = 7;
                                        continue t;
                                    case 11:
                                        (this.lba_1 = F), (this.x9_1 = 19), (this.w9_1 = 17);
                                        continue t;
                                    case 12:
                                        if (((this.x9_1 = 13), this.z9_1 instanceof Z)) {
                                            this.cbb_1 = this.z9_1;
                                            var r = Y(),
                                                _ = this.cbb_1;
                                            if (!r.d5t_1.h())
                                                for (var a = r.d5t_1.z().p(); a.q(); ) {
                                                    a.r().o2().e("XWS", _, "XWS decryptStream failed");
                                                }
                                            (this.mba_1 = !1), (this.x9_1 = 19), (this.w9_1 = 15);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 13:
                                        if (((this.x9_1 = 19), (this.dbb_1 = this.z9_1), this.hba_1.e5(), (this.w9_1 = 14), (t = this.iba_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 14:
                                        throw (this.iba_1.e5(), this.dbb_1);
                                    case 15:
                                        if (((this.ebb_1 = this.mba_1), (this.x9_1 = 19), this.hba_1.e5(), (this.w9_1 = 16), (t = this.iba_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 16:
                                        return this.iba_1.e5(), this.ebb_1;
                                    case 17:
                                        if (((this.x9_1 = 19), this.hba_1.e5(), (this.w9_1 = 18), (t = this.iba_1.wb9(this)) === N())) return t;
                                        continue t;
                                    case 18:
                                        return this.iba_1.e5(), F;
                                    case 19:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var c = t;
                                if (19 === this.x9_1) throw c;
                                (this.w9_1 = this.x9_1), (this.z9_1 = c);
                            }
                    }),
                    (k(ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.x9_1 = 3), (this.sbb_1 = st.zb7(ht())), (this.tbb_1 = nt);
                                        var i = this.rbb_1;
                                        if (((this.ubb_1 = H(i)), (this.w9_1 = 2), (t = this.qbb_1.sb9(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var s = H(t),
                                            h = this.tbb_1.rb7(this.ubb_1, this.sbb_1, s),
                                            n = this.sbb_1,
                                            e = D(n),
                                            r = D(h),
                                            _ = H(et([e, r]));
                                        return D(_).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var a = this.z9_1,
                                                c = Y();
                                            if (!c.d5t_1.h())
                                                for (var u = c.d5t_1.z().p(); u.q(); ) {
                                                    u.r().o2().e("XWS", a, "XWS encryptMessage failed");
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
                    (k(ui).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (t = bi(M, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.x9_1 = 3;
                                        var i = _t(this.fbc_1, rt(0, ht()));
                                        this.hbc_1 = H(i.slice());
                                        var s = _t(this.fbc_1, rt(ht(), this.fbc_1.length));
                                        if (((this.ibc_1 = H(s.slice())), (this.jbc_1 = nt), (this.w9_1 = 2), (t = this.ebc_1.sb9(this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        var h = H(t),
                                            n = this.jbc_1.sb7(this.ibc_1, this.hbc_1, h);
                                        return D(n).slice();
                                    case 3:
                                        if (((this.x9_1 = 4), this.z9_1 instanceof Z)) {
                                            var e = this.z9_1,
                                                r = Y();
                                            if (!r.d5t_1.h())
                                                for (var _ = "XWS decryptMessage failed for " + this.gbc_1, a = r.d5t_1.z().p(); a.q(); ) {
                                                    a.r().o2().e("XWS", e, _);
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
                    (k(oi).kbc = function (t, i, s, h) {
                        var n = new _i(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (k(oi).lbc = function (t, i, s, h, n, e) {
                        var r = new ai(this, t, i, s, h, n, e);
                        return (r.y9_1 = F), (r.z9_1 = null), r.oa();
                    }),
                    (k(oi).mbc = function (t, i, s) {
                        var h = new ci(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(oi).nbc = function (t, i, s, h) {
                        var n = new ui(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (k(fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), this.wbc_1.fp())) {
                                            this.w9_1 = 2;
                                            continue t;
                                        }
                                        if (((this.w9_1 = 1), (t = this.wbc_1.qb7(this)) === N())) return t;
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
                    (k(Ci).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ji(this.gbd_1.rbh_1, "jwk", this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t.d,
                                            s = ut(i);
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
                    (k(Ai).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDH" };
                                        if (((s.public = this.pbd_1), (t = ct(i.deriveBits(s, this.qbd_1, 256), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.rbd_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.rbd_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.rbd_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (k(Fi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1), (t = ct(li(window).subtle.digest("SHA-256", ft([this.abe_1, bt(new Int8Array([0, 0, 0, 1])).buffer, this.bbe_1])), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.cbe_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var i = this.z9_1,
                                                s = Y();
                                            if (!s.d5t_1.h())
                                                for (var h = s.d5t_1.z().p(); h.q(); ) {
                                                    h.r().o2().e("XWS", i, null);
                                                }
                                            (this.cbe_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.cbe_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (3 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (k(Ki).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" },
                                            h = [this.mbe_1];
                                        if ((t = ct(i.importKey("raw", this.lbe_1, s, !1, h), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.nbe_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.nbe_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.nbe_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (k(Xi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.ybe_1), (t = ct(i.encrypt(s, this.wbe_1, this.xbe_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zbe_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.zbe_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.zbe_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (k(Pi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = li(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.kbf_1 ? [] : [this.kbf_1]), (t = ct(s.importKey(this.ibf_1, this.jbf_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.lbf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.lbf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.lbf_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (k(Wi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if (((s.iv = this.ubf_1), (t = ct(i.decrypt(s, this.vbf_1, this.wbf_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.xbf_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.xbf_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.xbf_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (k(Ii).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i,
                                            s = li(window).subtle,
                                            h = {};
                                        if (((h.name = "ECDH"), (h.namedCurve = "P-256"), (i = null == this.ibg_1 ? [] : [this.ibg_1]), (t = ct(s.importKey(this.gbg_1, this.hbg_1, h, !0, i), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.jbg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.jbg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.jbg_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (k(Ti).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ct(i.sign(s, this.sbg_1, this.tbg_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.ubg_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.ubg_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.ubg_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (k(Li).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "ECDSA" },
                                            h = { name: "SHA-256" };
                                        if (((s.hash = h), (t = ct(i.verify(s, this.dbh_1, this.fbh_1, this.ebh_1), this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.gbh_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var n = this.z9_1,
                                                e = Y();
                                            if (!e.d5t_1.h())
                                                for (var r = e.d5t_1.z().p(); r.q(); ) {
                                                    r.r().o2().e("XWS", n, null);
                                                }
                                            (this.gbh_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.gbh_1;
                                }
                            } catch (t) {
                                var _ = t;
                                if (3 === this.x9_1) throw _;
                                (this.w9_1 = this.x9_1), (this.z9_1 = _);
                            }
                    }),
                    (k(Mi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        (this.x9_1 = 3), (this.x9_1 = 2), (this.w9_1 = 1);
                                        var i = li(window).subtle,
                                            s = { name: "AES-GCM" };
                                        if ((t = ct(i.importKey("raw", this.pbh_1, s, !0, ["encrypt", "decrypt"]), this)) === N()) return t;
                                        continue t;
                                    case 1:
                                        (this.qbh_1 = t), (this.x9_1 = 3), (this.w9_1 = 4);
                                        continue t;
                                    case 2:
                                        if (((this.x9_1 = 3), this.z9_1 instanceof Error)) {
                                            var h = this.z9_1,
                                                n = Y();
                                            if (!n.d5t_1.h())
                                                for (var e = n.d5t_1.z().p(); e.q(); ) {
                                                    e.r().o2().e("XWS", h, null);
                                                }
                                            (this.qbh_1 = null), (this.w9_1 = 4);
                                            continue t;
                                        }
                                        throw this.z9_1;
                                    case 3:
                                        throw this.z9_1;
                                    case 4:
                                        return (this.x9_1 = 3), this.qbh_1;
                                }
                            } catch (t) {
                                var r = t;
                                if (3 === this.x9_1) throw r;
                                (this.w9_1 = this.x9_1), (this.z9_1 = r);
                            }
                    }),
                    (k(Hi).mbi = function (t) {
                        var i = this.sa(t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (k(Hi).d2h = function (t) {
                        return this.mbi(t);
                    }),
                    (k(Hi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ct((this.lbi_1, s.e("node_modules_juicebox-sdk_juicebox-sdk_js").then(s.bind(s, 94156))), this)) === N())) return t;
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
                    (k(Hi).sa = function (t) {
                        return new Hi(this.lbi_1, t);
                    }),
                    (k(Bi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ni(this.bbi_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        var i = t,
                                            s = i.Configuration,
                                            h = i.Client;
                                        return (window.JuiceboxGetAuthToken = Gi(this.cbi_1)), new h(new s(this.cbi_1.l9x_1), []);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var n = t;
                                if (2 === this.x9_1) throw n;
                                (this.w9_1 = this.x9_1), (this.z9_1 = n);
                            }
                    }),
                    (k(Oi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.vbi_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.zbi_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.d5t_1.h())
                                            for (var s = i.d5t_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Registering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.d5t_1.h())
                                            for (var n = P(this.xbi_1.g9x_1), e = h.d5t_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.vbi_1, this.xbi_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.bbj_1 = t), (this.w9_1 = 3), (t = ct(this.bbj_1.register(dt(this.wbi_1), this.ybi_1, new Int8Array(0), this.xbi_1.h9x_1), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        (this.abj_1 = It()), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var r = this.z9_1,
                                            _ = r == this.zbi_1.RegisterError.InvalidAuth ? Zt() : r == this.zbi_1.RegisterError.UpgradeRequired ? ti() : r == this.zbi_1.RegisterError.Assertion ? ii() : r == this.zbi_1.RegisterError.Transient ? si() : r == this.zbi_1.RegisterError.RateLimitExceeded ? hi() : si();
                                        (this.abj_1 = new Tt(_)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.abj_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var a = t;
                                if (6 === this.x9_1) throw a;
                                (this.w9_1 = this.x9_1), (this.z9_1 = a);
                            }
                    }),
                    (k(Qi).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 6), (this.w9_1 = 1), (t = Ni(this.kbj_1)(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        (this.nbj_1 = t), (this.x9_1 = 4);
                                        var i = Y();
                                        if (!i.d5t_1.h())
                                            for (var s = i.d5t_1.z().p(); s.q(); ) {
                                                s.r().o2().d("XWS", "Recovering key with juicebox using realmIdToAuthToken:", null);
                                            }
                                        var h = Y();
                                        if (!h.d5t_1.h())
                                            for (var n = P(this.mbj_1.g9x_1), e = h.d5t_1.z().p(); e.q(); ) {
                                                e.r().o2().d("XWS", n, null);
                                            }
                                        if (((this.w9_1 = 2), (t = Ui(this.kbj_1, this.mbj_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        if (((this.pbj_1 = t), (this.w9_1 = 3), (t = ct(this.pbj_1.recover(dt(this.lbj_1), new Int8Array(0)), this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        var r = t;
                                        (this.obj_1 = new qt(r)), (this.x9_1 = 6), (this.w9_1 = 5);
                                        continue t;
                                    case 4:
                                        this.x9_1 = 6;
                                        var _ = this.z9_1,
                                            a = _.reason,
                                            c = a == this.nbj_1.RecoverErrorReason.InvalidPin ? Dt() : a == this.nbj_1.RecoverErrorReason.NotRegistered ? Gt() : a == this.nbj_1.RecoverErrorReason.InvalidAuth ? Bt() : a == this.nbj_1.RecoverErrorReason.UpgradeRequired ? Ot() : a == this.nbj_1.RecoverErrorReason.Assertion ? Qt() : a == this.nbj_1.RecoverErrorReason.Transient ? Vt() : a == this.nbj_1.RecoverErrorReason.RateLimitExceeded ? Yt() : Vt();
                                        (this.obj_1 = new kt(c, _.guesses_remaining)), (this.w9_1 = 5);
                                        continue t;
                                    case 5:
                                        return (this.x9_1 = 6), this.obj_1;
                                    case 6:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var u = t;
                                if (6 === this.x9_1) throw u;
                                (this.w9_1 = this.x9_1), (this.z9_1 = u);
                            }
                    }),
                    (k(Vi).qbj = function (t, i, s, h) {
                        var n = new Oi(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (k(Vi).rbj = function (t, i, s) {
                        var h = new Qi(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(Zi).oa = function () {
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
                    (k(ts).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = yi(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return new us(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (k(is).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 8), (this.w9_1 = 1), (t = this.cbl_1.sbl(this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        if (((this.fbl_1 = t), (this.w9_1 = 2), (t = zi(this.dbl_1.xbc_1, this.fbl_1.kb8_1.rbh_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.gbl_1 = t;
                                        var i;
                                        if (null == this.gbl_1) return null;
                                        if (((i = this.gbl_1), (this.hbl_1 = i), (this.w9_1 = 3), (t = vi(this.fbl_1.jb8_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        if (((this.ibl_1 = t), (this.jbl_1 = $t(this.ibl_1, 65)), (this.w9_1 = 4), (t = gi(this.hbl_1, this.jbl_1, this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.kbl_1 = t;
                                        var s;
                                        if (null == this.kbl_1) return null;
                                        if (((s = this.kbl_1), (this.lbl_1 = s), (this.mbl_1 = this.lbl_1.slice(0, 16)), (this.nbl_1 = this.lbl_1.slice(16, 32)), (this.w9_1 = 5), (t = $i(this.mbl_1, "encrypt", this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.obl_1 = t;
                                        var h;
                                        if (null == this.obl_1) return null;
                                        if (((h = this.obl_1), (this.pbl_1 = h), (this.w9_1 = 6), (t = wi(this.ebl_1, this)) === N())) return t;
                                        continue t;
                                    case 6:
                                        if (((this.qbl_1 = t), (this.w9_1 = 7), (t = mi(this.pbl_1, this.qbl_1, this.nbl_1, this)) === N())) return t;
                                        continue t;
                                    case 7:
                                        if (null == t) return null;
                                        var n = t;
                                        return mt(ft([this.jbl_1, n]));
                                    case 8:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var e = t;
                                if (8 === this.x9_1) throw e;
                                (this.w9_1 = this.x9_1), (this.z9_1 = e);
                            }
                    }),
                    (k(ss).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 7), (this.ebm_1 = ot(this.dbm_1)), (this.fbm_1 = this.ebm_1.slice(0, 65)), (this.gbm_1 = this.ebm_1.slice(65)), (this.w9_1 = 1), (t = Ri("raw", this.fbm_1, E, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        this.hbm_1 = t;
                                        var i;
                                        if (null == this.hbm_1) return null;
                                        if (((i = this.hbm_1), (this.ibm_1 = i), (this.w9_1 = 2), (t = zi(this.ibm_1, this.cbm_1.rbh_1, this)) === N())) return t;
                                        continue t;
                                    case 2:
                                        this.jbm_1 = t;
                                        var s;
                                        if (null == this.jbm_1) return null;
                                        if (((s = this.jbm_1), (this.kbm_1 = s), (this.w9_1 = 3), (t = gi(this.kbm_1, this.fbm_1, this)) === N())) return t;
                                        continue t;
                                    case 3:
                                        this.lbm_1 = t;
                                        var h;
                                        if (null == this.lbm_1) return null;
                                        if (((h = this.lbm_1), (this.mbm_1 = h), (this.nbm_1 = this.mbm_1.slice(0, 16)), (this.obm_1 = this.mbm_1.slice(16, 32)), (this.w9_1 = 4), (t = $i(this.nbm_1, "decrypt", this)) === N())) return t;
                                        continue t;
                                    case 4:
                                        this.pbm_1 = t;
                                        var n;
                                        if (null == this.pbm_1) return null;
                                        if (((n = this.pbm_1), (this.qbm_1 = n), (this.w9_1 = 5), (t = pi(this.obm_1, this.qbm_1, this.gbm_1, this)) === N())) return t;
                                        continue t;
                                    case 5:
                                        this.rbm_1 = t;
                                        var e;
                                        if (null == this.rbm_1) return null;
                                        if (((e = this.rbm_1), (this.sbm_1 = e), (this.w9_1 = 6), (t = Yi(this.bbm_1, this.sbm_1, this)) === N())) return t;
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
                    (k(hs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Ri("spki", Rt(this.cbn_1), E, this)) === N())) return t;
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
                    (k(ns).oa = function () {
                        var t,
                            i,
                            s = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 4), (this.w9_1 = 1), (s = Ri("spki", Rt(this.nbn_1), E, this)) === N())) return s;
                                        continue t;
                                    case 1:
                                        this.obn_1 = s;
                                        var h;
                                        if (null == this.obn_1) h = null;
                                        else h = new bs(this.obn_1);
                                        this.pbn_1 = h;
                                        var n;
                                        if (null == this.pbn_1) return null;
                                        if (((n = this.pbn_1), (this.qbn_1 = n), (this.w9_1 = 2), (t = this.qbn_1), (i = this), (s = Ji(t.xbc_1, "jwk", i)) === N())) return s;
                                        continue t;
                                    case 2:
                                        this.rbn_1 = s;
                                        var e = { crv: "P-256", ext: !0, key_opts: ["deriveBits"], kty: "EC" };
                                        if (((e.d = pt(this.mbn_1, !0)), (e.x = this.rbn_1.x), (e.y = this.rbn_1.y), (this.sbn_1 = e), (this.w9_1 = 3), (s = ji("jwk", this.sbn_1, "deriveBits", this)) === N())) return s;
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
                    (k(es).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = qi(this.cbo_1.rbh_1, ot(this.dbo_1), this)) === N())) return t;
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
                    (k(rs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = ki(this.nbo_1.xbc_1, ot(this.pbo_1), ot(this.obo_1), this)) === N())) return t;
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
                    (k(_s).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = Si(this.bbk_1, this)) === N())) return t;
                                        continue t;
                                    case 1:
                                        return null == t ? null : new us(t);
                                    case 2:
                                        throw this.z9_1;
                                }
                            } catch (t) {
                                var i = t;
                                if (2 === this.x9_1) throw i;
                                (this.w9_1 = this.x9_1), (this.z9_1 = i);
                            }
                    }),
                    (k(as).sbl = function (t) {
                        var i = new Zi(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (k(as).qbo = function (t) {
                        var i = new ts(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (k(as).rbo = function (t, i, s) {
                        var h = new is(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(as).sbo = function (t, i, s) {
                        var h = new ss(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(as).tbo = function (t, i) {
                        var s = new hs(this, t, i);
                        return (s.y9_1 = F), (s.z9_1 = null), s.oa();
                    }),
                    (k(as).ubo = function (t, i, s) {
                        var h = new ns(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(as).vbo = function (t, i) {
                        return Yi(this, Rt(t), i);
                    }),
                    (k(as).wbo = function (t, i, s) {
                        var h = new es(this, t, i, s);
                        return (h.y9_1 = F), (h.z9_1 = null), h.oa();
                    }),
                    (k(as).xbo = function (t, i, s, h) {
                        var n = new rs(this, t, i, s, h);
                        return (n.y9_1 = F), (n.z9_1 = null), n.oa();
                    }),
                    (k(cs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = wi(this.gbp_1, this)) === N())) return t;
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
                    (k(us).sb9 = function (t) {
                        var i = new cs(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (k(os).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = vi(this.pbp_1, this)) === N())) return t;
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
                    (k(bs).sb9 = function (t) {
                        var i = new os(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    (k(fs).oa = function () {
                        var t = this.y9_1;
                        t: for (;;)
                            try {
                                switch (this.w9_1) {
                                    case 0:
                                        if (((this.x9_1 = 2), (this.w9_1 = 1), (t = xi(this.ybp_1, this)) === N())) return t;
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
                    (k(ls).sb9 = function (t) {
                        var i = new fs(this, t);
                        return (i.y9_1 = F), (i.z9_1 = null), i.oa();
                    }),
                    X(k(Pt), "name", k(Pt).z2),
                    X(k(Pt), "ordinal", k(Pt).a3),
                    X(k(Ht), "name", k(Ht).z2),
                    X(k(Ht), "ordinal", k(Ht).a3),
                    (j = new as()),
                    ws(t),
                    (t.$jsExportAll$ = ws),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = kt),
                    (t.$_$.b = qt),
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2054f47e.56daaf0a.js.map
