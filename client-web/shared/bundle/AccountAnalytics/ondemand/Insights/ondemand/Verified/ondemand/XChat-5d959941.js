"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941"],
    {
        446368: (e, t, r) => {
            r.d(t, { ng: () => g, UH: () => l, z$: () => v, $8: () => o });
            var n = r(552322),
                s = r(202784);
            const i = (0, s.createContext)(void 0);
            function o() {
                const e = (0, s.useContext)(i);
                if (!e) throw new Error("useAnalytics must be used within an AnalyticsProvider");
                return e;
            }
            function l({ analytics: e, children: t }) {
                return (0, n.jsx)(i.Provider, { value: e, children: t });
            }
            const c = "undefined" == typeof window,
                a = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
            async function u(e, t = {}) {
                const r = new URL(e, "https://api.x.com"),
                    n = t?.headers ? new Headers(t.headers) : new Headers();
                n.set("Accept", "application/json"), n.set("Authorization", `Bearer ${a}`);
                const s = (function (e = "") {
                    const t = {};
                    return (
                        e.split(";").forEach((e) => {
                            const r = e.split("=");
                            2 === r.length && (t[decodeURIComponent(r[0].trim())] = decodeURIComponent(r[1].trim()));
                        }),
                        t
                    );
                })(c ? (n.get("cookie") ?? "") : document.cookie);
                s.auth_token && n.set("x-twitter-auth-type", "OAuth2Session"), s.ct0 && n.set("x-csrf-token", s.ct0);
                const i = await fetch(r, { ...t, credentials: "include", headers: n, signal: t.signal ?? AbortSignal.timeout(5e3) });
                if (!i.ok) throw new Error(`Http status ${i.status}: ${i.statusText}`);
                return i;
            }
            var d = r(298357),
                f = r.n(d),
                h = r(834406);
            class p {
                buffer = [];
                namespace;
                sequenceStartTimestamp;
                sequenceNumber = 0;
                constructor(e) {
                    (this.namespace = e),
                        "undefined" != typeof window &&
                            (document.addEventListener("visibilitychange", () => {
                                "hidden" === document.visibilityState && this.flushImmediate(!0);
                            }),
                            window.addEventListener("pagehide", () => {
                                this.flushImmediate(!0);
                            }),
                            window.addEventListener("logout", () => {
                                this.flushImmediate(!0);
                            }));
                }
                scribe(e, t) {
                    if (e.client && e.client !== this.namespace.client) throw new Error(`Invalid client segment: expected ${this.namespace.client} but got ${e.client}`);
                    const r = { ...this.namespace, ...e };
                    if (!r.client || !r.page || !r.action) throw new Error(`Invalid scribe namespace ${JSON.stringify(r)}`);
                    const n = Date.now();
                    this.sequenceStartTimestamp || (this.sequenceStartTimestamp = n);
                    const s = { ...t, _category_: "client_event", client_app_id: t?.client_app_id ?? h.env.NEXT_PUBLIC_APP_ID ?? h.env.APP_ID, client_event_sequence_number: ++this.sequenceNumber, client_event_sequence_start_timestamp: this.sequenceStartTimestamp, event_namespace: r, format_version: 2, triggered_on: n };
                    this.buffer.push(s), this.flush();
                }
                flush = "undefined" != typeof window ? f()(this.flushImmediate, 15e3, { trailing: !0 }) : this.flushImmediate;
                flushImmediate(e) {
                    const t = this.buffer.splice(0, this.buffer.length);
                    t.length && u("/1.1/jot/client_event.json", { body: new URLSearchParams({ debug: "true", log: JSON.stringify(t) }), keepalive: e, method: "POST" });
                }
            }
            const m = (0, s.createContext)({ namespace: { client: "m5" } });
            function g({ children: e, ...t }) {
                const r = { ...(0, s.useContext)(m).namespace, ...t.namespace };
                return (0, n.jsx)(m.Provider, { value: { namespace: r }, children: e });
            }
            function v() {
                const e = (0, s.useContext)(m);
                return (0, s.useMemo)(() => new p(e.namespace), [e.namespace]);
            }
        },
        125959: (e, t, r) => {
            function n(e = [], t = (e, t) => fetch(e, t)) {
                return e.reduceRight((e, t) => (r, n) => t(e, r, n), t);
            }
            r.d(t, { g: () => n });
        },
        918962: (e, t, r) => {
            r.d(t, { l: () => s });
            var n = r(381415);
            const s = (e, t, r) => {
                const s = (function (e) {
                        return e instanceof URL ? e : new URL(e, "https://api.x.com");
                    })(t),
                    i = new Headers(r?.headers);
                if (
                    (function (e) {
                        return "api.x.com" === e.hostname || e.href.startsWith("https://x.com/i/api");
                    })(s)
                ) {
                    const e = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
                    if (!e) throw new Error("Bearer token is required");
                    i.set("Authorization", `Bearer ${e}`);
                    const t = i.get("cookie") ?? ("undefined" != typeof document ? document.cookie : void 0);
                    if (t) {
                        const e = (0, n.Qc)(t);
                        e.auth_token && i.set("x-twitter-auth-type", "OAuth2Session"), e.ct0 && i.set("x-csrf-token", e.ct0);
                    }
                }
                return e(s, { ...r, credentials: "include", headers: i });
            };
        },
        431882: (e, t, r) => {
            r.d(t, { Yd: () => i, kg: () => u, pp: () => c });
            var n = r(384099),
                s = r.n(n);
            class i {
                logger = s()({ level: "debug" });
                plugins;
                constructor(e) {
                    this.plugins = e;
                }
                log(e, t, r, n) {
                    this.logger[e](t, r?.stack, n);
                    const s = { level: e, message: t, error: r, context: n };
                    for (const e of this.plugins) e.log(s);
                }
                error(e, t, r) {
                    this.log("error", e, t, r);
                }
                info(e, t) {
                    this.log("info", e, void 0, t);
                }
                warn(e, t) {
                    this.log("warn", e, void 0, t);
                }
            }
            var o = r(125959),
                l = r(918962);
            const c = (e = "responsive_web") => {
                    const t = (0, o.g)([l.l]);
                    let r;
                    return (
                        (r = "prod"),
                        {
                            async log({ context: n, error: s, level: i, message: o }) {
                                const l = new Date(),
                                    c = { id: l.getTime(), index: `${e}_${r}${"error" === i ? "" : "_log"}`, source: { "@timestamp": l.toISOString(), message: o }, type: i.toUpperCase(), ...n };
                                "undefined" != typeof window && (c.source.url = window.location.href), s instanceof Error && ((c.source.error_details = s.stack), (c.tag = s.name));
                                try {
                                    await t("/1.1/jot/error_log.json", { body: new URLSearchParams({ log: JSON.stringify(c) }), method: "POST" });
                                } catch (s) {}
                            },
                        }
                    );
                },
                a = [];
            a.push(c());
            const u = new i(a);
        },
        381415: (e, t) => {
            t.Qc = function (e, t) {
                const r = new l(),
                    n = e.length;
                if (n < 2) return r;
                const s = t?.decode || u;
                let i = 0;
                do {
                    const t = e.indexOf("=", i);
                    if (-1 === t) break;
                    const o = e.indexOf(";", i),
                        l = -1 === o ? n : o;
                    if (t > l) {
                        i = e.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const u = c(e, i, t),
                        d = a(e, t, u),
                        f = e.slice(u, d);
                    if (void 0 === r[f]) {
                        let n = c(e, t + 1, l),
                            i = a(e, l, n);
                        const o = s(e.slice(n, i));
                        r[f] = o;
                    }
                    i = l + 1;
                } while (i < n);
                return r;
            };
            const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                n = /^[\u0021-\u003A\u003C-\u007E]*$/,
                s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                l = (() => {
                    const e = function () {};
                    return (e.prototype = Object.create(null)), e;
                })();
            function c(e, t, r) {
                do {
                    const r = e.charCodeAt(t);
                    if (32 !== r && 9 !== r) return t;
                } while (++t < r);
                return r;
            }
            function a(e, t, r) {
                for (; t > r; ) {
                    const r = e.charCodeAt(--t);
                    if (32 !== r && 9 !== r) return t + 1;
                }
                return r;
            }
            function u(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        560870: (e) => {
            function t(e) {
                try {
                    return JSON.stringify(e);
                } catch (e) {
                    return '"[Circular]"';
                }
            }
            e.exports = function (e, r, n) {
                var s = (n && n.stringify) || t;
                if ("object" == typeof e && null !== e) {
                    var i = r.length + 1;
                    if (1 === i) return e;
                    var o = new Array(i);
                    o[0] = s(e);
                    for (var l = 1; l < i; l++) o[l] = s(r[l]);
                    return o.join(" ");
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var a = "", u = 0, d = -1, f = (e && e.length) || 0, h = 0; h < f; ) {
                    if (37 === e.charCodeAt(h) && h + 1 < f) {
                        switch (((d = d > -1 ? d : 0), e.charCodeAt(h + 1))) {
                            case 100:
                            case 102:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                d < h && (a += e.slice(d, h)), (a += Number(r[u])), (d = h + 2), h++;
                                break;
                            case 105:
                                if (u >= c) break;
                                if (null == r[u]) break;
                                d < h && (a += e.slice(d, h)), (a += Math.floor(Number(r[u]))), (d = h + 2), h++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (u >= c) break;
                                if (void 0 === r[u]) break;
                                d < h && (a += e.slice(d, h));
                                var p = typeof r[u];
                                if ("string" === p) {
                                    (a += "'" + r[u] + "'"), (d = h + 2), h++;
                                    break;
                                }
                                if ("function" === p) {
                                    (a += r[u].name || "<anonymous>"), (d = h + 2), h++;
                                    break;
                                }
                                (a += s(r[u])), (d = h + 2), h++;
                                break;
                            case 115:
                                if (u >= c) break;
                                d < h && (a += e.slice(d, h)), (a += String(r[u])), (d = h + 2), h++;
                                break;
                            case 37:
                                d < h && (a += e.slice(d, h)), (a += "%"), (d = h + 2), h++, u--;
                        }
                        ++u;
                    }
                    ++h;
                }
                if (-1 === d) return e;
                d < f && (a += e.slice(d));
                return a;
            };
        },
        808744: (e, t, r) => {
            r.d(t, { f: () => j });
            var n = r(552322),
                s = r(446368),
                i = r(379651),
                o = r(905394),
                l = r(171774),
                c = r(202784),
                a = r(107267),
                u = r(727071);
            function d({ children: e }) {
                const t = (0, a.useLocation)(),
                    r = (0, a.useHistory)(),
                    s = (0, c.useMemo)(() => ({ pathname: t.pathname, search: t.search }), [t.pathname, t.search]),
                    i = (0, c.useMemo)(() => ({ getServerSnapshot: () => s, getSnapshot: () => s, subscribe: (e) => r.listen(e) }), [s, r]);
                return (0, n.jsx)(l.v, { ...i, children: e });
            }
            function f({ children: e }) {
                const t = (0, a.useHistory)(),
                    r = (0, c.useMemo)(() => ({ goBack: t.goBack, push: t.push, replace: t.replace }), [t]);
                return (0, n.jsx)(o.s, { navigate: r, children: e });
            }
            function h({ children: e }) {
                const t = (0, a.useParams)();
                return (0, n.jsx)(u.d, { useParams: () => t, children: e });
            }
            function p({ children: e }) {
                return (0, n.jsx)(f, { children: (0, n.jsx)(h, { children: (0, n.jsxs)(d, { children: [e, (0, n.jsx)(i.x, {})] }) }) });
            }
            var m = r(430962),
                g = r(625067);
            const v = "night_mode";
            const w = { 0: "light", 1: "dim", 2: "dark" },
                b = (Object.fromEntries(Object.entries(w).map(([e, t]) => [t, Number(e)])), () => (0, g.Qc)(document.cookie)[v]),
                x = (e) => {
                    const t = Number(e);
                    return w[t] ?? y();
                },
                y = () => ("undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
            function j({ analytics: e, children: t, i18nInput: r }) {
                return (
                    (0, c.useLayoutEffect)(() => {
                        const e = () => {
                            const e = x(b());
                            document.documentElement.dataset.theme = e;
                        };
                        e();
                        const t = window.matchMedia("(prefers-color-scheme: dark)");
                        return (
                            t.addEventListener("change", e),
                            () => {
                                t.removeEventListener("change", e);
                            }
                        );
                    }, []),
                    (0, n.jsx)(p, { children: (0, n.jsx)(m.TM, { i18nInput: r, children: (0, n.jsxs)(s.UH, { analytics: e, children: [t, (0, n.jsx)(i.x, {})] }) }) })
                );
            }
        },
        607499: (e, t, r) => {
            r.d(t, { S: () => d });
            var n = r(552322),
                s = r(431882),
                i = r(202784),
                o = r(455091),
                l = r(611105),
                c = r(332161),
                a = r(993165);
            function u({ message: e, retry: t }) {
                const { t: r } = (0, o.$G)();
                return (0, n.jsxs)("div", { className: "flex flex-col items-center justify-center gap-2 p-5", children: [(0, n.jsx)(c.x, { color: "gray700", children: e || r(t ? "Something went wrong. Try reloading." : "Something went wrong.") }), t && (0, n.jsx)(a.z, { icon: (0, n.jsx)(l.Z, {}), onClick: t, variant: "primaryFilled", children: r("Retry") })] });
            }
            class d extends i.Component {
                state = { error: null };
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    s.kg.error("Error boundary", e, { user_visible: !0 }), this.props.onError?.(e, t);
                }
                _retry() {
                    this.props.onRetry?.(), this.setState({ error: null });
                }
                render() {
                    const { children: e, fallback: t, message: r, onRetry: s } = this.props,
                        { error: i } = this.state;
                    return i ? (void 0 !== t ? t : (0, n.jsx)(u, { message: r, retry: s })) : e;
                }
            }
        },
        727071: (e, t, r) => {
            r.d(t, { U: () => l, d: () => o });
            var n = r(552322),
                s = r(202784);
            const i = (0, s.createContext)(void 0),
                o = ({ useParams: e, children: t }) => (0, n.jsx)(i.Provider, { value: e, children: t }),
                l = () => {
                    const e = (0, s.useContext)(i);
                    if (void 0 === e) throw new Error("useParams must be used within a ParamProvider");
                    return e();
                };
        },
        455091: (e, t, r) => {
            r.d(t, { $G: () => n.$G });
            var n = r(679816);
            r(552322), r(424991), r(963463), r(573936);
        },
        625067: (e, t) => {
            t.Qc = function (e, t) {
                const r = new l(),
                    n = e.length;
                if (n < 2) return r;
                const s = t?.decode || u;
                let i = 0;
                do {
                    const t = e.indexOf("=", i);
                    if (-1 === t) break;
                    const o = e.indexOf(";", i),
                        l = -1 === o ? n : o;
                    if (t > l) {
                        i = e.lastIndexOf(";", t - 1) + 1;
                        continue;
                    }
                    const u = c(e, i, t),
                        d = a(e, t, u),
                        f = e.slice(u, d);
                    if (void 0 === r[f]) {
                        let n = c(e, t + 1, l),
                            i = a(e, l, n);
                        const o = s(e.slice(n, i));
                        r[f] = o;
                    }
                    i = l + 1;
                } while (i < n);
                return r;
            };
            const r = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                n = /^[\u0021-\u003A\u003C-\u007E]*$/,
                s = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                o = Object.prototype.toString,
                l = (() => {
                    const e = function () {};
                    return (e.prototype = Object.create(null)), e;
                })();
            function c(e, t, r) {
                do {
                    const r = e.charCodeAt(t);
                    if (32 !== r && 9 !== r) return t;
                } while (++t < r);
                return r;
            }
            function a(e, t, r) {
                for (; t > r; ) {
                    const r = e.charCodeAt(--t);
                    if (32 !== r && 9 !== r) return t + 1;
                }
                return r;
            }
            function u(e) {
                if (-1 === e.indexOf("%")) return e;
                try {
                    return decodeURIComponent(e);
                } catch (t) {
                    return e;
                }
            }
        },
        699416: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z" }) });
        },
        907934: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-.25 10.48L10.5 17.5l-2-1.5v-3.5L7.5 9 5.03 7.59c1.42-2.24 3.89-3.75 6.72-3.84L11 6l-2 .5L8.5 9l5 1.5-1.75 1.73zM17 14v-3l-1.5-3 2.88-1.23c1.17 1.42 1.87 3.24 1.87 5.23 0 1.3-.3 2.52-.83 3.61L17 14z" }) });
        },
        89596: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M17.5 7H17v-.25c0-2.76-2.24-5-5-5s-5 2.24-5 5V7h-.5C5.12 7 4 8.12 4 9.5v9C4 19.88 5.12 21 6.5 21h11c1.39 0 2.5-1.12 2.5-2.5v-9C20 8.12 18.89 7 17.5 7zM13 14.73V17h-2v-2.27c-.59-.34-1-.99-1-1.73 0-1.1.9-2 2-2 1.11 0 2 .9 2 2 0 .74-.4 1.39-1 1.73zM15 7H9v-.25c0-1.66 1.35-3 3-3 1.66 0 3 1.34 3 3V7z" }) });
        },
        611105: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M12 4c-4.418 0-8 3.58-8 8s3.582 8 8 8c3.806 0 6.993-2.66 7.802-6.22l1.95.44C20.742 18.67 16.76 22 12 22 6.477 22 2 17.52 2 12S6.477 2 12 2c3.272 0 6.176 1.57 8 4V3.5h2v6h-6v-2h2.616C17.175 5.39 14.749 4 12 4z" }) });
        },
        913577: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, n.jsx)("path", { d: "M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z" }) });
        },
        101680: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsxs)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: [(0, n.jsxs)("linearGradient", { id: "a", gradientUnits: "userSpaceOnUse", x1: 4.411, x2: 18.083, y1: 2.495, y2: 21.508, children: [(0, n.jsx)("stop", { offset: 0, stopColor: "#f4e72a" }), (0, n.jsx)("stop", { offset: 0.539, stopColor: "#cd8105" }), (0, n.jsx)("stop", { offset: 0.68, stopColor: "#cb7b00" }), (0, n.jsx)("stop", { offset: 1, stopColor: "#f4ec26" }), (0, n.jsx)("stop", { offset: 1, stopColor: "#f4e72a" })] }), (0, n.jsxs)("linearGradient", { id: "b", gradientUnits: "userSpaceOnUse", x1: 5.355, x2: 16.361, y1: 3.395, y2: 19.133, children: [(0, n.jsx)("stop", { offset: 0, stopColor: "#f9e87f" }), (0, n.jsx)("stop", { offset: 0.406, stopColor: "#e2b719" }), (0, n.jsx)("stop", { offset: 0.989, stopColor: "#e2b719" })] }), (0, n.jsxs)("g", { clipRule: "evenodd", fillRule: "evenodd", children: [(0, n.jsx)("path", { d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#a)" }), (0, n.jsx)("path", { d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "url(#b)" }), (0, n.jsx)("path", { d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z", fill: "#d18800" })] })] });
        },
        490881: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, n.jsx)("path", { clipRule: "evenodd", d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z", fill: "#829aab", fillRule: "evenodd" }) });
        },
        808116: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(552322);
            const s = (e) => (0, n.jsx)("svg", { fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22", width: "1em", height: "1em", display: "flex", role: "img", ...e, children: (0, n.jsx)("path", { d: "M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" }) });
        },
        384099: (e, t, r) => {
            const n = r(560870);
            e.exports = d;
            const s =
                    (function () {
                        function e(e) {
                            return void 0 !== e && e;
                        }
                        try {
                            return (
                                "undefined" != typeof globalThis ||
                                    Object.defineProperty(Object.prototype, "globalThis", {
                                        get: function () {
                                            return delete Object.prototype.globalThis, (this.globalThis = this);
                                        },
                                        configurable: !0,
                                    }),
                                globalThis
                            );
                        } catch (t) {
                            return e(self) || e(window) || e(this) || {};
                        }
                    })().console || {},
                i = { mapHttpRequest: v, mapHttpResponse: v, wrapRequestSerializer: w, wrapResponseSerializer: w, wrapErrorSerializer: w, req: v, res: v, err: m, errWithCause: m };
            function o(e, t) {
                return "silent" === e ? 1 / 0 : t.levels.values[e];
            }
            const l = Symbol("pino.logFuncs"),
                c = Symbol("pino.hierarchy"),
                a = { error: "log", fatal: "error", warn: "error", info: "log", debug: "log", trace: "log" };
            function u(e, t) {
                const r = { logger: t, parent: e[c] };
                t[c] = r;
            }
            function d(e) {
                (e = e || {}).browser = e.browser || {};
                const t = e.browser.transmit;
                if (t && "function" != typeof t.send) throw Error("pino: transmit option must have a send function");
                const r = e.browser.write || s;
                e.browser.write && (e.browser.asObject = !0);
                const n = e.serializers || {},
                    i = (function (e, t) {
                        if (Array.isArray(e))
                            return e.filter(function (e) {
                                return "!stdSerializers.err" !== e;
                            });
                        return !0 === e && Object.keys(t);
                    })(e.browser.serialize, n);
                let c = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (c = !1);
                const m = Object.keys(e.customLevels || {}),
                    v = ["error", "fatal", "warn", "info", "debug", "trace"].concat(m);
                "function" == typeof r &&
                    v.forEach(function (e) {
                        r[e] = r;
                    }),
                    (!1 === e.enabled || e.browser.disabled) && (e.level = "silent");
                const w = e.level || "info",
                    x = Object.create(r);
                x.log || (x.log = b),
                    (function (e, t, r) {
                        const n = {};
                        t.forEach((e) => {
                            n[e] = r[e] ? r[e] : s[e] || s[a[e] || "log"] || b;
                        }),
                            (e[l] = n);
                    })(x, v, r),
                    u({}, x),
                    Object.defineProperty(x, "levelVal", {
                        get: function () {
                            return o(this.level, this);
                        },
                    }),
                    Object.defineProperty(x, "level", {
                        get: function () {
                            return this._level;
                        },
                        set: function (e) {
                            if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                            (this._level = e),
                                f(this, y, x, "error"),
                                f(this, y, x, "fatal"),
                                f(this, y, x, "warn"),
                                f(this, y, x, "info"),
                                f(this, y, x, "debug"),
                                f(this, y, x, "trace"),
                                m.forEach((e) => {
                                    f(this, y, x, e);
                                });
                        },
                    });
                const y = { transmit: t, serialize: i, asObject: e.browser.asObject, asObjectBindingsOnly: e.browser.asObjectBindingsOnly, formatters: e.browser.formatters, levels: v, timestamp: g(e), messageKey: e.messageKey || "msg", onChild: e.onChild || b };
                function j(r, s, o) {
                    if (!s) throw new Error("missing bindings for child Pino");
                    (o = o || {}), i && s.serializers && (o.serializers = s.serializers);
                    const l = o.serializers;
                    if (i && l) {
                        var c = Object.assign({}, n, l),
                            a = !0 === e.browser.serialize ? Object.keys(c) : i;
                        delete s.serializers, h([s], a, c, this._stdErrSerialize);
                    }
                    function d(e) {
                        (this._childLevel = 1 + (0 | e._childLevel)), (this.bindings = s), c && ((this.serializers = c), (this._serialize = a)), t && (this._logEvent = p([].concat(e._logEvent.bindings, s)));
                    }
                    d.prototype = this;
                    const f = new d(this);
                    return (
                        u(this, f),
                        (f.child = function (...e) {
                            return j.call(this, r, ...e);
                        }),
                        (f.level = o.level || this.level),
                        r.onChild(f),
                        f
                    );
                }
                return (
                    (x.levels = (function (e) {
                        const t = e.customLevels || {},
                            r = Object.assign({}, d.levels.values, t),
                            n = Object.assign(
                                {},
                                d.levels.labels,
                                (function (e) {
                                    const t = {};
                                    return (
                                        Object.keys(e).forEach(function (r) {
                                            t[e[r]] = r;
                                        }),
                                        t
                                    );
                                })(t),
                            );
                        return { values: r, labels: n };
                    })(e)),
                    (x.level = w),
                    (x.isLevelEnabled = function (e) {
                        return !!this.levels.values[e] && this.levels.values[e] >= this.levels.values[this.level];
                    }),
                    (x.setMaxListeners = x.getMaxListeners = x.emit = x.addListener = x.on = x.prependListener = x.once = x.prependOnceListener = x.removeListener = x.removeAllListeners = x.listeners = x.listenerCount = x.eventNames = x.write = x.flush = b),
                    (x.serializers = n),
                    (x._serialize = i),
                    (x._stdErrSerialize = c),
                    (x.child = function (...e) {
                        return j.call(this, y, ...e);
                    }),
                    t && (x._logEvent = p()),
                    x
                );
            }
            function f(e, t, r, i) {
                if ((Object.defineProperty(e, i, { value: o(e.level, r) > o(i, r) ? b : r[l][i], writable: !0, enumerable: !0, configurable: !0 }), e[i] === b)) {
                    if (!t.transmit) return;
                    const n = o(t.transmit.level || e.level, r);
                    if (o(i, r) < n) return;
                }
                e[i] = (function (e, t, r, i) {
                    return (
                        (c = e[l][i]),
                        function () {
                            const l = t.timestamp(),
                                a = new Array(arguments.length),
                                u = Object.getPrototypeOf && Object.getPrototypeOf(this) === s ? s : this;
                            for (var d = 0; d < a.length; d++) a[d] = arguments[d];
                            var f = !1;
                            if (
                                (t.serialize && (h(a, this._serialize, this.serializers, this._stdErrSerialize), (f = !0)),
                                t.asObject || t.formatters
                                    ? c.call(
                                          u,
                                          ...(function (e, t, r, s, i) {
                                              const { level: o, log: l = (e) => e } = i.formatters || {},
                                                  c = r.slice();
                                              let a = c[0];
                                              const u = {};
                                              let d = 1 + (0 | e._childLevel);
                                              if ((d < 1 && (d = 1), s && (u.time = s), o)) {
                                                  const r = o(t, e.levels.values[t]);
                                                  Object.assign(u, r);
                                              } else u.level = e.levels.values[t];
                                              if (i.asObjectBindingsOnly) {
                                                  if (null !== a && "object" == typeof a) for (; d-- && "object" == typeof c[0]; ) Object.assign(u, c.shift());
                                                  return [l(u), ...c];
                                              }
                                              if (null !== a && "object" == typeof a) {
                                                  for (; d-- && "object" == typeof c[0]; ) Object.assign(u, c.shift());
                                                  a = c.length ? n(c.shift(), c) : void 0;
                                              } else "string" == typeof a && (a = n(c.shift(), c));
                                              return void 0 !== a && (u[i.messageKey] = a), [l(u)];
                                          })(this, i, a, l, t),
                                      )
                                    : c.apply(u, a),
                                t.transmit)
                            ) {
                                const n = t.transmit.level || e._level,
                                    s = o(n, r),
                                    c = o(i, r);
                                if (c < s) return;
                                !(function (e, t, r, n = !1) {
                                    const s = t.send,
                                        i = t.ts,
                                        o = t.methodLevel,
                                        l = t.methodValue,
                                        c = t.val,
                                        a = e._logEvent.bindings;
                                    n || h(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize),
                                        (e._logEvent.ts = i),
                                        (e._logEvent.messages = r.filter(function (e) {
                                            return -1 === a.indexOf(e);
                                        })),
                                        (e._logEvent.level.label = o),
                                        (e._logEvent.level.value = l),
                                        s(o, e._logEvent, c),
                                        (e._logEvent = p(a));
                                })(this, { ts: l, methodLevel: i, methodValue: c, transmitLevel: n, transmitValue: r.levels.values[t.transmit.level || e._level], send: t.transmit.send, val: o(e._level, r) }, a, f);
                            }
                        }
                    );
                    var c;
                })(e, t, r, i);
                const a = (function (e) {
                    const t = [];
                    e.bindings && t.push(e.bindings);
                    let r = e[c];
                    for (; r.parent; ) (r = r.parent), r.logger.bindings && t.push(r.logger.bindings);
                    return t.reverse();
                })(e);
                0 !== a.length &&
                    (e[i] = (function (e, t) {
                        return function () {
                            return t.apply(this, [...e, ...arguments]);
                        };
                    })(a, e[i]));
            }
            function h(e, t, r, n) {
                for (const s in e)
                    if (n && e[s] instanceof Error) e[s] = d.stdSerializers.err(e[s]);
                    else if ("object" == typeof e[s] && !Array.isArray(e[s]) && t) for (const n in e[s]) t.indexOf(n) > -1 && n in r && (e[s][n] = r[n](e[s][n]));
            }
            function p(e) {
                return { ts: 0, messages: [], bindings: e || [], level: { label: "", value: 0 } };
            }
            function m(e) {
                const t = { type: e.constructor.name, msg: e.message, stack: e.stack };
                for (const r in e) void 0 === t[r] && (t[r] = e[r]);
                return t;
            }
            function g(e) {
                return "function" == typeof e.timestamp ? e.timestamp : !1 === e.timestamp ? x : y;
            }
            function v() {
                return {};
            }
            function w(e) {
                return e;
            }
            function b() {}
            function x() {
                return !1;
            }
            function y() {
                return Date.now();
            }
            (d.levels = { values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 }, labels: { 10: "trace", 20: "debug", 30: "info", 40: "warn", 50: "error", 60: "fatal" } }),
                (d.stdSerializers = i),
                (d.stdTimeFunctions = Object.assign(
                    {},
                    {
                        nullTime: x,
                        epochTime: y,
                        unixTime: function () {
                            return Math.round(Date.now() / 1e3);
                        },
                        isoTime: function () {
                            return new Date(Date.now()).toISOString();
                        },
                    },
                )),
                (e.exports.default = d),
                (e.exports.pino = d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-5d959941.d2d4f61a.js.map
