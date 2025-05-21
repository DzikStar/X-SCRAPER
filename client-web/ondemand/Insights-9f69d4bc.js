"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-9f69d4bc"],
    {
        74451: (e, s, a) => {
            a.d(s, { Cf: () => o, m3: () => x, uY: () => u });
            var l = a(552322),
                t = a(941204),
                r = a(990714),
                n = a(98474),
                i = a(796309),
                c = a(430962),
                d = a(602077);
            const o = ({ count: e, percentChange: s, title: a }) => {
                    const c = (s ?? 0) > 0 ? r.Z : n.Z;
                    return (0, l.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, l.jsx)(t.x, { color: "gray700", size: "subtext3", children: a }), (0, l.jsxs)("div", { className: "flex gap-4", children: [(0, l.jsx)(t.x, { weight: "bold", size: "title4", children: e ? (0, d.M)(e) : "---" }), s && (0, l.jsxs)("div", { className: (0, i.cn)("text-subtext1 flex items-center", { "text-green-500": s > 0, "text-red-500": s < 0 }), children: [(0, l.jsx)(c, {}), (0, l.jsxs)("div", { className: "text-subtext1", children: [e ? (0, d.M)(s) : "--", "%"] })] })] })] });
                },
                x = ({ title: e = " " }) => (0, l.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, l.jsx)(t.x, { color: "gray700", size: "subtext3", children: e }), (0, l.jsx)("div", { className: "flex h-7 w-20 animate-pulse gap-4 rounded bg-gray-200" })] }),
                u = ({ title: e }) => {
                    const { business: s } = (0, c.M1)();
                    return (0, l.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, l.jsx)("div", { className: "flex items-center gap-2 text-gray-500", children: (0, l.jsx)(t.x, { color: "gray500", size: "subtext3", children: e }) }), (0, l.jsx)(t.x, { color: "gray700", size: "subtext2", children: s.radar.pleaseTryAgainLater })] });
                };
        },
        964522: (e, s, a) => {
            a.d(s, { N: () => i });
            var l = a(552322),
                t = a(796309),
                r = a(202784),
                n = a(660237);
            const i = ({ className: e, defaultValue: s, onSelect: a, options: i }) => {
                const [c, d] = (0, r.useState)(s);
                (0, r.useEffect)(() => {
                    d(s);
                }, [s]);
                return (0, l.jsx)("div", {
                    className: (0, t.cn)("flex gap-2", e),
                    children: i.map((e) =>
                        (0, l.jsx)(
                            n.C,
                            {
                                id: e.value.toString(),
                                isActive: c === e.value,
                                onToggle: () => {
                                    return (s = e.value), d(s), void a?.(s);
                                    var s;
                                },
                                children: e.label,
                            },
                            e.value,
                        ),
                    ),
                });
            };
        },
        604757: (e, s, a) => {
            a.d(s, { U: () => h });
            var l = a(552322),
                t = a(887390),
                r = a(436059),
                n = a(941204),
                i = a(990714),
                c = a(250362);
            const d = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z" }) });
            var o = a(521824),
                x = a(202784),
                u = a(430962),
                m = a(351076);
            const g = ({ rightContent: e, ...s }) => {
                    const { business: a } = (0, u.M1)();
                    return (0, l.jsxs)("div", { className: "flex cursor-auto flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50/50 p-2", ...s, children: [(0, l.jsxs)("div", { className: "flex items-center justify-between", children: [(0, l.jsx)(n.x, { size: "subtext1", color: "gray1000", children: a.radar.usingAdvancedSearch }), e] }), (0, l.jsx)("div", { className: "grid grid-cols-[auto,auto,1fr] gap-x-4 gap-y-2.5 text-gray-700", children: a.radar.advancedSearchExamples.map((e) => (0, l.jsxs)(x.Fragment, { children: [(0, l.jsx)(n.x, { size: "subtext3", color: "gray900", className: "whitespace-nowrap", children: e.query }), (0, l.jsx)(m.Z, { className: "size-3 shrink-0 self-center text-gray-700" }), (0, l.jsx)(n.x, { size: "subtext3", color: "gray900", children: e.description })] }, e.query)) })] });
                },
                h = ({ disabled: e, onQueryChange: s, onSubmit: a, query: m }) => {
                    const { business: h } = (0, u.M1)(),
                        f = (0, x.useRef)(null),
                        [v, p] = (0, x.useState)(!1);
                    return (0, l.jsxs)("div", {
                        className: "flex w-full flex-col gap-8",
                        children: [
                            (0, l.jsx)("div", {
                                className: "rounded-full bg-gray-50/50",
                                children: (0, l.jsx)(t._, {
                                    ref: f,
                                    value: m,
                                    onChange: (e) => s(e.currentTarget.value),
                                    onKeyDown: (s) => {
                                        "Enter" === s.key && m.trim().length > 0 && !e && a();
                                    },
                                    placeholder: h.radar.searchPlaceholder,
                                    rightContent: (0, l.jsx)(r.z, { className: "mr-2 px-0", variant: "insightsBright", size: "xSmallCompact", onClick: a, disabled: 0 === m.trim().length || e, children: (0, l.jsx)(i.Z, { className: "text-background size-[14px] font-bold" }) }),
                                }),
                            }),
                            (0, l.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    (0, l.jsx)(r.z, {
                                        variant: "insightsSecondary",
                                        size: "xSmallCompact",
                                        onClick: () => {
                                            f.current && (f.current.value = ""), s("");
                                        },
                                        children: (0, l.jsxs)("div", { className: "flex items-center gap-1", children: [(0, l.jsx)(c.Z, { className: "size-[12px] text-gray-700" }), (0, l.jsx)(n.x, { size: "subtext3", children: h.radar.clear })] }),
                                    }),
                                    (0, l.jsxs)(r.z, { variant: "insightsSecondary", size: "xSmallCompact", onClick: () => p(!v), children: [(0, l.jsx)(d, { className: "size-[12px] shrink-0 text-gray-700" }), (0, l.jsx)(n.x, { size: "subtext3", children: h.radar.examples })] }),
                                ],
                            }),
                            v &&
                                (0, l.jsx)(g, {
                                    rightContent: (0, l.jsx)(r.z, { variant: "insightsGhost", size: "xSmallCompact", onClick: () => p(!1), children: (0, l.jsx)(o.Z, { className: "shrink-0" }) }),
                                    onClick: (e) => {
                                        e.stopPropagation();
                                    },
                                }),
                        ],
                    });
                };
        },
        679671: (e, s, a) => {
            a.d(s, { E2: () => o, I5: () => x, mQ: () => c });
            var l = a(552322),
                t = a(796309),
                r = a(202784),
                n = a(660237);
            const i = (0, r.createContext)({ activeTab: "", setActiveTab: () => {} }),
                c = ({ activeTab: e, children: s, className: a = "", defaultActiveTab: n, onChange: c }) => {
                    const [d, o] = (0, r.useState)(n ?? ""),
                        x = void 0 !== e,
                        u = x ? e : d;
                    return (0, l.jsx)(i.Provider, {
                        value: {
                            activeTab: u,
                            setActiveTab: (e) => {
                                x || o(e), c?.(e);
                            },
                        },
                        children: (0, l.jsx)("div", { className: (0, t.cn)("flex flex-col gap-4", a), children: s }),
                    });
                },
                d = () => (0, r.useContext)(i),
                o = ({ children: e, id: s }) => {
                    const { activeTab: a, setActiveTab: t } = d();
                    return (0, l.jsx)(n.C, { id: s, isActive: a === s, onToggle: t, children: e });
                },
                x = ({ children: e, id: s }) => {
                    const { activeTab: a } = d();
                    return a !== s ? null : (0, l.jsx)(l.Fragment, { children: e });
                };
        },
        660237: (e, s, a) => {
            a.d(s, { C: () => n });
            var l = a(552322),
                t = a(436059),
                r = a(796309);
            const n = ({ children: e, id: s, isActive: a, onToggle: n }) => (0, l.jsx)(t.z, { onClick: () => n(s || ""), variant: a ? "insightsFilled" : "insightsGhost", size: "xSmallCompact", children: (0, l.jsx)("div", { className: (0, r.cn)("text-subtext3", { "font-bold": a, "font-normal": !a }), children: e }) });
        },
        283840: (e, s, a) => {
            a.d(s, { d: () => t, s: () => l });
            const l = 864e5,
                t = 36e5;
        },
        187468: (e, s, a) => {
            a.d(s, { H: () => o });
            var l = a(552322),
                t = a(328778),
                r = a(430962),
                n = a(595133),
                i = a(833819),
                c = a(742266),
                d = a(749612);
            const o = ({ settings: e }) => {
                const { business: s } = (0, r.M1)();
                return (0, l.jsx)(d.Kw, { settings: e, children: (0, l.jsxs)("div", { className: "flex h-full flex-col gap-[10px] p-2 md:p-4", children: [(0, l.jsx)(n.h, { title: s.radar.header, Icon: (0, l.jsx)(t.Z, { className: "text-text size-7" }), beta: !1, className: "flex", children: (0, l.jsx)(c.i, { fullWidth: !0 }) }), (0, l.jsx)(i.e, {})] }) });
            };
        },
        440638: (e, s, a) => {
            a.d(s, { u: () => i });
            var l = a(552322),
                t = a(959638),
                r = a(797165),
                n = a(749612);
            function i({ id: e, settings: s }) {
                return (0, l.jsx)(n.Kw, { settings: s, children: (0, l.jsx)(t.NR, { id: e, children: (0, l.jsx)(r.V, {}) }) });
            }
        },
        122778: (e, s, a) => {
            a.d(s, { w: () => d });
            var l = a(552322),
                t = a(702024),
                r = a(202784),
                n = a(749612),
                i = a(832138),
                c = a(704877);
            const d = ({ settings: e }) => (0, l.jsx)(n.Kw, { settings: e, children: (0, l.jsx)(c.Wi, { children: (0, l.jsx)(r.Suspense, { fallback: (0, l.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: (0, l.jsx)(t.P, { size: "large", color: "text" }) }), children: (0, l.jsx)(i.L, {}) }) }) });
        },
        602077: (e, s, a) => {
            a.d(s, { M: () => t });
            const l = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc" });
            function t(e) {
                return Math.abs(e) < 1e4 ? Intl.NumberFormat("en-US").format(e) : l.format(e);
            }
        },
        942346: (e, s, a) => {
            a.d(s, { j: () => l });
            const l = ({ granularity: e, id: s, timeRange: a }) => ({ from_time: Math.floor(a.fromDate.getTime() / 1e3), granularity: e, id: s, timezone_offset: 0, to_time: Math.floor(a.toDate.getTime() / 1e3) });
        },
        157270: (e, s, a) => {
            a.r(s), a.d(s, { default: () => t });
            const l = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AiTrend",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, action: "THROW" },
                        { alias: null, args: null, concreteType: "ApiImage", kind: "LinkedField", name: "thumbnail", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], storageKey: null },
                        {
                            kind: "RequiredField",
                            field: {
                                alias: null,
                                args: null,
                                concreteType: "AiTrendCore",
                                kind: "LinkedField",
                                name: "core",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "created_at_ms", storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "category", storageKey: null },
                                ],
                                storageKey: null,
                            },
                            action: "THROW",
                        },
                    ],
                    type: "AiTrend",
                    abstractKey: null,
                    hash: "d4fd83e7d283712a1b27c03bf4ab28ff",
                },
                t = l;
        },
        821730: (e, s, a) => {
            a.d(s, { A: () => o });
            var l = a(552322),
                t = a(130844),
                r = a(941204),
                n = a(461222),
                i = a(559274),
                c = a(889906);
            const d = a(157270),
                o = ({ aiTrend: e }) => {
                    const s = (0, c.useFragment)(d, e),
                        a = Date.now() - new Date(s.core.created_at_ms).getTime() < 36e5;
                    return (0, l.jsxs)(t.r, { href: `https://x.com/i/trending/${s.rest_id}`, target: "_blank", className: "flex gap-2", children: [(0, l.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, l.jsx)(r.x, { size: "subtext1", weight: "bold", numberOfLines: 2, children: s.core.name }), (0, l.jsx)("div", { className: "flex items-center", children: (0, l.jsxs)(n.S, { children: [a ? (0, l.jsx)(r.x, { size: "subtext2", color: "gray700", children: "Trending Now" }) : (0, l.jsx)(i.E, { color: "gray700", size: "subtext2", timestamp: s.core.created_at_ms }), (0, l.jsx)(r.x, { size: "subtext2", color: "gray700", children: s.core.category })] }) })] }), s.thumbnail?.original_img_url && (0, l.jsx)("div", { className: "h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100", children: (0, l.jsx)("img", { loading: "lazy", src: s.thumbnail.original_img_url, alt: s.core.name, className: "h-full w-full object-cover" }) })] });
                };
        },
        182605: (e, s, a) => {
            a.d(s, { Z: () => t });
            var l = a(552322);
            const t = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" }) });
        },
        137932: (e, s, a) => {
            a.d(s, { Z: () => t });
            var l = a(552322);
            const t = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M11.998 22c4.473 0 9-1.374 9-4V6c0-2.626-4.527-4-9-4s-9 1.374-9 4v12c0 2.626 4.527 4 9 4Zm0-18c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2Zm-7 4.607c3.473 1.84 10.527 1.84 14 0V12c0 .58-2.453 2-7 2s-7-1.42-7-2V8.607Zm0 6c3.473 1.84 10.527 1.84 14 0V18c0 .58-2.453 2-7 2s-7-1.42-7-2v-3.393Z" }) });
        },
        328778: (e, s, a) => {
            a.d(s, { Z: () => t });
            var l = a(552322);
            const t = (e) => (0, l.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, l.jsx)("path", { d: "M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25c0-.552.448-1 1-1s1 .448 1 1c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75c2.37 0 4.554.805 6.29 2.156.22.17.43.35.635.537.067.061.133.123.197.186.022.02.042.042.061.064l.067.061c.39.39.39 1.024 0 1.414l-6.537 6.537c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.997-1.998C12.904 9.105 12.465 9 12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3c0-.552.448-1 1-1s1 .448 1 1c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5c1.019 0 1.969.306 2.76.83l2.326-2.326-.024-.02C15.664 4.398 13.909 3.75 12 3.75z" }) });
        },
        383270: (e, s, a) => {
            a.d(s, { E: () => i });
            var l = a(552322),
                t = a(202784),
                r = a(796309);
            const n = { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", default: "rounded" };
            function i({ borderRadius: e = "large", borderWidth: s = 2, children: a, className: i = "", direction: c = "clockwise", enabled: d = !0, gradientEndColor: o = "hsl(var(--colors-blue-800) / 0.6)", gradientStartColor: x = "hsl(var(--colors-blue-500) / 0.8)", speed: u = 1 }) {
                const [m, g] = (0, t.useState)(0),
                    h = "clockwise" === c ? x : o,
                    f = "clockwise" === c ? o : x;
                return (
                    (0, t.useEffect)(() => {
                        if (!d || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                        const e = setInterval(() => {
                            g((e) => ("clockwise" === c ? (e + u) % 360 : (e - u) % 360));
                        }, 16);
                        return () => clearInterval(e);
                    }, [c, d, u]),
                    (0, l.jsxs)("div", { className: (0, r.cn)("relative inline-block w-full", n[e]), children: [(0, l.jsx)("div", { className: (0, r.cn)("absolute inset-0 transition-opacity", { "opacity-0": !d, "opacity-100": d }, n[e]), style: { background: `conic-gradient(from ${m}deg at 50% 50%, transparent 0deg, ${h} 20deg, ${f} 60deg, transparent 80deg)` } }), (0, l.jsx)("div", { className: (0, r.cn)("bg-background relative p-4", n[e], i), style: { margin: `${s}px` }, children: a })] })
                );
            }
        },
        69465: (e, s, a) => {
            a.d(s, { OX: () => g, Qz: () => d, dy: () => c, iI: () => f, sc: () => m, uh: () => x, ze: () => h });
            var l = a(552322),
                t = a(840489),
                r = a(202784),
                n = a(194787),
                i = a(796309);
            const c = ({ shouldScaleBackground: e = !0, ...s }) => (0, l.jsx)(n.dy.Root, { shouldScaleBackground: e, ...s });
            c.displayName = "Drawer";
            const d = n.dy.Trigger,
                o = n.dy.Portal,
                x = n.dy.Close,
                u = r.forwardRef(({ className: e, ...s }, a) => (0, l.jsx)(n.dy.Overlay, { ref: a, className: (0, i.cn)("fixed inset-0 z-50 bg-black/80", e), ...s }));
            u.displayName = n.dy.Overlay.displayName;
            const m = r.forwardRef(({ children: e, className: s, ...a }, t) => (0, l.jsxs)(o, { children: [(0, l.jsx)(u, {}), (0, l.jsxs)(n.dy.Content, { ref: t, className: (0, i.cn)("bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-gray-100", s), ...a, children: [(0, l.jsx)("div", { className: "rounded-full mx-auto mt-4 h-2 w-[100px] bg-gray-100" }), e] })] }));
            m.displayName = "DrawerContent";
            const g = ({ className: e, ...s }) => (0, l.jsx)("div", { className: (0, i.cn)("grid gap-1.5 p-4 text-center sm:text-left", e), ...s });
            g.displayName = "DrawerHeader";
            const h = ({ className: e, ...s }) => (0, l.jsx)("div", { className: (0, i.cn)("mt-auto flex flex-col gap-2 p-4", e), ...s });
            h.displayName = "DrawerFooter";
            const f = r.forwardRef(({ className: e, ...s }, a) => (0, l.jsx)(n.dy.Title, { ref: a, className: (0, t.Z)("text-title4 text-text font-medium tracking-tight", e), ...s }));
            f.displayName = n.dy.Title.displayName;
            r.forwardRef(({ className: e, ...s }, a) => (0, l.jsx)(n.dy.Description, { ref: a, className: (0, i.cn)("text-subtext1 text-gray-700", e), ...s })).displayName = n.dy.Description.displayName;
        },
        627219: (e, s, a) => {
            function l() {
                return "undefined" != typeof window && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
            }
            a.d(s, { J: () => l });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-9f69d4bc.7929a4aa.js.map
