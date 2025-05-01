(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (n, t, a) => {
            "use strict";
            a.d(t, { _: () => r });
            var e = a(381415);
            const i = "https://api.x.com",
                u = 5e3,
                o = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function r(n, t = {}) {
                const a = n instanceof URL ? n : new URL(n, i),
                    { credentials: r = "include", headers: s, signal: c = AbortSignal.timeout(u) } = t,
                    _ = new Headers(s);
                if (
                    (function (n) {
                        return ("string" == typeof n && (n.startsWith("https://api.x.com") || n.startsWith("https://x.com/i/api"))) || (n instanceof URL && ("api.x.com" === n.host || n.href.startsWith("https://x.com/i/api")));
                    })(n)
                ) {
                    _.set("Authorization", `Bearer ${o}`);
                    const n = _.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (n) {
                        const t = (0, e.Qc)(n);
                        t.auth_token && _.set("x-twitter-auth-type", "OAuth2Session"), t.ct0 && _.set("x-csrf-token", t.ct0);
                    }
                }
                const l = await fetch(a, { ...t, credentials: r, headers: _, signal: c });
                if (!l.ok) throw new Error(`[${l.status}] Network response was not ok`);
                return l;
            }
        },
        381415: (n, t) => {
            "use strict";
            t.Qc = function (n, t) {
                const a = new r(),
                    e = n.length;
                if (e < 2) return a;
                const i = t?.decode || _;
                let u = 0;
                do {
                    const t = n.indexOf("=", u);
                    if (-1 === t) break;
                    const o = n.indexOf(";", u),
                        r = -1 === o ? e : o;
                    if (t > r) {
                        u = n.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const _ = s(n, u, t),
                        l = c(n, t, _),
                        f = n.slice(_, l);
                    if (void 0 === a[f]) {
                        let e = s(n, t + 1, r),
                            u = c(n, r, e);
                        const o = i(n.slice(e, u));
                        a[f] = o;
                    }
                    u = r + 1;
                } while (u < e);
                return a;
            };
            const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                u = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                r = (() => {
                    const n = function () {};
                    return (n.prototype = Object.create(null)), n;
                })();
            function s(n, t, a) {
                do {
                    const a = n.charCodeAt(t);
                    if (32 !== a && 9 !== a) return t;
                } while (++t < a);
                return a;
            }
            function c(n, t, a) {
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
                var o = t.$_$.g,
                    r = t.$_$.l6,
                    s = t.$_$.oe,
                    c = t.$_$.l2,
                    _ = a.$_$.q,
                    l = t.$_$.ke,
                    f = a.$_$.a,
                    h = a.$_$.e,
                    p = a.$_$.d,
                    $ = a.$_$.c,
                    m = a.$_$.f,
                    v = a.$_$.g,
                    d = t.$_$.hd,
                    y = t.$_$.ld,
                    b = t.$_$.yc,
                    k = t.$_$.lc,
                    w = t.$_$.wd,
                    A = t.$_$.gd,
                    q = e.$_$.b,
                    x = i.$_$.c,
                    C = u.$_$.b,
                    g = a.$_$.t,
                    z = a.$_$.o,
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
                    this.yao_1 = n;
                }
                function V(n, t, a, e) {
                    (t = t === o ? null : t), (a = a === o ? null : a), (e = e === o ? null : e), (this.zao_1 = n);
                    this.aap_1 = null == t ? q() : t;
                    this.bap_1 =
                        null == a
                            ? (function (n, t) {
                                  t.y9().equals(_()) ? n.o9y() : t.vam(new on(n));
                                  return n;
                              })(x(), this.zao_1)
                            : a;
                    this.cap_1 = null == e ? C() : e;
                    var i,
                        u =
                            (((i = function (n, t, a, e) {
                                return new V(n, t, a, e);
                            }).callableName = "<init>"),
                            i);
                    this.dap_1 = new X(u);
                }
                function Y(n) {
                    return n.y9().equals(_());
                }
                function nn(n) {
                    n.iap_1.oan(n.pan() && n.hap_1.pan());
                }
                function tn(n, t) {
                    (this.lap_1 = t), j.call(this, n);
                }
                function an(n, t, a, e) {
                    (e = e === o ? C() : e), (this.gap_1 = n), (this.hap_1 = e);
                    var i,
                        u =
                            ((i = this.hap_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.oao(t);
                                    })(i, n),
                                    r
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.pao(t), r;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.hap_1),
                        c = (function (n) {
                            var t = function () {
                                return n.qao(), r;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.hap_1);
                    this.iap_1 = E(
                        !1,
                        a,
                        u,
                        s,
                        c,
                        (function (n) {
                            return function () {
                                return n.nao(), r;
                            };
                        })(this.hap_1),
                    );
                    var _;
                    (this.jap_1 = new tn(t, this)),
                        this.hap_1.qan(
                            ((_ = this),
                            function (n) {
                                return nn(_), r;
                            }),
                        );
                }
                function en() {
                    this.map_1 = x();
                }
                function un(n, t) {
                    (this.nap_1 = n), (this.oap_1 = t);
                }
                function on(n) {
                    this.pap_1 = n;
                }
                function rn(n, t) {
                    switch (t.x2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.qap_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(n.qap_1), B(n.qap_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(n.qap_1);
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
                                switch (n.qap_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(n.qap_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(n.qap_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.qap_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(n.qap_1);
                                        break;
                                    case 4:
                                        H(n.qap_1);
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
                                switch (n.qap_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(n.qap_1);
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
                function sn(n) {
                    this.rap_1 = n;
                }
                function cn(n, t, a, e) {
                    (this.sap_1 = n), (this.tap_1 = t), (this.uap_1 = a), (this.vap_1 = e);
                }
                function _n(n, t, a) {
                    this.qap_1 = n;
                    var e,
                        i,
                        u,
                        o = { _v: t.y9().equals(_()) ? _() : G() },
                        s = { _v: a.y9().equals(_()) ? _() : G() };
                    if ((rn(this, Z(o._v, s._v)), !o._v.equals(_()) && !s._v.equals(_()))) {
                        var c = new sn(
                                ((e = o),
                                (i = this),
                                (u = s),
                                function (n) {
                                    return (e._v = n), rn(i, Z(n, u._v)), r;
                                }),
                            ),
                            l = new sn(
                                (function (n, t, a) {
                                    return function (e) {
                                        return (n._v = e), rn(t, Z(e, a._v)), r;
                                    };
                                })(s, this, o),
                            );
                        t.vam(c), a.vam(l);
                        var f = this.qap_1;
                        f.y9().equals(_()) ? (t.ean(c), a.ean(l)) : f.vam(new cn(t, c, a, l));
                    }
                }
                function ln(n, t) {
                    (this.wap_1 = n), (this.xap_1 = t);
                }
                d(K, o, o, o, [v]),
                    y(M, "ComponentContextFactory"),
                    d(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", o, o, [M, k]),
                    d(V, "DefaultComponentContext"),
                    d(tn, o, o, j),
                    d(an, "DefaultChildBackHandler"),
                    d(en, "ChildInstanceKeeperProvider", en, o, [L]),
                    d(un, o, o, o, [v]),
                    d(on, o, o, o, [v]),
                    d(sn, "CallbacksImpl", o, o, [v]),
                    d(cn, o, o, o, [v]),
                    d(_n, "MergedLifecycle"),
                    d(ln, o, o, o, [v]),
                    (l(K).m9y = function () {
                        throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(X).xao = function (n, t, a, e) {
                        return this.yao_1(n, t, a, e);
                    }),
                    (l(X).z3 = function () {
                        return this.yao_1;
                    }),
                    (l(X).equals = function (n) {
                        var t;
                        null != n && w(n, M) ? (t = !(null == n || !w(n, k)) && b(this.z3(), n.z3())) : (t = !1);
                        return t;
                    }),
                    (l(X).hashCode = function () {
                        return A(this.z3());
                    }),
                    (l(V).tao = function () {
                        return this.zao_1;
                    }),
                    (l(V).uao = function () {
                        return this.aap_1;
                    }),
                    (l(V).vao = function () {
                        return this.bap_1;
                    }),
                    (l(V).wao = function () {
                        return this.cap_1;
                    }),
                    (l(V).sao = function () {
                        return this.dap_1;
                    }),
                    (l(tn).kan = function (n, t, a) {
                        return nn(this.lap_1), r;
                    }),
                    (l(tn).xk = function (n, t, a) {
                        var e = null == t || null != t ? t : N();
                        return this.kan(n, e, null == a || null != a ? a : N());
                    }),
                    (l(an).oan = function (n) {
                        return this.jap_1.al(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.pan();
                                },
                                function (n, t) {
                                    return n.oan(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (l(an).pan = function () {
                        return this.jap_1.tk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.pan();
                                },
                                function (n, t) {
                                    return n.oan(t);
                                },
                            ),
                        );
                    }),
                    (l(an).eap = function () {
                        this.gap_1.kao(this.iap_1) || this.gap_1.lao(this.iap_1);
                    }),
                    (l(an).fap = function () {
                        this.gap_1.kao(this.iap_1) && this.gap_1.mao(this.iap_1);
                    }),
                    (l(an).kao = function (n) {
                        return this.hap_1.kao(n);
                    }),
                    (l(an).lao = function (n) {
                        this.hap_1.lao(n);
                    }),
                    (l(an).mao = function (n) {
                        this.hap_1.mao(n);
                    }),
                    (l(en).m9y = function () {
                        this.map_1.o9y();
                    }),
                    (l(un).m9y = function () {
                        var n = this.nap_1.n9y(this.oap_1);
                        null == n || n.m9y();
                    }),
                    (l(on).m9y = function () {
                        this.pap_1.o9y();
                    }),
                    (l(sn).ram = function () {
                        this.rap_1(S());
                    }),
                    (l(sn).m1b = function () {
                        this.rap_1(g());
                    }),
                    (l(sn).sam = function () {
                        this.rap_1(Q());
                    }),
                    (l(sn).tam = function () {
                        this.rap_1(g());
                    }),
                    (l(sn).uam = function () {
                        this.rap_1(S());
                    }),
                    (l(sn).m9y = function () {
                        this.rap_1(_());
                    }),
                    (l(cn).m9y = function () {
                        this.sap_1.ean(this.tap_1), this.uap_1.ean(this.vap_1);
                    }),
                    (l(_n).vam = function (n) {
                        this.qap_1.vam(n);
                    }),
                    (l(_n).ean = function (n) {
                        this.qap_1.ean(n);
                    }),
                    (l(_n).y9 = function () {
                        return this.qap_1.y9();
                    }),
                    (l(ln).m9y = function () {
                        this.wap_1.iam(this.xap_1);
                    }),
                    (l(K).ram = f),
                    (l(K).m1b = h),
                    (l(K).sam = p),
                    (l(K).tam = $),
                    (l(K).uam = m),
                    (l(un).ram = f),
                    (l(un).m1b = h),
                    (l(un).sam = p),
                    (l(un).tam = $),
                    (l(un).uam = m),
                    (l(on).ram = f),
                    (l(on).m1b = h),
                    (l(on).sam = p),
                    (l(on).tam = $),
                    (l(on).uam = m),
                    (l(cn).ram = f),
                    (l(cn).m1b = h),
                    (l(cn).sam = p),
                    (l(cn).tam = $),
                    (l(cn).uam = m),
                    (l(ln).ram = f),
                    (l(ln).m1b = h),
                    (l(ln).sam = p),
                    (l(ln).tam = $),
                    (l(ln).uam = m),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = V),
                    (n.$_$.b = function (n, t, a) {
                        if (null == (a = a === o ? null : a));
                        else {
                            if (a.y9().equals(_())) {
                                throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            a.vam(new K());
                        }
                        return n.sao().xao(
                            null == a
                                ? n.tao()
                                : (function (n, t, a) {
                                      return _n.call(a, R(), n, t), a;
                                  })(n.tao(), a, T(l(_n))),
                            (function (n, t, a) {
                                if (((a = a === o ? null : a), !!n.ham(t))) {
                                    throw c(s('The key "' + t + '" is already in use.'));
                                }
                                var e = q(n.fam(t, J.m6c()));
                                if (null == a) {
                                    var i = J.m6c();
                                    n.gam(
                                        t,
                                        i,
                                        ((r = e),
                                        ((l = function () {
                                            return r.eam();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Y(a)) {
                                    var u = J.m6c();
                                    n.gam(
                                        t,
                                        u,
                                        (function (n) {
                                            var t = function () {
                                                return n.eam();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        a.y9().equals(_()) ? n.iam(t) : a.vam(new ln(n, t));
                                }
                                var r, l;
                                return e;
                            })(n.uao(), t, a),
                            (function (n, t, a) {
                                var e;
                                if (((a = a === o ? null : a), null != a && Y(a))) e = x();
                                else {
                                    var i = n.k9y(t),
                                        u = null == i || w(i, L) ? i : N();
                                    null == u && ((u = new en()), n.l9y(t, u));
                                    var r = u.map_1;
                                    if (null == a);
                                    else if (a.y9().equals(_())) {
                                        var s = n.n9y(t);
                                        null == s || s.m9y();
                                    } else a.vam(new un(n, t));
                                    e = r;
                                }
                                return e;
                            })(n.vao(), t, a),
                            (function (n, t, a) {
                                t = t === o ? null : t;
                                var e = (function (n, t, a) {
                                    return (a = a === o ? 0 : a), new an(n, (t = t === o || t), a);
                                })(n, !1, (a = a === o ? 0 : a));
                                if (null == t) e.oan(!0), e.eap();
                                else if (!Y(t)) {
                                    e.oan(t.y9().a3(g()) >= 0), e.eap();
                                    var i =
                                            ((_ = e),
                                            function () {
                                                return _.oan(!0), r;
                                            }),
                                        u = (function (n) {
                                            return function () {
                                                return n.oan(!1), r;
                                            };
                                        })(e);
                                    z(
                                        t,
                                        o,
                                        i,
                                        o,
                                        o,
                                        u,
                                        ((s = e),
                                        ((c = function () {
                                            return s.fap(), r;
                                        }).callableName = "stop"),
                                        c),
                                    );
                                }
                                var s, c;
                                var _;
                                return e;
                            })(n.wao(), a),
                        );
                    });
            })(n.exports, a(519039), a(54279), a(440172), a(538264), a(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.eaf6b7ba.js.map
