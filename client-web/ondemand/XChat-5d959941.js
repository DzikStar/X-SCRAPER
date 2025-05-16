(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (t, n, e) => {
            "use strict";
            e.d(n, { _: () => b });
            var i = e(381415);
            const r = "https://api.x.com",
                u = 5e3,
                s = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function b(t, n = {}) {
                const e = t instanceof URL ? t : new URL(t, r),
                    { credentials: b = "include", headers: a, signal: c = AbortSignal.timeout(u) } = n,
                    o = new Headers(a);
                if (
                    (function (t) {
                        return ("string" == typeof t && (t.startsWith("https://api.x.com") || t.startsWith("https://x.com/i/api"))) || (t instanceof URL && ("api.x.com" === t.host || t.href.startsWith("https://x.com/i/api")));
                    })(t)
                ) {
                    o.set("Authorization", `Bearer ${s}`);
                    const t = o.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const n = (0, i.Qc)(t);
                        n.auth_token && o.set("x-twitter-auth-type", "OAuth2Session"), n.ct0 && o.set("x-csrf-token", n.ct0);
                    }
                }
                const _ = await fetch(e, { ...n, credentials: b, headers: o, signal: c });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (t, n) => {
            "use strict";
            n.Qc = function (t, n) {
                const e = new b(),
                    i = t.length;
                if (i < 2) return e;
                const r = n?.decode || o;
                let u = 0;
                do {
                    const n = t.indexOf("=", u);
                    if (-1 === n) break;
                    const s = t.indexOf(";", u),
                        b = -1 === s ? i : s;
                    if (n > b) {
                        u = t.lastIndexOf(";", n - 1) + 1;
                        continue;
                    }
                    const o = a(t, u, n),
                        _ = c(t, n, o),
                        l = t.slice(o, _);
                    if (void 0 === e[l]) {
                        let i = a(t, n + 1, b),
                            u = c(t, b, i);
                        const s = r(t.slice(i, u));
                        e[l] = s;
                    }
                    u = b + 1;
                } while (u < i);
                return e;
            };
            const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                i = /^[\u0021-\u003A\u003C-\u007E]*$/,
                r = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                u = /^[\u0020-\u003A\u003D-\u007E]*$/,
                s = Object.prototype.toString,
                b = (() => {
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
                var s = n.$_$.g,
                    b = n.$_$.o6,
                    a = n.$_$.ye,
                    c = n.$_$.l2,
                    o = e.$_$.q,
                    _ = n.$_$.ue,
                    l = e.$_$.a,
                    f = e.$_$.e,
                    h = e.$_$.d,
                    $ = e.$_$.c,
                    v = e.$_$.f,
                    d = e.$_$.g,
                    q = n.$_$.rd,
                    w = n.$_$.vd,
                    k = n.$_$.id,
                    p = n.$_$.vc,
                    y = n.$_$.ge,
                    A = n.$_$.qd,
                    x = i.$_$.b,
                    m = r.$_$.c,
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
                    this.bbt_1 = t;
                }
                function V(t, n, e, i) {
                    (n = n === s ? null : n), (e = e === s ? null : e), (i = i === s ? null : i), (this.cbt_1 = t);
                    this.dbt_1 = null == n ? x() : n;
                    this.ebt_1 =
                        null == e
                            ? (function (t, n) {
                                  n.ea().equals(o()) ? t.zab() : n.ybq(new ut(t));
                                  return t;
                              })(m(), this.cbt_1)
                            : e;
                    this.fbt_1 = null == i ? C() : i;
                    var r,
                        u =
                            (((r = function (t, n, e, i) {
                                return new V(t, n, e, i);
                            }).callableName = "<init>"),
                            r);
                    this.gbt_1 = new X(u);
                }
                function Y(t) {
                    return t.ea().equals(o());
                }
                function tt(t) {
                    t.lbt_1.rbr(t.sbr() && t.kbt_1.sbr());
                }
                function nt(t, n) {
                    (this.obt_1 = n), j.call(this, t);
                }
                function et(t, n, e, i) {
                    (i = i === s ? C() : i), (this.jbt_1 = t), (this.kbt_1 = i);
                    var r,
                        u =
                            ((r = this.kbt_1),
                            function (t) {
                                return (
                                    (function (t, n) {
                                        t.rbs(n);
                                    })(r, t),
                                    b
                                );
                            }),
                        a = (function (t) {
                            var n = function (n) {
                                return t.sbs(n), b;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.kbt_1),
                        c = (function (t) {
                            var n = function () {
                                return t.tbs(), b;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.kbt_1);
                    this.lbt_1 = E(
                        !1,
                        e,
                        u,
                        a,
                        c,
                        (function (t) {
                            return function () {
                                return t.qbs(), b;
                            };
                        })(this.kbt_1),
                    );
                    var o;
                    (this.mbt_1 = new nt(n, this)),
                        this.kbt_1.tbr(
                            ((o = this),
                            function (t) {
                                return tt(o), b;
                            }),
                        );
                }
                function it() {
                    this.pbt_1 = m();
                }
                function rt(t, n) {
                    (this.qbt_1 = t), (this.rbt_1 = n);
                }
                function ut(t) {
                    this.sbt_1 = t;
                }
                function st(t, n) {
                    switch (n.y2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.tbt_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(t.tbt_1), B(t.tbt_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(t.tbt_1);
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
                                switch (t.tbt_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(t.tbt_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(t.tbt_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.tbt_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        F(t.tbt_1);
                                        break;
                                    case 4:
                                        H(t.tbt_1);
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
                                switch (t.tbt_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(t.tbt_1);
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
                function bt(t) {
                    this.ubt_1 = t;
                }
                function at(t, n, e, i) {
                    (this.vbt_1 = t), (this.wbt_1 = n), (this.xbt_1 = e), (this.ybt_1 = i);
                }
                function ct(t, n, e) {
                    this.tbt_1 = t;
                    var i,
                        r,
                        u,
                        s = { _v: n.ea().equals(o()) ? o() : G() },
                        a = { _v: e.ea().equals(o()) ? o() : G() };
                    if ((st(this, Z(s._v, a._v)), !s._v.equals(o()) && !a._v.equals(o()))) {
                        var c = new bt(
                                ((i = s),
                                (r = this),
                                (u = a),
                                function (t) {
                                    return (i._v = t), st(r, Z(t, u._v)), b;
                                }),
                            ),
                            _ = new bt(
                                (function (t, n, e) {
                                    return function (i) {
                                        return (t._v = i), st(n, Z(i, e._v)), b;
                                    };
                                })(a, this, s),
                            );
                        n.ybq(c), e.ybq(_);
                        var l = this.tbt_1;
                        l.ea().equals(o()) ? (n.hbr(c), e.hbr(_)) : l.ybq(new at(n, c, e, _));
                    }
                }
                function ot(t, n) {
                    (this.zbt_1 = t), (this.abu_1 = n);
                }
                q(K, s, s, s, [d]),
                    w(M, "ComponentContextFactory"),
                    q(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", s, s, [M, p]),
                    q(V, "DefaultComponentContext"),
                    q(nt, s, s, j),
                    q(et, "DefaultChildBackHandler"),
                    q(it, "ChildInstanceKeeperProvider", it, s, [L]),
                    q(rt, s, s, s, [d]),
                    q(ut, s, s, s, [d]),
                    q(bt, "CallbacksImpl", s, s, [d]),
                    q(at, s, s, s, [d]),
                    q(ct, "MergedLifecycle"),
                    q(ot, s, s, s, [d]),
                    (_(K).xab = function () {
                        throw c(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).abt = function (t, n, e, i) {
                        return this.bbt_1(t, n, e, i);
                    }),
                    (_(X).a4 = function () {
                        return this.bbt_1;
                    }),
                    (_(X).equals = function (t) {
                        var n;
                        null != t && y(t, M) ? (n = !(null == t || !y(t, p)) && k(this.a4(), t.a4())) : (n = !1);
                        return n;
                    }),
                    (_(X).hashCode = function () {
                        return A(this.a4());
                    }),
                    (_(V).wbs = function () {
                        return this.cbt_1;
                    }),
                    (_(V).xbs = function () {
                        return this.dbt_1;
                    }),
                    (_(V).ybs = function () {
                        return this.ebt_1;
                    }),
                    (_(V).zbs = function () {
                        return this.fbt_1;
                    }),
                    (_(V).vbs = function () {
                        return this.gbt_1;
                    }),
                    (_(nt).nbr = function (t, n, e) {
                        return tt(this.obt_1), b;
                    }),
                    (_(nt).hl = function (t, n, e) {
                        var i = null == n || null != n ? n : N();
                        return this.nbr(t, i, null == e || null != e ? e : N());
                    }),
                    (_(et).rbr = function (t) {
                        return this.mbt_1.kl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.sbr();
                                },
                                function (t, n) {
                                    return t.rbr(n);
                                },
                            ),
                            t,
                        );
                    }),
                    (_(et).sbr = function () {
                        return this.mbt_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.sbr();
                                },
                                function (t, n) {
                                    return t.rbr(n);
                                },
                            ),
                        );
                    }),
                    (_(et).hbt = function () {
                        this.jbt_1.nbs(this.lbt_1) || this.jbt_1.obs(this.lbt_1);
                    }),
                    (_(et).ibt = function () {
                        this.jbt_1.nbs(this.lbt_1) && this.jbt_1.pbs(this.lbt_1);
                    }),
                    (_(et).nbs = function (t) {
                        return this.kbt_1.nbs(t);
                    }),
                    (_(et).obs = function (t) {
                        this.kbt_1.obs(t);
                    }),
                    (_(et).pbs = function (t) {
                        this.kbt_1.pbs(t);
                    }),
                    (_(it).xab = function () {
                        this.pbt_1.zab();
                    }),
                    (_(rt).xab = function () {
                        var t = this.qbt_1.yab(this.rbt_1);
                        null == t || t.xab();
                    }),
                    (_(ut).xab = function () {
                        this.sbt_1.zab();
                    }),
                    (_(bt).ubq = function () {
                        this.ubt_1(S());
                    }),
                    (_(bt).w1b = function () {
                        this.ubt_1(z());
                    }),
                    (_(bt).vbq = function () {
                        this.ubt_1(Q());
                    }),
                    (_(bt).wbq = function () {
                        this.ubt_1(z());
                    }),
                    (_(bt).xbq = function () {
                        this.ubt_1(S());
                    }),
                    (_(bt).xab = function () {
                        this.ubt_1(o());
                    }),
                    (_(at).xab = function () {
                        this.vbt_1.hbr(this.wbt_1), this.xbt_1.hbr(this.ybt_1);
                    }),
                    (_(ct).ybq = function (t) {
                        this.tbt_1.ybq(t);
                    }),
                    (_(ct).hbr = function (t) {
                        this.tbt_1.hbr(t);
                    }),
                    (_(ct).ea = function () {
                        return this.tbt_1.ea();
                    }),
                    (_(ot).xab = function () {
                        this.zbt_1.lbq(this.abu_1);
                    }),
                    (_(K).ubq = l),
                    (_(K).w1b = f),
                    (_(K).vbq = h),
                    (_(K).wbq = $),
                    (_(K).xbq = v),
                    (_(rt).ubq = l),
                    (_(rt).w1b = f),
                    (_(rt).vbq = h),
                    (_(rt).wbq = $),
                    (_(rt).xbq = v),
                    (_(ut).ubq = l),
                    (_(ut).w1b = f),
                    (_(ut).vbq = h),
                    (_(ut).wbq = $),
                    (_(ut).xbq = v),
                    (_(at).ubq = l),
                    (_(at).w1b = f),
                    (_(at).vbq = h),
                    (_(at).wbq = $),
                    (_(at).xbq = v),
                    (_(ot).ubq = l),
                    (_(ot).w1b = f),
                    (_(ot).vbq = h),
                    (_(ot).wbq = $),
                    (_(ot).xbq = v),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = V),
                    (t.$_$.b = function (t, n, e) {
                        if (null == (e = e === s ? null : e));
                        else {
                            if (e.ea().equals(o())) {
                                throw c(a("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.ybq(new K());
                        }
                        return t.vbs().abt(
                            null == e
                                ? t.wbs()
                                : (function (t, n, e) {
                                      return ct.call(e, R(), t, n), e;
                                  })(t.wbs(), e, T(_(ct))),
                            (function (t, n, e) {
                                if (((e = e === s ? null : e), !!t.kbq(n))) {
                                    throw c(a('The key "' + n + '" is already in use.'));
                                }
                                var i = x(t.ibq(n, J.t6d()));
                                if (null == e) {
                                    var r = J.t6d();
                                    t.jbq(
                                        n,
                                        r,
                                        ((b = i),
                                        ((_ = function () {
                                            return b.hbq();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(e)) {
                                    var u = J.t6d();
                                    t.jbq(
                                        n,
                                        u,
                                        (function (t) {
                                            var n = function () {
                                                return t.hbq();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(i),
                                    ),
                                        e.ea().equals(o()) ? t.lbq(n) : e.ybq(new ot(t, n));
                                }
                                var b, _;
                                return i;
                            })(t.xbs(), n, e),
                            (function (t, n, e) {
                                var i;
                                if (((e = e === s ? null : e), null != e && Y(e))) i = m();
                                else {
                                    var r = t.vab(n),
                                        u = null == r || y(r, L) ? r : N();
                                    null == u && ((u = new it()), t.wab(n, u));
                                    var b = u.pbt_1;
                                    if (null == e);
                                    else if (e.ea().equals(o())) {
                                        var a = t.yab(n);
                                        null == a || a.xab();
                                    } else e.ybq(new rt(t, n));
                                    i = b;
                                }
                                return i;
                            })(t.ybs(), n, e),
                            (function (t, n, e) {
                                n = n === s ? null : n;
                                var i = (function (t, n, e) {
                                    return (e = e === s ? 0 : e), new et(t, (n = n === s || n), e);
                                })(t, !1, (e = e === s ? 0 : e));
                                if (null == n) i.rbr(!0), i.hbt();
                                else if (!Y(n)) {
                                    i.rbr(n.ea().b3(z()) >= 0), i.hbt();
                                    var r =
                                            ((o = i),
                                            function () {
                                                return o.rbr(!0), b;
                                            }),
                                        u = (function (t) {
                                            return function () {
                                                return t.rbr(!1), b;
                                            };
                                        })(i);
                                    g(
                                        n,
                                        s,
                                        r,
                                        s,
                                        s,
                                        u,
                                        ((a = i),
                                        ((c = function () {
                                            return a.ibt(), b;
                                        }).callableName = "stop"),
                                        c),
                                    );
                                }
                                var a, c;
                                var o;
                                return i;
                            })(t.zbs(), e),
                        );
                    });
            })(t.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.a6fb6c2a.js.map
