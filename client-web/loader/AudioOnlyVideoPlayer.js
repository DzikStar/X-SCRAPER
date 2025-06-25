"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer"],
    {
        90890: (e, t, r) => {
            r.d(t, { Tc: () => l, yt: () => s });
            r(136728), r(202784);
            var a = r(803224),
                n = r(67877),
                i = r(2138);
            const o = { autoplayPrioritizationPolicy: r(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(e = o) {
                    (this._players = []),
                        (this._setPlayerState = (e, t) => {
                            (e.previousPlaybackState = e.playbackState), (e.playbackState = t), this._updatePlayerStateForDocking(e, t);
                        }),
                        (this._updatePlayerStateForDocking = (e, t) => {
                            if (t === a.q.USER_PLAYING) {
                                const t = e.previousPlaybackState === a.q.USER_PAUSED;
                                if (this._updateDockedVideo && "function" == typeof e.registerDockElement && !t) {
                                    const t = e.registerDockElement();
                                    this._updateDockedVideo(t, e.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            } else t === a.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : t === a.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const e = this._players.find((e) => e.playbackState === a.q.USER_PLAYING && e.playbackPriority !== a.W.SPACE);
                            e && !this._canPlay(e) ? (this._pausePlayer(e), this._triggerAutoplay()) : e ? this._stopAllExcept(e) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, i.Z)((0, n.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (e) => window.requestIdleCallback(e, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: t, minimumVisibilityForAutoplay: r } = e;
                    (this._autoplayPrioritizationPolicy = t), (this._minimumVisibilityForAutoplay = r);
                }
                register({ autoplayGroupOptions: e, canAutoplay: t, id: r, onAutoPlayRequest: n, onFullscreenEntered: i, onFullscreenExited: o, onPauseRequest: s, isLooping: l, registerDockElement: c, updateDockedVideo: u, updateIsUserPaused: p, playbackPriority: y = a.W.NORMAL }) {
                    (this._updateDockedVideo = u), (this._updateIsUserPaused = p);
                    const d = { id: r, autoplayGroupEmitter: e?.autoplayGroupEmitter, placement: void 0, playbackPriority: y, playbackState: a.q.INITIAL, previousPlaybackState: a.q.INITIAL, commandHandlers: { onAutoPlayRequest: n, onFullscreenEntered: i, onFullscreenExited: o, onPauseRequest: s }, canAutoplay: t && y !== a.W.INELIGIBLE, isLooping: l, registerDockElement: c };
                    return e && e.autoplayGroupEmitter.registerAutoplayGroupPlayer(d, e.mediaIndex), this._players.push(d), { reset: () => this._handleReset(d), signalFullscreenChange: (e) => this._handleFullscreenChanged(e), signalPlacementChange: (e) => this._handlePlacementChange(d, e), signalPlay: () => this._handlePlay(d), signalPause: () => this._handlePause(d), signalPlaybackFinish: (e) => this._handlePlaybackFinished(d, e), signalPlaybackPriorityChange: (e, t) => this._handlePlaybackPriorityChange(d, e, t), unregister: () => this._handleUnregister(d) };
                }
                _handleFullscreenChanged(e) {
                    this._players.forEach((t) => {
                        const { onFullscreenEntered: r, onFullscreenExited: a } = t.commandHandlers;
                        e && r ? r() : !e && a && a();
                    });
                }
                _handlePlacementChange(e, t) {
                    const r = t.scrollY();
                    (e.placement = t), this._scrollY !== r && (this._scrollY = r), e.playbackState === a.q.FINISHED && 0 === t.visibleFraction() && this._setPlayerState(e, a.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(e) {
                    e.playbackState !== a.q.AUTO_PLAYING && (e.previousPlaybackState === a.q.AUTO_PLAYING && e.isLooping ? this._setPlayerState(e, a.q.AUTO_PLAYING) : this._setPlayerState(e, a.q.USER_PLAYING)), this._stopAllExcept(e);
                }
                _handlePause(e) {
                    e.playbackState !== a.q.AUTO_PAUSED && this._setPlayerState(e, a.q.USER_PAUSED);
                }
                _handlePlaybackFinished(e, t = !1) {
                    this._setPlayerState(e, a.q.FINISHED), e.autoplayGroupEmitter && e.autoplayGroupEmitter.signalPlaybackComplete(t);
                }
                _handlePlaybackPriorityChange(e, t, r) {
                    (e.playbackPriority = t), (e.canAutoplay = r && t !== a.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(e) {
                    this._setPlayerState(e, a.q.INITIAL), this._scheduleUpdate();
                }
                _handleUnregister(e) {
                    const t = this._players.indexOf(e);
                    t >= 0 && this._players.splice(t, 1), this._scheduleUpdate();
                }
                _triggerAutoplay() {
                    if (document.pictureInPictureElement) return;
                    const e = new WeakMap(),
                        t = this._players.filter((t) => {
                            const r = this._canAutoPlay(t);
                            return t.autoplayGroupEmitter ? r && this._canGroupAutoplay(t.autoplayGroupEmitter, e) : r;
                        }),
                        r = this._findBestAutoplayFit(t);
                    if (r) {
                        const { autoplayGroupEmitter: e } = r;
                        if (e) {
                            const t = e.signalGroupAutoplayRequest();
                            t && (this._stopAllExcept(t), this._autoPlayVideo(t));
                        } else this._stopAllExcept(r), this._autoPlayVideo(r);
                    } else
                        this._players.forEach((e) => {
                            e.playbackState === a.q.AUTO_PLAYING && this._pausePlayer(e);
                        });
                }
                _canGroupAutoplay(e, t) {
                    if (t.has(e)) return t.get(e);
                    const r = e.isAutoplayGroupEligibleForAutoplay();
                    return t.set(e, r), r;
                }
                _canAutoPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = e.playbackState === a.q.USER_PAUSED,
                        n = e.playbackState === a.q.FINISHED;
                    return e.canAutoplay && t && !r && !n;
                }
                _canPlay(e) {
                    const t = !!e.placement && e.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = !!e.placement && e.placement.visibleFraction() > 0;
                    return e.playbackPriority !== a.W.INELIGIBLE && (!e.placement || r || t);
                }
                _stopAllExcept(e) {
                    this._players.forEach((t) => {
                        const r = t.playbackPriority !== a.W.SPACE;
                        t === e || !r || (t.playbackState !== a.q.USER_PLAYING && t.playbackState !== a.q.AUTO_PLAYING) || this._pausePlayer(t);
                    });
                }
                _pausePlayer(e) {
                    const { onPauseRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, a.q.AUTO_PAUSED), t();
                }
                _autoPlayVideo(e) {
                    const { onAutoPlayRequest: t } = e.commandHandlers;
                    this._setPlayerState(e, a.q.AUTO_PLAYING), t();
                }
                _findBestAutoplayFit(e) {
                    return this._autoplayPrioritizationPolicy(e);
                }
                _getDistanceToCenter(e) {
                    return e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE;
                }
                _getDistanceToTop(e) {
                    return e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE;
                }
            }
            const l = new s();
        },
        408686: (e, t, r) => {
            r.d(t, { Qr: () => o, n8: () => i });
            var a = r(803224),
                n = r(411240);
            const i = (e) => {
                    const t = e?.[0]?.placement?.scrollY();
                    return 0 === t ? (0, n.Z)(e, (e) => (e.placement ? e.placement.distanceToTop() : Number.MAX_VALUE)) : (0, n.Z)(e, (e) => (e.placement ? e.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                o = (e) => {
                    const t = e.filter((e) => e.playbackPriority === a.W.DOCKABLE);
                    return t.length ? t[0] : i(e);
                };
        },
        893164: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                n = r(325686),
                i = r(111677),
                o = r.n(i),
                s = r(355830),
                l = r(731708),
                c = r(154003),
                u = r(992942),
                p = r(392237);
            const y = o().a9edea48;
            function d(e) {
                const { displayBackgroundImage: t = !1, errorMessage: r, iconPlayError: i, imageSrc: o, onReloadPress: d } = e;
                return a.createElement(n.Z, { style: [p.default.absoluteFill, t ? null : h.blankOverlay] }, t ? a.createElement(a.Fragment, null, a.createElement(n.Z, { style: h.backgroundImage }, o && a.createElement(u.Z, { resizeMode: "cover", source: o, style: p.default.absoluteFill })), a.createElement(n.Z, { style: h.overlay })) : null, a.createElement(n.Z, { style: h.errorContainer }, a.createElement(n.Z, null, i ? a.createElement(s.default, { style: h.playErrorIcon }) : null), a.createElement(n.Z, { focusable: !0 }, a.createElement(l.ZP, { style: t ? h.errorMsgTextWhite : h.errorMsgTextGray }, r)), d ? a.createElement(c.ZP, { onPress: d, style: h.buttonContainer, type: "brandFilled" }, y) : null));
            }
            const h = p.default.create((e) => ({ backgroundImage: { ...p.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...p.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        411240: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = (e, t) => {
                if (0 === e.length) return;
                let r = e[0],
                    a = t(r);
                for (let n = 1; n < e.length; n++) {
                    const i = e[n],
                        o = t(i);
                    o < a && ((r = i), (a = o));
                }
                return r;
            };
        },
        689996: (e, t, r) => {
            var a = r(497636),
                n = r(265968),
                i = r(409337),
                o = r(492991),
                s = r(639646),
                l = r(387501),
                c = n([].push),
                u = function (e) {
                    var t = 1 === e,
                        r = 2 === e,
                        n = 3 === e,
                        u = 4 === e,
                        p = 6 === e,
                        y = 7 === e,
                        d = 5 === e || p;
                    return function (h, f, _, m) {
                        for (var g, P, b = o(h), A = i(b), E = a(f, _), I = s(A), v = 0, k = m || l, S = t ? k(h, I) : r || y ? k(h, 0) : void 0; I > v; v++)
                            if ((d || v in A) && ((P = E((g = A[v]), v, b)), e))
                                if (t) S[v] = P;
                                else if (P)
                                    switch (e) {
                                        case 3:
                                            return !0;
                                        case 5:
                                            return g;
                                        case 6:
                                            return v;
                                        case 2:
                                            c(S, g);
                                    }
                                else
                                    switch (e) {
                                        case 4:
                                            return !1;
                                        case 7:
                                            c(S, g);
                                    }
                        return p ? -1 : n || u ? u : S;
                    };
                };
            e.exports = { forEach: u(0), map: u(1), filter: u(2), some: u(3), every: u(4), find: u(5), findIndex: u(6), filterReject: u(7) };
        },
        331460: (e, t, r) => {
            var a = r(824229),
                n = r(670095),
                i = r(406358),
                o = n("species");
            e.exports = function (e) {
                return (
                    i >= 51 ||
                    !a(function () {
                        var t = [];
                        return (
                            ((t.constructor = {})[o] = function () {
                                return { foo: 1 };
                            }),
                            1 !== t[e](Boolean).foo
                        );
                    })
                );
            };
        },
        696038: (e, t, r) => {
            var a = r(824229);
            e.exports = function (e, t) {
                var r = [][e];
                return (
                    !!r &&
                    a(function () {
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
            var a = r(277111),
                n = r(492991),
                i = r(409337),
                o = r(639646),
                s = TypeError,
                l = function (e) {
                    return function (t, r, l, c) {
                        a(r);
                        var u = n(t),
                            p = i(u),
                            y = o(u),
                            d = e ? y - 1 : 0,
                            h = e ? -1 : 1;
                        if (l < 2)
                            for (;;) {
                                if (d in p) {
                                    (c = p[d]), (d += h);
                                    break;
                                }
                                if (((d += h), e ? d < 0 : y <= d)) throw new s("Reduce of empty array with no initial value");
                            }
                        for (; e ? d >= 0 : y > d; d += h) d in p && (c = r(c, p[d], d, u));
                        return c;
                    };
                };
            e.exports = { left: l(!1), right: l(!0) };
        },
        1909: (e, t, r) => {
            var a = r(265968);
            e.exports = a([].slice);
        },
        118760: (e, t, r) => {
            var a = r(33718),
                n = r(782359),
                i = r(685052),
                o = r(670095)("species"),
                s = Array;
            e.exports = function (e) {
                var t;
                return a(e) && ((t = e.constructor), ((n(t) && (t === s || a(t.prototype))) || (i(t) && null === (t = t[o]))) && (t = void 0)), void 0 === t ? s : t;
            };
        },
        387501: (e, t, r) => {
            var a = r(118760);
            e.exports = function (e, t) {
                return new (a(e))(0 === t ? 0 : t);
            };
        },
        128801: (e, t, r) => {
            var a = r(609859),
                n = r(427079);
            e.exports = "process" === n(a.process);
        },
        782359: (e, t, r) => {
            var a = r(265968),
                n = r(824229),
                i = r(26733),
                o = r(781589),
                s = r(431333),
                l = r(108511),
                c = function () {},
                u = [],
                p = s("Reflect", "construct"),
                y = /^\s*(?:class|function)\b/,
                d = a(y.exec),
                h = !y.test(c),
                f = function (e) {
                    if (!i(e)) return !1;
                    try {
                        return p(c, u, e), !0;
                    } catch (e) {
                        return !1;
                    }
                },
                _ = function (e) {
                    if (!i(e)) return !1;
                    switch (o(e)) {
                        case "AsyncFunction":
                        case "GeneratorFunction":
                        case "AsyncGeneratorFunction":
                            return !1;
                    }
                    try {
                        return h || !!d(y, l(e));
                    } catch (e) {
                        return !0;
                    }
                };
            (_.sham = !0),
                (e.exports =
                    !p ||
                    n(function () {
                        var e;
                        return (
                            f(f.call) ||
                            !f(Object) ||
                            !f(function () {
                                e = !0;
                            }) ||
                            e
                        );
                    })
                        ? _
                        : f);
        },
        700047: (e, t, r) => {
            var a = r(807400),
                n = r(265968),
                i = r(720266),
                o = r(824229),
                s = r(765632),
                l = r(110894),
                c = r(119195),
                u = r(492991),
                p = r(409337),
                y = Object.assign,
                d = Object.defineProperty,
                h = n([].concat);
            e.exports =
                !y ||
                o(function () {
                    if (
                        a &&
                        1 !==
                            y(
                                { b: 1 },
                                y(
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
                        n = "abcdefghijklmnopqrst";
                    return (
                        (e[r] = 7),
                        n.split("").forEach(function (e) {
                            t[e] = e;
                        }),
                        7 !== y({}, e)[r] || s(y({}, t)).join("") !== n
                    );
                })
                    ? function (e, t) {
                          for (var r = u(e), n = arguments.length, o = 1, y = l.f, d = c.f; n > o; ) for (var f, _ = p(arguments[o++]), m = y ? h(s(_), y(_)) : s(_), g = m.length, P = 0; g > P; ) (f = m[P++]), (a && !i(d, _, f)) || (r[f] = _[f]);
                          return r;
                      }
                    : y;
        },
        849276: (e, t, r) => {
            var a = r(609859);
            e.exports = a;
        },
        730895: (e, t, r) => {
            var a = r(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        1017: (e, t, r) => {
            var a = r(265968),
                n = r(558885),
                i = r(783326),
                o = r(841647),
                s = a("".replace),
                l = RegExp("^[" + o + "]+"),
                c = RegExp("(^|[^" + o + "])[" + o + "]+$"),
                u = function (e) {
                    return function (t) {
                        var r = i(n(t));
                        return 1 & e && (r = s(r, l, "")), 2 & e && (r = s(r, c, "$1")), r;
                    };
                };
            e.exports = { start: u(1), end: u(2), trim: u(3) };
        },
        890143: (e, t, r) => {
            var a = r(265968);
            e.exports = a((1).valueOf);
        },
        841647: (e) => {
            e.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff";
        },
        543450: (e, t, r) => {
            var a = r(23103),
                n = r(689996).map;
            a(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (e) {
                        return n(this, e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (e, t, r) => {
            var a = r(23103),
                n = r(43143).left,
                i = r(696038),
                o = r(406358);
            a(
                { target: "Array", proto: !0, forced: (!r(128801) && o > 79 && o < 83) || !i("reduce") },
                {
                    reduce: function (e) {
                        var t = arguments.length;
                        return n(this, e, t, t > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (e, t, r) => {
            var a = r(23103),
                n = r(33718),
                i = r(782359),
                o = r(685052),
                s = r(443231),
                l = r(639646),
                c = r(910905),
                u = r(462324),
                p = r(670095),
                y = r(331460),
                d = r(1909),
                h = y("slice"),
                f = p("species"),
                _ = Array,
                m = Math.max;
            a(
                { target: "Array", proto: !0, forced: !h },
                {
                    slice: function (e, t) {
                        var r,
                            a,
                            p,
                            y = c(this),
                            h = l(y),
                            g = s(e, h),
                            P = s(void 0 === t ? h : t, h);
                        if (n(y) && ((r = y.constructor), ((i(r) && (r === _ || n(r.prototype))) || (o(r) && null === (r = r[f]))) && (r = void 0), r === _ || void 0 === r)) return d(y, g, P);
                        for (a = new (void 0 === r ? _ : r)(m(P - g, 0)), p = 0; g < P; g++, p++) g in y && u(a, p, y[g]);
                        return (a.length = p), a;
                    },
                },
            );
        },
        271245: (e, t, r) => {
            var a = r(23103),
                n = r(124231),
                i = r(807400),
                o = r(609859),
                s = r(849276),
                l = r(265968),
                c = r(46541),
                u = r(198270),
                p = r(720835),
                y = r(291321),
                d = r(349395),
                h = r(992066),
                f = r(824229),
                _ = r(778151).f,
                m = r(997933).f,
                g = r(931787).f,
                P = r(890143),
                b = r(1017).trim,
                A = "Number",
                E = o[A],
                I = s[A],
                v = E.prototype,
                k = o.TypeError,
                S = l("".slice),
                N = l("".charCodeAt),
                F = function (e) {
                    var t,
                        r,
                        a,
                        n,
                        i,
                        o,
                        s,
                        l,
                        c = h(e, "number");
                    if (d(c)) throw new k("Cannot convert a Symbol value to a number");
                    if ("string" == typeof c && c.length > 2)
                        if (((c = b(c)), 43 === (t = N(c, 0)) || 45 === t)) {
                            if (88 === (r = N(c, 2)) || 120 === r) return NaN;
                        } else if (48 === t) {
                            switch (N(c, 1)) {
                                case 66:
                                case 98:
                                    (a = 2), (n = 49);
                                    break;
                                case 79:
                                case 111:
                                    (a = 8), (n = 55);
                                    break;
                                default:
                                    return +c;
                            }
                            for (o = (i = S(c, 2)).length, s = 0; s < o; s++) if ((l = N(i, s)) < 48 || l > n) return NaN;
                            return parseInt(i, a);
                        }
                    return +c;
                },
                U = c(A, !E(" 0o1") || !E("0b1") || E("+0x1")),
                x = function (e) {
                    var t,
                        r =
                            arguments.length < 1
                                ? 0
                                : E(
                                      (function (e) {
                                          var t = h(e, "number");
                                          return "bigint" == typeof t ? t : F(t);
                                      })(e),
                                  );
                    return y(v, (t = this)) &&
                        f(function () {
                            P(t);
                        })
                        ? p(Object(r), this, x)
                        : r;
                };
            (x.prototype = v), U && !n && (v.constructor = x), a({ global: !0, constructor: !0, wrap: !0, forced: U }, { Number: x });
            var q = function (e, t) {
                for (var r, a = i ? _(t) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0; a.length > n; n++) u(t, (r = a[n])) && !u(e, r) && g(e, r, m(t, r));
            };
            n && I && q(s[A], I), (U || n) && q(s[A], E);
        },
        43105: (e, t, r) => {
            var a = r(23103),
                n = r(700047);
            a({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== n }, { assign: n });
        },
        334769: (e, t, r) => {
            var a = r(23103),
                n = r(492991),
                i = r(765632);
            a(
                {
                    target: "Object",
                    stat: !0,
                    forced: r(824229)(function () {
                        i(1);
                    }),
                },
                {
                    keys: function (e) {
                        return i(n(e));
                    },
                },
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.5e35ab2a.js.map
