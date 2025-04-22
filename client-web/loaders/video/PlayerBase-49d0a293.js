(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.PlayerBase-49d0a293"],
    {
        154462: (e, t, r) => {
            "use strict";
            var n = r(634590);
            t.ZP = void 0;
            var i = r(526);
            t.S_ = i.updateAudioLevels;
            var u = r(790978);
            t.eu = u.updateGuestInfo;
            var s = n(r(187632));
            (t.$4 = s.default), (t.mC = s.registerExperience);
            var a = n(r(427193));
            (t.Nu = a.resetGuestState), (t.Nt = a.teardownExperience);
            var o = a.default;
            t.ZP = o;
        },
        526: (e, t, r) => {
            "use strict";
            r(332501), r(43105), (t.__esModule = !0), (t.default = t.InitialState = t.updateAudioLevels = t.UPDATE_AUDIO_LEVELS = void 0);
            var n = "UPDATE_AUDIO_LEVELS";
            t.UPDATE_AUDIO_LEVELS = n;
            t.updateAudioLevels = function (e, t) {
                return { type: n, audioLevels: t, experienceId: e };
            };
            var i = { guests: {}, host: 0 };
            t.InitialState = i;
            t.default = function (e, t) {
                if ((void 0 === e && (e = i), t.type === n)) {
                    for (var r = t.audioLevels, u = r[0], s = r.slice(1), a = {}, o = 0; o < s.length; o++) a[o] = s[o];
                    return Object.assign({}, e, { guests: a, host: u });
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
                    for (var n = t.guestInfo, i = {}, u = 0; u < n.length; u++) {
                        var s = n[u],
                            a = s.ParticipantIndex,
                            o = s.ProfileUrl,
                            c = s.SessionId,
                            f = s.StreamName,
                            p = s.UserId,
                            l = s.UserName;
                        i[u] = { ParticipantIndex: a, ProfileUrl: o, SessionId: c, StreamName: f, UserId: p, UserName: l };
                    }
                    return i;
                }
                return e;
            };
        },
        187632: (e, t, r) => {
            "use strict";
            var n = r(171600);
            r(543450), r(271245), r(966466), r(977208), r(334769), (t.__esModule = !0), (t.default = t.registerExperience = t.REGISTER_EXPERIENCE = void 0);
            var i = n(r(373408)),
                u = r(427193),
                s = "REGISTER_EXPERIENCE";
            t.REGISTER_EXPERIENCE = s;
            t.registerExperience = function () {
                return { type: s };
            };
            t.default = function (e) {
                return function (t) {
                    return function (r) {
                        if (r.type === s) {
                            var n = e.getState(),
                                a = Object.keys(n.hydraExperiences || {}).map(function (e) {
                                    return Number.parseInt(e, 10);
                                }),
                                o = Math.max.apply(Math, (0, i.default)(a)) + 1;
                            return Number.isFinite(o) || (o = 0), e.dispatch((0, u.initializeExperience)(o)), o;
                        }
                        return t(r);
                    };
                };
            };
        },
        427193: (e, t, r) => {
            "use strict";
            var n = r(634590),
                i = r(171600);
            r(43105), (t.__esModule = !0), (t.default = t.resetGuestState = t.RESET_GUEST_STATE = t.teardownExperience = t.TEARDOWN_EXPERIENCE = t.initializeExperience = t.INITIALIZE_EXPERIENCE = void 0);
            var u = r(10674),
                s = i(r(790978)),
                a = n(r(526)),
                o = "INITIALIZE_EXPERIENCE";
            t.INITIALIZE_EXPERIENCE = o;
            t.initializeExperience = function (e) {
                return { type: o, experienceId: e };
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
            var p = { audioLevels: a.InitialState, guests: {} },
                l = (0, u.combineReducers)({ audioLevels: a.default, guests: s.default });
            t.default = function (e, t, r) {
                var n;
                if ((void 0 === e && (e = {}), void 0 === r && (r = l), void 0 !== t.experienceId))
                    switch (t.type) {
                        case o:
                        case f:
                            return Object.assign({}, e, (((n = {})[t.experienceId] = p), n));
                        case c:
                            var i = Object.assign({}, e);
                            return delete i[t.experienceId], i;
                        default:
                            var u,
                                s = r(e[t.experienceId], t);
                            return Object.assign({}, e, (((u = {})[t.experienceId] = s), u));
                    }
                return e;
            };
        },
        10674: (e, t, r) => {
            "use strict";
            r(743108), r(334769), (t.__esModule = !0), (t.combineReducers = void 0);
            t.combineReducers = function (e) {
                return function (t, r) {
                    return Object.keys(e).reduce(function (n, i) {
                        return (n[i] = e[i](t[i], r)), n;
                    }, {});
                };
            };
        },
        689996: (e, t, r) => {
            "use strict";
            var n = r(497636),
                i = r(265968),
                u = r(409337),
                s = r(492991),
                a = r(639646),
                o = r(387501),
                c = i([].push),
                f = function (e) {
                    var t = 1 === e,
                        r = 2 === e,
                        i = 3 === e,
                        f = 4 === e,
                        p = 6 === e,
                        l = 7 === e,
                        d = 5 === e || p;
                    return function (v, E, I, _) {
                        for (var b, g, x = s(v), N = u(x), y = n(E, I), h = a(N), m = 0, S = _ || o, T = t ? S(v, h) : r || l ? S(v, 0) : void 0; h > m; m++)
                            if ((d || m in N) && ((g = y((b = N[m]), m, x)), e))
                                if (t) T[m] = g;
                                else if (g)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return b;
                                        case 6:
                                            return m;
                                        case 2:
                                            c(T, b);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(T, b);
                                    }
                        return p ? -1 : i || f ? f : T;
                    };
                };
            e.exports = { forEach: f(0), map: f(1), filter: f(2), some: f(3), every: f(4), find: f(5), findIndex: f(6), filterReject: f(7) };
        },
        331460: (e, t, r) => {
            "use strict";
            var n = r(824229),
                i = r(670095),
                u = r(406358),
                s = i("species");
            e.exports = function (e) {
                return (
                    u >= 51 ||
                    !n(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[s] = function () {
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
                i = r(492991),
                u = r(409337),
                s = r(639646),
                a = TypeError,
                o = function (e) {
                    return function (t, r, o, c) {
                        n(r);
                        var f = i(t),
                            p = u(f),
                            l = s(f),
                            d = e ? l - 1 : 0,
                            v = e ? -1 : 1;
                        if (o < 2)
                            for (;;) {
                                if (d in p) {
                                    (c = p[d]), (d += v);
                                    break;
                                }
                                if (((d += v), e ? d < 0 : l <= d)) throw new a("Reduce of empty array with no initial value");
                            }
                        for (; e ? d >= 0 : l > d; d += v) d in p && (c = r(c, p[d], d, f));
                        return c;
                    };
                };
            e.exports = { left: o(!1), right: o(!0) };
        },
        1909: (e, t, r) => {
            "use strict";
            var n = r(265968);
            e.exports = n([].slice);
        },
        118760: (e, t, r) => {
            "use strict";
            var n = r(33718),
                i = r(782359),
                u = r(685052),
                s = r(670095)("species"),
                a = Array;
            e.exports = function (e) {
                var t;
                return n(e) && ((t = e.constructor), ((i(t) && (t === a || n(t.prototype))) || (u(t) && null === (t = t[s]))) && (t = void 0)), void 0 === t ? a : t;
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
                i = r(427079);
            e.exports = "process" === i(n.process);
        },
        782359: (e, t, r) => {
            "use strict";
            var n = r(265968),
                i = r(824229),
                u = r(26733),
                s = r(781589),
                a = r(431333),
                o = r(108511),
                c = function () {},
                f = [],
                p = a("Reflect", "construct"),
                l = /^\s*(?:class|function)\b/,
                d = n(l.exec),
                v = !l.test(c),
                E = function (e) {
                    if (!u(e)) return !1;
                    try {
                        return p(c, f, e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                I = function (e) {
                    if (!u(e)) return !1;
                    switch (s(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return v || !!d(l, o(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (I.sham = !0),
                (e.exports =
                    !p ||
                    i(function () {
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
                        ? I
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
                i = r(824229),
                u = r(265968),
                s = r(783326),
                a = r(1017).trim,
                o = r(841647),
                c = n.parseInt,
                f = n.Symbol,
                p = f && f.iterator,
                l = /^[+-]?0x/i,
                d = u(l.exec),
                v =
                    8 !== c(o + "08") ||
                    22 !== c(o + "0x16") ||
                    (p &&
                        !i(function () {
                            c(Object(p));
                        }));
            e.exports = v
                ? function (e, t) {
                      var r = a(s(e));
                      return c(r, t >>> 0 || (d(l, r) ? 16 : 10));
                  }
                : c;
        },
        700047: (e, t, r) => {
            "use strict";
            var n = r(807400),
                i = r(265968),
                u = r(720266),
                s = r(824229),
                a = r(765632),
                o = r(110894),
                c = r(119195),
                f = r(492991),
                p = r(409337),
                l = Object.assign,
                d = Object.defineProperty,
                v = i([].concat);
            e.exports =
                !l ||
                s(function () {
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
                        i = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        i.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== l({}, e)[r] || a(l({}, t)).join("") !== i
                    );
                })
                    ? function (e, t) {
                          for (var r = f(e), i = arguments.length, s = 1, l = o.f, d = c.f; i > s; ) for (var E, I = p(arguments[s++]), _ = l ? v(a(I), l(I)) : a(I), b = _.length, g = 0; b > g; ) (E = _[g++]), (n && !u(d, I, E)) || (r[E] = I[E]);
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
                i = r(558885),
                u = r(783326),
                s = r(841647),
                a = n("".replace),
                o = RegExp("^[" + s + "]+"),
                c = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                f = function (e) {
                    return function (t) {
                        var r = u(i(t));
                        return 1 & e && (r = a(r, o, "")), 2 & e && (r = a(r, c, "$1")), r;
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
                i = r(689996).map;
            n(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (e) {
                        return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(43143).left,
                u = r(696038),
                s = r(406358);
            n(
                { target: "Array", proto: !0, forced: (!r(128801) && s > 79 && s < 83) || !u("reduce") },
                {
                    reduce: function (e) {
                        var t = arguments.length;
                        return i(this, e, t, t > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(33718),
                u = r(782359),
                s = r(685052),
                a = r(443231),
                o = r(639646),
                c = r(910905),
                f = r(462324),
                p = r(670095),
                l = r(331460),
                d = r(1909),
                v = l("slice"),
                E = p("species"),
                I = Array,
                _ = Math.max;
            n(
                { target: "Array", proto: !0, forced: !v },
                {
                    slice: function (e, t) {
                        var r,
                            n,
                            p,
                            l = c(this),
                            v = o(l),
                            b = a(e, v),
                            g = a(void 0 === t ? v : t, v);
                        if (i(l) && ((r = l.constructor), ((u(r) && (r === I || i(r.prototype))) || (s(r) && null === (r = r[E]))) && (r = void 0), r === I || void 0 === r)) return d(l, b, g);
                        for (n = new (void 0 === r ? I : r)(_(g - b, 0)), p = 0; b < g; b++, p++) b in l && f(n, p, l[b]);
                        return (n.length = p), n;
                    },
                },
            );
        },
        271245: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(124231),
                u = r(807400),
                s = r(609859),
                a = r(849276),
                o = r(265968),
                c = r(46541),
                f = r(198270),
                p = r(720835),
                l = r(291321),
                d = r(349395),
                v = r(992066),
                E = r(824229),
                I = r(778151).f,
                _ = r(997933).f,
                b = r(931787).f,
                g = r(890143),
                x = r(1017).trim,
                N = "Number",
                y = s[N],
                h = a[N],
                m = y.prototype,
                S = s.TypeError,
                T = o("".slice),
                A = o("".charCodeAt),
                O = function (e) {
                    var t,
                        r,
                        n,
                        i,
                        u,
                        s,
                        a,
                        o,
                        c = v(e, "number");
                    if (d(c)) throw new S("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = x(c)), 43 === (t = A(c, 0)) || 45 === t)) {
                            if (88 === (r = A(c, 2)) || 120 === r) return NaN;
                        } else if (48 === t) {
                            switch (A(c, 1)) {
                                case 66:
                                case 98:
                                    (n = 2), (i = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (i = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (s = (u = T(c, 2)).length, a = 0; a < s; a++) if ((o = A(u, a)) < 48 || o > i) return NaN;
                            return parseInt(u, n);
                        }
                    return +c;
                },
                R = c(N, !y(" 0o1") || !y("0b1") || y("+0x1")),
                P = function (e) {
                    var t,
                        r =
                            arguments.length < 1
                                ? 0
                                : y(
                                      (function (e) {
                                          var t = v(e, "number");
                                          return "bigint" == typeof t ? t : O(t);
                                      })(e),
                                  );
                    return l(m, (t = this)) &&
                        E(function () {
                            g(t);
                        })
                        ? p(Object(r), this, P)
                        : r;
                };
            (P.prototype = m), R && !i && (m.constructor = P), n({ global: !0, constructor: !0, wrap: !0, forced: R }, { Number: P });
            var w = function (e, t) {
                for (var r, n = u ? I(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0; n.length > i; i++) f(t, (r = n[i])) && !f(e, r) && b(e, r, _(t, r));
            };
            i && h && w(a[N], h), (R || i) && w(a[N], y);
        },
        966466: (e, t, r) => {
            "use strict";
            r(23103)({ target: "Number", stat: !0 }, { isFinite: r(953775) });
        },
        977208: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(36596);
            n({ target: "Number", stat: !0, forced: Number.parseInt !== i }, { parseInt: i });
        },
        43105: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(700047);
            n({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== i }, { assign: i });
        },
        334769: (e, t, r) => {
            "use strict";
            var n = r(23103),
                i = r(492991),
                u = r(765632);
            n(
                {
                    target: "Object",
                    stat: !0,
                    forced: r(824229)(function () {
                        u(1);
                    }),
                },
                {
                    keys: function (e) {
                        return u(i(e));
                    },
                },
            );
        },
        634590: (e, t, r) => {
            var n = r(667425).default;
            function i(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap(),
                    r = new WeakMap();
                return (i = function (e) {
                    return e ? r : t;
                })(e);
            }
            (e.exports = function (e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || ("object" != n(e) && "function" != typeof e)) return { default: e };
                var r = i(t);
                if (r && r.has(e)) return r.get(e);
                var u = { __proto__: null },
                    s = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var a in e)
                    if ("default" !== a && {}.hasOwnProperty.call(e, a)) {
                        var o = s ? Object.getOwnPropertyDescriptor(e, a) : null;
                        o && (o.get || o.set) ? Object.defineProperty(u, a, o) : (u[a] = e[a]);
                    }
                return (u.default = e), r && r.set(e, u), u;
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.PlayerBase-49d0a293.8b5185ba.js.map
