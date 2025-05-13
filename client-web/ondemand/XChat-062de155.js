(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        665302: (b, s, _) => {
            !(function (b, s, _) {
                "use strict";
                var t,
                    n,
                    i,
                    r,
                    e,
                    h,
                    u,
                    o,
                    a,
                    q,
                    f,
                    c,
                    l,
                    w,
                    k,
                    p,
                    $,
                    v,
                    d,
                    g,
                    j,
                    m,
                    z,
                    y,
                    x,
                    A,
                    C,
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
                    bb,
                    sb,
                    _b,
                    tb,
                    nb,
                    ib,
                    rb,
                    eb,
                    hb,
                    ub,
                    ob = Math.imul,
                    ab = s.$_$.oe,
                    qb = s.$_$.ld,
                    fb = s.$_$.g,
                    cb = s.$_$.rd,
                    lb = s.$_$.pd,
                    wb = s.$_$.md,
                    kb = s.$_$.gd,
                    pb = s.$_$.fj,
                    $b = s.$_$.n6,
                    vb = s.$_$.s9,
                    db = s.$_$.sa,
                    gb = s.$_$.d1,
                    jb = s.$_$.a9,
                    mb = s.$_$.qa,
                    zb = s.$_$.si,
                    yb = s.$_$.va,
                    xb = s.$_$.ua,
                    Ab = s.$_$.sk,
                    Cb = s.$_$.z9,
                    Ib = s.$_$.o1,
                    Sb = s.$_$.u,
                    Tb = s.$_$.o3,
                    Nb = s.$_$.u3,
                    Lb = s.$_$.h2,
                    Bb = s.$_$.je,
                    Db = s.$_$.v3,
                    Hb = s.$_$.v8,
                    Kb = s.$_$.r9,
                    Vb = s.$_$.i9,
                    Eb = s.$_$.o9,
                    Fb = s.$_$.z1,
                    Mb = s.$_$.ij,
                    Qb = s.$_$.j4,
                    Ub = s.$_$.g4,
                    Ob = s.$_$.b4,
                    Zb = s.$_$.cd,
                    Pb = s.$_$.wc,
                    Xb = _.$_$.a,
                    Gb = s.$_$.xc,
                    Rb = s.$_$.bg,
                    Jb = s.$_$.gk,
                    Wb = s.$_$.a4,
                    Yb = s.$_$.e4;
                function bs(b, s) {
                    (this.ubp_1 = s), (this.tbp_1 = b.vbp_1);
                }
                function ss() {}
                function _s() {
                    this.vbp_1 = t;
                }
                function ts() {}
                function ns() {
                    (n = this), (this.jbq_1 = new rs());
                }
                function is() {
                    return null == n && new ns(), n;
                }
                function rs(b, s, _, t, n, i) {
                    is(), (b = b !== fb && b), (s = s === fb || s), (_ = _ === fb ? !b : _), (t = t === fb ? !b : t), (n = n === fb ? b : n), (i = i === fb ? b : i), (this.kbq_1 = b), (this.lbq_1 = s), (this.mbq_1 = _), (this.nbq_1 = t), (this.obq_1 = n), (this.pbq_1 = i);
                }
                function es() {
                    if (u) return $b;
                    (u = !0), (i = new ws("NoValue", 0)), (r = new ws("Unquoted", 1)), (e = new ws("Single", 2)), (h = new ws("Double", 3));
                }
                function hs(b) {
                    return b.rbq_1.mbq_1;
                }
                function us(b, s) {
                    return !b.rbq_1.kbq_1 && ps().mbr_1.w(s);
                }
                function os(b, s) {
                    (b.ubq_1 = b.sbq_1), (b.vbq_1 = s);
                    var _ = ps().lbr_1.p2(s);
                    if (!b.rbq_1.kbq_1 && null != _)
                        b: for (;;) {
                            if (!(!b.zbq_1.h() && _.w(vb(b.zbq_1)))) break b;
                            var t = db(b.zbq_1);
                            b.qbq_1.ybp(t, !0);
                        }
                    us(b, s) || (b.zbq_1.k(s), ps().nbr_1.w(s) ? b.abr_1.k(!0) : ps().obr_1.w(s) && b.abr_1.k(!1)), b.qbq_1.zbp(s), (b.ybq_1 = gb());
                }
                function as(b, s) {
                    b.sbq_1 = b.ubq_1;
                    var _ = b.ybq_1;
                    null == _ || (b.qbq_1.hbq(b.vbq_1, _, s), (b.ybq_1 = null)), us(b, b.vbq_1) && b.qbq_1.ybp(b.vbq_1, !0), (b.vbq_1 = "");
                }
                function qs(b, s) {
                    var _ = b.vbq_1;
                    as(b, s), b.zbq_1.s() > 0 && b.zbq_1.t((b.zbq_1.s() - 1) | 0) === _ && (b.qbq_1.ybp(_, !s), db(b.zbq_1));
                }
                function fs(b, s) {
                    var _ = ps().pbr_1.rd(s),
                        t = null == _ ? null : _.vd(),
                        n = null == t ? null : t.i(),
                        i = null == n ? -1 : n,
                        r = i < 0 ? s : s.substring(0, i);
                    return hs(b) && (r = r.toLowerCase()), r;
                }
                function cs(b, s, _) {
                    for (; ((s - b.cbr_1) | 0) >= jb(b.bbr_1).length; ) ls(b);
                    for (var t = jb(b.bbr_1), n = (s - b.cbr_1) | 0, i = (_ - b.cbr_1) | 0, r = t.substring(n, i); ((_ - b.cbr_1) | 0) > jb(b.bbr_1).length; ) {
                        ls(b);
                        var e = r,
                            h = jb(b.bbr_1),
                            u = (_ - b.cbr_1) | 0;
                        r = e + h.substring(0, u);
                    }
                    return r;
                }
                function ls(b) {
                    (b.cbr_1 = (b.cbr_1 + jb(b.bbr_1).length) | 0), (b.dbr_1 = (b.dbr_1 - 1) | 0), mb(b.bbr_1);
                }
                function ws(b, s) {
                    zb.call(this, b, s);
                }
                function ks() {
                    (o = this), (this.gbr_1 = yb(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.hbr_1 = xb("p")), (this.ibr_1 = yb(["thead", "tbody"])), (this.jbr_1 = yb(["dt", "dd"])), (this.kbr_1 = yb(["rt", "rp"])), (this.lbr_1 = Cb([Ab("tr", yb(["tr", "th", "td"])), Ab("th", xb("th")), Ab("td", yb(["thead", "th", "td"])), Ab("body", yb(["head", "link", "script"])), Ab("li", xb("li")), Ab("p", this.hbr_1), Ab("h1", this.hbr_1), Ab("h2", this.hbr_1), Ab("h3", this.hbr_1), Ab("h4", this.hbr_1), Ab("h5", this.hbr_1), Ab("h6", this.hbr_1), Ab("select", this.gbr_1), Ab("input", this.gbr_1), Ab("output", this.gbr_1), Ab("button", this.gbr_1), Ab("datalist", this.gbr_1), Ab("textarea", this.gbr_1), Ab("option", xb("option")), Ab("optgroup", yb(["optgroup", "option"])), Ab("dd", this.jbr_1), Ab("dt", this.jbr_1), Ab("address", this.hbr_1), Ab("article", this.hbr_1), Ab("aside", this.hbr_1), Ab("blockquote", this.hbr_1), Ab("details", this.hbr_1), Ab("div", this.hbr_1), Ab("dl", this.hbr_1), Ab("fieldset", this.hbr_1), Ab("figcaption", this.hbr_1), Ab("figure", this.hbr_1), Ab("footer", this.hbr_1), Ab("form", this.hbr_1), Ab("header", this.hbr_1), Ab("hr", this.hbr_1), Ab("main", this.hbr_1), Ab("menu", this.hbr_1), Ab("nav", this.hbr_1), Ab("ol", this.hbr_1), Ab("pre", this.hbr_1), Ab("section", this.hbr_1), Ab("table", this.hbr_1), Ab("ul", this.hbr_1), Ab("rt", this.kbr_1), Ab("rp", this.kbr_1), Ab("tbody", this.ibr_1), Ab("tfoot", this.ibr_1)])), (this.mbr_1 = yb(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.nbr_1 = yb(["math", "svg"])), (this.obr_1 = yb(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.pbr_1 = Ib("\\s|/"));
                }
                function ps() {
                    return null == o && new ks(), o;
                }
                function $s() {
                    return es(), i;
                }
                function vs(b, s) {
                    ps(), (b = b === fb ? t : b), (s = s === fb ? is().jbq_1 : s), (this.qbq_1 = b), (this.rbq_1 = s), (this.sbq_1 = 0), (this.tbq_1 = 0), (this.ubq_1 = 0), (this.vbq_1 = ""), (this.wbq_1 = ""), (this.xbq_1 = ""), (this.ybq_1 = null);
                    this.zbq_1 = Sb();
                    this.abr_1 = Sb();
                    (this.bbr_1 = Sb()), (this.cbr_1 = 0), (this.dbr_1 = 0), (this.ebr_1 = !1), (this.fbr_1 = new T_(this.rbq_1, this));
                }
                function ds() {
                    if (L) return $b;
                    (L = !0), (a = new t_("Tab", 0, 9)), (q = new t_("NewLine", 1, 10)), (f = new t_("FormFeed", 2, 12)), (c = new t_("CarriageReturn", 3, 13)), (l = new t_("Space", 4, 32)), (w = new t_("ExclamationMark", 5, 33)), new t_("Number", 6, 35), (k = new t_("Amp", 7, 38)), (p = new t_("SingleQuote", 8, 39)), ($ = new t_("DoubleQuote", 9, 34)), (v = new t_("Dash", 10, 45)), (d = new t_("Slash", 11, 47)), (g = new t_("Zero", 12, 48)), (j = new t_("Nine", 13, 57)), (m = new t_("Semi", 14, 59)), (z = new t_("Lt", 15, 60)), (y = new t_("Eq", 16, 61)), (x = new t_("Gt", 17, 62)), (A = new t_("QuestionMark", 18, 63)), (C = new t_("UpperA", 19, 65)), (I = new t_("LowerA", 20, 97)), new t_("UpperF", 21, 70), new t_("LowerF", 22, 102), (S = new t_("UpperZ", 23, 90)), (T = new t_("LowerZ", 24, 122)), new t_("LowerX", 25, 120), (N = new t_("OpeningSquareBracket", 26, 91));
                }
                function gs() {
                    if (eb) return $b;
                    (eb = !0), (B = new n_("Text", 0)), (D = new n_("BeforeTagName", 1)), (H = new n_("InTagName", 2)), (K = new n_("InSelfClosingTag", 3)), (V = new n_("BeforeClosingTagName", 4)), (E = new n_("InClosingTagName", 5)), (F = new n_("AfterClosingTagName", 6)), (M = new n_("BeforeAttributeName", 7)), (Q = new n_("InAttributeName", 8)), (U = new n_("AfterAttributeName", 9)), (O = new n_("BeforeAttributeValue", 10)), (Z = new n_("InAttributeValueDq", 11)), (P = new n_("InAttributeValueSq", 12)), (X = new n_("InAttributeValueNq", 13)), (G = new n_("BeforeDeclaration", 14)), (R = new n_("InDeclaration", 15)), (J = new n_("InProcessingInstruction", 16)), (W = new n_("BeforeComment", 17)), (Y = new n_("CDATASequence", 18)), (bb = new n_("InSpecialComment", 19)), (sb = new n_("InCommentLike", 20)), (_b = new n_("BeforeSpecialS", 21)), (tb = new n_("BeforeSpecialT", 22)), (nb = new n_("SpecialStartSequence", 23)), (ib = new n_("InSpecialTag", 24)), (rb = new n_("InEntity", 25));
                }
                function js(b, s) {
                    s === c_().wbs_1 || (!b.gbs_1 && xs(b, c_().wbs_1)) ? (b.kbs_1 > b.jbs_1 && b.ebs_1.qbr(b.jbs_1, b.kbs_1), (b.hbs_1 = (gs(), D)), (b.jbs_1 = b.kbs_1)) : b.gbs_1 && s === h_().wbs_1 && Ws(b);
                }
                function ms(b, s) {
                    var _ = b.qbs_1;
                    if (null == (null == _ ? null : new Mb(_))) return $b;
                    var t,
                        n = _,
                        i = b.rbs_1 === Qb(n);
                    if (i) t = ub.ybs(s);
                    else {
                        var r = 32 | s,
                            e = Ub(n, b.rbs_1);
                        t = r === (255 & Ob(e));
                    }
                    if (t) {
                        if (!i) return (b.rbs_1 = (b.rbs_1 + 1) | 0), $b;
                    } else b.nbs_1 = !1;
                    (b.rbs_1 = 0), (b.hbs_1 = p_()), Ts(b, s);
                }
                function zs(b, s) {
                    var _ = b.qbs_1;
                    if (null == (null == _ ? null : new Mb(_))) return $b;
                    var t = _;
                    if (b.rbs_1 === Qb(t)) {
                        if (s === w_().wbs_1 || ub.zbs(s)) {
                            var n = (b.kbs_1 - Qb(t)) | 0;
                            if (b.jbs_1 < n) {
                                var i = b.kbs_1;
                                (b.kbs_1 = n), b.ebs_1.qbr(b.jbs_1, n), (b.kbs_1 = i);
                            }
                            return (b.nbs_1 = !1), (b.jbs_1 = (n + 2) | 0), Ls(b, s), $b;
                        }
                        b.rbs_1 = 0;
                    }
                    var r = 32 | s,
                        e = Ub(t, b.rbs_1);
                    r === (255 & Ob(e)) ? (b.rbs_1 = (b.rbs_1 + 1) | 0) : 0 === b.rbs_1 ? (Zb(t, r_().fbt_1) ? b.gbs_1 && s === h_().wbs_1 && Ws(b) : xs(b, c_().wbs_1) && (b.rbs_1 = 1)) : (b.rbs_1 = s === c_().wbs_1 ? 1 : 0);
                }
                function ys(b, s) {
                    var _ = Ub(r_().abt_1, b.rbs_1);
                    s === (255 & Ob(_)) ? ((b.rbs_1 = (b.rbs_1 + 1) | 0), b.rbs_1 === Qb(r_().abt_1) && ((b.hbs_1 = C_()), (b.qbs_1 = r_().bbt_1), (b.rbs_1 = 0), (b.jbs_1 = (b.kbs_1 + 1) | 0))) : ((b.rbs_1 = 0), (b.hbs_1 = A_()), Zs(b, s));
                }
                function xs(b, s) {
                    for (; b.kbs_1 < ((b.ibs_1.length + b.pbs_1) | 0); ) {
                        var _ = Pb(b.ibs_1, (b.kbs_1 - b.pbs_1) | 0);
                        if (Nb(_) === s) return !0;
                        b.kbs_1 = (b.kbs_1 + 1) | 0;
                    }
                    return (b.kbs_1 = (((b.ibs_1.length + b.pbs_1) | 0) - 1) | 0), !1;
                }
                function As(b, s) {
                    var _ = b.qbs_1;
                    if (null == (null == _ ? null : new Mb(_))) return $b;
                    var t = _,
                        n = Ub(t, b.rbs_1);
                    if (s === (255 & Ob(n))) (b.rbs_1 = (b.rbs_1 + 1) | 0), b.rbs_1 === Qb(t) && (Zb(t, r_().bbt_1) ? b.ebs_1.dbs(b.jbs_1, b.kbs_1, 2) : b.ebs_1.cbs(b.jbs_1, b.kbs_1, 2), (b.rbs_1 = 0), (b.jbs_1 = (b.kbs_1 + 1) | 0), (b.hbs_1 = k_()));
                    else if (0 === b.rbs_1) {
                        var i = Ub(t, 0);
                        xs(b, 255 & Ob(i)) && (b.rbs_1 = 1);
                    } else {
                        var r = Ub(t, (b.rbs_1 - 1) | 0);
                        s !== (255 & Ob(r)) && (b.rbs_1 = 0);
                    }
                }
                function Cs(b, s) {
                    return b.fbs_1 ? !ub.ybs(s) : ub.hbt(s);
                }
                function Is(b, s, _) {
                    (b.nbs_1 = !0), (b.qbs_1 = s), (b.rbs_1 = _), (b.hbs_1 = (gs(), nb));
                }
                function Ss(b, s) {
                    if (s === (ds(), w).wbs_1) (b.hbs_1 = (gs(), G)), (b.jbs_1 = (b.kbs_1 + 1) | 0);
                    else if (s === (ds(), A).wbs_1) (b.hbs_1 = (gs(), J)), (b.jbs_1 = (b.kbs_1 + 1) | 0);
                    else if (Cs(b, s)) {
                        var _ = 32 | s;
                        if (((b.jbs_1 = b.kbs_1), b.fbs_1)) b.hbs_1 = p_();
                        else {
                            var t = Ub(r_().dbt_1, 2);
                            if (_ === (255 & Ob(t))) b.hbs_1 = (gs(), _b);
                            else {
                                var n = Ub(r_().fbt_1, 2);
                                _ === (255 & Ob(n)) ? (b.hbs_1 = (gs(), tb)) : (b.hbs_1 = p_());
                            }
                        }
                    } else s === q_().wbs_1 ? (b.hbs_1 = (gs(), V)) : ((b.hbs_1 = k_()), js(b, s));
                }
                function Ts(b, s) {
                    ub.ybs(s) && (b.ebs_1.sbr(b.jbs_1, b.kbs_1), (b.jbs_1 = -1), (b.hbs_1 = d_()), Ds(b, s));
                }
                function Ns(b, s) {
                    if (!ub.zbs(s))
                        if (s === w_().wbs_1) b.hbs_1 = k_();
                        else {
                            var _,
                                t = b;
                            Cs(b, s) ? (_ = v_()) : (gs(), (_ = bb)), (t.hbs_1 = _), (b.jbs_1 = b.kbs_1);
                        }
                }
                function Ls(b, s) {
                    (s === w_().wbs_1 || ub.zbs(s)) && (b.ebs_1.ubr(b.jbs_1, b.kbs_1), (b.jbs_1 = -1), (b.hbs_1 = (gs(), F)), Bs(b, s));
                }
                function Bs(b, s) {
                    (s === w_().wbs_1 || xs(b, w_().wbs_1)) && ((b.hbs_1 = k_()), (b.jbs_1 = (b.kbs_1 + 1) | 0));
                }
                function Ds(b, s) {
                    s === w_().wbs_1 ? (b.ebs_1.tbr(b.kbs_1), b.nbs_1 ? ((b.hbs_1 = I_()), (b.rbs_1 = 0)) : (b.hbs_1 = k_()), (b.jbs_1 = (b.kbs_1 + 1) | 0)) : s === q_().wbs_1 ? (b.hbs_1 = $_()) : ub.zbs(s) || ((b.hbs_1 = g_()), (b.jbs_1 = b.kbs_1));
                }
                function Hs(b, s) {
                    s === w_().wbs_1 ? (b.ebs_1.vbr(b.kbs_1), (b.hbs_1 = k_()), (b.jbs_1 = (b.kbs_1 + 1) | 0), (b.nbs_1 = !1)) : ub.zbs(s) || ((b.hbs_1 = d_()), Ds(b, s));
                }
                function Ks(b, s) {
                    (s === l_().wbs_1 || ub.ybs(s)) && (b.ebs_1.wbr(b.jbs_1, b.kbs_1), (b.jbs_1 = b.kbs_1), (b.hbs_1 = j_()), Vs(b, s));
                }
                function Vs(b, s) {
                    s === l_().wbs_1 ? (b.hbs_1 = m_()) : s === q_().wbs_1 || s === w_().wbs_1 ? (b.ebs_1.zbr($s(), b.jbs_1), (b.jbs_1 = -1), (b.hbs_1 = d_()), Ds(b, s)) : ub.zbs(s) || (b.ebs_1.zbr($s(), b.jbs_1), (b.hbs_1 = g_()), (b.jbs_1 = b.kbs_1));
                }
                function Es(b, s) {
                    s === o_().wbs_1 ? ((b.hbs_1 = z_()), (b.jbs_1 = (b.kbs_1 + 1) | 0)) : s === u_().wbs_1 ? ((b.hbs_1 = y_()), (b.jbs_1 = (b.kbs_1 + 1) | 0)) : ub.zbs(s) || ((b.jbs_1 = b.kbs_1), (b.hbs_1 = x_()), Us(b, s));
                }
                function Fs(b, s, _) {
                    s === _ || (!b.gbs_1 && xs(b, _)) ? (b.ebs_1.xbr(b.jbs_1, b.kbs_1), (b.jbs_1 = -1), b.ebs_1.zbr(_ === o_().wbs_1 ? (es(), h) : (es(), e), (b.kbs_1 + 1) | 0), (b.hbs_1 = d_())) : b.gbs_1 && s === h_().wbs_1 && Ws(b);
                }
                function Ms(b, s) {
                    Fs(b, s, o_().wbs_1);
                }
                function Qs(b, s) {
                    Fs(b, s, u_().wbs_1);
                }
                function Us(b, s) {
                    ub.zbs(s) || s === w_().wbs_1 ? (b.ebs_1.xbr(b.jbs_1, b.kbs_1), (b.jbs_1 = -1), b.ebs_1.zbr((es(), r), b.kbs_1), (b.hbs_1 = d_()), Ds(b, s)) : b.gbs_1 && s === h_().wbs_1 && Ws(b);
                }
                function Os(b, s) {
                    s === (ds(), N).wbs_1 ? ((b.hbs_1 = (gs(), Y)), (b.rbs_1 = 0)) : (b.hbs_1 = s === a_().wbs_1 ? (gs(), W) : A_());
                }
                function Zs(b, s) {
                    (s === w_().wbs_1 || xs(b, w_().wbs_1)) && (b.ebs_1.abs(b.jbs_1, b.kbs_1), (b.hbs_1 = k_()), (b.jbs_1 = (b.kbs_1 + 1) | 0));
                }
                function Ps(b, s) {
                    (s === w_().wbs_1 || xs(b, w_().wbs_1)) && (b.ebs_1.bbs(b.jbs_1, b.kbs_1), (b.hbs_1 = k_()), (b.jbs_1 = (b.kbs_1 + 1) | 0));
                }
                function Xs(b, s) {
                    s === a_().wbs_1 ? ((b.hbs_1 = C_()), (b.qbs_1 = r_().cbt_1), (b.rbs_1 = 2), (b.jbs_1 = (b.kbs_1 + 1) | 0)) : (b.hbs_1 = A_());
                }
                function Gs(b, s) {
                    var _ = b.qbs_1;
                    if (null == (null == _ ? null : new Mb(_)));
                    else {
                        var t = (null == _ ? null : new Mb(_)).up_1;
                        if (s === w_().wbs_1) b.rbs_1 === ((Qb(t) - 1) | 0) && (b.ebs_1.cbs(b.jbs_1, (1 + ((b.kbs_1 - Qb(t)) | 0)) | 0, 3), (b.jbs_1 = -1), (b.hbs_1 = k_()));
                        else {
                            var n = Ub(t, b.rbs_1);
                            s !== (255 & Ob(n)) && ((b.hbs_1 = p_()), Ts(b, s));
                        }
                    }
                }
                function Rs(b, s) {
                    var _ = 32 | s,
                        t = Ub(r_().dbt_1, 3);
                    if (_ === (255 & Ob(t))) Is(b, r_().dbt_1, 4);
                    else {
                        var n = Ub(r_().ebt_1, 3);
                        _ === (255 & Ob(n)) ? Is(b, r_().ebt_1, 4) : ((b.hbs_1 = p_()), Ts(b, s));
                    }
                }
                function Js(b, s) {
                    var _ = 32 | s,
                        t = Ub(r_().fbt_1, 3);
                    if (_ === (255 & Ob(t))) Is(b, r_().fbt_1, 4);
                    else {
                        var n = Ub(r_().gbt_1, 3);
                        _ === (255 & Ob(n)) ? Is(b, r_().gbt_1, 4) : ((b.hbs_1 = p_()), Ts(b, s));
                    }
                }
                function Ws(b) {
                    (b.mbs_1 = b.hbs_1), (b.hbs_1 = S_()), (b.lbs_1 = b.kbs_1);
                }
                function Ys(b, s) {
                    if (s === f_().wbs_1) {
                        var _ = Xb(),
                            t = b.ibs_1,
                            n = (b.lbs_1 - b.pbs_1) | 0,
                            i = (1 + ((b.kbs_1 - b.pbs_1) | 0)) | 0,
                            r = t.substring(n, i),
                            e = _.gbp(r);
                        if (((b.hbs_1 = b.mbs_1), 0 === Gb(e))) b.kbs_1 = b.lbs_1;
                        else {
                            var h = Rb(e);
                            !(function (b, s, _) {
                                b.mbs_1.equals(k_()) || b.mbs_1.equals(I_()) ? (b.jbs_1 < b.lbs_1 && b.ebs_1.qbr(b.jbs_1, b.lbs_1), (b.jbs_1 = (b.lbs_1 + _) | 0), (b.kbs_1 = (b.jbs_1 - 1) | 0), b.ebs_1.rbr(s, b.jbs_1)) : (b.jbs_1 < b.lbs_1 && b.ebs_1.xbr(b.jbs_1, b.lbs_1), (b.jbs_1 = (b.lbs_1 + _) | 0), (b.kbs_1 = (b.jbs_1 - 1) | 0), b.ebs_1.ybr(s));
                            })(b, Nb(h), (((b.kbs_1 + 1) | 0) - b.lbs_1) | 0);
                        }
                    }
                    (((((b.kbs_1 + 1) | 0) - b.lbs_1) | 0) > 33 ||
                        !(function (b, s) {
                            return ub.hbt(s) || ub.ibt(s) || s === f_().wbs_1;
                        })(0, s)) &&
                        ((b.hbs_1 = b.mbs_1), (b.kbs_1 = b.lbs_1));
                }
                function b_(b) {
                    return b.kbs_1 < ((b.ibs_1.length + b.pbs_1) | 0) && b.obs_1;
                }
                function s_(b) {
                    for (; b_(b); ) {
                        var s = Pb(b.ibs_1, (b.kbs_1 - b.pbs_1) | 0),
                            _ = Nb(s);
                        switch (b.hbs_1.x2_1) {
                            case 0:
                                js(b, _);
                                break;
                            case 23:
                                ms(b, _);
                                break;
                            case 24:
                                zs(b, _);
                                break;
                            case 18:
                                ys(b, _);
                                break;
                            case 11:
                                Ms(b, _);
                                break;
                            case 8:
                                Ks(b, _);
                                break;
                            case 20:
                                As(b, _);
                                break;
                            case 19:
                                Gs(b, _);
                                break;
                            case 7:
                                Ds(b, _);
                                break;
                            case 2:
                                Ts(b, _);
                                break;
                            case 5:
                                Ls(b, _);
                                break;
                            case 1:
                                Ss(b, _);
                                break;
                            case 9:
                                Vs(b, _);
                                break;
                            case 12:
                                Qs(b, _);
                                break;
                            case 10:
                                Es(b, _);
                                break;
                            case 4:
                                Ns(b, _);
                                break;
                            case 6:
                                Bs(b, _);
                                break;
                            case 21:
                                Rs(b, _);
                                break;
                            case 22:
                                Js(b, _);
                                break;
                            case 13:
                                Us(b, _);
                                break;
                            case 3:
                                Hs(b, _);
                                break;
                            case 15:
                                Zs(b, _);
                                break;
                            case 14:
                                Os(b, _);
                                break;
                            case 17:
                                Xs(b, _);
                                break;
                            case 16:
                                Ps(b, _);
                                break;
                            case 25:
                                Ys(b, _);
                                break;
                            default:
                                Jb();
                        }
                        b.kbs_1 = (b.kbs_1 + 1) | 0;
                    }
                    !(function (b) {
                        b.obs_1 && b.jbs_1 !== b.kbs_1 && (b.hbs_1.equals(k_()) || (b.hbs_1.equals(I_()) && 0 === b.rbs_1) ? (b.ebs_1.qbr(b.jbs_1, b.kbs_1), (b.jbs_1 = b.kbs_1)) : (b.hbs_1.equals(z_()) || b.hbs_1.equals(y_()) || b.hbs_1.equals(x_())) && (b.ebs_1.xbr(b.jbs_1, b.kbs_1), (b.jbs_1 = b.kbs_1)));
                    })(b);
                }
                function __(b) {
                    b.hbs_1.equals(S_()) && (b.hbs_1 = b.mbs_1),
                        (function (b) {
                            var s = (b.ibs_1.length + b.pbs_1) | 0;
                            if (b.jbs_1 >= s) return $b;
                            if (b.hbs_1.equals(C_())) {
                                var _ = b.qbs_1;
                                Zb(null == _ ? null : new Mb(_), new Mb(r_().bbt_1)) ? b.ebs_1.dbs(b.jbs_1, s, 0) : b.ebs_1.cbs(b.jbs_1, s, 0);
                            } else b.hbs_1.equals(p_()) || b.hbs_1.equals(d_()) || b.hbs_1.equals(m_()) || b.hbs_1.equals(j_()) || b.hbs_1.equals(g_()) || b.hbs_1.equals(y_()) || b.hbs_1.equals(z_()) || b.hbs_1.equals(x_()) || b.hbs_1.equals(v_()) || b.hbs_1.equals($_()) || b.ebs_1.qbr(b.jbs_1, s);
                        })(b),
                        b.ebs_1.wbp();
                }
                function t_(b, s, _) {
                    zb.call(this, b, s), (this.wbs_1 = _);
                }
                function n_(b, s) {
                    zb.call(this, b, s);
                }
                function i_() {
                    hb = this;
                    this.abt_1 = Yb(new Int8Array([Wb(67), Wb(68), Wb(65), Wb(84), Wb(65), Wb(91)]));
                    this.bbt_1 = Yb(new Int8Array([Wb(93), Wb(93), Wb(62)]));
                    this.cbt_1 = Yb(new Int8Array([Wb(45), Wb(45), Wb(62)]));
                    this.dbt_1 = Yb(new Int8Array([Wb(60), Wb(47), Wb(115), Wb(99), Wb(114), Wb(105), Wb(112), Wb(116)]));
                    this.ebt_1 = Yb(new Int8Array([Wb(60), Wb(47), Wb(115), Wb(116), Wb(121), Wb(108), Wb(101)]));
                    this.fbt_1 = Yb(new Int8Array([Wb(60), Wb(47), Wb(116), Wb(105), Wb(116), Wb(108), Wb(101)]));
                    this.gbt_1 = Yb(new Int8Array([Wb(60), Wb(47), Wb(116), Wb(101), Wb(120), Wb(116), Wb(97), Wb(114), Wb(101), Wb(97)]));
                }
                function r_() {
                    return null == hb && new i_(), hb;
                }
                function e_() {
                    this.xbs_1 = 33;
                }
                function h_() {
                    return ds(), k;
                }
                function u_() {
                    return ds(), p;
                }
                function o_() {
                    return ds(), $;
                }
                function a_() {
                    return ds(), v;
                }
                function q_() {
                    return ds(), d;
                }
                function f_() {
                    return ds(), m;
                }
                function c_() {
                    return ds(), z;
                }
                function l_() {
                    return ds(), y;
                }
                function w_() {
                    return ds(), x;
                }
                function k_() {
                    return gs(), B;
                }
                function p_() {
                    return gs(), H;
                }
                function $_() {
                    return gs(), K;
                }
                function v_() {
                    return gs(), E;
                }
                function d_() {
                    return gs(), M;
                }
                function g_() {
                    return gs(), Q;
                }
                function j_() {
                    return gs(), U;
                }
                function m_() {
                    return gs(), O;
                }
                function z_() {
                    return gs(), Z;
                }
                function y_() {
                    return gs(), P;
                }
                function x_() {
                    return gs(), X;
                }
                function A_() {
                    return gs(), R;
                }
                function C_() {
                    return gs(), sb;
                }
                function I_() {
                    return gs(), ib;
                }
                function S_() {
                    return gs(), rb;
                }
                function T_(b, s) {
                    (this.ebs_1 = s), (this.fbs_1 = b.kbq_1), (this.gbs_1 = b.lbq_1), (this.hbs_1 = k_()), (this.ibs_1 = ""), (this.jbs_1 = 0), (this.kbs_1 = 0), (this.lbs_1 = 0), (this.mbs_1 = k_()), (this.nbs_1 = !1), (this.obs_1 = !0), (this.pbs_1 = 0), (this.qbs_1 = null), (this.rbs_1 = 0);
                }
                lb(ts, "KsoupHtmlHandler"),
                    qb(bs, fb, fb, fb, [ts]),
                    cb(ss, "Default", fb, fb, [ts]),
                    qb(_s, "Builder", _s),
                    wb(ns),
                    qb(rs, "KsoupHtmlOptions", rs),
                    qb(ws, "QuoteType", fb, zb),
                    wb(ks),
                    qb(vs, "KsoupHtmlParser", vs),
                    qb(t_, "CharCodes", fb, zb),
                    qb(n_, "State", fb, zb),
                    cb(i_, "Sequences"),
                    wb(e_),
                    qb(T_, "KsoupTokenizer"),
                    (ab(bs).wbp = function () {
                        this.tbp_1.wbp();
                    }),
                    (ab(bs).xbp = function (b) {
                        this.tbp_1.xbp(b);
                    }),
                    (ab(bs).ybp = function (b, s) {
                        this.tbp_1.ybp(b, s);
                    }),
                    (ab(bs).zbp = function (b) {
                        this.tbp_1.zbp(b);
                    }),
                    (ab(bs).abq = function (b, s, _) {
                        this.tbp_1.abq(b, s, _);
                    }),
                    (ab(bs).bbq = function (b) {
                        this.tbp_1.bbq(b);
                    }),
                    (ab(bs).cbq = function (b) {
                        this.tbp_1.cbq(b);
                    }),
                    (ab(bs).dbq = function () {
                        this.tbp_1.dbq();
                    }),
                    (ab(bs).ebq = function () {
                        this.tbp_1.ebq();
                    }),
                    (ab(bs).fbq = function () {
                        this.tbp_1.fbq();
                    }),
                    (ab(bs).gbq = function (b, s) {
                        this.tbp_1.gbq(b, s);
                    }),
                    (ab(bs).hbq = function (b, s, _) {
                        this.ubp_1(b, s, _);
                    }),
                    (ab(_s).ibq = function (b) {
                        return (this.vbp_1 = new bs(this, b)), this;
                    }),
                    (ab(_s).cz = function () {
                        return this.vbp_1;
                    }),
                    (ab(rs).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.kbq_1 + ", decodeEntities=" + this.lbq_1 + ", lowerCaseTags=" + this.mbq_1 + ", lowerCaseAttributeNames=" + this.nbq_1 + ", recognizeCDATA=" + this.obq_1 + ", recognizeSelfClosing=" + this.pbq_1 + ")";
                    }),
                    (ab(rs).hashCode = function () {
                        var b = kb(this.kbq_1);
                        return (b = (ob(b, 31) + kb(this.lbq_1)) | 0), (b = (ob(b, 31) + kb(this.mbq_1)) | 0), (b = (ob(b, 31) + kb(this.nbq_1)) | 0), (b = (ob(b, 31) + kb(this.obq_1)) | 0), (b = (ob(b, 31) + kb(this.pbq_1)) | 0);
                    }),
                    (ab(rs).equals = function (b) {
                        if (this === b) return !0;
                        if (!(b instanceof rs)) return !1;
                        var s = b instanceof rs ? b : pb();
                        return this.kbq_1 === s.kbq_1 && this.lbq_1 === s.lbq_1 && this.mbq_1 === s.mbq_1 && this.nbq_1 === s.nbq_1 && this.obq_1 === s.obq_1 && this.pbq_1 === s.pbq_1;
                    }),
                    (ab(vs).qbr = function (b, s) {
                        var _ = cs(this, b, s);
                        (this.tbq_1 = (s - 1) | 0), this.qbq_1.bbq(_), (this.sbq_1 = s);
                    }),
                    (ab(vs).rbr = function (b, s) {
                        var _;
                        this.tbq_1 = (s - 1) | 0;
                        var t = Tb(0);
                        if (b < Nb(t)) _ = !0;
                        else {
                            var n = Tb(65535);
                            _ = b > Nb(n);
                        }
                        if (_) throw Lb("Invalid Char code: " + b);
                        var i = Bb(b);
                        this.qbq_1.bbq(Db(i)), (this.sbq_1 = s);
                    }),
                    (ab(vs).sbr = function (b, s) {
                        this.tbq_1 = s;
                        var _ = cs(this, b, s);
                        hs(this) && (_ = _.toLowerCase()), os(this, _);
                    }),
                    (ab(vs).tbr = function (b) {
                        (this.tbq_1 = b), as(this, !1), (this.sbq_1 = (b + 1) | 0);
                    }),
                    (ab(vs).ubr = function (b, s) {
                        this.tbq_1 = s;
                        var _ = cs(this, b, s);
                        if ((hs(this) && (_ = _.toLowerCase()), ps().nbr_1.w(_) && ps().obr_1.w(_) && db(this.abr_1), us(this, _))) this.rbq_1.kbq_1 || "br" !== _ || (this.qbq_1.zbp("br"), this.qbq_1.hbq("br", Hb(), !0), this.qbq_1.ybp("br", !1));
                        else {
                            var t = this.zbq_1.c2(_);
                            if (-1 !== t) {
                                var n = (this.zbq_1.s() - t) | 0;
                                b: for (;;) {
                                    var i = n;
                                    if (((n = (i - 1) | 0), !(i > 0))) break b;
                                    var r = db(this.zbq_1);
                                    this.qbq_1.ybp(r, !(0 === n));
                                }
                            } else this.rbq_1.kbq_1 || "p" !== _ || (os(this, "p"), qs(this, !0));
                        }
                        this.sbq_1 = (s + 1) | 0;
                    }),
                    (ab(vs).vbr = function (b) {
                        (this.tbq_1 = b), this.rbq_1.kbq_1 || this.rbq_1.pbq_1 || !0 === Kb(this.abr_1) ? (qs(this, !1), (this.sbq_1 = (b + 1) | 0)) : this.tbr(b);
                    }),
                    (ab(vs).wbr = function (b, s) {
                        this.sbq_1 = b;
                        var _,
                            t = cs(this, b, s);
                        (_ = this.rbq_1.nbq_1 ? t.toLowerCase() : t), (this.wbq_1 = _);
                    }),
                    (ab(vs).xbr = function (b, s) {
                        this.xbq_1 = this.xbq_1 + cs(this, b, s);
                    }),
                    (ab(vs).ybr = function (b) {
                        var s,
                            _ = this.xbq_1,
                            t = Tb(0);
                        if (b < Nb(t)) s = !0;
                        else {
                            var n = Tb(65535);
                            s = b > Nb(n);
                        }
                        if (s) throw Lb("Invalid Char code: " + b);
                        var i = Bb(b);
                        this.xbq_1 = _ + Db(i);
                    }),
                    (ab(vs).zbr = function (b, s) {
                        this.tbq_1 = s;
                        var _ = this.wbq_1,
                            t = this.xbq_1,
                            n = b.x2_1;
                        this.qbq_1.abq(_, t, 3 === n ? '"' : 2 === n ? "'" : null);
                        var i = this.ybq_1;
                        if (null == i);
                        else {
                            var r = this.wbq_1,
                                e = this.xbq_1;
                            i.t2(r, e);
                        }
                        this.xbq_1 = "";
                    }),
                    (ab(vs).abs = function (b, s) {
                        this.tbq_1 = s;
                        var _ = cs(this, b, s),
                            t = fs(this, _);
                        this.qbq_1.gbq(t, _), (this.sbq_1 = (s + 1) | 0);
                    }),
                    (ab(vs).bbs = function (b, s) {
                        this.tbq_1 = s;
                        var _ = cs(this, b, s),
                            t = fs(this, _);
                        this.qbq_1.gbq(t, _), (this.sbq_1 = (s + 1) | 0);
                    }),
                    (ab(vs).cbs = function (b, s, _) {
                        (this.tbq_1 = s), this.qbq_1.cbq(cs(this, b, (s - _) | 0)), this.qbq_1.fbq(), (this.sbq_1 = (s + 1) | 0);
                    }),
                    (ab(vs).dbs = function (b, s, _) {
                        this.tbq_1 = s;
                        var t = cs(this, b, (s - _) | 0);
                        this.rbq_1.kbq_1 || this.rbq_1.obq_1 ? (this.qbq_1.dbq(), this.qbq_1.bbq(t), this.qbq_1.ebq()) : (this.qbq_1.cbq("[CDATA[" + t + "]]"), this.qbq_1.fbq()), (this.sbq_1 = (s + 1) | 0);
                    }),
                    (ab(vs).wbp = function () {
                        this.tbq_1 = this.sbq_1;
                        var b = Vb(this.zbq_1),
                            s = b.e1_1,
                            _ = b.f1_1;
                        if (s <= _)
                            do {
                                var t = s;
                                s = (s + 1) | 0;
                                var n = t,
                                    i = (Eb(this.zbq_1) - n) | 0;
                                this.qbq_1.ybp(this.zbq_1.t(i), !0);
                            } while (t !== _);
                        this.qbq_1.wbp();
                    }),
                    (ab(vs).g6e = function (b) {
                        if (this.ebr_1) return this.qbq_1.xbp(Fb(".write() after done!")), $b;
                        this.bbr_1.k(b), this.fbr_1.obs_1 && (this.fbr_1.g6e(b), (this.dbr_1 = (this.dbr_1 + 1) | 0));
                    }),
                    (ab(vs).sbs = function (b) {
                        if (this.ebr_1) return this.qbq_1.xbp(Fb(".end() after done!")), $b;
                        null == b || this.g6e(b), (this.ebr_1 = !0), this.fbr_1.abn();
                    }),
                    (ab(vs).tbs = function (b, s) {
                        var _;
                        return (b = b === fb ? null : b), s === fb ? (this.sbs(b), (_ = $b)) : (_ = s.sbs.call(this, b)), _;
                    }),
                    (ab(e_).zbs = function (b) {
                        return b === (ds(), l).wbs_1 || b === (ds(), q).wbs_1 || b === (ds(), a).wbs_1 || b === (ds(), f).wbs_1 || b === (ds(), c).wbs_1;
                    }),
                    (ab(e_).ybs = function (b) {
                        return b === q_().wbs_1 || b === w_().wbs_1 || this.zbs(b);
                    }),
                    (ab(e_).hbt = function (b) {
                        return (b >= (ds(), I).wbs_1 && b <= (ds(), T).wbs_1) || (b >= (ds(), C).wbs_1 && b <= (ds(), S).wbs_1);
                    }),
                    (ab(e_).ibt = function (b) {
                        return b >= (ds(), g).wbs_1 && b <= (ds(), j).wbs_1;
                    }),
                    (ab(T_).g6e = function (b) {
                        (this.pbs_1 = (this.pbs_1 + this.ibs_1.length) | 0), (this.ibs_1 = b), s_(this);
                    }),
                    (ab(T_).abn = function () {
                        this.obs_1 && __(this);
                    }),
                    (ab(ss).wbp = function () {}),
                    (ab(ss).xbp = function (b) {}),
                    (ab(ss).ybp = function (b, s) {}),
                    (ab(ss).zbp = function (b) {}),
                    (ab(ss).abq = function (b, s, _) {}),
                    (ab(ss).hbq = function (b, s, _) {}),
                    (ab(ss).bbq = function (b) {}),
                    (ab(ss).cbq = function (b) {}),
                    (ab(ss).dbq = function () {}),
                    (ab(ss).ebq = function () {}),
                    (ab(ss).fbq = function () {}),
                    (ab(ss).gbq = function (b, s) {}),
                    (t = new ss()),
                    (ub = new e_()),
                    (b.$_$ = b.$_$ || {}),
                    (b.$_$.a = _s),
                    (b.$_$.b = vs);
            })(b.exports, _(519039), _(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.41e4dc8a.js.map
