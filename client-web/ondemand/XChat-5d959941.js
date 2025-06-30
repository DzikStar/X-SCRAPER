(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (n, t, d) => {
            "use strict";
            d.d(t, { _i: () => r });
            var e = d(125959),
                i = d(918962);
            const a = [
                {
                    onResponse: (n) => {
                        if (!n.ok) throw new Error(`[${n.status}] Network error`);
                        return n;
                    },
                },
            ];
            const c = [
                    i.l,
                    (
                        (n = 3e5) =>
                        (t, d, e) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), n), t(d, { ...e, signal: e?.signal ?? i.signal });
                            }
                            return t(d, { ...e, signal: e?.signal ?? AbortSignal.timeout(n) });
                        }
                    )(),
                    (function (n) {
                        return async (t, d, e) => {
                            const i = {};
                            let a = d,
                                c = e;
                            for (const t of n) t.onRequest && ([a, c] = await t.onRequest(a, c, i));
                            let r = await t(a, c);
                            for (const t of n) t.onResponse && (r = await t.onResponse(r, i));
                            return r;
                        };
                    })(a),
                ],
                r = (0, e.g)(c);
        },
        594839: (n, t, d) => {
            !(function (n, t, d, e, i, a) {
                "use strict";
                var c = t.$_$.g,
                    r = t.$_$.t6,
                    s = t.$_$.if,
                    u = t.$_$.n2,
                    o = d.$_$.q,
                    _ = t.$_$.ef,
                    l = d.$_$.a,
                    f = d.$_$.e,
                    h = d.$_$.d,
                    $ = d.$_$.c,
                    b = d.$_$.f,
                    v = d.$_$.g,
                    m = t.$_$.be,
                    w = t.$_$.fe,
                    p = t.$_$.rd,
                    g = t.$_$.ed,
                    k = t.$_$.qe,
                    q = t.$_$.ae,
                    C = e.$_$.b,
                    y = i.$_$.d,
                    x = a.$_$.b,
                    z = d.$_$.t,
                    j = d.$_$.o,
                    N = t.$_$.kf,
                    T = t.$_$.gk,
                    E = a.$_$.a,
                    R = (t.$_$.f6, t.$_$.dg),
                    A = t.$_$.yd,
                    B = i.$_$.b,
                    D = d.$_$.h,
                    P = t.$_$.df,
                    F = t.$_$.il,
                    I = d.$_$.i,
                    M = d.$_$.j,
                    S = d.$_$.n,
                    H = d.$_$.m,
                    K = d.$_$.k,
                    L = d.$_$.l,
                    O = d.$_$.p,
                    X = d.$_$.s,
                    G = t.$_$.jc,
                    J = d.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(n) {
                    this.wdc_1 = n;
                }
                function Y(n, t, d, e) {
                    (t = t === c ? null : t), (d = d === c ? null : d), (e = e === c ? null : e), (this.xdc_1 = n);
                    this.ydc_1 = null == t ? C() : t;
                    this.zdc_1 =
                        null == d
                            ? (function (n, t) {
                                  t.ga().equals(o()) ? n.pbs() : t.tda(new cn(n));
                                  return n;
                              })(y(), this.xdc_1)
                            : d;
                    this.add_1 = null == e ? x() : e;
                    var i,
                        a =
                            (((i = function (n, t, d, e) {
                                return new Y(n, t, d, e);
                            }).callableName = "<init>"),
                            i);
                    this.bdd_1 = new W(a);
                }
                function Z(n) {
                    return n.ga().equals(o());
                }
                function nn(n) {
                    n.gdd_1.mdb(n.ndb() && n.fdd_1.ndb());
                }
                function tn(n, t) {
                    (this.jdd_1 = t), N.call(this, n);
                }
                function dn(n, t, d, e) {
                    (e = e === c ? x() : e), (this.edd_1 = n), (this.fdd_1 = e);
                    var i,
                        a =
                            ((i = this.fdd_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.mdc(t);
                                    })(i, n),
                                    r
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.ndc(t), r;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.fdd_1),
                        u = (function (n) {
                            var t = function () {
                                return n.odc(), r;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.fdd_1);
                    this.gdd_1 = E(
                        !1,
                        d,
                        a,
                        s,
                        u,
                        (function (n) {
                            return function () {
                                return n.ldc(), r;
                            };
                        })(this.fdd_1),
                    );
                    var o;
                    (this.hdd_1 = new tn(t, this)),
                        this.fdd_1.odb(
                            ((o = this),
                            function (n) {
                                return nn(o), r;
                            }),
                        );
                }
                function en() {
                    this.kdd_1 = y();
                }
                function an(n, t) {
                    (this.ldd_1 = n), (this.mdd_1 = t);
                }
                function cn(n) {
                    this.ndd_1 = n;
                }
                function rn(n, t) {
                    switch (t.a3_1) {
                        case 0:
                            !(function (n) {
                                switch (n.odd_1.ga().a3_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(n.odd_1), M(n.odd_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(n.odd_1);
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
                                switch (n.odd_1.ga().a3_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(n.odd_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(n.odd_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.odd_1.ga().a3_1) {
                                    case 1:
                                    case 2:
                                        H(n.odd_1);
                                        break;
                                    case 4:
                                        K(n.odd_1);
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
                                switch (n.odd_1.ga().a3_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(n.odd_1);
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
                    this.pdd_1 = n;
                }
                function un(n, t, d, e) {
                    (this.qdd_1 = n), (this.rdd_1 = t), (this.sdd_1 = d), (this.tdd_1 = e);
                }
                function on(n, t, d) {
                    this.odd_1 = n;
                    var e,
                        i,
                        a,
                        c = { _v: t.ga().equals(o()) ? o() : J() },
                        s = { _v: d.ga().equals(o()) ? o() : J() };
                    if ((rn(this, G(c._v, s._v)), !c._v.equals(o()) && !s._v.equals(o()))) {
                        var u = new sn(
                                ((e = c),
                                (i = this),
                                (a = s),
                                function (n) {
                                    return (e._v = n), rn(i, G(n, a._v)), r;
                                }),
                            ),
                            _ = new sn(
                                (function (n, t, d) {
                                    return function (e) {
                                        return (n._v = e), rn(t, G(e, d._v)), r;
                                    };
                                })(s, this, c),
                            );
                        t.tda(u), d.tda(_);
                        var l = this.odd_1;
                        l.ga().equals(o()) ? (t.cdb(u), d.cdb(_)) : l.tda(new un(t, u, d, _));
                    }
                }
                function _n(n, t) {
                    (this.udd_1 = n), (this.vdd_1 = t);
                }
                m(U, c, c, c, [v]),
                    w(V, "ComponentContextFactory"),
                    m(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", c, c, [V, g]),
                    m(Y, "DefaultComponentContext"),
                    m(tn, c, c, N),
                    m(dn, "DefaultChildBackHandler"),
                    m(en, "ChildInstanceKeeperProvider", en, c, [B]),
                    m(an, c, c, c, [v]),
                    m(cn, c, c, c, [v]),
                    m(sn, "CallbacksImpl", c, c, [v]),
                    m(un, c, c, c, [v]),
                    m(on, "MergedLifecycle"),
                    m(_n, c, c, c, [v]),
                    (_(U).obs = function () {
                        throw u(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(W).vdc = function (n, t, d, e) {
                        return this.wdc_1(n, t, d, e);
                    }),
                    (_(W).c4 = function () {
                        return this.wdc_1;
                    }),
                    (_(W).equals = function (n) {
                        var t;
                        null != n && k(n, V) ? (t = !(null == n || !k(n, g)) && p(this.c4(), n.c4())) : (t = !1);
                        return t;
                    }),
                    (_(W).hashCode = function () {
                        return q(this.c4());
                    }),
                    (_(Y).rdc = function () {
                        return this.xdc_1;
                    }),
                    (_(Y).sdc = function () {
                        return this.ydc_1;
                    }),
                    (_(Y).tdc = function () {
                        return this.zdc_1;
                    }),
                    (_(Y).udc = function () {
                        return this.add_1;
                    }),
                    (_(Y).qdc = function () {
                        return this.bdd_1;
                    }),
                    (_(tn).idb = function (n, t, d) {
                        return nn(this.jdd_1), r;
                    }),
                    (_(tn).am = function (n, t, d) {
                        var e = null == t || null != t ? t : T();
                        return this.idb(n, e, null == d || null != d ? d : T());
                    }),
                    (_(dn).mdb = function (n) {
                        return this.hdd_1.dm(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.ndb();
                                },
                                function (n, t) {
                                    return n.mdb(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(dn).ndb = function () {
                        return this.hdd_1.wl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (n) {
                                    return n.ndb();
                                },
                                function (n, t) {
                                    return n.mdb(t);
                                },
                            ),
                        );
                    }),
                    (_(dn).cdd = function () {
                        this.edd_1.idc(this.gdd_1) || this.edd_1.jdc(this.gdd_1);
                    }),
                    (_(dn).ddd = function () {
                        this.edd_1.idc(this.gdd_1) && this.edd_1.kdc(this.gdd_1);
                    }),
                    (_(dn).idc = function (n) {
                        return this.fdd_1.idc(n);
                    }),
                    (_(dn).jdc = function (n) {
                        this.fdd_1.jdc(n);
                    }),
                    (_(dn).kdc = function (n) {
                        this.fdd_1.kdc(n);
                    }),
                    (_(en).obs = function () {
                        this.kdd_1.pbs();
                    }),
                    (_(an).obs = function () {
                        var n = this.ldd_1.r66(this.mdd_1);
                        null == n || n.obs();
                    }),
                    (_(cn).obs = function () {
                        this.ndd_1.pbs();
                    }),
                    (_(sn).pda = function () {
                        this.pdd_1(O());
                    }),
                    (_(sn).z1c = function () {
                        this.pdd_1(z());
                    }),
                    (_(sn).qda = function () {
                        this.pdd_1(X());
                    }),
                    (_(sn).rda = function () {
                        this.pdd_1(z());
                    }),
                    (_(sn).sda = function () {
                        this.pdd_1(O());
                    }),
                    (_(sn).obs = function () {
                        this.pdd_1(o());
                    }),
                    (_(un).obs = function () {
                        this.qdd_1.cdb(this.rdd_1), this.sdd_1.cdb(this.tdd_1);
                    }),
                    (_(on).tda = function (n) {
                        this.odd_1.tda(n);
                    }),
                    (_(on).cdb = function (n) {
                        this.odd_1.cdb(n);
                    }),
                    (_(on).ga = function () {
                        return this.odd_1.ga();
                    }),
                    (_(_n).obs = function () {
                        this.udd_1.gda(this.vdd_1);
                    }),
                    (_(U).pda = l),
                    (_(U).z1c = f),
                    (_(U).qda = h),
                    (_(U).rda = $),
                    (_(U).sda = b),
                    (_(an).pda = l),
                    (_(an).z1c = f),
                    (_(an).qda = h),
                    (_(an).rda = $),
                    (_(an).sda = b),
                    (_(cn).pda = l),
                    (_(cn).z1c = f),
                    (_(cn).qda = h),
                    (_(cn).rda = $),
                    (_(cn).sda = b),
                    (_(un).pda = l),
                    (_(un).z1c = f),
                    (_(un).qda = h),
                    (_(un).rda = $),
                    (_(un).sda = b),
                    (_(_n).pda = l),
                    (_(_n).z1c = f),
                    (_(_n).qda = h),
                    (_(_n).rda = $),
                    (_(_n).sda = b),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = Y),
                    (n.$_$.b = function (n, t, d) {
                        if (null == (d = d === c ? null : d));
                        else {
                            if (d.ga().equals(o())) {
                                throw u(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            d.tda(new U());
                        }
                        return n.qdc().vdc(
                            null == d
                                ? n.rdc()
                                : (function (n, t, d) {
                                      return on.call(d, D(), n, t), d;
                                  })(n.rdc(), d, P(_(on))),
                            (function (n, t, d) {
                                if (((d = d === c ? null : d), !!n.fda(t))) {
                                    throw u(s('The key "' + t + '" is already in use.'));
                                }
                                var e = C(n.dda(t, Q.h6u()));
                                if (null == d) {
                                    var i = Q.h6u();
                                    n.eda(
                                        t,
                                        i,
                                        ((r = e),
                                        ((_ = function () {
                                            return r.cda();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Z(d)) {
                                    var a = Q.h6u();
                                    n.eda(
                                        t,
                                        a,
                                        (function (n) {
                                            var t = function () {
                                                return n.cda();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        d.ga().equals(o()) ? n.gda(t) : d.tda(new _n(n, t));
                                }
                                var r, _;
                                return e;
                            })(n.sdc(), t, d),
                            (function (n, t, d) {
                                var e;
                                if (((d = d === c ? null : d), null != d && Z(d))) e = y();
                                else {
                                    var i = n.mbs(t),
                                        a = null == i || k(i, B) ? i : T();
                                    null == a && ((a = new en()), n.nbs(t, a));
                                    var r = a.kdd_1;
                                    if (null == d);
                                    else if (d.ga().equals(o())) {
                                        var s = n.r66(t);
                                        null == s || s.obs();
                                    } else d.tda(new an(n, t));
                                    e = r;
                                }
                                return e;
                            })(n.tdc(), t, d),
                            (function (n, t, d) {
                                t = t === c ? null : t;
                                var e = (function (n, t, d) {
                                    return (d = d === c ? 0 : d), new dn(n, (t = t === c || t), d);
                                })(n, !1, (d = d === c ? 0 : d));
                                if (null == t) e.mdb(!0), e.cdd();
                                else if (!Z(t)) {
                                    e.mdb(t.ga().d3(z()) >= 0), e.cdd();
                                    var i =
                                            ((o = e),
                                            function () {
                                                return o.mdb(!0), r;
                                            }),
                                        a = (function (n) {
                                            return function () {
                                                return n.mdb(!1), r;
                                            };
                                        })(e);
                                    j(
                                        t,
                                        c,
                                        i,
                                        c,
                                        c,
                                        a,
                                        ((s = e),
                                        ((u = function () {
                                            return s.ddd(), r;
                                        }).callableName = "stop"),
                                        u),
                                    );
                                }
                                var s, u;
                                var o;
                                return e;
                            })(n.udc(), d),
                        );
                    });
            })(n.exports, d(519039), d(54279), d(440172), d(538264), d(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.02c3a46a.js.map
