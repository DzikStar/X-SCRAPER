(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (a, t, n) => {
            "use strict";
            n.d(t, { _: () => c });
            var e = n(381415);
            const u = "https://api.x.com",
                i = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function c(a, t = {}) {
                const n = a instanceof URL ? a : new URL(a, u),
                    { credentials: c = "include", headers: s, signal: o = AbortSignal.timeout(i) } = t,
                    f = new Headers(s);
                if (
                    (function (a) {
                        return ("string" == typeof a && (a.startsWith("https://api.x.com") || a.startsWith("https://x.com/i/api"))) || (a instanceof URL && ("api.x.com" === a.host || a.href.startsWith("https://x.com/i/api")));
                    })(a)
                ) {
                    f.set("Authorization", `Bearer ${r}`);
                    const a = f.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (a) {
                        const t = (0, e.Qc)(a);
                        t.auth_token && f.set("x-twitter-auth-type", "OAuth2Session"), t.ct0 && f.set("x-csrf-token", t.ct0);
                    }
                }
                const _ = await fetch(n, { ...t, credentials: c, headers: f, signal: o });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (a, t) => {
            "use strict";
            t.Qc = function (a, t) {
                const n = new c(),
                    e = a.length;
                if (e < 2) return n;
                const u = t?.decode || f;
                let i = 0;
                do {
                    const t = a.indexOf("=", i);
                    if (-1 === t) break;
                    const r = a.indexOf(";", i),
                        c = -1 === r ? e : r;
                    if (t > c) {
                        i = a.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const f = s(a, i, t),
                        _ = o(a, t, f),
                        l = a.slice(f, _);
                    if (void 0 === n[l]) {
                        let e = s(a, t + 1, c),
                            i = o(a, c, e);
                        const r = u(a.slice(e, i));
                        n[l] = r;
                    }
                    i = c + 1;
                } while (i < e);
                return n;
            };
            const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                c = (() => {
                    const a = function () {};
                    return (a.prototype = Object.create(null)), a;
                })();
            function s(a, t, n) {
                do {
                    const n = a.charCodeAt(t);
                    if (32 !== n && 9 !== n) return t;
                } while (++t < n);
                return n;
            }
            function o(a, t, n) {
                for (; t > n; ) {
                    const n = a.charCodeAt(--t);
                    if (32 !== n && 9 !== n) return t + 1;
                }
                return n;
            }
            function f(a) {
                if (-1 === a.indexOf("%")) return a;
                try {
                    return decodeURIComponent(a);
                } catch (t) {
                    return a;
                }
            }
        },
        594839: (a, t, n) => {
            !(function (a, t, n, e, u, i) {
                "use strict";
                var r = t.$_$.g,
                    c = t.$_$.n6,
                    s = t.$_$.se,
                    o = t.$_$.l2,
                    f = n.$_$.q,
                    _ = t.$_$.oe,
                    l = n.$_$.a,
                    h = n.$_$.e,
                    w = n.$_$.d,
                    $ = n.$_$.c,
                    v = n.$_$.f,
                    d = n.$_$.g,
                    x = t.$_$.ld,
                    b = t.$_$.pd,
                    p = t.$_$.cd,
                    y = t.$_$.pc,
                    k = t.$_$.ae,
                    A = t.$_$.kd,
                    m = e.$_$.b,
                    C = u.$_$.c,
                    z = i.$_$.b,
                    g = n.$_$.t,
                    q = n.$_$.o,
                    j = t.$_$.ue,
                    N = t.$_$.fj,
                    E = i.$_$.a,
                    I = (t.$_$.z5, t.$_$.mf),
                    O = t.$_$.id,
                    L = u.$_$.a,
                    R = n.$_$.h,
                    T = t.$_$.ne,
                    U = t.$_$.gk,
                    W = n.$_$.i,
                    B = n.$_$.j,
                    D = n.$_$.n,
                    F = n.$_$.m,
                    H = n.$_$.k,
                    P = n.$_$.l,
                    S = n.$_$.p,
                    Q = n.$_$.s,
                    Z = t.$_$.ub,
                    G = n.$_$.r,
                    J = e.$_$.c;
                function K() {}
                function M() {}
                function X(a) {
                    this.iaw_1 = a;
                }
                function V(a, t, n, e) {
                    (t = t === r ? null : t), (n = n === r ? null : n), (e = e === r ? null : e), (this.jaw_1 = a);
                    this.kaw_1 = null == t ? m() : t;
                    this.law_1 =
                        null == n
                            ? (function (a, t) {
                                  t.y9().equals(f()) ? a.ga3() : t.fau(new ia(a));
                                  return a;
                              })(C(), this.jaw_1)
                            : n;
                    this.maw_1 = null == e ? z() : e;
                    var u,
                        i =
                            (((u = function (a, t, n, e) {
                                return new V(a, t, n, e);
                            }).callableName = "<init>"),
                            u);
                    this.naw_1 = new X(i);
                }
                function Y(a) {
                    return a.y9().equals(f());
                }
                function aa(a) {
                    a.saw_1.yau(a.zau() && a.raw_1.zau());
                }
                function ta(a, t) {
                    (this.vaw_1 = t), j.call(this, a);
                }
                function na(a, t, n, e) {
                    (e = e === r ? z() : e), (this.qaw_1 = a), (this.raw_1 = e);
                    var u,
                        i =
                            ((u = this.raw_1),
                            function (a) {
                                return (
                                    (function (a, t) {
                                        a.yav(t);
                                    })(u, a),
                                    c
                                );
                            }),
                        s = (function (a) {
                            var t = function (t) {
                                return a.zav(t), c;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.raw_1),
                        o = (function (a) {
                            var t = function () {
                                return a.aaw(), c;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.raw_1);
                    this.saw_1 = E(
                        !1,
                        n,
                        i,
                        s,
                        o,
                        (function (a) {
                            return function () {
                                return a.xav(), c;
                            };
                        })(this.raw_1),
                    );
                    var f;
                    (this.taw_1 = new ta(t, this)),
                        this.raw_1.aav(
                            ((f = this),
                            function (a) {
                                return aa(f), c;
                            }),
                        );
                }
                function ea() {
                    this.waw_1 = C();
                }
                function ua(a, t) {
                    (this.xaw_1 = a), (this.yaw_1 = t);
                }
                function ia(a) {
                    this.zaw_1 = a;
                }
                function ra(a, t) {
                    switch (t.x2_1) {
                        case 0:
                            !(function (a) {
                                switch (a.aax_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(a.aax_1), B(a.aax_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(a.aax_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(a);
                            break;
                        case 1:
                            break;
                        case 2:
                            !(function (a) {
                                switch (a.aax_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(a.aax_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(a.aax_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(a);
                            break;
                        case 3:
                            !(function (a) {
                                switch (a.aax_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(a.aax_1);
                                        break;
                                    case 4:
                                        H(a.aax_1);
                                        break;
                                    case 0:
                                    case 3:
                                        break;
                                    default:
                                        U();
                                }
                            })(a);
                            break;
                        case 4:
                            !(function (a) {
                                switch (a.aax_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(a.aax_1);
                                        break;
                                    case 4:
                                    case 0:
                                        break;
                                    default:
                                        U();
                                }
                            })(a);
                            break;
                        default:
                            U();
                    }
                }
                function ca(a) {
                    this.bax_1 = a;
                }
                function sa(a, t, n, e) {
                    (this.cax_1 = a), (this.dax_1 = t), (this.eax_1 = n), (this.fax_1 = e);
                }
                function oa(a, t, n) {
                    this.aax_1 = a;
                    var e,
                        u,
                        i,
                        r = { _v: t.y9().equals(f()) ? f() : G() },
                        s = { _v: n.y9().equals(f()) ? f() : G() };
                    if ((ra(this, Z(r._v, s._v)), !r._v.equals(f()) && !s._v.equals(f()))) {
                        var o = new ca(
                                ((e = r),
                                (u = this),
                                (i = s),
                                function (a) {
                                    return (e._v = a), ra(u, Z(a, i._v)), c;
                                }),
                            ),
                            _ = new ca(
                                (function (a, t, n) {
                                    return function (e) {
                                        return (a._v = e), ra(t, Z(e, n._v)), c;
                                    };
                                })(s, this, r),
                            );
                        t.fau(o), n.fau(_);
                        var l = this.aax_1;
                        l.y9().equals(f()) ? (t.oau(o), n.oau(_)) : l.fau(new sa(t, o, n, _));
                    }
                }
                function fa(a, t) {
                    (this.gax_1 = a), (this.hax_1 = t);
                }
                x(K, r, r, r, [d]),
                    b(M, "ComponentContextFactory"),
                    x(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, y]),
                    x(V, "DefaultComponentContext"),
                    x(ta, r, r, j),
                    x(na, "DefaultChildBackHandler"),
                    x(ea, "ChildInstanceKeeperProvider", ea, r, [L]),
                    x(ua, r, r, r, [d]),
                    x(ia, r, r, r, [d]),
                    x(ca, "CallbacksImpl", r, r, [d]),
                    x(sa, r, r, r, [d]),
                    x(oa, "MergedLifecycle"),
                    x(fa, r, r, r, [d]),
                    (_(K).ea3 = function () {
                        throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).haw = function (a, t, n, e) {
                        return this.iaw_1(a, t, n, e);
                    }),
                    (_(X).z3 = function () {
                        return this.iaw_1;
                    }),
                    (_(X).equals = function (a) {
                        var t;
                        null != a && k(a, M) ? (t = !(null == a || !k(a, y)) && p(this.z3(), a.z3())) : (t = !1);
                        return t;
                    }),
                    (_(X).hashCode = function () {
                        return A(this.z3());
                    }),
                    (_(V).daw = function () {
                        return this.jaw_1;
                    }),
                    (_(V).eaw = function () {
                        return this.kaw_1;
                    }),
                    (_(V).faw = function () {
                        return this.law_1;
                    }),
                    (_(V).gaw = function () {
                        return this.maw_1;
                    }),
                    (_(V).caw = function () {
                        return this.naw_1;
                    }),
                    (_(ta).uau = function (a, t, n) {
                        return aa(this.vaw_1), c;
                    }),
                    (_(ta).al = function (a, t, n) {
                        var e = null == t || null != t ? t : N();
                        return this.uau(a, e, null == n || null != n ? n : N());
                    }),
                    (_(na).yau = function (a) {
                        return this.taw_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (a) {
                                    return a.zau();
                                },
                                function (a, t) {
                                    return a.yau(t);
                                },
                            ),
                            a,
                        );
                    }),
                    (_(na).zau = function () {
                        return this.taw_1.wk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (a) {
                                    return a.zau();
                                },
                                function (a, t) {
                                    return a.yau(t);
                                },
                            ),
                        );
                    }),
                    (_(na).oaw = function () {
                        this.qaw_1.uav(this.saw_1) || this.qaw_1.vav(this.saw_1);
                    }),
                    (_(na).paw = function () {
                        this.qaw_1.uav(this.saw_1) && this.qaw_1.wav(this.saw_1);
                    }),
                    (_(na).uav = function (a) {
                        return this.raw_1.uav(a);
                    }),
                    (_(na).vav = function (a) {
                        this.raw_1.vav(a);
                    }),
                    (_(na).wav = function (a) {
                        this.raw_1.wav(a);
                    }),
                    (_(ea).ea3 = function () {
                        this.waw_1.ga3();
                    }),
                    (_(ua).ea3 = function () {
                        var a = this.xaw_1.fa3(this.yaw_1);
                        null == a || a.ea3();
                    }),
                    (_(ia).ea3 = function () {
                        this.zaw_1.ga3();
                    }),
                    (_(ca).bau = function () {
                        this.bax_1(S());
                    }),
                    (_(ca).p1b = function () {
                        this.bax_1(g());
                    }),
                    (_(ca).cau = function () {
                        this.bax_1(Q());
                    }),
                    (_(ca).dau = function () {
                        this.bax_1(g());
                    }),
                    (_(ca).eau = function () {
                        this.bax_1(S());
                    }),
                    (_(ca).ea3 = function () {
                        this.bax_1(f());
                    }),
                    (_(sa).ea3 = function () {
                        this.cax_1.oau(this.dax_1), this.eax_1.oau(this.fax_1);
                    }),
                    (_(oa).fau = function (a) {
                        this.aax_1.fau(a);
                    }),
                    (_(oa).oau = function (a) {
                        this.aax_1.oau(a);
                    }),
                    (_(oa).y9 = function () {
                        return this.aax_1.y9();
                    }),
                    (_(fa).ea3 = function () {
                        this.gax_1.sat(this.hax_1);
                    }),
                    (_(K).bau = l),
                    (_(K).p1b = h),
                    (_(K).cau = w),
                    (_(K).dau = $),
                    (_(K).eau = v),
                    (_(ua).bau = l),
                    (_(ua).p1b = h),
                    (_(ua).cau = w),
                    (_(ua).dau = $),
                    (_(ua).eau = v),
                    (_(ia).bau = l),
                    (_(ia).p1b = h),
                    (_(ia).cau = w),
                    (_(ia).dau = $),
                    (_(ia).eau = v),
                    (_(sa).bau = l),
                    (_(sa).p1b = h),
                    (_(sa).cau = w),
                    (_(sa).dau = $),
                    (_(sa).eau = v),
                    (_(fa).bau = l),
                    (_(fa).p1b = h),
                    (_(fa).cau = w),
                    (_(fa).dau = $),
                    (_(fa).eau = v),
                    (a.$_$ = a.$_$ || {}),
                    (a.$_$.a = V),
                    (a.$_$.b = function (a, t, n) {
                        if (null == (n = n === r ? null : n));
                        else {
                            if (n.y9().equals(f())) {
                                throw o(s("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            n.fau(new K());
                        }
                        return a.caw().haw(
                            null == n
                                ? a.daw()
                                : (function (a, t, n) {
                                      return oa.call(n, R(), a, t), n;
                                  })(a.daw(), n, T(_(oa))),
                            (function (a, t, n) {
                                if (((n = n === r ? null : n), !!a.rat(t))) {
                                    throw o(s('The key "' + t + '" is already in use.'));
                                }
                                var e = m(a.pat(t, J.v6c()));
                                if (null == n) {
                                    var u = J.v6c();
                                    a.qat(
                                        t,
                                        u,
                                        ((c = e),
                                        ((_ = function () {
                                            return c.oat();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(n)) {
                                    var i = J.v6c();
                                    a.qat(
                                        t,
                                        i,
                                        (function (a) {
                                            var t = function () {
                                                return a.oat();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(e),
                                    ),
                                        n.y9().equals(f()) ? a.sat(t) : n.fau(new fa(a, t));
                                }
                                var c, _;
                                return e;
                            })(a.eaw(), t, n),
                            (function (a, t, n) {
                                var e;
                                if (((n = n === r ? null : n), null != n && Y(n))) e = C();
                                else {
                                    var u = a.ca3(t),
                                        i = null == u || k(u, L) ? u : N();
                                    null == i && ((i = new ea()), a.da3(t, i));
                                    var c = i.waw_1;
                                    if (null == n);
                                    else if (n.y9().equals(f())) {
                                        var s = a.fa3(t);
                                        null == s || s.ea3();
                                    } else n.fau(new ua(a, t));
                                    e = c;
                                }
                                return e;
                            })(a.faw(), t, n),
                            (function (a, t, n) {
                                t = t === r ? null : t;
                                var e = (function (a, t, n) {
                                    return (n = n === r ? 0 : n), new na(a, (t = t === r || t), n);
                                })(a, !1, (n = n === r ? 0 : n));
                                if (null == t) e.yau(!0), e.oaw();
                                else if (!Y(t)) {
                                    e.yau(t.y9().a3(g()) >= 0), e.oaw();
                                    var u =
                                            ((f = e),
                                            function () {
                                                return f.yau(!0), c;
                                            }),
                                        i = (function (a) {
                                            return function () {
                                                return a.yau(!1), c;
                                            };
                                        })(e);
                                    q(
                                        t,
                                        r,
                                        u,
                                        r,
                                        r,
                                        i,
                                        ((s = e),
                                        ((o = function () {
                                            return s.paw(), c;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var s, o;
                                var f;
                                return e;
                            })(a.gaw(), n),
                        );
                    });
            })(a.exports, n(519039), n(54279), n(440172), n(538264), n(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.51307c1a.js.map
