"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-5e06d6-12bcec36"],
    {
        996223: (e, t, r) => {
            r.d(t, { J: () => y });
            var n = r(202784),
                s = r(244448),
                a = r(400752),
                o = r(107267),
                c = r(682830),
                i = r(420740),
                l = r(420182),
                u = r(56851),
                f = (r(631673), r(738124)),
                d = r(553160),
                p = r(725102),
                m = r(824626),
                h = r(333010),
                v = r(39182),
                b = r(313129);
            const w = "/i/jf";
            function y({ path: e, systemActionHandlers: t }) {
                const [r] = (0, a.KO)(l.f0),
                    s = (0, o.useLocation)();
                return "undefined" == typeof window ? null : r.isTrue("rweb_jetfuel_sdkv2_with_x_web") ? n.createElement(h.E7, { systemActionHandlers: t }, n.createElement(n.Suspense, { fallback: n.createElement(c.J, null) }, n.createElement(k, { isHighlights: !1, path: e ?? s.pathname.slice(w.length) + s.search, renderEmptyState: () => null }))) : n.createElement(h.E7, { systemActionHandlers: t }, n.createElement(n.Suspense, { fallback: n.createElement(c.J, null) }, n.createElement(g, { path: e })));
            }
            function g({ path: e }) {
                const t = (0, o.useLocation)(),
                    r = e ?? t.pathname.slice(w.length) + t.search;
                (0, v.E)();
                const s = (0, b._3)(r, { refreshTimeMs: 1e4 });
                return s ? (s.jfResponse ? n.createElement(f.Z, { key: r, payload: s.jfResponse.root.value }) : n.createElement(i.Z, { onRetry: null, title: s.error })) : n.createElement(u.Z, null);
            }
            const k = ({ isHighlights: e, path: t, renderEmptyState: r }) => {
                const a = (0, v.E)(),
                    o = (0, s.bk)();
                n.useEffect(() => {
                    if (o && o.Runtime) {
                        const e = { "x.com.GenericURT": d.Z, SignupArkoseSecurityChallenge: p.Z };
                        o.Runtime.addComponentOverride(e);
                    }
                }, [o]);
                const { Analytics: c } = o;
                return n.createElement(m.Z, null, n.createElement(s.mQ, { analytics: c, jfPath: t, key: `${t}-${a}` }));
            };
        },
        996568: (e, t, r) => {
            var n;
            r.d(t, { Wj: () => s, dn: () => o });
            const s = { none: 0, hover: 1, focus: 2, active: 3, selected: 4, disabled: 5, invalid: 6, required: 7, group_hover: 8, group_focus: 9, group_active: 10, dark: 11, light: 12, dim: 13, portrait: 14, landscape: 15, high_contrast: 16, ltr: 17, rtl: 18, linger_2s: 19, linger_5s: 20, linger_10s: 21, linger_15s: 22, linger_30s: 23, linger_90s: 24, linger_120s: 25, sticky: 26, refreshing: 27, sm: 28, md: 29, lg: 30, xl: 31, "2xl": 32, "dark:hover": 33, "light:hover": 34 };
            class a {
                constructor(e) {
                    this.ids = e;
                }
            }
            class o {
                constructor(e) {
                    this.mods = e;
                }
                get base() {
                    return this.mods.get(s.none);
                }
                static from(e) {
                    if (0 === e.length) return null;
                    const t = new Map();
                    for (const r of e)
                        if (r.length > 0) {
                            const e = r[0],
                                n = Object.keys(s).find((t) => s[t] === e);
                            if (n) {
                                const e = r.slice(1);
                                t.set(s[n], new a(e));
                            }
                        }
                    return new o(t);
                }
            }
            (n = o), (o.empty = new n(new Map()));
        },
        601066: (e, t, r) => {
            r.d(t, { t: () => s.tJ, w: () => o });
            var n = r(202784),
                s = r(199035),
                a = r(333010);
            const o = (e) => {
                const [t, r] = n.useState(0),
                    o = n.useContext(a.d_),
                    c = (0, s.tJ)(e, t, o);
                return (
                    n.useEffect(
                        () =>
                            c.subscribe(() => {
                                r((e) => e + 1);
                            }),
                        [c],
                    ),
                    c
                );
            };
        },
        199035: (e, t, r) => {
            r.d(t, { $3: () => h, GZ: () => l, KM: () => T, qB: () => v, tJ: () => _ });
            r(571372), r(543673), r(240753), r(128399), r(136728), r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157);
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
            var s = (e, t = void 0, r = (() => crypto.getRandomValues(new BigUint64Array(1))[0])()) => {
                    let n = new EventTarget(),
                        s = e,
                        a = t;
                    return {
                        id: r,
                        get value() {
                            return s;
                        },
                        set: (e, t = Number(Date.now())) => {
                            (a && t < a) || ((s = e), (a = t), n.dispatchEvent(new Event("set")));
                        },
                        subscribe: (e) => {
                            let t = () => e(s);
                            return n.addEventListener("set", t), () => n.removeEventListener("set", t);
                        },
                    };
                },
                a = (e, t) => {
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
                o = (e, t) => {
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
                c = (e) => {
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
                i = (e) => {
                    let t = new Map(),
                        r = (new Map(), []),
                        n = [],
                        c = (e, r, n) => {
                            let [c, i] = e;
                            switch (c) {
                                case 0:
                                case 4: {
                                    let e = s(r, n, i.id);
                                    return t.set(i.id, e), e;
                                }
                                case 2: {
                                    let e = s([17, new Map()], n, i.id);
                                    return t.set(i.id, e), a(e, i.key);
                                }
                                case 3: {
                                    let e = s([11, ""], n, i.id);
                                    return t.set(i.id, e), o(e, i.key);
                                }
                                case 1: {
                                    let e = s([16, new Map()], n, i.id);
                                    return t.set(i.id, e), e;
                                }
                            }
                        },
                        i = (e) => {
                            let [r, n] = e,
                                s = t.get(n.id);
                            if (s)
                                switch (r) {
                                    case 0:
                                    case 4:
                                        return s;
                                    case 2:
                                        return a(s, n.key);
                                    case 3:
                                        return o(s, n.key);
                                    case 1:
                                        return;
                                }
                        };
                    return {
                        id: e,
                        atoms: {
                            getOrCreate: (e, t, r, n) => {
                                let s = i(e);
                                return s ? (!n || (void 0 === s.value && null === s.value) ? (s.set(t, r), s) : s) : c(e, t, r);
                            },
                            get: i,
                        },
                        net: { httpPOST: async (e, t) => ({ ok: (await fetch(e, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.fromEntries(t.entries())) })).ok, data: void 0 }) },
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
                    };
                };
            function l(e, t = {}) {
                return m(i(e), t);
            }
            var u,
                f,
                d,
                p,
                m = (e, t) => Object.entries(t).reduce((e, [t, r]) => ({ ...e, [t]: r && "object" == typeof r ? m(e[t], r) : (r ?? e[t]) }), { ...e }),
                h = (e) => (v(e) << 16) >> 16,
                v = (e) => 0 | w(b(e)),
                b = (e) => new TextEncoder().encode(e),
                w =
                    ((u = (e, t) => (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16)),
                    (f = (e, t) => (e << t) | (e >>> (32 - t))),
                    (d = 3432918353),
                    (p = 461845907),
                    (e, t = 0) => {
                        t = t || 0;
                        for (var r = (e = e || "").length, n = r % 4, s = r - n, a = t, o = 0, c = 0; c < s; c += 4) (o = (255 & e[c]) | ((255 & e[c + 1]) << 8) | ((255 & e[c + 2]) << 16) | ((255 & e[c + 3]) << 24)), (o = u(o, d)), (o = f(o, 15)), (o = u(o, p)), (a = f((a ^= o), 13)), (a = u(a, 5) + 3864292196);
                        switch (((o = 0), n)) {
                            case 3:
                                o ^= (255 & e[c + 2]) << 16;
                            case 2:
                                o ^= (255 & e[c + 1]) << 8;
                            case 1:
                                (o ^= 255 & e[c]), (o = u(o, d)), (o = f(o, 15)), (a ^= o = u(o, p));
                        }
                        return (a = ((e) => ((e = u((e ^= e >>> 16), 2246822507)), (e = u((e ^= e >>> 13), 3266489909)) ^ (e >>> 16)))((a ^= r))), a >>> 0;
                    });
            function y(e, t) {
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
                        return void 0 === y(e, t);
                    }
                    case 1: {
                        let { ref: e, value: r } = n;
                        return g(y(e, t), t.prop(r));
                    }
                    case 2: {
                        let { ref: e, value: r } = n;
                        return !g(y(e, t), t.prop(r));
                    }
                    case 3: {
                        let { ref: e, value: r } = n,
                            s = y(e, t);
                        return r.some((e) => g(s, t.prop(e)));
                    }
                    case 4: {
                        let { ref: e, value: r } = n,
                            s = y(e, t);
                        return r.every((e) => !g(s, t.prop(e)));
                    }
                    case 5:
                        return j(n.ref, t, (e) => e > Number(O(t.prop(n.value), t)));
                    case 6:
                        return j(n.ref, t, (e) => e >= Number(O(t.prop(n.value), t)));
                    case 7:
                        return j(n.ref, t, (e) => e < Number(O(t.prop(n.value), t)));
                    case 8:
                        return j(n.ref, t, (e) => e <= Number(O(t.prop(n.value), t)));
                    case 9:
                        return E(n.ref, t, (e) => e.startsWith(n.value));
                    case 10:
                        return E(n.ref, t, (e) => e.endsWith(n.value));
                    case 11:
                        return E(n.ref, t, (e) => e.includes(n.value));
                    case 12:
                        return n.every((e) => k(e, t));
                    case 13:
                        return n.some((e) => k(e, t));
                    case 14:
                        return !k(n, t);
                    case 15: {
                        let { ref: e } = n;
                        return void 0 !== y(e, t);
                    }
                }
            }
            var E = (e, t, r) => {
                    let n = y(e, t)?.[1];
                    return "string" == typeof n && r(n);
                },
                j = (e, t, r) => {
                    let n = y(e, t)?.[1];
                    return "number" == typeof n && r(n);
                },
                _ = (e, t = 0, r) => {
                    let n = (t) => {
                            let n = e.props.get(h(t)),
                                s = e.dom.prop(n);
                            return O(s, e.dom, r);
                        },
                        s = (t, r) => {
                            let n = e.props.get(h(t)),
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
                O = (e, t, r) => {
                    if (null == e) return;
                    let [n, s] = e;
                    switch (n) {
                        case 7:
                            return t.el(s);
                        case 8:
                            return s.map((e) => t.el(e));
                        case 18:
                            return O(t.atom(s.ref)?.value, t);
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
            function S(e, t, r) {
                let [n, s] = e;
                switch (n) {
                    case 0:
                        !(function (e, t) {
                            let [r, n] = e,
                                s = Number(new Date()),
                                a = (e) => t.atom(e),
                                o = (e, t) => {
                                    let r = a(e);
                                    r && void 0 !== r.value && !1 !== t(r.value) && r.set(t(r.value), s);
                                },
                                c = (e) => t.prop(e);
                            switch (r) {
                                case 0:
                                    a(n)?.set(void 0, s);
                                    break;
                                case 1: {
                                    let [e, r] = n;
                                    t.runtime.atoms.getOrCreate(e, c(r), s, !1);
                                    break;
                                }
                                case 2: {
                                    let [e, t] = n;
                                    o(e, (e) => (1 === e[0] || 5 === e[0]) && [e[0], e[1] + t]);
                                    break;
                                }
                                case 3: {
                                    let [e, t] = n;
                                    o(e, (e) => 0 === e[0] && [e[0], e[1] + t]);
                                    break;
                                }
                                case 6: {
                                    let [e, t] = n;
                                    o(e, (e) => 6 === e[0] && [e[0], !e[1]]);
                                    break;
                                }
                            }
                        })(s, t);
                        break;
                    case 2:
                        s.forEach((e) => S(e, t, r));
                        break;
                    case 3:
                        {
                            let { url: e, body: n, complete: a, error: o, optimistic: c } = s,
                                i = O(t.prop(e), t),
                                l = O(t.prop(n), t),
                                u = new Map(Object.entries(l ?? {}));
                            i &&
                                l &&
                                (c && S(c, t, r),
                                t.runtime.net.httpPOST(i, u).then((e) => {
                                    e.ok ? a && S(a, t, r) : o && S(o, t, r);
                                }));
                        }
                        break;
                    case 6:
                        {
                            let [e, r] = s;
                            switch (e) {
                                case 0: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + O(t.prop(e), t);
                                    a && (s ? t.runtime.history.replace(a) : t.runtime.history.push(a));
                                    break;
                                }
                                case 9: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + O(t.prop(e), t);
                                    a && (s ? location.replace(a) : (location.href = a));
                                    break;
                                }
                                case 1: {
                                    let { url: e, preview: n, replace: s } = r,
                                        a = "/i/jf" + O(t.prop(e), t);
                                    a && (s ? t.runtime.history.replace(a) : t.runtime.history.push(a));
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
                                        n = O(t.prop(e), t);
                                    n && window.open(n, "_blank");
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
                                a = O(t.prop(n), t);
                            r?.[e](a);
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
                            n = O(t.prop(e), t);
                        if (null == n) return;
                        if (2 === r) t.runtime.ui?.toast(n);
                        break;
                    }
                }
            }
            function A(e) {
                let t = {},
                    r = {},
                    a = new Map(),
                    o = s(void 0),
                    i = (e, t) => {
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
                            [s, o] = t;
                        switch (s) {
                            case 18:
                                r.push(o.ref);
                                break;
                            case 22:
                                n(o);
                        }
                        r.length && a.set(e, r);
                    };
                function l(n, s, a) {
                    for (let e in n) {
                        let r = n[e];
                        (r.dom = p), (t[e] = r);
                    }
                    r = { ...r, ...s };
                    let o = {},
                        l = {};
                    for (let e in s) {
                        let [t, r] = s[e];
                        if ((i(Number(e), s[e]), 18 !== t)) continue;
                        let n = s[r.prop_ref];
                        if (0 !== r.ref[0]) {
                            let e = s[r.ref[1].root],
                                [t, n] = e;
                            if (18 !== t) continue;
                            l[c(n.ref)] = [n.ref, s[n.prop_ref], n.is_default];
                        }
                        o[c(r.ref)] = [r.ref, n, r.is_default];
                    }
                    for (let e in l) delete o[e];
                    for (let [t, [r, n, s]] of Object.entries(l).concat(Object.entries(o))) e.atoms.getOrCreate(r, n, a, s);
                }
                function u(e) {
                    o.set(t[e]);
                }
                function f(t) {
                    return e.atoms.get(t);
                }
                let d = {
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
                                        a = (function (e) {
                                            let [t, r, n, s, a, o, c, i, l, u, f, d, p, m, h, v, b] = e,
                                                w = n,
                                                y = l,
                                                g = t({ type: c, props: s(c, w), children: a(w), id: o(y), extend: o(w) }),
                                                k = m({ 0: d(0, t({ id: y })), 4: d(4, t({ id: y, root: w })), 1: d(1, t({ id: y, key: c, root: w })), 2: d(2, t({ id: y, key: p, root: w })), 3: d(3, t({ id: y, key: p, root: w })) }),
                                                E = t({ ref: k, prop_ref: w, is_default: f }),
                                                j = m({ 0: d(0, k), 1: d(1, h(k, w)), 2: d(2, h(k, c)), 3: d(3, h(k, p)), 4: d(4, v(k, w, o(c))), 5: d(5, h(k, w)), 6: d(6, h(k, o(h(w, w)))), 7: d(7, h(k, w)), 8: d(8, h(k, w)) }),
                                                _ = m({ 0: d(0, t({ url: w, preview: o(w), replace: f })), 9: d(9, t({ url: w, preview: o(w), replace: f })), 1: d(1, t({ url: w, body: o(w), preview: o(w), replace: f })), 2: b([2]), 8: d(8, t({ url: w })), 3: b([3]), 4: b([4]), 5: b([5]), 6: b([6]), 7: d(7, t({ id: w })) }),
                                                O = m((e) => ({ 0: d(0, j), 1: d(1, t({ ref: w, action: e, cancel: o(e) })), 2: d(2, a(e)), 3: d(3, t({ url: w, body: w, complete: o(e), error: o(e), optimistic: o(e) })), 4: d(4, t({ action: e, intensity: c })), 5: d(5, t({ ref: w, type: r })), 6: d(6, _), 7: d(7, t({ type: r, id: o(y) })), 8: d(8, p), 9: d(9, t({ urls: a(p), priority: r })), 10: d(10, w), 11: d(11, t({ type: r, ref: w })), 12: d(12, t({ action: e, delaySeconds: c })), 13: d(13, t({ data: p, secret: p })) })),
                                                S = m((e) => ({ 0: d(0, t({ ref: k })), 15: d(15, t({ ref: k })), 1: d(1, t({ ref: k, value: w })), 2: d(2, t({ ref: k, value: w })), 3: d(3, t({ ref: k, value: a(w) })), 4: d(4, t({ ref: k, value: a(w) })), 5: d(5, t({ ref: k, value: w })), 6: d(6, t({ ref: k, value: w })), 7: d(7, t({ ref: k, value: w })), 8: d(8, t({ ref: k, value: w })), 9: d(9, t({ ref: k, value: p })), 10: d(10, t({ ref: k, value: p })), 11: d(11, t({ ref: k, value: p })), 12: d(12, h(e, e)), 13: d(13, h(e, e)), 14: d(14, e) })),
                                                A = a(a(i)),
                                                T = a(v(r, p, o(p))),
                                                P = m({ 0: d(0, p), 1: d(1, i), 3: d(3, A), 25: d(25, a(h(A, S))), 4: d(4, y), 5: d(5, u), 6: d(6, f), 7: d(7, w), 8: d(8, a(w)), 10: d(10, n), 11: d(11, p), 12: d(12, T), 14: d(14, l), 15: d(15, w), 16: d(16, s(c, w)), 17: d(17, s(p, p)), 18: d(18, E), 19: d(19, O), 21: d(21, a(w)), 22: d(22, S), 24: d(24, a(w)), 26: d(26, a(p)), 27: d(27, a(i)), 28: d(28, a(u)), 29: d(29, a(f)), 13: d(13, b(void 0)) }),
                                                M = t({ els: a(g), props: a(P), ts: i }),
                                                C = t({ ref: w, t: o(i) });
                                            return m({ 0: d(0, M), 1: d(1, C), 2: d(2, O) });
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
                                    return { decodeMessage: (e) => a(e) };
                                })(),
                                t = new Uint8Array(0),
                                r = (e) => {
                                    let [t, r] = e;
                                    switch (t) {
                                        case 0:
                                            l(r.els, r.props, r.ts);
                                            break;
                                        case 1:
                                            u(r.ref);
                                    }
                                };
                            return {
                                onChunk: (s) => {
                                    for (t = new Uint8Array([...t, ...s]); t.length > 4; ) {
                                        let s = new DataView(t.buffer).getUint32(0, !0);
                                        if (t.length < s + 4) break;
                                        let a = t.slice(4, 4 + s);
                                        (t = t.slice(4 + s)), performance.now(), r(e.decodeMessage(n(a.buffer)));
                                    }
                                },
                            };
                        },
                    },
                    p = {
                        runtime: e,
                        get root() {
                            return o;
                        },
                        el: (e) => t[e],
                        prop: (e) => (void 0 !== e ? r[e] : void 0),
                        atom: f,
                        allAtoms: (e) =>
                            Array.from(new Set(e.flatMap((e) => a.get(e))))
                                .filter((e) => e)
                                .map((e) => f(e)),
                        runAction: (e, t) => S(e, p, t),
                        ingest: l,
                        ready: u,
                        session: () => d.session(),
                    };
                return p;
            }
            function T(e, t) {
                let r = A(e);
                return r.session().onChunk(t), r;
            }
        },
        324345: (e, t, r) => {
            r.d(t, { N: () => n });
            const n = { Text: 0, Link: 1, Hashtag: 2, Mention: 3, Symbol: 4, Bold: 5, Italic: 6, Empty: 255 };
        },
        333010: (e, t, r) => {
            r.d(t, { E7: () => o, d_: () => a });
            r(571372);
            var n = r(202784),
                s = r(736230);
            const a = n.createContext({ setSystemActionHandler: () => {} }),
                o = ({ children: e, systemActionHandlers: t }) => {
                    const r = n.useRef(new Map());
                    n.useEffect(() => {
                        (t ? Array.from(t?.entries()) : []).forEach(([e, t]) => {
                            r.current.set(e, t);
                        });
                    }, [t]);
                    const o = n.useCallback((e, t) => {
                            r.current.set(e, t);
                        }, []),
                        c = n.useCallback((e) => {
                            const t = e,
                                { matchupId: n, pickedByGrok: s, teamName: a } = t,
                                o = r.current.get(1);
                            o && o?.(a, n, s);
                        }, []),
                        i = { setSystemActionHandler: o, [s.bP.MARCH_MADNESS_PICK]: c };
                    return n.createElement(a.Provider, { value: i }, e);
                };
        },
        39182: (e, t, r) => {
            r.d(t, { E: () => l });
            r(571372);
            var n = r(202784),
                s = r(251067),
                a = r(400752),
                o = r(313129),
                c = r(355335),
                i = r(190674);
            const l = () => {
                const e = n.useRef(null),
                    t = (0, i.m)(),
                    r = (0, a.b9)(o.Ng),
                    [l, u] = n.useState(Date.now()),
                    { isDev: f } = (0, c.Z)();
                return (
                    n.useEffect(() => {
                        if (!f || (0, s.fH)(s.vw.prod)) return;
                        const n = () => {
                            (e.current = new WebSocket("wss://localhost.x.com:3000/__dev")),
                                (e.current.onmessage = (e) => {
                                    if ("string" == typeof e.data) {
                                        const e = Date.now();
                                        r(t), u(e);
                                    }
                                }),
                                (e.current.onerror = (e) => {
                                    throw new Error(e.type);
                                }),
                                (e.current.onclose = () => {
                                    setTimeout(n, 3e3);
                                });
                        };
                        return (
                            n(),
                            () => {
                                e.current && e.current.close();
                            }
                        );
                    }, [t, f, r]),
                    l
                );
            };
        },
        313129: (e, t, r) => {
            r.d(t, { wR: () => C, kp: () => D, $P: () => T, Ng: () => A, _3: () => k, Q_: () => E });
            r(694898), r(38857), r(540171), r(157093), r(265688), r(270315), r(592529), r(86943), r(691157), r(875640);
            var n = r(202784),
                s = r(400752),
                a = r(565058),
                o = r(987809),
                c = r(392237),
                i = r(323265),
                l = r(88656),
                u = r(420182),
                f = r(689048),
                d = r(390387),
                p = r(163889),
                m = r(536387),
                h = r(774717),
                v = r(736230),
                b = r(199035),
                w = r(355335),
                y = r(190674);
            r(543673), r(240753), r(128399);
            const g = (e, t) => {
                    const r = new URL(e, "https://x.com");
                    return r.searchParams.delete(t), r.pathname + r.search;
                },
                k = (e, t) => {
                    const r = (0, y.m)(),
                        a = (0, s.b9)(_),
                        o = n.useRef(t);
                    o.current = t;
                    const c = g(e, "tabId");
                    return (
                        n.useEffect(() => {
                            const e = o.current;
                            e && a(c, r, e);
                        }, [c, r, a]),
                        (0, s.Dv)(S({ runtimeOverrides: r, jfPath: c }))
                    );
                },
                E = (e, t = 0) => {
                    const r = (0, y.m)(),
                        a = (0, s.b9)(O),
                        o = g(e, "tabId");
                    return (
                        n.useEffect(() => {
                            if ((a(o, r), t > 0)) {
                                const e = setInterval(() => {
                                    a(o, r);
                                }, 1e3 * t);
                                return () => {
                                    clearInterval(e);
                                };
                            }
                        }, [o, a, t, r]),
                        (0, s.Dv)(S({ jfPath: o, runtimeOverrides: r }))
                    );
                },
                j = (0, o.xu)((e) => (0, a.cn)()),
                _ = (0, a.cn)(null, (e, t, r, n, s) => {
                    const a = e(j(r)),
                        { refreshTimeMs: o } = s;
                    if (a && a < Date.now() - o) return t(j(r), Date.now()), e(u.zE).set(L(n)(r));
                }),
                O = (0, a.cn)(null, (e, t, r, n) => (t(j(r), Date.now()), t(L(n)(r)))),
                S = (0, o.xu)(
                    ({ jfPath: e, runtimeOverrides: t }) =>
                        (0, a.cn)((r) =>
                            r(L(t)(e)).finally((t) => {
                                r(u.zE).set(j(e), Date.now());
                            }),
                        ),
                    (e, t) => e.jfPath === t.jfPath,
                ),
                A = (0, a.cn)(null, (e, t, r) => {
                    t(L(r).reset);
                }),
                T = (e) => {
                    if (!e) return {};
                    try {
                        const t = new Uint8Array(Array.from(atob(e), (e) => e.charCodeAt(0))),
                            r = "123",
                            n = x.getOrCreate(r, () => (0, b.GZ)(r, {})),
                            s = (0, b.KM)(n, t);
                        return null == s ? { error: v.TT } : { jfResponse: s };
                    } catch (e) {
                        return (0, p.ZP)(e), { error: v.TT };
                    }
                };
            const P = (e) => {
                    const t = (0, d.F5)(e),
                        r = {},
                        n = Intl.DateTimeFormat().resolvedOptions().timeZone,
                        s = "dark" === c.default.theme.paletteName ? "dim" : c.default.theme.paletteName;
                    return (r["x-jf-client-theme"] = s), (r["x-jf-v"] = "JP-3"), n && (r.timezone = n), t && (r["accept-language"] = (0, f.o)(t)), r;
                },
                M = (e, t) => (e ? v.mH : t ? v.OG : v.CP),
                C = async (e, t, r, n, s, a, o) => {
                    if (!e) return {};
                    const c = P(r),
                        u = M(s, a),
                        f = g(e, v.tX),
                        d = (function (e, t) {
                            const r = i.ZP.isTwitterApp() ? (i.ZP.isAndroid() ? "android" : "ios") : "web",
                                n = e ? `jf-test-${r}:api` : `jf-${r}:api`,
                                s = h.P_();
                            function a(e) {
                                t || h.IM(`${n}:${e}`, s.end());
                            }
                            const o = new Set();
                            return {
                                record: a,
                                recordOnce: function (e) {
                                    o.has(e) || (o.add(e), a(e));
                                },
                            };
                        })(a, s);
                    try {
                        const e = t ? await n.jetfuelForm(f, c, t, u) : await n.jetfuel(f, c, u);
                        d.recordOnce("latency-resp");
                        const s = r.session.user_id ?? r.session.guestId ?? "",
                            a = x.getOrCreate(s, () => {
                                const e = {
                                    net: {
                                        httpPOST: async (e, t) => {
                                            let r = !1;
                                            try {
                                                await n.jetfuelForm(e, c, Object.fromEntries(t.entries()), u), (r = !0);
                                            } catch (e) {
                                                r = !1;
                                            }
                                            return { ok: r };
                                        },
                                    },
                                    ...o,
                                };
                                return (0, b.GZ)(s, e);
                            }),
                            i = (0, b.KM)(a, new Uint8Array(e));
                        return d.recordOnce("latency-dom"), null == i ? { error: v.TT } : { jfResponse: i };
                    } catch (e) {
                        return (0, p.ZP)(e), e instanceof l.Z && 404 === e.status ? (d.record("not-found"), {}) : (d.record("error"), { error: v.TT });
                    }
                },
                D = async (e, t, r, n, s, a) => {
                    if (!e) return {};
                    const o = P(r),
                        c = M(s, a),
                        i = g(e, v.tX);
                    try {
                        const e = t ? await n.jetfuelForm(i, o, t, c) : await n.jetfuel(i, o, c);
                        return { jsonResponse: JSON.parse(new TextDecoder().decode(e)) };
                    } catch (e) {
                        return (0, p.ZP)(e), e instanceof l.Z && 404 === e.status ? {} : { error: v.TT };
                    }
                },
                x = (() => {
                    const e = new Map();
                    return {
                        getOrCreate(t, r) {
                            let n = e.get(t);
                            return n || ((n = r()), e.set(t, n)), n;
                        },
                    };
                })(),
                L = (() => {
                    let e;
                    return (t) =>
                        e ||
                        ((e = (0, m.dX)((e) =>
                            (0, m.K9)(async (r) => {
                                const n = r(w.k),
                                    s = r(u.dd).apiClient,
                                    a = r(u.f0),
                                    o = r(u.qc).getState(),
                                    c = location.host.includes("x.com") && a.isTrue("x_jetfuel_enable_test_cluster");
                                return await C(e, void 0, o, s, n, c, t);
                            }),
                        )),
                        e);
                })();
        },
        190674: (e, t, r) => {
            r.d(t, { m: () => i });
            var n = r(202784),
                s = r(244448),
                a = r(107267),
                o = r(782642),
                c = r(824626);
            function i() {
                const e = (0, a.useHistory)(),
                    t = (0, o.p)();
                return n.useMemo(
                    () => ({
                        history: e,
                        ui: {
                            toast: (e) => {
                                const r = n.createElement(c.Z, null, n.createElement(s.kb, { payload: e }));
                                t({ text: "", variant: { type: "jetfuel", payload: { body: r } } });
                            },
                        },
                    }),
                    [e, t],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-5e06d6-12bcec36.db7b615a.js.map
