(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (n, t, e) => {
            "use strict";
            e.d(t, { _: () => c });
            var i = e(381415);
            const u = "https://api.x.com",
                b = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function c(n, t = {}) {
                const e = n instanceof URL ? n : new URL(n, u),
                    { credentials: c = "include", headers: s, signal: a = AbortSignal.timeout(b) } = t,
                    o = new Headers(s);
                if (
                    (function (n) {
                        return ("string" == typeof n && (n.startsWith("https://api.x.com") || n.startsWith("https://x.com/i/api"))) || (n instanceof URL && ("api.x.com" === n.host || n.href.startsWith("https://x.com/i/api")));
                    })(n)
                ) {
                    o.set("Authorization", `Bearer ${r}`);
                    const n = o.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (n) {
                        const t = (0, i.Qc)(n);
                        t.auth_token && o.set("x-twitter-auth-type", "OAuth2Session"), t.ct0 && o.set("x-csrf-token", t.ct0);
                    }
                }
                const _ = await fetch(e, { ...t, credentials: c, headers: o, signal: a });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (n, t) => {
            "use strict";
            t.Qc = function (n, t) {
                const e = new c(),
                    i = n.length;
                if (i < 2) return e;
                const u = t?.decode || o;
                let b = 0;
                do {
                    const t = n.indexOf("=", b);
                    if (-1 === t) break;
                    const r = n.indexOf(";", b),
                        c = -1 === r ? i : r;
                    if (t > c) {
                        b = n.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const o = s(n, b, t),
                        _ = a(n, t, o),
                        l = n.slice(o, _);
                    if (void 0 === e[l]) {
                        let i = s(n, t + 1, c),
                            b = a(n, c, i);
                        const r = u(n.slice(i, b));
                        e[l] = r;
                    }
                    b = c + 1;
                } while (b < i);
                return e;
            };
            const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                i = /^[\u0021-\u003A\u003C-\u007E]*$/,
                u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                b = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                c = (() => {
                    const n = function () {};
                    return (n.prototype = Object.create(null)), n;
                })();
            function s(n, t, e) {
                do {
                    const e = n.charCodeAt(t);
                    if (32 !== e && 9 !== e) return t;
                } while (++t < e);
                return e;
            }
            function a(n, t, e) {
                for (; t > e; ) {
                    const e = n.charCodeAt(--t);
                    if (32 !== e && 9 !== e) return t + 1;
                }
                return e;
            }
            function o(n) {
                if (-1 === n.indexOf("%")) return n;
                try {
                    return decodeURIComponent(n);
                } catch (t) {
                    return n;
                }
            }
        },
        594839: (n, t, e) => {
            !(function (n, t, e, i, u, b) {
                "use strict";
                var r = t.$_$.g,
                    c = t.$_$.o6,
                    s = t.$_$.xe,
                    a = t.$_$.l2,
                    o = e.$_$.q,
                    _ = t.$_$.te,
                    l = e.$_$.a,
                    f = e.$_$.e,
                    h = e.$_$.d,
                    $ = e.$_$.c,
                    p = e.$_$.f,
                    d = e.$_$.g,
                    k = t.$_$.qd,
                    v = t.$_$.ud,
                    w = t.$_$.hd,
                    m = t.$_$.uc,
                    A = t.$_$.fe,
                    y = t.$_$.pd,
                    C = i.$_$.b,
                    x = u.$_$.c,
                    g = b.$_$.b,
                    q = e.$_$.t,
                    j = e.$_$.o,
                    z = t.$_$.ze,
                    N = t.$_$.kj,
                    E = b.$_$.a,
                    I = (t.$_$.a6, t.$_$.rf),
                    O = t.$_$.nd,
                    L = u.$_$.a,
                    R = e.$_$.h,
                    T = t.$_$.se,
                    U = t.$_$.lk,
                    W = e.$_$.i,
                    B = e.$_$.j,
                    D = e.$_$.n,
                    F = e.$_$.m,
                    H = e.$_$.k,
                    P = e.$_$.l,
                    S = e.$_$.p,
                    Q = e.$_$.s,
                    Z = t.$_$.zb,
                    G = e.$_$.r,
                    J = i.$_$.c;
                function K() {}
                function M() {}
                function X(n) {
                    this.sb5_1 = n;
                }
                function V(n, t, e, i) {
                    (t = t === r ? null : t), (e = e === r ? null : e), (i = i === r ? null : i), (this.tb5_1 = n);
                    this.ub5_1 = null == t ? C() : t;
                    this.vb5_1 =
                        null == e
                            ? (function (n, t) {
                                  t.ea().equals(o()) ? n.p9p() : t.pb3(new rn(n));
                                  return n;
                              })(x(), this.tb5_1)
                            : e;
                    this.wb5_1 = null == i ? g() : i;
                    var u,
                        b =
                            (((u = function (n, t, e, i) {
                                return new V(n, t, e, i);
                            }).callableName = "<init>"),
                            u);
                    this.xb5_1 = new X(b);
                }
                function Y(n) {
                    return n.ea().equals(o());
                }
                function nn(n) {
                    n.cb6_1.ib4(n.jb4() && n.bb6_1.jb4());
                }
                function tn(n, t) {
                    (this.fb6_1 = t), z.call(this, n);
                }
                function en(n, t, e, i) {
                    (i = i === r ? g() : i), (this.ab6_1 = n), (this.bb6_1 = i);
                    var u,
                        b =
                            ((u = this.bb6_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.ib5(t);
                                    })(u, n),
                                    c
                                );
                            }),
                        s = (function (n) {
                            var t = function (t) {
                                return n.jb5(t), c;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.bb6_1),
                        a = (function (n) {
                            var t = function () {
                                return n.kb5(), c;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.bb6_1);
                    this.cb6_1 = E(
                        !1,
                        e,
                        b,
                        s,
                        a,
                        (function (n) {
                            return function () {
                                return n.hb5(), c;
                            };
                        })(this.bb6_1),
                    );
                    var o;
                    (this.db6_1 = new tn(t, this)),
                        this.bb6_1.kb4(
                            ((o = this),
                            function (n) {
                                return nn(o), c;
                            }),
                        );
                }
                function un() {
                    this.gb6_1 = x();
                }
                function bn(n, t) {
                    (this.hb6_1 = n), (this.ib6_1 = t);
                }
                function rn(n) {
                    this.jb6_1 = n;
                }
                function cn(n, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.kb6_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(n.kb6_1), B(n.kb6_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(n.kb6_1);
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
                                switch (n.kb6_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(n.kb6_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(n.kb6_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.kb6_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        F(n.kb6_1);
                                        break;
                                    case 4:
                                        H(n.kb6_1);
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
                                switch (n.kb6_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(n.kb6_1);
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
                    this.lb6_1 = n;
                }
                function an(n, t, e, i) {
                    (this.mb6_1 = n), (this.nb6_1 = t), (this.ob6_1 = e), (this.pb6_1 = i);
                }
                function on(n, t, e) {
                    this.kb6_1 = n;
                    var i,
                        u,
                        b,
                        r = { _v: t.ea().equals(o()) ? o() : G() },
                        s = { _v: e.ea().equals(o()) ? o() : G() };
                    if ((cn(this, Z(r._v, s._v)), !r._v.equals(o()) && !s._v.equals(o()))) {
                        var a = new sn(
                                ((i = r),
                                (u = this),
                                (b = s),
                                function (n) {
                                    return (i._v = n), cn(u, Z(n, b._v)), c;
                                }),
                            ),
                            _ = new sn(
                                (function (n, t, e) {
                                    return function (i) {
                                        return (n._v = i), cn(t, Z(i, e._v)), c;
                                    };
                                })(s, this, r),
                            );
                        t.pb3(a), e.pb3(_);
                        var l = this.kb6_1;
                        l.ea().equals(o()) ? (t.yb3(a), e.yb3(_)) : l.pb3(new an(t, a, e, _));
                    }
                }
                function _n(n, t) {
                    (this.qb6_1 = n), (this.rb6_1 = t);
                }
                k(K, r, r, r, [d]),
                    v(M, "ComponentContextFactory"),
                    k(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, m]),
                    k(V, "DefaultComponentContext"),
                    k(tn, r, r, z),
                    k(en, "DefaultChildBackHandler"),
                    k(un, "ChildInstanceKeeperProvider", un, r, [L]),
                    k(bn, r, r, r, [d]),
                    k(rn, r, r, r, [d]),
                    k(sn, "CallbacksImpl", r, r, [d]),
                    k(an, r, r, r, [d]),
                    k(on, "MergedLifecycle"),
                    k(_n, r, r, r, [d]),
                    (_(K).n9p = function () {
                        throw a(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).rb5 = function (n, t, e, i) {
                        return this.sb5_1(n, t, e, i);
                    }),
                    (_(X).a4 = function () {
                        return this.sb5_1;
                    }),
                    (_(X).equals = function (n) {
                        var t;
                        null != n && A(n, M) ? (t = !(null == n || !A(n, m)) && w(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (_(X).hashCode = function () {
                        return y(this.a4());
                    }),
                    (_(V).nb5 = function () {
                        return this.tb5_1;
                    }),
                    (_(V).ob5 = function () {
                        return this.ub5_1;
                    }),
                    (_(V).pb5 = function () {
                        return this.vb5_1;
                    }),
                    (_(V).qb5 = function () {
                        return this.wb5_1;
                    }),
                    (_(V).mb5 = function () {
                        return this.xb5_1;
                    }),
                    (_(tn).eb4 = function (n, t, e) {
                        return nn(this.fb6_1), c;
                    }),
                    (_(tn).gl = function (n, t, e) {
                        var i = null == t || null != t ? t : N();
                        return this.eb4(n, i, null == e || null != e ? e : N());
                    }),
                    (_(en).ib4 = function (n) {
                        return this.db6_1.jl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.jb4();
                                },
                                function (n, t) {
                                    return n.ib4(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(en).jb4 = function () {
                        return this.db6_1.cl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.jb4();
                                },
                                function (n, t) {
                                    return n.ib4(t);
                                },
                            ),
                        );
                    }),
                    (_(en).yb5 = function () {
                        this.ab6_1.eb5(this.cb6_1) || this.ab6_1.fb5(this.cb6_1);
                    }),
                    (_(en).zb5 = function () {
                        this.ab6_1.eb5(this.cb6_1) && this.ab6_1.gb5(this.cb6_1);
                    }),
                    (_(en).eb5 = function (n) {
                        return this.bb6_1.eb5(n);
                    }),
                    (_(en).fb5 = function (n) {
                        this.bb6_1.fb5(n);
                    }),
                    (_(en).gb5 = function (n) {
                        this.bb6_1.gb5(n);
                    }),
                    (_(un).n9p = function () {
                        this.gb6_1.p9p();
                    }),
                    (_(bn).n9p = function () {
                        var n = this.hb6_1.o9p(this.ib6_1);
                        null == n || n.n9p();
                    }),
                    (_(rn).n9p = function () {
                        this.jb6_1.p9p();
                    }),
                    (_(sn).lb3 = function () {
                        this.lb6_1(S());
                    }),
                    (_(sn).u1b = function () {
                        this.lb6_1(q());
                    }),
                    (_(sn).mb3 = function () {
                        this.lb6_1(Q());
                    }),
                    (_(sn).nb3 = function () {
                        this.lb6_1(q());
                    }),
                    (_(sn).ob3 = function () {
                        this.lb6_1(S());
                    }),
                    (_(sn).n9p = function () {
                        this.lb6_1(o());
                    }),
                    (_(an).n9p = function () {
                        this.mb6_1.yb3(this.nb6_1), this.ob6_1.yb3(this.pb6_1);
                    }),
                    (_(on).pb3 = function (n) {
                        this.kb6_1.pb3(n);
                    }),
                    (_(on).yb3 = function (n) {
                        this.kb6_1.yb3(n);
                    }),
                    (_(on).ea = function () {
                        return this.kb6_1.ea();
                    }),
                    (_(_n).n9p = function () {
                        this.qb6_1.cb3(this.rb6_1);
                    }),
                    (_(K).lb3 = l),
                    (_(K).u1b = f),
                    (_(K).mb3 = h),
                    (_(K).nb3 = $),
                    (_(K).ob3 = p),
                    (_(bn).lb3 = l),
                    (_(bn).u1b = f),
                    (_(bn).mb3 = h),
                    (_(bn).nb3 = $),
                    (_(bn).ob3 = p),
                    (_(rn).lb3 = l),
                    (_(rn).u1b = f),
                    (_(rn).mb3 = h),
                    (_(rn).nb3 = $),
                    (_(rn).ob3 = p),
                    (_(an).lb3 = l),
                    (_(an).u1b = f),
                    (_(an).mb3 = h),
                    (_(an).nb3 = $),
                    (_(an).ob3 = p),
                    (_(_n).lb3 = l),
                    (_(_n).u1b = f),
                    (_(_n).mb3 = h),
                    (_(_n).nb3 = $),
                    (_(_n).ob3 = p),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = V),
                    (n.$_$.b = function (n, t, e) {
                        if (null == (e = e === r ? null : e));
                        else {
                            if (e.ea().equals(o())) {
                                throw a(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.pb3(new K());
                        }
                        return n.mb5().rb5(
                            null == e
                                ? n.nb5()
                                : (function (n, t, e) {
                                      return on.call(e, R(), n, t), e;
                                  })(n.nb5(), e, T(_(on))),
                            (function (n, t, e) {
                                if (((e = e === r ? null : e), !!n.bb3(t))) {
                                    throw a(s('The key "' + t + '" is already in use.'));
                                }
                                var i = C(n.zb2(t, J.w6c()));
                                if (null == e) {
                                    var u = J.w6c();
                                    n.ab3(
                                        t,
                                        u,
                                        ((c = i),
                                        ((_ = function () {
                                            return c.yb2();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(e)) {
                                    var b = J.w6c();
                                    n.ab3(
                                        t,
                                        b,
                                        (function (n) {
                                            var t = function () {
                                                return n.yb2();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(i),
                                    ),
                                        e.ea().equals(o()) ? n.cb3(t) : e.pb3(new _n(n, t));
                                }
                                var c, _;
                                return i;
                            })(n.ob5(), t, e),
                            (function (n, t, e) {
                                var i;
                                if (((e = e === r ? null : e), null != e && Y(e))) i = x();
                                else {
                                    var u = n.l9p(t),
                                        b = null == u || A(u, L) ? u : N();
                                    null == b && ((b = new un()), n.m9p(t, b));
                                    var c = b.gb6_1;
                                    if (null == e);
                                    else if (e.ea().equals(o())) {
                                        var s = n.o9p(t);
                                        null == s || s.n9p();
                                    } else e.pb3(new bn(n, t));
                                    i = c;
                                }
                                return i;
                            })(n.pb5(), t, e),
                            (function (n, t, e) {
                                t = t === r ? null : t;
                                var i = (function (n, t, e) {
                                    return (e = e === r ? 0 : e), new en(n, (t = t === r || t), e);
                                })(n, !1, (e = e === r ? 0 : e));
                                if (null == t) i.ib4(!0), i.yb5();
                                else if (!Y(t)) {
                                    i.ib4(t.ea().b3(q()) >= 0), i.yb5();
                                    var u =
                                            ((o = i),
                                            function () {
                                                return o.ib4(!0), c;
                                            }),
                                        b = (function (n) {
                                            return function () {
                                                return n.ib4(!1), c;
                                            };
                                        })(i);
                                    j(
                                        t,
                                        r,
                                        u,
                                        r,
                                        r,
                                        b,
                                        ((s = i),
                                        ((a = function () {
                                            return s.zb5(), c;
                                        }).callableName = "stop"),
                                        a),
                                    );
                                }
                                var s, a;
                                var o;
                                return i;
                            })(n.qb5(), e),
                        );
                    });
            })(n.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.75c6280a.js.map
