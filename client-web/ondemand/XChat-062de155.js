(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        902821: (c, t, _) => {
            !(function (c, t, _) {
                "use strict";
                var u,
                    n,
                    i,
                    s,
                    e,
                    r,
                    v,
                    h,
                    f,
                    o,
                    a,
                    l,
                    w,
                    k,
                    y,
                    $,
                    b,
                    d,
                    x,
                    p,
                    m,
                    g,
                    q,
                    z,
                    A,
                    C,
                    I,
                    S,
                    j,
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
                    nc,
                    ic,
                    sc,
                    ec,
                    rc,
                    vc,
                    hc = Math.imul,
                    fc = t.$_$.ue,
                    oc = t.$_$.rd,
                    ac = t.$_$.g,
                    lc = t.$_$.xd,
                    wc = t.$_$.vd,
                    kc = t.$_$.sd,
                    yc = t.$_$.md,
                    $c = t.$_$.lj,
                    bc = t.$_$.o6,
                    dc = t.$_$.x9,
                    xc = t.$_$.xa,
                    pc = t.$_$.d1,
                    mc = t.$_$.f9,
                    gc = t.$_$.va,
                    qc = t.$_$.yi,
                    zc = t.$_$.ab,
                    Ac = t.$_$.za,
                    Cc = t.$_$.yk,
                    Ic = t.$_$.ea,
                    Sc = t.$_$.o1,
                    jc = t.$_$.u,
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
                    (this.ics_1 = t), (this.hcs_1 = c.jcs_1);
                }
                function tt() {}
                function _t() {
                    this.jcs_1 = u;
                }
                function ut() {}
                function nt() {
                    (n = this), (this.xcs_1 = new st());
                }
                function it() {
                    return null == n && new nt(), n;
                }
                function st(c, t, _, u, n, i) {
                    it(), (c = c !== ac && c), (t = t === ac || t), (_ = _ === ac ? !c : _), (u = u === ac ? !c : u), (n = n === ac ? c : n), (i = i === ac ? c : i), (this.ycs_1 = c), (this.zcs_1 = t), (this.act_1 = _), (this.bct_1 = u), (this.cct_1 = n), (this.dct_1 = i);
                }
                function et() {
                    if (v) return bc;
                    (v = !0), (i = new kt("NoValue", 0)), (s = new kt("Unquoted", 1)), (e = new kt("Single", 2)), (r = new kt("Double", 3));
                }
                function rt(c) {
                    return c.fct_1.act_1;
                }
                function vt(c, t) {
                    return !c.fct_1.ycs_1 && $t().acu_1.w(t);
                }
                function ht(c, t) {
                    (c.ict_1 = c.gct_1), (c.jct_1 = t);
                    var _ = $t().zct_1.r2(t);
                    if (!c.fct_1.ycs_1 && null != _)
                        c: for (;;) {
                            if (!(!c.nct_1.h() && _.w(dc(c.nct_1)))) break c;
                            var u = xc(c.nct_1);
                            c.ect_1.mcs(u, !0);
                        }
                    vt(c, t) || (c.nct_1.k(t), $t().bcu_1.w(t) ? c.oct_1.k(!0) : $t().ccu_1.w(t) && c.oct_1.k(!1)), c.ect_1.ncs(t), (c.mct_1 = pc());
                }
                function ft(c, t) {
                    c.gct_1 = c.ict_1;
                    var _ = c.mct_1;
                    null == _ || (c.ect_1.vcs(c.jct_1, _, t), (c.mct_1 = null)), vt(c, c.jct_1) && c.ect_1.mcs(c.jct_1, !0), (c.jct_1 = "");
                }
                function ot(c, t) {
                    var _ = c.jct_1;
                    ft(c, t), c.nct_1.s() > 0 && c.nct_1.t((c.nct_1.s() - 1) | 0) === _ && (c.ect_1.mcs(_, !t), xc(c.nct_1));
                }
                function at(c, t) {
                    var _ = $t().dcu_1.xd(t),
                        u = null == _ ? null : _.be(),
                        n = null == u ? null : u.i(),
                        i = null == n ? -1 : n,
                        s = i < 0 ? t : t.substring(0, i);
                    return rt(c) && (s = s.toLowerCase()), s;
                }
                function lt(c, t, _) {
                    for (; ((t - c.qct_1) | 0) >= mc(c.pct_1).length; ) wt(c);
                    for (var u = mc(c.pct_1), n = (t - c.qct_1) | 0, i = (_ - c.qct_1) | 0, s = u.substring(n, i); ((_ - c.qct_1) | 0) > mc(c.pct_1).length; ) {
                        wt(c);
                        var e = s,
                            r = mc(c.pct_1),
                            v = (_ - c.qct_1) | 0;
                        s = e + r.substring(0, v);
                    }
                    return s;
                }
                function wt(c) {
                    (c.qct_1 = (c.qct_1 + mc(c.pct_1).length) | 0), (c.rct_1 = (c.rct_1 - 1) | 0), gc(c.pct_1);
                }
                function kt(c, t) {
                    qc.call(this, c, t);
                }
                function yt() {
                    (h = this), (this.uct_1 = zc(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.vct_1 = Ac("p")), (this.wct_1 = zc(["thead", "tbody"])), (this.xct_1 = zc(["dt", "dd"])), (this.yct_1 = zc(["rt", "rp"])), (this.zct_1 = Ic([Cc("tr", zc(["tr", "th", "td"])), Cc("th", Ac("th")), Cc("td", zc(["thead", "th", "td"])), Cc("body", zc(["head", "link", "script"])), Cc("li", Ac("li")), Cc("p", this.vct_1), Cc("h1", this.vct_1), Cc("h2", this.vct_1), Cc("h3", this.vct_1), Cc("h4", this.vct_1), Cc("h5", this.vct_1), Cc("h6", this.vct_1), Cc("select", this.uct_1), Cc("input", this.uct_1), Cc("output", this.uct_1), Cc("button", this.uct_1), Cc("datalist", this.uct_1), Cc("textarea", this.uct_1), Cc("option", Ac("option")), Cc("optgroup", zc(["optgroup", "option"])), Cc("dd", this.xct_1), Cc("dt", this.xct_1), Cc("address", this.vct_1), Cc("article", this.vct_1), Cc("aside", this.vct_1), Cc("blockquote", this.vct_1), Cc("details", this.vct_1), Cc("div", this.vct_1), Cc("dl", this.vct_1), Cc("fieldset", this.vct_1), Cc("figcaption", this.vct_1), Cc("figure", this.vct_1), Cc("footer", this.vct_1), Cc("form", this.vct_1), Cc("header", this.vct_1), Cc("hr", this.vct_1), Cc("main", this.vct_1), Cc("menu", this.vct_1), Cc("nav", this.vct_1), Cc("ol", this.vct_1), Cc("pre", this.vct_1), Cc("section", this.vct_1), Cc("table", this.vct_1), Cc("ul", this.vct_1), Cc("rt", this.yct_1), Cc("rp", this.yct_1), Cc("tbody", this.wct_1), Cc("tfoot", this.wct_1)])), (this.acu_1 = zc(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.bcu_1 = zc(["math", "svg"])), (this.ccu_1 = zc(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.dcu_1 = Sc("\\s|/"));
                }
                function $t() {
                    return null == h && new yt(), h;
                }
                function bt() {
                    return et(), i;
                }
                function dt(c, t) {
                    $t(), (c = c === ac ? u : c), (t = t === ac ? it().xcs_1 : t), (this.ect_1 = c), (this.fct_1 = t), (this.gct_1 = 0), (this.hct_1 = 0), (this.ict_1 = 0), (this.jct_1 = ""), (this.kct_1 = ""), (this.lct_1 = ""), (this.mct_1 = null);
                    this.nct_1 = jc();
                    this.oct_1 = jc();
                    (this.pct_1 = jc()), (this.qct_1 = 0), (this.rct_1 = 0), (this.sct_1 = !1), (this.tct_1 = new T_(this.fct_1, this));
                }
                function xt() {
                    if (L) return bc;
                    (L = !0), (f = new u_("Tab", 0, 9)), (o = new u_("NewLine", 1, 10)), (a = new u_("FormFeed", 2, 12)), (l = new u_("CarriageReturn", 3, 13)), (w = new u_("Space", 4, 32)), (k = new u_("ExclamationMark", 5, 33)), new u_("Number", 6, 35), (y = new u_("Amp", 7, 38)), ($ = new u_("SingleQuote", 8, 39)), (b = new u_("DoubleQuote", 9, 34)), (d = new u_("Dash", 10, 45)), (x = new u_("Slash", 11, 47)), (p = new u_("Zero", 12, 48)), (m = new u_("Nine", 13, 57)), (g = new u_("Semi", 14, 59)), (q = new u_("Lt", 15, 60)), (z = new u_("Eq", 16, 61)), (A = new u_("Gt", 17, 62)), (C = new u_("QuestionMark", 18, 63)), (I = new u_("UpperA", 19, 65)), (S = new u_("LowerA", 20, 97)), new u_("UpperF", 21, 70), new u_("LowerF", 22, 102), (j = new u_("UpperZ", 23, 90)), (T = new u_("LowerZ", 24, 122)), new u_("LowerX", 25, 120), (N = new u_("OpeningSquareBracket", 26, 91));
                }
                function pt() {
                    if (ec) return bc;
                    (ec = !0), (B = new n_("Text", 0)), (D = new n_("BeforeTagName", 1)), (H = new n_("InTagName", 2)), (K = new n_("InSelfClosingTag", 3)), (V = new n_("BeforeClosingTagName", 4)), (E = new n_("InClosingTagName", 5)), (F = new n_("AfterClosingTagName", 6)), (M = new n_("BeforeAttributeName", 7)), (Q = new n_("InAttributeName", 8)), (U = new n_("AfterAttributeName", 9)), (O = new n_("BeforeAttributeValue", 10)), (Z = new n_("InAttributeValueDq", 11)), (P = new n_("InAttributeValueSq", 12)), (X = new n_("InAttributeValueNq", 13)), (G = new n_("BeforeDeclaration", 14)), (R = new n_("InDeclaration", 15)), (J = new n_("InProcessingInstruction", 16)), (W = new n_("BeforeComment", 17)), (Y = new n_("CDATASequence", 18)), (cc = new n_("InSpecialComment", 19)), (tc = new n_("InCommentLike", 20)), (_c = new n_("BeforeSpecialS", 21)), (uc = new n_("BeforeSpecialT", 22)), (nc = new n_("SpecialStartSequence", 23)), (ic = new n_("InSpecialTag", 24)), (sc = new n_("InEntity", 25));
                }
                function mt(c, t) {
                    t === l_().kcv_1 || (!c.ucu_1 && At(c, l_().kcv_1)) ? (c.ycu_1 > c.xcu_1 && c.scu_1.ecu(c.xcu_1, c.ycu_1), (c.vcu_1 = (pt(), D)), (c.xcu_1 = c.ycu_1)) : c.ucu_1 && t === r_().kcv_1 && Wt(c);
                }
                function gt(c, t) {
                    var _ = c.ecv_1;
                    if (null == (null == _ ? null : new Mc(_))) return bc;
                    var u,
                        n = _,
                        i = c.fcv_1 === Qc(n);
                    if (i) u = vc.mcv(t);
                    else {
                        var s = 32 | t,
                            e = Uc(n, c.fcv_1);
                        u = s === (255 & Oc(e));
                    }
                    if (u) {
                        if (!i) return (c.fcv_1 = (c.fcv_1 + 1) | 0), bc;
                    } else c.bcv_1 = !1;
                    (c.fcv_1 = 0), (c.vcu_1 = $_()), Tt(c, t);
                }
                function qt(c, t) {
                    var _ = c.ecv_1;
                    if (null == (null == _ ? null : new Mc(_))) return bc;
                    var u = _;
                    if (c.fcv_1 === Qc(u)) {
                        if (t === k_().kcv_1 || vc.ncv(t)) {
                            var n = (c.ycu_1 - Qc(u)) | 0;
                            if (c.xcu_1 < n) {
                                var i = c.ycu_1;
                                (c.ycu_1 = n), c.scu_1.ecu(c.xcu_1, n), (c.ycu_1 = i);
                            }
                            return (c.bcv_1 = !1), (c.xcu_1 = (n + 2) | 0), Lt(c, t), bc;
                        }
                        c.fcv_1 = 0;
                    }
                    var s = 32 | t,
                        e = Uc(u, c.fcv_1);
                    s === (255 & Oc(e)) ? (c.fcv_1 = (c.fcv_1 + 1) | 0) : 0 === c.fcv_1 ? (Zc(u, s_().tcv_1) ? c.ucu_1 && t === r_().kcv_1 && Wt(c) : At(c, l_().kcv_1) && (c.fcv_1 = 1)) : (c.fcv_1 = t === l_().kcv_1 ? 1 : 0);
                }
                function zt(c, t) {
                    var _ = Uc(s_().ocv_1, c.fcv_1);
                    t === (255 & Oc(_)) ? ((c.fcv_1 = (c.fcv_1 + 1) | 0), c.fcv_1 === Qc(s_().ocv_1) && ((c.vcu_1 = I_()), (c.ecv_1 = s_().pcv_1), (c.fcv_1 = 0), (c.xcu_1 = (c.ycu_1 + 1) | 0))) : ((c.fcv_1 = 0), (c.vcu_1 = C_()), Zt(c, t));
                }
                function At(c, t) {
                    for (; c.ycu_1 < ((c.wcu_1.length + c.dcv_1) | 0); ) {
                        var _ = Pc(c.wcu_1, (c.ycu_1 - c.dcv_1) | 0);
                        if (Nc(_) === t) return !0;
                        c.ycu_1 = (c.ycu_1 + 1) | 0;
                    }
                    return (c.ycu_1 = (((c.wcu_1.length + c.dcv_1) | 0) - 1) | 0), !1;
                }
                function Ct(c, t) {
                    var _ = c.ecv_1;
                    if (null == (null == _ ? null : new Mc(_))) return bc;
                    var u = _,
                        n = Uc(u, c.fcv_1);
                    if (t === (255 & Oc(n))) (c.fcv_1 = (c.fcv_1 + 1) | 0), c.fcv_1 === Qc(u) && (Zc(u, s_().pcv_1) ? c.scu_1.rcu(c.xcu_1, c.ycu_1, 2) : c.scu_1.qcu(c.xcu_1, c.ycu_1, 2), (c.fcv_1 = 0), (c.xcu_1 = (c.ycu_1 + 1) | 0), (c.vcu_1 = y_()));
                    else if (0 === c.fcv_1) {
                        var i = Uc(u, 0);
                        At(c, 255 & Oc(i)) && (c.fcv_1 = 1);
                    } else {
                        var s = Uc(u, (c.fcv_1 - 1) | 0);
                        t !== (255 & Oc(s)) && (c.fcv_1 = 0);
                    }
                }
                function It(c, t) {
                    return c.tcu_1 ? !vc.mcv(t) : vc.vcv(t);
                }
                function St(c, t, _) {
                    (c.bcv_1 = !0), (c.ecv_1 = t), (c.fcv_1 = _), (c.vcu_1 = (pt(), nc));
                }
                function jt(c, t) {
                    if (t === (xt(), k).kcv_1) (c.vcu_1 = (pt(), G)), (c.xcu_1 = (c.ycu_1 + 1) | 0);
                    else if (t === (xt(), C).kcv_1) (c.vcu_1 = (pt(), J)), (c.xcu_1 = (c.ycu_1 + 1) | 0);
                    else if (It(c, t)) {
                        var _ = 32 | t;
                        if (((c.xcu_1 = c.ycu_1), c.tcu_1)) c.vcu_1 = $_();
                        else {
                            var u = Uc(s_().rcv_1, 2);
                            if (_ === (255 & Oc(u))) c.vcu_1 = (pt(), _c);
                            else {
                                var n = Uc(s_().tcv_1, 2);
                                _ === (255 & Oc(n)) ? (c.vcu_1 = (pt(), uc)) : (c.vcu_1 = $_());
                            }
                        }
                    } else t === o_().kcv_1 ? (c.vcu_1 = (pt(), V)) : ((c.vcu_1 = y_()), mt(c, t));
                }
                function Tt(c, t) {
                    vc.mcv(t) && (c.scu_1.gcu(c.xcu_1, c.ycu_1), (c.xcu_1 = -1), (c.vcu_1 = x_()), Dt(c, t));
                }
                function Nt(c, t) {
                    if (!vc.ncv(t))
                        if (t === k_().kcv_1) c.vcu_1 = y_();
                        else {
                            var _,
                                u = c;
                            It(c, t) ? (_ = d_()) : (pt(), (_ = cc)), (u.vcu_1 = _), (c.xcu_1 = c.ycu_1);
                        }
                }
                function Lt(c, t) {
                    (t === k_().kcv_1 || vc.ncv(t)) && (c.scu_1.icu(c.xcu_1, c.ycu_1), (c.xcu_1 = -1), (c.vcu_1 = (pt(), F)), Bt(c, t));
                }
                function Bt(c, t) {
                    (t === k_().kcv_1 || At(c, k_().kcv_1)) && ((c.vcu_1 = y_()), (c.xcu_1 = (c.ycu_1 + 1) | 0));
                }
                function Dt(c, t) {
                    t === k_().kcv_1 ? (c.scu_1.hcu(c.ycu_1), c.bcv_1 ? ((c.vcu_1 = S_()), (c.fcv_1 = 0)) : (c.vcu_1 = y_()), (c.xcu_1 = (c.ycu_1 + 1) | 0)) : t === o_().kcv_1 ? (c.vcu_1 = b_()) : vc.ncv(t) || ((c.vcu_1 = p_()), (c.xcu_1 = c.ycu_1));
                }
                function Ht(c, t) {
                    t === k_().kcv_1 ? (c.scu_1.jcu(c.ycu_1), (c.vcu_1 = y_()), (c.xcu_1 = (c.ycu_1 + 1) | 0), (c.bcv_1 = !1)) : vc.ncv(t) || ((c.vcu_1 = x_()), Dt(c, t));
                }
                function Kt(c, t) {
                    (t === w_().kcv_1 || vc.mcv(t)) && (c.scu_1.kcu(c.xcu_1, c.ycu_1), (c.xcu_1 = c.ycu_1), (c.vcu_1 = m_()), Vt(c, t));
                }
                function Vt(c, t) {
                    t === w_().kcv_1 ? (c.vcu_1 = g_()) : t === o_().kcv_1 || t === k_().kcv_1 ? (c.scu_1.ncu(bt(), c.xcu_1), (c.xcu_1 = -1), (c.vcu_1 = x_()), Dt(c, t)) : vc.ncv(t) || (c.scu_1.ncu(bt(), c.xcu_1), (c.vcu_1 = p_()), (c.xcu_1 = c.ycu_1));
                }
                function Et(c, t) {
                    t === h_().kcv_1 ? ((c.vcu_1 = q_()), (c.xcu_1 = (c.ycu_1 + 1) | 0)) : t === v_().kcv_1 ? ((c.vcu_1 = z_()), (c.xcu_1 = (c.ycu_1 + 1) | 0)) : vc.ncv(t) || ((c.xcu_1 = c.ycu_1), (c.vcu_1 = A_()), Ut(c, t));
                }
                function Ft(c, t, _) {
                    t === _ || (!c.ucu_1 && At(c, _)) ? (c.scu_1.lcu(c.xcu_1, c.ycu_1), (c.xcu_1 = -1), c.scu_1.ncu(_ === h_().kcv_1 ? (et(), r) : (et(), e), (c.ycu_1 + 1) | 0), (c.vcu_1 = x_())) : c.ucu_1 && t === r_().kcv_1 && Wt(c);
                }
                function Mt(c, t) {
                    Ft(c, t, h_().kcv_1);
                }
                function Qt(c, t) {
                    Ft(c, t, v_().kcv_1);
                }
                function Ut(c, t) {
                    vc.ncv(t) || t === k_().kcv_1 ? (c.scu_1.lcu(c.xcu_1, c.ycu_1), (c.xcu_1 = -1), c.scu_1.ncu((et(), s), c.ycu_1), (c.vcu_1 = x_()), Dt(c, t)) : c.ucu_1 && t === r_().kcv_1 && Wt(c);
                }
                function Ot(c, t) {
                    t === (xt(), N).kcv_1 ? ((c.vcu_1 = (pt(), Y)), (c.fcv_1 = 0)) : (c.vcu_1 = t === f_().kcv_1 ? (pt(), W) : C_());
                }
                function Zt(c, t) {
                    (t === k_().kcv_1 || At(c, k_().kcv_1)) && (c.scu_1.ocu(c.xcu_1, c.ycu_1), (c.vcu_1 = y_()), (c.xcu_1 = (c.ycu_1 + 1) | 0));
                }
                function Pt(c, t) {
                    (t === k_().kcv_1 || At(c, k_().kcv_1)) && (c.scu_1.pcu(c.xcu_1, c.ycu_1), (c.vcu_1 = y_()), (c.xcu_1 = (c.ycu_1 + 1) | 0));
                }
                function Xt(c, t) {
                    t === f_().kcv_1 ? ((c.vcu_1 = I_()), (c.ecv_1 = s_().qcv_1), (c.fcv_1 = 2), (c.xcu_1 = (c.ycu_1 + 1) | 0)) : (c.vcu_1 = C_());
                }
                function Gt(c, t) {
                    var _ = c.ecv_1;
                    if (null == (null == _ ? null : new Mc(_)));
                    else {
                        var u = (null == _ ? null : new Mc(_)).dq_1;
                        if (t === k_().kcv_1) c.fcv_1 === ((Qc(u) - 1) | 0) && (c.scu_1.qcu(c.xcu_1, (1 + ((c.ycu_1 - Qc(u)) | 0)) | 0, 3), (c.xcu_1 = -1), (c.vcu_1 = y_()));
                        else {
                            var n = Uc(u, c.fcv_1);
                            t !== (255 & Oc(n)) && ((c.vcu_1 = $_()), Tt(c, t));
                        }
                    }
                }
                function Rt(c, t) {
                    var _ = 32 | t,
                        u = Uc(s_().rcv_1, 3);
                    if (_ === (255 & Oc(u))) St(c, s_().rcv_1, 4);
                    else {
                        var n = Uc(s_().scv_1, 3);
                        _ === (255 & Oc(n)) ? St(c, s_().scv_1, 4) : ((c.vcu_1 = $_()), Tt(c, t));
                    }
                }
                function Jt(c, t) {
                    var _ = 32 | t,
                        u = Uc(s_().tcv_1, 3);
                    if (_ === (255 & Oc(u))) St(c, s_().tcv_1, 4);
                    else {
                        var n = Uc(s_().ucv_1, 3);
                        _ === (255 & Oc(n)) ? St(c, s_().ucv_1, 4) : ((c.vcu_1 = $_()), Tt(c, t));
                    }
                }
                function Wt(c) {
                    (c.acv_1 = c.vcu_1), (c.vcu_1 = j_()), (c.zcu_1 = c.ycu_1);
                }
                function Yt(c, t) {
                    if (t === a_().kcv_1) {
                        var _ = Xc(),
                            u = c.wcu_1,
                            n = (c.zcu_1 - c.dcv_1) | 0,
                            i = (1 + ((c.ycu_1 - c.dcv_1) | 0)) | 0,
                            s = u.substring(n, i),
                            e = _.ucr(s);
                        if (((c.vcu_1 = c.acv_1), 0 === Gc(e))) c.ycu_1 = c.zcu_1;
                        else {
                            var r = Rc(e);
                            !(function (c, t, _) {
                                c.acv_1.equals(y_()) || c.acv_1.equals(S_()) ? (c.xcu_1 < c.zcu_1 && c.scu_1.ecu(c.xcu_1, c.zcu_1), (c.xcu_1 = (c.zcu_1 + _) | 0), (c.ycu_1 = (c.xcu_1 - 1) | 0), c.scu_1.fcu(t, c.xcu_1)) : (c.xcu_1 < c.zcu_1 && c.scu_1.lcu(c.xcu_1, c.zcu_1), (c.xcu_1 = (c.zcu_1 + _) | 0), (c.ycu_1 = (c.xcu_1 - 1) | 0), c.scu_1.mcu(t));
                            })(c, Nc(r), (((c.ycu_1 + 1) | 0) - c.zcu_1) | 0);
                        }
                    }
                    (((((c.ycu_1 + 1) | 0) - c.zcu_1) | 0) > 33 ||
                        !(function (c, t) {
                            return vc.vcv(t) || vc.wcv(t) || t === a_().kcv_1;
                        })(0, t)) &&
                        ((c.vcu_1 = c.acv_1), (c.ycu_1 = c.zcu_1));
                }
                function c_(c) {
                    return c.ycu_1 < ((c.wcu_1.length + c.dcv_1) | 0) && c.ccv_1;
                }
                function t_(c) {
                    for (; c_(c); ) {
                        var t = Pc(c.wcu_1, (c.ycu_1 - c.dcv_1) | 0),
                            _ = Nc(t);
                        switch (c.vcu_1.y2_1) {
                            case 0:
                                mt(c, _);
                                break;
                            case 23:
                                gt(c, _);
                                break;
                            case 24:
                                qt(c, _);
                                break;
                            case 18:
                                zt(c, _);
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
                                jt(c, _);
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
                        c.ycu_1 = (c.ycu_1 + 1) | 0;
                    }
                    !(function (c) {
                        c.ccv_1 && c.xcu_1 !== c.ycu_1 && (c.vcu_1.equals(y_()) || (c.vcu_1.equals(S_()) && 0 === c.fcv_1) ? (c.scu_1.ecu(c.xcu_1, c.ycu_1), (c.xcu_1 = c.ycu_1)) : (c.vcu_1.equals(q_()) || c.vcu_1.equals(z_()) || c.vcu_1.equals(A_())) && (c.scu_1.lcu(c.xcu_1, c.ycu_1), (c.xcu_1 = c.ycu_1)));
                    })(c);
                }
                function __(c) {
                    c.vcu_1.equals(j_()) && (c.vcu_1 = c.acv_1),
                        (function (c) {
                            var t = (c.wcu_1.length + c.dcv_1) | 0;
                            if (c.xcu_1 >= t) return bc;
                            if (c.vcu_1.equals(I_())) {
                                var _ = c.ecv_1;
                                Zc(null == _ ? null : new Mc(_), new Mc(s_().pcv_1)) ? c.scu_1.rcu(c.xcu_1, t, 0) : c.scu_1.qcu(c.xcu_1, t, 0);
                            } else c.vcu_1.equals($_()) || c.vcu_1.equals(x_()) || c.vcu_1.equals(g_()) || c.vcu_1.equals(m_()) || c.vcu_1.equals(p_()) || c.vcu_1.equals(z_()) || c.vcu_1.equals(q_()) || c.vcu_1.equals(A_()) || c.vcu_1.equals(d_()) || c.vcu_1.equals(b_()) || c.scu_1.ecu(c.xcu_1, t);
                        })(c),
                        c.scu_1.kcs();
                }
                function u_(c, t, _) {
                    qc.call(this, c, t), (this.kcv_1 = _);
                }
                function n_(c, t) {
                    qc.call(this, c, t);
                }
                function i_() {
                    rc = this;
                    this.ocv_1 = Yc(new Int8Array([Wc(67), Wc(68), Wc(65), Wc(84), Wc(65), Wc(91)]));
                    this.pcv_1 = Yc(new Int8Array([Wc(93), Wc(93), Wc(62)]));
                    this.qcv_1 = Yc(new Int8Array([Wc(45), Wc(45), Wc(62)]));
                    this.rcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(99), Wc(114), Wc(105), Wc(112), Wc(116)]));
                    this.scv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(115), Wc(116), Wc(121), Wc(108), Wc(101)]));
                    this.tcv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(105), Wc(116), Wc(108), Wc(101)]));
                    this.ucv_1 = Yc(new Int8Array([Wc(60), Wc(47), Wc(116), Wc(101), Wc(120), Wc(116), Wc(97), Wc(114), Wc(101), Wc(97)]));
                }
                function s_() {
                    return null == rc && new i_(), rc;
                }
                function e_() {
                    this.lcv_1 = 33;
                }
                function r_() {
                    return xt(), y;
                }
                function v_() {
                    return xt(), $;
                }
                function h_() {
                    return xt(), b;
                }
                function f_() {
                    return xt(), d;
                }
                function o_() {
                    return xt(), x;
                }
                function a_() {
                    return xt(), g;
                }
                function l_() {
                    return xt(), q;
                }
                function w_() {
                    return xt(), z;
                }
                function k_() {
                    return xt(), A;
                }
                function y_() {
                    return pt(), B;
                }
                function $_() {
                    return pt(), H;
                }
                function b_() {
                    return pt(), K;
                }
                function d_() {
                    return pt(), E;
                }
                function x_() {
                    return pt(), M;
                }
                function p_() {
                    return pt(), Q;
                }
                function m_() {
                    return pt(), U;
                }
                function g_() {
                    return pt(), O;
                }
                function q_() {
                    return pt(), Z;
                }
                function z_() {
                    return pt(), P;
                }
                function A_() {
                    return pt(), X;
                }
                function C_() {
                    return pt(), R;
                }
                function I_() {
                    return pt(), tc;
                }
                function S_() {
                    return pt(), ic;
                }
                function j_() {
                    return pt(), sc;
                }
                function T_(c, t) {
                    (this.scu_1 = t), (this.tcu_1 = c.ycs_1), (this.ucu_1 = c.zcs_1), (this.vcu_1 = y_()), (this.wcu_1 = ""), (this.xcu_1 = 0), (this.ycu_1 = 0), (this.zcu_1 = 0), (this.acv_1 = y_()), (this.bcv_1 = !1), (this.ccv_1 = !0), (this.dcv_1 = 0), (this.ecv_1 = null), (this.fcv_1 = 0);
                }
                wc(ut, "KsoupHtmlHandler"),
                    oc(ct, ac, ac, ac, [ut]),
                    lc(tt, "Default", ac, ac, [ut]),
                    oc(_t, "Builder", _t),
                    kc(nt),
                    oc(st, "KsoupHtmlOptions", st),
                    oc(kt, "QuoteType", ac, qc),
                    kc(yt),
                    oc(dt, "KsoupHtmlParser", dt),
                    oc(u_, "CharCodes", ac, qc),
                    oc(n_, "State", ac, qc),
                    lc(i_, "Sequences"),
                    kc(e_),
                    oc(T_, "KsoupTokenizer"),
                    (fc(ct).kcs = function () {
                        this.hcs_1.kcs();
                    }),
                    (fc(ct).lcs = function (c) {
                        this.hcs_1.lcs(c);
                    }),
                    (fc(ct).mcs = function (c, t) {
                        this.hcs_1.mcs(c, t);
                    }),
                    (fc(ct).ncs = function (c) {
                        this.hcs_1.ncs(c);
                    }),
                    (fc(ct).ocs = function (c, t, _) {
                        this.hcs_1.ocs(c, t, _);
                    }),
                    (fc(ct).pcs = function (c) {
                        this.hcs_1.pcs(c);
                    }),
                    (fc(ct).qcs = function (c) {
                        this.hcs_1.qcs(c);
                    }),
                    (fc(ct).rcs = function () {
                        this.hcs_1.rcs();
                    }),
                    (fc(ct).scs = function () {
                        this.hcs_1.scs();
                    }),
                    (fc(ct).tcs = function () {
                        this.hcs_1.tcs();
                    }),
                    (fc(ct).ucs = function (c, t) {
                        this.hcs_1.ucs(c, t);
                    }),
                    (fc(ct).vcs = function (c, t, _) {
                        this.ics_1(c, t, _);
                    }),
                    (fc(_t).wcs = function (c) {
                        return (this.jcs_1 = new ct(this, c)), this;
                    }),
                    (fc(_t).jz = function () {
                        return this.jcs_1;
                    }),
                    (fc(st).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.ycs_1 + ", decodeEntities=" + this.zcs_1 + ", lowerCaseTags=" + this.act_1 + ", lowerCaseAttributeNames=" + this.bct_1 + ", recognizeCDATA=" + this.cct_1 + ", recognizeSelfClosing=" + this.dct_1 + ")";
                    }),
                    (fc(st).hashCode = function () {
                        var c = yc(this.ycs_1);
                        return (c = (hc(c, 31) + yc(this.zcs_1)) | 0), (c = (hc(c, 31) + yc(this.act_1)) | 0), (c = (hc(c, 31) + yc(this.bct_1)) | 0), (c = (hc(c, 31) + yc(this.cct_1)) | 0), (c = (hc(c, 31) + yc(this.dct_1)) | 0);
                    }),
                    (fc(st).equals = function (c) {
                        if (this === c) return !0;
                        if (!(c instanceof st)) return !1;
                        var t = c instanceof st ? c : $c();
                        return this.ycs_1 === t.ycs_1 && this.zcs_1 === t.zcs_1 && this.act_1 === t.act_1 && this.bct_1 === t.bct_1 && this.cct_1 === t.cct_1 && this.dct_1 === t.dct_1;
                    }),
                    (fc(dt).ecu = function (c, t) {
                        var _ = lt(this, c, t);
                        (this.hct_1 = (t - 1) | 0), this.ect_1.pcs(_), (this.gct_1 = t);
                    }),
                    (fc(dt).fcu = function (c, t) {
                        var _;
                        this.hct_1 = (t - 1) | 0;
                        var u = Tc(0);
                        if (c < Nc(u)) _ = !0;
                        else {
                            var n = Tc(65535);
                            _ = c > Nc(n);
                        }
                        if (_) throw Lc("Invalid Char code: " + c);
                        var i = Bc(c);
                        this.ect_1.pcs(Dc(i)), (this.gct_1 = t);
                    }),
                    (fc(dt).gcu = function (c, t) {
                        this.hct_1 = t;
                        var _ = lt(this, c, t);
                        rt(this) && (_ = _.toLowerCase()), ht(this, _);
                    }),
                    (fc(dt).hcu = function (c) {
                        (this.hct_1 = c), ft(this, !1), (this.gct_1 = (c + 1) | 0);
                    }),
                    (fc(dt).icu = function (c, t) {
                        this.hct_1 = t;
                        var _ = lt(this, c, t);
                        if ((rt(this) && (_ = _.toLowerCase()), $t().bcu_1.w(_) && $t().ccu_1.w(_) && xc(this.oct_1), vt(this, _))) this.fct_1.ycs_1 || "br" !== _ || (this.ect_1.ncs("br"), this.ect_1.vcs("br", Hc(), !0), this.ect_1.mcs("br", !1));
                        else {
                            var u = this.nct_1.e2(_);
                            if (-1 !== u) {
                                var n = (this.nct_1.s() - u) | 0;
                                c: for (;;) {
                                    var i = n;
                                    if (((n = (i - 1) | 0), !(i > 0))) break c;
                                    var s = xc(this.nct_1);
                                    this.ect_1.mcs(s, !(0 === n));
                                }
                            } else this.fct_1.ycs_1 || "p" !== _ || (ht(this, "p"), ot(this, !0));
                        }
                        this.gct_1 = (t + 1) | 0;
                    }),
                    (fc(dt).jcu = function (c) {
                        (this.hct_1 = c), this.fct_1.ycs_1 || this.fct_1.dct_1 || !0 === Kc(this.oct_1) ? (ot(this, !1), (this.gct_1 = (c + 1) | 0)) : this.hcu(c);
                    }),
                    (fc(dt).kcu = function (c, t) {
                        this.gct_1 = c;
                        var _,
                            u = lt(this, c, t);
                        (_ = this.fct_1.bct_1 ? u.toLowerCase() : u), (this.kct_1 = _);
                    }),
                    (fc(dt).lcu = function (c, t) {
                        this.lct_1 = this.lct_1 + lt(this, c, t);
                    }),
                    (fc(dt).mcu = function (c) {
                        var t,
                            _ = this.lct_1,
                            u = Tc(0);
                        if (c < Nc(u)) t = !0;
                        else {
                            var n = Tc(65535);
                            t = c > Nc(n);
                        }
                        if (t) throw Lc("Invalid Char code: " + c);
                        var i = Bc(c);
                        this.lct_1 = _ + Dc(i);
                    }),
                    (fc(dt).ncu = function (c, t) {
                        this.hct_1 = t;
                        var _ = this.kct_1,
                            u = this.lct_1,
                            n = c.y2_1;
                        this.ect_1.ocs(_, u, 3 === n ? '"' : 2 === n ? "'" : null);
                        var i = this.mct_1;
                        if (null == i);
                        else {
                            var s = this.kct_1,
                                e = this.lct_1;
                            i.u2(s, e);
                        }
                        this.lct_1 = "";
                    }),
                    (fc(dt).ocu = function (c, t) {
                        this.hct_1 = t;
                        var _ = lt(this, c, t),
                            u = at(this, _);
                        this.ect_1.ucs(u, _), (this.gct_1 = (t + 1) | 0);
                    }),
                    (fc(dt).pcu = function (c, t) {
                        this.hct_1 = t;
                        var _ = lt(this, c, t),
                            u = at(this, _);
                        this.ect_1.ucs(u, _), (this.gct_1 = (t + 1) | 0);
                    }),
                    (fc(dt).qcu = function (c, t, _) {
                        (this.hct_1 = t), this.ect_1.qcs(lt(this, c, (t - _) | 0)), this.ect_1.tcs(), (this.gct_1 = (t + 1) | 0);
                    }),
                    (fc(dt).rcu = function (c, t, _) {
                        this.hct_1 = t;
                        var u = lt(this, c, (t - _) | 0);
                        this.fct_1.ycs_1 || this.fct_1.cct_1 ? (this.ect_1.rcs(), this.ect_1.pcs(u), this.ect_1.scs()) : (this.ect_1.qcs("[CDATA[" + u + "]]"), this.ect_1.tcs()), (this.gct_1 = (t + 1) | 0);
                    }),
                    (fc(dt).kcs = function () {
                        this.hct_1 = this.gct_1;
                        var c = Vc(this.nct_1),
                            t = c.f1_1,
                            _ = c.g1_1;
                        if (t <= _)
                            do {
                                var u = t;
                                t = (t + 1) | 0;
                                var n = u,
                                    i = (Ec(this.nct_1) - n) | 0;
                                this.ect_1.mcs(this.nct_1.t(i), !0);
                            } while (u !== _);
                        this.ect_1.kcs();
                    }),
                    (fc(dt).h6f = function (c) {
                        if (this.sct_1) return this.ect_1.lcs(Fc(".write() after done!")), bc;
                        this.pct_1.k(c), this.tct_1.ccv_1 && (this.tct_1.h6f(c), (this.rct_1 = (this.rct_1 + 1) | 0));
                    }),
                    (fc(dt).gcv = function (c) {
                        if (this.sct_1) return this.ect_1.lcs(Fc(".end() after done!")), bc;
                        null == c || this.h6f(c), (this.sct_1 = !0), this.tct_1.y91();
                    }),
                    (fc(dt).hcv = function (c, t) {
                        var _;
                        return (c = c === ac ? null : c), t === ac ? (this.gcv(c), (_ = bc)) : (_ = t.gcv.call(this, c)), _;
                    }),
                    (fc(e_).ncv = function (c) {
                        return c === (xt(), w).kcv_1 || c === (xt(), o).kcv_1 || c === (xt(), f).kcv_1 || c === (xt(), a).kcv_1 || c === (xt(), l).kcv_1;
                    }),
                    (fc(e_).mcv = function (c) {
                        return c === o_().kcv_1 || c === k_().kcv_1 || this.ncv(c);
                    }),
                    (fc(e_).vcv = function (c) {
                        return (c >= (xt(), S).kcv_1 && c <= (xt(), T).kcv_1) || (c >= (xt(), I).kcv_1 && c <= (xt(), j).kcv_1);
                    }),
                    (fc(e_).wcv = function (c) {
                        return c >= (xt(), p).kcv_1 && c <= (xt(), m).kcv_1;
                    }),
                    (fc(T_).h6f = function (c) {
                        (this.dcv_1 = (this.dcv_1 + this.wcu_1.length) | 0), (this.wcu_1 = c), t_(this);
                    }),
                    (fc(T_).y91 = function () {
                        this.ccv_1 && __(this);
                    }),
                    (fc(tt).kcs = function () {}),
                    (fc(tt).lcs = function (c) {}),
                    (fc(tt).mcs = function (c, t) {}),
                    (fc(tt).ncs = function (c) {}),
                    (fc(tt).ocs = function (c, t, _) {}),
                    (fc(tt).vcs = function (c, t, _) {}),
                    (fc(tt).pcs = function (c) {}),
                    (fc(tt).qcs = function (c) {}),
                    (fc(tt).rcs = function () {}),
                    (fc(tt).scs = function () {}),
                    (fc(tt).tcs = function () {}),
                    (fc(tt).ucs = function (c, t) {}),
                    (u = new tt()),
                    (vc = new e_()),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = _t),
                    (c.$_$.b = dt);
            })(c.exports, _(519039), _(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.be8f18ba.js.map
