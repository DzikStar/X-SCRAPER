(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (c, n, t) => {
            "use strict";
            t.d(n, { _i: () => a });
            var e = t(125959),
                r = t(918962);
            const s = [
                {
                    onResponse: (c) => {
                        if (!c.ok) throw new Error(`[${c.status}] Network error`);
                        return c;
                    },
                },
            ];
            const i = [
                    r.l,
                    (
                        (c = 3e5) =>
                        (n, t, e) => {
                            if (!AbortSignal.timeout) {
                                const r = new AbortController();
                                return setTimeout(() => r.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), c), n(t, { ...e, signal: e?.signal ?? r.signal });
                            }
                            return n(t, { ...e, signal: e?.signal ?? AbortSignal.timeout(c) });
                        }
                    )(),
                    (function (c) {
                        return async (n, t, e) => {
                            const r = {};
                            let s = t,
                                i = e;
                            for (const n of c) n.onRequest && ([s, i] = await n.onRequest(s, i, r));
                            let a = await n(s, i);
                            for (const n of c) n.onResponse && (a = await n.onResponse(a, r));
                            return a;
                        };
                    })(s),
                ],
                a = (0, e.g)(i);
        },
        594839: (c, n, t) => {
            !(function (c, n, t, e, r, s) {
                "use strict";
                var i = n.$_$.g,
                    a = n.$_$.s6,
                    u = n.$_$.ff,
                    o = n.$_$.m2,
                    _ = t.$_$.q,
                    l = n.$_$.bf,
                    f = t.$_$.a,
                    h = t.$_$.e,
                    $ = t.$_$.d,
                    p = t.$_$.c,
                    b = t.$_$.f,
                    v = t.$_$.g,
                    d = n.$_$.yd,
                    w = n.$_$.ce,
                    q = n.$_$.od,
                    k = n.$_$.bd,
                    y = n.$_$.ne,
                    m = n.$_$.xd,
                    g = e.$_$.b,
                    C = r.$_$.d,
                    z = s.$_$.b,
                    x = t.$_$.t,
                    N = t.$_$.o,
                    T = n.$_$.hf,
                    j = n.$_$.yj,
                    E = s.$_$.a,
                    R = (n.$_$.e6, n.$_$.zf),
                    A = n.$_$.vd,
                    B = r.$_$.b,
                    D = t.$_$.h,
                    P = n.$_$.af,
                    F = n.$_$.al,
                    I = t.$_$.i,
                    M = t.$_$.j,
                    S = t.$_$.n,
                    H = t.$_$.m,
                    K = t.$_$.k,
                    L = t.$_$.l,
                    O = t.$_$.p,
                    X = t.$_$.s,
                    G = n.$_$.gc,
                    J = t.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(c) {
                    this.icr_1 = c;
                }
                function Y(c, n, t, e) {
                    (n = n === i ? null : n), (t = t === i ? null : t), (e = e === i ? null : e), (this.jcr_1 = c);
                    this.kcr_1 = null == n ? g() : n;
                    this.lcr_1 =
                        null == t
                            ? (function (c, n) {
                                  n.ea().equals(_()) ? c.das() : n.fcp(new sc(c));
                                  return c;
                              })(C(), this.jcr_1)
                            : t;
                    this.mcr_1 = null == e ? z() : e;
                    var r,
                        s =
                            (((r = function (c, n, t, e) {
                                return new Y(c, n, t, e);
                            }).callableName = "<init>"),
                            r);
                    this.ncr_1 = new W(s);
                }
                function Z(c) {
                    return c.ea().equals(_());
                }
                function cc(c) {
                    c.scr_1.ycp(c.zcp() && c.rcr_1.zcp());
                }
                function nc(c, n) {
                    (this.vcr_1 = n), T.call(this, c);
                }
                function tc(c, n, t, e) {
                    (e = e === i ? z() : e), (this.qcr_1 = c), (this.rcr_1 = e);
                    var r,
                        s =
                            ((r = this.rcr_1),
                            function (c) {
                                return (
                                    (function (c, n) {
                                        c.ycq(n);
                                    })(r, c),
                                    a
                                );
                            }),
                        u = (function (c) {
                            var n = function (n) {
                                return c.zcq(n), a;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.rcr_1),
                        o = (function (c) {
                            var n = function () {
                                return c.acr(), a;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.rcr_1);
                    this.scr_1 = E(
                        !1,
                        t,
                        s,
                        u,
                        o,
                        (function (c) {
                            return function () {
                                return c.xcq(), a;
                            };
                        })(this.rcr_1),
                    );
                    var _;
                    (this.tcr_1 = new nc(n, this)),
                        this.rcr_1.acq(
                            ((_ = this),
                            function (c) {
                                return cc(_), a;
                            }),
                        );
                }
                function ec() {
                    this.wcr_1 = C();
                }
                function rc(c, n) {
                    (this.xcr_1 = c), (this.ycr_1 = n);
                }
                function sc(c) {
                    this.zcr_1 = c;
                }
                function ic(c, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (c) {
                                switch (c.acs_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(c.acs_1), M(c.acs_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(c.acs_1);
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
                                switch (c.acs_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(c.acs_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(c.acs_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 3:
                            !(function (c) {
                                switch (c.acs_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(c.acs_1);
                                        break;
                                    case 4:
                                        K(c.acs_1);
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
                                switch (c.acs_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(c.acs_1);
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
                    this.bcs_1 = c;
                }
                function uc(c, n, t, e) {
                    (this.ccs_1 = c), (this.dcs_1 = n), (this.ecs_1 = t), (this.fcs_1 = e);
                }
                function oc(c, n, t) {
                    this.acs_1 = c;
                    var e,
                        r,
                        s,
                        i = { _v: n.ea().equals(_()) ? _() : J() },
                        u = { _v: t.ea().equals(_()) ? _() : J() };
                    if ((ic(this, G(i._v, u._v)), !i._v.equals(_()) && !u._v.equals(_()))) {
                        var o = new ac(
                                ((e = i),
                                (r = this),
                                (s = u),
                                function (c) {
                                    return (e._v = c), ic(r, G(c, s._v)), a;
                                }),
                            ),
                            l = new ac(
                                (function (c, n, t) {
                                    return function (e) {
                                        return (c._v = e), ic(n, G(e, t._v)), a;
                                    };
                                })(u, this, i),
                            );
                        n.fcp(o), t.fcp(l);
                        var f = this.acs_1;
                        f.ea().equals(_()) ? (n.ocp(o), t.ocp(l)) : f.fcp(new uc(n, o, t, l));
                    }
                }
                function _c(c, n) {
                    (this.gcs_1 = c), (this.hcs_1 = n);
                }
                d(U, i, i, i, [v]),
                    w(V, "ComponentContextFactory"),
                    d(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", i, i, [V, k]),
                    d(Y, "DefaultComponentContext"),
                    d(nc, i, i, T),
                    d(tc, "DefaultChildBackHandler"),
                    d(ec, "ChildInstanceKeeperProvider", ec, i, [B]),
                    d(rc, i, i, i, [v]),
                    d(sc, i, i, i, [v]),
                    d(ac, "CallbacksImpl", i, i, [v]),
                    d(uc, i, i, i, [v]),
                    d(oc, "MergedLifecycle"),
                    d(_c, i, i, i, [v]),
                    (l(U).cas = function () {
                        throw o(u("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).hcr = function (c, n, t, e) {
                        return this.icr_1(c, n, t, e);
                    }),
                    (l(W).a4 = function () {
                        return this.icr_1;
                    }),
                    (l(W).equals = function (c) {
                        var n;
                        null != c && y(c, V) ? (n = !(null == c || !y(c, k)) && q(this.a4(), c.a4())) : (n = !1);
                        return n;
                    }),
                    (l(W).hashCode = function () {
                        return m(this.a4());
                    }),
                    (l(Y).dcr = function () {
                        return this.jcr_1;
                    }),
                    (l(Y).ecr = function () {
                        return this.kcr_1;
                    }),
                    (l(Y).fcr = function () {
                        return this.lcr_1;
                    }),
                    (l(Y).gcr = function () {
                        return this.mcr_1;
                    }),
                    (l(Y).ccr = function () {
                        return this.ncr_1;
                    }),
                    (l(nc).ucp = function (c, n, t) {
                        return cc(this.vcr_1), a;
                    }),
                    (l(nc).rl = function (c, n, t) {
                        var e = null == n || null != n ? n : j();
                        return this.ucp(c, e, null == t || null != t ? t : j());
                    }),
                    (l(tc).ycp = function (c) {
                        return this.tcr_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.zcp();
                                },
                                function (c, n) {
                                    return c.ycp(n);
                                },
                            ),
                            c,
                        );
                    }),
                    (l(tc).zcp = function () {
                        return this.tcr_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (c) {
                                    return c.zcp();
                                },
                                function (c, n) {
                                    return c.ycp(n);
                                },
                            ),
                        );
                    }),
                    (l(tc).ocr = function () {
                        this.qcr_1.ucq(this.scr_1) || this.qcr_1.vcq(this.scr_1);
                    }),
                    (l(tc).pcr = function () {
                        this.qcr_1.ucq(this.scr_1) && this.qcr_1.wcq(this.scr_1);
                    }),
                    (l(tc).ucq = function (c) {
                        return this.rcr_1.ucq(c);
                    }),
                    (l(tc).vcq = function (c) {
                        this.rcr_1.vcq(c);
                    }),
                    (l(tc).wcq = function (c) {
                        this.rcr_1.wcq(c);
                    }),
                    (l(ec).cas = function () {
                        this.wcr_1.das();
                    }),
                    (l(rc).cas = function () {
                        var c = this.xcr_1.f5t(this.ycr_1);
                        null == c || c.cas();
                    }),
                    (l(sc).cas = function () {
                        this.zcr_1.das();
                    }),
                    (l(ac).bcp = function () {
                        this.bcs_1(O());
                    }),
                    (l(ac).i1c = function () {
                        this.bcs_1(x());
                    }),
                    (l(ac).ccp = function () {
                        this.bcs_1(X());
                    }),
                    (l(ac).dcp = function () {
                        this.bcs_1(x());
                    }),
                    (l(ac).ecp = function () {
                        this.bcs_1(O());
                    }),
                    (l(ac).cas = function () {
                        this.bcs_1(_());
                    }),
                    (l(uc).cas = function () {
                        this.ccs_1.ocp(this.dcs_1), this.ecs_1.ocp(this.fcs_1);
                    }),
                    (l(oc).fcp = function (c) {
                        this.acs_1.fcp(c);
                    }),
                    (l(oc).ocp = function (c) {
                        this.acs_1.ocp(c);
                    }),
                    (l(oc).ea = function () {
                        return this.acs_1.ea();
                    }),
                    (l(_c).cas = function () {
                        this.gcs_1.sco(this.hcs_1);
                    }),
                    (l(U).bcp = f),
                    (l(U).i1c = h),
                    (l(U).ccp = $),
                    (l(U).dcp = p),
                    (l(U).ecp = b),
                    (l(rc).bcp = f),
                    (l(rc).i1c = h),
                    (l(rc).ccp = $),
                    (l(rc).dcp = p),
                    (l(rc).ecp = b),
                    (l(sc).bcp = f),
                    (l(sc).i1c = h),
                    (l(sc).ccp = $),
                    (l(sc).dcp = p),
                    (l(sc).ecp = b),
                    (l(uc).bcp = f),
                    (l(uc).i1c = h),
                    (l(uc).ccp = $),
                    (l(uc).dcp = p),
                    (l(uc).ecp = b),
                    (l(_c).bcp = f),
                    (l(_c).i1c = h),
                    (l(_c).ccp = $),
                    (l(_c).dcp = p),
                    (l(_c).ecp = b),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = Y),
                    (c.$_$.b = function (c, n, t) {
                        if (null == (t = t === i ? null : t));
                        else {
                            if (t.ea().equals(_())) {
                                throw o(u("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.fcp(new U());
                        }
                        return c.ccr().hcr(
                            null == t
                                ? c.dcr()
                                : (function (c, n, t) {
                                      return oc.call(t, D(), c, n), t;
                                  })(c.dcr(), t, P(l(oc))),
                            (function (c, n, t) {
                                if (((t = t === i ? null : t), !!c.rco(n))) {
                                    throw o(u('The key "' + n + '" is already in use.'));
                                }
                                var e = g(c.pco(n, Q.z6g()));
                                if (null == t) {
                                    var r = Q.z6g();
                                    c.qco(
                                        n,
                                        r,
                                        ((a = e),
                                        ((l = function () {
                                            return a.oco();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(t)) {
                                    var s = Q.z6g();
                                    c.qco(
                                        n,
                                        s,
                                        (function (c) {
                                            var n = function () {
                                                return c.oco();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(e),
                                    ),
                                        t.ea().equals(_()) ? c.sco(n) : t.fcp(new _c(c, n));
                                }
                                var a, l;
                                return e;
                            })(c.ecr(), n, t),
                            (function (c, n, t) {
                                var e;
                                if (((t = t === i ? null : t), null != t && Z(t))) e = C();
                                else {
                                    var r = c.aas(n),
                                        s = null == r || y(r, B) ? r : j();
                                    null == s && ((s = new ec()), c.bas(n, s));
                                    var a = s.wcr_1;
                                    if (null == t);
                                    else if (t.ea().equals(_())) {
                                        var u = c.f5t(n);
                                        null == u || u.cas();
                                    } else t.fcp(new rc(c, n));
                                    e = a;
                                }
                                return e;
                            })(c.fcr(), n, t),
                            (function (c, n, t) {
                                n = n === i ? null : n;
                                var e = (function (c, n, t) {
                                    return (t = t === i ? 0 : t), new tc(c, (n = n === i || n), t);
                                })(c, !1, (t = t === i ? 0 : t));
                                if (null == n) e.ycp(!0), e.ocr();
                                else if (!Z(n)) {
                                    e.ycp(n.ea().b3(x()) >= 0), e.ocr();
                                    var r =
                                            ((_ = e),
                                            function () {
                                                return _.ycp(!0), a;
                                            }),
                                        s = (function (c) {
                                            return function () {
                                                return c.ycp(!1), a;
                                            };
                                        })(e);
                                    N(
                                        n,
                                        i,
                                        r,
                                        i,
                                        i,
                                        s,
                                        ((u = e),
                                        ((o = function () {
                                            return u.pcr(), a;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var u, o;
                                var _;
                                return e;
                            })(c.gcr(), t),
                        );
                    });
            })(c.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.f866242a.js.map
