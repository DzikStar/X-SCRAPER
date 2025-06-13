"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-694f31ec"],
    {
        49710: (e, t, r) => {
            r.d(t, { G: () => c });
            var n = r(424012),
                s = r(957167),
                o = r(417963);
            const a = (e) => {
                const t = new Map(),
                    r = [],
                    a = [],
                    c = {},
                    i = { addToast: () => {}, removeToast: () => {}, setAddToToastQueue: () => {}, setRemoveFromToastQueue: () => {} },
                    u = (e, r, o) => {
                        const [a, c] = e;
                        switch (a) {
                            case n.fx.atom:
                            case n.fx.atom_with_root: {
                                const e = (0, s.cn)(r, o, c.id);
                                return t.set(c.id, e), e;
                            }
                            case n.fx.str_key: {
                                const e = (0, s.cn)([n._I.str_dict, new Map()], o, c.id);
                                return t.set(c.id, e), (0, s.RY)(e, c.key);
                            }
                            case n.fx.url_param: {
                                const e = (0, s.cn)([n._I.url, ""], o, c.id);
                                return t.set(c.id, e), (0, s.xM)(e, c.key);
                            }
                            case n.fx.bag_key: {
                                const e = (0, s.cn)([n._I.bag, new Map()], o, c.id);
                                return t.set(c.id, e), e;
                            }
                        }
                    },
                    l = (e) => {
                        const [r, o] = e,
                            a = t.get(o.id);
                        if (a)
                            switch (r) {
                                case n.fx.atom:
                                case n.fx.atom_with_root:
                                    return a;
                                case n.fx.str_key:
                                    return (0, s.RY)(a, o.key);
                                case n.fx.url_param:
                                    return (0, s.xM)(a, o.key);
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
                        a.push(e);
                    },
                    removeCover: () => {
                        if (a.length <= 0) return !1;
                        const e = a.pop();
                        return e && e(), !0;
                    },
                    addComponentOverride: (e) => {
                        const t = {};
                        for (const [r, n] of Object.entries(e)) {
                            t[(0, o.$)(r)] = n;
                        }
                        Object.assign(c, t);
                    },
                    getComponentOverride: () => c,
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
            function c(e, t = {}) {
                return i(a(e), t);
            }
            const i = (e, t) => Object.entries(t).reduce((e, [t, r]) => ({ ...e, [t]: r && "object" == typeof r ? i(e[t], r) : (r ?? e[t]) }), { ...e });
        },
        957167: (e, t, r) => {
            r.d(t, { Ld: () => o, RY: () => a, cn: () => s, ox: () => i, xM: () => c });
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
                a = (e, t) => {
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
                c = (e, t) => {
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
            r.d(t, { v: () => c, K: () => i });
            var n = r(424012),
                s = r(648385);
            function o(e, t, r) {
                const [a, c] = e;
                switch (a) {
                    case n.je.change:
                        !(function (e, t) {
                            const [r, s] = e,
                                o = Number(new Date()),
                                a = (e) => t.atom(e),
                                c = (e, t) => {
                                    const r = a(e);
                                    if (!r || void 0 === r.value) return;
                                    !1 !== t(r.value) && r.set(t(r.value), o);
                                },
                                i = (e) => t.prop(e);
                            switch (r) {
                                case n.aw.null:
                                    a(s)?.set(void 0, o);
                                    break;
                                case n.aw.set: {
                                    const [e, r] = s;
                                    t.runtime.atoms.getOrCreate(e, i(r), o, !1);
                                    break;
                                }
                                case n.aw.inc: {
                                    const [e, t] = s;
                                    c(e, (e) => (e[0] === n._I.int || e[0] === n._I.f64) && [e[0], e[1] + t]);
                                    break;
                                }
                                case n.aw.str_append: {
                                    const [e, t] = s;
                                    c(e, (e) => e[0] === n._I.str && [e[0], e[1] + t]);
                                    break;
                                }
                                case n.aw.toggle: {
                                    const [e, t] = s;
                                    c(e, (e) => e[0] === n._I.bool && [e[0], !e[1]]);
                                    break;
                                }
                            }
                        })(c, t);
                        break;
                    case n.je.multi:
                        c.forEach((e) => o(e, t, r));
                        break;
                    case n.je.post_request:
                        {
                            const { url: e, body: n, complete: a, error: i, optimistic: u } = c,
                                l = (0, s.X)(t.prop(e), t),
                                d = (0, s.X)(t.prop(n), t),
                                f = new Map(Object.entries(d ?? {}));
                            l &&
                                d &&
                                (u && o(u, t, r),
                                t.runtime.net.httpPOST(l, f).then((e) => {
                                    e.ok ? a && o(a, t, r) : i && o(i, t, r);
                                }));
                        }
                        break;
                    case n.je.navigate:
                        {
                            const [e, r] = c;
                            switch (e) {
                                case n.J.page: {
                                    const { url: e, replace: n } = r,
                                        o = "/i/jf" + (0, s.X)(t.prop(e), t);
                                    o && (n ? t.runtime.history.replace(o) : t.runtime.history.push(o));
                                    break;
                                }
                                case n.J.page_reset_to: {
                                    const { url: e, replace: n } = r,
                                        o = (0, s.X)(t.prop(e), t),
                                        a = o ? (o.includes("__escape_jf__=1") ? o.replace("__escape_jf__=1", "") : "/i/jf" + o) : void 0;
                                    a && (n ? location.replace(a) : (location.href = a));
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
                            const { type: e, ref: n } = c,
                                o = (0, s.X)(t.prop(n), t);
                            r?.[e]?.(o);
                        }
                        break;
                    case n.je.confirm:
                        break;
                    case n.je.present: {
                        const { ref: e, type: r } = c,
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
            var a = r(957167);
            function c(e) {
                const t = {};
                let r = {};
                const s = new Map(),
                    c = (0, a.cn)(void 0),
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
                            [a, c] = t;
                        switch (a) {
                            case n._I.atom:
                                r.push(c.ref);
                                break;
                            case n._I.predicate:
                                o(c);
                        }
                        r.length && s.set(e, r);
                    };
                function u(s, o, c) {
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
                        const c = o[s.prop_ref];
                        if (c) {
                            if (s.ref[0] !== n.fx.atom) {
                                const e = o[s.ref[1].root];
                                if (!e) continue;
                                const [t, r] = e;
                                if (t !== n._I.atom) continue;
                                const c = o[r.prop_ref];
                                if (!c) continue;
                                l[(0, a.ox)(r.ref)] = [r.ref, c, r.is_default];
                            }
                            u[(0, a.ox)(s.ref)] = [s.ref, c, s.is_default];
                        }
                    }
                    for (const e in l) delete u[e];
                    for (const [, [t, r, n]] of Object.entries(l).concat(Object.entries(u))) e.atoms.getOrCreate(t, r, c, n);
                }
                function l(e) {
                    c.set(t[e]);
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
                            return c;
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
                const r = c(e);
                return r.session().onChunk(t), r;
            }
        },
        648385: (e, t, r) => {
            r.d(t, { X: () => f, t: () => d });
            var n = r(417963),
                s = r(424012),
                o = r(957167);
            function a(e, t) {
                return t.atom(e)?.value;
            }
            const c = (e, t) => {
                if (e === t) return !0;
                if (null == e || null == t) return !1;
                if (Array.isArray(e) && Array.isArray(t)) return e.length === t.length && e.every((e, r) => c(e, t[r]));
                if ("object" == typeof e && "object" == typeof t) {
                    const r = Object.keys(e);
                    return r.length === Object.keys(t).length && r.every((r) => c(e[r], t[r]));
                }
                return !1;
            };
            function i(e, t) {
                const [r, n] = e;
                switch (r) {
                    case s.RB.null: {
                        const { ref: e } = n;
                        return void 0 === a(e, t);
                    }
                    case s.RB.is: {
                        const { ref: e, value: r } = n;
                        return c(a(e, t), t.prop(r));
                    }
                    case s.RB.is_not: {
                        const { ref: e, value: r } = n;
                        return !c(a(e, t), t.prop(r));
                    }
                    case s.RB.in: {
                        const { ref: e, value: r } = n,
                            s = a(e, t);
                        return r.some((e) => c(s, t.prop(e)));
                    }
                    case s.RB.not_in: {
                        const { ref: e, value: r } = n,
                            s = a(e, t);
                        return r.every((e) => !c(s, t.prop(e)));
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
                        return void 0 !== a(e, t);
                    }
                }
            }
            const u = (e, t, r) => {
                    const n = a(e, t)?.[1];
                    return "string" == typeof n && r(n);
                },
                l = (e, t, r) => {
                    const n = a(e, t)?.[1];
                    return "number" == typeof n && r(n);
                },
                d = (e, t = 0, r) => {
                    const a = (t) => {
                            const s = e?.props.get((0, n.$)(t)),
                                o = e?.dom?.prop(s);
                            return e && e.dom ? f(o, e.dom, r) : void 0;
                        },
                        c = (t, r) => {
                            const o = e?.props.get((0, n.$)(t)),
                                a = e?.dom?.prop(o);
                            a?.[0] === s._I.atom && e?.dom?.atom(a[1].ref)?.set(r);
                        };
                    return {
                        str: (e) => a(e),
                        setStr: (e, t) => c(e, [s._I.str, t]),
                        int: (e) => a(e),
                        setInt: (e, t) => c(e, [s._I.int, t]),
                        f32: (e) => a(e),
                        setF32: (e, t) => c(e, [s._I.f64, t]),
                        bool: (e) => a(e),
                        setBool: (e, t) => c(e, [s._I.bool, t]),
                        richtext: (e) => a(e),
                        url: (e) => a(e),
                        date: (e) => a(e),
                        element: (e) => a(e),
                        elements: (e) => a(e),
                        id: (e) => a(e),
                        enum: (e) => a(e),
                        rawEnum: (e) => a(e),
                        strDict: (e) => a(e),
                        setStrDict: (e, t) => c(e, [s._I.str_dict, new Map(Object.entries(t))]),
                        action: (e) => a(e),
                        mods: () => a("mod") ?? [],
                        strList: (e) => a(e),
                        setStrLit: (e, t) => c(e, [s._I.str_list, t]),
                        intList: (e) => a(e),
                        setIntLit: (e, t) => c(e, [s._I.int_list, t]),
                        f32List: (e) => a(e),
                        setF32Lit: (e, t) => c(e, [s._I.f64_list, t]),
                        boolList: (e) => a(e),
                        setBoolLit: (e, t) => c(e, [s._I.bool_list, t]),
                        subscribe: (t) => {
                            const r = e ? Array.from(e.props.values()) : [];
                            return (0, o.Ld)(e?.dom?.allAtoms(r) || [], t);
                        },
                        set: c,
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
                s = (e) => 0 | a(o(e)),
                o = (e) => new TextEncoder().encode(e),
                a =
                    ((c = (e, t) => (65535 & e) * t + ((((e >>> 16) * t) & 65535) << 16)),
                    (i = (e, t) => (e << t) | (e >>> (32 - t))),
                    (u = 3432918353),
                    (l = 461845907),
                    (e, t = 0) => {
                        t = t || 0;
                        for (var r, n = e.length, s = n % 4, o = n - s, a = t, d = 0, f = 0; f < o; f += 4) (d = (255 & e[f]) | ((255 & e[f + 1]) << 8) | ((255 & e[f + 2]) << 16) | ((255 & e[f + 3]) << 24)), (d = c(d, u)), (d = i(d, 15)), (d = c(d, l)), (a = i((a ^= d), 13)), (a = c(a, 5) + 3864292196);
                        switch (((d = 0), s)) {
                            case 3:
                                d ^= (255 & e[f + 2]) << 16;
                            case 2:
                                d ^= (255 & e[f + 1]) << 8;
                            case 1:
                                (d ^= 255 & e[f]), (d = c(d, u)), (d = i(d, 15)), (a ^= d = c(d, l));
                        }
                        return (r = a ^= n), (r = c((r ^= r >>> 16), 2246822507)), (a = (r = c((r ^= r >>> 13), 3266489909)) ^ (r >>> 16)) >>> 0;
                    });
            var c, i, u, l;
        },
        752659: (e, t, r) => {
            r.d(t, { $3: () => a.$, GZ: () => n.G, KM: () => s.K, qB: () => a.q, tJ: () => o.t, vz: () => s.v });
            var n = r(49710),
                s = r(787298),
                o = r(648385),
                a = r(417963);
        },
        373461: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(552322),
                s = r(202784),
                o = r(315198),
                a = r(787298),
                c = r(109195),
                i = r(608222);
            const u = new Map();
            function l({ url: e, placeholder: t }) {
                const r = (0, i.oG)(),
                    [l, d] = (0, s.useState)(!0),
                    [f, p] = (0, s.useState)(null),
                    [b, m] = (0, s.useState)(null),
                    h = (0, s.useRef)(e);
                if (!r) return (0, n.jsx)("div", { children: "Runtime context not available" });
                const { Runtime: v } = r;
                if (!v) return (0, n.jsx)("div", { children: "Runtime not available" });
                const _ = (0, a.v)(v),
                    y = async (e) => {
                        d(!0);
                        try {
                            const t = _.session(),
                                r = u.get(e);
                            if (r) {
                                const e = (function (e) {
                                    const t = atob(e),
                                        r = new Uint8Array(t.length);
                                    for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                                    return r.buffer;
                                })(r);
                                t.onChunk(new Uint8Array(e)), m(_.root.value), d(!1);
                            }
                            const n = await v.net.httpGet(e);
                            n.data &&
                                h.current === e &&
                                (t.onChunk(new Uint8Array(n.data)),
                                u.set(
                                    e,
                                    (function (e) {
                                        const t = new Uint8Array(e),
                                            r = Array.from(t)
                                                .map((e) => String.fromCharCode(e))
                                                .join("");
                                        return btoa(r);
                                    })(n.data),
                                ),
                                m(_.root.value),
                                d(!1));
                        } catch (e) {
                            d(!1), p(e instanceof Error ? e : new Error(String(e)));
                        }
                    };
                return (
                    (0, s.useEffect)(() => {
                        e && ((h.current = e), y(e));
                    }, [e]),
                    l ? (t ?? (0, n.jsx)("div", { className: "p-4", children: (0, n.jsx)(o.A, { size: 20 }) })) : f ? (0, n.jsxs)("div", { children: ["Error: ", f.message] }) : (0, n.jsx)(c.Z, { el: b })
                );
            }
        },
        109195: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(552322),
                s = r(202784),
                o = r(752659),
                a = r(608222),
                c = r(907490),
                i = r(705156);
            const u = (0, s.createContext)({}),
                l = (e, t) => ({ action: e, ...t });
            function d({ el: e }) {
                const t = (0, a.oG)(),
                    r = t?.Analytics;
                if (!t || !t.Runtime) return (0, n.jsx)("div", { children: "Runtime not found" });
                const d = t.Runtime,
                    f = (0, s.useContext)(u) || {},
                    p = d.getComponentOverride(),
                    b = 24045 === e.type || -22153 === e.type ? (0, i.O)(e) : p[e.type] ? p[e.type] : (0, i.O)(e),
                    [m, h] = (0, s.useState)(0),
                    [v, _] = (0, s.useState)(!1),
                    y = (0, s.useRef)(null),
                    w = (0, s.useMemo)(() => (0, o.tJ)(e, m), [e, m]),
                    g = (0, s.useCallback)(() => {
                        h((e) => e + 1);
                    }, []);
                (0, s.useEffect)(() => {
                    const e = w.subscribe(g);
                    return () => {
                        "function" == typeof e && e();
                    };
                }, [w, g]);
                const k = (w.strDict ? w.strDict("scribe:context") : null) || {},
                    j = !!w.bool && (w.bool("scribe:appear") ?? w.bool("scribe:visibility") ?? !1),
                    x = !!w.bool && (w.bool("scribe:linger") ?? !1);
                (0, s.useEffect)(() => {
                    if ("undefined" != typeof IntersectionObserver && x && y.current) {
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
                }, [x, v, f, d]);
                const I = k ? { ...f, ...k } : f;
                j && r.scribe(l("show", I));
                const R = w
                    .mods()
                    .map((e) => {
                        const [t, ...r] = e;
                        return void 0 !== t && (0, c.r)(t, r), r.map((e) => `j${e.toString(36)}${t}`).join(" ");
                    })
                    .join(" ");
                return (0, n.jsx)(u.Provider, { value: I, children: (0, n.jsx)(b, { el: e, p: w, mods: R }) });
            }
        },
        498348: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(552322),
                s = r(202784),
                o = r(373461),
                a = r(988678),
                c = r(554747),
                i = r(608222);
            function u({ jfPath: e, analytics: t, className: r, style: u }) {
                const l = (0, s.useRef)(),
                    d = (0, i.oG)().Runtime;
                d.scribeQueue || (d.scribeQueue = []),
                    d.getScribeQueue || (d.getScribeQueue = () => d.scribeQueue || []),
                    d.clearScribeQueue ||
                        (d.clearScribeQueue = () => {
                            d.scribeQueue && (d.scribeQueue.length = 0);
                        }),
                    d.addToScribeQueue ||
                        (d.addToScribeQueue = (e) => {
                            d.scribeQueue && d.scribeQueue.push(e);
                        });
                const f = (0, s.useCallback)(() => {
                    try {
                        if (0 !== (d.getScribeQueue?.() || []).length) {
                            const e = d.getScribeQueue?.() || [];
                            t?.scribe && e.length && (t.scribe({ action: "linger" }, { items: JSON.stringify(e) }), d.clearScribeQueue?.());
                        }
                        l.current = setTimeout(() => {
                            f();
                        }, 1e3);
                    } catch (e) {}
                }, [d, t]);
                return (
                    (0, s.useEffect)(() => {
                        try {
                            f();
                        } catch (e) {}
                        return () => {
                            l.current && clearTimeout(l.current);
                        };
                    }, [f]),
                    (0, n.jsxs)(c.Z, { className: r, style: u, children: [(0, n.jsx)(o.Z, { url: e }), (0, n.jsx)(a.Z, {})] })
                );
            }
        },
        685940: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(552322),
                s = r(202784),
                o = r(315198),
                a = r(787298),
                c = r(109195),
                i = r(554747);
            function u({ payload: e, runtime: t, placeholder: r }) {
                const [u, l] = (0, s.useState)(!0),
                    [d, f] = (0, s.useState)(null),
                    [p, b] = (0, s.useState)(null);
                if (!t) return (0, n.jsx)("div", { children: "Runtime not available" });
                const m = (0, a.v)(t),
                    h = async (e) => {
                        l(!0), f(null);
                        try {
                            const t = m.session(),
                                r = (function (e) {
                                    const t = atob(e),
                                        r = new Uint8Array(t.length);
                                    for (let e = 0; e < t.length; e++) r[e] = t.charCodeAt(e);
                                    return r.buffer;
                                })(e);
                            t.onChunk(new Uint8Array(r)), b(m.root.value), l(!1);
                        } catch (e) {
                            l(!1), f(e instanceof Error ? e : new Error(String(e)));
                        }
                    };
                return (
                    (0, s.useEffect)(() => {
                        e && h(e);
                    }, [e]),
                    u ? (r ?? (0, n.jsx)("div", { className: "p-4", children: (0, n.jsx)(o.A, { size: 20 }) })) : d ? (0, n.jsx)("div", {}) : (0, n.jsx)(i.Z, { className: "", children: (0, n.jsx)(c.Z, { el: p }) })
                );
            }
        },
        554747: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            function s({ children: e, className: t = "", ...r }) {
                return (0, n.jsx)("div", { className: `w-full h-full jetfuel-style-root ${t}`, ...r, children: e });
            }
        },
        608222: (e, t, r) => {
            r.d(t, { N_: () => c, bk: () => u, oG: () => i });
            var n = r(552322),
                s = r(202784),
                o = r(49710);
            const a = (0, s.createContext)({ Runtime: (0, o.G)(""), Analytics: null }),
                c = ({ children: e, runtime: t, analytics: r }) => (0, n.jsx)(a.Provider, { value: { Runtime: t, Analytics: r }, children: e }),
                i = () => (0, s.useContext)(a),
                u = () => (0, s.useContext)(a);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame~-694f31ec.b426539a.js.map
