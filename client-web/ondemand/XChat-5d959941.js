(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (c, t, n) => {
            "use strict";
            n.d(t, { _i: () => a });
            var e = n(125959),
                i = n(918962);
            const u = [
                {
                    onResponse: (c) => {
                        if (!c.ok) throw new Error(`[${c.status}] Network error`);
                        return c;
                    },
                },
            ];
            const s = [
                    i.l,
                    (
                        (c = 3e5) =>
                        (t, n, e) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), c), t(n, { ...e, signal: e?.signal ?? i.signal });
                            }
                            return t(n, { ...e, signal: e?.signal ?? AbortSignal.timeout(c) });
                        }
                    )(),
                    (function (c) {
                        return async (t, n, e) => {
                            const i = {};
                            let u = n,
                                s = e;
                            for (const t of c) t.onRequest && ([u, s] = await t.onRequest(u, s, i));
                            let a = await t(u, s);
                            for (const t of c) t.onResponse && (a = await t.onResponse(a, i));
                            return a;
                        };
                    })(u),
                ],
                a = (0, e.g)(s);
        },
        594839: (c, t, n) => {
            !(function (c, t, n, e, i, u) {
                "use strict";
                var s = t.$_$.g,
                    a = t.$_$.s6,
                    r = t.$_$.ff,
                    o = t.$_$.m2,
                    _ = n.$_$.q,
                    l = t.$_$.bf,
                    f = n.$_$.a,
                    v = n.$_$.e,
                    h = n.$_$.d,
                    $ = n.$_$.c,
                    w = n.$_$.f,
                    b = n.$_$.g,
                    d = t.$_$.yd,
                    k = t.$_$.ce,
                    g = t.$_$.od,
                    m = t.$_$.bd,
                    y = t.$_$.ne,
                    p = t.$_$.xd,
                    x = e.$_$.b,
                    C = i.$_$.d,
                    q = u.$_$.b,
                    j = n.$_$.t,
                    N = n.$_$.o,
                    T = t.$_$.hf,
                    z = t.$_$.yj,
                    E = u.$_$.a,
                    R = (t.$_$.e6, t.$_$.zf),
                    A = t.$_$.vd,
                    B = i.$_$.b,
                    D = n.$_$.h,
                    P = t.$_$.af,
                    F = t.$_$.al,
                    I = n.$_$.i,
                    M = n.$_$.j,
                    S = n.$_$.n,
                    H = n.$_$.m,
                    K = n.$_$.k,
                    L = n.$_$.l,
                    O = n.$_$.p,
                    X = n.$_$.s,
                    G = t.$_$.gc,
                    J = n.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(c) {
                    this.ocv_1 = c;
                }
                function Y(c, t, n, e) {
                    (t = t === s ? null : t), (n = n === s ? null : n), (e = e === s ? null : e), (this.pcv_1 = c);
                    this.qcv_1 = null == t ? x() : t;
                    this.rcv_1 =
                        null == n
                            ? (function (c, t) {
                                  t.ea().equals(_()) ? c.cas() : t.lct(new uc(c));
                                  return c;
                              })(C(), this.pcv_1)
                            : n;
                    this.scv_1 = null == e ? q() : e;
                    var i,
                        u =
                            (((i = function (c, t, n, e) {
                                return new Y(c, t, n, e);
                            }).callableName = "<init>"),
                            i);
                    this.tcv_1 = new W(u);
                }
                function Z(c) {
                    return c.ea().equals(_());
                }
                function cc(c) {
                    c.ycv_1.ecu(c.fcu() && c.xcv_1.fcu());
                }
                function tc(c, t) {
                    (this.bcw_1 = t), T.call(this, c);
                }
                function nc(c, t, n, e) {
                    (e = e === s ? q() : e), (this.wcv_1 = c), (this.xcv_1 = e);
                    var i,
                        u =
                            ((i = this.xcv_1),
                            function (c) {
                                return (
                                    (function (c, t) {
                                        c.ecv(t);
                                    })(i, c),
                                    a
                                );
                            }),
                        r = (function (c) {
                            var t = function (t) {
                                return c.fcv(t), a;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.xcv_1),
                        o = (function (c) {
                            var t = function () {
                                return c.gcv(), a;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.xcv_1);
                    this.ycv_1 = E(
                        !1,
                        n,
                        u,
                        r,
                        o,
                        (function (c) {
                            return function () {
                                return c.dcv(), a;
                            };
                        })(this.xcv_1),
                    );
                    var _;
                    (this.zcv_1 = new tc(t, this)),
                        this.xcv_1.gcu(
                            ((_ = this),
                            function (c) {
                                return cc(_), a;
                            }),
                        );
                }
                function ec() {
                    this.ccw_1 = C();
                }
                function ic(c, t) {
                    (this.dcw_1 = c), (this.ecw_1 = t);
                }
                function uc(c) {
                    this.fcw_1 = c;
                }
                function sc(c, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (c) {
                                switch (c.gcw_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(c.gcw_1), M(c.gcw_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(c.gcw_1);
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
                                switch (c.gcw_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(c.gcw_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(c.gcw_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 3:
                            !(function (c) {
                                switch (c.gcw_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(c.gcw_1);
                                        break;
                                    case 4:
                                        K(c.gcw_1);
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
                                switch (c.gcw_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(c.gcw_1);
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
                function ac(c) {
                    this.hcw_1 = c;
                }
                function rc(c, t, n, e) {
                    (this.icw_1 = c), (this.jcw_1 = t), (this.kcw_1 = n), (this.lcw_1 = e);
                }
                function oc(c, t, n) {
                    this.gcw_1 = c;
                    var e,
                        i,
                        u,
                        s = { _v: t.ea().equals(_()) ? _() : J() },
                        r = { _v: n.ea().equals(_()) ? _() : J() };
                    if ((sc(this, G(s._v, r._v)), !s._v.equals(_()) && !r._v.equals(_()))) {
                        var o = new ac(
                                ((e = s),
                                (i = this),
                                (u = r),
                                function (c) {
                                    return (e._v = c), sc(i, G(c, u._v)), a;
                                }),
                            ),
                            l = new ac(
                                (function (c, t, n) {
                                    return function (e) {
                                        return (c._v = e), sc(t, G(e, n._v)), a;
                                    };
                                })(r, this, s),
                            );
                        t.lct(o), n.lct(l);
                        var f = this.gcw_1;
                        f.ea().equals(_()) ? (t.uct(o), n.uct(l)) : f.lct(new rc(t, o, n, l));
                    }
                }
                function _c(c, t) {
                    (this.mcw_1 = c), (this.ncw_1 = t);
                }
                d(U, s, s, s, [b]),
                    k(V, "ComponentContextFactory"),
                    d(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", s, s, [V, m]),
                    d(Y, "DefaultComponentContext"),
                    d(tc, s, s, T),
                    d(nc, "DefaultChildBackHandler"),
                    d(ec, "ChildInstanceKeeperProvider", ec, s, [B]),
                    d(ic, s, s, s, [b]),
                    d(uc, s, s, s, [b]),
                    d(ac, "CallbacksImpl", s, s, [b]),
                    d(rc, s, s, s, [b]),
                    d(oc, "MergedLifecycle"),
                    d(_c, s, s, s, [b]),
                    (l(U).bas = function () {
                        throw o(r("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).ncv = function (c, t, n, e) {
                        return this.ocv_1(c, t, n, e);
                    }),
                    (l(W).a4 = function () {
                        return this.ocv_1;
                    }),
                    (l(W).equals = function (c) {
                        var t;
                        null != c && y(c, V) ? (t = !(null == c || !y(c, m)) && g(this.a4(), c.a4())) : (t = !1);
                        return t;
                    }),
                    (l(W).hashCode = function () {
                        return p(this.a4());
                    }),
                    (l(Y).jcv = function () {
                        return this.pcv_1;
                    }),
                    (l(Y).kcv = function () {
                        return this.qcv_1;
                    }),
                    (l(Y).lcv = function () {
                        return this.rcv_1;
                    }),
                    (l(Y).mcv = function () {
                        return this.scv_1;
                    }),
                    (l(Y).icv = function () {
                        return this.tcv_1;
                    }),
                    (l(tc).acu = function (c, t, n) {
                        return cc(this.bcw_1), a;
                    }),
                    (l(tc).rl = function (c, t, n) {
                        var e = null == t || null != t ? t : z();
                        return this.acu(c, e, null == n || null != n ? n : z());
                    }),
                    (l(nc).ecu = function (c) {
                        return this.zcv_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.fcu();
                                },
                                function (c, t) {
                                    return c.ecu(t);
                                },
                            ),
                            c,
                        );
                    }),
                    (l(nc).fcu = function () {
                        return this.zcv_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.fcu();
                                },
                                function (c, t) {
                                    return c.ecu(t);
                                },
                            ),
                        );
                    }),
                    (l(nc).ucv = function () {
                        this.wcv_1.acv(this.ycv_1) || this.wcv_1.bcv(this.ycv_1);
                    }),
                    (l(nc).vcv = function () {
                        this.wcv_1.acv(this.ycv_1) && this.wcv_1.ccv(this.ycv_1);
                    }),
                    (l(nc).acv = function (c) {
                        return this.xcv_1.acv(c);
                    }),
                    (l(nc).bcv = function (c) {
                        this.xcv_1.bcv(c);
                    }),
                    (l(nc).ccv = function (c) {
                        this.xcv_1.ccv(c);
                    }),
                    (l(ec).bas = function () {
                        this.ccw_1.cas();
                    }),
                    (l(ic).bas = function () {
                        var c = this.dcw_1.d5t(this.ecw_1);
                        null == c || c.bas();
                    }),
                    (l(uc).bas = function () {
                        this.fcw_1.cas();
                    }),
                    (l(ac).hct = function () {
                        this.hcw_1(O());
                    }),
                    (l(ac).i1c = function () {
                        this.hcw_1(j());
                    }),
                    (l(ac).ict = function () {
                        this.hcw_1(X());
                    }),
                    (l(ac).jct = function () {
                        this.hcw_1(j());
                    }),
                    (l(ac).kct = function () {
                        this.hcw_1(O());
                    }),
                    (l(ac).bas = function () {
                        this.hcw_1(_());
                    }),
                    (l(rc).bas = function () {
                        this.icw_1.uct(this.jcw_1), this.kcw_1.uct(this.lcw_1);
                    }),
                    (l(oc).lct = function (c) {
                        this.gcw_1.lct(c);
                    }),
                    (l(oc).uct = function (c) {
                        this.gcw_1.uct(c);
                    }),
                    (l(oc).ea = function () {
                        return this.gcw_1.ea();
                    }),
                    (l(_c).bas = function () {
                        this.mcw_1.ycs(this.ncw_1);
                    }),
                    (l(U).hct = f),
                    (l(U).i1c = v),
                    (l(U).ict = h),
                    (l(U).jct = $),
                    (l(U).kct = w),
                    (l(ic).hct = f),
                    (l(ic).i1c = v),
                    (l(ic).ict = h),
                    (l(ic).jct = $),
                    (l(ic).kct = w),
                    (l(uc).hct = f),
                    (l(uc).i1c = v),
                    (l(uc).ict = h),
                    (l(uc).jct = $),
                    (l(uc).kct = w),
                    (l(rc).hct = f),
                    (l(rc).i1c = v),
                    (l(rc).ict = h),
                    (l(rc).jct = $),
                    (l(rc).kct = w),
                    (l(_c).hct = f),
                    (l(_c).i1c = v),
                    (l(_c).ict = h),
                    (l(_c).jct = $),
                    (l(_c).kct = w),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = Y),
                    (c.$_$.b = function (c, t, n) {
                        if (null == (n = n === s ? null : n));
                        else {
                            if (n.ea().equals(_())) {
                                throw o(r("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            n.lct(new U());
                        }
                        return c.icv().ncv(
                            null == n
                                ? c.jcv()
                                : (function (c, t, n) {
                                      return oc.call(n, D(), c, t), n;
                                  })(c.jcv(), n, P(l(oc))),
                            (function (c, t, n) {
                                if (((n = n === s ? null : n), !!c.xcs(t))) {
                                    throw o(r('The key "' + t + '" is already in use.'));
                                }
                                var e = x(c.vcs(t, Q.x6g()));
                                if (null == n) {
                                    var i = Q.x6g();
                                    c.wcs(
                                        t,
                                        i,
                                        ((a = e),
                                        ((l = function () {
                                            return a.ucs();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(n)) {
                                    var u = Q.x6g();
                                    c.wcs(
                                        t,
                                        u,
                                        (function (c) {
                                            var t = function () {
                                                return c.ucs();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        n.ea().equals(_()) ? c.ycs(t) : n.lct(new _c(c, t));
                                }
                                var a, l;
                                return e;
                            })(c.kcv(), t, n),
                            (function (c, t, n) {
                                var e;
                                if (((n = n === s ? null : n), null != n && Z(n))) e = C();
                                else {
                                    var i = c.zar(t),
                                        u = null == i || y(i, B) ? i : z();
                                    null == u && ((u = new ec()), c.aas(t, u));
                                    var a = u.ccw_1;
                                    if (null == n);
                                    else if (n.ea().equals(_())) {
                                        var r = c.d5t(t);
                                        null == r || r.bas();
                                    } else n.lct(new ic(c, t));
                                    e = a;
                                }
                                return e;
                            })(c.lcv(), t, n),
                            (function (c, t, n) {
                                t = t === s ? null : t;
                                var e = (function (c, t, n) {
                                    return (n = n === s ? 0 : n), new nc(c, (t = t === s || t), n);
                                })(c, !1, (n = n === s ? 0 : n));
                                if (null == t) e.ecu(!0), e.ucv();
                                else if (!Z(t)) {
                                    e.ecu(t.ea().b3(j()) >= 0), e.ucv();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.ecu(!0), a;
                                            }),
                                        u = (function (c) {
                                            return function () {
                                                return c.ecu(!1), a;
                                            };
                                        })(e);
                                    N(
                                        t,
                                        s,
                                        i,
                                        s,
                                        s,
                                        u,
                                        ((r = e),
                                        ((o = function () {
                                            return r.vcv(), a;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var r, o;
                                var _;
                                return e;
                            })(c.mcv(), n),
                        );
                    });
            })(c.exports, n(519039), n(54279), n(440172), n(538264), n(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.c44f98aa.js.map
