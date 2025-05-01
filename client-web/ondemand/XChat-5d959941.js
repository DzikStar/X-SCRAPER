(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (n, t, a) => {
            "use strict";
            a.d(t, { _: () => c });
            var e = a(381415);
            const i = "https://api.x.com",
                u = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function c(n, t = {}) {
                const a = n instanceof URL ? n : new URL(n, i),
                    { credentials: c = "include", headers: o, signal: s = AbortSignal.timeout(u) } = t,
                    _ = new Headers(o);
                if (
                    (function (n) {
                        return ("string" == typeof n && (n.startsWith("https://api.x.com") || n.startsWith("https://x.com/i/api"))) || (n instanceof URL && ("api.x.com" === n.host || n.href.startsWith("https://x.com/i/api")));
                    })(n)
                ) {
                    _.set("Authorization", `Bearer ${r}`);
                    const n = _.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (n) {
                        const t = (0, e.Qc)(n);
                        t.auth_token && _.set("x-twitter-auth-type", "OAuth2Session"), t.ct0 && _.set("x-csrf-token", t.ct0);
                    }
                }
                const f = await fetch(a, { ...t, credentials: c, headers: _, signal: s });
                if (!f.ok) throw new Error(`[${f.status}] Network response was not ok`);
                return f;
            }
        },
        381415: (n, t) => {
            "use strict";
            t.Qc = function (n, t) {
                const a = new c(),
                    e = n.length;
                if (e < 2) return a;
                const i = t?.decode || _;
                let u = 0;
                do {
                    const t = n.indexOf("=", u);
                    if (-1 === t) break;
                    const r = n.indexOf(";", u),
                        c = -1 === r ? e : r;
                    if (t > c) {
                        u = n.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const _ = o(n, u, t),
                        f = s(n, t, _),
                        l = n.slice(_, f);
                    if (void 0 === a[l]) {
                        let e = o(n, t + 1, c),
                            u = s(n, c, e);
                        const r = i(n.slice(e, u));
                        a[l] = r;
                    }
                    u = c + 1;
                } while (u < e);
                return a;
            };
            const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                u = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                c = (() => {
                    const n = function () {};
                    return (n.prototype = Object.create(null)), n;
                })();
            function o(n, t, a) {
                do {
                    const a = n.charCodeAt(t);
                    if (32 !== a && 9 !== a) return t;
                } while (++t < a);
                return a;
            }
            function s(n, t, a) {
                for (; t > a; ) {
                    const a = n.charCodeAt(--t);
                    if (32 !== a && 9 !== a) return t + 1;
                }
                return a;
            }
            function _(n) {
                if (-1 === n.indexOf("%")) return n;
                try {
                    return decodeURIComponent(n);
                } catch (t) {
                    return n;
                }
            }
        },
        594839: (n, t, a) => {
            !(function (n, t, a, e, i, u) {
                "use strict";
                var r = t.$_$.g,
                    c = t.$_$.l6,
                    o = t.$_$.oe,
                    s = t.$_$.l2,
                    _ = a.$_$.q,
                    f = t.$_$.ke,
                    l = a.$_$.a,
                    h = a.$_$.e,
                    p = a.$_$.d,
                    $ = a.$_$.c,
                    d = a.$_$.f,
                    q = a.$_$.g,
                    b = t.$_$.hd,
                    v = t.$_$.ld,
                    y = t.$_$.yc,
                    m = t.$_$.lc,
                    k = t.$_$.wd,
                    w = t.$_$.gd,
                    A = e.$_$.b,
                    z = i.$_$.c,
                    x = u.$_$.b,
                    g = a.$_$.t,
                    C = a.$_$.o,
                    j = t.$_$.qe,
                    N = t.$_$.zi,
                    E = u.$_$.a,
                    I = (t.$_$.y5, t.$_$.hf),
                    O = t.$_$.ed,
                    L = i.$_$.a,
                    R = a.$_$.h,
                    T = t.$_$.je,
                    U = t.$_$.ak,
                    W = a.$_$.i,
                    B = a.$_$.j,
                    D = a.$_$.n,
                    F = a.$_$.m,
                    H = a.$_$.k,
                    P = a.$_$.l,
                    S = a.$_$.p,
                    Q = a.$_$.s,
                    Z = t.$_$.qb,
                    G = a.$_$.r,
                    J = e.$_$.c;
                function K() {}
                function M() {}
                function X(n) {
                    this.lap_1 = n;
                }
                function V(n, t, a, e) {
                    (t = t === r ? null : t), (a = a === r ? null : a), (e = e === r ? null : e), (this.map_1 = n);
                    this.nap_1 = null == t ? A() : t;
                    this.oap_1 =
                        null == a
                            ? (function (n, t) {
                                  t.y9().equals(_()) ? n.b9z() : t.ian(new rn(n));
                                  return n;
                              })(z(), this.map_1)
                            : a;
                    this.pap_1 = null == e ? x() : e;
                    var i,
                        u =
                            (((i = function (n, t, a, e) {
                                return new V(n, t, a, e);
                            }).callableName = "<init>"),
                            i);
                    this.qap_1 = new X(u);
                }
                function Y(n) {
                    return n.y9().equals(_());
                }
                function nn(n) {
                    n.vap_1.bao(n.cao() && n.uap_1.cao());
                }
                function tn(n, t) {
                    (this.yap_1 = t), j.call(this, n);
                }
                function an(n, t, a, e) {
                    (e = e === r ? x() : e), (this.tap_1 = n), (this.uap_1 = e);
                    var i,
                        u =
                            ((i = this.uap_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.bap(t);
                                    })(i, n),
                                    c
                                );
                            }),
                        o = (function (n) {
                            var t = function (t) {
                                return n.cap(t), c;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.uap_1),
                        s = (function (n) {
                            var t = function () {
                                return n.dap(), c;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.uap_1);
                    this.vap_1 = E(
                        !1,
                        a,
                        u,
                        o,
                        s,
                        (function (n) {
                            return function () {
                                return n.aap(), c;
                            };
                        })(this.uap_1),
                    );
                    var _;
                    (this.wap_1 = new tn(t, this)),
                        this.uap_1.dao(
                            ((_ = this),
                            function (n) {
                                return nn(_), c;
                            }),
                        );
                }
                function en() {
                    this.zap_1 = z();
                }
                function un(n, t) {
                    (this.aaq_1 = n), (this.baq_1 = t);
                }
                function rn(n) {
                    this.caq_1 = n;
                }
                function cn(n, t) {
                    switch (t.x2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.daq_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(n.daq_1), B(n.daq_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(n.daq_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (n) {
                                switch (n.daq_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(n.daq_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(n.daq_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.daq_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(n.daq_1);
                                        break;
                                    case 4:
                                        H(n.daq_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 4:
                            !(function (n) {
                                switch (n.daq_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(n.daq_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        default:
                            U();
                    }
                }
                function on(n) {
                    this.eaq_1 = n;
                }
                function sn(n, t, a, e) {
                    (this.faq_1 = n), (this.gaq_1 = t), (this.haq_1 = a), (this.iaq_1 = e);
                }
                function _n(n, t, a) {
                    this.daq_1 = n;
                    var e,
                        i,
                        u,
                        r = { _v: t.y9().equals(_()) ? _() : G() },
                        o = { _v: a.y9().equals(_()) ? _() : G() };
                    if ((cn(this, Z(r._v, o._v)), !r._v.equals(_()) && !o._v.equals(_()))) {
                        var s = new on(
                                ((e = r),
                                (i = this),
                                (u = o),
                                function (n) {
                                    return (e._v = n), cn(i, Z(n, u._v)), c;
                                }),
                            ),
                            f = new on(
                                (function (n, t, a) {
                                    return function (e) {
                                        return (n._v = e), cn(t, Z(e, a._v)), c;
                                    };
                                })(o, this, r),
                            );
                        t.ian(s), a.ian(f);
                        var l = this.daq_1;
                        l.y9().equals(_()) ? (t.ran(s), a.ran(f)) : l.ian(new sn(t, s, a, f));
                    }
                }
                function fn(n, t) {
                    (this.jaq_1 = n), (this.kaq_1 = t);
                }
                b(K, r, r, r, [q]),
                    v(M, "ComponentContextFactory"),
                    b(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, m]),
                    b(V, "DefaultComponentContext"),
                    b(tn, r, r, j),
                    b(an, "DefaultChildBackHandler"),
                    b(en, "ChildInstanceKeeperProvider", en, r, [L]),
                    b(un, r, r, r, [q]),
                    b(rn, r, r, r, [q]),
                    b(on, "CallbacksImpl", r, r, [q]),
                    b(sn, r, r, r, [q]),
                    b(_n, "MergedLifecycle"),
                    b(fn, r, r, r, [q]),
                    (f(K).z9y = function () {
                        throw s(o("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (f(X).kap = function (n, t, a, e) {
                        return this.lap_1(n, t, a, e);
                    }),
                    (f(X).z3 = function () {
                        return this.lap_1;
                    }),
                    (f(X).equals = function (n) {
                        var t;
                        null != n && k(n, M) ? (t = !(null == n || !k(n, m)) && y(this.z3(), n.z3())) : (t = !1);
                        return t;
                    }),
                    (f(X).hashCode = function () {
                        return w(this.z3());
                    }),
                    (f(V).gap = function () {
                        return this.map_1;
                    }),
                    (f(V).hap = function () {
                        return this.nap_1;
                    }),
                    (f(V).iap = function () {
                        return this.oap_1;
                    }),
                    (f(V).jap = function () {
                        return this.pap_1;
                    }),
                    (f(V).fap = function () {
                        return this.qap_1;
                    }),
                    (f(tn).xan = function (n, t, a) {
                        return nn(this.yap_1), c;
                    }),
                    (f(tn).xk = function (n, t, a) {
                        var e = null == t || null != t ? t : N();
                        return this.xan(n, e, null == a || null != a ? a : N());
                    }),
                    (f(an).bao = function (n) {
                        return this.wap_1.al(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.cao();
                                },
                                function (n, t) {
                                    return n.bao(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (f(an).cao = function () {
                        return this.wap_1.tk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.cao();
                                },
                                function (n, t) {
                                    return n.bao(t);
                                },
                            ),
                        );
                    }),
                    (f(an).rap = function () {
                        this.tap_1.xao(this.vap_1) || this.tap_1.yao(this.vap_1);
                    }),
                    (f(an).sap = function () {
                        this.tap_1.xao(this.vap_1) && this.tap_1.zao(this.vap_1);
                    }),
                    (f(an).xao = function (n) {
                        return this.uap_1.xao(n);
                    }),
                    (f(an).yao = function (n) {
                        this.uap_1.yao(n);
                    }),
                    (f(an).zao = function (n) {
                        this.uap_1.zao(n);
                    }),
                    (f(en).z9y = function () {
                        this.zap_1.b9z();
                    }),
                    (f(un).z9y = function () {
                        var n = this.aaq_1.a9z(this.baq_1);
                        null == n || n.z9y();
                    }),
                    (f(rn).z9y = function () {
                        this.caq_1.b9z();
                    }),
                    (f(on).ean = function () {
                        this.eaq_1(S());
                    }),
                    (f(on).m1b = function () {
                        this.eaq_1(g());
                    }),
                    (f(on).fan = function () {
                        this.eaq_1(Q());
                    }),
                    (f(on).gan = function () {
                        this.eaq_1(g());
                    }),
                    (f(on).han = function () {
                        this.eaq_1(S());
                    }),
                    (f(on).z9y = function () {
                        this.eaq_1(_());
                    }),
                    (f(sn).z9y = function () {
                        this.faq_1.ran(this.gaq_1), this.haq_1.ran(this.iaq_1);
                    }),
                    (f(_n).ian = function (n) {
                        this.daq_1.ian(n);
                    }),
                    (f(_n).ran = function (n) {
                        this.daq_1.ran(n);
                    }),
                    (f(_n).y9 = function () {
                        return this.daq_1.y9();
                    }),
                    (f(fn).z9y = function () {
                        this.jaq_1.vam(this.kaq_1);
                    }),
                    (f(K).ean = l),
                    (f(K).m1b = h),
                    (f(K).fan = p),
                    (f(K).gan = $),
                    (f(K).han = d),
                    (f(un).ean = l),
                    (f(un).m1b = h),
                    (f(un).fan = p),
                    (f(un).gan = $),
                    (f(un).han = d),
                    (f(rn).ean = l),
                    (f(rn).m1b = h),
                    (f(rn).fan = p),
                    (f(rn).gan = $),
                    (f(rn).han = d),
                    (f(sn).ean = l),
                    (f(sn).m1b = h),
                    (f(sn).fan = p),
                    (f(sn).gan = $),
                    (f(sn).han = d),
                    (f(fn).ean = l),
                    (f(fn).m1b = h),
                    (f(fn).fan = p),
                    (f(fn).gan = $),
                    (f(fn).han = d),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = V),
                    (n.$_$.b = function (n, t, a) {
                        if (null == (a = a === r ? null : a));
                        else {
                            if (a.y9().equals(_())) {
                                throw s(o("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            a.ian(new K());
                        }
                        return n.fap().kap(
                            null == a
                                ? n.gap()
                                : (function (n, t, a) {
                                      return _n.call(a, R(), n, t), a;
                                  })(n.gap(), a, T(f(_n))),
                            (function (n, t, a) {
                                if (((a = a === r ? null : a), !!n.uam(t))) {
                                    throw s(o('The key "' + t + '" is already in use.'));
                                }
                                var e = A(n.sam(t, J.q6c()));
                                if (null == a) {
                                    var i = J.q6c();
                                    n.tam(
                                        t,
                                        i,
                                        ((c = e),
                                        ((f = function () {
                                            return c.ram();
                                        }).callableName = "save"),
                                        f),
                                    );
                                } else if (!Y(a)) {
                                    var u = J.q6c();
                                    n.tam(
                                        t,
                                        u,
                                        (function (n) {
                                            var t = function () {
                                                return n.ram();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        a.y9().equals(_()) ? n.vam(t) : a.ian(new fn(n, t));
                                }
                                var c, f;
                                return e;
                            })(n.hap(), t, a),
                            (function (n, t, a) {
                                var e;
                                if (((a = a === r ? null : a), null != a && Y(a))) e = z();
                                else {
                                    var i = n.x9y(t),
                                        u = null == i || k(i, L) ? i : N();
                                    null == u && ((u = new en()), n.y9y(t, u));
                                    var c = u.zap_1;
                                    if (null == a);
                                    else if (a.y9().equals(_())) {
                                        var o = n.a9z(t);
                                        null == o || o.z9y();
                                    } else a.ian(new un(n, t));
                                    e = c;
                                }
                                return e;
                            })(n.iap(), t, a),
                            (function (n, t, a) {
                                t = t === r ? null : t;
                                var e = (function (n, t, a) {
                                    return (a = a === r ? 0 : a), new an(n, (t = t === r || t), a);
                                })(n, !1, (a = a === r ? 0 : a));
                                if (null == t) e.bao(!0), e.rap();
                                else if (!Y(t)) {
                                    e.bao(t.y9().a3(g()) >= 0), e.rap();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.bao(!0), c;
                                            }),
                                        u = (function (n) {
                                            return function () {
                                                return n.bao(!1), c;
                                            };
                                        })(e);
                                    C(
                                        t,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((o = e),
                                        ((s = function () {
                                            return o.sap(), c;
                                        }).callableName = "stop"),
                                        s),
                                    );
                                }
                                var o, s;
                                var _;
                                return e;
                            })(n.jap(), a),
                        );
                    });
            })(n.exports, a(519039), a(54279), a(440172), a(538264), a(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.d53afcfa.js.map
