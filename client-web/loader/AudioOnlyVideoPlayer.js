"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer"],
    {
        90890: (t, e, a) => {
            a.d(e, { Tc: () => l, yt: () => o });
            a(136728), a(202784);
            var r = a(803224),
                n = a(67877),
                i = a(2138);
            const s = { autoplayPrioritizationPolicy: a(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class o {
                constructor(t = s) {
                    (this._players = []),
                        (this._setPlayerState = (t, e) => {
                            (t.previousPlaybackState = t.playbackState), (t.playbackState = e), this._updatePlayerStateForDocking(t, e);
                        }),
                        (this._updatePlayerStateForDocking = (t, e) => {
                            if (e === r.q.USER_PLAYING) {
                                const e = t.previousPlaybackState === r.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof t.registerDockElement && !e) {
                                    const e = t.registerDockElement();
                                    this._updateDockedVideo(e, t.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else e === r.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : e === r.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const t = this._players.find((t) => t.playbackState === r.q.USER_PLAYING && t.playbackPriority !== r.W.SPACE);
                            t && !this._canPlay(t) ? (this._pausePlayer(t), this._triggerAutoplay()) : t ? this._stopAllExcept(t) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, i.Z)((0, n.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (t) => window.requestIdleCallback(t, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: e, minimumVisibilityForAutoplay: a } = t;
                    (this._autoplayPrioritizationPolicy = e), (this._minimumVisibilityForAutoplay = a);
                }
                register({ autoplayGroupOptions: t, canAutoplay: e, id: a, onAutoPlayRequest: n, onFullscreenEntered: i, onFullscreenExited: s, onPauseRequest: o, isLooping: l, registerDockElement: c, updateDockedVideo: u, updateIsUserPaused: p, playbackPriority: y = r.W.NORMAL }) {
                    (this._updateDockedVideo = u), (this._updateIsUserPaused = p);
                    const h = { id: a, autoplayGroupEmitter: t?.autoplayGroupEmitter, placement: void 0, playbackPriority: y, playbackState: r.q.INITIAL, previousPlaybackState: r.q.INITIAL, commandHandlers: { onAutoPlayRequest: n, onFullscreenEntered: i, onFullscreenExited: s, onPauseRequest: o }, canAutoplay: e && y !== r.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return t && t.autoplayGroupEmitter.registerAutoplayGroupPlayer(h, t.mediaIndex), this._players.push(h), { reset: () => this._handleReset(h), signalFullscreenChange: (t) => this._handleFullscreenChanged(t), signalPlacementChange: (t) => this._handlePlacementChange(h, t), signalPlay: () => this._handlePlay(h), signalPause: () => this._handlePause(h), signalPlaybackFinish: (t) => this._handlePlaybackFinished(h, t), signalPlaybackPriorityChange: (t, e) => this._handlePlaybackPriorityChange(h, t, e), unregister: () => this._handleUnregister(h) };
                }
                _handleFullscreenChanged(t) {
                    this._players.forEach((e) => {
                        const { onFullscreenEntered: a, onFullscreenExited: r } = e.commandHandlers;
                        t && a ? a() : !t && r && r();
                    });
                }
                _handlePlacementChange(t, e) {
                    const a = e.scrollY();
                    (t.placement = e), this._scrollY !== a && (this._scrollY = a), t.playbackState === r.q.FINISHED && 0 === e.visibleFraction() && this._setPlayerState(t, r.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(t) {
                    t.playbackState !== r.q.AUTO_PLAYING && (t.previousPlaybackState === r.q.AUTO_PLAYING && t.isLooping ? this._setPlayerState(t, r.q.AUTO_PLAYING) : this._setPlayerState(t, r.q.USER_PLAYING)), this._stopAllExcept(t);
                }
                _handlePause(t) {
                    t.playbackState !== r.q.AUTO_PAUSED && this._setPlayerState(t, r.q.USER_PAUSED);
                }
                _handlePlaybackFinished(t, e = !1) {
                    this._setPlayerState(t, r.q.FINISHED), t.autoplayGroupEmitter && t.autoplayGroupEmitter.signalPlaybackComplete(e);
                }
                _handlePlaybackPriorityChange(t, e, a) {
                    (t.playbackPriority = e), (t.canAutoplay = a && e !== r.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(t) {
                    this._setPlayerState(t, r.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(t) {
                    const e = this._players.indexOf(t);
                    e >= 0 && this._players.splice(e, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const t = new WeakMap(),
                        e = this._players.filter((e) => {
                            const a = this._canAutoPlay(e);
                            return e.autoplayGroupEmitter ? a && this._canGroupAutoplay(e.autoplayGroupEmitter, t) : a;
                        }),
                        a = this._findBestAutoplayFit(e);
                    if (a) {
                        const { autoplayGroupEmitter: t } = a;
                        if (t) {
                            const e = t.signalGroupAutoplayRequest();
                            e && (this._stopAllExcept(e), this._autoPlayVideo(e));
                        } else this._stopAllExcept(a), this._autoPlayVideo(a);
                    } else
                        this._players.forEach((t) => {
                            t.playbackState === r.q.AUTO_PLAYING && this._pausePlayer(t);
                        });
                }
                _canGroupAutoplay(t, e) {
                    if (e.has(t)) return e.get(t);
                    const a = t.isAutoplayGroupEligibleForAutoplay();
                    return e.set(t, a), a;
                }
                _canAutoPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = t.playbackState === r.q.USER_PAUSED,
                        n = t.playbackState === r.q.FINISHED;
                    return t.canAutoplay && e && !a && !n;
                }
                _canPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        a = !!t.placement && t.placement.visibleFraction() > 0;
                    return t.playbackPriority !== r.W.INELIGIBLE && (!t.placement || a || e);
                }
                _stopAllExcept(t) {
                    this._players.forEach((e) => {
                        const a = e.playbackPriority !== r.W.SPACE;
                        e === t || !a || (e.playbackState !== r.q.USER_PLAYING && e.playbackState !== r.q.AUTO_PLAYING) || this._pausePlayer(e);
                    });
                }
                _pausePlayer(t) {
                    const { onPauseRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, r.q.AUTO_PAUSED), e();
                }
                _autoPlayVideo(t) {
                    const { onAutoPlayRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, r.q.AUTO_PLAYING), e();
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
        408686: (t, e, a) => {
            a.d(e, { Qr: () => s, n8: () => i });
            var r = a(803224),
                n = a(411240);
            const i = (t) => {
                    const e = t?.[0]?.placement?.scrollY();
                    return 0 === e ? (0, n.Z)(t, (t) => (t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE)) : (0, n.Z)(t, (t) => (t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                s = (t) => {
                    const e = t.filter((t) => t.playbackPriority === r.W.DOCKABLE);
                    return e.length ? e[0] : i(t);
                };
        },
        411240: (t, e, a) => {
            a.d(e, { Z: () => r });
            const r = (t, e) => {
                if (0 === t.length) return;
                let a = t[0],
                    r = e(a);
                for (let n = 1; n < t.length; n++) {
                    const i = t[n],
                        s = e(i);
                    s < r && ((a = i), (r = s));
                }
                return a;
            };
        },
        689996: (t, e, a) => {
            var r = a(497636),
                n = a(265968),
                i = a(409337),
                s = a(492991),
                o = a(639646),
                l = a(387501),
                c = n([].push),
                u = function (t) {
                    var e = 1 === t,
                        a = 2 === t,
                        n = 3 === t,
                        u = 4 === t,
                        p = 6 === t,
                        y = 7 === t,
                        h = 5 === t || p;
                    return function (d, _, f, P) {
                        for (var m, A, b = s(d), g = i(b), E = r(_, f), I = o(g), v = 0, S = P || l, k = e ? S(d, I) : a || y ? S(d, 0) : void 0; I > v; v++)
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
                        return p ? -1 : n || u ? u : k;
                    };
                };
            t.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
        },
        331460: (t, e, a) => {
            var r = a(824229),
                n = a(670095),
                i = a(406358),
                s = n("species");
            t.exports = function (t) {
                return (
                    i >= 51 ||
                    !r(function () {
                        var e = [];
                        return (
                            ((e.constructor = {})[s] = function () {
                                return { foo: 1 };
                            }),
                            1 !== e[t](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (t, e, a) => {
            var r = a(824229);
            t.exports = function (t, e) {
                var a = [][t];
                return (
                    !!a &&
                    r(function () {
                        a.call(
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
        43143: (t, e, a) => {
            var r = a(277111),
                n = a(492991),
                i = a(409337),
                s = a(639646),
                o = TypeError,
                l = function (t) {
                    return function (e, a, l, c) {
                        r(a);
                        var u = n(e),
                            p = i(u),
                            y = s(u),
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
                        for (; t ? h >= 0 : y > h; h += d) h in p && (c = a(c, p[h], h, u));
                        return c;
                    };
                };
            t.exports = { left: l(!1), right: l(!0) };
        },
        1909: (t, e, a) => {
            var r = a(265968);
            t.exports = r([].slice);
        },
        118760: (t, e, a) => {
            var r = a(33718),
                n = a(782359),
                i = a(685052),
                s = a(670095)("species"),
                o = Array;
            t.exports = function (t) {
                var e;
                return r(t) && ((e = t.constructor), ((n(e) && (e === o || r(e.prototype))) || (i(e) && null === (e = e[s]))) && (e = void 0)), void 0 === e ? o : e;
            };
        },
        387501: (t, e, a) => {
            var r = a(118760);
            t.exports = function (t, e) {
                return new (r(t))(0 === e ? 0 : e);
            };
        },
        128801: (t, e, a) => {
            var r = a(609859),
                n = a(427079);
            t.exports = "process" === n(r.process);
        },
        782359: (t, e, a) => {
            var r = a(265968),
                n = a(824229),
                i = a(26733),
                s = a(781589),
                o = a(431333),
                l = a(108511),
                c = function () {},
                u = [],
                p = o("Reflect", "construct"),
                y = /^\s*(?:class|function)\b/,
                h = r(y.exec),
                d = !y.test(c),
                _ = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return p(c, u, t), !0;
                    } catch (t) {
                        return !1;
                    }
                },
                f = function (t) {
                    if (!i(t)) return !1;
                    switch (s(t)) {
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
                    n(function () {
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
        700047: (t, e, a) => {
            var r = a(807400),
                n = a(265968),
                i = a(720266),
                s = a(824229),
                o = a(765632),
                l = a(110894),
                c = a(119195),
                u = a(492991),
                p = a(409337),
                y = Object.assign,
                h = Object.defineProperty,
                d = n([].concat);
            t.exports =
                !y ||
                s(function () {
                    if (
                        r &&
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
                        a = Symbol("assign detection"),
                        n = "abcdefghijklmnopqrst";
                    return (
                        (t[a] = 7),
                        n.split("").forEach(function (t) {
                            e[t] = t;
                        }),
                        7 !== y({}, t)[a] || o(y({}, e)).join("") !== n
                    );
                })
                    ? function (t, e) {
                          for (var a = u(t), n = arguments.length, s = 1, y = l.f, h = c.f; n > s; ) for (var _, f = p(arguments[s++]), P = y ? d(o(f), y(f)) : o(f), m = P.length, A = 0; m > A; ) (_ = P[A++]), (r && !i(h, f, _)) || (a[_] = f[_]);
                          return a;
                      }
                    : y;
        },
        849276: (t, e, a) => {
            var r = a(609859);
            t.exports = r;
        },
        730895: (t, e, a) => {
            var r = a(821176);
            t.exports = function () {
                var t = r(this),
                    e = "";
                return t.hasIndices && (e += "d"), t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.dotAll && (e += "s"), t.unicode && (e += "u"), t.unicodeSets && (e += "v"), t.sticky && (e += "y"), e;
            };
        },
        1017: (t, e, a) => {
            var r = a(265968),
                n = a(558885),
                i = a(783326),
                s = a(841647),
                o = r("".replace),
                l = RegExp("^[" + s + "]+"),
                c = RegExp("(^|[^" + s + "])[" + s + "]+$"),
                u = function (t) {
                    return function (e) {
                        var a = i(n(e));
                        return 1 & t && (a = o(a, l, "")), 2 & t && (a = o(a, c, "$1")), a;
                    };
                };
            t.exports = { start: u(1), end: u(2), trim: u(3) };
        },
        890143: (t, e, a) => {
            var r = a(265968);
            t.exports = r((1).valueOf);
        },
        841647: (t) => {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (t, e, a) => {
            var r = a(23103),
                n = a(689996).map;
            r(
                { target: "Array", proto: !0, forced: !a(331460)("map") },
                {
                    map: function (t) {
                        return n(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (t, e, a) => {
            var r = a(23103),
                n = a(43143).left,
                i = a(696038),
                s = a(406358);
            r(
                { target: "Array", proto: !0, forced: (!a(128801) && s > 79 && s < 83) || !i("reduce") },
                {
                    reduce: function (t) {
                        var e = arguments.length;
                        return n(this, t, e, e > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (t, e, a) => {
            var r = a(23103),
                n = a(33718),
                i = a(782359),
                s = a(685052),
                o = a(443231),
                l = a(639646),
                c = a(910905),
                u = a(462324),
                p = a(670095),
                y = a(331460),
                h = a(1909),
                d = y("slice"),
                _ = p("species"),
                f = Array,
                P = Math.max;
            r(
                { target: "Array", proto: !0, forced: !d },
                {
                    slice: function (t, e) {
                        var a,
                            r,
                            p,
                            y = c(this),
                            d = l(y),
                            m = o(t, d),
                            A = o(void 0 === e ? d : e, d);
                        if (n(y) && ((a = y.constructor), ((i(a) && (a === f || n(a.prototype))) || (s(a) && null === (a = a[_]))) && (a = void 0), a === f || void 0 === a)) return h(y, m, A);
                        for (r = new (void 0 === a ? f : a)(P(A - m, 0)), p = 0; m < A; m++, p++) m in y && u(r, p, y[m]);
                        return (r.length = p), r;
                    },
                },
            );
        },
        271245: (t, e, a) => {
            var r = a(23103),
                n = a(124231),
                i = a(807400),
                s = a(609859),
                o = a(849276),
                l = a(265968),
                c = a(46541),
                u = a(198270),
                p = a(720835),
                y = a(291321),
                h = a(349395),
                d = a(992066),
                _ = a(824229),
                f = a(778151).f,
                P = a(997933).f,
                m = a(931787).f,
                A = a(890143),
                b = a(1017).trim,
                g = "Number",
                E = s[g],
                I = o[g],
                v = E.prototype,
                S = s.TypeError,
                k = l("".slice),
                N = l("".charCodeAt),
                U = function (t) {
                    var e,
                        a,
                        r,
                        n,
                        i,
                        s,
                        o,
                        l,
                        c = d(t, "number");
                    if (h(c)) throw new S("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = b(c)), 43 === (e = N(c, 0)) || 45 === e)) {
                            if (88 === (a = N(c, 2)) || 120 === a) return NaN;
                        } else if (48 === e) {
                            switch (N(c, 1)) {
                                case 66:
                                case 98:
                                    (r = 2), (n = 49);
                                    break;
                                case 79:
                                case 111:
                                    (r = 8), (n = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (s = (i = k(c, 2)).length, o = 0; o < s; o++) if ((l = N(i, o)) < 48 || l > n) return NaN;
                            return parseInt(i, r);
                        }
                    return +c;
                },
                F = c(g, !E(" 0o1") || !E("0b1") || E("+0x1")),
                q = function (t) {
                    var e,
                        a =
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
                        ? p(Object(a), this, q)
                        : a;
                };
            (q.prototype = v), F && !n && (v.constructor = q), r({ global: !0, constructor: !0, wrap: !0, forced: F }, { Number: q });
            var G = function (t, e) {
                for (var a, r = i ? f(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0; r.length > n; n++) u(e, (a = r[n])) && !u(t, a) && m(t, a, P(e, a));
            };
            n && I && G(o[g], I), (F || n) && G(o[g], E);
        },
        43105: (t, e, a) => {
            var r = a(23103),
                n = a(700047);
            r({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== n }, { assign: n });
        },
        334769: (t, e, a) => {
            var r = a(23103),
                n = a(492991),
                i = a(765632);
            r(
                {
                    target: "Object",
                    stat: !0,
                    forced: a(824229)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (t) {
                        return i(n(t));
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.44a3b08a.js.map
