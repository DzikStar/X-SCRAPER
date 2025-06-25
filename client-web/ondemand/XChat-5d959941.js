(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (c, n, t) => {
            "use strict";
            t.d(n, { _i: () => s });
            var e = t(125959),
                i = t(918962);
            const u = [
                {
                    onResponse: (c) => {
                        if (!c.ok) throw new Error(`[${c.status}] Network error`);
                        return c;
                    },
                },
            ];
            const r = [
                    i.l,
                    (
                        (c = 3e5) =>
                        (n, t, e) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), c), n(t, { ...e, signal: e?.signal ?? i.signal });
                            }
                            return n(t, { ...e, signal: e?.signal ?? AbortSignal.timeout(c) });
                        }
                    )(),
                    (function (c) {
                        return async (n, t, e) => {
                            const i = {};
                            let u = t,
                                r = e;
                            for (const n of c) n.onRequest && ([u, r] = await n.onRequest(u, r, i));
                            let s = await n(u, r);
                            for (const n of c) n.onResponse && (s = await n.onResponse(s, i));
                            return s;
                        };
                    })(u),
                ],
                s = (0, e.g)(r);
        },
        594839: (c, n, t) => {
            !(function (c, n, t, e, i, u) {
                "use strict";
                var r = n.$_$.g,
                    s = n.$_$.s6,
                    a = n.$_$.gf,
                    o = n.$_$.m2,
                    _ = t.$_$.q,
                    f = n.$_$.cf,
                    l = t.$_$.a,
                    h = t.$_$.e,
                    v = t.$_$.d,
                    $ = t.$_$.c,
                    x = t.$_$.f,
                    b = t.$_$.g,
                    y = n.$_$.zd,
                    w = n.$_$.de,
                    d = n.$_$.pd,
                    p = n.$_$.cd,
                    k = n.$_$.oe,
                    g = n.$_$.yd,
                    m = e.$_$.b,
                    q = i.$_$.d,
                    C = u.$_$.b,
                    z = t.$_$.t,
                    N = t.$_$.o,
                    T = n.$_$.if,
                    E = n.$_$.ak,
                    R = u.$_$.a,
                    j = (n.$_$.e6, n.$_$.bg),
                    A = n.$_$.wd,
                    B = i.$_$.b,
                    D = t.$_$.h,
                    P = n.$_$.bf,
                    F = n.$_$.cl,
                    I = t.$_$.i,
                    M = t.$_$.j,
                    S = t.$_$.n,
                    H = t.$_$.m,
                    K = t.$_$.k,
                    L = t.$_$.l,
                    O = t.$_$.p,
                    X = t.$_$.s,
                    G = n.$_$.hc,
                    J = t.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(c) {
                    this.jcx_1 = c;
                }
                function Y(c, n, t, e) {
                    (n = n === r ? null : n), (t = t === r ? null : t), (e = e === r ? null : e), (this.kcx_1 = c);
                    this.lcx_1 = null == n ? m() : n;
                    this.mcx_1 =
                        null == t
                            ? (function (c, n) {
                                  n.ea().equals(_()) ? c.rbf() : n.gcv(new uc(c));
                                  return c;
                              })(q(), this.kcx_1)
                            : t;
                    this.ncx_1 = null == e ? C() : e;
                    var i,
                        u =
                            (((i = function (c, n, t, e) {
                                return new Y(c, n, t, e);
                            }).callableName = "<init>"),
                            i);
                    this.ocx_1 = new W(u);
                }
                function Z(c) {
                    return c.ea().equals(_());
                }
                function cc(c) {
                    c.tcx_1.zcv(c.acw() && c.scx_1.acw());
                }
                function nc(c, n) {
                    (this.wcx_1 = n), T.call(this, c);
                }
                function tc(c, n, t, e) {
                    (e = e === r ? C() : e), (this.rcx_1 = c), (this.scx_1 = e);
                    var i,
                        u =
                            ((i = this.scx_1),
                            function (c) {
                                return (
                                    (function (c, n) {
                                        c.zcw(n);
                                    })(i, c),
                                    s
                                );
                            }),
                        a = (function (c) {
                            var n = function (n) {
                                return c.acx(n), s;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.scx_1),
                        o = (function (c) {
                            var n = function () {
                                return c.bcx(), s;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.scx_1);
                    this.tcx_1 = R(
                        !1,
                        t,
                        u,
                        a,
                        o,
                        (function (c) {
                            return function () {
                                return c.ycw(), s;
                            };
                        })(this.scx_1),
                    );
                    var _;
                    (this.ucx_1 = new nc(n, this)),
                        this.scx_1.bcw(
                            ((_ = this),
                            function (c) {
                                return cc(_), s;
                            }),
                        );
                }
                function ec() {
                    this.xcx_1 = q();
                }
                function ic(c, n) {
                    (this.ycx_1 = c), (this.zcx_1 = n);
                }
                function uc(c) {
                    this.acy_1 = c;
                }
                function rc(c, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (c) {
                                switch (c.bcy_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(c.bcy_1), M(c.bcy_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(c.bcy_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (c) {
                                switch (c.bcy_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(c.bcy_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(c.bcy_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 3:
                            !(function (c) {
                                switch (c.bcy_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(c.bcy_1);
                                        break;
                                    case 4:
                                        K(c.bcy_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 4:
                            !(function (c) {
                                switch (c.bcy_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(c.bcy_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        default:
                            F();
                    }
                }
                function sc(c) {
                    this.ccy_1 = c;
                }
                function ac(c, n, t, e) {
                    (this.dcy_1 = c), (this.ecy_1 = n), (this.fcy_1 = t), (this.gcy_1 = e);
                }
                function oc(c, n, t) {
                    this.bcy_1 = c;
                    var e,
                        i,
                        u,
                        r = { _v: n.ea().equals(_()) ? _() : J() },
                        a = { _v: t.ea().equals(_()) ? _() : J() };
                    if ((rc(this, G(r._v, a._v)), !r._v.equals(_()) && !a._v.equals(_()))) {
                        var o = new sc(
                                ((e = r),
                                (i = this),
                                (u = a),
                                function (c) {
                                    return (e._v = c), rc(i, G(c, u._v)), s;
                                }),
                            ),
                            f = new sc(
                                (function (c, n, t) {
                                    return function (e) {
                                        return (c._v = e), rc(n, G(e, t._v)), s;
                                    };
                                })(a, this, r),
                            );
                        n.gcv(o), t.gcv(f);
                        var l = this.bcy_1;
                        l.ea().equals(_()) ? (n.pcv(o), t.pcv(f)) : l.gcv(new ac(n, o, t, f));
                    }
                }
                function _c(c, n) {
                    (this.hcy_1 = c), (this.icy_1 = n);
                }
                y(U, r, r, r, [b]),
                    w(V, "ComponentContextFactory"),
                    y(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, p]),
                    y(Y, "DefaultComponentContext"),
                    y(nc, r, r, T),
                    y(tc, "DefaultChildBackHandler"),
                    y(ec, "ChildInstanceKeeperProvider", ec, r, [B]),
                    y(ic, r, r, r, [b]),
                    y(uc, r, r, r, [b]),
                    y(sc, "CallbacksImpl", r, r, [b]),
                    y(ac, r, r, r, [b]),
                    y(oc, "MergedLifecycle"),
                    y(_c, r, r, r, [b]),
                    (f(U).qbf = function () {
                        throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (f(W).icx = function (c, n, t, e) {
                        return this.jcx_1(c, n, t, e);
                    }),
                    (f(W).a4 = function () {
                        return this.jcx_1;
                    }),
                    (f(W).equals = function (c) {
                        var n;
                        null != c && k(c, V) ? (n = !(null == c || !k(c, p)) && d(this.a4(), c.a4())) : (n = !1);
                        return n;
                    }),
                    (f(W).hashCode = function () {
                        return g(this.a4());
                    }),
                    (f(Y).ecx = function () {
                        return this.kcx_1;
                    }),
                    (f(Y).fcx = function () {
                        return this.lcx_1;
                    }),
                    (f(Y).gcx = function () {
                        return this.mcx_1;
                    }),
                    (f(Y).hcx = function () {
                        return this.ncx_1;
                    }),
                    (f(Y).dcx = function () {
                        return this.ocx_1;
                    }),
                    (f(nc).vcv = function (c, n, t) {
                        return cc(this.wcx_1), s;
                    }),
                    (f(nc).rl = function (c, n, t) {
                        var e = null == n || null != n ? n : E();
                        return this.vcv(c, e, null == t || null != t ? t : E());
                    }),
                    (f(tc).zcv = function (c) {
                        return this.ucx_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (c) {
                                    return c.acw();
                                },
                                function (c, n) {
                                    return c.zcv(n);
                                },
                            ),
                            c,
                        );
                    }),
                    (f(tc).acw = function () {
                        return this.ucx_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (c) {
                                    return c.acw();
                                },
                                function (c, n) {
                                    return c.zcv(n);
                                },
                            ),
                        );
                    }),
                    (f(tc).pcx = function () {
                        this.rcx_1.vcw(this.tcx_1) || this.rcx_1.wcw(this.tcx_1);
                    }),
                    (f(tc).qcx = function () {
                        this.rcx_1.vcw(this.tcx_1) && this.rcx_1.xcw(this.tcx_1);
                    }),
                    (f(tc).vcw = function (c) {
                        return this.scx_1.vcw(c);
                    }),
                    (f(tc).wcw = function (c) {
                        this.scx_1.wcw(c);
                    }),
                    (f(tc).xcw = function (c) {
                        this.scx_1.xcw(c);
                    }),
                    (f(ec).qbf = function () {
                        this.xcx_1.rbf();
                    }),
                    (f(ic).qbf = function () {
                        var c = this.ycx_1.e5t(this.zcx_1);
                        null == c || c.qbf();
                    }),
                    (f(uc).qbf = function () {
                        this.acy_1.rbf();
                    }),
                    (f(sc).ccv = function () {
                        this.ccy_1(O());
                    }),
                    (f(sc).i1c = function () {
                        this.ccy_1(z());
                    }),
                    (f(sc).dcv = function () {
                        this.ccy_1(X());
                    }),
                    (f(sc).ecv = function () {
                        this.ccy_1(z());
                    }),
                    (f(sc).fcv = function () {
                        this.ccy_1(O());
                    }),
                    (f(sc).qbf = function () {
                        this.ccy_1(_());
                    }),
                    (f(ac).qbf = function () {
                        this.dcy_1.pcv(this.ecy_1), this.fcy_1.pcv(this.gcy_1);
                    }),
                    (f(oc).gcv = function (c) {
                        this.bcy_1.gcv(c);
                    }),
                    (f(oc).pcv = function (c) {
                        this.bcy_1.pcv(c);
                    }),
                    (f(oc).ea = function () {
                        return this.bcy_1.ea();
                    }),
                    (f(_c).qbf = function () {
                        this.hcy_1.tcu(this.icy_1);
                    }),
                    (f(U).ccv = l),
                    (f(U).i1c = h),
                    (f(U).dcv = v),
                    (f(U).ecv = $),
                    (f(U).fcv = x),
                    (f(ic).ccv = l),
                    (f(ic).i1c = h),
                    (f(ic).dcv = v),
                    (f(ic).ecv = $),
                    (f(ic).fcv = x),
                    (f(uc).ccv = l),
                    (f(uc).i1c = h),
                    (f(uc).dcv = v),
                    (f(uc).ecv = $),
                    (f(uc).fcv = x),
                    (f(ac).ccv = l),
                    (f(ac).i1c = h),
                    (f(ac).dcv = v),
                    (f(ac).ecv = $),
                    (f(ac).fcv = x),
                    (f(_c).ccv = l),
                    (f(_c).i1c = h),
                    (f(_c).dcv = v),
                    (f(_c).ecv = $),
                    (f(_c).fcv = x),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = Y),
                    (c.$_$.b = function (c, n, t) {
                        if (null == (t = t === r ? null : t));
                        else {
                            if (t.ea().equals(_())) {
                                throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.gcv(new U());
                        }
                        return c.dcx().icx(
                            null == t
                                ? c.ecx()
                                : (function (c, n, t) {
                                      return oc.call(t, D(), c, n), t;
                                  })(c.ecx(), t, P(f(oc))),
                            (function (c, n, t) {
                                if (((t = t === r ? null : t), !!c.scu(n))) {
                                    throw o(a('The key "' + n + '" is already in use.'));
                                }
                                var e = m(c.qcu(n, Q.y6g()));
                                if (null == t) {
                                    var i = Q.y6g();
                                    c.rcu(
                                        n,
                                        i,
                                        ((s = e),
                                        ((f = function () {
                                            return s.pcu();
                                        }).callableName = "save"),
                                        f),
                                    );
                                } else if (!Z(t)) {
                                    var u = Q.y6g();
                                    c.rcu(
                                        n,
                                        u,
                                        (function (c) {
                                            var n = function () {
                                                return c.pcu();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(e),
                                    ),
                                        t.ea().equals(_()) ? c.tcu(n) : t.gcv(new _c(c, n));
                                }
                                var s, f;
                                return e;
                            })(c.fcx(), n, t),
                            (function (c, n, t) {
                                var e;
                                if (((t = t === r ? null : t), null != t && Z(t))) e = q();
                                else {
                                    var i = c.obf(n),
                                        u = null == i || k(i, B) ? i : E();
                                    null == u && ((u = new ec()), c.pbf(n, u));
                                    var s = u.xcx_1;
                                    if (null == t);
                                    else if (t.ea().equals(_())) {
                                        var a = c.e5t(n);
                                        null == a || a.qbf();
                                    } else t.gcv(new ic(c, n));
                                    e = s;
                                }
                                return e;
                            })(c.gcx(), n, t),
                            (function (c, n, t) {
                                n = n === r ? null : n;
                                var e = (function (c, n, t) {
                                    return (t = t === r ? 0 : t), new tc(c, (n = n === r || n), t);
                                })(c, !1, (t = t === r ? 0 : t));
                                if (null == n) e.zcv(!0), e.pcx();
                                else if (!Z(n)) {
                                    e.zcv(n.ea().b3(z()) >= 0), e.pcx();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.zcv(!0), s;
                                            }),
                                        u = (function (c) {
                                            return function () {
                                                return c.zcv(!1), s;
                                            };
                                        })(e);
                                    N(
                                        n,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((a = e),
                                        ((o = function () {
                                            return a.qcx(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var a, o;
                                var _;
                                return e;
                            })(c.hcx(), t),
                        );
                    });
            })(c.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.f902f61a.js.map
