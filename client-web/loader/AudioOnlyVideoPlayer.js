(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer"],
    {
        790925: (t) => {
            t.exports = { queryId: "TYpVV9QioZfViHqEqRZxJA", operationName: "BrowseSpaceTopics", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        433261: (t) => {
            t.exports = { queryId: "Sxn4YOlaAwEKjnjWV0h7Mw", operationName: "SubscribeToScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        359215: (t) => {
            t.exports = { queryId: "Zevhh76Msw574ZSs2NQHGQ", operationName: "UnsubscribeFromScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        90890: (t, e, r) => {
            "use strict";
            r.d(e, { Tc: () => l, yt: () => o });
            r(136728), r(202784);
            var a = r(803224),
                i = r(67877),
                s = r(2138);
            const n = { autoplayPrioritizationPolicy: r(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class o {
                constructor(t = n) {
                    (this._players = []),
                        (this._setPlayerState = (t, e) => {
                            (t.previousPlaybackState = t.playbackState), (t.playbackState = e), this._updatePlayerStateForDocking(t, e);
                        }),
                        (this._updatePlayerStateForDocking = (t, e) => {
                            if (e === a.q.USER_PLAYING) {
                                const e = t.previousPlaybackState === a.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof t.registerDockElement && !e) {
                                    const e = t.registerDockElement();
                                    this._updateDockedVideo(e, t.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else e === a.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : e === a.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const t = this._players.find((t) => t.playbackState === a.q.USER_PLAYING && t.playbackPriority !== a.W.SPACE);
                            t && !this._canPlay(t) ? (this._pausePlayer(t), this._triggerAutoplay()) : t ? this._stopAllExcept(t) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, s.Z)((0, i.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (t) => window.requestIdleCallback(t, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: e, minimumVisibilityForAutoplay: r } = t;
                    (this._autoplayPrioritizationPolicy = e), (this._minimumVisibilityForAutoplay = r);
                }
                register({ autoplayGroupOptions: t, canAutoplay: e, id: r, onAutoPlayRequest: i, onFullscreenEntered: s, onFullscreenExited: n, onPauseRequest: o, isLooping: l, registerDockElement: c, updateDockedVideo: u, updateIsUserPaused: p, playbackPriority: y = a.W.NORMAL }) {
                    (this._updateDockedVideo = u), (this._updateIsUserPaused = p);
                    const h = { id: r, autoplayGroupEmitter: t?.autoplayGroupEmitter, placement: void 0, playbackPriority: y, playbackState: a.q.INITIAL, previousPlaybackState: a.q.INITIAL, commandHandlers: { onAutoPlayRequest: i, onFullscreenEntered: s, onFullscreenExited: n, onPauseRequest: o }, canAutoplay: e && y !== a.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return t && t.autoplayGroupEmitter.registerAutoplayGroupPlayer(h, t.mediaIndex), this._players.push(h), { reset: () => this._handleReset(h), signalFullscreenChange: (t) => this._handleFullscreenChanged(t), signalPlacementChange: (t) => this._handlePlacementChange(h, t), signalPlay: () => this._handlePlay(h), signalPause: () => this._handlePause(h), signalPlaybackFinish: (t) => this._handlePlaybackFinished(h, t), signalPlaybackPriorityChange: (t, e) => this._handlePlaybackPriorityChange(h, t, e), unregister: () => this._handleUnregister(h) };
                }
                _handleFullscreenChanged(t) {
                    this._players.forEach((e) => {
                        const { onFullscreenEntered: r, onFullscreenExited: a } = e.commandHandlers;
                        t && r ? r() : !t && a && a();
                    });
                }
                _handlePlacementChange(t, e) {
                    const r = e.scrollY();
                    (t.placement = e), this._scrollY !== r && (this._scrollY = r), t.playbackState === a.q.FINISHED && 0 === e.visibleFraction() && this._setPlayerState(t, a.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(t) {
                    t.playbackState !== a.q.AUTO_PLAYING && (t.previousPlaybackState === a.q.AUTO_PLAYING && t.isLooping ? this._setPlayerState(t, a.q.AUTO_PLAYING) : this._setPlayerState(t, a.q.USER_PLAYING)), this._stopAllExcept(t);
                }
                _handlePause(t) {
                    t.playbackState !== a.q.AUTO_PAUSED && this._setPlayerState(t, a.q.USER_PAUSED);
                }
                _handlePlaybackFinished(t, e = !1) {
                    this._setPlayerState(t, a.q.FINISHED), t.autoplayGroupEmitter && t.autoplayGroupEmitter.signalPlaybackComplete(e);
                }
                _handlePlaybackPriorityChange(t, e, r) {
                    (t.playbackPriority = e), (t.canAutoplay = r && e !== a.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(t) {
                    this._setPlayerState(t, a.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(t) {
                    const e = this._players.indexOf(t);
                    e >= 0 && this._players.splice(e, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const t = new WeakMap(),
                        e = this._players.filter((e) => {
                            const r = this._canAutoPlay(e);
                            return e.autoplayGroupEmitter ? r && this._canGroupAutoplay(e.autoplayGroupEmitter, t) : r;
                        }),
                        r = this._findBestAutoplayFit(e);
                    if (r) {
                        const { autoplayGroupEmitter: t } = r;
                        if (t) {
                            const e = t.signalGroupAutoplayRequest();
                            e && (this._stopAllExcept(e), this._autoPlayVideo(e));
                        } else this._stopAllExcept(r), this._autoPlayVideo(r);
                    } else
                        this._players.forEach((t) => {
                            t.playbackState === a.q.AUTO_PLAYING && this._pausePlayer(t);
                        });
                }
                _canGroupAutoplay(t, e) {
                    if (e.has(t)) return e.get(t);
                    const r = t.isAutoplayGroupEligibleForAutoplay();
                    return e.set(t, r), r;
                }
                _canAutoPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = t.playbackState === a.q.USER_PAUSED,
                        i = t.playbackState === a.q.FINISHED;
                    return t.canAutoplay && e && !r && !i;
                }
                _canPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = !!t.placement && t.placement.visibleFraction() > 0;
                    return t.playbackPriority !== a.W.INELIGIBLE && (!t.placement || r || e);
                }
                _stopAllExcept(t) {
                    this._players.forEach((e) => {
                        const r = e.playbackPriority !== a.W.SPACE;
                        e === t || !r || (e.playbackState !== a.q.USER_PLAYING && e.playbackState !== a.q.AUTO_PLAYING) || this._pausePlayer(e);
                    });
                }
                _pausePlayer(t) {
                    const { onPauseRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, a.q.AUTO_PAUSED), e();
                }
                _autoPlayVideo(t) {
                    const { onAutoPlayRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, a.q.AUTO_PLAYING), e();
                }
                _findBestAutoplayFit(t) {
                    return this._autoplayPrioritizationPolicy(t);
                }
                _getDistanceToCenter(t) {
                    return t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE;
                }
                _getDistanceToTop(t) {
                    return t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE;
                }
            }
            const l = new o();
        },
        408686: (t, e, r) => {
            "use strict";
            r.d(e, { Qr: () => n, n8: () => s });
            var a = r(803224),
                i = r(411240);
            const s = (t) => {
                    const e = t?.[0]?.placement?.scrollY();
                    return 0 === e ? (0, i.Z)(t, (t) => (t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE)) : (0, i.Z)(t, (t) => (t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                n = (t) => {
                    const e = t.filter((t) => t.playbackPriority === a.W.DOCKABLE);
                    return e.length ? e[0] : s(t);
                };
        },
        411240: (t, e, r) => {
            "use strict";
            r.d(e, { Z: () => a });
            const a = (t, e) => {
                if (0 === t.length) return;
                let r = t[0],
                    a = e(r);
                for (let i = 1; i < t.length; i++) {
                    const s = t[i],
                        n = e(s);
                    n < a && ((r = s), (a = n));
                }
                return r;
            };
        },
        689996: (t, e, r) => {
            "use strict";
            var a = r(497636),
                i = r(265968),
                s = r(409337),
                n = r(492991),
                o = r(639646),
                l = r(387501),
                c = i([].push),
                u = function (t) {
                    var e = 1 === t,
                        r = 2 === t,
                        i = 3 === t,
                        u = 4 === t,
                        p = 6 === t,
                        y = 7 === t,
                        h = 5 === t || p;
                    return function (d, _, f, P) {
                        for (var m, A, b = n(d), g = s(b), E = a(_, f), I = o(g), v = 0, S = P || l, k = e ? S(d, I) : r || y ? S(d, 0) : void 0; I > v; v++)
                            if ((h || v in g) && ((A = E((m = g[v]), v, b)), t))
                                if (e) k[v] = A;
                                else if (A)
                                    switch (t) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return m;
                                        case 6:
                                            return v;
                                        case 2:
                                            c(k, m);
                                    }
                                else
                                    switch (t) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(k, m);
                                    }
                        return p ? -1 : i || u ? u : k;
                    };
                };
            t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
        },
        331460: (t, e, r) => {
            "use strict";
            var a = r(824229),
                i = r(670095),
                s = r(406358),
                n = i("species");
            t.exports = function (t) {
                return (
                    s >= 51 ||
                    !a(function () {
                        var e = [];
                        return (
                            ((e.constructor = {})[n] = function () {
                                return { foo: 1 };
                            }),
                            1 !== e[t](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (t, e, r) => {
            "use strict";
            var a = r(824229);
            t.exports = function (t, e) {
                var r = [][t];
                return (
                    !!r &&
                    a(function () {
                        r.call(
                            null,
                            e ||
                                function () {
                                    return 1;
                                },
                            1,
                        );
                    })
                );
            };
        },
        43143: (t, e, r) => {
            "use strict";
            var a = r(277111),
                i = r(492991),
                s = r(409337),
                n = r(639646),
                o = TypeError,
                l = function (t) {
                    return function (e, r, l, c) {
                        a(r);
                        var u = i(e),
                            p = s(u),
                            y = n(u),
                            h = t ? y - 1 : 0,
                            d = t ? -1 : 1;
                        if (l < 2)
                            for (;;) {
                                if (h in p) {
                                    (c = p[h]), (h += d);
                                    break;
                                }
                                if (((h += d), t ? h < 0 : y <= h)) throw new o("Reduce of empty array with no initial value");
                            }
                        for (; t ? h >= 0 : y > h; h += d) h in p && (c = r(c, p[h], h, u));
                        return c;
                    };
                };
            t.exports = { left: l(!1), right: l(!0) };
        },
        1909: (t, e, r) => {
            "use strict";
            var a = r(265968);
            t.exports = a([].slice);
        },
        118760: (t, e, r) => {
            "use strict";
            var a = r(33718),
                i = r(782359),
                s = r(685052),
                n = r(670095)("species"),
                o = Array;
            t.exports = function (t) {
                var e;
                return a(t) && ((e = t.constructor), ((i(e) && (e === o || a(e.prototype))) || (s(e) && null === (e = e[n]))) && (e = void 0)), void 0 === e ? o : e;
            };
        },
        387501: (t, e, r) => {
            "use strict";
            var a = r(118760);
            t.exports = function (t, e) {
                return new (a(t))(0 === e ? 0 : e);
            };
        },
        128801: (t, e, r) => {
            "use strict";
            var a = r(609859),
                i = r(427079);
            t.exports = "process" === i(a.process);
        },
        782359: (t, e, r) => {
            "use strict";
            var a = r(265968),
                i = r(824229),
                s = r(26733),
                n = r(781589),
                o = r(431333),
                l = r(108511),
                c = function () {},
                u = [],
                p = o("Reflect", "construct"),
                y = /^\s*(?:class|function)\b/,
                h = a(y.exec),
                d = !y.test(c),
                _ = function (t) {
                    if (!s(t)) return !1;
                    try {
                        return p(c, u, t), !0;
                    } catch (t) {
                        return !1;
                    }
                },
                f = function (t) {
                    if (!s(t)) return !1;
                    switch (n(t)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return d || !!h(y, l(t));
                    } catch (t) {
                        return !0;
                    }
                };
            (f.sham = !0),
                (t.exports =
                    !p ||
                    i(function () {
                        var t;
                        return (
                            _(_.call) ||
                            !_(Object) ||
                            !_(function () {
                                t = !0;
                            }) ||
                            t
                        );
                    })
                        ? f
                        : _);
        },
        700047: (t, e, r) => {
            "use strict";
            var a = r(807400),
                i = r(265968),
                s = r(720266),
                n = r(824229),
                o = r(765632),
                l = r(110894),
                c = r(119195),
                u = r(492991),
                p = r(409337),
                y = Object.assign,
                h = Object.defineProperty,
                d = i([].concat);
            t.exports =
                !y ||
                n(function () {
                    if (
                        a &&
                        1 !==
                            y(
                                { b: 1 },
                                y(
                                    h({}, "a", {
                                        enumerable: !0,
                                        get: function () {
                                            h(this, "b", { value: 3, enumerable: !1 });
                                        },
                                    }),
                                    { b: 2 },
                                ),
                            ).b
                    )
                        return !0;
                    var t = {},
                        e = {},
                        r = Symbol("assign detection"),
                        i = "abcdefghijklmnopqrst";
                    return (
                        (t[r] = 7),
                        i.split("").forEach(function (t) {
                            e[t] = t;
                        }),
                        7 !== y({}, t)[r] || o(y({}, e)).join("") !== i
                    );
                })
                    ? function (t, e) {
                          for (var r = u(t), i = arguments.length, n = 1, y = l.f, h = c.f; i > n; ) for (var _, f = p(arguments[n++]), P = y ? d(o(f), y(f)) : o(f), m = P.length, A = 0; m > A; ) (_ = P[A++]), (a && !s(h, f, _)) || (r[_] = f[_]);
                          return r;
                      }
                    : y;
        },
        849276: (t, e, r) => {
            "use strict";
            var a = r(609859);
            t.exports = a;
        },
        730895: (t, e, r) => {
            "use strict";
            var a = r(821176);
            t.exports = function () {
                var t = a(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        1017: (t, e, r) => {
            "use strict";
            var a = r(265968),
                i = r(558885),
                s = r(783326),
                n = r(841647),
                o = a("".replace),
                l = RegExp("^[" + n + "]+"),
                c = RegExp("(^|[^" + n + "])[" + n + "]+$"),
                u = function (t) {
                    return function (e) {
                        var r = s(i(e));
                        return 1 & t && (r = o(r, l, "")), 2 & t && (r = o(r, c, "$1")), r;
                    };
                };
            t.exports = { start: u(1), end: u(2), trim: u(3) };
        },
        890143: (t, e, r) => {
            "use strict";
            var a = r(265968);
            t.exports = a((1).valueOf);
        },
        841647: (t) => {
            "use strict";
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(689996).map;
            a(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (t) {
                        return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(43143).left,
                s = r(696038),
                n = r(406358);
            a(
                { target: "Array", proto: !0, forced: (!r(128801) && n > 79 && n < 83) || !s("reduce") },
                {
                    reduce: function (t) {
                        var e = arguments.length;
                        return i(this, t, e, e > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(33718),
                s = r(782359),
                n = r(685052),
                o = r(443231),
                l = r(639646),
                c = r(910905),
                u = r(462324),
                p = r(670095),
                y = r(331460),
                h = r(1909),
                d = y("slice"),
                _ = p("species"),
                f = Array,
                P = Math.max;
            a(
                { target: "Array", proto: !0, forced: !d },
                {
                    slice: function (t, e) {
                        var r,
                            a,
                            p,
                            y = c(this),
                            d = l(y),
                            m = o(t, d),
                            A = o(void 0 === e ? d : e, d);
                        if (i(y) && ((r = y.constructor), ((s(r) && (r === f || i(r.prototype))) || (n(r) && null === (r = r[_]))) && (r = void 0), r === f || void 0 === r)) return h(y, m, A);
                        for (a = new (void 0 === r ? f : r)(P(A - m, 0)), p = 0; m < A; m++, p++) m in y && u(a, p, y[m]);
                        return (a.length = p), a;
                    },
                },
            );
        },
        271245: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(124231),
                s = r(807400),
                n = r(609859),
                o = r(849276),
                l = r(265968),
                c = r(46541),
                u = r(198270),
                p = r(720835),
                y = r(291321),
                h = r(349395),
                d = r(992066),
                _ = r(824229),
                f = r(778151).f,
                P = r(997933).f,
                m = r(931787).f,
                A = r(890143),
                b = r(1017).trim,
                g = "Number",
                E = n[g],
                I = o[g],
                v = E.prototype,
                S = n.TypeError,
                k = l("".slice),
                N = l("".charCodeAt),
                U = function (t) {
                    var e,
                        r,
                        a,
                        i,
                        s,
                        n,
                        o,
                        l,
                        c = d(t, "number");
                    if (h(c)) throw new S("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = b(c)), 43 === (e = N(c, 0)) || 45 === e)) {
                            if (88 === (r = N(c, 2)) || 120 === r) return NaN;
                        } else if (48 === e) {
                            switch (N(c, 1)) {
                                case 66:
                                case 98:
                                    (a = 2), (i = 49);
                                    break;
                                case 79:
                                case 111:
                                    (a = 8), (i = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (n = (s = k(c, 2)).length, o = 0; o < n; o++) if ((l = N(s, o)) < 48 || l > i) return NaN;
                            return parseInt(s, a);
                        }
                    return +c;
                },
                q = c(g, !E(" 0o1") || !E("0b1") || E("+0x1")),
                F = function (t) {
                    var e,
                        r =
                            arguments.length < 1
                                ? 0
                                : E(
                                      (function (t) {
                                          var e = d(t, "number");
                                          return "bigint" == typeof e ? e : U(e);
                                      })(t),
                                  );
                    return y(v, (e = this)) &&
                        _(function () {
                            A(e);
                        })
                        ? p(Object(r), this, F)
                        : r;
                };
            (F.prototype = v), q && !i && (v.constructor = F), a({ global: !0, constructor: !0, wrap: !0, forced: q }, { Number: F });
            var T = function (t, e) {
                for (var r, a = s ? f(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), i = 0; a.length > i; i++) u(e, (r = a[i])) && !u(t, r) && m(t, r, P(e, r));
            };
            i && I && T(o[g], I), (q || i) && T(o[g], E);
        },
        43105: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(700047);
            a({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== i }, { assign: i });
        },
        334769: (t, e, r) => {
            "use strict";
            var a = r(23103),
                i = r(492991),
                s = r(765632);
            a(
                {
                    target: "Object",
                    stat: !0,
                    forced: r(824229)(function () {
                        s(1);
                    }),
                },
                {
                    keys: function (t) {
                        return s(i(t));
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.75180ada.js.map
