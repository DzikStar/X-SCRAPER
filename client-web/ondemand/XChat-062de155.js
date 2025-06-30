(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-062de155"],
    {
        902821: (d, s, t) => {
            !(function (d, s, t) {
                "use strict";
                var _,
                    n,
                    i,
                    r,
                    e,
                    u,
                    h,
                    a,
                    o,
                    l,
                    f,
                    c,
                    q,
                    m,
                    w,
                    v,
                    b,
                    j,
                    p,
                    $,
                    g,
                    y,
                    k,
                    A,
                    C,
                    z,
                    x,
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
                    dd,
                    sd,
                    td,
                    _d,
                    nd,
                    id,
                    rd,
                    ed,
                    ud,
                    hd,
                    ad = Math.imul,
                    od = s.$_$.ef,
                    ld = s.$_$.be,
                    fd = s.$_$.g,
                    cd = s.$_$.he,
                    qd = s.$_$.fe,
                    md = s.$_$.ce,
                    wd = s.$_$.vd,
                    vd = s.$_$.gk,
                    bd = s.$_$.t6,
                    jd = s.$_$.ea,
                    pd = s.$_$.eb,
                    $d = s.$_$.d1,
                    gd = s.$_$.l9,
                    yd = s.$_$.cb,
                    kd = s.$_$.tj,
                    Ad = s.$_$.hb,
                    Cd = s.$_$.gb,
                    zd = s.$_$.ul,
                    xd = s.$_$.la,
                    Id = s.$_$.p1,
                    Sd = s.$_$.u,
                    Td = s.$_$.t3,
                    Nd = s.$_$.z3,
                    Ld = s.$_$.i2,
                    Bd = s.$_$.ze,
                    Dd = s.$_$.a4,
                    Hd = s.$_$.g9,
                    Kd = s.$_$.da,
                    Vd = s.$_$.u9,
                    Ed = s.$_$.aa,
                    Fd = s.$_$.a2,
                    Md = s.$_$.kk,
                    Qd = s.$_$.o4,
                    Ud = s.$_$.l4,
                    Od = s.$_$.g4,
                    Zd = s.$_$.rd,
                    Pd = s.$_$.ld,
                    Xd = t.$_$.a,
                    Gd = s.$_$.md,
                    Rd = s.$_$.bh,
                    Jd = s.$_$.il,
                    Wd = s.$_$.f4,
                    Yd = s.$_$.j4;
                function ds(d, s) {
                    (this.wdp_1 = s), (this.vdp_1 = d.xdp_1);
                }
                function ss() {}
                function ts() {
                    this.xdp_1 = _;
                }
                function _s() {}
                function ns() {
                    (n = this), (this.ldq_1 = new rs());
                }
                function is() {
                    return null == n && new ns(), n;
                }
                function rs(d, s, t, _, n, i) {
                    is(), (d = d !== fd && d), (s = s === fd || s), (t = t === fd ? !d : t), (_ = _ === fd ? !d : _), (n = n === fd ? d : n), (i = i === fd ? d : i), (this.mdq_1 = d), (this.ndq_1 = s), (this.odq_1 = t), (this.pdq_1 = _), (this.qdq_1 = n), (this.rdq_1 = i);
                }
                function es() {
                    if (h) return bd;
                    (h = !0), (i = new ms("NoValue", 0)), (r = new ms("Unquoted", 1)), (e = new ms("Single", 2)), (u = new ms("Double", 3));
                }
                function us(d) {
                    return d.tdq_1.odq_1;
                }
                function hs(d, s) {
                    return !d.tdq_1.mdq_1 && vs().odr_1.w(s);
                }
                function as(d, s) {
                    (d.wdq_1 = d.udq_1), (d.xdq_1 = s);
                    var t = vs().ndr_1.t2(s);
                    if (!d.tdq_1.mdq_1 && null != t)
                        d: for (;;) {
                            if (!(!d.bdr_1.h() && t.w(jd(d.bdr_1)))) break d;
                            var _ = pd(d.bdr_1);
                            d.sdq_1.adq(_, !0);
                        }
                    hs(d, s) || (d.bdr_1.k(s), vs().pdr_1.w(s) ? d.cdr_1.k(!0) : vs().qdr_1.w(s) && d.cdr_1.k(!1)), d.sdq_1.bdq(s), (d.adr_1 = $d());
                }
                function os(d, s) {
                    d.udq_1 = d.wdq_1;
                    var t = d.adr_1;
                    null == t || (d.sdq_1.jdq(d.xdq_1, t, s), (d.adr_1 = null)), hs(d, d.xdq_1) && d.sdq_1.adq(d.xdq_1, !0), (d.xdq_1 = "");
                }
                function ls(d, s) {
                    var t = d.xdq_1;
                    os(d, s), d.bdr_1.s() > 0 && d.bdr_1.t((d.bdr_1.s() - 1) | 0) === t && (d.sdq_1.adq(t, !s), pd(d.bdr_1));
                }
                function fs(d, s) {
                    var t = vs().rdr_1.zd(s),
                        _ = null == t ? null : t.de(),
                        n = null == _ ? null : _.i(),
                        i = null == n ? -1 : n,
                        r = i < 0 ? s : s.substring(0, i);
                    return us(d) && (r = r.toLowerCase()), r;
                }
                function cs(d, s, t) {
                    for (; ((s - d.edr_1) | 0) >= gd(d.ddr_1).length; ) qs(d);
                    for (var _ = gd(d.ddr_1), n = (s - d.edr_1) | 0, i = (t - d.edr_1) | 0, r = _.substring(n, i); ((t - d.edr_1) | 0) > gd(d.ddr_1).length; ) {
                        qs(d);
                        var e = r,
                            u = gd(d.ddr_1),
                            h = (t - d.edr_1) | 0;
                        r = e + u.substring(0, h);
                    }
                    return r;
                }
                function qs(d) {
                    (d.edr_1 = (d.edr_1 + gd(d.ddr_1).length) | 0), (d.fdr_1 = (d.fdr_1 - 1) | 0), yd(d.ddr_1);
                }
                function ms(d, s) {
                    kd.call(this, d, s);
                }
                function ws() {
                    (a = this), (this.idr_1 = Ad(["input", "option", "optgroup", "select", "button", "datalist", "textarea"])), (this.jdr_1 = Cd("p")), (this.kdr_1 = Ad(["thead", "tbody"])), (this.ldr_1 = Ad(["dt", "dd"])), (this.mdr_1 = Ad(["rt", "rp"])), (this.ndr_1 = xd([zd("tr", Ad(["tr", "th", "td"])), zd("th", Cd("th")), zd("td", Ad(["thead", "th", "td"])), zd("body", Ad(["head", "link", "script"])), zd("li", Cd("li")), zd("p", this.jdr_1), zd("h1", this.jdr_1), zd("h2", this.jdr_1), zd("h3", this.jdr_1), zd("h4", this.jdr_1), zd("h5", this.jdr_1), zd("h6", this.jdr_1), zd("select", this.idr_1), zd("input", this.idr_1), zd("output", this.idr_1), zd("button", this.idr_1), zd("datalist", this.idr_1), zd("textarea", this.idr_1), zd("option", Cd("option")), zd("optgroup", Ad(["optgroup", "option"])), zd("dd", this.ldr_1), zd("dt", this.ldr_1), zd("address", this.jdr_1), zd("article", this.jdr_1), zd("aside", this.jdr_1), zd("blockquote", this.jdr_1), zd("details", this.jdr_1), zd("div", this.jdr_1), zd("dl", this.jdr_1), zd("fieldset", this.jdr_1), zd("figcaption", this.jdr_1), zd("figure", this.jdr_1), zd("footer", this.jdr_1), zd("form", this.jdr_1), zd("header", this.jdr_1), zd("hr", this.jdr_1), zd("main", this.jdr_1), zd("menu", this.jdr_1), zd("nav", this.jdr_1), zd("ol", this.jdr_1), zd("pre", this.jdr_1), zd("section", this.jdr_1), zd("table", this.jdr_1), zd("ul", this.jdr_1), zd("rt", this.mdr_1), zd("rp", this.mdr_1), zd("tbody", this.kdr_1), zd("tfoot", this.kdr_1)])), (this.odr_1 = Ad(["area", "base", "basefont", "br", "col", "command", "embed", "frame", "hr", "img", "input", "isindex", "keygen", "link", "meta", "param", "source", "track", "wbr"])), (this.pdr_1 = Ad(["math", "svg"])), (this.qdr_1 = Ad(["mi", "mo", "mn", "ms", "mtext", "annotation-xml", "foreignobject", "desc", "title"])), (this.rdr_1 = Id("\\s|/"));
                }
                function vs() {
                    return null == a && new ws(), a;
                }
                function bs() {
                    return es(), i;
                }
                function js(d, s) {
                    vs(), (d = d === fd ? _ : d), (s = s === fd ? is().ldq_1 : s), (this.sdq_1 = d), (this.tdq_1 = s), (this.udq_1 = 0), (this.vdq_1 = 0), (this.wdq_1 = 0), (this.xdq_1 = ""), (this.ydq_1 = ""), (this.zdq_1 = ""), (this.adr_1 = null);
                    this.bdr_1 = Sd();
                    this.cdr_1 = Sd();
                    (this.ddr_1 = Sd()), (this.edr_1 = 0), (this.fdr_1 = 0), (this.gdr_1 = !1), (this.hdr_1 = new Tt(this.tdq_1, this));
                }
                function ps() {
                    if (L) return bd;
                    (L = !0), (o = new _t("Tab", 0, 9)), (l = new _t("NewLine", 1, 10)), (f = new _t("FormFeed", 2, 12)), (c = new _t("CarriageReturn", 3, 13)), (q = new _t("Space", 4, 32)), (m = new _t("ExclamationMark", 5, 33)), new _t("Number", 6, 35), (w = new _t("Amp", 7, 38)), (v = new _t("SingleQuote", 8, 39)), (b = new _t("DoubleQuote", 9, 34)), (j = new _t("Dash", 10, 45)), (p = new _t("Slash", 11, 47)), ($ = new _t("Zero", 12, 48)), (g = new _t("Nine", 13, 57)), (y = new _t("Semi", 14, 59)), (k = new _t("Lt", 15, 60)), (A = new _t("Eq", 16, 61)), (C = new _t("Gt", 17, 62)), (z = new _t("QuestionMark", 18, 63)), (x = new _t("UpperA", 19, 65)), (I = new _t("LowerA", 20, 97)), new _t("UpperF", 21, 70), new _t("LowerF", 22, 102), (S = new _t("UpperZ", 23, 90)), (T = new _t("LowerZ", 24, 122)), new _t("LowerX", 25, 120), (N = new _t("OpeningSquareBracket", 26, 91));
                }
                function $s() {
                    if (ed) return bd;
                    (ed = !0), (B = new nt("Text", 0)), (D = new nt("BeforeTagName", 1)), (H = new nt("InTagName", 2)), (K = new nt("InSelfClosingTag", 3)), (V = new nt("BeforeClosingTagName", 4)), (E = new nt("InClosingTagName", 5)), (F = new nt("AfterClosingTagName", 6)), (M = new nt("BeforeAttributeName", 7)), (Q = new nt("InAttributeName", 8)), (U = new nt("AfterAttributeName", 9)), (O = new nt("BeforeAttributeValue", 10)), (Z = new nt("InAttributeValueDq", 11)), (P = new nt("InAttributeValueSq", 12)), (X = new nt("InAttributeValueNq", 13)), (G = new nt("BeforeDeclaration", 14)), (R = new nt("InDeclaration", 15)), (J = new nt("InProcessingInstruction", 16)), (W = new nt("BeforeComment", 17)), (Y = new nt("CDATASequence", 18)), (dd = new nt("InSpecialComment", 19)), (sd = new nt("InCommentLike", 20)), (td = new nt("BeforeSpecialS", 21)), (_d = new nt("BeforeSpecialT", 22)), (nd = new nt("SpecialStartSequence", 23)), (id = new nt("InSpecialTag", 24)), (rd = new nt("InEntity", 25));
                }
                function gs(d, s) {
                    s === ct().yds_1 || (!d.ids_1 && Cs(d, ct().yds_1)) ? (d.mds_1 > d.lds_1 && d.gds_1.sdr(d.lds_1, d.mds_1), (d.jds_1 = ($s(), D)), (d.lds_1 = d.mds_1)) : d.ids_1 && s === ut().yds_1 && Ws(d);
                }
                function ys(d, s) {
                    var t = d.sds_1;
                    if (null == (null == t ? null : new Md(t))) return bd;
                    var _,
                        n = t,
                        i = d.tds_1 === Qd(n);
                    if (i) _ = hd.adt(s);
                    else {
                        var r = 32 | s,
                            e = Ud(n, d.tds_1);
                        _ = r === (255 & Od(e));
                    }
                    if (_) {
                        if (!i) return (d.tds_1 = (d.tds_1 + 1) | 0), bd;
                    } else d.pds_1 = !1;
                    (d.tds_1 = 0), (d.jds_1 = vt()), Ts(d, s);
                }
                function ks(d, s) {
                    var t = d.sds_1;
                    if (null == (null == t ? null : new Md(t))) return bd;
                    var _ = t;
                    if (d.tds_1 === Qd(_)) {
                        if (s === mt().yds_1 || hd.bdt(s)) {
                            var n = (d.mds_1 - Qd(_)) | 0;
                            if (d.lds_1 < n) {
                                var i = d.mds_1;
                                (d.mds_1 = n), d.gds_1.sdr(d.lds_1, n), (d.mds_1 = i);
                            }
                            return (d.pds_1 = !1), (d.lds_1 = (n + 2) | 0), Ls(d, s), bd;
                        }
                        d.tds_1 = 0;
                    }
                    var r = 32 | s,
                        e = Ud(_, d.tds_1);
                    r === (255 & Od(e)) ? (d.tds_1 = (d.tds_1 + 1) | 0) : 0 === d.tds_1 ? (Zd(_, rt().hdt_1) ? d.ids_1 && s === ut().yds_1 && Ws(d) : Cs(d, ct().yds_1) && (d.tds_1 = 1)) : (d.tds_1 = s === ct().yds_1 ? 1 : 0);
                }
                function As(d, s) {
                    var t = Ud(rt().cdt_1, d.tds_1);
                    s === (255 & Od(t)) ? ((d.tds_1 = (d.tds_1 + 1) | 0), d.tds_1 === Qd(rt().cdt_1) && ((d.jds_1 = xt()), (d.sds_1 = rt().ddt_1), (d.tds_1 = 0), (d.lds_1 = (d.mds_1 + 1) | 0))) : ((d.tds_1 = 0), (d.jds_1 = zt()), Zs(d, s));
                }
                function Cs(d, s) {
                    for (; d.mds_1 < ((d.kds_1.length + d.rds_1) | 0); ) {
                        var t = Pd(d.kds_1, (d.mds_1 - d.rds_1) | 0);
                        if (Nd(t) === s) return !0;
                        d.mds_1 = (d.mds_1 + 1) | 0;
                    }
                    return (d.mds_1 = (((d.kds_1.length + d.rds_1) | 0) - 1) | 0), !1;
                }
                function zs(d, s) {
                    var t = d.sds_1;
                    if (null == (null == t ? null : new Md(t))) return bd;
                    var _ = t,
                        n = Ud(_, d.tds_1);
                    if (s === (255 & Od(n))) (d.tds_1 = (d.tds_1 + 1) | 0), d.tds_1 === Qd(_) && (Zd(_, rt().ddt_1) ? d.gds_1.fds(d.lds_1, d.mds_1, 2) : d.gds_1.eds(d.lds_1, d.mds_1, 2), (d.tds_1 = 0), (d.lds_1 = (d.mds_1 + 1) | 0), (d.jds_1 = wt()));
                    else if (0 === d.tds_1) {
                        var i = Ud(_, 0);
                        Cs(d, 255 & Od(i)) && (d.tds_1 = 1);
                    } else {
                        var r = Ud(_, (d.tds_1 - 1) | 0);
                        s !== (255 & Od(r)) && (d.tds_1 = 0);
                    }
                }
                function xs(d, s) {
                    return d.hds_1 ? !hd.adt(s) : hd.jdt(s);
                }
                function Is(d, s, t) {
                    (d.pds_1 = !0), (d.sds_1 = s), (d.tds_1 = t), (d.jds_1 = ($s(), nd));
                }
                function Ss(d, s) {
                    if (s === (ps(), m).yds_1) (d.jds_1 = ($s(), G)), (d.lds_1 = (d.mds_1 + 1) | 0);
                    else if (s === (ps(), z).yds_1) (d.jds_1 = ($s(), J)), (d.lds_1 = (d.mds_1 + 1) | 0);
                    else if (xs(d, s)) {
                        var t = 32 | s;
                        if (((d.lds_1 = d.mds_1), d.hds_1)) d.jds_1 = vt();
                        else {
                            var _ = Ud(rt().fdt_1, 2);
                            if (t === (255 & Od(_))) d.jds_1 = ($s(), td);
                            else {
                                var n = Ud(rt().hdt_1, 2);
                                t === (255 & Od(n)) ? (d.jds_1 = ($s(), _d)) : (d.jds_1 = vt());
                            }
                        }
                    } else s === lt().yds_1 ? (d.jds_1 = ($s(), V)) : ((d.jds_1 = wt()), gs(d, s));
                }
                function Ts(d, s) {
                    hd.adt(s) && (d.gds_1.udr(d.lds_1, d.mds_1), (d.lds_1 = -1), (d.jds_1 = pt()), Ds(d, s));
                }
                function Ns(d, s) {
                    if (!hd.bdt(s))
                        if (s === mt().yds_1) d.jds_1 = wt();
                        else {
                            var t,
                                _ = d;
                            xs(d, s) ? (t = jt()) : ($s(), (t = dd)), (_.jds_1 = t), (d.lds_1 = d.mds_1);
                        }
                }
                function Ls(d, s) {
                    (s === mt().yds_1 || hd.bdt(s)) && (d.gds_1.wdr(d.lds_1, d.mds_1), (d.lds_1 = -1), (d.jds_1 = ($s(), F)), Bs(d, s));
                }
                function Bs(d, s) {
                    (s === mt().yds_1 || Cs(d, mt().yds_1)) && ((d.jds_1 = wt()), (d.lds_1 = (d.mds_1 + 1) | 0));
                }
                function Ds(d, s) {
                    s === mt().yds_1 ? (d.gds_1.vdr(d.mds_1), d.pds_1 ? ((d.jds_1 = It()), (d.tds_1 = 0)) : (d.jds_1 = wt()), (d.lds_1 = (d.mds_1 + 1) | 0)) : s === lt().yds_1 ? (d.jds_1 = bt()) : hd.bdt(s) || ((d.jds_1 = $t()), (d.lds_1 = d.mds_1));
                }
                function Hs(d, s) {
                    s === mt().yds_1 ? (d.gds_1.xdr(d.mds_1), (d.jds_1 = wt()), (d.lds_1 = (d.mds_1 + 1) | 0), (d.pds_1 = !1)) : hd.bdt(s) || ((d.jds_1 = pt()), Ds(d, s));
                }
                function Ks(d, s) {
                    (s === qt().yds_1 || hd.adt(s)) && (d.gds_1.ydr(d.lds_1, d.mds_1), (d.lds_1 = d.mds_1), (d.jds_1 = gt()), Vs(d, s));
                }
                function Vs(d, s) {
                    s === qt().yds_1 ? (d.jds_1 = yt()) : s === lt().yds_1 || s === mt().yds_1 ? (d.gds_1.bds(bs(), d.lds_1), (d.lds_1 = -1), (d.jds_1 = pt()), Ds(d, s)) : hd.bdt(s) || (d.gds_1.bds(bs(), d.lds_1), (d.jds_1 = $t()), (d.lds_1 = d.mds_1));
                }
                function Es(d, s) {
                    s === at().yds_1 ? ((d.jds_1 = kt()), (d.lds_1 = (d.mds_1 + 1) | 0)) : s === ht().yds_1 ? ((d.jds_1 = At()), (d.lds_1 = (d.mds_1 + 1) | 0)) : hd.bdt(s) || ((d.lds_1 = d.mds_1), (d.jds_1 = Ct()), Us(d, s));
                }
                function Fs(d, s, t) {
                    s === t || (!d.ids_1 && Cs(d, t)) ? (d.gds_1.zdr(d.lds_1, d.mds_1), (d.lds_1 = -1), d.gds_1.bds(t === at().yds_1 ? (es(), u) : (es(), e), (d.mds_1 + 1) | 0), (d.jds_1 = pt())) : d.ids_1 && s === ut().yds_1 && Ws(d);
                }
                function Ms(d, s) {
                    Fs(d, s, at().yds_1);
                }
                function Qs(d, s) {
                    Fs(d, s, ht().yds_1);
                }
                function Us(d, s) {
                    hd.bdt(s) || s === mt().yds_1 ? (d.gds_1.zdr(d.lds_1, d.mds_1), (d.lds_1 = -1), d.gds_1.bds((es(), r), d.mds_1), (d.jds_1 = pt()), Ds(d, s)) : d.ids_1 && s === ut().yds_1 && Ws(d);
                }
                function Os(d, s) {
                    s === (ps(), N).yds_1 ? ((d.jds_1 = ($s(), Y)), (d.tds_1 = 0)) : (d.jds_1 = s === ot().yds_1 ? ($s(), W) : zt());
                }
                function Zs(d, s) {
                    (s === mt().yds_1 || Cs(d, mt().yds_1)) && (d.gds_1.cds(d.lds_1, d.mds_1), (d.jds_1 = wt()), (d.lds_1 = (d.mds_1 + 1) | 0));
                }
                function Ps(d, s) {
                    (s === mt().yds_1 || Cs(d, mt().yds_1)) && (d.gds_1.dds(d.lds_1, d.mds_1), (d.jds_1 = wt()), (d.lds_1 = (d.mds_1 + 1) | 0));
                }
                function Xs(d, s) {
                    s === ot().yds_1 ? ((d.jds_1 = xt()), (d.sds_1 = rt().edt_1), (d.tds_1 = 2), (d.lds_1 = (d.mds_1 + 1) | 0)) : (d.jds_1 = zt());
                }
                function Gs(d, s) {
                    var t = d.sds_1;
                    if (null == (null == t ? null : new Md(t)));
                    else {
                        var _ = (null == t ? null : new Md(t)).xq_1;
                        if (s === mt().yds_1) d.tds_1 === ((Qd(_) - 1) | 0) && (d.gds_1.eds(d.lds_1, (1 + ((d.mds_1 - Qd(_)) | 0)) | 0, 3), (d.lds_1 = -1), (d.jds_1 = wt()));
                        else {
                            var n = Ud(_, d.tds_1);
                            s !== (255 & Od(n)) && ((d.jds_1 = vt()), Ts(d, s));
                        }
                    }
                }
                function Rs(d, s) {
                    var t = 32 | s,
                        _ = Ud(rt().fdt_1, 3);
                    if (t === (255 & Od(_))) Is(d, rt().fdt_1, 4);
                    else {
                        var n = Ud(rt().gdt_1, 3);
                        t === (255 & Od(n)) ? Is(d, rt().gdt_1, 4) : ((d.jds_1 = vt()), Ts(d, s));
                    }
                }
                function Js(d, s) {
                    var t = 32 | s,
                        _ = Ud(rt().hdt_1, 3);
                    if (t === (255 & Od(_))) Is(d, rt().hdt_1, 4);
                    else {
                        var n = Ud(rt().idt_1, 3);
                        t === (255 & Od(n)) ? Is(d, rt().idt_1, 4) : ((d.jds_1 = vt()), Ts(d, s));
                    }
                }
                function Ws(d) {
                    (d.ods_1 = d.jds_1), (d.jds_1 = St()), (d.nds_1 = d.mds_1);
                }
                function Ys(d, s) {
                    if (s === ft().yds_1) {
                        var t = Xd(),
                            _ = d.kds_1,
                            n = (d.nds_1 - d.rds_1) | 0,
                            i = (1 + ((d.mds_1 - d.rds_1) | 0)) | 0,
                            r = _.substring(n, i),
                            e = t.idp(r);
                        if (((d.jds_1 = d.ods_1), 0 === Gd(e))) d.mds_1 = d.nds_1;
                        else {
                            var u = Rd(e);
                            !(function (d, s, t) {
                                d.ods_1.equals(wt()) || d.ods_1.equals(It()) ? (d.lds_1 < d.nds_1 && d.gds_1.sdr(d.lds_1, d.nds_1), (d.lds_1 = (d.nds_1 + t) | 0), (d.mds_1 = (d.lds_1 - 1) | 0), d.gds_1.tdr(s, d.lds_1)) : (d.lds_1 < d.nds_1 && d.gds_1.zdr(d.lds_1, d.nds_1), (d.lds_1 = (d.nds_1 + t) | 0), (d.mds_1 = (d.lds_1 - 1) | 0), d.gds_1.ads(s));
                            })(d, Nd(u), (((d.mds_1 + 1) | 0) - d.nds_1) | 0);
                        }
                    }
                    (((((d.mds_1 + 1) | 0) - d.nds_1) | 0) > 33 ||
                        !(function (d, s) {
                            return hd.jdt(s) || hd.kdt(s) || s === ft().yds_1;
                        })(0, s)) &&
                        ((d.jds_1 = d.ods_1), (d.mds_1 = d.nds_1));
                }
                function dt(d) {
                    return d.mds_1 < ((d.kds_1.length + d.rds_1) | 0) && d.qds_1;
                }
                function st(d) {
                    for (; dt(d); ) {
                        var s = Pd(d.kds_1, (d.mds_1 - d.rds_1) | 0),
                            t = Nd(s);
                        switch (d.jds_1.a3_1) {
                            case 0:
                                gs(d, t);
                                break;
                            case 23:
                                ys(d, t);
                                break;
                            case 24:
                                ks(d, t);
                                break;
                            case 18:
                                As(d, t);
                                break;
                            case 11:
                                Ms(d, t);
                                break;
                            case 8:
                                Ks(d, t);
                                break;
                            case 20:
                                zs(d, t);
                                break;
                            case 19:
                                Gs(d, t);
                                break;
                            case 7:
                                Ds(d, t);
                                break;
                            case 2:
                                Ts(d, t);
                                break;
                            case 5:
                                Ls(d, t);
                                break;
                            case 1:
                                Ss(d, t);
                                break;
                            case 9:
                                Vs(d, t);
                                break;
                            case 12:
                                Qs(d, t);
                                break;
                            case 10:
                                Es(d, t);
                                break;
                            case 4:
                                Ns(d, t);
                                break;
                            case 6:
                                Bs(d, t);
                                break;
                            case 21:
                                Rs(d, t);
                                break;
                            case 22:
                                Js(d, t);
                                break;
                            case 13:
                                Us(d, t);
                                break;
                            case 3:
                                Hs(d, t);
                                break;
                            case 15:
                                Zs(d, t);
                                break;
                            case 14:
                                Os(d, t);
                                break;
                            case 17:
                                Xs(d, t);
                                break;
                            case 16:
                                Ps(d, t);
                                break;
                            case 25:
                                Ys(d, t);
                                break;
                            default:
                                Jd();
                        }
                        d.mds_1 = (d.mds_1 + 1) | 0;
                    }
                    !(function (d) {
                        d.qds_1 && d.lds_1 !== d.mds_1 && (d.jds_1.equals(wt()) || (d.jds_1.equals(It()) && 0 === d.tds_1) ? (d.gds_1.sdr(d.lds_1, d.mds_1), (d.lds_1 = d.mds_1)) : (d.jds_1.equals(kt()) || d.jds_1.equals(At()) || d.jds_1.equals(Ct())) && (d.gds_1.zdr(d.lds_1, d.mds_1), (d.lds_1 = d.mds_1)));
                    })(d);
                }
                function tt(d) {
                    d.jds_1.equals(St()) && (d.jds_1 = d.ods_1),
                        (function (d) {
                            var s = (d.kds_1.length + d.rds_1) | 0;
                            if (d.lds_1 >= s) return bd;
                            if (d.jds_1.equals(xt())) {
                                var t = d.sds_1;
                                Zd(null == t ? null : new Md(t), new Md(rt().ddt_1)) ? d.gds_1.fds(d.lds_1, s, 0) : d.gds_1.eds(d.lds_1, s, 0);
                            } else d.jds_1.equals(vt()) || d.jds_1.equals(pt()) || d.jds_1.equals(yt()) || d.jds_1.equals(gt()) || d.jds_1.equals($t()) || d.jds_1.equals(At()) || d.jds_1.equals(kt()) || d.jds_1.equals(Ct()) || d.jds_1.equals(jt()) || d.jds_1.equals(bt()) || d.gds_1.sdr(d.lds_1, s);
                        })(d),
                        d.gds_1.ydp();
                }
                function _t(d, s, t) {
                    kd.call(this, d, s), (this.yds_1 = t);
                }
                function nt(d, s) {
                    kd.call(this, d, s);
                }
                function it() {
                    ud = this;
                    this.cdt_1 = Yd(new Int8Array([Wd(67), Wd(68), Wd(65), Wd(84), Wd(65), Wd(91)]));
                    this.ddt_1 = Yd(new Int8Array([Wd(93), Wd(93), Wd(62)]));
                    this.edt_1 = Yd(new Int8Array([Wd(45), Wd(45), Wd(62)]));
                    this.fdt_1 = Yd(new Int8Array([Wd(60), Wd(47), Wd(115), Wd(99), Wd(114), Wd(105), Wd(112), Wd(116)]));
                    this.gdt_1 = Yd(new Int8Array([Wd(60), Wd(47), Wd(115), Wd(116), Wd(121), Wd(108), Wd(101)]));
                    this.hdt_1 = Yd(new Int8Array([Wd(60), Wd(47), Wd(116), Wd(105), Wd(116), Wd(108), Wd(101)]));
                    this.idt_1 = Yd(new Int8Array([Wd(60), Wd(47), Wd(116), Wd(101), Wd(120), Wd(116), Wd(97), Wd(114), Wd(101), Wd(97)]));
                }
                function rt() {
                    return null == ud && new it(), ud;
                }
                function et() {
                    this.zds_1 = 33;
                }
                function ut() {
                    return ps(), w;
                }
                function ht() {
                    return ps(), v;
                }
                function at() {
                    return ps(), b;
                }
                function ot() {
                    return ps(), j;
                }
                function lt() {
                    return ps(), p;
                }
                function ft() {
                    return ps(), y;
                }
                function ct() {
                    return ps(), k;
                }
                function qt() {
                    return ps(), A;
                }
                function mt() {
                    return ps(), C;
                }
                function wt() {
                    return $s(), B;
                }
                function vt() {
                    return $s(), H;
                }
                function bt() {
                    return $s(), K;
                }
                function jt() {
                    return $s(), E;
                }
                function pt() {
                    return $s(), M;
                }
                function $t() {
                    return $s(), Q;
                }
                function gt() {
                    return $s(), U;
                }
                function yt() {
                    return $s(), O;
                }
                function kt() {
                    return $s(), Z;
                }
                function At() {
                    return $s(), P;
                }
                function Ct() {
                    return $s(), X;
                }
                function zt() {
                    return $s(), R;
                }
                function xt() {
                    return $s(), sd;
                }
                function It() {
                    return $s(), id;
                }
                function St() {
                    return $s(), rd;
                }
                function Tt(d, s) {
                    (this.gds_1 = s), (this.hds_1 = d.mdq_1), (this.ids_1 = d.ndq_1), (this.jds_1 = wt()), (this.kds_1 = ""), (this.lds_1 = 0), (this.mds_1 = 0), (this.nds_1 = 0), (this.ods_1 = wt()), (this.pds_1 = !1), (this.qds_1 = !0), (this.rds_1 = 0), (this.sds_1 = null), (this.tds_1 = 0);
                }
                qd(_s, "KsoupHtmlHandler"),
                    ld(ds, fd, fd, fd, [_s]),
                    cd(ss, "Default", fd, fd, [_s]),
                    ld(ts, "Builder", ts),
                    md(ns),
                    ld(rs, "KsoupHtmlOptions", rs),
                    ld(ms, "QuoteType", fd, kd),
                    md(ws),
                    ld(js, "KsoupHtmlParser", js),
                    ld(_t, "CharCodes", fd, kd),
                    ld(nt, "State", fd, kd),
                    cd(it, "Sequences"),
                    md(et),
                    ld(Tt, "KsoupTokenizer"),
                    (od(ds).ydp = function () {
                        this.vdp_1.ydp();
                    }),
                    (od(ds).zdp = function (d) {
                        this.vdp_1.zdp(d);
                    }),
                    (od(ds).adq = function (d, s) {
                        this.vdp_1.adq(d, s);
                    }),
                    (od(ds).bdq = function (d) {
                        this.vdp_1.bdq(d);
                    }),
                    (od(ds).cdq = function (d, s, t) {
                        this.vdp_1.cdq(d, s, t);
                    }),
                    (od(ds).ddq = function (d) {
                        this.vdp_1.ddq(d);
                    }),
                    (od(ds).edq = function (d) {
                        this.vdp_1.edq(d);
                    }),
                    (od(ds).fdq = function () {
                        this.vdp_1.fdq();
                    }),
                    (od(ds).gdq = function () {
                        this.vdp_1.gdq();
                    }),
                    (od(ds).hdq = function () {
                        this.vdp_1.hdq();
                    }),
                    (od(ds).idq = function (d, s) {
                        this.vdp_1.idq(d, s);
                    }),
                    (od(ds).jdq = function (d, s, t) {
                        this.wdp_1(d, s, t);
                    }),
                    (od(ts).kdq = function (d) {
                        return (this.xdp_1 = new ds(this, d)), this;
                    }),
                    (od(ts).d10 = function () {
                        return this.xdp_1;
                    }),
                    (od(rs).toString = function () {
                        return "KsoupHtmlOptions(xmlMode=" + this.mdq_1 + ", decodeEntities=" + this.ndq_1 + ", lowerCaseTags=" + this.odq_1 + ", lowerCaseAttributeNames=" + this.pdq_1 + ", recognizeCDATA=" + this.qdq_1 + ", recognizeSelfClosing=" + this.rdq_1 + ")";
                    }),
                    (od(rs).hashCode = function () {
                        var d = wd(this.mdq_1);
                        return (d = (ad(d, 31) + wd(this.ndq_1)) | 0), (d = (ad(d, 31) + wd(this.odq_1)) | 0), (d = (ad(d, 31) + wd(this.pdq_1)) | 0), (d = (ad(d, 31) + wd(this.qdq_1)) | 0), (d = (ad(d, 31) + wd(this.rdq_1)) | 0);
                    }),
                    (od(rs).equals = function (d) {
                        if (this === d) return !0;
                        if (!(d instanceof rs)) return !1;
                        var s = d instanceof rs ? d : vd();
                        return this.mdq_1 === s.mdq_1 && this.ndq_1 === s.ndq_1 && this.odq_1 === s.odq_1 && this.pdq_1 === s.pdq_1 && this.qdq_1 === s.qdq_1 && this.rdq_1 === s.rdq_1;
                    }),
                    (od(js).sdr = function (d, s) {
                        var t = cs(this, d, s);
                        (this.vdq_1 = (s - 1) | 0), this.sdq_1.ddq(t), (this.udq_1 = s);
                    }),
                    (od(js).tdr = function (d, s) {
                        var t;
                        this.vdq_1 = (s - 1) | 0;
                        var _ = Td(0);
                        if (d < Nd(_)) t = !0;
                        else {
                            var n = Td(65535);
                            t = d > Nd(n);
                        }
                        if (t) throw Ld("Invalid Char code: " + d);
                        var i = Bd(d);
                        this.sdq_1.ddq(Dd(i)), (this.udq_1 = s);
                    }),
                    (od(js).udr = function (d, s) {
                        this.vdq_1 = s;
                        var t = cs(this, d, s);
                        us(this) && (t = t.toLowerCase()), as(this, t);
                    }),
                    (od(js).vdr = function (d) {
                        (this.vdq_1 = d), os(this, !1), (this.udq_1 = (d + 1) | 0);
                    }),
                    (od(js).wdr = function (d, s) {
                        this.vdq_1 = s;
                        var t = cs(this, d, s);
                        if ((us(this) && (t = t.toLowerCase()), vs().pdr_1.w(t) && vs().qdr_1.w(t) && pd(this.cdr_1), hs(this, t))) this.tdq_1.mdq_1 || "br" !== t || (this.sdq_1.bdq("br"), this.sdq_1.jdq("br", Hd(), !0), this.sdq_1.adq("br", !1));
                        else {
                            var _ = this.bdr_1.g2(t);
                            if (-1 !== _) {
                                var n = (this.bdr_1.s() - _) | 0;
                                d: for (;;) {
                                    var i = n;
                                    if (((n = (i - 1) | 0), !(i > 0))) break d;
                                    var r = pd(this.bdr_1);
                                    this.sdq_1.adq(r, !(0 === n));
                                }
                            } else this.tdq_1.mdq_1 || "p" !== t || (as(this, "p"), ls(this, !0));
                        }
                        this.udq_1 = (s + 1) | 0;
                    }),
                    (od(js).xdr = function (d) {
                        (this.vdq_1 = d), this.tdq_1.mdq_1 || this.tdq_1.rdq_1 || !0 === Kd(this.cdr_1) ? (ls(this, !1), (this.udq_1 = (d + 1) | 0)) : this.vdr(d);
                    }),
                    (od(js).ydr = function (d, s) {
                        this.udq_1 = d;
                        var t,
                            _ = cs(this, d, s);
                        (t = this.tdq_1.pdq_1 ? _.toLowerCase() : _), (this.ydq_1 = t);
                    }),
                    (od(js).zdr = function (d, s) {
                        this.zdq_1 = this.zdq_1 + cs(this, d, s);
                    }),
                    (od(js).ads = function (d) {
                        var s,
                            t = this.zdq_1,
                            _ = Td(0);
                        if (d < Nd(_)) s = !0;
                        else {
                            var n = Td(65535);
                            s = d > Nd(n);
                        }
                        if (s) throw Ld("Invalid Char code: " + d);
                        var i = Bd(d);
                        this.zdq_1 = t + Dd(i);
                    }),
                    (od(js).bds = function (d, s) {
                        this.vdq_1 = s;
                        var t = this.ydq_1,
                            _ = this.zdq_1,
                            n = d.a3_1;
                        this.sdq_1.cdq(t, _, 3 === n ? '"' : 2 === n ? "'" : null);
                        var i = this.adr_1;
                        if (null == i);
                        else {
                            var r = this.ydq_1,
                                e = this.zdq_1;
                            i.w2(r, e);
                        }
                        this.zdq_1 = "";
                    }),
                    (od(js).cds = function (d, s) {
                        this.vdq_1 = s;
                        var t = cs(this, d, s),
                            _ = fs(this, t);
                        this.sdq_1.idq(_, t), (this.udq_1 = (s + 1) | 0);
                    }),
                    (od(js).dds = function (d, s) {
                        this.vdq_1 = s;
                        var t = cs(this, d, s),
                            _ = fs(this, t);
                        this.sdq_1.idq(_, t), (this.udq_1 = (s + 1) | 0);
                    }),
                    (od(js).eds = function (d, s, t) {
                        (this.vdq_1 = s), this.sdq_1.edq(cs(this, d, (s - t) | 0)), this.sdq_1.hdq(), (this.udq_1 = (s + 1) | 0);
                    }),
                    (od(js).fds = function (d, s, t) {
                        this.vdq_1 = s;
                        var _ = cs(this, d, (s - t) | 0);
                        this.tdq_1.mdq_1 || this.tdq_1.qdq_1 ? (this.sdq_1.fdq(), this.sdq_1.ddq(_), this.sdq_1.gdq()) : (this.sdq_1.edq("[CDATA[" + _ + "]]"), this.sdq_1.hdq()), (this.udq_1 = (s + 1) | 0);
                    }),
                    (od(js).ydp = function () {
                        this.vdq_1 = this.udq_1;
                        var d = Vd(this.bdr_1),
                            s = d.f1_1,
                            t = d.g1_1;
                        if (s <= t)
                            do {
                                var _ = s;
                                s = (s + 1) | 0;
                                var n = _,
                                    i = (Ed(this.bdr_1) - n) | 0;
                                this.sdq_1.adq(this.bdr_1.t(i), !0);
                            } while (_ !== t);
                        this.sdq_1.ydp();
                    }),
                    (od(js).v6v = function (d) {
                        if (this.gdr_1) return this.sdq_1.zdp(Fd(".write() after done!")), bd;
                        this.ddr_1.k(d), this.hdr_1.qds_1 && (this.hdr_1.v6v(d), (this.fdr_1 = (this.fdr_1 + 1) | 0));
                    }),
                    (od(js).uds = function (d) {
                        if (this.gdr_1) return this.sdq_1.zdp(Fd(".end() after done!")), bd;
                        null == d || this.v6v(d), (this.gdr_1 = !0), this.hdr_1.b9t();
                    }),
                    (od(js).vds = function (d, s) {
                        var t;
                        return (d = d === fd ? null : d), s === fd ? (this.uds(d), (t = bd)) : (t = s.uds.call(this, d)), t;
                    }),
                    (od(et).bdt = function (d) {
                        return d === (ps(), q).yds_1 || d === (ps(), l).yds_1 || d === (ps(), o).yds_1 || d === (ps(), f).yds_1 || d === (ps(), c).yds_1;
                    }),
                    (od(et).adt = function (d) {
                        return d === lt().yds_1 || d === mt().yds_1 || this.bdt(d);
                    }),
                    (od(et).jdt = function (d) {
                        return (d >= (ps(), I).yds_1 && d <= (ps(), T).yds_1) || (d >= (ps(), x).yds_1 && d <= (ps(), S).yds_1);
                    }),
                    (od(et).kdt = function (d) {
                        return d >= (ps(), $).yds_1 && d <= (ps(), g).yds_1;
                    }),
                    (od(Tt).v6v = function (d) {
                        (this.rds_1 = (this.rds_1 + this.kds_1.length) | 0), (this.kds_1 = d), st(this);
                    }),
                    (od(Tt).b9t = function () {
                        this.qds_1 && tt(this);
                    }),
                    (od(ss).ydp = function () {}),
                    (od(ss).zdp = function (d) {}),
                    (od(ss).adq = function (d, s) {}),
                    (od(ss).bdq = function (d) {}),
                    (od(ss).cdq = function (d, s, t) {}),
                    (od(ss).jdq = function (d, s, t) {}),
                    (od(ss).ddq = function (d) {}),
                    (od(ss).edq = function (d) {}),
                    (od(ss).fdq = function () {}),
                    (od(ss).gdq = function () {}),
                    (od(ss).hdq = function () {}),
                    (od(ss).idq = function (d, s) {}),
                    (_ = new ss()),
                    (hd = new et()),
                    (d.$_$ = d.$_$ || {}),
                    (d.$_$.a = ts),
                    (d.$_$.b = js);
            })(d.exports, t(519039), t(124389));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-062de155.ab55f49a.js.map
