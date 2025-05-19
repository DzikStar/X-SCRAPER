(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (t, n, e) => {
            "use strict";
            e.d(n, { _: () => s });
            var i = e(381415);
            const r = "https://api.x.com",
                u = 5e3,
                b = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function s(t, n = {}) {
                const e = t instanceof URL ? t : new URL(t, r),
                    { credentials: s = "include", headers: a, signal: c = AbortSignal.timeout(u) } = n,
                    o = new Headers(a);
                if (
                    (function (t) {
                        return ("string" == typeof t && (t.startsWith("https://api.x.com") || t.startsWith("https://x.com/i/api"))) || (t instanceof URL && ("api.x.com" === t.host || t.href.startsWith("https://x.com/i/api")));
                    })(t)
                ) {
                    o.set("Authorization", `Bearer ${b}`);
                    const t = o.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const n = (0, i.Qc)(t);
                        n.auth_token && o.set("x-twitter-auth-type", "OAuth2Session"), n.ct0 && o.set("x-csrf-token", n.ct0);
                    }
                }
                const _ = await fetch(e, { ...n, credentials: s, headers: o, signal: c });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (t, n) => {
            "use strict";
            n.Qc = function (t, n) {
                const e = new s(),
                    i = t.length;
                if (i < 2) return e;
                const r = n?.decode || o;
                let u = 0;
                do {
                    const n = t.indexOf("=", u);
                    if (-1 === n) break;
                    const b = t.indexOf(";", u),
                        s = -1 === b ? i : b;
                    if (n > s) {
                        u = t.lastIndexOf(";", n - 1) + 1;
                        continue;
                    }
                    const o = a(t, u, n),
                        _ = c(t, n, o),
                        f = t.slice(o, _);
                    if (void 0 === e[f]) {
                        let i = a(t, n + 1, s),
                            u = c(t, s, i);
                        const b = r(t.slice(i, u));
                        e[f] = b;
                    }
                    u = s + 1;
                } while (u < i);
                return e;
            };
            const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                i = /^[\u0021-\u003A\u003C-\u007E]*$/,
                r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                u = /^[\u0020-\u003A\u003D-\u007E]*$/,
                b = Object.prototype.toString,
                s = (() => {
                    const t = function () {};
                    return (t.prototype = Object.create(null)), t;
                })();
            function a(t, n, e) {
                do {
                    const e = t.charCodeAt(n);
                    if (32 !== e && 9 !== e) return n;
                } while (++n < e);
                return e;
            }
            function c(t, n, e) {
                for (; n > e; ) {
                    const e = t.charCodeAt(--n);
                    if (32 !== e && 9 !== e) return n + 1;
                }
                return e;
            }
            function o(t) {
                if (-1 === t.indexOf("%")) return t;
                try {
                    return decodeURIComponent(t);
                } catch (n) {
                    return t;
                }
            }
        },
        594839: (t, n, e) => {
            !(function (t, n, e, i, r, u) {
                "use strict";
                var b = n.$_$.g,
                    s = n.$_$.o6,
                    a = n.$_$.ye,
                    c = n.$_$.l2,
                    o = e.$_$.q,
                    _ = n.$_$.ue,
                    f = e.$_$.a,
                    l = e.$_$.e,
                    h = e.$_$.d,
                    $ = e.$_$.c,
                    d = e.$_$.f,
                    w = e.$_$.g,
                    v = n.$_$.rd,
                    k = n.$_$.vd,
                    q = n.$_$.id,
                    p = n.$_$.vc,
                    m = n.$_$.ge,
                    A = n.$_$.qd,
                    y = i.$_$.b,
                    x = r.$_$.c,
                    C = u.$_$.b,
                    z = e.$_$.t,
                    g = e.$_$.o,
                    j = n.$_$.af,
                    N = n.$_$.lj,
                    E = u.$_$.a,
                    I = (n.$_$.a6, n.$_$.sf),
                    O = n.$_$.od,
                    L = r.$_$.a,
                    R = e.$_$.h,
                    T = n.$_$.te,
                    U = n.$_$.mk,
                    W = e.$_$.i,
                    B = e.$_$.j,
                    D = e.$_$.n,
                    F = e.$_$.m,
                    H = e.$_$.k,
                    P = e.$_$.l,
                    S = e.$_$.p,
                    Q = e.$_$.s,
                    Z = n.$_$.ac,
                    G = e.$_$.r,
                    J = i.$_$.c;
                function K() {}
                function M() {}
                function X(t) {
                    this.ebt_1 = t;
                }
                function V(t, n, e, i) {
                    (n = n === b ? null : n), (e = e === b ? null : e), (i = i === b ? null : i), (this.fbt_1 = t);
                    this.gbt_1 = null == n ? y() : n;
                    this.hbt_1 =
                        null == e
                            ? (function (t, n) {
                                  n.ea().equals(o()) ? t.cac() : n.bbr(new ut(t));
                                  return t;
                              })(x(), this.fbt_1)
                            : e;
                    this.ibt_1 = null == i ? C() : i;
                    var r,
                        u =
                            (((r = function (t, n, e, i) {
                                return new V(t, n, e, i);
                            }).callableName = "<init>"),
                            r);
                    this.jbt_1 = new X(u);
                }
                function Y(t) {
                    return t.ea().equals(o());
                }
                function tt(t) {
                    t.obt_1.ubr(t.vbr() && t.nbt_1.vbr());
                }
                function nt(t, n) {
                    (this.rbt_1 = n), j.call(this, t);
                }
                function et(t, n, e, i) {
                    (i = i === b ? C() : i), (this.mbt_1 = t), (this.nbt_1 = i);
                    var r,
                        u =
                            ((r = this.nbt_1),
                            function (t) {
                                return (
                                    (function (t, n) {
                                        t.ubs(n);
                                    })(r, t),
                                    s
                                );
                            }),
                        a = (function (t) {
                            var n = function (n) {
                                return t.vbs(n), s;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.nbt_1),
                        c = (function (t) {
                            var n = function () {
                                return t.wbs(), s;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.nbt_1);
                    this.obt_1 = E(
                        !1,
                        e,
                        u,
                        a,
                        c,
                        (function (t) {
                            return function () {
                                return t.tbs(), s;
                            };
                        })(this.nbt_1),
                    );
                    var o;
                    (this.pbt_1 = new nt(n, this)),
                        this.nbt_1.wbr(
                            ((o = this),
                            function (t) {
                                return tt(o), s;
                            }),
                        );
                }
                function it() {
                    this.sbt_1 = x();
                }
                function rt(t, n) {
                    (this.tbt_1 = t), (this.ubt_1 = n);
                }
                function ut(t) {
                    this.vbt_1 = t;
                }
                function bt(t, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.wbt_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(t.wbt_1), B(t.wbt_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(t.wbt_1);
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
                                switch (t.wbt_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(t.wbt_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(t.wbt_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.wbt_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        F(t.wbt_1);
                                        break;
                                    case 4:
                                        H(t.wbt_1);
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
                                switch (t.wbt_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(t.wbt_1);
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
                    this.xbt_1 = t;
                }
                function at(t, n, e, i) {
                    (this.ybt_1 = t), (this.zbt_1 = n), (this.abu_1 = e), (this.bbu_1 = i);
                }
                function ct(t, n, e) {
                    this.wbt_1 = t;
                    var i,
                        r,
                        u,
                        b = { _v: n.ea().equals(o()) ? o() : G() },
                        a = { _v: e.ea().equals(o()) ? o() : G() };
                    if ((bt(this, Z(b._v, a._v)), !b._v.equals(o()) && !a._v.equals(o()))) {
                        var c = new st(
                                ((i = b),
                                (r = this),
                                (u = a),
                                function (t) {
                                    return (i._v = t), bt(r, Z(t, u._v)), s;
                                }),
                            ),
                            _ = new st(
                                (function (t, n, e) {
                                    return function (i) {
                                        return (t._v = i), bt(n, Z(i, e._v)), s;
                                    };
                                })(a, this, b),
                            );
                        n.bbr(c), e.bbr(_);
                        var f = this.wbt_1;
                        f.ea().equals(o()) ? (n.kbr(c), e.kbr(_)) : f.bbr(new at(n, c, e, _));
                    }
                }
                function ot(t, n) {
                    (this.cbu_1 = t), (this.dbu_1 = n);
                }
                v(K, b, b, b, [w]),
                    k(M, "ComponentContextFactory"),
                    v(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", b, b, [M, p]),
                    v(V, "DefaultComponentContext"),
                    v(nt, b, b, j),
                    v(et, "DefaultChildBackHandler"),
                    v(it, "ChildInstanceKeeperProvider", it, b, [L]),
                    v(rt, b, b, b, [w]),
                    v(ut, b, b, b, [w]),
                    v(st, "CallbacksImpl", b, b, [w]),
                    v(at, b, b, b, [w]),
                    v(ct, "MergedLifecycle"),
                    v(ot, b, b, b, [w]),
                    (_(K).aac = function () {
                        throw c(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).dbt = function (t, n, e, i) {
                        return this.ebt_1(t, n, e, i);
                    }),
                    (_(X).a4 = function () {
                        return this.ebt_1;
                    }),
                    (_(X).equals = function (t) {
                        var n;
                        null != t && m(t, M) ? (n = !(null == t || !m(t, p)) && q(this.a4(), t.a4())) : (n = !1);
                        return n;
                    }),
                    (_(X).hashCode = function () {
                        return A(this.a4());
                    }),
                    (_(V).zbs = function () {
                        return this.fbt_1;
                    }),
                    (_(V).abt = function () {
                        return this.gbt_1;
                    }),
                    (_(V).bbt = function () {
                        return this.hbt_1;
                    }),
                    (_(V).cbt = function () {
                        return this.ibt_1;
                    }),
                    (_(V).ybs = function () {
                        return this.jbt_1;
                    }),
                    (_(nt).qbr = function (t, n, e) {
                        return tt(this.rbt_1), s;
                    }),
                    (_(nt).hl = function (t, n, e) {
                        var i = null == n || null != n ? n : N();
                        return this.qbr(t, i, null == e || null != e ? e : N());
                    }),
                    (_(et).ubr = function (t) {
                        return this.pbt_1.kl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.vbr();
                                },
                                function (t, n) {
                                    return t.ubr(n);
                                },
                            ),
                            t,
                        );
                    }),
                    (_(et).vbr = function () {
                        return this.pbt_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.vbr();
                                },
                                function (t, n) {
                                    return t.ubr(n);
                                },
                            ),
                        );
                    }),
                    (_(et).kbt = function () {
                        this.mbt_1.qbs(this.obt_1) || this.mbt_1.rbs(this.obt_1);
                    }),
                    (_(et).lbt = function () {
                        this.mbt_1.qbs(this.obt_1) && this.mbt_1.sbs(this.obt_1);
                    }),
                    (_(et).qbs = function (t) {
                        return this.nbt_1.qbs(t);
                    }),
                    (_(et).rbs = function (t) {
                        this.nbt_1.rbs(t);
                    }),
                    (_(et).sbs = function (t) {
                        this.nbt_1.sbs(t);
                    }),
                    (_(it).aac = function () {
                        this.sbt_1.cac();
                    }),
                    (_(rt).aac = function () {
                        var t = this.tbt_1.bac(this.ubt_1);
                        null == t || t.aac();
                    }),
                    (_(ut).aac = function () {
                        this.vbt_1.cac();
                    }),
                    (_(st).xbq = function () {
                        this.xbt_1(S());
                    }),
                    (_(st).w1b = function () {
                        this.xbt_1(z());
                    }),
                    (_(st).ybq = function () {
                        this.xbt_1(Q());
                    }),
                    (_(st).zbq = function () {
                        this.xbt_1(z());
                    }),
                    (_(st).abr = function () {
                        this.xbt_1(S());
                    }),
                    (_(st).aac = function () {
                        this.xbt_1(o());
                    }),
                    (_(at).aac = function () {
                        this.ybt_1.kbr(this.zbt_1), this.abu_1.kbr(this.bbu_1);
                    }),
                    (_(ct).bbr = function (t) {
                        this.wbt_1.bbr(t);
                    }),
                    (_(ct).kbr = function (t) {
                        this.wbt_1.kbr(t);
                    }),
                    (_(ct).ea = function () {
                        return this.wbt_1.ea();
                    }),
                    (_(ot).aac = function () {
                        this.cbu_1.obq(this.dbu_1);
                    }),
                    (_(K).xbq = f),
                    (_(K).w1b = l),
                    (_(K).ybq = h),
                    (_(K).zbq = $),
                    (_(K).abr = d),
                    (_(rt).xbq = f),
                    (_(rt).w1b = l),
                    (_(rt).ybq = h),
                    (_(rt).zbq = $),
                    (_(rt).abr = d),
                    (_(ut).xbq = f),
                    (_(ut).w1b = l),
                    (_(ut).ybq = h),
                    (_(ut).zbq = $),
                    (_(ut).abr = d),
                    (_(at).xbq = f),
                    (_(at).w1b = l),
                    (_(at).ybq = h),
                    (_(at).zbq = $),
                    (_(at).abr = d),
                    (_(ot).xbq = f),
                    (_(ot).w1b = l),
                    (_(ot).ybq = h),
                    (_(ot).zbq = $),
                    (_(ot).abr = d),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = V),
                    (t.$_$.b = function (t, n, e) {
                        if (null == (e = e === b ? null : e));
                        else {
                            if (e.ea().equals(o())) {
                                throw c(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.bbr(new K());
                        }
                        return t.ybs().dbt(
                            null == e
                                ? t.zbs()
                                : (function (t, n, e) {
                                      return ct.call(e, R(), t, n), e;
                                  })(t.zbs(), e, T(_(ct))),
                            (function (t, n, e) {
                                if (((e = e === b ? null : e), !!t.nbq(n))) {
                                    throw c(a('The key "' + n + '" is already in use.'));
                                }
                                var i = y(t.lbq(n, J.t6d()));
                                if (null == e) {
                                    var r = J.t6d();
                                    t.mbq(
                                        n,
                                        r,
                                        ((s = i),
                                        ((_ = function () {
                                            return s.kbq();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(e)) {
                                    var u = J.t6d();
                                    t.mbq(
                                        n,
                                        u,
                                        (function (t) {
                                            var n = function () {
                                                return t.kbq();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(i),
                                    ),
                                        e.ea().equals(o()) ? t.obq(n) : e.bbr(new ot(t, n));
                                }
                                var s, _;
                                return i;
                            })(t.abt(), n, e),
                            (function (t, n, e) {
                                var i;
                                if (((e = e === b ? null : e), null != e && Y(e))) i = x();
                                else {
                                    var r = t.yab(n),
                                        u = null == r || m(r, L) ? r : N();
                                    null == u && ((u = new it()), t.zab(n, u));
                                    var s = u.sbt_1;
                                    if (null == e);
                                    else if (e.ea().equals(o())) {
                                        var a = t.bac(n);
                                        null == a || a.aac();
                                    } else e.bbr(new rt(t, n));
                                    i = s;
                                }
                                return i;
                            })(t.bbt(), n, e),
                            (function (t, n, e) {
                                n = n === b ? null : n;
                                var i = (function (t, n, e) {
                                    return (e = e === b ? 0 : e), new et(t, (n = n === b || n), e);
                                })(t, !1, (e = e === b ? 0 : e));
                                if (null == n) i.ubr(!0), i.kbt();
                                else if (!Y(n)) {
                                    i.ubr(n.ea().b3(z()) >= 0), i.kbt();
                                    var r =
                                            ((o = i),
                                            function () {
                                                return o.ubr(!0), s;
                                            }),
                                        u = (function (t) {
                                            return function () {
                                                return t.ubr(!1), s;
                                            };
                                        })(i);
                                    g(
                                        n,
                                        b,
                                        r,
                                        b,
                                        b,
                                        u,
                                        ((a = i),
                                        ((c = function () {
                                            return a.lbt(), s;
                                        }).callableName = "stop"),
                                        c),
                                    );
                                }
                                var a, c;
                                var o;
                                return i;
                            })(t.cbt(), e),
                        );
                    });
            })(t.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.9797317a.js.map
