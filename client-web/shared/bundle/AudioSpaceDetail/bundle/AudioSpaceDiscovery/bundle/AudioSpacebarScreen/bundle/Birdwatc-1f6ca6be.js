"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"],
    {
        736932: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                r = a(530732),
                n = a(725405),
                o = a(579578);
            const l = ({ children: e, overrideStyles: t, props: a, scribeContext: l, style: s }) => {
                const c = a.action("on:press"),
                    d = a.action("on:longpress"),
                    m = a.bool("disabled") ?? !1,
                    _ = i.useRef(),
                    p = (0, n.Z)(),
                    u = i.useCallback(() => {
                        d && d();
                        const e = a.strDict("scribe:longpress") ?? {},
                            t = (0, o.Q)("longpress", { ...l, ...e });
                        p.scribe(t);
                    }, [d, l, p, a]),
                    f = i.useCallback(() => {
                        c && c();
                        const e = a.strDict("scribe:press") ?? {},
                            t = (0, o.Q)("click", { ...l, ...e });
                        p.scribe(t);
                    }, [c, l, p, a]),
                    h = i.useCallback(() => {
                        clearTimeout(_.current), (_.current = setTimeout(u, 500));
                    }, [u]),
                    g = i.useCallback(() => {
                        clearTimeout(_.current);
                    }, []);
                return i.useEffect(() => () => clearTimeout(_.current), []), i.createElement(r.Z, { disabled: m, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, onPress: f, onPressIn: h, onPressOut: g, style: [{ flexShrink: 1 }, s] }, e);
            };
        },
        620740: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                r = a(466999);
            const n = ({ props: e, style: t }) => {
                const a = e.int("count") ?? 0;
                return i.createElement(r.Z, { style: t }, a);
            };
        },
        210633: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                r = a(325686);
            const n = a(392237).default.create((e) => ({ divider: { height: e.spaces.space2, backgroundColor: e.colors.borderColor, width: "100%" } })),
                o = ({ props: e, style: t }) => i.createElement(r.Z, { role: "separator", style: [n.divider, t] });
        },
        616825: (e, t, a) => {
            a.d(t, { Z: () => f });
            var i = a(202784),
                r = a(555874),
                n = a(185983),
                o = a(325686),
                l = a(682830),
                s = a(167630),
                c = a(731708),
                d = a(392237),
                m = a(738124),
                _ = a(313129);
            const p = ({ header: e, scribeContext: t, src: a }) => {
                    const [l, d] = i.useState(!1),
                        [p, f] = i.useState([]),
                        [h, g] = i.useState(null),
                        [k, b] = i.useState(null),
                        y = i.useMemo(() => (h ? `/${a}?cursor=${h}` : `/${a}`), [a, h]),
                        { error: v, jfResponse: w } = (0, _._3)(y) ?? {},
                        x = i.useMemo(() => {
                            const e = w?.root?.value,
                                { children: t } = e ?? {};
                            return t?.map((t) => e?.dom.el(t)) ?? [];
                        }, [w]);
                    i.useEffect(() => {
                        x.length > 0 &&
                            (f((e) => {
                                switch (k) {
                                    case "top":
                                        return [...x, ...e];
                                    case "bottom":
                                        return [...e, ...x];
                                    default:
                                        return x;
                                }
                            }),
                            b(null),
                            d(!1));
                    }, [x, l, k]);
                    const E = i.useCallback(({ item: e }) => i.createElement(m.Z, { parentContext: t, payload: e }), [t]),
                        C = i.useCallback((e, t) => `${e.type}-${t}`, []),
                        S = i.useCallback(() => (e ? i.createElement(m.Z, { payload: e }) : null), [e]),
                        Z = i.useCallback(() => ("bottom" === k ? i.createElement(o.Z, { style: u.footer }, i.createElement(s.Z, { size: "small" })) : null), [k]),
                        P = i.useCallback(() => {}, [null, l]),
                        R = i.useCallback(() => {}, [null, l]);
                    return v ? i.createElement(c.ZP, { style: u.error }, v) : i.createElement(r.Z, { ListFooterComponent: Z, ListHeaderComponent: S, data: p, keyExtractor: C, onEndReached: R, onEndReachedThreshold: 0.1, refreshControl: i.createElement(n.Z, { onRefresh: P, refreshing: l && "top" === k }), renderItem: E });
                },
                u = d.default.create({ footer: { padding: 10, justifyContent: "center", alignItems: "center" }, error: { color: "red", textAlign: "center", marginTop: 20 } }),
                f = ({ props: e, scribeContext: t, style: a }) => {
                    const r = e.str("src"),
                        n = e.element("header");
                    return r ? i.createElement(i.Suspense, { fallback: i.createElement(l.J, null) }, i.createElement(o.Z, { style: [a, { width: "100%", overflow: "hidden" }] }, i.createElement(p, { header: n, scribeContext: t, src: r }))) : null;
                };
        },
        684799: (e, t, a) => {
            a.d(t, { It: () => v, WD: () => b, ZN: () => y, q3: () => k, rm: () => E, yH: () => w });
            var i = a(202784),
                r = a(400752),
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
                f = a(313129),
                h = a(355335),
                g = a(190674);
            const k = i.createContext({ values: {}, submit: () => {}, setErrors: () => {}, change: (e, t) => {}, errors: {}, submitResult: null, setFocus: () => {}, submissionStatus: "pending", submissionResult: void 0, canSubmit: !1 }),
                b = ({ children: e, props: t, scribeContext: a, style: o }) => {
                    const [{ apiClient: l }] = (0, r.KO)(p.dd),
                        [s] = (0, r.KO)(p.qc),
                        [u] = (0, r.KO)(h.k),
                        b = s.getState(),
                        y = (0, g.m)(),
                        v = t.url("action") ?? "",
                        w = t.strDict("errors"),
                        x = t.url("validation"),
                        E = t.str("submissionStatus") ?? "pending",
                        [S, Z] = i.useState(() => ({})),
                        [P, R] = i.useState(),
                        [T, I] = i.useState(x ? "ongoing" : "pending"),
                        A = (0, m.r)((e) => {
                            t.setStrDict("errors", e);
                        }),
                        M = (0, m.r)((e) => {
                            t.setStr("focus", e);
                        }),
                        D = (0, m.r)((e) => {
                            t.setStrDict("values", e);
                        }),
                        L = (0, m.r)((e) => {
                            t.setStr("submissionStatus", e), t.setBool("submitting", "ongoing" === e);
                        }),
                        B = (e) => {
                            I(e), t.setBool("validating", "ongoing" === e);
                        },
                        N = (0, m.r)(async () => {
                            if ("ongoing" !== E && v) {
                                L("ongoing");
                                try {
                                    const { jfResponse: e } = await (0, f.wR)(v, S, b, l, u, !1, y);
                                    e ? (R(e.root.value), L("success")) : L("error");
                                } catch (e) {
                                    L("error");
                                }
                            }
                        }),
                        G = (0, m.r)((e, t) => {
                            Z((a) => ({ ...a, [e]: t })), L("pending"), B("pending"), R();
                        }),
                        z = i.useRef(S);
                    i.useLayoutEffect(() => {
                        z.current = S;
                    }, [S]);
                    const j = (0, m.r)((e, t) => {
                            B("ongoing"),
                                (0, f.kp)(t, e, b, l, u, !1)
                                    .then(({ jsonResponse: t }) => {
                                        z.current === e && (t && !(0, c.Z)(t) ? (A(t), B("failure")) : (A({}), B("success")));
                                    })
                                    .catch(() => {
                                        B("error");
                                    });
                        }),
                        q = i.useMemo(() => (0, d.Z)(j, 500), [j]);
                    i.useEffect(() => {
                        x && q(S, x);
                    }, [q, S, x]);
                    const H = i.useMemo(() => (x ? "success" === T : "pending" === E || "error" === E), [E, T, x]);
                    return (
                        i.useEffect(() => {
                            D(S);
                        }, [S, D]),
                        i.createElement(k.Provider, { value: { values: S, submit: N, change: G, submissionResult: P, submissionStatus: E, errors: w, setErrors: A, setFocus: M, canSubmit: H } }, i.createElement(n.Z, { style: [C.form, o] }, e), P && i.createElement(_.Z, { parentContext: a, payload: P }))
                    );
                },
                y = ({ children: e, overrideStyles: t, props: a, style: r }) => {
                    const { canSubmit: n, submit: l } = i.useContext(k),
                        s = i.useCallback(() => {
                            n && l && l();
                        }, [n, l]);
                    return i.createElement(o.Z, { disabled: !n, interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, onPress: s, style: r }, e);
                },
                v = ({ children: e, props: t, scribeContext: a, style: r }) => {
                    const o = t.element("loading"),
                        { submissionResult: l, submissionStatus: s } = i.useContext(k),
                        c = o ? i.createElement(_.Z, { parentContext: a, payload: o }) : { children: e };
                    return i.createElement(n.Z, { style: r }, "ongoing" === s && o ? c : "success" === s && l ? i.createElement(_.Z, { parentContext: a, payload: l }) : e);
                },
                w = ({ children: e, props: t, scribeContext: a, style: r }) => {
                    const { values: n } = i.useContext(k),
                        o = t.url("action") ?? "",
                        s = ((e) =>
                            Object.entries(e)
                                .filter(([e, t]) => void 0 !== t)
                                .map(([e, t]) => `${encodeURIComponent(e)}=${encodeURIComponent(t)}`)
                                .join("&"))(n),
                        c = s ? `${o}${o.includes("?") ? "&" : "?"}${s}` : o;
                    return i.createElement(i.Suspense, { fallback: i.createElement(l.J, null) }, i.createElement(x, { path: c }, e));
                },
                x = ({ children: e, path: t }) => {
                    const { jfResponse: a } = (0, f.Q_)(t) ?? {};
                    return a ? i.createElement(_.Z, { payload: a }) : i.createElement(n.Z, null, e);
                },
                E = ({ children: e, props: t, style: a }) => {
                    const r = (0, u.p)(),
                        n = t.action("next"),
                        o = t.strDict("errors"),
                        { setErrors: l } = i.useContext(k);
                    return (
                        i.useEffect(() => {
                            n ? n() : (o && l(o), e && e.length > 0 && r({ text: e }));
                        }, [r, e, o, n, l]),
                        null
                    );
                };
            const C = s.default.create((e) => ({ form: { flexShrink: 1 } }));
        },
        656825: (e, t, a) => {
            a.d(t, { N7: () => d, PJ: () => c, XN: () => m });
            var i = a(202784),
                r = a(466999),
                n = a(325686),
                o = a(392237),
                l = a(417681),
                s = a(684799);
            const c = i.createContext({ groupKeys: new Set(), active: new Set(), register: (e) => {} }),
                d = ({ children: e, overrideStyles: t, props: a, style: r }) => {
                    const [o, d] = i.useState(() => new Set()),
                        { values: m } = i.useContext(s.q3),
                        _ = i.useCallback(
                            (e) => {
                                o.has(e) || d((t) => new Set(t).add(e));
                            },
                            [d, o],
                        ),
                        p = i.useCallback(
                            () =>
                                new Set(
                                    Object.entries(m)
                                        .filter(([e, t]) => t && "" !== t.trim() && o.has(e))
                                        .map((e) => e[0]),
                                ),
                            [m, o],
                        )(),
                        u = p.size > 0,
                        f = u ? t.active : {};
                    return i.createElement(c.Provider, { value: { active: p, groupKeys: o, register: _ } }, i.createElement(l.u.Provider, { value: u }, i.createElement(n.Z, { style: [{ flexShrink: 1 }, r, f] }, e)));
                },
                m = ({ style: e }) => {
                    const { active: t } = i.useContext(c);
                    return i.createElement(r.Z, { numberOfLines: 1, style: [_.text, e] }, t.size);
                },
                _ = o.default.create((e) => ({ text: { color: e.colors.text, textOverflow: "ellipsis" } }));
        },
        795164: (e, t, a) => {
            a.d(t, { Cj: () => Z, sz: () => A, Z7: () => S, _h: () => T, QP: () => R, qM: () => I });
            var i = a(202784),
                r = a(215045),
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
            function f(e, t) {
                const a = i.useRef(!0),
                    r = i.useRef(null);
                i.useEffect(() => {
                    if (a.current) return (a.current = !1), void (r.current = e);
                    e !== r.current && t(r.current, e), (r.current = e);
                }, [e, t]);
            }
            const h = 0,
                g = 1,
                k = 2,
                b = 3,
                y = 4,
                v = 5,
                w = 6,
                x = 8,
                E = 9,
                C = 10,
                S = ({ overrideStyles: e, props: t, style: a }) => {
                    const r = t.str("name") ?? "",
                        o = t.str("label"),
                        d = t.str("value") ?? "",
                        _ = t.bool("autofocus") ?? !1,
                        f = t.enum("type") ?? h,
                        { change: S, setFocus: Z, submit: P, values: R } = i.useContext(p.q3),
                        T = f === E,
                        I = f === g,
                        A = f === x,
                        M = i.useCallback(
                            (e) => {
                                S(r, e);
                            },
                            [r, S],
                        );
                    i.useEffect(() => {
                        d && S(r, d);
                    }, [r, d, S]);
                    const { register: D } = i.useContext(u.PJ);
                    i.useEffect(() => {
                        D(r);
                    }, [r, D]);
                    const L = i.useCallback(() => {
                            Z(r);
                        }, [r, Z]),
                        B = i.useCallback(() => {
                            Z("");
                        }, [Z]),
                        N = !!R[r] && "" !== R[r],
                        G = N ? e.active : {},
                        z = A ? { display: "none" } : {},
                        j = ((e) => {
                            switch (e) {
                                case h:
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
                        })(f),
                        q = i.useCallback(
                            (e) => {
                                const t = e.currentTarget.value;
                                t && S(r, new Date(t).toISOString());
                            },
                            [S, r],
                        ),
                        H = R[r] ?? d,
                        O = { border: 0, outline: 0, flexShrink: 1, minWidth: 50, flexGrow: 1, ...a, ...G, ...z },
                        F = "content" === a.fieldSizing && !c.ZP.isChrome(),
                        $ = i.useRef(null),
                        [K, U] = i.useState(0),
                        J = (0, s.r)((e) => {
                            if (!F) return;
                            const t = $.current,
                                a = document.createElement("span");
                            (a.style.visibility = "hidden"), (a.style.position = "absolute"), (a.style.font = window.getComputedStyle(t).font);
                            let i = (e || o) ?? "";
                            f === g && (i = new Array(i.length).fill(c.ZP.isSafari() ? "#" : "•").join("")), (a.textContent = i), document.body.appendChild(a);
                            const r = a.offsetWidth + (c.ZP.isSafari() ? 40 : 20);
                            document.body.removeChild(a), U(r);
                        });
                    if (
                        (i.useEffect(() => {
                            J(H);
                        }, [J, H]),
                        "date" === j)
                    ) {
                        const e = R[r] ?? d,
                            t = new Date(e).toLocaleDateString("en-CA").padStart(10, "0");
                        return i.createElement(m.u.Provider, { value: N }, i.createElement("input", { autoFocus: _, name: r, onChange: q, style: { ...O, lineHeight: "number" == typeof O.lineHeight ? `${O.lineHeight}px` : O.lineHeight }, type: "date", value: t }));
                    }
                    return i.createElement(
                        m.u.Provider,
                        { value: N },
                        i.createElement(n.Z, {
                            autoFocus: _,
                            inputMode: j,
                            multiline: T,
                            name: r,
                            onBlur: B,
                            onChangeText: M,
                            onFocus: L,
                            onSubmitEditing: () => {
                                P();
                            },
                            placeholder: o,
                            placeholderTextColor: l.default.theme.colors.gray500,
                            ref: $,
                            secureTextEntry: I,
                            style: [O, F && { width: K }],
                            value: H,
                        }),
                    );
                },
                Z = ({ children: e, overrideStyles: t, props: a, style: n }) => {
                    const o = a.str("name") ?? "",
                        l = a.bool("submit") ?? !1,
                        s = a.bool("dismiss") ?? !1,
                        { change: c, submit: d, values: h } = i.useContext(p.q3),
                        { dismiss: g } = i.useContext(_.b),
                        { register: k } = i.useContext(u.PJ);
                    i.useEffect(() => {
                        k(o);
                    }, [o, k]);
                    const b = h[o] ?? "false",
                        y = "true" === b;
                    f(b, () => {
                        l && d(), s && g && g();
                    });
                    const v = i.useCallback(() => {
                            c(o, "true" === b ? void 0 : "true");
                        }, [o, c, b]),
                        w = y ? t.active : {};
                    return i.createElement(m.u.Provider, { value: y }, i.createElement(r.Z, { onPress: v, style: [{ flexShrink: 1 }, n, w] }, e));
                },
                P = i.createContext(null),
                R = ({ children: e, overrideStyles: t, props: a, style: r }) => {
                    const n = a.str("name") ?? "",
                        l = a.bool("submit") ?? !1,
                        [s, c] = i.useState(null),
                        { submit: d, values: _ } = i.useContext(p.q3),
                        { register: h } = i.useContext(u.PJ);
                    f(_[n], () => {
                        l && d();
                    }),
                        i.useEffect(() => {
                            h(n);
                        }, [n, h]);
                    const g = !!_[n],
                        k = g ? t.active : {};
                    return i.createElement(P.Provider, { value: { name: n, submitOnChange: l, active: s, setActive: c } }, i.createElement(m.u.Provider, { value: g }, i.createElement(o.Z, { style: [{ flexShrink: 1 }, r, k] }, e)));
                },
                T = ({ children: e, overrideStyles: t, props: a, style: n }) => {
                    const o = a.str("value") ?? "",
                        l = a.element("active"),
                        s = a.bool("dismiss") ?? !1,
                        c = i.useContext(P),
                        { change: d, values: u } = i.useContext(p.q3),
                        { dismiss: h } = i.useContext(_.b),
                        g = (c?.name ? u[c.name] : null) === o;
                    f(String(g), () => {
                        s && h && h();
                    });
                    const k = i.useCallback(() => {
                            c && (g ? (d(c.name, void 0), c.setActive(null)) : (d(c.name, o), c.setActive(l)));
                        }, [c, o, d, l, g]),
                        b = g ? t.active : {};
                    return i.createElement(m.u.Provider, { value: g }, i.createElement(r.Z, { onPress: k, style: [{ flexShrink: 1 }, n, b] }, e));
                },
                I = ({ scribeContext: e, style: t }) => {
                    const a = i.useContext(P);
                    if (a?.active) return i.createElement(o.Z, { style: t }, i.createElement(d.Z, { parentContext: e, payload: a.active }));
                },
                A = ({ children: e, props: t }) => {
                    const a = t.str("name") ?? "",
                        r = t.int("length") ?? 6,
                        l = t.bool("autofocus") ?? !1,
                        s = t.bool("autosubmit") ?? !1,
                        { change: c, submit: d, values: m } = i.useContext(p.q3),
                        _ = m.code ?? "",
                        u = i.useCallback(
                            (e) => {
                                c(a, e), t.setStrDict("code", Array.from(e));
                            },
                            [c, a, t],
                        ),
                        f = i.useMemo(() => Array.from({ length: r }).map(() => i.createRef()), [r]);
                    i.useEffect(() => {
                        _.length === r && s ? d() : f[_.length]?.current?.focus();
                    }, [s, _, f, r, d]);
                    const h = i.useCallback(
                            (e, t) => {
                                const a = _.slice(0, t) + e + _.slice(t + 1);
                                u(a);
                            },
                            [_, u],
                        ),
                        g = (e) => {
                            "Backspace" === e.key && (u(_.slice(0, _.length - 1)), e.preventDefault());
                        },
                        [k, b] = i.useState(0),
                        [y, v] = i.useState(10),
                        w = i.useRef(null);
                    i.useLayoutEffect(() => {
                        const e = w.current?.firstElementChild,
                            t = e?.firstElementChild;
                        if (e && t) {
                            const a = e.getBoundingClientRect().width,
                                i = t.getBoundingClientRect().width;
                            b((a - i * r) / (r - 1)), v(i);
                        }
                    }, [w, r]);
                    const x = [M.inputs, { gap: k }],
                        E = [M.input, { width: y }];
                    return i.createElement(
                        o.Z,
                        { ref: w, style: M.container },
                        e,
                        i.createElement(
                            o.Z,
                            { style: x },
                            Array.from({ length: r }).map((e, t) => i.createElement(n.Z, { autoFocus: l && 0 === t, inputMode: "numeric", key: t, maxLength: r, onChangeText: (e) => h(e, t), onKeyPress: g, ref: f[t], style: E, value: _[t] ?? "" })),
                        ),
                    );
                },
                M = l.default.create((e) => ({ container: { position: "relative", width: "100%", alignItems: "center" }, inputs: { position: "absolute", left: 0, top: 0, right: 0, bottom: 0, display: "flex", flexDirection: "row", justifyContent: "center" }, input: { minWidth: 0, outline: 0, textAlign: "center", caretColor: e.colors.text, color: "transparent" } }));
        },
        665161: (e, t, a) => {
            a.d(t, { U: () => d });
            var i = a(202784),
                r = a(466999),
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
                        { change: v, submit: w, values: x } = i.useContext(c.q3),
                        [E, C] = i.useState(""),
                        [S, Z] = i.useState(() => u.find((e) => e.dial_code === k) ?? p),
                        P = i.useMemo(() => h(E, S.pattern), [S.pattern, E]),
                        R = i.useMemo(() => u.filter((e) => b.includes(e.dial_code)), [b]),
                        T = i.useCallback(
                            (e) => {
                                const t = R.find((t) => t.name === e.currentTarget.value);
                                t && Z(t);
                            },
                            [R],
                        );
                    i.useEffect(() => {
                        v(d, S.dial_code + f(E));
                    }, [v, S, d, E]);
                    const I = !!x[d] && "" !== x[d],
                        A = I ? e.active : {},
                        [M, D] = m(a),
                        L = i.useMemo(() => {
                            let e = 0;
                            for (let t = 0; t < S.pattern.length; t++) "#" === S.pattern[t] ? (e += 1) : (e += 0.5);
                            return `${Math.ceil(e)}ch`;
                        }, [S.pattern]);
                    return i.createElement(
                        s.u.Provider,
                        { value: I },
                        i.createElement(
                            o.Z,
                            { style: [_.container, D, A] },
                            i.createElement(
                                o.Z,
                                { style: _.countryCodeContainer },
                                i.createElement(r.Z, { style: [_.countryCode, y && _.countryCodeDisabled, M] }, S.dial_code),
                                i.createElement(
                                    "select",
                                    { disabled: y, onChange: T, style: _.countryCodeSelector },
                                    R.map((e) => i.createElement("option", { key: e.name, value: e.name }, e.name, "(", e.dial_code, ")")),
                                ),
                            ),
                            i.createElement(n.Z, {
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
                                style: [M, { width: L }, { border: 0, outline: 0 }],
                                value: P,
                            }),
                        ),
                    );
                },
                m = (e) => {
                    const { fontSize: t, fontStyle: a, fontWeight: i, letterSpacing: r, lineHeight: n, ...o } = e;
                    return [{ fontSize: t, fontStyle: a, fontWeight: i, letterSpacing: r, lineHeight: n }, o];
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
                f = (e) => e.replace(/\D/g, ""),
                h = (e, t) => {
                    const a = f(e);
                    let i = "",
                        r = 0;
                    for (let e = 0; e < t.length && !(r >= a.length); e++) "#" === t[e] ? ((i += a[r]), r++) : (i += t[e]);
                    return i;
                };
        },
        761459: (e, t, a) => {
            a.d(t, { Z: () => u });
            var i = a(202784),
                r = a(457311),
                n = a(674132),
                o = a.n(n),
                l = a(810641),
                s = a(519896),
                c = a(383675),
                d = a(293115);
            const m = o().e9f1fbcc,
                _ = o().a3b80be6,
                p = () => i.createElement(r.Z, { header: m, message: _ }),
                u = ({ children: e, props: t, style: a }) => {
                    const r = t.str("timelineId"),
                        n = t.str("name") ?? "JF-GenericURT",
                        o = t.str("scribe_page") ?? "jf-urt",
                        m = t.str("scribe_section") ?? void 0,
                        _ = ((e) => i.useMemo(() => (e ? (0, c.R)(e, !1) : void 0), [e]))(r);
                    if (_) {
                        const e = { page: o, section: m };
                        return i.createElement(d.nO, { namespace: e }, i.createElement(l.Z, { module: _, prerollDisplayLocation: s.Nw.OTHER, refreshControl: null, renderEmptyState: p, title: n }));
                    }
                };
        },
        553160: (e, t, a) => {
            a.d(t, { Z: () => u });
            var i = a(202784),
                r = a(457311),
                n = a(674132),
                o = a.n(n),
                l = a(810641),
                s = a(519896),
                c = a(383675),
                d = a(293115);
            const m = o().e9f1fbcc,
                _ = o().a3b80be6,
                p = () => i.createElement(r.Z, { header: m, message: _ }),
                u = ({ children: e, p: t }) => {
                    const a = t.str("timelineId"),
                        r = t.str("name") ?? "JF-GenericURT",
                        n = t.str("scribe_page") ?? "jf-urt",
                        o = t.str("scribe_section") ?? void 0,
                        m = ((e) => i.useMemo(() => (e ? (0, c.R)(e, !1) : void 0), [e]))(a);
                    if (m) {
                        const e = { page: n, section: o };
                        return i.createElement(d.nO, { namespace: e }, i.createElement(l.Z, { module: m, prerollDisplayLocation: s.Nw.OTHER, refreshControl: null, renderEmptyState: p, title: r }));
                    }
                };
        },
        271215: (e, t, a) => {
            a.d(t, { Z: () => s });
            var i = a(202784),
                r = a(325686);
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
                    return i.createElement(r.Z, { style: p }, e);
                };
        },
        340454: (e, t, a) => {
            a.d(t, { _: () => i });
            const i = a(202784).createContext({ gapH: null });
        },
        288513: (e, t, a) => {
            a.d(t, { Z: () => p });
            var i = a(202784),
                r = a(325686),
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
                    let f;
                    switch (t.enum("alignment")) {
                        case o:
                            f = "flex-start";
                            break;
                        case l:
                            f = "flex-end";
                            break;
                        case s:
                        case _:
                            f = "center";
                            break;
                        case c:
                            f = "baseline";
                            break;
                        case d:
                            f = "flex-start";
                            break;
                        case m:
                            f = "flex-end";
                            break;
                        default:
                            f = "center";
                    }
                    const h = { display: "flex", flexDirection: "column", gap: u, alignItems: f, ...a, flex: 1, flexBasis: "auto", width: "100%" },
                        g = i.useMemo(() => ({ gapH: p }), [p]);
                    return i.createElement(n._.Provider, { value: g }, i.createElement(r.Z, { style: h }, e));
                };
        },
        693603: (e, t, a) => {
            a.d(t, { Z: () => d });
            var i = a(202784),
                r = a(325686),
                n = a(340454);
            const o = 0,
                l = 1,
                s = 2,
                c = 3,
                d = ({ children: e, props: t, style: a }) => {
                    const d = i.useContext(n._),
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
                        f = { display: "flex", flexDirection: "row", flexBasis: "auto", alignSelf: "stretch", alignItems: _, gap: m, height: "auto", ...u };
                    return i.createElement(r.Z, { style: f }, e);
                };
        },
        416028: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                r = a(325686),
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
                return i.createElement(r.Z, { style: { width: "100%" } }, i.createElement(n.Z, { childrenStyle: { paddingRight: l }, showNavButtonsOnHover: !0, style: { flexDirection: "row", alignItems: c, ...a }, visibleItemIndex: s }, e));
            };
        },
        908264: (e, t, a) => {
            a.d(t, { T: () => n, Z: () => o });
            var i = a(202784),
                r = a(530732);
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
                    return i.createElement(r.Z, { interactiveStyles: { hoverStyle: t.hover, pressedStyle: t.active }, style: c }, e);
                };
        },
        361309: (e, t, a) => {
            a.d(t, { C: () => c });
            var i = a(202784),
                r = a(325686),
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
                    return i.createElement(r.Z, { style: t }, i.createElement(d, { style: [{ flexShrink: 0, flexGrow: 0, justifyContents: "center" }, t, { height: c, width: c }] }));
                };
        },
        943695: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                r = a(325686),
                n = a(738124);
            const o = ({ children: e, props: t, style: a }) => {
                const o = t.element("else"),
                    l = t.bool("cond") ?? !0,
                    s = o ? i.createElement(n.Z, { payload: o }) : null;
                return i.createElement(r.Z, { style: [{ flexShrink: 1 }, a] }, l ? e : s);
            };
        },
        438013: (e, t, a) => {
            a.d(t, { Z: () => o });
            var i = a(202784),
                r = a(325686),
                n = a(992942);
            const o = ({ children: e, props: t, style: a }) => {
                const o = t.url("src") ?? "",
                    l = t.bool("fill"),
                    s = t.f32("ar");
                return i.createElement(r.Z, { style: [{ overflow: "hidden", width: "100%", height: "100%", aspectRatio: s }, a] }, i.createElement(n.Z, { resizeMode: l ? "cover" : "contain", source: { uri: o }, style: { width: "100%", height: "100%" } }));
            };
        },
        552531: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                r = a(555874);
            const n = ({ children: e, props: t, style: a }) => {
                const n = i.useCallback(({ item: e }) => e, []);
                return i.createElement(r.Z, { data: e ?? [], keyExtractor: (e, t) => `${t}`, renderItem: n });
            };
        },
        610467: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                r = a(335923);
            const n = ({ children: e, props: t, style: a }) => {
                const n = t.str("t") ?? "";
                return i.createElement(r.Z, { markdownText: n, style: [{ flexShrink: 1 }, a] });
            };
        },
        183854: (e, t, a) => {
            a.d(t, { Z: () => m });
            var i = a(202784),
                r = a(215045),
                n = a(797553),
                o = a(661810),
                l = a(392237),
                s = a(738124),
                c = a(643426);
            const d = l.default.create((e) => ({ dropdown: { padding: e.spaces.space16 }, item: { marginBottom: e.spaces.space8 }, divider: { marginTop: e.spaces.space8 } })),
                m = ({ children: e, props: t, scribeContext: a, style: l }) => {
                    const m = t.elements("labels"),
                        [_, p] = i.useState(!1),
                        [u, f] = i.useState(0),
                        h = e ?? [],
                        g = m ? m[u] : void 0;
                    return g && m && m?.length === h.length
                        ? i.createElement(
                              i.Fragment,
                              null,
                              _ && m
                                  ? i.createElement(
                                        n.default,
                                        { contentStyle: d.dropdown, onDismiss: () => p(!1) },
                                        i.createElement(
                                            c.b.Provider,
                                            { value: { dismiss: () => p(!1) } },
                                            e?.map((e, t) => i.createElement(r.Z, { key: t, onPress: () => f(t), style: d.item }, 0 !== t && i.createElement(o.Z, { style: d.item }), e)),
                                        ),
                                    )
                                  : i.createElement(r.Z, { onPress: () => p(!0), style: [{ flexShrink: 1 }, l] }, g ? i.createElement(s.Z, { parentContext: a, payload: g }) : void 0),
                          )
                        : null;
                };
        },
        643426: (e, t, a) => {
            a.d(t, { b: () => i });
            const i = a(202784).createContext({ dismiss: void 0 });
        },
        172993: (e, t, a) => {
            a.d(t, { Z: () => d });
            a(136728);
            var i = a(202784),
                r = a(215045),
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
                        f = i.useCallback((e) => {
                            e.stopPropagation();
                        }, []);
                    return i.createElement(
                        r.Z,
                        {
                            onPointerDown: f,
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
            var i = a(202784),
                r = a(744610),
                n = a(215045),
                o = a(392237),
                l = a(443781),
                s = a(725405),
                c = a(579578),
                d = a(643426);
            const m = o.default.create((e) => ({ hover: { opacity: 0.8 } })),
                _ = (e) => {
                    const { paddingBottom: t, paddingEnd: a, paddingLeft: i, paddingRight: r, paddingStart: n, paddingTop: o, ...l } = e;
                    return [{ paddingStart: n, paddingTop: o, paddingBottom: t, paddingEnd: a, paddingLeft: i, paddingRight: r }, l];
                },
                p = ({ children: e, props: t, scribeContext: a, style: o }) => {
                    const { history: p } = (0, l.QZ)(),
                        u = (0, s.Z)(),
                        f = t.str("to") ?? "",
                        h = t.bool("animate") ?? !0,
                        g = f.startsWith("/") ? f.slice(1) : f,
                        { dismiss: k } = i.useContext(d.b),
                        b = i.useRef(new r.Z.Value(1)).current,
                        [y, v] = i.useState(!1),
                        w = y ? m.hover : {},
                        x = i.useCallback(() => {
                            h && r.Z.spring(b, { toValue: 0.9, velocity: 1, useNativeDriver: !0 }).start();
                        }, [h, b]),
                        E = i.useCallback(() => {
                            h && r.Z.spring(b, { toValue: 1, velocity: 1, useNativeDriver: !0 }).start();
                        }, [h, b]),
                        C = { transform: [{ scale: b }] },
                        S = i.useCallback(() => {
                            const e = t.strDict("scribe:press") ?? {},
                                i = (0, c.Q)("navigate", { ...a, ...e });
                            u.scribe(i), ":back" === g ? p.goBack() : k && ":dismiss" === g ? k() : p.push(`/i/jf/${g}`);
                        }, [g, k, u, a, p, t]),
                        Z = i.useCallback((e) => {
                            e.stopPropagation();
                        }, []),
                        [P, R] = _(o);
                    return i.createElement(
                        r.Z.View,
                        { style: [{ flexShrink: 1 }, R, C, w] },
                        i.createElement(
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
                                onPressIn: x,
                                onPressOut: E,
                                style: [P, { flexGrow: 1 }],
                            },
                            e,
                        ),
                    );
                };
        },
        723129: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                r = a(325686);
            const n = ({ children: e, props: t }) => {
                const a = t.int("activePage") ?? 0;
                if (e) return i.createElement(r.Z, { style: { flex: 1 } }, e[a]);
            };
        },
        312604: (e, t, a) => {
            a.d(t, { Z: () => l });
            var i = a(202784),
                r = a(325686),
                n = a(738124);
            const o = 0;
            const l = function ({ children: e, props: t, style: a }) {
                const l = t.element("header"),
                    s = t.element("footer"),
                    c = t.enum("headerBehavior"),
                    d = { ...(c === o && { position: "fixed", top: 8 }) },
                    m = { ...(c === o && { position: "fixed", bottom: 8 }) };
                return i.createElement(r.Z, { style: [{ flex: 1 }, a] }, i.createElement(r.Z, { style: d }, l && i.createElement(n.Z, { payload: l, style: d })), e, i.createElement(r.Z, { style: m }, s && i.createElement(n.Z, { payload: s })));
            };
        },
        121152: (e, t, a) => {
            a.d(t, { Z: () => n });
            var i = a(202784),
                r = a(325686);
            const n = ({ children: e, props: t, style: a }) => i.createElement(r.Z, { style: a }, e);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be.7cbcb04a.js.map
