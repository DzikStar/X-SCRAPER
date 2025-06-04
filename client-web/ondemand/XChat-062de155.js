(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        902821: (c, t, _) => {
            !(function (c, t, _) {
                "use strict";
                var n,
                    i,
                    e,
                    u,
                    v,
                    s,
                    r,
                    o,
                    h,
                    a,
                    w,
                    f,
                    l,
                    m,
                    b,
                    p,
                    $,
                    d,
                    g,
                    k,
                    q,
                    y,
                    j,
                    x,
                    A,
                    C,
                    I,
                    S,
                    z,
                    T,
                    N,
                    L,
                    B,
                    D,
                    H,
                    K,
                    V,
                    E,
                    F,
                    M,
                    Q,
                    U,
                    O,
                    Z,
                    P,
                    X,
                    G,
                    R,
                    J,
                    W,
                    Y,
                    cc,
                    tc,
                    _c,
                    nc,
                    ic,
                    ec,
                    uc,
                    vc,
                    sc,
                    rc,
                    oc = Math.imul,
                    hc = t.$_$.xe,
                    ac = t.$_$.ud,
                    wc = t.$_$.g,
                    fc = t.$_$.ae,
                    lc = t.$_$.yd,
                    mc = t.$_$.vd,
                    bc = t.$_$.od,
                    pc = t.$_$.qj,
                    $c = t.$_$.p6,
                    dc = t.$_$.z9,
                    gc = t.$_$.za,
                    kc = t.$_$.d1,
                    qc = t.$_$.g9,
                    yc = t.$_$.xa,
                    jc = t.$_$.dj,
                    xc = t.$_$.cb,
                    Ac = t.$_$.bb,
                    Cc = t.$_$.el,
                    Ic = t.$_$.ga,
                    Sc = t.$_$.o1,
                    zc = t.$_$.u,
                    Tc = t.$_$.p3,
                    Nc = t.$_$.v3,
                    Lc = t.$_$.h2,
                    Bc = t.$_$.se,
                    Dc = t.$_$.w3,
                    Hc = t.$_$.b9,
                    Kc = t.$_$.y9,
                    Vc = t.$_$.p9,
                    Ec = t.$_$.v9,
                    Fc = t.$_$.z1,
                    Mc = t.$_$.uj,
                    Qc = t.$_$.k4,
                    Uc = t.$_$.h4,
                    Oc = t.$_$.c4,
                    Zc = t.$_$.kd,
                    Pc = t.$_$.ed,
                    Xc = _.$_$.a,
                    Gc = t.$_$.fd,
                    Rc = t.$_$.ng,
                    Jc = t.$_$.sk,
                    Wc = t.$_$.b4,
                    Yc = t.$_$.f4;
                function ct(c, t) {
                    (this.zcs_1 = t), (this.ycs_1 = c.act_1);
                }
                function tt() {}
                function _t() {
                    this.act_1 = n;
                }
                function nt() {}
                function it() {
                    (i = this), (this.oct_1 = new ut());
                }
                function et() {
                    return null == i && new it(), i;
                }
                function ut(c, t, _, n, i, e) {
                    et(), (c = c !== wc && c), (t = t === wc || t), (_ = _ === wc ? !c : _), (n = n === wc ? !c : n), (i = i === wc ? c : i), (e = e === wc ? c : e), (this.pct_1 = c), (this.qct_1 = t), (this.rct_1 = _), (this.sct_1 = n), (this.tct_1 = i), (this.uct_1 = e);
                }
                function vt() {
                    if (r) return $c;
                    (r = !0), (e = new mt("NoValue", 0)), (u = new mt("Unquoted", 1)), (v = new mt("Single", 2)), (s = new mt("Double", 3));
                }
                function st(c) {
                    return c.wct_1.rct_1;
                }
                function rt(c, t) {
                    return !c.wct_1.pct_1 && pt().rcu_1.w(t);
                }
                function ot(c, t) {
                    (c.zct_1 = c.xct_1), (c.acu_1 = t);
                    var _ = pt().qcu_1.r2(t);
                    if (!c.wct_1.pct_1 && null != _)
                        c: for (;;) {
                            if (!(!c.ecu_1.h() && _.w(dc(c.ecu_1)))) break c;
                            var n = gc(c.ecu_1);
                            c.vct_1.dct(n, !0);
                        }
                    rt(c, t) || (c.ecu_1.k(t), pt().scu_1.w(t) ? c.fcu_1.k(!0) : pt().tcu_1.w(t) && c.fcu_1.k(!1)), c.vct_1.ect(t), (c.dcu_1 = kc());
                }
                function ht(c, t) {
                    c.xct_1 = c.zct_1;
                    var _ = c.dcu_1;
                    null == _ || (c.vct_1.mct(c.acu_1, _, t), (c.dcu_1 = null)), rt(c, c.acu_1) && c.vct_1.dct(c.acu_1, !0), (c.acu_1 = "");
                }
                function at(c, t) {
                    var _ = c.acu_1;
                    ht(c, t), c.ecu_1.s() > 0 && c.ecu_1.t((c.ecu_1.s() - 1) | 0) === _ && (c.vct_1.dct(_, !t), gc(c.ecu_1));
                }
                function wt(c, t) {
                    var _ = pt().ucu_1.xd(t),
                        n = null == _ ? null : _.be(),
                        i = null == n ? null : n.i(),
                        e = null == i ? -1 : i,
                        u = e < 0 ? t : t.substring(0, e);
                    return st(c) && (u = u.toLowerCase()), u;
                }
                function ft(c, t, _) {
                    for (; ((t - c.hcu_1) | 0) >= qc(c.gcu_1).length; ) lt(c);
                    for (var n = qc(c.gcu_1), i = (t - c.hcu_1) | 0, e = (_ - c.hcu_1) | 0, u = n.substring(i, e); ((_ - c.hcu_1) | 0) > qc(c.gcu_1).length; ) {
                        lt(c);
                        var v = u,
                            s = qc(c.gcu_1),
                            r = (_ - c.hcu_1) | 0;
                        u = v + s.substring(0, r);
                    }
                    return u;
                }
                function lt(c) {
                    (c.hcu_1 = (c.hcu_1 + qc(c.gcu_1).length) | 0), (c.icu_1 = (c.icu_1 - 1) | 0), yc(c.gcu_1);
                }
                function mt(c, t) {
                    jc.call(this, c, t);
                }
                function bt() {
                    (o = this), (this.lcu_1 = xc(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.mcu_1 = Ac("p")), (this.ncu_1 = xc(["thead", "tbody"])), (this.ocu_1 = xc(["dt", "dd"])), (this.pcu_1 = xc(["rt", "rp"])), (this.qcu_1 = Ic([Cc("tr", xc(["tr", "th", "td"])), Cc("th", Ac("th")), Cc("td", xc(["thead", "th", "td"])), Cc("body", xc(["head", "link", "script"])), Cc("li", Ac("li")), Cc("p", this.mcu_1), Cc("h1", this.mcu_1), Cc("h2", this.mcu_1), Cc("h3", this.mcu_1), Cc("h4", this.mcu_1), Cc("h5", this.mcu_1), Cc("h6", this.mcu_1), Cc("select", this.lcu_1), Cc("input", this.lcu_1), Cc("output", this.lcu_1), Cc("button", this.lcu_1), Cc("datalist", this.lcu_1), Cc("textarea", this.lcu_1), Cc("option", Ac("option")), Cc("optgroup", xc(["optgroup", "option"])), Cc("dd", this.ocu_1), Cc("dt", this.ocu_1), Cc("address", this.mcu_1), Cc("article", this.mcu_1), Cc("aside", this.mcu_1), Cc("blockquote", this.mcu_1), Cc("details", this.mcu_1), Cc("div", this.mcu_1), Cc("dl", this.mcu_1), Cc("fieldset", this.mcu_1), Cc("figcaption", this.mcu_1), Cc("figure", this.mcu_1), Cc("footer", this.mcu_1), Cc("form", this.mcu_1), Cc("header", this.mcu_1), Cc("hr", this.mcu_1), Cc("main", this.mcu_1), Cc("menu", this.mcu_1), Cc("nav", this.mcu_1), Cc("ol", this.mcu_1), Cc("pre", this.mcu_1), Cc("section", this.mcu_1), Cc("table", this.mcu_1), Cc("ul", this.mcu_1), Cc("rt", this.pcu_1), Cc("rp", this.pcu_1), Cc("tbody", this.ncu_1), Cc("tfoot", this.ncu_1)])), (this.rcu_1 = xc(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.scu_1 = xc(["math", "svg"])), (this.tcu_1 = xc(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.ucu_1 = Sc("\\s|/"));
                }
                function pt() {
                    return null == o && new bt(), o;
                }
                function $t() {
                    return vt(), e;
                }
                function dt(c, t) {
                    pt(), (c = c === wc ? n : c), (t = t === wc ? et().oct_1 : t), (this.vct_1 = c), (this.wct_1 = t), (this.xct_1 = 0), (this.yct_1 = 0), (this.zct_1 = 0), (this.acu_1 = ""), (this.bcu_1 = ""), (this.ccu_1 = ""), (this.dcu_1 = null);
                    this.ecu_1 = zc();
                    this.fcu_1 = zc();
                    (this.gcu_1 = zc()), (this.hcu_1 = 0), (this.icu_1 = 0), (this.jcu_1 = !1), (this.kcu_1 = new T_(this.wct_1, this));
                }
                function gt() {
                    if (L) return $c;
                    (L = !0), (h = new n_("Tab", 0, 9)), (a = new n_("NewLine", 1, 10)), (w = new n_("FormFeed", 2, 12)), (f = new n_("CarriageReturn", 3, 13)), (l = new n_("Space", 4, 32)), (m = new n_("ExclamationMark", 5, 33)), new n_("Number", 6, 35), (b = new n_("Amp", 7, 38)), (p = new n_("SingleQuote", 8, 39)), ($ = new n_("DoubleQuote", 9, 34)), (d = new n_("Dash", 10, 45)), (g = new n_("Slash", 11, 47)), (k = new n_("Zero", 12, 48)), (q = new n_("Nine", 13, 57)), (y = new n_("Semi", 14, 59)), (j = new n_("Lt", 15, 60)), (x = new n_("Eq", 16, 61)), (A = new n_("Gt", 17, 62)), (C = new n_("QuestionMark", 18, 63)), (I = new n_("UpperA", 19, 65)), (S = new n_("LowerA", 20, 97)), new n_("UpperF", 21, 70), new n_("LowerF", 22, 102), (z = new n_("UpperZ", 23, 90)), (T = new n_("LowerZ", 24, 122)), new n_("LowerX", 25, 120), (N = new n_("OpeningSquareBracket", 26, 91));
                }
                function kt() {
                    if (vc) return $c;
                    (vc = !0), (B = new i_("Text", 0)), (D = new i_("BeforeTagName", 1)), (H = new i_("InTagName", 2)), (K = new i_("InSelfClosingTag", 3)), (V = new i_("BeforeClosingTagName", 4)), (E = new i_("InClosingTagName", 5)), (F = new i_("AfterClosingTagName", 6)), (M = new i_("BeforeAttributeName", 7)), (Q = new i_("InAttributeName", 8)), (U = new i_("AfterAttributeName", 9)), (O = new i_("BeforeAttributeValue", 10)), (Z = new i_("InAttributeValueDq", 11)), (P = new i_("InAttributeValueSq", 12)), (X = new i_("InAttributeValueNq", 13)), (G = new i_("BeforeDeclaration", 14)), (R = new i_("InDeclaration", 15)), (J = new i_("InProcessingInstruction", 16)), (W = new i_("BeforeComment", 17)), (Y = new i_("CDATASequence", 18)), (cc = new i_("InSpecialComment", 19)), (tc = new i_("InCommentLike", 20)), (_c = new i_("BeforeSpecialS", 21)), (nc = new i_("BeforeSpecialT", 22)), (ic = new i_("SpecialStartSequence", 23)), (ec = new i_("InSpecialTag", 24)), (uc = new i_("InEntity", 25));
                }
                function qt(c, t) {
                    t === f_().bcw_1 || (!c.lcv_1 && At(c, f_().bcw_1)) ? (c.pcv_1 > c.ocv_1 && c.jcv_1.vcu(c.ocv_1, c.pcv_1), (c.mcv_1 = (kt(), D)), (c.ocv_1 = c.pcv_1)) : c.lcv_1 && t === s_().bcw_1 && Wt(c);
                }
                function yt(c, t) {
                    var _ = c.vcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return $c;
                    var n,
                        i = _,
                        e = c.wcv_1 === Qc(i);
                    if (e) n = rc.dcw(t);
                    else {
                        var u = 32 | t,
                            v = Uc(i, c.wcv_1);
                        n = u === (255 & Oc(v));
                    }
                    if (n) {
                        if (!e) return (c.wcv_1 = (c.wcv_1 + 1) | 0), $c;
                    } else c.scv_1 = !1;
                    (c.wcv_1 = 0), (c.mcv_1 = p_()), Tt(c, t);
                }
                function jt(c, t) {
                    var _ = c.vcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return $c;
                    var n = _;
                    if (c.wcv_1 === Qc(n)) {
                        if (t === m_().bcw_1 || rc.ecw(t)) {
                            var i = (c.pcv_1 - Qc(n)) | 0;
                            if (c.ocv_1 < i) {
                                var e = c.pcv_1;
                                (c.pcv_1 = i), c.jcv_1.vcu(c.ocv_1, i), (c.pcv_1 = e);
                            }
                            return (c.scv_1 = !1), (c.ocv_1 = (i + 2) | 0), Lt(c, t), $c;
                        }
                        c.wcv_1 = 0;
                    }
                    var u = 32 | t,
                        v = Uc(n, c.wcv_1);
                    u === (255 & Oc(v)) ? (c.wcv_1 = (c.wcv_1 + 1) | 0) : 0 === c.wcv_1 ? (Zc(n, u_().kcw_1) ? c.lcv_1 && t === s_().bcw_1 && Wt(c) : At(c, f_().bcw_1) && (c.wcv_1 = 1)) : (c.wcv_1 = t === f_().bcw_1 ? 1 : 0);
                }
                function xt(c, t) {
                    var _ = Uc(u_().fcw_1, c.wcv_1);
                    t === (255 & Oc(_)) ? ((c.wcv_1 = (c.wcv_1 + 1) | 0), c.wcv_1 === Qc(u_().fcw_1) && ((c.mcv_1 = I_()), (c.vcv_1 = u_().gcw_1), (c.wcv_1 = 0), (c.ocv_1 = (c.pcv_1 + 1) | 0))) : ((c.wcv_1 = 0), (c.mcv_1 = C_()), Zt(c, t));
                }
                function At(c, t) {
                    for (; c.pcv_1 < ((c.ncv_1.length + c.ucv_1) | 0); ) {
                        var _ = Pc(c.ncv_1, (c.pcv_1 - c.ucv_1) | 0);
                        if (Nc(_) === t) return !0;
                        c.pcv_1 = (c.pcv_1 + 1) | 0;
                    }
                    return (c.pcv_1 = (((c.ncv_1.length + c.ucv_1) | 0) - 1) | 0), !1;
                }
                function Ct(c, t) {
                    var _ = c.vcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return $c;
                    var n = _,
                        i = Uc(n, c.wcv_1);
                    if (t === (255 & Oc(i))) (c.wcv_1 = (c.wcv_1 + 1) | 0), c.wcv_1 === Qc(n) && (Zc(n, u_().gcw_1) ? c.jcv_1.icv(c.ocv_1, c.pcv_1, 2) : c.jcv_1.hcv(c.ocv_1, c.pcv_1, 2), (c.wcv_1 = 0), (c.ocv_1 = (c.pcv_1 + 1) | 0), (c.mcv_1 = b_()));
                    else if (0 === c.wcv_1) {
                        var e = Uc(n, 0);
                        At(c, 255 & Oc(e)) && (c.wcv_1 = 1);
                    } else {
                        var u = Uc(n, (c.wcv_1 - 1) | 0);
                        t !== (255 & Oc(u)) && (c.wcv_1 = 0);
                    }
                }
                function It(c, t) {
                    return c.kcv_1 ? !rc.dcw(t) : rc.mcw(t);
                }
                function St(c, t, _) {
                    (c.scv_1 = !0), (c.vcv_1 = t), (c.wcv_1 = _), (c.mcv_1 = (kt(), ic));
                }
                function zt(c, t) {
                    if (t === (gt(), m).bcw_1) (c.mcv_1 = (kt(), G)), (c.ocv_1 = (c.pcv_1 + 1) | 0);
                    else if (t === (gt(), C).bcw_1) (c.mcv_1 = (kt(), J)), (c.ocv_1 = (c.pcv_1 + 1) | 0);
                    else if (It(c, t)) {
                        var _ = 32 | t;
                        if (((c.ocv_1 = c.pcv_1), c.kcv_1)) c.mcv_1 = p_();
                        else {
                            var n = Uc(u_().icw_1, 2);
                            if (_ === (255 & Oc(n))) c.mcv_1 = (kt(), _c);
                            else {
                                var i = Uc(u_().kcw_1, 2);
                                _ === (255 & Oc(i)) ? (c.mcv_1 = (kt(), nc)) : (c.mcv_1 = p_());
                            }
                        }
                    } else t === a_().bcw_1 ? (c.mcv_1 = (kt(), V)) : ((c.mcv_1 = b_()), qt(c, t));
                }
                function Tt(c, t) {
                    rc.dcw(t) && (c.jcv_1.xcu(c.ocv_1, c.pcv_1), (c.ocv_1 = -1), (c.mcv_1 = g_()), Dt(c, t));
                }
                function Nt(c, t) {
                    if (!rc.ecw(t))
                        if (t === m_().bcw_1) c.mcv_1 = b_();
                        else {
                            var _,
                                n = c;
                            It(c, t) ? (_ = d_()) : (kt(), (_ = cc)), (n.mcv_1 = _), (c.ocv_1 = c.pcv_1);
                        }
                }
                function Lt(c, t) {
                    (t === m_().bcw_1 || rc.ecw(t)) && (c.jcv_1.zcu(c.ocv_1, c.pcv_1), (c.ocv_1 = -1), (c.mcv_1 = (kt(), F)), Bt(c, t));
                }
                function Bt(c, t) {
                    (t === m_().bcw_1 || At(c, m_().bcw_1)) && ((c.mcv_1 = b_()), (c.ocv_1 = (c.pcv_1 + 1) | 0));
                }
                function Dt(c, t) {
                    t === m_().bcw_1 ? (c.jcv_1.ycu(c.pcv_1), c.scv_1 ? ((c.mcv_1 = S_()), (c.wcv_1 = 0)) : (c.mcv_1 = b_()), (c.ocv_1 = (c.pcv_1 + 1) | 0)) : t === a_().bcw_1 ? (c.mcv_1 = $_()) : rc.ecw(t) || ((c.mcv_1 = k_()), (c.ocv_1 = c.pcv_1));
                }
                function Ht(c, t) {
                    t === m_().bcw_1 ? (c.jcv_1.acv(c.pcv_1), (c.mcv_1 = b_()), (c.ocv_1 = (c.pcv_1 + 1) | 0), (c.scv_1 = !1)) : rc.ecw(t) || ((c.mcv_1 = g_()), Dt(c, t));
                }
                function Kt(c, t) {
                    (t === l_().bcw_1 || rc.dcw(t)) && (c.jcv_1.bcv(c.ocv_1, c.pcv_1), (c.ocv_1 = c.pcv_1), (c.mcv_1 = q_()), Vt(c, t));
                }
                function Vt(c, t) {
                    t === l_().bcw_1 ? (c.mcv_1 = y_()) : t === a_().bcw_1 || t === m_().bcw_1 ? (c.jcv_1.ecv($t(), c.ocv_1), (c.ocv_1 = -1), (c.mcv_1 = g_()), Dt(c, t)) : rc.ecw(t) || (c.jcv_1.ecv($t(), c.ocv_1), (c.mcv_1 = k_()), (c.ocv_1 = c.pcv_1));
                }
                function Et(c, t) {
                    t === o_().bcw_1 ? ((c.mcv_1 = j_()), (c.ocv_1 = (c.pcv_1 + 1) | 0)) : t === r_().bcw_1 ? ((c.mcv_1 = x_()), (c.ocv_1 = (c.pcv_1 + 1) | 0)) : rc.ecw(t) || ((c.ocv_1 = c.pcv_1), (c.mcv_1 = A_()), Ut(c, t));
                }
                function Ft(c, t, _) {
                    t === _ || (!c.lcv_1 && At(c, _)) ? (c.jcv_1.ccv(c.ocv_1, c.pcv_1), (c.ocv_1 = -1), c.jcv_1.ecv(_ === o_().bcw_1 ? (vt(), s) : (vt(), v), (c.pcv_1 + 1) | 0), (c.mcv_1 = g_())) : c.lcv_1 && t === s_().bcw_1 && Wt(c);
                }
                function Mt(c, t) {
                    Ft(c, t, o_().bcw_1);
                }
                function Qt(c, t) {
                    Ft(c, t, r_().bcw_1);
                }
                function Ut(c, t) {
                    rc.ecw(t) || t === m_().bcw_1 ? (c.jcv_1.ccv(c.ocv_1, c.pcv_1), (c.ocv_1 = -1), c.jcv_1.ecv((vt(), u), c.pcv_1), (c.mcv_1 = g_()), Dt(c, t)) : c.lcv_1 && t === s_().bcw_1 && Wt(c);
                }
                function Ot(c, t) {
                    t === (gt(), N).bcw_1 ? ((c.mcv_1 = (kt(), Y)), (c.wcv_1 = 0)) : (c.mcv_1 = t === h_().bcw_1 ? (kt(), W) : C_());
                }
                function Zt(c, t) {
                    (t === m_().bcw_1 || At(c, m_().bcw_1)) && (c.jcv_1.fcv(c.ocv_1, c.pcv_1), (c.mcv_1 = b_()), (c.ocv_1 = (c.pcv_1 + 1) | 0));
                }
                function Pt(c, t) {
                    (t === m_().bcw_1 || At(c, m_().bcw_1)) && (c.jcv_1.gcv(c.ocv_1, c.pcv_1), (c.mcv_1 = b_()), (c.ocv_1 = (c.pcv_1 + 1) | 0));
                }
                function Xt(c, t) {
                    t === h_().bcw_1 ? ((c.mcv_1 = I_()), (c.vcv_1 = u_().hcw_1), (c.wcv_1 = 2), (c.ocv_1 = (c.pcv_1 + 1) | 0)) : (c.mcv_1 = C_());
                }
                function Gt(c, t) {
                    var _ = c.vcv_1;
                    if (null == (null == _ ? null : new Mc(_)));
                    else {
                        var n = (null == _ ? null : new Mc(_)).fq_1;
                        if (t === m_().bcw_1) c.wcv_1 === ((Qc(n) - 1) | 0) && (c.jcv_1.hcv(c.ocv_1, (1 + ((c.pcv_1 - Qc(n)) | 0)) | 0, 3), (c.ocv_1 = -1), (c.mcv_1 = b_()));
                        else {
                            var i = Uc(n, c.wcv_1);
                            t !== (255 & Oc(i)) && ((c.mcv_1 = p_()), Tt(c, t));
                        }
                    }
                }
                function Rt(c, t) {
                    var _ = 32 | t,
                        n = Uc(u_().icw_1, 3);
                    if (_ === (255 & Oc(n))) St(c, u_().icw_1, 4);
                    else {
                        var i = Uc(u_().jcw_1, 3);
                        _ === (255 & Oc(i)) ? St(c, u_().jcw_1, 4) : ((c.mcv_1 = p_()), Tt(c, t));
                    }
                }
                function Jt(c, t) {
                    var _ = 32 | t,
                        n = Uc(u_().kcw_1, 3);
                    if (_ === (255 & Oc(n))) St(c, u_().kcw_1, 4);
                    else {
                        var i = Uc(u_().lcw_1, 3);
                        _ === (255 & Oc(i)) ? St(c, u_().lcw_1, 4) : ((c.mcv_1 = p_()), Tt(c, t));
                    }
                }
                function Wt(c) {
                    (c.rcv_1 = c.mcv_1), (c.mcv_1 = z_()), (c.qcv_1 = c.pcv_1);
                }
                function Yt(c, t) {
                    if (t === w_().bcw_1) {
                        var _ = Xc(),
                            n = c.ncv_1,
                            i = (c.qcv_1 - c.ucv_1) | 0,
                            e = (1 + ((c.pcv_1 - c.ucv_1) | 0)) | 0,
                            u = n.substring(i, e),
                            v = _.lcs(u);
                        if (((c.mcv_1 = c.rcv_1), 0 === Gc(v))) c.pcv_1 = c.qcv_1;
                        else {
                            var s = Rc(v);
                            !(function (c, t, _) {
                                c.rcv_1.equals(b_()) || c.rcv_1.equals(S_()) ? (c.ocv_1 < c.qcv_1 && c.jcv_1.vcu(c.ocv_1, c.qcv_1), (c.ocv_1 = (c.qcv_1 + _) | 0), (c.pcv_1 = (c.ocv_1 - 1) | 0), c.jcv_1.wcu(t, c.ocv_1)) : (c.ocv_1 < c.qcv_1 && c.jcv_1.ccv(c.ocv_1, c.qcv_1), (c.ocv_1 = (c.qcv_1 + _) | 0), (c.pcv_1 = (c.ocv_1 - 1) | 0), c.jcv_1.dcv(t));
                            })(c, Nc(s), (((c.pcv_1 + 1) | 0) - c.qcv_1) | 0);
                        }
                    }
                    (((((c.pcv_1 + 1) | 0) - c.qcv_1) | 0) > 33 ||
                        !(function (c, t) {
                            return rc.mcw(t) || rc.ncw(t) || t === w_().bcw_1;
                        })(0, t)) &&
                        ((c.mcv_1 = c.rcv_1), (c.pcv_1 = c.qcv_1));
                }
                function c_(c) {
                    return c.pcv_1 < ((c.ncv_1.length + c.ucv_1) | 0) && c.tcv_1;
                }
                function t_(c) {
                    for (; c_(c); ) {
                        var t = Pc(c.ncv_1, (c.pcv_1 - c.ucv_1) | 0),
                            _ = Nc(t);
                        switch (c.mcv_1.y2_1) {
                            case 0:
                                qt(c, _);
                                break;
                            case 23:
                                yt(c, _);
                                break;
                            case 24:
                                jt(c, _);
                                break;
                            case 18:
                                xt(c, _);
                                break;
                            case 11:
                                Mt(c, _);
                                break;
                            case 8:
                                Kt(c, _);
                                break;
                            case 20:
                                Ct(c, _);
                                break;
                            case 19:
                                Gt(c, _);
                                break;
                            case 7:
                                Dt(c, _);
                                break;
                            case 2:
                                Tt(c, _);
                                break;
                            case 5:
                                Lt(c, _);
                                break;
                            case 1:
                                zt(c, _);
                                break;
                            case 9:
                                Vt(c, _);
                                break;
                            case 12:
                                Qt(c, _);
                                break;
                            case 10:
                                Et(c, _);
                                break;
                            case 4:
                                Nt(c, _);
                                break;
                            case 6:
                                Bt(c, _);
                                break;
                            case 21:
                                Rt(c, _);
                                break;
                            case 22:
                                Jt(c, _);
                                break;
                            case 13:
                                Ut(c, _);
                                break;
                            case 3:
                                Ht(c, _);
                                break;
                            case 15:
                                Zt(c, _);
                                break;
                            case 14:
                                Ot(c, _);
                                break;
                            case 17:
                                Xt(c, _);
                                break;
                            case 16:
                                Pt(c, _);
                                break;
                            case 25:
                                Yt(c, _);
                                break;
                            default:
                                Jc();
                        }
                        c.pcv_1 = (c.pcv_1 + 1) | 0;
                    }
                    !(function (c) {
                        c.tcv_1 && c.ocv_1 !== c.pcv_1 && (c.mcv_1.equals(b_()) || (c.mcv_1.equals(S_()) && 0 === c.wcv_1) ? (c.jcv_1.vcu(c.ocv_1, c.pcv_1), (c.ocv_1 = c.pcv_1)) : (c.mcv_1.equals(j_()) || c.mcv_1.equals(x_()) || c.mcv_1.equals(A_())) && (c.jcv_1.ccv(c.ocv_1, c.pcv_1), (c.ocv_1 = c.pcv_1)));
                    })(c);
                }
                function __(c) {
                    c.mcv_1.equals(z_()) && (c.mcv_1 = c.rcv_1),
                        (function (c) {
                            var t = (c.ncv_1.length + c.ucv_1) | 0;
                            if (c.ocv_1 >= t) return $c;
                            if (c.mcv_1.equals(I_())) {
                                var _ = c.vcv_1;
                                Zc(null == _ ? null : new Mc(_), new Mc(u_().gcw_1)) ? c.jcv_1.icv(c.ocv_1, t, 0) : c.jcv_1.hcv(c.ocv_1, t, 0);
                            } else c.mcv_1.equals(p_()) || c.mcv_1.equals(g_()) || c.mcv_1.equals(y_()) || c.mcv_1.equals(q_()) || c.mcv_1.equals(k_()) || c.mcv_1.equals(x_()) || c.mcv_1.equals(j_()) || c.mcv_1.equals(A_()) || c.mcv_1.equals(d_()) || c.mcv_1.equals($_()) || c.jcv_1.vcu(c.ocv_1, t);
                        })(c),
                        c.jcv_1.bct();
                }
                function n_(c, t, _) {
                    jc.call(this, c, t), (this.bcw_1 = _);
                }
                function i_(c, t) {
                    jc.call(this, c, t);
                }
                function e_() {
                    sc = this;
                    this.fcw_1 = Yc(new Int8Array([Wc(67), Wc(68), Wc(65), Wc(84), Wc(65), Wc(91)]));
                    this.gcw_1 = Yc(new Int8Array([Wc(93), Wc(93), Wc(62)]));
                    this.hcw_1 = Yc(new Int8Array([Wc(45), Wc(45), Wc(62)]));
                    this.icw_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(99), Wc(114), Wc(105), Wc(112), Wc(116)]));
                    this.jcw_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(116), Wc(121), Wc(108), Wc(101)]));
                    this.kcw_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(105), Wc(116), Wc(108), Wc(101)]));
                    this.lcw_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(101), Wc(120), Wc(116), Wc(97), Wc(114), Wc(101), Wc(97)]));
                }
                function u_() {
                    return null == sc && new e_(), sc;
                }
                function v_() {
                    this.ccw_1 = 33;
                }
                function s_() {
                    return gt(), b;
                }
                function r_() {
                    return gt(), p;
                }
                function o_() {
                    return gt(), $;
                }
                function h_() {
                    return gt(), d;
                }
                function a_() {
                    return gt(), g;
                }
                function w_() {
                    return gt(), y;
                }
                function f_() {
                    return gt(), j;
                }
                function l_() {
                    return gt(), x;
                }
                function m_() {
                    return gt(), A;
                }
                function b_() {
                    return kt(), B;
                }
                function p_() {
                    return kt(), H;
                }
                function $_() {
                    return kt(), K;
                }
                function d_() {
                    return kt(), E;
                }
                function g_() {
                    return kt(), M;
                }
                function k_() {
                    return kt(), Q;
                }
                function q_() {
                    return kt(), U;
                }
                function y_() {
                    return kt(), O;
                }
                function j_() {
                    return kt(), Z;
                }
                function x_() {
                    return kt(), P;
                }
                function A_() {
                    return kt(), X;
                }
                function C_() {
                    return kt(), R;
                }
                function I_() {
                    return kt(), tc;
                }
                function S_() {
                    return kt(), ec;
                }
                function z_() {
                    return kt(), uc;
                }
                function T_(c, t) {
                    (this.jcv_1 = t), (this.kcv_1 = c.pct_1), (this.lcv_1 = c.qct_1), (this.mcv_1 = b_()), (this.ncv_1 = ""), (this.ocv_1 = 0), (this.pcv_1 = 0), (this.qcv_1 = 0), (this.rcv_1 = b_()), (this.scv_1 = !1), (this.tcv_1 = !0), (this.ucv_1 = 0), (this.vcv_1 = null), (this.wcv_1 = 0);
                }
                lc(nt, "KsoupHtmlHandler"),
                    ac(ct, wc, wc, wc, [nt]),
                    fc(tt, "Default", wc, wc, [nt]),
                    ac(_t, "Builder", _t),
                    mc(it),
                    ac(ut, "KsoupHtmlOptions", ut),
                    ac(mt, "QuoteType", wc, jc),
                    mc(bt),
                    ac(dt, "KsoupHtmlParser", dt),
                    ac(n_, "CharCodes", wc, jc),
                    ac(i_, "State", wc, jc),
                    fc(e_, "Sequences"),
                    mc(v_),
                    ac(T_, "KsoupTokenizer"),
                    (hc(ct).bct = function () {
                        this.ycs_1.bct();
                    }),
                    (hc(ct).cct = function (c) {
                        this.ycs_1.cct(c);
                    }),
                    (hc(ct).dct = function (c, t) {
                        this.ycs_1.dct(c, t);
                    }),
                    (hc(ct).ect = function (c) {
                        this.ycs_1.ect(c);
                    }),
                    (hc(ct).fct = function (c, t, _) {
                        this.ycs_1.fct(c, t, _);
                    }),
                    (hc(ct).gct = function (c) {
                        this.ycs_1.gct(c);
                    }),
                    (hc(ct).hct = function (c) {
                        this.ycs_1.hct(c);
                    }),
                    (hc(ct).ict = function () {
                        this.ycs_1.ict();
                    }),
                    (hc(ct).jct = function () {
                        this.ycs_1.jct();
                    }),
                    (hc(ct).kct = function () {
                        this.ycs_1.kct();
                    }),
                    (hc(ct).lct = function (c, t) {
                        this.ycs_1.lct(c, t);
                    }),
                    (hc(ct).mct = function (c, t, _) {
                        this.zcs_1(c, t, _);
                    }),
                    (hc(_t).nct = function (c) {
                        return (this.act_1 = new ct(this, c)), this;
                    }),
                    (hc(_t).lz = function () {
                        return this.act_1;
                    }),
                    (hc(ut).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.pct_1 + ", decodeEntities=" + this.qct_1 + ", lowerCaseTags=" + this.rct_1 + ", lowerCaseAttributeNames=" + this.sct_1 + ", recognizeCDATA=" + this.tct_1 + ", recognizeSelfClosing=" + this.uct_1 + ")";
                    }),
                    (hc(ut).hashCode = function () {
                        var c = bc(this.pct_1);
                        return (c = (oc(c, 31) + bc(this.qct_1)) | 0), (c = (oc(c, 31) + bc(this.rct_1)) | 0), (c = (oc(c, 31) + bc(this.sct_1)) | 0), (c = (oc(c, 31) + bc(this.tct_1)) | 0), (c = (oc(c, 31) + bc(this.uct_1)) | 0);
                    }),
                    (hc(ut).equals = function (c) {
                        if (this === c) return !0;
                        if (!(c instanceof ut)) return !1;
                        var t = c instanceof ut ? c : pc();
                        return this.pct_1 === t.pct_1 && this.qct_1 === t.qct_1 && this.rct_1 === t.rct_1 && this.sct_1 === t.sct_1 && this.tct_1 === t.tct_1 && this.uct_1 === t.uct_1;
                    }),
                    (hc(dt).vcu = function (c, t) {
                        var _ = ft(this, c, t);
                        (this.yct_1 = (t - 1) | 0), this.vct_1.gct(_), (this.xct_1 = t);
                    }),
                    (hc(dt).wcu = function (c, t) {
                        var _;
                        this.yct_1 = (t - 1) | 0;
                        var n = Tc(0);
                        if (c < Nc(n)) _ = !0;
                        else {
                            var i = Tc(65535);
                            _ = c > Nc(i);
                        }
                        if (_) throw Lc("Invalid Char code: " + c);
                        var e = Bc(c);
                        this.vct_1.gct(Dc(e)), (this.xct_1 = t);
                    }),
                    (hc(dt).xcu = function (c, t) {
                        this.yct_1 = t;
                        var _ = ft(this, c, t);
                        st(this) && (_ = _.toLowerCase()), ot(this, _);
                    }),
                    (hc(dt).ycu = function (c) {
                        (this.yct_1 = c), ht(this, !1), (this.xct_1 = (c + 1) | 0);
                    }),
                    (hc(dt).zcu = function (c, t) {
                        this.yct_1 = t;
                        var _ = ft(this, c, t);
                        if ((st(this) && (_ = _.toLowerCase()), pt().scu_1.w(_) && pt().tcu_1.w(_) && gc(this.fcu_1), rt(this, _))) this.wct_1.pct_1 || "br" !== _ || (this.vct_1.ect("br"), this.vct_1.mct("br", Hc(), !0), this.vct_1.dct("br", !1));
                        else {
                            var n = this.ecu_1.e2(_);
                            if (-1 !== n) {
                                var i = (this.ecu_1.s() - n) | 0;
                                c: for (;;) {
                                    var e = i;
                                    if (((i = (e - 1) | 0), !(e > 0))) break c;
                                    var u = gc(this.ecu_1);
                                    this.vct_1.dct(u, !(0 === i));
                                }
                            } else this.wct_1.pct_1 || "p" !== _ || (ot(this, "p"), at(this, !0));
                        }
                        this.xct_1 = (t + 1) | 0;
                    }),
                    (hc(dt).acv = function (c) {
                        (this.yct_1 = c), this.wct_1.pct_1 || this.wct_1.uct_1 || !0 === Kc(this.fcu_1) ? (at(this, !1), (this.xct_1 = (c + 1) | 0)) : this.ycu(c);
                    }),
                    (hc(dt).bcv = function (c, t) {
                        this.xct_1 = c;
                        var _,
                            n = ft(this, c, t);
                        (_ = this.wct_1.sct_1 ? n.toLowerCase() : n), (this.bcu_1 = _);
                    }),
                    (hc(dt).ccv = function (c, t) {
                        this.ccu_1 = this.ccu_1 + ft(this, c, t);
                    }),
                    (hc(dt).dcv = function (c) {
                        var t,
                            _ = this.ccu_1,
                            n = Tc(0);
                        if (c < Nc(n)) t = !0;
                        else {
                            var i = Tc(65535);
                            t = c > Nc(i);
                        }
                        if (t) throw Lc("Invalid Char code: " + c);
                        var e = Bc(c);
                        this.ccu_1 = _ + Dc(e);
                    }),
                    (hc(dt).ecv = function (c, t) {
                        this.yct_1 = t;
                        var _ = this.bcu_1,
                            n = this.ccu_1,
                            i = c.y2_1;
                        this.vct_1.fct(_, n, 3 === i ? '"' : 2 === i ? "'" : null);
                        var e = this.dcu_1;
                        if (null == e);
                        else {
                            var u = this.bcu_1,
                                v = this.ccu_1;
                            e.u2(u, v);
                        }
                        this.ccu_1 = "";
                    }),
                    (hc(dt).fcv = function (c, t) {
                        this.yct_1 = t;
                        var _ = ft(this, c, t),
                            n = wt(this, _);
                        this.vct_1.lct(n, _), (this.xct_1 = (t + 1) | 0);
                    }),
                    (hc(dt).gcv = function (c, t) {
                        this.yct_1 = t;
                        var _ = ft(this, c, t),
                            n = wt(this, _);
                        this.vct_1.lct(n, _), (this.xct_1 = (t + 1) | 0);
                    }),
                    (hc(dt).hcv = function (c, t, _) {
                        (this.yct_1 = t), this.vct_1.hct(ft(this, c, (t - _) | 0)), this.vct_1.kct(), (this.xct_1 = (t + 1) | 0);
                    }),
                    (hc(dt).icv = function (c, t, _) {
                        this.yct_1 = t;
                        var n = ft(this, c, (t - _) | 0);
                        this.wct_1.pct_1 || this.wct_1.tct_1 ? (this.vct_1.ict(), this.vct_1.gct(n), this.vct_1.jct()) : (this.vct_1.hct("[CDATA[" + n + "]]"), this.vct_1.kct()), (this.xct_1 = (t + 1) | 0);
                    }),
                    (hc(dt).bct = function () {
                        this.yct_1 = this.xct_1;
                        var c = Vc(this.ecu_1),
                            t = c.f1_1,
                            _ = c.g1_1;
                        if (t <= _)
                            do {
                                var n = t;
                                t = (t + 1) | 0;
                                var i = n,
                                    e = (Ec(this.ecu_1) - i) | 0;
                                this.vct_1.dct(this.ecu_1.t(e), !0);
                            } while (n !== _);
                        this.vct_1.bct();
                    }),
                    (hc(dt).t6b = function (c) {
                        if (this.jcu_1) return this.vct_1.cct(Fc(".write() after done!")), $c;
                        this.gcu_1.k(c), this.kcu_1.tcv_1 && (this.kcu_1.t6b(c), (this.icu_1 = (this.icu_1 + 1) | 0));
                    }),
                    (hc(dt).xcv = function (c) {
                        if (this.jcu_1) return this.vct_1.cct(Fc(".end() after done!")), $c;
                        null == c || this.t6b(c), (this.jcu_1 = !0), this.kcu_1.z92();
                    }),
                    (hc(dt).ycv = function (c, t) {
                        var _;
                        return (c = c === wc ? null : c), t === wc ? (this.xcv(c), (_ = $c)) : (_ = t.xcv.call(this, c)), _;
                    }),
                    (hc(v_).ecw = function (c) {
                        return c === (gt(), l).bcw_1 || c === (gt(), a).bcw_1 || c === (gt(), h).bcw_1 || c === (gt(), w).bcw_1 || c === (gt(), f).bcw_1;
                    }),
                    (hc(v_).dcw = function (c) {
                        return c === a_().bcw_1 || c === m_().bcw_1 || this.ecw(c);
                    }),
                    (hc(v_).mcw = function (c) {
                        return (c >= (gt(), S).bcw_1 && c <= (gt(), T).bcw_1) || (c >= (gt(), I).bcw_1 && c <= (gt(), z).bcw_1);
                    }),
                    (hc(v_).ncw = function (c) {
                        return c >= (gt(), k).bcw_1 && c <= (gt(), q).bcw_1;
                    }),
                    (hc(T_).t6b = function (c) {
                        (this.ucv_1 = (this.ucv_1 + this.ncv_1.length) | 0), (this.ncv_1 = c), t_(this);
                    }),
                    (hc(T_).z92 = function () {
                        this.tcv_1 && __(this);
                    }),
                    (hc(tt).bct = function () {}),
                    (hc(tt).cct = function (c) {}),
                    (hc(tt).dct = function (c, t) {}),
                    (hc(tt).ect = function (c) {}),
                    (hc(tt).fct = function (c, t, _) {}),
                    (hc(tt).mct = function (c, t, _) {}),
                    (hc(tt).gct = function (c) {}),
                    (hc(tt).hct = function (c) {}),
                    (hc(tt).ict = function () {}),
                    (hc(tt).jct = function () {}),
                    (hc(tt).kct = function () {}),
                    (hc(tt).lct = function (c, t) {}),
                    (n = new tt()),
                    (rc = new v_()),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = _t),
                    (c.$_$.b = dt);
            })(c.exports, _(519039), _(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.f63569ea.js.map
