"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-2c7fc7-61faba46"],
    {
        736932: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(530732),
                n = a(725405),
                o = a(579578);
            const l = ({ children: e, overrideStyles: t, props: a, scribeContext: l, style: s }) => {
                const c = a.action("on:press"),
                    d = a.action("on:longpress"),
                    m = a.bool("disabled") ?? !1,
                    _ = r.useRef(),
                    p = (0, n.Z)(),
                    u = r.useCallback(() => {
                        d && d();
                        const e = a.strDict("scribe:longpress") ?? {},
                            t = (0, o.Q)("longpress", { ...l, ...e });
                        p.scribe(t);
                    }, [d, l, p, a]),
                    h = r.useCallback(() => {
                        c && c();
                        const e = a.strDict("scribe:press") ?? {},
                            t = (0, o.Q)("click", { ...l, ...e });
                        p.scribe(t);
                    }, [c, l, p, a]),
                    f = r.useCallback(() => {
                        clearTimeout(_.current), (_.current = setTimeout(u, 500));
                    }, [u]),
                    g = r.useCallback(() => {
                        clearTimeout(_.current);
                    }, []);
                return r.useEffect(() => () => clearTimeout(_.current), []), r.createElement(i.Z, { disabled: m, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, onPress: h, onPressIn: f, onPressOut: g, style: [{ flexShrink: 1 }, s] }, e);
            };
        },
        620740: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                i = a(466999);
            const n = ({ props: e, style: t }) => {
                const a = e.int("count") ?? 0;
                return r.createElement(i.Z, { style: t }, a);
            };
        },
        210633: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                i = a(325686);
            const n = a(392237).default.create((e) => ({ divider: { height: e.spaces.space2, backgroundColor: e.colors.borderColor, width: "100%" } })),
                o = ({ props: e, style: t }) => r.createElement(i.Z, { role: "separator", style: [n.divider, t] });
        },
        616825: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                i = a(555874),
                n = a(185983),
                o = a(325686),
                l = a(682830),
                s = a(167630),
                c = a(731708),
                d = a(392237),
                m = a(738124),
                _ = a(313129);
            const p = ({ header: e, scribeContext: t, src: a }) => {
                    const [l, d] = r.useState(!1),
                        [p, h] = r.useState([]),
                        [f, g] = r.useState(null),
                        [k, b] = r.useState(null),
                        y = r.useMemo(() => (f ? `/${a}?cursor=${f}` : `/${a}`), [a, f]),
                        { error: v, jfResponse: w } = (0, _._3)(y) ?? {},
                        E = r.useMemo(() => {
                            const e = w?.root?.value,
                                { children: t } = e ?? {};
                            return t?.map((t) => e?.dom.el(t)) ?? [];
                        }, [w]);
                    r.useEffect(() => {
                        E.length > 0 &&
                            (h((e) => {
                                switch (k) {
                                    case "top":
                                        return [...E, ...e];
                                    case "bottom":
                                        return [...e, ...E];
                                    default:
                                        return E;
                                }
                            }),
                            b(null),
                            d(!1));
                    }, [E, l, k]);
                    const x = r.useCallback(({ item: e }) => r.createElement(m.Z, { parentContext: t, payload: e }), [t]),
                        C = r.useCallback((e, t) => `${e.type}-${t}`, []),
                        S = r.useCallback(() => (e ? r.createElement(m.Z, { payload: e }) : null), [e]),
                        Z = r.useCallback(() => ("bottom" === k ? r.createElement(o.Z, { style: u.footer }, r.createElement(s.Z, { size: "small" })) : null), [k]),
                        P = r.useCallback(() => {}, [null, l]),
                        T = r.useCallback(() => {}, [null, l]);
                    return v ? r.createElement(c.ZP, { style: u.error }, v) : r.createElement(i.Z, { ListFooterComponent: Z, ListHeaderComponent: S, data: p, keyExtractor: C, onEndReached: T, onEndReachedThreshold: 0.1, refreshControl: r.createElement(n.Z, { onRefresh: P, refreshing: l && "top" === k }), renderItem: x });
                },
                u = d.default.create({ footer: { padding: 10, justifyContent: "center", alignItems: "center" }, error: { color: "red", textAlign: "center", marginTop: 20 } }),
                h = ({ props: e, scribeContext: t, style: a }) => {
                    const i = e.str("src"),
                        n = e.element("header");
                    return i ? r.createElement(r.Suspense, { fallback: r.createElement(l.J, null) }, r.createElement(o.Z, { style: [a, { width: "100%", overflow: "hidden" }] }, r.createElement(p, { header: n, scribeContext: t, src: i }))) : null;
                };
        },
        684799: (e, t, a) => {
            a.d(t, { It: () => v, WD: () => b, ZN: () => y, q3: () => k, rm: () => x, yH: () => w });
            var r = a(202784),
                i = a(400752),
                n = a(325686),
                o = a(530732),
                l = a(682830),
                s = a(392237),
                c = a(401388),
                d = a(666536),
                m = a(403808),
                _ = a(738124),
                p = a(420182),
                u = a(782642),
                h = a(313129),
                f = a(355335),
                g = a(190674);
            const k = r.createContext({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, submitResult: null, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, canSubmit: !1 }),
                b = ({ children: e, props: t, scribeContext: a, style: o }) => {
                    const [{ apiClient: l }] = (0, i.KO)(p.dd),
                        [s] = (0, i.KO)(p.qc),
                        [u] = (0, i.KO)(f.k),
                        b = s.getState(),
                        y = (0, g.m)(),
                        v = t.url("action") ?? "",
                        w = t.strDict("errors"),
                        E = t.url("validation"),
                        x = t.str("submissionStatus") ?? "pending",
                        [S, Z] = r.useState(() => ({})),
                        [P, T] = r.useState(),
                        [R, M] = r.useState(E ? "ongoing" : "pending"),
                        I = (0, m.r)((e) => {
                            t.setStrDict("errors", e);
                        }),
                        L = (0, m.r)((e) => {
                            t.setStr("focus", e);
                        }),
                        B = (0, m.r)((e) => {
                            t.setStrDict("values", e);
                        }),
                        N = (0, m.r)((e) => {
                            t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                        }),
                        D = (e) => {
                            M(e), t.setBool("validating", "ongoing" === e);
                        },
                        A = (0, m.r)(async () => {
                            if ("ongoing" !== x && v) {
                                N("ongoing");
                                try {
                                    const { jfResponse: e } = await (0, h.wR)(v, S, b, l, u, !1, y);
                                    e ? (T(e.root.value), N("success")) : N("error");
                                } catch (e) {
                                    N("error");
                                }
                            }
                        }),
                        z = (0, m.r)((e, t) => {
                            Z((a) => ({ ...a, [e]: t })), N("pending"), D("pending"), T();
                        }),
                        G = r.useRef(S);
                    r.useLayoutEffect(() => {
                        G.current = S;
                    }, [S]);
                    const j = (0, m.r)((e, t) => {
                            D("ongoing"),
                                (0, h.kp)(t, e, b, l, u, !1)
                                    .then(({ jsonResponse: t }) => {
                                        G.current === e && (t && !(0, c.Z)(t) ? (I(t), D("failure")) : (I({}), D("success")));
                                    })
                                    .catch(() => {
                                        D("error");
                                    });
                        }),
                        $ = r.useMemo(() => (0, d.Z)(j, 500), [j]);
                    r.useEffect(() => {
                        E && $(S, E);
                    }, [$, S, E]);
                    const W = r.useMemo(() => (E ? "success" === R : "pending" === x || "error" === x), [x, R, E]);
                    return (
                        r.useEffect(() => {
                            B(S);
                        }, [S, B]),
                        r.createElement(k.Provider, { value: { values: S, submit: A, change: z, submissionResult: P, submissionStatus: x, errors: w, setErrors: I, setFocus: L, canSubmit: W } }, r.createElement(n.Z, { style: [C.form, o] }, e), P && r.createElement(_.Z, { parentContext: a, payload: P }))
                    );
                },
                y = ({ children: e, overrideStyles: t, props: a, style: i }) => {
                    const { canSubmit: n, submit: l } = r.useContext(k),
                        s = r.useCallback(() => {
                            n && l && l();
                        }, [n, l]);
                    return r.createElement(o.Z, { disabled: !n, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, onPress: s, style: i }, e);
                },
                v = ({ children: e, props: t, scribeContext: a, style: i }) => {
                    const o = t.element("loading"),
                        { submissionResult: l, submissionStatus: s } = r.useContext(k),
                        c = o ? r.createElement(_.Z, { parentContext: a, payload: o }) : { children: e };
                    return r.createElement(n.Z, { style: i }, "ongoing" === s && o ? c : "success" === s && l ? r.createElement(_.Z, { parentContext: a, payload: l }) : e);
                },
                w = ({ children: e, props: t, scribeContext: a, style: i }) => {
                    const { values: n } = r.useContext(k),
                        o = t.url("action") ?? "",
                        s = ((e) =>
                            Object.entries(e)
                                .filter(([e, t]) => void 0 !== t)
                                .map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)
                                .join("&"))(n),
                        c = s ? `${o}${o.includes("?") ? "&" : "?"}${s}` : o;
                    return r.createElement(r.Suspense, { fallback: r.createElement(l.J, null) }, r.createElement(E, { path: c }, e));
                },
                E = ({ children: e, path: t }) => {
                    const { jfResponse: a } = (0, h.Q_)(t) ?? {};
                    return a ? r.createElement(_.Z, { payload: a }) : r.createElement(n.Z, null, e);
                },
                x = ({ children: e, props: t, style: a }) => {
                    const i = (0, u.p)(),
                        n = t.action("next"),
                        o = t.strDict("errors"),
                        { setErrors: l } = r.useContext(k);
                    return (
                        r.useEffect(() => {
                            n ? n() : (o && l(o), e && e.length > 0 && i({ text: e }));
                        }, [i, e, o, n, l]),
                        null
                    );
                };
            const C = s.default.create((e) => ({ form: { flexShrink: 1 } }));
        },
        656825: (e, t, a) => {
            a.d(t, { N7: () => d, PJ: () => c, XN: () => m });
            var r = a(202784),
                i = a(466999),
                n = a(325686),
                o = a(392237),
                l = a(417681),
                s = a(684799);
            const c = r.createContext({ groupKeys: new Set(), active: new Set(), register: (e) => {} }),
                d = ({ children: e, overrideStyles: t, props: a, style: i }) => {
                    const [o, d] = r.useState(() => new Set()),
                        { values: m } = r.useContext(s.q3),
                        _ = r.useCallback(
                            (e) => {
                                o.has(e) || d((t) => new Set(t).add(e));
                            },
                            [d, o],
                        ),
                        p = r.useCallback(
                            () =>
                                new Set(
                                    Object.entries(m)
                                        .filter(([e, t]) => t && "" !== t.trim() && o.has(e))
                                        .map((e) => e[0]),
                                ),
                            [m, o],
                        )(),
                        u = p.size > 0,
                        h = u ? t.active : {};
                    return r.createElement(c.Provider, { value: { active: p, groupKeys: o, register: _ } }, r.createElement(l.u.Provider, { value: u }, r.createElement(n.Z, { style: [{ flexShrink: 1 }, i, h] }, e)));
                },
                m = ({ style: e }) => {
                    const { active: t } = r.useContext(c);
                    return r.createElement(i.Z, { numberOfLines: 1, style: [_.text, e] }, t.size);
                },
                _ = o.default.create((e) => ({ text: { color: e.colors.text, textOverflow: "ellipsis" } }));
        },
        795164: (e, t, a) => {
            a.d(t, { Cj: () => Z, sz: () => I, Z7: () => S, _h: () => R, QP: () => T, qM: () => M });
            var r = a(202784),
                i = a(215045),
                n = a(3348),
                o = a(325686),
                l = a(392237),
                s = a(403808),
                c = a(323265),
                d = a(738124),
                m = a(417681),
                _ = a(643426),
                p = a(684799),
                u = a(656825);
            function h(e, t) {
                const a = r.useRef(!0),
                    i = r.useRef(null);
                r.useEffect(() => {
                    if (a.current) return (a.current = !1), void (i.current = e);
                    e !== i.current && t(i.current, e), (i.current = e);
                }, [e, t]);
            }
            const f = 0,
                g = 1,
                k = 2,
                b = 3,
                y = 4,
                v = 5,
                w = 6,
                E = 8,
                x = 9,
                C = 10,
                S = ({ overrideStyles: e, props: t, style: a }) => {
                    const i = t.str("name") ?? "",
                        o = t.str("label"),
                        d = t.str("value") ?? "",
                        _ = t.bool("autofocus") ?? !1,
                        h = t.enum("type") ?? f,
                        { change: S, setFocus: Z, submit: P, values: T } = r.useContext(p.q3),
                        R = h === x,
                        M = h === g,
                        I = h === E,
                        L = r.useCallback(
                            (e) => {
                                S(i, e);
                            },
                            [i, S],
                        );
                    r.useEffect(() => {
                        d && S(i, d);
                    }, [i, d, S]);
                    const { register: B } = r.useContext(u.PJ);
                    r.useEffect(() => {
                        B(i);
                    }, [i, B]);
                    const N = r.useCallback(() => {
                            Z(i);
                        }, [i, Z]),
                        D = r.useCallback(() => {
                            Z("");
                        }, [Z]),
                        A = !!T[i] && "" !== T[i],
                        z = A ? e.active : {},
                        G = I ? { display: "none" } : {},
                        j = ((e) => {
                            switch (e) {
                                case f:
                                    return "text";
                                case v:
                                    return "tel";
                                case b:
                                    return "numeric";
                                case g:
                                    return "text";
                                case w:
                                    return "url";
                                case k:
                                    return "email";
                                case y:
                                    return "text";
                                case C:
                                    return "date";
                                default:
                                    return "text";
                            }
                        })(h),
                        $ = r.useCallback(
                            (e) => {
                                const t = e.currentTarget.value;
                                t && S(i, new Date(t).toISOString());
                            },
                            [S, i],
                        ),
                        W = T[i] ?? d,
                        q = { border: 0, outline: 0, flexShrink: 1, minWidth: 50, flexGrow: 1, ...a, ...z, ...G },
                        F = "content" === a.fieldSizing && !c.ZP.isChrome(),
                        O = r.useRef(null),
                        [H, K] = r.useState(0),
                        U = (0, s.r)((e) => {
                            if (!F) return;
                            const t = O.current,
                                a = document.createElement("span");
                            (a.style.visibility = "hidden"), (a.style.position = "absolute"), (a.style.font = window.getComputedStyle(t).font);
                            let r = (e || o) ?? "";
                            h === g && (r = new Array(r.length).fill(c.ZP.isSafari() ? "#" : "•").join("")), (a.textContent = r), document.body.appendChild(a);
                            const i = a.offsetWidth + (c.ZP.isSafari() ? 40 : 20);
                            document.body.removeChild(a), K(i);
                        });
                    if (
                        (r.useEffect(() => {
                            U(W);
                        }, [U, W]),
                        "date" === j)
                    ) {
                        const e = T[i] ?? d,
                            t = new Date(e).toLocaleDateString("en-CA").padStart(10, "0");
                        return r.createElement(m.u.Provider, { value: A }, r.createElement("input", { autoFocus: _, name: i, onChange: $, style: { ...q, lineHeight: "number" == typeof q.lineHeight ? `${q.lineHeight}px` : q.lineHeight }, type: "date", value: t }));
                    }
                    return r.createElement(
                        m.u.Provider,
                        { value: A },
                        r.createElement(n.Z, {
                            autoFocus: _,
                            inputMode: j,
                            multiline: R,
                            name: i,
                            onBlur: D,
                            onChangeText: L,
                            onFocus: N,
                            onSubmitEditing: () => {
                                P();
                            },
                            placeholder: o,
                            placeholderTextColor: l.default.theme.colors.gray500,
                            ref: O,
                            secureTextEntry: M,
                            style: [q, F && { width: H }],
                            value: W,
                        }),
                    );
                },
                Z = ({ children: e, overrideStyles: t, props: a, style: n }) => {
                    const o = a.str("name") ?? "",
                        l = a.bool("submit") ?? !1,
                        s = a.bool("dismiss") ?? !1,
                        { change: c, submit: d, values: f } = r.useContext(p.q3),
                        { dismiss: g } = r.useContext(_.b),
                        { register: k } = r.useContext(u.PJ);
                    r.useEffect(() => {
                        k(o);
                    }, [o, k]);
                    const b = f[o] ?? "false",
                        y = "true" === b;
                    h(b, () => {
                        l && d(), s && g && g();
                    });
                    const v = r.useCallback(() => {
                            c(o, "true" === b ? void 0 : "true");
                        }, [o, c, b]),
                        w = y ? t.active : {};
                    return r.createElement(m.u.Provider, { value: y }, r.createElement(i.Z, { onPress: v, style: [{ flexShrink: 1 }, n, w] }, e));
                },
                P = r.createContext(null),
                T = ({ children: e, overrideStyles: t, props: a, style: i }) => {
                    const n = a.str("name") ?? "",
                        l = a.bool("submit") ?? !1,
                        [s, c] = r.useState(null),
                        { submit: d, values: _ } = r.useContext(p.q3),
                        { register: f } = r.useContext(u.PJ);
                    h(_[n], () => {
                        l && d();
                    }),
                        r.useEffect(() => {
                            f(n);
                        }, [n, f]);
                    const g = !!_[n],
                        k = g ? t.active : {};
                    return r.createElement(P.Provider, { value: { name: n, submitOnChange: l, active: s, setActive: c } }, r.createElement(m.u.Provider, { value: g }, r.createElement(o.Z, { style: [{ flexShrink: 1 }, i, k] }, e)));
                },
                R = ({ children: e, overrideStyles: t, props: a, style: n }) => {
                    const o = a.str("value") ?? "",
                        l = a.element("active"),
                        s = a.bool("dismiss") ?? !1,
                        c = r.useContext(P),
                        { change: d, values: u } = r.useContext(p.q3),
                        { dismiss: f } = r.useContext(_.b),
                        g = (c?.name ? u[c.name] : null) === o;
                    h(String(g), () => {
                        s && f && f();
                    });
                    const k = r.useCallback(() => {
                            c && (g ? (d(c.name, void 0), c.setActive(null)) : (d(c.name, o), c.setActive(l)));
                        }, [c, o, d, l, g]),
                        b = g ? t.active : {};
                    return r.createElement(m.u.Provider, { value: g }, r.createElement(i.Z, { onPress: k, style: [{ flexShrink: 1 }, n, b] }, e));
                },
                M = ({ scribeContext: e, style: t }) => {
                    const a = r.useContext(P);
                    if (a?.active) return r.createElement(o.Z, { style: t }, r.createElement(d.Z, { parentContext: e, payload: a.active }));
                },
                I = ({ children: e, props: t }) => {
                    const a = t.str("name") ?? "",
                        i = t.int("length") ?? 6,
                        l = t.bool("autofocus") ?? !1,
                        s = t.bool("autosubmit") ?? !1,
                        { change: c, submit: d, values: m } = r.useContext(p.q3),
                        _ = m.code ?? "",
                        u = r.useCallback(
                            (e) => {
                                c(a, e), t.setStrDict("code", Array.from(e));
                            },
                            [c, a, t],
                        ),
                        h = r.useMemo(() => Array.from({ length: i }).map(() => r.createRef()), [i]);
                    r.useEffect(() => {
                        _.length === i && s ? d() : h[_.length]?.current?.focus();
                    }, [s, _, h, i, d]);
                    const f = r.useCallback(
                            (e, t) => {
                                const a = _.slice(0, t) + e + _.slice(t + 1);
                                u(a);
                            },
                            [_, u],
                        ),
                        g = (e) => {
                            "Backspace" === e.key && (u(_.slice(0, _.length - 1)), e.preventDefault());
                        },
                        [k, b] = r.useState(0),
                        [y, v] = r.useState(10),
                        w = r.useRef(null);
                    r.useLayoutEffect(() => {
                        const e = w.current?.firstElementChild,
                            t = e?.firstElementChild;
                        if (e && t) {
                            const a = e.getBoundingClientRect().width,
                                r = t.getBoundingClientRect().width;
                            b((a - r * i) / (i - 1)), v(r);
                        }
                    }, [w, i]);
                    const E = [L.inputs, { gap: k }],
                        x = [L.input, { width: y }];
                    return r.createElement(
                        o.Z,
                        { ref: w, style: L.container },
                        e,
                        r.createElement(
                            o.Z,
                            { style: E },
                            Array.from({ length: i }).map((e, t) => r.createElement(n.Z, { autoFocus: l && 0 === t, inputMode: "numeric", key: t, maxLength: i, onChangeText: (e) => f(e, t), onKeyPress: g, ref: h[t], style: x, value: _[t] ?? "" })),
                        ),
                    );
                },
                L = l.default.create((e) => ({ container: { position: "relative", width: "100%", alignItems: "center" }, inputs: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, display: "flex", flexDirection: "row", justifyContent: "center" }, input: { minWidth: 0, outline: 0, textAlign: "center", caretColor: e.colors.text, color: "transparent" } }));
        },
        665161: (e, t, a) => {
            a.d(t, { U: () => d });
            var r = a(202784),
                i = a(466999),
                n = a(3348),
                o = a(325686),
                l = a(392237),
                s = a(417681),
                c = a(684799);
            const d = ({ overrideStyles: e, props: t, style: a }) => {
                    const d = t.str("name") ?? "",
                        g = t.str("placeholder") ?? "",
                        k = t.str("countryCode") ?? "+1",
                        b = t.strList("allowedCountryCodes"),
                        y = t.bool("countryCodePickerDisabled") ?? !1,
                        { change: v, submit: w, values: E } = r.useContext(c.q3),
                        [x, C] = r.useState(""),
                        [S, Z] = r.useState(() => u.find((e) => e.dial_code === k) ?? p),
                        P = r.useMemo(() => f(x, S.pattern), [S.pattern, x]),
                        T = r.useMemo(() => u.filter((e) => b.includes(e.dial_code)), [b]),
                        R = r.useCallback(
                            (e) => {
                                const t = T.find((t) => t.name === e.currentTarget.value);
                                t && Z(t);
                            },
                            [T],
                        );
                    r.useEffect(() => {
                        v(d, S.dial_code + h(x));
                    }, [v, S, d, x]);
                    const M = !!E[d] && "" !== E[d],
                        I = M ? e.active : {},
                        [L, B] = m(a),
                        N = r.useMemo(() => {
                            let e = 0;
                            for (let t = 0; t < S.pattern.length; t++) "#" === S.pattern[t] ? (e += 1) : (e += 0.5);
                            return `${Math.ceil(e)}ch`;
                        }, [S.pattern]);
                    return r.createElement(
                        s.u.Provider,
                        { value: M },
                        r.createElement(
                            o.Z,
                            { style: [_.container, B, I] },
                            r.createElement(
                                o.Z,
                                { style: _.countryCodeContainer },
                                r.createElement(i.Z, { style: [_.countryCode, y && _.countryCodeDisabled, L] }, S.dial_code),
                                r.createElement(
                                    "select",
                                    { disabled: y, onChange: R, style: _.countryCodeSelector },
                                    T.map((e) => r.createElement("option", { key: e.name, value: e.name }, e.name, "(", e.dial_code, ")")),
                                ),
                            ),
                            r.createElement(n.Z, {
                                autoFocus: !0,
                                inputMode: "tel",
                                maxLength: S.limit,
                                name: d,
                                onChangeText: C,
                                onSubmitEditing: () => {
                                    w();
                                },
                                placeholder: g || S.pattern,
                                placeholderTextColor: l.default.theme.colors.gray500,
                                style: [L, { width: N }, { border: 0, outline: 0 }],
                                value: P,
                            }),
                        ),
                    );
                },
                m = (e) => {
                    const { fontSize: t, fontStyle: a, fontWeight: r, letterSpacing: i, lineHeight: n, ...o } = e;
                    return [{ fontSize: t, fontStyle: a, fontWeight: r, letterSpacing: i, lineHeight: n }, o];
                },
                _ = l.default.create((e) => ({ container: { flexDirection: "row", gap: e.spaces.space4 }, countryCodeContainer: { alignItems: "flex-end", position: "relative" }, countryCode: { paddingEnd: e.spaces.space4, color: e.colors.link }, countryCodeDisabled: { color: e.colors.text }, countryCodeSelector: { position: "absolute", start: 0, top: 0, end: 0, bottom: 0, opacity: 0 } })),
                p = { name: "United States", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                u = [
                    { name: "Afghanistan", dial_code: "+93", pattern: "### ### ####", limit: 12 },
                    { name: "Albania", dial_code: "+355", pattern: "### ### ###", limit: 11 },
                    { name: "Algeria", dial_code: "+213", pattern: "### ## ## ##", limit: 12 },
                    { name: "Andorra", dial_code: "+376", pattern: "### ###", limit: 7 },
                    { name: "Angola", dial_code: "+244", pattern: "### ### ###", limit: 11 },
                    { name: "Antigua and Barbuda", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Argentina", dial_code: "+54", pattern: "##########", limit: 10 },
                    { name: "Armenia", dial_code: "+374", pattern: "## ######", limit: 9 },
                    { name: "Australia", dial_code: "+61", pattern: "#### ### ###", limit: 12 },
                    { name: "Austria", dial_code: "+43", pattern: "#### ####", limit: 9 },
                    { name: "Azerbaijan", dial_code: "+994", pattern: "## ### ## ##", limit: 11 },
                    { name: "Bahamas", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Bahrain", dial_code: "+973", pattern: "#### ####", limit: 9 },
                    { name: "Bangladesh", dial_code: "+880", pattern: "####-#######", limit: 12 },
                    { name: "Barbados", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Canada", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Dominica", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Dominican Republic", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Grenada", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Jamaica", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Saint Kitts and Nevis", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Saint Lucia", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Saint Vincent and the Grenadines", dial_code: "+1", pattern: "### ### ####", limit: 12 },
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
                    { name: "Trinidad and Tobago", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Tunisia", dial_code: "+216", pattern: "##-###-###", limit: 11 },
                    { name: "Turkey", dial_code: "+90", pattern: "###-###-####", limit: 12 },
                    { name: "Turkmenistan", dial_code: "+993", pattern: "##-###-####", limit: 12 },
                    { name: "Tuvalu", dial_code: "+688", pattern: "###-###", limit: 9 },
                    { name: "Uganda", dial_code: "+256", pattern: "###-###-###", limit: 11 },
                    { name: "Ukraine", dial_code: "+380", pattern: "##-###-##-##", limit: 12 },
                    { name: "United Arab Emirates", dial_code: "+971", pattern: "##-###-####", limit: 12 },
                    { name: "United Kingdom", dial_code: "+44", pattern: "#### ### ####", limit: 13 },
                    { name: "United States", dial_code: "+1", pattern: "### ### ####", limit: 12 },
                    { name: "Uruguay", dial_code: "+598", pattern: "###-###-###", limit: 12 },
                    { name: "Uzbekistan", dial_code: "+998", pattern: "##-###-####", limit: 12 },
                    { name: "Vanuatu", dial_code: "+678", pattern: "###-####", limit: 10 },
                    { name: "Vatican City", dial_code: "+379", pattern: "###-###", limit: 9 },
                    { name: "Venezuela", dial_code: "+58", pattern: "###-###-####", limit: 12 },
                    { name: "Vietnam", dial_code: "+84", pattern: "###-####-####", limit: 13 },
                    { name: "Yemen", dial_code: "+967", pattern: "###-###-###", limit: 11 },
                    { name: "Zambia", dial_code: "+260", pattern: "###-###-###", limit: 11 },
                    { name: "Zimbabwe", dial_code: "+263", pattern: "###-###-###", limit: 1 },
                ],
                h = (e) => e.replace(/\D/g, ""),
                f = (e, t) => {
                    const a = h(e);
                    let r = "",
                        i = 0;
                    for (let e = 0; e < t.length && !(i >= a.length); e++) "#" === t[e] ? ((r += a[i]), i++) : (r += t[e]);
                    return r;
                };
        },
        761459: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(202784),
                i = a(457311),
                n = a(111677),
                o = a.n(n),
                l = a(810641),
                s = a(519896),
                c = a(383675),
                d = a(293115);
            const m = o().e9f1fbcc,
                _ = o().a3b80be6,
                p = () => r.createElement(i.Z, { header: m, message: _ }),
                u = ({ children: e, props: t, style: a }) => {
                    const i = t.str("timelineId"),
                        n = t.str("name") ?? "JF-GenericURT",
                        o = t.str("scribe_page") ?? "jf-urt",
                        m = t.str("scribe_section") ?? void 0,
                        _ = ((e) => r.useMemo(() => (e ? (0, c.R)(e, !1) : void 0), [e]))(i);
                    if (_) {
                        const e = { page: o, section: m };
                        return r.createElement(d.nO, { namespace: e }, r.createElement(l.Z, { module: _, prerollDisplayLocation: s.Nw.OTHER, refreshControl: null, renderEmptyState: p, title: n }));
                    }
                };
        },
        271215: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                i = a(325686);
            const n = 0,
                o = 1,
                l = 2,
                s = ({ children: e, props: t, style: a }) => {
                    const s = t.int("columns") ?? 1;
                    let c, d;
                    switch (t.enum("align")) {
                        case n:
                            (c = "start"), (d = "left");
                            break;
                        case l:
                            (c = "end"), (d = "right");
                            break;
                        case o:
                            (c = "center"), (d = "center");
                            break;
                        default:
                            (c = "start"), (d = "left");
                    }
                    const { width: m, ..._ } = a,
                        p = { display: "flex", flexDirection: "column", flexShrink: 1, textAlign: d, justifyContent: "center", alignItems: c, flexBasis: 0, flexGrow: s, width: 0, ..._ };
                    return r.createElement(i.Z, { style: p }, e);
                };
        },
        340454: (e, t, a) => {
            a.d(t, { _: () => r });
            const r = a(202784).createContext({ gapH: null });
        },
        288513: (e, t, a) => {
            a.d(t, { Z: () => p });
            var r = a(202784),
                i = a(325686),
                n = a(340454);
            const o = 0,
                l = 1,
                s = 2,
                c = 3,
                d = 4,
                m = 5,
                _ = 6,
                p = ({ children: e, props: t, style: a }) => {
                    const p = t.f32("gapH") ?? 0,
                        u = t.f32("gapV") ?? 0;
                    let h;
                    switch (t.enum("alignment")) {
                        case o:
                            h = "flex-start";
                            break;
                        case l:
                            h = "flex-end";
                            break;
                        case s:
                        case _:
                            h = "center";
                            break;
                        case c:
                            h = "baseline";
                            break;
                        case d:
                            h = "flex-start";
                            break;
                        case m:
                            h = "flex-end";
                            break;
                        default:
                            h = "center";
                    }
                    const f = { display: "flex", flexDirection: "column", gap: u, alignItems: h, ...a, flex: 1, flexBasis: "auto", width: "100%" },
                        g = r.useMemo(() => ({ gapH: p }), [p]);
                    return r.createElement(n._.Provider, { value: g }, r.createElement(i.Z, { style: f }, e));
                };
        },
        693603: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                i = a(325686),
                n = a(340454);
            const o = 0,
                l = 1,
                s = 2,
                c = 3,
                d = ({ children: e, props: t, style: a }) => {
                    const d = r.useContext(n._),
                        m = t.int("gap") ?? d.gapH ?? 2;
                    let _;
                    switch (t.enum("align")) {
                        case l:
                            _ = "flex-start";
                            break;
                        case c:
                            _ = "flex-end";
                            break;
                        case o:
                            _ = "center";
                            break;
                        case s:
                            _ = "baseline";
                            break;
                        default:
                            _ = "flex-start";
                    }
                    const { height: p, ...u } = a,
                        h = { display: "flex", flexDirection: "row", flexBasis: "auto", alignSelf: "stretch", alignItems: _, gap: m, height: "auto", ...u };
                    return r.createElement(i.Z, { style: h }, e);
                };
        },
        416028: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(325686),
                n = a(194504),
                o = a(908264);
            const l = ({ children: e, props: t, style: a }) => {
                const l = t.int("gap") ?? 2,
                    s = t.int("initialPos") ?? 0;
                let c;
                switch (t.enum("align")) {
                    case o.T.top:
                        c = "flex-start";
                        break;
                    case o.T.bottom:
                        c = "flex-end";
                        break;
                    case o.T.center:
                        c = "center";
                        break;
                    case o.T.baseline:
                        c = "baseline";
                        break;
                    default:
                        c = "flex-start";
                }
                return r.createElement(i.Z, { style: { width: "100%" } }, r.createElement(n.Z, { childrenStyle: { paddingRight: l }, showNavButtonsOnHover: !0, style: { flexDirection: "row", alignItems: c, ...a }, visibleItemIndex: s }, e));
            };
        },
        908264: (e, t, a) => {
            a.d(t, { T: () => n, Z: () => o });
            var r = a(202784),
                i = a(530732);
            const n = { center: 0, top: 1, baseline: 2, bottom: 3 },
                o = ({ children: e, overrideStyles: t, props: a, style: o }) => {
                    const l = a.int("gap") ?? 2;
                    let s;
                    switch (a.enum("align")) {
                        case n.top:
                            s = "flex-start";
                            break;
                        case n.bottom:
                            s = "flex-end";
                            break;
                        case n.center:
                            s = "center";
                            break;
                        case n.baseline:
                            s = "baseline";
                            break;
                        default:
                            s = "flex-start";
                    }
                    const c = { display: "flex", flexDirection: "row", flexShrink: 1, flexBasis: "auto", alignItems: s, gap: l, ...o };
                    return r.createElement(i.Z, { interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, style: c }, e);
                };
        },
        361309: (e, t, a) => {
            a.d(t, { C: () => c });
            var r = a(202784),
                i = a(325686),
                n = a(492470),
                o = a(278065);
            const l = [
                    "accessibility_alt",
                    "accessibility_circle",
                    "account",
                    "account_nft",
                    "accounts_stroke",
                    "activity",
                    "alerts",
                    "align_center",
                    "align_left",
                    "align_right",
                    "alt_compose",
                    "alt_compose_pip",
                    "alt_compose_plus",
                    "alt_pill_stroke",
                    "arrow_360_rotate",
                    "arrow_down",
                    "arrow_down_circle_fill",
                    "arrow_down_circle_stroke",
                    "arrow_left",
                    "arrow_right",
                    "arrow_right_circle_fill",
                    "arrow_up",
                    "arrow_up_circle",
                    "arrow_up_circle_fill",
                    "arrow_up_circle_stroke",
                    "arrow_up_left",
                    "arrow_up_right",
                    "at",
                    "at_bold",
                    "at_off",
                    "audio",
                    "background_bar_circle_nomargin",
                    "background_bar_nomargin",
                    "balloon",
                    "balloon_stroke",
                    "bar_chart",
                    "bar_chart_bold",
                    "bar_chart_horizontal",
                    "bar_chart_horizontal_stroke",
                    "bee",
                    "birdwatch",
                    "birdwatch_fill",
                    "birdwatch_flag",
                    "birdwatch_flag_stroke",
                    "bluetooth",
                    "book",
                    "book_stroke_off",
                    "book_stroke_on",
                    "bookmark",
                    "bookmark_close_stroke",
                    "bookmark_collections_stroke",
                    "bookmark_folders_plus_stroke",
                    "bookmark_plus_stroke",
                    "bookmark_stroke",
                    "bot",
                    "briefcase",
                    "briefcase_stroke",
                    "browser_chrome",
                    "browser_safari",
                    "bulleted_list",
                    "calendar",
                    "camera",
                    "camera_flash",
                    "camera_flash_off",
                    "camera_flip",
                    "camera_live_stroke",
                    "camera_plus",
                    "camera_plus_stroke",
                    "camera_stroke",
                    "camera_video",
                    "camera_video_stroke",
                    "camera_video_stroke_off",
                    "cards",
                    "cart",
                    "caution",
                    "caution_stroke",
                    "chat_bubble_checkmark_stroke",
                    "chat_bubble_plus_stroke",
                    "chat_bubble_star_stroke",
                    "chat_bubble_strikethrough_stroke",
                    "chat_bubble_stroke",
                    "checkall",
                    "checkmark",
                    "checkmark_circle",
                    "checkmark_circle_fill",
                    "checkmark_circle_fill_white",
                    "checkmark_square_fill",
                    "chevron_down",
                    "chevron_down_nomargin",
                    "chevron_left",
                    "chevron_right",
                    "chevron_thick_down",
                    "chevron_up",
                    "chevron_up_nomargin",
                    "circle",
                    "circle_fill_nomargin",
                    "clip_stroke",
                    "clock",
                    "clock_circle_fill",
                    "clone",
                    "close",
                    "close_circle",
                    "close_circle_fill",
                    "close_circle_fill_white",
                    "close_nomargin",
                    "closedcaptioning",
                    "closedcaptioning_none",
                    "closedcaptioning_stroke",
                    "cloud_fill",
                    "cloud_off",
                    "cloud_stroke",
                    "code",
                    "collaboration",
                    "collaboration_stroke",
                    "collections",
                    "colorpicker",
                    "colorpicker_off",
                    "colorpicker_on",
                    "column_stroke",
                    "communities",
                    "communities_arrow_stroke",
                    "communities_plus_stroke",
                    "communities_stroke",
                    "compose",
                    "compose_dm",
                    "compose_lists",
                    "compose_spaces",
                    "connect_arrows",
                    "creditcard_back",
                    "crop_corner_nomargin",
                    "crop_original",
                    "crop_square",
                    "crop_wide",
                    "deck_stroke",
                    "deepvoice",
                    "device_airplay",
                    "device_laptop",
                    "device_notification",
                    "device_phone",
                    "device_tablet",
                    "device_tv",
                    "device_unknown",
                    "devtool_bug_nomargin",
                    "devtool_wrench_nomargin",
                    "document",
                    "drafts",
                    "drawer",
                    "drawer_on",
                    "error_circle",
                    "error_circle_fill",
                    "error_circle_fill_white",
                    "error_circle_fill_white_tint",
                    "exiting",
                    "eye",
                    "eye_off",
                    "fast_forward",
                    "feather",
                    "feedback",
                    "feedback_close_stroke",
                    "feedback_stroke",
                    "filter",
                    "filter_fill",
                    "fire",
                    "fire_circle_fill",
                    "fire_stroke",
                    "fire_tint_gradient",
                    "flag",
                    "flag_fill",
                    "flask",
                    "flask_stroke",
                    "follow",
                    "follow_arrow_left_fill",
                    "follow_arrow_left_stroke",
                    "follow_arrows",
                    "follow_close_stroke",
                    "follow_plus",
                    "following",
                    "following_stroke",
                    "foursquare_nomargin",
                    "frown_circle",
                    "frown_circle_fill",
                    "gaming",
                    "gif_compose",
                    "gif_compose_off",
                    "gif_pill",
                    "gif_pill_stroke",
                    "giphy_nomargin",
                    "glasses",
                    "globe",
                    "globe_stroke",
                    "google",
                    "google_color",
                    "government_flag",
                    "grok",
                    "grok_fun",
                    "grok_new_chat",
                    "grok_normal_mode_with_text",
                    "grok_stroke",
                    "hash",
                    "hash_stroke",
                    "heart",
                    "heart_bold",
                    "heart_broken_stroke",
                    "heart_burst",
                    "heart_circle_fill",
                    "heart_disabled_stroke",
                    "heart_plus",
                    "heart_plus_stroke",
                    "heart_stroke",
                    "heart_stroke_bold",
                    "help_circle",
                    "help_circle_fill",
                    "highlights",
                    "history",
                    "home",
                    "home_stroke",
                    "illustration_safety_attention_increase",
                    "illustration_safety_mute",
                    "illustration_safety_mute_conversation",
                    "illustration_safety_mute_words",
                    "immersive_pause",
                    "immersive_play",
                    "incoming",
                    "increasing_background",
                    "information_circle",
                    "information_circle_fill",
                    "key_stroke",
                    "layers_stroke",
                    "lightbulb_stroke_off",
                    "lightbulb_stroke_on",
                    "lightning",
                    "lightning_circle_fill",
                    "lightning_stroke",
                    "link",
                    "lists",
                    "lists_stroke",
                    "live",
                    "live_photo_on",
                    "location",
                    "location_current",
                    "location_stroke",
                    "lock",
                    "lock_stroke",
                    "lock_unlocked",
                    "logo_apple",
                    "logo_google_g_color",
                    "logo_small_bandcamp",
                    "logo_small_bitcoin",
                    "logo_small_cashapp",
                    "logo_small_chipper",
                    "logo_small_ethereum",
                    "logo_small_flutterwave",
                    "logo_small_gofundme",
                    "logo_small_kakaopay",
                    "logo_small_paga",
                    "logo_small_patreon",
                    "logo_small_paypal",
                    "logo_small_paytm",
                    "logo_small_picpay",
                    "logo_small_razorpay",
                    "logo_small_venmo",
                    "logo_small_wealthsimple",
                    "logo_youtube",
                    "media_cast_connected",
                    "media_cast_connecting_1",
                    "media_cast_connecting_2",
                    "media_cast_connecting_3",
                    "media_cast_disconnected",
                    "media_collapse",
                    "media_dock",
                    "media_expand",
                    "media_playback_speed",
                    "media_selection_nomargin",
                    "media_slowmotion",
                    "media_tab",
                    "media_tab_stroke",
                    "medium_camera_live_stroke",
                    "medium_camera_stroke",
                    "medium_news_stroke",
                    "medium_photo_stroke",
                    "medium_plus",
                    "medium_trashcan_stroke",
                    "megaphone",
                    "menu",
                    "messages",
                    "messages_arrow_left_stroke",
                    "messages_stroke",
                    "microphone",
                    "microphone_handheld",
                    "microphone_stroke",
                    "microphone_stroke_off",
                    "microsoft_nomargin",
                    "minus",
                    "minus_circle",
                    "minus_circle_fill",
                    "moderation",
                    "moderation_plus",
                    "moderator",
                    "moderator_close",
                    "moderator_plus",
                    "moderator_stroke",
                    "money",
                    "money_stroke",
                    "more",
                    "more_circle",
                    "mouse_click_circle_fill",
                    "news",
                    "news_stroke",
                    "no",
                    "no_off",
                    "notifications",
                    "notifications_follow",
                    "notifications_following",
                    "notifications_highlight",
                    "notifications_milestone",
                    "notifications_off",
                    "notifications_recommendation",
                    "notifications_safety",
                    "notifications_security_alert",
                    "notifications_security_unknown",
                    "notifications_spaces",
                    "notifications_stroke",
                    "number_1",
                    "number_2",
                    "number_3",
                    "outgoing",
                    "paintbrush_box",
                    "paintbrush_stroke",
                    "papago",
                    "pause",
                    "pencil",
                    "pencil_stroke",
                    "people",
                    "people_crowd",
                    "people_crowd_stroke",
                    "people_group",
                    "people_group_stroke",
                    "people_stroke",
                    "people_stroke_off",
                    "periscope",
                    "periscope_viewers_nomargin",
                    "person",
                    "person_checkmark",
                    "person_checkmark_stroke",
                    "person_circle_fill",
                    "person_heart",
                    "person_heart_stroke",
                    "person_stroke",
                    "phone",
                    "phone_stroke",
                    "photo",
                    "photo_crop",
                    "photo_enhance",
                    "photo_error",
                    "photo_load",
                    "photo_load_4k",
                    "photo_person_stroke",
                    "photo_rotate",
                    "photo_stroke",
                    "pin",
                    "pin_stroke",
                    "pin_stroke_off",
                    "placeholder_live_nomargin",
                    "play",
                    "play_circle",
                    "play_circle_fill",
                    "play_circle_white",
                    "play_error",
                    "plus",
                    "plus_circle",
                    "plus_circle_fill",
                    "profanity",
                    "promote_mode",
                    "promoted_circle",
                    "promoted_pill",
                    "promoted_pill_stroke",
                    "qr_code",
                    "qr_code_scanner",
                    "quickshare",
                    "quickshare_stroke",
                    "quill",
                    "quote_stroke",
                    "rating_half_nomargin",
                    "rating_nomargin",
                    "reload",
                    "reply",
                    "reply_alt",
                    "reply_alt_stroke",
                    "reply_off",
                    "reply_stroke",
                    "reply_stroke_bold",
                    "retweet",
                    "retweet_bold",
                    "retweet_off",
                    "retweet_stroke",
                    "retweet_stroke_bold",
                    "rewind",
                    "riffsy_nomargin",
                    "rocket_stroke",
                    "safety",
                    "safety_mode",
                    "safety_mode_stroke",
                    "schedule",
                    "scrub_bar_nomargin",
                    "scrub_playhead_nomargin",
                    "search",
                    "search_nomargin",
                    "search_person_stroke",
                    "search_stroke",
                    "settings",
                    "settings_stroke",
                    "share",
                    "share_stroke",
                    "share_stroke_bold",
                    "shooting_star_circle_fill",
                    "shop_module",
                    "shopping",
                    "shopping_clock",
                    "shopping_clock_stroke",
                    "shopping_stroke",
                    "skip",
                    "skip_forward",
                    "skip_rewind",
                    "smile_circle",
                    "smile_circle_fill",
                    "smile_people",
                    "smile_people_close",
                    "smile_rating_1_circle",
                    "smile_rating_1_circle_fill_white",
                    "smile_rating_2_circle",
                    "smile_rating_2_circle_fill_white",
                    "smile_rating_3_circle",
                    "smile_rating_3_circle_fill_white",
                    "smile_rating_4_circle",
                    "smile_rating_4_circle_fill_white",
                    "smile_rating_5_circle",
                    "smile_rating_5_circle_fill_white",
                    "sort_arrow_down",
                    "sort_arrow_down_stroke",
                    "sort_arrow_up",
                    "sort_arrow_up_stroke",
                    "sort_arrows",
                    "sound",
                    "sound_fill",
                    "sound_off",
                    "spaces",
                    "spaces_stroke",
                    "sparkle",
                    "sparkle_stroke",
                    "spatial",
                    "speaker",
                    "speaker_off",
                    "square_stroke",
                    "ssp_display_ad_avatar",
                    "stadium",
                    "stagelight",
                    "star_rising",
                    "star_stroke",
                    "station",
                    "sticker",
                    "sticker_accessories",
                    "sticker_activity",
                    "sticker_featured",
                    "sticker_flags",
                    "sticker_food",
                    "sticker_nature",
                    "sticker_objects",
                    "sticker_people",
                    "sticker_recent",
                    "sticker_symbols",
                    "sticker_travel",
                    "sticker_words",
                    "stop",
                    "stop_circle",
                    "sunglasses",
                    "superfollow",
                    "superfollow_stroke",
                    "text_bold",
                    "text_medium",
                    "text_regular",
                    "text_size",
                    "text_size_decrease",
                    "text_size_increase",
                    "thumbs_down",
                    "thumbs_down_fill",
                    "thumbs_down_thick",
                    "thumbs_up",
                    "thumbs_up_fill",
                    "thumbs_up_thick",
                    "ticket_stroke",
                    "timeline_stroke",
                    "topics",
                    "topics_close_stroke",
                    "topics_stroke",
                    "transparency_off",
                    "transparency_on",
                    "trashcan",
                    "trashcan_stroke",
                    "trashcan_stroke_bottom_nomargin",
                    "trashcan_stroke_top_nomargin",
                    "twitter",
                    "undo",
                    "undo_tweet_demo_dim",
                    "undo_tweet_demo_light",
                    "undo_tweet_demo_light_out",
                    "verified",
                    "verified_gold",
                    "verified_gray",
                    "verified_stroke",
                    "video_collapse",
                    "video_expand",
                    "vine",
                    "voice",
                    "xpremium",
                    "xpremium_stroke",
                    "yelp_nomargin",
                    "xai_grok",
                    "radar_stroke",
                    "birdwatch_icon_writing",
                    "award",
                    "browser_globe",
                    "cookies",
                    "chart_line",
                    "heart_broken",
                    "incoming",
                    "gift_stroke",
                    "mask",
                    "megaphone_stroke",
                    "payments",
                    "payments_stroke",
                    "radar_stroke",
                    "rocket",
                    "safety_fill",
                    "timeline_alt_stroke",
                    "twitter_coin_icon",
                    "twitter_coin_stroke",
                    "verified_blue",
                    "xai",
                    "xai_stroke",
                    "xai_grok_stroke",
                    "xai_grok_tab",
                    "xai_grok_tab_stroke",
                    "YELP_RATING_0_0_nomargin",
                    "YELP_RATING_1_0_nomargin",
                    "YELP_RATING_1_5_nomargin",
                    "YELP_RATING_2_0_nomargin",
                    "YELP_RATING_2_5_nomargin",
                    "YELP_RATING_3_0_nomargin",
                    "YELP_RATING_3_5_nomargin",
                    "YELP_RATING_4_0_nomargin",
                    "YELP_RATING_4_5_nomargin",
                    "YELP_RATING_5_0_nomargin",
                    "chat",
                    "chat_stroke",
                    "grok_deepsearch",
                    "media_tab_v2_stroke",
                    "map",
                    "ball",
                    "envelope_fill",
                ],
                s = l.reduce((e, t) => {
                    const a = `Icon${((e) => {
                        const [t, ...a] = e.split("_");
                        return t.toLowerCase() + a.map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()).join("");
                    })(t).replace(/^(.)/, (e) => e.toUpperCase())}`;
                    return n[a] && (e[t] = n[a]), e;
                }, {}),
                c = ({ props: e, style: t }) => {
                    const a = e.enum("key") ?? -1,
                        n = (-1 !== a ? l[a] : void 0) ?? "",
                        c = e.int("size") ?? 24,
                        d = s[n] ?? o.default;
                    return r.createElement(i.Z, { style: t }, r.createElement(d, { style: [{ flexShrink: 0, flexGrow: 0, justifyContents: "center" }, t, { height: c, width: c }] }));
                };
        },
        943695: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                i = a(325686),
                n = a(738124);
            const o = ({ children: e, props: t, style: a }) => {
                const o = t.element("else"),
                    l = t.bool("cond") ?? !0,
                    s = o ? r.createElement(n.Z, { payload: o }) : null;
                return r.createElement(i.Z, { style: [{ flexShrink: 1 }, a] }, l ? e : s);
            };
        },
        438013: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                i = a(325686),
                n = a(992942);
            const o = ({ children: e, props: t, style: a }) => {
                const o = t.url("src") ?? "",
                    l = t.bool("fill"),
                    s = t.f32("ar");
                return r.createElement(i.Z, { style: [{ overflow: "hidden", width: "100%", height: "100%", aspectRatio: s }, a] }, r.createElement(n.Z, { resizeMode: l ? "cover" : "contain", source: { uri: o }, style: { width: "100%", height: "100%" } }));
            };
        },
        552531: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                i = a(555874);
            const n = ({ children: e, props: t, style: a }) => {
                const n = r.useCallback(({ item: e }) => e, []);
                return r.createElement(i.Z, { data: e ?? [], keyExtractor: (e, t) => `${t}`, renderItem: n });
            };
        },
        610467: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                i = a(335923);
            const n = ({ children: e, props: t, style: a }) => {
                const n = t.str("t") ?? "";
                return r.createElement(i.Z, { markdownText: n, style: [{ flexShrink: 1 }, a] });
            };
        },
        183854: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                i = a(215045),
                n = a(797553),
                o = a(661810),
                l = a(392237),
                s = a(738124),
                c = a(643426);
            const d = l.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                m = ({ children: e, props: t, scribeContext: a, style: l }) => {
                    const m = t.elements("labels"),
                        [_, p] = r.useState(!1),
                        [u, h] = r.useState(0),
                        f = e ?? [],
                        g = m ? m[u] : void 0;
                    return g && m && m?.length === f.length
                        ? r.createElement(
                              r.Fragment,
                              null,
                              _ && m
                                  ? r.createElement(
                                        n.default,
                                        { contentStyle: d.dropdown, onDismiss: () => p(!1) },
                                        r.createElement(
                                            c.b.Provider,
                                            { value: { dismiss: () => p(!1) } },
                                            e?.map((e, t) => r.createElement(i.Z, { key: t, onPress: () => h(t), style: d.item }, 0 !== t && r.createElement(o.Z, { style: d.item }), e)),
                                        ),
                                    )
                                  : r.createElement(i.Z, { onPress: () => p(!0), style: [{ flexShrink: 1 }, l] }, g ? r.createElement(s.Z, { parentContext: a, payload: g }) : void 0),
                          )
                        : null;
                };
        },
        643426: (e, t, a) => {
            a.d(t, { b: () => r });
            const r = a(202784).createContext({ dismiss: void 0 });
        },
        172993: (e, t, a) => {
            a.d(t, { Z: () => d });
            a(136728);
            var r = a(202784),
                i = a(215045),
                n = a(443781),
                o = a(946409),
                l = a(725405),
                s = a(579578);
            const c = "https://x.com",
                d = ({ children: e, props: t, scribeContext: a, style: d }) => {
                    const m = (0, l.Z)(),
                        { history: _ } = (0, n.QZ)(),
                        p = t.url("url") ?? "",
                        u = t.strDict("scribe:press") ?? {},
                        h = r.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return r.createElement(
                        i.Z,
                        {
                            onPointerDown: h,
                            onPress: () => {
                                if (p) {
                                    if (p.startsWith("twitter://jf/")) {
                                        const e = p.slice(10);
                                        _.push(`/i/${e}`);
                                    } else if (p.startsWith("twitter://")) {
                                        const e = (0, o.Mh)(p);
                                        e && _.push(e.pathname ?? "", e.state);
                                    } else if (p.startsWith("https://twitter.com")) {
                                        const e = p.slice(10);
                                        _.push(e);
                                    } else if (p.startsWith(c)) {
                                        const e = p.slice(13);
                                        _.push(e);
                                    } else window && (window.location.href = p);
                                    const e = (0, s.Q)("click", { ...a, ...u });
                                    m.scribe(e);
                                }
                            },
                            style: [{ flexShrink: 1 }, d],
                        },
                        e,
                    );
                };
        },
        779227: (e, t, a) => {
            a.d(t, { Z: () => p });
            a(136728);
            var r = a(202784),
                i = a(744610),
                n = a(215045),
                o = a(392237),
                l = a(443781),
                s = a(725405),
                c = a(579578),
                d = a(643426);
            const m = o.default.create((e) => ({ hover: { opacity: 0.8 } })),
                _ = (e) => {
                    const { paddingBottom: t, paddingEnd: a, paddingLeft: r, paddingRight: i, paddingStart: n, paddingTop: o, ...l } = e;
                    return [{ paddingStart: n, paddingTop: o, paddingBottom: t, paddingEnd: a, paddingLeft: r, paddingRight: i }, l];
                },
                p = ({ children: e, props: t, scribeContext: a, style: o }) => {
                    const { history: p } = (0, l.QZ)(),
                        u = (0, s.Z)(),
                        h = t.str("to") ?? "",
                        f = t.bool("animate") ?? !0,
                        g = h.startsWith("/") ? h.slice(1) : h,
                        { dismiss: k } = r.useContext(d.b),
                        b = r.useRef(new i.Z.Value(1)).current,
                        [y, v] = r.useState(!1),
                        w = y ? m.hover : {},
                        E = r.useCallback(() => {
                            f && i.Z.spring(b, { toValue: 0.9, velocity: 1, useNativeDriver: !0 }).start();
                        }, [f, b]),
                        x = r.useCallback(() => {
                            f && i.Z.spring(b, { toValue: 1, velocity: 1, useNativeDriver: !0 }).start();
                        }, [f, b]),
                        C = { transform: [{ scale: b }] },
                        S = r.useCallback(() => {
                            const e = t.strDict("scribe:press") ?? {},
                                r = (0, c.Q)("navigate", { ...a, ...e });
                            u.scribe(r), ":back" === g ? p.goBack() : k && ":dismiss" === g ? k() : p.push(`/i/jf/${g}`);
                        }, [g, k, u, a, p, t]),
                        Z = r.useCallback((e) => {
                            e.stopPropagation();
                        }, []),
                        [P, T] = _(o);
                    return r.createElement(
                        i.Z.View,
                        { style: [{ flexShrink: 1 }, T, C, w] },
                        r.createElement(
                            n.Z,
                            {
                                onMouseEnter: () => {
                                    v(!0);
                                },
                                onMouseLeave: () => {
                                    v(!1);
                                },
                                onPointerDown: Z,
                                onPress: S,
                                onPressIn: E,
                                onPressOut: x,
                                style: [P, { flexGrow: 1 }],
                            },
                            e,
                        ),
                    );
                };
        },
        723129: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                i = a(325686);
            const n = ({ children: e, props: t }) => {
                const a = t.int("activePage") ?? 0;
                if (e) return r.createElement(i.Z, { style: { flex: 1 } }, e[a]);
            };
        },
        312604: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(325686),
                n = a(738124);
            const o = 0;
            const l = function ({ children: e, props: t, style: a }) {
                const l = t.element("header"),
                    s = t.element("footer"),
                    c = t.enum("headerBehavior"),
                    d = { ...(c === o && { position: "fixed", top: 8 }) },
                    m = { ...(c === o && { position: "fixed", bottom: 8 }) };
                return r.createElement(i.Z, { style: [{ flex: 1 }, a] }, r.createElement(i.Z, { style: d }, l && r.createElement(n.Z, { payload: l, style: d })), e, r.createElement(i.Z, { style: m }, s && r.createElement(n.Z, { payload: s })));
            };
        },
        121152: (e, t, a) => {
            a.d(t, { Z: () => n });
            var r = a(202784),
                i = a(325686);
            const n = ({ children: e, props: t, style: a }) => r.createElement(i.Z, { style: a }, e);
        },
        95894: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                i = a(215045),
                n = a(325686),
                o = a(797553),
                l = a(392237),
                s = a(738124),
                c = a(643426);
            const d = l.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                m = ({ children: e, props: t, scribeContext: a, style: l }) => {
                    const m = t.element("popover"),
                        [_, p] = r.useState(!1);
                    return r.createElement(n.Z, { style: { position: "relative", display: "inline-block" } }, r.createElement(i.Z, { onPress: () => p(!0), style: [{ flexShrink: 1 }, l] }, e), _ && m && r.createElement(o.default, { contentStyle: d.dropdown, onDismiss: () => p(!1) }, r.createElement(c.b.Provider, { value: { dismiss: () => p(!1) } }, r.createElement(s.Z, { parentContext: a, payload: m }))));
                };
        },
        77481: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                i = a(682830),
                n = a(738124),
                o = a(313129);
            const l = ({ autoRefreshSeconds: e, children: t, scribeContext: a, src: i }) => {
                    const { jfResponse: l } = (0, o.Q_)(i ?? "", e ?? 30) ?? {};
                    return l && l.root ? r.createElement(n.Z, { parentContext: a, payload: l.root.value }) : r.createElement(r.Fragment, null, t);
                },
                s = ({ children: e, props: t, scribeContext: a, style: n }) => {
                    const o = t.url("src"),
                        s = t.int("autoRefreshSeconds");
                    return r.createElement(r.Suspense, { fallback: (e?.length ?? 0) > 0 ? r.createElement(r.Fragment, null, e) : r.createElement(i.J, null) }, r.createElement(l, { autoRefreshSeconds: s, scribeContext: a, src: o }, e));
                };
        },
        343158: (e, t, a) => {
            a.d(t, { Z: () => _ });
            var r = a(202784),
                i = a(325686),
                n = a(731708),
                o = a(392237),
                l = a(324345);
            const s = ({ part: e, style: t }) => {
                    const [a, i, o] = e;
                    switch (a) {
                        case l.N.Text:
                            return r.createElement(n.ZP, { style: t }, i);
                        case l.N.Link:
                        case l.N.Hashtag:
                            return r.createElement(n.ZP, { link: c(o), style: { ...t, color: void 0 } }, i);
                        case l.N.Mention:
                        case l.N.Symbol:
                            return r.createElement(n.ZP, { link: c(o), style: { ...t, color: void 0 } }, "@", i);
                        case l.N.Bold:
                            return r.createElement(n.ZP, { style: [d.bold, t] }, i);
                        case l.N.Italic:
                            return r.createElement(n.ZP, { style: [d.italic, t] }, i);
                        case l.N.Empty:
                        default:
                            return null;
                    }
                },
                c = (e) => ({ pathname: e ?? "/", external: !0, openInSameFrame: !1 }),
                d = o.default.create((e) => ({ container: { display: "block" }, italic: { fontStyle: "italic" }, bold: { fontWeight: "bold" } })),
                m = (e) => {
                    const { color: t, fontSize: a, fontStyle: r, fontWeight: i, letterSpacing: n, lineHeight: o, ...l } = e;
                    return [{ fontSize: a, fontStyle: r, fontWeight: i, letterSpacing: n, lineHeight: o, color: t }, l];
                },
                _ = ({ children: e, props: t, style: a }) => {
                    const n = t.richtext("text") ?? [],
                        [o, l] = m(a);
                    return r.createElement(
                        i.Z,
                        { style: [d.container, l] },
                        n.map((e, t) => r.createElement(s, { key: t, part: e, style: o })),
                    );
                };
        },
        800539: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(202784),
                i = a(215045),
                n = a(138099),
                o = a(392237),
                l = a(323265),
                s = a(738124),
                c = a(643426);
            const d = o.default.create((e) => ({ sheet: { backgroundColor: "rgba(0,0,0,0)" }, sheetFullScreen: { justifyContent: "center" } })),
                m = ({ children: e, props: t, scribeContext: a, style: o }) => {
                    const m = t.element("cover"),
                        _ = t.bool("blurBackground") ?? !0,
                        [p, u] = r.useState(!1),
                        h = l.ZP.isMobileOS();
                    return r.createElement(r.Fragment, null, p && m ? r.createElement(n.Z, { onMaskClick: () => u(!1), role: "preview", style: [d.sheet, h && d.sheetFullScreen], type: "full", withMask: _ }, r.createElement(c.b.Provider, { value: { dismiss: () => u(!1) } }, r.createElement(s.Z, { parentContext: a, payload: m }))) : null, r.createElement(i.Z, { onPress: () => u(!0), style: [{ flexShrink: 1 }, o] }, e));
                };
        },
        710856: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                i = a(325686),
                n = a(922477);
            const o = ({ props: e, style: t }) => {
                const a = e.str("width"),
                    o = e.str("height"),
                    l = e.str("fill"),
                    s = l ? (0, n.L)(l) : void 0,
                    c = { width: a && !a.endsWith("%") ? `${a}px` : a, height: o && !o.endsWith("%") ? `${o}px` : o, borderRadius: "50%", backgroundColor: s };
                return r.createElement(i.Z, { style: [c, t] });
            };
        },
        922477: (e, t, a) => {
            a.d(t, { L: () => l, Z: () => s });
            var r = a(202784),
                i = a(325686),
                n = a(297678);
            const o = (e) => `#${Math.max(0, Math.min(e, 16777215)).toString(16).padStart(6, "0")}`,
                l = (e) => {
                    const t = e.split("-");
                    return 2 === t.length ? o(n.Z[t[0]][t[1]]) : 1 === t.length ? o(n.Z[t[0]][""]) : void 0;
                },
                s = ({ props: e, style: t }) => {
                    const a = e.str("fill"),
                        n = a ? l(a) : void 0,
                        o = e.bool("rounded"),
                        s = e.int("cornerRadius"),
                        c = e.str("width"),
                        d = e.str("height"),
                        m = { width: c && !c.endsWith("%") ? `${c}px` : c, height: d && !d.endsWith("%") ? `${d}px` : d, background: n, borderRadius: o ? 9999 : s, flexShrink: 1 };
                    return r.createElement(i.Z, { style: [t, m] });
                };
        },
        233531: (e, t, a) => {
            a.d(t, { Z: () => p });
            a(136728);
            var r = a(202784),
                i = a(576648),
                n = a(215045),
                o = a(534319),
                l = a(443781),
                s = a(643426);
            const c = 0,
                d = 7,
                m = 8,
                _ = 9,
                p = ({ children: e, props: t, style: a }) => {
                    const { dismiss: p } = r.useContext(s.b),
                        u = t.url("url") ?? "",
                        h = t.enum("target") ?? "",
                        f = t.bool("dismissOnClick") ?? !1,
                        { history: g } = (0, l.QZ)(),
                        k = r.useCallback(() => {
                            switch (h) {
                                case c:
                                    g.push({ state: { text: u }, pathname: "/compose/post" });
                                    break;
                                case d:
                                    g.push({ state: { text: u }, pathname: "/messages/compose" });
                                    break;
                                case m:
                                    o.Z.share({ url: u });
                                    break;
                                case _:
                                    i.Z.setString(u);
                                    break;
                                default:
                                    o.Z.share({ url: u });
                            }
                            f && p?.();
                        }, [p, f, g, h, u]);
                    return r.createElement(n.Z, { onPress: k, style: [{ flexShrink: 1 }, a] }, e);
                };
        },
        792842: (e, t, a) => {
            a.d(t, { C: () => g });
            var r = a(202784),
                i = a(878052),
                n = a(215045),
                o = a(325686),
                l = a(138099),
                s = a(738124),
                c = a(643426);
            const d = 0,
                m = 1,
                _ = 2,
                p = 6,
                u = 8,
                h = 9,
                f = (e) => {
                    const t = i.Z.get("screen").height;
                    switch (e) {
                        case d:
                            return 400;
                        case m:
                            return 0.5 * t;
                        case _:
                            return 0.9 * t;
                        case u:
                            return 300;
                        case h:
                            return 200;
                        default:
                            return;
                    }
                },
                g = ({ children: e, props: t, scribeContext: a, style: i }) => {
                    const d = t.element("content"),
                        m = t.enum("mode") ?? p,
                        _ = t.bool("bgInteraction") ?? !0,
                        [u, h] = r.useState(!1);
                    return r.createElement(r.Fragment, null, u && d && r.createElement(l.Z, { onMaskClick: () => h(!1), role: "preview", type: "bottom", withMask: _ }, r.createElement(c.b.Provider, { value: { dismiss: () => h(!1) } }, r.createElement(o.Z, { style: { width: "100%", height: f(m) } }, r.createElement(s.Z, { parentContext: a, payload: d })))), r.createElement(n.Z, { onPress: () => h(!0), style: [{ flexShrink: 1 }, i] }, e));
                };
        },
        422089: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var r = a(202784),
                i = a(325686),
                n = a(466999),
                o = a(107267),
                l = a(392237),
                s = a(167630),
                c = a(111677),
                d = a.n(c),
                m = a(403808),
                _ = a(323265),
                p = a(443781),
                u = a(125363),
                h = a(390387),
                f = a(929378),
                g = a(163889),
                k = a(725516),
                b = a(684799);
            const y = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                v = d().ic6aa5f4,
                w = 327,
                E = 468,
                x = 500,
                C = 523,
                S = l.default.create((e) => ({ container: { position: "relative", alignItems: "center" }, spinner: { alignItems: "center", position: "absolute", start: 0, end: 0, justifyContent: "center" }, label: { color: e.colors.text } })),
                Z = ({ props: e }) => {
                    const t = e.str("publicKey") ?? e.str("webKey"),
                        { featureSwitches: a } = r.useContext(p.rC),
                        c = (0, k.z)(),
                        d = (0, u.v9)(h.OW),
                        Z = (0, o.useLocation)(),
                        P = e.str("dataExchangeToken") ?? "",
                        T = e.str("name") ?? "arkose_token",
                        R = t ? a.getStringValue(t) : "",
                        M = r.useMemo(() => _.ZP.isWebView(), []),
                        I = M ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : y[l.default.theme.paletteName],
                        L = r.useMemo(() => M || window.innerWidth < E, [M]),
                        [B, N] = r.useState(L ? x : C),
                        [D, A] = r.useState(L ? w : E),
                        [z, G] = r.useState(f.t.passive),
                        j = r.useMemo(() => (L ? Math.min((window.innerWidth - 32) / w, (window.innerHeight - 32) / x) : 1), [L]),
                        $ = Z.query?.guestId,
                        W = r.useMemo(() => (M && "string" == typeof $ ? $ : M ? "" : d || ""), [M, $, d]),
                        q = r.useCallback(() => {
                            f.Z.loadIframe(c, W, t || "", t || "");
                        }, [c, W, t]),
                        { change: F, submit: O, values: H } = r.useContext(b.q3),
                        [K, U] = r.useState("loading"),
                        V = (0, m.r)((e) => {
                            if ("string" == typeof e.data)
                                try {
                                    const a = JSON.parse(e.data);
                                    switch (a.eventId) {
                                        case "challenge-suppressed":
                                            f.Z.suppressedChallenge(c, W, t || "0", t || "0"), G(f.t.passive);
                                            break;
                                        case "challenge-shown":
                                            f.Z.shownChallenge(c, W, t || "0", t || "0"), G(f.t.interactive), U("shown");
                                            break;
                                        case "challenge-complete": {
                                            f.Z.completeChallenge(c, W, z, t || "0", t || "0");
                                            const e = a.payload.sessionToken;
                                            F(T, e), U("complete");
                                            break;
                                        }
                                        case "challenge-iframeSize":
                                            N(a.payload.frameHeight), A(a.payload.frameWidth);
                                            break;
                                        case "challenge-loaded":
                                            U("loaded");
                                            break;
                                        case "challenge-failed":
                                            U("failed");
                                            break;
                                        case "challenge-error":
                                            U("errored");
                                    }
                                } catch (e) {
                                    U("errored"), (0, g.ZP)(e);
                                }
                        });
                    r.useEffect(
                        () => (
                            window.addEventListener("message", V, !1),
                            () => {
                                window.removeEventListener("message", V, !1);
                            }
                        ),
                        [V],
                    );
                    const J = null != H[T],
                        Q = r.useRef(!1);
                    return (
                        r.useEffect(() => {
                            J && !Q.current && ((Q.current = !0), O());
                        }, [J, O]),
                        r.createElement(i.Z, { style: S.container }, r.createElement(i.Z, { style: [S.spinner, { height: B }] }, "loading" === K || "loaded" === K ? r.createElement(s.Z, null) : "complete" === K ? r.createElement(n.Z, { style: S.label }, v) : null), r.createElement("iframe", { height: B, id: "arkoseFrame", onLoad: q, src: [`https://iframe.arkoselabs.com/${R}/index.html?theme=${I}`, P && `&data=${P}`].filter(Boolean).join(""), style: { MozTransform: `scale(${j})`, OTransform: `scale(${j})`, WebkitTransform: `scale(${j})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" }, title: "arkoseFrame", width: D }))
                    );
                };
        },
        778468: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(392237),
                n = a(3196);
            const o = i.default.create((e) => ({ button: { borderRadius: e.borderRadii.medium, width: "100%", paddingVertical: e.spaces.space20 } })),
                l = ({ style: e }) => r.createElement(n.Z, { style: o.button });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.Dock~bundle.DockPeek~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders-2c7fc7-61faba46.02b2c25a.js.map
