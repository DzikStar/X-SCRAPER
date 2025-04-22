"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioOnlyVideoPlayer-e96e9bea", "ondemand.InlinePlayer-3062047c"],
    {
        90890: (t, e, r) => {
            r.d(e, { Tc: () => c, yt: () => s });
            r(136728), r(202784);
            var n = r(803224),
                a = r(67877),
                i = r(2138);
            const o = { autoplayPrioritizationPolicy: r(408686).Qr, minimumVisibilityForAutoplay: 0.25 };
            class s {
                constructor(t = o) {
                    (this._players = []),
                        (this._setPlayerState = (t, e) => {
                            (t.previousPlaybackState = t.playbackState), (t.playbackState = e), this._updatePlayerStateForDocking(t, e);
                        }),
                        (this._updatePlayerStateForDocking = (t, e) => {
                            if (e === n.q.USER_PLAYING)
                                if (this._updateDockedVideo && t.registerDockElement) {
                                    const e = t.registerDockElement();
                                    this._updateDockedVideo(e, t.id);
                                } else this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            else e === n.q.USER_PAUSED ? this._updateIsUserPaused && this._updateIsUserPaused(!0) : e === n.q.AUTO_PLAYING && this._updateIsUserPaused && this._updateIsUserPaused(!1);
                            this._updateInlinePlayerState && this._updateInlinePlayerState(this._players);
                        }),
                        (this._updatePlaybackStates = () => {
                            const t = this._players.find((t) => t.playbackState === n.q.USER_PLAYING && t.playbackPriority !== n.W.SPACE);
                            t && !this._canPlay(t) ? (this._pausePlayer(t), this._triggerAutoplay()) : t ? this._stopAllExcept(t) : this._triggerAutoplay();
                        }),
                        (this._scheduleUpdate = (0, i.Z)((0, a.Z)(this._updatePlaybackStates, window.requestIdleCallback ? (t) => window.requestIdleCallback(t, { timeout: 200 }) : window.requestAnimationFrame), 300, { leading: !1, trailing: !0 }));
                    const { autoplayPrioritizationPolicy: e, minimumVisibilityForAutoplay: r } = t;
                    (this._autoplayPrioritizationPolicy = e), (this._minimumVisibilityForAutoplay = r);
                }
                register({ autoplayGroupOptions: t, canAutoplay: e, id: r, onAutoPlayRequest: a, onFullscreenEntered: i, onFullscreenExited: o, onPauseRequest: s, isLooping: c, registerDockElement: u, updateDockedVideo: l, updateIsUserPaused: p, playbackPriority: f = n.W.NORMAL }) {
                    (this._updateDockedVideo = l), (this._updateIsUserPaused = p);
                    const d = { id: r, autoplayGroupEmitter: t?.autoplayGroupEmitter, placement: void 0, playbackPriority: f, playbackState: n.q.INITIAL, previousPlaybackState: n.q.INITIAL, commandHandlers: { onAutoPlayRequest: a, onFullscreenEntered: i, onFullscreenExited: o, onPauseRequest: s }, canAutoplay: e && f !== n.W.INELIGIBLE, isLooping: c, registerDockElement: u };
                    return t && t.autoplayGroupEmitter.registerAutoplayGroupPlayer(d, t.mediaIndex), this._players.push(d), { reset: () => this._handleReset(d), signalFullscreenChange: (t) => this._handleFullscreenChanged(t), signalPlacementChange: (t) => this._handlePlacementChange(d, t), signalPlay: () => this._handlePlay(d), signalPause: () => this._handlePause(d), signalPlaybackFinish: (t) => this._handlePlaybackFinished(d, t), signalPlaybackPriorityChange: (t, e) => this._handlePlaybackPriorityChange(d, t, e), unregister: () => this._handleUnregister(d) };
                }
                _handleFullscreenChanged(t) {
                    this._players.forEach((e) => {
                        const { onFullscreenEntered: r, onFullscreenExited: n } = e.commandHandlers;
                        t && r ? r() : !t && n && n();
                    });
                }
                _handlePlacementChange(t, e) {
                    const r = e.scrollY();
                    (t.placement = e), this._scrollY !== r && (this._scrollY = r), t.playbackState === n.q.FINISHED && 0 === e.visibleFraction() && this._setPlayerState(t, n.q.INITIAL), this._scheduleUpdate();
                }
                _handlePlay(t) {
                    t.playbackState !== n.q.AUTO_PLAYING && (t.previousPlaybackState === n.q.AUTO_PLAYING && t.isLooping ? this._setPlayerState(t, n.q.AUTO_PLAYING) : this._setPlayerState(t, n.q.USER_PLAYING)), this._stopAllExcept(t);
                }
                _handlePause(t) {
                    t.playbackState !== n.q.AUTO_PAUSED && this._setPlayerState(t, n.q.USER_PAUSED);
                }
                _handlePlaybackFinished(t, e = !1) {
                    this._setPlayerState(t, n.q.FINISHED), t.autoplayGroupEmitter && t.autoplayGroupEmitter.signalPlaybackComplete(e);
                }
                _handlePlaybackPriorityChange(t, e, r) {
                    (t.playbackPriority = e), (t.canAutoplay = r && e !== n.W.INELIGIBLE), this._scheduleUpdate();
                }
                _handleReset(t) {
                    this._setPlayerState(t, n.q.INITIAL), this._scheduleUpdate();
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
                            t.playbackState === n.q.AUTO_PLAYING && this._pausePlayer(t);
                        });
                }
                _canGroupAutoplay(t, e) {
                    if (e.has(t)) return e.get(t);
                    const r = t.isAutoplayGroupEligibleForAutoplay();
                    return e.set(t, r), r;
                }
                _canAutoPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = t.playbackState === n.q.USER_PAUSED,
                        a = t.playbackState === n.q.FINISHED;
                    return t.canAutoplay && e && !r && !a;
                }
                _canPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        r = !!t.placement && t.placement.visibleFraction() > 0;
                    return t.playbackPriority !== n.W.INELIGIBLE && (!t.placement || r || e);
                }
                _stopAllExcept(t) {
                    this._players.forEach((e) => {
                        const r = e.playbackPriority !== n.W.SPACE;
                        e === t || !r || (e.playbackState !== n.q.USER_PLAYING && e.playbackState !== n.q.AUTO_PLAYING) || this._pausePlayer(e);
                    });
                }
                _pausePlayer(t) {
                    const { onPauseRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, n.q.AUTO_PAUSED), e();
                }
                _autoPlayVideo(t) {
                    const { onAutoPlayRequest: e } = t.commandHandlers;
                    this._setPlayerState(t, n.q.AUTO_PLAYING), e();
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
            const c = new s();
        },
        408686: (t, e, r) => {
            r.d(e, { Qr: () => o, n8: () => i });
            var n = r(803224),
                a = r(411240);
            const i = (t) => {
                    const e = t?.[0]?.placement?.scrollY();
                    return 0 === e ? (0, a.Z)(t, (t) => (t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE)) : (0, a.Z)(t, (t) => (t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE));
                },
                o = (t) => {
                    const e = t.filter((t) => t.playbackPriority === n.W.DOCKABLE);
                    return e.length ? e[0] : i(t);
                };
        },
        449228: (t, e, r) => {
            var n = r(23103),
                a = r(689996).find,
                i = r(609736),
                o = "find",
                s = !0;
            o in [] &&
                Array(1)[o](function () {
                    s = !1;
                }),
                n(
                    { target: "Array", proto: !0, forced: s },
                    {
                        find: function (t) {
                            return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
                        },
                    },
                ),
                i(o);
        },
        438695: (t, e, r) => {
            var n = r(23103),
                a = r(986570);
            n({ target: "Array", proto: !0, forced: [].forEach !== a }, { forEach: a });
        },
        827233: (t, e, r) => {
            var n = r(23103),
                a = r(310507);
            n(
                {
                    target: "Array",
                    stat: !0,
                    forced: !r(874575)(function (t) {
                        Array.from(t);
                    }),
                },
                { from: a },
            );
        },
        374083: (t, e, r) => {
            var n = r(23103),
                a = r(844745),
                i = r(219540).indexOf,
                o = r(696038),
                s = a([].indexOf),
                c = !!s && 1 / s([1], 1, -0) < 0;
            n(
                { target: "Array", proto: !0, forced: c || !o("indexOf") },
                {
                    indexOf: function (t) {
                        var e = arguments.length > 1 ? arguments[1] : void 0;
                        return c ? s(this, t, e) || 0 : i(this, t, e);
                    },
                },
            );
        },
        418145: (t, e, r) => {
            r(23103)({ target: "Array", stat: !0 }, { isArray: r(33718) });
        },
        315735: (t, e, r) => {
            var n = r(910905),
                a = r(609736),
                i = r(545495),
                o = r(856407),
                s = r(931787).f,
                c = r(712707),
                u = r(33684),
                l = r(124231),
                p = r(807400),
                f = "Array Iterator",
                d = o.set,
                h = o.getterFor(f);
            t.exports = c(
                Array,
                "Array",
                function (t, e) {
                    d(this, { type: f, target: n(t), index: 0, kind: e });
                },
                function () {
                    var t = h(this),
                        e = t.target,
                        r = t.kind,
                        n = t.index++;
                    if (!e || n >= e.length) return (t.target = void 0), u(void 0, !0);
                    switch (r) {
                        case "keys":
                            return u(n, !1);
                        case "values":
                            return u(e[n], !1);
                    }
                    return u([n, e[n]], !1);
                },
                "values",
            );
            var y = (i.Arguments = i.Array);
            if ((a("keys"), a("values"), a("entries"), !l && p && "values" !== y.name))
                try {
                    s(y, "name", { value: "values" });
                } catch (t) {}
        },
        543450: (t, e, r) => {
            var n = r(23103),
                a = r(689996).map;
            n(
                { target: "Array", proto: !0, forced: !r(331460)("map") },
                {
                    map: function (t) {
                        return a(this, t, arguments.length > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        743108: (t, e, r) => {
            var n = r(23103),
                a = r(43143).left,
                i = r(696038),
                o = r(406358);
            n(
                { target: "Array", proto: !0, forced: (!r(128801) && o > 79 && o < 83) || !i("reduce") },
                {
                    reduce: function (t) {
                        var e = arguments.length;
                        return a(this, t, e, e > 1 ? arguments[1] : void 0);
                    },
                },
            );
        },
        332501: (t, e, r) => {
            var n = r(23103),
                a = r(33718),
                i = r(782359),
                o = r(685052),
                s = r(443231),
                c = r(639646),
                u = r(910905),
                l = r(462324),
                p = r(670095),
                f = r(331460),
                d = r(1909),
                h = f("slice"),
                y = p("species"),
                v = Array,
                g = Math.max;
            n(
                { target: "Array", proto: !0, forced: !h },
                {
                    slice: function (t, e) {
                        var r,
                            n,
                            p,
                            f = u(this),
                            h = c(f),
                            m = s(t, h),
                            _ = s(void 0 === e ? h : e, h);
                        if (a(f) && ((r = f.constructor), ((i(r) && (r === v || a(r.prototype))) || (o(r) && null === (r = r[y]))) && (r = void 0), r === v || void 0 === r)) return d(f, m, _);
                        for (n = new (void 0 === r ? v : r)(g(_ - m, 0)), p = 0; m < _; m++, p++) m in f && l(n, p, f[m]);
                        return (n.length = p), n;
                    },
                },
            );
        },
        24895: (t, e, r) => {
            var n = r(23103),
                a = r(265968),
                i = Date,
                o = a(i.prototype.getTime);
            n(
                { target: "Date", stat: !0 },
                {
                    now: function () {
                        return o(new i());
                    },
                },
            );
        },
        499120: (t, e, r) => {
            var n = r(265968),
                a = r(914768),
                i = Date.prototype,
                o = "Invalid Date",
                s = "toString",
                c = n(i[s]),
                u = n(i.getTime);
            String(new Date(NaN)) !== o &&
                a(i, s, function () {
                    var t = u(this);
                    return t == t ? c(this) : o;
                });
        },
        865584: (t, e, r) => {
            var n = r(23103),
                a = r(194128);
            n({ target: "Function", proto: !0, forced: Function.bind !== a }, { bind: a });
        },
        326936: (t, e, r) => {
            var n = r(807400),
                a = r(951805).EXISTS,
                i = r(265968),
                o = r(396616),
                s = Function.prototype,
                c = i(s.toString),
                u = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,
                l = i(u.exec);
            n &&
                !a &&
                o(s, "name", {
                    configurable: !0,
                    get: function () {
                        try {
                            return l(u, c(this))[1];
                        } catch (t) {
                            return "";
                        }
                    },
                });
        },
        606710: (t, e, r) => {
            var n = r(23103),
                a = r(431333),
                i = r(653171),
                o = r(720266),
                s = r(265968),
                c = r(824229),
                u = r(26733),
                l = r(349395),
                p = r(1909),
                f = r(44231),
                d = r(144860),
                h = String,
                y = a("JSON", "stringify"),
                v = s(/./.exec),
                g = s("".charAt),
                m = s("".charCodeAt),
                _ = s("".replace),
                b = s((1).toString),
                P = /[\uD800-\uDFFF]/g,
                A = /^[\uD800-\uDBFF]$/,
                E = /^[\uDC00-\uDFFF]$/,
                S =
                    !d ||
                    c(function () {
                        var t = a("Symbol")("stringify detection");
                        return "[null]" !== y([t]) || "{}" !== y({ a: t }) || "{}" !== y(Object(t));
                    }),
                I = c(function () {
                    return '"\\udf06\\ud834"' !== y("\udf06\ud834") || '"\\udead"' !== y("\udead");
                }),
                N = function (t, e) {
                    var r = p(arguments),
                        n = f(e);
                    if (u(n) || (void 0 !== t && !l(t)))
                        return (
                            (r[1] = function (t, e) {
                                if ((u(n) && (e = o(n, this, h(t), e)), !l(e))) return e;
                            }),
                            i(y, null, r)
                        );
                },
                k = function (t, e, r) {
                    var n = g(r, e - 1),
                        a = g(r, e + 1);
                    return (v(A, t) && !v(E, a)) || (v(E, t) && !v(A, n)) ? "\\u" + b(m(t, 0), 16) : t;
                };
            y &&
                n(
                    { target: "JSON", stat: !0, arity: 3, forced: S || I },
                    {
                        stringify: function (t, e, r) {
                            var n = p(arguments),
                                a = i(S ? N : y, null, n);
                            return I && "string" == typeof a ? _(a, P, k) : a;
                        },
                    },
                );
        },
        271245: (t, e, r) => {
            var n = r(23103),
                a = r(124231),
                i = r(807400),
                o = r(609859),
                s = r(849276),
                c = r(265968),
                u = r(46541),
                l = r(198270),
                p = r(720835),
                f = r(291321),
                d = r(349395),
                h = r(992066),
                y = r(824229),
                v = r(778151).f,
                g = r(997933).f,
                m = r(931787).f,
                _ = r(890143),
                b = r(1017).trim,
                P = "Number",
                A = o[P],
                E = s[P],
                S = A.prototype,
                I = o.TypeError,
                N = c("".slice),
                k = c("".charCodeAt),
                F = function (t) {
                    var e,
                        r,
                        n,
                        a,
                        i,
                        o,
                        s,
                        c,
                        u = h(t, "number");
                    if (d(u)) throw new I("Cannot convert a Symbol value to a number");
                    if ("string" == typeof u && u.length > 2)
                        if (((u = b(u)), 43 === (e = k(u, 0)) || 45 === e)) {
                            if (88 === (r = k(u, 2)) || 120 === r) return NaN;
                        } else if (48 === e) {
                            switch (k(u, 1)) {
                                case 66:
                                case 98:
                                    (n = 2), (a = 49);
                                    break;
                                case 79:
                                case 111:
                                    (n = 8), (a = 55);
                                    break;
                                default:
                                    return +u;
                            }
                            for (o = (i = N(u, 2)).length, s = 0; s < o; s++) if ((c = k(i, s)) < 48 || c > a) return NaN;
                            return parseInt(i, n);
                        }
                    return +u;
                },
                T = u(P, !A(" 0o1") || !A("0b1") || A("+0x1")),
                O = function (t) {
                    var e,
                        r =
                            arguments.length < 1
                                ? 0
                                : A(
                                      (function (t) {
                                          var e = h(t, "number");
                                          return "bigint" == typeof e ? e : F(e);
                                      })(t),
                                  );
                    return f(S, (e = this)) &&
                        y(function () {
                            _(e);
                        })
                        ? p(Object(r), this, O)
                        : r;
                };
            (O.prototype = S), T && !a && (S.constructor = O), n({ global: !0, constructor: !0, wrap: !0, forced: T }, { Number: O });
            var U = function (t, e) {
                for (var r, n = i ? v(e) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), a = 0; n.length > a; a++) l(e, (r = n[a])) && !l(t, r) && m(t, r, g(e, r));
            };
            a && E && U(s[P], E), (T || a) && U(s[P], A);
        },
        414586: (t, e, r) => {
            r(23103)(
                { target: "Number", stat: !0 },
                {
                    isNaN: function (t) {
                        return t != t;
                    },
                },
            );
        },
        458143: (t, e, r) => {
            r(23103)({ target: "Number", stat: !0, nonConfigurable: !0, nonWritable: !0 }, { MAX_SAFE_INTEGER: 9007199254740991 });
        },
        43105: (t, e, r) => {
            var n = r(23103),
                a = r(700047);
            n({ target: "Object", stat: !0, arity: 2, forced: Object.assign !== a }, { assign: a });
        },
        682067: (t, e, r) => {
            var n = r(23103),
                a = r(144860),
                i = r(824229),
                o = r(110894),
                s = r(492991);
            n(
                {
                    target: "Object",
                    stat: !0,
                    forced:
                        !a ||
                        i(function () {
                            o.f(1);
                        }),
                },
                {
                    getOwnPropertySymbols: function (t) {
                        var e = o.f;
                        return e ? e(s(t)) : [];
                    },
                },
            );
        },
        334769: (t, e, r) => {
            var n = r(23103),
                a = r(492991),
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
                    keys: function (t) {
                        return i(a(t));
                    },
                },
            );
        },
        358188: (t, e, r) => {
            var n = r(971601),
                a = r(914768),
                i = r(844059);
            n || a(Object.prototype, "toString", i, { unsafe: !0 });
        },
        256032: (t, e, r) => {
            var n = r(23103),
                a = r(720266),
                i = r(277111),
                o = r(916485),
                s = r(664624),
                c = r(789003);
            n(
                { target: "Promise", stat: !0, forced: r(796866) },
                {
                    all: function (t) {
                        var e = this,
                            r = o.f(e),
                            n = r.resolve,
                            u = r.reject,
                            l = s(function () {
                                var r = i(e.resolve),
                                    o = [],
                                    s = 0,
                                    l = 1;
                                c(t, function (t) {
                                    var i = s++,
                                        c = !1;
                                    l++,
                                        a(r, e, t).then(function (t) {
                                            c || ((c = !0), (o[i] = t), --l || n(o));
                                        }, u);
                                }),
                                    --l || n(o);
                            });
                        return l.error && u(l.value), r.promise;
                    },
                },
            );
        },
        806135: (t, e, r) => {
            var n = r(23103),
                a = r(124231),
                i = r(338321).CONSTRUCTOR,
                o = r(174473),
                s = r(431333),
                c = r(26733),
                u = r(914768),
                l = o && o.prototype;
            if (
                (n(
                    { target: "Promise", proto: !0, forced: i, real: !0 },
                    {
                        catch: function (t) {
                            return this.then(void 0, t);
                        },
                    },
                ),
                !a && c(o))
            ) {
                var p = s("Promise").prototype.catch;
                l.catch !== p && u(l, "catch", p, { unsafe: !0 });
            }
        },
        486087: (t, e, r) => {
            var n,
                a,
                i,
                o = r(23103),
                s = r(124231),
                c = r(128801),
                u = r(609859),
                l = r(720266),
                p = r(914768),
                f = r(956540),
                d = r(954555),
                h = r(971832),
                y = r(277111),
                v = r(26733),
                g = r(685052),
                m = r(557728),
                _ = r(137942),
                b = r(155795).set,
                P = r(124794),
                A = r(214665),
                E = r(664624),
                S = r(193358),
                I = r(856407),
                N = r(174473),
                k = r(338321),
                F = r(916485),
                T = "Promise",
                O = k.CONSTRUCTOR,
                U = k.REJECTION_EVENT,
                w = k.SUBCLASSING,
                C = I.getterFor(T),
                R = I.set,
                L = N && N.prototype,
                D = N,
                q = L,
                G = u.TypeError,
                x = u.document,
                j = u.process,
                V = F.f,
                Y = V,
                M = !!(x && x.createEvent && u.dispatchEvent),
                W = "unhandledrejection",
                B = function (t) {
                    var e;
                    return !(!g(t) || !v((e = t.then))) && e;
                },
                H = function (t, e) {
                    var r,
                        n,
                        a,
                        i = e.value,
                        o = 1 === e.state,
                        s = o ? t.ok : t.fail,
                        c = t.resolve,
                        u = t.reject,
                        p = t.domain;
                    try {
                        s ? (o || (2 === e.rejection && J(e), (e.rejection = 1)), !0 === s ? (r = i) : (p && p.enter(), (r = s(i)), p && (p.exit(), (a = !0))), r === t.promise ? u(new G("Promise-chain cycle")) : (n = B(r)) ? l(n, r, c, u) : c(r)) : u(i);
                    } catch (t) {
                        p && !a && p.exit(), u(t);
                    }
                },
                X = function (t, e) {
                    t.notified ||
                        ((t.notified = !0),
                        P(function () {
                            for (var r, n = t.reactions; (r = n.get()); ) H(r, t);
                            (t.notified = !1), e && !t.rejection && Z(t);
                        }));
                },
                z = function (t, e, r) {
                    var n, a;
                    M ? (((n = x.createEvent("Event")).promise = e), (n.reason = r), n.initEvent(t, !1, !0), u.dispatchEvent(n)) : (n = { promise: e, reason: r }), !U && (a = u["on" + t]) ? a(n) : t === W && A("Unhandled promise rejection", r);
                },
                Z = function (t) {
                    l(b, u, function () {
                        var e,
                            r = t.facade,
                            n = t.value;
                        if (
                            $(t) &&
                            ((e = E(function () {
                                c ? j.emit("unhandledRejection", n, r) : z(W, r, n);
                            })),
                            (t.rejection = c || $(t) ? 2 : 1),
                            e.error)
                        )
                            throw e.value;
                    });
                },
                $ = function (t) {
                    return 1 !== t.rejection && !t.parent;
                },
                J = function (t) {
                    l(b, u, function () {
                        var e = t.facade;
                        c ? j.emit("rejectionHandled", e) : z("rejectionhandled", e, t.value);
                    });
                },
                Q = function (t, e, r) {
                    return function (n) {
                        t(e, n, r);
                    };
                },
                K = function (t, e, r) {
                    t.done || ((t.done = !0), r && (t = r), (t.value = e), (t.state = 2), X(t, !0));
                },
                tt = function (t, e, r) {
                    if (!t.done) {
                        (t.done = !0), r && (t = r);
                        try {
                            if (t.facade === e) throw new G("Promise can't be resolved itself");
                            var n = B(e);
                            n
                                ? P(function () {
                                      var r = { done: !1 };
                                      try {
                                          l(n, e, Q(tt, r, t), Q(K, r, t));
                                      } catch (e) {
                                          K(r, e, t);
                                      }
                                  })
                                : ((t.value = e), (t.state = 1), X(t, !1));
                        } catch (e) {
                            K({ done: !1 }, e, t);
                        }
                    }
                };
            if (
                O &&
                ((q = (D = function (t) {
                    m(this, q), y(t), l(n, this);
                    var e = C(this);
                    try {
                        t(Q(tt, e), Q(K, e));
                    } catch (t) {
                        K(e, t);
                    }
                }).prototype),
                ((n = function (t) {
                    R(this, { type: T, done: !1, notified: !1, parent: !1, reactions: new S(), rejection: !1, state: 0, value: void 0 });
                }).prototype = p(q, "then", function (t, e) {
                    var r = C(this),
                        n = V(_(this, D));
                    return (
                        (r.parent = !0),
                        (n.ok = !v(t) || t),
                        (n.fail = v(e) && e),
                        (n.domain = c ? j.domain : void 0),
                        0 === r.state
                            ? r.reactions.add(n)
                            : P(function () {
                                  H(n, r);
                              }),
                        n.promise
                    );
                })),
                (a = function () {
                    var t = new n(),
                        e = C(t);
                    (this.promise = t), (this.resolve = Q(tt, e)), (this.reject = Q(K, e));
                }),
                (F.f = V =
                    function (t) {
                        return t === D || undefined === t ? new a(t) : Y(t);
                    }),
                !s && v(N) && L !== Object.prototype)
            ) {
                (i = L.then),
                    w ||
                        p(
                            L,
                            "then",
                            function (t, e) {
                                var r = this;
                                return new D(function (t, e) {
                                    l(i, r, t, e);
                                }).then(t, e);
                            },
                            { unsafe: !0 },
                        );
                try {
                    delete L.constructor;
                } catch (t) {}
                f && f(L, q);
            }
            o({ global: !0, constructor: !0, wrap: !0, forced: O }, { Promise: D }), d(D, T, !1, !0), h(T);
        },
        73439: (t, e, r) => {
            r(486087), r(256032), r(806135), r(726767), r(939320), r(852047);
        },
        726767: (t, e, r) => {
            var n = r(23103),
                a = r(720266),
                i = r(277111),
                o = r(916485),
                s = r(664624),
                c = r(789003);
            n(
                { target: "Promise", stat: !0, forced: r(796866) },
                {
                    race: function (t) {
                        var e = this,
                            r = o.f(e),
                            n = r.reject,
                            u = s(function () {
                                var o = i(e.resolve);
                                c(t, function (t) {
                                    a(o, e, t).then(r.resolve, n);
                                });
                            });
                        return u.error && n(u.value), r.promise;
                    },
                },
            );
        },
        939320: (t, e, r) => {
            var n = r(23103),
                a = r(720266),
                i = r(916485);
            n(
                { target: "Promise", stat: !0, forced: r(338321).CONSTRUCTOR },
                {
                    reject: function (t) {
                        var e = i.f(this);
                        return a(e.reject, void 0, t), e.promise;
                    },
                },
            );
        },
        852047: (t, e, r) => {
            var n = r(23103),
                a = r(431333),
                i = r(124231),
                o = r(174473),
                s = r(338321).CONSTRUCTOR,
                c = r(62391),
                u = a("Promise"),
                l = i && !s;
            n(
                { target: "Promise", stat: !0, forced: i || s },
                {
                    resolve: function (t) {
                        return c(l && this === u ? o : this, t);
                    },
                },
            );
        },
        477950: (t, e, r) => {
            var n = r(23103),
                a = r(763466);
            n({ target: "RegExp", proto: !0, forced: /./.exec !== a }, { exec: a });
        },
        888233: (t, e, r) => {
            var n = r(951805).PROPER,
                a = r(914768),
                i = r(821176),
                o = r(783326),
                s = r(824229),
                c = r(683349),
                u = "toString",
                l = RegExp.prototype[u],
                p = s(function () {
                    return "/a/b" !== l.call({ source: "a", flags: "b" });
                }),
                f = n && l.name !== u;
            (p || f) &&
                a(
                    RegExp.prototype,
                    u,
                    function () {
                        var t = i(this);
                        return "/" + o(t.source) + "/" + o(c(t));
                    },
                    { unsafe: !0 },
                );
        },
        428673: (t, e, r) => {
            var n = r(630966).charAt,
                a = r(783326),
                i = r(856407),
                o = r(712707),
                s = r(33684),
                c = "String Iterator",
                u = i.set,
                l = i.getterFor(c);
            o(
                String,
                "String",
                function (t) {
                    u(this, { type: c, string: a(t), index: 0 });
                },
                function () {
                    var t,
                        e = l(this),
                        r = e.string,
                        a = e.index;
                    return a >= r.length ? s(void 0, !0) : ((t = n(r, a)), (e.index += t.length), s(t, !1));
                },
            );
        },
        339956: (t, e, r) => {
            var n = r(23103),
                a = r(609859),
                i = r(720266),
                o = r(265968),
                s = r(124231),
                c = r(807400),
                u = r(144860),
                l = r(824229),
                p = r(198270),
                f = r(291321),
                d = r(821176),
                h = r(910905),
                y = r(239310),
                v = r(783326),
                g = r(665358),
                m = r(822391),
                _ = r(765632),
                b = r(778151),
                P = r(310166),
                A = r(110894),
                E = r(997933),
                S = r(931787),
                I = r(690219),
                N = r(119195),
                k = r(914768),
                F = r(396616),
                T = r(933036),
                O = r(944399),
                U = r(995977),
                w = r(581441),
                C = r(670095),
                R = r(355391),
                L = r(863524),
                D = r(566481),
                q = r(954555),
                G = r(856407),
                x = r(689996).forEach,
                j = O("hidden"),
                V = "Symbol",
                Y = "prototype",
                M = G.set,
                W = G.getterFor(V),
                B = Object[Y],
                H = a.Symbol,
                X = H && H[Y],
                z = a.RangeError,
                Z = a.TypeError,
                $ = a.QObject,
                J = E.f,
                Q = S.f,
                K = P.f,
                tt = N.f,
                et = o([].push),
                rt = T("symbols"),
                nt = T("op-symbols"),
                at = T("wks"),
                it = !$ || !$[Y] || !$[Y].findChild,
                ot = function (t, e, r) {
                    var n = J(B, e);
                    n && delete B[e], Q(t, e, r), n && t !== B && Q(B, e, n);
                },
                st =
                    c &&
                    l(function () {
                        return (
                            7 !==
                            m(
                                Q({}, "a", {
                                    get: function () {
                                        return Q(this, "a", { value: 7 }).a;
                                    },
                                }),
                            ).a
                        );
                    })
                        ? ot
                        : Q,
                ct = function (t, e) {
                    var r = (rt[t] = m(X));
                    return M(r, { type: V, tag: t, description: e }), c || (r.description = e), r;
                },
                ut = function (t, e, r) {
                    t === B && ut(nt, e, r), d(t);
                    var n = y(e);
                    return d(r), p(rt, n) ? (r.enumerable ? (p(t, j) && t[j][n] && (t[j][n] = !1), (r = m(r, { enumerable: g(0, !1) }))) : (p(t, j) || Q(t, j, g(1, {})), (t[j][n] = !0)), st(t, n, r)) : Q(t, n, r);
                },
                lt = function (t, e) {
                    d(t);
                    var r = h(e),
                        n = _(r).concat(ht(r));
                    return (
                        x(n, function (e) {
                            (c && !i(pt, r, e)) || ut(t, e, r[e]);
                        }),
                        t
                    );
                },
                pt = function (t) {
                    var e = y(t),
                        r = i(tt, this, e);
                    return !(this === B && p(rt, e) && !p(nt, e)) && (!(r || !p(this, e) || !p(rt, e) || (p(this, j) && this[j][e])) || r);
                },
                ft = function (t, e) {
                    var r = h(t),
                        n = y(e);
                    if (r !== B || !p(rt, n) || p(nt, n)) {
                        var a = J(r, n);
                        return !a || !p(rt, n) || (p(r, j) && r[j][n]) || (a.enumerable = !0), a;
                    }
                },
                dt = function (t) {
                    var e = K(h(t)),
                        r = [];
                    return (
                        x(e, function (t) {
                            p(rt, t) || p(U, t) || et(r, t);
                        }),
                        r
                    );
                },
                ht = function (t) {
                    var e = t === B,
                        r = K(e ? nt : h(t)),
                        n = [];
                    return (
                        x(r, function (t) {
                            !p(rt, t) || (e && !p(B, t)) || et(n, rt[t]);
                        }),
                        n
                    );
                };
            u ||
                (k(
                    (X = (H = function () {
                        if (f(X, this)) throw new Z("Symbol is not a constructor");
                        var t = arguments.length && void 0 !== arguments[0] ? v(arguments[0]) : void 0,
                            e = w(t),
                            r = function (t) {
                                this === B && i(r, nt, t), p(this, j) && p(this[j], e) && (this[j][e] = !1);
                                var n = g(1, t);
                                try {
                                    st(this, e, n);
                                } catch (t) {
                                    if (!(t instanceof z)) throw t;
                                    ot(this, e, n);
                                }
                            };
                        return c && it && st(B, e, { configurable: !0, set: r }), ct(e, t);
                    })[Y]),
                    "toString",
                    function () {
                        return W(this).tag;
                    },
                ),
                k(H, "withoutSetter", function (t) {
                    return ct(w(t), t);
                }),
                (N.f = pt),
                (S.f = ut),
                (I.f = lt),
                (E.f = ft),
                (b.f = P.f = dt),
                (A.f = ht),
                (R.f = function (t) {
                    return ct(C(t), t);
                }),
                c &&
                    (F(X, "description", {
                        configurable: !0,
                        get: function () {
                            return W(this).description;
                        },
                    }),
                    s || k(B, "propertyIsEnumerable", pt, { unsafe: !0 }))),
                n({ global: !0, constructor: !0, wrap: !0, forced: !u, sham: !u }, { Symbol: H }),
                x(_(at), function (t) {
                    L(t);
                }),
                n(
                    { target: V, stat: !0, forced: !u },
                    {
                        useSetter: function () {
                            it = !0;
                        },
                        useSimple: function () {
                            it = !1;
                        },
                    },
                ),
                n(
                    { target: "Object", stat: !0, forced: !u, sham: !c },
                    {
                        create: function (t, e) {
                            return void 0 === e ? m(t) : lt(m(t), e);
                        },
                        defineProperty: ut,
                        defineProperties: lt,
                        getOwnPropertyDescriptor: ft,
                    },
                ),
                n({ target: "Object", stat: !0, forced: !u }, { getOwnPropertyNames: dt }),
                D(),
                q(H, V),
                (U[j] = !0);
        },
        200634: (t, e, r) => {
            var n = r(23103),
                a = r(807400),
                i = r(609859),
                o = r(265968),
                s = r(198270),
                c = r(26733),
                u = r(291321),
                l = r(783326),
                p = r(396616),
                f = r(977081),
                d = i.Symbol,
                h = d && d.prototype;
            if (a && c(d) && (!("description" in h) || void 0 !== d().description)) {
                var y = {},
                    v = function () {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : l(arguments[0]),
                            e = u(h, this) ? new d(t) : void 0 === t ? d() : d(t);
                        return "" === t && (y[e] = !0), e;
                    };
                f(v, d), (v.prototype = h), (h.constructor = v);
                var g = "Symbol(description detection)" === String(d("description detection")),
                    m = o(h.valueOf),
                    _ = o(h.toString),
                    b = /^Symbol\((.*)\)[^)]+$/,
                    P = o("".replace),
                    A = o("".slice);
                p(h, "description", {
                    configurable: !0,
                    get: function () {
                        var t = m(this);
                        if (s(y, t)) return "";
                        var e = _(t),
                            r = g ? A(e, 7, -1) : P(e, b, "$1");
                        return "" === r ? void 0 : r;
                    },
                }),
                    n({ global: !0, constructor: !0, forced: !0 }, { Symbol: v });
            }
        },
        523352: (t, e, r) => {
            var n = r(23103),
                a = r(431333),
                i = r(198270),
                o = r(783326),
                s = r(933036),
                c = r(455957),
                u = s("string-to-symbol-registry"),
                l = s("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !c },
                {
                    for: function (t) {
                        var e = o(t);
                        if (i(u, e)) return u[e];
                        var r = a("Symbol")(e);
                        return (u[e] = r), (l[r] = e), r;
                    },
                },
            );
        },
        320796: (t, e, r) => {
            r(863524)("iterator");
        },
        334115: (t, e, r) => {
            r(339956), r(523352), r(749717), r(606710), r(682067);
        },
        749717: (t, e, r) => {
            var n = r(23103),
                a = r(198270),
                i = r(349395),
                o = r(659821),
                s = r(933036),
                c = r(455957),
                u = s("symbol-to-string-registry");
            n(
                { target: "Symbol", stat: !0, forced: !c },
                {
                    keyFor: function (t) {
                        if (!i(t)) throw new TypeError(o(t) + " is not a symbol");
                        if (a(u, t)) return u[t];
                    },
                },
            );
        },
        201939: (t, e, r) => {
            var n = r(609859),
                a = r(995694),
                i = r(618865),
                o = r(986570),
                s = r(675762),
                c = function (t) {
                    if (t && t.forEach !== o)
                        try {
                            s(t, "forEach", o);
                        } catch (e) {
                            t.forEach = o;
                        }
                };
            for (var u in a) a[u] && c(n[u] && n[u].prototype);
            c(i);
        },
        906886: (t, e, r) => {
            var n = r(609859),
                a = r(995694),
                i = r(618865),
                o = r(315735),
                s = r(675762),
                c = r(670095),
                u = c("iterator"),
                l = c("toStringTag"),
                p = o.values,
                f = function (t, e) {
                    if (t) {
                        if (t[u] !== p)
                            try {
                                s(t, u, p);
                            } catch (e) {
                                t[u] = p;
                            }
                        if ((t[l] || s(t, l, e), a[e]))
                            for (var r in o)
                                if (t[r] !== o[r])
                                    try {
                                        s(t, r, o[r]);
                                    } catch (e) {
                                        t[r] = o[r];
                                    }
                    }
                };
            for (var d in a) f(n[d] && n[d].prototype, d);
            f(i, "DOMTokenList");
        },
        773801: (t, e, r) => {
            var n = r(23103),
                a = r(609859),
                i = r(324752)(a.setInterval, !0);
            n({ global: !0, bind: !0, forced: a.setInterval !== i }, { setInterval: i });
        },
        698540: (t, e, r) => {
            var n = r(23103),
                a = r(609859),
                i = r(324752)(a.setTimeout, !0);
            n({ global: !0, bind: !0, forced: a.setTimeout !== i }, { setTimeout: i });
        },
        154226: (t, e, r) => {
            r(773801), r(698540);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer-e96e9bea.01e3046a.js.map
