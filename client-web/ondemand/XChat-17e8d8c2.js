"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-17e8d8c2"],
    {
        40226: (t, s, e) => {
            e.d(s, { BX: () => u });
            var r = e(182644),
                n = e(988069),
                a = e(975394),
                i = e(241359);
            const o = { current: void 0 };
            class h {
                constructor(t, s = {}) {
                    (this.version = "11.18.2"),
                        (this.canTrackVelocity = null),
                        (this.events = {}),
                        (this.updateAndNotify = (t, s = !0) => {
                            const e = r.X.now();
                            this.updatedAt !== e && this.setPrevFrameValue(), (this.prev = this.current), this.setCurrent(t), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
                        }),
                        (this.hasAnimated = !1),
                        this.setCurrent(t),
                        (this.owner = s.owner);
                }
                setCurrent(t) {
                    var s;
                    (this.current = t), (this.updatedAt = r.X.now()), null === this.canTrackVelocity && void 0 !== t && (this.canTrackVelocity = ((s = this.current), !isNaN(parseFloat(s))));
                }
                setPrevFrameValue(t = this.current) {
                    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
                }
                onChange(t) {
                    return this.on("change", t);
                }
                on(t, s) {
                    this.events[t] || (this.events[t] = new n.L());
                    const e = this.events[t].add(s);
                    return "change" === t
                        ? () => {
                              e(),
                                  i.Wi.read(() => {
                                      this.events.change.getSize() || this.stop();
                                  });
                          }
                        : e;
                }
                clearListeners() {
                    for (const t in this.events) this.events[t].clear();
                }
                attach(t, s) {
                    (this.passiveEffect = t), (this.stopPassiveEffect = s);
                }
                set(t, s = !0) {
                    s && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, s);
                }
                setWithVelocity(t, s, e) {
                    this.set(s), (this.prev = void 0), (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt - e);
                }
                jump(t, s = !0) {
                    this.updateAndNotify(t), (this.prev = t), (this.prevUpdatedAt = this.prevFrameValue = void 0), s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
                get() {
                    return o.current && o.current.push(this), this.current;
                }
                getPrevious() {
                    return this.prev;
                }
                getVelocity() {
                    const t = r.X.now();
                    if (!this.canTrackVelocity || void 0 === this.prevFrameValue || t - this.updatedAt > 30) return 0;
                    const s = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                    return (0, a.R)(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
                }
                start(t) {
                    return (
                        this.stop(),
                        new Promise((s) => {
                            (this.hasAnimated = !0), (this.animation = t(s)), this.events.animationStart && this.events.animationStart.notify();
                        }).then(() => {
                            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
                        })
                    );
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
                }
                isAnimating() {
                    return !!this.animation;
                }
                clearAnimation() {
                    delete this.animation;
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
                }
            }
            function u(t, s) {
                return new h(t, s);
            }
        },
        192395: (t, s, e) => {
            e.d(s, { $: () => n });
            var r = e(656572);
            const n = {
                test: (0, e(348799).i)("#"),
                parse: function (t) {
                    let s = "",
                        e = "",
                        r = "",
                        n = "";
                    return t.length > 5 ? ((s = t.substring(1, 3)), (e = t.substring(3, 5)), (r = t.substring(5, 7)), (n = t.substring(7, 9))) : ((s = t.substring(1, 2)), (e = t.substring(2, 3)), (r = t.substring(3, 4)), (n = t.substring(4, 5)), (s += s), (e += e), (r += r), (n += n)), { red: parseInt(s, 16), green: parseInt(e, 16), blue: parseInt(r, 16), alpha: n ? parseInt(n, 16) / 255 : 1 };
                },
                transform: r.m.transform,
            };
        },
        586845: (t, s, e) => {
            e.d(s, { J: () => o });
            var r = e(230397),
                n = e(288772),
                a = e(645978),
                i = e(348799);
            const o = { test: (0, i.i)("hsl", "hue"), parse: (0, i.d)("hue", "saturation", "lightness"), transform: ({ hue: t, saturation: s, lightness: e, alpha: i = 1 }) => "hsla(" + Math.round(t) + ", " + n.aQ.transform((0, a.N)(s)) + ", " + n.aQ.transform((0, a.N)(e)) + ", " + (0, a.N)(r.Fq.transform(i)) + ")" };
        },
        345982: (t, s, e) => {
            e.d(s, { $: () => i });
            var r = e(192395),
                n = e(586845),
                a = e(656572);
            const i = { test: (t) => a.m.test(t) || r.$.test(t) || n.J.test(t), parse: (t) => (a.m.test(t) ? a.m.parse(t) : n.J.test(t) ? n.J.parse(t) : r.$.parse(t)), transform: (t) => ("string" == typeof t ? t : t.hasOwnProperty("red") ? a.m.transform(t) : n.J.transform(t)) };
        },
        656572: (t, s, e) => {
            e.d(s, { m: () => h });
            var r = e(51366),
                n = e(230397),
                a = e(645978),
                i = e(348799);
            const o = { ...n.Rx, transform: (t) => Math.round(((t) => (0, r.u)(0, 255, t))(t)) },
                h = { test: (0, i.i)("rgb", "red"), parse: (0, i.d)("red", "green", "blue"), transform: ({ red: t, green: s, blue: e, alpha: r = 1 }) => "rgba(" + o.transform(t) + ", " + o.transform(s) + ", " + o.transform(e) + ", " + (0, a.N)(n.Fq.transform(r)) + ")" };
        },
        348799: (t, s, e) => {
            e.d(s, { i: () => a, d: () => i });
            var r = e(640953);
            const n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
                a = (t, s) => (e) =>
                    Boolean(
                        ("string" == typeof e && n.test(e) && e.startsWith(t)) ||
                            (s &&
                                !(function (t) {
                                    return null == t;
                                })(e) &&
                                Object.prototype.hasOwnProperty.call(e, s)),
                    ),
                i = (t, s, e) => (n) => {
                    if ("string" != typeof n) return n;
                    const [a, i, o, h] = n.match(r.K);
                    return { [t]: parseFloat(a), [s]: parseFloat(i), [e]: parseFloat(o), alpha: void 0 !== h ? parseFloat(h) : 1 };
                };
        },
        973764: (t, s, e) => {
            e.d(s, { h: () => h });
            var r = e(506746),
                n = e(640953);
            const a = new Set(["brightness", "contrast", "saturate", "opacity"]);
            function i(t) {
                const [s, e] = t.slice(0, -1).split("(");
                if ("drop-shadow" === s) return t;
                const [r] = e.match(n.K) || [];
                if (!r) return t;
                const i = e.replace(r, "");
                let o = a.has(s) ? 1 : 0;
                return r !== e && (o *= 100), s + "(" + o + i + ")";
            }
            const o = /\b([a-z-]*)\(.*?\)/gu,
                h = {
                    ...r.P,
                    getAnimatableNone: (t) => {
                        const s = t.match(o);
                        return s ? s.map(i).join(" ") : t;
                    },
                };
        },
        506746: (t, s, e) => {
            e.d(s, { V: () => l, P: () => g });
            var r = e(345982);
            const n = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
            var a = e(640953),
                i = e(645978);
            const o = "number",
                h = "color",
                u = "var",
                p = "var(",
                c = "${}",
                d = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
            function l(t) {
                const s = t.toString(),
                    e = [],
                    n = { color: [], number: [], var: [] },
                    a = [];
                let i = 0;
                const l = s.replace(d, (t) => (r.$.test(t) ? (n.color.push(i), a.push(h), e.push(r.$.parse(t))) : t.startsWith(p) ? (n.var.push(i), a.push(u), e.push(t)) : (n.number.push(i), a.push(o), e.push(parseFloat(t))), ++i, c)).split(c);
                return { values: e, split: l, indexes: n, types: a };
            }
            function v(t) {
                return l(t).values;
            }
            function f(t) {
                const { split: s, types: e } = l(t),
                    n = s.length;
                return (t) => {
                    let a = "";
                    for (let u = 0; u < n; u++)
                        if (((a += s[u]), void 0 !== t[u])) {
                            const s = e[u];
                            a += s === o ? (0, i.N)(t[u]) : s === h ? r.$.transform(t[u]) : t[u];
                        }
                    return a;
                };
            }
            const m = (t) => ("number" == typeof t ? 0 : t);
            const g = {
                test: function (t) {
                    var s, e;
                    return isNaN(t) && "string" == typeof t && ((null === (s = t.match(a.K)) || void 0 === s ? void 0 : s.length) || 0) + ((null === (e = t.match(n)) || void 0 === e ? void 0 : e.length) || 0) > 0;
                },
                parse: v,
                createTransformer: f,
                getAnimatableNone: function (t) {
                    const s = v(t);
                    return f(t)(s.map(m));
                },
            };
        },
        230397: (t, s, e) => {
            e.d(s, { Fq: () => a, Rx: () => n, bA: () => i });
            var r = e(51366);
            const n = { test: (t) => "number" == typeof t, parse: parseFloat, transform: (t) => t },
                a = { ...n, transform: (t) => (0, r.u)(0, 1, t) },
                i = { ...n, default: 1 };
        },
        288772: (t, s, e) => {
            e.d(s, { $C: () => u, RW: () => n, aQ: () => a, px: () => i, vh: () => o, vw: () => h });
            const r = (t) => ({ test: (s) => "string" == typeof s && s.endsWith(t) && 1 === s.split(" ").length, parse: parseFloat, transform: (s) => `${s}${t}` }),
                n = r("deg"),
                a = r("%"),
                i = r("px"),
                o = r("vh"),
                h = r("vw"),
                u = { ...a, parse: (t) => a.parse(t) / 100, transform: (t) => a.transform(100 * t) };
        },
        640953: (t, s, e) => {
            e.d(s, { K: () => r });
            const r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
        },
        645978: (t, s, e) => {
            e.d(s, { N: () => r });
            const r = (t) => Math.round(1e5 * t) / 1e5;
        },
        904969: (t, s, e) => {
            e.d(s, { K: () => n });
            var r = e(315815);
            function n(t, s) {
                const e = t.getValue("willChange");
                if (((n = e), Boolean((0, r.i)(n) && n.add))) return e.add(s);
                var n;
            }
        },
        315815: (t, s, e) => {
            e.d(s, { i: () => r });
            const r = (t) => Boolean(t && t.getVelocity);
        },
        669535: (t, s, e) => {
            e.d(s, { b: () => a });
            var r = e(213809),
                n = e(315815);
            function a(t) {
                const s = (0, n.i)(t) ? t.get() : t;
                return (0, r.p)(s) ? s.toValue() : s;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-17e8d8c2.6047c2ca.js.map
