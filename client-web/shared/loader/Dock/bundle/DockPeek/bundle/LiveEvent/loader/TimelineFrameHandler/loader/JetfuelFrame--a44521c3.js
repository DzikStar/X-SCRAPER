"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--a44521c3"],
    {
        244448: (e, t, a) => {
            a.d(t, { GZ: () => r.GZ, N_: () => l.N_, bk: () => l.bk, kb: () => i.Z, mQ: () => n.Z, q3: () => o.q3, rh: () => d.rh, tJ: () => r.tJ, vz: () => r.vz, wR: () => d.wR });
            var n = a(498348),
                i = a(685940),
                l = a(608222),
                r = a(752659),
                o = a(511799),
                d = a(50494);
        },
        801102: (e, t, a) => {
            a.d(t, { Z: () => l });
            var n = a(552322),
                i = a(109195);
            function l(e, t) {
                const a = (function (e) {
                    const t = [];
                    for (const a of e.children) {
                        const n = e.dom.el(a);
                        void 0 !== n && t.push(n);
                    }
                    return t;
                })(e);
                return a.map((e, a) => (t ? t(e, a) : (0, n.jsx)(i.Z, { el: e }, e?.id || `child-${a}`)));
            }
        },
        655419: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(608222),
                o = a(869593);
            const d = 500;
            function c({ el: e, p: t, mods: a }) {
                const c = t.action("on:press"),
                    m = t.strDict("scribe:press") ?? {},
                    s = t.action("on:longpress"),
                    u = t.strDict("scribe:longpress") ?? {},
                    p = t.bool("disabled") ?? !1,
                    _ = (0, o.h8)(),
                    g = (0, r.oG)()?.Analytics,
                    X = (0, i.useRef)(null),
                    f = (0, i.useRef)(!1),
                    b = (0, i.useRef)(null),
                    h = null != c || null != s;
                (0, i.useEffect)(() => {
                    b.current &&
                        (b.current.addEventListener("mousedown", (e) => {
                            e.stopImmediatePropagation(), e.preventDefault(), x(e);
                        }),
                        b.current.addEventListener("mouseup", (e) => {
                            e.stopImmediatePropagation(), e.preventDefault(), C(e);
                        }));
                }, []);
                const v = () => {
                        if (c) {
                            c();
                            const e = (0, o.QI)("click", { ..._, ...m });
                            g?.scribe(e);
                        }
                    },
                    x = (e) => {
                        h && e.stopImmediatePropagation(),
                            (f.current = !1),
                            clearTimeout(X.current ?? 0),
                            (X.current = window.setTimeout(() => {
                                (f.current = !0), (X.current = null);
                            }, d));
                    },
                    C = (e) => {
                        h && e.stopPropagation(),
                            p ||
                                (f.current
                                    ? (() => {
                                          if (s) {
                                              s();
                                              const e = (0, o.QI)("longpress", { ..._, ...u });
                                              g?.scribe(e);
                                          }
                                      })()
                                    : v());
                    };
                return (0, n.jsx)("button", {
                    className: a,
                    ref: b,
                    type: "button",
                    disabled: p,
                    onKeyDown: (e) => {
                        h && e.stopPropagation(), p || ("Space" !== e.code && "Enter" !== e.code) || v();
                    },
                    children: (0, l.Z)(e),
                });
            }
        },
        746066: (e, t, a) => {
            a.d(t, { Z: () => c });
            var n = a(202784),
                i = a(801102),
                l = a(608222),
                r = a(910352),
                o = a(511799);
            function d({ p: e, el: t }) {
                const a = (0, l.oG)(),
                    d = e.action("next"),
                    c = e.strDict("errors"),
                    { setErrors: m } = (0, n.useContext)(o.q3),
                    s = (0, r.Z)(() => {
                        d && d(), c && m(c);
                        const e = (0, i.Z)(t),
                            n = a?.Runtime?.ui?.toast;
                        if (e && e.length > 0 && n) {
                            if (e[0]) {
                                const e = t?.children && t.children.length > 0 ? t.children[0] : void 0,
                                    a = void 0 !== e ? t?.dom?.el(e) : null;
                                a && n(a);
                            }
                        }
                    }),
                    u = (0, n.useRef)(!1);
                return (
                    (0, n.useEffect)(() => {
                        u.current || ((u.current = !0), s());
                    }, [s]),
                    null
                );
            }
            function c(e) {
                const { submissionKey: t } = (0, n.useContext)(o.q3);
                return (0, n.createElement)(d, { ...e, key: t });
            }
        },
        173590: (e, t, a) => {
            a.d(t, { Z: () => g });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(109195),
                o = a(752659),
                d = a(608222),
                c = a(644109),
                m = a(916025),
                s = a(830030),
                u = a(770688),
                p = a(910352),
                _ = a(511799);
            function g({ el: e, p: t, mods: a }) {
                const g = (0, d.oG)(),
                    X = t.url("action") ?? "",
                    f = t.strDict("errors"),
                    b = t.url("validation"),
                    h = t.str("submissionStatus") ?? "pending",
                    [v, x] = (0, i.useState)(() => {
                        const e = t.strDict("values") ?? {};
                        return Object.fromEntries(Object.entries(e));
                    }),
                    [C, S] = (0, i.useState)(),
                    [w, y] = (0, i.useState)(),
                    [Z, j] = (0, i.useState)(b ? "ongoing" : "pending"),
                    k = (0, p.Z)((e) => {
                        t.setStrDict("errors", e);
                    }),
                    E = (0, p.Z)((e) => {
                        t.setStr("focus", e);
                    }),
                    N = (0, p.Z)((e) => {
                        t.setStrDict("values", (0, s.e)(e));
                    }),
                    B = (0, p.Z)((e) => {
                        t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                    }),
                    M = (e) => {
                        j(e), t.setBool("validating", "ongoing" === e);
                    },
                    D = (0, p.Z)(async () => {
                        if ("ongoing" !== h && X) {
                            B("ongoing"), y((0, u.h)()), S(void 0);
                            const e = g?.Runtime;
                            if (e)
                                try {
                                    if (!Object.entries(v)) return void B("error");
                                    const t = Object.fromEntries(Object.entries(v)),
                                        { ok: a, data: n } = await e.net.httpPOST(X, new Map(Object.entries(t)));
                                    if (a && n) {
                                        const t = (0, o.KM)(e, new Uint8Array(n));
                                        S(t.root.value), B("success");
                                    } else B("error");
                                } catch (e) {
                                    B("error");
                                }
                        }
                    }),
                    $ = (0, p.Z)((e, t) => {
                        x(
                            void 0 !== t
                                ? (a) => ({ ...a, [e]: t })
                                : (t) => {
                                      const { [e]: a, ...n } = t;
                                      return n;
                                  },
                        ),
                            B("pending"),
                            M("pending"),
                            S(void 0);
                    }),
                    T = (0, i.useRef)(v);
                (0, i.useLayoutEffect)(() => {
                    T.current = v;
                }, [v]);
                const R = (0, p.Z)((e, t) => {
                        M("ongoing");
                        const a = g?.Runtime;
                        if (a) {
                            const n = Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t));
                            a.net
                                .httpPOST(t, new Map(Object.entries(n)))
                                .then(({ ok: t, data: a }) => {
                                    if (T.current === e)
                                        if (t && a) {
                                            const e = JSON.parse(new TextDecoder().decode(a));
                                            (0, m.x)(e) ? (k({}), M("success")) : (k(e), M("failure"));
                                        } else k({}), M("success");
                                })
                                .catch(() => {
                                    M("error");
                                });
                        }
                    }),
                    P = (0, i.useMemo)(() => (0, c.D)(R, 500), [R]);
                (0, i.useEffect)(() => {
                    b && P(v, b);
                }, [P, v, b]);
                const A = (0, i.useMemo)(() => (b ? "success" === Z : !!X && ("pending" === h || "error" === h)), [h, Z, b, X]);
                return (
                    (0, i.useEffect)(() => {
                        N(v);
                    }, [v, N]),
                    (0, n.jsxs)(_.q3.Provider, { value: { values: v, submit: D, change: $, submissionResult: C, submissionKey: w, submissionStatus: h, validationStatus: Z, errors: f, setErrors: k, setFocus: E, canSubmit: A }, children: [(0, n.jsx)("div", { className: a, children: (0, l.Z)(e) }), C && (0, n.jsx)(r.Z, { el: C })] })
                );
            }
        },
        261925: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(109195),
                r = a(511799);
            function o({ mods: e }) {
                const t = (0, i.useContext)(r.ZB);
                return t ? (0, n.jsx)("div", { className: e, children: t.active && (0, n.jsx)(l.Z, { el: t.active }) }) : null;
            }
        },
        22588: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(511799);
            function o({ el: e, mods: t }) {
                const { canSubmit: a, submit: o } = (0, i.useContext)(r.q3),
                    d = (0, i.useCallback)(
                        (e) => {
                            e.stopPropagation(), a && o && o();
                        },
                        [a, o],
                    );
                return (0, n.jsx)("button", { type: "submit", disabled: !a, onClick: d, className: t, children: (0, l.Z)(e) });
            }
        },
        166490: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(511799),
                r = a(695301);
            function o({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    o = e.str("label") ?? "",
                    d = e.str("value") ?? "",
                    c = e.bool("autofocus") ?? !1,
                    m = e.enum("type") ?? l.n$.text,
                    { change: s, setFocus: u, values: p } = (0, i.useContext)(l.q3),
                    _ = m === l.n$.growing_text,
                    g = (0, i.useCallback)(
                        (e) => {
                            m === l.n$.date && e.currentTarget.value ? s(a, new Date(e.currentTarget.value).toISOString()) : s(a, (0, r.J)(m, e.currentTarget.value));
                        },
                        [a, s, m],
                    );
                (0, i.useEffect)(() => {
                    d && s(a, d);
                }, [a, d, s]);
                const X = (0, i.useCallback)(() => {
                        u(a);
                    }, [a, u]),
                    f = (0, i.useCallback)(() => {
                        u("");
                    }, [u]),
                    b = (0, l.Jt)(m),
                    h = p[a] ?? d,
                    v = (0, l.VD)(m),
                    x = (0, r.m)(m, h);
                return _ ? (0, n.jsx)("textarea", { autoFocus: c, name: a, onBlur: f, className: `placeholder:text-gray-500 p-2 ${t}`, onChange: g, onFocus: X, placeholder: o, value: h }) : (0, n.jsx)("input", { type: v, autoFocus: c, inputMode: b, name: a, onBlur: f, className: `placeholder:text-gray-500 p-2 ${t}`, onChange: g, onFocus: X, placeholder: o, value: x });
            }
        },
        161276: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(109195),
                o = a(511799);
            function d({ p: e, el: t, mods: a }) {
                const d = e.str("name") ?? "",
                    c = e.bool("initial") ? "true" : void 0,
                    m = e.element("selected") ?? null,
                    s = e.bool("submit") ?? !1,
                    { change: u, submit: p, values: _ } = (0, i.useContext)(o.q3),
                    g = "true" === _[d];
                (0, i.useEffect)(() => {
                    c && u(d, c);
                }, [d, c, u]);
                const X = g ? m && (0, n.jsx)(r.Z, { el: m }) : (0, l.Z)(t);
                return (0, n.jsx)("button", {
                    type: "button",
                    onClick: (e) => {
                        e.preventDefault(), u(d, g ? void 0 : "true"), s && p();
                    },
                    className: a,
                    children: X,
                });
            }
        },
        399762: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(511799);
            function o({ p: e, el: t, mods: a }) {
                const o = e.str("name") ?? "",
                    d = e.int("length") ?? 6,
                    c = e.bool("autofocus") ?? !1,
                    m = e.bool("autosubmit") ?? !1,
                    { change: s, submit: u, values: p } = (0, i.useContext)(r.q3),
                    _ = p[o] ?? "",
                    g = (0, i.useCallback)(
                        (t) => {
                            s(o, t), e.setStrDict("code", Object(Array.from(t)));
                        },
                        [s, o, e],
                    ),
                    X = (0, i.useMemo)(() => Array.from({ length: d }).map(() => (0, i.createRef)()), [d]);
                (0, i.useEffect)(() => {
                    _.length === d && m ? u() : X[_.length]?.current?.focus();
                }, [m, _, X, d, u]);
                const f = (0, i.useCallback)(
                        (e, t) => {
                            const a = e.currentTarget.value,
                                n = _.slice(0, t) + a + _.slice(t + 1);
                            g(n);
                        },
                        [_, g],
                    ),
                    b = (e) => {
                        "Backspace" === e.key && (g(_.slice(0, _.length - 1)), e.preventDefault());
                    },
                    [h, v] = (0, i.useState)(0),
                    [x, C] = (0, i.useState)(10),
                    [S, w] = (0, i.useState)(10),
                    [y, Z] = (0, i.useState)(0),
                    j = (0, i.useRef)(null);
                return (
                    (0, i.useEffect)(() => {
                        setTimeout(() => {
                            const e = j.current,
                                t = e?.firstElementChild,
                                a = t?.firstElementChild,
                                n = a?.nextElementSibling;
                            if (e && t && a && n) {
                                const t = e.getBoundingClientRect(),
                                    i = a.getBoundingClientRect(),
                                    l = n.getBoundingClientRect().left - i.right;
                                v(l), C(i.width), w(t.width);
                                const r = i.left - t.left;
                                Z(r);
                            }
                        }, 100);
                    }, []),
                    (0, n.jsxs)("div", { className: `relative ${a}`, ref: j, children: [(0, l.Z)(t), (0, n.jsx)("div", { className: "absolute left-0 top-0 right-0 bottom-0 flex flex-row", style: { gap: h, width: S, paddingLeft: y }, children: Array.from({ length: d }).map((e, t) => (0, n.jsx)("input", { maxLength: d, inputMode: "numeric", onChange: (e) => f(e, t), autoFocus: c && 0 === t, onKeyDown: b, ref: X[t], value: _[t] ?? "", className: "min-w-0 outline-none text-center caret-text bg-transparent text-transparent", style: { width: x } }, t)) })] })
                );
            }
        },
        631389: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(511799),
                r = a(695301);
            function o({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    o = e.str("label") ?? "",
                    d = e.str("value") ?? "",
                    c = e.bool("autofocus") ?? !1,
                    m = e.enum("type") ?? l.n$.text,
                    { change: s, setFocus: u, values: p } = (0, i.useContext)(l.q3),
                    _ = (0, i.useCallback)(
                        (e) => {
                            s(a, (0, r.J)(m, e.currentTarget.value));
                        },
                        [a, s, m],
                    );
                (0, i.useEffect)(() => {
                    d && s(a, d);
                }, [a, d, s]);
                const g = (0, i.useCallback)(() => {
                        u(a);
                    }, [a, u]),
                    X = (0, i.useCallback)(() => {
                        u("");
                    }, [u]),
                    f = p[a] ?? d,
                    b = (0, l.VD)(m),
                    h = (0, l.Jt)(m),
                    v = (0, r.m)(m, f);
                return l.zK.includes(m) ? (0, n.jsx)("textarea", { autoFocus: c, name: a, onBlur: X, className: `placeholder:text-gray-500 field-sizing-content w-full p-2 ${t}`, onChange: _, onFocus: g, placeholder: o, value: v, rows: 1 }) : (0, n.jsx)("input", { type: b, autoFocus: c, inputMode: h, name: a, onBlur: X, className: `placeholder:text-gray-500 bg-transparent p-2 ${t}`, onChange: _, onFocus: g, placeholder: o, value: v });
            }
        },
        723395: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(109195),
                o = a(511799);
            function d({ p: e, el: t, mods: a }) {
                const d = e.str("value") ?? "",
                    c = e.element("active"),
                    m = e.element("selected") ?? null,
                    s = (0, i.useContext)(o.ZB),
                    u = s?.value === d,
                    p = (0, i.useCallback)(() => {
                        s && (u ? s.select(void 0, null) : s.select(d, c));
                    }, [s, d, c, u]),
                    _ = (0, i.useMemo)(() => (0, l.Z)(t), [t]),
                    g = (0, i.useMemo)(() => m && (0, n.jsx)(r.Z, { el: m }), [m]);
                return (0, n.jsx)("button", { onClick: p, type: "button", className: a, children: u ? g : _ });
            }
        },
        140682: (e, t, a) => {
            a.d(t, { Z: () => m });
            var n = a(552322),
                i = a(202784),
                l = a(511799);
            const r = (e) => e.replace(/\D/g, ""),
                o = (e, t) => {
                    const a = r(e);
                    let n = "",
                        i = 0;
                    for (let e = 0; e < t.length && !(i >= a.length); e++) "#" === t[e] || "X" === t[e] ? ((n += a[i]), i++) : (n += t[e]);
                    return n;
                },
                d = { name: "United States", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                c = [
                    { name: "Afghanistan", dial_code: "+93", pattern: "### ### ####", limit: 12 },
                    { name: "Albania", dial_code: "+355", pattern: "### ### ###", limit: 11 },
                    { name: "Algeria", dial_code: "+213", pattern: "### ## ## ##", limit: 12 },
                    { name: "Andorra", dial_code: "+376", pattern: "### ###", limit: 7 },
                    { name: "Angola", dial_code: "+244", pattern: "### ### ###", limit: 11 },
                    { name: "Antigua and Barbuda", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Argentina", dial_code: "+54", pattern: "##########", limit: 10 },
                    { name: "Armenia", dial_code: "+374", pattern: "## ######", limit: 9 },
                    { name: "Australia", dial_code: "+61", pattern: "#### ### ###", limit: 12 },
                    { name: "Austria", dial_code: "+43", pattern: "#### ####", limit: 9 },
                    { name: "Azerbaijan", dial_code: "+994", pattern: "## ### ## ##", limit: 11 },
                    { name: "Bahamas", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Bahrain", dial_code: "+973", pattern: "#### ####", limit: 9 },
                    { name: "Bangladesh", dial_code: "+880", pattern: "####-#######", limit: 12 },
                    { name: "Barbados", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Belarus", dial_code: "+375", pattern: "## ###-##-##", limit: 12 },
                    { name: "Belgium", dial_code: "+32", pattern: "### ## ## ##", limit: 12 },
                    { name: "Belize", dial_code: "+501", pattern: "#### ####", limit: 9 },
                    { name: "Benin", dial_code: "+229", pattern: "## ## ## ##", limit: 11 },
                    { name: "Bhutan", dial_code: "+975", pattern: "##-###-###", limit: 10 },
                    { name: "Bolivia", dial_code: "+591", pattern: "###-###-###", limit: 12 },
                    { name: "Bosnia and Herzegovina", dial_code: "+387", pattern: "## ### ###", limit: 10 },
                    { name: "Botswana", dial_code: "+267", pattern: "### ### ###", limit: 11 },
                    { name: "Brazil", dial_code: "+55", pattern: "(##) ####-####", limit: 14 },
                    { name: "Brunei", dial_code: "+673", pattern: "#### ####", limit: 9 },
                    { name: "Bulgaria", dial_code: "+359", pattern: "### ### ###", limit: 11 },
                    { name: "Burkina Faso", dial_code: "+226", pattern: "## ## ## ##", limit: 11 },
                    { name: "Burundi", dial_code: "+257", pattern: "## ## ## ##", limit: 11 },
                    { name: "Cabo Verde", dial_code: "+238", pattern: "### ### ###", limit: 11 },
                    { name: "Cambodia", dial_code: "+855", pattern: "##-###-####", limit: 11 },
                    { name: "Cameroon", dial_code: "+237", pattern: "### ### ###", limit: 11 },
                    { name: "Canada", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Central African Republic", dial_code: "+236", pattern: "## ### ###", limit: 10 },
                    { name: "Chad", dial_code: "+235", pattern: "## ## ## ##", limit: 11 },
                    { name: "Chile", dial_code: "+56", pattern: "##-####-####", limit: 13 },
                    { name: "China", dial_code: "+86", pattern: "### #### ####", limit: 12 },
                    { name: "Colombia", dial_code: "+57", pattern: "### ### ####", limit: 12 },
                    { name: "Comoros", dial_code: "+269", pattern: "## ## ## ##", limit: 11 },
                    { name: "Congo (Brazzaville)", dial_code: "+242", pattern: "### ### ###", limit: 11 },
                    { name: "Costa Rica", dial_code: "+506", pattern: "####-####", limit: 9 },
                    { name: "Croatia", dial_code: "+385", pattern: "##-####-####", limit: 12 },
                    { name: "Cuba", dial_code: "+53", pattern: "###-###-####", limit: 12 },
                    { name: "Cyprus", dial_code: "+357", pattern: "### ### ###", limit: 11 },
                    { name: "Czechia", dial_code: "+420", pattern: "### ### ###", limit: 11 },
                    { name: "Democratic Republic of the Congo", dial_code: "+243", pattern: "### ### ###", limit: 11 },
                    { name: "Denmark", dial_code: "+45", pattern: "## ## ## ##", limit: 9 },
                    { name: "Djibouti", dial_code: "+253", pattern: "## ## ## ##", limit: 10 },
                    { name: "Dominica", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Dominican Republic", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Ecuador", dial_code: "+593", pattern: "##-###-####", limit: 12 },
                    { name: "Egypt", dial_code: "+20", pattern: "## ### ####", limit: 11 },
                    { name: "El Salvador", dial_code: "+503", pattern: "####-####", limit: 9 },
                    { name: "Equatorial Guinea", dial_code: "+240", pattern: "### ### ###", limit: 11 },
                    { name: "Eritrea", dial_code: "+291", pattern: "### ### ###", limit: 11 },
                    { name: "Estonia", dial_code: "+372", pattern: "#### ####", limit: 9 },
                    { name: "Eswatini", dial_code: "+268", pattern: "### ### ###", limit: 11 },
                    { name: "Ethiopia", dial_code: "+251", pattern: "###-###-####", limit: 12 },
                    { name: "Fiji", dial_code: "+679", pattern: "### ###", limit: 9 },
                    { name: "Finland", dial_code: "+358", pattern: "### ## ###", limit: 10 },
                    { name: "France", dial_code: "+33", pattern: "## ## ## ##", limit: 9 },
                    { name: "Gabon", dial_code: "+241", pattern: "## ## ## ##", limit: 10 },
                    { name: "Gambia", dial_code: "+220", pattern: "### ### ###", limit: 11 },
                    { name: "Georgia", dial_code: "+995", pattern: "### ## ## ##", limit: 12 },
                    { name: "Germany", dial_code: "+49", pattern: "#### ########", limit: 14 },
                    { name: "Ghana", dial_code: "+233", pattern: "### ### ###", limit: 11 },
                    { name: "Greece", dial_code: "+30", pattern: "### ### ####", limit: 12 },
                    { name: "Grenada", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Guatemala", dial_code: "+502", pattern: "####-####", limit: 9 },
                    { name: "Guinea", dial_code: "+224", pattern: "### ### ###", limit: 11 },
                    { name: "Guinea-Bissau", dial_code: "+245", pattern: "### ### ###", limit: 11 },
                    { name: "Guyana", dial_code: "+592", pattern: "###-###-###", limit: 12 },
                    { name: "Haiti", dial_code: "+509", pattern: "###-###-####", limit: 12 },
                    { name: "Honduras", dial_code: "+504", pattern: "####-####", limit: 9 },
                    { name: "Hungary", dial_code: "+36", pattern: "##-###-####", limit: 11 },
                    { name: "Iceland", dial_code: "+354", pattern: "### ####", limit: 10 },
                    { name: "India", dial_code: "+91", pattern: "#####-#####", limit: 11 },
                    { name: "Indonesia", dial_code: "+62", pattern: "###-###-####", limit: 12 },
                    { name: "Iran", dial_code: "+98", pattern: "#### ### ####", limit: 13 },
                    { name: "Iraq", dial_code: "+964", pattern: "###-###-####", limit: 12 },
                    { name: "Ireland", dial_code: "+353", pattern: "### ### ####", limit: 12 },
                    { name: "Israel", dial_code: "+972", pattern: "##-#####-###", limit: 12 },
                    { name: "Italy", dial_code: "+39", pattern: "### #### ####", limit: 13 },
                    { name: "Jamaica", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Japan", dial_code: "+81", pattern: "##-####-####", limit: 13 },
                    { name: "Jordan", dial_code: "+962", pattern: "### #######", limit: 11 },
                    { name: "Kazakhstan", dial_code: "+7", pattern: "### ### ####", limit: 12 },
                    { name: "Kenya", dial_code: "+254", pattern: "### ### ###", limit: 11 },
                    { name: "Kiribati", dial_code: "+686", pattern: "### ####", limit: 10 },
                    { name: "Kuwait", dial_code: "+965", pattern: "#### ####", limit: 9 },
                    { name: "Kyrgyzstan", dial_code: "+996", pattern: "### ### ###", limit: 11 },
                    { name: "Laos", dial_code: "+856", pattern: "##-####-####", limit: 13 },
                    { name: "Latvia", dial_code: "+371", pattern: "##### ###", limit: 9 },
                    { name: "Lebanon", dial_code: "+961", pattern: "##-###-###", limit: 11 },
                    { name: "Lesotho", dial_code: "+266", pattern: "### ### ###", limit: 11 },
                    { name: "Liberia", dial_code: "+231", pattern: "###-###-####", limit: 12 },
                    { name: "Libya", dial_code: "+218", pattern: "###-###-###", limit: 11 },
                    { name: "Liechtenstein", dial_code: "+423", pattern: "### ####", limit: 10 },
                    { name: "Lithuania", dial_code: "+370", pattern: "###-###-###", limit: 11 },
                    { name: "Luxembourg", dial_code: "+352", pattern: "### ### ###", limit: 11 },
                    { name: "Madagascar", dial_code: "+261", pattern: "##-###-####", limit: 11 },
                    { name: "Malawi", dial_code: "+265", pattern: "###-###-###", limit: 11 },
                    { name: "Malaysia", dial_code: "+60", pattern: "###-#######", limit: 11 },
                    { name: "Maldives", dial_code: "+960", pattern: "###-###", limit: 9 },
                    { name: "Mali", dial_code: "+223", pattern: "##-##-##-##", limit: 11 },
                    { name: "Malta", dial_code: "+356", pattern: "#### ####", limit: 9 },
                    { name: "Marshall Islands", dial_code: "+692", pattern: "###-####", limit: 10 },
                    { name: "Mauritania", dial_code: "+222", pattern: "##-##-##-##", limit: 11 },
                    { name: "Mauritius", dial_code: "+230", pattern: "#### ####", limit: 9 },
                    { name: "Mexico", dial_code: "+52", pattern: "## #### ####", limit: 12 },
                    { name: "Micronesia", dial_code: "+691", pattern: "###-####", limit: 10 },
                    { name: "Moldova", dial_code: "+373", pattern: "##-###-###", limit: 11 },
                    { name: "Monaco", dial_code: "+377", pattern: "### ### ###", limit: 11 },
                    { name: "Mongolia", dial_code: "+976", pattern: "###-###-###", limit: 11 },
                    { name: "Montenegro", dial_code: "+382", pattern: "##-###-###", limit: 11 },
                    { name: "Morocco", dial_code: "+212", pattern: "##-###-####", limit: 12 },
                    { name: "Mozambique", dial_code: "+258", pattern: "##-###-###", limit: 11 },
                    { name: "Myanmar", dial_code: "+95", pattern: "##-###-####", limit: 12 },
                    { name: "Namibia", dial_code: "+264", pattern: "###-####", limit: 10 },
                    { name: "Nauru", dial_code: "+674", pattern: "###-###", limit: 9 },
                    { name: "Nepal", dial_code: "+977", pattern: "##-####-####", limit: 13 },
                    { name: "Netherlands", dial_code: "+31", pattern: "##-####-####", limit: 12 },
                    { name: "New Zealand", dial_code: "+64", pattern: "##-###-####", limit: 12 },
                    { name: "Nicaragua", dial_code: "+505", pattern: "####-####", limit: 9 },
                    { name: "Niger", dial_code: "+227", pattern: "##-##-##-##", limit: 11 },
                    { name: "Nigeria", dial_code: "+234", pattern: "###-###-####", limit: 12 },
                    { name: "North Korea", dial_code: "+850", pattern: "##-####-####", limit: 13 },
                    { name: "North Macedonia", dial_code: "+389", pattern: "##-###-####", limit: 12 },
                    { name: "Norway", dial_code: "+47", pattern: "### ## ###", limit: 11 },
                    { name: "Oman", dial_code: "+968", pattern: "###-####", limit: 10 },
                    { name: "Pakistan", dial_code: "+92", pattern: "####-#######", limit: 12 },
                    { name: "Palau", dial_code: "+680", pattern: "###-####", limit: 10 },
                    { name: "Palestine", dial_code: "+970", pattern: "##-###-####", limit: 12 },
                    { name: "Panama", dial_code: "+507", pattern: "####-####", limit: 9 },
                    { name: "Papua New Guinea", dial_code: "+675", pattern: "###-####", limit: 10 },
                    { name: "Paraguay", dial_code: "+595", pattern: "###-###-###", limit: 12 },
                    { name: "Peru", dial_code: "+51", pattern: "##-###-####", limit: 12 },
                    { name: "Philippines", dial_code: "+63", pattern: "###-###-####", limit: 12 },
                    { name: "Poland", dial_code: "+48", pattern: "###-###-###", limit: 12 },
                    { name: "Portugal", dial_code: "+351", pattern: "####-####", limit: 9 },
                    { name: "Qatar", dial_code: "+974", pattern: "#### ####", limit: 9 },
                    { name: "Romania", dial_code: "+40", pattern: "###-###-###", limit: 11 },
                    { name: "Russia", dial_code: "+7", pattern: "###-###-##-##", limit: 12 },
                    { name: "Rwanda", dial_code: "+250", pattern: "###-###-###", limit: 11 },
                    { name: "Saint Kitts and Nevis", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Saint Lucia", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Saint Vincent and the Grenadines", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Samoa", dial_code: "+685", pattern: "###-####", limit: 10 },
                    { name: "San Marino", dial_code: "+378", pattern: "###-######", limit: 12 },
                    { name: "Sao Tome and Principe", dial_code: "+239", pattern: "###-###-###", limit: 11 },
                    { name: "Saudi Arabia", dial_code: "+966", pattern: "###-####-####", limit: 13 },
                    { name: "Senegal", dial_code: "+221", pattern: "##-###-####", limit: 12 },
                    { name: "Serbia", dial_code: "+381", pattern: "##-###-####", limit: 12 },
                    { name: "Seychelles", dial_code: "+248", pattern: "###-####", limit: 10 },
                    { name: "Sierra Leone", dial_code: "+232", pattern: "##-###-####", limit: 12 },
                    { name: "Singapore", dial_code: "+65", pattern: "####-####", limit: 9 },
                    { name: "Slovakia", dial_code: "+421", pattern: "###-###-###", limit: 11 },
                    { name: "Slovenia", dial_code: "+386", pattern: "##-###-###", limit: 11 },
                    { name: "Solomon Islands", dial_code: "+677", pattern: "###-####", limit: 10 },
                    { name: "Somalia", dial_code: "+252", pattern: "###-###-###", limit: 11 },
                    { name: "South Africa", dial_code: "+27", pattern: "##-###-####", limit: 12 },
                    { name: "South Korea", dial_code: "+82", pattern: "##-####-####", limit: 13 },
                    { name: "South Sudan", dial_code: "+211", pattern: "###-###-###", limit: 11 },
                    { name: "Spain", dial_code: "+34", pattern: "###-###-###", limit: 12 },
                    { name: "Sri Lanka", dial_code: "+94", pattern: "##-####-####", limit: 13 },
                    { name: "Sudan", dial_code: "+249", pattern: "###-###-###", limit: 11 },
                    { name: "Suriname", dial_code: "+597", pattern: "###-###-###", limit: 12 },
                    { name: "Sweden", dial_code: "+46", pattern: "###-###-####", limit: 12 },
                    { name: "Switzerland", dial_code: "+41", pattern: "##-###-##-##", limit: 12 },
                    { name: "Syria", dial_code: "+963", pattern: "###-###-####", limit: 12 },
                    { name: "Taiwan", dial_code: "+886", pattern: "###-####-####", limit: 13 },
                    { name: "Tajikistan", dial_code: "+992", pattern: "##-###-####", limit: 12 },
                    { name: "Tanzania", dial_code: "+255", pattern: "###-###-###", limit: 11 },
                    { name: "Thailand", dial_code: "+66", pattern: "##-###-####", limit: 12 },
                    { name: "Timor-Leste", dial_code: "+670", pattern: "###-####", limit: 10 },
                    { name: "Togo", dial_code: "+228", pattern: "##-##-##-##", limit: 11 },
                    { name: "Tonga", dial_code: "+676", pattern: "###-####", limit: 10 },
                    { name: "Trinidad and Tobago", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Tunisia", dial_code: "+216", pattern: "##-###-###", limit: 11 },
                    { name: "Turkey", dial_code: "+90", pattern: "###-###-####", limit: 12 },
                    { name: "Turkmenistan", dial_code: "+993", pattern: "##-###-####", limit: 12 },
                    { name: "Tuvalu", dial_code: "+688", pattern: "###-###", limit: 9 },
                    { name: "Uganda", dial_code: "+256", pattern: "###-###-###", limit: 11 },
                    { name: "Ukraine", dial_code: "+380", pattern: "##-###-##-##", limit: 12 },
                    { name: "United Arab Emirates", dial_code: "+971", pattern: "##-###-####", limit: 12 },
                    { name: "United Kingdom", dial_code: "+44", pattern: "#### ### ####", limit: 13 },
                    { name: "United States", dial_code: "+1", pattern: "(XXX) XXX-XXXX", limit: 14 },
                    { name: "Uruguay", dial_code: "+598", pattern: "###-###-###", limit: 12 },
                    { name: "Uzbekistan", dial_code: "+998", pattern: "##-###-####", limit: 12 },
                    { name: "Vanuatu", dial_code: "+678", pattern: "###-####", limit: 10 },
                    { name: "Vatican City", dial_code: "+379", pattern: "###-###", limit: 9 },
                    { name: "Venezuela", dial_code: "+58", pattern: "###-###-####", limit: 12 },
                    { name: "Vietnam", dial_code: "+84", pattern: "###-####-####", limit: 13 },
                    { name: "Yemen", dial_code: "+967", pattern: "###-###-###", limit: 11 },
                    { name: "Zambia", dial_code: "+260", pattern: "###-###-###", limit: 11 },
                    { name: "Zimbabwe", dial_code: "+263", pattern: "###-###-###", limit: 1 },
                ];
            function m({ p: e, mods: t }) {
                const a = e.str("name") ?? "",
                    m = e.str("placeholder") ?? "",
                    s = e.str("countryCode") ?? "+1",
                    u = e.strList("allowedCountryCodes"),
                    p = e.bool("countryCodePickerDisabled") ?? !1,
                    _ = e.bool("autofocus") ?? !1,
                    { change: g, values: X } = (0, i.useContext)(l.q3),
                    [f, b] = (0, i.useState)(() => (X[a] ? X[a].replace(s, "") : "")),
                    h = (0, i.useCallback)((e) => {
                        b(e.target.value);
                    }, []),
                    [v, x] = (0, i.useState)(() => c.find((e) => e.dial_code === s) ?? d),
                    C = (0, i.useMemo)(() => o(f, v.pattern), [v.pattern, f]),
                    S = (0, i.useMemo)(() => c.filter((e) => u.includes(e.dial_code)), [u]),
                    w = (0, i.useCallback)(
                        (e) => {
                            const t = S.find((t) => t.name === e.currentTarget.value);
                            t && x(t);
                        },
                        [S],
                    );
                return (
                    (0, i.useEffect)(() => {
                        g(a, v.dial_code + r(f));
                    }, [g, v, a, f]),
                    (0, n.jsxs)("div", { className: `flex flex-row items-center gap-1 ${t}`, children: [(0, n.jsxs)("div", { className: "items-end relative", children: [(0, n.jsx)("div", { className: "pe-2 text-blue-500 " + (p ? "text-text" : ""), children: v.dial_code }), (0, n.jsx)("select", { disabled: p, onChange: w, value: v.name, className: "absolute top-0 left-0 w-full h-full opacity-0", children: S.map((e) => (0, n.jsxs)("option", { value: e.name, children: [e.name, "(", e.dial_code, ")"] }, e.name)) })] }), (0, n.jsx)("input", { autoFocus: _, inputMode: "tel", maxLength: v.limit, name: a, onChange: h, placeholder: m || v.pattern, className: "flex-grow bg-transparent", value: C })] })
                );
            }
        },
        315111: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(511799);
            function o({ p: e, el: t }) {
                const a = e.str("name") ?? "",
                    o = e.bool("submit") ?? !1,
                    [d, c] = (0, i.useState)(null),
                    { submit: m, values: s, change: u } = (0, i.useContext)(r.q3),
                    p = s[a],
                    _ = (0, i.useCallback)(
                        (e, t) => {
                            u(a, e),
                                c(t),
                                o &&
                                    setTimeout(() => {
                                        m();
                                    }, 100);
                        },
                        [m, o, u, a],
                    );
                return (0, n.jsx)(r.ZB.Provider, { value: { value: p, active: d, select: _ }, children: (0, l.Z)(t) });
            }
        },
        511799: (e, t, a) => {
            a.d(t, { Jt: () => o, VD: () => d, ZB: () => c, n$: () => l, q3: () => i, zK: () => r });
            var n = a(202784);
            const i = (0, n.createContext)({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, validationStatus: "pending", submissionKey: void 0, canSubmit: !1 }),
                l = { text: 0, password: 1, email: 2, number: 3, username: 4, tel: 5, url: 6, auth_code: 7, hidden: 8, growing_text: 9, date: 10 },
                r = [l.text, l.email, l.username, l.url, l.growing_text],
                o =
                    ((0, n.createContext)({ groupKeys: new Set(), active: new Set(), register: (e) => {} }),
                    (e) => {
                        switch (e) {
                            case l.email:
                                return "email";
                            case l.number:
                            case l.auth_code:
                                return "numeric";
                            case l.tel:
                                return "tel";
                            case l.url:
                                return "url";
                            case l.text:
                            case l.password:
                            case l.username:
                            case l.hidden:
                            case l.growing_text:
                            case l.date:
                            default:
                                return "text";
                        }
                    }),
                d = (e) => {
                    switch (e) {
                        case l.password:
                            return "password";
                        case l.email:
                            return "email";
                        case l.number:
                            return "number";
                        case l.tel:
                            return "tel";
                        case l.url:
                            return "url";
                        case l.hidden:
                            return "hidden";
                        case l.date:
                            return "date";
                        case l.growing_text:
                        case l.text:
                        case l.username:
                        case l.auth_code:
                        default:
                            return "text";
                    }
                },
                c = (0, n.createContext)(null);
        },
        695301: (e, t, a) => {
            a.d(t, { J: () => l, m: () => i });
            var n = a(511799);
            const i = (e, t) => {
                    switch (e) {
                        case n.n$.date:
                            return new Date(t).toLocaleDateString("en-CA").padStart(10, "0");
                        case n.n$.username:
                            return "@" === t[0] ? t : `@${t}`;
                        default:
                            return t;
                    }
                },
                l = (e, t) => (e === n.n$.username ? t.replace("@", "") : t);
        },
        971668: (e, t, a) => {
            a.d(t, { Z: () => d });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(752659),
                o = a(977391);
            function d({ p: e, el: t, mods: a }) {
                const d = e.int("gapH") ?? 2,
                    c = e.int("gapV") ?? 2,
                    m = e.int("frozenCols") ?? null,
                    s = (0, l.Z)(t),
                    u = (0, i.useMemo)(() => {
                        if (!s) return 12;
                        let e = 0;
                        return (
                            s.forEach((t) => {
                                const a = (0, l.Z)(t.props.el);
                                let n = 0;
                                a.forEach((e) => {
                                    const t = (0, r.tJ)(e.props.el).int("columns") ?? 1;
                                    n += t;
                                }),
                                    (e = Math.max(e, n));
                            }),
                            e || 12
                        );
                    }, [s]);
                return (0, n.jsx)(o._p.Provider, { value: { frozenCols: m }, children: (0, n.jsx)("div", { className: `${a} ${null !== m ? "overflow-x-auto" : ""}`, children: (0, n.jsxs)("table", { style: { borderSpacing: `${d}px ${c}px` }, className: "w-full border-separate relative", children: [(0, n.jsx)("colgroup", { children: [...Array(u)].map((e, t) => (0, n.jsx)("col", { width: 100 / u + "%" }, `grid-col-${t}-${u}`)) }), (0, n.jsx)("tbody", { children: (0, l.Z)(t) })] }) }) });
            }
        },
        790119: (e, t, a) => {
            a.d(t, { Z: () => o });
            var n = a(552322),
                i = a(202784),
                l = a(801102),
                r = a(977391);
            function o({ p: e, el: t, mods: a }) {
                const o = e.int("columns") ?? 1,
                    m = e.enum("align") ?? 0,
                    { vAlign: s } = (0, i.useContext)(r.jg),
                    { frozenCols: u } = (0, i.useContext)(r._p),
                    p = (0, i.useRef)(null);
                return (
                    (0, i.useLayoutEffect)(() => {
                        if (!p.current) return;
                        const e = p.current.cellIndex;
                        if (void 0 !== e && null !== u && e < u) {
                            p.current.style.position = "sticky";
                            const e = p.current.getBoundingClientRect().left - (p.current.offsetParent?.getBoundingClientRect().left ?? 0);
                            p.current.style.left = `${e}px`;
                        }
                    }, [u]),
                    (0, n.jsx)("td", { ref: p, colSpan: o, className: `${c(s)} ${d(r.Eu[m])} ${null !== u ? "whitespace-nowrap" : ""} ${a}`, children: (0, l.Z)(t) })
                );
            }
            function d(e) {
                switch (e) {
                    case "start":
                        return "text-start";
                    case "middle":
                        return "text-center";
                    case "end":
                        return "text-end";
                    default:
                        return "";
                }
            }
            function c(e) {
                switch (e) {
                    case "top":
                        return "align-top";
                    case "center":
                        return "align-middle";
                    case "baseline":
                        return "align-baseline";
                    case "bottom":
                        return "align-bottom";
                    default:
                        return "";
                }
            }
        },
        550932: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(552322),
                i = a(801102),
                l = a(977391);
            function r({ p: e, el: t, mods: a }) {
                const r = e.enum("align") ?? 0;
                return (0, n.jsx)(l.jg.Provider, { value: { vAlign: l.qx[r] }, children: (0, n.jsx)("tr", { className: `align-${r} ${a}`, children: (0, i.Z)(t) }) });
            }
        },
        977391: (e, t, a) => {
            a.d(t, { Eu: () => l, _p: () => o, jg: () => r, qx: () => i });
            var n = a(202784);
            const i = { 0: "center", 1: "top", 2: "baseline", 3: "bottom" },
                l = { 0: "start", 1: "middle", 2: "end" },
                r = (0, n.createContext)({ vAlign: "center" }),
                o = (0, n.createContext)({ frozenCols: null });
        },
        96675: (e, t, a) => {
            a.d(t, { Z: () => r });
            var n = a(552322),
                i = a(801102),
                l = a(109195);
            function r({ el: e, p: t }) {
                const a = t.bool("cond") ?? !1,
                    r = t.element("else") ?? null,
                    o = r ? (0, n.jsx)(l.Z, { el: r }) : null;
                return a ? (0, i.Z)(e) : o;
            }
        },
        324212: (e, t, a) => {
            a.d(t, { Z: () => i });
            var n = a(552322);
            function i({ p: e, mods: t }) {
                const a = e.str("src") ?? "";
                return (0, n.jsx)("img", { src: a, alt: "d", className: `block object-cover ${t} ` });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.TimelineFrameHandler~loader.JetfuelFrame--a44521c3.1686e14a.js.map
