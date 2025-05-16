(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        902821: (c, t, _) => {
            !(function (c, t, _) {
                "use strict";
                var u,
                    s,
                    n,
                    i,
                    e,
                    h,
                    r,
                    v,
                    o,
                    a,
                    f,
                    l,
                    w,
                    b,
                    $,
                    p,
                    k,
                    d,
                    m,
                    g,
                    q,
                    y,
                    x,
                    j,
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
                    uc,
                    sc,
                    nc,
                    ic,
                    ec,
                    hc,
                    rc,
                    vc = Math.imul,
                    oc = t.$_$.ue,
                    ac = t.$_$.rd,
                    fc = t.$_$.g,
                    lc = t.$_$.xd,
                    wc = t.$_$.vd,
                    bc = t.$_$.sd,
                    $c = t.$_$.md,
                    pc = t.$_$.lj,
                    kc = t.$_$.o6,
                    dc = t.$_$.x9,
                    mc = t.$_$.xa,
                    gc = t.$_$.d1,
                    qc = t.$_$.f9,
                    yc = t.$_$.va,
                    xc = t.$_$.yi,
                    jc = t.$_$.ab,
                    Ac = t.$_$.za,
                    Cc = t.$_$.yk,
                    Ic = t.$_$.ea,
                    Sc = t.$_$.o1,
                    zc = t.$_$.u,
                    Tc = t.$_$.o3,
                    Nc = t.$_$.u3,
                    Lc = t.$_$.h2,
                    Bc = t.$_$.pe,
                    Dc = t.$_$.v3,
                    Hc = t.$_$.a9,
                    Kc = t.$_$.w9,
                    Vc = t.$_$.n9,
                    Ec = t.$_$.t9,
                    Fc = t.$_$.z1,
                    Mc = t.$_$.oj,
                    Qc = t.$_$.j4,
                    Uc = t.$_$.g4,
                    Oc = t.$_$.b4,
                    Zc = t.$_$.id,
                    Pc = t.$_$.cd,
                    Xc = _.$_$.a,
                    Gc = t.$_$.dd,
                    Rc = t.$_$.hg,
                    Jc = t.$_$.mk,
                    Wc = t.$_$.a4,
                    Yc = t.$_$.e4;
                function ct(c, t) {
                    (this.fcs_1 = t), (this.ecs_1 = c.gcs_1);
                }
                function tt() {}
                function _t() {
                    this.gcs_1 = u;
                }
                function ut() {}
                function st() {
                    (s = this), (this.ucs_1 = new it());
                }
                function nt() {
                    return null == s && new st(), s;
                }
                function it(c, t, _, u, s, n) {
                    nt(), (c = c !== fc && c), (t = t === fc || t), (_ = _ === fc ? !c : _), (u = u === fc ? !c : u), (s = s === fc ? c : s), (n = n === fc ? c : n), (this.vcs_1 = c), (this.wcs_1 = t), (this.xcs_1 = _), (this.ycs_1 = u), (this.zcs_1 = s), (this.act_1 = n);
                }
                function et() {
                    if (r) return kc;
                    (r = !0), (n = new bt("NoValue", 0)), (i = new bt("Unquoted", 1)), (e = new bt("Single", 2)), (h = new bt("Double", 3));
                }
                function ht(c) {
                    return c.cct_1.xcs_1;
                }
                function rt(c, t) {
                    return !c.cct_1.vcs_1 && pt().xct_1.w(t);
                }
                function vt(c, t) {
                    (c.fct_1 = c.dct_1), (c.gct_1 = t);
                    var _ = pt().wct_1.r2(t);
                    if (!c.cct_1.vcs_1 && null != _)
                        c: for (;;) {
                            if (!(!c.kct_1.h() && _.w(dc(c.kct_1)))) break c;
                            var u = mc(c.kct_1);
                            c.bct_1.jcs(u, !0);
                        }
                    rt(c, t) || (c.kct_1.k(t), pt().yct_1.w(t) ? c.lct_1.k(!0) : pt().zct_1.w(t) && c.lct_1.k(!1)), c.bct_1.kcs(t), (c.jct_1 = gc());
                }
                function ot(c, t) {
                    c.dct_1 = c.fct_1;
                    var _ = c.jct_1;
                    null == _ || (c.bct_1.scs(c.gct_1, _, t), (c.jct_1 = null)), rt(c, c.gct_1) && c.bct_1.jcs(c.gct_1, !0), (c.gct_1 = "");
                }
                function at(c, t) {
                    var _ = c.gct_1;
                    ot(c, t), c.kct_1.s() > 0 && c.kct_1.t((c.kct_1.s() - 1) | 0) === _ && (c.bct_1.jcs(_, !t), mc(c.kct_1));
                }
                function ft(c, t) {
                    var _ = pt().acu_1.xd(t),
                        u = null == _ ? null : _.be(),
                        s = null == u ? null : u.i(),
                        n = null == s ? -1 : s,
                        i = n < 0 ? t : t.substring(0, n);
                    return ht(c) && (i = i.toLowerCase()), i;
                }
                function lt(c, t, _) {
                    for (; ((t - c.nct_1) | 0) >= qc(c.mct_1).length; ) wt(c);
                    for (var u = qc(c.mct_1), s = (t - c.nct_1) | 0, n = (_ - c.nct_1) | 0, i = u.substring(s, n); ((_ - c.nct_1) | 0) > qc(c.mct_1).length; ) {
                        wt(c);
                        var e = i,
                            h = qc(c.mct_1),
                            r = (_ - c.nct_1) | 0;
                        i = e + h.substring(0, r);
                    }
                    return i;
                }
                function wt(c) {
                    (c.nct_1 = (c.nct_1 + qc(c.mct_1).length) | 0), (c.oct_1 = (c.oct_1 - 1) | 0), yc(c.mct_1);
                }
                function bt(c, t) {
                    xc.call(this, c, t);
                }
                function $t() {
                    (v = this), (this.rct_1 = jc(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.sct_1 = Ac("p")), (this.tct_1 = jc(["thead", "tbody"])), (this.uct_1 = jc(["dt", "dd"])), (this.vct_1 = jc(["rt", "rp"])), (this.wct_1 = Ic([Cc("tr", jc(["tr", "th", "td"])), Cc("th", Ac("th")), Cc("td", jc(["thead", "th", "td"])), Cc("body", jc(["head", "link", "script"])), Cc("li", Ac("li")), Cc("p", this.sct_1), Cc("h1", this.sct_1), Cc("h2", this.sct_1), Cc("h3", this.sct_1), Cc("h4", this.sct_1), Cc("h5", this.sct_1), Cc("h6", this.sct_1), Cc("select", this.rct_1), Cc("input", this.rct_1), Cc("output", this.rct_1), Cc("button", this.rct_1), Cc("datalist", this.rct_1), Cc("textarea", this.rct_1), Cc("option", Ac("option")), Cc("optgroup", jc(["optgroup", "option"])), Cc("dd", this.uct_1), Cc("dt", this.uct_1), Cc("address", this.sct_1), Cc("article", this.sct_1), Cc("aside", this.sct_1), Cc("blockquote", this.sct_1), Cc("details", this.sct_1), Cc("div", this.sct_1), Cc("dl", this.sct_1), Cc("fieldset", this.sct_1), Cc("figcaption", this.sct_1), Cc("figure", this.sct_1), Cc("footer", this.sct_1), Cc("form", this.sct_1), Cc("header", this.sct_1), Cc("hr", this.sct_1), Cc("main", this.sct_1), Cc("menu", this.sct_1), Cc("nav", this.sct_1), Cc("ol", this.sct_1), Cc("pre", this.sct_1), Cc("section", this.sct_1), Cc("table", this.sct_1), Cc("ul", this.sct_1), Cc("rt", this.vct_1), Cc("rp", this.vct_1), Cc("tbody", this.tct_1), Cc("tfoot", this.tct_1)])), (this.xct_1 = jc(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.yct_1 = jc(["math", "svg"])), (this.zct_1 = jc(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.acu_1 = Sc("\\s|/"));
                }
                function pt() {
                    return null == v && new $t(), v;
                }
                function kt() {
                    return et(), n;
                }
                function dt(c, t) {
                    pt(), (c = c === fc ? u : c), (t = t === fc ? nt().ucs_1 : t), (this.bct_1 = c), (this.cct_1 = t), (this.dct_1 = 0), (this.ect_1 = 0), (this.fct_1 = 0), (this.gct_1 = ""), (this.hct_1 = ""), (this.ict_1 = ""), (this.jct_1 = null);
                    this.kct_1 = zc();
                    this.lct_1 = zc();
                    (this.mct_1 = zc()), (this.nct_1 = 0), (this.oct_1 = 0), (this.pct_1 = !1), (this.qct_1 = new T_(this.cct_1, this));
                }
                function mt() {
                    if (L) return kc;
                    (L = !0), (o = new u_("Tab", 0, 9)), (a = new u_("NewLine", 1, 10)), (f = new u_("FormFeed", 2, 12)), (l = new u_("CarriageReturn", 3, 13)), (w = new u_("Space", 4, 32)), (b = new u_("ExclamationMark", 5, 33)), new u_("Number", 6, 35), ($ = new u_("Amp", 7, 38)), (p = new u_("SingleQuote", 8, 39)), (k = new u_("DoubleQuote", 9, 34)), (d = new u_("Dash", 10, 45)), (m = new u_("Slash", 11, 47)), (g = new u_("Zero", 12, 48)), (q = new u_("Nine", 13, 57)), (y = new u_("Semi", 14, 59)), (x = new u_("Lt", 15, 60)), (j = new u_("Eq", 16, 61)), (A = new u_("Gt", 17, 62)), (C = new u_("QuestionMark", 18, 63)), (I = new u_("UpperA", 19, 65)), (S = new u_("LowerA", 20, 97)), new u_("UpperF", 21, 70), new u_("LowerF", 22, 102), (z = new u_("UpperZ", 23, 90)), (T = new u_("LowerZ", 24, 122)), new u_("LowerX", 25, 120), (N = new u_("OpeningSquareBracket", 26, 91));
                }
                function gt() {
                    if (ec) return kc;
                    (ec = !0), (B = new s_("Text", 0)), (D = new s_("BeforeTagName", 1)), (H = new s_("InTagName", 2)), (K = new s_("InSelfClosingTag", 3)), (V = new s_("BeforeClosingTagName", 4)), (E = new s_("InClosingTagName", 5)), (F = new s_("AfterClosingTagName", 6)), (M = new s_("BeforeAttributeName", 7)), (Q = new s_("InAttributeName", 8)), (U = new s_("AfterAttributeName", 9)), (O = new s_("BeforeAttributeValue", 10)), (Z = new s_("InAttributeValueDq", 11)), (P = new s_("InAttributeValueSq", 12)), (X = new s_("InAttributeValueNq", 13)), (G = new s_("BeforeDeclaration", 14)), (R = new s_("InDeclaration", 15)), (J = new s_("InProcessingInstruction", 16)), (W = new s_("BeforeComment", 17)), (Y = new s_("CDATASequence", 18)), (cc = new s_("InSpecialComment", 19)), (tc = new s_("InCommentLike", 20)), (_c = new s_("BeforeSpecialS", 21)), (uc = new s_("BeforeSpecialT", 22)), (sc = new s_("SpecialStartSequence", 23)), (nc = new s_("InSpecialTag", 24)), (ic = new s_("InEntity", 25));
                }
                function qt(c, t) {
                    t === l_().hcv_1 || (!c.rcu_1 && At(c, l_().hcv_1)) ? (c.vcu_1 > c.ucu_1 && c.pcu_1.bcu(c.ucu_1, c.vcu_1), (c.scu_1 = (gt(), D)), (c.ucu_1 = c.vcu_1)) : c.rcu_1 && t === h_().hcv_1 && Wt(c);
                }
                function yt(c, t) {
                    var _ = c.bcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return kc;
                    var u,
                        s = _,
                        n = c.ccv_1 === Qc(s);
                    if (n) u = rc.jcv(t);
                    else {
                        var i = 32 | t,
                            e = Uc(s, c.ccv_1);
                        u = i === (255 & Oc(e));
                    }
                    if (u) {
                        if (!n) return (c.ccv_1 = (c.ccv_1 + 1) | 0), kc;
                    } else c.ycu_1 = !1;
                    (c.ccv_1 = 0), (c.scu_1 = p_()), Tt(c, t);
                }
                function xt(c, t) {
                    var _ = c.bcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return kc;
                    var u = _;
                    if (c.ccv_1 === Qc(u)) {
                        if (t === b_().hcv_1 || rc.kcv(t)) {
                            var s = (c.vcu_1 - Qc(u)) | 0;
                            if (c.ucu_1 < s) {
                                var n = c.vcu_1;
                                (c.vcu_1 = s), c.pcu_1.bcu(c.ucu_1, s), (c.vcu_1 = n);
                            }
                            return (c.ycu_1 = !1), (c.ucu_1 = (s + 2) | 0), Lt(c, t), kc;
                        }
                        c.ccv_1 = 0;
                    }
                    var i = 32 | t,
                        e = Uc(u, c.ccv_1);
                    i === (255 & Oc(e)) ? (c.ccv_1 = (c.ccv_1 + 1) | 0) : 0 === c.ccv_1 ? (Zc(u, i_().qcv_1) ? c.rcu_1 && t === h_().hcv_1 && Wt(c) : At(c, l_().hcv_1) && (c.ccv_1 = 1)) : (c.ccv_1 = t === l_().hcv_1 ? 1 : 0);
                }
                function jt(c, t) {
                    var _ = Uc(i_().lcv_1, c.ccv_1);
                    t === (255 & Oc(_)) ? ((c.ccv_1 = (c.ccv_1 + 1) | 0), c.ccv_1 === Qc(i_().lcv_1) && ((c.scu_1 = I_()), (c.bcv_1 = i_().mcv_1), (c.ccv_1 = 0), (c.ucu_1 = (c.vcu_1 + 1) | 0))) : ((c.ccv_1 = 0), (c.scu_1 = C_()), Zt(c, t));
                }
                function At(c, t) {
                    for (; c.vcu_1 < ((c.tcu_1.length + c.acv_1) | 0); ) {
                        var _ = Pc(c.tcu_1, (c.vcu_1 - c.acv_1) | 0);
                        if (Nc(_) === t) return !0;
                        c.vcu_1 = (c.vcu_1 + 1) | 0;
                    }
                    return (c.vcu_1 = (((c.tcu_1.length + c.acv_1) | 0) - 1) | 0), !1;
                }
                function Ct(c, t) {
                    var _ = c.bcv_1;
                    if (null == (null == _ ? null : new Mc(_))) return kc;
                    var u = _,
                        s = Uc(u, c.ccv_1);
                    if (t === (255 & Oc(s))) (c.ccv_1 = (c.ccv_1 + 1) | 0), c.ccv_1 === Qc(u) && (Zc(u, i_().mcv_1) ? c.pcu_1.ocu(c.ucu_1, c.vcu_1, 2) : c.pcu_1.ncu(c.ucu_1, c.vcu_1, 2), (c.ccv_1 = 0), (c.ucu_1 = (c.vcu_1 + 1) | 0), (c.scu_1 = $_()));
                    else if (0 === c.ccv_1) {
                        var n = Uc(u, 0);
                        At(c, 255 & Oc(n)) && (c.ccv_1 = 1);
                    } else {
                        var i = Uc(u, (c.ccv_1 - 1) | 0);
                        t !== (255 & Oc(i)) && (c.ccv_1 = 0);
                    }
                }
                function It(c, t) {
                    return c.qcu_1 ? !rc.jcv(t) : rc.scv(t);
                }
                function St(c, t, _) {
                    (c.ycu_1 = !0), (c.bcv_1 = t), (c.ccv_1 = _), (c.scu_1 = (gt(), sc));
                }
                function zt(c, t) {
                    if (t === (mt(), b).hcv_1) (c.scu_1 = (gt(), G)), (c.ucu_1 = (c.vcu_1 + 1) | 0);
                    else if (t === (mt(), C).hcv_1) (c.scu_1 = (gt(), J)), (c.ucu_1 = (c.vcu_1 + 1) | 0);
                    else if (It(c, t)) {
                        var _ = 32 | t;
                        if (((c.ucu_1 = c.vcu_1), c.qcu_1)) c.scu_1 = p_();
                        else {
                            var u = Uc(i_().ocv_1, 2);
                            if (_ === (255 & Oc(u))) c.scu_1 = (gt(), _c);
                            else {
                                var s = Uc(i_().qcv_1, 2);
                                _ === (255 & Oc(s)) ? (c.scu_1 = (gt(), uc)) : (c.scu_1 = p_());
                            }
                        }
                    } else t === a_().hcv_1 ? (c.scu_1 = (gt(), V)) : ((c.scu_1 = $_()), qt(c, t));
                }
                function Tt(c, t) {
                    rc.jcv(t) && (c.pcu_1.dcu(c.ucu_1, c.vcu_1), (c.ucu_1 = -1), (c.scu_1 = m_()), Dt(c, t));
                }
                function Nt(c, t) {
                    if (!rc.kcv(t))
                        if (t === b_().hcv_1) c.scu_1 = $_();
                        else {
                            var _,
                                u = c;
                            It(c, t) ? (_ = d_()) : (gt(), (_ = cc)), (u.scu_1 = _), (c.ucu_1 = c.vcu_1);
                        }
                }
                function Lt(c, t) {
                    (t === b_().hcv_1 || rc.kcv(t)) && (c.pcu_1.fcu(c.ucu_1, c.vcu_1), (c.ucu_1 = -1), (c.scu_1 = (gt(), F)), Bt(c, t));
                }
                function Bt(c, t) {
                    (t === b_().hcv_1 || At(c, b_().hcv_1)) && ((c.scu_1 = $_()), (c.ucu_1 = (c.vcu_1 + 1) | 0));
                }
                function Dt(c, t) {
                    t === b_().hcv_1 ? (c.pcu_1.ecu(c.vcu_1), c.ycu_1 ? ((c.scu_1 = S_()), (c.ccv_1 = 0)) : (c.scu_1 = $_()), (c.ucu_1 = (c.vcu_1 + 1) | 0)) : t === a_().hcv_1 ? (c.scu_1 = k_()) : rc.kcv(t) || ((c.scu_1 = g_()), (c.ucu_1 = c.vcu_1));
                }
                function Ht(c, t) {
                    t === b_().hcv_1 ? (c.pcu_1.gcu(c.vcu_1), (c.scu_1 = $_()), (c.ucu_1 = (c.vcu_1 + 1) | 0), (c.ycu_1 = !1)) : rc.kcv(t) || ((c.scu_1 = m_()), Dt(c, t));
                }
                function Kt(c, t) {
                    (t === w_().hcv_1 || rc.jcv(t)) && (c.pcu_1.hcu(c.ucu_1, c.vcu_1), (c.ucu_1 = c.vcu_1), (c.scu_1 = q_()), Vt(c, t));
                }
                function Vt(c, t) {
                    t === w_().hcv_1 ? (c.scu_1 = y_()) : t === a_().hcv_1 || t === b_().hcv_1 ? (c.pcu_1.kcu(kt(), c.ucu_1), (c.ucu_1 = -1), (c.scu_1 = m_()), Dt(c, t)) : rc.kcv(t) || (c.pcu_1.kcu(kt(), c.ucu_1), (c.scu_1 = g_()), (c.ucu_1 = c.vcu_1));
                }
                function Et(c, t) {
                    t === v_().hcv_1 ? ((c.scu_1 = x_()), (c.ucu_1 = (c.vcu_1 + 1) | 0)) : t === r_().hcv_1 ? ((c.scu_1 = j_()), (c.ucu_1 = (c.vcu_1 + 1) | 0)) : rc.kcv(t) || ((c.ucu_1 = c.vcu_1), (c.scu_1 = A_()), Ut(c, t));
                }
                function Ft(c, t, _) {
                    t === _ || (!c.rcu_1 && At(c, _)) ? (c.pcu_1.icu(c.ucu_1, c.vcu_1), (c.ucu_1 = -1), c.pcu_1.kcu(_ === v_().hcv_1 ? (et(), h) : (et(), e), (c.vcu_1 + 1) | 0), (c.scu_1 = m_())) : c.rcu_1 && t === h_().hcv_1 && Wt(c);
                }
                function Mt(c, t) {
                    Ft(c, t, v_().hcv_1);
                }
                function Qt(c, t) {
                    Ft(c, t, r_().hcv_1);
                }
                function Ut(c, t) {
                    rc.kcv(t) || t === b_().hcv_1 ? (c.pcu_1.icu(c.ucu_1, c.vcu_1), (c.ucu_1 = -1), c.pcu_1.kcu((et(), i), c.vcu_1), (c.scu_1 = m_()), Dt(c, t)) : c.rcu_1 && t === h_().hcv_1 && Wt(c);
                }
                function Ot(c, t) {
                    t === (mt(), N).hcv_1 ? ((c.scu_1 = (gt(), Y)), (c.ccv_1 = 0)) : (c.scu_1 = t === o_().hcv_1 ? (gt(), W) : C_());
                }
                function Zt(c, t) {
                    (t === b_().hcv_1 || At(c, b_().hcv_1)) && (c.pcu_1.lcu(c.ucu_1, c.vcu_1), (c.scu_1 = $_()), (c.ucu_1 = (c.vcu_1 + 1) | 0));
                }
                function Pt(c, t) {
                    (t === b_().hcv_1 || At(c, b_().hcv_1)) && (c.pcu_1.mcu(c.ucu_1, c.vcu_1), (c.scu_1 = $_()), (c.ucu_1 = (c.vcu_1 + 1) | 0));
                }
                function Xt(c, t) {
                    t === o_().hcv_1 ? ((c.scu_1 = I_()), (c.bcv_1 = i_().ncv_1), (c.ccv_1 = 2), (c.ucu_1 = (c.vcu_1 + 1) | 0)) : (c.scu_1 = C_());
                }
                function Gt(c, t) {
                    var _ = c.bcv_1;
                    if (null == (null == _ ? null : new Mc(_)));
                    else {
                        var u = (null == _ ? null : new Mc(_)).dq_1;
                        if (t === b_().hcv_1) c.ccv_1 === ((Qc(u) - 1) | 0) && (c.pcu_1.ncu(c.ucu_1, (1 + ((c.vcu_1 - Qc(u)) | 0)) | 0, 3), (c.ucu_1 = -1), (c.scu_1 = $_()));
                        else {
                            var s = Uc(u, c.ccv_1);
                            t !== (255 & Oc(s)) && ((c.scu_1 = p_()), Tt(c, t));
                        }
                    }
                }
                function Rt(c, t) {
                    var _ = 32 | t,
                        u = Uc(i_().ocv_1, 3);
                    if (_ === (255 & Oc(u))) St(c, i_().ocv_1, 4);
                    else {
                        var s = Uc(i_().pcv_1, 3);
                        _ === (255 & Oc(s)) ? St(c, i_().pcv_1, 4) : ((c.scu_1 = p_()), Tt(c, t));
                    }
                }
                function Jt(c, t) {
                    var _ = 32 | t,
                        u = Uc(i_().qcv_1, 3);
                    if (_ === (255 & Oc(u))) St(c, i_().qcv_1, 4);
                    else {
                        var s = Uc(i_().rcv_1, 3);
                        _ === (255 & Oc(s)) ? St(c, i_().rcv_1, 4) : ((c.scu_1 = p_()), Tt(c, t));
                    }
                }
                function Wt(c) {
                    (c.xcu_1 = c.scu_1), (c.scu_1 = z_()), (c.wcu_1 = c.vcu_1);
                }
                function Yt(c, t) {
                    if (t === f_().hcv_1) {
                        var _ = Xc(),
                            u = c.tcu_1,
                            s = (c.wcu_1 - c.acv_1) | 0,
                            n = (1 + ((c.vcu_1 - c.acv_1) | 0)) | 0,
                            i = u.substring(s, n),
                            e = _.rcr(i);
                        if (((c.scu_1 = c.xcu_1), 0 === Gc(e))) c.vcu_1 = c.wcu_1;
                        else {
                            var h = Rc(e);
                            !(function (c, t, _) {
                                c.xcu_1.equals($_()) || c.xcu_1.equals(S_()) ? (c.ucu_1 < c.wcu_1 && c.pcu_1.bcu(c.ucu_1, c.wcu_1), (c.ucu_1 = (c.wcu_1 + _) | 0), (c.vcu_1 = (c.ucu_1 - 1) | 0), c.pcu_1.ccu(t, c.ucu_1)) : (c.ucu_1 < c.wcu_1 && c.pcu_1.icu(c.ucu_1, c.wcu_1), (c.ucu_1 = (c.wcu_1 + _) | 0), (c.vcu_1 = (c.ucu_1 - 1) | 0), c.pcu_1.jcu(t));
                            })(c, Nc(h), (((c.vcu_1 + 1) | 0) - c.wcu_1) | 0);
                        }
                    }
                    (((((c.vcu_1 + 1) | 0) - c.wcu_1) | 0) > 33 ||
                        !(function (c, t) {
                            return rc.scv(t) || rc.tcv(t) || t === f_().hcv_1;
                        })(0, t)) &&
                        ((c.scu_1 = c.xcu_1), (c.vcu_1 = c.wcu_1));
                }
                function c_(c) {
                    return c.vcu_1 < ((c.tcu_1.length + c.acv_1) | 0) && c.zcu_1;
                }
                function t_(c) {
                    for (; c_(c); ) {
                        var t = Pc(c.tcu_1, (c.vcu_1 - c.acv_1) | 0),
                            _ = Nc(t);
                        switch (c.scu_1.y2_1) {
                            case 0:
                                qt(c, _);
                                break;
                            case 23:
                                yt(c, _);
                                break;
                            case 24:
                                xt(c, _);
                                break;
                            case 18:
                                jt(c, _);
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
                        c.vcu_1 = (c.vcu_1 + 1) | 0;
                    }
                    !(function (c) {
                        c.zcu_1 && c.ucu_1 !== c.vcu_1 && (c.scu_1.equals($_()) || (c.scu_1.equals(S_()) && 0 === c.ccv_1) ? (c.pcu_1.bcu(c.ucu_1, c.vcu_1), (c.ucu_1 = c.vcu_1)) : (c.scu_1.equals(x_()) || c.scu_1.equals(j_()) || c.scu_1.equals(A_())) && (c.pcu_1.icu(c.ucu_1, c.vcu_1), (c.ucu_1 = c.vcu_1)));
                    })(c);
                }
                function __(c) {
                    c.scu_1.equals(z_()) && (c.scu_1 = c.xcu_1),
                        (function (c) {
                            var t = (c.tcu_1.length + c.acv_1) | 0;
                            if (c.ucu_1 >= t) return kc;
                            if (c.scu_1.equals(I_())) {
                                var _ = c.bcv_1;
                                Zc(null == _ ? null : new Mc(_), new Mc(i_().mcv_1)) ? c.pcu_1.ocu(c.ucu_1, t, 0) : c.pcu_1.ncu(c.ucu_1, t, 0);
                            } else c.scu_1.equals(p_()) || c.scu_1.equals(m_()) || c.scu_1.equals(y_()) || c.scu_1.equals(q_()) || c.scu_1.equals(g_()) || c.scu_1.equals(j_()) || c.scu_1.equals(x_()) || c.scu_1.equals(A_()) || c.scu_1.equals(d_()) || c.scu_1.equals(k_()) || c.pcu_1.bcu(c.ucu_1, t);
                        })(c),
                        c.pcu_1.hcs();
                }
                function u_(c, t, _) {
                    xc.call(this, c, t), (this.hcv_1 = _);
                }
                function s_(c, t) {
                    xc.call(this, c, t);
                }
                function n_() {
                    hc = this;
                    this.lcv_1 = Yc(new Int8Array([Wc(67), Wc(68), Wc(65), Wc(84), Wc(65), Wc(91)]));
                    this.mcv_1 = Yc(new Int8Array([Wc(93), Wc(93), Wc(62)]));
                    this.ncv_1 = Yc(new Int8Array([Wc(45), Wc(45), Wc(62)]));
                    this.ocv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(99), Wc(114), Wc(105), Wc(112), Wc(116)]));
                    this.pcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(116), Wc(121), Wc(108), Wc(101)]));
                    this.qcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(105), Wc(116), Wc(108), Wc(101)]));
                    this.rcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(101), Wc(120), Wc(116), Wc(97), Wc(114), Wc(101), Wc(97)]));
                }
                function i_() {
                    return null == hc && new n_(), hc;
                }
                function e_() {
                    this.icv_1 = 33;
                }
                function h_() {
                    return mt(), $;
                }
                function r_() {
                    return mt(), p;
                }
                function v_() {
                    return mt(), k;
                }
                function o_() {
                    return mt(), d;
                }
                function a_() {
                    return mt(), m;
                }
                function f_() {
                    return mt(), y;
                }
                function l_() {
                    return mt(), x;
                }
                function w_() {
                    return mt(), j;
                }
                function b_() {
                    return mt(), A;
                }
                function $_() {
                    return gt(), B;
                }
                function p_() {
                    return gt(), H;
                }
                function k_() {
                    return gt(), K;
                }
                function d_() {
                    return gt(), E;
                }
                function m_() {
                    return gt(), M;
                }
                function g_() {
                    return gt(), Q;
                }
                function q_() {
                    return gt(), U;
                }
                function y_() {
                    return gt(), O;
                }
                function x_() {
                    return gt(), Z;
                }
                function j_() {
                    return gt(), P;
                }
                function A_() {
                    return gt(), X;
                }
                function C_() {
                    return gt(), R;
                }
                function I_() {
                    return gt(), tc;
                }
                function S_() {
                    return gt(), nc;
                }
                function z_() {
                    return gt(), ic;
                }
                function T_(c, t) {
                    (this.pcu_1 = t), (this.qcu_1 = c.vcs_1), (this.rcu_1 = c.wcs_1), (this.scu_1 = $_()), (this.tcu_1 = ""), (this.ucu_1 = 0), (this.vcu_1 = 0), (this.wcu_1 = 0), (this.xcu_1 = $_()), (this.ycu_1 = !1), (this.zcu_1 = !0), (this.acv_1 = 0), (this.bcv_1 = null), (this.ccv_1 = 0);
                }
                wc(ut, "KsoupHtmlHandler"),
                    ac(ct, fc, fc, fc, [ut]),
                    lc(tt, "Default", fc, fc, [ut]),
                    ac(_t, "Builder", _t),
                    bc(st),
                    ac(it, "KsoupHtmlOptions", it),
                    ac(bt, "QuoteType", fc, xc),
                    bc($t),
                    ac(dt, "KsoupHtmlParser", dt),
                    ac(u_, "CharCodes", fc, xc),
                    ac(s_, "State", fc, xc),
                    lc(n_, "Sequences"),
                    bc(e_),
                    ac(T_, "KsoupTokenizer"),
                    (oc(ct).hcs = function () {
                        this.ecs_1.hcs();
                    }),
                    (oc(ct).ics = function (c) {
                        this.ecs_1.ics(c);
                    }),
                    (oc(ct).jcs = function (c, t) {
                        this.ecs_1.jcs(c, t);
                    }),
                    (oc(ct).kcs = function (c) {
                        this.ecs_1.kcs(c);
                    }),
                    (oc(ct).lcs = function (c, t, _) {
                        this.ecs_1.lcs(c, t, _);
                    }),
                    (oc(ct).mcs = function (c) {
                        this.ecs_1.mcs(c);
                    }),
                    (oc(ct).ncs = function (c) {
                        this.ecs_1.ncs(c);
                    }),
                    (oc(ct).ocs = function () {
                        this.ecs_1.ocs();
                    }),
                    (oc(ct).pcs = function () {
                        this.ecs_1.pcs();
                    }),
                    (oc(ct).qcs = function () {
                        this.ecs_1.qcs();
                    }),
                    (oc(ct).rcs = function (c, t) {
                        this.ecs_1.rcs(c, t);
                    }),
                    (oc(ct).scs = function (c, t, _) {
                        this.fcs_1(c, t, _);
                    }),
                    (oc(_t).tcs = function (c) {
                        return (this.gcs_1 = new ct(this, c)), this;
                    }),
                    (oc(_t).jz = function () {
                        return this.gcs_1;
                    }),
                    (oc(it).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.vcs_1 + ", decodeEntities=" + this.wcs_1 + ", lowerCaseTags=" + this.xcs_1 + ", lowerCaseAttributeNames=" + this.ycs_1 + ", recognizeCDATA=" + this.zcs_1 + ", recognizeSelfClosing=" + this.act_1 + ")";
                    }),
                    (oc(it).hashCode = function () {
                        var c = $c(this.vcs_1);
                        return (c = (vc(c, 31) + $c(this.wcs_1)) | 0), (c = (vc(c, 31) + $c(this.xcs_1)) | 0), (c = (vc(c, 31) + $c(this.ycs_1)) | 0), (c = (vc(c, 31) + $c(this.zcs_1)) | 0), (c = (vc(c, 31) + $c(this.act_1)) | 0);
                    }),
                    (oc(it).equals = function (c) {
                        if (this === c) return !0;
                        if (!(c instanceof it)) return !1;
                        var t = c instanceof it ? c : pc();
                        return this.vcs_1 === t.vcs_1 && this.wcs_1 === t.wcs_1 && this.xcs_1 === t.xcs_1 && this.ycs_1 === t.ycs_1 && this.zcs_1 === t.zcs_1 && this.act_1 === t.act_1;
                    }),
                    (oc(dt).bcu = function (c, t) {
                        var _ = lt(this, c, t);
                        (this.ect_1 = (t - 1) | 0), this.bct_1.mcs(_), (this.dct_1 = t);
                    }),
                    (oc(dt).ccu = function (c, t) {
                        var _;
                        this.ect_1 = (t - 1) | 0;
                        var u = Tc(0);
                        if (c < Nc(u)) _ = !0;
                        else {
                            var s = Tc(65535);
                            _ = c > Nc(s);
                        }
                        if (_) throw Lc("Invalid Char code: " + c);
                        var n = Bc(c);
                        this.bct_1.mcs(Dc(n)), (this.dct_1 = t);
                    }),
                    (oc(dt).dcu = function (c, t) {
                        this.ect_1 = t;
                        var _ = lt(this, c, t);
                        ht(this) && (_ = _.toLowerCase()), vt(this, _);
                    }),
                    (oc(dt).ecu = function (c) {
                        (this.ect_1 = c), ot(this, !1), (this.dct_1 = (c + 1) | 0);
                    }),
                    (oc(dt).fcu = function (c, t) {
                        this.ect_1 = t;
                        var _ = lt(this, c, t);
                        if ((ht(this) && (_ = _.toLowerCase()), pt().yct_1.w(_) && pt().zct_1.w(_) && mc(this.lct_1), rt(this, _))) this.cct_1.vcs_1 || "br" !== _ || (this.bct_1.kcs("br"), this.bct_1.scs("br", Hc(), !0), this.bct_1.jcs("br", !1));
                        else {
                            var u = this.kct_1.e2(_);
                            if (-1 !== u) {
                                var s = (this.kct_1.s() - u) | 0;
                                c: for (;;) {
                                    var n = s;
                                    if (((s = (n - 1) | 0), !(n > 0))) break c;
                                    var i = mc(this.kct_1);
                                    this.bct_1.jcs(i, !(0 === s));
                                }
                            } else this.cct_1.vcs_1 || "p" !== _ || (vt(this, "p"), at(this, !0));
                        }
                        this.dct_1 = (t + 1) | 0;
                    }),
                    (oc(dt).gcu = function (c) {
                        (this.ect_1 = c), this.cct_1.vcs_1 || this.cct_1.act_1 || !0 === Kc(this.lct_1) ? (at(this, !1), (this.dct_1 = (c + 1) | 0)) : this.ecu(c);
                    }),
                    (oc(dt).hcu = function (c, t) {
                        this.dct_1 = c;
                        var _,
                            u = lt(this, c, t);
                        (_ = this.cct_1.ycs_1 ? u.toLowerCase() : u), (this.hct_1 = _);
                    }),
                    (oc(dt).icu = function (c, t) {
                        this.ict_1 = this.ict_1 + lt(this, c, t);
                    }),
                    (oc(dt).jcu = function (c) {
                        var t,
                            _ = this.ict_1,
                            u = Tc(0);
                        if (c < Nc(u)) t = !0;
                        else {
                            var s = Tc(65535);
                            t = c > Nc(s);
                        }
                        if (t) throw Lc("Invalid Char code: " + c);
                        var n = Bc(c);
                        this.ict_1 = _ + Dc(n);
                    }),
                    (oc(dt).kcu = function (c, t) {
                        this.ect_1 = t;
                        var _ = this.hct_1,
                            u = this.ict_1,
                            s = c.y2_1;
                        this.bct_1.lcs(_, u, 3 === s ? '"' : 2 === s ? "'" : null);
                        var n = this.jct_1;
                        if (null == n);
                        else {
                            var i = this.hct_1,
                                e = this.ict_1;
                            n.u2(i, e);
                        }
                        this.ict_1 = "";
                    }),
                    (oc(dt).lcu = function (c, t) {
                        this.ect_1 = t;
                        var _ = lt(this, c, t),
                            u = ft(this, _);
                        this.bct_1.rcs(u, _), (this.dct_1 = (t + 1) | 0);
                    }),
                    (oc(dt).mcu = function (c, t) {
                        this.ect_1 = t;
                        var _ = lt(this, c, t),
                            u = ft(this, _);
                        this.bct_1.rcs(u, _), (this.dct_1 = (t + 1) | 0);
                    }),
                    (oc(dt).ncu = function (c, t, _) {
                        (this.ect_1 = t), this.bct_1.ncs(lt(this, c, (t - _) | 0)), this.bct_1.qcs(), (this.dct_1 = (t + 1) | 0);
                    }),
                    (oc(dt).ocu = function (c, t, _) {
                        this.ect_1 = t;
                        var u = lt(this, c, (t - _) | 0);
                        this.cct_1.vcs_1 || this.cct_1.zcs_1 ? (this.bct_1.ocs(), this.bct_1.mcs(u), this.bct_1.pcs()) : (this.bct_1.ncs("[CDATA[" + u + "]]"), this.bct_1.qcs()), (this.dct_1 = (t + 1) | 0);
                    }),
                    (oc(dt).hcs = function () {
                        this.ect_1 = this.dct_1;
                        var c = Vc(this.kct_1),
                            t = c.f1_1,
                            _ = c.g1_1;
                        if (t <= _)
                            do {
                                var u = t;
                                t = (t + 1) | 0;
                                var s = u,
                                    n = (Ec(this.kct_1) - s) | 0;
                                this.bct_1.jcs(this.kct_1.t(n), !0);
                            } while (u !== _);
                        this.bct_1.hcs();
                    }),
                    (oc(dt).h6f = function (c) {
                        if (this.pct_1) return this.bct_1.ics(Fc(".write() after done!")), kc;
                        this.mct_1.k(c), this.qct_1.zcu_1 && (this.qct_1.h6f(c), (this.oct_1 = (this.oct_1 + 1) | 0));
                    }),
                    (oc(dt).dcv = function (c) {
                        if (this.pct_1) return this.bct_1.ics(Fc(".end() after done!")), kc;
                        null == c || this.h6f(c), (this.pct_1 = !0), this.qct_1.y91();
                    }),
                    (oc(dt).ecv = function (c, t) {
                        var _;
                        return (c = c === fc ? null : c), t === fc ? (this.dcv(c), (_ = kc)) : (_ = t.dcv.call(this, c)), _;
                    }),
                    (oc(e_).kcv = function (c) {
                        return c === (mt(), w).hcv_1 || c === (mt(), a).hcv_1 || c === (mt(), o).hcv_1 || c === (mt(), f).hcv_1 || c === (mt(), l).hcv_1;
                    }),
                    (oc(e_).jcv = function (c) {
                        return c === a_().hcv_1 || c === b_().hcv_1 || this.kcv(c);
                    }),
                    (oc(e_).scv = function (c) {
                        return (c >= (mt(), S).hcv_1 && c <= (mt(), T).hcv_1) || (c >= (mt(), I).hcv_1 && c <= (mt(), z).hcv_1);
                    }),
                    (oc(e_).tcv = function (c) {
                        return c >= (mt(), g).hcv_1 && c <= (mt(), q).hcv_1;
                    }),
                    (oc(T_).h6f = function (c) {
                        (this.acv_1 = (this.acv_1 + this.tcu_1.length) | 0), (this.tcu_1 = c), t_(this);
                    }),
                    (oc(T_).y91 = function () {
                        this.zcu_1 && __(this);
                    }),
                    (oc(tt).hcs = function () {}),
                    (oc(tt).ics = function (c) {}),
                    (oc(tt).jcs = function (c, t) {}),
                    (oc(tt).kcs = function (c) {}),
                    (oc(tt).lcs = function (c, t, _) {}),
                    (oc(tt).scs = function (c, t, _) {}),
                    (oc(tt).mcs = function (c) {}),
                    (oc(tt).ncs = function (c) {}),
                    (oc(tt).ocs = function () {}),
                    (oc(tt).pcs = function () {}),
                    (oc(tt).qcs = function () {}),
                    (oc(tt).rcs = function (c, t) {}),
                    (u = new tt()),
                    (rc = new e_()),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = _t),
                    (c.$_$.b = dt);
            })(c.exports, _(519039), _(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.b7ea4e7a.js.map
