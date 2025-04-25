"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Insights-8eba0336"],
    {
        74451: (e, s, l) => {
            l.d(s, { Cf: () => o, m3: () => x, uY: () => m });
            var a = l(552322),
                t = l(332161),
                r = l(445178),
                i = l(960384),
                n = l(31674),
                c = l(430962),
                d = l(602077);
            const o = ({ count: e, percentChange: s, title: l }) => {
                    const c = (s ?? 0) > 0 ? r.Z : i.Z;
                    return (0, a.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, a.jsx)(t.x, { color: "gray700", size: "subtext3", children: l }), (0, a.jsxs)("div", { className: "flex gap-4", children: [(0, a.jsx)(t.x, { weight: "bold", size: "title4", children: e ? (0, d.M)(e) : "---" }), s && (0, a.jsxs)("div", { className: (0, n.cn)("text-subtext1 flex items-center", { "text-green-500": s > 0, "text-red-500": s < 0 }), children: [(0, a.jsx)(c, {}), (0, a.jsxs)("div", { className: "text-subtext1", children: [e ? (0, d.M)(s) : "--", "%"] })] })] })] });
                },
                x = ({ title: e = " " }) => (0, a.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, a.jsx)(t.x, { color: "gray700", size: "subtext3", children: e }), (0, a.jsx)("div", { className: "flex h-7 w-20 animate-pulse gap-4 rounded bg-gray-200" })] }),
                m = ({ title: e }) => {
                    const { business: s } = (0, c.M1)();
                    return (0, a.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, a.jsx)("div", { className: "flex items-center gap-2 text-gray-500", children: (0, a.jsx)(t.x, { color: "gray500", size: "subtext3", children: e }) }), (0, a.jsx)(t.x, { color: "gray700", size: "subtext2", children: s.radar.pleaseTryAgainLater })] });
                };
        },
        964522: (e, s, l) => {
            l.d(s, { N: () => n });
            var a = l(552322),
                t = l(31674),
                r = l(202784),
                i = l(660237);
            const n = ({ className: e, defaultValue: s, onSelect: l, options: n }) => {
                const [c, d] = (0, r.useState)(s);
                (0, r.useEffect)(() => {
                    d(s);
                }, [s]);
                return (0, a.jsx)("div", {
                    className: (0, t.cn)("flex gap-2", e),
                    children: n.map((e) =>
                        (0, a.jsx)(
                            i.C,
                            {
                                id: e.value.toString(),
                                isActive: c === e.value,
                                onToggle: () => {
                                    return (s = e.value), d(s), void l?.(s);
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
        727760: (e, s, l) => {
            l.d(s, { U: () => h });
            var a = l(552322),
                t = l(772669),
                r = l(993165),
                i = l(332161),
                n = l(445178),
                c = l(568366);
            const d = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M11.57 11.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94zM22.25 12c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.56 0 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75 3.75 7.44 3.75 12s3.69 8.25 8.25 8.25z" }) });
            var o = l(914722),
                x = l(202784),
                m = l(430962),
                u = l(847970);
            const g = ({ rightContent: e, ...s }) => {
                    const { business: l } = (0, m.M1)();
                    return (0, a.jsxs)("div", { className: "flex cursor-auto flex-col gap-2 rounded-xl border border-gray-200 bg-gray-50/50 p-2", ...s, children: [(0, a.jsxs)("div", { className: "flex items-center justify-between", children: [(0, a.jsx)(i.x, { size: "subtext1", color: "gray1000", children: l.radar.usingAdvancedSearch }), e] }), (0, a.jsx)("div", { className: "grid grid-cols-[auto,auto,1fr] gap-x-4 gap-y-2.5 text-gray-700", children: l.radar.advancedSearchExamples.map((e) => (0, a.jsxs)(x.Fragment, { children: [(0, a.jsx)(i.x, { size: "subtext3", color: "gray900", className: "whitespace-nowrap", children: e.query }), (0, a.jsx)(u.Z, { className: "size-3 shrink-0 self-center text-gray-700" }), (0, a.jsx)(i.x, { size: "subtext3", color: "gray900", children: e.description })] }, e.query)) })] });
                },
                h = ({ disabled: e, onQueryChange: s, onSubmit: l, query: u }) => {
                    const { business: h } = (0, m.M1)(),
                        f = (0, x.useRef)(null),
                        [v, p] = (0, x.useState)(!1);
                    return (0, a.jsxs)("div", {
                        className: "flex w-full flex-col gap-8",
                        children: [
                            (0, a.jsx)("div", {
                                className: "rounded-full bg-gray-50/50",
                                children: (0, a.jsx)(t._, {
                                    ref: f,
                                    value: u,
                                    onChange: (e) => s(e.currentTarget.value),
                                    onKeyDown: (s) => {
                                        "Enter" === s.key && u.trim().length > 0 && !e && l();
                                    },
                                    placeholder: h.radar.searchPlaceholder,
                                    rightContent: (0, a.jsx)(r.z, { className: "mr-2 px-0", variant: "insightsBright", size: "xSmallCompact", onClick: l, disabled: 0 === u.trim().length || e, children: (0, a.jsx)(n.Z, { className: "text-background size-[14px] font-bold" }) }),
                                }),
                            }),
                            (0, a.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    (0, a.jsx)(r.z, {
                                        variant: "insightsSecondary",
                                        size: "xSmallCompact",
                                        onClick: () => {
                                            f.current && (f.current.value = ""), s("");
                                        },
                                        children: (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [(0, a.jsx)(c.Z, { className: "size-[12px] text-gray-700" }), (0, a.jsx)(i.x, { size: "subtext3", children: h.radar.clear })] }),
                                    }),
                                    (0, a.jsxs)(r.z, { variant: "insightsSecondary", size: "xSmallCompact", onClick: () => p(!v), children: [(0, a.jsx)(d, { className: "size-[12px] shrink-0 text-gray-700" }), (0, a.jsx)(i.x, { size: "subtext3", children: h.radar.examples })] }),
                                ],
                            }),
                            v &&
                                (0, a.jsx)(g, {
                                    rightContent: (0, a.jsx)(r.z, { variant: "insightsGhost", size: "xSmallCompact", onClick: () => p(!1), children: (0, a.jsx)(o.Z, { className: "shrink-0" }) }),
                                    onClick: (e) => {
                                        e.stopPropagation();
                                    },
                                }),
                        ],
                    });
                };
        },
        679671: (e, s, l) => {
            l.d(s, { E2: () => o, I5: () => x, mQ: () => c });
            var a = l(552322),
                t = l(31674),
                r = l(202784),
                i = l(660237);
            const n = (0, r.createContext)({ activeTab: "", setActiveTab: () => {} }),
                c = ({ activeTab: e, children: s, className: l = "", defaultActiveTab: i, onChange: c }) => {
                    const [d, o] = (0, r.useState)(i ?? ""),
                        x = void 0 !== e,
                        m = x ? e : d;
                    return (0, a.jsx)(n.Provider, {
                        value: {
                            activeTab: m,
                            setActiveTab: (e) => {
                                x || o(e), c?.(e);
                            },
                        },
                        children: (0, a.jsx)("div", { className: (0, t.cn)("flex flex-col gap-4", l), children: s }),
                    });
                },
                d = () => (0, r.useContext)(n),
                o = ({ children: e, id: s }) => {
                    const { activeTab: l, setActiveTab: t } = d();
                    return (0, a.jsx)(i.C, { id: s, isActive: l === s, onToggle: t, children: e });
                },
                x = ({ children: e, id: s }) => {
                    const { activeTab: l } = d();
                    return l !== s ? null : (0, a.jsx)(a.Fragment, { children: e });
                };
        },
        660237: (e, s, l) => {
            l.d(s, { C: () => i });
            var a = l(552322),
                t = l(993165),
                r = l(31674);
            const i = ({ children: e, id: s, isActive: l, onToggle: i }) => (0, a.jsx)(t.z, { onClick: () => i(s || ""), variant: l ? "insightsFilled" : "insightsGhost", size: "xSmallCompact", children: (0, a.jsx)("div", { className: (0, r.cn)("text-subtext3", { "font-bold": l, "font-normal": !l }), children: e }) });
        },
        283840: (e, s, l) => {
            l.d(s, { d: () => t, s: () => a });
            const a = 864e5,
                t = 36e5;
        },
        187468: (e, s, l) => {
            l.d(s, { H: () => o });
            var a = l(552322),
                t = l(260816),
                r = l(430962),
                i = l(595133),
                n = l(833819),
                c = l(742266),
                d = l(749612);
            const o = ({ settings: e }) => {
                const { business: s } = (0, r.M1)();
                return (0, a.jsx)(d.Kw, { settings: e, children: (0, a.jsxs)("div", { className: "flex h-full flex-col gap-[10px] p-2 md:p-4", children: [(0, a.jsx)(i.h, { title: s.radar.header, Icon: (0, a.jsx)(t.Z, { className: "text-text size-7" }), beta: !1, className: "flex", children: (0, a.jsx)(c.i, { fullWidth: !0 }) }), (0, a.jsx)(n.e, {})] }) });
            };
        },
        440638: (e, s, l) => {
            l.d(s, { u: () => n });
            var a = l(552322),
                t = l(959638),
                r = l(797165),
                i = l(749612);
            function n({ id: e, settings: s }) {
                return (0, a.jsx)(i.Kw, { settings: s, children: (0, a.jsx)(t.NR, { id: e, children: (0, a.jsx)(r.V, {}) }) });
            }
        },
        122778: (e, s, l) => {
            l.d(s, { w: () => d });
            var a = l(552322),
                t = l(193686),
                r = l(202784),
                i = l(749612),
                n = l(832138),
                c = l(704877);
            const d = ({ settings: e }) => (0, a.jsx)(i.Kw, { settings: e, children: (0, a.jsx)(c.Wi, { children: (0, a.jsx)(r.Suspense, { fallback: (0, a.jsx)("div", { className: "flex h-full w-full items-center justify-center", children: (0, a.jsx)(t.P, { size: "large", color: "text" }) }), children: (0, a.jsx)(n.L, {}) }) }) });
        },
        602077: (e, s, l) => {
            l.d(s, { M: () => t });
            const a = new Intl.NumberFormat("en-US", { maximumFractionDigits: 1, notation: "compact", roundingMode: "trunc" });
            function t(e) {
                return Math.abs(e) < 1e4 ? Intl.NumberFormat("en-US").format(e) : a.format(e);
            }
        },
        942346: (e, s, l) => {
            l.d(s, { j: () => a });
            const a = ({ granularity: e, id: s, timeRange: l }) => ({ from_time: Math.floor(l.fromDate.getTime() / 1e3), granularity: e, id: s, timezone_offset: 0, to_time: Math.floor(l.toDate.getTime() / 1e3) });
        },
        157270: (e, s, l) => {
            l.r(s), l.d(s, { default: () => t });
            const a = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "AiTrend",
                    selections: [
                        { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, action: "THROW", path: "rest_id" },
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
                            path: "core",
                        },
                    ],
                    type: "AiTrend",
                    abstractKey: null,
                    hash: "d4fd83e7d283712a1b27c03bf4ab28ff",
                },
                t = a;
        },
        821730: (e, s, l) => {
            l.d(s, { A: () => o });
            var a = l(552322),
                t = l(812115),
                r = l(332161),
                i = l(42630),
                n = l(253511),
                c = l(889906);
            const d = l(157270),
                o = ({ aiTrend: e }) => {
                    const s = (0, c.useFragment)(d, e),
                        l = Date.now() - new Date(s.core.created_at_ms).getTime() < 36e5;
                    return (0, a.jsxs)(t.r, { href: `https://x.com/i/trending/${s.rest_id}`, target: "_blank", className: "flex gap-2", children: [(0, a.jsxs)("div", { className: "flex w-full flex-col gap-1", children: [(0, a.jsx)(r.x, { size: "subtext1", weight: "bold", numberOfLines: 2, children: s.core.name }), (0, a.jsx)("div", { className: "flex items-center", children: (0, a.jsxs)(i.S, { children: [l ? (0, a.jsx)(r.x, { size: "subtext2", color: "gray700", children: "Trending Now" }) : (0, a.jsx)(n.E, { color: "gray700", size: "subtext2", timestamp: s.core.created_at_ms }), (0, a.jsx)(r.x, { size: "subtext2", color: "gray700", children: s.core.category })] }) })] }), s.thumbnail?.original_img_url && (0, a.jsx)("div", { className: "h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-gray-100", children: (0, a.jsx)("img", { loading: "lazy", src: s.thumbnail.original_img_url, alt: s.core.name, className: "h-full w-full object-cover" }) })] });
                };
        },
        493652: (e, s, l) => {
            l.d(s, { E: () => n });
            var a = l(552322),
                t = l(202784),
                r = l(31674);
            const i = { "2xLarge": "rounded-2xl", "3xLarge": "rounded-3xl", full: "rounded-full", large: "rounded-lg", medium: "rounded-md", none: "rounded-none", small: "rounded-sm", xLarge: "rounded-xl", default: "rounded" };
            function n({ borderRadius: e = "large", borderWidth: s = 2, children: l, className: n = "", direction: c = "clockwise", enabled: d = !0, gradientEndColor: o = "hsl(var(--colors-blue-800) / 0.6)", gradientStartColor: x = "hsl(var(--colors-blue-500) / 0.8)", speed: m = 1 }) {
                const [u, g] = (0, t.useState)(0),
                    h = "clockwise" === c ? x : o,
                    f = "clockwise" === c ? o : x;
                return (
                    (0, t.useEffect)(() => {
                        if (!d || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
                        const e = setInterval(() => {
                            g((e) => ("clockwise" === c ? (e + m) % 360 : (e - m) % 360));
                        }, 16);
                        return () => clearInterval(e);
                    }, [c, d, m]),
                    (0, a.jsxs)("div", { className: (0, r.cn)("relative inline-block w-full", i[e]), children: [(0, a.jsx)("div", { className: (0, r.cn)("absolute inset-0 transition-opacity", { "opacity-0": !d, "opacity-100": d }, i[e]), style: { background: `conic-gradient(from ${u}deg at 50% 50%, transparent 0deg, ${h} 20deg, ${f} 60deg, transparent 80deg)` } }), (0, a.jsx)("div", { className: (0, r.cn)("bg-background relative p-4", i[e], n), style: { margin: `${s}px` }, children: l })] })
                );
            }
        },
        519590: (e, s, l) => {
            l.d(s, { OX: () => g, Qz: () => d, dy: () => c, iI: () => f, sc: () => u, uh: () => x, ze: () => h });
            var a = l(552322),
                t = l(840489),
                r = l(202784),
                i = l(194787),
                n = l(31674);
            const c = ({ shouldScaleBackground: e = !0, ...s }) => (0, a.jsx)(i.dy.Root, { shouldScaleBackground: e, ...s });
            c.displayName = "Drawer";
            const d = i.dy.Trigger,
                o = i.dy.Portal,
                x = i.dy.Close,
                m = r.forwardRef(({ className: e, ...s }, l) => (0, a.jsx)(i.dy.Overlay, { ref: l, className: (0, n.cn)("fixed inset-0 z-50 bg-black/80", e), ...s }));
            m.displayName = i.dy.Overlay.displayName;
            const u = r.forwardRef(({ children: e, className: s, ...l }, t) => (0, a.jsxs)(o, { children: [(0, a.jsx)(m, {}), (0, a.jsxs)(i.dy.Content, { ref: t, className: (0, n.cn)("bg-background fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border border-gray-100", s), ...l, children: [(0, a.jsx)("div", { className: "rounded-full mx-auto mt-4 h-2 w-[100px] bg-gray-100" }), e] })] }));
            u.displayName = "DrawerContent";
            const g = ({ className: e, ...s }) => (0, a.jsx)("div", { className: (0, n.cn)("grid gap-1.5 p-4 text-center sm:text-left", e), ...s });
            g.displayName = "DrawerHeader";
            const h = ({ className: e, ...s }) => (0, a.jsx)("div", { className: (0, n.cn)("mt-auto flex flex-col gap-2 p-4", e), ...s });
            h.displayName = "DrawerFooter";
            const f = r.forwardRef(({ className: e, ...s }, l) => (0, a.jsx)(i.dy.Title, { ref: l, className: (0, t.Z)("text-title4 text-text font-medium tracking-tight", e), ...s }));
            f.displayName = i.dy.Title.displayName;
            r.forwardRef(({ className: e, ...s }, l) => (0, a.jsx)(i.dy.Description, { ref: l, className: (0, n.cn)("text-subtext1 text-gray-700", e), ...s })).displayName = i.dy.Description.displayName;
        },
        24212: (e, s, l) => {
            l.d(s, { Z: () => t });
            var a = l(552322);
            const t = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" }) });
        },
        488809: (e, s, l) => {
            l.d(s, { Z: () => t });
            var a = l(552322);
            const t = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M11.998 22c4.473 0 9-1.374 9-4V6c0-2.626-4.527-4-9-4s-9 1.374-9 4v12c0 2.626 4.527 4 9 4Zm0-18c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2Zm-7 4.607c3.473 1.84 10.527 1.84 14 0V12c0 .58-2.453 2-7 2s-7-1.42-7-2V8.607Zm0 6c3.473 1.84 10.527 1.84 14 0V18c0 .58-2.453 2-7 2s-7-1.42-7-2v-3.393Z" }) });
        },
        1280: (e, s, l) => {
            l.d(s, { Z: () => t });
            var a = l(552322);
            const t = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2zm-6.866-4l.847-6.698C6.364 6.272 8.941 4 11.996 4s5.627 2.268 6.013 5.295L18.864 16H5.134z" }) });
        },
        242749: (e, s, l) => {
            l.d(s, { Z: () => t });
            var a = l(552322);
            const t = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" }) });
        },
        260816: (e, s, l) => {
            l.d(s, { Z: () => t });
            var a = l(552322);
            const t = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M12 3.75c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25 8.25-3.694 8.25-8.25c0-.552.448-1 1-1s1 .448 1 1c0 5.66-4.59 10.25-10.25 10.25S1.75 17.66 1.75 12 6.34 1.75 12 1.75c2.37 0 4.554.805 6.29 2.156.22.17.43.35.635.537.067.061.133.123.197.186.022.02.042.042.061.064l.067.061c.39.39.39 1.024 0 1.414l-6.537 6.537c-.39.39-1.023.39-1.414 0-.39-.39-.39-1.024 0-1.414l1.997-1.998C12.904 9.105 12.465 9 12 9c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3c0-.552.448-1 1-1s1 .448 1 1c0 2.761-2.239 5-5 5s-5-2.239-5-5 2.239-5 5-5c1.019 0 1.969.306 2.76.83l2.326-2.326-.024-.02C15.664 4.398 13.909 3.75 12 3.75z" }) });
        },
        93699: (e, s, l) => {
            function a() {
                return "undefined" != typeof window && ("ontouchstart" in window || navigator.maxTouchPoints > 0);
            }
            l.d(s, { J: () => a });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Insights-8eba0336.63092fba.js.map
