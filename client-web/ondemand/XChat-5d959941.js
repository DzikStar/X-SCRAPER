(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        849170: (n, c, t) => {
            "use strict";
            t.d(c, { _i: () => a });
            var e = t(125959),
                i = t(918962);
            const u = [
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
                        (c, t, e) => {
                            if (!AbortSignal.timeout) {
                                const i = new AbortController();
                                return setTimeout(() => i.abort(new DOMException("The operation was aborted due to timeout", "TimeoutError")), n), c(t, { ...e, signal: e?.signal ?? i.signal });
                            }
                            return c(t, { ...e, signal: e?.signal ?? AbortSignal.timeout(n) });
                        }
                    )(),
                    (function (n) {
                        return async (c, t, e) => {
                            const i = {};
                            let u = t,
                                r = e;
                            for (const c of n) c.onRequest && ([u, r] = await c.onRequest(u, r, i));
                            let a = await c(u, r);
                            for (const c of n) c.onResponse && (a = await c.onResponse(a, i));
                            return a;
                        };
                    })(u),
                ],
                a = (0, e.g)(r);
        },
        594839: (n, c, t) => {
            !(function (n, c, t, e, i, u) {
                "use strict";
                var r = c.$_$.g,
                    a = c.$_$.r6,
                    s = c.$_$.ef,
                    o = c.$_$.l2,
                    _ = t.$_$.q,
                    l = c.$_$.af,
                    f = t.$_$.a,
                    h = t.$_$.e,
                    q = t.$_$.d,
                    $ = t.$_$.c,
                    p = t.$_$.f,
                    v = t.$_$.g,
                    d = c.$_$.xd,
                    w = c.$_$.be,
                    b = c.$_$.nd,
                    k = c.$_$.ad,
                    m = c.$_$.me,
                    g = c.$_$.wd,
                    y = e.$_$.b,
                    x = i.$_$.d,
                    C = u.$_$.b,
                    j = t.$_$.t,
                    N = t.$_$.o,
                    T = c.$_$.gf,
                    E = c.$_$.xj,
                    R = u.$_$.a,
                    z = (c.$_$.d6, c.$_$.yf),
                    A = c.$_$.ud,
                    B = i.$_$.b,
                    D = t.$_$.h,
                    P = c.$_$.ze,
                    F = c.$_$.zk,
                    I = t.$_$.i,
                    M = t.$_$.j,
                    S = t.$_$.n,
                    H = t.$_$.m,
                    K = t.$_$.k,
                    L = t.$_$.l,
                    O = t.$_$.p,
                    X = t.$_$.s,
                    G = c.$_$.fc,
                    J = t.$_$.r,
                    Q = e.$_$.c;
                function U() {}
                function V() {}
                function W(n) {
                    this.xcp_1 = n;
                }
                function Y(n, c, t, e) {
                    (c = c === r ? null : c), (t = t === r ? null : t), (e = e === r ? null : e), (this.ycp_1 = n);
                    this.zcp_1 = null == c ? y() : c;
                    this.acq_1 =
                        null == t
                            ? (function (n, c) {
                                  c.ea().equals(_()) ? n.xan() : c.ucn(new rn(n));
                                  return n;
                              })(x(), this.ycp_1)
                            : t;
                    this.bcq_1 = null == e ? C() : e;
                    var i,
                        u =
                            (((i = function (n, c, t, e) {
                                return new Y(n, c, t, e);
                            }).callableName = "<init>"),
                            i);
                    this.ccq_1 = new W(u);
                }
                function Z(n) {
                    return n.ea().equals(_());
                }
                function nn(n) {
                    n.hcq_1.nco(n.oco() && n.gcq_1.oco());
                }
                function cn(n, c) {
                    (this.kcq_1 = c), T.call(this, n);
                }
                function tn(n, c, t, e) {
                    (e = e === r ? C() : e), (this.fcq_1 = n), (this.gcq_1 = e);
                    var i,
                        u =
                            ((i = this.gcq_1),
                            function (n) {
                                return (
                                    (function (n, c) {
                                        n.ncp(c);
                                    })(i, n),
                                    a
                                );
                            }),
                        s = (function (n) {
                            var c = function (c) {
                                return n.ocp(c), a;
                            };
                            return (c.callableName = "progressPredictiveBack"), c;
                        })(this.gcq_1),
                        o = (function (n) {
                            var c = function () {
                                return n.pcp(), a;
                            };
                            return (c.callableName = "cancelPredictiveBack"), c;
                        })(this.gcq_1);
                    this.hcq_1 = R(
                        !1,
                        t,
                        u,
                        s,
                        o,
                        (function (n) {
                            return function () {
                                return n.mcp(), a;
                            };
                        })(this.gcq_1),
                    );
                    var _;
                    (this.icq_1 = new cn(c, this)),
                        this.gcq_1.pco(
                            ((_ = this),
                            function (n) {
                                return nn(_), a;
                            }),
                        );
                }
                function en() {
                    this.lcq_1 = x();
                }
                function un(n, c) {
                    (this.mcq_1 = n), (this.ncq_1 = c);
                }
                function rn(n) {
                    this.ocq_1 = n;
                }
                function an(n, c) {
                    switch (c.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.pcq_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        I(n.pcq_1), M(n.pcq_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        M(n.pcq_1);
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
                                switch (n.pcq_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        I(n.pcq_1);
                                        break;
                                    case 3:
                                    case 4:
                                        S(n.pcq_1);
                                        break;
                                    default:
                                        F();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.pcq_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        H(n.pcq_1);
                                        break;
                                    case 4:
                                        K(n.pcq_1);
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
                                switch (n.pcq_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        L(n.pcq_1);
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
                    this.qcq_1 = n;
                }
                function on(n, c, t, e) {
                    (this.rcq_1 = n), (this.scq_1 = c), (this.tcq_1 = t), (this.ucq_1 = e);
                }
                function _n(n, c, t) {
                    this.pcq_1 = n;
                    var e,
                        i,
                        u,
                        r = { _v: c.ea().equals(_()) ? _() : J() },
                        s = { _v: t.ea().equals(_()) ? _() : J() };
                    if ((an(this, G(r._v, s._v)), !r._v.equals(_()) && !s._v.equals(_()))) {
                        var o = new sn(
                                ((e = r),
                                (i = this),
                                (u = s),
                                function (n) {
                                    return (e._v = n), an(i, G(n, u._v)), a;
                                }),
                            ),
                            l = new sn(
                                (function (n, c, t) {
                                    return function (e) {
                                        return (n._v = e), an(c, G(e, t._v)), a;
                                    };
                                })(s, this, r),
                            );
                        c.ucn(o), t.ucn(l);
                        var f = this.pcq_1;
                        f.ea().equals(_()) ? (c.dco(o), t.dco(l)) : f.ucn(new on(c, o, t, l));
                    }
                }
                function ln(n, c) {
                    (this.vcq_1 = n), (this.wcq_1 = c);
                }
                d(U, r, r, r, [v]),
                    w(V, "ComponentContextFactory"),
                    d(W, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [V, k]),
                    d(Y, "DefaultComponentContext"),
                    d(cn, r, r, T),
                    d(tn, "DefaultChildBackHandler"),
                    d(en, "ChildInstanceKeeperProvider", en, r, [B]),
                    d(un, r, r, r, [v]),
                    d(rn, r, r, r, [v]),
                    d(sn, "CallbacksImpl", r, r, [v]),
                    d(on, r, r, r, [v]),
                    d(_n, "MergedLifecycle"),
                    d(ln, r, r, r, [v]),
                    (l(U).wan = function () {
                        throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(W).wcp = function (n, c, t, e) {
                        return this.xcp_1(n, c, t, e);
                    }),
                    (l(W).a4 = function () {
                        return this.xcp_1;
                    }),
                    (l(W).equals = function (n) {
                        var c;
                        null != n && m(n, V) ? (c = !(null == n || !m(n, k)) && b(this.a4(), n.a4())) : (c = !1);
                        return c;
                    }),
                    (l(W).hashCode = function () {
                        return g(this.a4());
                    }),
                    (l(Y).scp = function () {
                        return this.ycp_1;
                    }),
                    (l(Y).tcp = function () {
                        return this.zcp_1;
                    }),
                    (l(Y).ucp = function () {
                        return this.acq_1;
                    }),
                    (l(Y).vcp = function () {
                        return this.bcq_1;
                    }),
                    (l(Y).rcp = function () {
                        return this.ccq_1;
                    }),
                    (l(cn).jco = function (n, c, t) {
                        return nn(this.kcq_1), a;
                    }),
                    (l(cn).rl = function (n, c, t) {
                        var e = null == c || null != c ? c : E();
                        return this.jco(n, e, null == t || null != t ? t : E());
                    }),
                    (l(tn).nco = function (n) {
                        return this.icq_1.ul(
                            this,
                            A(
                                "isEnabled",
                                1,
                                z,
                                function (n) {
                                    return n.oco();
                                },
                                function (n, c) {
                                    return n.nco(c);
                                },
                            ),
                            n,
                        );
                    }),
                    (l(tn).oco = function () {
                        return this.icq_1.nl(
                            this,
                            A(
                                "isEnabled",
                                1,
                                z,
                                function (n) {
                                    return n.oco();
                                },
                                function (n, c) {
                                    return n.nco(c);
                                },
                            ),
                        );
                    }),
                    (l(tn).dcq = function () {
                        this.fcq_1.jcp(this.hcq_1) || this.fcq_1.kcp(this.hcq_1);
                    }),
                    (l(tn).ecq = function () {
                        this.fcq_1.jcp(this.hcq_1) && this.fcq_1.lcp(this.hcq_1);
                    }),
                    (l(tn).jcp = function (n) {
                        return this.gcq_1.jcp(n);
                    }),
                    (l(tn).kcp = function (n) {
                        this.gcq_1.kcp(n);
                    }),
                    (l(tn).lcp = function (n) {
                        this.gcq_1.lcp(n);
                    }),
                    (l(en).wan = function () {
                        this.lcq_1.xan();
                    }),
                    (l(un).wan = function () {
                        var n = this.mcq_1.d5t(this.ncq_1);
                        null == n || n.wan();
                    }),
                    (l(rn).wan = function () {
                        this.ocq_1.xan();
                    }),
                    (l(sn).qcn = function () {
                        this.qcq_1(O());
                    }),
                    (l(sn).i1c = function () {
                        this.qcq_1(j());
                    }),
                    (l(sn).rcn = function () {
                        this.qcq_1(X());
                    }),
                    (l(sn).scn = function () {
                        this.qcq_1(j());
                    }),
                    (l(sn).tcn = function () {
                        this.qcq_1(O());
                    }),
                    (l(sn).wan = function () {
                        this.qcq_1(_());
                    }),
                    (l(on).wan = function () {
                        this.rcq_1.dco(this.scq_1), this.tcq_1.dco(this.ucq_1);
                    }),
                    (l(_n).ucn = function (n) {
                        this.pcq_1.ucn(n);
                    }),
                    (l(_n).dco = function (n) {
                        this.pcq_1.dco(n);
                    }),
                    (l(_n).ea = function () {
                        return this.pcq_1.ea();
                    }),
                    (l(ln).wan = function () {
                        this.vcq_1.hcn(this.wcq_1);
                    }),
                    (l(U).qcn = f),
                    (l(U).i1c = h),
                    (l(U).rcn = q),
                    (l(U).scn = $),
                    (l(U).tcn = p),
                    (l(un).qcn = f),
                    (l(un).i1c = h),
                    (l(un).rcn = q),
                    (l(un).scn = $),
                    (l(un).tcn = p),
                    (l(rn).qcn = f),
                    (l(rn).i1c = h),
                    (l(rn).rcn = q),
                    (l(rn).scn = $),
                    (l(rn).tcn = p),
                    (l(on).qcn = f),
                    (l(on).i1c = h),
                    (l(on).rcn = q),
                    (l(on).scn = $),
                    (l(on).tcn = p),
                    (l(ln).qcn = f),
                    (l(ln).i1c = h),
                    (l(ln).rcn = q),
                    (l(ln).scn = $),
                    (l(ln).tcn = p),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = Y),
                    (n.$_$.b = function (n, c, t) {
                        if (null == (t = t === r ? null : t));
                        else {
                            if (t.ea().equals(_())) {
                                throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.ucn(new U());
                        }
                        return n.rcp().wcp(
                            null == t
                                ? n.scp()
                                : (function (n, c, t) {
                                      return _n.call(t, D(), n, c), t;
                                  })(n.scp(), t, P(l(_n))),
                            (function (n, c, t) {
                                if (((t = t === r ? null : t), !!n.gcn(c))) {
                                    throw o(s('The key "' + c + '" is already in use.'));
                                }
                                var e = y(n.ecn(c, Q.x6g()));
                                if (null == t) {
                                    var i = Q.x6g();
                                    n.fcn(
                                        c,
                                        i,
                                        ((a = e),
                                        ((l = function () {
                                            return a.dcn();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Z(t)) {
                                    var u = Q.x6g();
                                    n.fcn(
                                        c,
                                        u,
                                        (function (n) {
                                            var c = function () {
                                                return n.dcn();
                                            };
                                            return (c.callableName = "save"), c;
                                        })(e),
                                    ),
                                        t.ea().equals(_()) ? n.hcn(c) : t.ucn(new ln(n, c));
                                }
                                var a, l;
                                return e;
                            })(n.tcp(), c, t),
                            (function (n, c, t) {
                                var e;
                                if (((t = t === r ? null : t), null != t && Z(t))) e = x();
                                else {
                                    var i = n.uan(c),
                                        u = null == i || m(i, B) ? i : E();
                                    null == u && ((u = new en()), n.van(c, u));
                                    var a = u.lcq_1;
                                    if (null == t);
                                    else if (t.ea().equals(_())) {
                                        var s = n.d5t(c);
                                        null == s || s.wan();
                                    } else t.ucn(new un(n, c));
                                    e = a;
                                }
                                return e;
                            })(n.ucp(), c, t),
                            (function (n, c, t) {
                                c = c === r ? null : c;
                                var e = (function (n, c, t) {
                                    return (t = t === r ? 0 : t), new tn(n, (c = c === r || c), t);
                                })(n, !1, (t = t === r ? 0 : t));
                                if (null == c) e.nco(!0), e.dcq();
                                else if (!Z(c)) {
                                    e.nco(c.ea().b3(j()) >= 0), e.dcq();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.nco(!0), a;
                                            }),
                                        u = (function (n) {
                                            return function () {
                                                return n.nco(!1), a;
                                            };
                                        })(e);
                                    N(
                                        c,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((s = e),
                                        ((o = function () {
                                            return s.ecq(), a;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var s, o;
                                var _;
                                return e;
                            })(n.vcp(), t),
                        );
                    });
            })(n.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.50680faa.js.map
