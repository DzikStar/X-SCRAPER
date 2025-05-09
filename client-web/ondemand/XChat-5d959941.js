(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (a, n, t) => {
            "use strict";
            t.d(n, { _: () => s });
            var e = t(381415);
            const u = "https://api.x.com",
                i = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function s(a, n = {}) {
                const t = a instanceof URL ? a : new URL(a, u),
                    { credentials: s = "include", headers: c, signal: o = AbortSignal.timeout(i) } = n,
                    _ = new Headers(c);
                if (
                    (function (a) {
                        return ("string" == typeof a && (a.startsWith("https://api.x.com") || a.startsWith("https://x.com/i/api"))) || (a instanceof URL && ("api.x.com" === a.host || a.href.startsWith("https://x.com/i/api")));
                    })(a)
                ) {
                    _.set("Authorization", `Bearer ${r}`);
                    const a = _.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (a) {
                        const n = (0, e.Qc)(a);
                        n.auth_token && _.set("x-twitter-auth-type", "OAuth2Session"), n.ct0 && _.set("x-csrf-token", n.ct0);
                    }
                }
                const f = await fetch(t, { ...n, credentials: s, headers: _, signal: o });
                if (!f.ok) throw new Error(`[${f.status}] Network response was not ok`);
                return f;
            }
        },
        381415: (a, n) => {
            "use strict";
            n.Qc = function (a, n) {
                const t = new s(),
                    e = a.length;
                if (e < 2) return t;
                const u = n?.decode || _;
                let i = 0;
                do {
                    const n = a.indexOf("=", i);
                    if (-1 === n) break;
                    const r = a.indexOf(";", i),
                        s = -1 === r ? e : r;
                    if (n > s) {
                        i = a.lastIndexOf(";", n - 1) + 1;
                        continue;
                    }
                    const _ = c(a, i, n),
                        f = o(a, n, _),
                        l = a.slice(_, f);
                    if (void 0 === t[l]) {
                        let e = c(a, n + 1, s),
                            i = o(a, s, e);
                        const r = u(a.slice(e, i));
                        t[l] = r;
                    }
                    i = s + 1;
                } while (i < e);
                return t;
            };
            const t = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                e = /^[\u0021-\u003A\u003C-\u007E]*$/,
                u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                s = (() => {
                    const a = function () {};
                    return (a.prototype = Object.create(null)), a;
                })();
            function c(a, n, t) {
                do {
                    const t = a.charCodeAt(n);
                    if (32 !== t && 9 !== t) return n;
                } while (++n < t);
                return t;
            }
            function o(a, n, t) {
                for (; n > t; ) {
                    const t = a.charCodeAt(--n);
                    if (32 !== t && 9 !== t) return n + 1;
                }
                return t;
            }
            function _(a) {
                if (-1 === a.indexOf("%")) return a;
                try {
                    return decodeURIComponent(a);
                } catch (n) {
                    return a;
                }
            }
        },
        594839: (a, n, t) => {
            !(function (a, n, t, e, u, i) {
                "use strict";
                var r = n.$_$.g,
                    s = n.$_$.n6,
                    c = n.$_$.se,
                    o = n.$_$.l2,
                    _ = t.$_$.q,
                    f = n.$_$.oe,
                    l = t.$_$.a,
                    h = t.$_$.e,
                    x = t.$_$.d,
                    $ = t.$_$.c,
                    v = t.$_$.f,
                    w = t.$_$.g,
                    d = n.$_$.ld,
                    b = n.$_$.pd,
                    y = n.$_$.cd,
                    k = n.$_$.pc,
                    p = n.$_$.ae,
                    m = n.$_$.kd,
                    A = e.$_$.b,
                    z = u.$_$.c,
                    C = i.$_$.b,
                    q = t.$_$.t,
                    g = t.$_$.o,
                    j = n.$_$.ue,
                    N = n.$_$.fj,
                    E = i.$_$.a,
                    I = (n.$_$.z5, n.$_$.mf),
                    O = n.$_$.id,
                    L = u.$_$.a,
                    R = t.$_$.h,
                    T = n.$_$.ne,
                    U = n.$_$.gk,
                    W = t.$_$.i,
                    B = t.$_$.j,
                    D = t.$_$.n,
                    F = t.$_$.m,
                    H = t.$_$.k,
                    P = t.$_$.l,
                    S = t.$_$.p,
                    Q = t.$_$.s,
                    Z = n.$_$.ub,
                    G = t.$_$.r,
                    J = e.$_$.c;
                function K() {}
                function M() {}
                function X(a) {
                    this.eax_1 = a;
                }
                function V(a, n, t, e) {
                    (n = n === r ? null : n), (t = t === r ? null : t), (e = e === r ? null : e), (this.fax_1 = a);
                    this.gax_1 = null == n ? A() : n;
                    this.hax_1 =
                        null == t
                            ? (function (a, n) {
                                  n.y9().equals(_()) ? a.wa3() : n.bav(new ia(a));
                                  return a;
                              })(z(), this.fax_1)
                            : t;
                    this.iax_1 = null == e ? C() : e;
                    var u,
                        i =
                            (((u = function (a, n, t, e) {
                                return new V(a, n, t, e);
                            }).callableName = "<init>"),
                            u);
                    this.jax_1 = new X(i);
                }
                function Y(a) {
                    return a.y9().equals(_());
                }
                function aa(a) {
                    a.oax_1.uav(a.vav() && a.nax_1.vav());
                }
                function na(a, n) {
                    (this.rax_1 = n), j.call(this, a);
                }
                function ta(a, n, t, e) {
                    (e = e === r ? C() : e), (this.max_1 = a), (this.nax_1 = e);
                    var u,
                        i =
                            ((u = this.nax_1),
                            function (a) {
                                return (
                                    (function (a, n) {
                                        a.uaw(n);
                                    })(u, a),
                                    s
                                );
                            }),
                        c = (function (a) {
                            var n = function (n) {
                                return a.vaw(n), s;
                            };
                            return (n.callableName = "progressPredictiveBack"), n;
                        })(this.nax_1),
                        o = (function (a) {
                            var n = function () {
                                return a.waw(), s;
                            };
                            return (n.callableName = "cancelPredictiveBack"), n;
                        })(this.nax_1);
                    this.oax_1 = E(
                        !1,
                        t,
                        i,
                        c,
                        o,
                        (function (a) {
                            return function () {
                                return a.taw(), s;
                            };
                        })(this.nax_1),
                    );
                    var _;
                    (this.pax_1 = new na(n, this)),
                        this.nax_1.wav(
                            ((_ = this),
                            function (a) {
                                return aa(_), s;
                            }),
                        );
                }
                function ea() {
                    this.sax_1 = z();
                }
                function ua(a, n) {
                    (this.tax_1 = a), (this.uax_1 = n);
                }
                function ia(a) {
                    this.vax_1 = a;
                }
                function ra(a, n) {
                    switch (n.x2_1) {
                        case 0:
                            !(function (a) {
                                switch (a.wax_1.y9().x2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(a.wax_1), B(a.wax_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(a.wax_1);
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
                                switch (a.wax_1.y9().x2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(a.wax_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(a.wax_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(a);
                            break;
                        case 3:
                            !(function (a) {
                                switch (a.wax_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                        F(a.wax_1);
                                        break;
                                    case 4:
                                        H(a.wax_1);
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
                                switch (a.wax_1.y9().x2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(a.wax_1);
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
                function sa(a) {
                    this.xax_1 = a;
                }
                function ca(a, n, t, e) {
                    (this.yax_1 = a), (this.zax_1 = n), (this.aay_1 = t), (this.bay_1 = e);
                }
                function oa(a, n, t) {
                    this.wax_1 = a;
                    var e,
                        u,
                        i,
                        r = { _v: n.y9().equals(_()) ? _() : G() },
                        c = { _v: t.y9().equals(_()) ? _() : G() };
                    if ((ra(this, Z(r._v, c._v)), !r._v.equals(_()) && !c._v.equals(_()))) {
                        var o = new sa(
                                ((e = r),
                                (u = this),
                                (i = c),
                                function (a) {
                                    return (e._v = a), ra(u, Z(a, i._v)), s;
                                }),
                            ),
                            f = new sa(
                                (function (a, n, t) {
                                    return function (e) {
                                        return (a._v = e), ra(n, Z(e, t._v)), s;
                                    };
                                })(c, this, r),
                            );
                        n.bav(o), t.bav(f);
                        var l = this.wax_1;
                        l.y9().equals(_()) ? (n.kav(o), t.kav(f)) : l.bav(new ca(n, o, t, f));
                    }
                }
                function _a(a, n) {
                    (this.cay_1 = a), (this.eay_1 = n);
                }
                d(K, r, r, r, [w]),
                    b(M, "ComponentContextFactory"),
                    d(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, k]),
                    d(V, "DefaultComponentContext"),
                    d(na, r, r, j),
                    d(ta, "DefaultChildBackHandler"),
                    d(ea, "ChildInstanceKeeperProvider", ea, r, [L]),
                    d(ua, r, r, r, [w]),
                    d(ia, r, r, r, [w]),
                    d(sa, "CallbacksImpl", r, r, [w]),
                    d(ca, r, r, r, [w]),
                    d(oa, "MergedLifecycle"),
                    d(_a, r, r, r, [w]),
                    (f(K).ua3 = function () {
                        throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (f(X).dax = function (a, n, t, e) {
                        return this.eax_1(a, n, t, e);
                    }),
                    (f(X).z3 = function () {
                        return this.eax_1;
                    }),
                    (f(X).equals = function (a) {
                        var n;
                        null != a && p(a, M) ? (n = !(null == a || !p(a, k)) && y(this.z3(), a.z3())) : (n = !1);
                        return n;
                    }),
                    (f(X).hashCode = function () {
                        return m(this.z3());
                    }),
                    (f(V).zaw = function () {
                        return this.fax_1;
                    }),
                    (f(V).aax = function () {
                        return this.gax_1;
                    }),
                    (f(V).bax = function () {
                        return this.hax_1;
                    }),
                    (f(V).cax = function () {
                        return this.iax_1;
                    }),
                    (f(V).yaw = function () {
                        return this.jax_1;
                    }),
                    (f(na).qav = function (a, n, t) {
                        return aa(this.rax_1), s;
                    }),
                    (f(na).al = function (a, n, t) {
                        var e = null == n || null != n ? n : N();
                        return this.qav(a, e, null == t || null != t ? t : N());
                    }),
                    (f(ta).uav = function (a) {
                        return this.pax_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (a) {
                                    return a.vav();
                                },
                                function (a, n) {
                                    return a.uav(n);
                                },
                            ),
                            a,
                        );
                    }),
                    (f(ta).vav = function () {
                        return this.pax_1.wk(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (a) {
                                    return a.vav();
                                },
                                function (a, n) {
                                    return a.uav(n);
                                },
                            ),
                        );
                    }),
                    (f(ta).kax = function () {
                        this.max_1.qaw(this.oax_1) || this.max_1.raw(this.oax_1);
                    }),
                    (f(ta).lax = function () {
                        this.max_1.qaw(this.oax_1) && this.max_1.saw(this.oax_1);
                    }),
                    (f(ta).qaw = function (a) {
                        return this.nax_1.qaw(a);
                    }),
                    (f(ta).raw = function (a) {
                        this.nax_1.raw(a);
                    }),
                    (f(ta).saw = function (a) {
                        this.nax_1.saw(a);
                    }),
                    (f(ea).ua3 = function () {
                        this.sax_1.wa3();
                    }),
                    (f(ua).ua3 = function () {
                        var a = this.tax_1.va3(this.uax_1);
                        null == a || a.ua3();
                    }),
                    (f(ia).ua3 = function () {
                        this.vax_1.wa3();
                    }),
                    (f(sa).xau = function () {
                        this.xax_1(S());
                    }),
                    (f(sa).p1b = function () {
                        this.xax_1(q());
                    }),
                    (f(sa).yau = function () {
                        this.xax_1(Q());
                    }),
                    (f(sa).zau = function () {
                        this.xax_1(q());
                    }),
                    (f(sa).aav = function () {
                        this.xax_1(S());
                    }),
                    (f(sa).ua3 = function () {
                        this.xax_1(_());
                    }),
                    (f(ca).ua3 = function () {
                        this.yax_1.kav(this.zax_1), this.aay_1.kav(this.bay_1);
                    }),
                    (f(oa).bav = function (a) {
                        this.wax_1.bav(a);
                    }),
                    (f(oa).kav = function (a) {
                        this.wax_1.kav(a);
                    }),
                    (f(oa).y9 = function () {
                        return this.wax_1.y9();
                    }),
                    (f(_a).ua3 = function () {
                        this.cay_1.oau(this.eay_1);
                    }),
                    (f(K).xau = l),
                    (f(K).p1b = h),
                    (f(K).yau = x),
                    (f(K).zau = $),
                    (f(K).aav = v),
                    (f(ua).xau = l),
                    (f(ua).p1b = h),
                    (f(ua).yau = x),
                    (f(ua).zau = $),
                    (f(ua).aav = v),
                    (f(ia).xau = l),
                    (f(ia).p1b = h),
                    (f(ia).yau = x),
                    (f(ia).zau = $),
                    (f(ia).aav = v),
                    (f(ca).xau = l),
                    (f(ca).p1b = h),
                    (f(ca).yau = x),
                    (f(ca).zau = $),
                    (f(ca).aav = v),
                    (f(_a).xau = l),
                    (f(_a).p1b = h),
                    (f(_a).yau = x),
                    (f(_a).zau = $),
                    (f(_a).aav = v),
                    (a.$_$ = a.$_$ || {}),
                    (a.$_$.a = V),
                    (a.$_$.b = function (a, n, t) {
                        if (null == (t = t === r ? null : t));
                        else {
                            if (t.y9().equals(_())) {
                                throw o(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            t.bav(new K());
                        }
                        return a.yaw().dax(
                            null == t
                                ? a.zaw()
                                : (function (a, n, t) {
                                      return oa.call(t, R(), a, n), t;
                                  })(a.zaw(), t, T(f(oa))),
                            (function (a, n, t) {
                                if (((t = t === r ? null : t), !!a.nau(n))) {
                                    throw o(c('The key "' + n + '" is already in use.'));
                                }
                                var e = A(a.lau(n, J.w6c()));
                                if (null == t) {
                                    var u = J.w6c();
                                    a.mau(
                                        n,
                                        u,
                                        ((s = e),
                                        ((f = function () {
                                            return s.kau();
                                        }).callableName = "save"),
                                        f),
                                    );
                                } else if (!Y(t)) {
                                    var i = J.w6c();
                                    a.mau(
                                        n,
                                        i,
                                        (function (a) {
                                            var n = function () {
                                                return a.kau();
                                            };
                                            return (n.callableName = "save"), n;
                                        })(e),
                                    ),
                                        t.y9().equals(_()) ? a.oau(n) : t.bav(new _a(a, n));
                                }
                                var s, f;
                                return e;
                            })(a.aax(), n, t),
                            (function (a, n, t) {
                                var e;
                                if (((t = t === r ? null : t), null != t && Y(t))) e = z();
                                else {
                                    var u = a.sa3(n),
                                        i = null == u || p(u, L) ? u : N();
                                    null == i && ((i = new ea()), a.ta3(n, i));
                                    var s = i.sax_1;
                                    if (null == t);
                                    else if (t.y9().equals(_())) {
                                        var c = a.va3(n);
                                        null == c || c.ua3();
                                    } else t.bav(new ua(a, n));
                                    e = s;
                                }
                                return e;
                            })(a.bax(), n, t),
                            (function (a, n, t) {
                                n = n === r ? null : n;
                                var e = (function (a, n, t) {
                                    return (t = t === r ? 0 : t), new ta(a, (n = n === r || n), t);
                                })(a, !1, (t = t === r ? 0 : t));
                                if (null == n) e.uav(!0), e.kax();
                                else if (!Y(n)) {
                                    e.uav(n.y9().a3(q()) >= 0), e.kax();
                                    var u =
                                            ((_ = e),
                                            function () {
                                                return _.uav(!0), s;
                                            }),
                                        i = (function (a) {
                                            return function () {
                                                return a.uav(!1), s;
                                            };
                                        })(e);
                                    g(
                                        n,
                                        r,
                                        u,
                                        r,
                                        r,
                                        i,
                                        ((c = e),
                                        ((o = function () {
                                            return c.lax(), s;
                                        }).callableName = "stop"),
                                        o),
                                    );
                                }
                                var c, o;
                                var _;
                                return e;
                            })(a.cax(), t),
                        );
                    });
            })(a.exports, t(519039), t(54279), t(440172), t(538264), t(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.6ccf72ba.js.map
