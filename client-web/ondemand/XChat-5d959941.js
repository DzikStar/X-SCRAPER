(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (n, t, e) => {
            "use strict";
            e.d(t, { _i: () => r });
            var b = e(125959),
                i = e(918962);
            const a = [
                {
                    onResponse: (n) => {
                        if (!n.ok) throw new Error(`[${n.status}] Network error`);
                        return n;
                    },
                },
            ];
            const u = [
                    i.l,
                    (
                        (n = 3e5) =>
                        (t, e, b) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), n), t(e, { ...b, signal: b?.signal ?? i.signal });
                            }
                            return t(e, { ...b, signal: b?.signal ?? AbortSignal.timeout(n) });
                        }
                    )(),
                    (function (n) {
                        return async (t, e, b) => {
                            const i = {};
                            let a = e,
                                u = b;
                            for (const t of n) t.onRequest && ([a, u] = await t.onRequest(a, u, i));
                            let r = await t(a, u);
                            for (const t of n) t.onResponse && (r = await t.onResponse(r, i));
                            return r;
                        };
                    })(a),
                ],
                r = (0, b.g)(u);
        },
        594839: (n, t, e) => {
            !(function (n, t, e, b, i, a) {
                "use strict";
                var u = t.$_$.g,
                    r = t.$_$.p6,
                    s = t.$_$.bf,
                    c = t.$_$.m2,
                    o = e.$_$.q,
                    _ = t.$_$.xe,
                    l = e.$_$.a,
                    f = e.$_$.e,
                    y = e.$_$.d,
                    h = e.$_$.c,
                    $ = e.$_$.f,
                    w = e.$_$.g,
                    v = t.$_$.ud,
                    x = t.$_$.yd,
                    d = t.$_$.kd,
                    k = t.$_$.xc,
                    p = t.$_$.je,
                    m = t.$_$.td,
                    g = b.$_$.b,
                    z = i.$_$.d,
                    C = a.$_$.b,
                    q = e.$_$.t,
                    N = e.$_$.o,
                    T = t.$_$.df,
                    j = t.$_$.rj,
                    E = a.$_$.a,
                    R = (t.$_$.b6, t.$_$.vf),
                    A = t.$_$.rd,
                    B = i.$_$.b,
                    D = e.$_$.h,
                    P = t.$_$.we,
                    F = t.$_$.tk,
                    I = e.$_$.i,
                    M = e.$_$.j,
                    S = e.$_$.n,
                    H = e.$_$.m,
                    K = e.$_$.k,
                    L = e.$_$.l,
                    O = e.$_$.p,
                    X = e.$_$.s,
                    G = t.$_$.cc,
                    J = e.$_$.r,
                    Q = b.$_$.c;
                function U() {}
                function V() {}
                function W(n) {
                    this.fby_1 = n;
                }
                function Y(n, t, e, b) {
                    (t = t === u ? null : t), (e = e === u ? null : e), (b = b === u ? null : b), (this.gby_1 = n);
                    this.hby_1 = null == t ? g() : t;
                    this.iby_1 =
                        null == e
                            ? (function (n, t) {
                                  t.ea().equals(o()) ? n.iae() : t.cbw(new un(n));
                                  return n;
                              })(z(), this.gby_1)
                            : e;
                    this.jby_1 = null == b ? C() : b;
                    var i,
                        a =
                            (((i = function (n, t, e, b) {
                                return new Y(n, t, e, b);
                            }).callableName = "<init>"),
                            i);
                    this.kby_1 = new W(a);
                }
                function Z(n) {
                    return n.ea().equals(o());
                }
                function nn(n) {
                    n.pby_1.vbw(n.wbw() && n.oby_1.wbw());
                }
                function tn(n, t) {
                    (this.sby_1 = t), T.call(this, n);
                }
                function en(n, t, e, b) {
                    (b = b === u ? C() : b), (this.nby_1 = n), (this.oby_1 = b);
                    var i,
                        a =
                            ((i = this.oby_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.vbx(t);
                                    })(i, n),
                                    r
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.wbx(t), r;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.oby_1),
                        c = (function (n) {
                            var t = function () {
                                return n.xbx(), r;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.oby_1);
                    this.pby_1 = E(
                        !1,
                        e,
                        a,
                        s,
                        c,
                        (function (n) {
                            return function () {
                                return n.ubx(), r;
                            };
                        })(this.oby_1),
                    );
                    var o;
                    (this.qby_1 = new tn(t, this)),
                        this.oby_1.xbw(
                            ((o = this),
                            function (n) {
                                return nn(o), r;
                            }),
                        );
                }
                function bn() {
                    this.tby_1 = z();
                }
                function an(n, t) {
                    (this.uby_1 = n), (this.vby_1 = t);
                }
                function un(n) {
                    this.wby_1 = n;
                }
                function rn(n, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.xby_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(n.xby_1), M(n.xby_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(n.xby_1);
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
                                switch (n.xby_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(n.xby_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(n.xby_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.xby_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(n.xby_1);
                                        break;
                                    case 4:
                                        K(n.xby_1);
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
                                switch (n.xby_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(n.xby_1);
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
                    this.yby_1 = n;
                }
                function cn(n, t, e, b) {
                    (this.zby_1 = n), (this.abz_1 = t), (this.bbz_1 = e), (this.cbz_1 = b);
                }
                function on(n, t, e) {
                    this.xby_1 = n;
                    var b,
                        i,
                        a,
                        u = { _v: t.ea().equals(o()) ? o() : J() },
                        s = { _v: e.ea().equals(o()) ? o() : J() };
                    if ((rn(this, G(u._v, s._v)), !u._v.equals(o()) && !s._v.equals(o()))) {
                        var c = new sn(
                                ((b = u),
                                (i = this),
                                (a = s),
                                function (n) {
                                    return (b._v = n), rn(i, G(n, a._v)), r;
                                }),
                            ),
                            _ = new sn(
                                (function (n, t, e) {
                                    return function (b) {
                                        return (n._v = b), rn(t, G(b, e._v)), r;
                                    };
                                })(s, this, u),
                            );
                        t.cbw(c), e.cbw(_);
                        var l = this.xby_1;
                        l.ea().equals(o()) ? (t.lbw(c), e.lbw(_)) : l.cbw(new cn(t, c, e, _));
                    }
                }
                function _n(n, t) {
                    (this.dbz_1 = n), (this.ebz_1 = t);
                }
                v(U, u, u, u, [w]),
                    x(V, "ComponentContextFactory"),
                    v(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", u, u, [V, k]),
                    v(Y, "DefaultComponentContext"),
                    v(tn, u, u, T),
                    v(en, "DefaultChildBackHandler"),
                    v(bn, "ChildInstanceKeeperProvider", bn, u, [B]),
                    v(an, u, u, u, [w]),
                    v(un, u, u, u, [w]),
                    v(sn, "CallbacksImpl", u, u, [w]),
                    v(cn, u, u, u, [w]),
                    v(on, "MergedLifecycle"),
                    v(_n, u, u, u, [w]),
                    (_(U).gae = function () {
                        throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(W).eby = function (n, t, e, b) {
                        return this.fby_1(n, t, e, b);
                    }),
                    (_(W).a4 = function () {
                        return this.fby_1;
                    }),
                    (_(W).equals = function (n) {
                        var t;
                        null != n && p(n, V) ? (t = !(null == n || !p(n, k)) && d(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (_(W).hashCode = function () {
                        return m(this.a4());
                    }),
                    (_(Y).aby = function () {
                        return this.gby_1;
                    }),
                    (_(Y).bby = function () {
                        return this.hby_1;
                    }),
                    (_(Y).cby = function () {
                        return this.iby_1;
                    }),
                    (_(Y).dby = function () {
                        return this.jby_1;
                    }),
                    (_(Y).zbx = function () {
                        return this.kby_1;
                    }),
                    (_(tn).rbw = function (n, t, e) {
                        return nn(this.sby_1), r;
                    }),
                    (_(tn).hl = function (n, t, e) {
                        var b = null == t || null != t ? t : j();
                        return this.rbw(n, b, null == e || null != e ? e : j());
                    }),
                    (_(en).vbw = function (n) {
                        return this.qby_1.kl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.wbw();
                                },
                                function (n, t) {
                                    return n.vbw(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(en).wbw = function () {
                        return this.qby_1.dl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.wbw();
                                },
                                function (n, t) {
                                    return n.vbw(t);
                                },
                            ),
                        );
                    }),
                    (_(en).lby = function () {
                        this.nby_1.rbx(this.pby_1) || this.nby_1.sbx(this.pby_1);
                    }),
                    (_(en).mby = function () {
                        this.nby_1.rbx(this.pby_1) && this.nby_1.tbx(this.pby_1);
                    }),
                    (_(en).rbx = function (n) {
                        return this.oby_1.rbx(n);
                    }),
                    (_(en).sbx = function (n) {
                        this.oby_1.sbx(n);
                    }),
                    (_(en).tbx = function (n) {
                        this.oby_1.tbx(n);
                    }),
                    (_(bn).gae = function () {
                        this.tby_1.iae();
                    }),
                    (_(an).gae = function () {
                        var n = this.uby_1.hae(this.vby_1);
                        null == n || n.gae();
                    }),
                    (_(un).gae = function () {
                        this.wby_1.iae();
                    }),
                    (_(sn).ybv = function () {
                        this.yby_1(O());
                    }),
                    (_(sn).y1b = function () {
                        this.yby_1(q());
                    }),
                    (_(sn).zbv = function () {
                        this.yby_1(X());
                    }),
                    (_(sn).abw = function () {
                        this.yby_1(q());
                    }),
                    (_(sn).bbw = function () {
                        this.yby_1(O());
                    }),
                    (_(sn).gae = function () {
                        this.yby_1(o());
                    }),
                    (_(cn).gae = function () {
                        this.zby_1.lbw(this.abz_1), this.bbz_1.lbw(this.cbz_1);
                    }),
                    (_(on).cbw = function (n) {
                        this.xby_1.cbw(n);
                    }),
                    (_(on).lbw = function (n) {
                        this.xby_1.lbw(n);
                    }),
                    (_(on).ea = function () {
                        return this.xby_1.ea();
                    }),
                    (_(_n).gae = function () {
                        this.dbz_1.pbv(this.ebz_1);
                    }),
                    (_(U).ybv = l),
                    (_(U).y1b = f),
                    (_(U).zbv = y),
                    (_(U).abw = h),
                    (_(U).bbw = $),
                    (_(an).ybv = l),
                    (_(an).y1b = f),
                    (_(an).zbv = y),
                    (_(an).abw = h),
                    (_(an).bbw = $),
                    (_(un).ybv = l),
                    (_(un).y1b = f),
                    (_(un).zbv = y),
                    (_(un).abw = h),
                    (_(un).bbw = $),
                    (_(cn).ybv = l),
                    (_(cn).y1b = f),
                    (_(cn).zbv = y),
                    (_(cn).abw = h),
                    (_(cn).bbw = $),
                    (_(_n).ybv = l),
                    (_(_n).y1b = f),
                    (_(_n).zbv = y),
                    (_(_n).abw = h),
                    (_(_n).bbw = $),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = Y),
                    (n.$_$.b = function (n, t, e) {
                        if (null == (e = e === u ? null : e));
                        else {
                            if (e.ea().equals(o())) {
                                throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.cbw(new U());
                        }
                        return n.zbx().eby(
                            null == e
                                ? n.aby()
                                : (function (n, t, e) {
                                      return on.call(e, D(), n, t), e;
                                  })(n.aby(), e, P(_(on))),
                            (function (n, t, e) {
                                if (((e = e === u ? null : e), !!n.obv(t))) {
                                    throw c(s('The key "' + t + '" is already in use.'));
                                }
                                var b = g(n.mbv(t, Q.f6a()));
                                if (null == e) {
                                    var i = Q.f6a();
                                    n.nbv(
                                        t,
                                        i,
                                        ((r = b),
                                        ((_ = function () {
                                            return r.lbv();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Z(e)) {
                                    var a = Q.f6a();
                                    n.nbv(
                                        t,
                                        a,
                                        (function (n) {
                                            var t = function () {
                                                return n.lbv();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(b),
                                    ),
                                        e.ea().equals(o()) ? n.pbv(t) : e.cbw(new _n(n, t));
                                }
                                var r, _;
                                return b;
                            })(n.bby(), t, e),
                            (function (n, t, e) {
                                var b;
                                if (((e = e === u ? null : e), null != e && Z(e))) b = z();
                                else {
                                    var i = n.eae(t),
                                        a = null == i || p(i, B) ? i : j();
                                    null == a && ((a = new bn()), n.fae(t, a));
                                    var r = a.tby_1;
                                    if (null == e);
                                    else if (e.ea().equals(o())) {
                                        var s = n.hae(t);
                                        null == s || s.gae();
                                    } else e.cbw(new an(n, t));
                                    b = r;
                                }
                                return b;
                            })(n.cby(), t, e),
                            (function (n, t, e) {
                                t = t === u ? null : t;
                                var b = (function (n, t, e) {
                                    return (e = e === u ? 0 : e), new en(n, (t = t === u || t), e);
                                })(n, !1, (e = e === u ? 0 : e));
                                if (null == t) b.vbw(!0), b.lby();
                                else if (!Z(t)) {
                                    b.vbw(t.ea().b3(q()) >= 0), b.lby();
                                    var i =
                                            ((o = b),
                                            function () {
                                                return o.vbw(!0), r;
                                            }),
                                        a = (function (n) {
                                            return function () {
                                                return n.vbw(!1), r;
                                            };
                                        })(b);
                                    N(
                                        t,
                                        u,
                                        i,
                                        u,
                                        u,
                                        a,
                                        ((s = b),
                                        ((c = function () {
                                            return s.mby(), r;
                                        }).callableName = "stop"),
                                        c),
                                    );
                                }
                                var s, c;
                                var o;
                                return b;
                            })(n.dby(), e),
                        );
                    });
            })(n.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.25d6d41a.js.map
