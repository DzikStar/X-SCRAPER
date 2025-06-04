(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (n, t, e) => {
            "use strict";
            e.d(t, { _i: () => u });
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
            const r = [
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
                                r = b;
                            for (const t of n) t.onRequest && ([a, r] = await t.onRequest(a, r, i));
                            let u = await t(a, r);
                            for (const t of n) t.onResponse && (u = await t.onResponse(u, i));
                            return u;
                        };
                    })(a),
                ],
                u = (0, b.g)(r);
        },
        594839: (n, t, e) => {
            !(function (n, t, e, b, i, a) {
                "use strict";
                var r = t.$_$.g,
                    u = t.$_$.p6,
                    s = t.$_$.bf,
                    o = t.$_$.m2,
                    c = e.$_$.q,
                    _ = t.$_$.xe,
                    l = e.$_$.a,
                    f = e.$_$.e,
                    h = e.$_$.d,
                    $ = e.$_$.c,
                    w = e.$_$.f,
                    y = e.$_$.g,
                    z = t.$_$.ud,
                    v = t.$_$.yd,
                    k = t.$_$.kd,
                    d = t.$_$.xc,
                    m = t.$_$.je,
                    x = t.$_$.td,
                    p = b.$_$.b,
                    j = i.$_$.d,
                    q = a.$_$.b,
                    C = e.$_$.t,
                    g = e.$_$.o,
                    N = t.$_$.df,
                    T = t.$_$.qj,
                    E = a.$_$.a,
                    R = (t.$_$.b6, t.$_$.vf),
                    A = t.$_$.rd,
                    B = i.$_$.b,
                    D = e.$_$.h,
                    P = t.$_$.we,
                    F = t.$_$.sk,
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
                    this.rby_1 = n;
                }
                function Y(n, t, e, b) {
                    (t = t === r ? null : t), (e = e === r ? null : e), (b = b === r ? null : b), (this.sby_1 = n);
                    this.tby_1 = null == t ? p() : t;
                    this.uby_1 =
                        null == e
                            ? (function (n, t) {
                                  t.ea().equals(c()) ? n.tae() : t.obw(new rn(n));
                                  return n;
                              })(j(), this.sby_1)
                            : e;
                    this.vby_1 = null == b ? q() : b;
                    var i,
                        a =
                            (((i = function (n, t, e, b) {
                                return new Y(n, t, e, b);
                            }).callableName = "<init>"),
                            i);
                    this.wby_1 = new W(a);
                }
                function Z(n) {
                    return n.ea().equals(c());
                }
                function nn(n) {
                    n.bbz_1.hbx(n.ibx() && n.abz_1.ibx());
                }
                function tn(n, t) {
                    (this.ebz_1 = t), N.call(this, n);
                }
                function en(n, t, e, b) {
                    (b = b === r ? q() : b), (this.zby_1 = n), (this.abz_1 = b);
                    var i,
                        a =
                            ((i = this.abz_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.hby(t);
                                    })(i, n),
                                    u
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.iby(t), u;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.abz_1),
                        o = (function (n) {
                            var t = function () {
                                return n.jby(), u;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.abz_1);
                    this.bbz_1 = E(
                        !1,
                        e,
                        a,
                        s,
                        o,
                        (function (n) {
                            return function () {
                                return n.gby(), u;
                            };
                        })(this.abz_1),
                    );
                    var c;
                    (this.cbz_1 = new tn(t, this)),
                        this.abz_1.jbx(
                            ((c = this),
                            function (n) {
                                return nn(c), u;
                            }),
                        );
                }
                function bn() {
                    this.fbz_1 = j();
                }
                function an(n, t) {
                    (this.gbz_1 = n), (this.hbz_1 = t);
                }
                function rn(n) {
                    this.ibz_1 = n;
                }
                function un(n, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.jbz_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(n.jbz_1), M(n.jbz_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(n.jbz_1);
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
                                switch (n.jbz_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(n.jbz_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(n.jbz_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.jbz_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(n.jbz_1);
                                        break;
                                    case 4:
                                        K(n.jbz_1);
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
                                switch (n.jbz_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(n.jbz_1);
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
                    this.kbz_1 = n;
                }
                function on(n, t, e, b) {
                    (this.lbz_1 = n), (this.mbz_1 = t), (this.nbz_1 = e), (this.obz_1 = b);
                }
                function cn(n, t, e) {
                    this.jbz_1 = n;
                    var b,
                        i,
                        a,
                        r = { _v: t.ea().equals(c()) ? c() : J() },
                        s = { _v: e.ea().equals(c()) ? c() : J() };
                    if ((un(this, G(r._v, s._v)), !r._v.equals(c()) && !s._v.equals(c()))) {
                        var o = new sn(
                                ((b = r),
                                (i = this),
                                (a = s),
                                function (n) {
                                    return (b._v = n), un(i, G(n, a._v)), u;
                                }),
                            ),
                            _ = new sn(
                                (function (n, t, e) {
                                    return function (b) {
                                        return (n._v = b), un(t, G(b, e._v)), u;
                                    };
                                })(s, this, r),
                            );
                        t.obw(o), e.obw(_);
                        var l = this.jbz_1;
                        l.ea().equals(c()) ? (t.xbw(o), e.xbw(_)) : l.obw(new on(t, o, e, _));
                    }
                }
                function _n(n, t) {
                    (this.pbz_1 = n), (this.qbz_1 = t);
                }
                z(U, r, r, r, [y]),
                    v(V, "ComponentContextFactory"),
                    z(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, d]),
                    z(Y, "DefaultComponentContext"),
                    z(tn, r, r, N),
                    z(en, "DefaultChildBackHandler"),
                    z(bn, "ChildInstanceKeeperProvider", bn, r, [B]),
                    z(an, r, r, r, [y]),
                    z(rn, r, r, r, [y]),
                    z(sn, "CallbacksImpl", r, r, [y]),
                    z(on, r, r, r, [y]),
                    z(cn, "MergedLifecycle"),
                    z(_n, r, r, r, [y]),
                    (_(U).rae = function () {
                        throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(W).qby = function (n, t, e, b) {
                        return this.rby_1(n, t, e, b);
                    }),
                    (_(W).a4 = function () {
                        return this.rby_1;
                    }),
                    (_(W).equals = function (n) {
                        var t;
                        null != n && m(n, V) ? (t = !(null == n || !m(n, d)) && k(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (_(W).hashCode = function () {
                        return x(this.a4());
                    }),
                    (_(Y).mby = function () {
                        return this.sby_1;
                    }),
                    (_(Y).nby = function () {
                        return this.tby_1;
                    }),
                    (_(Y).oby = function () {
                        return this.uby_1;
                    }),
                    (_(Y).pby = function () {
                        return this.vby_1;
                    }),
                    (_(Y).lby = function () {
                        return this.wby_1;
                    }),
                    (_(tn).dbx = function (n, t, e) {
                        return nn(this.ebz_1), u;
                    }),
                    (_(tn).hl = function (n, t, e) {
                        var b = null == t || null != t ? t : T();
                        return this.dbx(n, b, null == e || null != e ? e : T());
                    }),
                    (_(en).hbx = function (n) {
                        return this.cbz_1.kl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.ibx();
                                },
                                function (n, t) {
                                    return n.hbx(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(en).ibx = function () {
                        return this.cbz_1.dl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.ibx();
                                },
                                function (n, t) {
                                    return n.hbx(t);
                                },
                            ),
                        );
                    }),
                    (_(en).xby = function () {
                        this.zby_1.dby(this.bbz_1) || this.zby_1.eby(this.bbz_1);
                    }),
                    (_(en).yby = function () {
                        this.zby_1.dby(this.bbz_1) && this.zby_1.fby(this.bbz_1);
                    }),
                    (_(en).dby = function (n) {
                        return this.abz_1.dby(n);
                    }),
                    (_(en).eby = function (n) {
                        this.abz_1.eby(n);
                    }),
                    (_(en).fby = function (n) {
                        this.abz_1.fby(n);
                    }),
                    (_(bn).rae = function () {
                        this.fbz_1.tae();
                    }),
                    (_(an).rae = function () {
                        var n = this.gbz_1.sae(this.hbz_1);
                        null == n || n.rae();
                    }),
                    (_(rn).rae = function () {
                        this.ibz_1.tae();
                    }),
                    (_(sn).kbw = function () {
                        this.kbz_1(O());
                    }),
                    (_(sn).y1b = function () {
                        this.kbz_1(C());
                    }),
                    (_(sn).lbw = function () {
                        this.kbz_1(X());
                    }),
                    (_(sn).mbw = function () {
                        this.kbz_1(C());
                    }),
                    (_(sn).nbw = function () {
                        this.kbz_1(O());
                    }),
                    (_(sn).rae = function () {
                        this.kbz_1(c());
                    }),
                    (_(on).rae = function () {
                        this.lbz_1.xbw(this.mbz_1), this.nbz_1.xbw(this.obz_1);
                    }),
                    (_(cn).obw = function (n) {
                        this.jbz_1.obw(n);
                    }),
                    (_(cn).xbw = function (n) {
                        this.jbz_1.xbw(n);
                    }),
                    (_(cn).ea = function () {
                        return this.jbz_1.ea();
                    }),
                    (_(_n).rae = function () {
                        this.pbz_1.bbw(this.qbz_1);
                    }),
                    (_(U).kbw = l),
                    (_(U).y1b = f),
                    (_(U).lbw = h),
                    (_(U).mbw = $),
                    (_(U).nbw = w),
                    (_(an).kbw = l),
                    (_(an).y1b = f),
                    (_(an).lbw = h),
                    (_(an).mbw = $),
                    (_(an).nbw = w),
                    (_(rn).kbw = l),
                    (_(rn).y1b = f),
                    (_(rn).lbw = h),
                    (_(rn).mbw = $),
                    (_(rn).nbw = w),
                    (_(on).kbw = l),
                    (_(on).y1b = f),
                    (_(on).lbw = h),
                    (_(on).mbw = $),
                    (_(on).nbw = w),
                    (_(_n).kbw = l),
                    (_(_n).y1b = f),
                    (_(_n).lbw = h),
                    (_(_n).mbw = $),
                    (_(_n).nbw = w),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = Y),
                    (n.$_$.b = function (n, t, e) {
                        if (null == (e = e === r ? null : e));
                        else {
                            if (e.ea().equals(c())) {
                                throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.obw(new U());
                        }
                        return n.lby().qby(
                            null == e
                                ? n.mby()
                                : (function (n, t, e) {
                                      return cn.call(e, D(), n, t), e;
                                  })(n.mby(), e, P(_(cn))),
                            (function (n, t, e) {
                                if (((e = e === r ? null : e), !!n.abw(t))) {
                                    throw o(s('The key "' + t + '" is already in use.'));
                                }
                                var b = p(n.ybv(t, Q.f6a()));
                                if (null == e) {
                                    var i = Q.f6a();
                                    n.zbv(
                                        t,
                                        i,
                                        ((u = b),
                                        ((_ = function () {
                                            return u.xbv();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Z(e)) {
                                    var a = Q.f6a();
                                    n.zbv(
                                        t,
                                        a,
                                        (function (n) {
                                            var t = function () {
                                                return n.xbv();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(b),
                                    ),
                                        e.ea().equals(c()) ? n.bbw(t) : e.obw(new _n(n, t));
                                }
                                var u, _;
                                return b;
                            })(n.nby(), t, e),
                            (function (n, t, e) {
                                var b;
                                if (((e = e === r ? null : e), null != e && Z(e))) b = j();
                                else {
                                    var i = n.pae(t),
                                        a = null == i || m(i, B) ? i : T();
                                    null == a && ((a = new bn()), n.qae(t, a));
                                    var u = a.fbz_1;
                                    if (null == e);
                                    else if (e.ea().equals(c())) {
                                        var s = n.sae(t);
                                        null == s || s.rae();
                                    } else e.obw(new an(n, t));
                                    b = u;
                                }
                                return b;
                            })(n.oby(), t, e),
                            (function (n, t, e) {
                                t = t === r ? null : t;
                                var b = (function (n, t, e) {
                                    return (e = e === r ? 0 : e), new en(n, (t = t === r || t), e);
                                })(n, !1, (e = e === r ? 0 : e));
                                if (null == t) b.hbx(!0), b.xby();
                                else if (!Z(t)) {
                                    b.hbx(t.ea().b3(C()) >= 0), b.xby();
                                    var i =
                                            ((c = b),
                                            function () {
                                                return c.hbx(!0), u;
                                            }),
                                        a = (function (n) {
                                            return function () {
                                                return n.hbx(!1), u;
                                            };
                                        })(b);
                                    g(
                                        t,
                                        r,
                                        i,
                                        r,
                                        r,
                                        a,
                                        ((s = b),
                                        ((o = function () {
                                            return s.yby(), u;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var s, o;
                                var c;
                                return b;
                            })(n.pby(), e),
                        );
                    });
            })(n.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.a290944a.js.map
