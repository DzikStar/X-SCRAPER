"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c"],
    {
        957167: (e, t, r) => {
            r.d(t, { Ld: () => o, RY: () => c, cn: () => s, ox: () => i, xM: () => a });
            var n = r(424012);
            const s = (e, t = void 0, r = (() => BigInt(Math.floor(Math.random() * Math.pow(10, 8))))()) => {
                    const n = new EventTarget();
                    let s = e,
                        o = t;
                    return {
                        id: r,
                        get value() {
                            return s;
                        },
                        set: (e, t = Number(Date.now())) => {
                            (o && t < o) || ((s = e), (o = t), n.dispatchEvent(new Event("set")));
                        },
                        subscribe: (e) => {
                            const t = () => e(s);
                            return n.addEventListener("set", t), () => n.removeEventListener("set", t);
                        },
                    };
                },
                o = (e, t) => {
                    const r = e.map((r) => r.subscribe(() => t(e.map((e) => e.value))));
                    return () => r.forEach((e) => e());
                },
                c = (e, t) => {
                    if (e.value?.[0] !== n._I.str_dict) throw new Error("Not a dict");
                    const r = () => {
                        const r = e.value?.[1]?.get(t);
                        return void 0 === r ? void 0 : [n._I.str, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || r[0] !== n._I.str) return;
                            const s = new Map(e.value?.[1]);
                            s.set(t, r[1]), e.set([n._I.str_dict, s]);
                        },
                    };
                },
                a = (e, t) => {
                    if (e.value?.[0] !== n._I.url) throw new Error("Not a url");
                    const r = () => {
                        const r = new URLSearchParams(e.value?.[1]).get(t);
                        return null === r ? void 0 : [n._I.str, r];
                    };
                    return {
                        id: e.id,
                        get value() {
                            return r();
                        },
                        subscribe: (t) => e.subscribe(() => t(r())),
                        set: (r) => {
                            if (!r || r[0] !== n._I.str) return;
                            const s = new URL(e.value?.[1]);
                            s.searchParams.set(t, r[1]), e.set([n._I.url, s.toString()]);
                        },
                    };
                },
                i = (e) => {
                    const [t, r] = e;
                    switch (t) {
                        case n.fx.atom:
                        case n.fx.atom_with_root:
                            return r.id.toString();
                        case n.fx.str_key:
                        case n.fx.url_param:
                        case n.fx.bag_key:
                            return `${r.id}:${r.key}`;
                    }
                };
        },
        787298: (e, t, r) => {
            r.d(t, { v: () => a, K: () => i });
            var n = r(424012),
                s = r(648385);
            function o(e, t, r) {
                const [c, a] = e;
                switch (c) {
                    case n.je.change:
                        !(function (e, t) {
                            const [r, s] = e,
                                o = Number(new Date()),
                                c = (e) => t.atom(e),
                                a = (e, t) => {
                                    const r = c(e);
                                    if (!r || void 0 === r.value) return;
                                    !1 !== t(r.value) && r.set(t(r.value), o);
                                },
                                i = (e) => t.prop(e);
                            switch (r) {
                                case n.aw.null:
                                    c(s)?.set(void 0, o);
                                    break;
                                case n.aw.set: {
                                    const [e, r] = s;
                                    t.runtime.atoms.getOrCreate(e, i(r), o, !1);
                                    break;
                                }
                                case n.aw.inc: {
                                    const [e, t] = s;
                                    a(e, (e) => (e[0] === n._I.int || e[0] === n._I.f64) && [e[0], e[1] + t]);
                                    break;
                                }
                                case n.aw.str_append: {
                                    const [e, t] = s;
                                    a(e, (e) => e[0] === n._I.str && [e[0], e[1] + t]);
                                    break;
                                }
                                case n.aw.toggle: {
                                    const [e, t] = s;
                                    a(e, (e) => e[0] === n._I.bool && [e[0], !e[1]]);
                                    break;
                                }
                            }
                        })(a, t);
                        break;
                    case n.je.multi:
                        a.forEach((e) => o(e, t, r));
                        break;
                    case n.je.post_request:
                        {
                            const { url: e, body: n, complete: c, error: i, optimistic: u } = a,
                                l = (0, s.X)(t.prop(e), t),
                                d = (0, s.X)(t.prop(n), t),
                                f = new Map(Object.entries(d ?? {}));
                            l &&
                                d &&
                                (u && o(u, t, r),
                                t.runtime.net.httpPOST(l, f).then((e) => {
                                    e.ok ? c && o(c, t, r) : i && o(i, t, r);
                                }));
                        }
                        break;
                    case n.je.navigate:
                        {
                            const [e, r] = a;
                            switch (e) {
                                case n.J.page: {
                                    const { url: e, replace: n } = r,
                                        o = "/i/jf" + (0, s.X)(t.prop(e), t);
                                    o && (n ? t.runtime.history.replace(o) : t.runtime.history.push(o));
                                    break;
                                }
                                case n.J.page_reset_to: {
                                    const { url: e, replace: n } = r,
                                        o = "/i/jf" + (0, s.X)(t.prop(e), t);
                                    o && (n ? location.replace(o) : (location.href = o));
                                    break;
                                }
                                case n.J.page_post: {
                                    const { url: e, replace: n } = r,
                                        o = "/i/jf" + (0, s.X)(t.prop(e), t);
                                    o && (n ? t.runtime.history.replace(o) : t.runtime.history.push(o));
                                    break;
                                }
                                case n.J.back:
                                    t.runtime.history.goBack();
                                    break;
                                case n.J.dismiss:
                                    t.runtime.removeCover() || t.runtime.history.goBack();
                                    break;
                                case n.J.link: {
                                    const { url: e } = r,
                                        n = (0, s.X)(t.prop(e), t);
                                    n && t.runtime.history.push(n);
                                    break;
                                }
                                case n.J.back_root:
                                    t.runtime.history.goBack({ backLocation: "/" });
                                    break;
                                case n.J.scroll_bottom:
                                    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                                    break;
                                case n.J.scroll_top:
                                    window.scrollTo({ top: 0, behavior: "smooth" });
                            }
                        }
                        break;
                    case n.je.refresh:
                        window.location.reload();
                        break;
                    case n.je.system:
                        {
                            const { type: e, ref: n } = a,
                                o = (0, s.X)(t.prop(n), t);
                            r?.[e]?.(o);
                        }
                        break;
                    case n.je.confirm:
                        break;
                    case n.je.present: {
                        const { ref: e, type: r } = a,
                            o = (0, s.X)(t.prop(e), t);
                        if (null == o) return;
                        if (r === n.ai.toast) t.runtime.addToast(o);
                        break;
                    }
                    case n.je.cache_clear:
                    case n.je.prefetch:
                    case n.je.scribe:
                    case n.je.haptic:
                    case n.je.auth:
                }
            }
            var c = r(957167);
            function a(e) {
                const t = {};
                let r = {};
                const s = new Map(),
                    a = (0, c.cn)(void 0),
                    i = (e, t) => {
                        const r = [],
                            o = (e) => {
                                const [t, s] = e;
                                switch (t) {
                                    case n.RB.or:
                                    case n.RB.and:
                                        s.forEach(o);
                                        break;
                                    case n.RB.not:
                                        o(s);
                                        break;
                                    default:
                                        r.push(s.ref);
                                }
                            },
                            [c, a] = t;
                        switch (c) {
                            case n._I.atom:
                                r.push(a.ref);
                                break;
                            case n._I.predicate:
                                o(a);
                        }
                        r.length && s.set(e, r);
                    };
                function u(s, o, a) {
                    for (const e in s) {
                        const r = s[e];
                        (r.dom = p), (t[e] = r);
                    }
                    r = { ...r, ...o };
                    const u = {},
                        l = {};
                    for (const e in o) {
                        const t = o[e];
                        if (!t) continue;
                        const [r, s] = t;
                        if ((i(Number(e), t), r !== n._I.atom)) continue;
                        const a = o[s.prop_ref];
                        if (a) {
                            if (s.ref[0] !== n.fx.atom) {
                                const e = o[s.ref[1].root];
                                if (!e) continue;
                                const [t, r] = e;
                                if (t !== n._I.atom) continue;
                                const a = o[r.prop_ref];
                                if (!a) continue;
                                l[(0, c.ox)(r.ref)] = [r.ref, a, r.is_default];
                            }
                            u[(0, c.ox)(s.ref)] = [s.ref, a, s.is_default];
                        }
                    }
                    for (const e in l) delete u[e];
                    for (const [, [t, r, n]] of Object.entries(l).concat(Object.entries(u))) e.atoms.getOrCreate(t, r, a, n);
                }
                function l(e) {
                    a.set(t[e]);
                }
                function d(t) {
                    return e.atoms.get(t);
                }
                const f = {
                        session: function () {
                            const e = (0, n.xv)();
                            let t = new Uint8Array(0);
                            const r = (e) => {
                                const [t, r] = e;
                                switch (t) {
                                    case n.ZI.dom_data:
                                        u(r.els, r.props, r.ts);
                                        break;
                                    case n.ZI.dom_ready:
                                        l(r.ref);
                                }
                            };
                            return {
                                onChunk: (s) => {
                                    for (t = new Uint8Array([...t, ...s]); t.length > 4; ) {
                                        const s = new DataView(t.buffer).getUint32(0, !0);
                                        if (t.length < s + 4) break;
                                        const o = t.slice(4, 4 + s);
                                        (t = t.slice(4 + s)), performance.now(), r(e.decodeMessage((0, n.r1)(o.buffer)));
                                    }
                                },
                            };
                        },
                    },
                    p = {
                        runtime: e,
                        get root() {
                            return a;
                        },
                        el: (e) => t[e],
                        prop: (e) => (void 0 !== e ? r[e] : void 0),
                        atom: d,
                        allAtoms: (e) =>
                            Array.from(new Set(e.flatMap((e) => s.get(e))))
                                .filter((e) => e)
                                .map((e) => d(e)),
                        runAction: (e, t) => o(e, p, t),
                        ingest: u,
                        ready: l,
                        session: () => f.session(),
                    };
                return p;
            }
            function i(e, t) {
                const r = a(e);
                return r.session().onChunk(t), r;
            }
        },
        648385: (e, t, r) => {
            r.d(t, { X: () => f, t: () => d });
            var n = r(417963),
                s = r(424012),
                o = r(957167);
            function c(e, t) {
                return t.atom(e)?.value;
            }
            const a = (e, t) => {
                if (e === t) return !0;
                if (null == e || null == t) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, r) => a(e, t[r]));
                if ("object" == typeof e && "object" == typeof t) {
                    const r = Object.keys(e);
                    return r.length === Object.keys(t).length && r.every((r) => a(e[r], t[r]));
                }
                return !1;
            };
            function i(e, t) {
                const [r, n] = e;
                switch (r) {
                    case s.RB.null: {
                        const { ref: e } = n;
                        return void 0 === c(e, t);
                    }
                    case s.RB.is: {
                        const { ref: e, value: r } = n;
                        return a(c(e, t), t.prop(r));
                    }
                    case s.RB.is_not: {
                        const { ref: e, value: r } = n;
                        return !a(c(e, t), t.prop(r));
                    }
                    case s.RB.in: {
                        const { ref: e, value: r } = n,
                            s = c(e, t);
                        return r.some((e) => a(s, t.prop(e)));
                    }
                    case s.RB.not_in: {
                        const { ref: e, value: r } = n,
                            s = c(e, t);
                        return r.every((e) => !a(s, t.prop(e)));
                    }
                    case s.RB.gt:
                        return l(n.ref, t, (e) => e > Number(f(t.prop(n.value), t)));
                    case s.RB.gte:
                        return l(n.ref, t, (e) => e >= Number(f(t.prop(n.value), t)));
                    case s.RB.lt:
                        return l(n.ref, t, (e) => e < Number(f(t.prop(n.value), t)));
                    case s.RB.lte:
                        return l(n.ref, t, (e) => e <= Number(f(t.prop(n.value), t)));
                    case s.RB.starts_with:
                        return u(n.ref, t, (e) => e.startsWith(n.value));
                    case s.RB.ends_with:
                        return u(n.ref, t, (e) => e.endsWith(n.value));
                    case s.RB.includes:
                        return u(n.ref, t, (e) => e.includes(n.value));
                    case s.RB.and:
                        return n.every((e) => i(e, t));
                    case s.RB.or:
                        return n.some((e) => i(e, t));
                    case s.RB.not:
                        return !i(n, t);
                    case s.RB.not_null: {
                        const { ref: e } = n;
                        return void 0 !== c(e, t);
                    }
                }
            }
            const u = (e, t, r) => {
                    const n = c(e, t)?.[1];
                    return "string" == typeof n && r(n);
                },
                l = (e, t, r) => {
                    const n = c(e, t)?.[1];
                    return "number" == typeof n && r(n);
                },
                d = (e, t = 0, r) => {
                    const c = (t) => {
                            const s = e?.props.get((0, n.$)(t)),
                                o = e?.dom?.prop(s);
                            return e && e.dom ? f(o, e.dom, r) : void 0;
                        },
                        a = (t, r) => {
                            const o = e?.props.get((0, n.$)(t)),
                                c = e?.dom?.prop(o);
                            c?.[0] === s._I.atom && e?.dom?.atom(c[1].ref)?.set(r);
                        };
                    return {
                        str: (e) => c(e),
                        setStr: (e, t) => a(e, [s._I.str, t]),
                        int: (e) => c(e),
                        setInt: (e, t) => a(e, [s._I.int, t]),
                        f32: (e) => c(e),
                        setF32: (e, t) => a(e, [s._I.f64, t]),
                        bool: (e) => c(e),
                        setBool: (e, t) => a(e, [s._I.bool, t]),
                        richtext: (e) => c(e),
                        url: (e) => c(e),
                        date: (e) => c(e),
                        element: (e) => c(e),
                        elements: (e) => c(e),
                        id: (e) => c(e),
                        enum: (e) => c(e),
                        rawEnum: (e) => c(e),
                        strDict: (e) => c(e),
                        setStrDict: (e, t) => a(e, [s._I.str_dict, new Map(Object.entries(t))]),
                        action: (e) => c(e),
                        mods: () => c("mod") ?? [],
                        strList: (e) => c(e),
                        setStrLit: (e, t) => a(e, [s._I.str_list, t]),
                        intList: (e) => c(e),
                        setIntLit: (e, t) => a(e, [s._I.int_list, t]),
                        f32List: (e) => c(e),
                        setF32Lit: (e, t) => a(e, [s._I.f64_list, t]),
                        boolList: (e) => c(e),
                        setBoolLit: (e, t) => a(e, [s._I.bool_list, t]),
                        subscribe: (t) => {
                            const r = e ? Array.from(e.props.values()) : [];
                            return (0, o.Ld)(e?.dom?.allAtoms(r) || [], t);
                        },
                        set: a,
                    };
                },
                f = (e, t, r) => {
                    if (null == e) return;
                    const [n, o] = e;
                    switch (n) {
                        case s._I.element:
                            return t?.el(o);
                        case s._I.elements:
                            return o.map((e) => t?.el(e)).filter(Boolean);
                        case s._I.atom:
                            return f(t?.atom(o.ref)?.value, t || { el: () => {}, atom: () => {}, prop: () => {}, runAction: () => {}, allAtoms: () => [] });
                        case s._I.date:
                            return new Date(1e3 * Number(o));
                        case s._I.action:
                            return () => t.runAction(o, r);
                        case s._I.str_dict:
                            return Object.fromEntries(o.entries());
                        case s._I.predicate:
                            return i(o, t);
                        case s._I.conditional_mods:
                        case s._I.rich_text:
                            return o;
                    }
                    return o;
                };
        },
        417963: (e, t, r) => {
            r.d(t, { $: () => n, q: () => s });
            const n = (e) => (s(e) << 16) >> 16,
                s = (e) => 0 | c(o(e)),
                o = (e) => new TextEncoder().encode(e),
                c =
                    ((a = (e, t) => (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16)),
                    (i = (e, t) => (e << t) | (e >>> (32 - t))),
                    (u = 3432918353),
                    (l = 461845907),
                    (e, t = 0) => {
                        t = t || 0;
                        for (var r, n = e.length, s = n % 4, o = n - s, c = t, d = 0, f = 0; f < o; f += 4) (d = (255 & e[f]) | ((255 & e[f + 1]) << 8) | ((255 & e[f + 2]) << 16) | ((255 & e[f + 3]) << 24)), (d = a(d, u)), (d = i(d, 15)), (d = a(d, l)), (c = i((c ^= d), 13)), (c = a(c, 5) + 3864292196);
                        switch (((d = 0), s)) {
                            case 3:
                                d ^= (255 & e[f + 2]) << 16;
                            case 2:
                                d ^= (255 & e[f + 1]) << 8;
                            case 1:
                                (d ^= 255 & e[f]), (d = a(d, u)), (d = i(d, 15)), (c ^= d = a(d, l));
                        }
                        return (r = c ^= n), (r = a((r ^= r >>> 16), 2246822507)), (c = (r = a((r ^= r >>> 13), 3266489909)) ^ (r >>> 16)) >>> 0;
                    });
            var a, i, u, l;
        },
        798324: (e, t, r) => {
            r.d(t, { vz: () => u.v, KM: () => u.K, $3: () => o.$, qB: () => o.q, tJ: () => l.t, GZ: () => a });
            var n = r(424012),
                s = r(957167),
                o = r(417963);
            const c = (e) => {
                const t = new Map(),
                    r = [],
                    c = [],
                    a = {},
                    i = { addToast: () => {}, removeToast: () => {}, setAddToToastQueue: () => {}, setRemoveFromToastQueue: () => {} },
                    u = (e, r, o) => {
                        const [c, a] = e;
                        switch (c) {
                            case n.fx.atom:
                            case n.fx.atom_with_root: {
                                const e = (0, s.cn)(r, o, a.id);
                                return t.set(a.id, e), e;
                            }
                            case n.fx.str_key: {
                                const e = (0, s.cn)([n._I.str_dict, new Map()], o, a.id);
                                return t.set(a.id, e), (0, s.RY)(e, a.key);
                            }
                            case n.fx.url_param: {
                                const e = (0, s.cn)([n._I.url, ""], o, a.id);
                                return t.set(a.id, e), (0, s.xM)(e, a.key);
                            }
                            case n.fx.bag_key: {
                                const e = (0, s.cn)([n._I.bag, new Map()], o, a.id);
                                return t.set(a.id, e), e;
                            }
                        }
                    },
                    l = (e) => {
                        const [r, o] = e,
                            c = t.get(o.id);
                        if (c)
                            switch (r) {
                                case n.fx.atom:
                                case n.fx.atom_with_root:
                                    return c;
                                case n.fx.str_key:
                                    return (0, s.RY)(c, o.key);
                                case n.fx.url_param:
                                    return (0, s.xM)(c, o.key);
                                case n.fx.bag_key:
                                    return;
                            }
                    };
                return {
                    id: e,
                    atoms: {
                        getOrCreate: (e, t, r, n) => {
                            const s = l(e);
                            return s ? (!n || (void 0 === s.value && null === s.value) ? (s.set(t, r), s) : s) : u(e, t, r);
                        },
                        get: l,
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
                        goBack: (e) => {
                            e?.backLocation ? (location.href = e.backLocation) : history.back();
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
                        c.push(e);
                    },
                    removeCover: () => {
                        if (c.length <= 0) return !1;
                        const e = c.pop();
                        return e && e(), !0;
                    },
                    addComponentOverride: (e) => {
                        const t = {};
                        for (const [r, n] of Object.entries(e)) {
                            t[(0, o.$)(r)] = n;
                        }
                        Object.assign(a, t);
                    },
                    getComponentOverride: () => a,
                    addToast: (e) => {
                        i.addToast(e);
                    },
                    removeToast: () => {
                        i.removeToast();
                    },
                    setAddToToastQueue: (e) => {
                        i.addToast = e;
                    },
                    setRemoveFromToastQueue: (e) => {
                        i.removeToast = e;
                    },
                };
            };
            function a(e, t = {}) {
                return i(c(e), t);
            }
            const i = (e, t) => Object.entries(t).reduce((e, [t, r]) => ({ ...e, [t]: r && "object" == typeof r ? i(e[t], r) : (r ?? e[t]) }), { ...e });
            var u = r(787298),
                l = r(648385);
        },
        373461: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(552322),
                s = r(193686),
                o = r(202784),
                c = r(109195),
                a = r(787298),
                i = r(608222);
            function u({ url: e, placeholder: t }) {
                const r = (0, i.o)(),
                    [u, l] = (0, o.useState)(!0),
                    [d, f] = (0, o.useState)(null),
                    [p, b] = (0, o.useState)(null),
                    m = (0, o.useRef)(e);
                if (!r) return (0, n.jsx)("div", { children: "Runtime context not available" });
                const { Runtime: h } = r;
                if (!h) return (0, n.jsx)("div", { children: "Runtime not available" });
                const v = (0, a.v)(h),
                    _ = async (e) => {
                        l(!0);
                        try {
                            const t = v.session(),
                                r = sessionStorage.getItem(e);
                            if (r) {
                                const e = (function (e) {
                                    const t = atob(e),
                                        r = new Uint8Array(t.length);
                                    for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                                    return r.buffer;
                                })(r);
                                t.onChunk(new Uint8Array(e)), b(v.root.value), l(!1);
                            }
                            const n = await h.net.httpGet(e);
                            n.data &&
                                m.current === e &&
                                (t.onChunk(new Uint8Array(n.data)),
                                sessionStorage.setItem(
                                    e,
                                    (function (e) {
                                        const t = new Uint8Array(e),
                                            r = Array.from(t)
                                                .map((e) => String.fromCharCode(e))
                                                .join("");
                                        return btoa(r);
                                    })(n.data),
                                ),
                                b(v.root.value),
                                l(!1));
                        } catch (e) {
                            l(!1), f(e instanceof Error ? e : new Error(String(e)));
                        }
                    };
                return (
                    (0, o.useEffect)(() => {
                        e && ((m.current = e), _(e));
                    }, [e]),
                    u ? (t ?? (0, n.jsx)(s.P, {})) : d ? (0, n.jsxs)("div", { children: ["Error: ", d.message] }) : (0, n.jsx)(c.Z, { el: p })
                );
            }
        },
        109195: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(552322),
                s = r(202784),
                o = r(798324),
                c = r(608222),
                a = r(907490),
                i = r(705156);
            const u = (0, s.createContext)({}),
                l = (e, t) => ({ action: e, ...t });
            function d({ el: e }) {
                const t = (0, c.o)(),
                    r = t?.Analytics;
                if (!t || !t.Runtime) return (0, n.jsx)("div", { children: "Runtime not found" });
                const d = t.Runtime,
                    f = (0, s.useContext)(u) || {},
                    p = d.getComponentOverride(),
                    b = 24045 === e.type || -22153 === e.type ? (0, i.O)(e) : p[e.type] ? p[e.type] : (0, i.O)(e),
                    [m, h] = (0, s.useState)(0),
                    [v, _] = (0, s.useState)(!1),
                    y = (0, s.useRef)(null),
                    g = (0, s.useMemo)(() => (0, o.tJ)(e, m), [e, m]),
                    w = (0, s.useCallback)(() => {
                        h((e) => e + 1);
                    }, []);
                (0, s.useEffect)(() => {
                    const e = g.subscribe(w);
                    return () => {
                        "function" == typeof e && e();
                    };
                }, [g, w]);
                const k = (g.strDict ? g.strDict("scribe:context") : null) || {},
                    j = !!g.bool && (g.bool("scribe:appear") ?? g.bool("scribe:visibility") ?? !1),
                    I = !!g.bool && (g.bool("scribe:linger") ?? !1);
                (0, s.useEffect)(() => {
                    if ("undefined" != typeof IntersectionObserver && I && y.current) {
                        let e = -1;
                        const t = new IntersectionObserver(
                            (r) => {
                                const n = r[0]?.isIntersecting;
                                n && -1 === e ? (e = Date.now()) : !n && y.current && -1 !== e && (Date.now() - e > 2e3 ? (d.addToScribeQueue && d.addToScribeQueue(f), _(!0)) : (e = -1)), !n && v && y.current && t.unobserve(y.current);
                            },
                            { threshold: 0.5 },
                        );
                        return (
                            t.observe(y.current),
                            () => {
                                y.current && t.unobserve(y.current);
                            }
                        );
                    }
                    return () => {};
                }, [I, v, f, d]);
                const x = k ? { ...f, ...k } : f;
                j && r.scribe(l("show", x));
                const S = g
                    .mods()
                    .map((e) => {
                        const [t, ...r] = e;
                        return void 0 !== t && (0, a.r)(t, r), r.map((e) => `j${e.toString(36)}${t}`).join(" ");
                    })
                    .join(" ");
                return (0, n.jsx)(u.Provider, { value: x, children: (0, n.jsx)(b, { el: e, p: g, mods: S }) });
            }
        },
        498348: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(552322),
                s = r(373461),
                o = r(608222),
                c = r(202784),
                a = r(988678);
            function i({ r: e, jfPath: t, analytics: r }) {
                const i = (0, c.useRef)();
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
                const u = (0, c.useCallback)(() => {
                    try {
                        if (0 !== (e.getScribeQueue?.() || []).length) {
                            const t = e.getScribeQueue?.() || [];
                            r?.scribe && t.length && (r.scribe({ action: "linger" }, { items: JSON.stringify(t) }), e.clearScribeQueue?.());
                        }
                        i.current = setTimeout(() => {
                            u();
                        }, 1e3);
                    } catch (e) {}
                }, [e, r]);
                return (
                    (0, c.useEffect)(() => {
                        try {
                            u();
                        } catch (e) {}
                        return () => {
                            i.current && clearTimeout(i.current);
                        };
                    }, [u]),
                    (0, n.jsxs)(o.N, { runtime: e, analytics: r, children: [(0, n.jsx)(s.Z, { url: t }), (0, n.jsx)(a.Z, {})] })
                );
            }
        },
        608222: (e, t, r) => {
            r.d(t, { N: () => c, o: () => a });
            var n = r(552322),
                s = r(202784);
            const o = (0, s.createContext)(null),
                c = ({ children: e, runtime: t, analytics: r }) => {
                    const [c, a] = (0, s.useState)(t),
                        [i, u] = (0, s.useState)(r);
                    return (0, n.jsx)(o.Provider, { value: { Runtime: c, setRuntime: a, Analytics: i, setAnalytics: u }, children: e });
                },
                a = () => (0, s.useContext)(o);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2652b27c.a088b1ca.js.map
