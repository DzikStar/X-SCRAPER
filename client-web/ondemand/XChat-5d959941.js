(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (t, c, n) => {
            "use strict";
            n.d(c, { _i: () => a });
            var e = n(125959),
                r = n(918962);
            const i = [
                {
                    onResponse: (t) => {
                        if (!t.ok) throw new Error(`[${t.status}] Network error`);
                        return t;
                    },
                },
            ];
            const u = [
                    r.l,
                    (
                        (t = 3e5) =>
                        (c, n, e) => {
                            if (!AbortSignal.timeout) {
                                const r = new AbortController();
                                return setTimeout(() => r.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), t), c(n, { ...e, signal: e?.signal ?? r.signal });
                            }
                            return c(n, { ...e, signal: e?.signal ?? AbortSignal.timeout(t) });
                        }
                    )(),
                    (function (t) {
                        return async (c, n, e) => {
                            const r = {};
                            let i = n,
                                u = e;
                            for (const c of t) c.onRequest && ([i, u] = await c.onRequest(i, u, r));
                            let a = await c(i, u);
                            for (const c of t) c.onResponse && (a = await c.onResponse(a, r));
                            return a;
                        };
                    })(i),
                ],
                a = (0, e.g)(u);
        },
        594839: (t, c, n) => {
            !(function (t, c, n, e, r, i) {
                "use strict";
                var u = c.$_$.g,
                    a = c.$_$.s6,
                    s = c.$_$.ff,
                    o = c.$_$.m2,
                    _ = n.$_$.q,
                    l = c.$_$.bf,
                    f = n.$_$.a,
                    h = n.$_$.e,
                    $ = n.$_$.d,
                    v = n.$_$.c,
                    b = n.$_$.f,
                    d = n.$_$.g,
                    q = c.$_$.yd,
                    w = c.$_$.ce,
                    k = c.$_$.od,
                    m = c.$_$.bd,
                    p = c.$_$.ne,
                    y = c.$_$.xd,
                    x = e.$_$.b,
                    g = r.$_$.d,
                    z = i.$_$.b,
                    C = n.$_$.t,
                    j = n.$_$.o,
                    N = c.$_$.hf,
                    T = c.$_$.yj,
                    E = i.$_$.a,
                    R = (c.$_$.e6, c.$_$.zf),
                    A = c.$_$.vd,
                    B = r.$_$.b,
                    D = n.$_$.h,
                    P = c.$_$.af,
                    F = c.$_$.al,
                    I = n.$_$.i,
                    M = n.$_$.j,
                    S = n.$_$.n,
                    H = n.$_$.m,
                    K = n.$_$.k,
                    L = n.$_$.l,
                    O = n.$_$.p,
                    X = n.$_$.s,
                    G = c.$_$.gc,
                    J = n.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(t) {
                    this.hct_1 = t;
                }
                function Y(t, c, n, e) {
                    (c = c === u ? null : c), (n = n === u ? null : n), (e = e === u ? null : e), (this.ict_1 = t);
                    this.jct_1 = null == c ? x() : c;
                    this.kct_1 =
                        null == n
                            ? (function (t, c) {
                                  c.ea().equals(_()) ? t.kaq() : c.ecr(new it(t));
                                  return t;
                              })(g(), this.ict_1)
                            : n;
                    this.lct_1 = null == e ? z() : e;
                    var r,
                        i =
                            (((r = function (t, c, n, e) {
                                return new Y(t, c, n, e);
                            }).callableName = "<init>"),
                            r);
                    this.mct_1 = new W(i);
                }
                function Z(t) {
                    return t.ea().equals(_());
                }
                function tt(t) {
                    t.rct_1.xcr(t.ycr() && t.qct_1.ycr());
                }
                function ct(t, c) {
                    (this.uct_1 = c), N.call(this, t);
                }
                function nt(t, c, n, e) {
                    (e = e === u ? z() : e), (this.pct_1 = t), (this.qct_1 = e);
                    var r,
                        i =
                            ((r = this.qct_1),
                            function (t) {
                                return (
                                    (function (t, c) {
                                        t.xcs(c);
                                    })(r, t),
                                    a
                                );
                            }),
                        s = (function (t) {
                            var c = function (c) {
                                return t.ycs(c), a;
                            };
                            return (c.callableName = "progressPredictiveBack"), c;
                        })(this.qct_1),
                        o = (function (t) {
                            var c = function () {
                                return t.zcs(), a;
                            };
                            return (c.callableName = "cancelPredictiveBack"), c;
                        })(this.qct_1);
                    this.rct_1 = E(
                        !1,
                        n,
                        i,
                        s,
                        o,
                        (function (t) {
                            return function () {
                                return t.wcs(), a;
                            };
                        })(this.qct_1),
                    );
                    var _;
                    (this.sct_1 = new ct(c, this)),
                        this.qct_1.zcr(
                            ((_ = this),
                            function (t) {
                                return tt(_), a;
                            }),
                        );
                }
                function et() {
                    this.vct_1 = g();
                }
                function rt(t, c) {
                    (this.wct_1 = t), (this.xct_1 = c);
                }
                function it(t) {
                    this.yct_1 = t;
                }
                function ut(t, c) {
                    switch (c.y2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.zct_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(t.zct_1), M(t.zct_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(t.zct_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(t);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (t) {
                                switch (t.zct_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(t.zct_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(t.zct_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.zct_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(t.zct_1);
                                        break;
                                    case 4:
                                        K(t.zct_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        F();
                                }
                            })(t);
                            break;
                        case 4:
                            !(function (t) {
                                switch (t.zct_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(t.zct_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        F();
                                }
                            })(t);
                            break;
                        default:
                            F();
                    }
                }
                function at(t) {
                    this.acu_1 = t;
                }
                function st(t, c, n, e) {
                    (this.bcu_1 = t), (this.ccu_1 = c), (this.dcu_1 = n), (this.ecu_1 = e);
                }
                function ot(t, c, n) {
                    this.zct_1 = t;
                    var e,
                        r,
                        i,
                        u = { _v: c.ea().equals(_()) ? _() : J() },
                        s = { _v: n.ea().equals(_()) ? _() : J() };
                    if ((ut(this, G(u._v, s._v)), !u._v.equals(_()) && !s._v.equals(_()))) {
                        var o = new at(
                                ((e = u),
                                (r = this),
                                (i = s),
                                function (t) {
                                    return (e._v = t), ut(r, G(t, i._v)), a;
                                }),
                            ),
                            l = new at(
                                (function (t, c, n) {
                                    return function (e) {
                                        return (t._v = e), ut(c, G(e, n._v)), a;
                                    };
                                })(s, this, u),
                            );
                        c.ecr(o), n.ecr(l);
                        var f = this.zct_1;
                        f.ea().equals(_()) ? (c.ncr(o), n.ncr(l)) : f.ecr(new st(c, o, n, l));
                    }
                }
                function _t(t, c) {
                    (this.fcu_1 = t), (this.gcu_1 = c);
                }
                q(U, u, u, u, [d]),
                    w(V, "ComponentContextFactory"),
                    q(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", u, u, [V, m]),
                    q(Y, "DefaultComponentContext"),
                    q(ct, u, u, N),
                    q(nt, "DefaultChildBackHandler"),
                    q(et, "ChildInstanceKeeperProvider", et, u, [B]),
                    q(rt, u, u, u, [d]),
                    q(it, u, u, u, [d]),
                    q(at, "CallbacksImpl", u, u, [d]),
                    q(st, u, u, u, [d]),
                    q(ot, "MergedLifecycle"),
                    q(_t, u, u, u, [d]),
                    (l(U).jaq = function () {
                        throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).gct = function (t, c, n, e) {
                        return this.hct_1(t, c, n, e);
                    }),
                    (l(W).a4 = function () {
                        return this.hct_1;
                    }),
                    (l(W).equals = function (t) {
                        var c;
                        null != t && p(t, V) ? (c = !(null == t || !p(t, m)) && k(this.a4(), t.a4())) : (c = !1);
                        return c;
                    }),
                    (l(W).hashCode = function () {
                        return y(this.a4());
                    }),
                    (l(Y).cct = function () {
                        return this.ict_1;
                    }),
                    (l(Y).dct = function () {
                        return this.jct_1;
                    }),
                    (l(Y).ect = function () {
                        return this.kct_1;
                    }),
                    (l(Y).fct = function () {
                        return this.lct_1;
                    }),
                    (l(Y).bct = function () {
                        return this.mct_1;
                    }),
                    (l(ct).tcr = function (t, c, n) {
                        return tt(this.uct_1), a;
                    }),
                    (l(ct).rl = function (t, c, n) {
                        var e = null == c || null != c ? c : T();
                        return this.tcr(t, e, null == n || null != n ? n : T());
                    }),
                    (l(nt).xcr = function (t) {
                        return this.sct_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (t) {
                                    return t.ycr();
                                },
                                function (t, c) {
                                    return t.xcr(c);
                                },
                            ),
                            t,
                        );
                    }),
                    (l(nt).ycr = function () {
                        return this.sct_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                R,
                                function (t) {
                                    return t.ycr();
                                },
                                function (t, c) {
                                    return t.xcr(c);
                                },
                            ),
                        );
                    }),
                    (l(nt).nct = function () {
                        this.pct_1.tcs(this.rct_1) || this.pct_1.ucs(this.rct_1);
                    }),
                    (l(nt).oct = function () {
                        this.pct_1.tcs(this.rct_1) && this.pct_1.vcs(this.rct_1);
                    }),
                    (l(nt).tcs = function (t) {
                        return this.qct_1.tcs(t);
                    }),
                    (l(nt).ucs = function (t) {
                        this.qct_1.ucs(t);
                    }),
                    (l(nt).vcs = function (t) {
                        this.qct_1.vcs(t);
                    }),
                    (l(et).jaq = function () {
                        this.vct_1.kaq();
                    }),
                    (l(rt).jaq = function () {
                        var t = this.wct_1.d5t(this.xct_1);
                        null == t || t.jaq();
                    }),
                    (l(it).jaq = function () {
                        this.yct_1.kaq();
                    }),
                    (l(at).acr = function () {
                        this.acu_1(O());
                    }),
                    (l(at).i1c = function () {
                        this.acu_1(C());
                    }),
                    (l(at).bcr = function () {
                        this.acu_1(X());
                    }),
                    (l(at).ccr = function () {
                        this.acu_1(C());
                    }),
                    (l(at).dcr = function () {
                        this.acu_1(O());
                    }),
                    (l(at).jaq = function () {
                        this.acu_1(_());
                    }),
                    (l(st).jaq = function () {
                        this.bcu_1.ncr(this.ccu_1), this.dcu_1.ncr(this.ecu_1);
                    }),
                    (l(ot).ecr = function (t) {
                        this.zct_1.ecr(t);
                    }),
                    (l(ot).ncr = function (t) {
                        this.zct_1.ncr(t);
                    }),
                    (l(ot).ea = function () {
                        return this.zct_1.ea();
                    }),
                    (l(_t).jaq = function () {
                        this.fcu_1.rcq(this.gcu_1);
                    }),
                    (l(U).acr = f),
                    (l(U).i1c = h),
                    (l(U).bcr = $),
                    (l(U).ccr = v),
                    (l(U).dcr = b),
                    (l(rt).acr = f),
                    (l(rt).i1c = h),
                    (l(rt).bcr = $),
                    (l(rt).ccr = v),
                    (l(rt).dcr = b),
                    (l(it).acr = f),
                    (l(it).i1c = h),
                    (l(it).bcr = $),
                    (l(it).ccr = v),
                    (l(it).dcr = b),
                    (l(st).acr = f),
                    (l(st).i1c = h),
                    (l(st).bcr = $),
                    (l(st).ccr = v),
                    (l(st).dcr = b),
                    (l(_t).acr = f),
                    (l(_t).i1c = h),
                    (l(_t).bcr = $),
                    (l(_t).ccr = v),
                    (l(_t).dcr = b),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Y),
                    (t.$_$.b = function (t, c, n) {
                        if (null == (n = n === u ? null : n));
                        else {
                            if (n.ea().equals(_())) {
                                throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            n.ecr(new U());
                        }
                        return t.bct().gct(
                            null == n
                                ? t.cct()
                                : (function (t, c, n) {
                                      return ot.call(n, D(), t, c), n;
                                  })(t.cct(), n, P(l(ot))),
                            (function (t, c, n) {
                                if (((n = n === u ? null : n), !!t.qcq(c))) {
                                    throw o(s('The key "' + c + '" is already in use.'));
                                }
                                var e = x(t.ocq(c, Q.x6g()));
                                if (null == n) {
                                    var r = Q.x6g();
                                    t.pcq(
                                        c,
                                        r,
                                        ((a = e),
                                        ((l = function () {
                                            return a.ncq();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(n)) {
                                    var i = Q.x6g();
                                    t.pcq(
                                        c,
                                        i,
                                        (function (t) {
                                            var c = function () {
                                                return t.ncq();
                                            };
                                            return (c.callableName = "save"), c;
                                        })(e),
                                    ),
                                        n.ea().equals(_()) ? t.rcq(c) : n.ecr(new _t(t, c));
                                }
                                var a, l;
                                return e;
                            })(t.dct(), c, n),
                            (function (t, c, n) {
                                var e;
                                if (((n = n === u ? null : n), null != n && Z(n))) e = g();
                                else {
                                    var r = t.haq(c),
                                        i = null == r || p(r, B) ? r : T();
                                    null == i && ((i = new et()), t.iaq(c, i));
                                    var a = i.vct_1;
                                    if (null == n);
                                    else if (n.ea().equals(_())) {
                                        var s = t.d5t(c);
                                        null == s || s.jaq();
                                    } else n.ecr(new rt(t, c));
                                    e = a;
                                }
                                return e;
                            })(t.ect(), c, n),
                            (function (t, c, n) {
                                c = c === u ? null : c;
                                var e = (function (t, c, n) {
                                    return (n = n === u ? 0 : n), new nt(t, (c = c === u || c), n);
                                })(t, !1, (n = n === u ? 0 : n));
                                if (null == c) e.xcr(!0), e.nct();
                                else if (!Z(c)) {
                                    e.xcr(c.ea().b3(C()) >= 0), e.nct();
                                    var r =
                                            ((_ = e),
                                            function () {
                                                return _.xcr(!0), a;
                                            }),
                                        i = (function (t) {
                                            return function () {
                                                return t.xcr(!1), a;
                                            };
                                        })(e);
                                    j(
                                        c,
                                        u,
                                        r,
                                        u,
                                        u,
                                        i,
                                        ((s = e),
                                        ((o = function () {
                                            return s.oct(), a;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var s, o;
                                var _;
                                return e;
                            })(t.fct(), n),
                        );
                    });
            })(t.exports, n(519039), n(54279), n(440172), n(538264), n(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.21b292ba.js.map
