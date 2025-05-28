(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-5d959941"],
    {
        781441: (n, t, e) => {
            "use strict";
            e.d(t, { _: () => a });
            var i = e(381415);
            const u = "https://api.x.com",
                b = 5e3,
                r = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function a(n, t = {}) {
                const e = n instanceof URL ? n : new URL(n, u),
                    { credentials: a = "include", headers: c, signal: s = AbortSignal.timeout(b) } = t,
                    o = new Headers(c);
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
                const _ = await fetch(e, { ...t, credentials: a, headers: o, signal: s });
                if (!_.ok) throw new Error(`[${_.status}] Network response was not ok`);
                return _;
            }
        },
        381415: (n, t) => {
            "use strict";
            t.Qc = function (n, t) {
                const e = new a(),
                    i = n.length;
                if (i < 2) return e;
                const u = t?.decode || o;
                let b = 0;
                do {
                    const t = n.indexOf("=", b);
                    if (-1 === t) break;
                    const r = n.indexOf(";", b),
                        a = -1 === r ? i : r;
                    if (t > a) {
                        b = n.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const o = c(n, b, t),
                        _ = s(n, t, o),
                        l = n.slice(o, _);
                    if (void 0 === e[l]) {
                        let i = c(n, t + 1, a),
                            b = s(n, a, i);
                        const r = u(n.slice(i, b));
                        e[l] = r;
                    }
                    b = a + 1;
                } while (b < i);
                return e;
            };
            const e = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                i = /^[\u0021-\u003A\u003C-\u007E]*$/,
                u = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                b = /^[\u0020-\u003A\u003D-\u007E]*$/,
                r = Object.prototype.toString,
                a = (() => {
                    const n = function () {};
                    return (n.prototype = Object.create(null)), n;
                })();
            function c(n, t, e) {
                do {
                    const e = n.charCodeAt(t);
                    if (32 !== e && 9 !== e) return t;
                } while (++t < e);
                return e;
            }
            function s(n, t, e) {
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
                    a = t.$_$.o6,
                    c = t.$_$.ze,
                    s = t.$_$.l2,
                    o = e.$_$.q,
                    _ = t.$_$.ve,
                    l = e.$_$.a,
                    f = e.$_$.e,
                    h = e.$_$.d,
                    v = e.$_$.c,
                    x = e.$_$.f,
                    $ = e.$_$.g,
                    d = t.$_$.sd,
                    w = t.$_$.wd,
                    y = t.$_$.id,
                    p = t.$_$.vc,
                    k = t.$_$.he,
                    A = t.$_$.rd,
                    m = i.$_$.b,
                    z = u.$_$.d,
                    q = b.$_$.b,
                    C = e.$_$.t,
                    g = e.$_$.o,
                    j = t.$_$.bf,
                    N = t.$_$.pj,
                    E = b.$_$.a,
                    I = (t.$_$.a6, t.$_$.tf),
                    O = t.$_$.pd,
                    L = u.$_$.b,
                    R = e.$_$.h,
                    T = t.$_$.ue,
                    U = t.$_$.rk,
                    W = e.$_$.i,
                    B = e.$_$.j,
                    D = e.$_$.n,
                    F = e.$_$.m,
                    H = e.$_$.k,
                    P = e.$_$.l,
                    S = e.$_$.p,
                    Q = e.$_$.s,
                    Z = t.$_$.ac,
                    G = e.$_$.r,
                    J = i.$_$.c;
                function K() {}
                function M() {}
                function X(n) {
                    this.hbx_1 = n;
                }
                function V(n, t, e, i) {
                    (t = t === r ? null : t), (e = e === r ? null : e), (i = i === r ? null : i), (this.ibx_1 = n);
                    this.jbx_1 = null == t ? m() : t;
                    this.kbx_1 =
                        null == e
                            ? (function (n, t) {
                                  t.ea().equals(o()) ? n.nae() : t.ebv(new rn(n));
                                  return n;
                              })(z(), this.ibx_1)
                            : e;
                    this.lbx_1 = null == i ? q() : i;
                    var u,
                        b =
                            (((u = function (n, t, e, i) {
                                return new V(n, t, e, i);
                            }).callableName = "<init>"),
                            u);
                    this.mbx_1 = new X(b);
                }
                function Y(n) {
                    return n.ea().equals(o());
                }
                function nn(n) {
                    n.rbx_1.xbv(n.ybv() && n.qbx_1.ybv());
                }
                function tn(n, t) {
                    (this.ubx_1 = t), j.call(this, n);
                }
                function en(n, t, e, i) {
                    (i = i === r ? q() : i), (this.pbx_1 = n), (this.qbx_1 = i);
                    var u,
                        b =
                            ((u = this.qbx_1),
                            function (n) {
                                return (
                                    (function (n, t) {
                                        n.xbw(t);
                                    })(u, n),
                                    a
                                );
                            }),
                        c = (function (n) {
                            var t = function (t) {
                                return n.ybw(t), a;
                            };
                            return (t.callableName = "progressPredictiveBack"), t;
                        })(this.qbx_1),
                        s = (function (n) {
                            var t = function () {
                                return n.zbw(), a;
                            };
                            return (t.callableName = "cancelPredictiveBack"), t;
                        })(this.qbx_1);
                    this.rbx_1 = E(
                        !1,
                        e,
                        b,
                        c,
                        s,
                        (function (n) {
                            return function () {
                                return n.wbw(), a;
                            };
                        })(this.qbx_1),
                    );
                    var o;
                    (this.sbx_1 = new tn(t, this)),
                        this.qbx_1.zbv(
                            ((o = this),
                            function (n) {
                                return nn(o), a;
                            }),
                        );
                }
                function un() {
                    this.vbx_1 = z();
                }
                function bn(n, t) {
                    (this.wbx_1 = n), (this.xbx_1 = t);
                }
                function rn(n) {
                    this.ybx_1 = n;
                }
                function an(n, t) {
                    switch (t.y2_1) {
                        case 0:
                            !(function (n) {
                                switch (n.zbx_1.ea().y2_1) {
                                    case 0:
                                        break;
                                    case 1:
                                        W(n.zbx_1), B(n.zbx_1);
                                        break;
                                    case 2:
                                    case 3:
                                    case 4:
                                        B(n.zbx_1);
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
                                switch (n.zbx_1.ea().y2_1) {
                                    case 0:
                                    case 2:
                                        break;
                                    case 1:
                                        W(n.zbx_1);
                                        break;
                                    case 3:
                                    case 4:
                                        D(n.zbx_1);
                                        break;
                                    default:
                                        U();
                                }
                            })(n);
                            break;
                        case 3:
                            !(function (n) {
                                switch (n.zbx_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                        F(n.zbx_1);
                                        break;
                                    case 4:
                                        H(n.zbx_1);
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
                                switch (n.zbx_1.ea().y2_1) {
                                    case 1:
                                    case 2:
                                    case 3:
                                        P(n.zbx_1);
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
                    this.aby_1 = n;
                }
                function sn(n, t, e, i) {
                    (this.bby_1 = n), (this.cby_1 = t), (this.dby_1 = e), (this.eby_1 = i);
                }
                function on(n, t, e) {
                    this.zbx_1 = n;
                    var i,
                        u,
                        b,
                        r = { _v: t.ea().equals(o()) ? o() : G() },
                        c = { _v: e.ea().equals(o()) ? o() : G() };
                    if ((an(this, Z(r._v, c._v)), !r._v.equals(o()) && !c._v.equals(o()))) {
                        var s = new cn(
                                ((i = r),
                                (u = this),
                                (b = c),
                                function (n) {
                                    return (i._v = n), an(u, Z(n, b._v)), a;
                                }),
                            ),
                            _ = new cn(
                                (function (n, t, e) {
                                    return function (i) {
                                        return (n._v = i), an(t, Z(i, e._v)), a;
                                    };
                                })(c, this, r),
                            );
                        t.ebv(s), e.ebv(_);
                        var l = this.zbx_1;
                        l.ea().equals(o()) ? (t.nbv(s), e.nbv(_)) : l.ebv(new sn(t, s, e, _));
                    }
                }
                function _n(n, t) {
                    (this.fby_1 = n), (this.gby_1 = t);
                }
                d(K, r, r, r, [$]),
                    w(M, "ComponentContextFactory"),
                    d(X, "sam$com_arkivanov_decompose_ComponentContextFactory$0", r, r, [M, p]),
                    d(V, "DefaultComponentContext"),
                    d(tn, r, r, j),
                    d(en, "DefaultChildBackHandler"),
                    d(un, "ChildInstanceKeeperProvider", un, r, [L]),
                    d(bn, r, r, r, [$]),
                    d(rn, r, r, r, [$]),
                    d(cn, "CallbacksImpl", r, r, [$]),
                    d(sn, r, r, r, [$]),
                    d(on, "MergedLifecycle"),
                    d(_n, r, r, r, [$]),
                    (_(K).lae = function () {
                        throw s(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                    }),
                    (_(X).gbx = function (n, t, e, i) {
                        return this.hbx_1(n, t, e, i);
                    }),
                    (_(X).a4 = function () {
                        return this.hbx_1;
                    }),
                    (_(X).equals = function (n) {
                        var t;
                        null != n && k(n, M) ? (t = !(null == n || !k(n, p)) && y(this.a4(), n.a4())) : (t = !1);
                        return t;
                    }),
                    (_(X).hashCode = function () {
                        return A(this.a4());
                    }),
                    (_(V).cbx = function () {
                        return this.ibx_1;
                    }),
                    (_(V).dbx = function () {
                        return this.jbx_1;
                    }),
                    (_(V).ebx = function () {
                        return this.kbx_1;
                    }),
                    (_(V).fbx = function () {
                        return this.lbx_1;
                    }),
                    (_(V).bbx = function () {
                        return this.mbx_1;
                    }),
                    (_(tn).tbv = function (n, t, e) {
                        return nn(this.ubx_1), a;
                    }),
                    (_(tn).hl = function (n, t, e) {
                        var i = null == t || null != t ? t : N();
                        return this.tbv(n, i, null == e || null != e ? e : N());
                    }),
                    (_(en).xbv = function (n) {
                        return this.sbx_1.kl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.ybv();
                                },
                                function (n, t) {
                                    return n.xbv(t);
                                },
                            ),
                            n,
                        );
                    }),
                    (_(en).ybv = function () {
                        return this.sbx_1.dl(
                            this,
                            O(
                                "isEnabled",
                                1,
                                I,
                                function (n) {
                                    return n.ybv();
                                },
                                function (n, t) {
                                    return n.xbv(t);
                                },
                            ),
                        );
                    }),
                    (_(en).nbx = function () {
                        this.pbx_1.tbw(this.rbx_1) || this.pbx_1.ubw(this.rbx_1);
                    }),
                    (_(en).obx = function () {
                        this.pbx_1.tbw(this.rbx_1) && this.pbx_1.vbw(this.rbx_1);
                    }),
                    (_(en).tbw = function (n) {
                        return this.qbx_1.tbw(n);
                    }),
                    (_(en).ubw = function (n) {
                        this.qbx_1.ubw(n);
                    }),
                    (_(en).vbw = function (n) {
                        this.qbx_1.vbw(n);
                    }),
                    (_(un).lae = function () {
                        this.vbx_1.nae();
                    }),
                    (_(bn).lae = function () {
                        var n = this.wbx_1.mae(this.xbx_1);
                        null == n || n.lae();
                    }),
                    (_(rn).lae = function () {
                        this.ybx_1.nae();
                    }),
                    (_(cn).abv = function () {
                        this.aby_1(S());
                    }),
                    (_(cn).w1b = function () {
                        this.aby_1(C());
                    }),
                    (_(cn).bbv = function () {
                        this.aby_1(Q());
                    }),
                    (_(cn).cbv = function () {
                        this.aby_1(C());
                    }),
                    (_(cn).dbv = function () {
                        this.aby_1(S());
                    }),
                    (_(cn).lae = function () {
                        this.aby_1(o());
                    }),
                    (_(sn).lae = function () {
                        this.bby_1.nbv(this.cby_1), this.dby_1.nbv(this.eby_1);
                    }),
                    (_(on).ebv = function (n) {
                        this.zbx_1.ebv(n);
                    }),
                    (_(on).nbv = function (n) {
                        this.zbx_1.nbv(n);
                    }),
                    (_(on).ea = function () {
                        return this.zbx_1.ea();
                    }),
                    (_(_n).lae = function () {
                        this.fby_1.rbu(this.gby_1);
                    }),
                    (_(K).abv = l),
                    (_(K).w1b = f),
                    (_(K).bbv = h),
                    (_(K).cbv = v),
                    (_(K).dbv = x),
                    (_(bn).abv = l),
                    (_(bn).w1b = f),
                    (_(bn).bbv = h),
                    (_(bn).cbv = v),
                    (_(bn).dbv = x),
                    (_(rn).abv = l),
                    (_(rn).w1b = f),
                    (_(rn).bbv = h),
                    (_(rn).cbv = v),
                    (_(rn).dbv = x),
                    (_(sn).abv = l),
                    (_(sn).w1b = f),
                    (_(sn).bbv = h),
                    (_(sn).cbv = v),
                    (_(sn).dbv = x),
                    (_(_n).abv = l),
                    (_(_n).w1b = f),
                    (_(_n).bbv = h),
                    (_(_n).cbv = v),
                    (_(_n).dbv = x),
                    (n.$_$ = n.$_$ || {}),
                    (n.$_$.a = V),
                    (n.$_$.b = function (n, t, e) {
                        if (null == (e = e === r ? null : e));
                        else {
                            if (e.ea().equals(o())) {
                                throw s(c("The lifecycle of a child ComponentContext must never be destroyed manually."));
                            }
                            e.ebv(new K());
                        }
                        return n.bbx().gbx(
                            null == e
                                ? n.cbx()
                                : (function (n, t, e) {
                                      return on.call(e, R(), n, t), e;
                                  })(n.cbx(), e, T(_(on))),
                            (function (n, t, e) {
                                if (((e = e === r ? null : e), !!n.qbu(t))) {
                                    throw s(c('The key "' + t + '" is already in use.'));
                                }
                                var i = m(n.obu(t, J.w6b()));
                                if (null == e) {
                                    var u = J.w6b();
                                    n.pbu(
                                        t,
                                        u,
                                        ((a = i),
                                        ((_ = function () {
                                            return a.nbu();
                                        }).callableName = "save"),
                                        _),
                                    );
                                } else if (!Y(e)) {
                                    var b = J.w6b();
                                    n.pbu(
                                        t,
                                        b,
                                        (function (n) {
                                            var t = function () {
                                                return n.nbu();
                                            };
                                            return (t.callableName = "save"), t;
                                        })(i),
                                    ),
                                        e.ea().equals(o()) ? n.rbu(t) : e.ebv(new _n(n, t));
                                }
                                var a, _;
                                return i;
                            })(n.dbx(), t, e),
                            (function (n, t, e) {
                                var i;
                                if (((e = e === r ? null : e), null != e && Y(e))) i = z();
                                else {
                                    var u = n.jae(t),
                                        b = null == u || k(u, L) ? u : N();
                                    null == b && ((b = new un()), n.kae(t, b));
                                    var a = b.vbx_1;
                                    if (null == e);
                                    else if (e.ea().equals(o())) {
                                        var c = n.mae(t);
                                        null == c || c.lae();
                                    } else e.ebv(new bn(n, t));
                                    i = a;
                                }
                                return i;
                            })(n.ebx(), t, e),
                            (function (n, t, e) {
                                t = t === r ? null : t;
                                var i = (function (n, t, e) {
                                    return (e = e === r ? 0 : e), new en(n, (t = t === r || t), e);
                                })(n, !1, (e = e === r ? 0 : e));
                                if (null == t) i.xbv(!0), i.nbx();
                                else if (!Y(t)) {
                                    i.xbv(t.ea().b3(C()) >= 0), i.nbx();
                                    var u =
                                            ((o = i),
                                            function () {
                                                return o.xbv(!0), a;
                                            }),
                                        b = (function (n) {
                                            return function () {
                                                return n.xbv(!1), a;
                                            };
                                        })(i);
                                    g(
                                        t,
                                        r,
                                        u,
                                        r,
                                        r,
                                        b,
                                        ((c = i),
                                        ((s = function () {
                                            return c.obx(), a;
                                        }).callableName = "stop"),
                                        s),
                                    );
                                }
                                var c, s;
                                var o;
                                return i;
                            })(n.fbx(), e),
                        );
                    });
            })(n.exports, e(519039), e(54279), e(440172), e(538264), e(112433));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-5d959941.c455567a.js.map
