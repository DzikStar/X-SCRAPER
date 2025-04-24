(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (n, t, a) => {
            "use strict";
            a.d(t, { _: () => s });
            var e = a(381415);
            const i = "https://api.x.com",
                u = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function s(n, t = {}) {
                const a = n instanceof URL ? n : new URL(n, i),
                    { credentials: s = "include", headers: c, signal: o = AbortSignal.timeout(u) } = t,
                    l = new Headers(c);
                if (
                    (function (n) {
                        return ("string" == typeof n && (n.startsWith("https://api.x.com") || n.startsWith("https://x.com/i/api"))) || (n instanceof URL && ("api.x.com" === n.host || n.href.startsWith("https://x.com/i/api")));
                    })(n)
                ) {
                    l.set("Authorization", `Bearer ${r}`);
                    const n = l.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (n) {
                        const t = (0, e.Qc)(n);
                        t.auth_token && l.set("x-twitter-auth-type", "OAuth2Session"), t.ct0 && l.set("x-csrf-token", t.ct0);
                    }
                }
                const _ = await fetch(a, { ...t, credentials: s, headers: l, signal: o });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (n, t) => {
            "use strict";
            t.Qc = function (n, t) {
                const a = new s(),
                    e = n.length;
                if (e < 2) return a;
                const i = t?.decode || l;
                let u = 0;
                do {
                    const t = n.indexOf("=", u);
                    if (-1 === t) break;
                    const r = n.indexOf(";", u),
                        s = -1 === r ? e : r;
                    if (t > s) {
                        u = n.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const l = c(n, u, t),
                        _ = o(n, t, l),
                        f = n.slice(l, _);
                    if (void 0 === a[f]) {
                        let e = c(n, t + 1, s),
                            u = o(n, s, e);
                        const r = i(n.slice(e, u));
                        a[f] = r;
                    }
                    u = s + 1;
                } while (u < e);
                return a;
            };
            const a = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                i = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                u = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                s = (() => {
                    const n = function () {};
                    return (n.prototype = Object.create(null)), n;
                })();
            function c(n, t, a) {
                do {
                    const a = n.charCodeAt(t);
                    if (32 !== a && 9 !== a) return t;
                } while (++t < a);
                return a;
            }
            function o(n, t, a) {
                for (; t > a; ) {
                    const a = n.charCodeAt(--t);
                    if (32 !== a && 9 !== a) return t + 1;
                }
                return a;
            }
            function l(n) {
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
                    s = t.$_$.l6,
                    c = t.$_$.oe,
                    o = t.$_$.l2,
                    l = a.$_$.q,
                    _ = t.$_$.ke,
                    f = a.$_$.a,
                    h = a.$_$.e,
                    m = a.$_$.d,
                    $ = a.$_$.c,
                    v = a.$_$.f,
                    j = a.$_$.g,
                    k = t.$_$.hd,
                    d = t.$_$.ld,
                    b = t.$_$.yc,
                    p = t.$_$.lc,
                    w = t.$_$.wd,
                    y = t.$_$.gd,
                    A = e.$_$.b,
                    x = i.$_$.c,
                    C = u.$_$.b,
                    z = a.$_$.t,
                    q = a.$_$.o,
                    g = t.$_$.qe,
                    N = t.$_$.ui,
                    E = u.$_$.a,
                    I = (t.$_$.y5, t.$_$.hf),
                    O = t.$_$.ed,
                    L = i.$_$.a,
                    R = a.$_$.h,
                    T = t.$_$.je,
                    U = t.$_$.vj,
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
                    this.ral_1 = n;
                }
                function V(n, t, a, e) {
                    (t = t === r ? null : t), (a = a === r ? null : a), (e = e === r ? null : e), (this.sal_1 = n);
                    this.tal_1 = null == t ? A() : t;
                    this.ual_1 =
                        null == a
                            ? (function (n, t) {
                                  t.y9().equals(l()) ? n.h9v() : t.oaj(new rn(n));
                                  return n;
                              })(x(), this.sal_1)
                            : a;
                    this.val_1 = null == e ? C() : e;
                    var i,
                        u =
                            (((i = function (n, t, a, e) {
                                return new V(n, t, a, e);
                            }).callableName = "<init>"),
                            i);
                    this.wal_1 = new X(u);
                }
                function Y(n) {
                    return n.y9().equals(l());
                }
                function nn(n) {
                    n.bam_1.hak(n.iak() && n.aam_1.iak());
                }
                function tn(n, t) {
                    (this.eam_1 = t), g.call(this, n);
                }
                function an(n, t, a, e) {
                    (e = e === r ? C() : e), (this.zal_1 = n), (this.aam_1 = e);
                    var i,
                        u =
                            ((i = this.aam_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.hal(t);
                                    })(i, n),
                                    s
                                );
                            }),
                        c = (function (n) {
                            var t = function (t) {
                                return n.ial(t), s;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.aam_1),
                        o = (function (n) {
                            var t = function () {
                                return n.jal(), s;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.aam_1);
                    this.bam_1 = E(
                        !1,
                        a,
                        u,
                        c,
                        o,
                        (function (n) {
                            return function () {
                                return n.gal(), s;
                            };
                        })(this.aam_1),
                    );
                    var l;
                    (this.cam_1 = new tn(t, this)),
                        this.aam_1.jak(
                            ((l = this),
                            function (n) {
                                return nn(l), s;
                            }),
                        );
                }
                function en() {
                    this.fam_1 = x();
                }
                function un(n, t) {
                    (this.gam_1 = n), (this.ham_1 = t);
                }
                function rn(n) {
                    this.iam_1 = n;
                }
                function sn(n, t) {
                    switch (t.x2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.jam_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(n.jam_1), B(n.jam_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(n.jam_1);
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
                                switch (n.jam_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(n.jam_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(n.jam_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.jam_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(n.jam_1);
                                        break;
                                    case 4:
                                        H(n.jam_1);
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
                                switch (n.jam_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(n.jam_1);
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
                function cn(n) {
                    this.kam_1 = n;
                }
                function on(n, t, a, e) {
                    (this.lam_1 = n), (this.mam_1 = t), (this.nam_1 = a), (this.oam_1 = e);
                }
                function ln(n, t, a) {
                    this.jam_1 = n;
                    var e,
                        i,
                        u,
                        r = { _v: t.y9().equals(l()) ? l() : G() },
                        c = { _v: a.y9().equals(l()) ? l() : G() };
                    if ((sn(this, Z(r._v, c._v)), !r._v.equals(l()) && !c._v.equals(l()))) {
                        var o = new cn(
                                ((e = r),
                                (i = this),
                                (u = c),
                                function (n) {
                                    return (e._v = n), sn(i, Z(n, u._v)), s;
                                }),
                            ),
                            _ = new cn(
                                (function (n, t, a) {
                                    return function (e) {
                                        return (n._v = e), sn(t, Z(e, a._v)), s;
                                    };
                                })(c, this, r),
                            );
                        t.oaj(o), a.oaj(_);
                        var f = this.jam_1;
                        f.y9().equals(l()) ? (t.xaj(o), a.xaj(_)) : f.oaj(new on(t, o, a, _));
                    }
                }
                function _n(n, t) {
                    (this.pam_1 = n), (this.qam_1 = t);
                }
                k(K, r, r, r, [j]),
                    d(M, "ComponentContextFactory"),
                    k(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, p]),
                    k(V, "DefaultComponentContext"),
                    k(tn, r, r, g),
                    k(an, "DefaultChildBackHandler"),
                    k(en, "ChildInstanceKeeperProvider", en, r, [L]),
                    k(un, r, r, r, [j]),
                    k(rn, r, r, r, [j]),
                    k(cn, "CallbacksImpl", r, r, [j]),
                    k(on, r, r, r, [j]),
                    k(ln, "MergedLifecycle"),
                    k(_n, r, r, r, [j]),
                    (_(K).f9v = function () {
                        throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).qal = function (n, t, a, e) {
                        return this.ral_1(n, t, a, e);
                    }),
                    (_(X).z3 = function () {
                        return this.ral_1;
                    }),
                    (_(X).equals = function (n) {
                        var t;
                        null != n && w(n, M) ? (t = !(null == n || !w(n, p)) && b(this.z3(), n.z3())) : (t = !1);
                        return t;
                    }),
                    (_(X).hashCode = function () {
                        return y(this.z3());
                    }),
                    (_(V).mal = function () {
                        return this.sal_1;
                    }),
                    (_(V).nal = function () {
                        return this.tal_1;
                    }),
                    (_(V).oal = function () {
                        return this.ual_1;
                    }),
                    (_(V).pal = function () {
                        return this.val_1;
                    }),
                    (_(V).lal = function () {
                        return this.wal_1;
                    }),
                    (_(tn).dak = function (n, t, a) {
                        return nn(this.eam_1), s;
                    }),
                    (_(tn).xk = function (n, t, a) {
                        var e = null == t || null != t ? t : N();
                        return this.dak(n, e, null == a || null != a ? a : N());
                    }),
                    (_(an).hak = function (n) {
                        return this.cam_1.al(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.iak();
                                },
                                function (n, t) {
                                    return n.hak(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(an).iak = function () {
                        return this.cam_1.tk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.iak();
                                },
                                function (n, t) {
                                    return n.hak(t);
                                },
                            ),
                        );
                    }),
                    (_(an).xal = function () {
                        this.zal_1.dal(this.bam_1) || this.zal_1.eal(this.bam_1);
                    }),
                    (_(an).yal = function () {
                        this.zal_1.dal(this.bam_1) && this.zal_1.fal(this.bam_1);
                    }),
                    (_(an).dal = function (n) {
                        return this.aam_1.dal(n);
                    }),
                    (_(an).eal = function (n) {
                        this.aam_1.eal(n);
                    }),
                    (_(an).fal = function (n) {
                        this.aam_1.fal(n);
                    }),
                    (_(en).f9v = function () {
                        this.fam_1.h9v();
                    }),
                    (_(un).f9v = function () {
                        var n = this.gam_1.g9v(this.ham_1);
                        null == n || n.f9v();
                    }),
                    (_(rn).f9v = function () {
                        this.iam_1.h9v();
                    }),
                    (_(cn).kaj = function () {
                        this.kam_1(S());
                    }),
                    (_(cn).m1b = function () {
                        this.kam_1(z());
                    }),
                    (_(cn).laj = function () {
                        this.kam_1(Q());
                    }),
                    (_(cn).maj = function () {
                        this.kam_1(z());
                    }),
                    (_(cn).naj = function () {
                        this.kam_1(S());
                    }),
                    (_(cn).f9v = function () {
                        this.kam_1(l());
                    }),
                    (_(on).f9v = function () {
                        this.lam_1.xaj(this.mam_1), this.nam_1.xaj(this.oam_1);
                    }),
                    (_(ln).oaj = function (n) {
                        this.jam_1.oaj(n);
                    }),
                    (_(ln).xaj = function (n) {
                        this.jam_1.xaj(n);
                    }),
                    (_(ln).y9 = function () {
                        return this.jam_1.y9();
                    }),
                    (_(_n).f9v = function () {
                        this.pam_1.baj(this.qam_1);
                    }),
                    (_(K).kaj = f),
                    (_(K).m1b = h),
                    (_(K).laj = m),
                    (_(K).maj = $),
                    (_(K).naj = v),
                    (_(un).kaj = f),
                    (_(un).m1b = h),
                    (_(un).laj = m),
                    (_(un).maj = $),
                    (_(un).naj = v),
                    (_(rn).kaj = f),
                    (_(rn).m1b = h),
                    (_(rn).laj = m),
                    (_(rn).maj = $),
                    (_(rn).naj = v),
                    (_(on).kaj = f),
                    (_(on).m1b = h),
                    (_(on).laj = m),
                    (_(on).maj = $),
                    (_(on).naj = v),
                    (_(_n).kaj = f),
                    (_(_n).m1b = h),
                    (_(_n).laj = m),
                    (_(_n).maj = $),
                    (_(_n).naj = v),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = V),
                    (n.$_$.b = function (n, t, a) {
                        if (null == (a = a === r ? null : a));
                        else {
                            if (a.y9().equals(l())) {
                                throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            a.oaj(new K());
                        }
                        return n.lal().qal(
                            null == a
                                ? n.mal()
                                : (function (n, t, a) {
                                      return ln.call(a, R(), n, t), a;
                                  })(n.mal(), a, T(_(ln))),
                            (function (n, t, a) {
                                if (((a = a === r ? null : a), !!n.aaj(t))) {
                                    throw o(c('The key "' + t + '" is already in use.'));
                                }
                                var e = A(n.yai(t, J.o83()));
                                if (null == a) {
                                    var i = J.o83();
                                    n.zai(
                                        t,
                                        i,
                                        ((s = e),
                                        ((_ = function () {
                                            return s.xai();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(a)) {
                                    var u = J.o83();
                                    n.zai(
                                        t,
                                        u,
                                        (function (n) {
                                            var t = function () {
                                                return n.xai();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        a.y9().equals(l()) ? n.baj(t) : a.oaj(new _n(n, t));
                                }
                                var s, _;
                                return e;
                            })(n.nal(), t, a),
                            (function (n, t, a) {
                                var e;
                                if (((a = a === r ? null : a), null != a && Y(a))) e = x();
                                else {
                                    var i = n.d9v(t),
                                        u = null == i || w(i, L) ? i : N();
                                    null == u && ((u = new en()), n.e9v(t, u));
                                    var s = u.fam_1;
                                    if (null == a);
                                    else if (a.y9().equals(l())) {
                                        var c = n.g9v(t);
                                        null == c || c.f9v();
                                    } else a.oaj(new un(n, t));
                                    e = s;
                                }
                                return e;
                            })(n.oal(), t, a),
                            (function (n, t, a) {
                                t = t === r ? null : t;
                                var e = (function (n, t, a) {
                                    return (a = a === r ? 0 : a), new an(n, (t = t === r || t), a);
                                })(n, !1, (a = a === r ? 0 : a));
                                if (null == t) e.hak(!0), e.xal();
                                else if (!Y(t)) {
                                    e.hak(t.y9().a3(z()) >= 0), e.xal();
                                    var i =
                                            ((l = e),
                                            function () {
                                                return l.hak(!0), s;
                                            }),
                                        u = (function (n) {
                                            return function () {
                                                return n.hak(!1), s;
                                            };
                                        })(e);
                                    q(
                                        t,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((c = e),
                                        ((o = function () {
                                            return c.yal(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var c, o;
                                var l;
                                return e;
                            })(n.pal(), a),
                        );
                    });
            })(n.exports, a(519039), a(54279), a(440172), a(538264), a(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.9f5f7c4a.js.map
