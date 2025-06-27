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
                    s = n.$_$.t6,
                    a = n.$_$.hf,
                    o = n.$_$.n2,
                    _ = t.$_$.q,
                    f = n.$_$.df,
                    l = t.$_$.a,
                    h = t.$_$.e,
                    $ = t.$_$.d,
                    y = t.$_$.c,
                    w = t.$_$.f,
                    b = t.$_$.g,
                    v = n.$_$.ae,
                    z = n.$_$.ee,
                    d = n.$_$.qd,
                    p = n.$_$.dd,
                    k = n.$_$.pe,
                    x = n.$_$.zd,
                    g = e.$_$.b,
                    m = i.$_$.d,
                    q = u.$_$.b,
                    C = t.$_$.t,
                    N = t.$_$.o,
                    T = n.$_$.jf,
                    j = n.$_$.bk,
                    E = u.$_$.a,
                    R = (n.$_$.f6, n.$_$.cg),
                    A = n.$_$.xd,
                    B = i.$_$.b,
                    D = t.$_$.h,
                    P = n.$_$.cf,
                    F = n.$_$.dl,
                    I = t.$_$.i,
                    M = t.$_$.j,
                    S = t.$_$.n,
                    H = t.$_$.m,
                    K = t.$_$.k,
                    L = t.$_$.l,
                    O = t.$_$.p,
                    X = t.$_$.s,
                    G = n.$_$.ic,
                    J = t.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(c) {
                    this.jcy_1 = c;
                }
                function Y(c, n, t, e) {
                    (n = n === r ? null : n), (t = t === r ? null : t), (e = e === r ? null : e), (this.kcy_1 = c);
                    this.lcy_1 = null == n ? g() : n;
                    this.mcy_1 =
                        null == t
                            ? (function (c, n) {
                                  n.ea().equals(_()) ? c.ubf() : n.gcw(new uc(c));
                                  return c;
                              })(m(), this.kcy_1)
                            : t;
                    this.ncy_1 = null == e ? q() : e;
                    var i,
                        u =
                            (((i = function (c, n, t, e) {
                                return new Y(c, n, t, e);
                            }).callableName = "<init>"),
                            i);
                    this.ocy_1 = new W(u);
                }
                function Z(c) {
                    return c.ea().equals(_());
                }
                function cc(c) {
                    c.tcy_1.zcw(c.acx() && c.scy_1.acx());
                }
                function nc(c, n) {
                    (this.wcy_1 = n), T.call(this, c);
                }
                function tc(c, n, t, e) {
                    (e = e === r ? q() : e), (this.rcy_1 = c), (this.scy_1 = e);
                    var i,
                        u =
                            ((i = this.scy_1),
                            function (c) {
                                return (
                                    (function (c, n) {
                                        c.zcx(n);
                                    })(i, c),
                                    s
                                );
                            }),
                        a = (function (c) {
                            var n = function (n) {
                                return c.acy(n), s;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.scy_1),
                        o = (function (c) {
                            var n = function () {
                                return c.bcy(), s;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.scy_1);
                    this.tcy_1 = E(
                        !1,
                        t,
                        u,
                        a,
                        o,
                        (function (c) {
                            return function () {
                                return c.ycx(), s;
                            };
                        })(this.scy_1),
                    );
                    var _;
                    (this.ucy_1 = new nc(n, this)),
                        this.scy_1.bcx(
                            ((_ = this),
                            function (c) {
                                return cc(_), s;
                            }),
                        );
                }
                function ec() {
                    this.xcy_1 = m();
                }
                function ic(c, n) {
                    (this.ycy_1 = c), (this.zcy_1 = n);
                }
                function uc(c) {
                    this.acz_1 = c;
                }
                function rc(c, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (c) {
                                switch (c.bcz_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(c.bcz_1), M(c.bcz_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(c.bcz_1);
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
                                switch (c.bcz_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(c.bcz_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(c.bcz_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 3:
                            !(function (c) {
                                switch (c.bcz_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(c.bcz_1);
                                        break;
                                    case 4:
                                        K(c.bcz_1);
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
                                switch (c.bcz_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(c.bcz_1);
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
                    this.ccz_1 = c;
                }
                function ac(c, n, t, e) {
                    (this.dcz_1 = c), (this.ecz_1 = n), (this.fcz_1 = t), (this.gcz_1 = e);
                }
                function oc(c, n, t) {
                    this.bcz_1 = c;
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
                        n.gcw(o), t.gcw(f);
                        var l = this.bcz_1;
                        l.ea().equals(_()) ? (n.pcw(o), t.pcw(f)) : l.gcw(new ac(n, o, t, f));
                    }
                }
                function _c(c, n) {
                    (this.hcz_1 = c), (this.icz_1 = n);
                }
                v(U, r, r, r, [b]),
                    z(V, "ComponentContextFactory"),
                    v(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, p]),
                    v(Y, "DefaultComponentContext"),
                    v(nc, r, r, T),
                    v(tc, "DefaultChildBackHandler"),
                    v(ec, "ChildInstanceKeeperProvider", ec, r, [B]),
                    v(ic, r, r, r, [b]),
                    v(uc, r, r, r, [b]),
                    v(sc, "CallbacksImpl", r, r, [b]),
                    v(ac, r, r, r, [b]),
                    v(oc, "MergedLifecycle"),
                    v(_c, r, r, r, [b]),
                    (f(U).tbf = function () {
                        throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (f(W).icy = function (c, n, t, e) {
                        return this.jcy_1(c, n, t, e);
                    }),
                    (f(W).a4 = function () {
                        return this.jcy_1;
                    }),
                    (f(W).equals = function (c) {
                        var n;
                        null != c && k(c, V) ? (n = !(null == c || !k(c, p)) && d(this.a4(), c.a4())) : (n = !1);
                        return n;
                    }),
                    (f(W).hashCode = function () {
                        return x(this.a4());
                    }),
                    (f(Y).ecy = function () {
                        return this.kcy_1;
                    }),
                    (f(Y).fcy = function () {
                        return this.lcy_1;
                    }),
                    (f(Y).gcy = function () {
                        return this.mcy_1;
                    }),
                    (f(Y).hcy = function () {
                        return this.ncy_1;
                    }),
                    (f(Y).dcy = function () {
                        return this.ocy_1;
                    }),
                    (f(nc).vcw = function (c, n, t) {
                        return cc(this.wcy_1), s;
                    }),
                    (f(nc).rl = function (c, n, t) {
                        var e = null == n || null != n ? n : j();
                        return this.vcw(c, e, null == t || null != t ? t : j());
                    }),
                    (f(tc).zcw = function (c) {
                        return this.ucy_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.acx();
                                },
                                function (c, n) {
                                    return c.zcw(n);
                                },
                            ),
                            c,
                        );
                    }),
                    (f(tc).acx = function () {
                        return this.ucy_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.acx();
                                },
                                function (c, n) {
                                    return c.zcw(n);
                                },
                            ),
                        );
                    }),
                    (f(tc).pcy = function () {
                        this.rcy_1.vcx(this.tcy_1) || this.rcy_1.wcx(this.tcy_1);
                    }),
                    (f(tc).qcy = function () {
                        this.rcy_1.vcx(this.tcy_1) && this.rcy_1.xcx(this.tcy_1);
                    }),
                    (f(tc).vcx = function (c) {
                        return this.scy_1.vcx(c);
                    }),
                    (f(tc).wcx = function (c) {
                        this.scy_1.wcx(c);
                    }),
                    (f(tc).xcx = function (c) {
                        this.scy_1.xcx(c);
                    }),
                    (f(ec).tbf = function () {
                        this.xcy_1.ubf();
                    }),
                    (f(ic).tbf = function () {
                        var c = this.ycy_1.e5t(this.zcy_1);
                        null == c || c.tbf();
                    }),
                    (f(uc).tbf = function () {
                        this.acz_1.ubf();
                    }),
                    (f(sc).ccw = function () {
                        this.ccz_1(O());
                    }),
                    (f(sc).i1c = function () {
                        this.ccz_1(C());
                    }),
                    (f(sc).dcw = function () {
                        this.ccz_1(X());
                    }),
                    (f(sc).ecw = function () {
                        this.ccz_1(C());
                    }),
                    (f(sc).fcw = function () {
                        this.ccz_1(O());
                    }),
                    (f(sc).tbf = function () {
                        this.ccz_1(_());
                    }),
                    (f(ac).tbf = function () {
                        this.dcz_1.pcw(this.ecz_1), this.fcz_1.pcw(this.gcz_1);
                    }),
                    (f(oc).gcw = function (c) {
                        this.bcz_1.gcw(c);
                    }),
                    (f(oc).pcw = function (c) {
                        this.bcz_1.pcw(c);
                    }),
                    (f(oc).ea = function () {
                        return this.bcz_1.ea();
                    }),
                    (f(_c).tbf = function () {
                        this.hcz_1.tcv(this.icz_1);
                    }),
                    (f(U).ccw = l),
                    (f(U).i1c = h),
                    (f(U).dcw = $),
                    (f(U).ecw = y),
                    (f(U).fcw = w),
                    (f(ic).ccw = l),
                    (f(ic).i1c = h),
                    (f(ic).dcw = $),
                    (f(ic).ecw = y),
                    (f(ic).fcw = w),
                    (f(uc).ccw = l),
                    (f(uc).i1c = h),
                    (f(uc).dcw = $),
                    (f(uc).ecw = y),
                    (f(uc).fcw = w),
                    (f(ac).ccw = l),
                    (f(ac).i1c = h),
                    (f(ac).dcw = $),
                    (f(ac).ecw = y),
                    (f(ac).fcw = w),
                    (f(_c).ccw = l),
                    (f(_c).i1c = h),
                    (f(_c).dcw = $),
                    (f(_c).ecw = y),
                    (f(_c).fcw = w),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = Y),
                    (c.$_$.b = function (c, n, t) {
                        if (null == (t = t === r ? null : t));
                        else {
                            if (t.ea().equals(_())) {
                                throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.gcw(new U());
                        }
                        return c.dcy().icy(
                            null == t
                                ? c.ecy()
                                : (function (c, n, t) {
                                      return oc.call(t, D(), c, n), t;
                                  })(c.ecy(), t, P(f(oc))),
                            (function (c, n, t) {
                                if (((t = t === r ? null : t), !!c.scv(n))) {
                                    throw o(a('The key "' + n + '" is already in use.'));
                                }
                                var e = g(c.qcv(n, Q.y6g()));
                                if (null == t) {
                                    var i = Q.y6g();
                                    c.rcv(
                                        n,
                                        i,
                                        ((s = e),
                                        ((f = function () {
                                            return s.pcv();
                                        }).callableName = "save"),
                                        f),
                                    );
                                } else if (!Z(t)) {
                                    var u = Q.y6g();
                                    c.rcv(
                                        n,
                                        u,
                                        (function (c) {
                                            var n = function () {
                                                return c.pcv();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(e),
                                    ),
                                        t.ea().equals(_()) ? c.tcv(n) : t.gcw(new _c(c, n));
                                }
                                var s, f;
                                return e;
                            })(c.fcy(), n, t),
                            (function (c, n, t) {
                                var e;
                                if (((t = t === r ? null : t), null != t && Z(t))) e = m();
                                else {
                                    var i = c.rbf(n),
                                        u = null == i || k(i, B) ? i : j();
                                    null == u && ((u = new ec()), c.sbf(n, u));
                                    var s = u.xcy_1;
                                    if (null == t);
                                    else if (t.ea().equals(_())) {
                                        var a = c.e5t(n);
                                        null == a || a.tbf();
                                    } else t.gcw(new ic(c, n));
                                    e = s;
                                }
                                return e;
                            })(c.gcy(), n, t),
                            (function (c, n, t) {
                                n = n === r ? null : n;
                                var e = (function (c, n, t) {
                                    return (t = t === r ? 0 : t), new tc(c, (n = n === r || n), t);
                                })(c, !1, (t = t === r ? 0 : t));
                                if (null == n) e.zcw(!0), e.pcy();
                                else if (!Z(n)) {
                                    e.zcw(n.ea().b3(C()) >= 0), e.pcy();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.zcw(!0), s;
                                            }),
                                        u = (function (c) {
                                            return function () {
                                                return c.zcw(!1), s;
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
                                            return a.qcy(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var a, o;
                                var _;
                                return e;
                            })(c.hcy(), t),
                        );
                    });
            })(c.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.296697ea.js.map
