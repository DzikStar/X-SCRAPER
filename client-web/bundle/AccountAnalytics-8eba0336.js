"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-8eba0336"],
    {
        423026: (e, t, s) => {
            s.d(t, { f: () => o });
            var a = s(552322),
                r = s(796309),
                l = s(950530),
                i = s(779129),
                n = s(511974);
            function o({ className: e, classNames: t, showOutsideDays: s = !0, ...o }) {
                return (0, a.jsx)(l._W, {
                    showOutsideDays: s,
                    className: (0, r.cn)("text-text p-3", e),
                    classNames: {
                        caption: "flex flex-row justify-center pt-1 relative items-center",
                        caption_label: "text-subtext1 font-medium",
                        cell: "h-9 w-9 text-center text-subtext1 p-0 relative [&:has([aria-selected].day-range-start)]:rounded-l-full [&:has([aria-selected].day-range-end)]:rounded-r-full [&:has([aria-selected].day-outside)]:bg-gray-100 [&:has([aria-selected])]:bg-gray-200 first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full focus-within:relative focus-within:z-20",
                        day: "inline-flex items-center justify-center whitespace-nowrap rounded-full text-subtext1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:border h-9 w-9 p-0 font-normal aria-selected:opacity-100",
                        day_disabled: "text-gray-700 opacity-50",
                        day_hidden: "invisible",
                        day_outside: "day-outside text-gray-700 opacity-50 aria-selected:bg-gray-100 aria-selected:text-gray-700 aria-selected:opacity-30",
                        day_range_end: "day-range-end",
                        day_range_middle: "aria-selected:bg-gray-200 aria-selected:text-gray-700",
                        day_range_start: "day-range-start",
                        day_selected: "bg-brand border-0 text-background hover:bg-brand hover:text-background focus:bg-brand focus:text-background",
                        day_today: "border border-gray-200",
                        head_cell: "text-gray-700 rounded-lg w-9 font-normal text-[0.8rem]",
                        head_row: "flex",
                        month: "space-y-4",
                        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
                        nav: "space-x-1 flex items-center",
                        nav_button: "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-subtext1 font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-background hover:bg-gray-50 text-text h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
                        nav_button_next: "absolute right-1",
                        nav_button_previous: "absolute left-1",
                        row: "flex w-full mt-2",
                        table: "w-full border-collapse space-y-1",
                        ...t,
                    },
                    components: { IconLeft: i.Z, IconRight: n.Z },
                    ...o,
                });
            }
        },
        701883: (e, t, s) => {
            s.d(t, { d: () => l });
            var a = s(552322),
                r = s(143624);
            function l(e) {
                return (0, a.jsx)(r.A, { fill: "hsl(var(--colors-text))", opacity: 0.1, x: e.x || 0, y: e.y || 0, width: e.width || 0, height: e.height || 0 });
            }
        },
        422821: (e, t, s) => {
            s.d(t, { P: () => l });
            var a = s(552322),
                r = s(901893);
            function l(e) {
                return (0, a.jsx)(r.ZP, { ...e });
            }
        },
        110386: (e, t, s) => {
            s.d(t, { i: () => c });
            var a = s(552322),
                r = s(840489),
                l = s(202784),
                i = s(53968),
                n = s(809691);
            function o({ progressColor: e = "white", thumbColor: t = "white", thumbLabels: s, trackColor: o = "gray500", withThumb: c = !0, ...d }) {
                const h = (0, l.useContext)(i.wQ),
                    m = h.values.length > 1,
                    v = `${((h.values[0] ?? 0) / (d.maxValue ?? 100)) * 100}%`,
                    u = `${(((h.values[1] ?? 0) - (h.values[0] ?? 0)) / (d.maxValue ?? 100)) * 100}%`,
                    x = "vertical" === d.orientation ? { height: v } : { width: v },
                    g = "vertical" === d.orientation ? { height: u } : { width: u };
                return (0, a.jsx)(i.Uj, { className: (0, r.Z)("flex w-6 cursor-pointer items-center", "vertical" === d.orientation ? "h-full w-6 flex-col-reverse" : "h-6 w-full"), children: ({ state: h }) => (0, a.jsxs)(l.Fragment, { children: [(0, a.jsx)("div", { className: (0, r.Z)(n.z7[e], "vertical" === d.orientation ? "w-0.5" : "h-0.5"), style: x }), (0, a.jsx)("div", { className: (0, r.Z)(!m && "grow", n.z7[o], "vertical" === d.orientation ? "w-0.5" : "h-0.5"), style: m ? g : {} }), m && (0, a.jsx)("div", { className: (0, r.Z)("grow", n.z7[e], "vertical" === d.orientation ? "w-0.5" : "h-0.5") }), c && h.values.map((e, l) => (0, a.jsx)(i.gs, { className: (0, r.Z)("rounded-full h-4 w-4 shadow-md", n.z7[t]), style: { transform: "none" }, index: l, ...(s?.[l] && { "aria-label": s[l] }) }, e))] }) });
            }
            function c(e) {
                return (0, a.jsx)(i.iR, { ...e, className: (0, r.Z)("relative flex flex-col", "vertical" === e.orientation ? "h-full" : "w-full"), ref: void 0, children: (0, a.jsx)(o, { ...e }) });
            }
        },
        358595: (e, t, s) => {
            s.d(t, { C: () => o });
            var a = s(552322),
                r = s(549815),
                l = s(110929),
                i = s(796309);
            const n = (0, l.j)("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-subtext3 font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90", secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90", destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40", outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground" } }, defaultVariants: { variant: "default" } });
            function o({ className: e, variant: t, asChild: s = !1, ...l }) {
                const o = s ? r.g7 : "span";
                return (0, a.jsx)(o, { "data-slot": "badge", className: (0, i.cn)(n({ variant: t }), e), ...l });
            }
        },
        407250: (e, t, s) => {
            s.d(t, { Ol: () => n, Zb: () => i, aY: () => c, ll: () => o });
            var a = s(552322),
                r = s(202784),
                l = s(796309);
            const i = r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("rounded-xl border bg-card text-text shadow", e), ...t }));
            i.displayName = "Card";
            const n = r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("flex flex-col space-y-1.5 p-6", e), ...t }));
            n.displayName = "CardHeader";
            const o = r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("font-semibold leading-none tracking-tight", e), ...t }));
            o.displayName = "CardTitle";
            r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("text-subtext2 text-gray-700", e), ...t })).displayName = "CardDescription";
            const c = r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("p-6 pt-0", e), ...t }));
            c.displayName = "CardContent";
            r.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { ref: s, className: (0, l.cn)("flex items-center p-6 pt-0", e), ...t })).displayName = "CardFooter";
        },
        323788: (e, t, s) => {
            s.d(t, { Bw: () => x, Ph: () => d, Ql: () => g, i4: () => m, ki: () => h });
            var a = s(552322),
                r = s(734670),
                l = s(202784),
                i = s(796309),
                n = s(882506),
                o = s(864207),
                c = s(522302);
            const d = r.fC,
                h = (r.ZA, r.B4),
                m = l.forwardRef(({ children: e, className: t, ...s }, l) => (0, a.jsxs)(r.xz, { ref: l, className: (0, i.cn)("bg-background ring-offset-background focus:ring-primary flex h-10 w-full items-center justify-between rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:text-gray-700 [&>span]:line-clamp-1", t), ...s, children: [e, (0, a.jsx)(r.JO, { asChild: !0, children: (0, a.jsx)(n.Z, { className: "ml-2 h-4 w-4 opacity-50" }) })] }));
            m.displayName = r.xz.displayName;
            const v = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)(r.u_, { ref: s, className: (0, i.cn)("flex cursor-default items-center justify-center py-1", e), ...t, children: (0, a.jsx)(o.Z, { className: "h-4 w-4" }) }));
            v.displayName = r.u_.displayName;
            const u = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)(r.$G, { ref: s, className: (0, i.cn)("flex cursor-default items-center justify-center py-1", e), ...t, children: (0, a.jsx)(n.Z, { className: "h-4 w-4" }) }));
            u.displayName = r.$G.displayName;
            const x = l.forwardRef(({ children: e, className: t, position: s = "popper", ...l }, n) => (0, a.jsx)(r.h_, { children: (0, a.jsxs)(r.VY, { ref: n, className: (0, i.cn)("bg-background text-text data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-lg border shadow-md", "popper" === s && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", t), position: s, ...l, children: [(0, a.jsx)(v, {}), (0, a.jsx)(r.l_, { className: (0, i.cn)("p-1", "popper" === s && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"), children: e }), (0, a.jsx)(u, {})] }) }));
            x.displayName = r.VY.displayName;
            l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)(r.__, { ref: s, className: (0, i.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", e), ...t })).displayName = r.__.displayName;
            const g = l.forwardRef(({ children: e, className: t, showIndicator: s = !0, ...l }, n) => (0, a.jsxs)(r.ck, { ref: n, className: (0, i.cn)("focus:bg-gray-0 focus:text-text relative flex w-full cursor-pointer select-none items-center rounded py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t), ...l, children: [s && (0, a.jsx)("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: (0, a.jsx)(r.wU, { children: (0, a.jsx)(c.Z, { className: "h-4 w-4" }) }) }), (0, a.jsx)(r.eT, { children: e })] }));
            g.displayName = r.ck.displayName;
            l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)(r.Z0, { ref: s, className: (0, i.cn)("bg-muted -mx-1 my-1 h-px", e), ...t })).displayName = r.Z0.displayName;
        },
        236379: (e, t, s) => {
            s.d(t, { RM: () => o, SC: () => d, iA: () => i, pj: () => m, ss: () => h, xD: () => n, yt: () => c });
            var a = s(552322),
                r = s(796309),
                l = s(202784);
            const i = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("div", { className: "relative w-full overflow-auto", children: (0, a.jsx)("table", { ref: s, className: (0, r.cn)("text-subtext1 w-full caption-bottom", e), ...t }) }));
            i.displayName = "Table";
            const n = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("thead", { ref: s, className: (0, r.cn)("[&_tr]:border-b", e), ...t }));
            n.displayName = "TableHeader";
            const o = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("tbody", { ref: s, className: (0, r.cn)("[&_tr:last-child]:border-0", e), ...t }));
            o.displayName = "TableBody";
            const c = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("tfoot", { ref: s, className: (0, r.cn)("border-t bg-gray-100/50 font-medium [&>tr]:last:border-b-0", e), ...t }));
            c.displayName = "TableFooter";
            const d = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("tr", { ref: s, className: (0, r.cn)("border-b transition-colors hover:bg-gray-100/50 data-[state=selected]:bg-gray-100", e), ...t }));
            d.displayName = "TableRow";
            const h = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("th", { ref: s, className: (0, r.cn)("h-12 px-4 text-left align-middle font-medium text-gray-700 [&:has([role=checkbox])]:pr-0", e), ...t }));
            h.displayName = "TableHead";
            const m = l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("td", { ref: s, className: (0, r.cn)("p-4 align-middle [&:has([role=checkbox])]:pr-0", e), ...t }));
            m.displayName = "TableCell";
            l.forwardRef(({ className: e, ...t }, s) => (0, a.jsx)("caption", { ref: s, className: (0, r.cn)("text-subtext1 mt-4 text-gray-700", e), ...t })).displayName = "TableCaption";
        },
        816778: (e, t, s) => {
            s.d(t, { SP: () => o, dr: () => n, mQ: () => i, nU: () => c });
            var a = s(552322),
                r = s(362834),
                l = s(796309);
            function i({ className: e, ...t }) {
                return (0, a.jsx)(r.fC, { "data-slot": "tabs", className: (0, l.cn)("flex flex-col gap-2", e), ...t });
            }
            function n({ className: e, ...t }) {
                return (0, a.jsx)(r.aV, { "data-slot": "tabs-list", className: (0, l.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1", e), ...t });
            }
            function o({ className: e, ...t }) {
                return (0, a.jsx)(r.xz, { "data-slot": "tabs-trigger", className: (0, l.cn)("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-subtext1 font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", e), ...t });
            }
            function c({ className: e, ...t }) {
                return (0, a.jsx)(r.VY, { "data-slot": "tabs-content", className: (0, l.cn)("flex-1 outline-none", e), ...t });
            }
        },
        853425: (e, t, s) => {
            s.d(t, { X: () => r });
            var a = s(202784);
            const r = (e) => {
                const [t, s] = (0, a.useState)(!1);
                return (
                    (0, a.useEffect)(() => {
                        const t = e.current;
                        function a() {
                            s(!0);
                        }
                        function r() {
                            s(!1);
                        }
                        return (
                            t && (t.addEventListener("mouseenter", a), t.addEventListener("mouseleave", r)),
                            () => {
                                t && (t.removeEventListener("mouseenter", a), t.removeEventListener("mouseleave", r));
                            }
                        );
                    }, [e]),
                    t
                );
            };
        },
        930559: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" }) });
        },
        610922: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M8 6h10v10h-2V9.41L5.957 19.46l-1.414-1.42L14.586 8H8V6z" }) });
        },
        151634: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" }) });
        },
        841707: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M7 4V3h2v1h6V3h2v1h1.5C19.89 4 21 5.12 21 6.5v12c0 1.38-1.11 2.5-2.5 2.5h-13C4.12 21 3 19.88 3 18.5v-12C3 5.12 4.12 4 5.5 4H7zm0 2H5.5c-.27 0-.5.22-.5.5v12c0 .28.23.5.5.5h13c.28 0 .5-.22.5-.5v-12c0-.28-.22-.5-.5-.5H17v1h-2V6H9v1H7V6zm0 6h2v-2H7v2zm0 4h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm4-4h2v-2h-2v2z" }) });
        },
        882506: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" }) });
        },
        864207: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M12 6.59l8.457 8.45-1.414 1.42L12 9.41l-7.043 7.05-1.414-1.42L12 6.59z" }) });
        },
        470675: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M12 3.75c-4.55 0-8.25 3.69-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.69 8.25-8.25S16.56 3.75 12 3.75zM1.75 12C1.75 6.34 6.34 1.75 12 1.75S22.25 6.34 22.25 12 17.66 22.25 12 22.25 1.75 17.66 1.75 12zM11 6h2v5.28l3.82 1.27-.63 1.9L11 12.72V6z" }) });
        },
        529582: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" }) });
        },
        960806: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM7 20H5.5c-.28 0-.5-.22-.5-.5v-2h2V20zm0-4.5H5V13h2v2.5zM7 11H5V8.5h2V11zm0-4.5H5v-2c0-.28.22-.5.5-.5H7v2.5zM15 20H9v-7h6v7zm0-9H9V4h6v7zm4 8.5c0 .28-.22.5-.5.5H17v-2.5h2v2zm0-4h-2V13h2v2.5zm0-4.5h-2V8.5h2V11zm0-4.5h-2V4h1.5c.28 0 .5.22.5.5v2z" }) });
        },
        251161: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M10 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM6 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4zm13 4v3h2v-3h3V8h-3V5h-2v3h-3v2h3zM3.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C13.318 13.65 11.838 13 10 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C5.627 11.85 7.648 11 10 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H1.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46z" }) });
        },
        165590: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M11.99 16l-5.7-5.7L7.7 8.88l3.29 3.3V2.59h2v9.59l3.3-3.3 1.41 1.42-5.71 5.7zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" }) });
        },
        504578: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("polygon", { points: "5 13 8.414 13 12.197 9.217 16.276 11.256 20.781 5.625 19.219 4.375 15.724 8.744 11.803 6.783 7.586 11 5 11 5 3 3 3 3 21 21 21 21 19 5 19 5 13" }) });
        },
        832179: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M3.457 2.04L9 7.59V3h2v8H3V9h4.586L2.043 3.46l1.414-1.42zM19.5 8H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
        },
        373702: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M13 3h8v8h-2V6.41l-5.043 5.05-1.414-1.42L17.586 5H13V3zm-1.543 10.96L6.414 19H11v2H3v-8h2v4.59l5.043-5.05 1.414 1.42z" }) });
        },
        419374: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M3 3h8v2H6.414l5.543 5.54-1.414 1.42L5 6.41V11H3V3zm16.5 5H14V6h5.5C20.881 6 22 7.12 22 8.5v11c0 1.38-1.119 2.5-2.5 2.5h-11C7.119 22 6 20.88 6 19.5V14h2v5.5c0 .28.224.5.5.5h11c.276 0 .5-.22.5-.5v-11c0-.28-.224-.5-.5-.5z" }) });
        },
        933544: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" }) });
        },
        385059: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" }) });
        },
        942027: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M4 2h5v20H4V2zm11 20h5V2h-5v20z" }) });
        },
        345343: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" }) });
        },
        882040: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M6.662 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.416 0 2.66.547 3.656 1.53-1.942 1.373-3.513 3.758-4.004 7.47zM7 8c1.657 0 3-1.346 3-3S8.657 2 7 2 4 3.346 4 5s1.343 3 3 3zm10.616 1.27C18.452 8.63 19 7.632 19 6.5 19 4.57 17.433 3 15.5 3S12 4.57 12 6.5c0 1.132.548 2.13 1.384 2.77.589.451 1.317.73 2.116.73s1.527-.279 2.116-.73zM8.501 19.972l-.029 1.027h14.057l-.029-1.027c-.184-6.618-3.736-8.977-7-8.977s-6.816 2.358-7 8.977z" }) });
        },
        140213: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z" }) });
        },
        16246: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M9.5 16.45v-8.9l7 4.45-7 4.45zM22.25 12c0 5.66-4.589 10.25-10.25 10.25S1.75 17.66 1.75 12 6.339 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.556 0 8.25-3.69 8.25-8.25S16.556 3.75 12 3.75 3.75 7.44 3.75 12s3.694 8.25 8.25 8.25z" }) });
        },
        170028: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M21 12L4 2v20l17-10z" }) });
        },
        250415: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z" }) });
        },
        57301: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M12 6.229C5.269 7.328 1.995 12.498 2 22.001h2c0-1.914.705-3.537 2.095-4.825 1.5-1.391 3.739-2.259 5.905-2.331v5.507L23.259 10.5 12 .648v5.581zm2 1.773V5.056l6.222 5.443L14 15.942v-3.004l-.924-.07c-.265-.021-.531-.03-.798-.03-2.765 0-5.594 1.064-7.542 2.87l-.129.122c1.13-4.802 3.874-7.242 8.499-7.733l.895-.095z" }) });
        },
        39183: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M15 1.06v21.88L6.68 17H3.5C2.12 17 1 15.88 1 14.5v-5C1 8.12 2.12 7 3.5 7h3.18L15 1.06zM6 9H3.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H6V9zm2 6.49l5 3.57V4.94L8 8.51v6.98zm10.5-6.9l2 2 2-2L23.91 10l-2 2 2 2-1.41 1.41-2-2-2 2L17.09 14l2-2-2-2 1.41-1.41z" }) });
        },
        735585: (e, t, s) => {
            s.d(t, { Z: () => r });
            var a = s(552322);
            const r = (e) => (0, a.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", width: "1em", height: "1em", display: "flex", fill: "currentColor", role: "img", ...e, children: (0, a.jsx)("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" }) });
        },
        288037: (e, t, s) => {
            s.d(t, { E: () => l, g: () => i });
            var a = s(202784),
                r = s(233667);
            const l = (0, a.createContext)({ api: { set currentTime(e) {}, set muted(e) {}, pause: () => {}, play: () => {}, toggleFullscreen: () => {}, togglePictureInPicture: () => {}, set volume(e) {} }, state: r.E });
            function i() {
                return (0, a.useContext)(l);
            }
        },
        325033: (e, t, s) => {
            s.d(t, { J: () => o });
            var a = s(552322),
                r = s(369818),
                l = s(202784),
                i = s(288037),
                n = s(233667);
            function o({ children: e, className: t, src: s, startPosition: o, ...c }) {
                const [d, h] = (0, l.useReducer)(n.I, n.E),
                    m = (0, l.useRef)(null),
                    v = (0, l.useRef)(),
                    u = (0, l.useRef)(null);
                (0, l.useEffect)(() => {
                    const e = u.current;
                    if (!s || !e) return;
                    const t = new AbortController();
                    if (
                        (e.addEventListener(
                            "ended",
                            () => {
                                h({ type: "SET_ENDED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "pause",
                            () => {
                                h({ payload: !0, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "play",
                            () => {
                                h({ payload: !1, type: "SET_PAUSED" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "seeked",
                            () => {
                                h({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "timeupdate",
                            () => {
                                h({ payload: e.currentTime, type: "TIME_UPDATE" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "volumechange",
                            () => {
                                h({ payload: e.muted, type: "SET_MUTED" }), h({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        e.addEventListener(
                            "loadedmetadata",
                            () => {
                                h({ payload: e.duration, type: "SET_DURATION" }), h({ payload: e.muted, type: "SET_MUTED" }), h({ payload: e.volume, type: "SET_VOLUME" });
                            },
                            { signal: t.signal },
                        ),
                        "application/x-mpegURL" !== c.type)
                    )
                        return void (e.src = s);
                    const a = new r.ZP({ startLevel: -1, startPosition: o });
                    return (
                        a.on(r.ZP.Events.LEVEL_SWITCHED, (e, t) => {
                            h({ payload: t, type: "LEVEL_SWITCHED" });
                        }),
                        a.on(r.ZP.Events.MANIFEST_PARSED, (e, t) => {
                            h({ payload: t, type: "MANIFEST_PARSED" });
                        }),
                        a.loadSource(s),
                        a.attachMedia(e),
                        (v.current = a),
                        () => {
                            t.abort(), a && (a.detachMedia(), a.destroy());
                        }
                    );
                }, [c.type, s, o]);
                const x = (0, l.useMemo)(
                    () => ({
                        set currentTime(e) {
                            u.current && (u.current.currentTime = e);
                        },
                        set muted(e) {
                            u.current && (u.current.muted = e);
                        },
                        pause() {
                            u.current?.pause();
                        },
                        play() {
                            u.current?.play();
                        },
                        toggleFullscreen() {
                            document.fullscreenElement === m.current
                                ? (document.exitFullscreen(), h({ payload: !1, type: "SET_FULLSCREEN" }))
                                : m.current?.requestFullscreen().then(() => {
                                      h({ payload: !0, type: "SET_FULLSCREEN" });
                                  });
                        },
                        togglePictureInPicture() {
                            document.pictureInPictureElement === u.current
                                ? document.exitPictureInPicture().then(() => {
                                      h({ payload: !1, type: "SET_PICTURE_IN_PICTURE" });
                                  })
                                : u.current?.requestPictureInPicture().then(() => {
                                      h({ payload: !0, type: "SET_PICTURE_IN_PICTURE" });
                                  });
                        },
                        set level(e) {
                            v.current && (v.current.currentLevel = e);
                        },
                        set volume(e) {
                            u.current && (u.current.volume = e);
                        },
                    }),
                    [],
                );
                return (0, a.jsxs)("div", { ref: m, className: t, children: [(0, a.jsx)("video", { height: "100%", ref: u, width: "100%", ...c }), (0, a.jsx)(i.E.Provider, { value: { api: x, state: d }, children: e })] });
            }
        },
        233667: (e, t, s) => {
            s.d(t, { E: () => a, I: () => r });
            const a = { currentLevel: -1, currentTime: 0, duration: 0, ended: !1, isFullscreen: !1, isPictureInPicture: !1, levels: [], muted: !0, paused: !0, volume: 0 };
            function r(e, t) {
                switch (t.type) {
                    case "LEVEL_SWITCHED":
                        return { ...e, currentLevel: t.payload.level };
                    case "MANIFEST_PARSED":
                        return { ...e, levels: t.payload.levels };
                    case "SET_DURATION":
                        return { ...e, duration: t.payload };
                    case "SET_ENDED":
                        return { ...e, ended: !0 };
                    case "SET_FULLSCREEN":
                        return { ...e, isFullscreen: t.payload };
                    case "SET_MUTED":
                        return { ...e, muted: t.payload };
                    case "SET_PAUSED":
                        return { ...e, paused: t.payload };
                    case "SET_PICTURE_IN_PICTURE":
                        return { ...e, isPictureInPicture: t.payload };
                    case "SET_VOLUME":
                        return { ...e, volume: t.payload };
                    case "TIME_UPDATE":
                        return { ...e, ...(e.ended && { ended: !1 }), currentTime: t.payload };
                    default:
                        return e;
                }
            }
        },
        983486: (e, t, s) => {
            function a(e, t = "milliseconds") {
                const s = [],
                    a = e / (60 * ("milliseconds" === t ? 1e3 : 1) * 60),
                    r = Math.floor(a),
                    l = 60 * (a - r),
                    i = Math.floor(l),
                    n = 60 * (l - i),
                    o = Math.floor(n);
                return r && s.push(r.toString().padStart(2, "0")), s.push(i.toString().padStart(2, "0")), s.push(o.toString().padStart(2, "0")), s.join(":");
            }
            s.d(t, { p: () => a });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-8eba0336.e81ed6aa.js.map
