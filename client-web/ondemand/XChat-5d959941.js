(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (t, c, n) => {
            "use strict";
            n.d(c, { _i: () => r });
            var e = n(125959),
                i = n(918962);
            const u = [
                {
                    onResponse: (t) => {
                        if (!t.ok) throw new Error(`[${t.status}] Network error`);
                        return t;
                    },
                },
            ];
            const s = [
                    i.l,
                    (
                        (t = 3e5) =>
                        (c, n, e) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), t), c(n, { ...e, signal: e?.signal ?? i.signal });
                            }
                            return c(n, { ...e, signal: e?.signal ?? AbortSignal.timeout(t) });
                        }
                    )(),
                    (function (t) {
                        return async (c, n, e) => {
                            const i = {};
                            let u = n,
                                s = e;
                            for (const c of t) c.onRequest && ([u, s] = await c.onRequest(u, s, i));
                            let r = await c(u, s);
                            for (const c of t) c.onResponse && (r = await c.onResponse(r, i));
                            return r;
                        };
                    })(u),
                ],
                r = (0, e.g)(s);
        },
        594839: (t, c, n) => {
            !(function (t, c, n, e, i, u) {
                "use strict";
                var s = c.$_$.g,
                    r = c.$_$.s6,
                    a = c.$_$.ff,
                    o = c.$_$.m2,
                    _ = n.$_$.q,
                    l = c.$_$.bf,
                    f = n.$_$.a,
                    w = n.$_$.e,
                    h = n.$_$.d,
                    $ = n.$_$.c,
                    v = n.$_$.f,
                    b = n.$_$.g,
                    d = c.$_$.yd,
                    k = c.$_$.ce,
                    m = c.$_$.od,
                    p = c.$_$.bd,
                    g = c.$_$.ne,
                    q = c.$_$.xd,
                    y = e.$_$.b,
                    C = i.$_$.d,
                    j = u.$_$.b,
                    x = n.$_$.t,
                    N = n.$_$.o,
                    T = c.$_$.hf,
                    E = c.$_$.yj,
                    R = u.$_$.a,
                    z = (c.$_$.e6, c.$_$.zf),
                    A = c.$_$.vd,
                    B = i.$_$.b,
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
                    this.wcv_1 = t;
                }
                function Y(t, c, n, e) {
                    (c = c === s ? null : c), (n = n === s ? null : n), (e = e === s ? null : e), (this.xcv_1 = t);
                    this.ycv_1 = null == c ? y() : c;
                    this.zcv_1 =
                        null == n
                            ? (function (t, c) {
                                  c.ea().equals(_()) ? t.kas() : c.tct(new ut(t));
                                  return t;
                              })(C(), this.xcv_1)
                            : n;
                    this.acw_1 = null == e ? j() : e;
                    var i,
                        u =
                            (((i = function (t, c, n, e) {
                                return new Y(t, c, n, e);
                            }).callableName = "<init>"),
                            i);
                    this.bcw_1 = new W(u);
                }
                function Z(t) {
                    return t.ea().equals(_());
                }
                function tt(t) {
                    t.gcw_1.mcu(t.ncu() && t.fcw_1.ncu());
                }
                function ct(t, c) {
                    (this.jcw_1 = c), T.call(this, t);
                }
                function nt(t, c, n, e) {
                    (e = e === s ? j() : e), (this.ecw_1 = t), (this.fcw_1 = e);
                    var i,
                        u =
                            ((i = this.fcw_1),
                            function (t) {
                                return (
                                    (function (t, c) {
                                        t.mcv(c);
                                    })(i, t),
                                    r
                                );
                            }),
                        a = (function (t) {
                            var c = function (c) {
                                return t.ncv(c), r;
                            };
                            return (c.callableName = "progressPredictiveBack"), c;
                        })(this.fcw_1),
                        o = (function (t) {
                            var c = function () {
                                return t.ocv(), r;
                            };
                            return (c.callableName = "cancelPredictiveBack"), c;
                        })(this.fcw_1);
                    this.gcw_1 = R(
                        !1,
                        n,
                        u,
                        a,
                        o,
                        (function (t) {
                            return function () {
                                return t.lcv(), r;
                            };
                        })(this.fcw_1),
                    );
                    var _;
                    (this.hcw_1 = new ct(c, this)),
                        this.fcw_1.ocu(
                            ((_ = this),
                            function (t) {
                                return tt(_), r;
                            }),
                        );
                }
                function et() {
                    this.kcw_1 = C();
                }
                function it(t, c) {
                    (this.lcw_1 = t), (this.mcw_1 = c);
                }
                function ut(t) {
                    this.ncw_1 = t;
                }
                function st(t, c) {
                    switch (c.y2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.ocw_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(t.ocw_1), M(t.ocw_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(t.ocw_1);
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
                                switch (t.ocw_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(t.ocw_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(t.ocw_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.ocw_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(t.ocw_1);
                                        break;
                                    case 4:
                                        K(t.ocw_1);
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
                                switch (t.ocw_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(t.ocw_1);
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
                function rt(t) {
                    this.pcw_1 = t;
                }
                function at(t, c, n, e) {
                    (this.qcw_1 = t), (this.rcw_1 = c), (this.scw_1 = n), (this.tcw_1 = e);
                }
                function ot(t, c, n) {
                    this.ocw_1 = t;
                    var e,
                        i,
                        u,
                        s = { _v: c.ea().equals(_()) ? _() : J() },
                        a = { _v: n.ea().equals(_()) ? _() : J() };
                    if ((st(this, G(s._v, a._v)), !s._v.equals(_()) && !a._v.equals(_()))) {
                        var o = new rt(
                                ((e = s),
                                (i = this),
                                (u = a),
                                function (t) {
                                    return (e._v = t), st(i, G(t, u._v)), r;
                                }),
                            ),
                            l = new rt(
                                (function (t, c, n) {
                                    return function (e) {
                                        return (t._v = e), st(c, G(e, n._v)), r;
                                    };
                                })(a, this, s),
                            );
                        c.tct(o), n.tct(l);
                        var f = this.ocw_1;
                        f.ea().equals(_()) ? (c.ccu(o), n.ccu(l)) : f.tct(new at(c, o, n, l));
                    }
                }
                function _t(t, c) {
                    (this.ucw_1 = t), (this.vcw_1 = c);
                }
                d(U, s, s, s, [b]),
                    k(V, "ComponentContextFactory"),
                    d(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", s, s, [V, p]),
                    d(Y, "DefaultComponentContext"),
                    d(ct, s, s, T),
                    d(nt, "DefaultChildBackHandler"),
                    d(et, "ChildInstanceKeeperProvider", et, s, [B]),
                    d(it, s, s, s, [b]),
                    d(ut, s, s, s, [b]),
                    d(rt, "CallbacksImpl", s, s, [b]),
                    d(at, s, s, s, [b]),
                    d(ot, "MergedLifecycle"),
                    d(_t, s, s, s, [b]),
                    (l(U).jas = function () {
                        throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).vcv = function (t, c, n, e) {
                        return this.wcv_1(t, c, n, e);
                    }),
                    (l(W).a4 = function () {
                        return this.wcv_1;
                    }),
                    (l(W).equals = function (t) {
                        var c;
                        null != t && g(t, V) ? (c = !(null == t || !g(t, p)) && m(this.a4(), t.a4())) : (c = !1);
                        return c;
                    }),
                    (l(W).hashCode = function () {
                        return q(this.a4());
                    }),
                    (l(Y).rcv = function () {
                        return this.xcv_1;
                    }),
                    (l(Y).scv = function () {
                        return this.ycv_1;
                    }),
                    (l(Y).tcv = function () {
                        return this.zcv_1;
                    }),
                    (l(Y).ucv = function () {
                        return this.acw_1;
                    }),
                    (l(Y).qcv = function () {
                        return this.bcw_1;
                    }),
                    (l(ct).icu = function (t, c, n) {
                        return tt(this.jcw_1), r;
                    }),
                    (l(ct).rl = function (t, c, n) {
                        var e = null == c || null != c ? c : E();
                        return this.icu(t, e, null == n || null != n ? n : E());
                    }),
                    (l(nt).mcu = function (t) {
                        return this.hcw_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                z,
                                function (t) {
                                    return t.ncu();
                                },
                                function (t, c) {
                                    return t.mcu(c);
                                },
                            ),
                            t,
                        );
                    }),
                    (l(nt).ncu = function () {
                        return this.hcw_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                z,
                                function (t) {
                                    return t.ncu();
                                },
                                function (t, c) {
                                    return t.mcu(c);
                                },
                            ),
                        );
                    }),
                    (l(nt).ccw = function () {
                        this.ecw_1.icv(this.gcw_1) || this.ecw_1.jcv(this.gcw_1);
                    }),
                    (l(nt).dcw = function () {
                        this.ecw_1.icv(this.gcw_1) && this.ecw_1.kcv(this.gcw_1);
                    }),
                    (l(nt).icv = function (t) {
                        return this.fcw_1.icv(t);
                    }),
                    (l(nt).jcv = function (t) {
                        this.fcw_1.jcv(t);
                    }),
                    (l(nt).kcv = function (t) {
                        this.fcw_1.kcv(t);
                    }),
                    (l(et).jas = function () {
                        this.kcw_1.kas();
                    }),
                    (l(it).jas = function () {
                        var t = this.lcw_1.d5t(this.mcw_1);
                        null == t || t.jas();
                    }),
                    (l(ut).jas = function () {
                        this.ncw_1.kas();
                    }),
                    (l(rt).pct = function () {
                        this.pcw_1(O());
                    }),
                    (l(rt).i1c = function () {
                        this.pcw_1(x());
                    }),
                    (l(rt).qct = function () {
                        this.pcw_1(X());
                    }),
                    (l(rt).rct = function () {
                        this.pcw_1(x());
                    }),
                    (l(rt).sct = function () {
                        this.pcw_1(O());
                    }),
                    (l(rt).jas = function () {
                        this.pcw_1(_());
                    }),
                    (l(at).jas = function () {
                        this.qcw_1.ccu(this.rcw_1), this.scw_1.ccu(this.tcw_1);
                    }),
                    (l(ot).tct = function (t) {
                        this.ocw_1.tct(t);
                    }),
                    (l(ot).ccu = function (t) {
                        this.ocw_1.ccu(t);
                    }),
                    (l(ot).ea = function () {
                        return this.ocw_1.ea();
                    }),
                    (l(_t).jas = function () {
                        this.ucw_1.gct(this.vcw_1);
                    }),
                    (l(U).pct = f),
                    (l(U).i1c = w),
                    (l(U).qct = h),
                    (l(U).rct = $),
                    (l(U).sct = v),
                    (l(it).pct = f),
                    (l(it).i1c = w),
                    (l(it).qct = h),
                    (l(it).rct = $),
                    (l(it).sct = v),
                    (l(ut).pct = f),
                    (l(ut).i1c = w),
                    (l(ut).qct = h),
                    (l(ut).rct = $),
                    (l(ut).sct = v),
                    (l(at).pct = f),
                    (l(at).i1c = w),
                    (l(at).qct = h),
                    (l(at).rct = $),
                    (l(at).sct = v),
                    (l(_t).pct = f),
                    (l(_t).i1c = w),
                    (l(_t).qct = h),
                    (l(_t).rct = $),
                    (l(_t).sct = v),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = Y),
                    (t.$_$.b = function (t, c, n) {
                        if (null == (n = n === s ? null : n));
                        else {
                            if (n.ea().equals(_())) {
                                throw o(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            n.tct(new U());
                        }
                        return t.qcv().vcv(
                            null == n
                                ? t.rcv()
                                : (function (t, c, n) {
                                      return ot.call(n, D(), t, c), n;
                                  })(t.rcv(), n, P(l(ot))),
                            (function (t, c, n) {
                                if (((n = n === s ? null : n), !!t.fct(c))) {
                                    throw o(a('The key "' + c + '" is already in use.'));
                                }
                                var e = y(t.dct(c, Q.x6g()));
                                if (null == n) {
                                    var i = Q.x6g();
                                    t.ect(
                                        c,
                                        i,
                                        ((r = e),
                                        ((l = function () {
                                            return r.cct();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(n)) {
                                    var u = Q.x6g();
                                    t.ect(
                                        c,
                                        u,
                                        (function (t) {
                                            var c = function () {
                                                return t.cct();
                                            };
                                            return (c.callableName = "save"), c;
                                        })(e),
                                    ),
                                        n.ea().equals(_()) ? t.gct(c) : n.tct(new _t(t, c));
                                }
                                var r, l;
                                return e;
                            })(t.scv(), c, n),
                            (function (t, c, n) {
                                var e;
                                if (((n = n === s ? null : n), null != n && Z(n))) e = C();
                                else {
                                    var i = t.has(c),
                                        u = null == i || g(i, B) ? i : E();
                                    null == u && ((u = new et()), t.ias(c, u));
                                    var r = u.kcw_1;
                                    if (null == n);
                                    else if (n.ea().equals(_())) {
                                        var a = t.d5t(c);
                                        null == a || a.jas();
                                    } else n.tct(new it(t, c));
                                    e = r;
                                }
                                return e;
                            })(t.tcv(), c, n),
                            (function (t, c, n) {
                                c = c === s ? null : c;
                                var e = (function (t, c, n) {
                                    return (n = n === s ? 0 : n), new nt(t, (c = c === s || c), n);
                                })(t, !1, (n = n === s ? 0 : n));
                                if (null == c) e.mcu(!0), e.ccw();
                                else if (!Z(c)) {
                                    e.mcu(c.ea().b3(x()) >= 0), e.ccw();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.mcu(!0), r;
                                            }),
                                        u = (function (t) {
                                            return function () {
                                                return t.mcu(!1), r;
                                            };
                                        })(e);
                                    N(
                                        c,
                                        s,
                                        i,
                                        s,
                                        s,
                                        u,
                                        ((a = e),
                                        ((o = function () {
                                            return a.dcw(), r;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var a, o;
                                var _;
                                return e;
                            })(t.ucv(), n),
                        );
                    });
            })(t.exports, n(519039), n(54279), n(440172), n(538264), n(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.21a6576a.js.map
