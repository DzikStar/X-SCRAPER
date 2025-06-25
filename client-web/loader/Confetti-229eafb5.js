"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.Confetti-229eafb5"],
    {
        246475: (t, e) => {
            /** @license React v0.20.2
             * scheduler.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var i, s, r, n;
            if ("object" == typeof performance && "function" == typeof performance.now) {
                var a = performance;
                e.unstable_now = function () {
                    return a.now();
                };
            } else {
                var o = Date,
                    h = o.now();
                e.unstable_now = function () {
                    return o.now() - h;
                };
            }
            if ("undefined" == typeof window || "function" != typeof MessageChannel) {
                var u = null,
                    l = null,
                    c = function () {
                        if (null !== u)
                            try {
                                var t = e.unstable_now();
                                u(!0, t), (u = null);
                            } catch (t) {
                                throw (setTimeout(c, 0), t);
                            }
                    };
                (i = function (t) {
                    null !== u ? setTimeout(i, 0, t) : ((u = t), setTimeout(c, 0));
                }),
                    (s = function (t, e) {
                        l = setTimeout(t, e);
                    }),
                    (r = function () {
                        clearTimeout(l);
                    }),
                    (e.unstable_shouldYield = function () {
                        return !1;
                    }),
                    (n = e.unstable_forceFrameRate = function () {});
            } else {
                var d = window.setTimeout,
                    f = window.clearTimeout;
                if ("undefined" != typeof console) {
                    window.cancelAnimationFrame;
                    window.requestAnimationFrame;
                }
                var m = !1,
                    p = null,
                    y = -1,
                    x = 5,
                    g = 0;
                (e.unstable_shouldYield = function () {
                    return e.unstable_now() >= g;
                }),
                    (n = function () {}),
                    (e.unstable_forceFrameRate = function (t) {
                        0 > t || 125 < t || (x = 0 < t ? Math.floor(1e3 / t) : 5);
                    });
                var b = new MessageChannel(),
                    v = b.port2;
                (b.port1.onmessage = function () {
                    if (null !== p) {
                        var t = e.unstable_now();
                        g = t + x;
                        try {
                            p(!0, t) ? v.postMessage(null) : ((m = !1), (p = null));
                        } catch (t) {
                            throw (v.postMessage(null), t);
                        }
                    } else m = !1;
                }),
                    (i = function (t) {
                        (p = t), m || ((m = !0), v.postMessage(null));
                    }),
                    (s = function (t, i) {
                        y = d(function () {
                            t(e.unstable_now());
                        }, i);
                    }),
                    (r = function () {
                        f(y), (y = -1);
                    });
            }
            function w(t, e) {
                var i = t.length;
                t.push(e);
                t: for (;;) {
                    var s = (i - 1) >>> 1,
                        r = t[s];
                    if (!(void 0 !== r && 0 < _(r, e))) break t;
                    (t[s] = e), (t[i] = r), (i = s);
                }
            }
            function M(t) {
                return void 0 === (t = t[0]) ? null : t;
            }
            function T(t) {
                var e = t[0];
                if (void 0 !== e) {
                    var i = t.pop();
                    if (i !== e) {
                        t[0] = i;
                        t: for (var s = 0, r = t.length; s < r; ) {
                            var n = 2 * (s + 1) - 1,
                                a = t[n],
                                o = n + 1,
                                h = t[o];
                            if (void 0 !== a && 0 > _(a, i)) void 0 !== h && 0 > _(h, a) ? ((t[s] = h), (t[o] = i), (s = o)) : ((t[s] = a), (t[n] = i), (s = n));
                            else {
                                if (!(void 0 !== h && 0 > _(h, i))) break t;
                                (t[s] = h), (t[o] = i), (s = o);
                            }
                        }
                    }
                    return e;
                }
                return null;
            }
            function _(t, e) {
                var i = t.sortIndex - e.sortIndex;
                return 0 !== i ? i : t.id - e.id;
            }
            var A = [],
                S = [],
                E = 1,
                L = null,
                k = 3,
                I = !1,
                C = !1,
                U = !1;
            function F(t) {
                for (var e = M(S); null !== e; ) {
                    if (null === e.callback) T(S);
                    else {
                        if (!(e.startTime <= t)) break;
                        T(S), (e.sortIndex = e.expirationTime), w(A, e);
                    }
                    e = M(S);
                }
            }
            function P(t) {
                if (((U = !1), F(t), !C))
                    if (null !== M(A)) (C = !0), i(O);
                    else {
                        var e = M(S);
                        null !== e && s(P, e.startTime - t);
                    }
            }
            function O(t, i) {
                (C = !1), U && ((U = !1), r()), (I = !0);
                var n = k;
                try {
                    for (F(i), L = M(A); null !== L && (!(L.expirationTime > i) || (t && !e.unstable_shouldYield())); ) {
                        var a = L.callback;
                        if ("function" == typeof a) {
                            (L.callback = null), (k = L.priorityLevel);
                            var o = a(L.expirationTime <= i);
                            (i = e.unstable_now()), "function" == typeof o ? (L.callback = o) : L === M(A) && T(A), F(i);
                        } else T(A);
                        L = M(A);
                    }
                    if (null !== L) var h = !0;
                    else {
                        var u = M(S);
                        null !== u && s(P, u.startTime - i), (h = !1);
                    }
                    return h;
                } finally {
                    (L = null), (k = n), (I = !1);
                }
            }
            var D = n;
            (e.unstable_IdlePriority = 5),
                (e.unstable_ImmediatePriority = 1),
                (e.unstable_LowPriority = 4),
                (e.unstable_NormalPriority = 3),
                (e.unstable_Profiling = null),
                (e.unstable_UserBlockingPriority = 2),
                (e.unstable_cancelCallback = function (t) {
                    t.callback = null;
                }),
                (e.unstable_continueExecution = function () {
                    C || I || ((C = !0), i(O));
                }),
                (e.unstable_getCurrentPriorityLevel = function () {
                    return k;
                }),
                (e.unstable_getFirstCallbackNode = function () {
                    return M(A);
                }),
                (e.unstable_next = function (t) {
                    switch (k) {
                        case 1:
                        case 2:
                        case 3:
                            var e = 3;
                            break;
                        default:
                            e = k;
                    }
                    var i = k;
                    k = e;
                    try {
                        return t();
                    } finally {
                        k = i;
                    }
                }),
                (e.unstable_pauseExecution = function () {}),
                (e.unstable_requestPaint = D),
                (e.unstable_runWithPriority = function (t, e) {
                    switch (t) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            t = 3;
                    }
                    var i = k;
                    k = t;
                    try {
                        return e();
                    } finally {
                        k = i;
                    }
                }),
                (e.unstable_scheduleCallback = function (t, n, a) {
                    var o = e.unstable_now();
                    switch (("object" == typeof a && null !== a ? (a = "number" == typeof (a = a.delay) && 0 < a ? o + a : o) : (a = o), t)) {
                        case 1:
                            var h = -1;
                            break;
                        case 2:
                            h = 250;
                            break;
                        case 5:
                            h = 1073741823;
                            break;
                        case 4:
                            h = 1e4;
                            break;
                        default:
                            h = 5e3;
                    }
                    return (t = { id: E++, callback: n, priorityLevel: t, startTime: a, expirationTime: (h = a + h), sortIndex: -1 }), a > o ? ((t.sortIndex = a), w(S, t), null === M(A) && t === M(S) && (U ? r() : (U = !0), s(P, a - o))) : ((t.sortIndex = h), w(A, t), C || I || ((C = !0), i(O))), t;
                }),
                (e.unstable_wrapCallback = function (t) {
                    var e = k;
                    return function () {
                        var i = k;
                        k = e;
                        try {
                            return t.apply(this, arguments);
                        } finally {
                            k = i;
                        }
                    };
                });
        },
        714616: (t, e, i) => {
            t.exports = i(246475);
        },
        200357: (t, e, i) => {
            i.d(e, { G: () => h });
            var s = i(769378),
                r = i.n(s);
            const n = [];
            function a(t, e, i, s = 0, n = !1) {
                for (const t of e)
                    if (r()(i, t.args)) {
                        if (n) return;
                        if (t.error) throw t.error;
                        if (t.response) return t.response;
                        throw t.promise;
                    }
                const a = {
                    args: i,
                    promise: t(...i)
                        .then((t) => (a.response = null == t || t))
                        .catch((t) => (a.error = null != t ? t : "unknown error"))
                        .then(() => {
                            s > 0 &&
                                setTimeout(() => {
                                    const t = e.indexOf(a);
                                    -1 !== t && e.splice(t, 1);
                                }, s);
                        }),
                };
                if ((e.push(a), !n)) throw a.promise;
            }
            function o(t, ...e) {
                if (void 0 === e || 0 === e.length) t.splice(0, t.length);
                else {
                    const i = t.find((t) => r()(e, t.args));
                    if (i) {
                        const e = t.indexOf(i);
                        -1 !== e && t.splice(e, 1);
                    }
                }
            }
            function h(t, ...e) {
                return a(t, n, e, h.lifespan);
            }
            (h.lifespan = 0),
                (h.clear = (...t) => o(n, ...t)),
                (h.preload = (t, ...e) => {
                    a(t, n, e, h.lifespan, !0);
                }),
                (h.peek = (...t) => {
                    var e;
                    return null == (e = n.find((e) => r()(t, e.args))) ? void 0 : e.response;
                });
        },
        192467: (t, e, i) => {
            i.d(e, { Z: () => a });
            var s = i(202784);
            function r(t) {
                let e;
                const i = new Set(),
                    s = (t, s) => {
                        const r = "function" == typeof t ? t(e) : t;
                        if (r !== e) {
                            const t = e;
                            (e = s ? r : Object.assign({}, e, r)), i.forEach((i) => i(e, t));
                        }
                    },
                    r = () => e,
                    n = {
                        setState: s,
                        getState: r,
                        subscribe: (t, s, n) =>
                            s || n
                                ? ((t, s = r, n = Object.is) => {
                                      let a = s(e);
                                      function o() {
                                          const i = s(e);
                                          if (!n(a, i)) {
                                              const e = a;
                                              t((a = i), e);
                                          }
                                      }
                                      return i.add(o), () => i.delete(o);
                                  })(t, s, n)
                                : (i.add(t), () => i.delete(t)),
                        destroy: () => i.clear(),
                    };
                return (e = t(s, r, n)), n;
            }
            const n = "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent) ? s.useEffect : s.useLayoutEffect;
            function a(t) {
                const e = "function" == typeof t ? r(t) : t,
                    i = (t = e.getState, i = Object.is) => {
                        const [, r] = (0, s.useReducer)((t) => t + 1, 0),
                            a = e.getState(),
                            o = (0, s.useRef)(a),
                            h = (0, s.useRef)(t),
                            u = (0, s.useRef)(i),
                            l = (0, s.useRef)(!1),
                            c = (0, s.useRef)();
                        let d;
                        void 0 === c.current && (c.current = t(a));
                        let f = !1;
                        (o.current !== a || h.current !== t || u.current !== i || l.current) && ((d = t(a)), (f = !i(c.current, d))),
                            n(() => {
                                f && (c.current = d), (o.current = a), (h.current = t), (u.current = i), (l.current = !1);
                            });
                        const m = (0, s.useRef)(a);
                        n(() => {
                            const t = () => {
                                    try {
                                        const t = e.getState(),
                                            i = h.current(t);
                                        u.current(c.current, i) || ((o.current = t), (c.current = i), r());
                                    } catch (t) {
                                        (l.current = !0), r();
                                    }
                                },
                                i = e.subscribe(t);
                            return e.getState() !== m.current && t(), i;
                        }, []);
                        const p = f ? d : c.current;
                        return (0, s.useDebugValue)(p), p;
                    };
                return (
                    Object.assign(i, e),
                    (i[Symbol.iterator] = function () {
                        const t = [i, e];
                        return {
                            next() {
                                const e = t.length <= 0;
                                return { value: t.shift(), done: e };
                            },
                        };
                    }),
                    i
                );
            }
        },
        600289: (t, e, i) => {
            i.d(e, { d: () => M });
            const s = {
                enabled: !1,
                files: {},
                add: function (t, e) {
                    !1 !== this.enabled && (this.files[t] = e);
                },
                get: function (t) {
                    if (!1 !== this.enabled) return this.files[t];
                },
                remove: function (t) {
                    delete this.files[t];
                },
                clear: function () {
                    this.files = {};
                },
            };
            class r {
                constructor(t, e, i) {
                    const s = this;
                    let r,
                        n = !1,
                        a = 0,
                        o = 0;
                    const h = [];
                    (this.onStart = void 0),
                        (this.onLoad = t),
                        (this.onProgress = e),
                        (this.onError = i),
                        (this.itemStart = function (t) {
                            o++, !1 === n && void 0 !== s.onStart && s.onStart(t, a, o), (n = !0);
                        }),
                        (this.itemEnd = function (t) {
                            a++, void 0 !== s.onProgress && s.onProgress(t, a, o), a === o && ((n = !1), void 0 !== s.onLoad && s.onLoad());
                        }),
                        (this.itemError = function (t) {
                            void 0 !== s.onError && s.onError(t);
                        }),
                        (this.resolveURL = function (t) {
                            return r ? r(t) : t;
                        }),
                        (this.setURLModifier = function (t) {
                            return (r = t), this;
                        }),
                        (this.addHandler = function (t, e) {
                            return h.push(t, e), this;
                        }),
                        (this.removeHandler = function (t) {
                            const e = h.indexOf(t);
                            return -1 !== e && h.splice(e, 2), this;
                        }),
                        (this.getHandler = function (t) {
                            for (let e = 0, i = h.length; e < i; e += 2) {
                                const i = h[e],
                                    s = h[e + 1];
                                if ((i.global && (i.lastIndex = 0), i.test(t))) return s;
                            }
                            return null;
                        });
                }
            }
            const n = new r();
            class a {
                constructor(t) {
                    (this.manager = void 0 !== t ? t : n), (this.crossOrigin = "anonymous"), (this.withCredentials = !1), (this.path = ""), (this.resourcePath = ""), (this.requestHeader = {});
                }
                load() {}
                loadAsync(t, e) {
                    const i = this;
                    return new Promise(function (s, r) {
                        i.load(t, s, e, r);
                    });
                }
                parse() {}
                setCrossOrigin(t) {
                    return (this.crossOrigin = t), this;
                }
                setWithCredentials(t) {
                    return (this.withCredentials = t), this;
                }
                setPath(t) {
                    return (this.path = t), this;
                }
                setResourcePath(t) {
                    return (this.resourcePath = t), this;
                }
                setRequestHeader(t) {
                    return (this.requestHeader = t), this;
                }
            }
            Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array;
            function o(t) {
                return document.createElementNS("http://www.w3.org/1999/xhtml", t);
            }
            class h extends a {
                constructor(t) {
                    super(t);
                }
                load(t, e, i, r) {
                    void 0 !== this.path && (t = this.path + t), (t = this.manager.resolveURL(t));
                    const n = this,
                        a = s.get(t);
                    if (void 0 !== a)
                        return (
                            n.manager.itemStart(t),
                            setTimeout(function () {
                                e && e(a), n.manager.itemEnd(t);
                            }, 0),
                            a
                        );
                    const h = o("img");
                    function u() {
                        c(), s.add(t, this), e && e(this), n.manager.itemEnd(t);
                    }
                    function l(e) {
                        c(), r && r(e), n.manager.itemError(t), n.manager.itemEnd(t);
                    }
                    function c() {
                        h.removeEventListener("load", u, !1), h.removeEventListener("error", l, !1);
                    }
                    return h.addEventListener("load", u, !1), h.addEventListener("error", l, !1), "data:" !== t.slice(0, 5) && void 0 !== this.crossOrigin && (h.crossOrigin = this.crossOrigin), n.manager.itemStart(t), (h.src = t), h;
                }
            }
            class u {
                addEventListener(t, e) {
                    void 0 === this._listeners && (this._listeners = {});
                    const i = this._listeners;
                    void 0 === i[t] && (i[t] = []), -1 === i[t].indexOf(e) && i[t].push(e);
                }
                hasEventListener(t, e) {
                    if (void 0 === this._listeners) return !1;
                    const i = this._listeners;
                    return void 0 !== i[t] && -1 !== i[t].indexOf(e);
                }
                removeEventListener(t, e) {
                    if (void 0 === this._listeners) return;
                    const i = this._listeners[t];
                    if (void 0 !== i) {
                        const t = i.indexOf(e);
                        -1 !== t && i.splice(t, 1);
                    }
                }
                dispatchEvent(t) {
                    if (void 0 === this._listeners) return;
                    const e = this._listeners[t.type];
                    if (void 0 !== e) {
                        t.target = this;
                        const i = e.slice(0);
                        for (let e = 0, s = i.length; e < s; e++) i[e].call(this, t);
                        t.target = null;
                    }
                }
            }
            const l = 1001,
                c = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
            Math.PI, Math.PI;
            function d() {
                const t = (4294967295 * Math.random()) | 0,
                    e = (4294967295 * Math.random()) | 0,
                    i = (4294967295 * Math.random()) | 0,
                    s = (4294967295 * Math.random()) | 0;
                return (c[255 & t] + c[(t >> 8) & 255] + c[(t >> 16) & 255] + c[(t >> 24) & 255] + "-" + c[255 & e] + c[(e >> 8) & 255] + "-" + c[((e >> 16) & 15) | 64] + c[(e >> 24) & 255] + "-" + c[(63 & i) | 128] + c[(i >> 8) & 255] + "-" + c[(i >> 16) & 255] + c[(i >> 24) & 255] + c[255 & s] + c[(s >> 8) & 255] + c[(s >> 16) & 255] + c[(s >> 24) & 255]).toLowerCase();
            }
            class f {
                constructor(t = 0, e = 0) {
                    (f.prototype.isVector2 = !0), (this.x = t), (this.y = e);
                }
                get width() {
                    return this.x;
                }
                set width(t) {
                    this.x = t;
                }
                get height() {
                    return this.y;
                }
                set height(t) {
                    this.y = t;
                }
                set(t, e) {
                    return (this.x = t), (this.y = e), this;
                }
                setScalar(t) {
                    return (this.x = t), (this.y = t), this;
                }
                setX(t) {
                    return (this.x = t), this;
                }
                setY(t) {
                    return (this.y = t), this;
                }
                setComponent(t, e) {
                    switch (t) {
                        case 0:
                            this.x = e;
                            break;
                        case 1:
                            this.y = e;
                            break;
                        default:
                            throw new Error("index is out of range: " + t);
                    }
                    return this;
                }
                getComponent(t) {
                    switch (t) {
                        case 0:
                            return this.x;
                        case 1:
                            return this.y;
                        default:
                            throw new Error("index is out of range: " + t);
                    }
                }
                clone() {
                    return new this.constructor(this.x, this.y);
                }
                copy(t) {
                    return (this.x = t.x), (this.y = t.y), this;
                }
                add(t) {
                    return (this.x += t.x), (this.y += t.y), this;
                }
                addScalar(t) {
                    return (this.x += t), (this.y += t), this;
                }
                addVectors(t, e) {
                    return (this.x = t.x + e.x), (this.y = t.y + e.y), this;
                }
                addScaledVector(t, e) {
                    return (this.x += t.x * e), (this.y += t.y * e), this;
                }
                sub(t) {
                    return (this.x -= t.x), (this.y -= t.y), this;
                }
                subScalar(t) {
                    return (this.x -= t), (this.y -= t), this;
                }
                subVectors(t, e) {
                    return (this.x = t.x - e.x), (this.y = t.y - e.y), this;
                }
                multiply(t) {
                    return (this.x *= t.x), (this.y *= t.y), this;
                }
                multiplyScalar(t) {
                    return (this.x *= t), (this.y *= t), this;
                }
                divide(t) {
                    return (this.x /= t.x), (this.y /= t.y), this;
                }
                divideScalar(t) {
                    return this.multiplyScalar(1 / t);
                }
                applyMatrix3(t) {
                    const e = this.x,
                        i = this.y,
                        s = t.elements;
                    return (this.x = s[0] * e + s[3] * i + s[6]), (this.y = s[1] * e + s[4] * i + s[7]), this;
                }
                min(t) {
                    return (this.x = Math.min(this.x, t.x)), (this.y = Math.min(this.y, t.y)), this;
                }
                max(t) {
                    return (this.x = Math.max(this.x, t.x)), (this.y = Math.max(this.y, t.y)), this;
                }
                clamp(t, e) {
                    return (this.x = Math.max(t.x, Math.min(e.x, this.x))), (this.y = Math.max(t.y, Math.min(e.y, this.y))), this;
                }
                clampScalar(t, e) {
                    return (this.x = Math.max(t, Math.min(e, this.x))), (this.y = Math.max(t, Math.min(e, this.y))), this;
                }
                clampLength(t, e) {
                    const i = this.length();
                    return this.divideScalar(i || 1).multiplyScalar(Math.max(t, Math.min(e, i)));
                }
                floor() {
                    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
                }
                ceil() {
                    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
                }
                round() {
                    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
                }
                roundToZero() {
                    return (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)), (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)), this;
                }
                negate() {
                    return (this.x = -this.x), (this.y = -this.y), this;
                }
                dot(t) {
                    return this.x * t.x + this.y * t.y;
                }
                cross(t) {
                    return this.x * t.y - this.y * t.x;
                }
                lengthSq() {
                    return this.x * this.x + this.y * this.y;
                }
                length() {
                    return Math.sqrt(this.x * this.x + this.y * this.y);
                }
                manhattanLength() {
                    return Math.abs(this.x) + Math.abs(this.y);
                }
                normalize() {
                    return this.divideScalar(this.length() || 1);
                }
                angle() {
                    return Math.atan2(-this.y, -this.x) + Math.PI;
                }
                distanceTo(t) {
                    return Math.sqrt(this.distanceToSquared(t));
                }
                distanceToSquared(t) {
                    const e = this.x - t.x,
                        i = this.y - t.y;
                    return e * e + i * i;
                }
                manhattanDistanceTo(t) {
                    return Math.abs(this.x - t.x) + Math.abs(this.y - t.y);
                }
                setLength(t) {
                    return this.normalize().multiplyScalar(t);
                }
                lerp(t, e) {
                    return (this.x += (t.x - this.x) * e), (this.y += (t.y - this.y) * e), this;
                }
                lerpVectors(t, e, i) {
                    return (this.x = t.x + (e.x - t.x) * i), (this.y = t.y + (e.y - t.y) * i), this;
                }
                equals(t) {
                    return t.x === this.x && t.y === this.y;
                }
                fromArray(t, e = 0) {
                    return (this.x = t[e]), (this.y = t[e + 1]), this;
                }
                toArray(t = [], e = 0) {
                    return (t[e] = this.x), (t[e + 1] = this.y), t;
                }
                fromBufferAttribute(t, e) {
                    return (this.x = t.getX(e)), (this.y = t.getY(e)), this;
                }
                rotateAround(t, e) {
                    const i = Math.cos(e),
                        s = Math.sin(e),
                        r = this.x - t.x,
                        n = this.y - t.y;
                    return (this.x = r * i - n * s + t.x), (this.y = r * s + n * i + t.y), this;
                }
                random() {
                    return (this.x = Math.random()), (this.y = Math.random()), this;
                }
                *[Symbol.iterator]() {
                    yield this.x, yield this.y;
                }
            }
            class m {
                constructor() {
                    (m.prototype.isMatrix3 = !0), (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]);
                }
                set(t, e, i, s, r, n, a, o, h) {
                    const u = this.elements;
                    return (u[0] = t), (u[1] = s), (u[2] = a), (u[3] = e), (u[4] = r), (u[5] = o), (u[6] = i), (u[7] = n), (u[8] = h), this;
                }
                identity() {
                    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
                }
                copy(t) {
                    const e = this.elements,
                        i = t.elements;
                    return (e[0] = i[0]), (e[1] = i[1]), (e[2] = i[2]), (e[3] = i[3]), (e[4] = i[4]), (e[5] = i[5]), (e[6] = i[6]), (e[7] = i[7]), (e[8] = i[8]), this;
                }
                extractBasis(t, e, i) {
                    return t.setFromMatrix3Column(this, 0), e.setFromMatrix3Column(this, 1), i.setFromMatrix3Column(this, 2), this;
                }
                setFromMatrix4(t) {
                    const e = t.elements;
                    return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]), this;
                }
                multiply(t) {
                    return this.multiplyMatrices(this, t);
                }
                premultiply(t) {
                    return this.multiplyMatrices(t, this);
                }
                multiplyMatrices(t, e) {
                    const i = t.elements,
                        s = e.elements,
                        r = this.elements,
                        n = i[0],
                        a = i[3],
                        o = i[6],
                        h = i[1],
                        u = i[4],
                        l = i[7],
                        c = i[2],
                        d = i[5],
                        f = i[8],
                        m = s[0],
                        p = s[3],
                        y = s[6],
                        x = s[1],
                        g = s[4],
                        b = s[7],
                        v = s[2],
                        w = s[5],
                        M = s[8];
                    return (r[0] = n * m + a * x + o * v), (r[3] = n * p + a * g + o * w), (r[6] = n * y + a * b + o * M), (r[1] = h * m + u * x + l * v), (r[4] = h * p + u * g + l * w), (r[7] = h * y + u * b + l * M), (r[2] = c * m + d * x + f * v), (r[5] = c * p + d * g + f * w), (r[8] = c * y + d * b + f * M), this;
                }
                multiplyScalar(t) {
                    const e = this.elements;
                    return (e[0] *= t), (e[3] *= t), (e[6] *= t), (e[1] *= t), (e[4] *= t), (e[7] *= t), (e[2] *= t), (e[5] *= t), (e[8] *= t), this;
                }
                determinant() {
                    const t = this.elements,
                        e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        o = t[6],
                        h = t[7],
                        u = t[8];
                    return e * n * u - e * a * h - i * r * u + i * a * o + s * r * h - s * n * o;
                }
                invert() {
                    const t = this.elements,
                        e = t[0],
                        i = t[1],
                        s = t[2],
                        r = t[3],
                        n = t[4],
                        a = t[5],
                        o = t[6],
                        h = t[7],
                        u = t[8],
                        l = u * n - a * h,
                        c = a * o - u * r,
                        d = h * r - n * o,
                        f = e * l + i * c + s * d;
                    if (0 === f) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
                    const m = 1 / f;
                    return (t[0] = l * m), (t[1] = (s * h - u * i) * m), (t[2] = (a * i - s * n) * m), (t[3] = c * m), (t[4] = (u * e - s * o) * m), (t[5] = (s * r - a * e) * m), (t[6] = d * m), (t[7] = (i * o - h * e) * m), (t[8] = (n * e - i * r) * m), this;
                }
                transpose() {
                    let t;
                    const e = this.elements;
                    return (t = e[1]), (e[1] = e[3]), (e[3] = t), (t = e[2]), (e[2] = e[6]), (e[6] = t), (t = e[5]), (e[5] = e[7]), (e[7] = t), this;
                }
                getNormalMatrix(t) {
                    return this.setFromMatrix4(t).invert().transpose();
                }
                transposeIntoArray(t) {
                    const e = this.elements;
                    return (t[0] = e[0]), (t[1] = e[3]), (t[2] = e[6]), (t[3] = e[1]), (t[4] = e[4]), (t[5] = e[7]), (t[6] = e[2]), (t[7] = e[5]), (t[8] = e[8]), this;
                }
                setUvTransform(t, e, i, s, r, n, a) {
                    const o = Math.cos(r),
                        h = Math.sin(r);
                    return this.set(i * o, i * h, -i * (o * n + h * a) + n + t, -s * h, s * o, -s * (-h * n + o * a) + a + e, 0, 0, 1), this;
                }
                scale(t, e) {
                    const i = this.elements;
                    return (i[0] *= t), (i[3] *= t), (i[6] *= t), (i[1] *= e), (i[4] *= e), (i[7] *= e), this;
                }
                rotate(t) {
                    const e = Math.cos(t),
                        i = Math.sin(t),
                        s = this.elements,
                        r = s[0],
                        n = s[3],
                        a = s[6],
                        o = s[1],
                        h = s[4],
                        u = s[7];
                    return (s[0] = e * r + i * o), (s[3] = e * n + i * h), (s[6] = e * a + i * u), (s[1] = -i * r + e * o), (s[4] = -i * n + e * h), (s[7] = -i * a + e * u), this;
                }
                translate(t, e) {
                    const i = this.elements;
                    return (i[0] += t * i[2]), (i[3] += t * i[5]), (i[6] += t * i[8]), (i[1] += e * i[2]), (i[4] += e * i[5]), (i[7] += e * i[8]), this;
                }
                equals(t) {
                    const e = this.elements,
                        i = t.elements;
                    for (let t = 0; t < 9; t++) if (e[t] !== i[t]) return !1;
                    return !0;
                }
                fromArray(t, e = 0) {
                    for (let i = 0; i < 9; i++) this.elements[i] = t[i + e];
                    return this;
                }
                toArray(t = [], e = 0) {
                    const i = this.elements;
                    return (t[e] = i[0]), (t[e + 1] = i[1]), (t[e + 2] = i[2]), (t[e + 3] = i[3]), (t[e + 4] = i[4]), (t[e + 5] = i[5]), (t[e + 6] = i[6]), (t[e + 7] = i[7]), (t[e + 8] = i[8]), t;
                }
                clone() {
                    return new this.constructor().fromArray(this.elements);
                }
            }
            function p(t) {
                return t < 0.04045 ? 0.0773993808 * t : Math.pow(0.9478672986 * t + 0.0521327014, 2.4);
            }
            let y;
            class x {
                static getDataURL(t) {
                    if (/^data:/i.test(t.src)) return t.src;
                    if ("undefined" == typeof HTMLCanvasElement) return t.src;
                    let e;
                    if (t instanceof HTMLCanvasElement) e = t;
                    else {
                        void 0 === y && (y = o("canvas")), (y.width = t.width), (y.height = t.height);
                        const i = y.getContext("2d");
                        t instanceof ImageData ? i.putImageData(t, 0, 0) : i.drawImage(t, 0, 0, t.width, t.height), (e = y);
                    }
                    return e.width > 2048 || e.height > 2048 ? e.toDataURL("image/jpeg", 0.6) : e.toDataURL("image/png");
                }
                static sRGBToLinear(t) {
                    if (("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) || ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) || ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap)) {
                        const e = o("canvas");
                        (e.width = t.width), (e.height = t.height);
                        const i = e.getContext("2d");
                        i.drawImage(t, 0, 0, t.width, t.height);
                        const s = i.getImageData(0, 0, t.width, t.height),
                            r = s.data;
                        for (let t = 0; t < r.length; t++) r[t] = 255 * p(r[t] / 255);
                        return i.putImageData(s, 0, 0), e;
                    }
                    if (t.data) {
                        const e = t.data.slice(0);
                        for (let t = 0; t < e.length; t++) e instanceof Uint8Array || e instanceof Uint8ClampedArray ? (e[t] = Math.floor(255 * p(e[t] / 255))) : (e[t] = p(e[t]));
                        return { data: e, width: t.width, height: t.height };
                    }
                    return t;
                }
            }
            class g {
                constructor(t = null) {
                    (this.isSource = !0), (this.uuid = d()), (this.data = t), (this.version = 0);
                }
                set needsUpdate(t) {
                    !0 === t && this.version++;
                }
                toJSON(t) {
                    const e = void 0 === t || "string" == typeof t;
                    if (!e && void 0 !== t.images[this.uuid]) return t.images[this.uuid];
                    const i = { uuid: this.uuid, url: "" },
                        s = this.data;
                    if (null !== s) {
                        let t;
                        if (Array.isArray(s)) {
                            t = [];
                            for (let e = 0, i = s.length; e < i; e++) s[e].isDataTexture ? t.push(b(s[e].image)) : t.push(b(s[e]));
                        } else t = b(s);
                        i.url = t;
                    }
                    return e || (t.images[this.uuid] = i), i;
                }
            }
            function b(t) {
                return ("undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement) || ("undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) || ("undefined" != typeof ImageBitmap && t instanceof ImageBitmap) ? x.getDataURL(t) : t.data ? { data: Array.from(t.data), width: t.width, height: t.height, type: t.data.constructor.name } : {};
            }
            let v = 0;
            class w extends u {
                constructor(t = w.DEFAULT_IMAGE, e = w.DEFAULT_MAPPING, i = 1001, s = 1001, r = 1006, n = 1008, a = 1023, o = 1009, h = 1, u = 3e3) {
                    super(), (this.isTexture = !0), Object.defineProperty(this, "id", { value: v++ }), (this.uuid = d()), (this.name = ""), (this.source = new g(t)), (this.mipmaps = []), (this.mapping = e), (this.wrapS = i), (this.wrapT = s), (this.magFilter = r), (this.minFilter = n), (this.anisotropy = h), (this.format = a), (this.internalFormat = null), (this.type = o), (this.offset = new f(0, 0)), (this.repeat = new f(1, 1)), (this.center = new f(0, 0)), (this.rotation = 0), (this.matrixAutoUpdate = !0), (this.matrix = new m()), (this.generateMipmaps = !0), (this.premultiplyAlpha = !1), (this.flipY = !0), (this.unpackAlignment = 4), (this.encoding = u), (this.userData = {}), (this.version = 0), (this.onUpdate = null), (this.isRenderTargetTexture = !1), (this.needsPMREMUpdate = !1);
                }
                get image() {
                    return this.source.data;
                }
                set image(t) {
                    this.source.data = t;
                }
                updateMatrix() {
                    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
                }
                clone() {
                    return new this.constructor().copy(this);
                }
                copy(t) {
                    return (this.name = t.name), (this.source = t.source), (this.mipmaps = t.mipmaps.slice(0)), (this.mapping = t.mapping), (this.wrapS = t.wrapS), (this.wrapT = t.wrapT), (this.magFilter = t.magFilter), (this.minFilter = t.minFilter), (this.anisotropy = t.anisotropy), (this.format = t.format), (this.internalFormat = t.internalFormat), (this.type = t.type), this.offset.copy(t.offset), this.repeat.copy(t.repeat), this.center.copy(t.center), (this.rotation = t.rotation), (this.matrixAutoUpdate = t.matrixAutoUpdate), this.matrix.copy(t.matrix), (this.generateMipmaps = t.generateMipmaps), (this.premultiplyAlpha = t.premultiplyAlpha), (this.flipY = t.flipY), (this.unpackAlignment = t.unpackAlignment), (this.encoding = t.encoding), (this.userData = JSON.parse(JSON.stringify(t.userData))), (this.needsUpdate = !0), this;
                }
                toJSON(t) {
                    const e = void 0 === t || "string" == typeof t;
                    if (!e && void 0 !== t.textures[this.uuid]) return t.textures[this.uuid];
                    const i = { metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" }, uuid: this.uuid, name: this.name, image: this.source.toJSON(t).uuid, mapping: this.mapping, repeat: [this.repeat.x, this.repeat.y], offset: [this.offset.x, this.offset.y], center: [this.center.x, this.center.y], rotation: this.rotation, wrap: [this.wrapS, this.wrapT], format: this.format, type: this.type, encoding: this.encoding, minFilter: this.minFilter, magFilter: this.magFilter, anisotropy: this.anisotropy, flipY: this.flipY, premultiplyAlpha: this.premultiplyAlpha, unpackAlignment: this.unpackAlignment };
                    return "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData), e || (t.textures[this.uuid] = i), i;
                }
                dispose() {
                    this.dispatchEvent({ type: "dispose" });
                }
                transformUv(t) {
                    if (300 !== this.mapping) return t;
                    if ((t.applyMatrix3(this.matrix), t.x < 0 || t.x > 1))
                        switch (this.wrapS) {
                            case 1e3:
                                t.x = t.x - Math.floor(t.x);
                                break;
                            case l:
                                t.x = t.x < 0 ? 0 : 1;
                                break;
                            case 1002:
                                1 === Math.abs(Math.floor(t.x) % 2) ? (t.x = Math.ceil(t.x) - t.x) : (t.x = t.x - Math.floor(t.x));
                        }
                    if (t.y < 0 || t.y > 1)
                        switch (this.wrapT) {
                            case 1e3:
                                t.y = t.y - Math.floor(t.y);
                                break;
                            case l:
                                t.y = t.y < 0 ? 0 : 1;
                                break;
                            case 1002:
                                1 === Math.abs(Math.floor(t.y) % 2) ? (t.y = Math.ceil(t.y) - t.y) : (t.y = t.y - Math.floor(t.y));
                        }
                    return this.flipY && (t.y = 1 - t.y), t;
                }
                set needsUpdate(t) {
                    !0 === t && (this.version++, (this.source.needsUpdate = !0));
                }
            }
            (w.DEFAULT_IMAGE = null), (w.DEFAULT_MAPPING = 300);
            class M extends a {
                constructor(t) {
                    super(t);
                }
                load(t, e, i, s) {
                    const r = new w(),
                        n = new h(this.manager);
                    return (
                        n.setCrossOrigin(this.crossOrigin),
                        n.setPath(this.path),
                        n.load(
                            t,
                            function (t) {
                                (r.image = t), (r.needsUpdate = !0), void 0 !== e && e(r);
                            },
                            i,
                            s,
                        ),
                        r
                    );
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.Confetti-229eafb5.0260cdca.js.map
