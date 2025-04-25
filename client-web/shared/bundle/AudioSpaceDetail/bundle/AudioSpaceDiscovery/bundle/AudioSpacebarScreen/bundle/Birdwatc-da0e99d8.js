"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"],
    {
        109195: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(552322),
                s = r(202784),
                i = r(122883),
                a = r(608222),
                o = r(907490),
                u = r(705156);
            const c = (0, s.createContext)({}),
                l = (e, t) => ({ action: e, ...t });
            function f({ el: e }) {
                const t = (0, a.o)(),
                    r = t?.Analytics;
                if (!t || !t.Runtime) return (0, n.jsx)("div", { children: "Runtime not found" });
                const f = t.Runtime,
                    p = (0, s.useContext)(c) || {},
                    d = f.getComponentOverride(),
                    b = 24045 === e.type || -22153 === e.type ? (0, u.O)(e) : (d[e.type] ?? (0, u.O)(e)),
                    [v, h] = (0, s.useState)(0),
                    [m, y] = (0, s.useState)(!1),
                    w = (0, s.useRef)(null),
                    g = (0, s.useMemo)(() => (0, i.tJ)(e, v), [e, v]),
                    k = (0, s.useCallback)(() => {
                        h((e) => e + 1);
                    }, []);
                (0, s.useEffect)(() => {
                    const e = g.subscribe(k);
                    return () => {
                        "function" == typeof e && e();
                    };
                }, [g, k]);
                const S = (g.strDict ? g.strDict("scribe:context") : null) || {},
                    j = !!g.bool && (g.bool("scribe:appear") ?? g.bool("scribe:visibility") ?? !1),
                    O = !!g.bool && (g.bool("scribe:linger") ?? !1);
                (0, s.useEffect)(() => {
                    if ("undefined" != typeof IntersectionObserver && O && w.current) {
                        let e = -1;
                        const t = new IntersectionObserver(
                            (r) => {
                                const n = r[0]?.isIntersecting;
                                n && -1 === e ? (e = Date.now()) : !n && w.current && -1 !== e && (Date.now() - e > 2e3 ? (f.addToScribeQueue && f.addToScribeQueue(p), y(!0)) : (e = -1)), !n && m && w.current && t.unobserve(w.current);
                            },
                            { threshold: 0.5 },
                        );
                        return (
                            t.observe(w.current),
                            () => {
                                w.current && t.unobserve(w.current);
                            }
                        );
                    }
                    return () => {};
                }, [O, m, p, f]);
                const Q = S ? { ...p, ...S } : p;
                j && r.scribe(l("show", Q));
                const C = g
                    .mods()
                    .map((e) => {
                        const [t, ...r] = e;
                        return void 0 !== t && (0, o.r)(t, r), r.map((e) => `j${e.toString(36)}${t}`).join(" ");
                    })
                    .join(" ");
                return (0, n.jsx)(c.Provider, { value: Q, children: (0, n.jsx)(b, { el: e, p: g, mods: C }) });
            }
        },
        498348: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(552322),
                s = r(373461),
                i = r(608222),
                a = r(202784);
            function o({ r: e, jfPath: t, analytics: r }) {
                const o = (0, a.useRef)();
                e.scribeQueue || (e.scribeQueue = []),
                    e.getScribeQueue || (e.getScribeQueue = () => e.scribeQueue || []),
                    e.clearScribeQueue ||
                        (e.clearScribeQueue = () => {
                            e.scribeQueue && (e.scribeQueue.length = 0);
                        }),
                    e.addToScribeQueue ||
                        (e.addToScribeQueue = (t) => {
                            e.scribeQueue && e.scribeQueue.push(t);
                        });
                const u = (0, a.useCallback)(() => {
                    try {
                        if (0 !== e.getScribeQueue?.().length) {
                            const t = e.getScribeQueue?.();
                            r?.scribe && t?.length && (r.scribe({ action: "linger" }, { items: JSON.stringify(t) }), e.clearScribeQueue?.());
                        }
                        o.current = setTimeout(() => {
                            u();
                        }, 1e3);
                    } catch (e) {}
                }, [e, r]);
                return (
                    (0, a.useEffect)(() => {
                        try {
                            u();
                        } catch (e) {}
                        return () => {
                            o.current && clearTimeout(o.current);
                        };
                    }, [u]),
                    (0, n.jsx)(i.N, { runtime: e, analytics: r, children: (0, n.jsx)(s.Z, { url: t }) })
                );
            }
        },
        122883: (e, t, r) => {
            function n(e) {
                let t = new DataView(e),
                    r = 0,
                    n = () => t.getUint8(r++),
                    s = () => {
                        let e,
                            t = 0,
                            r = 0;
                        do {
                            (e = n()), (t += r < 28 ? (127 & e) << r : (127 & e) * 2 ** r), (r += 7);
                        } while (128 & e);
                        return t;
                    };
                return {
                    u8: n,
                    i16: () => {
                        let e = t.getInt16(r, !0);
                        return (r += 2), e;
                    },
                    i32: () => {
                        let e = t.getInt32(r, !0);
                        return (r += 4), e;
                    },
                    i64: () => {
                        let e = t.getBigInt64(r, !0);
                        return (r += 8), e;
                    },
                    f64: () => {
                        let e = t.getFloat64(r, !0);
                        return (r += 8), e;
                    },
                    str: () => {
                        let e = s(),
                            n = new TextDecoder().decode(t.buffer.slice(r, r + e));
                        return (r += e), n;
                    },
                    bool: () => !!n(),
                    uint: s,
                };
            }
            r.d(t, { $3: () => p, GZ: () => m, KM: () => E, qB: () => d, tJ: () => O, vz: () => A });
            var s,
                i,
                a,
                o,
                u = (e, t = void 0, r = (() => crypto.getRandomValues(new BigUint64Array(1))[0])()) => {
                    let n = new EventTarget(),
                        s = e,
                        i = t;
                    return {
                        id: r,
                        get value() {
                            return s;
                        },
                        set: (e, t = Number(Date.now())) => {
                            (i && t < i) || ((s = e), (i = t), n.dispatchEvent(new Event("set")));
                        },
                        subscribe: (e) => {
                            let t = () => e(s);
                            return n.addEventListener("set", t), () => n.removeEventListener("set", t);
                        },
                    };
                },
                c = (e, t) => {
                    if (17 !== e.value?.[0]) throw new Error("Not a dict");
                    let r = () => {
                        let r = e.value?.[1]?.get(t);
                        return void 0 === r ? void 0 : [0, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || 0 !== r[0]) return;
                            let n = new Map(e.value?.[1]);
                            n.set(t, r[1]), e.set([17, n]);
                        },
                    };
                },
                l = (e, t) => {
                    if (11 !== e.value?.[0]) throw new Error("Not a url");
                    let r = () => {
                        let r = new URLSearchParams(e.value?.[1]).get(t);
                        return null === r ? void 0 : [0, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || 0 !== r[0]) return;
                            let n = new URL(e.value?.[1]);
                            n.searchParams.set(t, r[1]), e.set([11, n.toString()]);
                        },
                    };
                },
                f = (e) => {
                    let [t, r] = e;
                    switch (t) {
                        case 0:
                        case 4:
                            return r.id.toString();
                        case 2:
                        case 3:
                        case 1:
                            return `${r.id}:${r.key}`;
                    }
                },
                p = (e) => (d(e) << 16) >> 16,
                d = (e) => 0 | v(b(e)),
                b = (e) => new TextEncoder().encode(e),
                v =
                    ((s = (e, t) => (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16)),
                    (i = (e, t) => (e << t) | (e >>> (32 - t))),
                    (a = 3432918353),
                    (o = 461845907),
                    (e, t = 0) => {
                        t = t || 0;
                        for (var r = (e = e || "").length, n = r % 4, u = r - n, c = t, l = 0, f = 0; f < u; f += 4) (l = (255 & e[f]) | ((255 & e[f + 1]) << 8) | ((255 & e[f + 2]) << 16) | ((255 & e[f + 3]) << 24)), (l = s(l, a)), (l = i(l, 15)), (l = s(l, o)), (c = i((c ^= l), 13)), (c = s(c, 5) + 3864292196);
                        switch (((l = 0), n)) {
                            case 3:
                                l ^= (255 & e[f + 2]) << 16;
                            case 2:
                                l ^= (255 & e[f + 1]) << 8;
                            case 1:
                                (l ^= 255 & e[f]), (l = s(l, a)), (l = i(l, 15)), (c ^= l = s(l, o));
                        }
                        return (c = ((e) => ((e = s((e ^= e >>> 16), 2246822507)), (e = s((e ^= e >>> 13), 3266489909)) ^ (e >>> 16)))((c ^= r))), c >>> 0;
                    }),
                h = (e) => {
                    let t = new Map(),
                        r = (new Map(), []),
                        n = [],
                        s = {},
                        i = (e, r, n) => {
                            let [s, i] = e;
                            switch (s) {
                                case 0:
                                case 4: {
                                    let e = u(r, n, i.id);
                                    return t.set(i.id, e), e;
                                }
                                case 2: {
                                    let e = u([17, new Map()], n, i.id);
                                    return t.set(i.id, e), c(e, i.key);
                                }
                                case 3: {
                                    let e = u([11, ""], n, i.id);
                                    return t.set(i.id, e), l(e, i.key);
                                }
                                case 1: {
                                    let e = u([16, new Map()], n, i.id);
                                    return t.set(i.id, e), e;
                                }
                            }
                        },
                        a = (e) => {
                            let [r, n] = e,
                                s = t.get(n.id);
                            if (s)
                                switch (r) {
                                    case 0:
                                    case 4:
                                        return s;
                                    case 2:
                                        return c(s, n.key);
                                    case 3:
                                        return l(s, n.key);
                                    case 1:
                                        return;
                                }
                        };
                    return {
                        id: e,
                        atoms: {
                            getOrCreate: (e, t, r, n) => {
                                let s = a(e);
                                return s ? (!n || (void 0 === s.value && null === s.value) ? (s.set(t, r), s) : s) : i(e, t, r);
                            },
                            get: a,
                        },
                        net: { httpPOST: async (e, t) => ({ ok: (await fetch(e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(t.entries())) })).ok, data: void 0 }), httpGet: async (e) => ({ ok: (await fetch(e, { method: "GET", headers: { "Content-Type": "application/json" } })).ok, data: void 0 }) },
                        hooks: void 0,
                        analytics: void 0,
                        history: {
                            push(e) {
                                location.href = e;
                            },
                            replace(e) {
                                location.href = e;
                            },
                            goBack({ backLocation: e } = {}) {
                                e ? (location.href = e) : history.back();
                            },
                        },
                        ui: void 0,
                        scribeQueue: r,
                        addToScribeQueue: (e) => {
                            r.push(e);
                        },
                        getScribeQueue: () => r,
                        clearScribeQueue: () => {
                            r.length = 0;
                        },
                        addCover: (e) => {
                            n.push(e);
                        },
                        removeCover: () => {
                            if (n.length <= 0) return !1;
                            let e = n.pop();
                            return e && e.close(), !0;
                        },
                        addComponentOverride: (e) => {
                            let t = {};
                            for (let [r, n] of Object.entries(e)) {
                                t[p(r)] = n;
                            }
                            Object.assign(s, t);
                        },
                        getComponentOverride: () => s,
                    };
                };
            function m(e, t = {}) {
                return y(h(e), t);
            }
            var y = (e, t) => Object.entries(t).reduce((e, [t, r]) => ({ ...e, [t]: r && "object" == typeof r ? y(e[t], r) : (r ?? e[t]) }), { ...e });
            function w(e, t) {
                return t.atom(e)?.value;
            }
            var g = (e, t) => {
                if (e === t) return !0;
                if (null == e || null == t) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, r) => g(e, t[r]));
                if ("object" == typeof e && "object" == typeof t) {
                    let r = Object.keys(e);
                    return r.length === Object.keys(t).length && r.every((r) => g(e[r], t[r]));
                }
                return !1;
            };
            function k(e, t) {
                let [r, n] = e;
                switch (r) {
                    case 0: {
                        let { ref: e } = n;
                        return void 0 === w(e, t);
                    }
                    case 1: {
                        let { ref: e, value: r } = n;
                        return g(w(e, t), t.prop(r));
                    }
                    case 2: {
                        let { ref: e, value: r } = n;
                        return !g(w(e, t), t.prop(r));
                    }
                    case 3: {
                        let { ref: e, value: r } = n,
                            s = w(e, t);
                        return r.some((e) => g(s, t.prop(e)));
                    }
                    case 4: {
                        let { ref: e, value: r } = n,
                            s = w(e, t);
                        return r.every((e) => !g(s, t.prop(e)));
                    }
                    case 5:
                        return j(n.ref, t, (e) => e > Number(Q(t.prop(n.value), t)));
                    case 6:
                        return j(n.ref, t, (e) => e >= Number(Q(t.prop(n.value), t)));
                    case 7:
                        return j(n.ref, t, (e) => e < Number(Q(t.prop(n.value), t)));
                    case 8:
                        return j(n.ref, t, (e) => e <= Number(Q(t.prop(n.value), t)));
                    case 9:
                        return S(n.ref, t, (e) => e.startsWith(n.value));
                    case 10:
                        return S(n.ref, t, (e) => e.endsWith(n.value));
                    case 11:
                        return S(n.ref, t, (e) => e.includes(n.value));
                    case 12:
                        return n.every((e) => k(e, t));
                    case 13:
                        return n.some((e) => k(e, t));
                    case 14:
                        return !k(n, t);
                    case 15: {
                        let { ref: e } = n;
                        return void 0 !== w(e, t);
                    }
                }
            }
            var S = (e, t, r) => {
                    let n = w(e, t)?.[1];
                    return "string" == typeof n && r(n);
                },
                j = (e, t, r) => {
                    let n = w(e, t)?.[1];
                    return "number" == typeof n && r(n);
                },
                O = (e, t = 0, r) => {
                    let n = (t) => {
                            let n = e.props.get(p(t)),
                                s = e.dom.prop(n);
                            return Q(s, e.dom, r);
                        },
                        s = (t, r) => {
                            let n = e.props.get(p(t)),
                                s = e.dom.prop(n);
                            18 === s?.[0] && e.dom.atom(s[1].ref)?.set(r);
                        };
                    return {
                        str: (e) => n(e),
                        setStr: (e, t) => s(e, [0, t]),
                        int: (e) => n(e),
                        setInt: (e, t) => s(e, [1, t]),
                        f32: (e) => n(e),
                        setF32: (e, t) => s(e, [5, t]),
                        bool: (e) => n(e),
                        setBool: (e, t) => s(e, [6, t]),
                        richtext: (e) => n(e),
                        url: (e) => n(e),
                        date: (e) => n(e),
                        element: (e) => n(e),
                        elements: (e) => n(e),
                        id: (e) => n(e),
                        enum: (e) => n(e),
                        rawEnum: (e) => n(e),
                        strDict: (e) => n(e),
                        setStrDict: (e, t) => s(e, [17, new Map(Object.entries(t))]),
                        action: (e) => n(e),
                        mods: () => n("mod") ?? [],
                        strList: (e) => n(e),
                        setStrLit: (e, t) => s(e, [26, t]),
                        intList: (e) => n(e),
                        setIntLit: (e, t) => s(e, [27, t]),
                        f32List: (e) => n(e),
                        setF32Lit: (e, t) => s(e, [28, t]),
                        boolList: (e) => n(e),
                        setBoolLit: (e, t) => s(e, [29, t]),
                        subscribe: (t) => {
                            let r = Array.from(e.props.values());
                            return ((e, t) => {
                                let r = e.map((r) => r.subscribe(() => t(e.map((e) => e.value))));
                                return () => r.forEach((e) => e());
                            })(e.dom.allAtoms(r), t);
                        },
                        set: s,
                    };
                },
                Q = (e, t, r) => {
                    if (null == e) return;
                    let [n, s] = e;
                    switch (n) {
                        case 7:
                            return t.el(s);
                        case 8:
                            return s.map((e) => t.el(e));
                        case 18:
                            return Q(t.atom(s.ref)?.value, t);
                        case 14:
                            return new Date(1e3 * Number(s));
                        case 19:
                            return () => t.runAction(s, r);
                        case 17:
                            return Object.fromEntries(s.entries());
                        case 22:
                            return k(s, t);
                        case 25:
                        case 12:
                            return s;
                    }
                    return s;
                };
            function C(e, t, r) {
                let [n, s] = e;
                switch (n) {
                    case 0:
                        !(function (e, t) {
                            let [r, n] = e,
                                s = Number(new Date()),
                                i = (e) => t.atom(e),
                                a = (e, t) => {
                                    let r = i(e);
                                    r && void 0 !== r.value && !1 !== t(r.value) && r.set(t(r.value), s);
                                },
                                o = (e) => t.prop(e);
                            switch (r) {
                                case 0:
                                    i(n)?.set(void 0, s);
                                    break;
                                case 1: {
                                    let [e, r] = n;
                                    t.runtime.atoms.getOrCreate(e, o(r), s, !1);
                                    break;
                                }
                                case 2: {
                                    let [e, t] = n;
                                    a(e, (e) => (1 === e[0] || 5 === e[0]) && [e[0], e[1] + t]);
                                    break;
                                }
                                case 3: {
                                    let [e, t] = n;
                                    a(e, (e) => 0 === e[0] && [e[0], e[1] + t]);
                                    break;
                                }
                                case 6: {
                                    let [e, t] = n;
                                    a(e, (e) => 6 === e[0] && [e[0], !e[1]]);
                                    break;
                                }
                            }
                        })(s, t);
                        break;
                    case 2:
                        s.forEach((e) => C(e, t, r));
                        break;
                    case 3:
                        {
                            let { url: e, body: n, complete: i, error: a, optimistic: o } = s,
                                u = Q(t.prop(e), t),
                                c = Q(t.prop(n), t),
                                l = new Map(Object.entries(c ?? {}));
                            u &&
                                c &&
                                (o && C(o, t, r),
                                t.runtime.net.httpPOST(u, l).then((e) => {
                                    e.ok ? i && C(i, t, r) : a && C(a, t, r);
                                }));
                        }
                        break;
                    case 6:
                        {
                            let [e, r] = s;
                            switch (e) {
                                case 0: {
                                    let { url: e, preview: n, replace: s } = r,
                                        i = "/i/jf" + Q(t.prop(e), t);
                                    i && (s ? t.runtime.history.replace(i) : t.runtime.history.push(i));
                                    break;
                                }
                                case 9: {
                                    let { url: e, preview: n, replace: s } = r,
                                        i = "/i/jf" + Q(t.prop(e), t);
                                    i && (s ? location.replace(i) : (location.href = i));
                                    break;
                                }
                                case 1: {
                                    let { url: e, preview: n, replace: s } = r,
                                        i = "/i/jf" + Q(t.prop(e), t);
                                    i && (s ? t.runtime.history.replace(i) : t.runtime.history.push(i));
                                    break;
                                }
                                case 3:
                                    t.runtime.history.goBack();
                                    break;
                                case 2: {
                                    let e = document.activeElement;
                                    e && e.blur(), t.runtime.removeCover() || t.runtime.history.goBack();
                                    break;
                                }
                                case 8: {
                                    let { url: e } = r,
                                        n = Q(t.prop(e), t);
                                    n && t.runtime.history.push(n);
                                    break;
                                }
                                case 4:
                                    t.runtime.history.goBack({ backLocation: "/" });
                                    break;
                                case 6:
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                    break;
                                case 5:
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }
                        break;
                    case 7:
                        window.location.reload();
                        break;
                    case 11:
                        {
                            let { type: e, ref: n } = s,
                                i = Q(t.prop(n), t);
                            r?.[e](i);
                        }
                        break;
                    case 1:
                    case 8:
                    case 9:
                    case 10:
                    case 4:
                    case 13:
                        break;
                    case 5: {
                        let { ref: e, type: r } = s,
                            n = Q(t.prop(e), t);
                        if (null == n) return;
                        if (2 === r) t.runtime.ui?.toast(n);
                        break;
                    }
                }
            }
            function A(e) {
                let t = {},
                    r = {},
                    s = new Map(),
                    i = u(void 0),
                    a = (e, t) => {
                        let r = [],
                            n = (e) => {
                                let [t, s] = e;
                                switch (t) {
                                    case 13:
                                    case 12:
                                        s.forEach(n);
                                        break;
                                    case 14:
                                        n(s);
                                        break;
                                    default:
                                        r.push(s.ref);
                                }
                            },
                            [i, a] = t;
                        switch (i) {
                            case 18:
                                r.push(a.ref);
                                break;
                            case 22:
                                n(a);
                        }
                        r.length && s.set(e, r);
                    };
                function o(n, s, i) {
                    for (let e in n) {
                        let r = n[e];
                        (r.dom = d), (t[e] = r);
                    }
                    r = { ...r, ...s };
                    let o = {},
                        u = {};
                    for (let e in s) {
                        let [t, r] = s[e];
                        if ((a(Number(e), s[e]), 18 !== t)) continue;
                        let n = s[r.prop_ref];
                        if (0 !== r.ref[0]) {
                            let e = s[r.ref[1].root],
                                [t, n] = e;
                            if (18 !== t) continue;
                            u[f(n.ref)] = [n.ref, s[n.prop_ref], n.is_default];
                        }
                        o[f(r.ref)] = [r.ref, n, r.is_default];
                    }
                    for (let e in u) delete o[e];
                    for (let [t, [r, n, s]] of Object.entries(u).concat(Object.entries(o))) e.atoms.getOrCreate(r, n, i, s);
                }
                function c(e) {
                    i.set(t[e]);
                }
                function l(t) {
                    return e.atoms.get(t);
                }
                let p = {
                        session: function () {
                            let e = (function () {
                                    let e = (e) => e.uint(),
                                        t = (e) => e.u8(),
                                        r = (e) => e.bool(),
                                        n = (e, t) => (r) => [e(r), t(r)],
                                        s = (t) => (r) =>
                                            Array(e(r))
                                                .fill(0)
                                                .map(() => t(r)),
                                        i = (function (e) {
                                            let [t, r, n, s, i, a, o, u, c, l, f, p, d, b, v, h, m] = e,
                                                y = n,
                                                w = c,
                                                g = t({ type: o, props: s(o, y), children: i(y), id: a(w), extend: a(y) }),
                                                k = b({ 0: p(0, t({ id: w })), 4: p(4, t({ id: w, root: y })), 1: p(1, t({ id: w, key: o, root: y })), 2: p(2, t({ id: w, key: d, root: y })), 3: p(3, t({ id: w, key: d, root: y })) }),
                                                S = t({ ref: k, prop_ref: y, is_default: f }),
                                                j = b({ 0: p(0, k), 1: p(1, v(k, y)), 2: p(2, v(k, o)), 3: p(3, v(k, d)), 4: p(4, h(k, y, a(o))), 5: p(5, v(k, y)), 6: p(6, v(k, a(v(y, y)))), 7: p(7, v(k, y)), 8: p(8, v(k, y)) }),
                                                O = b({ 0: p(0, t({ url: y, preview: a(y), replace: f })), 9: p(9, t({ url: y, preview: a(y), replace: f })), 1: p(1, t({ url: y, body: a(y), preview: a(y), replace: f })), 2: m([2]), 8: p(8, t({ url: y })), 3: m([3]), 4: m([4]), 5: m([5]), 6: m([6]), 7: p(7, t({ id: y })) }),
                                                Q = b((e) => ({ 0: p(0, j), 1: p(1, t({ ref: y, action: e, cancel: a(e) })), 2: p(2, i(e)), 3: p(3, t({ url: y, body: y, complete: a(e), error: a(e), optimistic: a(e) })), 4: p(4, t({ action: e, intensity: o })), 5: p(5, t({ ref: y, type: r })), 6: p(6, O), 7: p(7, t({ type: r, id: a(w) })), 8: p(8, d), 9: p(9, t({ urls: i(d), priority: r })), 10: p(10, y), 11: p(11, t({ type: r, ref: y })), 12: p(12, t({ action: e, delaySeconds: o })), 13: p(13, t({ data: d, secret: d, knownDeviceToken: d })) })),
                                                C = b((e) => ({ 0: p(0, t({ ref: k })), 15: p(15, t({ ref: k })), 1: p(1, t({ ref: k, value: y })), 2: p(2, t({ ref: k, value: y })), 3: p(3, t({ ref: k, value: i(y) })), 4: p(4, t({ ref: k, value: i(y) })), 5: p(5, t({ ref: k, value: y })), 6: p(6, t({ ref: k, value: y })), 7: p(7, t({ ref: k, value: y })), 8: p(8, t({ ref: k, value: y })), 9: p(9, t({ ref: k, value: d })), 10: p(10, t({ ref: k, value: d })), 11: p(11, t({ ref: k, value: d })), 12: p(12, v(e, e)), 13: p(13, v(e, e)), 14: p(14, e) })),
                                                A = i(i(u)),
                                                E = i(h(r, d, a(d))),
                                                T = b({ 0: p(0, d), 1: p(1, u), 3: p(3, A), 25: p(25, i(v(A, C))), 4: p(4, w), 5: p(5, l), 6: p(6, f), 7: p(7, y), 8: p(8, i(y)), 10: p(10, n), 11: p(11, d), 12: p(12, E), 14: p(14, c), 15: p(15, y), 16: p(16, s(o, y)), 17: p(17, s(d, d)), 18: p(18, S), 19: p(19, Q), 21: p(21, i(y)), 22: p(22, C), 24: p(24, i(y)), 26: p(26, i(d)), 27: p(27, i(u)), 28: p(28, i(l)), 29: p(29, i(f)), 13: p(13, m(void 0)) }),
                                                x = t({ els: i(g), props: i(T), ts: u }),
                                                D = t({ ref: y, t: a(u) });
                                            return b({ 0: p(0, x), 1: p(1, D), 2: p(2, Q) });
                                        })([
                                            (e) => (t) => {
                                                let r = {};
                                                for (let n in e) r[n] = e[n](t);
                                                return r;
                                            },
                                            t,
                                            e,
                                            (e, t) => (r) => new Map(s(n(e, t))(r)),
                                            s,
                                            (e) => (t) => (r(t) ? e(t) : null),
                                            (e) => e.i16(),
                                            (e) => e.i32(),
                                            (e) => e.i64(),
                                            (e) => e.f64(),
                                            r,
                                            (e, t) => (r) => [e, t(r)],
                                            (e) => e.str(),
                                            (e) => {
                                                let r = {},
                                                    n = (e) => r[t(e)](e);
                                                return Object.assign(r, "function" == typeof e ? e(n) : e), n;
                                            },
                                            n,
                                            (e, t, r) => (n) => [e(n), t(n), r(n)],
                                            (e) => (t) => e,
                                        ]);
                                    return { decodeMessage: (e) => i(e) };
                                })(),
                                t = new Uint8Array(0),
                                r = (e) => {
                                    let [t, r] = e;
                                    switch (t) {
                                        case 0:
                                            o(r.els, r.props, r.ts);
                                            break;
                                        case 1:
                                            c(r.ref);
                                    }
                                };
                            return {
                                onChunk: (s) => {
                                    for (t = new Uint8Array([...t, ...s]); t.length > 4; ) {
                                        let s = new DataView(t.buffer).getUint32(0, !0);
                                        if (t.length < s + 4) break;
                                        let i = t.slice(4, 4 + s);
                                        (t = t.slice(4 + s)), performance.now(), r(e.decodeMessage(n(i.buffer)));
                                    }
                                },
                            };
                        },
                    },
                    d = {
                        runtime: e,
                        get root() {
                            return i;
                        },
                        el: (e) => t[e],
                        prop: (e) => (void 0 !== e ? r[e] : void 0),
                        atom: l,
                        allAtoms: (e) =>
                            Array.from(new Set(e.flatMap((e) => s.get(e))))
                                .filter((e) => e)
                                .map((e) => l(e)),
                        runAction: (e, t) => C(e, d, t),
                        ingest: o,
                        ready: c,
                        session: () => p.session(),
                    };
                return d;
            }
            function E(e, t) {
                let r = A(e);
                return r.session().onChunk(t), r;
            }
        },
        608222: (e, t, r) => {
            r.d(t, { N: () => a, o: () => o });
            var n = r(552322),
                s = r(202784);
            const i = (0, s.createContext)(null),
                a = ({ children: e, runtime: t, analytics: r }) => {
                    const [a, o] = (0, s.useState)(t),
                        [u, c] = (0, s.useState)(r);
                    return (0, n.jsx)(i.Provider, { value: { Runtime: a, setRuntime: o, Analytics: u, setAnalytics: c }, children: e });
                },
                o = () => (0, s.useContext)(i);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8.78b38d4a.js.map
