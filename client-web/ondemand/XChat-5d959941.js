(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (n, t, e) => {
            "use strict";
            e.d(t, { _i: () => a });
            var c = e(125959),
                i = e(918962);
            const u = [
                {
                    onResponse: (n) => {
                        if (!n.ok) throw new Error(`[${n.status}] Network error`);
                        return n;
                    },
                },
            ];
            const r = [
                    i.l,
                    (
                        (n = 3e5) =>
                        (t, e, c) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), n), t(e, { ...c, signal: c?.signal ?? i.signal });
                            }
                            return t(e, { ...c, signal: c?.signal ?? AbortSignal.timeout(n) });
                        }
                    )(),
                    (function (n) {
                        return async (t, e, c) => {
                            const i = {};
                            let u = e,
                                r = c;
                            for (const t of n) t.onRequest && ([u, r] = await t.onRequest(u, r, i));
                            let a = await t(u, r);
                            for (const t of n) t.onResponse && (a = await t.onResponse(a, i));
                            return a;
                        };
                    })(u),
                ],
                a = (0, c.g)(r);
        },
        594839: (n, t, e) => {
            !(function (n, t, e, c, i, u) {
                "use strict";
                var r = t.$_$.g,
                    a = t.$_$.t6,
                    s = t.$_$.hf,
                    o = t.$_$.n2,
                    _ = e.$_$.q,
                    l = t.$_$.df,
                    d = e.$_$.a,
                    f = e.$_$.e,
                    h = e.$_$.d,
                    $ = e.$_$.c,
                    y = e.$_$.f,
                    b = e.$_$.g,
                    v = t.$_$.ae,
                    x = t.$_$.ee,
                    w = t.$_$.qd,
                    z = t.$_$.dd,
                    k = t.$_$.pe,
                    p = t.$_$.zd,
                    m = c.$_$.b,
                    g = i.$_$.d,
                    q = u.$_$.b,
                    C = e.$_$.t,
                    N = e.$_$.o,
                    T = t.$_$.jf,
                    E = t.$_$.bk,
                    R = u.$_$.a,
                    j = (t.$_$.f6, t.$_$.cg),
                    A = t.$_$.xd,
                    B = i.$_$.b,
                    D = e.$_$.h,
                    P = t.$_$.cf,
                    F = t.$_$.dl,
                    I = e.$_$.i,
                    M = e.$_$.j,
                    S = e.$_$.n,
                    H = e.$_$.m,
                    K = e.$_$.k,
                    L = e.$_$.l,
                    O = e.$_$.p,
                    X = e.$_$.s,
                    G = t.$_$.ic,
                    J = e.$_$.r,
                    Q = c.$_$.c;
                function U() {}
                function V() {}
                function W(n) {
                    this.fd0_1 = n;
                }
                function Y(n, t, e, c) {
                    (t = t === r ? null : t), (e = e === r ? null : e), (c = c === r ? null : c), (this.gd0_1 = n);
                    this.hd0_1 = null == t ? m() : t;
                    this.id0_1 =
                        null == e
                            ? (function (n, t) {
                                  t.ea().equals(_()) ? n.abg() : t.ccy(new rn(n));
                                  return n;
                              })(g(), this.gd0_1)
                            : e;
                    this.jd0_1 = null == c ? q() : c;
                    var i,
                        u =
                            (((i = function (n, t, e, c) {
                                return new Y(n, t, e, c);
                            }).callableName = "<init>"),
                            i);
                    this.kd0_1 = new W(u);
                }
                function Z(n) {
                    return n.ea().equals(_());
                }
                function nn(n) {
                    n.pd0_1.vcy(n.wcy() && n.od0_1.wcy());
                }
                function tn(n, t) {
                    (this.sd0_1 = t), T.call(this, n);
                }
                function en(n, t, e, c) {
                    (c = c === r ? q() : c), (this.nd0_1 = n), (this.od0_1 = c);
                    var i,
                        u =
                            ((i = this.od0_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.vcz(t);
                                    })(i, n),
                                    a
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.wcz(t), a;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.od0_1),
                        o = (function (n) {
                            var t = function () {
                                return n.xcz(), a;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.od0_1);
                    this.pd0_1 = R(
                        !1,
                        e,
                        u,
                        s,
                        o,
                        (function (n) {
                            return function () {
                                return n.ucz(), a;
                            };
                        })(this.od0_1),
                    );
                    var _;
                    (this.qd0_1 = new tn(t, this)),
                        this.od0_1.xcy(
                            ((_ = this),
                            function (n) {
                                return nn(_), a;
                            }),
                        );
                }
                function cn() {
                    this.td0_1 = g();
                }
                function un(n, t) {
                    (this.ud0_1 = n), (this.vd0_1 = t);
                }
                function rn(n) {
                    this.wd0_1 = n;
                }
                function an(n, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.xd0_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(n.xd0_1), M(n.xd0_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(n.xd0_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (n) {
                                switch (n.xd0_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(n.xd0_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(n.xd0_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.xd0_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(n.xd0_1);
                                        break;
                                    case 4:
                                        K(n.xd0_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 4:
                            !(function (n) {
                                switch (n.xd0_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(n.xd0_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        default:
                            F();
                    }
                }
                function sn(n) {
                    this.yd0_1 = n;
                }
                function on(n, t, e, c) {
                    (this.zd0_1 = n), (this.ad1_1 = t), (this.bd1_1 = e), (this.cd1_1 = c);
                }
                function _n(n, t, e) {
                    this.xd0_1 = n;
                    var c,
                        i,
                        u,
                        r = { _v: t.ea().equals(_()) ? _() : J() },
                        s = { _v: e.ea().equals(_()) ? _() : J() };
                    if ((an(this, G(r._v, s._v)), !r._v.equals(_()) && !s._v.equals(_()))) {
                        var o = new sn(
                                ((c = r),
                                (i = this),
                                (u = s),
                                function (n) {
                                    return (c._v = n), an(i, G(n, u._v)), a;
                                }),
                            ),
                            l = new sn(
                                (function (n, t, e) {
                                    return function (c) {
                                        return (n._v = c), an(t, G(c, e._v)), a;
                                    };
                                })(s, this, r),
                            );
                        t.ccy(o), e.ccy(l);
                        var d = this.xd0_1;
                        d.ea().equals(_()) ? (t.lcy(o), e.lcy(l)) : d.ccy(new on(t, o, e, l));
                    }
                }
                function ln(n, t) {
                    (this.dd1_1 = n), (this.ed1_1 = t);
                }
                v(U, r, r, r, [b]),
                    x(V, "ComponentContextFactory"),
                    v(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, z]),
                    v(Y, "DefaultComponentContext"),
                    v(tn, r, r, T),
                    v(en, "DefaultChildBackHandler"),
                    v(cn, "ChildInstanceKeeperProvider", cn, r, [B]),
                    v(un, r, r, r, [b]),
                    v(rn, r, r, r, [b]),
                    v(sn, "CallbacksImpl", r, r, [b]),
                    v(on, r, r, r, [b]),
                    v(_n, "MergedLifecycle"),
                    v(ln, r, r, r, [b]),
                    (l(U).zbf = function () {
                        throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).ed0 = function (n, t, e, c) {
                        return this.fd0_1(n, t, e, c);
                    }),
                    (l(W).a4 = function () {
                        return this.fd0_1;
                    }),
                    (l(W).equals = function (n) {
                        var t;
                        null != n && k(n, V) ? (t = !(null == n || !k(n, z)) && w(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (l(W).hashCode = function () {
                        return p(this.a4());
                    }),
                    (l(Y).ad0 = function () {
                        return this.gd0_1;
                    }),
                    (l(Y).bd0 = function () {
                        return this.hd0_1;
                    }),
                    (l(Y).cd0 = function () {
                        return this.id0_1;
                    }),
                    (l(Y).dd0 = function () {
                        return this.jd0_1;
                    }),
                    (l(Y).zcz = function () {
                        return this.kd0_1;
                    }),
                    (l(tn).rcy = function (n, t, e) {
                        return nn(this.sd0_1), a;
                    }),
                    (l(tn).rl = function (n, t, e) {
                        var c = null == t || null != t ? t : E();
                        return this.rcy(n, c, null == e || null != e ? e : E());
                    }),
                    (l(en).vcy = function (n) {
                        return this.qd0_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (n) {
                                    return n.wcy();
                                },
                                function (n, t) {
                                    return n.vcy(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (l(en).wcy = function () {
                        return this.qd0_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (n) {
                                    return n.wcy();
                                },
                                function (n, t) {
                                    return n.vcy(t);
                                },
                            ),
                        );
                    }),
                    (l(en).ld0 = function () {
                        this.nd0_1.rcz(this.pd0_1) || this.nd0_1.scz(this.pd0_1);
                    }),
                    (l(en).md0 = function () {
                        this.nd0_1.rcz(this.pd0_1) && this.nd0_1.tcz(this.pd0_1);
                    }),
                    (l(en).rcz = function (n) {
                        return this.od0_1.rcz(n);
                    }),
                    (l(en).scz = function (n) {
                        this.od0_1.scz(n);
                    }),
                    (l(en).tcz = function (n) {
                        this.od0_1.tcz(n);
                    }),
                    (l(cn).zbf = function () {
                        this.td0_1.abg();
                    }),
                    (l(un).zbf = function () {
                        var n = this.ud0_1.e5t(this.vd0_1);
                        null == n || n.zbf();
                    }),
                    (l(rn).zbf = function () {
                        this.wd0_1.abg();
                    }),
                    (l(sn).ycx = function () {
                        this.yd0_1(O());
                    }),
                    (l(sn).i1c = function () {
                        this.yd0_1(C());
                    }),
                    (l(sn).zcx = function () {
                        this.yd0_1(X());
                    }),
                    (l(sn).acy = function () {
                        this.yd0_1(C());
                    }),
                    (l(sn).bcy = function () {
                        this.yd0_1(O());
                    }),
                    (l(sn).zbf = function () {
                        this.yd0_1(_());
                    }),
                    (l(on).zbf = function () {
                        this.zd0_1.lcy(this.ad1_1), this.bd1_1.lcy(this.cd1_1);
                    }),
                    (l(_n).ccy = function (n) {
                        this.xd0_1.ccy(n);
                    }),
                    (l(_n).lcy = function (n) {
                        this.xd0_1.lcy(n);
                    }),
                    (l(_n).ea = function () {
                        return this.xd0_1.ea();
                    }),
                    (l(ln).zbf = function () {
                        this.dd1_1.pcx(this.ed1_1);
                    }),
                    (l(U).ycx = d),
                    (l(U).i1c = f),
                    (l(U).zcx = h),
                    (l(U).acy = $),
                    (l(U).bcy = y),
                    (l(un).ycx = d),
                    (l(un).i1c = f),
                    (l(un).zcx = h),
                    (l(un).acy = $),
                    (l(un).bcy = y),
                    (l(rn).ycx = d),
                    (l(rn).i1c = f),
                    (l(rn).zcx = h),
                    (l(rn).acy = $),
                    (l(rn).bcy = y),
                    (l(on).ycx = d),
                    (l(on).i1c = f),
                    (l(on).zcx = h),
                    (l(on).acy = $),
                    (l(on).bcy = y),
                    (l(ln).ycx = d),
                    (l(ln).i1c = f),
                    (l(ln).zcx = h),
                    (l(ln).acy = $),
                    (l(ln).bcy = y),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = Y),
                    (n.$_$.b = function (n, t, e) {
                        if (null == (e = e === r ? null : e));
                        else {
                            if (e.ea().equals(_())) {
                                throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.ccy(new U());
                        }
                        return n.zcz().ed0(
                            null == e
                                ? n.ad0()
                                : (function (n, t, e) {
                                      return _n.call(e, D(), n, t), e;
                                  })(n.ad0(), e, P(l(_n))),
                            (function (n, t, e) {
                                if (((e = e === r ? null : e), !!n.ocx(t))) {
                                    throw o(s('The key "' + t + '" is already in use.'));
                                }
                                var c = m(n.mcx(t, Q.y6g()));
                                if (null == e) {
                                    var i = Q.y6g();
                                    n.ncx(
                                        t,
                                        i,
                                        ((a = c),
                                        ((l = function () {
                                            return a.lcx();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(e)) {
                                    var u = Q.y6g();
                                    n.ncx(
                                        t,
                                        u,
                                        (function (n) {
                                            var t = function () {
                                                return n.lcx();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(c),
                                    ),
                                        e.ea().equals(_()) ? n.pcx(t) : e.ccy(new ln(n, t));
                                }
                                var a, l;
                                return c;
                            })(n.bd0(), t, e),
                            (function (n, t, e) {
                                var c;
                                if (((e = e === r ? null : e), null != e && Z(e))) c = g();
                                else {
                                    var i = n.xbf(t),
                                        u = null == i || k(i, B) ? i : E();
                                    null == u && ((u = new cn()), n.ybf(t, u));
                                    var a = u.td0_1;
                                    if (null == e);
                                    else if (e.ea().equals(_())) {
                                        var s = n.e5t(t);
                                        null == s || s.zbf();
                                    } else e.ccy(new un(n, t));
                                    c = a;
                                }
                                return c;
                            })(n.cd0(), t, e),
                            (function (n, t, e) {
                                t = t === r ? null : t;
                                var c = (function (n, t, e) {
                                    return (e = e === r ? 0 : e), new en(n, (t = t === r || t), e);
                                })(n, !1, (e = e === r ? 0 : e));
                                if (null == t) c.vcy(!0), c.ld0();
                                else if (!Z(t)) {
                                    c.vcy(t.ea().b3(C()) >= 0), c.ld0();
                                    var i =
                                            ((_ = c),
                                            function () {
                                                return _.vcy(!0), a;
                                            }),
                                        u = (function (n) {
                                            return function () {
                                                return n.vcy(!1), a;
                                            };
                                        })(c);
                                    N(
                                        t,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((s = c),
                                        ((o = function () {
                                            return s.md0(), a;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var s, o;
                                var _;
                                return c;
                            })(n.dd0(), e),
                        );
                    });
            })(n.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.22559d5a.js.map
