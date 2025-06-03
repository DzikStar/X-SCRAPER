(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        902821: (c, t, _) => {
            !(function (c, t, _) {
                "use strict";
                var u,
                    i,
                    n,
                    s,
                    e,
                    r,
                    h,
                    v,
                    o,
                    a,
                    f,
                    l,
                    w,
                    d,
                    b,
                    $,
                    p,
                    q,
                    k,
                    m,
                    g,
                    x,
                    y,
                    A,
                    C,
                    z,
                    j,
                    I,
                    S,
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
                    uc,
                    ic,
                    nc,
                    sc,
                    ec,
                    rc,
                    hc,
                    vc = Math.imul,
                    oc = t.$_$.xe,
                    ac = t.$_$.ud,
                    fc = t.$_$.g,
                    lc = t.$_$.ae,
                    wc = t.$_$.yd,
                    dc = t.$_$.vd,
                    bc = t.$_$.od,
                    $c = t.$_$.rj,
                    pc = t.$_$.p6,
                    qc = t.$_$.z9,
                    kc = t.$_$.za,
                    mc = t.$_$.d1,
                    gc = t.$_$.g9,
                    xc = t.$_$.xa,
                    yc = t.$_$.ej,
                    Ac = t.$_$.cb,
                    Cc = t.$_$.bb,
                    zc = t.$_$.fl,
                    jc = t.$_$.ga,
                    Ic = t.$_$.o1,
                    Sc = t.$_$.u,
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
                    Mc = t.$_$.vj,
                    Qc = t.$_$.k4,
                    Uc = t.$_$.h4,
                    Oc = t.$_$.c4,
                    Zc = t.$_$.kd,
                    Pc = t.$_$.ed,
                    Xc = _.$_$.a,
                    Gc = t.$_$.fd,
                    Rc = t.$_$.ng,
                    Jc = t.$_$.tk,
                    Wc = t.$_$.b4,
                    Yc = t.$_$.f4;
                function ct(c, t) {
                    (this.gcs_1 = t), (this.fcs_1 = c.hcs_1);
                }
                function tt() {}
                function _t() {
                    this.hcs_1 = u;
                }
                function ut() {}
                function it() {
                    (i = this), (this.vcs_1 = new st());
                }
                function nt() {
                    return null == i && new it(), i;
                }
                function st(c, t, _, u, i, n) {
                    nt(), (c = c !== fc && c), (t = t === fc || t), (_ = _ === fc ? !c : _), (u = u === fc ? !c : u), (i = i === fc ? c : i), (n = n === fc ? c : n), (this.wcs_1 = c), (this.xcs_1 = t), (this.ycs_1 = _), (this.zcs_1 = u), (this.act_1 = i), (this.bct_1 = n);
                }
                function et() {
                    if (h) return pc;
                    (h = !0), (n = new dt("NoValue", 0)), (s = new dt("Unquoted", 1)), (e = new dt("Single", 2)), (r = new dt("Double", 3));
                }
                function rt(c) {
                    return c.dct_1.ycs_1;
                }
                function ht(c, t) {
                    return !c.dct_1.wcs_1 && $t().yct_1.w(t);
                }
                function vt(c, t) {
                    (c.gct_1 = c.ect_1), (c.hct_1 = t);
                    var _ = $t().xct_1.r2(t);
                    if (!c.dct_1.wcs_1 && null != _)
                        c: for (;;) {
                            if (!(!c.lct_1.h() && _.w(qc(c.lct_1)))) break c;
                            var u = kc(c.lct_1);
                            c.cct_1.kcs(u, !0);
                        }
                    ht(c, t) || (c.lct_1.k(t), $t().zct_1.w(t) ? c.mct_1.k(!0) : $t().acu_1.w(t) && c.mct_1.k(!1)), c.cct_1.lcs(t), (c.kct_1 = mc());
                }
                function ot(c, t) {
                    c.ect_1 = c.gct_1;
                    var _ = c.kct_1;
                    null == _ || (c.cct_1.tcs(c.hct_1, _, t), (c.kct_1 = null)), ht(c, c.hct_1) && c.cct_1.kcs(c.hct_1, !0), (c.hct_1 = "");
                }
                function at(c, t) {
                    var _ = c.hct_1;
                    ot(c, t), c.lct_1.s() > 0 && c.lct_1.t((c.lct_1.s() - 1) | 0) === _ && (c.cct_1.kcs(_, !t), kc(c.lct_1));
                }
                function ft(c, t) {
                    var _ = $t().bcu_1.xd(t),
                        u = null == _ ? null : _.be(),
                        i = null == u ? null : u.i(),
                        n = null == i ? -1 : i,
                        s = n < 0 ? t : t.substring(0, n);
                    return rt(c) && (s = s.toLowerCase()), s;
                }
                function lt(c, t, _) {
                    for (; ((t - c.oct_1) | 0) >= gc(c.nct_1).length; ) wt(c);
                    for (var u = gc(c.nct_1), i = (t - c.oct_1) | 0, n = (_ - c.oct_1) | 0, s = u.substring(i, n); ((_ - c.oct_1) | 0) > gc(c.nct_1).length; ) {
                        wt(c);
                        var e = s,
                            r = gc(c.nct_1),
                            h = (_ - c.oct_1) | 0;
                        s = e + r.substring(0, h);
                    }
                    return s;
                }
                function wt(c) {
                    (c.oct_1 = (c.oct_1 + gc(c.nct_1).length) | 0), (c.pct_1 = (c.pct_1 - 1) | 0), xc(c.nct_1);
                }
                function dt(c, t) {
                    yc.call(this, c, t);
                }
                function bt() {
                    (v = this), (this.sct_1 = Ac(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.tct_1 = Cc("p")), (this.uct_1 = Ac(["thead", "tbody"])), (this.vct_1 = Ac(["dt", "dd"])), (this.wct_1 = Ac(["rt", "rp"])), (this.xct_1 = jc([zc("tr", Ac(["tr", "th", "td"])), zc("th", Cc("th")), zc("td", Ac(["thead", "th", "td"])), zc("body", Ac(["head", "link", "script"])), zc("li", Cc("li")), zc("p", this.tct_1), zc("h1", this.tct_1), zc("h2", this.tct_1), zc("h3", this.tct_1), zc("h4", this.tct_1), zc("h5", this.tct_1), zc("h6", this.tct_1), zc("select", this.sct_1), zc("input", this.sct_1), zc("output", this.sct_1), zc("button", this.sct_1), zc("datalist", this.sct_1), zc("textarea", this.sct_1), zc("option", Cc("option")), zc("optgroup", Ac(["optgroup", "option"])), zc("dd", this.vct_1), zc("dt", this.vct_1), zc("address", this.tct_1), zc("article", this.tct_1), zc("aside", this.tct_1), zc("blockquote", this.tct_1), zc("details", this.tct_1), zc("div", this.tct_1), zc("dl", this.tct_1), zc("fieldset", this.tct_1), zc("figcaption", this.tct_1), zc("figure", this.tct_1), zc("footer", this.tct_1), zc("form", this.tct_1), zc("header", this.tct_1), zc("hr", this.tct_1), zc("main", this.tct_1), zc("menu", this.tct_1), zc("nav", this.tct_1), zc("ol", this.tct_1), zc("pre", this.tct_1), zc("section", this.tct_1), zc("table", this.tct_1), zc("ul", this.tct_1), zc("rt", this.wct_1), zc("rp", this.wct_1), zc("tbody", this.uct_1), zc("tfoot", this.uct_1)])), (this.yct_1 = Ac(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.zct_1 = Ac(["math", "svg"])), (this.acu_1 = Ac(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.bcu_1 = Ic("\\s|/"));
                }
                function $t() {
                    return null == v && new bt(), v;
                }
                function pt() {
                    return et(), n;
                }
                function qt(c, t) {
                    $t(), (c = c === fc ? u : c), (t = t === fc ? nt().vcs_1 : t), (this.cct_1 = c), (this.dct_1 = t), (this.ect_1 = 0), (this.fct_1 = 0), (this.gct_1 = 0), (this.hct_1 = ""), (this.ict_1 = ""), (this.jct_1 = ""), (this.kct_1 = null);
                    this.lct_1 = Sc();
                    this.mct_1 = Sc();
                    (this.nct_1 = Sc()), (this.oct_1 = 0), (this.pct_1 = 0), (this.qct_1 = !1), (this.rct_1 = new T_(this.dct_1, this));
                }
                function kt() {
                    if (L) return pc;
                    (L = !0), (o = new u_("Tab", 0, 9)), (a = new u_("NewLine", 1, 10)), (f = new u_("FormFeed", 2, 12)), (l = new u_("CarriageReturn", 3, 13)), (w = new u_("Space", 4, 32)), (d = new u_("ExclamationMark", 5, 33)), new u_("Number", 6, 35), (b = new u_("Amp", 7, 38)), ($ = new u_("SingleQuote", 8, 39)), (p = new u_("DoubleQuote", 9, 34)), (q = new u_("Dash", 10, 45)), (k = new u_("Slash", 11, 47)), (m = new u_("Zero", 12, 48)), (g = new u_("Nine", 13, 57)), (x = new u_("Semi", 14, 59)), (y = new u_("Lt", 15, 60)), (A = new u_("Eq", 16, 61)), (C = new u_("Gt", 17, 62)), (z = new u_("QuestionMark", 18, 63)), (j = new u_("UpperA", 19, 65)), (I = new u_("LowerA", 20, 97)), new u_("UpperF", 21, 70), new u_("LowerF", 22, 102), (S = new u_("UpperZ", 23, 90)), (T = new u_("LowerZ", 24, 122)), new u_("LowerX", 25, 120), (N = new u_("OpeningSquareBracket", 26, 91));
                }
                function mt() {
                    if (ec) return pc;
                    (ec = !0), (B = new i_("Text", 0)), (D = new i_("BeforeTagName", 1)), (H = new i_("InTagName", 2)), (K = new i_("InSelfClosingTag", 3)), (V = new i_("BeforeClosingTagName", 4)), (E = new i_("InClosingTagName", 5)), (F = new i_("AfterClosingTagName", 6)), (M = new i_("BeforeAttributeName", 7)), (Q = new i_("InAttributeName", 8)), (U = new i_("AfterAttributeName", 9)), (O = new i_("BeforeAttributeValue", 10)), (Z = new i_("InAttributeValueDq", 11)), (P = new i_("InAttributeValueSq", 12)), (X = new i_("InAttributeValueNq", 13)), (G = new i_("BeforeDeclaration", 14)), (R = new i_("InDeclaration", 15)), (J = new i_("InProcessingInstruction", 16)), (W = new i_("BeforeComment", 17)), (Y = new i_("CDATASequence", 18)), (cc = new i_("InSpecialComment", 19)), (tc = new i_("InCommentLike", 20)), (_c = new i_("BeforeSpecialS", 21)), (uc = new i_("BeforeSpecialT", 22)), (ic = new i_("SpecialStartSequence", 23)), (nc = new i_("InSpecialTag", 24)), (sc = new i_("InEntity", 25));
                }
                function gt(c, t) {
                    t === l_().icv_1 || (!c.scu_1 && Ct(c, l_().icv_1)) ? (c.wcu_1 > c.vcu_1 && c.qcu_1.ccu(c.vcu_1, c.wcu_1), (c.tcu_1 = (mt(), D)), (c.vcu_1 = c.wcu_1)) : c.scu_1 && t === r_().icv_1 && Wt(c);
                }
                function xt(c, t) {
                    var _ = c.ccv_1;
                    if (null == (null == _ ? null : new Mc(_))) return pc;
                    var u,
                        i = _,
                        n = c.dcv_1 === Qc(i);
                    if (n) u = hc.kcv(t);
                    else {
                        var s = 32 | t,
                            e = Uc(i, c.dcv_1);
                        u = s === (255 & Oc(e));
                    }
                    if (u) {
                        if (!n) return (c.dcv_1 = (c.dcv_1 + 1) | 0), pc;
                    } else c.zcu_1 = !1;
                    (c.dcv_1 = 0), (c.tcu_1 = $_()), Tt(c, t);
                }
                function yt(c, t) {
                    var _ = c.ccv_1;
                    if (null == (null == _ ? null : new Mc(_))) return pc;
                    var u = _;
                    if (c.dcv_1 === Qc(u)) {
                        if (t === d_().icv_1 || hc.lcv(t)) {
                            var i = (c.wcu_1 - Qc(u)) | 0;
                            if (c.vcu_1 < i) {
                                var n = c.wcu_1;
                                (c.wcu_1 = i), c.qcu_1.ccu(c.vcu_1, i), (c.wcu_1 = n);
                            }
                            return (c.zcu_1 = !1), (c.vcu_1 = (i + 2) | 0), Lt(c, t), pc;
                        }
                        c.dcv_1 = 0;
                    }
                    var s = 32 | t,
                        e = Uc(u, c.dcv_1);
                    s === (255 & Oc(e)) ? (c.dcv_1 = (c.dcv_1 + 1) | 0) : 0 === c.dcv_1 ? (Zc(u, s_().rcv_1) ? c.scu_1 && t === r_().icv_1 && Wt(c) : Ct(c, l_().icv_1) && (c.dcv_1 = 1)) : (c.dcv_1 = t === l_().icv_1 ? 1 : 0);
                }
                function At(c, t) {
                    var _ = Uc(s_().mcv_1, c.dcv_1);
                    t === (255 & Oc(_)) ? ((c.dcv_1 = (c.dcv_1 + 1) | 0), c.dcv_1 === Qc(s_().mcv_1) && ((c.tcu_1 = j_()), (c.ccv_1 = s_().ncv_1), (c.dcv_1 = 0), (c.vcu_1 = (c.wcu_1 + 1) | 0))) : ((c.dcv_1 = 0), (c.tcu_1 = z_()), Zt(c, t));
                }
                function Ct(c, t) {
                    for (; c.wcu_1 < ((c.ucu_1.length + c.bcv_1) | 0); ) {
                        var _ = Pc(c.ucu_1, (c.wcu_1 - c.bcv_1) | 0);
                        if (Nc(_) === t) return !0;
                        c.wcu_1 = (c.wcu_1 + 1) | 0;
                    }
                    return (c.wcu_1 = (((c.ucu_1.length + c.bcv_1) | 0) - 1) | 0), !1;
                }
                function zt(c, t) {
                    var _ = c.ccv_1;
                    if (null == (null == _ ? null : new Mc(_))) return pc;
                    var u = _,
                        i = Uc(u, c.dcv_1);
                    if (t === (255 & Oc(i))) (c.dcv_1 = (c.dcv_1 + 1) | 0), c.dcv_1 === Qc(u) && (Zc(u, s_().ncv_1) ? c.qcu_1.pcu(c.vcu_1, c.wcu_1, 2) : c.qcu_1.ocu(c.vcu_1, c.wcu_1, 2), (c.dcv_1 = 0), (c.vcu_1 = (c.wcu_1 + 1) | 0), (c.tcu_1 = b_()));
                    else if (0 === c.dcv_1) {
                        var n = Uc(u, 0);
                        Ct(c, 255 & Oc(n)) && (c.dcv_1 = 1);
                    } else {
                        var s = Uc(u, (c.dcv_1 - 1) | 0);
                        t !== (255 & Oc(s)) && (c.dcv_1 = 0);
                    }
                }
                function jt(c, t) {
                    return c.rcu_1 ? !hc.kcv(t) : hc.tcv(t);
                }
                function It(c, t, _) {
                    (c.zcu_1 = !0), (c.ccv_1 = t), (c.dcv_1 = _), (c.tcu_1 = (mt(), ic));
                }
                function St(c, t) {
                    if (t === (kt(), d).icv_1) (c.tcu_1 = (mt(), G)), (c.vcu_1 = (c.wcu_1 + 1) | 0);
                    else if (t === (kt(), z).icv_1) (c.tcu_1 = (mt(), J)), (c.vcu_1 = (c.wcu_1 + 1) | 0);
                    else if (jt(c, t)) {
                        var _ = 32 | t;
                        if (((c.vcu_1 = c.wcu_1), c.rcu_1)) c.tcu_1 = $_();
                        else {
                            var u = Uc(s_().pcv_1, 2);
                            if (_ === (255 & Oc(u))) c.tcu_1 = (mt(), _c);
                            else {
                                var i = Uc(s_().rcv_1, 2);
                                _ === (255 & Oc(i)) ? (c.tcu_1 = (mt(), uc)) : (c.tcu_1 = $_());
                            }
                        }
                    } else t === a_().icv_1 ? (c.tcu_1 = (mt(), V)) : ((c.tcu_1 = b_()), gt(c, t));
                }
                function Tt(c, t) {
                    hc.kcv(t) && (c.qcu_1.ecu(c.vcu_1, c.wcu_1), (c.vcu_1 = -1), (c.tcu_1 = k_()), Dt(c, t));
                }
                function Nt(c, t) {
                    if (!hc.lcv(t))
                        if (t === d_().icv_1) c.tcu_1 = b_();
                        else {
                            var _,
                                u = c;
                            jt(c, t) ? (_ = q_()) : (mt(), (_ = cc)), (u.tcu_1 = _), (c.vcu_1 = c.wcu_1);
                        }
                }
                function Lt(c, t) {
                    (t === d_().icv_1 || hc.lcv(t)) && (c.qcu_1.gcu(c.vcu_1, c.wcu_1), (c.vcu_1 = -1), (c.tcu_1 = (mt(), F)), Bt(c, t));
                }
                function Bt(c, t) {
                    (t === d_().icv_1 || Ct(c, d_().icv_1)) && ((c.tcu_1 = b_()), (c.vcu_1 = (c.wcu_1 + 1) | 0));
                }
                function Dt(c, t) {
                    t === d_().icv_1 ? (c.qcu_1.fcu(c.wcu_1), c.zcu_1 ? ((c.tcu_1 = I_()), (c.dcv_1 = 0)) : (c.tcu_1 = b_()), (c.vcu_1 = (c.wcu_1 + 1) | 0)) : t === a_().icv_1 ? (c.tcu_1 = p_()) : hc.lcv(t) || ((c.tcu_1 = m_()), (c.vcu_1 = c.wcu_1));
                }
                function Ht(c, t) {
                    t === d_().icv_1 ? (c.qcu_1.hcu(c.wcu_1), (c.tcu_1 = b_()), (c.vcu_1 = (c.wcu_1 + 1) | 0), (c.zcu_1 = !1)) : hc.lcv(t) || ((c.tcu_1 = k_()), Dt(c, t));
                }
                function Kt(c, t) {
                    (t === w_().icv_1 || hc.kcv(t)) && (c.qcu_1.icu(c.vcu_1, c.wcu_1), (c.vcu_1 = c.wcu_1), (c.tcu_1 = g_()), Vt(c, t));
                }
                function Vt(c, t) {
                    t === w_().icv_1 ? (c.tcu_1 = x_()) : t === a_().icv_1 || t === d_().icv_1 ? (c.qcu_1.lcu(pt(), c.vcu_1), (c.vcu_1 = -1), (c.tcu_1 = k_()), Dt(c, t)) : hc.lcv(t) || (c.qcu_1.lcu(pt(), c.vcu_1), (c.tcu_1 = m_()), (c.vcu_1 = c.wcu_1));
                }
                function Et(c, t) {
                    t === v_().icv_1 ? ((c.tcu_1 = y_()), (c.vcu_1 = (c.wcu_1 + 1) | 0)) : t === h_().icv_1 ? ((c.tcu_1 = A_()), (c.vcu_1 = (c.wcu_1 + 1) | 0)) : hc.lcv(t) || ((c.vcu_1 = c.wcu_1), (c.tcu_1 = C_()), Ut(c, t));
                }
                function Ft(c, t, _) {
                    t === _ || (!c.scu_1 && Ct(c, _)) ? (c.qcu_1.jcu(c.vcu_1, c.wcu_1), (c.vcu_1 = -1), c.qcu_1.lcu(_ === v_().icv_1 ? (et(), r) : (et(), e), (c.wcu_1 + 1) | 0), (c.tcu_1 = k_())) : c.scu_1 && t === r_().icv_1 && Wt(c);
                }
                function Mt(c, t) {
                    Ft(c, t, v_().icv_1);
                }
                function Qt(c, t) {
                    Ft(c, t, h_().icv_1);
                }
                function Ut(c, t) {
                    hc.lcv(t) || t === d_().icv_1 ? (c.qcu_1.jcu(c.vcu_1, c.wcu_1), (c.vcu_1 = -1), c.qcu_1.lcu((et(), s), c.wcu_1), (c.tcu_1 = k_()), Dt(c, t)) : c.scu_1 && t === r_().icv_1 && Wt(c);
                }
                function Ot(c, t) {
                    t === (kt(), N).icv_1 ? ((c.tcu_1 = (mt(), Y)), (c.dcv_1 = 0)) : (c.tcu_1 = t === o_().icv_1 ? (mt(), W) : z_());
                }
                function Zt(c, t) {
                    (t === d_().icv_1 || Ct(c, d_().icv_1)) && (c.qcu_1.mcu(c.vcu_1, c.wcu_1), (c.tcu_1 = b_()), (c.vcu_1 = (c.wcu_1 + 1) | 0));
                }
                function Pt(c, t) {
                    (t === d_().icv_1 || Ct(c, d_().icv_1)) && (c.qcu_1.ncu(c.vcu_1, c.wcu_1), (c.tcu_1 = b_()), (c.vcu_1 = (c.wcu_1 + 1) | 0));
                }
                function Xt(c, t) {
                    t === o_().icv_1 ? ((c.tcu_1 = j_()), (c.ccv_1 = s_().ocv_1), (c.dcv_1 = 2), (c.vcu_1 = (c.wcu_1 + 1) | 0)) : (c.tcu_1 = z_());
                }
                function Gt(c, t) {
                    var _ = c.ccv_1;
                    if (null == (null == _ ? null : new Mc(_)));
                    else {
                        var u = (null == _ ? null : new Mc(_)).fq_1;
                        if (t === d_().icv_1) c.dcv_1 === ((Qc(u) - 1) | 0) && (c.qcu_1.ocu(c.vcu_1, (1 + ((c.wcu_1 - Qc(u)) | 0)) | 0, 3), (c.vcu_1 = -1), (c.tcu_1 = b_()));
                        else {
                            var i = Uc(u, c.dcv_1);
                            t !== (255 & Oc(i)) && ((c.tcu_1 = $_()), Tt(c, t));
                        }
                    }
                }
                function Rt(c, t) {
                    var _ = 32 | t,
                        u = Uc(s_().pcv_1, 3);
                    if (_ === (255 & Oc(u))) It(c, s_().pcv_1, 4);
                    else {
                        var i = Uc(s_().qcv_1, 3);
                        _ === (255 & Oc(i)) ? It(c, s_().qcv_1, 4) : ((c.tcu_1 = $_()), Tt(c, t));
                    }
                }
                function Jt(c, t) {
                    var _ = 32 | t,
                        u = Uc(s_().rcv_1, 3);
                    if (_ === (255 & Oc(u))) It(c, s_().rcv_1, 4);
                    else {
                        var i = Uc(s_().scv_1, 3);
                        _ === (255 & Oc(i)) ? It(c, s_().scv_1, 4) : ((c.tcu_1 = $_()), Tt(c, t));
                    }
                }
                function Wt(c) {
                    (c.ycu_1 = c.tcu_1), (c.tcu_1 = S_()), (c.xcu_1 = c.wcu_1);
                }
                function Yt(c, t) {
                    if (t === f_().icv_1) {
                        var _ = Xc(),
                            u = c.ucu_1,
                            i = (c.xcu_1 - c.bcv_1) | 0,
                            n = (1 + ((c.wcu_1 - c.bcv_1) | 0)) | 0,
                            s = u.substring(i, n),
                            e = _.scr(s);
                        if (((c.tcu_1 = c.ycu_1), 0 === Gc(e))) c.wcu_1 = c.xcu_1;
                        else {
                            var r = Rc(e);
                            !(function (c, t, _) {
                                c.ycu_1.equals(b_()) || c.ycu_1.equals(I_()) ? (c.vcu_1 < c.xcu_1 && c.qcu_1.ccu(c.vcu_1, c.xcu_1), (c.vcu_1 = (c.xcu_1 + _) | 0), (c.wcu_1 = (c.vcu_1 - 1) | 0), c.qcu_1.dcu(t, c.vcu_1)) : (c.vcu_1 < c.xcu_1 && c.qcu_1.jcu(c.vcu_1, c.xcu_1), (c.vcu_1 = (c.xcu_1 + _) | 0), (c.wcu_1 = (c.vcu_1 - 1) | 0), c.qcu_1.kcu(t));
                            })(c, Nc(r), (((c.wcu_1 + 1) | 0) - c.xcu_1) | 0);
                        }
                    }
                    (((((c.wcu_1 + 1) | 0) - c.xcu_1) | 0) > 33 ||
                        !(function (c, t) {
                            return hc.tcv(t) || hc.ucv(t) || t === f_().icv_1;
                        })(0, t)) &&
                        ((c.tcu_1 = c.ycu_1), (c.wcu_1 = c.xcu_1));
                }
                function c_(c) {
                    return c.wcu_1 < ((c.ucu_1.length + c.bcv_1) | 0) && c.acv_1;
                }
                function t_(c) {
                    for (; c_(c); ) {
                        var t = Pc(c.ucu_1, (c.wcu_1 - c.bcv_1) | 0),
                            _ = Nc(t);
                        switch (c.tcu_1.y2_1) {
                            case 0:
                                gt(c, _);
                                break;
                            case 23:
                                xt(c, _);
                                break;
                            case 24:
                                yt(c, _);
                                break;
                            case 18:
                                At(c, _);
                                break;
                            case 11:
                                Mt(c, _);
                                break;
                            case 8:
                                Kt(c, _);
                                break;
                            case 20:
                                zt(c, _);
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
                                St(c, _);
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
                        c.wcu_1 = (c.wcu_1 + 1) | 0;
                    }
                    !(function (c) {
                        c.acv_1 && c.vcu_1 !== c.wcu_1 && (c.tcu_1.equals(b_()) || (c.tcu_1.equals(I_()) && 0 === c.dcv_1) ? (c.qcu_1.ccu(c.vcu_1, c.wcu_1), (c.vcu_1 = c.wcu_1)) : (c.tcu_1.equals(y_()) || c.tcu_1.equals(A_()) || c.tcu_1.equals(C_())) && (c.qcu_1.jcu(c.vcu_1, c.wcu_1), (c.vcu_1 = c.wcu_1)));
                    })(c);
                }
                function __(c) {
                    c.tcu_1.equals(S_()) && (c.tcu_1 = c.ycu_1),
                        (function (c) {
                            var t = (c.ucu_1.length + c.bcv_1) | 0;
                            if (c.vcu_1 >= t) return pc;
                            if (c.tcu_1.equals(j_())) {
                                var _ = c.ccv_1;
                                Zc(null == _ ? null : new Mc(_), new Mc(s_().ncv_1)) ? c.qcu_1.pcu(c.vcu_1, t, 0) : c.qcu_1.ocu(c.vcu_1, t, 0);
                            } else c.tcu_1.equals($_()) || c.tcu_1.equals(k_()) || c.tcu_1.equals(x_()) || c.tcu_1.equals(g_()) || c.tcu_1.equals(m_()) || c.tcu_1.equals(A_()) || c.tcu_1.equals(y_()) || c.tcu_1.equals(C_()) || c.tcu_1.equals(q_()) || c.tcu_1.equals(p_()) || c.qcu_1.ccu(c.vcu_1, t);
                        })(c),
                        c.qcu_1.ics();
                }
                function u_(c, t, _) {
                    yc.call(this, c, t), (this.icv_1 = _);
                }
                function i_(c, t) {
                    yc.call(this, c, t);
                }
                function n_() {
                    rc = this;
                    this.mcv_1 = Yc(new Int8Array([Wc(67), Wc(68), Wc(65), Wc(84), Wc(65), Wc(91)]));
                    this.ncv_1 = Yc(new Int8Array([Wc(93), Wc(93), Wc(62)]));
                    this.ocv_1 = Yc(new Int8Array([Wc(45), Wc(45), Wc(62)]));
                    this.pcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(99), Wc(114), Wc(105), Wc(112), Wc(116)]));
                    this.qcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(116), Wc(121), Wc(108), Wc(101)]));
                    this.rcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(105), Wc(116), Wc(108), Wc(101)]));
                    this.scv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(101), Wc(120), Wc(116), Wc(97), Wc(114), Wc(101), Wc(97)]));
                }
                function s_() {
                    return null == rc && new n_(), rc;
                }
                function e_() {
                    this.jcv_1 = 33;
                }
                function r_() {
                    return kt(), b;
                }
                function h_() {
                    return kt(), $;
                }
                function v_() {
                    return kt(), p;
                }
                function o_() {
                    return kt(), q;
                }
                function a_() {
                    return kt(), k;
                }
                function f_() {
                    return kt(), x;
                }
                function l_() {
                    return kt(), y;
                }
                function w_() {
                    return kt(), A;
                }
                function d_() {
                    return kt(), C;
                }
                function b_() {
                    return mt(), B;
                }
                function $_() {
                    return mt(), H;
                }
                function p_() {
                    return mt(), K;
                }
                function q_() {
                    return mt(), E;
                }
                function k_() {
                    return mt(), M;
                }
                function m_() {
                    return mt(), Q;
                }
                function g_() {
                    return mt(), U;
                }
                function x_() {
                    return mt(), O;
                }
                function y_() {
                    return mt(), Z;
                }
                function A_() {
                    return mt(), P;
                }
                function C_() {
                    return mt(), X;
                }
                function z_() {
                    return mt(), R;
                }
                function j_() {
                    return mt(), tc;
                }
                function I_() {
                    return mt(), nc;
                }
                function S_() {
                    return mt(), sc;
                }
                function T_(c, t) {
                    (this.qcu_1 = t), (this.rcu_1 = c.wcs_1), (this.scu_1 = c.xcs_1), (this.tcu_1 = b_()), (this.ucu_1 = ""), (this.vcu_1 = 0), (this.wcu_1 = 0), (this.xcu_1 = 0), (this.ycu_1 = b_()), (this.zcu_1 = !1), (this.acv_1 = !0), (this.bcv_1 = 0), (this.ccv_1 = null), (this.dcv_1 = 0);
                }
                wc(ut, "KsoupHtmlHandler"),
                    ac(ct, fc, fc, fc, [ut]),
                    lc(tt, "Default", fc, fc, [ut]),
                    ac(_t, "Builder", _t),
                    dc(it),
                    ac(st, "KsoupHtmlOptions", st),
                    ac(dt, "QuoteType", fc, yc),
                    dc(bt),
                    ac(qt, "KsoupHtmlParser", qt),
                    ac(u_, "CharCodes", fc, yc),
                    ac(i_, "State", fc, yc),
                    lc(n_, "Sequences"),
                    dc(e_),
                    ac(T_, "KsoupTokenizer"),
                    (oc(ct).ics = function () {
                        this.fcs_1.ics();
                    }),
                    (oc(ct).jcs = function (c) {
                        this.fcs_1.jcs(c);
                    }),
                    (oc(ct).kcs = function (c, t) {
                        this.fcs_1.kcs(c, t);
                    }),
                    (oc(ct).lcs = function (c) {
                        this.fcs_1.lcs(c);
                    }),
                    (oc(ct).mcs = function (c, t, _) {
                        this.fcs_1.mcs(c, t, _);
                    }),
                    (oc(ct).ncs = function (c) {
                        this.fcs_1.ncs(c);
                    }),
                    (oc(ct).ocs = function (c) {
                        this.fcs_1.ocs(c);
                    }),
                    (oc(ct).pcs = function () {
                        this.fcs_1.pcs();
                    }),
                    (oc(ct).qcs = function () {
                        this.fcs_1.qcs();
                    }),
                    (oc(ct).rcs = function () {
                        this.fcs_1.rcs();
                    }),
                    (oc(ct).scs = function (c, t) {
                        this.fcs_1.scs(c, t);
                    }),
                    (oc(ct).tcs = function (c, t, _) {
                        this.gcs_1(c, t, _);
                    }),
                    (oc(_t).ucs = function (c) {
                        return (this.hcs_1 = new ct(this, c)), this;
                    }),
                    (oc(_t).lz = function () {
                        return this.hcs_1;
                    }),
                    (oc(st).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.wcs_1 + ", decodeEntities=" + this.xcs_1 + ", lowerCaseTags=" + this.ycs_1 + ", lowerCaseAttributeNames=" + this.zcs_1 + ", recognizeCDATA=" + this.act_1 + ", recognizeSelfClosing=" + this.bct_1 + ")";
                    }),
                    (oc(st).hashCode = function () {
                        var c = bc(this.wcs_1);
                        return (c = (vc(c, 31) + bc(this.xcs_1)) | 0), (c = (vc(c, 31) + bc(this.ycs_1)) | 0), (c = (vc(c, 31) + bc(this.zcs_1)) | 0), (c = (vc(c, 31) + bc(this.act_1)) | 0), (c = (vc(c, 31) + bc(this.bct_1)) | 0);
                    }),
                    (oc(st).equals = function (c) {
                        if (this === c) return !0;
                        if (!(c instanceof st)) return !1;
                        var t = c instanceof st ? c : $c();
                        return this.wcs_1 === t.wcs_1 && this.xcs_1 === t.xcs_1 && this.ycs_1 === t.ycs_1 && this.zcs_1 === t.zcs_1 && this.act_1 === t.act_1 && this.bct_1 === t.bct_1;
                    }),
                    (oc(qt).ccu = function (c, t) {
                        var _ = lt(this, c, t);
                        (this.fct_1 = (t - 1) | 0), this.cct_1.ncs(_), (this.ect_1 = t);
                    }),
                    (oc(qt).dcu = function (c, t) {
                        var _;
                        this.fct_1 = (t - 1) | 0;
                        var u = Tc(0);
                        if (c < Nc(u)) _ = !0;
                        else {
                            var i = Tc(65535);
                            _ = c > Nc(i);
                        }
                        if (_) throw Lc("Invalid Char code: " + c);
                        var n = Bc(c);
                        this.cct_1.ncs(Dc(n)), (this.ect_1 = t);
                    }),
                    (oc(qt).ecu = function (c, t) {
                        this.fct_1 = t;
                        var _ = lt(this, c, t);
                        rt(this) && (_ = _.toLowerCase()), vt(this, _);
                    }),
                    (oc(qt).fcu = function (c) {
                        (this.fct_1 = c), ot(this, !1), (this.ect_1 = (c + 1) | 0);
                    }),
                    (oc(qt).gcu = function (c, t) {
                        this.fct_1 = t;
                        var _ = lt(this, c, t);
                        if ((rt(this) && (_ = _.toLowerCase()), $t().zct_1.w(_) && $t().acu_1.w(_) && kc(this.mct_1), ht(this, _))) this.dct_1.wcs_1 || "br" !== _ || (this.cct_1.lcs("br"), this.cct_1.tcs("br", Hc(), !0), this.cct_1.kcs("br", !1));
                        else {
                            var u = this.lct_1.e2(_);
                            if (-1 !== u) {
                                var i = (this.lct_1.s() - u) | 0;
                                c: for (;;) {
                                    var n = i;
                                    if (((i = (n - 1) | 0), !(n > 0))) break c;
                                    var s = kc(this.lct_1);
                                    this.cct_1.kcs(s, !(0 === i));
                                }
                            } else this.dct_1.wcs_1 || "p" !== _ || (vt(this, "p"), at(this, !0));
                        }
                        this.ect_1 = (t + 1) | 0;
                    }),
                    (oc(qt).hcu = function (c) {
                        (this.fct_1 = c), this.dct_1.wcs_1 || this.dct_1.bct_1 || !0 === Kc(this.mct_1) ? (at(this, !1), (this.ect_1 = (c + 1) | 0)) : this.fcu(c);
                    }),
                    (oc(qt).icu = function (c, t) {
                        this.ect_1 = c;
                        var _,
                            u = lt(this, c, t);
                        (_ = this.dct_1.zcs_1 ? u.toLowerCase() : u), (this.ict_1 = _);
                    }),
                    (oc(qt).jcu = function (c, t) {
                        this.jct_1 = this.jct_1 + lt(this, c, t);
                    }),
                    (oc(qt).kcu = function (c) {
                        var t,
                            _ = this.jct_1,
                            u = Tc(0);
                        if (c < Nc(u)) t = !0;
                        else {
                            var i = Tc(65535);
                            t = c > Nc(i);
                        }
                        if (t) throw Lc("Invalid Char code: " + c);
                        var n = Bc(c);
                        this.jct_1 = _ + Dc(n);
                    }),
                    (oc(qt).lcu = function (c, t) {
                        this.fct_1 = t;
                        var _ = this.ict_1,
                            u = this.jct_1,
                            i = c.y2_1;
                        this.cct_1.mcs(_, u, 3 === i ? '"' : 2 === i ? "'" : null);
                        var n = this.kct_1;
                        if (null == n);
                        else {
                            var s = this.ict_1,
                                e = this.jct_1;
                            n.u2(s, e);
                        }
                        this.jct_1 = "";
                    }),
                    (oc(qt).mcu = function (c, t) {
                        this.fct_1 = t;
                        var _ = lt(this, c, t),
                            u = ft(this, _);
                        this.cct_1.scs(u, _), (this.ect_1 = (t + 1) | 0);
                    }),
                    (oc(qt).ncu = function (c, t) {
                        this.fct_1 = t;
                        var _ = lt(this, c, t),
                            u = ft(this, _);
                        this.cct_1.scs(u, _), (this.ect_1 = (t + 1) | 0);
                    }),
                    (oc(qt).ocu = function (c, t, _) {
                        (this.fct_1 = t), this.cct_1.ocs(lt(this, c, (t - _) | 0)), this.cct_1.rcs(), (this.ect_1 = (t + 1) | 0);
                    }),
                    (oc(qt).pcu = function (c, t, _) {
                        this.fct_1 = t;
                        var u = lt(this, c, (t - _) | 0);
                        this.dct_1.wcs_1 || this.dct_1.act_1 ? (this.cct_1.pcs(), this.cct_1.ncs(u), this.cct_1.qcs()) : (this.cct_1.ocs("[CDATA[" + u + "]]"), this.cct_1.rcs()), (this.ect_1 = (t + 1) | 0);
                    }),
                    (oc(qt).ics = function () {
                        this.fct_1 = this.ect_1;
                        var c = Vc(this.lct_1),
                            t = c.f1_1,
                            _ = c.g1_1;
                        if (t <= _)
                            do {
                                var u = t;
                                t = (t + 1) | 0;
                                var i = u,
                                    n = (Ec(this.lct_1) - i) | 0;
                                this.cct_1.kcs(this.lct_1.t(n), !0);
                            } while (u !== _);
                        this.cct_1.ics();
                    }),
                    (oc(qt).t6b = function (c) {
                        if (this.qct_1) return this.cct_1.jcs(Fc(".write() after done!")), pc;
                        this.nct_1.k(c), this.rct_1.acv_1 && (this.rct_1.t6b(c), (this.pct_1 = (this.pct_1 + 1) | 0));
                    }),
                    (oc(qt).ecv = function (c) {
                        if (this.qct_1) return this.cct_1.jcs(Fc(".end() after done!")), pc;
                        null == c || this.t6b(c), (this.qct_1 = !0), this.rct_1.z92();
                    }),
                    (oc(qt).fcv = function (c, t) {
                        var _;
                        return (c = c === fc ? null : c), t === fc ? (this.ecv(c), (_ = pc)) : (_ = t.ecv.call(this, c)), _;
                    }),
                    (oc(e_).lcv = function (c) {
                        return c === (kt(), w).icv_1 || c === (kt(), a).icv_1 || c === (kt(), o).icv_1 || c === (kt(), f).icv_1 || c === (kt(), l).icv_1;
                    }),
                    (oc(e_).kcv = function (c) {
                        return c === a_().icv_1 || c === d_().icv_1 || this.lcv(c);
                    }),
                    (oc(e_).tcv = function (c) {
                        return (c >= (kt(), I).icv_1 && c <= (kt(), T).icv_1) || (c >= (kt(), j).icv_1 && c <= (kt(), S).icv_1);
                    }),
                    (oc(e_).ucv = function (c) {
                        return c >= (kt(), m).icv_1 && c <= (kt(), g).icv_1;
                    }),
                    (oc(T_).t6b = function (c) {
                        (this.bcv_1 = (this.bcv_1 + this.ucu_1.length) | 0), (this.ucu_1 = c), t_(this);
                    }),
                    (oc(T_).z92 = function () {
                        this.acv_1 && __(this);
                    }),
                    (oc(tt).ics = function () {}),
                    (oc(tt).jcs = function (c) {}),
                    (oc(tt).kcs = function (c, t) {}),
                    (oc(tt).lcs = function (c) {}),
                    (oc(tt).mcs = function (c, t, _) {}),
                    (oc(tt).tcs = function (c, t, _) {}),
                    (oc(tt).ncs = function (c) {}),
                    (oc(tt).ocs = function (c) {}),
                    (oc(tt).pcs = function () {}),
                    (oc(tt).qcs = function () {}),
                    (oc(tt).rcs = function () {}),
                    (oc(tt).scs = function (c, t) {}),
                    (u = new tt()),
                    (hc = new e_()),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = _t),
                    (c.$_$.b = qt);
            })(c.exports, _(519039), _(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.6c76703a.js.map
