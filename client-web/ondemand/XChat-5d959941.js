(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (c, n, t) => {
            "use strict";
            t.d(n, { _i: () => u });
            var s = t(125959),
                e = t(918962);
            const i = [
                {
                    onResponse: (c) => {
                        if (!c.ok) throw new Error(`[${c.status}] Network error`);
                        return c;
                    },
                },
            ];
            const r = [
                    e.l,
                    (
                        (c = 3e5) =>
                        (n, t, s) => {
                            if (!AbortSignal.timeout) {
                                const e = new AbortController();
                                return setTimeout(() => e.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), c), n(t, { ...s, signal: s?.signal ?? e.signal });
                            }
                            return n(t, { ...s, signal: s?.signal ?? AbortSignal.timeout(c) });
                        }
                    )(),
                    (function (c) {
                        return async (n, t, s) => {
                            const e = {};
                            let i = t,
                                r = s;
                            for (const n of c) n.onRequest && ([i, r] = await n.onRequest(i, r, e));
                            let u = await n(i, r);
                            for (const n of c) n.onResponse && (u = await n.onResponse(u, e));
                            return u;
                        };
                    })(i),
                ],
                u = (0, s.g)(r);
        },
        594839: (c, n, t) => {
            !(function (c, n, t, s, e, i) {
                "use strict";
                var r = n.$_$.g,
                    u = n.$_$.s6,
                    a = n.$_$.ff,
                    o = n.$_$.m2,
                    _ = t.$_$.q,
                    l = n.$_$.bf,
                    f = t.$_$.a,
                    h = t.$_$.e,
                    $ = t.$_$.d,
                    p = t.$_$.c,
                    q = t.$_$.f,
                    v = t.$_$.g,
                    b = n.$_$.yd,
                    w = n.$_$.ce,
                    d = n.$_$.od,
                    k = n.$_$.bd,
                    m = n.$_$.ne,
                    x = n.$_$.xd,
                    y = s.$_$.b,
                    g = e.$_$.d,
                    C = i.$_$.b,
                    z = t.$_$.t,
                    N = t.$_$.o,
                    T = n.$_$.hf,
                    E = n.$_$.yj,
                    R = i.$_$.a,
                    j = (n.$_$.e6, n.$_$.zf),
                    A = n.$_$.vd,
                    B = e.$_$.b,
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
                    Q = s.$_$.c;
                function U() {}
                function V() {}
                function W(c) {
                    this.ecs_1 = c;
                }
                function Y(c, n, t, s) {
                    (n = n === r ? null : n), (t = t === r ? null : t), (s = s === r ? null : s), (this.fcs_1 = c);
                    this.gcs_1 = null == n ? y() : n;
                    this.hcs_1 =
                        null == t
                            ? (function (c, n) {
                                  n.ea().equals(_()) ? c.yap() : n.bcq(new ic(c));
                                  return c;
                              })(g(), this.fcs_1)
                            : t;
                    this.ics_1 = null == s ? C() : s;
                    var e,
                        i =
                            (((e = function (c, n, t, s) {
                                return new Y(c, n, t, s);
                            }).callableName = "<init>"),
                            e);
                    this.jcs_1 = new W(i);
                }
                function Z(c) {
                    return c.ea().equals(_());
                }
                function cc(c) {
                    c.ocs_1.ucq(c.vcq() && c.ncs_1.vcq());
                }
                function nc(c, n) {
                    (this.rcs_1 = n), T.call(this, c);
                }
                function tc(c, n, t, s) {
                    (s = s === r ? C() : s), (this.mcs_1 = c), (this.ncs_1 = s);
                    var e,
                        i =
                            ((e = this.ncs_1),
                            function (c) {
                                return (
                                    (function (c, n) {
                                        c.ucr(n);
                                    })(e, c),
                                    u
                                );
                            }),
                        a = (function (c) {
                            var n = function (n) {
                                return c.vcr(n), u;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.ncs_1),
                        o = (function (c) {
                            var n = function () {
                                return c.wcr(), u;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.ncs_1);
                    this.ocs_1 = R(
                        !1,
                        t,
                        i,
                        a,
                        o,
                        (function (c) {
                            return function () {
                                return c.tcr(), u;
                            };
                        })(this.ncs_1),
                    );
                    var _;
                    (this.pcs_1 = new nc(n, this)),
                        this.ncs_1.wcq(
                            ((_ = this),
                            function (c) {
                                return cc(_), u;
                            }),
                        );
                }
                function sc() {
                    this.scs_1 = g();
                }
                function ec(c, n) {
                    (this.tcs_1 = c), (this.ucs_1 = n);
                }
                function ic(c) {
                    this.vcs_1 = c;
                }
                function rc(c, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (c) {
                                switch (c.wcs_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(c.wcs_1), M(c.wcs_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(c.wcs_1);
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
                                switch (c.wcs_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(c.wcs_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(c.wcs_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(c);
                            break;
                        case 3:
                            !(function (c) {
                                switch (c.wcs_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(c.wcs_1);
                                        break;
                                    case 4:
                                        K(c.wcs_1);
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
                                switch (c.wcs_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(c.wcs_1);
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
                function uc(c) {
                    this.xcs_1 = c;
                }
                function ac(c, n, t, s) {
                    (this.ycs_1 = c), (this.zcs_1 = n), (this.act_1 = t), (this.bct_1 = s);
                }
                function oc(c, n, t) {
                    this.wcs_1 = c;
                    var s,
                        e,
                        i,
                        r = { _v: n.ea().equals(_()) ? _() : J() },
                        a = { _v: t.ea().equals(_()) ? _() : J() };
                    if ((rc(this, G(r._v, a._v)), !r._v.equals(_()) && !a._v.equals(_()))) {
                        var o = new uc(
                                ((s = r),
                                (e = this),
                                (i = a),
                                function (c) {
                                    return (s._v = c), rc(e, G(c, i._v)), u;
                                }),
                            ),
                            l = new uc(
                                (function (c, n, t) {
                                    return function (s) {
                                        return (c._v = s), rc(n, G(s, t._v)), u;
                                    };
                                })(a, this, r),
                            );
                        n.bcq(o), t.bcq(l);
                        var f = this.wcs_1;
                        f.ea().equals(_()) ? (n.kcq(o), t.kcq(l)) : f.bcq(new ac(n, o, t, l));
                    }
                }
                function _c(c, n) {
                    (this.cct_1 = c), (this.dct_1 = n);
                }
                b(U, r, r, r, [v]),
                    w(V, "ComponentContextFactory"),
                    b(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, k]),
                    b(Y, "DefaultComponentContext"),
                    b(nc, r, r, T),
                    b(tc, "DefaultChildBackHandler"),
                    b(sc, "ChildInstanceKeeperProvider", sc, r, [B]),
                    b(ec, r, r, r, [v]),
                    b(ic, r, r, r, [v]),
                    b(uc, "CallbacksImpl", r, r, [v]),
                    b(ac, r, r, r, [v]),
                    b(oc, "MergedLifecycle"),
                    b(_c, r, r, r, [v]),
                    (l(U).xap = function () {
                        throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).dcs = function (c, n, t, s) {
                        return this.ecs_1(c, n, t, s);
                    }),
                    (l(W).a4 = function () {
                        return this.ecs_1;
                    }),
                    (l(W).equals = function (c) {
                        var n;
                        null != c && m(c, V) ? (n = !(null == c || !m(c, k)) && d(this.a4(), c.a4())) : (n = !1);
                        return n;
                    }),
                    (l(W).hashCode = function () {
                        return x(this.a4());
                    }),
                    (l(Y).zcr = function () {
                        return this.fcs_1;
                    }),
                    (l(Y).acs = function () {
                        return this.gcs_1;
                    }),
                    (l(Y).bcs = function () {
                        return this.hcs_1;
                    }),
                    (l(Y).ccs = function () {
                        return this.ics_1;
                    }),
                    (l(Y).ycr = function () {
                        return this.jcs_1;
                    }),
                    (l(nc).qcq = function (c, n, t) {
                        return cc(this.rcs_1), u;
                    }),
                    (l(nc).rl = function (c, n, t) {
                        var s = null == n || null != n ? n : E();
                        return this.qcq(c, s, null == t || null != t ? t : E());
                    }),
                    (l(tc).ucq = function (c) {
                        return this.pcs_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (c) {
                                    return c.vcq();
                                },
                                function (c, n) {
                                    return c.ucq(n);
                                },
                            ),
                            c,
                        );
                    }),
                    (l(tc).vcq = function () {
                        return this.pcs_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                j,
                                function (c) {
                                    return c.vcq();
                                },
                                function (c, n) {
                                    return c.ucq(n);
                                },
                            ),
                        );
                    }),
                    (l(tc).kcs = function () {
                        this.mcs_1.qcr(this.ocs_1) || this.mcs_1.rcr(this.ocs_1);
                    }),
                    (l(tc).lcs = function () {
                        this.mcs_1.qcr(this.ocs_1) && this.mcs_1.scr(this.ocs_1);
                    }),
                    (l(tc).qcr = function (c) {
                        return this.ncs_1.qcr(c);
                    }),
                    (l(tc).rcr = function (c) {
                        this.ncs_1.rcr(c);
                    }),
                    (l(tc).scr = function (c) {
                        this.ncs_1.scr(c);
                    }),
                    (l(sc).xap = function () {
                        this.scs_1.yap();
                    }),
                    (l(ec).xap = function () {
                        var c = this.tcs_1.d5t(this.ucs_1);
                        null == c || c.xap();
                    }),
                    (l(ic).xap = function () {
                        this.vcs_1.yap();
                    }),
                    (l(uc).xcp = function () {
                        this.xcs_1(O());
                    }),
                    (l(uc).i1c = function () {
                        this.xcs_1(z());
                    }),
                    (l(uc).ycp = function () {
                        this.xcs_1(X());
                    }),
                    (l(uc).zcp = function () {
                        this.xcs_1(z());
                    }),
                    (l(uc).acq = function () {
                        this.xcs_1(O());
                    }),
                    (l(uc).xap = function () {
                        this.xcs_1(_());
                    }),
                    (l(ac).xap = function () {
                        this.ycs_1.kcq(this.zcs_1), this.act_1.kcq(this.bct_1);
                    }),
                    (l(oc).bcq = function (c) {
                        this.wcs_1.bcq(c);
                    }),
                    (l(oc).kcq = function (c) {
                        this.wcs_1.kcq(c);
                    }),
                    (l(oc).ea = function () {
                        return this.wcs_1.ea();
                    }),
                    (l(_c).xap = function () {
                        this.cct_1.ocp(this.dct_1);
                    }),
                    (l(U).xcp = f),
                    (l(U).i1c = h),
                    (l(U).ycp = $),
                    (l(U).zcp = p),
                    (l(U).acq = q),
                    (l(ec).xcp = f),
                    (l(ec).i1c = h),
                    (l(ec).ycp = $),
                    (l(ec).zcp = p),
                    (l(ec).acq = q),
                    (l(ic).xcp = f),
                    (l(ic).i1c = h),
                    (l(ic).ycp = $),
                    (l(ic).zcp = p),
                    (l(ic).acq = q),
                    (l(ac).xcp = f),
                    (l(ac).i1c = h),
                    (l(ac).ycp = $),
                    (l(ac).zcp = p),
                    (l(ac).acq = q),
                    (l(_c).xcp = f),
                    (l(_c).i1c = h),
                    (l(_c).ycp = $),
                    (l(_c).zcp = p),
                    (l(_c).acq = q),
                    (c.$_$ = c.$_$ || {}),
                    (c.$_$.a = Y),
                    (c.$_$.b = function (c, n, t) {
                        if (null == (t = t === r ? null : t));
                        else {
                            if (t.ea().equals(_())) {
                                throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.bcq(new U());
                        }
                        return c.ycr().dcs(
                            null == t
                                ? c.zcr()
                                : (function (c, n, t) {
                                      return oc.call(t, D(), c, n), t;
                                  })(c.zcr(), t, P(l(oc))),
                            (function (c, n, t) {
                                if (((t = t === r ? null : t), !!c.ncp(n))) {
                                    throw o(a('The key "' + n + '" is already in use.'));
                                }
                                var s = y(c.lcp(n, Q.x6g()));
                                if (null == t) {
                                    var e = Q.x6g();
                                    c.mcp(
                                        n,
                                        e,
                                        ((u = s),
                                        ((l = function () {
                                            return u.kcp();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(t)) {
                                    var i = Q.x6g();
                                    c.mcp(
                                        n,
                                        i,
                                        (function (c) {
                                            var n = function () {
                                                return c.kcp();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(s),
                                    ),
                                        t.ea().equals(_()) ? c.ocp(n) : t.bcq(new _c(c, n));
                                }
                                var u, l;
                                return s;
                            })(c.acs(), n, t),
                            (function (c, n, t) {
                                var s;
                                if (((t = t === r ? null : t), null != t && Z(t))) s = g();
                                else {
                                    var e = c.vap(n),
                                        i = null == e || m(e, B) ? e : E();
                                    null == i && ((i = new sc()), c.wap(n, i));
                                    var u = i.scs_1;
                                    if (null == t);
                                    else if (t.ea().equals(_())) {
                                        var a = c.d5t(n);
                                        null == a || a.xap();
                                    } else t.bcq(new ec(c, n));
                                    s = u;
                                }
                                return s;
                            })(c.bcs(), n, t),
                            (function (c, n, t) {
                                n = n === r ? null : n;
                                var s = (function (c, n, t) {
                                    return (t = t === r ? 0 : t), new tc(c, (n = n === r || n), t);
                                })(c, !1, (t = t === r ? 0 : t));
                                if (null == n) s.ucq(!0), s.kcs();
                                else if (!Z(n)) {
                                    s.ucq(n.ea().b3(z()) >= 0), s.kcs();
                                    var e =
                                            ((_ = s),
                                            function () {
                                                return _.ucq(!0), u;
                                            }),
                                        i = (function (c) {
                                            return function () {
                                                return c.ucq(!1), u;
                                            };
                                        })(s);
                                    N(
                                        n,
                                        r,
                                        e,
                                        r,
                                        r,
                                        i,
                                        ((a = s),
                                        ((o = function () {
                                            return a.lcs(), u;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var a, o;
                                var _;
                                return s;
                            })(c.ccs(), t),
                        );
                    });
            })(c.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.a499633a.js.map
