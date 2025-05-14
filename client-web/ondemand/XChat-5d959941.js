(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (t, a, n) => {
            "use strict";
            n.d(a, { _: () => s });
            var e = n(381415);
            const u = "https://api.x.com",
                i = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function s(t, a = {}) {
                const n = t instanceof URL ? t : new URL(t, u),
                    { credentials: s = "include", headers: c, signal: o = AbortSignal.timeout(i) } = a,
                    _ = new Headers(c);
                if (
                    (function (t) {
                        return ("string" == typeof t && (t.startsWith("https://api.x.com") || t.startsWith("https://x.com/i/api"))) || (t instanceof URL && ("api.x.com" === t.host || t.href.startsWith("https://x.com/i/api")));
                    })(t)
                ) {
                    _.set("Authorization", `Bearer ${r}`);
                    const t = _.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const a = (0, e.Qc)(t);
                        a.auth_token && _.set("x-twitter-auth-type", "OAuth2Session"), a.ct0 && _.set("x-csrf-token", a.ct0);
                    }
                }
                const f = await fetch(n, { ...a, credentials: s, headers: _, signal: o });
                if (!f.ok) throw new Error(`[${f.status}] Network response was not ok`);
                return f;
            }
        },
        381415: (t, a) => {
            "use strict";
            a.Qc = function (t, a) {
                const n = new s(),
                    e = t.length;
                if (e < 2) return n;
                const u = a?.decode || _;
                let i = 0;
                do {
                    const a = t.indexOf("=", i);
                    if (-1 === a) break;
                    const r = t.indexOf(";", i),
                        s = -1 === r ? e : r;
                    if (a > s) {
                        i = t.lastIndexOf(";", a - 1) + 1;
                        continue;
                    }
                    const _ = c(t, i, a),
                        f = o(t, a, _),
                        l = t.slice(_, f);
                    if (void 0 === n[l]) {
                        let e = c(t, a + 1, s),
                            i = o(t, s, e);
                        const r = u(t.slice(e, i));
                        n[l] = r;
                    }
                    i = s + 1;
                } while (i < e);
                return n;
            };
            const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                s = (() => {
                    const t = function () {};
                    return (t.prototype = Object.create(null)), t;
                })();
            function c(t, a, n) {
                do {
                    const n = t.charCodeAt(a);
                    if (32 !== n && 9 !== n) return a;
                } while (++a < n);
                return n;
            }
            function o(t, a, n) {
                for (; a > n; ) {
                    const n = t.charCodeAt(--a);
                    if (32 !== n && 9 !== n) return a + 1;
                }
                return n;
            }
            function _(t) {
                if (-1 === t.indexOf("%")) return t;
                try {
                    return decodeURIComponent(t);
                } catch (a) {
                    return t;
                }
            }
        },
        594839: (t, a, n) => {
            !(function (t, a, n, e, u, i) {
                "use strict";
                var r = a.$_$.g,
                    s = a.$_$.n6,
                    c = a.$_$.se,
                    o = a.$_$.l2,
                    _ = n.$_$.q,
                    f = a.$_$.oe,
                    l = n.$_$.a,
                    h = n.$_$.e,
                    $ = n.$_$.d,
                    d = n.$_$.c,
                    v = n.$_$.f,
                    b = n.$_$.g,
                    w = a.$_$.ld,
                    y = a.$_$.pd,
                    p = a.$_$.cd,
                    k = a.$_$.pc,
                    A = a.$_$.ae,
                    m = a.$_$.kd,
                    q = e.$_$.b,
                    z = u.$_$.c,
                    x = i.$_$.b,
                    C = n.$_$.t,
                    g = n.$_$.o,
                    j = a.$_$.ue,
                    N = a.$_$.fj,
                    E = i.$_$.a,
                    I = (a.$_$.z5, a.$_$.mf),
                    O = a.$_$.id,
                    L = u.$_$.a,
                    R = n.$_$.h,
                    T = a.$_$.ne,
                    U = a.$_$.gk,
                    W = n.$_$.i,
                    B = n.$_$.j,
                    D = n.$_$.n,
                    F = n.$_$.m,
                    H = n.$_$.k,
                    P = n.$_$.l,
                    S = n.$_$.p,
                    Q = n.$_$.s,
                    Z = a.$_$.ub,
                    G = n.$_$.r,
                    J = e.$_$.c;
                function K() {}
                function M() {}
                function X(t) {
                    this.kat_1 = t;
                }
                function V(t, a, n, e) {
                    (a = a === r ? null : a), (n = n === r ? null : n), (e = e === r ? null : e), (this.lat_1 = t);
                    this.mat_1 = null == a ? q() : a;
                    this.nat_1 =
                        null == n
                            ? (function (t, a) {
                                  a.y9().equals(_()) ? t.aa0() : a.har(new it(t));
                                  return t;
                              })(z(), this.lat_1)
                            : n;
                    this.oat_1 = null == e ? x() : e;
                    var u,
                        i =
                            (((u = function (t, a, n, e) {
                                return new V(t, a, n, e);
                            }).callableName = "<init>"),
                            u);
                    this.pat_1 = new X(i);
                }
                function Y(t) {
                    return t.y9().equals(_());
                }
                function tt(t) {
                    t.uat_1.aas(t.bas() && t.tat_1.bas());
                }
                function at(t, a) {
                    (this.xat_1 = a), j.call(this, t);
                }
                function nt(t, a, n, e) {
                    (e = e === r ? x() : e), (this.sat_1 = t), (this.tat_1 = e);
                    var u,
                        i =
                            ((u = this.tat_1),
                            function (t) {
                                return (
                                    (function (t, a) {
                                        t.aat(a);
                                    })(u, t),
                                    s
                                );
                            }),
                        c = (function (t) {
                            var a = function (a) {
                                return t.bat(a), s;
                            };
                            return (a.callableName = "progressPredictiveBack"), a;
                        })(this.tat_1),
                        o = (function (t) {
                            var a = function () {
                                return t.cat(), s;
                            };
                            return (a.callableName = "cancelPredictiveBack"), a;
                        })(this.tat_1);
                    this.uat_1 = E(
                        !1,
                        n,
                        i,
                        c,
                        o,
                        (function (t) {
                            return function () {
                                return t.zas(), s;
                            };
                        })(this.tat_1),
                    );
                    var _;
                    (this.vat_1 = new at(a, this)),
                        this.tat_1.cas(
                            ((_ = this),
                            function (t) {
                                return tt(_), s;
                            }),
                        );
                }
                function et() {
                    this.yat_1 = z();
                }
                function ut(t, a) {
                    (this.zat_1 = t), (this.aau_1 = a);
                }
                function it(t) {
                    this.bau_1 = t;
                }
                function rt(t, a) {
                    switch (a.x2_1) {
                        case 0:
                            !(function (t) {
                                switch (t.cau_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(t.cau_1), B(t.cau_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(t.cau_1);
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
                                switch (t.cau_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(t.cau_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(t.cau_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(t);
                            break;
                        case 3:
                            !(function (t) {
                                switch (t.cau_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(t.cau_1);
                                        break;
                                    case 4:
                                        H(t.cau_1);
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
                                switch (t.cau_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(t.cau_1);
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
                    this.dau_1 = t;
                }
                function ct(t, a, n, e) {
                    (this.eau_1 = t), (this.fau_1 = a), (this.gau_1 = n), (this.hau_1 = e);
                }
                function ot(t, a, n) {
                    this.cau_1 = t;
                    var e,
                        u,
                        i,
                        r = { _v: a.y9().equals(_()) ? _() : G() },
                        c = { _v: n.y9().equals(_()) ? _() : G() };
                    if ((rt(this, Z(r._v, c._v)), !r._v.equals(_()) && !c._v.equals(_()))) {
                        var o = new st(
                                ((e = r),
                                (u = this),
                                (i = c),
                                function (t) {
                                    return (e._v = t), rt(u, Z(t, i._v)), s;
                                }),
                            ),
                            f = new st(
                                (function (t, a, n) {
                                    return function (e) {
                                        return (t._v = e), rt(a, Z(e, n._v)), s;
                                    };
                                })(c, this, r),
                            );
                        a.har(o), n.har(f);
                        var l = this.cau_1;
                        l.y9().equals(_()) ? (a.qar(o), n.qar(f)) : l.har(new ct(a, o, n, f));
                    }
                }
                function _t(t, a) {
                    (this.iau_1 = t), (this.jau_1 = a);
                }
                w(K, r, r, r, [b]),
                    y(M, "ComponentContextFactory"),
                    w(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, k]),
                    w(V, "DefaultComponentContext"),
                    w(at, r, r, j),
                    w(nt, "DefaultChildBackHandler"),
                    w(et, "ChildInstanceKeeperProvider", et, r, [L]),
                    w(ut, r, r, r, [b]),
                    w(it, r, r, r, [b]),
                    w(st, "CallbacksImpl", r, r, [b]),
                    w(ct, r, r, r, [b]),
                    w(ot, "MergedLifecycle"),
                    w(_t, r, r, r, [b]),
                    (f(K).y9z = function () {
                        throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (f(X).jat = function (t, a, n, e) {
                        return this.kat_1(t, a, n, e);
                    }),
                    (f(X).z3 = function () {
                        return this.kat_1;
                    }),
                    (f(X).equals = function (t) {
                        var a;
                        null != t && A(t, M) ? (a = !(null == t || !A(t, k)) && p(this.z3(), t.z3())) : (a = !1);
                        return a;
                    }),
                    (f(X).hashCode = function () {
                        return m(this.z3());
                    }),
                    (f(V).fat = function () {
                        return this.lat_1;
                    }),
                    (f(V).gat = function () {
                        return this.mat_1;
                    }),
                    (f(V).hat = function () {
                        return this.nat_1;
                    }),
                    (f(V).iat = function () {
                        return this.oat_1;
                    }),
                    (f(V).eat = function () {
                        return this.pat_1;
                    }),
                    (f(at).war = function (t, a, n) {
                        return tt(this.xat_1), s;
                    }),
                    (f(at).al = function (t, a, n) {
                        var e = null == a || null != a ? a : N();
                        return this.war(t, e, null == n || null != n ? n : N());
                    }),
                    (f(nt).aas = function (t) {
                        return this.vat_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.bas();
                                },
                                function (t, a) {
                                    return t.aas(a);
                                },
                            ),
                            t,
                        );
                    }),
                    (f(nt).bas = function () {
                        return this.vat_1.wk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (t) {
                                    return t.bas();
                                },
                                function (t, a) {
                                    return t.aas(a);
                                },
                            ),
                        );
                    }),
                    (f(nt).qat = function () {
                        this.sat_1.was(this.uat_1) || this.sat_1.xas(this.uat_1);
                    }),
                    (f(nt).rat = function () {
                        this.sat_1.was(this.uat_1) && this.sat_1.yas(this.uat_1);
                    }),
                    (f(nt).was = function (t) {
                        return this.tat_1.was(t);
                    }),
                    (f(nt).xas = function (t) {
                        this.tat_1.xas(t);
                    }),
                    (f(nt).yas = function (t) {
                        this.tat_1.yas(t);
                    }),
                    (f(et).y9z = function () {
                        this.yat_1.aa0();
                    }),
                    (f(ut).y9z = function () {
                        var t = this.zat_1.z9z(this.aau_1);
                        null == t || t.y9z();
                    }),
                    (f(it).y9z = function () {
                        this.bau_1.aa0();
                    }),
                    (f(st).dar = function () {
                        this.dau_1(S());
                    }),
                    (f(st).p1b = function () {
                        this.dau_1(C());
                    }),
                    (f(st).ear = function () {
                        this.dau_1(Q());
                    }),
                    (f(st).far = function () {
                        this.dau_1(C());
                    }),
                    (f(st).gar = function () {
                        this.dau_1(S());
                    }),
                    (f(st).y9z = function () {
                        this.dau_1(_());
                    }),
                    (f(ct).y9z = function () {
                        this.eau_1.qar(this.fau_1), this.gau_1.qar(this.hau_1);
                    }),
                    (f(ot).har = function (t) {
                        this.cau_1.har(t);
                    }),
                    (f(ot).qar = function (t) {
                        this.cau_1.qar(t);
                    }),
                    (f(ot).y9 = function () {
                        return this.cau_1.y9();
                    }),
                    (f(_t).y9z = function () {
                        this.iau_1.uaq(this.jau_1);
                    }),
                    (f(K).dar = l),
                    (f(K).p1b = h),
                    (f(K).ear = $),
                    (f(K).far = d),
                    (f(K).gar = v),
                    (f(ut).dar = l),
                    (f(ut).p1b = h),
                    (f(ut).ear = $),
                    (f(ut).far = d),
                    (f(ut).gar = v),
                    (f(it).dar = l),
                    (f(it).p1b = h),
                    (f(it).ear = $),
                    (f(it).far = d),
                    (f(it).gar = v),
                    (f(ct).dar = l),
                    (f(ct).p1b = h),
                    (f(ct).ear = $),
                    (f(ct).far = d),
                    (f(ct).gar = v),
                    (f(_t).dar = l),
                    (f(_t).p1b = h),
                    (f(_t).ear = $),
                    (f(_t).far = d),
                    (f(_t).gar = v),
                    (t.$_$ = t.$_$ || {}),
                    (t.$_$.a = V),
                    (t.$_$.b = function (t, a, n) {
                        if (null == (n = n === r ? null : n));
                        else {
                            if (n.y9().equals(_())) {
                                throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            n.har(new K());
                        }
                        return t.eat().jat(
                            null == n
                                ? t.fat()
                                : (function (t, a, n) {
                                      return ot.call(n, R(), t, a), n;
                                  })(t.fat(), n, T(f(ot))),
                            (function (t, a, n) {
                                if (((n = n === r ? null : n), !!t.taq(a))) {
                                    throw o(c('The key "' + a + '" is already in use.'));
                                }
                                var e = q(t.raq(a, J.w6c()));
                                if (null == n) {
                                    var u = J.w6c();
                                    t.saq(
                                        a,
                                        u,
                                        ((s = e),
                                        ((f = function () {
                                            return s.qaq();
                                        }).callableName = "save"),
                                        f),
                                    );
                                } else if (!Y(n)) {
                                    var i = J.w6c();
                                    t.saq(
                                        a,
                                        i,
                                        (function (t) {
                                            var a = function () {
                                                return t.qaq();
                                            };
                                            return (a.callableName = "save"), a;
                                        })(e),
                                    ),
                                        n.y9().equals(_()) ? t.uaq(a) : n.har(new _t(t, a));
                                }
                                var s, f;
                                return e;
                            })(t.gat(), a, n),
                            (function (t, a, n) {
                                var e;
                                if (((n = n === r ? null : n), null != n && Y(n))) e = z();
                                else {
                                    var u = t.w9z(a),
                                        i = null == u || A(u, L) ? u : N();
                                    null == i && ((i = new et()), t.x9z(a, i));
                                    var s = i.yat_1;
                                    if (null == n);
                                    else if (n.y9().equals(_())) {
                                        var c = t.z9z(a);
                                        null == c || c.y9z();
                                    } else n.har(new ut(t, a));
                                    e = s;
                                }
                                return e;
                            })(t.hat(), a, n),
                            (function (t, a, n) {
                                a = a === r ? null : a;
                                var e = (function (t, a, n) {
                                    return (n = n === r ? 0 : n), new nt(t, (a = a === r || a), n);
                                })(t, !1, (n = n === r ? 0 : n));
                                if (null == a) e.aas(!0), e.qat();
                                else if (!Y(a)) {
                                    e.aas(a.y9().a3(C()) >= 0), e.qat();
                                    var u =
                                            ((_ = e),
                                            function () {
                                                return _.aas(!0), s;
                                            }),
                                        i = (function (t) {
                                            return function () {
                                                return t.aas(!1), s;
                                            };
                                        })(e);
                                    g(
                                        a,
                                        r,
                                        u,
                                        r,
                                        r,
                                        i,
                                        ((c = e),
                                        ((o = function () {
                                            return c.rat(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var c, o;
                                var _;
                                return e;
                            })(t.iat(), n),
                        );
                    });
            })(t.exports, n(519039), n(54279), n(440172), n(538264), n(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.78d4fd2a.js.map
