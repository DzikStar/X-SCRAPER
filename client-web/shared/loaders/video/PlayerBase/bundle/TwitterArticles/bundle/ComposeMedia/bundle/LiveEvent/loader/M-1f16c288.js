(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288"],
    {
        154462: (e, t, r) => {
            "use strict";
            var n = r(634590);
            t.ZP = void 0;
            var o = r(526);
            t.S_ = o.updateAudioLevels;
            var i = r(790978);
            t.eu = i.updateGuestInfo;
            var u = n(r(187632));
            (t.$4 = u.default), (t.mC = u.registerExperience);
            var s = n(r(427193));
            (t.Nu = s.resetGuestState), (t.Nt = s.teardownExperience);
            var a = s.default;
            t.ZP = a;
        },
        526: (e, t, r) => {
            "use strict";
            r(332501), r(43105), (t.__esModule = !0), (t.default = t.InitialState = t.updateAudioLevels = t.UPDATE_AUDIO_LEVELS = void 0);
            var n = "UPDATE_AUDIO_LEVELS";
            t.UPDATE_AUDIO_LEVELS = n;
            t.updateAudioLevels = function (e, t) {
                return { type: n, audioLevels: t, experienceId: e };
            };
            var o = { guests: {}, host: 0 };
            t.InitialState = o;
            t.default = function (e, t) {
                if ((void 0 === e && (e = o), t.type === n)) {
                    for (var r = t.audioLevels, i = r[0], u = r.slice(1), s = {}, a = 0; a < u.length; a++) s[a] = u[a];
                    return Object.assign({}, e, { guests: s, host: i });
                }
                return e;
            };
        },
        790978: (e, t) => {
            "use strict";
            (t.__esModule = !0), (t.default = t.updateGuestInfo = t.UPDATE_GUEST_INFO = void 0);
            var r = "UPDATE_GUEST_INFO";
            t.UPDATE_GUEST_INFO = r;
            t.updateGuestInfo = function (e, t) {
                return { type: r, guestInfo: t, experienceId: e };
            };
            t.default = function (e, t) {
                if ((void 0 === e && (e = {}), t.type === r)) {
                    for (var n = t.guestInfo, o = {}, i = 0; i < n.length; i++) {
                        var u = n[i],
                            s = u.ParticipantIndex,
                            a = u.ProfileUrl,
                            c = u.SessionId,
                            f = u.StreamName,
                            p = u.UserId,
                            l = u.UserName;
                        o[i] = { ParticipantIndex: s, ProfileUrl: a, SessionId: c, StreamName: f, UserId: p, UserName: l };
                    }
                    return o;
                }
                return e;
            };
        },
        187632: (e, t, r) => {
            "use strict";
            var n = r(171600);
            r(543450), r(271245), r(966466), r(977208), r(334769), (t.__esModule = !0), (t.default = t.registerExperience = t.REGISTER_EXPERIENCE = void 0);
            var o = n(r(373408)),
                i = r(427193),
                u = "REGISTER_EXPERIENCE";
            t.REGISTER_EXPERIENCE = u;
            t.registerExperience = function () {
                return { type: u };
            };
            t.default = function (e) {
                return function (t) {
                    return function (r) {
                        if (r.type === u) {
                            var n = e.getState(),
                                s = Object.keys(n.hydraExperiences || {}).map(function (e) {
                                    return Number.parseInt(e, 10);
                                }),
                                a = Math.max.apply(Math, (0, o.default)(s)) + 1;
                            return Number.isFinite(a) || (a = 0), e.dispatch((0, i.initializeExperience)(a)), a;
                        }
                        return t(r);
                    };
                };
            };
        },
        427193: (e, t, r) => {
            "use strict";
            var n = r(634590),
                o = r(171600);
            r(43105), (t.__esModule = !0), (t.default = t.resetGuestState = t.RESET_GUEST_STATE = t.teardownExperience = t.TEARDOWN_EXPERIENCE = t.initializeExperience = t.INITIALIZE_EXPERIENCE = void 0);
            var i = r(10674),
                u = o(r(790978)),
                s = n(r(526)),
                a = "INITIALIZE_EXPERIENCE";
            t.INITIALIZE_EXPERIENCE = a;
            t.initializeExperience = function (e) {
                return { type: a, experienceId: e };
            };
            var c = "TEARDOWN_EXPERIENCE";
            t.TEARDOWN_EXPERIENCE = c;
            t.teardownExperience = function (e) {
                return { type: c, experienceId: e };
            };
            var f = "RESET_GUEST_STATE";
            t.RESET_GUEST_STATE = f;
            t.resetGuestState = function (e) {
                return { type: f, experienceId: e };
            };
            var p = { audioLevels: s.InitialState, guests: {} },
                l = (0, i.combineReducers)({ audioLevels: s.default, guests: u.default });
            t.default = function (e, t, r) {
                var n;
                if ((void 0 === e && (e = {}), void 0 === r && (r = l), void 0 !== t.experienceId))
                    switch (t.type) {
                        case a:
                        case f:
                            return Object.assign({}, e, (((n = {})[t.experienceId] = p), n));
                        case c:
                            var o = Object.assign({}, e);
                            return delete o[t.experienceId], o;
                        default:
                            var i,
                                u = r(e[t.experienceId], t);
                            return Object.assign({}, e, (((i = {})[t.experienceId] = u), i));
                    }
                return e;
            };
        },
        10674: (e, t, r) => {
            "use strict";
            r(743108), r(334769), (t.__esModule = !0), (t.combineReducers = void 0);
            t.combineReducers = function (e) {
                return function (t, r) {
                    return Object.keys(e).reduce(function (n, o) {
                        return (n[o] = e[o](t[o], r)), n;
                    }, {});
                };
            };
        },
        689996: (e, t, r) => {
            "use strict";
            var n = r(497636),
                o = r(265968),
                i = r(409337),
                u = r(492991),
                s = r(639646),
                a = r(387501),
                c = o([].push),
                f = function (e) {
                    var t = 1 === e,
                        r = 2 === e,
                        o = 3 === e,
                        f = 4 === e,
                        p = 6 === e,
                        l = 7 === e,
                        d = 5 === e || p;
                    return function (v, E, x, I) {
                        for (var _, y, b = u(v), m = i(b), g = n(E, x), h = s(m), N = 0, S = I || a, A = t ? S(v, h) : r || l ? S(v, 0) : void 0; h > N; N++)
                            if ((d || N in m) && ((y = g((_ = m[N]), N, b)), e))
                                if (t) A[N] = y;
                                else if (y)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return _;
                                        case 6:
                                            return N;
                                        case 2:
                                            c(A, _);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(A, _);
                                    }
                        return p ? -1 : o || f ? f : A;
                    };
                };
            e.exports = { forEach: f(0), map: f(1), filter: f(2), some: f(3), every: f(4), find: f(5), findIndex: f(6), filterReject: f(7) };
        },
        331460: (e, t, r) => {
            "use strict";
            var n = r(824229),
                o = r(670095),
                i = r(406358),
                u = o("species");
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !n(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[u] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (e, t, r) => {
            "use strict";
            var n = r(824229);
            e.exports = function (e, t) {
                var r = [][e];
                return (
                    !!r &&
                    n(function () {
                        r.call(
                            null,
                            t ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (e, t, r) => {
            "use strict";
            var n = r(277111),
                o = r(492991),
                i = r(409337),
                u = r(639646),
                s = TypeError,
                a = function (e) {
                    return function (t, r, a, c) {
                        n(r);
                        var f = o(t),
                            p = i(f),
                            l = u(f),
                            d = e ? l - 1 : 0,
                            v = e ? -1 : 1;
                        if (a < 2)
                            for (;;) {
                                if (d in p) {
                                    (c = p[d]), (d += v);
                                    break;
                                }
                                if (((d += v), e ? d < 0 : l <= d)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; e ? d >= 0 : l > d; d += v) d in p && (c = r(c, p[d], d, f));
                        return c;
                    };
                };
            e.exports = { left: a(!1), right: a(!0) };
        },
        1909: (e, t, r) => {
            "use strict";
            var n = r(265968);
            e.exports = n([].slice);
        },
        118760: (e, t, r) => {
            "use strict";
            var n = r(33718),
                o = r(782359),
                i = r(685052),
                u = r(670095)("species"),
                s = Array;
            e.exports = function (e) {
                var t;
                return n(e) && ((t = e.constructor), ((o(t) && (t === s || n(t.prototype))) || (i(t) && null === (t = t[u]))) && (t = void 0)), void 0 === t ? s : t;
            };
        },
        387501: (e, t, r) => {
            "use strict";
            var n = r(118760);
            e.exports = function (e, t) {
                return new (n(e))(0 === t ? 0 : t);
            };
        },
        128801: (e, t, r) => {
            "use strict";
            var n = r(609859),
                o = r(427079);
            e.exports = "process" === o(n.process);
        },
        782359: (e, t, r) => {
            "use strict";
            var n = r(265968),
                o = r(824229),
                i = r(26733),
                u = r(781589),
                s = r(431333),
                a = r(108511),
                c = function () {},
                f = [],
                p = s("Reflect", "construct"),
                l = /^\s*(?:class|function)\b/,
                d = n(l.exec),
                v = !l.test(c),
                E = function (e) {
                    if (!i(e)) return !1;
                    try {
                        return p(c, f, e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                x = function (e) {
                    if (!i(e)) return !1;
                    switch (u(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return v || !!d(l, a(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (x.sham = !0),
                (e.exports =
                    !p ||
                    o(function () {
                        var e;
                        return (
                            E(E.call) ||
                            !E(Object) ||
                            !E(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? x
                        : E);
        },
        953775: (e, t, r) => {
            "use strict";
            var n = r(609859).isFinite;
            e.exports =
                Number.isFinite ||
                function (e) {
                    return "number" == typeof e && n(e);
                };
        },
        36596: (e, t, r) => {
            "use strict";
            var n = r(609859),
                o = r(824229),
                i = r(265968),
                u = r(783326),
                s = r(1017).trim,
                a = r(841647),
                c = n.parseInt,
                f = n.Symbol,
                p = f && f.iterator,
                l = /^[+-]?0x/i,
                d = i(l.exec),
                v =
                    8 !== c(a + "08") ||
                    22 !== c(a + "0x16") ||
                    (p &&
                        !o(function () {
                            c(Object(p));
                        }));
            e.exports = v
                ? function (e, t) {
                      var r = s(u(e));
                      return c(r, t >>> 0 || (d(l, r) ? 16 : 10));
                  }
                : c;
        },
        700047: (e, t, r) => {
            "use strict";
            var n = r(807400),
                o = r(265968),
                i = r(720266),
                u = r(824229),
                s = r(765632),
                a = r(110894),
                c = r(119195),
                f = r(492991),
                p = r(409337),
                l = Object.assign,
                d = Object.defineProperty,
                v = o([].concat);
            e.exports =
                !l ||
                u(function () {
                    if (
                        n &&
                        1 !==
                            l(
                                { b: 1 },
                                l(
                                    d({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            d(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var e = {},
                        t = {},
                        r = Symbol("assign detection"),
                        o = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        o.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== l({}, e)[r] || s(l({}, t)).join("") !== o
                    );
                })
                    ? function (e, t) {
                          for (var r = f(e), o = arguments.length, u = 1, l = a.f, d = c.f; o > u; ) for (var E, x = p(arguments[u++]), I = l ? v(s(x), l(x)) : s(x), _ = I.length, y = 0; _ > y; ) (E = I[y++]), (n && !i(d, x, E)) || (r[E] = x[E]);
                          return r;
                      }
                    : l;
        },
        849276: (e, t, r) => {
            "use strict";
            var n = r(609859);
            e.exports = n;
        },
        1017: (e, t, r) => {
            "use strict";
            var n = r(265968),
                o = r(558885),
                i = r(783326),
                u = r(841647),
                s = n("".replace),
                a = RegExp("^[" + u + "]+"),
                c = RegExp("(^|[^" + u + "])[" + u + "]+$"),
                f = function (e) {
                    return function (t) {
                        var r = i(o(t));
                        return 1 & e && (r = s(r, a, "")), 2 & e && (r = s(r, c, "$1")), r;
                    };
                };
            e.exports = { start: f(1), end: f(2), trim: f(3) };
        },
        890143: (e, t, r) => {
            "use strict";
            var n = r(265968);
            e.exports = n((1).valueOf);
        },
        841647: (e) => {
            "use strict";
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(689996).map;
            n(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (e) {
                        return o(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(43143).left,
                i = r(696038),
                u = r(406358);
            n(
                { target: "Array", proto: !0, forced: (!r(128801) && u > 79 && u < 83) || !i("reduce") },
                {
                    reduce: function (e) {
                        var t = arguments.length;
                        return o(this, e, t, t > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(33718),
                i = r(782359),
                u = r(685052),
                s = r(443231),
                a = r(639646),
                c = r(910905),
                f = r(462324),
                p = r(670095),
                l = r(331460),
                d = r(1909),
                v = l("slice"),
                E = p("species"),
                x = Array,
                I = Math.max;
            n(
                { target: "Array", proto: !0, forced: !v },
                {
                    slice: function (e, t) {
                        var r,
                            n,
                            p,
                            l = c(this),
                            v = a(l),
                            _ = s(e, v),
                            y = s(void 0 === t ? v : t, v);
                        if (o(l) && ((r = l.constructor), ((i(r) && (r === x || o(r.prototype))) || (u(r) && null === (r = r[E]))) && (r = void 0), r === x || void 0 === r)) return d(l, _, y);
                        for (n = new (void 0 === r ? x : r)(I(y - _, 0)), p = 0; _ < y; _++, p++) _ in l && f(n, p, l[_]);
                        return (n.length = p), n;
                    },
                },
            );
        },
        271245: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(124231),
                i = r(807400),
                u = r(609859),
                s = r(849276),
                a = r(265968),
                c = r(46541),
                f = r(198270),
                p = r(720835),
                l = r(291321),
                d = r(349395),
                v = r(992066),
                E = r(824229),
                x = r(778151).f,
                I = r(997933).f,
                _ = r(931787).f,
                y = r(890143),
                b = r(1017).trim,
                m = "Number",
                g = u[m],
                h = s[m],
                N = g.prototype,
                S = u.TypeError,
                A = a("".slice),
                T = a("".charCodeAt),
                O = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        i,
                        u,
                        s,
                        a,
                        c = v(e, "number");
                    if (d(c)) throw new S("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = b(c)), 43 === (t = T(c, 0)) || 45 === t)) {
                            if (88 === (r = T(c, 2)) || 120 === r) return NaN;
                        } else if (48 === t) {
                            switch (T(c, 1)) {
                                case 66:
                                case 98:
                                    (n = 2), (o = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (o = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (u = (i = A(c, 2)).length, s = 0; s < u; s++) if ((a = T(i, s)) < 48 || a > o) return NaN;
                            return parseInt(i, n);
                        }
                    return +c;
                },
                w = c(m, !g(" 0o1") || !g("0b1") || g("+0x1")),
                R = function (e) {
                    var t,
                        r =
                            arguments.length < 1
                                ? 0
                                : g(
                                      (function (e) {
                                          var t = v(e, "number");
                                          return "bigint" == typeof t ? t : O(t);
                                      })(e),
                                  );
                    return l(N, (t = this)) &&
                        E(function () {
                            y(t);
                        })
                        ? p(Object(r), this, R)
                        : r;
                };
            (R.prototype = N), w && !o && (N.constructor = R), n({ global: !0, constructor: !0, wrap: !0, forced: w }, { Number: R });
            var M = function (e, t) {
                for (var r, n = i ? x(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), o = 0; n.length > o; o++) f(t, (r = n[o])) && !f(e, r) && _(e, r, I(t, r));
            };
            o && h && M(s[m], h), (w || o) && M(s[m], g);
        },
        966466: (e, t, r) => {
            "use strict";
            r(23103)({ target: "Number", stat: !0 }, { isFinite: r(953775) });
        },
        977208: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(36596);
            n({ target: "Number", stat: !0, forced: Number.parseInt !== o }, { parseInt: o });
        },
        43105: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(700047);
            n({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== o }, { assign: o });
        },
        334769: (e, t, r) => {
            "use strict";
            var n = r(23103),
                o = r(492991),
                i = r(765632);
            n(
                {
                    target: "Object",
                    stat: !0,
                    forced: r(824229)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (e) {
                        return i(o(e));
                    },
                },
            );
        },
        485748: (e) => {
            (e.exports = function (e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
                return n;
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        813850: (e, t, r) => {
            var n = r(485748);
            (e.exports = function (e) {
                if (Array.isArray(e)) return n(e);
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        171600: (e) => {
            (e.exports = function (e) {
                return e && e.__esModule ? e : { default: e };
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        634590: (e, t, r) => {
            var n = r(667425).default;
            function o(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    r = new WeakMap();
                return (o = function (e) {
                    return e ? r : t;
                })(e);
            }
            (e.exports = function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != n(e) && "function" != typeof e)) return { default: e };
                var r = o(t);
                if (r && r.has(e)) return r.get(e);
                var i = { __proto__: null },
                    u = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var s in e)
                    if ("default" !== s && {}.hasOwnProperty.call(e, s)) {
                        var a = u ? Object.getOwnPropertyDescriptor(e, s) : null;
                        a && (a.get || a.set) ? Object.defineProperty(i, s, a) : (i[s] = e[s]);
                    }
                return (i.default = e), r && r.set(e, i), i;
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        623912: (e) => {
            (e.exports = function (e) {
                if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        83096: (e) => {
            (e.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        373408: (e, t, r) => {
            var n = r(813850),
                o = r(623912),
                i = r(360121),
                u = r(83096);
            (e.exports = function (e) {
                return n(e) || o(e) || i(e) || u();
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        667425: (e) => {
            function t(r) {
                return (
                    (e.exports = t =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports),
                    t(r)
                );
            }
            (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
        },
        360121: (e, t, r) => {
            var n = r(485748);
            (e.exports = function (e, t) {
                if (e) {
                    if ("string" == typeof e) return n(e, t);
                    var r = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0;
                }
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loaders.video.PlayerBase~bundle.TwitterArticles~bundle.ComposeMedia~bundle.LiveEvent~loader.M-1f16c288.3405ba7a.js.map
