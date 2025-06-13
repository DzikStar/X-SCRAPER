(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-059be3de"],
    {
        750857: (t, e, n) => {
            var r = n(137772).Symbol;
            t.exports = r;
        },
        853366: (t, e, n) => {
            var r = n(750857),
                i = n(662107),
                o = n(237157),
                a = r ? r.toStringTag : void 0;
            t.exports = function (t) {
                return null == t ? (void 0 === t ? "[object Undefined]" : "[object Null]") : a && a in Object(t) ? i(t) : o(t);
            };
        },
        251704: (t, e, n) => {
            var r = n(252153),
                i = /^\s+/;
            t.exports = function (t) {
                return t ? t.slice(0, r(t) + 1).replace(i, "") : t;
            };
        },
        51242: (t, e, n) => {
            var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
            t.exports = r;
        },
        662107: (t, e, n) => {
            var r = n(750857),
                i = Object.prototype,
                o = i.hasOwnProperty,
                a = i.toString,
                s = r ? r.toStringTag : void 0;
            t.exports = function (t) {
                var e = o.call(t, s),
                    n = t[s];
                try {
                    t[s] = void 0;
                    var r = !0;
                } catch (t) {}
                var i = a.call(t);
                return r && (e ? (t[s] = n) : delete t[s]), i;
            };
        },
        237157: (t) => {
            var e = Object.prototype.toString;
            t.exports = function (t) {
                return e.call(t);
            };
        },
        137772: (t, e, n) => {
            var r = n(51242),
                i = "object" == typeof self && self && self.Object === Object && self,
                o = r || i || Function("return this")();
            t.exports = o;
        },
        252153: (t) => {
            var e = /\s/;
            t.exports = function (t) {
                for (var n = t.length; n-- && e.test(t.charAt(n)); );
                return n;
            };
        },
        254073: (t, e, n) => {
            var r = n(429259),
                i = n(161100),
                o = n(707642),
                a = Math.max,
                s = Math.min;
            t.exports = function (t, e, n) {
                var u,
                    c,
                    l,
                    f,
                    d,
                    p,
                    v = 0,
                    h = !1,
                    m = !1,
                    y = !0;
                if ("function" != typeof t) throw new TypeError("Expected a function");
                function b(e) {
                    var n = u,
                        r = c;
                    return (u = c = void 0), (v = e), (f = t.apply(r, n));
                }
                function g(t) {
                    var n = t - p;
                    return void 0 === p || n >= e || n < 0 || (m && t - v >= l);
                }
                function x() {
                    var t = i();
                    if (g(t)) return E(t);
                    d = setTimeout(
                        x,
                        (function (t) {
                            var n = e - (t - p);
                            return m ? s(n, l - (t - v)) : n;
                        })(t),
                    );
                }
                function E(t) {
                    return (d = void 0), y && u ? b(t) : ((u = c = void 0), f);
                }
                function w() {
                    var t = i(),
                        n = g(t);
                    if (((u = arguments), (c = this), (p = t), n)) {
                        if (void 0 === d)
                            return (function (t) {
                                return (v = t), (d = setTimeout(x, e)), h ? b(t) : f;
                            })(p);
                        if (m) return clearTimeout(d), (d = setTimeout(x, e)), b(p);
                    }
                    return void 0 === d && (d = setTimeout(x, e)), f;
                }
                return (
                    (e = o(e) || 0),
                    r(n) && ((h = !!n.leading), (l = (m = "maxWait" in n) ? a(o(n.maxWait) || 0, e) : l), (y = "trailing" in n ? !!n.trailing : y)),
                    (w.cancel = function () {
                        void 0 !== d && clearTimeout(d), (v = 0), (u = p = c = d = void 0);
                    }),
                    (w.flush = function () {
                        return void 0 === d ? f : E(i());
                    }),
                    w
                );
            };
        },
        429259: (t) => {
            t.exports = function (t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e);
            };
        },
        315125: (t) => {
            t.exports = function (t) {
                return null != t && "object" == typeof t;
            };
        },
        4795: (t, e, n) => {
            var r = n(853366),
                i = n(315125);
            t.exports = function (t) {
                return "symbol" == typeof t || (i(t) && "[object Symbol]" == r(t));
            };
        },
        161100: (t, e, n) => {
            var r = n(137772);
            t.exports = function () {
                return r.Date.now();
            };
        },
        707642: (t, e, n) => {
            var r = n(251704),
                i = n(429259),
                o = n(4795),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                u = /^0o[0-7]+$/i,
                c = parseInt;
            t.exports = function (t) {
                if ("number" == typeof t) return t;
                if (o(t)) return NaN;
                if (i(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = i(e) ? e + "" : e;
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = r(t);
                var n = s.test(t);
                return n || u.test(t) ? c(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t;
            };
        },
        479556: (t, e, n) => {
            "use strict";
            n.d(e, { sP: () => a, _F: () => f, iI: () => c, wk: () => y, ev: () => s, Mr: () => L, qE: () => d, xD: () => l, DJ: () => k, hR: () => b, eB: () => E, EO: () => u, OD: () => M, KV: () => X, Vc: () => h });
            var r = n(104321);
            const i = (0, r.X)(() => void 0 !== window.ScrollTimeline);
            class o {
                constructor(t) {
                    (this.stop = () => this.runAll("stop")), (this.animations = t.filter(Boolean));
                }
                get finished() {
                    return Promise.all(this.animations.map((t) => ("finished" in t ? t.finished : t)));
                }
                getAll(t) {
                    return this.animations[0][t];
                }
                setAll(t, e) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][t] = e;
                }
                attachTimeline(t, e) {
                    const n = this.animations.map((n) => (i() && n.attachTimeline ? n.attachTimeline(t) : "function" == typeof e ? e(n) : void 0));
                    return () => {
                        n.forEach((t, e) => {
                            t && t(), this.animations[e].stop();
                        });
                    };
                }
                get time() {
                    return this.getAll("time");
                }
                set time(t) {
                    this.setAll("time", t);
                }
                get speed() {
                    return this.getAll("speed");
                }
                set speed(t) {
                    this.setAll("speed", t);
                }
                get startTime() {
                    return this.getAll("startTime");
                }
                get duration() {
                    let t = 0;
                    for (let e = 0; e < this.animations.length; e++) t = Math.max(t, this.animations[e].duration);
                    return t;
                }
                runAll(t) {
                    this.animations.forEach((e) => e[t]());
                }
                flatten() {
                    this.runAll("flatten");
                }
                play() {
                    this.runAll("play");
                }
                pause() {
                    this.runAll("pause");
                }
                cancel() {
                    this.runAll("cancel");
                }
                complete() {
                    this.runAll("complete");
                }
            }
            class a extends o {
                then(t, e) {
                    return Promise.all(this.animations).then(t).catch(e);
                }
            }
            function s(t, e) {
                return t ? t[e] || t.default || t : void 0;
            }
            const u = 2e4;
            function c(t) {
                let e = 0;
                let n = t.next(e);
                for (; !n.done && e < u; ) (e += 50), (n = t.next(e));
                return e >= u ? 1 / 0 : e;
            }
            function l(t) {
                return "function" == typeof t;
            }
            function f(t, e) {
                (t.timeline = e), (t.onfinish = null);
            }
            const d = (t) => Array.isArray(t) && "number" == typeof t[0],
                p = { linearEasing: void 0 };
            function v(t, e) {
                const n = (0, r.X)(t);
                return () => {
                    var t;
                    return null !== (t = p[e]) && void 0 !== t ? t : n();
                };
            }
            const h = v(() => {
                try {
                    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
                } catch (t) {
                    return !1;
                }
                return !0;
            }, "linearEasing");
            var m = n(653870);
            const y = (t, e, n = 10) => {
                let r = "";
                const i = Math.max(Math.round(e / n), 2);
                for (let e = 0; e < i; e++) r += t((0, m.Y)(0, i - 1, e)) + ", ";
                return `linear(${r.substring(0, r.length - 2)})`;
            };
            function b(t) {
                return Boolean(("function" == typeof t && h()) || !t || ("string" == typeof t && (t in x || h())) || d(t) || (Array.isArray(t) && t.every(b)));
            }
            const g = ([t, e, n, r]) => `cubic-bezier(${t}, ${e}, ${n}, ${r})`,
                x = { linear: "linear", ease: "ease", easeIn: "ease-in", easeOut: "ease-out", easeInOut: "ease-in-out", circIn: g([0, 0.65, 0.55, 1]), circOut: g([0.55, 0, 1, 0.45]), backIn: g([0.31, 0.01, 0.66, -0.59]), backOut: g([0.33, 1.53, 0.69, 0.99]) };
            function E(t, e) {
                return t ? ("function" == typeof t && h() ? y(t, e) : d(t) ? g(t) : Array.isArray(t) ? t.map((t) => E(t, e) || x.easeOut) : x[t]) : void 0;
            }
            const w = { x: !1, y: !1 };
            function A() {
                return w.x || w.y;
            }
            function T(t, e) {
                const n = (function (t, e, n) {
                        var r;
                        if (t instanceof Element) return [t];
                        if ("string" == typeof t) {
                            let i = document;
                            e && (i = e.current);
                            const o = null !== (r = null == n ? void 0 : n[t]) && void 0 !== r ? r : i.querySelectorAll(t);
                            return o ? Array.from(o) : [];
                        }
                        return Array.from(t);
                    })(t),
                    r = new AbortController();
                return [n, { passive: !0, ...e, signal: r.signal }, () => r.abort()];
            }
            function O(t) {
                return (e) => {
                    "touch" === e.pointerType || A() || t(e);
                };
            }
            function L(t, e, n = {}) {
                const [r, i, o] = T(t, n),
                    a = O((t) => {
                        const { target: n } = t,
                            r = e(t);
                        if ("function" != typeof r || !n) return;
                        const o = O((t) => {
                            r(t), n.removeEventListener("pointerleave", o);
                        });
                        n.addEventListener("pointerleave", o, i);
                    });
                return (
                    r.forEach((t) => {
                        t.addEventListener("pointerenter", a, i);
                    }),
                    o
                );
            }
            const j = (t, e) => !!e && (t === e || j(t, e.parentElement)),
                k = (t) => ("mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary),
                S = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
            const I = new WeakSet();
            function N(t) {
                return (e) => {
                    "Enter" === e.key && t(e);
                };
            }
            function P(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 }));
            }
            const $ = (t, e) => {
                const n = t.currentTarget;
                if (!n) return;
                const r = N(() => {
                    if (I.has(n)) return;
                    P(n, "down");
                    const t = N(() => {
                        P(n, "up");
                    });
                    n.addEventListener("keyup", t, e), n.addEventListener("blur", () => P(n, "cancel"), e);
                });
                n.addEventListener("keydown", r, e), n.addEventListener("blur", () => n.removeEventListener("keydown", r), e);
            };
            function _(t) {
                return k(t) && !A();
            }
            function M(t, e, n = {}) {
                const [r, i, o] = T(t, n),
                    a = (t) => {
                        const r = t.currentTarget;
                        if (!_(t) || I.has(r)) return;
                        I.add(r);
                        const o = e(t),
                            a = (t, e) => {
                                window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", u), _(t) && I.has(r) && (I.delete(r), "function" == typeof o && o(t, { success: e }));
                            },
                            s = (t) => {
                                a(t, n.useGlobalTarget || j(r, t.target));
                            },
                            u = (t) => {
                                a(t, !1);
                            };
                        window.addEventListener("pointerup", s, i), window.addEventListener("pointercancel", u, i);
                    };
                return (
                    r.forEach((t) => {
                        (function (t) {
                            return S.has(t.tagName) || -1 !== t.tabIndex;
                        })(t) ||
                            null !== t.getAttribute("tabindex") ||
                            (t.tabIndex = 0);
                        (n.useGlobalTarget ? window : t).addEventListener("pointerdown", a, i), t.addEventListener("focus", (t) => $(t, i), i);
                    }),
                    o
                );
            }
            function X(t) {
                return "x" === t || "y" === t
                    ? w[t]
                        ? null
                        : ((w[t] = !0),
                          () => {
                              w[t] = !1;
                          })
                    : w.x || w.y
                      ? null
                      : ((w.x = w.y = !0),
                        () => {
                            w.x = w.y = !1;
                        });
            }
        },
        377781: (t, e, n) => {
            "use strict";
            n.d(e, { K: () => i, k: () => o });
            var r = n(587363);
            let i = r.Z,
                o = r.Z;
        },
        104321: (t, e, n) => {
            "use strict";
            function r(t) {
                let e;
                return () => (void 0 === e && (e = t()), e);
            }
            n.d(e, { X: () => r });
        },
        587363: (t, e, n) => {
            "use strict";
            n.d(e, { Z: () => r });
            const r = (t) => t;
        },
        653870: (t, e, n) => {
            "use strict";
            n.d(e, { Y: () => r });
            const r = (t, e, n) => {
                const r = e - t;
                return 0 === r ? 1 : (n - t) / r;
            };
        },
        987302: (t, e, n) => {
            "use strict";
            n.d(e, { X: () => i, w: () => r });
            const r = (t) => 1e3 * t,
                i = (t) => t / 1e3;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-059be3de.66de870a.js.map
