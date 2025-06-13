(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-43dd7041"],
    {
        812053: () => {},
        724031: () => {},
        868484: () => {},
        840489: (t, e, i) => {
            "use strict";
            function s(t) {
                var e,
                    i,
                    n = "";
                if ("string" == typeof t || "number" == typeof t) n += t;
                else if ("object" == typeof t)
                    if (Array.isArray(t)) {
                        var r = t.length;
                        for (e = 0; e < r; e++) t[e] && (i = s(t[e])) && (n && (n += " "), (n += i));
                    } else for (i in t) t[i] && (n && (n += " "), (n += i));
                return n;
            }
            function n() {
                for (var t, e, i = 0, n = "", r = arguments.length; i < r; i++) (t = arguments[i]) && (e = s(t)) && (n && (n += " "), (n += e));
                return n;
            }
            i.d(e, { W: () => n, Z: () => r });
            const r = n;
        },
        979943: (t, e, i) => {
            "use strict";
            i.d(e, { D: () => o });
            var s = i(40226),
                n = i(315815),
                r = i(61419);
            function o(t, e, i) {
                const o = (0, n.i)(t) ? t : (0, s.BX)(t);
                return o.start((0, r.v)("", o, e, i)), o.animation;
            }
        },
        61419: (t, e, i) => {
            "use strict";
            i.d(e, { v: () => ft });
            var s = i(479556),
                n = i(987302),
                r = i(241359),
                o = i(123200),
                a = i(114277),
                l = i(587363),
                u = i(160731),
                c = i(417899),
                h = i(941469),
                d = i(132051),
                m = i(182644),
                p = i(530011),
                f = i(377781),
                y = i(506746);
            const v = (t, e) => "zIndex" !== e && (!("number" != typeof t && !Array.isArray(t)) || !("string" != typeof t || (!y.P.test(t) && "0" !== t) || t.startsWith("url(")));
            const g = (t) => null !== t;
            function T(t, { repeat: e, repeatType: i = "loop" }, s) {
                const n = t.filter(g),
                    r = e && "loop" !== i && e % 2 == 1 ? 0 : n.length - 1;
                return r && void 0 !== s ? s : n[r];
            }
            class k {
                constructor({ autoplay: t = !0, delay: e = 0, type: i = "keyframes", repeat: s = 0, repeatDelay: n = 0, repeatType: r = "loop", ...o }) {
                    (this.isStopped = !1), (this.hasAttemptedResolve = !1), (this.createdAt = m.X.now()), (this.options = { autoplay: t, delay: e, type: i, repeat: s, repeatDelay: n, repeatType: r, ...o }), this.updateFinishedPromise();
                }
                calcStartTime() {
                    return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt;
                }
                get resolved() {
                    return this._resolved || this.hasAttemptedResolve || (0, p.m)(), this._resolved;
                }
                onKeyframesResolved(t, e) {
                    (this.resolvedAt = m.X.now()), (this.hasAttemptedResolve = !0);
                    const { name: i, type: n, velocity: r, delay: o, onComplete: l, onUpdate: u, isGenerator: c } = this.options;
                    if (
                        !c &&
                        !(function (t, e, i, n) {
                            const r = t[0];
                            if (null === r) return !1;
                            if ("display" === e || "visibility" === e) return !0;
                            const o = t[t.length - 1],
                                a = v(r, e),
                                l = v(o, e);
                            return (
                                (0, f.K)(a === l, `You are trying to animate ${e} from "${r}" to "${o}". ${r} is not an animatable value - to enable this animation set ${r} to a value animatable to ${o} via the \`style\` property.`),
                                !(!a || !l) &&
                                    ((function (t) {
                                        const e = t[0];
                                        if (1 === t.length) return !0;
                                        for (let i = 0; i < t.length; i++) if (t[i] !== e) return !0;
                                    })(t) ||
                                        (("spring" === i || (0, s.xD)(i)) && n))
                            );
                        })(t, i, n, r)
                    ) {
                        if (a.c.current || !o) return u && u(T(t, this.options, e)), l && l(), void this.resolveFinishedPromise();
                        this.options.duration = 0;
                    }
                    const h = this.initPlayback(t, e);
                    !1 !== h && ((this._resolved = { keyframes: t, finalKeyframe: e, ...h }), this.onPostResolved());
                }
                onPostResolved() {}
                then(t, e) {
                    return this.currentFinishedPromise.then(t, e);
                }
                flatten() {
                    (this.options.type = "keyframes"), (this.options.ease = "linear");
                }
                updateFinishedPromise() {
                    this.currentFinishedPromise = new Promise((t) => {
                        this.resolveFinishedPromise = t;
                    });
                }
            }
            var w = i(51366),
                P = i(672871),
                M = i(196953),
                D = i(975394);
            function b(t, e, i) {
                const s = Math.max(e - 5, 0);
                return (0, D.R)(i - t(s), e - s);
            }
            const S = 100,
                A = 10,
                C = 1,
                x = 0,
                R = 800,
                F = 0.3,
                _ = 0.3,
                O = { granular: 0.01, default: 2 },
                X = { granular: 0.005, default: 0.5 },
                K = 0.01,
                V = 10,
                I = 0.05,
                W = 1,
                U = 0.001;
            function q({ duration: t = R, bounce: e = F, velocity: i = x, mass: s = C }) {
                let r, o;
                (0, f.K)(t <= (0, n.w)(V), "Spring duration must be 10 seconds or less");
                let a = 1 - e;
                (a = (0, w.u)(I, W, a)),
                    (t = (0, w.u)(K, V, (0, n.X)(t))),
                    a < 1
                        ? ((r = (e) => {
                              const s = e * a,
                                  n = s * t,
                                  r = s - i,
                                  o = j(e, a),
                                  l = Math.exp(-n);
                              return U - (r / o) * l;
                          }),
                          (o = (e) => {
                              const s = e * a * t,
                                  n = s * i + i,
                                  o = Math.pow(a, 2) * Math.pow(e, 2) * t,
                                  l = Math.exp(-s),
                                  u = j(Math.pow(e, 2), a);
                              return ((-r(e) + U > 0 ? -1 : 1) * ((n - o) * l)) / u;
                          }))
                        : ((r = (e) => Math.exp(-e * t) * ((e - i) * t + 1) - 0.001), (o = (e) => Math.exp(-e * t) * (t * t * (i - e))));
                const l = (function (t, e, i) {
                    let s = i;
                    for (let i = 1; i < $; i++) s -= t(s) / e(s);
                    return s;
                })(r, o, 5 / t);
                if (((t = (0, n.w)(t)), isNaN(l))) return { stiffness: S, damping: A, duration: t };
                {
                    const e = Math.pow(l, 2) * s;
                    return { stiffness: e, damping: 2 * a * Math.sqrt(s * e), duration: t };
                }
            }
            const $ = 12;
            function j(t, e) {
                return t * Math.sqrt(1 - e * e);
            }
            const E = ["duration", "bounce"],
                G = ["stiffness", "damping", "mass"];
            function z(t, e) {
                return e.some((e) => void 0 !== t[e]);
            }
            function H(t = _, e = F) {
                const i = "object" != typeof t ? { visualDuration: t, keyframes: [0, 1], bounce: e } : t;
                let { restSpeed: r, restDelta: o } = i;
                const a = i.keyframes[0],
                    l = i.keyframes[i.keyframes.length - 1],
                    u = { done: !1, value: a },
                    {
                        stiffness: c,
                        damping: h,
                        mass: d,
                        duration: m,
                        velocity: p,
                        isResolvedFromDuration: f,
                    } = (function (t) {
                        let e = { velocity: x, stiffness: S, damping: A, mass: C, isResolvedFromDuration: !1, ...t };
                        if (!z(t, G) && z(t, E))
                            if (t.visualDuration) {
                                const i = t.visualDuration,
                                    s = (2 * Math.PI) / (1.2 * i),
                                    n = s * s,
                                    r = 2 * (0, w.u)(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                                e = { ...e, mass: C, stiffness: n, damping: r };
                            } else {
                                const i = q(t);
                                (e = { ...e, ...i, mass: C }), (e.isResolvedFromDuration = !0);
                            }
                        return e;
                    })({ ...i, velocity: -(0, n.X)(i.velocity || 0) }),
                    y = p || 0,
                    v = h / (2 * Math.sqrt(c * d)),
                    g = l - a,
                    T = (0, n.X)(Math.sqrt(c / d)),
                    k = Math.abs(g) < 5;
                let P;
                if ((r || (r = k ? O.granular : O.default), o || (o = k ? X.granular : X.default), v < 1)) {
                    const t = j(T, v);
                    P = (e) => {
                        const i = Math.exp(-v * T * e);
                        return l - i * (((y + v * T * g) / t) * Math.sin(t * e) + g * Math.cos(t * e));
                    };
                } else if (1 === v) P = (t) => l - Math.exp(-T * t) * (g + (y + T * g) * t);
                else {
                    const t = T * Math.sqrt(v * v - 1);
                    P = (e) => {
                        const i = Math.exp(-v * T * e),
                            s = Math.min(t * e, 300);
                        return l - (i * ((y + v * T * g) * Math.sinh(s) + t * g * Math.cosh(s))) / t;
                    };
                }
                const M = {
                    calculatedDuration: (f && m) || null,
                    next: (t) => {
                        const e = P(t);
                        if (f) u.done = t >= m;
                        else {
                            let i = 0;
                            v < 1 && (i = 0 === t ? (0, n.w)(y) : b(P, t, e));
                            const s = Math.abs(i) <= r,
                                a = Math.abs(l - e) <= o;
                            u.done = s && a;
                        }
                        return (u.value = u.done ? l : e), u;
                    },
                    toString: () => {
                        const t = Math.min((0, s.iI)(M), s.EO),
                            e = (0, s.wk)((e) => M.next(t * e).value, t, 30);
                        return t + "ms " + e;
                    },
                };
                return M;
            }
            function N({ keyframes: t, velocity: e = 0, power: i = 0.8, timeConstant: s = 325, bounceDamping: n = 10, bounceStiffness: r = 500, modifyTarget: o, min: a, max: l, restDelta: u = 0.5, restSpeed: c }) {
                const h = t[0],
                    d = { done: !1, value: h },
                    m = (t) => (void 0 === a ? l : void 0 === l || Math.abs(a - t) < Math.abs(l - t) ? a : l);
                let p = i * e;
                const f = h + p,
                    y = void 0 === o ? f : o(f);
                y !== f && (p = y - h);
                const v = (t) => -p * Math.exp(-t / s),
                    g = (t) => y + v(t),
                    T = (t) => {
                        const e = v(t),
                            i = g(t);
                        (d.done = Math.abs(e) <= u), (d.value = d.done ? y : i);
                    };
                let k, w;
                const P = (t) => {
                    var e;
                    ((e = d.value), (void 0 !== a && e < a) || (void 0 !== l && e > l)) && ((k = t), (w = H({ keyframes: [d.value, m(d.value)], velocity: b(g, t, d.value), damping: n, stiffness: r, restDelta: u, restSpeed: c })));
                };
                return (
                    P(0),
                    {
                        calculatedDuration: null,
                        next: (t) => {
                            let e = !1;
                            return w || void 0 !== k || ((e = !0), T(t), P(t)), void 0 !== k && t >= k ? w.next(t - k) : (!e && T(t), d);
                        },
                    }
                );
            }
            var Z = i(597800),
                B = i(129554),
                L = i(645240),
                Y = i(234208),
                J = i(290416),
                Q = i(782148);
            function tt(t, e) {
                return t.map(() => e || Z.mZ).splice(0, t.length - 1);
            }
            function et({ duration: t = 300, keyframes: e, times: i, ease: s = "easeInOut" }) {
                const n = (0, B.N)(s) ? s.map(L.R) : (0, L.R)(s),
                    r = { done: !1, value: e[0] },
                    o = (0, Q.q)(i && i.length === e.length ? i : (0, J.Y)(e), t),
                    a = (0, Y.s)(o, e, { ease: Array.isArray(n) ? n : tt(e, n) });
                return { calculatedDuration: t, next: (e) => ((r.value = a(e)), (r.done = e >= t), r) };
            }
            const it = (t) => {
                    const e = ({ timestamp: e }) => t(e);
                    return { start: () => r.Wi.update(e, !0), stop: () => (0, r.Pn)(e), now: () => (r.frameData.isProcessing ? r.frameData.timestamp : m.X.now()) };
                },
                st = { decay: N, inertia: N, tween: et, keyframes: et, spring: H },
                nt = (t) => t / 100;
            class rt extends k {
                constructor(t) {
                    super(t),
                        (this.holdTime = null),
                        (this.cancelTime = null),
                        (this.currentTime = 0),
                        (this.playbackSpeed = 1),
                        (this.pendingPlayState = "running"),
                        (this.startTime = null),
                        (this.state = "idle"),
                        (this.stop = () => {
                            if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                            this.teardown();
                            const { onStop: t } = this.options;
                            t && t();
                        });
                    const { name: e, motionValue: i, element: s, keyframes: n } = this.options,
                        r = (null == s ? void 0 : s.KeyframeResolver) || p.e;
                    (this.resolver = new r(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s)), this.resolver.scheduleResolve();
                }
                flatten() {
                    super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
                }
                initPlayback(t) {
                    const { type: e = "keyframes", repeat: i = 0, repeatDelay: n = 0, repeatType: r, velocity: o = 0 } = this.options,
                        a = (0, s.xD)(e) ? e : st[e] || et;
                    let l, u;
                    a !== et && "number" != typeof t[0] && ((l = (0, M.z)(nt, (0, P.C)(t[0], t[1]))), (t = [0, 100]));
                    const c = a({ ...this.options, keyframes: t });
                    "mirror" === r && (u = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })), null === c.calculatedDuration && (c.calculatedDuration = (0, s.iI)(c));
                    const { calculatedDuration: h } = c,
                        d = h + n;
                    return { generator: c, mirroredGenerator: u, mapPercentToKeyframes: l, calculatedDuration: h, resolvedDuration: d, totalDuration: d * (i + 1) - n };
                }
                onPostResolved() {
                    const { autoplay: t = !0 } = this.options;
                    this.play(), "paused" !== this.pendingPlayState && t ? (this.state = this.pendingPlayState) : this.pause();
                }
                tick(t, e = !1) {
                    const { resolved: i } = this;
                    if (!i) {
                        const { keyframes: t } = this.options;
                        return { done: !0, value: t[t.length - 1] };
                    }
                    const { finalKeyframe: s, generator: n, mirroredGenerator: r, mapPercentToKeyframes: o, keyframes: a, calculatedDuration: l, totalDuration: u, resolvedDuration: c } = i;
                    if (null === this.startTime) return n.next(0);
                    const { delay: h, repeat: d, repeatType: m, repeatDelay: p, onUpdate: f } = this.options;
                    this.speed > 0 ? (this.startTime = Math.min(this.startTime, t)) : this.speed < 0 && (this.startTime = Math.min(t - u / this.speed, this.startTime)), e ? (this.currentTime = t) : null !== this.holdTime ? (this.currentTime = this.holdTime) : (this.currentTime = Math.round(t - this.startTime) * this.speed);
                    const y = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
                        v = this.speed >= 0 ? y < 0 : y > u;
                    (this.currentTime = Math.max(y, 0)), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                    let g = this.currentTime,
                        k = n;
                    if (d) {
                        const t = Math.min(this.currentTime, u) / c;
                        let e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1));
                        Boolean(e % 2) && ("reverse" === m ? ((i = 1 - i), p && (i -= p / c)) : "mirror" === m && (k = r)), (g = (0, w.u)(0, 1, i) * c);
                    }
                    const P = v ? { done: !1, value: a[0] } : k.next(g);
                    o && (P.value = o(P.value));
                    let { done: M } = P;
                    v || null === l || (M = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                    const D = null === this.holdTime && ("finished" === this.state || ("running" === this.state && M));
                    return D && void 0 !== s && (P.value = T(a, this.options, s)), f && f(P.value), D && this.finish(), P;
                }
                get duration() {
                    const { resolved: t } = this;
                    return t ? (0, n.X)(t.calculatedDuration) : 0;
                }
                get time() {
                    return (0, n.X)(this.currentTime);
                }
                set time(t) {
                    (t = (0, n.w)(t)), (this.currentTime = t), null !== this.holdTime || 0 === this.speed ? (this.holdTime = t) : this.driver && (this.startTime = this.driver.now() - t / this.speed);
                }
                get speed() {
                    return this.playbackSpeed;
                }
                set speed(t) {
                    const e = this.playbackSpeed !== t;
                    (this.playbackSpeed = t), e && (this.time = (0, n.X)(this.currentTime));
                }
                play() {
                    if ((this.resolver.isScheduled || this.resolver.resume(), !this._resolved)) return void (this.pendingPlayState = "running");
                    if (this.isStopped) return;
                    const { driver: t = it, onPlay: e, startTime: i } = this.options;
                    this.driver || (this.driver = t((t) => this.tick(t))), e && e();
                    const s = this.driver.now();
                    null !== this.holdTime ? (this.startTime = s - this.holdTime) : this.startTime ? "finished" === this.state && (this.startTime = s) : (this.startTime = null != i ? i : this.calcStartTime()), "finished" === this.state && this.updateFinishedPromise(), (this.cancelTime = this.startTime), (this.holdTime = null), (this.state = "running"), this.driver.start();
                }
                pause() {
                    var t;
                    this._resolved ? ((this.state = "paused"), (this.holdTime = null !== (t = this.currentTime) && void 0 !== t ? t : 0)) : (this.pendingPlayState = "paused");
                }
                complete() {
                    "running" !== this.state && this.play(), (this.pendingPlayState = this.state = "finished"), (this.holdTime = null);
                }
                finish() {
                    this.teardown(), (this.state = "finished");
                    const { onComplete: t } = this.options;
                    t && t();
                }
                cancel() {
                    null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
                }
                teardown() {
                    (this.state = "idle"), this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), (this.startTime = this.cancelTime = null), this.resolver.cancel();
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), (this.driver = void 0));
                }
                sample(t) {
                    return (this.startTime = 0), this.tick(t, !0);
                }
            }
            const ot = new Set(["opacity", "clipPath", "filter", "transform"]);
            const at = (0, i(104321).X)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            const lt = { anticipate: u.L, backInOut: c.XL, circInOut: h.X7 };
            class ut extends k {
                constructor(t) {
                    super(t);
                    const { name: e, motionValue: i, element: s, keyframes: n } = this.options;
                    (this.resolver = new d.s(n, (t, e) => this.onKeyframesResolved(t, e), e, i, s)), this.resolver.scheduleResolve();
                }
                initPlayback(t, e) {
                    let { duration: i = 300, times: n, ease: r, type: o, motionValue: a, name: l, startTime: u } = this.options;
                    if (!a.owner || !a.owner.current) return !1;
                    var c;
                    if (("string" == typeof r && (0, s.Vc)() && r in lt && (r = lt[r]), (c = this.options), (0, s.xD)(c.type) || "spring" === c.type || !(0, s.hR)(c.ease))) {
                        const { onComplete: e, onUpdate: s, motionValue: a, element: l, ...u } = this.options,
                            c = (function (t, e) {
                                const i = new rt({ ...e, keyframes: t, repeat: 0, delay: 0, isGenerator: !0 });
                                let s = { done: !1, value: t[0] };
                                const n = [];
                                let r = 0;
                                for (; !s.done && r < 2e4; ) (s = i.sample(r)), n.push(s.value), (r += 10);
                                return { times: void 0, keyframes: n, duration: r - 10, ease: "linear" };
                            })(t, u);
                        1 === (t = c.keyframes).length && (t[1] = t[0]), (i = c.duration), (n = c.times), (r = c.ease), (o = "keyframes");
                    }
                    const h = (function (t, e, i, { delay: n = 0, duration: r = 300, repeat: o = 0, repeatType: a = "loop", ease: l = "easeInOut", times: u } = {}) {
                        const c = { [e]: i };
                        u && (c.offset = u);
                        const h = (0, s.eB)(l, r);
                        return Array.isArray(h) && (c.easing = h), t.animate(c, { delay: n, duration: r, easing: Array.isArray(h) ? "linear" : h, fill: "both", iterations: o + 1, direction: "reverse" === a ? "alternate" : "normal" });
                    })(a.owner.current, l, t, { ...this.options, duration: i, times: n, ease: r });
                    return (
                        (h.startTime = null != u ? u : this.calcStartTime()),
                        this.pendingTimeline
                            ? ((0, s._F)(h, this.pendingTimeline), (this.pendingTimeline = void 0))
                            : (h.onfinish = () => {
                                  const { onComplete: i } = this.options;
                                  a.set(T(t, this.options, e)), i && i(), this.cancel(), this.resolveFinishedPromise();
                              }),
                        { animation: h, duration: i, times: n, type: o, ease: r, keyframes: t }
                    );
                }
                get duration() {
                    const { resolved: t } = this;
                    if (!t) return 0;
                    const { duration: e } = t;
                    return (0, n.X)(e);
                }
                get time() {
                    const { resolved: t } = this;
                    if (!t) return 0;
                    const { animation: e } = t;
                    return (0, n.X)(e.currentTime || 0);
                }
                set time(t) {
                    const { resolved: e } = this;
                    if (!e) return;
                    const { animation: i } = e;
                    i.currentTime = (0, n.w)(t);
                }
                get speed() {
                    const { resolved: t } = this;
                    if (!t) return 1;
                    const { animation: e } = t;
                    return e.playbackRate;
                }
                set speed(t) {
                    const { resolved: e } = this;
                    if (!e) return;
                    const { animation: i } = e;
                    i.playbackRate = t;
                }
                get state() {
                    const { resolved: t } = this;
                    if (!t) return "idle";
                    const { animation: e } = t;
                    return e.playState;
                }
                get startTime() {
                    const { resolved: t } = this;
                    if (!t) return null;
                    const { animation: e } = t;
                    return e.startTime;
                }
                attachTimeline(t) {
                    if (this._resolved) {
                        const { resolved: e } = this;
                        if (!e) return l.Z;
                        const { animation: i } = e;
                        (0, s._F)(i, t);
                    } else this.pendingTimeline = t;
                    return l.Z;
                }
                play() {
                    if (this.isStopped) return;
                    const { resolved: t } = this;
                    if (!t) return;
                    const { animation: e } = t;
                    "finished" === e.playState && this.updateFinishedPromise(), e.play();
                }
                pause() {
                    const { resolved: t } = this;
                    if (!t) return;
                    const { animation: e } = t;
                    e.pause();
                }
                stop() {
                    if ((this.resolver.cancel(), (this.isStopped = !0), "idle" === this.state)) return;
                    this.resolveFinishedPromise(), this.updateFinishedPromise();
                    const { resolved: t } = this;
                    if (!t) return;
                    const { animation: e, keyframes: i, duration: s, type: r, ease: o, times: a } = t;
                    if ("idle" === e.playState || "finished" === e.playState) return;
                    if (this.time) {
                        const { motionValue: t, onUpdate: e, onComplete: l, element: u, ...c } = this.options,
                            h = new rt({ ...c, keyframes: i, duration: s, type: r, ease: o, times: a, isGenerator: !0 }),
                            d = (0, n.w)(this.time);
                        t.setWithVelocity(h.sample(d - 10).value, h.sample(d).value, 10);
                    }
                    const { onStop: l } = this.options;
                    l && l(), this.cancel();
                }
                complete() {
                    const { resolved: t } = this;
                    t && t.animation.finish();
                }
                cancel() {
                    const { resolved: t } = this;
                    t && t.animation.cancel();
                }
                static supports(t) {
                    const { motionValue: e, name: i, repeatDelay: s, repeatType: n, damping: r, type: o } = t;
                    if (!(e && e.owner && e.owner.current instanceof HTMLElement)) return !1;
                    const { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                    return at() && i && ot.has(i) && !a && !l && !s && "mirror" !== n && 0 !== r && "inertia" !== o;
                }
            }
            var ct = i(208462);
            const ht = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
                dt = { type: "keyframes", duration: 0.8 },
                mt = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
                pt = (t, { keyframes: e }) => (e.length > 2 ? dt : ct.G.has(t) ? (t.startsWith("scale") ? { type: "spring", stiffness: 550, damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30, restSpeed: 10 } : ht) : mt);
            const ft =
                (t, e, i, l = {}, u, c) =>
                (h) => {
                    const d = (0, s.ev)(l, t) || {},
                        m = d.delay || l.delay || 0;
                    let { elapsed: p = 0 } = l;
                    p -= (0, n.w)(m);
                    let f = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...d,
                        delay: -p,
                        onUpdate: (t) => {
                            e.set(t), d.onUpdate && d.onUpdate(t);
                        },
                        onComplete: () => {
                            h(), d.onComplete && d.onComplete();
                        },
                        name: t,
                        motionValue: e,
                        element: c ? void 0 : u,
                    };
                    (function ({ when: t, delay: e, delayChildren: i, staggerChildren: s, staggerDirection: n, repeat: r, repeatType: o, repeatDelay: a, from: l, elapsed: u, ...c }) {
                        return !!Object.keys(c).length;
                    })(d) || (f = { ...f, ...pt(t, f) }),
                        f.duration && (f.duration = (0, n.w)(f.duration)),
                        f.repeatDelay && (f.repeatDelay = (0, n.w)(f.repeatDelay)),
                        void 0 !== f.from && (f.keyframes[0] = f.from);
                    let y = !1;
                    if (((!1 === f.type || (0 === f.duration && !f.repeatDelay)) && ((f.duration = 0), 0 === f.delay && (y = !0)), (a.c.current || o.c.skipAnimations) && ((y = !0), (f.duration = 0), (f.delay = 0)), y && !c && void 0 !== e.get())) {
                        const t = T(f.keyframes, d);
                        if (void 0 !== t)
                            return (
                                r.Wi.update(() => {
                                    f.onUpdate(t), f.onComplete();
                                }),
                                new s.sP([])
                            );
                    }
                    return !c && ut.supports(f) ? new ut(f) : new rt(f);
                };
        },
        448683: (t, e, i) => {
            "use strict";
            i.d(e, { d: () => f });
            var s = i(412841),
                n = i(479556),
                r = i(132881),
                o = i(981248),
                a = i(904969),
                l = i(358880),
                u = i(61419),
                c = i(241359);
            function h({ protectedKeys: t, needsAnimating: e }, i) {
                const s = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), s;
            }
            function d(t, e, { delay: i = 0, transitionOverride: s, type: d } = {}) {
                var m;
                let { transition: p = t.getDefaultTransition(), transitionEnd: f, ...y } = e;
                s && (p = s);
                const v = [],
                    g = d && t.animationState && t.animationState.getState()[d];
                for (const e in y) {
                    const s = t.getValue(e, null !== (m = t.latestValues[e]) && void 0 !== m ? m : null),
                        o = y[e];
                    if (void 0 === o || (g && h(g, e))) continue;
                    const d = { delay: i, ...(0, n.ev)(p || {}, e) };
                    let f = !1;
                    if (window.MotionHandoffAnimation) {
                        const i = (0, l.s)(t);
                        if (i) {
                            const t = window.MotionHandoffAnimation(i, e, c.Wi);
                            null !== t && ((d.startTime = t), (f = !0));
                        }
                    }
                    (0, a.K)(t, e), s.start((0, u.v)(e, s, o, t.shouldReduceMotion && r.z.has(e) ? { type: !1 } : d, t, f));
                    const T = s.animation;
                    T && v.push(T);
                }
                return (
                    f &&
                        Promise.all(v).then(() => {
                            c.Wi.update(() => {
                                f && (0, o.C)(t, f);
                            });
                        }),
                    v
                );
            }
            function m(t, e, i = {}) {
                var n;
                const r = (0, s.x)(t, e, "exit" === i.type ? (null === (n = t.presenceContext) || void 0 === n ? void 0 : n.custom) : void 0);
                let { transition: o = t.getDefaultTransition() || {} } = r || {};
                i.transitionOverride && (o = i.transitionOverride);
                const a = r ? () => Promise.all(d(t, r, i)) : () => Promise.resolve(),
                    l =
                        t.variantChildren && t.variantChildren.size
                            ? (s = 0) => {
                                  const { delayChildren: n = 0, staggerChildren: r, staggerDirection: a } = o;
                                  return (function (t, e, i = 0, s = 0, n = 1, r) {
                                      const o = [],
                                          a = (t.variantChildren.size - 1) * s,
                                          l = 1 === n ? (t = 0) => t * s : (t = 0) => a - t * s;
                                      return (
                                          Array.from(t.variantChildren)
                                              .sort(p)
                                              .forEach((t, s) => {
                                                  t.notify("AnimationStart", e), o.push(m(t, e, { ...r, delay: i + l(s) }).then(() => t.notify("AnimationComplete", e)));
                                              }),
                                          Promise.all(o)
                                      );
                                  })(t, e, n + s, r, a, i);
                              }
                            : () => Promise.resolve(),
                    { when: u } = o;
                if (u) {
                    const [t, e] = "beforeChildren" === u ? [a, l] : [l, a];
                    return t().then(() => e());
                }
                return Promise.all([a(), l(i.delay)]);
            }
            function p(t, e) {
                return t.sortNodePosition(e);
            }
            function f(t, e, i = {}) {
                let n;
                if ((t.notify("AnimationStart", e), Array.isArray(e))) {
                    const s = e.map((e) => m(t, e, i));
                    n = Promise.all(s);
                } else if ("string" == typeof e) n = m(t, e, i);
                else {
                    const r = "function" == typeof e ? (0, s.x)(t, e, i.custom) : e;
                    n = Promise.all(d(t, r, i));
                }
                return n.then(() => {
                    t.notify("AnimationComplete", e);
                });
            }
        },
        267098: (t, e, i) => {
            "use strict";
            i.d(e, { M: () => s });
            const s = "data-" + (0, i(618754).D)("framerAppearId");
        },
        358880: (t, e, i) => {
            "use strict";
            i.d(e, { s: () => n });
            var s = i(267098);
            function n(t) {
                return t.props[s.M];
            }
        },
        912816: (t, e, i) => {
            "use strict";
            function s(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start;
            }
            i.d(e, { H: () => s });
        },
        755721: (t, e, i) => {
            "use strict";
            i.d(e, { C: () => s });
            const s = (t) => Array.isArray(t);
        },
        898761: (t, e, i) => {
            "use strict";
            i.d(e, { W: () => n });
            var s = i(354561);
            function n(t) {
                return "number" == typeof t ? 0 === t : null === t || "none" === t || "0" === t || (0, s.W)(t);
            }
        },
        858175: (t, e, i) => {
            "use strict";
            i.d(e, { oO: () => r });
            var s = i(202784),
                n = i(97967);
            function r(t = !0) {
                const e = (0, s.useContext)(n.O);
                if (null === e) return [!0, null];
                const { isPresent: i, onExitComplete: r, register: o } = e,
                    a = (0, s.useId)();
                (0, s.useEffect)(() => {
                    t && o(a);
                }, [t]);
                const l = (0, s.useCallback)(() => t && r && r(a), [a, r, t]);
                return !i && r ? [!1, l] : [!0];
            }
        },
        203422: (t, e, i) => {
            "use strict";
            i.d(e, { p: () => s });
            const s = (0, i(202784).createContext)({});
        },
        203273: (t, e, i) => {
            "use strict";
            i.d(e, { u: () => s });
            const s = (0, i(202784).createContext)({ strict: !1 });
        },
        160976: (t, e, i) => {
            "use strict";
            i.d(e, { _: () => s });
            const s = (0, i(202784).createContext)({ transformPagePoint: (t) => t, isStatic: !1, reducedMotion: "never" });
        },
        282025: (t, e, i) => {
            "use strict";
            i.d(e, { H: () => a });
            var s = i(202784),
                n = i(746154),
                r = i(220330),
                o = i(723293);
            function a(t) {
                const { initial: e, animate: i } = (function (t, e) {
                    if ((0, o.G)(t)) {
                        const { initial: e, animate: i } = t;
                        return { initial: !1 === e || (0, r.$)(e) ? e : void 0, animate: (0, r.$)(i) ? i : void 0 };
                    }
                    return !1 !== t.inherit ? e : {};
                })(t, (0, s.useContext)(n.v));
                return (0, s.useMemo)(() => ({ initial: e, animate: i }), [l(e), l(i)]);
            }
            function l(t) {
                return Array.isArray(t) ? t.join(" ") : t;
            }
        },
        746154: (t, e, i) => {
            "use strict";
            i.d(e, { v: () => s });
            const s = (0, i(202784).createContext)({});
        },
        97967: (t, e, i) => {
            "use strict";
            i.d(e, { O: () => s });
            const s = (0, i(202784).createContext)(null);
        },
        364460: (t, e, i) => {
            "use strict";
            i.d(e, { g: () => s });
            const s = (0, i(202784).createContext)({});
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-43dd7041.8ed2526a.js.map
