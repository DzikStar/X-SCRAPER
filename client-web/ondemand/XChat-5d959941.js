(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (t, n, a) => {
            "use strict";
            a.d(n, { _: () => u });
            var r = a(381415);
            const e = "https://api.x.com",
                i = 5e3,
                o = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function u(t, n = {}) {
                const a = t instanceof URL ? t : new URL(t, e),
                    { credentials: u = "include", headers: s, signal: c = AbortSignal.timeout(i) } = n,
                    _ = new Headers(s);
                if (
                    (function (t) {
                        return ("string" == typeof t && (t.startsWith("https://api.x.com") || t.startsWith("https://x.com/i/api"))) || (t instanceof URL && ("api.x.com" === t.host || t.href.startsWith("https://x.com/i/api")));
                    })(t)
                ) {
                    _.set("Authorization", `Bearer ${o}`);
                    const t = _.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const n = (0, r.Qc)(t);
                        n.auth_token && _.set("x-twitter-auth-type", "OAuth2Session"), n.ct0 && _.set("x-csrf-token", n.ct0);
                    }
                }
                const l = await fetch(a, { ...n, credentials: u, headers: _, signal: c });
                if (!l.ok) throw new Error(`[${l.status}] Network response was not ok`);
                return l;
            }
        },
        381415: (t, n) => {
            "use strict";
            n.Qc = function (t, n) {
                const a = new u(),
                    r = t.length;
                if (r < 2) return a;
                const e = n?.decode || _;
                let i = 0;
                do {
                    const n = t.indexOf("=", i);
                    if (-1 === n) break;
                    const o = t.indexOf(";", i),
                        u = -1 === o ? r : o;
                    if (n > u) {
                        i = t.lastIndexOf(";", n - 1) + 1;
                        continue;
                    }
                    const _ = s(t, i, n),
                        l = c(t, n, _),
                        f = t.slice(_, l);
                    if (void 0 === a[f]) {
                        let r = s(t, n + 1, u),
                            i = c(t, u, r);
                        const o = e(t.slice(r, i));
                        a[f] = o;
                    }
                    i = u + 1;
                } while (i < r);
                return a;
            };
            const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                r = /^[\u0021-\u003A\u003C-\u007E]*$/,
                e = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                u = (() => {
                    const t = function () {};
                    return (t.prototype = Object.create(null)), t;
                })();
            function s(t, n, a) {
                do {
                    const a = t.charCodeAt(n);
                    if (32 !== a && 9 !== a) return n;
                } while (++n < a);
                return a;
            }
            function c(t, n, a) {
                for (; n > a; ) {
                    const a = t.charCodeAt(--n);
                    if (32 !== a && 9 !== a) return n + 1;
                }
                return a;
            }
            function _(t) {
                if (-1 === t.indexOf("%")) return t;
                try {
                    return decodeURIComponent(t);
                } catch (n) {
                    return t;
                }
            }
        },
        594839: (t, n, a) => {
            !(function (t, n, a, r, e, i) {
                "use strict";
                var o = n.$_$.g,
                    u = n.$_$.n6,
                    s = n.$_$.se,
                    c = n.$_$.l2,
                    _ = a.$_$.q,
                    l = n.$_$.oe,
                    f = a.$_$.a,
                    h = a.$_$.e,
                    $ = a.$_$.d,
                    p = a.$_$.c,
                    q = a.$_$.f,
                    v = a.$_$.g,
                    d = n.$_$.ld,
                    b = n.$_$.pd,
                    k = n.$_$.cd,
                    m = n.$_$.pc,
                    w = n.$_$.ae,
                    x = n.$_$.kd,
                    A = r.$_$.b,
                    y = e.$_$.c,
                    C = i.$_$.b,
                    g = a.$_$.t,
                    z = a.$_$.o,
                    j = n.$_$.ue,
                    N = n.$_$.fj,
                    E = i.$_$.a,
                    I = (n.$_$.z5, n.$_$.mf),
                    O = n.$_$.id,
                    L = e.$_$.a,
                    R = a.$_$.h,
                    T = n.$_$.ne,
                    U = n.$_$.gk,
                    W = a.$_$.i,
                    B = a.$_$.j,
                    D = a.$_$.n,
                    F = a.$_$.m,
                    H = a.$_$.k,
                    P = a.$_$.l,
                    S = a.$_$.p,
                    Q = a.$_$.s,
                    Z = n.$_$.ub,
                    G = a.$_$.r,
                    J = r.$_$.c;
                function K() {}
                function M() {}
                function X(t) {
                    this.yaq_1 = t;
                }
                function V(t, n, a, r) {
                    (n = n === o ? null : n), (a = a === o ? null : a), (r = r === o ? null : r), (this.zaq_1 = t);
                    this.aar_1 = null == n ? A() : n;
                    this.bar_1 =
                        null == a
                            ? (function (t, n) {
                                  n.y9().equals(_()) ? t.o9x() : n.vao(new it(t));
                                  return t;
                              })(y(), this.zaq_1)
                            : a;
                    this.car_1 = null == r ? C() : r;
                    var e,
                        i =
                            (((e = function (t, n, a, r) {
                                return new V(t, n, a, r);
                            }).callableName = "<init>"),
                            e);
                    this.dar_1 = new X(i);
                }
                function Y(t) {
                    return t.y9().equals(_());
                }
                function tt(t) {
                    t.iar_1.oap(t.pap() && t.har_1.pap());
                }
                function nt(t, n) {
                    (this.lar_1 = n), j.call(this, t);
                }
                function at(t, n, a, r) {
                    (r = r === o ? C() : r), (this.gar_1 = t), (this.har_1 = r);
                    var e,
                        i =
                            ((e = this.har_1),
                            function (t) {
                                return (
                                    (function (t, n) {
                                        t.oaq(n);
                                    })(e, t),
                                    u
                                );
                            }),
                        s = (function (t) {
                            var n = function (n) {
                                return t.paq(n), u;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.har_1),
                        c = (function (t) {
                            var n = function () {
                                return t.qaq(), u;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.har_1);
                    this.iar_1 = E(
                        !1,
                        a,
                        i,
                        s,
                        c,
                        (function (t) {
                            return function () {
                                return t.naq(), u;
                            };
                        })(this.har_1),
                    );
                    var _;
                    (this.jar_1 = new nt(n, this)),
                        this.har_1.qap(
                            ((_ = this),
                            function (t) {
                                return tt(_), u;
                            }),
                        );
                }
                function rt() {
                    this.mar_1 = y();
                }
                function et(t, n) {
                    (this.nar_1 = t), (this.oar_1 = n);
                }
                function it(t) {
                    this.par_1 = t;
                }
                function ot(t, n) {
                    switch (n.x2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.qar_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(t.qar_1), B(t.qar_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(t.qar_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (t) {
                                switch (t.qar_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(t.qar_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(t.qar_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.qar_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(t.qar_1);
                                        break;
                                    case 4:
                                        H(t.qar_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 4:
                            !(function (t) {
                                switch (t.qar_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(t.qar_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        default:
                            U();
                    }
                }
                function ut(t) {
                    this.rar_1 = t;
                }
                function st(t, n, a, r) {
                    (this.sar_1 = t), (this.tar_1 = n), (this.uar_1 = a), (this.var_1 = r);
                }
                function ct(t, n, a) {
                    this.qar_1 = t;
                    var r,
                        e,
                        i,
                        o = { _v: n.y9().equals(_()) ? _() : G() },
                        s = { _v: a.y9().equals(_()) ? _() : G() };
                    if ((ot(this, Z(o._v, s._v)), !o._v.equals(_()) && !s._v.equals(_()))) {
                        var c = new ut(
                                ((r = o),
                                (e = this),
                                (i = s),
                                function (t) {
                                    return (r._v = t), ot(e, Z(t, i._v)), u;
                                }),
                            ),
                            l = new ut(
                                (function (t, n, a) {
                                    return function (r) {
                                        return (t._v = r), ot(n, Z(r, a._v)), u;
                                    };
                                })(s, this, o),
                            );
                        n.vao(c), a.vao(l);
                        var f = this.qar_1;
                        f.y9().equals(_()) ? (n.eap(c), a.eap(l)) : f.vao(new st(n, c, a, l));
                    }
                }
                function _t(t, n) {
                    (this.war_1 = t), (this.xar_1 = n);
                }
                d(K, o, o, o, [v]),
                    b(M, "ComponentContextFactory"),
                    d(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", o, o, [M, m]),
                    d(V, "DefaultComponentContext"),
                    d(nt, o, o, j),
                    d(at, "DefaultChildBackHandler"),
                    d(rt, "ChildInstanceKeeperProvider", rt, o, [L]),
                    d(et, o, o, o, [v]),
                    d(it, o, o, o, [v]),
                    d(ut, "CallbacksImpl", o, o, [v]),
                    d(st, o, o, o, [v]),
                    d(ct, "MergedLifecycle"),
                    d(_t, o, o, o, [v]),
                    (l(K).m9x = function () {
                        throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (l(X).xaq = function (t, n, a, r) {
                        return this.yaq_1(t, n, a, r);
                    }),
                    (l(X).z3 = function () {
                        return this.yaq_1;
                    }),
                    (l(X).equals = function (t) {
                        var n;
                        null != t && w(t, M) ? (n = !(null == t || !w(t, m)) && k(this.z3(), t.z3())) : (n = !1);
                        return n;
                    }),
                    (l(X).hashCode = function () {
                        return x(this.z3());
                    }),
                    (l(V).taq = function () {
                        return this.zaq_1;
                    }),
                    (l(V).uaq = function () {
                        return this.aar_1;
                    }),
                    (l(V).vaq = function () {
                        return this.bar_1;
                    }),
                    (l(V).waq = function () {
                        return this.car_1;
                    }),
                    (l(V).saq = function () {
                        return this.dar_1;
                    }),
                    (l(nt).kap = function (t, n, a) {
                        return tt(this.lar_1), u;
                    }),
                    (l(nt).al = function (t, n, a) {
                        var r = null == n || null != n ? n : N();
                        return this.kap(t, r, null == a || null != a ? a : N());
                    }),
                    (l(at).oap = function (t) {
                        return this.jar_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.pap();
                                },
                                function (t, n) {
                                    return t.oap(n);
                                },
                            ),
                            t,
                        );
                    }),
                    (l(at).pap = function () {
                        return this.jar_1.wk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.pap();
                                },
                                function (t, n) {
                                    return t.oap(n);
                                },
                            ),
                        );
                    }),
                    (l(at).ear = function () {
                        this.gar_1.kaq(this.iar_1) || this.gar_1.laq(this.iar_1);
                    }),
                    (l(at).far = function () {
                        this.gar_1.kaq(this.iar_1) && this.gar_1.maq(this.iar_1);
                    }),
                    (l(at).kaq = function (t) {
                        return this.har_1.kaq(t);
                    }),
                    (l(at).laq = function (t) {
                        this.har_1.laq(t);
                    }),
                    (l(at).maq = function (t) {
                        this.har_1.maq(t);
                    }),
                    (l(rt).m9x = function () {
                        this.mar_1.o9x();
                    }),
                    (l(et).m9x = function () {
                        var t = this.nar_1.n9x(this.oar_1);
                        null == t || t.m9x();
                    }),
                    (l(it).m9x = function () {
                        this.par_1.o9x();
                    }),
                    (l(ut).rao = function () {
                        this.rar_1(S());
                    }),
                    (l(ut).p1b = function () {
                        this.rar_1(g());
                    }),
                    (l(ut).sao = function () {
                        this.rar_1(Q());
                    }),
                    (l(ut).tao = function () {
                        this.rar_1(g());
                    }),
                    (l(ut).uao = function () {
                        this.rar_1(S());
                    }),
                    (l(ut).m9x = function () {
                        this.rar_1(_());
                    }),
                    (l(st).m9x = function () {
                        this.sar_1.eap(this.tar_1), this.uar_1.eap(this.var_1);
                    }),
                    (l(ct).vao = function (t) {
                        this.qar_1.vao(t);
                    }),
                    (l(ct).eap = function (t) {
                        this.qar_1.eap(t);
                    }),
                    (l(ct).y9 = function () {
                        return this.qar_1.y9();
                    }),
                    (l(_t).m9x = function () {
                        this.war_1.iao(this.xar_1);
                    }),
                    (l(K).rao = f),
                    (l(K).p1b = h),
                    (l(K).sao = $),
                    (l(K).tao = p),
                    (l(K).uao = q),
                    (l(et).rao = f),
                    (l(et).p1b = h),
                    (l(et).sao = $),
                    (l(et).tao = p),
                    (l(et).uao = q),
                    (l(it).rao = f),
                    (l(it).p1b = h),
                    (l(it).sao = $),
                    (l(it).tao = p),
                    (l(it).uao = q),
                    (l(st).rao = f),
                    (l(st).p1b = h),
                    (l(st).sao = $),
                    (l(st).tao = p),
                    (l(st).uao = q),
                    (l(_t).rao = f),
                    (l(_t).p1b = h),
                    (l(_t).sao = $),
                    (l(_t).tao = p),
                    (l(_t).uao = q),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = V),
                    (t.$_$.b = function (t, n, a) {
                        if (null == (a = a === o ? null : a));
                        else {
                            if (a.y9().equals(_())) {
                                throw c(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            a.vao(new K());
                        }
                        return t.saq().xaq(
                            null == a
                                ? t.taq()
                                : (function (t, n, a) {
                                      return ct.call(a, R(), t, n), a;
                                  })(t.taq(), a, T(l(ct))),
                            (function (t, n, a) {
                                if (((a = a === o ? null : a), !!t.hao(n))) {
                                    throw c(s('The key "' + n + '" is already in use.'));
                                }
                                var r = A(t.fao(n, J.w6c()));
                                if (null == a) {
                                    var e = J.w6c();
                                    t.gao(
                                        n,
                                        e,
                                        ((u = r),
                                        ((l = function () {
                                            return u.eao();
                                        }).callableName = "save"),
                                        l),
                                    );
                                } else if (!Y(a)) {
                                    var i = J.w6c();
                                    t.gao(
                                        n,
                                        i,
                                        (function (t) {
                                            var n = function () {
                                                return t.eao();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(r),
                                    ),
                                        a.y9().equals(_()) ? t.iao(n) : a.vao(new _t(t, n));
                                }
                                var u, l;
                                return r;
                            })(t.uaq(), n, a),
                            (function (t, n, a) {
                                var r;
                                if (((a = a === o ? null : a), null != a && Y(a))) r = y();
                                else {
                                    var e = t.k9x(n),
                                        i = null == e || w(e, L) ? e : N();
                                    null == i && ((i = new rt()), t.l9x(n, i));
                                    var u = i.mar_1;
                                    if (null == a);
                                    else if (a.y9().equals(_())) {
                                        var s = t.n9x(n);
                                        null == s || s.m9x();
                                    } else a.vao(new et(t, n));
                                    r = u;
                                }
                                return r;
                            })(t.vaq(), n, a),
                            (function (t, n, a) {
                                n = n === o ? null : n;
                                var r = (function (t, n, a) {
                                    return (a = a === o ? 0 : a), new at(t, (n = n === o || n), a);
                                })(t, !1, (a = a === o ? 0 : a));
                                if (null == n) r.oap(!0), r.ear();
                                else if (!Y(n)) {
                                    r.oap(n.y9().a3(g()) >= 0), r.ear();
                                    var e =
                                            ((_ = r),
                                            function () {
                                                return _.oap(!0), u;
                                            }),
                                        i = (function (t) {
                                            return function () {
                                                return t.oap(!1), u;
                                            };
                                        })(r);
                                    z(
                                        n,
                                        o,
                                        e,
                                        o,
                                        o,
                                        i,
                                        ((s = r),
                                        ((c = function () {
                                            return s.far(), u;
                                        }).callableName = "stop"),
                                        c),
                                    );
                                }
                                var s, c;
                                var _;
                                return r;
                            })(t.waq(), a),
                        );
                    });
            })(t.exports, a(519039), a(54279), a(440172), a(538264), a(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.a36c721a.js.map
