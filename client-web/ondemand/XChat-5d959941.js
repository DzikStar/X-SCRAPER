(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (t, n, a) => {
            "use strict";
            a.d(n, { _: () => s });
            var e = a(381415);
            const i = "https://api.x.com",
                u = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function s(t, n = {}) {
                const a = t instanceof URL ? t : new URL(t, i),
                    { credentials: s = "include", headers: c, signal: o = AbortSignal.timeout(u) } = n,
                    l = new Headers(c);
                if (
                    (function (t) {
                        return ("string" == typeof t && (t.startsWith("https://api.x.com") || t.startsWith("https://x.com/i/api"))) || (t instanceof URL && ("api.x.com" === t.host || t.href.startsWith("https://x.com/i/api")));
                    })(t)
                ) {
                    l.set("Authorization", `Bearer ${r}`);
                    const t = l.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const n = (0, e.Qc)(t);
                        n.auth_token && l.set("x-twitter-auth-type", "OAuth2Session"), n.ct0 && l.set("x-csrf-token", n.ct0);
                    }
                }
                const _ = await fetch(a, { ...n, credentials: s, headers: l, signal: o });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (t, n) => {
            "use strict";
            n.Qc = function (t, n) {
                const a = new s(),
                    e = t.length;
                if (e < 2) return a;
                const i = n?.decode || l;
                let u = 0;
                do {
                    const n = t.indexOf("=", u);
                    if (-1 === n) break;
                    const r = t.indexOf(";", u),
                        s = -1 === r ? e : r;
                    if (n > s) {
                        u = t.lastIndexOf(";", n - 1) + 1;
                        continue;
                    }
                    const l = c(t, u, n),
                        _ = o(t, n, l),
                        f = t.slice(l, _);
                    if (void 0 === a[f]) {
                        let e = c(t, n + 1, s),
                            u = o(t, s, e);
                        const r = i(t.slice(e, u));
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
                    const t = function () {};
                    return (t.prototype = Object.create(null)), t;
                })();
            function c(t, n, a) {
                do {
                    const a = t.charCodeAt(n);
                    if (32 !== a && 9 !== a) return n;
                } while (++n < a);
                return a;
            }
            function o(t, n, a) {
                for (; n > a; ) {
                    const a = t.charCodeAt(--n);
                    if (32 !== a && 9 !== a) return n + 1;
                }
                return a;
            }
            function l(t) {
                if (-1 === t.indexOf("%")) return t;
                try {
                    return decodeURIComponent(t);
                } catch (n) {
                    return t;
                }
            }
        },
        594839: (t, n, a) => {
            !(function (t, n, a, e, i, u) {
                "use strict";
                var r = n.$_$.g,
                    s = n.$_$.l6,
                    c = n.$_$.oe,
                    o = n.$_$.l2,
                    l = a.$_$.q,
                    _ = n.$_$.ke,
                    f = a.$_$.a,
                    h = a.$_$.e,
                    m = a.$_$.d,
                    $ = a.$_$.c,
                    k = a.$_$.f,
                    v = a.$_$.g,
                    d = n.$_$.hd,
                    j = n.$_$.ld,
                    p = n.$_$.yc,
                    b = n.$_$.lc,
                    w = n.$_$.wd,
                    A = n.$_$.gd,
                    y = e.$_$.b,
                    x = i.$_$.c,
                    q = u.$_$.b,
                    C = a.$_$.t,
                    g = a.$_$.o,
                    z = n.$_$.qe,
                    N = n.$_$.vi,
                    E = u.$_$.a,
                    I = (n.$_$.y5, n.$_$.hf),
                    O = n.$_$.ed,
                    L = i.$_$.a,
                    R = a.$_$.h,
                    T = n.$_$.je,
                    U = n.$_$.wj,
                    W = a.$_$.i,
                    B = a.$_$.j,
                    D = a.$_$.n,
                    F = a.$_$.m,
                    H = a.$_$.k,
                    P = a.$_$.l,
                    S = a.$_$.p,
                    Q = a.$_$.s,
                    Z = n.$_$.qb,
                    G = a.$_$.r,
                    J = e.$_$.c;
                function K() {}
                function M() {}
                function X(t) {
                    this.wal_1 = t;
                }
                function V(t, n, a, e) {
                    (n = n === r ? null : n), (a = a === r ? null : a), (e = e === r ? null : e), (this.xal_1 = t);
                    this.yal_1 = null == n ? y() : n;
                    this.zal_1 =
                        null == a
                            ? (function (t, n) {
                                  n.y9().equals(l()) ? t.m9v() : n.taj(new ut(t));
                                  return t;
                              })(x(), this.xal_1)
                            : a;
                    this.aam_1 = null == e ? q() : e;
                    var i,
                        u =
                            (((i = function (t, n, a, e) {
                                return new V(t, n, a, e);
                            }).callableName = "<init>"),
                            i);
                    this.bam_1 = new X(u);
                }
                function Y(t) {
                    return t.y9().equals(l());
                }
                function tt(t) {
                    t.gam_1.mak(t.nak() && t.fam_1.nak());
                }
                function nt(t, n) {
                    (this.jam_1 = n), z.call(this, t);
                }
                function at(t, n, a, e) {
                    (e = e === r ? q() : e), (this.eam_1 = t), (this.fam_1 = e);
                    var i,
                        u =
                            ((i = this.fam_1),
                            function (t) {
                                return (
                                    (function (t, n) {
                                        t.mal(n);
                                    })(i, t),
                                    s
                                );
                            }),
                        c = (function (t) {
                            var n = function (n) {
                                return t.nal(n), s;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.fam_1),
                        o = (function (t) {
                            var n = function () {
                                return t.oal(), s;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.fam_1);
                    this.gam_1 = E(
                        !1,
                        a,
                        u,
                        c,
                        o,
                        (function (t) {
                            return function () {
                                return t.lal(), s;
                            };
                        })(this.fam_1),
                    );
                    var l;
                    (this.ham_1 = new nt(n, this)),
                        this.fam_1.oak(
                            ((l = this),
                            function (t) {
                                return tt(l), s;
                            }),
                        );
                }
                function et() {
                    this.kam_1 = x();
                }
                function it(t, n) {
                    (this.lam_1 = t), (this.mam_1 = n);
                }
                function ut(t) {
                    this.nam_1 = t;
                }
                function rt(t, n) {
                    switch (n.x2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.oam_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(t.oam_1), B(t.oam_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(t.oam_1);
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
                                switch (t.oam_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(t.oam_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(t.oam_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.oam_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(t.oam_1);
                                        break;
                                    case 4:
                                        H(t.oam_1);
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
                                switch (t.oam_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(t.oam_1);
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
                function st(t) {
                    this.pam_1 = t;
                }
                function ct(t, n, a, e) {
                    (this.qam_1 = t), (this.ram_1 = n), (this.sam_1 = a), (this.tam_1 = e);
                }
                function ot(t, n, a) {
                    this.oam_1 = t;
                    var e,
                        i,
                        u,
                        r = { _v: n.y9().equals(l()) ? l() : G() },
                        c = { _v: a.y9().equals(l()) ? l() : G() };
                    if ((rt(this, Z(r._v, c._v)), !r._v.equals(l()) && !c._v.equals(l()))) {
                        var o = new st(
                                ((e = r),
                                (i = this),
                                (u = c),
                                function (t) {
                                    return (e._v = t), rt(i, Z(t, u._v)), s;
                                }),
                            ),
                            _ = new st(
                                (function (t, n, a) {
                                    return function (e) {
                                        return (t._v = e), rt(n, Z(e, a._v)), s;
                                    };
                                })(c, this, r),
                            );
                        n.taj(o), a.taj(_);
                        var f = this.oam_1;
                        f.y9().equals(l()) ? (n.cak(o), a.cak(_)) : f.taj(new ct(n, o, a, _));
                    }
                }
                function lt(t, n) {
                    (this.uam_1 = t), (this.vam_1 = n);
                }
                d(K, r, r, r, [v]),
                    j(M, "ComponentContextFactory"),
                    d(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, b]),
                    d(V, "DefaultComponentContext"),
                    d(nt, r, r, z),
                    d(at, "DefaultChildBackHandler"),
                    d(et, "ChildInstanceKeeperProvider", et, r, [L]),
                    d(it, r, r, r, [v]),
                    d(ut, r, r, r, [v]),
                    d(st, "CallbacksImpl", r, r, [v]),
                    d(ct, r, r, r, [v]),
                    d(ot, "MergedLifecycle"),
                    d(lt, r, r, r, [v]),
                    (_(K).k9v = function () {
                        throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).val = function (t, n, a, e) {
                        return this.wal_1(t, n, a, e);
                    }),
                    (_(X).z3 = function () {
                        return this.wal_1;
                    }),
                    (_(X).equals = function (t) {
                        var n;
                        null != t && w(t, M) ? (n = !(null == t || !w(t, b)) && p(this.z3(), t.z3())) : (n = !1);
                        return n;
                    }),
                    (_(X).hashCode = function () {
                        return A(this.z3());
                    }),
                    (_(V).ral = function () {
                        return this.xal_1;
                    }),
                    (_(V).sal = function () {
                        return this.yal_1;
                    }),
                    (_(V).tal = function () {
                        return this.zal_1;
                    }),
                    (_(V).ual = function () {
                        return this.aam_1;
                    }),
                    (_(V).qal = function () {
                        return this.bam_1;
                    }),
                    (_(nt).iak = function (t, n, a) {
                        return tt(this.jam_1), s;
                    }),
                    (_(nt).xk = function (t, n, a) {
                        var e = null == n || null != n ? n : N();
                        return this.iak(t, e, null == a || null != a ? a : N());
                    }),
                    (_(at).mak = function (t) {
                        return this.ham_1.al(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.nak();
                                },
                                function (t, n) {
                                    return t.mak(n);
                                },
                            ),
                            t,
                        );
                    }),
                    (_(at).nak = function () {
                        return this.ham_1.tk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.nak();
                                },
                                function (t, n) {
                                    return t.mak(n);
                                },
                            ),
                        );
                    }),
                    (_(at).cam = function () {
                        this.eam_1.ial(this.gam_1) || this.eam_1.jal(this.gam_1);
                    }),
                    (_(at).dam = function () {
                        this.eam_1.ial(this.gam_1) && this.eam_1.kal(this.gam_1);
                    }),
                    (_(at).ial = function (t) {
                        return this.fam_1.ial(t);
                    }),
                    (_(at).jal = function (t) {
                        this.fam_1.jal(t);
                    }),
                    (_(at).kal = function (t) {
                        this.fam_1.kal(t);
                    }),
                    (_(et).k9v = function () {
                        this.kam_1.m9v();
                    }),
                    (_(it).k9v = function () {
                        var t = this.lam_1.l9v(this.mam_1);
                        null == t || t.k9v();
                    }),
                    (_(ut).k9v = function () {
                        this.nam_1.m9v();
                    }),
                    (_(st).paj = function () {
                        this.pam_1(S());
                    }),
                    (_(st).m1b = function () {
                        this.pam_1(C());
                    }),
                    (_(st).qaj = function () {
                        this.pam_1(Q());
                    }),
                    (_(st).raj = function () {
                        this.pam_1(C());
                    }),
                    (_(st).saj = function () {
                        this.pam_1(S());
                    }),
                    (_(st).k9v = function () {
                        this.pam_1(l());
                    }),
                    (_(ct).k9v = function () {
                        this.qam_1.cak(this.ram_1), this.sam_1.cak(this.tam_1);
                    }),
                    (_(ot).taj = function (t) {
                        this.oam_1.taj(t);
                    }),
                    (_(ot).cak = function (t) {
                        this.oam_1.cak(t);
                    }),
                    (_(ot).y9 = function () {
                        return this.oam_1.y9();
                    }),
                    (_(lt).k9v = function () {
                        this.uam_1.gaj(this.vam_1);
                    }),
                    (_(K).paj = f),
                    (_(K).m1b = h),
                    (_(K).qaj = m),
                    (_(K).raj = $),
                    (_(K).saj = k),
                    (_(it).paj = f),
                    (_(it).m1b = h),
                    (_(it).qaj = m),
                    (_(it).raj = $),
                    (_(it).saj = k),
                    (_(ut).paj = f),
                    (_(ut).m1b = h),
                    (_(ut).qaj = m),
                    (_(ut).raj = $),
                    (_(ut).saj = k),
                    (_(ct).paj = f),
                    (_(ct).m1b = h),
                    (_(ct).qaj = m),
                    (_(ct).raj = $),
                    (_(ct).saj = k),
                    (_(lt).paj = f),
                    (_(lt).m1b = h),
                    (_(lt).qaj = m),
                    (_(lt).raj = $),
                    (_(lt).saj = k),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = V),
                    (t.$_$.b = function (t, n, a) {
                        if (null == (a = a === r ? null : a));
                        else {
                            if (a.y9().equals(l())) {
                                throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            a.taj(new K());
                        }
                        return t.qal().val(
                            null == a
                                ? t.ral()
                                : (function (t, n, a) {
                                      return ot.call(a, R(), t, n), a;
                                  })(t.ral(), a, T(_(ot))),
                            (function (t, n, a) {
                                if (((a = a === r ? null : a), !!t.faj(n))) {
                                    throw o(c('The key "' + n + '" is already in use.'));
                                }
                                var e = y(t.daj(n, J.r83()));
                                if (null == a) {
                                    var i = J.r83();
                                    t.eaj(
                                        n,
                                        i,
                                        ((s = e),
                                        ((_ = function () {
                                            return s.caj();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(a)) {
                                    var u = J.r83();
                                    t.eaj(
                                        n,
                                        u,
                                        (function (t) {
                                            var n = function () {
                                                return t.caj();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(e),
                                    ),
                                        a.y9().equals(l()) ? t.gaj(n) : a.taj(new lt(t, n));
                                }
                                var s, _;
                                return e;
                            })(t.sal(), n, a),
                            (function (t, n, a) {
                                var e;
                                if (((a = a === r ? null : a), null != a && Y(a))) e = x();
                                else {
                                    var i = t.i9v(n),
                                        u = null == i || w(i, L) ? i : N();
                                    null == u && ((u = new et()), t.j9v(n, u));
                                    var s = u.kam_1;
                                    if (null == a);
                                    else if (a.y9().equals(l())) {
                                        var c = t.l9v(n);
                                        null == c || c.k9v();
                                    } else a.taj(new it(t, n));
                                    e = s;
                                }
                                return e;
                            })(t.tal(), n, a),
                            (function (t, n, a) {
                                n = n === r ? null : n;
                                var e = (function (t, n, a) {
                                    return (a = a === r ? 0 : a), new at(t, (n = n === r || n), a);
                                })(t, !1, (a = a === r ? 0 : a));
                                if (null == n) e.mak(!0), e.cam();
                                else if (!Y(n)) {
                                    e.mak(n.y9().a3(C()) >= 0), e.cam();
                                    var i =
                                            ((l = e),
                                            function () {
                                                return l.mak(!0), s;
                                            }),
                                        u = (function (t) {
                                            return function () {
                                                return t.mak(!1), s;
                                            };
                                        })(e);
                                    g(
                                        n,
                                        r,
                                        i,
                                        r,
                                        r,
                                        u,
                                        ((c = e),
                                        ((o = function () {
                                            return c.dam(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var c, o;
                                var l;
                                return e;
                            })(t.ual(), a),
                        );
                    });
            })(t.exports, a(519039), a(54279), a(440172), a(538264), a(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.6deb33ba.js.map
